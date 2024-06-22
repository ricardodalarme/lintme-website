"use strict";
(self.webpackChunkdart_code_metrics_website =
  self.webpackChunkdart_code_metrics_website || []).push([
  [152],
  {
    3905: (e, t, r) => {
      r.d(t, { Zo: () => d, kt: () => g });
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
      function l(e) {
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
      function o(e, t) {
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
      var c = n.createContext({}),
        s = function (e) {
          var t = n.useContext(c),
            r = t;
          return e && (r = "function" == typeof e ? e(t) : l(l({}, t), e)), r;
        },
        d = function (e) {
          var t = s(e.components);
          return n.createElement(c.Provider, { value: t }, e.children);
        },
        p = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        u = n.forwardRef(function (e, t) {
          var r = e.components,
            a = e.mdxType,
            i = e.originalType,
            c = e.parentName,
            d = o(e, ["components", "mdxType", "originalType", "parentName"]),
            u = s(r),
            g = a,
            m = u["".concat(c, ".").concat(g)] || u[g] || p[g] || i;
          return r
            ? n.createElement(m, l(l({ ref: t }, d), {}, { components: r }))
            : n.createElement(m, l({ ref: t }, d));
        });
      function g(e, t) {
        var r = arguments,
          a = t && t.mdxType;
        if ("string" == typeof e || a) {
          var i = r.length,
            l = new Array(i);
          l[0] = u;
          var o = {};
          for (var c in t) hasOwnProperty.call(t, c) && (o[c] = t[c]);
          (o.originalType = e),
            (o.mdxType = "string" == typeof e ? e : a),
            (l[1] = o);
          for (var s = 2; s < i; s++) l[s] = r[s];
          return n.createElement.apply(null, l);
        }
        return n.createElement.apply(null, r);
      }
      u.displayName = "MDXCreateElement";
    },
    681: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => c,
          contentTitle: () => l,
          default: () => p,
          frontMatter: () => i,
          metadata: () => o,
          toc: () => s,
        });
      var n = r(7462),
        a = (r(7294), r(3905));
      const i = {
          sidebar_label: "Installation and Usage",
          sidebar_position: 1,
        },
        l = "Installing the package",
        o = {
          unversionedId: "getting-started/installation",
          id: "getting-started/installation",
          title: "Installing the package",
          description: "To install the package as a dev dependency run",
          source: "@site/docs/getting-started/installation.md",
          sourceDirName: "getting-started",
          slug: "/getting-started/installation",
          permalink: "/docs/getting-started/installation",
          draft: !1,
          editUrl:
            "https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/getting-started/installation.md",
          tags: [],
          version: "current",
          sidebarPosition: 1,
          frontMatter: {
            sidebar_label: "Installation and Usage",
            sidebar_position: 1,
          },
          sidebar: "sidebar",
          previous: {
            title: "Introduction",
            permalink: "/docs/getting-started/introduction",
          },
          next: {
            title: "Configuration",
            permalink: "/docs/getting-started/configuration",
          },
        },
        c = {},
        s = [
          { value: "OR", id: "or", level: 2 },
          { value: "Usage", id: "usage", level: 2 },
          { value: "Analyzer plugin", id: "analyzer-plugin", level: 3 },
          { value: "CLI", id: "cli", level: 3 },
          { value: "Library", id: "library", level: 3 },
        ],
        d = { toc: s };
      function p(e) {
        let { components: t, ...r } = e;
        return (0, a.kt)(
          "wrapper",
          (0, n.Z)({}, d, r, { components: t, mdxType: "MDXLayout" }),
          (0, a.kt)(
            "h1",
            { id: "installing-the-package" },
            "Installing the package"
          ),
          (0, a.kt)(
            "p",
            null,
            "To install the package as a dev dependency run"
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "$ dart pub add --dev dart_code_metrics\n\n# or for a Flutter package\n$ flutter pub add --dev dart_code_metrics\n"
            )
          ),
          (0, a.kt)("h2", { id: "or" }, "OR"),
          (0, a.kt)(
            "p",
            null,
            "add it manually to ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "pubspec.yaml")
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              {
                parentName: "pre",
                className: "language-yaml",
                metastring: 'title="pubspec.yaml"',
                title: '"pubspec.yaml"',
              },
              "environment:\n  sdk: '>=2.18.0 <3.0.0'\n\ndev_dependencies:\n  dart_code_metrics: ^5.5.0\n"
            )
          ),
          (0, a.kt)("p", null, "and then run"),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "$ dart pub get\n\n# or for a Flutter package\n$ flutter pub get\n"
            )
          ),
          (0, a.kt)("h2", { id: "usage" }, "Usage"),
          (0, a.kt)("h3", { id: "analyzer-plugin" }, "Analyzer plugin"),
          (0, a.kt)(
            "p",
            null,
            "To use Lintme as a plugin to the Dart analyzer refer to the ",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "/docs/analyzer-plugin" },
              "Analyzer Plugin documentation section"
            ),
            "."
          ),
          (0, a.kt)("h3", { id: "cli" }, "CLI"),
          (0, a.kt)(
            "p",
            null,
            "To use Lintme as a command-line tool refer to the ",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "../cli" },
              "Command Line Interface documentation section"
            ),
            "."
          ),
          (0, a.kt)("h3", { id: "library" }, "Library"),
          (0, a.kt)(
            "p",
            null,
            "To use Lintme as a library refer to this ",
            (0, a.kt)(
              "a",
              {
                parentName: "p",
                href: "https://github.com/dart-code-checker/dart-code-metrics/blob/master/example/lib/main.dart",
              },
              "example"
            ),
            "."
          )
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
