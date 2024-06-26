"use strict";
(self.webpackChunkdart_code_metrics_website =
  self.webpackChunkdart_code_metrics_website || []).push([
  [7069],
  {
    3905: (e, t, n) => {
      n.d(t, { Zo: () => m, kt: () => u });
      var r = n(7294);
      function a(e, t, n) {
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
      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(n), !0).forEach(function (t) {
                a(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function l(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var s = r.createContext({}),
        c = function (e) {
          var t = r.useContext(s),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : i(i({}, t), e)), n;
        },
        m = function (e) {
          var t = c(e.components);
          return r.createElement(s.Provider, { value: t }, e.children);
        },
        p = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        d = r.forwardRef(function (e, t) {
          var n = e.components,
            a = e.mdxType,
            o = e.originalType,
            s = e.parentName,
            m = l(e, ["components", "mdxType", "originalType", "parentName"]),
            d = c(n),
            u = a,
            f = d["".concat(s, ".").concat(u)] || d[u] || p[u] || o;
          return n
            ? r.createElement(f, i(i({ ref: t }, m), {}, { components: n }))
            : r.createElement(f, i({ ref: t }, m));
        });
      function u(e, t) {
        var n = arguments,
          a = t && t.mdxType;
        if ("string" == typeof e || a) {
          var o = n.length,
            i = new Array(o);
          i[0] = d;
          var l = {};
          for (var s in t) hasOwnProperty.call(t, s) && (l[s] = t[s]);
          (l.originalType = e),
            (l.mdxType = "string" == typeof e ? e : a),
            (i[1] = l);
          for (var c = 2; c < o; c++) i[c] = n[c];
          return r.createElement.apply(null, i);
        }
        return r.createElement.apply(null, n);
      }
      d.displayName = "MDXCreateElement";
    },
    9729: (e, t, n) => {
      n.d(t, { Z: () => o });
      var r = n(7294),
        a = n(5321);
      function o(e) {
        let {
          version: t,
          severity: n,
          hasConfig: o,
          hasFix: i,
          isDeprecated: l,
        } = e;
        return r.createElement(
          "div",
          { className: "single-rule-info" },
          r.createElement(a.Z, {
            version: t,
            severity: n,
            hasConfig: o,
            hasFix: i,
            isDeprecated: l,
          })
        );
      }
    },
    5321: (e, t, n) => {
      n.d(t, { Z: () => o });
      var r = n(7294);
      function a(e) {
        let { hasConfig: t, hasFix: n, isDeprecated: a } = e;
        return r.createElement(
          "div",
          { className: "rule-options" },
          t &&
            r.createElement("span", { title: "Configurable" }, "\u2699\ufe0f"),
          n &&
            r.createElement("span", { title: "Has auto-fix" }, "\ud83d\udee0"),
          a && r.createElement("span", { title: "Deprecated" }, "\u26a0\ufe0f")
        );
      }
      function o(e) {
        let {
          severity: t,
          version: n,
          hasConfig: o,
          hasFix: i,
          isDeprecated: l,
        } = e;
        const s = null == t ? void 0 : t.toLowerCase();
        return r.createElement(
          "div",
          { className: "rule-additional-info" },
          r.createElement(
            "div",
            null,
            r.createElement(
              "span",
              { className: "added-in-label" },
              "added in:"
            ),
            " ",
            n
          ),
          r.createElement("div", { className: `rule-severity ${s}` }, s),
          r.createElement(a, { hasConfig: o, hasFix: i, isDeprecated: l })
        );
      }
    },
    7834: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => c,
          contentTitle: () => l,
          default: () => d,
          frontMatter: () => i,
          metadata: () => s,
          toc: () => m,
        });
      var r = n(7462),
        a = (n(7294), n(3905)),
        o = n(9729);
      const i = {},
        l = void 0,
        s = {
          unversionedId: "rules/common/prefer-static-class",
          id: "rules/common/prefer-static-class",
          title: "prefer-static-class",
          description:
            "Suggests to use static class member instead of global constants, variables and functions.",
          source: "@site/docs/rules/common/prefer-static-class.mdx",
          sourceDirName: "rules/common",
          slug: "/rules/common/prefer-static-class",
          permalink: "/docs/rules/common/prefer-static-class",
          draft: !1,
          editUrl:
            "https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/common/prefer-static-class.mdx",
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "sidebar",
          previous: {
            title: "prefer-moving-to-variable",
            permalink: "/docs/rules/common/prefer-moving-to-variable",
          },
          next: {
            title: "prefer-trailing-comma",
            permalink: "/docs/rules/common/prefer-trailing-comma",
          },
        },
        c = {},
        m = [
          {
            value: "\u2699\ufe0f Config example",
            id: "config-example",
            level: 3,
          },
          { value: "Example", id: "example", level: 3 },
        ],
        p = { toc: m };
      function d(e) {
        let { components: t, ...n } = e;
        return (0, a.kt)(
          "wrapper",
          (0, r.Z)({}, p, n, { components: t, mdxType: "MDXLayout" }),
          (0, a.kt)(o.Z, {
            version: "5.1.0",
            severity: "style",
            hasConfig: !0,
            mdxType: "RuleDetails",
          }),
          (0, a.kt)(
            "p",
            null,
            "Suggests to use static class member instead of global constants, variables and functions."
          ),
          (0, a.kt)("p", null, "Pros:"),
          (0, a.kt)(
            "ul",
            null,
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)("strong", { parentName: "li" }, "Easy to search"),
              ": great help from IDE autocomplete. Type class/file name to find domain, and type dot to list all members."
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)("strong", { parentName: "li" }, "Easy to import"),
              ": name conflicts will happen less often since all names are scoped to file name/class name. No need to use ",
              (0, a.kt)(
                "inlineCode",
                { parentName: "li" },
                "import 'file.dart' as 'file'"
              ),
              " to resolve name conflicts."
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)("strong", { parentName: "li" }, "Easy to read"),
              ": declarations in code will be always shown paired with domain they belong to. Compare ",
              (0, a.kt)("inlineCode", { parentName: "li" }, "Circle.getArea"),
              " and ",
              (0, a.kt)("inlineCode", { parentName: "li" }, "getArea"),
              " or ",
              (0, a.kt)("inlineCode", { parentName: "li" }, "getCircleArea"),
              "."
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)(
                "a",
                {
                  parentName: "li",
                  href: "https://lintme.dev/docs/rules/common/member-ordering",
                },
                "member-ordering"
              ),
              " rule will be applied to class members."
            )
          ),
          (0, a.kt)("p", null, "Cons:"),
          (0, a.kt)(
            "ul",
            null,
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              "The code amount might somehow increase."
            )
          ),
          (0, a.kt)(
            "admonition",
            { type: "info" },
            (0, a.kt)(
              "p",
              { parentName: "admonition" },
              "When fixing rule issues and moving global members into a class, consider also renaming to avoid duplicating context.\nFor example, ",
              (0, a.kt)("inlineCode", { parentName: "p" }, "getCircleArea"),
              " global function should become ",
              (0, a.kt)("inlineCode", { parentName: "p" }, "Circle.getArea"),
              ", not ",
              (0, a.kt)(
                "inlineCode",
                { parentName: "p" },
                "Circle.getCircleArea"
              ),
              "."
            )
          ),
          (0, a.kt)(
            "admonition",
            { type: "note" },
            (0, a.kt)(
              "p",
              { parentName: "admonition" },
              "For this rule it's recommended to exclude the ",
              (0, a.kt)("inlineCode", { parentName: "p" }, "test"),
              " folder."
            )
          ),
          (0, a.kt)(
            "p",
            null,
            "Use ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "ignore-private"),
            " configuration to ignore private global declarations."
          ),
          (0, a.kt)(
            "p",
            null,
            "Use ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "ignore-names"),
            " to ignore names matching regular expressions (for example, Riverpod providers, flutter hooks, etc)."
          ),
          (0, a.kt)(
            "p",
            null,
            "Use ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "ignore-annotations"),
            " configuration to override default ignored annotation list."
          ),
          (0, a.kt)(
            "h3",
            { id: "config-example" },
            "\u2699\ufe0f Config example"
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-yaml" },
              "dart_code_metrics:\n  ...\n  rules:\n    ...\n    - prefer-static-class\n        ignore-annotations:\n          - allowedAnnotation\n        ignore-private: true\n        ignore-names:\n          - (.*)Provider\n          - use(.*)\n"
            )
          ),
          (0, a.kt)("h3", { id: "example" }, "Example"),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("strong", { parentName: "p" }, "\u274c Bad:")
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-dart" },
              "// circle.dart\nint getCircleArea() {} // LINT\nint getPerimeter() // LINT\n\nconst _PI = 3.14; // LINT\n"
            )
          ),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("strong", { parentName: "p" }, "\u2705 Good:")
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-dart" },
              "// circle.dart\nclass Circle {\n    static int getArea() {}\n    static int getPerimeter() {}\n\n    static const _PI = 3.14;\n}\n"
            )
          )
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
