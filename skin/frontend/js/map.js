(function ($) {
    var _isAjax = false;
    var address_list_height = 0;
    shape = {coords: [1, 1, 1, 20, 18, 20, 18, 1], type: 'poly'};
    var gotoMapButton;
    var marker_url;
    var _map;
    var _markersArray = [];
    var infoBoxes = [];
    var icon_path = 'skin/frontend/images/';
    var choosenStoreTitle = null;
    $.distribution = function () {
    };
    $.distribution.option = {'mapId': 'map-canvas'};
    $.distribution.init = function () {
        google.maps.event.addDomListener(window, 'load', $.distribution.initialize());
        gotoMapButton = document.createElement("div");
        gotoMapButton.setAttribute("style", "margin: 5px; border: 1px solid; padding: 1px 12px; font: bold 11px Roboto, Arial, sans-serif; color: #000000; background-color: #FFFFFF; cursor: pointer;");
        gotoMapButton.innerHTML = view_on_map;
        _map.controls[google.maps.ControlPosition.TOP_RIGHT].push(gotoMapButton);
        $.distribution.bindNearestStores();
        var first_distribution = $('.address-list').find('li').first();
        if (first_distribution.length > 0) {
            first_distribution.addClass('active');
            var lng = first_distribution.children('.inner-location').data('lng');
            var lat = first_distribution.children('.inner-location').data('lat');
            var title = first_distribution.children('.inner-location').data('title');
            var image_path = first_distribution.children('.inner-location').data('image');
            var content = first_distribution.children('.inner-location').data('content');
            var phone = first_distribution.children('.inner-location').data('phone');
            if (lng !== '' && lat !== '') {
                var position = {
                    lat: lat,
                    lng: lng,
                    title: title,
                    image_path: image_path,
                    phone: phone,
                    content: content
                };
                choosenStoreTitle = title;
                $.distribution.createMarker(position, shape);
                $.distribution.displayNearestStores(first_distribution.children('.inner-location').data('nearestStores'));
            } else {
                return false;
            }
        }
        $.distribution.chooseLocation();
        $.distribution.responsiveShowHideLocation();
        $.distribution.findArroundMe();
    };
    $.distribution.initialize = function () {
        var mapOptions = {center: {lat: 10.819038, lng: 106.622951}, zoom: 10}
        _map = new google.maps.Map(document.getElementById($.distribution.option.mapId), mapOptions);
    }
    $.distribution.createMarker = function (location, shape) {
        $.distribution.clearMaps();
        var myLatLng = new google.maps.LatLng(location.lat, location.lng);
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: _map,
            animation: google.maps.Animation.DROP,
            shape: shape,
            title: location.title
        });
        marker.content = '<div class="infobox">' + location.title + '</br>Địa chỉ: ' + location.content + '</br>Phone: ' + location.phone + '</br></div>';
        _markersArray.push(marker);
        var latLng = marker.getPosition();
        _map.setCenter(latLng);
        _map.setZoom(15);
        marker_url = encodeURIComponent(marker.getPosition().toUrlValue());
        var boxText = document.createElement("div");
        boxText.innerHTML = marker.content;
        var myOptions = {
            content: boxText,
            disableAutoPan: false,
            pixelOffset: new google.maps.Size(-100, -190),
            zIndex: null,
            boxStyle: {},
            closeBoxMargin: "10px 176px 10px 10px",
            closeBoxURL: "skin/frontend/images/close.gif",
            infoBoxClearance: new google.maps.Size(1, 1)
        };
        var info_box = new InfoBox(myOptions);
        infoBoxes.push(info_box);
        google.maps.event.addListener(marker, 'click', function () {
            for (var i = 0; i < infoBoxes.length; i++) {
                infoBoxes[i].close();
            }
            info_box.open(_map, marker);
            _map.setZoom(15);
            _map.setCenter(marker.getPosition());
        });
        google.maps.event.addDomListenerOnce(gotoMapButton, "click", function () {
            var url = 'https://www.google.com/maps?q=' + marker_url;
            window.open(url);
        });
    }
    $.distribution.chooseLocation = function () {
        $('.address-list').on('click', '.inner-location', function (event) {
            event.preventDefault();
            for (var i = 0; i < infoBoxes.length; i++) {
                infoBoxes[i].close();
            }
            $('.address-list').find('li').removeClass('active');
            $(this).parent('li').addClass('active');
            var lng = $(this).data('lng');
            var lat = $(this).data('lat');
            var title = $(this).data('title');
            var image_path = $(this).data('image');
            var content = $(this).data('content');
            var phone = $(this).data('phone');
            if (lng !== '' && lat !== '') {
                var position = {
                    lat: lat,
                    lng: lng,
                    title: title,
                    image_path: image_path,
                    content: content,
                    phone: phone
                };
                $.distribution.createMarker(position, shape);
                choosenStoreTitle = title;
                $.distribution.displayNearestStores($(this).data('nearestStores'));
            } else {
                return false;
            }
        });
    }
    $.distribution.findArroundMe = function () {
        $('#find-arround-me').on('click', function (event) {
            $('#mCSB_1_container li').show();
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    $.distribution.clearMaps();
                    var current_position = {lat: position.coords.latitude, lng: position.coords.longitude};
                    var current_location = new google.maps.LatLng(current_position.lat, current_position.lng);
                    var stores = [];
                    $('.address-list .inner-location').each(function () {
                        var store_lng = $(this).data('lng');
                        var store_lat = $(this).data('lat');
                        var store_title = $(this).data('title');
                        var store_image_path = $(this).data('image');
                        var store_content = $(this).data('content');
                        var store_phone = $(this).data('phone');
                        var store_index = $(this).parent('li').index();
                        if (store_lng && store_lat) {
                            var store_location = new google.maps.LatLng(store_lat, store_lng);
                            var distance = google.maps.geometry.spherical.computeDistanceBetween(current_location, store_location);
                            stores.push({
                                'title': store_title,
                                'content': store_content,
                                'phone': store_phone,
                                'location': store_location,
                                'image_path': store_image_path,
                                'distance': distance,
                                'index': store_index
                            });
                        }
                    });
                    for (var i = 0; i < stores.length; i++) {
                        for (var j = i + 1; j < stores.length; j++) {
                            var tmp;
                            if (stores[j].distance < stores[i].distance) {
                                tmp = stores[i];
                                stores[i] = stores[j];
                                stores[j] = tmp;
                            }
                        }
                    }
                    var li_list = $('.address-list li').clone(true, true);
                    $('#mCSB_1_container li').remove();
                    for (var i = 0; i < stores.length; i++) {
                        $('#mCSB_1_container').append(li_list.eq(stores[i].index));
                    }
                    var bounds = new google.maps.LatLngBounds();
                    for (var i = 0; i < 10; i++) {
                        bounds.extend(stores[i].location);
                        if (stores[i].title != choosenStoreTitle) {
                            $.distribution.myCreateMarker(stores[i].location, stores[i].title, stores[i].content, stores[i].phone, stores[i].image_path, icon_path + 'blue_marker.png');
                        } else {
                            $.distribution.myCreateMarker(stores[i].location, stores[i].title, stores[i].content, stores[i].phone, stores[i].image_path, null);
                        }
                    }
                    bounds.extend(current_location);
                    $.distribution.myCreateMarker(current_location, 'Vị trí của bạn', '', '', '', icon_path + 'current_marker.png');
                    _map.fitBounds(bounds);
                    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
                        $('html, body').animate({scrollTop: $("#map-canvas").offset().top - 100}, 1000);
                    }
                }, function () {
                    handleLocationError(true, infoWindow, map.getCenter());
                });
            } else {
                alert('Trình duyệt không hỗ trợ Geolocation');
            }
        });
    }
    $.distribution.myCreateMarker = function (latLng, title, content, phone, image_path, icon) {
        var marker = new google.maps.Marker({position: latLng, map: _map, icon: icon, title: title});
        if (content || phone) {
            marker.content = '<div class="infobox">' + title + '</br>Địa chỉ: ' + content + '</br>Phone: ' + phone + '</br></div>';
        } else {
            marker.content = '<div class="infobox">' + title + '</div>';
        }
        _markersArray.push(marker);
        marker_url = encodeURIComponent(marker.getPosition().toUrlValue());
        var boxText = document.createElement("div");
        boxText.innerHTML = marker.content;
        var myOptions = {
            content: boxText,
            disableAutoPan: false,
            pixelOffset: new google.maps.Size(-100, -190),
            zIndex: null,
            boxStyle: {},
            closeBoxMargin: "10px 176px 10px 10px",
            closeBoxURL: "skin/frontend/images/close.gif",
            infoBoxClearance: new google.maps.Size(1, 1)
        };
        var infoBox = new InfoBox(myOptions);
        infoBoxes.push(infoBox);
        google.maps.event.addListener(marker, 'click', function () {
            for (var i = 0; i < infoBoxes.length; i++) {
                infoBoxes[i].close();
            }
            infoBox.open(_map, marker);
            _map.setZoom(15);
            _map.setCenter(marker.getPosition());
        });
        google.maps.event.addDomListenerOnce(gotoMapButton, "click", function () {
            var url = 'https://www.google.com/maps?q=' + marker_url;
            window.open(url);
        });
    }
    $.distribution.clearMaps = function () {
        for (var i = 0; i < _markersArray.length; i++) {
            _markersArray[i].setMap(null);
        }
        _markersArray.length = 0;
    }
    $.distribution.responsiveShowHideLocation = function () {
        $('.address-wrapper').on('click', '.show-list-btn', function (event) {
            event.preventDefault();
            $(".distribution-map .address-wrapper .pagination").toggle();
            $(".distribution-map .address-list").slideToggle(250);
        });
    }, $.distribution.bindNearestStores = function () {
        $('.address-list .inner-location').each(function () {
            if ($(this).data('lat') && $(this).data('lng')) {
                var nearestStores = [], location = new google.maps.LatLng($(this).data('lat'), $(this).data('lng'));
                $('.address-list .inner-location').each(function () {
                    var store_lng = $(this).data('lng');
                    var store_lat = $(this).data('lat');
                    var store_title = $(this).data('title');
                    var store_content = $(this).data('content');
                    var store_phone = $(this).data('phone');
                    var store_image_path = $(this).data('image');
                    if (store_lng && store_lat) {
                        var store_location = new google.maps.LatLng(store_lat, store_lng);
                        var distance = google.maps.geometry.spherical.computeDistanceBetween(location, store_location);
                        if (distance > 0) {
                            nearestStores.push({
                                'title': store_title,
                                'content': store_content,
                                'phone': store_phone,
                                'location': store_location,
                                'image_path': store_image_path,
                                'distance': distance
                            });
                        }
                    }
                });
                for (var i = 0; i < nearestStores.length; i++) {
                    for (var j = i + 1; j < nearestStores.length; j++) {
                        var tmp;
                        if (nearestStores[j].distance < nearestStores[i].distance) {
                            tmp = nearestStores[i];
                            nearestStores[i] = nearestStores[j];
                            nearestStores[j] = tmp;
                        }
                    }
                }
                nearestStores.splice(10);
                $(this).data('nearestStores', nearestStores);
            } else {
                $(this).data('nearestStores', []);
            }
        });
    }
    $.distribution.displayNearestStores = function (stores) {
        if (stores.length > 0) {
            var bounds = new google.maps.LatLngBounds();
            console.log(icon_path);
            for (var i = 0; i < stores.length; i++) {
                bounds.extend(stores[i].location);
                $.distribution.myCreateMarker(stores[i].location, stores[i].title, stores[i].content, stores[i].phone, stores[i].image_path, icon_path + 'blue_marker.png');
            }
            _map.fitBounds(bounds);
        }
    }
})(jQuery);
function InfoBox(opt_opts) {
    opt_opts = opt_opts || {};
    google.maps.OverlayView.apply(this, arguments);
    this.content_ = opt_opts.content || "";
    this.disableAutoPan_ = opt_opts.disableAutoPan || false;
    this.maxWidth_ = opt_opts.maxWidth || 0;
    this.pixelOffset_ = opt_opts.pixelOffset || new google.maps.Size(0, 0);
    this.position_ = opt_opts.position || new google.maps.LatLng(0, 0);
    this.zIndex_ = opt_opts.zIndex || null;
    this.boxClass_ = opt_opts.boxClass || "myInfoBox";
    this.boxStyle_ = opt_opts.boxStyle || {};
    this.closeBoxMargin_ = opt_opts.closeBoxMargin || "2px";
    this.closeBoxURL_ = opt_opts.closeBoxURL || "http://www.google.com/intl/en_us/mapfiles/close.gif";
    if (opt_opts.closeBoxURL === "") {
        this.closeBoxURL_ = "";
    }
    this.infoBoxClearance_ = opt_opts.infoBoxClearance || new google.maps.Size(1, 1);
    if (typeof opt_opts.visible === "undefined") {
        if (typeof opt_opts.isHidden === "undefined") {
            opt_opts.visible = true;
        } else {
            opt_opts.visible = !opt_opts.isHidden;
        }
    }
    this.isHidden_ = !opt_opts.visible;
    this.alignBottom_ = opt_opts.alignBottom || false;
    this.pane_ = opt_opts.pane || "floatPane";
    this.enableEventPropagation_ = opt_opts.enableEventPropagation || false;
    this.div_ = null;
    this.closeListener_ = null;
    this.moveListener_ = null;
    this.contextListener_ = null;
    this.eventListeners_ = null;
    this.fixedWidthSet_ = null;
}
InfoBox.prototype = new google.maps.OverlayView();
InfoBox.prototype.createInfoBoxDiv_ = function () {
    var i;
    var events;
    var bw;
    var me = this;
    var cancelHandler = function (e) {
        e.cancelBubble = true;
        if (e.stopPropagation) {
            e.stopPropagation();
        }
    };
    var ignoreHandler = function (e) {
        e.returnValue = false;
        if (e.preventDefault) {
            e.preventDefault();
        }
        if (!me.enableEventPropagation_) {
            cancelHandler(e);
        }
    };
    if (!this.div_) {
        this.div_ = document.createElement("div");
        this.setBoxStyle_();
        if (typeof this.content_.nodeType === "undefined") {
            this.div_.innerHTML = this.getCloseBoxImg_() + this.content_;
        } else {
            this.div_.innerHTML = this.getCloseBoxImg_();
            this.div_.appendChild(this.content_);
        }
        this.getPanes()[this.pane_].appendChild(this.div_);
        this.addClickHandler_();
        if (this.div_.style.width) {
            this.fixedWidthSet_ = true;
        } else {
            if (this.maxWidth_ !== 0 && this.div_.offsetWidth > this.maxWidth_) {
                this.div_.style.width = this.maxWidth_;
                this.div_.style.overflow = "auto";
                this.fixedWidthSet_ = true;
            } else {
                bw = this.getBoxWidths_();
                this.div_.style.width = (this.div_.offsetWidth - bw.left - bw.right) + "px";
                this.fixedWidthSet_ = false;
            }
        }
        this.panBox_(this.disableAutoPan_);
        if (!this.enableEventPropagation_) {
            this.eventListeners_ = [];
            events = ["mousedown", "mouseover", "mouseout", "mouseup", "click", "dblclick", "touchstart", "touchend", "touchmove"];
            for (i = 0; i < events.length; i++) {
                this.eventListeners_.push(google.maps.event.addDomListener(this.div_, events[i], cancelHandler));
            }
            this.eventListeners_.push(google.maps.event.addDomListener(this.div_, "mouseover", function (e) {
                this.style.cursor = "default";
            }));
        }
        this.contextListener_ = google.maps.event.addDomListener(this.div_, "contextmenu", ignoreHandler);
        google.maps.event.trigger(this, "domready");
    }
};
InfoBox.prototype.getCloseBoxImg_ = function () {
    var img = "";
    if (this.closeBoxURL_ !== "") {
        img = "<img";
        img += " src='" + this.closeBoxURL_ + "'";
        img += " align=right";
        img += " style='";
        img += " position: relative;";
        img += " cursor: pointer;";
        img += " margin: " + this.closeBoxMargin_ + ";";
        img += "'>";
    }
    return img;
};
InfoBox.prototype.addClickHandler_ = function () {
    var closeBox;
    if (this.closeBoxURL_ !== "") {
        closeBox = this.div_.firstChild;
        this.closeListener_ = google.maps.event.addDomListener(closeBox, "click", this.getCloseClickHandler_());
    } else {
        this.closeListener_ = null;
    }
};
InfoBox.prototype.getCloseClickHandler_ = function () {
    var me = this;
    return function (e) {
        e.cancelBubble = true;
        if (e.stopPropagation) {
            e.stopPropagation();
        }
        google.maps.event.trigger(me, "closeclick");
        me.close();
    };
};
InfoBox.prototype.panBox_ = function (disablePan) {
    var map;
    var bounds;
    var xOffset = 0, yOffset = 0;
    if (!disablePan) {
        map = this.getMap();
        if (map instanceof google.maps.Map) {
            if (!map.getBounds().contains(this.position_)) {
                map.setCenter(this.position_);
            }
            bounds = map.getBounds();
            var mapDiv = map.getDiv();
            var mapWidth = mapDiv.offsetWidth;
            var mapHeight = mapDiv.offsetHeight;
            var iwOffsetX = this.pixelOffset_.width;
            var iwOffsetY = this.pixelOffset_.height;
            var iwWidth = this.div_.offsetWidth;
            var iwHeight = this.div_.offsetHeight;
            var padX = this.infoBoxClearance_.width;
            var padY = this.infoBoxClearance_.height;
            var pixPosition = this.getProjection().fromLatLngToContainerPixel(this.position_);
            if (pixPosition.x < (-iwOffsetX + padX)) {
                xOffset = pixPosition.x + iwOffsetX - padX;
            } else if ((pixPosition.x + iwWidth + iwOffsetX + padX) > mapWidth) {
                xOffset = pixPosition.x + iwWidth + iwOffsetX + padX - mapWidth;
            }
            if (this.alignBottom_) {
                if (pixPosition.y < (-iwOffsetY + padY + iwHeight)) {
                    yOffset = pixPosition.y + iwOffsetY - padY - iwHeight;
                } else if ((pixPosition.y + iwOffsetY + padY) > mapHeight) {
                    yOffset = pixPosition.y + iwOffsetY + padY - mapHeight;
                }
            } else {
                if (pixPosition.y < (-iwOffsetY + padY)) {
                    yOffset = pixPosition.y + iwOffsetY - padY;
                } else if ((pixPosition.y + iwHeight + iwOffsetY + padY) > mapHeight) {
                    yOffset = pixPosition.y + iwHeight + iwOffsetY + padY - mapHeight;
                }
            }
            if (!(xOffset === 0 && yOffset === 0)) {
                var c = map.getCenter();
                map.panBy(xOffset, yOffset);
            }
        }
    }
};
InfoBox.prototype.setBoxStyle_ = function () {
    var i, boxStyle;
    if (this.div_) {
        this.div_.className = this.boxClass_;
        this.div_.style.cssText = "";
        boxStyle = this.boxStyle_;
        for (i in boxStyle) {
            if (boxStyle.hasOwnProperty(i)) {
                this.div_.style[i] = boxStyle[i];
            }
        }
        this.div_.style.WebkitTransform = "translateZ(0)";
        if (typeof this.div_.style.opacity !== "undefined" && this.div_.style.opacity !== "") {
            this.div_.style.MsFilter = "\"progid:DXImageTransform.Microsoft.Alpha(Opacity=" + (this.div_.style.opacity * 100) + ")\"";
            this.div_.style.filter = "alpha(opacity=" + (this.div_.style.opacity * 100) + ")";
        }
        this.div_.style.position = "absolute";
        this.div_.style.visibility = 'hidden';
        if (this.zIndex_ !== null) {
            this.div_.style.zIndex = this.zIndex_;
        }
    }
};
InfoBox.prototype.getBoxWidths_ = function () {
    var computedStyle;
    var bw = {top: 0, bottom: 0, left: 0, right: 0};
    var box = this.div_;
    if (document.defaultView && document.defaultView.getComputedStyle) {
        computedStyle = box.ownerDocument.defaultView.getComputedStyle(box, "");
        if (computedStyle) {
            bw.top = parseInt(computedStyle.borderTopWidth, 10) || 0;
            bw.bottom = parseInt(computedStyle.borderBottomWidth, 10) || 0;
            bw.left = parseInt(computedStyle.borderLeftWidth, 10) || 0;
            bw.right = parseInt(computedStyle.borderRightWidth, 10) || 0;
        }
    } else if (document.documentElement.currentStyle) {
        if (box.currentStyle) {
            bw.top = parseInt(box.currentStyle.borderTopWidth, 10) || 0;
            bw.bottom = parseInt(box.currentStyle.borderBottomWidth, 10) || 0;
            bw.left = parseInt(box.currentStyle.borderLeftWidth, 10) || 0;
            bw.right = parseInt(box.currentStyle.borderRightWidth, 10) || 0;
        }
    }
    return bw;
};
InfoBox.prototype.onRemove = function () {
    if (this.div_) {
        this.div_.parentNode.removeChild(this.div_);
        this.div_ = null;
    }
};
InfoBox.prototype.draw = function () {
    this.createInfoBoxDiv_();
    var pixPosition = this.getProjection().fromLatLngToDivPixel(this.position_);
    this.div_.style.left = (pixPosition.x + this.pixelOffset_.width) + "px";
    if (this.alignBottom_) {
        this.div_.style.bottom = -(pixPosition.y + this.pixelOffset_.height) + "px";
    } else {
        this.div_.style.top = (pixPosition.y + this.pixelOffset_.height) + "px";
    }
    if (this.isHidden_) {
        this.div_.style.visibility = "hidden";
    } else {
        this.div_.style.visibility = "visible";
    }
};
InfoBox.prototype.setOptions = function (opt_opts) {
    if (typeof opt_opts.boxClass !== "undefined") {
        this.boxClass_ = opt_opts.boxClass;
        this.setBoxStyle_();
    }
    if (typeof opt_opts.boxStyle !== "undefined") {
        this.boxStyle_ = opt_opts.boxStyle;
        this.setBoxStyle_();
    }
    if (typeof opt_opts.content !== "undefined") {
        this.setContent(opt_opts.content);
    }
    if (typeof opt_opts.disableAutoPan !== "undefined") {
        this.disableAutoPan_ = opt_opts.disableAutoPan;
    }
    if (typeof opt_opts.maxWidth !== "undefined") {
        this.maxWidth_ = opt_opts.maxWidth;
    }
    if (typeof opt_opts.pixelOffset !== "undefined") {
        this.pixelOffset_ = opt_opts.pixelOffset;
    }
    if (typeof opt_opts.alignBottom !== "undefined") {
        this.alignBottom_ = opt_opts.alignBottom;
    }
    if (typeof opt_opts.position !== "undefined") {
        this.setPosition(opt_opts.position);
    }
    if (typeof opt_opts.zIndex !== "undefined") {
        this.setZIndex(opt_opts.zIndex);
    }
    if (typeof opt_opts.closeBoxMargin !== "undefined") {
        this.closeBoxMargin_ = opt_opts.closeBoxMargin;
    }
    if (typeof opt_opts.closeBoxURL !== "undefined") {
        this.closeBoxURL_ = opt_opts.closeBoxURL;
    }
    if (typeof opt_opts.infoBoxClearance !== "undefined") {
        this.infoBoxClearance_ = opt_opts.infoBoxClearance;
    }
    if (typeof opt_opts.isHidden !== "undefined") {
        this.isHidden_ = opt_opts.isHidden;
    }
    if (typeof opt_opts.visible !== "undefined") {
        this.isHidden_ = !opt_opts.visible;
    }
    if (typeof opt_opts.enableEventPropagation !== "undefined") {
        this.enableEventPropagation_ = opt_opts.enableEventPropagation;
    }
    if (this.div_) {
        this.draw();
    }
};
InfoBox.prototype.setContent = function (content) {
    this.content_ = content;
    if (this.div_) {
        if (this.closeListener_) {
            google.maps.event.removeListener(this.closeListener_);
            this.closeListener_ = null;
        }
        if (!this.fixedWidthSet_) {
            this.div_.style.width = "";
        }
        if (typeof content.nodeType === "undefined") {
            this.div_.innerHTML = this.getCloseBoxImg_() + content;
        } else {
            this.div_.innerHTML = this.getCloseBoxImg_();
            this.div_.appendChild(content);
        }
        if (!this.fixedWidthSet_) {
            this.div_.style.width = this.div_.offsetWidth + "px";
            if (typeof content.nodeType === "undefined") {
                this.div_.innerHTML = this.getCloseBoxImg_() + content;
            } else {
                this.div_.innerHTML = this.getCloseBoxImg_();
                this.div_.appendChild(content);
            }
        }
        this.addClickHandler_();
    }
    google.maps.event.trigger(this, "content_changed");
};
InfoBox.prototype.setPosition = function (latlng) {
    this.position_ = latlng;
    if (this.div_) {
        this.draw();
    }
    google.maps.event.trigger(this, "position_changed");
};
InfoBox.prototype.setZIndex = function (index) {
    this.zIndex_ = index;
    if (this.div_) {
        this.div_.style.zIndex = index;
    }
    google.maps.event.trigger(this, "zindex_changed");
};
InfoBox.prototype.setVisible = function (isVisible) {
    this.isHidden_ = !isVisible;
    if (this.div_) {
        this.div_.style.visibility = (this.isHidden_ ? "hidden" : "visible");
    }
};
InfoBox.prototype.getContent = function () {
    return this.content_;
};
InfoBox.prototype.getPosition = function () {
    return this.position_;
};
InfoBox.prototype.getZIndex = function () {
    return this.zIndex_;
};
InfoBox.prototype.getVisible = function () {
    var isVisible;
    if ((typeof this.getMap() === "undefined") || (this.getMap() === null)) {
        isVisible = false;
    } else {
        isVisible = !this.isHidden_;
    }
    return isVisible;
};
InfoBox.prototype.show = function () {
    this.isHidden_ = false;
    if (this.div_) {
        this.div_.style.visibility = "visible";
    }
};
InfoBox.prototype.hide = function () {
    this.isHidden_ = true;
    if (this.div_) {
        this.div_.style.visibility = "hidden";
    }
};
InfoBox.prototype.open = function (map, anchor) {
    var me = this;
    if (anchor) {
        this.position_ = anchor.getPosition();
        this.moveListener_ = google.maps.event.addListener(anchor, "position_changed", function () {
            me.setPosition(this.getPosition());
        });
    }
    this.setMap(map);
    if (this.div_) {
        this.panBox_();
    }
};
InfoBox.prototype.close = function () {
    var i;
    if (this.closeListener_) {
        google.maps.event.removeListener(this.closeListener_);
        this.closeListener_ = null;
    }
    if (this.eventListeners_) {
        for (i = 0; i < this.eventListeners_.length; i++) {
            google.maps.event.removeListener(this.eventListeners_[i]);
        }
        this.eventListeners_ = null;
    }
    if (this.moveListener_) {
        google.maps.event.removeListener(this.moveListener_);
        this.moveListener_ = null;
    }
    if (this.contextListener_) {
        google.maps.event.removeListener(this.contextListener_);
        this.contextListener_ = null;
    }
    this.setMap(null);
};