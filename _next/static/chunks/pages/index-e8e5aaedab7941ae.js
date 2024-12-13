(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [95405],
  {
    48312: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return n(97696);
        },
      ]);
    },
    19251: function (e, t, n) {
      "use strict";
      var r = n(85893),
        i = n(27239),
        a = n(96854),
        o = n(5460),
        s = n(67294);
      t.Z = (e) => {
        let { nftUrl: t, onSelect: n } = e,
          [l, d] = (0, s.useState)(!1),
          c = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(() => {
            let e = c.current;
            if (e) {
              if (e.complete) d(!0);
              else {
                let t = () => d(!0);
                return (
                  e.addEventListener("load", t),
                  () => {
                    e.removeEventListener("load", t);
                  }
                );
              }
            }
          }, [t]),
          (0, r.jsxs)(i.M, {
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
                (0, r.jsx)(a.O, {
                  height: "100%",
                  width: "100%",
                  borderRadius: "24px",
                  position: "absolute",
                  top: "0",
                  left: "0",
                  bg: "#171B1D",
                }),
              (0, r.jsx)(o.E, {
                ref: c,
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
    97696: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return U;
          },
        });
      var r = n(85893),
        i = n(7963),
        a = n(35796),
        o = n(20967),
        s = n(93717),
        l = n(71293),
        d = n(57747),
        c = n(93108),
        u = n(5460),
        p = n(67294),
        f = n(31330),
        x = n(39817),
        m = n(84530),
        h = n(67990),
        b = n(19778),
        g = n(68938),
        y = n(64859),
        w = n(66205),
        F = n(54346),
        k = n(14253),
        v = n(86204),
        C = n(19251),
        T = n(11163),
        j = (e) => {
          let { nft: t, isOpen: n, onClose: i } = e,
            a = (0, T.useRouter)();
          return (0, r.jsxs)(h.u_, {
            isOpen: n,
            onClose: i,
            isCentered: !0,
            children: [
              (0, r.jsx)(b.Z, {}),
              (0, r.jsxs)(g.h, {
                backdropFilter: "blur(50px)",
                bg: "linear-gradient(135deg, rgba(245, 247, 250, 0.06) 0%, rgba(245, 247, 250, 0.0001) 100%)",
                borderRadius: "24px",
                padding: "12px",
                color: "white",
                children: [
                  (0, r.jsx)(y.x, {
                    textAlign: "center",
                    children: "Mint NFT",
                  }),
                  (0, r.jsx)(w.o, {}),
                  (0, r.jsx)(F.f, {
                    mb: "15px",
                    children: (0, r.jsx)(l.x, {
                      fontSize: "xs",
                      color: "#FFFFFF99",
                      children:
                        "A special, unique NFT cyber cat has been released for you. After receiving it, it will be available in your wallet and will give access to all the features of the platform.",
                    }),
                  }),
                  (0, r.jsx)(s.k, {
                    gap: "5px",
                    margin: "auto",
                    children: (0, r.jsx)(C.Z, {
                      nftUrl: null == t ? void 0 : t.imageUrl,
                    }),
                  }),
                  (0, r.jsxs)(k.m, {
                    gap: "15px",
                    display: "flex",
                    flexDir: "column",
                    mt: "15px",
                    children: [
                      (0, r.jsx)(c.z, {
                        height: "50px",
                        borderRadius: "16px",
                        w: "100%",
                        className: "main-gradient-bg",
                        onClick: i,
                        color: "white",
                        children: "Confirm",
                      }),
                      (0, r.jsx)(c.z, {
                        leftIcon: (0, r.jsx)(v.LCd, {}),
                        height: "50px",
                        borderRadius: "16px",
                        w: "100%",
                        bg: "black",
                        color: "white",
                        onClick: () => {
                          let e = ""
                              .concat(
                                "https://app.skillfulai.io",
                                "/nfts/share?tokenId="
                              )
                              .concat(
                                encodeURIComponent(
                                  null == t ? void 0 : t.tokenId
                                )
                              ),
                            n = "https://twitter.com/intent/tweet?text="
                              .concat(
                                encodeURIComponent(
                                  "I just got beta access to @skillfulai’s platform by minting one of their Cybercats exclusive collection, designed by their own AI model! \uD83D\uDC3E✨\n\nIt’s the first-ever stable diffusion model trained on its own NFT collection—how cool is that?"
                                ),
                                "&url="
                              )
                              .concat(encodeURIComponent(e), "&via=")
                              .concat(encodeURIComponent("SkillfulAI"));
                          window.open(n, "_blank", "noopener,noreferrer");
                        },
                        _hover: { bg: "black" },
                        children: "Share on X",
                      }),
                      (0, r.jsx)(c.z, {
                        variant: "link",
                        color: "white",
                        onClick: () => {
                          a.push("/nft-collection");
                        },
                        textAlign: "center",
                        children: "NFT collection",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        E = n(40060),
        I = n(57621),
        N = n(21690),
        S = n(41872),
        R = n(49364);
      let _ = [
        { inputs: [], name: "AccessControlBadConfirmation", type: "error" },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
            { internalType: "bytes32", name: "neededRole", type: "bytes32" },
          ],
          name: "AccessControlUnauthorizedAccount",
          type: "error",
        },
        {
          inputs: [],
          name: "ERC721EnumerableForbiddenBatchMint",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "operator", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "ERC721InsufficientApproval",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "approver", type: "address" },
          ],
          name: "ERC721InvalidApprover",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "operator", type: "address" },
          ],
          name: "ERC721InvalidOperator",
          type: "error",
        },
        {
          inputs: [{ internalType: "address", name: "owner", type: "address" }],
          name: "ERC721InvalidOwner",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "receiver", type: "address" },
          ],
          name: "ERC721InvalidReceiver",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "sender", type: "address" },
          ],
          name: "ERC721InvalidSender",
          type: "error",
        },
        {
          inputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "ERC721NonexistentToken",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "uint256", name: "index", type: "uint256" },
          ],
          name: "ERC721OutOfBoundsIndex",
          type: "error",
        },
        { inputs: [], name: "MaximiumMintedAlready", type: "error" },
        { inputs: [], name: "MintingClosed", type: "error" },
        {
          inputs: [{ internalType: "address", name: "owner", type: "address" }],
          name: "OwnableInvalidOwner",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "OwnableUnauthorizedAccount",
          type: "error",
        },
        { inputs: [], name: "ReentrancyGuardReentrantCall", type: "error" },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "NewNFTMinted",
          type: "event",
        },
        {
          inputs: [],
          name: "mint",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "tokenURI",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "", type: "address" }],
          name: "whitelist",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
      ];
      var A = n(57348),
        M = n(63708),
        O = n(71185),
        D = n(90308);
      let z = (e) => {
        let { textTop: t, textMiddle: n, textBottom: i } = e;
        return (0, r.jsxs)(s.k, {
          bg: "linear-gradient(135deg, rgba(245, 247, 250, 0.06) 0%, rgba(245, 247, 250, 0.0001) 100%)",
          height: "60px",
          padding: "16px",
          gap: "12px",
          alignItems: "center",
          border: "1px solid #FFFFFF1F",
          borderRadius: "24px",
          textAlign: "center",
          justifyContent: "center",
          minWidth: "120px",
          flex: "1",
          opacity: "0.64",
          children: [
            t &&
              (0, r.jsx)(l.x, {
                color: "white",
                fontWeight: "700",
                fontSize: { base: "14px", lg: "16px", xl: "20px" },
                children: t,
              }),
            n &&
              (0, r.jsx)(l.x, {
                color: "white",
                fontWeight: "700",
                fontSize: { base: "16px", lg: "18px", xl: "24px" },
                children: n,
              }),
            i &&
              (0, r.jsx)(l.x, {
                color: "white",
                fontWeight: "700",
                fontSize: { base: "14px", lg: "16px", xl: "20px" },
                children: i,
              }),
          ],
        });
      };
      var U = () => {
        let e = (0, p.useContext)(D.Z),
          t = (0, f.M)(),
          { handleApiError: n } = (0, O.p)(),
          h = (0, i.p)(),
          b = (0, a.S)({ base: "48px", lg: "76px" }),
          g = (0, a.S)({ base: "14px", lg: "16px" }),
          y = (0, a.S)({ base: "160px", lg: "212px" }),
          w = (0, a.S)({ base: "50px", lg: "60px" }),
          [F, k] = (0, p.useState)(!1),
          [v, C] = (0, p.useState)(null),
          { isOpen: T, onOpen: U, onClose: W } = (0, o.q)(),
          L = (0, p.useMemo)(
            () =>
              (0, I.u)({
                client: E.Lp,
                address: "0xaE8E9f0f9219F0b52D518d925A2E0Db1763CdB12",
                chain: R.u,
                abi: _,
              }),
            [R.u]
          ),
          { data: B, isLoading: P } = (0, x.u)({
            contract: L,
            method: "whitelist",
            params: [null == t ? void 0 : t.address],
          }),
          { mutate: q } = (0, m.p)(),
          H = async () => {
            k(!0),
              B > 0
                ? q((0, N.A)({ contract: L, method: "mint" }), {
                    onSuccess: async (e) => {},
                    onError: (e) => {
                      h({
                        title: "Transaction Failed",
                        description:
                          e.message ||
                          "An error occurred during the transaction.",
                        status: "error",
                        duration: 5e3,
                        isClosable: !0,
                      }),
                        k(!1);
                    },
                    async onSettled(t, n, r, i) {
                      if (t) {
                        try {
                          let n;
                          let r = await (0, S.h)({
                            client: E.Lp,
                            chain: R.u,
                            transactionHash: t.transactionHash,
                            maxBlocksWaitTime: 20,
                          });
                          console.log("Transaction confirmed:", r);
                          let i = 20,
                            a = (e) => new Promise((t) => setTimeout(t, e));
                          for (; i > 0; ) {
                            if (
                              ((n = await A.Z.getMintedNFT(t.transactionHash)),
                              "ok" === n.status)
                            ) {
                              e.getAccessTier(),
                                C({
                                  imageUrl: null == n ? void 0 : n.imageUrl,
                                  metadata: null == n ? void 0 : n.metadata,
                                  tokenId: null == n ? void 0 : n.tokenId,
                                }),
                                U();
                              break;
                            }
                            if ("pending" === n.status)
                              i--,
                                0 === i
                                  ? h({
                                      title: "Error retrieving NFT",
                                      description:
                                        "Unable to retrieve your NFT after multiple attempts.",
                                      status: "error",
                                      duration: 5e3,
                                      isClosable: !0,
                                    })
                                  : await a(3e3);
                            else {
                              h({
                                title: "Error retrieving NFT",
                                description: "An unexpected error occurred.",
                                status: "error",
                                duration: 5e3,
                                isClosable: !0,
                              });
                              break;
                            }
                          }
                        } catch (e) {
                          h({
                            title: "Error retrieving NFT",
                            description:
                              e.message ||
                              "An error occurred while retrieving your NFT.",
                            status: "error",
                            duration: 5e3,
                            isClosable: !0,
                          });
                        }
                        k(!1);
                      }
                    },
                  })
                : (k(!1),
                  h({
                    title: "Mint Not Permitted",
                    description:
                      "You have already minted the maximum number of NFTs or are not in whitelist.",
                    status: "error",
                    duration: 5e3,
                    isClosable: !0,
                  }));
          },
          Z = (0, p.useCallback)(async () => {
            try {
              let e = await M.Z.getTierMarketPlace();
              console.log("tier: ", e);
            } catch (e) {
              n(e),
                h({
                  title: "Error retrieving marketplace access tier.",
                  description: e.message,
                  status: "error",
                  duration: 6e3,
                  isClosable: !0,
                });
            }
          }, [n, h]);
        return (
          (0, p.useEffect)(() => {
            Z();
          }, []),
          (0, r.jsxs)(s.k, {
            flexDir: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100%",
            padding: { base: "20px", lg: "40px" },
            borderRadius: "24px",
            backdropFilter: "blur(50px)",
            children: [
              (0, r.jsxs)(s.k, {
                flexDir: { base: "column-reverse", lg: "row" },
                alignItems: "center",
                justifyContent: "space-between",
                gap: { base: "20px", lg: "31px" },
                width: "100%",
                children: [
                  (0, r.jsxs)(s.k, {
                    flexDir: "column",
                    gap: "20px",
                    flex: "1",
                    width: "100%",
                    children: [
                      (0, r.jsxs)(l.x, {
                        fontWeight: "900",
                        fontSize: b,
                        lineHeight: { base: "50px", lg: "65px" },
                        color: "white",
                        children: ["MINT ", (0, r.jsx)("br", {}), " OUR NFT"],
                      }),
                      (0, r.jsx)(l.x, {
                        fontWeight: "500",
                        fontSize: g,
                        lineHeight: "24px",
                        color: "#FFFFFF99",
                        children:
                          "Click on the mint button to create an NFT. Subsequently, this NFT will be used to gain access to all the features of the application.",
                      }),
                      (0, r.jsxs)(d.xu, {
                        bg: "rgba(255, 255, 255, 0.1)",
                        padding: "12px",
                        borderRadius: "12px",
                        width: "100%",
                        minW: "200px",
                        maxWidth: "600px",
                        children: [
                          (0, r.jsx)(l.x, {
                            fontWeight: "600",
                            fontSize: "20px",
                            color: "white",
                            children: "Your wallet address:",
                          }),
                          (0, r.jsx)(l.x, {
                            fontSize: "16px",
                            color: "#FFFFFFCC",
                            isTruncated: !0,
                            children:
                              (null == t ? void 0 : t.address) ||
                              "Not connected",
                          }),
                        ],
                      }),
                      (0, r.jsx)(c.z, {
                        width: y,
                        height: w,
                        borderRadius: "16px",
                        fontSize: "sm",
                        className: "main-gradient-bg",
                        color: "white",
                        onClick: H,
                        isLoading: F,
                        loadingText: "Minting",
                        disabled: !(null == t ? void 0 : t.address),
                        children: "Mint NFT",
                      }),
                    ],
                  }),
                  (0, r.jsx)(d.xu, {
                    flex: "1",
                    display: "flex",
                    justifyContent: "center",
                    children: (0, r.jsx)(u.E, {
                      src: "/icons/mint-logo.svg",
                      alt: "Mint NFT Logo",
                      minW: "200px",
                      maxWidth: "600px",
                      width: "100%",
                      objectFit: "contain",
                      loading: "lazy",
                    }),
                  }),
                ],
              }),
              (0, r.jsxs)(s.k, {
                mt: "40px",
                gap: { base: "10px", lg: "20px" },
                flexWrap: "wrap",
                justifyContent: "center",
                width: "100%",
                flexDir: { base: "column", lg: "row" },
                children: [
                  (0, r.jsx)(z, {
                    textTop: "EXCLUSIVE",
                    textBottom: "EARLY ACCESS",
                  }),
                  (0, r.jsx)(z, {
                    textTop: "LIFETIME",
                    textMiddle: "FREE",
                    textBottom: "CREDITS",
                  }),
                  (0, r.jsx)(z, {
                    textTop: "SUBSCRIPTIONS",
                    textBottom: "DISCOUNTS",
                  }),
                ],
              }),
              (0, r.jsx)(j, { isOpen: T, onClose: W, nft: v }),
            ],
          })
        );
      };
    },
    57348: function (e, t, n) {
      "use strict";
      let r = "https://api.model-hub.skillfulai.io";
      class i {
        async getMintedNFT(e) {
          let t = ""
            .concat(r, "/api/v1/catcollection?action=mintCheck&tx=")
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
              "".concat(r, "/api/v1/catcollection?action=collection "),
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
            .concat(r, "/api/v1/catcollection?action=mine&address=")
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
      let a = new i();
      t.Z = a;
    },
    20967: function (e, t, n) {
      "use strict";
      n.d(t, {
        q: function () {
          return s;
        },
      });
      var r = n(67294),
        i =
          "undefined" != typeof window &&
          window.document &&
          window.document.createElement
            ? r.useLayoutEffect
            : r.useEffect;
      function a(e, t = []) {
        let n = (0, r.useRef)(e);
        return (
          i(() => {
            n.current = e;
          }),
          (0, r.useCallback)((...e) => {
            var t;
            return null == (t = n.current) ? void 0 : t.call(n, ...e);
          }, t)
        );
      }
      var o = n(36597);
      function s(e = {}) {
        let { onClose: t, onOpen: n, isOpen: i, id: s } = e,
          l = a(n),
          d = a(t),
          [c, u] = (0, r.useState)(e.defaultIsOpen || !1),
          [p, f] = (function (e, t) {
            let n = void 0 !== e;
            return [n, n && void 0 !== e ? e : t];
          })(i, c),
          x = (function (e, t) {
            let n = (0, r.useId)();
            return (0, r.useMemo)(
              () => e || [t, n].filter(Boolean).join("-"),
              [e, t, n]
            );
          })(s, "disclosure"),
          m = (0, r.useCallback)(() => {
            p || u(!1), null == d || d();
          }, [p, d]),
          h = (0, r.useCallback)(() => {
            p || u(!0), null == l || l();
          }, [p, l]),
          b = (0, r.useCallback)(() => {
            (f ? m : h)();
          }, [f, h, m]);
        return {
          isOpen: !!f,
          onOpen: h,
          onClose: m,
          onToggle: b,
          isControlled: p,
          getButtonProps: (e = {}) => ({
            ...e,
            "aria-expanded": f,
            "aria-controls": x,
            onClick: (0, o.v0)(e.onClick, b),
          }),
          getDisclosureProps: (e = {}) => ({ ...e, hidden: !f, id: x }),
        };
      }
    },
    35796: function (e, t, n) {
      "use strict";
      n.d(t, {
        S: function () {
          return s;
        },
      });
      var r = n(33951),
        i = n(18618),
        a = n(48940),
        o = n(25432);
      function s(e, t) {
        var n;
        let s = (function (e) {
            var t, n;
            let r = (0, o.Kn)(e) ? e : { fallback: null != e ? e : "base" },
              s = (0, a.F)().__breakpoints.details.map(
                ({ minMaxQuery: e, breakpoint: t }) => ({
                  breakpoint: t,
                  query: e.replace("@media screen and ", ""),
                })
              ),
              l = s.map((e) => e.breakpoint === r.fallback),
              d = (0, i.a)(
                s.map((e) => e.query),
                { fallback: l, ssr: r.ssr }
              ).findIndex((e) => !0 == e);
            return null != (n = null == (t = s[d]) ? void 0 : t.breakpoint)
              ? n
              : r.fallback;
          })((0, o.Kn)(t) ? t : { fallback: null != t ? t : "base" }),
          l = (0, a.F)();
        if (!s) return;
        let d = Array.from(
          (null == (n = l.__breakpoints) ? void 0 : n.keys) || []
        );
        return (function (e, t, n = r.AV) {
          let i = Object.keys(e).indexOf(t);
          if (-1 !== i) return e[t];
          let a = n.indexOf(t);
          for (; a >= 0; ) {
            let t = n[a];
            if (e.hasOwnProperty(t)) {
              i = a;
              break;
            }
            a -= 1;
          }
          if (-1 !== i) return e[n[i]];
        })(
          Array.isArray(e)
            ? Object.fromEntries(
                Object.entries((0, r.Yq)(e, d)).map(([e, t]) => [e, t])
              )
            : e,
          s,
          d
        );
      }
    },
    14253: function (e, t, n) {
      "use strict";
      n.d(t, {
        m: function () {
          return l;
        },
      });
      var r = n(67990),
        i = n(25432),
        a = n(16554),
        o = n(65548),
        s = n(85893),
        l = (0, a.G)((e, t) => {
          let { className: n, ...a } = e,
            l = (0, i.cx)("chakra-modal__footer", n),
            d = {
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              ...(0, r.I_)().footer,
            };
          return (0, s.jsx)(o.m.footer, {
            ref: t,
            ...a,
            __css: d,
            className: l,
          });
        });
      l.displayName = "ModalFooter";
    },
    96854: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return b;
        },
      });
      var r = n(67294),
        i = n(25432),
        a = n(65548),
        o = n(33179),
        s = n(70917),
        l = n(16554),
        d = n(77030),
        c = n(7634),
        u = n(85893),
        p = (0, a.m)("div", {
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
        x = (0, o.gJ)("skeleton-end-color"),
        m = (0, s.F4)({ from: { opacity: 0 }, to: { opacity: 1 } }),
        h = (0, s.F4)({
          from: { borderColor: f.reference, background: f.reference },
          to: { borderColor: x.reference, background: x.reference },
        }),
        b = (0, l.G)((e, t) => {
          let n = {
              ...e,
              fadeDuration:
                "number" == typeof e.fadeDuration ? e.fadeDuration : 0.4,
              speed: "number" == typeof e.speed ? e.speed : 0.8,
            },
            s = (0, d.mq)("Skeleton", n),
            l = (function () {
              let e = (0, r.useRef)(!0);
              return (
                (0, r.useEffect)(() => {
                  e.current = !1;
                }, []),
                e.current
              );
            })(),
            {
              startColor: b = "",
              endColor: g = "",
              isLoaded: y,
              fadeDuration: w,
              speed: F,
              className: k,
              fitContent: v,
              ...C
            } = (0, o.Lr)(n),
            [T, j] = (0, c.dQ)("colors", [b, g]),
            E = (function (e) {
              let t = (0, r.useRef)();
              return (
                (0, r.useEffect)(() => {
                  t.current = e;
                }, [e]),
                t.current
              );
            })(y),
            I = (0, i.cx)("chakra-skeleton", k),
            N = {
              ...(T && { [f.variable]: T }),
              ...(j && { [x.variable]: j }),
            };
          if (y) {
            let e = l || E ? "none" : `${m} ${w}s`;
            return (0, u.jsx)(a.m.div, {
              ref: t,
              className: I,
              __css: { animation: e },
              ...C,
            });
          }
          return (0, u.jsx)(p, {
            ref: t,
            className: I,
            ...C,
            __css: {
              width: v ? "fit-content" : void 0,
              ...s,
              ...N,
              _dark: { ...s._dark, ...N },
              animation: `${F}s linear infinite alternate ${h}`,
            },
          });
        });
      b.displayName = "Skeleton";
    },
  },
  function (e) {
    e.O(0, [65408, 92888, 49774, 40179], function () {
      return e((e.s = 48312));
    }),
      (_N_E = e.O());
  },
]);
