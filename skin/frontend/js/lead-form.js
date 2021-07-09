!function ($) {
    $(document).ready(function () {
        function l(l) {
            var n;
            n = l.value > 9999999 ? "dead" : l.value > 7e6 ? "lethal" : l.value > 5e6 ? "toohigh" : l.value > 3e6 ? "average" : l.value > 999999 ? "viable" : "toolow", $(".elec-bill-slider").attr("id", n)
        }

        function n(e) {
            return e.toFixed(0).replace(/./g, function (e, l, n) {
                return l > 0 && "." !== e && (n.length - l) % 3 === 0 ? "." + e : e
            })
        }

        function a(l) {
            $("#monthly_bill").html("<strong>" + n(l.value) + "</strong> đ/tháng"), $("#yearly_bill").val(n(12 * l.value) + " đ/Năm"), $("#monthly_usage").val(n(l.value) + " đ/tháng"),
            $('#hd-mobile').val(n(l.value))
        }

        var t = location.href, i = t.split("?"), o = (i[0], {});
        window.location.search.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), function (e, l, n, a) {
            o[l] = a
        }), $(".icon-slider").length > 0 && $(".icon-slider").slider({
            range: "max",
            min: 0,
            max: 1e7,
            value: 1e6,
            slide: function (e, n) {
                a(n), l(n)
            }
        })
    })
}(jQuery);
!function (a) {
    function f(a, b) {
        if (!(a.originalEvent.touches.length > 1)) {
            a.preventDefault();
            var c = a.originalEvent.changedTouches[0], d = document.createEvent("MouseEvents");
            d.initMouseEvent(b, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1, !1, !1, !1, 0, null), a.target.dispatchEvent(d)
        }
    }

    if (a.support.touch = "ontouchend" in document, a.support.touch) {
        var e, b = a.ui.mouse.prototype, c = b._mouseInit, d = b._mouseDestroy;
        b._touchStart = function (a) {
            var b = this;
            !e && b._mouseCapture(a.originalEvent.changedTouches[0]) && (e = !0, b._touchMoved = !1, f(a, "mouseover"), f(a, "mousemove"), f(a, "mousedown"))
        }, b._touchMove = function (a) {
            e && (this._touchMoved = !0, f(a, "mousemove"))
        }, b._touchEnd = function (a) {
            e && (f(a, "mouseup"), f(a, "mouseout"), this._touchMoved || f(a, "click"), e = !1)
        }, b._mouseInit = function () {
            var b = this;
            b.element.bind({
                touchstart: a.proxy(b, "_touchStart"),
                touchmove: a.proxy(b, "_touchMove"),
                touchend: a.proxy(b, "_touchEnd")
            }), c.call(b)
        }, b._mouseDestroy = function () {
            var b = this;
            b.element.unbind({
                touchstart: a.proxy(b, "_touchStart"),
                touchmove: a.proxy(b, "_touchMove"),
                touchend: a.proxy(b, "_touchEnd")
            }), d.call(b)
        }
    }
}(jQuery);