(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [22268],
  {
    30705: function (e, r, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/leaderboard",
        function () {
          return n(23428);
        },
      ]);
    },
    23428: function (e, r, n) {
      "use strict";
      n.r(r),
        n.d(r, {
          default: function () {
            return T;
          },
        });
      var t = n(85893),
        i = n(67294),
        s = n(93717),
        a = n(71293),
        l = n(96854),
        d = n(5460),
        o = n(10991),
        c = n(99840),
        x = n(80510),
        u = n(4693),
        h = n(15115),
        p = n(64698),
        f = n(35796),
        g = n(65548),
        m = n(25432),
        b = (e) => {
          let {
              noOfLines: r = 3,
              spacing: n = "0.5rem",
              skeletonHeight: i = "0.5rem",
              className: s,
              startColor: a,
              endColor: d,
              isLoaded: o,
              fadeDuration: c,
              speed: x,
              variant: u,
              size: h,
              colorScheme: p,
              children: b,
              ...j
            } = e,
            y = (0, f.S)("number" == typeof r ? [r] : r) || 3,
            k = Array(y)
              .fill(1)
              .map((e, r) => r + 1),
            w = (e) => (y > 1 && e === k.length ? "80%" : "100%"),
            _ = (0, m.cx)("chakra-skeleton__group", s);
          return (0, t.jsx)(g.m.div, {
            className: _,
            ...j,
            children: k.map((e, r) => {
              if (o && r > 0) return null;
              let s = o
                ? null
                : { mb: e === k.length ? "0" : n, width: w(e), height: i };
              return (0, t.jsx)(
                l.O,
                {
                  startColor: a,
                  endColor: d,
                  isLoaded: o,
                  fadeDuration: c,
                  speed: x,
                  variant: u,
                  size: h,
                  colorScheme: p,
                  ...s,
                  children: 0 === r ? b : void 0,
                },
                k.length.toString() + e
              );
            }),
          });
        };
      b.displayName = "SkeletonText";
      var j = ({ size: e = "2rem", ...r }) =>
        (0, t.jsx)(l.O, { borderRadius: "full", boxSize: e, ...r });
      j.displayName = "SkeletonCircle";
      var y = n(45399),
        k = n(24109),
        w = n(44471),
        _ = { src: "/_next/static/media/user-ph.aebd5604.png" },
        T = () => {
          let [e, r] = (0, i.useState)(),
            [n, f] = (0, i.useState)(!0),
            g = (0, i.useContext)(w.Z),
            m = {
              border: "none",
              padding: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            };
          return (
            (0, i.useEffect)(() => {
              console.log("in"),
                (async () => {
                  try {
                    let e = await y.Z.getLeaderboard();
                    r(e), console.log(e);
                  } catch (e) {
                    console.error("Failed to fetch owner profile:", e);
                  } finally {
                    f(!1);
                  }
                })();
            }, []),
            (0, t.jsx)(s.k, {
              flexDir: ["column"],
              overflowY: "auto",
              color: "white",
              height: "100%",
              children: (0, t.jsxs)(s.k, {
                borderRadius: "24px",
                background: (null == g ? void 0 : g.isMobile)
                  ? "none"
                  : "linear-gradient(135deg, rgba(245, 247, 250, 0.06) 0%, rgba(245, 247, 250, 0.0001) 100%)",
                backdropFilter: (null == g ? void 0 : g.isMobile)
                  ? "none"
                  : "blur(50px)",
                padding: (null == g ? void 0 : g.isMobile) ? "0" : "20px",
                position: "relative",
                flexDirection: "column",
                overflow: "auto",
                children: [
                  (0, t.jsx)(a.x, {
                    fontSize: (null == g ? void 0 : g.isMobile) ? 22 : 14,
                    fontWeight: 600,
                    color: "white",
                    children: "Leaderboard",
                  }),
                  (null == g ? void 0 : g.isMobile)
                    ? (0, t.jsx)(t.Fragment, {
                        children: n
                          ? (0, t.jsx)(t.Fragment, {
                              children: Array.from({ length: 10 }).map((e, r) =>
                                (0, t.jsx)(
                                  l.O,
                                  {
                                    height: "246px",
                                    width: "100%",
                                    borderRadius: "24px",
                                    margin: "5px 0",
                                    opacity: 0.2,
                                  },
                                  r
                                )
                              ),
                            })
                          : (0, t.jsx)(t.Fragment, {
                              children: e.map((e, r) =>
                                (0, t.jsxs)(
                                  s.k,
                                  {
                                    borderRadius: "24px",
                                    background:
                                      "linear-gradient(135deg, rgba(245, 247, 250, 0.06) 0%, rgba(245, 247, 250, 0.0001) 100%)",
                                    backdropFilter: "blur(50px)",
                                    padding: "20px",
                                    gap: 5,
                                    margin: "5px 0",
                                    alignItems: "center",
                                    children: [
                                      (0, t.jsxs)(s.k, {
                                        flexDirection: "column",
                                        gap: 2,
                                        width: "70%",
                                        children: [
                                          (0, t.jsxs)(s.k, {
                                            gap: 2,
                                            alignItems: "center",
                                            marginBottom: "10px",
                                            children: [
                                              (0, t.jsx)(d.E, {
                                                display: {
                                                  base: "none",
                                                  lgOnly: "block",
                                                },
                                                width: "40px",
                                                height: "40px",
                                                borderRadius: "50%",
                                                src: e.logoUrl || _.src,
                                              }),
                                              (0, t.jsx)(a.x, {
                                                fontWeight: "bold",
                                                children:
                                                  e.id === e.nickname
                                                    ? (0, k.X)(e.nickname)
                                                    : e.nickname,
                                              }),
                                            ],
                                          }),
                                          (0, t.jsxs)(s.k, {
                                            gap: 1,
                                            fontSize: "0.75rem",
                                            fontWeight: "700",
                                            alignItems: "end",
                                            children: [
                                              (0, t.jsx)(a.x, {
                                                color: "gray.400",
                                                textTransform: "uppercase",
                                                width: (
                                                  null == g
                                                    ? void 0
                                                    : g.isMobile
                                                )
                                                  ? "150px"
                                                  : "unset",
                                                children: "Achievements:",
                                              }),
                                              " ",
                                              (0, t.jsx)(a.x, {
                                                children: e.badgeCount || 0,
                                              }),
                                            ],
                                          }),
                                          (0, t.jsxs)(s.k, {
                                            gap: 1,
                                            fontSize: "0.75rem",
                                            fontWeight: "700",
                                            alignItems: "end",
                                            children: [
                                              (0, t.jsx)(a.x, {
                                                color: "gray.400",
                                                textTransform: "uppercase",
                                                children: "Level:",
                                              }),
                                              " ",
                                              (0, t.jsx)(a.x, {
                                                children: e.level || 0,
                                              }),
                                            ],
                                          }),
                                          (0, t.jsxs)(s.k, {
                                            gap: 1,
                                            fontSize: "0.75rem",
                                            fontWeight: "700",
                                            alignItems: "end",
                                            children: [
                                              (0, t.jsx)(a.x, {
                                                color: "gray.400",
                                                textTransform: "uppercase",
                                                children: "AI created:",
                                              }),
                                              " ",
                                              (0, t.jsx)(a.x, {
                                                children:
                                                  e.stats.created_agent || 0,
                                              }),
                                            ],
                                          }),
                                          (0, t.jsxs)(s.k, {
                                            gap: 1,
                                            fontSize: "0.75rem",
                                            fontWeight: "700",
                                            alignItems: "end",
                                            children: [
                                              (0, t.jsx)(a.x, {
                                                color: "gray.400",
                                                textTransform: "uppercase",
                                                children: "Promts created:",
                                              }),
                                              " ",
                                              (0, t.jsx)(a.x, {
                                                children:
                                                  e.stats
                                                    .created_prompt_template ||
                                                  0,
                                              }),
                                            ],
                                          }),
                                          (0, t.jsxs)(s.k, {
                                            gap: 1,
                                            fontSize: "0.75rem",
                                            fontWeight: "700",
                                            alignItems: "end",
                                            children: [
                                              (0, t.jsx)(a.x, {
                                                color: "gray.400",
                                                textTransform: "uppercase",
                                                children:
                                                  "Promt Subscriptions:",
                                              }),
                                              " ",
                                              (0, t.jsx)(a.x, {
                                                children:
                                                  e.stats
                                                    .prompt_template_subscription_received ||
                                                  0,
                                              }),
                                            ],
                                          }),
                                          (0, t.jsxs)(s.k, {
                                            gap: 1,
                                            fontSize: "0.75rem",
                                            fontWeight: "700",
                                            alignItems: "end",
                                            children: [
                                              (0, t.jsx)(a.x, {
                                                color: "gray.400",
                                                textTransform: "uppercase",
                                                children: "Agent Hub Messages:",
                                              }),
                                              " ",
                                              (0, t.jsx)(a.x, {
                                                children:
                                                  e.stats
                                                    .send_message_agent_hub ||
                                                  0,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, t.jsx)(s.k, {
                                        fontSize: "80px",
                                        color: "gray.400",
                                        opacity: 0.2,
                                        children: r + 1,
                                      }),
                                    ],
                                  },
                                  r
                                )
                              ),
                            }),
                      })
                    : (0, t.jsxs)(o.i, {
                        children: [
                          (0, t.jsx)(c.h, {
                            children: (0, t.jsxs)(x.Tr, {
                              display: "flex",
                              justifyContent: "space-between",
                              children: [
                                (0, t.jsx)(u.Th, {
                                  ...m,
                                  color: "gray.400",
                                  width: "26px",
                                  children: "#",
                                }),
                                (0, t.jsx)(u.Th, {
                                  ...m,
                                  color: "gray.400",
                                  width: "20%",
                                  justifyContent: "left",
                                  children: "User",
                                }),
                                (0, t.jsx)(u.Th, {
                                  ...m,
                                  color: "gray.400",
                                  width: "120px",
                                  children: "Achievements",
                                }),
                                (0, t.jsx)(u.Th, {
                                  ...m,
                                  color: "gray.400",
                                  width: "46px",
                                  children: "Level",
                                }),
                                (0, t.jsx)(u.Th, {
                                  ...m,
                                  color: "gray.400",
                                  width: "80px",
                                  children: "AI created",
                                }),
                                (0, t.jsx)(u.Th, {
                                  ...m,
                                  color: "gray.400",
                                  width: "70px",
                                  textAlign: "center",
                                  children: "Promts created",
                                }),
                                (0, t.jsx)(u.Th, {
                                  ...m,
                                  color: "gray.400",
                                  width: "110px",
                                  textAlign: "center",
                                  children: "Promt Subscriptions",
                                }),
                                (0, t.jsx)(u.Th, {
                                  ...m,
                                  color: "gray.400",
                                  width: "80px",
                                  textAlign: "center",
                                  children: "Agent Hub Messages",
                                }),
                              ],
                            }),
                          }),
                          (0, t.jsx)(h.p, {
                            children: n
                              ? (0, t.jsx)(t.Fragment, {
                                  children: Array.from({ length: 10 }).map(
                                    (e, r) =>
                                      (0, t.jsxs)(
                                        x.Tr,
                                        {
                                          border: "none",
                                          fontSize: 14,
                                          margin: "5px 0",
                                          background:
                                            "linear-gradient(135deg, rgba(245, 247, 250, 0.06) 0%, rgba(245, 247, 250, 0.0001) 100%)",
                                          backdropFilter: "blur(50px)",
                                          borderRadius: "12px",
                                          display: "flex",
                                          justifyContent: "space-between",
                                          children: [
                                            (0, t.jsx)(p.Td, {
                                              width: "26px",
                                              ...m,
                                              children: (0, t.jsx)(b, {
                                                noOfLines: 1,
                                                width: "10px",
                                              }),
                                            }),
                                            (0, t.jsxs)(p.Td, {
                                              width: "20%",
                                              gap: "10px",
                                              ...m,
                                              children: [
                                                (0, t.jsx)(j, {}),
                                                " ",
                                                (0, t.jsx)(b, {
                                                  noOfLines: 1,
                                                  width: "80%",
                                                }),
                                              ],
                                            }),
                                            (0, t.jsx)(p.Td, {
                                              width: "120px",
                                              ...m,
                                              children: (0, t.jsx)(b, {
                                                noOfLines: 1,
                                                width: "10px",
                                              }),
                                            }),
                                            (0, t.jsx)(p.Td, {
                                              width: "46px",
                                              ...m,
                                              children: (0, t.jsx)(b, {
                                                noOfLines: 1,
                                                width: "10px",
                                              }),
                                            }),
                                            (0, t.jsx)(p.Td, {
                                              width: "80px",
                                              ...m,
                                              children: (0, t.jsx)(b, {
                                                noOfLines: 1,
                                                width: "10px",
                                              }),
                                            }),
                                            (0, t.jsx)(p.Td, {
                                              width: "70px",
                                              ...m,
                                              children: (0, t.jsx)(b, {
                                                noOfLines: 1,
                                                width: "10px",
                                              }),
                                            }),
                                            (0, t.jsx)(p.Td, {
                                              width: "110px",
                                              ...m,
                                              children: (0, t.jsx)(b, {
                                                noOfLines: 1,
                                                width: "10px",
                                              }),
                                            }),
                                            (0, t.jsx)(p.Td, {
                                              width: "80px",
                                              ...m,
                                              children: (0, t.jsx)(b, {
                                                noOfLines: 1,
                                                width: "10px",
                                              }),
                                            }),
                                          ],
                                        },
                                        r
                                      )
                                  ),
                                })
                              : (0, t.jsx)(t.Fragment, {
                                  children: e.map((e, r) =>
                                    (0, t.jsxs)(
                                      x.Tr,
                                      {
                                        border: "none",
                                        fontSize: 14,
                                        margin: "5px 0",
                                        background:
                                          "linear-gradient(135deg, rgba(245, 247, 250, 0.06) 0%, rgba(245, 247, 250, 0.0001) 100%)",
                                        backdropFilter: "blur(50px)",
                                        borderRadius: "12px",
                                        display: "flex",
                                        padding: "10px 0",
                                        justifyContent: "space-between",
                                        children: [
                                          (0, t.jsxs)(p.Td, {
                                            ...m,
                                            width: "26px",
                                            children: [r + 1, " "],
                                          }),
                                          (0, t.jsxs)(p.Td, {
                                            ...m,
                                            overflow: "hidden",
                                            gap: "10px",
                                            width: "20%",
                                            justifyContent: "left",
                                            children: [
                                              (0, t.jsx)(d.E, {
                                                display: {
                                                  base: "none",
                                                  lgOnly: "block",
                                                },
                                                width: "32px",
                                                height: "32px",
                                                borderRadius: "50%",
                                                src: e.logoUrl || _.src,
                                              }),
                                              (0, t.jsx)(a.x, {
                                                maxWidth: "75%",
                                                children:
                                                  e.id === e.nickname
                                                    ? (0, k.X)(e.nickname)
                                                    : e.nickname,
                                              }),
                                            ],
                                          }),
                                          (0, t.jsx)(p.Td, {
                                            ...m,
                                            width: "120px",
                                            children: e.badgeCount || 0,
                                          }),
                                          (0, t.jsx)(p.Td, {
                                            ...m,
                                            width: "46px",
                                            children: e.level,
                                          }),
                                          (0, t.jsx)(p.Td, {
                                            ...m,
                                            width: "80px",
                                            children:
                                              e.stats.created_agent || 0,
                                          }),
                                          (0, t.jsx)(p.Td, {
                                            ...m,
                                            width: "70px",
                                            children:
                                              e.stats.created_prompt_template ||
                                              0,
                                          }),
                                          (0, t.jsx)(p.Td, {
                                            ...m,
                                            width: "110px",
                                            children:
                                              e.stats
                                                .prompt_template_subscription_received ||
                                              0,
                                          }),
                                          (0, t.jsx)(p.Td, {
                                            ...m,
                                            width: "80px",
                                            children:
                                              e.stats.send_message_agent_hub ||
                                              0,
                                          }),
                                        ],
                                      },
                                      r
                                    )
                                  ),
                                }),
                          }),
                        ],
                      }),
                ],
              }),
            })
          );
        };
    },
    35796: function (e, r, n) {
      "use strict";
      n.d(r, {
        S: function () {
          return l;
        },
      });
      var t = n(33951),
        i = n(18618),
        s = n(48940),
        a = n(25432);
      function l(e, r) {
        var n;
        let l = (function (e) {
            var r, n;
            let t = (0, a.Kn)(e) ? e : { fallback: null != e ? e : "base" },
              l = (0, s.F)().__breakpoints.details.map(
                ({ minMaxQuery: e, breakpoint: r }) => ({
                  breakpoint: r,
                  query: e.replace("@media screen and ", ""),
                })
              ),
              d = l.map((e) => e.breakpoint === t.fallback),
              o = (0, i.a)(
                l.map((e) => e.query),
                { fallback: d, ssr: t.ssr }
              ).findIndex((e) => !0 == e);
            return null != (n = null == (r = l[o]) ? void 0 : r.breakpoint)
              ? n
              : t.fallback;
          })((0, a.Kn)(r) ? r : { fallback: null != r ? r : "base" }),
          d = (0, s.F)();
        if (!l) return;
        let o = Array.from(
          (null == (n = d.__breakpoints) ? void 0 : n.keys) || []
        );
        return (function (e, r, n = t.AV) {
          let i = Object.keys(e).indexOf(r);
          if (-1 !== i) return e[r];
          let s = n.indexOf(r);
          for (; s >= 0; ) {
            let r = n[s];
            if (e.hasOwnProperty(r)) {
              i = s;
              break;
            }
            s -= 1;
          }
          if (-1 !== i) return e[n[i]];
        })(
          Array.isArray(e)
            ? Object.fromEntries(
                Object.entries((0, t.Yq)(e, o)).map(([e, r]) => [e, r])
              )
            : e,
          l,
          o
        );
      }
    },
    96854: function (e, r, n) {
      "use strict";
      n.d(r, {
        O: function () {
          return m;
        },
      });
      var t = n(67294),
        i = n(25432),
        s = n(65548),
        a = n(33179),
        l = n(70917),
        d = n(16554),
        o = n(77030),
        c = n(7634),
        x = n(85893),
        u = (0, s.m)("div", {
          baseStyle: {
            boxShadow: "none",
            backgroundClip: "padding-box",
            cursor: "default",
            color: "transparent",
            pointerEvents: "none",
            userSelect: "none",
            "&::before, &::after, *": { visibility: "hidden" },
          },
        }),
        h = (0, a.gJ)("skeleton-start-color"),
        p = (0, a.gJ)("skeleton-end-color"),
        f = (0, l.F4)({ from: { opacity: 0 }, to: { opacity: 1 } }),
        g = (0, l.F4)({
          from: { borderColor: h.reference, background: h.reference },
          to: { borderColor: p.reference, background: p.reference },
        }),
        m = (0, d.G)((e, r) => {
          let n = {
              ...e,
              fadeDuration:
                "number" == typeof e.fadeDuration ? e.fadeDuration : 0.4,
              speed: "number" == typeof e.speed ? e.speed : 0.8,
            },
            l = (0, o.mq)("Skeleton", n),
            d = (function () {
              let e = (0, t.useRef)(!0);
              return (
                (0, t.useEffect)(() => {
                  e.current = !1;
                }, []),
                e.current
              );
            })(),
            {
              startColor: m = "",
              endColor: b = "",
              isLoaded: j,
              fadeDuration: y,
              speed: k,
              className: w,
              fitContent: _,
              ...T
            } = (0, a.Lr)(n),
            [v, S] = (0, c.dQ)("colors", [m, b]),
            O = (function (e) {
              let r = (0, t.useRef)();
              return (
                (0, t.useEffect)(() => {
                  r.current = e;
                }, [e]),
                r.current
              );
            })(j),
            C = (0, i.cx)("chakra-skeleton", w),
            A = {
              ...(v && { [h.variable]: v }),
              ...(S && { [p.variable]: S }),
            };
          if (j) {
            let e = d || O ? "none" : `${f} ${y}s`;
            return (0, x.jsx)(s.m.div, {
              ref: r,
              className: C,
              __css: { animation: e },
              ...T,
            });
          }
          return (0, x.jsx)(u, {
            ref: r,
            className: C,
            ...T,
            __css: {
              width: _ ? "fit-content" : void 0,
              ...l,
              ...A,
              _dark: { ...l._dark, ...A },
              animation: `${k}s linear infinite alternate ${g}`,
            },
          });
        });
      m.displayName = "Skeleton";
    },
    99840: function (e, r, n) {
      "use strict";
      n.d(r, {
        h: function () {
          return l;
        },
      });
      var t = n(10991),
        i = n(16554),
        s = n(65548),
        a = n(85893),
        l = (0, i.G)((e, r) => {
          let n = (0, t.p)();
          return (0, a.jsx)(s.m.thead, { ...e, ref: r, __css: n.thead });
        });
    },
    10991: function (e, r, n) {
      "use strict";
      n.d(r, {
        i: function () {
          return u;
        },
        p: function () {
          return x;
        },
      });
      var t = n(16554),
        i = n(77030),
        s = n(33179),
        a = n(65548),
        l = n(25432),
        d = n(55227),
        o = n(85893),
        [c, x] = (0, d.k)({
          name: "TableStylesContext",
          errorMessage:
            "useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Table />\" ",
        }),
        u = (0, t.G)((e, r) => {
          let n = (0, i.jC)("Table", e),
            { className: t, layout: d, ...x } = (0, s.Lr)(e);
          return (0, o.jsx)(c, {
            value: n,
            children: (0, o.jsx)(a.m.table, {
              ref: r,
              __css: { tableLayout: d, ...n.table },
              className: (0, l.cx)("chakra-table", t),
              ...x,
            }),
          });
        });
      u.displayName = "Table";
    },
    80510: function (e, r, n) {
      "use strict";
      n.d(r, {
        Tr: function () {
          return l;
        },
      });
      var t = n(10991),
        i = n(16554),
        s = n(65548),
        a = n(85893),
        l = (0, i.G)((e, r) => {
          let n = (0, t.p)();
          return (0, a.jsx)(s.m.tr, { ...e, ref: r, __css: n.tr });
        });
    },
    15115: function (e, r, n) {
      "use strict";
      n.d(r, {
        p: function () {
          return l;
        },
      });
      var t = n(10991),
        i = n(16554),
        s = n(65548),
        a = n(85893),
        l = (0, i.G)((e, r) => {
          let n = (0, t.p)();
          return (0, a.jsx)(s.m.tbody, { ...e, ref: r, __css: n.tbody });
        });
    },
    4693: function (e, r, n) {
      "use strict";
      n.d(r, {
        Th: function () {
          return l;
        },
      });
      var t = n(10991),
        i = n(16554),
        s = n(65548),
        a = n(85893),
        l = (0, i.G)(({ isNumeric: e, ...r }, n) => {
          let i = (0, t.p)();
          return (0, a.jsx)(s.m.th, {
            ...r,
            ref: n,
            __css: i.th,
            "data-is-numeric": e,
          });
        });
    },
    64698: function (e, r, n) {
      "use strict";
      n.d(r, {
        Td: function () {
          return l;
        },
      });
      var t = n(10991),
        i = n(16554),
        s = n(65548),
        a = n(85893),
        l = (0, i.G)(({ isNumeric: e, ...r }, n) => {
          let i = (0, t.p)();
          return (0, a.jsx)(s.m.td, {
            ...r,
            ref: n,
            __css: i.td,
            "data-is-numeric": e,
          });
        });
    },
  },
  function (e) {
    e.O(0, [92888, 49774, 40179], function () {
      return e((e.s = 30705));
    }),
      (_N_E = e.O());
  },
]);
