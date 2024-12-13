"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [43932, 12716, 38430],
  {
    73851: function (e, t, n) {
      n.d(t, {
        uH: function () {
          return o;
        },
      });
      var s = n(26182);
      let r = [],
        i = [{ type: "uint8" }];
      async function o(e) {
        return (0, s.readContract)({
          contract: e.contract,
          method: ["0x313ce567", r, i],
          params: [],
        });
      }
    },
    12716: function (e, t, n) {
      n.d(t, {
        decimals: function () {
          return i;
        },
      });
      var s = n(71786),
        r = n(73851);
      async function i(e) {
        return (0, s.D)(() => (0, r.uH)(e), {
          cacheKey: `${e.contract.chain.id}:${e.contract.address}:decimals`,
          cacheTime: Number.POSITIVE_INFINITY,
        });
      }
    },
    38430: function (e, t, n) {
      n.d(t, {
        getCurrencyMetadata: function () {
          return p;
        },
      });
      var s = n(60301),
        r = n(71786),
        i = n(26182);
      let o = [],
        a = [{ type: "string" }];
      async function c(e) {
        return (0, i.readContract)({
          contract: e.contract,
          method: ["0x06fdde03", o, a],
          params: [],
        });
      }
      async function l(e) {
        return (0, r.D)(() => c(e), {
          cacheKey: `${e.contract.chain.id}:${e.contract.address}:name`,
          cacheTime: Number.POSITIVE_INFINITY,
        });
      }
      let d = [],
        u = [{ type: "string" }];
      async function x(e) {
        return (0, i.readContract)({
          contract: e.contract,
          method: ["0x95d89b41", d, u],
          params: [],
        });
      }
      async function h(e) {
        return (0, r.D)(() => x(e), {
          cacheKey: `${e.contract.chain.id}:${e.contract.address}:symbol`,
          cacheTime: Number.POSITIVE_INFINITY,
        });
      }
      var m = n(73851);
      async function p(e) {
        if ((0, s.qw)(e.contract.address))
          return {
            name: "Ether",
            symbol: "ETH",
            decimals: 18,
            ...e.contract.chain.nativeCurrency,
          };
        try {
          let [t, n, s] = await Promise.all([
            l(e).catch(() => ""),
            h(e),
            (0, m.uH)(e),
          ]);
          return { name: t, symbol: n, decimals: s };
        } catch {
          throw Error("Invalid currency token");
        }
      }
    },
    43932: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return tr;
          },
        });
      var s = n(85893),
        r = n(62469),
        i = n(48454),
        o = n(67294),
        a = n(37005),
        c = n(60301),
        l = n(4159);
      function d(e) {
        let t = e.toToken.chainId === e.onRampToken.token.chainId,
          n =
            (0, l.Kn)(e.toToken.tokenAddress) ===
            (0, l.Kn)(e.onRampToken.token.tokenAddress);
        return !(t && n);
      }
      var u = n(77560),
        x = n(68817),
        h = n(73257),
        m = n(12398),
        p = n(64735),
        y = n(99910),
        f = n(22278);
      async function j(e) {
        try {
          let t = (0, y.NX)(e.client),
            n = await t((0, f.EW)(), {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                toAddress: e.toAddress,
                fromCurrencySymbol: e.fromCurrencySymbol,
                toChainId: e.toChainId.toString(),
                toTokenAddress: e.toTokenAddress,
                fromAmount: e.fromAmount,
                toAmount: e.toAmount,
                maxSlippageBPS: e.maxSlippageBPS,
                isTestMode: e.isTestMode,
                purchaseData: e.purchaseData,
                fromAddress: e.fromAddress,
                toGasAmountWei: e.toGasAmountWei,
                preferredProvider: e.preferredProvider,
              }),
            });
          if (!n.ok) {
            let e = await n.json();
            if (e && "error" in e) throw e;
            throw Error(`HTTP error! status: ${n.status}`);
          }
          return (await n.json()).result;
        } catch (e) {
          throw (console.error("Error getting buy with fiat quote", e), e);
        }
      }
      var g = n(31330),
        w = n(10378),
        b = n(477),
        k = n(36176),
        C = n(70917),
        W = n(51964),
        A = n(8985),
        T = n(44581),
        v = n(98760),
        S = n(29694),
        E = n(20070),
        L = n(69538);
      let z = (0, o.forwardRef)(function (e, t) {
          return (0,
          s.jsx)(B, { ref: t, children: (0, s.jsx)(v.H, { children: (0, s.jsxs)(E.W2, { p: "lg", children: [(0, s.jsx)(S.d, { children: (0, s.jsx)(L.hU, { type: "button", "aria-label": "Close", onClick: e.close, children: (0, s.jsx)(r.Pxu, { width: x.EA.md, height: x.EA.md, style: { color: "inherit" } }) }) }), e.children] }) }) });
        }),
        B = (0, T.lx)((e) => {
          let t = (0, W.v$)();
          return {
            zIndex: 1e4,
            borderTopLeftRadius: x.q0.xl,
            borderTopRightRadius: x.q0.xl,
            background: t.colors.modalBg,
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            animation: `${I} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.1)`,
            borderTop: `1px solid ${t.colors.borderColor}`,
          };
        }),
        I = C.F4`
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,
        O = (0, T.lx)((e) => ({
          backgroundColor: (0, W.v$)().colors.modalOverlayBg,
          zIndex: 9999,
          position: "absolute",
          inset: 0,
          animation: `${A.BX} 400ms cubic-bezier(0.16, 1, 0.3, 1)`,
        }));
      function F() {
        let [e, t] = (0, o.useState)(!1),
          n = (0, o.useRef)(null),
          s = (0, o.useRef)(null),
          r = (0, o.useCallback)(
            () =>
              new Promise((e) => {
                if (n.current) {
                  let t = {
                      easing: "cubic-bezier(0.175, 0.885, 0.32, 1.1)",
                      fill: "forwards",
                      duration: 300,
                    },
                    r = n.current.animate(
                      [{ transform: "translateY(100%)", opacity: 0 }],
                      t
                    );
                  s.current?.animate([{ opacity: 0 }], t),
                    (r.onfinish = () => e());
                } else e();
              }),
            []
          ),
          i = (0, o.useCallback)(
            async (e) => {
              e ? t(!0) : (await r(), t(!1));
            },
            [r]
          );
        return (
          (0, o.useLayoutEffect)(() => {
            if (!e) return;
            let t = (e) => {
              n.current &&
                e.target instanceof Node &&
                !n.current.contains(e.target) &&
                i(!1);
            };
            return (
              requestAnimationFrame(() => {
                document.addEventListener("click", t);
              }),
              () => {
                document.removeEventListener("click", t);
              }
            );
          }, [e, i]),
          { drawerRef: n, drawerOverlayRef: s, setIsOpen: i, isOpen: e }
        );
      }
      var M = n(57654),
        R = n(67544),
        q = n(31143),
        N = n(15794),
        _ = n(26617),
        P = n(75634),
        D = n(25908),
        $ = n(48754),
        U = n(13750),
        H = n(82742),
        K = n(91422),
        V = n(57621),
        G = n(12716),
        Y = n(98189),
        Q = n(91650),
        J = n(65258),
        Z = n(4527),
        X = n(35107),
        ee = n(14514),
        et = n(32724),
        en = n(50480);
      function es(e) {
        let {
            payUiOptions: t,
            supportedDestinations: n,
            client: r,
            onContinue: i,
            payerAccount: o,
          } = e,
          d = (0, W.v$)(),
          h = (0, J.r)(),
          p = t.metadata,
          y = t.paymentInfo,
          { data: f } = (0, Q.SG)(y.chain),
          { data: j } = (0, Z.F6)({ client: r, address: y.sellerAddress }),
          g = (0, m.a)({
            queryKey: ["amount", y],
            queryFn: async () => {
              let e = 18;
              return (
                y.token &&
                  !(0, K.M)(y.token) &&
                  (e = await (0, G.decimals)({
                    contract: (0, V.u)({
                      address: y.token.address,
                      chain: y.chain,
                      client: r,
                    }),
                  })),
                "amountWei" in y ? (0, Y.bb)(y.amountWei, e) : y.amount
              );
            },
          }).data;
        if (!f || void 0 === g) return (0, s.jsx)(b.a, {});
        let w = y.token
          ? {
              ...y.token,
              icon:
                y.token?.icon ||
                n
                  .find((e) => e.chain.id === y.chain.id)
                  ?.tokens.find(
                    (e) =>
                      e.address.toLowerCase() === y.token?.address.toLowerCase()
                  )?.icon,
            }
          : {
              address: c.K8,
              name: f.nativeCurrency.name,
              symbol: f.nativeCurrency.symbol,
              icon: f.icon?.url,
            };
        return (0, s.jsxs)(E.W2, {
          p: "lg",
          children: [
            (0, s.jsx)(E.xB, { title: p?.name || "Payment Details" }),
            (0, s.jsx)(M.L, { y: "lg" }),
            (0, s.jsxs)(E.W2, {
              children: [
                p?.image
                  ? (0, s.jsx)(ee.E, {
                      client: r,
                      src: p?.image,
                      style: {
                        width: "100%",
                        borderRadius: x.W0.md,
                        backgroundColor: d.colors.tertiaryBg,
                      },
                    })
                  : h
                  ? (0, s.jsxs)(E.W2, {
                      flex: "row",
                      center: "both",
                      style: {
                        padding: x.W0.md,
                        marginBottom: x.W0.md,
                        borderRadius: x.W0.md,
                        backgroundColor: d.colors.tertiaryBg,
                      },
                      children: [
                        (0, s.jsx)(en._, {
                          size: x.EA.xl,
                          id: h.id,
                          client: r,
                        }),
                        (0, s.jsx)("div", {
                          style: {
                            flexGrow: 1,
                            borderBottom: "6px dotted",
                            borderColor: d.colors.secondaryIconColor,
                            marginLeft: x.W0.md,
                            marginRight: x.W0.md,
                          },
                        }),
                        (0, s.jsx)(X.f, {
                          client: r,
                          size: x.EA.xl,
                          chainIconUrl: f.icon?.url,
                        }),
                      ],
                    })
                  : null,
                (0, s.jsx)(M.L, { y: "md" }),
                (0, s.jsxs)(E.W2, {
                  flex: "row",
                  children: [
                    (0, s.jsx)(E.W2, {
                      flex: "column",
                      expand: !0,
                      children: (0, s.jsx)(N.x, {
                        size: "md",
                        color: "primaryText",
                        weight: 700,
                        children: "Price",
                      }),
                    }),
                    (0, s.jsx)(E.W2, {
                      expand: !0,
                      children: (0, s.jsxs)(E.W2, {
                        flex: "row",
                        gap: "xs",
                        center: "y",
                        style: { justifyContent: "right" },
                        children: [
                          (0, s.jsx)(et.T, {
                            chain: y.chain,
                            client: e.client,
                            size: "sm",
                            token: w,
                          }),
                          (0, s.jsxs)(N.x, {
                            color: "primaryText",
                            size: "md",
                            weight: 700,
                            children: [
                              String((0, u.u)(Number(g), 6)),
                              " ",
                              w.symbol,
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, s.jsx)(M.L, { y: "md" }),
                (0, s.jsx)(E.x1, {}),
                (0, s.jsx)(M.L, { y: "md" }),
                (0, s.jsxs)(E.W2, {
                  flex: "row",
                  children: [
                    (0, s.jsx)(E.W2, {
                      flex: "column",
                      expand: !0,
                      children: (0, s.jsx)(N.x, {
                        size: "xs",
                        color: "secondaryText",
                        children: "Network",
                      }),
                    }),
                    (0, s.jsx)(E.W2, {
                      expand: !0,
                      children: (0, s.jsxs)(E.W2, {
                        flex: "row",
                        gap: "xs",
                        center: "y",
                        style: { justifyContent: "right" },
                        children: [
                          (0, s.jsx)(X.f, {
                            chainIconUrl: f.icon?.url,
                            size: "xs",
                            client: e.client,
                          }),
                          (0, s.jsx)(N.x, {
                            size: "xs",
                            color: "secondaryText",
                            style: { textAlign: "right" },
                            children: f.name,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, s.jsx)(M.L, { y: "sm" }),
                (0, s.jsxs)(E.W2, {
                  flex: "row",
                  children: [
                    (0, s.jsx)(E.W2, {
                      flex: "column",
                      expand: !0,
                      children: (0, s.jsx)(N.x, {
                        size: "xs",
                        color: "secondaryText",
                        children: "Seller",
                      }),
                    }),
                    (0, s.jsx)(E.W2, {
                      expand: !0,
                      children: (0, s.jsx)(E.W2, {
                        flex: "row",
                        gap: "xs",
                        center: "y",
                        style: { justifyContent: "right" },
                        children: (0, s.jsx)(N.x, {
                          size: "xs",
                          color: "secondaryText",
                          style: { textAlign: "right" },
                          children: j || (0, l.Xn)(y.sellerAddress),
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsx)(M.L, { y: "xl" }),
            o
              ? (0, s.jsx)(L.zx, {
                  variant: "accent",
                  fullWidth: !0,
                  onClick: () => {
                    (0, a.V)({
                      event: "choose_payment_method_direct_payment_mode",
                      client: r,
                      walletAddress: o.address,
                      walletType: h?.id,
                    }),
                      i(g, y.chain, w);
                  },
                  children: "Choose Payment Method",
                })
              : (0, s.jsx)("div", {
                  children: (0, s.jsx)(P.N, {
                    ...e.connectOptions,
                    client: r,
                    theme: d,
                    connectButton: { style: { width: "100%" } },
                  }),
                }),
          ],
        });
      }
      var er = n(86875),
        ei = n(37417);
      function eo(e) {
        let { estimatedSeconds: t, quoteIsLoading: n } = e;
        return (0, s.jsxs)(E.W2, {
          bg: "tertiaryBg",
          flex: "row",
          borderColor: "borderColor",
          style: {
            borderRadius: x.q0.md,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            justifyContent: "space-between",
            alignItems: "center",
            borderWidth: "1px",
            borderStyle: "solid",
          },
          children: [
            (0, s.jsxs)(E.W2, {
              flex: "row",
              center: "y",
              gap: "xxs",
              color: "accentText",
              p: "sm",
              children: [
                (0, s.jsx)(r.T39, { width: x.EA.sm, height: x.EA.sm }),
                n
                  ? (0, s.jsx)(er.O, {
                      height: x.JB.xs,
                      width: "50px",
                      color: "borderColor",
                    })
                  : (0, s.jsx)(N.x, {
                      size: "xs",
                      color: "secondaryText",
                      children: void 0 !== t ? `~${(0, ei.Z)(t)}` : "--",
                    }),
              ],
            }),
            (0, s.jsxs)(L.zx, {
              variant: "ghost",
              onClick: e.onViewFees,
              gap: "xs",
              children: [
                (0, s.jsx)(E.W2, {
                  color: "accentText",
                  flex: "row",
                  center: "both",
                  children: (0, s.jsx)(ea, { size: x.EA.sm }),
                }),
                (0, s.jsx)(N.x, {
                  size: "xs",
                  color: "secondaryText",
                  children: "View Fees",
                }),
              ],
            }),
          ],
        });
      }
      let ea = (e) =>
        (0, s.jsxs)("svg", {
          width: e.size,
          height: e.size,
          viewBox: "0 0 12 12",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-hidden": "true",
          children: [
            (0, s.jsx)("path", {
              d: "M9.5 1.5H2.5C1.94772 1.5 1.5 1.94772 1.5 2.5V9.5C1.5 10.0523 1.94772 10.5 2.5 10.5H9.5C10.0523 10.5 10.5 10.0523 10.5 9.5V2.5C10.5 1.94772 10.0523 1.5 9.5 1.5Z",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            (0, s.jsx)("path", {
              d: "M4.5 7.5L7.5 4.5",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          ],
        });
      var ec = n(93398),
        el = n(16829);
      function ed(e) {
        return (0, s.jsxs)(E.W2, {
          bg: "tertiaryBg",
          borderColor: "borderColor",
          flex: "row",
          style: {
            borderRadius: x.q0.md,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
            borderWidth: "1px",
            borderStyle: "solid",
            borderBottom: "none",
            flexWrap: "nowrap",
            justifyContent: "space-between",
            alignItems: "center",
          },
          children: [
            (0, s.jsxs)(eu, {
              variant: "ghost",
              onClick: e.onSelectCurrency,
              style: {
                minHeight: "64px",
                justifyContent: "flex-start",
                minWidth: "50%",
              },
              gap: "sm",
              children: [
                (0, s.jsx)(e.currency.icon, { size: x.EA.md }),
                (0, s.jsxs)(E.W2, {
                  flex: "row",
                  center: "y",
                  gap: "xxs",
                  color: "secondaryText",
                  children: [
                    (0, s.jsx)(N.x, {
                      color: "primaryText",
                      children: e.currency.shorthand,
                    }),
                    (0, s.jsx)(r.v4q, { width: x.EA.sm, height: x.EA.sm }),
                  ],
                }),
              ],
            }),
            (0, s.jsx)("div", {
              style: {
                flexGrow: 1,
                flexShrink: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: x.W0.xxs,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                justifyContent: "center",
                paddingRight: x.W0.sm,
              },
              children: e.isLoading
                ? (0, s.jsx)(er.O, { width: "100px", height: x.JB.lg })
                : (0, s.jsx)(N.x, {
                    size: "lg",
                    color: e.value ? "primaryText" : "secondaryText",
                    children: e.value
                      ? `${(0, u.u)(Number(e.value), 6)}`
                      : "--",
                  }),
            }),
          ],
        });
      }
      let eu = (0, el.Z)(L.zx)(() => ({
        "&[disabled]:hover": { borderColor: "transparent" },
      }));
      var ex = n(95810),
        eh = n(38430),
        em = n(33910),
        ep = n(11692),
        ey = n(28352),
        ef = n(83159),
        ej = n(88264);
      async function eg(e, t) {
        try {
          let n = await (0, ey.N)({ transaction: e, from: t }),
            s = n.wei / 10n;
          return n.wei + s;
        } catch {
          if (t) return await eg(e);
          return (
            2000000n * (await (0, em.o)({ client: e.client, chain: e.chain }))
          );
        }
      }
      function ew(e) {
        let {
            payUiOptions: t,
            client: n,
            payerAccount: r,
            supportedDestinations: i,
            onContinue: l,
          } = e,
          { data: d } = (0, Q.SG)(t.transaction.chain),
          h = t.metadata,
          { data: p } = (function (e) {
            let { transaction: t, account: n, supportedDestinations: s } = e,
              [r, i] = (0, o.useState)();
            return (
              (0, o.useEffect)(() => {
                Promise.all([
                  (0, ef.q)(t.value),
                  (0, ef.q)(t.erc20Value),
                  (0, ef.q)(t.to),
                  (0, ep.encode)(t),
                ]).then(([e, t, n, s]) => {
                  i({
                    value: e?.toString(),
                    erc20Value: t?.amountWei?.toString(),
                    erc20Currency: t?.tokenAddress,
                    to: n,
                    data: s,
                  });
                });
              }, [t]),
              (0, m.a)({
                queryKey: ["transaction-cost", t.chain.id, n?.address, r],
                queryFn: async () => {
                  if (!n) throw Error("No account");
                  let e = await (0, ef.q)(t.erc20Value);
                  if (e) {
                    let [r, i, o] = await Promise.all([
                        (0, ej.p)({
                          address: n.address,
                          chain: t.chain,
                          client: t.client,
                          tokenAddress: e.tokenAddress,
                        }),
                        (0, eh.getCurrencyMetadata)({
                          contract: (0, V.u)({
                            address: e.tokenAddress,
                            chain: t.chain,
                            client: t.client,
                          }),
                        }),
                        eg(t, n?.address),
                      ]),
                      a = e.amountWei;
                    return {
                      token: {
                        address: e.tokenAddress,
                        name: i.name,
                        symbol: i.symbol,
                        icon: s
                          .find((e) => e.chain.id === t.chain.id)
                          ?.tokens.find(
                            (t) =>
                              t.address.toLowerCase() ===
                              e.tokenAddress.toLowerCase()
                          )?.icon,
                      },
                      decimals: i.decimals,
                      walletBalance: r,
                      gasCostWei: o,
                      transactionValueWei: a,
                    };
                  }
                  let [r, i, o] = await Promise.all([
                      (0, ej.p)({
                        address: n.address,
                        chain: t.chain,
                        client: t.client,
                      }),
                      (0, ex.ZN)(t.chain),
                      eg(t, n?.address),
                    ]),
                    a = (await (0, ef.q)(t.value)) || 0n;
                  return {
                    token: {
                      address: c.K8,
                      name: i.nativeCurrency.name,
                      symbol: i.nativeCurrency.symbol,
                      icon: i.icon?.url,
                    },
                    decimals: 18,
                    walletBalance: r,
                    gasCostWei: o,
                    transactionValueWei: a,
                  };
                },
                enabled: !!t && !!n && !!r,
                refetchInterval: () => {
                  if (!t.erc20Value) return 3e4;
                },
              })
            );
          })({
            transaction: t.transaction,
            account: r,
            supportedDestinations: i,
          }),
          y = (0, W.v$)(),
          f = (0, J.r)(),
          j = (0, Z.GS)(f);
        return p && d
          ? (0, s.jsxs)(E.W2, {
              p: "lg",
              children: [
                (0, s.jsx)(E.xB, { title: h?.name || "Transaction" }),
                (0, s.jsx)(M.L, { y: "lg" }),
                (0, s.jsxs)(E.W2, {
                  children: [
                    h?.image
                      ? (0, s.jsx)(ee.E, {
                          client: n,
                          src: h?.image,
                          style: {
                            width: "100%",
                            borderRadius: x.W0.md,
                            backgroundColor: y.colors.tertiaryBg,
                          },
                        })
                      : f
                      ? (0, s.jsxs)(E.W2, {
                          flex: "row",
                          center: "both",
                          style: {
                            padding: x.W0.md,
                            marginBottom: x.W0.md,
                            borderRadius: x.W0.md,
                            backgroundColor: y.colors.tertiaryBg,
                          },
                          children: [
                            (0, s.jsx)(en._, {
                              size: x.EA.xl,
                              id: f.id,
                              client: n,
                            }),
                            (0, s.jsx)("div", {
                              style: {
                                flexGrow: 1,
                                borderBottom: "6px dotted",
                                borderColor: y.colors.secondaryIconColor,
                                marginLeft: x.W0.md,
                                marginRight: x.W0.md,
                              },
                            }),
                            (0, s.jsx)(X.f, {
                              client: n,
                              size: x.EA.xl,
                              chainIconUrl: d.icon?.url,
                            }),
                          ],
                        })
                      : null,
                    (0, s.jsx)(M.L, { y: "md" }),
                    (0, s.jsxs)(E.W2, {
                      flex: "row",
                      children: [
                        (0, s.jsx)(E.W2, {
                          flex: "column",
                          expand: !0,
                          children: (0, s.jsx)(N.x, {
                            size: "md",
                            color: "primaryText",
                            weight: 700,
                            children: "Price",
                          }),
                        }),
                        (0, s.jsx)(E.W2, {
                          expand: !0,
                          children: (0, s.jsxs)(E.W2, {
                            flex: "row",
                            gap: "xs",
                            center: "y",
                            style: { justifyContent: "right" },
                            children: [
                              (0, s.jsx)(et.T, {
                                chain: t.transaction.chain,
                                client: e.client,
                                size: "sm",
                                token: p.token,
                              }),
                              (0, s.jsxs)(N.x, {
                                color: "primaryText",
                                size: "md",
                                weight: 700,
                                children: [
                                  String(
                                    (0, u.u)(
                                      Number(
                                        (0, Y.bb)(
                                          p.transactionValueWei,
                                          p.decimals
                                        )
                                      ),
                                      6
                                    )
                                  ),
                                  " ",
                                  p.token.symbol,
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, s.jsx)(M.L, { y: "md" }),
                    (0, s.jsx)(E.x1, {}),
                    (0, s.jsx)(M.L, { y: "md" }),
                    (0, s.jsxs)(E.W2, {
                      flex: "row",
                      children: [
                        (0, s.jsx)(E.W2, {
                          flex: "column",
                          expand: !0,
                          children: (0, s.jsx)(N.x, {
                            size: "xs",
                            color: "secondaryText",
                            children: "Gas Fees",
                          }),
                        }),
                        (0, s.jsx)(E.W2, {
                          expand: !0,
                          children: (0, s.jsx)(E.W2, {
                            flex: "row",
                            gap: "xs",
                            center: "y",
                            style: { justifyContent: "right" },
                            children: (0, s.jsx)(N.x, {
                              color: j ? "success" : "primaryText",
                              size: "xs",
                              children: j
                                ? "Sponsored"
                                : `${String(
                                    (0, u.u)(
                                      Number(
                                        (0, Y.bb)(
                                          p.gasCostWei,
                                          d.nativeCurrency.decimals
                                        )
                                      ),
                                      6
                                    )
                                  )} ${d.nativeCurrency.symbol}`,
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, s.jsx)(M.L, { y: "sm" }),
                    (0, s.jsxs)(E.W2, {
                      flex: "row",
                      children: [
                        (0, s.jsx)(E.W2, {
                          flex: "column",
                          expand: !0,
                          children: (0, s.jsx)(N.x, {
                            size: "xs",
                            color: "secondaryText",
                            children: "Network",
                          }),
                        }),
                        (0, s.jsx)(E.W2, {
                          expand: !0,
                          children: (0, s.jsxs)(E.W2, {
                            flex: "row",
                            gap: "xs",
                            center: "y",
                            style: { justifyContent: "right" },
                            children: [
                              (0, s.jsx)(X.f, {
                                chainIconUrl: d.icon?.url,
                                size: "xs",
                                client: e.client,
                              }),
                              (0, s.jsx)(N.x, {
                                size: "xs",
                                color: "secondaryText",
                                style: { textAlign: "right" },
                                children: d.name,
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)(M.L, { y: "xl" }),
                r
                  ? (0, s.jsx)(L.zx, {
                      variant: "accent",
                      fullWidth: !0,
                      onClick: () => {
                        let e = p.transactionValueWei;
                        p.token.address !== c.K8 || j || (e += p.gasCostWei),
                          (0, a.V)({
                            event: "choose_payment_method_transaction_mode",
                            client: n,
                            walletAddress: r.address,
                            walletType: f?.id,
                          }),
                          l(
                            (0, Y.bb)(e, p.decimals),
                            t.transaction.chain,
                            p.token
                          );
                      },
                      children: "Choose Payment Method",
                    })
                  : (0, s.jsx)("div", {
                      children: (0, s.jsx)(P.N, {
                        ...e.connectOptions,
                        client: n,
                        theme: y,
                        connectButton: { style: { width: "100%" } },
                      }),
                    }),
              ],
            })
          : (0, s.jsx)(b.a, {});
      }
      var eb = n(84730);
      function ek(e) {
        let t = (0, W.v$)();
        return (0, s.jsx)(E.W2, {
          bg: "tertiaryBg",
          style: {
            borderRadius: x.q0.lg,
            border: `1px solid ${t.colors.borderColor}`,
            ...e.containerStyle,
          },
          children: (0, s.jsxs)(L.zx, {
            fullWidth: !0,
            disabled: e.disabled,
            onClick: e.onClick,
            variant: "ghost",
            style: {
              justifyContent: "space-between",
              padding: x.W0.sm,
              backgroundColor: t.colors.tertiaryBg,
            },
            gap: "sm",
            children: [
              (0, s.jsx)(eC, { client: e.client, address: e.address }),
              !e.disableChevron &&
                (0, s.jsx)(r.v4q, {
                  width: x.EA.sm,
                  height: x.EA.sm,
                  style: { color: t.colors.secondaryText },
                }),
              e.checked &&
                (0, s.jsx)(r.nQG, { width: x.EA.md, height: x.EA.md }),
            ],
          }),
        });
      }
      function eC(e) {
        let { client: t, address: n } = e,
          r = (0, eb.f)().find((t) => t.getAccount()?.address === e.address),
          i = e.walletId || r?.id,
          o = (0, Z.F6)({ client: t, address: n }),
          a = o.data || (0, l.Xn)(n),
          c = (0, Z.c9)({ client: t, ensName: o.data });
        return (0, s.jsxs)(E.W2, {
          flex: "row",
          center: "y",
          gap: "sm",
          color: "secondaryText",
          children: [
            c.data
              ? (0, s.jsx)(ee.E, {
                  src: c.data,
                  width: x.EA.md,
                  height: x.EA.md,
                  style: { borderRadius: x.q0.sm },
                  client: e.client,
                })
              : i
              ? (0, s.jsx)(en._, { id: i, size: x.EA.md, client: e.client })
              : null,
            (0, s.jsx)(N.x, {
              size: "sm",
              color: "primaryText",
              children: a || (0, l.Xn)(e.address),
            }),
          ],
        });
      }
      var eW = n(80156);
      function eA(e) {
        return (0, s.jsxs)(E.W2, {
          children: [
            (0, s.jsx)(E.W2, {
              p: "lg",
              children: (0, s.jsx)(E.xB, {
                title: "Pay with",
                onBack: e.onBack,
              }),
            }),
            (0, s.jsx)(E.x1, {}),
            (0, s.jsx)(M.L, { y: "lg" }),
            (0, s.jsx)(E.W2, {
              flex: "column",
              gap: "xs",
              px: "lg",
              children: eW.QT.map((t) =>
                (0, s.jsxs)(
                  eT,
                  {
                    fullWidth: !0,
                    variant: "secondary",
                    onClick: () => e.onSelect(t),
                    gap: "sm",
                    children: [
                      (0, s.jsx)(t.icon, { size: x.EA.lg }),
                      (0, s.jsxs)(E.W2, {
                        flex: "column",
                        gap: "xxs",
                        children: [
                          (0, s.jsx)(N.x, {
                            color: "primaryText",
                            children: t.shorthand,
                          }),
                          (0, s.jsx)(N.x, { size: "sm", children: t.name }),
                        ],
                      }),
                    ],
                  },
                  t.shorthand
                )
              ),
            }),
            (0, s.jsx)(M.L, { y: "lg" }),
          ],
        });
      }
      let eT = (0, el.Z)(L.zx)(() => {
        let e = (0, W.v$)();
        return {
          background: e.colors.tertiaryBg,
          justifyContent: "flex-start",
          gap: x.W0.sm,
          padding: x.W0.sm,
          "&:hover": {
            background: e.colors.secondaryButtonBg,
            transform: "scale(1.01)",
          },
          transition: "background 200ms ease, transform 150ms ease",
        };
      });
      var ev = n(5403);
      function eS(e, t) {
        let n = (window.innerHeight - 750) / 2,
          s = (window.innerWidth - 500) / 2;
        return window.open(
          `${e}&theme=${t}`,
          "thirdweb Pay",
          `width=500, height=750, top=${n}, left=${s}`
        );
      }
      var eE = n(52891),
        eL = n(66229),
        ez = n(9430),
        eB = n(81011),
        eI = n(54405),
        eO = n(19305),
        eF = n(71307);
      function eM(e) {
        let t = (0, i.NL)(),
          { openedWindow: n, onSuccess: r } = e,
          a = (0, ez.s)({ intentId: e.intentId, client: e.client }),
          c = "loading";
        a.data?.status === "ON_RAMP_TRANSFER_FAILED" ||
        a.data?.status === "PAYMENT_FAILED"
          ? (c = "failed")
          : a.data?.status === "CRYPTO_SWAP_FALLBACK"
          ? (c = "partialSuccess")
          : a.data?.status === "ON_RAMP_TRANSFER_COMPLETED" &&
            (c = "completed");
        let l = (0, o.useRef)(!1);
        (0, o.useEffect)(() => {
          !l.current &&
            r &&
            a.data?.status === "ON_RAMP_TRANSFER_COMPLETED" &&
            ((l.current = !0), r(a.data));
        }, [r, a.data]),
          (0, o.useEffect)(() => {
            n &&
              a.data &&
              (a.data?.status === "CRYPTO_SWAP_REQUIRED" ||
                a.data?.status === "ON_RAMP_TRANSFER_COMPLETED") &&
              n.close();
          }, [a.data, n]);
        let d = (0, o.useRef)(!1);
        return (
          (0, o.useEffect)(() => {
            d.current ||
              a.data?.status !== "ON_RAMP_TRANSFER_COMPLETED" ||
              ((d.current = !0), (0, w.K)(t));
          }, [a.data, t]),
          (0, o.useEffect)(() => {
            a.data?.status === "CRYPTO_SWAP_REQUIRED" &&
              e.onShowSwapFlow(a.data);
          }, [a.data, e.onShowSwapFlow]),
          (0, s.jsxs)(E.W2, {
            p: "lg",
            children: [
              (0, s.jsx)(E.xB, { title: e.title, onBack: e.onBack }),
              e.hasTwoSteps &&
                (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(M.L, { y: "lg" }),
                    (0, s.jsx)(eB.E, { steps: 2, currentStep: 1 }),
                    (0, s.jsx)(M.L, { y: "sm" }),
                    (0, s.jsxs)(N.x, {
                      size: "xs",
                      children: [
                        "Step 1 of 2 - Buying ",
                        e.quote.onRampToken.token.symbol,
                        " with",
                        " ",
                        e.quote.fromCurrencyWithFees.currencySymbol,
                      ],
                    }),
                  ],
                }),
              (0, s.jsx)(eR, {
                uiStatus: c,
                onDone: e.onDone,
                fiatStatus: a.data,
                client: e.client,
                transactionMode: e.transactionMode,
                quote: e.quote,
                isEmbed: e.isEmbed,
              }),
            ],
          })
        );
      }
      function eR(e) {
        let { uiStatus: t } = e,
          n = e.fiatStatus ? (0, eO.B)(e.fiatStatus) : void 0,
          i =
            e.fiatStatus && "NOT_FOUND" !== e.fiatStatus.status
              ? e.fiatStatus
              : void 0,
          o = e.quote.onRampToken,
          a = (0, s.jsx)(eF.s, {
            client: e.client,
            token: i?.source
              ? {
                  chainId: i.source.token.chainId,
                  address: i.source.token.tokenAddress,
                  symbol: i.source.token.symbol || "",
                  amount: i.source.amount,
                }
              : {
                  chainId: o.token.chainId,
                  address: o.token.tokenAddress,
                  symbol: o.token.symbol,
                  amount: o.amount,
                },
            fiat: {
              amount: e.quote.fromCurrencyWithFees.amount,
              currencySymbol: e.quote.fromCurrencyWithFees.currencySymbol,
            },
            statusMeta:
              i?.source && n
                ? {
                    color: n?.color,
                    text: n?.status,
                    txHash: i.source.transactionHash,
                  }
                : void 0,
          });
        return (0, s.jsxs)(E.W2, {
          children: [
            (0, s.jsx)(M.L, { y: "xl" }),
            "loading" === t &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(M.L, { y: "md" }),
                  (0, s.jsx)(E.W2, {
                    flex: "row",
                    center: "x",
                    children: (0, s.jsx)(R.$, {
                      size: "xxl",
                      color: "accentText",
                    }),
                  }),
                  (0, s.jsx)(M.L, { y: "md" }),
                  (0, s.jsx)(N.x, {
                    color: "primaryText",
                    size: "lg",
                    center: !0,
                    children: "Buy Pending",
                  }),
                  (0, s.jsx)(M.L, { y: "sm" }),
                  !(0, eL.tq)() &&
                    (0, s.jsx)(N.x, {
                      center: !0,
                      children: "Complete the purchase in popup",
                    }),
                  (0, s.jsx)(M.L, { y: "xxl" }),
                  a,
                ],
              }),
            "failed" === t &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(M.L, { y: "md" }),
                  (0, s.jsx)(E.W2, {
                    flex: "row",
                    center: "x",
                    children: (0, s.jsx)(eI.E, { size: x.EA["3xl"] }),
                  }),
                  (0, s.jsx)(M.L, { y: "lg" }),
                  (0, s.jsx)(N.x, {
                    color: "primaryText",
                    size: "lg",
                    center: !0,
                    children: "Transaction Failed",
                  }),
                  (0, s.jsx)(M.L, { y: "xxl" }),
                  a,
                ],
              }),
            "completed" === t &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(M.L, { y: "md" }),
                  (0, s.jsx)(E.W2, {
                    flex: "row",
                    center: "x",
                    color: "success",
                    children: (0, s.jsx)(r.NhS, {
                      width: x.EA["3xl"],
                      height: x.EA["3xl"],
                    }),
                  }),
                  (0, s.jsx)(M.L, { y: "md" }),
                  (0, s.jsx)(N.x, {
                    color: "primaryText",
                    size: "lg",
                    center: !0,
                    children: "Buy Complete",
                  }),
                  e.fiatStatus &&
                    "NOT_FOUND" !== e.fiatStatus.status &&
                    (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(M.L, { y: "xxl" }),
                        a,
                        (0, s.jsx)(M.L, { y: "sm" }),
                      ],
                    }),
                  !e.isEmbed &&
                    (0, s.jsx)(L.zx, {
                      variant: "accent",
                      fullWidth: !0,
                      onClick: e.onDone,
                      children: e.transactionMode
                        ? "Continue Transaction"
                        : "Done",
                    }),
                ],
              }),
          ],
        });
      }
      var eq = n(59545),
        eN = n(48401);
      function e_(e) {
        let t = d(e.quote),
          [n, r] = (0, o.useState)(
            t ? { id: "step-1" } : { id: "onramp-status" }
          ),
          [i, c] = (0, o.useState)(e.openedWindow),
          l = (0, o.useCallback)(() => {
            (0, ev.w)({ intentId: e.quote.intentId, client: e.client }).then(
              (t) => {
                e.onSuccess(t);
              }
            );
          }, [e.onSuccess, e.quote.intentId, e.client]);
        return "step-1" === n.id
          ? (0, s.jsx)(eq.a, {
              title: e.title,
              client: e.client,
              onBack: e.onBack,
              partialQuote: (0, eq.R)(e.quote),
              step: 1,
              onContinue: () => {
                let t = eS(e.quote.onRampLink, e.theme);
                (0, a.V)({
                  event: "open_onramp_popup",
                  client: e.client,
                  walletAddress: e.payer.account.address,
                  walletType: e.payer.wallet.id,
                }),
                  (0, eE.h)({ type: "fiat", intentId: e.quote.intentId }),
                  c(t),
                  r({ id: "onramp-status" });
              },
            })
          : "onramp-status" === n.id
          ? (0, s.jsx)(eM, {
              title: e.title,
              client: e.client,
              intentId: e.quote.intentId,
              onBack: e.onBack,
              hasTwoSteps: t,
              openedWindow: i,
              quote: e.quote,
              onDone: e.onDone,
              onShowSwapFlow: (e) => {
                r({ id: "postonramp-swap", data: e });
              },
              transactionMode: e.transactionMode,
              isEmbed: e.isEmbed,
              onSuccess: e.onSuccess,
            })
          : "postonramp-swap" === n.id
          ? (0, s.jsx)(eN.S, {
              title: e.title,
              status: n.data,
              quote: (0, eq.R)(e.quote),
              client: e.client,
              onBack: e.onBack,
              onDone: e.onDone,
              onSwapFlowStarted: () => {},
              transactionMode: e.transactionMode,
              isEmbed: e.isEmbed,
              payer: e.payer,
              onSuccess: l,
            })
          : null;
      }
      let eP = (0, ex.ax)({
        id: 137,
        name: "Polygon",
        nativeCurrency: { name: "POL", symbol: "POL", decimals: 18 },
        blockExplorers: [
          {
            name: "PolygonScan",
            url: "https://polygonscan.com",
            apiUrl: "https://api.polygonscan.com/api",
          },
        ],
      });
      var eD = n(92880),
        e$ = n(48798),
        eU = n(63680);
      function eH(e) {
        var t;
        let n;
        let { name: i } = (0, Q.zw)(e.chain);
        return (0, s.jsxs)(E.W2, {
          children: [
            (0, s.jsx)("div", {
              onClick: (e) => {
                e.currentTarget.querySelector("input")?.focus();
              },
              children: (0, s.jsxs)(E.W2, {
                flex: "row",
                center: "both",
                gap: "xs",
                style: { flexWrap: "nowrap" },
                children: [
                  (0, s.jsx)(eU.II, {
                    variant: "outline",
                    pattern: "^[0-9]*[.,]?[0-9]*$",
                    inputMode: "decimal",
                    tabIndex: -1,
                    placeholder: "0",
                    type: "text",
                    "data-placeholder": "" === e.value,
                    value: e.value || "0",
                    disabled: e.freezeAmount,
                    onClick: (t) => {
                      "" === e.value &&
                        t.currentTarget.setSelectionRange(
                          t.currentTarget.value.length,
                          t.currentTarget.value.length
                        );
                    },
                    onChange: (t) => {
                      let n = t.target.value;
                      n.startsWith(".") && (n = `0${n}`),
                        Number.isNaN(Number(n)) ||
                          (n.startsWith("0") && !n.startsWith("0.")
                            ? e.onChange(n.slice(1))
                            : e.onChange(n));
                    },
                    style: {
                      border: "none",
                      fontSize:
                        (t = e.value).length > 10
                          ? "26px"
                          : t.length > 6
                          ? "34px"
                          : "50px",
                      boxShadow: "none",
                      borderRadius: "0",
                      padding: "0",
                      paddingBlock: "2px",
                      fontWeight: 600,
                      textAlign: "right",
                      width:
                        ((n = e.value.replace(".", "").length),
                        e.value.includes(".") && (n += 0.3),
                        `calc(${Math.max(1, n)}ch + 6px)`),
                      maxWidth: "calc(100% - 100px)",
                    },
                  }),
                  (0, s.jsx)(_.W, {
                    token: e.token,
                    chain: e.chain,
                    size: "lg",
                    color: "secondaryText",
                  }),
                ],
              }),
            }),
            !e.hideTokenSelector &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(M.L, { y: "sm" }),
                  (0, s.jsx)(E.W2, {
                    flex: "row",
                    center: "x",
                    children: (0, s.jsxs)(eK, {
                      variant: "secondary",
                      fullWidth: !0,
                      style: { fontSize: x.JB.sm },
                      gap: "xxs",
                      onClick: e.onSelectToken,
                      disabled: e.freezeChainAndToken,
                      children: [
                        (0, s.jsxs)(E.W2, {
                          flex: "row",
                          center: "y",
                          gap: "sm",
                          children: [
                            (0, s.jsx)(et.T, {
                              token: e.token,
                              chain: e.chain,
                              size: "md",
                              client: e.client,
                            }),
                            (0, s.jsxs)(E.W2, {
                              flex: "column",
                              style: { gap: "4px" },
                              children: [
                                (0, s.jsx)(_.W, {
                                  token: e.token,
                                  chain: e.chain,
                                  size: "sm",
                                }),
                                i
                                  ? (0, s.jsx)(N.x, {
                                      size: "xs",
                                      color: "secondaryText",
                                      children: i,
                                    })
                                  : (0, s.jsx)(er.O, {
                                      width: "90px",
                                      height: x.JB.xs,
                                    }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsx)(r.v4q, {
                          width: x.EA.sm,
                          height: x.EA.sm,
                          style: { marginLeft: "auto" },
                        }),
                      ],
                    }),
                  }),
                ],
              }),
          ],
        });
      }
      let eK = (0, el.Z)(L.zx)(() => {
        let e = (0, W.v$)();
        return {
          background: e.colors.tertiaryBg,
          border: `1px solid ${e.colors.borderColor}`,
          justifyContent: "flex-start",
          transition: "background 0.3s",
          padding: x.W0.sm,
        };
      });
      function eV(e) {
        return (0, s.jsx)(E.W2, {
          flex: "column",
          gap: "xs",
          style: { alignItems: "flex-start" },
          children: e.quote.processingFees.map((e) => {
            let t = (0, u.u)(Number(e.amount), 6);
            return (0, s.jsxs)(
              E.W2,
              {
                flex: "row",
                gap: "xxs",
                children: [
                  (0, s.jsxs)(N.x, {
                    color: "primaryText",
                    size: "sm",
                    children: [0 === t ? "~" : "", t, " ", e.token.symbol],
                  }),
                  (0, s.jsxs)(N.x, {
                    color: "secondaryText",
                    size: "sm",
                    children: ["($", (e.amountUSDCents / 100).toFixed(2), ")"],
                  }),
                ],
              },
              `${e.token.chainId}_${e.token.tokenAddress}_${t}`
            );
          }),
        });
      }
      function eG(e) {
        return (0, s.jsxs)(E.W2, {
          flex: "column",
          gap: "xs",
          children: [
            (0, s.jsxs)("div", {
              style: { display: "flex", justifyContent: "space-between" },
              children: [
                (0, s.jsx)(N.x, {
                  inline: !0,
                  color: "secondaryText",
                  children: "Amount",
                }),
                (0, s.jsxs)(N.x, {
                  color: "primaryText",
                  inline: !0,
                  children: [
                    (0, u.u)(Number(e.quote.fromCurrency.amount), 2),
                    " ",
                    e.quote.fromCurrency.currencySymbol,
                  ],
                }),
              ],
            }),
            e.quote.processingFees.map((e, t) => {
              let n = (0, u.u)(Number(e.amount), 6);
              return (0, s.jsxs)(
                "div",
                {
                  style: { display: "flex", justifyContent: "space-between" },
                  children: [
                    (0, s.jsx)(N.x, {
                      inline: !0,
                      color: "secondaryText",
                      children:
                        "NETWORK" === e.feeType
                          ? "Network Fee"
                          : "Processing Fee",
                    }),
                    (0, s.jsxs)(N.x, {
                      color: "primaryText",
                      inline: !0,
                      children: [
                        0 === n ? "~" : "",
                        n,
                        " ",
                        e.currencySymbol,
                        " ",
                      ],
                    }),
                  ],
                },
                t
              );
            }),
            (0, s.jsx)(M.L, { y: "xxs" }),
            (0, s.jsx)(E.x1, {}),
            (0, s.jsx)(M.L, { y: "xxs" }),
            (0, s.jsxs)("div", {
              style: { display: "flex", justifyContent: "space-between" },
              children: [
                (0, s.jsx)(N.x, {
                  inline: !0,
                  color: "secondaryText",
                  children: "Total",
                }),
                (0, s.jsxs)(N.x, {
                  color: "primaryText",
                  inline: !0,
                  children: [
                    (0, u.u)(Number(e.quote.fromCurrencyWithFees.amount), 6),
                    " ",
                    e.quote.fromCurrencyWithFees.currencySymbol,
                  ],
                }),
              ],
            }),
          ],
        });
      }
      let eY = (e) =>
        (0, s.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 18 18",
          width: e.size,
          height: e.size,
          role: "presentation",
          children: (0, s.jsx)("path", {
            fill: "currentColor",
            d: "M15.6 4.6H1.85v-.55l12.1-.968v.968h1.65V2.4c0-1.21-.98-2.059-2.177-1.888L2.378 2.089C1.18 2.26.2 3.39.2 4.6v11a2.2 2.2 0 002.2 2.2h13.2a2.2 2.2 0 002.2-2.2V6.8a2.2 2.2 0 00-2.2-2.2zm-1.65 7.707a1.65 1.65 0 01-.63-3.176 1.65 1.65 0 11.63 3.176z",
          }),
        });
      var eQ = n(40414);
      function eJ(e) {
        let { name: t } = (0, Q.zw)(e.chain),
          n = (0, h.t)({
            address: e.payerAccount.address,
            chain: e.chain,
            tokenAddress: (0, K.M)(e.token) ? void 0 : e.token.address,
            client: e.client,
          });
        return (0, s.jsxs)(E.W2, {
          bg: "tertiaryBg",
          borderColor: "borderColor",
          flex: "row",
          style: {
            borderWidth: "1px",
            borderTopWidth: 0,
            borderStyle: "solid",
            flexWrap: "nowrap",
            justifyContent: "space-between",
            minHeight: "64px",
            alignItems: "center",
            ...(e.swapRequired
              ? { borderBottom: "none" }
              : {
                  borderBottomLeftRadius: x.q0.md,
                  borderBottomRightRadius: x.q0.md,
                }),
          },
          children: [
            (0, s.jsxs)(L.zx, {
              variant: "ghost",
              onClick: e.onSelectToken,
              gap: "sm",
              style: {
                paddingInline: x.W0.sm,
                paddingBlock: x.W0.sm,
                minWidth: "50%",
                justifyContent: "flex-start",
              },
              disabled: e.freezeChainAndTokenSelection,
              children: [
                (0, s.jsx)(ec.K, {
                  token: e.token,
                  chain: e.chain,
                  size: "md",
                  client: e.client,
                }),
                (0, s.jsxs)(E.W2, {
                  flex: "column",
                  gap: "3xs",
                  children: [
                    (0, s.jsxs)(E.W2, {
                      flex: "row",
                      gap: "xs",
                      center: "y",
                      color: "primaryText",
                      children: [
                        (0, s.jsx)(_.W, {
                          token: e.token,
                          chain: e.chain,
                          size: "sm",
                        }),
                        (0, s.jsx)(r.v4q, { width: x.EA.sm, height: x.EA.sm }),
                      ],
                    }),
                    t
                      ? (0, s.jsx)(N.x, { size: "xs", children: t })
                      : (0, s.jsx)(er.O, { width: "90px", height: x.JB.xs }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              style: {
                flexGrow: 1,
                flexShrink: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: x.W0.xxs,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                justifyContent: "center",
                paddingRight: x.W0.sm,
              },
              children: [
                e.isLoading
                  ? (0, s.jsx)(er.O, {
                      width: "120px",
                      height: x.JB.md,
                      color: "borderColor",
                    })
                  : (0, s.jsx)(N.x, {
                      size: "md",
                      color: e.value ? "primaryText" : "secondaryText",
                      style: {},
                      children: (0, u.u)(Number(e.value), 6) || "",
                    }),
                (0, s.jsxs)(E.W2, {
                  flex: "row",
                  gap: "xxs",
                  center: "y",
                  color: "secondaryText",
                  children: [
                    (0, s.jsx)(eY, { size: x.JB.xs }),
                    n.data
                      ? (0, s.jsx)(N.x, {
                          size: "xs",
                          color: "secondaryText",
                          weight: 500,
                          children: (0, eQ.a)(n.data, !1),
                        })
                      : (0, s.jsx)(er.O, { width: "70px", height: x.JB.xs }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var eZ = n(65263),
        eX = n(27129),
        e0 = n(56702),
        e1 = n(98445);
      async function e2(e) {
        try {
          let t = (0, y.NX)(e.client),
            n = await t((0, f.jM)(), {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                fromAddress: e.fromAddress,
                toAddress: e.toAddress,
                chainId: e.chainId,
                tokenAddress: e.tokenAddress,
                amount: e.amount,
                purchaseData: e.purchaseData,
              }),
            });
          if (!n.ok) {
            let e = await n.json();
            if (e && "error" in e) throw e;
            throw Error(`HTTP error! status: ${n.status}`);
          }
          let s = (await n.json()).result;
          return {
            transactionRequest: {
              chain: (0, ex.XY)(s.transactionRequest.chainId),
              client: e.client,
              data: s.transactionRequest.data,
              to: s.transactionRequest.to,
              value: BigInt(s.transactionRequest.value),
              gas: BigInt(s.transactionRequest.gasLimit),
            },
            approval: s.approval
              ? (0, e1.d)({
                  contract: (0, V.u)({
                    client: e.client,
                    address: s.approval.tokenAddress,
                    chain: (0, ex.XY)(s.approval.chainId),
                  }),
                  spender: s.approval.spenderAddress,
                  amountWei: BigInt(s.approval.amountWei),
                })
              : void 0,
            fromAddress: s.fromAddress,
            toAddress: s.toAddress,
            paymentToken: s.paymentToken,
            processingFee: s.processingFee,
            estimatedGasCostUSDCents: s.estimatedGasCostUSDCents,
            client: e.client,
          };
        } catch (e) {
          throw (console.error("Error getting buy with crypto transfer", e), e);
        }
      }
      var e5 = n(75888),
        e8 = n(41872);
      async function e6(e) {
        let t = await (0, e5.sendTransaction)(e);
        return (0, e8.h)(t);
      }
      var e3 = n(71316),
        e7 = n(80885),
        e4 = n(94341),
        e9 = n(47862);
      function te(e) {
        let {
            title: t,
            onBack: n,
            receiverAddress: i,
            client: a,
            payer: l,
            onDone: d,
            chain: u,
            token: h,
            tokenAmount: m,
            transactionMode: p,
            setTransactionHash: y,
          } = e,
          [f, j] = (0, o.useState)("transfer"),
          [g, w] = (0, o.useState)({ id: "idle" }),
          { symbol: b } = (0, Q.U)(u);
        return (0, s.jsxs)(E.W2, {
          p: "lg",
          children: [
            (0, s.jsx)(E.xB, { title: t, onBack: n }),
            (0, s.jsx)(M.L, { y: "xl" }),
            p &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(eB.E, {
                    steps: 2,
                    currentStep: "transfer" === f ? 1 : 2,
                  }),
                  (0, s.jsx)(M.L, { y: "sm" }),
                  (0, s.jsx)(N.x, {
                    size: "sm",
                    children:
                      "transfer" === f
                        ? "Step 1 of 2 - Transfer funds"
                        : "Step 2 of 2 - Finalize transaction",
                  }),
                  (0, s.jsx)(M.L, { y: "xl" }),
                ],
              }),
            (0, s.jsxs)(E.W2, {
              flex: "row",
              center: "y",
              style: { justifyContent: "space-between" },
              children: [
                (0, s.jsx)(N.x, { size: "sm", children: "From" }),
                (0, s.jsx)(eC, { address: l.account.address, client: a }),
              ],
            }),
            (0, s.jsx)(M.L, { y: "md" }),
            (0, s.jsx)(E.x1, {}),
            (0, s.jsx)(M.L, { y: "md" }),
            (0, s.jsxs)(E.W2, {
              flex: "row",
              center: "y",
              style: { justifyContent: "space-between" },
              children: [
                (0, s.jsx)(N.x, { size: "sm", children: "To" }),
                (0, s.jsx)(eC, { address: i, client: a }),
              ],
            }),
            (0, s.jsx)(M.L, { y: "md" }),
            (0, s.jsx)(E.x1, {}),
            (0, s.jsx)(M.L, { y: "md" }),
            (0, s.jsx)(e4.Q, {
              chainId: u.id,
              client: a,
              label: "Amount",
              tokenAmount: m,
              tokenSymbol: (0, K.M)(h) ? b || "" : h.symbol,
              tokenAddress: (0, K.M)(h) ? c.K8 : h.address,
            }),
            (0, s.jsx)(M.L, { y: "lg" }),
            p &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(M.L, { y: "sm" }),
                  (0, s.jsxs)(E.W2, {
                    gap: "sm",
                    flex: "row",
                    style: { justifyContent: "space-between" },
                    center: "y",
                    color: "accentText",
                    children: [
                      (0, s.jsx)(e7.h, {
                        isDone: "execute" === f,
                        isActive: "transfer" === f,
                        label: "transfer" === f ? "Transfer" : "Done",
                      }),
                      (0, s.jsx)(e9.s6, {}),
                      (0, s.jsx)(e7.h, {
                        isDone: !1,
                        label: "Finalize",
                        isActive: "execute" === f,
                      }),
                    ],
                  }),
                  (0, s.jsx)(M.L, { y: "lg" }),
                ],
              }),
            "error" === g.id &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(E.W2, {
                    flex: "row",
                    gap: "xs",
                    center: "both",
                    color: "danger",
                    children: (0, s.jsx)(N.x, {
                      color: "danger",
                      size: "sm",
                      style: { textAlign: "center" },
                      children:
                        "transfer" === f
                          ? `${g.error || "Failed to Transfer"}`
                          : "Failed to Execute",
                    }),
                  }),
                  (0, s.jsx)(M.L, { y: "md" }),
                ],
              }),
            !p &&
              "execute" === f &&
              "done" === g.id &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsxs)(E.W2, {
                    flex: "row",
                    gap: "xs",
                    center: "both",
                    color: "success",
                    children: [
                      (0, s.jsx)(r.NhS, { width: x.EA.sm, height: x.EA.sm }),
                      (0, s.jsx)(N.x, {
                        color: "success",
                        size: "sm",
                        children: "Payment completed",
                      }),
                    ],
                  }),
                  (0, s.jsx)(M.L, { y: "md" }),
                ],
              }),
            l.chain.id !== u.id
              ? (0, s.jsx)(q.v, {
                  fullWidth: !0,
                  variant: "accent",
                  switchChain: async () => {
                    await e.payer.wallet.switchChain(u);
                  },
                })
              : (0, s.jsxs)(L.zx, {
                  variant: "accent",
                  fullWidth: !0,
                  disabled: "pending" === g.id,
                  onClick: async () => {
                    if ("execute" === f) {
                      d();
                      return;
                    }
                    try {
                      if ((w({ id: "pending" }), p)) {
                        let t = (0, K.M)(h)
                          ? (0, e3.prepareTransaction)({
                              client: a,
                              chain: u,
                              to: i,
                              value: (0, Y.r0)(m),
                            })
                          : (0, e0.r)({
                              contract: (0, V.u)({
                                address: h.address,
                                chain: u,
                                client: a,
                              }),
                              to: i,
                              amount: m,
                            });
                        await e6({ account: e.payer.account, transaction: t }),
                          j("execute"),
                          w({ id: "idle" });
                      } else {
                        let t = await e2({
                          client: a,
                          fromAddress: l.account.address,
                          toAddress: i,
                          chainId: u.id,
                          tokenAddress: (0, K.M)(h) ? c.K8 : h.address,
                          amount: m,
                          purchaseData: void 0,
                        });
                        t.approval &&
                          (j("approve"),
                          await e6({
                            account: e.payer.account,
                            transaction: t.approval,
                          })),
                          j("transfer");
                        let n = t.transactionRequest,
                          s = await (0, e5.sendTransaction)({
                            account: e.payer.account,
                            transaction: n,
                          });
                        y(s.transactionHash), w({ id: "idle" });
                      }
                    } catch (e) {
                      console.error(e),
                        w({
                          id: "error",
                          error: "error" in e ? e.error?.message : e?.message,
                        });
                    }
                  },
                  gap: "xs",
                  children: [
                    "execute" === f && ("done" === g.id ? "Done" : "Continue"),
                    "transfer" === f &&
                      ("pending" === g.id ? "Confirming" : "Confirm"),
                    "approve" === f &&
                      ("pending" === g.id ? "Approving" : "Approve"),
                    "pending" === g.id &&
                      (0, s.jsx)(R.$, {
                        size: "sm",
                        color: "accentButtonText",
                      }),
                  ],
                }),
          ],
        });
      }
      function tt(e) {
        let [t, n] = (0, o.useState)();
        return t
          ? (0, s.jsx)(eX.v, {
              title: e.title,
              onBack: e.onBack,
              onTryAgain: e.onTryAgain,
              swapTxHash: t,
              client: e.client,
              onDone: e.onDone,
              transactionMode: !1,
              isEmbed: e.isEmbed,
              quote: void 0,
              onSuccess: e.onSuccess,
            })
          : (0, s.jsx)(te, { ...e, setTransactionHash: n });
      }
      function tn(e) {
        let t = (0, W.v$)(),
          n = (0, eb.f)(),
          i = !e.showAllWallets && e.wallets?.every((e) => n.includes(e));
        return (0, s.jsxs)(E.W2, {
          children: [
            (0, s.jsxs)(E.W2, {
              flex: "column",
              gap: "xs",
              children: [
                n
                  .filter((t) => !e.hiddenWallets?.includes(t.id))
                  .map((t) => {
                    let n = t.getAccount()?.address;
                    return (0, s.jsx)(
                      ek,
                      {
                        walletId: t.id,
                        client: e.client,
                        address: n || "",
                        onClick: () => {
                          e.onSelect(t), e.onBack();
                        },
                        disableChevron: !0,
                        checked: !1,
                      },
                      t.id
                    );
                  }),
                !i &&
                  (0, s.jsx)(L.zx, {
                    variant: "secondary",
                    fullWidth: !0,
                    onClick: e.onConnect,
                    gap: "xs",
                    bg: "tertiaryBg",
                    style: {
                      borderRadius: x.q0.lg,
                      border: `1px solid ${t.colors.borderColor}`,
                      padding: x.W0.sm,
                    },
                    children: (0, s.jsxs)(E.W2, {
                      flex: "row",
                      gap: "sm",
                      center: "y",
                      expand: !0,
                      children: [
                        (0, s.jsx)(r.pOD, { width: x.EA.md, height: x.EA.md }),
                        (0, s.jsx)(N.x, {
                          size: "sm",
                          color: "primaryText",
                          children: "Add Another Wallet",
                        }),
                      ],
                    }),
                  }),
              ],
            }),
            (0, s.jsx)(M.L, { y: "sm" }),
          ],
        });
      }
      var ts = n(72640);
      function tr(e) {
        let t = e.payOptions.buyWithCrypto
            ? e.payOptions.buyWithCrypto.testMode
            : void 0,
          n = (0, ts.oU)(e.client, t);
        return n.data
          ? (0, s.jsx)(ti, { ...e, supportedDestinations: n.data })
          : (0, s.jsx)(b.a, {});
      }
      function ti(e) {
        let {
            client: t,
            supportedDestinations: n,
            connectLocale: r,
            payOptions: a,
          } = e,
          l = (0, g.M)(),
          { payer: d, setPayer: u } = (function () {
            let e = (0, J.r)(),
              t = (0, g.M)(),
              n = (0, eD.v)(),
              [s, r] = (0, o.useState)();
            return (
              (0, o.useEffect)(() => {
                let e = s?.wallet;
                function t() {
                  if (!e) {
                    r(void 0);
                    return;
                  }
                  let t = e.getAccount(),
                    n = e.getChain();
                  t && n ? r({ account: t, chain: n, wallet: e }) : r(void 0);
                }
                if (e) {
                  let n = e.subscribe("chainChanged", t),
                    s = e.subscribe("accountChanged", t);
                  return () => {
                    n(), s();
                  };
                }
              }, [s]),
              {
                payer:
                  s ||
                  (t && n && e ? { account: t, chain: n, wallet: e } : void 0),
                setPayer: r,
              }
            );
          })(),
          [x, h] = (0, o.useState)({ id: "main" }),
          {
            tokenAmount: m,
            setTokenAmount: p,
            toChain: y,
            setToChain: f,
            deferredTokenAmount: j,
            toToken: b,
            setToToken: k,
          } = (function (e) {
            let { payOptions: t, supportedDestinations: n } = e,
              s = t?.prefillBuy,
              r = (0, eD.v)(),
              i = s?.amount || "",
              [a, c] = (0, o.useState)(i),
              l = (0, e$.c)(a, 300),
              [d, u] = (0, o.useState)(
                s?.chain ||
                  ("transaction" === t.mode && t.transaction?.chain) ||
                  ("direct_payment" === t.mode && t.paymentInfo?.chain) ||
                  n.find((e) => e.chain.id === r?.id)?.chain ||
                  n[0]?.chain ||
                  eP
              ),
              [x, h] = (0, o.useState)(
                s?.token ||
                  ("direct_payment" === t.mode && t.paymentInfo.token) ||
                  K.L
              );
            return {
              toChain: d,
              setToChain: u,
              toToken: x,
              setToToken: h,
              tokenAmount: a,
              setTokenAmount: c,
              deferredTokenAmount: l,
            };
          })({ payOptions: a, supportedDestinations: n }),
          [C, W] = (0, o.useState)(!1),
          A = (0, o.useCallback)(() => {
            h({ id: "main" }), e.onDone();
          }, [e.onDone]),
          T = (0, ts.QR)({
            client: e.client,
            destinationChainId: y.id,
            destinationTokenAddress: (0, K.M)(b) ? c.K8 : b.address,
          }),
          v = (0, o.useMemo)(
            () => tx(n, a, e.supportedTokens),
            [e.supportedTokens, n, a]
          ),
          S = (0, o.useMemo)(() => {
            if (T.data) return tx(T.data, a, e.supportedTokens);
          }, [e.supportedTokens, T.data, a]),
          {
            fromChain: L,
            setFromChain: z,
            fromToken: B,
            setFromToken: I,
          } = (function (e) {
            let { payOptions: t, supportedSources: n } = e,
              s = n?.length ? n[0] : void 0,
              [r, i] = (0, o.useState)(),
              a =
                (!1 !== t.buyWithCrypto &&
                  t.buyWithCrypto?.prefillSource?.chain) ||
                ("transaction" === t.mode && t.transaction?.chain) ||
                ("direct_payment" === t.mode && t.paymentInfo?.chain),
              c = s?.chain ? s.chain : void 0,
              l = r || a || c || eP,
              [d, u] = (0, o.useState)(),
              x =
                (!1 !== t.buyWithCrypto &&
                  t.buyWithCrypto?.prefillSource?.token) ||
                ("direct_payment" === t.mode && t.paymentInfo.token),
              h = K.L;
            return {
              fromChain: l,
              setFromChain: i,
              fromToken: d || x || h || K.L,
              setFromToken: u,
            };
          })({ payOptions: a, supportedSources: T.data || [] }),
          { selectedCurrency: O, setSelectedCurrency: F } = (function (e) {
            let { payOptions: t } = e,
              n =
                (!1 !== t.buyWithFiat
                  ? t.buyWithFiat?.prefillSource?.currency
                  : void 0) ||
                (function () {
                  try {
                    let e = Intl.DateTimeFormat()
                      .resolvedOptions()
                      .timeZone.toLowerCase();
                    if (e.includes("london")) return "GBP";
                    if (e.includes("europe")) return "EUR";
                    if (e.includes("japan")) return "JPY";
                    if (e.includes("canada")) return "CAD";
                    return "USD";
                  } catch {
                    return "USD";
                  }
                })(),
              [s, r] = (0, o.useState)(
                eW.QT.find((e) => e.shorthand === n) || eW.kE
              );
            return { selectedCurrency: s, setSelectedCurrency: r };
          })({ payOptions: a }),
          M = (function (e) {
            let {
                payOptions: t,
                supportedDestinations: n,
                toChain: s,
                toToken: r,
              } = e,
              { fiat: i, swap: o } = (function () {
                let e = n.find((e) => e.chain.id === s.id);
                if (!e) return { fiat: !1, swap: !1 };
                let t = (0, K.M)(r) ? c.K8 : r.address,
                  i = e.tokens.find(
                    (e) => e.address.toLowerCase() === t.toLowerCase()
                  );
                return i
                  ? { fiat: i.buyWithFiatEnabled, swap: i.buyWithCryptoEnabled }
                  : { fiat: !0, swap: !0 };
              })(),
              a = !1 !== t.buyWithFiat && i,
              l = !1 !== t.buyWithCrypto && o;
            return {
              buyWithFiatEnabled: a,
              buyWithCryptoEnabled: l,
              showPaymentSelection: a && l,
            };
          })({
            payOptions: e.payOptions,
            supportedDestinations: e.supportedDestinations,
            toChain: y,
            toToken: b,
          }),
          R =
            !1 === M.showPaymentSelection &&
            !1 === M.buyWithCryptoEnabled &&
            !1 === M.buyWithFiatEnabled,
          q = (0, i.NL)(),
          N = (0, o.useCallback)(
            (t) => {
              e.payOptions.onPurchaseSuccess?.({ type: "crypto", status: t }),
                (0, w.K)(q);
            },
            [e.payOptions.onPurchaseSuccess, q]
          ),
          _ = (0, o.useCallback)(
            (t) => {
              e.payOptions.onPurchaseSuccess?.({ type: "fiat", status: t }),
                (0, w.K)(q);
            },
            [e.payOptions.onPurchaseSuccess, q]
          );
        if ("connect-payer-wallet" === x.id)
          return (0, s.jsx)(H.A, {
            accountAbstraction: e.connectOptions?.accountAbstraction,
            appMetadata: e.connectOptions?.appMetadata,
            chain: e.connectOptions?.chain,
            chains: e.connectOptions?.chains,
            client: e.client,
            connectLocale: e.connectLocale,
            isEmbed: e.isEmbed,
            onBack: () => h(x.backScreen),
            onSelect: (e) => {
              let t = e.getAccount(),
                n = e.getChain();
              e && t && n && u({ account: t, chain: n, wallet: e });
            },
            hiddenWallets: e.hiddenWallets,
            recommendedWallets: e.connectOptions?.recommendedWallets,
            showAllWallets:
              e.connectOptions?.showAllWallets === void 0 ||
              e.connectOptions?.showAllWallets,
            walletConnect: e.connectOptions?.walletConnect,
            wallets: e.connectOptions?.wallets?.filter((e) => "inApp" !== e.id),
          });
        if ("swap-flow" === x.id && d)
          return (0, s.jsx)(eZ.$, {
            title: e.title,
            transactionMode: "transaction" === a.mode,
            isEmbed: e.isEmbed,
            client: t,
            onBack: () => {
              h({ id: "buy-with-crypto" });
            },
            buyWithCryptoQuote: x.quote,
            payer: d,
            isFiatFlow: !1,
            onDone: A,
            onTryAgain: () => {
              h({ id: "buy-with-crypto" });
            },
            onSuccess: N,
          });
        if ("fiat-flow" === x.id && d)
          return (0, s.jsx)(e_, {
            title: e.title,
            transactionMode: "transaction" === a.mode,
            quote: x.quote,
            onBack: () => {
              h({ id: "buy-with-fiat" });
            },
            client: t,
            testMode:
              !1 !== e.payOptions.buyWithFiat &&
              e.payOptions.buyWithFiat?.testMode === !0,
            theme: "string" == typeof e.theme ? e.theme : e.theme.type,
            openedWindow: x.openedWindow,
            onDone: A,
            isEmbed: e.isEmbed,
            payer: d,
            onSuccess: _,
          });
        if ("transfer-flow" === x.id && d && l) {
          let t = e.payOptions?.paymentInfo?.sellerAddress || l.address;
          return (0, s.jsx)(tt, {
            title: e.title,
            onBack: () => h({ id: "buy-with-crypto" }),
            payer: d,
            client: e.client,
            chain: y,
            token: b,
            tokenAmount: m,
            receiverAddress: t,
            transactionMode: "transaction" === e.payOptions.mode,
            isEmbed: e.isEmbed,
            onDone: A,
            onTryAgain: () => {
              h({ id: "buy-with-crypto" });
            },
            onSuccess: N,
          });
        }
        if ("select-currency" === x.id) {
          let e = () => h(x.backScreen);
          return (0, s.jsx)(eA, {
            onSelect: (t) => {
              e(), F(t);
            },
            onBack: e,
          });
        }
        if ("select-to-token" === x.id) {
          let i = n.map((e) => e.chain),
            o = () => h(x.backScreen),
            l = a?.prefillBuy?.allowEdits;
          return l?.token === !1
            ? (0, s.jsx)(th, {
                chains: i,
                client: e.client,
                connectLocale: e.connectLocale,
                setChain: f,
                goBack: o,
              })
            : (0, s.jsx)(U.k, {
                onBack: o,
                tokenList: ((y?.id ? v[y.id] : void 0) || []).filter(
                  (e) => e.address !== c.K8
                ),
                onTokenSelect: (e) => {
                  k(e), o();
                },
                chain: y,
                chainSelection:
                  l?.chain !== !1
                    ? {
                        chains: i,
                        select: (e) => {
                          f(e);
                        },
                      }
                    : void 0,
                connectLocale: r,
                client: t,
                modalTitle: e.title,
              });
        }
        if ("select-from-token" === x.id && T.data && S) {
          let n = T.data.map((e) => e.chain),
            i = () => h(x.backScreen);
          return !1 !== a.buyWithCrypto &&
            a.buyWithCrypto?.prefillSource?.allowEdits?.token === !1
            ? (0, s.jsx)(th, {
                chains: n,
                client: e.client,
                connectLocale: e.connectLocale,
                setChain: z,
                goBack: i,
              })
            : (0, s.jsx)(U.k, {
                onBack: i,
                tokenList: ((L?.id ? S[L.id] : void 0) || []).filter(
                  (e) => e.address !== c.K8
                ),
                onTokenSelect: (e) => {
                  I(e), i();
                },
                chain: L,
                chainSelection:
                  !1 !== a.buyWithCrypto &&
                  a.buyWithCrypto?.prefillSource?.allowEdits?.chain !== !1
                    ? {
                        chains: T.data.map((e) => e.chain),
                        select: (e) => z(e),
                      }
                    : void 0,
                connectLocale: r,
                client: t,
                modalTitle: "Pay with",
              });
        }
        return (0, s.jsx)(E.W2, {
          animate: "fadein",
          children: (0, s.jsxs)("div", {
            children: [
              "main" === x.id &&
                (0, s.jsx)(ta, {
                  title: e.title,
                  payerAccount: d?.account,
                  client: t,
                  onSelectBuyToken: () =>
                    h({ id: "select-to-token", backScreen: x }),
                  payOptions: a,
                  setTokenAmount: p,
                  setToChain: f,
                  setToToken: k,
                  setFromChain: z,
                  setFromToken: I,
                  toChain: y,
                  toToken: b,
                  tokenAmount: m,
                  connectOptions: e.connectOptions,
                  setScreen: h,
                  supportedDestinations: n,
                  onBack: e.onBack,
                  theme: e.theme,
                  hasEditedAmount: C,
                  setHasEditedAmount: W,
                  enabledPaymentMethods: M,
                }),
              ("select-payment-method" === x.id ||
                "select-wallet" === x.id ||
                "buy-with-crypto" === x.id ||
                "buy-with-fiat" === x.id) &&
                d &&
                (0, s.jsxs)(tc, {
                  title: e.title,
                  selectedChain: y,
                  selectedToken: b,
                  tokenAmount: m,
                  client: t,
                  onBack: () => {
                    M.showPaymentSelection &&
                    ("select-wallet" === x.id || "buy-with-fiat" === x.id)
                      ? h({ id: "select-payment-method" })
                      : "buy-with-crypto" === x.id
                      ? h({ id: "select-wallet" })
                      : h({ id: "main" });
                  },
                  children: [
                    "select-payment-method" === x.id &&
                      (0, s.jsx)(tl, {
                        mode: a.mode,
                        client: t,
                        walletAddress: d.account.address,
                        walletType: d.wallet.id,
                        setScreen: (e) => h({ id: e }),
                      }),
                    "select-wallet" === x.id &&
                      (0, s.jsx)(tn, {
                        client: t,
                        hiddenWallets: e.hiddenWallets,
                        onSelect: (e) => {
                          let t = e.getChain(),
                            n = e.getAccount();
                          t &&
                            n &&
                            (u({ account: n, chain: t, wallet: e }),
                            h({ id: "buy-with-crypto" }));
                        },
                        showAllWallets: !!e.connectOptions?.showAllWallets,
                        wallets: e.connectOptions?.wallets,
                        onBack: () => {},
                        onConnect: () => {
                          h({
                            id: "connect-payer-wallet",
                            backScreen: { id: "select-wallet" },
                          });
                        },
                        selectedAddress: d.account.address,
                      }),
                    "buy-with-crypto" === x.id &&
                      l &&
                      (0, s.jsx)(td, {
                        setScreen: h,
                        tokenAmount: j,
                        toChain: y,
                        toToken: b,
                        fromChain: L,
                        fromToken: B,
                        showFromTokenSelector: () => {
                          h({ id: "select-from-token", backScreen: x });
                        },
                        payer: d,
                        client: t,
                        isEmbed: e.isEmbed,
                        onDone: A,
                        payOptions: a,
                        connectLocale: r,
                        connectOptions: e.connectOptions,
                        setPayer: u,
                        activeAccount: l,
                        setTokenAmount: p,
                        setHasEditedAmount: W,
                        disableTokenSelection:
                          !0 === R ||
                          (!1 !== a.buyWithCrypto &&
                            a.buyWithCrypto?.prefillSource?.allowEdits
                              ?.chain === !1 &&
                            a.buyWithCrypto?.prefillSource?.allowEdits
                              ?.token === !1),
                      }),
                    "buy-with-fiat" === x.id &&
                      (0, s.jsx)(tu, {
                        setScreen: h,
                        tokenAmount: j,
                        toChain: y,
                        toToken: b,
                        selectedCurrency: O,
                        client: t,
                        isEmbed: e.isEmbed,
                        onDone: A,
                        payOptions: a,
                        theme: e.theme,
                        showCurrencySelector: () => {
                          h({ id: "select-currency", backScreen: x });
                        },
                        payer: d,
                        setTokenAmount: p,
                        setHasEditedAmount: W,
                      }),
                  ],
                }),
            ],
          }),
        });
      }
      function to(e) {
        return (0, s.jsx)("div", {
          children: (0, s.jsxs)(E.W2, {
            flex: "row",
            gap: "sm",
            center: "y",
            style: { justifyContent: "space-between" },
            children: [
              (0, s.jsxs)(E.W2, {
                flex: "row",
                gap: "xs",
                center: "y",
                children: [
                  (0, s.jsx)(N.x, {
                    color: "primaryText",
                    "data-testid": "tokenAmount",
                    size: "xl",
                    children: (0, u.u)(Number(e.tokenAmount), 6),
                  }),
                  (0, s.jsxs)(E.W2, {
                    flex: "row",
                    gap: "xxs",
                    center: "y",
                    children: [
                      (0, s.jsx)(_.W, {
                        token: e.selectedToken,
                        chain: e.selectedChain,
                        size: "md",
                        color: "secondaryText",
                      }),
                      (0, s.jsx)(ec.K, {
                        chain: e.selectedChain,
                        client: e.client,
                        size: "sm",
                        token: e.selectedToken,
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)(k.G, {
                chain: e.selectedChain,
                client: e.client,
                size: "sm",
                short: !0,
              }),
            ],
          }),
        });
      }
      function ta(e) {
        let {
            setTokenAmount: t,
            setToChain: n,
            setToToken: r,
            setFromChain: i,
            setFromToken: o,
            payerAccount: a,
            client: c,
            tokenAmount: l,
            payOptions: d,
            toToken: u,
            toChain: x,
            supportedDestinations: h,
            enabledPaymentMethods: m,
          } = e,
          {
            showPaymentSelection: p,
            buyWithCryptoEnabled: y,
            buyWithFiatEnabled: f,
          } = m,
          j = !l;
        switch (d.mode) {
          case "transaction":
            return (0, s.jsx)(ew, {
              supportedDestinations: h,
              payUiOptions: d,
              payerAccount: a,
              connectOptions: e.connectOptions,
              client: c,
              onContinue: (s, a, c) => {
                t(s),
                  n(a),
                  i(a),
                  o(c),
                  r(c),
                  p
                    ? e.setScreen({ id: "select-payment-method" })
                    : y
                    ? e.setScreen({ id: "select-wallet" })
                    : f
                    ? e.setScreen({ id: "buy-with-fiat" })
                    : e.setScreen({ id: "select-wallet" });
              },
            });
          case "direct_payment":
            return (0, s.jsx)(es, {
              client: c,
              payUiOptions: d,
              payerAccount: a,
              connectOptions: e.connectOptions,
              supportedDestinations: h,
              onContinue: (s, a, c) => {
                t(s),
                  n(a),
                  i(a),
                  o(c),
                  r(c),
                  p
                    ? e.setScreen({ id: "select-payment-method" })
                    : y
                    ? e.setScreen({ id: "buy-with-crypto" })
                    : f
                    ? e.setScreen({ id: "buy-with-fiat" })
                    : e.setScreen({ id: "select-wallet" });
              },
            });
          default:
            return (0, s.jsxs)(E.W2, {
              p: "lg",
              children: [
                (0, s.jsx)(E.xB, { title: e.title, onBack: e.onBack }),
                (0, s.jsx)(M.L, { y: "xl" }),
                (0, s.jsx)(eH, {
                  value: l,
                  onChange: async (n) => {
                    e.setHasEditedAmount(!0), t(n);
                  },
                  freezeAmount: d.prefillBuy?.allowEdits?.amount === !1,
                  freezeChainAndToken:
                    d.prefillBuy?.allowEdits?.chain === !1 &&
                    d.prefillBuy?.allowEdits?.token === !1,
                  token: u,
                  chain: x,
                  onSelectToken: e.onSelectBuyToken,
                  client: e.client,
                }),
                (0, s.jsx)(M.L, { y: "xl" }),
                (0, s.jsx)(E.W2, {
                  flex: "column",
                  gap: "sm",
                  children: a
                    ? (0, s.jsx)(L.zx, {
                        variant: "accent",
                        fullWidth: !0,
                        disabled: j,
                        "data-disabled": j,
                        onClick: () => {
                          p
                            ? e.setScreen({ id: "select-payment-method" })
                            : y
                            ? e.setScreen({ id: "buy-with-crypto" })
                            : f
                            ? e.setScreen({ id: "buy-with-fiat" })
                            : console.error("No payment method enabled");
                        },
                        children: "Continue",
                      })
                    : (0, s.jsx)("div", {
                        children: (0, s.jsx)(P.N, {
                          ...e.connectOptions,
                          client: e.client,
                          theme: e.theme,
                          connectButton: { style: { width: "100%" } },
                        }),
                      }),
                }),
              ],
            });
        }
      }
      function tc(e) {
        return (0, s.jsxs)(E.W2, {
          children: [
            (0, s.jsx)(E.W2, {
              p: "lg",
              children: (0, s.jsx)(E.xB, { title: e.title, onBack: e.onBack }),
            }),
            (0, s.jsxs)(E.W2, {
              px: "lg",
              style: { paddingBottom: x.W0.lg },
              children: [
                (0, s.jsx)(M.L, { y: "xs" }),
                (0, s.jsx)(to, {
                  selectedToken: e.selectedToken,
                  selectedChain: e.selectedChain,
                  tokenAmount: e.tokenAmount,
                  client: e.client,
                }),
                (0, s.jsx)(M.L, { y: "md" }),
                (0, s.jsx)(E.x1, {}),
                (0, s.jsx)(M.L, { y: "lg" }),
                (0, s.jsx)(N.x, { size: "sm", children: " Pay with " }),
                (0, s.jsx)(M.L, { y: "sm" }),
                e.children,
              ],
            }),
          ],
        });
      }
      function tl(e) {
        return (0, s.jsx)(E.W2, {
          animate: "fadein",
          children: (0, s.jsxs)(E.W2, {
            flex: "column",
            gap: "sm",
            children: [
              (0, s.jsxs)(L.zx, {
                variant: "outline",
                bg: "tertiaryBg",
                onClick: () => {
                  (0, a.V)({
                    event: `pay_with_credit_card_${e.mode || "unknown"}_mode`,
                    client: e.client,
                    walletAddress: e.walletAddress,
                    walletType: e.walletType,
                  }),
                    e.setScreen("buy-with-fiat");
                },
                gap: "sm",
                style: { justifyContent: "flex-start", textAlign: "left" },
                children: [
                  (0, s.jsx)(E.W2, {
                    color: "secondaryText",
                    flex: "row",
                    center: "both",
                    children: (0, s.jsx)(r.Xwj, {
                      style: { width: x.EA.md, height: x.EA.md },
                    }),
                  }),
                  (0, s.jsxs)(E.W2, {
                    flex: "column",
                    gap: "xxs",
                    children: [
                      (0, s.jsx)(N.x, {
                        size: "md",
                        color: "primaryText",
                        children: "Credit Card",
                      }),
                      (0, s.jsx)(N.x, {
                        size: "xs",
                        children: "Securely pay with credit card",
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsxs)(L.zx, {
                variant: "outline",
                bg: "tertiaryBg",
                onClick: () => {
                  (0, a.V)({
                    event: `pay_with_crypto_${e.mode || "unknown"}_mode`,
                    client: e.client,
                    walletAddress: e.walletAddress,
                    walletType: e.walletType,
                  }),
                    e.setScreen("select-wallet");
                },
                style: { justifyContent: "flex-start" },
                gap: "sm",
                children: [
                  (0, s.jsx)(E.W2, {
                    color: "secondaryText",
                    flex: "row",
                    center: "both",
                    children: (0, s.jsx)($.O, { size: x.EA.md }),
                  }),
                  (0, s.jsxs)(E.W2, {
                    flex: "column",
                    gap: "xxs",
                    children: [
                      (0, s.jsx)(N.x, {
                        size: "md",
                        color: "primaryText",
                        children: "Crypto",
                      }),
                      (0, s.jsx)(N.x, {
                        size: "xs",
                        children: "Pay with your connected wallet",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function td(e) {
        var t;
        let {
            setScreen: n,
            payer: r,
            client: i,
            toChain: a,
            tokenAmount: l,
            toToken: d,
            fromChain: x,
            fromToken: y,
            showFromTokenSelector: f,
            payOptions: j,
            disableTokenSelection: g,
          } = e,
          w =
            e.payOptions?.paymentInfo?.sellerAddress || e.activeAccount.address,
          { drawerRef: b, drawerOverlayRef: k, isOpen: C, setIsOpen: W } = F(),
          [A, T] = (0, o.useState)("fees"),
          v = (0, h.t)({
            address: r.account.address,
            chain: x,
            tokenAddress: (0, K.M)(y) ? void 0 : y.address,
            client: i,
          }),
          S = (0, K.M)(y) ? c.K8 : y.address.toLowerCase(),
          B = (0, K.M)(d) ? c.K8 : d.address.toLowerCase(),
          I = !!l && !(x.id === a.id && S === B),
          P =
            ((t = I
              ? {
                  fromAddress: r.account.address,
                  toAddress: w,
                  fromChainId: x.id,
                  fromTokenAddress: (0, K.M)(y) ? c.K8 : y.address,
                  toChainId: a.id,
                  toTokenAddress: (0, K.M)(d) ? c.K8 : d.address,
                  toAmount: l,
                  client: i,
                  purchaseData: j.purchaseData,
                }
              : void 0),
            (0, m.a)({
              staleTime: 3e4,
              refetchInterval: 3e4,
              gcTime: 3e4,
              queryKey: ["buyWithCryptoQuote", t],
              queryFn: () => {
                if (!t) throw Error("Swap params are required");
                return (0, p.D)(t);
              },
              enabled: !!t,
              retry(e, t) {
                if (e > 3) return !1;
                try {
                  let e = t.error;
                  if (
                    "MINIMUM_PURCHASE_AMOUNT" === e.code ||
                    404 === e.statusCode ||
                    e.statusCode >= 500
                  )
                    return !1;
                } catch {}
                return !0;
              },
            })),
          D = I ? P.data?.swapDetails.fromAmount : l,
          $ = !!D && !!v.data && Number(v.data.displayValue) < Number(D),
          U = (I && !P.data) || $,
          H = e.payer.chain.id !== x.id,
          V =
            !P.isLoading && P.error
              ? (function (e) {
                  try {
                    if ("MINIMUM_PURCHASE_AMOUNT" === e.error.code) {
                      let t = e.error.data.minimumAmountEth;
                      return { minAmount: (0, u.u)(Number(t), 6) };
                    }
                  } catch {}
                  return { msg: ["Unable to get price quote"] };
                })(P.error)
              : void 0;
        return (0, s.jsxs)(E.W2, {
          flex: "column",
          gap: "md",
          animate: "fadein",
          children: [
            C &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(O, { ref: k }),
                  (0, s.jsx)(z, {
                    ref: b,
                    close: () => W(!1),
                    children:
                      "fees" === A &&
                      P.data &&
                      (0, s.jsxs)("div", {
                        children: [
                          (0, s.jsx)(N.x, {
                            size: "lg",
                            color: "primaryText",
                            children: "Fees",
                          }),
                          (0, s.jsx)(M.L, { y: "lg" }),
                          (0, s.jsx)(eV, { quote: P.data }),
                        ],
                      }),
                  }),
                ],
              }),
            (0, s.jsxs)("div", {
              children: [
                (0, s.jsx)(ek, {
                  client: e.client,
                  onClick: () => {
                    n({ id: "select-wallet" });
                  },
                  address: e.payer.account.address,
                  walletId: e.payer.wallet.id,
                  containerStyle: {
                    borderBottomRightRadius: 0,
                    borderBottomLeftRadius: 0,
                  },
                }),
                (0, s.jsx)(eJ, {
                  value: D || "",
                  onSelectToken: f,
                  chain: x,
                  token: y,
                  isLoading: P.isLoading && !D,
                  client: i,
                  freezeChainAndTokenSelection: g,
                  payerAccount: e.payer.account,
                  swapRequired: I,
                }),
                I &&
                  (0, s.jsx)(eo, {
                    quoteIsLoading: P.isLoading,
                    estimatedSeconds:
                      P.data?.swapDetails.estimated.durationSeconds,
                    onViewFees: function () {
                      P.data && (W(!0), T("fees"));
                    },
                  }),
                (0, s.jsx)(M.L, { y: "md" }),
              ],
            }),
            V &&
              (0, s.jsxs)("div", {
                children: [
                  V.minAmount &&
                    (0, s.jsxs)(N.x, {
                      color: "danger",
                      size: "sm",
                      center: !0,
                      multiline: !0,
                      children: [
                        "Minimum amount is ",
                        V.minAmount,
                        " ",
                        (0, s.jsx)(_.W, {
                          token: d,
                          chain: a,
                          size: "sm",
                          inline: !0,
                          color: "danger",
                        }),
                      ],
                    }),
                  V.msg?.map((e) =>
                    s.jsx(
                      N.x,
                      {
                        color: "danger",
                        size: "sm",
                        center: !0,
                        multiline: !0,
                        children: e,
                      },
                      e
                    )
                  ),
                ],
              }),
            !V &&
              $ &&
              (0, s.jsxs)("div", {
                children: [
                  (0, s.jsx)(N.x, {
                    color: "danger",
                    size: "sm",
                    center: !0,
                    multiline: !0,
                    children: "Not enough funds.",
                  }),
                  (0, s.jsx)(N.x, {
                    color: "danger",
                    size: "sm",
                    center: !0,
                    multiline: !0,
                    children: "Try a different wallet or token.",
                  }),
                ],
              }),
            V?.minAmount
              ? (0, s.jsx)(L.zx, {
                  variant: "accent",
                  fullWidth: !0,
                  onClick: () => {
                    e.setTokenAmount(String(V.minAmount)),
                      e.setHasEditedAmount(!0);
                  },
                  children: "Set Minimum",
                })
              : !H || P.isLoading || $ || P.error
              ? (0, s.jsx)(L.zx, {
                  variant: U ? "outline" : "accent",
                  fullWidth: !0,
                  "data-disabled": U,
                  disabled: U,
                  onClick: async () => {
                    U ||
                      (function () {
                        if (
                          ("direct_payment" !== e.payOptions.mode &&
                            "fund_wallet" !== e.payOptions.mode) ||
                          $ ||
                          I
                        ) {
                          if ("transaction" === e.payOptions.mode && !$ && !I) {
                            r.account.address !== w
                              ? n({ id: "transfer-flow" })
                              : e.onDone();
                            return;
                          }
                        } else n({ id: "transfer-flow" });
                        P.data && n({ id: "swap-flow", quote: P.data });
                      })();
                  },
                  gap: "xs",
                  children: P.isLoading
                    ? (0, s.jsxs)(s.Fragment, {
                        children: [
                          "Getting price quote",
                          (0, s.jsx)(R.$, { size: "sm", color: "accentText" }),
                        ],
                      })
                    : "Continue",
                })
              : (0, s.jsx)(q.v, {
                  variant: "accent",
                  fullWidth: !0,
                  switchChain: async () => {
                    await e.payer.wallet.switchChain(x);
                  },
                }),
          ],
        });
      }
      function tu(e) {
        var t;
        let {
            toToken: n,
            tokenAmount: r,
            payer: i,
            client: a,
            setScreen: l,
            toChain: x,
            showCurrencySelector: h,
            selectedCurrency: p,
          } = e,
          y =
            e.payOptions?.paymentInfo?.sellerAddress || e.payer.account.address,
          { drawerRef: f, drawerOverlayRef: g, isOpen: w, setIsOpen: b } = F(),
          [k, C] = (0, o.useState)("fees"),
          W = e.payOptions.buyWithFiat,
          A =
            ((t =
              !1 !== W && r
                ? {
                    fromCurrencySymbol: p.shorthand,
                    toChainId: x.id,
                    toAddress: y,
                    toTokenAddress: (0, K.M)(n) ? c.K8 : n.address,
                    toAmount: r,
                    client: a,
                    isTestMode: W?.testMode,
                    purchaseData: e.payOptions.purchaseData,
                    fromAddress: i.account.address,
                    preferredProvider: W?.preferredProvider,
                  }
                : void 0),
            (0, m.a)({
              queryKey: ["useBuyWithFiatQuote", t],
              queryFn: async () => {
                if (!t) throw Error("No params provided");
                return j(t);
              },
              enabled: !!t,
              retry(e, t) {
                if (e > 3) return !1;
                try {
                  let e = t.error;
                  if (
                    "MINIMUM_PURCHASE_AMOUNT" === e.code ||
                    404 === e.statusCode ||
                    e.statusCode >= 500
                  )
                    return !1;
                } catch {}
                return !0;
              },
            })),
          T = !A.data,
          v =
            !A.isLoading && A.error
              ? (function (e) {
                  try {
                    if ("MINIMUM_PURCHASE_AMOUNT" === e.error.code) {
                      let t = e.error.data.minimumAmountEth;
                      return { minAmount: (0, u.u)(Number(t), 6) };
                    }
                  } catch {}
                  return { msg: ["Unable to get price quote"] };
                })(A.error)
              : void 0;
        return (0, s.jsxs)(E.W2, {
          flex: "column",
          gap: "md",
          animate: "fadein",
          children: [
            w &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(O, { ref: g }),
                  (0, s.jsx)(z, {
                    ref: f,
                    close: () => b(!1),
                    children:
                      "fees" === k &&
                      A.data &&
                      (0, s.jsxs)("div", {
                        children: [
                          (0, s.jsx)(N.x, {
                            size: "lg",
                            color: "primaryText",
                            children: "Fees",
                          }),
                          (0, s.jsx)(M.L, { y: "lg" }),
                          (0, s.jsx)(eG, { quote: A.data }),
                        ],
                      }),
                  }),
                ],
              }),
            (0, s.jsxs)("div", {
              children: [
                (0, s.jsx)(ed, {
                  isLoading: A.isLoading,
                  value: A.data?.fromCurrencyWithFees.amount,
                  client: a,
                  currency: p,
                  onSelectCurrency: h,
                }),
                (0, s.jsx)(eo, {
                  quoteIsLoading: A.isLoading,
                  estimatedSeconds: A.data?.estimatedDurationSeconds,
                  onViewFees: function () {
                    A.data && (C("fees"), b(!0));
                  },
                }),
                (0, s.jsx)(M.L, { y: "md" }),
              ],
            }),
            v &&
              (0, s.jsxs)("div", {
                children: [
                  v.minAmount &&
                    (0, s.jsxs)(N.x, {
                      color: "danger",
                      size: "sm",
                      center: !0,
                      multiline: !0,
                      children: [
                        "Minimum amount is ",
                        v.minAmount,
                        " ",
                        (0, s.jsx)(_.W, {
                          token: n,
                          chain: x,
                          size: "sm",
                          inline: !0,
                          color: "danger",
                        }),
                      ],
                    }),
                  v.msg?.map((e) =>
                    s.jsx(
                      N.x,
                      {
                        color: "danger",
                        size: "sm",
                        center: !0,
                        multiline: !0,
                        children: e,
                      },
                      e
                    )
                  ),
                ],
              }),
            v?.minAmount
              ? (0, s.jsx)(L.zx, {
                  variant: "accent",
                  fullWidth: !0,
                  onClick: () => {
                    e.setTokenAmount(String(v.minAmount)),
                      e.setHasEditedAmount(!0);
                  },
                  children: "Set Minimum",
                })
              : (0, s.jsx)(L.zx, {
                  variant: T ? "outline" : "accent",
                  "data-disabled": T,
                  disabled: T,
                  fullWidth: !0,
                  onClick: function () {
                    if (!A.data) return;
                    let t = d(A.data),
                      n = null;
                    t ||
                      ((n = eS(
                        A.data.onRampLink,
                        "string" == typeof e.theme ? e.theme : e.theme.type
                      )),
                      (0, eE.h)({ type: "fiat", intentId: A.data.intentId })),
                      l({ id: "fiat-flow", quote: A.data, openedWindow: n });
                  },
                  gap: "xs",
                  children: A.isLoading
                    ? (0, s.jsxs)(s.Fragment, {
                        children: [
                          "Getting price quote",
                          (0, s.jsx)(R.$, { size: "sm", color: "accentText" }),
                        ],
                      })
                    : "Continue",
                }),
          ],
        });
      }
      function tx(e, t, n) {
        let s = {},
          r = !1 === t.buyWithFiat,
          i = !1 === t.buyWithCrypto;
        for (let t of e)
          s[t.chain.id] = t.tokens.filter(
            (e) =>
              (!!e.buyWithCryptoEnabled && !!e.buyWithFiatEnabled) ||
              ((!!e.buyWithCryptoEnabled || !r) &&
                (!!e.buyWithFiatEnabled || !i))
          );
        if (n)
          for (let e in n) {
            let t = Number(e),
              r = n[t];
            r && (s[t] = r);
          }
        return s;
      }
      function th(e) {
        return (0, s.jsx)(D.w$, {
          client: e.client,
          connectLocale: e.connectLocale,
          showTabs: !1,
          onBack: e.goBack,
          chains: e.chains,
          closeModal: e.goBack,
          networkSelector: {
            renderChain: (t) =>
              (0, s.jsx)(D.mx, {
                chain: t.chain,
                confirming: !1,
                switchingFailed: !1,
                onClick: () => {
                  e.setChain(t.chain), e.goBack();
                },
                client: e.client,
                connectLocale: e.connectLocale,
              }),
          },
        });
      }
    },
    28352: function (e, t, n) {
      n.d(t, {
        N: function () {
          return p;
        },
      });
      var s = n(27636),
        r = n(49364),
        i = n(95810);
      let o = (0, i.ax)({
          id: 11155420,
          name: "OP Sepolia",
          nativeCurrency: {
            name: "Sepolia Ether",
            symbol: "ETH",
            decimals: 18,
          },
          blockExplorers: [
            {
              name: "Blockscout",
              url: "https://optimism-sepolia.blockscout.com",
              apiUrl: "https://optimism-sepolia.blockscout.com/api",
            },
          ],
          testnet: !0,
        }),
        a = (0, i.ax)({
          id: 10,
          name: "OP Mainnet",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          blockExplorers: [
            {
              name: "Optimism Explorer",
              url: "https://optimistic.etherscan.io",
              apiUrl: "https://api-optimistic.etherscan.io",
            },
          ],
        }),
        c = (0, i.ax)({
          id: 999999999,
          name: "Zora Sepolia",
          nativeCurrency: { decimals: 18, name: "Zora Sepolia", symbol: "ETH" },
          blockExplorers: [
            {
              name: "Zora Sepolia Explorer",
              url: "https://sepolia.explorer.zora.energy/",
              apiUrl: "https://sepolia.explorer.zora.energy/api",
            },
          ],
          testnet: !0,
        }),
        l = (0, i.ax)({
          id: 7777777,
          name: "Zora",
          nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
          blockExplorers: [
            {
              name: "Explorer",
              url: "https://explorer.zora.energy",
              apiUrl: "https://explorer.zora.energy/api",
            },
          ],
        }),
        d = [
          r.u.id,
          s.L.id,
          a.id,
          o.id,
          l.id,
          c.id,
          34443,
          919,
          42220,
          44787,
          204,
          5611,
        ];
      var u = n(33910),
        x = n(83159),
        h = n(98189),
        m = n(59106);
      async function p(e) {
        var t;
        let s;
        let { transaction: r } = e,
          i = e.from ?? e.account?.address ?? void 0,
          o =
            (await (0, x.q)(r.gas)) ||
            (await (0, m.Q)({ transaction: r, from: i })),
          a = await (0, u.o)({ client: r.client, chain: r.chain });
        if (((t = r.chain), d.includes(t.id))) {
          let { estimateL1Fee: e } = await n.e(66517).then(n.bind(n, 66517));
          s = await e({ transaction: r });
        } else s = 0n;
        let c = o * a + s;
        return { ether: (0, h.n9)(c), wei: c };
      }
    },
  },
]);
