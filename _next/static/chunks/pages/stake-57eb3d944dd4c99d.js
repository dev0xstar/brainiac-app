(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [28797],
  {
    54997: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/stake",
        function () {
          return n(58292);
        },
      ]);
    },
    12338: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return v;
        },
      });
      var i = n(85893),
        a = n(67294),
        r = n(28010),
        o = n(78600),
        s = n(77437),
        l = n(15829),
        d = n(57747),
        u = n(5460),
        p = n(93179),
        c = n(84283),
        m = n(93717),
        y = n(71293),
        h = n(89993),
        x = n(67430),
        g = n(19754),
        f = n(85392);
      let b = p.Z,
        w = {
          javascript: ".js",
          python: ".py",
          java: ".java",
          c: ".c",
          cpp: ".cpp",
          "c++": ".cpp",
          "c#": ".cs",
          ruby: ".rb",
          php: ".php",
          swift: ".swift",
          "objective-c": ".m",
          kotlin: ".kt",
          typescript: ".ts",
          go: ".go",
          perl: ".pl",
          rust: ".rs",
          scala: ".scala",
          haskell: ".hs",
          lua: ".lua",
          shell: ".sh",
          sql: ".sql",
          html: ".html",
          css: ".css",
        },
        T = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = "ABCDEFGHJKLMNPQRSTUVWXY3456789",
            i = "";
          for (let t = 0; t < e; t++)
            i += n.charAt(Math.floor(Math.random() * n.length));
          return t ? i.toLowerCase() : i;
        },
        j = (0, a.memo)((e) => {
          let { language: t, value: n } = e,
            { isCopied: r, copyToClipboard: o } = (function (e) {
              let { timeout: t = 2e3 } = e,
                [n, i] = a.useState(!1);
              return {
                isCopied: n,
                copyToClipboard: (e) => {
                  var n;
                  (null === (n = navigator.clipboard) || void 0 === n
                    ? void 0
                    : n.writeText) &&
                    e &&
                    navigator.clipboard.writeText(e).then(() => {
                      i(!0),
                        setTimeout(() => {
                          i(!1);
                        }, t);
                    });
                },
              };
            })({ timeout: 2e3 });
          return t
            ? (0, i.jsxs)(d.xu, {
                className: "codeblock",
                w: "full",
                bg: "#17181D",
                backdropFilter: "blur(50px)",
                fontFamily: "sans-serif",
                position: "relative",
                borderRadius: "md",
                overflow: "hidden",
                children: [
                  (0, i.jsxs)(m.k, {
                    w: "full",
                    align: "center",
                    justify: "space-between",
                    bg: "#17181D",
                    backdropFilter: "blur(50px)",
                    color: "white",
                    p: "5px",
                    children: [
                      (0, i.jsx)(y.x, {
                        fontSize: "xs",
                        textTransform: "lowercase",
                        children: t,
                      }),
                      (0, i.jsxs)(m.k, {
                        align: "center",
                        children: [
                          (0, i.jsx)(h.h, {
                            onClick: () => {
                              let e = w[t || ""] || ".file",
                                i = "file-".concat(T(3, !0)).concat(e),
                                a = window.prompt("Enter file name", i);
                              if (!a) return;
                              let r = new Blob([n], { type: "text/plain" }),
                                o = URL.createObjectURL(r),
                                s = document.createElement("a");
                              (s.download = a),
                                (s.href = o),
                                (s.style.display = "none"),
                                document.body.appendChild(s),
                                s.click(),
                                document.body.removeChild(s),
                                URL.revokeObjectURL(o);
                            },
                            size: "sm",
                            bg: "transparent",
                            color: "white",
                            _hover: { color: "transparent" },
                            icon: (0, i.jsx)(x._, { color: "white" }),
                            "aria-label": "Download",
                          }),
                          (0, i.jsx)(h.h, {
                            size: "sm",
                            onClick: () => {
                              r || o(n);
                            },
                            bg: "transparent",
                            _hover: { color: "transparent" },
                            icon: r
                              ? (0, i.jsx)(g.n, { color: "white" })
                              : (0, i.jsx)(f.T, { color: "white" }),
                            "aria-label": "Copy",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsx)(b, {
                    language: t,
                    style: c.RY,
                    PreTag: "div",
                    showLineNumbers: !0,
                    customStyle: {
                      width: "100%",
                      background: "transparent",
                      padding: "1.5rem 1rem",
                      borderRadius: "0.5rem",
                    },
                    codeTagProps: {
                      style: {
                        fontSize: "0.9rem",
                        fontFamily: "var(--font-mono)",
                      },
                    },
                    children: n,
                  }),
                ],
              })
            : (0, i.jsx)(d.xu, {
                bg: "transparent",
                fontFamily: "monospace",
                position: "relative",
                p: "1rem",
                borderRadius: "md",
                overflowX: "auto",
                children: (0, i.jsx)("pre", {
                  style: {
                    margin: 0,
                    whiteSpace: "pre-wrap",
                    wordWrap: "break-word",
                  },
                  children: (0, i.jsx)("code", { children: n }),
                }),
              });
        });
      (j.displayName = "CodeBlock"), n(93450);
      let F = (0, a.memo)(r.U, (e, t) => e.children === t.children),
        k = (e) =>
          e
            .replace(RegExp("\\\\\\[(.*?)\\\\\\]", "gs"), "$$$$ $1 $$$$")
            .replace(/\\\((.*?)\\\)/g, "$ $1 $");
      var v = (e) => {
        let {
            content: t,
            isTyping: n = !1,
            onTyping: r,
            disableImage: p = !1,
          } = e,
          [c, m] = (0, a.useState)(""),
          [y, h] = (0, a.useState)(0),
          x = k(t).replace(/\\\\/g, "\\").replace(/\\n/g, "\n");
        return (
          (0, a.useEffect)(() => {
            let e;
            return (
              n && y < x.length
                ? (e = setTimeout(() => {
                    m((e) => e + x.charAt(y)), h((e) => e + 1);
                  }, 10))
                : (!n || y >= x.length) && (m(x), h(x.length)),
              r && r(),
              () => clearTimeout(e)
            );
          }, [x, n, y, r]),
          (0, i.jsx)(d.xu, {
            overflow: "hidden",
            children: (0, i.jsx)(F, {
              remarkPlugins: [o.Z, s.Z],
              rehypePlugins: [l.Z],
              components: {
                p: (e) => {
                  let { node: t, children: n, ...a } = e;
                  return (0, i.jsx)(d.xu, { mb: 2, ...a, children: n });
                },
                code: (e) => {
                  let { node: t, className: n, children: a, ...r } = e,
                    o = /language-(\w+)/.exec(n || "");
                  return (0, i.jsx)(j, {
                    language: (o && o[1]) || "",
                    value: String(a).replace(/\n$/, ""),
                    ...r,
                  });
                },
                img: (e) => {
                  let { node: t, ...n } = e;
                  return p ? null : (0, i.jsx)(u.E, { ...n });
                },
              },
              children: c,
            }),
          })
        );
      };
    },
    31391: function (e, t, n) {
      "use strict";
      var i = n(85893),
        a = n(67294),
        r = n(85970),
        o = n(5418),
        s = n(82140),
        l = n(32735),
        d = n(33090),
        u = n(26105);
      t.Z = (e) => {
        let {
            type: t = "text",
            id: n,
            label: p,
            helperText: c,
            errorMessage: m,
            isInvalid: y,
            value: h,
            onChange: x,
            placeholder: g = "",
            LeftIcon: f,
            RightIcon: b,
            width: w = "auto",
            disabled: T = !1,
            height: j = "40px",
            flex: F = "",
          } = e,
          [k, v] = (0, a.useState)(!1);
        return (0, i.jsxs)(r.NI, {
          maxW: w,
          minW: "200px",
          isInvalid: y,
          children: [
            p && (0, i.jsx)(o.l, { fontSize: "sm", htmlFor: n, children: p }),
            (0, i.jsxs)(s.B, {
              children: [
                f &&
                  (0, i.jsx)(l.Z, {
                    pointerEvents: "none",
                    children: (0, i.jsx)(f, {
                      color: k ? "white" : "#FFFFFF66",
                    }),
                  }),
                (0, i.jsx)(d.I, {
                  type: t,
                  flex: F,
                  height: j,
                  bg: "#FFFFFF12",
                  onFocus: () => v(!0),
                  onBlur: () => v(!1),
                  id: n,
                  value: h,
                  onChange: x,
                  placeholder: g,
                  borderRadius: "16px",
                  focusBorderColor: "white",
                  fontSize: "sm",
                  _placeholder: { color: "#FFFFFF66", fontSize: "sm" },
                  border: "1px solid #FFFFFF1F",
                  color: "#FFFFFF66",
                  disabled: T,
                  display: "flex",
                  alignItems: "center",
                  sx: {
                    _focus: {
                      color: "white",
                      borderColor: "white",
                      "::placeholder": { color: "white" },
                    },
                    _hover: { borderColor: "white" },
                  },
                }),
                b &&
                  (0, i.jsx)(l.x, {
                    pointerEvents: "none",
                    children: (0, i.jsx)(b, {
                      color: k ? "white" : "#FFFFFF66",
                    }),
                  }),
              ],
            }),
            !y && c && (0, i.jsx)(r.Q6, { children: c }),
            y && (0, i.jsx)(u.J1, { children: m }),
          ],
        });
      };
    },
    58292: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return J;
          },
        });
      var i = n(85893),
        a = n(89848),
        r = n(31391),
        o = n(40060),
        s = n(44471),
        l = n(57621),
        d = n(39817),
        u = function (e, t, n) {
          let i = (0, l.u)({
            client: o.Lp,
            address: t.tfAddress,
            chain: t.chainTW,
            abi: [
              { inputs: [], name: "AmountIsZero", type: "error" },
              { inputs: [], name: "CannotStopRewards", type: "error" },
              {
                inputs: [
                  {
                    internalType: "uint256",
                    name: "timeLeft",
                    type: "uint256",
                  },
                ],
                name: "InsufficientRemainingTime",
                type: "error",
              },
              {
                inputs: [],
                name: "InsufficientTransferredAmount",
                type: "error",
              },
              { inputs: [], name: "InvalidPrecision", type: "error" },
              {
                inputs: [
                  {
                    internalType: "uint256",
                    name: "totalStaked",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "stakeLimit",
                    type: "uint256",
                  },
                ],
                name: "InvalidStakeLimit",
                type: "error",
              },
              { inputs: [], name: "InvalidStartAndEndDates", type: "error" },
              {
                inputs: [
                  {
                    internalType: "uint256",
                    name: "stakeLimit",
                    type: "uint256",
                  },
                ],
                name: "MaximumStakeAmountReached",
                type: "error",
              },
              {
                inputs: [
                  { internalType: "address", name: "owner", type: "address" },
                  { internalType: "address", name: "account", type: "address" },
                ],
                name: "NotPoolOwner",
                type: "error",
              },
              { inputs: [], name: "Overflow", type: "error" },
              {
                inputs: [
                  { internalType: "uint256", name: "poolId", type: "uint256" },
                ],
                name: "PoolDoesNotExist",
                type: "error",
              },
              { inputs: [], name: "PoolEnded", type: "error" },
              { inputs: [], name: "RewardAmountIsZero", type: "error" },
              { inputs: [], name: "RewardsInPast", type: "error" },
              {
                anonymous: !1,
                inputs: [
                  {
                    indexed: !0,
                    internalType: "address",
                    name: "user",
                    type: "address",
                  },
                  {
                    indexed: !1,
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                  },
                  {
                    indexed: !1,
                    internalType: "uint256",
                    name: "poolIndex",
                    type: "uint256",
                  },
                ],
                name: "Claim",
                type: "event",
              },
              {
                anonymous: !1,
                inputs: [
                  {
                    indexed: !0,
                    internalType: "address",
                    name: "user",
                    type: "address",
                  },
                  {
                    indexed: !1,
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                  },
                  {
                    indexed: !1,
                    internalType: "uint256",
                    name: "poolIndex",
                    type: "uint256",
                  },
                ],
                name: "Deposit",
                type: "event",
              },
              {
                anonymous: !1,
                inputs: [
                  {
                    indexed: !0,
                    internalType: "address",
                    name: "user",
                    type: "address",
                  },
                  {
                    indexed: !1,
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                  },
                  {
                    indexed: !1,
                    internalType: "uint256",
                    name: "poolIndex",
                    type: "uint256",
                  },
                ],
                name: "Withdraw",
                type: "event",
              },
              {
                inputs: [
                  { internalType: "uint256", name: "poolId", type: "uint256" },
                ],
                name: "claimReward",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
              },
              {
                inputs: [
                  { internalType: "uint256", name: "_amount", type: "uint256" },
                  { internalType: "uint256", name: "poolId", type: "uint256" },
                ],
                name: "deposit",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
              },
              {
                inputs: [],
                name: "getPools",
                outputs: [
                  {
                    components: [
                      {
                        internalType: "contract IERC20Upgradeable",
                        name: "stakingToken",
                        type: "address",
                      },
                      {
                        internalType: "contract IERC20Upgradeable",
                        name: "rewardToken",
                        type: "address",
                      },
                      {
                        internalType: "uint256",
                        name: "lastRewardTimestamp",
                        type: "uint256",
                      },
                      {
                        internalType: "uint256",
                        name: "accTokenPerShare",
                        type: "uint256",
                      },
                      {
                        internalType: "uint256",
                        name: "startTime",
                        type: "uint256",
                      },
                      {
                        internalType: "uint256",
                        name: "endTime",
                        type: "uint256",
                      },
                      {
                        internalType: "uint256",
                        name: "precision",
                        type: "uint256",
                      },
                      {
                        internalType: "uint256",
                        name: "totalStaked",
                        type: "uint256",
                      },
                      {
                        internalType: "uint256",
                        name: "totalReward",
                        type: "uint256",
                      },
                      {
                        internalType: "address",
                        name: "owner",
                        type: "address",
                      },
                    ],
                    internalType: "struct StakingPool.PoolInfo[]",
                    name: "",
                    type: "tuple[]",
                  },
                ],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [
                  { internalType: "address", name: "user", type: "address" },
                  { internalType: "uint256", name: "poolId", type: "uint256" },
                ],
                name: "getUserInfo",
                outputs: [
                  {
                    components: [
                      {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                      },
                      {
                        internalType: "uint256",
                        name: "rewardDebt",
                        type: "uint256",
                      },
                    ],
                    internalType: "struct StakingPool.UserInfo",
                    name: "",
                    type: "tuple",
                  },
                ],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [
                  { internalType: "address", name: "_user", type: "address" },
                  { internalType: "uint256", name: "poolId", type: "uint256" },
                ],
                name: "pendingReward",
                outputs: [
                  { internalType: "uint256", name: "", type: "uint256" },
                ],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [
                  { internalType: "uint256", name: "", type: "uint256" },
                ],
                name: "poolInfo",
                outputs: [
                  {
                    internalType: "contract IERC20Upgradeable",
                    name: "stakingToken",
                    type: "address",
                  },
                  {
                    internalType: "contract IERC20Upgradeable",
                    name: "rewardToken",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "lastRewardTimestamp",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "accTokenPerShare",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "startTime",
                    type: "uint256",
                  },
                  { internalType: "uint256", name: "endTime", type: "uint256" },
                  {
                    internalType: "uint256",
                    name: "precision",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "totalStaked",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "totalReward",
                    type: "uint256",
                  },
                  { internalType: "address", name: "owner", type: "address" },
                ],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [
                  { internalType: "address", name: "", type: "address" },
                  { internalType: "uint256", name: "", type: "uint256" },
                ],
                name: "userInfo",
                outputs: [
                  { internalType: "uint256", name: "amount", type: "uint256" },
                  {
                    internalType: "uint256",
                    name: "rewardDebt",
                    type: "uint256",
                  },
                ],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [
                  { internalType: "uint256", name: "_amount", type: "uint256" },
                  { internalType: "uint256", name: "poolId", type: "uint256" },
                ],
                name: "withdraw",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
              },
            ],
          });
          console.log("contract: ", {
            client: o.Lp,
            address: t.tfAddress,
            chain: t.chainTW,
          });
          let { data: a, isLoading: r } = (0, d.u)({
              contract: i,
              method:
                "function poolInfo(uint256) view returns (address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address)",
              params: [e],
            }),
            { data: s, isLoading: u } = (0, d.u)({
              contract: i,
              method:
                "function pendingReward(address,uint256) view returns (uint256)",
              params: [n, e],
            }),
            { data: p, isLoading: c } = (0, d.u)({
              contract: i,
              method:
                "function userInfo(address,uint256) view returns (uint256, uint256)",
              params: [n, e],
            }),
            m = null;
          if (a) {
            m = {
              rewardToken: a[1],
              stakingToken: a[0],
              totalReward: a[8],
              totalStaked: a[7],
              id: e,
            };
            let t = a[6],
              n = Number(t);
            m.pendingRewards = Number(null != s ? s : BigInt(0)) / n;
            let i = new Date();
            i.setTime(1e3 * Number(a[4]));
            let r = new Date();
            r.setTime(1e3 * Number(a[5])),
              (m.startTimeObj = i),
              (m.endTimeObj = r),
              (m.yourStake = Math.floor((Number(p[0]) / 1e18) * 1e4) / 1e4),
              (m.yourStake2 = Math.floor((Number(p[0]) / 1e18) * 1e4) / 1e4),
              (m.running = !1),
              new Date() < m.endTimeObj && (m.running = !0),
              (m.yourReward =
                Math.floor(1e4 * Number(m.totalReward / t)) / 1e4 + ""),
              (m.totalRewardStr =
                Math.floor(1e4 * Number(m.totalReward / t)) / 1e4 + ""),
              (m.totalStakedStr =
                Math.floor(1e4 * Number(m.totalStaked / t)) / 1e4 + ""),
              (m.apy =
                Math.round(
                  (Number(m.totalReward) / Number(m.totalStaked)) * 12e6
                ) /
                  1e4 +
                "%");
          }
          return m;
        },
        p = n(20967),
        c = n(67990),
        m = n(19778),
        y = n(68938),
        h = n(64859),
        x = n(22757),
        g = n(66205),
        f = n(54346),
        b = n(93717),
        w = n(71293),
        T = n(93108),
        j = n(14253),
        F = n(57747),
        k = n(10991),
        v = n(99840),
        S = n(80510),
        I = n(4693),
        R = n(15115),
        C = n(64698),
        A = n(67294),
        W = n(41872),
        _ = n(21690),
        z = n(22700),
        B = n(49364),
        E = n(43684),
        N = n(45458),
        M = n(98445),
        L = n(31330),
        P = n(65258),
        D = n(92880),
        O = n(32279),
        U = n(84530),
        Z = n(46044),
        H = n(68817);
      let $ = [
          { inputs: [], name: "AmountIsZero", type: "error" },
          { inputs: [], name: "CannotStopRewards", type: "error" },
          {
            inputs: [
              { internalType: "uint256", name: "timeLeft", type: "uint256" },
            ],
            name: "InsufficientRemainingTime",
            type: "error",
          },
          { inputs: [], name: "InsufficientTransferredAmount", type: "error" },
          { inputs: [], name: "InvalidPrecision", type: "error" },
          {
            inputs: [
              { internalType: "uint256", name: "totalStaked", type: "uint256" },
              { internalType: "uint256", name: "stakeLimit", type: "uint256" },
            ],
            name: "InvalidStakeLimit",
            type: "error",
          },
          { inputs: [], name: "InvalidStartAndEndDates", type: "error" },
          {
            inputs: [
              { internalType: "uint256", name: "stakeLimit", type: "uint256" },
            ],
            name: "MaximumStakeAmountReached",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "NotPoolOwner",
            type: "error",
          },
          { inputs: [], name: "Overflow", type: "error" },
          {
            inputs: [
              { internalType: "uint256", name: "poolId", type: "uint256" },
            ],
            name: "PoolDoesNotExist",
            type: "error",
          },
          { inputs: [], name: "PoolEnded", type: "error" },
          { inputs: [], name: "RewardAmountIsZero", type: "error" },
          { inputs: [], name: "RewardsInPast", type: "error" },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "user",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "poolIndex",
                type: "uint256",
              },
            ],
            name: "Claim",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "user",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "poolIndex",
                type: "uint256",
              },
            ],
            name: "Deposit",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "user",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "poolIndex",
                type: "uint256",
              },
            ],
            name: "Withdraw",
            type: "event",
          },
          {
            inputs: [
              { internalType: "uint256", name: "poolId", type: "uint256" },
            ],
            name: "claimReward",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_amount", type: "uint256" },
              { internalType: "uint256", name: "poolId", type: "uint256" },
            ],
            name: "deposit",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "getPools",
            outputs: [
              {
                components: [
                  {
                    internalType: "contract IERC20Upgradeable",
                    name: "stakingToken",
                    type: "address",
                  },
                  {
                    internalType: "contract IERC20Upgradeable",
                    name: "rewardToken",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "lastRewardTimestamp",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "accTokenPerShare",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "startTime",
                    type: "uint256",
                  },
                  { internalType: "uint256", name: "endTime", type: "uint256" },
                  {
                    internalType: "uint256",
                    name: "precision",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "totalStaked",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "totalReward",
                    type: "uint256",
                  },
                  { internalType: "address", name: "owner", type: "address" },
                ],
                internalType: "struct StakingPool.PoolInfo[]",
                name: "",
                type: "tuple[]",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "user", type: "address" },
              { internalType: "uint256", name: "poolId", type: "uint256" },
            ],
            name: "getUserInfo",
            outputs: [
              {
                components: [
                  { internalType: "uint256", name: "amount", type: "uint256" },
                  {
                    internalType: "uint256",
                    name: "rewardDebt",
                    type: "uint256",
                  },
                ],
                internalType: "struct StakingPool.UserInfo",
                name: "",
                type: "tuple",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_user", type: "address" },
              { internalType: "uint256", name: "poolId", type: "uint256" },
            ],
            name: "pendingReward",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            name: "poolInfo",
            outputs: [
              {
                internalType: "contract IERC20Upgradeable",
                name: "stakingToken",
                type: "address",
              },
              {
                internalType: "contract IERC20Upgradeable",
                name: "rewardToken",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "lastRewardTimestamp",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "accTokenPerShare",
                type: "uint256",
              },
              { internalType: "uint256", name: "startTime", type: "uint256" },
              { internalType: "uint256", name: "endTime", type: "uint256" },
              { internalType: "uint256", name: "precision", type: "uint256" },
              { internalType: "uint256", name: "totalStaked", type: "uint256" },
              { internalType: "uint256", name: "totalReward", type: "uint256" },
              { internalType: "address", name: "owner", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "", type: "address" },
              { internalType: "uint256", name: "", type: "uint256" },
            ],
            name: "userInfo",
            outputs: [
              { internalType: "uint256", name: "amount", type: "uint256" },
              { internalType: "uint256", name: "rewardDebt", type: "uint256" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_amount", type: "uint256" },
              { internalType: "uint256", name: "poolId", type: "uint256" },
            ],
            name: "withdraw",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        X = [
          {
            name: "Ethereum",
            chain: "ethereum",
            chainTW: z.t,
            chainId: 1,
            tfAddress: "0xd6A07b8065f9e8386A9a5bBA6A754a10A9CD1074",
            tokenAddress: "0xCF078DA6e85389de507ceeDE0E3d217e457B9d49",
            explorerUrl: "https://etherscan.io/tx/",
          },
          {
            name: "Base",
            chain: "base",
            chainTW: B.u,
            chainId: 8453,
            tfAddress: "0x9e9ce71871ac9C4Fa96Df5B9A474E7a52E4040e6",
            tokenAddress: "0xE7399151B688A265F347693d358821a5A8c213Ec",
            explorerUrl: "https://basescan.org/tx/",
          },
        ],
        G = [
          { value: "ethereum", label: "Ethereum" },
          { value: "base", label: "Base" },
        ],
        Y = {
          ethereum: [113, 128, 129, 144, 150],
          base: [103, 111, 112, 134, 143],
        },
        q = {
          id: 123,
          startTime: "Aug. 01 2024 01:00 AM",
          endTime: "Aug. 31 2024 01:00 AM",
          totalRewards: "600,000",
          apy: "128.824%",
          yourStake: "26,064",
          yourRewards: "2,643",
          address: "",
        },
        K = () => {
          {
            let e = window.location.protocol,
              t = window.location.host;
            return "".concat(e, "//").concat(t);
          }
        },
        Q = (e) => {
          let {
              poolId: t,
              activeChain: n,
              address: a,
              onWithdraw: r,
              onStakeMore: o,
              isMobile: s = !1,
            } = e,
            l = u(BigInt(t), n, a);
          return (console.log("getting pool: ", t, l),
          !l ||
            (l.endTimeObj &&
              l.endTimeObj.getTime() < new Date().getTime() &&
              0 === l.yourStake))
            ? null
            : s
            ? (0, i.jsxs)(
                b.k,
                {
                  gap: "12px",
                  p: "12px",
                  flexDir: "column",
                  borderRadius: "16px",
                  width: "328px",
                  backdropFilter: "blur(50px)",
                  border: "1px solid #F5F7FA0F",
                  background:
                    "linear-gradient(135deg, rgba(245, 247, 250, 0.06) 0%, rgba(245, 247, 250, 0.0001) 100%)",
                  children: [
                    (0, i.jsxs)(b.k, {
                      justifyContent: "space-between",
                      alignItems: "center",
                      children: [
                        (0, i.jsx)(w.x, {
                          color: "#FFFFFF99",
                          fontSize: "xs",
                          fontWeight: "400",
                          children: "Start Time:",
                        }),
                        (0, i.jsx)(w.x, {
                          color: "white",
                          fontSize: "xs",
                          fontWeight: "400",
                          children: l.startTimeObj.toLocaleDateString(),
                        }),
                      ],
                    }),
                    (0, i.jsxs)(b.k, {
                      justifyContent: "space-between",
                      alignItems: "center",
                      children: [
                        (0, i.jsx)(w.x, {
                          color: "#FFFFFF99",
                          fontSize: "xs",
                          fontWeight: "400",
                          children: "End Time:",
                        }),
                        (0, i.jsx)(w.x, {
                          color: "white",
                          fontSize: "xs",
                          fontWeight: "400",
                          children: l.endTimeObj.toLocaleDateString(),
                        }),
                      ],
                    }),
                    (0, i.jsxs)(b.k, {
                      justifyContent: "space-between",
                      alignItems: "center",
                      children: [
                        (0, i.jsx)(w.x, {
                          color: "#FFFFFF99",
                          fontSize: "xs",
                          fontWeight: "400",
                          children: "Total Rewards:",
                        }),
                        (0, i.jsx)(w.x, {
                          color: "white",
                          fontSize: "xs",
                          fontWeight: "400",
                          children: l.totalRewardStr,
                        }),
                      ],
                    }),
                    (0, i.jsxs)(b.k, {
                      justifyContent: "space-between",
                      alignItems: "center",
                      children: [
                        (0, i.jsx)(w.x, {
                          color: "#FFFFFF99",
                          fontSize: "xs",
                          fontWeight: "400",
                          children: "APY:",
                        }),
                        (0, i.jsx)(w.x, {
                          color: "white",
                          fontSize: "xs",
                          fontWeight: "400",
                          children: l.apy,
                        }),
                      ],
                    }),
                    (0, i.jsxs)(b.k, {
                      justifyContent: "space-between",
                      alignItems: "center",
                      children: [
                        (0, i.jsx)(w.x, {
                          color: "#FFFFFF99",
                          fontSize: "xs",
                          fontWeight: "400",
                          children: "Your Stake:",
                        }),
                        (0, i.jsx)(w.x, {
                          color: "white",
                          fontSize: "xs",
                          fontWeight: "400",
                          children: l.yourStake,
                        }),
                      ],
                    }),
                    (0, i.jsxs)(b.k, {
                      justifyContent: "space-between",
                      alignItems: "center",
                      children: [
                        (0, i.jsx)(w.x, {
                          color: "#FFFFFF99",
                          fontSize: "xs",
                          fontWeight: "400",
                          children: "Your Rewards:",
                        }),
                        (0, i.jsx)(w.x, {
                          color: "white",
                          fontSize: "xs",
                          fontWeight: "400",
                          children: l.pendingRewards,
                        }),
                      ],
                    }),
                    (0, i.jsxs)(b.k, {
                      justifyContent: "space-between",
                      alignItems: "center",
                      children: [
                        (0, i.jsx)(T.z, {
                          disabled: 0 === l.pendingRewards,
                          className: "main-gradient-bg",
                          width: "50%",
                          color: "white",
                          onClick: () => r(l),
                          children: "Withdraw",
                        }),
                        (0, i.jsx)(w.x, {
                          textDecor: "none",
                          className: "main-gradient",
                          fontSize: "sm",
                          cursor: "pointer",
                          width: "50%",
                          textAlign: "center",
                          onClick: () => o(l),
                          children: "Stake more",
                        }),
                      ],
                    }),
                  ],
                },
                t
              )
            : (0, i.jsxs)(
                S.Tr,
                {
                  children: [
                    (0, i.jsx)(C.Td, {
                      p: "0px, 12px, 0px, 12px",
                      textAlign: "center",
                      fontSize: "xs",
                      fontWeight: "400",
                      borderBottom: "none",
                      color: "#FFFFFF99",
                      children: l.startTimeObj.toLocaleDateString(),
                    }),
                    (0, i.jsx)(C.Td, {
                      p: "0px, 12px, 0px, 12px",
                      textAlign: "center",
                      fontSize: "xs",
                      fontWeight: "400",
                      borderBottom: "none",
                      color: "#FFFFFF99",
                      children: l.endTimeObj.toLocaleDateString(),
                    }),
                    (0, i.jsx)(C.Td, {
                      p: "0px, 12px, 0px, 12px",
                      textAlign: "center",
                      fontSize: "xs",
                      fontWeight: "400",
                      borderBottom: "none",
                      color: "#FFFFFF99",
                      children: l.totalRewardStr,
                    }),
                    (0, i.jsx)(C.Td, {
                      p: "0px, 12px, 0px, 12px",
                      textAlign: "center",
                      fontSize: "xs",
                      fontWeight: "400",
                      borderBottom: "none",
                      color: "#FFFFFF99",
                      children: l.apy,
                    }),
                    (0, i.jsx)(C.Td, {
                      p: "0px, 12px, 0px, 12px",
                      textAlign: "center",
                      fontSize: "xs",
                      fontWeight: "400",
                      borderBottom: "none",
                      color: "#FFFFFF99",
                      children: l.yourStake,
                    }),
                    (0, i.jsx)(C.Td, {
                      p: "0px, 12px, 0px, 12px",
                      textAlign: "center",
                      fontSize: "xs",
                      fontWeight: "400",
                      borderBottom: "none",
                      color: "#FFFFFF99",
                      children: l.pendingRewards,
                    }),
                    (0, i.jsxs)(C.Td, {
                      p: "0px, 12px, 0px, 12px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "xs",
                      fontWeight: "400",
                      borderBottom: "none",
                      gap: "15px",
                      children: [
                        (0, i.jsx)(w.x, {
                          textDecor: "none",
                          className: "main-gradient",
                          fontSize: "sm",
                          cursor: "pointer",
                          onClick: () => o(l),
                          children: "Stake more",
                        }),
                        (0, i.jsx)(T.z, {
                          disabled: 0 === l.pendingRewards,
                          onClick: () => r(l),
                          className: "main-gradient-bg",
                          color: "white",
                          size: "sm",
                          children: "Withdraw",
                        }),
                      ],
                    }),
                  ],
                },
                t
              );
        };
      var J = () => {
        var e, t;
        let n = (0, L.M)(),
          u = (0, P.r)(),
          C = (0, D.v)(),
          z = (0, O.l)(),
          { isOpen: B, onOpen: J, onClose: V } = (0, p.q)(),
          { isOpen: ee, onOpen: et, onClose: en } = (0, p.q)(),
          { isOpen: ei, onOpen: ea, onClose: er } = (0, p.q)(),
          eo = (0, A.useContext)(s.Z),
          [es, el] = (0, A.useState)("ethereum"),
          [ed, eu] = (0, A.useState)(X[0]),
          [ep, ec] = (0, A.useState)(q),
          [em, ey] = (0, A.useState)(0),
          [eh, ex] = (0, A.useState)(0),
          [eg, ef] = (0, A.useState)(0),
          [eb, ew] = (0, A.useState)([]),
          eT = (0, l.u)({
            client: o.Lp,
            address: ed.tokenAddress,
            chain: ed.chainTW,
          }),
          ej = (0, l.u)({
            client: o.Lp,
            address: ed.tfAddress,
            chain: ed.chainTW,
            abi: $,
          }),
          { data: eF, isLoading: ek } = (0, d.u)(E.jA, {
            contract: eT,
            address:
              null !== (e = null == n ? void 0 : n.address) && void 0 !== e
                ? e
                : "",
          }),
          { data: ev, isLoading: eS } = (0, d.u)(N.M1, {
            contract: eT,
            owner:
              null !== (t = null == n ? void 0 : n.address) && void 0 !== t
                ? t
                : "",
            spender: ed.tfAddress,
          }),
          { mutate: eI, isPending: eR, data: eC } = (0, U.p)(),
          [eA, eW] = (0, A.useState)(!1),
          [e_, ez] = (0, A.useState)(""),
          [eB, eE] = (0, A.useState)(""),
          eN = K();
        (0, A.useEffect)(() => {
          (async () => {
            var e, t;
            if (
              !(await o.I8.isLoggedIn(
                null !== (e = null == n ? void 0 : n.address) && void 0 !== e
                  ? e
                  : ""
              ))
            )
              return;
            let i =
                null !== (t = null == C ? void 0 : C.id) && void 0 !== t
                  ? t
                  : 0,
              a = !1;
            for (let e of X)
              if (e.chainId === i) {
                (a = !0), eu(e), el(e.chain);
                break;
              }
            a || (await eM("ethereum"));
          })();
        }, [o.I8, u]),
          (0, A.useEffect)(() => {
            (async () => {
              var e;
              (await o.I8.isLoggedIn(
                null !== (e = null == n ? void 0 : n.address) && void 0 !== e
                  ? e
                  : ""
              )) &&
                (null == n ? void 0 : n.address) &&
                ew(Y[ed.chain]);
            })();
          }, [o.I8, n, ed]),
          (0, A.useEffect)(() => {
            if (ep && void 0 !== N.M1) {
              let e = BigInt(1e18 * em),
                t = 0;
              (t = e > (null != ev ? ev : BigInt(0)) ? Number(e) : 0) !== eg &&
                ef(t);
            }
          }, [em, N.M1, ep]);
        let eM = async (e) => {
            let t = X.find((t) => t.chain === e);
            t && (eu(t), el(e), await z(t.chainTW));
          },
          eL = (e) => {
            (async () => {
              var t;
              (await o.I8.isLoggedIn(
                null !== (t = null == n ? void 0 : n.address) && void 0 !== t
                  ? t
                  : ""
              ))
                ? (ec(e), ex(0), et())
                : ea();
            })();
          },
          eP = (e) => {
            (async () => {
              var t;
              if (
                await o.I8.isLoggedIn(
                  null !== (t = null == n ? void 0 : n.address) && void 0 !== t
                    ? t
                    : ""
                )
              ) {
                if (!1 === e.running) {
                  alert("Pool not active anymore.");
                  return;
                }
                ec(e), J();
              } else ea();
            })();
          },
          eD = async () => {
            if (eg > 0) {
              let e = BigInt(eg);
              try {
                eW(!0);
                let t = (0, M.d)({
                  contract: eT,
                  spender: ed.tfAddress,
                  amountWei: e,
                });
                eI(t, {
                  onSuccess(e, t, n) {
                    console.log("success: ", e, t),
                      ez(e.transactionHash),
                      eE(ed.explorerUrl + e.transactionHash),
                      (async () => {
                        await (0, W.h)({
                          client: o.Lp,
                          chain: ed.chainTW,
                          transactionHash: e.transactionHash,
                          maxBlocksWaitTime: 20,
                        }),
                          eW(!1),
                          ef(0),
                          ez(""),
                          eE("");
                      })();
                  },
                  onError(e) {
                    eW(!1);
                  },
                  onSettled(e, t, n, i) {
                    (null == e ? void 0 : e.transactionHash) || eW(!1);
                  },
                });
              } catch (e) {
                console.error("approving error:", e), eW(!1);
              }
            }
          },
          eO = async () => {
            let e = null != eF ? eF : BigInt(0),
              t = BigInt(1e18 * em);
            if (t <= e)
              try {
                eW(!0);
                let e = (0, _.A)({
                  contract: ej,
                  method: "function deposit(uint256 _amount, uint256 poolId)",
                  params: [t, BigInt(ep.id)],
                });
                eI(e, {
                  onSuccess(e, t, n) {
                    console.log("success: ", e, t),
                      ez(e.transactionHash),
                      eE(ed.explorerUrl + e.transactionHash),
                      (async () => {
                        await (0, W.h)({
                          client: o.Lp,
                          chain: ed.chainTW,
                          transactionHash: e.transactionHash,
                          maxBlocksWaitTime: 20,
                        }),
                          eW(!1),
                          V(),
                          ey(0),
                          ez(""),
                          eE("");
                      })();
                  },
                  onError(e) {
                    eW(!1);
                  },
                  onSettled(e, t, n, i) {
                    eW(!1);
                  },
                });
              } catch (e) {
                console.error("Staking error:", e);
              }
          },
          eU = async () => {
            let e = parseFloat(ep.yourStake || "0");
            if (eh > 0 && eh <= e) {
              let e = BigInt(1e18 * eh);
              try {
                eW(!0);
                let t = (0, _.A)({
                  contract: ej,
                  method: "function withdraw(uint256 _amount, uint256 poolId)",
                  params: [e, BigInt(ep.id)],
                });
                eI(t, {
                  onSuccess(e, t, n) {
                    console.log("success: ", e, t),
                      ez(e.transactionHash),
                      eE(ed.explorerUrl + e.transactionHash),
                      (async () => {
                        await (0, W.h)({
                          client: o.Lp,
                          chain: ed.chainTW,
                          transactionHash: e.transactionHash,
                          maxBlocksWaitTime: 20,
                        }),
                          eW(!1),
                          en(),
                          ez(""),
                          eE("");
                      })();
                  },
                  onError(e) {},
                  onSettled(e, t, n, i) {},
                });
              } catch (e) {
                console.error("Withdrawing error:", e), eW(!1);
              }
            }
          };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)(c.u_, {
              isOpen: ei,
              onClose: er,
              size: "md",
              isCentered: !0,
              children: [
                (0, i.jsx)(m.Z, { bg: "#000000E0" }),
                (0, i.jsxs)(y.h, {
                  color: "white",
                  backdropFilter: "blur(50px)",
                  bg: "linear-gradient(135deg, rgba(245, 247, 250, 0.06) 0%, rgba(245, 247, 250, 0.0001) 100%)",
                  borderRadius: "24px",
                  padding: "12px",
                  children: [
                    (0, i.jsx)(h.x, {
                      children: (0, i.jsx)(x.X, {
                        fontSize: "24px",
                        children: "Login with your wallet to stake/unstake",
                      }),
                    }),
                    (0, i.jsx)(g.o, {}),
                    (0, i.jsx)(f.f, {
                      children: (0, i.jsx)(Z.B, {
                        client: o.Lp,
                        showThirdwebBranding: !1,
                        privacyPolicyUrl: "".concat(eN, "/privacy-policy"),
                        termsOfServiceUrl: "".concat(
                          eN,
                          "/terms-and-conditions"
                        ),
                        theme: (0, H.$_)({
                          colors: {
                            accentText: "#FF2091",
                            accentButtonBg: "#FF2091",
                          },
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, i.jsxs)(c.u_, {
              isOpen: B,
              onClose: V,
              size: "md",
              isCentered: !0,
              children: [
                (0, i.jsx)(m.Z, { bg: "#000000E0" }),
                (0, i.jsxs)(y.h, {
                  color: "white",
                  backdropFilter: "blur(50px)",
                  bg: "linear-gradient(135deg, rgba(245, 247, 250, 0.06) 0%, rgba(245, 247, 250, 0.0001) 100%)",
                  borderRadius: "24px",
                  padding: "12px",
                  children: [
                    (0, i.jsx)(h.x, {
                      children: (0, i.jsx)(x.X, {
                        fontSize: "24px",
                        children: "Stake $SKAI",
                      }),
                    }),
                    (0, i.jsx)(g.o, {}),
                    (0, i.jsx)(f.f, {
                      children: (0, i.jsxs)(b.k, {
                        gap: "20px",
                        flexDir: "column",
                        children: [
                          (0, i.jsx)(w.x, {
                            children:
                              "Enter the amount of tokens you want to add to this staking pool.",
                          }),
                          (0, i.jsxs)(w.x, {
                            children: [
                              (0, i.jsx)("strong", {
                                children: "Staked Amount: ",
                              }),
                              " ",
                              ep.yourStake,
                            ],
                          }),
                          (0, i.jsx)(r.Z, {
                            onChange: (e) => {
                              let t = parseFloat(e.target.value) || 0,
                                n = BigInt(1e18 * t),
                                i = BigInt(null != eF ? eF : BigInt(0)),
                                a = Number(i / BigInt(1)) / 1e18;
                              n > i ? ey(a) : ey(t);
                            },
                            id: "stakingAmount",
                            width: "100%",
                            placeholder: "Enter amount to stake",
                            value: "" + em,
                            type: "number",
                          }),
                          (0, i.jsxs)(b.k, {
                            justifyContent: "space-between",
                            alignItems: "center",
                            children: [
                              (0, i.jsxs)(w.x, {
                                children: [
                                  "Available: ",
                                  "" +
                                    (
                                      Number(null != eF ? eF : BigInt(0)) / 1e18
                                    ).toFixed(6),
                                ],
                              }),
                              (0, i.jsx)(T.z, {
                                color: "white",
                                className: "main-gradient-bg",
                                onClick: () =>
                                  ey(
                                    Number(null != eF ? eF : BigInt(0)) / 1e18
                                  ),
                                children: "Max",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, i.jsxs)(j.m, {
                      children: [
                        eg > 0 &&
                          em > 0 &&
                          (0, i.jsx)(T.z, {
                            color: "white",
                            w: "100%",
                            className: "main-gradient-bg",
                            disabled: eA,
                            onClick: eD,
                            children: eA
                              ? (0, i.jsx)(i.Fragment, {
                                  children: "Waiting...",
                                })
                              : (0, i.jsx)(i.Fragment, { children: "Approve" }),
                          }),
                        !(eg > 0) &&
                          em > 0 &&
                          (0, i.jsx)(T.z, {
                            color: "white",
                            w: "100%",
                            className: "main-gradient-bg",
                            disabled: eA,
                            onClick: eO,
                            children: eA
                              ? (0, i.jsx)(i.Fragment, {
                                  children: "Waiting...",
                                })
                              : (0, i.jsx)(i.Fragment, { children: "Stake" }),
                          }),
                        0 === em &&
                          (0, i.jsx)(T.z, {
                            opacity: "0.5",
                            color: "white",
                            className: "main-gradient-bg",
                            disabled: !0,
                            w: "100%",
                            onClick: () => {},
                            children: "Stake",
                          }),
                        "" !== e_
                          ? (0, i.jsx)(i.Fragment, {
                              children: (0, i.jsx)(F.xu, {
                                overflowX: "auto",
                                maxHeight: "85%",
                                backdropFilter: "blur(50px)",
                                borderRadius: "24px",
                                padding: "24px",
                                background:
                                  "linear-gradient(135deg, rgba(245, 247, 250, 0.06) 0%, rgba(245, 247, 250, 0.0001) 100%)",
                                children: (0, i.jsx)("a", {
                                  href: eB,
                                  target: "_blank",
                                  children: "See in explorer",
                                }),
                              }),
                            })
                          : (0, i.jsx)(i.Fragment, {}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, i.jsxs)(c.u_, {
              isOpen: ee,
              onClose: en,
              size: "sm",
              isCentered: !0,
              children: [
                (0, i.jsx)(m.Z, { bg: "#000000E0" }),
                (0, i.jsxs)(y.h, {
                  color: "white",
                  backdropFilter: "blur(50px)",
                  bg: "linear-gradient(135deg, rgba(245, 247, 250, 0.06) 0%, rgba(245, 247, 250, 0.0001) 100%)",
                  borderRadius: "24px",
                  padding: "12px",
                  children: [
                    (0, i.jsx)(h.x, {
                      children: (0, i.jsx)(x.X, {
                        fontSize: "24px",
                        children: "Withdraw $SKAI",
                      }),
                    }),
                    (0, i.jsx)(g.o, {}),
                    (0, i.jsx)(f.f, {
                      children: (0, i.jsxs)(b.k, {
                        gap: "20px",
                        flexDir: "column",
                        children: [
                          (0, i.jsx)(w.x, {
                            children:
                              "Enter the amount of tokens you want to unstake. The tokens will be returned to the same wallet address you used to send tokens to the pool.",
                          }),
                          (0, i.jsxs)(w.x, {
                            children: [
                              (0, i.jsx)("strong", {
                                children: "Staked Amount: ",
                              }),
                              " ",
                              ep.yourStake,
                            ],
                          }),
                          (0, i.jsx)(r.Z, {
                            onChange: (e) => {
                              let t = parseFloat(e.target.value) || 0,
                                n = parseFloat(ep.yourStake || "0");
                              ex(t > n ? n : t);
                            },
                            id: "withdrawAmount",
                            width: "100%",
                            placeholder: "Enter amount to withdraw",
                            value: "" + eh,
                            type: "number",
                          }),
                          (0, i.jsxs)(b.k, {
                            justifyContent: "space-between",
                            alignItems: "center",
                            children: [
                              (0, i.jsxs)(w.x, {
                                children: ["Available: ", ep.yourStake],
                              }),
                              (0, i.jsx)(T.z, {
                                color: "white",
                                className: "main-gradient-bg",
                                onClick: () =>
                                  ex(parseFloat(ep.yourStake || "0")),
                                children: "Max",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, i.jsxs)(j.m, {
                      children: [
                        eh > 0
                          ? (0, i.jsx)(T.z, {
                              color: "white",
                              w: "100%",
                              className: "main-gradient-bg",
                              disabled: eA,
                              onClick: eU,
                              children: eA
                                ? (0, i.jsx)(i.Fragment, {
                                    children: "Waiting...",
                                  })
                                : (0, i.jsx)(i.Fragment, {
                                    children: "Withdraw",
                                  }),
                            })
                          : (0, i.jsx)(T.z, {
                              opacity: "0.5",
                              className: "main-gradient-bg",
                              color: "white",
                              w: "100%",
                              disabled: !0,
                              onClick: () => {},
                              children: "Withdraw",
                            }),
                        "" !== e_
                          ? (0, i.jsx)(i.Fragment, {
                              children: (0, i.jsx)(F.xu, {
                                overflowX: "auto",
                                maxHeight: "85%",
                                backdropFilter: "blur(50px)",
                                borderRadius: "24px",
                                padding: "24px",
                                background:
                                  "linear-gradient(135deg, rgba(245, 247, 250, 0.06) 0%, rgba(245, 247, 250, 0.0001) 100%)",
                                children: (0, i.jsx)("a", {
                                  href: eB,
                                  target: "_blank",
                                  children: "See in explorer",
                                }),
                              }),
                            })
                          : (0, i.jsx)(i.Fragment, {}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, i.jsxs)(b.k, {
              gap: "16px",
              flexDir: "column",
              height: "100%",
              children: [
                (0, i.jsxs)(b.k, {
                  justifyContent: "space-between",
                  gap: "10px",
                  alignItems: "center",
                  w: "100%",
                  flexDir: (null == eo ? void 0 : eo.isMobile)
                    ? "column"
                    : "row",
                  children: [
                    (0, i.jsx)(w.x, {
                      fontSize: "2xl",
                      fontWeight: "600",
                      color: "white",
                      children: "Stake $SKAI for Rewards",
                    }),
                    (0, i.jsx)(a.Z, {
                      matchWidth: null == eo ? void 0 : eo.isMobile,
                      width: "300px",
                      placeholder: "Blockchain",
                      options: G,
                      value: es,
                      onSelect: (e) => {
                        el(e.value), eM(e.value);
                      },
                    }),
                  ],
                }),
                (null == eo ? void 0 : eo.isMobile)
                  ? (0, i.jsx)(b.k, {
                      flexWrap: "wrap",
                      gap: "8px",
                      overflowY: "auto",
                      justifyContent: "center",
                      children: eb.map((e, t) =>
                        (0, i.jsx)(
                          Q,
                          {
                            poolId: e,
                            activeChain: ed,
                            address: n.address,
                            onWithdraw: eL,
                            onStakeMore: eP,
                            isMobile: !0,
                          },
                          t
                        )
                      ),
                    })
                  : (0, i.jsx)(F.xu, {
                      overflowX: "auto",
                      maxHeight: "85%",
                      backdropFilter: "blur(50px)",
                      borderRadius: "24px",
                      padding: "24px",
                      background:
                        "linear-gradient(135deg, rgba(245, 247, 250, 0.06) 0%, rgba(245, 247, 250, 0.0001) 100%)",
                      children: (0, i.jsxs)(k.i, {
                        variant: "simple",
                        borderRadius: "20px",
                        children: [
                          (0, i.jsx)(v.h, {
                            height: "44px",
                            padding: "12px",
                            bg: "#FFFFFF0A",
                            children: (0, i.jsxs)(S.Tr, {
                              children: [
                                (0, i.jsx)(I.Th, {
                                  borderTopLeftRadius: "24px",
                                  borderBottomLeftRadius: "24px",
                                  borderBottom: "none",
                                  fontSize: "sm",
                                  fontWeight: "400",
                                  color: "white",
                                  textAlign: "center",
                                  children: "Start time",
                                }),
                                (0, i.jsx)(I.Th, {
                                  textAlign: "center",
                                  borderBottom: "none",
                                  fontSize: "sm",
                                  fontWeight: "400",
                                  color: "white",
                                  children: "End time",
                                }),
                                (0, i.jsx)(I.Th, {
                                  textAlign: "center",
                                  borderBottom: "none",
                                  fontSize: "sm",
                                  fontWeight: "400",
                                  color: "white",
                                  children: "Total Rewards",
                                }),
                                (0, i.jsx)(I.Th, {
                                  textAlign: "center",
                                  borderBottom: "none",
                                  fontSize: "sm",
                                  fontWeight: "400",
                                  color: "white",
                                  children: "APY",
                                }),
                                (0, i.jsx)(I.Th, {
                                  textAlign: "center",
                                  borderBottom: "none",
                                  fontSize: "sm",
                                  fontWeight: "400",
                                  color: "white",
                                  children: "Your Stake",
                                }),
                                (0, i.jsx)(I.Th, {
                                  textAlign: "center",
                                  borderBottom: "none",
                                  fontSize: "sm",
                                  fontWeight: "400",
                                  color: "white",
                                  children: "Your Rewards",
                                }),
                                (0, i.jsx)(I.Th, {
                                  textAlign: "center",
                                  borderTopRightRadius: "24px",
                                  borderBottomRightRadius: "24px",
                                  borderBottom: "none",
                                  fontSize: "sm",
                                  fontWeight: "400",
                                  color: "white",
                                  children: "Functions",
                                }),
                              ],
                            }),
                          }),
                          (0, i.jsx)(R.p, {
                            children: eb.map((e, t) =>
                              (0, i.jsx)(
                                Q,
                                {
                                  poolId: e,
                                  activeChain: ed,
                                  address: n.address,
                                  onWithdraw: eL,
                                  onStakeMore: eP,
                                },
                                t
                              )
                            ),
                          }),
                        ],
                      }),
                    }),
              ],
            }),
          ],
        });
      };
    },
    6147: function (e, t, n) {
      "use strict";
      n.d(t, {
        v: function () {
          return i;
        },
      });
      var i = (0, n(24027).I)({
        displayName: "ChevronDownIcon",
        d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z",
      });
    },
    7116: function (e, t, n) {
      "use strict";
      n.d(t, {
        W: function () {
          return i;
        },
      });
      var i = (0, n(24027).I)({
        d: "M23.384,21.619,16.855,15.09a9.284,9.284,0,1,0-1.768,1.768l6.529,6.529a1.266,1.266,0,0,0,1.768,0A1.251,1.251,0,0,0,23.384,21.619ZM2.75,9.5a6.75,6.75,0,1,1,6.75,6.75A6.758,6.758,0,0,1,2.75,9.5Z",
        displayName: "SearchIcon",
      });
    },
    22757: function (e, t, n) {
      "use strict";
      n.d(t, {
        X: function () {
          return d;
        },
      });
      var i = n(16554),
        a = n(77030),
        r = n(33179),
        o = n(65548),
        s = n(25432),
        l = n(85893),
        d = (0, i.G)(function (e, t) {
          let n = (0, a.mq)("Heading", e),
            { className: i, ...d } = (0, r.Lr)(e);
          return (0,
          l.jsx)(o.m.h2, { ref: t, className: (0, s.cx)("chakra-heading", e.className), ...d, __css: n });
        });
      d.displayName = "Heading";
    },
    4040: function (e, t, n) {
      "use strict";
      n.d(t, {
        q: function () {
          return c;
        },
      });
      var i = n(66712),
        a = n(73579),
        r = n(25432),
        o = n(65548),
        s = n(16554),
        l = n(77672),
        d = n(85893),
        u = {
          enter: {
            visibility: "visible",
            opacity: 1,
            scale: 1,
            transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
          },
          exit: {
            transitionEnd: { visibility: "hidden" },
            opacity: 0,
            scale: 0.8,
            transition: { duration: 0.1, easings: "easeOut" },
          },
        },
        p = (0, o.m)(l.E.div),
        c = (0, s.G)(function (e, t) {
          var n, s;
          let { rootProps: l, motionProps: c, ...m } = e,
            {
              isOpen: y,
              onTransitionEnd: h,
              unstable__animationState: x,
            } = (0, a.Xh)(),
            g = (0, a._l)(m, t),
            f = (0, a.Qh)(l),
            b = (0, i.x)();
          return (0,
          d.jsx)(o.m.div, { ...f, __css: { zIndex: null != (s = e.zIndex) ? s : null == (n = b.list) ? void 0 : n.zIndex }, children: (0, d.jsx)(p, { variants: u, initial: !1, animate: y ? "enter" : "exit", __css: { outline: 0, ...b.list }, ...c, className: (0, r.cx)("chakra-menu__menu-list", g.className), ...g, onUpdate: h, onAnimationComplete: (0, r.PP)(x.onComplete, g.onAnimationComplete) }) });
        });
      c.displayName = "MenuList";
    },
    91170: function (e, t, n) {
      "use strict";
      n.d(t, {
        j: function () {
          return u;
        },
      });
      var i = n(66712),
        a = n(73579),
        r = n(16554),
        o = n(65548),
        s = n(25432),
        l = n(85893),
        d = (0, r.G)((e, t) => {
          let n = (0, i.x)();
          return (0, l.jsx)(o.m.button, {
            ref: t,
            ...e,
            __css: {
              display: "inline-flex",
              appearance: "none",
              alignItems: "center",
              outline: 0,
              ...n.button,
            },
          });
        }),
        u = (0, r.G)((e, t) => {
          let { children: n, as: i, ...r } = e,
            u = (0, a.zZ)(r, t),
            p = i || d;
          return (0, l.jsx)(p, {
            ...u,
            className: (0, s.cx)("chakra-menu__menu-button", e.className),
            children: (0, l.jsx)(o.m.span, {
              __css: { pointerEvents: "none", flex: "1 1 auto", minW: 0 },
              children: e.children,
            }),
          });
        });
      u.displayName = "MenuButton";
    },
    99840: function (e, t, n) {
      "use strict";
      n.d(t, {
        h: function () {
          return s;
        },
      });
      var i = n(10991),
        a = n(16554),
        r = n(65548),
        o = n(85893),
        s = (0, a.G)((e, t) => {
          let n = (0, i.p)();
          return (0, o.jsx)(r.m.thead, { ...e, ref: t, __css: n.thead });
        });
    },
    10991: function (e, t, n) {
      "use strict";
      n.d(t, {
        i: function () {
          return c;
        },
        p: function () {
          return p;
        },
      });
      var i = n(16554),
        a = n(77030),
        r = n(33179),
        o = n(65548),
        s = n(25432),
        l = n(55227),
        d = n(85893),
        [u, p] = (0, l.k)({
          name: "TableStylesContext",
          errorMessage:
            "useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Table />\" ",
        }),
        c = (0, i.G)((e, t) => {
          let n = (0, a.jC)("Table", e),
            { className: i, layout: l, ...p } = (0, r.Lr)(e);
          return (0, d.jsx)(u, {
            value: n,
            children: (0, d.jsx)(o.m.table, {
              ref: t,
              __css: { tableLayout: l, ...n.table },
              className: (0, s.cx)("chakra-table", i),
              ...p,
            }),
          });
        });
      c.displayName = "Table";
    },
    80510: function (e, t, n) {
      "use strict";
      n.d(t, {
        Tr: function () {
          return s;
        },
      });
      var i = n(10991),
        a = n(16554),
        r = n(65548),
        o = n(85893),
        s = (0, a.G)((e, t) => {
          let n = (0, i.p)();
          return (0, o.jsx)(r.m.tr, { ...e, ref: t, __css: n.tr });
        });
    },
    15115: function (e, t, n) {
      "use strict";
      n.d(t, {
        p: function () {
          return s;
        },
      });
      var i = n(10991),
        a = n(16554),
        r = n(65548),
        o = n(85893),
        s = (0, a.G)((e, t) => {
          let n = (0, i.p)();
          return (0, o.jsx)(r.m.tbody, { ...e, ref: t, __css: n.tbody });
        });
    },
    4693: function (e, t, n) {
      "use strict";
      n.d(t, {
        Th: function () {
          return s;
        },
      });
      var i = n(10991),
        a = n(16554),
        r = n(65548),
        o = n(85893),
        s = (0, a.G)(({ isNumeric: e, ...t }, n) => {
          let a = (0, i.p)();
          return (0, o.jsx)(r.m.th, {
            ...t,
            ref: n,
            __css: a.th,
            "data-is-numeric": e,
          });
        });
    },
    64698: function (e, t, n) {
      "use strict";
      n.d(t, {
        Td: function () {
          return s;
        },
      });
      var i = n(10991),
        a = n(16554),
        r = n(65548),
        o = n(85893),
        s = (0, a.G)(({ isNumeric: e, ...t }, n) => {
          let a = (0, i.p)();
          return (0, o.jsx)(r.m.td, {
            ...t,
            ref: n,
            __css: a.td,
            "data-is-numeric": e,
          });
        });
    },
    45458: function (e, t, n) {
      "use strict";
      n.d(t, {
        M1: function () {
          return o;
        },
      });
      var i = n(26182);
      let a = [
          { type: "address", name: "owner" },
          { type: "address", name: "spender" },
        ],
        r = [{ type: "uint256" }];
      async function o(e) {
        return (0, i.readContract)({
          contract: e.contract,
          method: ["0xdd62ed3e", a, r],
          params: [e.owner, e.spender],
        });
      }
    },
    43684: function (e, t, n) {
      "use strict";
      n.d(t, {
        jA: function () {
          return o;
        },
      });
      var i = n(26182);
      let a = [{ type: "address", name: "_address" }],
        r = [{ type: "uint256" }];
      async function o(e) {
        return (0, i.readContract)({
          contract: e.contract,
          method: ["0x70a08231", a, r],
          params: [e.address],
        });
      }
    },
  },
  function (e) {
    e.O(
      0,
      [21265, 64838, 38611, 59684, 81659, 65408, 89848, 92888, 49774, 40179],
      function () {
        return e((e.s = 54997));
      }
    ),
      (_N_E = e.O());
  },
]);
