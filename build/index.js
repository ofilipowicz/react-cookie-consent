/*! For license information please see index.js.LICENSE.txt */
!(function () {
  var e = {
      808: function (e, t, n) {
        var o, r, i;
        void 0 ===
          (r =
            "function" ==
            typeof (o = i =
              function () {
                function e() {
                  for (var e = 0, t = {}; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var o in n) t[o] = n[o];
                  }
                  return t;
                }
                function t(e) {
                  return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
                }
                return (function n(o) {
                  function r() {}
                  function i(t, n, i) {
                    if ("undefined" != typeof document) {
                      "number" == typeof (i = e({ path: "/" }, r.defaults, i)).expires &&
                        (i.expires = new Date(1 * new Date() + 864e5 * i.expires)),
                        (i.expires = i.expires ? i.expires.toUTCString() : "");
                      try {
                        var c = JSON.stringify(n);
                        /^[\{\[]/.test(c) && (n = c);
                      } catch (e) {}
                      (n = o.write
                        ? o.write(n, t)
                        : encodeURIComponent(String(n)).replace(
                            /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                            decodeURIComponent
                          )),
                        (t = encodeURIComponent(String(t))
                          .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                          .replace(/[\(\)]/g, escape));
                      var a = "";
                      for (var l in i)
                        i[l] && ((a += "; " + l), !0 !== i[l] && (a += "=" + i[l].split(";")[0]));
                      return (document.cookie = t + "=" + n + a);
                    }
                  }
                  function c(e, n) {
                    if ("undefined" != typeof document) {
                      for (
                        var r = {}, i = document.cookie ? document.cookie.split("; ") : [], c = 0;
                        c < i.length;
                        c++
                      ) {
                        var a = i[c].split("="),
                          l = a.slice(1).join("=");
                        n || '"' !== l.charAt(0) || (l = l.slice(1, -1));
                        try {
                          var u = t(a[0]);
                          if (((l = (o.read || o)(l, u) || t(l)), n))
                            try {
                              l = JSON.parse(l);
                            } catch (e) {}
                          if (((r[u] = l), e === u)) break;
                        } catch (e) {}
                      }
                      return e ? r[e] : r;
                    }
                  }
                  return (
                    (r.set = i),
                    (r.get = function (e) {
                      return c(e, !1);
                    }),
                    (r.getJSON = function (e) {
                      return c(e, !0);
                    }),
                    (r.remove = function (t, n) {
                      i(t, "", e(n, { expires: -1 }));
                    }),
                    (r.defaults = {}),
                    (r.withConverter = n),
                    r
                  );
                })(function () {});
              })
              ? o.call(t, n, t, e)
              : o) || (e.exports = r),
          (e.exports = i());
      },
      703: function (e, t, n) {
        "use strict";
        var o = n(414);
        function r() {}
        function i() {}
        (i.resetWarningCache = r),
          (e.exports = function () {
            function e(e, t, n, r, i, c) {
              if (c !== o) {
                var a = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((a.name = "Invariant Violation"), a);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var n = {
              array: e,
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
              checkPropTypes: i,
              resetWarningCache: r,
            };
            return (n.PropTypes = n), n;
          });
      },
      697: function (e, t, n) {
        e.exports = n(703)();
      },
      414: function (e) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
    },
    t = {};
  function n(o) {
    var r = t[o];
    if (void 0 !== r) return r.exports;
    var i = (t[o] = { exports: {} });
    return e[o](i, i.exports, n), i.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return n.d(t, { a: t }), t;
  }),
    (n.d = function (e, t) {
      for (var o in t)
        n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    });
  var o = {};
  !(function () {
    "use strict";
    n.r(o),
      n.d(o, {
        CookieConsent: function () {
          return g;
        },
        OPTIONS: function () {
          return f;
        },
        SAME_SITE_OPTIONS: function () {
          return b;
        },
        getCookieConsentValue: function () {
          return y;
        },
      });
    const e = require("react");
    var t = n.n(e),
      r = n(697),
      i = n.n(r),
      c = n(808),
      a = n.n(c);
    function l() {
      return (l =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          }
          return e;
        }).apply(this, arguments);
    }
    function u(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, o);
      }
      return n;
    }
    function s(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? u(Object(n), !0).forEach(function (t) {
              p(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : u(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function p(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function d(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
      return o;
    }
    var f = { TOP: "top", BOTTOM: "bottom", NONE: "none" },
      b = { STRICT: "strict", LAX: "lax", NONE: "none" },
      y = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
          t = a().get(e);
        return void 0 === t && (t = a().get(v(e))), t;
      },
      v = function (e) {
        return "".concat(e, "-legacy");
      },
      m = "CookieConsent",
      O = function (e) {
        var t = e.condition,
          n = e.wrapper,
          o = e.children;
        return t ? n(o) : o;
      };
    function g(n) {
      var o,
        r,
        i = n.disableStyles,
        c = void 0 !== i && i,
        u = n.hideOnAccept,
        p = void 0 === u || u,
        g = n.hideOnDecline,
        h = void 0 === g || g,
        x = n.location,
        S = void 0 === x ? f.BOTTOM : x,
        C = n.onAccept,
        k = void 0 === C ? function () {} : C,
        j = n.onDecline,
        T = void 0 === j ? function () {} : j,
        w = n.cookieName,
        B = void 0 === w ? m : w,
        I = n.cookieValue,
        P = void 0 === I || I,
        E = n.declineCookieValue,
        D = void 0 !== E && E,
        A = n.setDeclineCookie,
        N = void 0 === A || A,
        _ = n.buttonText,
        R = void 0 === _ ? "I understand" : _,
        U = n.declineButtonText,
        L = void 0 === U ? "I decline" : U,
        M = n.debug,
        V = void 0 !== M && M,
        W = n.expires,
        F = void 0 === W ? 365 : W,
        J = n.containerClasses,
        q = void 0 === J ? "CookieConsent" : J,
        z = n.contentClasses,
        X = void 0 === z ? "" : z,
        H = n.buttonClasses,
        Y = void 0 === H ? "" : H,
        Z = n.buttonWrapperClasses,
        $ = void 0 === Z ? "" : Z,
        G = n.declineButtonClasses,
        K = void 0 === G ? "" : G,
        Q = n.buttonId,
        ee = void 0 === Q ? "rcc-confirm-button" : Q,
        te = n.declineButtonId,
        ne = void 0 === te ? "rcc-decline-button" : te,
        oe = n.extraCookieOptions,
        re = void 0 === oe ? {} : oe,
        ie = n.disableButtonStyles,
        ce = void 0 !== ie && ie,
        ae = n.enableDeclineButton,
        le = void 0 !== ae && ae,
        ue = n.flipButtons,
        se = void 0 !== ue && ue,
        pe = n.sameSite,
        de = void 0 === pe ? b.LAX : pe,
        fe = n.ButtonComponent,
        be =
          void 0 === fe
            ? function (e) {
                var n = e.children,
                  o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                      o,
                      r = (function (e, t) {
                        if (null == e) return {};
                        var n,
                          o,
                          r = {},
                          i = Object.keys(e);
                        for (o = 0; o < i.length; o++)
                          (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                        return r;
                      })(e, t);
                    if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      for (o = 0; o < i.length; o++)
                        (n = i[o]),
                          t.indexOf(n) >= 0 ||
                            (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
                    }
                    return r;
                  })(e, ["children"]);
                return t().createElement("button", o, n);
              }
            : fe,
        ye = n.overlay,
        ve = void 0 !== ye && ye,
        me = n.overlayClasses,
        Oe = void 0 === me ? "" : me,
        ge = n.ariaAcceptLabel,
        he = void 0 === ge ? "Accept cookies" : ge,
        xe = n.ariaDeclineLabel,
        Se = void 0 === xe ? "Decline cookies" : xe,
        Ce = n.style,
        ke = void 0 === Ce ? {} : Ce,
        je = n.contentStyle,
        Te = void 0 === je ? {} : je,
        we = n.buttonStyle,
        Be = void 0 === we ? {} : we,
        Ie = n.overlayStyle,
        Pe = void 0 === Ie ? {} : Ie,
        Ee = n.declineButtonStyle,
        De = void 0 === Ee ? {} : Ee,
        Ae = n.children,
        Ne = void 0 === Ae ? {} : Ae,
        _e = n.cookieSecurity,
        Re =
          ((o = (0, e.useState)(!1)),
          (r = 2),
          (function (e) {
            if (Array.isArray(e)) return e;
          })(o) ||
            (function (e, t) {
              var n =
                e && (("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"]);
              if (null != n) {
                var o,
                  r,
                  i = [],
                  c = !0,
                  a = !1;
                try {
                  for (
                    n = n.call(e);
                    !(c = (o = n.next()).done) && (i.push(o.value), !t || i.length !== t);
                    c = !0
                  );
                } catch (e) {
                  (a = !0), (r = e);
                } finally {
                  try {
                    c || null == n.return || n.return();
                  } finally {
                    if (a) throw r;
                  }
                }
                return i;
              }
            })(o, r) ||
            (function (e, t) {
              if (e) {
                if ("string" == typeof e) return d(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? d(e, t)
                    : void 0
                );
              }
            })(o, r) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()),
        Ue = Re[0],
        Le = Re[1],
        Me = function (e, t) {
          void 0 === _e && (_e = !S || "https:" === S.protocol);
          var n = s(s({ expires: F }, re), {}, { sameSite: de, secure: _e });
          de === b.NONE && a().set(v(e), t, n), a().set(e, t, n);
        };
      ((!Ue && void 0 === y(B)) || V) && Le(!0);
      var Ve = {},
        We = {},
        Fe = {},
        Je = {},
        qe = {};
      switch (
        (c
          ? ((Ve = l({}, ke)),
            (We = l({}, Be)),
            (Fe = l({}, De)),
            (Je = l({}, Te)),
            (qe = l({}, Pe)))
          : ((Ve = l(
              {},
              s(
                s(
                  {},
                  {
                    alignItems: "baseline",
                    background: "#353535",
                    color: "white",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    left: "0",
                    position: "fixed",
                    width: "100%",
                    zIndex: "999",
                  }
                ),
                ke
              )
            )),
            (Je = l({}, s(s({}, { flex: "1 0 300px", margin: "15px" }), Te))),
            (qe = l(
              {},
              s(
                s(
                  {},
                  {
                    position: "fixed",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: "999",
                    backgroundColor: "rgba(0,0,0,0.3)",
                  }
                ),
                Pe
              )
            )),
            ce
              ? ((We = l({}, Be)), (Fe = l({}, De)))
              : ((We = l(
                  {},
                  s(
                    s(
                      {},
                      {
                        background: "#ffd42d",
                        border: "0",
                        borderRadius: "0px",
                        boxShadow: "none",
                        color: "black",
                        cursor: "pointer",
                        flex: "0 0 auto",
                        padding: "5px 10px",
                        margin: "15px",
                      }
                    ),
                    Be
                  )
                )),
                (Fe = l(
                  {},
                  s(
                    s(
                      {},
                      {
                        background: "#c12a2a",
                        border: "0",
                        borderRadius: "0px",
                        boxShadow: "none",
                        color: "#e5e5e5",
                        cursor: "pointer",
                        flex: "0 0 auto",
                        padding: "5px 10px",
                        margin: "15px",
                      }
                    ),
                    De
                  )
                )))),
        S)
      ) {
        case f.TOP:
          Ve.top = "0";
          break;
        case f.BOTTOM:
        default:
          Ve.bottom = "0";
      }
      var ze = [];
      return (
        le &&
          ze.push(
            t().createElement(
              be,
              {
                key: "declineButton",
                style: Fe,
                className: K,
                id: ne,
                "aria-label": Se,
                onClick: function () {
                  N && Me(B, D), T(), h && Le(!1);
                },
              },
              L
            )
          ),
        ze.push(
          t().createElement(
            be,
            {
              key: "acceptButton",
              style: We,
              className: Y,
              id: ee,
              "aria-label": he,
              onClick: function () {
                Me(B, P), k(), p && Le(!1);
              },
            },
            R
          )
        ),
        se && ze.reverse(),
        Ue &&
          t().createElement(
            O,
            {
              condition: ve,
              wrapper: function (e) {
                return t().createElement("div", { style: qe, className: Oe }, e);
              },
            },
            t().createElement(
              "div",
              { className: "".concat(q), style: Ve },
              t().createElement("div", { style: Je, className: X }, Ne),
              t().createElement(
                "div",
                { className: "".concat($) },
                ze.map(function (e) {
                  return e;
                })
              )
            )
          )
      );
    }
    g.propTypes = {
      location: i().oneOf(
        Object.keys(f).map(function (e) {
          return f[e];
        })
      ),
      sameSite: i().oneOf(
        Object.keys(b).map(function (e) {
          return b[e];
        })
      ),
      style: i().object,
      buttonStyle: i().object,
      declineButtonStyle: i().object,
      contentStyle: i().object,
      children: i().any,
      disableStyles: i().bool,
      hideOnAccept: i().bool,
      hideOnDecline: i().bool,
      onAccept: i().func,
      onDecline: i().func,
      buttonText: i().oneOfType([i().string, i().func, i().element]),
      declineButtonText: i().oneOfType([i().string, i().func, i().element]),
      cookieName: i().string,
      cookieValue: i().oneOfType([i().string, i().bool, i().number]),
      declineCookieValue: i().oneOfType([i().string, i().bool, i().number]),
      setDeclineCookie: i().bool,
      debug: i().bool,
      expires: i().number,
      containerClasses: i().string,
      contentClasses: i().string,
      buttonClasses: i().string,
      buttonWrapperClasses: i().string,
      declineButtonClasses: i().string,
      buttonId: i().string,
      declineButtonId: i().string,
      extraCookieOptions: i().object,
      disableButtonStyles: i().bool,
      enableDeclineButton: i().bool,
      flipButtons: i().bool,
      ButtonComponent: i().elementType,
      cookieSecurity: i().bool,
      overlay: i().bool,
      overlayClasses: i().string,
      overlayStyle: i().object,
      ariaAcceptLabel: i().string,
      ariaDeclineLabel: i().string,
    };
  })(),
    (module.exports = o);
})();
