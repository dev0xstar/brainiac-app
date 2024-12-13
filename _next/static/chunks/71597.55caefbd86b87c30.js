"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [71597, 38430],
  {
    43684: function (t, n, a) {
      a.d(n, {
        jA: function () {
          return o;
        },
      });
      var c = a(26182);
      let r = [{ type: "address", name: "_address" }],
        e = [{ type: "uint256" }];
      async function o(t) {
        return (0, c.readContract)({
          contract: t.contract,
          method: ["0x70a08231", r, e],
          params: [t.address],
        });
      }
    },
    73851: function (t, n, a) {
      a.d(n, {
        uH: function () {
          return o;
        },
      });
      var c = a(26182);
      let r = [],
        e = [{ type: "uint8" }];
      async function o(t) {
        return (0, c.readContract)({
          contract: t.contract,
          method: ["0x313ce567", r, e],
          params: [],
        });
      }
    },
    71597: function (t, n, a) {
      a.d(n, {
        getBalance: function () {
          return o;
        },
      });
      var c = a(98189),
        r = a(43684),
        e = a(38430);
      async function o(t) {
        let [n, a] = await Promise.all([
          (0, r.jA)(t),
          (0, e.getCurrencyMetadata)(t),
        ]);
        return { ...a, value: n, displayValue: (0, c.bb)(n, a.decimals) };
      }
    },
    38430: function (t, n, a) {
      a.d(n, {
        getCurrencyMetadata: function () {
          return h;
        },
      });
      var c = a(60301),
        r = a(71786),
        e = a(26182);
      let o = [],
        u = [{ type: "string" }];
      async function s(t) {
        return (0, e.readContract)({
          contract: t.contract,
          method: ["0x06fdde03", o, u],
          params: [],
        });
      }
      async function i(t) {
        return (0, r.D)(() => s(t), {
          cacheKey: `${t.contract.chain.id}:${t.contract.address}:name`,
          cacheTime: Number.POSITIVE_INFINITY,
        });
      }
      let d = [],
        m = [{ type: "string" }];
      async function y(t) {
        return (0, e.readContract)({
          contract: t.contract,
          method: ["0x95d89b41", d, m],
          params: [],
        });
      }
      async function l(t) {
        return (0, r.D)(() => y(t), {
          cacheKey: `${t.contract.chain.id}:${t.contract.address}:symbol`,
          cacheTime: Number.POSITIVE_INFINITY,
        });
      }
      var f = a(73851);
      async function h(t) {
        if ((0, c.qw)(t.contract.address))
          return {
            name: "Ether",
            symbol: "ETH",
            decimals: 18,
            ...t.contract.chain.nativeCurrency,
          };
        try {
          let [n, a, c] = await Promise.all([
            i(t).catch(() => ""),
            l(t),
            (0, f.uH)(t),
          ]);
          return { name: n, symbol: a, decimals: c };
        } catch {
          throw Error("Invalid currency token");
        }
      }
    },
  },
]);
