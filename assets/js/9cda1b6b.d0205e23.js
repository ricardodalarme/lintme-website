"use strict";
(self.webpackChunkdart_code_metrics_website =
  self.webpackChunkdart_code_metrics_website || []).push([
  [7006],
  {
    3905: (t, e, a) => {
      a.d(e, { Zo: () => d, kt: () => u });
      var n = a(7294);
      function r(t, e, a) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = a),
          t
        );
      }
      function i(t, e) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function l(t) {
        for (var e = 1; e < arguments.length; e++) {
          var a = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? i(Object(a), !0).forEach(function (e) {
                r(t, e, a[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
            : i(Object(a)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(a, e)
                );
              });
        }
        return t;
      }
      function o(t, e) {
        if (null == t) return {};
        var a,
          n,
          r = (function (t, e) {
            if (null == t) return {};
            var a,
              n,
              r = {},
              i = Object.keys(t);
            for (n = 0; n < i.length; n++)
              (a = i[n]), e.indexOf(a) >= 0 || (r[a] = t[a]);
            return r;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (n = 0; n < i.length; n++)
            (a = i[n]),
              e.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, a) &&
                  (r[a] = t[a]));
        }
        return r;
      }
      var s = n.createContext({}),
        p = function (t) {
          var e = n.useContext(s),
            a = e;
          return t && (a = "function" == typeof t ? t(e) : l(l({}, e), t)), a;
        },
        d = function (t) {
          var e = p(t.components);
          return n.createElement(s.Provider, { value: e }, t.children);
        },
        c = {
          inlineCode: "code",
          wrapper: function (t) {
            var e = t.children;
            return n.createElement(n.Fragment, {}, e);
          },
        },
        m = n.forwardRef(function (t, e) {
          var a = t.components,
            r = t.mdxType,
            i = t.originalType,
            s = t.parentName,
            d = o(t, ["components", "mdxType", "originalType", "parentName"]),
            m = p(a),
            u = r,
            g = m["".concat(s, ".").concat(u)] || m[u] || c[u] || i;
          return a
            ? n.createElement(g, l(l({ ref: e }, d), {}, { components: a }))
            : n.createElement(g, l({ ref: e }, d));
        });
      function u(t, e) {
        var a = arguments,
          r = e && e.mdxType;
        if ("string" == typeof t || r) {
          var i = a.length,
            l = new Array(i);
          l[0] = m;
          var o = {};
          for (var s in e) hasOwnProperty.call(e, s) && (o[s] = e[s]);
          (o.originalType = t),
            (o.mdxType = "string" == typeof t ? t : r),
            (l[1] = o);
          for (var p = 2; p < i; p++) l[p] = a[p];
          return n.createElement.apply(null, l);
        }
        return n.createElement.apply(null, a);
      }
      m.displayName = "MDXCreateElement";
    },
    7365: (t, e, a) => {
      a.r(e),
        a.d(e, {
          assets: () => s,
          contentTitle: () => l,
          default: () => c,
          frontMatter: () => i,
          metadata: () => o,
          toc: () => p,
        });
      var n = a(7462),
        r = (a(7294), a(3905));
      const i = {},
        l = "GitHub Action",
        o = {
          unversionedId: "integrations/github-action",
          id: "integrations/github-action",
          title: "GitHub Action",
          description:
            "Lintme GitHub Action allows you to integrate Lintme into your CI/CD process and get code quality reports inside PR's.",
          source: "@site/docs/integrations/github-action.md",
          sourceDirName: "integrations",
          slug: "/integrations/github-action",
          permalink: "/docs/integrations/github-action",
          draft: !1,
          editUrl:
            "https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/integrations/github-action.md",
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "sidebar",
          previous: {
            title: "Codemagic",
            permalink: "/docs/integrations/codemagic",
          },
        },
        s = {},
        p = [
          { value: "Usage", id: "usage", level: 2 },
          { value: "Inputs", id: "inputs", level: 3 },
          { value: "Inputs", id: "inputs", level: 3 },
          { value: "Output example", id: "output-example", level: 3 },
          { value: "Analysis result", id: "analysis-result", level: 4 },
          { value: "Annotation", id: "annotation", level: 4 },
        ],
        d = { toc: p };
      function c(t) {
        let { components: e, ...i } = t;
        return (0, r.kt)(
          "wrapper",
          (0, n.Z)({}, d, i, { components: e, mdxType: "MDXLayout" }),
          (0, r.kt)("h1", { id: "github-action" }, "GitHub Action"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)(
              "a",
              {
                parentName: "p",
                href: "https://github.com/marketplace/actions/dart-code-metrics-action",
              },
              "Lintme GitHub Action"
            ),
            " allows you to integrate Lintme into your CI/CD process and get code quality reports inside PR's."
          ),
          (0, r.kt)("h2", { id: "usage" }, "Usage"),
          (0, r.kt)(
            "p",
            null,
            "Create ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "lintme.yaml"),
            " under ",
            (0, r.kt)("inlineCode", { parentName: "p" }, ".github/workflows"),
            " with the following content (the default configuration listed):"
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              {
                parentName: "pre",
                className: "language-yml",
                metastring: 'title="lintme.yaml"',
                title: '"lintme.yaml"',
              },
              "name: Lintme\n\non: [push]\n\njobs:\n  check:\n    name: dart-code-metrics-action\n\n    runs-on: ubuntu-latest\n\n    steps:\n      - uses: actions/checkout@v3\n\n      - name: dart-code-metrics\n        uses: dart-code-checker/dart-code-metrics-action@v1\n        with:\n          github_token: ${{ secrets.GITHUB_TOKEN }}\n"
            )
          ),
          (0, r.kt)("h3", { id: "inputs" }, "Inputs"),
          (0, r.kt)("h3", { id: "inputs" }, "Inputs"),
          (0, r.kt)(
            "table",
            null,
            (0, r.kt)(
              "thead",
              { parentName: "table" },
              (0, r.kt)(
                "tr",
                { parentName: "thead" },
                (0, r.kt)("th", { parentName: "tr", align: "left" }, "Name"),
                (0, r.kt)(
                  "th",
                  { parentName: "tr", align: "left" },
                  "Required"
                ),
                (0, r.kt)(
                  "th",
                  { parentName: "tr", align: "left" },
                  "Description"
                ),
                (0, r.kt)("th", { parentName: "tr", align: "left" }, "Default")
              )
            ),
            (0, r.kt)(
              "tbody",
              { parentName: "table" },
              (0, r.kt)(
                "tr",
                { parentName: "tbody" },
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  (0, r.kt)("strong", { parentName: "td" }, "github_token")
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "\u2611\ufe0f"
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Required to post a report on GitHub. ",
                  (0, r.kt)("em", { parentName: "td" }, "Note:"),
                  " the secret ",
                  (0, r.kt)(
                    "a",
                    {
                      parentName: "td",
                      href: "https://help.github.com/en/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token",
                    },
                    (0, r.kt)("inlineCode", { parentName: "a" }, "GITHUB_TOKEN")
                  ),
                  " is already provided by GitHub and you don't have to set it up yourself."
                ),
                (0, r.kt)("td", { parentName: "tr", align: "left" })
              ),
              (0, r.kt)(
                "tr",
                { parentName: "tbody" },
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  (0, r.kt)("strong", { parentName: "td" }, "github_pat")
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Required if you had private GitHub repository in the package dependencies"
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  (0, r.kt)(
                    "a",
                    {
                      parentName: "td",
                      href: "https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token",
                    },
                    (0, r.kt)(
                      "strong",
                      { parentName: "a" },
                      "Personal access token"
                    )
                  ),
                  " must access to ",
                  (0, r.kt)("em", { parentName: "td" }, "repo"),
                  " and ",
                  (0, r.kt)("em", { parentName: "td" }, "read:user"),
                  " ",
                  (0, r.kt)(
                    "a",
                    {
                      parentName: "td",
                      href: "https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps#available-scopes",
                    },
                    "scopes"
                  )
                ),
                (0, r.kt)("td", { parentName: "tr", align: "left" })
              ),
              (0, r.kt)(
                "tr",
                { parentName: "tbody" },
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  (0, r.kt)("strong", { parentName: "td" }, "folders")
                ),
                (0, r.kt)("td", { parentName: "tr", align: "left" }),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "List of folders whose contents will be scanned."
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "[",
                  (0, r.kt)("inlineCode", { parentName: "td" }, "lib"),
                  "]"
                )
              ),
              (0, r.kt)(
                "tr",
                { parentName: "tbody" },
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  (0, r.kt)("strong", { parentName: "td" }, "relative_path")
                ),
                (0, r.kt)("td", { parentName: "tr", align: "left" }),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "If your package isn't at the root of the repository, set this input to indicate its location."
                ),
                (0, r.kt)("td", { parentName: "tr", align: "left" })
              ),
              (0, r.kt)(
                "tr",
                { parentName: "tbody" },
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  (0, r.kt)(
                    "strong",
                    { parentName: "td" },
                    "pull_request_comment"
                  )
                ),
                (0, r.kt)("td", { parentName: "tr", align: "left" }),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Publish detailed report commented directly into your pull request."
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  (0, r.kt)("inlineCode", { parentName: "td" }, "false")
                )
              ),
              (0, r.kt)(
                "tr",
                { parentName: "tbody" },
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  (0, r.kt)(
                    "strong",
                    { parentName: "td" },
                    "analyze_report_title_pattern"
                  )
                ),
                (0, r.kt)("td", { parentName: "tr", align: "left" }),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Configurable analyze report title pattern."
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "Lintme analyze report of $packageName"
                  )
                )
              ),
              (0, r.kt)(
                "tr",
                { parentName: "tbody" },
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  (0, r.kt)("strong", { parentName: "td" }, "fatal_warnings")
                ),
                (0, r.kt)("td", { parentName: "tr", align: "left" }),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Treat warning level issues as fatal."
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  (0, r.kt)("inlineCode", { parentName: "td" }, "false")
                )
              ),
              (0, r.kt)(
                "tr",
                { parentName: "tbody" },
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  (0, r.kt)("strong", { parentName: "td" }, "fatal_performance")
                ),
                (0, r.kt)("td", { parentName: "tr", align: "left" }),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Treat performance level issues as fatal."
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  (0, r.kt)("inlineCode", { parentName: "td" }, "false")
                )
              ),
              (0, r.kt)(
                "tr",
                { parentName: "tbody" },
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  (0, r.kt)("strong", { parentName: "td" }, "fatal_style")
                ),
                (0, r.kt)("td", { parentName: "tr", align: "left" }),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Treat style level issues as fatal."
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  (0, r.kt)("inlineCode", { parentName: "td" }, "false")
                )
              ),
              (0, r.kt)(
                "tr",
                { parentName: "tbody" },
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  (0, r.kt)(
                    "strong",
                    { parentName: "td" },
                    "check_unused_files"
                  )
                ),
                (0, r.kt)("td", { parentName: "tr", align: "left" }),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Additional scan for find unused files in package."
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  (0, r.kt)("inlineCode", { parentName: "td" }, "false")
                )
              ),
              (0, r.kt)(
                "tr",
                { parentName: "tbody" },
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  (0, r.kt)(
                    "strong",
                    { parentName: "td" },
                    "check_unused_files_folders"
                  )
                ),
                (0, r.kt)("td", { parentName: "tr", align: "left" }),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "List of folders whose contents will be scanned for find unused files."
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Taken from ",
                  (0, r.kt)("inlineCode", { parentName: "td" }, "folders"),
                  " argument"
                )
              ),
              (0, r.kt)(
                "tr",
                { parentName: "tbody" },
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  (0, r.kt)(
                    "strong",
                    { parentName: "td" },
                    "unused_files_report_title_pattern"
                  )
                ),
                (0, r.kt)("td", { parentName: "tr", align: "left" }),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Configurable unused files report title pattern."
                ),
                (0, r.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  (0, r.kt)(
                    "inlineCode",
                    { parentName: "td" },
                    "Lintme unused files report of $packageName"
                  )
                )
              )
            )
          ),
          (0, r.kt)("h3", { id: "output-example" }, "Output example"),
          (0, r.kt)("h4", { id: "analysis-result" }, "Analysis result"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("img", {
              alt: "Analysis result example",
              src: a(5814).Z,
              width: "2388",
              height: "1366",
            })
          ),
          (0, r.kt)("h4", { id: "annotation" }, "Annotation"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("img", {
              alt: "Annotation example",
              src: a(4314).Z,
              width: "2432",
              height: "788",
            })
          )
        );
      }
      c.isMDXComponent = !0;
    },
    5814: (t, e, a) => {
      a.d(e, { Z: () => n });
      const n =
        a.p +
        "assets/images/action-analysis-result-5d296ccb1683c18cf8114a0a47ea7d94.png";
    },
    4314: (t, e, a) => {
      a.d(e, { Z: () => n });
      const n =
        a.p + "assets/images/annotation-495af2badb131479e11577077ca073dc.png";
    },
  },
]);
