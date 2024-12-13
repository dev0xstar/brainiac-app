"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [65408],
  {
    39817: function (e, t, n) {
      n.d(t, {
        u: function () {
          return c;
        },
      });
      var a = n(12398),
        r = n(26182),
        i = n(75403);
      let o = new Map();
      var s = n(75100);
      function c(e, t) {
        if ("function" == typeof e) {
          if (!t)
            throw Error(
              'Missing second argument for "useReadContract(<extension>, <options>)" hook.'
            );
          let { queryOptions: n, contract: r, ...c } = t,
            l = {
              queryKey: [
                "readContract",
                r.chain.id,
                r.address,
                (function (e) {
                  if (o.has(e)) return o.get(e);
                  let t = (function (e = 32) {
                    return (0, i.dg)(
                      (function (e = 32) {
                        return globalThis.crypto.getRandomValues(
                          new Uint8Array(e)
                        );
                      })(e)
                    );
                  })();
                  return o.set(e, t), t;
                })(e),
                (0, s.P)(c),
              ],
              queryFn: () => e({ ...c, contract: r }),
              ...n,
            };
          return (0, a.a)(l);
        }
        if ("method" in e) {
          let { queryOptions: t, ...n } = e,
            i = {
              queryKey: [
                "readContract",
                n.contract.chain.id,
                n.contract.address,
                n.method,
                (0, s.P)(n.params),
              ],
              queryFn: () => (0, r.readContract)(e),
              ...t,
            };
          return (0, a.a)(i);
        }
        throw Error(
          'Invalid "useReadContract" options. Expected either a read extension or a transaction object.'
        );
      }
    },
    84530: function (e, t, n) {
      n.d(t, {
        p: function () {
          return O;
        },
      });
      var a = n(85893),
        r = n(67294),
        i = n(86410),
        o = n(33910),
        s = n(28352),
        c = n(75888),
        l = n(83159),
        d = n(15642),
        u = n(88264),
        x = n(4527);
      async function h(e, t) {
        try {
          let n = await (0, s.N)({ transaction: e, from: t }),
            a = n.wei / 10n,
            r = await (0, l.q)(e.value);
          return n.wei + a + (r || 0n);
        } catch {
          if (t) return await h(e);
          let n = await (0, l.q)(e.value),
            a =
              2000000n * (await (0, o.o)({ client: e.client, chain: e.chain }));
          if (!n) return 0n + a;
          return n + a;
        }
      }
      var p = n(65258),
        m = n(32279),
        y = n(11168),
        f = n(12398),
        g = n(37005),
        j = n(51964),
        w = n(31330),
        E = n(477),
        v = n(71937),
        T = n(30048),
        k = n(29694),
        b = n(62469),
        C = n(68817),
        S = n(91650),
        A = n(54405),
        q = n(57654),
        z = n(67544),
        P = n(20070),
        W = n(69538),
        F = n(15794);
      function L(e) {
        let t = O({ payModal: !1 }),
          [n, i] = (0, r.useState)(),
          o = (0, S.ND)(e.tx.chain),
          [s, c] = (0, r.useState)("loading"),
          l = (0, r.useCallback)(async () => {
            c("loading");
            try {
              let n = await t.mutateAsync(e.tx);
              i(n.transactionHash), e.onTxSent(n), c("sent");
            } catch (e) {
              console.error(e), c("failed");
            }
          }, [t, e.tx, e.onTxSent]),
          d = (0, r.useRef)(!1);
        return (
          (0, r.useEffect)(() => {
            d.current || ((d.current = !0), l());
          }, [l]),
          (0, a.jsxs)(P.W2, {
            p: "lg",
            children: [
              (0, a.jsx)(P.xB, { title: "Transaction", onBack: e.onBack }),
              (0, a.jsx)(q.L, { y: "xxl" }),
              (0, a.jsx)(q.L, { y: "xxl" }),
              (0, a.jsxs)(P.W2, {
                flex: "row",
                center: "x",
                children: [
                  "loading" === s &&
                    (0, a.jsx)(z.$, { size: "xxl", color: "accentText" }),
                  "failed" === s && (0, a.jsx)(A.E, { size: C.EA["3xl"] }),
                  "sent" === s &&
                    (0, a.jsx)(P.W2, {
                      color: "success",
                      flex: "row",
                      center: "both",
                      children: (0, a.jsx)(b.NhS, {
                        width: C.EA["3xl"],
                        height: C.EA["3xl"],
                      }),
                    }),
                ],
              }),
              (0, a.jsx)(q.L, { y: "lg" }),
              (0, a.jsxs)(F.x, {
                color: "primaryText",
                center: !0,
                size: "lg",
                children: [
                  "loading" === s && "Sending transaction",
                  "failed" === s && "Transaction failed",
                  "sent" === s && "Transaction sent",
                ],
              }),
              (0, a.jsx)(q.L, { y: "sm" }),
              (0, a.jsx)(F.x, {
                color: "danger",
                center: !0,
                size: "sm",
                children: "failed" === s && t.error ? t.error.message : "",
              }),
              (0, a.jsx)(q.L, { y: "xxl" }),
              (0, a.jsx)(q.L, { y: "xxl" }),
              "failed" === s &&
                (0, a.jsx)(W.zx, {
                  variant: "accent",
                  fullWidth: !0,
                  onClick: l,
                  children: "Try Again",
                }),
              "sent" === s &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(W.zx, {
                      variant: "accent",
                      fullWidth: !0,
                      onClick: e.closeModal,
                      children: "Done",
                    }),
                    n &&
                      (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(q.L, { y: "sm" }),
                          (0, a.jsxs)(W.ZP, {
                            fullWidth: !0,
                            variant: "outline",
                            href: `${o.explorers[0]?.url}/tx/${n}`,
                            target: "_blank",
                            as: "a",
                            gap: "xs",
                            style: { textDecoration: "none", color: "inherit" },
                            children: [
                              "View on Explorer",
                              " ",
                              (0, a.jsx)(b.h0n, {
                                width: C.EA.sm,
                                height: C.EA.sm,
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
            ],
          })
        );
      }
      function M(e) {
        let t = (0, w.M)(),
          n = (0, p.r)();
        return (
          (0, f.a)({
            queryKey: ["transaction-modal-event"],
            queryFn: () => {
              t &&
                n &&
                (0, g.V)({
                  client: e.client,
                  walletAddress: t.address,
                  walletType: n.id,
                  event: "open_pay_transaction_modal",
                });
            },
            enabled: !!n,
          }),
          (0, a.jsx)(j.G8, {
            theme: e.theme,
            children: (0, a.jsx)(k.u, {
              open: !0,
              size: "compact",
              setOpen: (t) => {
                t || e.onClose();
              },
              children: (0, a.jsx)(_, { ...e }),
            }),
          })
        );
      }
      function _(e) {
        let t = (0, v.q)(e.localeId),
          [n, i] = (0, r.useState)("buy");
        return t.data
          ? "execute-tx" === n
            ? (0, a.jsx)(L, {
                tx: e.tx,
                closeModal: e.onClose,
                onTxSent: e.onTxSent,
              })
            : (0, a.jsx)(T.I, {
                title: e.title,
                isEmbed: !1,
                client: e.client,
                onBack: e.onBack,
                supportedTokens: e.supportedTokens,
                connectLocale: t.data,
                theme: "string" == typeof e.theme ? e.theme : e.theme.type,
                payOptions: e.payOptions,
                onDone: () => {
                  i("execute-tx");
                },
                connectOptions: void 0,
              })
          : (0, a.jsx)(E.a, {});
      }
      function O(e = {}) {
        let t = (0, m.l)(),
          n = (0, p.r)(),
          o = (0, r.useContext)(y.E),
          s = e.payModal,
          f = !0;
        return (
          (!1 === s || e.gasless) && (f = !1),
          (function (e) {
            let { showPayModal: t, gasless: n, wallet: a, switchChain: r } = e,
              o = a?.getAccount();
            return (0, i.D)({
              mutationFn: async (e) => {
                a &&
                  e.chain.id !== a.getChain()?.id &&
                  (await r(e.chain), (o = a.getAccount()));
                let i = o;
                if (!i) throw Error("No active account");
                return t
                  ? new Promise((r, o) => {
                      let s = async () => {
                        try {
                          let t = await (0, c.sendTransaction)({
                            transaction: e,
                            account: i,
                            gasless: n,
                          });
                          r(t);
                        } catch (e) {
                          o(e);
                        }
                      };
                      (async () => {
                        try {
                          let [n, c] = await Promise.all([
                              (0, l.q)(e.value),
                              (0, l.q)(e.erc20Value),
                            ]),
                            p = c?.amountWei || 0n,
                            [m, y, f] = await Promise.all([
                              (0, u.p)({
                                client: e.client,
                                address: i.address,
                                chain: e.chain,
                              }),
                              c?.tokenAddress
                                ? (0, d.y)({
                                    client: e.client,
                                    account: i,
                                    chain: e.chain,
                                    tokenAddress: c.tokenAddress,
                                  })
                                : void 0,
                              h(e, i.address),
                            ]),
                            g = (0, x.GS)(a),
                            j = (n || 0n) + (g ? 0n : f);
                          (p > 0n && y && y.value < p) ||
                          (j > 0n && m.value < j)
                            ? t({ tx: e, sendTx: s, rejectTx: o, resolveTx: r })
                            : s();
                        } catch (e) {
                          console.error("Failed to estimate cost", e), s();
                        }
                      })();
                    })
                  : (0, c.sendTransaction)({
                      transaction: e,
                      account: i,
                      gasless: n,
                    });
              },
            });
          })({
            showPayModal:
              f && !1 !== s
                ? (e) => {
                    !1 !== s &&
                      o(
                        (0, a.jsx)(M, {
                          title: s?.metadata?.name || "Transaction",
                          tx: e.tx,
                          onComplete: e.sendTx,
                          onClose: () => {
                            o(null),
                              e.rejectTx(
                                Error(
                                  "User rejected transaction by closing modal"
                                )
                              );
                          },
                          onTxSent: e.resolveTx,
                          client: e.tx.client,
                          localeId: s?.locale || "en_US",
                          supportedTokens: s?.supportedTokens,
                          theme: s?.theme || "dark",
                          payOptions: {
                            buyWithCrypto: s?.buyWithCrypto,
                            buyWithFiat: s?.buyWithFiat,
                            purchaseData: s?.purchaseData,
                            mode: "transaction",
                            transaction: e.tx,
                            metadata: s?.metadata,
                            onPurchaseSuccess: s?.onPurchaseSuccess,
                          },
                        })
                      );
                  }
                : void 0,
            gasless: e.gasless,
            switchChain: t,
            wallet: n,
          })
        );
      }
    },
    28352: function (e, t, n) {
      n.d(t, {
        N: function () {
          return m;
        },
      });
      var a = n(27636),
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
        s = (0, i.ax)({
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
          a.L.id,
          s.id,
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
        p = n(59106);
      async function m(e) {
        var t;
        let a;
        let { transaction: r } = e,
          i = e.from ?? e.account?.address ?? void 0,
          o =
            (await (0, x.q)(r.gas)) ||
            (await (0, p.Q)({ transaction: r, from: i })),
          s = await (0, u.o)({ client: r.client, chain: r.chain });
        if (((t = r.chain), d.includes(t.id))) {
          let { estimateL1Fee: e } = await n.e(66517).then(n.bind(n, 66517));
          a = await e({ transaction: r });
        } else a = 0n;
        let c = o * s + a;
        return { ether: (0, h.n9)(c), wei: c };
      }
    },
  },
]);
