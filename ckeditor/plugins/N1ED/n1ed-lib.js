!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports["@edsdk-internal/kit"] = t() : e["@edsdk-internal/kit"] = t()
}(window, function () {
    return function (e) {
        var t = {};

        function n(r) {
            if (t[r]) return t[r].exports;
            var i = t[r] = {i: r, l: !1, exports: {}};
            return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
        }

        return n.m = e, n.c = t, n.d = function (e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
        }, n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
        }, n.t = function (e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for (var i in e) n.d(r, i, function (t) {
                return e[t]
            }.bind(null, i));
            return r
        }, n.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "/", n(n.s = 262)
    }([function (e, t, n) {
        "use strict";
        e.exports = n(27)
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            var t = [];
            return t.toString = function () {
                return this.map(function (t) {
                    var n = function (e, t) {
                        var n, r = e[1] || "", i = e[3];
                        if (!i) return r;
                        if (t && "function" == typeof btoa) {
                            var o = (n = i, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */"),
                                a = i.sources.map(function (e) {
                                    return "/*# sourceURL=" + i.sourceRoot + e + " */"
                                });
                            return [r].concat(a).concat([o]).join("\n")
                        }
                        return [r].join("\n")
                    }(t, e);
                    return t[2] ? "@media " + t[2] + "{" + n + "}" : n
                }).join("")
            }, t.i = function (e, n) {
                "string" == typeof e && (e = [[null, e, ""]]);
                for (var r = {}, i = 0; i < this.length; i++) {
                    var o = this[i][0];
                    null != o && (r[o] = !0)
                }
                for (i = 0; i < e.length; i++) {
                    var a = e[i];
                    null != a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a))
                }
            }, t
        }
    }, function (e, t, n) {
        var r, i, o, a = {}, s = (r = function () {
            return window && document && document.all && !window.atob
        }, function () {
            return void 0 === i && (i = r.apply(this, arguments)), i
        }), l = (o = {}, function (e, t) {
            if ("function" == typeof e) return e();
            if (void 0 === o[e]) {
                var n = function (e, t) {
                    return t ? t.querySelector(e) : document.querySelector(e)
                }.call(this, e, t);
                if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                    n = n.contentDocument.head
                } catch (e) {
                    n = null
                }
                o[e] = n
            }
            return o[e]
        }), u = null, c = 0, p = [], d = n(24);

        function f(e, t) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n], i = a[r.id];
                if (i) {
                    i.refs++;
                    for (var o = 0; o < i.parts.length; o++) i.parts[o](r.parts[o]);
                    for (; o < r.parts.length; o++) i.parts.push(y(r.parts[o], t))
                } else {
                    var s = [];
                    for (o = 0; o < r.parts.length; o++) s.push(y(r.parts[o], t));
                    a[r.id] = {id: r.id, refs: 1, parts: s}
                }
            }
        }

        function h(e, t) {
            for (var n = [], r = {}, i = 0; i < e.length; i++) {
                var o = e[i], a = t.base ? o[0] + t.base : o[0], s = {css: o[1], media: o[2], sourceMap: o[3]};
                r[a] ? r[a].parts.push(s) : n.push(r[a] = {id: a, parts: [s]})
            }
            return n
        }

        function _(e, t) {
            var n = l(e.insertInto);
            if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var r = p[p.length - 1];
            if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), p.push(t); else if ("bottom" === e.insertAt) n.appendChild(t); else {
                if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                var i = l(e.insertAt.before, n);
                n.insertBefore(t, i)
            }
        }

        function m(e) {
            if (null === e.parentNode) return !1;
            e.parentNode.removeChild(e);
            var t = p.indexOf(e);
            0 <= t && p.splice(t, 1)
        }

        function g(e) {
            var t = document.createElement("style");
            if (void 0 === e.attrs.type && (e.attrs.type = "text/css"), void 0 === e.attrs.nonce) {
                var r = n.nc;
                r && (e.attrs.nonce = r)
            }
            return v(t, e.attrs), _(e, t), t
        }

        function v(e, t) {
            Object.keys(t).forEach(function (n) {
                e.setAttribute(n, t[n])
            })
        }

        function y(e, t) {
            var n, r, i, o, a, s;
            if (t.transform && e.css) {
                if (!(o = "function" == typeof t.transform ? t.transform(e.css) : t.transform.default(e.css))) return function () {
                };
                e.css = o
            }
            if (t.singleton) {
                var l = c++;
                n = u || (u = g(t)), r = x.bind(null, n, l, !1), i = x.bind(null, n, l, !0)
            } else i = e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (a = t, s = document.createElement("link"), void 0 === a.attrs.type && (a.attrs.type = "text/css"), a.attrs.rel = "stylesheet", v(s, a.attrs), _(a, s), r = function (e, t, n) {
                var r = n.css, i = n.sourceMap, o = void 0 === t.convertToAbsoluteUrls && i;
                (t.convertToAbsoluteUrls || o) && (r = d(r)), i && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
                var a = new Blob([r], {type: "text/css"}), s = e.href;
                e.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
            }.bind(null, n = s, t), function () {
                m(n), n.href && URL.revokeObjectURL(n.href)
            }) : (n = g(t), r = function (e, t) {
                var n = t.css, r = t.media;
                if (r && e.setAttribute("media", r), e.styleSheet) e.styleSheet.cssText = n; else {
                    for (; e.firstChild;) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(n))
                }
            }.bind(null, n), function () {
                m(n)
            });
            return r(e), function (t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    r(e = t)
                } else i()
            }
        }

        e.exports = function (e, t) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = s()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
            var n = h(e, t);
            return f(n, t), function (e) {
                for (var r = [], i = 0; i < n.length; i++) {
                    var o = n[i];
                    (s = a[o.id]).refs--, r.push(s)
                }
                for (e && f(h(e, t), t), i = 0; i < r.length; i++) {
                    var s;
                    if (0 === (s = r[i]).refs) {
                        for (var l = 0; l < s.parts.length; l++) s.parts[l]();
                        delete a[s.id]
                    }
                }
            }
        };
        var b, w = (b = [], function (e, t) {
            return b[e] = t, b.filter(Boolean).join("\n")
        });

        function x(e, t, n, r) {
            var i = n ? "" : r.css;
            if (e.styleSheet) e.styleSheet.cssText = w(t, i); else {
                var o = document.createTextNode(i), a = e.childNodes;
                a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o)
            }
        }
    }, , function (e, t) {
        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        var r;
        r = function () {
            return this
        }();
        try {
            r = r || new Function("return this")()
        } catch (e) {
            "object" === ("undefined" == typeof window ? "undefined" : n(window)) && (r = window)
        }
        e.exports = r
    }, function (e, t, n) {
        "use strict";
        var r, i = this && this.__extends || (r = function (e, t) {
            return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
        }, function (e, t) {
            function n() {
                this.constructor = e
            }

            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        });
        Object.defineProperty(t, "__esModule", {value: !0});
        var o = n(0);
        n(37);
        var a, s, l = n(34), u = n(15);
        (s = a = t.N1EDButtonStyle || (t.N1EDButtonStyle = {})).DEFAULT = "default", s.PRIMARY = "primary", s.SUCCESS = "success", s.LINK = "link", s.LINK_DANGER = "link-danger";
        var c = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }

            return i(t, e), t.prototype.render = function () {
                var e = this, t = ["n1ed-button"];
                if (this.props.style && this.props.style !== a.DEFAULT && t.push("n1ed-button--" + this.props.style), this.props.extraClasses) for (var r = 0, i = this.props.extraClasses; r < i.length; r++) {
                    var s = i[r];
                    t.push(s)
                }
                return this.props.href ? (this.props.disabled && t.push("n1ed-button--disabled"), o.createElement("a", {
                    className: t.join(" "),
                    href: this.props.href,
                    onClick: function () {
                        e.props.onClick()
                    },
                    style: {width: this.props.width ? this.props.width : null},
                    target: this.props.newTab ? "_blank" : "_self"
                }, this.props.newTab && o.createElement("img", {src: n(42)}), this.props.title)) : o.createElement("button", {
                    className: t.join(" "),
                    style: {width: this.props.width ? this.props.width : null},
                    disabled: this.props.disabled,
                    onClick: function () {
                        e.props.onClick()
                    }
                }, this.props.loading && o.createElement(l.N1EDWaiting, null), this.props.img ? o.createElement(u.N1EDTitleWithImage, {
                    title: this.props.title,
                    img: this.props.img,
                    alt: this.props.alt,
                    isHorizontal: !0
                }) : o.createElement("span", null, this.props.title))
            }, t
        }(o.Component);
        t.N1EDButton = c
    }, function (e, t, n) {
        e.exports = n(115)()
    }, , function (e, t, n) {
        "use strict";
        !function e() {
            if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
            } catch (e) {
                console.error(e)
            }
        }(), e.exports = n(26)
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.classNames = function (e) {
            for (var t = [], n = 0, r = e; n < r.length; n++) {
                var i = r[n];
                if ("string" == typeof i) t.push(i); else for (var o in i) !0 === i[o] && t.push(o)
            }
            return t.join(" ")
        }, t.cloneDeep = function (e) {
            return JSON.parse(JSON.stringify(e))
        }, t.areArraysEqual = function (e, t) {
            if (e.length !== t.length) return !1;
            var n = e.sort(), r = t.sort();
            for (var i in n) if (n[i] !== r[i]) return !1;
            return !0
        }
    }, , , , function (e, t, n) {
        "use strict";
        var r, i = this && this.__extends || (r = function (e, t) {
            return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
        }, function (e, t) {
            function n() {
                this.constructor = e
            }

            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        });
        Object.defineProperty(t, "__esModule", {value: !0});
        var o = n(0), a = n(9), s = n(8);
        n(43);
        var l = n(14), u = n(35), c = n(5), p = function (e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.saved = !1, n.el = document.createElement("div"), n.el.className = "n1ed-dlg", n.el.addEventListener("click", function (e) {
                    e.target === n.el && (void 0 !== n.props.closeOnOutClick && !1 === n.props.closeOnOutClick || n.close())
                }), n.state = {isVisible: n.props.isVisible}, n.zIndexManager = new u.FeatureZIndexManager, n.zIndexManager.init(), n
            }

            return i(t, e), t.prototype.componentDidMount = function () {
                document.body.appendChild(this.el)
            }, t.prototype.componentWillUnmount = function () {
                document.body.removeChild(this.el)
            }, t.prototype.componentWillReceiveProps = function (e) {
                this.setState({isVisible: e.isVisible})
            }, t.prototype.close = function () {
                this.setState({isVisible: !1}), this.props.onClose && this.props.onClose()
            }, t.prototype.render = function () {
                var e = document.querySelector("body");
                this.state.isVisible ? this.saved || (this.saved = !0, this.savedOverflow = l.libHtml.getStyle(e, "overflow"), this.savedOverflowX = l.libHtml.getStyle(e, "overflow-x"), this.savedOverflowY = l.libHtml.getStyle(e, "overflow-y"), l.libHtml.setStyle(e, "overflow", "hidden !important"), l.libHtml.setStyle(e, "overflow-x", "hidden !important"), l.libHtml.setStyle(e, "overflow-y", "hidden !important"), l.libHtml.addClass(this.el, "n1ed-dlg--visible"), this.zIndex = this.zIndexManager.reserveZIndex(), l.libHtml.setStyle(this.el, "z-index", "" + this.zIndex)) : this.saved && (this.saved = !1, l.libHtml.setStyle(e, "overflow", this.savedOverflow), l.libHtml.setStyle(e, "overflow-x", this.savedOverflowX), l.libHtml.setStyle(e, "overflow-y", this.savedOverflowY), l.libHtml.removeClass(this.el, "n1ed-dlg--visible"), l.libHtml.removeStyle(this.el, "z-index"), this.zIndexManager.unReserveZIndex(this.zIndex));
                var t = a.classNames(["n1ed-dlg__content"]);
                if (!0 === this.props.noContentScroll && (t += " n1ed-dlg__content--no-content-scroll"), this.props.extraClasses) for (var n = 0, r = this.props.extraClasses; n < r.length; n++) t += " " + r[n];
                return s.createPortal(o.createElement("div", {
                    style: {padding: this.props.padding},
                    className: t
                }, this.props.children), this.el)
            }, t.showMessage = function (e, n, r, i, a) {
                void 0 === a && (a = null);
                var u = document.querySelector("body"), p = l.libHtml.createTagAndAdd(null, u), d = o.createRef(),
                    f = ["n1ed-dlg__content--message"];
                i && f.push("n1ed-dlg__content--message-error");
                var h = o.createElement("div", {className: "n1ed-dlg__content__message"}, n);
                r && (h = o.createElement("div", {
                    className: "n1ed-dlg__content__message",
                    dangerouslySetInnerHTML: {__html: n}
                })), s.render(o.createElement(t, {
                    isVisible: !0,
                    padding: "40px 70px",
                    ref: d,
                    extraClasses: f
                }, e && o.createElement("div", {className: "n1ed-dlg__content__title"}, e), n && h, o.createElement(c.N1EDButton, {
                    title: "OK",
                    style: c.N1EDButtonStyle.PRIMARY,
                    onClick: function () {
                        d.current.close(), a && a()
                    }
                })), p)
            }, t
        }(o.Component);
        t.N1EDDlg = p
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = function () {
            function e() {
            }

            return e.copyElement = function (t) {
                var n = e.createElement(t.tagName);
                n.innerHTML = t.innerHTML;
                for (var r = 0; r < t.attributes.length; r++) n.setAttribute(t.attributes[r].name, t.attributes[r].value);
                return n
            }, e.setAttributeIfChanged = function (e, t, n) {
                e.getAttribute(t) !== n && e.setAttribute(t, n)
            }, e.createElement = function (e, t) {
                return void 0 === e && (e = "div"), void 0 === t && (t = window.document), t.createElement(e)
            }, e.createTagAndAdd = function (t, n, r, i) {
                void 0 === r && (r = "div"), void 0 === i && (i = null), null == r && (r = "div");
                var o = e.createElement(r);
                return null != t && e.addClass(o, t), null != i && (o.textContent = i), n.appendChild(o), o
            }, e.addClass = function (t, n) {
                null != n && (e.hasClass(t, n) || (t.className = 0 === t.className.length ? n : t.className + " " + n))
            }, e.removeClass = function (t, n) {
                for (var r = e.getClasses(t), i = !1; -1 < r.indexOf(n);) i = !0, r.splice(r.indexOf(n), 1);
                i && e.setClasses(t, r)
            }, e.addOrRemoveClass = function (t, n, r) {
                r ? e.addClass(t, n) : e.removeClass(t, n)
            }, e.hasSVGClass = function (e, t) {
                return new RegExp("(\\s|^)" + t + "(\\s|$)").test(e.getAttribute("class"))
            }, e.addSVGClass = function (t, n) {
                e.hasSVGClass(t, n) || (null !== t.getAttribute("class") ? t.setAttribute("class", t.getAttribute("class") + " " + n) : t.setAttribute("class", n))
            }, e.removeSVGClass = function (t, n) {
                if (e.hasSVGClass(t, n)) {
                    var r = t.getAttribute("class").replace(new RegExp("(\\s|^)" + n + "(\\s|$)", "g"), "$2");
                    t.setAttribute("class", r)
                }
            }, e.removeAllSVGClass = function (e) {
                e.setAttribute("class", "")
            }, e.getClasses = function (t) {
                return void 0 === t.className || null == t.className ? [] : e.splitClasses(t.className)
            }, e.splitClasses = function (e) {
                var t = e.split(/\s+/);
                return 1 === t.length && "" === t[0] && (t = []), t
            }, e.setClasses = function (e, t) {
                if (0 === t.length) e.removeAttribute("class"); else {
                    for (var n = "", r = 0; r < t.length; r++) {
                        var i = t[r].trim();
                        0 < i.length && (0 < n.length && (n += " "), n += i)
                    }
                    e.className = n
                }
            }, e.hasClass = function (t, n) {
                for (var r = e.getClasses(t), i = 0; i < r.length; i++) if (r[i].toLowerCase() === n.toLowerCase()) return !0;
                return !1
            }, e.hasClassStartsWith = function (e, t) {
                return null != this.getClassStartsWith(e, t)
            }, e.getClassStartsWith = function (t, n) {
                for (var r = e.getClasses(t), i = 0; i < r.length; i++) if (0 === r[i].indexOf(n)) return r[i];
                return null
            }, e.getStyles = function (e) {
                if (void 0 === e.getAttribute("style") || null == e.getAttribute("style") || 0 === e.getAttribute("style").trim().length) return {};
                for (var t = {}, n = e.getAttribute("style").split(/;/), r = 0; r < n.length; r++) {
                    var i = n[r].trim();
                    if (0 < i.length) {
                        var o = i.indexOf(":");
                        -1 < o ? t[i.substr(0, o).trim()] = i.substr(o + 1) : t[i] = ""
                    }
                }
                return t
            }, e.getStyleRemovePx = function (t, n, r) {
                void 0 === r && (r = null);
                var i = e.getStyle(t, n);
                return null == i ? r : (i = i.substring(0, i.length - 2), parseInt(i))
            }, e.getStyle = function (t, n) {
                var r = e.getStyles(t);
                for (var i in r) {
                    var o = r[i].trim();
                    if (i === n) return o
                }
                return null
            }, e.hasStyle = function (t, n, r) {
                var i = e.getStyles(t);
                for (var o in i) {
                    var a = i[o];
                    if (o === n && a === r) return !0
                }
                return !1
            }, e.setOrRemoveStyle = function (t, n, r, i) {
                i ? e.setStyle(t, n, r) : e.removeStyle(t, n)
            }, e.setStyle = function (t, n, r) {
                if (null == r) e.removeStyle(t, n); else {
                    var i = e.getStyles(t);
                    if (n in i && i[n] === r) return;
                    i[n] = r, e.setStyles(t, i)
                }
            }, e.removeStyle = function (t, n) {
                var r = e.getStyles(t);
                n in r && (delete r[n], e.setStyles(t, r))
            }, e.setStyles = function (e, t) {
                var n = [];
                for (var r in t) 0 < r.trim().length && n.push(r + ":" + t[r.trim()]);
                0 < n.length ? e.setAttribute("style", n.join(";")) : e.hasAttribute("style") && e.removeAttribute("style")
            }, e.escapeHtml = function (e) {
                return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
            }, e.createElementFromHtml = function (t, n) {
                void 0 === n && (n = ["div"]);
                for (var r = e.createElement(n[0]), i = 1; i < n.length; i++) r = e.createTagAndAdd(null, r, n[i]);
                return r.innerHTML = t, r.children[0]
            }, e.createHtmlFromElement = function (t) {
                var n = e.getRequiredTagNamesOfParents(t);
                t = t.cloneNode(!0);
                for (var r = e.createElement(n[0]), i = 1; i < n.length; i++) r = e.createTagAndAdd(null, r, n[i]);
                return r.appendChild(null == t.parentElement ? t : t.cloneNode(!0)), r.innerHTML
            }, e.getDocHtml = function (e) {
                return void 0 === e && (e = document), e.getElementsByTagName("html")[0]
            }, e.getDocHead = function (e) {
                return void 0 === e && (e = document), e.getElementsByTagName("head")[0]
            }, e.getDocBody = function (e) {
                return void 0 === e && (e = document), e.getElementsByTagName("body")[0]
            }, e.setCacheSuffix = function (t) {
                e.cacheSuffix = t
            }, e.includeCSS = function (t, n) {
                void 0 === n && (n = document);
                for (var r = n.getElementsByTagName("link"), i = 0; i < r.length; i++) if (-1 !== r[i].getAttribute("href").indexOf(t)) return null;
                var o = n.createElement("link");
                return o.href = t + e.cacheSuffix, o.type = "text/css", o.rel = "stylesheet", e.getDocHead(n).appendChild(o), o
            }, e.excludeJS = function (e, t) {
                void 0 === t && (t = document);
                for (var n = t.getElementsByTagName("script"), r = n.length - 1; 0 <= r; r--) {
                    var i = n[r], o = i.getAttribute("src");
                    null != o && o === e && i.parentElement.removeChild(i)
                }
            }, e.includeJS = function (t, n, r) {
                void 0 === n && (n = document), void 0 === r && (r = null);
                for (var i = n.getElementsByTagName("script"), o = !1, a = 0; a < i.length; a++) {
                    var s = i[a].getAttribute("src");
                    null != s && -1 !== s.indexOf(t) && (o = !0)
                }
                if (o) return null != r && r(), null;
                var l = n.createElement("script");
                return l.type = "text/javascript", null != r && (l.readyState ? l.onreadystatechange = function () {
                    "loaded" !== l.readyState && "complete" !== l.readyState || (l.onreadystatechange = null, r())
                } : l.onload = function () {
                    r()
                }), l.src = t + e.cacheSuffix, e.getDocHead(n).appendChild(l), l
            }, e.embedCSS = function (t, n) {
                void 0 === n && (n = document);
                var r = n.createElement("style");
                return e.getDocHead(n).appendChild(r), r.innerHTML = t, r
            }, e.getAttributes = function (e, t) {
                void 0 === t && (t = []);
                for (var n = e.attributes, r = {}, i = 0; i < n.length; i++) {
                    for (var o = !1, a = n[i].nodeName, s = 0; s < t.length && !o; s++) t[s] === a && (o = !0);
                    o || (r[a] = n[i].nodeValue)
                }
                return r
            }, e.setAttributes = function (t, n, r) {
                void 0 === r && (r = []);
                for (var i = [], o = 0; o < t.attributes.length; o++) i.push(t.attributes[o].name);
                for (var a = 0, s = i; a < s.length; a++) {
                    var l = s[a];
                    if (-1 === r.indexOf(l)) {
                        var u = !0;
                        for (o = 0; o < n.length; o++) n[o][0] === l && (u = !1);
                        u && t.removeAttribute(l)
                    }
                }
                for (o = 0; o < n.length; o++) {
                    for (var c = !1, p = n[o][0], d = n[o][1], f = 0; f < r.length && !c; f++) r[f] === p && (c = !0);
                    c || e.setAttribute(t, p, d)
                }
            }, e.removeAttribute = function (t, n) {
                e.setAttribute(t, n, null)
            }, e.setAttribute = function (e, t, n) {
                var r = t.trim();
                if ("" !== r) try {
                    null == n ? e.removeAttribute(r) : e.setAttribute(r, n)
                } catch (e) {
                }
            }, e.getNumberAttribute = function (e, t, n) {
                if (!e.hasAttribute(t)) return n;
                var r = e.getAttribute(t), i = parseInt(r);
                return isNaN(i) ? n : i
            }, e.getPositiveNumberAttribute = function (t, n, r) {
                var i = e.getNumberAttribute(t, n, r);
                return i < 0 ? r : i
            }, e.getWindowWidth = function () {
                var e = 0;
                return "number" == typeof window.innerWidth ? e = window.innerWidth : document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight) ? e = document.documentElement.clientWidth : document.body && (document.body.clientWidth || document.body.clientHeight) && (e = document.body.clientWidth), e
            }, e.getWindowHeight = function () {
                var e = 0;
                return "number" == typeof window.innerWidth ? e = window.innerHeight : document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight) ? e = document.documentElement.clientHeight : document.body && (document.body.clientWidth || document.body.clientHeight) && (e = document.body.clientHeight), e
            }, e.addInputOnChangeListener = function (e, t) {
                for (var n = 0, r = ["propertychange", "change", "click", "keyup", "input", "paste"]; n < r.length; n++) {
                    var i = r[n];
                    e.addEventListener(i, function () {
                        var n = e, r = t;
                        return function (e) {
                            r(null == n.value ? "" : n.value, e.type)
                        }
                    }())
                }
            }, e.updateElement = function (t, n, r) {
                var i = e.getAttributes(t), o = e.getAttributes(n);
                for (var a in i) a in o || e.removeAttribute(t, a);
                for (var a in o) e.setAttribute(t, a, o[a]);
                var s = t;
                return "BODY" !== t.tagName && t.tagName !== n.tagName && (s = e.changeTagName(t, n.tagName), e.insertBefore(t, s), t.parentNode.removeChild(t)), r && (s.innerHTML = n.innerHTML), s
            }, e.changeTagName = function (e, t) {
                for (var n = document.createElement(t), r = 0; r < e.attributes.length; r++) {
                    var i = e.attributes.item(r);
                    n.setAttribute(i.name, i.value)
                }
                return n.innerHTML = e.innerHTML, n
            }, e.insertBefore = function (e, t) {
                e.parentElement.insertBefore(t, e)
            }, e.insertAfter = function (e, t) {
                e.parentElement.insertBefore(t, e.nextSibling)
            }, e.insertFirst = function (t, n) {
                if (0 < t.children.length) {
                    var r = t.children.item(0);
                    e.insertBefore(r, n)
                } else t.appendChild(n)
            }, e.getFirstLevelChildren = function (e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                for (var r = e.children, i = [], o = 0; o < r.length; o++) for (var a = 0, s = t; a < s.length; a++) {
                    var l = s[a];
                    r.item(o).tagName.toLowerCase() === l.toLowerCase() && i.push(r.item(o))
                }
                return i
            }, e.selectFiles = function (t, n, r) {
                if (!e.opened) {
                    e.opened = !0;
                    var i = "jsplus_upload_form_" + ++e.currentFormNumber, o = document.getElementById(i);
                    null != o && o.parentNode.removeChild(o), o = e.createElement("form"), e.setAttribute(o, "id", i), e.setAttribute(o, "enctype", "multipart/form-data"), e.setStyle(o, "display", "none"), e.getDocBody(document).appendChild(o);
                    var a = e.createElement("input");
                    e.setAttribute(a, "type", "file"), e.setAttribute(a, "name", "file"), o.appendChild(a), t && e.setAttribute(a, "multiple", "multiple"), null != n && 0 < n.length && e.setAttribute(a, "accept", n);
                    var s, l, u = (s = a, l = r, e.opened = !1, function () {
                        for (var e = [], t = 0; t < s.files.length; t++) e.push(s.files[t]);
                        l(e)
                    });
                    a.addEventListener("change", u), a.click()
                }
            }, e.hasClassN1 = function (e, t) {
                return this.hasClass(e, t) || this.hasClass(e, "n1" + t)
            }, e.applyTemplate = function (e, t) {
                for (var n in t.attributes) {
                    var r = t.attributes[n] + "";
                    this.setAttribute(e, n, r)
                }
                this.setAttribute(e, "class", t.classes ? t.classes.join(" ") : null);
                var i = [];
                for (var o in t.styles) {
                    var a = t.styles[o] + "";
                    i.push(o + ":" + a)
                }
                this.setAttribute(e, "style", i.join(";"))
            }, e.getRequiredTagNamesOfParents = function (e) {
                var t = [];
                if (e.nodeType === Node.ELEMENT_NODE) {
                    var n = e;
                    for (n = n.parentElement; n && -1 === ["BODY", "P", "DIV"].indexOf(n.tagName);) t.push(n.tagName), n = n.parentElement;
                    t.push("div")
                }
                return 0 === t.length && t.push("div"), t.reverse()
            }, e.cacheSuffix = "", e.currentFormNumber = 0, e.opened = !1, e
        }();
        t.libHtml = r
    }, function (e, t, n) {
        "use strict";
        var r, i = this && this.__extends || (r = function (e, t) {
            return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
        }, function (e, t) {
            function n() {
                this.constructor = e
            }

            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        });
        Object.defineProperty(t, "__esModule", {value: !0});
        var o = n(0);
        n(30);
        var a = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }

            return i(t, e), t.prototype.render = function () {
                return this.props.img ? this.props.title ? this.renderTitleWithImage() : this.renderImage(!0) : this.renderTitle(!0)
            }, t.prototype.getClasses = function (e, t) {
                var n = e;
                return t && this.props.className && (n += " " + this.props.className), n
            }, t.prototype.renderTitle = function (e) {
                var t = this;
                return o.createElement("div", {
                    key: "title",
                    style: e ? this.props.style : this.props.titleStyle,
                    className: this.getClasses("n1ed-title-with-image n1ed-title-with-image--title-only", e),
                    onClick: e ? function () {
                        t.props.onClick && t.props.onClick()
                    } : null
                }, this.props.title)
            }, t.prototype.renderImage = function (e) {
                var t = this, n = e ? this.props.style : this.props.imgStyle;
                return n || (n = {}), n.width = this.props.imgWidth, n.height = this.props.imgHeight, o.createElement("img", {
                    key: "image",
                    className: this.getClasses("n1ed-title-with-image n1ed-title-with-image--image-only", e),
                    style: n,
                    src: this.props.img,
                    alt: this.props.alt,
                    onClick: e ? function () {
                        t.props.onClick && t.props.onClick()
                    } : null
                })
            }, t.prototype.renderTitleWithImage = function () {
                var e = this;
                return o.createElement("div", {
                    style: this.props.style,
                    className: this.getClasses("n1ed-title-with-image n1ed-title-with-image--both" + (this.props.isHorizontal ? " n1ed-title-with-image--both--hor" : ""), !0),
                    onClick: function () {
                        e.props.onClick && e.props.onClick()
                    }
                }, this.renderImage(!1), this.renderTitle(!1))
            }, t
        }(o.Component);
        t.N1EDTitleWithImage = a
    }, , function (e, t, n) {
        "use strict";
        var r, i = this && this.__extends || (r = function (e, t) {
            return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
        }, function (e, t) {
            function n() {
                this.constructor = e
            }

            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        });
        Object.defineProperty(t, "__esModule", {value: !0});
        var o = n(0);
        n(45);
        var a = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }

            return i(t, e), t.prototype.render = function () {
                var e = this, t = ["n1ed-textfield"];
                if (this.props.extraClasses) for (var n = 0, r = this.props.extraClasses; n < r.length; n++) {
                    var i = r[n];
                    t.push(i)
                }
                var a = this.props.style ? this.props.style : {};
                return a.width = this.props.width ? this.props.width : null, !0 === this.props.textarea ? o.createElement("textarea", {
                    autoComplete: !1 === this.props.spellCheck ? "off" : null,
                    autoCorrect: !1 === this.props.spellCheck ? "off" : null,
                    autoCapitalize: !1 === this.props.spellCheck ? "off" : null,
                    spellCheck: !1 !== this.props.spellCheck,
                    value: this.props.value,
                    placeholder: this.props.placeholder,
                    className: t.join(" "),
                    style: a,
                    disabled: this.props.disabled,
                    readOnly: this.props.readonly,
                    onChange: function (t) {
                        e.props.onChange(t.target.value)
                    },
                    onKeyDown: function (t) {
                        e.props.onKeyDown && e.props.onKeyDown(t)
                    }
                }) : o.createElement("input", {
                    autoComplete: !1 === this.props.spellCheck ? "off" : null,
                    autoCorrect: !1 === this.props.spellCheck ? "off" : null,
                    autoCapitalize: !1 === this.props.spellCheck ? "off" : null,
                    spellCheck: !1 !== this.props.spellCheck,
                    type: !0 === this.props.password ? "password" : "text",
                    value: this.props.value,
                    placeholder: this.props.placeholder,
                    className: t.join(" "),
                    style: a,
                    disabled: this.props.disabled,
                    readOnly: this.props.readonly,
                    onChange: function (t) {
                        e.props.onChange(t.target.value)
                    },
                    onKeyDown: function (t) {
                        e.props.onKeyDown && e.props.onKeyDown(t)
                    }
                })
            }, t
        }(o.Component);
        t.N1EDTextField = a
    }, , , function (e, t, n) {
        "use strict";
        var r = Object.getOwnPropertySymbols, i = Object.prototype.hasOwnProperty,
            o = Object.prototype.propertyIsEnumerable;
        e.exports = function () {
            try {
                if (!Object.assign) return !1;
                var e = new String("abc");
                if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                if ("0123456789" !== Object.getOwnPropertyNames(t).map(function (e) {
                    return t[e]
                }).join("")) return !1;
                var r = {};
                return "abcdefghijklmnopqrst".split("").forEach(function (e) {
                    r[e] = e
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
            } catch (e) {
                return !1
            }
        }() ? Object.assign : function (e, t) {
            for (var n, a, s = function (e) {
                if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(e)
            }(e), l = 1; l < arguments.length; l++) {
                for (var u in n = Object(arguments[l])) i.call(n, u) && (s[u] = n[u]);
                if (r) {
                    a = r(n);
                    for (var c = 0; c < a.length; c++) o.call(n, a[c]) && (s[a[c]] = n[a[c]])
                }
            }
            return s
        }
    }, , , function (e, t, n) {
        "use strict";
        e.exports = function (e, t, n, r, i, o, a, s) {
            if (!e) {
                var l;
                if (void 0 === t) l = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."); else {
                    var u = [n, r, i, o, a, s], c = 0;
                    (l = new Error(t.replace(/%s/g, function () {
                        return u[c++]
                    }))).name = "Invariant Violation"
                }
                throw l.framesToPop = 1, l
            }
        }
    }, function (e, t) {
        e.exports = function (e) {
            var t = "undefined" != typeof window && window.location;
            if (!t) throw new Error("fixUrls requires window.location");
            if (!e || "string" != typeof e) return e;
            var n = t.protocol + "//" + t.host, r = n + t.pathname.replace(/\/[^\/]*$/, "/");
            return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
                var i, o = t.trim().replace(/^"(.*)"$/, function (e, t) {
                    return t
                }).replace(/^'(.*)'$/, function (e, t) {
                    return t
                });
                return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o) ? e : (i = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? n + o : r + o.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")")
            })
        }
    }, , function (e, t, n) {
        "use strict";

        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        var i = n(0), o = n(20), a = n(28);

        function s(e) {
            for (var t = e.message, n = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, r = 1; r < arguments.length; r++) n += "&args[]=" + encodeURIComponent(arguments[r]);
            return e.message = "Minified React error #" + t + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", e
        }

        if (!i) throw s(Error(227));
        var l = null, u = {};

        function c() {
            if (l) for (var e in u) {
                var t = u[e], n = l.indexOf(e);
                if (!(-1 < n)) throw s(Error(96), e);
                if (!d[n]) {
                    if (!t.extractEvents) throw s(Error(97), e);
                    for (var r in n = (d[n] = t).eventTypes) {
                        var i = void 0, o = n[r], a = t, c = r;
                        if (f.hasOwnProperty(c)) throw s(Error(99), c);
                        var h = (f[c] = o).phasedRegistrationNames;
                        if (h) {
                            for (i in h) h.hasOwnProperty(i) && p(h[i], a, c);
                            i = !0
                        } else i = !!o.registrationName && (p(o.registrationName, a, c), !0);
                        if (!i) throw s(Error(98), r, e)
                    }
                }
            }
        }

        function p(e, t, n) {
            if (h[e]) throw s(Error(100), e);
            h[e] = t, _[e] = t.eventTypes[n].dependencies
        }

        var d = [], f = {}, h = {}, _ = {}, m = !1, g = null, v = !1, y = null, b = {
            onError: function (e) {
                m = !0, g = e
            }
        };
        var w = null, x = null, k = null;

        function C(e, t, n) {
            var r = e.type || "unknown-event";
            e.currentTarget = k(n), function (e, t, n, r, i, o, a, l, u) {
                if (function (e, t, n, r, i, o, a, s, l) {
                    m = !1, g = null, function (e, t, n, r, i, o, a, s, l) {
                        var u = Array.prototype.slice.call(arguments, 3);
                        try {
                            t.apply(n, u)
                        } catch (e) {
                            this.onError(e)
                        }
                    }.apply(b, arguments)
                }.apply(this, arguments), m) {
                    if (!m) throw s(Error(198));
                    var c = g;
                    m = !1, g = null, v || (v = !0, y = c)
                }
            }(r, t, void 0, e), e.currentTarget = null
        }

        function S(e, t) {
            if (null == t) throw s(Error(30));
            return null == e ? t : Array.isArray(e) ? (Array.isArray(t) ? e.push.apply(e, t) : e.push(t), e) : Array.isArray(t) ? [e].concat(t) : [e, t]
        }

        function E(e, t, n) {
            Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e)
        }

        var T = null;

        function O(e) {
            if (e) {
                var t = e._dispatchListeners, n = e._dispatchInstances;
                if (Array.isArray(t)) for (var r = 0; r < t.length && !e.isPropagationStopped(); r++) C(e, t[r], n[r]); else t && C(e, t, n);
                e._dispatchListeners = null, e._dispatchInstances = null, e.isPersistent() || e.constructor.release(e)
            }
        }

        function N(e) {
            if (null !== e && (T = S(T, e)), e = T, T = null, e) {
                if (E(e, O), T) throw s(Error(95));
                if (v) throw e = y, v = !1, y = null, e
            }
        }

        var M = {
            injectEventPluginOrder: function (e) {
                if (l) throw s(Error(101));
                l = Array.prototype.slice.call(e), c()
            }, injectEventPluginsByName: function (e) {
                var t, n = !1;
                for (t in e) if (e.hasOwnProperty(t)) {
                    var r = e[t];
                    if (!u.hasOwnProperty(t) || u[t] !== r) {
                        if (u[t]) throw s(Error(102), t);
                        u[t] = r, n = !0
                    }
                }
                n && c()
            }
        };

        function A(e, t) {
            var n = e.stateNode;
            if (!n) return null;
            var i = w(n);
            if (!i) return null;
            n = i[t];
            e:switch (t) {
                case"onClick":
                case"onClickCapture":
                case"onDoubleClick":
                case"onDoubleClickCapture":
                case"onMouseDown":
                case"onMouseDownCapture":
                case"onMouseMove":
                case"onMouseMoveCapture":
                case"onMouseUp":
                case"onMouseUpCapture":
                    (i = !i.disabled) || (i = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !i;
                    break e;
                default:
                    e = !1
            }
            if (e) return null;
            if (n && "function" != typeof n) throw s(Error(231), t, r(n));
            return n
        }

        var P = Math.random().toString(36).slice(2), L = "__reactInternalInstance$" + P,
            R = "__reactEventHandlers$" + P;

        function D(e) {
            if (e[L]) return e[L];
            for (; !e[L];) {
                if (!e.parentNode) return null;
                e = e.parentNode
            }
            return 5 === (e = e[L]).tag || 6 === e.tag ? e : null
        }

        function I(e) {
            return !(e = e[L]) || 5 !== e.tag && 6 !== e.tag ? null : e
        }

        function z(e) {
            if (5 === e.tag || 6 === e.tag) return e.stateNode;
            throw s(Error(33))
        }

        function j(e) {
            return e[R] || null
        }

        function W(e) {
            for (; (e = e.return) && 5 !== e.tag;) ;
            return e || null
        }

        function F(e, t, n) {
            (t = A(e, n.dispatchConfig.phasedRegistrationNames[t])) && (n._dispatchListeners = S(n._dispatchListeners, t), n._dispatchInstances = S(n._dispatchInstances, e))
        }

        function H(e) {
            if (e && e.dispatchConfig.phasedRegistrationNames) {
                for (var t = e._targetInst, n = []; t;) n.push(t), t = W(t);
                for (t = n.length; 0 < t--;) F(n[t], "captured", e);
                for (t = 0; t < n.length; t++) F(n[t], "bubbled", e)
            }
        }

        function U(e, t, n) {
            e && n && n.dispatchConfig.registrationName && (t = A(e, n.dispatchConfig.registrationName)) && (n._dispatchListeners = S(n._dispatchListeners, t), n._dispatchInstances = S(n._dispatchInstances, e))
        }

        function B(e) {
            e && e.dispatchConfig.registrationName && U(e._targetInst, null, e)
        }

        function V(e) {
            E(e, H)
        }

        var $ = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement);

        function K(e, t) {
            var n = {};
            return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
        }

        var G = {
            animationend: K("Animation", "AnimationEnd"),
            animationiteration: K("Animation", "AnimationIteration"),
            animationstart: K("Animation", "AnimationStart"),
            transitionend: K("Transition", "TransitionEnd")
        }, q = {}, X = {};

        function Y(e) {
            if (q[e]) return q[e];
            if (!G[e]) return e;
            var t, n = G[e];
            for (t in n) if (n.hasOwnProperty(t) && t in X) return q[e] = n[t];
            return e
        }

        $ && (X = document.createElement("div").style, "AnimationEvent" in window || (delete G.animationend.animation, delete G.animationiteration.animation, delete G.animationstart.animation), "TransitionEvent" in window || delete G.transitionend.transition);
        var Q = Y("animationend"), Z = Y("animationiteration"), J = Y("animationstart"), ee = Y("transitionend"),
            te = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
            ne = null, re = null, ie = null;

        function oe() {
            if (ie) return ie;
            var e, t, n = re, r = n.length, i = "value" in ne ? ne.value : ne.textContent, o = i.length;
            for (e = 0; e < r && n[e] === i[e]; e++) ;
            var a = r - e;
            for (t = 1; t <= a && n[r - t] === i[o - t]; t++) ;
            return ie = i.slice(e, 1 < t ? 1 - t : void 0)
        }

        function ae() {
            return !0
        }

        function se() {
            return !1
        }

        function le(e, t, n, r) {
            for (var i in this.dispatchConfig = e, this._targetInst = t, this.nativeEvent = n, e = this.constructor.Interface) e.hasOwnProperty(i) && ((t = e[i]) ? this[i] = t(n) : "target" === i ? this.target = r : this[i] = n[i]);
            return this.isDefaultPrevented = (null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue) ? ae : se, this.isPropagationStopped = se, this
        }

        function ue(e, t, n, r) {
            if (this.eventPool.length) {
                var i = this.eventPool.pop();
                return this.call(i, e, t, n, r), i
            }
            return new this(e, t, n, r)
        }

        function ce(e) {
            if (!(e instanceof this)) throw s(Error(279));
            e.destructor(), this.eventPool.length < 10 && this.eventPool.push(e)
        }

        function pe(e) {
            e.eventPool = [], e.getPooled = ue, e.release = ce
        }

        o(le.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = ae)
            }, stopPropagation: function () {
                var e = this.nativeEvent;
                e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = ae)
            }, persist: function () {
                this.isPersistent = ae
            }, isPersistent: se, destructor: function () {
                var e, t = this.constructor.Interface;
                for (e in t) this[e] = null;
                this.nativeEvent = this._targetInst = this.dispatchConfig = null, this.isPropagationStopped = this.isDefaultPrevented = se, this._dispatchInstances = this._dispatchListeners = null
            }
        }), le.Interface = {
            type: null, target: null, currentTarget: function () {
                return null
            }, eventPhase: null, bubbles: null, cancelable: null, timeStamp: function (e) {
                return e.timeStamp || Date.now()
            }, defaultPrevented: null, isTrusted: null
        }, le.extend = function (e) {
            function t() {
            }

            function n() {
                return r.apply(this, arguments)
            }

            var r = this;
            t.prototype = r.prototype;
            var i = new t;
            return o(i, n.prototype), ((n.prototype = i).constructor = n).Interface = o({}, r.Interface, e), n.extend = r.extend, pe(n), n
        }, pe(le);
        var de = le.extend({data: null}), fe = le.extend({data: null}), he = [9, 13, 27, 32],
            _e = $ && "CompositionEvent" in window, me = null;
        $ && "documentMode" in document && (me = document.documentMode);
        var ge = $ && "TextEvent" in window && !me, ve = $ && (!_e || me && 8 < me && me <= 11),
            ye = String.fromCharCode(32), be = {
                beforeInput: {
                    phasedRegistrationNames: {bubbled: "onBeforeInput", captured: "onBeforeInputCapture"},
                    dependencies: ["compositionend", "keypress", "textInput", "paste"]
                },
                compositionEnd: {
                    phasedRegistrationNames: {
                        bubbled: "onCompositionEnd",
                        captured: "onCompositionEndCapture"
                    }, dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
                },
                compositionStart: {
                    phasedRegistrationNames: {
                        bubbled: "onCompositionStart",
                        captured: "onCompositionStartCapture"
                    }, dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
                },
                compositionUpdate: {
                    phasedRegistrationNames: {
                        bubbled: "onCompositionUpdate",
                        captured: "onCompositionUpdateCapture"
                    }, dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
                }
            }, we = !1;

        function xe(e, t) {
            switch (e) {
                case"keyup":
                    return -1 !== he.indexOf(t.keyCode);
                case"keydown":
                    return 229 !== t.keyCode;
                case"keypress":
                case"mousedown":
                case"blur":
                    return !0;
                default:
                    return !1
            }
        }

        function ke(e) {
            return "object" === r(e = e.detail) && "data" in e ? e.data : null
        }

        var Ce = !1, Se = {
            eventTypes: be, extractEvents: function (e, t, n, r) {
                var i = void 0, o = void 0;
                if (_e) e:{
                    switch (e) {
                        case"compositionstart":
                            i = be.compositionStart;
                            break e;
                        case"compositionend":
                            i = be.compositionEnd;
                            break e;
                        case"compositionupdate":
                            i = be.compositionUpdate;
                            break e
                    }
                    i = void 0
                } else Ce ? xe(e, n) && (i = be.compositionEnd) : "keydown" === e && 229 === n.keyCode && (i = be.compositionStart);
                return o = i ? (ve && "ko" !== n.locale && (Ce || i !== be.compositionStart ? i === be.compositionEnd && Ce && (o = oe()) : (re = "value" in (ne = r) ? ne.value : ne.textContent, Ce = !0)), i = de.getPooled(i, t, n, r), o ? i.data = o : null !== (o = ke(n)) && (i.data = o), V(i), i) : null, (e = ge ? function (e, t) {
                    switch (e) {
                        case"compositionend":
                            return ke(t);
                        case"keypress":
                            return 32 !== t.which ? null : (we = !0, ye);
                        case"textInput":
                            return (e = t.data) === ye && we ? null : e;
                        default:
                            return null
                    }
                }(e, n) : function (e, t) {
                    if (Ce) return "compositionend" === e || !_e && xe(e, t) ? (e = oe(), ie = re = ne = null, Ce = !1, e) : null;
                    switch (e) {
                        case"paste":
                            return null;
                        case"keypress":
                            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                if (t.char && 1 < t.char.length) return t.char;
                                if (t.which) return String.fromCharCode(t.which)
                            }
                            return null;
                        case"compositionend":
                            return ve && "ko" !== t.locale ? null : t.data;
                        default:
                            return null
                    }
                }(e, n)) ? ((t = fe.getPooled(be.beforeInput, t, n, r)).data = e, V(t)) : t = null, null === o ? t : null === t ? o : [o, t]
            }
        }, Ee = null, Te = null, Oe = null;

        function Ne(e) {
            if (e = x(e)) {
                if ("function" != typeof Ee) throw s(Error(280));
                var t = w(e.stateNode);
                Ee(e.stateNode, e.type, t)
            }
        }

        function Me(e) {
            Te ? Oe ? Oe.push(e) : Oe = [e] : Te = e
        }

        function Ae() {
            if (Te) {
                var e = Te, t = Oe;
                if (Oe = Te = null, Ne(e), t) for (e = 0; e < t.length; e++) Ne(t[e])
            }
        }

        function Pe(e, t) {
            return e(t)
        }

        function Le(e, t, n, r) {
            return e(t, n, r)
        }

        function Re() {
        }

        var De = Pe, Ie = !1;

        function ze() {
            null === Te && null === Oe || (Re(), Ae())
        }

        var je = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0
        };

        function We(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return "input" === t ? !!je[e.type] : "textarea" === t
        }

        function Fe(e) {
            return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
        }

        function He(e) {
            if (!$) return !1;
            var t = (e = "on" + e) in document;
            return t || ((t = document.createElement("div")).setAttribute(e, "return;"), t = "function" == typeof t[e]), t
        }

        function Ue(e) {
            var t = e.type;
            return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
        }

        function Be(e) {
            e._valueTracker || (e._valueTracker = function (e) {
                var t = Ue(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                    r = "" + e[t];
                if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
                    var i = n.get, o = n.set;
                    return Object.defineProperty(e, t, {
                        configurable: !0, get: function () {
                            return i.call(this)
                        }, set: function (e) {
                            r = "" + e, o.call(this, e)
                        }
                    }), Object.defineProperty(e, t, {enumerable: n.enumerable}), {
                        getValue: function () {
                            return r
                        }, setValue: function (e) {
                            r = "" + e
                        }, stopTracking: function () {
                            e._valueTracker = null, delete e[t]
                        }
                    }
                }
            }(e))
        }

        function Ve(e) {
            if (!e) return !1;
            var t = e._valueTracker;
            if (!t) return !0;
            var n = t.getValue(), r = "";
            return e && (r = Ue(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
        }

        var $e = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        $e.hasOwnProperty("ReactCurrentDispatcher") || ($e.ReactCurrentDispatcher = {current: null}), $e.hasOwnProperty("ReactCurrentBatchConfig") || ($e.ReactCurrentBatchConfig = {suspense: null});
        var Ke = /^(.*)[\\\/]/, Ge = "function" == typeof Symbol && Symbol.for,
            qe = Ge ? Symbol.for("react.element") : 60103, Xe = Ge ? Symbol.for("react.portal") : 60106,
            Ye = Ge ? Symbol.for("react.fragment") : 60107, Qe = Ge ? Symbol.for("react.strict_mode") : 60108,
            Ze = Ge ? Symbol.for("react.profiler") : 60114, Je = Ge ? Symbol.for("react.provider") : 60109,
            et = Ge ? Symbol.for("react.context") : 60110, tt = Ge ? Symbol.for("react.concurrent_mode") : 60111,
            nt = Ge ? Symbol.for("react.forward_ref") : 60112, rt = Ge ? Symbol.for("react.suspense") : 60113,
            it = Ge ? Symbol.for("react.suspense_list") : 60120, ot = Ge ? Symbol.for("react.memo") : 60115,
            at = Ge ? Symbol.for("react.lazy") : 60116;
        Ge && Symbol.for("react.fundamental"), Ge && Symbol.for("react.responder");
        var st = "function" == typeof Symbol && Symbol.iterator;

        function lt(e) {
            return null === e || "object" !== r(e) ? null : "function" == typeof (e = st && e[st] || e["@@iterator"]) ? e : null
        }

        function ut(e) {
            if (null == e) return null;
            if ("function" == typeof e) return e.displayName || e.name || null;
            if ("string" == typeof e) return e;
            switch (e) {
                case Ye:
                    return "Fragment";
                case Xe:
                    return "Portal";
                case Ze:
                    return "Profiler";
                case Qe:
                    return "StrictMode";
                case rt:
                    return "Suspense";
                case it:
                    return "SuspenseList"
            }
            if ("object" === r(e)) switch (e.$$typeof) {
                case et:
                    return "Context.Consumer";
                case Je:
                    return "Context.Provider";
                case nt:
                    var t = e.render;
                    return t = t.displayName || t.name || "", e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
                case ot:
                    return ut(e.type);
                case at:
                    if (e = 1 === e._status ? e._result : null) return ut(e)
            }
            return null
        }

        function ct(e) {
            var t = "";
            do {
                e:switch (e.tag) {
                    case 3:
                    case 4:
                    case 6:
                    case 7:
                    case 10:
                    case 9:
                        var n = "";
                        break e;
                    default:
                        var r = e._debugOwner, i = e._debugSource, o = ut(e.type);
                        n = null, r && (n = ut(r.type)), r = o, o = "", i ? o = " (at " + i.fileName.replace(Ke, "") + ":" + i.lineNumber + ")" : n && (o = " (created by " + n + ")"), n = "\n    in " + (r || "Unknown") + o
                }
                t += n, e = e.return
            } while (e);
            return t
        }

        var pt = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
            dt = Object.prototype.hasOwnProperty, ft = {}, ht = {};

        function _t(e, t, n, r, i, o) {
            this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o
        }

        var mt = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
            mt[e] = new _t(e, 0, !1, e, null, !1)
        }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) {
            var t = e[0];
            mt[t] = new _t(t, 1, !1, e[1], null, !1)
        }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
            mt[e] = new _t(e, 2, !1, e.toLowerCase(), null, !1)
        }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
            mt[e] = new _t(e, 2, !1, e, null, !1)
        }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
            mt[e] = new _t(e, 3, !1, e.toLowerCase(), null, !1)
        }), ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            mt[e] = new _t(e, 3, !0, e, null, !1)
        }), ["capture", "download"].forEach(function (e) {
            mt[e] = new _t(e, 4, !1, e, null, !1)
        }), ["cols", "rows", "size", "span"].forEach(function (e) {
            mt[e] = new _t(e, 6, !1, e, null, !1)
        }), ["rowSpan", "start"].forEach(function (e) {
            mt[e] = new _t(e, 5, !1, e.toLowerCase(), null, !1)
        });
        var gt = /[\-:]([a-z])/g;

        function vt(e) {
            return e[1].toUpperCase()
        }

        function yt(e, t, n, i) {
            var o, a = mt.hasOwnProperty(t) ? mt[t] : null;
            (null !== a ? 0 === a.type : !i && 2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1])) || (function (e, t, n, i) {
                if (null == t || function (e, t, n, i) {
                    if (null !== n && 0 === n.type) return !1;
                    switch (r(t)) {
                        case"function":
                        case"symbol":
                            return !0;
                        case"boolean":
                            return !i && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                        default:
                            return !1
                    }
                }(e, t, n, i)) return !0;
                if (i) return !1;
                if (null !== n) switch (n.type) {
                    case 3:
                        return !t;
                    case 4:
                        return !1 === t;
                    case 5:
                        return isNaN(t);
                    case 6:
                        return isNaN(t) || t < 1
                }
                return !1
            }(t, n, a, i) && (n = null), i || null === a ? (o = t, (dt.call(ht, o) || !dt.call(ft, o) && (pt.test(o) ? ht[o] = !0 : !(ft[o] = !0))) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))) : a.mustUseProperty ? e[a.propertyName] = null === n ? 3 !== a.type && "" : n : (t = a.attributeName, i = a.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (a = a.type) || 4 === a && !0 === n ? "" : "" + n, i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))))
        }

        function bt(e) {
            switch (r(e)) {
                case"boolean":
                case"number":
                case"object":
                case"string":
                case"undefined":
                    return e;
                default:
                    return ""
            }
        }

        function wt(e, t) {
            var n = t.checked;
            return o({}, t, {
                defaultChecked: void 0,
                defaultValue: void 0,
                value: void 0,
                checked: null != n ? n : e._wrapperState.initialChecked
            })
        }

        function xt(e, t) {
            var n = null == t.defaultValue ? "" : t.defaultValue, r = null != t.checked ? t.checked : t.defaultChecked;
            n = bt(null != t.value ? t.value : n), e._wrapperState = {
                initialChecked: r,
                initialValue: n,
                controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
            }
        }

        function kt(e, t) {
            null != (t = t.checked) && yt(e, "checked", t, !1)
        }

        function Ct(e, t) {
            kt(e, t);
            var n = bt(t.value), r = t.type;
            if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n); else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
            t.hasOwnProperty("value") ? Et(e, t.type, n) : t.hasOwnProperty("defaultValue") && Et(e, t.type, bt(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
        }

        function St(e, t, n) {
            if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                var r = t.type;
                if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
                t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
            }
            "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !e.defaultChecked, e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
        }

        function Et(e, t, n) {
            "number" === t && e.ownerDocument.activeElement === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
        }

        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
            var t = e.replace(gt, vt);
            mt[t] = new _t(t, 1, !1, e, null, !1)
        }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
            var t = e.replace(gt, vt);
            mt[t] = new _t(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1)
        }), ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(gt, vt);
            mt[t] = new _t(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1)
        }), ["tabIndex", "crossOrigin"].forEach(function (e) {
            mt[e] = new _t(e, 1, !1, e.toLowerCase(), null, !1)
        }), mt.xlinkHref = new _t("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0), ["src", "href", "action", "formAction"].forEach(function (e) {
            mt[e] = new _t(e, 1, !1, e.toLowerCase(), null, !0)
        });
        var Tt = {
            change: {
                phasedRegistrationNames: {bubbled: "onChange", captured: "onChangeCapture"},
                dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
            }
        };

        function Ot(e, t, n) {
            return (e = le.getPooled(Tt.change, e, t, n)).type = "change", Me(n), V(e), e
        }

        var Nt = null, Mt = null;

        function At(e) {
            N(e)
        }

        function Pt(e) {
            if (Ve(z(e))) return e
        }

        function Lt(e, t) {
            if ("change" === e) return t
        }

        var Rt = !1;

        function Dt() {
            Nt && (Nt.detachEvent("onpropertychange", It), Mt = Nt = null)
        }

        function It(e) {
            if ("value" === e.propertyName && Pt(Mt)) if (e = Ot(Mt, e, Fe(e)), Ie) N(e); else {
                Ie = !0;
                try {
                    Pe(At, e)
                } finally {
                    Ie = !1, ze()
                }
            }
        }

        function zt(e, t, n) {
            "focus" === e ? (Dt(), Mt = n, (Nt = t).attachEvent("onpropertychange", It)) : "blur" === e && Dt()
        }

        function jt(e) {
            if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Pt(Mt)
        }

        function Wt(e, t) {
            if ("click" === e) return Pt(t)
        }

        function Ft(e, t) {
            if ("input" === e || "change" === e) return Pt(t)
        }

        $ && (Rt = He("input") && (!document.documentMode || 9 < document.documentMode));
        var Ht = {
                eventTypes: Tt, _isInputEventSupported: Rt, extractEvents: function (e, t, n, r) {
                    var i = t ? z(t) : window, o = void 0, a = void 0, s = i.nodeName && i.nodeName.toLowerCase();
                    if ("select" === s || "input" === s && "file" === i.type ? o = Lt : We(i) ? Rt ? o = Ft : (o = jt, a = zt) : (s = i.nodeName) && "input" === s.toLowerCase() && ("checkbox" === i.type || "radio" === i.type) && (o = Wt), o && (o = o(e, t))) return Ot(o, n, r);
                    a && a(e, i, t), "blur" === e && (e = i._wrapperState) && e.controlled && "number" === i.type && Et(i, "number", i.value)
                }
            }, Ut = le.extend({view: null, detail: null}),
            Bt = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};

        function Vt(e) {
            var t = this.nativeEvent;
            return t.getModifierState ? t.getModifierState(e) : !!(e = Bt[e]) && !!t[e]
        }

        function $t() {
            return Vt
        }

        var Kt = 0, Gt = 0, qt = !1, Xt = !1, Yt = Ut.extend({
            screenX: null,
            screenY: null,
            clientX: null,
            clientY: null,
            pageX: null,
            pageY: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            getModifierState: $t,
            button: null,
            buttons: null,
            relatedTarget: function (e) {
                return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
            },
            movementX: function (e) {
                if ("movementX" in e) return e.movementX;
                var t = Kt;
                return Kt = e.screenX, qt ? "mousemove" === e.type ? e.screenX - t : 0 : (qt = !0, 0)
            },
            movementY: function (e) {
                if ("movementY" in e) return e.movementY;
                var t = Gt;
                return Gt = e.screenY, Xt ? "mousemove" === e.type ? e.screenY - t : 0 : (Xt = !0, 0)
            }
        }), Qt = Yt.extend({
            pointerId: null,
            width: null,
            height: null,
            pressure: null,
            tangentialPressure: null,
            tiltX: null,
            tiltY: null,
            twist: null,
            pointerType: null,
            isPrimary: null
        }), Zt = {
            mouseEnter: {registrationName: "onMouseEnter", dependencies: ["mouseout", "mouseover"]},
            mouseLeave: {registrationName: "onMouseLeave", dependencies: ["mouseout", "mouseover"]},
            pointerEnter: {registrationName: "onPointerEnter", dependencies: ["pointerout", "pointerover"]},
            pointerLeave: {registrationName: "onPointerLeave", dependencies: ["pointerout", "pointerover"]}
        }, Jt = {
            eventTypes: Zt, extractEvents: function (e, t, n, r) {
                var i = "mouseover" === e || "pointerover" === e, o = "mouseout" === e || "pointerout" === e;
                if (i && (n.relatedTarget || n.fromElement) || !o && !i) return null;
                if (i = r.window === r ? r : (i = r.ownerDocument) ? i.defaultView || i.parentWindow : window, o ? (o = t, t = (t = n.relatedTarget || n.toElement) ? D(t) : null) : o = null, o === t) return null;
                var a = void 0, s = void 0, l = void 0, u = void 0;
                "mouseout" === e || "mouseover" === e ? (a = Yt, s = Zt.mouseLeave, l = Zt.mouseEnter, u = "mouse") : "pointerout" !== e && "pointerover" !== e || (a = Qt, s = Zt.pointerLeave, l = Zt.pointerEnter, u = "pointer");
                var c = null == o ? i : z(o);
                if (i = null == t ? i : z(t), (e = a.getPooled(s, o, n, r)).type = u + "leave", e.target = c, e.relatedTarget = i, (n = a.getPooled(l, t, n, r)).type = u + "enter", n.target = i, n.relatedTarget = c, r = t, o && r) e:{
                    for (i = r, u = 0, a = t = o; a; a = W(a)) u++;
                    for (a = 0, l = i; l; l = W(l)) a++;
                    for (; 0 < u - a;) t = W(t), u--;
                    for (; 0 < a - u;) i = W(i), a--;
                    for (; u--;) {
                        if (t === i || t === i.alternate) break e;
                        t = W(t), i = W(i)
                    }
                    t = null
                } else t = null;
                for (i = t, t = []; o && o !== i && (null === (u = o.alternate) || u !== i);) t.push(o), o = W(o);
                for (o = []; r && r !== i && (null === (u = r.alternate) || u !== i);) o.push(r), r = W(r);
                for (r = 0; r < t.length; r++) U(t[r], "bubbled", e);
                for (r = o.length; 0 < r--;) U(o[r], "captured", n);
                return [e, n]
            }
        };

        function en(e, t) {
            return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        }

        var tn = Object.prototype.hasOwnProperty;

        function nn(e, t) {
            if (en(e, t)) return !0;
            if ("object" !== r(e) || null === e || "object" !== r(t) || null === t) return !1;
            var n = Object.keys(e), i = Object.keys(t);
            if (n.length !== i.length) return !1;
            for (i = 0; i < n.length; i++) if (!tn.call(t, n[i]) || !en(e[n[i]], t[n[i]])) return !1;
            return !0
        }

        function rn(e, t) {
            return {responder: e, props: t}
        }

        function on(e) {
            var t = e;
            if (e.alternate) for (; t.return;) t = t.return; else {
                if (0 != (2 & t.effectTag)) return 1;
                for (; t.return;) if (0 != (2 & (t = t.return).effectTag)) return 1
            }
            return 3 === t.tag ? 2 : 3
        }

        function an(e) {
            if (2 !== on(e)) throw s(Error(188))
        }

        function sn(e) {
            if (!(e = function (e) {
                var t = e.alternate;
                if (!t) {
                    if (3 === (t = on(e))) throw s(Error(188));
                    return 1 === t ? null : e
                }
                for (var n = e, r = t; ;) {
                    var i = n.return;
                    if (null === i) break;
                    var o = i.alternate;
                    if (null !== o) {
                        if (i.child === o.child) {
                            for (o = i.child; o;) {
                                if (o === n) return an(i), e;
                                if (o === r) return an(i), t;
                                o = o.sibling
                            }
                            throw s(Error(188))
                        }
                        if (n.return !== r.return) n = i, r = o; else {
                            for (var a = !1, l = i.child; l;) {
                                if (l === n) {
                                    a = !0, n = i, r = o;
                                    break
                                }
                                if (l === r) {
                                    a = !0, r = i, n = o;
                                    break
                                }
                                l = l.sibling
                            }
                            if (!a) {
                                for (l = o.child; l;) {
                                    if (l === n) {
                                        a = !0, n = o, r = i;
                                        break
                                    }
                                    if (l === r) {
                                        a = !0, r = o, n = i;
                                        break
                                    }
                                    l = l.sibling
                                }
                                if (!a) throw s(Error(189))
                            }
                        }
                        if (n.alternate !== r) throw s(Error(190))
                    } else {
                        if (null === (r = i.return)) break;
                        n = r
                    }
                }
                if (3 !== n.tag) throw s(Error(188));
                return n.stateNode.current === n ? e : t
            }(e))) return null;
            for (var t = e; ;) {
                if (5 === t.tag || 6 === t.tag) return t;
                if (t.child) t = (t.child.return = t).child; else {
                    if (t === e) break;
                    for (; !t.sibling;) {
                        if (!t.return || t.return === e) return null;
                        t = t.return
                    }
                    t.sibling.return = t.return, t = t.sibling
                }
            }
            return null
        }

        new Map, new Map, new Set, new Map;
        var ln = le.extend({animationName: null, elapsedTime: null, pseudoElement: null}), un = le.extend({
            clipboardData: function (e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData
            }
        }), cn = Ut.extend({relatedTarget: null});

        function pn(e) {
            var t = e.keyCode;
            return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
        }

        for (var dn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        }, fn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        }, hn = Ut.extend({
            key: function (e) {
                if (e.key) {
                    var t = dn[e.key] || e.key;
                    if ("Unidentified" !== t) return t
                }
                return "keypress" === e.type ? 13 === (e = pn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? fn[e.keyCode] || "Unidentified" : ""
            },
            location: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            repeat: null,
            locale: null,
            getModifierState: $t,
            charCode: function (e) {
                return "keypress" === e.type ? pn(e) : 0
            },
            keyCode: function (e) {
                return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
            },
            which: function (e) {
                return "keypress" === e.type ? pn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
            }
        }), _n = Yt.extend({dataTransfer: null}), mn = Ut.extend({
            touches: null,
            targetTouches: null,
            changedTouches: null,
            altKey: null,
            metaKey: null,
            ctrlKey: null,
            shiftKey: null,
            getModifierState: $t
        }), gn = le.extend({
            propertyName: null,
            elapsedTime: null,
            pseudoElement: null
        }), vn = Yt.extend({
            deltaX: function (e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            }, deltaY: function (e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            }, deltaZ: null, deltaMode: null
        }), yn = [["blur", "blur", 0], ["cancel", "cancel", 0], ["click", "click", 0], ["close", "close", 0], ["contextmenu", "contextMenu", 0], ["copy", "copy", 0], ["cut", "cut", 0], ["auxclick", "auxClick", 0], ["dblclick", "doubleClick", 0], ["dragend", "dragEnd", 0], ["dragstart", "dragStart", 0], ["drop", "drop", 0], ["focus", "focus", 0], ["input", "input", 0], ["invalid", "invalid", 0], ["keydown", "keyDown", 0], ["keypress", "keyPress", 0], ["keyup", "keyUp", 0], ["mousedown", "mouseDown", 0], ["mouseup", "mouseUp", 0], ["paste", "paste", 0], ["pause", "pause", 0], ["play", "play", 0], ["pointercancel", "pointerCancel", 0], ["pointerdown", "pointerDown", 0], ["pointerup", "pointerUp", 0], ["ratechange", "rateChange", 0], ["reset", "reset", 0], ["seeked", "seeked", 0], ["submit", "submit", 0], ["touchcancel", "touchCancel", 0], ["touchend", "touchEnd", 0], ["touchstart", "touchStart", 0], ["volumechange", "volumeChange", 0], ["drag", "drag", 1], ["dragenter", "dragEnter", 1], ["dragexit", "dragExit", 1], ["dragleave", "dragLeave", 1], ["dragover", "dragOver", 1], ["mousemove", "mouseMove", 1], ["mouseout", "mouseOut", 1], ["mouseover", "mouseOver", 1], ["pointermove", "pointerMove", 1], ["pointerout", "pointerOut", 1], ["pointerover", "pointerOver", 1], ["scroll", "scroll", 1], ["toggle", "toggle", 1], ["touchmove", "touchMove", 1], ["wheel", "wheel", 1], ["abort", "abort", 2], [Q, "animationEnd", 2], [Z, "animationIteration", 2], [J, "animationStart", 2], ["canplay", "canPlay", 2], ["canplaythrough", "canPlayThrough", 2], ["durationchange", "durationChange", 2], ["emptied", "emptied", 2], ["encrypted", "encrypted", 2], ["ended", "ended", 2], ["error", "error", 2], ["gotpointercapture", "gotPointerCapture", 2], ["load", "load", 2], ["loadeddata", "loadedData", 2], ["loadedmetadata", "loadedMetadata", 2], ["loadstart", "loadStart", 2], ["lostpointercapture", "lostPointerCapture", 2], ["playing", "playing", 2], ["progress", "progress", 2], ["seeking", "seeking", 2], ["stalled", "stalled", 2], ["suspend", "suspend", 2], ["timeupdate", "timeUpdate", 2], [ee, "transitionEnd", 2], ["waiting", "waiting", 2]], bn = {}, wn = {}, xn = 0; xn < yn.length; xn++) {
            var kn = yn[xn], Cn = kn[0], Sn = kn[1], En = kn[2], Tn = "on" + (Sn[0].toUpperCase() + Sn.slice(1)), On = {
                phasedRegistrationNames: {bubbled: Tn, captured: Tn + "Capture"},
                dependencies: [Cn],
                eventPriority: En
            };
            bn[Sn] = On, wn[Cn] = On
        }
        var Nn = {
            eventTypes: bn, getEventPriority: function (e) {
                return void 0 !== (e = wn[e]) ? e.eventPriority : 2
            }, extractEvents: function (e, t, n, r) {
                var i = wn[e];
                if (!i) return null;
                switch (e) {
                    case"keypress":
                        if (0 === pn(n)) return null;
                    case"keydown":
                    case"keyup":
                        e = hn;
                        break;
                    case"blur":
                    case"focus":
                        e = cn;
                        break;
                    case"click":
                        if (2 === n.button) return null;
                    case"auxclick":
                    case"dblclick":
                    case"mousedown":
                    case"mousemove":
                    case"mouseup":
                    case"mouseout":
                    case"mouseover":
                    case"contextmenu":
                        e = Yt;
                        break;
                    case"drag":
                    case"dragend":
                    case"dragenter":
                    case"dragexit":
                    case"dragleave":
                    case"dragover":
                    case"dragstart":
                    case"drop":
                        e = _n;
                        break;
                    case"touchcancel":
                    case"touchend":
                    case"touchmove":
                    case"touchstart":
                        e = mn;
                        break;
                    case Q:
                    case Z:
                    case J:
                        e = ln;
                        break;
                    case ee:
                        e = gn;
                        break;
                    case"scroll":
                        e = Ut;
                        break;
                    case"wheel":
                        e = vn;
                        break;
                    case"copy":
                    case"cut":
                    case"paste":
                        e = un;
                        break;
                    case"gotpointercapture":
                    case"lostpointercapture":
                    case"pointercancel":
                    case"pointerdown":
                    case"pointermove":
                    case"pointerout":
                    case"pointerover":
                    case"pointerup":
                        e = Qt;
                        break;
                    default:
                        e = le
                }
                return V(t = e.getPooled(i, t, n, r)), t
            }
        }, Mn = Nn.getEventPriority, An = [];

        function Pn(e) {
            var t = e.targetInst, n = t;
            do {
                if (!n) {
                    e.ancestors.push(n);
                    break
                }
                var r;
                for (r = n; r.return;) r = r.return;
                if (!(r = 3 !== r.tag ? null : r.stateNode.containerInfo)) break;
                e.ancestors.push(n), n = D(r)
            } while (n);
            for (n = 0; n < e.ancestors.length; n++) {
                t = e.ancestors[n];
                var i = Fe(e.nativeEvent);
                r = e.topLevelType;
                for (var o = e.nativeEvent, a = null, s = 0; s < d.length; s++) {
                    var l = d[s];
                    l && (l = l.extractEvents(r, t, o, i)) && (a = S(a, l))
                }
                N(a)
            }
        }

        var Ln = !0;

        function Rn(e, t) {
            Dn(t, e, !1)
        }

        function Dn(e, t, n) {
            switch (Mn(t)) {
                case 0:
                    var r = function (e, t, n) {
                        Ie || Re();
                        var r = In, i = Ie;
                        Ie = !0;
                        try {
                            Le(r, e, t, n)
                        } finally {
                            (Ie = i) || ze()
                        }
                    }.bind(null, t, 1);
                    break;
                case 1:
                    r = function (e, t, n) {
                        In(e, t, n)
                    }.bind(null, t, 1);
                    break;
                default:
                    r = In.bind(null, t, 1)
            }
            n ? e.addEventListener(t, r, !0) : e.addEventListener(t, r, !1)
        }

        function In(e, t, n) {
            if (Ln) {
                if (null === (t = D(t = Fe(n))) || "number" != typeof t.tag || 2 === on(t) || (t = null), An.length) {
                    var r = An.pop();
                    r.topLevelType = e, r.nativeEvent = n, r.targetInst = t, e = r
                } else e = {topLevelType: e, nativeEvent: n, targetInst: t, ancestors: []};
                try {
                    if (n = e, Ie) Pn(n); else {
                        Ie = !0;
                        try {
                            De(Pn, n, void 0)
                        } finally {
                            Ie = !1, ze()
                        }
                    }
                } finally {
                    e.topLevelType = null, e.nativeEvent = null, e.targetInst = null, e.ancestors.length = 0, An.length < 10 && An.push(e)
                }
            }
        }

        var zn = new ("function" == typeof WeakMap ? WeakMap : Map);

        function jn(e) {
            var t = zn.get(e);
            return void 0 === t && (t = new Set, zn.set(e, t)), t
        }

        function Wn(e) {
            if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
            try {
                return e.activeElement || e.body
            } catch (t) {
                return e.body
            }
        }

        function Fn(e) {
            for (; e && e.firstChild;) e = e.firstChild;
            return e
        }

        function Hn(e, t) {
            var n, r = Fn(e);
            for (e = 0; r;) {
                if (3 === r.nodeType) {
                    if (n = e + r.textContent.length, e <= t && t <= n) return {node: r, offset: t - e};
                    e = n
                }
                e:{
                    for (; r;) {
                        if (r.nextSibling) {
                            r = r.nextSibling;
                            break e
                        }
                        r = r.parentNode
                    }
                    r = void 0
                }
                r = Fn(r)
            }
        }

        function Un() {
            for (var e = window, t = Wn(); t instanceof e.HTMLIFrameElement;) {
                try {
                    var n = "string" == typeof t.contentWindow.location.href
                } catch (e) {
                    n = !1
                }
                if (!n) break;
                t = Wn((e = t.contentWindow).document)
            }
            return t
        }

        function Bn(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
        }

        var Vn = $ && "documentMode" in document && document.documentMode <= 11, $n = {
            select: {
                phasedRegistrationNames: {bubbled: "onSelect", captured: "onSelectCapture"},
                dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
            }
        }, Kn = null, Gn = null, qn = null, Xn = !1;

        function Yn(e, t) {
            var n = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
            return Xn || null == Kn || Kn !== Wn(n) ? null : (n = "selectionStart" in (n = Kn) && Bn(n) ? {
                start: n.selectionStart,
                end: n.selectionEnd
            } : {
                anchorNode: (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection()).anchorNode,
                anchorOffset: n.anchorOffset,
                focusNode: n.focusNode,
                focusOffset: n.focusOffset
            }, qn && nn(qn, n) ? null : (qn = n, (e = le.getPooled($n.select, Gn, e, t)).type = "select", e.target = Kn, V(e), e))
        }

        var Qn = {
            eventTypes: $n, extractEvents: function (e, t, n, r) {
                var i, o = r.window === r ? r.document : 9 === r.nodeType ? r : r.ownerDocument;
                if (!(i = !o)) {
                    e:{
                        o = jn(o), i = _.onSelect;
                        for (var a = 0; a < i.length; a++) if (!o.has(i[a])) {
                            o = !1;
                            break e
                        }
                        o = !0
                    }
                    i = !o
                }
                if (i) return null;
                switch (o = t ? z(t) : window, e) {
                    case"focus":
                        (We(o) || "true" === o.contentEditable) && (Kn = o, Gn = t, qn = null);
                        break;
                    case"blur":
                        qn = Gn = Kn = null;
                        break;
                    case"mousedown":
                        Xn = !0;
                        break;
                    case"contextmenu":
                    case"mouseup":
                    case"dragend":
                        return Xn = !1, Yn(n, r);
                    case"selectionchange":
                        if (Vn) break;
                    case"keydown":
                    case"keyup":
                        return Yn(n, r)
                }
                return null
            }
        };

        function Zn(e, t) {
            var n, r;
            return e = o({children: void 0}, t), n = t.children, r = "", i.Children.forEach(n, function (e) {
                null != e && (r += e)
            }), (t = r) && (e.children = t), e
        }

        function Jn(e, t, n, r) {
            if (e = e.options, t) {
                t = {};
                for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
                for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
            } else {
                for (n = "" + bt(n), t = null, i = 0; i < e.length; i++) {
                    if (e[i].value === n) return e[i].selected = !0, void (r && (e[i].defaultSelected = !0));
                    null !== t || e[i].disabled || (t = e[i])
                }
                null !== t && (t.selected = !0)
            }
        }

        function er(e, t) {
            if (null != t.dangerouslySetInnerHTML) throw s(Error(91));
            return o({}, t, {value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue})
        }

        function tr(e, t) {
            var n = t.value;
            if (null == n) {
                if (n = t.defaultValue, null != (t = t.children)) {
                    if (null != n) throw s(Error(92));
                    if (Array.isArray(t)) {
                        if (!(t.length <= 1)) throw s(Error(93));
                        t = t[0]
                    }
                    n = t
                }
                null == n && (n = "")
            }
            e._wrapperState = {initialValue: bt(n)}
        }

        function nr(e, t) {
            var n = bt(t.value), r = bt(t.defaultValue);
            null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
        }

        function rr(e) {
            var t = e.textContent;
            t === e._wrapperState.initialValue && (e.value = t)
        }

        M.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")), w = j, x = I, k = z, M.injectEventPluginsByName({
            SimpleEventPlugin: Nn,
            EnterLeaveEventPlugin: Jt,
            ChangeEventPlugin: Ht,
            SelectEventPlugin: Qn,
            BeforeInputEventPlugin: Se
        });
        var ir = {
            html: "http://www.w3.org/1999/xhtml",
            mathml: "http://www.w3.org/1998/Math/MathML",
            svg: "http://www.w3.org/2000/svg"
        };

        function or(e) {
            switch (e) {
                case"svg":
                    return "http://www.w3.org/2000/svg";
                case"math":
                    return "http://www.w3.org/1998/Math/MathML";
                default:
                    return "http://www.w3.org/1999/xhtml"
            }
        }

        function ar(e, t) {
            return null == e || "http://www.w3.org/1999/xhtml" === e ? or(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
        }

        var sr, lr = void 0, ur = (sr = function (e, t) {
            if (e.namespaceURI !== ir.svg || "innerHTML" in e) e.innerHTML = t; else {
                for ((lr = lr || document.createElement("div")).innerHTML = "<svg>" + t + "</svg>", t = lr.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                for (; t.firstChild;) e.appendChild(t.firstChild)
            }
        }, "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function (e, t, n, r) {
            MSApp.execUnsafeLocalFunction(function () {
                return sr(e, t)
            })
        } : sr);

        function cr(e, t) {
            if (t) {
                var n = e.firstChild;
                if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t)
            }
            e.textContent = t
        }

        var pr = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        }, dr = ["Webkit", "ms", "Moz", "O"];

        function fr(e, t, n) {
            return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || pr.hasOwnProperty(e) && pr[e] ? ("" + t).trim() : t + "px"
        }

        function hr(e, t) {
            for (var n in e = e.style, t) if (t.hasOwnProperty(n)) {
                var r = 0 === n.indexOf("--"), i = fr(n, t[n], r);
                "float" === n && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
            }
        }

        Object.keys(pr).forEach(function (e) {
            dr.forEach(function (t) {
                t = t + e.charAt(0).toUpperCase() + e.substring(1), pr[t] = pr[e]
            })
        });
        var _r = o({menuitem: !0}, {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
        });

        function mr(e, t) {
            if (t) {
                if (_r[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw s(Error(137), e, "");
                if (null != t.dangerouslySetInnerHTML) {
                    if (null != t.children) throw s(Error(60));
                    if (!("object" === r(t.dangerouslySetInnerHTML) && "__html" in t.dangerouslySetInnerHTML)) throw s(Error(61))
                }
                if (null != t.style && "object" !== r(t.style)) throw s(Error(62), "")
            }
        }

        function gr(e, t) {
            if (-1 === e.indexOf("-")) return "string" == typeof t.is;
            switch (e) {
                case"annotation-xml":
                case"color-profile":
                case"font-face":
                case"font-face-src":
                case"font-face-uri":
                case"font-face-format":
                case"font-face-name":
                case"missing-glyph":
                    return !1;
                default:
                    return !0
            }
        }

        function vr(e, t) {
            var n = jn(e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument);
            t = _[t];
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                if (!n.has(i)) {
                    switch (i) {
                        case"scroll":
                            Dn(e, "scroll", !0);
                            break;
                        case"focus":
                        case"blur":
                            Dn(e, "focus", !0), Dn(e, "blur", !0), n.add("blur"), n.add("focus");
                            break;
                        case"cancel":
                        case"close":
                            He(i) && Dn(e, i, !0);
                            break;
                        case"invalid":
                        case"submit":
                        case"reset":
                            break;
                        default:
                            -1 === te.indexOf(i) && Rn(i, e)
                    }
                    n.add(i)
                }
            }
        }

        function yr() {
        }

        var br = null, wr = null;

        function xr(e, t) {
            switch (e) {
                case"button":
                case"input":
                case"select":
                case"textarea":
                    return !!t.autoFocus
            }
            return !1
        }

        function kr(e, t) {
            return "textarea" === e || "option" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" === r(t.dangerouslySetInnerHTML) && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
        }

        var Cr = "function" == typeof setTimeout ? setTimeout : void 0,
            Sr = "function" == typeof clearTimeout ? clearTimeout : void 0;

        function Er(e) {
            for (; null != e; e = e.nextSibling) {
                var t = e.nodeType;
                if (1 === t || 3 === t) break
            }
            return e
        }

        new Set;
        var Tr = [], Or = -1;

        function Nr(e) {
            Or < 0 || (e.current = Tr[Or], Tr[Or] = null, Or--)
        }

        function Mr(e, t) {
            Tr[++Or] = e.current, e.current = t
        }

        var Ar = {}, Pr = {current: Ar}, Lr = {current: !1}, Rr = Ar;

        function Dr(e, t) {
            var n = e.type.contextTypes;
            if (!n) return Ar;
            var r = e.stateNode;
            if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
            var i, o = {};
            for (i in n) o[i] = t[i];
            return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
        }

        function Ir(e) {
            return null != e.childContextTypes
        }

        function zr(e) {
            Nr(Lr), Nr(Pr)
        }

        function jr(e) {
            Nr(Lr), Nr(Pr)
        }

        function Wr(e, t, n) {
            if (Pr.current !== Ar) throw s(Error(168));
            Mr(Pr, t), Mr(Lr, n)
        }

        function Fr(e, t, n) {
            var r = e.stateNode;
            if (e = t.childContextTypes, "function" != typeof r.getChildContext) return n;
            for (var i in r = r.getChildContext()) if (!(i in e)) throw s(Error(108), ut(t) || "Unknown", i);
            return o({}, n, r)
        }

        function Hr(e) {
            var t = e.stateNode;
            return t = t && t.__reactInternalMemoizedMergedChildContext || Ar, Rr = Pr.current, Mr(Pr, t), Mr(Lr, Lr.current), !0
        }

        function Ur(e, t, n) {
            var r = e.stateNode;
            if (!r) throw s(Error(169));
            n ? (t = Fr(e, t, Rr), r.__reactInternalMemoizedMergedChildContext = t, Nr(Lr), Nr(Pr), Mr(Pr, t)) : Nr(Lr), Mr(Lr, n)
        }

        var Br = a.unstable_runWithPriority, Vr = a.unstable_scheduleCallback, $r = a.unstable_cancelCallback,
            Kr = a.unstable_shouldYield, Gr = a.unstable_requestPaint, qr = a.unstable_now,
            Xr = a.unstable_getCurrentPriorityLevel, Yr = a.unstable_ImmediatePriority,
            Qr = a.unstable_UserBlockingPriority, Zr = a.unstable_NormalPriority, Jr = a.unstable_LowPriority,
            ei = a.unstable_IdlePriority, ti = {}, ni = void 0 !== Gr ? Gr : function () {
            }, ri = null, ii = null, oi = !1, ai = qr(), si = ai < 1e4 ? qr : function () {
                return qr() - ai
            };

        function li() {
            switch (Xr()) {
                case Yr:
                    return 99;
                case Qr:
                    return 98;
                case Zr:
                    return 97;
                case Jr:
                    return 96;
                case ei:
                    return 95;
                default:
                    throw s(Error(332))
            }
        }

        function ui(e) {
            switch (e) {
                case 99:
                    return Yr;
                case 98:
                    return Qr;
                case 97:
                    return Zr;
                case 96:
                    return Jr;
                case 95:
                    return ei;
                default:
                    throw s(Error(332))
            }
        }

        function ci(e, t) {
            return e = ui(e), Br(e, t)
        }

        function pi(e, t, n) {
            return e = ui(e), Vr(e, t, n)
        }

        function di(e) {
            return null === ri ? (ri = [e], ii = Vr(Yr, hi)) : ri.push(e), ti
        }

        function fi() {
            null !== ii && $r(ii), hi()
        }

        function hi() {
            if (!oi && null !== ri) {
                oi = !0;
                var e = 0;
                try {
                    var t = ri;
                    ci(99, function () {
                        for (; e < t.length; e++) for (var n = t[e]; null !== (n = n(!0));) ;
                    }), ri = null
                } catch (t) {
                    throw null !== ri && (ri = ri.slice(e + 1)), Vr(Yr, fi), t
                } finally {
                    oi = !1
                }
            }
        }

        function _i(e, t) {
            return 1073741823 === t ? 99 : 1 === t ? 95 : (e = 10 * (1073741821 - t) - 10 * (1073741821 - e)) <= 0 ? 99 : e <= 250 ? 98 : e <= 5250 ? 97 : 95
        }

        function mi(e, t) {
            if (e && e.defaultProps) for (var n in t = o({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
            return t
        }

        var gi = {current: null}, vi = null, yi = null, bi = null;

        function wi() {
            bi = yi = vi = null
        }

        function xi(e, t) {
            var n = e.type._context;
            Mr(gi, n._currentValue), n._currentValue = t
        }

        function ki(e) {
            var t = gi.current;
            Nr(gi), e.type._context._currentValue = t
        }

        function Ci(e, t) {
            for (; null !== e;) {
                var n = e.alternate;
                if (e.childExpirationTime < t) e.childExpirationTime = t, null !== n && n.childExpirationTime < t && (n.childExpirationTime = t); else {
                    if (!(null !== n && n.childExpirationTime < t)) break;
                    n.childExpirationTime = t
                }
                e = e.return
            }
        }

        function Si(e, t) {
            bi = yi = null, null !== (e = (vi = e).dependencies) && null !== e.firstContext && (e.expirationTime >= t && (ua = !0), e.firstContext = null)
        }

        function Ei(e, t) {
            if (bi !== e && !1 !== t && 0 !== t) if ("number" == typeof t && 1073741823 !== t || (bi = e, t = 1073741823), t = {
                context: e,
                observedBits: t,
                next: null
            }, null === yi) {
                if (null === vi) throw s(Error(308));
                yi = t, vi.dependencies = {expirationTime: 0, firstContext: t, responders: null}
            } else yi = yi.next = t;
            return e._currentValue
        }

        var Ti = !1;

        function Oi(e) {
            return {
                baseState: e,
                firstUpdate: null,
                lastUpdate: null,
                firstCapturedUpdate: null,
                lastCapturedUpdate: null,
                firstEffect: null,
                lastEffect: null,
                firstCapturedEffect: null,
                lastCapturedEffect: null
            }
        }

        function Ni(e) {
            return {
                baseState: e.baseState,
                firstUpdate: e.firstUpdate,
                lastUpdate: e.lastUpdate,
                firstCapturedUpdate: null,
                lastCapturedUpdate: null,
                firstEffect: null,
                lastEffect: null,
                firstCapturedEffect: null,
                lastCapturedEffect: null
            }
        }

        function Mi(e, t) {
            return {
                expirationTime: e,
                suspenseConfig: t,
                tag: 0,
                payload: null,
                callback: null,
                next: null,
                nextEffect: null
            }
        }

        function Ai(e, t) {
            null === e.lastUpdate ? e.firstUpdate = e.lastUpdate = t : (e.lastUpdate.next = t, e.lastUpdate = t)
        }

        function Pi(e, t) {
            var n = e.alternate;
            if (null === n) {
                var r = e.updateQueue, i = null;
                null === r && (r = e.updateQueue = Oi(e.memoizedState))
            } else r = e.updateQueue, i = n.updateQueue, null === r ? null === i ? (r = e.updateQueue = Oi(e.memoizedState), i = n.updateQueue = Oi(n.memoizedState)) : r = e.updateQueue = Ni(i) : null === i && (i = n.updateQueue = Ni(r));
            null === i || r === i ? Ai(r, t) : null === r.lastUpdate || null === i.lastUpdate ? (Ai(r, t), Ai(i, t)) : (Ai(r, t), i.lastUpdate = t)
        }

        function Li(e, t) {
            var n = e.updateQueue;
            null === (n = null === n ? e.updateQueue = Oi(e.memoizedState) : Ri(e, n)).lastCapturedUpdate ? n.firstCapturedUpdate = n.lastCapturedUpdate = t : (n.lastCapturedUpdate.next = t, n.lastCapturedUpdate = t)
        }

        function Ri(e, t) {
            var n = e.alternate;
            return null !== n && t === n.updateQueue && (t = e.updateQueue = Ni(t)), t
        }

        function Di(e, t, n, r, i, a) {
            switch (n.tag) {
                case 1:
                    return "function" == typeof (e = n.payload) ? e.call(a, r, i) : e;
                case 3:
                    e.effectTag = -2049 & e.effectTag | 64;
                case 0:
                    if (null == (i = "function" == typeof (e = n.payload) ? e.call(a, r, i) : e)) break;
                    return o({}, r, i);
                case 2:
                    Ti = !0
            }
            return r
        }

        function Ii(e, t, n, r, i) {
            Ti = !1;
            for (var o = (t = Ri(e, t)).baseState, a = null, s = 0, l = t.firstUpdate, u = o; null !== l;) {
                var c = l.expirationTime;
                c < i ? (null === a && (a = l, o = u), s < c && (s = c)) : (Ws(c, l.suspenseConfig), u = Di(e, 0, l, u, n, r), null !== l.callback && (e.effectTag |= 32, (l.nextEffect = null) === t.lastEffect ? t.firstEffect = t.lastEffect = l : (t.lastEffect.nextEffect = l, t.lastEffect = l))), l = l.next
            }
            for (c = null, l = t.firstCapturedUpdate; null !== l;) {
                var p = l.expirationTime;
                p < i ? (null === c && (c = l, null === a && (o = u)), s < p && (s = p)) : (u = Di(e, 0, l, u, n, r), null !== l.callback && (e.effectTag |= 32, (l.nextEffect = null) === t.lastCapturedEffect ? t.firstCapturedEffect = t.lastCapturedEffect = l : (t.lastCapturedEffect.nextEffect = l, t.lastCapturedEffect = l))), l = l.next
            }
            null === a && (t.lastUpdate = null), null === c ? t.lastCapturedUpdate = null : e.effectTag |= 32, null === a && null === c && (o = u), t.baseState = o, t.firstUpdate = a, t.firstCapturedUpdate = c, e.expirationTime = s, e.memoizedState = u
        }

        function zi(e, t, n) {
            null !== t.firstCapturedUpdate && (null !== t.lastUpdate && (t.lastUpdate.next = t.firstCapturedUpdate, t.lastUpdate = t.lastCapturedUpdate), t.firstCapturedUpdate = t.lastCapturedUpdate = null), ji(t.firstEffect, n), t.firstEffect = t.lastEffect = null, ji(t.firstCapturedEffect, n), t.firstCapturedEffect = t.lastCapturedEffect = null
        }

        function ji(e, t) {
            for (; null !== e;) {
                var n = e.callback;
                if (null !== n) {
                    e.callback = null;
                    var r = t;
                    if ("function" != typeof n) throw s(Error(191), n);
                    n.call(r)
                }
                e = e.nextEffect
            }
        }

        var Wi = $e.ReactCurrentBatchConfig, Fi = (new i.Component).refs;

        function Hi(e, t, n, r) {
            n = null == (n = n(r, t = e.memoizedState)) ? t : o({}, t, n), e.memoizedState = n, null !== (r = e.updateQueue) && 0 === e.expirationTime && (r.baseState = n)
        }

        var Ui = {
            isMounted: function (e) {
                return !!(e = e._reactInternalFiber) && 2 === on(e)
            }, enqueueSetState: function (e, t, n) {
                e = e._reactInternalFiber;
                var r = Ts(), i = Wi.suspense;
                (i = Mi(r = Os(r, e, i), i)).payload = t, null != n && (i.callback = n), Pi(e, i), Ms(e, r)
            }, enqueueReplaceState: function (e, t, n) {
                e = e._reactInternalFiber;
                var r = Ts(), i = Wi.suspense;
                (i = Mi(r = Os(r, e, i), i)).tag = 1, i.payload = t, null != n && (i.callback = n), Pi(e, i), Ms(e, r)
            }, enqueueForceUpdate: function (e, t) {
                e = e._reactInternalFiber;
                var n = Ts(), r = Wi.suspense;
                (r = Mi(n = Os(n, e, r), r)).tag = 2, null != t && (r.callback = t), Pi(e, r), Ms(e, n)
            }
        };

        function Bi(e, t, n, r, i, o, a) {
            return "function" == typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, o, a) : !(t.prototype && t.prototype.isPureReactComponent && nn(n, r) && nn(i, o))
        }

        function Vi(e, t, n) {
            var i = !1, o = Ar, a = t.contextType;
            return t = new t(n, a = "object" === r(a) && null !== a ? Ei(a) : (o = Ir(t) ? Rr : Pr.current, (i = null != (i = t.contextTypes)) ? Dr(e, o) : Ar)), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = Ui, (e.stateNode = t)._reactInternalFiber = e, i && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = a), t
        }

        function $i(e, t, n, r) {
            e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ui.enqueueReplaceState(t, t.state, null)
        }

        function Ki(e, t, n, i) {
            var o = e.stateNode;
            o.props = n, o.state = e.memoizedState, o.refs = Fi;
            var a = t.contextType;
            "object" === r(a) && null !== a ? o.context = Ei(a) : (a = Ir(t) ? Rr : Pr.current, o.context = Dr(e, a)), null !== (a = e.updateQueue) && (Ii(e, a, n, o, i), o.state = e.memoizedState), "function" == typeof (a = t.getDerivedStateFromProps) && (Hi(e, t, a, n), o.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof o.getSnapshotBeforeUpdate || "function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount || (t = o.state, "function" == typeof o.componentWillMount && o.componentWillMount(), "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(), t !== o.state && Ui.enqueueReplaceState(o, o.state, null), null !== (a = e.updateQueue) && (Ii(e, a, n, o, i), o.state = e.memoizedState)), "function" == typeof o.componentDidMount && (e.effectTag |= 4)
        }

        var Gi = Array.isArray;

        function qi(e, t, n) {
            if (null !== (e = n.ref) && "function" != typeof e && "object" !== r(e)) {
                if (n._owner) {
                    n = n._owner;
                    var i = void 0;
                    if (n) {
                        if (1 !== n.tag) throw s(Error(309));
                        i = n.stateNode
                    }
                    if (!i) throw s(Error(147), e);
                    var o = "" + e;
                    return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === o ? t.ref : ((t = function (e) {
                        var t = i.refs;
                        t === Fi && (t = i.refs = {}), null === e ? delete t[o] : t[o] = e
                    })._stringRef = o, t)
                }
                if ("string" != typeof e) throw s(Error(284));
                if (!n._owner) throw s(Error(290), e)
            }
            return e
        }

        function Xi(e, t) {
            if ("textarea" !== e.type) throw s(Error(31), "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t, "")
        }

        function Yi(e) {
            function t(t, n) {
                if (e) {
                    var r = t.lastEffect;
                    null !== r ? (r.nextEffect = n, t.lastEffect = n) : t.firstEffect = t.lastEffect = n, n.nextEffect = null, n.effectTag = 8
                }
            }

            function n(n, r) {
                if (!e) return null;
                for (; null !== r;) t(n, r), r = r.sibling;
                return null
            }

            function i(e, t) {
                for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
                return e
            }

            function o(e, t, n) {
                return (e = Js(e, t)).index = 0, e.sibling = null, e
            }

            function a(t, n, r) {
                return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.effectTag = 2, n) : r : (t.effectTag = 2, n) : n
            }

            function l(t) {
                return e && null === t.alternate && (t.effectTag = 2), t
            }

            function u(e, t, n, r) {
                return null === t || 6 !== t.tag ? (t = nl(n, e.mode, r)).return = e : (t = o(t, n)).return = e, t
            }

            function c(e, t, n, r) {
                return null !== t && t.elementType === n.type ? (r = o(t, n.props)).ref = qi(e, t, n) : (r = el(n.type, n.key, n.props, null, e.mode, r)).ref = qi(e, t, n), r.return = e, r
            }

            function p(e, t, n, r) {
                return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = rl(n, e.mode, r)).return = e : (t = o(t, n.children || [])).return = e, t
            }

            function d(e, t, n, r, i) {
                return null === t || 7 !== t.tag ? (t = tl(n, e.mode, r, i)).return = e : (t = o(t, n)).return = e, t
            }

            function f(e, t, n) {
                if ("string" == typeof t || "number" == typeof t) return (t = nl("" + t, e.mode, n)).return = e, t;
                if ("object" === r(t) && null !== t) {
                    switch (t.$$typeof) {
                        case qe:
                            return (n = el(t.type, t.key, t.props, null, e.mode, n)).ref = qi(e, null, t), n.return = e, n;
                        case Xe:
                            return (t = rl(t, e.mode, n)).return = e, t
                    }
                    if (Gi(t) || lt(t)) return (t = tl(t, e.mode, n, null)).return = e, t;
                    Xi(e, t)
                }
                return null
            }

            function h(e, t, n, i) {
                var o = null !== t ? t.key : null;
                if ("string" == typeof n || "number" == typeof n) return null !== o ? null : u(e, t, "" + n, i);
                if ("object" === r(n) && null !== n) {
                    switch (n.$$typeof) {
                        case qe:
                            return n.key === o ? n.type === Ye ? d(e, t, n.props.children, i, o) : c(e, t, n, i) : null;
                        case Xe:
                            return n.key === o ? p(e, t, n, i) : null
                    }
                    if (Gi(n) || lt(n)) return null !== o ? null : d(e, t, n, i, null);
                    Xi(e, n)
                }
                return null
            }

            function _(e, t, n, i, o) {
                if ("string" == typeof i || "number" == typeof i) return u(t, e = e.get(n) || null, "" + i, o);
                if ("object" === r(i) && null !== i) {
                    switch (i.$$typeof) {
                        case qe:
                            return e = e.get(null === i.key ? n : i.key) || null, i.type === Ye ? d(t, e, i.props.children, o, i.key) : c(t, e, i, o);
                        case Xe:
                            return p(t, e = e.get(null === i.key ? n : i.key) || null, i, o)
                    }
                    if (Gi(i) || lt(i)) return d(t, e = e.get(n) || null, i, o, null);
                    Xi(t, i)
                }
                return null
            }

            return function (u, c, p, d) {
                var m = "object" === r(p) && null !== p && p.type === Ye && null === p.key;
                m && (p = p.props.children);
                var g = "object" === r(p) && null !== p;
                if (g) switch (p.$$typeof) {
                    case qe:
                        e:{
                            for (g = p.key, m = c; null !== m;) {
                                if (m.key === g) {
                                    if (7 === m.tag ? p.type === Ye : m.elementType === p.type) {
                                        n(u, m.sibling), (c = o(m, p.type === Ye ? p.props.children : p.props)).ref = qi(u, m, p), c.return = u, u = c;
                                        break e
                                    }
                                    n(u, m);
                                    break
                                }
                                t(u, m), m = m.sibling
                            }
                            u = p.type === Ye ? ((c = tl(p.props.children, u.mode, d, p.key)).return = u, c) : ((d = el(p.type, p.key, p.props, null, u.mode, d)).ref = qi(u, c, p), d.return = u, d)
                        }
                        return l(u);
                    case Xe:
                        e:{
                            for (m = p.key; null !== c;) {
                                if (c.key === m) {
                                    if (4 === c.tag && c.stateNode.containerInfo === p.containerInfo && c.stateNode.implementation === p.implementation) {
                                        n(u, c.sibling), (c = o(c, p.children || [])).return = u, u = c;
                                        break e
                                    }
                                    n(u, c);
                                    break
                                }
                                t(u, c), c = c.sibling
                            }
                            (c = rl(p, u.mode, d)).return = u, u = c
                        }
                        return l(u)
                }
                if ("string" == typeof p || "number" == typeof p) return p = "" + p, l(((c = null !== c && 6 === c.tag ? (n(u, c.sibling), o(c, p)) : (n(u, c), nl(p, u.mode, d))).return = u, u = c));
                if (Gi(p)) return function (r, o, s, l) {
                    for (var u = null, c = null, p = o, d = o = 0, m = null; null !== p && d < s.length; d++) {
                        p.index > d ? (m = p, p = null) : m = p.sibling;
                        var g = h(r, p, s[d], l);
                        if (null === g) {
                            null === p && (p = m);
                            break
                        }
                        e && p && null === g.alternate && t(r, p), o = a(g, o, d), null === c ? u = g : c.sibling = g, c = g, p = m
                    }
                    if (d === s.length) return n(r, p), u;
                    if (null === p) {
                        for (; d < s.length; d++) null !== (p = f(r, s[d], l)) && (o = a(p, o, d), null === c ? u = p : c.sibling = p, c = p);
                        return u
                    }
                    for (p = i(r, p); d < s.length; d++) null !== (m = _(p, r, d, s[d], l)) && (e && null !== m.alternate && p.delete(null === m.key ? d : m.key), o = a(m, o, d), null === c ? u = m : c.sibling = m, c = m);
                    return e && p.forEach(function (e) {
                        return t(r, e)
                    }), u
                }(u, c, p, d);
                if (lt(p)) return function (r, o, l, u) {
                    var c = lt(l);
                    if ("function" != typeof c) throw s(Error(150));
                    if (null == (l = c.call(l))) throw s(Error(151));
                    for (var p = c = null, d = o, m = o = 0, g = null, v = l.next(); null !== d && !v.done; m++, v = l.next()) {
                        d.index > m ? (g = d, d = null) : g = d.sibling;
                        var y = h(r, d, v.value, u);
                        if (null === y) {
                            null === d && (d = g);
                            break
                        }
                        e && d && null === y.alternate && t(r, d), o = a(y, o, m), null === p ? c = y : p.sibling = y, p = y, d = g
                    }
                    if (v.done) return n(r, d), c;
                    if (null === d) {
                        for (; !v.done; m++, v = l.next()) null !== (v = f(r, v.value, u)) && (o = a(v, o, m), null === p ? c = v : p.sibling = v, p = v);
                        return c
                    }
                    for (d = i(r, d); !v.done; m++, v = l.next()) null !== (v = _(d, r, m, v.value, u)) && (e && null !== v.alternate && d.delete(null === v.key ? m : v.key), o = a(v, o, m), null === p ? c = v : p.sibling = v, p = v);
                    return e && d.forEach(function (e) {
                        return t(r, e)
                    }), c
                }(u, c, p, d);
                if (g && Xi(u, p), void 0 === p && !m) switch (u.tag) {
                    case 1:
                    case 0:
                        throw u = u.type, s(Error(152), u.displayName || u.name || "Component")
                }
                return n(u, c)
            }
        }

        var Qi = Yi(!0), Zi = Yi(!1), Ji = {}, eo = {current: Ji}, to = {current: Ji}, no = {current: Ji};

        function ro(e) {
            if (e === Ji) throw s(Error(174));
            return e
        }

        function io(e, t) {
            Mr(no, t), Mr(to, e), Mr(eo, Ji);
            var n = t.nodeType;
            switch (n) {
                case 9:
                case 11:
                    t = (t = t.documentElement) ? t.namespaceURI : ar(null, "");
                    break;
                default:
                    t = ar(t = (n = 8 === n ? t.parentNode : t).namespaceURI || null, n = n.tagName)
            }
            Nr(eo), Mr(eo, t)
        }

        function oo(e) {
            Nr(eo), Nr(to), Nr(no)
        }

        function ao(e) {
            ro(no.current);
            var t = ro(eo.current), n = ar(t, e.type);
            t !== n && (Mr(to, e), Mr(eo, n))
        }

        function so(e) {
            to.current === e && (Nr(eo), Nr(to))
        }

        var lo = 1, uo = 1, co = 2, po = {current: 0};

        function fo(e) {
            for (var t = e; null !== t;) {
                if (13 === t.tag) {
                    if (null !== t.memoizedState) return t
                } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                    if (0 != (64 & t.effectTag)) return t
                } else if (null !== t.child) {
                    t = (t.child.return = t).child;
                    continue
                }
                if (t === e) break;
                for (; null === t.sibling;) {
                    if (null === t.return || t.return === e) return null;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
            return null
        }

        var ho = 0, _o = 2, mo = 4, go = 8, vo = 16, yo = 32, bo = 64, wo = 128, xo = $e.ReactCurrentDispatcher, ko = 0,
            Co = null, So = null, Eo = null, To = null, Oo = null, No = null, Mo = 0, Ao = null, Po = 0, Lo = !1,
            Ro = null, Do = 0;

        function Io() {
            throw s(Error(321))
        }

        function zo(e, t) {
            if (null === t) return !1;
            for (var n = 0; n < t.length && n < e.length; n++) if (!en(e[n], t[n])) return !1;
            return !0
        }

        function jo(e, t, n, r, i, o) {
            if (ko = o, Co = t, Eo = null !== e ? e.memoizedState : null, xo.current = null === Eo ? Qo : Zo, t = n(r, i), Lo) {
                for (; Lo = !1, Do += 1, Eo = null !== e ? e.memoizedState : null, No = To, Ao = Oo = So = null, xo.current = Zo, t = n(r, i), Lo;) ;
                Ro = null, Do = 0
            }
            if (xo.current = Yo, (e = Co).memoizedState = To, e.expirationTime = Mo, e.updateQueue = Ao, e.effectTag |= Po, e = null !== So && null !== So.next, No = Oo = To = Eo = So = Co = null, Ao = null, Po = Mo = ko = 0, e) throw s(Error(300));
            return t
        }

        function Wo() {
            xo.current = Yo, No = Oo = To = Eo = So = Co = null, Lo = !1, Ro = Ao = null, Do = Po = Mo = ko = 0
        }

        function Fo() {
            var e = {memoizedState: null, baseState: null, queue: null, baseUpdate: null, next: null};
            return null === Oo ? To = Oo = e : Oo = Oo.next = e, Oo
        }

        function Ho() {
            if (null !== No) No = (Oo = No).next, Eo = null !== (So = Eo) ? So.next : null; else {
                if (null === Eo) throw s(Error(310));
                var e = {
                    memoizedState: (So = Eo).memoizedState,
                    baseState: So.baseState,
                    queue: So.queue,
                    baseUpdate: So.baseUpdate,
                    next: null
                };
                Oo = null === Oo ? To = e : Oo.next = e, Eo = So.next
            }
            return Oo
        }

        function Uo(e, t) {
            return "function" == typeof t ? t(e) : t
        }

        function Bo(e) {
            var t = Ho(), n = t.queue;
            if (null === n) throw s(Error(311));
            if (n.lastRenderedReducer = e, 0 < Do) {
                var r = n.dispatch;
                if (null !== Ro) {
                    var i = Ro.get(n);
                    if (void 0 !== i) {
                        Ro.delete(n);
                        for (var o = t.memoizedState; o = e(o, i.action), null !== (i = i.next);) ;
                        return en(o, t.memoizedState) || (ua = !0), t.memoizedState = o, t.baseUpdate === n.last && (t.baseState = o), [n.lastRenderedState = o, r]
                    }
                }
                return [t.memoizedState, r]
            }
            r = n.last;
            var a = t.baseUpdate;
            if (o = t.baseState, null !== (r = null !== a ? (null !== r && (r.next = null), a.next) : null !== r ? r.next : null)) {
                var l = i = null, u = r, c = !1;
                do {
                    var p = u.expirationTime;
                    p < ko ? (c || (c = !0, l = a, i = o), Mo < p && (Mo = p)) : (Ws(p, u.suspenseConfig), o = u.eagerReducer === e ? u.eagerState : e(o, u.action)), u = (a = u).next
                } while (null !== u && u !== r);
                c || (l = a, i = o), en(o, t.memoizedState) || (ua = !0), t.memoizedState = o, t.baseUpdate = l, t.baseState = i, n.lastRenderedState = o
            }
            return [t.memoizedState, n.dispatch]
        }

        function Vo(e, t, n, r) {
            return e = {
                tag: e,
                create: t,
                destroy: n,
                deps: r,
                next: null
            }, Ao.lastEffect = null === Ao ? (Ao = {lastEffect: null}, e.next = e) : null === (t = Ao.lastEffect) ? e.next = e : (n = t.next, (t.next = e).next = n, e), e
        }

        function $o(e, t, n, r) {
            var i = Fo();
            Po |= e, i.memoizedState = Vo(t, n, void 0, void 0 === r ? null : r)
        }

        function Ko(e, t, n, r) {
            var i = Ho();
            r = void 0 === r ? null : r;
            var o = void 0;
            if (null !== So) {
                var a = So.memoizedState;
                if (o = a.destroy, null !== r && zo(r, a.deps)) return void Vo(ho, n, o, r)
            }
            Po |= e, i.memoizedState = Vo(t, n, o, r)
        }

        function Go(e, t) {
            return "function" == typeof t ? (e = e(), t(e), function () {
                t(null)
            }) : null != t ? (e = e(), t.current = e, function () {
                t.current = null
            }) : void 0
        }

        function qo() {
        }

        function Xo(e, t, n) {
            if (!(Do < 25)) throw s(Error(301));
            var r = e.alternate;
            if (e === Co || null !== r && r === Co) if (Lo = !0, e = {
                expirationTime: ko,
                suspenseConfig: null,
                action: n,
                eagerReducer: null,
                eagerState: null,
                next: null
            }, null === Ro && (Ro = new Map), void 0 === (n = Ro.get(t))) Ro.set(t, e); else {
                for (t = n; null !== t.next;) t = t.next;
                t.next = e
            } else {
                var i = Ts(), o = Wi.suspense;
                o = {
                    expirationTime: i = Os(i, e, o),
                    suspenseConfig: o,
                    action: n,
                    eagerReducer: null,
                    eagerState: null,
                    next: null
                };
                var a = t.last;
                if (null === a) o.next = o; else {
                    var l = a.next;
                    null !== l && (o.next = l), a.next = o
                }
                if (t.last = o, 0 === e.expirationTime && (null === r || 0 === r.expirationTime) && null !== (r = t.lastRenderedReducer)) try {
                    var u = t.lastRenderedState, c = r(u, n);
                    if (o.eagerReducer = r, en(o.eagerState = c, u)) return
                } catch (e) {
                }
                Ms(e, i)
            }
        }

        var Yo = {
            readContext: Ei,
            useCallback: Io,
            useContext: Io,
            useEffect: Io,
            useImperativeHandle: Io,
            useLayoutEffect: Io,
            useMemo: Io,
            useReducer: Io,
            useRef: Io,
            useState: Io,
            useDebugValue: Io,
            useResponder: Io
        }, Qo = {
            readContext: Ei, useCallback: function (e, t) {
                return Fo().memoizedState = [e, void 0 === t ? null : t], e
            }, useContext: Ei, useEffect: function (e, t) {
                return $o(516, wo | bo, e, t)
            }, useImperativeHandle: function (e, t, n) {
                return n = null != n ? n.concat([e]) : null, $o(4, mo | yo, Go.bind(null, t, e), n)
            }, useLayoutEffect: function (e, t) {
                return $o(4, mo | yo, e, t)
            }, useMemo: function (e, t) {
                var n = Fo();
                return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
            }, useReducer: function (e, t, n) {
                var r = Fo();
                return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = (e = r.queue = {
                    last: null,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t
                }).dispatch = Xo.bind(null, Co, e), [r.memoizedState, e]
            }, useRef: function (e) {
                return e = {current: e}, Fo().memoizedState = e
            }, useState: function (e) {
                var t = Fo();
                return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = (e = t.queue = {
                    last: null,
                    dispatch: null,
                    lastRenderedReducer: Uo,
                    lastRenderedState: e
                }).dispatch = Xo.bind(null, Co, e), [t.memoizedState, e]
            }, useDebugValue: qo, useResponder: rn
        }, Zo = {
            readContext: Ei, useCallback: function (e, t) {
                var n = Ho();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && zo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
            }, useContext: Ei, useEffect: function (e, t) {
                return Ko(516, wo | bo, e, t)
            }, useImperativeHandle: function (e, t, n) {
                return n = null != n ? n.concat([e]) : null, Ko(4, mo | yo, Go.bind(null, t, e), n)
            }, useLayoutEffect: function (e, t) {
                return Ko(4, mo | yo, e, t)
            }, useMemo: function (e, t) {
                var n = Ho();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && zo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
            }, useReducer: Bo, useRef: function () {
                return Ho().memoizedState
            }, useState: function (e) {
                return Bo(Uo)
            }, useDebugValue: qo, useResponder: rn
        }, Jo = null, ea = null, ta = !1;

        function na(e, t) {
            var n = Qs(5, null, null, 0);
            n.elementType = "DELETED", n.type = "DELETED", n.stateNode = t, n.return = e, n.effectTag = 8, null !== e.lastEffect ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n
        }

        function ra(e, t) {
            switch (e.tag) {
                case 5:
                    var n = e.type;
                    return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, !0);
                case 6:
                    return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, !0);
                case 13:
                default:
                    return !1
            }
        }

        function ia(e) {
            if (ta) {
                var t = ea;
                if (t) {
                    var n = t;
                    if (!ra(e, t)) {
                        if (!(t = Er(n.nextSibling)) || !ra(e, t)) return e.effectTag |= 2, ta = !1, void (Jo = e);
                        na(Jo, n)
                    }
                    Jo = e, ea = Er(t.firstChild)
                } else e.effectTag |= 2, ta = !1, Jo = e
            }
        }

        function oa(e) {
            for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 18 !== e.tag;) e = e.return;
            Jo = e
        }

        function aa(e) {
            if (e !== Jo) return !1;
            if (!ta) return oa(e), !(ta = !0);
            var t = e.type;
            if (5 !== e.tag || "head" !== t && "body" !== t && !kr(t, e.memoizedProps)) for (t = ea; t;) na(e, t), t = Er(t.nextSibling);
            return oa(e), ea = Jo ? Er(e.stateNode.nextSibling) : null, !0
        }

        function sa() {
            ea = Jo = null, ta = !1
        }

        var la = $e.ReactCurrentOwner, ua = !1;

        function ca(e, t, n, r) {
            t.child = null === e ? Zi(t, null, n, r) : Qi(t, e.child, n, r)
        }

        function pa(e, t, n, r, i) {
            n = n.render;
            var o = t.ref;
            return Si(t, i), r = jo(e, t, n, r, o, i), null === e || ua ? (t.effectTag |= 1, ca(e, t, r, i), t.child) : (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= i && (e.expirationTime = 0), ka(e, t, i))
        }

        function da(e, t, n, r, i, o) {
            if (null !== e) return a = e.child, i < o && (i = a.memoizedProps, (n = null !== (n = n.compare) ? n : nn)(i, r) && e.ref === t.ref) ? ka(e, t, o) : (t.effectTag |= 1, (e = Js(a, r)).ref = t.ref, (e.return = t).child = e);
            var a = n.type;
            return "function" != typeof a || Zs(a) || void 0 !== a.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = el(n.type, null, r, null, t.mode, o)).ref = t.ref, (e.return = t).child = e) : (t.tag = 15, t.type = a, fa(e, t, a, r, i, o))
        }

        function fa(e, t, n, r, i, o) {
            return null !== e && nn(e.memoizedProps, r) && e.ref === t.ref && (ua = !1, i < o) ? ka(e, t, o) : _a(e, t, n, r, o)
        }

        function ha(e, t) {
            var n = t.ref;
            (null === e && null !== n || null !== e && e.ref !== n) && (t.effectTag |= 128)
        }

        function _a(e, t, n, r, i) {
            var o = Ir(n) ? Rr : Pr.current;
            return o = Dr(t, o), Si(t, i), n = jo(e, t, n, r, o, i), null === e || ua ? (t.effectTag |= 1, ca(e, t, n, i), t.child) : (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= i && (e.expirationTime = 0), ka(e, t, i))
        }

        function ma(e, t, n, i, o) {
            if (Ir(n)) {
                var a = !0;
                Hr(t)
            } else a = !1;
            if (Si(t, o), null === t.stateNode) null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), Vi(t, n, i), Ki(t, n, i, o), i = !0; else if (null === e) {
                var s = t.stateNode, l = t.memoizedProps;
                s.props = l;
                var u = s.context, c = n.contextType;
                c = "object" === r(c) && null !== c ? Ei(c) : Dr(t, c = Ir(n) ? Rr : Pr.current);
                var p = n.getDerivedStateFromProps,
                    d = "function" == typeof p || "function" == typeof s.getSnapshotBeforeUpdate;
                d || "function" != typeof s.UNSAFE_componentWillReceiveProps && "function" != typeof s.componentWillReceiveProps || (l !== i || u !== c) && $i(t, s, i, c), Ti = !1;
                var f = t.memoizedState;
                u = s.state = f;
                var h = t.updateQueue;
                null !== h && (Ii(t, h, i, s, o), u = t.memoizedState), i = l !== i || f !== u || Lr.current || Ti ? ("function" == typeof p && (Hi(t, n, p, i), u = t.memoizedState), (l = Ti || Bi(t, n, l, i, f, u, c)) ? (d || "function" != typeof s.UNSAFE_componentWillMount && "function" != typeof s.componentWillMount || ("function" == typeof s.componentWillMount && s.componentWillMount(), "function" == typeof s.UNSAFE_componentWillMount && s.UNSAFE_componentWillMount()), "function" == typeof s.componentDidMount && (t.effectTag |= 4)) : ("function" == typeof s.componentDidMount && (t.effectTag |= 4), t.memoizedProps = i, t.memoizedState = u), s.props = i, s.state = u, s.context = c, l) : ("function" == typeof s.componentDidMount && (t.effectTag |= 4), !1)
            } else s = t.stateNode, l = t.memoizedProps, s.props = t.type === t.elementType ? l : mi(t.type, l), u = s.context, c = "object" === r(c = n.contextType) && null !== c ? Ei(c) : Dr(t, c = Ir(n) ? Rr : Pr.current), (d = "function" == typeof (p = n.getDerivedStateFromProps) || "function" == typeof s.getSnapshotBeforeUpdate) || "function" != typeof s.UNSAFE_componentWillReceiveProps && "function" != typeof s.componentWillReceiveProps || (l !== i || u !== c) && $i(t, s, i, c), Ti = !1, u = t.memoizedState, f = s.state = u, null !== (h = t.updateQueue) && (Ii(t, h, i, s, o), f = t.memoizedState), i = l !== i || u !== f || Lr.current || Ti ? ("function" == typeof p && (Hi(t, n, p, i), f = t.memoizedState), (p = Ti || Bi(t, n, l, i, u, f, c)) ? (d || "function" != typeof s.UNSAFE_componentWillUpdate && "function" != typeof s.componentWillUpdate || ("function" == typeof s.componentWillUpdate && s.componentWillUpdate(i, f, c), "function" == typeof s.UNSAFE_componentWillUpdate && s.UNSAFE_componentWillUpdate(i, f, c)), "function" == typeof s.componentDidUpdate && (t.effectTag |= 4), "function" == typeof s.getSnapshotBeforeUpdate && (t.effectTag |= 256)) : ("function" != typeof s.componentDidUpdate || l === e.memoizedProps && u === e.memoizedState || (t.effectTag |= 4), "function" != typeof s.getSnapshotBeforeUpdate || l === e.memoizedProps && u === e.memoizedState || (t.effectTag |= 256), t.memoizedProps = i, t.memoizedState = f), s.props = i, s.state = f, s.context = c, p) : ("function" != typeof s.componentDidUpdate || l === e.memoizedProps && u === e.memoizedState || (t.effectTag |= 4), "function" != typeof s.getSnapshotBeforeUpdate || l === e.memoizedProps && u === e.memoizedState || (t.effectTag |= 256), !1);
            return ga(e, t, n, i, a, o)
        }

        function ga(e, t, n, r, i, o) {
            ha(e, t);
            var a = 0 != (64 & t.effectTag);
            if (!r && !a) return i && Ur(t, n, !1), ka(e, t, o);
            r = t.stateNode, la.current = t;
            var s = a && "function" != typeof n.getDerivedStateFromError ? null : r.render();
            return t.effectTag |= 1, null !== e && a ? (t.child = Qi(t, e.child, null, o), t.child = Qi(t, null, s, o)) : ca(e, t, s, o), t.memoizedState = r.state, i && Ur(t, n, !0), t.child
        }

        function va(e) {
            var t = e.stateNode;
            t.pendingContext ? Wr(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Wr(0, t.context, !1), io(e, t.containerInfo)
        }

        var ya = {};

        function ba(e, t, n) {
            var r, i = t.mode, o = t.pendingProps, a = po.current, s = null, l = !1;
            if ((r = 0 != (64 & t.effectTag)) || (r = 0 != (a & co) && (null === e || null !== e.memoizedState)), r ? (s = ya, l = !0, t.effectTag &= -65) : null !== e && null === e.memoizedState || void 0 === o.fallback || !0 === o.unstable_avoidThisFallback || (a |= uo), Mr(po, a &= lo), null === e) if (l) {
                if (o = o.fallback, 0 == (2 & ((e = tl(null, i, 0, null)).return = t).mode)) for (l = null !== t.memoizedState ? t.child.child : t.child, e.child = l; null !== l;) l.return = e, l = l.sibling;
                (n = tl(o, i, n, null)).return = t, e.sibling = n, i = e
            } else i = n = Zi(t, null, o.children, n); else {
                if (null !== e.memoizedState) if (i = (a = e.child).sibling, l) {
                    if (o = o.fallback, 0 == (2 & ((n = Js(a, a.pendingProps)).return = t).mode) && (l = null !== t.memoizedState ? t.child.child : t.child) !== a.child) for (n.child = l; null !== l;) l.return = n, l = l.sibling;
                    (o = Js(i, o, i.expirationTime)).return = t, n.sibling = o, (i = n).childExpirationTime = 0, n = o
                } else i = n = Qi(t, a.child, o.children, n); else if (a = e.child, l) {
                    if (l = o.fallback, (o = tl(null, i, 0, null)).return = t, null !== (o.child = a) && (a.return = o), 0 == (2 & t.mode)) for (a = null !== t.memoizedState ? t.child.child : t.child, o.child = a; null !== a;) a.return = o, a = a.sibling;
                    (n = tl(l, i, n, null)).return = t, (o.sibling = n).effectTag |= 2, (i = o).childExpirationTime = 0
                } else n = i = Qi(t, a, o.children, n);
                t.stateNode = e.stateNode
            }
            return t.memoizedState = s, t.child = i, n
        }

        function wa(e, t, n, r, i) {
            var o = e.memoizedState;
            null === o ? e.memoizedState = {
                isBackwards: t,
                rendering: null,
                last: r,
                tail: n,
                tailExpiration: 0,
                tailMode: i
            } : (o.isBackwards = t, o.rendering = null, o.last = r, o.tail = n, o.tailExpiration = 0, o.tailMode = i)
        }

        function xa(e, t, n) {
            var r = t.pendingProps, i = r.revealOrder, o = r.tail;
            if (ca(e, t, r.children, n), 0 != ((r = po.current) & co)) r = r & lo | co, t.effectTag |= 64; else {
                if (null !== e && 0 != (64 & e.effectTag)) e:for (e = t.child; null !== e;) {
                    if (13 === e.tag) {
                        if (null !== e.memoizedState) {
                            e.expirationTime < n && (e.expirationTime = n);
                            var a = e.alternate;
                            null !== a && a.expirationTime < n && (a.expirationTime = n), Ci(e.return, n)
                        }
                    } else if (null !== e.child) {
                        e = (e.child.return = e).child;
                        continue
                    }
                    if (e === t) break e;
                    for (; null === e.sibling;) {
                        if (null === e.return || e.return === t) break e;
                        e = e.return
                    }
                    e.sibling.return = e.return, e = e.sibling
                }
                r &= lo
            }
            if (Mr(po, r), 0 == (2 & t.mode)) t.memoizedState = null; else switch (i) {
                case"forwards":
                    for (n = t.child, i = null; null !== n;) null !== (r = n.alternate) && null === fo(r) && (i = n), n = n.sibling;
                    null === (n = i) ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), wa(t, !1, i, n, o);
                    break;
                case"backwards":
                    for (n = null, i = t.child, t.child = null; null !== i;) {
                        if (null !== (r = i.alternate) && null === fo(r)) {
                            t.child = i;
                            break
                        }
                        r = i.sibling, i.sibling = n, n = i, i = r
                    }
                    wa(t, !0, n, null, o);
                    break;
                case"together":
                    wa(t, !1, null, null, void 0);
                    break;
                default:
                    t.memoizedState = null
            }
            return t.child
        }

        function ka(e, t, n) {
            if (null !== e && (t.dependencies = e.dependencies), t.childExpirationTime < n) return null;
            if (null !== e && t.child !== e.child) throw s(Error(153));
            if (null !== t.child) {
                for (n = Js(e = t.child, e.pendingProps, e.expirationTime), (t.child = n).return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Js(e, e.pendingProps, e.expirationTime)).return = t;
                n.sibling = null
            }
            return t.child
        }

        function Ca(e) {
            e.effectTag |= 4
        }

        var Sa = void 0, Ea = void 0, Ta = void 0, Oa = void 0;

        function Na(e, t) {
            switch (e.tailMode) {
                case"hidden":
                    t = e.tail;
                    for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                    null === n ? e.tail = null : n.sibling = null;
                    break;
                case"collapsed":
                    n = e.tail;
                    for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                    null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
            }
        }

        function Ma(e) {
            switch (e.tag) {
                case 1:
                    Ir(e.type) && zr();
                    var t = e.effectTag;
                    return 2048 & t ? (e.effectTag = -2049 & t | 64, e) : null;
                case 3:
                    if (oo(), jr(), 0 != (64 & (t = e.effectTag))) throw s(Error(285));
                    return e.effectTag = -2049 & t | 64, e;
                case 5:
                    return so(e), null;
                case 13:
                    return Nr(po), 2048 & (t = e.effectTag) ? (e.effectTag = -2049 & t | 64, e) : null;
                case 18:
                    return null;
                case 19:
                    return Nr(po), null;
                case 4:
                    return oo(), null;
                case 10:
                    return ki(e), null;
                default:
                    return null
            }
        }

        function Aa(e, t) {
            return {value: e, source: t, stack: ct(t)}
        }

        Sa = function (e, t) {
            for (var n = t.child; null !== n;) {
                if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode); else if (20 === n.tag) e.appendChild(n.stateNode.instance); else if (4 !== n.tag && null !== n.child) {
                    n = (n.child.return = n).child;
                    continue
                }
                if (n === t) break;
                for (; null === n.sibling;) {
                    if (null === n.return || n.return === t) return;
                    n = n.return
                }
                n.sibling.return = n.return, n = n.sibling
            }
        }, Ea = function () {
        }, Ta = function (e, t, n, r, i) {
            var a = e.memoizedProps;
            if (a !== r) {
                var s = t.stateNode;
                switch (ro(eo.current), e = null, n) {
                    case"input":
                        a = wt(s, a), r = wt(s, r), e = [];
                        break;
                    case"option":
                        a = Zn(s, a), r = Zn(s, r), e = [];
                        break;
                    case"select":
                        a = o({}, a, {value: void 0}), r = o({}, r, {value: void 0}), e = [];
                        break;
                    case"textarea":
                        a = er(s, a), r = er(s, r), e = [];
                        break;
                    default:
                        "function" != typeof a.onClick && "function" == typeof r.onClick && (s.onclick = yr)
                }
                mr(n, r), s = n = void 0;
                var l = null;
                for (n in a) if (!r.hasOwnProperty(n) && a.hasOwnProperty(n) && null != a[n]) if ("style" === n) {
                    var u = a[n];
                    for (s in u) u.hasOwnProperty(s) && (l || (l = {}), l[s] = "")
                } else "dangerouslySetInnerHTML" !== n && "children" !== n && "suppressContentEditableWarning" !== n && "suppressHydrationWarning" !== n && "autoFocus" !== n && (h.hasOwnProperty(n) ? e || (e = []) : (e = e || []).push(n, null));
                for (n in r) {
                    var c = r[n];
                    if (u = null != a ? a[n] : void 0, r.hasOwnProperty(n) && c !== u && (null != c || null != u)) if ("style" === n) if (u) {
                        for (s in u) !u.hasOwnProperty(s) || c && c.hasOwnProperty(s) || (l || (l = {}), l[s] = "");
                        for (s in c) c.hasOwnProperty(s) && u[s] !== c[s] && (l || (l = {}), l[s] = c[s])
                    } else l || (e || (e = []), e.push(n, l)), l = c; else "dangerouslySetInnerHTML" === n ? (c = c ? c.__html : void 0, u = u ? u.__html : void 0, null != c && u !== c && (e = e || []).push(n, "" + c)) : "children" === n ? u === c || "string" != typeof c && "number" != typeof c || (e = e || []).push(n, "" + c) : "suppressContentEditableWarning" !== n && "suppressHydrationWarning" !== n && (h.hasOwnProperty(n) ? (null != c && vr(i, n), e || u === c || (e = [])) : (e = e || []).push(n, c))
                }
                l && (e = e || []).push("style", l), i = e, (t.updateQueue = i) && Ca(t)
            }
        }, Oa = function (e, t, n, r) {
            n !== r && Ca(t)
        };
        var Pa = "function" == typeof WeakSet ? WeakSet : Set;

        function La(e, t) {
            var n = t.source, r = t.stack;
            null === r && null !== n && (r = ct(n)), null !== n && ut(n.type), t = t.value, null !== e && 1 === e.tag && ut(e.type);
            try {
                console.error(t)
            } catch (e) {
                setTimeout(function () {
                    throw e
                })
            }
        }

        function Ra(e) {
            var t = e.ref;
            if (null !== t) if ("function" == typeof t) try {
                t(null)
            } catch (t) {
                $s(e, t)
            } else t.current = null
        }

        function Da(e, t, n) {
            if (null !== (n = null !== (n = n.updateQueue) ? n.lastEffect : null)) {
                var r = n = n.next;
                do {
                    if ((r.tag & e) !== ho) {
                        var i = r.destroy;
                        (r.destroy = void 0) !== i && i()
                    }
                    (r.tag & t) !== ho && (i = r.create, r.destroy = i()), r = r.next
                } while (r !== n)
            }
        }

        function Ia(e, t) {
            switch ("function" == typeof Xs && Xs(e), e.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    var n = e.updateQueue;
                    if (null !== n && null !== (n = n.lastEffect)) {
                        var r = n.next;
                        ci(97 < t ? 97 : t, function () {
                            var t = r;
                            do {
                                var n = t.destroy;
                                if (void 0 !== n) {
                                    var i = e;
                                    try {
                                        n()
                                    } catch (t) {
                                        $s(i, t)
                                    }
                                }
                                t = t.next
                            } while (t !== r)
                        })
                    }
                    break;
                case 1:
                    Ra(e), "function" == typeof (t = e.stateNode).componentWillUnmount && function (e, t) {
                        try {
                            t.props = e.memoizedProps, t.state = e.memoizedState, t.componentWillUnmount()
                        } catch (t) {
                            $s(e, t)
                        }
                    }(e, t);
                    break;
                case 5:
                    Ra(e);
                    break;
                case 4:
                    Fa(e, t)
            }
        }

        function za(e, t) {
            for (var n = e; ;) if (Ia(n, t), null !== n.child && 4 !== n.tag) n = (n.child.return = n).child; else {
                if (n === e) break;
                for (; null === n.sibling;) {
                    if (null === n.return || n.return === e) return;
                    n = n.return
                }
                n.sibling.return = n.return, n = n.sibling
            }
        }

        function ja(e) {
            return 5 === e.tag || 3 === e.tag || 4 === e.tag
        }

        function Wa(e) {
            e:{
                for (var t = e.return; null !== t;) {
                    if (ja(t)) {
                        var n = t;
                        break e
                    }
                    t = t.return
                }
                throw s(Error(160))
            }
            switch (t = n.stateNode, n.tag) {
                case 5:
                    var r = !1;
                    break;
                case 3:
                case 4:
                    t = t.containerInfo, r = !0;
                    break;
                default:
                    throw s(Error(161))
            }
            16 & n.effectTag && (cr(t, ""), n.effectTag &= -17);
            e:t:for (n = e; ;) {
                for (; null === n.sibling;) {
                    if (null === n.return || ja(n.return)) {
                        n = null;
                        break e
                    }
                    n = n.return
                }
                for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag;) {
                    if (2 & n.effectTag) continue t;
                    if (null === n.child || 4 === n.tag) continue t;
                    n = (n.child.return = n).child
                }
                if (!(2 & n.effectTag)) {
                    n = n.stateNode;
                    break e
                }
            }
            for (var i = e; ;) {
                var o = 5 === i.tag || 6 === i.tag;
                if (o || 20 === i.tag) {
                    var a = o ? i.stateNode : i.stateNode.instance;
                    if (n) if (r) {
                        var l = a;
                        a = n, 8 === (o = t).nodeType ? o.parentNode.insertBefore(l, a) : o.insertBefore(l, a)
                    } else t.insertBefore(a, n); else r ? (8 === (l = t).nodeType ? (o = l.parentNode).insertBefore(a, l) : (o = l).appendChild(a), null != (l = l._reactRootContainer) || null !== o.onclick || (o.onclick = yr)) : t.appendChild(a)
                } else if (4 !== i.tag && null !== i.child) {
                    i = (i.child.return = i).child;
                    continue
                }
                if (i === e) break;
                for (; null === i.sibling;) {
                    if (null === i.return || i.return === e) return;
                    i = i.return
                }
                i.sibling.return = i.return, i = i.sibling
            }
        }

        function Fa(e, t) {
            for (var n = e, r = !1, i = void 0, o = void 0; ;) {
                if (!r) {
                    r = n.return;
                    e:for (; ;) {
                        if (null === r) throw s(Error(160));
                        switch (i = r.stateNode, r.tag) {
                            case 5:
                                o = !1;
                                break e;
                            case 3:
                            case 4:
                                i = i.containerInfo, o = !0;
                                break e
                        }
                        r = r.return
                    }
                    r = !0
                }
                if (5 === n.tag || 6 === n.tag) if (za(n, t), o) {
                    var a = i, l = n.stateNode;
                    8 === a.nodeType ? a.parentNode.removeChild(l) : a.removeChild(l)
                } else i.removeChild(n.stateNode); else if (20 === n.tag) l = n.stateNode.instance, za(n, t), o ? 8 === (a = i).nodeType ? a.parentNode.removeChild(l) : a.removeChild(l) : i.removeChild(l); else if (4 === n.tag) {
                    if (null !== n.child) {
                        i = n.stateNode.containerInfo, o = !0, n = (n.child.return = n).child;
                        continue
                    }
                } else if (Ia(n, t), null !== n.child) {
                    n = (n.child.return = n).child;
                    continue
                }
                if (n === e) break;
                for (; null === n.sibling;) {
                    if (null === n.return || n.return === e) return;
                    4 === (n = n.return).tag && (r = !1)
                }
                n.sibling.return = n.return, n = n.sibling
            }
        }

        function Ha(e, t) {
            switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    Da(mo, go, t);
                    break;
                case 1:
                    break;
                case 5:
                    var n = t.stateNode;
                    if (null != n) {
                        var r = t.memoizedProps, i = null !== e ? e.memoizedProps : r;
                        e = t.type;
                        var o = t.updateQueue;
                        if ((t.updateQueue = null) !== o) {
                            for (n[R] = r, "input" === e && "radio" === r.type && null != r.name && kt(n, r), gr(e, i), t = gr(e, r), i = 0; i < o.length; i += 2) {
                                var a = o[i], l = o[i + 1];
                                "style" === a ? hr(n, l) : "dangerouslySetInnerHTML" === a ? ur(n, l) : "children" === a ? cr(n, l) : yt(n, a, l, t)
                            }
                            switch (e) {
                                case"input":
                                    Ct(n, r);
                                    break;
                                case"textarea":
                                    nr(n, r);
                                    break;
                                case"select":
                                    t = n._wrapperState.wasMultiple, n._wrapperState.wasMultiple = !!r.multiple, null != (e = r.value) ? Jn(n, !!r.multiple, e, !1) : t !== !!r.multiple && (null != r.defaultValue ? Jn(n, !!r.multiple, r.defaultValue, !0) : Jn(n, !!r.multiple, r.multiple ? [] : "", !1))
                            }
                        }
                    }
                    break;
                case 6:
                    if (null === t.stateNode) throw s(Error(162));
                    t.stateNode.nodeValue = t.memoizedProps;
                    break;
                case 3:
                case 12:
                    break;
                case 13:
                    if (null === (n = t).memoizedState ? r = !1 : (r = !0, n = t.child, fs = si()), null !== n) e:for (e = n; ;) {
                        if (5 === e.tag) o = e.stateNode, r ? "function" == typeof (o = o.style).setProperty ? o.setProperty("display", "none", "important") : o.display = "none" : (o = e.stateNode, i = null != (i = e.memoizedProps.style) && i.hasOwnProperty("display") ? i.display : null, o.style.display = fr("display", i)); else if (6 === e.tag) e.stateNode.nodeValue = r ? "" : e.memoizedProps; else {
                            if (13 === e.tag && null !== e.memoizedState) {
                                (o = e.child.sibling).return = e, e = o;
                                continue
                            }
                            if (null !== e.child) {
                                e = (e.child.return = e).child;
                                continue
                            }
                        }
                        if (e === n) break e;
                        for (; null === e.sibling;) {
                            if (null === e.return || e.return === n) break e;
                            e = e.return
                        }
                        e.sibling.return = e.return, e = e.sibling
                    }
                    Ua(t);
                    break;
                case 19:
                    Ua(t);
                    break;
                case 17:
                case 20:
                    break;
                default:
                    throw s(Error(163))
            }
        }

        function Ua(e) {
            var t = e.updateQueue;
            if (null !== t) {
                e.updateQueue = null;
                var n = e.stateNode;
                null === n && (n = e.stateNode = new Pa), t.forEach(function (t) {
                    var r = function (e, t) {
                        var n = e.stateNode;
                        null !== n && n.delete(t), n = _i(n = Ts(), t = Os(n, e, null)), null !== (e = As(e, t)) && Ps(e, n, t)
                    }.bind(null, e, t);
                    n.has(t) || (n.add(t), t.then(r, r))
                })
            }
        }

        var Ba = "function" == typeof WeakMap ? WeakMap : Map;

        function Va(e, t, n) {
            (n = Mi(n, null)).tag = 3, n.payload = {element: null};
            var r = t.value;
            return n.callback = function () {
                ms || (ms = !0, gs = r), La(e, t)
            }, n
        }

        function $a(e, t, n) {
            (n = Mi(n, null)).tag = 3;
            var r = e.type.getDerivedStateFromError;
            if ("function" == typeof r) {
                var i = t.value;
                n.payload = function () {
                    return La(e, t), r(i)
                }
            }
            var o = e.stateNode;
            return null !== o && "function" == typeof o.componentDidCatch && (n.callback = function () {
                "function" != typeof r && (null === vs ? vs = new Set([this]) : vs.add(this), La(e, t));
                var n = t.stack;
                this.componentDidCatch(t.value, {componentStack: null !== n ? n : ""})
            }), n
        }

        var Ka = Math.ceil, Ga = $e.ReactCurrentDispatcher, qa = $e.ReactCurrentOwner, Xa = 0, Ya = 8, Qa = 16, Za = 32,
            Ja = 0, es = 1, ts = 2, ns = 3, rs = 4, is = Xa, os = null, as = null, ss = 0, ls = Ja, us = 1073741823,
            cs = 1073741823, ps = null, ds = !1, fs = 0, hs = 500, _s = null, ms = !1, gs = null, vs = null, ys = !1,
            bs = null, ws = 90, xs = 0, ks = null, Cs = 0, Ss = null, Es = 0;

        function Ts() {
            return (is & (Qa | Za)) !== Xa ? 1073741821 - (si() / 10 | 0) : 0 !== Es ? Es : Es = 1073741821 - (si() / 10 | 0)
        }

        function Os(e, t, n) {
            if (0 == (2 & (t = t.mode))) return 1073741823;
            var r = li();
            if (0 == (4 & t)) return 99 === r ? 1073741823 : 1073741822;
            if ((is & Qa) !== Xa) return ss;
            if (null !== n) e = 1073741821 - 25 * (1 + ((1073741821 - e + (0 | n.timeoutMs || 5e3) / 10) / 25 | 0)); else switch (r) {
                case 99:
                    e = 1073741823;
                    break;
                case 98:
                    e = 1073741821 - 10 * (1 + ((1073741821 - e + 15) / 10 | 0));
                    break;
                case 97:
                case 96:
                    e = 1073741821 - 25 * (1 + ((1073741821 - e + 500) / 25 | 0));
                    break;
                case 95:
                    e = 1;
                    break;
                default:
                    throw s(Error(326))
            }
            return null !== os && e === ss && --e, e
        }

        var Ns = 0;

        function Ms(e, t) {
            if (50 < Cs) throw Cs = 0, Ss = null, s(Error(185));
            if (null !== (e = As(e, t))) {
                e.pingTime = 0;
                var n = li();
                if (1073741823 === t) if ((is & Ya) !== Xa && (is & (Qa | Za)) === Xa) for (var r = js(e, 1073741823, !0); null !== r;) r = r(!0); else Ps(e, 99, 1073741823), is === Xa && fi(); else Ps(e, n, t);
                (4 & is) === Xa || 98 !== n && 99 !== n || (null === ks ? ks = new Map([[e, t]]) : (void 0 === (n = ks.get(e)) || t < n) && ks.set(e, t))
            }
        }

        function As(e, t) {
            e.expirationTime < t && (e.expirationTime = t);
            var n = e.alternate;
            null !== n && n.expirationTime < t && (n.expirationTime = t);
            var r = e.return, i = null;
            if (null === r && 3 === e.tag) i = e.stateNode; else for (; null !== r;) {
                if (n = r.alternate, r.childExpirationTime < t && (r.childExpirationTime = t), null !== n && n.childExpirationTime < t && (n.childExpirationTime = t), null === r.return && 3 === r.tag) {
                    i = r.stateNode;
                    break
                }
                r = r.return
            }
            return null !== i && (t > i.firstPendingTime && (i.firstPendingTime = t), 0 === (e = i.lastPendingTime) || t < e) && (i.lastPendingTime = t), i
        }

        function Ps(e, t, n) {
            if (e.callbackExpirationTime < n) {
                var r = e.callbackNode;
                null !== r && r !== ti && $r(r), e.callbackExpirationTime = n, e.callbackNode = 1073741823 === n ? di(Ls.bind(null, e, js.bind(null, e, n))) : (r = null, 1 !== n && (r = {timeout: 10 * (1073741821 - n) - si()}), pi(t, Ls.bind(null, e, js.bind(null, e, n)), r))
            }
        }

        function Ls(e, t, n) {
            var r = e.callbackNode, i = null;
            try {
                return null !== (i = t(n)) ? Ls.bind(null, e, i) : null
            } finally {
                null === i && r === e.callbackNode && (e.callbackNode = null, e.callbackExpirationTime = 0)
            }
        }

        function Rs() {
            (is & (1 | Qa | Za)) === Xa && (function () {
                if (null !== ks) {
                    var e = ks;
                    ks = null, e.forEach(function (e, t) {
                        di(js.bind(null, t, e))
                    }), fi()
                }
            }(), Bs())
        }

        function Ds(e, t, n, r) {
            var i = is;
            is |= 4;
            try {
                return ci(98, e.bind(null, t, n, r))
            } finally {
                (is = i) === Xa && fi()
            }
        }

        function Is(e, t) {
            var n = is;
            is &= -2, is |= Ya;
            try {
                return e(t)
            } finally {
                (is = n) === Xa && fi()
            }
        }

        function zs(e, t) {
            e.finishedWork = null, e.finishedExpirationTime = 0;
            var n = e.timeoutHandle;
            if (-1 !== n && (e.timeoutHandle = -1, Sr(n)), null !== as) for (n = as.return; null !== n;) {
                var r = n;
                switch (r.tag) {
                    case 1:
                        null != r.type.childContextTypes && zr();
                        break;
                    case 3:
                        oo(), jr();
                        break;
                    case 5:
                        so(r);
                        break;
                    case 4:
                        oo();
                        break;
                    case 13:
                    case 19:
                        Nr(po);
                        break;
                    case 10:
                        ki(r)
                }
                n = n.return
            }
            as = Js((os = e).current, null), ss = t, ls = Ja, cs = us = 1073741823, ps = null, ds = !1
        }

        function js(e, t, n) {
            if ((is & (Qa | Za)) !== Xa) throw s(Error(327));
            if (e.firstPendingTime < t) return null;
            if (n && e.finishedExpirationTime === t) return Us.bind(null, e);
            if (Bs(), e !== os || t !== ss) zs(e, t); else if (ls === ns) if (ds) zs(e, t); else {
                var i = e.lastPendingTime;
                if (i < t) return js.bind(null, e, i)
            }
            if (null !== as) {
                i = is, is |= Qa;
                var o = Ga.current;
                if (null === o && (o = Yo), Ga.current = Yo, n) {
                    if (1073741823 !== t) {
                        var a = Ts();
                        if (a < t) return is = i, wi(), Ga.current = o, js.bind(null, e, a)
                    }
                } else Es = 0;
                for (; ;) try {
                    if (n) for (; null !== as;) as = Fs(as); else for (; null !== as && !Kr();) as = Fs(as);
                    break
                } catch (n) {
                    if (wi(), Wo(), null === (a = as) || null === a.return) throw zs(e, t), is = i, n;
                    e:{
                        var l = e, u = a.return, c = a, p = n, d = ss;
                        if (c.effectTag |= 1024, c.firstEffect = c.lastEffect = null, null !== p && "object" === r(p) && "function" == typeof p.then) {
                            var f = p, h = 0 != (po.current & uo);
                            p = u;
                            do {
                                var _;
                                if ((_ = 13 === p.tag) && (_ = null === p.memoizedState && void 0 !== (_ = p.memoizedProps).fallback && (!0 !== _.unstable_avoidThisFallback || !h)), _) {
                                    if (null === (u = p.updateQueue) ? ((u = new Set).add(f), p.updateQueue = u) : u.add(f), 0 == (2 & p.mode)) {
                                        p.effectTag |= 64, c.effectTag &= -1957, 1 === c.tag && (null === c.alternate ? c.tag = 17 : ((d = Mi(1073741823, null)).tag = 2, Pi(c, d))), c.expirationTime = 1073741823;
                                        break e
                                    }
                                    c = l, l = d, null === (h = c.pingCache) ? (h = c.pingCache = new Ba, u = new Set, h.set(f, u)) : void 0 === (u = h.get(f)) && (u = new Set, h.set(f, u)), u.has(l) || (u.add(l), c = Ks.bind(null, c, f, l), f.then(c, c)), p.effectTag |= 2048, p.expirationTime = d;
                                    break e
                                }
                                p = p.return
                            } while (null !== p);
                            p = Error((ut(c.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + ct(c))
                        }
                        ls !== rs && (ls = es), p = Aa(p, c), c = u;
                        do {
                            switch (c.tag) {
                                case 3:
                                    c.effectTag |= 2048, c.expirationTime = d, Li(c, d = Va(c, p, d));
                                    break e;
                                case 1:
                                    if (f = p, l = c.type, u = c.stateNode, 0 == (64 & c.effectTag) && ("function" == typeof l.getDerivedStateFromError || null !== u && "function" == typeof u.componentDidCatch && (null === vs || !vs.has(u)))) {
                                        c.effectTag |= 2048, c.expirationTime = d, Li(c, d = $a(c, f, d));
                                        break e
                                    }
                            }
                            c = c.return
                        } while (null !== c)
                    }
                    as = Hs(a)
                }
                if (is = i, wi(), Ga.current = o, null !== as) return js.bind(null, e, t)
            }
            if (e.finishedWork = e.current.alternate, e.finishedExpirationTime = t, m = t, null !== (g = e.firstBatch) && g._defer && g._expirationTime >= m && (pi(97, function () {
                return g._onComplete(), null
            }), 1)) return null;
            var m, g;
            switch (os = null, ls) {
                case Ja:
                    throw s(Error(328));
                case es:
                    return (i = e.lastPendingTime) < t ? js.bind(null, e, i) : n ? Us.bind(null, e) : (zs(e, t), di(js.bind(null, e, t)), null);
                case ts:
                    return 1073741823 === us && !n && 10 < (n = fs + hs - si()) ? ds ? (zs(e, t), js.bind(null, e, t)) : (i = e.lastPendingTime) < t ? js.bind(null, e, i) : (e.timeoutHandle = Cr(Us.bind(null, e), n), null) : Us.bind(null, e);
                case ns:
                    if (!n) {
                        if (ds) return zs(e, t), js.bind(null, e, t);
                        if ((n = e.lastPendingTime) < t) return js.bind(null, e, n);
                        if (1073741823 !== cs ? n = 10 * (1073741821 - cs) - si() : 1073741823 === us ? n = 0 : (n = 10 * (1073741821 - us) - 5e3, (n = (i = si()) - n) < 0 && (n = 0), (t = 10 * (1073741821 - t) - i) < (n = (n < 120 ? 120 : n < 480 ? 480 : n < 1080 ? 1080 : n < 1920 ? 1920 : n < 3e3 ? 3e3 : n < 4320 ? 4320 : 1960 * Ka(n / 1960)) - n) && (n = t)), 10 < n) return e.timeoutHandle = Cr(Us.bind(null, e), n), null
                    }
                    return Us.bind(null, e);
                case rs:
                    return !n && 1073741823 !== us && null !== ps && (i = us, 10 < (t = (t = 0 | (o = ps).busyMinDurationMs) <= 0 ? 0 : (n = 0 | o.busyDelayMs, (i = si() - (10 * (1073741821 - i) - (0 | o.timeoutMs || 5e3))) <= n ? 0 : n + t - i))) ? (e.timeoutHandle = Cr(Us.bind(null, e), t), null) : Us.bind(null, e);
                default:
                    throw s(Error(329))
            }
        }

        function Ws(e, t) {
            e < us && 1 < e && (us = e), null !== t && e < cs && 1 < e && (cs = e, ps = t)
        }

        function Fs(e) {
            var t = Gs(e.alternate, e, ss);
            return e.memoizedProps = e.pendingProps, null === t && (t = Hs(e)), qa.current = null, t
        }

        function Hs(e) {
            as = e;
            do {
                var t = as.alternate;
                if (e = as.return, 0 == (1024 & as.effectTag)) {
                    e:{
                        var n = t, r = ss, i = (t = as).pendingProps;
                        switch (t.tag) {
                            case 2:
                            case 16:
                                break;
                            case 15:
                            case 0:
                                break;
                            case 1:
                                Ir(t.type) && zr();
                                break;
                            case 3:
                                oo(), jr(), (r = t.stateNode).pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== n && null !== n.child || (aa(t), t.effectTag &= -3), Ea(t);
                                break;
                            case 5:
                                so(t), r = ro(no.current);
                                var a = t.type;
                                if (null !== n && null != t.stateNode) Ta(n, t, a, i, r), n.ref !== t.ref && (t.effectTag |= 128); else if (i) {
                                    var l = ro(eo.current);
                                    if (aa(t)) {
                                        i = void 0, a = (n = t).stateNode;
                                        var u = n.type, c = n.memoizedProps;
                                        switch (a[L] = n, a[R] = c, u) {
                                            case"iframe":
                                            case"object":
                                            case"embed":
                                                Rn("load", a);
                                                break;
                                            case"video":
                                            case"audio":
                                                for (var p = 0; p < te.length; p++) Rn(te[p], a);
                                                break;
                                            case"source":
                                                Rn("error", a);
                                                break;
                                            case"img":
                                            case"image":
                                            case"link":
                                                Rn("error", a), Rn("load", a);
                                                break;
                                            case"form":
                                                Rn("reset", a), Rn("submit", a);
                                                break;
                                            case"details":
                                                Rn("toggle", a);
                                                break;
                                            case"input":
                                                xt(a, c), Rn("invalid", a), vr(r, "onChange");
                                                break;
                                            case"select":
                                                a._wrapperState = {wasMultiple: !!c.multiple}, Rn("invalid", a), vr(r, "onChange");
                                                break;
                                            case"textarea":
                                                tr(a, c), Rn("invalid", a), vr(r, "onChange")
                                        }
                                        for (i in mr(u, c), p = null, c) c.hasOwnProperty(i) && (l = c[i], "children" === i ? "string" == typeof l ? a.textContent !== l && (p = ["children", l]) : "number" == typeof l && a.textContent !== "" + l && (p = ["children", "" + l]) : h.hasOwnProperty(i) && null != l && vr(r, i));
                                        switch (u) {
                                            case"input":
                                                Be(a), St(a, c, !0);
                                                break;
                                            case"textarea":
                                                Be(a), rr(a);
                                                break;
                                            case"select":
                                            case"option":
                                                break;
                                            default:
                                                "function" == typeof c.onClick && (a.onclick = yr)
                                        }
                                        r = p, null !== (n.updateQueue = r) && Ca(t)
                                    } else {
                                        c = a, n = i, u = t, p = 9 === r.nodeType ? r : r.ownerDocument, l === ir.html && (l = or(c)), l === ir.html ? "script" === c ? ((c = p.createElement("div")).innerHTML = "<script><\/script>", p = c.removeChild(c.firstChild)) : "string" == typeof n.is ? p = p.createElement(c, {is: n.is}) : (p = p.createElement(c), "select" === c && (c = p, n.multiple ? c.multiple = !0 : n.size && (c.size = n.size))) : p = p.createElementNS(l, c), (c = p)[L] = u, c[R] = n, Sa(n = c, t, !1, !1), u = n;
                                        var d = r, f = gr(a, i);
                                        switch (a) {
                                            case"iframe":
                                            case"object":
                                            case"embed":
                                                Rn("load", u), r = i;
                                                break;
                                            case"video":
                                            case"audio":
                                                for (r = 0; r < te.length; r++) Rn(te[r], u);
                                                r = i;
                                                break;
                                            case"source":
                                                Rn("error", u), r = i;
                                                break;
                                            case"img":
                                            case"image":
                                            case"link":
                                                Rn("error", u), Rn("load", u), r = i;
                                                break;
                                            case"form":
                                                Rn("reset", u), Rn("submit", u), r = i;
                                                break;
                                            case"details":
                                                Rn("toggle", u), r = i;
                                                break;
                                            case"input":
                                                xt(u, i), r = wt(u, i), Rn("invalid", u), vr(d, "onChange");
                                                break;
                                            case"option":
                                                r = Zn(u, i);
                                                break;
                                            case"select":
                                                u._wrapperState = {wasMultiple: !!i.multiple}, r = o({}, i, {value: void 0}), Rn("invalid", u), vr(d, "onChange");
                                                break;
                                            case"textarea":
                                                tr(u, i), r = er(u, i), Rn("invalid", u), vr(d, "onChange");
                                                break;
                                            default:
                                                r = i
                                        }
                                        mr(a, r), c = void 0, p = a, l = u;
                                        var _ = r;
                                        for (c in _) if (_.hasOwnProperty(c)) {
                                            var m = _[c];
                                            "style" === c ? hr(l, m) : "dangerouslySetInnerHTML" === c ? null != (m = m ? m.__html : void 0) && ur(l, m) : "children" === c ? "string" == typeof m ? ("textarea" !== p || "" !== m) && cr(l, m) : "number" == typeof m && cr(l, "" + m) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (h.hasOwnProperty(c) ? null != m && vr(d, c) : null != m && yt(l, c, m, f))
                                        }
                                        switch (a) {
                                            case"input":
                                                Be(u), St(u, i, !1);
                                                break;
                                            case"textarea":
                                                Be(u), rr(u);
                                                break;
                                            case"option":
                                                null != i.value && u.setAttribute("value", "" + bt(i.value));
                                                break;
                                            case"select":
                                                r = u, u = i, r.multiple = !!u.multiple, null != (c = u.value) ? Jn(r, !!u.multiple, c, !1) : null != u.defaultValue && Jn(r, !!u.multiple, u.defaultValue, !0);
                                                break;
                                            default:
                                                "function" == typeof r.onClick && (u.onclick = yr)
                                        }
                                        xr(a, i) && Ca(t), t.stateNode = n
                                    }
                                    null !== t.ref && (t.effectTag |= 128)
                                } else if (null === t.stateNode) throw s(Error(166));
                                break;
                            case 6:
                                if (n && null != t.stateNode) Oa(n, t, n.memoizedProps, i); else {
                                    if ("string" != typeof i && null === t.stateNode) throw s(Error(166));
                                    n = ro(no.current), ro(eo.current), aa(t) ? (r = t.stateNode, n = t.memoizedProps, r[L] = t, r.nodeValue !== n && Ca(t)) : (r = t, (n = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(i))[L] = t, r.stateNode = n)
                                }
                                break;
                            case 11:
                                break;
                            case 13:
                                if (Nr(po), i = t.memoizedState, 0 != (64 & t.effectTag)) {
                                    t.expirationTime = r;
                                    break e
                                }
                                r = null !== i, i = !1, null === n ? aa(t) : (i = null !== (a = n.memoizedState), r || null === a || null !== (a = n.child.sibling) && (u = t.firstEffect, a.nextEffect = null !== u ? (t.firstEffect = a, u) : (t.firstEffect = t.lastEffect = a, null), a.effectTag = 8)), r && !i && 0 != (2 & t.mode) && (null === n && !0 !== t.memoizedProps.unstable_avoidThisFallback || 0 != (po.current & uo) ? ls === Ja && (ls = ts) : ls !== Ja && ls !== ts || (ls = ns)), (r || i) && (t.effectTag |= 4);
                                break;
                            case 7:
                            case 8:
                            case 12:
                                break;
                            case 4:
                                oo(), Ea(t);
                                break;
                            case 10:
                                ki(t);
                                break;
                            case 9:
                            case 14:
                                break;
                            case 17:
                                Ir(t.type) && zr();
                                break;
                            case 18:
                                break;
                            case 19:
                                if (Nr(po), null === (i = t.memoizedState)) break;
                                if (a = 0 != (64 & t.effectTag), null === (u = i.rendering)) {
                                    if (a) Na(i, !1); else if (ls !== Ja || null !== n && 0 != (64 & n.effectTag)) for (n = t.child; null !== n;) {
                                        if (null !== (u = fo(n))) {
                                            for (t.effectTag |= 64, Na(i, !1), null !== (n = u.updateQueue) && (t.updateQueue = n, t.effectTag |= 4), t.firstEffect = t.lastEffect = null, n = t.child; null !== n;) a = r, (i = n).effectTag &= 2, i.nextEffect = null, i.firstEffect = null, i.lastEffect = null, u = i.alternate, i.dependencies = null === u ? (i.childExpirationTime = 0, i.expirationTime = a, i.child = null, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null) : (i.childExpirationTime = u.childExpirationTime, i.expirationTime = u.expirationTime, i.child = u.child, i.memoizedProps = u.memoizedProps, i.memoizedState = u.memoizedState, i.updateQueue = u.updateQueue, null === (a = u.dependencies) ? null : {
                                                expirationTime: a.expirationTime,
                                                firstContext: a.firstContext,
                                                responders: a.responders
                                            }), n = n.sibling;
                                            Mr(po, po.current & lo | co), t = t.child;
                                            break e
                                        }
                                        n = n.sibling
                                    }
                                } else {
                                    if (!a) if (null !== (n = fo(u))) {
                                        if (t.effectTag |= 64, Na(i, a = !0), null === i.tail && "hidden" === i.tailMode) {
                                            null !== (r = n.updateQueue) && (t.updateQueue = r, t.effectTag |= 4), null !== (t = t.lastEffect = i.lastEffect) && (t.nextEffect = null);
                                            break
                                        }
                                    } else si() > i.tailExpiration && 1 < r && (t.effectTag |= 64, Na(i, !(a = !0)), t.expirationTime = t.childExpirationTime = r - 1);
                                    i.isBackwards ? (u.sibling = t.child, t.child = u) : (null !== (r = i.last) ? r.sibling = u : t.child = u, i.last = u)
                                }
                                if (null === i.tail) break;
                                0 === i.tailExpiration && (i.tailExpiration = si() + 500), r = i.tail, i.rendering = r, i.tail = r.sibling, i.lastEffect = t.lastEffect, r.sibling = null, n = po.current, Mr(po, n = a ? n & lo | co : n & lo), t = r;
                                break e;
                            case 20:
                                break;
                            default:
                                throw s(Error(156))
                        }
                        t = null
                    }
                    if (r = as, 1 === ss || 1 !== r.childExpirationTime) {
                        for (n = 0, i = r.child; null !== i;) n < (a = i.expirationTime) && (n = a), n < (u = i.childExpirationTime) && (n = u), i = i.sibling;
                        r.childExpirationTime = n
                    }
                    if (null !== t) return t;
                    null !== e && 0 == (1024 & e.effectTag) && (null === e.firstEffect && (e.firstEffect = as.firstEffect), null !== as.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = as.firstEffect), e.lastEffect = as.lastEffect), 1 < as.effectTag && (null !== e.lastEffect ? e.lastEffect.nextEffect = as : e.firstEffect = as, e.lastEffect = as))
                } else {
                    if (null !== (t = Ma(as))) return t.effectTag &= 1023, t;
                    null !== e && (e.firstEffect = e.lastEffect = null, e.effectTag |= 1024)
                }
                if (null !== (t = as.sibling)) return t;
                as = e
            } while (null !== as);
            return ls === Ja && (ls = rs), null
        }

        function Us(e) {
            var t = li();
            return ci(99, function (e, t) {
                if (Bs(), (is & (Qa | Za)) !== Xa) throw s(Error(327));
                var n = e.finishedWork, r = e.finishedExpirationTime;
                if (null === n) return null;
                if (e.finishedWork = null, e.finishedExpirationTime = 0, n === e.current) throw s(Error(177));
                e.callbackNode = null, e.callbackExpirationTime = 0;
                var i = n.expirationTime, o = n.childExpirationTime;
                if (i = i < o ? o : i, (e.firstPendingTime = i) < e.lastPendingTime && (e.lastPendingTime = i), e === os && (as = os = null, ss = 0), null !== (i = 1 < n.effectTag ? null !== n.lastEffect ? (n.lastEffect.nextEffect = n).firstEffect : n : n.firstEffect)) {
                    o = is, is |= Za, qa.current = null, br = Ln;
                    var a = Un();
                    if (Bn(a)) {
                        if ("selectionStart" in a) var l = {start: a.selectionStart, end: a.selectionEnd}; else e:{
                            var u = (l = (l = a.ownerDocument) && l.defaultView || window).getSelection && l.getSelection();
                            if (u && 0 !== u.rangeCount) {
                                l = u.anchorNode;
                                var c = u.anchorOffset, p = u.focusNode;
                                u = u.focusOffset;
                                try {
                                    l.nodeType, p.nodeType
                                } catch (e) {
                                    l = null;
                                    break e
                                }
                                var d = 0, f = -1, h = -1, _ = 0, m = 0, g = a, v = null;
                                t:for (; ;) {
                                    for (var y; g !== l || 0 !== c && 3 !== g.nodeType || (f = d + c), g !== p || 0 !== u && 3 !== g.nodeType || (h = d + u), 3 === g.nodeType && (d += g.nodeValue.length), null !== (y = g.firstChild);) v = g, g = y;
                                    for (; ;) {
                                        if (g === a) break t;
                                        if (v === l && ++_ === c && (f = d), v === p && ++m === u && (h = d), null !== (y = g.nextSibling)) break;
                                        v = (g = v).parentNode
                                    }
                                    g = y
                                }
                                l = -1 === f || -1 === h ? null : {start: f, end: h}
                            } else l = null
                        }
                        l = l || {start: 0, end: 0}
                    } else l = null;
                    Ln = !(wr = {focusedElem: a, selectionRange: l}), _s = i;
                    do {
                        try {
                            for (; null !== _s;) {
                                if (0 != (256 & _s.effectTag)) {
                                    var b = _s.alternate;
                                    switch ((a = _s).tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Da(_o, ho, a);
                                            break;
                                        case 1:
                                            if (256 & a.effectTag && null !== b) {
                                                var w = b.memoizedProps, x = b.memoizedState, k = a.stateNode,
                                                    C = k.getSnapshotBeforeUpdate(a.elementType === a.type ? w : mi(a.type, w), x);
                                                k.__reactInternalSnapshotBeforeUpdate = C
                                            }
                                            break;
                                        case 3:
                                        case 5:
                                        case 6:
                                        case 4:
                                        case 17:
                                            break;
                                        default:
                                            throw s(Error(163))
                                    }
                                }
                                _s = _s.nextEffect
                            }
                        } catch (e) {
                            if (null === _s) throw s(Error(330));
                            $s(_s, e), _s = _s.nextEffect
                        }
                    } while (null !== _s);
                    _s = i;
                    do {
                        try {
                            for (b = t; null !== _s;) {
                                var S = _s.effectTag;
                                if (16 & S && cr(_s.stateNode, ""), 128 & S) {
                                    var E = _s.alternate;
                                    if (null !== E) {
                                        var T = E.ref;
                                        null !== T && ("function" == typeof T ? T(null) : T.current = null)
                                    }
                                }
                                switch (14 & S) {
                                    case 2:
                                        Wa(_s), _s.effectTag &= -3;
                                        break;
                                    case 6:
                                        Wa(_s), _s.effectTag &= -3, Ha(_s.alternate, _s);
                                        break;
                                    case 4:
                                        Ha(_s.alternate, _s);
                                        break;
                                    case 8:
                                        Fa(w = _s, b), w.return = null, w.child = null, w.memoizedState = null, w.updateQueue = null, w.dependencies = null;
                                        var O = w.alternate;
                                        null !== O && (O.return = null, O.child = null, O.memoizedState = null, O.updateQueue = null, O.dependencies = null)
                                }
                                _s = _s.nextEffect
                            }
                        } catch (e) {
                            if (null === _s) throw s(Error(330));
                            $s(_s, e), _s = _s.nextEffect
                        }
                    } while (null !== _s);
                    if (T = wr, E = Un(), S = T.focusedElem, b = T.selectionRange, E !== S && S && S.ownerDocument && function e(t, n) {
                        return !(!t || !n) && (t === n || (!t || 3 !== t.nodeType) && (n && 3 === n.nodeType ? e(t, n.parentNode) : "contains" in t ? t.contains(n) : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(n))))
                    }(S.ownerDocument.documentElement, S)) {
                        null !== b && Bn(S) && (E = b.start, void 0 === (T = b.end) && (T = E), "selectionStart" in S ? (S.selectionStart = E, S.selectionEnd = Math.min(T, S.value.length)) : (T = (E = S.ownerDocument || document) && E.defaultView || window).getSelection && (T = T.getSelection(), w = S.textContent.length, O = Math.min(b.start, w), b = void 0 === b.end ? O : Math.min(b.end, w), !T.extend && b < O && (w = b, b = O, O = w), w = Hn(S, O), x = Hn(S, b), w && x && (1 !== T.rangeCount || T.anchorNode !== w.node || T.anchorOffset !== w.offset || T.focusNode !== x.node || T.focusOffset !== x.offset) && ((E = E.createRange()).setStart(w.node, w.offset), T.removeAllRanges(), b < O ? (T.addRange(E), T.extend(x.node, x.offset)) : (E.setEnd(x.node, x.offset), T.addRange(E))))), E = [];
                        for (T = S; T = T.parentNode;) 1 === T.nodeType && E.push({
                            element: T,
                            left: T.scrollLeft,
                            top: T.scrollTop
                        });
                        for ("function" == typeof S.focus && S.focus(), S = 0; S < E.length; S++) (T = E[S]).element.scrollLeft = T.left, T.element.scrollTop = T.top
                    }
                    Ln = !!br, br = wr = null, e.current = n, _s = i;
                    do {
                        try {
                            for (S = r; null !== _s;) {
                                var N = _s.effectTag;
                                if (36 & N) {
                                    var M = _s.alternate;
                                    switch (T = S, (E = _s).tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Da(vo, yo, E);
                                            break;
                                        case 1:
                                            var A = E.stateNode;
                                            if (4 & E.effectTag) if (null === M) A.componentDidMount(); else {
                                                var P = E.elementType === E.type ? M.memoizedProps : mi(E.type, M.memoizedProps);
                                                A.componentDidUpdate(P, M.memoizedState, A.__reactInternalSnapshotBeforeUpdate)
                                            }
                                            var L = E.updateQueue;
                                            null !== L && zi(0, L, A);
                                            break;
                                        case 3:
                                            var R = E.updateQueue;
                                            if (null !== R) {
                                                if ((O = null) !== E.child) switch (E.child.tag) {
                                                    case 5:
                                                        O = E.child.stateNode;
                                                        break;
                                                    case 1:
                                                        O = E.child.stateNode
                                                }
                                                zi(0, R, O)
                                            }
                                            break;
                                        case 5:
                                            var D = E.stateNode;
                                            null === M && 4 & E.effectTag && (T = D, xr(E.type, E.memoizedProps) && T.focus());
                                            break;
                                        case 6:
                                        case 4:
                                        case 12:
                                            break;
                                        case 13:
                                        case 19:
                                        case 17:
                                        case 20:
                                            break;
                                        default:
                                            throw s(Error(163))
                                    }
                                }
                                if (128 & N) {
                                    var I = _s.ref;
                                    if (null !== I) {
                                        var z = _s.stateNode;
                                        switch (_s.tag) {
                                            case 5:
                                                var j = z;
                                                break;
                                            default:
                                                j = z
                                        }
                                        "function" == typeof I ? I(j) : I.current = j
                                    }
                                }
                                512 & N && (ys = !0), _s = _s.nextEffect
                            }
                        } catch (e) {
                            if (null === _s) throw s(Error(330));
                            $s(_s, e), _s = _s.nextEffect
                        }
                    } while (null !== _s);
                    _s = null, ni(), is = o
                } else e.current = n;
                if (ys) ys = !1, bs = e, xs = r, ws = t; else for (_s = i; null !== _s;) t = _s.nextEffect, _s.nextEffect = null, _s = t;
                if (0 !== (t = e.firstPendingTime) ? Ps(e, N = _i(N = Ts(), t), t) : vs = null, "function" == typeof qs && qs(n.stateNode, r), 1073741823 === t ? e === Ss ? Cs++ : (Cs = 0, Ss = e) : Cs = 0, ms) throw ms = !1, e = gs, gs = null, e;
                return (is & Ya) !== Xa || fi(), null
            }.bind(null, e, t)), null !== bs && pi(97, function () {
                return Bs(), null
            }), null
        }

        function Bs() {
            if (null === bs) return !1;
            var e = bs, t = xs, n = ws;
            return xs = 0, ws = 90, ci(97 < n ? 97 : n, function (e) {
                if ((is & (Qa | Za)) !== Xa) throw s(Error(331));
                var t = is;
                for (is |= Za, e = e.current.firstEffect; null !== e;) {
                    try {
                        var n = e;
                        if (0 != (512 & n.effectTag)) switch (n.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Da(wo, ho, n), Da(ho, bo, n)
                        }
                    } catch (t) {
                        if (null === e) throw s(Error(330));
                        $s(e, t)
                    }
                    n = e.nextEffect, e.nextEffect = null, e = n
                }
                return is = t, fi(), !0
            }.bind(bs = null, e, t))
        }

        function Vs(e, t, n) {
            Pi(e, t = Va(e, t = Aa(n, t), 1073741823)), null !== (e = As(e, 1073741823)) && Ps(e, 99, 1073741823)
        }

        function $s(e, t) {
            if (3 === e.tag) Vs(e, e, t); else for (var n = e.return; null !== n;) {
                if (3 === n.tag) {
                    Vs(n, e, t);
                    break
                }
                if (1 === n.tag) {
                    var r = n.stateNode;
                    if ("function" == typeof n.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === vs || !vs.has(r))) {
                        Pi(n, e = $a(n, e = Aa(t, e), 1073741823)), null !== (n = As(n, 1073741823)) && Ps(n, 99, 1073741823);
                        break
                    }
                }
                n = n.return
            }
        }

        function Ks(e, t, n) {
            var r = e.pingCache;
            null !== r && r.delete(t), os === e && ss === n ? ls === ns || ls === ts && 1073741823 === us && si() - fs < hs ? zs(e, ss) : ds = !0 : e.lastPendingTime < n || 0 !== (t = e.pingTime) && t < n || (e.pingTime = n, e.finishedExpirationTime === n && (e.finishedExpirationTime = 0, e.finishedWork = null), Ps(e, t = _i(t = Ts(), n), n))
        }

        var Gs = void 0;
        Gs = function (e, t, n) {
            var i = t.expirationTime;
            if (null !== e) {
                var o = t.pendingProps;
                if (e.memoizedProps !== o || Lr.current) ua = !0; else if (i < n) {
                    switch (ua = !1, t.tag) {
                        case 3:
                            va(t), sa();
                            break;
                        case 5:
                            if (ao(t), 4 & t.mode && 1 !== n && o.hidden) return t.expirationTime = t.childExpirationTime = 1, null;
                            break;
                        case 1:
                            Ir(t.type) && Hr(t);
                            break;
                        case 4:
                            io(t, t.stateNode.containerInfo);
                            break;
                        case 10:
                            xi(t, t.memoizedProps.value);
                            break;
                        case 13:
                            if (null !== t.memoizedState) return 0 !== (i = t.child.childExpirationTime) && n <= i ? ba(e, t, n) : (Mr(po, po.current & lo), null !== (t = ka(e, t, n)) ? t.sibling : null);
                            Mr(po, po.current & lo);
                            break;
                        case 19:
                            if (i = t.childExpirationTime >= n, 0 != (64 & e.effectTag)) {
                                if (i) return xa(e, t, n);
                                t.effectTag |= 64
                            }
                            if (null !== (o = t.memoizedState) && (o.rendering = null, o.tail = null), Mr(po, po.current), !i) return null
                    }
                    return ka(e, t, n)
                }
            } else ua = !1;
            switch (t.expirationTime = 0, t.tag) {
                case 2:
                    if (i = t.type, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), e = t.pendingProps, o = Dr(t, Pr.current), Si(t, n), o = jo(null, t, i, e, o, n), t.effectTag |= 1, "object" === r(o) && null !== o && "function" == typeof o.render && void 0 === o.$$typeof) {
                        if (t.tag = 1, Wo(), Ir(i)) {
                            var a = !0;
                            Hr(t)
                        } else a = !1;
                        t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null;
                        var l = i.getDerivedStateFromProps;
                        "function" == typeof l && Hi(t, i, l, e), o.updater = Ui, Ki((t.stateNode = o)._reactInternalFiber = t, i, e, n), t = ga(null, t, i, !0, a, n)
                    } else t.tag = 0, ca(null, t, o, n), t = t.child;
                    return t;
                case 16:
                    switch (o = t.elementType, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), e = t.pendingProps, o = function (e) {
                        var t = e._result;
                        switch (e._status) {
                            case 1:
                                return t;
                            case 2:
                            case 0:
                                throw t;
                            default:
                                switch (e._status = 0, (t = (t = e._ctor)()).then(function (t) {
                                    0 === e._status && (t = t.default, e._status = 1, e._result = t)
                                }, function (t) {
                                    0 === e._status && (e._status = 2, e._result = t)
                                }), e._status) {
                                    case 1:
                                        return e._result;
                                    case 2:
                                        throw e._result
                                }
                                throw e._result = t
                        }
                    }(o), t.type = o, a = t.tag = function (e) {
                        if ("function" == typeof e) return Zs(e) ? 1 : 0;
                        if (null != e) {
                            if ((e = e.$$typeof) === nt) return 11;
                            if (e === ot) return 14
                        }
                        return 2
                    }(o), e = mi(o, e), a) {
                        case 0:
                            t = _a(null, t, o, e, n);
                            break;
                        case 1:
                            t = ma(null, t, o, e, n);
                            break;
                        case 11:
                            t = pa(null, t, o, e, n);
                            break;
                        case 14:
                            t = da(null, t, o, mi(o.type, e), i, n);
                            break;
                        default:
                            throw s(Error(306), o, "")
                    }
                    return t;
                case 0:
                    return i = t.type, o = t.pendingProps, _a(e, t, i, o = t.elementType === i ? o : mi(i, o), n);
                case 1:
                    return i = t.type, o = t.pendingProps, ma(e, t, i, o = t.elementType === i ? o : mi(i, o), n);
                case 3:
                    if (va(t), null === (i = t.updateQueue)) throw s(Error(282));
                    return o = null !== (o = t.memoizedState) ? o.element : null, Ii(t, i, t.pendingProps, null, n), (i = t.memoizedState.element) === o ? (sa(), ka(e, t, n)) : (o = t.stateNode, (o = (null === e || null === e.child) && o.hydrate) && (ea = Er(t.stateNode.containerInfo.firstChild), Jo = t, o = ta = !0), o ? (t.effectTag |= 2, t.child = Zi(t, null, i, n)) : (ca(e, t, i, n), sa()), t.child);
                case 5:
                    return ao(t), null === e && ia(t), i = t.type, o = t.pendingProps, a = null !== e ? e.memoizedProps : null, l = o.children, kr(i, o) ? l = null : null !== a && kr(i, a) && (t.effectTag |= 16), ha(e, t), 4 & t.mode && 1 !== n && o.hidden ? (t.expirationTime = t.childExpirationTime = 1, null) : (ca(e, t, l, n), t.child);
                case 6:
                    return null === e && ia(t), null;
                case 13:
                    return ba(e, t, n);
                case 4:
                    return io(t, t.stateNode.containerInfo), i = t.pendingProps, null === e ? t.child = Qi(t, null, i, n) : ca(e, t, i, n), t.child;
                case 11:
                    return i = t.type, o = t.pendingProps, pa(e, t, i, o = t.elementType === i ? o : mi(i, o), n);
                case 7:
                    return ca(e, t, t.pendingProps, n), t.child;
                case 8:
                case 12:
                    return ca(e, t, t.pendingProps.children, n), t.child;
                case 10:
                    e:{
                        if (i = t.type._context, o = t.pendingProps, l = t.memoizedProps, xi(t, a = o.value), null !== l) {
                            var u = l.value;
                            if (0 == (a = en(u, a) ? 0 : 0 | ("function" == typeof i._calculateChangedBits ? i._calculateChangedBits(u, a) : 1073741823))) {
                                if (l.children === o.children && !Lr.current) {
                                    t = ka(e, t, n);
                                    break e
                                }
                            } else for (null !== (u = t.child) && (u.return = t); null !== u;) {
                                var c = u.dependencies;
                                if (null !== c) {
                                    l = u.child;
                                    for (var p = c.firstContext; null !== p;) {
                                        if (p.context === i && 0 != (p.observedBits & a)) {
                                            1 === u.tag && ((p = Mi(n, null)).tag = 2, Pi(u, p)), u.expirationTime < n && (u.expirationTime = n), null !== (p = u.alternate) && p.expirationTime < n && (p.expirationTime = n), Ci(u.return, n), c.expirationTime < n && (c.expirationTime = n);
                                            break
                                        }
                                        p = p.next
                                    }
                                } else l = 10 === u.tag && u.type === t.type ? null : u.child;
                                if (null !== l) l.return = u; else for (l = u; null !== l;) {
                                    if (l === t) {
                                        l = null;
                                        break
                                    }
                                    if (null !== (u = l.sibling)) {
                                        u.return = l.return, l = u;
                                        break
                                    }
                                    l = l.return
                                }
                                u = l
                            }
                        }
                        ca(e, t, o.children, n), t = t.child
                    }
                    return t;
                case 9:
                    return o = t.type, i = (a = t.pendingProps).children, Si(t, n), i = i(o = Ei(o, a.unstable_observedBits)), t.effectTag |= 1, ca(e, t, i, n), t.child;
                case 14:
                    return a = mi(o = t.type, t.pendingProps), da(e, t, o, a = mi(o.type, a), i, n);
                case 15:
                    return fa(e, t, t.type, t.pendingProps, i, n);
                case 17:
                    return i = t.type, o = t.pendingProps, o = t.elementType === i ? o : mi(i, o), null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), t.tag = 1, Ir(i) ? (e = !0, Hr(t)) : e = !1, Si(t, n), Vi(t, i, o), Ki(t, i, o, n), ga(null, t, i, !0, e, n);
                case 19:
                    return xa(e, t, n)
            }
            throw s(Error(156))
        };
        var qs = null, Xs = null;

        function Ys(e, t, n, r) {
            this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.effectTag = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childExpirationTime = this.expirationTime = 0, this.alternate = null
        }

        function Qs(e, t, n, r) {
            return new Ys(e, t, n, r)
        }

        function Zs(e) {
            return !(!(e = e.prototype) || !e.isReactComponent)
        }

        function Js(e, t) {
            var n = e.alternate;
            return null === n ? ((n = Qs(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, (n.alternate = e).alternate = n) : (n.pendingProps = t, n.effectTag = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childExpirationTime = e.childExpirationTime, n.expirationTime = e.expirationTime, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
                expirationTime: t.expirationTime,
                firstContext: t.firstContext,
                responders: t.responders
            }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
        }

        function el(e, t, n, i, o, a) {
            var l = 2;
            if ("function" == typeof (i = e)) Zs(e) && (l = 1); else if ("string" == typeof e) l = 5; else e:switch (e) {
                case Ye:
                    return tl(n.children, o, a, t);
                case tt:
                    l = 8, o |= 7;
                    break;
                case Qe:
                    l = 8, o |= 1;
                    break;
                case Ze:
                    return (e = Qs(12, n, t, 8 | o)).elementType = Ze, e.type = Ze, e.expirationTime = a, e;
                case rt:
                    return (e = Qs(13, n, t, o)).type = rt, e.elementType = rt, e.expirationTime = a, e;
                case it:
                    return (e = Qs(19, n, t, o)).elementType = it, e.expirationTime = a, e;
                default:
                    if ("object" === r(e) && null !== e) switch (e.$$typeof) {
                        case Je:
                            l = 10;
                            break e;
                        case et:
                            l = 9;
                            break e;
                        case nt:
                            l = 11;
                            break e;
                        case ot:
                            l = 14;
                            break e;
                        case at:
                            l = 16, i = null;
                            break e
                    }
                    throw s(Error(130), null == e ? e : r(e), "")
            }
            return (t = Qs(l, n, t, o)).elementType = e, t.type = i, t.expirationTime = a, t
        }

        function tl(e, t, n, r) {
            return (e = Qs(7, e, r, t)).expirationTime = n, e
        }

        function nl(e, t, n) {
            return (e = Qs(6, e, null, t)).expirationTime = n, e
        }

        function rl(e, t, n) {
            return (t = Qs(4, null !== e.children ? e.children : [], e.key, t)).expirationTime = n, t.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation
            }, t
        }

        function il(e, t, n) {
            this.tag = t, this.current = null, this.containerInfo = e, this.pingCache = this.pendingChildren = null, this.finishedExpirationTime = 0, this.finishedWork = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = n, this.callbackNode = this.firstBatch = null, this.pingTime = this.lastPendingTime = this.firstPendingTime = this.callbackExpirationTime = 0
        }

        function ol(e, t, n) {
            return e = new il(e, t, n), t = Qs(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0), (e.current = t).stateNode = e
        }

        function al(e, t, n, r, i, o) {
            var a = t.current;
            e:if (n) {
                t:{
                    if (2 !== on(n = n._reactInternalFiber) || 1 !== n.tag) throw s(Error(170));
                    var l = n;
                    do {
                        switch (l.tag) {
                            case 3:
                                l = l.stateNode.context;
                                break t;
                            case 1:
                                if (Ir(l.type)) {
                                    l = l.stateNode.__reactInternalMemoizedMergedChildContext;
                                    break t
                                }
                        }
                        l = l.return
                    } while (null !== l);
                    throw s(Error(171))
                }
                if (1 === n.tag) {
                    var u = n.type;
                    if (Ir(u)) {
                        n = Fr(n, u, l);
                        break e
                    }
                }
                n = l
            } else n = Ar;
            return null === t.context ? t.context = n : t.pendingContext = n, t = o, (i = Mi(r, i)).payload = {element: e}, null !== (t = void 0 === t ? null : t) && (i.callback = t), Pi(a, i), Ms(a, r), r
        }

        function sl(e, t, n, r) {
            var i = t.current, o = Ts(), a = Wi.suspense;
            return al(e, t, n, i = Os(o, i, a), a, r)
        }

        function ll(e) {
            if (!(e = e.current).child) return null;
            switch (e.child.tag) {
                case 5:
                default:
                    return e.child.stateNode
            }
        }

        function ul(e) {
            var t = 1073741821 - 25 * (1 + ((1073741821 - Ts() + 500) / 25 | 0));
            t <= Ns && --t, this._expirationTime = Ns = t, this._root = e, this._callbacks = this._next = null, this._hasChildren = this._didComplete = !1, this._children = null, this._defer = !0
        }

        function cl() {
            this._callbacks = null, this._didCommit = !1, this._onCommit = this._onCommit.bind(this)
        }

        function pl(e, t, n) {
            this._internalRoot = ol(e, t, n)
        }

        function dl(e, t) {
            this._internalRoot = ol(e, 2, t)
        }

        function fl(e) {
            return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
        }

        function hl(e, t, n, r, i) {
            var o = n._reactRootContainer, a = void 0;
            if (o) {
                if (a = o._internalRoot, "function" == typeof i) {
                    var s = i;
                    i = function () {
                        var e = ll(a);
                        s.call(e)
                    }
                }
                sl(t, a, e, i)
            } else {
                if (o = n._reactRootContainer = function (e, t) {
                    if (t || (t = !(!(t = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))), !t) for (var n; n = e.lastChild;) e.removeChild(n);
                    return new pl(e, 0, t)
                }(n, r), a = o._internalRoot, "function" == typeof i) {
                    var l = i;
                    i = function () {
                        var e = ll(a);
                        l.call(e)
                    }
                }
                Is(function () {
                    sl(t, a, e, i)
                })
            }
            return ll(a)
        }

        function _l(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
            if (!fl(t)) throw s(Error(200));
            return function (e, t, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                return {
                    $$typeof: Xe,
                    key: null == r ? null : "" + r,
                    children: e,
                    containerInfo: t,
                    implementation: null
                }
            }(e, t, null, n)
        }

        Ee = function (e, t, n) {
            switch (t) {
                case"input":
                    if (Ct(e, n), t = n.name, "radio" === n.type && null != t) {
                        for (n = e; n.parentNode;) n = n.parentNode;
                        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                            var r = n[t];
                            if (r !== e && r.form === e.form) {
                                var i = j(r);
                                if (!i) throw s(Error(90));
                                Ve(r), Ct(r, i)
                            }
                        }
                    }
                    break;
                case"textarea":
                    nr(e, n);
                    break;
                case"select":
                    null != (t = n.value) && Jn(e, !!n.multiple, t, !1)
            }
        }, ul.prototype.render = function (e) {
            if (!this._defer) throw s(Error(250));
            this._hasChildren = !0, this._children = e;
            var t = this._root._internalRoot, n = this._expirationTime, r = new cl;
            return al(e, t, null, n, null, r._onCommit), r
        }, ul.prototype.then = function (e) {
            if (this._didComplete) e(); else {
                var t = this._callbacks;
                null === t && (t = this._callbacks = []), t.push(e)
            }
        }, ul.prototype.commit = function () {
            var e = this._root._internalRoot, t = e.firstBatch;
            if (!this._defer || null === t) throw s(Error(251));
            if (this._hasChildren) {
                var n = this._expirationTime;
                if (t !== this) {
                    this._hasChildren && (n = this._expirationTime = t._expirationTime, this.render(this._children));
                    for (var r = null, i = t; i !== this;) i = (r = i)._next;
                    if (null === r) throw s(Error(251));
                    r._next = i._next, this._next = t, e.firstBatch = this
                }
                if (this._defer = !1, t = n, (is & (Qa | Za)) !== Xa) throw s(Error(253));
                di(js.bind(null, e, t)), fi(), t = this._next, (this._next = null) !== (t = e.firstBatch = t) && t._hasChildren && t.render(t._children)
            } else this._next = null, this._defer = !1
        }, ul.prototype._onComplete = function () {
            if (!this._didComplete) {
                this._didComplete = !0;
                var e = this._callbacks;
                if (null !== e) for (var t = 0; t < e.length; t++) (0, e[t])()
            }
        }, cl.prototype.then = function (e) {
            if (this._didCommit) e(); else {
                var t = this._callbacks;
                null === t && (t = this._callbacks = []), t.push(e)
            }
        }, cl.prototype._onCommit = function () {
            if (!this._didCommit) {
                this._didCommit = !0;
                var e = this._callbacks;
                if (null !== e) for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    if ("function" != typeof n) throw s(Error(191), n);
                    n()
                }
            }
        }, dl.prototype.render = pl.prototype.render = function (e, t) {
            var n = this._internalRoot, r = new cl;
            return null !== (t = void 0 === t ? null : t) && r.then(t), sl(e, n, null, r._onCommit), r
        }, dl.prototype.unmount = pl.prototype.unmount = function (e) {
            var t = this._internalRoot, n = new cl;
            return null !== (e = void 0 === e ? null : e) && n.then(e), sl(null, t, null, n._onCommit), n
        }, dl.prototype.createBatch = function () {
            var e = new ul(this), t = e._expirationTime, n = this._internalRoot, r = n.firstBatch;
            if (null === r) (n.firstBatch = e)._next = null; else {
                for (n = null; null !== r && r._expirationTime >= t;) r = (n = r)._next;
                e._next = r, null !== n && (n._next = e)
            }
            return e
        };
        var ml, gl, vl = {
            createPortal: _l,
            findDOMNode: function (e) {
                if (null == e) e = null; else if (1 !== e.nodeType) {
                    var t = e._reactInternalFiber;
                    if (void 0 === t) {
                        if ("function" == typeof e.render) throw s(Error(188));
                        throw s(Error(268), Object.keys(e))
                    }
                    e = null === (e = sn(t)) ? null : e.stateNode
                }
                return e
            },
            hydrate: function (e, t, n) {
                if (!fl(t)) throw s(Error(200));
                return hl(null, e, t, !0, n)
            },
            render: function (e, t, n) {
                if (!fl(t)) throw s(Error(200));
                return hl(null, e, t, !1, n)
            },
            unstable_renderSubtreeIntoContainer: function (e, t, n, r) {
                if (!fl(n)) throw s(Error(200));
                if (null == e || void 0 === e._reactInternalFiber) throw s(Error(38));
                return hl(e, t, n, !1, r)
            },
            unmountComponentAtNode: function (e) {
                if (!fl(e)) throw s(Error(40));
                return !!e._reactRootContainer && (Is(function () {
                    hl(null, null, e, !1, function () {
                        e._reactRootContainer = null
                    })
                }), !0)
            },
            unstable_createPortal: function () {
                return _l.apply(void 0, arguments)
            },
            unstable_batchedUpdates: Pe = function (e, t) {
                var n = is;
                is |= 1;
                try {
                    return e(t)
                } finally {
                    (is = n) === Xa && fi()
                }
            },
            unstable_interactiveUpdates: function (e, t, n, r) {
                return Rs(), Ds(e, t, n, r)
            },
            unstable_discreteUpdates: Le = Ds,
            unstable_flushDiscreteUpdates: Re = Rs,
            flushSync: function (e, t) {
                if ((is & (Qa | Za)) !== Xa) throw s(Error(187));
                var n = is;
                is |= 1;
                try {
                    return ci(99, e.bind(null, t))
                } finally {
                    is = n, fi()
                }
            },
            unstable_createRoot: function (e, t) {
                if (!fl(e)) throw s(Error(299), "unstable_createRoot");
                return new dl(e, null != t && !0 === t.hydrate)
            },
            unstable_createSyncRoot: function (e, t) {
                if (!fl(e)) throw s(Error(299), "unstable_createRoot");
                return new pl(e, 1, null != t && !0 === t.hydrate)
            },
            unstable_flushControlled: function (e) {
                var t = is;
                is |= 1;
                try {
                    ci(99, e)
                } finally {
                    (is = t) === Xa && fi()
                }
            },
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
                Events: [I, z, j, M.injectEventPluginsByName, f, V, function (e) {
                    E(e, B)
                }, Me, Ae, In, N, Bs, {
                    current: !(De = function (e, t) {
                        var n = is;
                        is |= 2;
                        try {
                            return e(t)
                        } finally {
                            (is = n) === Xa && fi()
                        }
                    })
                }]
            }
        };
        gl = (ml = {
            findFiberByHostInstance: D,
            bundleType: 0,
            version: "16.9.0",
            rendererPackageName: "react-dom"
        }).findFiberByHostInstance, function (e) {
            if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (!t.isDisabled && t.supportsFiber) try {
                    var n = t.inject(e);
                    qs = function (e) {
                        try {
                            t.onCommitFiberRoot(n, e, void 0, 64 == (64 & e.current.effectTag))
                        } catch (e) {
                        }
                    }, Xs = function (e) {
                        try {
                            t.onCommitFiberUnmount(n, e)
                        } catch (e) {
                        }
                    }
                } catch (e) {
                }
            }
        }(o({}, ml, {
            overrideHookState: null,
            overrideProps: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: $e.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
                return null === (e = sn(e)) ? null : e.stateNode
            },
            findFiberByHostInstance: function (e) {
                return gl ? gl(e) : null
            },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null
        }));
        var yl = vl;
        e.exports = yl.default || yl
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        var i = n(20), o = "function" == typeof Symbol && Symbol.for, a = o ? Symbol.for("react.element") : 60103,
            s = o ? Symbol.for("react.portal") : 60106, l = o ? Symbol.for("react.fragment") : 60107,
            u = o ? Symbol.for("react.strict_mode") : 60108, c = o ? Symbol.for("react.profiler") : 60114,
            p = o ? Symbol.for("react.provider") : 60109, d = o ? Symbol.for("react.context") : 60110,
            f = o ? Symbol.for("react.forward_ref") : 60112, h = o ? Symbol.for("react.suspense") : 60113,
            _ = o ? Symbol.for("react.suspense_list") : 60120, m = o ? Symbol.for("react.memo") : 60115,
            g = o ? Symbol.for("react.lazy") : 60116;
        o && Symbol.for("react.fundamental"), o && Symbol.for("react.responder");
        var v = "function" == typeof Symbol && Symbol.iterator;

        function y(e) {
            for (var t = e.message, n = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, r = 1; r < arguments.length; r++) n += "&args[]=" + encodeURIComponent(arguments[r]);
            return e.message = "Minified React error #" + t + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", e
        }

        var b = {
            isMounted: function () {
                return !1
            }, enqueueForceUpdate: function () {
            }, enqueueReplaceState: function () {
            }, enqueueSetState: function () {
            }
        }, w = {};

        function x(e, t, n) {
            this.props = e, this.context = t, this.refs = w, this.updater = n || b
        }

        function k() {
        }

        function C(e, t, n) {
            this.props = e, this.context = t, this.refs = w, this.updater = n || b
        }

        x.prototype.isReactComponent = {}, x.prototype.setState = function (e, t) {
            if ("object" !== r(e) && "function" != typeof e && null != e) throw y(Error(85));
            this.updater.enqueueSetState(this, e, t, "setState")
        }, x.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate")
        }, k.prototype = x.prototype;
        var S = C.prototype = new k;
        S.constructor = C, i(S, x.prototype), S.isPureReactComponent = !0;
        var E = {current: null}, T = {suspense: null}, O = {current: null}, N = Object.prototype.hasOwnProperty,
            M = {key: !0, ref: !0, __self: !0, __source: !0};

        function A(e, t, n) {
            var r = void 0, i = {}, o = null, s = null;
            if (null != t) for (r in void 0 !== t.ref && (s = t.ref), void 0 !== t.key && (o = "" + t.key), t) N.call(t, r) && !M.hasOwnProperty(r) && (i[r] = t[r]);
            var l = arguments.length - 2;
            if (1 === l) i.children = n; else if (1 < l) {
                for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
                i.children = u
            }
            if (e && e.defaultProps) for (r in l = e.defaultProps) void 0 === i[r] && (i[r] = l[r]);
            return {$$typeof: a, type: e, key: o, ref: s, props: i, _owner: O.current}
        }

        function P(e) {
            return "object" === r(e) && null !== e && e.$$typeof === a
        }

        var L = /\/+/g, R = [];

        function D(e, t, n, r) {
            if (R.length) {
                var i = R.pop();
                return i.result = e, i.keyPrefix = t, i.func = n, i.context = r, i.count = 0, i
            }
            return {result: e, keyPrefix: t, func: n, context: r, count: 0}
        }

        function I(e) {
            e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, R.length < 10 && R.push(e)
        }

        function z(e, t, n) {
            return null == e ? 0 : function e(t, n, i, o) {
                var l = r(t);
                "undefined" !== l && "boolean" !== l || (t = null);
                var u = !1;
                if (null === t) u = !0; else switch (l) {
                    case"string":
                    case"number":
                        u = !0;
                        break;
                    case"object":
                        switch (t.$$typeof) {
                            case a:
                            case s:
                                u = !0
                        }
                }
                if (u) return i(o, t, "" === n ? "." + j(t, 0) : n), 1;
                if (u = 0, n = "" === n ? "." : n + ":", Array.isArray(t)) for (var c = 0; c < t.length; c++) {
                    var p = n + j(l = t[c], c);
                    u += e(l, p, i, o)
                } else if ("function" == typeof (p = null === t || "object" !== r(t) ? null : "function" == typeof (p = v && t[v] || t["@@iterator"]) ? p : null)) for (t = p.call(t), c = 0; !(l = t.next()).done;) u += e(l = l.value, p = n + j(l, c++), i, o); else if ("object" === l) throw i = "" + t, y(Error(31), "[object Object]" === i ? "object with keys {" + Object.keys(t).join(", ") + "}" : i, "");
                return u
            }(e, "", t, n)
        }

        function j(e, t) {
            return "object" === r(e) && null !== e && null != e.key ? (n = e.key, i = {
                "=": "=0",
                ":": "=2"
            }, "$" + ("" + n).replace(/[=:]/g, function (e) {
                return i[e]
            })) : t.toString(36);
            var n, i
        }

        function W(e, t) {
            e.func.call(e.context, t, e.count++)
        }

        function F(e, t, n) {
            var r, i, o = e.result, s = e.keyPrefix;
            e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? H(e, o, n, function (e) {
                return e
            }) : null != e && (P(e) && (i = s + (!(r = e).key || t && t.key === e.key ? "" : ("" + e.key).replace(L, "$&/") + "/") + n, e = {
                $$typeof: a,
                type: r.type,
                key: i,
                ref: r.ref,
                props: r.props,
                _owner: r._owner
            }), o.push(e))
        }

        function H(e, t, n, r, i) {
            var o = "";
            null != n && (o = ("" + n).replace(L, "$&/") + "/"), z(e, F, t = D(t, o, r, i)), I(t)
        }

        function U() {
            var e = E.current;
            if (null === e) throw y(Error(321));
            return e
        }

        var B = {
            Children: {
                map: function (e, t, n) {
                    if (null == e) return e;
                    var r = [];
                    return H(e, r, null, t, n), r
                }, forEach: function (e, t, n) {
                    if (null == e) return e;
                    z(e, W, t = D(null, null, t, n)), I(t)
                }, count: function (e) {
                    return z(e, function () {
                        return null
                    }, null)
                }, toArray: function (e) {
                    var t = [];
                    return H(e, t, null, function (e) {
                        return e
                    }), t
                }, only: function (e) {
                    if (!P(e)) throw y(Error(143));
                    return e
                }
            },
            createRef: function () {
                return {current: null}
            },
            Component: x,
            PureComponent: C,
            createContext: function (e, t) {
                return void 0 === t && (t = null), (e = {
                    $$typeof: d,
                    _calculateChangedBits: t,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null
                }).Provider = {$$typeof: p, _context: e}, e.Consumer = e
            },
            forwardRef: function (e) {
                return {$$typeof: f, render: e}
            },
            lazy: function (e) {
                return {$$typeof: g, _ctor: e, _status: -1, _result: null}
            },
            memo: function (e, t) {
                return {$$typeof: m, type: e, compare: void 0 === t ? null : t}
            },
            useCallback: function (e, t) {
                return U().useCallback(e, t)
            },
            useContext: function (e, t) {
                return U().useContext(e, t)
            },
            useEffect: function (e, t) {
                return U().useEffect(e, t)
            },
            useImperativeHandle: function (e, t, n) {
                return U().useImperativeHandle(e, t, n)
            },
            useDebugValue: function () {
            },
            useLayoutEffect: function (e, t) {
                return U().useLayoutEffect(e, t)
            },
            useMemo: function (e, t) {
                return U().useMemo(e, t)
            },
            useReducer: function (e, t, n) {
                return U().useReducer(e, t, n)
            },
            useRef: function (e) {
                return U().useRef(e)
            },
            useState: function (e) {
                return U().useState(e)
            },
            Fragment: l,
            Profiler: c,
            StrictMode: u,
            Suspense: h,
            unstable_SuspenseList: _,
            createElement: A,
            cloneElement: function (e, t, n) {
                if (null == e) throw y(Error(267), e);
                var r = void 0, o = i({}, e.props), s = e.key, l = e.ref, u = e._owner;
                if (null != t) {
                    void 0 !== t.ref && (l = t.ref, u = O.current), void 0 !== t.key && (s = "" + t.key);
                    var c = void 0;
                    for (r in e.type && e.type.defaultProps && (c = e.type.defaultProps), t) N.call(t, r) && !M.hasOwnProperty(r) && (o[r] = void 0 === t[r] && void 0 !== c ? c[r] : t[r])
                }
                if (1 == (r = arguments.length - 2)) o.children = n; else if (1 < r) {
                    c = Array(r);
                    for (var p = 0; p < r; p++) c[p] = arguments[p + 2];
                    o.children = c
                }
                return {$$typeof: a, type: e.type, key: s, ref: l, props: o, _owner: u}
            },
            createFactory: function (e) {
                var t = A.bind(null, e);
                return t.type = e, t
            },
            isValidElement: P,
            version: "16.9.0",
            unstable_withSuspenseConfig: function (e, t) {
                var n = T.suspense;
                T.suspense = void 0 === t ? null : t;
                try {
                    e()
                } finally {
                    T.suspense = n
                }
            },
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
                ReactCurrentDispatcher: E,
                ReactCurrentBatchConfig: T,
                ReactCurrentOwner: O,
                IsSomeRendererActing: {current: !1},
                assign: i
            }
        };
        e.exports = B.default || B
    }, function (e, t, n) {
        "use strict";
        e.exports = n(29)
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = void 0, o = void 0, a = void 0, s = void 0, l = void 0;
        if (t.unstable_now = void 0, t.unstable_forceFrameRate = void 0, "undefined" == typeof window || "function" != typeof MessageChannel) {
            var u = null, c = null, p = function e() {
                if (null !== u) try {
                    var n = t.unstable_now();
                    u(!0, n), u = null
                } catch (n) {
                    throw setTimeout(e, 0), n
                }
            };
            t.unstable_now = function () {
                return Date.now()
            }, i = function (e) {
                null !== u ? setTimeout(i, 0, e) : (u = e, setTimeout(p, 0))
            }, o = function (e, t) {
                c = setTimeout(e, t)
            }, a = function () {
                clearTimeout(c)
            }, s = function () {
                return !1
            }, l = t.unstable_forceFrameRate = function () {
            }
        } else {
            var d = window.performance, f = window.Date, h = window.setTimeout, _ = window.clearTimeout,
                m = window.requestAnimationFrame, g = window.cancelAnimationFrame;
            "undefined" != typeof console && ("function" != typeof m && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" != typeof g && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")), t.unstable_now = "object" === r(d) && "function" == typeof d.now ? function () {
                return d.now()
            } : function () {
                return f.now()
            };
            var v = !1, y = null, b = -1, w = -1, x = 33.33, k = -1, C = -1, S = 0, E = !1;
            s = function () {
                return t.unstable_now() >= S
            }, l = function () {
            }, t.unstable_forceFrameRate = function (e) {
                e < 0 || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : E = 0 < e ? (x = Math.floor(1e3 / e), !0) : !(x = 33.33)
            };
            var T = function () {
                if (null !== y) {
                    var e = t.unstable_now(), n = 0 < S - e;
                    try {
                        y(n, e) || (y = null)
                    } catch (e) {
                        throw N.postMessage(null), e
                    }
                }
            }, O = new MessageChannel, N = O.port2;
            O.port1.onmessage = T, i = function (e) {
                y = e, v || (v = !0, m(function (e) {
                    !function e(n) {
                        if (null === y) C = k = -1, v = !1; else {
                            if (v = !0, m(function (t) {
                                _(b), e(t)
                            }), b = h(function e() {
                                S = t.unstable_now() + x / 2, T(), b = h(e, 3 * x)
                            }, 3 * x), -1 !== k && .1 < n - k) {
                                var r = n - k;
                                !E && -1 !== C && r < x && C < x && (x = r < C ? C : r) < 8.33 && (x = 8.33), C = r
                            }
                            S = (k = n) + x, N.postMessage(null)
                        }
                    }(e)
                }))
            }, o = function (e, n) {
                w = h(function () {
                    e(t.unstable_now())
                }, n)
            }, a = function () {
                _(w), w = -1
            }
        }
        var M = null, A = null, P = null, L = 3, R = !1, D = !1, I = !1;

        function z(e, t) {
            var n = e.next;
            if (n === e) M = null; else {
                e === M && (M = n);
                var r = e.previous;
                (r.next = n).previous = r
            }
            e.next = e.previous = null, n = e.callback, r = L;
            var i = P;
            L = e.priorityLevel, P = e;
            try {
                var o = e.expirationTime <= t;
                switch (L) {
                    case 1:
                        var a = n(o);
                        break;
                    case 2:
                    case 3:
                    case 4:
                        a = n(o);
                        break;
                    case 5:
                        a = n(o)
                }
            } catch (e) {
                throw e
            } finally {
                L = r, P = i
            }
            if ("function" == typeof a) if (t = e.expirationTime, e.callback = a, null === M) M = e.next = e.previous = e; else {
                a = null, o = M;
                do {
                    if (t <= o.expirationTime) {
                        a = o;
                        break
                    }
                    o = o.next
                } while (o !== M);
                null === a ? a = M : a === M && (M = e), (t = a.previous).next = a.previous = e, e.next = a, e.previous = t
            }
        }

        function j(e) {
            if (null !== A && A.startTime <= e) do {
                var t = A, n = t.next;
                if (t === n) A = null; else {
                    A = n;
                    var r = t.previous;
                    (r.next = n).previous = r
                }
                t.next = t.previous = null, U(t, t.expirationTime)
            } while (null !== A && A.startTime <= e)
        }

        function W(e) {
            I = !1, j(e), D || (null !== M ? (D = !0, i(F)) : null !== A && o(W, A.startTime - e))
        }

        function F(e, n) {
            D = !1, I && (I = !1, a()), j(n), R = !0;
            try {
                if (e) {
                    if (null !== M) for (; z(M, n), j(n = t.unstable_now()), null !== M && !s();) ;
                } else for (; null !== M && M.expirationTime <= n;) z(M, n), j(n = t.unstable_now());
                return null !== M || (null !== A && o(W, A.startTime - n), !1)
            } finally {
                R = !1
            }
        }

        function H(e) {
            switch (e) {
                case 1:
                    return -1;
                case 2:
                    return 250;
                case 5:
                    return 1073741823;
                case 4:
                    return 1e4;
                default:
                    return 5e3
            }
        }

        function U(e, t) {
            if (null === M) M = e.next = e.previous = e; else {
                var n = null, r = M;
                do {
                    if (t < r.expirationTime) {
                        n = r;
                        break
                    }
                    r = r.next
                } while (r !== M);
                null === n ? n = M : n === M && (M = e), (t = n.previous).next = n.previous = e, e.next = n, e.previous = t
            }
        }

        var B = l;
        t.unstable_ImmediatePriority = 1, t.unstable_UserBlockingPriority = 2, t.unstable_NormalPriority = 3, t.unstable_IdlePriority = 5, t.unstable_LowPriority = 4, t.unstable_runWithPriority = function (e, t) {
            switch (e) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    e = 3
            }
            var n = L;
            L = e;
            try {
                return t()
            } finally {
                L = n
            }
        }, t.unstable_next = function (e) {
            switch (L) {
                case 1:
                case 2:
                case 3:
                    var t = 3;
                    break;
                default:
                    t = L
            }
            var n = L;
            L = t;
            try {
                return e()
            } finally {
                L = n
            }
        }, t.unstable_scheduleCallback = function (e, n, s) {
            var l = t.unstable_now();
            if ("object" === r(s) && null !== s) {
                var u = s.delay;
                u = "number" == typeof u && 0 < u ? l + u : l, s = "number" == typeof s.timeout ? s.timeout : H(e)
            } else s = H(e), u = l;
            if (e = {
                callback: n,
                priorityLevel: e,
                startTime: u,
                expirationTime: s = u + s,
                next: null,
                previous: null
            }, l < u) {
                if (s = u, null === A) A = e.next = e.previous = e; else {
                    n = null;
                    var c = A;
                    do {
                        if (s < c.startTime) {
                            n = c;
                            break
                        }
                        c = c.next
                    } while (c !== A);
                    null === n ? n = A : n === A && (A = e), (s = n.previous).next = n.previous = e, e.next = n, e.previous = s
                }
                null === M && A === e && (I ? a() : I = !0, o(W, u - l))
            } else U(e, s), D || R || (D = !0, i(F));
            return e
        }, t.unstable_cancelCallback = function (e) {
            var t = e.next;
            if (null !== t) {
                if (e === t) e === M ? M = null : e === A && (A = null); else {
                    e === M ? M = t : e === A && (A = t);
                    var n = e.previous;
                    (n.next = t).previous = n
                }
                e.next = e.previous = null
            }
        }, t.unstable_wrapCallback = function (e) {
            var t = L;
            return function () {
                var n = L;
                L = t;
                try {
                    return e.apply(this, arguments)
                } finally {
                    L = n
                }
            }
        }, t.unstable_getCurrentPriorityLevel = function () {
            return L
        }, t.unstable_shouldYield = function () {
            var e = t.unstable_now();
            return j(e), null !== P && null !== M && M.startTime <= e && M.expirationTime < P.expirationTime || s()
        }, t.unstable_requestPaint = B, t.unstable_continueExecution = function () {
            D || R || (D = !0, i(F))
        }, t.unstable_pauseExecution = function () {
        }, t.unstable_getFirstCallbackNode = function () {
            return M
        }
    }, function (e, t, n) {
        var r = n(31);
        "string" == typeof r && (r = [[e.i, r, ""]]);
        n(2)(r, {
            attrs: {"data-js": "kit"},
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        }), r.locals && (e.exports = r.locals)
    }, function (e, t, n) {
        (e.exports = n(1)(!1)).push([e.i, ".n1ed-title-with-image--both{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.n1ed-title-with-image--both.n1ed-title-with-image--both--hor{flex-direction:row;align-items:center}.n1ed-title-with-image--both.n1ed-title-with-image--both--hor .n1ed-title-with-image--title-only{margin:0 0 0 10px}.n1ed-title-with-image--both>.n1ed-title-with-image--title-only{margin-top:-3px;margin-bottom:5px}\n", ""])
    }, , , function (e, t, n) {
        "use strict";
        var r, i = this && this.__extends || (r = function (e, t) {
            return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
        }, function (e, t) {
            function n() {
                this.constructor = e
            }

            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        });
        Object.defineProperty(t, "__esModule", {value: !0});
        var o = n(0);
        n(39);
        var a = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }

            return i(t, e), t.prototype.render = function () {
                return o.createElement("div", {className: "n1ed-waiting"}, o.createElement("div", {dangerouslySetInnerHTML: {__html: n(41)}}), this.props.title && o.createElement("div", null, this.props.title))
            }, t
        }(o.Component);
        t.N1EDWaiting = a
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = function () {
            function e() {
            }

            return e.prototype.getName = function () {
                return "FeatureZIndexManager"
            }, e.prototype.init = function () {
                var e = this;
                window.zIndexManager || (window.zIndexManager = {
                    minZIndex: 2e5,
                    usedZIndexes: [],
                    getNextZIndex: function (t) {
                        return void 0 === t && (t = null), e.getNextZIndex(t)
                    },
                    reserveZIndex: function (t) {
                        return void 0 === t && (t = null), e.reserveZIndex(t)
                    },
                    unReserveZIndex: function (t) {
                        return void 0 === t && (t = null), e.unReserveZIndex(t)
                    }
                })
            }, e.prototype.getMaxZIndexOnPage = function () {
                for (var e = 0, t = document.body.getElementsByTagName("*"), n = 0; n < t.length; n++) if (t[n].style) {
                    var r = t[n].style.zIndex;
                    null != r && e < +r && 2e9 != +r && (e = +r)
                }
                return e
            }, e.prototype.getNextZIndex = function (e) {
                void 0 === e && (e = null);
                var t = 0,
                    n = (e = null == e ? window.zIndexManager.minZIndex : Math.max(e, window.zIndexManager.minZIndex)) - 1;
                0 < window.zIndexManager.usedZIndexes.length && (n = window.zIndexManager.usedZIndexes[window.zIndexManager.usedZIndexes.length - 1]), t = n + 1;
                var r = this.getMaxZIndexOnPage();
                return t <= r && (t = r + 1), t
            }, e.prototype.reserveZIndex = function (e) {
                return void 0 === e && (e = null), null == e && (e = this.getNextZIndex()), window.zIndexManager.usedZIndexes.push(e), e
            }, e.prototype.unReserveZIndex = function (e) {
                var t = window.zIndexManager.usedZIndexes.indexOf(e);
                -1 < t && window.zIndexManager.usedZIndexes.splice(t, 1)
            }, e
        }();
        t.FeatureZIndexManager = r
    }, , function (e, t, n) {
        var r = n(38);
        "string" == typeof r && (r = [[e.i, r, ""]]);
        n(2)(r, {
            attrs: {"data-js": "kit"},
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        }), r.locals && (e.exports = r.locals)
    }, function (e, t, n) {
        (e.exports = n(1)(!1)).push([e.i, ".n1ed-button{border:2px solid #999;background-color:white;color:#333;font-size:18px;font-weight:bold;cursor:pointer;box-sizing:border-box;padding:10px 20px;white-space:nowrap;display:inline-flex;justify-content:center;align-items:center}.n1ed-button .n1ed-waiting{margin-right:10px}.n1ed-button:hover,.n1ed-button:focus{border-color:#007FFF;outline:none;color:#2f95ff}.n1ed-button:hover .n1ed-waiting path,.n1ed-button:focus .n1ed-waiting path{fill:white}.n1ed-button.n1ed-button--primary{background-color:#007FFF;border-color:#007FFF;color:white}.n1ed-button.n1ed-button--primary:hover{background-color:#2f95ff;border-color:#2f95ff;color:white}.n1ed-button.n1ed-button--primary .n1ed-waiting path{fill:white}.n1ed-button.n1ed-button--success{background-color:#00da16;border-color:#00da16;color:white}.n1ed-button.n1ed-button--success:hover{background-color:#00ef16;border-color:#00ef16;color:white}.n1ed-button.n1ed-button--success .n1ed-waiting path{fill:white}.n1ed-button.n1ed-button--link{border-color:transparent;color:#2f95ff}.n1ed-button.n1ed-button--link img{-webkit-filter:invert(100%) brightness(0.4) sepia(100%) saturate(4000%) hue-rotate(195deg);filter:invert(100%) brightness(0.4) sepia(100%) saturate(4000%) hue-rotate(195deg)}.n1ed-button.n1ed-button--link:hover{text-decoration:underline}.n1ed-button.n1ed-button--link-danger{border-color:transparent;color:#ff8080}.n1ed-button.n1ed-button--link-danger:hover{color:red;text-decoration:underline}.n1ed-button.n1ed-button--link-danger .n1ed-waiting path{fill:white}.n1ed-button[disabled]{opacity:0.42;pointer-events:none}a.n1ed-button{display:flex;justify-content:center;align-items:center;text-decoration:none;line-height:18px}a.n1ed-button img{margin-right:10px}a.n1ed-button.n1ed-button--primary img{outline:none;-webkit-filter:invert(1);filter:invert(1)}a.n1ed-button.n1ed-button--disabled{opacity:0.42;pointer-events:none}\n", ""])
    }, function (e, t, n) {
        var r = n(40);
        "string" == typeof r && (r = [[e.i, r, ""]]);
        n(2)(r, {
            attrs: {"data-js": "kit"},
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        }), r.locals && (e.exports = r.locals)
    }, function (e, t, n) {
        (e.exports = n(1)(!1)).push([e.i, ".n1ed-waiting{display:flex;justify-content:center;align-items:center;flex-direction:column}.n1ed-waiting svg{width:16px;height:16px}.n1ed-waiting svg path{fill:#007FFF}\n", ""])
    }, function (e, t) {
        e.exports = '<svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" viewBox="0 0 128 128" xml:space="preserve"><g><path d="M75.4 126.63a11.43 11.43 0 0 1-2.1-22.65 40.9 40.9 0 0 0 30.5-30.6 11.4 11.4 0 1 1 22.27 4.87h.02a63.77 63.77 0 0 1-47.8 48.05v-.02a11.38 11.38 0 0 1-2.93.37z" fill="#000"></path><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="800ms" repeatCount="indefinite"></animateTransform></g></svg>'
    }, function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAQBJREFUOI3N07FKA0EQxvGfmrQ+hYIa7YT0FhZWBgQDPoAvIdj4HNbaWEQsREEsbbWxkTyErXIW2YXLuuvd2egHy9zOzfx3dm6O/66FZD/GIOP/xCm2cJjh3OExdY5RFdZHQ8xJhPRqwEGwe5gmh1XB3mAdfZxjO62qDozXnOI1cy14xxsuA+wJw3rAYiGxpH6AjYI9TgO6AFPYkdnHKurMrFdrBdhVeH+BpeBfxkEhpwgswaJ6vo9ZEdgE25SMzU897NyzJuAO9rvAmJ/DVLfYxUNbWBMQ7tuCcsD4e622OChqJcmdS3wJdtK1KjzHh3R+RtjI+EuqAuz6F0X8kb4AJSA+tn+6hcsAAAAASUVORK5CYII="
    }, function (e, t, n) {
        var r = n(44);
        "string" == typeof r && (r = [[e.i, r, ""]]);
        n(2)(r, {
            attrs: {"data-js": "kit"},
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        }), r.locals && (e.exports = r.locals)
    }, function (e, t, n) {
        (e.exports = n(1)(!1)).push([e.i, ".n1ed-dlg{display:none;background-color:rgba(0,0,0,0.42);position:fixed;top:0;left:0;width:100vw;height:100vh;overflow:hidden}.n1ed-dlg.n1ed-dlg--visible{display:flex;justify-content:center;align-items:center}.n1ed-dlg>.n1ed-dlg__content{overflow-y:auto;border:2px solid #007FFF;background-color:white}.n1ed-dlg>.n1ed-dlg__content.n1ed-dlg__content--no-content-scroll{overflow:hidden}.n1ed-dlg>.n1ed-dlg__content.n1ed-dlg__content--message{min-width:260px}.n1ed-dlg>.n1ed-dlg__content.n1ed-dlg__content--message .n1ed-dlg__content__title{font-size:24px;font-weight:bold}.n1ed-dlg>.n1ed-dlg__content.n1ed-dlg__content--message .n1ed-dlg__content__message{margin-top:10px}.n1ed-dlg>.n1ed-dlg__content.n1ed-dlg__content--message .n1ed-button{margin-top:30px}.n1ed-dlg>.n1ed-dlg__content.n1ed-dlg__content--message-error{border-color:#ffc688}.n1ed-dlg-bg{background-color:rgba(0,0,0,0.42)}\n", ""])
    }, function (e, t, n) {
        var r = n(58);
        "string" == typeof r && (r = [[e.i, r, ""]]);
        n(2)(r, {
            attrs: {"data-js": "kit"},
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        }), r.locals && (e.exports = r.locals)
    }, , , , , , , , , , function (e, t) {
        e.exports = function (e) {
            return e.webpackPolyfill || (e.deprecate = function () {
            }, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function () {
                    return e.l
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0, get: function () {
                    return e.i
                }
            }), e.webpackPolyfill = 1), e
        }
    }, , , function (e, t, n) {
        (e.exports = n(1)(!1)).push([e.i, ".n1ed-textfield{font-size:18px;padding:10px;box-sizing:border-box;border:2px solid #ccc;background-color:white}.n1ed-textfield[disabled]{background-color:white;opacity:0.5}.n1ed-textfield:focus{outline:none}.n1ed-textfield:focus:not([readonly]):not([disabled]){border-color:#007FFF}.n1ed-textfield--url{display:flex}.n1ed-textfield--url input{flex:1 1 auto;border-right-color:white}.n1ed-textfield--url button{flex:1 1 auto}\n", ""])
    }, , , , , function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, "createStore", function () {
            return s
        }), n.d(t, "combineReducers", function () {
            return l
        }), n.d(t, "bindActionCreators", function () {
            return c
        }), n.d(t, "applyMiddleware", function () {
            return d
        }), n.d(t, "compose", function () {
            return p
        }), n.d(t, "__DO_NOT_USE__ActionTypes", function () {
            return a
        });
        var r = n(73);

        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        var o = function () {
            return Math.random().toString(36).substring(7).split("").join(".")
        }, a = {
            INIT: "@@redux/INIT" + o(), REPLACE: "@@redux/REPLACE" + o(), PROBE_UNKNOWN_ACTION: function () {
                return "@@redux/PROBE_UNKNOWN_ACTION" + o()
            }
        };

        function s(e, t, n) {
            var o;
            if ("function" == typeof t && "function" == typeof n || "function" == typeof n && "function" == typeof arguments[3]) throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function");
            if ("function" == typeof t && void 0 === n && (n = t, t = void 0), void 0 !== n) {
                if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
                return n(s)(e, t)
            }
            if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
            var l = e, u = t, c = [], p = c, d = !1;

            function f() {
                p === c && (p = c.slice())
            }

            function h() {
                if (d) throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
                return u
            }

            function _(e) {
                if ("function" != typeof e) throw new Error("Expected the listener to be a function.");
                if (d) throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
                var t = !0;
                return f(), p.push(e), function () {
                    if (t) {
                        if (d) throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
                        t = !1, f();
                        var n = p.indexOf(e);
                        p.splice(n, 1)
                    }
                }
            }

            function m(e) {
                if (!function (e) {
                    if ("object" !== i(e) || null === e) return !1;
                    for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
                    return Object.getPrototypeOf(e) === t
                }(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (void 0 === e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (d) throw new Error("Reducers may not dispatch actions.");
                try {
                    d = !0, u = l(u, e)
                } finally {
                    d = !1
                }
                for (var t = c = p, n = 0; n < t.length; n++) (0, t[n])();
                return e
            }

            return m({type: a.INIT}), (o = {
                dispatch: m, subscribe: _, getState: h, replaceReducer: function (e) {
                    if ("function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
                    l = e, m({type: a.REPLACE})
                }
            })[r.a] = function () {
                var e, t = _;
                return (e = {
                    subscribe: function (e) {
                        if ("object" !== i(e) || null === e) throw new TypeError("Expected the observer to be an object.");

                        function n() {
                            e.next && e.next(h())
                        }

                        return n(), {unsubscribe: t(n)}
                    }
                })[r.a] = function () {
                    return this
                }, e
            }, o
        }

        function l(e) {
            for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
                var i = t[r];
                "function" == typeof e[i] && (n[i] = e[i])
            }
            var o, s, l = Object.keys(n);
            try {
                s = n, Object.keys(s).forEach(function (e) {
                    var t = s[e];
                    if (void 0 === t(void 0, {type: a.INIT})) throw new Error('Reducer "' + e + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
                    if (void 0 === t(void 0, {type: a.PROBE_UNKNOWN_ACTION()})) throw new Error('Reducer "' + e + "\" returned undefined when probed with a random type. Don't try to handle " + a.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')
                })
            } catch (e) {
                o = e
            }
            return function (e, t) {
                if (void 0 === e && (e = {}), o) throw o;
                for (var r, i, a, s = !1, u = {}, c = 0; c < l.length; c++) {
                    var p = l[c], d = n[p], f = e[p], h = d(f, t);
                    if (void 0 === h) {
                        var _ = (r = p, "Given " + ((a = (i = t) && i.type) && 'action "' + String(a) + '"' || "an action") + ', reducer "' + r + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.');
                        throw new Error(_)
                    }
                    u[p] = h, s = s || h !== f
                }
                return s ? u : e
            }
        }

        function u(e, t) {
            return function () {
                return t(e.apply(this, arguments))
            }
        }

        function c(e, t) {
            if ("function" == typeof e) return u(e, t);
            if ("object" !== i(e) || null === e) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === e ? "null" : i(e)) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var n = Object.keys(e), r = {}, o = 0; o < n.length; o++) {
                var a = n[o], s = e[a];
                "function" == typeof s && (r[a] = u(s, t))
            }
            return r
        }

        function p() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return 0 === t.length ? function (e) {
                return e
            } : 1 === t.length ? t[0] : t.reduce(function (e, t) {
                return function () {
                    return e(t.apply(void 0, arguments))
                }
            })
        }

        function d() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return function (e) {
                return function () {
                    var n = e.apply(void 0, arguments), r = function () {
                        throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")
                    }, i = {
                        getState: n.getState, dispatch: function () {
                            return r.apply(void 0, arguments)
                        }
                    }, o = t.map(function (e) {
                        return e(i)
                    });
                    return function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), r.forEach(function (t) {
                                var r, i, o;
                                r = e, o = n[i = t], i in r ? Object.defineProperty(r, i, {
                                    value: o,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : r[i] = o
                            })
                        }
                        return e
                    }({}, n, {dispatch: r = p.apply(void 0, o)(n.dispatch)})
                }
            }
        }
    }, , , , , , , , , function (e, t, n) {
        "use strict";
        e.exports = n(146)
    }, function (e, t, n) {
        "use strict";
        (function (e, r) {
            var i, o = n(110);
            i = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== e ? e : r;
            var a = Object(o.a)(i);
            t.a = a
        }).call(this, n(4), n(143)(e))
    }, function (e, t, n) {
        "use strict";
        var r = n(72), i = {
                childContextTypes: !0,
                contextType: !0,
                contextTypes: !0,
                defaultProps: !0,
                displayName: !0,
                getDefaultProps: !0,
                getDerivedStateFromError: !0,
                getDerivedStateFromProps: !0,
                mixins: !0,
                propTypes: !0,
                type: !0
            }, o = {name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0},
            a = {$$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0}, s = {};

        function l(e) {
            return r.isMemo(e) ? a : s[e.$$typeof] || i
        }

        s[r.ForwardRef] = {$$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0};
        var u = Object.defineProperty, c = Object.getOwnPropertyNames, p = Object.getOwnPropertySymbols,
            d = Object.getOwnPropertyDescriptor, f = Object.getPrototypeOf, h = Object.prototype;
        e.exports = function e(t, n, r) {
            if ("string" == typeof n) return t;
            if (h) {
                var i = f(n);
                i && i !== h && e(t, i, r)
            }
            var a = c(n);
            p && (a = a.concat(p(n)));
            for (var s = l(t), _ = l(n), m = 0; m < a.length; ++m) {
                var g = a[m];
                if (!(o[g] || r && r[g] || _ && _[g] || s && s[g])) {
                    var v = d(n, g);
                    try {
                        u(t, g, v)
                    } catch (e) {
                    }
                }
            }
            return t
        }
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t
        }

        n.r(t);
        var i = n(0), o = n.n(i), a = n(6), s = n.n(a), l = o.a.createContext(null), u = function (e) {
            function t(t) {
                var n;
                n = e.call(this, t) || this;
                var r = t.store;
                return n.state = {storeState: r.getState(), store: r}, n
            }

            r(t, e);
            var n = t.prototype;
            return n.componentDidMount = function () {
                this._isMounted = !0, this.subscribe()
            }, n.componentWillUnmount = function () {
                this.unsubscribe && this.unsubscribe(), this._isMounted = !1
            }, n.componentDidUpdate = function (e) {
                this.props.store !== e.store && (this.unsubscribe && this.unsubscribe(), this.subscribe())
            }, n.subscribe = function () {
                var e = this, t = this.props.store;
                this.unsubscribe = t.subscribe(function () {
                    var n = t.getState();
                    e._isMounted && e.setState(function (e) {
                        return e.storeState === n ? null : {storeState: n}
                    })
                });
                var n = t.getState();
                n !== this.state.storeState && this.setState({storeState: n})
            }, n.render = function () {
                var e = this.props.context || l;
                return o.a.createElement(e.Provider, {value: this.state}, this.props.children)
            }, t
        }(i.Component);
        u.propTypes = {
            store: s.a.shape({
                subscribe: s.a.func.isRequired,
                dispatch: s.a.func.isRequired,
                getState: s.a.func.isRequired
            }), context: s.a.object, children: s.a.any
        };
        var c = u;

        function p() {
            return (p = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function d(e, t) {
            if (null == e) return {};
            var n, r, i = {}, o = Object.keys(e);
            for (r = 0; r < o.length; r++) n = o[r], 0 <= t.indexOf(n) || (i[n] = e[n]);
            return i
        }

        var f = n(74), h = n.n(f), _ = n(23), m = n.n(_), g = n(72);

        function v(e, t) {
            void 0 === t && (t = {});
            var n = t, a = n.getDisplayName, s = void 0 === a ? function (e) {
                    return "ConnectAdvanced(" + e + ")"
                } : a, u = n.methodName, c = void 0 === u ? "connectAdvanced" : u, f = n.renderCountProp,
                _ = void 0 === f ? void 0 : f, v = n.shouldHandleStateChanges, y = void 0 === v || v, b = n.storeKey,
                w = void 0 === b ? "store" : b, x = n.withRef, k = void 0 !== x && x, C = n.forwardRef,
                S = void 0 !== C && C, E = n.context, T = void 0 === E ? l : E,
                O = d(n, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]);
            m()(void 0 === _, "renderCountProp is removed. render counting is built into the latest React dev tools profiling extension"), m()(!k, "withRef is removed. To access the wrapped instance, use a ref on the connected component");
            var N = "To use a custom Redux store for specific components,  create a custom React context with React.createContext(), and pass the context object to React Redux's Provider and specific components like:  <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. You may also pass a {context : MyContext} option to connect";
            m()("store" === w, "storeKey has been removed and does not do anything. " + N);
            var M = T;
            return function (t) {
                var n = t.displayName || t.name || "Component", a = s(n), l = p({}, O, {
                    getDisplayName: s,
                    methodName: c,
                    renderCountProp: _,
                    shouldHandleStateChanges: y,
                    storeKey: w,
                    displayName: a,
                    wrappedComponentName: n,
                    WrappedComponent: t
                }), u = O.pure, d = i.Component;
                u && (d = i.PureComponent);
                var f = function (n) {
                    function i(t) {
                        var r, i, a, s, l, c, d, f, h, _, g;
                        return r = n.call(this, t) || this, m()(S ? !t.wrapperProps[w] : !t[w], "Passing redux store in props has been removed and does not do anything. " + N), r.selectDerivedProps = function (t, n, r, o) {
                            if (u && i === n && a === t) return s;
                            r === l && c === o || (c = o, d = e((l = r).dispatch, o));
                            var p = d(a = t, i = n);
                            return s = p
                        }, r.selectChildElement = function (e, t, n) {
                            return t === f && n === h && g === e || (f = t, h = n, g = e, _ = o.a.createElement(e, p({}, t, {ref: n}))), _
                        }, r.indirectRenderWrappedComponent = r.indirectRenderWrappedComponent.bind(function (e) {
                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(r)), r
                    }

                    r(i, n);
                    var s = i.prototype;
                    return s.indirectRenderWrappedComponent = function (e) {
                        return this.renderWrappedComponent(e)
                    }, s.renderWrappedComponent = function (e) {
                        m()(e, 'Could not find "store" in the context of "' + a + '". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ' + a + " in connect options.");
                        var n, r = e.storeState, i = e.store, o = this.props;
                        S && (o = this.props.wrapperProps, n = this.props.forwardedRef);
                        var s = this.selectDerivedProps(r, o, i, l);
                        return this.selectChildElement(t, s, n)
                    }, s.render = function () {
                        var e = this.props.context && this.props.context.Consumer && Object(g.isContextConsumer)(o.a.createElement(this.props.context.Consumer, null)) ? this.props.context : M;
                        return o.a.createElement(e.Consumer, null, this.indirectRenderWrappedComponent)
                    }, i
                }(d);
                if (f.WrappedComponent = t, f.displayName = a, S) {
                    var v = o.a.forwardRef(function (e, t) {
                        return o.a.createElement(f, {wrapperProps: e, forwardedRef: t})
                    });
                    return v.displayName = a, v.WrappedComponent = t, h()(v, t)
                }
                return h()(f, t)
            }
        }

        function y(e) {
            return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        var b = Object.prototype.hasOwnProperty;

        function w(e, t) {
            return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
        }

        function x(e, t) {
            if (w(e, t)) return !0;
            if ("object" !== y(e) || null === e || "object" !== y(t) || null === t) return !1;
            var n = Object.keys(e), r = Object.keys(t);
            if (n.length !== r.length) return !1;
            for (var i = 0; i < n.length; i++) if (!b.call(t, n[i]) || !w(e[n[i]], t[n[i]])) return !1;
            return !0
        }

        var k = n(63);

        function C(e) {
            return function (t, n) {
                var r = e(t, n);

                function i() {
                    return r
                }

                return i.dependsOnOwnProps = !1, i
            }
        }

        function S(e) {
            return null !== e.dependsOnOwnProps && void 0 !== e.dependsOnOwnProps ? Boolean(e.dependsOnOwnProps) : 1 !== e.length
        }

        function E(e, t) {
            return function (t, n) {
                n.displayName;
                var r = function (e, t) {
                    return r.dependsOnOwnProps ? r.mapToProps(e, t) : r.mapToProps(e)
                };
                return r.dependsOnOwnProps = !0, r.mapToProps = function (t, n) {
                    r.mapToProps = e, r.dependsOnOwnProps = S(e);
                    var i = r(t, n);
                    return "function" == typeof i && (r.mapToProps = i, r.dependsOnOwnProps = S(i), i = r(t, n)), i
                }, r
            }
        }

        function T(e) {
            return (T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function O(e, t, n) {
            return p({}, n, e, t)
        }

        function N(e, t, n, r, i) {
            var o, a, s, l, u, c = i.areStatesEqual, p = i.areOwnPropsEqual, d = i.areStatePropsEqual, f = !1;
            return function (i, h) {
                return f ? function (i, f) {
                    var h, _, m = !p(f, a), g = !c(i, o);
                    return o = i, a = f, m && g ? (s = e(o, a), t.dependsOnOwnProps && (l = t(r, a)), u = n(s, l, a)) : m ? (e.dependsOnOwnProps && (s = e(o, a)), t.dependsOnOwnProps && (l = t(r, a)), u = n(s, l, a)) : (g && (h = e(o, a), _ = !d(h, s), s = h, _ && (u = n(s, l, a))), u)
                }(i, h) : (s = e(o = i, a = h), l = t(r, a), u = n(s, l, a), f = !0, u)
            }
        }

        function M(e) {
            return (M = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function A(e, t, n) {
            for (var r = t.length - 1; 0 <= r; r--) {
                var i = t[r](e);
                if (i) return i
            }
            return function (t, r) {
                throw new Error("Invalid value of type " + M(e) + " for " + n + " argument when connecting component " + r.wrappedComponentName + ".")
            }
        }

        function P(e, t) {
            return e === t
        }

        var L, R, D, I, z, j, W, F, H, U, B,
            V = (R = (L = {}).connectHOC, D = void 0 === R ? v : R, z = void 0 === (I = L.mapStateToPropsFactories) ? [function (e) {
                return "function" == typeof e ? E(e) : void 0
            }, function (e) {
                return e ? void 0 : C(function () {
                    return {}
                })
            }] : I, W = void 0 === (j = L.mapDispatchToPropsFactories) ? [function (e) {
                return "function" == typeof e ? E(e) : void 0
            }, function (e) {
                return e ? void 0 : C(function (e) {
                    return {dispatch: e}
                })
            }, function (e) {
                return e && "object" === T(e) ? C(function (t) {
                    return Object(k.bindActionCreators)(e, t)
                }) : void 0
            }] : j, H = void 0 === (F = L.mergePropsFactories) ? [function (e) {
                return "function" == typeof e ? (t = e, function (e, n) {
                    n.displayName;
                    var r, i = n.pure, o = n.areMergedPropsEqual, a = !1;
                    return function (e, n, s) {
                        var l = t(e, n, s);
                        return a ? i && o(l, r) || (r = l) : (a = !0, r = l), r
                    }
                }) : void 0;
                var t
            }, function (e) {
                return e ? void 0 : function () {
                    return O
                }
            }] : F, B = void 0 === (U = L.selectorFactory) ? function (e, t) {
                var n = t.initMapStateToProps, r = t.initMapDispatchToProps, i = t.initMergeProps,
                    o = d(t, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]), a = n(e, o),
                    s = r(e, o), l = i(e, o);
                return (o.pure ? N : function (e, t, n, r) {
                    return function (i, o) {
                        return n(e(i, o), t(r, o), o)
                    }
                })(a, s, l, e, o)
            } : U, function (e, t, n, r) {
                void 0 === r && (r = {});
                var i = r, o = i.pure, a = void 0 === o || o, s = i.areStatesEqual, l = void 0 === s ? P : s,
                    u = i.areOwnPropsEqual, c = void 0 === u ? x : u, f = i.areStatePropsEqual,
                    h = void 0 === f ? x : f, _ = i.areMergedPropsEqual, m = void 0 === _ ? x : _,
                    g = d(i, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]),
                    v = A(e, z, "mapStateToProps"), y = A(t, W, "mapDispatchToProps"), b = A(n, H, "mergeProps");
                return D(B, p({
                    methodName: "connect",
                    getDisplayName: function (e) {
                        return "Connect(" + e + ")"
                    },
                    shouldHandleStateChanges: Boolean(e),
                    initMapStateToProps: v,
                    initMapDispatchToProps: y,
                    initMergeProps: b,
                    pure: a,
                    areStatesEqual: l,
                    areOwnPropsEqual: c,
                    areStatePropsEqual: h,
                    areMergedPropsEqual: m
                }, g))
            });
        n.d(t, "Provider", function () {
            return c
        }), n.d(t, "connectAdvanced", function () {
            return v
        }), n.d(t, "ReactReduxContext", function () {
            return l
        }), n.d(t, "connect", function () {
            return V
        })
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
        "use strict";

        function r(e) {
            var t, n = e.Symbol;
            return "function" == typeof n ? n.observable ? t = n.observable : (t = n("observable"), n.observable = t) : t = "@@observable", t
        }

        n.d(t, "a", function () {
            return r
        })
    }, , , , , function (e, t, n) {
        "use strict";
        var r = n(116);

        function i() {
        }

        function o() {
        }

        o.resetWarningCache = i, e.exports = function () {
            function e(e, t, n, i, o, a) {
                if (a !== r) {
                    var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw s.name = "Invariant Violation", s
                }
            }

            function t() {
                return e
            }

            var n = {
                array: e.isRequired = e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                elementType: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t,
                checkPropTypes: o,
                resetWarningCache: i
            };
            return n.PropTypes = n
        }
    }, function (e, t, n) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t) {
        e.exports = function (e) {
            if (!e.webpackPolyfill) {
                var t = Object.create(e);
                t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                    enumerable: !0, get: function () {
                        return t.l
                    }
                }), Object.defineProperty(t, "id", {
                    enumerable: !0, get: function () {
                        return t.i
                    }
                }), Object.defineProperty(t, "exports", {enumerable: !0}), t.webpackPolyfill = 1
            }
            return t
        }
    }, , , function (e, t, n) {
        "use strict";

        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = "function" == typeof Symbol && Symbol.for, o = i ? Symbol.for("react.element") : 60103,
            a = i ? Symbol.for("react.portal") : 60106, s = i ? Symbol.for("react.fragment") : 60107,
            l = i ? Symbol.for("react.strict_mode") : 60108, u = i ? Symbol.for("react.profiler") : 60114,
            c = i ? Symbol.for("react.provider") : 60109, p = i ? Symbol.for("react.context") : 60110,
            d = i ? Symbol.for("react.async_mode") : 60111, f = i ? Symbol.for("react.concurrent_mode") : 60111,
            h = i ? Symbol.for("react.forward_ref") : 60112, _ = i ? Symbol.for("react.suspense") : 60113,
            m = i ? Symbol.for("react.memo") : 60115, g = i ? Symbol.for("react.lazy") : 60116;

        function v(e) {
            if ("object" === r(e) && null !== e) {
                var t = e.$$typeof;
                switch (t) {
                    case o:
                        switch (e = e.type) {
                            case d:
                            case f:
                            case s:
                            case u:
                            case l:
                            case _:
                                return e;
                            default:
                                switch (e = e && e.$$typeof) {
                                    case p:
                                    case h:
                                    case c:
                                        return e;
                                    default:
                                        return t
                                }
                        }
                    case g:
                    case m:
                    case a:
                        return t
                }
            }
        }

        function y(e) {
            return v(e) === f
        }

        t.typeOf = v, t.AsyncMode = d, t.ConcurrentMode = f, t.ContextConsumer = p, t.ContextProvider = c, t.Element = o, t.ForwardRef = h, t.Fragment = s, t.Lazy = g, t.Memo = m, t.Portal = a, t.Profiler = u, t.StrictMode = l, t.Suspense = _, t.isValidElementType = function (e) {
            return "string" == typeof e || "function" == typeof e || e === s || e === f || e === u || e === l || e === _ || "object" === r(e) && null !== e && (e.$$typeof === g || e.$$typeof === m || e.$$typeof === c || e.$$typeof === p || e.$$typeof === h)
        }, t.isAsyncMode = function (e) {
            return y(e) || v(e) === d
        }, t.isConcurrentMode = y, t.isContextConsumer = function (e) {
            return v(e) === p
        }, t.isContextProvider = function (e) {
            return v(e) === c
        }, t.isElement = function (e) {
            return "object" === r(e) && null !== e && e.$$typeof === o
        }, t.isForwardRef = function (e) {
            return v(e) === h
        }, t.isFragment = function (e) {
            return v(e) === s
        }, t.isLazy = function (e) {
            return v(e) === g
        }, t.isMemo = function (e) {
            return v(e) === m
        }, t.isPortal = function (e) {
            return v(e) === a
        }, t.isProfiler = function (e) {
            return v(e) === u
        }, t.isStrictMode = function (e) {
            return v(e) === l
        }, t.isSuspense = function (e) {
            return v(e) === _
        }
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
        var r, i, o;

        function a(e) {
            return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        o = function () {
            "use strict";
            var e = navigator.userAgent, t = navigator.platform, n = /gecko\/\d/i.test(e), r = /MSIE \d/.test(e),
                i = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e), o = /Edge\/(\d+)/.exec(e), s = r || i || o,
                l = s && (r ? document.documentMode || 6 : +(o || i)[1]), u = !o && /WebKit\//.test(e),
                c = u && /Qt\/\d+\.\d+/.test(e), p = !o && /Chrome\//.test(e), d = /Opera\//.test(e),
                f = /Apple Computer/.test(navigator.vendor), h = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),
                _ = /PhantomJS/.test(e), m = !o && /AppleWebKit/.test(e) && /Mobile\/\w+/.test(e),
                g = /Android/.test(e), v = m || g || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),
                y = m || /Mac/.test(t), b = /\bCrOS\b/.test(e), w = /win/i.test(t),
                x = d && e.match(/Version\/(\d*\.\d*)/);
            x && (x = Number(x[1])), x && 15 <= x && (u = !(d = !1));
            var k = y && (c || d && (null == x || x < 12.11)), C = n || s && 9 <= l;

            function S(e) {
                return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*")
            }

            var E, T = function (e, t) {
                var n = e.className, r = S(t).exec(n);
                if (r) {
                    var i = n.slice(r.index + r[0].length);
                    e.className = n.slice(0, r.index) + (i ? r[1] + i : "")
                }
            };

            function O(e) {
                for (var t = e.childNodes.length; 0 < t; --t) e.removeChild(e.firstChild);
                return e
            }

            function N(e, t) {
                return O(e).appendChild(t)
            }

            function M(e, t, n, r) {
                var i = document.createElement(e);
                if (n && (i.className = n), r && (i.style.cssText = r), "string" == typeof t) i.appendChild(document.createTextNode(t)); else if (t) for (var o = 0; o < t.length; ++o) i.appendChild(t[o]);
                return i
            }

            function A(e, t, n, r) {
                var i = M(e, t, n, r);
                return i.setAttribute("role", "presentation"), i
            }

            function P(e, t) {
                if (3 == t.nodeType && (t = t.parentNode), e.contains) return e.contains(t);
                do {
                    if (11 == t.nodeType && (t = t.host), t == e) return !0
                } while (t = t.parentNode)
            }

            function L() {
                var e;
                try {
                    e = document.activeElement
                } catch (t) {
                    e = document.body || null
                }
                for (; e && e.shadowRoot && e.shadowRoot.activeElement;) e = e.shadowRoot.activeElement;
                return e
            }

            function R(e, t) {
                var n = e.className;
                S(t).test(n) || (e.className += (n ? " " : "") + t)
            }

            function D(e, t) {
                for (var n = e.split(" "), r = 0; r < n.length; r++) n[r] && !S(n[r]).test(t) && (t += " " + n[r]);
                return t
            }

            E = document.createRange ? function (e, t, n, r) {
                var i = document.createRange();
                return i.setEnd(r || e, n), i.setStart(e, t), i
            } : function (e, t, n) {
                var r = document.body.createTextRange();
                try {
                    r.moveToElementText(e.parentNode)
                } catch (e) {
                    return r
                }
                return r.collapse(!0), r.moveEnd("character", n), r.moveStart("character", t), r
            };
            var I = function (e) {
                e.select()
            };

            function z(e) {
                var t = Array.prototype.slice.call(arguments, 1);
                return function () {
                    return e.apply(null, t)
                }
            }

            function j(e, t, n) {
                for (var r in t || (t = {}), e) !e.hasOwnProperty(r) || !1 === n && t.hasOwnProperty(r) || (t[r] = e[r]);
                return t
            }

            function W(e, t, n, r, i) {
                null == t && -1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length);
                for (var o = r || 0, a = i || 0; ;) {
                    var s = e.indexOf("\t", o);
                    if (s < 0 || t <= s) return a + (t - o);
                    a += s - o, a += n - a % n, o = s + 1
                }
            }

            m ? I = function (e) {
                e.selectionStart = 0, e.selectionEnd = e.value.length
            } : s && (I = function (e) {
                try {
                    e.select()
                } catch (e) {
                }
            });
            var F = function () {
                this.id = null
            };

            function H(e, t) {
                for (var n = 0; n < e.length; ++n) if (e[n] == t) return n;
                return -1
            }

            F.prototype.set = function (e, t) {
                clearTimeout(this.id), this.id = setTimeout(t, e)
            };
            var U = 30, B = {
                toString: function () {
                    return "CodeMirror.Pass"
                }
            }, V = {scroll: !1}, $ = {origin: "*mouse"}, K = {origin: "+move"};

            function G(e, t, n) {
                for (var r = 0, i = 0; ;) {
                    var o = e.indexOf("\t", r);
                    -1 == o && (o = e.length);
                    var a = o - r;
                    if (o == e.length || t <= i + a) return r + Math.min(a, t - i);
                    if (i += o - r, r = o + 1, t <= (i += n - i % n)) return r
                }
            }

            var q = [""];

            function X(e) {
                for (; q.length <= e;) q.push(Y(q) + " ");
                return q[e]
            }

            function Y(e) {
                return e[e.length - 1]
            }

            function Q(e, t) {
                for (var n = [], r = 0; r < e.length; r++) n[r] = t(e[r], r);
                return n
            }

            function Z() {
            }

            function J(e, t) {
                var n;
                return n = Object.create ? Object.create(e) : (Z.prototype = e, new Z), t && j(t, n), n
            }

            var ee = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;

            function te(e) {
                return /\w/.test(e) || "" < e && (e.toUpperCase() != e.toLowerCase() || ee.test(e))
            }

            function ne(e, t) {
                return t ? !!(-1 < t.source.indexOf("\\w") && te(e)) || t.test(e) : te(e)
            }

            function re(e) {
                for (var t in e) if (e.hasOwnProperty(t) && e[t]) return !1;
                return !0
            }

            var ie = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;

            function oe(e) {
                return 768 <= e.charCodeAt(0) && ie.test(e)
            }

            function ae(e, t, n) {
                for (; (n < 0 ? 0 < t : t < e.length) && oe(e.charAt(t));) t += n;
                return t
            }

            function se(e, t, n) {
                for (var r = n < t ? -1 : 1; ;) {
                    if (t == n) return t;
                    var i = (t + n) / 2, o = r < 0 ? Math.ceil(i) : Math.floor(i);
                    if (o == t) return e(o) ? t : n;
                    e(o) ? n = o : t = o + r
                }
            }

            var le = null;

            function ue(e, t, n) {
                var r;
                le = null;
                for (var i = 0; i < e.length; ++i) {
                    var o = e[i];
                    if (o.from < t && o.to > t) return i;
                    o.to == t && (o.from != o.to && "before" == n ? r = i : le = i), o.from == t && (o.from != o.to && "before" != n ? r = i : le = i)
                }
                return null != r ? r : le
            }

            var ce = function () {
                var e = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/, t = /[stwN]/, n = /[LRr]/, r = /[Lb1n]/,
                    i = /[1n]/;

                function o(e, t, n) {
                    this.level = e, this.from = t, this.to = n
                }

                return function (a, s) {
                    var l = "ltr" == s ? "L" : "R";
                    if (0 == a.length || "ltr" == s && !e.test(a)) return !1;
                    for (var u, c = a.length, p = [], d = 0; d < c; ++d) p.push((u = a.charCodeAt(d)) <= 247 ? "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN".charAt(u) : 1424 <= u && u <= 1524 ? "R" : 1536 <= u && u <= 1785 ? "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111".charAt(u - 1536) : 1774 <= u && u <= 2220 ? "r" : 8192 <= u && u <= 8203 ? "w" : 8204 == u ? "b" : "L");
                    for (var f = 0, h = l; f < c; ++f) {
                        var _ = p[f];
                        "m" == _ ? p[f] = h : h = _
                    }
                    for (var m = 0, g = l; m < c; ++m) {
                        var v = p[m];
                        "1" == v && "r" == g ? p[m] = "n" : n.test(v) && "r" == (g = v) && (p[m] = "R")
                    }
                    for (var y = 1, b = p[0]; y < c - 1; ++y) {
                        var w = p[y];
                        "+" == w && "1" == b && "1" == p[y + 1] ? p[y] = "1" : "," != w || b != p[y + 1] || "1" != b && "n" != b || (p[y] = b), b = w
                    }
                    for (var x = 0; x < c; ++x) {
                        var k = p[x];
                        if ("," == k) p[x] = "N"; else if ("%" == k) {
                            var C = void 0;
                            for (C = x + 1; C < c && "%" == p[C]; ++C) ;
                            for (var S = x && "!" == p[x - 1] || C < c && "1" == p[C] ? "1" : "N", E = x; E < C; ++E) p[E] = S;
                            x = C - 1
                        }
                    }
                    for (var T = 0, O = l; T < c; ++T) {
                        var N = p[T];
                        "L" == O && "1" == N ? p[T] = "L" : n.test(N) && (O = N)
                    }
                    for (var M = 0; M < c; ++M) if (t.test(p[M])) {
                        var A = void 0;
                        for (A = M + 1; A < c && t.test(p[A]); ++A) ;
                        for (var P = "L" == (M ? p[M - 1] : l), L = P == ("L" == (A < c ? p[A] : l)) ? P ? "L" : "R" : l, R = M; R < A; ++R) p[R] = L;
                        M = A - 1
                    }
                    for (var D, I = [], z = 0; z < c;) if (r.test(p[z])) {
                        var j = z;
                        for (++z; z < c && r.test(p[z]); ++z) ;
                        I.push(new o(0, j, z))
                    } else {
                        var W = z, F = I.length;
                        for (++z; z < c && "L" != p[z]; ++z) ;
                        for (var H = W; H < z;) if (i.test(p[H])) {
                            W < H && I.splice(F, 0, new o(1, W, H));
                            var U = H;
                            for (++H; H < z && i.test(p[H]); ++H) ;
                            I.splice(F, 0, new o(2, U, H)), W = H
                        } else ++H;
                        W < z && I.splice(F, 0, new o(1, W, z))
                    }
                    return "ltr" == s && (1 == I[0].level && (D = a.match(/^\s+/)) && (I[0].from = D[0].length, I.unshift(new o(0, 0, D[0].length))), 1 == Y(I).level && (D = a.match(/\s+$/)) && (Y(I).to -= D[0].length, I.push(new o(0, c - D[0].length, c)))), "rtl" == s ? I.reverse() : I
                }
            }();

            function pe(e, t) {
                var n = e.order;
                return null == n && (n = e.order = ce(e.text, t)), n
            }

            var de = [], fe = function (e, t, n) {
                if (e.addEventListener) e.addEventListener(t, n, !1); else if (e.attachEvent) e.attachEvent("on" + t, n); else {
                    var r = e._handlers || (e._handlers = {});
                    r[t] = (r[t] || de).concat(n)
                }
            };

            function he(e, t) {
                return e._handlers && e._handlers[t] || de
            }

            function _e(e, t, n) {
                if (e.removeEventListener) e.removeEventListener(t, n, !1); else if (e.detachEvent) e.detachEvent("on" + t, n); else {
                    var r = e._handlers, i = r && r[t];
                    if (i) {
                        var o = H(i, n);
                        -1 < o && (r[t] = i.slice(0, o).concat(i.slice(o + 1)))
                    }
                }
            }

            function me(e, t) {
                var n = he(e, t);
                if (n.length) for (var r = Array.prototype.slice.call(arguments, 2), i = 0; i < n.length; ++i) n[i].apply(null, r)
            }

            function ge(e, t, n) {
                return "string" == typeof t && (t = {
                    type: t, preventDefault: function () {
                        this.defaultPrevented = !0
                    }
                }), me(e, n || t.type, e, t), ke(t) || t.codemirrorIgnore
            }

            function ve(e) {
                var t = e._handlers && e._handlers.cursorActivity;
                if (t) for (var n = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), r = 0; r < t.length; ++r) -1 == H(n, t[r]) && n.push(t[r])
            }

            function ye(e, t) {
                return 0 < he(e, t).length
            }

            function be(e) {
                e.prototype.on = function (e, t) {
                    fe(this, e, t)
                }, e.prototype.off = function (e, t) {
                    _e(this, e, t)
                }
            }

            function we(e) {
                e.preventDefault ? e.preventDefault() : e.returnValue = !1
            }

            function xe(e) {
                e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
            }

            function ke(e) {
                return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue
            }

            function Ce(e) {
                we(e), xe(e)
            }

            function Se(e) {
                return e.target || e.srcElement
            }

            function Ee(e) {
                var t = e.which;
                return null == t && (1 & e.button ? t = 1 : 2 & e.button ? t = 3 : 4 & e.button && (t = 2)), y && e.ctrlKey && 1 == t && (t = 3), t
            }

            var Te, Oe, Ne = function () {
                if (s && l < 9) return !1;
                var e = M("div");
                return "draggable" in e || "dragDrop" in e
            }();

            function Me(e) {
                if (null == Te) {
                    var t = M("span", "​");
                    N(e, M("span", [t, document.createTextNode("x")])), 0 != e.firstChild.offsetHeight && (Te = t.offsetWidth <= 1 && 2 < t.offsetHeight && !(s && l < 8))
                }
                var n = Te ? M("span", "​") : M("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
                return n.setAttribute("cm-text", ""), n
            }

            function Ae(e) {
                if (null != Oe) return Oe;
                var t = N(e, document.createTextNode("AخA")), n = E(t, 0, 1).getBoundingClientRect(),
                    r = E(t, 1, 2).getBoundingClientRect();
                return O(e), !(!n || n.left == n.right) && (Oe = r.right - n.right < 3)
            }

            var Pe, Le = 3 != "\n\nb".split(/\n/).length ? function (e) {
                    for (var t = 0, n = [], r = e.length; t <= r;) {
                        var i = e.indexOf("\n", t);
                        -1 == i && (i = e.length);
                        var o = e.slice(t, "\r" == e.charAt(i - 1) ? i - 1 : i), a = o.indexOf("\r");
                        -1 != a ? (n.push(o.slice(0, a)), t += a + 1) : (n.push(o), t = i + 1)
                    }
                    return n
                } : function (e) {
                    return e.split(/\r\n?|\n/)
                }, Re = window.getSelection ? function (e) {
                    try {
                        return e.selectionStart != e.selectionEnd
                    } catch (e) {
                        return !1
                    }
                } : function (e) {
                    var t;
                    try {
                        t = e.ownerDocument.selection.createRange()
                    } catch (e) {
                    }
                    return !(!t || t.parentElement() != e) && 0 != t.compareEndPoints("StartToEnd", t)
                },
                De = "oncopy" in (Pe = M("div")) || (Pe.setAttribute("oncopy", "return;"), "function" == typeof Pe.oncopy),
                Ie = null, ze = {}, je = {};

            function We(e) {
                if ("string" == typeof e && je.hasOwnProperty(e)) e = je[e]; else if (e && "string" == typeof e.name && je.hasOwnProperty(e.name)) {
                    var t = je[e.name];
                    "string" == typeof t && (t = {name: t}), (e = J(t, e)).name = t.name
                } else {
                    if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e)) return We("application/xml");
                    if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e)) return We("application/json")
                }
                return "string" == typeof e ? {name: e} : e || {name: "null"}
            }

            function Fe(e, t) {
                t = We(t);
                var n = ze[t.name];
                if (!n) return Fe(e, "text/plain");
                var r = n(e, t);
                if (He.hasOwnProperty(t.name)) {
                    var i = He[t.name];
                    for (var o in i) i.hasOwnProperty(o) && (r.hasOwnProperty(o) && (r["_" + o] = r[o]), r[o] = i[o])
                }
                if (r.name = t.name, t.helperType && (r.helperType = t.helperType), t.modeProps) for (var a in t.modeProps) r[a] = t.modeProps[a];
                return r
            }

            var He = {};

            function Ue(e, t) {
                if (!0 === t) return t;
                if (e.copyState) return e.copyState(t);
                var n = {};
                for (var r in t) {
                    var i = t[r];
                    i instanceof Array && (i = i.concat([])), n[r] = i
                }
                return n
            }

            function Be(e, t) {
                for (var n; e.innerMode && (n = e.innerMode(t)) && n.mode != e;) t = n.state, e = n.mode;
                return n || {mode: e, state: t}
            }

            function Ve(e, t, n) {
                return !e.startState || e.startState(t, n)
            }

            var $e = function (e, t, n) {
                this.pos = this.start = 0, this.string = e, this.tabSize = t || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0, this.lineOracle = n
            };

            function Ke(e, t) {
                if ((t -= e.first) < 0 || t >= e.size) throw new Error("There is no line " + (t + e.first) + " in the document.");
                for (var n = e; !n.lines;) for (var r = 0; ; ++r) {
                    var i = n.children[r], o = i.chunkSize();
                    if (t < o) {
                        n = i;
                        break
                    }
                    t -= o
                }
                return n.lines[t]
            }

            function Ge(e, t, n) {
                var r = [], i = t.line;
                return e.iter(t.line, n.line + 1, function (e) {
                    var o = e.text;
                    i == n.line && (o = o.slice(0, n.ch)), i == t.line && (o = o.slice(t.ch)), r.push(o), ++i
                }), r
            }

            function qe(e, t, n) {
                var r = [];
                return e.iter(t, n, function (e) {
                    r.push(e.text)
                }), r
            }

            function Xe(e, t) {
                var n = t - e.height;
                if (n) for (var r = e; r; r = r.parent) r.height += n
            }

            function Ye(e) {
                if (null == e.parent) return null;
                for (var t = e.parent, n = H(t.lines, e), r = t.parent; r; r = (t = r).parent) for (var i = 0; r.children[i] != t; ++i) n += r.children[i].chunkSize();
                return n + t.first
            }

            function Qe(e, t) {
                var n = e.first;
                e:do {
                    for (var r = 0; r < e.children.length; ++r) {
                        var i = e.children[r], o = i.height;
                        if (t < o) {
                            e = i;
                            continue e
                        }
                        t -= o, n += i.chunkSize()
                    }
                    return n
                } while (!e.lines);
                for (var a = 0; a < e.lines.length; ++a) {
                    var s = e.lines[a].height;
                    if (t < s) break;
                    t -= s
                }
                return n + a
            }

            function Ze(e, t) {
                return t >= e.first && t < e.first + e.size
            }

            function Je(e, t) {
                return String(e.lineNumberFormatter(t + e.firstLineNumber))
            }

            function et(e, t, n) {
                if (void 0 === n && (n = null), !(this instanceof et)) return new et(e, t, n);
                this.line = e, this.ch = t, this.sticky = n
            }

            function tt(e, t) {
                return e.line - t.line || e.ch - t.ch
            }

            function nt(e, t) {
                return e.sticky == t.sticky && 0 == tt(e, t)
            }

            function rt(e) {
                return et(e.line, e.ch)
            }

            function it(e, t) {
                return tt(e, t) < 0 ? t : e
            }

            function ot(e, t) {
                return tt(e, t) < 0 ? e : t
            }

            function at(e, t) {
                return Math.max(e.first, Math.min(t, e.first + e.size - 1))
            }

            function st(e, t) {
                if (t.line < e.first) return et(e.first, 0);
                var n, r, i, o = e.first + e.size - 1;
                return t.line > o ? et(o, Ke(e, o).text.length) : (r = Ke(e, (n = t).line).text.length, null == (i = n.ch) || r < i ? et(n.line, r) : i < 0 ? et(n.line, 0) : n)
            }

            function lt(e, t) {
                for (var n = [], r = 0; r < t.length; r++) n[r] = st(e, t[r]);
                return n
            }

            $e.prototype.eol = function () {
                return this.pos >= this.string.length
            }, $e.prototype.sol = function () {
                return this.pos == this.lineStart
            }, $e.prototype.peek = function () {
                return this.string.charAt(this.pos) || void 0
            }, $e.prototype.next = function () {
                if (this.pos < this.string.length) return this.string.charAt(this.pos++)
            }, $e.prototype.eat = function (e) {
                var t = this.string.charAt(this.pos);
                if ("string" == typeof e ? t == e : t && (e.test ? e.test(t) : e(t))) return ++this.pos, t
            }, $e.prototype.eatWhile = function (e) {
                for (var t = this.pos; this.eat(e);) ;
                return this.pos > t
            }, $e.prototype.eatSpace = function () {
                for (var e = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos));) ++this.pos;
                return this.pos > e
            }, $e.prototype.skipToEnd = function () {
                this.pos = this.string.length
            }, $e.prototype.skipTo = function (e) {
                var t = this.string.indexOf(e, this.pos);
                if (-1 < t) return this.pos = t, !0
            }, $e.prototype.backUp = function (e) {
                this.pos -= e
            }, $e.prototype.column = function () {
                return this.lastColumnPos < this.start && (this.lastColumnValue = W(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? W(this.string, this.lineStart, this.tabSize) : 0)
            }, $e.prototype.indentation = function () {
                return W(this.string, null, this.tabSize) - (this.lineStart ? W(this.string, this.lineStart, this.tabSize) : 0)
            }, $e.prototype.match = function (e, t, n) {
                if ("string" != typeof e) {
                    var r = this.string.slice(this.pos).match(e);
                    return r && 0 < r.index ? null : (r && !1 !== t && (this.pos += r[0].length), r)
                }
                var i = function (e) {
                    return n ? e.toLowerCase() : e
                };
                if (i(this.string.substr(this.pos, e.length)) == i(e)) return !1 !== t && (this.pos += e.length), !0
            }, $e.prototype.current = function () {
                return this.string.slice(this.start, this.pos)
            }, $e.prototype.hideFirstChars = function (e, t) {
                this.lineStart += e;
                try {
                    return t()
                } finally {
                    this.lineStart -= e
                }
            }, $e.prototype.lookAhead = function (e) {
                var t = this.lineOracle;
                return t && t.lookAhead(e)
            }, $e.prototype.baseToken = function () {
                var e = this.lineOracle;
                return e && e.baseToken(this.pos)
            };
            var ut = function (e, t) {
                this.state = e, this.lookAhead = t
            }, ct = function (e, t, n, r) {
                this.state = t, this.doc = e, this.line = n, this.maxLookAhead = r || 0, this.baseTokens = null, this.baseTokenPos = 1
            };

            function pt(e, t, n, r) {
                var i = [e.state.modeGen], o = {};
                bt(e, t.text, e.doc.mode, n, function (e, t) {
                    return i.push(e, t)
                }, o, r);
                for (var a = n.state, s = function (r) {
                    n.baseTokens = i;
                    var s = e.state.overlays[r], l = 1, u = 0;
                    n.state = !0, bt(e, t.text, s.mode, n, function (e, t) {
                        for (var n = l; u < e;) {
                            var r = i[l];
                            e < r && i.splice(l, 1, e, i[l + 1], r), l += 2, u = Math.min(e, r)
                        }
                        if (t) if (s.opaque) i.splice(n, l - n, e, "overlay " + t), l = n + 2; else for (; n < l; n += 2) {
                            var o = i[n + 1];
                            i[n + 1] = (o ? o + " " : "") + "overlay " + t
                        }
                    }, o), n.state = a, n.baseTokens = null, n.baseTokenPos = 1
                }, l = 0; l < e.state.overlays.length; ++l) s(l);
                return {styles: i, classes: o.bgClass || o.textClass ? o : null}
            }

            function dt(e, t, n) {
                if (!t.styles || t.styles[0] != e.state.modeGen) {
                    var r = ft(e, Ye(t)), i = t.text.length > e.options.maxHighlightLength && Ue(e.doc.mode, r.state),
                        o = pt(e, t, r);
                    i && (r.state = i), t.stateAfter = r.save(!i), t.styles = o.styles, o.classes ? t.styleClasses = o.classes : t.styleClasses && (t.styleClasses = null), n === e.doc.highlightFrontier && (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier))
                }
                return t.styles
            }

            function ft(e, t, n) {
                var r = e.doc, i = e.display;
                if (!r.mode.startState) return new ct(r, !0, t);
                var o = function (e, t, n) {
                        for (var r, i, o = e.doc, a = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), s = t; a < s; --s) {
                            if (s <= o.first) return o.first;
                            var l = Ke(o, s - 1), u = l.stateAfter;
                            if (u && (!n || s + (u instanceof ut ? u.lookAhead : 0) <= o.modeFrontier)) return s;
                            var c = W(l.text, null, e.options.tabSize);
                            (null == i || c < r) && (i = s - 1, r = c)
                        }
                        return i
                    }(e, t, n), a = o > r.first && Ke(r, o - 1).stateAfter,
                    s = a ? ct.fromSaved(r, a, o) : new ct(r, Ve(r.mode), o);
                return r.iter(o, t, function (n) {
                    ht(e, n.text, s);
                    var r = s.line;
                    n.stateAfter = r == t - 1 || r % 5 == 0 || r >= i.viewFrom && r < i.viewTo ? s.save() : null, s.nextLine()
                }), n && (r.modeFrontier = s.line), s
            }

            function ht(e, t, n, r) {
                var i = e.doc.mode, o = new $e(t, e.options.tabSize, n);
                for (o.start = o.pos = r || 0, "" == t && _t(i, n.state); !o.eol();) mt(i, o, n.state), o.start = o.pos
            }

            function _t(e, t) {
                if (e.blankLine) return e.blankLine(t);
                if (e.innerMode) {
                    var n = Be(e, t);
                    return n.mode.blankLine ? n.mode.blankLine(n.state) : void 0
                }
            }

            function mt(e, t, n, r) {
                for (var i = 0; i < 10; i++) {
                    r && (r[0] = Be(e, n).mode);
                    var o = e.token(t, n);
                    if (t.pos > t.start) return o
                }
                throw new Error("Mode " + e.name + " failed to advance stream.")
            }

            ct.prototype.lookAhead = function (e) {
                var t = this.doc.getLine(this.line + e);
                return null != t && e > this.maxLookAhead && (this.maxLookAhead = e), t
            }, ct.prototype.baseToken = function (e) {
                if (!this.baseTokens) return null;
                for (; this.baseTokens[this.baseTokenPos] <= e;) this.baseTokenPos += 2;
                var t = this.baseTokens[this.baseTokenPos + 1];
                return {type: t && t.replace(/( |^)overlay .*/, ""), size: this.baseTokens[this.baseTokenPos] - e}
            }, ct.prototype.nextLine = function () {
                this.line++, 0 < this.maxLookAhead && this.maxLookAhead--
            }, ct.fromSaved = function (e, t, n) {
                return t instanceof ut ? new ct(e, Ue(e.mode, t.state), n, t.lookAhead) : new ct(e, Ue(e.mode, t), n)
            }, ct.prototype.save = function (e) {
                var t = !1 !== e ? Ue(this.doc.mode, this.state) : this.state;
                return 0 < this.maxLookAhead ? new ut(t, this.maxLookAhead) : t
            };
            var gt = function (e, t, n) {
                this.start = e.start, this.end = e.pos, this.string = e.current(), this.type = t || null, this.state = n
            };

            function vt(e, t, n, r) {
                var i, o, a = e.doc, s = a.mode, l = Ke(a, (t = st(a, t)).line), u = ft(e, t.line, n),
                    c = new $e(l.text, e.options.tabSize, u);
                for (r && (o = []); (r || c.pos < t.ch) && !c.eol();) c.start = c.pos, i = mt(s, c, u.state), r && o.push(new gt(c, i, Ue(a.mode, u.state)));
                return r ? o : new gt(c, i, u.state)
            }

            function yt(e, t) {
                if (e) for (; ;) {
                    var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
                    if (!n) break;
                    e = e.slice(0, n.index) + e.slice(n.index + n[0].length);
                    var r = n[1] ? "bgClass" : "textClass";
                    null == t[r] ? t[r] = n[2] : new RegExp("(?:^|s)" + n[2] + "(?:$|s)").test(t[r]) || (t[r] += " " + n[2])
                }
                return e
            }

            function bt(e, t, n, r, i, o, a) {
                var s = n.flattenSpans;
                null == s && (s = e.options.flattenSpans);
                var l, u = 0, c = null, p = new $e(t, e.options.tabSize, r), d = e.options.addModeClass && [null];
                for ("" == t && yt(_t(n, r.state), o); !p.eol();) {
                    if (l = p.pos > e.options.maxHighlightLength ? (s = !1, a && ht(e, t, r, p.pos), p.pos = t.length, null) : yt(mt(n, p, r.state, d), o), d) {
                        var f = d[0].name;
                        f && (l = "m-" + (l ? f + " " + l : f))
                    }
                    if (!s || c != l) {
                        for (; u < p.start;) i(u = Math.min(p.start, u + 5e3), c);
                        c = l
                    }
                    p.start = p.pos
                }
                for (; u < p.pos;) {
                    var h = Math.min(p.pos, u + 5e3);
                    i(h, c), u = h
                }
            }

            var wt = !1, xt = !1;

            function kt(e, t, n) {
                this.marker = e, this.from = t, this.to = n
            }

            function Ct(e, t) {
                if (e) for (var n = 0; n < e.length; ++n) {
                    var r = e[n];
                    if (r.marker == t) return r
                }
            }

            function St(e, t) {
                for (var n, r = 0; r < e.length; ++r) e[r] != t && (n || (n = [])).push(e[r]);
                return n
            }

            function Et(e, t) {
                if (t.full) return null;
                var n = Ze(e, t.from.line) && Ke(e, t.from.line).markedSpans,
                    r = Ze(e, t.to.line) && Ke(e, t.to.line).markedSpans;
                if (!n && !r) return null;
                var i = t.from.ch, o = t.to.ch, a = 0 == tt(t.from, t.to), s = function (e, t, n) {
                    var r;
                    if (e) for (var i = 0; i < e.length; ++i) {
                        var o = e[i], a = o.marker;
                        if (null == o.from || (a.inclusiveLeft ? o.from <= t : o.from < t) || o.from == t && "bookmark" == a.type && (!n || !o.marker.insertLeft)) {
                            var s = null == o.to || (a.inclusiveRight ? o.to >= t : o.to > t);
                            (r || (r = [])).push(new kt(a, o.from, s ? null : o.to))
                        }
                    }
                    return r
                }(n, i, a), l = function (e, t, n) {
                    var r;
                    if (e) for (var i = 0; i < e.length; ++i) {
                        var o = e[i], a = o.marker;
                        if (null == o.to || (a.inclusiveRight ? o.to >= t : o.to > t) || o.from == t && "bookmark" == a.type && (!n || o.marker.insertLeft)) {
                            var s = null == o.from || (a.inclusiveLeft ? o.from <= t : o.from < t);
                            (r || (r = [])).push(new kt(a, s ? null : o.from - t, null == o.to ? null : o.to - t))
                        }
                    }
                    return r
                }(r, o, a), u = 1 == t.text.length, c = Y(t.text).length + (u ? i : 0);
                if (s) for (var p = 0; p < s.length; ++p) {
                    var d = s[p];
                    if (null == d.to) {
                        var f = Ct(l, d.marker);
                        f ? u && (d.to = null == f.to ? null : f.to + c) : d.to = i
                    }
                }
                if (l) for (var h = 0; h < l.length; ++h) {
                    var _ = l[h];
                    null != _.to && (_.to += c), null == _.from ? Ct(s, _.marker) || (_.from = c, u && (s || (s = [])).push(_)) : (_.from += c, u && (s || (s = [])).push(_))
                }
                s && (s = Tt(s)), l && l != s && (l = Tt(l));
                var m = [s];
                if (!u) {
                    var g, v = t.text.length - 2;
                    if (0 < v && s) for (var y = 0; y < s.length; ++y) null == s[y].to && (g || (g = [])).push(new kt(s[y].marker, null, null));
                    for (var b = 0; b < v; ++b) m.push(g);
                    m.push(l)
                }
                return m
            }

            function Tt(e) {
                for (var t = 0; t < e.length; ++t) {
                    var n = e[t];
                    null != n.from && n.from == n.to && !1 !== n.marker.clearWhenEmpty && e.splice(t--, 1)
                }
                return e.length ? e : null
            }

            function Ot(e) {
                var t = e.markedSpans;
                if (t) {
                    for (var n = 0; n < t.length; ++n) t[n].marker.detachLine(e);
                    e.markedSpans = null
                }
            }

            function Nt(e, t) {
                if (t) {
                    for (var n = 0; n < t.length; ++n) t[n].marker.attachLine(e);
                    e.markedSpans = t
                }
            }

            function Mt(e) {
                return e.inclusiveLeft ? -1 : 0
            }

            function At(e) {
                return e.inclusiveRight ? 1 : 0
            }

            function Pt(e, t) {
                var n = e.lines.length - t.lines.length;
                if (0 != n) return n;
                var r = e.find(), i = t.find(), o = tt(r.from, i.from) || Mt(e) - Mt(t);
                return o ? -o : tt(r.to, i.to) || At(e) - At(t) || t.id - e.id
            }

            function Lt(e, t) {
                var n, r = xt && e.markedSpans;
                if (r) for (var i = void 0, o = 0; o < r.length; ++o) (i = r[o]).marker.collapsed && null == (t ? i.from : i.to) && (!n || Pt(n, i.marker) < 0) && (n = i.marker);
                return n
            }

            function Rt(e) {
                return Lt(e, !0)
            }

            function Dt(e) {
                return Lt(e, !1)
            }

            function It(e, t) {
                var n, r = xt && e.markedSpans;
                if (r) for (var i = 0; i < r.length; ++i) {
                    var o = r[i];
                    o.marker.collapsed && (null == o.from || o.from < t) && (null == o.to || o.to > t) && (!n || Pt(n, o.marker) < 0) && (n = o.marker)
                }
                return n
            }

            function zt(e, t, n, r, i) {
                var o = Ke(e, t), a = xt && o.markedSpans;
                if (a) for (var s = 0; s < a.length; ++s) {
                    var l = a[s];
                    if (l.marker.collapsed) {
                        var u = l.marker.find(0), c = tt(u.from, n) || Mt(l.marker) - Mt(i),
                            p = tt(u.to, r) || At(l.marker) - At(i);
                        if (!(0 <= c && p <= 0 || c <= 0 && 0 <= p) && (c <= 0 && (l.marker.inclusiveRight && i.inclusiveLeft ? 0 <= tt(u.to, n) : 0 < tt(u.to, n)) || 0 <= c && (l.marker.inclusiveRight && i.inclusiveLeft ? tt(u.from, r) <= 0 : tt(u.from, r) < 0))) return !0
                    }
                }
            }

            function jt(e) {
                for (var t; t = Rt(e);) e = t.find(-1, !0).line;
                return e
            }

            function Wt(e, t) {
                var n = Ke(e, t), r = jt(n);
                return n == r ? t : Ye(r)
            }

            function Ft(e, t) {
                if (t > e.lastLine()) return t;
                var n, r = Ke(e, t);
                if (!Ht(e, r)) return t;
                for (; n = Dt(r);) r = n.find(1, !0).line;
                return Ye(r) + 1
            }

            function Ht(e, t) {
                var n = xt && t.markedSpans;
                if (n) for (var r = void 0, i = 0; i < n.length; ++i) if ((r = n[i]).marker.collapsed) {
                    if (null == r.from) return !0;
                    if (!r.marker.widgetNode && 0 == r.from && r.marker.inclusiveLeft && Ut(e, t, r)) return !0
                }
            }

            function Ut(e, t, n) {
                if (null == n.to) {
                    var r = n.marker.find(1, !0);
                    return Ut(e, r.line, Ct(r.line.markedSpans, n.marker))
                }
                if (n.marker.inclusiveRight && n.to == t.text.length) return !0;
                for (var i = void 0, o = 0; o < t.markedSpans.length; ++o) if ((i = t.markedSpans[o]).marker.collapsed && !i.marker.widgetNode && i.from == n.to && (null == i.to || i.to != n.from) && (i.marker.inclusiveLeft || n.marker.inclusiveRight) && Ut(e, t, i)) return !0
            }

            function Bt(e) {
                for (var t = 0, n = (e = jt(e)).parent, r = 0; r < n.lines.length; ++r) {
                    var i = n.lines[r];
                    if (i == e) break;
                    t += i.height
                }
                for (var o = n.parent; o; o = (n = o).parent) for (var a = 0; a < o.children.length; ++a) {
                    var s = o.children[a];
                    if (s == n) break;
                    t += s.height
                }
                return t
            }

            function Vt(e) {
                if (0 == e.height) return 0;
                for (var t, n = e.text.length, r = e; t = Rt(r);) {
                    var i = t.find(0, !0);
                    r = i.from.line, n += i.from.ch - i.to.ch
                }
                for (r = e; t = Dt(r);) {
                    var o = t.find(0, !0);
                    n -= r.text.length - o.from.ch, n += (r = o.to.line).text.length - o.to.ch
                }
                return n
            }

            function $t(e) {
                var t = e.display, n = e.doc;
                t.maxLine = Ke(n, n.first), t.maxLineLength = Vt(t.maxLine), t.maxLineChanged = !0, n.iter(function (e) {
                    var n = Vt(e);
                    n > t.maxLineLength && (t.maxLineLength = n, t.maxLine = e)
                })
            }

            var Kt = function (e, t, n) {
                this.text = e, Nt(this, t), this.height = n ? n(this) : 1
            };
            Kt.prototype.lineNo = function () {
                return Ye(this)
            }, be(Kt);
            var Gt = {}, qt = {};

            function Xt(e, t) {
                if (!e || /^\s*$/.test(e)) return null;
                var n = t.addModeClass ? qt : Gt;
                return n[e] || (n[e] = e.replace(/\S+/g, "cm-$&"))
            }

            function Yt(e, t) {
                var n = A("span", null, null, u ? "padding-right: .1px" : null), r = {
                    pre: A("pre", [n], "CodeMirror-line"),
                    content: n,
                    col: 0,
                    pos: 0,
                    cm: e,
                    trailingSpace: !1,
                    splitSpaces: e.getOption("lineWrapping")
                };
                t.measure = {};
                for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
                    var o = i ? t.rest[i - 1] : t.line, a = void 0;
                    r.pos = 0, r.addToken = Zt, Ae(e.display.measure) && (a = pe(o, e.doc.direction)) && (r.addToken = Jt(r.addToken, a)), r.map = [], tn(o, r, dt(e, o, t != e.display.externalMeasured && Ye(o))), o.styleClasses && (o.styleClasses.bgClass && (r.bgClass = D(o.styleClasses.bgClass, r.bgClass || "")), o.styleClasses.textClass && (r.textClass = D(o.styleClasses.textClass, r.textClass || ""))), 0 == r.map.length && r.map.push(0, 0, r.content.appendChild(Me(e.display.measure))), 0 == i ? (t.measure.map = r.map, t.measure.cache = {}) : ((t.measure.maps || (t.measure.maps = [])).push(r.map), (t.measure.caches || (t.measure.caches = [])).push({}))
                }
                if (u) {
                    var s = r.content.lastChild;
                    (/\bcm-tab\b/.test(s.className) || s.querySelector && s.querySelector(".cm-tab")) && (r.content.className = "cm-tab-wrap-hack")
                }
                return me(e, "renderLine", e, t.line, r.pre), r.pre.className && (r.textClass = D(r.pre.className, r.textClass || "")), r
            }

            function Qt(e) {
                var t = M("span", "•", "cm-invalidchar");
                return t.title = "\\u" + e.charCodeAt(0).toString(16), t.setAttribute("aria-label", t.title), t
            }

            function Zt(e, t, n, r, i, o, a) {
                if (t) {
                    var u, c = e.splitSpaces ? function (e, t) {
                        if (1 < e.length && !/  /.test(e)) return e;
                        for (var n = t, r = "", i = 0; i < e.length; i++) {
                            var o = e.charAt(i);
                            " " != o || !n || i != e.length - 1 && 32 != e.charCodeAt(i + 1) || (o = " "), r += o, n = " " == o
                        }
                        return r
                    }(t, e.trailingSpace) : t, p = e.cm.state.specialChars, d = !1;
                    if (p.test(t)) {
                        u = document.createDocumentFragment();
                        for (var f = 0; ;) {
                            p.lastIndex = f;
                            var h = p.exec(t), _ = h ? h.index - f : t.length - f;
                            if (_) {
                                var m = document.createTextNode(c.slice(f, f + _));
                                s && l < 9 ? u.appendChild(M("span", [m])) : u.appendChild(m), e.map.push(e.pos, e.pos + _, m), e.col += _, e.pos += _
                            }
                            if (!h) break;
                            f += _ + 1;
                            var g = void 0;
                            if ("\t" == h[0]) {
                                var v = e.cm.options.tabSize, y = v - e.col % v;
                                (g = u.appendChild(M("span", X(y), "cm-tab"))).setAttribute("role", "presentation"), g.setAttribute("cm-text", "\t"), e.col += y
                            } else "\r" == h[0] || "\n" == h[0] ? (g = u.appendChild(M("span", "\r" == h[0] ? "␍" : "␤", "cm-invalidchar"))).setAttribute("cm-text", h[0]) : ((g = e.cm.options.specialCharPlaceholder(h[0])).setAttribute("cm-text", h[0]), s && l < 9 ? u.appendChild(M("span", [g])) : u.appendChild(g)), e.col += 1;
                            e.map.push(e.pos, e.pos + 1, g), e.pos++
                        }
                    } else e.col += t.length, u = document.createTextNode(c), e.map.push(e.pos, e.pos + t.length, u), s && l < 9 && (d = !0), e.pos += t.length;
                    if (e.trailingSpace = 32 == c.charCodeAt(t.length - 1), n || r || i || d || o) {
                        var b = n || "";
                        r && (b += r), i && (b += i);
                        var w = M("span", [u], b, o);
                        if (a) for (var x in a) a.hasOwnProperty(x) && "style" != x && "class" != x && w.setAttribute(x, a[x]);
                        return e.content.appendChild(w)
                    }
                    e.content.appendChild(u)
                }
            }

            function Jt(e, t) {
                return function (n, r, i, o, a, s, l) {
                    i = i ? i + " cm-force-border" : "cm-force-border";
                    for (var u = n.pos, c = u + r.length; ;) {
                        for (var p = void 0, d = 0; d < t.length && !((p = t[d]).to > u && p.from <= u); d++) ;
                        if (p.to >= c) return e(n, r, i, o, a, s, l);
                        e(n, r.slice(0, p.to - u), i, o, null, s, l), o = null, r = r.slice(p.to - u), u = p.to
                    }
                }
            }

            function en(e, t, n, r) {
                var i = !r && n.widgetNode;
                i && e.map.push(e.pos, e.pos + t, i), !r && e.cm.display.input.needsContentAttribute && (i || (i = e.content.appendChild(document.createElement("span"))), i.setAttribute("cm-marker", n.id)), i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)), e.pos += t, e.trailingSpace = !1
            }

            function tn(e, t, n) {
                var r = e.markedSpans, i = e.text, o = 0;
                if (r) for (var a, s, l, u, c, p, d, f = i.length, h = 0, _ = 1, m = "", g = 0; ;) {
                    if (g == h) {
                        l = u = c = s = "", p = d = null, g = 1 / 0;
                        for (var v = [], y = void 0, b = 0; b < r.length; ++b) {
                            var w = r[b], x = w.marker;
                            if ("bookmark" == x.type && w.from == h && x.widgetNode) v.push(x); else if (w.from <= h && (null == w.to || w.to > h || x.collapsed && w.to == h && w.from == h)) {
                                if (null != w.to && w.to != h && g > w.to && (g = w.to, u = ""), x.className && (l += " " + x.className), x.css && (s = (s ? s + ";" : "") + x.css), x.startStyle && w.from == h && (c += " " + x.startStyle), x.endStyle && w.to == g && (y || (y = [])).push(x.endStyle, w.to), x.title && ((d || (d = {})).title = x.title), x.attributes) for (var k in x.attributes) (d || (d = {}))[k] = x.attributes[k];
                                x.collapsed && (!p || Pt(p.marker, x) < 0) && (p = w)
                            } else w.from > h && g > w.from && (g = w.from)
                        }
                        if (y) for (var C = 0; C < y.length; C += 2) y[C + 1] == g && (u += " " + y[C]);
                        if (!p || p.from == h) for (var S = 0; S < v.length; ++S) en(t, 0, v[S]);
                        if (p && (p.from || 0) == h) {
                            if (en(t, (null == p.to ? f + 1 : p.to) - h, p.marker, null == p.from), null == p.to) return;
                            p.to == h && (p = !1)
                        }
                    }
                    if (f <= h) break;
                    for (var E = Math.min(f, g); ;) {
                        if (m) {
                            var T = h + m.length;
                            if (!p) {
                                var O = E < T ? m.slice(0, E - h) : m;
                                t.addToken(t, O, a ? a + l : l, c, h + O.length == g ? u : "", s, d)
                            }
                            if (E <= T) {
                                m = m.slice(E - h), h = E;
                                break
                            }
                            h = T, c = ""
                        }
                        m = i.slice(o, o = n[_++]), a = Xt(n[_++], t.cm.options)
                    }
                } else for (var N = 1; N < n.length; N += 2) t.addToken(t, i.slice(o, o = n[N]), Xt(n[N + 1], t.cm.options))
            }

            function nn(e, t, n) {
                this.line = t, this.rest = function (e) {
                    for (var t, n; t = Dt(e);) e = t.find(1, !0).line, (n || (n = [])).push(e);
                    return n
                }(t), this.size = this.rest ? Ye(Y(this.rest)) - n + 1 : 1, this.node = this.text = null, this.hidden = Ht(e, t)
            }

            function rn(e, t, n) {
                for (var r, i = [], o = t; o < n; o = r) {
                    var a = new nn(e.doc, Ke(e.doc, o), o);
                    r = o + a.size, i.push(a)
                }
                return i
            }

            var on = null, an = null;

            function sn(e, t) {
                var n = he(e, t);
                if (n.length) {
                    var r, i = Array.prototype.slice.call(arguments, 2);
                    on ? r = on.delayedCallbacks : an ? r = an : (r = an = [], setTimeout(ln, 0));
                    for (var o = function (e) {
                        r.push(function () {
                            return n[e].apply(null, i)
                        })
                    }, a = 0; a < n.length; ++a) o(a)
                }
            }

            function ln() {
                var e = an;
                an = null;
                for (var t = 0; t < e.length; ++t) e[t]()
            }

            function un(e, t, n, r) {
                for (var i = 0; i < t.changes.length; i++) {
                    var o = t.changes[i];
                    "text" == o ? dn(e, t) : "gutter" == o ? hn(e, t, n, r) : "class" == o ? fn(e, t) : "widget" == o && _n(e, t, r)
                }
                t.changes = null
            }

            function cn(e) {
                return e.node == e.text && (e.node = M("div", null, null, "position: relative"), e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text), e.node.appendChild(e.text), s && l < 8 && (e.node.style.zIndex = 2)), e.node
            }

            function pn(e, t) {
                var n = e.display.externalMeasured;
                return n && n.line == t.line ? (e.display.externalMeasured = null, t.measure = n.measure, n.built) : Yt(e, t)
            }

            function dn(e, t) {
                var n = t.text.className, r = pn(e, t);
                t.text == t.node && (t.node = r.pre), t.text.parentNode.replaceChild(r.pre, t.text), t.text = r.pre, r.bgClass != t.bgClass || r.textClass != t.textClass ? (t.bgClass = r.bgClass, t.textClass = r.textClass, fn(e, t)) : n && (t.text.className = n)
            }

            function fn(e, t) {
                !function (e, t) {
                    var n = t.bgClass ? t.bgClass + " " + (t.line.bgClass || "") : t.line.bgClass;
                    if (n && (n += " CodeMirror-linebackground"), t.background) n ? t.background.className = n : (t.background.parentNode.removeChild(t.background), t.background = null); else if (n) {
                        var r = cn(t);
                        t.background = r.insertBefore(M("div", null, n), r.firstChild), e.display.input.setUneditable(t.background)
                    }
                }(e, t), t.line.wrapClass ? cn(t).className = t.line.wrapClass : t.node != t.text && (t.node.className = "");
                var n = t.textClass ? t.textClass + " " + (t.line.textClass || "") : t.line.textClass;
                t.text.className = n || ""
            }

            function hn(e, t, n, r) {
                if (t.gutter && (t.node.removeChild(t.gutter), t.gutter = null), t.gutterBackground && (t.node.removeChild(t.gutterBackground), t.gutterBackground = null), t.line.gutterClass) {
                    var i = cn(t);
                    t.gutterBackground = M("div", null, "CodeMirror-gutter-background " + t.line.gutterClass, "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px; width: " + r.gutterTotalWidth + "px"), e.display.input.setUneditable(t.gutterBackground), i.insertBefore(t.gutterBackground, t.text)
                }
                var o = t.line.gutterMarkers;
                if (e.options.lineNumbers || o) {
                    var a = cn(t),
                        s = t.gutter = M("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px");
                    if (e.display.input.setUneditable(s), a.insertBefore(s, t.text), t.line.gutterClass && (s.className += " " + t.line.gutterClass), !e.options.lineNumbers || o && o["CodeMirror-linenumbers"] || (t.lineNumber = s.appendChild(M("div", Je(e.options, n), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + r.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"))), o) for (var l = 0; l < e.display.gutterSpecs.length; ++l) {
                        var u = e.display.gutterSpecs[l].className, c = o.hasOwnProperty(u) && o[u];
                        c && s.appendChild(M("div", [c], "CodeMirror-gutter-elt", "left: " + r.gutterLeft[u] + "px; width: " + r.gutterWidth[u] + "px"))
                    }
                }
            }

            function _n(e, t, n) {
                t.alignable && (t.alignable = null);
                for (var r = t.node.firstChild, i = void 0; r; r = i) i = r.nextSibling, "CodeMirror-linewidget" == r.className && t.node.removeChild(r);
                mn(e, t, n)
            }

            function mn(e, t, n) {
                if (gn(e, t.line, t, n, !0), t.rest) for (var r = 0; r < t.rest.length; r++) gn(e, t.rest[r], t, n, !1)
            }

            function gn(e, t, n, r, i) {
                if (t.widgets) for (var o = cn(n), a = 0, s = t.widgets; a < s.length; ++a) {
                    var l = s[a], u = M("div", [l.node], "CodeMirror-linewidget");
                    l.handleMouseEvents || u.setAttribute("cm-ignore-events", "true"), vn(l, u, n, r), e.display.input.setUneditable(u), i && l.above ? o.insertBefore(u, n.gutter || n.text) : o.appendChild(u), sn(l, "redraw")
                }
            }

            function vn(e, t, n, r) {
                if (e.noHScroll) {
                    (n.alignable || (n.alignable = [])).push(t);
                    var i = r.wrapperWidth;
                    t.style.left = r.fixedPos + "px", e.coverGutter || (i -= r.gutterTotalWidth, t.style.paddingLeft = r.gutterTotalWidth + "px"), t.style.width = i + "px"
                }
                e.coverGutter && (t.style.zIndex = 5, t.style.position = "relative", e.noHScroll || (t.style.marginLeft = -r.gutterTotalWidth + "px"))
            }

            function yn(e) {
                if (null != e.height) return e.height;
                var t = e.doc.cm;
                if (!t) return 0;
                if (!P(document.body, e.node)) {
                    var n = "position: relative;";
                    e.coverGutter && (n += "margin-left: -" + t.display.gutters.offsetWidth + "px;"), e.noHScroll && (n += "width: " + t.display.wrapper.clientWidth + "px;"), N(t.display.measure, M("div", [e.node], null, n))
                }
                return e.height = e.node.parentNode.offsetHeight
            }

            function bn(e, t) {
                for (var n = Se(t); n != e.wrapper; n = n.parentNode) if (!n || 1 == n.nodeType && "true" == n.getAttribute("cm-ignore-events") || n.parentNode == e.sizer && n != e.mover) return !0
            }

            function wn(e) {
                return e.lineSpace.offsetTop
            }

            function xn(e) {
                return e.mover.offsetHeight - e.lineSpace.offsetHeight
            }

            function kn(e) {
                if (e.cachedPaddingH) return e.cachedPaddingH;
                var t = N(e.measure, M("pre", "x")),
                    n = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
                    r = {left: parseInt(n.paddingLeft), right: parseInt(n.paddingRight)};
                return isNaN(r.left) || isNaN(r.right) || (e.cachedPaddingH = r), r
            }

            function Cn(e) {
                return U - e.display.nativeBarWidth
            }

            function Sn(e) {
                return e.display.scroller.clientWidth - Cn(e) - e.display.barWidth
            }

            function En(e) {
                return e.display.scroller.clientHeight - Cn(e) - e.display.barHeight
            }

            function Tn(e, t, n) {
                if (e.line == t) return {map: e.measure.map, cache: e.measure.cache};
                for (var r = 0; r < e.rest.length; r++) if (e.rest[r] == t) return {
                    map: e.measure.maps[r],
                    cache: e.measure.caches[r]
                };
                for (var i = 0; i < e.rest.length; i++) if (Ye(e.rest[i]) > n) return {
                    map: e.measure.maps[i],
                    cache: e.measure.caches[i],
                    before: !0
                }
            }

            function On(e, t, n, r) {
                return An(e, Mn(e, t), n, r)
            }

            function Nn(e, t) {
                if (t >= e.display.viewFrom && t < e.display.viewTo) return e.display.view[ar(e, t)];
                var n = e.display.externalMeasured;
                return n && t >= n.lineN && t < n.lineN + n.size ? n : void 0
            }

            function Mn(e, t) {
                var n = Ye(t), r = Nn(e, n);
                r && !r.text ? r = null : r && r.changes && (un(e, r, n, tr(e)), e.curOp.forceUpdate = !0), r || (r = function (e, t) {
                    var n = Ye(t = jt(t)), r = e.display.externalMeasured = new nn(e.doc, t, n);
                    r.lineN = n;
                    var i = r.built = Yt(e, r);
                    return r.text = i.pre, N(e.display.lineMeasure, i.pre), r
                }(e, t));
                var i = Tn(r, t, n);
                return {line: t, view: r, rect: null, map: i.map, cache: i.cache, before: i.before, hasHeights: !1}
            }

            function An(e, t, n, r, i) {
                t.before && (n = -1);
                var o, a = n + (r || "");
                return t.cache.hasOwnProperty(a) ? o = t.cache[a] : (t.rect || (t.rect = t.view.text.getBoundingClientRect()), t.hasHeights || (function (e, t, n) {
                    var r = e.options.lineWrapping, i = r && Sn(e);
                    if (!t.measure.heights || r && t.measure.width != i) {
                        var o = t.measure.heights = [];
                        if (r) {
                            t.measure.width = i;
                            for (var a = t.text.firstChild.getClientRects(), s = 0; s < a.length - 1; s++) {
                                var l = a[s], u = a[s + 1];
                                2 < Math.abs(l.bottom - u.bottom) && o.push((l.bottom + u.top) / 2 - n.top)
                            }
                        }
                        o.push(n.bottom - n.top)
                    }
                }(e, t.view, t.rect), t.hasHeights = !0), (o = function (e, t, n, r) {
                    var i, o = Rn(t.map, n, r), a = o.node, u = o.start, c = o.end, p = o.collapse;
                    if (3 == a.nodeType) {
                        for (var d = 0; d < 4; d++) {
                            for (; u && oe(t.line.text.charAt(o.coverStart + u));) --u;
                            for (; o.coverStart + c < o.coverEnd && oe(t.line.text.charAt(o.coverStart + c));) ++c;
                            if ((i = s && l < 9 && 0 == u && c == o.coverEnd - o.coverStart ? a.parentNode.getBoundingClientRect() : Dn(E(a, u, c).getClientRects(), r)).left || i.right || 0 == u) break;
                            c = u, u -= 1, p = "right"
                        }
                        s && l < 11 && (i = function (e, t) {
                            if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !function (e) {
                                if (null != Ie) return Ie;
                                var t = N(e, M("span", "x")), n = t.getBoundingClientRect(),
                                    r = E(t, 0, 1).getBoundingClientRect();
                                return Ie = 1 < Math.abs(n.left - r.left)
                            }(e)) return t;
                            var n = screen.logicalXDPI / screen.deviceXDPI, r = screen.logicalYDPI / screen.deviceYDPI;
                            return {left: t.left * n, right: t.right * n, top: t.top * r, bottom: t.bottom * r}
                        }(e.display.measure, i))
                    } else {
                        var f;
                        0 < u && (p = r = "right"), i = e.options.lineWrapping && 1 < (f = a.getClientRects()).length ? f["right" == r ? f.length - 1 : 0] : a.getBoundingClientRect()
                    }
                    if (s && l < 9 && !u && (!i || !i.left && !i.right)) {
                        var h = a.parentNode.getClientRects()[0];
                        i = h ? {left: h.left, right: h.left + er(e.display), top: h.top, bottom: h.bottom} : Ln
                    }
                    for (var _ = i.top - t.rect.top, m = i.bottom - t.rect.top, g = (_ + m) / 2, v = t.view.measure.heights, y = 0; y < v.length - 1 && !(g < v[y]); y++) ;
                    var b = y ? v[y - 1] : 0, w = v[y], x = {
                        left: ("right" == p ? i.right : i.left) - t.rect.left,
                        right: ("left" == p ? i.left : i.right) - t.rect.left,
                        top: b,
                        bottom: w
                    };
                    return i.left || i.right || (x.bogus = !0), e.options.singleCursorHeightPerLine || (x.rtop = _, x.rbottom = m), x
                }(e, t, n, r)).bogus || (t.cache[a] = o)), {
                    left: o.left,
                    right: o.right,
                    top: i ? o.rtop : o.top,
                    bottom: i ? o.rbottom : o.bottom
                }
            }

            var Pn, Ln = {left: 0, right: 0, top: 0, bottom: 0};

            function Rn(e, t, n) {
                for (var r, i, o, a, s, l, u = 0; u < e.length; u += 3) if (s = e[u], l = e[u + 1], t < s ? (i = 0, o = 1, a = "left") : t < l ? o = 1 + (i = t - s) : (u == e.length - 3 || t == l && e[u + 3] > t) && (i = (o = l - s) - 1, l <= t && (a = "right")), null != i) {
                    if (r = e[u + 2], s == l && n == (r.insertLeft ? "left" : "right") && (a = n), "left" == n && 0 == i) for (; u && e[u - 2] == e[u - 3] && e[u - 1].insertLeft;) r = e[2 + (u -= 3)], a = "left";
                    if ("right" == n && i == l - s) for (; u < e.length - 3 && e[u + 3] == e[u + 4] && !e[u + 5].insertLeft;) r = e[(u += 3) + 2], a = "right";
                    break
                }
                return {node: r, start: i, end: o, collapse: a, coverStart: s, coverEnd: l}
            }

            function Dn(e, t) {
                var n = Ln;
                if ("left" == t) for (var r = 0; r < e.length && (n = e[r]).left == n.right; r++) ; else for (var i = e.length - 1; 0 <= i && (n = e[i]).left == n.right; i--) ;
                return n
            }

            function In(e) {
                if (e.measure && (e.measure.cache = {}, e.measure.heights = null, e.rest)) for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {}
            }

            function zn(e) {
                e.display.externalMeasure = null, O(e.display.lineMeasure);
                for (var t = 0; t < e.display.view.length; t++) In(e.display.view[t])
            }

            function jn(e) {
                zn(e), e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null, e.options.lineWrapping || (e.display.maxLineChanged = !0), e.display.lineNumChars = null
            }

            function Wn() {
                return p && g ? -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft)) : window.pageXOffset || (document.documentElement || document.body).scrollLeft
            }

            function Fn() {
                return p && g ? -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop)) : window.pageYOffset || (document.documentElement || document.body).scrollTop
            }

            function Hn(e) {
                var t = 0;
                if (e.widgets) for (var n = 0; n < e.widgets.length; ++n) e.widgets[n].above && (t += yn(e.widgets[n]));
                return t
            }

            function Un(e, t, n, r, i) {
                if (!i) {
                    var o = Hn(t);
                    n.top += o, n.bottom += o
                }
                if ("line" == r) return n;
                r || (r = "local");
                var a = Bt(t);
                if ("local" == r ? a += wn(e.display) : a -= e.display.viewOffset, "page" == r || "window" == r) {
                    var s = e.display.lineSpace.getBoundingClientRect();
                    a += s.top + ("window" == r ? 0 : Fn());
                    var l = s.left + ("window" == r ? 0 : Wn());
                    n.left += l, n.right += l
                }
                return n.top += a, n.bottom += a, n
            }

            function Bn(e, t, n) {
                if ("div" == n) return t;
                var r = t.left, i = t.top;
                if ("page" == n) r -= Wn(), i -= Fn(); else if ("local" == n || !n) {
                    var o = e.display.sizer.getBoundingClientRect();
                    r += o.left, i += o.top
                }
                var a = e.display.lineSpace.getBoundingClientRect();
                return {left: r - a.left, top: i - a.top}
            }

            function Vn(e, t, n, r, i) {
                return r || (r = Ke(e.doc, t.line)), Un(e, r, On(e, r, t.ch, i), n)
            }

            function $n(e, t, n, r, i, o) {
                function a(t, a) {
                    var s = An(e, i, t, a ? "right" : "left", o);
                    return a ? s.left = s.right : s.right = s.left, Un(e, r, s, n)
                }

                r = r || Ke(e.doc, t.line), i || (i = Mn(e, r));
                var s = pe(r, e.doc.direction), l = t.ch, u = t.sticky;
                if (l >= r.text.length ? (l = r.text.length, u = "before") : l <= 0 && (l = 0, u = "after"), !s) return a("before" == u ? l - 1 : l, "before" == u);

                function c(e, t, n) {
                    return a(n ? e - 1 : e, 1 == s[t].level != n)
                }

                var p = ue(s, l, u), d = le, f = c(l, p, "before" == u);
                return null != d && (f.other = c(l, d, "before" != u)), f
            }

            function Kn(e, t) {
                var n = 0;
                t = st(e.doc, t), e.options.lineWrapping || (n = er(e.display) * t.ch);
                var r = Ke(e.doc, t.line), i = Bt(r) + wn(e.display);
                return {left: n, right: n, top: i, bottom: i + r.height}
            }

            function Gn(e, t, n, r, i) {
                var o = et(e, t, n);
                return o.xRel = i, r && (o.outside = !0), o
            }

            function qn(e, t, n) {
                var r = e.doc;
                if ((n += e.display.viewOffset) < 0) return Gn(r.first, 0, null, !0, -1);
                var i = Qe(r, n), o = r.first + r.size - 1;
                if (o < i) return Gn(r.first + r.size - 1, Ke(r, o).text.length, null, !0, 1);
                t < 0 && (t = 0);
                for (var a = Ke(r, i); ;) {
                    var s = Zn(e, a, i, t, n), l = It(a, s.ch + (0 < s.xRel ? 1 : 0));
                    if (!l) return s;
                    var u = l.find(1);
                    if (u.line == i) return u;
                    a = Ke(r, i = u.line)
                }
            }

            function Xn(e, t, n, r) {
                r -= Hn(t);
                var i = t.text.length, o = se(function (t) {
                    return An(e, n, t - 1).bottom <= r
                }, i, 0);
                return {
                    begin: o, end: i = se(function (t) {
                        return An(e, n, t).top > r
                    }, o, i)
                }
            }

            function Yn(e, t, n, r) {
                return n || (n = Mn(e, t)), Xn(e, t, n, Un(e, t, An(e, n, r), "line").top)
            }

            function Qn(e, t, n, r) {
                return !(e.bottom <= n) && (e.top > n || (r ? e.left : e.right) > t)
            }

            function Zn(e, t, n, r, i) {
                i -= Bt(t);
                var o = Mn(e, t), a = Hn(t), s = 0, l = t.text.length, u = !0, c = pe(t, e.doc.direction);
                if (c) {
                    var p = (e.options.lineWrapping ? function (e, t, n, r, i, o, a) {
                        var s = Xn(e, t, r, a), l = s.begin, u = s.end;
                        /\s/.test(t.text.charAt(u - 1)) && u--;
                        for (var c = null, p = null, d = 0; d < i.length; d++) {
                            var f = i[d];
                            if (!(f.from >= u || f.to <= l)) {
                                var h = An(e, r, 1 != f.level ? Math.min(u, f.to) - 1 : Math.max(l, f.from)).right,
                                    _ = h < o ? o - h + 1e9 : h - o;
                                (!c || _ < p) && (c = f, p = _)
                            }
                        }
                        return c || (c = i[i.length - 1]), c.from < l && (c = {
                            from: l,
                            to: c.to,
                            level: c.level
                        }), c.to > u && (c = {from: c.from, to: u, level: c.level}), c
                    } : function (e, t, n, r, i, o, a) {
                        var s = se(function (s) {
                            var l = i[s], u = 1 != l.level;
                            return Qn($n(e, et(n, u ? l.to : l.from, u ? "before" : "after"), "line", t, r), o, a, !0)
                        }, 0, i.length - 1), l = i[s];
                        if (0 < s) {
                            var u = 1 != l.level,
                                c = $n(e, et(n, u ? l.from : l.to, u ? "after" : "before"), "line", t, r);
                            Qn(c, o, a, !0) && c.top > a && (l = i[s - 1])
                        }
                        return l
                    })(e, t, n, o, c, r, i);
                    s = (u = 1 != p.level) ? p.from : p.to - 1, l = u ? p.to : p.from - 1
                }
                var d, f, h = null, _ = null, m = se(function (t) {
                    var n = An(e, o, t);
                    return n.top += a, n.bottom += a, !!Qn(n, r, i, !1) && (n.top <= i && n.left <= r && (h = t, _ = n), !0)
                }, s, l), g = !1;
                if (_) {
                    var v = r - _.left < _.right - r, y = v == u;
                    m = h + (y ? 0 : 1), f = y ? "after" : "before", d = v ? _.left : _.right
                } else {
                    u || m != l && m != s || m++, f = 0 == m ? "after" : m == t.text.length ? "before" : An(e, o, m - (u ? 1 : 0)).bottom + a <= i == u ? "after" : "before";
                    var b = $n(e, et(n, m, f), "line", t, o);
                    d = b.left, g = i < b.top || i >= b.bottom
                }
                return Gn(n, m = ae(t.text, m, 1), f, g, r - d)
            }

            function Jn(e) {
                if (null != e.cachedTextHeight) return e.cachedTextHeight;
                if (null == Pn) {
                    Pn = M("pre");
                    for (var t = 0; t < 49; ++t) Pn.appendChild(document.createTextNode("x")), Pn.appendChild(M("br"));
                    Pn.appendChild(document.createTextNode("x"))
                }
                N(e.measure, Pn);
                var n = Pn.offsetHeight / 50;
                return 3 < n && (e.cachedTextHeight = n), O(e.measure), n || 1
            }

            function er(e) {
                if (null != e.cachedCharWidth) return e.cachedCharWidth;
                var t = M("span", "xxxxxxxxxx"), n = M("pre", [t]);
                N(e.measure, n);
                var r = t.getBoundingClientRect(), i = (r.right - r.left) / 10;
                return 2 < i && (e.cachedCharWidth = i), i || 10
            }

            function tr(e) {
                for (var t = e.display, n = {}, r = {}, i = t.gutters.clientLeft, o = t.gutters.firstChild, a = 0; o; o = o.nextSibling, ++a) {
                    var s = e.display.gutterSpecs[a].className;
                    n[s] = o.offsetLeft + o.clientLeft + i, r[s] = o.clientWidth
                }
                return {
                    fixedPos: nr(t),
                    gutterTotalWidth: t.gutters.offsetWidth,
                    gutterLeft: n,
                    gutterWidth: r,
                    wrapperWidth: t.wrapper.clientWidth
                }
            }

            function nr(e) {
                return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left
            }

            function rr(e) {
                var t = Jn(e.display), n = e.options.lineWrapping,
                    r = n && Math.max(5, e.display.scroller.clientWidth / er(e.display) - 3);
                return function (i) {
                    if (Ht(e.doc, i)) return 0;
                    var o = 0;
                    if (i.widgets) for (var a = 0; a < i.widgets.length; a++) i.widgets[a].height && (o += i.widgets[a].height);
                    return n ? o + (Math.ceil(i.text.length / r) || 1) * t : o + t
                }
            }

            function ir(e) {
                var t = e.doc, n = rr(e);
                t.iter(function (e) {
                    var t = n(e);
                    t != e.height && Xe(e, t)
                })
            }

            function or(e, t, n, r) {
                var i = e.display;
                if (!n && "true" == Se(t).getAttribute("cm-not-content")) return null;
                var o, a, s = i.lineSpace.getBoundingClientRect();
                try {
                    o = t.clientX - s.left, a = t.clientY - s.top
                } catch (t) {
                    return null
                }
                var l, u = qn(e, o, a);
                if (r && 1 == u.xRel && (l = Ke(e.doc, u.line).text).length == u.ch) {
                    var c = W(l, l.length, e.options.tabSize) - l.length;
                    u = et(u.line, Math.max(0, Math.round((o - kn(e.display).left) / er(e.display)) - c))
                }
                return u
            }

            function ar(e, t) {
                if (t >= e.display.viewTo) return null;
                if ((t -= e.display.viewFrom) < 0) return null;
                for (var n = e.display.view, r = 0; r < n.length; r++) if ((t -= n[r].size) < 0) return r
            }

            function sr(e, t, n, r) {
                null == t && (t = e.doc.first), null == n && (n = e.doc.first + e.doc.size), r || (r = 0);
                var i = e.display;
                if (r && n < i.viewTo && (null == i.updateLineNumbers || i.updateLineNumbers > t) && (i.updateLineNumbers = t), e.curOp.viewChanged = !0, t >= i.viewTo) xt && Wt(e.doc, t) < i.viewTo && ur(e); else if (n <= i.viewFrom) xt && Ft(e.doc, n + r) > i.viewFrom ? ur(e) : (i.viewFrom += r, i.viewTo += r); else if (t <= i.viewFrom && n >= i.viewTo) ur(e); else if (t <= i.viewFrom) {
                    var o = cr(e, n, n + r, 1);
                    o ? (i.view = i.view.slice(o.index), i.viewFrom = o.lineN, i.viewTo += r) : ur(e)
                } else if (n >= i.viewTo) {
                    var a = cr(e, t, t, -1);
                    a ? (i.view = i.view.slice(0, a.index), i.viewTo = a.lineN) : ur(e)
                } else {
                    var s = cr(e, t, t, -1), l = cr(e, n, n + r, 1);
                    s && l ? (i.view = i.view.slice(0, s.index).concat(rn(e, s.lineN, l.lineN)).concat(i.view.slice(l.index)), i.viewTo += r) : ur(e)
                }
                var u = i.externalMeasured;
                u && (n < u.lineN ? u.lineN += r : t < u.lineN + u.size && (i.externalMeasured = null))
            }

            function lr(e, t, n) {
                e.curOp.viewChanged = !0;
                var r = e.display, i = e.display.externalMeasured;
                if (i && t >= i.lineN && t < i.lineN + i.size && (r.externalMeasured = null), !(t < r.viewFrom || t >= r.viewTo)) {
                    var o = r.view[ar(e, t)];
                    if (null != o.node) {
                        var a = o.changes || (o.changes = []);
                        -1 == H(a, n) && a.push(n)
                    }
                }
            }

            function ur(e) {
                e.display.viewFrom = e.display.viewTo = e.doc.first, e.display.view = [], e.display.viewOffset = 0
            }

            function cr(e, t, n, r) {
                var i, o = ar(e, t), a = e.display.view;
                if (!xt || n == e.doc.first + e.doc.size) return {index: o, lineN: n};
                for (var s = e.display.viewFrom, l = 0; l < o; l++) s += a[l].size;
                if (s != t) {
                    if (0 < r) {
                        if (o == a.length - 1) return null;
                        i = s + a[o].size - t, o++
                    } else i = s - t;
                    t += i, n += i
                }
                for (; Wt(e.doc, n) != n;) {
                    if (o == (r < 0 ? 0 : a.length - 1)) return null;
                    n += r * a[o - (r < 0 ? 1 : 0)].size, o += r
                }
                return {index: o, lineN: n}
            }

            function pr(e) {
                for (var t = e.display.view, n = 0, r = 0; r < t.length; r++) {
                    var i = t[r];
                    i.hidden || i.node && !i.changes || ++n
                }
                return n
            }

            function dr(e) {
                e.display.input.showSelection(e.display.input.prepareSelection())
            }

            function fr(e, t) {
                void 0 === t && (t = !0);
                for (var n = e.doc, r = {}, i = r.cursors = document.createDocumentFragment(), o = r.selection = document.createDocumentFragment(), a = 0; a < n.sel.ranges.length; a++) if (t || a != n.sel.primIndex) {
                    var s = n.sel.ranges[a];
                    if (!(s.from().line >= e.display.viewTo || s.to().line < e.display.viewFrom)) {
                        var l = s.empty();
                        (l || e.options.showCursorWhenSelecting) && hr(e, s.head, i), l || mr(e, s, o)
                    }
                }
                return r
            }

            function hr(e, t, n) {
                var r = $n(e, t, "div", null, null, !e.options.singleCursorHeightPerLine),
                    i = n.appendChild(M("div", " ", "CodeMirror-cursor"));
                if (i.style.left = r.left + "px", i.style.top = r.top + "px", i.style.height = Math.max(0, r.bottom - r.top) * e.options.cursorHeight + "px", r.other) {
                    var o = n.appendChild(M("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
                    o.style.display = "", o.style.left = r.other.left + "px", o.style.top = r.other.top + "px", o.style.height = .85 * (r.other.bottom - r.other.top) + "px"
                }
            }

            function _r(e, t) {
                return e.top - t.top || e.left - t.left
            }

            function mr(e, t, n) {
                var r = e.display, i = e.doc, o = document.createDocumentFragment(), a = kn(e.display), s = a.left,
                    l = Math.max(r.sizerWidth, Sn(e) - r.sizer.offsetLeft) - a.right, u = "ltr" == i.direction;

                function c(e, t, n, r) {
                    t < 0 && (t = 0), t = Math.round(t), r = Math.round(r), o.appendChild(M("div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px;\n                             top: " + t + "px; width: " + (null == n ? l - e : n) + "px;\n                             height: " + (r - t) + "px"))
                }

                function p(t, n, r) {
                    var o, a, p = Ke(i, t), d = p.text.length;

                    function f(n, r) {
                        return Vn(e, et(t, n), "div", p, r)
                    }

                    function h(t, n, r) {
                        var i = Yn(e, p, null, t), o = "ltr" == n == ("after" == r) ? "left" : "right";
                        return f("after" == r ? i.begin : i.end - (/\s/.test(p.text.charAt(i.end - 1)) ? 2 : 1), o)[o]
                    }

                    var _ = pe(p, i.direction);
                    return function (e, t, n, r) {
                        if (!e) return r(t, n, "ltr", 0);
                        for (var i = !1, o = 0; o < e.length; ++o) {
                            var a = e[o];
                            (a.from < n && a.to > t || t == n && a.to == t) && (r(Math.max(a.from, t), Math.min(a.to, n), 1 == a.level ? "rtl" : "ltr", o), i = !0)
                        }
                        i || r(t, n, "ltr")
                    }(_, n || 0, null == r ? d : r, function (e, t, i, p) {
                        var m = "ltr" == i, g = f(e, m ? "left" : "right"), v = f(t - 1, m ? "right" : "left"),
                            y = null == n && 0 == e, b = null == r && t == d, w = 0 == p, x = !_ || p == _.length - 1;
                        if (v.top - g.top <= 3) {
                            var k = (u ? b : y) && x, C = (u ? y : b) && w ? s : (m ? g : v).left,
                                S = k ? l : (m ? v : g).right;
                            c(C, g.top, S - C, g.bottom)
                        } else {
                            var E, T, O, N;
                            N = m ? (E = u && y && w ? s : g.left, T = u ? l : h(e, i, "before"), O = u ? s : h(t, i, "after"), u && b && x ? l : v.right) : (E = u ? h(e, i, "before") : s, T = !u && y && w ? l : g.right, O = !u && b && x ? s : v.left, u ? h(t, i, "after") : l), c(E, g.top, T - E, g.bottom), g.bottom < v.top && c(s, g.bottom, null, v.top), c(O, v.top, N - O, v.bottom)
                        }
                        (!o || _r(g, o) < 0) && (o = g), _r(v, o) < 0 && (o = v), (!a || _r(g, a) < 0) && (a = g), _r(v, a) < 0 && (a = v)
                    }), {start: o, end: a}
                }

                var d = t.from(), f = t.to();
                if (d.line == f.line) p(d.line, d.ch, f.ch); else {
                    var h = Ke(i, d.line), _ = Ke(i, f.line), m = jt(h) == jt(_),
                        g = p(d.line, d.ch, m ? h.text.length + 1 : null).end, v = p(f.line, m ? 0 : null, f.ch).start;
                    m && (g.top < v.top - 2 ? (c(g.right, g.top, null, g.bottom), c(s, v.top, v.left, v.bottom)) : c(g.right, g.top, v.left - g.right, g.bottom)), g.bottom < v.top && c(s, g.bottom, null, v.top)
                }
                n.appendChild(o)
            }

            function gr(e) {
                if (e.state.focused) {
                    var t = e.display;
                    clearInterval(t.blinker);
                    var n = !0;
                    t.cursorDiv.style.visibility = "", 0 < e.options.cursorBlinkRate ? t.blinker = setInterval(function () {
                        return t.cursorDiv.style.visibility = (n = !n) ? "" : "hidden"
                    }, e.options.cursorBlinkRate) : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = "hidden")
                }
            }

            function vr(e) {
                e.state.focused || (e.display.input.focus(), br(e))
            }

            function yr(e) {
                e.state.delayingBlurEvent = !0, setTimeout(function () {
                    e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1, wr(e))
                }, 100)
            }

            function br(e, t) {
                e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1), "nocursor" != e.options.readOnly && (e.state.focused || (me(e, "focus", e, t), e.state.focused = !0, R(e.display.wrapper, "CodeMirror-focused"), e.curOp || e.display.selForContextMenu == e.doc.sel || (e.display.input.reset(), u && setTimeout(function () {
                    return e.display.input.reset(!0)
                }, 20)), e.display.input.receivedFocus()), gr(e))
            }

            function wr(e, t) {
                e.state.delayingBlurEvent || (e.state.focused && (me(e, "blur", e, t), e.state.focused = !1, T(e.display.wrapper, "CodeMirror-focused")), clearInterval(e.display.blinker), setTimeout(function () {
                    e.state.focused || (e.display.shift = !1)
                }, 150))
            }

            function xr(e) {
                for (var t = e.display, n = t.lineDiv.offsetTop, r = 0; r < t.view.length; r++) {
                    var i = t.view[r], o = e.options.lineWrapping, a = void 0, u = 0;
                    if (!i.hidden) {
                        if (s && l < 8) {
                            var c = i.node.offsetTop + i.node.offsetHeight;
                            a = c - n, n = c
                        } else {
                            var p = i.node.getBoundingClientRect();
                            a = p.bottom - p.top, !o && i.text.firstChild && (u = i.text.firstChild.getBoundingClientRect().right - p.left - 1)
                        }
                        var d = i.line.height - a;
                        if ((.005 < d || d < -.005) && (Xe(i.line, a), kr(i.line), i.rest)) for (var f = 0; f < i.rest.length; f++) kr(i.rest[f]);
                        if (u > e.display.sizerWidth) {
                            var h = Math.ceil(u / er(e.display));
                            h > e.display.maxLineLength && (e.display.maxLineLength = h, e.display.maxLine = i.line, e.display.maxLineChanged = !0)
                        }
                    }
                }
            }

            function kr(e) {
                if (e.widgets) for (var t = 0; t < e.widgets.length; ++t) {
                    var n = e.widgets[t], r = n.node.parentNode;
                    r && (n.height = r.offsetHeight)
                }
            }

            function Cr(e, t, n) {
                var r = n && null != n.top ? Math.max(0, n.top) : e.scroller.scrollTop;
                r = Math.floor(r - wn(e));
                var i = n && null != n.bottom ? n.bottom : r + e.wrapper.clientHeight, o = Qe(t, r), a = Qe(t, i);
                if (n && n.ensure) {
                    var s = n.ensure.from.line, l = n.ensure.to.line;
                    s < o ? a = Qe(t, Bt(Ke(t, o = s)) + e.wrapper.clientHeight) : Math.min(l, t.lastLine()) >= a && (o = Qe(t, Bt(Ke(t, l)) - e.wrapper.clientHeight), a = l)
                }
                return {from: o, to: Math.max(a, o + 1)}
            }

            function Sr(e, t) {
                var n = e.display, r = Jn(e.display);
                t.top < 0 && (t.top = 0);
                var i = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : n.scroller.scrollTop, o = En(e),
                    a = {};
                t.bottom - t.top > o && (t.bottom = t.top + o);
                var s = e.doc.height + xn(n), l = t.top < r, u = t.bottom > s - r;
                if (t.top < i) a.scrollTop = l ? 0 : t.top; else if (t.bottom > i + o) {
                    var c = Math.min(t.top, (u ? s : t.bottom) - o);
                    c != i && (a.scrollTop = c)
                }
                var p = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : n.scroller.scrollLeft,
                    d = Sn(e) - (e.options.fixedGutter ? n.gutters.offsetWidth : 0), f = t.right - t.left > d;
                return f && (t.right = t.left + d), t.left < 10 ? a.scrollLeft = 0 : t.left < p ? a.scrollLeft = Math.max(0, t.left - (f ? 0 : 10)) : t.right > d + p - 3 && (a.scrollLeft = t.right + (f ? 0 : 10) - d), a
            }

            function Er(e, t) {
                null != t && (Nr(e), e.curOp.scrollTop = (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) + t)
            }

            function Tr(e) {
                Nr(e);
                var t = e.getCursor();
                e.curOp.scrollToPos = {from: t, to: t, margin: e.options.cursorScrollMargin}
            }

            function Or(e, t, n) {
                null == t && null == n || Nr(e), null != t && (e.curOp.scrollLeft = t), null != n && (e.curOp.scrollTop = n)
            }

            function Nr(e) {
                var t = e.curOp.scrollToPos;
                t && (e.curOp.scrollToPos = null, Mr(e, Kn(e, t.from), Kn(e, t.to), t.margin))
            }

            function Mr(e, t, n, r) {
                var i = Sr(e, {
                    left: Math.min(t.left, n.left),
                    top: Math.min(t.top, n.top) - r,
                    right: Math.max(t.right, n.right),
                    bottom: Math.max(t.bottom, n.bottom) + r
                });
                Or(e, i.scrollLeft, i.scrollTop)
            }

            function Ar(e, t) {
                Math.abs(e.doc.scrollTop - t) < 2 || (n || ri(e, {top: t}), Pr(e, t, !0), n && ri(e), Zr(e, 100))
            }

            function Pr(e, t, n) {
                t = Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, t), (e.display.scroller.scrollTop != t || n) && (e.doc.scrollTop = t, e.display.scrollbars.setScrollTop(t), e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t))
            }

            function Lr(e, t, n, r) {
                t = Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth), (n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) && !r || (e.doc.scrollLeft = t, ai(e), e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t), e.display.scrollbars.setScrollLeft(t))
            }

            function Rr(e) {
                var t = e.display, n = t.gutters.offsetWidth, r = Math.round(e.doc.height + xn(e.display));
                return {
                    clientHeight: t.scroller.clientHeight,
                    viewHeight: t.wrapper.clientHeight,
                    scrollWidth: t.scroller.scrollWidth,
                    clientWidth: t.scroller.clientWidth,
                    viewWidth: t.wrapper.clientWidth,
                    barLeft: e.options.fixedGutter ? n : 0,
                    docHeight: r,
                    scrollHeight: r + Cn(e) + t.barHeight,
                    nativeBarWidth: t.nativeBarWidth,
                    gutterWidth: n
                }
            }

            var Dr = function (e, t, n) {
                this.cm = n;
                var r = this.vert = M("div", [M("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"),
                    i = this.horiz = M("div", [M("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
                r.tabIndex = i.tabIndex = -1, e(r), e(i), fe(r, "scroll", function () {
                    r.clientHeight && t(r.scrollTop, "vertical")
                }), fe(i, "scroll", function () {
                    i.clientWidth && t(i.scrollLeft, "horizontal")
                }), this.checkedZeroWidth = !1, s && l < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px")
            };
            Dr.prototype.update = function (e) {
                var t = e.scrollWidth > e.clientWidth + 1, n = e.scrollHeight > e.clientHeight + 1,
                    r = e.nativeBarWidth;
                if (n) {
                    this.vert.style.display = "block", this.vert.style.bottom = t ? r + "px" : "0";
                    var i = e.viewHeight - (t ? r : 0);
                    this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + i) + "px"
                } else this.vert.style.display = "", this.vert.firstChild.style.height = "0";
                if (t) {
                    this.horiz.style.display = "block", this.horiz.style.right = n ? r + "px" : "0", this.horiz.style.left = e.barLeft + "px";
                    var o = e.viewWidth - e.barLeft - (n ? r : 0);
                    this.horiz.firstChild.style.width = Math.max(0, e.scrollWidth - e.clientWidth + o) + "px"
                } else this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";
                return !this.checkedZeroWidth && 0 < e.clientHeight && (0 == r && this.zeroWidthHack(), this.checkedZeroWidth = !0), {
                    right: n ? r : 0,
                    bottom: t ? r : 0
                }
            }, Dr.prototype.setScrollLeft = function (e) {
                this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz")
            }, Dr.prototype.setScrollTop = function (e) {
                this.vert.scrollTop != e && (this.vert.scrollTop = e), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert")
            }, Dr.prototype.zeroWidthHack = function () {
                var e = y && !h ? "12px" : "18px";
                this.horiz.style.height = this.vert.style.width = e, this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none", this.disableHoriz = new F, this.disableVert = new F
            }, Dr.prototype.enableZeroWidthBar = function (e, t, n) {
                e.style.pointerEvents = "auto", t.set(1e3, function r() {
                    var i = e.getBoundingClientRect();
                    ("vert" == n ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2) : document.elementFromPoint((i.right + i.left) / 2, i.bottom - 1)) != e ? e.style.pointerEvents = "none" : t.set(1e3, r)
                })
            }, Dr.prototype.clear = function () {
                var e = this.horiz.parentNode;
                e.removeChild(this.horiz), e.removeChild(this.vert)
            };
            var Ir = function () {
            };

            function zr(e, t) {
                t || (t = Rr(e));
                var n = e.display.barWidth, r = e.display.barHeight;
                jr(e, t);
                for (var i = 0; i < 4 && n != e.display.barWidth || r != e.display.barHeight; i++) n != e.display.barWidth && e.options.lineWrapping && xr(e), jr(e, Rr(e)), n = e.display.barWidth, r = e.display.barHeight
            }

            function jr(e, t) {
                var n = e.display, r = n.scrollbars.update(t);
                n.sizer.style.paddingRight = (n.barWidth = r.right) + "px", n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + "px", n.heightForcer.style.borderBottom = r.bottom + "px solid transparent", r.right && r.bottom ? (n.scrollbarFiller.style.display = "block", n.scrollbarFiller.style.height = r.bottom + "px", n.scrollbarFiller.style.width = r.right + "px") : n.scrollbarFiller.style.display = "", r.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (n.gutterFiller.style.display = "block", n.gutterFiller.style.height = r.bottom + "px", n.gutterFiller.style.width = t.gutterWidth + "px") : n.gutterFiller.style.display = ""
            }

            Ir.prototype.update = function () {
                return {bottom: 0, right: 0}
            }, Ir.prototype.setScrollLeft = function () {
            }, Ir.prototype.setScrollTop = function () {
            }, Ir.prototype.clear = function () {
            };
            var Wr = {native: Dr, null: Ir};

            function Fr(e) {
                e.display.scrollbars && (e.display.scrollbars.clear(), e.display.scrollbars.addClass && T(e.display.wrapper, e.display.scrollbars.addClass)), e.display.scrollbars = new Wr[e.options.scrollbarStyle](function (t) {
                    e.display.wrapper.insertBefore(t, e.display.scrollbarFiller), fe(t, "mousedown", function () {
                        e.state.focused && setTimeout(function () {
                            return e.display.input.focus()
                        }, 0)
                    }), t.setAttribute("cm-not-content", "true")
                }, function (t, n) {
                    "horizontal" == n ? Lr(e, t) : Ar(e, t)
                }, e), e.display.scrollbars.addClass && R(e.display.wrapper, e.display.scrollbars.addClass)
            }

            var Hr = 0;

            function Ur(e) {
                var t;
                e.curOp = {
                    cm: e,
                    viewChanged: !1,
                    startHeight: e.doc.height,
                    forceUpdate: !1,
                    updateInput: 0,
                    typing: !1,
                    changeObjs: null,
                    cursorActivityHandlers: null,
                    cursorActivityCalled: 0,
                    selectionChanged: !1,
                    updateMaxLine: !1,
                    scrollLeft: null,
                    scrollTop: null,
                    scrollToPos: null,
                    focus: !1,
                    id: ++Hr
                }, t = e.curOp, on ? on.ops.push(t) : t.ownsGroup = on = {ops: [t], delayedCallbacks: []}
            }

            function Br(e) {
                var t = e.curOp;
                t && function (e, t) {
                    var n = e.ownsGroup;
                    if (n) try {
                        !function (e) {
                            var t = e.delayedCallbacks, n = 0;
                            do {
                                for (; n < t.length; n++) t[n].call(null);
                                for (var r = 0; r < e.ops.length; r++) {
                                    var i = e.ops[r];
                                    if (i.cursorActivityHandlers) for (; i.cursorActivityCalled < i.cursorActivityHandlers.length;) i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm)
                                }
                            } while (n < t.length)
                        }(n)
                    } finally {
                        on = null, function (e) {
                            for (var t = 0; t < e.ops.length; t++) e.ops[t].cm.curOp = null;
                            !function (e) {
                                for (var t = e.ops, n = 0; n < t.length; n++) Vr(t[n]);
                                for (var r = 0; r < t.length; r++) (i = t[r]).updatedDisplay = i.mustUpdate && ti(i.cm, i.update);
                                for (var i, o = 0; o < t.length; o++) $r(t[o]);
                                for (var a = 0; a < t.length; a++) Kr(t[a]);
                                for (var s = 0; s < t.length; s++) Gr(t[s])
                            }(e)
                        }(n)
                    }
                }(t)
            }

            function Vr(e) {
                var t, n, r = e.cm, i = r.display;
                !(n = (t = r).display).scrollbarsClipped && n.scroller.offsetWidth && (n.nativeBarWidth = n.scroller.offsetWidth - n.scroller.clientWidth, n.heightForcer.style.height = Cn(t) + "px", n.sizer.style.marginBottom = -n.nativeBarWidth + "px", n.sizer.style.borderRightWidth = Cn(t) + "px", n.scrollbarsClipped = !0), e.updateMaxLine && $t(r), e.mustUpdate = e.viewChanged || e.forceUpdate || null != e.scrollTop || e.scrollToPos && (e.scrollToPos.from.line < i.viewFrom || e.scrollToPos.to.line >= i.viewTo) || i.maxLineChanged && r.options.lineWrapping, e.update = e.mustUpdate && new ei(r, e.mustUpdate && {
                    top: e.scrollTop,
                    ensure: e.scrollToPos
                }, e.forceUpdate)
            }

            function $r(e) {
                var t = e.cm, n = t.display;
                e.updatedDisplay && xr(t), e.barMeasure = Rr(t), n.maxLineChanged && !t.options.lineWrapping && (e.adjustWidthTo = On(t, n.maxLine, n.maxLine.text.length).left + 3, t.display.sizerWidth = e.adjustWidthTo, e.barMeasure.scrollWidth = Math.max(n.scroller.clientWidth, n.sizer.offsetLeft + e.adjustWidthTo + Cn(t) + t.display.barWidth), e.maxScrollLeft = Math.max(0, n.sizer.offsetLeft + e.adjustWidthTo - Sn(t))), (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = n.input.prepareSelection())
            }

            function Kr(e) {
                var t = e.cm;
                null != e.adjustWidthTo && (t.display.sizer.style.minWidth = e.adjustWidthTo + "px", e.maxScrollLeft < t.doc.scrollLeft && Lr(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0), t.display.maxLineChanged = !1);
                var n = e.focus && e.focus == L();
                e.preparedSelection && t.display.input.showSelection(e.preparedSelection, n), (e.updatedDisplay || e.startHeight != t.doc.height) && zr(t, e.barMeasure), e.updatedDisplay && oi(t, e.barMeasure), e.selectionChanged && gr(t), t.state.focused && e.updateInput && t.display.input.reset(e.typing), n && vr(e.cm)
            }

            function Gr(e) {
                var t = e.cm, n = t.display, r = t.doc;
                e.updatedDisplay && ni(t, e.update), null == n.wheelStartX || null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos || (n.wheelStartX = n.wheelStartY = null), null != e.scrollTop && Pr(t, e.scrollTop, e.forceScroll), null != e.scrollLeft && Lr(t, e.scrollLeft, !0, !0), e.scrollToPos && function (e, t) {
                    if (!ge(e, "scrollCursorIntoView")) {
                        var n = e.display, r = n.sizer.getBoundingClientRect(), i = null;
                        if (t.top + r.top < 0 ? i = !0 : t.bottom + r.top > (window.innerHeight || document.documentElement.clientHeight) && (i = !1), null != i && !_) {
                            var o = M("div", "​", null, "position: absolute;\n                         top: " + (t.top - n.viewOffset - wn(e.display)) + "px;\n                         height: " + (t.bottom - t.top + Cn(e) + n.barHeight) + "px;\n                         left: " + t.left + "px; width: " + Math.max(2, t.right - t.left) + "px;");
                            e.display.lineSpace.appendChild(o), o.scrollIntoView(i), e.display.lineSpace.removeChild(o)
                        }
                    }
                }(t, function (e, t, n, r) {
                    var i;
                    null == r && (r = 0), e.options.lineWrapping || t != n || (n = "before" == (t = t.ch ? et(t.line, "before" == t.sticky ? t.ch - 1 : t.ch, "after") : t).sticky ? et(t.line, t.ch + 1, "before") : t);
                    for (var o = 0; o < 5; o++) {
                        var a = !1, s = $n(e, t), l = n && n != t ? $n(e, n) : s, u = Sr(e, i = {
                            left: Math.min(s.left, l.left),
                            top: Math.min(s.top, l.top) - r,
                            right: Math.max(s.left, l.left),
                            bottom: Math.max(s.bottom, l.bottom) + r
                        }), c = e.doc.scrollTop, p = e.doc.scrollLeft;
                        if (null != u.scrollTop && (Ar(e, u.scrollTop), 1 < Math.abs(e.doc.scrollTop - c) && (a = !0)), null != u.scrollLeft && (Lr(e, u.scrollLeft), 1 < Math.abs(e.doc.scrollLeft - p) && (a = !0)), !a) break
                    }
                    return i
                }(t, st(r, e.scrollToPos.from), st(r, e.scrollToPos.to), e.scrollToPos.margin));
                var i = e.maybeHiddenMarkers, o = e.maybeUnhiddenMarkers;
                if (i) for (var a = 0; a < i.length; ++a) i[a].lines.length || me(i[a], "hide");
                if (o) for (var s = 0; s < o.length; ++s) o[s].lines.length && me(o[s], "unhide");
                n.wrapper.offsetHeight && (r.scrollTop = t.display.scroller.scrollTop), e.changeObjs && me(t, "changes", t, e.changeObjs), e.update && e.update.finish()
            }

            function qr(e, t) {
                if (e.curOp) return t();
                Ur(e);
                try {
                    return t()
                } finally {
                    Br(e)
                }
            }

            function Xr(e, t) {
                return function () {
                    if (e.curOp) return t.apply(e, arguments);
                    Ur(e);
                    try {
                        return t.apply(e, arguments)
                    } finally {
                        Br(e)
                    }
                }
            }

            function Yr(e) {
                return function () {
                    if (this.curOp) return e.apply(this, arguments);
                    Ur(this);
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        Br(this)
                    }
                }
            }

            function Qr(e) {
                return function () {
                    var t = this.cm;
                    if (!t || t.curOp) return e.apply(this, arguments);
                    Ur(t);
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        Br(t)
                    }
                }
            }

            function Zr(e, t) {
                e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(t, z(Jr, e))
            }

            function Jr(e) {
                var t = e.doc;
                if (!(t.highlightFrontier >= e.display.viewTo)) {
                    var n = +new Date + e.options.workTime, r = ft(e, t.highlightFrontier), i = [];
                    t.iter(r.line, Math.min(t.first + t.size, e.display.viewTo + 500), function (o) {
                        if (r.line >= e.display.viewFrom) {
                            var a = o.styles,
                                s = o.text.length > e.options.maxHighlightLength ? Ue(t.mode, r.state) : null,
                                l = pt(e, o, r, !0);
                            s && (r.state = s), o.styles = l.styles;
                            var u = o.styleClasses, c = l.classes;
                            c ? o.styleClasses = c : u && (o.styleClasses = null);
                            for (var p = !a || a.length != o.styles.length || u != c && (!u || !c || u.bgClass != c.bgClass || u.textClass != c.textClass), d = 0; !p && d < a.length; ++d) p = a[d] != o.styles[d];
                            p && i.push(r.line), o.stateAfter = r.save(), r.nextLine()
                        } else o.text.length <= e.options.maxHighlightLength && ht(e, o.text, r), o.stateAfter = r.line % 5 == 0 ? r.save() : null, r.nextLine();
                        if (+new Date > n) return Zr(e, e.options.workDelay), !0
                    }), t.highlightFrontier = r.line, t.modeFrontier = Math.max(t.modeFrontier, r.line), i.length && qr(e, function () {
                        for (var t = 0; t < i.length; t++) lr(e, i[t], "text")
                    })
                }
            }

            var ei = function (e, t, n) {
                var r = e.display;
                this.viewport = t, this.visible = Cr(r, e.doc, t), this.editorIsHidden = !r.wrapper.offsetWidth, this.wrapperHeight = r.wrapper.clientHeight, this.wrapperWidth = r.wrapper.clientWidth, this.oldDisplayWidth = Sn(e), this.force = n, this.dims = tr(e), this.events = []
            };

            function ti(e, t) {
                var n = e.display, r = e.doc;
                if (t.editorIsHidden) return ur(e), !1;
                if (!t.force && t.visible.from >= n.viewFrom && t.visible.to <= n.viewTo && (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo) && n.renderedView == n.view && 0 == pr(e)) return !1;
                si(e) && (ur(e), t.dims = tr(e));
                var i = r.first + r.size, o = Math.max(t.visible.from - e.options.viewportMargin, r.first),
                    a = Math.min(i, t.visible.to + e.options.viewportMargin);
                n.viewFrom < o && o - n.viewFrom < 20 && (o = Math.max(r.first, n.viewFrom)), n.viewTo > a && n.viewTo - a < 20 && (a = Math.min(i, n.viewTo)), xt && (o = Wt(e.doc, o), a = Ft(e.doc, a));
                var s, l, c, p,
                    d = o != n.viewFrom || a != n.viewTo || n.lastWrapHeight != t.wrapperHeight || n.lastWrapWidth != t.wrapperWidth;
                l = o, c = a, 0 == (p = (s = e).display).view.length || l >= p.viewTo || c <= p.viewFrom ? (p.view = rn(s, l, c), p.viewFrom = l) : (p.viewFrom > l ? p.view = rn(s, l, p.viewFrom).concat(p.view) : p.viewFrom < l && (p.view = p.view.slice(ar(s, l))), p.viewFrom = l, p.viewTo < c ? p.view = p.view.concat(rn(s, p.viewTo, c)) : p.viewTo > c && (p.view = p.view.slice(0, ar(s, c)))), p.viewTo = c, n.viewOffset = Bt(Ke(e.doc, n.viewFrom)), e.display.mover.style.top = n.viewOffset + "px";
                var f = pr(e);
                if (!d && 0 == f && !t.force && n.renderedView == n.view && (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo)) return !1;
                var h = function (e) {
                    if (e.hasFocus()) return null;
                    var t = L();
                    if (!t || !P(e.display.lineDiv, t)) return null;
                    var n = {activeElt: t};
                    if (window.getSelection) {
                        var r = window.getSelection();
                        r.anchorNode && r.extend && P(e.display.lineDiv, r.anchorNode) && (n.anchorNode = r.anchorNode, n.anchorOffset = r.anchorOffset, n.focusNode = r.focusNode, n.focusOffset = r.focusOffset)
                    }
                    return n
                }(e);
                return 4 < f && (n.lineDiv.style.display = "none"), function (e, t, n) {
                    var r, i, o, a, s, l = e.display, c = e.options.lineNumbers, p = l.lineDiv, d = p.firstChild;

                    function f(t) {
                        var n = t.nextSibling;
                        return u && y && e.display.currentWheelTarget == t ? t.style.display = "none" : t.parentNode.removeChild(t), n
                    }

                    for (var h = l.view, _ = l.viewFrom, m = 0; m < h.length; m++) {
                        var g = h[m];
                        if (g.hidden) ; else if (g.node && g.node.parentNode == p) {
                            for (; d != g.node;) d = f(d);
                            var v = c && null != t && t <= _ && g.lineNumber;
                            g.changes && (-1 < H(g.changes, "gutter") && (v = !1), un(e, g, _, n)), v && (O(g.lineNumber), g.lineNumber.appendChild(document.createTextNode(Je(e.options, _)))), d = g.node.nextSibling
                        } else {
                            var b = (o = _, a = n, s = pn(r = e, i = g), i.text = i.node = s.pre, s.bgClass && (i.bgClass = s.bgClass), s.textClass && (i.textClass = s.textClass), fn(r, i), hn(r, i, o, a), mn(r, i, a), i.node);
                            p.insertBefore(b, d)
                        }
                        _ += g.size
                    }
                    for (; d;) d = f(d)
                }(e, n.updateLineNumbers, t.dims), 4 < f && (n.lineDiv.style.display = ""), n.renderedView = n.view, function (e) {
                    if (e && e.activeElt && e.activeElt != L() && (e.activeElt.focus(), e.anchorNode && P(document.body, e.anchorNode) && P(document.body, e.focusNode))) {
                        var t = window.getSelection(), n = document.createRange();
                        n.setEnd(e.anchorNode, e.anchorOffset), n.collapse(!1), t.removeAllRanges(), t.addRange(n), t.extend(e.focusNode, e.focusOffset)
                    }
                }(h), O(n.cursorDiv), O(n.selectionDiv), n.gutters.style.height = n.sizer.style.minHeight = 0, d && (n.lastWrapHeight = t.wrapperHeight, n.lastWrapWidth = t.wrapperWidth, Zr(e, 400)), !(n.updateLineNumbers = null)
            }

            function ni(e, t) {
                for (var n = t.viewport, r = !0; (r && e.options.lineWrapping && t.oldDisplayWidth != Sn(e) || (n && null != n.top && (n = {top: Math.min(e.doc.height + xn(e.display) - En(e), n.top)}), t.visible = Cr(e.display, e.doc, n), !(t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo))) && ti(e, t); r = !1) {
                    xr(e);
                    var i = Rr(e);
                    dr(e), zr(e, i), oi(e, i), t.force = !1
                }
                t.signal(e, "update", e), e.display.viewFrom == e.display.reportedViewFrom && e.display.viewTo == e.display.reportedViewTo || (t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo), e.display.reportedViewFrom = e.display.viewFrom, e.display.reportedViewTo = e.display.viewTo)
            }

            function ri(e, t) {
                var n = new ei(e, t);
                if (ti(e, n)) {
                    xr(e), ni(e, n);
                    var r = Rr(e);
                    dr(e), zr(e, r), oi(e, r), n.finish()
                }
            }

            function ii(e) {
                var t = e.gutters.offsetWidth;
                e.sizer.style.marginLeft = t + "px"
            }

            function oi(e, t) {
                e.display.sizer.style.minHeight = t.docHeight + "px", e.display.heightForcer.style.top = t.docHeight + "px", e.display.gutters.style.height = t.docHeight + e.display.barHeight + Cn(e) + "px"
            }

            function ai(e) {
                var t = e.display, n = t.view;
                if (t.alignWidgets || t.gutters.firstChild && e.options.fixedGutter) {
                    for (var r = nr(t) - t.scroller.scrollLeft + e.doc.scrollLeft, i = t.gutters.offsetWidth, o = r + "px", a = 0; a < n.length; a++) if (!n[a].hidden) {
                        e.options.fixedGutter && (n[a].gutter && (n[a].gutter.style.left = o), n[a].gutterBackground && (n[a].gutterBackground.style.left = o));
                        var s = n[a].alignable;
                        if (s) for (var l = 0; l < s.length; l++) s[l].style.left = o
                    }
                    e.options.fixedGutter && (t.gutters.style.left = r + i + "px")
                }
            }

            function si(e) {
                if (!e.options.lineNumbers) return !1;
                var t = e.doc, n = Je(e.options, t.first + t.size - 1), r = e.display;
                if (n.length == r.lineNumChars) return !1;
                var i = r.measure.appendChild(M("div", [M("div", n)], "CodeMirror-linenumber CodeMirror-gutter-elt")),
                    o = i.firstChild.offsetWidth, a = i.offsetWidth - o;
                return r.lineGutter.style.width = "", r.lineNumInnerWidth = Math.max(o, r.lineGutter.offsetWidth - a) + 1, r.lineNumWidth = r.lineNumInnerWidth + a, r.lineNumChars = r.lineNumInnerWidth ? n.length : -1, r.lineGutter.style.width = r.lineNumWidth + "px", ii(e.display), !0
            }

            function li(e, t) {
                for (var n = [], r = !1, i = 0; i < e.length; i++) {
                    var o = e[i], a = null;
                    if ("string" != typeof o && (a = o.style, o = o.className), "CodeMirror-linenumbers" == o) {
                        if (!t) continue;
                        r = !0
                    }
                    n.push({className: o, style: a})
                }
                return t && !r && n.push({className: "CodeMirror-linenumbers", style: null}), n
            }

            function ui(e) {
                var t = e.gutters, n = e.gutterSpecs;
                O(t), e.lineGutter = null;
                for (var r = 0; r < n.length; ++r) {
                    var i = n[r], o = i.className, a = i.style,
                        s = t.appendChild(M("div", null, "CodeMirror-gutter " + o));
                    a && (s.style.cssText = a), "CodeMirror-linenumbers" == o && ((e.lineGutter = s).style.width = (e.lineNumWidth || 1) + "px")
                }
                t.style.display = n.length ? "" : "none", ii(e)
            }

            function ci(e) {
                ui(e.display), sr(e), ai(e)
            }

            function pi(e, t, r, i) {
                var o = this;
                this.input = r, o.scrollbarFiller = M("div", null, "CodeMirror-scrollbar-filler"), o.scrollbarFiller.setAttribute("cm-not-content", "true"), o.gutterFiller = M("div", null, "CodeMirror-gutter-filler"), o.gutterFiller.setAttribute("cm-not-content", "true"), o.lineDiv = A("div", null, "CodeMirror-code"), o.selectionDiv = M("div", null, null, "position: relative; z-index: 1"), o.cursorDiv = M("div", null, "CodeMirror-cursors"), o.measure = M("div", null, "CodeMirror-measure"), o.lineMeasure = M("div", null, "CodeMirror-measure"), o.lineSpace = A("div", [o.measure, o.lineMeasure, o.selectionDiv, o.cursorDiv, o.lineDiv], null, "position: relative; outline: none");
                var a = A("div", [o.lineSpace], "CodeMirror-lines");
                o.mover = M("div", [a], null, "position: relative"), o.sizer = M("div", [o.mover], "CodeMirror-sizer"), o.sizerWidth = null, o.heightForcer = M("div", null, null, "position: absolute; height: " + U + "px; width: 1px;"), o.gutters = M("div", null, "CodeMirror-gutters"), o.lineGutter = null, o.scroller = M("div", [o.sizer, o.heightForcer, o.gutters], "CodeMirror-scroll"), o.scroller.setAttribute("tabIndex", "-1"), o.wrapper = M("div", [o.scrollbarFiller, o.gutterFiller, o.scroller], "CodeMirror"), s && l < 8 && (o.gutters.style.zIndex = -1, o.scroller.style.paddingRight = 0), u || n && v || (o.scroller.draggable = !0), e && (e.appendChild ? e.appendChild(o.wrapper) : e(o.wrapper)), o.viewFrom = o.viewTo = t.first, o.reportedViewFrom = o.reportedViewTo = t.first, o.view = [], o.renderedView = null, o.externalMeasured = null, o.viewOffset = 0, o.lastWrapHeight = o.lastWrapWidth = 0, o.updateLineNumbers = null, o.nativeBarWidth = o.barHeight = o.barWidth = 0, o.scrollbarsClipped = !1, o.lineNumWidth = o.lineNumInnerWidth = o.lineNumChars = null, o.alignWidgets = !1, o.cachedCharWidth = o.cachedTextHeight = o.cachedPaddingH = null, o.maxLine = null, o.maxLineLength = 0, o.maxLineChanged = !1, o.wheelDX = o.wheelDY = o.wheelStartX = o.wheelStartY = null, o.shift = !1, o.selForContextMenu = null, o.activeTouch = null, o.gutterSpecs = li(i.gutters, i.lineNumbers), ui(o), r.init(o)
            }

            ei.prototype.signal = function (e, t) {
                ye(e, t) && this.events.push(arguments)
            }, ei.prototype.finish = function () {
                for (var e = 0; e < this.events.length; e++) me.apply(null, this.events[e])
            };
            var di = 0, fi = null;

            function hi(e) {
                var t = e.wheelDeltaX, n = e.wheelDeltaY;
                return null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail), null == n && e.detail && e.axis == e.VERTICAL_AXIS ? n = e.detail : null == n && (n = e.wheelDelta), {
                    x: t,
                    y: n
                }
            }

            function _i(e, t) {
                var r = hi(t), i = r.x, o = r.y, a = e.display, s = a.scroller, l = s.scrollWidth > s.clientWidth,
                    c = s.scrollHeight > s.clientHeight;
                if (i && l || o && c) {
                    if (o && y && u) e:for (var p = t.target, f = a.view; p != s; p = p.parentNode) for (var h = 0; h < f.length; h++) if (f[h].node == p) {
                        e.display.currentWheelTarget = p;
                        break e
                    }
                    if (i && !n && !d && null != fi) return o && c && Ar(e, Math.max(0, s.scrollTop + o * fi)), Lr(e, Math.max(0, s.scrollLeft + i * fi)), (!o || o && c) && we(t), void (a.wheelStartX = null);
                    if (o && null != fi) {
                        var _ = o * fi, m = e.doc.scrollTop, g = m + a.wrapper.clientHeight;
                        _ < 0 ? m = Math.max(0, m + _ - 50) : g = Math.min(e.doc.height, g + _ + 50), ri(e, {
                            top: m,
                            bottom: g
                        })
                    }
                    di < 20 && (null == a.wheelStartX ? (a.wheelStartX = s.scrollLeft, a.wheelStartY = s.scrollTop, a.wheelDX = i, a.wheelDY = o, setTimeout(function () {
                        if (null != a.wheelStartX) {
                            var e = s.scrollLeft - a.wheelStartX, t = s.scrollTop - a.wheelStartY,
                                n = t && a.wheelDY && t / a.wheelDY || e && a.wheelDX && e / a.wheelDX;
                            a.wheelStartX = a.wheelStartY = null, n && (fi = (fi * di + n) / (di + 1), ++di)
                        }
                    }, 200)) : (a.wheelDX += i, a.wheelDY += o))
                }
            }

            s ? fi = -.53 : n ? fi = 15 : p ? fi = -.7 : f && (fi = -1 / 3);
            var mi = function (e, t) {
                this.ranges = e, this.primIndex = t
            };
            mi.prototype.primary = function () {
                return this.ranges[this.primIndex]
            }, mi.prototype.equals = function (e) {
                if (e == this) return !0;
                if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length) return !1;
                for (var t = 0; t < this.ranges.length; t++) {
                    var n = this.ranges[t], r = e.ranges[t];
                    if (!nt(n.anchor, r.anchor) || !nt(n.head, r.head)) return !1
                }
                return !0
            }, mi.prototype.deepCopy = function () {
                for (var e = [], t = 0; t < this.ranges.length; t++) e[t] = new gi(rt(this.ranges[t].anchor), rt(this.ranges[t].head));
                return new mi(e, this.primIndex)
            }, mi.prototype.somethingSelected = function () {
                for (var e = 0; e < this.ranges.length; e++) if (!this.ranges[e].empty()) return !0;
                return !1
            }, mi.prototype.contains = function (e, t) {
                t || (t = e);
                for (var n = 0; n < this.ranges.length; n++) {
                    var r = this.ranges[n];
                    if (0 <= tt(t, r.from()) && tt(e, r.to()) <= 0) return n
                }
                return -1
            };
            var gi = function (e, t) {
                this.anchor = e, this.head = t
            };

            function vi(e, t, n) {
                var r = e && e.options.selectionsMayTouch, i = t[n];
                t.sort(function (e, t) {
                    return tt(e.from(), t.from())
                }), n = H(t, i);
                for (var o = 1; o < t.length; o++) {
                    var a = t[o], s = t[o - 1], l = tt(s.to(), a.from());
                    if (r && !a.empty() ? 0 < l : 0 <= l) {
                        var u = ot(s.from(), a.from()), c = it(s.to(), a.to()),
                            p = s.empty() ? a.from() == a.head : s.from() == s.head;
                        o <= n && --n, t.splice(--o, 2, new gi(p ? c : u, p ? u : c))
                    }
                }
                return new mi(t, n)
            }

            function yi(e, t) {
                return new mi([new gi(e, t || e)], 0)
            }

            function bi(e) {
                return e.text ? et(e.from.line + e.text.length - 1, Y(e.text).length + (1 == e.text.length ? e.from.ch : 0)) : e.to
            }

            function wi(e, t) {
                if (tt(e, t.from) < 0) return e;
                if (tt(e, t.to) <= 0) return bi(t);
                var n = e.line + t.text.length - (t.to.line - t.from.line) - 1, r = e.ch;
                return e.line == t.to.line && (r += bi(t).ch - t.to.ch), et(n, r)
            }

            function xi(e, t) {
                for (var n = [], r = 0; r < e.sel.ranges.length; r++) {
                    var i = e.sel.ranges[r];
                    n.push(new gi(wi(i.anchor, t), wi(i.head, t)))
                }
                return vi(e.cm, n, e.sel.primIndex)
            }

            function ki(e, t, n) {
                return e.line == t.line ? et(n.line, e.ch - t.ch + n.ch) : et(n.line + (e.line - t.line), e.ch)
            }

            function Ci(e) {
                e.doc.mode = Fe(e.options, e.doc.modeOption), Si(e)
            }

            function Si(e) {
                e.doc.iter(function (e) {
                    e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null)
                }), e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first, Zr(e, 100), e.state.modeGen++, e.curOp && sr(e)
            }

            function Ei(e, t) {
                return 0 == t.from.ch && 0 == t.to.ch && "" == Y(t.text) && (!e.cm || e.cm.options.wholeLineUpdateBefore)
            }

            function Ti(e, t, n, r) {
                function i(e) {
                    return n ? n[e] : null
                }

                function o(e, n, i) {
                    !function (e, t, n, r) {
                        e.text = t, e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null), null != e.order && (e.order = null), Ot(e), Nt(e, n);
                        var i = r ? r(e) : 1;
                        i != e.height && Xe(e, i)
                    }(e, n, i, r), sn(e, "change", e, t)
                }

                function a(e, t) {
                    for (var n = [], o = e; o < t; ++o) n.push(new Kt(u[o], i(o), r));
                    return n
                }

                var s = t.from, l = t.to, u = t.text, c = Ke(e, s.line), p = Ke(e, l.line), d = Y(u),
                    f = i(u.length - 1), h = l.line - s.line;
                if (t.full) e.insert(0, a(0, u.length)), e.remove(u.length, e.size - u.length); else if (Ei(e, t)) {
                    var _ = a(0, u.length - 1);
                    o(p, p.text, f), h && e.remove(s.line, h), _.length && e.insert(s.line, _)
                } else if (c == p) if (1 == u.length) o(c, c.text.slice(0, s.ch) + d + c.text.slice(l.ch), f); else {
                    var m = a(1, u.length - 1);
                    m.push(new Kt(d + c.text.slice(l.ch), f, r)), o(c, c.text.slice(0, s.ch) + u[0], i(0)), e.insert(s.line + 1, m)
                } else if (1 == u.length) o(c, c.text.slice(0, s.ch) + u[0] + p.text.slice(l.ch), i(0)), e.remove(s.line + 1, h); else {
                    o(c, c.text.slice(0, s.ch) + u[0], i(0)), o(p, d + p.text.slice(l.ch), f);
                    var g = a(1, u.length - 1);
                    1 < h && e.remove(s.line + 1, h - 1), e.insert(s.line + 1, g)
                }
                sn(e, "change", e, t)
            }

            function Oi(e, t, n) {
                !function e(r, i, o) {
                    if (r.linked) for (var a = 0; a < r.linked.length; ++a) {
                        var s = r.linked[a];
                        if (s.doc != i) {
                            var l = o && s.sharedHist;
                            n && !l || (t(s.doc, l), e(s.doc, r, l))
                        }
                    }
                }(e, null, !0)
            }

            function Ni(e, t) {
                if (t.cm) throw new Error("This document is already in use.");
                ir((e.doc = t).cm = e), Ci(e), Mi(e), e.options.lineWrapping || $t(e), e.options.mode = t.modeOption, sr(e)
            }

            function Mi(e) {
                ("rtl" == e.doc.direction ? R : T)(e.display.lineDiv, "CodeMirror-rtl")
            }

            function Ai(e) {
                this.done = [], this.undone = [], this.undoDepth = 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = e || 1
            }

            function Pi(e, t) {
                var n = {from: rt(t.from), to: bi(t), text: Ge(e, t.from, t.to)};
                return Ii(e, n, t.from.line, t.to.line + 1), Oi(e, function (e) {
                    return Ii(e, n, t.from.line, t.to.line + 1)
                }, !0), n
            }

            function Li(e) {
                for (; e.length && Y(e).ranges;) e.pop()
            }

            function Ri(e, t, n, r) {
                var i = e.history;
                i.undone.length = 0;
                var o, a, s, l = +new Date;
                if ((i.lastOp == r || i.lastOrigin == t.origin && t.origin && ("+" == t.origin.charAt(0) && i.lastModTime > l - (e.cm ? e.cm.options.historyEventDelay : 500) || "*" == t.origin.charAt(0))) && (o = (s = i).lastOp == r ? (Li(s.done), Y(s.done)) : s.done.length && !Y(s.done).ranges ? Y(s.done) : 1 < s.done.length && !s.done[s.done.length - 2].ranges ? (s.done.pop(), Y(s.done)) : void 0)) a = Y(o.changes), 0 == tt(t.from, t.to) && 0 == tt(t.from, a.to) ? a.to = bi(t) : o.changes.push(Pi(e, t)); else {
                    var u = Y(i.done);
                    for (u && u.ranges || Di(e.sel, i.done), o = {
                        changes: [Pi(e, t)],
                        generation: i.generation
                    }, i.done.push(o); i.done.length > i.undoDepth;) i.done.shift(), i.done[0].ranges || i.done.shift()
                }
                i.done.push(n), i.generation = ++i.maxGeneration, i.lastModTime = i.lastSelTime = l, i.lastOp = i.lastSelOp = r, i.lastOrigin = i.lastSelOrigin = t.origin, a || me(e, "historyAdded")
            }

            function Di(e, t) {
                var n = Y(t);
                n && n.ranges && n.equals(e) || t.push(e)
            }

            function Ii(e, t, n, r) {
                var i = t["spans_" + e.id], o = 0;
                e.iter(Math.max(e.first, n), Math.min(e.first + e.size, r), function (n) {
                    n.markedSpans && ((i || (i = t["spans_" + e.id] = {}))[o] = n.markedSpans), ++o
                })
            }

            function zi(e) {
                if (!e) return null;
                for (var t, n = 0; n < e.length; ++n) e[n].marker.explicitlyCleared ? t || (t = e.slice(0, n)) : t && t.push(e[n]);
                return t ? t.length ? t : null : e
            }

            function ji(e, t) {
                var n = function (e, t) {
                    var n = t["spans_" + e.id];
                    if (!n) return null;
                    for (var r = [], i = 0; i < t.text.length; ++i) r.push(zi(n[i]));
                    return r
                }(e, t), r = Et(e, t);
                if (!n) return r;
                if (!r) return n;
                for (var i = 0; i < n.length; ++i) {
                    var o = n[i], a = r[i];
                    if (o && a) e:for (var s = 0; s < a.length; ++s) {
                        for (var l = a[s], u = 0; u < o.length; ++u) if (o[u].marker == l.marker) continue e;
                        o.push(l)
                    } else a && (n[i] = a)
                }
                return n
            }

            function Wi(e, t, n) {
                for (var r = [], i = 0; i < e.length; ++i) {
                    var o = e[i];
                    if (o.ranges) r.push(n ? mi.prototype.deepCopy.call(o) : o); else {
                        var a = o.changes, s = [];
                        r.push({changes: s});
                        for (var l = 0; l < a.length; ++l) {
                            var u = a[l], c = void 0;
                            if (s.push({
                                from: u.from,
                                to: u.to,
                                text: u.text
                            }), t) for (var p in u) (c = p.match(/^spans_(\d+)$/)) && -1 < H(t, Number(c[1])) && (Y(s)[p] = u[p], delete u[p])
                        }
                    }
                }
                return r
            }

            function Fi(e, t, n, r) {
                if (r) {
                    var i = e.anchor;
                    if (n) {
                        var o = tt(t, i) < 0;
                        o != tt(n, i) < 0 ? (i = t, t = n) : o != tt(t, n) < 0 && (t = n)
                    }
                    return new gi(i, t)
                }
                return new gi(n || t, t)
            }

            function Hi(e, t, n, r, i) {
                null == i && (i = e.cm && (e.cm.display.shift || e.extend)), Ki(e, new mi([Fi(e.sel.primary(), t, n, i)], 0), r)
            }

            function Ui(e, t, n) {
                for (var r = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0; o < e.sel.ranges.length; o++) r[o] = Fi(e.sel.ranges[o], t[o], null, i);
                Ki(e, vi(e.cm, r, e.sel.primIndex), n)
            }

            function Bi(e, t, n, r) {
                var i = e.sel.ranges.slice(0);
                i[t] = n, Ki(e, vi(e.cm, i, e.sel.primIndex), r)
            }

            function Vi(e, t, n, r) {
                Ki(e, yi(t, n), r)
            }

            function $i(e, t, n) {
                var r = e.history.done, i = Y(r);
                i && i.ranges ? Gi(e, r[r.length - 1] = t, n) : Ki(e, t, n)
            }

            function Ki(e, t, n) {
                Gi(e, t, n), function (e, t, n, r) {
                    var i, o, a, s, l, u = e.history, c = r && r.origin;
                    n == u.lastSelOp || c && u.lastSelOrigin == c && (u.lastModTime == u.lastSelTime && u.lastOrigin == c || (i = e, o = c, a = Y(u.done), s = t, "*" == (l = o.charAt(0)) || "+" == l && a.ranges.length == s.ranges.length && a.somethingSelected() == s.somethingSelected() && new Date - i.history.lastSelTime <= (i.cm ? i.cm.options.historyEventDelay : 500))) ? u.done[u.done.length - 1] = t : Di(t, u.done), u.lastSelTime = +new Date, u.lastSelOrigin = c, u.lastSelOp = n, r && !1 !== r.clearRedo && Li(u.undone)
                }(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n)
            }

            function Gi(e, t, n) {
                var r, i, o, a;
                (ye(e, "beforeSelectionChange") || e.cm && ye(e.cm, "beforeSelectionChange")) && (r = e, o = n, a = {
                    ranges: (i = t).ranges,
                    update: function (e) {
                        this.ranges = [];
                        for (var t = 0; t < e.length; t++) this.ranges[t] = new gi(st(r, e[t].anchor), st(r, e[t].head))
                    },
                    origin: o && o.origin
                }, me(r, "beforeSelectionChange", r, a), r.cm && me(r.cm, "beforeSelectionChange", r.cm, a), t = a.ranges != i.ranges ? vi(r.cm, a.ranges, a.ranges.length - 1) : i), qi(e, Yi(e, t, n && n.bias || (tt(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1), !0)), n && !1 === n.scroll || !e.cm || Tr(e.cm)
            }

            function qi(e, t) {
                t.equals(e.sel) || (e.sel = t, e.cm && (e.cm.curOp.updateInput = 1, e.cm.curOp.selectionChanged = !0, ve(e.cm)), sn(e, "cursorActivity", e))
            }

            function Xi(e) {
                qi(e, Yi(e, e.sel, null, !1))
            }

            function Yi(e, t, n, r) {
                for (var i, o = 0; o < t.ranges.length; o++) {
                    var a = t.ranges[o], s = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
                        l = Zi(e, a.anchor, s && s.anchor, n, r), u = Zi(e, a.head, s && s.head, n, r);
                    (i || l != a.anchor || u != a.head) && (i || (i = t.ranges.slice(0, o)), i[o] = new gi(l, u))
                }
                return i ? vi(e.cm, i, t.primIndex) : t
            }

            function Qi(e, t, n, r, i) {
                var o = Ke(e, t.line);
                if (o.markedSpans) for (var a = 0; a < o.markedSpans.length; ++a) {
                    var s = o.markedSpans[a], l = s.marker, u = "selectLeft" in l ? !l.selectLeft : l.inclusiveLeft,
                        c = "selectRight" in l ? !l.selectRight : l.inclusiveRight;
                    if ((null == s.from || (u ? s.from <= t.ch : s.from < t.ch)) && (null == s.to || (c ? s.to >= t.ch : s.to > t.ch))) {
                        if (i && (me(l, "beforeCursorEnter"), l.explicitlyCleared)) {
                            if (o.markedSpans) {
                                --a;
                                continue
                            }
                            break
                        }
                        if (!l.atomic) continue;
                        if (n) {
                            var p = l.find(r < 0 ? 1 : -1), d = void 0;
                            if ((r < 0 ? c : u) && (p = Ji(e, p, -r, p && p.line == t.line ? o : null)), p && p.line == t.line && (d = tt(p, n)) && (r < 0 ? d < 0 : 0 < d)) return Qi(e, p, t, r, i)
                        }
                        var f = l.find(r < 0 ? -1 : 1);
                        return (r < 0 ? u : c) && (f = Ji(e, f, r, f.line == t.line ? o : null)), f ? Qi(e, f, t, r, i) : null
                    }
                }
                return t
            }

            function Zi(e, t, n, r, i) {
                var o = r || 1;
                return Qi(e, t, n, o, i) || !i && Qi(e, t, n, o, !0) || Qi(e, t, n, -o, i) || !i && Qi(e, t, n, -o, !0) || (e.cantEdit = !0, et(e.first, 0))
            }

            function Ji(e, t, n, r) {
                return n < 0 && 0 == t.ch ? t.line > e.first ? st(e, et(t.line - 1)) : null : 0 < n && t.ch == (r || Ke(e, t.line)).text.length ? t.line < e.first + e.size - 1 ? et(t.line + 1, 0) : null : new et(t.line, t.ch + n)
            }

            function eo(e) {
                e.setSelection(et(e.firstLine(), 0), et(e.lastLine()), V)
            }

            function to(e, t, n) {
                var r = {
                    canceled: !1, from: t.from, to: t.to, text: t.text, origin: t.origin, cancel: function () {
                        return r.canceled = !0
                    }
                };
                return n && (r.update = function (t, n, i, o) {
                    t && (r.from = st(e, t)), n && (r.to = st(e, n)), i && (r.text = i), void 0 !== o && (r.origin = o)
                }), me(e, "beforeChange", e, r), e.cm && me(e.cm, "beforeChange", e.cm, r), r.canceled ? (e.cm && (e.cm.curOp.updateInput = 2), null) : {
                    from: r.from,
                    to: r.to,
                    text: r.text,
                    origin: r.origin
                }
            }

            function no(e, t, n) {
                if (e.cm) {
                    if (!e.cm.curOp) return Xr(e.cm, no)(e, t, n);
                    if (e.cm.state.suppressEdits) return
                }
                if (!(ye(e, "beforeChange") || e.cm && ye(e.cm, "beforeChange")) || (t = to(e, t, !0))) {
                    var r = wt && !n && function (e, t, n) {
                        var r = null;
                        if (e.iter(t.line, n.line + 1, function (e) {
                            if (e.markedSpans) for (var t = 0; t < e.markedSpans.length; ++t) {
                                var n = e.markedSpans[t].marker;
                                !n.readOnly || r && -1 != H(r, n) || (r || (r = [])).push(n)
                            }
                        }), !r) return null;
                        for (var i = [{
                            from: t,
                            to: n
                        }], o = 0; o < r.length; ++o) for (var a = r[o], s = a.find(0), l = 0; l < i.length; ++l) {
                            var u = i[l];
                            if (!(tt(u.to, s.from) < 0 || 0 < tt(u.from, s.to))) {
                                var c = [l, 1], p = tt(u.from, s.from), d = tt(u.to, s.to);
                                (p < 0 || !a.inclusiveLeft && !p) && c.push({
                                    from: u.from,
                                    to: s.from
                                }), (0 < d || !a.inclusiveRight && !d) && c.push({
                                    from: s.to,
                                    to: u.to
                                }), i.splice.apply(i, c), l += c.length - 3
                            }
                        }
                        return i
                    }(e, t.from, t.to);
                    if (r) for (var i = r.length - 1; 0 <= i; --i) ro(e, {
                        from: r[i].from,
                        to: r[i].to,
                        text: i ? [""] : t.text,
                        origin: t.origin
                    }); else ro(e, t)
                }
            }

            function ro(e, t) {
                if (1 != t.text.length || "" != t.text[0] || 0 != tt(t.from, t.to)) {
                    var n = xi(e, t);
                    Ri(e, t, n, e.cm ? e.cm.curOp.id : NaN), ao(e, t, n, Et(e, t));
                    var r = [];
                    Oi(e, function (e, n) {
                        n || -1 != H(r, e.history) || (co(e.history, t), r.push(e.history)), ao(e, t, null, Et(e, t))
                    })
                }
            }

            function io(e, t, n) {
                var r = e.cm && e.cm.state.suppressEdits;
                if (!r || n) {
                    for (var i, o = e.history, a = e.sel, s = "undo" == t ? o.done : o.undone, l = "undo" == t ? o.undone : o.done, u = 0; u < s.length && (i = s[u], n ? !i.ranges || i.equals(e.sel) : i.ranges); u++) ;
                    if (u != s.length) {
                        for (o.lastOrigin = o.lastSelOrigin = null; ;) {
                            if (!(i = s.pop()).ranges) {
                                if (r) return void s.push(i);
                                break
                            }
                            if (Di(i, l), n && !i.equals(e.sel)) return void Ki(e, i, {clearRedo: !1});
                            a = i
                        }
                        var c = [];
                        Di(a, l), l.push({
                            changes: c,
                            generation: o.generation
                        }), o.generation = i.generation || ++o.maxGeneration;
                        for (var p = ye(e, "beforeChange") || e.cm && ye(e.cm, "beforeChange"), d = function (n) {
                            var r = i.changes[n];
                            if (r.origin = t, p && !to(e, r, !1)) return s.length = 0, {};
                            c.push(Pi(e, r));
                            var o = n ? xi(e, r) : Y(s);
                            ao(e, r, o, ji(e, r)), !n && e.cm && e.cm.scrollIntoView({from: r.from, to: bi(r)});
                            var a = [];
                            Oi(e, function (e, t) {
                                t || -1 != H(a, e.history) || (co(e.history, r), a.push(e.history)), ao(e, r, null, ji(e, r))
                            })
                        }, f = i.changes.length - 1; 0 <= f; --f) {
                            var h = d(f);
                            if (h) return h.v
                        }
                    }
                }
            }

            function oo(e, t) {
                if (0 != t && (e.first += t, e.sel = new mi(Q(e.sel.ranges, function (e) {
                    return new gi(et(e.anchor.line + t, e.anchor.ch), et(e.head.line + t, e.head.ch))
                }), e.sel.primIndex), e.cm)) {
                    sr(e.cm, e.first, e.first - t, t);
                    for (var n = e.cm.display, r = n.viewFrom; r < n.viewTo; r++) lr(e.cm, r, "gutter")
                }
            }

            function ao(e, t, n, r) {
                if (e.cm && !e.cm.curOp) return Xr(e.cm, ao)(e, t, n, r);
                if (t.to.line < e.first) oo(e, t.text.length - 1 - (t.to.line - t.from.line)); else if (!(t.from.line > e.lastLine())) {
                    if (t.from.line < e.first) {
                        var i = t.text.length - 1 - (e.first - t.from.line);
                        oo(e, i), t = {
                            from: et(e.first, 0),
                            to: et(t.to.line + i, t.to.ch),
                            text: [Y(t.text)],
                            origin: t.origin
                        }
                    }
                    var o = e.lastLine();
                    t.to.line > o && (t = {
                        from: t.from,
                        to: et(o, Ke(e, o).text.length),
                        text: [t.text[0]],
                        origin: t.origin
                    }), t.removed = Ge(e, t.from, t.to), n || (n = xi(e, t)), e.cm ? function (e, t, n) {
                        var r = e.doc, i = e.display, o = t.from, a = t.to, s = !1, l = o.line;
                        e.options.lineWrapping || (l = Ye(jt(Ke(r, o.line))), r.iter(l, a.line + 1, function (e) {
                            if (e == i.maxLine) return s = !0
                        })), -1 < r.sel.contains(t.from, t.to) && ve(e), Ti(r, t, n, rr(e)), e.options.lineWrapping || (r.iter(l, o.line + t.text.length, function (e) {
                            var t = Vt(e);
                            t > i.maxLineLength && (i.maxLine = e, i.maxLineLength = t, i.maxLineChanged = !0, s = !1)
                        }), s && (e.curOp.updateMaxLine = !0)), function (e, t) {
                            if (e.modeFrontier = Math.min(e.modeFrontier, t), !(e.highlightFrontier < t - 10)) {
                                for (var n = e.first, r = t - 1; n < r; r--) {
                                    var i = Ke(e, r).stateAfter;
                                    if (i && (!(i instanceof ut) || r + i.lookAhead < t)) {
                                        n = r + 1;
                                        break
                                    }
                                }
                                e.highlightFrontier = Math.min(e.highlightFrontier, n)
                            }
                        }(r, o.line), Zr(e, 400);
                        var u = t.text.length - (a.line - o.line) - 1;
                        t.full ? sr(e) : o.line != a.line || 1 != t.text.length || Ei(e.doc, t) ? sr(e, o.line, a.line + 1, u) : lr(e, o.line, "text");
                        var c = ye(e, "changes"), p = ye(e, "change");
                        if (p || c) {
                            var d = {from: o, to: a, text: t.text, removed: t.removed, origin: t.origin};
                            p && sn(e, "change", e, d), c && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(d)
                        }
                        e.display.selForContextMenu = null
                    }(e.cm, t, r) : Ti(e, t, r), Gi(e, n, V)
                }
            }

            function so(e, t, n, r, i) {
                var o;
                r || (r = n), tt(r, n) < 0 && (n = (o = [r, n])[0], r = o[1]), "string" == typeof t && (t = e.splitLines(t)), no(e, {
                    from: n,
                    to: r,
                    text: t,
                    origin: i
                })
            }

            function lo(e, t, n, r) {
                n < e.line ? e.line += r : t < e.line && (e.line = t, e.ch = 0)
            }

            function uo(e, t, n, r) {
                for (var i = 0; i < e.length; ++i) {
                    var o = e[i], a = !0;
                    if (o.ranges) {
                        o.copied || ((o = e[i] = o.deepCopy()).copied = !0);
                        for (var s = 0; s < o.ranges.length; s++) lo(o.ranges[s].anchor, t, n, r), lo(o.ranges[s].head, t, n, r)
                    } else {
                        for (var l = 0; l < o.changes.length; ++l) {
                            var u = o.changes[l];
                            if (n < u.from.line) u.from = et(u.from.line + r, u.from.ch), u.to = et(u.to.line + r, u.to.ch); else if (t <= u.to.line) {
                                a = !1;
                                break
                            }
                        }
                        a || (e.splice(0, i + 1), i = 0)
                    }
                }
            }

            function co(e, t) {
                var n = t.from.line, r = t.to.line, i = t.text.length - (r - n) - 1;
                uo(e.done, n, r, i), uo(e.undone, n, r, i)
            }

            function po(e, t, n, r) {
                var i = t, o = t;
                return "number" == typeof t ? o = Ke(e, at(e, t)) : i = Ye(t), null == i ? null : (r(o, i) && e.cm && lr(e.cm, i, n), o)
            }

            function fo(e) {
                this.lines = e, this.parent = null;
                for (var t = 0, n = 0; n < e.length; ++n) e[n].parent = this, t += e[n].height;
                this.height = t
            }

            function ho(e) {
                this.children = e;
                for (var t = 0, n = 0, r = 0; r < e.length; ++r) {
                    var i = e[r];
                    t += i.chunkSize(), n += i.height, i.parent = this
                }
                this.size = t, this.height = n, this.parent = null
            }

            gi.prototype.from = function () {
                return ot(this.anchor, this.head)
            }, gi.prototype.to = function () {
                return it(this.anchor, this.head)
            }, gi.prototype.empty = function () {
                return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
            }, fo.prototype = {
                chunkSize: function () {
                    return this.lines.length
                }, removeInner: function (e, t) {
                    for (var n, r = e, i = e + t; r < i; ++r) {
                        var o = this.lines[r];
                        this.height -= o.height, (n = o).parent = null, Ot(n), sn(o, "delete")
                    }
                    this.lines.splice(e, t)
                }, collapse: function (e) {
                    e.push.apply(e, this.lines)
                }, insertInner: function (e, t, n) {
                    this.height += n, this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e));
                    for (var r = 0; r < t.length; ++r) t[r].parent = this
                }, iterN: function (e, t, n) {
                    for (var r = e + t; e < r; ++e) if (n(this.lines[e])) return !0
                }
            }, ho.prototype = {
                chunkSize: function () {
                    return this.size
                }, removeInner: function (e, t) {
                    this.size -= t;
                    for (var n = 0; n < this.children.length; ++n) {
                        var r = this.children[n], i = r.chunkSize();
                        if (e < i) {
                            var o = Math.min(t, i - e), a = r.height;
                            if (r.removeInner(e, o), this.height -= a - r.height, i == o && (this.children.splice(n--, 1), r.parent = null), 0 == (t -= o)) break;
                            e = 0
                        } else e -= i
                    }
                    if (this.size - t < 25 && (1 < this.children.length || !(this.children[0] instanceof fo))) {
                        var s = [];
                        this.collapse(s), this.children = [new fo(s)], this.children[0].parent = this
                    }
                }, collapse: function (e) {
                    for (var t = 0; t < this.children.length; ++t) this.children[t].collapse(e)
                }, insertInner: function (e, t, n) {
                    this.size += t.length, this.height += n;
                    for (var r = 0; r < this.children.length; ++r) {
                        var i = this.children[r], o = i.chunkSize();
                        if (e <= o) {
                            if (i.insertInner(e, t, n), i.lines && 50 < i.lines.length) {
                                for (var a = i.lines.length % 25 + 25, s = a; s < i.lines.length;) {
                                    var l = new fo(i.lines.slice(s, s += 25));
                                    i.height -= l.height, this.children.splice(++r, 0, l), l.parent = this
                                }
                                i.lines = i.lines.slice(0, a), this.maybeSpill()
                            }
                            break
                        }
                        e -= o
                    }
                }, maybeSpill: function () {
                    if (!(this.children.length <= 10)) {
                        var e = this;
                        do {
                            var t = new ho(e.children.splice(e.children.length - 5, 5));
                            if (e.parent) {
                                e.size -= t.size, e.height -= t.height;
                                var n = H(e.parent.children, e);
                                e.parent.children.splice(n + 1, 0, t)
                            } else {
                                var r = new ho(e.children);
                                (r.parent = e).children = [r, t], e = r
                            }
                            t.parent = e.parent
                        } while (10 < e.children.length);
                        e.parent.maybeSpill()
                    }
                }, iterN: function (e, t, n) {
                    for (var r = 0; r < this.children.length; ++r) {
                        var i = this.children[r], o = i.chunkSize();
                        if (e < o) {
                            var a = Math.min(t, o - e);
                            if (i.iterN(e, a, n)) return !0;
                            if (0 == (t -= a)) break;
                            e = 0
                        } else e -= o
                    }
                }
            };
            var _o = function (e, t, n) {
                if (n) for (var r in n) n.hasOwnProperty(r) && (this[r] = n[r]);
                this.doc = e, this.node = t
            };

            function mo(e, t, n) {
                Bt(t) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && Er(e, n)
            }

            _o.prototype.clear = function () {
                var e = this.doc.cm, t = this.line.widgets, n = this.line, r = Ye(n);
                if (null != r && t) {
                    for (var i = 0; i < t.length; ++i) t[i] == this && t.splice(i--, 1);
                    t.length || (n.widgets = null);
                    var o = yn(this);
                    Xe(n, Math.max(0, n.height - o)), e && (qr(e, function () {
                        mo(e, n, -o), lr(e, r, "widget")
                    }), sn(e, "lineWidgetCleared", e, this, r))
                }
            }, _o.prototype.changed = function () {
                var e = this, t = this.height, n = this.doc.cm, r = this.line;
                this.height = null;
                var i = yn(this) - t;
                i && (Ht(this.doc, r) || Xe(r, r.height + i), n && qr(n, function () {
                    n.curOp.forceUpdate = !0, mo(n, r, i), sn(n, "lineWidgetChanged", n, e, Ye(r))
                }))
            }, be(_o);
            var go = 0, vo = function (e, t) {
                this.lines = [], this.type = t, this.doc = e, this.id = ++go
            };

            function yo(e, t, n, r, i) {
                if (r && r.shared) return function (e, t, n, r, i) {
                    (r = j(r)).shared = !1;
                    var o = [yo(e, t, n, r, i)], a = o[0], s = r.widgetNode;
                    return Oi(e, function (e) {
                        s && (r.widgetNode = s.cloneNode(!0)), o.push(yo(e, st(e, t), st(e, n), r, i));
                        for (var l = 0; l < e.linked.length; ++l) if (e.linked[l].isParent) return;
                        a = Y(o)
                    }), new bo(o, a)
                }(e, t, n, r, i);
                if (e.cm && !e.cm.curOp) return Xr(e.cm, yo)(e, t, n, r, i);
                var o = new vo(e, i), a = tt(t, n);
                if (r && j(r, o, !1), 0 < a || 0 == a && !1 !== o.clearWhenEmpty) return o;
                if (o.replacedWith && (o.collapsed = !0, o.widgetNode = A("span", [o.replacedWith], "CodeMirror-widget"), r.handleMouseEvents || o.widgetNode.setAttribute("cm-ignore-events", "true"), r.insertLeft && (o.widgetNode.insertLeft = !0)), o.collapsed) {
                    if (zt(e, t.line, t, n, o) || t.line != n.line && zt(e, n.line, t, n, o)) throw new Error("Inserting collapsed marker partially overlapping an existing one");
                    xt = !0
                }
                o.addToHistory && Ri(e, {from: t, to: n, origin: "markText"}, e.sel, NaN);
                var s, l = t.line, u = e.cm;
                if (e.iter(l, n.line + 1, function (e) {
                    var r, i;
                    u && o.collapsed && !u.options.lineWrapping && jt(e) == u.display.maxLine && (s = !0), o.collapsed && l != t.line && Xe(e, 0), r = e, i = new kt(o, l == t.line ? t.ch : null, l == n.line ? n.ch : null), r.markedSpans = r.markedSpans ? r.markedSpans.concat([i]) : [i], i.marker.attachLine(r), ++l
                }), o.collapsed && e.iter(t.line, n.line + 1, function (t) {
                    Ht(e, t) && Xe(t, 0)
                }), o.clearOnEnter && fe(o, "beforeCursorEnter", function () {
                    return o.clear()
                }), o.readOnly && (wt = !0, (e.history.done.length || e.history.undone.length) && e.clearHistory()), o.collapsed && (o.id = ++go, o.atomic = !0), u) {
                    if (s && (u.curOp.updateMaxLine = !0), o.collapsed) sr(u, t.line, n.line + 1); else if (o.className || o.startStyle || o.endStyle || o.css || o.attributes || o.title) for (var c = t.line; c <= n.line; c++) lr(u, c, "text");
                    o.atomic && Xi(u.doc), sn(u, "markerAdded", u, o)
                }
                return o
            }

            vo.prototype.clear = function () {
                if (!this.explicitlyCleared) {
                    var e = this.doc.cm, t = e && !e.curOp;
                    if (t && Ur(e), ye(this, "clear")) {
                        var n = this.find();
                        n && sn(this, "clear", n.from, n.to)
                    }
                    for (var r = null, i = null, o = 0; o < this.lines.length; ++o) {
                        var a = this.lines[o], s = Ct(a.markedSpans, this);
                        e && !this.collapsed ? lr(e, Ye(a), "text") : e && (null != s.to && (i = Ye(a)), null != s.from && (r = Ye(a))), a.markedSpans = St(a.markedSpans, s), null == s.from && this.collapsed && !Ht(this.doc, a) && e && Xe(a, Jn(e.display))
                    }
                    if (e && this.collapsed && !e.options.lineWrapping) for (var l = 0; l < this.lines.length; ++l) {
                        var u = jt(this.lines[l]), c = Vt(u);
                        c > e.display.maxLineLength && (e.display.maxLine = u, e.display.maxLineLength = c, e.display.maxLineChanged = !0)
                    }
                    null != r && e && this.collapsed && sr(e, r, i + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, e && Xi(e.doc)), e && sn(e, "markerCleared", e, this, r, i), t && Br(e), this.parent && this.parent.clear()
                }
            }, vo.prototype.find = function (e, t) {
                var n, r;
                null == e && "bookmark" == this.type && (e = 1);
                for (var i = 0; i < this.lines.length; ++i) {
                    var o = this.lines[i], a = Ct(o.markedSpans, this);
                    if (null != a.from && (n = et(t ? o : Ye(o), a.from), -1 == e)) return n;
                    if (null != a.to && (r = et(t ? o : Ye(o), a.to), 1 == e)) return r
                }
                return n && {from: n, to: r}
            }, vo.prototype.changed = function () {
                var e = this, t = this.find(-1, !0), n = this, r = this.doc.cm;
                t && r && qr(r, function () {
                    var i = t.line, o = Ye(t.line), a = Nn(r, o);
                    if (a && (In(a), r.curOp.selectionChanged = r.curOp.forceUpdate = !0), r.curOp.updateMaxLine = !0, !Ht(n.doc, i) && null != n.height) {
                        var s = n.height;
                        n.height = null;
                        var l = yn(n) - s;
                        l && Xe(i, i.height + l)
                    }
                    sn(r, "markerChanged", r, e)
                })
            }, vo.prototype.attachLine = function (e) {
                if (!this.lines.length && this.doc.cm) {
                    var t = this.doc.cm.curOp;
                    t.maybeHiddenMarkers && -1 != H(t.maybeHiddenMarkers, this) || (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this)
                }
                this.lines.push(e)
            }, vo.prototype.detachLine = function (e) {
                if (this.lines.splice(H(this.lines, e), 1), !this.lines.length && this.doc.cm) {
                    var t = this.doc.cm.curOp;
                    (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this)
                }
            }, be(vo);
            var bo = function (e, t) {
                this.markers = e, this.primary = t;
                for (var n = 0; n < e.length; ++n) e[n].parent = this
            };

            function wo(e) {
                return e.findMarks(et(e.first, 0), e.clipPos(et(e.lastLine())), function (e) {
                    return e.parent
                })
            }

            function xo(e) {
                for (var t = function (t) {
                    var n = e[t], r = [n.primary.doc];
                    Oi(n.primary.doc, function (e) {
                        return r.push(e)
                    });
                    for (var i = 0; i < n.markers.length; i++) {
                        var o = n.markers[i];
                        -1 == H(r, o.doc) && (o.parent = null, n.markers.splice(i--, 1))
                    }
                }, n = 0; n < e.length; n++) t(n)
            }

            bo.prototype.clear = function () {
                if (!this.explicitlyCleared) {
                    this.explicitlyCleared = !0;
                    for (var e = 0; e < this.markers.length; ++e) this.markers[e].clear();
                    sn(this, "clear")
                }
            }, bo.prototype.find = function (e, t) {
                return this.primary.find(e, t)
            }, be(bo);
            var ko = 0, Co = function e(t, n, r, i, o) {
                if (!(this instanceof e)) return new e(t, n, r, i, o);
                null == r && (r = 0), ho.call(this, [new fo([new Kt("", null)])]), this.first = r, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.modeFrontier = this.highlightFrontier = r;
                var a = et(r, 0);
                this.sel = yi(a), this.history = new Ai(null), this.id = ++ko, this.modeOption = n, this.lineSep = i, this.direction = "rtl" == o ? "rtl" : "ltr", this.extend = !1, "string" == typeof t && (t = this.splitLines(t)), Ti(this, {
                    from: a,
                    to: a,
                    text: t
                }), Ki(this, yi(a), V)
            };
            Co.prototype = J(ho.prototype, {
                constructor: Co, iter: function (e, t, n) {
                    n ? this.iterN(e - this.first, t - e, n) : this.iterN(this.first, this.first + this.size, e)
                }, insert: function (e, t) {
                    for (var n = 0, r = 0; r < t.length; ++r) n += t[r].height;
                    this.insertInner(e - this.first, t, n)
                }, remove: function (e, t) {
                    this.removeInner(e - this.first, t)
                }, getValue: function (e) {
                    var t = qe(this, this.first, this.first + this.size);
                    return !1 === e ? t : t.join(e || this.lineSeparator())
                }, setValue: Qr(function (e) {
                    var t = et(this.first, 0), n = this.first + this.size - 1;
                    no(this, {
                        from: t,
                        to: et(n, Ke(this, n).text.length),
                        text: this.splitLines(e),
                        origin: "setValue",
                        full: !0
                    }, !0), this.cm && Or(this.cm, 0, 0), Ki(this, yi(t), V)
                }), replaceRange: function (e, t, n, r) {
                    so(this, e, t = st(this, t), n = n ? st(this, n) : t, r)
                }, getRange: function (e, t, n) {
                    var r = Ge(this, st(this, e), st(this, t));
                    return !1 === n ? r : r.join(n || this.lineSeparator())
                }, getLine: function (e) {
                    var t = this.getLineHandle(e);
                    return t && t.text
                }, getLineHandle: function (e) {
                    if (Ze(this, e)) return Ke(this, e)
                }, getLineNumber: function (e) {
                    return Ye(e)
                }, getLineHandleVisualStart: function (e) {
                    return "number" == typeof e && (e = Ke(this, e)), jt(e)
                }, lineCount: function () {
                    return this.size
                }, firstLine: function () {
                    return this.first
                }, lastLine: function () {
                    return this.first + this.size - 1
                }, clipPos: function (e) {
                    return st(this, e)
                }, getCursor: function (e) {
                    var t = this.sel.primary();
                    return null == e || "head" == e ? t.head : "anchor" == e ? t.anchor : "end" == e || "to" == e || !1 === e ? t.to() : t.from()
                }, listSelections: function () {
                    return this.sel.ranges
                }, somethingSelected: function () {
                    return this.sel.somethingSelected()
                }, setCursor: Qr(function (e, t, n) {
                    Vi(this, st(this, "number" == typeof e ? et(e, t || 0) : e), null, n)
                }), setSelection: Qr(function (e, t, n) {
                    Vi(this, st(this, e), st(this, t || e), n)
                }), extendSelection: Qr(function (e, t, n) {
                    Hi(this, st(this, e), t && st(this, t), n)
                }), extendSelections: Qr(function (e, t) {
                    Ui(this, lt(this, e), t)
                }), extendSelectionsBy: Qr(function (e, t) {
                    Ui(this, lt(this, Q(this.sel.ranges, e)), t)
                }), setSelections: Qr(function (e, t, n) {
                    if (e.length) {
                        for (var r = [], i = 0; i < e.length; i++) r[i] = new gi(st(this, e[i].anchor), st(this, e[i].head));
                        null == t && (t = Math.min(e.length - 1, this.sel.primIndex)), Ki(this, vi(this.cm, r, t), n)
                    }
                }), addSelection: Qr(function (e, t, n) {
                    var r = this.sel.ranges.slice(0);
                    r.push(new gi(st(this, e), st(this, t || e))), Ki(this, vi(this.cm, r, r.length - 1), n)
                }), getSelection: function (e) {
                    for (var t, n = this.sel.ranges, r = 0; r < n.length; r++) {
                        var i = Ge(this, n[r].from(), n[r].to());
                        t = t ? t.concat(i) : i
                    }
                    return !1 === e ? t : t.join(e || this.lineSeparator())
                }, getSelections: function (e) {
                    for (var t = [], n = this.sel.ranges, r = 0; r < n.length; r++) {
                        var i = Ge(this, n[r].from(), n[r].to());
                        !1 !== e && (i = i.join(e || this.lineSeparator())), t[r] = i
                    }
                    return t
                }, replaceSelection: function (e, t, n) {
                    for (var r = [], i = 0; i < this.sel.ranges.length; i++) r[i] = e;
                    this.replaceSelections(r, t, n || "+input")
                }, replaceSelections: Qr(function (e, t, n) {
                    for (var r = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
                        var a = i.ranges[o];
                        r[o] = {from: a.from(), to: a.to(), text: this.splitLines(e[o]), origin: n}
                    }
                    for (var s = t && "end" != t && function (e, t, n) {
                        for (var r = [], i = et(e.first, 0), o = i, a = 0; a < t.length; a++) {
                            var s = t[a], l = ki(s.from, i, o), u = ki(bi(s), i, o);
                            if (i = s.to, o = u, "around" == n) {
                                var c = e.sel.ranges[a], p = tt(c.head, c.anchor) < 0;
                                r[a] = new gi(p ? u : l, p ? l : u)
                            } else r[a] = new gi(l, l)
                        }
                        return new mi(r, e.sel.primIndex)
                    }(this, r, t), l = r.length - 1; 0 <= l; l--) no(this, r[l]);
                    s ? $i(this, s) : this.cm && Tr(this.cm)
                }), undo: Qr(function () {
                    io(this, "undo")
                }), redo: Qr(function () {
                    io(this, "redo")
                }), undoSelection: Qr(function () {
                    io(this, "undo", !0)
                }), redoSelection: Qr(function () {
                    io(this, "redo", !0)
                }), setExtending: function (e) {
                    this.extend = e
                }, getExtending: function () {
                    return this.extend
                }, historySize: function () {
                    for (var e = this.history, t = 0, n = 0, r = 0; r < e.done.length; r++) e.done[r].ranges || ++t;
                    for (var i = 0; i < e.undone.length; i++) e.undone[i].ranges || ++n;
                    return {undo: t, redo: n}
                }, clearHistory: function () {
                    this.history = new Ai(this.history.maxGeneration)
                }, markClean: function () {
                    this.cleanGeneration = this.changeGeneration(!0)
                }, changeGeneration: function (e) {
                    return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation
                }, isClean: function (e) {
                    return this.history.generation == (e || this.cleanGeneration)
                }, getHistory: function () {
                    return {done: Wi(this.history.done), undone: Wi(this.history.undone)}
                }, setHistory: function (e) {
                    var t = this.history = new Ai(this.history.maxGeneration);
                    t.done = Wi(e.done.slice(0), null, !0), t.undone = Wi(e.undone.slice(0), null, !0)
                }, setGutterMarker: Qr(function (e, t, n) {
                    return po(this, e, "gutter", function (e) {
                        var r = e.gutterMarkers || (e.gutterMarkers = {});
                        return !(r[t] = n) && re(r) && (e.gutterMarkers = null), !0
                    })
                }), clearGutter: Qr(function (e) {
                    var t = this;
                    this.iter(function (n) {
                        n.gutterMarkers && n.gutterMarkers[e] && po(t, n, "gutter", function () {
                            return n.gutterMarkers[e] = null, re(n.gutterMarkers) && (n.gutterMarkers = null), !0
                        })
                    })
                }), lineInfo: function (e) {
                    var t;
                    if ("number" == typeof e) {
                        if (!Ze(this, e)) return null;
                        if (!(e = Ke(this, t = e))) return null
                    } else if (null == (t = Ye(e))) return null;
                    return {
                        line: t,
                        handle: e,
                        text: e.text,
                        gutterMarkers: e.gutterMarkers,
                        textClass: e.textClass,
                        bgClass: e.bgClass,
                        wrapClass: e.wrapClass,
                        widgets: e.widgets
                    }
                }, addLineClass: Qr(function (e, t, n) {
                    return po(this, e, "gutter" == t ? "gutter" : "class", function (e) {
                        var r = "text" == t ? "textClass" : "background" == t ? "bgClass" : "gutter" == t ? "gutterClass" : "wrapClass";
                        if (e[r]) {
                            if (S(n).test(e[r])) return !1;
                            e[r] += " " + n
                        } else e[r] = n;
                        return !0
                    })
                }), removeLineClass: Qr(function (e, t, n) {
                    return po(this, e, "gutter" == t ? "gutter" : "class", function (e) {
                        var r = "text" == t ? "textClass" : "background" == t ? "bgClass" : "gutter" == t ? "gutterClass" : "wrapClass",
                            i = e[r];
                        if (!i) return !1;
                        if (null == n) e[r] = null; else {
                            var o = i.match(S(n));
                            if (!o) return !1;
                            var a = o.index + o[0].length;
                            e[r] = i.slice(0, o.index) + (o.index && a != i.length ? " " : "") + i.slice(a) || null
                        }
                        return !0
                    })
                }), addLineWidget: Qr(function (e, t, n) {
                    return i = e, o = new _o(r = this, t, n), (a = r.cm) && o.noHScroll && (a.display.alignWidgets = !0), po(r, i, "widget", function (e) {
                        var t = e.widgets || (e.widgets = []);
                        if (null == o.insertAt ? t.push(o) : t.splice(Math.min(t.length - 1, Math.max(0, o.insertAt)), 0, o), o.line = e, a && !Ht(r, e)) {
                            var n = Bt(e) < r.scrollTop;
                            Xe(e, e.height + yn(o)), n && Er(a, o.height), a.curOp.forceUpdate = !0
                        }
                        return !0
                    }), a && sn(a, "lineWidgetAdded", a, o, "number" == typeof i ? i : Ye(i)), o;
                    var r, i, o, a
                }), removeLineWidget: function (e) {
                    e.clear()
                }, markText: function (e, t, n) {
                    return yo(this, st(this, e), st(this, t), n, n && n.type || "range")
                }, setBookmark: function (e, t) {
                    var n = {
                        replacedWith: t && (null == t.nodeType ? t.widget : t),
                        insertLeft: t && t.insertLeft,
                        clearWhenEmpty: !1,
                        shared: t && t.shared,
                        handleMouseEvents: t && t.handleMouseEvents
                    };
                    return yo(this, e = st(this, e), e, n, "bookmark")
                }, findMarksAt: function (e) {
                    var t = [], n = Ke(this, (e = st(this, e)).line).markedSpans;
                    if (n) for (var r = 0; r < n.length; ++r) {
                        var i = n[r];
                        (null == i.from || i.from <= e.ch) && (null == i.to || i.to >= e.ch) && t.push(i.marker.parent || i.marker)
                    }
                    return t
                }, findMarks: function (e, t, n) {
                    e = st(this, e), t = st(this, t);
                    var r = [], i = e.line;
                    return this.iter(e.line, t.line + 1, function (o) {
                        var a = o.markedSpans;
                        if (a) for (var s = 0; s < a.length; s++) {
                            var l = a[s];
                            null != l.to && i == e.line && e.ch >= l.to || null == l.from && i != e.line || null != l.from && i == t.line && l.from >= t.ch || n && !n(l.marker) || r.push(l.marker.parent || l.marker)
                        }
                        ++i
                    }), r
                }, getAllMarks: function () {
                    var e = [];
                    return this.iter(function (t) {
                        var n = t.markedSpans;
                        if (n) for (var r = 0; r < n.length; ++r) null != n[r].from && e.push(n[r].marker)
                    }), e
                }, posFromIndex: function (e) {
                    var t, n = this.first, r = this.lineSeparator().length;
                    return this.iter(function (i) {
                        var o = i.text.length + r;
                        if (e < o) return t = e, !0;
                        e -= o, ++n
                    }), st(this, et(n, t))
                }, indexFromPos: function (e) {
                    var t = (e = st(this, e)).ch;
                    if (e.line < this.first || e.ch < 0) return 0;
                    var n = this.lineSeparator().length;
                    return this.iter(this.first, e.line, function (e) {
                        t += e.text.length + n
                    }), t
                }, copy: function (e) {
                    var t = new Co(qe(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep, this.direction);
                    return t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft, t.sel = this.sel, t.extend = !1, e && (t.history.undoDepth = this.history.undoDepth, t.setHistory(this.getHistory())), t
                }, linkedDoc: function (e) {
                    e || (e = {});
                    var t = this.first, n = this.first + this.size;
                    null != e.from && e.from > t && (t = e.from), null != e.to && e.to < n && (n = e.to);
                    var r = new Co(qe(this, t, n), e.mode || this.modeOption, t, this.lineSep, this.direction);
                    return e.sharedHist && (r.history = this.history), (this.linked || (this.linked = [])).push({
                        doc: r,
                        sharedHist: e.sharedHist
                    }), r.linked = [{doc: this, isParent: !0, sharedHist: e.sharedHist}], function (e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n], i = r.find(), o = e.clipPos(i.from), a = e.clipPos(i.to);
                            if (tt(o, a)) {
                                var s = yo(e, o, a, r.primary, r.primary.type);
                                r.markers.push(s), s.parent = r
                            }
                        }
                    }(r, wo(this)), r
                }, unlinkDoc: function (e) {
                    if (e instanceof ga && (e = e.doc), this.linked) for (var t = 0; t < this.linked.length; ++t) if (this.linked[t].doc == e) {
                        this.linked.splice(t, 1), e.unlinkDoc(this), xo(wo(this));
                        break
                    }
                    if (e.history == this.history) {
                        var n = [e.id];
                        Oi(e, function (e) {
                            return n.push(e.id)
                        }, !0), e.history = new Ai(null), e.history.done = Wi(this.history.done, n), e.history.undone = Wi(this.history.undone, n)
                    }
                }, iterLinkedDocs: function (e) {
                    Oi(this, e)
                }, getMode: function () {
                    return this.mode
                }, getEditor: function () {
                    return this.cm
                }, splitLines: function (e) {
                    return this.lineSep ? e.split(this.lineSep) : Le(e)
                }, lineSeparator: function () {
                    return this.lineSep || "\n"
                }, setDirection: Qr(function (e) {
                    var t;
                    "rtl" != e && (e = "ltr"), e != this.direction && (this.direction = e, this.iter(function (e) {
                        return e.order = null
                    }), this.cm && qr(t = this.cm, function () {
                        Mi(t), sr(t)
                    }))
                })
            }), Co.prototype.eachLine = Co.prototype.iter;
            var So = 0;

            function Eo(e) {
                var t = this;
                if (To(t), !ge(t, e) && !bn(t.display, e)) {
                    we(e), s && (So = +new Date);
                    var n = or(t, e, !0), r = e.dataTransfer.files;
                    if (n && !t.isReadOnly()) if (r && r.length && window.FileReader && window.File) for (var i = r.length, o = Array(i), a = 0, l = function (e, r) {
                        if (!t.options.allowDropFileTypes || -1 != H(t.options.allowDropFileTypes, e.type)) {
                            var s = new FileReader;
                            s.onload = Xr(t, function () {
                                var e = s.result;
                                if (/[\x00-\x08\x0e-\x1f]{2}/.test(e) && (e = ""), o[r] = e, ++a == i) {
                                    var l = {
                                        from: n = st(t.doc, n),
                                        to: n,
                                        text: t.doc.splitLines(o.join(t.doc.lineSeparator())),
                                        origin: "paste"
                                    };
                                    no(t.doc, l), $i(t.doc, yi(n, bi(l)))
                                }
                            }), s.readAsText(e)
                        }
                    }, u = 0; u < i; ++u) l(r[u], u); else {
                        if (t.state.draggingText && -1 < t.doc.sel.contains(n)) return t.state.draggingText(e), void setTimeout(function () {
                            return t.display.input.focus()
                        }, 20);
                        try {
                            var c = e.dataTransfer.getData("Text");
                            if (c) {
                                var p;
                                if (t.state.draggingText && !t.state.draggingText.copy && (p = t.listSelections()), Gi(t.doc, yi(n, n)), p) for (var d = 0; d < p.length; ++d) so(t.doc, "", p[d].anchor, p[d].head, "drag");
                                t.replaceSelection(c, "around", "paste"), t.display.input.focus()
                            }
                        } catch (e) {
                        }
                    }
                }
            }

            function To(e) {
                e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor), e.display.dragCursor = null)
            }

            function Oo(e) {
                if (document.getElementsByClassName) {
                    for (var t = document.getElementsByClassName("CodeMirror"), n = [], r = 0; r < t.length; r++) {
                        var i = t[r].CodeMirror;
                        i && n.push(i)
                    }
                    n.length && n[0].operation(function () {
                        for (var t = 0; t < n.length; t++) e(n[t])
                    })
                }
            }

            var No = !1;

            function Mo(e) {
                var t = e.display;
                t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null, t.scrollbarsClipped = !1, e.setSize()
            }

            for (var Ao = {
                3: "Pause",
                8: "Backspace",
                9: "Tab",
                13: "Enter",
                16: "Shift",
                17: "Ctrl",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Esc",
                32: "Space",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "Left",
                38: "Up",
                39: "Right",
                40: "Down",
                44: "PrintScrn",
                45: "Insert",
                46: "Delete",
                59: ";",
                61: "=",
                91: "Mod",
                92: "Mod",
                93: "Mod",
                106: "*",
                107: "=",
                109: "-",
                110: ".",
                111: "/",
                145: "ScrollLock",
                173: "-",
                186: ";",
                187: "=",
                188: ",",
                189: "-",
                190: ".",
                191: "/",
                192: "`",
                219: "[",
                220: "\\",
                221: "]",
                222: "'",
                63232: "Up",
                63233: "Down",
                63234: "Left",
                63235: "Right",
                63272: "Delete",
                63273: "Home",
                63275: "End",
                63276: "PageUp",
                63277: "PageDown",
                63302: "Insert"
            }, Po = 0; Po < 10; Po++) Ao[Po + 48] = Ao[Po + 96] = String(Po);
            for (var Lo = 65; Lo <= 90; Lo++) Ao[Lo] = String.fromCharCode(Lo);
            for (var Ro = 1; Ro <= 12; Ro++) Ao[Ro + 111] = Ao[Ro + 63235] = "F" + Ro;
            var Do = {};

            function Io(e) {
                var t, n, r, i, o = e.split(/-(?!$)/);
                e = o[o.length - 1];
                for (var a = 0; a < o.length - 1; a++) {
                    var s = o[a];
                    if (/^(cmd|meta|m)$/i.test(s)) i = !0; else if (/^a(lt)?$/i.test(s)) t = !0; else if (/^(c|ctrl|control)$/i.test(s)) n = !0; else {
                        if (!/^s(hift)?$/i.test(s)) throw new Error("Unrecognized modifier name: " + s);
                        r = !0
                    }
                }
                return t && (e = "Alt-" + e), n && (e = "Ctrl-" + e), i && (e = "Cmd-" + e), r && (e = "Shift-" + e), e
            }

            function zo(e, t, n, r) {
                var i = (t = Ho(t)).call ? t.call(e, r) : t[e];
                if (!1 === i) return "nothing";
                if ("..." === i) return "multi";
                if (null != i && n(i)) return "handled";
                if (t.fallthrough) {
                    if ("[object Array]" != Object.prototype.toString.call(t.fallthrough)) return zo(e, t.fallthrough, n, r);
                    for (var o = 0; o < t.fallthrough.length; o++) {
                        var a = zo(e, t.fallthrough[o], n, r);
                        if (a) return a
                    }
                }
            }

            function jo(e) {
                var t = "string" == typeof e ? e : Ao[e.keyCode];
                return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t
            }

            function Wo(e, t, n) {
                var r = e;
                return t.altKey && "Alt" != r && (e = "Alt-" + e), (k ? t.metaKey : t.ctrlKey) && "Ctrl" != r && (e = "Ctrl-" + e), (k ? t.ctrlKey : t.metaKey) && "Cmd" != r && (e = "Cmd-" + e), !n && t.shiftKey && "Shift" != r && (e = "Shift-" + e), e
            }

            function Fo(e, t) {
                if (d && 34 == e.keyCode && e.char) return !1;
                var n = Ao[e.keyCode];
                return null != n && !e.altGraphKey && (3 == e.keyCode && e.code && (n = e.code), Wo(n, e, t))
            }

            function Ho(e) {
                return "string" == typeof e ? Do[e] : e
            }

            function Uo(e, t) {
                for (var n = e.doc.sel.ranges, r = [], i = 0; i < n.length; i++) {
                    for (var o = t(n[i]); r.length && tt(o.from, Y(r).to) <= 0;) {
                        var a = r.pop();
                        if (tt(a.from, o.from) < 0) {
                            o.from = a.from;
                            break
                        }
                    }
                    r.push(o)
                }
                qr(e, function () {
                    for (var t = r.length - 1; 0 <= t; t--) so(e.doc, "", r[t].from, r[t].to, "+delete");
                    Tr(e)
                })
            }

            function Bo(e, t, n) {
                var r = ae(e.text, t + n, n);
                return r < 0 || r > e.text.length ? null : r
            }

            function Vo(e, t, n) {
                var r = Bo(e, t.ch, n);
                return null == r ? null : new et(t.line, r, n < 0 ? "after" : "before")
            }

            function $o(e, t, n, r, i) {
                if (e) {
                    var o = pe(n, t.doc.direction);
                    if (o) {
                        var a, s = i < 0 ? Y(o) : o[0], l = i < 0 == (1 == s.level) ? "after" : "before";
                        if (0 < s.level || "rtl" == t.doc.direction) {
                            var u = Mn(t, n);
                            a = i < 0 ? n.text.length - 1 : 0;
                            var c = An(t, u, a).top;
                            a = se(function (e) {
                                return An(t, u, e).top == c
                            }, i < 0 == (1 == s.level) ? s.from : s.to - 1, a), "before" == l && (a = Bo(n, a, 1))
                        } else a = i < 0 ? s.to : s.from;
                        return new et(r, a, l)
                    }
                }
                return new et(r, i < 0 ? n.text.length : 0, i < 0 ? "before" : "after")
            }

            Do.basic = {
                Left: "goCharLeft",
                Right: "goCharRight",
                Up: "goLineUp",
                Down: "goLineDown",
                End: "goLineEnd",
                Home: "goLineStartSmart",
                PageUp: "goPageUp",
                PageDown: "goPageDown",
                Delete: "delCharAfter",
                Backspace: "delCharBefore",
                "Shift-Backspace": "delCharBefore",
                Tab: "defaultTab",
                "Shift-Tab": "indentAuto",
                Enter: "newlineAndIndent",
                Insert: "toggleOverwrite",
                Esc: "singleSelection"
            }, Do.pcDefault = {
                "Ctrl-A": "selectAll",
                "Ctrl-D": "deleteLine",
                "Ctrl-Z": "undo",
                "Shift-Ctrl-Z": "redo",
                "Ctrl-Y": "redo",
                "Ctrl-Home": "goDocStart",
                "Ctrl-End": "goDocEnd",
                "Ctrl-Up": "goLineUp",
                "Ctrl-Down": "goLineDown",
                "Ctrl-Left": "goGroupLeft",
                "Ctrl-Right": "goGroupRight",
                "Alt-Left": "goLineStart",
                "Alt-Right": "goLineEnd",
                "Ctrl-Backspace": "delGroupBefore",
                "Ctrl-Delete": "delGroupAfter",
                "Ctrl-S": "save",
                "Ctrl-F": "find",
                "Ctrl-G": "findNext",
                "Shift-Ctrl-G": "findPrev",
                "Shift-Ctrl-F": "replace",
                "Shift-Ctrl-R": "replaceAll",
                "Ctrl-[": "indentLess",
                "Ctrl-]": "indentMore",
                "Ctrl-U": "undoSelection",
                "Shift-Ctrl-U": "redoSelection",
                "Alt-U": "redoSelection",
                fallthrough: "basic"
            }, Do.emacsy = {
                "Ctrl-F": "goCharRight",
                "Ctrl-B": "goCharLeft",
                "Ctrl-P": "goLineUp",
                "Ctrl-N": "goLineDown",
                "Alt-F": "goWordRight",
                "Alt-B": "goWordLeft",
                "Ctrl-A": "goLineStart",
                "Ctrl-E": "goLineEnd",
                "Ctrl-V": "goPageDown",
                "Shift-Ctrl-V": "goPageUp",
                "Ctrl-D": "delCharAfter",
                "Ctrl-H": "delCharBefore",
                "Alt-D": "delWordAfter",
                "Alt-Backspace": "delWordBefore",
                "Ctrl-K": "killLine",
                "Ctrl-T": "transposeChars",
                "Ctrl-O": "openLine"
            }, Do.macDefault = {
                "Cmd-A": "selectAll",
                "Cmd-D": "deleteLine",
                "Cmd-Z": "undo",
                "Shift-Cmd-Z": "redo",
                "Cmd-Y": "redo",
                "Cmd-Home": "goDocStart",
                "Cmd-Up": "goDocStart",
                "Cmd-End": "goDocEnd",
                "Cmd-Down": "goDocEnd",
                "Alt-Left": "goGroupLeft",
                "Alt-Right": "goGroupRight",
                "Cmd-Left": "goLineLeft",
                "Cmd-Right": "goLineRight",
                "Alt-Backspace": "delGroupBefore",
                "Ctrl-Alt-Backspace": "delGroupAfter",
                "Alt-Delete": "delGroupAfter",
                "Cmd-S": "save",
                "Cmd-F": "find",
                "Cmd-G": "findNext",
                "Shift-Cmd-G": "findPrev",
                "Cmd-Alt-F": "replace",
                "Shift-Cmd-Alt-F": "replaceAll",
                "Cmd-[": "indentLess",
                "Cmd-]": "indentMore",
                "Cmd-Backspace": "delWrappedLineLeft",
                "Cmd-Delete": "delWrappedLineRight",
                "Cmd-U": "undoSelection",
                "Shift-Cmd-U": "redoSelection",
                "Ctrl-Up": "goDocStart",
                "Ctrl-Down": "goDocEnd",
                fallthrough: ["basic", "emacsy"]
            }, Do.default = y ? Do.macDefault : Do.pcDefault;
            var Ko = {
                selectAll: eo, singleSelection: function (e) {
                    return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), V)
                }, killLine: function (e) {
                    return Uo(e, function (t) {
                        if (t.empty()) {
                            var n = Ke(e.doc, t.head.line).text.length;
                            return t.head.ch == n && t.head.line < e.lastLine() ? {
                                from: t.head,
                                to: et(t.head.line + 1, 0)
                            } : {from: t.head, to: et(t.head.line, n)}
                        }
                        return {from: t.from(), to: t.to()}
                    })
                }, deleteLine: function (e) {
                    return Uo(e, function (t) {
                        return {from: et(t.from().line, 0), to: st(e.doc, et(t.to().line + 1, 0))}
                    })
                }, delLineLeft: function (e) {
                    return Uo(e, function (e) {
                        return {from: et(e.from().line, 0), to: e.from()}
                    })
                }, delWrappedLineLeft: function (e) {
                    return Uo(e, function (t) {
                        var n = e.charCoords(t.head, "div").top + 5;
                        return {from: e.coordsChar({left: 0, top: n}, "div"), to: t.from()}
                    })
                }, delWrappedLineRight: function (e) {
                    return Uo(e, function (t) {
                        var n = e.charCoords(t.head, "div").top + 5,
                            r = e.coordsChar({left: e.display.lineDiv.offsetWidth + 100, top: n}, "div");
                        return {from: t.from(), to: r}
                    })
                }, undo: function (e) {
                    return e.undo()
                }, redo: function (e) {
                    return e.redo()
                }, undoSelection: function (e) {
                    return e.undoSelection()
                }, redoSelection: function (e) {
                    return e.redoSelection()
                }, goDocStart: function (e) {
                    return e.extendSelection(et(e.firstLine(), 0))
                }, goDocEnd: function (e) {
                    return e.extendSelection(et(e.lastLine()))
                }, goLineStart: function (e) {
                    return e.extendSelectionsBy(function (t) {
                        return Go(e, t.head.line)
                    }, {origin: "+move", bias: 1})
                }, goLineStartSmart: function (e) {
                    return e.extendSelectionsBy(function (t) {
                        return qo(e, t.head)
                    }, {origin: "+move", bias: 1})
                }, goLineEnd: function (e) {
                    return e.extendSelectionsBy(function (t) {
                        return function (e, t) {
                            var n = Ke(e.doc, t), r = function (e) {
                                for (var t; t = Dt(e);) e = t.find(1, !0).line;
                                return e
                            }(n);
                            return r != n && (t = Ye(r)), $o(!0, e, n, t, -1)
                        }(e, t.head.line)
                    }, {origin: "+move", bias: -1})
                }, goLineRight: function (e) {
                    return e.extendSelectionsBy(function (t) {
                        var n = e.cursorCoords(t.head, "div").top + 5;
                        return e.coordsChar({left: e.display.lineDiv.offsetWidth + 100, top: n}, "div")
                    }, K)
                }, goLineLeft: function (e) {
                    return e.extendSelectionsBy(function (t) {
                        var n = e.cursorCoords(t.head, "div").top + 5;
                        return e.coordsChar({left: 0, top: n}, "div")
                    }, K)
                }, goLineLeftSmart: function (e) {
                    return e.extendSelectionsBy(function (t) {
                        var n = e.cursorCoords(t.head, "div").top + 5, r = e.coordsChar({left: 0, top: n}, "div");
                        return r.ch < e.getLine(r.line).search(/\S/) ? qo(e, t.head) : r
                    }, K)
                }, goLineUp: function (e) {
                    return e.moveV(-1, "line")
                }, goLineDown: function (e) {
                    return e.moveV(1, "line")
                }, goPageUp: function (e) {
                    return e.moveV(-1, "page")
                }, goPageDown: function (e) {
                    return e.moveV(1, "page")
                }, goCharLeft: function (e) {
                    return e.moveH(-1, "char")
                }, goCharRight: function (e) {
                    return e.moveH(1, "char")
                }, goColumnLeft: function (e) {
                    return e.moveH(-1, "column")
                }, goColumnRight: function (e) {
                    return e.moveH(1, "column")
                }, goWordLeft: function (e) {
                    return e.moveH(-1, "word")
                }, goGroupRight: function (e) {
                    return e.moveH(1, "group")
                }, goGroupLeft: function (e) {
                    return e.moveH(-1, "group")
                }, goWordRight: function (e) {
                    return e.moveH(1, "word")
                }, delCharBefore: function (e) {
                    return e.deleteH(-1, "char")
                }, delCharAfter: function (e) {
                    return e.deleteH(1, "char")
                }, delWordBefore: function (e) {
                    return e.deleteH(-1, "word")
                }, delWordAfter: function (e) {
                    return e.deleteH(1, "word")
                }, delGroupBefore: function (e) {
                    return e.deleteH(-1, "group")
                }, delGroupAfter: function (e) {
                    return e.deleteH(1, "group")
                }, indentAuto: function (e) {
                    return e.indentSelection("smart")
                }, indentMore: function (e) {
                    return e.indentSelection("add")
                }, indentLess: function (e) {
                    return e.indentSelection("subtract")
                }, insertTab: function (e) {
                    return e.replaceSelection("\t")
                }, insertSoftTab: function (e) {
                    for (var t = [], n = e.listSelections(), r = e.options.tabSize, i = 0; i < n.length; i++) {
                        var o = n[i].from(), a = W(e.getLine(o.line), o.ch, r);
                        t.push(X(r - a % r))
                    }
                    e.replaceSelections(t)
                }, defaultTab: function (e) {
                    e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab")
                }, transposeChars: function (e) {
                    return qr(e, function () {
                        for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++) if (t[r].empty()) {
                            var i = t[r].head, o = Ke(e.doc, i.line).text;
                            if (o) if (i.ch == o.length && (i = new et(i.line, i.ch - 1)), 0 < i.ch) i = new et(i.line, i.ch + 1), e.replaceRange(o.charAt(i.ch - 1) + o.charAt(i.ch - 2), et(i.line, i.ch - 2), i, "+transpose"); else if (i.line > e.doc.first) {
                                var a = Ke(e.doc, i.line - 1).text;
                                a && (i = new et(i.line, 1), e.replaceRange(o.charAt(0) + e.doc.lineSeparator() + a.charAt(a.length - 1), et(i.line - 1, a.length - 1), i, "+transpose"))
                            }
                            n.push(new gi(i, i))
                        }
                        e.setSelections(n)
                    })
                }, newlineAndIndent: function (e) {
                    return qr(e, function () {
                        for (var t = e.listSelections(), n = t.length - 1; 0 <= n; n--) e.replaceRange(e.doc.lineSeparator(), t[n].anchor, t[n].head, "+input");
                        t = e.listSelections();
                        for (var r = 0; r < t.length; r++) e.indentLine(t[r].from().line, null, !0);
                        Tr(e)
                    })
                }, openLine: function (e) {
                    return e.replaceSelection("\n", "start")
                }, toggleOverwrite: function (e) {
                    return e.toggleOverwrite()
                }
            };

            function Go(e, t) {
                var n = Ke(e.doc, t), r = jt(n);
                return r != n && (t = Ye(r)), $o(!0, e, r, t, 1)
            }

            function qo(e, t) {
                var n = Go(e, t.line), r = Ke(e.doc, n.line), i = pe(r, e.doc.direction);
                if (i && 0 != i[0].level) return n;
                var o = Math.max(0, r.text.search(/\S/)), a = t.line == n.line && t.ch <= o && t.ch;
                return et(n.line, a ? 0 : o, n.sticky)
            }

            function Xo(e, t, n) {
                if ("string" == typeof t && !(t = Ko[t])) return !1;
                e.display.input.ensurePolled();
                var r = e.display.shift, i = !1;
                try {
                    e.isReadOnly() && (e.state.suppressEdits = !0), n && (e.display.shift = !1), i = t(e) != B
                } finally {
                    e.display.shift = r, e.state.suppressEdits = !1
                }
                return i
            }

            var Yo = new F;

            function Qo(e, t, n, r) {
                var i = e.state.keySeq;
                if (i) {
                    if (jo(t)) return "handled";
                    if (/\'$/.test(t) ? e.state.keySeq = null : Yo.set(50, function () {
                        e.state.keySeq == i && (e.state.keySeq = null, e.display.input.reset())
                    }), Zo(e, i + " " + t, n, r)) return !0
                }
                return Zo(e, t, n, r)
            }

            function Zo(e, t, n, r) {
                var i = function (e, t, n) {
                    for (var r = 0; r < e.state.keyMaps.length; r++) {
                        var i = zo(t, e.state.keyMaps[r], n, e);
                        if (i) return i
                    }
                    return e.options.extraKeys && zo(t, e.options.extraKeys, n, e) || zo(t, e.options.keyMap, n, e)
                }(e, t, r);
                return "multi" == i && (e.state.keySeq = t), "handled" == i && sn(e, "keyHandled", e, t, n), "handled" != i && "multi" != i || (we(n), gr(e)), !!i
            }

            function Jo(e, t) {
                var n = Fo(t, !0);
                return !!n && (t.shiftKey && !e.state.keySeq ? Qo(e, "Shift-" + n, t, function (t) {
                    return Xo(e, t, !0)
                }) || Qo(e, n, t, function (t) {
                    if ("string" == typeof t ? /^go[A-Z]/.test(t) : t.motion) return Xo(e, t)
                }) : Qo(e, n, t, function (t) {
                    return Xo(e, t)
                }))
            }

            var ea = null;

            function ta(e) {
                if (this.curOp.focus = L(), !ge(this, e)) {
                    s && l < 11 && 27 == e.keyCode && (e.returnValue = !1);
                    var t = e.keyCode;
                    this.display.shift = 16 == t || e.shiftKey;
                    var n = Jo(this, e);
                    d && (ea = n ? t : null, !n && 88 == t && !De && (y ? e.metaKey : e.ctrlKey) && this.replaceSelection("", null, "cut")), 18 != t || /\bCodeMirror-crosshair\b/.test(this.display.lineDiv.className) || function (e) {
                        var t = e.display.lineDiv;

                        function n(e) {
                            18 != e.keyCode && e.altKey || (T(t, "CodeMirror-crosshair"), _e(document, "keyup", n), _e(document, "mouseover", n))
                        }

                        R(t, "CodeMirror-crosshair"), fe(document, "keyup", n), fe(document, "mouseover", n)
                    }(this)
                }
            }

            function na(e) {
                16 == e.keyCode && (this.doc.sel.shift = !1), ge(this, e)
            }

            function ra(e) {
                if (!(bn(this.display, e) || ge(this, e) || e.ctrlKey && !e.altKey || y && e.metaKey)) {
                    var t = e.keyCode, n = e.charCode;
                    if (d && t == ea) return ea = null, void we(e);
                    if (!d || e.which && !(e.which < 10) || !Jo(this, e)) {
                        var r, i = String.fromCharCode(null == n ? t : n);
                        "\b" != i && (Qo(r = this, "'" + i + "'", e, function (e) {
                            return Xo(r, e, !0)
                        }) || this.display.input.onKeyPress(e))
                    }
                }
            }

            var ia, oa, aa = function (e, t, n) {
                this.time = e, this.pos = t, this.button = n
            };

            function sa(e) {
                var t = this, n = t.display;
                if (!(ge(t, e) || n.activeTouch && n.input.supportsTouch())) if (n.input.ensurePolled(), n.shift = e.shiftKey, bn(n, e)) u || (n.scroller.draggable = !1, setTimeout(function () {
                    return n.scroller.draggable = !0
                }, 100)); else if (!ca(t, e)) {
                    var r, i, o, a = or(t, e), c = Ee(e),
                        p = a ? (r = a, i = c, o = +new Date, oa && oa.compare(o, r, i) ? (ia = oa = null, "triple") : ia && ia.compare(o, r, i) ? (oa = new aa(o, r, i), ia = null, "double") : (ia = new aa(o, r, i), oa = null, "single")) : "single";
                    window.focus(), 1 == c && t.state.selectingText && t.state.selectingText(e), a && function (e, t, n, r, i) {
                        var o = "Click";
                        return "double" == p ? o = "Double" + o : "triple" == p && (o = "Triple" + o), Qo(e, Wo(o = (1 == c ? "Left" : 2 == c ? "Middle" : "Right") + o, i), i, function (t) {
                            if ("string" == typeof t && (t = Ko[t]), !t) return !1;
                            var r = !1;
                            try {
                                e.isReadOnly() && (e.state.suppressEdits = !0), r = t(e, n) != B
                            } finally {
                                e.state.suppressEdits = !1
                            }
                            return r
                        })
                    }(t, 0, a, 0, e) || (1 == c ? a ? function (e, t, n, r) {
                        s ? setTimeout(z(vr, e), 0) : e.curOp.focus = L();
                        var i, o = function (e, t, n) {
                            var r = e.getOption("configureMouse"), i = r ? r(e, t, n) : {};
                            if (null == i.unit) {
                                var o = b ? n.shiftKey && n.metaKey : n.altKey;
                                i.unit = o ? "rectangle" : "single" == t ? "char" : "double" == t ? "word" : "line"
                            }
                            return (null == i.extend || e.doc.extend) && (i.extend = e.doc.extend || n.shiftKey), null == i.addNew && (i.addNew = y ? n.metaKey : n.ctrlKey), null == i.moveOnDrag && (i.moveOnDrag = !(y ? n.altKey : n.ctrlKey)), i
                        }(e, n, r), a = e.doc.sel;
                        e.options.dragDrop && Ne && !e.isReadOnly() && "single" == n && -1 < (i = a.contains(t)) && (tt((i = a.ranges[i]).from(), t) < 0 || 0 < t.xRel) && (0 < tt(i.to(), t) || t.xRel < 0) ? function (e, t, n, r) {
                            var i = e.display, o = !1, a = Xr(e, function (t) {
                                u && (i.scroller.draggable = !1), e.state.draggingText = !1, _e(i.wrapper.ownerDocument, "mouseup", a), _e(i.wrapper.ownerDocument, "mousemove", c), _e(i.scroller, "dragstart", p), _e(i.scroller, "drop", a), o || (we(t), r.addNew || Hi(e.doc, n, null, null, r.extend), u || s && 9 == l ? setTimeout(function () {
                                    i.wrapper.ownerDocument.body.focus(), i.input.focus()
                                }, 20) : i.input.focus())
                            }), c = function (e) {
                                o = o || 10 <= Math.abs(t.clientX - e.clientX) + Math.abs(t.clientY - e.clientY)
                            }, p = function () {
                                return o = !0
                            };
                            u && (i.scroller.draggable = !0), (e.state.draggingText = a).copy = !r.moveOnDrag, i.scroller.dragDrop && i.scroller.dragDrop(), fe(i.wrapper.ownerDocument, "mouseup", a), fe(i.wrapper.ownerDocument, "mousemove", c), fe(i.scroller, "dragstart", p), fe(i.scroller, "drop", a), yr(e), setTimeout(function () {
                                return i.input.focus()
                            }, 20)
                        }(e, r, t, o) : function (e, t, n, r) {
                            var i = e.display, o = e.doc;
                            we(t);
                            var a, s, l = o.sel, u = l.ranges;
                            if (r.addNew && !r.extend ? (s = o.sel.contains(n), a = -1 < s ? u[s] : new gi(n, n)) : (a = o.sel.primary(), s = o.sel.primIndex), "rectangle" == r.unit) r.addNew || (a = new gi(n, n)), n = or(e, t, !0, !0), s = -1; else {
                                var c = la(e, n, r.unit);
                                a = r.extend ? Fi(a, c.anchor, c.head, r.extend) : c
                            }
                            r.addNew ? -1 == s ? (s = u.length, Ki(o, vi(e, u.concat([a]), s), {
                                scroll: !1,
                                origin: "*mouse"
                            })) : 1 < u.length && u[s].empty() && "char" == r.unit && !r.extend ? (Ki(o, vi(e, u.slice(0, s).concat(u.slice(s + 1)), 0), {
                                scroll: !1,
                                origin: "*mouse"
                            }), l = o.sel) : Bi(o, s, a, $) : (Ki(o, new mi([a], s = 0), $), l = o.sel);
                            var p = n;
                            var d = i.wrapper.getBoundingClientRect(), f = 0;

                            function h(t) {
                                e.state.selectingText = !1, f = 1 / 0, t && (we(t), i.input.focus()), _e(i.wrapper.ownerDocument, "mousemove", _), _e(i.wrapper.ownerDocument, "mouseup", m), o.history.lastSelOrigin = null
                            }

                            var _ = Xr(e, function (t) {
                                0 !== t.buttons && Ee(t) ? function t(u) {
                                    var c = ++f, h = or(e, u, !0, "rectangle" == r.unit);
                                    if (h) if (0 != tt(h, p)) {
                                        e.curOp.focus = L(), function (t) {
                                            if (0 != tt(p, t)) if (p = t, "rectangle" == r.unit) {
                                                for (var i = [], u = e.options.tabSize, c = W(Ke(o, n.line).text, n.ch, u), d = W(Ke(o, t.line).text, t.ch, u), f = Math.min(c, d), h = Math.max(c, d), _ = Math.min(n.line, t.line), m = Math.min(e.lastLine(), Math.max(n.line, t.line)); _ <= m; _++) {
                                                    var g = Ke(o, _).text, v = G(g, f, u);
                                                    f == h ? i.push(new gi(et(_, v), et(_, v))) : g.length > v && i.push(new gi(et(_, v), et(_, G(g, h, u))))
                                                }
                                                i.length || i.push(new gi(n, n)), Ki(o, vi(e, l.ranges.slice(0, s).concat(i), s), {
                                                    origin: "*mouse",
                                                    scroll: !1
                                                }), e.scrollIntoView(t)
                                            } else {
                                                var y, b = a, w = la(e, t, r.unit), x = b.anchor;
                                                x = 0 < tt(w.anchor, x) ? (y = w.head, ot(b.from(), w.anchor)) : (y = w.anchor, it(b.to(), w.head));
                                                var k = l.ranges.slice(0);
                                                k[s] = function (e, t) {
                                                    var n = t.anchor, r = t.head, i = Ke(e.doc, n.line);
                                                    if (0 == tt(n, r) && n.sticky == r.sticky) return t;
                                                    var o = pe(i);
                                                    if (!o) return t;
                                                    var a = ue(o, n.ch, n.sticky), s = o[a];
                                                    if (s.from != n.ch && s.to != n.ch) return t;
                                                    var l, u = a + (s.from == n.ch == (1 != s.level) ? 0 : 1);
                                                    if (0 == u || u == o.length) return t;
                                                    if (r.line != n.line) l = 0 < (r.line - n.line) * ("ltr" == e.doc.direction ? 1 : -1); else {
                                                        var c = ue(o, r.ch, r.sticky),
                                                            p = c - a || (r.ch - n.ch) * (1 == s.level ? -1 : 1);
                                                        l = c == u - 1 || c == u ? p < 0 : 0 < p
                                                    }
                                                    var d = o[u + (l ? -1 : 0)], f = l == (1 == d.level),
                                                        h = f ? d.from : d.to, _ = f ? "after" : "before";
                                                    return n.ch == h && n.sticky == _ ? t : new gi(new et(n.line, h, _), r)
                                                }(e, new gi(st(o, x), y)), Ki(o, vi(e, k, s), $)
                                            }
                                        }(h);
                                        var _ = Cr(i, o);
                                        (h.line >= _.to || h.line < _.from) && setTimeout(Xr(e, function () {
                                            f == c && t(u)
                                        }), 150)
                                    } else {
                                        var m = u.clientY < d.top ? -20 : u.clientY > d.bottom ? 20 : 0;
                                        m && setTimeout(Xr(e, function () {
                                            f == c && (i.scroller.scrollTop += m, t(u))
                                        }), 50)
                                    }
                                }(t) : h(t)
                            }), m = Xr(e, h);
                            e.state.selectingText = m, fe(i.wrapper.ownerDocument, "mousemove", _), fe(i.wrapper.ownerDocument, "mouseup", m)
                        }(e, r, t, o)
                    }(t, a, p, e) : Se(e) == n.scroller && we(e) : 2 == c ? (a && Hi(t.doc, a), setTimeout(function () {
                        return n.input.focus()
                    }, 20)) : 3 == c && (C ? t.display.input.onContextMenu(e) : yr(t)))
                }
            }

            function la(e, t, n) {
                if ("char" == n) return new gi(t, t);
                if ("word" == n) return e.findWordAt(t);
                if ("line" == n) return new gi(et(t.line, 0), st(e.doc, et(t.line + 1, 0)));
                var r = n(e, t);
                return new gi(r.from, r.to)
            }

            function ua(e, t, n, r) {
                var i, o;
                if (t.touches) i = t.touches[0].clientX, o = t.touches[0].clientY; else try {
                    i = t.clientX, o = t.clientY
                } catch (t) {
                    return !1
                }
                if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right)) return !1;
                r && we(t);
                var a = e.display, s = a.lineDiv.getBoundingClientRect();
                if (o > s.bottom || !ye(e, n)) return ke(t);
                o -= s.top - a.viewOffset;
                for (var l = 0; l < e.display.gutterSpecs.length; ++l) {
                    var u = a.gutters.childNodes[l];
                    if (u && u.getBoundingClientRect().right >= i) return me(e, n, e, Qe(e.doc, o), e.display.gutterSpecs[l].className, t), ke(t)
                }
            }

            function ca(e, t) {
                return ua(e, t, "gutterClick", !0)
            }

            function pa(e) {
                e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), jn(e)
            }

            aa.prototype.compare = function (e, t, n) {
                return this.time + 400 > e && 0 == tt(t, this.pos) && n == this.button
            };
            var da = {
                toString: function () {
                    return "CodeMirror.Init"
                }
            }, fa = {}, ha = {};

            function _a(e, t, n) {
                if (!t != !(n && n != da)) {
                    var r = e.display.dragFunctions, i = t ? fe : _e;
                    i(e.display.scroller, "dragstart", r.start), i(e.display.scroller, "dragenter", r.enter), i(e.display.scroller, "dragover", r.over), i(e.display.scroller, "dragleave", r.leave), i(e.display.scroller, "drop", r.drop)
                }
            }

            function ma(e) {
                e.options.lineWrapping ? (R(e.display.wrapper, "CodeMirror-wrap"), e.display.sizer.style.minWidth = "", e.display.sizerWidth = null) : (T(e.display.wrapper, "CodeMirror-wrap"), $t(e)), ir(e), sr(e), jn(e), setTimeout(function () {
                    return zr(e)
                }, 100)
            }

            function ga(e, t) {
                var n = this;
                if (!(this instanceof ga)) return new ga(e, t);
                this.options = t = t ? j(t) : {}, j(fa, t, !1);
                var r = t.value;
                "string" == typeof r ? r = new Co(r, t.mode, null, t.lineSeparator, t.direction) : t.mode && (r.modeOption = t.mode), this.doc = r;
                var i = new ga.inputStyles[t.inputStyle](this), o = this.display = new pi(e, r, i, t);
                for (var a in pa(o.wrapper.CodeMirror = this), t.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), Fr(this), this.state = {
                    keyMaps: [],
                    overlays: [],
                    modeGen: 0,
                    overwrite: !1,
                    delayingBlurEvent: !1,
                    focused: !1,
                    suppressEdits: !1,
                    pasteIncoming: -1,
                    cutIncoming: -1,
                    selectingText: !1,
                    draggingText: !1,
                    highlight: new F,
                    keySeq: null,
                    specialChars: null
                }, t.autofocus && !v && o.input.focus(), s && l < 11 && setTimeout(function () {
                    return n.display.input.reset(!0)
                }, 20), function (e) {
                    var t = e.display;
                    fe(t.scroller, "mousedown", Xr(e, sa)), fe(t.scroller, "dblclick", s && l < 11 ? Xr(e, function (t) {
                        if (!ge(e, t)) {
                            var n = or(e, t);
                            if (n && !ca(e, t) && !bn(e.display, t)) {
                                we(t);
                                var r = e.findWordAt(n);
                                Hi(e.doc, r.anchor, r.head)
                            }
                        }
                    }) : function (t) {
                        return ge(e, t) || we(t)
                    }), fe(t.scroller, "contextmenu", function (t) {
                        return function (e, t) {
                            var n, r;
                            bn(e.display, t) || (r = t, ye(n = e, "gutterContextMenu") && ua(n, r, "gutterContextMenu", !1)) || ge(e, t, "contextmenu") || C || e.display.input.onContextMenu(t)
                        }(e, t)
                    });
                    var n, r = {end: 0};

                    function i() {
                        t.activeTouch && (n = setTimeout(function () {
                            return t.activeTouch = null
                        }, 1e3), (r = t.activeTouch).end = +new Date)
                    }

                    function o(e, t) {
                        if (null == t.left) return !0;
                        var n = t.left - e.left, r = t.top - e.top;
                        return 400 < n * n + r * r
                    }

                    fe(t.scroller, "touchstart", function (i) {
                        if (!ge(e, i) && !function (e) {
                            if (1 != e.touches.length) return !1;
                            var t = e.touches[0];
                            return t.radiusX <= 1 && t.radiusY <= 1
                        }(i) && !ca(e, i)) {
                            t.input.ensurePolled(), clearTimeout(n);
                            var o = +new Date;
                            t.activeTouch = {
                                start: o,
                                moved: !1,
                                prev: o - r.end <= 300 ? r : null
                            }, 1 == i.touches.length && (t.activeTouch.left = i.touches[0].pageX, t.activeTouch.top = i.touches[0].pageY)
                        }
                    }), fe(t.scroller, "touchmove", function () {
                        t.activeTouch && (t.activeTouch.moved = !0)
                    }), fe(t.scroller, "touchend", function (n) {
                        var r = t.activeTouch;
                        if (r && !bn(t, n) && null != r.left && !r.moved && new Date - r.start < 300) {
                            var a, s = e.coordsChar(t.activeTouch, "page");
                            a = !r.prev || o(r, r.prev) ? new gi(s, s) : !r.prev.prev || o(r, r.prev.prev) ? e.findWordAt(s) : new gi(et(s.line, 0), st(e.doc, et(s.line + 1, 0))), e.setSelection(a.anchor, a.head), e.focus(), we(n)
                        }
                        i()
                    }), fe(t.scroller, "touchcancel", i), fe(t.scroller, "scroll", function () {
                        t.scroller.clientHeight && (Ar(e, t.scroller.scrollTop), Lr(e, t.scroller.scrollLeft, !0), me(e, "scroll", e))
                    }), fe(t.scroller, "mousewheel", function (t) {
                        return _i(e, t)
                    }), fe(t.scroller, "DOMMouseScroll", function (t) {
                        return _i(e, t)
                    }), fe(t.wrapper, "scroll", function () {
                        return t.wrapper.scrollTop = t.wrapper.scrollLeft = 0
                    }), t.dragFunctions = {
                        enter: function (t) {
                            ge(e, t) || Ce(t)
                        }, over: function (t) {
                            ge(e, t) || (function (e, t) {
                                var n = or(e, t);
                                if (n) {
                                    var r = document.createDocumentFragment();
                                    hr(e, n, r), e.display.dragCursor || (e.display.dragCursor = M("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)), N(e.display.dragCursor, r)
                                }
                            }(e, t), Ce(t))
                        }, start: function (t) {
                            return function (e, t) {
                                if (s && (!e.state.draggingText || +new Date - So < 100)) Ce(t); else if (!ge(e, t) && !bn(e.display, t) && (t.dataTransfer.setData("Text", e.getSelection()), t.dataTransfer.effectAllowed = "copyMove", t.dataTransfer.setDragImage && !f)) {
                                    var n = M("img", null, null, "position: fixed; left: 0; top: 0;");
                                    n.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", d && (n.width = n.height = 1, e.display.wrapper.appendChild(n), n._top = n.offsetTop), t.dataTransfer.setDragImage(n, 0, 0), d && n.parentNode.removeChild(n)
                                }
                            }(e, t)
                        }, drop: Xr(e, Eo), leave: function (t) {
                            ge(e, t) || To(e)
                        }
                    };
                    var a = t.input.getField();
                    fe(a, "keyup", function (t) {
                        return na.call(e, t)
                    }), fe(a, "keydown", Xr(e, ta)), fe(a, "keypress", Xr(e, ra)), fe(a, "focus", function (t) {
                        return br(e, t)
                    }), fe(a, "blur", function (t) {
                        return wr(e, t)
                    })
                }(this), function () {
                    var e;
                    No || (fe(window, "resize", function () {
                        null == e && (e = setTimeout(function () {
                            e = null, Oo(Mo)
                        }, 100))
                    }), fe(window, "blur", function () {
                        return Oo(wr)
                    }), No = !0)
                }(), Ur(this), this.curOp.forceUpdate = !0, Ni(this, r), t.autofocus && !v || this.hasFocus() ? setTimeout(z(br, this), 20) : wr(this), ha) ha.hasOwnProperty(a) && ha[a](n, t[a], da);
                si(this), t.finishInit && t.finishInit(this);
                for (var c = 0; c < va.length; ++c) va[c](n);
                Br(this), u && t.lineWrapping && "optimizelegibility" == getComputedStyle(o.lineDiv).textRendering && (o.lineDiv.style.textRendering = "auto")
            }

            ga.defaults = fa, ga.optionHandlers = ha;
            var va = [];

            function ya(e, t, n, r) {
                var i, o = e.doc;
                null == n && (n = "add"), "smart" == n && (o.mode.indent ? i = ft(e, t).state : n = "prev");
                var a = e.options.tabSize, s = Ke(o, t), l = W(s.text, null, a);
                s.stateAfter && (s.stateAfter = null);
                var u, c = s.text.match(/^\s*/)[0];
                if (r || /\S/.test(s.text)) {
                    if ("smart" == n && ((u = o.mode.indent(i, s.text.slice(c.length), s.text)) == B || 150 < u)) {
                        if (!r) return;
                        n = "prev"
                    }
                } else u = 0, n = "not";
                "prev" == n ? u = t > o.first ? W(Ke(o, t - 1).text, null, a) : 0 : "add" == n ? u = l + e.options.indentUnit : "subtract" == n ? u = l - e.options.indentUnit : "number" == typeof n && (u = l + n), u = Math.max(0, u);
                var p = "", d = 0;
                if (e.options.indentWithTabs) for (var f = Math.floor(u / a); f; --f) d += a, p += "\t";
                if (d < u && (p += X(u - d)), p != c) return so(o, p, et(t, 0), et(t, c.length), "+input"), !(s.stateAfter = null);
                for (var h = 0; h < o.sel.ranges.length; h++) {
                    var _ = o.sel.ranges[h];
                    if (_.head.line == t && _.head.ch < c.length) {
                        var m = et(t, c.length);
                        Bi(o, h, new gi(m, m));
                        break
                    }
                }
            }

            ga.defineInitHook = function (e) {
                return va.push(e)
            };
            var ba = null;

            function wa(e) {
                ba = e
            }

            function xa(e, t, n, r, i) {
                var o = e.doc;
                e.display.shift = !1, r || (r = o.sel);
                var a = +new Date - 200, s = "paste" == i || e.state.pasteIncoming > a, l = Le(t), u = null;
                if (s && 1 < r.ranges.length) if (ba && ba.text.join("\n") == t) {
                    if (r.ranges.length % ba.text.length == 0) {
                        u = [];
                        for (var c = 0; c < ba.text.length; c++) u.push(o.splitLines(ba.text[c]))
                    }
                } else l.length == r.ranges.length && e.options.pasteLinesPerSelection && (u = Q(l, function (e) {
                    return [e]
                }));
                for (var p = e.curOp.updateInput, d = r.ranges.length - 1; 0 <= d; d--) {
                    var f = r.ranges[d], h = f.from(), _ = f.to();
                    f.empty() && (n && 0 < n ? h = et(h.line, h.ch - n) : e.state.overwrite && !s ? _ = et(_.line, Math.min(Ke(o, _.line).text.length, _.ch + Y(l).length)) : s && ba && ba.lineWise && ba.text.join("\n") == t && (h = _ = et(h.line, 0)));
                    var m = {
                        from: h,
                        to: _,
                        text: u ? u[d % u.length] : l,
                        origin: i || (s ? "paste" : e.state.cutIncoming > a ? "cut" : "+input")
                    };
                    no(e.doc, m), sn(e, "inputRead", e, m)
                }
                t && !s && Ca(e, t), Tr(e), e.curOp.updateInput < 2 && (e.curOp.updateInput = p), e.curOp.typing = !0, e.state.pasteIncoming = e.state.cutIncoming = -1
            }

            function ka(e, t) {
                var n = e.clipboardData && e.clipboardData.getData("Text");
                if (n) return e.preventDefault(), t.isReadOnly() || t.options.disableInput || qr(t, function () {
                    return xa(t, n, 0, null, "paste")
                }), !0
            }

            function Ca(e, t) {
                if (e.options.electricChars && e.options.smartIndent) for (var n = e.doc.sel, r = n.ranges.length - 1; 0 <= r; r--) {
                    var i = n.ranges[r];
                    if (!(100 < i.head.ch || r && n.ranges[r - 1].head.line == i.head.line)) {
                        var o = e.getModeAt(i.head), a = !1;
                        if (o.electricChars) {
                            for (var s = 0; s < o.electricChars.length; s++) if (-1 < t.indexOf(o.electricChars.charAt(s))) {
                                a = ya(e, i.head.line, "smart");
                                break
                            }
                        } else o.electricInput && o.electricInput.test(Ke(e.doc, i.head.line).text.slice(0, i.head.ch)) && (a = ya(e, i.head.line, "smart"));
                        a && sn(e, "electricInput", e, i.head.line)
                    }
                }
            }

            function Sa(e) {
                for (var t = [], n = [], r = 0; r < e.doc.sel.ranges.length; r++) {
                    var i = e.doc.sel.ranges[r].head.line, o = {anchor: et(i, 0), head: et(i + 1, 0)};
                    n.push(o), t.push(e.getRange(o.anchor, o.head))
                }
                return {text: t, ranges: n}
            }

            function Ea(e, t, n, r) {
                e.setAttribute("autocorrect", n ? "" : "off"), e.setAttribute("autocapitalize", r ? "" : "off"), e.setAttribute("spellcheck", !!t)
            }

            function Ta() {
                var e = M("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),
                    t = M("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
                return u ? e.style.width = "1000px" : e.setAttribute("wrap", "off"), m && (e.style.border = "1px solid black"), Ea(e), t
            }

            function Oa(e, t, n, r, i) {
                var o = t, a = n, s = Ke(e, t.line);

                function l(r) {
                    var o, a;
                    if (null == (o = i ? function (e, t, n, r) {
                        var i = pe(t, e.doc.direction);
                        if (!i) return Vo(t, n, r);
                        n.ch >= t.text.length ? (n.ch = t.text.length, n.sticky = "before") : n.ch <= 0 && (n.ch = 0, n.sticky = "after");
                        var o = ue(i, n.ch, n.sticky), a = i[o];
                        if ("ltr" == e.doc.direction && a.level % 2 == 0 && (0 < r ? a.to > n.ch : a.from < n.ch)) return Vo(t, n, r);
                        var s, l = function (e, n) {
                            return Bo(t, e instanceof et ? e.ch : e, n)
                        }, u = function (n) {
                            return e.options.lineWrapping ? (s = s || Mn(e, t), Yn(e, t, s, n)) : {
                                begin: 0,
                                end: t.text.length
                            }
                        }, c = u("before" == n.sticky ? l(n, -1) : n.ch);
                        if ("rtl" == e.doc.direction || 1 == a.level) {
                            var p = 1 == a.level == r < 0, d = l(n, p ? 1 : -1);
                            if (null != d && (p ? d <= a.to && d <= c.end : d >= a.from && d >= c.begin)) {
                                var f = p ? "before" : "after";
                                return new et(n.line, d, f)
                            }
                        }
                        var h = function (e, t, r) {
                            for (var o = function (e, t) {
                                return t ? new et(n.line, l(e, 1), "before") : new et(n.line, e, "after")
                            }; 0 <= e && e < i.length; e += t) {
                                var a = i[e], s = 0 < t == (1 != a.level), u = s ? r.begin : l(r.end, -1);
                                if (a.from <= u && u < a.to) return o(u, s);
                                if (u = s ? a.from : l(a.to, -1), r.begin <= u && u < r.end) return o(u, s)
                            }
                        }, _ = h(o + r, r, c);
                        if (_) return _;
                        var m = 0 < r ? c.end : l(c.begin, -1);
                        return null == m || 0 < r && m == t.text.length || !(_ = h(0 < r ? 0 : i.length - 1, r, u(m))) ? null : _
                    }(e.cm, s, t, n) : Vo(s, t, n))) {
                        if (r || (a = t.line + n) < e.first || a >= e.first + e.size || (t = new et(a, t.ch, t.sticky), !(s = Ke(e, a)))) return !1;
                        t = $o(i, e.cm, s, t.line, n)
                    } else t = o;
                    return !0
                }

                if ("char" == r) l(); else if ("column" == r) l(!0); else if ("word" == r || "group" == r) for (var u = null, c = "group" == r, p = e.cm && e.cm.getHelper(t, "wordChars"), d = !0; !(n < 0) || l(!d); d = !1) {
                    var f = s.text.charAt(t.ch) || "\n",
                        h = ne(f, p) ? "w" : c && "\n" == f ? "n" : !c || /\s/.test(f) ? null : "p";
                    if (!c || d || h || (h = "s"), u && u != h) {
                        n < 0 && (n = 1, l(), t.sticky = "after");
                        break
                    }
                    if (h && (u = h), 0 < n && !l(!d)) break
                }
                var _ = Zi(e, t, o, a, !0);
                return nt(o, _) && (_.hitSide = !0), _
            }

            function Na(e, t, n, r) {
                var i, o, a = e.doc, s = t.left;
                if ("page" == r) {
                    var l = Math.min(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight),
                        u = Math.max(l - .5 * Jn(e.display), 3);
                    i = (0 < n ? t.bottom : t.top) + n * u
                } else "line" == r && (i = 0 < n ? t.bottom + 3 : t.top - 3);
                for (; (o = qn(e, s, i)).outside;) {
                    if (n < 0 ? i <= 0 : i >= a.height) {
                        o.hitSide = !0;
                        break
                    }
                    i += 5 * n
                }
                return o
            }

            var Ma = function (e) {
                this.cm = e, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new F, this.composing = null, this.gracePeriod = !1, this.readDOMTimeout = null
            };

            function Aa(e, t) {
                var n = Nn(e, t.line);
                if (!n || n.hidden) return null;
                var r = Ke(e.doc, t.line), i = Tn(n, r, t.line), o = pe(r, e.doc.direction), a = "left";
                o && (a = ue(o, t.ch) % 2 ? "right" : "left");
                var s = Rn(i.map, t.ch, a);
                return s.offset = "right" == s.collapse ? s.end : s.start, s
            }

            function Pa(e, t) {
                return t && (e.bad = !0), e
            }

            function La(e, t, n) {
                var r;
                if (t == e.display.lineDiv) {
                    if (!(r = e.display.lineDiv.childNodes[n])) return Pa(e.clipPos(et(e.display.viewTo - 1)), !0);
                    t = null, n = 0
                } else for (r = t; ; r = r.parentNode) {
                    if (!r || r == e.display.lineDiv) return null;
                    if (r.parentNode && r.parentNode == e.display.lineDiv) break
                }
                for (var i = 0; i < e.display.view.length; i++) {
                    var o = e.display.view[i];
                    if (o.node == r) return Ra(o, t, n)
                }
            }

            function Ra(e, t, n) {
                var r = e.text.firstChild, i = !1;
                if (!t || !P(r, t)) return Pa(et(Ye(e.line), 0), !0);
                if (t == r && (i = !0, t = r.childNodes[n], n = 0, !t)) {
                    var o = e.rest ? Y(e.rest) : e.line;
                    return Pa(et(Ye(o), o.text.length), i)
                }
                var a = 3 == t.nodeType ? t : null, s = t;
                for (a || 1 != t.childNodes.length || 3 != t.firstChild.nodeType || (a = t.firstChild, n && (n = a.nodeValue.length)); s.parentNode != r;) s = s.parentNode;
                var l = e.measure, u = l.maps;

                function c(t, n, r) {
                    for (var i = -1; i < (u ? u.length : 0); i++) for (var o = i < 0 ? l.map : u[i], a = 0; a < o.length; a += 3) {
                        var s = o[a + 2];
                        if (s == t || s == n) {
                            var c = Ye(i < 0 ? e.line : e.rest[i]), p = o[a] + r;
                            return (r < 0 || s != t) && (p = o[a + (r ? 1 : 0)]), et(c, p)
                        }
                    }
                }

                var p = c(a, s, n);
                if (p) return Pa(p, i);
                for (var d = s.nextSibling, f = a ? a.nodeValue.length - n : 0; d; d = d.nextSibling) {
                    if (p = c(d, d.firstChild, 0)) return Pa(et(p.line, p.ch - f), i);
                    f += d.textContent.length
                }
                for (var h = s.previousSibling, _ = n; h; h = h.previousSibling) {
                    if (p = c(h, h.firstChild, -1)) return Pa(et(p.line, p.ch + _), i);
                    _ += h.textContent.length
                }
            }

            Ma.prototype.init = function (e) {
                var t = this, n = this, r = n.cm, i = n.div = e.lineDiv;

                function o(e) {
                    if (!ge(r, e)) {
                        if (r.somethingSelected()) wa({
                            lineWise: !1,
                            text: r.getSelections()
                        }), "cut" == e.type && r.replaceSelection("", null, "cut"); else {
                            if (!r.options.lineWiseCopyCut) return;
                            var t = Sa(r);
                            wa({lineWise: !0, text: t.text}), "cut" == e.type && r.operation(function () {
                                r.setSelections(t.ranges, 0, V), r.replaceSelection("", null, "cut")
                            })
                        }
                        if (e.clipboardData) {
                            e.clipboardData.clearData();
                            var o = ba.text.join("\n");
                            if (e.clipboardData.setData("Text", o), e.clipboardData.getData("Text") == o) return void e.preventDefault()
                        }
                        var a = Ta(), s = a.firstChild;
                        r.display.lineSpace.insertBefore(a, r.display.lineSpace.firstChild), s.value = ba.text.join("\n");
                        var l = document.activeElement;
                        I(s), setTimeout(function () {
                            r.display.lineSpace.removeChild(a), l.focus(), l == i && n.showPrimarySelection()
                        }, 50)
                    }
                }

                Ea(i, r.options.spellcheck, r.options.autocorrect, r.options.autocapitalize), fe(i, "paste", function (e) {
                    ge(r, e) || ka(e, r) || l <= 11 && setTimeout(Xr(r, function () {
                        return t.updateFromDOM()
                    }), 20)
                }), fe(i, "compositionstart", function (e) {
                    t.composing = {data: e.data, done: !1}
                }), fe(i, "compositionupdate", function (e) {
                    t.composing || (t.composing = {data: e.data, done: !1})
                }), fe(i, "compositionend", function (e) {
                    t.composing && (e.data != t.composing.data && t.readFromDOMSoon(), t.composing.done = !0)
                }), fe(i, "touchstart", function () {
                    return n.forceCompositionEnd()
                }), fe(i, "input", function () {
                    t.composing || t.readFromDOMSoon()
                }), fe(i, "copy", o), fe(i, "cut", o)
            }, Ma.prototype.prepareSelection = function () {
                var e = fr(this.cm, !1);
                return e.focus = this.cm.state.focused, e
            }, Ma.prototype.showSelection = function (e, t) {
                e && this.cm.display.view.length && ((e.focus || t) && this.showPrimarySelection(), this.showMultipleSelections(e))
            }, Ma.prototype.getSelection = function () {
                return this.cm.display.wrapper.ownerDocument.getSelection()
            }, Ma.prototype.showPrimarySelection = function () {
                var e = this.getSelection(), t = this.cm, r = t.doc.sel.primary(), i = r.from(), o = r.to();
                if (t.display.viewTo == t.display.viewFrom || i.line >= t.display.viewTo || o.line < t.display.viewFrom) e.removeAllRanges(); else {
                    var a = La(t, e.anchorNode, e.anchorOffset), s = La(t, e.focusNode, e.focusOffset);
                    if (!a || a.bad || !s || s.bad || 0 != tt(ot(a, s), i) || 0 != tt(it(a, s), o)) {
                        var l = t.display.view,
                            u = i.line >= t.display.viewFrom && Aa(t, i) || {node: l[0].measure.map[2], offset: 0},
                            c = o.line < t.display.viewTo && Aa(t, o);
                        if (!c) {
                            var p = l[l.length - 1].measure, d = p.maps ? p.maps[p.maps.length - 1] : p.map;
                            c = {node: d[d.length - 1], offset: d[d.length - 2] - d[d.length - 3]}
                        }
                        if (u && c) {
                            var f, h = e.rangeCount && e.getRangeAt(0);
                            try {
                                f = E(u.node, u.offset, c.offset, c.node)
                            } catch (e) {
                            }
                            f && (!n && t.state.focused ? (e.collapse(u.node, u.offset), f.collapsed || (e.removeAllRanges(), e.addRange(f))) : (e.removeAllRanges(), e.addRange(f)), h && null == e.anchorNode ? e.addRange(h) : n && this.startGracePeriod()), this.rememberSelection()
                        } else e.removeAllRanges()
                    }
                }
            }, Ma.prototype.startGracePeriod = function () {
                var e = this;
                clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout(function () {
                    e.gracePeriod = !1, e.selectionChanged() && e.cm.operation(function () {
                        return e.cm.curOp.selectionChanged = !0
                    })
                }, 20)
            }, Ma.prototype.showMultipleSelections = function (e) {
                N(this.cm.display.cursorDiv, e.cursors), N(this.cm.display.selectionDiv, e.selection)
            }, Ma.prototype.rememberSelection = function () {
                var e = this.getSelection();
                this.lastAnchorNode = e.anchorNode, this.lastAnchorOffset = e.anchorOffset, this.lastFocusNode = e.focusNode, this.lastFocusOffset = e.focusOffset
            }, Ma.prototype.selectionInEditor = function () {
                var e = this.getSelection();
                if (!e.rangeCount) return !1;
                var t = e.getRangeAt(0).commonAncestorContainer;
                return P(this.div, t)
            }, Ma.prototype.focus = function () {
                "nocursor" != this.cm.options.readOnly && (this.selectionInEditor() || this.showSelection(this.prepareSelection(), !0), this.div.focus())
            }, Ma.prototype.blur = function () {
                this.div.blur()
            }, Ma.prototype.getField = function () {
                return this.div
            }, Ma.prototype.supportsTouch = function () {
                return !0
            }, Ma.prototype.receivedFocus = function () {
                var e = this;
                this.selectionInEditor() ? this.pollSelection() : qr(this.cm, function () {
                    return e.cm.curOp.selectionChanged = !0
                }), this.polling.set(this.cm.options.pollInterval, function t() {
                    e.cm.state.focused && (e.pollSelection(), e.polling.set(e.cm.options.pollInterval, t))
                })
            }, Ma.prototype.selectionChanged = function () {
                var e = this.getSelection();
                return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset
            }, Ma.prototype.pollSelection = function () {
                if (null == this.readDOMTimeout && !this.gracePeriod && this.selectionChanged()) {
                    var e = this.getSelection(), t = this.cm;
                    if (g && p && this.cm.display.gutterSpecs.length && function (e) {
                        for (var t = e; t; t = t.parentNode) if (/CodeMirror-gutter-wrapper/.test(t.className)) return !0;
                        return !1
                    }(e.anchorNode)) return this.cm.triggerOnKeyDown({
                        type: "keydown",
                        keyCode: 8,
                        preventDefault: Math.abs
                    }), this.blur(), void this.focus();
                    if (!this.composing) {
                        this.rememberSelection();
                        var n = La(t, e.anchorNode, e.anchorOffset), r = La(t, e.focusNode, e.focusOffset);
                        n && r && qr(t, function () {
                            Ki(t.doc, yi(n, r), V), (n.bad || r.bad) && (t.curOp.selectionChanged = !0)
                        })
                    }
                }
            }, Ma.prototype.pollContent = function () {
                null != this.readDOMTimeout && (clearTimeout(this.readDOMTimeout), this.readDOMTimeout = null);
                var e, t, n, r = this.cm, i = r.display, o = r.doc.sel.primary(), a = o.from(), s = o.to();
                if (0 == a.ch && a.line > r.firstLine() && (a = et(a.line - 1, Ke(r.doc, a.line - 1).length)), s.ch == Ke(r.doc, s.line).text.length && s.line < r.lastLine() && (s = et(s.line + 1, 0)), a.line < i.viewFrom || s.line > i.viewTo - 1) return !1;
                n = a.line == i.viewFrom || 0 == (e = ar(r, a.line)) ? (t = Ye(i.view[0].line), i.view[0].node) : (t = Ye(i.view[e].line), i.view[e - 1].node.nextSibling);
                var l, u, c = ar(r, s.line);
                if (u = c == i.view.length - 1 ? (l = i.viewTo - 1, i.lineDiv.lastChild) : (l = Ye(i.view[c + 1].line) - 1, i.view[c + 1].node.previousSibling), !n) return !1;
                for (var p = r.doc.splitLines(function (e, t, n, r, i) {
                    var o = "", a = !1, s = e.doc.lineSeparator(), l = !1;

                    function u() {
                        a && (o += s, l && (o += s), a = l = !1)
                    }

                    function c(e) {
                        e && (u(), o += e)
                    }

                    function p(t) {
                        if (1 == t.nodeType) {
                            var n = t.getAttribute("cm-text");
                            if (n) return void c(n);
                            var o, d = t.getAttribute("cm-marker");
                            if (d) {
                                var f = e.findMarks(et(r, 0), et(i + 1, 0), (m = +d, function (e) {
                                    return e.id == m
                                }));
                                return void (f.length && (o = f[0].find(0)) && c(Ge(e.doc, o.from, o.to).join(s)))
                            }
                            if ("false" == t.getAttribute("contenteditable")) return;
                            var h = /^(pre|div|p|li|table|br)$/i.test(t.nodeName);
                            if (!/^br$/i.test(t.nodeName) && 0 == t.textContent.length) return;
                            h && u();
                            for (var _ = 0; _ < t.childNodes.length; _++) p(t.childNodes[_]);
                            /^(pre|p)$/i.test(t.nodeName) && (l = !0), h && (a = !0)
                        } else 3 == t.nodeType && c(t.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));
                        var m
                    }

                    for (; p(t), t != n;) t = t.nextSibling, l = !1;
                    return o
                }(r, n, u, t, l)), d = Ge(r.doc, et(t, 0), et(l, Ke(r.doc, l).text.length)); 1 < p.length && 1 < d.length;) if (Y(p) == Y(d)) p.pop(), d.pop(), l--; else {
                    if (p[0] != d[0]) break;
                    p.shift(), d.shift(), t++
                }
                for (var f = 0, h = 0, _ = p[0], m = d[0], g = Math.min(_.length, m.length); f < g && _.charCodeAt(f) == m.charCodeAt(f);) ++f;
                for (var v = Y(p), y = Y(d), b = Math.min(v.length - (1 == p.length ? f : 0), y.length - (1 == d.length ? f : 0)); h < b && v.charCodeAt(v.length - h - 1) == y.charCodeAt(y.length - h - 1);) ++h;
                if (1 == p.length && 1 == d.length && t == a.line) for (; f && f > a.ch && v.charCodeAt(v.length - h - 1) == y.charCodeAt(y.length - h - 1);) f--, h++;
                p[p.length - 1] = v.slice(0, v.length - h).replace(/^\u200b+/, ""), p[0] = p[0].slice(f).replace(/\u200b+$/, "");
                var w = et(t, f), x = et(l, d.length ? Y(d).length - h : 0);
                return 1 < p.length || p[0] || tt(w, x) ? (so(r.doc, p, w, x, "+input"), !0) : void 0
            }, Ma.prototype.ensurePolled = function () {
                this.forceCompositionEnd()
            }, Ma.prototype.reset = function () {
                this.forceCompositionEnd()
            }, Ma.prototype.forceCompositionEnd = function () {
                this.composing && (clearTimeout(this.readDOMTimeout), this.composing = null, this.updateFromDOM(), this.div.blur(), this.div.focus())
            }, Ma.prototype.readFromDOMSoon = function () {
                var e = this;
                null == this.readDOMTimeout && (this.readDOMTimeout = setTimeout(function () {
                    if (e.readDOMTimeout = null, e.composing) {
                        if (!e.composing.done) return;
                        e.composing = null
                    }
                    e.updateFromDOM()
                }, 80))
            }, Ma.prototype.updateFromDOM = function () {
                var e = this;
                !this.cm.isReadOnly() && this.pollContent() || qr(this.cm, function () {
                    return sr(e.cm)
                })
            }, Ma.prototype.setUneditable = function (e) {
                e.contentEditable = "false"
            }, Ma.prototype.onKeyPress = function (e) {
                0 == e.charCode || this.composing || (e.preventDefault(), this.cm.isReadOnly() || Xr(this.cm, xa)(this.cm, String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), 0))
            }, Ma.prototype.readOnlyChanged = function (e) {
                this.div.contentEditable = String("nocursor" != e)
            }, Ma.prototype.onContextMenu = function () {
            }, Ma.prototype.resetPosition = function () {
            }, Ma.prototype.needsContentAttribute = !0;
            var Da, Ia, za, ja = function (e) {
                this.cm = e, this.prevInput = "", this.pollingFast = !1, this.polling = new F, this.hasSelection = !1, this.composing = null
            };
            ja.prototype.init = function (e) {
                var t = this, n = this, r = this.cm;
                this.createField(e);
                var i = this.textarea;

                function o(e) {
                    if (!ge(r, e)) {
                        if (r.somethingSelected()) wa({lineWise: !1, text: r.getSelections()}); else {
                            if (!r.options.lineWiseCopyCut) return;
                            var t = Sa(r);
                            wa({
                                lineWise: !0,
                                text: t.text
                            }), "cut" == e.type ? r.setSelections(t.ranges, null, V) : (n.prevInput = "", i.value = t.text.join("\n"), I(i))
                        }
                        "cut" == e.type && (r.state.cutIncoming = +new Date)
                    }
                }

                e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild), m && (i.style.width = "0px"), fe(i, "input", function () {
                    s && 9 <= l && t.hasSelection && (t.hasSelection = null), n.poll()
                }), fe(i, "paste", function (e) {
                    ge(r, e) || ka(e, r) || (r.state.pasteIncoming = +new Date, n.fastPoll())
                }), fe(i, "cut", o), fe(i, "copy", o), fe(e.scroller, "paste", function (t) {
                    if (!bn(e, t) && !ge(r, t)) {
                        if (!i.dispatchEvent) return r.state.pasteIncoming = +new Date, void n.focus();
                        var o = new Event("paste");
                        o.clipboardData = t.clipboardData, i.dispatchEvent(o)
                    }
                }), fe(e.lineSpace, "selectstart", function (t) {
                    bn(e, t) || we(t)
                }), fe(i, "compositionstart", function () {
                    var e = r.getCursor("from");
                    n.composing && n.composing.range.clear(), n.composing = {
                        start: e,
                        range: r.markText(e, r.getCursor("to"), {className: "CodeMirror-composing"})
                    }
                }), fe(i, "compositionend", function () {
                    n.composing && (n.poll(), n.composing.range.clear(), n.composing = null)
                })
            }, ja.prototype.createField = function (e) {
                this.wrapper = Ta(), this.textarea = this.wrapper.firstChild
            }, ja.prototype.prepareSelection = function () {
                var e = this.cm, t = e.display, n = e.doc, r = fr(e);
                if (e.options.moveInputWithCursor) {
                    var i = $n(e, n.sel.primary().head, "div"), o = t.wrapper.getBoundingClientRect(),
                        a = t.lineDiv.getBoundingClientRect();
                    r.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, i.top + a.top - o.top)), r.teLeft = Math.max(0, Math.min(t.wrapper.clientWidth - 10, i.left + a.left - o.left))
                }
                return r
            }, ja.prototype.showSelection = function (e) {
                var t = this.cm.display;
                N(t.cursorDiv, e.cursors), N(t.selectionDiv, e.selection), null != e.teTop && (this.wrapper.style.top = e.teTop + "px", this.wrapper.style.left = e.teLeft + "px")
            }, ja.prototype.reset = function (e) {
                if (!this.contextMenuPending && !this.composing) {
                    var t = this.cm;
                    if (t.somethingSelected()) {
                        this.prevInput = "";
                        var n = t.getSelection();
                        this.textarea.value = n, t.state.focused && I(this.textarea), s && 9 <= l && (this.hasSelection = n)
                    } else e || (this.prevInput = this.textarea.value = "", s && 9 <= l && (this.hasSelection = null))
                }
            }, ja.prototype.getField = function () {
                return this.textarea
            }, ja.prototype.supportsTouch = function () {
                return !1
            }, ja.prototype.focus = function () {
                if ("nocursor" != this.cm.options.readOnly && (!v || L() != this.textarea)) try {
                    this.textarea.focus()
                } catch (e) {
                }
            }, ja.prototype.blur = function () {
                this.textarea.blur()
            }, ja.prototype.resetPosition = function () {
                this.wrapper.style.top = this.wrapper.style.left = 0
            }, ja.prototype.receivedFocus = function () {
                this.slowPoll()
            }, ja.prototype.slowPoll = function () {
                var e = this;
                this.pollingFast || this.polling.set(this.cm.options.pollInterval, function () {
                    e.poll(), e.cm.state.focused && e.slowPoll()
                })
            }, ja.prototype.fastPoll = function () {
                var e = !1, t = this;
                t.pollingFast = !0, t.polling.set(20, function n() {
                    t.poll() || e ? (t.pollingFast = !1, t.slowPoll()) : (e = !0, t.polling.set(60, n))
                })
            }, ja.prototype.poll = function () {
                var e = this, t = this.cm, n = this.textarea, r = this.prevInput;
                if (this.contextMenuPending || !t.state.focused || Re(n) && !r && !this.composing || t.isReadOnly() || t.options.disableInput || t.state.keySeq) return !1;
                var i = n.value;
                if (i == r && !t.somethingSelected()) return !1;
                if (s && 9 <= l && this.hasSelection === i || y && /[\uf700-\uf7ff]/.test(i)) return t.display.input.reset(), !1;
                if (t.doc.sel == t.display.selForContextMenu) {
                    var o = i.charCodeAt(0);
                    if (8203 != o || r || (r = "​"), 8666 == o) return this.reset(), this.cm.execCommand("undo")
                }
                for (var a = 0, u = Math.min(r.length, i.length); a < u && r.charCodeAt(a) == i.charCodeAt(a);) ++a;
                return qr(t, function () {
                    xa(t, i.slice(a), r.length - a, null, e.composing ? "*compose" : null), 1e3 < i.length || -1 < i.indexOf("\n") ? n.value = e.prevInput = "" : e.prevInput = i, e.composing && (e.composing.range.clear(), e.composing.range = t.markText(e.composing.start, t.getCursor("to"), {className: "CodeMirror-composing"}))
                }), !0
            }, ja.prototype.ensurePolled = function () {
                this.pollingFast && this.poll() && (this.pollingFast = !1)
            }, ja.prototype.onKeyPress = function () {
                s && 9 <= l && (this.hasSelection = null), this.fastPoll()
            }, ja.prototype.onContextMenu = function (e) {
                var t = this, n = t.cm, r = n.display, i = t.textarea;
                t.contextMenuPending && t.contextMenuPending();
                var o = or(n, e), a = r.scroller.scrollTop;
                if (o && !d) {
                    n.options.resetSelectionOnContextMenu && -1 == n.doc.sel.contains(o) && Xr(n, Ki)(n.doc, yi(o), V);
                    var c, p = i.style.cssText, f = t.wrapper.style.cssText,
                        h = t.wrapper.offsetParent.getBoundingClientRect();
                    t.wrapper.style.cssText = "position: static", i.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - h.top - 5) + "px; left: " + (e.clientX - h.left - 5) + "px;\n      z-index: 1000; background: " + (s ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);", u && (c = window.scrollY), r.input.focus(), u && window.scrollTo(null, c), r.input.reset(), n.somethingSelected() || (i.value = t.prevInput = " "), t.contextMenuPending = m, r.selForContextMenu = n.doc.sel, clearTimeout(r.detectingSelectAll), s && 9 <= l && _(), C ? (Ce(e), fe(window, "mouseup", function e() {
                        _e(window, "mouseup", e), setTimeout(m, 20)
                    })) : setTimeout(m, 50)
                }

                function _() {
                    if (null != i.selectionStart) {
                        var e = n.somethingSelected(), o = "​" + (e ? i.value : "");
                        i.value = "⇚", i.value = o, t.prevInput = e ? "" : "​", i.selectionStart = 1, i.selectionEnd = o.length, r.selForContextMenu = n.doc.sel
                    }
                }

                function m() {
                    if (t.contextMenuPending == m && (t.contextMenuPending = !1, t.wrapper.style.cssText = f, i.style.cssText = p, s && l < 9 && r.scrollbars.setScrollTop(r.scroller.scrollTop = a), null != i.selectionStart)) {
                        (!s || s && l < 9) && _();
                        var e = 0;
                        r.detectingSelectAll = setTimeout(function o() {
                            r.selForContextMenu == n.doc.sel && 0 == i.selectionStart && 0 < i.selectionEnd && "​" == t.prevInput ? Xr(n, eo)(n) : e++ < 10 ? r.detectingSelectAll = setTimeout(o, 500) : (r.selForContextMenu = null, r.input.reset())
                        }, 200)
                    }
                }
            }, ja.prototype.readOnlyChanged = function (e) {
                e || this.reset(), this.textarea.disabled = "nocursor" == e
            }, ja.prototype.setUneditable = function () {
            }, ja.prototype.needsContentAttribute = !1, function (e) {
                var t = e.optionHandlers;

                function n(n, r, i, o) {
                    e.defaults[n] = r, i && (t[n] = o ? function (e, t, n) {
                        n != da && i(e, t, n)
                    } : i)
                }

                e.defineOption = n, e.Init = da, n("value", "", function (e, t) {
                    return e.setValue(t)
                }, !0), n("mode", null, function (e, t) {
                    e.doc.modeOption = t, Ci(e)
                }, !0), n("indentUnit", 2, Ci, !0), n("indentWithTabs", !1), n("smartIndent", !0), n("tabSize", 4, function (e) {
                    Si(e), jn(e), sr(e)
                }, !0), n("lineSeparator", null, function (e, t) {
                    if (e.doc.lineSep = t) {
                        var n = [], r = e.doc.first;
                        e.doc.iter(function (e) {
                            for (var i = 0; ;) {
                                var o = e.text.indexOf(t, i);
                                if (-1 == o) break;
                                i = o + t.length, n.push(et(r, o))
                            }
                            r++
                        });
                        for (var i = n.length - 1; 0 <= i; i--) so(e.doc, t, n[i], et(n[i].line, n[i].ch + t.length))
                    }
                }), n("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g, function (e, t, n) {
                    e.state.specialChars = new RegExp(t.source + (t.test("\t") ? "" : "|\t"), "g"), n != da && e.refresh()
                }), n("specialCharPlaceholder", Qt, function (e) {
                    return e.refresh()
                }, !0), n("electricChars", !0), n("inputStyle", v ? "contenteditable" : "textarea", function () {
                    throw new Error("inputStyle can not (yet) be changed in a running editor")
                }, !0), n("spellcheck", !1, function (e, t) {
                    return e.getInputField().spellcheck = t
                }, !0), n("autocorrect", !1, function (e, t) {
                    return e.getInputField().autocorrect = t
                }, !0), n("autocapitalize", !1, function (e, t) {
                    return e.getInputField().autocapitalize = t
                }, !0), n("rtlMoveVisually", !w), n("wholeLineUpdateBefore", !0), n("theme", "default", function (e) {
                    pa(e), ci(e)
                }, !0), n("keyMap", "default", function (e, t, n) {
                    var r = Ho(t), i = n != da && Ho(n);
                    i && i.detach && i.detach(e, r), r.attach && r.attach(e, i || null)
                }), n("extraKeys", null), n("configureMouse", null), n("lineWrapping", !1, ma, !0), n("gutters", [], function (e, t) {
                    e.display.gutterSpecs = li(t, e.options.lineNumbers), ci(e)
                }, !0), n("fixedGutter", !0, function (e, t) {
                    e.display.gutters.style.left = t ? nr(e.display) + "px" : "0", e.refresh()
                }, !0), n("coverGutterNextToScrollbar", !1, function (e) {
                    return zr(e)
                }, !0), n("scrollbarStyle", "native", function (e) {
                    Fr(e), zr(e), e.display.scrollbars.setScrollTop(e.doc.scrollTop), e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)
                }, !0), n("lineNumbers", !1, function (e, t) {
                    e.display.gutterSpecs = li(e.options.gutters, t), ci(e)
                }, !0), n("firstLineNumber", 1, ci, !0), n("lineNumberFormatter", function (e) {
                    return e
                }, ci, !0), n("showCursorWhenSelecting", !1, dr, !0), n("resetSelectionOnContextMenu", !0), n("lineWiseCopyCut", !0), n("pasteLinesPerSelection", !0), n("selectionsMayTouch", !1), n("readOnly", !1, function (e, t) {
                    "nocursor" == t && (wr(e), e.display.input.blur()), e.display.input.readOnlyChanged(t)
                }), n("disableInput", !1, function (e, t) {
                    t || e.display.input.reset()
                }, !0), n("dragDrop", !0, _a), n("allowDropFileTypes", null), n("cursorBlinkRate", 530), n("cursorScrollMargin", 0), n("cursorHeight", 1, dr, !0), n("singleCursorHeightPerLine", !0, dr, !0), n("workTime", 100), n("workDelay", 100), n("flattenSpans", !0, Si, !0), n("addModeClass", !1, Si, !0), n("pollInterval", 100), n("undoDepth", 200, function (e, t) {
                    return e.doc.history.undoDepth = t
                }), n("historyEventDelay", 1250), n("viewportMargin", 10, function (e) {
                    return e.refresh()
                }, !0), n("maxHighlightLength", 1e4, Si, !0), n("moveInputWithCursor", !0, function (e, t) {
                    t || e.display.input.resetPosition()
                }), n("tabindex", null, function (e, t) {
                    return e.display.input.getField().tabIndex = t || ""
                }), n("autofocus", null), n("direction", "ltr", function (e, t) {
                    return e.doc.setDirection(t)
                }, !0), n("phrases", null)
            }(ga), Ia = (Da = ga).optionHandlers, za = Da.helpers = {}, Da.prototype = {
                constructor: Da,
                focus: function () {
                    window.focus(), this.display.input.focus()
                },
                setOption: function (e, t) {
                    var n = this.options, r = n[e];
                    n[e] == t && "mode" != e || (n[e] = t, Ia.hasOwnProperty(e) && Xr(this, Ia[e])(this, t, r), me(this, "optionChange", this, e))
                },
                getOption: function (e) {
                    return this.options[e]
                },
                getDoc: function () {
                    return this.doc
                },
                addKeyMap: function (e, t) {
                    this.state.keyMaps[t ? "push" : "unshift"](Ho(e))
                },
                removeKeyMap: function (e) {
                    for (var t = this.state.keyMaps, n = 0; n < t.length; ++n) if (t[n] == e || t[n].name == e) return t.splice(n, 1), !0
                },
                addOverlay: Yr(function (e, t) {
                    var n = e.token ? e : Da.getMode(this.options, e);
                    if (n.startState) throw new Error("Overlays may not be stateful.");
                    !function (e, t, n) {
                        for (var r = 0, i = n(t); r < e.length && n(e[r]) <= i;) r++;
                        e.splice(r, 0, t)
                    }(this.state.overlays, {
                        mode: n,
                        modeSpec: e,
                        opaque: t && t.opaque,
                        priority: t && t.priority || 0
                    }, function (e) {
                        return e.priority
                    }), this.state.modeGen++, sr(this)
                }),
                removeOverlay: Yr(function (e) {
                    for (var t = this.state.overlays, n = 0; n < t.length; ++n) {
                        var r = t[n].modeSpec;
                        if (r == e || "string" == typeof e && r.name == e) return t.splice(n, 1), this.state.modeGen++, void sr(this)
                    }
                }),
                indentLine: Yr(function (e, t, n) {
                    "string" != typeof t && "number" != typeof t && (t = null == t ? this.options.smartIndent ? "smart" : "prev" : t ? "add" : "subtract"), Ze(this.doc, e) && ya(this, e, t, n)
                }),
                indentSelection: Yr(function (e) {
                    for (var t = this.doc.sel.ranges, n = -1, r = 0; r < t.length; r++) {
                        var i = t[r];
                        if (i.empty()) i.head.line > n && (ya(this, i.head.line, e, !0), n = i.head.line, r == this.doc.sel.primIndex && Tr(this)); else {
                            var o = i.from(), a = i.to(), s = Math.max(n, o.line);
                            n = Math.min(this.lastLine(), a.line - (a.ch ? 0 : 1)) + 1;
                            for (var l = s; l < n; ++l) ya(this, l, e);
                            var u = this.doc.sel.ranges;
                            0 == o.ch && t.length == u.length && 0 < u[r].from().ch && Bi(this.doc, r, new gi(o, u[r].to()), V)
                        }
                    }
                }),
                getTokenAt: function (e, t) {
                    return vt(this, e, t)
                },
                getLineTokens: function (e, t) {
                    return vt(this, et(e), t, !0)
                },
                getTokenTypeAt: function (e) {
                    e = st(this.doc, e);
                    var t, n = dt(this, Ke(this.doc, e.line)), r = 0, i = (n.length - 1) / 2, o = e.ch;
                    if (0 == o) t = n[2]; else for (; ;) {
                        var a = r + i >> 1;
                        if ((a ? n[2 * a - 1] : 0) >= o) i = a; else {
                            if (!(n[2 * a + 1] < o)) {
                                t = n[2 * a + 2];
                                break
                            }
                            r = a + 1
                        }
                    }
                    var s = t ? t.indexOf("overlay ") : -1;
                    return s < 0 ? t : 0 == s ? null : t.slice(0, s - 1)
                },
                getModeAt: function (e) {
                    var t = this.doc.mode;
                    return t.innerMode ? Da.innerMode(t, this.getTokenAt(e).state).mode : t
                },
                getHelper: function (e, t) {
                    return this.getHelpers(e, t)[0]
                },
                getHelpers: function (e, t) {
                    var n = [];
                    if (!za.hasOwnProperty(t)) return n;
                    var r = za[t], i = this.getModeAt(e);
                    if ("string" == typeof i[t]) r[i[t]] && n.push(r[i[t]]); else if (i[t]) for (var o = 0; o < i[t].length; o++) {
                        var a = r[i[t][o]];
                        a && n.push(a)
                    } else i.helperType && r[i.helperType] ? n.push(r[i.helperType]) : r[i.name] && n.push(r[i.name]);
                    for (var s = 0; s < r._global.length; s++) {
                        var l = r._global[s];
                        l.pred(i, this) && -1 == H(n, l.val) && n.push(l.val)
                    }
                    return n
                },
                getStateAfter: function (e, t) {
                    var n = this.doc;
                    return ft(this, (e = at(n, null == e ? n.first + n.size - 1 : e)) + 1, t).state
                },
                cursorCoords: function (e, t) {
                    var n = this.doc.sel.primary();
                    return $n(this, null == e ? n.head : "object" == a(e) ? st(this.doc, e) : e ? n.from() : n.to(), t || "page")
                },
                charCoords: function (e, t) {
                    return Vn(this, st(this.doc, e), t || "page")
                },
                coordsChar: function (e, t) {
                    return qn(this, (e = Bn(this, e, t || "page")).left, e.top)
                },
                lineAtHeight: function (e, t) {
                    return e = Bn(this, {top: e, left: 0}, t || "page").top, Qe(this.doc, e + this.display.viewOffset)
                },
                heightAtLine: function (e, t, n) {
                    var r, i = !1;
                    if ("number" == typeof e) {
                        var o = this.doc.first + this.doc.size - 1;
                        e < this.doc.first ? e = this.doc.first : o < e && (e = o, i = !0), r = Ke(this.doc, e)
                    } else r = e;
                    return Un(this, r, {top: 0, left: 0}, t || "page", n || i).top + (i ? this.doc.height - Bt(r) : 0)
                },
                defaultTextHeight: function () {
                    return Jn(this.display)
                },
                defaultCharWidth: function () {
                    return er(this.display)
                },
                getViewport: function () {
                    return {from: this.display.viewFrom, to: this.display.viewTo}
                },
                addWidget: function (e, t, n, r, i) {
                    var o, a, s = this.display, l = (e = $n(this, st(this.doc, e))).bottom, u = e.left;
                    if (t.style.position = "absolute", t.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(t), s.sizer.appendChild(t), "over" == r) l = e.top; else if ("above" == r || "near" == r) {
                        var c = Math.max(s.wrapper.clientHeight, this.doc.height),
                            p = Math.max(s.sizer.clientWidth, s.lineSpace.clientWidth);
                        ("above" == r || e.bottom + t.offsetHeight > c) && e.top > t.offsetHeight ? l = e.top - t.offsetHeight : e.bottom + t.offsetHeight <= c && (l = e.bottom), u + t.offsetWidth > p && (u = p - t.offsetWidth)
                    }
                    t.style.top = l + "px", t.style.left = t.style.right = "", "right" == i ? (u = s.sizer.clientWidth - t.offsetWidth, t.style.right = "0px") : ("left" == i ? u = 0 : "middle" == i && (u = (s.sizer.clientWidth - t.offsetWidth) / 2), t.style.left = u + "px"), n && (null != (a = Sr(o = this, {
                        left: u,
                        top: l,
                        right: u + t.offsetWidth,
                        bottom: l + t.offsetHeight
                    })).scrollTop && Ar(o, a.scrollTop), null != a.scrollLeft && Lr(o, a.scrollLeft))
                },
                triggerOnKeyDown: Yr(ta),
                triggerOnKeyPress: Yr(ra),
                triggerOnKeyUp: na,
                triggerOnMouseDown: Yr(sa),
                execCommand: function (e) {
                    if (Ko.hasOwnProperty(e)) return Ko[e].call(null, this)
                },
                triggerElectric: Yr(function (e) {
                    Ca(this, e)
                }),
                findPosH: function (e, t, n, r) {
                    var i = 1;
                    t < 0 && (i = -1, t = -t);
                    for (var o = st(this.doc, e), a = 0; a < t && !(o = Oa(this.doc, o, i, n, r)).hitSide; ++a) ;
                    return o
                },
                moveH: Yr(function (e, t) {
                    var n = this;
                    this.extendSelectionsBy(function (r) {
                        return n.display.shift || n.doc.extend || r.empty() ? Oa(n.doc, r.head, e, t, n.options.rtlMoveVisually) : e < 0 ? r.from() : r.to()
                    }, K)
                }),
                deleteH: Yr(function (e, t) {
                    var n = this.doc.sel, r = this.doc;
                    n.somethingSelected() ? r.replaceSelection("", null, "+delete") : Uo(this, function (n) {
                        var i = Oa(r, n.head, e, t, !1);
                        return e < 0 ? {from: i, to: n.head} : {from: n.head, to: i}
                    })
                }),
                findPosV: function (e, t, n, r) {
                    var i = 1, o = r;
                    t < 0 && (i = -1, t = -t);
                    for (var a = st(this.doc, e), s = 0; s < t; ++s) {
                        var l = $n(this, a, "div");
                        if (null == o ? o = l.left : l.left = o, (a = Na(this, l, i, n)).hitSide) break
                    }
                    return a
                },
                moveV: Yr(function (e, t) {
                    var n = this, r = this.doc, i = [],
                        o = !this.display.shift && !r.extend && r.sel.somethingSelected();
                    if (r.extendSelectionsBy(function (a) {
                        if (o) return e < 0 ? a.from() : a.to();
                        var s = $n(n, a.head, "div");
                        null != a.goalColumn && (s.left = a.goalColumn), i.push(s.left);
                        var l = Na(n, s, e, t);
                        return "page" == t && a == r.sel.primary() && Er(n, Vn(n, l, "div").top - s.top), l
                    }, K), i.length) for (var a = 0; a < r.sel.ranges.length; a++) r.sel.ranges[a].goalColumn = i[a]
                }),
                findWordAt: function (e) {
                    var t = Ke(this.doc, e.line).text, n = e.ch, r = e.ch;
                    if (t) {
                        var i = this.getHelper(e, "wordChars");
                        "before" != e.sticky && r != t.length || !n ? ++r : --n;
                        for (var o = t.charAt(n), a = ne(o, i) ? function (e) {
                            return ne(e, i)
                        } : /\s/.test(o) ? function (e) {
                            return /\s/.test(e)
                        } : function (e) {
                            return !/\s/.test(e) && !ne(e)
                        }; 0 < n && a(t.charAt(n - 1));) --n;
                        for (; r < t.length && a(t.charAt(r));) ++r
                    }
                    return new gi(et(e.line, n), et(e.line, r))
                },
                toggleOverwrite: function (e) {
                    null != e && e == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? R(this.display.cursorDiv, "CodeMirror-overwrite") : T(this.display.cursorDiv, "CodeMirror-overwrite"), me(this, "overwriteToggle", this, this.state.overwrite))
                },
                hasFocus: function () {
                    return this.display.input.getField() == L()
                },
                isReadOnly: function () {
                    return !(!this.options.readOnly && !this.doc.cantEdit)
                },
                scrollTo: Yr(function (e, t) {
                    Or(this, e, t)
                }),
                getScrollInfo: function () {
                    var e = this.display.scroller;
                    return {
                        left: e.scrollLeft,
                        top: e.scrollTop,
                        height: e.scrollHeight - Cn(this) - this.display.barHeight,
                        width: e.scrollWidth - Cn(this) - this.display.barWidth,
                        clientHeight: En(this),
                        clientWidth: Sn(this)
                    }
                },
                scrollIntoView: Yr(function (e, t) {
                    var n;
                    null == e ? (e = {
                        from: this.doc.sel.primary().head,
                        to: null
                    }, null == t && (t = this.options.cursorScrollMargin)) : "number" == typeof e ? e = {
                        from: et(e, 0),
                        to: null
                    } : null == e.from && (e = {
                        from: e,
                        to: null
                    }), e.to || (e.to = e.from), e.margin = t || 0, null != e.from.line ? (n = e, Nr(this), this.curOp.scrollToPos = n) : Mr(this, e.from, e.to, e.margin)
                }),
                setSize: Yr(function (e, t) {
                    var n = this, r = function (e) {
                        return "number" == typeof e || /^\d+$/.test(String(e)) ? e + "px" : e
                    };
                    null != e && (this.display.wrapper.style.width = r(e)), null != t && (this.display.wrapper.style.height = r(t)), this.options.lineWrapping && zn(this);
                    var i = this.display.viewFrom;
                    this.doc.iter(i, this.display.viewTo, function (e) {
                        if (e.widgets) for (var t = 0; t < e.widgets.length; t++) if (e.widgets[t].noHScroll) {
                            lr(n, i, "widget");
                            break
                        }
                        ++i
                    }), this.curOp.forceUpdate = !0, me(this, "refresh", this)
                }),
                operation: function (e) {
                    return qr(this, e)
                },
                startOperation: function () {
                    return Ur(this)
                },
                endOperation: function () {
                    return Br(this)
                },
                refresh: Yr(function () {
                    var e = this.display.cachedTextHeight;
                    sr(this), this.curOp.forceUpdate = !0, jn(this), Or(this, this.doc.scrollLeft, this.doc.scrollTop), ii(this.display), (null == e || .5 < Math.abs(e - Jn(this.display))) && ir(this), me(this, "refresh", this)
                }),
                swapDoc: Yr(function (e) {
                    var t = this.doc;
                    return t.cm = null, this.state.selectingText && this.state.selectingText(), Ni(this, e), jn(this), this.display.input.reset(), Or(this, e.scrollLeft, e.scrollTop), this.curOp.forceScroll = !0, sn(this, "swapDoc", this, t), t
                }),
                phrase: function (e) {
                    var t = this.options.phrases;
                    return t && Object.prototype.hasOwnProperty.call(t, e) ? t[e] : e
                },
                getInputField: function () {
                    return this.display.input.getField()
                },
                getWrapperElement: function () {
                    return this.display.wrapper
                },
                getScrollerElement: function () {
                    return this.display.scroller
                },
                getGutterElement: function () {
                    return this.display.gutters
                }
            }, be(Da), Da.registerHelper = function (e, t, n) {
                za.hasOwnProperty(e) || (za[e] = Da[e] = {_global: []}), za[e][t] = n
            }, Da.registerGlobalHelper = function (e, t, n, r) {
                Da.registerHelper(e, t, r), za[e]._global.push({pred: n, val: r})
            };
            var Wa, Fa = "iter insert remove copy getEditor constructor".split(" ");
            for (var Ha in Co.prototype) Co.prototype.hasOwnProperty(Ha) && H(Fa, Ha) < 0 && (ga.prototype[Ha] = function (e) {
                return function () {
                    return e.apply(this.doc, arguments)
                }
            }(Co.prototype[Ha]));
            return be(Co), ga.inputStyles = {textarea: ja, contenteditable: Ma}, ga.defineMode = function (e) {
                ga.defaults.mode || "null" == e || (ga.defaults.mode = e), function (e, t) {
                    2 < arguments.length && (t.dependencies = Array.prototype.slice.call(arguments, 2)), ze[e] = t
                }.apply(this, arguments)
            }, ga.defineMIME = function (e, t) {
                je[e] = t
            }, ga.defineMode("null", function () {
                return {
                    token: function (e) {
                        return e.skipToEnd()
                    }
                }
            }), ga.defineMIME("text/plain", "null"), ga.defineExtension = function (e, t) {
                ga.prototype[e] = t
            }, ga.defineDocExtension = function (e, t) {
                Co.prototype[e] = t
            }, ga.fromTextArea = function (e, t) {
                if ((t = t ? j(t) : {}).value = e.value, !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex), !t.placeholder && e.placeholder && (t.placeholder = e.placeholder), null == t.autofocus) {
                    var n = L();
                    t.autofocus = n == e || null != e.getAttribute("autofocus") && n == document.body
                }

                function r() {
                    e.value = s.getValue()
                }

                var i;
                if (e.form && (fe(e.form, "submit", r), !t.leaveSubmitMethodAlone)) {
                    var o = e.form;
                    i = o.submit;
                    try {
                        var a = o.submit = function () {
                            r(), o.submit = i, o.submit(), o.submit = a
                        }
                    } catch (t) {
                    }
                }
                t.finishInit = function (t) {
                    t.save = r, t.getTextArea = function () {
                        return e
                    }, t.toTextArea = function () {
                        t.toTextArea = isNaN, r(), e.parentNode.removeChild(t.getWrapperElement()), e.style.display = "", e.form && (_e(e.form, "submit", r), "function" == typeof e.form.submit && (e.form.submit = i))
                    }
                }, e.style.display = "none";
                var s = ga(function (t) {
                    return e.parentNode.insertBefore(t, e.nextSibling)
                }, t);
                return s
            }, (Wa = ga).off = _e, Wa.on = fe, Wa.wheelEventPixels = function (e) {
                var t = hi(e);
                return t.x *= fi, t.y *= fi, t
            }, Wa.Doc = Co, Wa.splitLines = Le, Wa.countColumn = W, Wa.findColumn = G, Wa.isWordChar = te, Wa.Pass = B, Wa.signal = me, Wa.Line = Kt, Wa.changeEnd = bi, Wa.scrollbarModel = Wr, Wa.Pos = et, Wa.cmpPos = tt, Wa.modes = ze, Wa.mimeModes = je, Wa.resolveMode = We, Wa.getMode = Fe, Wa.modeExtensions = He, Wa.extendMode = function (e, t) {
                j(t, He.hasOwnProperty(e) ? He[e] : He[e] = {})
            }, Wa.copyState = Ue, Wa.startState = Ve, Wa.innerMode = Be, Wa.commands = Ko, Wa.keyMap = Do, Wa.keyName = Fo, Wa.isModifierKey = jo, Wa.lookupKey = zo, Wa.normalizeKeyMap = function (e) {
                var t = {};
                for (var n in e) if (e.hasOwnProperty(n)) {
                    var r = e[n];
                    if (/^(name|fallthrough|(de|at)tach)$/.test(n)) continue;
                    if ("..." == r) {
                        delete e[n];
                        continue
                    }
                    for (var i = Q(n.split(" "), Io), o = 0; o < i.length; o++) {
                        var a, s = void 0;
                        a = o == i.length - 1 ? (s = i.join(" "), r) : (s = i.slice(0, o + 1).join(" "), "...");
                        var l = t[s];
                        if (l) {
                            if (l != a) throw new Error("Inconsistent bindings for " + s)
                        } else t[s] = a
                    }
                    delete e[n]
                }
                for (var u in t) e[u] = t[u];
                return e
            }, Wa.StringStream = $e, Wa.SharedTextMarker = bo, Wa.TextMarker = vo, Wa.LineWidget = _o, Wa.e_preventDefault = we, Wa.e_stopPropagation = xe, Wa.e_stop = Ce, Wa.addClass = R, Wa.contains = P, Wa.rmClass = T, Wa.keyNames = Ao, ga.version = "5.48.2", ga
        }, "object" === a(t) && void 0 !== e ? e.exports = o() : void 0 === (i = "function" == typeof (r = o) ? r.call(t, n, t, e) : r) || (e.exports = i)
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
        var r, i;

        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        i = function (e) {
            var t = {};

            function n(r) {
                if (t[r]) return t[r].exports;
                var i = t[r] = {i: r, l: !1, exports: {}};
                return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
            }

            return n.m = e, n.c = t, n.d = function (e, t, r) {
                n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
            }, n.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
            }, n.t = function (e, t) {
                if (1 & t && (e = n(e)), 8 & t) return e;
                if (4 & t && "object" === o(e) && e && e.__esModule) return e;
                var r = Object.create(null);
                if (n.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e) for (var i in e) n.d(r, i, function (t) {
                    return e[t]
                }.bind(null, i));
                return r
            }, n.n = function (e) {
                var t = e && e.__esModule ? function () {
                    return e.default
                } : function () {
                    return e
                };
                return n.d(t, "a", t), t
            }, n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, n.p = "", n(n.s = 0)
        }([function (e, t, n) {
            "use strict";
            var r = n(1).Beautifier, i = n(5).Options;
            e.exports = function (e, t) {
                return new r(e, t).beautify()
            }, e.exports.defaultOptions = function () {
                return new i
            }
        }, function (e, t, n) {
            "use strict";
            var r = n(2).Output, i = n(3).Token, o = n(4), a = n(5).Options, s = n(7).Tokenizer, l = n(7).line_starters,
                u = n(7).positionable_operators, c = n(7).TOKEN;

            function p(e, t) {
                return -1 !== t.indexOf(e)
            }

            function d(e, t) {
                return e && e.type === c.RESERVED && e.text === t
            }

            function f(e, t) {
                return e && e.type === c.RESERVED && p(e.text, t)
            }

            var h = ["case", "return", "do", "if", "throw", "else", "await", "break", "continue", "async"],
                _ = function (e) {
                    for (var t = {}, n = 0; n < e.length; n++) t[e[n].replace(/-/g, "_")] = e[n];
                    return t
                }(["before-newline", "after-newline", "preserve-newline"]), m = [_.before_newline, _.preserve_newline],
                g = "BlockStatement", v = "Statement", y = "ObjectLiteral", b = "ArrayLiteral", w = "ForInitializer",
                x = "Conditional", k = "Expression";

            function C(e, t) {
                t.multiline_frame || t.mode === w || t.mode === x || e.remove_indent(t.start_line_index)
            }

            function S(e) {
                return e === b
            }

            function E(e) {
                return p(e, [k, w, x])
            }

            function T(e, t) {
                t = t || {}, this._source_text = e || "", this._output = null, this._tokens = null, this._last_last_text = null, this._flags = null, this._previous_flags = null, this._flag_store = null, this._options = new a(t)
            }

            T.prototype.create_flags = function (e, t) {
                var n = 0;
                return e && (n = e.indentation_level, !this._output.just_added_newline() && e.line_indent_level > n && (n = e.line_indent_level)), {
                    mode: t,
                    parent: e,
                    last_token: e ? e.last_token : new i(c.START_BLOCK, ""),
                    last_word: e ? e.last_word : "",
                    declaration_statement: !1,
                    declaration_assignment: !1,
                    multiline_frame: !1,
                    inline_frame: !1,
                    if_block: !1,
                    else_block: !1,
                    do_block: !1,
                    do_while: !1,
                    import_block: !1,
                    in_case_statement: !1,
                    in_case: !1,
                    case_body: !1,
                    indentation_level: n,
                    alignment: 0,
                    line_indent_level: e ? e.line_indent_level : n,
                    start_line_index: this._output.get_line_number(),
                    ternary_depth: 0
                }
            }, T.prototype._reset = function (e) {
                var t = e.match(/^[\t ]*/)[0];
                this._last_last_text = "", this._output = new r(this._options, t), this._output.raw = this._options.test_output_raw, this._flag_store = [], this.set_mode(g);
                var n = new s(e, this._options);
                return this._tokens = n.tokenize(), e
            }, T.prototype.beautify = function () {
                if (this._options.disabled) return this._source_text;
                var e = this._reset(this._source_text), t = this._options.eol;
                "auto" === this._options.eol && (t = "\n", e && o.lineBreak.test(e || "") && (t = e.match(o.lineBreak)[0]));
                for (var n = this._tokens.next(); n;) this.handle_token(n), this._last_last_text = this._flags.last_token.text, this._flags.last_token = n, n = this._tokens.next();
                return this._output.get_code(t)
            }, T.prototype.handle_token = function (e, t) {
                e.type === c.START_EXPR ? this.handle_start_expr(e) : e.type === c.END_EXPR ? this.handle_end_expr(e) : e.type === c.START_BLOCK ? this.handle_start_block(e) : e.type === c.END_BLOCK ? this.handle_end_block(e) : e.type === c.WORD ? this.handle_word(e) : e.type === c.RESERVED ? this.handle_word(e) : e.type === c.SEMICOLON ? this.handle_semicolon(e) : e.type === c.STRING ? this.handle_string(e) : e.type === c.EQUALS ? this.handle_equals(e) : e.type === c.OPERATOR ? this.handle_operator(e) : e.type === c.COMMA ? this.handle_comma(e) : e.type === c.BLOCK_COMMENT ? this.handle_block_comment(e, t) : e.type === c.COMMENT ? this.handle_comment(e, t) : e.type === c.DOT ? this.handle_dot(e) : e.type === c.EOF ? this.handle_eof(e) : (e.type, c.UNKNOWN, this.handle_unknown(e, t))
            }, T.prototype.handle_whitespace_and_comments = function (e, t) {
                var n = e.newlines, r = this._options.keep_array_indentation && S(this._flags.mode);
                if (e.comments_before) for (var i = e.comments_before.next(); i;) this.handle_whitespace_and_comments(i, t), this.handle_token(i, t), i = e.comments_before.next();
                if (r) for (var o = 0; o < n; o += 1) this.print_newline(0 < o, t); else if (this._options.max_preserve_newlines && n > this._options.max_preserve_newlines && (n = this._options.max_preserve_newlines), this._options.preserve_newlines && 1 < n) {
                    this.print_newline(!1, t);
                    for (var a = 1; a < n; a += 1) this.print_newline(!0, t)
                }
            };
            var O = ["async", "break", "continue", "return", "throw", "yield"];
            T.prototype.allow_wrap_or_preserved_newline = function (e, t) {
                if (t = void 0 !== t && t, !this._output.just_added_newline()) {
                    var n = this._options.preserve_newlines && e.newlines || t;
                    if (p(this._flags.last_token.text, u) || p(e.text, u)) {
                        var r = p(this._flags.last_token.text, u) && p(this._options.operator_position, m) || p(e.text, u);
                        n = n && r
                    }
                    if (n) this.print_newline(!1, !0); else if (this._options.wrap_line_length) {
                        if (f(this._flags.last_token, O)) return;
                        this._output.set_wrap_point()
                    }
                }
            }, T.prototype.print_newline = function (e, t) {
                if (!t && ";" !== this._flags.last_token.text && "," !== this._flags.last_token.text && "=" !== this._flags.last_token.text && (this._flags.last_token.type !== c.OPERATOR || "--" === this._flags.last_token.text || "++" === this._flags.last_token.text)) for (var n = this._tokens.peek(); !(this._flags.mode !== v || this._flags.if_block && d(n, "else") || this._flags.do_block);) this.restore_mode();
                this._output.add_new_line(e) && (this._flags.multiline_frame = !0)
            }, T.prototype.print_token_line_indentation = function (e) {
                this._output.just_added_newline() && (this._options.keep_array_indentation && e.newlines && ("[" === e.text || S(this._flags.mode)) ? (this._output.current_line.set_indent(-1), this._output.current_line.push(e.whitespace_before), this._output.space_before_token = !1) : this._output.set_indent(this._flags.indentation_level, this._flags.alignment) && (this._flags.line_indent_level = this._flags.indentation_level))
            }, T.prototype.print_token = function (e) {
                if (this._output.raw) this._output.add_raw_token(e); else {
                    if (this._options.comma_first && e.previous && e.previous.type === c.COMMA && this._output.just_added_newline() && "," === this._output.previous_line.last()) {
                        var t = this._output.previous_line.pop();
                        this._output.previous_line.is_empty() && (this._output.previous_line.push(t), this._output.trim(!0), this._output.current_line.pop(), this._output.trim()), this.print_token_line_indentation(e), this._output.add_token(","), this._output.space_before_token = !0
                    }
                    this.print_token_line_indentation(e), this._output.non_breaking_space = !0, this._output.add_token(e.text), this._output.previous_token_wrapped && (this._flags.multiline_frame = !0)
                }
            }, T.prototype.indent = function () {
                this._flags.indentation_level += 1, this._output.set_indent(this._flags.indentation_level, this._flags.alignment)
            }, T.prototype.deindent = function () {
                0 < this._flags.indentation_level && (!this._flags.parent || this._flags.indentation_level > this._flags.parent.indentation_level) && (this._flags.indentation_level -= 1, this._output.set_indent(this._flags.indentation_level, this._flags.alignment))
            }, T.prototype.set_mode = function (e) {
                this._flags ? (this._flag_store.push(this._flags), this._previous_flags = this._flags) : this._previous_flags = this.create_flags(null, e), this._flags = this.create_flags(this._previous_flags, e), this._output.set_indent(this._flags.indentation_level, this._flags.alignment)
            }, T.prototype.restore_mode = function () {
                0 < this._flag_store.length && (this._previous_flags = this._flags, this._flags = this._flag_store.pop(), this._previous_flags.mode === v && C(this._output, this._previous_flags), this._output.set_indent(this._flags.indentation_level, this._flags.alignment))
            }, T.prototype.start_of_object_property = function () {
                return this._flags.parent.mode === y && this._flags.mode === v && (":" === this._flags.last_token.text && 0 === this._flags.ternary_depth || f(this._flags.last_token, ["get", "set"]))
            }, T.prototype.start_of_statement = function (e) {
                var t = !1;
                return !!(t = (t = (t = (t = (t = (t = (t = t || f(this._flags.last_token, ["var", "let", "const"]) && e.type === c.WORD) || d(this._flags.last_token, "do")) || !(this._flags.parent.mode === y && this._flags.mode === v) && f(this._flags.last_token, O) && !e.newlines) || d(this._flags.last_token, "else") && !(d(e, "if") && !e.comments_before)) || this._flags.last_token.type === c.END_EXPR && (this._previous_flags.mode === w || this._previous_flags.mode === x)) || this._flags.last_token.type === c.WORD && this._flags.mode === g && !this._flags.in_case && !("--" === e.text || "++" === e.text) && "function" !== this._last_last_text && e.type !== c.WORD && e.type !== c.RESERVED) || this._flags.mode === y && (":" === this._flags.last_token.text && 0 === this._flags.ternary_depth || f(this._flags.last_token, ["get", "set"]))) && (this.set_mode(v), this.indent(), this.handle_whitespace_and_comments(e, !0), this.start_of_object_property() || this.allow_wrap_or_preserved_newline(e, f(e, ["do", "for", "if", "while"])), !0)
            }, T.prototype.handle_start_expr = function (e) {
                this.start_of_statement(e) || this.handle_whitespace_and_comments(e);
                var t = k;
                if ("[" === e.text) {
                    if (this._flags.last_token.type === c.WORD || ")" === this._flags.last_token.text) return f(this._flags.last_token, l) && (this._output.space_before_token = !0), this.print_token(e), this.set_mode(t), this.indent(), void (this._options.space_in_paren && (this._output.space_before_token = !0));
                    t = b, S(this._flags.mode) && ("[" !== this._flags.last_token.text && ("," !== this._flags.last_token.text || "]" !== this._last_last_text && "}" !== this._last_last_text) || this._options.keep_array_indentation || this.print_newline()), p(this._flags.last_token.type, [c.START_EXPR, c.END_EXPR, c.WORD, c.OPERATOR]) || (this._output.space_before_token = !0)
                } else {
                    if (this._flags.last_token.type === c.RESERVED) "for" === this._flags.last_token.text ? (this._output.space_before_token = this._options.space_before_conditional, t = w) : p(this._flags.last_token.text, ["if", "while"]) ? (this._output.space_before_token = this._options.space_before_conditional, t = x) : p(this._flags.last_word, ["await", "async"]) ? this._output.space_before_token = !0 : "import" === this._flags.last_token.text && "" === e.whitespace_before ? this._output.space_before_token = !1 : (p(this._flags.last_token.text, l) || "catch" === this._flags.last_token.text) && (this._output.space_before_token = !0); else if (this._flags.last_token.type === c.EQUALS || this._flags.last_token.type === c.OPERATOR) this.start_of_object_property() || this.allow_wrap_or_preserved_newline(e); else if (this._flags.last_token.type === c.WORD) {
                        this._output.space_before_token = !1;
                        var n = this._tokens.peek(-3);
                        if (this._options.space_after_named_function && n) {
                            var r = this._tokens.peek(-4);
                            f(n, ["async", "function"]) || "*" === n.text && f(r, ["async", "function"]) ? this._output.space_before_token = !0 : this._flags.mode === y && ("{" !== n.text && "," !== n.text && ("*" !== n.text || "{" !== r.text && "," !== r.text) || (this._output.space_before_token = !0))
                        }
                    } else this.allow_wrap_or_preserved_newline(e);
                    (this._flags.last_token.type === c.RESERVED && ("function" === this._flags.last_word || "typeof" === this._flags.last_word) || "*" === this._flags.last_token.text && (p(this._last_last_text, ["function", "yield"]) || this._flags.mode === y && p(this._last_last_text, ["{", ","]))) && (this._output.space_before_token = this._options.space_after_anon_function)
                }
                ";" === this._flags.last_token.text || this._flags.last_token.type === c.START_BLOCK ? this.print_newline() : this._flags.last_token.type !== c.END_EXPR && this._flags.last_token.type !== c.START_EXPR && this._flags.last_token.type !== c.END_BLOCK && "." !== this._flags.last_token.text && this._flags.last_token.type !== c.COMMA || this.allow_wrap_or_preserved_newline(e, e.newlines), this.print_token(e), this.set_mode(t), this._options.space_in_paren && (this._output.space_before_token = !0), this.indent()
            }, T.prototype.handle_end_expr = function (e) {
                for (; this._flags.mode === v;) this.restore_mode();
                this.handle_whitespace_and_comments(e), this._flags.multiline_frame && this.allow_wrap_or_preserved_newline(e, "]" === e.text && S(this._flags.mode) && !this._options.keep_array_indentation), this._options.space_in_paren && (this._flags.last_token.type !== c.START_EXPR || this._options.space_in_empty_paren ? this._output.space_before_token = !0 : (this._output.trim(), this._output.space_before_token = !1)), this.deindent(), this.print_token(e), this.restore_mode(), C(this._output, this._previous_flags), this._flags.do_while && this._previous_flags.mode === x && (this._previous_flags.mode = k, this._flags.do_block = !1, this._flags.do_while = !1)
            }, T.prototype.handle_start_block = function (e) {
                this.handle_whitespace_and_comments(e);
                var t = this._tokens.peek(), n = this._tokens.peek(1);
                "switch" === this._flags.last_word && this._flags.last_token.type === c.END_EXPR ? (this.set_mode(g), this._flags.in_case_statement = !0) : this._flags.case_body ? this.set_mode(g) : n && (p(n.text, [":", ","]) && p(t.type, [c.STRING, c.WORD, c.RESERVED]) || p(t.text, ["get", "set", "..."]) && p(n.type, [c.WORD, c.RESERVED])) ? p(this._last_last_text, ["class", "interface"]) ? this.set_mode(g) : this.set_mode(y) : this._flags.last_token.type === c.OPERATOR && "=>" === this._flags.last_token.text ? this.set_mode(g) : p(this._flags.last_token.type, [c.EQUALS, c.START_EXPR, c.COMMA, c.OPERATOR]) || f(this._flags.last_token, ["return", "throw", "import", "default"]) ? this.set_mode(y) : this.set_mode(g);
                var r = !t.comments_before && "}" === t.text,
                    i = r && "function" === this._flags.last_word && this._flags.last_token.type === c.END_EXPR;
                if (this._options.brace_preserve_inline) {
                    var o = 0, a = null;
                    this._flags.inline_frame = !0;
                    do {
                        if (o += 1, (a = this._tokens.peek(o - 1)).newlines) {
                            this._flags.inline_frame = !1;
                            break
                        }
                    } while (a.type !== c.EOF && (a.type !== c.END_BLOCK || a.opened !== e))
                }
                ("expand" === this._options.brace_style || "none" === this._options.brace_style && e.newlines) && !this._flags.inline_frame ? this._flags.last_token.type !== c.OPERATOR && (i || this._flags.last_token.type === c.EQUALS || f(this._flags.last_token, h) && "else" !== this._flags.last_token.text) ? this._output.space_before_token = !0 : this.print_newline(!1, !0) : (!S(this._previous_flags.mode) || this._flags.last_token.type !== c.START_EXPR && this._flags.last_token.type !== c.COMMA || ((this._flags.last_token.type === c.COMMA || this._options.space_in_paren) && (this._output.space_before_token = !0), (this._flags.last_token.type === c.COMMA || this._flags.last_token.type === c.START_EXPR && this._flags.inline_frame) && (this.allow_wrap_or_preserved_newline(e), this._previous_flags.multiline_frame = this._previous_flags.multiline_frame || this._flags.multiline_frame, this._flags.multiline_frame = !1)), this._flags.last_token.type !== c.OPERATOR && this._flags.last_token.type !== c.START_EXPR && (this._flags.last_token.type !== c.START_BLOCK || this._flags.inline_frame ? this._output.space_before_token = !0 : this.print_newline())), this.print_token(e), this.indent(), r || this._options.brace_preserve_inline && this._flags.inline_frame || this.print_newline()
            }, T.prototype.handle_end_block = function (e) {
                for (this.handle_whitespace_and_comments(e); this._flags.mode === v;) this.restore_mode();
                var t = this._flags.last_token.type === c.START_BLOCK;
                this._flags.inline_frame && !t ? this._output.space_before_token = !0 : "expand" === this._options.brace_style ? t || this.print_newline() : t || (S(this._flags.mode) && this._options.keep_array_indentation ? (this._options.keep_array_indentation = !1, this.print_newline(), this._options.keep_array_indentation = !0) : this.print_newline()), this.restore_mode(), this.print_token(e)
            }, T.prototype.handle_word = function (e) {
                if (e.type === c.RESERVED && (p(e.text, ["set", "get"]) && this._flags.mode !== y ? e.type = c.WORD : "import" === e.text && "(" === this._tokens.peek().text ? e.type = c.WORD : p(e.text, ["as", "from"]) && !this._flags.import_block ? e.type = c.WORD : this._flags.mode === y && ":" === this._tokens.peek().text && (e.type = c.WORD)), this.start_of_statement(e) ? f(this._flags.last_token, ["var", "let", "const"]) && e.type === c.WORD && (this._flags.declaration_statement = !0) : !e.newlines || E(this._flags.mode) || this._flags.last_token.type === c.OPERATOR && "--" !== this._flags.last_token.text && "++" !== this._flags.last_token.text || this._flags.last_token.type === c.EQUALS || !this._options.preserve_newlines && f(this._flags.last_token, ["var", "let", "const", "set", "get"]) ? this.handle_whitespace_and_comments(e) : (this.handle_whitespace_and_comments(e), this.print_newline()), this._flags.do_block && !this._flags.do_while) {
                    if (d(e, "while")) return this._output.space_before_token = !0, this.print_token(e), this._output.space_before_token = !0, void (this._flags.do_while = !0);
                    this.print_newline(), this._flags.do_block = !1
                }
                if (this._flags.if_block) if (!this._flags.else_block && d(e, "else")) this._flags.else_block = !0; else {
                    for (; this._flags.mode === v;) this.restore_mode();
                    this._flags.if_block = !1, this._flags.else_block = !1
                }
                if (this._flags.in_case_statement && f(e, ["case", "default"])) return this.print_newline(), this._flags.last_token.type !== c.END_BLOCK && (this._flags.case_body || this._options.jslint_happy) && this.deindent(), this._flags.case_body = !1, this.print_token(e), void (this._flags.in_case = !0);
                if (this._flags.last_token.type !== c.COMMA && this._flags.last_token.type !== c.START_EXPR && this._flags.last_token.type !== c.EQUALS && this._flags.last_token.type !== c.OPERATOR || this.start_of_object_property() || this.allow_wrap_or_preserved_newline(e), d(e, "function")) return (p(this._flags.last_token.text, ["}", ";"]) || this._output.just_added_newline() && !p(this._flags.last_token.text, ["(", "[", "{", ":", "=", ","]) && this._flags.last_token.type !== c.OPERATOR) && (this._output.just_added_blankline() || e.comments_before || (this.print_newline(), this.print_newline(!0))), this._flags.last_token.type === c.RESERVED || this._flags.last_token.type === c.WORD ? f(this._flags.last_token, ["get", "set", "new", "export"]) || f(this._flags.last_token, O) ? this._output.space_before_token = !0 : d(this._flags.last_token, "default") && "export" === this._last_last_text ? this._output.space_before_token = !0 : "declare" === this._flags.last_token.text ? this._output.space_before_token = !0 : this.print_newline() : this._flags.last_token.type === c.OPERATOR || "=" === this._flags.last_token.text ? this._output.space_before_token = !0 : (this._flags.multiline_frame || !E(this._flags.mode) && !S(this._flags.mode)) && this.print_newline(), this.print_token(e), void (this._flags.last_word = e.text);
                var t = "NONE";
                this._flags.last_token.type === c.END_BLOCK ? this._previous_flags.inline_frame ? t = "SPACE" : f(e, ["else", "catch", "finally", "from"]) ? "expand" === this._options.brace_style || "end-expand" === this._options.brace_style || "none" === this._options.brace_style && e.newlines ? t = "NEWLINE" : (t = "SPACE", this._output.space_before_token = !0) : t = "NEWLINE" : this._flags.last_token.type === c.SEMICOLON && this._flags.mode === g ? t = "NEWLINE" : this._flags.last_token.type === c.SEMICOLON && E(this._flags.mode) ? t = "SPACE" : this._flags.last_token.type === c.STRING ? t = "NEWLINE" : this._flags.last_token.type === c.RESERVED || this._flags.last_token.type === c.WORD || "*" === this._flags.last_token.text && (p(this._last_last_text, ["function", "yield"]) || this._flags.mode === y && p(this._last_last_text, ["{", ","])) ? t = "SPACE" : this._flags.last_token.type === c.START_BLOCK ? t = this._flags.inline_frame ? "SPACE" : "NEWLINE" : this._flags.last_token.type === c.END_EXPR && (this._output.space_before_token = !0, t = "NEWLINE"), f(e, l) && ")" !== this._flags.last_token.text && (t = this._flags.inline_frame || "else" === this._flags.last_token.text || "export" === this._flags.last_token.text ? "SPACE" : "NEWLINE"), f(e, ["else", "catch", "finally"]) ? (this._flags.last_token.type !== c.END_BLOCK || this._previous_flags.mode !== g || "expand" === this._options.brace_style || "end-expand" === this._options.brace_style || "none" === this._options.brace_style && e.newlines) && !this._flags.inline_frame ? this.print_newline() : (this._output.trim(!0), "}" !== this._output.current_line.last() && this.print_newline(), this._output.space_before_token = !0) : "NEWLINE" === t ? f(this._flags.last_token, h) ? this._output.space_before_token = !0 : "declare" === this._flags.last_token.text && f(e, ["var", "let", "const"]) ? this._output.space_before_token = !0 : this._flags.last_token.type !== c.END_EXPR ? this._flags.last_token.type === c.START_EXPR && f(e, ["var", "let", "const"]) || ":" === this._flags.last_token.text || (d(e, "if") && d(e.previous, "else") ? this._output.space_before_token = !0 : this.print_newline()) : f(e, l) && ")" !== this._flags.last_token.text && this.print_newline() : this._flags.multiline_frame && S(this._flags.mode) && "," === this._flags.last_token.text && "}" === this._last_last_text ? this.print_newline() : "SPACE" === t && (this._output.space_before_token = !0), !e.previous || e.previous.type !== c.WORD && e.previous.type !== c.RESERVED || (this._output.space_before_token = !0), this.print_token(e), this._flags.last_word = e.text, e.type === c.RESERVED && ("do" === e.text ? this._flags.do_block = !0 : "if" === e.text ? this._flags.if_block = !0 : "import" === e.text ? this._flags.import_block = !0 : this._flags.import_block && d(e, "from") && (this._flags.import_block = !1))
            }, T.prototype.handle_semicolon = function (e) {
                this.start_of_statement(e) ? this._output.space_before_token = !1 : this.handle_whitespace_and_comments(e);
                for (var t = this._tokens.peek(); !(this._flags.mode !== v || this._flags.if_block && d(t, "else") || this._flags.do_block);) this.restore_mode();
                this._flags.import_block && (this._flags.import_block = !1), this.print_token(e)
            }, T.prototype.handle_string = function (e) {
                this.start_of_statement(e) ? this._output.space_before_token = !0 : (this.handle_whitespace_and_comments(e), this._flags.last_token.type === c.RESERVED || this._flags.last_token.type === c.WORD || this._flags.inline_frame ? this._output.space_before_token = !0 : this._flags.last_token.type === c.COMMA || this._flags.last_token.type === c.START_EXPR || this._flags.last_token.type === c.EQUALS || this._flags.last_token.type === c.OPERATOR ? this.start_of_object_property() || this.allow_wrap_or_preserved_newline(e) : this.print_newline()), this.print_token(e)
            }, T.prototype.handle_equals = function (e) {
                this.start_of_statement(e) || this.handle_whitespace_and_comments(e), this._flags.declaration_statement && (this._flags.declaration_assignment = !0), this._output.space_before_token = !0, this.print_token(e), this._output.space_before_token = !0
            }, T.prototype.handle_comma = function (e) {
                this.handle_whitespace_and_comments(e, !0), this.print_token(e), this._output.space_before_token = !0, this._flags.declaration_statement ? (E(this._flags.parent.mode) && (this._flags.declaration_assignment = !1), this._flags.declaration_assignment ? (this._flags.declaration_assignment = !1, this.print_newline(!1, !0)) : this._options.comma_first && this.allow_wrap_or_preserved_newline(e)) : this._flags.mode === y || this._flags.mode === v && this._flags.parent.mode === y ? (this._flags.mode === v && this.restore_mode(), this._flags.inline_frame || this.print_newline()) : this._options.comma_first && this.allow_wrap_or_preserved_newline(e)
            }, T.prototype.handle_operator = function (e) {
                var t = "*" === e.text && (f(this._flags.last_token, ["function", "yield"]) || p(this._flags.last_token.type, [c.START_BLOCK, c.COMMA, c.END_BLOCK, c.SEMICOLON])),
                    n = p(e.text, ["-", "+"]) && (p(this._flags.last_token.type, [c.START_BLOCK, c.START_EXPR, c.EQUALS, c.OPERATOR]) || p(this._flags.last_token.text, l) || "," === this._flags.last_token.text);
                if (this.start_of_statement(e)) ; else {
                    var r = !t;
                    this.handle_whitespace_and_comments(e, r)
                }
                if (f(this._flags.last_token, h)) return this._output.space_before_token = !0, void this.print_token(e);
                if ("*" !== e.text || this._flags.last_token.type !== c.DOT) if ("::" !== e.text) {
                    if (this._flags.last_token.type === c.OPERATOR && p(this._options.operator_position, m) && this.allow_wrap_or_preserved_newline(e), ":" === e.text && this._flags.in_case) return this.print_token(e), this._flags.in_case = !1, this._flags.case_body = !0, void (this._tokens.peek().type !== c.START_BLOCK ? (this.indent(), this.print_newline()) : this._output.space_before_token = !0);
                    var i = !0, o = !0, a = !1;
                    if (":" === e.text ? 0 === this._flags.ternary_depth ? i = !1 : (this._flags.ternary_depth -= 1, a = !0) : "?" === e.text && (this._flags.ternary_depth += 1), !n && !t && this._options.preserve_newlines && p(e.text, u)) {
                        var s = ":" === e.text, d = s && a, y = s && !a;
                        switch (this._options.operator_position) {
                            case _.before_newline:
                                return this._output.space_before_token = !y, this.print_token(e), s && !d || this.allow_wrap_or_preserved_newline(e), void (this._output.space_before_token = !0);
                            case _.after_newline:
                                return this._output.space_before_token = !0, !s || d ? this._tokens.peek().newlines ? this.print_newline(!1, !0) : this.allow_wrap_or_preserved_newline(e) : this._output.space_before_token = !1, this.print_token(e), void (this._output.space_before_token = !0);
                            case _.preserve_newline:
                                return y || this.allow_wrap_or_preserved_newline(e), i = !(this._output.just_added_newline() || y), this._output.space_before_token = i, this.print_token(e), void (this._output.space_before_token = !0)
                        }
                    }
                    if (t) {
                        this.allow_wrap_or_preserved_newline(e), i = !1;
                        var b = this._tokens.peek();
                        o = b && p(b.type, [c.WORD, c.RESERVED])
                    } else "..." === e.text ? (this.allow_wrap_or_preserved_newline(e), i = this._flags.last_token.type === c.START_BLOCK, o = !1) : (p(e.text, ["--", "++", "!", "~"]) || n) && (this._flags.last_token.type !== c.COMMA && this._flags.last_token.type !== c.START_EXPR || this.allow_wrap_or_preserved_newline(e), o = i = !1, !e.newlines || "--" !== e.text && "++" !== e.text || this.print_newline(!1, !0), ";" === this._flags.last_token.text && E(this._flags.mode) && (i = !0), this._flags.last_token.type === c.RESERVED ? i = !0 : this._flags.last_token.type === c.END_EXPR ? i = !("]" === this._flags.last_token.text && ("--" === e.text || "++" === e.text)) : this._flags.last_token.type === c.OPERATOR && (i = p(e.text, ["--", "-", "++", "+"]) && p(this._flags.last_token.text, ["--", "-", "++", "+"]), p(e.text, ["+", "-"]) && p(this._flags.last_token.text, ["--", "++"]) && (o = !0)), (this._flags.mode !== g || this._flags.inline_frame) && this._flags.mode !== v || "{" !== this._flags.last_token.text && ";" !== this._flags.last_token.text || this.print_newline());
                    this._output.space_before_token = this._output.space_before_token || i, this.print_token(e), this._output.space_before_token = o
                } else this.print_token(e); else this.print_token(e)
            }, T.prototype.handle_block_comment = function (e, t) {
                return this._output.raw ? (this._output.add_raw_token(e), void (e.directives && "end" === e.directives.preserve && (this._output.raw = this._options.test_output_raw))) : e.directives ? (this.print_newline(!1, t), this.print_token(e), "start" === e.directives.preserve && (this._output.raw = !0), void this.print_newline(!1, !0)) : o.newline.test(e.text) || e.newlines ? void this.print_block_commment(e, t) : (this._output.space_before_token = !0, this.print_token(e), void (this._output.space_before_token = !0))
            }, T.prototype.print_block_commment = function (e, t) {
                var n, r = function (e) {
                    for (var t = [], n = (e = e.replace(o.allLineBreaks, "\n")).indexOf("\n"); -1 !== n;) t.push(e.substring(0, n)), n = (e = e.substring(n + 1)).indexOf("\n");
                    return e.length && t.push(e), t
                }(e.text), i = !1, a = !1, s = e.whitespace_before, l = s.length;
                if (this.print_newline(!1, t), this.print_token_line_indentation(e), this._output.add_token(r[0]), this.print_newline(!1, t), 1 < r.length) {
                    for (i = function (e, t) {
                        for (var n = 0; n < e.length; n++) if ("*" !== e[n].trim().charAt(0)) return !1;
                        return !0
                    }(r = r.slice(1)), a = function (e, t) {
                        for (var n, r = 0, i = e.length; r < i; r++) if ((n = e[r]) && 0 !== n.indexOf(t)) return !1;
                        return !0
                    }(r, s), i && (this._flags.alignment = 1), n = 0; n < r.length; n++) i ? (this.print_token_line_indentation(e), this._output.add_token(r[n].replace(/^\s+/g, ""))) : a && r[n] ? (this.print_token_line_indentation(e), this._output.add_token(r[n].substring(l))) : (this._output.current_line.set_indent(-1), this._output.add_token(r[n])), this.print_newline(!1, t);
                    this._flags.alignment = 0
                }
            }, T.prototype.handle_comment = function (e, t) {
                e.newlines ? this.print_newline(!1, t) : this._output.trim(!0), this._output.space_before_token = !0, this.print_token(e), this.print_newline(!1, t)
            }, T.prototype.handle_dot = function (e) {
                this.start_of_statement(e) || this.handle_whitespace_and_comments(e, !0), f(this._flags.last_token, h) ? this._output.space_before_token = !1 : this.allow_wrap_or_preserved_newline(e, ")" === this._flags.last_token.text && this._options.break_chained_methods), this._options.unindent_chained_methods && this._output.just_added_newline() && this.deindent(), this.print_token(e)
            }, T.prototype.handle_unknown = function (e, t) {
                this.print_token(e), "\n" === e.text[e.text.length - 1] && this.print_newline(!1, t)
            }, T.prototype.handle_eof = function (e) {
                for (; this._flags.mode === v;) this.restore_mode();
                this.handle_whitespace_and_comments(e)
            }, e.exports.Beautifier = T
        }, function (e, t, n) {
            "use strict";

            function r(e) {
                this.__parent = e, this.__character_count = 0, this.__indent_count = -1, this.__alignment_count = 0, this.__wrap_point_index = 0, this.__wrap_point_character_count = 0, this.__wrap_point_indent_count = -1, this.__wrap_point_alignment_count = 0, this.__items = []
            }

            function i(e, t) {
                this.__cache = [""], this.__indent_size = e.indent_size, this.__indent_string = e.indent_char, e.indent_with_tabs || (this.__indent_string = new Array(e.indent_size + 1).join(e.indent_char)), t = t || "", 0 < e.indent_level && (t = new Array(e.indent_level + 1).join(this.__indent_string)), this.__base_string = t, this.__base_string_length = t.length
            }

            function o(e, t) {
                this.__indent_cache = new i(e, t), this.raw = !1, this._end_with_newline = e.end_with_newline, this.indent_size = e.indent_size, this.wrap_line_length = e.wrap_line_length, this.indent_empty_lines = e.indent_empty_lines, this.__lines = [], this.previous_line = null, this.current_line = null, this.next_line = new r(this), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = !1, this.__add_outputline()
            }

            r.prototype.clone_empty = function () {
                var e = new r(this.__parent);
                return e.set_indent(this.__indent_count, this.__alignment_count), e
            }, r.prototype.item = function (e) {
                return e < 0 ? this.__items[this.__items.length + e] : this.__items[e]
            }, r.prototype.has_match = function (e) {
                for (var t = this.__items.length - 1; 0 <= t; t--) if (this.__items[t].match(e)) return !0;
                return !1
            }, r.prototype.set_indent = function (e, t) {
                this.is_empty() && (this.__indent_count = e || 0, this.__alignment_count = t || 0, this.__character_count = this.__parent.get_indent_size(this.__indent_count, this.__alignment_count))
            }, r.prototype._set_wrap_point = function () {
                this.__parent.wrap_line_length && (this.__wrap_point_index = this.__items.length, this.__wrap_point_character_count = this.__character_count, this.__wrap_point_indent_count = this.__parent.next_line.__indent_count, this.__wrap_point_alignment_count = this.__parent.next_line.__alignment_count)
            }, r.prototype._should_wrap = function () {
                return this.__wrap_point_index && this.__character_count > this.__parent.wrap_line_length && this.__wrap_point_character_count > this.__parent.next_line.__character_count
            }, r.prototype._allow_wrap = function () {
                if (this._should_wrap()) {
                    this.__parent.add_new_line();
                    var e = this.__parent.current_line;
                    return e.set_indent(this.__wrap_point_indent_count, this.__wrap_point_alignment_count), e.__items = this.__items.slice(this.__wrap_point_index), this.__items = this.__items.slice(0, this.__wrap_point_index), e.__character_count += this.__character_count - this.__wrap_point_character_count, this.__character_count = this.__wrap_point_character_count, " " === e.__items[0] && (e.__items.splice(0, 1), e.__character_count -= 1), !0
                }
                return !1
            }, r.prototype.is_empty = function () {
                return 0 === this.__items.length
            }, r.prototype.last = function () {
                return this.is_empty() ? null : this.__items[this.__items.length - 1]
            }, r.prototype.push = function (e) {
                this.__items.push(e);
                var t = e.lastIndexOf("\n");
                -1 !== t ? this.__character_count = e.length - t : this.__character_count += e.length
            }, r.prototype.pop = function () {
                var e = null;
                return this.is_empty() || (e = this.__items.pop(), this.__character_count -= e.length), e
            }, r.prototype._remove_indent = function () {
                0 < this.__indent_count && (this.__indent_count -= 1, this.__character_count -= this.__parent.indent_size)
            }, r.prototype._remove_wrap_indent = function () {
                0 < this.__wrap_point_indent_count && (this.__wrap_point_indent_count -= 1)
            }, r.prototype.trim = function () {
                for (; " " === this.last();) this.__items.pop(), this.__character_count -= 1
            }, r.prototype.toString = function () {
                var e = "";
                return this.is_empty() ? this.__parent.indent_empty_lines && (e = this.__parent.get_indent_string(this.__indent_count)) : (e = this.__parent.get_indent_string(this.__indent_count, this.__alignment_count), e += this.__items.join("")), e
            }, i.prototype.get_indent_size = function (e, t) {
                var n = this.__base_string_length;
                return t = t || 0, e < 0 && (n = 0), (n += e * this.__indent_size) + t
            }, i.prototype.get_indent_string = function (e, t) {
                var n = this.__base_string;
                return t = t || 0, e < 0 && (e = 0, n = ""), t += e * this.__indent_size, this.__ensure_cache(t), n + this.__cache[t]
            }, i.prototype.__ensure_cache = function (e) {
                for (; e >= this.__cache.length;) this.__add_column()
            }, i.prototype.__add_column = function () {
                var e = this.__cache.length, t = 0, n = "";
                this.__indent_size && e >= this.__indent_size && (e -= (t = Math.floor(e / this.__indent_size)) * this.__indent_size, n = new Array(t + 1).join(this.__indent_string)), e && (n += new Array(e + 1).join(" ")), this.__cache.push(n)
            }, o.prototype.__add_outputline = function () {
                this.previous_line = this.current_line, this.current_line = this.next_line.clone_empty(), this.__lines.push(this.current_line)
            }, o.prototype.get_line_number = function () {
                return this.__lines.length
            }, o.prototype.get_indent_string = function (e, t) {
                return this.__indent_cache.get_indent_string(e, t)
            }, o.prototype.get_indent_size = function (e, t) {
                return this.__indent_cache.get_indent_size(e, t)
            }, o.prototype.is_empty = function () {
                return !this.previous_line && this.current_line.is_empty()
            }, o.prototype.add_new_line = function (e) {
                return !(this.is_empty() || !e && this.just_added_newline() || (this.raw || this.__add_outputline(), 0))
            }, o.prototype.get_code = function (e) {
                this.trim(!0);
                var t = this.current_line.pop();
                t && ("\n" === t[t.length - 1] && (t = t.replace(/\n+$/g, "")), this.current_line.push(t)), this._end_with_newline && this.__add_outputline();
                var n = this.__lines.join("\n");
                return "\n" !== e && (n = n.replace(/[\n]/g, e)), n
            }, o.prototype.set_wrap_point = function () {
                this.current_line._set_wrap_point()
            }, o.prototype.set_indent = function (e, t) {
                return e = e || 0, t = t || 0, this.next_line.set_indent(e, t), 1 < this.__lines.length ? (this.current_line.set_indent(e, t), !0) : (this.current_line.set_indent(), !1)
            }, o.prototype.add_raw_token = function (e) {
                for (var t = 0; t < e.newlines; t++) this.__add_outputline();
                this.current_line.set_indent(-1), this.current_line.push(e.whitespace_before), this.current_line.push(e.text), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = !1
            }, o.prototype.add_token = function (e) {
                this.__add_space_before_token(), this.current_line.push(e), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = this.current_line._allow_wrap()
            }, o.prototype.__add_space_before_token = function () {
                this.space_before_token && !this.just_added_newline() && (this.non_breaking_space || this.set_wrap_point(), this.current_line.push(" "))
            }, o.prototype.remove_indent = function (e) {
                for (var t = this.__lines.length; e < t;) this.__lines[e]._remove_indent(), e++;
                this.current_line._remove_wrap_indent()
            }, o.prototype.trim = function (e) {
                for (e = void 0 !== e && e, this.current_line.trim(); e && 1 < this.__lines.length && this.current_line.is_empty();) this.__lines.pop(), this.current_line = this.__lines[this.__lines.length - 1], this.current_line.trim();
                this.previous_line = 1 < this.__lines.length ? this.__lines[this.__lines.length - 2] : null
            }, o.prototype.just_added_newline = function () {
                return this.current_line.is_empty()
            }, o.prototype.just_added_blankline = function () {
                return this.is_empty() || this.current_line.is_empty() && this.previous_line.is_empty()
            }, o.prototype.ensure_empty_line_above = function (e, t) {
                for (var n = this.__lines.length - 2; 0 <= n;) {
                    var i = this.__lines[n];
                    if (i.is_empty()) break;
                    if (0 !== i.item(0).indexOf(e) && i.item(-1) !== t) {
                        this.__lines.splice(n + 1, 0, new r(this)), this.previous_line = this.__lines[this.__lines.length - 2];
                        break
                    }
                    n--
                }
            }, e.exports.Output = o
        }, function (e, t, n) {
            "use strict";
            e.exports.Token = function (e, t, n, r) {
                this.type = e, this.text = t, this.comments_before = null, this.newlines = n || 0, this.whitespace_before = r || "", this.parent = null, this.next = null, this.previous = null, this.opened = null, this.closed = null, this.directives = null
            }
        }, function (e, t, n) {
            "use strict";
            var r = "\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc",
                i = "(?:\\\\u[0-9a-fA-F]{4}|[\\x24\\x40\\x41-\\x5a\\x5f\\x61-\\x7a" + r + "])";
            t.identifier = new RegExp(i + "(?:\\\\u[0-9a-fA-F]{4}|[\\x24\\x30-\\x39\\x41-\\x5a\\x5f\\x61-\\x7a\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u0620-\\u0649\\u0672-\\u06d3\\u06e7-\\u06e8\\u06fb-\\u06fc\\u0730-\\u074a\\u0800-\\u0814\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0840-\\u0857\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962-\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09d7\\u09df-\\u09e0\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2-\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b5f-\\u0b60\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62-\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2-\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d46-\\u0d48\\u0d57\\u0d62-\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e34-\\u0e3a\\u0e40-\\u0e45\\u0e50-\\u0e59\\u0eb4-\\u0eb9\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f41-\\u0f47\\u0f71-\\u0f84\\u0f86-\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u1000-\\u1029\\u1040-\\u1049\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u170e-\\u1710\\u1720-\\u1730\\u1740-\\u1750\\u1772\\u1773\\u1780-\\u17b2\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u1920-\\u192b\\u1930-\\u193b\\u1951-\\u196d\\u19b0-\\u19c0\\u19c8-\\u19c9\\u19d0-\\u19d9\\u1a00-\\u1a15\\u1a20-\\u1a53\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b46-\\u1b4b\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c00-\\u1c22\\u1c40-\\u1c49\\u1c5b-\\u1c7d\\u1cd0-\\u1cd2\\u1d00-\\u1dbe\\u1e01-\\u1f15\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2d81-\\u2d96\\u2de0-\\u2dff\\u3021-\\u3028\\u3099\\u309a\\ua640-\\ua66d\\ua674-\\ua67d\\ua69f\\ua6f0-\\ua6f1\\ua7f8-\\ua800\\ua806\\ua80b\\ua823-\\ua827\\ua880-\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8f3-\\ua8f7\\ua900-\\ua909\\ua926-\\ua92d\\ua930-\\ua945\\ua980-\\ua983\\ua9b3-\\ua9c0\\uaa00-\\uaa27\\uaa40-\\uaa41\\uaa4c-\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaae0-\\uaae9\\uaaf2-\\uaaf3\\uabc0-\\uabe1\\uabec\\uabed\\uabf0-\\uabf9\\ufb20-\\ufb28\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f])*", "g"), t.identifierStart = new RegExp(i), t.identifierMatch = new RegExp("(?:\\\\u[0-9a-fA-F]{4}|[\\x24\\x30-\\x39\\x41-\\x5a\\x5f\\x61-\\x7a" + r + "\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u0620-\\u0649\\u0672-\\u06d3\\u06e7-\\u06e8\\u06fb-\\u06fc\\u0730-\\u074a\\u0800-\\u0814\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0840-\\u0857\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962-\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09d7\\u09df-\\u09e0\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2-\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b5f-\\u0b60\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62-\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2-\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d46-\\u0d48\\u0d57\\u0d62-\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e34-\\u0e3a\\u0e40-\\u0e45\\u0e50-\\u0e59\\u0eb4-\\u0eb9\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f41-\\u0f47\\u0f71-\\u0f84\\u0f86-\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u1000-\\u1029\\u1040-\\u1049\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u170e-\\u1710\\u1720-\\u1730\\u1740-\\u1750\\u1772\\u1773\\u1780-\\u17b2\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u1920-\\u192b\\u1930-\\u193b\\u1951-\\u196d\\u19b0-\\u19c0\\u19c8-\\u19c9\\u19d0-\\u19d9\\u1a00-\\u1a15\\u1a20-\\u1a53\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b46-\\u1b4b\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c00-\\u1c22\\u1c40-\\u1c49\\u1c5b-\\u1c7d\\u1cd0-\\u1cd2\\u1d00-\\u1dbe\\u1e01-\\u1f15\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2d81-\\u2d96\\u2de0-\\u2dff\\u3021-\\u3028\\u3099\\u309a\\ua640-\\ua66d\\ua674-\\ua67d\\ua69f\\ua6f0-\\ua6f1\\ua7f8-\\ua800\\ua806\\ua80b\\ua823-\\ua827\\ua880-\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8f3-\\ua8f7\\ua900-\\ua909\\ua926-\\ua92d\\ua930-\\ua945\\ua980-\\ua983\\ua9b3-\\ua9c0\\uaa00-\\uaa27\\uaa40-\\uaa41\\uaa4c-\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaae0-\\uaae9\\uaaf2-\\uaaf3\\uabc0-\\uabe1\\uabec\\uabed\\uabf0-\\uabf9\\ufb20-\\ufb28\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f])+"), t.newline = /[\n\r\u2028\u2029]/, t.lineBreak = new RegExp("\r\n|" + t.newline.source), t.allLineBreaks = new RegExp(t.lineBreak.source, "g")
        }, function (e, t, n) {
            "use strict";
            var r = n(6).Options, i = ["before-newline", "after-newline", "preserve-newline"];

            function o(e) {
                r.call(this, e, "js");
                var t = this.raw_options.brace_style || null;
                "expand-strict" === t ? this.raw_options.brace_style = "expand" : "collapse-preserve-inline" === t ? this.raw_options.brace_style = "collapse,preserve-inline" : void 0 !== this.raw_options.braces_on_own_line && (this.raw_options.brace_style = this.raw_options.braces_on_own_line ? "expand" : "collapse");
                var n = this._get_selection_list("brace_style", ["collapse", "expand", "end-expand", "none", "preserve-inline"]);
                this.brace_preserve_inline = !1, this.brace_style = "collapse";
                for (var o = 0; o < n.length; o++) "preserve-inline" === n[o] ? this.brace_preserve_inline = !0 : this.brace_style = n[o];
                this.unindent_chained_methods = this._get_boolean("unindent_chained_methods"), this.break_chained_methods = this._get_boolean("break_chained_methods"), this.space_in_paren = this._get_boolean("space_in_paren"), this.space_in_empty_paren = this._get_boolean("space_in_empty_paren"), this.jslint_happy = this._get_boolean("jslint_happy"), this.space_after_anon_function = this._get_boolean("space_after_anon_function"), this.space_after_named_function = this._get_boolean("space_after_named_function"), this.keep_array_indentation = this._get_boolean("keep_array_indentation"), this.space_before_conditional = this._get_boolean("space_before_conditional", !0), this.unescape_strings = this._get_boolean("unescape_strings"), this.e4x = this._get_boolean("e4x"), this.comma_first = this._get_boolean("comma_first"), this.operator_position = this._get_selection("operator_position", i), this.test_output_raw = this._get_boolean("test_output_raw"), this.jslint_happy && (this.space_after_anon_function = !0)
            }

            o.prototype = new r, e.exports.Options = o
        }, function (e, t, n) {
            "use strict";

            function r(e, t) {
                this.raw_options = i(e, t), this.disabled = this._get_boolean("disabled"), this.eol = this._get_characters("eol", "auto"), this.end_with_newline = this._get_boolean("end_with_newline"), this.indent_size = this._get_number("indent_size", 4), this.indent_char = this._get_characters("indent_char", " "), this.indent_level = this._get_number("indent_level"), this.preserve_newlines = this._get_boolean("preserve_newlines", !0), this.max_preserve_newlines = this._get_number("max_preserve_newlines", 32786), this.preserve_newlines || (this.max_preserve_newlines = 0), this.indent_with_tabs = this._get_boolean("indent_with_tabs", "\t" === this.indent_char), this.indent_with_tabs && (this.indent_char = "\t", 1 === this.indent_size && (this.indent_size = 4)), this.wrap_line_length = this._get_number("wrap_line_length", this._get_number("max_char")), this.indent_empty_lines = this._get_boolean("indent_empty_lines"), this.templating = this._get_selection_list("templating", ["auto", "none", "django", "erb", "handlebars", "php"], ["auto"])
            }

            function i(e, t) {
                var n, r = {};
                for (n in e = a(e)) n !== t && (r[n] = e[n]);
                if (t && e[t]) for (n in e[t]) r[n] = e[t][n];
                return r
            }

            function a(e) {
                var t, n = {};
                for (t in e) n[t.replace(/-/g, "_")] = e[t];
                return n
            }

            r.prototype._get_array = function (e, t) {
                var n = this.raw_options[e], r = t || [];
                return "object" === o(n) ? null !== n && "function" == typeof n.concat && (r = n.concat()) : "string" == typeof n && (r = n.split(/[^a-zA-Z0-9_\/\-]+/)), r
            }, r.prototype._get_boolean = function (e, t) {
                var n = this.raw_options[e];
                return void 0 === n ? !!t : !!n
            }, r.prototype._get_characters = function (e, t) {
                var n = this.raw_options[e], r = t || "";
                return "string" == typeof n && (r = n.replace(/\\r/, "\r").replace(/\\n/, "\n").replace(/\\t/, "\t")), r
            }, r.prototype._get_number = function (e, t) {
                var n = this.raw_options[e];
                t = parseInt(t, 10), isNaN(t) && (t = 0);
                var r = parseInt(n, 10);
                return isNaN(r) && (r = t), r
            }, r.prototype._get_selection = function (e, t, n) {
                var r = this._get_selection_list(e, t, n);
                if (1 !== r.length) throw new Error("Invalid Option Value: The option '" + e + "' can only be one of the following values:\n" + t + "\nYou passed in: '" + this.raw_options[e] + "'");
                return r[0]
            }, r.prototype._get_selection_list = function (e, t, n) {
                if (!t || 0 === t.length) throw new Error("Selection list cannot be empty.");
                if (n = n || [t[0]], !this._is_valid_selection(n, t)) throw new Error("Invalid Default Value!");
                var r = this._get_array(e, n);
                if (!this._is_valid_selection(r, t)) throw new Error("Invalid Option Value: The option '" + e + "' can contain only the following values:\n" + t + "\nYou passed in: '" + this.raw_options[e] + "'");
                return r
            }, r.prototype._is_valid_selection = function (e, t) {
                return e.length && t.length && !e.some(function (e) {
                    return -1 === t.indexOf(e)
                })
            }, e.exports.Options = r, e.exports.normalizeOpts = a, e.exports.mergeOpts = i
        }, function (e, t, n) {
            "use strict";
            var r = n(8).InputScanner, i = n(9).Tokenizer, o = n(9).TOKEN, a = n(13).Directives, s = n(4),
                l = n(12).Pattern, u = n(14).TemplatablePattern;

            function c(e, t) {
                return -1 !== t.indexOf(e)
            }

            var p = {
                    START_EXPR: "TK_START_EXPR",
                    END_EXPR: "TK_END_EXPR",
                    START_BLOCK: "TK_START_BLOCK",
                    END_BLOCK: "TK_END_BLOCK",
                    WORD: "TK_WORD",
                    RESERVED: "TK_RESERVED",
                    SEMICOLON: "TK_SEMICOLON",
                    STRING: "TK_STRING",
                    EQUALS: "TK_EQUALS",
                    OPERATOR: "TK_OPERATOR",
                    COMMA: "TK_COMMA",
                    BLOCK_COMMENT: "TK_BLOCK_COMMENT",
                    COMMENT: "TK_COMMENT",
                    DOT: "TK_DOT",
                    UNKNOWN: "TK_UNKNOWN",
                    START: o.START,
                    RAW: o.RAW,
                    EOF: o.EOF
                }, d = new a(/\/\*/, /\*\//),
                f = /0[xX][0123456789abcdefABCDEF]*|0[oO][01234567]*|0[bB][01]*|\d+n|(?:\.\d+|\d+\.?\d*)(?:[eE][+-]?\d+)?/,
                h = /[0-9]/, _ = /[^\d\.]/,
                m = ">>> === !== << && >= ** != == <= >> || < / - + > : & % ? ^ | *".split(" "),
                g = ">>>= ... >>= <<= === >>> !== **= => ^= :: /= << <= == && -= >= >> != -- += ** || ++ %= &= *= |= = ! ? > < : / ^ - + * & % ~ |";
            g = (g = g.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&")).replace(/ /g, "|");
            var v, y = new RegExp(g),
                b = "continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export".split(","),
                w = b.concat(["do", "in", "of", "else", "get", "set", "new", "catch", "finally", "typeof", "yield", "async", "await", "from", "as"]),
                x = new RegExp("^(?:" + w.join("|") + ")$"), k = function (e, t) {
                    i.call(this, e, t), this._patterns.whitespace = this._patterns.whitespace.matching(/\u00A0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff/.source, /\u2028\u2029/.source);
                    var n = new l(this._input), r = new u(this._input).read_options(this._options);
                    this.__patterns = {
                        template: r,
                        identifier: r.starting_with(s.identifier).matching(s.identifierMatch),
                        number: n.matching(f),
                        punct: n.matching(y),
                        comment: n.starting_with(/\/\//).until(/[\n\r\u2028\u2029]/),
                        block_comment: n.starting_with(/\/\*/).until_after(/\*\//),
                        html_comment_start: n.matching(/<!--/),
                        html_comment_end: n.matching(/-->/),
                        include: n.starting_with(/#include/).until_after(s.lineBreak),
                        shebang: n.starting_with(/#!/).until_after(s.lineBreak),
                        xml: n.matching(/[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[\s\S]+?}|!\[CDATA\[[\s\S]*?\]\])(\s+{[\s\S]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{[\s\S]+?}))*\s*(\/?)\s*>/),
                        single_quote: r.until(/['\\\n\r\u2028\u2029]/),
                        double_quote: r.until(/["\\\n\r\u2028\u2029]/),
                        template_text: r.until(/[`\\$]/),
                        template_expression: r.until(/[`}\\]/)
                    }
                };
            (k.prototype = new i)._is_comment = function (e) {
                return e.type === p.COMMENT || e.type === p.BLOCK_COMMENT || e.type === p.UNKNOWN
            }, k.prototype._is_opening = function (e) {
                return e.type === p.START_BLOCK || e.type === p.START_EXPR
            }, k.prototype._is_closing = function (e, t) {
                return (e.type === p.END_BLOCK || e.type === p.END_EXPR) && t && ("]" === e.text && "[" === t.text || ")" === e.text && "(" === t.text || "}" === e.text && "{" === t.text)
            }, k.prototype._reset = function () {
                v = !1
            }, k.prototype._get_next_token = function (e, t) {
                var n = null;
                this._readWhitespace();
                var r = this._input.peek();
                return null === r ? this._create_token(p.EOF, "") : n = (n = (n = (n = (n = (n = (n = (n = (n = n || this._read_string(r)) || this._read_word(e)) || this._read_singles(r)) || this._read_comment(r)) || this._read_regexp(r, e)) || this._read_xml(r, e)) || this._read_non_javascript(r)) || this._read_punctuation()) || this._create_token(p.UNKNOWN, this._input.next())
            }, k.prototype._read_word = function (e) {
                var t;
                return "" !== (t = this.__patterns.identifier.read()) ? (t = t.replace(s.allLineBreaks, "\n"), e.type !== p.DOT && (e.type !== p.RESERVED || "set" !== e.text && "get" !== e.text) && x.test(t) ? "in" === t || "of" === t ? this._create_token(p.OPERATOR, t) : this._create_token(p.RESERVED, t) : this._create_token(p.WORD, t)) : "" !== (t = this.__patterns.number.read()) ? this._create_token(p.WORD, t) : void 0
            }, k.prototype._read_singles = function (e) {
                var t = null;
                return "(" === e || "[" === e ? t = this._create_token(p.START_EXPR, e) : ")" === e || "]" === e ? t = this._create_token(p.END_EXPR, e) : "{" === e ? t = this._create_token(p.START_BLOCK, e) : "}" === e ? t = this._create_token(p.END_BLOCK, e) : ";" === e ? t = this._create_token(p.SEMICOLON, e) : "." === e && _.test(this._input.peek(1)) ? t = this._create_token(p.DOT, e) : "," === e && (t = this._create_token(p.COMMA, e)), t && this._input.next(), t
            }, k.prototype._read_punctuation = function () {
                var e = this.__patterns.punct.read();
                if ("" !== e) return "=" === e ? this._create_token(p.EQUALS, e) : this._create_token(p.OPERATOR, e)
            }, k.prototype._read_non_javascript = function (e) {
                var t = "";
                if ("#" === e) {
                    if (this._is_first_token() && (t = this.__patterns.shebang.read())) return this._create_token(p.UNKNOWN, t.trim() + "\n");
                    if (t = this.__patterns.include.read()) return this._create_token(p.UNKNOWN, t.trim() + "\n");
                    e = this._input.next();
                    var n = "#";
                    if (this._input.hasNext() && this._input.testChar(h)) {
                        for (; n += e = this._input.next(), this._input.hasNext() && "#" !== e && "=" !== e;) ;
                        return "#" === e || ("[" === this._input.peek() && "]" === this._input.peek(1) ? (n += "[]", this._input.next(), this._input.next()) : "{" === this._input.peek() && "}" === this._input.peek(1) && (n += "{}", this._input.next(), this._input.next())), this._create_token(p.WORD, n)
                    }
                    this._input.back()
                } else if ("<" === e && this._is_first_token()) {
                    if (t = this.__patterns.html_comment_start.read()) {
                        for (; this._input.hasNext() && !this._input.testChar(s.newline);) t += this._input.next();
                        return v = !0, this._create_token(p.COMMENT, t)
                    }
                } else if (v && "-" === e && (t = this.__patterns.html_comment_end.read())) return v = !1, this._create_token(p.COMMENT, t);
                return null
            }, k.prototype._read_comment = function (e) {
                var t = null;
                if ("/" === e) {
                    var n = "";
                    if ("*" === this._input.peek(1)) {
                        n = this.__patterns.block_comment.read();
                        var r = d.get_directives(n);
                        r && "start" === r.ignore && (n += d.readIgnored(this._input)), n = n.replace(s.allLineBreaks, "\n"), (t = this._create_token(p.BLOCK_COMMENT, n)).directives = r
                    } else "/" === this._input.peek(1) && (n = this.__patterns.comment.read(), t = this._create_token(p.COMMENT, n))
                }
                return t
            }, k.prototype._read_string = function (e) {
                if ("`" !== e && "'" !== e && '"' !== e) return null;
                var t = this._input.next();
                return this.has_char_escapes = !1, t += "`" === e ? this._read_string_recursive("`", !0, "${") : this._read_string_recursive(e), this.has_char_escapes && this._options.unescape_strings && (t = function (e) {
                    for (var t = "", n = 0, i = new r(e), o = null; i.hasNext();) if ((o = i.match(/([\s]|[^\\]|\\\\)+/g)) && (t += o[0]), "\\" === i.peek()) {
                        if (i.next(), "x" === i.peek()) o = i.match(/x([0-9A-Fa-f]{2})/g); else {
                            if ("u" !== i.peek()) {
                                t += "\\", i.hasNext() && (t += i.next());
                                continue
                            }
                            o = i.match(/u([0-9A-Fa-f]{4})/g)
                        }
                        if (!o) return e;
                        if (126 < (n = parseInt(o[1], 16)) && n <= 255 && 0 === o[0].indexOf("x")) return e;
                        if (0 <= n && n < 32) {
                            t += "\\" + o[0];
                            continue
                        }
                        t += 34 === n || 39 === n || 92 === n ? "\\" + String.fromCharCode(n) : String.fromCharCode(n)
                    }
                    return t
                }(t)), this._input.peek() === e && (t += this._input.next()), t = t.replace(s.allLineBreaks, "\n"), this._create_token(p.STRING, t)
            }, k.prototype._allow_regexp_or_xml = function (e) {
                return e.type === p.RESERVED && c(e.text, ["return", "case", "throw", "else", "do", "typeof", "yield"]) || e.type === p.END_EXPR && ")" === e.text && e.opened.previous.type === p.RESERVED && c(e.opened.previous.text, ["if", "while", "for"]) || c(e.type, [p.COMMENT, p.START_EXPR, p.START_BLOCK, p.START, p.END_BLOCK, p.OPERATOR, p.EQUALS, p.EOF, p.SEMICOLON, p.COMMA])
            }, k.prototype._read_regexp = function (e, t) {
                if ("/" === e && this._allow_regexp_or_xml(t)) {
                    for (var n = this._input.next(), r = !1, i = !1; this._input.hasNext() && (r || i || this._input.peek() !== e) && !this._input.testChar(s.newline);) n += this._input.peek(), r ? r = !1 : (r = "\\" === this._input.peek(), "[" === this._input.peek() ? i = !0 : "]" === this._input.peek() && (i = !1)), this._input.next();
                    return this._input.peek() === e && (n += this._input.next(), n += this._input.read(s.identifier)), this._create_token(p.STRING, n)
                }
                return null
            }, k.prototype._read_xml = function (e, t) {
                if (this._options.e4x && "<" === e && this._allow_regexp_or_xml(t)) {
                    var n = "", r = this.__patterns.xml.read_match();
                    if (r) {
                        for (var i = r[2].replace(/^{\s+/, "{").replace(/\s+}$/, "}"), o = 0 === i.indexOf("{"), a = 0; r;) {
                            var l = !!r[1], u = r[2];
                            if (!(r[r.length - 1] || "![CDATA[" === u.slice(0, 8)) && (u === i || o && u.replace(/^{\s+/, "{").replace(/\s+}$/, "}")) && (l ? --a : ++a), n += r[0], a <= 0) break;
                            r = this.__patterns.xml.read_match()
                        }
                        return r || (n += this._input.match(/[\s\S]*/g)[0]), n = n.replace(s.allLineBreaks, "\n"), this._create_token(p.STRING, n)
                    }
                }
                return null
            }, k.prototype._read_string_recursive = function (e, t, n) {
                var r, i;
                "'" === e ? i = this.__patterns.single_quote : '"' === e ? i = this.__patterns.double_quote : "`" === e ? i = this.__patterns.template_text : "}" === e && (i = this.__patterns.template_expression);
                for (var o = i.read(), a = ""; this._input.hasNext();) {
                    if ((a = this._input.next()) === e || !t && s.newline.test(a)) {
                        this._input.back();
                        break
                    }
                    "\\" === a && this._input.hasNext() ? ("x" === (r = this._input.peek()) || "u" === r ? this.has_char_escapes = !0 : "\r" === r && "\n" === this._input.peek(1) && this._input.next(), a += this._input.next()) : n && ("${" === n && "$" === a && "{" === this._input.peek() && (a += this._input.next()), n === a && (a += "`" === e ? this._read_string_recursive("}", t, "`") : this._read_string_recursive("`", t, "${"), this._input.hasNext() && (a += this._input.next()))), o += a += i.read()
                }
                return o
            }, e.exports.Tokenizer = k, e.exports.TOKEN = p, e.exports.positionable_operators = m.slice(), e.exports.line_starters = b.slice()
        }, function (e, t, n) {
            "use strict";
            var r = RegExp.prototype.hasOwnProperty("sticky");

            function i(e) {
                this.__input = e || "", this.__input_length = this.__input.length, this.__position = 0
            }

            i.prototype.restart = function () {
                this.__position = 0
            }, i.prototype.back = function () {
                0 < this.__position && (this.__position -= 1)
            }, i.prototype.hasNext = function () {
                return this.__position < this.__input_length
            }, i.prototype.next = function () {
                var e = null;
                return this.hasNext() && (e = this.__input.charAt(this.__position), this.__position += 1), e
            }, i.prototype.peek = function (e) {
                var t = null;
                return e = e || 0, 0 <= (e += this.__position) && e < this.__input_length && (t = this.__input.charAt(e)), t
            }, i.prototype.__match = function (e, t) {
                e.lastIndex = t;
                var n = e.exec(this.__input);
                return !n || r && e.sticky || n.index !== t && (n = null), n
            }, i.prototype.test = function (e, t) {
                return t = t || 0, 0 <= (t += this.__position) && t < this.__input_length && !!this.__match(e, t)
            }, i.prototype.testChar = function (e, t) {
                var n = this.peek(t);
                return e.lastIndex = 0, null !== n && e.test(n)
            }, i.prototype.match = function (e) {
                var t = this.__match(e, this.__position);
                return t ? this.__position += t[0].length : t = null, t
            }, i.prototype.read = function (e, t, n) {
                var r, i = "";
                return e && (r = this.match(e)) && (i += r[0]), !t || !r && e || (i += this.readUntil(t, n)), i
            }, i.prototype.readUntil = function (e, t) {
                var n, r = this.__position;
                e.lastIndex = this.__position;
                var i = e.exec(this.__input);
                return i ? (r = i.index, t && (r += i[0].length)) : r = this.__input_length, n = this.__input.substring(this.__position, r), this.__position = r, n
            }, i.prototype.readUntilAfter = function (e) {
                return this.readUntil(e, !0)
            }, i.prototype.get_regexp = function (e, t) {
                var n = null, i = "g";
                return t && r && (i = "y"), "string" == typeof e && "" !== e ? n = new RegExp(e, i) : e && (n = new RegExp(e.source, i)), n
            }, i.prototype.get_literal_regexp = function (e) {
                return RegExp(e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"))
            }, i.prototype.peekUntilAfter = function (e) {
                var t = this.__position, n = this.readUntilAfter(e);
                return this.__position = t, n
            }, i.prototype.lookBack = function (e) {
                var t = this.__position - 1;
                return t >= e.length && this.__input.substring(t - e.length, t).toLowerCase() === e
            }, e.exports.InputScanner = i
        }, function (e, t, n) {
            "use strict";
            var r = n(8).InputScanner, i = n(3).Token, o = n(10).TokenStream, a = n(11).WhitespacePattern,
                s = {START: "TK_START", RAW: "TK_RAW", EOF: "TK_EOF"}, l = function (e, t) {
                    this._input = new r(e), this._options = t || {}, this.__tokens = null, this._patterns = {}, this._patterns.whitespace = new a(this._input)
                };
            l.prototype.tokenize = function () {
                var e;
                this._input.restart(), this.__tokens = new o, this._reset();
                for (var t = new i(s.START, ""), n = null, r = [], a = new o; t.type !== s.EOF;) {
                    for (e = this._get_next_token(t, n); this._is_comment(e);) a.add(e), e = this._get_next_token(t, n);
                    a.isEmpty() || (e.comments_before = a, a = new o), e.parent = n, this._is_opening(e) ? (r.push(n), n = e) : n && this._is_closing(e, n) && ((e.opened = n).closed = e, n = r.pop(), e.parent = n), (e.previous = t).next = e, this.__tokens.add(e), t = e
                }
                return this.__tokens
            }, l.prototype._is_first_token = function () {
                return this.__tokens.isEmpty()
            }, l.prototype._reset = function () {
            }, l.prototype._get_next_token = function (e, t) {
                this._readWhitespace();
                var n = this._input.read(/.+/g);
                return n ? this._create_token(s.RAW, n) : this._create_token(s.EOF, "")
            }, l.prototype._is_comment = function (e) {
                return !1
            }, l.prototype._is_opening = function (e) {
                return !1
            }, l.prototype._is_closing = function (e, t) {
                return !1
            }, l.prototype._create_token = function (e, t) {
                return new i(e, t, this._patterns.whitespace.newline_count, this._patterns.whitespace.whitespace_before_token)
            }, l.prototype._readWhitespace = function () {
                return this._patterns.whitespace.read()
            }, e.exports.Tokenizer = l, e.exports.TOKEN = s
        }, function (e, t, n) {
            "use strict";

            function r(e) {
                this.__tokens = [], this.__tokens_length = this.__tokens.length, this.__position = 0, this.__parent_token = e
            }

            r.prototype.restart = function () {
                this.__position = 0
            }, r.prototype.isEmpty = function () {
                return 0 === this.__tokens_length
            }, r.prototype.hasNext = function () {
                return this.__position < this.__tokens_length
            }, r.prototype.next = function () {
                var e = null;
                return this.hasNext() && (e = this.__tokens[this.__position], this.__position += 1), e
            }, r.prototype.peek = function (e) {
                var t = null;
                return e = e || 0, 0 <= (e += this.__position) && e < this.__tokens_length && (t = this.__tokens[e]), t
            }, r.prototype.add = function (e) {
                this.__parent_token && (e.parent = this.__parent_token), this.__tokens.push(e), this.__tokens_length += 1
            }, e.exports.TokenStream = r
        }, function (e, t, n) {
            "use strict";
            var r = n(12).Pattern;

            function i(e, t) {
                r.call(this, e, t), t ? this._line_regexp = this._input.get_regexp(t._line_regexp) : this.__set_whitespace_patterns("", ""), this.newline_count = 0, this.whitespace_before_token = ""
            }

            (i.prototype = new r).__set_whitespace_patterns = function (e, t) {
                e += "\\t ", t += "\\n\\r", this._match_pattern = this._input.get_regexp("[" + e + t + "]+", !0), this._newline_regexp = this._input.get_regexp("\\r\\n|[" + t + "]")
            }, i.prototype.read = function () {
                this.newline_count = 0, this.whitespace_before_token = "";
                var e = this._input.read(this._match_pattern);
                if (" " === e) this.whitespace_before_token = " "; else if (e) {
                    var t = this.__split(this._newline_regexp, e);
                    this.newline_count = t.length - 1, this.whitespace_before_token = t[this.newline_count]
                }
                return e
            }, i.prototype.matching = function (e, t) {
                var n = this._create();
                return n.__set_whitespace_patterns(e, t), n._update(), n
            }, i.prototype._create = function () {
                return new i(this._input, this)
            }, i.prototype.__split = function (e, t) {
                for (var n = e.lastIndex = 0, r = [], i = e.exec(t); i;) r.push(t.substring(n, i.index)), n = i.index + i[0].length, i = e.exec(t);
                return n < t.length ? r.push(t.substring(n, t.length)) : r.push(""), r
            }, e.exports.WhitespacePattern = i
        }, function (e, t, n) {
            "use strict";

            function r(e, t) {
                this._input = e, this._starting_pattern = null, this._match_pattern = null, this._until_pattern = null, this._until_after = !1, t && (this._starting_pattern = this._input.get_regexp(t._starting_pattern, !0), this._match_pattern = this._input.get_regexp(t._match_pattern, !0), this._until_pattern = this._input.get_regexp(t._until_pattern), this._until_after = t._until_after)
            }

            r.prototype.read = function () {
                var e = this._input.read(this._starting_pattern);
                return this._starting_pattern && !e || (e += this._input.read(this._match_pattern, this._until_pattern, this._until_after)), e
            }, r.prototype.read_match = function () {
                return this._input.match(this._match_pattern)
            }, r.prototype.until_after = function (e) {
                var t = this._create();
                return t._until_after = !0, t._until_pattern = this._input.get_regexp(e), t._update(), t
            }, r.prototype.until = function (e) {
                var t = this._create();
                return t._until_after = !1, t._until_pattern = this._input.get_regexp(e), t._update(), t
            }, r.prototype.starting_with = function (e) {
                var t = this._create();
                return t._starting_pattern = this._input.get_regexp(e, !0), t._update(), t
            }, r.prototype.matching = function (e) {
                var t = this._create();
                return t._match_pattern = this._input.get_regexp(e, !0), t._update(), t
            }, r.prototype._create = function () {
                return new r(this._input, this)
            }, r.prototype._update = function () {
            }, e.exports.Pattern = r
        }, function (e, t, n) {
            "use strict";

            function r(e, t) {
                e = "string" == typeof e ? e : e.source, t = "string" == typeof t ? t : t.source, this.__directives_block_pattern = new RegExp(e + / beautify( \w+[:]\w+)+ /.source + t, "g"), this.__directive_pattern = / (\w+)[:](\w+)/g, this.__directives_end_ignore_pattern = new RegExp(e + /\sbeautify\signore:end\s/.source + t, "g")
            }

            r.prototype.get_directives = function (e) {
                if (!e.match(this.__directives_block_pattern)) return null;
                var t = {};
                this.__directive_pattern.lastIndex = 0;
                for (var n = this.__directive_pattern.exec(e); n;) t[n[1]] = n[2], n = this.__directive_pattern.exec(e);
                return t
            }, r.prototype.readIgnored = function (e) {
                return e.readUntilAfter(this.__directives_end_ignore_pattern)
            }, e.exports.Directives = r
        }, function (e, t, n) {
            "use strict";
            var r = n(12).Pattern, i = {django: !1, erb: !1, handlebars: !1, php: !1};

            function o(e, t) {
                r.call(this, e, t), this.__template_pattern = null, this._disabled = Object.assign({}, i), this._excluded = Object.assign({}, i), t && (this.__template_pattern = this._input.get_regexp(t.__template_pattern), this._excluded = Object.assign(this._excluded, t._excluded), this._disabled = Object.assign(this._disabled, t._disabled));
                var n = new r(e);
                this.__patterns = {
                    handlebars_comment: n.starting_with(/{{!--/).until_after(/--}}/),
                    handlebars_unescaped: n.starting_with(/{{{/).until_after(/}}}/),
                    handlebars: n.starting_with(/{{/).until_after(/}}/),
                    php: n.starting_with(/<\?(?:[=]|php)/).until_after(/\?>/),
                    erb: n.starting_with(/<%[^%]/).until_after(/[^%]%>/),
                    django: n.starting_with(/{%/).until_after(/%}/),
                    django_value: n.starting_with(/{{/).until_after(/}}/),
                    django_comment: n.starting_with(/{#/).until_after(/#}/)
                }
            }

            (o.prototype = new r)._create = function () {
                return new o(this._input, this)
            }, o.prototype._update = function () {
                this.__set_templated_pattern()
            }, o.prototype.disable = function (e) {
                var t = this._create();
                return t._disabled[e] = !0, t._update(), t
            }, o.prototype.read_options = function (e) {
                var t = this._create();
                for (var n in i) t._disabled[n] = -1 === e.templating.indexOf(n);
                return t._update(), t
            }, o.prototype.exclude = function (e) {
                var t = this._create();
                return t._excluded[e] = !0, t._update(), t
            }, o.prototype.read = function () {
                var e = "";
                e = this._match_pattern ? this._input.read(this._starting_pattern) : this._input.read(this._starting_pattern, this.__template_pattern);
                for (var t = this._read_template(); t;) this._match_pattern ? t += this._input.read(this._match_pattern) : t += this._input.readUntil(this.__template_pattern), e += t, t = this._read_template();
                return this._until_after && (e += this._input.readUntilAfter(this._until_pattern)), e
            }, o.prototype.__set_templated_pattern = function () {
                var e = [];
                this._disabled.php || e.push(this.__patterns.php._starting_pattern.source), this._disabled.handlebars || e.push(this.__patterns.handlebars._starting_pattern.source), this._disabled.erb || e.push(this.__patterns.erb._starting_pattern.source), this._disabled.django || (e.push(this.__patterns.django._starting_pattern.source), e.push(this.__patterns.django_value._starting_pattern.source), e.push(this.__patterns.django_comment._starting_pattern.source)), this._until_pattern && e.push(this._until_pattern.source), this.__template_pattern = this._input.get_regexp("(?:" + e.join("|") + ")")
            }, o.prototype._read_template = function () {
                var e = "", t = this._input.peek();
                if ("<" === t) {
                    var n = this._input.peek(1);
                    this._disabled.php || this._excluded.php || "?" !== n || (e = e || this.__patterns.php.read()), this._disabled.erb || this._excluded.erb || "%" !== n || (e = e || this.__patterns.erb.read())
                } else "{" === t && (this._disabled.handlebars || this._excluded.handlebars || (e = (e = (e = e || this.__patterns.handlebars_comment.read()) || this.__patterns.handlebars_unescaped.read()) || this.__patterns.handlebars.read()), this._disabled.django || (this._excluded.django || this._excluded.handlebars || (e = e || this.__patterns.django_value.read()), this._excluded.django || (e = (e = e || this.__patterns.django_comment.read()) || this.__patterns.django.read())));
                return e
            }, e.exports.TemplatablePattern = o
        }]), void 0 === (r = function () {
            return {js_beautify: i}
        }.apply(t, [])) || (e.exports = r)
    }, function (e, t, n) {
        var r, i;

        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        i = function (e) {
            var t = {};

            function n(r) {
                if (t[r]) return t[r].exports;
                var i = t[r] = {i: r, l: !1, exports: {}};
                return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
            }

            return n.m = e, n.c = t, n.d = function (e, t, r) {
                n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
            }, n.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
            }, n.t = function (e, t) {
                if (1 & t && (e = n(e)), 8 & t) return e;
                if (4 & t && "object" === o(e) && e && e.__esModule) return e;
                var r = Object.create(null);
                if (n.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e) for (var i in e) n.d(r, i, function (t) {
                    return e[t]
                }.bind(null, i));
                return r
            }, n.n = function (e) {
                var t = e && e.__esModule ? function () {
                    return e.default
                } : function () {
                    return e
                };
                return n.d(t, "a", t), t
            }, n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, n.p = "", n(n.s = 15)
        }([, , function (e, t, n) {
            "use strict";

            function r(e) {
                this.__parent = e, this.__character_count = 0, this.__indent_count = -1, this.__alignment_count = 0, this.__wrap_point_index = 0, this.__wrap_point_character_count = 0, this.__wrap_point_indent_count = -1, this.__wrap_point_alignment_count = 0, this.__items = []
            }

            function i(e, t) {
                this.__cache = [""], this.__indent_size = e.indent_size, this.__indent_string = e.indent_char, e.indent_with_tabs || (this.__indent_string = new Array(e.indent_size + 1).join(e.indent_char)), t = t || "", 0 < e.indent_level && (t = new Array(e.indent_level + 1).join(this.__indent_string)), this.__base_string = t, this.__base_string_length = t.length
            }

            function o(e, t) {
                this.__indent_cache = new i(e, t), this.raw = !1, this._end_with_newline = e.end_with_newline, this.indent_size = e.indent_size, this.wrap_line_length = e.wrap_line_length, this.indent_empty_lines = e.indent_empty_lines, this.__lines = [], this.previous_line = null, this.current_line = null, this.next_line = new r(this), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = !1, this.__add_outputline()
            }

            r.prototype.clone_empty = function () {
                var e = new r(this.__parent);
                return e.set_indent(this.__indent_count, this.__alignment_count), e
            }, r.prototype.item = function (e) {
                return e < 0 ? this.__items[this.__items.length + e] : this.__items[e]
            }, r.prototype.has_match = function (e) {
                for (var t = this.__items.length - 1; 0 <= t; t--) if (this.__items[t].match(e)) return !0;
                return !1
            }, r.prototype.set_indent = function (e, t) {
                this.is_empty() && (this.__indent_count = e || 0, this.__alignment_count = t || 0, this.__character_count = this.__parent.get_indent_size(this.__indent_count, this.__alignment_count))
            }, r.prototype._set_wrap_point = function () {
                this.__parent.wrap_line_length && (this.__wrap_point_index = this.__items.length, this.__wrap_point_character_count = this.__character_count, this.__wrap_point_indent_count = this.__parent.next_line.__indent_count, this.__wrap_point_alignment_count = this.__parent.next_line.__alignment_count)
            }, r.prototype._should_wrap = function () {
                return this.__wrap_point_index && this.__character_count > this.__parent.wrap_line_length && this.__wrap_point_character_count > this.__parent.next_line.__character_count
            }, r.prototype._allow_wrap = function () {
                if (this._should_wrap()) {
                    this.__parent.add_new_line();
                    var e = this.__parent.current_line;
                    return e.set_indent(this.__wrap_point_indent_count, this.__wrap_point_alignment_count), e.__items = this.__items.slice(this.__wrap_point_index), this.__items = this.__items.slice(0, this.__wrap_point_index), e.__character_count += this.__character_count - this.__wrap_point_character_count, this.__character_count = this.__wrap_point_character_count, " " === e.__items[0] && (e.__items.splice(0, 1), e.__character_count -= 1), !0
                }
                return !1
            }, r.prototype.is_empty = function () {
                return 0 === this.__items.length
            }, r.prototype.last = function () {
                return this.is_empty() ? null : this.__items[this.__items.length - 1]
            }, r.prototype.push = function (e) {
                this.__items.push(e);
                var t = e.lastIndexOf("\n");
                -1 !== t ? this.__character_count = e.length - t : this.__character_count += e.length
            }, r.prototype.pop = function () {
                var e = null;
                return this.is_empty() || (e = this.__items.pop(), this.__character_count -= e.length), e
            }, r.prototype._remove_indent = function () {
                0 < this.__indent_count && (this.__indent_count -= 1, this.__character_count -= this.__parent.indent_size)
            }, r.prototype._remove_wrap_indent = function () {
                0 < this.__wrap_point_indent_count && (this.__wrap_point_indent_count -= 1)
            }, r.prototype.trim = function () {
                for (; " " === this.last();) this.__items.pop(), this.__character_count -= 1
            }, r.prototype.toString = function () {
                var e = "";
                return this.is_empty() ? this.__parent.indent_empty_lines && (e = this.__parent.get_indent_string(this.__indent_count)) : (e = this.__parent.get_indent_string(this.__indent_count, this.__alignment_count), e += this.__items.join("")), e
            }, i.prototype.get_indent_size = function (e, t) {
                var n = this.__base_string_length;
                return t = t || 0, e < 0 && (n = 0), (n += e * this.__indent_size) + t
            }, i.prototype.get_indent_string = function (e, t) {
                var n = this.__base_string;
                return t = t || 0, e < 0 && (e = 0, n = ""), t += e * this.__indent_size, this.__ensure_cache(t), n + this.__cache[t]
            }, i.prototype.__ensure_cache = function (e) {
                for (; e >= this.__cache.length;) this.__add_column()
            }, i.prototype.__add_column = function () {
                var e = this.__cache.length, t = 0, n = "";
                this.__indent_size && e >= this.__indent_size && (e -= (t = Math.floor(e / this.__indent_size)) * this.__indent_size, n = new Array(t + 1).join(this.__indent_string)), e && (n += new Array(e + 1).join(" ")), this.__cache.push(n)
            }, o.prototype.__add_outputline = function () {
                this.previous_line = this.current_line, this.current_line = this.next_line.clone_empty(), this.__lines.push(this.current_line)
            }, o.prototype.get_line_number = function () {
                return this.__lines.length
            }, o.prototype.get_indent_string = function (e, t) {
                return this.__indent_cache.get_indent_string(e, t)
            }, o.prototype.get_indent_size = function (e, t) {
                return this.__indent_cache.get_indent_size(e, t)
            }, o.prototype.is_empty = function () {
                return !this.previous_line && this.current_line.is_empty()
            }, o.prototype.add_new_line = function (e) {
                return !(this.is_empty() || !e && this.just_added_newline() || (this.raw || this.__add_outputline(), 0))
            }, o.prototype.get_code = function (e) {
                this.trim(!0);
                var t = this.current_line.pop();
                t && ("\n" === t[t.length - 1] && (t = t.replace(/\n+$/g, "")), this.current_line.push(t)), this._end_with_newline && this.__add_outputline();
                var n = this.__lines.join("\n");
                return "\n" !== e && (n = n.replace(/[\n]/g, e)), n
            }, o.prototype.set_wrap_point = function () {
                this.current_line._set_wrap_point()
            }, o.prototype.set_indent = function (e, t) {
                return e = e || 0, t = t || 0, this.next_line.set_indent(e, t), 1 < this.__lines.length ? (this.current_line.set_indent(e, t), !0) : (this.current_line.set_indent(), !1)
            }, o.prototype.add_raw_token = function (e) {
                for (var t = 0; t < e.newlines; t++) this.__add_outputline();
                this.current_line.set_indent(-1), this.current_line.push(e.whitespace_before), this.current_line.push(e.text), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = !1
            }, o.prototype.add_token = function (e) {
                this.__add_space_before_token(), this.current_line.push(e), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = this.current_line._allow_wrap()
            }, o.prototype.__add_space_before_token = function () {
                this.space_before_token && !this.just_added_newline() && (this.non_breaking_space || this.set_wrap_point(), this.current_line.push(" "))
            }, o.prototype.remove_indent = function (e) {
                for (var t = this.__lines.length; e < t;) this.__lines[e]._remove_indent(), e++;
                this.current_line._remove_wrap_indent()
            }, o.prototype.trim = function (e) {
                for (e = void 0 !== e && e, this.current_line.trim(); e && 1 < this.__lines.length && this.current_line.is_empty();) this.__lines.pop(), this.current_line = this.__lines[this.__lines.length - 1], this.current_line.trim();
                this.previous_line = 1 < this.__lines.length ? this.__lines[this.__lines.length - 2] : null
            }, o.prototype.just_added_newline = function () {
                return this.current_line.is_empty()
            }, o.prototype.just_added_blankline = function () {
                return this.is_empty() || this.current_line.is_empty() && this.previous_line.is_empty()
            }, o.prototype.ensure_empty_line_above = function (e, t) {
                for (var n = this.__lines.length - 2; 0 <= n;) {
                    var i = this.__lines[n];
                    if (i.is_empty()) break;
                    if (0 !== i.item(0).indexOf(e) && i.item(-1) !== t) {
                        this.__lines.splice(n + 1, 0, new r(this)), this.previous_line = this.__lines[this.__lines.length - 2];
                        break
                    }
                    n--
                }
            }, e.exports.Output = o
        }, , , , function (e, t, n) {
            "use strict";

            function r(e, t) {
                this.raw_options = i(e, t), this.disabled = this._get_boolean("disabled"), this.eol = this._get_characters("eol", "auto"), this.end_with_newline = this._get_boolean("end_with_newline"), this.indent_size = this._get_number("indent_size", 4), this.indent_char = this._get_characters("indent_char", " "), this.indent_level = this._get_number("indent_level"), this.preserve_newlines = this._get_boolean("preserve_newlines", !0), this.max_preserve_newlines = this._get_number("max_preserve_newlines", 32786), this.preserve_newlines || (this.max_preserve_newlines = 0), this.indent_with_tabs = this._get_boolean("indent_with_tabs", "\t" === this.indent_char), this.indent_with_tabs && (this.indent_char = "\t", 1 === this.indent_size && (this.indent_size = 4)), this.wrap_line_length = this._get_number("wrap_line_length", this._get_number("max_char")), this.indent_empty_lines = this._get_boolean("indent_empty_lines"), this.templating = this._get_selection_list("templating", ["auto", "none", "django", "erb", "handlebars", "php"], ["auto"])
            }

            function i(e, t) {
                var n, r = {};
                for (n in e = a(e)) n !== t && (r[n] = e[n]);
                if (t && e[t]) for (n in e[t]) r[n] = e[t][n];
                return r
            }

            function a(e) {
                var t, n = {};
                for (t in e) n[t.replace(/-/g, "_")] = e[t];
                return n
            }

            r.prototype._get_array = function (e, t) {
                var n = this.raw_options[e], r = t || [];
                return "object" === o(n) ? null !== n && "function" == typeof n.concat && (r = n.concat()) : "string" == typeof n && (r = n.split(/[^a-zA-Z0-9_\/\-]+/)), r
            }, r.prototype._get_boolean = function (e, t) {
                var n = this.raw_options[e];
                return void 0 === n ? !!t : !!n
            }, r.prototype._get_characters = function (e, t) {
                var n = this.raw_options[e], r = t || "";
                return "string" == typeof n && (r = n.replace(/\\r/, "\r").replace(/\\n/, "\n").replace(/\\t/, "\t")), r
            }, r.prototype._get_number = function (e, t) {
                var n = this.raw_options[e];
                t = parseInt(t, 10), isNaN(t) && (t = 0);
                var r = parseInt(n, 10);
                return isNaN(r) && (r = t), r
            }, r.prototype._get_selection = function (e, t, n) {
                var r = this._get_selection_list(e, t, n);
                if (1 !== r.length) throw new Error("Invalid Option Value: The option '" + e + "' can only be one of the following values:\n" + t + "\nYou passed in: '" + this.raw_options[e] + "'");
                return r[0]
            }, r.prototype._get_selection_list = function (e, t, n) {
                if (!t || 0 === t.length) throw new Error("Selection list cannot be empty.");
                if (n = n || [t[0]], !this._is_valid_selection(n, t)) throw new Error("Invalid Default Value!");
                var r = this._get_array(e, n);
                if (!this._is_valid_selection(r, t)) throw new Error("Invalid Option Value: The option '" + e + "' can contain only the following values:\n" + t + "\nYou passed in: '" + this.raw_options[e] + "'");
                return r
            }, r.prototype._is_valid_selection = function (e, t) {
                return e.length && t.length && !e.some(function (e) {
                    return -1 === t.indexOf(e)
                })
            }, e.exports.Options = r, e.exports.normalizeOpts = a, e.exports.mergeOpts = i
        }, , function (e, t, n) {
            "use strict";
            var r = RegExp.prototype.hasOwnProperty("sticky");

            function i(e) {
                this.__input = e || "", this.__input_length = this.__input.length, this.__position = 0
            }

            i.prototype.restart = function () {
                this.__position = 0
            }, i.prototype.back = function () {
                0 < this.__position && (this.__position -= 1)
            }, i.prototype.hasNext = function () {
                return this.__position < this.__input_length
            }, i.prototype.next = function () {
                var e = null;
                return this.hasNext() && (e = this.__input.charAt(this.__position), this.__position += 1), e
            }, i.prototype.peek = function (e) {
                var t = null;
                return e = e || 0, 0 <= (e += this.__position) && e < this.__input_length && (t = this.__input.charAt(e)), t
            }, i.prototype.__match = function (e, t) {
                e.lastIndex = t;
                var n = e.exec(this.__input);
                return !n || r && e.sticky || n.index !== t && (n = null), n
            }, i.prototype.test = function (e, t) {
                return t = t || 0, 0 <= (t += this.__position) && t < this.__input_length && !!this.__match(e, t)
            }, i.prototype.testChar = function (e, t) {
                var n = this.peek(t);
                return e.lastIndex = 0, null !== n && e.test(n)
            }, i.prototype.match = function (e) {
                var t = this.__match(e, this.__position);
                return t ? this.__position += t[0].length : t = null, t
            }, i.prototype.read = function (e, t, n) {
                var r, i = "";
                return e && (r = this.match(e)) && (i += r[0]), !t || !r && e || (i += this.readUntil(t, n)), i
            }, i.prototype.readUntil = function (e, t) {
                var n, r = this.__position;
                e.lastIndex = this.__position;
                var i = e.exec(this.__input);
                return i ? (r = i.index, t && (r += i[0].length)) : r = this.__input_length, n = this.__input.substring(this.__position, r), this.__position = r, n
            }, i.prototype.readUntilAfter = function (e) {
                return this.readUntil(e, !0)
            }, i.prototype.get_regexp = function (e, t) {
                var n = null, i = "g";
                return t && r && (i = "y"), "string" == typeof e && "" !== e ? n = new RegExp(e, i) : e && (n = new RegExp(e.source, i)), n
            }, i.prototype.get_literal_regexp = function (e) {
                return RegExp(e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"))
            }, i.prototype.peekUntilAfter = function (e) {
                var t = this.__position, n = this.readUntilAfter(e);
                return this.__position = t, n
            }, i.prototype.lookBack = function (e) {
                var t = this.__position - 1;
                return t >= e.length && this.__input.substring(t - e.length, t).toLowerCase() === e
            }, e.exports.InputScanner = i
        }, , , , , function (e, t, n) {
            "use strict";

            function r(e, t) {
                e = "string" == typeof e ? e : e.source, t = "string" == typeof t ? t : t.source, this.__directives_block_pattern = new RegExp(e + / beautify( \w+[:]\w+)+ /.source + t, "g"), this.__directive_pattern = / (\w+)[:](\w+)/g, this.__directives_end_ignore_pattern = new RegExp(e + /\sbeautify\signore:end\s/.source + t, "g")
            }

            r.prototype.get_directives = function (e) {
                if (!e.match(this.__directives_block_pattern)) return null;
                var t = {};
                this.__directive_pattern.lastIndex = 0;
                for (var n = this.__directive_pattern.exec(e); n;) t[n[1]] = n[2], n = this.__directive_pattern.exec(e);
                return t
            }, r.prototype.readIgnored = function (e) {
                return e.readUntilAfter(this.__directives_end_ignore_pattern)
            }, e.exports.Directives = r
        }, , function (e, t, n) {
            "use strict";
            var r = n(16).Beautifier, i = n(17).Options;
            e.exports = function (e, t) {
                return new r(e, t).beautify()
            }, e.exports.defaultOptions = function () {
                return new i
            }
        }, function (e, t, n) {
            "use strict";
            var r = n(17).Options, i = n(2).Output, o = n(8).InputScanner, a = new (n(13).Directives)(/\/\*/, /\*\//),
                s = /\r\n|[\r\n]/, l = /\r\n|[\r\n]/g, u = /\s/, c = /(?:\s|\n)+/g, p = /\/\*(?:[\s\S]*?)((?:\*\/)|$)/g,
                d = /\/\/(?:[^\n\r\u2028\u2029]*)/g;

            function f(e, t) {
                this._source_text = e || "", this._options = new r(t), this._ch = null, this._input = null, this.NESTED_AT_RULE = {
                    "@page": !0,
                    "@font-face": !0,
                    "@keyframes": !0,
                    "@media": !0,
                    "@supports": !0,
                    "@document": !0
                }, this.CONDITIONAL_GROUP_RULE = {"@media": !0, "@supports": !0, "@document": !0}
            }

            f.prototype.eatString = function (e) {
                var t = "";
                for (this._ch = this._input.next(); this._ch;) {
                    if (t += this._ch, "\\" === this._ch) t += this._input.next(); else if (-1 !== e.indexOf(this._ch) || "\n" === this._ch) break;
                    this._ch = this._input.next()
                }
                return t
            }, f.prototype.eatWhitespace = function (e) {
                for (var t = u.test(this._input.peek()), n = !0; u.test(this._input.peek());) this._ch = this._input.next(), e && "\n" === this._ch && (this._options.preserve_newlines || n) && (n = !1, this._output.add_new_line(!0));
                return t
            }, f.prototype.foundNestedPseudoClass = function () {
                for (var e = 0, t = 1, n = this._input.peek(t); n;) {
                    if ("{" === n) return !0;
                    if ("(" === n) e += 1; else if (")" === n) {
                        if (0 === e) return !1;
                        e -= 1
                    } else if (";" === n || "}" === n) return !1;
                    t++, n = this._input.peek(t)
                }
                return !1
            }, f.prototype.print_string = function (e) {
                this._output.set_indent(this._indentLevel), this._output.non_breaking_space = !0, this._output.add_token(e)
            }, f.prototype.preserveSingleSpace = function (e) {
                e && (this._output.space_before_token = !0)
            }, f.prototype.indent = function () {
                this._indentLevel++
            }, f.prototype.outdent = function () {
                0 < this._indentLevel && this._indentLevel--
            }, f.prototype.beautify = function () {
                if (this._options.disabled) return this._source_text;
                var e = this._source_text, t = this._options.eol;
                "auto" === t && (t = "\n", e && s.test(e || "") && (t = e.match(s)[0]));
                var n = (e = e.replace(l, "\n")).match(/^[\t ]*/)[0];
                this._output = new i(this._options, n), this._input = new o(e), this._indentLevel = 0, this._nestedLevel = 0, this._ch = null;
                for (var r, f, h = 0, _ = !1, m = !1, g = !1, v = !1, y = !1, b = this._ch; r = "" !== this._input.read(c), f = b, this._ch = this._input.next(), "\\" === this._ch && this._input.hasNext() && (this._ch += this._input.next()), b = this._ch, this._ch;) if ("/" === this._ch && "*" === this._input.peek()) {
                    this._output.add_new_line(), this._input.back();
                    var w = this._input.read(p), x = a.get_directives(w);
                    x && "start" === x.ignore && (w += a.readIgnored(this._input)), this.print_string(w), this.eatWhitespace(!0), this._output.add_new_line()
                } else if ("/" === this._ch && "/" === this._input.peek()) this._output.space_before_token = !0, this._input.back(), this.print_string(this._input.read(d)), this.eatWhitespace(!0); else if ("@" === this._ch) if (this.preserveSingleSpace(r), "{" === this._input.peek()) this.print_string(this._ch + this.eatString("}")); else {
                    this.print_string(this._ch);
                    var k = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);
                    k.match(/[ :]$/) && (k = this.eatString(": ").replace(/\s$/, ""), this.print_string(k), this._output.space_before_token = !0), "extend" === (k = k.replace(/\s$/, "")) ? v = !0 : "import" === k && (y = !0), k in this.NESTED_AT_RULE ? (this._nestedLevel += 1, k in this.CONDITIONAL_GROUP_RULE && (g = !0)) : _ || 0 !== h || -1 === k.indexOf(":") || (m = !0, this.indent())
                } else "#" === this._ch && "{" === this._input.peek() ? (this.preserveSingleSpace(r), this.print_string(this._ch + this.eatString("}"))) : "{" === this._ch ? (m && (m = !1, this.outdent()), this.indent(), this._output.space_before_token = !0, this.print_string(this._ch), _ = g ? (g = !1, this._indentLevel > this._nestedLevel) : this._indentLevel >= this._nestedLevel, this._options.newline_between_rules && _ && this._output.previous_line && "{" !== this._output.previous_line.item(-1) && this._output.ensure_empty_line_above("/", ","), this.eatWhitespace(!0), this._output.add_new_line()) : "}" === this._ch ? (this.outdent(), this._output.add_new_line(), "{" === f && this._output.trim(!0), v = y = !1, m && (this.outdent(), m = !1), this.print_string(this._ch), _ = !1, this._nestedLevel && this._nestedLevel--, this.eatWhitespace(!0), this._output.add_new_line(), this._options.newline_between_rules && !this._output.just_added_blankline() && "}" !== this._input.peek() && this._output.add_new_line(!0)) : ":" === this._ch ? !_ && !g || this._input.lookBack("&") || this.foundNestedPseudoClass() || this._input.lookBack("(") || v || 0 !== h ? (this._input.lookBack(" ") && (this._output.space_before_token = !0), ":" === this._input.peek() ? (this._ch = this._input.next(), this.print_string("::")) : this.print_string(":")) : (this.print_string(":"), m || (m = !0, this._output.space_before_token = !0, this.eatWhitespace(!0), this.indent())) : '"' === this._ch || "'" === this._ch ? (this.preserveSingleSpace(r), this.print_string(this._ch + this.eatString(this._ch)), this.eatWhitespace(!0)) : ";" === this._ch ? 0 === h ? (m && (this.outdent(), m = !1), y = v = !1, this.print_string(this._ch), this.eatWhitespace(!0), "/" !== this._input.peek() && this._output.add_new_line()) : (this.print_string(this._ch), this.eatWhitespace(!0), this._output.space_before_token = !0) : "(" === this._ch ? this._input.lookBack("url") ? (this.print_string(this._ch), this.eatWhitespace(), h++, this.indent(), this._ch = this._input.next(), ")" === this._ch || '"' === this._ch || "'" === this._ch ? this._input.back() : this._ch && (this.print_string(this._ch + this.eatString(")")), h && (h--, this.outdent()))) : (this.preserveSingleSpace(r), this.print_string(this._ch), this.eatWhitespace(), h++, this.indent()) : ")" === this._ch ? (h && (h--, this.outdent()), this.print_string(this._ch)) : "," === this._ch ? (this.print_string(this._ch), this.eatWhitespace(!0), !this._options.selector_separator_newline || m || 0 !== h || y ? this._output.space_before_token = !0 : this._output.add_new_line()) : ">" !== this._ch && "+" !== this._ch && "~" !== this._ch || m || 0 !== h ? "]" === this._ch ? this.print_string(this._ch) : "[" === this._ch ? (this.preserveSingleSpace(r), this.print_string(this._ch)) : "=" === this._ch ? (this.eatWhitespace(), this.print_string("="), u.test(this._ch) && (this._ch = "")) : ("!" !== this._ch || this._input.lookBack("\\") ? this.preserveSingleSpace(r) : this.print_string(" "), this.print_string(this._ch)) : this._options.space_around_combinator ? (this._output.space_before_token = !0, this.print_string(this._ch), this._output.space_before_token = !0) : (this.print_string(this._ch), this.eatWhitespace(), this._ch && u.test(this._ch) && (this._ch = ""));
                return this._output.get_code(t)
            }, e.exports.Beautifier = f
        }, function (e, t, n) {
            "use strict";
            var r = n(6).Options;

            function i(e) {
                r.call(this, e, "css"), this.selector_separator_newline = this._get_boolean("selector_separator_newline", !0), this.newline_between_rules = this._get_boolean("newline_between_rules", !0);
                var t = this._get_boolean("space_around_selector_separator");
                this.space_around_combinator = this._get_boolean("space_around_combinator") || t
            }

            i.prototype = new r, e.exports.Options = i
        }]), void 0 === (r = function () {
            return {css_beautify: i}
        }.apply(t, [])) || (e.exports = r)
    }, , , , , , , , , function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(217);

        function i(e) {
            e.config.validationFail = !1, 0 !== e.config.title.trim().length ? e.config.validationFail = o(e.config.html) : e.config.validationFail = !0
        }

        function o(e) {
            var t = document.createElement("div");
            for (t.innerHTML = e; 0 < t.childNodes.length;) if ((n = t.childNodes.item(0)).nodeType === Node.COMMENT_NODE) t.removeChild(n); else {
                if (t.childNodes.item(0).nodeType !== Node.TEXT_NODE) break;
                if (0 < n.textContent.trim().length) break;
                t.removeChild(n)
            }
            for (; 0 < t.childNodes.length;) {
                var n;
                if ((n = t.childNodes.item(t.childNodes.length - 1)).nodeType === Node.COMMENT_NODE) t.removeChild(n); else {
                    if (t.childNodes.item(0).nodeType !== Node.TEXT_NODE) break;
                    if (0 < n.textContent.trim().length) break;
                    t.removeChild(n)
                }
            }
            return 1 !== t.childNodes.length || t.childNodes.item(0).nodeType !== Node.ELEMENT_NODE
        }

        t.reduce = function (e, t) {
            var n;
            return t.type === r.TOGGLE_CREATE_TEMPLATE ? ((n = Object.assign({}, e)).config.doCreateTemplate = !n.config.doCreateTemplate, i(n), n) : t.type === r.CHANGE_TITLE ? ((n = Object.assign({}, e)).config.title = t.value, i(n), n) : t.type === r.CHANGE_HINT ? ((n = Object.assign({}, e)).config.hint = t.value, i(n), n) : t.type === r.CHANGE_ICON ? ((n = Object.assign({}, e)).config.icon = t.value, i(n), n) : t.type === r.CHANGE_HTML ? ((n = Object.assign({}, e)).config.html = t.value, i(n), n) : t.type === r.MAKE_PERMANENT ? ((n = Object.assign({}, e)).config.doMakePermanent = t.value, n) : e
        }, t.isHtmlCorrect = o
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.TOGGLE_CREATE_TEMPLATE = 0, t.CHANGE_TITLE = 1, t.CHANGE_HINT = 2, t.CHANGE_ICON = 3, t.CHANGE_HTML = 4, t.MAKE_PERMANENT = 5, t.toggleCreateTemplate = function () {
            return {type: t.TOGGLE_CREATE_TEMPLATE}
        }, t.changeTitle = function (e) {
            return {type: t.CHANGE_TITLE, value: e}
        }, t.changeHint = function (e) {
            return {type: t.CHANGE_HINT, value: e}
        }, t.changeIcon = function (e) {
            return {type: t.CHANGE_ICON, value: e}
        }, t.changeHtml = function (e) {
            return {type: t.CHANGE_HTML, value: e}
        }, t.makePermanent = function (e) {
            return {type: t.MAKE_PERMANENT, value: e}
        }
    }, function (e, t, n) {
        var r = n(266);
        "string" == typeof r && (r = [[e.i, r, ""]]);
        n(2)(r, {
            attrs: {"data-js": "kit"},
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        }), r.locals && (e.exports = r.locals)
    }, function (e, t, n) {
        "use strict";
        (function (e) {
            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function i() {
                return (i = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ? function (e) {
                    return r(e)
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : r(e)
                })(e)
            }

            var a, s = (a = function (e, t) {
                return (a = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                })(e, t)
            }, function (e, t) {
                function n() {
                    this.constructor = e
                }

                a(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            });
            Object.defineProperty(t, "__esModule", {value: !0});
            var l, u = n(0), c = "undefined" == typeof navigator || !0 === e.PREVENT_CODEMIRROR_RENDER;
            c || (l = n(176));
            var p = function () {
                function e() {
                }

                return e.equals = function (e, t) {
                    var n = this, r = Object.keys, i = o(e), a = o(t);
                    return e && t && "object" === i && i === a ? r(e).length === r(t).length && r(e).every(function (r) {
                        return n.equals(e[r], t[r])
                    }) : e === t
                }, e
            }(), d = function () {
                function e(e, t) {
                    this.editor = e, this.props = t
                }

                return e.prototype.delegateCursor = function (e, t, n) {
                    var r = this.editor.getDoc();
                    n && this.editor.focus(), t ? r.setCursor(e) : r.setCursor(e, null, {scroll: !1})
                }, e.prototype.delegateScroll = function (e) {
                    this.editor.scrollTo(e.x, e.y)
                }, e.prototype.delegateSelection = function (e, t) {
                    this.editor.getDoc().setSelections(e), t && this.editor.focus()
                }, e.prototype.apply = function (e) {
                    e && e.selection && e.selection.ranges && this.delegateSelection(e.selection.ranges, e.selection.focus || !1), e && e.cursor && this.delegateCursor(e.cursor, e.autoScroll || !1, this.editor.getOption("autofocus") || !1), e && e.scroll && this.delegateScroll(e.scroll)
                }, e.prototype.applyNext = function (e, t, n) {
                    e && e.selection && e.selection.ranges && t && t.selection && t.selection.ranges && !p.equals(e.selection.ranges, t.selection.ranges) && this.delegateSelection(t.selection.ranges, t.selection.focus || !1), e && e.cursor && t && t.cursor && !p.equals(e.cursor, t.cursor) && this.delegateCursor(n.cursor || t.cursor, t.autoScroll || !1, t.autoCursor || !1), e && e.scroll && t && t.scroll && !p.equals(e.scroll, t.scroll) && this.delegateScroll(t.scroll)
                }, e.prototype.applyUserDefined = function (e, t) {
                    t && t.cursor && this.delegateCursor(t.cursor, e.autoScroll || !1, this.editor.getOption("autofocus") || !1)
                }, e.prototype.wire = function (e) {
                    var t = this;
                    Object.keys(e || {}).filter(function (e) {
                        return /^on/.test(e)
                    }).forEach(function (e) {
                        switch (e) {
                            case"onBlur":
                                t.editor.on("blur", function (e, n) {
                                    t.props.onBlur(t.editor, n)
                                });
                                break;
                            case"onContextMenu":
                                t.editor.on("contextmenu", function (e, n) {
                                    t.props.onContextMenu(t.editor, n)
                                });
                                break;
                            case"onCopy":
                                t.editor.on("copy", function (e, n) {
                                    t.props.onCopy(t.editor, n)
                                });
                                break;
                            case"onCursor":
                                t.editor.on("cursorActivity", function (e) {
                                    t.props.onCursor(t.editor, t.editor.getDoc().getCursor())
                                });
                                break;
                            case"onCursorActivity":
                                t.editor.on("cursorActivity", function (e) {
                                    t.props.onCursorActivity(t.editor)
                                });
                                break;
                            case"onCut":
                                t.editor.on("cut", function (e, n) {
                                    t.props.onCut(t.editor, n)
                                });
                                break;
                            case"onDblClick":
                                t.editor.on("dblclick", function (e, n) {
                                    t.props.onDblClick(t.editor, n)
                                });
                                break;
                            case"onDragEnter":
                                t.editor.on("dragenter", function (e, n) {
                                    t.props.onDragEnter(t.editor, n)
                                });
                                break;
                            case"onDragLeave":
                                t.editor.on("dragleave", function (e, n) {
                                    t.props.onDragLeave(t.editor, n)
                                });
                                break;
                            case"onDragOver":
                                t.editor.on("dragover", function (e, n) {
                                    t.props.onDragOver(t.editor, n)
                                });
                                break;
                            case"onDragStart":
                                t.editor.on("dragstart", function (e, n) {
                                    t.props.onDragStart(t.editor, n)
                                });
                                break;
                            case"onDrop":
                                t.editor.on("drop", function (e, n) {
                                    t.props.onDrop(t.editor, n)
                                });
                                break;
                            case"onFocus":
                                t.editor.on("focus", function (e, n) {
                                    t.props.onFocus(t.editor, n)
                                });
                                break;
                            case"onGutterClick":
                                t.editor.on("gutterClick", function (e, n, r, i) {
                                    t.props.onGutterClick(t.editor, n, r, i)
                                });
                                break;
                            case"onKeyDown":
                                t.editor.on("keydown", function (e, n) {
                                    t.props.onKeyDown(t.editor, n)
                                });
                                break;
                            case"onKeyPress":
                                t.editor.on("keypress", function (e, n) {
                                    t.props.onKeyPress(t.editor, n)
                                });
                                break;
                            case"onKeyUp":
                                t.editor.on("keyup", function (e, n) {
                                    t.props.onKeyUp(t.editor, n)
                                });
                                break;
                            case"onMouseDown":
                                t.editor.on("mousedown", function (e, n) {
                                    t.props.onMouseDown(t.editor, n)
                                });
                                break;
                            case"onPaste":
                                t.editor.on("paste", function (e, n) {
                                    t.props.onPaste(t.editor, n)
                                });
                                break;
                            case"onRenderLine":
                                t.editor.on("renderLine", function (e, n, r) {
                                    t.props.onRenderLine(t.editor, n, r)
                                });
                                break;
                            case"onScroll":
                                t.editor.on("scroll", function (e) {
                                    t.props.onScroll(t.editor, t.editor.getScrollInfo())
                                });
                                break;
                            case"onSelection":
                                t.editor.on("beforeSelectionChange", function (e, n) {
                                    t.props.onSelection(t.editor, n)
                                });
                                break;
                            case"onTouchStart":
                                t.editor.on("touchstart", function (e, n) {
                                    t.props.onTouchStart(t.editor, n)
                                });
                                break;
                            case"onUpdate":
                                t.editor.on("update", function (e) {
                                    t.props.onUpdate(t.editor)
                                });
                                break;
                            case"onViewportChange":
                                t.editor.on("viewportChange", function (e, n, r) {
                                    t.props.onViewportChange(t.editor, n, r)
                                })
                        }
                    })
                }, e
            }(), f = function (e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return c || (n.applied = !1, n.appliedNext = !1, n.appliedUserDefined = !1, n.deferred = null, n.emulating = !1, n.hydrated = !1, n.initCb = function () {
                        n.props.editorDidConfigure && n.props.editorDidConfigure(n.editor)
                    }, n.mounted = !1), n
                }

                return s(t, e), t.prototype.hydrate = function (e) {
                    var t = this, n = e && e.options ? e.options : {}, r = i({}, l.defaults, this.editor.options, n);
                    Object.keys(r).some(function (e) {
                        return t.editor.getOption(e) !== r[e]
                    }) && Object.keys(r).forEach(function (e) {
                        n.hasOwnProperty(e) && t.editor.getOption(e) !== r[e] && (t.editor.setOption(e, r[e]), t.mirror.setOption(e, r[e]))
                    }), this.hydrated || (this.deferred ? this.resolveChange() : this.initChange(e.value || "")), this.hydrated = !0
                }, t.prototype.initChange = function (e) {
                    this.emulating = !0;
                    var t = this.editor.getDoc(), n = t.lastLine(), r = t.getLine(t.lastLine()).length;
                    t.replaceRange(e || "", {line: 0, ch: 0}, {
                        line: n,
                        ch: r
                    }), this.mirror.setValue(e), t.clearHistory(), this.mirror.clearHistory(), this.emulating = !1
                }, t.prototype.resolveChange = function () {
                    this.emulating = !0;
                    var e = this.editor.getDoc();
                    "undo" === this.deferred.origin ? e.undo() : "redo" === this.deferred.origin ? e.redo() : e.replaceRange(this.deferred.text, this.deferred.from, this.deferred.to, this.deferred.origin), this.emulating = !1, this.deferred = null
                }, t.prototype.mirrorChange = function (e) {
                    var t = this.editor.getDoc();
                    return "undo" === e.origin ? (t.setHistory(this.mirror.getHistory()), this.mirror.undo()) : "redo" === e.origin ? (t.setHistory(this.mirror.getHistory()), this.mirror.redo()) : this.mirror.replaceRange(e.text, e.from, e.to, e.origin), this.mirror.getValue()
                }, t.prototype.componentDidMount = function () {
                    var e = this;
                    c || (this.props.defineMode && this.props.defineMode.name && this.props.defineMode.fn && l.defineMode(this.props.defineMode.name, this.props.defineMode.fn), this.editor = l(this.ref), this.shared = new d(this.editor, this.props), this.mirror = l(function () {
                    }), this.editor.on("electricInput", function () {
                        e.mirror.setHistory(e.editor.getDoc().getHistory())
                    }), this.editor.on("cursorActivity", function () {
                        e.mirror.setCursor(e.editor.getDoc().getCursor())
                    }), this.editor.on("beforeChange", function (t, n) {
                        if (!e.emulating) {
                            n.cancel(), e.deferred = n;
                            var r = e.mirrorChange(e.deferred);
                            e.props.onBeforeChange && e.props.onBeforeChange(e.editor, e.deferred, r)
                        }
                    }), this.editor.on("change", function (t, n) {
                        e.mounted && e.props.onChange && e.props.onChange(e.editor, n, e.editor.getValue())
                    }), this.hydrate(this.props), this.shared.apply(this.props), this.applied = !0, this.mounted = !0, this.shared.wire(this.props), this.editor.getOption("autofocus") && this.editor.focus(), this.props.editorDidMount && this.props.editorDidMount(this.editor, this.editor.getValue(), this.initCb))
                }, t.prototype.componentWillReceiveProps = function (e) {
                    if (!c) {
                        var t = {cursor: null};
                        e.value !== this.props.value && (this.hydrated = !1), this.props.autoCursor || void 0 === this.props.autoCursor || (t.cursor = this.editor.getDoc().getCursor()), this.hydrate(e), this.appliedNext || (this.shared.applyNext(this.props, e, t), this.appliedNext = !0), this.shared.applyUserDefined(this.props, t), this.appliedUserDefined = !0
                    }
                }, t.prototype.componentWillUnmount = function () {
                    c || this.props.editorWillUnmount && this.props.editorWillUnmount(l)
                }, t.prototype.shouldComponentUpdate = function (e, t) {
                    return !c
                }, t.prototype.render = function () {
                    var e = this;
                    if (c) return null;
                    var t = this.props.className ? "react-codemirror2 " + this.props.className : "react-codemirror2";
                    return u.createElement("div", {
                        className: t, ref: function (t) {
                            return e.ref = t
                        }
                    })
                }, t
            }(u.Component);
            t.Controlled = f;
            var h = function (e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return c || (n.applied = !1, n.appliedUserDefined = !1, n.continueChange = !1, n.detached = !1, n.hydrated = !1, n.initCb = function () {
                        n.props.editorDidConfigure && n.props.editorDidConfigure(n.editor)
                    }, n.mounted = !1, n.onBeforeChangeCb = function () {
                        n.continueChange = !0
                    }), n
                }

                return s(t, e), t.prototype.hydrate = function (e) {
                    var t = this, n = e && e.options ? e.options : {}, r = i({}, l.defaults, this.editor.options, n);
                    if (Object.keys(r).some(function (e) {
                        return t.editor.getOption(e) !== r[e]
                    }) && Object.keys(r).forEach(function (e) {
                        n.hasOwnProperty(e) && t.editor.getOption(e) !== r[e] && t.editor.setOption(e, r[e])
                    }), !this.hydrated) {
                        var o = this.editor.getDoc(), a = o.lastLine(), s = o.getLine(o.lastLine()).length;
                        o.replaceRange(e.value || "", {line: 0, ch: 0}, {line: a, ch: s})
                    }
                    this.hydrated = !0
                }, t.prototype.componentDidMount = function () {
                    var e = this;
                    c || (this.detached = !0 === this.props.detach, this.props.defineMode && this.props.defineMode.name && this.props.defineMode.fn && l.defineMode(this.props.defineMode.name, this.props.defineMode.fn), this.editor = l(this.ref), this.shared = new d(this.editor, this.props), this.editor.on("beforeChange", function (t, n) {
                        e.props.onBeforeChange && e.props.onBeforeChange(e.editor, n, e.editor.getValue(), e.onBeforeChangeCb)
                    }), this.editor.on("change", function (t, n) {
                        e.mounted && e.props.onChange && (e.props.onBeforeChange ? e.continueChange && e.props.onChange(e.editor, n, e.editor.getValue()) : e.props.onChange(e.editor, n, e.editor.getValue()))
                    }), this.hydrate(this.props), this.shared.apply(this.props), this.applied = !0, this.mounted = !0, this.shared.wire(this.props), this.editor.getDoc().clearHistory(), this.props.editorDidMount && this.props.editorDidMount(this.editor, this.editor.getValue(), this.initCb))
                }, t.prototype.componentWillReceiveProps = function (e) {
                    if (this.detached && !1 === e.detach && (this.detached = !1, this.props.editorDidAttach && this.props.editorDidAttach(this.editor)), this.detached || !0 !== e.detach || (this.detached = !0, this.props.editorDidDetach && this.props.editorDidDetach(this.editor)), !c && !this.detached) {
                        var t = {cursor: null};
                        e.value !== this.props.value && (this.hydrated = !1, this.applied = !1, this.appliedUserDefined = !1), this.props.autoCursor || void 0 === this.props.autoCursor || (t.cursor = this.editor.getDoc().getCursor()), this.hydrate(e), this.applied || (this.shared.apply(this.props), this.applied = !0), this.appliedUserDefined || (this.shared.applyUserDefined(this.props, t), this.appliedUserDefined = !0)
                    }
                }, t.prototype.componentWillUnmount = function () {
                    c || this.props.editorWillUnmount && this.props.editorWillUnmount(l)
                }, t.prototype.shouldComponentUpdate = function (e, t) {
                    var n = !0;
                    return c && (n = !1), this.detached && (n = !1), n
                }, t.prototype.render = function () {
                    var e = this;
                    if (c) return null;
                    var t = this.props.className ? "react-codemirror2 " + this.props.className : "react-codemirror2";
                    return u.createElement("div", {
                        className: t, ref: function (t) {
                            return e.ref = t
                        }
                    })
                }, t
            }(u.Component);
            t.UnControlled = h
        }).call(this, n(4))
    }, function (e, t, n) {
        (function (e) {
            var r, i, o, a;

            function s(e) {
                return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            a = function (e) {
                "use strict";
                var t = {
                    autoSelfClosers: {
                        area: !0,
                        base: !0,
                        br: !0,
                        col: !0,
                        command: !0,
                        embed: !0,
                        frame: !0,
                        hr: !0,
                        img: !0,
                        input: !0,
                        keygen: !0,
                        link: !0,
                        meta: !0,
                        param: !0,
                        source: !0,
                        track: !0,
                        wbr: !0,
                        menuitem: !0
                    },
                    implicitlyClosed: {
                        dd: !0,
                        li: !0,
                        optgroup: !0,
                        option: !0,
                        p: !0,
                        rp: !0,
                        rt: !0,
                        tbody: !0,
                        td: !0,
                        tfoot: !0,
                        th: !0,
                        tr: !0
                    },
                    contextGrabbers: {
                        dd: {dd: !0, dt: !0},
                        dt: {dd: !0, dt: !0},
                        li: {li: !0},
                        option: {option: !0, optgroup: !0},
                        optgroup: {optgroup: !0},
                        p: {
                            address: !0,
                            article: !0,
                            aside: !0,
                            blockquote: !0,
                            dir: !0,
                            div: !0,
                            dl: !0,
                            fieldset: !0,
                            footer: !0,
                            form: !0,
                            h1: !0,
                            h2: !0,
                            h3: !0,
                            h4: !0,
                            h5: !0,
                            h6: !0,
                            header: !0,
                            hgroup: !0,
                            hr: !0,
                            menu: !0,
                            nav: !0,
                            ol: !0,
                            p: !0,
                            pre: !0,
                            section: !0,
                            table: !0,
                            ul: !0
                        },
                        rp: {rp: !0, rt: !0},
                        rt: {rp: !0, rt: !0},
                        tbody: {tbody: !0, tfoot: !0},
                        td: {td: !0, th: !0},
                        tfoot: {tbody: !0},
                        th: {td: !0, th: !0},
                        thead: {tbody: !0, tfoot: !0},
                        tr: {tr: !0}
                    },
                    doNotIndent: {pre: !0},
                    allowUnquoted: !0,
                    allowMissing: !0,
                    caseFold: !0
                }, n = {
                    autoSelfClosers: {},
                    implicitlyClosed: {},
                    contextGrabbers: {},
                    doNotIndent: {},
                    allowUnquoted: !1,
                    allowMissing: !1,
                    allowMissingTagName: !1,
                    caseFold: !1
                };
                e.defineMode("xml", function (r, i) {
                    var o, a, s = r.indentUnit, l = {}, u = i.htmlMode ? t : n;
                    for (var c in u) l[c] = u[c];
                    for (var c in i) l[c] = i[c];

                    function p(e, t) {
                        function n(n) {
                            return (t.tokenize = n)(e, t)
                        }

                        var r = e.next();
                        return "<" == r ? e.eat("!") ? e.eat("[") ? e.match("CDATA[") ? n(f("atom", "]]>")) : null : e.match("--") ? n(f("comment", "--\x3e")) : e.match("DOCTYPE", !0, !0) ? (e.eatWhile(/[\w\._\-]/), n(function e(t) {
                            return function (n, r) {
                                for (var i; null != (i = n.next());) {
                                    if ("<" == i) return r.tokenize = e(t + 1), r.tokenize(n, r);
                                    if (">" == i) {
                                        if (1 != t) return r.tokenize = e(t - 1), r.tokenize(n, r);
                                        r.tokenize = p;
                                        break
                                    }
                                }
                                return "meta"
                            }
                        }(1))) : null : e.eat("?") ? (e.eatWhile(/[\w\._\-]/), t.tokenize = f("meta", "?>"), "meta") : (o = e.eat("/") ? "closeTag" : "openTag", t.tokenize = d, "tag bracket") : "&" != r ? (e.eatWhile(/[^&<]/), null) : (e.eat("#") ? e.eat("x") ? e.eatWhile(/[a-fA-F\d]/) && e.eat(";") : e.eatWhile(/[\d]/) && e.eat(";") : e.eatWhile(/[\w\.\-:]/) && e.eat(";")) ? "atom" : "error"
                    }

                    function d(e, t) {
                        var n = e.next();
                        if (">" == n || "/" == n && e.eat(">")) return t.tokenize = p, o = ">" == n ? "endTag" : "selfcloseTag", "tag bracket";
                        if ("=" == n) return o = "equals", null;
                        if ("<" != n) return /[\'\"]/.test(n) ? (t.tokenize = (r = n, (i = function (e, t) {
                            for (; !e.eol();) if (e.next() == r) {
                                t.tokenize = d;
                                break
                            }
                            return "string"
                        }).isInAttribute = !0, i), t.stringStartCol = e.column(), t.tokenize(e, t)) : (e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), "word");
                        t.tokenize = p, t.state = g, t.tagName = t.tagStart = null;
                        var r, i, a = t.tokenize(e, t);
                        return a ? a + " tag error" : "tag error"
                    }

                    function f(e, t) {
                        return function (n, r) {
                            for (; !n.eol();) {
                                if (n.match(t)) {
                                    r.tokenize = p;
                                    break
                                }
                                n.next()
                            }
                            return e
                        }
                    }

                    function h(e, t, n) {
                        this.prev = e.context, this.tagName = t, this.indent = e.indented, this.startOfLine = n, (l.doNotIndent.hasOwnProperty(t) || e.context && e.context.noIndent) && (this.noIndent = !0)
                    }

                    function _(e) {
                        e.context && (e.context = e.context.prev)
                    }

                    function m(e, t) {
                        for (var n; ;) {
                            if (!e.context) return;
                            if (n = e.context.tagName, !l.contextGrabbers.hasOwnProperty(n) || !l.contextGrabbers[n].hasOwnProperty(t)) return;
                            _(e)
                        }
                    }

                    function g(e, t, n) {
                        return "openTag" == e ? (n.tagStart = t.column(), v) : "closeTag" == e ? y : g
                    }

                    function v(e, t, n) {
                        return "word" == e ? (n.tagName = t.current(), a = "tag", x) : l.allowMissingTagName && "endTag" == e ? (a = "tag bracket", x(e, t, n)) : (a = "error", v)
                    }

                    function y(e, t, n) {
                        if ("word" != e) return l.allowMissingTagName && "endTag" == e ? (a = "tag bracket", b(e, t, n)) : (a = "error", w);
                        var r = t.current();
                        return n.context && n.context.tagName != r && l.implicitlyClosed.hasOwnProperty(n.context.tagName) && _(n), n.context && n.context.tagName == r || !1 === l.matchClosing ? (a = "tag", b) : (a = "tag error", w)
                    }

                    function b(e, t, n) {
                        return "endTag" != e ? (a = "error", b) : (_(n), g)
                    }

                    function w(e, t, n) {
                        return a = "error", b(e, 0, n)
                    }

                    function x(e, t, n) {
                        if ("word" == e) return a = "attribute", k;
                        if ("endTag" != e && "selfcloseTag" != e) return a = "error", x;
                        var r = n.tagName, i = n.tagStart;
                        return n.tagName = n.tagStart = null, "selfcloseTag" == e || l.autoSelfClosers.hasOwnProperty(r) ? m(n, r) : (m(n, r), n.context = new h(n, r, i == n.indented)), g
                    }

                    function k(e, t, n) {
                        return "equals" == e ? C : (l.allowMissing || (a = "error"), x(e, 0, n))
                    }

                    function C(e, t, n) {
                        return "string" == e ? S : "word" == e && l.allowUnquoted ? (a = "string", x) : (a = "error", x(e, 0, n))
                    }

                    function S(e, t, n) {
                        return "string" == e ? S : x(e, 0, n)
                    }

                    return p.isInText = !0, {
                        startState: function (e) {
                            var t = {
                                tokenize: p,
                                state: g,
                                indented: e || 0,
                                tagName: null,
                                tagStart: null,
                                context: null
                            };
                            return null != e && (t.baseIndent = e), t
                        },
                        token: function (e, t) {
                            if (!t.tagName && e.sol() && (t.indented = e.indentation()), e.eatSpace()) return null;
                            o = null;
                            var n = t.tokenize(e, t);
                            return (n || o) && "comment" != n && (a = null, t.state = t.state(o || n, e, t), a && (n = "error" == a ? n + " error" : a)), n
                        },
                        indent: function (t, n, r) {
                            var i = t.context;
                            if (t.tokenize.isInAttribute) return t.tagStart == t.indented ? t.stringStartCol + 1 : t.indented + s;
                            if (i && i.noIndent) return e.Pass;
                            if (t.tokenize != d && t.tokenize != p) return r ? r.match(/^(\s*)/)[0].length : 0;
                            if (t.tagName) return !1 !== l.multilineTagIndentPastTag ? t.tagStart + t.tagName.length + 2 : t.tagStart + s * (l.multilineTagIndentFactor || 1);
                            if (l.alignCDATA && /<!\[CDATA\[/.test(n)) return 0;
                            var o = n && /^<(\/)?([\w_:\.-]*)/.exec(n);
                            if (o && o[1]) for (; i;) {
                                if (i.tagName == o[2]) {
                                    i = i.prev;
                                    break
                                }
                                if (!l.implicitlyClosed.hasOwnProperty(i.tagName)) break;
                                i = i.prev
                            } else if (o) for (; i;) {
                                var a = l.contextGrabbers[i.tagName];
                                if (!a || !a.hasOwnProperty(o[2])) break;
                                i = i.prev
                            }
                            for (; i && i.prev && !i.startOfLine;) i = i.prev;
                            return i ? i.indent + s : t.baseIndent || 0
                        },
                        electricInput: /<\/[\s\w:]+>$/,
                        blockCommentStart: "\x3c!--",
                        blockCommentEnd: "--\x3e",
                        configuration: l.htmlMode ? "html" : "xml",
                        helperType: l.htmlMode ? "html" : "xml",
                        skipAttribute: function (e) {
                            e.state == C && (e.state = x)
                        }
                    }
                }), e.defineMIME("text/xml", "xml"), e.defineMIME("application/xml", "xml"), e.mimeModes.hasOwnProperty("text/html") || e.defineMIME("text/html", {
                    name: "xml",
                    htmlMode: !0
                })
            }, "object" == s(t) && "object" == s(e) ? a(n(176)) : (i = [n(176)], void 0 === (o = "function" == typeof (r = a) ? r.apply(t, i) : r) || (e.exports = o))
        }).call(this, n(55)(e))
    }, function (e, t, n) {
        var r = n(269);
        "string" == typeof r && (r = [[e.i, r, ""]]);
        n(2)(r, {
            attrs: {"data-js": "kit"},
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        }), r.locals && (e.exports = r.locals)
    }, function (e, t, n) {
        var r = n(270);
        "string" == typeof r && (r = [[e.i, r, ""]]);
        n(2)(r, {
            attrs: {"data-js": "kit"},
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        }), r.locals && (e.exports = r.locals)
    }, function (e, t, n) {
        "use strict";
        var r, i = this && this.__extends || (r = function (e, t) {
            return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
        }, function (e, t) {
            function n() {
                this.constructor = e
            }

            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        });
        Object.defineProperty(t, "__esModule", {value: !0});
        var o = n(0), a = n(9), s = n(8);
        n(273);
        var l = n(14), u = n(35), c = function (e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.saved = !1, n.el = document.createElement("div"), n.el.className = "n1ed-sticky-dlg", n.state = {isVisible: n.props.isVisible}, n.zIndexManager = new u.FeatureZIndexManager, n.zIndexManager.init(), n
            }

            return i(t, e), t.prototype.componentDidMount = function () {
                document.body.appendChild(this.el)
            }, t.prototype.componentWillUnmount = function () {
                document.body.removeChild(this.el)
            }, t.prototype.close = function () {
                this.setState({isVisible: !1})
            }, t.prototype.render = function () {
                var e = document.querySelector("body");
                this.state.isVisible ? this.saved || (this.saved = !0, this.savedOverflow = l.libHtml.getStyle(e, "overflow"), this.savedOverflowX = l.libHtml.getStyle(e, "overflow-x"), this.savedOverflowY = l.libHtml.getStyle(e, "overflow-y"), l.libHtml.setStyle(e, "overflow", "hidden !important"), l.libHtml.setStyle(e, "overflow-x", "hidden !important"), l.libHtml.setStyle(e, "overflow-y", "hidden !important"), l.libHtml.addClass(this.el, "n1ed-sticky-dlg--visible"), this.zIndex = this.zIndexManager.reserveZIndex(), l.libHtml.setStyle(this.el, "z-index", "" + this.zIndex)) : this.saved && (this.saved = !1, l.libHtml.setStyle(e, "overflow", this.savedOverflow), l.libHtml.setStyle(e, "overflow-x", this.savedOverflowX), l.libHtml.setStyle(e, "overflow-y", this.savedOverflowY), l.libHtml.removeClass(this.el, "n1ed-sticky-dlg--visible"), l.libHtml.removeStyle(this.el, "z-index"), this.zIndexManager.unReserveZIndex(this.zIndex));
                var t = a.classNames(["n1ed-sticky-dlg__content", {"n1ed-sticky-dlg__content--right": !this.props.instance.isLeft}]);
                if (!0 === this.props.noContentScroll && (t += " n1ed-sticky-dlg__content--no-content-scroll"), this.props.extraClasses) for (var n = 0, r = this.props.extraClasses; n < r.length; n++) t += " " + r[n];
                return s.createPortal(o.createElement("div", {
                    style: {padding: this.props.padding},
                    className: t
                }, this.props.children), this.el)
            }, t
        }(o.Component);
        t.N1EDStickyDlg = c
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.CHANGE_HTML = 0, t.changeHtml = function (e) {
            return {type: t.CHANGE_HTML, value: e}
        }
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        e.exports = function (e) {
            return null != e && ("object" === r(e) || "function" == typeof e)
        }
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(263), i = n(275), o = n(288);
        t.index = {
            openDlgAddTemplate: r.n1ed_openDlgAddTemplate,
            openDlgEditTemplate: r.n1ed_openDlgEditTemplate,
            openDlgSource: i.n1ed_openDlgSource,
            openSectionTemplates: o.n1ed_openDlgSectionTemplates
        }, window.n1edLibCallback ? window.n1edLibCallback(t.index) : window.n1edLib = t.index
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(8), i = n(0), o = n(264), a = n(223), s = n(14);
        t.n1ed_openDlgAddTemplate = function (e, t) {
            var n = {
                instance: e,
                isAdd: !0,
                doCreateTemplate: !0,
                title: "My template",
                hint: "",
                icon: "",
                html: "<div>\n\n</div>"
            }, l = document.querySelector("body"), u = s.libHtml.createTagAndAdd(null, l), c = i.createRef();
            r.render(i.createElement(a.N1EDStickyDlg, {
                instance: e,
                isVisible: !0,
                padding: "20px",
                noContentScroll: !0,
                ref: c
            }, i.createElement(o.AppN1EDEditTemplate, {
                config: n, openFlmngr: e.openFlmngr, onOk: function (e, n) {
                    t(e, n), c.current.close()
                }, onDelete: function () {
                }, onCancel: function () {
                    c.current.close()
                }
            })), u)
        }, t.n1ed_openDlgEditTemplate = function (e, t, n, l) {
            var u = {
                instance: e,
                isAdd: !1,
                doCreateTemplate: !1,
                title: t.title,
                hint: t.hint,
                icon: t.icon,
                html: t.html
            }, c = document.querySelector("body"), p = s.libHtml.createTagAndAdd(null, c), d = i.createRef();
            r.render(i.createElement(a.N1EDStickyDlg, {
                instance: e,
                isVisible: !0,
                padding: "20px",
                noContentScroll: !0,
                ref: d
            }, i.createElement(o.AppN1EDEditTemplate, {
                config: u, openFlmngr: e.openFlmngr, onDelete: function () {
                    l(), d.current.close()
                }, onOk: function (e, t) {
                    n(t), d.current.close()
                }, onCancel: function () {
                    d.current.close()
                }
            })), p)
        }
    }, function (e, t, n) {
        "use strict";
        var r, i = this && this.__extends || (r = function (e, t) {
            return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
        }, function (e, t) {
            function n() {
                this.constructor = e
            }

            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }), o = this && this.__assign || function () {
            return (o = Object.assign || function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            }).apply(this, arguments)
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        var a = n(0), s = n(63), l = n(216), u = n(75), c = n(265), p = function (e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.store = s.createStore(l.reduce, {config: n.props.config}), n
            }

            return i(t, e), t.prototype.render = function () {
                return a.createElement(u.Provider, {store: this.store}, a.createElement(c.N1EDEditTemplate, o({}, this.props)))
            }, t
        }(a.Component);
        t.AppN1EDEditTemplate = p
    }, function (e, t, n) {
        "use strict";
        var r, i = this && this.__extends || (r = function (e, t) {
            return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
        }, function (e, t) {
            function n() {
                this.constructor = e
            }

            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        });
        Object.defineProperty(t, "__esModule", {value: !0});
        var o = n(0);
        n(218);
        var a = n(219), s = n(5), l = n(75), u = n(9), c = n(217), p = n(17), d = n(267);
        n(220), n(268), n(221), n(222), n(271);
        var f = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }

            return i(t, e), t.prototype.componentDidMount = function () {
            }, t.prototype.render = function () {
                return o.createElement("div", {className: "n1ed-edit-template"}, this.props.config.doMakePermanent ? this.renderMakePermanent() : this.renderMain())
            }, t.prototype.renderMakePermanent = function () {
                var e = this, t = [];
                this.props.config.hint && 0 < this.props.config.hint.length && t.push('\t\thint: "' + this.props.config.hint.replace(/"/g, '\\"') + '"'), this.props.config.icon && 0 < this.props.config.icon.length && t.push('\t\ticon: "' + this.props.config.icon.replace(/"/g, '\\"') + '"');
                var n = t.join("\n");
                0 < n.length && (n = "\n" + n);
                var r = 'customTemplates: [\n    {\n        title: "' + this.props.config.title + '",' + n + '\n        html: "' + this.props.config.html.replace(/"/g, '\\"').replace(/\n/g, '" + \n              "') + '"\n    }\n]';
                return o.createElement("div", {className: "n1ed-edit-template--make-permanent"}, o.createElement("div", {className: "n1ed-edit-template__title"}, "Share template with your team"), o.createElement("p", null, o.createElement("b", null, "This template is temporal."), " This means it is stored in local storage of your browser."), o.createElement("p", null, "In order to make it permanent and share between your team, please merge this code with your server side configuration. Probably you need to ask your web developer about this."), o.createElement(a.Controlled, {
                    value: r,
                    onChange: function (e, t, n) {
                    },
                    onBeforeChange: function (e, t, n) {
                    },
                    options: {mode: "javascript", htmlMode: !0, theme: "neat", lineNumbers: !0, readOnly: !0},
                    editorDidMount: function (e) {
                        setTimeout(function () {
                            e.refresh()
                        }, 1)
                    }
                }), o.createElement("div", {className: "n1ed-edit-template__filler"}), o.createElement("div", {className: "n1ed-edit-template__buttons"}, o.createElement(s.N1EDButton, {
                    title: "Got it",
                    width: "180px",
                    onClick: function () {
                        e.props.onMakePermanent(!1)
                    }
                }), o.createElement(s.N1EDButton, {
                    title: "Read docs",
                    width: "180px",
                    style: s.N1EDButtonStyle.PRIMARY,
                    href: "https://n1ed.com/docs/configuration/templates",
                    newTab: !0,
                    onClick: function () {
                    }
                })))
            }, t.prototype.renderMain = function () {
                var e = this;
                return o.createElement("div", {className: "n1ed-edit-template--main"}, o.createElement("div", {className: "n1ed-edit-template__title"}, this.props.config.isAdd ? this.props.config.doCreateTemplate ? "Add widget template" : "Insert HTML snippet" : "Edit widget template"), this.props.config.isAdd && o.createElement("div", null, o.createElement("label", null, o.createElement("input", {
                    type: "checkbox",
                    checked: this.props.config.doCreateTemplate,
                    onChange: function () {
                        e.props.onToggleCreateTemplate()
                    }
                }), " Create a template")), (!this.props.config.isAdd || this.props.config.doCreateTemplate) && o.createElement("div", {className: "n1ed-edit-template__options"}, o.createElement("div", null, o.createElement("div", null, "Title"), o.createElement(p.N1EDTextField, {
                    width: "100%",
                    value: this.props.config.title,
                    onChange: function (t) {
                        e.props.onChangeTitle(t)
                    }
                })), o.createElement("div", null, o.createElement("div", null, "Hint"), o.createElement(p.N1EDTextField, {
                    width: "100%",
                    value: this.props.config.hint,
                    onChange: function (t) {
                        e.props.onChangeHint(t)
                    }
                })), o.createElement("div", null, o.createElement("div", null, "Icon URL"), o.createElement(d.N1EDTextFieldURL, {
                    width: "100%",
                    openFlmngr: this.props.openFlmngr,
                    instance: this.props.config.instance,
                    value: this.props.config.icon,
                    onChange: function (t) {
                        e.props.onChangeIcon(t)
                    }
                }))), o.createElement(a.Controlled, {
                    value: this.props.config.html,
                    onChange: function (e, t, n) {
                    },
                    onBeforeChange: function (t, n, r) {
                        e.props.onChangeHtml(r)
                    },
                    options: {mode: "xml", htmlMode: !0, theme: "nord", lineNumbers: !0, readOnly: !1},
                    editorDidMount: function (e) {
                        setTimeout(function () {
                            e.refresh()
                        }, 1)
                    }
                }), o.createElement("div", {className: "n1ed-edit-template__buttons"}, this.props.config.isAdd ? null : o.createElement(s.N1EDButton, {
                    title: "Share with team...",
                    extraClasses: ["n1ed-edit-template__buttons__make-permanent"],
                    onClick: function () {
                        e.props.onMakePermanent(!0)
                    }
                }), !this.props.config.isAdd && o.createElement(s.N1EDButton, {
                    title: "Delete",
                    style: s.N1EDButtonStyle.LINK_DANGER,
                    onClick: function () {
                        e.props.onDelete()
                    }
                }), o.createElement(s.N1EDButton, {
                    title: "Cancel", onClick: function () {
                        e.props.onCancel()
                    }
                }), o.createElement(s.N1EDButton, {
                    title: !this.props.config.isAdd || this.props.config.doCreateTemplate ? "Save" : "Insert",
                    width: "180px",
                    style: s.N1EDButtonStyle.PRIMARY,
                    disabled: this.props.config.validationFail,
                    onClick: function () {
                        e.props.onOk(e.props.config.doCreateTemplate, {
                            title: e.props.config.title,
                            hint: e.props.config.hint,
                            icon: e.props.config.icon,
                            html: e.props.config.html
                        })
                    }
                })))
            }, t
        }(o.Component);
        t.N1EDEditTemplateUI = f, t.N1EDEditTemplate = l.connect(function (e, t) {
            return {config: u.cloneDeep(e.config)}
        }, function (e, t) {
            return {
                onToggleCreateTemplate: function () {
                    e(c.toggleCreateTemplate())
                }, onChangeTitle: function (t) {
                    e(c.changeTitle(t))
                }, onChangeHint: function (t) {
                    e(c.changeHint(t))
                }, onChangeIcon: function (t) {
                    e(c.changeIcon(t))
                }, onChangeHtml: function (t) {
                    e(c.changeHtml(t))
                }, onMakePermanent: function (t) {
                    e(c.makePermanent(t))
                }
            }
        })(f)
    }, function (e, t, n) {
        (e.exports = n(1)(!1)).push([e.i, ".n1ed-edit-template{height:100%;width:100%;font-size:18px;font-weight:bold}.n1ed-edit-template p{margin:10px 0;max-width:800px;font-weight:normal}.n1ed-edit-template .n1ed-edit-template__title{font-weight:bold;font-size:26px;margin-top:10px;margin-bottom:25px}.n1ed-edit-template .n1ed-edit-template__buttons{display:flex;justify-content:flex-end;align-items:center;margin-top:25px;margin-bottom:25px}.n1ed-edit-template .n1ed-edit-template__buttons .n1ed-button:not(:first-child){margin-left:30px}.n1ed-edit-template .n1ed-edit-template__buttons .n1ed-edit-template__buttons__make-permanent{flex:0 1 auto;margin:0 auto 0 0}.n1ed-edit-template .n1ed-edit-template--make-permanent{display:flex;flex-direction:column;height:100%}.n1ed-edit-template .n1ed-edit-template--make-permanent .react-codemirror2{border:1px solid #DDD}.n1ed-edit-template .n1ed-edit-template--make-permanent .n1ed-edit-template__filler{flex:1 1 auto}.n1ed-edit-template .n1ed-edit-template--main{display:flex;flex-direction:column;height:100%}.n1ed-edit-template .n1ed-edit-template--main>*{flex:0 0 auto}.n1ed-edit-template .n1ed-edit-template--main .react-codemirror2{flex:1 1 auto;margin-top:15px;margin-bottom:15px;overflow-y:auto}.n1ed-edit-template .n1ed-edit-template--main .react-codemirror2>.CodeMirror{height:100%}.n1ed-edit-template .n1ed-edit-template--main label{cursor:pointer;padding:10px 10px 10px 0;margin-bottom:15px}.n1ed-edit-template .n1ed-edit-template--main label:hover{background-color:#fff9e6}.n1ed-edit-template .n1ed-edit-template--main .n1ed-edit-template__options{display:flex;margin:0 0 15px 0}.n1ed-edit-template .n1ed-edit-template--main .n1ed-edit-template__options>div{flex:0 0 33%;margin:0 10px 0 0}.n1ed-edit-template .n1ed-edit-template--main .n1ed-edit-template__options>div:last-child{margin-right:0}\n", ""])
    }, function (e, t, n) {
        "use strict";
        var r, i = this && this.__extends || (r = function (e, t) {
            return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
        }, function (e, t) {
            function n() {
                this.constructor = e
            }

            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        });
        Object.defineProperty(t, "__esModule", {value: !0});
        var o = n(0);
        n(45);
        var a = n(17), s = n(5), l = function (e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.state = {value: t.value}, n
            }

            return i(t, e), t.prototype.render = function () {
                var e = this, t = ["n1ed-textfield--url"];
                if (this.props.extraClasses) for (var n = 0, r = this.props.extraClasses; n < r.length; n++) {
                    var i = r[n];
                    t.push(i)
                }
                return o.createElement("div", {className: t.join(" ")}, o.createElement(a.N1EDTextField, {
                    disabled: this.props.disabled,
                    value: this.state.value,
                    onChange: function (t) {
                        e.setValue(t)
                    }
                }), o.createElement(s.N1EDButton, {
                    disabled: this.props.disabled || !this.props.openFlmngr,
                    title: "Browse",
                    onClick: function () {
                        e.props.openFlmngr(e.state.value, !0, function (t) {
                            e.setValue(t)
                        })
                    }
                }))
            }, t.prototype.setValue = function (e) {
                var t = this;
                this.setState({value: e}, function () {
                    t.props.onChange && t.props.onChange(e)
                })
            }, t
        }(o.Component);
        t.N1EDTextFieldURL = l
    }, function (e, t, n) {
        (function (e) {
            var r, i, o, a;

            function s(e) {
                return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            a = function (e) {
                "use strict";
                e.defineMode("javascript", function (t, n) {
                    var r, i, o = t.indentUnit, a = n.statementIndent, l = n.jsonld, u = n.json || l, c = n.typescript,
                        p = n.wordCharacters || /[\w$\xa1-\uffff]/, d = function () {
                            function e(e) {
                                return {type: e, style: "keyword"}
                            }

                            var t = e("keyword a"), n = e("keyword b"), r = e("keyword c"), i = e("keyword d"),
                                o = e("operator"), a = {type: "atom", style: "atom"};
                            return {
                                if: e("if"),
                                while: t,
                                with: t,
                                else: n,
                                do: n,
                                try: n,
                                finally: n,
                                return: i,
                                break: i,
                                continue: i,
                                new: e("new"),
                                delete: r,
                                void: r,
                                throw: r,
                                debugger: e("debugger"),
                                var: e("var"),
                                const: e("var"),
                                let: e("var"),
                                function: e("function"),
                                catch: e("catch"),
                                for: e("for"),
                                switch: e("switch"),
                                case: e("case"),
                                default: e("default"),
                                in: o,
                                typeof: o,
                                instanceof: o,
                                true: a,
                                false: a,
                                null: a,
                                undefined: a,
                                NaN: a,
                                Infinity: a,
                                this: e("this"),
                                class: e("class"),
                                super: e("atom"),
                                yield: r,
                                export: e("export"),
                                import: e("import"),
                                extends: r,
                                await: r
                            }
                        }(), f = /[+\-*&%=<>!?|~^@]/,
                        h = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;

                    function _(e, t, n) {
                        return r = e, i = n, t
                    }

                    function m(e, t) {
                        var n, r = e.next();
                        if ('"' == r || "'" == r) return t.tokenize = (n = r, function (e, t) {
                            var r, i = !1;
                            if (l && "@" == e.peek() && e.match(h)) return t.tokenize = m, _("jsonld-keyword", "meta");
                            for (; null != (r = e.next()) && (r != n || i);) i = !i && "\\" == r;
                            return i || (t.tokenize = m), _("string", "string")
                        }), t.tokenize(e, t);
                        if ("." == r && e.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/)) return _("number", "number");
                        if ("." == r && e.match("..")) return _("spread", "meta");
                        if (/[\[\]{}\(\),;\:\.]/.test(r)) return _(r);
                        if ("=" == r && e.eat(">")) return _("=>", "operator");
                        if ("0" == r && e.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/)) return _("number", "number");
                        if (/\d/.test(r)) return e.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/), _("number", "number");
                        if ("/" == r) return e.eat("*") ? (t.tokenize = g)(e, t) : e.eat("/") ? (e.skipToEnd(), _("comment", "comment")) : Xe(e, t, 1) ? (function (e) {
                            for (var t, n = !1, r = !1; null != (t = e.next());) {
                                if (!n) {
                                    if ("/" == t && !r) return;
                                    "[" == t ? r = !0 : r && "]" == t && (r = !1)
                                }
                                n = !n && "\\" == t
                            }
                        }(e), e.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/), _("regexp", "string-2")) : (e.eat("="), _("operator", "operator", e.current()));
                        if ("`" == r) return (t.tokenize = v)(e, t);
                        if ("#" == r) return e.skipToEnd(), _("error", "error");
                        if (f.test(r)) return ">" == r && t.lexical && ">" == t.lexical.type || (e.eat("=") ? "!" != r && "=" != r || e.eat("=") : /[<>*+\-]/.test(r) && (e.eat(r), ">" == r && e.eat(r))), _("operator", "operator", e.current());
                        if (p.test(r)) {
                            e.eatWhile(p);
                            var i = e.current();
                            if ("." != t.lastType) {
                                if (d.propertyIsEnumerable(i)) {
                                    var o = d[i];
                                    return _(o.type, o.style, i)
                                }
                                if ("async" == i && e.match(/^(\s|\/\*.*?\*\/)*[\[\(\w]/, !1)) return _("async", "keyword", i)
                            }
                            return _("variable", "variable", i)
                        }
                    }

                    function g(e, t) {
                        for (var n, r = !1; n = e.next();) {
                            if ("/" == n && r) {
                                t.tokenize = m;
                                break
                            }
                            r = "*" == n
                        }
                        return _("comment", "comment")
                    }

                    function v(e, t) {
                        for (var n, r = !1; null != (n = e.next());) {
                            if (!r && ("`" == n || "$" == n && e.eat("{"))) {
                                t.tokenize = m;
                                break
                            }
                            r = !r && "\\" == n
                        }
                        return _("quasi", "string-2", e.current())
                    }

                    var y = "([{}])";

                    function b(e, t) {
                        t.fatArrowAt && (t.fatArrowAt = null);
                        var n = e.string.indexOf("=>", e.start);
                        if (!(n < 0)) {
                            if (c) {
                                var r = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start, n));
                                r && (n = r.index)
                            }
                            for (var i = 0, o = !1, a = n - 1; 0 <= a; --a) {
                                var s = e.string.charAt(a), l = y.indexOf(s);
                                if (0 <= l && l < 3) {
                                    if (!i) {
                                        ++a;
                                        break
                                    }
                                    if (0 == --i) {
                                        "(" == s && (o = !0);
                                        break
                                    }
                                } else if (3 <= l && l < 6) ++i; else if (p.test(s)) o = !0; else if (/["'\/`]/.test(s)) for (; ; --a) {
                                    if (0 == a) return;
                                    if (e.string.charAt(a - 1) == s && "\\" != e.string.charAt(a - 2)) {
                                        a--;
                                        break
                                    }
                                } else if (o && !i) {
                                    ++a;
                                    break
                                }
                            }
                            o && !i && (t.fatArrowAt = a)
                        }
                    }

                    var w = {
                        atom: !0,
                        number: !0,
                        variable: !0,
                        string: !0,
                        regexp: !0,
                        this: !0,
                        "jsonld-keyword": !0
                    };

                    function x(e, t, n, r, i, o) {
                        this.indented = e, this.column = t, this.type = n, this.prev = i, this.info = o, null != r && (this.align = r)
                    }

                    function k(e, t) {
                        for (var n = e.localVars; n; n = n.next) if (n.name == t) return !0;
                        for (var r = e.context; r; r = r.prev) for (n = r.vars; n; n = n.next) if (n.name == t) return !0
                    }

                    var C = {state: null, column: null, marked: null, cc: null};

                    function S() {
                        for (var e = arguments.length - 1; 0 <= e; e--) C.cc.push(arguments[e])
                    }

                    function E() {
                        return S.apply(null, arguments), !0
                    }

                    function T(e, t) {
                        for (var n = t; n; n = n.next) if (n.name == e) return !0;
                        return !1
                    }

                    function O(e) {
                        var t = C.state;
                        if (C.marked = "def", t.context) if ("var" == t.lexical.info && t.context && t.context.block) {
                            var r = function e(t, n) {
                                if (n) {
                                    if (n.block) {
                                        var r = e(t, n.prev);
                                        return r ? r == n.prev ? n : new M(r, n.vars, !0) : null
                                    }
                                    return T(t, n.vars) ? n : new M(n.prev, new A(t, n.vars), !1)
                                }
                                return null
                            }(e, t.context);
                            if (null != r) return void (t.context = r)
                        } else if (!T(e, t.localVars)) return void (t.localVars = new A(e, t.localVars));
                        n.globalVars && !T(e, t.globalVars) && (t.globalVars = new A(e, t.globalVars))
                    }

                    function N(e) {
                        return "public" == e || "private" == e || "protected" == e || "abstract" == e || "readonly" == e
                    }

                    function M(e, t, n) {
                        this.prev = e, this.vars = t, this.block = n
                    }

                    function A(e, t) {
                        this.name = e, this.next = t
                    }

                    var P = new A("this", new A("arguments", null));

                    function L() {
                        C.state.context = new M(C.state.context, C.state.localVars, !1), C.state.localVars = P
                    }

                    function R() {
                        C.state.context = new M(C.state.context, C.state.localVars, !0), C.state.localVars = null
                    }

                    function D() {
                        C.state.localVars = C.state.context.vars, C.state.context = C.state.context.prev
                    }

                    function I(e, t) {
                        var n = function () {
                            var n = C.state, r = n.indented;
                            if ("stat" == n.lexical.type) r = n.lexical.indented; else for (var i = n.lexical; i && ")" == i.type && i.align; i = i.prev) r = i.indented;
                            n.lexical = new x(r, C.stream.column(), e, null, n.lexical, t)
                        };
                        return n.lex = !0, n
                    }

                    function z() {
                        var e = C.state;
                        e.lexical.prev && (")" == e.lexical.type && (e.indented = e.lexical.indented), e.lexical = e.lexical.prev)
                    }

                    function j(e) {
                        return function t(n) {
                            return n == e ? E() : ";" == e || "}" == n || ")" == n || "]" == n ? S() : E(t)
                        }
                    }

                    function W(e, t) {
                        return "var" == e ? E(I("vardef", t), be, j(";"), z) : "keyword a" == e ? E(I("form"), B, W, z) : "keyword b" == e ? E(I("form"), W, z) : "keyword d" == e ? C.stream.match(/^\s*$/, !1) ? E() : E(I("stat"), $, j(";"), z) : "debugger" == e ? E(j(";")) : "{" == e ? E(I("}"), R, se, z, D) : ";" == e ? E() : "if" == e ? ("else" == C.state.lexical.info && C.state.cc[C.state.cc.length - 1] == z && C.state.cc.pop()(), E(I("form"), B, W, z, Ee)) : "function" == e ? E(Me) : "for" == e ? E(I("form"), Te, W, z) : "class" == e || c && "interface" == t ? (C.marked = "keyword", E(I("form", "class" == e ? e : t), De, z)) : "variable" == e ? c && "declare" == t ? (C.marked = "keyword", E(W)) : c && ("module" == t || "enum" == t || "type" == t) && C.stream.match(/^\s*\w/, !1) ? (C.marked = "keyword", "enum" == t ? E(Ge) : "type" == t ? E(Pe, j("operator"), de, j(";")) : E(I("form"), we, j("{"), I("}"), se, z, z)) : c && "namespace" == t ? (C.marked = "keyword", E(I("form"), H, W, z)) : c && "abstract" == t ? (C.marked = "keyword", E(W)) : E(I("stat"), ee) : "switch" == e ? E(I("form"), B, j("{"), I("}", "switch"), R, se, z, z, D) : "case" == e ? E(H, j(":")) : "default" == e ? E(j(":")) : "catch" == e ? E(I("form"), L, F, W, z, D) : "export" == e ? E(I("stat"), We, z) : "import" == e ? E(I("stat"), He, z) : "async" == e ? E(W) : "@" == t ? E(H, W) : S(I("stat"), H, j(";"), z)
                    }

                    function F(e) {
                        if ("(" == e) return E(Le, j(")"))
                    }

                    function H(e, t) {
                        return V(e, t, !1)
                    }

                    function U(e, t) {
                        return V(e, t, !0)
                    }

                    function B(e) {
                        return "(" != e ? S() : E(I(")"), H, j(")"), z)
                    }

                    function V(e, t, n) {
                        if (C.state.fatArrowAt == C.stream.start) {
                            var r = n ? Q : Y;
                            if ("(" == e) return E(L, I(")"), oe(Le, ")"), z, j("=>"), r, D);
                            if ("variable" == e) return S(L, we, j("=>"), r, D)
                        }
                        var i, o = n ? G : K;
                        return w.hasOwnProperty(e) ? E(o) : "function" == e ? E(Me, o) : "class" == e || c && "interface" == t ? (C.marked = "keyword", E(I("form"), Re, z)) : "keyword c" == e || "async" == e ? E(n ? U : H) : "(" == e ? E(I(")"), $, j(")"), z, o) : "operator" == e || "spread" == e ? E(n ? U : H) : "[" == e ? E(I("]"), Ke, z, o) : "{" == e ? ae(ne, "}", null, o) : "quasi" == e ? S(q, o) : "new" == e ? E((i = n, function (e) {
                            return "." == e ? E(i ? J : Z) : "variable" == e && c ? E(ge, i ? G : K) : S(i ? U : H)
                        })) : "import" == e ? E(H) : E()
                    }

                    function $(e) {
                        return e.match(/[;\}\)\],]/) ? S() : S(H)
                    }

                    function K(e, t) {
                        return "," == e ? E(H) : G(e, t, !1)
                    }

                    function G(e, t, n) {
                        var r = 0 == n ? K : G, i = 0 == n ? H : U;
                        return "=>" == e ? E(L, n ? Q : Y, D) : "operator" == e ? /\+\+|--/.test(t) || c && "!" == t ? E(r) : c && "<" == t && C.stream.match(/^([^>]|<.*?>)*>\s*\(/, !1) ? E(I(">"), oe(de, ">"), z, r) : "?" == t ? E(H, j(":"), i) : E(i) : "quasi" == e ? S(q, r) : ";" != e ? "(" == e ? ae(U, ")", "call", r) : "." == e ? E(te, r) : "[" == e ? E(I("]"), $, j("]"), z, r) : c && "as" == t ? (C.marked = "keyword", E(de, r)) : "regexp" == e ? (C.state.lastType = C.marked = "operator", C.stream.backUp(C.stream.pos - C.stream.start - 1), E(i)) : void 0 : void 0
                    }

                    function q(e, t) {
                        return "quasi" != e ? S() : "${" != t.slice(t.length - 2) ? E(q) : E(H, X)
                    }

                    function X(e) {
                        if ("}" == e) return C.marked = "string-2", C.state.tokenize = v, E(q)
                    }

                    function Y(e) {
                        return b(C.stream, C.state), S("{" == e ? W : H)
                    }

                    function Q(e) {
                        return b(C.stream, C.state), S("{" == e ? W : U)
                    }

                    function Z(e, t) {
                        if ("target" == t) return C.marked = "keyword", E(K)
                    }

                    function J(e, t) {
                        if ("target" == t) return C.marked = "keyword", E(G)
                    }

                    function ee(e) {
                        return ":" == e ? E(z, W) : S(K, j(";"), z)
                    }

                    function te(e) {
                        if ("variable" == e) return C.marked = "property", E()
                    }

                    function ne(e, t) {
                        return "async" == e ? (C.marked = "property", E(ne)) : "variable" == e || "keyword" == C.style ? (C.marked = "property", "get" == t || "set" == t ? E(re) : (c && C.state.fatArrowAt == C.stream.start && (n = C.stream.match(/^\s*:\s*/, !1)) && (C.state.fatArrowAt = C.stream.pos + n[0].length), E(ie))) : "number" == e || "string" == e ? (C.marked = l ? "property" : C.style + " property", E(ie)) : "jsonld-keyword" == e ? E(ie) : c && N(t) ? (C.marked = "keyword", E(ne)) : "[" == e ? E(H, le, j("]"), ie) : "spread" == e ? E(U, ie) : "*" == t ? (C.marked = "keyword", E(ne)) : ":" == e ? S(ie) : void 0;
                        var n
                    }

                    function re(e) {
                        return "variable" != e ? S(ie) : (C.marked = "property", E(Me))
                    }

                    function ie(e) {
                        return ":" == e ? E(U) : "(" == e ? S(Me) : void 0
                    }

                    function oe(e, t, n) {
                        function r(i, o) {
                            if (n ? -1 < n.indexOf(i) : "," == i) {
                                var a = C.state.lexical;
                                return "call" == a.info && (a.pos = (a.pos || 0) + 1), E(function (n, r) {
                                    return n == t || r == t ? S() : S(e)
                                }, r)
                            }
                            return i == t || o == t ? E() : n && -1 < n.indexOf(";") ? S(e) : E(j(t))
                        }

                        return function (n, i) {
                            return n == t || i == t ? E() : S(e, r)
                        }
                    }

                    function ae(e, t, n) {
                        for (var r = 3; r < arguments.length; r++) C.cc.push(arguments[r]);
                        return E(I(t, n), oe(e, t), z)
                    }

                    function se(e) {
                        return "}" == e ? E() : S(W, se)
                    }

                    function le(e, t) {
                        if (c) {
                            if (":" == e) return E(de);
                            if ("?" == t) return E(le)
                        }
                    }

                    function ue(e, t) {
                        if (c && (":" == e || "in" == t)) return E(de)
                    }

                    function ce(e) {
                        if (c && ":" == e) return C.stream.match(/^\s*\w+\s+is\b/, !1) ? E(H, pe, de) : E(de)
                    }

                    function pe(e, t) {
                        if ("is" == t) return C.marked = "keyword", E()
                    }

                    function de(e, t) {
                        return "keyof" == t || "typeof" == t || "infer" == t ? (C.marked = "keyword", E("typeof" == t ? U : de)) : "variable" == e || "void" == t ? (C.marked = "type", E(me)) : "|" == t || "&" == t ? E(de) : "string" == e || "number" == e || "atom" == e ? E(me) : "[" == e ? E(I("]"), oe(de, "]", ","), z, me) : "{" == e ? E(I("}"), oe(he, "}", ",;"), z, me) : "(" == e ? E(oe(_e, ")"), fe, me) : "<" == e ? E(oe(de, ">"), de) : void 0
                    }

                    function fe(e) {
                        if ("=>" == e) return E(de)
                    }

                    function he(e, t) {
                        return "variable" == e || "keyword" == C.style ? (C.marked = "property", E(he)) : "?" == t || "number" == e || "string" == e ? E(he) : ":" == e ? E(de) : "[" == e ? E(j("variable"), ue, j("]"), he) : "(" == e ? S(Ae, he) : void 0
                    }

                    function _e(e, t) {
                        return "variable" == e && C.stream.match(/^\s*[?:]/, !1) || "?" == t ? E(_e) : ":" == e ? E(de) : "spread" == e ? E(_e) : S(de)
                    }

                    function me(e, t) {
                        return "<" == t ? E(I(">"), oe(de, ">"), z, me) : "|" == t || "." == e || "&" == t ? E(de) : "[" == e ? E(de, j("]"), me) : "extends" == t || "implements" == t ? (C.marked = "keyword", E(de)) : "?" == t ? E(de, j(":"), de) : void 0
                    }

                    function ge(e, t) {
                        if ("<" == t) return E(I(">"), oe(de, ">"), z, me)
                    }

                    function ve() {
                        return S(de, ye)
                    }

                    function ye(e, t) {
                        if ("=" == t) return E(de)
                    }

                    function be(e, t) {
                        return "enum" == t ? (C.marked = "keyword", E(Ge)) : S(we, le, Ce, Se)
                    }

                    function we(e, t) {
                        return c && N(t) ? (C.marked = "keyword", E(we)) : "variable" == e ? (O(t), E()) : "spread" == e ? E(we) : "[" == e ? ae(ke, "]") : "{" == e ? ae(xe, "}") : void 0
                    }

                    function xe(e, t) {
                        return "variable" != e || C.stream.match(/^\s*:/, !1) ? ("variable" == e && (C.marked = "property"), "spread" == e ? E(we) : "}" == e ? S() : "[" == e ? E(H, j("]"), j(":"), xe) : E(j(":"), we, Ce)) : (O(t), E(Ce))
                    }

                    function ke() {
                        return S(we, Ce)
                    }

                    function Ce(e, t) {
                        if ("=" == t) return E(U)
                    }

                    function Se(e) {
                        if ("," == e) return E(be)
                    }

                    function Ee(e, t) {
                        if ("keyword b" == e && "else" == t) return E(I("form", "else"), W, z)
                    }

                    function Te(e, t) {
                        return "await" == t ? E(Te) : "(" == e ? E(I(")"), Oe, z) : void 0
                    }

                    function Oe(e) {
                        return "var" == e ? E(be, Ne) : "variable" == e ? E(Ne) : S(Ne)
                    }

                    function Ne(e, t) {
                        return ")" == e ? E() : ";" == e ? E(Ne) : "in" == t || "of" == t ? (C.marked = "keyword", E(H, Ne)) : S(H, Ne)
                    }

                    function Me(e, t) {
                        return "*" == t ? (C.marked = "keyword", E(Me)) : "variable" == e ? (O(t), E(Me)) : "(" == e ? E(L, I(")"), oe(Le, ")"), z, ce, W, D) : c && "<" == t ? E(I(">"), oe(ve, ">"), z, Me) : void 0
                    }

                    function Ae(e, t) {
                        return "*" == t ? (C.marked = "keyword", E(Ae)) : "variable" == e ? (O(t), E(Ae)) : "(" == e ? E(L, I(")"), oe(Le, ")"), z, ce, D) : c && "<" == t ? E(I(">"), oe(ve, ">"), z, Ae) : void 0
                    }

                    function Pe(e, t) {
                        return "keyword" == e || "variable" == e ? (C.marked = "type", E(Pe)) : "<" == t ? E(I(">"), oe(ve, ">"), z) : void 0
                    }

                    function Le(e, t) {
                        return "@" == t && E(H, Le), "spread" == e ? E(Le) : c && N(t) ? (C.marked = "keyword", E(Le)) : c && "this" == e ? E(le, Ce) : S(we, le, Ce)
                    }

                    function Re(e, t) {
                        return "variable" == e ? De(e, t) : Ie(e, t)
                    }

                    function De(e, t) {
                        if ("variable" == e) return O(t), E(Ie)
                    }

                    function Ie(e, t) {
                        return "<" == t ? E(I(">"), oe(ve, ">"), z, Ie) : "extends" == t || "implements" == t || c && "," == e ? ("implements" == t && (C.marked = "keyword"), E(c ? de : H, Ie)) : "{" == e ? E(I("}"), ze, z) : void 0
                    }

                    function ze(e, t) {
                        return "async" == e || "variable" == e && ("static" == t || "get" == t || "set" == t || c && N(t)) && C.stream.match(/^\s+[\w$\xa1-\uffff]/, !1) ? (C.marked = "keyword", E(ze)) : "variable" == e || "keyword" == C.style ? (C.marked = "property", E(c ? je : Me, ze)) : "number" == e || "string" == e ? E(c ? je : Me, ze) : "[" == e ? E(H, le, j("]"), c ? je : Me, ze) : "*" == t ? (C.marked = "keyword", E(ze)) : c && "(" == e ? S(Ae, ze) : ";" == e || "," == e ? E(ze) : "}" == e ? E() : "@" == t ? E(H, ze) : void 0
                    }

                    function je(e, t) {
                        if ("?" == t) return E(je);
                        if (":" == e) return E(de, Ce);
                        if ("=" == t) return E(U);
                        var n = C.state.lexical.prev;
                        return S(n && "interface" == n.info ? Ae : Me)
                    }

                    function We(e, t) {
                        return "*" == t ? (C.marked = "keyword", E($e, j(";"))) : "default" == t ? (C.marked = "keyword", E(H, j(";"))) : "{" == e ? E(oe(Fe, "}"), $e, j(";")) : S(W)
                    }

                    function Fe(e, t) {
                        return "as" == t ? (C.marked = "keyword", E(j("variable"))) : "variable" == e ? S(U, Fe) : void 0
                    }

                    function He(e) {
                        return "string" == e ? E() : "(" == e ? S(H) : S(Ue, Be, $e)
                    }

                    function Ue(e, t) {
                        return "{" == e ? ae(Ue, "}") : ("variable" == e && O(t), "*" == t && (C.marked = "keyword"), E(Ve))
                    }

                    function Be(e) {
                        if ("," == e) return E(Ue, Be)
                    }

                    function Ve(e, t) {
                        if ("as" == t) return C.marked = "keyword", E(Ue)
                    }

                    function $e(e, t) {
                        if ("from" == t) return C.marked = "keyword", E(H)
                    }

                    function Ke(e) {
                        return "]" == e ? E() : S(oe(U, "]"))
                    }

                    function Ge() {
                        return S(I("form"), we, j("{"), I("}"), oe(qe, "}"), z, z)
                    }

                    function qe() {
                        return S(we, Ce)
                    }

                    function Xe(e, t, n) {
                        return t.tokenize == m && /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(t.lastType) || "quasi" == t.lastType && /\{\s*$/.test(e.string.slice(0, e.pos - (n || 0)))
                    }

                    return z.lex = D.lex = !0, {
                        startState: function (e) {
                            var t = {
                                tokenize: m,
                                lastType: "sof",
                                cc: [],
                                lexical: new x((e || 0) - o, 0, "block", !1),
                                localVars: n.localVars,
                                context: n.localVars && new M(null, null, !1),
                                indented: e || 0
                            };
                            return n.globalVars && "object" == s(n.globalVars) && (t.globalVars = n.globalVars), t
                        },
                        token: function (e, t) {
                            if (e.sol() && (t.lexical.hasOwnProperty("align") || (t.lexical.align = !1), t.indented = e.indentation(), b(e, t)), t.tokenize != g && e.eatSpace()) return null;
                            var n = t.tokenize(e, t);
                            return "comment" == r ? n : (t.lastType = "operator" != r || "++" != i && "--" != i ? r : "incdec", function (e, t, n, r, i) {
                                var o = e.cc;
                                for (C.state = e, C.stream = i, C.marked = null, C.cc = o, C.style = t, e.lexical.hasOwnProperty("align") || (e.lexical.align = !0); ;) if ((o.length ? o.pop() : u ? H : W)(n, r)) {
                                    for (; o.length && o[o.length - 1].lex;) o.pop()();
                                    return C.marked ? C.marked : "variable" == n && k(e, r) ? "variable-2" : t
                                }
                            }(t, n, r, i, e))
                        },
                        indent: function (t, r) {
                            if (t.tokenize == g) return e.Pass;
                            if (t.tokenize != m) return 0;
                            var i, s = r && r.charAt(0), l = t.lexical;
                            if (!/^\s*else\b/.test(r)) for (var u = t.cc.length - 1; 0 <= u; --u) {
                                var c = t.cc[u];
                                if (c == z) l = l.prev; else if (c != Ee) break
                            }
                            for (; ("stat" == l.type || "form" == l.type) && ("}" == s || (i = t.cc[t.cc.length - 1]) && (i == K || i == G) && !/^[,\.=+\-*:?[\(]/.test(r));) l = l.prev;
                            a && ")" == l.type && "stat" == l.prev.type && (l = l.prev);
                            var p, d, h = l.type, _ = s == h;
                            return "vardef" == h ? l.indented + ("operator" == t.lastType || "," == t.lastType ? l.info.length + 1 : 0) : "form" == h && "{" == s ? l.indented : "form" == h ? l.indented + o : "stat" == h ? l.indented + (d = r, "operator" == (p = t).lastType || "," == p.lastType || f.test(d.charAt(0)) || /[,.]/.test(d.charAt(0)) ? a || o : 0) : "switch" != l.info || _ || 0 == n.doubleIndentSwitch ? l.align ? l.column + (_ ? 0 : 1) : l.indented + (_ ? 0 : o) : l.indented + (/^(?:case|default)\b/.test(r) ? o : 2 * o)
                        },
                        electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
                        blockCommentStart: u ? null : "/*",
                        blockCommentEnd: u ? null : "*/",
                        blockCommentContinue: u ? null : " * ",
                        lineComment: u ? null : "//",
                        fold: "brace",
                        closeBrackets: "()[]{}''\"\"``",
                        helperType: u ? "json" : "javascript",
                        jsonldMode: l,
                        jsonMode: u,
                        expressionAllowed: Xe,
                        skipExpression: function (e) {
                            var t = e.cc[e.cc.length - 1];
                            t != H && t != U || e.cc.pop()
                        }
                    }
                }), e.registerHelper("wordChars", "javascript", /[\w$]/), e.defineMIME("text/javascript", "javascript"), e.defineMIME("text/ecmascript", "javascript"), e.defineMIME("application/javascript", "javascript"), e.defineMIME("application/x-javascript", "javascript"), e.defineMIME("application/ecmascript", "javascript"), e.defineMIME("application/json", {
                    name: "javascript",
                    json: !0
                }), e.defineMIME("application/x-json", {
                    name: "javascript",
                    json: !0
                }), e.defineMIME("application/ld+json", {
                    name: "javascript",
                    jsonld: !0
                }), e.defineMIME("text/typescript", {
                    name: "javascript",
                    typescript: !0
                }), e.defineMIME("application/typescript", {name: "javascript", typescript: !0})
            }, "object" == s(t) && "object" == s(e) ? a(n(176)) : (i = [n(176)], void 0 === (o = "function" == typeof (r = a) ? r.apply(t, i) : r) || (e.exports = o))
        }).call(this, n(55)(e))
    }, function (e, t, n) {
        (e.exports = n(1)(!1)).push([e.i, ".CodeMirror{font-family:monospace;height:300px;color:black;direction:ltr}.CodeMirror-lines{padding:4px 0}.CodeMirror pre{padding:0 4px}.CodeMirror-scrollbar-filler,.CodeMirror-gutter-filler{background-color:white}.CodeMirror-gutters{border-right:1px solid #ddd;background-color:#f7f7f7;white-space:nowrap}.CodeMirror-linenumber{padding:0 3px 0 5px;min-width:20px;text-align:right;color:#999;white-space:nowrap}.CodeMirror-guttermarker{color:black}.CodeMirror-guttermarker-subtle{color:#999}.CodeMirror-cursor{border-left:1px solid black;border-right:none;width:0}.CodeMirror div.CodeMirror-secondarycursor{border-left:1px solid silver}.cm-fat-cursor .CodeMirror-cursor{width:auto;border:0 !important;background:#7e7}.cm-fat-cursor div.CodeMirror-cursors{z-index:1}.cm-fat-cursor-mark{background-color:rgba(20,255,20,0.5);-webkit-animation:blink 1.06s steps(1) infinite;animation:blink 1.06s steps(1) infinite}.cm-animate-fat-cursor{width:auto;border:0;-webkit-animation:blink 1.06s steps(1) infinite;animation:blink 1.06s steps(1) infinite;background-color:#7e7}@-webkit-keyframes blink{0%{}50%{background-color:transparent}100%{}}@keyframes blink{0%{}50%{background-color:transparent}100%{}}.cm-tab{display:inline-block;text-decoration:inherit}.CodeMirror-rulers{position:absolute;left:0;right:0;top:-50px;bottom:-20px;overflow:hidden}.CodeMirror-ruler{border-left:1px solid #ccc;top:0;bottom:0;position:absolute}.cm-s-default .cm-header{color:blue}.cm-s-default .cm-quote{color:#090}.cm-negative{color:#d44}.cm-positive{color:#292}.cm-header,.cm-strong{font-weight:bold}.cm-em{font-style:italic}.cm-link{text-decoration:underline}.cm-strikethrough{text-decoration:line-through}.cm-s-default .cm-keyword{color:#708}.cm-s-default .cm-atom{color:#219}.cm-s-default .cm-number{color:#164}.cm-s-default .cm-def{color:#00f}.cm-s-default .cm-variable-2{color:#05a}.cm-s-default .cm-variable-3,.cm-s-default .cm-type{color:#085}.cm-s-default .cm-comment{color:#a50}.cm-s-default .cm-string{color:#a11}.cm-s-default .cm-string-2{color:#f50}.cm-s-default .cm-meta{color:#555}.cm-s-default .cm-qualifier{color:#555}.cm-s-default .cm-builtin{color:#30a}.cm-s-default .cm-bracket{color:#997}.cm-s-default .cm-tag{color:#170}.cm-s-default .cm-attribute{color:#00c}.cm-s-default .cm-hr{color:#999}.cm-s-default .cm-link{color:#00c}.cm-s-default .cm-error{color:#f00}.cm-invalidchar{color:#f00}.CodeMirror-composing{border-bottom:2px solid}div.CodeMirror span.CodeMirror-matchingbracket{color:#0b0}div.CodeMirror span.CodeMirror-nonmatchingbracket{color:#a22}.CodeMirror-matchingtag{background:rgba(255,150,0,0.3)}.CodeMirror-activeline-background{background:#e8f2ff}.CodeMirror{position:relative;overflow:hidden;background:white}.CodeMirror-scroll{overflow:scroll !important;margin-bottom:-30px;margin-right:-30px;padding-bottom:30px;height:100%;outline:none;position:relative}.CodeMirror-sizer{position:relative;border-right:30px solid transparent}.CodeMirror-vscrollbar,.CodeMirror-hscrollbar,.CodeMirror-scrollbar-filler,.CodeMirror-gutter-filler{position:absolute;z-index:6;display:none}.CodeMirror-vscrollbar{right:0;top:0;overflow-x:hidden;overflow-y:scroll}.CodeMirror-hscrollbar{bottom:0;left:0;overflow-y:hidden;overflow-x:scroll}.CodeMirror-scrollbar-filler{right:0;bottom:0}.CodeMirror-gutter-filler{left:0;bottom:0}.CodeMirror-gutters{position:absolute;left:0;top:0;min-height:100%;z-index:3}.CodeMirror-gutter{white-space:normal;height:100%;display:inline-block;vertical-align:top;margin-bottom:-30px}.CodeMirror-gutter-wrapper{position:absolute;z-index:4;background:none !important;border:none !important}.CodeMirror-gutter-background{position:absolute;top:0;bottom:0;z-index:4}.CodeMirror-gutter-elt{position:absolute;cursor:default;z-index:4}.CodeMirror-gutter-wrapper ::-moz-selection{background-color:transparent}.CodeMirror-gutter-wrapper ::selection{background-color:transparent}.CodeMirror-gutter-wrapper ::-moz-selection{background-color:transparent}.CodeMirror-lines{cursor:text;min-height:1px}.CodeMirror pre{border-radius:0;border-width:0;background:transparent;font-family:inherit;font-size:inherit;margin:0;white-space:pre;word-wrap:normal;line-height:inherit;color:inherit;z-index:2;position:relative;overflow:visible;-webkit-tap-highlight-color:transparent;-webkit-font-variant-ligatures:contextual;font-variant-ligatures:contextual}.CodeMirror-wrap pre{word-wrap:break-word;white-space:pre-wrap;word-break:normal}.CodeMirror-linebackground{position:absolute;left:0;right:0;top:0;bottom:0;z-index:0}.CodeMirror-linewidget{position:relative;z-index:2;padding:0.1px}.CodeMirror-rtl pre{direction:rtl}.CodeMirror-code{outline:none}.CodeMirror-scroll,.CodeMirror-sizer,.CodeMirror-gutter,.CodeMirror-gutters,.CodeMirror-linenumber{box-sizing:content-box}.CodeMirror-measure{position:absolute;width:100%;height:0;overflow:hidden;visibility:hidden}.CodeMirror-cursor{position:absolute;pointer-events:none}.CodeMirror-measure pre{position:static}div.CodeMirror-cursors{visibility:hidden;position:relative;z-index:3}div.CodeMirror-dragcursors{visibility:visible}.CodeMirror-focused div.CodeMirror-cursors{visibility:visible}.CodeMirror-selected{background:#d9d9d9}.CodeMirror-focused .CodeMirror-selected{background:#d7d4f0}.CodeMirror-crosshair{cursor:crosshair}.CodeMirror-line::-moz-selection,.CodeMirror-line>span::-moz-selection,.CodeMirror-line>span>span::-moz-selection{background:#d7d4f0}.CodeMirror-line::selection,.CodeMirror-line>span::selection,.CodeMirror-line>span>span::selection{background:#d7d4f0}.CodeMirror-line::-moz-selection,.CodeMirror-line>span::-moz-selection,.CodeMirror-line>span>span::-moz-selection{background:#d7d4f0}.cm-searching{background-color:#ffa;background-color:rgba(255,255,0,0.4)}.cm-force-border{padding-right:.1px}@media print{.CodeMirror div.CodeMirror-cursors{visibility:hidden}}.cm-tab-wrap-hack:after{content:''}span.CodeMirror-selectedtext{background:none}\n", ""])
    }, function (e, t, n) {
        (e.exports = n(1)(!1)).push([e.i, ".cm-s-nord.CodeMirror{background:#2e3440;color:#d8dee9}.cm-s-nord div.CodeMirror-selected{background:#434c5e}.cm-s-nord .CodeMirror-line::-moz-selection,.cm-s-nord .CodeMirror-line>span::-moz-selection,.cm-s-nord .CodeMirror-line>span>span::-moz-selection{background:#3b4252}.cm-s-nord .CodeMirror-line::selection,.cm-s-nord .CodeMirror-line>span::selection,.cm-s-nord .CodeMirror-line>span>span::selection{background:#3b4252}.cm-s-nord .CodeMirror-line::-moz-selection,.cm-s-nord .CodeMirror-line>span::-moz-selection,.cm-s-nord .CodeMirror-line>span>span::-moz-selection{background:#3b4252}.cm-s-nord .CodeMirror-gutters{background:#2e3440;border-right:0px}.cm-s-nord .CodeMirror-guttermarker{color:#4c566a}.cm-s-nord .CodeMirror-guttermarker-subtle{color:#4c566a}.cm-s-nord .CodeMirror-linenumber{color:#4c566a}.cm-s-nord .CodeMirror-cursor{border-left:1px solid #f8f8f0}.cm-s-nord span.cm-comment{color:#4c566a}.cm-s-nord span.cm-atom{color:#b48ead}.cm-s-nord span.cm-number{color:#b48ead}.cm-s-nord span.cm-comment.cm-attribute{color:#97b757}.cm-s-nord span.cm-comment.cm-def{color:#bc9262}.cm-s-nord span.cm-comment.cm-tag{color:#bc6283}.cm-s-nord span.cm-comment.cm-type{color:#5998a6}.cm-s-nord span.cm-property,.cm-s-nord span.cm-attribute{color:#8FBCBB}.cm-s-nord span.cm-keyword{color:#81A1C1}.cm-s-nord span.cm-builtin{color:#81A1C1}.cm-s-nord span.cm-string{color:#A3BE8C}.cm-s-nord span.cm-variable{color:#d8dee9}.cm-s-nord span.cm-variable-2{color:#d8dee9}.cm-s-nord span.cm-variable-3,.cm-s-nord span.cm-type{color:#d8dee9}.cm-s-nord span.cm-def{color:#8FBCBB}.cm-s-nord span.cm-bracket{color:#81A1C1}.cm-s-nord span.cm-tag{color:#bf616a}.cm-s-nord span.cm-header{color:#b48ead}.cm-s-nord span.cm-link{color:#b48ead}.cm-s-nord span.cm-error{background:#bf616a;color:#f8f8f0}.cm-s-nord .CodeMirror-activeline-background{background:#3b4252}.cm-s-nord .CodeMirror-matchingbracket{text-decoration:underline;color:white !important}\n", ""])
    }, function (e, t, n) {
        var r = n(272);
        "string" == typeof r && (r = [[e.i, r, ""]]);
        n(2)(r, {
            attrs: {"data-js": "kit"},
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        }), r.locals && (e.exports = r.locals)
    }, function (e, t, n) {
        (e.exports = n(1)(!1)).push([e.i, ".cm-s-neat span.cm-comment{color:#a86}.cm-s-neat span.cm-keyword{line-height:1em;font-weight:bold;color:blue}.cm-s-neat span.cm-string{color:#a22}.cm-s-neat span.cm-builtin{line-height:1em;font-weight:bold;color:#077}.cm-s-neat span.cm-special{line-height:1em;font-weight:bold;color:#0aa}.cm-s-neat span.cm-variable{color:black}.cm-s-neat span.cm-number,.cm-s-neat span.cm-atom{color:#3a3}.cm-s-neat span.cm-meta{color:#555}.cm-s-neat span.cm-link{color:#3a3}.cm-s-neat .CodeMirror-activeline-background{background:#e8f2ff}.cm-s-neat .CodeMirror-matchingbracket{outline:1px solid grey;color:black !important}\n", ""])
    }, function (e, t, n) {
        var r = n(274);
        "string" == typeof r && (r = [[e.i, r, ""]]);
        n(2)(r, {
            attrs: {"data-js": "kit"},
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        }), r.locals && (e.exports = r.locals)
    }, function (e, t, n) {
        (e.exports = n(1)(!1)).push([e.i, ".n1ed-sticky-dlg{display:none;background-color:rgba(0,0,0,0.42);position:fixed;top:0;left:0;width:calc(100vw - (100vw - 100%));height:calc(100vh - (100vh - 100%));overflow:hidden}.n1ed-sticky-dlg.n1ed-sticky-dlg--visible{display:block}.n1ed-sticky-dlg>.n1ed-sticky-dlg__content{position:fixed;top:0;left:300px;width:calc(100vw - (100vw - 100%) - 300px);height:calc(100vh - (100vh - 100%));background-color:white;box-sizing:border-box;overflow-y:auto}.n1ed-sticky-dlg>.n1ed-sticky-dlg__content.n1ed-sticky-dlg__content--right{left:0}.n1ed-sticky-dlg>.n1ed-sticky-dlg__content.n1ed-sticky-dlg__content--no-content-scroll{overflow:hidden}\n", ""])
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(8), i = n(0), o = n(223), a = n(14), s = n(276);
        t.n1ed_openDlgSource = function (e, t) {
            var l = {instance: e}, u = document.querySelector("body"), c = a.libHtml.createTagAndAdd(null, u),
                p = i.createRef(), d = n(279);
            l.instance.html = d(l.instance.html), r.render(i.createElement(o.N1EDStickyDlg, {
                instance: e,
                isVisible: !0,
                padding: "20px",
                ref: p
            }, i.createElement(s.AppN1EDSource, {
                config: l, onOk: function (e) {
                    t(e), p.current.close()
                }, onCancel: function () {
                    p.current.close()
                }
            })), c)
        }
    }, function (e, t, n) {
        "use strict";
        var r, i = this && this.__extends || (r = function (e, t) {
            return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
        }, function (e, t) {
            function n() {
                this.constructor = e
            }

            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }), o = this && this.__assign || function () {
            return (o = Object.assign || function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            }).apply(this, arguments)
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        var a = n(0), s = n(63), l = n(277), u = n(75), c = n(278), p = function (e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.store = s.createStore(l.reduce, {config: n.props.config}), n
            }

            return i(t, e), t.prototype.render = function () {
                return a.createElement(u.Provider, {store: this.store}, a.createElement(c.N1EDSource, o({}, this.props)))
            }, t
        }(a.Component);
        t.AppN1EDSource = p
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(224), i = n(216);
        t.reduce = function (e, t) {
            if (t.type !== r.CHANGE_HTML) return e;
            var n = Object.assign({}, e);
            return n.config.instance.html = t.value, e.config.validationFail = i.isHtmlCorrect(e.config.instance.html), n
        }
    }, function (e, t, n) {
        "use strict";
        var r, i = this && this.__extends || (r = function (e, t) {
            return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
        }, function (e, t) {
            function n() {
                this.constructor = e
            }

            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        });
        Object.defineProperty(t, "__esModule", {value: !0});
        var o = n(0);
        n(218);
        var a = n(219), s = n(5), l = n(75), u = n(9), c = n(224);
        n(220), n(221), n(222);
        var p = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }

            return i(t, e), t.prototype.componentDidMount = function () {
                var e = this;
                setTimeout(function () {
                    e.codeMirrorInstance.refresh()
                }, 1)
            }, t.prototype.render = function () {
                var e = this;
                return o.createElement("div", {className: "n1ed-edit-template"}, o.createElement("div", {className: "n1ed-edit-template--main"}, o.createElement(a.Controlled, {
                    value: this.props.config.instance.html,
                    onChange: function (e, t, n) {
                    },
                    onBeforeChange: function (t, n, r) {
                        e.props.onChangeHtml(r)
                    },
                    options: {mode: "xml", htmlMode: !0, theme: "nord", lineNumbers: !0},
                    editorDidMount: function (t) {
                        e.codeMirrorInstance = t
                    }
                }), o.createElement("div", {className: "n1ed-edit-template__buttons"}, o.createElement("div", {className: "n1ed-edit-template__buttons__make-permanent"}, "Warning: not careful editing of source HTML may break page layout"), o.createElement(s.N1EDButton, {
                    title: "Cancel",
                    onClick: function () {
                        e.props.onCancel()
                    }
                }), o.createElement(s.N1EDButton, {
                    title: "Save",
                    width: "180px",
                    style: s.N1EDButtonStyle.PRIMARY,
                    onClick: function () {
                        e.props.onOk(e.props.config.instance.html)
                    }
                }))))
            }, t
        }(o.Component);
        t.N1EDSourceUI = p, t.N1EDSource = l.connect(function (e, t) {
            return {config: u.cloneDeep(e.config)}
        }, function (e, t) {
            return {
                onChangeHtml: function (t) {
                    e(c.changeHtml(t))
                }
            }
        })(p)
    }, function (e, t, n) {
        "use strict";
        var r = n(280), i = n(282), o = n(287), a = {
            unformatted: ["code", "pre", "em", "strong", "span"],
            indent_inner_html: !0,
            indent_char: " ",
            indent_size: 2,
            sep: "\n"
        };
        e.exports = function (e, t) {
            var n = o({}, a, t);
            return e = r.html(e, n), !0 === n.ocd ? (n.newlines && (n.sep = n.newlines), i(e, n).replace(/^\s+/g, "").replace(/\s+$/g, "\n").replace(/(\s*<!--)/g, "\n$1").replace(/>(\s*)(?=<!--\s*\/)/g, "> ")) : e
        }
    }, function (e, t, n) {
        "use strict";
        var r, i;
        r = [n(206), n(207), n(281)], void 0 === (i = function (e, t, n) {
            return i = t, o = n, (a = function (e, t) {
                return r.js_beautify(e, t)
            }).js = (r = e).js_beautify, a.css = i.css_beautify, a.html = o.html_beautify, a.js_beautify = r.js_beautify, a.css_beautify = i.css_beautify, a.html_beautify = o.html_beautify, a;
            var r, i, o, a
        }.apply(t, r)) || (e.exports = i)
    }, function (e, t, n) {
        var r, i, o;

        function a(e) {
            return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        o = function (e) {
            var t = {};

            function n(r) {
                if (t[r]) return t[r].exports;
                var i = t[r] = {i: r, l: !1, exports: {}};
                return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
            }

            return n.m = e, n.c = t, n.d = function (e, t, r) {
                n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
            }, n.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
            }, n.t = function (e, t) {
                if (1 & t && (e = n(e)), 8 & t) return e;
                if (4 & t && "object" === a(e) && e && e.__esModule) return e;
                var r = Object.create(null);
                if (n.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e) for (var i in e) n.d(r, i, function (t) {
                    return e[t]
                }.bind(null, i));
                return r
            }, n.n = function (e) {
                var t = e && e.__esModule ? function () {
                    return e.default
                } : function () {
                    return e
                };
                return n.d(t, "a", t), t
            }, n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, n.p = "", n(n.s = 18)
        }([, , function (e, t, n) {
            "use strict";

            function r(e) {
                this.__parent = e, this.__character_count = 0, this.__indent_count = -1, this.__alignment_count = 0, this.__wrap_point_index = 0, this.__wrap_point_character_count = 0, this.__wrap_point_indent_count = -1, this.__wrap_point_alignment_count = 0, this.__items = []
            }

            function i(e, t) {
                this.__cache = [""], this.__indent_size = e.indent_size, this.__indent_string = e.indent_char, e.indent_with_tabs || (this.__indent_string = new Array(e.indent_size + 1).join(e.indent_char)), t = t || "", 0 < e.indent_level && (t = new Array(e.indent_level + 1).join(this.__indent_string)), this.__base_string = t, this.__base_string_length = t.length
            }

            function o(e, t) {
                this.__indent_cache = new i(e, t), this.raw = !1, this._end_with_newline = e.end_with_newline, this.indent_size = e.indent_size, this.wrap_line_length = e.wrap_line_length, this.indent_empty_lines = e.indent_empty_lines, this.__lines = [], this.previous_line = null, this.current_line = null, this.next_line = new r(this), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = !1, this.__add_outputline()
            }

            r.prototype.clone_empty = function () {
                var e = new r(this.__parent);
                return e.set_indent(this.__indent_count, this.__alignment_count), e
            }, r.prototype.item = function (e) {
                return e < 0 ? this.__items[this.__items.length + e] : this.__items[e]
            }, r.prototype.has_match = function (e) {
                for (var t = this.__items.length - 1; 0 <= t; t--) if (this.__items[t].match(e)) return !0;
                return !1
            }, r.prototype.set_indent = function (e, t) {
                this.is_empty() && (this.__indent_count = e || 0, this.__alignment_count = t || 0, this.__character_count = this.__parent.get_indent_size(this.__indent_count, this.__alignment_count))
            }, r.prototype._set_wrap_point = function () {
                this.__parent.wrap_line_length && (this.__wrap_point_index = this.__items.length, this.__wrap_point_character_count = this.__character_count, this.__wrap_point_indent_count = this.__parent.next_line.__indent_count, this.__wrap_point_alignment_count = this.__parent.next_line.__alignment_count)
            }, r.prototype._should_wrap = function () {
                return this.__wrap_point_index && this.__character_count > this.__parent.wrap_line_length && this.__wrap_point_character_count > this.__parent.next_line.__character_count
            }, r.prototype._allow_wrap = function () {
                if (this._should_wrap()) {
                    this.__parent.add_new_line();
                    var e = this.__parent.current_line;
                    return e.set_indent(this.__wrap_point_indent_count, this.__wrap_point_alignment_count), e.__items = this.__items.slice(this.__wrap_point_index), this.__items = this.__items.slice(0, this.__wrap_point_index), e.__character_count += this.__character_count - this.__wrap_point_character_count, this.__character_count = this.__wrap_point_character_count, " " === e.__items[0] && (e.__items.splice(0, 1), e.__character_count -= 1), !0
                }
                return !1
            }, r.prototype.is_empty = function () {
                return 0 === this.__items.length
            }, r.prototype.last = function () {
                return this.is_empty() ? null : this.__items[this.__items.length - 1]
            }, r.prototype.push = function (e) {
                this.__items.push(e);
                var t = e.lastIndexOf("\n");
                -1 !== t ? this.__character_count = e.length - t : this.__character_count += e.length
            }, r.prototype.pop = function () {
                var e = null;
                return this.is_empty() || (e = this.__items.pop(), this.__character_count -= e.length), e
            }, r.prototype._remove_indent = function () {
                0 < this.__indent_count && (this.__indent_count -= 1, this.__character_count -= this.__parent.indent_size)
            }, r.prototype._remove_wrap_indent = function () {
                0 < this.__wrap_point_indent_count && (this.__wrap_point_indent_count -= 1)
            }, r.prototype.trim = function () {
                for (; " " === this.last();) this.__items.pop(), this.__character_count -= 1
            }, r.prototype.toString = function () {
                var e = "";
                return this.is_empty() ? this.__parent.indent_empty_lines && (e = this.__parent.get_indent_string(this.__indent_count)) : (e = this.__parent.get_indent_string(this.__indent_count, this.__alignment_count), e += this.__items.join("")), e
            }, i.prototype.get_indent_size = function (e, t) {
                var n = this.__base_string_length;
                return t = t || 0, e < 0 && (n = 0), (n += e * this.__indent_size) + t
            }, i.prototype.get_indent_string = function (e, t) {
                var n = this.__base_string;
                return t = t || 0, e < 0 && (e = 0, n = ""), t += e * this.__indent_size, this.__ensure_cache(t), n + this.__cache[t]
            }, i.prototype.__ensure_cache = function (e) {
                for (; e >= this.__cache.length;) this.__add_column()
            }, i.prototype.__add_column = function () {
                var e = this.__cache.length, t = 0, n = "";
                this.__indent_size && e >= this.__indent_size && (e -= (t = Math.floor(e / this.__indent_size)) * this.__indent_size, n = new Array(t + 1).join(this.__indent_string)), e && (n += new Array(e + 1).join(" ")), this.__cache.push(n)
            }, o.prototype.__add_outputline = function () {
                this.previous_line = this.current_line, this.current_line = this.next_line.clone_empty(), this.__lines.push(this.current_line)
            }, o.prototype.get_line_number = function () {
                return this.__lines.length
            }, o.prototype.get_indent_string = function (e, t) {
                return this.__indent_cache.get_indent_string(e, t)
            }, o.prototype.get_indent_size = function (e, t) {
                return this.__indent_cache.get_indent_size(e, t)
            }, o.prototype.is_empty = function () {
                return !this.previous_line && this.current_line.is_empty()
            }, o.prototype.add_new_line = function (e) {
                return !(this.is_empty() || !e && this.just_added_newline() || (this.raw || this.__add_outputline(), 0))
            }, o.prototype.get_code = function (e) {
                this.trim(!0);
                var t = this.current_line.pop();
                t && ("\n" === t[t.length - 1] && (t = t.replace(/\n+$/g, "")), this.current_line.push(t)), this._end_with_newline && this.__add_outputline();
                var n = this.__lines.join("\n");
                return "\n" !== e && (n = n.replace(/[\n]/g, e)), n
            }, o.prototype.set_wrap_point = function () {
                this.current_line._set_wrap_point()
            }, o.prototype.set_indent = function (e, t) {
                return e = e || 0, t = t || 0, this.next_line.set_indent(e, t), 1 < this.__lines.length ? (this.current_line.set_indent(e, t), !0) : (this.current_line.set_indent(), !1)
            }, o.prototype.add_raw_token = function (e) {
                for (var t = 0; t < e.newlines; t++) this.__add_outputline();
                this.current_line.set_indent(-1), this.current_line.push(e.whitespace_before), this.current_line.push(e.text), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = !1
            }, o.prototype.add_token = function (e) {
                this.__add_space_before_token(), this.current_line.push(e), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = this.current_line._allow_wrap()
            }, o.prototype.__add_space_before_token = function () {
                this.space_before_token && !this.just_added_newline() && (this.non_breaking_space || this.set_wrap_point(), this.current_line.push(" "))
            }, o.prototype.remove_indent = function (e) {
                for (var t = this.__lines.length; e < t;) this.__lines[e]._remove_indent(), e++;
                this.current_line._remove_wrap_indent()
            }, o.prototype.trim = function (e) {
                for (e = void 0 !== e && e, this.current_line.trim(); e && 1 < this.__lines.length && this.current_line.is_empty();) this.__lines.pop(), this.current_line = this.__lines[this.__lines.length - 1], this.current_line.trim();
                this.previous_line = 1 < this.__lines.length ? this.__lines[this.__lines.length - 2] : null
            }, o.prototype.just_added_newline = function () {
                return this.current_line.is_empty()
            }, o.prototype.just_added_blankline = function () {
                return this.is_empty() || this.current_line.is_empty() && this.previous_line.is_empty()
            }, o.prototype.ensure_empty_line_above = function (e, t) {
                for (var n = this.__lines.length - 2; 0 <= n;) {
                    var i = this.__lines[n];
                    if (i.is_empty()) break;
                    if (0 !== i.item(0).indexOf(e) && i.item(-1) !== t) {
                        this.__lines.splice(n + 1, 0, new r(this)), this.previous_line = this.__lines[this.__lines.length - 2];
                        break
                    }
                    n--
                }
            }, e.exports.Output = o
        }, function (e, t, n) {
            "use strict";
            e.exports.Token = function (e, t, n, r) {
                this.type = e, this.text = t, this.comments_before = null, this.newlines = n || 0, this.whitespace_before = r || "", this.parent = null, this.next = null, this.previous = null, this.opened = null, this.closed = null, this.directives = null
            }
        }, , , function (e, t, n) {
            "use strict";

            function r(e, t) {
                this.raw_options = i(e, t), this.disabled = this._get_boolean("disabled"), this.eol = this._get_characters("eol", "auto"), this.end_with_newline = this._get_boolean("end_with_newline"), this.indent_size = this._get_number("indent_size", 4), this.indent_char = this._get_characters("indent_char", " "), this.indent_level = this._get_number("indent_level"), this.preserve_newlines = this._get_boolean("preserve_newlines", !0), this.max_preserve_newlines = this._get_number("max_preserve_newlines", 32786), this.preserve_newlines || (this.max_preserve_newlines = 0), this.indent_with_tabs = this._get_boolean("indent_with_tabs", "\t" === this.indent_char), this.indent_with_tabs && (this.indent_char = "\t", 1 === this.indent_size && (this.indent_size = 4)), this.wrap_line_length = this._get_number("wrap_line_length", this._get_number("max_char")), this.indent_empty_lines = this._get_boolean("indent_empty_lines"), this.templating = this._get_selection_list("templating", ["auto", "none", "django", "erb", "handlebars", "php"], ["auto"])
            }

            function i(e, t) {
                var n, r = {};
                for (n in e = o(e)) n !== t && (r[n] = e[n]);
                if (t && e[t]) for (n in e[t]) r[n] = e[t][n];
                return r
            }

            function o(e) {
                var t, n = {};
                for (t in e) n[t.replace(/-/g, "_")] = e[t];
                return n
            }

            r.prototype._get_array = function (e, t) {
                var n = this.raw_options[e], r = t || [];
                return "object" === a(n) ? null !== n && "function" == typeof n.concat && (r = n.concat()) : "string" == typeof n && (r = n.split(/[^a-zA-Z0-9_\/\-]+/)), r
            }, r.prototype._get_boolean = function (e, t) {
                var n = this.raw_options[e];
                return void 0 === n ? !!t : !!n
            }, r.prototype._get_characters = function (e, t) {
                var n = this.raw_options[e], r = t || "";
                return "string" == typeof n && (r = n.replace(/\\r/, "\r").replace(/\\n/, "\n").replace(/\\t/, "\t")), r
            }, r.prototype._get_number = function (e, t) {
                var n = this.raw_options[e];
                t = parseInt(t, 10), isNaN(t) && (t = 0);
                var r = parseInt(n, 10);
                return isNaN(r) && (r = t), r
            }, r.prototype._get_selection = function (e, t, n) {
                var r = this._get_selection_list(e, t, n);
                if (1 !== r.length) throw new Error("Invalid Option Value: The option '" + e + "' can only be one of the following values:\n" + t + "\nYou passed in: '" + this.raw_options[e] + "'");
                return r[0]
            }, r.prototype._get_selection_list = function (e, t, n) {
                if (!t || 0 === t.length) throw new Error("Selection list cannot be empty.");
                if (n = n || [t[0]], !this._is_valid_selection(n, t)) throw new Error("Invalid Default Value!");
                var r = this._get_array(e, n);
                if (!this._is_valid_selection(r, t)) throw new Error("Invalid Option Value: The option '" + e + "' can contain only the following values:\n" + t + "\nYou passed in: '" + this.raw_options[e] + "'");
                return r
            }, r.prototype._is_valid_selection = function (e, t) {
                return e.length && t.length && !e.some(function (e) {
                    return -1 === t.indexOf(e)
                })
            }, e.exports.Options = r, e.exports.normalizeOpts = o, e.exports.mergeOpts = i
        }, , function (e, t, n) {
            "use strict";
            var r = RegExp.prototype.hasOwnProperty("sticky");

            function i(e) {
                this.__input = e || "", this.__input_length = this.__input.length, this.__position = 0
            }

            i.prototype.restart = function () {
                this.__position = 0
            }, i.prototype.back = function () {
                0 < this.__position && (this.__position -= 1)
            }, i.prototype.hasNext = function () {
                return this.__position < this.__input_length
            }, i.prototype.next = function () {
                var e = null;
                return this.hasNext() && (e = this.__input.charAt(this.__position), this.__position += 1), e
            }, i.prototype.peek = function (e) {
                var t = null;
                return e = e || 0, 0 <= (e += this.__position) && e < this.__input_length && (t = this.__input.charAt(e)), t
            }, i.prototype.__match = function (e, t) {
                e.lastIndex = t;
                var n = e.exec(this.__input);
                return !n || r && e.sticky || n.index !== t && (n = null), n
            }, i.prototype.test = function (e, t) {
                return t = t || 0, 0 <= (t += this.__position) && t < this.__input_length && !!this.__match(e, t)
            }, i.prototype.testChar = function (e, t) {
                var n = this.peek(t);
                return e.lastIndex = 0, null !== n && e.test(n)
            }, i.prototype.match = function (e) {
                var t = this.__match(e, this.__position);
                return t ? this.__position += t[0].length : t = null, t
            }, i.prototype.read = function (e, t, n) {
                var r, i = "";
                return e && (r = this.match(e)) && (i += r[0]), !t || !r && e || (i += this.readUntil(t, n)), i
            }, i.prototype.readUntil = function (e, t) {
                var n, r = this.__position;
                e.lastIndex = this.__position;
                var i = e.exec(this.__input);
                return i ? (r = i.index, t && (r += i[0].length)) : r = this.__input_length, n = this.__input.substring(this.__position, r), this.__position = r, n
            }, i.prototype.readUntilAfter = function (e) {
                return this.readUntil(e, !0)
            }, i.prototype.get_regexp = function (e, t) {
                var n = null, i = "g";
                return t && r && (i = "y"), "string" == typeof e && "" !== e ? n = new RegExp(e, i) : e && (n = new RegExp(e.source, i)), n
            }, i.prototype.get_literal_regexp = function (e) {
                return RegExp(e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"))
            }, i.prototype.peekUntilAfter = function (e) {
                var t = this.__position, n = this.readUntilAfter(e);
                return this.__position = t, n
            }, i.prototype.lookBack = function (e) {
                var t = this.__position - 1;
                return t >= e.length && this.__input.substring(t - e.length, t).toLowerCase() === e
            }, e.exports.InputScanner = i
        }, function (e, t, n) {
            "use strict";
            var r = n(8).InputScanner, i = n(3).Token, o = n(10).TokenStream, a = n(11).WhitespacePattern,
                s = {START: "TK_START", RAW: "TK_RAW", EOF: "TK_EOF"}, l = function (e, t) {
                    this._input = new r(e), this._options = t || {}, this.__tokens = null, this._patterns = {}, this._patterns.whitespace = new a(this._input)
                };
            l.prototype.tokenize = function () {
                var e;
                this._input.restart(), this.__tokens = new o, this._reset();
                for (var t = new i(s.START, ""), n = null, r = [], a = new o; t.type !== s.EOF;) {
                    for (e = this._get_next_token(t, n); this._is_comment(e);) a.add(e), e = this._get_next_token(t, n);
                    a.isEmpty() || (e.comments_before = a, a = new o), e.parent = n, this._is_opening(e) ? (r.push(n), n = e) : n && this._is_closing(e, n) && ((e.opened = n).closed = e, n = r.pop(), e.parent = n), (e.previous = t).next = e, this.__tokens.add(e), t = e
                }
                return this.__tokens
            }, l.prototype._is_first_token = function () {
                return this.__tokens.isEmpty()
            }, l.prototype._reset = function () {
            }, l.prototype._get_next_token = function (e, t) {
                this._readWhitespace();
                var n = this._input.read(/.+/g);
                return n ? this._create_token(s.RAW, n) : this._create_token(s.EOF, "")
            }, l.prototype._is_comment = function (e) {
                return !1
            }, l.prototype._is_opening = function (e) {
                return !1
            }, l.prototype._is_closing = function (e, t) {
                return !1
            }, l.prototype._create_token = function (e, t) {
                return new i(e, t, this._patterns.whitespace.newline_count, this._patterns.whitespace.whitespace_before_token)
            }, l.prototype._readWhitespace = function () {
                return this._patterns.whitespace.read()
            }, e.exports.Tokenizer = l, e.exports.TOKEN = s
        }, function (e, t, n) {
            "use strict";

            function r(e) {
                this.__tokens = [], this.__tokens_length = this.__tokens.length, this.__position = 0, this.__parent_token = e
            }

            r.prototype.restart = function () {
                this.__position = 0
            }, r.prototype.isEmpty = function () {
                return 0 === this.__tokens_length
            }, r.prototype.hasNext = function () {
                return this.__position < this.__tokens_length
            }, r.prototype.next = function () {
                var e = null;
                return this.hasNext() && (e = this.__tokens[this.__position], this.__position += 1), e
            }, r.prototype.peek = function (e) {
                var t = null;
                return e = e || 0, 0 <= (e += this.__position) && e < this.__tokens_length && (t = this.__tokens[e]), t
            }, r.prototype.add = function (e) {
                this.__parent_token && (e.parent = this.__parent_token), this.__tokens.push(e), this.__tokens_length += 1
            }, e.exports.TokenStream = r
        }, function (e, t, n) {
            "use strict";
            var r = n(12).Pattern;

            function i(e, t) {
                r.call(this, e, t), t ? this._line_regexp = this._input.get_regexp(t._line_regexp) : this.__set_whitespace_patterns("", ""), this.newline_count = 0, this.whitespace_before_token = ""
            }

            (i.prototype = new r).__set_whitespace_patterns = function (e, t) {
                e += "\\t ", t += "\\n\\r", this._match_pattern = this._input.get_regexp("[" + e + t + "]+", !0), this._newline_regexp = this._input.get_regexp("\\r\\n|[" + t + "]")
            }, i.prototype.read = function () {
                this.newline_count = 0, this.whitespace_before_token = "";
                var e = this._input.read(this._match_pattern);
                if (" " === e) this.whitespace_before_token = " "; else if (e) {
                    var t = this.__split(this._newline_regexp, e);
                    this.newline_count = t.length - 1, this.whitespace_before_token = t[this.newline_count]
                }
                return e
            }, i.prototype.matching = function (e, t) {
                var n = this._create();
                return n.__set_whitespace_patterns(e, t), n._update(), n
            }, i.prototype._create = function () {
                return new i(this._input, this)
            }, i.prototype.__split = function (e, t) {
                for (var n = e.lastIndex = 0, r = [], i = e.exec(t); i;) r.push(t.substring(n, i.index)), n = i.index + i[0].length, i = e.exec(t);
                return n < t.length ? r.push(t.substring(n, t.length)) : r.push(""), r
            }, e.exports.WhitespacePattern = i
        }, function (e, t, n) {
            "use strict";

            function r(e, t) {
                this._input = e, this._starting_pattern = null, this._match_pattern = null, this._until_pattern = null, this._until_after = !1, t && (this._starting_pattern = this._input.get_regexp(t._starting_pattern, !0), this._match_pattern = this._input.get_regexp(t._match_pattern, !0), this._until_pattern = this._input.get_regexp(t._until_pattern), this._until_after = t._until_after)
            }

            r.prototype.read = function () {
                var e = this._input.read(this._starting_pattern);
                return this._starting_pattern && !e || (e += this._input.read(this._match_pattern, this._until_pattern, this._until_after)), e
            }, r.prototype.read_match = function () {
                return this._input.match(this._match_pattern)
            }, r.prototype.until_after = function (e) {
                var t = this._create();
                return t._until_after = !0, t._until_pattern = this._input.get_regexp(e), t._update(), t
            }, r.prototype.until = function (e) {
                var t = this._create();
                return t._until_after = !1, t._until_pattern = this._input.get_regexp(e), t._update(), t
            }, r.prototype.starting_with = function (e) {
                var t = this._create();
                return t._starting_pattern = this._input.get_regexp(e, !0), t._update(), t
            }, r.prototype.matching = function (e) {
                var t = this._create();
                return t._match_pattern = this._input.get_regexp(e, !0), t._update(), t
            }, r.prototype._create = function () {
                return new r(this._input, this)
            }, r.prototype._update = function () {
            }, e.exports.Pattern = r
        }, function (e, t, n) {
            "use strict";

            function r(e, t) {
                e = "string" == typeof e ? e : e.source, t = "string" == typeof t ? t : t.source, this.__directives_block_pattern = new RegExp(e + / beautify( \w+[:]\w+)+ /.source + t, "g"), this.__directive_pattern = / (\w+)[:](\w+)/g, this.__directives_end_ignore_pattern = new RegExp(e + /\sbeautify\signore:end\s/.source + t, "g")
            }

            r.prototype.get_directives = function (e) {
                if (!e.match(this.__directives_block_pattern)) return null;
                var t = {};
                this.__directive_pattern.lastIndex = 0;
                for (var n = this.__directive_pattern.exec(e); n;) t[n[1]] = n[2], n = this.__directive_pattern.exec(e);
                return t
            }, r.prototype.readIgnored = function (e) {
                return e.readUntilAfter(this.__directives_end_ignore_pattern)
            }, e.exports.Directives = r
        }, function (e, t, n) {
            "use strict";
            var r = n(12).Pattern, i = {django: !1, erb: !1, handlebars: !1, php: !1};

            function o(e, t) {
                r.call(this, e, t), this.__template_pattern = null, this._disabled = Object.assign({}, i), this._excluded = Object.assign({}, i), t && (this.__template_pattern = this._input.get_regexp(t.__template_pattern), this._excluded = Object.assign(this._excluded, t._excluded), this._disabled = Object.assign(this._disabled, t._disabled));
                var n = new r(e);
                this.__patterns = {
                    handlebars_comment: n.starting_with(/{{!--/).until_after(/--}}/),
                    handlebars_unescaped: n.starting_with(/{{{/).until_after(/}}}/),
                    handlebars: n.starting_with(/{{/).until_after(/}}/),
                    php: n.starting_with(/<\?(?:[=]|php)/).until_after(/\?>/),
                    erb: n.starting_with(/<%[^%]/).until_after(/[^%]%>/),
                    django: n.starting_with(/{%/).until_after(/%}/),
                    django_value: n.starting_with(/{{/).until_after(/}}/),
                    django_comment: n.starting_with(/{#/).until_after(/#}/)
                }
            }

            (o.prototype = new r)._create = function () {
                return new o(this._input, this)
            }, o.prototype._update = function () {
                this.__set_templated_pattern()
            }, o.prototype.disable = function (e) {
                var t = this._create();
                return t._disabled[e] = !0, t._update(), t
            }, o.prototype.read_options = function (e) {
                var t = this._create();
                for (var n in i) t._disabled[n] = -1 === e.templating.indexOf(n);
                return t._update(), t
            }, o.prototype.exclude = function (e) {
                var t = this._create();
                return t._excluded[e] = !0, t._update(), t
            }, o.prototype.read = function () {
                var e = "";
                e = this._match_pattern ? this._input.read(this._starting_pattern) : this._input.read(this._starting_pattern, this.__template_pattern);
                for (var t = this._read_template(); t;) this._match_pattern ? t += this._input.read(this._match_pattern) : t += this._input.readUntil(this.__template_pattern), e += t, t = this._read_template();
                return this._until_after && (e += this._input.readUntilAfter(this._until_pattern)), e
            }, o.prototype.__set_templated_pattern = function () {
                var e = [];
                this._disabled.php || e.push(this.__patterns.php._starting_pattern.source), this._disabled.handlebars || e.push(this.__patterns.handlebars._starting_pattern.source), this._disabled.erb || e.push(this.__patterns.erb._starting_pattern.source), this._disabled.django || (e.push(this.__patterns.django._starting_pattern.source), e.push(this.__patterns.django_value._starting_pattern.source), e.push(this.__patterns.django_comment._starting_pattern.source)), this._until_pattern && e.push(this._until_pattern.source), this.__template_pattern = this._input.get_regexp("(?:" + e.join("|") + ")")
            }, o.prototype._read_template = function () {
                var e = "", t = this._input.peek();
                if ("<" === t) {
                    var n = this._input.peek(1);
                    this._disabled.php || this._excluded.php || "?" !== n || (e = e || this.__patterns.php.read()), this._disabled.erb || this._excluded.erb || "%" !== n || (e = e || this.__patterns.erb.read())
                } else "{" === t && (this._disabled.handlebars || this._excluded.handlebars || (e = (e = (e = e || this.__patterns.handlebars_comment.read()) || this.__patterns.handlebars_unescaped.read()) || this.__patterns.handlebars.read()), this._disabled.django || (this._excluded.django || this._excluded.handlebars || (e = e || this.__patterns.django_value.read()), this._excluded.django || (e = (e = e || this.__patterns.django_comment.read()) || this.__patterns.django.read())));
                return e
            }, e.exports.TemplatablePattern = o
        }, , , , function (e, t, n) {
            "use strict";
            var r = n(19).Beautifier, i = n(20).Options;
            e.exports = function (e, t, n, i) {
                return new r(e, t, n, i).beautify()
            }, e.exports.defaultOptions = function () {
                return new i
            }
        }, function (e, t, n) {
            "use strict";
            var r = n(20).Options, i = n(2).Output, o = n(21).Tokenizer, a = n(21).TOKEN, s = /\r\n|[\r\n]/,
                l = /\r\n|[\r\n]/g, u = function (e, t) {
                    this.indent_level = 0, this.alignment_size = 0, this.max_preserve_newlines = e.max_preserve_newlines, this.preserve_newlines = e.preserve_newlines, this._output = new i(e, t)
                };
            u.prototype.current_line_has_match = function (e) {
                return this._output.current_line.has_match(e)
            }, u.prototype.set_space_before_token = function (e, t) {
                this._output.space_before_token = e, this._output.non_breaking_space = t
            }, u.prototype.set_wrap_point = function () {
                this._output.set_indent(this.indent_level, this.alignment_size), this._output.set_wrap_point()
            }, u.prototype.add_raw_token = function (e) {
                this._output.add_raw_token(e)
            }, u.prototype.print_preserved_newlines = function (e) {
                var t = 0;
                e.type !== a.TEXT && e.previous.type !== a.TEXT && (t = e.newlines ? 1 : 0), this.preserve_newlines && (t = e.newlines < this.max_preserve_newlines + 1 ? e.newlines : this.max_preserve_newlines + 1);
                for (var n = 0; n < t; n++) this.print_newline(0 < n);
                return 0 !== t
            }, u.prototype.traverse_whitespace = function (e) {
                return !(!e.whitespace_before && !e.newlines || (this.print_preserved_newlines(e) || (this._output.space_before_token = !0), 0))
            }, u.prototype.previous_token_wrapped = function () {
                return this._output.previous_token_wrapped
            }, u.prototype.print_newline = function (e) {
                this._output.add_new_line(e)
            }, u.prototype.print_token = function (e) {
                e.text && (this._output.set_indent(this.indent_level, this.alignment_size), this._output.add_token(e.text))
            }, u.prototype.indent = function () {
                this.indent_level++
            }, u.prototype.get_full_indent = function (e) {
                return (e = this.indent_level + (e || 0)) < 1 ? "" : this._output.get_indent_string(e)
            };

            function c(e, t) {
                return -1 !== t.indexOf(e)
            }

            function p(e, t, n) {
                this.parent = e || null, this.tag = t ? t.tag_name : "", this.indent_level = n || 0, this.parser_token = t || null
            }

            function d(e) {
                this._printer = e, this._current_frame = null
            }

            function f(e, t, n, i) {
                this._source_text = e || "", t = t || {}, this._js_beautify = n, this._css_beautify = i, this._tag_stack = null;
                var o = new r(t, "html");
                this._options = o, this._is_wrap_attributes_force = "force" === this._options.wrap_attributes.substr(0, "force".length), this._is_wrap_attributes_force_expand_multiline = "force-expand-multiline" === this._options.wrap_attributes, this._is_wrap_attributes_force_aligned = "force-aligned" === this._options.wrap_attributes, this._is_wrap_attributes_aligned_multiple = "aligned-multiple" === this._options.wrap_attributes, this._is_wrap_attributes_preserve = "preserve" === this._options.wrap_attributes.substr(0, "preserve".length), this._is_wrap_attributes_preserve_aligned = "preserve-aligned" === this._options.wrap_attributes
            }

            d.prototype.get_parser_token = function () {
                return this._current_frame ? this._current_frame.parser_token : null
            }, d.prototype.record_tag = function (e) {
                var t = new p(this._current_frame, e, this._printer.indent_level);
                this._current_frame = t
            }, d.prototype._try_pop_frame = function (e) {
                var t = null;
                return e && (t = e.parser_token, this._printer.indent_level = e.indent_level, this._current_frame = e.parent), t
            }, d.prototype._get_frame = function (e, t) {
                for (var n = this._current_frame; n && -1 === e.indexOf(n.tag);) {
                    if (t && -1 !== t.indexOf(n.tag)) {
                        n = null;
                        break
                    }
                    n = n.parent
                }
                return n
            }, d.prototype.try_pop = function (e, t) {
                var n = this._get_frame([e], t);
                return this._try_pop_frame(n)
            }, d.prototype.indent_to_tag = function (e) {
                var t = this._get_frame(e);
                t && (this._printer.indent_level = t.indent_level)
            }, f.prototype.beautify = function () {
                if (this._options.disabled) return this._source_text;
                var e = this._source_text, t = this._options.eol;
                "auto" === this._options.eol && (t = "\n", e && s.test(e) && (t = e.match(s)[0]));
                var n = (e = e.replace(l, "\n")).match(/^[\t ]*/)[0], r = {text: "", type: ""}, i = new h,
                    c = new u(this._options, n), p = new o(e, this._options).tokenize();
                this._tag_stack = new d(c);
                for (var f = null, _ = p.next(); _.type !== a.EOF;) _.type === a.TAG_OPEN || _.type === a.COMMENT ? i = f = this._handle_tag_open(c, _, i, r) : _.type === a.ATTRIBUTE || _.type === a.EQUALS || _.type === a.VALUE || _.type === a.TEXT && !i.tag_complete ? f = this._handle_inside_tag(c, _, i, p) : _.type === a.TAG_CLOSE ? f = this._handle_tag_close(c, _, i) : _.type === a.TEXT ? f = this._handle_text(c, _, i) : c.add_raw_token(_), r = f, _ = p.next();
                return c._output.get_code(t)
            }, f.prototype._handle_tag_close = function (e, t, n) {
                var r = {text: t.text, type: t.type};
                return e.alignment_size = 0, n.tag_complete = !0, e.set_space_before_token(t.newlines || "" !== t.whitespace_before, !0), n.is_unformatted ? e.add_raw_token(t) : ("<" === n.tag_start_char && (e.set_space_before_token("/" === t.text[0], !0), this._is_wrap_attributes_force_expand_multiline && n.has_wrapped_attrs && e.print_newline(!1)), e.print_token(t)), !n.indent_content || n.is_unformatted || n.is_content_unformatted || (e.indent(), n.indent_content = !1), n.is_inline_element || n.is_unformatted || n.is_content_unformatted || e.set_wrap_point(), r
            }, f.prototype._handle_inside_tag = function (e, t, n, r) {
                var i = n.has_wrapped_attrs, o = {text: t.text, type: t.type};
                if (e.set_space_before_token(t.newlines || "" !== t.whitespace_before, !0), n.is_unformatted) e.add_raw_token(t); else if ("{" === n.tag_start_char && t.type === a.TEXT) e.print_preserved_newlines(t) ? (t.newlines = 0, e.add_raw_token(t)) : e.print_token(t); else {
                    if (t.type === a.ATTRIBUTE ? (e.set_space_before_token(!0), n.attr_count += 1) : t.type === a.EQUALS ? e.set_space_before_token(!1) : t.type === a.VALUE && t.previous.type === a.EQUALS && e.set_space_before_token(!1), t.type === a.ATTRIBUTE && "<" === n.tag_start_char && ((this._is_wrap_attributes_preserve || this._is_wrap_attributes_preserve_aligned) && (e.traverse_whitespace(t), i = i || 0 !== t.newlines), this._is_wrap_attributes_force)) {
                        var s = 1 < n.attr_count;
                        if (this._is_wrap_attributes_force_expand_multiline && 1 === n.attr_count) {
                            var l, u = !0, c = 0;
                            do {
                                if ((l = r.peek(c)).type === a.ATTRIBUTE) {
                                    u = !1;
                                    break
                                }
                                c += 1
                            } while (c < 4 && l.type !== a.EOF && l.type !== a.TAG_CLOSE);
                            s = !u
                        }
                        s && (e.print_newline(!1), i = !0)
                    }
                    e.print_token(t), i = i || e.previous_token_wrapped(), n.has_wrapped_attrs = i
                }
                return o
            }, f.prototype._handle_text = function (e, t, n) {
                var r = {text: t.text, type: "TK_CONTENT"};
                return n.custom_beautifier_name ? this._print_custom_beatifier_text(e, t, n) : n.is_unformatted || n.is_content_unformatted ? e.add_raw_token(t) : (e.traverse_whitespace(t), e.print_token(t)), r
            }, f.prototype._print_custom_beatifier_text = function (e, t, n) {
                var r = this;
                if ("" !== t.text) {
                    var i, o = t.text, a = 1, s = "", l = "";
                    "javascript" === n.custom_beautifier_name && "function" == typeof this._js_beautify ? i = this._js_beautify : "css" === n.custom_beautifier_name && "function" == typeof this._css_beautify ? i = this._css_beautify : "html" === n.custom_beautifier_name && (i = function (e, t) {
                        return new f(e, t, r._js_beautify, r._css_beautify).beautify()
                    }), "keep" === this._options.indent_scripts ? a = 0 : "separate" === this._options.indent_scripts && (a = -e.indent_level);
                    var u = e.get_full_indent(a);
                    if (o = o.replace(/\n[ \t]*$/, ""), "html" !== n.custom_beautifier_name && "<" === o[0] && o.match(/^(<!--|<!\[CDATA\[)/)) {
                        var c = /^(<!--[^\n]*|<!\[CDATA\[)(\n?)([ \t\n]*)([\s\S]*)(-->|]]>)$/.exec(o);
                        if (!c) return void e.add_raw_token(t);
                        s = u + c[1] + "\n", o = c[4], c[5] && (l = u + c[5]), o = o.replace(/\n[ \t]*$/, ""), (c[2] || -1 !== c[3].indexOf("\n")) && (c = c[3].match(/[ \t]+$/)) && (t.whitespace_before = c[0])
                    }
                    if (o) if (i) {
                        var p = function () {
                            this.eol = "\n"
                        };
                        p.prototype = this._options.raw_options, o = i(u + o, new p)
                    } else {
                        var d = t.whitespace_before;
                        d && (o = o.replace(new RegExp("\n(" + d + ")?", "g"), "\n")), o = u + o.replace(/\n/g, "\n" + u)
                    }
                    s && (o = o ? s + o + "\n" + l : s + l), e.print_newline(!1), o && (t.text = o, t.whitespace_before = "", t.newlines = 0, e.add_raw_token(t), e.print_newline(!0))
                }
            }, f.prototype._handle_tag_open = function (e, t, n, r) {
                var i = this._get_tag_open_token(t);
                return (n.is_unformatted || n.is_content_unformatted) && t.type === a.TAG_OPEN && 0 === t.text.indexOf("</") ? e.add_raw_token(t) : (e.traverse_whitespace(t), this._set_tag_position(e, t, i, n, r), i.is_inline_element || e.set_wrap_point(), e.print_token(t)), (this._is_wrap_attributes_force_aligned || this._is_wrap_attributes_aligned_multiple || this._is_wrap_attributes_preserve_aligned) && (i.alignment_size = t.text.length + 1), i.tag_complete || i.is_unformatted || (e.alignment_size = i.alignment_size), i
            };
            var h = function (e, t) {
                var n;
                this.parent = e || null, this.text = "", this.type = "TK_TAG_OPEN", this.tag_name = "", this.is_inline_element = !1, this.is_unformatted = !1, this.is_content_unformatted = !1, this.is_empty_element = !1, this.is_start_tag = !1, this.is_end_tag = !1, this.indent_content = !1, this.multiline_content = !1, this.custom_beautifier_name = null, this.start_tag_token = null, this.attr_count = 0, this.has_wrapped_attrs = !1, this.alignment_size = 0, this.tag_complete = !1, this.tag_start_char = "", this.tag_check = "", t ? (this.tag_start_char = t.text[0], this.text = t.text, n = "<" === this.tag_start_char ? t.text.match(/^<([^\s>]*)/) : t.text.match(/^{{[#\^]?([^\s}]+)/), this.tag_check = n ? n[1] : "", this.tag_check = this.tag_check.toLowerCase(), t.type === a.COMMENT && (this.tag_complete = !0), this.is_start_tag = "/" !== this.tag_check.charAt(0), this.tag_name = this.is_start_tag ? this.tag_check : this.tag_check.substr(1), this.is_end_tag = !this.is_start_tag || t.closed && "/>" === t.closed.text, this.is_end_tag = this.is_end_tag || "{" === this.tag_start_char && (this.text.length < 3 || /[^#\^]/.test(this.text.charAt(2)))) : this.tag_complete = !0
            };
            f.prototype._get_tag_open_token = function (e) {
                var t = new h(this._tag_stack.get_parser_token(), e);
                return t.alignment_size = this._options.wrap_attributes_indent_size, t.is_end_tag = t.is_end_tag || c(t.tag_check, this._options.void_elements), t.is_empty_element = t.tag_complete || t.is_start_tag && t.is_end_tag, t.is_unformatted = !t.tag_complete && c(t.tag_check, this._options.unformatted), t.is_content_unformatted = !t.is_empty_element && c(t.tag_check, this._options.content_unformatted), t.is_inline_element = c(t.tag_name, this._options.inline) || "{" === t.tag_start_char, t
            }, f.prototype._set_tag_position = function (e, t, n, r, i) {
                n.is_empty_element || (n.is_end_tag ? n.start_tag_token = this._tag_stack.try_pop(n.tag_name) : (this._do_optional_end_element(n) && (n.is_inline_element || (n.parent && (n.parent.multiline_content = !0), e.print_newline(!1))), this._tag_stack.record_tag(n), "script" !== n.tag_name && "style" !== n.tag_name || n.is_unformatted || n.is_content_unformatted || (n.custom_beautifier_name = function (e, t) {
                    var n = null, r = null;
                    return t.closed ? ("script" === e ? n = "text/javascript" : "style" === e && (n = "text/css"), -1 < (n = function (e) {
                        for (var t = null, n = e.next; n.type !== a.EOF && e.closed !== n;) {
                            if (n.type === a.ATTRIBUTE && "type" === n.text) {
                                n.next && n.next.type === a.EQUALS && n.next.next && n.next.next.type === a.VALUE && (t = n.next.next.text);
                                break
                            }
                            n = n.next
                        }
                        return t
                    }(t) || n).search("text/css") ? r = "css" : -1 < n.search(/(text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect)/) ? r = "javascript" : -1 < n.search(/(text|application|dojo)\/(x-)?(html)/) ? r = "html" : -1 < n.search(/test\/null/) && (r = "null"), r) : null
                }(n.tag_check, t)))), c(n.tag_check, this._options.extra_liners) && (e.print_newline(!1), e._output.just_added_blankline() || e.print_newline(!0)), n.is_empty_element ? ("{" === n.tag_start_char && "else" === n.tag_check && (this._tag_stack.indent_to_tag(["if", "unless", "each"]), n.indent_content = !0, e.current_line_has_match(/{{#if/) || e.print_newline(!1)), "!--" === n.tag_name && i.type === a.TAG_CLOSE && r.is_end_tag && -1 === n.text.indexOf("\n") || n.is_inline_element || n.is_unformatted || e.print_newline(!1)) : n.is_unformatted || n.is_content_unformatted ? n.is_inline_element || n.is_unformatted || e.print_newline(!1) : n.is_end_tag ? (n.start_tag_token && n.start_tag_token.multiline_content || !(n.is_inline_element || r.is_inline_element || i.type === a.TAG_CLOSE && n.start_tag_token === r || "TK_CONTENT" === i.type)) && e.print_newline(!1) : (n.indent_content = !n.custom_beautifier_name, "<" === n.tag_start_char && ("html" === n.tag_name ? n.indent_content = this._options.indent_inner_html : "head" === n.tag_name ? n.indent_content = this._options.indent_head_inner_html : "body" === n.tag_name && (n.indent_content = this._options.indent_body_inner_html)), n.is_inline_element || "TK_CONTENT" === i.type || (n.parent && (n.parent.multiline_content = !0), e.print_newline(!1)))
            }, f.prototype._do_optional_end_element = function (e) {
                var t = null;
                if (!e.is_empty_element && e.is_start_tag && e.parent) return "body" === e.tag_name ? t = t || this._tag_stack.try_pop("head") : "li" === e.tag_name ? t = t || this._tag_stack.try_pop("li", ["ol", "ul"]) : "dd" === e.tag_name || "dt" === e.tag_name ? t = (t = t || this._tag_stack.try_pop("dt", ["dl"])) || this._tag_stack.try_pop("dd", ["dl"]) : "rp" === e.tag_name || "rt" === e.tag_name ? t = (t = t || this._tag_stack.try_pop("rt", ["ruby", "rtc"])) || this._tag_stack.try_pop("rp", ["ruby", "rtc"]) : "optgroup" === e.tag_name ? t = t || this._tag_stack.try_pop("optgroup", ["select"]) : "option" === e.tag_name ? t = t || this._tag_stack.try_pop("option", ["select", "datalist", "optgroup"]) : "colgroup" === e.tag_name ? t = t || this._tag_stack.try_pop("caption", ["table"]) : "thead" === e.tag_name ? t = (t = t || this._tag_stack.try_pop("caption", ["table"])) || this._tag_stack.try_pop("colgroup", ["table"]) : "tbody" === e.tag_name || "tfoot" === e.tag_name ? t = (t = (t = (t = t || this._tag_stack.try_pop("caption", ["table"])) || this._tag_stack.try_pop("colgroup", ["table"])) || this._tag_stack.try_pop("thead", ["table"])) || this._tag_stack.try_pop("tbody", ["table"]) : "tr" === e.tag_name ? t = (t = (t = t || this._tag_stack.try_pop("caption", ["table"])) || this._tag_stack.try_pop("colgroup", ["table"])) || this._tag_stack.try_pop("tr", ["table", "thead", "tbody", "tfoot"]) : "th" !== e.tag_name && "td" !== e.tag_name || (t = (t = t || this._tag_stack.try_pop("td", ["table", "thead", "tbody", "tfoot", "tr"])) || this._tag_stack.try_pop("th", ["table", "thead", "tbody", "tfoot", "tr"])), e.parent = this._tag_stack.get_parser_token(), t
            }, e.exports.Beautifier = f
        }, function (e, t, n) {
            "use strict";
            var r = n(6).Options;

            function i(e) {
                r.call(this, e, "html"), 1 === this.templating.length && "auto" === this.templating[0] && (this.templating = ["django", "erb", "handlebars", "php"]), this.indent_inner_html = this._get_boolean("indent_inner_html"), this.indent_body_inner_html = this._get_boolean("indent_body_inner_html", !0), this.indent_head_inner_html = this._get_boolean("indent_head_inner_html", !0), this.indent_handlebars = this._get_boolean("indent_handlebars", !0), this.wrap_attributes = this._get_selection("wrap_attributes", ["auto", "force", "force-aligned", "force-expand-multiline", "aligned-multiple", "preserve", "preserve-aligned"]), this.wrap_attributes_indent_size = this._get_number("wrap_attributes_indent_size", this.indent_size), this.extra_liners = this._get_array("extra_liners", ["head", "body", "/html"]), this.inline = this._get_array("inline", ["a", "abbr", "area", "audio", "b", "bdi", "bdo", "br", "button", "canvas", "cite", "code", "data", "datalist", "del", "dfn", "em", "embed", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "map", "mark", "math", "meter", "noscript", "object", "output", "progress", "q", "ruby", "s", "samp", "select", "small", "span", "strong", "sub", "sup", "svg", "template", "textarea", "time", "u", "var", "video", "wbr", "text", "acronym", "big", "strike", "tt"]), this.void_elements = this._get_array("void_elements", ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr", "!doctype", "?xml", "basefont", "isindex"]), this.unformatted = this._get_array("unformatted", []), this.content_unformatted = this._get_array("content_unformatted", ["pre", "textarea"]), this.unformatted_content_delimiter = this._get_characters("unformatted_content_delimiter"), this.indent_scripts = this._get_selection("indent_scripts", ["normal", "keep", "separate"])
            }

            i.prototype = new r, e.exports.Options = i
        }, function (e, t, n) {
            "use strict";
            var r = n(9).Tokenizer, i = n(9).TOKEN, o = n(13).Directives, a = n(14).TemplatablePattern,
                s = n(12).Pattern, l = {
                    TAG_OPEN: "TK_TAG_OPEN",
                    TAG_CLOSE: "TK_TAG_CLOSE",
                    ATTRIBUTE: "TK_ATTRIBUTE",
                    EQUALS: "TK_EQUALS",
                    VALUE: "TK_VALUE",
                    COMMENT: "TK_COMMENT",
                    TEXT: "TK_TEXT",
                    UNKNOWN: "TK_UNKNOWN",
                    START: i.START,
                    RAW: i.RAW,
                    EOF: i.EOF
                }, u = new o(/<\!--/, /-->/), c = function (e, t) {
                    r.call(this, e, t), this._current_tag_name = "";
                    var n = new a(this._input).read_options(this._options), i = new s(this._input);
                    if (this.__patterns = {
                        word: n.until(/[\n\r\t <]/),
                        single_quote: n.until_after(/'/),
                        double_quote: n.until_after(/"/),
                        attribute: n.until(/[\n\r\t =\/>]/),
                        element_name: n.until(/[\n\r\t >\/]/),
                        handlebars_comment: i.starting_with(/{{!--/).until_after(/--}}/),
                        handlebars: i.starting_with(/{{/).until_after(/}}/),
                        handlebars_open: i.until(/[\n\r\t }]/),
                        handlebars_raw_close: i.until(/}}/),
                        comment: i.starting_with(/<!--/).until_after(/-->/),
                        cdata: i.starting_with(/<!\[CDATA\[/).until_after(/]]>/),
                        conditional_comment: i.starting_with(/<!\[/).until_after(/]>/),
                        processing: i.starting_with(/<\?/).until_after(/\?>/)
                    }, this._options.indent_handlebars && (this.__patterns.word = this.__patterns.word.exclude("handlebars")), this._unformatted_content_delimiter = null, this._options.unformatted_content_delimiter) {
                        var o = this._input.get_literal_regexp(this._options.unformatted_content_delimiter);
                        this.__patterns.unformatted_content_delimiter = i.matching(o).until_after(o)
                    }
                };
            (c.prototype = new r)._is_comment = function (e) {
                return !1
            }, c.prototype._is_opening = function (e) {
                return e.type === l.TAG_OPEN
            }, c.prototype._is_closing = function (e, t) {
                return e.type === l.TAG_CLOSE && t && ((">" === e.text || "/>" === e.text) && "<" === t.text[0] || "}}" === e.text && "{" === t.text[0] && "{" === t.text[1])
            }, c.prototype._reset = function () {
                this._current_tag_name = ""
            }, c.prototype._get_next_token = function (e, t) {
                var n = null;
                this._readWhitespace();
                var r = this._input.peek();
                return null === r ? this._create_token(l.EOF, "") : n = (n = (n = (n = (n = (n = (n = (n = (n = n || this._read_open_handlebars(r, t)) || this._read_attribute(r, e, t)) || this._read_raw_content(r, e, t)) || this._read_close(r, t)) || this._read_content_word(r)) || this._read_comment_or_cdata(r)) || this._read_processing(r)) || this._read_open(r, t)) || this._create_token(l.UNKNOWN, this._input.next())
            }, c.prototype._read_comment_or_cdata = function (e) {
                var t = null, n = null, r = null;
                return "<" === e && ("!" === this._input.peek(1) && ((n = this.__patterns.comment.read()) ? (r = u.get_directives(n)) && "start" === r.ignore && (n += u.readIgnored(this._input)) : n = this.__patterns.cdata.read()), n && ((t = this._create_token(l.COMMENT, n)).directives = r)), t
            }, c.prototype._read_processing = function (e) {
                var t = null, n = null;
                if ("<" === e) {
                    var r = this._input.peek(1);
                    "!" !== r && "?" !== r || (n = (n = this.__patterns.conditional_comment.read()) || this.__patterns.processing.read()), n && ((t = this._create_token(l.COMMENT, n)).directives = null)
                }
                return t
            }, c.prototype._read_open = function (e, t) {
                var n = null, r = null;
                return t || "<" === e && (n = this._input.next(), "/" === this._input.peek() && (n += this._input.next()), n += this.__patterns.element_name.read(), r = this._create_token(l.TAG_OPEN, n)), r
            }, c.prototype._read_open_handlebars = function (e, t) {
                var n = null, r = null;
                return t || this._options.indent_handlebars && "{" === e && "{" === this._input.peek(1) && (r = "!" === this._input.peek(2) ? (n = (n = this.__patterns.handlebars_comment.read()) || this.__patterns.handlebars.read(), this._create_token(l.COMMENT, n)) : (n = this.__patterns.handlebars_open.read(), this._create_token(l.TAG_OPEN, n))), r
            }, c.prototype._read_close = function (e, t) {
                var n = null, r = null;
                return t && ("<" === t.text[0] && (">" === e || "/" === e && ">" === this._input.peek(1)) ? (n = this._input.next(), "/" === e && (n += this._input.next()), r = this._create_token(l.TAG_CLOSE, n)) : "{" === t.text[0] && "}" === e && "}" === this._input.peek(1) && (this._input.next(), this._input.next(), r = this._create_token(l.TAG_CLOSE, "}}"))), r
            }, c.prototype._read_attribute = function (e, t, n) {
                var r = null, i = "";
                if (n && "<" === n.text[0]) if ("=" === e) r = this._create_token(l.EQUALS, this._input.next()); else if ('"' === e || "'" === e) {
                    var o = this._input.next();
                    o += '"' === e ? this.__patterns.double_quote.read() : this.__patterns.single_quote.read(), r = this._create_token(l.VALUE, o)
                } else (i = this.__patterns.attribute.read()) && (r = t.type === l.EQUALS ? this._create_token(l.VALUE, i) : this._create_token(l.ATTRIBUTE, i));
                return r
            }, c.prototype._is_content_unformatted = function (e) {
                return -1 === this._options.void_elements.indexOf(e) && (-1 !== this._options.content_unformatted.indexOf(e) || -1 !== this._options.unformatted.indexOf(e))
            }, c.prototype._read_raw_content = function (e, t, n) {
                var r = "";
                if (n && "{" === n.text[0]) r = this.__patterns.handlebars_raw_close.read(); else if (t.type === l.TAG_CLOSE && "<" === t.opened.text[0]) {
                    var i = t.opened.text.substr(1).toLowerCase();
                    if ("script" === i || "style" === i) {
                        var o = this._read_comment_or_cdata(e);
                        if (o) return o.type = l.TEXT, o;
                        r = this._input.readUntil(new RegExp("</" + i + "[\\n\\r\\t ]*?>", "ig"))
                    } else this._is_content_unformatted(i) && (r = this._input.readUntil(new RegExp("</" + i + "[\\n\\r\\t ]*?>", "ig")))
                }
                return r ? this._create_token(l.TEXT, r) : null
            }, c.prototype._read_content_word = function (e) {
                var t = "";
                if (this._options.unformatted_content_delimiter && e === this._options.unformatted_content_delimiter[0] && (t = this.__patterns.unformatted_content_delimiter.read()), t || (t = this.__patterns.word.read()), t) return this._create_token(l.TEXT, t)
            }, e.exports.Tokenizer = c, e.exports.TOKEN = l
        }]), r = [n, n(206), n(207)], void 0 === (i = function (e) {
            var t = n(206), r = n(207);
            return {
                html_beautify: function (e, n) {
                    return o(e, n, t.js_beautify, r.css_beautify)
                }
            }
        }.apply(t, r)) || (e.exports = i)
    }, function (e, t, n) {
        "use strict";
        var r = n(283), i = n(284), o = n(285);
        e.exports = function (e, t) {
            var n, a = i({}, t), s = a.sep || "\n\n", l = a.min;
            return "number" == typeof l && 2 !== l && (n = new RegExp("(\\r\\n|\\n|\\u2424) {" + l + ",}")), void 0 === n && (n = a.regex || /(\r\n|\n|\u2424){2,}/g), !0 !== a.keepWhitespace && (e = e.split("\n").map(function (e) {
                return r(e) ? e.trim() : e
            }).join("\n")), (e = function (e, t) {
                var n = t.trailingNewline;
                if (!1 === n) return e;
                switch (o(n)) {
                    case"string":
                        e = e.replace(/\s+$/, t.trailingNewline);
                        break;
                    case"function":
                        e = t.trailingNewline(e);
                        break;
                    case"undefined":
                    case"boolean":
                    default:
                        e = e.replace(/\s+$/, "\n")
                }
                return e
            }(e, a)).replace(n, s)
        }
    }, function (e, t, n) {
        "use strict";
        var r;
        e.exports = function (e) {
            return "string" == typeof e && (r || (r = new RegExp('^[\\s\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"]+$'))).test(e)
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(225);

        function i(e, t) {
            for (var n in t) r = t, i = n, Object.prototype.hasOwnProperty.call(r, i) && (e[n] = t[n]);
            var r, i
        }

        e.exports = function (e) {
            r(e) || (e = {});
            for (var t = arguments.length, n = 1; n < t; n++) {
                var o = arguments[n];
                r(o) && i(e, o)
            }
            return e
        }
    }, function (e, t, n) {
        var r = n(286), i = Object.prototype.toString;
        e.exports = function (e) {
            if (void 0 === e) return "undefined";
            if (null === e) return "null";
            if (!0 === e || !1 === e || e instanceof Boolean) return "boolean";
            if ("string" == typeof e || e instanceof String) return "string";
            if ("number" == typeof e || e instanceof Number) return "number";
            if ("function" == typeof e || e instanceof Function) return "function";
            if (void 0 !== Array.isArray && Array.isArray(e)) return "array";
            if (e instanceof RegExp) return "regexp";
            if (e instanceof Date) return "date";
            var t = i.call(e);
            return "[object RegExp]" === t ? "regexp" : "[object Date]" === t ? "date" : "[object Arguments]" === t ? "arguments" : "[object Error]" === t ? "error" : r(e) ? "buffer" : "[object Set]" === t ? "set" : "[object WeakSet]" === t ? "weakset" : "[object Map]" === t ? "map" : "[object WeakMap]" === t ? "weakmap" : "[object Symbol]" === t ? "symbol" : "[object Int8Array]" === t ? "int8array" : "[object Uint8Array]" === t ? "uint8array" : "[object Uint8ClampedArray]" === t ? "uint8clampedarray" : "[object Int16Array]" === t ? "int16array" : "[object Uint16Array]" === t ? "uint16array" : "[object Int32Array]" === t ? "int32array" : "[object Uint32Array]" === t ? "uint32array" : "[object Float32Array]" === t ? "float32array" : "[object Float64Array]" === t ? "float64array" : "object"
        }
    }, function (e, t) {
        function n(e) {
            return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        }

        e.exports = function (e) {
            return null != e && (n(e) || "function" == typeof (t = e).readFloatLE && "function" == typeof t.slice && n(t.slice(0, 0)) || !!e._isBuffer);
            var t
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(225);

        function i(e, t) {
            for (var n in t) r = t, i = n, Object.prototype.hasOwnProperty.call(r, i) && (e[n] = t[n]);
            var r, i
        }

        e.exports = function (e) {
            r(e) || (e = {});
            for (var t = arguments.length, n = 1; n < t; n++) {
                var o = arguments[n];
                r(o) && i(e, o)
            }
            return e
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(14), i = n(0), o = n(8), a = n(289), s = n(292);
        t.n1ed_openDlgSectionTemplates = function (e, t, n) {
            var l = document.querySelector("body"), u = r.libHtml.createTagAndAdd(null, l), c = i.createRef();
            o.render(i.createElement(a.N1EDStickySidebar, {
                instance: e,
                isVisible: !0,
                padding: "0",
                noContentScroll: !1,
                ref: c,
                isWidthByContent: !0
            }, i.createElement(s.PanelSectionTemplates, {
                onTemplateSelected: function (e) {
                    c.current.close(), n(e)
                }
            })), u)
        }
    }, function (e, t, n) {
        "use strict";
        var r, i = this && this.__extends || (r = function (e, t) {
            return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
        }, function (e, t) {
            function n() {
                this.constructor = e
            }

            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        });
        Object.defineProperty(t, "__esModule", {value: !0});
        var o = n(13);
        n(290);
        var a = function (e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.el.classList.add("n1ed-sticky-sidebar"), n.props.instance.isLeft || n.el.classList.add("n1ed-sticky-sidebar--right"), n.props.isWidthByContent && n.el.classList.add("n1ed-sticky-sidebar--width-by-content"), n
            }

            return i(t, e), t
        }(o.N1EDDlg);
        t.N1EDStickySidebar = a
    }, function (e, t, n) {
        var r = n(291);
        "string" == typeof r && (r = [[e.i, r, ""]]);
        n(2)(r, {
            attrs: {"data-js": "kit"},
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        }), r.locals && (e.exports = r.locals)
    }, function (e, t, n) {
        (e.exports = n(1)(!1)).push([e.i, ".n1ed-sticky-sidebar{position:fixed;top:0;left:0;width:300px;height:100vh}.n1ed-sticky-sidebar.n1ed-sticky-sidebar--width-by-content{overflow-x:visible;width:100vw}.n1ed-sticky-sidebar.n1ed-sticky-sidebar--width-by-content>.n1ed-dlg__content{width:auto}.n1ed-sticky-sidebar.n1ed-sticky-sidebar--right{left:inherit;right:0}.n1ed-sticky-sidebar>.n1ed-dlg__content{position:absolute;left:0;top:0;width:100%;height:100%;border:none;background-color:white}.n1ed-sticky-sidebar.n1ed-sticky-sidebar--second-level{left:301px}.n1ed-sticky-sidebar.n1ed-sticky-sidebar--second-level.n1ed-sticky-sidebar--right{left:inherit;right:calc(100vw - 301px)}\n", ""])
    }, function (e, t, n) {
        "use strict";
        var r, i = this && this.__extends || (r = function (e, t) {
            return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
        }, function (e, t) {
            function n() {
                this.constructor = e
            }

            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        });
        Object.defineProperty(t, "__esModule", {value: !0});
        var o = n(0);
        n(293), t.SECTION_TEMPLATES = [{
            title: "Content",
            templates: [{
                title: "Header, paragraph and buttons",
                html: '\n                    <div class="$$col-12 $$text-center $$py-3">\n                        <h1>We make things well</h1>\n                        <p>Work with our the best things and get the good experience in all things you do for you client who love you.</p>\n                        <a class="$$btn $$btn-primary" href="#">Start now</a>\n                        <a class="$$btn $$btn-link" href="#">Read more</a>\n                  </div>\n                '
            }]
        }, {
            title: "Structure",
            templates: [{
                title: "[12]",
                html: '\n                    <div class="$$col-12">12/12</div>\n                '
            }, {
                title: "[6][6]",
                html: '\n                    <div class="$$col-6">6/12</div>\n                    <div class="$$col-6">6/12</div>\n                '
            }, {
                title: "[4][4][4]",
                html: '\n                    <div class="$$col-4">4/12</div>\n                    <div class="$$col-4">4/12</div>\n                    <div class="$$col-4">4/12</div>\n                '
            }, {
                title: "[3][3][3][3]",
                html: '\n                    <div class="$$col-3">3/12</div>\n                    <div class="$$col-3">3/12</div>\n                    <div class="$$col-3">3/12</div>\n                    <div class="$$col-3">3/12</div>\n                '
            }, {
                title: "[8][4]",
                html: '\n                    <div class="$$col-8">8/12</div>\n                    <div class="$$col-4">4/12</div>\n                '
            }, {
                title: "[4][8]",
                html: '\n                    <div class="$$col-4">4/12</div>\n                    <div class="$$col-8">8/12</div>\n                '
            }, {
                title: "[6][3][3]",
                html: '\n                    <div class="$$col-6">6/12</div>\n                    <div class="$$col-3">3/12</div>\n                    <div class="$$col-3">3/12</div>\n                '
            }, {
                title: "[3][3][6]",
                html: '\n                    <div class="$$col-3">3/12</div>\n                    <div class="$$col-3">3/12</div>\n                    <div class="$$col-6">6/12</div>\n                '
            }, {
                title: "[9][3]",
                html: '\n                    <div class="$$col-9">9/12</div>\n                    <div class="$$col-3">3/12</div>\n                '
            }, {
                title: "[3][9]",
                html: '\n                    <div class="$$col-3">3/12</div>\n                    <div class="$$col-9">9/12</div>\n                '
            }, {
                title: "[7][5]",
                html: '\n                    <div class="$$col-7">7/12</div>\n                    <div class="$$col-5">5/12</div>\n                '
            }, {
                title: "[5][7]",
                html: '\n                    <div class="$$col-5">5/12</div>\n                    <div class="$$col-7">7/12</div>\n                '
            }]
        }];
        var a = function (e) {
            function n() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {categorySelected: null}, t
            }

            return i(n, e), n.prototype.render = function () {
                var e = this;
                return o.createElement("div", {className: "n1ed-panel-section-templates" + (this.state.categorySelected ? " n1ed-panel-section-templates--wide" : "")}, o.createElement("div", {className: "n1ed-panel-section-templates__categories"}, o.createElement("div", {className: "n1ed-panel-section-templates__categories__header"}, "Block templates"), o.createElement("div", {className: "n1ed-panel-section-templates__categories__content"}, t.SECTION_TEMPLATES.map(function (t) {
                    return o.createElement("div", {
                        key: t.title,
                        className: "n1ed-panel-section-templates__categories__content__category" + (e.state.categorySelected === t ? " n1ed-panel-section-templates__categories__content__category--selected" : ""),
                        onMouseEnter: function () {
                            e.onSectionSelect(t)
                        }
                    }, t.title)
                }))), this.state.categorySelected && o.createElement("div", {className: "n1ed-panel-section-templates__templates"}, t.SECTION_TEMPLATES.find(function (t) {
                    return t === e.state.categorySelected
                }).templates.map(function (t) {
                    return o.createElement("div", {
                        key: t.title,
                        className: "n1ed-panel-section-templates__templates__template",
                        onClick: function () {
                            e.props.onTemplateSelected(t.html)
                        }
                    }, t.title)
                })))
            }, n.prototype.onSectionSelect = function (e) {
                this.setState({categorySelected: e})
            }, n
        }(o.Component);
        t.PanelSectionTemplates = a
    }, function (e, t, n) {
        var r = n(294);
        "string" == typeof r && (r = [[e.i, r, ""]]);
        n(2)(r, {
            attrs: {"data-js": "kit"},
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        }), r.locals && (e.exports = r.locals)
    }, function (e, t, n) {
        (e.exports = n(1)(!1)).push([e.i, ".n1ed-panel-section-templates{display:flex;min-width:300px;max-width:300px;width:300px;height:100%}.n1ed-panel-section-templates.n1ed-panel-section-templates--wide{min-width:800px;max-width:800px;width:800px}.n1ed-panel-section-templates .n1ed-panel-section-templates__categories{flex:0 0 300px}.n1ed-panel-section-templates .n1ed-panel-section-templates__categories .n1ed-panel-section-templates__categories__header{font-size:20px;font-weight:bold;margin:30px 0;text-align:center;width:100%}.n1ed-panel-section-templates .n1ed-panel-section-templates__categories .n1ed-panel-section-templates__categories__content{display:flex;flex-direction:column;width:100%;box-sizing:border-box}.n1ed-panel-section-templates .n1ed-panel-section-templates__categories .n1ed-panel-section-templates__categories__content .n1ed-panel-section-templates__categories__content__category{width:100%;cursor:pointer;padding:10px 0 10px 40px;box-sizing:border-box;font-size:18px}.n1ed-panel-section-templates .n1ed-panel-section-templates__categories .n1ed-panel-section-templates__categories__content .n1ed-panel-section-templates__categories__content__category.n1ed-panel-section-templates__categories__content__category--selected,.n1ed-panel-section-templates .n1ed-panel-section-templates__categories .n1ed-panel-section-templates__categories__content .n1ed-panel-section-templates__categories__content__category:hover{background-color:#eee}.n1ed-panel-section-templates .n1ed-panel-section-templates__templates{flex:0 0 500px;box-sizing:border-box;padding:15px;background-color:#eee}.n1ed-panel-section-templates .n1ed-panel-section-templates__templates .n1ed-panel-section-templates__templates__template{width:100%;min-height:100px;border:2px solid #ccc;border-radius:3px;cursor:pointer;background-color:white;box-sizing:border-box;display:flex;justify-content:center;align-items:center}.n1ed-panel-section-templates .n1ed-panel-section-templates__templates .n1ed-panel-section-templates__templates__template:not(:last-child){margin-bottom:15px}.n1ed-panel-section-templates .n1ed-panel-section-templates__templates .n1ed-panel-section-templates__templates__template:hover{border-color:#007FFF}\n", ""])
    }])
});