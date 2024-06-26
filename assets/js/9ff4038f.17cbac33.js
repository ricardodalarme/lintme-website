"use strict";
(self.webpackChunkdart_code_metrics_website =
  self.webpackChunkdart_code_metrics_website || []).push([
  [2353],
  {
    3905: (e, t, r) => {
      r.d(t, { Zo: () => d, kt: () => h });
      var n = r(7294);
      function o(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function a(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(r), !0).forEach(function (t) {
                o(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : a(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function s(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      var l = n.createContext({}),
        c = function (e) {
          var t = n.useContext(l),
            r = t;
          return e && (r = "function" == typeof e ? e(t) : i(i({}, t), e)), r;
        },
        d = function (e) {
          var t = c(e.components);
          return n.createElement(l.Provider, { value: t }, e.children);
        },
        u = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        p = n.forwardRef(function (e, t) {
          var r = e.components,
            o = e.mdxType,
            a = e.originalType,
            l = e.parentName,
            d = s(e, ["components", "mdxType", "originalType", "parentName"]),
            p = c(r),
            h = o,
            m = p["".concat(l, ".").concat(h)] || p[h] || u[h] || a;
          return r
            ? n.createElement(m, i(i({ ref: t }, d), {}, { components: r }))
            : n.createElement(m, i({ ref: t }, d));
        });
      function h(e, t) {
        var r = arguments,
          o = t && t.mdxType;
        if ("string" == typeof e || o) {
          var a = r.length,
            i = new Array(a);
          i[0] = p;
          var s = {};
          for (var l in t) hasOwnProperty.call(t, l) && (s[l] = t[l]);
          (s.originalType = e),
            (s.mdxType = "string" == typeof e ? e : o),
            (i[1] = s);
          for (var c = 2; c < a; c++) i[c] = r[c];
          return n.createElement.apply(null, i);
        }
        return n.createElement.apply(null, r);
      }
      p.displayName = "MDXCreateElement";
    },
    5007: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => l,
          contentTitle: () => i,
          default: () => u,
          frontMatter: () => a,
          metadata: () => s,
          toc: () => c,
        });
      var n = r(7462),
        o = (r(7294), r(3905));
      const a = { sidebar_position: 0 },
        i = "Introduction",
        s = {
          unversionedId: "getting-started/introduction",
          id: "getting-started/introduction",
          title: "Introduction",
          description:
            "Lintme is a static analysis tool that helps you analyse and improve your code quality.",
          source: "@site/docs/getting-started/introduction.md",
          sourceDirName: "getting-started",
          slug: "/getting-started/introduction",
          permalink: "/docs/getting-started/introduction",
          draft: !1,
          editUrl:
            "https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/getting-started/introduction.md",
          tags: [],
          version: "current",
          sidebarPosition: 0,
          frontMatter: { sidebar_position: 0 },
          sidebar: "sidebar",
          next: {
            title: "Installation and Usage",
            permalink: "/docs/getting-started/installation",
          },
        },
        l = {},
        c = [
          { value: "Metrics", id: "metrics", level: 2 },
          { value: "Rules", id: "rules", level: 2 },
        ],
        d = { toc: c };
      function u(e) {
        let { components: t, ...r } = e;
        return (0, o.kt)(
          "wrapper",
          (0, n.Z)({}, d, r, { components: t, mdxType: "MDXLayout" }),
          (0, o.kt)("h1", { id: "introduction" }, "Introduction"),
          (0, o.kt)(
            "p",
            null,
            "Lintme is a static analysis tool that helps you analyse and improve your code quality."
          ),
          (0, o.kt)(
            "p",
            null,
            "It collects analytical data on the code through calculating code metrics with configurable thresholds and provides additional rules for the Dart analyzer."
          ),
          (0, o.kt)(
            "p",
            null,
            "It can be launched via the command line, connected as a plugin to the Dart Analysis Server, or as a library. Launching via the command line allows you to easily integrate the tool into the CI/CD process, and you can get results in \u0421onsole, HTML, JSON, CodeClimate, or GitHub. Connecting the tool as a plugin to the Analysis Server allows you to receive real-time feedback directly from the IDE."
          ),
          (0, o.kt)("h2", { id: "metrics" }, "Metrics"),
          (0, o.kt)(
            "p",
            null,
            "Metrics can help manage codebase for teams or individuals working on both big and small projects."
          ),
          (0, o.kt)(
            "p",
            null,
            "Big projects usually have their own history with contributions from different people and sometimes it's really hard to detect places in the codebase that need attention the most."
          ),
          (0, o.kt)(
            "p",
            null,
            "For small projects metrics can help avoid the stage when codebase becomes harder to maintain because they provide instant feedback on any PR and questionable solutions might not even be merged into the main branch."
          ),
          (0, o.kt)("h2", { id: "rules" }, "Rules"),
          (0, o.kt)(
            "p",
            null,
            "Other ecosystems have useful rules like unused arguments check, class member ordering check, etc. They\u2019re not available in the built-in Dart SDK linter, but they are very handy and thats why Lintme provides them."
          ),
          (0, o.kt)(
            "p",
            null,
            "Stylistic rules aren\u2019t the only important things to consider; Lintme also provide rules, that highlight potential errors like ",
            (0, o.kt)("inlineCode", { parentName: "p" }, "no-equal-then-else"),
            ", ",
            (0, o.kt)("inlineCode", { parentName: "p" }, "no-equal-arguments"),
            ", and more."
          ),
          (0, o.kt)(
            "p",
            null,
            "The rules are partially based on a personal experience during code reviews and feedback / requests from the community, so if you have any ideas to share, please don't hesitate! Another part of the rules emerged during the process of studying other tools\u2019 rules. (Shoutout to PVS-Studio, TSLint, and ESLint for inspiration!)"
          )
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
