"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [37724, 64041],
  {
    64041: function (e, t, i) {
      i.r(t),
        i.d(t, {
          signLoginPayload: function () {
            return a;
          },
        });
      async function a(e) {
        let { payload: t, account: i } = e;
        return {
          signature: await i.signMessage({
            message: (function (e) {
              let t = [
                `${e.domain} wants you to sign in with your Ethereum account:`,
                e.address,
              ].join("\n");
              (t = [t, e.statement].join("\n\n")), e.statement && (t += "\n");
              let i = [];
              if (e.uri) {
                let t = `URI: ${e.uri}`;
                i.push(t);
              }
              let a = `Version: ${e.version}`;
              if ((i.push(a), e.chain_id)) {
                let t = `Chain ID: ${e.chain_id}` || "1";
                i.push(t);
              }
              let n = `Nonce: ${e.nonce}`;
              i.push(n);
              let r = `Issued At: ${e.issued_at}`;
              i.push(r);
              let s = `Expiration Time: ${e.expiration_time}`;
              if ((i.push(s), e.invalid_before)) {
                let t = `Not Before: ${e.invalid_before}`;
                i.push(t);
              }
              return (
                e.resources &&
                  i.push(
                    ["Resources:", ...e.resources.map((e) => `- ${e}`)].join(
                      "\n"
                    )
                  ),
                [t, i.join("\n")].join("\n")
              );
            })(t),
          }),
          payload: t,
        };
      }
    },
    8984: function (e, t, i) {
      i.d(t, {
        n: function () {
          return a;
        },
      });
      async function a(e, t) {
        return await e({ method: "eth_sendRawTransaction", params: [t] });
      }
    },
    72514: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return s;
        },
        o: function () {
          return o;
        },
      });
      var a = i(88615),
        n = i(69314);
      let r = (e) => {
          if (!n.L.includes(e) && "wallet" !== e)
            throw Error(`Unknown auth option ${e}`);
          return "wallet" === e ? "siwe" : e;
        },
        s = ({
          authOption: e,
          client: t,
          ecosystem: i,
          mode: n = "popup",
          redirectUrl: s,
        }) => {
          if ("popup" === n && s)
            throw Error("Redirect URL is not supported for popup mode");
          if ("window" === n && !s)
            throw Error("Redirect URL is required for window mode");
          let o = r(e),
            c = `${(0, a.TS)(
              "inAppWallet"
            )}/api/2024-05-05/login/${o}?clientId=${t.clientId}`;
          if (
            (i?.partnerId
              ? (c = `${c}&ecosystemId=${i.id}&ecosystemPartnerId=${i.partnerId}`)
              : i && (c = `${c}&ecosystemId=${i.id}`),
            "popup" !== n)
          ) {
            let t = new URL(s || window.location.href);
            t.searchParams.set("walletId", i?.id || "inApp"),
              t.searchParams.set("authProvider", e),
              (c = `${c}&redirectUrl=${encodeURIComponent(t.toString())}`);
          }
          return c;
        },
        o = ({ authOption: e, client: t, ecosystem: i }) => {
          let n = r(e),
            s = `${(0, a.TS)(
              "inAppWallet"
            )}/api/2024-05-05/login/${n}/callback?clientId=${t.clientId}`;
          return (
            i?.partnerId
              ? (s = `${s}&ecosystemId=${i.id}&ecosystemPartnerId=${i.partnerId}`)
              : i && (s = `${s}&ecosystemId=${i.id}`),
            s
          );
        };
    },
    59416: function (e, t, i) {
      i.d(t, {
        f: function () {
          return o;
        },
        Z: function () {
          return s;
        },
      });
      var a = i(88615),
        n = i(72514);
      let r = ({ isWindowOpenedByFn: e, win: t, closeOpenedWindow: i }) => {
          e ? t?.close() : t && i ? i(t) : t && t.close();
        },
        s = (e) => {
          let t = (0, n.Z)({ ...e, mode: e.mode || "redirect" });
          "redirect" === e.mode ? (window.location.href = t) : window.open(t);
        },
        o = async (e) => {
          let t = e.openedWindow,
            i = !1;
          if (
            (t ||
              ((t = window.open(
                (0, n.Z)({ ...e, mode: "popup" }),
                `Login to ${e.authOption}`,
                "width=350, height=500"
              )),
              (i = !0)),
            !t)
          )
            throw Error("Something went wrong opening pop-up");
          return await new Promise((n, s) => {
            let o = window.setInterval(async () => {
                t.closed &&
                  (clearInterval(o),
                  window.removeEventListener("message", c),
                  s(Error("User closed login window")));
              }, 1e3),
              c = async (l) => {
                if (l.origin === (0, a.TS)("inAppWallet")) {
                  if ("object" != typeof l.data) {
                    s(Error("Invalid event data"));
                    return;
                  }
                  switch (l.data.eventType) {
                    case "oauthSuccessResult":
                      window.removeEventListener("message", c),
                        clearInterval(o),
                        r({
                          isWindowOpenedByFn: i,
                          win: t,
                          closeOpenedWindow: e.closeOpenedWindow,
                        }),
                        l.data.authResult && n(l.data.authResult);
                      break;
                    case "oauthFailureResult":
                      window.removeEventListener("message", c),
                        clearInterval(o),
                        r({
                          isWindowOpenedByFn: i,
                          win: t,
                          closeOpenedWindow: e.closeOpenedWindow,
                        }),
                        s(Error(l.data.errorString));
                  }
                }
              };
            window.addEventListener("message", c);
          });
        };
    },
    37724: function (e, t, i) {
      i.r(t),
        i.d(t, {
          InAppWebConnector: function () {
            return x;
          },
        });
      var a = i(88615),
        n = i(28933),
        r = i(99910),
        s = i(72514);
      async function o(e) {
        let t = (0, r.NX)(e.client, e.ecosystem);
        return await (async () => {
          let i = (0, s.o)({
              authOption: "guest",
              client: e.client,
              ecosystem: e.ecosystem,
            }),
            a = await t(`${i}`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ sessionId: "guest" }),
            });
          if (!a.ok) throw Error("Failed to generate guest account");
          return await a.json();
        })();
      }
      var c = i(56423);
      function l() {
        return `${(0, a.TS)(
          "inAppWallet"
        )}/api/2024-05-05/login/passkey/callback`;
      }
      function d(e, t) {
        return `${(0, a.TS)(
          "inAppWallet"
        )}/api/2024-05-05/login/passkey?type=${e}${t ? `&username=${t}` : ""}`;
      }
      async function u(e) {
        var t;
        if (!e.passkeyClient.isAvailable())
          throw Error("Passkeys are not available on this device");
        let i = new c.A({
            storage: e.storage,
            clientId: e.client.clientId,
            ecosystemId: e.ecosystem?.id,
          }),
          a = (0, r.NX)(e.client, e.ecosystem),
          n =
            e.username ??
            ((t = e.ecosystem),
            `${t?.id ?? "wallet"}-${new Date().toISOString()}`),
          s = await a(d("sign-up", n)),
          o = await s.json();
        if (!o.challenge) throw Error("No challenge received");
        let u = o.challenge,
          h = await e.passkeyClient.register({
            name: n,
            challenge: u,
            rp: e.rp,
          }),
          p = {};
        e.ecosystem?.partnerId &&
          (p["x-ecosystem-partner-id"] = e.ecosystem.partnerId),
          e.ecosystem?.id && (p["x-ecosystem-id"] = e.ecosystem.id);
        let m = await a(l(), {
            method: "POST",
            headers: { "Content-Type": "application/json", ...p },
            body: JSON.stringify({
              type: "sign-up",
              authenticatorData: h.authenticatorData,
              credentialId: h.credentialId,
              serverVerificationId: o.serverVerificationId,
              clientData: h.clientData,
              username: n,
              credential: {
                publicKey: h.credential.publicKey,
                algorithm: h.credential.algorithm,
              },
              origin: h.origin,
              rpId: e.rp.id,
            }),
          }),
          y = await m.json();
        if (!y || !y.storedToken)
          throw Error(
            `Error verifying passkey: ${y.message ?? "unknown error"}`
          );
        return await i.savePasskeyCredentialId(h.credentialId), y;
      }
      async function h(e) {
        if (!e.passkeyClient.isAvailable())
          throw Error("Passkeys are not available on this device");
        let t = new c.A({
            storage: e.storage,
            clientId: e.client.clientId,
            ecosystemId: e.ecosystem?.id,
          }),
          i = (0, r.NX)(e.client, e.ecosystem),
          a = await i(d("sign-in")),
          n = await a.json();
        if (!n.challenge) throw Error("No challenge received");
        let s = n.challenge,
          o = (await t.getPasskeyCredentialId()) ?? void 0,
          u = await e.passkeyClient.authenticate({
            credentialId: o,
            challenge: s,
            rp: e.rp,
          }),
          h = {};
        e.ecosystem?.partnerId &&
          (h["x-ecosystem-partner-id"] = e.ecosystem.partnerId),
          e.ecosystem?.id && (h["x-ecosystem-id"] = e.ecosystem.id);
        let p = await i(l(), {
            method: "POST",
            headers: { "Content-Type": "application/json", ...h },
            body: JSON.stringify({
              type: "sign-in",
              authenticatorData: u.authenticatorData,
              credentialId: u.credentialId,
              serverVerificationId: n.serverVerificationId,
              clientData: u.clientData,
              signature: u.signature,
              origin: u.origin,
              rpId: e.rp.id,
            }),
          }),
          m = await p.json();
        if (!m || !m.storedToken)
          throw Error(
            `Error verifying passkey: ${m.message ?? "unknown error"}`
          );
        return await t.savePasskeyCredentialId(u.credentialId), m;
      }
      var p = i(64041);
      async function m(e) {
        let { wallet: t, chain: i } = e,
          a = await t.connect({ client: e.client }),
          n = (0, r.NX)(e.client, e.ecosystem),
          o = await (async () => {
            let t = (0, s.Z)({
                authOption: "wallet",
                client: e.client,
                ecosystem: e.ecosystem,
              }),
              r = await n(`${t}&address=${a.address}&chainId=${i.id}`);
            if (!r.ok) throw Error("Failed to generate SIWE login payload");
            return await r.json();
          })(),
          { signature: c } = await (0, p.signLoginPayload)({
            payload: o,
            account: a,
          });
        return await (async () => {
          let t = (0, s.o)({
              authOption: "wallet",
              client: e.client,
              ecosystem: e.ecosystem,
            }),
            i = await n(
              `${t}&signature=${c}&payload=${encodeURIComponent(o)}`,
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ signature: c, payload: o }),
              }
            );
          if (!i.ok) throw Error("Failed to verify SIWE signature");
          return await i.json();
        })();
      }
      var y = i(71817),
        w = i(16945);
      function g(e) {
        return new Promise((t) => {
          setTimeout(t, 1e3 * e);
        });
      }
      let f = {
          height: "100%",
          width: "100%",
          border: "none",
          backgroundColor: "transparent",
          colorScheme: "light",
          position: "fixed",
          top: "0px",
          right: "0px",
          zIndex: "2147483646",
          display: "none",
          pointerEvents: "all",
        },
        I = new Map();
      class b {
        constructor({
          link: e,
          baseUrl: t,
          iframeId: i,
          container: a = document.body,
          onIframeInitialize: n,
        }) {
          Object.defineProperty(this, "iframe", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
            Object.defineProperty(this, "POLLING_INTERVAL_SECONDS", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 1.4,
            }),
            Object.defineProperty(this, "iframeBaseUrl", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.iframeBaseUrl = t);
          let r = document.getElementById(i),
            s = new URL(e);
          if (!r || r.src !== s.href) {
            r = document.createElement("iframe");
            let e = { ...f };
            Object.assign(r.style, e),
              r.setAttribute("id", i),
              r.setAttribute("fetchpriority", "high"),
              a.appendChild(r),
              (r.src = s.href);
            let t = (e) => {
              if ("ewsIframeLoaded" === e.data.eventType) {
                if ((window.removeEventListener("message", t), !r)) {
                  console.warn("thirdweb iFrame not found");
                  return;
                }
                this.onIframeLoadHandler(r, n)();
              }
            };
            window.addEventListener("message", t);
          }
          this.iframe = r;
        }
        async onIframeLoadedInitVariables() {
          return {};
        }
        onIframeLoadHandler(e, t) {
          return async () => {
            let i = new MessageChannel(),
              a = new Promise((a, n) => {
                i.port1.onmessage = (r) => {
                  let { data: s } = r;
                  i.port1.close(),
                    s.success || n(Error(s.error)),
                    I.set(e.src, !0),
                    t && t(),
                    a(!0);
                };
              });
            e?.contentWindow?.postMessage(
              {
                eventType: "initIframe",
                data: await this.onIframeLoadedInitVariables(),
              },
              this.iframeBaseUrl,
              [i.port2]
            ),
              await a;
          };
        }
        async call({ procedureName: e, params: t, showIframe: i = !1 }) {
          for (; !I.get(this.iframe.src); )
            await g(this.POLLING_INTERVAL_SECONDS);
          i && ((this.iframe.style.display = "block"), await g(0.005));
          let a = new MessageChannel(),
            n = new Promise((e, t) => {
              a.port1.onmessage = async (n) => {
                let { data: r } = n;
                a.port1.close(),
                  i && (await g(0.1), (this.iframe.style.display = "none")),
                  r.success ? e(r.data) : t(Error(r.error));
              };
            });
          return (
            this.iframe.contentWindow?.postMessage(
              { eventType: e, data: t },
              this.iframeBaseUrl,
              [a.port2]
            ),
            n
          );
        }
        destroy() {
          I.delete(this.iframe.src);
        }
      }
      class v extends b {
        constructor({ clientId: e, baseUrl: t, ecosystem: i }) {
          super({
            iframeId: L + (i?.id || ""),
            link: (function ({
              clientId: e,
              baseUrl: t,
              path: i,
              ecosystem: a,
              queryParams: n,
            }) {
              let r = new URL(`${i}`, t);
              if (n)
                for (let e of Object.keys(n))
                  r.searchParams.set(e, n[e]?.toString() || "");
              return (
                r.searchParams.set("clientId", e),
                a?.partnerId !== void 0 &&
                  r.searchParams.set("partnerId", a.partnerId),
                a?.id !== void 0 && r.searchParams.set("ecosystemId", a.id),
                r
              );
            })({ clientId: e, path: w.hD, ecosystem: i, baseUrl: t }).href,
            baseUrl: t,
            container: document.body,
          }),
            Object.defineProperty(this, "clientId", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "ecosystem", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.clientId = e),
            (this.ecosystem = i);
        }
        async onIframeLoadedInitVariables() {
          let e = new c.A({
            storage: n.x,
            clientId: this.clientId,
            ecosystemId: this.ecosystem?.id,
          });
          return {
            authCookie: await e.getAuthCookie(),
            deviceShareStored: await e.getDeviceShare(),
            walletUserId: await e.getWalletUserId(),
            clientId: this.clientId,
            partnerId: this.ecosystem?.partnerId,
            ecosystemId: this.ecosystem?.id,
          };
        }
      }
      let L = "thirdweb-in-app-wallet-iframe";
      class W {
        constructor({
          baseUrl: e,
          querier: t,
          preLogin: i,
          postLogin: a,
          client: n,
          ecosystem: r,
        }) {
          Object.defineProperty(this, "LoginQuerier", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
            Object.defineProperty(this, "preLogin", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "postLogin", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "client", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "baseUrl", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "ecosystem", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.baseUrl = e),
            (this.LoginQuerier = t),
            (this.preLogin = i),
            (this.postLogin = a),
            (this.client = n),
            (this.ecosystem = r);
        }
        async sendEmailLoginOtp({ email: e }) {
          return await this.LoginQuerier.call({
            procedureName: "sendThirdwebEmailLoginOtp",
            params: { email: e },
          });
        }
        async sendSmsLoginOtp({ phoneNumber: e }) {
          return await this.LoginQuerier.call({
            procedureName: "sendThirdwebSmsLoginOtp",
            params: { phoneNumber: e },
          });
        }
      }
      class E extends W {
        async authenticateWithModal() {
          return this.LoginQuerier.call({
            procedureName: "loginWithThirdwebModal",
            params: void 0,
            showIframe: !0,
          });
        }
        async loginWithModal() {
          await this.preLogin();
          let e = await this.authenticateWithModal();
          return this.postLogin(e);
        }
        async authenticateWithIframe({ email: e }) {
          return this.LoginQuerier.call({
            procedureName: "loginWithThirdwebModal",
            params: { email: e },
            showIframe: !0,
          });
        }
        async loginWithIframe({ email: e }) {
          await this.preLogin();
          let t = await this.authenticateWithIframe({ email: e });
          return this.postLogin(t);
        }
        async authenticateWithCustomJwt({ encryptionKey: e, jwt: t }) {
          if (!e || 0 === e.length)
            throw Error("Encryption key is required for custom jwt auth");
          return this.LoginQuerier.call({
            procedureName: "loginWithCustomJwt",
            params: { encryptionKey: e, jwt: t },
          });
        }
        async loginWithCustomJwt({ encryptionKey: e, jwt: t }) {
          if (!e || 0 === e.length)
            throw Error("Encryption key is required for custom jwt auth");
          await this.preLogin();
          let i = await this.authenticateWithCustomJwt({
            encryptionKey: e,
            jwt: t,
          });
          return this.postLogin(i);
        }
        async authenticateWithCustomAuthEndpoint({
          encryptionKey: e,
          payload: t,
        }) {
          return this.LoginQuerier.call({
            procedureName: "loginWithCustomAuthEndpoint",
            params: { encryptionKey: e, payload: t },
          });
        }
        async loginWithCustomAuthEndpoint({ encryptionKey: e, payload: t }) {
          if (!e || 0 === e.length)
            throw Error("Encryption key is required for custom auth");
          await this.preLogin();
          let i = await this.authenticateWithCustomAuthEndpoint({
            encryptionKey: e,
            payload: t,
          });
          return this.postLogin(i);
        }
        async authenticateWithEmailOtp({ email: e, otp: t, recoveryCode: i }) {
          return this.LoginQuerier.call({
            procedureName: "verifyThirdwebEmailLoginOtp",
            params: { email: e, otp: t, recoveryCode: i },
          });
        }
        async loginWithEmailOtp({ email: e, otp: t, recoveryCode: i }) {
          let a = await this.authenticateWithEmailOtp({
            email: e,
            otp: t,
            recoveryCode: i,
          });
          return this.postLogin(a);
        }
        async authenticateWithSmsOtp({
          phoneNumber: e,
          otp: t,
          recoveryCode: i,
        }) {
          return this.LoginQuerier.call({
            procedureName: "verifyThirdwebSmsLoginOtp",
            params: { phoneNumber: e, otp: t, recoveryCode: i },
          });
        }
        async loginWithSmsOtp({ phoneNumber: e, otp: t, recoveryCode: i }) {
          let a = await this.authenticateWithSmsOtp({
            phoneNumber: e,
            otp: t,
            recoveryCode: i,
          });
          return this.postLogin(a);
        }
      }
      class O {
        constructor({
          client: e,
          querier: t,
          onAuthSuccess: i,
          ecosystem: a,
          baseUrl: r,
        }) {
          Object.defineProperty(this, "client", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
            Object.defineProperty(this, "AuthQuerier", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "localStorage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "onAuthSuccess", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "BaseLogin", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.client = e),
            (this.AuthQuerier = t),
            (this.localStorage = new c.A({
              storage: n.x,
              clientId: e.clientId,
              ecosystemId: a?.id,
            })),
            (this.onAuthSuccess = i),
            (this.BaseLogin = new E({
              postLogin: async (e) => this.postLogin(e),
              preLogin: async () => {
                await this.preLogin();
              },
              ecosystem: a,
              querier: t,
              client: e,
              baseUrl: r,
            }));
        }
        async preLogin() {
          await this.logout();
        }
        async postLogin({ storedToken: e, walletDetails: t }) {
          return (
            e.shouldStoreCookieString &&
              (await this.localStorage.saveAuthCookie(e.cookieString)),
            await this.onAuthSuccess({ storedToken: e, walletDetails: t })
          );
        }
        async loginWithAuthToken(e, t) {
          await this.preLogin();
          let i = await this.AuthQuerier.call({
            procedureName: "loginWithStoredTokenDetails",
            params: { storedToken: e.storedToken, recoveryCode: t },
          });
          return this.postLogin(i);
        }
        async loginWithModal() {
          return this.BaseLogin.loginWithModal();
        }
        async authenticateWithModal() {
          return this.BaseLogin.authenticateWithModal();
        }
        async loginWithIframe(e) {
          return this.BaseLogin.loginWithIframe(e);
        }
        async authenticateWithIframe(e) {
          return this.BaseLogin.authenticateWithIframe(e);
        }
        async loginWithCustomJwt(e) {
          return this.BaseLogin.loginWithCustomJwt(e);
        }
        async authenticateWithCustomJwt(e) {
          return this.BaseLogin.authenticateWithCustomJwt(e);
        }
        async loginWithCustomAuthEndpoint(e) {
          return this.BaseLogin.loginWithCustomAuthEndpoint(e);
        }
        async authenticateWithCustomAuthEndpoint(e) {
          return this.BaseLogin.authenticateWithCustomAuthEndpoint(e);
        }
        async sendEmailLoginOtp({ email: e }) {
          return this.BaseLogin.sendEmailLoginOtp({ email: e });
        }
        async sendSmsLoginOtp({ phoneNumber: e }) {
          return this.BaseLogin.sendSmsLoginOtp({ phoneNumber: e });
        }
        async loginWithEmailOtp(e) {
          return await this.preLogin(), this.BaseLogin.loginWithEmailOtp(e);
        }
        async authenticateWithEmailOtp(e) {
          return this.BaseLogin.authenticateWithEmailOtp(e);
        }
        async loginWithSmsOtp(e) {
          return await this.preLogin(), this.BaseLogin.loginWithSmsOtp(e);
        }
        async authenticateWithSmsOtp(e) {
          return this.BaseLogin.authenticateWithSmsOtp(e);
        }
        async logout() {
          let { success: e } = await this.AuthQuerier.call({
              procedureName: "logout",
              params: void 0,
            }),
            t = await this.localStorage.removeAuthCookie(),
            i = await this.localStorage.removeWalletUserId();
          return { success: e || t || i };
        }
      }
      var S = i(59416);
      let k = async (e) => {
          let { client: t, ecosystem: i } = e,
            a = (0, s.Z)({ client: t, ecosystem: i, authOption: e.strategy }),
            n = {
              "Content-Type": "application/json",
              "x-client-id": t.clientId,
            };
          i?.id && (n["x-ecosystem-id"] = i.id),
            i?.partnerId && (n["x-ecosystem-partner-id"] = i.partnerId);
          let r = (() => {
              switch (e.strategy) {
                case "email":
                  return { email: e.email };
                case "phone":
                  return { phone: e.phoneNumber };
              }
            })(),
            o = await fetch(a, {
              method: "POST",
              headers: n,
              body: JSON.stringify(r),
            });
          if (!o.ok) throw Error("Failed to send verification code");
          return await o.json();
        },
        A = async (e) => {
          let { client: t, ecosystem: i } = e,
            a = (0, s.o)({
              authOption: e.strategy,
              client: e.client,
              ecosystem: e.ecosystem,
            }),
            n = {
              "Content-Type": "application/json",
              "x-client-id": t.clientId,
            };
          i?.id && (n["x-ecosystem-id"] = i.id),
            i?.partnerId && (n["x-ecosystem-partner-id"] = i.partnerId);
          let r = (() => {
              switch (e.strategy) {
                case "email":
                  return { email: e.email, code: e.verificationCode };
                case "phone":
                  return { phone: e.phoneNumber, code: e.verificationCode };
              }
            })(),
            o = await fetch(a, {
              method: "POST",
              headers: n,
              body: JSON.stringify(r),
            });
          if (!o.ok) throw Error("Failed to verify verification code");
          return await o.json();
        };
      var P = i(95810),
        T = i(8984),
        N = i(98511),
        C = i(4159),
        j = i(75403),
        $ = i(26485);
      let D = async (e, t) => {
        let i = await fetch(
          `${(0, a.TS)(
            "inAppWallet"
          )}/api/2024-05-05/ecosystem-wallet/${e}/partner/${t}`,
          {
            headers: { "x-ecosystem-id": e, "x-ecosystem-partner-id": t || "" },
          }
        );
        return await i.json();
      };
      class _ {
        constructor({ client: e, ecosystem: t, querier: i }) {
          Object.defineProperty(this, "client", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
            Object.defineProperty(this, "ecosystem", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "walletManagerQuerier", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "localStorage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.client = e),
            (this.ecosystem = t),
            (this.walletManagerQuerier = i),
            (this.localStorage = new c.A({
              storage: n.x,
              clientId: e.clientId,
              ecosystemId: t?.id,
            }));
        }
        async postWalletSetUp({
          deviceShareStored: e,
          walletAddress: t,
          isIframeStorageEnabled: i,
          walletUserId: a,
        }) {
          return (
            i || (await this.localStorage.saveDeviceShare(e, a)),
            { walletAddress: t }
          );
        }
        async getUserWalletStatus() {
          let e = await this.walletManagerQuerier.call({
            procedureName: "getUserStatus",
            params: void 0,
          });
          return e.status === y.Nx.LOGGED_IN_WALLET_INITIALIZED
            ? {
                status: y.Nx.LOGGED_IN_WALLET_INITIALIZED,
                ...e.user,
                account: await this.getAccount(),
              }
            : e.status === y.Nx.LOGGED_IN_NEW_DEVICE ||
              e.status === y.Nx.LOGGED_IN_WALLET_UNINITIALIZED
            ? { status: y.Nx.LOGGED_IN_WALLET_UNINITIALIZED, ...e.user }
            : { status: e.status };
        }
        async getAccount() {
          let e = this.walletManagerQuerier,
            t = this.client,
            i = this.ecosystem?.partnerId,
            n = !!this.ecosystem,
            r = this.ecosystem?.partnerId
              ? await D(this.ecosystem.id, this.ecosystem?.partnerId)
              : void 0,
            { address: s } = await e.call({
              procedureName: "getAddress",
              params: void 0,
            }),
            o = async (t) => {
              let s = {
                to: t.to ?? void 0,
                data: t.data,
                value: t.value,
                gasLimit: t.gas,
                nonce: t.nonce,
                chainId: t.chainId,
              };
              t.maxFeePerGas
                ? ((s.accessList = t.accessList),
                  (s.maxFeePerGas = t.maxFeePerGas),
                  (s.maxPriorityFeePerGas = t.maxPriorityFeePerGas),
                  (s.type = 2))
                : ((s.gasPrice = t.gasPrice), (s.type = 0));
              let o = (0, a.gc)().rpc,
                { signedTransaction: c } = await e.call({
                  procedureName: "signTransaction",
                  params: {
                    transaction: s,
                    chainId: t.chainId,
                    partnerId: i,
                    rpcEndpoint: `https://${t.chainId}.${o}`,
                  },
                  showIframe: !r?.permissions.includes("FULL_CONTROL_V1") && n,
                });
              return c;
            };
          return {
            address: (0, C.Kn)(s),
            async signTransaction(e) {
              if (!e.chainId) throw Error("chainId required in tx to sign");
              return o({ ...e, chainId: e.chainId });
            },
            async sendTransaction(e) {
              let i = (0, N.getRpcClient)({
                  client: t,
                  chain: (0, P.XY)(e.chainId),
                }),
                a = await o(e);
              return { transactionHash: await (0, T.n)(i, a) };
            },
            async signMessage({ message: t }) {
              let a =
                  "string" == typeof t
                    ? t
                    : t.raw instanceof Uint8Array
                    ? t.raw
                    : (0, j.rR)(t.raw),
                { signedMessage: s } = await e.call({
                  procedureName: "signMessage",
                  params: { message: a, partnerId: i, chainId: 1 },
                  showIframe: !r?.permissions.includes("FULL_CONTROL_V1") && n,
                });
              return s;
            },
            async signTypedData(t) {
              let s = (0, $.t)(t);
              s.types?.EIP712Domain && (s.types.EIP712Domain = void 0);
              let o = s.domain,
                c = o?.chainId,
                l = {
                  ...(o?.verifyingContract
                    ? { verifyingContract: o?.verifyingContract }
                    : {}),
                  name: o?.name,
                  version: o?.version,
                };
              c && (l.chainId = c);
              let d = (0, a.gc)().rpc,
                { signedTypedData: u } = await e.call({
                  procedureName: "signTypedDataV4",
                  params: {
                    domain: l,
                    types: s.types,
                    message: s.message,
                    chainId: c || 1,
                    partnerId: i,
                    rpcEndpoint: `https://${c}.${d}`,
                  },
                  showIframe: !r?.permissions.includes("FULL_CONTROL_V1") && n,
                });
              return u;
            },
          };
        }
      }
      class x {
        isClientIdLegacyPaper(e) {
          return e.indexOf("-") > 0 && 36 === e.length;
        }
        constructor({
          client: e,
          onAuthSuccess: t,
          ecosystem: i,
          passkeyDomain: n,
        }) {
          if (
            (Object.defineProperty(this, "client", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "querier", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "wallet", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "auth", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "passkeyDomain", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            this.isClientIdLegacyPaper(e.clientId))
          )
            throw Error(
              "You are using a legacy clientId. Please use the clientId found on the thirdweb dashboard settings page"
            );
          let r = (0, a.TS)("inAppWallet");
          (this.client = e),
            (this.passkeyDomain = n),
            (this.querier = new v({
              clientId: e.clientId,
              ecosystem: i,
              baseUrl: r,
            })),
            (this.wallet = new _({
              client: e,
              ecosystem: i,
              querier: this.querier,
            })),
            (this.auth = new O({
              client: e,
              querier: this.querier,
              baseUrl: r,
              ecosystem: i,
              onAuthSuccess: async (e) => (
                t?.(e),
                await this.wallet.postWalletSetUp({
                  ...e.walletDetails,
                  walletUserId: e.storedToken.authDetails.userWalletId,
                }),
                await this.querier.call({
                  procedureName: "initIframe",
                  params: {
                    partnerId: i?.partnerId,
                    ecosystemId: i?.id,
                    deviceShareStored: e.walletDetails.deviceShareStored,
                    clientId: this.client.clientId,
                    walletUserId: e.storedToken.authDetails.userWalletId,
                    authCookie: e.storedToken.cookieString,
                  },
                }),
                {
                  user: {
                    status: y.Nx.LOGGED_IN_WALLET_INITIALIZED,
                    authDetails: e.storedToken.authDetails,
                    account: await this.wallet.getAccount(),
                    walletAddress: e.walletDetails.walletAddress,
                  },
                }
              ),
            }));
        }
        async getUser() {
          return this.wallet.getUserWalletStatus();
        }
        getAccount() {
          return this.wallet.getAccount();
        }
        async preAuthenticate(e) {
          return k({
            ...e,
            client: this.wallet.client,
            ecosystem: this.wallet.ecosystem,
          });
        }
        authenticateWithRedirect(e, t, i) {
          (0, S.Z)({
            authOption: e,
            client: this.wallet.client,
            ecosystem: this.wallet.ecosystem,
            redirectUrl: i,
            mode: t,
          });
        }
        async loginWithAuthToken(e) {
          return this.auth.loginWithAuthToken(e);
        }
        async authenticate(e) {
          let t = e.strategy;
          switch (t) {
            case "email":
            case "phone":
              return A({
                ...e,
                client: this.wallet.client,
                ecosystem: this.wallet.ecosystem,
              });
            case "jwt":
              return this.auth.authenticateWithCustomJwt({
                jwt: e.jwt,
                encryptionKey: e.encryptionKey,
              });
            case "passkey":
              return this.passkeyAuth(e);
            case "auth_endpoint":
              return this.auth.authenticateWithCustomAuthEndpoint({
                payload: e.payload,
                encryptionKey: e.encryptionKey,
              });
            case "iframe_email_verification":
              return this.auth.authenticateWithIframe({ email: e.email });
            case "iframe":
              return this.auth.authenticateWithModal();
            case "apple":
            case "facebook":
            case "google":
            case "telegram":
            case "farcaster":
            case "line":
            case "x":
            case "discord":
              return (0, S.f)({
                authOption: t,
                client: this.wallet.client,
                ecosystem: this.wallet.ecosystem,
                closeOpenedWindow: e.closeOpenedWindow,
                openedWindow: e.openedWindow,
              });
            case "guest":
              return o({
                client: this.wallet.client,
                ecosystem: this.wallet.ecosystem,
              });
            case "wallet":
              return m({
                ecosystem: this.wallet.ecosystem,
                client: this.wallet.client,
                wallet: e.wallet,
                chain: e.chain,
              });
          }
        }
        async connect(e) {
          let t = e.strategy;
          switch (t) {
            case "jwt":
              return this.auth.loginWithCustomJwt({
                jwt: e.jwt,
                encryptionKey: e.encryptionKey,
              });
            case "auth_endpoint":
              return this.auth.loginWithCustomAuthEndpoint({
                payload: e.payload,
                encryptionKey: e.encryptionKey,
              });
            case "iframe_email_verification":
              return this.auth.loginWithIframe({ email: e.email });
            case "iframe":
              return this.auth.loginWithModal();
            case "passkey": {
              let t = await this.passkeyAuth(e);
              return this.loginWithAuthToken(t);
            }
            case "phone":
            case "email":
            case "wallet":
            case "apple":
            case "facebook":
            case "google":
            case "farcaster":
            case "telegram":
            case "line":
            case "x":
            case "guest":
            case "discord": {
              let t = await this.authenticate(e);
              return this.auth.loginWithAuthToken(t);
            }
            default:
              !(function (e, t) {
                throw Error(void 0 ?? `Invalid param: ${e}`);
              })(t);
          }
        }
        async logout() {
          return await this.auth.logout();
        }
        async passkeyAuth(e) {
          let { PasskeyWebClient: t } = await i.e(38642).then(i.bind(i, 38642)),
            a = new t(),
            r = n.x;
          return "sign-up" === e.type
            ? u({
                client: this.wallet.client,
                ecosystem: this.wallet.ecosystem,
                username: e.passkeyName,
                passkeyClient: a,
                storage: r,
                rp: {
                  id: this.passkeyDomain ?? window.location.hostname,
                  name: this.passkeyDomain ?? window.document.title,
                },
              })
            : h({
                client: this.wallet.client,
                ecosystem: this.wallet.ecosystem,
                passkeyClient: a,
                storage: r,
                rp: {
                  id: this.passkeyDomain ?? window.location.hostname,
                  name: this.passkeyDomain ?? window.document.title,
                },
              });
        }
      }
    },
  },
]);
