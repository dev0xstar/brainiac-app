"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [94770, 46736],
  {
    81494: function (e, t, n) {
      n.d(t, {
        T: function () {
          return u;
        },
      });
      var r = n(85893),
        i = n(68817),
        o = n(54405),
        l = n(57654),
        a = n(20070),
        s = n(69538),
        c = n(15794);
      function u(e) {
        return (0, r.jsxs)(a.W2, {
          animate: "fadein",
          children: [
            (0, r.jsx)(l.L, { y: "xxl" }),
            (0, r.jsx)(a.W2, {
              flex: "row",
              center: "x",
              children: (0, r.jsx)(o.E, { size: i.EA["3xl"] }),
            }),
            (0, r.jsx)(l.L, { y: "lg" }),
            (0, r.jsx)(c.x, {
              center: !0,
              color: "primaryText",
              size: "md",
              children: e.title,
            }),
            (0, r.jsx)(l.L, { y: "xl" }),
            (0, r.jsx)(l.L, { y: "xxl" }),
            (0, r.jsx)(s.zx, {
              variant: "accent",
              fullWidth: !0,
              onClick: e.onTryAgain,
              children: "Try Again",
            }),
          ],
        });
      }
    },
    70021: function (e, t, n) {
      n.d(t, {
        G: function () {
          return s;
        },
      });
      var r = n(85893),
        i = n(57654),
        o = n(67544),
        l = n(20070),
        a = n(15794);
      function s(e) {
        return (0, r.jsxs)(l.W2, {
          animate: "fadein",
          children: [
            (0, r.jsx)(i.L, { y: "xxl" }),
            (0, r.jsxs)(l.W2, {
              flex: "row",
              center: "x",
              style: { position: "relative" },
              children: [
                (0, r.jsx)(o.$, { size: "4xl", color: "accentText" }),
                (0, r.jsx)(l.W2, {
                  color: "accentText",
                  style: {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  },
                  children: e.icon,
                }),
              ],
            }),
            (0, r.jsx)(i.L, { y: "xl" }),
            (0, r.jsx)(a.x, {
              center: !0,
              color: "primaryText",
              size: "lg",
              children: e.title,
            }),
            (0, r.jsx)(i.L, { y: "md" }),
            (0, r.jsx)(a.x, {
              multiline: !0,
              center: !0,
              children: e.subtitle,
            }),
            (0, r.jsx)(i.L, { y: "xxl" }),
            (0, r.jsx)(i.L, { y: "xxl" }),
          ],
        });
      }
    },
    7462: function (e, t, n) {
      n.d(t, {
        F: function () {
          return O;
        },
      });
      var r = n(85893),
        i = n(67294),
        o = n(28933),
        l = n(85044),
        a = n(8098),
        s = n(46736),
        c = n(51964),
        u = n(68817),
        d = n(44789),
        p = n(8985),
        x = n(44581);
      let h = (0, x.lx)({ animation: `${p.BX} 0.15s ease-in` });
      var g = n(70917),
        f = Object.defineProperty,
        m = Object.defineProperties,
        y = Object.getOwnPropertyDescriptors,
        v = Object.getOwnPropertySymbols,
        j = Object.prototype.hasOwnProperty,
        k = Object.prototype.propertyIsEnumerable,
        w = (e, t, n) =>
          t in e
            ? f(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        C = (e, t) => {
          for (var n in t || (t = {})) j.call(t, n) && w(e, n, t[n]);
          if (v) for (var n of v(t)) k.call(t, n) && w(e, n, t[n]);
          return e;
        },
        b = (e, t) => m(e, y(t)),
        L = (e, t) => {
          var n = {};
          for (var r in e) j.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
          if (null != e && v)
            for (var r of v(e))
              0 > t.indexOf(r) && k.call(e, r) && (n[r] = e[r]);
          return n;
        },
        E = i.createContext({}),
        S = i.forwardRef((e, t) => {
          let n;
          var r,
            o,
            l,
            a,
            s,
            {
              value: c,
              onChange: u,
              maxLength: d,
              textAlign: p = "left",
              pattern: x = "^\\d+$",
              inputMode: h = "numeric",
              onComplete: g,
              pushPasswordManagerStrategy: f = "increase-width",
              containerClassName: m,
              noScriptCSSFallback: y = A,
              render: v,
              children: j,
            } = e,
            k = L(e, [
              "value",
              "onChange",
              "maxLength",
              "textAlign",
              "pattern",
              "inputMode",
              "onComplete",
              "pushPasswordManagerStrategy",
              "containerClassName",
              "noScriptCSSFallback",
              "render",
              "children",
            ]);
          let [w, S] = i.useState(
              "string" == typeof k.defaultValue ? k.defaultValue : ""
            ),
            T = null != c ? c : w,
            P =
              ((n = i.useRef()),
              i.useEffect(() => {
                n.current = T;
              }),
              n.current),
            M = i.useCallback(
              (e) => {
                null == u || u(e), S(e);
              },
              [u]
            ),
            I = i.useMemo(
              () => (x ? ("string" == typeof x ? new RegExp(x) : x) : null),
              [x]
            ),
            R = i.useRef(null),
            z = i.useRef(null),
            B = i.useRef({
              value: T,
              onChange: M,
              isIOS:
                "undefined" != typeof window &&
                (null ==
                (o =
                  null == (r = null == window ? void 0 : window.CSS)
                    ? void 0
                    : r.supports)
                  ? void 0
                  : o.call(r, "-webkit-touch-callout", "none")),
            }),
            D = i.useRef({
              prev: [
                null == (l = R.current) ? void 0 : l.selectionStart,
                null == (a = R.current) ? void 0 : a.selectionEnd,
                null == (s = R.current) ? void 0 : s.selectionDirection,
              ],
            });
          i.useImperativeHandle(t, () => R.current, []),
            i.useEffect(() => {
              let e = R.current,
                t = z.current;
              if (!e || !t) return;
              function n() {
                if (document.activeElement !== e) {
                  H(null), J(null);
                  return;
                }
                let t = e.selectionStart,
                  n = e.selectionEnd,
                  r = e.selectionDirection,
                  i = e.maxLength,
                  o = e.value,
                  l = D.current.prev,
                  a = -1,
                  s = -1,
                  c;
                if (0 !== o.length && null !== t && null !== n) {
                  let e = t === n,
                    r = t === o.length && o.length < i;
                  if (e && !r) {
                    if (0 === t) (a = 0), (s = 1), (c = "forward");
                    else if (t === i) (a = t - 1), (s = t), (c = "backward");
                    else if (i > 1 && o.length > 1) {
                      let e = 0;
                      if (null !== l[0] && null !== l[1]) {
                        c = t < l[1] ? "backward" : "forward";
                        let n = l[0] === l[1] && l[0] < i;
                        "backward" !== c || n || (e = -1);
                      }
                      (a = e + t), (s = e + t + 1);
                    }
                  }
                  -1 !== a &&
                    -1 !== s &&
                    a !== s &&
                    R.current.setSelectionRange(a, s, c);
                }
                let u = -1 !== a ? a : t,
                  d = -1 !== s ? s : n,
                  p = null != c ? c : r;
                H(u), J(d), (D.current.prev = [u, d, p]);
              }
              if (
                (B.current.value !== e.value && B.current.onChange(e.value),
                (D.current.prev = [
                  e.selectionStart,
                  e.selectionEnd,
                  e.selectionDirection,
                ]),
                document.addEventListener("selectionchange", n, {
                  capture: !0,
                }),
                n(),
                document.activeElement === e && O(!0),
                !document.getElementById("input-otp-style"))
              ) {
                let e = document.createElement("style");
                if (
                  ((e.id = "input-otp-style"),
                  document.head.appendChild(e),
                  e.sheet)
                ) {
                  let t =
                    "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
                  W(
                    e.sheet,
                    "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"
                  ),
                    W(e.sheet, `[data-input-otp]:autofill { ${t} }`),
                    W(e.sheet, `[data-input-otp]:-webkit-autofill { ${t} }`),
                    W(
                      e.sheet,
                      "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"
                    ),
                    W(
                      e.sheet,
                      "[data-input-otp] + * { pointer-events: all !important; }"
                    );
                }
              }
              let r = () => {
                t &&
                  t.style.setProperty("--root-height", `${e.clientHeight}px`);
              };
              r();
              let i = new ResizeObserver(r);
              return (
                i.observe(e),
                () => {
                  document.removeEventListener("selectionchange", n, {
                    capture: !0,
                  }),
                    i.disconnect();
                }
              );
            }, []);
          let [F, _] = i.useState(!1),
            [$, O] = i.useState(!1),
            [N, H] = i.useState(null),
            [G, J] = i.useState(null);
          i.useEffect(() => {
            var e;
            setTimeout(
              (e = () => {
                var e, t, n, r;
                null == (e = R.current) || e.dispatchEvent(new Event("input"));
                let i = null == (t = R.current) ? void 0 : t.selectionStart,
                  o = null == (n = R.current) ? void 0 : n.selectionEnd,
                  l = null == (r = R.current) ? void 0 : r.selectionDirection;
                null !== i &&
                  null !== o &&
                  (H(i), J(o), (D.current.prev = [i, o, l]));
              }),
              0
            ),
              setTimeout(e, 10),
              setTimeout(e, 50);
          }, [T, $]),
            i.useEffect(() => {
              void 0 !== P &&
                T !== P &&
                P.length < d &&
                T.length === d &&
                (null == g || g(T));
            }, [d, g, P, T]);
          let U = (function ({
              containerRef: e,
              inputRef: t,
              pushPasswordManagerStrategy: n,
              isFocused: r,
            }) {
              let o = i.useRef({ done: !1, refocused: !1 }),
                [l, a] = i.useState(!1),
                [s, c] = i.useState(!1),
                [u, d] = i.useState(!1),
                p = i.useMemo(
                  () =>
                    "none" !== n &&
                    ("increase-width" === n ||
                      "experimental-no-flickering" === n) &&
                    l &&
                    s,
                  [l, s, n]
                ),
                x = i.useCallback(() => {
                  let r = e.current,
                    i = t.current;
                  if (!r || !i || u || "none" === n) return;
                  let l = r.getBoundingClientRect().left + r.offsetWidth,
                    s = r.getBoundingClientRect().top + r.offsetHeight / 2;
                  if (
                    !(
                      0 ===
                        document.querySelectorAll(
                          '[data-lastpass-icon-root],com-1password-button,[data-dashlanecreated],[style$="2147483647 !important;"]'
                        ).length && document.elementFromPoint(l - 18, s) === r
                    ) &&
                    (a(!0),
                    d(!0),
                    !o.current.refocused && document.activeElement === i)
                  ) {
                    let e = [i.selectionStart, i.selectionEnd];
                    i.blur(),
                      i.focus(),
                      i.setSelectionRange(e[0], e[1]),
                      (o.current.refocused = !0);
                  }
                }, [e, t, u, n]);
              return (
                i.useEffect(() => {
                  let t = e.current;
                  if (!t || "none" === n) return;
                  function r() {
                    c(
                      window.innerWidth - t.getBoundingClientRect().right >= 40
                    );
                  }
                  r();
                  let i = setInterval(r, 1e3);
                  return () => {
                    clearInterval(i);
                  };
                }, [e, n]),
                i.useEffect(() => {
                  let e = r || document.activeElement === t.current;
                  if ("none" === n || !e) return;
                  let i = setTimeout(x, 0),
                    o = setTimeout(x, 2e3),
                    l = setTimeout(x, 5e3),
                    a = setTimeout(() => {
                      d(!0);
                    }, 6e3);
                  return () => {
                    clearTimeout(i),
                      clearTimeout(o),
                      clearTimeout(l),
                      clearTimeout(a);
                  };
                }, [t, r, n, x]),
                {
                  hasPWMBadge: l,
                  willPushPWMBadge: p,
                  PWM_BADGE_SPACE_WIDTH: "40px",
                }
              );
            })({
              containerRef: z,
              inputRef: R,
              pushPasswordManagerStrategy: f,
              isFocused: $,
            }),
            V = i.useCallback(
              (e) => {
                let t = e.currentTarget.value.slice(0, d);
                if (t.length > 0 && I && !I.test(t)) {
                  e.preventDefault();
                  return;
                }
                "string" == typeof P &&
                  t.length < P.length &&
                  document.dispatchEvent(new Event("selectionchange")),
                  M(t);
              },
              [d, M, P, I]
            ),
            q = i.useCallback(() => {
              var e;
              if (R.current) {
                let t = Math.min(R.current.value.length, d - 1),
                  n = R.current.value.length;
                null == (e = R.current) || e.setSelectionRange(t, n),
                  H(t),
                  J(n);
              }
              O(!0);
            }, [d]),
            Q = i.useCallback(
              (e) => {
                var t, n;
                let r = R.current;
                if (!B.current.isIOS || !e.clipboardData || !r) return;
                let i = e.clipboardData.getData("text/plain");
                e.preventDefault();
                let o = null == (t = R.current) ? void 0 : t.selectionStart,
                  l = null == (n = R.current) ? void 0 : n.selectionEnd,
                  a = (
                    o !== l
                      ? T.slice(0, o) + i + T.slice(l)
                      : T.slice(0, o) + i + T.slice(o)
                  ).slice(0, d);
                if (a.length > 0 && I && !I.test(a)) return;
                (r.value = a), M(a);
                let s = Math.min(a.length, d - 1),
                  c = a.length;
                r.setSelectionRange(s, c), H(s), J(c);
              },
              [d, M, I, T]
            ),
            Y = i.useMemo(
              () => ({
                position: "relative",
                cursor: k.disabled ? "default" : "text",
                userSelect: "none",
                WebkitUserSelect: "none",
                pointerEvents: "none",
              }),
              [k.disabled]
            ),
            Z = i.useMemo(
              () => ({
                position: "absolute",
                inset: 0,
                width: U.willPushPWMBadge
                  ? `calc(100% + ${U.PWM_BADGE_SPACE_WIDTH})`
                  : "100%",
                clipPath: U.willPushPWMBadge
                  ? `inset(0 ${U.PWM_BADGE_SPACE_WIDTH} 0 0)`
                  : void 0,
                height: "100%",
                display: "flex",
                textAlign: p,
                opacity: "1",
                color: "transparent",
                pointerEvents: "all",
                background: "transparent",
                caretColor: "transparent",
                border: "0 solid transparent",
                outline: "0 solid transparent",
                boxShadow: "none",
                lineHeight: "1",
                letterSpacing: "-.5em",
                fontSize: "var(--root-height)",
                fontFamily: "monospace",
                fontVariantNumeric: "tabular-nums",
              }),
              [U.PWM_BADGE_SPACE_WIDTH, U.willPushPWMBadge, p]
            ),
            X = i.useMemo(
              () =>
                i.createElement(
                  "input",
                  b(C({ autoComplete: k.autoComplete || "one-time-code" }, k), {
                    "data-input-otp": !0,
                    "data-input-otp-mss": N,
                    "data-input-otp-mse": G,
                    inputMode: h,
                    pattern: null == I ? void 0 : I.source,
                    style: Z,
                    maxLength: d,
                    value: T,
                    ref: R,
                    onPaste: (e) => {
                      var t;
                      Q(e), null == (t = k.onPaste) || t.call(k, e);
                    },
                    onChange: V,
                    onMouseOver: (e) => {
                      var t;
                      _(!0), null == (t = k.onMouseOver) || t.call(k, e);
                    },
                    onMouseLeave: (e) => {
                      var t;
                      _(!1), null == (t = k.onMouseLeave) || t.call(k, e);
                    },
                    onFocus: (e) => {
                      var t;
                      q(), null == (t = k.onFocus) || t.call(k, e);
                    },
                    onBlur: (e) => {
                      var t;
                      O(!1), null == (t = k.onBlur) || t.call(k, e);
                    },
                  })
                ),
              [V, q, Q, h, Z, d, G, N, k, null == I ? void 0 : I.source, T]
            ),
            K = i.useMemo(
              () => ({
                slots: Array.from({ length: d }).map((e, t) => {
                  let n =
                      $ &&
                      null !== N &&
                      null !== G &&
                      ((N === G && t === N) || (t >= N && t < G)),
                    r = void 0 !== T[t] ? T[t] : null;
                  return {
                    char: r,
                    isActive: n,
                    hasFakeCaret: n && null === r,
                  };
                }),
                isFocused: $,
                isHovering: !k.disabled && F,
              }),
              [$, F, d, G, N, k.disabled, T]
            ),
            ee = i.useMemo(
              () => (v ? v(K) : i.createElement(E.Provider, { value: K }, j)),
              [j, K, v]
            );
          return i.createElement(
            i.Fragment,
            null,
            null !== y &&
              i.createElement(
                "noscript",
                null,
                i.createElement("style", null, y)
              ),
            i.createElement(
              "div",
              {
                ref: z,
                "data-input-otp-container": !0,
                style: Y,
                className: m,
              },
              ee,
              i.createElement(
                "div",
                {
                  style: {
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                  },
                },
                X
              )
            )
          );
        });
      function W(e, t) {
        try {
          e.insertRule(t);
        } catch (e) {
          console.error("input-otp could not insert CSS rule:", t);
        }
      }
      S.displayName = "Input";
      var A = `
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`,
        T = n(20070);
      function P(e) {
        return (0, r.jsx)(M, {
          children: (0, r.jsx)(S, {
            onComplete: () => {
              e.onEnter();
            },
            maxLength: 6,
            value: e.value,
            render: ({ slots: t }) =>
              (0, r.jsx)(T.W2, {
                flex: "row",
                gap: "xs",
                center: "both",
                children: t.map((t, n) =>
                  (0, r.jsx)(I, { ...t, isInvalid: e.isInvalid }, n)
                ),
              }),
            onChange: (t) => {
              e.setValue(t);
            },
          }),
        });
      }
      let M = (0, x.lx)({ "& input": { maxWidth: "100%" } });
      function I(e) {
        return (0, r.jsxs)(B, {
          "data-active": e.isActive,
          "data-error": e.isInvalid,
          children: [
            null !== e.char && (0, r.jsx)("div", { children: e.char }),
            e.hasFakeCaret && (0, r.jsx)(z, {}),
          ],
        });
      }
      let R = g.F4`
  0%, 100% {
    opacity: 0;
  },
  50% {
    opacity: 1;
  }
  `,
        z = (0, x.lx)((e) => ({
          position: "absolute",
          pointerEvents: "none",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          animation: `${R} 1s infinite`,
          "&::before": {
            content: "''",
            display: "block",
            width: "1.5px",
            height: "1em",
            backgroundColor: (0, c.v$)().colors.primaryText,
          },
        })),
        B = (0, x.lx)((e) => {
          let t = (0, c.v$)();
          return {
            position: "relative",
            width: "40px",
            height: "40px",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: u.JB.md,
            padding: u.W0.xs,
            boxSizing: "border-box",
            transition: "color 200ms ease",
            border: `2px solid ${t.colors.borderColor}`,
            "&[data-active='true']": { borderColor: t.colors.accentText },
            color: t.colors.primaryText,
            borderRadius: u.q0.lg,
            "&[data-error='true']": { borderColor: t.colors.danger },
          };
        });
      var D = n(57654),
        F = n(67544),
        _ = n(69538),
        $ = n(15794);
      function O(e) {
        let { wallet: t, done: n, goBack: c, userInfo: u } = e,
          p = "wide" === e.size,
          x = e.locale,
          [g, f] = (0, i.useState)(""),
          [m, y] = (0, i.useState)("idle"),
          [v, j] = (0, i.useState)(),
          [k, w] = (0, i.useState)("sending"),
          C = (0, i.useMemo)(() => (0, l.J)(t.id), [t.id]),
          [b] = (0, i.useState)("base"),
          L = (0, i.useCallback)(async () => {
            f(""), y("idle"), w("sending");
            try {
              if ("email" in u)
                await (0, s.uA)({
                  ecosystem: C
                    ? { id: t.id, partnerId: t.getConfig()?.partnerId }
                    : void 0,
                  email: u.email,
                  strategy: "email",
                  client: e.client,
                }),
                  w("sent");
              else if ("phone" in u)
                await (0, s.uA)({
                  ecosystem: C
                    ? { id: t.id, partnerId: t.getConfig()?.partnerId }
                    : void 0,
                  phoneNumber: u.phone,
                  strategy: "phone",
                  client: e.client,
                }),
                  w("sent");
              else throw Error("Invalid userInfo");
            } catch (e) {
              console.error(e), y("idle"), w("error");
            }
          }, [e.client, u, t, C]);
        async function E(n) {
          if ("email" in u)
            await t.connect({
              chain: e.chain,
              strategy: "email",
              email: u.email,
              verificationCode: n,
              client: e.client,
            }),
              await (0, d.F)("email", o.x);
          else if ("phone" in u)
            await t.connect({
              chain: e.chain,
              strategy: "phone",
              phoneNumber: u.phone,
              verificationCode: n,
              client: e.client,
            }),
              await (0, d.F)("phone", o.x);
          else throw Error("Invalid userInfo");
        }
        async function S(e) {
          "email" in u
            ? await (0, a.$)(t, {
                strategy: "email",
                email: u.email,
                verificationCode: e,
              })
            : "phone" in u &&
              (await (0, a.$)(t, {
                strategy: "phone",
                phoneNumber: u.phone,
                verificationCode: e,
              }));
        }
        let W = async (t) => {
            if (6 === t.length) {
              y("verifying");
              try {
                e.isLinking ? await S(t) : await E(t), n(), y("valid");
              } catch (e) {
                e instanceof Error &&
                e?.message?.includes("PAYMENT_METHOD_REQUIRED")
                  ? y("payment_required")
                  : e instanceof Error &&
                    (e.message.toLowerCase().includes("link") ||
                      e.message.toLowerCase().includes("profile"))
                  ? (y("linking_error"), j(e.message))
                  : y("invalid"),
                  console.error("Authentication Error", e);
              }
            }
          },
          A = (0, i.useRef)(!1);
        return ((0, i.useEffect)(() => {
          A.current || ((A.current = !0), L());
        }, [L]),
        "base" === b)
          ? (0, r.jsxs)(T.W2, {
              fullHeight: !0,
              flex: "column",
              animate: "fadein",
              children: [
                (0, r.jsx)(T.W2, {
                  p: "lg",
                  children: (0, r.jsx)(T.xB, { title: x.signIn, onBack: c }),
                }),
                (0, r.jsx)(T.W2, {
                  expand: !0,
                  flex: "column",
                  center: "y",
                  children: (0, r.jsxs)("form", {
                    onSubmit: (e) => {
                      e.preventDefault();
                    },
                    children: [
                      (0, r.jsxs)(T.W2, {
                        flex: "column",
                        center: "x",
                        px: "lg",
                        children: [
                          !p && (0, r.jsx)(D.L, { y: "xl" }),
                          (0, r.jsx)($.x, {
                            children: x.emailLoginScreen.enterCodeSendTo,
                          }),
                          (0, r.jsx)(D.L, { y: "sm" }),
                          (0, r.jsx)($.x, {
                            color: "primaryText",
                            children: "email" in u ? u.email : u.phone,
                          }),
                          (0, r.jsx)(D.L, { y: "xl" }),
                        ],
                      }),
                      (0, r.jsx)(P, {
                        isInvalid: "invalid" === m,
                        digits: 6,
                        value: g,
                        setValue: (e) => {
                          f(e), y("idle");
                        },
                        onEnter: () => {
                          W(g);
                        },
                      }),
                      "invalid" === m &&
                        (0, r.jsxs)(h, {
                          children: [
                            (0, r.jsx)(D.L, { y: "md" }),
                            (0, r.jsx)($.x, {
                              size: "sm",
                              color: "danger",
                              center: !0,
                              children: x.emailLoginScreen.invalidCode,
                            }),
                          ],
                        }),
                      "linking_error" === m &&
                        (0, r.jsxs)(h, {
                          children: [
                            (0, r.jsx)(D.L, { y: "md" }),
                            (0, r.jsx)($.x, {
                              size: "sm",
                              color: "danger",
                              center: !0,
                              children: v || "Failed to verify code",
                            }),
                          ],
                        }),
                      "payment_required" === m &&
                        (0, r.jsxs)(h, {
                          children: [
                            (0, r.jsx)(D.L, { y: "md" }),
                            (0, r.jsx)($.x, {
                              size: "sm",
                              color: "danger",
                              center: !0,
                              children: x.maxAccountsExceeded,
                            }),
                          ],
                        }),
                      (0, r.jsx)(D.L, { y: "xl" }),
                      (0, r.jsx)(T.W2, {
                        px: p ? "xxl" : "lg",
                        children:
                          "verifying" === m
                            ? (0, r.jsx)(r.Fragment, {
                                children: (0, r.jsx)(T.W2, {
                                  flex: "row",
                                  center: "x",
                                  animate: "fadein",
                                  children: (0, r.jsx)(F.$, {
                                    size: "lg",
                                    color: "accentText",
                                  }),
                                }),
                              })
                            : (0, r.jsx)(
                                T.W2,
                                {
                                  animate: "fadein",
                                  children: (0, r.jsx)(_.zx, {
                                    onClick: () => W(g),
                                    variant: "accent",
                                    type: "submit",
                                    style: { width: "100%" },
                                    children: x.emailLoginScreen.verify,
                                  }),
                                },
                                "btn-container"
                              ),
                      }),
                      (0, r.jsx)(D.L, { y: "xl" }),
                      !p && (0, r.jsx)(T.x1, {}),
                      (0, r.jsxs)(T.W2, {
                        p: p ? void 0 : "lg",
                        children: [
                          "error" === k &&
                            (0, r.jsx)($.x, {
                              size: "sm",
                              center: !0,
                              color: "danger",
                              children: x.emailLoginScreen.failedToSendCode,
                            }),
                          "sending" === k &&
                            (0, r.jsxs)(T.W2, {
                              flex: "row",
                              center: "both",
                              gap: "xs",
                              style: { textAlign: "center" },
                              children: [
                                (0, r.jsx)($.x, {
                                  size: "sm",
                                  children: x.emailLoginScreen.sendingCode,
                                }),
                                (0, r.jsx)(F.$, {
                                  size: "xs",
                                  color: "secondaryText",
                                }),
                              ],
                            }),
                          "sent" === k &&
                            (0, r.jsx)(N, {
                              onClick: L,
                              type: "button",
                              children: x.emailLoginScreen.resendCode,
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            })
          : null;
      }
      let N = (0, x.Sn)((e) => {
        let t = (0, c.v$)();
        return {
          all: "unset",
          color: t.colors.accentText,
          fontSize: u.JB.sm,
          cursor: "pointer",
          textAlign: "center",
          fontWeight: 500,
          width: "100%",
          "&:hover": { color: t.colors.primaryText },
        };
      });
    },
    65056: function (e, t, n) {
      n.d(t, {
        N: function () {
          return y;
        },
      });
      var r = n(85893),
        i = n(67294),
        o = n(8098),
        l = n(28933),
        a = n(85044),
        s = n(38642),
        c = n(68817),
        u = n(44789);
      let d = (e) =>
        (0, r.jsxs)("svg", {
          width: e.size,
          height: e.size,
          viewBox: "0 0 36 36",
          fill: "none",
          "aria-hidden": "true",
          children: [
            (0, r.jsx)("path", {
              d: "M18.0001 15C17.2045 15 16.4414 15.3161 15.8788 15.8787C15.3162 16.4413 15.0001 17.2044 15.0001 18C15.0001 19.53 14.8501 21.765 14.6101 24",
              stroke: "currentColor",
              strokeWidth: "3",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            (0, r.jsx)("path", {
              d: "M21.0002 19.6801C21.0002 23.2501 21.0002 29.2501 19.5002 33.0001",
              stroke: "currentColor",
              strokeWidth: "3",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            (0, r.jsx)("path", {
              d: "M25.9348 31.53C26.1148 30.63 26.5798 28.08 26.6848 27",
              stroke: "currentColor",
              strokeWidth: "3",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            (0, r.jsx)("path", {
              d: "M2.99976 18C2.99976 14.8518 3.99032 11.7833 5.83112 9.22935C7.67193 6.67536 10.2697 4.76531 13.2563 3.76975C16.243 2.77419 19.4672 2.74359 22.4723 3.6823C25.4773 4.621 28.1108 6.48141 29.9998 9",
              stroke: "currentColor",
              strokeWidth: "3",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            (0, r.jsx)("path", {
              d: "M2.99976 24H3.01628",
              stroke: "currentColor",
              strokeWidth: "3",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            (0, r.jsx)("path", {
              d: "M32.7 24C33 21 32.8965 15.969 32.7 15",
              stroke: "currentColor",
              strokeWidth: "3",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            (0, r.jsx)("path", {
              d: "M7.49976 29.25C8.24976 27 8.99976 22.5 8.99976 18C8.99824 16.9783 9.17071 15.9638 9.50976 15",
              stroke: "currentColor",
              strokeWidth: "3",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            (0, r.jsx)("path", {
              d: "M12.9751 33C13.2901 32.01 13.6501 31.02 13.8301 30",
              stroke: "currentColor",
              strokeWidth: "3",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            (0, r.jsx)("path", {
              d: "M13.5 10.2C14.8686 9.40988 16.4211 8.99401 18.0014 8.99426C19.5818 8.99452 21.1342 9.41088 22.5025 10.2015C23.8708 10.9921 25.0069 12.129 25.7964 13.498C26.5859 14.867 27.001 16.4197 27 18V21",
              stroke: "currentColor",
              strokeWidth: "3",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          ],
        });
      var p = n(57654),
        x = n(20070),
        h = n(69538),
        g = n(81494),
        f = n(477),
        m = n(70021);
      function y(e) {
        let { wallet: t, done: n, client: o, chain: l, size: c, locale: u } = e,
          [d, h] = (0, i.useState)("loading"),
          g = (0, i.useRef)(!1);
        return (
          (0, i.useEffect)(() => {
            g.current ||
              ((g.current = !0),
              (0, s.J)(o, (0, a.J)(t.id) ? t.id : void 0)
                .then((e) => {
                  e ? h("login") : h("select");
                })
                .catch(() => {
                  h("select");
                }));
          }, [o, t.id]),
          (0, r.jsxs)(x.W2, {
            animate: "fadein",
            fullHeight: !0,
            flex: "column",
            children: [
              (0, r.jsx)(x.W2, {
                p: "lg",
                children: (0, r.jsx)(x.xB, {
                  title: e.isLinking
                    ? u.passkeys.linkPasskey
                    : u.passkeys.title,
                  onBack: e.onBack,
                }),
              }),
              (0, r.jsx)(x.W2, {
                px: "wide" === c ? "xxl" : "lg",
                expand: !0,
                flex: "column",
                center: "y",
                children: (0, r.jsxs)("div", {
                  children: [
                    "loading" === d &&
                      (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)(f.a, {}),
                          (0, r.jsx)(p.L, { y: "xxl" }),
                        ],
                      }),
                    "select" === d &&
                      (0, r.jsx)(k, {
                        onSignin: () => {
                          h("login");
                        },
                        onSignup: () => {
                          h("signup");
                        },
                      }),
                    "login" === d &&
                      (0, r.jsx)(v, {
                        wallet: t,
                        client: o,
                        done: n,
                        onCreate: () => {
                          h("signup");
                        },
                        chain: l,
                        isLinking: e.isLinking,
                      }),
                    "signup" === d &&
                      (0, r.jsx)(j, {
                        wallet: t,
                        client: o,
                        done: n,
                        chain: l,
                        isLinking: e.isLinking,
                      }),
                  ],
                }),
              }),
            ],
          })
        );
      }
      function v(e) {
        let { wallet: t, done: n, client: a, chain: s } = e,
          [x, f] = (0, i.useState)("loading"),
          [y, v] = (0, i.useState)();
        async function j() {
          f("loading");
          try {
            e.isLinking
              ? await (0, o.$)(t, {
                  strategy: "passkey",
                  type: "sign-in",
                }).catch((e) => {
                  throw (v(e.message), e);
                })
              : (await t.connect({
                  client: a,
                  strategy: "passkey",
                  type: "sign-in",
                  chain: s,
                }),
                await (0, u.F)("passkey", l.x)),
              n();
          } catch {
            f("error");
          }
        }
        let k = (0, i.useRef)(!1);
        return ((0, i.useEffect)(() => {
          k.current || ((k.current = !0), j());
        }),
        "loading" === x)
          ? (0, r.jsx)(m.G, {
              title: "Requesting Passkey",
              subtitle:
                "A pop-up prompt will appear to sign-in and verify your passkey",
              icon: (0, r.jsx)(d, { size: c.EA.xxl }),
            })
          : "error" === x
          ? (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(g.T, {
                  onTryAgain: j,
                  title: y || "Failed to Login",
                }),
                (0, r.jsx)(p.L, { y: "sm" }),
                (0, r.jsx)(h.zx, {
                  variant: "outline",
                  fullWidth: !0,
                  onClick: e.onCreate,
                  children: "Create a new Passkey",
                }),
                (0, r.jsx)(p.L, { y: "lg" }),
              ],
            })
          : null;
      }
      function j(e) {
        let { wallet: t, done: n, client: a, chain: s } = e,
          [x, h] = (0, i.useState)(),
          [f, y] = (0, i.useState)("loading");
        async function v() {
          y("loading");
          try {
            e.isLinking
              ? await (0, o.$)(t, { strategy: "passkey", type: "sign-up" })
              : (await t.connect({
                  client: a,
                  strategy: "passkey",
                  type: "sign-up",
                  chain: s,
                }),
                await (0, u.F)("passkey", l.x)),
              n();
          } catch (e) {
            console.error(e),
              e instanceof Error && h(`Error creating passkey: ${e.message}`),
              y("error");
          }
        }
        let j = (0, i.useRef)(!1);
        return ((0, i.useEffect)(() => {
          j.current || ((j.current = !0), v());
        }),
        "loading" === f)
          ? (0, r.jsx)(m.G, {
              title: "Creating Passkey",
              subtitle:
                "A pop-up prompt will appear to sign-in and verify your passkey",
              icon: (0, r.jsx)(d, { size: c.EA.xxl }),
            })
          : "error" === f
          ? (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(g.T, {
                  onTryAgain: v,
                  title: x || "Failed to create passkey",
                }),
                (0, r.jsx)(p.L, { y: "lg" }),
              ],
            })
          : null;
      }
      function k(e) {
        return (0, r.jsxs)(x.W2, {
          children: [
            (0, r.jsx)(p.L, { y: "xxl" }),
            (0, r.jsx)(x.W2, {
              flex: "row",
              center: "x",
              color: "accentText",
              children: (0, r.jsx)(d, { size: c.EA["4xl"] }),
            }),
            (0, r.jsx)(p.L, { y: "xl" }),
            (0, r.jsx)(p.L, { y: "xxl" }),
            (0, r.jsx)(h.zx, {
              variant: "accent",
              onClick: e.onSignup,
              fullWidth: !0,
              children: "Create a Passkey",
            }),
            (0, r.jsx)(p.L, { y: "sm" }),
            (0, r.jsx)(h.zx, {
              variant: "outline",
              onClick: e.onSignin,
              fullWidth: !0,
              children: "I have a Passkey",
            }),
            (0, r.jsx)(p.L, { y: "lg" }),
          ],
        });
      }
    },
    40974: function (e, t, n) {
      n.d(t, {
        J: function () {
          return m;
        },
      });
      var r = n(85893),
        i = n(67294),
        o = n(28933),
        l = n(85044),
        a = n(8098),
        s = n(59416),
        c = n(51964),
        u = n(44789),
        d = n(57654),
        p = n(67544),
        x = n(20070),
        h = n(69538),
        g = n(15794),
        f = n(38170);
      function m(e) {
        let t = e.locale,
          n = t.socialLoginScreen,
          m = (0, c.v$)(),
          [y, v] = (0, i.useState)(void 0),
          { done: j, wallet: k } = e,
          [w, C] = (0, i.useState)("connecting"),
          b = async () => {
            let n = k.getConfig(),
              r = n && "auth" in n ? n?.auth?.mode ?? "popup" : "popup";
            if (n && "auth" in n && "popup" !== r && !e.isLinking)
              return (0, s.Z)({
                authOption: e.socialAuth,
                client: e.client,
                ecosystem: (0, l.J)(k)
                  ? { id: k.id, partnerId: k.getConfig()?.partnerId }
                  : void 0,
                redirectUrl: n?.auth?.redirectUrl,
                mode: n?.auth?.mode,
              });
            try {
              let t = (0, f.P)({
                authOption: e.socialAuth,
                themeObj: m,
                client: e.client,
                ecosystem: (0, l.J)(k)
                  ? { id: k.id, partnerId: k.getConfig()?.partnerId }
                  : void 0,
              });
              if (!t)
                throw Error(`Failed to open ${e.socialAuth} login window`);
              C("connecting"),
                e.isLinking
                  ? await (0, a.$)(k, {
                      strategy: e.socialAuth,
                      openedWindow: t,
                      closeOpenedWindow: (e) => {
                        e.close();
                      },
                    }).catch((e) => {
                      throw (v(e.message), e);
                    })
                  : await k.connect({
                      chain: e.chain,
                      strategy: e.socialAuth,
                      openedWindow: t,
                      closeOpenedWindow: (e) => {
                        e.close();
                      },
                      client: e.client,
                    }),
                await (0, u.F)(e.socialAuth, o.x),
                C("connected"),
                j();
            } catch (n) {
              C("error"),
                n instanceof Error &&
                  n?.message?.includes("PAYMENT_METHOD_REQUIRED") &&
                  v(t.maxAccountsExceeded),
                console.error(`Error sign in with ${e.socialAuth}`, n);
            }
          },
          L = e.state?.socialLogin,
          E = (0, i.useRef)(!1);
        return (
          (0, i.useEffect)(() => {
            !E.current &&
              L &&
              ((E.current = !0),
              C("connecting"),
              L.connectionPromise
                .then(() => {
                  j(), C("connected");
                })
                .catch((e) => {
                  v(e.message), C("error");
                }));
          }, [j, L]),
          (0, r.jsx)(x.W2, {
            animate: "fadein",
            flex: "column",
            fullHeight: !0,
            children: (0, r.jsxs)(x.W2, {
              flex: "column",
              expand: !0,
              p: "lg",
              style: { paddingBottom: 0 },
              children: [
                e.goBack &&
                  (0, r.jsx)(x.xB, {
                    title: e.isLinking
                      ? e.connectLocale.manageWallet.linkProfile
                      : n.title,
                    onBack: e.goBack,
                  }),
                "compact" === e.size ? (0, r.jsx)(d.L, { y: "xl" }) : null,
                (0, r.jsxs)(x.W2, {
                  flex: "column",
                  center: "both",
                  expand: !0,
                  style: { textAlign: "center", minHeight: "250px" },
                  children: [
                    "error" !== w &&
                      (0, r.jsxs)(x.W2, {
                        animate: "fadein",
                        children: [
                          (0, r.jsx)(g.x, {
                            color: "primaryText",
                            center: !0,
                            multiline: !0,
                            style: { maxWidth: "250px" },
                            children: n.instruction,
                          }),
                          (0, r.jsx)(d.L, { y: "xl" }),
                          (0, r.jsx)(x.W2, {
                            center: "x",
                            flex: "row",
                            children: (0, r.jsx)(p.$, {
                              size: "lg",
                              color: "accentText",
                            }),
                          }),
                          (0, r.jsx)(d.L, { y: "xxl" }),
                        ],
                      }),
                    "error" === w &&
                      (0, r.jsxs)(x.W2, {
                        animate: "fadein",
                        children: [
                          y
                            ? (0, r.jsx)(g.x, {
                                center: !0,
                                color: "danger",
                                children: y,
                              })
                            : (0, r.jsx)(g.x, {
                                color: "danger",
                                children: n.failed,
                              }),
                          (0, r.jsx)(d.L, { y: "lg" }),
                          (0, r.jsx)(h.zx, {
                            variant: "primary",
                            onClick: b,
                            children: n.retry,
                          }),
                          (0, r.jsx)(d.L, { y: "xxl" }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
          })
        );
      }
    },
    46736: function (e, t, n) {
      n.d(t, {
        getUserEmail: function () {
          return a;
        },
        getUserPhoneNumber: function () {
          return s;
        },
        uA: function () {
          return c;
        },
      });
      var r = n(71817),
        i = n(66344);
      async function o(e, t) {
        return (0, i.getOrCreateInAppWalletConnector)(
          e,
          async (e) => {
            let { InAppWebConnector: r } = await n
              .e(37724)
              .then(n.bind(n, 37724));
            return new r({ client: e, ecosystem: t });
          },
          t
        );
      }
      async function l(e) {
        let { client: t } = e,
          n = await o(t),
          i = await n.getUser();
        if (i.status === r.Nx.LOGGED_IN_WALLET_INITIALIZED) return i;
      }
      async function a(e) {
        let t = await l(e);
        if (t && "email" in t.authDetails) return t.authDetails.email;
      }
      async function s(e) {
        let t = await l(e);
        if (t && "phoneNumber" in t.authDetails)
          return t.authDetails.phoneNumber;
      }
      async function c(e) {
        return (await o(e.client, e.ecosystem)).preAuthenticate(e);
      }
    },
  },
]);
