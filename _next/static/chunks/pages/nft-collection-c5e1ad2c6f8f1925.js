(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [18865],
  {
    82570: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/nft-collection",
        function () {
          return n(30857);
        },
      ]);
    },
    19251: function (e, t, n) {
      "use strict";
      var i = n(85893),
        a = n(27239),
        r = n(96854),
        o = n(5460),
        s = n(67294);
      t.Z = (e) => {
        let { nftUrl: t, onSelect: n } = e,
          [l, c] = (0, s.useState)(!1),
          d = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(() => {
            let e = d.current;
            if (e) {
              if (e.complete) c(!0);
              else {
                let t = () => c(!0);
                return (
                  e.addEventListener("load", t),
                  () => {
                    e.removeEventListener("load", t);
                  }
                );
              }
            }
          }, [t]),
          (0, i.jsxs)(a.M, {
            onClick: n,
            bg: "#FFFFFF0A",
            borderRadius: "24px",
            padding: "8px",
            height: "266px",
            width: "203px",
            color: "#FFFFFF",
            position: "relative",
            backgroundClip: "padding-box",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "500",
            fontSize: "xs",
            lineHeight: "20px",
            minW: "208px",
            _hover: { bg: "#FFFFFF1A" },
            _active: { bg: "#FFFFFF2A" },
            sx: {
              "::before": {
                content: '""',
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                borderRadius: "24px",
                padding: "2px",
                background:
                  "linear-gradient(0deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.04)), linear-gradient(112.26deg, #FF2091 10.81%, #0184FD 160.09%)",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "destination-out",
                maskComposite: "exclude",
              },
            },
            children: [
              !l &&
                (0, i.jsx)(r.O, {
                  height: "100%",
                  width: "100%",
                  borderRadius: "24px",
                  position: "absolute",
                  top: "0",
                  left: "0",
                  bg: "#171B1D",
                }),
              (0, i.jsx)(o.E, {
                ref: d,
                objectFit: "cover",
                src: t,
                alt: "NFT Image",
                height: "100%",
                width: "100%",
                borderRadius: "24px",
                style: { visibility: l ? "visible" : "hidden" },
              }),
            ],
          })
        );
      };
    },
    28929: function (e, t, n) {
      "use strict";
      var i = n(85893),
        a = n(67990),
        r = n(19778),
        o = n(68938),
        s = n(64859),
        l = n(66205),
        c = n(57747),
        d = n(54346),
        u = n(8371);
      n(67294);
      var p = n(19251);
      t.Z = (e) => {
        var t, n, f, g, h, x, m, b;
        let { nft: v, isOpen: j, onClose: F } = e,
          w = (e) =>
            e
              .split("_")
              .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
              .join(" ");
        return (0, i.jsxs)(a.u_, {
          isOpen: j,
          onClose: F,
          isCentered: !0,
          children: [
            (0, i.jsx)(r.Z, {}),
            (0, i.jsxs)(o.h, {
              backdropFilter: "blur(50px)",
              bg: "linear-gradient(135deg, rgba(245, 247, 250, 0.06) 0%, rgba(245, 247, 250, 0.0001) 100%)",
              borderRadius: "24px",
              padding: "12px",
              color: "white",
              children: [
                (0, i.jsx)(s.x, { textAlign: "center", children: "Mint NFT" }),
                (0, i.jsx)(l.o, {}),
                (0, i.jsx)(c.xu, {
                  margin: "auto",
                  children: (0, i.jsx)(p.Z, {
                    nftUrl: null == v ? void 0 : v.imageUrl,
                  }),
                }),
                (0, i.jsx)(d.f, {
                  mb: "15px",
                  children:
                    (null == v
                      ? void 0
                      : null === (g = v.metadata) || void 0 === g
                      ? void 0
                      : null === (f = g.raw) || void 0 === f
                      ? void 0
                      : null === (n = f.metadata) || void 0 === n
                      ? void 0
                      : null === (t = n.attributes) || void 0 === t
                      ? void 0
                      : t.length) > 0 &&
                    (0, i.jsx)(c.xu, {
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      children:
                        null === (b = v.metadata) || void 0 === b
                          ? void 0
                          : null === (m = b.raw) || void 0 === m
                          ? void 0
                          : null === (x = m.metadata) || void 0 === x
                          ? void 0
                          : null === (h = x.attributes) || void 0 === h
                          ? void 0
                          : h.map((e, t) =>
                              (0, i.jsxs)(
                                u.Vp,
                                {
                                  bg: "#FFFFFF12",
                                  variant: "subtle",
                                  colorScheme: "white",
                                  children: [w(e.trait_type), ": ", e.value],
                                },
                                t
                              )
                            ),
                    }),
                }),
              ],
            }),
          ],
        });
      };
    },
    14238: function (e, t, n) {
      "use strict";
      var i = n(85893),
        a = n(93717),
        r = n(71293),
        o = n(93108),
        s = n(81136),
        l = n(67294),
        c = n(19251),
        d = n(11163),
        u = n(57348),
        p = n(28929);
      t.Z = () => {
        let [e, t] = (0, l.useState)(!1),
          [n, f] = (0, l.useState)(null),
          [g, h] = (0, l.useState)(!1),
          [x, m] = (0, l.useState)([]),
          b = (0, d.useRouter)(),
          v = (e) => {
            f(e), h(!0);
          };
        return (
          (0, l.useEffect)(() => {
            (async () => {
              t(!0);
              try {
                let e = await u.Z.getNFTCollection();
                m(e.collection);
              } catch (e) {
                console.error("Error fetching NFTs:", e);
              } finally {
                t(!1);
              }
            })();
          }, []),
          (0, i.jsxs)(a.k, {
            height: "100%",
            flexDir: "column",
            children: [
              (0, i.jsxs)(a.k, {
                gap: "12px",
                alignItems: "center",
                justifyContent: "space-between",
                mb: "4",
                children: [
                  (0, i.jsx)(r.x, {
                    fontSize: "2xl",
                    color: "white",
                    fontWeight: "600",
                    children: "NFT Collection",
                  }),
                  (0, i.jsx)(o.z, {
                    type: "button",
                    width: "150px",
                    height: "50px",
                    borderRadius: "16px",
                    fontSize: "sm",
                    className: "main-gradient-bg",
                    color: "white",
                    onClick: () => b.push("/"),
                    children: "Mint NFT",
                  }),
                ],
              }),
              (0, i.jsx)(a.k, {
                minHeight: "100%",
                padding: "20px",
                borderRadius: "24px",
                backdropFilter: "blur(50px)",
                flexWrap: "wrap",
                gap: "24px",
                bg: "linear-gradient(135deg, rgba(245, 247, 250, 0.06) 0%, rgba(245, 247, 250, 0.0001) 100%)",
                justifyContent: "center",
                children: e
                  ? (0, i.jsx)(s.$, {
                      size: "xl",
                      color: "white",
                      margin: "auto",
                    })
                  : x.map((e, t) =>
                      (0, i.jsx)(
                        c.Z,
                        {
                          nftUrl: e.imageUrl,
                          onSelect: () => {
                            v(e);
                          },
                        },
                        t
                      )
                    ),
              }),
              (0, i.jsx)(p.Z, {
                isOpen: g,
                nft: n,
                onClose: () => {
                  h(!1);
                },
              }),
            ],
          })
        );
      };
    },
    30857: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n(14238);
      t.default = i.Z;
    },
    57348: function (e, t, n) {
      "use strict";
      let i = "https://api.model-hub.skillfulai.io";
      class a {
        async getMintedNFT(e) {
          let t = ""
            .concat(i, "/api/v1/catcollection?action=mintCheck&tx=")
            .concat(e);
          try {
            let e = await fetch(t, {
              method: "GET",
              headers: { "Content-Type": "application/json" },
            });
            if (!e.ok) {
              let t = await e.json();
              throw { status: e.status, message: t.message };
            }
            return await e.json();
          } catch (e) {
            throw e;
          }
        }
        async getNFTCollection() {
          try {
            let e = await fetch(
              "".concat(i, "/api/v1/catcollection?action=collection "),
              { method: "GET", headers: { "Content-Type": "application/json" } }
            );
            if (!e.ok) {
              let t = await e.json();
              throw { status: e.status, message: t.message };
            }
            return await e.json();
          } catch (e) {
            throw e;
          }
        }
        async getUserNFTCollection(e) {
          let t = ""
            .concat(i, "/api/v1/catcollection?action=mine&address=")
            .concat(e, " ");
          try {
            let e = await fetch(t, {
              method: "GET",
              headers: { "Content-Type": "application/json" },
            });
            if (!e.ok) {
              let t = await e.json();
              throw { status: e.status, message: t.message };
            }
            return await e.json();
          } catch (e) {
            throw e;
          }
        }
      }
      let r = new a();
      t.Z = r;
    },
    96854: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return m;
        },
      });
      var i = n(67294),
        a = n(25432),
        r = n(65548),
        o = n(33179),
        s = n(70917),
        l = n(16554),
        c = n(77030),
        d = n(7634),
        u = n(85893),
        p = (0, r.m)("div", {
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
        f = (0, o.gJ)("skeleton-start-color"),
        g = (0, o.gJ)("skeleton-end-color"),
        h = (0, s.F4)({ from: { opacity: 0 }, to: { opacity: 1 } }),
        x = (0, s.F4)({
          from: { borderColor: f.reference, background: f.reference },
          to: { borderColor: g.reference, background: g.reference },
        }),
        m = (0, l.G)((e, t) => {
          let n = {
              ...e,
              fadeDuration:
                "number" == typeof e.fadeDuration ? e.fadeDuration : 0.4,
              speed: "number" == typeof e.speed ? e.speed : 0.8,
            },
            s = (0, c.mq)("Skeleton", n),
            l = (function () {
              let e = (0, i.useRef)(!0);
              return (
                (0, i.useEffect)(() => {
                  e.current = !1;
                }, []),
                e.current
              );
            })(),
            {
              startColor: m = "",
              endColor: b = "",
              isLoaded: v,
              fadeDuration: j,
              speed: F,
              className: w,
              fitContent: y,
              ...k
            } = (0, o.Lr)(n),
            [C, _] = (0, d.dQ)("colors", [m, b]),
            T = (function (e) {
              let t = (0, i.useRef)();
              return (
                (0, i.useEffect)(() => {
                  t.current = e;
                }, [e]),
                t.current
              );
            })(v),
            N = (0, a.cx)("chakra-skeleton", w),
            S = {
              ...(C && { [f.variable]: C }),
              ...(_ && { [g.variable]: _ }),
            };
          if (v) {
            let e = l || T ? "none" : `${h} ${j}s`;
            return (0, u.jsx)(r.m.div, {
              ref: t,
              className: N,
              __css: { animation: e },
              ...k,
            });
          }
          return (0, u.jsx)(p, {
            ref: t,
            className: N,
            ...k,
            __css: {
              width: y ? "fit-content" : void 0,
              ...s,
              ...S,
              _dark: { ...s._dark, ...S },
              animation: `${F}s linear infinite alternate ${x}`,
            },
          });
        });
      m.displayName = "Skeleton";
    },
    8371: function (e, t, n) {
      "use strict";
      n.d(t, {
        SD: function () {
          return x;
        },
        Sn: function () {
          return f;
        },
        Vp: function () {
          return p;
        },
        bq: function () {
          return g;
        },
      });
      var i = n(36948),
        a = n(55227),
        r = n(16554),
        o = n(77030),
        s = n(33179),
        l = n(65548),
        c = n(85893),
        [d, u] = (0, a.k)({
          name: "TagStylesContext",
          errorMessage:
            "useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Tag />\" ",
        }),
        p = (0, r.G)((e, t) => {
          let n = (0, o.jC)("Tag", e),
            i = (0, s.Lr)(e),
            a = {
              display: "inline-flex",
              verticalAlign: "top",
              alignItems: "center",
              maxWidth: "100%",
              ...n.container,
            };
          return (0, c.jsx)(d, {
            value: n,
            children: (0, c.jsx)(l.m.span, { ref: t, ...i, __css: a }),
          });
        });
      p.displayName = "Tag";
      var f = (0, r.G)((e, t) => {
        let n = u();
        return (0, c.jsx)(l.m.span, {
          ref: t,
          noOfLines: 1,
          ...e,
          __css: n.label,
        });
      });
      (f.displayName = "TagLabel"),
        ((0, r.G)((e, t) =>
          (0, c.jsx)(i.J, {
            ref: t,
            verticalAlign: "top",
            marginEnd: "0.5rem",
            ...e,
          })
        ).displayName = "TagLeftIcon");
      var g = (0, r.G)((e, t) =>
        (0, c.jsx)(i.J, {
          ref: t,
          verticalAlign: "top",
          marginStart: "0.5rem",
          ...e,
        })
      );
      g.displayName = "TagRightIcon";
      var h = (e) =>
        (0, c.jsx)(i.J, {
          verticalAlign: "inherit",
          viewBox: "0 0 512 512",
          ...e,
          children: (0, c.jsx)("path", {
            fill: "currentColor",
            d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z",
          }),
        });
      h.displayName = "TagCloseIcon";
      var x = (0, r.G)((e, t) => {
        let { isDisabled: n, children: i, ...a } = e,
          r = {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            outline: "0",
            ...u().closeButton,
          };
        return (0, c.jsx)(l.m.button, {
          ref: t,
          "aria-label": "close",
          ...a,
          type: "button",
          disabled: n,
          __css: r,
          children: i || (0, c.jsx)(h, {}),
        });
      });
      x.displayName = "TagCloseButton";
    },
  },
  function (e) {
    e.O(0, [92888, 49774, 40179], function () {
      return e((e.s = 82570));
    }),
      (_N_E = e.O());
  },
]);
