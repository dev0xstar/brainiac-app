"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [16964],
  {
    16964: function (e, t, r) {
      r.d(t, {
        autoConnectWC: function () {
          return A;
        },
        connectWC: function () {
          return Y;
        },
      });
      var n = r(71352),
        a = r(36117),
        o = r(96070);
      let s = (e) => e;
      class i extends a.G {
        constructor({ body: e, error: t, url: r }) {
          super("RPC Request failed.", {
            cause: t,
            details: t.message,
            metaMessages: [`URL: ${s(r)}`, `Request body: ${(0, o.P)(e)}`],
            name: "RpcRequestError",
          }),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.code = t.code);
        }
      }
      class c extends a.G {
        constructor(
          e,
          { code: t, docsPath: r, metaMessages: n, name: a, shortMessage: o }
        ) {
          super(o, {
            cause: e,
            docsPath: r,
            metaMessages: n || e?.metaMessages,
            name: a || "RpcError",
          }),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.name = a || e.name),
            (this.code = e instanceof i ? e.code : t ?? -1);
        }
      }
      class d extends c {
        constructor(e, t) {
          super(e, t),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = t.data);
        }
      }
      class l extends c {
        constructor(e) {
          super(e, {
            code: l.code,
            name: "ParseRpcError",
            shortMessage:
              "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
          });
        }
      }
      Object.defineProperty(l, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32700,
      });
      class u extends c {
        constructor(e) {
          super(e, {
            code: u.code,
            name: "InvalidRequestRpcError",
            shortMessage: "JSON is not a valid request object.",
          });
        }
      }
      Object.defineProperty(u, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32600,
      });
      class p extends c {
        constructor(e, { method: t } = {}) {
          super(e, {
            code: p.code,
            name: "MethodNotFoundRpcError",
            shortMessage: `The method${
              t ? ` "${t}"` : ""
            } does not exist / is not available.`,
          });
        }
      }
      Object.defineProperty(p, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32601,
      });
      class h extends c {
        constructor(e) {
          super(e, {
            code: h.code,
            name: "InvalidParamsRpcError",
            shortMessage:
              "Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters.",
          });
        }
      }
      Object.defineProperty(h, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32602,
      });
      class m extends c {
        constructor(e) {
          super(e, {
            code: m.code,
            name: "InternalRpcError",
            shortMessage: "An internal error was received.",
          });
        }
      }
      Object.defineProperty(m, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32603,
      });
      class b extends c {
        constructor(e) {
          super(e, {
            code: b.code,
            name: "InvalidInputRpcError",
            shortMessage:
              "Missing or invalid parameters.\nDouble check you have provided the correct parameters.",
          });
        }
      }
      Object.defineProperty(b, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32e3,
      });
      class f extends c {
        constructor(e) {
          super(e, {
            code: f.code,
            name: "ResourceNotFoundRpcError",
            shortMessage: "Requested resource not found.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ResourceNotFoundRpcError",
            });
        }
      }
      Object.defineProperty(f, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32001,
      });
      class g extends c {
        constructor(e) {
          super(e, {
            code: g.code,
            name: "ResourceUnavailableRpcError",
            shortMessage: "Requested resource not available.",
          });
        }
      }
      Object.defineProperty(g, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32002,
      });
      class v extends c {
        constructor(e) {
          super(e, {
            code: v.code,
            name: "TransactionRejectedRpcError",
            shortMessage: "Transaction creation failed.",
          });
        }
      }
      Object.defineProperty(v, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32003,
      });
      class w extends c {
        constructor(e, { method: t } = {}) {
          super(e, {
            code: w.code,
            name: "MethodNotSupportedRpcError",
            shortMessage: `Method${t ? ` "${t}"` : ""} is not implemented.`,
          });
        }
      }
      Object.defineProperty(w, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32004,
      });
      class C extends c {
        constructor(e) {
          super(e, {
            code: C.code,
            name: "LimitExceededRpcError",
            shortMessage: "Request exceeds defined limit.",
          });
        }
      }
      Object.defineProperty(C, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32005,
      });
      class y extends c {
        constructor(e) {
          super(e, {
            code: y.code,
            name: "JsonRpcVersionUnsupportedError",
            shortMessage: "Version of JSON-RPC protocol is not supported.",
          });
        }
      }
      Object.defineProperty(y, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32006,
      });
      class M extends d {
        constructor(e) {
          super(e, {
            code: M.code,
            name: "UserRejectedRequestError",
            shortMessage: "User rejected the request.",
          });
        }
      }
      Object.defineProperty(M, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4001,
      });
      class P extends d {
        constructor(e) {
          super(e, {
            code: P.code,
            name: "UnauthorizedProviderError",
            shortMessage:
              "The requested method and/or account has not been authorized by the user.",
          });
        }
      }
      Object.defineProperty(P, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4100,
      });
      class E extends d {
        constructor(e, { method: t } = {}) {
          super(e, {
            code: E.code,
            name: "UnsupportedProviderMethodError",
            shortMessage: `The Provider does not support the requested method${
              t ? ` " ${t}"` : ""
            }.`,
          });
        }
      }
      Object.defineProperty(E, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4200,
      });
      class O extends d {
        constructor(e) {
          super(e, {
            code: O.code,
            name: "ProviderDisconnectedError",
            shortMessage: "The Provider is disconnected from all chains.",
          });
        }
      }
      Object.defineProperty(O, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4900,
      });
      class R extends d {
        constructor(e) {
          super(e, {
            code: R.code,
            name: "ChainDisconnectedError",
            shortMessage:
              "The Provider is not connected to the requested chain.",
          });
        }
      }
      Object.defineProperty(R, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4901,
      });
      class j extends d {
        constructor(e) {
          super(e, {
            code: j.code,
            name: "SwitchChainError",
            shortMessage: "An error occurred when attempting to switch chain.",
          });
        }
      }
      Object.defineProperty(j, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4902,
      });
      var x = r(95810),
        I = r(4159),
        q = r(75403),
        N = r(26485),
        T = r(16525),
        U = r(19908),
        _ = r(12138),
        S = r(98356),
        J = r(2129),
        $ = r(75814),
        D = r(8103);
      let L = "wallet_addEthereumChain",
        k = {
          requestedChains: "tw.wc.requestedChains",
          lastUsedChainId: "tw.wc.lastUsedChainId",
        };
      async function Y(e, t, r, n, a) {
        let o = await X(e, r, a),
          s = e.walletConnect,
          { onDisplayUri: i } = s || {};
        if (!i && a && "walletConnect" !== r) {
          let e = await (0, _.d)(r);
          i = (t) => {
            let r = e.mobile.native || e.mobile.universal;
            if (!r)
              throw Error(
                "No app url found for wallet connect to redirect to."
              );
            a((0, U.P)(r, t).redirect);
          };
        }
        i && o.events.addListener("display_uri", i);
        let c = s?.optionalChains,
          d = e.chain;
        "global.safe" === r &&
          ((c = K.map(x.XY)), d && !c.includes(d) && (d = void 0));
        let { rpcMap: l, chainsToRequest: u } = H({
          client: e.client,
          chain: d,
          optionalChains: c,
        });
        o.session &&
          (await o.connect({
            ...(s?.pairingTopic ? { pairingTopic: s?.pairingTopic } : {}),
            optionalChains: u,
            chains: d ? [d.id] : u.length > 0 ? [u[0]] : [1],
            rpcMap: l,
          })),
          V(u, n);
        let p = (await o.enable())[0];
        if (!p) throw Error("No accounts found on provider.");
        let h = (0, $.J)(o.chainId),
          m = e.chain && e.chain.id === h ? e.chain : (0, x.XY)(h);
        if (e) {
          let t = {
            optionalChains: e.walletConnect?.optionalChains,
            chain: e.chain,
            pairingTopic: e.walletConnect?.pairingTopic,
          };
          n && (0, T.j$)(n, r, t);
        }
        return (
          s?.onDisplayUri &&
            o.events.removeListener("display_uri", s.onDisplayUri),
          F(p, m, o, t, n)
        );
      }
      async function A(e, t, r, n, a) {
        let o = n ? await (0, T.Zx)(n, r) : null,
          s = await X(
            o
              ? {
                  chain: o.chain,
                  client: e.client,
                  walletConnect: {
                    pairingTopic: o.pairingTopic,
                    optionalChains: o.optionalChains,
                  },
                }
              : { client: e.client, walletConnect: {} },
            r,
            a,
            !0
          ),
          i = s.accounts[0];
        if (!i) throw Error("No accounts found on provider.");
        let c = (0, $.J)(s.chainId);
        return F(
          i,
          e.chain && e.chain.id === c ? e.chain : (0, x.XY)(c),
          s,
          t,
          n
        );
      }
      async function X(e, t, n, a = !1) {
        let o = await (0, _.d)(t),
          s = e.walletConnect,
          {
            EthereumProvider: i,
            OPTIONAL_EVENTS: c,
            OPTIONAL_METHODS: d,
          } = await Promise.all([r.e(93484), r.e(33797), r.e(4268)]).then(
            r.bind(r, 80085)
          ),
          l = s?.optionalChains,
          u = e.chain;
        "global.safe" === t &&
          ((l = K.map(x.XY)), u && !l.includes(u) && (u = void 0));
        let { rpcMap: p, chainsToRequest: h } = H({
            client: e.client,
            chain: u,
            optionalChains: l,
          }),
          m = await i.init({
            showQrModal: s?.showQrModal === void 0 ? !n : s.showQrModal,
            projectId: s?.projectId || D.O,
            optionalMethods: d,
            optionalEvents: c,
            optionalChains: h,
            chains: u ? [u.id] : h.length > 0 ? [h[0]] : [1],
            metadata: {
              name: s?.appMetadata?.name || (0, J.f)().name,
              description:
                s?.appMetadata?.description || (0, J.f)().description,
              url: s?.appMetadata?.url || (0, J.f)().url,
              icons: [s?.appMetadata?.logoUrl || (0, J.f)().logoUrl],
            },
            rpcMap: p,
            qrModalOptions: s?.qrModalOptions,
            disableProviderPing: !0,
          });
        if (
          (m.events.setMaxListeners(Number.POSITIVE_INFINITY),
          !a && m.session && (await m.disconnect()),
          "walletConnect" !== t)
        ) {
          function b() {
            let e =
              m.session?.peer?.metadata?.redirect?.native ||
              o.mobile.native ||
              o.mobile.universal;
            n && e && n(e);
          }
          m.signer.client.on("session_request_sent", b),
            m.events.addListener("disconnect", () => {
              m.signer.client.off("session_request_sent", b);
            });
        }
        return m;
      }
      function G(e, t) {
        return {
          address: (0, I.Kn)(t),
          async sendTransaction(t) {
            return {
              transactionHash: await e.request({
                method: "eth_sendTransaction",
                params: [
                  {
                    gas: t.gas ? (0, q.eC)(t.gas) : void 0,
                    value: t.value ? (0, q.eC)(t.value) : void 0,
                    from: this.address,
                    to: t.to,
                    data: t.data,
                  },
                ],
              }),
            };
          },
          async signMessage({ message: t }) {
            let r =
              "string" == typeof t
                ? (0, q.$G)(t)
                : t.raw instanceof Uint8Array
                ? (0, q.dg)(t.raw)
                : t.raw;
            return e.request({
              method: "personal_sign",
              params: [r, this.address],
            });
          },
          async signTypedData(t) {
            let r = (0, N.t)(t),
              { domain: a, message: o, primaryType: s } = r,
              i = { EIP712Domain: (0, n.cj)({ domain: a }), ...r.types };
            (0, n.iC)({ domain: a, message: o, primaryType: s, types: i });
            let c = (0, n.H6)({
              domain: a ?? {},
              message: o,
              primaryType: s,
              types: i,
            });
            return await e.request({
              method: "eth_signTypedData_v4",
              params: [this.address, c],
            });
          },
        };
      }
      function F(e, t, r, n, a) {
        let o = G(r, e);
        async function s() {
          r.removeListener("accountsChanged", c),
            r.removeListener("chainChanged", d),
            r.removeListener("disconnect", i),
            await r.disconnect();
        }
        function i() {
          V([], a),
            a?.removeItem(k.lastUsedChainId),
            s(),
            n.emit("disconnect", void 0);
        }
        function c(e) {
          if (e[0]) {
            let t = G(r, (0, I.Kn)(e[0]));
            n.emit("accountChanged", t), n.emit("accountsChanged", e);
          } else i();
        }
        function d(e) {
          let t = (0, x.XY)((0, $.J)(e));
          n.emit("chainChanged", t), a?.setItem(k.lastUsedChainId, String(e));
        }
        return (
          r.on("accountsChanged", c),
          r.on("chainChanged", d),
          r.on("disconnect", i),
          r.on("session_delete", i),
          [o, t, s, (e) => Q(r, e, a)]
        );
      }
      async function Q(e, t, r) {
        let n = t.id;
        try {
          let a =
              e.session?.namespaces[D.A]?.chains?.map((e) =>
                Number.parseInt(e.split(":")[1] || "")
              ) ?? [],
            o = e.session?.namespaces[D.A]?.methods || [];
          if (!a.includes(n) && o.includes(L)) {
            let a = await (0, x.ZN)(t),
              o = [
                ...new Set([
                  ...(t.blockExplorers?.map((e) => e.url) || []),
                  ...(a.explorers?.map((e) => e.url) || []),
                ]),
              ];
            await e.request({
              method: L,
              params: [
                {
                  chainId: (0, q.eC)(a.chainId),
                  chainName: a.name,
                  nativeCurrency: a.nativeCurrency,
                  rpcUrls: (0, S.w)(a),
                  blockExplorerUrls: o.length > 0 ? o : void 0,
                },
              ],
            });
            let s = await z(r);
            s.push(n), V(s, r);
          }
          await e.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: (0, q.eC)(n) }],
          });
        } catch (t) {
          let e = "string" == typeof t ? t : t?.message;
          if (/user rejected request/i.test(e)) throw new M(t);
          throw new j(t);
        }
      }
      function V(e, t) {
        t?.setItem(k.requestedChains, JSON.stringify(e));
      }
      async function z(e) {
        let t = await e.getItem(k.requestedChains);
        return t ? JSON.parse(t) : [];
      }
      function H(e) {
        let t = {};
        e.chain &&
          (t[e.chain.id] = (0, x.GO)({ chain: e.chain, client: e.client }));
        let r = (e?.optionalChains || []).slice(0, 10);
        for (let n of r) t[n.id] = (0, x.GO)({ chain: n, client: e.client });
        let n = r.map((e) => e.id) || [],
          a = e.chain ? [e.chain.id, ...n] : n.length > 0 ? n : [1];
        return (
          e.chain || 0 !== r.length || (t[1] = (0, x.XY)(1).rpc),
          { rpcMap: t, chainsToRequest: a }
        );
      }
      let K = [
        1, 11155111, 42161, 43114, 8453, 1313161554, 84532, 56, 42220, 100, 10,
        137, 1101, 324, 534352,
      ];
    },
  },
]);
