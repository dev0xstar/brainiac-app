"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [60970],
  {
    60970: function (e, t, a) {
      a.d(t, {
        autoConnectInjectedWallet: function () {
          return m;
        },
        connectInjectedWallet: function () {
          return l;
        },
      });
      var n = a(71352),
        r = a(95810),
        i = a(4159),
        s = a(75403),
        c = a(98356),
        o = a(75814),
        d = a(74589),
        h = a(26485);
      function u(e) {
        let t = (0, d.injectedProvider)(e);
        if (!t) throw Error(`No injected provider found for wallet: "${e}"`);
        return t;
      }
      async function l(e, t, a) {
        let n = u(e),
          s = (await n.request({ method: "eth_requestAccounts" }))[0];
        if (!s) throw Error("no accounts available");
        let c = (0, i.Kn)(s),
          d = await n.request({ method: "eth_chainId" }).then(o.J),
          h = t.chain && t.chain.id === d ? t.chain : (0, r.XY)(d);
        return (
          t.chain && t.chain.id !== d && (await p(n, t.chain), (h = t.chain)),
          f(n, c, h, a)
        );
      }
      async function m(e, t, a) {
        let n = u(e),
          s = (await n.request({ method: "eth_accounts" }))[0];
        if (!s) throw Error("no accounts available");
        let c = (0, i.Kn)(s),
          d = await n.request({ method: "eth_chainId" }).then(o.J);
        return f(n, c, a && a.id === d ? a : (0, r.XY)(d), t);
      }
      function w(e, t) {
        let a = {
          address: (0, i.Kn)(t),
          async sendTransaction(t) {
            return {
              transactionHash: await e.request({
                method: "eth_sendTransaction",
                params: [
                  {
                    accessList: t.accessList,
                    value: t.value ? (0, s.eC)(t.value) : void 0,
                    gas: t.gas ? (0, s.eC)(t.gas) : void 0,
                    from: this.address,
                    to: t.to,
                    data: t.data,
                  },
                ],
              }),
            };
          },
          async signMessage({ message: t }) {
            if (!a.address) throw Error("Provider not setup");
            let n =
              "string" == typeof t
                ? (0, s.$G)(t)
                : t.raw instanceof Uint8Array
                ? (0, s.dg)(t.raw)
                : t.raw;
            return await e.request({
              method: "personal_sign",
              params: [n, a.address],
            });
          },
          async signTypedData(t) {
            if (!e || !a.address) throw Error("Provider not setup");
            let r = (0, h.t)(t),
              { domain: i, message: s, primaryType: c } = r,
              o = { EIP712Domain: (0, n.cj)({ domain: i }), ...r.types };
            (0, n.iC)({ domain: i, message: s, primaryType: c, types: o });
            let d = (0, n.H6)({
              domain: i ?? {},
              message: s,
              primaryType: c,
              types: o,
            });
            return await e.request({
              method: "eth_signTypedData_v4",
              params: [a.address, d],
            });
          },
          watchAsset: async (t) =>
            await e.request(
              { method: "wallet_watchAsset", params: t },
              { retryCount: 0 }
            ),
        };
        return a;
      }
      async function f(e, t, a, n) {
        let s = w(e, t);
        async function c() {
          e.removeListener("accountsChanged", h),
            e.removeListener("chainChanged", u),
            e.removeListener("disconnect", d);
        }
        async function d() {
          c(), n.emit("disconnect", void 0);
        }
        function h(t) {
          if (t[0]) {
            let a = w(e, (0, i.Kn)(t[0]));
            n.emit("accountChanged", a), n.emit("accountsChanged", t);
          } else d();
        }
        function u(e) {
          let t = (0, r.XY)((0, o.J)(e));
          n.emit("chainChanged", t);
        }
        return (
          e.on &&
            (e.on("accountsChanged", h),
            e.on("chainChanged", u),
            e.on("disconnect", d)),
          [s, a, d, (t) => p(e, t)]
        );
      }
      async function p(e, t) {
        let a = (0, s.eC)(t.id);
        try {
          await e.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: a }],
          });
        } catch (n) {
          if (n?.code === 4902 || n?.data?.originalError?.code === 4902) {
            let n = await (0, r.ZN)(t);
            await e.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: a,
                  chainName: n.name,
                  nativeCurrency: n.nativeCurrency,
                  rpcUrls: (0, c.w)(n),
                  blockExplorerUrls: n.explorers?.map((e) => e.url),
                },
              ],
            });
          } else throw n;
        }
      }
    },
  },
]);
