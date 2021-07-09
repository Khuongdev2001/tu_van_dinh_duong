/**
 * Created by Mr.Hung on 2/17/2016.
 */
(function ($) {
    $(window).load(function () {
        $('.main-menu li').hover(function () {
            $(this).find('.sub-menu:first').css('display', 'block');
            var menu = $(this).find("ul.sub-child");
            if ($(this).find("ul.sub-child").lenght)
                if (menu.length > 0 && $(window).width() > 768) {
                    var menupos = $(menu).offset();
                    if (menupos.left + menu.width() > $(window).width()) {
                        var newpos = -$(menu).width();
                        var newright = parseInt($(this).width()) + 30;
                        menu.css({left: 0});
                        menu.css({left: newpos});
                        menu.css({right: newright});
                        menu.css('border-right', '1px solid #e67817');
                    }
                }
        }, function () {
            $(this).find('.sub-menu').css('display', 'none');
        });
        //    hidden column left
        $('.hidden-left').on('click', function () {
            if ($('.admin-content').hasClass('admin-98')) {
                $('.admin-content').removeClass('col-xs-12');
                $('.admin-content').addClass('col-xs-10');
                $('.admin-content').removeClass('admin-98');
                $('.admin-left').animate({'margin-left': "0px"}, 'slow');
                $(this).removeClass('active-hidden');
            } else {
                $('.admin-content').removeClass('col-xs-10');
                $('.admin-content').addClass('col-xs-12');
                $('.admin-content').addClass('admin-98');
                $('.admin-left').animate({'margin-left': "-15%"}, 'slow');
                $('.active-hidden').css('display', 'block');
                $(this).addClass('active-hidden');
            }
        });
        //    show list edit
        $('.item-list-status').hover(function () {
            $(this).find('.ul-list:first').show();
        }, function () {
            $('.ul-list').hide();
        });
        //    show date end
        $('.check-end-date input').on('click', function () {
            if ($('.row-end-date').hasClass('display-none')) {
                $('.row-end-date').removeClass('display-none');
            } else {
                $('.row-end-date').addClass('display-none');
            }
        });
    });
//    enable, disable colum
    $("#change_column_of_list").find("li").click(function () {
        var content_group = $(this).parent().attr("content_group");
        var cookie_name = $(this).parent().attr("cookie_name");
        var index = $("#change_column_of_list").find("li").index($(this));
        var current_cookie = ',' + $.cookie(cookie_name) + ',';
        if ($(this).find("span").attr("class") == "tick") { // Not showing
            $(this).find("span").attr("class", "tick-active");
            $(".table-list thead").find("th:eq(" + index + ")").show();
            $(".table-list tbody tr").each(function (i) {
                $(this).find("td:eq(" + index + ")").show();
            });
            current_cookie = current_cookie.replace("," + index + ",", ",");
        }
        else { //showing
            $(this).find("span").attr("class", "tick");
            $(".table-list thead").find("th:eq(" + index + ")").hide();
            $(".table-list tbody tr").each(function (i) {
                $(this).find("td:eq(" + index + ")").hide();
            });
            current_cookie = $.cookie(cookie_name) + "," + index;
        }
        if (current_cookie.indexOf(",") == 0) {
            current_cookie = current_cookie.substring(1);
        }
        if (current_cookie.lastIndexOf(",") == current_cookie.length - 1) {
            current_cookie = current_cookie.substring(0, current_cookie.lastIndexOf(","));
        }
        $.cookie(cookie_name, current_cookie);
    });
    var cookiename = $('.cookie-name').attr('cookie_name');
    if (cookiename != undefined) {
        if ($.cookie(cookiename) != null) {
            var res = $.cookie(cookiename);
            res = res.split(',');
            $.each(res, function (index, value) {
                $("#change_column_of_list").find("li:eq(" + value + ") span").attr('class', "tick");
                $(".table-list thead").find("th:eq(" + value + ")").hide();
                $(".table-list tbody tr").each(function () {
                    $(this).find("td:eq(" + value + ")").hide();
                });
            });
        }
    }
//    count title
    $('.input-title').on('keyup', function () {
        var count = $(this).val().length;
        var idname = $(this).attr('id');
        var id_input=$(this).attr('data-id');
        locdau(idname,id_input);
        $(this).parents('.row-input').find('.count-title').text(count);
    });
//    toggle
    $('.toggle-title').on('click', function () {
        if ($(this).hasClass('toggle-title-up')) {
            $(this).removeClass('toggle-title-up');
        } else {
            $(this).addClass('toggle-title-up');
        }
        $(this).parent().find('.toggle-content').toggle();
    });
//
    $('.search-submit').on('click', function () {
        var key = $(this).parent().find('.search-keyword').attr('name');
        var value = $(this).parent().find('.search-keyword').val();
        insertParam(key, value);
    });
    //ckeditor
    var baseUrl = $('body').attr('data-base');
    $('.row-input').each(function (key) {
        var id_editor = $(this).find('textarea.check-editor').attr('id');
        if (id_editor != undefined) {
            if (typeof CKEDITOR == 'undefined') {
                document.write("khong "
                );
            }
            else {
                var key = CKEDITOR.replace(id_editor);
                CKFinder.setupCKEditor(key, {basePath: baseUrl + '/ckeditor/ckfinder/', rememberLastFolder: false, allowedContent: true});
            }
        }
    });
//   tooltip image

//    add item support
    $(document).on('click','.add-support',function () {
        var number = $('.row-tb-body .row-support:last-child .number-order-sup').text();
        if (number == '') {
            number = 0;
        }
        var html = '<div class="row-support">' +
            '<div class="cell-8 text-center">' +
            '<span class="number-order-sup">' + (parseInt(number) + 1) + '</span>' +
            '<span class="remove-support"></span>' +
            '</div>' +
            '<div class="cell-12">' +
            '<input type="text" name="support[' + (parseInt(number) + 1) + '][name]">' +
            '</div>' +
            '<div class="cell-12">' +
            '<input type="text" name="support[' + (parseInt(number) + 1) + '][title]">' +
            '</div>' +
            '<div class="cell-12">' +
            '<input type="text" name="support[' + (parseInt(number) + 1) + '][email]">' +
            '</div>' +
            '<div class="cell-12">' +
            '<input type="text" name="support[' + (parseInt(number) + 1) + '][phone]">' +
            '</div>' +
            '<div class="cell-24">' +
            '<div class="row">' +
            '<div class="col-xs-8">' +
            '<input type="text" name="support[' + (parseInt(number) + 1) + '][image]" id="xFilePath'+number+'" class="control-input" style="width: 100%"' +
            'value=""/>' +
            '</div>' +
            '<div class="col-xs-1 box-tooltip-img">' +
            '<span class="image-tooltip">' +
            '<img id="views-image'+number+'" class="zoom-image"' +
            'src="">' +
            '</span>' +
            '</div>' +
            '<div class="col-xs-3">' +
            '<button type="button" class="btn-browse" onclick="openPopup(\'xFilePath'+number+'\',\'views-image'+number+'\')">' +
            'Browse...' +
            '</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="cell-8">' +
            '<span class="add-support add-item-sp"></span>' +
            '</div>' +
            '</div>';
        $('.row-tb-body').append(html);
    });
//    check send mail
    $('.check_email').on('click', function () {
        var baseUrl = $('body').attr('data-base');
        $('.notice_test').empty();
        var img = '<div class="row"><img src="' + baseUrl + 'skin/admin/images/waitingr.gif" /></div>';
        $('.notice_test').append(img);
        $.ajax({
            url: baseUrl + 'support/mail_test',
            type: 'POST',
            data: $("#support-all").serialize(),
            success: function (msg) {
                if (msg.sent) {
                    $('.notice_test').html(msg);
                }
                else {
                    $('.notice_test').html(msg);
                }
            }
        });
        return false;
    });
//    add ads
    $('.order-ads').on('click', function () {
        var arr = [];
        var text = '';
        var ee = '';
        $('.cate-group').each(function (e) {
            if ($(this).find('option:selected').val() != undefined) {
                arr[e] = $(this).find('option:selected').val();
                if (e == 0) {
                    ee = '';
                } else {
                    ee = '>';
                }
                text += ee + ' <span>' + $(this).find('option:selected').text() + ' </span> '
            }
        });
        if (text != '') {
            var order = $('input.value-order').val();
            var id = parseInt($(this).attr('data-id')) + 1;
            $(this).attr('data-id', id);
            var html = '<div class="parent-order">' +
                '<input type="hidden" name="number_order[]" value="' + order + '">' +
                '<input type="hidden" name="array_cate[]" value="' + arr + '">' +
                '<input type="hidden" name="category[]" value="' + arr[arr.length - 1] + '">' +
                '<p><strong>' + id + '.</strong> Thứ tự ' + order + ' : ' + text + ' <span class="remove-order"></span></p>' +
                '</div>';
            $('.group-order').append(html);
        }
    });


})(jQuery);
//    delete orer
$(document).on('click', '.remove-order', function () {
    $(this).parents('.parent-order').remove();
    var id = parseInt($('.order-ads').attr('data-id')) - 1;
    $('.order-ads').attr('data-id', id);
    $('.parent-order').each(function (e) {
        e++;
        $(this).find('strong').text(e);
    });

});
$(document).on('click', '.remove-support', function () {
    $(this).parents('.row-support').remove();
    $('.row-tb-body .row-support').each(function (i) {
        i = parseInt(i + 1);
        $(this).find('.number-order-sup').text(i);

    });
});
function insertParam(key, value) {
    key = key;
    value = value;
    var kvp = document.location.search.substr(1).split('&');
    if (kvp == '') {
        document.location.search = '?' + key + '=' + value;
    }
    else {
        var i = kvp.length;
        var x;
        while (i--) {
            x = kvp[i].split('=');
            if (x[0] == key) {
                x[1] = value;
                kvp[i] = x.join('=');
                break;
            }
        }
        if (i < 0) {
            kvp[kvp.length] = [key, value].join('=');
        }
        document.location.search = kvp.join('&');
    }
}
function removeParameterFromUrl(parameterName) {
    var url = window.location.href;
    var reg = new RegExp('&?' + parameterName + '=([^&]$|[^&]*)', 'gi');
    var link_st = url.replace(reg, "");
    window.location.href = link_st;
}
function openPopup(id, src) {
    CKFinder.popup({
        chooseFiles: true,
        onInit: function (finder) {
            finder.on('files:choose', function (evt) {
                var file = evt.data.files.first();
                document.getElementById(id).value = file.getUrl();
                document.getElementById(src).src = file.getUrl();
            });
            finder.on('file:choose:resizedImage', function (evt) {
                document.getElementById(id).value = evt.data.resizedUrl;
            });
        }
    });
}
function openPopup2(id) {
    CKFinder.popup({
        chooseFiles: true,
        onInit: function (finder) {
            finder.on('files:choose', function (evt) {
                var file = evt.data.files.first();
                document.getElementById(id).value = file.getUrl();
            });
            finder.on('file:choose:resizedImage', function (evt) {
                document.getElementById(id).value = evt.data.resizedUrl;
            });
        }
    });
}
function cke(val) {
    var baseUrl = $('body').attr('data-base');
    $(val+' .col-xs-6').each(function (key) {
        var id_editor = $(this).find('textarea.check-editor').attr('id');
        if (id_editor != undefined) {
            if (typeof CKEDITOR == 'undefined') {
                document.write("khong "
                );
            }
            else {
                var key = CKEDITOR.replace(id_editor);
                CKFinder.setupCKEditor(key, {basePath: baseUrl + '/ckeditor/ckfinder/', rememberLastFolder: false});
            }
        }
    });
}
function openPopup1(id, src) {
    CKFinder.popup({
        chooseFiles: true,
        onInit: function (finder) {
            finder.on('files:choose', function (evt) {
                var files = evt.data.files;
                var chosenFiles = '';
                files.forEach(function (file, i) {
                    // document.getElementById(id).value += ( i + 1 ) + '. ' + file.get('name') + '\n';

                    var max = 1;
                    if ($('.row-gallery').length > 0) {
                        var num = $('.row-gallery:last-child').attr('data-id');
                        max = parseInt(num) + 1;
                    }
                    var html = '<div class="row row-gallery" data-id="' + max + '">' +
                        '<div class="col-xs-8">' +
                        '<input type="text"  name="img[]" id="xFileGallery' + max + '" class="control-input" style="width: 100%"' +
                        'value="'+file.getUrl()+'"/>' +
                        '</div>' +
                        '<div class="col-xs-1 box-tooltip-img">' +
                        '<span class="image-tooltip">' +
                        '<img src="'+file.getUrl()+'" id="views-gallery' + max + '" class="zoom-image"' +
                        'src="">' +
                        '</span>' +
                        '</div>' +
                        '<div class="col-xs-3">' +
                        '<button type="button" class="btn-browse" onclick="openPopup(\'xFileGallery' + max + '\',\'views-gallery' + max + '\')">' +
                        'Browse...' +
                        '</button>' +
                        '<span class="remove-gallery glyphicon glyphicon-remove" ></span>' +
                        '</div>' +
                        '</div>';
                    $('.toggle-gallery').append(html);

                });
                console.log(chosenFiles);
            });
            finder.on('file:choose:resizedImage', function (evt) {
                document.getElementById(id).value = evt.data.resizedUrl;
            });
        }
    });
}
function openPopup3(id, src) {
    CKFinder.popup({
        chooseFiles: true,
        onInit: function (finder) {
            finder.on('files:choose', function (evt) {
                var files = evt.data.files;
                var chosenFiles = '';
                files.forEach(function (file, i) {
                    // document.getElementById(id).value += ( i + 1 ) + '. ' + file.get('name') + '\n';

                    var max = 1;
                    if ($('.row-gallery').length > 0) {
                        var num = $('.row-gallery:last-child').attr('data-id');
                        max = parseInt(num) + 1;
                    }
                    var html = '<div class="row row-gallery" data-id="' + max + '">' +
                        '<div class="col-xs-8">' +
                        '<input type="text"  name="img[]" id="xFileGallery' + max + '" class="control-input" style="width: 100%"' +
                        'value="'+file.getUrl()+'"/>' +
                        '</div>' +
                        '<div class="col-xs-1 box-tooltip-img">' +
                        '<span class="image-tooltip">' +
                        '<img src="'+file.getUrl()+'" id="views-gallery' + max + '" class="zoom-image"' +
                        'src="">' +
                        '</span>' +
                        '</div>' +
                        '<div class="col-xs-3">' +
                        '<button type="button" class="btn-browse" onclick="openPopup(\'xFileGallery' + max + '\',\'views-gallery' + max + '\')">' +
                        'Browse...' +
                        '</button>' +
                        '<span class="remove-gallery glyphicon glyphicon-remove" ></span>' +
                        '</div>' +
                        '</div>';
                    $('.toggle-gallery').append(html);

                });
                console.log(chosenFiles);
            });
            finder.on('file:choose:resizedImage', function (evt) {
                document.getElementById(id).value = evt.data.resizedUrl;
            });
        }
    });
}
function openPopup4(id, src) {
    CKFinder.popup({
        chooseFiles: true,
        onInit: function (finder) {
            finder.on('files:choose', function (evt) {
                var files = evt.data.files;
                var chosenFiles = '';
                files.forEach(function (file, i) {
                    // document.getElementById(id).value += ( i + 1 ) + '. ' + file.get('name') + '\n';

                    var max = 1;
                    if ($('.row-gallery').length > 0) {
                        var num = $('.row-gallery:last-child').attr('data-id');
                        max = parseInt(num) + 1;
                    }
                    var html = '<div class="row row-gallery" data-id="' + max + '">' +
                        '<div class="col-xs-4">' +
                        '<input type="text"  name="img[]" id="xFileGallery' + max + '" class="control-input" style="width: 100%"' +
                        'value="'+file.getUrl()+'"/>' +
                        '</div>' +
                        '<div class="col-xs-1 box-tooltip-img">' +
                        '<span class="image-tooltip">' +
                        '<img src="'+file.getUrl()+'" id="views-gallery' + max + '" class="zoom-image"' +
                        'src="">' +
                        '</span>' +
                        '</div>' +
                        '<div class="col-xs-2">' +
                        '<button type="button" class="btn-browse" onclick="openPopup(\'xFileGallery' + max + '\',\'views-gallery' + max + '\')">' +
                        'Browse...' +
                        '</button>' +

                        '</div>' +
                        '<div class="col-xs-2">' +
                        '<input type="text"  name="prices[]" class="control-input" style="width: 100%" placeholder="giá"/>' +
                        '</div>' +
                        '<div class="col-xs-2">' +
                        '<input type="text"  name="mili[]" class="control-input" style="width: 100%" placeholder="dung tích"/>' +
                        '</div>' +
                        '<div class="col-xs-1">' +
                        '<span class="remove-gallery glyphicon glyphicon-remove" ></span>' +
                        '</div>' +
                        '</div>';
                    $('.toggle-gallery').append(html);

                });
                console.log(chosenFiles);
            });
            finder.on('file:choose:resizedImage', function (evt) {
                document.getElementById(id).value = evt.data.resizedUrl;
            });
        }
    });
}
$(document).on('click', '#type-cate', function () {
    var valuexo = $(this).find('option:selected').val();
    var level = $(this).attr('data-level');
    var id_post = $(this).attr('data-post');
    var name = $(this).attr('data-name');
    var baseUrl = $('body').attr('data-base');
    $(this).parent().nextAll('div.item-group-category').remove();
    $.ajax({
        type: "POST",
        url: baseUrl + 'manager/get_categories',
        data: {valuexo: valuexo, level: level, name: name, id_post: id_post},
        success: function (data) {
            $('.panel-category').append(data);
        }
    });
    return false;
});
$(document).on('click', '.cate-group', function () {
    var valuexo = $(this).find('option:selected').val();
    var level = $(this).attr('data-level');
    var name = $(this).attr('name');
    var id_post = $(this).attr('data-post');
    var baseUrl = $('body').attr('data-base');
    $(this).parent().nextAll('div.item-group-category').remove();
    $.ajax({
        type: "POST",
        url: baseUrl + 'manager/get_cate_child',
        data: {valuexo: valuexo, level: level, name: name, id_post: id_post},
        success: function (data) {
            $('.panel-category').append(data);
        }
    });
    return false;
});
$(document).on('change', '#check-language', function () {
    var lang = $(this).find('option:selected').val();
    var baseUrl = $('body').attr('data-base');
    $.ajax({
        type: "POST",
        url: baseUrl + 'manager/create_language',
        data: {lang: lang},
        success: function (data) {
            location.reload();
        }
    });
    return false;
});
$('.select-city-admin').on('change', function () {
    var cl_change = $(this).attr('data-class');
    var base_url = $('body').attr('data-base');
    var id_city = $(this).val();
    $.ajax({
        type: "POST",
        url: base_url + 'district',
        data: {id_city: id_city},
        success: function (data) {
            $('.' + cl_change).html(data);
        }
    })
});

$(document).on('mousemove', ".image-tooltip", function (e) {
    var src = $(this).find('.zoom-image').attr('src');
    if (src != '') {
        $(this).find('.zoom-image').css('top', (e.offsetY + 16) + "px");
        $(this).find('.zoom-image').css('left', (e.offsetX + 18) + "px");
        $(this).find('.zoom-image').show();
    }
});
$(document).on('mouseleave', ".image-tooltip", function () {
    $(this).find('.zoom-image').hide();
});
function locdau(id,id_input) {
    var str = (
        document.getElementById(id).value);
    str = str.toLowerCase();// chuyển chuỗi sang chữ thường để xử lý
    /* tìm kiếm và thay thế tất cả các nguyên âm có dấu sang không dấu*/
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\–|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|\’|$|_/g, "-");
    str = str.replace(/“|”/g, "")
    /* tìm và thay thế các kí tự đặc biệt trong chuỗi sang kí tự - */
    str = str.replace(/-+-/g, "-"); //thay thế 2- thành 1-
    str = str.replace(/^\-+|\-+$/g, "");//cắt bỏ ký tự - ở đầu và cuối chuỗi
    str = str; // Chuỗi Alias
    document.getElementById(id_input).value = str;// xuất kết quả xữ lý ra keyword
}

function locdau1(id) {
    var str = (
        document.getElementById(id).value);
    str = str.toLowerCase();// chuyển chuỗi sang chữ thường để xử lý
    /* tìm kiếm và thay thế tất cả các nguyên âm có dấu sang không dấu*/
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|–|_/g, "-");
    str = str.replace(/“|”/g, "")
    /* tìm và thay thế các kí tự đặc biệt trong chuỗi sang kí tự - */
    str = str.replace(/-+-/g, "-"); //thay thế 2- thành 1-
    str = str.replace(/^\-+|\-+$/g, "");//cắt bỏ ký tự - ở đầu và cuối chuỗi
    str = str; // Chuỗi Alias
    document.getElementById("alias-title").value = str;// xuất kết quả xữ lý ra keyword
}

