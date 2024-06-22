"use strict";
(self.webpackChunkdart_code_metrics_website =
  self.webpackChunkdart_code_metrics_website || []).push([
  [2673],
  {
    3905: (e, t, r) => {
      r.d(t, { Zo: () => d, kt: () => m });
      var o = r(7294);
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
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function n(e) {
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
      function c(e, t) {
        if (null == e) return {};
        var r,
          o,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              o,
              a = {},
              i = Object.keys(e);
            for (o = 0; o < i.length; o++)
              (r = i[o]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (o = 0; o < i.length; o++)
            (r = i[o]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }
      var s = o.createContext({}),
        l = function (e) {
          var t = o.useContext(s),
            r = t;
          return e && (r = "function" == typeof e ? e(t) : n(n({}, t), e)), r;
        },
        d = function (e) {
          var t = l(e.components);
          return o.createElement(s.Provider, { value: t }, e.children);
        },
        p = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return o.createElement(o.Fragment, {}, t);
          },
        },
        u = o.forwardRef(function (e, t) {
          var r = e.components,
            a = e.mdxType,
            i = e.originalType,
            s = e.parentName,
            d = c(e, ["components", "mdxType", "originalType", "parentName"]),
            u = l(r),
            m = a,
            g = u["".concat(s, ".").concat(m)] || u[m] || p[m] || i;
          return r
            ? o.createElement(g, n(n({ ref: t }, d), {}, { components: r }))
            : o.createElement(g, n({ ref: t }, d));
        });
      function m(e, t) {
        var r = arguments,
          a = t && t.mdxType;
        if ("string" == typeof e || a) {
          var i = r.length,
            n = new Array(i);
          n[0] = u;
          var c = {};
          for (var s in t) hasOwnProperty.call(t, s) && (c[s] = t[s]);
          (c.originalType = e),
            (c.mdxType = "string" == typeof e ? e : a),
            (n[1] = c);
          for (var l = 2; l < i; l++) n[l] = r[l];
          return o.createElement.apply(null, n);
        }
        return o.createElement.apply(null, r);
      }
      u.displayName = "MDXCreateElement";
    },
    4243: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => s,
          contentTitle: () => n,
          default: () => p,
          frontMatter: () => i,
          metadata: () => c,
          toc: () => l,
        });
      var o = r(7462),
        a = (r(7294), r(3905));
      const i = {},
        n = "Codemagic",
        c = {
          unversionedId: "integrations/codemagic",
          id: "integrations/codemagic",
          title: "Codemagic",
          description:
            "Codemagic is a CI/CD solution which helps you test and release your Flutter apps with zero configuration and no pain.",
          source: "@site/docs/integrations/codemagic.md",
          sourceDirName: "integrations",
          slug: "/integrations/codemagic",
          permalink: "/docs/integrations/codemagic",
          draft: !1,
          editUrl:
            "https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/integrations/codemagic.md",
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "sidebar",
          previous: {
            title: "Long Parameter List",
            permalink: "/docs/anti-patterns/long-parameter-list",
          },
          next: {
            title: "GitHub Action",
            permalink: "/docs/integrations/github-action",
          },
        },
        s = {},
        l = [
          { value: "Usage", id: "usage", level: 2 },
          {
            value: "With <code>codemagic.yaml</code>",
            id: "with-codemagicyaml",
            level: 3,
          },
          {
            value: "With the Flutter workflow editor",
            id: "with-the-flutter-workflow-editor",
            level: 3,
          },
          { value: "Output example", id: "output-example", level: 3 },
          { value: "Results preview", id: "results-preview", level: 4 },
          { value: "Logs", id: "logs", level: 4 },
        ],
        d = { toc: l };
      function p(e) {
        let { components: t, ...i } = e;
        return (0, a.kt)(
          "wrapper",
          (0, o.Z)({}, d, i, { components: t, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "codemagic" }, "Codemagic"),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)(
              "a",
              { parentName: "p", href: "http://codemagic.io/" },
              "Codemagic"
            ),
            " is a CI/CD solution which helps you test and release your Flutter apps with zero configuration and no pain."
          ),
          (0, a.kt)("h2", { id: "usage" }, "Usage"),
          (0, a.kt)(
            "h3",
            { id: "with-codemagicyaml" },
            "With ",
            (0, a.kt)("inlineCode", { parentName: "h3" }, "codemagic.yaml")
          ),
          (0, a.kt)(
            "p",
            null,
            "To enable Lintme add the following script to ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "codemagic.yaml")
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              {
                parentName: "pre",
                className: "language-yml",
                metastring: 'title="codemagic.yaml"',
                title: '"codemagic.yaml"',
              },
              "scripts:\n  - echo 'previous step'\n  - name: Lintme\n    script: |\n      mkdir -p metrics-results\n      flutter pub run dart_code_metrics:metrics analyze lib --reporter=json > metrics-results/dart_code_metrics.json      \n    test_report: metrics-results/dart_code_metrics.json\n"
            )
          ),
          (0, a.kt)(
            "p",
            null,
            "check out ",
            (0, a.kt)(
              "a",
              {
                parentName: "p",
                href: "https://docs.codemagic.io/yaml-testing/dart-code-metrics/",
              },
              "Codemagic docs"
            ),
            " for more details about ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "codemagic.yaml"),
            " setup."
          ),
          (0, a.kt)(
            "h3",
            { id: "with-the-flutter-workflow-editor" },
            "With the Flutter workflow editor"
          ),
          (0, a.kt)(
            "p",
            null,
            "To enable Lintme check the ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "Enable Lintme"),
            " option:"
          ),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("img", {
              alt: "Lintme Flutter workflow editor",
              src: r(2239).Z,
              width: "1633",
              height: "1096",
            })
          ),
          (0, a.kt)(
            "p",
            null,
            "check out ",
            (0, a.kt)(
              "a",
              {
                parentName: "p",
                href: "https://docs.codemagic.io/flutter-testing/static-code-analysis/#dart-code-metrics",
              },
              "Codemagic docs"
            ),
            " for more details about the Flutter workflow editor setup."
          ),
          (0, a.kt)("h3", { id: "output-example" }, "Output example"),
          (0, a.kt)("h4", { id: "results-preview" }, "Results preview"),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("img", {
              alt: "Lintme results",
              src: r(5104).Z,
              width: "2632",
              height: "1592",
            })
          ),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("img", {
              alt: "Lintme results expanded",
              src: r(3509).Z,
              width: "1588",
              height: "1580",
            })
          ),
          (0, a.kt)("h4", { id: "logs" }, "Logs"),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("img", {
              alt: "Lintme logs",
              src: r(7194).Z,
              width: "1596",
              height: "1586",
            })
          )
        );
      }
      p.isMDXComponent = !0;
    },
    2239: (e, t, r) => {
      r.d(t, { Z: () => o });
      const o =
        r.p +
        "assets/images/lintme-flutter-workflow-editor-1ab9a84c6f166c4309ba8483902036bb.png";
    },
    7194: (e, t, r) => {
      r.d(t, { Z: () => o });
      const o =
        r.p + "assets/images/lintme-logs-84dcc383a0f1163cb59e30d680b8ba55.png";
    },
    3509: (e, t, r) => {
      r.d(t, { Z: () => o });
      const o =
        r.p +
        "assets/images/lintme-results-expanded-a51460d97603279e2753b1d52b9ae26d.png";
    },
    5104: (e, t, r) => {
      r.d(t, { Z: () => o });
      const o =
        r.p +
        "assets/images/lintme-results-80ade87e4cbce15de28728dfd6a172b1.png";
    },
  },
]);
