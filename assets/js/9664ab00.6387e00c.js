"use strict";
(self.webpackChunkdart_code_metrics_website =
  self.webpackChunkdart_code_metrics_website || []).push([
  [9385],
  {
    3905: (e, t, r) => {
      r.d(t, { Zo: () => c, kt: () => g });
      var n = r(7294);
      function a(e, t, r) {
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
      function i(e, t) {
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
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                a(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function l(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++)
              (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }
      var p = n.createContext({}),
        s = function (e) {
          var t = n.useContext(p),
            r = t;
          return e && (r = "function" == typeof e ? e(t) : o(o({}, t), e)), r;
        },
        c = function (e) {
          var t = s(e.components);
          return n.createElement(p.Provider, { value: t }, e.children);
        },
        u = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        d = n.forwardRef(function (e, t) {
          var r = e.components,
            a = e.mdxType,
            i = e.originalType,
            p = e.parentName,
            c = l(e, ["components", "mdxType", "originalType", "parentName"]),
            d = s(r),
            g = a,
            f = d["".concat(p, ".").concat(g)] || d[g] || u[g] || i;
          return r
            ? n.createElement(f, o(o({ ref: t }, c), {}, { components: r }))
            : n.createElement(f, o({ ref: t }, c));
        });
      function g(e, t) {
        var r = arguments,
          a = t && t.mdxType;
        if ("string" == typeof e || a) {
          var i = r.length,
            o = new Array(i);
          o[0] = d;
          var l = {};
          for (var p in t) hasOwnProperty.call(t, p) && (l[p] = t[p]);
          (l.originalType = e),
            (l.mdxType = "string" == typeof e ? e : a),
            (o[1] = l);
          for (var s = 2; s < i; s++) o[s] = r[s];
          return n.createElement.apply(null, o);
        }
        return n.createElement.apply(null, r);
      }
      d.displayName = "MDXCreateElement";
    },
    4388: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => p,
          contentTitle: () => o,
          default: () => u,
          frontMatter: () => i,
          metadata: () => l,
          toc: () => s,
        });
      var n = r(7462),
        a = (r(7294), r(3905));
      const i = { sidebar_position: 1 },
        o = "Analyzer Plugin",
        l = {
          unversionedId: "analyzer-plugin",
          id: "analyzer-plugin",
          title: "Analyzer Plugin",
          description:
            "Lintme can be used as a plugin for the Dart analyzer. All issues produced by provided rules or anti-patterns will be highlighted in IDE.",
          source: "@site/docs/analyzer-plugin.md",
          sourceDirName: ".",
          slug: "/analyzer-plugin",
          permalink: "/docs/analyzer-plugin",
          draft: !1,
          editUrl:
            "https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/analyzer-plugin.md",
          tags: [],
          version: "current",
          sidebarPosition: 1,
          frontMatter: { sidebar_position: 1 },
          sidebar: "sidebar",
          previous: {
            title: "Configuration",
            permalink: "/docs/getting-started/configuration",
          },
          next: { title: "CLI", permalink: "/docs/cli/" },
        },
        p = {},
        s = [
          {
            value: "Applying quick fixes",
            id: "applying-quick-fixes",
            level: 2,
          },
          {
            value: "Troubleshooting the plugin integration",
            id: "troubleshooting-the-plugin-integration",
            level: 2,
          },
        ],
        c = { toc: s };
      function u(e) {
        let { components: t, ...i } = e;
        return (0, a.kt)(
          "wrapper",
          (0, n.Z)({}, c, i, { components: t, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "analyzer-plugin" }, "Analyzer Plugin"),
          (0, a.kt)(
            "p",
            null,
            "Lintme can be used as a plugin for the Dart ",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "https://pub.dev/packages/analyzer" },
              (0, a.kt)("inlineCode", { parentName: "a" }, "analyzer")
            ),
            ". All issues produced by provided rules or anti-patterns will be highlighted in IDE."
          ),
          (0, a.kt)(
            "p",
            null,
            "To enable the plugin integration add ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "dart_code_metrics"),
            " entry to the analyzer plugins list:"
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              {
                parentName: "pre",
                className: "language-yaml",
                metastring: 'title="analysis_options.yaml"',
                title: '"analysis_options.yaml"',
              },
              "analyzer:\n  plugins:\n    - dart_code_metrics\n\ndart_code_metrics: ... # package configuration\n"
            )
          ),
          (0, a.kt)(
            "p",
            null,
            "Plugin integration supports all IDE that are supported by the analyzer itself."
          ),
          (0, a.kt)(
            "h2",
            { id: "applying-quick-fixes" },
            "Applying quick fixes"
          ),
          (0, a.kt)(
            "p",
            null,
            "Rules that marked with a ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "has auto-fix"),
            " badge have auto-fixes available through the IDE context menu. VS Code example:"
          ),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("img", {
              alt: "VS Code example",
              src: r(6849).Z,
              width: "600",
              height: "398",
            })
          ),
          (0, a.kt)(
            "h2",
            { id: "troubleshooting-the-plugin-integration" },
            "Troubleshooting the plugin integration"
          ),
          (0, a.kt)(
            "p",
            null,
            "If you have a problem with the plugin, refer to the ",
            (0, a.kt)(
              "a",
              {
                parentName: "p",
                href: "https://github.com/dart-code-checker/dart-code-metrics/blob/master/TROUBLESHOOTING.md",
              },
              "troubleshooting docs"
            ),
            "."
          )
        );
      }
      u.isMDXComponent = !0;
    },
    6849: (e, t, r) => {
      r.d(t, { Z: () => n });
      const n =
        r.p + "assets/images/quick-fix-176662f6292ac0c547d15f7c24a2da53.gif";
    },
  },
]);
