(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    6840: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n(6505);
        },
      ]);
    },
    6505: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var r = n(5893),
        o = (n(1470), n(9008)),
        i = n.n(o);
      function c(e, t, n) {
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              c(e, t, n[t]);
            });
        }
        return e;
      }
      function a(e) {
        var t = e.Component,
          n = e.pageProps,
          o = "affect.xyz";
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)(i(), {
              children: [
                (0, r.jsx)("meta", {
                  name: "viewport",
                  content:
                    "initial-scale=0.5, minimal-ui, viewport-fit=cover, width=device-width",
                }),
                (0, r.jsx)("meta", { name: "theme-color", content: "#303135" }),
                (0, r.jsx)("title", { children: o }),
                (0, r.jsx)("meta", { property: "og:title", content: o }),
                (0, r.jsx)("meta", { name: "description", content: c }),
                (0, r.jsx)("meta", { property: "og:description", content: c }),
              ],
            }),
            (0, r.jsx)(t, u({}, n)),
          ],
        });
      }
    },
    1470: function () {},
    9008: function (e, t, n) {
      e.exports = n(3121);
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [774, 179], function () {
      return t(6840), t(880);
    });
    var n = e.O();
    _N_E = n;
  },
]);
