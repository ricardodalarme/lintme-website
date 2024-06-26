"use strict";
(self.webpackChunkdart_code_metrics_website =
  self.webpackChunkdart_code_metrics_website || []).push([
  [3436],
  {
    3905: (e, t, n) => {
      n.d(t, { Zo: () => p, kt: () => m });
      var a = n(7294);
      function r(e, t, n) {
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
      function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                r(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function o(e, t) {
        if (null == e) return {};
        var n,
          a,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              r = {},
              i = Object.keys(e);
            for (a = 0; a < i.length; a++)
              (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (a = 0; a < i.length; a++)
            (n = i[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      var s = a.createContext({}),
        c = function (e) {
          var t = a.useContext(s),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : l(l({}, t), e)), n;
        },
        p = function (e) {
          var t = c(e.components);
          return a.createElement(s.Provider, { value: t }, e.children);
        },
        u = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return a.createElement(a.Fragment, {}, t);
          },
        },
        d = a.forwardRef(function (e, t) {
          var n = e.components,
            r = e.mdxType,
            i = e.originalType,
            s = e.parentName,
            p = o(e, ["components", "mdxType", "originalType", "parentName"]),
            d = c(n),
            m = r,
            g = d["".concat(s, ".").concat(m)] || d[m] || u[m] || i;
          return n
            ? a.createElement(g, l(l({ ref: t }, p), {}, { components: n }))
            : a.createElement(g, l({ ref: t }, p));
        });
      function m(e, t) {
        var n = arguments,
          r = t && t.mdxType;
        if ("string" == typeof e || r) {
          var i = n.length,
            l = new Array(i);
          l[0] = d;
          var o = {};
          for (var s in t) hasOwnProperty.call(t, s) && (o[s] = t[s]);
          (o.originalType = e),
            (o.mdxType = "string" == typeof e ? e : r),
            (l[1] = o);
          for (var c = 2; c < i; c++) l[c] = n[c];
          return a.createElement.apply(null, l);
        }
        return a.createElement.apply(null, n);
      }
      d.displayName = "MDXCreateElement";
    },
    2783: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => s,
          contentTitle: () => l,
          default: () => u,
          frontMatter: () => i,
          metadata: () => o,
          toc: () => c,
        });
      var a = n(7462),
        r = (n(7294), n(3905));
      const i = { sidebar_position: 2 },
        l = "Configuration",
        o = {
          unversionedId: "getting-started/configuration",
          id: "getting-started/configuration",
          title: "Configuration",
          description:
            "To configure the package add a lintme entry to analysis_options.yaml. This configuration is used by both CLI and the analyzer plugin.",
          source: "@site/docs/getting-started/configuration.md",
          sourceDirName: "getting-started",
          slug: "/getting-started/configuration",
          permalink: "/docs/getting-started/configuration",
          draft: !1,
          editUrl:
            "https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/getting-started/configuration.md",
          tags: [],
          version: "current",
          sidebarPosition: 2,
          frontMatter: { sidebar_position: 2 },
          sidebar: "sidebar",
          previous: {
            title: "Installation and Usage",
            permalink: "/docs/getting-started/installation",
          },
          next: {
            title: "Analyzer Plugin",
            permalink: "/docs/analyzer-plugin",
          },
        },
        s = {},
        c = [
          {
            value: "Extending an existing configuration preset",
            id: "extending-an-existing-configuration-preset",
            level: 2,
          },
          {
            value: "Configuring a metrics entry",
            id: "configuring-a-metrics-entry",
            level: 2,
          },
          {
            value: "Configuring a metrics-exclude entry",
            id: "configuring-a-metrics-exclude-entry",
            level: 2,
          },
          {
            value: "Configuring a rules entry",
            id: "configuring-a-rules-entry",
            level: 2,
          },
          {
            value: "Configuring a rules-exclude entry",
            id: "configuring-a-rules-exclude-entry",
            level: 2,
          },
          {
            value: "Configuring an anti-pattern entry",
            id: "configuring-an-anti-pattern-entry",
            level: 2,
          },
          {
            value: "Ignoring a rule or anti-pattern",
            id: "ignoring-a-rule-or-anti-pattern",
            level: 2,
          },
        ],
        p = { toc: c };
      function u(e) {
        let { components: t, ...n } = e;
        return (0, r.kt)(
          "wrapper",
          (0, a.Z)({}, p, n, { components: t, mdxType: "MDXLayout" }),
          (0, r.kt)("h1", { id: "configuration" }, "Configuration"),
          (0, r.kt)(
            "p",
            null,
            "To configure the package add a ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "dart_code_metrics"),
            " entry to ",
            (0, r.kt)(
              "inlineCode",
              { parentName: "p" },
              "analysis_options.yaml"
            ),
            ". This configuration is used by both CLI and the analyzer plugin."
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              {
                parentName: "pre",
                className: "language-yaml",
                metastring: 'title="analysis_options.yaml"',
                title: '"analysis_options.yaml"',
              },
              "dart_code_metrics:\n  extends:\n    - ... # configures the list of preset configurations\n  metrics:\n    - ... # configures the list of reported metrics\n  metrics-exclude:\n    - ... # configures the list of files that should be ignored by metrics\n  rules:\n    - ... # configures the list of rules\n  rules-exclude:\n    - ... # configures the list of files that should be ignored by rules\n  anti-patterns:\n    - ... # configures the list of anti-patterns\n"
            )
          ),
          (0, r.kt)("p", null, "Basic config example:"),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              {
                parentName: "pre",
                className: "language-yaml",
                metastring: 'title="analysis_options.yaml"',
                title: '"analysis_options.yaml"',
              },
              "dart_code_metrics:\n  metrics:\n    cyclomatic-complexity: 20\n    number-of-parameters: 4\n    maximum-nesting-level: 5\n  metrics-exclude:\n    - test/**\n  rules:\n    - newline-before-return\n    - no-boolean-literal-compare\n    - no-empty-block\n    - prefer-trailing-comma\n    - prefer-conditional-expressions\n    - no-equal-then-else\n  anti-patterns:\n    - long-method\n    - long-parameter-list\n"
            )
          ),
          (0, r.kt)(
            "h2",
            { id: "extending-an-existing-configuration-preset" },
            "Extending an existing configuration preset"
          ),
          (0, r.kt)(
            "p",
            null,
            "To extend an existing preset add a reference to the ",
            (0, r.kt)("inlineCode", { parentName: "p" }, ".yaml"),
            " file with the preset in the ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "extends"),
            " entry. For example:"
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              {
                parentName: "pre",
                className: "language-yaml",
                metastring: 'title="analysis_options.yaml"',
                title: '"analysis_options.yaml"',
              },
              "dart_code_metrics:\n  extends:\n    - package:dart_code_metrics/presets/all.yaml\n  rules:\n    - arguments-ordering:\n        child-last: true\n    - avoid-banned-imports: false\n"
            )
          ),
          (0, r.kt)(
            "p",
            null,
            "All predefined preset ",
            (0, r.kt)(
              "a",
              {
                parentName: "p",
                href: "https://github.com/dart-code-checker/dart-code-metrics/tree/master/lib/presets",
              },
              "can be found here"
            ),
            "."
          ),
          (0, r.kt)(
            "h2",
            { id: "configuring-a-metrics-entry" },
            "Configuring a metrics entry"
          ),
          (0, r.kt)(
            "p",
            null,
            "To enable a metric add its id to the ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "metrics"),
            " entry in the ",
            (0, r.kt)(
              "inlineCode",
              { parentName: "p" },
              "analysis_options.yaml"
            ),
            ". All metrics can take a threshold value. If no value was provided, the default value will be used."
          ),
          (0, r.kt)(
            "h2",
            { id: "configuring-a-metrics-exclude-entry" },
            "Configuring a metrics-exclude entry"
          ),
          (0, r.kt)(
            "p",
            null,
            "To exclude files from a metrics report provide a list of regular expressions for ignored files. For example:"
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              {
                parentName: "pre",
                className: "language-yaml",
                metastring: 'title="analysis_options.yaml"',
                title: '"analysis_options.yaml"',
              },
              "dart_code_metrics:\n  metrics-exclude:\n    - test/**\n    - lib/src/some_file.dart\n"
            )
          ),
          (0, r.kt)(
            "h2",
            { id: "configuring-a-rules-entry" },
            "Configuring a rules entry"
          ),
          (0, r.kt)(
            "p",
            null,
            "To enable a rule add its id to the ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "rules"),
            " entry. All rules have severity which can be overridden with ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "severity"),
            " config entry. For example,"
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              {
                parentName: "pre",
                className: "language-yaml",
                metastring: 'title="analysis_options.yaml"',
                title: '"analysis_options.yaml"',
              },
              "dart_code_metrics:\n  rules:\n    - newline-before-return:\n        severity: style\n"
            )
          ),
          (0, r.kt)(
            "p",
            null,
            "will set severity to ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "style"),
            ". Available severity values:"
          ),
          (0, r.kt)(
            "ul",
            null,
            (0, r.kt)("li", { parentName: "ul" }, "none"),
            (0, r.kt)("li", { parentName: "ul" }, "style"),
            (0, r.kt)("li", { parentName: "ul" }, "performance"),
            (0, r.kt)("li", { parentName: "ul" }, "warning"),
            (0, r.kt)("li", { parentName: "ul" }, "error")
          ),
          (0, r.kt)(
            "p",
            null,
            "Rules with a ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "configurable"),
            " badge have additional configuration, check out their docs for more information."
          ),
          (0, r.kt)(
            "h2",
            { id: "configuring-a-rules-exclude-entry" },
            "Configuring a rules-exclude entry"
          ),
          (0, r.kt)(
            "p",
            null,
            "To exclude files from a rules analysis provide a list of regular expressions for ignored files. For example:"
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              {
                parentName: "pre",
                className: "language-yaml",
                metastring: 'title="analysis_options.yaml"',
                title: '"analysis_options.yaml"',
              },
              "dart_code_metrics:\n  rules-exclude:\n    - test/**\n    - lib/src/some_file.dart\n"
            )
          ),
          (0, r.kt)(
            "h2",
            { id: "configuring-an-anti-pattern-entry" },
            "Configuring an anti-pattern entry"
          ),
          (0, r.kt)(
            "p",
            null,
            "To enable an anti-pattern add its id to the ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "anti-patterns"),
            " entry. All anti-pattern have severity which can be overridden with ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "severity"),
            " config entry. For example,"
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              {
                parentName: "pre",
                className: "language-yaml",
                metastring: 'title="analysis_options.yaml"',
                title: '"analysis_options.yaml"',
              },
              "dart_code_metrics:\n  anti-patterns:\n    - long-method:\n        severity: warning\n"
            )
          ),
          (0, r.kt)(
            "p",
            null,
            "will set severity to ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "warning"),
            "."
          ),
          (0, r.kt)(
            "h2",
            { id: "ignoring-a-rule-or-anti-pattern" },
            "Ignoring a rule or anti-pattern"
          ),
          (0, r.kt)(
            "p",
            null,
            "If a specific rule or anti-pattern warning should be ignored, it can be flagged with a comment. For example,"
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-dart" },
              "// ignore: no-empty-block\nvoid emptyFunction() {}\n"
            )
          ),
          (0, r.kt)(
            "p",
            null,
            "tells the analyzer to ignore this instance of the ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "no-empty-block"),
            " warning."
          ),
          (0, r.kt)(
            "p",
            null,
            "End-of-line comments are supported as well. The following communicates the same thing:"
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-dart" },
              "void emptyFunction() {} // ignore: no-empty-block\n"
            )
          ),
          (0, r.kt)(
            "p",
            null,
            "To ignore a rule for an entire file, use the ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "ignore_for_file"),
            " comment flag. For example,"
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-dart" },
              "// ignore_for_file: no-empty-block\n...\n\nvoid emptyFunction() {}\n"
            )
          ),
          (0, r.kt)(
            "p",
            null,
            "tells the analyzer to ignore all occurrences of the kebab-case-types warning in this file."
          ),
          (0, r.kt)(
            "p",
            null,
            "It's the same approach that the dart linter package ",
            (0, r.kt)(
              "a",
              {
                parentName: "p",
                href: "https://github.com/dart-lang/linter#usage",
              },
              "use"
            ),
            "."
          ),
          (0, r.kt)(
            "p",
            null,
            "Additionally, ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "exclude"),
            " entry for the analyzer config can be used to ignore files. For example,"
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              {
                parentName: "pre",
                className: "language-yaml",
                metastring: 'title="analysis_options.yaml"',
                title: '"analysis_options.yaml"',
              },
              'analyzer:\n  exclude:\n    - "example/**"\n    - "build/**"\n    - "**/*.g.dart"\n    - "**/*.freezed.dart"\n'
            )
          ),
          (0, r.kt)(
            "p",
            null,
            "will work both for the analyzer and for this plugin."
          ),
          (0, r.kt)(
            "p",
            null,
            "If you want a specific rule to ignore files, you can configure ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "exclude"),
            " entry for it. For example,"
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              {
                parentName: "pre",
                className: "language-yaml",
                metastring: 'title="analysis_options.yaml"',
                title: '"analysis_options.yaml"',
              },
              "dart_code_metrics:\n  rules:\n    - no-equal-arguments:\n        exclude:\n          - test/**\n"
            )
          ),
          (0, r.kt)("p", null, "and similar example for anti-pattern,"),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              {
                parentName: "pre",
                className: "language-yaml",
                metastring: 'title="analysis_options.yaml"',
                title: '"analysis_options.yaml"',
              },
              "dart_code_metrics:\n  anti-patterns:\n    - long-method:\n        exclude:\n          - test/**\n"
            )
          )
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
