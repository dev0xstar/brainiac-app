(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4268],
  {
    80085: function (e, t, i) {
      "use strict";
      i.d(t, {
        EthereumProvider: function () {
          return rN;
        },
        OPTIONAL_EVENTS: function () {
          return rb;
        },
        OPTIONAL_METHODS: function () {
          return rw;
        },
      });
      var r = i(17187),
        s = i.n(r),
        n = i(40819),
        a = i(3432),
        o = i(19490),
        c = i(12044),
        h = i(38200);
      class l extends h.q {
        constructor(e) {
          super(), (this.opts = e), (this.protocol = "wc"), (this.version = 2);
        }
      }
      class u extends h.q {
        constructor(e, t) {
          super(),
            (this.core = e),
            (this.logger = t),
            (this.records = new Map());
        }
      }
      class p {
        constructor(e, t) {
          (this.logger = e), (this.core = t);
        }
      }
      class d extends h.q {
        constructor(e, t) {
          super(), (this.relayer = e), (this.logger = t);
        }
      }
      class g extends h.q {
        constructor(e) {
          super();
        }
      }
      class f {
        constructor(e, t, i, r) {
          (this.core = e), (this.logger = t), (this.name = i);
        }
      }
      class y extends h.q {
        constructor(e, t) {
          super(), (this.relayer = e), (this.logger = t);
        }
      }
      class m extends h.q {
        constructor(e, t) {
          super(), (this.core = e), (this.logger = t);
        }
      }
      class v {
        constructor(e, t, i) {
          (this.core = e), (this.logger = t), (this.store = i);
        }
      }
      class w {
        constructor(e, t) {
          (this.projectId = e), (this.logger = t);
        }
      }
      class _ {
        constructor(e, t, i) {
          (this.core = e), (this.logger = t), (this.telemetryEnabled = i);
        }
      }
      class b {
        constructor(e) {
          (this.opts = e), (this.protocol = "wc"), (this.version = 2);
        }
      }
      class E {
        constructor(e) {
          this.client = e;
        }
      }
      var I = i(85094),
        P = i(80487),
        S = i(21236),
        C = i(59800),
        R = i(66736),
        T = i(64534),
        x = i(56186),
        O = i(28939),
        A = i(72307),
        q = i.n(A),
        D = i(34155),
        N = function (e, t) {
          if (e.length >= 255) throw TypeError("Alphabet too long");
          for (var i = new Uint8Array(256), r = 0; r < i.length; r++)
            i[r] = 255;
          for (var s = 0; s < e.length; s++) {
            var n = e.charAt(s),
              a = n.charCodeAt(0);
            if (255 !== i[a]) throw TypeError(n + " is ambiguous");
            i[a] = s;
          }
          var o = e.length,
            c = e.charAt(0),
            h = Math.log(o) / Math.log(256),
            l = Math.log(256) / Math.log(o);
          function u(e) {
            if ("string" != typeof e) throw TypeError("Expected String");
            if (0 === e.length) return new Uint8Array();
            var t = 0;
            if (" " !== e[0]) {
              for (var r = 0, s = 0; e[t] === c; ) r++, t++;
              for (
                var n = ((e.length - t) * h + 1) >>> 0, a = new Uint8Array(n);
                e[t];

              ) {
                var l = i[e.charCodeAt(t)];
                if (255 === l) return;
                for (
                  var u = 0, p = n - 1;
                  (0 !== l || u < s) && -1 !== p;
                  p--, u++
                )
                  (l += (o * a[p]) >>> 0),
                    (a[p] = l % 256 >>> 0),
                    (l = (l / 256) >>> 0);
                if (0 !== l) throw Error("Non-zero carry");
                (s = u), t++;
              }
              if (" " !== e[t]) {
                for (var d = n - s; d !== n && 0 === a[d]; ) d++;
                for (var g = new Uint8Array(r + (n - d)), f = r; d !== n; )
                  g[f++] = a[d++];
                return g;
              }
            }
          }
          return {
            encode: function (t) {
              if (
                (t instanceof Uint8Array ||
                  (ArrayBuffer.isView(t)
                    ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                    : Array.isArray(t) && (t = Uint8Array.from(t))),
                !(t instanceof Uint8Array))
              )
                throw TypeError("Expected Uint8Array");
              if (0 === t.length) return "";
              for (
                var i = 0, r = 0, s = 0, n = t.length;
                s !== n && 0 === t[s];

              )
                s++, i++;
              for (
                var a = ((n - s) * l + 1) >>> 0, h = new Uint8Array(a);
                s !== n;

              ) {
                for (
                  var u = t[s], p = 0, d = a - 1;
                  (0 !== u || p < r) && -1 !== d;
                  d--, p++
                )
                  (u += (256 * h[d]) >>> 0),
                    (h[d] = u % o >>> 0),
                    (u = (u / o) >>> 0);
                if (0 !== u) throw Error("Non-zero carry");
                (r = p), s++;
              }
              for (var g = a - r; g !== a && 0 === h[g]; ) g++;
              for (var f = c.repeat(i); g < a; ++g) f += e.charAt(h[g]);
              return f;
            },
            decodeUnsafe: u,
            decode: function (e) {
              var i = u(e);
              if (i) return i;
              throw Error(`Non-${t} character`);
            },
          };
        };
      let k = (e) => {
          if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name)
            return e;
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (ArrayBuffer.isView(e))
            return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          throw Error("Unknown type, must be binary type");
        },
        M = (e) => new TextEncoder().encode(e),
        $ = (e) => new TextDecoder().decode(e);
      class j {
        constructor(e, t, i) {
          (this.name = e), (this.prefix = t), (this.baseEncode = i);
        }
        encode(e) {
          if (e instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(e)}`;
          throw Error("Unknown type, must be binary type");
        }
      }
      class L {
        constructor(e, t, i) {
          if (((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0)))
            throw Error("Invalid prefix character");
          (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = i);
        }
        decode(e) {
          if ("string" == typeof e) {
            if (e.codePointAt(0) !== this.prefixCodePoint)
              throw Error(
                `Unable to decode multibase string ${JSON.stringify(e)}, ${
                  this.name
                } decoder only supports inputs prefixed with ${this.prefix}`
              );
            return this.baseDecode(e.slice(this.prefix.length));
          }
          throw Error("Can only multibase decode strings");
        }
        or(e) {
          return z(this, e);
        }
      }
      class U {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return z(this, e);
        }
        decode(e) {
          let t = e[0],
            i = this.decoders[t];
          if (i) return i.decode(e);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(
              e
            )}, only inputs prefixed with ${Object.keys(
              this.decoders
            )} are supported`
          );
        }
      }
      let z = (e, t) =>
        new U({
          ...(e.decoders || { [e.prefix]: e }),
          ...(t.decoders || { [t.prefix]: t }),
        });
      class H {
        constructor(e, t, i, r) {
          (this.name = e),
            (this.prefix = t),
            (this.baseEncode = i),
            (this.baseDecode = r),
            (this.encoder = new j(e, t, i)),
            (this.decoder = new L(e, t, r));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      let K = ({ name: e, prefix: t, encode: i, decode: r }) =>
          new H(e, t, i, r),
        V = ({ prefix: e, name: t, alphabet: i }) => {
          let { encode: r, decode: s } = N(i, t);
          return K({ prefix: e, name: t, encode: r, decode: (e) => k(s(e)) });
        },
        F = (e, t, i, r) => {
          let s = {};
          for (let e = 0; e < t.length; ++e) s[t[e]] = e;
          let n = e.length;
          for (; "=" === e[n - 1]; ) --n;
          let a = new Uint8Array(((n * i) / 8) | 0),
            o = 0,
            c = 0,
            h = 0;
          for (let t = 0; t < n; ++t) {
            let n = s[e[t]];
            if (void 0 === n) throw SyntaxError(`Non-${r} character`);
            (c = (c << i) | n),
              (o += i) >= 8 && ((o -= 8), (a[h++] = 255 & (c >> o)));
          }
          if (o >= i || 255 & (c << (8 - o)))
            throw SyntaxError("Unexpected end of data");
          return a;
        },
        B = (e, t, i) => {
          let r = "=" === t[t.length - 1],
            s = (1 << i) - 1,
            n = "",
            a = 0,
            o = 0;
          for (let r = 0; r < e.length; ++r)
            for (o = (o << 8) | e[r], a += 8; a > i; )
              (a -= i), (n += t[s & (o >> a)]);
          if ((a && (n += t[s & (o << (i - a))]), r))
            for (; (n.length * i) & 7; ) n += "=";
          return n;
        },
        J = ({ name: e, prefix: t, bitsPerChar: i, alphabet: r }) =>
          K({
            prefix: t,
            name: e,
            encode: (e) => B(e, r, i),
            decode: (t) => F(t, r, i, e),
          });
      var G = Object.freeze({
          __proto__: null,
          identity: K({
            prefix: "\x00",
            name: "identity",
            encode: (e) => $(e),
            decode: (e) => M(e),
          }),
        }),
        W = Object.freeze({
          __proto__: null,
          base2: J({
            prefix: "0",
            name: "base2",
            alphabet: "01",
            bitsPerChar: 1,
          }),
        }),
        Q = Object.freeze({
          __proto__: null,
          base8: J({
            prefix: "7",
            name: "base8",
            alphabet: "01234567",
            bitsPerChar: 3,
          }),
        }),
        Y = Object.freeze({
          __proto__: null,
          base10: V({ prefix: "9", name: "base10", alphabet: "0123456789" }),
        }),
        Z = Object.freeze({
          __proto__: null,
          base16: J({
            prefix: "f",
            name: "base16",
            alphabet: "0123456789abcdef",
            bitsPerChar: 4,
          }),
          base16upper: J({
            prefix: "F",
            name: "base16upper",
            alphabet: "0123456789ABCDEF",
            bitsPerChar: 4,
          }),
        });
      let X = J({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5,
        }),
        ee = J({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5,
        }),
        et = J({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5,
        }),
        ei = J({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5,
        }),
        er = J({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5,
        }),
        es = J({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5,
        });
      var en = Object.freeze({
          __proto__: null,
          base32: X,
          base32upper: ee,
          base32pad: et,
          base32padupper: ei,
          base32hex: er,
          base32hexupper: es,
          base32hexpad: J({
            prefix: "t",
            name: "base32hexpad",
            alphabet: "0123456789abcdefghijklmnopqrstuv=",
            bitsPerChar: 5,
          }),
          base32hexpadupper: J({
            prefix: "T",
            name: "base32hexpadupper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
            bitsPerChar: 5,
          }),
          base32z: J({
            prefix: "h",
            name: "base32z",
            alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
            bitsPerChar: 5,
          }),
        }),
        ea = Object.freeze({
          __proto__: null,
          base36: V({
            prefix: "k",
            name: "base36",
            alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
          }),
          base36upper: V({
            prefix: "K",
            name: "base36upper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
          }),
        }),
        eo = Object.freeze({
          __proto__: null,
          base58btc: V({
            name: "base58btc",
            prefix: "z",
            alphabet:
              "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
          }),
          base58flickr: V({
            name: "base58flickr",
            prefix: "Z",
            alphabet:
              "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
          }),
        });
      let ec = J({
        prefix: "m",
        name: "base64",
        alphabet:
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        bitsPerChar: 6,
      });
      var eh = Object.freeze({
        __proto__: null,
        base64: ec,
        base64pad: J({
          prefix: "M",
          name: "base64pad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6,
        }),
        base64url: J({
          prefix: "u",
          name: "base64url",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6,
        }),
        base64urlpad: J({
          prefix: "U",
          name: "base64urlpad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6,
        }),
      });
      let el = Array.from(
          "\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"
        ),
        eu = el.reduce((e, t, i) => ((e[i] = t), e), []),
        ep = el.reduce((e, t, i) => ((e[t.codePointAt(0)] = i), e), []);
      var ed = Object.freeze({
          __proto__: null,
          base256emoji: K({
            prefix: "\uD83D\uDE80",
            name: "base256emoji",
            encode: function (e) {
              return e.reduce((e, t) => (e += eu[t]), "");
            },
            decode: function (e) {
              let t = [];
              for (let i of e) {
                let e = ep[i.codePointAt(0)];
                if (void 0 === e)
                  throw Error(`Non-base256emoji character: ${i}`);
                t.push(e);
              }
              return new Uint8Array(t);
            },
          }),
        }),
        eg = {
          encode: function e(t, i, r) {
            (i = i || []), (r = r || 0);
            for (var s = r; t >= 2147483648; )
              (i[r++] = (255 & t) | 128), (t /= 128);
            for (; -128 & t; ) (i[r++] = (255 & t) | 128), (t >>>= 7);
            return (i[r] = 0 | t), (e.bytes = r - s + 1), i;
          },
          decode: function e(t, i) {
            var r,
              s = 0,
              i = i || 0,
              n = 0,
              a = i,
              o = t.length;
            do {
              if (a >= o)
                throw ((e.bytes = 0), RangeError("Could not decode varint"));
              (r = t[a++]),
                (s += n < 28 ? (127 & r) << n : (127 & r) * Math.pow(2, n)),
                (n += 7);
            } while (r >= 128);
            return (e.bytes = a - i), s;
          },
          encodingLength: function (e) {
            return e < 128
              ? 1
              : e < 16384
              ? 2
              : e < 2097152
              ? 3
              : e < 268435456
              ? 4
              : e < 34359738368
              ? 5
              : e < 4398046511104
              ? 6
              : e < 562949953421312
              ? 7
              : e < 72057594037927940
              ? 8
              : e < 0x7fffffffffffffff
              ? 9
              : 10;
          },
        };
      let ef = (e, t, i = 0) => (eg.encode(e, t, i), t),
        ey = (e) => eg.encodingLength(e),
        em = (e, t) => {
          let i = t.byteLength,
            r = ey(e),
            s = r + ey(i),
            n = new Uint8Array(s + i);
          return ef(e, n, 0), ef(i, n, r), n.set(t, s), new ev(e, i, t, n);
        };
      class ev {
        constructor(e, t, i, r) {
          (this.code = e), (this.size = t), (this.digest = i), (this.bytes = r);
        }
      }
      let ew = ({ name: e, code: t, encode: i }) => new e_(e, t, i);
      class e_ {
        constructor(e, t, i) {
          (this.name = e), (this.code = t), (this.encode = i);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            let t = this.encode(e);
            return t instanceof Uint8Array
              ? em(this.code, t)
              : t.then((e) => em(this.code, e));
          }
          throw Error("Unknown type, must be binary type");
        }
      }
      let eb = (e) => async (t) =>
        new Uint8Array(await crypto.subtle.digest(e, t));
      var eE = Object.freeze({
          __proto__: null,
          sha256: ew({ name: "sha2-256", code: 18, encode: eb("SHA-256") }),
          sha512: ew({ name: "sha2-512", code: 19, encode: eb("SHA-512") }),
        }),
        eI = Object.freeze({
          __proto__: null,
          identity: {
            code: 0,
            name: "identity",
            encode: k,
            digest: (e) => em(0, k(e)),
          },
        });
      new TextEncoder(), new TextDecoder();
      let eP = {
        ...G,
        ...W,
        ...Q,
        ...Y,
        ...Z,
        ...en,
        ...ea,
        ...eo,
        ...eh,
        ...ed,
      };
      function eS(e, t, i, r) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: i },
          decoder: { decode: r },
        };
      }
      ({ ...eE, ...eI });
      let eC = eS(
          "utf8",
          "u",
          (e) => "u" + new TextDecoder("utf8").decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        eR = eS(
          "ascii",
          "a",
          (e) => {
            let t = "a";
            for (let i = 0; i < e.length; i++) t += String.fromCharCode(e[i]);
            return t;
          },
          (e) => {
            let t = (function (e = 0) {
              return null != globalThis.Buffer &&
                null != globalThis.Buffer.allocUnsafe
                ? globalThis.Buffer.allocUnsafe(e)
                : new Uint8Array(e);
            })((e = e.substring(1)).length);
            for (let i = 0; i < e.length; i++) t[i] = e.charCodeAt(i);
            return t;
          }
        ),
        eT = {
          utf8: eC,
          "utf-8": eC,
          hex: eP.base16,
          latin1: eR,
          ascii: eR,
          binary: eR,
          ...eP,
        },
        ex = "core",
        eO = `wc@2:${ex}:`,
        eA = { logger: "error" },
        eq = { database: ":memory:" },
        eD = "client_ed25519_seed",
        eN = R.ONE_DAY,
        ek = R.SIX_HOURS,
        eM = "wss://relay.walletconnect.org",
        e$ = {
          message: "relayer_message",
          message_ack: "relayer_message_ack",
          connect: "relayer_connect",
          disconnect: "relayer_disconnect",
          error: "relayer_error",
          connection_stalled: "relayer_connection_stalled",
          publish: "relayer_publish",
        },
        ej = {
          payload: "payload",
          connect: "connect",
          disconnect: "disconnect",
          error: "error",
        },
        eL = "2.16.1",
        eU = { link_mode: "link_mode", relay: "relay" },
        ez = "WALLETCONNECT_LINK_MODE_APPS",
        eH = {
          created: "subscription_created",
          deleted: "subscription_deleted",
          sync: "subscription_sync",
          resubscribed: "subscription_resubscribed",
        },
        eK = 1e3 * R.FIVE_SECONDS,
        eV = {
          wc_pairingDelete: {
            req: { ttl: R.ONE_DAY, prompt: !1, tag: 1e3 },
            res: { ttl: R.ONE_DAY, prompt: !1, tag: 1001 },
          },
          wc_pairingPing: {
            req: { ttl: R.THIRTY_SECONDS, prompt: !1, tag: 1002 },
            res: { ttl: R.THIRTY_SECONDS, prompt: !1, tag: 1003 },
          },
          unregistered_method: {
            req: { ttl: R.ONE_DAY, prompt: !1, tag: 0 },
            res: { ttl: R.ONE_DAY, prompt: !1, tag: 0 },
          },
        },
        eF = {
          create: "pairing_create",
          expire: "pairing_expire",
          delete: "pairing_delete",
          ping: "pairing_ping",
        },
        eB = {
          created: "history_created",
          updated: "history_updated",
          deleted: "history_deleted",
          sync: "history_sync",
        },
        eJ = {
          created: "expirer_created",
          deleted: "expirer_deleted",
          expired: "expirer_expired",
          sync: "expirer_sync",
        },
        eG = "https://verify.walletconnect.org",
        eW = `${eG}/v3`,
        eQ = ["https://verify.walletconnect.com", eG],
        eY = {
          pairing_started: "pairing_started",
          pairing_uri_validation_success: "pairing_uri_validation_success",
          pairing_uri_not_expired: "pairing_uri_not_expired",
          store_new_pairing: "store_new_pairing",
          subscribing_pairing_topic: "subscribing_pairing_topic",
          subscribe_pairing_topic_success: "subscribe_pairing_topic_success",
          existing_pairing: "existing_pairing",
          pairing_not_expired: "pairing_not_expired",
          emit_inactive_pairing: "emit_inactive_pairing",
          emit_session_proposal: "emit_session_proposal",
        },
        eZ = {
          no_internet_connection: "no_internet_connection",
          malformed_pairing_uri: "malformed_pairing_uri",
          active_pairing_already_exists: "active_pairing_already_exists",
          subscribe_pairing_topic_failure: "subscribe_pairing_topic_failure",
          pairing_expired: "pairing_expired",
          proposal_listener_not_found: "proposal_listener_not_found",
        },
        eX = {
          session_approve_started: "session_approve_started",
          session_namespaces_validation_success:
            "session_namespaces_validation_success",
          subscribing_session_topic: "subscribing_session_topic",
          subscribe_session_topic_success: "subscribe_session_topic_success",
          publishing_session_approve: "publishing_session_approve",
          session_approve_publish_success: "session_approve_publish_success",
          store_session: "store_session",
          publishing_session_settle: "publishing_session_settle",
          session_settle_publish_success: "session_settle_publish_success",
        },
        e0 = {
          no_internet_connection: "no_internet_connection",
          proposal_expired: "proposal_expired",
          subscribe_session_topic_failure: "subscribe_session_topic_failure",
          session_approve_publish_failure: "session_approve_publish_failure",
          session_settle_publish_failure: "session_settle_publish_failure",
          session_approve_namespace_validation_failure:
            "session_approve_namespace_validation_failure",
          proposal_not_found: "proposal_not_found",
        },
        e1 = {
          authenticated_session_approve_started:
            "authenticated_session_approve_started",
          create_authenticated_session_topic:
            "create_authenticated_session_topic",
          cacaos_verified: "cacaos_verified",
          store_authenticated_session: "store_authenticated_session",
          subscribing_authenticated_session_topic:
            "subscribing_authenticated_session_topic",
          subscribe_authenticated_session_topic_success:
            "subscribe_authenticated_session_topic_success",
          publishing_authenticated_session_approve:
            "publishing_authenticated_session_approve",
        },
        e2 = {
          no_internet_connection: "no_internet_connection",
          invalid_cacao: "invalid_cacao",
          subscribe_authenticated_session_topic_failure:
            "subscribe_authenticated_session_topic_failure",
          authenticated_session_approve_publish_failure:
            "authenticated_session_approve_publish_failure",
          authenticated_session_pending_request_not_found:
            "authenticated_session_pending_request_not_found",
        };
      class e3 {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            (this.keychain = new Map()),
            (this.name = "keychain"),
            (this.version = "0.3"),
            (this.initialized = !1),
            (this.storagePrefix = eO),
            (this.init = async () => {
              if (!this.initialized) {
                let e = await this.getKeyChain();
                "u" > typeof e && (this.keychain = e), (this.initialized = !0);
              }
            }),
            (this.has = (e) => (this.isInitialized(), this.keychain.has(e))),
            (this.set = async (e, t) => {
              this.isInitialized(),
                this.keychain.set(e, t),
                await this.persist();
            }),
            (this.get = (e) => {
              this.isInitialized();
              let t = this.keychain.get(e);
              if (typeof t > "u") {
                let { message: t } = (0, S.kCb)(
                  "NO_MATCHING_KEY",
                  `${this.name}: ${e}`
                );
                throw Error(t);
              }
              return t;
            }),
            (this.del = async (e) => {
              this.isInitialized(),
                this.keychain.delete(e),
                await this.persist();
            }),
            (this.core = e),
            (this.logger = (0, c.Ep)(t, this.name));
        }
        get context() {
          return (0, c.Fd)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        async setKeyChain(e) {
          await this.core.storage.setItem(this.storageKey, (0, S.KCv)(e));
        }
        async getKeyChain() {
          let e = await this.core.storage.getItem(this.storageKey);
          return "u" > typeof e ? (0, S.IPd)(e) : void 0;
        }
        async persist() {
          await this.setKeyChain(this.keychain);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, S.kCb)("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      class e8 {
        constructor(e, t, i) {
          (this.core = e),
            (this.logger = t),
            (this.name = "crypto"),
            (this.randomSessionIdentifier = (0, S.jdp)()),
            (this.initialized = !1),
            (this.init = async () => {
              this.initialized ||
                (await this.keychain.init(), (this.initialized = !0));
            }),
            (this.hasKeys = (e) => (
              this.isInitialized(), this.keychain.has(e)
            )),
            (this.getClientId = async () => {
              this.isInitialized();
              let e = await this.getClientSeed(),
                t = P.generateKeyPair(e);
              return P.encodeIss(t.publicKey);
            }),
            (this.generateKeyPair = () => {
              this.isInitialized();
              let e = (0, S.Au2)();
              return this.setPrivateKey(e.publicKey, e.privateKey);
            }),
            (this.signJWT = async (e) => {
              this.isInitialized();
              let t = await this.getClientSeed(),
                i = P.generateKeyPair(t),
                r = this.randomSessionIdentifier;
              return await P.signJWT(r, e, eN, i);
            }),
            (this.generateSharedKey = (e, t, i) => {
              this.isInitialized();
              let r = this.getPrivateKey(e),
                s = (0, S.m$A)(r, t);
              return this.setSymKey(s, i);
            }),
            (this.setSymKey = async (e, t) => {
              this.isInitialized();
              let i = t || (0, S.YmJ)(e);
              return await this.keychain.set(i, e), i;
            }),
            (this.deleteKeyPair = async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            (this.deleteSymKey = async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            (this.encode = async (e, t, i) => {
              this.isInitialized();
              let r = (0, S.ENt)(i),
                s = (0, I.u)(t);
              if ((0, S.Hs$)(r)) return (0, S.Spz)(s, i?.encoding);
              if ((0, S.Q8x)(r)) {
                let t = r.senderPublicKey,
                  i = r.receiverPublicKey;
                e = await this.generateSharedKey(t, i);
              }
              let n = this.getSymKey(e),
                { type: a, senderPublicKey: o } = r;
              return (0, S.HIp)({
                type: a,
                symKey: n,
                message: s,
                senderPublicKey: o,
                encoding: i?.encoding,
              });
            }),
            (this.decode = async (e, t, i) => {
              this.isInitialized();
              let r = (0, S.Llj)(t, i);
              if ((0, S.Hs$)(r)) {
                let e = (0, S.xQU)(t, i?.encoding);
                return (0, I.D)(e);
              }
              if ((0, S.Q8x)(r)) {
                let t = r.receiverPublicKey,
                  i = r.senderPublicKey;
                e = await this.generateSharedKey(t, i);
              }
              try {
                let r = this.getSymKey(e),
                  s = (0, S.peR)({
                    symKey: r,
                    encoded: t,
                    encoding: i?.encoding,
                  });
                return (0, I.D)(s);
              } catch (t) {
                this.logger.error(
                  `Failed to decode message from topic: '${e}', clientId: '${await this.getClientId()}'`
                ),
                  this.logger.error(t);
              }
            }),
            (this.getPayloadType = (e, t = S.$dT) => {
              let i = (0, S.vBi)({ encoded: e, encoding: t });
              return (0, S.WGe)(i.type);
            }),
            (this.getPayloadSenderPublicKey = (e, t = S.$dT) => {
              let i = (0, S.vBi)({ encoded: e, encoding: t });
              return i.senderPublicKey
                ? (0, C.BB)(i.senderPublicKey, S.AWt)
                : void 0;
            }),
            (this.core = e),
            (this.logger = (0, c.Ep)(t, this.name)),
            (this.keychain = i || new e3(this.core, this.logger));
        }
        get context() {
          return (0, c.Fd)(this.logger);
        }
        async setPrivateKey(e, t) {
          return await this.keychain.set(e, t), e;
        }
        getPrivateKey(e) {
          return this.keychain.get(e);
        }
        async getClientSeed() {
          let e = "";
          try {
            e = this.keychain.get(eD);
          } catch {
            (e = (0, S.jdp)()), await this.keychain.set(eD, e);
          }
          return (function (e, t = "utf8") {
            let i = eT[t];
            if (!i) throw Error(`Unsupported encoding "${t}"`);
            return ("utf8" === t || "utf-8" === t) &&
              null != globalThis.Buffer &&
              null != globalThis.Buffer.from
              ? globalThis.Buffer.from(e, "utf8")
              : i.decoder.decode(`${i.prefix}${e}`);
          })(e, "base16");
        }
        getSymKey(e) {
          return this.keychain.get(e);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, S.kCb)("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      class e4 extends p {
        constructor(e, t) {
          super(e, t),
            (this.logger = e),
            (this.core = t),
            (this.messages = new Map()),
            (this.name = "messages"),
            (this.version = "0.3"),
            (this.initialized = !1),
            (this.storagePrefix = eO),
            (this.init = async () => {
              if (!this.initialized) {
                this.logger.trace("Initialized");
                try {
                  let e = await this.getRelayerMessages();
                  "u" > typeof e && (this.messages = e),
                    this.logger.debug(
                      `Successfully Restored records for ${this.name}`
                    ),
                    this.logger.trace({
                      type: "method",
                      method: "restore",
                      size: this.messages.size,
                    });
                } catch (e) {
                  this.logger.debug(
                    `Failed to Restore records for ${this.name}`
                  ),
                    this.logger.error(e);
                } finally {
                  this.initialized = !0;
                }
              }
            }),
            (this.set = async (e, t) => {
              this.isInitialized();
              let i = (0, S.rjm)(t),
                r = this.messages.get(e);
              return (
                typeof r > "u" && (r = {}),
                "u" > typeof r[i] ||
                  ((r[i] = t), this.messages.set(e, r), await this.persist()),
                i
              );
            }),
            (this.get = (e) => {
              this.isInitialized();
              let t = this.messages.get(e);
              return typeof t > "u" && (t = {}), t;
            }),
            (this.has = (e, t) => (
              this.isInitialized(), "u" > typeof this.get(e)[(0, S.rjm)(t)]
            )),
            (this.del = async (e) => {
              this.isInitialized(),
                this.messages.delete(e),
                await this.persist();
            }),
            (this.logger = (0, c.Ep)(e, this.name)),
            (this.core = t);
        }
        get context() {
          return (0, c.Fd)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        async setRelayerMessages(e) {
          await this.core.storage.setItem(this.storageKey, (0, S.KCv)(e));
        }
        async getRelayerMessages() {
          let e = await this.core.storage.getItem(this.storageKey);
          return "u" > typeof e ? (0, S.IPd)(e) : void 0;
        }
        async persist() {
          await this.setRelayerMessages(this.messages);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, S.kCb)("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      class e5 extends d {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            (this.events = new r.EventEmitter()),
            (this.name = "publisher"),
            (this.queue = new Map()),
            (this.publishTimeout = (0, R.toMiliseconds)(R.ONE_MINUTE)),
            (this.failedPublishTimeout = (0, R.toMiliseconds)(R.ONE_SECOND)),
            (this.needsTransportRestart = !1),
            (this.publish = async (e, t, i) => {
              var r;
              this.logger.debug("Publishing Payload"),
                this.logger.trace({
                  type: "method",
                  method: "publish",
                  params: { topic: e, message: t, opts: i },
                });
              let s = i?.ttl || ek,
                n = (0, S._HE)(i),
                a = i?.prompt || !1,
                o = i?.tag || 0,
                c = i?.id || (0, x.getBigIntRpcId)().toString(),
                h = {
                  topic: e,
                  message: t,
                  opts: {
                    ttl: s,
                    relay: n,
                    prompt: a,
                    tag: o,
                    id: c,
                    attestation: i?.attestation,
                  },
                },
                l = `Failed to publish payload, please try again. id:${c} tag:${o}`,
                u = Date.now(),
                p,
                d = 1;
              try {
                for (; void 0 === p; ) {
                  if (Date.now() - u > this.publishTimeout) throw Error(l);
                  this.logger.trace(
                    { id: c, attempts: d },
                    `publisher.publish - attempt ${d}`
                  ),
                    (p = await await (0, S.hFY)(
                      this.rpcPublish(
                        e,
                        t,
                        s,
                        n,
                        a,
                        o,
                        c,
                        i?.attestation
                      ).catch((e) => this.logger.warn(e)),
                      this.publishTimeout,
                      l
                    )),
                    d++,
                    p ||
                      (await new Promise((e) =>
                        setTimeout(e, this.failedPublishTimeout)
                      ));
                }
                this.relayer.events.emit(e$.publish, h),
                  this.logger.debug("Successfully Published Payload"),
                  this.logger.trace({
                    type: "method",
                    method: "publish",
                    params: { id: c, topic: e, message: t, opts: i },
                  });
              } catch (e) {
                if (
                  (this.logger.debug("Failed to Publish Payload"),
                  this.logger.error(e),
                  null != (r = i?.internal) && r.throwOnFailedPublish)
                )
                  throw e;
                this.queue.set(c, h);
              }
            }),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.relayer = e),
            (this.logger = (0, c.Ep)(t, this.name)),
            this.registerEventListeners();
        }
        get context() {
          return (0, c.Fd)(this.logger);
        }
        rpcPublish(e, t, i, r, s, n, a, o) {
          var c, h, l, u;
          let p = {
            method: (0, S.cOS)(r.protocol).publish,
            params: {
              topic: e,
              message: t,
              ttl: i,
              prompt: s,
              tag: n,
              attestation: o,
            },
            id: a,
          };
          return (
            (0, S.o8e)(null == (c = p.params) ? void 0 : c.prompt) &&
              (null == (h = p.params) || delete h.prompt),
            (0, S.o8e)(null == (l = p.params) ? void 0 : l.tag) &&
              (null == (u = p.params) || delete u.tag),
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "message",
              direction: "outgoing",
              request: p,
            }),
            this.relayer.request(p)
          );
        }
        removeRequestFromQueue(e) {
          this.queue.delete(e);
        }
        checkQueue() {
          this.queue.forEach(async (e) => {
            let { topic: t, message: i, opts: r } = e;
            await this.publish(t, i, r);
          });
        }
        registerEventListeners() {
          this.relayer.core.heartbeat.on(o.Lx.pulse, () => {
            if (this.needsTransportRestart) {
              (this.needsTransportRestart = !1),
                this.relayer.events.emit(e$.connection_stalled);
              return;
            }
            this.checkQueue();
          }),
            this.relayer.on(e$.message_ack, (e) => {
              this.removeRequestFromQueue(e.id.toString());
            });
        }
      }
      class e6 {
        constructor() {
          (this.map = new Map()),
            (this.set = (e, t) => {
              let i = this.get(e);
              this.exists(e, t) || this.map.set(e, [...i, t]);
            }),
            (this.get = (e) => this.map.get(e) || []),
            (this.exists = (e, t) => this.get(e).includes(t)),
            (this.delete = (e, t) => {
              if (typeof t > "u") {
                this.map.delete(e);
                return;
              }
              if (!this.map.has(e)) return;
              let i = this.get(e);
              if (!this.exists(e, t)) return;
              let r = i.filter((e) => e !== t);
              if (!r.length) {
                this.map.delete(e);
                return;
              }
              this.map.set(e, r);
            }),
            (this.clear = () => {
              this.map.clear();
            });
        }
        get topics() {
          return Array.from(this.map.keys());
        }
      }
      var e9 = Object.defineProperty,
        e7 = Object.defineProperties,
        te = Object.getOwnPropertyDescriptors,
        tt = Object.getOwnPropertySymbols,
        ti = Object.prototype.hasOwnProperty,
        tr = Object.prototype.propertyIsEnumerable,
        ts = (e, t, i) =>
          t in e
            ? e9(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        tn = (e, t) => {
          for (var i in t || (t = {})) ti.call(t, i) && ts(e, i, t[i]);
          if (tt) for (var i of tt(t)) tr.call(t, i) && ts(e, i, t[i]);
          return e;
        },
        ta = (e, t) => e7(e, te(t));
      class to extends y {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            (this.subscriptions = new Map()),
            (this.topicMap = new e6()),
            (this.events = new r.EventEmitter()),
            (this.name = "subscription"),
            (this.version = "0.3"),
            (this.pending = new Map()),
            (this.cached = []),
            (this.initialized = !1),
            (this.pendingSubscriptionWatchLabel = "pending_sub_watch_label"),
            (this.pollingInterval = 20),
            (this.storagePrefix = eO),
            (this.subscribeTimeout = (0, R.toMiliseconds)(R.ONE_MINUTE)),
            (this.restartInProgress = !1),
            (this.batchSubscribeTopicsLimit = 500),
            (this.pendingBatchMessages = []),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                this.registerEventListeners(),
                (this.clientId = await this.relayer.core.crypto.getClientId()),
                await this.restore()),
                (this.initialized = !0);
            }),
            (this.subscribe = async (e, t) => {
              this.isInitialized(),
                this.logger.debug("Subscribing Topic"),
                this.logger.trace({
                  type: "method",
                  method: "subscribe",
                  params: { topic: e, opts: t },
                });
              try {
                let i = (0, S._HE)(t),
                  r = { topic: e, relay: i, transportType: t?.transportType };
                this.pending.set(e, r);
                let s = await this.rpcSubscribe(e, i, t?.transportType);
                return (
                  "string" == typeof s &&
                    (this.onSubscribe(s, r),
                    this.logger.debug("Successfully Subscribed Topic"),
                    this.logger.trace({
                      type: "method",
                      method: "subscribe",
                      params: { topic: e, opts: t },
                    })),
                  s
                );
              } catch (e) {
                throw (
                  (this.logger.debug("Failed to Subscribe Topic"),
                  this.logger.error(e),
                  e)
                );
              }
            }),
            (this.unsubscribe = async (e, t) => {
              await this.restartToComplete(),
                this.isInitialized(),
                "u" > typeof t?.id
                  ? await this.unsubscribeById(e, t.id, t)
                  : await this.unsubscribeByTopic(e, t);
            }),
            (this.isSubscribed = async (e) => {
              if (this.topics.includes(e)) return !0;
              let t = `${this.pendingSubscriptionWatchLabel}_${e}`;
              return await new Promise((i, r) => {
                let s = new R.Watch();
                s.start(t);
                let n = setInterval(() => {
                  !this.pending.has(e) &&
                    this.topics.includes(e) &&
                    (clearInterval(n), s.stop(t), i(!0)),
                    s.elapsed(t) >= eK &&
                      (clearInterval(n),
                      s.stop(t),
                      r(Error("Subscription resolution timeout")));
                }, this.pollingInterval);
              }).catch(() => !1);
            }),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.start = async () => {
              await this.onConnect();
            }),
            (this.stop = async () => {
              await this.onDisconnect();
            }),
            (this.restart = async () => {
              (this.restartInProgress = !0),
                await this.restore(),
                await this.reset(),
                (this.restartInProgress = !1);
            }),
            (this.relayer = e),
            (this.logger = (0, c.Ep)(t, this.name)),
            (this.clientId = "");
        }
        get context() {
          return (0, c.Fd)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.relayer.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get length() {
          return this.subscriptions.size;
        }
        get ids() {
          return Array.from(this.subscriptions.keys());
        }
        get values() {
          return Array.from(this.subscriptions.values());
        }
        get topics() {
          return this.topicMap.topics;
        }
        hasSubscription(e, t) {
          let i = !1;
          try {
            i = this.getSubscription(e).topic === t;
          } catch {}
          return i;
        }
        onEnable() {
          (this.cached = []), (this.initialized = !0);
        }
        onDisable() {
          (this.cached = this.values),
            this.subscriptions.clear(),
            this.topicMap.clear();
        }
        async unsubscribeByTopic(e, t) {
          let i = this.topicMap.get(e);
          await Promise.all(
            i.map(async (i) => await this.unsubscribeById(e, i, t))
          );
        }
        async unsubscribeById(e, t, i) {
          this.logger.debug("Unsubscribing Topic"),
            this.logger.trace({
              type: "method",
              method: "unsubscribe",
              params: { topic: e, id: t, opts: i },
            });
          try {
            let r = (0, S._HE)(i);
            await this.rpcUnsubscribe(e, t, r);
            let s = (0, S.D6H)("USER_DISCONNECTED", `${this.name}, ${e}`);
            await this.onUnsubscribe(e, t, s),
              this.logger.debug("Successfully Unsubscribed Topic"),
              this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: { topic: e, id: t, opts: i },
              });
          } catch (e) {
            throw (
              (this.logger.debug("Failed to Unsubscribe Topic"),
              this.logger.error(e),
              e)
            );
          }
        }
        async rpcSubscribe(e, t, i = eU.relay) {
          i === eU.relay && (await this.restartToComplete());
          let r = {
            method: (0, S.cOS)(t.protocol).subscribe,
            params: { topic: e },
          };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: r,
            });
          try {
            let t = (0, S.rjm)(e + this.clientId);
            return i === eU.link_mode
              ? (setTimeout(() => {
                  (this.relayer.connected || this.relayer.connecting) &&
                    this.relayer.request(r).catch((e) => this.logger.warn(e));
                }, (0, R.toMiliseconds)(R.ONE_SECOND)),
                t)
              : (await await (0, S.hFY)(
                  this.relayer.request(r).catch((e) => this.logger.warn(e)),
                  this.subscribeTimeout
                ))
              ? t
              : null;
          } catch {
            this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
              this.relayer.events.emit(e$.connection_stalled);
          }
          return null;
        }
        async rpcBatchSubscribe(e) {
          if (!e.length) return;
          let t = e[0].relay,
            i = {
              method: (0, S.cOS)(t.protocol).batchSubscribe,
              params: { topics: e.map((e) => e.topic) },
            };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: i,
            });
          try {
            return await await (0, S.hFY)(
              this.relayer.request(i).catch((e) => this.logger.warn(e)),
              this.subscribeTimeout
            );
          } catch {
            this.relayer.events.emit(e$.connection_stalled);
          }
        }
        async rpcBatchFetchMessages(e) {
          let t;
          if (!e.length) return;
          let i = e[0].relay,
            r = {
              method: (0, S.cOS)(i.protocol).batchFetchMessages,
              params: { topics: e.map((e) => e.topic) },
            };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: r,
            });
          try {
            t = await await (0, S.hFY)(
              this.relayer.request(r).catch((e) => this.logger.warn(e)),
              this.subscribeTimeout
            );
          } catch {
            this.relayer.events.emit(e$.connection_stalled);
          }
          return t;
        }
        rpcUnsubscribe(e, t, i) {
          let r = {
            method: (0, S.cOS)(i.protocol).unsubscribe,
            params: { topic: e, id: t },
          };
          return (
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: r,
            }),
            this.relayer.request(r)
          );
        }
        onSubscribe(e, t) {
          this.setSubscription(e, ta(tn({}, t), { id: e })),
            this.pending.delete(t.topic);
        }
        onBatchSubscribe(e) {
          e.length &&
            e.forEach((e) => {
              this.setSubscription(e.id, tn({}, e)),
                this.pending.delete(e.topic);
            });
        }
        async onUnsubscribe(e, t, i) {
          this.events.removeAllListeners(t),
            this.hasSubscription(t, e) && this.deleteSubscription(t, i),
            await this.relayer.messages.del(e);
        }
        async setRelayerSubscriptions(e) {
          await this.relayer.core.storage.setItem(this.storageKey, e);
        }
        async getRelayerSubscriptions() {
          return await this.relayer.core.storage.getItem(this.storageKey);
        }
        setSubscription(e, t) {
          this.logger.debug("Setting subscription"),
            this.logger.trace({
              type: "method",
              method: "setSubscription",
              id: e,
              subscription: t,
            }),
            this.addSubscription(e, t);
        }
        addSubscription(e, t) {
          this.subscriptions.set(e, tn({}, t)),
            this.topicMap.set(t.topic, e),
            this.events.emit(eH.created, t);
        }
        getSubscription(e) {
          this.logger.debug("Getting subscription"),
            this.logger.trace({
              type: "method",
              method: "getSubscription",
              id: e,
            });
          let t = this.subscriptions.get(e);
          if (!t) {
            let { message: t } = (0, S.kCb)(
              "NO_MATCHING_KEY",
              `${this.name}: ${e}`
            );
            throw Error(t);
          }
          return t;
        }
        deleteSubscription(e, t) {
          this.logger.debug("Deleting subscription"),
            this.logger.trace({
              type: "method",
              method: "deleteSubscription",
              id: e,
              reason: t,
            });
          let i = this.getSubscription(e);
          this.subscriptions.delete(e),
            this.topicMap.delete(i.topic, e),
            this.events.emit(eH.deleted, ta(tn({}, i), { reason: t }));
        }
        async persist() {
          await this.setRelayerSubscriptions(this.values),
            this.events.emit(eH.sync);
        }
        async reset() {
          if (this.cached.length) {
            let e = Math.ceil(
              this.cached.length / this.batchSubscribeTopicsLimit
            );
            for (let t = 0; t < e; t++) {
              let e = this.cached.splice(0, this.batchSubscribeTopicsLimit);
              await this.batchFetchMessages(e), await this.batchSubscribe(e);
            }
          }
          this.events.emit(eH.resubscribed);
        }
        async restore() {
          try {
            let e = await this.getRelayerSubscriptions();
            if (typeof e > "u" || !e.length) return;
            if (this.subscriptions.size) {
              let { message: e } = (0, S.kCb)(
                "RESTORE_WILL_OVERRIDE",
                this.name
              );
              throw (
                (this.logger.error(e),
                this.logger.error(
                  `${this.name}: ${JSON.stringify(this.values)}`
                ),
                Error(e))
              );
            }
            (this.cached = e),
              this.logger.debug(
                `Successfully Restored subscriptions for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                subscriptions: this.values,
              });
          } catch (e) {
            this.logger.debug(
              `Failed to Restore subscriptions for ${this.name}`
            ),
              this.logger.error(e);
          }
        }
        async batchSubscribe(e) {
          if (!e.length) return;
          let t = await this.rpcBatchSubscribe(e);
          (0, S.qt8)(t) &&
            this.onBatchSubscribe(t.map((t, i) => ta(tn({}, e[i]), { id: t })));
        }
        async batchFetchMessages(e) {
          if (!e.length) return;
          this.logger.trace(
            `Fetching batch messages for ${e.length} subscriptions`
          );
          let t = await this.rpcBatchFetchMessages(e);
          t &&
            t.messages &&
            (this.pendingBatchMessages = this.pendingBatchMessages.concat(
              t.messages
            ));
        }
        async onConnect() {
          await this.restart(), this.onEnable();
        }
        onDisconnect() {
          this.onDisable();
        }
        async checkPending() {
          if (!this.initialized || !this.relayer.connected) return;
          let e = [];
          this.pending.forEach((t) => {
            e.push(t);
          }),
            await this.batchSubscribe(e),
            this.pendingBatchMessages.length &&
              (await this.relayer.handleBatchMessageEvents(
                this.pendingBatchMessages
              ),
              (this.pendingBatchMessages = []));
        }
        registerEventListeners() {
          this.relayer.core.heartbeat.on(o.Lx.pulse, async () => {
            await this.checkPending();
          }),
            this.events.on(eH.created, async (e) => {
              let t = eH.created;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                await this.persist();
            }),
            this.events.on(eH.deleted, async (e) => {
              let t = eH.deleted;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                await this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, S.kCb)("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
        async restartToComplete() {
          this.relayer.connected ||
            this.relayer.connecting ||
            (await this.relayer.transportOpen()),
            this.restartInProgress &&
              (await new Promise((e) => {
                let t = setInterval(() => {
                  this.restartInProgress || (clearInterval(t), e());
                }, this.pollingInterval);
              }));
        }
      }
      var tc = Object.defineProperty,
        th = Object.getOwnPropertySymbols,
        tl = Object.prototype.hasOwnProperty,
        tu = Object.prototype.propertyIsEnumerable,
        tp = (e, t, i) =>
          t in e
            ? tc(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        td = (e, t) => {
          for (var i in t || (t = {})) tl.call(t, i) && tp(e, i, t[i]);
          if (th) for (var i of th(t)) tu.call(t, i) && tp(e, i, t[i]);
          return e;
        };
      class tg extends g {
        constructor(e) {
          super(e),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.events = new r.EventEmitter()),
            (this.name = "relayer"),
            (this.transportExplicitlyClosed = !1),
            (this.initialized = !1),
            (this.connectionAttemptInProgress = !1),
            (this.connectionStatusPollingInterval = 20),
            (this.staleConnectionErrors = [
              "socket hang up",
              "stalled",
              "interrupted",
            ]),
            (this.hasExperiencedNetworkDisruption = !1),
            (this.requestsInFlight = new Map()),
            (this.heartBeatTimeout = (0, R.toMiliseconds)(
              R.THIRTY_SECONDS + R.ONE_SECOND
            )),
            (this.request = async (e) => {
              var t, i;
              this.logger.debug("Publishing Request Payload");
              let r = e.id || (0, x.getBigIntRpcId)().toString();
              await this.toEstablishConnection();
              try {
                let s = this.provider.request(e);
                this.requestsInFlight.set(r, { promise: s, request: e }),
                  this.logger.trace(
                    {
                      id: r,
                      method: e.method,
                      topic: null == (t = e.params) ? void 0 : t.topic,
                    },
                    "relayer.request - attempt to publish..."
                  );
                let n = await new Promise(async (e, t) => {
                  let i = () => {
                    t(Error(`relayer.request - publish interrupted, id: ${r}`));
                  };
                  this.provider.on(ej.disconnect, i);
                  let n = await s;
                  this.provider.off(ej.disconnect, i), e(n);
                });
                return (
                  this.logger.trace(
                    {
                      id: r,
                      method: e.method,
                      topic: null == (i = e.params) ? void 0 : i.topic,
                    },
                    "relayer.request - published"
                  ),
                  n
                );
              } catch (e) {
                throw (this.logger.debug(`Failed to Publish Request: ${r}`), e);
              } finally {
                this.requestsInFlight.delete(r);
              }
            }),
            (this.resetPingTimeout = () => {
              if ((0, S.UGU)())
                try {
                  clearTimeout(this.pingTimeout),
                    (this.pingTimeout = setTimeout(() => {
                      var e, t, i;
                      null ==
                        (i =
                          null ==
                          (t =
                            null == (e = this.provider) ? void 0 : e.connection)
                            ? void 0
                            : t.socket) || i.terminate();
                    }, this.heartBeatTimeout));
                } catch (e) {
                  this.logger.warn(e);
                }
            }),
            (this.onPayloadHandler = (e) => {
              this.onProviderPayload(e), this.resetPingTimeout();
            }),
            (this.onConnectHandler = () => {
              this.logger.trace("relayer connected"),
                this.startPingTimeout(),
                this.events.emit(e$.connect);
            }),
            (this.onDisconnectHandler = () => {
              this.logger.trace("relayer disconnected"),
                this.onProviderDisconnect();
            }),
            (this.onProviderErrorHandler = (e) => {
              this.logger.error(e),
                this.events.emit(e$.error, e),
                this.logger.info(
                  "Fatal socket error received, closing transport"
                ),
                this.transportClose();
            }),
            (this.registerProviderListeners = () => {
              this.provider.on(ej.payload, this.onPayloadHandler),
                this.provider.on(ej.connect, this.onConnectHandler),
                this.provider.on(ej.disconnect, this.onDisconnectHandler),
                this.provider.on(ej.error, this.onProviderErrorHandler);
            }),
            (this.core = e.core),
            (this.logger =
              "u" > typeof e.logger && "string" != typeof e.logger
                ? (0, c.Ep)(e.logger, this.name)
                : (0, c.gw)((0, c.jI)({ level: e.logger || "error" }))),
            (this.messages = new e4(this.logger, e.core)),
            (this.subscriber = new to(this, this.logger)),
            (this.publisher = new e5(this, this.logger)),
            (this.relayUrl = e?.relayUrl || eM),
            (this.projectId = e.projectId),
            (this.bundleId = (0, S.X_B)()),
            (this.provider = {});
        }
        async init() {
          if (
            (this.logger.trace("Initialized"),
            this.registerEventListeners(),
            await Promise.all([this.messages.init(), this.subscriber.init()]),
            (this.initialized = !0),
            this.subscriber.cached.length > 0)
          )
            try {
              await this.transportOpen();
            } catch (e) {
              this.logger.warn(e);
            }
        }
        get context() {
          return (0, c.Fd)(this.logger);
        }
        get connected() {
          var e, t, i;
          return (
            (null ==
            (i =
              null == (t = null == (e = this.provider) ? void 0 : e.connection)
                ? void 0
                : t.socket)
              ? void 0
              : i.readyState) === 1
          );
        }
        get connecting() {
          var e, t, i;
          return (
            (null ==
            (i =
              null == (t = null == (e = this.provider) ? void 0 : e.connection)
                ? void 0
                : t.socket)
              ? void 0
              : i.readyState) === 0
          );
        }
        async publish(e, t, i) {
          this.isInitialized(),
            await this.publisher.publish(e, t, i),
            await this.recordMessageEvent({
              topic: e,
              message: t,
              publishedAt: Date.now(),
              transportType: eU.relay,
            });
        }
        async subscribe(e, t) {
          var i;
          this.isInitialized(),
            t?.transportType === "relay" &&
              (await this.toEstablishConnection());
          let r =
              (null == (i = this.subscriber.topicMap.get(e)) ? void 0 : i[0]) ||
              "",
            s,
            n = (t) => {
              t.topic === e && (this.subscriber.off(eH.created, n), s());
            };
          return (
            await Promise.all([
              new Promise((e) => {
                (s = e), this.subscriber.on(eH.created, n);
              }),
              new Promise(async (i) => {
                (r = (await this.subscriber.subscribe(e, t)) || r), i();
              }),
            ]),
            r
          );
        }
        async unsubscribe(e, t) {
          this.isInitialized(), await this.subscriber.unsubscribe(e, t);
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async transportDisconnect() {
          if (
            !this.hasExperiencedNetworkDisruption &&
            this.connected &&
            this.requestsInFlight.size > 0
          )
            try {
              await Promise.all(
                Array.from(this.requestsInFlight.values()).map((e) => e.promise)
              );
            } catch (e) {
              this.logger.warn(e);
            }
          this.hasExperiencedNetworkDisruption || this.connected
            ? await (0, S.hFY)(
                this.provider.disconnect(),
                2e3,
                "provider.disconnect()"
              ).catch(() => this.onProviderDisconnect())
            : this.onProviderDisconnect();
        }
        async transportClose() {
          (this.transportExplicitlyClosed = !0),
            await this.transportDisconnect();
        }
        async transportOpen(e) {
          await this.confirmOnlineStateOrThrow(),
            e &&
              e !== this.relayUrl &&
              ((this.relayUrl = e), await this.transportDisconnect()),
            await this.createProvider(),
            (this.connectionAttemptInProgress = !0),
            (this.transportExplicitlyClosed = !1);
          try {
            await new Promise(async (e, t) => {
              let i = () => {
                this.provider.off(ej.disconnect, i),
                  t(Error("Connection interrupted while trying to subscribe"));
              };
              this.provider.on(ej.disconnect, i),
                await (0, S.hFY)(
                  this.provider.connect(),
                  (0, R.toMiliseconds)(R.ONE_MINUTE),
                  `Socket stalled when trying to connect to ${this.relayUrl}`
                )
                  .catch((e) => {
                    t(e);
                  })
                  .finally(() => {
                    clearTimeout(this.reconnectTimeout),
                      (this.reconnectTimeout = void 0);
                  }),
                this.subscriber.start().catch((e) => {
                  this.logger.error(e), this.onDisconnectHandler();
                }),
                (this.hasExperiencedNetworkDisruption = !1),
                e();
            });
          } catch (e) {
            if (
              (this.logger.error(e),
              (this.hasExperiencedNetworkDisruption = !0),
              !this.isConnectionStalled(e.message))
            )
              throw e;
          } finally {
            this.connectionAttemptInProgress = !1;
          }
        }
        async restartTransport(e) {
          this.connectionAttemptInProgress ||
            ((this.relayUrl = e || this.relayUrl),
            await this.confirmOnlineStateOrThrow(),
            await this.transportClose(),
            await this.transportOpen());
        }
        async confirmOnlineStateOrThrow() {
          if (!(await (0, S.Ggh)()))
            throw Error(
              "No internet connection detected. Please restart your network and try again."
            );
        }
        async handleBatchMessageEvents(e) {
          if (e?.length === 0) {
            this.logger.trace("Batch message events is empty. Ignoring...");
            return;
          }
          let t = e.sort((e, t) => e.publishedAt - t.publishedAt);
          for (let e of (this.logger.trace(
            `Batch of ${t.length} message events sorted`
          ),
          t))
            try {
              await this.onMessageEvent(e);
            } catch (e) {
              this.logger.warn(e);
            }
          this.logger.trace(`Batch of ${t.length} message events processed`);
        }
        async onLinkMessageEvent(e, t) {
          let { topic: i } = e;
          if (!t.sessionExists) {
            let e = (0, S.gn4)(R.FIVE_MINUTES);
            await this.core.pairing.pairings.set(i, {
              topic: i,
              expiry: e,
              relay: { protocol: "irn" },
              active: !1,
            });
          }
          this.events.emit(e$.message, e), await this.recordMessageEvent(e);
        }
        startPingTimeout() {
          var e, t, i, r, s;
          if ((0, S.UGU)())
            try {
              null !=
                (t = null == (e = this.provider) ? void 0 : e.connection) &&
                t.socket &&
                (null ==
                  (s =
                    null ==
                    (r = null == (i = this.provider) ? void 0 : i.connection)
                      ? void 0
                      : r.socket) ||
                  s.once("ping", () => {
                    this.resetPingTimeout();
                  })),
                this.resetPingTimeout();
            } catch (e) {
              this.logger.warn(e);
            }
        }
        isConnectionStalled(e) {
          return this.staleConnectionErrors.some((t) => e.includes(t));
        }
        async createProvider() {
          this.provider.connection && this.unregisterProviderListeners();
          let e = await this.core.crypto.signJWT(this.relayUrl);
          (this.provider = new T.r(
            new O.Z(
              (0, S.$0m)({
                sdkVersion: eL,
                protocol: this.protocol,
                version: this.version,
                relayUrl: this.relayUrl,
                projectId: this.projectId,
                auth: e,
                useOnCloseEvent: !0,
                bundleId: this.bundleId,
              })
            )
          )),
            this.registerProviderListeners();
        }
        async recordMessageEvent(e) {
          let { topic: t, message: i } = e;
          await this.messages.set(t, i);
        }
        async shouldIgnoreMessageEvent(e) {
          let { topic: t, message: i } = e;
          if (!i || 0 === i.length)
            return (
              this.logger.debug(`Ignoring invalid/empty message: ${i}`), !0
            );
          if (!(await this.subscriber.isSubscribed(t)))
            return (
              this.logger.debug(
                `Ignoring message for non-subscribed topic ${t}`
              ),
              !0
            );
          let r = this.messages.has(t, i);
          return r && this.logger.debug(`Ignoring duplicate message: ${i}`), r;
        }
        async onProviderPayload(e) {
          if (
            (this.logger.debug("Incoming Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "incoming",
              payload: e,
            }),
            (0, x.isJsonRpcRequest)(e))
          ) {
            if (!e.method.endsWith("_subscription")) return;
            let t = e.params,
              { topic: i, message: r, publishedAt: s, attestation: n } = t.data,
              a = {
                topic: i,
                message: r,
                publishedAt: s,
                transportType: eU.relay,
                attestation: n,
              };
            this.logger.debug("Emitting Relayer Payload"),
              this.logger.trace(td({ type: "event", event: t.id }, a)),
              this.events.emit(t.id, a),
              await this.acknowledgePayload(e),
              await this.onMessageEvent(a);
          } else
            (0, x.isJsonRpcResponse)(e) && this.events.emit(e$.message_ack, e);
        }
        async onMessageEvent(e) {
          (await this.shouldIgnoreMessageEvent(e)) ||
            (this.events.emit(e$.message, e), await this.recordMessageEvent(e));
        }
        async acknowledgePayload(e) {
          let t = (0, x.formatJsonRpcResult)(e.id, !0);
          await this.provider.connection.send(t);
        }
        unregisterProviderListeners() {
          this.provider.off(ej.payload, this.onPayloadHandler),
            this.provider.off(ej.connect, this.onConnectHandler),
            this.provider.off(ej.disconnect, this.onDisconnectHandler),
            this.provider.off(ej.error, this.onProviderErrorHandler),
            clearTimeout(this.pingTimeout);
        }
        async registerEventListeners() {
          let e = await (0, S.Ggh)();
          (0, S.uwg)(async (t) => {
            e !== t &&
              ((e = t),
              t
                ? await this.restartTransport().catch((e) =>
                    this.logger.error(e)
                  )
                : ((this.hasExperiencedNetworkDisruption = !0),
                  await this.transportDisconnect(),
                  (this.transportExplicitlyClosed = !1)));
          });
        }
        async onProviderDisconnect() {
          await this.subscriber.stop(),
            this.requestsInFlight.clear(),
            clearTimeout(this.pingTimeout),
            this.events.emit(e$.disconnect),
            (this.connectionAttemptInProgress = !1),
            !this.transportExplicitlyClosed &&
              (this.reconnectTimeout ||
                (this.reconnectTimeout = setTimeout(async () => {
                  await this.transportOpen().catch((e) => this.logger.error(e));
                }, (0, R.toMiliseconds)(0.1))));
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, S.kCb)("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
        async toEstablishConnection() {
          await this.confirmOnlineStateOrThrow(),
            this.connected ||
              (this.connectionAttemptInProgress &&
                (await new Promise((e) => {
                  let t = setInterval(() => {
                    this.connected && (clearInterval(t), e());
                  }, this.connectionStatusPollingInterval);
                })),
              await this.transportOpen());
        }
      }
      var tf = Object.defineProperty,
        ty = Object.getOwnPropertySymbols,
        tm = Object.prototype.hasOwnProperty,
        tv = Object.prototype.propertyIsEnumerable,
        tw = (e, t, i) =>
          t in e
            ? tf(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        t_ = (e, t) => {
          for (var i in t || (t = {})) tm.call(t, i) && tw(e, i, t[i]);
          if (ty) for (var i of ty(t)) tv.call(t, i) && tw(e, i, t[i]);
          return e;
        };
      class tb extends f {
        constructor(e, t, i, r = eO, s) {
          super(e, t, i, r),
            (this.core = e),
            (this.logger = t),
            (this.name = i),
            (this.map = new Map()),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = eO),
            (this.recentlyDeleted = []),
            (this.recentlyDeletedLimit = 200),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => {
                  this.getKey && null !== e && !(0, S.o8e)(e)
                    ? this.map.set(this.getKey(e), e)
                    : (0, S.xWS)(e)
                    ? this.map.set(e.id, e)
                    : (0, S.h1R)(e) && this.map.set(e.topic, e);
                }),
                (this.cached = []),
                (this.initialized = !0));
            }),
            (this.set = async (e, t) => {
              this.isInitialized(),
                this.map.has(e)
                  ? await this.update(e, t)
                  : (this.logger.debug("Setting value"),
                    this.logger.trace({
                      type: "method",
                      method: "set",
                      key: e,
                      value: t,
                    }),
                    this.map.set(e, t),
                    await this.persist());
            }),
            (this.get = (e) => (
              this.isInitialized(),
              this.logger.debug("Getting value"),
              this.logger.trace({ type: "method", method: "get", key: e }),
              this.getData(e)
            )),
            (this.getAll = (e) => (
              this.isInitialized(),
              e
                ? this.values.filter((t) =>
                    Object.keys(e).every((i) => q()(t[i], e[i]))
                  )
                : this.values
            )),
            (this.update = async (e, t) => {
              this.isInitialized(),
                this.logger.debug("Updating value"),
                this.logger.trace({
                  type: "method",
                  method: "update",
                  key: e,
                  update: t,
                });
              let i = t_(t_({}, this.getData(e)), t);
              this.map.set(e, i), await this.persist();
            }),
            (this.delete = async (e, t) => {
              this.isInitialized(),
                this.map.has(e) &&
                  (this.logger.debug("Deleting value"),
                  this.logger.trace({
                    type: "method",
                    method: "delete",
                    key: e,
                    reason: t,
                  }),
                  this.map.delete(e),
                  this.addToRecentlyDeleted(e),
                  await this.persist());
            }),
            (this.logger = (0, c.Ep)(t, this.name)),
            (this.storagePrefix = r),
            (this.getKey = s);
        }
        get context() {
          return (0, c.Fd)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get length() {
          return this.map.size;
        }
        get keys() {
          return Array.from(this.map.keys());
        }
        get values() {
          return Array.from(this.map.values());
        }
        addToRecentlyDeleted(e) {
          this.recentlyDeleted.push(e),
            this.recentlyDeleted.length >= this.recentlyDeletedLimit &&
              this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
        }
        async setDataStore(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getDataStore() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getData(e) {
          let t = this.map.get(e);
          if (!t) {
            if (this.recentlyDeleted.includes(e)) {
              let { message: t } = (0, S.kCb)(
                "MISSING_OR_INVALID",
                `Record was recently deleted - ${this.name}: ${e}`
              );
              throw (this.logger.error(t), Error(t));
            }
            let { message: t } = (0, S.kCb)(
              "NO_MATCHING_KEY",
              `${this.name}: ${e}`
            );
            throw (this.logger.error(t), Error(t));
          }
          return t;
        }
        async persist() {
          await this.setDataStore(this.values);
        }
        async restore() {
          try {
            let e = await this.getDataStore();
            if (typeof e > "u" || !e.length) return;
            if (this.map.size) {
              let { message: e } = (0, S.kCb)(
                "RESTORE_WILL_OVERRIDE",
                this.name
              );
              throw (this.logger.error(e), Error(e));
            }
            (this.cached = e),
              this.logger.debug(`Successfully Restored value for ${this.name}`),
              this.logger.trace({
                type: "method",
                method: "restore",
                value: this.values,
              });
          } catch (e) {
            this.logger.debug(`Failed to Restore value for ${this.name}`),
              this.logger.error(e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, S.kCb)("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      class tE {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            (this.name = "pairing"),
            (this.version = "0.3"),
            (this.events = new (s())()),
            (this.initialized = !1),
            (this.storagePrefix = eO),
            (this.ignoredPayloadTypes = [S.rVF]),
            (this.registeredMethods = []),
            (this.init = async () => {
              this.initialized ||
                (await this.pairings.init(),
                await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                (this.initialized = !0),
                this.logger.trace("Initialized"));
            }),
            (this.register = ({ methods: e }) => {
              this.isInitialized(),
                (this.registeredMethods = [
                  ...new Set([...this.registeredMethods, ...e]),
                ]);
            }),
            (this.create = async (e) => {
              this.isInitialized();
              let t = (0, S.jdp)(),
                i = await this.core.crypto.setSymKey(t),
                r = (0, S.gn4)(R.FIVE_MINUTES),
                s = { protocol: "irn" },
                n = (0, S.Bvr)({
                  protocol: this.core.protocol,
                  version: this.core.version,
                  topic: i,
                  symKey: t,
                  relay: s,
                  expiryTimestamp: r,
                  methods: e?.methods,
                });
              return (
                this.core.expirer.set(i, r),
                await this.pairings.set(i, {
                  topic: i,
                  expiry: r,
                  relay: s,
                  active: !1,
                }),
                await this.core.relayer.subscribe(i, {
                  transportType: e?.transportType,
                }),
                { topic: i, uri: n }
              );
            }),
            (this.pair = async (e) => {
              let t;
              this.isInitialized();
              let i = this.core.eventClient.createEvent({
                properties: { topic: e?.uri, trace: [eY.pairing_started] },
              });
              this.isValidPair(e, i);
              let {
                topic: r,
                symKey: s,
                relay: n,
                expiryTimestamp: a,
                methods: o,
              } = (0, S.heJ)(e.uri);
              if (
                ((i.props.properties.topic = r),
                i.addTrace(eY.pairing_uri_validation_success),
                i.addTrace(eY.pairing_uri_not_expired),
                this.pairings.keys.includes(r))
              ) {
                if (
                  ((t = this.pairings.get(r)),
                  i.addTrace(eY.existing_pairing),
                  t.active)
                )
                  throw (
                    (i.setError(eZ.active_pairing_already_exists),
                    Error(
                      `Pairing already exists: ${r}. Please try again with a new connection URI.`
                    ))
                  );
                i.addTrace(eY.pairing_not_expired);
              }
              let c = a || (0, S.gn4)(R.FIVE_MINUTES),
                h = { topic: r, relay: n, expiry: c, active: !1, methods: o };
              this.core.expirer.set(r, c),
                await this.pairings.set(r, h),
                i.addTrace(eY.store_new_pairing),
                e.activatePairing && (await this.activate({ topic: r })),
                this.events.emit(eF.create, h),
                i.addTrace(eY.emit_inactive_pairing),
                this.core.crypto.keychain.has(r) ||
                  (await this.core.crypto.setSymKey(s, r)),
                i.addTrace(eY.subscribing_pairing_topic);
              try {
                await this.core.relayer.confirmOnlineStateOrThrow();
              } catch {
                i.setError(eZ.no_internet_connection);
              }
              try {
                await this.core.relayer.subscribe(r, { relay: n });
              } catch (e) {
                throw (i.setError(eZ.subscribe_pairing_topic_failure), e);
              }
              return i.addTrace(eY.subscribe_pairing_topic_success), h;
            }),
            (this.activate = async ({ topic: e }) => {
              this.isInitialized();
              let t = (0, S.gn4)(R.THIRTY_DAYS);
              this.core.expirer.set(e, t),
                await this.pairings.update(e, { active: !0, expiry: t });
            }),
            (this.ping = async (e) => {
              this.isInitialized(), await this.isValidPing(e);
              let { topic: t } = e;
              if (this.pairings.keys.includes(t)) {
                let e = await this.sendRequest(t, "wc_pairingPing", {}),
                  { done: i, resolve: r, reject: s } = (0, S.H1S)();
                this.events.once(
                  (0, S.E0T)("pairing_ping", e),
                  ({ error: e }) => {
                    e ? s(e) : r();
                  }
                ),
                  await i();
              }
            }),
            (this.updateExpiry = async ({ topic: e, expiry: t }) => {
              this.isInitialized(),
                await this.pairings.update(e, { expiry: t });
            }),
            (this.updateMetadata = async ({ topic: e, metadata: t }) => {
              this.isInitialized(),
                await this.pairings.update(e, { peerMetadata: t });
            }),
            (this.getPairings = () => (
              this.isInitialized(), this.pairings.values
            )),
            (this.disconnect = async (e) => {
              this.isInitialized(), await this.isValidDisconnect(e);
              let { topic: t } = e;
              this.pairings.keys.includes(t) &&
                (await this.sendRequest(
                  t,
                  "wc_pairingDelete",
                  (0, S.D6H)("USER_DISCONNECTED")
                ),
                await this.deletePairing(t));
            }),
            (this.sendRequest = async (e, t, i) => {
              let r = (0, x.formatJsonRpcRequest)(t, i),
                s = await this.core.crypto.encode(e, r),
                n = eV[t].req;
              return (
                this.core.history.set(e, r),
                this.core.relayer.publish(e, s, n),
                r.id
              );
            }),
            (this.sendResult = async (e, t, i) => {
              let r = (0, x.formatJsonRpcResult)(e, i),
                s = await this.core.crypto.encode(t, r),
                n = eV[(await this.core.history.get(t, e)).request.method].res;
              await this.core.relayer.publish(t, s, n),
                await this.core.history.resolve(r);
            }),
            (this.sendError = async (e, t, i) => {
              let r = (0, x.formatJsonRpcError)(e, i),
                s = await this.core.crypto.encode(t, r),
                n = await this.core.history.get(t, e),
                a = eV[n.request.method]
                  ? eV[n.request.method].res
                  : eV.unregistered_method.res;
              await this.core.relayer.publish(t, s, a),
                await this.core.history.resolve(r);
            }),
            (this.deletePairing = async (e, t) => {
              await this.core.relayer.unsubscribe(e),
                await Promise.all([
                  this.pairings.delete(e, (0, S.D6H)("USER_DISCONNECTED")),
                  this.core.crypto.deleteSymKey(e),
                  t ? Promise.resolve() : this.core.expirer.del(e),
                ]);
            }),
            (this.cleanup = async () => {
              let e = this.pairings
                .getAll()
                .filter((e) => (0, S.BwD)(e.expiry));
              await Promise.all(e.map((e) => this.deletePairing(e.topic)));
            }),
            (this.onRelayEventRequest = (e) => {
              let { topic: t, payload: i } = e;
              switch (i.method) {
                case "wc_pairingPing":
                  return this.onPairingPingRequest(t, i);
                case "wc_pairingDelete":
                  return this.onPairingDeleteRequest(t, i);
                default:
                  return this.onUnknownRpcMethodRequest(t, i);
              }
            }),
            (this.onRelayEventResponse = async (e) => {
              let { topic: t, payload: i } = e,
                r = (await this.core.history.get(t, i.id)).request.method;
              return "wc_pairingPing" === r
                ? this.onPairingPingResponse(t, i)
                : this.onUnknownRpcMethodResponse(r);
            }),
            (this.onPairingPingRequest = async (e, t) => {
              let { id: i } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult(i, e, !0),
                  this.events.emit(eF.ping, { id: i, topic: e });
              } catch (t) {
                await this.sendError(i, e, t), this.logger.error(t);
              }
            }),
            (this.onPairingPingResponse = (e, t) => {
              let { id: i } = t;
              setTimeout(() => {
                (0, x.isJsonRpcResult)(t)
                  ? this.events.emit((0, S.E0T)("pairing_ping", i), {})
                  : (0, x.isJsonRpcError)(t) &&
                    this.events.emit((0, S.E0T)("pairing_ping", i), {
                      error: t.error,
                    });
              }, 500);
            }),
            (this.onPairingDeleteRequest = async (e, t) => {
              let { id: i } = t;
              try {
                this.isValidDisconnect({ topic: e }),
                  await this.deletePairing(e),
                  this.events.emit(eF.delete, { id: i, topic: e });
              } catch (t) {
                await this.sendError(i, e, t), this.logger.error(t);
              }
            }),
            (this.onUnknownRpcMethodRequest = async (e, t) => {
              let { id: i, method: r } = t;
              try {
                if (this.registeredMethods.includes(r)) return;
                let t = (0, S.D6H)("WC_METHOD_UNSUPPORTED", r);
                await this.sendError(i, e, t), this.logger.error(t);
              } catch (t) {
                await this.sendError(i, e, t), this.logger.error(t);
              }
            }),
            (this.onUnknownRpcMethodResponse = (e) => {
              this.registeredMethods.includes(e) ||
                this.logger.error((0, S.D6H)("WC_METHOD_UNSUPPORTED", e));
            }),
            (this.isValidPair = (e, t) => {
              var i;
              if (!(0, S.EJd)(e)) {
                let { message: i } = (0, S.kCb)(
                  "MISSING_OR_INVALID",
                  `pair() params: ${e}`
                );
                throw (t.setError(eZ.malformed_pairing_uri), Error(i));
              }
              if (!(0, S.jvJ)(e.uri)) {
                let { message: i } = (0, S.kCb)(
                  "MISSING_OR_INVALID",
                  `pair() uri: ${e.uri}`
                );
                throw (t.setError(eZ.malformed_pairing_uri), Error(i));
              }
              let r = (0, S.heJ)(e?.uri);
              if (!(null != (i = r?.relay) && i.protocol)) {
                let { message: e } = (0, S.kCb)(
                  "MISSING_OR_INVALID",
                  "pair() uri#relay-protocol"
                );
                throw (t.setError(eZ.malformed_pairing_uri), Error(e));
              }
              if (!(null != r && r.symKey)) {
                let { message: e } = (0, S.kCb)(
                  "MISSING_OR_INVALID",
                  "pair() uri#symKey"
                );
                throw (t.setError(eZ.malformed_pairing_uri), Error(e));
              }
              if (
                null != r &&
                r.expiryTimestamp &&
                (0, R.toMiliseconds)(r?.expiryTimestamp) < Date.now()
              ) {
                t.setError(eZ.pairing_expired);
                let { message: e } = (0, S.kCb)(
                  "EXPIRED",
                  "pair() URI has expired. Please try again with a new connection URI."
                );
                throw Error(e);
              }
            }),
            (this.isValidPing = async (e) => {
              if (!(0, S.EJd)(e)) {
                let { message: t } = (0, S.kCb)(
                  "MISSING_OR_INVALID",
                  `ping() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            (this.isValidDisconnect = async (e) => {
              if (!(0, S.EJd)(e)) {
                let { message: t } = (0, S.kCb)(
                  "MISSING_OR_INVALID",
                  `disconnect() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            (this.isValidPairingTopic = async (e) => {
              if (!(0, S.M_r)(e, !1)) {
                let { message: t } = (0, S.kCb)(
                  "MISSING_OR_INVALID",
                  `pairing topic should be a string: ${e}`
                );
                throw Error(t);
              }
              if (!this.pairings.keys.includes(e)) {
                let { message: t } = (0, S.kCb)(
                  "NO_MATCHING_KEY",
                  `pairing topic doesn't exist: ${e}`
                );
                throw Error(t);
              }
              if ((0, S.BwD)(this.pairings.get(e).expiry)) {
                await this.deletePairing(e);
                let { message: t } = (0, S.kCb)(
                  "EXPIRED",
                  `pairing topic: ${e}`
                );
                throw Error(t);
              }
            }),
            (this.core = e),
            (this.logger = (0, c.Ep)(t, this.name)),
            (this.pairings = new tb(
              this.core,
              this.logger,
              this.name,
              this.storagePrefix
            ));
        }
        get context() {
          return (0, c.Fd)(this.logger);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, S.kCb)("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
        registerRelayerEvents() {
          this.core.relayer.on(e$.message, async (e) => {
            let { topic: t, message: i, transportType: r } = e;
            if (
              !this.pairings.keys.includes(t) ||
              r === eU.link_mode ||
              this.ignoredPayloadTypes.includes(
                this.core.crypto.getPayloadType(i)
              )
            )
              return;
            let s = await this.core.crypto.decode(t, i);
            try {
              (0, x.isJsonRpcRequest)(s)
                ? (this.core.history.set(t, s),
                  this.onRelayEventRequest({ topic: t, payload: s }))
                : (0, x.isJsonRpcResponse)(s) &&
                  (await this.core.history.resolve(s),
                  await this.onRelayEventResponse({ topic: t, payload: s }),
                  this.core.history.delete(t, s.id));
            } catch (e) {
              this.logger.error(e);
            }
          });
        }
        registerExpirerEvents() {
          this.core.expirer.on(eJ.expired, async (e) => {
            let { topic: t } = (0, S.iPz)(e.target);
            t &&
              this.pairings.keys.includes(t) &&
              (await this.deletePairing(t, !0),
              this.events.emit(eF.expire, { topic: t }));
          });
        }
      }
      class tI extends u {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            (this.records = new Map()),
            (this.events = new r.EventEmitter()),
            (this.name = "history"),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = eO),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => this.records.set(e.id, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            (this.set = (e, t, i) => {
              if (
                (this.isInitialized(),
                this.logger.debug("Setting JSON-RPC request history record"),
                this.logger.trace({
                  type: "method",
                  method: "set",
                  topic: e,
                  request: t,
                  chainId: i,
                }),
                this.records.has(t.id))
              )
                return;
              let r = {
                id: t.id,
                topic: e,
                request: { method: t.method, params: t.params || null },
                chainId: i,
                expiry: (0, S.gn4)(R.THIRTY_DAYS),
              };
              this.records.set(r.id, r),
                this.persist(),
                this.events.emit(eB.created, r);
            }),
            (this.resolve = async (e) => {
              if (
                (this.isInitialized(),
                this.logger.debug("Updating JSON-RPC response history record"),
                this.logger.trace({
                  type: "method",
                  method: "update",
                  response: e,
                }),
                !this.records.has(e.id))
              )
                return;
              let t = await this.getRecord(e.id);
              typeof t.response > "u" &&
                ((t.response = (0, x.isJsonRpcError)(e)
                  ? { error: e.error }
                  : { result: e.result }),
                this.records.set(t.id, t),
                this.persist(),
                this.events.emit(eB.updated, t));
            }),
            (this.get = async (e, t) => (
              this.isInitialized(),
              this.logger.debug("Getting record"),
              this.logger.trace({
                type: "method",
                method: "get",
                topic: e,
                id: t,
              }),
              await this.getRecord(t)
            )),
            (this.delete = (e, t) => {
              this.isInitialized(),
                this.logger.debug("Deleting record"),
                this.logger.trace({ type: "method", method: "delete", id: t }),
                this.values.forEach((i) => {
                  i.topic !== e ||
                    ("u" > typeof t && i.id !== t) ||
                    (this.records.delete(i.id),
                    this.events.emit(eB.deleted, i));
                }),
                this.persist();
            }),
            (this.exists = async (e, t) => (
              this.isInitialized(),
              !!this.records.has(t) && (await this.getRecord(t)).topic === e
            )),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = (0, c.Ep)(t, this.name));
        }
        get context() {
          return (0, c.Fd)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get size() {
          return this.records.size;
        }
        get keys() {
          return Array.from(this.records.keys());
        }
        get values() {
          return Array.from(this.records.values());
        }
        get pending() {
          let e = [];
          return (
            this.values.forEach((t) => {
              if ("u" > typeof t.response) return;
              let i = {
                topic: t.topic,
                request: (0, x.formatJsonRpcRequest)(
                  t.request.method,
                  t.request.params,
                  t.id
                ),
                chainId: t.chainId,
              };
              return e.push(i);
            }),
            e
          );
        }
        async setJsonRpcRecords(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getJsonRpcRecords() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getRecord(e) {
          this.isInitialized();
          let t = this.records.get(e);
          if (!t) {
            let { message: t } = (0, S.kCb)(
              "NO_MATCHING_KEY",
              `${this.name}: ${e}`
            );
            throw Error(t);
          }
          return t;
        }
        async persist() {
          await this.setJsonRpcRecords(this.values), this.events.emit(eB.sync);
        }
        async restore() {
          try {
            let e = await this.getJsonRpcRecords();
            if (typeof e > "u" || !e.length) return;
            if (this.records.size) {
              let { message: e } = (0, S.kCb)(
                "RESTORE_WILL_OVERRIDE",
                this.name
              );
              throw (this.logger.error(e), Error(e));
            }
            (this.cached = e),
              this.logger.debug(
                `Successfully Restored records for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                records: this.values,
              });
          } catch (e) {
            this.logger.debug(`Failed to Restore records for ${this.name}`),
              this.logger.error(e);
          }
        }
        registerEventListeners() {
          this.events.on(eB.created, (e) => {
            let t = eB.created;
            this.logger.info(`Emitting ${t}`),
              this.logger.debug({ type: "event", event: t, record: e });
          }),
            this.events.on(eB.updated, (e) => {
              let t = eB.updated;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, record: e });
            }),
            this.events.on(eB.deleted, (e) => {
              let t = eB.deleted;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, record: e });
            }),
            this.core.heartbeat.on(o.Lx.pulse, () => {
              this.cleanup();
            });
        }
        cleanup() {
          try {
            this.isInitialized();
            let e = !1;
            this.records.forEach((t) => {
              (0, R.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 &&
                (this.logger.info(`Deleting expired history log: ${t.id}`),
                this.records.delete(t.id),
                this.events.emit(eB.deleted, t, !1),
                (e = !0));
            }),
              e && this.persist();
          } catch (e) {
            this.logger.warn(e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, S.kCb)("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      class tP extends m {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            (this.expirations = new Map()),
            (this.events = new r.EventEmitter()),
            (this.name = "expirer"),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = eO),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => this.expirations.set(e.target, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            (this.has = (e) => {
              try {
                let t = this.formatTarget(e);
                return "u" > typeof this.getExpiration(t);
              } catch {
                return !1;
              }
            }),
            (this.set = (e, t) => {
              this.isInitialized();
              let i = this.formatTarget(e),
                r = { target: i, expiry: t };
              this.expirations.set(i, r),
                this.checkExpiry(i, r),
                this.events.emit(eJ.created, { target: i, expiration: r });
            }),
            (this.get = (e) => {
              this.isInitialized();
              let t = this.formatTarget(e);
              return this.getExpiration(t);
            }),
            (this.del = (e) => {
              if ((this.isInitialized(), this.has(e))) {
                let t = this.formatTarget(e),
                  i = this.getExpiration(t);
                this.expirations.delete(t),
                  this.events.emit(eJ.deleted, { target: t, expiration: i });
              }
            }),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = (0, c.Ep)(t, this.name));
        }
        get context() {
          return (0, c.Fd)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get length() {
          return this.expirations.size;
        }
        get keys() {
          return Array.from(this.expirations.keys());
        }
        get values() {
          return Array.from(this.expirations.values());
        }
        formatTarget(e) {
          if ("string" == typeof e) return (0, S.Z42)(e);
          if ("number" == typeof e) return (0, S.GqV)(e);
          let { message: t } = (0, S.kCb)(
            "UNKNOWN_TYPE",
            `Target type: ${typeof e}`
          );
          throw Error(t);
        }
        async setExpirations(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getExpirations() {
          return await this.core.storage.getItem(this.storageKey);
        }
        async persist() {
          await this.setExpirations(this.values), this.events.emit(eJ.sync);
        }
        async restore() {
          try {
            let e = await this.getExpirations();
            if (typeof e > "u" || !e.length) return;
            if (this.expirations.size) {
              let { message: e } = (0, S.kCb)(
                "RESTORE_WILL_OVERRIDE",
                this.name
              );
              throw (this.logger.error(e), Error(e));
            }
            (this.cached = e),
              this.logger.debug(
                `Successfully Restored expirations for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                expirations: this.values,
              });
          } catch (e) {
            this.logger.debug(`Failed to Restore expirations for ${this.name}`),
              this.logger.error(e);
          }
        }
        getExpiration(e) {
          let t = this.expirations.get(e);
          if (!t) {
            let { message: t } = (0, S.kCb)(
              "NO_MATCHING_KEY",
              `${this.name}: ${e}`
            );
            throw (this.logger.warn(t), Error(t));
          }
          return t;
        }
        checkExpiry(e, t) {
          let { expiry: i } = t;
          (0, R.toMiliseconds)(i) - Date.now() <= 0 && this.expire(e, t);
        }
        expire(e, t) {
          this.expirations.delete(e),
            this.events.emit(eJ.expired, { target: e, expiration: t });
        }
        checkExpirations() {
          this.core.relayer.connected &&
            this.expirations.forEach((e, t) => this.checkExpiry(t, e));
        }
        registerEventListeners() {
          this.core.heartbeat.on(o.Lx.pulse, () => this.checkExpirations()),
            this.events.on(eJ.created, (e) => {
              let t = eJ.created;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            }),
            this.events.on(eJ.expired, (e) => {
              let t = eJ.expired;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            }),
            this.events.on(eJ.deleted, (e) => {
              let t = eJ.deleted;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, S.kCb)("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      var tS = {};
      function tC(e) {
        let t;
        return (
          "u" > typeof window && "u" > typeof window[e] && (t = window[e]), t
        );
      }
      function tR(e) {
        let t = tC(e);
        if (!t) throw Error(`${e} is not defined in Window`);
        return t;
      }
      Object.defineProperty(tS, "__esModule", { value: !0 }),
        (tS.getLocalStorage =
          tS.getLocalStorageOrThrow =
          tS.getCrypto =
          tS.getCryptoOrThrow =
          tS.getLocation =
          tS.getLocationOrThrow =
          tS.getNavigator =
          tS.getNavigatorOrThrow =
          tT =
          tS.getDocument =
          tS.getDocumentOrThrow =
          tS.getFromWindowOrThrow =
          tS.getFromWindow =
            void 0),
        (tS.getFromWindow = tC),
        (tS.getFromWindowOrThrow = tR),
        (tS.getDocumentOrThrow = function () {
          return tR("document");
        });
      var tT = (tS.getDocument = function () {
        return tC("document");
      });
      (tS.getNavigatorOrThrow = function () {
        return tR("navigator");
      }),
        (tS.getNavigator = function () {
          return tC("navigator");
        }),
        (tS.getLocationOrThrow = function () {
          return tR("location");
        }),
        (tS.getLocation = function () {
          return tC("location");
        }),
        (tS.getCryptoOrThrow = function () {
          return tR("crypto");
        }),
        (tS.getCrypto = function () {
          return tC("crypto");
        }),
        (tS.getLocalStorageOrThrow = function () {
          return tR("localStorage");
        }),
        (tS.getLocalStorage = function () {
          return tC("localStorage");
        });
      class tx extends v {
        constructor(e, t, i) {
          super(e, t, i),
            (this.core = e),
            (this.logger = t),
            (this.store = i),
            (this.name = "verify-api"),
            (this.verifyUrlV3 = eW),
            (this.storagePrefix = eO),
            (this.version = 2),
            (this.init = async () => {
              var e;
              this.isDevEnv ||
                ((this.publicKey = await this.store.getItem(this.storeKey)),
                this.publicKey &&
                  (0, R.toMiliseconds)(
                    null == (e = this.publicKey) ? void 0 : e.expiresAt
                  ) < Date.now() &&
                  (this.logger.debug("verify v2 public key expired"),
                  await this.removePublicKey()));
            }),
            (this.register = async (e) => {
              if (!(0, S.jUY)() || this.isDevEnv) return;
              let t = window.location.origin,
                { id: i, decryptedId: r } = e,
                s = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${t}&id=${i}&decryptedId=${r}`;
              try {
                let e = tT(),
                  t = this.startAbortTimer(5 * R.ONE_SECOND),
                  r = await new Promise((r, n) => {
                    let a = () => {
                      window.removeEventListener("message", c),
                        e.body.removeChild(o),
                        n("attestation aborted");
                    };
                    this.abortController.signal.addEventListener("abort", a);
                    let o = e.createElement("iframe");
                    (o.src = s),
                      (o.style.display = "none"),
                      o.addEventListener("error", a, {
                        signal: this.abortController.signal,
                      });
                    let c = (s) => {
                      if (!s.data) return;
                      let n = JSON.parse(s.data);
                      if ("verify_attestation" === n.type) {
                        if ((0, P.decodeJWT)(n.attestation).payload.id !== i)
                          return;
                        clearInterval(t),
                          e.body.removeChild(o),
                          this.abortController.signal.removeEventListener(
                            "abort",
                            a
                          ),
                          window.removeEventListener("message", c),
                          r(null === n.attestation ? "" : n.attestation);
                      }
                    };
                    e.body.appendChild(o),
                      window.addEventListener("message", c, {
                        signal: this.abortController.signal,
                      });
                  });
                return this.logger.debug("jwt attestation", r), r;
              } catch (e) {
                this.logger.warn(e);
              }
              return "";
            }),
            (this.resolve = async (e) => {
              if (this.isDevEnv) return "";
              let { attestationId: t, hash: i, encryptedId: r } = e;
              if ("" === t) {
                this.logger.debug("resolve: attestationId is empty, skipping");
                return;
              }
              if (t) {
                if ((0, P.decodeJWT)(t).payload.id !== r) return;
                let e = await this.isValidJwtAttestation(t);
                if (e) {
                  if (!e.isVerified) {
                    this.logger.warn(
                      "resolve: jwt attestation: origin url not verified"
                    );
                    return;
                  }
                  return e;
                }
              }
              if (!i) return;
              let s = this.getVerifyUrl(e?.verifyUrl);
              return this.fetchAttestation(i, s);
            }),
            (this.fetchAttestation = async (e, t) => {
              this.logger.debug(`resolving attestation: ${e} from url: ${t}`);
              let i = this.startAbortTimer(5 * R.ONE_SECOND),
                r = await fetch(`${t}/attestation/${e}?v2Supported=true`, {
                  signal: this.abortController.signal,
                });
              return (
                clearTimeout(i), 200 === r.status ? await r.json() : void 0
              );
            }),
            (this.getVerifyUrl = (e) => {
              let t = e || eG;
              return (
                eQ.includes(t) ||
                  (this.logger.info(
                    `verify url: ${t}, not included in trusted list, assigning default: ${eG}`
                  ),
                  (t = eG)),
                t
              );
            }),
            (this.fetchPublicKey = async () => {
              try {
                this.logger.debug(
                  `fetching public key from: ${this.verifyUrlV3}`
                );
                let e = this.startAbortTimer(R.FIVE_SECONDS),
                  t = await fetch(`${this.verifyUrlV3}/public-key`, {
                    signal: this.abortController.signal,
                  });
                return clearTimeout(e), await t.json();
              } catch (e) {
                this.logger.warn(e);
              }
            }),
            (this.persistPublicKey = async (e) => {
              this.logger.debug("persisting public key to local storage", e),
                await this.store.setItem(this.storeKey, e),
                (this.publicKey = e);
            }),
            (this.removePublicKey = async () => {
              this.logger.debug("removing verify v2 public key from storage"),
                await this.store.removeItem(this.storeKey),
                (this.publicKey = void 0);
            }),
            (this.isValidJwtAttestation = async (e) => {
              let t = await this.getPublicKey();
              try {
                if (t) return this.validateAttestation(e, t);
              } catch (e) {
                this.logger.error(e),
                  this.logger.warn("error validating attestation");
              }
              let i = await this.fetchAndPersistPublicKey();
              try {
                if (i) return this.validateAttestation(e, i);
              } catch (e) {
                this.logger.error(e),
                  this.logger.warn("error validating attestation");
              }
            }),
            (this.getPublicKey = async () =>
              this.publicKey
                ? this.publicKey
                : await this.fetchAndPersistPublicKey()),
            (this.fetchAndPersistPublicKey = async () => {
              if (this.fetchPromise)
                return await this.fetchPromise, this.publicKey;
              this.fetchPromise = new Promise(async (e) => {
                let t = await this.fetchPublicKey();
                t && (await this.persistPublicKey(t), e(t));
              });
              let e = await this.fetchPromise;
              return (this.fetchPromise = void 0), e;
            }),
            (this.validateAttestation = (e, t) => {
              let i = (0, S.NbI)(e, t.publicKey),
                r = {
                  hasExpired: (0, R.toMiliseconds)(i.exp) < Date.now(),
                  payload: i,
                };
              if (r.hasExpired)
                throw (
                  (this.logger.warn("resolve: jwt attestation expired"),
                  Error("JWT attestation expired"))
                );
              return {
                origin: r.payload.origin,
                isScam: r.payload.isScam,
                isVerified: r.payload.isVerified,
              };
            }),
            (this.logger = (0, c.Ep)(t, this.name)),
            (this.abortController = new AbortController()),
            (this.isDevEnv = (0, S.UGU)() && D.env.IS_VITEST),
            this.init();
        }
        get storeKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//verify:public:key"
          );
        }
        get context() {
          return (0, c.Fd)(this.logger);
        }
        startAbortTimer(e) {
          return (
            (this.abortController = new AbortController()),
            setTimeout(
              () => this.abortController.abort(),
              (0, R.toMiliseconds)(e)
            )
          );
        }
      }
      class tO extends w {
        constructor(e, t) {
          super(e, t),
            (this.projectId = e),
            (this.logger = t),
            (this.context = "echo"),
            (this.registerDeviceToken = async (e) => {
              let {
                  clientId: t,
                  token: i,
                  notificationType: r,
                  enableEncrypted: s = !1,
                } = e,
                n = `https://echo.walletconnect.com/${this.projectId}/clients`;
              await fetch(n, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  client_id: t,
                  type: r,
                  token: i,
                  always_raw: s,
                }),
              });
            }),
            (this.logger = (0, c.Ep)(t, this.context));
        }
      }
      var tA = Object.defineProperty,
        tq = Object.getOwnPropertySymbols,
        tD = Object.prototype.hasOwnProperty,
        tN = Object.prototype.propertyIsEnumerable,
        tk = (e, t, i) =>
          t in e
            ? tA(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        tM = (e, t) => {
          for (var i in t || (t = {})) tD.call(t, i) && tk(e, i, t[i]);
          if (tq) for (var i of tq(t)) tN.call(t, i) && tk(e, i, t[i]);
          return e;
        };
      class t$ extends _ {
        constructor(e, t, i = !0) {
          super(e, t, i),
            (this.core = e),
            (this.logger = t),
            (this.context = "event-client"),
            (this.storagePrefix = eO),
            (this.storageVersion = 0.1),
            (this.events = new Map()),
            (this.shouldPersist = !1),
            (this.createEvent = (e) => {
              let {
                  event: t = "ERROR",
                  type: i = "",
                  properties: { topic: r, trace: s },
                } = e,
                n = (0, S.k$y)(),
                a = tM(
                  {
                    eventId: n,
                    bundleId: this.core.projectId || "",
                    timestamp: Date.now(),
                    props: {
                      event: t,
                      type: i,
                      properties: { topic: r, trace: s },
                    },
                  },
                  this.setMethods(n)
                );
              return (
                this.telemetryEnabled &&
                  (this.events.set(n, a), (this.shouldPersist = !0)),
                a
              );
            }),
            (this.getEvent = (e) => {
              let { eventId: t, topic: i } = e;
              if (t) return this.events.get(t);
              let r = Array.from(this.events.values()).find(
                (e) => e.props.properties.topic === i
              );
              if (r) return tM(tM({}, r), this.setMethods(r.eventId));
            }),
            (this.deleteEvent = (e) => {
              let { eventId: t } = e;
              this.events.delete(t), (this.shouldPersist = !0);
            }),
            (this.setEventListeners = () => {
              this.core.heartbeat.on(o.Lx.pulse, async () => {
                this.shouldPersist && (await this.persist()),
                  this.events.forEach((e) => {
                    (0, R.fromMiliseconds)(Date.now()) -
                      (0, R.fromMiliseconds)(e.timestamp) >
                      86400 &&
                      (this.events.delete(e.eventId),
                      (this.shouldPersist = !0));
                  });
              });
            }),
            (this.setMethods = (e) => ({
              addTrace: (t) => this.addTrace(e, t),
              setError: (t) => this.setError(e, t),
            })),
            (this.addTrace = (e, t) => {
              let i = this.events.get(e);
              i &&
                (i.props.properties.trace.push(t),
                this.events.set(e, i),
                (this.shouldPersist = !0));
            }),
            (this.setError = (e, t) => {
              let i = this.events.get(e);
              i &&
                ((i.props.type = t),
                (i.timestamp = Date.now()),
                this.events.set(e, i),
                (this.shouldPersist = !0));
            }),
            (this.persist = async () => {
              await this.core.storage.setItem(
                this.storageKey,
                Array.from(this.events.values())
              ),
                (this.shouldPersist = !1);
            }),
            (this.restore = async () => {
              try {
                let e =
                  (await this.core.storage.getItem(this.storageKey)) || [];
                if (!e.length) return;
                e.forEach((e) => {
                  this.events.set(
                    e.eventId,
                    tM(tM({}, e), this.setMethods(e.eventId))
                  );
                });
              } catch (e) {
                this.logger.warn(e);
              }
            }),
            (this.submit = async () => {
              if (!this.telemetryEnabled || 0 === this.events.size) return;
              let e = [];
              for (let [t, i] of this.events) i.props.type && e.push(i);
              if (0 !== e.length)
                try {
                  if (
                    (
                      await fetch(
                        `https://pulse.walletconnect.com/batch?projectId=${this.core.projectId}&st=events_sdk&sv=js-${eL}`,
                        { method: "POST", body: JSON.stringify(e) }
                      )
                    ).ok
                  )
                    for (let t of e)
                      this.events.delete(t.eventId), (this.shouldPersist = !0);
                } catch (e) {
                  this.logger.warn(e);
                }
            }),
            (this.logger = (0, c.Ep)(t, this.context)),
            i
              ? this.restore().then(async () => {
                  await this.submit(), this.setEventListeners();
                })
              : this.persist();
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.storageVersion +
            this.core.customStoragePrefix +
            "//" +
            this.context
          );
        }
      }
      var tj = Object.defineProperty,
        tL = Object.getOwnPropertySymbols,
        tU = Object.prototype.hasOwnProperty,
        tz = Object.prototype.propertyIsEnumerable,
        tH = (e, t, i) =>
          t in e
            ? tj(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        tK = (e, t) => {
          for (var i in t || (t = {})) tU.call(t, i) && tH(e, i, t[i]);
          if (tL) for (var i of tL(t)) tz.call(t, i) && tH(e, i, t[i]);
          return e;
        };
      class tV extends l {
        constructor(e) {
          var t;
          super(e),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.name = ex),
            (this.events = new r.EventEmitter()),
            (this.initialized = !1),
            (this.on = (e, t) => this.events.on(e, t)),
            (this.once = (e, t) => this.events.once(e, t)),
            (this.off = (e, t) => this.events.off(e, t)),
            (this.removeListener = (e, t) => this.events.removeListener(e, t)),
            (this.dispatchEnvelope = ({
              topic: e,
              message: t,
              sessionExists: i,
            }) => {
              if (!e || !t) return;
              let r = {
                topic: e,
                message: t,
                publishedAt: Date.now(),
                transportType: eU.link_mode,
              };
              this.relayer.onLinkMessageEvent(r, { sessionExists: i });
            }),
            (this.projectId = e?.projectId),
            (this.relayUrl = e?.relayUrl || eM),
            (this.customStoragePrefix =
              null != e && e.customStoragePrefix
                ? `:${e.customStoragePrefix}`
                : "");
          let i = (0, c.jI)({
              level:
                "string" == typeof e?.logger && e.logger ? e.logger : eA.logger,
            }),
            { logger: s, chunkLoggerController: n } = (0, c.Rt)({
              opts: i,
              maxSizeInBytes: e?.maxLogBlobSizeInBytes,
              loggerOverride: e?.logger,
            });
          (this.logChunkController = n),
            null != (t = this.logChunkController) &&
              t.downloadLogsBlobInBrowser &&
              (window.downloadLogsBlobInBrowser = async () => {
                var e, t;
                null != (e = this.logChunkController) &&
                  e.downloadLogsBlobInBrowser &&
                  (null == (t = this.logChunkController) ||
                    t.downloadLogsBlobInBrowser({
                      clientId: await this.crypto.getClientId(),
                    }));
              }),
            (this.logger = (0, c.Ep)(s, this.name)),
            (this.heartbeat = new o.C$()),
            (this.crypto = new e8(this, this.logger, e?.keychain)),
            (this.history = new tI(this, this.logger)),
            (this.expirer = new tP(this, this.logger)),
            (this.storage =
              null != e && e.storage
                ? e.storage
                : new a.Z(tK(tK({}, eq), e?.storageOptions))),
            (this.relayer = new tg({
              core: this,
              logger: this.logger,
              relayUrl: this.relayUrl,
              projectId: this.projectId,
            })),
            (this.pairing = new tE(this, this.logger)),
            (this.verify = new tx(this, this.logger, this.storage)),
            (this.echoClient = new tO(this.projectId || "", this.logger)),
            (this.linkModeSupportedApps = []),
            (this.eventClient = new t$(this, this.logger, e?.telemetryEnabled));
        }
        static async init(e) {
          let t = new tV(e);
          await t.initialize();
          let i = await t.crypto.getClientId();
          return await t.storage.setItem("WALLETCONNECT_CLIENT_ID", i), t;
        }
        get context() {
          return (0, c.Fd)(this.logger);
        }
        async start() {
          this.initialized || (await this.initialize());
        }
        async getLogsBlob() {
          var e;
          return null == (e = this.logChunkController)
            ? void 0
            : e.logsToBlob({ clientId: await this.crypto.getClientId() });
        }
        async addLinkModeSupportedApp(e) {
          this.linkModeSupportedApps.includes(e) ||
            (this.linkModeSupportedApps.push(e),
            await this.storage.setItem(ez, this.linkModeSupportedApps));
        }
        async initialize() {
          this.logger.trace("Initialized");
          try {
            await this.crypto.init(),
              await this.history.init(),
              await this.expirer.init(),
              await this.relayer.init(),
              await this.heartbeat.init(),
              await this.pairing.init(),
              (this.linkModeSupportedApps =
                (await this.storage.getItem(ez)) || []),
              (this.initialized = !0),
              this.logger.info("Core Initialization Success");
          } catch (e) {
            throw (
              (this.logger.warn(
                `Core Initialization Failure at epoch ${Date.now()}`,
                e
              ),
              this.logger.error(e.message),
              e)
            );
          }
        }
      }
      var tF = i(34155);
      let tB = "client",
        tJ = `wc@2:${tB}:`,
        tG = { name: tB, logger: "error" },
        tW = "WALLETCONNECT_DEEPLINK_CHOICE",
        tQ = "Proposal expired",
        tY = R.SEVEN_DAYS,
        tZ = {
          wc_sessionPropose: {
            req: { ttl: R.FIVE_MINUTES, prompt: !0, tag: 1100 },
            res: { ttl: R.FIVE_MINUTES, prompt: !1, tag: 1101 },
            reject: { ttl: R.FIVE_MINUTES, prompt: !1, tag: 1120 },
            autoReject: { ttl: R.FIVE_MINUTES, prompt: !1, tag: 1121 },
          },
          wc_sessionSettle: {
            req: { ttl: R.FIVE_MINUTES, prompt: !1, tag: 1102 },
            res: { ttl: R.FIVE_MINUTES, prompt: !1, tag: 1103 },
          },
          wc_sessionUpdate: {
            req: { ttl: R.ONE_DAY, prompt: !1, tag: 1104 },
            res: { ttl: R.ONE_DAY, prompt: !1, tag: 1105 },
          },
          wc_sessionExtend: {
            req: { ttl: R.ONE_DAY, prompt: !1, tag: 1106 },
            res: { ttl: R.ONE_DAY, prompt: !1, tag: 1107 },
          },
          wc_sessionRequest: {
            req: { ttl: R.FIVE_MINUTES, prompt: !0, tag: 1108 },
            res: { ttl: R.FIVE_MINUTES, prompt: !1, tag: 1109 },
          },
          wc_sessionEvent: {
            req: { ttl: R.FIVE_MINUTES, prompt: !0, tag: 1110 },
            res: { ttl: R.FIVE_MINUTES, prompt: !1, tag: 1111 },
          },
          wc_sessionDelete: {
            req: { ttl: R.ONE_DAY, prompt: !1, tag: 1112 },
            res: { ttl: R.ONE_DAY, prompt: !1, tag: 1113 },
          },
          wc_sessionPing: {
            req: { ttl: R.ONE_DAY, prompt: !1, tag: 1114 },
            res: { ttl: R.ONE_DAY, prompt: !1, tag: 1115 },
          },
          wc_sessionAuthenticate: {
            req: { ttl: R.ONE_HOUR, prompt: !0, tag: 1116 },
            res: { ttl: R.ONE_HOUR, prompt: !1, tag: 1117 },
            reject: { ttl: R.FIVE_MINUTES, prompt: !1, tag: 1118 },
            autoReject: { ttl: R.FIVE_MINUTES, prompt: !1, tag: 1119 },
          },
        },
        tX = { min: R.FIVE_MINUTES, max: R.SEVEN_DAYS },
        t0 = { idle: "IDLE", active: "ACTIVE" },
        t1 = [
          "wc_sessionPropose",
          "wc_sessionRequest",
          "wc_authRequest",
          "wc_sessionAuthenticate",
        ],
        t2 = "wc@1.5:auth:",
        t3 = `${t2}:PUB_KEY`;
      var t8 = Object.defineProperty,
        t4 = Object.defineProperties,
        t5 = Object.getOwnPropertyDescriptors,
        t6 = Object.getOwnPropertySymbols,
        t9 = Object.prototype.hasOwnProperty,
        t7 = Object.prototype.propertyIsEnumerable,
        ie = (e, t, i) =>
          t in e
            ? t8(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        it = (e, t) => {
          for (var i in t || (t = {})) t9.call(t, i) && ie(e, i, t[i]);
          if (t6) for (var i of t6(t)) t7.call(t, i) && ie(e, i, t[i]);
          return e;
        },
        ii = (e, t) => t4(e, t5(t));
      class ir extends E {
        constructor(e) {
          super(e),
            (this.name = "engine"),
            (this.events = new (s())()),
            (this.initialized = !1),
            (this.requestQueue = { state: t0.idle, queue: [] }),
            (this.sessionRequestQueue = { state: t0.idle, queue: [] }),
            (this.requestQueueDelay = R.ONE_SECOND),
            (this.expectedPairingMethodMap = new Map()),
            (this.recentlyDeletedMap = new Map()),
            (this.recentlyDeletedLimit = 200),
            (this.relayMessageCache = []),
            (this.init = async () => {
              this.initialized ||
                (await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                this.registerPairingEvents(),
                await this.registerLinkModeListeners(),
                this.client.core.pairing.register({ methods: Object.keys(tZ) }),
                (this.initialized = !0),
                setTimeout(() => {
                  (this.sessionRequestQueue.queue =
                    this.getPendingSessionRequests()),
                    this.processSessionRequestQueue();
                }, (0, R.toMiliseconds)(this.requestQueueDelay)));
            }),
            (this.connect = async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              let t = ii(it({}, e), {
                requiredNamespaces: e.requiredNamespaces || {},
                optionalNamespaces: e.optionalNamespaces || {},
              });
              await this.isValidConnect(t);
              let {
                  pairingTopic: i,
                  requiredNamespaces: r,
                  optionalNamespaces: s,
                  sessionProperties: n,
                  relays: a,
                } = t,
                o = i,
                c,
                h = !1;
              try {
                o && (h = this.client.core.pairing.pairings.get(o).active);
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    `connect() -> pairing.get(${o}) failed`
                  ),
                  e)
                );
              }
              if (!o || !h) {
                let { topic: e, uri: t } =
                  await this.client.core.pairing.create();
                (o = e), (c = t);
              }
              if (!o) {
                let { message: e } = (0, S.kCb)(
                  "NO_MATCHING_KEY",
                  `connect() pairing topic: ${o}`
                );
                throw Error(e);
              }
              let l = await this.client.core.crypto.generateKeyPair(),
                u = tZ.wc_sessionPropose.req.ttl || R.FIVE_MINUTES,
                p = (0, S.gn4)(u),
                d = it(
                  {
                    requiredNamespaces: r,
                    optionalNamespaces: s,
                    relays: a ?? [{ protocol: "irn" }],
                    proposer: { publicKey: l, metadata: this.client.metadata },
                    expiryTimestamp: p,
                    pairingTopic: o,
                  },
                  n && { sessionProperties: n }
                ),
                { reject: g, resolve: f, done: y } = (0, S.H1S)(u, tQ);
              this.events.once(
                (0, S.E0T)("session_connect"),
                async ({ error: e, session: t }) => {
                  if (e) g(e);
                  else if (t) {
                    t.self.publicKey = l;
                    let e = ii(it({}, t), {
                      pairingTopic: d.pairingTopic,
                      requiredNamespaces: d.requiredNamespaces,
                      optionalNamespaces: d.optionalNamespaces,
                      transportType: eU.relay,
                    });
                    await this.client.session.set(t.topic, e),
                      await this.setExpiry(t.topic, t.expiry),
                      o &&
                        (await this.client.core.pairing.updateMetadata({
                          topic: o,
                          metadata: t.peer.metadata,
                        })),
                      this.cleanupDuplicatePairings(e),
                      f(e);
                  }
                }
              );
              let m = await this.sendRequest({
                topic: o,
                method: "wc_sessionPropose",
                params: d,
                throwOnFailedPublish: !0,
              });
              return (
                await this.setProposal(m, it({ id: m }, d)),
                { uri: c, approval: y }
              );
            }),
            (this.pair = async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                return await this.client.core.pairing.pair(e);
              } catch (e) {
                throw (this.client.logger.error("pair() failed"), e);
              }
            }),
            (this.approve = async (e) => {
              var t, i, r;
              let s = this.client.core.eventClient.createEvent({
                properties: {
                  topic: null == (t = e?.id) ? void 0 : t.toString(),
                  trace: [eX.session_approve_started],
                },
              });
              try {
                this.isInitialized(), await this.confirmOnlineStateOrThrow();
              } catch (e) {
                throw (s.setError(e0.no_internet_connection), e);
              }
              try {
                await this.isValidProposalId(e?.id);
              } catch (t) {
                throw (
                  (this.client.logger.error(
                    `approve() -> proposal.get(${e?.id}) failed`
                  ),
                  s.setError(e0.proposal_not_found),
                  t)
                );
              }
              try {
                await this.isValidApprove(e);
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    "approve() -> isValidApprove() failed"
                  ),
                  s.setError(e0.session_approve_namespace_validation_failure),
                  e)
                );
              }
              let {
                  id: n,
                  relayProtocol: a,
                  namespaces: o,
                  sessionProperties: c,
                  sessionConfig: h,
                } = e,
                l = this.client.proposal.get(n);
              this.client.core.eventClient.deleteEvent({ eventId: s.eventId });
              let {
                  pairingTopic: u,
                  proposer: p,
                  requiredNamespaces: d,
                  optionalNamespaces: g,
                } = l,
                f =
                  null == (i = this.client.core.eventClient)
                    ? void 0
                    : i.getEvent({ topic: u });
              f ||
                (f =
                  null == (r = this.client.core.eventClient)
                    ? void 0
                    : r.createEvent({
                        type: eX.session_approve_started,
                        properties: {
                          topic: u,
                          trace: [
                            eX.session_approve_started,
                            eX.session_namespaces_validation_success,
                          ],
                        },
                      }));
              let y = await this.client.core.crypto.generateKeyPair(),
                m = p.publicKey,
                v = await this.client.core.crypto.generateSharedKey(y, m),
                w = it(
                  it(
                    {
                      relay: { protocol: a ?? "irn" },
                      namespaces: o,
                      controller: {
                        publicKey: y,
                        metadata: this.client.metadata,
                      },
                      expiry: (0, S.gn4)(tY),
                    },
                    c && { sessionProperties: c }
                  ),
                  h && { sessionConfig: h }
                ),
                _ = eU.relay;
              f.addTrace(eX.subscribing_session_topic);
              try {
                await this.client.core.relayer.subscribe(v, {
                  transportType: _,
                });
              } catch (e) {
                throw (f.setError(e0.subscribe_session_topic_failure), e);
              }
              f.addTrace(eX.subscribe_session_topic_success);
              let b = ii(it({}, w), {
                topic: v,
                requiredNamespaces: d,
                optionalNamespaces: g,
                pairingTopic: u,
                acknowledged: !1,
                self: w.controller,
                peer: { publicKey: p.publicKey, metadata: p.metadata },
                controller: y,
                transportType: eU.relay,
              });
              await this.client.session.set(v, b), f.addTrace(eX.store_session);
              try {
                f.addTrace(eX.publishing_session_settle),
                  await this.sendRequest({
                    topic: v,
                    method: "wc_sessionSettle",
                    params: w,
                    throwOnFailedPublish: !0,
                  }).catch((e) => {
                    throw (f?.setError(e0.session_settle_publish_failure), e);
                  }),
                  f.addTrace(eX.session_settle_publish_success),
                  f.addTrace(eX.publishing_session_approve),
                  await this.sendResult({
                    id: n,
                    topic: u,
                    result: {
                      relay: { protocol: a ?? "irn" },
                      responderPublicKey: y,
                    },
                    throwOnFailedPublish: !0,
                  }).catch((e) => {
                    throw (f?.setError(e0.session_approve_publish_failure), e);
                  }),
                  f.addTrace(eX.session_approve_publish_success);
              } catch (e) {
                throw (
                  (this.client.logger.error(e),
                  this.client.session.delete(
                    v,
                    (0, S.D6H)("USER_DISCONNECTED")
                  ),
                  await this.client.core.relayer.unsubscribe(v),
                  e)
                );
              }
              return (
                this.client.core.eventClient.deleteEvent({
                  eventId: f.eventId,
                }),
                await this.client.core.pairing.updateMetadata({
                  topic: u,
                  metadata: p.metadata,
                }),
                await this.client.proposal.delete(
                  n,
                  (0, S.D6H)("USER_DISCONNECTED")
                ),
                await this.client.core.pairing.activate({ topic: u }),
                await this.setExpiry(v, (0, S.gn4)(tY)),
                {
                  topic: v,
                  acknowledged: () =>
                    Promise.resolve(this.client.session.get(v)),
                }
              );
            }),
            (this.reject = async (e) => {
              let t;
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidReject(e);
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    "reject() -> isValidReject() failed"
                  ),
                  e)
                );
              }
              let { id: i, reason: r } = e;
              try {
                t = this.client.proposal.get(i).pairingTopic;
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    `reject() -> proposal.get(${i}) failed`
                  ),
                  e)
                );
              }
              t &&
                (await this.sendError({
                  id: i,
                  topic: t,
                  error: r,
                  rpcOpts: tZ.wc_sessionPropose.reject,
                }),
                await this.client.proposal.delete(
                  i,
                  (0, S.D6H)("USER_DISCONNECTED")
                ));
            }),
            (this.update = async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidUpdate(e);
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    "update() -> isValidUpdate() failed"
                  ),
                  e)
                );
              }
              let { topic: t, namespaces: i } = e,
                { done: r, resolve: s, reject: n } = (0, S.H1S)(),
                a = (0, x.payloadId)(),
                o = (0, x.getBigIntRpcId)().toString(),
                c = this.client.session.get(t).namespaces;
              return (
                this.events.once(
                  (0, S.E0T)("session_update", a),
                  ({ error: e }) => {
                    e ? n(e) : s();
                  }
                ),
                await this.client.session.update(t, { namespaces: i }),
                await this.sendRequest({
                  topic: t,
                  method: "wc_sessionUpdate",
                  params: { namespaces: i },
                  throwOnFailedPublish: !0,
                  clientRpcId: a,
                  relayRpcId: o,
                }).catch((e) => {
                  this.client.logger.error(e),
                    this.client.session.update(t, { namespaces: c }),
                    n(e);
                }),
                { acknowledged: r }
              );
            }),
            (this.extend = async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidExtend(e);
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    "extend() -> isValidExtend() failed"
                  ),
                  e)
                );
              }
              let { topic: t } = e,
                i = (0, x.payloadId)(),
                { done: r, resolve: s, reject: n } = (0, S.H1S)();
              return (
                this.events.once(
                  (0, S.E0T)("session_extend", i),
                  ({ error: e }) => {
                    e ? n(e) : s();
                  }
                ),
                await this.setExpiry(t, (0, S.gn4)(tY)),
                this.sendRequest({
                  topic: t,
                  method: "wc_sessionExtend",
                  params: {},
                  clientRpcId: i,
                  throwOnFailedPublish: !0,
                }).catch((e) => {
                  n(e);
                }),
                { acknowledged: r }
              );
            }),
            (this.request = async (e) => {
              this.isInitialized();
              try {
                await this.isValidRequest(e);
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    "request() -> isValidRequest() failed"
                  ),
                  e)
                );
              }
              let {
                  chainId: t,
                  request: i,
                  topic: r,
                  expiry: s = tZ.wc_sessionRequest.req.ttl,
                } = e,
                n = this.client.session.get(r);
              n?.transportType === eU.relay &&
                (await this.confirmOnlineStateOrThrow());
              let a = (0, x.payloadId)(),
                o = (0, x.getBigIntRpcId)().toString(),
                {
                  done: c,
                  resolve: h,
                  reject: l,
                } = (0, S.H1S)(s, "Request expired. Please try again.");
              this.events.once(
                (0, S.E0T)("session_request", a),
                ({ error: e, result: t }) => {
                  e ? l(e) : h(t);
                }
              );
              let u = this.getAppLinkIfEnabled(
                n.peer.metadata,
                n.transportType
              );
              return u
                ? (await this.sendRequest({
                    clientRpcId: a,
                    relayRpcId: o,
                    topic: r,
                    method: "wc_sessionRequest",
                    params: {
                      request: ii(it({}, i), {
                        expiryTimestamp: (0, S.gn4)(s),
                      }),
                      chainId: t,
                    },
                    expiry: s,
                    throwOnFailedPublish: !0,
                    appLink: u,
                  }).catch((e) => l(e)),
                  this.client.events.emit("session_request_sent", {
                    topic: r,
                    request: i,
                    chainId: t,
                    id: a,
                  }),
                  await c())
                : await Promise.all([
                    new Promise(async (e) => {
                      await this.sendRequest({
                        clientRpcId: a,
                        relayRpcId: o,
                        topic: r,
                        method: "wc_sessionRequest",
                        params: {
                          request: ii(it({}, i), {
                            expiryTimestamp: (0, S.gn4)(s),
                          }),
                          chainId: t,
                        },
                        expiry: s,
                        throwOnFailedPublish: !0,
                      }).catch((e) => l(e)),
                        this.client.events.emit("session_request_sent", {
                          topic: r,
                          request: i,
                          chainId: t,
                          id: a,
                        }),
                        e();
                    }),
                    new Promise(async (e) => {
                      var t;
                      if (
                        !(null != (t = n.sessionConfig) && t.disableDeepLink)
                      ) {
                        let e = await (0, S.bW6)(this.client.core.storage, tW);
                        (0, S.HhN)({ id: a, topic: r, wcDeepLink: e });
                      }
                      e();
                    }),
                    c(),
                  ]).then((e) => e[2]);
            }),
            (this.respond = async (e) => {
              this.isInitialized(), await this.isValidRespond(e);
              let { topic: t, response: i } = e,
                { id: r } = i,
                s = this.client.session.get(t);
              s.transportType === eU.relay &&
                (await this.confirmOnlineStateOrThrow());
              let n = this.getAppLinkIfEnabled(
                s.peer.metadata,
                s.transportType
              );
              (0, x.isJsonRpcResult)(i)
                ? await this.sendResult({
                    id: r,
                    topic: t,
                    result: i.result,
                    throwOnFailedPublish: !0,
                    appLink: n,
                  })
                : (0, x.isJsonRpcError)(i) &&
                  (await this.sendError({
                    id: r,
                    topic: t,
                    error: i.error,
                    appLink: n,
                  })),
                this.cleanupAfterResponse(e);
            }),
            (this.ping = async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidPing(e);
              } catch (e) {
                throw (
                  (this.client.logger.error("ping() -> isValidPing() failed"),
                  e)
                );
              }
              let { topic: t } = e;
              if (this.client.session.keys.includes(t)) {
                let e = (0, x.payloadId)(),
                  i = (0, x.getBigIntRpcId)().toString(),
                  { done: r, resolve: s, reject: n } = (0, S.H1S)();
                this.events.once(
                  (0, S.E0T)("session_ping", e),
                  ({ error: e }) => {
                    e ? n(e) : s();
                  }
                ),
                  await Promise.all([
                    this.sendRequest({
                      topic: t,
                      method: "wc_sessionPing",
                      params: {},
                      throwOnFailedPublish: !0,
                      clientRpcId: e,
                      relayRpcId: i,
                    }),
                    r(),
                  ]);
              } else
                this.client.core.pairing.pairings.keys.includes(t) &&
                  (await this.client.core.pairing.ping({ topic: t }));
            }),
            (this.emit = async (e) => {
              this.isInitialized(),
                await this.confirmOnlineStateOrThrow(),
                await this.isValidEmit(e);
              let { topic: t, event: i, chainId: r } = e,
                s = (0, x.getBigIntRpcId)().toString();
              await this.sendRequest({
                topic: t,
                method: "wc_sessionEvent",
                params: { event: i, chainId: r },
                throwOnFailedPublish: !0,
                relayRpcId: s,
              });
            }),
            (this.disconnect = async (e) => {
              this.isInitialized(),
                await this.confirmOnlineStateOrThrow(),
                await this.isValidDisconnect(e);
              let { topic: t } = e;
              if (this.client.session.keys.includes(t))
                await this.sendRequest({
                  topic: t,
                  method: "wc_sessionDelete",
                  params: (0, S.D6H)("USER_DISCONNECTED"),
                  throwOnFailedPublish: !0,
                }),
                  await this.deleteSession({ topic: t, emitEvent: !1 });
              else if (this.client.core.pairing.pairings.keys.includes(t))
                await this.client.core.pairing.disconnect({ topic: t });
              else {
                let { message: e } = (0, S.kCb)(
                  "MISMATCHED_TOPIC",
                  `Session or pairing topic not found: ${t}`
                );
                throw Error(e);
              }
            }),
            (this.find = (e) => (
              this.isInitialized(),
              this.client.session.getAll().filter((t) => (0, S.Ih8)(t, e))
            )),
            (this.getPendingSessionRequests = () =>
              this.client.pendingRequest.getAll()),
            (this.authenticate = async (e, t) => {
              var i;
              let r;
              this.isInitialized(), this.isValidAuthenticate(e);
              let s =
                  t &&
                  this.client.core.linkModeSupportedApps.includes(t) &&
                  (null == (i = this.client.metadata.redirect)
                    ? void 0
                    : i.linkMode),
                n = s ? eU.link_mode : eU.relay;
              n === eU.relay && (await this.confirmOnlineStateOrThrow());
              let {
                  chains: a,
                  statement: o = "",
                  uri: c,
                  domain: h,
                  nonce: l,
                  type: u,
                  exp: p,
                  nbf: d,
                  methods: g = [],
                  expiry: f,
                } = e,
                y = [...(e.resources || [])],
                { topic: m, uri: v } = await this.client.core.pairing.create({
                  methods: ["wc_sessionAuthenticate"],
                  transportType: n,
                });
              this.client.logger.info({
                message: "Generated new pairing",
                pairing: { topic: m, uri: v },
              });
              let w = await this.client.core.crypto.generateKeyPair(),
                _ = (0, S.YmJ)(w);
              if (
                (await Promise.all([
                  this.client.auth.authKeys.set(t3, {
                    responseTopic: _,
                    publicKey: w,
                  }),
                  this.client.auth.pairingTopics.set(_, {
                    topic: _,
                    pairingTopic: m,
                  }),
                ]),
                await this.client.core.relayer.subscribe(_, {
                  transportType: n,
                }),
                this.client.logger.info(
                  `sending request to new pairing topic: ${m}`
                ),
                g.length > 0)
              ) {
                let { namespace: e } = (0, S.DQe)(a[0]),
                  t = (0, S.IkP)(e, "request", g);
                (0, S.hA9)(y) && (t = (0, S.qJM)(t, y.pop())), y.push(t);
              }
              let b =
                  f && f > tZ.wc_sessionAuthenticate.req.ttl
                    ? f
                    : tZ.wc_sessionAuthenticate.req.ttl,
                E = {
                  authPayload: {
                    type: u ?? "caip122",
                    chains: a,
                    statement: o,
                    aud: c,
                    domain: h,
                    version: "1",
                    nonce: l,
                    iat: new Date().toISOString(),
                    exp: p,
                    nbf: d,
                    resources: y,
                  },
                  requester: { publicKey: w, metadata: this.client.metadata },
                  expiryTimestamp: (0, S.gn4)(b),
                },
                I = {
                  requiredNamespaces: {},
                  optionalNamespaces: {
                    eip155: {
                      chains: a,
                      methods: [...new Set(["personal_sign", ...g])],
                      events: ["chainChanged", "accountsChanged"],
                    },
                  },
                  relays: [{ protocol: "irn" }],
                  pairingTopic: m,
                  proposer: { publicKey: w, metadata: this.client.metadata },
                  expiryTimestamp: (0, S.gn4)(tZ.wc_sessionPropose.req.ttl),
                },
                {
                  done: P,
                  resolve: C,
                  reject: R,
                } = (0, S.H1S)(b, "Request expired"),
                T = async ({ error: e, session: t }) => {
                  if ((this.events.off((0, S.E0T)("session_request", A), O), e))
                    R(e);
                  else if (t) {
                    (t.self.publicKey = w),
                      await this.client.session.set(t.topic, t),
                      await this.setExpiry(t.topic, t.expiry),
                      m &&
                        (await this.client.core.pairing.updateMetadata({
                          topic: m,
                          metadata: t.peer.metadata,
                        }));
                    let e = this.client.session.get(t.topic);
                    await this.deleteProposal(q), C({ session: e });
                  }
                },
                O = async (e) => {
                  var i, r, s;
                  let a;
                  if (
                    (await this.deletePendingAuthRequest(A, {
                      message: "fulfilled",
                      code: 0,
                    }),
                    e.error)
                  ) {
                    let t = (0, S.D6H)(
                      "WC_METHOD_UNSUPPORTED",
                      "wc_sessionAuthenticate"
                    );
                    return e.error.code === t.code
                      ? void 0
                      : (this.events.off((0, S.E0T)("session_connect"), T),
                        R(e.error.message));
                  }
                  await this.deleteProposal(q),
                    this.events.off((0, S.E0T)("session_connect"), T);
                  let { cacaos: o, responder: c } = e.result,
                    h = [],
                    l = [];
                  for (let e of o) {
                    (await (0, S.c4l)({
                      cacao: e,
                      projectId: this.client.core.projectId,
                    })) ||
                      (this.client.logger.error(
                        e,
                        "Signature verification failed"
                      ),
                      R(
                        (0, S.D6H)(
                          "SESSION_SETTLEMENT_FAILED",
                          "Signature verification failed"
                        )
                      ));
                    let { p: t } = e,
                      i = (0, S.hA9)(t.resources),
                      r = [(0, S.DJo)(t.iss)],
                      s = (0, S.NmC)(t.iss);
                    if (i) {
                      let e = (0, S.Y31)(i),
                        t = (0, S.ouN)(i);
                      h.push(...e), r.push(...t);
                    }
                    for (let e of r) l.push(`${e}:${s}`);
                  }
                  let u = await this.client.core.crypto.generateSharedKey(
                    w,
                    c.publicKey
                  );
                  h.length > 0 &&
                    ((a = {
                      topic: u,
                      acknowledged: !0,
                      self: { publicKey: w, metadata: this.client.metadata },
                      peer: c,
                      controller: c.publicKey,
                      expiry: (0, S.gn4)(tY),
                      requiredNamespaces: {},
                      optionalNamespaces: {},
                      relay: { protocol: "irn" },
                      pairingTopic: m,
                      namespaces: (0, S.E12)([...new Set(h)], [...new Set(l)]),
                      transportType: n,
                    }),
                    await this.client.core.relayer.subscribe(u, {
                      transportType: n,
                    }),
                    await this.client.session.set(u, a),
                    m &&
                      (await this.client.core.pairing.updateMetadata({
                        topic: m,
                        metadata: c.metadata,
                      })),
                    (a = this.client.session.get(u))),
                    null != (i = this.client.metadata.redirect) &&
                      i.linkMode &&
                      null != (r = c.metadata.redirect) &&
                      r.linkMode &&
                      null != (s = c.metadata.redirect) &&
                      s.universal &&
                      t &&
                      (this.client.core.addLinkModeSupportedApp(
                        c.metadata.redirect.universal
                      ),
                      this.client.session.update(u, {
                        transportType: eU.link_mode,
                      })),
                    C({ auths: o, session: a });
                },
                A = (0, x.payloadId)(),
                q = (0, x.payloadId)();
              this.events.once((0, S.E0T)("session_connect"), T),
                this.events.once((0, S.E0T)("session_request", A), O);
              try {
                if (s) {
                  let e = (0, x.formatJsonRpcRequest)(
                    "wc_sessionAuthenticate",
                    E,
                    A
                  );
                  this.client.core.history.set(m, e);
                  let i = await this.client.core.crypto.encode("", e, {
                    type: S.FpL,
                    encoding: S.zl_,
                  });
                  r = (0, S.L9d)(t, m, i);
                } else
                  await Promise.all([
                    this.sendRequest({
                      topic: m,
                      method: "wc_sessionAuthenticate",
                      params: E,
                      expiry: e.expiry,
                      throwOnFailedPublish: !0,
                      clientRpcId: A,
                    }),
                    this.sendRequest({
                      topic: m,
                      method: "wc_sessionPropose",
                      params: I,
                      expiry: tZ.wc_sessionPropose.req.ttl,
                      throwOnFailedPublish: !0,
                      clientRpcId: q,
                    }),
                  ]);
              } catch (e) {
                throw (
                  (this.events.off((0, S.E0T)("session_connect"), T),
                  this.events.off((0, S.E0T)("session_request", A), O),
                  e)
                );
              }
              return (
                await this.setProposal(q, it({ id: q }, I)),
                await this.setAuthRequest(A, {
                  request: ii(it({}, E), { verifyContext: {} }),
                  pairingTopic: m,
                  transportType: n,
                }),
                { uri: r ?? v, response: P }
              );
            }),
            (this.approveSessionAuthenticate = async (e) => {
              let t;
              let { id: i, auths: r } = e,
                s = this.client.core.eventClient.createEvent({
                  properties: {
                    topic: i.toString(),
                    trace: [e1.authenticated_session_approve_started],
                  },
                });
              try {
                this.isInitialized();
              } catch (e) {
                throw (s.setError(e2.no_internet_connection), e);
              }
              let n = this.getPendingAuthRequest(i);
              if (!n)
                throw (
                  (s.setError(
                    e2.authenticated_session_pending_request_not_found
                  ),
                  Error(`Could not find pending auth request with id ${i}`))
                );
              let a = n.transportType || eU.relay;
              a === eU.relay && (await this.confirmOnlineStateOrThrow());
              let o = n.requester.publicKey,
                c = await this.client.core.crypto.generateKeyPair(),
                h = (0, S.YmJ)(o),
                l = { type: S.rVF, receiverPublicKey: o, senderPublicKey: c },
                u = [],
                p = [];
              for (let e of r) {
                if (
                  !(await (0, S.c4l)({
                    cacao: e,
                    projectId: this.client.core.projectId,
                  }))
                ) {
                  s.setError(e2.invalid_cacao);
                  let e = (0, S.D6H)(
                    "SESSION_SETTLEMENT_FAILED",
                    "Signature verification failed"
                  );
                  throw (
                    (await this.sendError({
                      id: i,
                      topic: h,
                      error: e,
                      encodeOpts: l,
                    }),
                    Error(e.message))
                  );
                }
                s.addTrace(e1.cacaos_verified);
                let { p: t } = e,
                  r = (0, S.hA9)(t.resources),
                  n = [(0, S.DJo)(t.iss)],
                  a = (0, S.NmC)(t.iss);
                if (r) {
                  let e = (0, S.Y31)(r),
                    t = (0, S.ouN)(r);
                  u.push(...e), n.push(...t);
                }
                for (let e of n) p.push(`${e}:${a}`);
              }
              let d = await this.client.core.crypto.generateSharedKey(c, o);
              if (
                (s.addTrace(e1.create_authenticated_session_topic),
                u?.length > 0)
              ) {
                (t = {
                  topic: d,
                  acknowledged: !0,
                  self: { publicKey: c, metadata: this.client.metadata },
                  peer: { publicKey: o, metadata: n.requester.metadata },
                  controller: o,
                  expiry: (0, S.gn4)(tY),
                  authentication: r,
                  requiredNamespaces: {},
                  optionalNamespaces: {},
                  relay: { protocol: "irn" },
                  pairingTopic: n.pairingTopic,
                  namespaces: (0, S.E12)([...new Set(u)], [...new Set(p)]),
                  transportType: a,
                }),
                  s.addTrace(e1.subscribing_authenticated_session_topic);
                try {
                  await this.client.core.relayer.subscribe(d, {
                    transportType: a,
                  });
                } catch (e) {
                  throw (
                    (s.setError(
                      e2.subscribe_authenticated_session_topic_failure
                    ),
                    e)
                  );
                }
                s.addTrace(e1.subscribe_authenticated_session_topic_success),
                  await this.client.session.set(d, t),
                  s.addTrace(e1.store_authenticated_session),
                  await this.client.core.pairing.updateMetadata({
                    topic: n.pairingTopic,
                    metadata: n.requester.metadata,
                  });
              }
              s.addTrace(e1.publishing_authenticated_session_approve);
              try {
                await this.sendResult({
                  topic: h,
                  id: i,
                  result: {
                    cacaos: r,
                    responder: { publicKey: c, metadata: this.client.metadata },
                  },
                  encodeOpts: l,
                  throwOnFailedPublish: !0,
                  appLink: this.getAppLinkIfEnabled(n.requester.metadata, a),
                });
              } catch (e) {
                throw (
                  (s.setError(e2.authenticated_session_approve_publish_failure),
                  e)
                );
              }
              return (
                await this.client.auth.requests.delete(i, {
                  message: "fulfilled",
                  code: 0,
                }),
                await this.client.core.pairing.activate({
                  topic: n.pairingTopic,
                }),
                this.client.core.eventClient.deleteEvent({
                  eventId: s.eventId,
                }),
                { session: t }
              );
            }),
            (this.rejectSessionAuthenticate = async (e) => {
              this.isInitialized();
              let { id: t, reason: i } = e,
                r = this.getPendingAuthRequest(t);
              if (!r)
                throw Error(`Could not find pending auth request with id ${t}`);
              r.transportType === eU.relay &&
                (await this.confirmOnlineStateOrThrow());
              let s = r.requester.publicKey,
                n = await this.client.core.crypto.generateKeyPair(),
                a = (0, S.YmJ)(s),
                o = { type: S.rVF, receiverPublicKey: s, senderPublicKey: n };
              await this.sendError({
                id: t,
                topic: a,
                error: i,
                encodeOpts: o,
                rpcOpts: tZ.wc_sessionAuthenticate.reject,
                appLink: this.getAppLinkIfEnabled(
                  r.requester.metadata,
                  r.transportType
                ),
              }),
                await this.client.auth.requests.delete(t, {
                  message: "rejected",
                  code: 0,
                }),
                await this.client.proposal.delete(
                  t,
                  (0, S.D6H)("USER_DISCONNECTED")
                );
            }),
            (this.formatAuthMessage = (e) => {
              this.isInitialized();
              let { request: t, iss: i } = e;
              return (0, S.wvx)(t, i);
            }),
            (this.processRelayMessageCache = () => {
              setTimeout(async () => {
                if (0 !== this.relayMessageCache.length)
                  for (; this.relayMessageCache.length > 0; )
                    try {
                      let e = this.relayMessageCache.shift();
                      e && (await this.onRelayMessage(e));
                    } catch (e) {
                      this.client.logger.error(e);
                    }
              }, 50);
            }),
            (this.cleanupDuplicatePairings = async (e) => {
              if (e.pairingTopic)
                try {
                  let t = this.client.core.pairing.pairings.get(e.pairingTopic),
                    i = this.client.core.pairing.pairings
                      .getAll()
                      .filter((i) => {
                        var r, s;
                        return (
                          (null == (r = i.peerMetadata) ? void 0 : r.url) &&
                          (null == (s = i.peerMetadata) ? void 0 : s.url) ===
                            e.peer.metadata.url &&
                          i.topic &&
                          i.topic !== t.topic
                        );
                      });
                  if (0 === i.length) return;
                  this.client.logger.info(
                    `Cleaning up ${i.length} duplicate pairing(s)`
                  ),
                    await Promise.all(
                      i.map((e) =>
                        this.client.core.pairing.disconnect({ topic: e.topic })
                      )
                    ),
                    this.client.logger.info(
                      "Duplicate pairings clean up finished"
                    );
                } catch (e) {
                  this.client.logger.error(e);
                }
            }),
            (this.deleteSession = async (e) => {
              var t;
              let {
                  topic: i,
                  expirerHasDeleted: r = !1,
                  emitEvent: s = !0,
                  id: n = 0,
                } = e,
                { self: a } = this.client.session.get(i);
              await this.client.core.relayer.unsubscribe(i),
                await this.client.session.delete(
                  i,
                  (0, S.D6H)("USER_DISCONNECTED")
                ),
                this.addToRecentlyDeleted(i, "session"),
                this.client.core.crypto.keychain.has(a.publicKey) &&
                  (await this.client.core.crypto.deleteKeyPair(a.publicKey)),
                this.client.core.crypto.keychain.has(i) &&
                  (await this.client.core.crypto.deleteSymKey(i)),
                r || this.client.core.expirer.del(i),
                this.client.core.storage
                  .removeItem(tW)
                  .catch((e) => this.client.logger.warn(e)),
                this.getPendingSessionRequests().forEach((e) => {
                  e.topic === i &&
                    this.deletePendingSessionRequest(
                      e.id,
                      (0, S.D6H)("USER_DISCONNECTED")
                    );
                }),
                i ===
                  (null == (t = this.sessionRequestQueue.queue[0])
                    ? void 0
                    : t.topic) && (this.sessionRequestQueue.state = t0.idle),
                s &&
                  this.client.events.emit("session_delete", {
                    id: n,
                    topic: i,
                  });
            }),
            (this.deleteProposal = async (e, t) => {
              if (t)
                try {
                  let t = this.client.proposal.get(e),
                    i = this.client.core.eventClient.getEvent({
                      topic: t.pairingTopic,
                    });
                  i?.setError(e0.proposal_expired);
                } catch {}
              await Promise.all([
                this.client.proposal.delete(e, (0, S.D6H)("USER_DISCONNECTED")),
                t ? Promise.resolve() : this.client.core.expirer.del(e),
              ]),
                this.addToRecentlyDeleted(e, "proposal");
            }),
            (this.deletePendingSessionRequest = async (e, t, i = !1) => {
              await Promise.all([
                this.client.pendingRequest.delete(e, t),
                i ? Promise.resolve() : this.client.core.expirer.del(e),
              ]),
                this.addToRecentlyDeleted(e, "request"),
                (this.sessionRequestQueue.queue =
                  this.sessionRequestQueue.queue.filter((t) => t.id !== e)),
                i &&
                  ((this.sessionRequestQueue.state = t0.idle),
                  this.client.events.emit("session_request_expire", { id: e }));
            }),
            (this.deletePendingAuthRequest = async (e, t, i = !1) => {
              await Promise.all([
                this.client.auth.requests.delete(e, t),
                i ? Promise.resolve() : this.client.core.expirer.del(e),
              ]);
            }),
            (this.setExpiry = async (e, t) => {
              this.client.session.keys.includes(e) &&
                (this.client.core.expirer.set(e, t),
                await this.client.session.update(e, { expiry: t }));
            }),
            (this.setProposal = async (e, t) => {
              this.client.core.expirer.set(
                e,
                (0, S.gn4)(tZ.wc_sessionPropose.req.ttl)
              ),
                await this.client.proposal.set(e, t);
            }),
            (this.setAuthRequest = async (e, t) => {
              let {
                request: i,
                pairingTopic: r,
                transportType: s = eU.relay,
              } = t;
              this.client.core.expirer.set(e, i.expiryTimestamp),
                await this.client.auth.requests.set(e, {
                  authPayload: i.authPayload,
                  requester: i.requester,
                  expiryTimestamp: i.expiryTimestamp,
                  id: e,
                  pairingTopic: r,
                  verifyContext: i.verifyContext,
                  transportType: s,
                });
            }),
            (this.setPendingSessionRequest = async (e) => {
              let { id: t, topic: i, params: r, verifyContext: s } = e,
                n =
                  r.request.expiryTimestamp ||
                  (0, S.gn4)(tZ.wc_sessionRequest.req.ttl);
              this.client.core.expirer.set(t, n),
                await this.client.pendingRequest.set(t, {
                  id: t,
                  topic: i,
                  params: r,
                  verifyContext: s,
                });
            }),
            (this.sendRequest = async (e) => {
              let t, r;
              let {
                  topic: s,
                  method: n,
                  params: a,
                  expiry: o,
                  relayRpcId: c,
                  clientRpcId: h,
                  throwOnFailedPublish: l,
                  appLink: u,
                } = e,
                p = (0, x.formatJsonRpcRequest)(n, a, h),
                d = !!u;
              try {
                let e = d ? S.zl_ : S.$dT;
                t = await this.client.core.crypto.encode(s, p, { encoding: e });
              } catch (e) {
                throw (
                  (await this.cleanup(),
                  this.client.logger.error(
                    `sendRequest() -> core.crypto.encode() for topic ${s} failed`
                  ),
                  e)
                );
              }
              if (t1.includes(n)) {
                let e = (0, S.rjm)(JSON.stringify(p)),
                  i = (0, S.rjm)(t);
                r = await this.client.core.verify.register({
                  id: i,
                  decryptedId: e,
                });
              }
              let g = tZ[n].req;
              if (
                ((g.attestation = r),
                o && (g.ttl = o),
                c && (g.id = c),
                this.client.core.history.set(s, p),
                d)
              ) {
                let e = (0, S.L9d)(u, s, t);
                await i.g.Linking.openURL(e, this.client.name);
              } else {
                let e = tZ[n].req;
                o && (e.ttl = o),
                  c && (e.id = c),
                  l
                    ? ((e.internal = ii(it({}, e.internal), {
                        throwOnFailedPublish: !0,
                      })),
                      await this.client.core.relayer.publish(s, t, e))
                    : this.client.core.relayer
                        .publish(s, t, e)
                        .catch((e) => this.client.logger.error(e));
              }
              return p.id;
            }),
            (this.sendResult = async (e) => {
              let t, r;
              let {
                  id: s,
                  topic: n,
                  result: a,
                  throwOnFailedPublish: o,
                  encodeOpts: c,
                  appLink: h,
                } = e,
                l = (0, x.formatJsonRpcResult)(s, a),
                u = h && "u" > typeof (null == i.g ? void 0 : i.g.Linking);
              try {
                let e = u ? S.zl_ : S.$dT;
                t = await this.client.core.crypto.encode(
                  n,
                  l,
                  ii(it({}, c || {}), { encoding: e })
                );
              } catch (e) {
                throw (
                  (await this.cleanup(),
                  this.client.logger.error(
                    `sendResult() -> core.crypto.encode() for topic ${n} failed`
                  ),
                  e)
                );
              }
              try {
                r = await this.client.core.history.get(n, s);
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    `sendResult() -> history.get(${n}, ${s}) failed`
                  ),
                  e)
                );
              }
              if (u) {
                let e = (0, S.L9d)(h, n, t);
                await i.g.Linking.openURL(e, this.client.name);
              } else {
                let e = tZ[r.request.method].res;
                o
                  ? ((e.internal = ii(it({}, e.internal), {
                      throwOnFailedPublish: !0,
                    })),
                    await this.client.core.relayer.publish(n, t, e))
                  : this.client.core.relayer
                      .publish(n, t, e)
                      .catch((e) => this.client.logger.error(e));
              }
              await this.client.core.history.resolve(l);
            }),
            (this.sendError = async (e) => {
              let t, r;
              let {
                  id: s,
                  topic: n,
                  error: a,
                  encodeOpts: o,
                  rpcOpts: c,
                  appLink: h,
                } = e,
                l = (0, x.formatJsonRpcError)(s, a),
                u = h && "u" > typeof (null == i.g ? void 0 : i.g.Linking);
              try {
                let e = u ? S.zl_ : S.$dT;
                t = await this.client.core.crypto.encode(
                  n,
                  l,
                  ii(it({}, o || {}), { encoding: e })
                );
              } catch (e) {
                throw (
                  (await this.cleanup(),
                  this.client.logger.error(
                    `sendError() -> core.crypto.encode() for topic ${n} failed`
                  ),
                  e)
                );
              }
              try {
                r = await this.client.core.history.get(n, s);
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    `sendError() -> history.get(${n}, ${s}) failed`
                  ),
                  e)
                );
              }
              if (u) {
                let e = (0, S.L9d)(h, n, t);
                await i.g.Linking.openURL(e, this.client.name);
              } else {
                let e = c || tZ[r.request.method].res;
                this.client.core.relayer.publish(n, t, e);
              }
              await this.client.core.history.resolve(l);
            }),
            (this.cleanup = async () => {
              let e = [],
                t = [];
              this.client.session.getAll().forEach((t) => {
                let i = !1;
                (0, S.BwD)(t.expiry) && (i = !0),
                  this.client.core.crypto.keychain.has(t.topic) || (i = !0),
                  i && e.push(t.topic);
              }),
                this.client.proposal.getAll().forEach((e) => {
                  (0, S.BwD)(e.expiryTimestamp) && t.push(e.id);
                }),
                await Promise.all([
                  ...e.map((e) => this.deleteSession({ topic: e })),
                  ...t.map((e) => this.deleteProposal(e)),
                ]);
            }),
            (this.onRelayEventRequest = async (e) => {
              this.requestQueue.queue.push(e),
                await this.processRequestsQueue();
            }),
            (this.processRequestsQueue = async () => {
              if (this.requestQueue.state === t0.active) {
                this.client.logger.info(
                  "Request queue already active, skipping..."
                );
                return;
              }
              for (
                this.client.logger.info(
                  `Request queue starting with ${this.requestQueue.queue.length} requests`
                );
                this.requestQueue.queue.length > 0;

              ) {
                this.requestQueue.state = t0.active;
                let e = this.requestQueue.queue.shift();
                if (e)
                  try {
                    await this.processRequest(e);
                  } catch (e) {
                    this.client.logger.warn(e);
                  }
              }
              this.requestQueue.state = t0.idle;
            }),
            (this.processRequest = async (e) => {
              let {
                  topic: t,
                  payload: i,
                  attestation: r,
                  transportType: s,
                  encryptedId: n,
                } = e,
                a = i.method;
              if (
                !this.shouldIgnorePairingRequest({ topic: t, requestMethod: a })
              )
                switch (a) {
                  case "wc_sessionPropose":
                    return await this.onSessionProposeRequest({
                      topic: t,
                      payload: i,
                      attestation: r,
                      encryptedId: n,
                    });
                  case "wc_sessionSettle":
                    return await this.onSessionSettleRequest(t, i);
                  case "wc_sessionUpdate":
                    return await this.onSessionUpdateRequest(t, i);
                  case "wc_sessionExtend":
                    return await this.onSessionExtendRequest(t, i);
                  case "wc_sessionPing":
                    return await this.onSessionPingRequest(t, i);
                  case "wc_sessionDelete":
                    return await this.onSessionDeleteRequest(t, i);
                  case "wc_sessionRequest":
                    return await this.onSessionRequest({
                      topic: t,
                      payload: i,
                      attestation: r,
                      encryptedId: n,
                      transportType: s,
                    });
                  case "wc_sessionEvent":
                    return await this.onSessionEventRequest(t, i);
                  case "wc_sessionAuthenticate":
                    return await this.onSessionAuthenticateRequest({
                      topic: t,
                      payload: i,
                      attestation: r,
                      encryptedId: n,
                      transportType: s,
                    });
                  default:
                    return this.client.logger.info(
                      `Unsupported request method ${a}`
                    );
                }
            }),
            (this.onRelayEventResponse = async (e) => {
              let { topic: t, payload: i, transportType: r } = e,
                s = (await this.client.core.history.get(t, i.id)).request
                  .method;
              switch (s) {
                case "wc_sessionPropose":
                  return this.onSessionProposeResponse(t, i, r);
                case "wc_sessionSettle":
                  return this.onSessionSettleResponse(t, i);
                case "wc_sessionUpdate":
                  return this.onSessionUpdateResponse(t, i);
                case "wc_sessionExtend":
                  return this.onSessionExtendResponse(t, i);
                case "wc_sessionPing":
                  return this.onSessionPingResponse(t, i);
                case "wc_sessionRequest":
                  return this.onSessionRequestResponse(t, i);
                case "wc_sessionAuthenticate":
                  return this.onSessionAuthenticateResponse(t, i);
                default:
                  return this.client.logger.info(
                    `Unsupported response method ${s}`
                  );
              }
            }),
            (this.onRelayEventUnknownPayload = (e) => {
              let { topic: t } = e,
                { message: i } = (0, S.kCb)(
                  "MISSING_OR_INVALID",
                  `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`
                );
              throw Error(i);
            }),
            (this.shouldIgnorePairingRequest = (e) => {
              let { topic: t, requestMethod: i } = e,
                r = this.expectedPairingMethodMap.get(t);
              return (
                !(!r || r.includes(i)) &&
                !!(
                  r.includes("wc_sessionAuthenticate") &&
                  this.client.events.listenerCount("session_authenticate") > 0
                )
              );
            }),
            (this.onSessionProposeRequest = async (e) => {
              let { topic: t, payload: i, attestation: r, encryptedId: s } = e,
                { params: n, id: a } = i;
              try {
                let e = this.client.core.eventClient.getEvent({ topic: t });
                this.isValidConnect(it({}, i.params));
                let o =
                    n.expiryTimestamp ||
                    (0, S.gn4)(tZ.wc_sessionPropose.req.ttl),
                  c = it({ id: a, pairingTopic: t, expiryTimestamp: o }, n);
                await this.setProposal(a, c);
                let h = await this.getVerifyContext({
                  attestationId: r,
                  hash: (0, S.rjm)(JSON.stringify(i)),
                  encryptedId: s,
                  metadata: c.proposer.metadata,
                });
                0 === this.client.events.listenerCount("session_proposal") &&
                  (console.warn("No listener for session_proposal event"),
                  e?.setError(eZ.proposal_listener_not_found)),
                  e?.addTrace(eY.emit_session_proposal),
                  this.client.events.emit("session_proposal", {
                    id: a,
                    params: c,
                    verifyContext: h,
                  });
              } catch (e) {
                await this.sendError({
                  id: a,
                  topic: t,
                  error: e,
                  rpcOpts: tZ.wc_sessionPropose.autoReject,
                }),
                  this.client.logger.error(e);
              }
            }),
            (this.onSessionProposeResponse = async (e, t, i) => {
              let { id: r } = t;
              if ((0, x.isJsonRpcResult)(t)) {
                let { result: s } = t;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  result: s,
                });
                let n = this.client.proposal.get(r);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  proposal: n,
                });
                let a = n.proposer.publicKey;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  selfPublicKey: a,
                });
                let o = s.responderPublicKey;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  peerPublicKey: o,
                });
                let c = await this.client.core.crypto.generateSharedKey(a, o);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  sessionTopic: c,
                });
                let h = await this.client.core.relayer.subscribe(c, {
                  transportType: i,
                });
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  subscriptionId: h,
                }),
                  await this.client.core.pairing.activate({ topic: e });
              } else if ((0, x.isJsonRpcError)(t)) {
                await this.client.proposal.delete(
                  r,
                  (0, S.D6H)("USER_DISCONNECTED")
                );
                let e = (0, S.E0T)("session_connect");
                if (0 === this.events.listenerCount(e))
                  throw Error(`emitting ${e} without any listeners, 954`);
                this.events.emit((0, S.E0T)("session_connect"), {
                  error: t.error,
                });
              }
            }),
            (this.onSessionSettleRequest = async (e, t) => {
              let { id: i, params: r } = t;
              try {
                this.isValidSessionSettleRequest(r);
                let {
                    relay: i,
                    controller: s,
                    expiry: n,
                    namespaces: a,
                    sessionProperties: o,
                    sessionConfig: c,
                  } = t.params,
                  h = ii(
                    it(
                      it(
                        {
                          topic: e,
                          relay: i,
                          expiry: n,
                          namespaces: a,
                          acknowledged: !0,
                          pairingTopic: "",
                          requiredNamespaces: {},
                          optionalNamespaces: {},
                          controller: s.publicKey,
                          self: {
                            publicKey: "",
                            metadata: this.client.metadata,
                          },
                          peer: {
                            publicKey: s.publicKey,
                            metadata: s.metadata,
                          },
                        },
                        o && { sessionProperties: o }
                      ),
                      c && { sessionConfig: c }
                    ),
                    { transportType: eU.relay }
                  ),
                  l = (0, S.E0T)("session_connect");
                if (0 === this.events.listenerCount(l))
                  throw Error(`emitting ${l} without any listeners 997`);
                this.events.emit((0, S.E0T)("session_connect"), { session: h }),
                  await this.sendResult({
                    id: t.id,
                    topic: e,
                    result: !0,
                    throwOnFailedPublish: !0,
                  });
              } catch (t) {
                await this.sendError({ id: i, topic: e, error: t }),
                  this.client.logger.error(t);
              }
            }),
            (this.onSessionSettleResponse = async (e, t) => {
              let { id: i } = t;
              (0, x.isJsonRpcResult)(t)
                ? (await this.client.session.update(e, { acknowledged: !0 }),
                  this.events.emit((0, S.E0T)("session_approve", i), {}))
                : (0, x.isJsonRpcError)(t) &&
                  (await this.client.session.delete(
                    e,
                    (0, S.D6H)("USER_DISCONNECTED")
                  ),
                  this.events.emit((0, S.E0T)("session_approve", i), {
                    error: t.error,
                  }));
            }),
            (this.onSessionUpdateRequest = async (e, t) => {
              let { params: i, id: r } = t;
              try {
                let t = `${e}_session_update`,
                  s = S.O6B.get(t);
                if (s && this.isRequestOutOfSync(s, r)) {
                  this.client.logger.info(
                    `Discarding out of sync request - ${r}`
                  ),
                    this.sendError({
                      id: r,
                      topic: e,
                      error: (0, S.D6H)("INVALID_UPDATE_REQUEST"),
                    });
                  return;
                }
                this.isValidUpdate(it({ topic: e }, i));
                try {
                  S.O6B.set(t, r),
                    await this.client.session.update(e, {
                      namespaces: i.namespaces,
                    }),
                    await this.sendResult({
                      id: r,
                      topic: e,
                      result: !0,
                      throwOnFailedPublish: !0,
                    });
                } catch (e) {
                  throw (S.O6B.delete(t), e);
                }
                this.client.events.emit("session_update", {
                  id: r,
                  topic: e,
                  params: i,
                });
              } catch (t) {
                await this.sendError({ id: r, topic: e, error: t }),
                  this.client.logger.error(t);
              }
            }),
            (this.isRequestOutOfSync = (e, t) =>
              parseInt(t.toString().slice(0, -3)) <=
              parseInt(e.toString().slice(0, -3))),
            (this.onSessionUpdateResponse = (e, t) => {
              let { id: i } = t,
                r = (0, S.E0T)("session_update", i);
              if (0 === this.events.listenerCount(r))
                throw Error(`emitting ${r} without any listeners`);
              (0, x.isJsonRpcResult)(t)
                ? this.events.emit((0, S.E0T)("session_update", i), {})
                : (0, x.isJsonRpcError)(t) &&
                  this.events.emit((0, S.E0T)("session_update", i), {
                    error: t.error,
                  });
            }),
            (this.onSessionExtendRequest = async (e, t) => {
              let { id: i } = t;
              try {
                this.isValidExtend({ topic: e }),
                  await this.setExpiry(e, (0, S.gn4)(tY)),
                  await this.sendResult({
                    id: i,
                    topic: e,
                    result: !0,
                    throwOnFailedPublish: !0,
                  }),
                  this.client.events.emit("session_extend", {
                    id: i,
                    topic: e,
                  });
              } catch (t) {
                await this.sendError({ id: i, topic: e, error: t }),
                  this.client.logger.error(t);
              }
            }),
            (this.onSessionExtendResponse = (e, t) => {
              let { id: i } = t,
                r = (0, S.E0T)("session_extend", i);
              if (0 === this.events.listenerCount(r))
                throw Error(`emitting ${r} without any listeners`);
              (0, x.isJsonRpcResult)(t)
                ? this.events.emit((0, S.E0T)("session_extend", i), {})
                : (0, x.isJsonRpcError)(t) &&
                  this.events.emit((0, S.E0T)("session_extend", i), {
                    error: t.error,
                  });
            }),
            (this.onSessionPingRequest = async (e, t) => {
              let { id: i } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult({
                    id: i,
                    topic: e,
                    result: !0,
                    throwOnFailedPublish: !0,
                  }),
                  this.client.events.emit("session_ping", { id: i, topic: e });
              } catch (t) {
                await this.sendError({ id: i, topic: e, error: t }),
                  this.client.logger.error(t);
              }
            }),
            (this.onSessionPingResponse = (e, t) => {
              let { id: i } = t,
                r = (0, S.E0T)("session_ping", i);
              if (0 === this.events.listenerCount(r))
                throw Error(`emitting ${r} without any listeners`);
              setTimeout(() => {
                (0, x.isJsonRpcResult)(t)
                  ? this.events.emit((0, S.E0T)("session_ping", i), {})
                  : (0, x.isJsonRpcError)(t) &&
                    this.events.emit((0, S.E0T)("session_ping", i), {
                      error: t.error,
                    });
              }, 500);
            }),
            (this.onSessionDeleteRequest = async (e, t) => {
              let { id: i } = t;
              try {
                this.isValidDisconnect({ topic: e, reason: t.params }),
                  Promise.all([
                    new Promise((t) => {
                      this.client.core.relayer.once(e$.publish, async () => {
                        t(await this.deleteSession({ topic: e, id: i }));
                      });
                    }),
                    this.sendResult({
                      id: i,
                      topic: e,
                      result: !0,
                      throwOnFailedPublish: !0,
                    }),
                    this.cleanupPendingSentRequestsForTopic({
                      topic: e,
                      error: (0, S.D6H)("USER_DISCONNECTED"),
                    }),
                  ]).catch((e) => this.client.logger.error(e));
              } catch (e) {
                this.client.logger.error(e);
              }
            }),
            (this.onSessionRequest = async (e) => {
              var t, i, r;
              let {
                  topic: s,
                  payload: n,
                  attestation: a,
                  encryptedId: o,
                  transportType: c,
                } = e,
                { id: h, params: l } = n;
              try {
                await this.isValidRequest(it({ topic: s }, l));
                let e = this.client.session.get(s),
                  n = await this.getVerifyContext({
                    attestationId: a,
                    hash: (0, S.rjm)(
                      JSON.stringify(
                        (0, x.formatJsonRpcRequest)("wc_sessionRequest", l, h)
                      )
                    ),
                    encryptedId: o,
                    metadata: e.peer.metadata,
                    transportType: c,
                  }),
                  u = { id: h, topic: s, params: l, verifyContext: n };
                await this.setPendingSessionRequest(u),
                  c === eU.link_mode &&
                    null != (t = e.peer.metadata.redirect) &&
                    t.universal &&
                    this.client.core.addLinkModeSupportedApp(
                      null == (i = e.peer.metadata.redirect)
                        ? void 0
                        : i.universal
                    ),
                  null != (r = this.client.signConfig) && r.disableRequestQueue
                    ? this.emitSessionRequest(u)
                    : (this.addSessionRequestToSessionRequestQueue(u),
                      this.processSessionRequestQueue());
              } catch (e) {
                await this.sendError({ id: h, topic: s, error: e }),
                  this.client.logger.error(e);
              }
            }),
            (this.onSessionRequestResponse = (e, t) => {
              let { id: i } = t,
                r = (0, S.E0T)("session_request", i);
              if (0 === this.events.listenerCount(r))
                throw Error(`emitting ${r} without any listeners`);
              (0, x.isJsonRpcResult)(t)
                ? this.events.emit((0, S.E0T)("session_request", i), {
                    result: t.result,
                  })
                : (0, x.isJsonRpcError)(t) &&
                  this.events.emit((0, S.E0T)("session_request", i), {
                    error: t.error,
                  });
            }),
            (this.onSessionEventRequest = async (e, t) => {
              let { id: i, params: r } = t;
              try {
                let t = `${e}_session_event_${r.event.name}`,
                  s = S.O6B.get(t);
                if (s && this.isRequestOutOfSync(s, i)) {
                  this.client.logger.info(
                    `Discarding out of sync request - ${i}`
                  );
                  return;
                }
                this.isValidEmit(it({ topic: e }, r)),
                  this.client.events.emit("session_event", {
                    id: i,
                    topic: e,
                    params: r,
                  }),
                  S.O6B.set(t, i);
              } catch (t) {
                await this.sendError({ id: i, topic: e, error: t }),
                  this.client.logger.error(t);
              }
            }),
            (this.onSessionAuthenticateResponse = (e, t) => {
              let { id: i } = t;
              this.client.logger.trace({
                type: "method",
                method: "onSessionAuthenticateResponse",
                topic: e,
                payload: t,
              }),
                (0, x.isJsonRpcResult)(t)
                  ? this.events.emit((0, S.E0T)("session_request", i), {
                      result: t.result,
                    })
                  : (0, x.isJsonRpcError)(t) &&
                    this.events.emit((0, S.E0T)("session_request", i), {
                      error: t.error,
                    });
            }),
            (this.onSessionAuthenticateRequest = async (e) => {
              var t;
              let {
                topic: i,
                payload: r,
                attestation: s,
                encryptedId: n,
                transportType: a,
              } = e;
              try {
                let {
                    requester: e,
                    authPayload: o,
                    expiryTimestamp: c,
                  } = r.params,
                  h = await this.getVerifyContext({
                    attestationId: s,
                    hash: (0, S.rjm)(JSON.stringify(r)),
                    encryptedId: n,
                    metadata: e.metadata,
                    transportType: a,
                  }),
                  l = {
                    requester: e,
                    pairingTopic: i,
                    id: r.id,
                    authPayload: o,
                    verifyContext: h,
                    expiryTimestamp: c,
                  };
                await this.setAuthRequest(r.id, {
                  request: l,
                  pairingTopic: i,
                  transportType: a,
                }),
                  a === eU.link_mode &&
                    null != (t = e.metadata.redirect) &&
                    t.universal &&
                    this.client.core.addLinkModeSupportedApp(
                      e.metadata.redirect.universal
                    ),
                  this.client.events.emit("session_authenticate", {
                    topic: i,
                    params: r.params,
                    id: r.id,
                    verifyContext: h,
                  });
              } catch (o) {
                this.client.logger.error(o);
                let e = r.params.requester.publicKey,
                  t = await this.client.core.crypto.generateKeyPair(),
                  s = this.getAppLinkIfEnabled(r.params.requester.metadata, a),
                  n = { type: S.rVF, receiverPublicKey: e, senderPublicKey: t };
                await this.sendError({
                  id: r.id,
                  topic: i,
                  error: o,
                  encodeOpts: n,
                  rpcOpts: tZ.wc_sessionAuthenticate.autoReject,
                  appLink: s,
                });
              }
            }),
            (this.addSessionRequestToSessionRequestQueue = (e) => {
              this.sessionRequestQueue.queue.push(e);
            }),
            (this.cleanupAfterResponse = (e) => {
              this.deletePendingSessionRequest(e.response.id, {
                message: "fulfilled",
                code: 0,
              }),
                setTimeout(() => {
                  (this.sessionRequestQueue.state = t0.idle),
                    this.processSessionRequestQueue();
                }, (0, R.toMiliseconds)(this.requestQueueDelay));
            }),
            (this.cleanupPendingSentRequestsForTopic = ({
              topic: e,
              error: t,
            }) => {
              let i = this.client.core.history.pending;
              i.length > 0 &&
                i
                  .filter(
                    (t) =>
                      t.topic === e && "wc_sessionRequest" === t.request.method
                  )
                  .forEach((e) => {
                    let i = e.request.id,
                      r = (0, S.E0T)("session_request", i);
                    if (0 === this.events.listenerCount(r))
                      throw Error(`emitting ${r} without any listeners`);
                    this.events.emit(
                      (0, S.E0T)("session_request", e.request.id),
                      { error: t }
                    );
                  });
            }),
            (this.processSessionRequestQueue = () => {
              if (this.sessionRequestQueue.state === t0.active) {
                this.client.logger.info(
                  "session request queue is already active."
                );
                return;
              }
              let e = this.sessionRequestQueue.queue[0];
              if (!e) {
                this.client.logger.info("session request queue is empty.");
                return;
              }
              try {
                (this.sessionRequestQueue.state = t0.active),
                  this.emitSessionRequest(e);
              } catch (e) {
                this.client.logger.error(e);
              }
            }),
            (this.emitSessionRequest = (e) => {
              this.client.events.emit("session_request", e);
            }),
            (this.onPairingCreated = (e) => {
              if (
                (e.methods &&
                  this.expectedPairingMethodMap.set(e.topic, e.methods),
                e.active)
              )
                return;
              let t = this.client.proposal
                .getAll()
                .find((t) => t.pairingTopic === e.topic);
              t &&
                this.onSessionProposeRequest({
                  topic: e.topic,
                  payload: (0, x.formatJsonRpcRequest)(
                    "wc_sessionPropose",
                    {
                      requiredNamespaces: t.requiredNamespaces,
                      optionalNamespaces: t.optionalNamespaces,
                      relays: t.relays,
                      proposer: t.proposer,
                      sessionProperties: t.sessionProperties,
                    },
                    t.id
                  ),
                });
            }),
            (this.isValidConnect = async (e) => {
              if (!(0, S.EJd)(e)) {
                let { message: t } = (0, S.kCb)(
                  "MISSING_OR_INVALID",
                  `connect() params: ${JSON.stringify(e)}`
                );
                throw Error(t);
              }
              let {
                pairingTopic: t,
                requiredNamespaces: i,
                optionalNamespaces: r,
                sessionProperties: s,
                relays: n,
              } = e;
              if (
                ((0, S.o8e)(t) || (await this.isValidPairingTopic(t)),
                !(0, S.PMr)(n, !0))
              ) {
                let { message: e } = (0, S.kCb)(
                  "MISSING_OR_INVALID",
                  `connect() relays: ${n}`
                );
                throw Error(e);
              }
              (0, S.o8e)(i) ||
                0 === (0, S.L5o)(i) ||
                this.validateNamespaces(i, "requiredNamespaces"),
                (0, S.o8e)(r) ||
                  0 === (0, S.L5o)(r) ||
                  this.validateNamespaces(r, "optionalNamespaces"),
                (0, S.o8e)(s) ||
                  this.validateSessionProps(s, "sessionProperties");
            }),
            (this.validateNamespaces = (e, t) => {
              let i = (0, S.naP)(e, "connect()", t);
              if (i) throw Error(i.message);
            }),
            (this.isValidApprove = async (e) => {
              if (!(0, S.EJd)(e))
                throw Error(
                  (0, S.kCb)("MISSING_OR_INVALID", `approve() params: ${e}`)
                    .message
                );
              let {
                id: t,
                namespaces: i,
                relayProtocol: r,
                sessionProperties: s,
              } = e;
              this.checkRecentlyDeleted(t), await this.isValidProposalId(t);
              let n = this.client.proposal.get(t),
                a = (0, S.ing)(i, "approve()");
              if (a) throw Error(a.message);
              let o = (0, S.rFo)(n.requiredNamespaces, i, "approve()");
              if (o) throw Error(o.message);
              if (!(0, S.M_r)(r, !0)) {
                let { message: e } = (0, S.kCb)(
                  "MISSING_OR_INVALID",
                  `approve() relayProtocol: ${r}`
                );
                throw Error(e);
              }
              (0, S.o8e)(s) ||
                this.validateSessionProps(s, "sessionProperties");
            }),
            (this.isValidReject = async (e) => {
              if (!(0, S.EJd)(e)) {
                let { message: t } = (0, S.kCb)(
                  "MISSING_OR_INVALID",
                  `reject() params: ${e}`
                );
                throw Error(t);
              }
              let { id: t, reason: i } = e;
              if (
                (this.checkRecentlyDeleted(t),
                await this.isValidProposalId(t),
                !(0, S.H4H)(i))
              ) {
                let { message: e } = (0, S.kCb)(
                  "MISSING_OR_INVALID",
                  `reject() reason: ${JSON.stringify(i)}`
                );
                throw Error(e);
              }
            }),
            (this.isValidSessionSettleRequest = (e) => {
              if (!(0, S.EJd)(e)) {
                let { message: t } = (0, S.kCb)(
                  "MISSING_OR_INVALID",
                  `onSessionSettleRequest() params: ${e}`
                );
                throw Error(t);
              }
              let { relay: t, controller: i, namespaces: r, expiry: s } = e;
              if (!(0, S.Z26)(t)) {
                let { message: e } = (0, S.kCb)(
                  "MISSING_OR_INVALID",
                  "onSessionSettleRequest() relay protocol should be a string"
                );
                throw Error(e);
              }
              let n = (0, S.DdM)(i, "onSessionSettleRequest()");
              if (n) throw Error(n.message);
              let a = (0, S.ing)(r, "onSessionSettleRequest()");
              if (a) throw Error(a.message);
              if ((0, S.BwD)(s)) {
                let { message: e } = (0, S.kCb)(
                  "EXPIRED",
                  "onSessionSettleRequest()"
                );
                throw Error(e);
              }
            }),
            (this.isValidUpdate = async (e) => {
              if (!(0, S.EJd)(e)) {
                let { message: t } = (0, S.kCb)(
                  "MISSING_OR_INVALID",
                  `update() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t, namespaces: i } = e;
              this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
              let r = this.client.session.get(t),
                s = (0, S.ing)(i, "update()");
              if (s) throw Error(s.message);
              let n = (0, S.rFo)(r.requiredNamespaces, i, "update()");
              if (n) throw Error(n.message);
            }),
            (this.isValidExtend = async (e) => {
              if (!(0, S.EJd)(e)) {
                let { message: t } = (0, S.kCb)(
                  "MISSING_OR_INVALID",
                  `extend() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
            }),
            (this.isValidRequest = async (e) => {
              if (!(0, S.EJd)(e)) {
                let { message: t } = (0, S.kCb)(
                  "MISSING_OR_INVALID",
                  `request() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t, request: i, chainId: r, expiry: s } = e;
              this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
              let { namespaces: n } = this.client.session.get(t);
              if (!(0, S.p8o)(n, r)) {
                let { message: e } = (0, S.kCb)(
                  "MISSING_OR_INVALID",
                  `request() chainId: ${r}`
                );
                throw Error(e);
              }
              if (!(0, S.hHR)(i)) {
                let { message: e } = (0, S.kCb)(
                  "MISSING_OR_INVALID",
                  `request() ${JSON.stringify(i)}`
                );
                throw Error(e);
              }
              if (!(0, S.alS)(n, r, i.method)) {
                let { message: e } = (0, S.kCb)(
                  "MISSING_OR_INVALID",
                  `request() method: ${i.method}`
                );
                throw Error(e);
              }
              if (s && !(0, S.ONw)(s, tX)) {
                let { message: e } = (0, S.kCb)(
                  "MISSING_OR_INVALID",
                  `request() expiry: ${s}. Expiry must be a number (in seconds) between ${tX.min} and ${tX.max}`
                );
                throw Error(e);
              }
            }),
            (this.isValidRespond = async (e) => {
              var t;
              if (!(0, S.EJd)(e)) {
                let { message: t } = (0, S.kCb)(
                  "MISSING_OR_INVALID",
                  `respond() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: i, response: r } = e;
              try {
                await this.isValidSessionTopic(i);
              } catch (i) {
                throw (
                  (null != (t = e?.response) &&
                    t.id &&
                    this.cleanupAfterResponse(e),
                  i)
                );
              }
              if (!(0, S.JTI)(r)) {
                let { message: e } = (0, S.kCb)(
                  "MISSING_OR_INVALID",
                  `respond() response: ${JSON.stringify(r)}`
                );
                throw Error(e);
              }
            }),
            (this.isValidPing = async (e) => {
              if (!(0, S.EJd)(e)) {
                let { message: t } = (0, S.kCb)(
                  "MISSING_OR_INVALID",
                  `ping() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidSessionOrPairingTopic(t);
            }),
            (this.isValidEmit = async (e) => {
              if (!(0, S.EJd)(e)) {
                let { message: t } = (0, S.kCb)(
                  "MISSING_OR_INVALID",
                  `emit() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t, event: i, chainId: r } = e;
              await this.isValidSessionTopic(t);
              let { namespaces: s } = this.client.session.get(t);
              if (!(0, S.p8o)(s, r)) {
                let { message: e } = (0, S.kCb)(
                  "MISSING_OR_INVALID",
                  `emit() chainId: ${r}`
                );
                throw Error(e);
              }
              if (!(0, S.nfW)(i)) {
                let { message: e } = (0, S.kCb)(
                  "MISSING_OR_INVALID",
                  `emit() event: ${JSON.stringify(i)}`
                );
                throw Error(e);
              }
              if (!(0, S.B95)(s, r, i.name)) {
                let { message: e } = (0, S.kCb)(
                  "MISSING_OR_INVALID",
                  `emit() event: ${JSON.stringify(i)}`
                );
                throw Error(e);
              }
            }),
            (this.isValidDisconnect = async (e) => {
              if (!(0, S.EJd)(e)) {
                let { message: t } = (0, S.kCb)(
                  "MISSING_OR_INVALID",
                  `disconnect() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidSessionOrPairingTopic(t);
            }),
            (this.isValidAuthenticate = (e) => {
              let { chains: t, uri: i, domain: r, nonce: s } = e;
              if (!Array.isArray(t) || 0 === t.length)
                throw Error("chains is required and must be a non-empty array");
              if (!(0, S.M_r)(i, !1)) throw Error("uri is required parameter");
              if (!(0, S.M_r)(r, !1))
                throw Error("domain is required parameter");
              if (!(0, S.M_r)(s, !1))
                throw Error("nonce is required parameter");
              if (
                [...new Set(t.map((e) => (0, S.DQe)(e).namespace))].length > 1
              )
                throw Error(
                  "Multi-namespace requests are not supported. Please request single namespace only."
                );
              let { namespace: n } = (0, S.DQe)(t[0]);
              if ("eip155" !== n)
                throw Error(
                  "Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains."
                );
            }),
            (this.getVerifyContext = async (e) => {
              let {
                  attestationId: t,
                  hash: i,
                  encryptedId: r,
                  metadata: s,
                  transportType: n,
                } = e,
                a = {
                  verified: {
                    verifyUrl: s.verifyUrl || eG,
                    validation: "UNKNOWN",
                    origin: s.url || "",
                  },
                };
              try {
                if (n === eU.link_mode) {
                  let e = this.getAppLinkIfEnabled(s, n);
                  return (
                    (a.verified.validation =
                      e && new URL(e).origin === new URL(s.url).origin
                        ? "VALID"
                        : "INVALID"),
                    a
                  );
                }
                let e = await this.client.core.verify.resolve({
                  attestationId: t,
                  hash: i,
                  encryptedId: r,
                  verifyUrl: s.verifyUrl,
                });
                e &&
                  ((a.verified.origin = e.origin),
                  (a.verified.isScam = e.isScam),
                  (a.verified.validation =
                    e.origin === new URL(s.url).origin ? "VALID" : "INVALID"));
              } catch (e) {
                this.client.logger.warn(e);
              }
              return (
                this.client.logger.debug(
                  `Verify context: ${JSON.stringify(a)}`
                ),
                a
              );
            }),
            (this.validateSessionProps = (e, t) => {
              Object.values(e).forEach((e) => {
                if (!(0, S.M_r)(e, !1)) {
                  let { message: i } = (0, S.kCb)(
                    "MISSING_OR_INVALID",
                    `${t} must be in Record<string, string> format. Received: ${JSON.stringify(
                      e
                    )}`
                  );
                  throw Error(i);
                }
              });
            }),
            (this.getPendingAuthRequest = (e) => {
              let t = this.client.auth.requests.get(e);
              return "object" == typeof t ? t : void 0;
            }),
            (this.addToRecentlyDeleted = (e, t) => {
              if (
                (this.recentlyDeletedMap.set(e, t),
                this.recentlyDeletedMap.size >= this.recentlyDeletedLimit)
              ) {
                let e = 0,
                  t = this.recentlyDeletedLimit / 2;
                for (let i of this.recentlyDeletedMap.keys()) {
                  if (e++ >= t) break;
                  this.recentlyDeletedMap.delete(i);
                }
              }
            }),
            (this.checkRecentlyDeleted = (e) => {
              let t = this.recentlyDeletedMap.get(e);
              if (t) {
                let { message: i } = (0, S.kCb)(
                  "MISSING_OR_INVALID",
                  `Record was recently deleted - ${t}: ${e}`
                );
                throw Error(i);
              }
            }),
            (this.isLinkModeEnabled = (e, t) => {
              var r, s, n, a, o, c, h, l, u;
              return (
                !!e &&
                t === eU.link_mode &&
                (null ==
                (s = null == (r = this.client.metadata) ? void 0 : r.redirect)
                  ? void 0
                  : s.linkMode) === !0 &&
                (null ==
                (a = null == (n = this.client.metadata) ? void 0 : n.redirect)
                  ? void 0
                  : a.universal) !== void 0 &&
                (null ==
                (c = null == (o = this.client.metadata) ? void 0 : o.redirect)
                  ? void 0
                  : c.universal) !== "" &&
                (null == (h = e?.redirect) ? void 0 : h.universal) !== void 0 &&
                (null == (l = e?.redirect) ? void 0 : l.universal) !== "" &&
                (null == (u = e?.redirect) ? void 0 : u.linkMode) === !0 &&
                this.client.core.linkModeSupportedApps.includes(
                  e.redirect.universal
                ) &&
                "u" > typeof (null == i.g ? void 0 : i.g.Linking)
              );
            }),
            (this.getAppLinkIfEnabled = (e, t) => {
              var i;
              return this.isLinkModeEnabled(e, t)
                ? null == (i = e?.redirect)
                  ? void 0
                  : i.universal
                : void 0;
            }),
            (this.handleLinkModeMessage = ({ url: e }) => {
              if (!e || !e.includes("wc_ev") || !e.includes("topic")) return;
              let t = (0, S.waw)(e, "topic") || "",
                i = decodeURIComponent((0, S.waw)(e, "wc_ev") || ""),
                r = this.client.session.keys.includes(t);
              r &&
                this.client.session.update(t, { transportType: eU.link_mode }),
                this.client.core.dispatchEnvelope({
                  topic: t,
                  message: i,
                  sessionExists: r,
                });
            }),
            (this.registerLinkModeListeners = async () => {
              var e;
              if (
                ("u" > typeof tF && tF.env.IS_VITEST) ||
                ((0, S.b$m)() &&
                  null != (e = this.client.metadata.redirect) &&
                  e.linkMode)
              ) {
                let e = null == i.g ? void 0 : i.g.Linking;
                if ("u" > typeof e) {
                  e.addEventListener(
                    "url",
                    this.handleLinkModeMessage,
                    this.client.name
                  );
                  let t = await e.getInitialURL();
                  t &&
                    setTimeout(() => {
                      this.handleLinkModeMessage({ url: t });
                    }, 50);
                }
              }
            });
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, S.kCb)("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
        async confirmOnlineStateOrThrow() {
          await this.client.core.relayer.confirmOnlineStateOrThrow();
        }
        registerRelayerEvents() {
          this.client.core.relayer.on(e$.message, (e) => {
            !this.initialized || this.relayMessageCache.length > 0
              ? this.relayMessageCache.push(e)
              : this.onRelayMessage(e);
          });
        }
        async onRelayMessage(e) {
          let { topic: t, message: i, attestation: r, transportType: s } = e,
            { publicKey: n } = this.client.auth.authKeys.keys.includes(t3)
              ? this.client.auth.authKeys.get(t3)
              : { responseTopic: void 0, publicKey: void 0 },
            a = await this.client.core.crypto.decode(t, i, {
              receiverPublicKey: n,
              encoding: s === eU.link_mode ? S.zl_ : S.$dT,
            });
          try {
            (0, x.isJsonRpcRequest)(a)
              ? (this.client.core.history.set(t, a),
                this.onRelayEventRequest({
                  topic: t,
                  payload: a,
                  attestation: r,
                  transportType: s,
                  encryptedId: (0, S.rjm)(i),
                }))
              : (0, x.isJsonRpcResponse)(a)
              ? (await this.client.core.history.resolve(a),
                await this.onRelayEventResponse({
                  topic: t,
                  payload: a,
                  transportType: s,
                }),
                this.client.core.history.delete(t, a.id))
              : this.onRelayEventUnknownPayload({
                  topic: t,
                  payload: a,
                  transportType: s,
                });
          } catch (e) {
            this.client.logger.error(e);
          }
        }
        registerExpirerEvents() {
          this.client.core.expirer.on(eJ.expired, async (e) => {
            let { topic: t, id: i } = (0, S.iPz)(e.target);
            return i && this.client.pendingRequest.keys.includes(i)
              ? await this.deletePendingSessionRequest(
                  i,
                  (0, S.kCb)("EXPIRED"),
                  !0
                )
              : i && this.client.auth.requests.keys.includes(i)
              ? await this.deletePendingAuthRequest(
                  i,
                  (0, S.kCb)("EXPIRED"),
                  !0
                )
              : void (t
                  ? this.client.session.keys.includes(t) &&
                    (await this.deleteSession({
                      topic: t,
                      expirerHasDeleted: !0,
                    }),
                    this.client.events.emit("session_expire", { topic: t }))
                  : i &&
                    (await this.deleteProposal(i, !0),
                    this.client.events.emit("proposal_expire", { id: i })));
          });
        }
        registerPairingEvents() {
          this.client.core.pairing.events.on(eF.create, (e) =>
            this.onPairingCreated(e)
          ),
            this.client.core.pairing.events.on(eF.delete, (e) => {
              this.addToRecentlyDeleted(e.topic, "pairing");
            });
        }
        isValidPairingTopic(e) {
          if (!(0, S.M_r)(e, !1)) {
            let { message: t } = (0, S.kCb)(
              "MISSING_OR_INVALID",
              `pairing topic should be a string: ${e}`
            );
            throw Error(t);
          }
          if (!this.client.core.pairing.pairings.keys.includes(e)) {
            let { message: t } = (0, S.kCb)(
              "NO_MATCHING_KEY",
              `pairing topic doesn't exist: ${e}`
            );
            throw Error(t);
          }
          if ((0, S.BwD)(this.client.core.pairing.pairings.get(e).expiry)) {
            let { message: t } = (0, S.kCb)("EXPIRED", `pairing topic: ${e}`);
            throw Error(t);
          }
        }
        async isValidSessionTopic(e) {
          if (!(0, S.M_r)(e, !1)) {
            let { message: t } = (0, S.kCb)(
              "MISSING_OR_INVALID",
              `session topic should be a string: ${e}`
            );
            throw Error(t);
          }
          if (
            (this.checkRecentlyDeleted(e),
            !this.client.session.keys.includes(e))
          ) {
            let { message: t } = (0, S.kCb)(
              "NO_MATCHING_KEY",
              `session topic doesn't exist: ${e}`
            );
            throw Error(t);
          }
          if ((0, S.BwD)(this.client.session.get(e).expiry)) {
            await this.deleteSession({ topic: e });
            let { message: t } = (0, S.kCb)("EXPIRED", `session topic: ${e}`);
            throw Error(t);
          }
          if (!this.client.core.crypto.keychain.has(e)) {
            let { message: t } = (0, S.kCb)(
              "MISSING_OR_INVALID",
              `session topic does not exist in keychain: ${e}`
            );
            throw (await this.deleteSession({ topic: e }), Error(t));
          }
        }
        async isValidSessionOrPairingTopic(e) {
          if (
            (this.checkRecentlyDeleted(e), this.client.session.keys.includes(e))
          )
            await this.isValidSessionTopic(e);
          else if (this.client.core.pairing.pairings.keys.includes(e))
            this.isValidPairingTopic(e);
          else if ((0, S.M_r)(e, !1)) {
            let { message: t } = (0, S.kCb)(
              "NO_MATCHING_KEY",
              `session or pairing topic doesn't exist: ${e}`
            );
            throw Error(t);
          } else {
            let { message: t } = (0, S.kCb)(
              "MISSING_OR_INVALID",
              `session or pairing topic should be a string: ${e}`
            );
            throw Error(t);
          }
        }
        async isValidProposalId(e) {
          if (!(0, S.Q01)(e)) {
            let { message: t } = (0, S.kCb)(
              "MISSING_OR_INVALID",
              `proposal id should be a number: ${e}`
            );
            throw Error(t);
          }
          if (!this.client.proposal.keys.includes(e)) {
            let { message: t } = (0, S.kCb)(
              "NO_MATCHING_KEY",
              `proposal id doesn't exist: ${e}`
            );
            throw Error(t);
          }
          if ((0, S.BwD)(this.client.proposal.get(e).expiryTimestamp)) {
            await this.deleteProposal(e);
            let { message: t } = (0, S.kCb)("EXPIRED", `proposal id: ${e}`);
            throw Error(t);
          }
        }
      }
      class is extends tb {
        constructor(e, t) {
          super(e, t, "proposal", tJ), (this.core = e), (this.logger = t);
        }
      }
      class ia extends tb {
        constructor(e, t) {
          super(e, t, "session", tJ), (this.core = e), (this.logger = t);
        }
      }
      class io extends tb {
        constructor(e, t) {
          super(e, t, "request", tJ, (e) => e.id),
            (this.core = e),
            (this.logger = t);
        }
      }
      class ic extends tb {
        constructor(e, t) {
          super(e, t, "authKeys", t2, () => t3),
            (this.core = e),
            (this.logger = t);
        }
      }
      class ih extends tb {
        constructor(e, t) {
          super(e, t, "pairingTopics", t2), (this.core = e), (this.logger = t);
        }
      }
      class il extends tb {
        constructor(e, t) {
          super(e, t, "requests", t2, (e) => e.id),
            (this.core = e),
            (this.logger = t);
        }
      }
      class iu {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            (this.authKeys = new ic(this.core, this.logger)),
            (this.pairingTopics = new ih(this.core, this.logger)),
            (this.requests = new il(this.core, this.logger));
        }
        async init() {
          await this.authKeys.init(),
            await this.pairingTopics.init(),
            await this.requests.init();
        }
      }
      class ip extends b {
        constructor(e) {
          super(e),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.name = tG.name),
            (this.events = new r.EventEmitter()),
            (this.on = (e, t) => this.events.on(e, t)),
            (this.once = (e, t) => this.events.once(e, t)),
            (this.off = (e, t) => this.events.off(e, t)),
            (this.removeListener = (e, t) => this.events.removeListener(e, t)),
            (this.removeAllListeners = (e) =>
              this.events.removeAllListeners(e)),
            (this.connect = async (e) => {
              try {
                return await this.engine.connect(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.pair = async (e) => {
              try {
                return await this.engine.pair(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.approve = async (e) => {
              try {
                return await this.engine.approve(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.reject = async (e) => {
              try {
                return await this.engine.reject(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.update = async (e) => {
              try {
                return await this.engine.update(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.extend = async (e) => {
              try {
                return await this.engine.extend(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.request = async (e) => {
              try {
                return await this.engine.request(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.respond = async (e) => {
              try {
                return await this.engine.respond(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.ping = async (e) => {
              try {
                return await this.engine.ping(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.emit = async (e) => {
              try {
                return await this.engine.emit(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.disconnect = async (e) => {
              try {
                return await this.engine.disconnect(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.find = (e) => {
              try {
                return this.engine.find(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.getPendingSessionRequests = () => {
              try {
                return this.engine.getPendingSessionRequests();
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.authenticate = async (e, t) => {
              try {
                return await this.engine.authenticate(e, t);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.formatAuthMessage = (e) => {
              try {
                return this.engine.formatAuthMessage(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.approveSessionAuthenticate = async (e) => {
              try {
                return await this.engine.approveSessionAuthenticate(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.rejectSessionAuthenticate = async (e) => {
              try {
                return await this.engine.rejectSessionAuthenticate(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.name = e?.name || tG.name),
            (this.metadata = e?.metadata || (0, S.DaH)()),
            (this.signConfig = e?.signConfig);
          let t =
            "u" > typeof e?.logger && "string" != typeof e?.logger
              ? e.logger
              : (0, c.gw)((0, c.jI)({ level: e?.logger || tG.logger }));
          (this.core = e?.core || new tV(e)),
            (this.logger = (0, c.Ep)(t, this.name)),
            (this.session = new ia(this.core, this.logger)),
            (this.proposal = new is(this.core, this.logger)),
            (this.pendingRequest = new io(this.core, this.logger)),
            (this.engine = new ir(this)),
            (this.auth = new iu(this.core, this.logger));
        }
        static async init(e) {
          let t = new ip(e);
          return await t.initialize(), t;
        }
        get context() {
          return (0, c.Fd)(this.logger);
        }
        get pairing() {
          return this.core.pairing.pairings;
        }
        async initialize() {
          this.logger.trace("Initialized");
          try {
            await this.core.start(),
              await this.session.init(),
              await this.proposal.init(),
              await this.pendingRequest.init(),
              await this.auth.init(),
              await this.engine.init(),
              this.logger.info("SignClient Initialization Success"),
              this.engine.processRelayMessageCache();
          } catch (e) {
            throw (
              (this.logger.info("SignClient Initialization Failure"),
              this.logger.error(e.message),
              e)
            );
          }
        }
      }
      var id = i(54098),
        ig = i.n(id),
        iy = Object.defineProperty,
        im = Object.defineProperties,
        iv = Object.getOwnPropertyDescriptors,
        iw = Object.getOwnPropertySymbols,
        i_ = Object.prototype.hasOwnProperty,
        ib = Object.prototype.propertyIsEnumerable,
        iE = (e, t, i) =>
          t in e
            ? iy(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        iI = (e, t) => {
          for (var i in t || (t = {})) i_.call(t, i) && iE(e, i, t[i]);
          if (iw) for (var i of iw(t)) ib.call(t, i) && iE(e, i, t[i]);
          return e;
        },
        iP = (e, t) => im(e, iv(t));
      let iS = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
      };
      class iC {
        constructor(e, t = !1) {
          if (
            ((this.url = e),
            (this.disableProviderPing = t),
            (this.events = new r.EventEmitter()),
            (this.isAvailable = !1),
            (this.registering = !1),
            !(0, x.isHttpUrl)(e))
          )
            throw Error(
              `Provided URL is not compatible with HTTP connection: ${e}`
            );
          (this.url = e), (this.disableProviderPing = t);
        }
        get connected() {
          return this.isAvailable;
        }
        get connecting() {
          return this.registering;
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async open(e = this.url) {
          await this.register(e);
        }
        async close() {
          if (!this.isAvailable) throw Error("Connection already closed");
          this.onClose();
        }
        async send(e) {
          this.isAvailable || (await this.register());
          try {
            let t = (0, I.u)(e),
              i = await (
                await ig()(this.url, iP(iI({}, iS), { body: t }))
              ).json();
            this.onPayload({ data: i });
          } catch (t) {
            this.onError(e.id, t);
          }
        }
        async register(e = this.url) {
          if (!(0, x.isHttpUrl)(e))
            throw Error(
              `Provided URL is not compatible with HTTP connection: ${e}`
            );
          if (this.registering) {
            let e = this.events.getMaxListeners();
            return (
              (this.events.listenerCount("register_error") >= e ||
                this.events.listenerCount("open") >= e) &&
                this.events.setMaxListeners(e + 1),
              new Promise((e, t) => {
                this.events.once("register_error", (e) => {
                  this.resetMaxListeners(), t(e);
                }),
                  this.events.once("open", () => {
                    if (
                      (this.resetMaxListeners(), typeof this.isAvailable > "u")
                    )
                      return t(Error("HTTP connection is missing or invalid"));
                    e();
                  });
              })
            );
          }
          (this.url = e), (this.registering = !0);
          try {
            if (!this.disableProviderPing) {
              let t = (0, I.u)({
                id: 1,
                jsonrpc: "2.0",
                method: "test",
                params: [],
              });
              await ig()(e, iP(iI({}, iS), { body: t }));
            }
            this.onOpen();
          } catch (t) {
            let e = this.parseError(t);
            throw (this.events.emit("register_error", e), this.onClose(), e);
          }
        }
        onOpen() {
          (this.isAvailable = !0),
            (this.registering = !1),
            this.events.emit("open");
        }
        onClose() {
          (this.isAvailable = !1),
            (this.registering = !1),
            this.events.emit("close");
        }
        onPayload(e) {
          if (typeof e.data > "u") return;
          let t = "string" == typeof e.data ? (0, I.D)(e.data) : e.data;
          this.events.emit("payload", t);
        }
        onError(e, t) {
          let i = this.parseError(t),
            r = i.message || i.toString(),
            s = (0, x.formatJsonRpcError)(e, r);
          this.events.emit("payload", s);
        }
        parseError(e, t = this.url) {
          return (0, x.parseConnectionError)(e, t, "HTTP");
        }
        resetMaxListeners() {
          this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10);
        }
      }
      let iR = "error",
        iT = "wc@2:universal_provider:",
        ix = "generic",
        iO = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
      var iA =
          "u" > typeof globalThis
            ? globalThis
            : "u" > typeof window
            ? window
            : "u" > typeof i.g
            ? i.g
            : "u" > typeof self
            ? self
            : {},
        iq = { exports: {} };
      /**
       * @license
       * Lodash <https://lodash.com/>
       * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
       * Released under MIT license <https://lodash.com/license>
       * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
       * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
       */ !(function (e, t) {
        (function () {
          var i,
            r = "Expected a function",
            s = "__lodash_hash_undefined__",
            n = "__lodash_placeholder__",
            a = 1 / 0,
            o = 0 / 0,
            c = [
              ["ary", 128],
              ["bind", 1],
              ["bindKey", 2],
              ["curry", 8],
              ["curryRight", 16],
              ["flip", 512],
              ["partial", 32],
              ["partialRight", 64],
              ["rearg", 256],
            ],
            h = "[object Arguments]",
            l = "[object Array]",
            u = "[object Boolean]",
            p = "[object Date]",
            d = "[object Error]",
            g = "[object Function]",
            f = "[object GeneratorFunction]",
            y = "[object Map]",
            m = "[object Number]",
            v = "[object Object]",
            w = "[object Promise]",
            _ = "[object RegExp]",
            b = "[object Set]",
            E = "[object String]",
            I = "[object Symbol]",
            P = "[object WeakMap]",
            S = "[object ArrayBuffer]",
            C = "[object DataView]",
            R = "[object Float32Array]",
            T = "[object Float64Array]",
            x = "[object Int8Array]",
            O = "[object Int16Array]",
            A = "[object Int32Array]",
            q = "[object Uint8Array]",
            D = "[object Uint8ClampedArray]",
            N = "[object Uint16Array]",
            k = "[object Uint32Array]",
            M = /\b__p \+= '';/g,
            $ = /\b(__p \+=) '' \+/g,
            j = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            L = /&(?:amp|lt|gt|quot|#39);/g,
            U = /[&<>"']/g,
            z = RegExp(L.source),
            H = RegExp(U.source),
            K = /<%-([\s\S]+?)%>/g,
            V = /<%([\s\S]+?)%>/g,
            F = /<%=([\s\S]+?)%>/g,
            B = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            J = /^\w*$/,
            G =
              /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            W = /[\\^$.*+?()[\]{}|]/g,
            Q = RegExp(W.source),
            Y = /^\s+/,
            Z = /\s/,
            X = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
            ee = /\{\n\/\* \[wrapped with (.+)\] \*/,
            et = /,? & /,
            ei = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
            er = /[()=,{}\[\]\/\s]/,
            es = /\\(\\)?/g,
            en = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            ea = /\w*$/,
            eo = /^[-+]0x[0-9a-f]+$/i,
            ec = /^0b[01]+$/i,
            eh = /^\[object .+?Constructor\]$/,
            el = /^0o[0-7]+$/i,
            eu = /^(?:0|[1-9]\d*)$/,
            ep = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            ed = /($^)/,
            eg = /['\n\r\u2028\u2029\\]/g,
            ef = "\ud800-\udfff",
            ey = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
            em = "\\u2700-\\u27bf",
            ev = "a-z\\xdf-\\xf6\\xf8-\\xff",
            ew = "A-Z\\xc0-\\xd6\\xd8-\\xde",
            e_ = "\\ufe0e\\ufe0f",
            eb =
              "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
            eE = "['’]",
            eI = "[" + eb + "]",
            eP = "[" + ey + "]",
            eS = "[" + ev + "]",
            eC = "[^" + ef + eb + "\\d+" + em + ev + ew + "]",
            eR = "\ud83c[\udffb-\udfff]",
            eT = "[^" + ef + "]",
            ex = "(?:\ud83c[\udde6-\uddff]){2}",
            eO = "[\ud800-\udbff][\udc00-\udfff]",
            eA = "[" + ew + "]",
            eq = "\\u200d",
            eD = "(?:" + eS + "|" + eC + ")",
            eN = "(?:" + eE + "(?:d|ll|m|re|s|t|ve))?",
            ek = "(?:" + eE + "(?:D|LL|M|RE|S|T|VE))?",
            eM = "(?:" + eP + "|" + eR + ")?",
            e$ = "[" + e_ + "]?",
            ej =
              "(?:" +
              eq +
              "(?:" +
              [eT, ex, eO].join("|") +
              ")" +
              e$ +
              eM +
              ")*",
            eL = e$ + eM + ej,
            eU = "(?:" + ["[" + em + "]", ex, eO].join("|") + ")" + eL,
            ez =
              "(?:" +
              [eT + eP + "?", eP, ex, eO, "[" + ef + "]"].join("|") +
              ")",
            eH = RegExp(eE, "g"),
            eK = RegExp(eP, "g"),
            eV = RegExp(eR + "(?=" + eR + ")|" + ez + eL, "g"),
            eF = RegExp(
              [
                eA +
                  "?" +
                  eS +
                  "+" +
                  eN +
                  "(?=" +
                  [eI, eA, "$"].join("|") +
                  ")",
                "(?:" +
                  eA +
                  "|" +
                  eC +
                  ")+" +
                  ek +
                  "(?=" +
                  [eI, eA + eD, "$"].join("|") +
                  ")",
                eA + "?" + eD + "+" + eN,
                eA + "+" + ek,
                "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                "\\d+",
                eU,
              ].join("|"),
              "g"
            ),
            eB = RegExp("[" + eq + ef + ey + e_ + "]"),
            eJ =
              /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
            eG = [
              "Array",
              "Buffer",
              "DataView",
              "Date",
              "Error",
              "Float32Array",
              "Float64Array",
              "Function",
              "Int8Array",
              "Int16Array",
              "Int32Array",
              "Map",
              "Math",
              "Object",
              "Promise",
              "RegExp",
              "Set",
              "String",
              "Symbol",
              "TypeError",
              "Uint8Array",
              "Uint8ClampedArray",
              "Uint16Array",
              "Uint32Array",
              "WeakMap",
              "_",
              "clearTimeout",
              "isFinite",
              "parseInt",
              "setTimeout",
            ],
            eW = -1,
            eQ = {};
          (eQ[R] =
            eQ[T] =
            eQ[x] =
            eQ[O] =
            eQ[A] =
            eQ[q] =
            eQ[D] =
            eQ[N] =
            eQ[k] =
              !0),
            (eQ[h] =
              eQ[l] =
              eQ[S] =
              eQ[u] =
              eQ[C] =
              eQ[p] =
              eQ[d] =
              eQ[g] =
              eQ[y] =
              eQ[m] =
              eQ[v] =
              eQ[_] =
              eQ[b] =
              eQ[E] =
              eQ[P] =
                !1);
          var eY = {};
          (eY[h] =
            eY[l] =
            eY[S] =
            eY[C] =
            eY[u] =
            eY[p] =
            eY[R] =
            eY[T] =
            eY[x] =
            eY[O] =
            eY[A] =
            eY[y] =
            eY[m] =
            eY[v] =
            eY[_] =
            eY[b] =
            eY[E] =
            eY[I] =
            eY[q] =
            eY[D] =
            eY[N] =
            eY[k] =
              !0),
            (eY[d] = eY[g] = eY[P] = !1);
          var eZ = {
              "\\": "\\",
              "'": "'",
              "\n": "n",
              "\r": "r",
              "\u2028": "u2028",
              "\u2029": "u2029",
            },
            eX = parseFloat,
            e0 = parseInt,
            e1 = "object" == typeof iA && iA && iA.Object === Object && iA,
            e2 =
              "object" == typeof self && self && self.Object === Object && self,
            e3 = e1 || e2 || Function("return this")(),
            e8 = t && !t.nodeType && t,
            e4 = e8 && e && !e.nodeType && e,
            e5 = e4 && e4.exports === e8,
            e6 = e5 && e1.process,
            e9 = (function () {
              try {
                return (
                  (e4 && e4.require && e4.require("util").types) ||
                  (e6 && e6.binding && e6.binding("util"))
                );
              } catch {}
            })(),
            e7 = e9 && e9.isArrayBuffer,
            te = e9 && e9.isDate,
            tt = e9 && e9.isMap,
            ti = e9 && e9.isRegExp,
            tr = e9 && e9.isSet,
            ts = e9 && e9.isTypedArray;
          function tn(e, t, i) {
            switch (i.length) {
              case 0:
                return e.call(t);
              case 1:
                return e.call(t, i[0]);
              case 2:
                return e.call(t, i[0], i[1]);
              case 3:
                return e.call(t, i[0], i[1], i[2]);
            }
            return e.apply(t, i);
          }
          function ta(e, t, i, r) {
            for (var s = -1, n = null == e ? 0 : e.length; ++s < n; ) {
              var a = e[s];
              t(r, a, i(a), e);
            }
            return r;
          }
          function to(e, t) {
            for (
              var i = -1, r = null == e ? 0 : e.length;
              ++i < r && !1 !== t(e[i], i, e);

            );
            return e;
          }
          function tc(e, t) {
            for (var i = -1, r = null == e ? 0 : e.length; ++i < r; )
              if (!t(e[i], i, e)) return !1;
            return !0;
          }
          function th(e, t) {
            for (
              var i = -1, r = null == e ? 0 : e.length, s = 0, n = [];
              ++i < r;

            ) {
              var a = e[i];
              t(a, i, e) && (n[s++] = a);
            }
            return n;
          }
          function tl(e, t) {
            return !!(null == e ? 0 : e.length) && t_(e, t, 0) > -1;
          }
          function tu(e, t, i) {
            for (var r = -1, s = null == e ? 0 : e.length; ++r < s; )
              if (i(t, e[r])) return !0;
            return !1;
          }
          function tp(e, t) {
            for (
              var i = -1, r = null == e ? 0 : e.length, s = Array(r);
              ++i < r;

            )
              s[i] = t(e[i], i, e);
            return s;
          }
          function td(e, t) {
            for (var i = -1, r = t.length, s = e.length; ++i < r; )
              e[s + i] = t[i];
            return e;
          }
          function tg(e, t, i, r) {
            var s = -1,
              n = null == e ? 0 : e.length;
            for (r && n && (i = e[++s]); ++s < n; ) i = t(i, e[s], s, e);
            return i;
          }
          function tf(e, t, i, r) {
            var s = null == e ? 0 : e.length;
            for (r && s && (i = e[--s]); s--; ) i = t(i, e[s], s, e);
            return i;
          }
          function ty(e, t) {
            for (var i = -1, r = null == e ? 0 : e.length; ++i < r; )
              if (t(e[i], i, e)) return !0;
            return !1;
          }
          var tm = tP("length");
          function tv(e, t, i) {
            var r;
            return (
              i(e, function (e, i, s) {
                if (t(e, i, s)) return (r = i), !1;
              }),
              r
            );
          }
          function tw(e, t, i, r) {
            for (var s = e.length, n = i + (r ? 1 : -1); r ? n-- : ++n < s; )
              if (t(e[n], n, e)) return n;
            return -1;
          }
          function t_(e, t, i) {
            return t == t
              ? (function (e, t, i) {
                  for (var r = i - 1, s = e.length; ++r < s; )
                    if (e[r] === t) return r;
                  return -1;
                })(e, t, i)
              : tw(e, tE, i);
          }
          function tb(e, t, i, r) {
            for (var s = i - 1, n = e.length; ++s < n; )
              if (r(e[s], t)) return s;
            return -1;
          }
          function tE(e) {
            return e != e;
          }
          function tI(e, t) {
            var i = null == e ? 0 : e.length;
            return i ? tR(e, t) / i : o;
          }
          function tP(e) {
            return function (t) {
              return null == t ? i : t[e];
            };
          }
          function tS(e) {
            return function (t) {
              return null == e ? i : e[t];
            };
          }
          function tC(e, t, i, r, s) {
            return (
              s(e, function (e, s, n) {
                i = r ? ((r = !1), e) : t(i, e, s, n);
              }),
              i
            );
          }
          function tR(e, t) {
            for (var r, s = -1, n = e.length; ++s < n; ) {
              var a = t(e[s]);
              a !== i && (r = r === i ? a : r + a);
            }
            return r;
          }
          function tT(e, t) {
            for (var i = -1, r = Array(e); ++i < e; ) r[i] = t(i);
            return r;
          }
          function tx(e) {
            return e && e.slice(0, tF(e) + 1).replace(Y, "");
          }
          function tO(e) {
            return function (t) {
              return e(t);
            };
          }
          function tA(e, t) {
            return tp(t, function (t) {
              return e[t];
            });
          }
          function tq(e, t) {
            return e.has(t);
          }
          function tD(e, t) {
            for (var i = -1, r = e.length; ++i < r && t_(t, e[i], 0) > -1; );
            return i;
          }
          function tN(e, t) {
            for (var i = e.length; i-- && t_(t, e[i], 0) > -1; );
            return i;
          }
          var tk = tS({
              À: "A",
              Á: "A",
              Â: "A",
              Ã: "A",
              Ä: "A",
              Å: "A",
              à: "a",
              á: "a",
              â: "a",
              ã: "a",
              ä: "a",
              å: "a",
              Ç: "C",
              ç: "c",
              Ð: "D",
              ð: "d",
              È: "E",
              É: "E",
              Ê: "E",
              Ë: "E",
              è: "e",
              é: "e",
              ê: "e",
              ë: "e",
              Ì: "I",
              Í: "I",
              Î: "I",
              Ï: "I",
              ì: "i",
              í: "i",
              î: "i",
              ï: "i",
              Ñ: "N",
              ñ: "n",
              Ò: "O",
              Ó: "O",
              Ô: "O",
              Õ: "O",
              Ö: "O",
              Ø: "O",
              ò: "o",
              ó: "o",
              ô: "o",
              õ: "o",
              ö: "o",
              ø: "o",
              Ù: "U",
              Ú: "U",
              Û: "U",
              Ü: "U",
              ù: "u",
              ú: "u",
              û: "u",
              ü: "u",
              Ý: "Y",
              ý: "y",
              ÿ: "y",
              Æ: "Ae",
              æ: "ae",
              Þ: "Th",
              þ: "th",
              ß: "ss",
              Ā: "A",
              Ă: "A",
              Ą: "A",
              ā: "a",
              ă: "a",
              ą: "a",
              Ć: "C",
              Ĉ: "C",
              Ċ: "C",
              Č: "C",
              ć: "c",
              ĉ: "c",
              ċ: "c",
              č: "c",
              Ď: "D",
              Đ: "D",
              ď: "d",
              đ: "d",
              Ē: "E",
              Ĕ: "E",
              Ė: "E",
              Ę: "E",
              Ě: "E",
              ē: "e",
              ĕ: "e",
              ė: "e",
              ę: "e",
              ě: "e",
              Ĝ: "G",
              Ğ: "G",
              Ġ: "G",
              Ģ: "G",
              ĝ: "g",
              ğ: "g",
              ġ: "g",
              ģ: "g",
              Ĥ: "H",
              Ħ: "H",
              ĥ: "h",
              ħ: "h",
              Ĩ: "I",
              Ī: "I",
              Ĭ: "I",
              Į: "I",
              İ: "I",
              ĩ: "i",
              ī: "i",
              ĭ: "i",
              į: "i",
              ı: "i",
              Ĵ: "J",
              ĵ: "j",
              Ķ: "K",
              ķ: "k",
              ĸ: "k",
              Ĺ: "L",
              Ļ: "L",
              Ľ: "L",
              Ŀ: "L",
              Ł: "L",
              ĺ: "l",
              ļ: "l",
              ľ: "l",
              ŀ: "l",
              ł: "l",
              Ń: "N",
              Ņ: "N",
              Ň: "N",
              Ŋ: "N",
              ń: "n",
              ņ: "n",
              ň: "n",
              ŋ: "n",
              Ō: "O",
              Ŏ: "O",
              Ő: "O",
              ō: "o",
              ŏ: "o",
              ő: "o",
              Ŕ: "R",
              Ŗ: "R",
              Ř: "R",
              ŕ: "r",
              ŗ: "r",
              ř: "r",
              Ś: "S",
              Ŝ: "S",
              Ş: "S",
              Š: "S",
              ś: "s",
              ŝ: "s",
              ş: "s",
              š: "s",
              Ţ: "T",
              Ť: "T",
              Ŧ: "T",
              ţ: "t",
              ť: "t",
              ŧ: "t",
              Ũ: "U",
              Ū: "U",
              Ŭ: "U",
              Ů: "U",
              Ű: "U",
              Ų: "U",
              ũ: "u",
              ū: "u",
              ŭ: "u",
              ů: "u",
              ű: "u",
              ų: "u",
              Ŵ: "W",
              ŵ: "w",
              Ŷ: "Y",
              ŷ: "y",
              Ÿ: "Y",
              Ź: "Z",
              Ż: "Z",
              Ž: "Z",
              ź: "z",
              ż: "z",
              ž: "z",
              Ĳ: "IJ",
              ĳ: "ij",
              Œ: "Oe",
              œ: "oe",
              ŉ: "'n",
              ſ: "s",
            }),
            tM = tS({
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#39;",
            });
          function t$(e) {
            return "\\" + eZ[e];
          }
          function tj(e) {
            return eB.test(e);
          }
          function tL(e) {
            var t = -1,
              i = Array(e.size);
            return (
              e.forEach(function (e, r) {
                i[++t] = [r, e];
              }),
              i
            );
          }
          function tU(e, t) {
            return function (i) {
              return e(t(i));
            };
          }
          function tz(e, t) {
            for (var i = -1, r = e.length, s = 0, a = []; ++i < r; ) {
              var o = e[i];
              (o === t || o === n) && ((e[i] = n), (a[s++] = i));
            }
            return a;
          }
          function tH(e) {
            var t = -1,
              i = Array(e.size);
            return (
              e.forEach(function (e) {
                i[++t] = e;
              }),
              i
            );
          }
          function tK(e) {
            return tj(e)
              ? (function (e) {
                  for (var t = (eV.lastIndex = 0); eV.test(e); ) ++t;
                  return t;
                })(e)
              : tm(e);
          }
          function tV(e) {
            return tj(e) ? e.match(eV) || [] : e.split("");
          }
          function tF(e) {
            for (var t = e.length; t-- && Z.test(e.charAt(t)); );
            return t;
          }
          var tB = tS({
              "&amp;": "&",
              "&lt;": "<",
              "&gt;": ">",
              "&quot;": '"',
              "&#39;": "'",
            }),
            tJ = (function e(t) {
              var Z,
                ef,
                ey,
                em,
                ev = (t =
                  null == t ? e3 : tJ.defaults(e3.Object(), t, tJ.pick(e3, eG)))
                  .Array,
                ew = t.Date,
                e_ = t.Error,
                eb = t.Function,
                eE = t.Math,
                eI = t.Object,
                eP = t.RegExp,
                eS = t.String,
                eC = t.TypeError,
                eR = ev.prototype,
                eT = eb.prototype,
                ex = eI.prototype,
                eO = t["__core-js_shared__"],
                eA = eT.toString,
                eq = ex.hasOwnProperty,
                eD = 0,
                eN = (Z = /[^.]+$/.exec(
                  (eO && eO.keys && eO.keys.IE_PROTO) || ""
                ))
                  ? "Symbol(src)_1." + Z
                  : "",
                ek = ex.toString,
                eM = eA.call(eI),
                e$ = e3._,
                ej = eP(
                  "^" +
                    eA
                      .call(eq)
                      .replace(W, "\\$&")
                      .replace(
                        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                        "$1.*?"
                      ) +
                    "$"
                ),
                eL = e5 ? t.Buffer : i,
                eU = t.Symbol,
                ez = t.Uint8Array,
                eV = eL ? eL.allocUnsafe : i,
                eB = tU(eI.getPrototypeOf, eI),
                eZ = eI.create,
                e1 = ex.propertyIsEnumerable,
                e2 = eR.splice,
                e8 = eU ? eU.isConcatSpreadable : i,
                e4 = eU ? eU.iterator : i,
                e6 = eU ? eU.toStringTag : i,
                e9 = (function () {
                  try {
                    var e = sg(eI, "defineProperty");
                    return e({}, "", {}), e;
                  } catch {}
                })(),
                tm = t.clearTimeout !== e3.clearTimeout && t.clearTimeout,
                tS = ew && ew.now !== e3.Date.now && ew.now,
                tG = t.setTimeout !== e3.setTimeout && t.setTimeout,
                tW = eE.ceil,
                tQ = eE.floor,
                tY = eI.getOwnPropertySymbols,
                tZ = eL ? eL.isBuffer : i,
                tX = t.isFinite,
                t0 = eR.join,
                t1 = tU(eI.keys, eI),
                t2 = eE.max,
                t3 = eE.min,
                t8 = ew.now,
                t4 = t.parseInt,
                t5 = eE.random,
                t6 = eR.reverse,
                t9 = sg(t, "DataView"),
                t7 = sg(t, "Map"),
                ie = sg(t, "Promise"),
                it = sg(t, "Set"),
                ii = sg(t, "WeakMap"),
                ir = sg(eI, "create"),
                is = ii && new ii(),
                ia = {},
                io = sL(t9),
                ic = sL(t7),
                ih = sL(ie),
                il = sL(it),
                iu = sL(ii),
                ip = eU ? eU.prototype : i,
                id = ip ? ip.valueOf : i,
                ig = ip ? ip.toString : i;
              function iy(e) {
                if (nB(e) && !nk(e) && !(e instanceof i_)) {
                  if (e instanceof iw) return e;
                  if (eq.call(e, "__wrapped__")) return sU(e);
                }
                return new iw(e);
              }
              var im = (function () {
                function e() {}
                return function (t) {
                  if (!nF(t)) return {};
                  if (eZ) return eZ(t);
                  e.prototype = t;
                  var r = new e();
                  return (e.prototype = i), r;
                };
              })();
              function iv() {}
              function iw(e, t) {
                (this.__wrapped__ = e),
                  (this.__actions__ = []),
                  (this.__chain__ = !!t),
                  (this.__index__ = 0),
                  (this.__values__ = i);
              }
              function i_(e) {
                (this.__wrapped__ = e),
                  (this.__actions__ = []),
                  (this.__dir__ = 1),
                  (this.__filtered__ = !1),
                  (this.__iteratees__ = []),
                  (this.__takeCount__ = 4294967295),
                  (this.__views__ = []);
              }
              function ib(e) {
                var t = -1,
                  i = null == e ? 0 : e.length;
                for (this.clear(); ++t < i; ) {
                  var r = e[t];
                  this.set(r[0], r[1]);
                }
              }
              function iE(e) {
                var t = -1,
                  i = null == e ? 0 : e.length;
                for (this.clear(); ++t < i; ) {
                  var r = e[t];
                  this.set(r[0], r[1]);
                }
              }
              function iI(e) {
                var t = -1,
                  i = null == e ? 0 : e.length;
                for (this.clear(); ++t < i; ) {
                  var r = e[t];
                  this.set(r[0], r[1]);
                }
              }
              function iP(e) {
                var t = -1,
                  i = null == e ? 0 : e.length;
                for (this.__data__ = new iI(); ++t < i; ) this.add(e[t]);
              }
              function iS(e) {
                var t = (this.__data__ = new iE(e));
                this.size = t.size;
              }
              function iC(e, t) {
                var i = nk(e),
                  r = !i && nN(e),
                  s = !i && !r && nL(e),
                  n = !i && !r && !s && n0(e),
                  a = i || r || s || n,
                  o = a ? tT(e.length, eS) : [],
                  c = o.length;
                for (var h in e)
                  (t || eq.call(e, h)) &&
                    !(
                      a &&
                      ("length" == h ||
                        (s && ("offset" == h || "parent" == h)) ||
                        (n &&
                          ("buffer" == h ||
                            "byteLength" == h ||
                            "byteOffset" == h)) ||
                        sb(h, c))
                    ) &&
                    o.push(h);
                return o;
              }
              function iR(e) {
                var t = e.length;
                return t ? e[ru(0, t - 1)] : i;
              }
              function iT(e, t, r) {
                ((r === i || nA(e[t], r)) && (r !== i || t in e)) ||
                  iD(e, t, r);
              }
              function ix(e, t, r) {
                var s = e[t];
                (eq.call(e, t) && nA(s, r) && (r !== i || t in e)) ||
                  iD(e, t, r);
              }
              function iO(e, t) {
                for (var i = e.length; i--; ) if (nA(e[i][0], t)) return i;
                return -1;
              }
              function iA(e, t, i, r) {
                return (
                  iU(e, function (e, s, n) {
                    t(r, e, i(e), n);
                  }),
                  r
                );
              }
              function iq(e, t) {
                return e && rK(t, ap(t), e);
              }
              function iD(e, t, i) {
                "__proto__" == t && e9
                  ? e9(e, t, {
                      configurable: !0,
                      enumerable: !0,
                      value: i,
                      writable: !0,
                    })
                  : (e[t] = i);
              }
              function iN(e, t) {
                for (
                  var r = -1, s = t.length, n = ev(s), a = null == e;
                  ++r < s;

                )
                  n[r] = a ? i : ao(e, t[r]);
                return n;
              }
              function ik(e, t, r) {
                return (
                  e == e &&
                    (r !== i && (e = e <= r ? e : r),
                    t !== i && (e = e >= t ? e : t)),
                  e
                );
              }
              function iM(e, t, r, s, n, a) {
                var o,
                  c = 1 & t,
                  l = 2 & t,
                  d = 4 & t;
                if ((r && (o = n ? r(e, s, n, a) : r(e)), o !== i)) return o;
                if (!nF(e)) return e;
                var w = nk(e);
                if (w) {
                  if (
                    ((P = e.length),
                    (M = new e.constructor(P)),
                    P &&
                      "string" == typeof e[0] &&
                      eq.call(e, "index") &&
                      ((M.index = e.index), (M.input = e.input)),
                    (o = M),
                    !c)
                  )
                    return rH(e, o);
                } else {
                  var P,
                    M,
                    $,
                    j,
                    L,
                    U = sm(e),
                    z = U == g || U == f;
                  if (nL(e)) return rM(e, c);
                  if (U == v || U == h || (z && !n)) {
                    if (((o = l || z ? {} : sw(e)), !c))
                      return l
                        ? (($ = (L = o) && rK(e, ad(e), L)), rK(e, sy(e), $))
                        : ((j = iq(o, e)), rK(e, sf(e), j));
                  } else {
                    if (!eY[U]) return n ? e : {};
                    o = (function (e, t, i) {
                      var r,
                        s,
                        n = e.constructor;
                      switch (t) {
                        case S:
                          return r$(e);
                        case u:
                        case p:
                          return new n(+e);
                        case C:
                          return (
                            (r = i ? r$(e.buffer) : e.buffer),
                            new e.constructor(r, e.byteOffset, e.byteLength)
                          );
                        case R:
                        case T:
                        case x:
                        case O:
                        case A:
                        case q:
                        case D:
                        case N:
                        case k:
                          return rj(e, i);
                        case y:
                          return new n();
                        case m:
                        case E:
                          return new n(e);
                        case _:
                          return (
                            ((s = new e.constructor(
                              e.source,
                              ea.exec(e)
                            )).lastIndex = e.lastIndex),
                            s
                          );
                        case b:
                          return new n();
                        case I:
                          return id ? eI(id.call(e)) : {};
                      }
                    })(e, U, c);
                  }
                }
                a || (a = new iS());
                var H = a.get(e);
                if (H) return H;
                a.set(e, o),
                  nY(e)
                    ? e.forEach(function (i) {
                        o.add(iM(i, t, r, i, e, a));
                      })
                    : nJ(e) &&
                      e.forEach(function (i, s) {
                        o.set(s, iM(i, t, r, s, e, a));
                      });
                var K = d ? (l ? so : sa) : l ? ad : ap,
                  V = w ? i : K(e);
                return (
                  to(V || e, function (i, s) {
                    V && (i = e[(s = i)]), ix(o, s, iM(i, t, r, s, e, a));
                  }),
                  o
                );
              }
              function i$(e, t, r) {
                var s = r.length;
                if (null == e) return !s;
                for (e = eI(e); s--; ) {
                  var n = r[s],
                    a = t[n],
                    o = e[n];
                  if ((o === i && !(n in e)) || !a(o)) return !1;
                }
                return !0;
              }
              function ij(e, t, s) {
                if ("function" != typeof e) throw new eC(r);
                return sq(function () {
                  e.apply(i, s);
                }, t);
              }
              function iL(e, t, i, r) {
                var s = -1,
                  n = tl,
                  a = !0,
                  o = e.length,
                  c = [],
                  h = t.length;
                if (!o) return c;
                i && (t = tp(t, tO(i))),
                  r
                    ? ((n = tu), (a = !1))
                    : t.length >= 200 && ((n = tq), (a = !1), (t = new iP(t)));
                e: for (; ++s < o; ) {
                  var l = e[s],
                    u = null == i ? l : i(l);
                  if (((l = r || 0 !== l ? l : 0), a && u == u)) {
                    for (var p = h; p--; ) if (t[p] === u) continue e;
                    c.push(l);
                  } else n(t, u, r) || c.push(l);
                }
                return c;
              }
              (iy.templateSettings = {
                escape: K,
                evaluate: V,
                interpolate: F,
                variable: "",
                imports: { _: iy },
              }),
                (iy.prototype = iv.prototype),
                (iy.prototype.constructor = iy),
                (iw.prototype = im(iv.prototype)),
                (iw.prototype.constructor = iw),
                (i_.prototype = im(iv.prototype)),
                (i_.prototype.constructor = i_),
                (ib.prototype.clear = function () {
                  (this.__data__ = ir ? ir(null) : {}), (this.size = 0);
                }),
                (ib.prototype.delete = function (e) {
                  var t = this.has(e) && delete this.__data__[e];
                  return (this.size -= t ? 1 : 0), t;
                }),
                (ib.prototype.get = function (e) {
                  var t = this.__data__;
                  if (ir) {
                    var r = t[e];
                    return r === s ? i : r;
                  }
                  return eq.call(t, e) ? t[e] : i;
                }),
                (ib.prototype.has = function (e) {
                  var t = this.__data__;
                  return ir ? t[e] !== i : eq.call(t, e);
                }),
                (ib.prototype.set = function (e, t) {
                  var r = this.__data__;
                  return (
                    (this.size += this.has(e) ? 0 : 1),
                    (r[e] = ir && t === i ? s : t),
                    this
                  );
                }),
                (iE.prototype.clear = function () {
                  (this.__data__ = []), (this.size = 0);
                }),
                (iE.prototype.delete = function (e) {
                  var t = this.__data__,
                    i = iO(t, e);
                  return (
                    !(i < 0) &&
                    (i == t.length - 1 ? t.pop() : e2.call(t, i, 1),
                    --this.size,
                    !0)
                  );
                }),
                (iE.prototype.get = function (e) {
                  var t = this.__data__,
                    r = iO(t, e);
                  return r < 0 ? i : t[r][1];
                }),
                (iE.prototype.has = function (e) {
                  return iO(this.__data__, e) > -1;
                }),
                (iE.prototype.set = function (e, t) {
                  var i = this.__data__,
                    r = iO(i, e);
                  return (
                    r < 0 ? (++this.size, i.push([e, t])) : (i[r][1] = t), this
                  );
                }),
                (iI.prototype.clear = function () {
                  (this.size = 0),
                    (this.__data__ = {
                      hash: new ib(),
                      map: new (t7 || iE)(),
                      string: new ib(),
                    });
                }),
                (iI.prototype.delete = function (e) {
                  var t = sp(this, e).delete(e);
                  return (this.size -= t ? 1 : 0), t;
                }),
                (iI.prototype.get = function (e) {
                  return sp(this, e).get(e);
                }),
                (iI.prototype.has = function (e) {
                  return sp(this, e).has(e);
                }),
                (iI.prototype.set = function (e, t) {
                  var i = sp(this, e),
                    r = i.size;
                  return i.set(e, t), (this.size += i.size == r ? 0 : 1), this;
                }),
                (iP.prototype.add = iP.prototype.push =
                  function (e) {
                    return this.__data__.set(e, s), this;
                  }),
                (iP.prototype.has = function (e) {
                  return this.__data__.has(e);
                }),
                (iS.prototype.clear = function () {
                  (this.__data__ = new iE()), (this.size = 0);
                }),
                (iS.prototype.delete = function (e) {
                  var t = this.__data__,
                    i = t.delete(e);
                  return (this.size = t.size), i;
                }),
                (iS.prototype.get = function (e) {
                  return this.__data__.get(e);
                }),
                (iS.prototype.has = function (e) {
                  return this.__data__.has(e);
                }),
                (iS.prototype.set = function (e, t) {
                  var i = this.__data__;
                  if (i instanceof iE) {
                    var r = i.__data__;
                    if (!t7 || r.length < 199)
                      return r.push([e, t]), (this.size = ++i.size), this;
                    i = this.__data__ = new iI(r);
                  }
                  return i.set(e, t), (this.size = i.size), this;
                });
              var iU = rB(iG),
                iz = rB(iW, !0);
              function iH(e, t) {
                var i = !0;
                return (
                  iU(e, function (e, r, s) {
                    return (i = !!t(e, r, s));
                  }),
                  i
                );
              }
              function iK(e, t, r) {
                for (var s = -1, n = e.length; ++s < n; ) {
                  var a = e[s],
                    o = t(a);
                  if (null != o && (c === i ? o == o && !nX(o) : r(o, c)))
                    var c = o,
                      h = a;
                }
                return h;
              }
              function iV(e, t) {
                var i = [];
                return (
                  iU(e, function (e, r, s) {
                    t(e, r, s) && i.push(e);
                  }),
                  i
                );
              }
              function iF(e, t, i, r, s) {
                var n = -1,
                  a = e.length;
                for (i || (i = s_), s || (s = []); ++n < a; ) {
                  var o = e[n];
                  t > 0 && i(o)
                    ? t > 1
                      ? iF(o, t - 1, i, r, s)
                      : td(s, o)
                    : r || (s[s.length] = o);
                }
                return s;
              }
              var iB = rJ(),
                iJ = rJ(!0);
              function iG(e, t) {
                return e && iB(e, t, ap);
              }
              function iW(e, t) {
                return e && iJ(e, t, ap);
              }
              function iQ(e, t) {
                return th(t, function (t) {
                  return nH(e[t]);
                });
              }
              function iY(e, t) {
                t = rD(t, e);
                for (var r = 0, s = t.length; null != e && r < s; )
                  e = e[sj(t[r++])];
                return r && r == s ? e : i;
              }
              function iZ(e, t, i) {
                var r = t(e);
                return nk(e) ? r : td(r, i(e));
              }
              function iX(e) {
                return null == e
                  ? e === i
                    ? "[object Undefined]"
                    : "[object Null]"
                  : e6 && e6 in eI(e)
                  ? (function (e) {
                      var t = eq.call(e, e6),
                        r = e[e6];
                      try {
                        e[e6] = i;
                        var s = !0;
                      } catch {}
                      var n = ek.call(e);
                      return s && (t ? (e[e6] = r) : delete e[e6]), n;
                    })(e)
                  : ek.call(e);
              }
              function i0(e, t) {
                return e > t;
              }
              function i1(e, t) {
                return null != e && eq.call(e, t);
              }
              function i2(e, t) {
                return null != e && t in eI(e);
              }
              function i3(e, t, r) {
                for (
                  var s = r ? tu : tl,
                    n = e[0].length,
                    a = e.length,
                    o = a,
                    c = ev(a),
                    h = 1 / 0,
                    l = [];
                  o--;

                ) {
                  var u = e[o];
                  o && t && (u = tp(u, tO(t))),
                    (h = t3(u.length, h)),
                    (c[o] =
                      !r && (t || (n >= 120 && u.length >= 120))
                        ? new iP(o && u)
                        : i);
                }
                u = e[0];
                var p = -1,
                  d = c[0];
                e: for (; ++p < n && l.length < h; ) {
                  var g = u[p],
                    f = t ? t(g) : g;
                  if (
                    ((g = r || 0 !== g ? g : 0), !(d ? tq(d, f) : s(l, f, r)))
                  ) {
                    for (o = a; --o; ) {
                      var y = c[o];
                      if (!(y ? tq(y, f) : s(e[o], f, r))) continue e;
                    }
                    d && d.push(f), l.push(g);
                  }
                }
                return l;
              }
              function i8(e, t, r) {
                t = rD(t, e);
                var s = null == (e = sx(e, t)) ? e : e[sj(sY(t))];
                return null == s ? i : tn(s, e, r);
              }
              function i4(e) {
                return nB(e) && iX(e) == h;
              }
              function i5(e, t, r, s, n) {
                return (
                  e === t ||
                  (null != e && null != t && (nB(e) || nB(t))
                    ? (function (e, t, r, s, n, a) {
                        var o = nk(e),
                          c = nk(t),
                          g = o ? l : sm(e),
                          f = c ? l : sm(t);
                        (g = g == h ? v : g), (f = f == h ? v : f);
                        var w = g == v,
                          P = f == v,
                          R = g == f;
                        if (R && nL(e)) {
                          if (!nL(t)) return !1;
                          (o = !0), (w = !1);
                        }
                        if (R && !w)
                          return (
                            a || (a = new iS()),
                            o || n0(e)
                              ? ss(e, t, r, s, n, a)
                              : (function (e, t, i, r, s, n, a) {
                                  switch (i) {
                                    case C:
                                      if (
                                        e.byteLength != t.byteLength ||
                                        e.byteOffset != t.byteOffset
                                      )
                                        break;
                                      (e = e.buffer), (t = t.buffer);
                                    case S:
                                      return !(
                                        e.byteLength != t.byteLength ||
                                        !n(new ez(e), new ez(t))
                                      );
                                    case u:
                                    case p:
                                    case m:
                                      return nA(+e, +t);
                                    case d:
                                      return (
                                        e.name == t.name &&
                                        e.message == t.message
                                      );
                                    case _:
                                    case E:
                                      return e == t + "";
                                    case y:
                                      var o = tL;
                                    case b:
                                      var c = 1 & r;
                                      if (
                                        (o || (o = tH), e.size != t.size && !c)
                                      )
                                        break;
                                      var h = a.get(e);
                                      if (h) return h == t;
                                      (r |= 2), a.set(e, t);
                                      var l = ss(o(e), o(t), r, s, n, a);
                                      return a.delete(e), l;
                                    case I:
                                      if (id) return id.call(e) == id.call(t);
                                  }
                                  return !1;
                                })(e, t, g, r, s, n, a)
                          );
                        if (!(1 & r)) {
                          var T = w && eq.call(e, "__wrapped__"),
                            x = P && eq.call(t, "__wrapped__");
                          if (T || x) {
                            var O = T ? e.value() : e,
                              A = x ? t.value() : t;
                            return a || (a = new iS()), n(O, A, r, s, a);
                          }
                        }
                        return (
                          !!R &&
                          (a || (a = new iS()),
                          (function (e, t, r, s, n, a) {
                            var o = 1 & r,
                              c = sa(e),
                              h = c.length;
                            if (h != sa(t).length && !o) return !1;
                            for (var l = h; l--; ) {
                              var u = c[l];
                              if (!(o ? u in t : eq.call(t, u))) return !1;
                            }
                            var p = a.get(e),
                              d = a.get(t);
                            if (p && d) return p == t && d == e;
                            var g = !0;
                            a.set(e, t), a.set(t, e);
                            for (var f = o; ++l < h; ) {
                              var y = e[(u = c[l])],
                                m = t[u];
                              if (s)
                                var v = o
                                  ? s(m, y, u, t, e, a)
                                  : s(y, m, u, e, t, a);
                              if (
                                !(v === i ? y === m || n(y, m, r, s, a) : v)
                              ) {
                                g = !1;
                                break;
                              }
                              f || (f = "constructor" == u);
                            }
                            if (g && !f) {
                              var w = e.constructor,
                                _ = t.constructor;
                              w != _ &&
                                "constructor" in e &&
                                "constructor" in t &&
                                !(
                                  "function" == typeof w &&
                                  w instanceof w &&
                                  "function" == typeof _ &&
                                  _ instanceof _
                                ) &&
                                (g = !1);
                            }
                            return a.delete(e), a.delete(t), g;
                          })(e, t, r, s, n, a))
                        );
                      })(e, t, r, s, i5, n)
                    : e != e && t != t)
                );
              }
              function i6(e, t, r, s) {
                var n = r.length,
                  a = n,
                  o = !s;
                if (null == e) return !a;
                for (e = eI(e); n--; ) {
                  var c = r[n];
                  if (o && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1;
                }
                for (; ++n < a; ) {
                  var h = (c = r[n])[0],
                    l = e[h],
                    u = c[1];
                  if (o && c[2]) {
                    if (l === i && !(h in e)) return !1;
                  } else {
                    var p = new iS();
                    if (s) var d = s(l, u, h, e, t, p);
                    if (!(d === i ? i5(u, l, 3, s, p) : d)) return !1;
                  }
                }
                return !0;
              }
              function i9(e) {
                return (
                  !(!nF(e) || (eN && eN in e)) && (nH(e) ? ej : eh).test(sL(e))
                );
              }
              function i7(e) {
                return "function" == typeof e
                  ? e
                  : null == e
                  ? aj
                  : "object" == typeof e
                  ? nk(e)
                    ? rs(e[0], e[1])
                    : rr(e)
                  : aJ(e);
              }
              function re(e) {
                if (!sC(e)) return t1(e);
                var t = [];
                for (var i in eI(e))
                  eq.call(e, i) && "constructor" != i && t.push(i);
                return t;
              }
              function rt(e, t) {
                return e < t;
              }
              function ri(e, t) {
                var i = -1,
                  r = n$(e) ? ev(e.length) : [];
                return (
                  iU(e, function (e, s, n) {
                    r[++i] = t(e, s, n);
                  }),
                  r
                );
              }
              function rr(e) {
                var t = sd(e);
                return 1 == t.length && t[0][2]
                  ? sR(t[0][0], t[0][1])
                  : function (i) {
                      return i === e || i6(i, e, t);
                    };
              }
              function rs(e, t) {
                var r;
                return sI(e) && (r = t) == r && !nF(r)
                  ? sR(sj(e), t)
                  : function (r) {
                      var s = ao(r, e);
                      return s === i && s === t ? ac(r, e) : i5(t, s, 3);
                    };
              }
              function rn(e, t, r, s, n) {
                e !== t &&
                  iB(
                    t,
                    function (a, o) {
                      if ((n || (n = new iS()), nF(a)))
                        !(function (e, t, r, s, n, a, o) {
                          var c = sO(e, r),
                            h = sO(t, r),
                            l = o.get(h);
                          if (l) {
                            iT(e, r, l);
                            return;
                          }
                          var u = a ? a(c, h, r + "", e, t, o) : i,
                            p = u === i;
                          if (p) {
                            var d = nk(h),
                              g = !d && nL(h),
                              f = !d && !g && n0(h);
                            (u = h),
                              d || g || f
                                ? nk(c)
                                  ? (u = c)
                                  : nj(c)
                                  ? (u = rH(c))
                                  : g
                                  ? ((p = !1), (u = rM(h, !0)))
                                  : f
                                  ? ((p = !1), (u = rj(h, !0)))
                                  : (u = [])
                                : nW(h) || nN(h)
                                ? ((u = c),
                                  nN(c)
                                    ? (u = n9(c))
                                    : (!nF(c) || nH(c)) && (u = sw(h)))
                                : (p = !1);
                          }
                          p && (o.set(h, u), n(u, h, s, a, o), o.delete(h)),
                            iT(e, r, u);
                        })(e, t, o, r, rn, s, n);
                      else {
                        var c = s ? s(sO(e, o), a, o + "", e, t, n) : i;
                        c === i && (c = a), iT(e, o, c);
                      }
                    },
                    ad
                  );
              }
              function ra(e, t) {
                var r = e.length;
                if (r) return sb((t += t < 0 ? r : 0), r) ? e[t] : i;
              }
              function ro(e, t, i) {
                t = t.length
                  ? tp(t, function (e) {
                      return nk(e)
                        ? function (t) {
                            return iY(t, 1 === e.length ? e[0] : e);
                          }
                        : e;
                    })
                  : [aj];
                var r = -1;
                return (
                  (t = tp(t, tO(su()))),
                  (function (e, t) {
                    var i = e.length;
                    for (e.sort(t); i--; ) e[i] = e[i].value;
                    return e;
                  })(
                    ri(e, function (e, i, s) {
                      return {
                        criteria: tp(t, function (t) {
                          return t(e);
                        }),
                        index: ++r,
                        value: e,
                      };
                    }),
                    function (e, t) {
                      return (function (e, t, i) {
                        for (
                          var r = -1,
                            s = e.criteria,
                            n = t.criteria,
                            a = s.length,
                            o = i.length;
                          ++r < a;

                        ) {
                          var c = rL(s[r], n[r]);
                          if (c) {
                            if (r >= o) return c;
                            return c * ("desc" == i[r] ? -1 : 1);
                          }
                        }
                        return e.index - t.index;
                      })(e, t, i);
                    }
                  )
                );
              }
              function rc(e, t, i) {
                for (var r = -1, s = t.length, n = {}; ++r < s; ) {
                  var a = t[r],
                    o = iY(e, a);
                  i(o, a) && rg(n, rD(a, e), o);
                }
                return n;
              }
              function rh(e, t, i, r) {
                var s = r ? tb : t_,
                  n = -1,
                  a = t.length,
                  o = e;
                for (e === t && (t = rH(t)), i && (o = tp(e, tO(i))); ++n < a; )
                  for (
                    var c = 0, h = t[n], l = i ? i(h) : h;
                    (c = s(o, l, c, r)) > -1;

                  )
                    o !== e && e2.call(o, c, 1), e2.call(e, c, 1);
                return e;
              }
              function rl(e, t) {
                for (var i = e ? t.length : 0, r = i - 1; i--; ) {
                  var s = t[i];
                  if (i == r || s !== n) {
                    var n = s;
                    sb(s) ? e2.call(e, s, 1) : rS(e, s);
                  }
                }
                return e;
              }
              function ru(e, t) {
                return e + tQ(t5() * (t - e + 1));
              }
              function rp(e, t) {
                var i = "";
                if (!e || t < 1 || t > 9007199254740991) return i;
                do t % 2 && (i += e), (t = tQ(t / 2)) && (e += e);
                while (t);
                return i;
              }
              function rd(e, t) {
                return sD(sT(e, t, aj), e + "");
              }
              function rg(e, t, r, s) {
                if (!nF(e)) return e;
                t = rD(t, e);
                for (
                  var n = -1, a = t.length, o = a - 1, c = e;
                  null != c && ++n < a;

                ) {
                  var h = sj(t[n]),
                    l = r;
                  if (
                    "__proto__" === h ||
                    "constructor" === h ||
                    "prototype" === h
                  )
                    break;
                  if (n != o) {
                    var u = c[h];
                    (l = s ? s(u, h, c) : i) === i &&
                      (l = nF(u) ? u : sb(t[n + 1]) ? [] : {});
                  }
                  ix(c, h, l), (c = c[h]);
                }
                return e;
              }
              var rf = is
                  ? function (e, t) {
                      return is.set(e, t), e;
                    }
                  : aj,
                ry = e9
                  ? function (e, t) {
                      return e9(e, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: ak(t),
                        writable: !0,
                      });
                    }
                  : aj;
              function rm(e, t, i) {
                var r = -1,
                  s = e.length;
                t < 0 && (t = -t > s ? 0 : s + t),
                  (i = i > s ? s : i) < 0 && (i += s),
                  (s = t > i ? 0 : (i - t) >>> 0),
                  (t >>>= 0);
                for (var n = ev(s); ++r < s; ) n[r] = e[r + t];
                return n;
              }
              function rv(e, t) {
                var i;
                return (
                  iU(e, function (e, r, s) {
                    return !(i = t(e, r, s));
                  }),
                  !!i
                );
              }
              function rw(e, t, i) {
                var r = 0,
                  s = null == e ? r : e.length;
                if ("number" == typeof t && t == t && s <= 2147483647) {
                  for (; r < s; ) {
                    var n = (r + s) >>> 1,
                      a = e[n];
                    null !== a && !nX(a) && (i ? a <= t : a < t)
                      ? (r = n + 1)
                      : (s = n);
                  }
                  return s;
                }
                return r_(e, t, aj, i);
              }
              function r_(e, t, r, s) {
                var n = 0,
                  a = null == e ? 0 : e.length;
                if (0 === a) return 0;
                t = r(t);
                for (
                  var o = t != t, c = null === t, h = nX(t), l = t === i;
                  n < a;

                ) {
                  var u = tQ((n + a) / 2),
                    p = r(e[u]),
                    d = p !== i,
                    g = null === p,
                    f = p == p,
                    y = nX(p);
                  if (o) var m = s || f;
                  else
                    m = l
                      ? f && (s || d)
                      : c
                      ? f && d && (s || !g)
                      : h
                      ? f && d && !g && (s || !y)
                      : !g && !y && (s ? p <= t : p < t);
                  m ? (n = u + 1) : (a = u);
                }
                return t3(a, 4294967294);
              }
              function rb(e, t) {
                for (var i = -1, r = e.length, s = 0, n = []; ++i < r; ) {
                  var a = e[i],
                    o = t ? t(a) : a;
                  if (!i || !nA(o, c)) {
                    var c = o;
                    n[s++] = 0 === a ? 0 : a;
                  }
                }
                return n;
              }
              function rE(e) {
                return "number" == typeof e ? e : nX(e) ? o : +e;
              }
              function rI(e) {
                if ("string" == typeof e) return e;
                if (nk(e)) return tp(e, rI) + "";
                if (nX(e)) return ig ? ig.call(e) : "";
                var t = e + "";
                return "0" == t && 1 / e == -a ? "-0" : t;
              }
              function rP(e, t, i) {
                var r = -1,
                  s = tl,
                  n = e.length,
                  a = !0,
                  o = [],
                  c = o;
                if (i) (a = !1), (s = tu);
                else if (n >= 200) {
                  var h = t ? null : r9(e);
                  if (h) return tH(h);
                  (a = !1), (s = tq), (c = new iP());
                } else c = t ? [] : o;
                e: for (; ++r < n; ) {
                  var l = e[r],
                    u = t ? t(l) : l;
                  if (((l = i || 0 !== l ? l : 0), a && u == u)) {
                    for (var p = c.length; p--; ) if (c[p] === u) continue e;
                    t && c.push(u), o.push(l);
                  } else s(c, u, i) || (c !== o && c.push(u), o.push(l));
                }
                return o;
              }
              function rS(e, t) {
                return (
                  (t = rD(t, e)), null == (e = sx(e, t)) || delete e[sj(sY(t))]
                );
              }
              function rC(e, t, i, r) {
                return rg(e, t, i(iY(e, t)), r);
              }
              function rR(e, t, i, r) {
                for (
                  var s = e.length, n = r ? s : -1;
                  (r ? n-- : ++n < s) && t(e[n], n, e);

                );
                return i
                  ? rm(e, r ? 0 : n, r ? n + 1 : s)
                  : rm(e, r ? n + 1 : 0, r ? s : n);
              }
              function rT(e, t) {
                var i = e;
                return (
                  i instanceof i_ && (i = i.value()),
                  tg(
                    t,
                    function (e, t) {
                      return t.func.apply(t.thisArg, td([e], t.args));
                    },
                    i
                  )
                );
              }
              function rx(e, t, i) {
                var r = e.length;
                if (r < 2) return r ? rP(e[0]) : [];
                for (var s = -1, n = ev(r); ++s < r; )
                  for (var a = e[s], o = -1; ++o < r; )
                    o != s && (n[s] = iL(n[s] || a, e[o], t, i));
                return rP(iF(n, 1), t, i);
              }
              function rO(e, t, r) {
                for (
                  var s = -1, n = e.length, a = t.length, o = {};
                  ++s < n;

                ) {
                  var c = s < a ? t[s] : i;
                  r(o, e[s], c);
                }
                return o;
              }
              function rA(e) {
                return nj(e) ? e : [];
              }
              function rq(e) {
                return "function" == typeof e ? e : aj;
              }
              function rD(e, t) {
                return nk(e) ? e : sI(e, t) ? [e] : s$(n7(e));
              }
              function rN(e, t, r) {
                var s = e.length;
                return (r = r === i ? s : r), !t && r >= s ? e : rm(e, t, r);
              }
              var rk =
                tm ||
                function (e) {
                  return e3.clearTimeout(e);
                };
              function rM(e, t) {
                if (t) return e.slice();
                var i = e.length,
                  r = eV ? eV(i) : new e.constructor(i);
                return e.copy(r), r;
              }
              function r$(e) {
                var t = new e.constructor(e.byteLength);
                return new ez(t).set(new ez(e)), t;
              }
              function rj(e, t) {
                var i = t ? r$(e.buffer) : e.buffer;
                return new e.constructor(i, e.byteOffset, e.length);
              }
              function rL(e, t) {
                if (e !== t) {
                  var r = e !== i,
                    s = null === e,
                    n = e == e,
                    a = nX(e),
                    o = t !== i,
                    c = null === t,
                    h = t == t,
                    l = nX(t);
                  if (
                    (!c && !l && !a && e > t) ||
                    (a && o && h && !c && !l) ||
                    (s && o && h) ||
                    (!r && h) ||
                    !n
                  )
                    return 1;
                  if (
                    (!s && !a && !l && e < t) ||
                    (l && r && n && !s && !a) ||
                    (c && r && n) ||
                    (!o && n) ||
                    !h
                  )
                    return -1;
                }
                return 0;
              }
              function rU(e, t, i, r) {
                for (
                  var s = -1,
                    n = e.length,
                    a = i.length,
                    o = -1,
                    c = t.length,
                    h = t2(n - a, 0),
                    l = ev(c + h),
                    u = !r;
                  ++o < c;

                )
                  l[o] = t[o];
                for (; ++s < a; ) (u || s < n) && (l[i[s]] = e[s]);
                for (; h--; ) l[o++] = e[s++];
                return l;
              }
              function rz(e, t, i, r) {
                for (
                  var s = -1,
                    n = e.length,
                    a = -1,
                    o = i.length,
                    c = -1,
                    h = t.length,
                    l = t2(n - o, 0),
                    u = ev(l + h),
                    p = !r;
                  ++s < l;

                )
                  u[s] = e[s];
                for (var d = s; ++c < h; ) u[d + c] = t[c];
                for (; ++a < o; ) (p || s < n) && (u[d + i[a]] = e[s++]);
                return u;
              }
              function rH(e, t) {
                var i = -1,
                  r = e.length;
                for (t || (t = ev(r)); ++i < r; ) t[i] = e[i];
                return t;
              }
              function rK(e, t, r, s) {
                var n = !r;
                r || (r = {});
                for (var a = -1, o = t.length; ++a < o; ) {
                  var c = t[a],
                    h = s ? s(r[c], e[c], c, r, e) : i;
                  h === i && (h = e[c]), n ? iD(r, c, h) : ix(r, c, h);
                }
                return r;
              }
              function rV(e, t) {
                return function (i, r) {
                  var s = nk(i) ? ta : iA,
                    n = t ? t() : {};
                  return s(i, e, su(r, 2), n);
                };
              }
              function rF(e) {
                return rd(function (t, r) {
                  var s = -1,
                    n = r.length,
                    a = n > 1 ? r[n - 1] : i,
                    o = n > 2 ? r[2] : i;
                  for (
                    a = e.length > 3 && "function" == typeof a ? (n--, a) : i,
                      o && sE(r[0], r[1], o) && ((a = n < 3 ? i : a), (n = 1)),
                      t = eI(t);
                    ++s < n;

                  ) {
                    var c = r[s];
                    c && e(t, c, s, a);
                  }
                  return t;
                });
              }
              function rB(e, t) {
                return function (i, r) {
                  if (null == i) return i;
                  if (!n$(i)) return e(i, r);
                  for (
                    var s = i.length, n = t ? s : -1, a = eI(i);
                    (t ? n-- : ++n < s) && !1 !== r(a[n], n, a);

                  );
                  return i;
                };
              }
              function rJ(e) {
                return function (t, i, r) {
                  for (var s = -1, n = eI(t), a = r(t), o = a.length; o--; ) {
                    var c = a[e ? o : ++s];
                    if (!1 === i(n[c], c, n)) break;
                  }
                  return t;
                };
              }
              function rG(e) {
                return function (t) {
                  var r = tj((t = n7(t))) ? tV(t) : i,
                    s = r ? r[0] : t.charAt(0),
                    n = r ? rN(r, 1).join("") : t.slice(1);
                  return s[e]() + n;
                };
              }
              function rW(e) {
                return function (t) {
                  return tg(aq(aP(t).replace(eH, "")), e, "");
                };
              }
              function rQ(e) {
                return function () {
                  var t = arguments;
                  switch (t.length) {
                    case 0:
                      return new e();
                    case 1:
                      return new e(t[0]);
                    case 2:
                      return new e(t[0], t[1]);
                    case 3:
                      return new e(t[0], t[1], t[2]);
                    case 4:
                      return new e(t[0], t[1], t[2], t[3]);
                    case 5:
                      return new e(t[0], t[1], t[2], t[3], t[4]);
                    case 6:
                      return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                    case 7:
                      return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
                  }
                  var i = im(e.prototype),
                    r = e.apply(i, t);
                  return nF(r) ? r : i;
                };
              }
              function rY(e) {
                return function (t, r, s) {
                  var n = eI(t);
                  if (!n$(t)) {
                    var a = su(r, 3);
                    (t = ap(t)),
                      (r = function (e) {
                        return a(n[e], e, n);
                      });
                  }
                  var o = e(t, r, s);
                  return o > -1 ? n[a ? t[o] : o] : i;
                };
              }
              function rZ(e) {
                return sn(function (t) {
                  var s = t.length,
                    n = s,
                    a = iw.prototype.thru;
                  for (e && t.reverse(); n--; ) {
                    var o = t[n];
                    if ("function" != typeof o) throw new eC(r);
                    if (a && !c && "wrapper" == sh(o)) var c = new iw([], !0);
                  }
                  for (n = c ? n : s; ++n < s; ) {
                    var h = sh((o = t[n])),
                      l = "wrapper" == h ? sc(o) : i;
                    c =
                      l && sP(l[0]) && 424 == l[1] && !l[4].length && 1 == l[9]
                        ? c[sh(l[0])].apply(c, l[3])
                        : 1 == o.length && sP(o)
                        ? c[h]()
                        : c.thru(o);
                  }
                  return function () {
                    var e = arguments,
                      i = e[0];
                    if (c && 1 == e.length && nk(i)) return c.plant(i).value();
                    for (var r = 0, n = s ? t[r].apply(this, e) : i; ++r < s; )
                      n = t[r].call(this, n);
                    return n;
                  };
                });
              }
              function rX(e, t, r, s, n, a, o, c, h, l) {
                var u = 128 & t,
                  p = 1 & t,
                  d = 2 & t,
                  g = 24 & t,
                  f = 512 & t,
                  y = d ? i : rQ(e);
                return function m() {
                  for (var v = arguments.length, w = ev(v), _ = v; _--; )
                    w[_] = arguments[_];
                  if (g)
                    var b = sl(m),
                      E = (function (e, t) {
                        for (var i = e.length, r = 0; i--; ) e[i] === t && ++r;
                        return r;
                      })(w, b);
                  if (
                    (s && (w = rU(w, s, n, g)),
                    a && (w = rz(w, a, o, g)),
                    (v -= E),
                    g && v < l)
                  ) {
                    var I = tz(w, b);
                    return r5(e, t, rX, m.placeholder, r, w, I, c, h, l - v);
                  }
                  var P = p ? r : this,
                    S = d ? P[e] : e;
                  return (
                    (v = w.length),
                    c
                      ? (w = (function (e, t) {
                          for (
                            var r = e.length, s = t3(t.length, r), n = rH(e);
                            s--;

                          ) {
                            var a = t[s];
                            e[s] = sb(a, r) ? n[a] : i;
                          }
                          return e;
                        })(w, c))
                      : f && v > 1 && w.reverse(),
                    u && h < v && (w.length = h),
                    this &&
                      this !== e3 &&
                      this instanceof m &&
                      (S = y || rQ(S)),
                    S.apply(P, w)
                  );
                };
              }
              function r0(e, t) {
                return function (i, r) {
                  var s, n;
                  return (
                    (s = t(r)),
                    (n = {}),
                    iG(i, function (t, i, r) {
                      e(n, s(t), i, r);
                    }),
                    n
                  );
                };
              }
              function r1(e, t) {
                return function (r, s) {
                  var n;
                  if (r === i && s === i) return t;
                  if ((r !== i && (n = r), s !== i)) {
                    if (n === i) return s;
                    "string" == typeof r || "string" == typeof s
                      ? ((r = rI(r)), (s = rI(s)))
                      : ((r = rE(r)), (s = rE(s))),
                      (n = e(r, s));
                  }
                  return n;
                };
              }
              function r2(e) {
                return sn(function (t) {
                  return (
                    (t = tp(t, tO(su()))),
                    rd(function (i) {
                      var r = this;
                      return e(t, function (e) {
                        return tn(e, r, i);
                      });
                    })
                  );
                });
              }
              function r3(e, t) {
                var r = (t = t === i ? " " : rI(t)).length;
                if (r < 2) return r ? rp(t, e) : t;
                var s = rp(t, tW(e / tK(t)));
                return tj(t) ? rN(tV(s), 0, e).join("") : s.slice(0, e);
              }
              function r8(e) {
                return function (t, r, s) {
                  return (
                    s && "number" != typeof s && sE(t, r, s) && (r = s = i),
                    (t = n8(t)),
                    r === i ? ((r = t), (t = 0)) : (r = n8(r)),
                    (s = s === i ? (t < r ? 1 : -1) : n8(s)),
                    (function (e, t, i, r) {
                      for (
                        var s = -1,
                          n = t2(tW((t - e) / (i || 1)), 0),
                          a = ev(n);
                        n--;

                      )
                        (a[r ? n : ++s] = e), (e += i);
                      return a;
                    })(t, r, s, e)
                  );
                };
              }
              function r4(e) {
                return function (t, i) {
                  return (
                    ("string" == typeof t && "string" == typeof i) ||
                      ((t = n6(t)), (i = n6(i))),
                    e(t, i)
                  );
                };
              }
              function r5(e, t, r, s, n, a, o, c, h, l) {
                var u = 8 & t,
                  p = u ? o : i,
                  d = u ? i : o,
                  g = u ? a : i,
                  f = u ? i : a;
                (t |= u ? 32 : 64), 4 & (t &= ~(u ? 64 : 32)) || (t &= -4);
                var y = [e, t, n, g, p, f, d, c, h, l],
                  m = r.apply(i, y);
                return sP(e) && sA(m, y), (m.placeholder = s), sN(m, e, t);
              }
              function r6(e) {
                var t = eE[e];
                return function (e, i) {
                  if (
                    ((e = n6(e)), (i = null == i ? 0 : t3(n4(i), 292)) && tX(e))
                  ) {
                    var r = (n7(e) + "e").split("e");
                    return +(
                      (r = (n7(t(r[0] + "e" + (+r[1] + i))) + "e").split(
                        "e"
                      ))[0] +
                      "e" +
                      (+r[1] - i)
                    );
                  }
                  return t(e);
                };
              }
              var r9 =
                it && 1 / tH(new it([, -0]))[1] == a
                  ? function (e) {
                      return new it(e);
                    }
                  : aK;
              function r7(e) {
                return function (t) {
                  var i,
                    r,
                    s = sm(t);
                  return s == y
                    ? tL(t)
                    : s == b
                    ? ((i = -1),
                      (r = Array(t.size)),
                      t.forEach(function (e) {
                        r[++i] = [e, e];
                      }),
                      r)
                    : tp(e(t), function (e) {
                        return [e, t[e]];
                      });
                };
              }
              function se(e, t, s, a, o, c, h, l) {
                var u = 2 & t;
                if (!u && "function" != typeof e) throw new eC(r);
                var p = a ? a.length : 0;
                if (
                  (p || ((t &= -97), (a = o = i)),
                  (h = h === i ? h : t2(n4(h), 0)),
                  (l = l === i ? l : n4(l)),
                  (p -= o ? o.length : 0),
                  64 & t)
                ) {
                  var d = a,
                    g = o;
                  a = o = i;
                }
                var f = u ? i : sc(e),
                  y = [e, t, s, a, o, d, g, c, h, l];
                if (
                  (f &&
                    (function (e, t) {
                      var i = e[1],
                        r = t[1],
                        s = i | r,
                        a = s < 131,
                        o =
                          (128 == r && 8 == i) ||
                          (128 == r && 256 == i && e[7].length <= t[8]) ||
                          (384 == r && t[7].length <= t[8] && 8 == i);
                      if (a || o) {
                        1 & r && ((e[2] = t[2]), (s |= 1 & i ? 0 : 4));
                        var c = t[3];
                        if (c) {
                          var h = e[3];
                          (e[3] = h ? rU(h, c, t[4]) : c),
                            (e[4] = h ? tz(e[3], n) : t[4]);
                        }
                        (c = t[5]) &&
                          ((h = e[5]),
                          (e[5] = h ? rz(h, c, t[6]) : c),
                          (e[6] = h ? tz(e[5], n) : t[6])),
                          (c = t[7]) && (e[7] = c),
                          128 & r &&
                            (e[8] = null == e[8] ? t[8] : t3(e[8], t[8])),
                          null == e[9] && (e[9] = t[9]),
                          (e[0] = t[0]),
                          (e[1] = s);
                      }
                    })(y, f),
                  (e = y[0]),
                  (t = y[1]),
                  (s = y[2]),
                  (a = y[3]),
                  (o = y[4]),
                  (l = y[9] =
                    y[9] === i ? (u ? 0 : e.length) : t2(y[9] - p, 0)) ||
                    !(24 & t) ||
                    (t &= -25),
                  t && 1 != t)
                )
                  8 == t || 16 == t
                    ? ((m = e),
                      (v = t),
                      (w = l),
                      (_ = rQ(m)),
                      (q = function e() {
                        for (
                          var t = arguments.length, r = ev(t), s = t, n = sl(e);
                          s--;

                        )
                          r[s] = arguments[s];
                        var a =
                          t < 3 && r[0] !== n && r[t - 1] !== n ? [] : tz(r, n);
                        return (t -= a.length) < w
                          ? r5(m, v, rX, e.placeholder, i, r, a, i, i, w - t)
                          : tn(
                              this && this !== e3 && this instanceof e ? _ : m,
                              this,
                              r
                            );
                      }))
                    : (32 != t && 33 != t) || o.length
                    ? (q = rX.apply(i, y))
                    : ((b = e),
                      (E = t),
                      (I = s),
                      (P = a),
                      (S = 1 & E),
                      (C = rQ(b)),
                      (q = function e() {
                        for (
                          var t = -1,
                            i = arguments.length,
                            r = -1,
                            s = P.length,
                            n = ev(s + i),
                            a =
                              this && this !== e3 && this instanceof e ? C : b;
                          ++r < s;

                        )
                          n[r] = P[r];
                        for (; i--; ) n[r++] = arguments[++t];
                        return tn(a, S ? I : this, n);
                      }));
                else
                  var m,
                    v,
                    w,
                    _,
                    b,
                    E,
                    I,
                    P,
                    S,
                    C,
                    R,
                    T,
                    x,
                    O,
                    A,
                    q =
                      ((R = e),
                      (T = t),
                      (x = s),
                      (O = 1 & T),
                      (A = rQ(R)),
                      function e() {
                        return (
                          this && this !== e3 && this instanceof e ? A : R
                        ).apply(O ? x : this, arguments);
                      });
                return sN((f ? rf : sA)(q, y), e, t);
              }
              function st(e, t, r, s) {
                return e === i || (nA(e, ex[r]) && !eq.call(s, r)) ? t : e;
              }
              function si(e, t, r, s, n, a) {
                return (
                  nF(e) &&
                    nF(t) &&
                    (a.set(t, e), rn(e, t, i, si, a), a.delete(t)),
                  e
                );
              }
              function sr(e) {
                return nW(e) ? i : e;
              }
              function ss(e, t, r, s, n, a) {
                var o = 1 & r,
                  c = e.length,
                  h = t.length;
                if (c != h && !(o && h > c)) return !1;
                var l = a.get(e),
                  u = a.get(t);
                if (l && u) return l == t && u == e;
                var p = -1,
                  d = !0,
                  g = 2 & r ? new iP() : i;
                for (a.set(e, t), a.set(t, e); ++p < c; ) {
                  var f = e[p],
                    y = t[p];
                  if (s) var m = o ? s(y, f, p, t, e, a) : s(f, y, p, e, t, a);
                  if (m !== i) {
                    if (m) continue;
                    d = !1;
                    break;
                  }
                  if (g) {
                    if (
                      !ty(t, function (e, t) {
                        if (!tq(g, t) && (f === e || n(f, e, r, s, a)))
                          return g.push(t);
                      })
                    ) {
                      d = !1;
                      break;
                    }
                  } else if (!(f === y || n(f, y, r, s, a))) {
                    d = !1;
                    break;
                  }
                }
                return a.delete(e), a.delete(t), d;
              }
              function sn(e) {
                return sD(sT(e, i, sB), e + "");
              }
              function sa(e) {
                return iZ(e, ap, sf);
              }
              function so(e) {
                return iZ(e, ad, sy);
              }
              var sc = is
                ? function (e) {
                    return is.get(e);
                  }
                : aK;
              function sh(e) {
                for (
                  var t = e.name + "",
                    i = ia[t],
                    r = eq.call(ia, t) ? i.length : 0;
                  r--;

                ) {
                  var s = i[r],
                    n = s.func;
                  if (null == n || n == e) return s.name;
                }
                return t;
              }
              function sl(e) {
                return (eq.call(iy, "placeholder") ? iy : e).placeholder;
              }
              function su() {
                var e = iy.iteratee || aL;
                return (
                  (e = e === aL ? i7 : e),
                  arguments.length ? e(arguments[0], arguments[1]) : e
                );
              }
              function sp(e, t) {
                var i,
                  r = e.__data__;
                return (
                  "string" == (i = typeof t) ||
                  "number" == i ||
                  "symbol" == i ||
                  "boolean" == i
                    ? "__proto__" !== t
                    : null === t
                )
                  ? r["string" == typeof t ? "string" : "hash"]
                  : r.map;
              }
              function sd(e) {
                for (var t = ap(e), i = t.length; i--; ) {
                  var r = t[i],
                    s = e[r];
                  t[i] = [r, s, s == s && !nF(s)];
                }
                return t;
              }
              function sg(e, t) {
                var r = null == e ? i : e[t];
                return i9(r) ? r : i;
              }
              var sf = tY
                  ? function (e) {
                      return null == e
                        ? []
                        : th(tY((e = eI(e))), function (t) {
                            return e1.call(e, t);
                          });
                    }
                  : aQ,
                sy = tY
                  ? function (e) {
                      for (var t = []; e; ) td(t, sf(e)), (e = eB(e));
                      return t;
                    }
                  : aQ,
                sm = iX;
              function sv(e, t, i) {
                t = rD(t, e);
                for (var r = -1, s = t.length, n = !1; ++r < s; ) {
                  var a = sj(t[r]);
                  if (!(n = null != e && i(e, a))) break;
                  e = e[a];
                }
                return n || ++r != s
                  ? n
                  : !!(s = null == e ? 0 : e.length) &&
                      nV(s) &&
                      sb(a, s) &&
                      (nk(e) || nN(e));
              }
              function sw(e) {
                return "function" != typeof e.constructor || sC(e)
                  ? {}
                  : im(eB(e));
              }
              function s_(e) {
                return nk(e) || nN(e) || !!(e8 && e && e[e8]);
              }
              function sb(e, t) {
                var i = typeof e;
                return (
                  !!(t = t ?? 9007199254740991) &&
                  ("number" == i || ("symbol" != i && eu.test(e))) &&
                  e > -1 &&
                  e % 1 == 0 &&
                  e < t
                );
              }
              function sE(e, t, i) {
                if (!nF(i)) return !1;
                var r = typeof t;
                return (
                  ("number" == r
                    ? !!(n$(i) && sb(t, i.length))
                    : "string" == r && t in i) && nA(i[t], e)
                );
              }
              function sI(e, t) {
                if (nk(e)) return !1;
                var i = typeof e;
                return (
                  !!(
                    "number" == i ||
                    "symbol" == i ||
                    "boolean" == i ||
                    null == e ||
                    nX(e)
                  ) ||
                  J.test(e) ||
                  !B.test(e) ||
                  (null != t && e in eI(t))
                );
              }
              function sP(e) {
                var t = sh(e),
                  i = iy[t];
                if ("function" != typeof i || !(t in i_.prototype)) return !1;
                if (e === i) return !0;
                var r = sc(i);
                return !!r && e === r[0];
              }
              ((t9 && sm(new t9(new ArrayBuffer(1))) != C) ||
                (t7 && sm(new t7()) != y) ||
                (ie && sm(ie.resolve()) != w) ||
                (it && sm(new it()) != b) ||
                (ii && sm(new ii()) != P)) &&
                (sm = function (e) {
                  var t = iX(e),
                    r = t == v ? e.constructor : i,
                    s = r ? sL(r) : "";
                  if (s)
                    switch (s) {
                      case io:
                        return C;
                      case ic:
                        return y;
                      case ih:
                        return w;
                      case il:
                        return b;
                      case iu:
                        return P;
                    }
                  return t;
                });
              var sS = eO ? nH : aY;
              function sC(e) {
                var t = e && e.constructor;
                return e === (("function" == typeof t && t.prototype) || ex);
              }
              function sR(e, t) {
                return function (r) {
                  return null != r && r[e] === t && (t !== i || e in eI(r));
                };
              }
              function sT(e, t, r) {
                return (
                  (t = t2(t === i ? e.length - 1 : t, 0)),
                  function () {
                    for (
                      var i = arguments,
                        s = -1,
                        n = t2(i.length - t, 0),
                        a = ev(n);
                      ++s < n;

                    )
                      a[s] = i[t + s];
                    s = -1;
                    for (var o = ev(t + 1); ++s < t; ) o[s] = i[s];
                    return (o[t] = r(a)), tn(e, this, o);
                  }
                );
              }
              function sx(e, t) {
                return t.length < 2 ? e : iY(e, rm(t, 0, -1));
              }
              function sO(e, t) {
                if (
                  !("constructor" === t && "function" == typeof e[t]) &&
                  "__proto__" != t
                )
                  return e[t];
              }
              var sA = sk(rf),
                sq =
                  tG ||
                  function (e, t) {
                    return e3.setTimeout(e, t);
                  },
                sD = sk(ry);
              function sN(e, t, i) {
                var r,
                  s,
                  n = t + "";
                return sD(
                  e,
                  (function (e, t) {
                    var i = t.length;
                    if (!i) return e;
                    var r = i - 1;
                    return (
                      (t[r] = (i > 1 ? "& " : "") + t[r]),
                      (t = t.join(i > 2 ? ", " : " ")),
                      e.replace(
                        X,
                        `{
/* [wrapped with ` +
                          t +
                          `] */
`
                      )
                    );
                  })(
                    n,
                    ((r = (s = n.match(ee)) ? s[1].split(et) : []),
                    to(c, function (e) {
                      var t = "_." + e[0];
                      i & e[1] && !tl(r, t) && r.push(t);
                    }),
                    r.sort())
                  )
                );
              }
              function sk(e) {
                var t = 0,
                  r = 0;
                return function () {
                  var s = t8(),
                    n = 16 - (s - r);
                  if (((r = s), n > 0)) {
                    if (++t >= 800) return arguments[0];
                  } else t = 0;
                  return e.apply(i, arguments);
                };
              }
              function sM(e, t) {
                var r = -1,
                  s = e.length,
                  n = s - 1;
                for (t = t === i ? s : t; ++r < t; ) {
                  var a = ru(r, n),
                    o = e[a];
                  (e[a] = e[r]), (e[r] = o);
                }
                return (e.length = t), e;
              }
              var s$ =
                ((ey = (ef = nS(
                  function (e) {
                    var t = [];
                    return (
                      46 === e.charCodeAt(0) && t.push(""),
                      e.replace(G, function (e, i, r, s) {
                        t.push(r ? s.replace(es, "$1") : i || e);
                      }),
                      t
                    );
                  },
                  function (e) {
                    return 500 === ey.size && ey.clear(), e;
                  }
                )).cache),
                ef);
              function sj(e) {
                if ("string" == typeof e || nX(e)) return e;
                var t = e + "";
                return "0" == t && 1 / e == -a ? "-0" : t;
              }
              function sL(e) {
                if (null != e) {
                  try {
                    return eA.call(e);
                  } catch {}
                  try {
                    return e + "";
                  } catch {}
                }
                return "";
              }
              function sU(e) {
                if (e instanceof i_) return e.clone();
                var t = new iw(e.__wrapped__, e.__chain__);
                return (
                  (t.__actions__ = rH(e.__actions__)),
                  (t.__index__ = e.__index__),
                  (t.__values__ = e.__values__),
                  t
                );
              }
              var sz = rd(function (e, t) {
                  return nj(e) ? iL(e, iF(t, 1, nj, !0)) : [];
                }),
                sH = rd(function (e, t) {
                  var r = sY(t);
                  return (
                    nj(r) && (r = i),
                    nj(e) ? iL(e, iF(t, 1, nj, !0), su(r, 2)) : []
                  );
                }),
                sK = rd(function (e, t) {
                  var r = sY(t);
                  return (
                    nj(r) && (r = i), nj(e) ? iL(e, iF(t, 1, nj, !0), i, r) : []
                  );
                });
              function sV(e, t, i) {
                var r = null == e ? 0 : e.length;
                if (!r) return -1;
                var s = null == i ? 0 : n4(i);
                return s < 0 && (s = t2(r + s, 0)), tw(e, su(t, 3), s);
              }
              function sF(e, t, r) {
                var s = null == e ? 0 : e.length;
                if (!s) return -1;
                var n = s - 1;
                return (
                  r !== i &&
                    ((n = n4(r)), (n = r < 0 ? t2(s + n, 0) : t3(n, s - 1))),
                  tw(e, su(t, 3), n, !0)
                );
              }
              function sB(e) {
                return (null == e ? 0 : e.length) ? iF(e, 1) : [];
              }
              function sJ(e) {
                return e && e.length ? e[0] : i;
              }
              var sG = rd(function (e) {
                  var t = tp(e, rA);
                  return t.length && t[0] === e[0] ? i3(t) : [];
                }),
                sW = rd(function (e) {
                  var t = sY(e),
                    r = tp(e, rA);
                  return (
                    t === sY(r) ? (t = i) : r.pop(),
                    r.length && r[0] === e[0] ? i3(r, su(t, 2)) : []
                  );
                }),
                sQ = rd(function (e) {
                  var t = sY(e),
                    r = tp(e, rA);
                  return (
                    (t = "function" == typeof t ? t : i) && r.pop(),
                    r.length && r[0] === e[0] ? i3(r, i, t) : []
                  );
                });
              function sY(e) {
                var t = null == e ? 0 : e.length;
                return t ? e[t - 1] : i;
              }
              var sZ = rd(sX);
              function sX(e, t) {
                return e && e.length && t && t.length ? rh(e, t) : e;
              }
              var s0 = sn(function (e, t) {
                var i = null == e ? 0 : e.length,
                  r = iN(e, t);
                return (
                  rl(
                    e,
                    tp(t, function (e) {
                      return sb(e, i) ? +e : e;
                    }).sort(rL)
                  ),
                  r
                );
              });
              function s1(e) {
                return null == e ? e : t6.call(e);
              }
              var s2 = rd(function (e) {
                  return rP(iF(e, 1, nj, !0));
                }),
                s3 = rd(function (e) {
                  var t = sY(e);
                  return nj(t) && (t = i), rP(iF(e, 1, nj, !0), su(t, 2));
                }),
                s8 = rd(function (e) {
                  var t = sY(e);
                  return (
                    (t = "function" == typeof t ? t : i),
                    rP(iF(e, 1, nj, !0), i, t)
                  );
                });
              function s4(e) {
                if (!(e && e.length)) return [];
                var t = 0;
                return (
                  (e = th(e, function (e) {
                    if (nj(e)) return (t = t2(e.length, t)), !0;
                  })),
                  tT(t, function (t) {
                    return tp(e, tP(t));
                  })
                );
              }
              function s5(e, t) {
                if (!(e && e.length)) return [];
                var r = s4(e);
                return null == t
                  ? r
                  : tp(r, function (e) {
                      return tn(t, i, e);
                    });
              }
              var s6 = rd(function (e, t) {
                  return nj(e) ? iL(e, t) : [];
                }),
                s9 = rd(function (e) {
                  return rx(th(e, nj));
                }),
                s7 = rd(function (e) {
                  var t = sY(e);
                  return nj(t) && (t = i), rx(th(e, nj), su(t, 2));
                }),
                ne = rd(function (e) {
                  var t = sY(e);
                  return (
                    (t = "function" == typeof t ? t : i), rx(th(e, nj), i, t)
                  );
                }),
                nt = rd(s4),
                ni = rd(function (e) {
                  var t = e.length,
                    r = t > 1 ? e[t - 1] : i;
                  return (
                    (r = "function" == typeof r ? (e.pop(), r) : i), s5(e, r)
                  );
                });
              function nr(e) {
                var t = iy(e);
                return (t.__chain__ = !0), t;
              }
              function ns(e, t) {
                return t(e);
              }
              var nn = sn(function (e) {
                  var t = e.length,
                    r = t ? e[0] : 0,
                    s = this.__wrapped__,
                    n = function (t) {
                      return iN(t, e);
                    };
                  return !(t > 1) &&
                    !this.__actions__.length &&
                    s instanceof i_ &&
                    sb(r)
                    ? ((s = s.slice(r, +r + (t ? 1 : 0))).__actions__.push({
                        func: ns,
                        args: [n],
                        thisArg: i,
                      }),
                      new iw(s, this.__chain__).thru(function (e) {
                        return t && !e.length && e.push(i), e;
                      }))
                    : this.thru(n);
                }),
                na = rV(function (e, t, i) {
                  eq.call(e, i) ? ++e[i] : iD(e, i, 1);
                }),
                no = rY(sV),
                nc = rY(sF);
              function nh(e, t) {
                return (nk(e) ? to : iU)(e, su(t, 3));
              }
              function nl(e, t) {
                return (
                  nk(e)
                    ? function (e, t) {
                        for (
                          var i = null == e ? 0 : e.length;
                          i-- && !1 !== t(e[i], i, e);

                        );
                        return e;
                      }
                    : iz
                )(e, su(t, 3));
              }
              var nu = rV(function (e, t, i) {
                  eq.call(e, i) ? e[i].push(t) : iD(e, i, [t]);
                }),
                np = rd(function (e, t, i) {
                  var r = -1,
                    s = "function" == typeof t,
                    n = n$(e) ? ev(e.length) : [];
                  return (
                    iU(e, function (e) {
                      n[++r] = s ? tn(t, e, i) : i8(e, t, i);
                    }),
                    n
                  );
                }),
                nd = rV(function (e, t, i) {
                  iD(e, i, t);
                });
              function ng(e, t) {
                return (nk(e) ? tp : ri)(e, su(t, 3));
              }
              var nf = rV(
                  function (e, t, i) {
                    e[i ? 0 : 1].push(t);
                  },
                  function () {
                    return [[], []];
                  }
                ),
                ny = rd(function (e, t) {
                  if (null == e) return [];
                  var i = t.length;
                  return (
                    i > 1 && sE(e, t[0], t[1])
                      ? (t = [])
                      : i > 2 && sE(t[0], t[1], t[2]) && (t = [t[0]]),
                    ro(e, iF(t, 1), [])
                  );
                }),
                nm =
                  tS ||
                  function () {
                    return e3.Date.now();
                  };
              function nv(e, t, r) {
                return (
                  (t = r ? i : t),
                  (t = e && null == t ? e.length : t),
                  se(e, 128, i, i, i, i, t)
                );
              }
              function nw(e, t) {
                var s;
                if ("function" != typeof t) throw new eC(r);
                return (
                  (e = n4(e)),
                  function () {
                    return (
                      --e > 0 && (s = t.apply(this, arguments)),
                      e <= 1 && (t = i),
                      s
                    );
                  }
                );
              }
              var n_ = rd(function (e, t, i) {
                  var r = 1;
                  if (i.length) {
                    var s = tz(i, sl(n_));
                    r |= 32;
                  }
                  return se(e, r, t, i, s);
                }),
                nb = rd(function (e, t, i) {
                  var r = 3;
                  if (i.length) {
                    var s = tz(i, sl(nb));
                    r |= 32;
                  }
                  return se(t, r, e, i, s);
                });
              function nE(e, t, s) {
                var n,
                  a,
                  o,
                  c,
                  h,
                  l,
                  u = 0,
                  p = !1,
                  d = !1,
                  g = !0;
                if ("function" != typeof e) throw new eC(r);
                function f(t) {
                  var r = n,
                    s = a;
                  return (n = a = i), (u = t), (c = e.apply(s, r));
                }
                function y(e) {
                  var r = e - l,
                    s = e - u;
                  return l === i || r >= t || r < 0 || (d && s >= o);
                }
                function m() {
                  var e,
                    i,
                    r,
                    s = nm();
                  if (y(s)) return v(s);
                  h = sq(
                    m,
                    ((e = s - l),
                    (i = s - u),
                    (r = t - e),
                    d ? t3(r, o - i) : r)
                  );
                }
                function v(e) {
                  return (h = i), g && n ? f(e) : ((n = a = i), c);
                }
                function w() {
                  var e,
                    r = nm(),
                    s = y(r);
                  if (((n = arguments), (a = this), (l = r), s)) {
                    if (h === i)
                      return (u = e = l), (h = sq(m, t)), p ? f(e) : c;
                    if (d) return rk(h), (h = sq(m, t)), f(l);
                  }
                  return h === i && (h = sq(m, t)), c;
                }
                return (
                  (t = n6(t) || 0),
                  nF(s) &&
                    ((p = !!s.leading),
                    (o = (d = "maxWait" in s) ? t2(n6(s.maxWait) || 0, t) : o),
                    (g = "trailing" in s ? !!s.trailing : g)),
                  (w.cancel = function () {
                    h !== i && rk(h), (u = 0), (n = l = a = h = i);
                  }),
                  (w.flush = function () {
                    return h === i ? c : v(nm());
                  }),
                  w
                );
              }
              var nI = rd(function (e, t) {
                  return ij(e, 1, t);
                }),
                nP = rd(function (e, t, i) {
                  return ij(e, n6(t) || 0, i);
                });
              function nS(e, t) {
                if (
                  "function" != typeof e ||
                  (null != t && "function" != typeof t)
                )
                  throw new eC(r);
                var i = function () {
                  var r = arguments,
                    s = t ? t.apply(this, r) : r[0],
                    n = i.cache;
                  if (n.has(s)) return n.get(s);
                  var a = e.apply(this, r);
                  return (i.cache = n.set(s, a) || n), a;
                };
                return (i.cache = new (nS.Cache || iI)()), i;
              }
              function nC(e) {
                if ("function" != typeof e) throw new eC(r);
                return function () {
                  var t = arguments;
                  switch (t.length) {
                    case 0:
                      return !e.call(this);
                    case 1:
                      return !e.call(this, t[0]);
                    case 2:
                      return !e.call(this, t[0], t[1]);
                    case 3:
                      return !e.call(this, t[0], t[1], t[2]);
                  }
                  return !e.apply(this, t);
                };
              }
              nS.Cache = iI;
              var nR = rd(function (e, t) {
                  var i = (t =
                    1 == t.length && nk(t[0])
                      ? tp(t[0], tO(su()))
                      : tp(iF(t, 1), tO(su()))).length;
                  return rd(function (r) {
                    for (var s = -1, n = t3(r.length, i); ++s < n; )
                      r[s] = t[s].call(this, r[s]);
                    return tn(e, this, r);
                  });
                }),
                nT = rd(function (e, t) {
                  var r = tz(t, sl(nT));
                  return se(e, 32, i, t, r);
                }),
                nx = rd(function (e, t) {
                  var r = tz(t, sl(nx));
                  return se(e, 64, i, t, r);
                }),
                nO = sn(function (e, t) {
                  return se(e, 256, i, i, i, t);
                });
              function nA(e, t) {
                return e === t || (e != e && t != t);
              }
              var nq = r4(i0),
                nD = r4(function (e, t) {
                  return e >= t;
                }),
                nN = i4(
                  (function () {
                    return arguments;
                  })()
                )
                  ? i4
                  : function (e) {
                      return (
                        nB(e) && eq.call(e, "callee") && !e1.call(e, "callee")
                      );
                    },
                nk = ev.isArray,
                nM = e7
                  ? tO(e7)
                  : function (e) {
                      return nB(e) && iX(e) == S;
                    };
              function n$(e) {
                return null != e && nV(e.length) && !nH(e);
              }
              function nj(e) {
                return nB(e) && n$(e);
              }
              var nL = tZ || aY,
                nU = te
                  ? tO(te)
                  : function (e) {
                      return nB(e) && iX(e) == p;
                    };
              function nz(e) {
                if (!nB(e)) return !1;
                var t = iX(e);
                return (
                  t == d ||
                  "[object DOMException]" == t ||
                  ("string" == typeof e.message &&
                    "string" == typeof e.name &&
                    !nW(e))
                );
              }
              function nH(e) {
                if (!nF(e)) return !1;
                var t = iX(e);
                return (
                  t == g ||
                  t == f ||
                  "[object AsyncFunction]" == t ||
                  "[object Proxy]" == t
                );
              }
              function nK(e) {
                return "number" == typeof e && e == n4(e);
              }
              function nV(e) {
                return (
                  "number" == typeof e &&
                  e > -1 &&
                  e % 1 == 0 &&
                  e <= 9007199254740991
                );
              }
              function nF(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t);
              }
              function nB(e) {
                return null != e && "object" == typeof e;
              }
              var nJ = tt
                ? tO(tt)
                : function (e) {
                    return nB(e) && sm(e) == y;
                  };
              function nG(e) {
                return "number" == typeof e || (nB(e) && iX(e) == m);
              }
              function nW(e) {
                if (!nB(e) || iX(e) != v) return !1;
                var t = eB(e);
                if (null === t) return !0;
                var i = eq.call(t, "constructor") && t.constructor;
                return (
                  "function" == typeof i && i instanceof i && eA.call(i) == eM
                );
              }
              var nQ = ti
                  ? tO(ti)
                  : function (e) {
                      return nB(e) && iX(e) == _;
                    },
                nY = tr
                  ? tO(tr)
                  : function (e) {
                      return nB(e) && sm(e) == b;
                    };
              function nZ(e) {
                return "string" == typeof e || (!nk(e) && nB(e) && iX(e) == E);
              }
              function nX(e) {
                return "symbol" == typeof e || (nB(e) && iX(e) == I);
              }
              var n0 = ts
                  ? tO(ts)
                  : function (e) {
                      return nB(e) && nV(e.length) && !!eQ[iX(e)];
                    },
                n1 = r4(rt),
                n2 = r4(function (e, t) {
                  return e <= t;
                });
              function n3(e) {
                if (!e) return [];
                if (n$(e)) return nZ(e) ? tV(e) : rH(e);
                if (e4 && e[e4])
                  return (function (e) {
                    for (var t, i = []; !(t = e.next()).done; ) i.push(t.value);
                    return i;
                  })(e[e4]());
                var t = sm(e);
                return (t == y ? tL : t == b ? tH : ab)(e);
              }
              function n8(e) {
                return e
                  ? (e = n6(e)) === a || e === -a
                    ? (e < 0 ? -1 : 1) * 17976931348623157e292
                    : e == e
                    ? e
                    : 0
                  : 0 === e
                  ? e
                  : 0;
              }
              function n4(e) {
                var t = n8(e),
                  i = t % 1;
                return t == t ? (i ? t - i : t) : 0;
              }
              function n5(e) {
                return e ? ik(n4(e), 0, 4294967295) : 0;
              }
              function n6(e) {
                if ("number" == typeof e) return e;
                if (nX(e)) return o;
                if (nF(e)) {
                  var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                  e = nF(t) ? t + "" : t;
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = tx(e);
                var i = ec.test(e);
                return i || el.test(e)
                  ? e0(e.slice(2), i ? 2 : 8)
                  : eo.test(e)
                  ? o
                  : +e;
              }
              function n9(e) {
                return rK(e, ad(e));
              }
              function n7(e) {
                return null == e ? "" : rI(e);
              }
              var ae = rF(function (e, t) {
                  if (sC(t) || n$(t)) {
                    rK(t, ap(t), e);
                    return;
                  }
                  for (var i in t) eq.call(t, i) && ix(e, i, t[i]);
                }),
                at = rF(function (e, t) {
                  rK(t, ad(t), e);
                }),
                ai = rF(function (e, t, i, r) {
                  rK(t, ad(t), e, r);
                }),
                ar = rF(function (e, t, i, r) {
                  rK(t, ap(t), e, r);
                }),
                as = sn(iN),
                an = rd(function (e, t) {
                  e = eI(e);
                  var r = -1,
                    s = t.length,
                    n = s > 2 ? t[2] : i;
                  for (n && sE(t[0], t[1], n) && (s = 1); ++r < s; )
                    for (
                      var a = t[r], o = ad(a), c = -1, h = o.length;
                      ++c < h;

                    ) {
                      var l = o[c],
                        u = e[l];
                      (u === i || (nA(u, ex[l]) && !eq.call(e, l))) &&
                        (e[l] = a[l]);
                    }
                  return e;
                }),
                aa = rd(function (e) {
                  return e.push(i, si), tn(af, i, e);
                });
              function ao(e, t, r) {
                var s = null == e ? i : iY(e, t);
                return s === i ? r : s;
              }
              function ac(e, t) {
                return null != e && sv(e, t, i2);
              }
              var ah = r0(function (e, t, i) {
                  null != t &&
                    "function" != typeof t.toString &&
                    (t = ek.call(t)),
                    (e[t] = i);
                }, ak(aj)),
                al = r0(function (e, t, i) {
                  null != t &&
                    "function" != typeof t.toString &&
                    (t = ek.call(t)),
                    eq.call(e, t) ? e[t].push(i) : (e[t] = [i]);
                }, su),
                au = rd(i8);
              function ap(e) {
                return n$(e) ? iC(e) : re(e);
              }
              function ad(e) {
                return n$(e)
                  ? iC(e, !0)
                  : (function (e) {
                      if (!nF(e))
                        return (function (e) {
                          var t = [];
                          if (null != e) for (var i in eI(e)) t.push(i);
                          return t;
                        })(e);
                      var t = sC(e),
                        i = [];
                      for (var r in e)
                        ("constructor" == r && (t || !eq.call(e, r))) ||
                          i.push(r);
                      return i;
                    })(e);
              }
              var ag = rF(function (e, t, i) {
                  rn(e, t, i);
                }),
                af = rF(function (e, t, i, r) {
                  rn(e, t, i, r);
                }),
                ay = sn(function (e, t) {
                  var i = {};
                  if (null == e) return i;
                  var r = !1;
                  (t = tp(t, function (t) {
                    return (t = rD(t, e)), r || (r = t.length > 1), t;
                  })),
                    rK(e, so(e), i),
                    r && (i = iM(i, 7, sr));
                  for (var s = t.length; s--; ) rS(i, t[s]);
                  return i;
                }),
                am = sn(function (e, t) {
                  return null == e
                    ? {}
                    : rc(e, t, function (t, i) {
                        return ac(e, i);
                      });
                });
              function av(e, t) {
                if (null == e) return {};
                var i = tp(so(e), function (e) {
                  return [e];
                });
                return (
                  (t = su(t)),
                  rc(e, i, function (e, i) {
                    return t(e, i[0]);
                  })
                );
              }
              var aw = r7(ap),
                a_ = r7(ad);
              function ab(e) {
                return null == e ? [] : tA(e, ap(e));
              }
              var aE = rW(function (e, t, i) {
                return (t = t.toLowerCase()), e + (i ? aI(t) : t);
              });
              function aI(e) {
                return aA(n7(e).toLowerCase());
              }
              function aP(e) {
                return (e = n7(e)) && e.replace(ep, tk).replace(eK, "");
              }
              var aS = rW(function (e, t, i) {
                  return e + (i ? "-" : "") + t.toLowerCase();
                }),
                aC = rW(function (e, t, i) {
                  return e + (i ? " " : "") + t.toLowerCase();
                }),
                aR = rG("toLowerCase"),
                aT = rW(function (e, t, i) {
                  return e + (i ? "_" : "") + t.toLowerCase();
                }),
                ax = rW(function (e, t, i) {
                  return e + (i ? " " : "") + aA(t);
                }),
                aO = rW(function (e, t, i) {
                  return e + (i ? " " : "") + t.toUpperCase();
                }),
                aA = rG("toUpperCase");
              function aq(e, t, r) {
                var s;
                return (
                  (e = n7(e)),
                  (t = r ? i : t) === i
                    ? ((s = e), eJ.test(s))
                      ? e.match(eF) || []
                      : e.match(ei) || []
                    : e.match(t) || []
                );
              }
              var aD = rd(function (e, t) {
                  try {
                    return tn(e, i, t);
                  } catch (e) {
                    return nz(e) ? e : new e_(e);
                  }
                }),
                aN = sn(function (e, t) {
                  return (
                    to(t, function (t) {
                      iD(e, (t = sj(t)), n_(e[t], e));
                    }),
                    e
                  );
                });
              function ak(e) {
                return function () {
                  return e;
                };
              }
              var aM = rZ(),
                a$ = rZ(!0);
              function aj(e) {
                return e;
              }
              function aL(e) {
                return i7("function" == typeof e ? e : iM(e, 1));
              }
              var aU = rd(function (e, t) {
                  return function (i) {
                    return i8(i, e, t);
                  };
                }),
                az = rd(function (e, t) {
                  return function (i) {
                    return i8(e, i, t);
                  };
                });
              function aH(e, t, i) {
                var r = ap(t),
                  s = iQ(t, r);
                null != i ||
                  (nF(t) && (s.length || !r.length)) ||
                  ((i = t), (t = e), (e = this), (s = iQ(t, ap(t))));
                var n = !(nF(i) && "chain" in i) || !!i.chain,
                  a = nH(e);
                return (
                  to(s, function (i) {
                    var r = t[i];
                    (e[i] = r),
                      a &&
                        (e.prototype[i] = function () {
                          var t = this.__chain__;
                          if (n || t) {
                            var i = e(this.__wrapped__);
                            return (
                              (i.__actions__ = rH(this.__actions__)).push({
                                func: r,
                                args: arguments,
                                thisArg: e,
                              }),
                              (i.__chain__ = t),
                              i
                            );
                          }
                          return r.apply(e, td([this.value()], arguments));
                        });
                  }),
                  e
                );
              }
              function aK() {}
              var aV = r2(tp),
                aF = r2(tc),
                aB = r2(ty);
              function aJ(e) {
                return sI(e)
                  ? tP(sj(e))
                  : function (t) {
                      return iY(t, e);
                    };
              }
              var aG = r8(),
                aW = r8(!0);
              function aQ() {
                return [];
              }
              function aY() {
                return !1;
              }
              var aZ = r1(function (e, t) {
                  return e + t;
                }, 0),
                aX = r6("ceil"),
                a0 = r1(function (e, t) {
                  return e / t;
                }, 1),
                a1 = r6("floor"),
                a2 = r1(function (e, t) {
                  return e * t;
                }, 1),
                a3 = r6("round"),
                a8 = r1(function (e, t) {
                  return e - t;
                }, 0);
              return (
                (iy.after = function (e, t) {
                  if ("function" != typeof t) throw new eC(r);
                  return (
                    (e = n4(e)),
                    function () {
                      if (--e < 1) return t.apply(this, arguments);
                    }
                  );
                }),
                (iy.ary = nv),
                (iy.assign = ae),
                (iy.assignIn = at),
                (iy.assignInWith = ai),
                (iy.assignWith = ar),
                (iy.at = as),
                (iy.before = nw),
                (iy.bind = n_),
                (iy.bindAll = aN),
                (iy.bindKey = nb),
                (iy.castArray = function () {
                  if (!arguments.length) return [];
                  var e = arguments[0];
                  return nk(e) ? e : [e];
                }),
                (iy.chain = nr),
                (iy.chunk = function (e, t, r) {
                  t = (r ? sE(e, t, r) : t === i) ? 1 : t2(n4(t), 0);
                  var s = null == e ? 0 : e.length;
                  if (!s || t < 1) return [];
                  for (var n = 0, a = 0, o = ev(tW(s / t)); n < s; )
                    o[a++] = rm(e, n, (n += t));
                  return o;
                }),
                (iy.compact = function (e) {
                  for (
                    var t = -1, i = null == e ? 0 : e.length, r = 0, s = [];
                    ++t < i;

                  ) {
                    var n = e[t];
                    n && (s[r++] = n);
                  }
                  return s;
                }),
                (iy.concat = function () {
                  var e = arguments.length;
                  if (!e) return [];
                  for (var t = ev(e - 1), i = arguments[0], r = e; r--; )
                    t[r - 1] = arguments[r];
                  return td(nk(i) ? rH(i) : [i], iF(t, 1));
                }),
                (iy.cond = function (e) {
                  var t = null == e ? 0 : e.length,
                    i = su();
                  return (
                    (e = t
                      ? tp(e, function (e) {
                          if ("function" != typeof e[1]) throw new eC(r);
                          return [i(e[0]), e[1]];
                        })
                      : []),
                    rd(function (i) {
                      for (var r = -1; ++r < t; ) {
                        var s = e[r];
                        if (tn(s[0], this, i)) return tn(s[1], this, i);
                      }
                    })
                  );
                }),
                (iy.conforms = function (e) {
                  var t, i;
                  return (
                    (i = ap((t = iM(e, 1)))),
                    function (e) {
                      return i$(e, t, i);
                    }
                  );
                }),
                (iy.constant = ak),
                (iy.countBy = na),
                (iy.create = function (e, t) {
                  var i = im(e);
                  return null == t ? i : iq(i, t);
                }),
                (iy.curry = function e(t, r, s) {
                  r = s ? i : r;
                  var n = se(t, 8, i, i, i, i, i, r);
                  return (n.placeholder = e.placeholder), n;
                }),
                (iy.curryRight = function e(t, r, s) {
                  r = s ? i : r;
                  var n = se(t, 16, i, i, i, i, i, r);
                  return (n.placeholder = e.placeholder), n;
                }),
                (iy.debounce = nE),
                (iy.defaults = an),
                (iy.defaultsDeep = aa),
                (iy.defer = nI),
                (iy.delay = nP),
                (iy.difference = sz),
                (iy.differenceBy = sH),
                (iy.differenceWith = sK),
                (iy.drop = function (e, t, r) {
                  var s = null == e ? 0 : e.length;
                  return s
                    ? rm(e, (t = r || t === i ? 1 : n4(t)) < 0 ? 0 : t, s)
                    : [];
                }),
                (iy.dropRight = function (e, t, r) {
                  var s = null == e ? 0 : e.length;
                  return s
                    ? rm(
                        e,
                        0,
                        (t = s - (t = r || t === i ? 1 : n4(t))) < 0 ? 0 : t
                      )
                    : [];
                }),
                (iy.dropRightWhile = function (e, t) {
                  return e && e.length ? rR(e, su(t, 3), !0, !0) : [];
                }),
                (iy.dropWhile = function (e, t) {
                  return e && e.length ? rR(e, su(t, 3), !0) : [];
                }),
                (iy.fill = function (e, t, r, s) {
                  var n = null == e ? 0 : e.length;
                  return n
                    ? (r &&
                        "number" != typeof r &&
                        sE(e, t, r) &&
                        ((r = 0), (s = n)),
                      (function (e, t, r, s) {
                        var n = e.length;
                        for (
                          (r = n4(r)) < 0 && (r = -r > n ? 0 : n + r),
                            (s = s === i || s > n ? n : n4(s)) < 0 && (s += n),
                            s = r > s ? 0 : n5(s);
                          r < s;

                        )
                          e[r++] = t;
                        return e;
                      })(e, t, r, s))
                    : [];
                }),
                (iy.filter = function (e, t) {
                  return (nk(e) ? th : iV)(e, su(t, 3));
                }),
                (iy.flatMap = function (e, t) {
                  return iF(ng(e, t), 1);
                }),
                (iy.flatMapDeep = function (e, t) {
                  return iF(ng(e, t), a);
                }),
                (iy.flatMapDepth = function (e, t, r) {
                  return (r = r === i ? 1 : n4(r)), iF(ng(e, t), r);
                }),
                (iy.flatten = sB),
                (iy.flattenDeep = function (e) {
                  return (null == e ? 0 : e.length) ? iF(e, a) : [];
                }),
                (iy.flattenDepth = function (e, t) {
                  return (null == e ? 0 : e.length)
                    ? iF(e, (t = t === i ? 1 : n4(t)))
                    : [];
                }),
                (iy.flip = function (e) {
                  return se(e, 512);
                }),
                (iy.flow = aM),
                (iy.flowRight = a$),
                (iy.fromPairs = function (e) {
                  for (
                    var t = -1, i = null == e ? 0 : e.length, r = {};
                    ++t < i;

                  ) {
                    var s = e[t];
                    r[s[0]] = s[1];
                  }
                  return r;
                }),
                (iy.functions = function (e) {
                  return null == e ? [] : iQ(e, ap(e));
                }),
                (iy.functionsIn = function (e) {
                  return null == e ? [] : iQ(e, ad(e));
                }),
                (iy.groupBy = nu),
                (iy.initial = function (e) {
                  return (null == e ? 0 : e.length) ? rm(e, 0, -1) : [];
                }),
                (iy.intersection = sG),
                (iy.intersectionBy = sW),
                (iy.intersectionWith = sQ),
                (iy.invert = ah),
                (iy.invertBy = al),
                (iy.invokeMap = np),
                (iy.iteratee = aL),
                (iy.keyBy = nd),
                (iy.keys = ap),
                (iy.keysIn = ad),
                (iy.map = ng),
                (iy.mapKeys = function (e, t) {
                  var i = {};
                  return (
                    (t = su(t, 3)),
                    iG(e, function (e, r, s) {
                      iD(i, t(e, r, s), e);
                    }),
                    i
                  );
                }),
                (iy.mapValues = function (e, t) {
                  var i = {};
                  return (
                    (t = su(t, 3)),
                    iG(e, function (e, r, s) {
                      iD(i, r, t(e, r, s));
                    }),
                    i
                  );
                }),
                (iy.matches = function (e) {
                  return rr(iM(e, 1));
                }),
                (iy.matchesProperty = function (e, t) {
                  return rs(e, iM(t, 1));
                }),
                (iy.memoize = nS),
                (iy.merge = ag),
                (iy.mergeWith = af),
                (iy.method = aU),
                (iy.methodOf = az),
                (iy.mixin = aH),
                (iy.negate = nC),
                (iy.nthArg = function (e) {
                  return (
                    (e = n4(e)),
                    rd(function (t) {
                      return ra(t, e);
                    })
                  );
                }),
                (iy.omit = ay),
                (iy.omitBy = function (e, t) {
                  return av(e, nC(su(t)));
                }),
                (iy.once = function (e) {
                  return nw(2, e);
                }),
                (iy.orderBy = function (e, t, r, s) {
                  return null == e
                    ? []
                    : (nk(t) || (t = null == t ? [] : [t]),
                      nk((r = s ? i : r)) || (r = null == r ? [] : [r]),
                      ro(e, t, r));
                }),
                (iy.over = aV),
                (iy.overArgs = nR),
                (iy.overEvery = aF),
                (iy.overSome = aB),
                (iy.partial = nT),
                (iy.partialRight = nx),
                (iy.partition = nf),
                (iy.pick = am),
                (iy.pickBy = av),
                (iy.property = aJ),
                (iy.propertyOf = function (e) {
                  return function (t) {
                    return null == e ? i : iY(e, t);
                  };
                }),
                (iy.pull = sZ),
                (iy.pullAll = sX),
                (iy.pullAllBy = function (e, t, i) {
                  return e && e.length && t && t.length
                    ? rh(e, t, su(i, 2))
                    : e;
                }),
                (iy.pullAllWith = function (e, t, r) {
                  return e && e.length && t && t.length ? rh(e, t, i, r) : e;
                }),
                (iy.pullAt = s0),
                (iy.range = aG),
                (iy.rangeRight = aW),
                (iy.rearg = nO),
                (iy.reject = function (e, t) {
                  return (nk(e) ? th : iV)(e, nC(su(t, 3)));
                }),
                (iy.remove = function (e, t) {
                  var i = [];
                  if (!(e && e.length)) return i;
                  var r = -1,
                    s = [],
                    n = e.length;
                  for (t = su(t, 3); ++r < n; ) {
                    var a = e[r];
                    t(a, r, e) && (i.push(a), s.push(r));
                  }
                  return rl(e, s), i;
                }),
                (iy.rest = function (e, t) {
                  if ("function" != typeof e) throw new eC(r);
                  return rd(e, (t = t === i ? t : n4(t)));
                }),
                (iy.reverse = s1),
                (iy.sampleSize = function (e, t, r) {
                  return (
                    (t = (r ? sE(e, t, r) : t === i) ? 1 : n4(t)),
                    (nk(e)
                      ? function (e, t) {
                          return sM(rH(e), ik(t, 0, e.length));
                        }
                      : function (e, t) {
                          var i = ab(e);
                          return sM(i, ik(t, 0, i.length));
                        })(e, t)
                  );
                }),
                (iy.set = function (e, t, i) {
                  return null == e ? e : rg(e, t, i);
                }),
                (iy.setWith = function (e, t, r, s) {
                  return (
                    (s = "function" == typeof s ? s : i),
                    null == e ? e : rg(e, t, r, s)
                  );
                }),
                (iy.shuffle = function (e) {
                  return (
                    nk(e)
                      ? function (e) {
                          return sM(rH(e));
                        }
                      : function (e) {
                          return sM(ab(e));
                        }
                  )(e);
                }),
                (iy.slice = function (e, t, r) {
                  var s = null == e ? 0 : e.length;
                  return s
                    ? (r && "number" != typeof r && sE(e, t, r)
                        ? ((t = 0), (r = s))
                        : ((t = null == t ? 0 : n4(t)),
                          (r = r === i ? s : n4(r))),
                      rm(e, t, r))
                    : [];
                }),
                (iy.sortBy = ny),
                (iy.sortedUniq = function (e) {
                  return e && e.length ? rb(e) : [];
                }),
                (iy.sortedUniqBy = function (e, t) {
                  return e && e.length ? rb(e, su(t, 2)) : [];
                }),
                (iy.split = function (e, t, r) {
                  return (
                    r && "number" != typeof r && sE(e, t, r) && (t = r = i),
                    (r = r === i ? 4294967295 : r >>> 0)
                      ? (e = n7(e)) &&
                        ("string" == typeof t || (null != t && !nQ(t))) &&
                        !(t = rI(t)) &&
                        tj(e)
                        ? rN(tV(e), 0, r)
                        : e.split(t, r)
                      : []
                  );
                }),
                (iy.spread = function (e, t) {
                  if ("function" != typeof e) throw new eC(r);
                  return (
                    (t = null == t ? 0 : t2(n4(t), 0)),
                    rd(function (i) {
                      var r = i[t],
                        s = rN(i, 0, t);
                      return r && td(s, r), tn(e, this, s);
                    })
                  );
                }),
                (iy.tail = function (e) {
                  var t = null == e ? 0 : e.length;
                  return t ? rm(e, 1, t) : [];
                }),
                (iy.take = function (e, t, r) {
                  return e && e.length
                    ? rm(e, 0, (t = r || t === i ? 1 : n4(t)) < 0 ? 0 : t)
                    : [];
                }),
                (iy.takeRight = function (e, t, r) {
                  var s = null == e ? 0 : e.length;
                  return s
                    ? rm(
                        e,
                        (t = s - (t = r || t === i ? 1 : n4(t))) < 0 ? 0 : t,
                        s
                      )
                    : [];
                }),
                (iy.takeRightWhile = function (e, t) {
                  return e && e.length ? rR(e, su(t, 3), !1, !0) : [];
                }),
                (iy.takeWhile = function (e, t) {
                  return e && e.length ? rR(e, su(t, 3)) : [];
                }),
                (iy.tap = function (e, t) {
                  return t(e), e;
                }),
                (iy.throttle = function (e, t, i) {
                  var s = !0,
                    n = !0;
                  if ("function" != typeof e) throw new eC(r);
                  return (
                    nF(i) &&
                      ((s = "leading" in i ? !!i.leading : s),
                      (n = "trailing" in i ? !!i.trailing : n)),
                    nE(e, t, { leading: s, maxWait: t, trailing: n })
                  );
                }),
                (iy.thru = ns),
                (iy.toArray = n3),
                (iy.toPairs = aw),
                (iy.toPairsIn = a_),
                (iy.toPath = function (e) {
                  return nk(e) ? tp(e, sj) : nX(e) ? [e] : rH(s$(n7(e)));
                }),
                (iy.toPlainObject = n9),
                (iy.transform = function (e, t, i) {
                  var r = nk(e),
                    s = r || nL(e) || n0(e);
                  if (((t = su(t, 4)), null == i)) {
                    var n = e && e.constructor;
                    i = s
                      ? r
                        ? new n()
                        : []
                      : nF(e) && nH(n)
                      ? im(eB(e))
                      : {};
                  }
                  return (
                    (s ? to : iG)(e, function (e, r, s) {
                      return t(i, e, r, s);
                    }),
                    i
                  );
                }),
                (iy.unary = function (e) {
                  return nv(e, 1);
                }),
                (iy.union = s2),
                (iy.unionBy = s3),
                (iy.unionWith = s8),
                (iy.uniq = function (e) {
                  return e && e.length ? rP(e) : [];
                }),
                (iy.uniqBy = function (e, t) {
                  return e && e.length ? rP(e, su(t, 2)) : [];
                }),
                (iy.uniqWith = function (e, t) {
                  return (
                    (t = "function" == typeof t ? t : i),
                    e && e.length ? rP(e, i, t) : []
                  );
                }),
                (iy.unset = function (e, t) {
                  return null == e || rS(e, t);
                }),
                (iy.unzip = s4),
                (iy.unzipWith = s5),
                (iy.update = function (e, t, i) {
                  return null == e ? e : rC(e, t, rq(i));
                }),
                (iy.updateWith = function (e, t, r, s) {
                  return (
                    (s = "function" == typeof s ? s : i),
                    null == e ? e : rC(e, t, rq(r), s)
                  );
                }),
                (iy.values = ab),
                (iy.valuesIn = function (e) {
                  return null == e ? [] : tA(e, ad(e));
                }),
                (iy.without = s6),
                (iy.words = aq),
                (iy.wrap = function (e, t) {
                  return nT(rq(t), e);
                }),
                (iy.xor = s9),
                (iy.xorBy = s7),
                (iy.xorWith = ne),
                (iy.zip = nt),
                (iy.zipObject = function (e, t) {
                  return rO(e || [], t || [], ix);
                }),
                (iy.zipObjectDeep = function (e, t) {
                  return rO(e || [], t || [], rg);
                }),
                (iy.zipWith = ni),
                (iy.entries = aw),
                (iy.entriesIn = a_),
                (iy.extend = at),
                (iy.extendWith = ai),
                aH(iy, iy),
                (iy.add = aZ),
                (iy.attempt = aD),
                (iy.camelCase = aE),
                (iy.capitalize = aI),
                (iy.ceil = aX),
                (iy.clamp = function (e, t, r) {
                  return (
                    r === i && ((r = t), (t = i)),
                    r !== i && (r = (r = n6(r)) == r ? r : 0),
                    t !== i && (t = (t = n6(t)) == t ? t : 0),
                    ik(n6(e), t, r)
                  );
                }),
                (iy.clone = function (e) {
                  return iM(e, 4);
                }),
                (iy.cloneDeep = function (e) {
                  return iM(e, 5);
                }),
                (iy.cloneDeepWith = function (e, t) {
                  return iM(e, 5, (t = "function" == typeof t ? t : i));
                }),
                (iy.cloneWith = function (e, t) {
                  return iM(e, 4, (t = "function" == typeof t ? t : i));
                }),
                (iy.conformsTo = function (e, t) {
                  return null == t || i$(e, t, ap(t));
                }),
                (iy.deburr = aP),
                (iy.defaultTo = function (e, t) {
                  return null == e || e != e ? t : e;
                }),
                (iy.divide = a0),
                (iy.endsWith = function (e, t, r) {
                  (e = n7(e)), (t = rI(t));
                  var s = e.length,
                    n = (r = r === i ? s : ik(n4(r), 0, s));
                  return (r -= t.length) >= 0 && e.slice(r, n) == t;
                }),
                (iy.eq = nA),
                (iy.escape = function (e) {
                  return (e = n7(e)) && H.test(e) ? e.replace(U, tM) : e;
                }),
                (iy.escapeRegExp = function (e) {
                  return (e = n7(e)) && Q.test(e) ? e.replace(W, "\\$&") : e;
                }),
                (iy.every = function (e, t, r) {
                  var s = nk(e) ? tc : iH;
                  return r && sE(e, t, r) && (t = i), s(e, su(t, 3));
                }),
                (iy.find = no),
                (iy.findIndex = sV),
                (iy.findKey = function (e, t) {
                  return tv(e, su(t, 3), iG);
                }),
                (iy.findLast = nc),
                (iy.findLastIndex = sF),
                (iy.findLastKey = function (e, t) {
                  return tv(e, su(t, 3), iW);
                }),
                (iy.floor = a1),
                (iy.forEach = nh),
                (iy.forEachRight = nl),
                (iy.forIn = function (e, t) {
                  return null == e ? e : iB(e, su(t, 3), ad);
                }),
                (iy.forInRight = function (e, t) {
                  return null == e ? e : iJ(e, su(t, 3), ad);
                }),
                (iy.forOwn = function (e, t) {
                  return e && iG(e, su(t, 3));
                }),
                (iy.forOwnRight = function (e, t) {
                  return e && iW(e, su(t, 3));
                }),
                (iy.get = ao),
                (iy.gt = nq),
                (iy.gte = nD),
                (iy.has = function (e, t) {
                  return null != e && sv(e, t, i1);
                }),
                (iy.hasIn = ac),
                (iy.head = sJ),
                (iy.identity = aj),
                (iy.includes = function (e, t, i, r) {
                  (e = n$(e) ? e : ab(e)), (i = i && !r ? n4(i) : 0);
                  var s = e.length;
                  return (
                    i < 0 && (i = t2(s + i, 0)),
                    nZ(e)
                      ? i <= s && e.indexOf(t, i) > -1
                      : !!s && t_(e, t, i) > -1
                  );
                }),
                (iy.indexOf = function (e, t, i) {
                  var r = null == e ? 0 : e.length;
                  if (!r) return -1;
                  var s = null == i ? 0 : n4(i);
                  return s < 0 && (s = t2(r + s, 0)), t_(e, t, s);
                }),
                (iy.inRange = function (e, t, r) {
                  var s, n, a;
                  return (
                    (t = n8(t)),
                    r === i ? ((r = t), (t = 0)) : (r = n8(r)),
                    (s = e = n6(e)) >= t3((n = t), (a = r)) && s < t2(n, a)
                  );
                }),
                (iy.invoke = au),
                (iy.isArguments = nN),
                (iy.isArray = nk),
                (iy.isArrayBuffer = nM),
                (iy.isArrayLike = n$),
                (iy.isArrayLikeObject = nj),
                (iy.isBoolean = function (e) {
                  return !0 === e || !1 === e || (nB(e) && iX(e) == u);
                }),
                (iy.isBuffer = nL),
                (iy.isDate = nU),
                (iy.isElement = function (e) {
                  return nB(e) && 1 === e.nodeType && !nW(e);
                }),
                (iy.isEmpty = function (e) {
                  if (null == e) return !0;
                  if (
                    n$(e) &&
                    (nk(e) ||
                      "string" == typeof e ||
                      "function" == typeof e.splice ||
                      nL(e) ||
                      n0(e) ||
                      nN(e))
                  )
                    return !e.length;
                  var t = sm(e);
                  if (t == y || t == b) return !e.size;
                  if (sC(e)) return !re(e).length;
                  for (var i in e) if (eq.call(e, i)) return !1;
                  return !0;
                }),
                (iy.isEqual = function (e, t) {
                  return i5(e, t);
                }),
                (iy.isEqualWith = function (e, t, r) {
                  var s = (r = "function" == typeof r ? r : i) ? r(e, t) : i;
                  return s === i ? i5(e, t, i, r) : !!s;
                }),
                (iy.isError = nz),
                (iy.isFinite = function (e) {
                  return "number" == typeof e && tX(e);
                }),
                (iy.isFunction = nH),
                (iy.isInteger = nK),
                (iy.isLength = nV),
                (iy.isMap = nJ),
                (iy.isMatch = function (e, t) {
                  return e === t || i6(e, t, sd(t));
                }),
                (iy.isMatchWith = function (e, t, r) {
                  return (
                    (r = "function" == typeof r ? r : i), i6(e, t, sd(t), r)
                  );
                }),
                (iy.isNaN = function (e) {
                  return nG(e) && e != +e;
                }),
                (iy.isNative = function (e) {
                  if (sS(e))
                    throw new e_(
                      "Unsupported core-js use. Try https://npms.io/search?q=ponyfill."
                    );
                  return i9(e);
                }),
                (iy.isNil = function (e) {
                  return null == e;
                }),
                (iy.isNull = function (e) {
                  return null === e;
                }),
                (iy.isNumber = nG),
                (iy.isObject = nF),
                (iy.isObjectLike = nB),
                (iy.isPlainObject = nW),
                (iy.isRegExp = nQ),
                (iy.isSafeInteger = function (e) {
                  return (
                    nK(e) && e >= -9007199254740991 && e <= 9007199254740991
                  );
                }),
                (iy.isSet = nY),
                (iy.isString = nZ),
                (iy.isSymbol = nX),
                (iy.isTypedArray = n0),
                (iy.isUndefined = function (e) {
                  return e === i;
                }),
                (iy.isWeakMap = function (e) {
                  return nB(e) && sm(e) == P;
                }),
                (iy.isWeakSet = function (e) {
                  return nB(e) && "[object WeakSet]" == iX(e);
                }),
                (iy.join = function (e, t) {
                  return null == e ? "" : t0.call(e, t);
                }),
                (iy.kebabCase = aS),
                (iy.last = sY),
                (iy.lastIndexOf = function (e, t, r) {
                  var s = null == e ? 0 : e.length;
                  if (!s) return -1;
                  var n = s;
                  return (
                    r !== i &&
                      (n = (n = n4(r)) < 0 ? t2(s + n, 0) : t3(n, s - 1)),
                    t == t
                      ? (function (e, t, i) {
                          for (var r = i + 1; r-- && e[r] !== t; );
                          return r;
                        })(e, t, n)
                      : tw(e, tE, n, !0)
                  );
                }),
                (iy.lowerCase = aC),
                (iy.lowerFirst = aR),
                (iy.lt = n1),
                (iy.lte = n2),
                (iy.max = function (e) {
                  return e && e.length ? iK(e, aj, i0) : i;
                }),
                (iy.maxBy = function (e, t) {
                  return e && e.length ? iK(e, su(t, 2), i0) : i;
                }),
                (iy.mean = function (e) {
                  return tI(e, aj);
                }),
                (iy.meanBy = function (e, t) {
                  return tI(e, su(t, 2));
                }),
                (iy.min = function (e) {
                  return e && e.length ? iK(e, aj, rt) : i;
                }),
                (iy.minBy = function (e, t) {
                  return e && e.length ? iK(e, su(t, 2), rt) : i;
                }),
                (iy.stubArray = aQ),
                (iy.stubFalse = aY),
                (iy.stubObject = function () {
                  return {};
                }),
                (iy.stubString = function () {
                  return "";
                }),
                (iy.stubTrue = function () {
                  return !0;
                }),
                (iy.multiply = a2),
                (iy.nth = function (e, t) {
                  return e && e.length ? ra(e, n4(t)) : i;
                }),
                (iy.noConflict = function () {
                  return e3._ === this && (e3._ = e$), this;
                }),
                (iy.noop = aK),
                (iy.now = nm),
                (iy.pad = function (e, t, i) {
                  e = n7(e);
                  var r = (t = n4(t)) ? tK(e) : 0;
                  if (!t || r >= t) return e;
                  var s = (t - r) / 2;
                  return r3(tQ(s), i) + e + r3(tW(s), i);
                }),
                (iy.padEnd = function (e, t, i) {
                  e = n7(e);
                  var r = (t = n4(t)) ? tK(e) : 0;
                  return t && r < t ? e + r3(t - r, i) : e;
                }),
                (iy.padStart = function (e, t, i) {
                  e = n7(e);
                  var r = (t = n4(t)) ? tK(e) : 0;
                  return t && r < t ? r3(t - r, i) + e : e;
                }),
                (iy.parseInt = function (e, t, i) {
                  return (
                    i || null == t ? (t = 0) : t && (t = +t),
                    t4(n7(e).replace(Y, ""), t || 0)
                  );
                }),
                (iy.random = function (e, t, r) {
                  if (
                    (r && "boolean" != typeof r && sE(e, t, r) && (t = r = i),
                    r === i &&
                      ("boolean" == typeof t
                        ? ((r = t), (t = i))
                        : "boolean" == typeof e && ((r = e), (e = i))),
                    e === i && t === i
                      ? ((e = 0), (t = 1))
                      : ((e = n8(e)),
                        t === i ? ((t = e), (e = 0)) : (t = n8(t))),
                    e > t)
                  ) {
                    var s = e;
                    (e = t), (t = s);
                  }
                  if (r || e % 1 || t % 1) {
                    var n = t5();
                    return t3(
                      e + n * (t - e + eX("1e-" + ((n + "").length - 1))),
                      t
                    );
                  }
                  return ru(e, t);
                }),
                (iy.reduce = function (e, t, i) {
                  var r = nk(e) ? tg : tC,
                    s = arguments.length < 3;
                  return r(e, su(t, 4), i, s, iU);
                }),
                (iy.reduceRight = function (e, t, i) {
                  var r = nk(e) ? tf : tC,
                    s = arguments.length < 3;
                  return r(e, su(t, 4), i, s, iz);
                }),
                (iy.repeat = function (e, t, r) {
                  return (
                    (t = (r ? sE(e, t, r) : t === i) ? 1 : n4(t)), rp(n7(e), t)
                  );
                }),
                (iy.replace = function () {
                  var e = arguments,
                    t = n7(e[0]);
                  return e.length < 3 ? t : t.replace(e[1], e[2]);
                }),
                (iy.result = function (e, t, r) {
                  t = rD(t, e);
                  var s = -1,
                    n = t.length;
                  for (n || ((n = 1), (e = i)); ++s < n; ) {
                    var a = null == e ? i : e[sj(t[s])];
                    a === i && ((s = n), (a = r)), (e = nH(a) ? a.call(e) : a);
                  }
                  return e;
                }),
                (iy.round = a3),
                (iy.runInContext = e),
                (iy.sample = function (e) {
                  return (
                    nk(e)
                      ? iR
                      : function (e) {
                          return iR(ab(e));
                        }
                  )(e);
                }),
                (iy.size = function (e) {
                  if (null == e) return 0;
                  if (n$(e)) return nZ(e) ? tK(e) : e.length;
                  var t = sm(e);
                  return t == y || t == b ? e.size : re(e).length;
                }),
                (iy.snakeCase = aT),
                (iy.some = function (e, t, r) {
                  var s = nk(e) ? ty : rv;
                  return r && sE(e, t, r) && (t = i), s(e, su(t, 3));
                }),
                (iy.sortedIndex = function (e, t) {
                  return rw(e, t);
                }),
                (iy.sortedIndexBy = function (e, t, i) {
                  return r_(e, t, su(i, 2));
                }),
                (iy.sortedIndexOf = function (e, t) {
                  var i = null == e ? 0 : e.length;
                  if (i) {
                    var r = rw(e, t);
                    if (r < i && nA(e[r], t)) return r;
                  }
                  return -1;
                }),
                (iy.sortedLastIndex = function (e, t) {
                  return rw(e, t, !0);
                }),
                (iy.sortedLastIndexBy = function (e, t, i) {
                  return r_(e, t, su(i, 2), !0);
                }),
                (iy.sortedLastIndexOf = function (e, t) {
                  if (null == e ? 0 : e.length) {
                    var i = rw(e, t, !0) - 1;
                    if (nA(e[i], t)) return i;
                  }
                  return -1;
                }),
                (iy.startCase = ax),
                (iy.startsWith = function (e, t, i) {
                  return (
                    (e = n7(e)),
                    (i = null == i ? 0 : ik(n4(i), 0, e.length)),
                    (t = rI(t)),
                    e.slice(i, i + t.length) == t
                  );
                }),
                (iy.subtract = a8),
                (iy.sum = function (e) {
                  return e && e.length ? tR(e, aj) : 0;
                }),
                (iy.sumBy = function (e, t) {
                  return e && e.length ? tR(e, su(t, 2)) : 0;
                }),
                (iy.template = function (e, t, r) {
                  var s = iy.templateSettings;
                  r && sE(e, t, r) && (t = i),
                    (e = n7(e)),
                    (t = ai({}, t, s, st));
                  var n,
                    a,
                    o = ai({}, t.imports, s.imports, st),
                    c = ap(o),
                    h = tA(o, c),
                    l = 0,
                    u = t.interpolate || ed,
                    p = "__p += '",
                    d = eP(
                      (t.escape || ed).source +
                        "|" +
                        u.source +
                        "|" +
                        (u === F ? en : ed).source +
                        "|" +
                        (t.evaluate || ed).source +
                        "|$",
                      "g"
                    ),
                    g =
                      "//# sourceURL=" +
                      (eq.call(t, "sourceURL")
                        ? (t.sourceURL + "").replace(/\s/g, " ")
                        : "lodash.templateSources[" + ++eW + "]") +
                      `
`;
                  e.replace(d, function (t, i, r, s, o, c) {
                    return (
                      r || (r = s),
                      (p += e.slice(l, c).replace(eg, t$)),
                      i &&
                        ((n = !0),
                        (p +=
                          `' +
__e(` +
                          i +
                          `) +
'`)),
                      o &&
                        ((a = !0),
                        (p +=
                          `';
` +
                          o +
                          `;
__p += '`)),
                      r &&
                        (p +=
                          `' +
((__t = (` +
                          r +
                          `)) == null ? '' : __t) +
'`),
                      (l = c + t.length),
                      t
                    );
                  }),
                    (p += `';
`);
                  var f = eq.call(t, "variable") && t.variable;
                  if (f) {
                    if (er.test(f))
                      throw new e_(
                        "Invalid `variable` option passed into `_.template`"
                      );
                  } else
                    p =
                      `with (obj) {
` +
                      p +
                      `
}
`;
                  (p = (a ? p.replace(M, "") : p)
                    .replace($, "$1")
                    .replace(j, "$1;")),
                    (p =
                      "function(" +
                      (f || "obj") +
                      `) {
` +
                      (f
                        ? ""
                        : `obj || (obj = {});
`) +
                      "var __t, __p = ''" +
                      (n ? ", __e = _.escape" : "") +
                      (a
                        ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                        : `;
`) +
                      p +
                      `return __p
}`);
                  var y = aD(function () {
                    return eb(c, g + "return " + p).apply(i, h);
                  });
                  if (((y.source = p), nz(y))) throw y;
                  return y;
                }),
                (iy.times = function (e, t) {
                  if ((e = n4(e)) < 1 || e > 9007199254740991) return [];
                  var i = 4294967295,
                    r = t3(e, 4294967295);
                  (t = su(t)), (e -= 4294967295);
                  for (var s = tT(r, t); ++i < e; ) t(i);
                  return s;
                }),
                (iy.toFinite = n8),
                (iy.toInteger = n4),
                (iy.toLength = n5),
                (iy.toLower = function (e) {
                  return n7(e).toLowerCase();
                }),
                (iy.toNumber = n6),
                (iy.toSafeInteger = function (e) {
                  return e
                    ? ik(n4(e), -9007199254740991, 9007199254740991)
                    : 0 === e
                    ? e
                    : 0;
                }),
                (iy.toString = n7),
                (iy.toUpper = function (e) {
                  return n7(e).toUpperCase();
                }),
                (iy.trim = function (e, t, r) {
                  if ((e = n7(e)) && (r || t === i)) return tx(e);
                  if (!e || !(t = rI(t))) return e;
                  var s = tV(e),
                    n = tV(t),
                    a = tD(s, n),
                    o = tN(s, n) + 1;
                  return rN(s, a, o).join("");
                }),
                (iy.trimEnd = function (e, t, r) {
                  if ((e = n7(e)) && (r || t === i))
                    return e.slice(0, tF(e) + 1);
                  if (!e || !(t = rI(t))) return e;
                  var s = tV(e),
                    n = tN(s, tV(t)) + 1;
                  return rN(s, 0, n).join("");
                }),
                (iy.trimStart = function (e, t, r) {
                  if ((e = n7(e)) && (r || t === i)) return e.replace(Y, "");
                  if (!e || !(t = rI(t))) return e;
                  var s = tV(e),
                    n = tD(s, tV(t));
                  return rN(s, n).join("");
                }),
                (iy.truncate = function (e, t) {
                  var r = 30,
                    s = "...";
                  if (nF(t)) {
                    var n = "separator" in t ? t.separator : n;
                    (r = "length" in t ? n4(t.length) : r),
                      (s = "omission" in t ? rI(t.omission) : s);
                  }
                  var a = (e = n7(e)).length;
                  if (tj(e)) {
                    var o = tV(e);
                    a = o.length;
                  }
                  if (r >= a) return e;
                  var c = r - tK(s);
                  if (c < 1) return s;
                  var h = o ? rN(o, 0, c).join("") : e.slice(0, c);
                  if (n === i) return h + s;
                  if ((o && (c += h.length - c), nQ(n))) {
                    if (e.slice(c).search(n)) {
                      var l,
                        u = h;
                      for (
                        n.global || (n = eP(n.source, n7(ea.exec(n)) + "g")),
                          n.lastIndex = 0;
                        (l = n.exec(u));

                      )
                        var p = l.index;
                      h = h.slice(0, p === i ? c : p);
                    }
                  } else if (e.indexOf(rI(n), c) != c) {
                    var d = h.lastIndexOf(n);
                    d > -1 && (h = h.slice(0, d));
                  }
                  return h + s;
                }),
                (iy.unescape = function (e) {
                  return (e = n7(e)) && z.test(e) ? e.replace(L, tB) : e;
                }),
                (iy.uniqueId = function (e) {
                  var t = ++eD;
                  return n7(e) + t;
                }),
                (iy.upperCase = aO),
                (iy.upperFirst = aA),
                (iy.each = nh),
                (iy.eachRight = nl),
                (iy.first = sJ),
                aH(
                  iy,
                  ((em = {}),
                  iG(iy, function (e, t) {
                    eq.call(iy.prototype, t) || (em[t] = e);
                  }),
                  em),
                  { chain: !1 }
                ),
                (iy.VERSION = "4.17.21"),
                to(
                  [
                    "bind",
                    "bindKey",
                    "curry",
                    "curryRight",
                    "partial",
                    "partialRight",
                  ],
                  function (e) {
                    iy[e].placeholder = iy;
                  }
                ),
                to(["drop", "take"], function (e, t) {
                  (i_.prototype[e] = function (r) {
                    r = r === i ? 1 : t2(n4(r), 0);
                    var s =
                      this.__filtered__ && !t ? new i_(this) : this.clone();
                    return (
                      s.__filtered__
                        ? (s.__takeCount__ = t3(r, s.__takeCount__))
                        : s.__views__.push({
                            size: t3(r, 4294967295),
                            type: e + (s.__dir__ < 0 ? "Right" : ""),
                          }),
                      s
                    );
                  }),
                    (i_.prototype[e + "Right"] = function (t) {
                      return this.reverse()[e](t).reverse();
                    });
                }),
                to(["filter", "map", "takeWhile"], function (e, t) {
                  var i = t + 1,
                    r = 1 == i || 3 == i;
                  i_.prototype[e] = function (e) {
                    var t = this.clone();
                    return (
                      t.__iteratees__.push({ iteratee: su(e, 3), type: i }),
                      (t.__filtered__ = t.__filtered__ || r),
                      t
                    );
                  };
                }),
                to(["head", "last"], function (e, t) {
                  var i = "take" + (t ? "Right" : "");
                  i_.prototype[e] = function () {
                    return this[i](1).value()[0];
                  };
                }),
                to(["initial", "tail"], function (e, t) {
                  var i = "drop" + (t ? "" : "Right");
                  i_.prototype[e] = function () {
                    return this.__filtered__ ? new i_(this) : this[i](1);
                  };
                }),
                (i_.prototype.compact = function () {
                  return this.filter(aj);
                }),
                (i_.prototype.find = function (e) {
                  return this.filter(e).head();
                }),
                (i_.prototype.findLast = function (e) {
                  return this.reverse().find(e);
                }),
                (i_.prototype.invokeMap = rd(function (e, t) {
                  return "function" == typeof e
                    ? new i_(this)
                    : this.map(function (i) {
                        return i8(i, e, t);
                      });
                })),
                (i_.prototype.reject = function (e) {
                  return this.filter(nC(su(e)));
                }),
                (i_.prototype.slice = function (e, t) {
                  e = n4(e);
                  var r = this;
                  return r.__filtered__ && (e > 0 || t < 0)
                    ? new i_(r)
                    : (e < 0 ? (r = r.takeRight(-e)) : e && (r = r.drop(e)),
                      t !== i &&
                        (r = (t = n4(t)) < 0 ? r.dropRight(-t) : r.take(t - e)),
                      r);
                }),
                (i_.prototype.takeRightWhile = function (e) {
                  return this.reverse().takeWhile(e).reverse();
                }),
                (i_.prototype.toArray = function () {
                  return this.take(4294967295);
                }),
                iG(i_.prototype, function (e, t) {
                  var r = /^(?:filter|find|map|reject)|While$/.test(t),
                    s = /^(?:head|last)$/.test(t),
                    n = iy[s ? "take" + ("last" == t ? "Right" : "") : t],
                    a = s || /^find/.test(t);
                  n &&
                    (iy.prototype[t] = function () {
                      var t = this.__wrapped__,
                        o = s ? [1] : arguments,
                        c = t instanceof i_,
                        h = o[0],
                        l = c || nk(t),
                        u = function (e) {
                          var t = n.apply(iy, td([e], o));
                          return s && p ? t[0] : t;
                        };
                      l &&
                        r &&
                        "function" == typeof h &&
                        1 != h.length &&
                        (c = l = !1);
                      var p = this.__chain__,
                        d = !!this.__actions__.length,
                        g = a && !p,
                        f = c && !d;
                      if (!a && l) {
                        t = f ? t : new i_(this);
                        var y = e.apply(t, o);
                        return (
                          y.__actions__.push({
                            func: ns,
                            args: [u],
                            thisArg: i,
                          }),
                          new iw(y, p)
                        );
                      }
                      return g && f
                        ? e.apply(this, o)
                        : ((y = this.thru(u)),
                          g ? (s ? y.value()[0] : y.value()) : y);
                    });
                }),
                to(
                  ["pop", "push", "shift", "sort", "splice", "unshift"],
                  function (e) {
                    var t = eR[e],
                      i = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                      r = /^(?:pop|shift)$/.test(e);
                    iy.prototype[e] = function () {
                      var e = arguments;
                      if (r && !this.__chain__) {
                        var s = this.value();
                        return t.apply(nk(s) ? s : [], e);
                      }
                      return this[i](function (i) {
                        return t.apply(nk(i) ? i : [], e);
                      });
                    };
                  }
                ),
                iG(i_.prototype, function (e, t) {
                  var i = iy[t];
                  if (i) {
                    var r = i.name + "";
                    eq.call(ia, r) || (ia[r] = []),
                      ia[r].push({ name: t, func: i });
                  }
                }),
                (ia[rX(i, 2).name] = [{ name: "wrapper", func: i }]),
                (i_.prototype.clone = function () {
                  var e = new i_(this.__wrapped__);
                  return (
                    (e.__actions__ = rH(this.__actions__)),
                    (e.__dir__ = this.__dir__),
                    (e.__filtered__ = this.__filtered__),
                    (e.__iteratees__ = rH(this.__iteratees__)),
                    (e.__takeCount__ = this.__takeCount__),
                    (e.__views__ = rH(this.__views__)),
                    e
                  );
                }),
                (i_.prototype.reverse = function () {
                  if (this.__filtered__) {
                    var e = new i_(this);
                    (e.__dir__ = -1), (e.__filtered__ = !0);
                  } else (e = this.clone()), (e.__dir__ *= -1);
                  return e;
                }),
                (i_.prototype.value = function () {
                  var e = this.__wrapped__.value(),
                    t = this.__dir__,
                    i = nk(e),
                    r = t < 0,
                    s = i ? e.length : 0,
                    n = (function (e, t, i) {
                      for (var r = -1, s = i.length; ++r < s; ) {
                        var n = i[r],
                          a = n.size;
                        switch (n.type) {
                          case "drop":
                            e += a;
                            break;
                          case "dropRight":
                            t -= a;
                            break;
                          case "take":
                            t = t3(t, e + a);
                            break;
                          case "takeRight":
                            e = t2(e, t - a);
                        }
                      }
                      return { start: e, end: t };
                    })(0, s, this.__views__),
                    a = n.start,
                    o = n.end,
                    c = o - a,
                    h = r ? o : a - 1,
                    l = this.__iteratees__,
                    u = l.length,
                    p = 0,
                    d = t3(c, this.__takeCount__);
                  if (!i || (!r && s == c && d == c))
                    return rT(e, this.__actions__);
                  var g = [];
                  e: for (; c-- && p < d; ) {
                    h += t;
                    for (var f = -1, y = e[h]; ++f < u; ) {
                      var m = l[f],
                        v = m.iteratee,
                        w = m.type,
                        _ = v(y);
                      if (2 == w) y = _;
                      else if (!_) {
                        if (1 == w) continue e;
                        break e;
                      }
                    }
                    g[p++] = y;
                  }
                  return g;
                }),
                (iy.prototype.at = nn),
                (iy.prototype.chain = function () {
                  return nr(this);
                }),
                (iy.prototype.commit = function () {
                  return new iw(this.value(), this.__chain__);
                }),
                (iy.prototype.next = function () {
                  this.__values__ === i && (this.__values__ = n3(this.value()));
                  var e = this.__index__ >= this.__values__.length,
                    t = e ? i : this.__values__[this.__index__++];
                  return { done: e, value: t };
                }),
                (iy.prototype.plant = function (e) {
                  for (var t, r = this; r instanceof iv; ) {
                    var s = sU(r);
                    (s.__index__ = 0),
                      (s.__values__ = i),
                      t ? (n.__wrapped__ = s) : (t = s);
                    var n = s;
                    r = r.__wrapped__;
                  }
                  return (n.__wrapped__ = e), t;
                }),
                (iy.prototype.reverse = function () {
                  var e = this.__wrapped__;
                  if (e instanceof i_) {
                    var t = e;
                    return (
                      this.__actions__.length && (t = new i_(this)),
                      (t = t.reverse()).__actions__.push({
                        func: ns,
                        args: [s1],
                        thisArg: i,
                      }),
                      new iw(t, this.__chain__)
                    );
                  }
                  return this.thru(s1);
                }),
                (iy.prototype.toJSON =
                  iy.prototype.valueOf =
                  iy.prototype.value =
                    function () {
                      return rT(this.__wrapped__, this.__actions__);
                    }),
                (iy.prototype.first = iy.prototype.head),
                e4 &&
                  (iy.prototype[e4] = function () {
                    return this;
                  }),
                iy
              );
            })();
          e4 ? (((e4.exports = tJ)._ = tJ), (e8._ = tJ)) : (e3._ = tJ);
        }.call(iA));
      })(iq, iq.exports);
      var iD = Object.defineProperty,
        iN = Object.defineProperties,
        ik = Object.getOwnPropertyDescriptors,
        iM = Object.getOwnPropertySymbols,
        i$ = Object.prototype.hasOwnProperty,
        ij = Object.prototype.propertyIsEnumerable,
        iL = (e, t, i) =>
          t in e
            ? iD(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        iU = (e, t) => {
          for (var i in t || (t = {})) i$.call(t, i) && iL(e, i, t[i]);
          if (iM) for (var i of iM(t)) ij.call(t, i) && iL(e, i, t[i]);
          return e;
        },
        iz = (e, t) => iN(e, ik(t));
      function iH(e, t, i) {
        var r;
        let s = (0, S.DQe)(e);
        return (
          (null == (r = t.rpcMap) ? void 0 : r[s.reference]) ||
          `https://rpc.walletconnect.com/v1/?chainId=${s.namespace}:${s.reference}&projectId=${i}`
        );
      }
      function iK(e) {
        return e.includes(":") ? e.split(":")[1] : e;
      }
      function iV(e) {
        return e.map((e) => `${e.split(":")[0]}:${e.split(":")[1]}`);
      }
      function iF(e = {}, t = {}) {
        let i = iB(e),
          r = iB(t);
        return iq.exports.merge(i, r);
      }
      function iB(e) {
        var t, i, r, s;
        let n = {};
        if (!(0, S.L5o)(e)) return n;
        for (let [a, o] of Object.entries(e)) {
          let e = (0, S.gpE)(a) ? [a] : o.chains,
            c = o.methods || [],
            h = o.events || [],
            l = o.rpcMap || {},
            u = (0, S.Maj)(a);
          n[u] = iz(iU(iU({}, n[u]), o), {
            chains: (0, S.eGA)(e, null == (t = n[u]) ? void 0 : t.chains),
            methods: (0, S.eGA)(c, null == (i = n[u]) ? void 0 : i.methods),
            events: (0, S.eGA)(h, null == (r = n[u]) ? void 0 : r.events),
            rpcMap: iU(iU({}, l), null == (s = n[u]) ? void 0 : s.rpcMap),
          });
        }
        return n;
      }
      function iJ(e) {
        return e.includes(":") ? e.split(":")[2] : e;
      }
      function iG(e) {
        let t = {};
        for (let [i, r] of Object.entries(e)) {
          let e = r.methods || [],
            s = r.events || [],
            n = r.accounts || [],
            a = (0, S.gpE)(i) ? [i] : r.chains ? r.chains : iV(r.accounts);
          t[i] = { chains: a, methods: e, events: s, accounts: n };
        }
        return t;
      }
      function iW(e) {
        return "number" == typeof e
          ? e
          : e.includes("0x")
          ? parseInt(e, 16)
          : isNaN(Number((e = e.includes(":") ? e.split(":")[1] : e)))
          ? e
          : Number(e);
      }
      let iQ = {},
        iY = (e) => iQ[e],
        iZ = (e, t) => {
          iQ[e] = t;
        };
      class iX {
        constructor(e) {
          (this.name = "polkadot"),
            (this.namespace = e.namespace),
            (this.events = iY("events")),
            (this.client = iY("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(iO.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return (
            (e &&
              e
                .filter((e) => e.split(":")[1] === this.chainId.toString())
                .map((e) => e.split(":")[2])) ||
            []
          );
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              let r = iK(t);
              e[r] = this.createHttpProvider(
                r,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || iH(e, this.namespace, this.client.core.projectId);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new T.r(new iC(i, iY("disableProviderPing")));
        }
      }
      var i0 = Object.defineProperty,
        i1 = Object.defineProperties,
        i2 = Object.getOwnPropertyDescriptors,
        i3 = Object.getOwnPropertySymbols,
        i8 = Object.prototype.hasOwnProperty,
        i4 = Object.prototype.propertyIsEnumerable,
        i5 = (e, t, i) =>
          t in e
            ? i0(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        i6 = (e, t) => {
          for (var i in t || (t = {})) i8.call(t, i) && i5(e, i, t[i]);
          if (i3) for (var i of i3(t)) i4.call(t, i) && i5(e, i, t[i]);
          return e;
        },
        i9 = (e, t) => i1(e, i2(t));
      class i7 {
        constructor(e) {
          (this.name = "eip155"),
            (this.namespace = e.namespace),
            (this.events = iY("events")),
            (this.client = iY("client")),
            (this.httpProviders = this.createHttpProviders()),
            (this.chainId = parseInt(this.getDefaultChain()));
        }
        async request(e) {
          switch (e.request.method) {
            case "eth_requestAccounts":
            case "eth_accounts":
              return this.getAccounts();
            case "wallet_switchEthereumChain":
              return await this.handleSwitchChain(e);
            case "eth_chainId":
              return parseInt(this.getDefaultChain());
            case "wallet_getCapabilities":
              return await this.getCapabilities(e);
          }
          return this.namespace.methods.includes(e.request.method)
            ? await this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(parseInt(e), t),
            (this.chainId = parseInt(e)),
            this.events.emit(iO.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId.toString();
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        createHttpProvider(e, t) {
          let i =
            t ||
            iH(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new T.r(new iC(i, iY("disableProviderPing")));
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              let r = parseInt(iK(t));
              e[r] = this.createHttpProvider(
                r,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        getHttpProvider() {
          let e = this.chainId,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        async handleSwitchChain(e) {
          var t, i;
          let r = e.request.params
              ? null == (t = e.request.params[0])
                ? void 0
                : t.chainId
              : "0x0",
            s = parseInt((r = r.startsWith("0x") ? r : `0x${r}`), 16);
          if (this.isChainApproved(s)) this.setDefaultChain(`${s}`);
          else if (
            this.namespace.methods.includes("wallet_switchEthereumChain")
          )
            await this.client.request({
              topic: e.topic,
              request: { method: e.request.method, params: [{ chainId: r }] },
              chainId: null == (i = this.namespace.chains) ? void 0 : i[0],
            }),
              this.setDefaultChain(`${s}`);
          else
            throw Error(
              `Failed to switch to chain 'eip155:${s}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`
            );
          return null;
        }
        isChainApproved(e) {
          return this.namespace.chains.includes(`${this.name}:${e}`);
        }
        async getCapabilities(e) {
          var t, i, r;
          let s =
            null == (i = null == (t = e.request) ? void 0 : t.params)
              ? void 0
              : i[0];
          if (!s)
            throw Error(
              "Missing address parameter in `wallet_getCapabilities` request"
            );
          let n = this.client.session.get(e.topic),
            a =
              (null == (r = n?.sessionProperties) ? void 0 : r.capabilities) ||
              {};
          if (null != a && a[s]) return a?.[s];
          let o = await this.client.request(e);
          try {
            await this.client.session.update(e.topic, {
              sessionProperties: i9(i6({}, n.sessionProperties || {}), {
                capabilities: i9(i6({}, a || {}), { [s]: o }),
              }),
            });
          } catch (e) {
            console.warn("Failed to update session with capabilities", e);
          }
          return o;
        }
      }
      class re {
        constructor(e) {
          (this.name = "solana"),
            (this.namespace = e.namespace),
            (this.events = iY("events")),
            (this.client = iY("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(iO.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              let r = iK(t);
              e[r] = this.createHttpProvider(
                r,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || iH(e, this.namespace, this.client.core.projectId);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new T.r(new iC(i, iY("disableProviderPing")));
        }
      }
      class rt {
        constructor(e) {
          (this.name = "cosmos"),
            (this.namespace = e.namespace),
            (this.events = iY("events")),
            (this.client = iY("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(
              iO.DEFAULT_CHAIN_CHANGED,
              `${this.name}:${this.chainId}`
            );
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              let r = iK(t);
              e[r] = this.createHttpProvider(
                r,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || iH(e, this.namespace, this.client.core.projectId);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new T.r(new iC(i, iY("disableProviderPing")));
        }
      }
      class ri {
        constructor(e) {
          (this.name = "algorand"),
            (this.namespace = e.namespace),
            (this.events = iY("events")),
            (this.client = iY("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (!this.httpProviders[e]) {
            let i =
              t ||
              iH(
                `${this.name}:${e}`,
                this.namespace,
                this.client.core.projectId
              );
            if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, i);
          }
          (this.chainId = e),
            this.events.emit(
              iO.DEFAULT_CHAIN_CHANGED,
              `${this.name}:${this.chainId}`
            );
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              e[t] = this.createHttpProvider(
                t,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || iH(e, this.namespace, this.client.core.projectId);
          return typeof i > "u"
            ? void 0
            : new T.r(new iC(i, iY("disableProviderPing")));
        }
      }
      class rr {
        constructor(e) {
          (this.name = "cip34"),
            (this.namespace = e.namespace),
            (this.events = iY("events")),
            (this.client = iY("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(
              iO.DEFAULT_CHAIN_CHANGED,
              `${this.name}:${this.chainId}`
            );
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              let i = this.getCardanoRPCUrl(t),
                r = iK(t);
              e[r] = this.createHttpProvider(r, i);
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        getCardanoRPCUrl(e) {
          let t = this.namespace.rpcMap;
          if (t) return t[e];
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || this.getCardanoRPCUrl(e);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new T.r(new iC(i, iY("disableProviderPing")));
        }
      }
      class rs {
        constructor(e) {
          (this.name = "elrond"),
            (this.namespace = e.namespace),
            (this.events = iY("events")),
            (this.client = iY("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(iO.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              let r = iK(t);
              e[r] = this.createHttpProvider(
                r,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || iH(e, this.namespace, this.client.core.projectId);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new T.r(new iC(i, iY("disableProviderPing")));
        }
      }
      class rn {
        constructor(e) {
          (this.name = "multiversx"),
            (this.namespace = e.namespace),
            (this.events = iY("events")),
            (this.client = iY("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(iO.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              let r = iK(t);
              e[r] = this.createHttpProvider(
                r,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || iH(e, this.namespace, this.client.core.projectId);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new T.r(new iC(i, iY("disableProviderPing")));
        }
      }
      class ra {
        constructor(e) {
          (this.name = "near"),
            (this.namespace = e.namespace),
            (this.events = iY("events")),
            (this.client = iY("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (((this.chainId = e), !this.httpProviders[e])) {
            let i = t || iH(`${this.name}:${e}`, this.namespace);
            if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, i);
          }
          this.events.emit(
            iO.DEFAULT_CHAIN_CHANGED,
            `${this.name}:${this.chainId}`
          );
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return (
            (e &&
              e
                .filter((e) => e.split(":")[1] === this.chainId.toString())
                .map((e) => e.split(":")[2])) ||
            []
          );
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              e[t] = this.createHttpProvider(
                t,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || iH(e, this.namespace);
          return typeof i > "u"
            ? void 0
            : new T.r(new iC(i, iY("disableProviderPing")));
        }
      }
      class ro {
        constructor(e) {
          (this.name = ix),
            (this.namespace = e.namespace),
            (this.events = iY("events")),
            (this.client = iY("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          (this.namespace.chains = [
            ...new Set((this.namespace.chains || []).concat(e.chains || [])),
          ]),
            (this.namespace.accounts = [
              ...new Set(
                (this.namespace.accounts || []).concat(e.accounts || [])
              ),
            ]),
            (this.namespace.methods = [
              ...new Set(
                (this.namespace.methods || []).concat(e.methods || [])
              ),
            ]),
            (this.namespace.events = [
              ...new Set((this.namespace.events || []).concat(e.events || [])),
            ]),
            (this.httpProviders = this.createHttpProviders());
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider(e.chainId).request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(iO.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          var e, t;
          let i = {};
          return (
            null == (t = null == (e = this.namespace) ? void 0 : e.accounts) ||
              t.forEach((e) => {
                let t = (0, S.DQe)(e);
                i[`${t.namespace}:${t.reference}`] = this.createHttpProvider(e);
              }),
            i
          );
        }
        getHttpProvider(e) {
          let t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || iH(e, this.namespace, this.client.core.projectId);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new T.r(new iC(i, iY("disableProviderPing")));
        }
      }
      var rc = Object.defineProperty,
        rh = Object.defineProperties,
        rl = Object.getOwnPropertyDescriptors,
        ru = Object.getOwnPropertySymbols,
        rp = Object.prototype.hasOwnProperty,
        rd = Object.prototype.propertyIsEnumerable,
        rg = (e, t, i) =>
          t in e
            ? rc(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        rf = (e, t) => {
          for (var i in t || (t = {})) rp.call(t, i) && rg(e, i, t[i]);
          if (ru) for (var i of ru(t)) rd.call(t, i) && rg(e, i, t[i]);
          return e;
        },
        ry = (e, t) => rh(e, rl(t));
      class rm {
        constructor(e) {
          (this.events = new (s())()),
            (this.rpcProviders = {}),
            (this.shouldAbortPairingAttempt = !1),
            (this.maxPairingAttempts = 10),
            (this.disableProviderPing = !1),
            (this.providerOpts = e),
            (this.logger =
              "u" > typeof e?.logger && "string" != typeof e?.logger
                ? e.logger
                : (0, c.gw)((0, c.jI)({ level: e?.logger || iR }))),
            (this.disableProviderPing = e?.disableProviderPing || !1);
        }
        static async init(e) {
          let t = new rm(e);
          return await t.initialize(), t;
        }
        async request(e, t, i) {
          let [r, s] = this.validateChain(t);
          if (!this.session)
            throw Error("Please call connect() before request()");
          return await this.getProvider(r).request({
            request: rf({}, e),
            chainId: `${r}:${s}`,
            topic: this.session.topic,
            expiry: i,
          });
        }
        sendAsync(e, t, i, r) {
          let s = new Date().getTime();
          this.request(e, i, r)
            .then((e) => t(null, (0, x.formatJsonRpcResult)(s, e)))
            .catch((e) => t(e, void 0));
        }
        async enable() {
          if (!this.client) throw Error("Sign Client not initialized");
          return (
            this.session ||
              (await this.connect({
                namespaces: this.namespaces,
                optionalNamespaces: this.optionalNamespaces,
                sessionProperties: this.sessionProperties,
              })),
            await this.requestAccounts()
          );
        }
        async disconnect() {
          var e;
          if (!this.session)
            throw Error("Please call connect() before enable()");
          await this.client.disconnect({
            topic: null == (e = this.session) ? void 0 : e.topic,
            reason: (0, S.D6H)("USER_DISCONNECTED"),
          }),
            await this.cleanup();
        }
        async connect(e) {
          if (!this.client) throw Error("Sign Client not initialized");
          if (
            (this.setNamespaces(e),
            await this.cleanupPendingPairings(),
            !e.skipPairing)
          )
            return await this.pair(e.pairingTopic);
        }
        async authenticate(e, t) {
          if (!this.client) throw Error("Sign Client not initialized");
          this.setNamespaces(e), await this.cleanupPendingPairings();
          let { uri: i, response: r } = await this.client.authenticate(e, t);
          i && ((this.uri = i), this.events.emit("display_uri", i));
          let s = await r();
          if (((this.session = s.session), this.session)) {
            let e = iG(this.session.namespaces);
            (this.namespaces = iF(this.namespaces, e)),
              this.persist("namespaces", this.namespaces),
              this.onConnect();
          }
          return s;
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        get isWalletConnect() {
          return !0;
        }
        async pair(e) {
          this.shouldAbortPairingAttempt = !1;
          let t = 0;
          do {
            if (this.shouldAbortPairingAttempt) throw Error("Pairing aborted");
            if (t >= this.maxPairingAttempts)
              throw Error("Max auto pairing attempts reached");
            let { uri: i, approval: r } = await this.client.connect({
              pairingTopic: e,
              requiredNamespaces: this.namespaces,
              optionalNamespaces: this.optionalNamespaces,
              sessionProperties: this.sessionProperties,
            });
            i && ((this.uri = i), this.events.emit("display_uri", i)),
              await r()
                .then((e) => {
                  this.session = e;
                  let t = iG(e.namespaces);
                  (this.namespaces = iF(this.namespaces, t)),
                    this.persist("namespaces", this.namespaces);
                })
                .catch((e) => {
                  if (e.message !== tQ) throw e;
                  t++;
                });
          } while (!this.session);
          return this.onConnect(), this.session;
        }
        setDefaultChain(e, t) {
          try {
            if (!this.session) return;
            let [i, r] = this.validateChain(e),
              s = this.getProvider(i);
            s.name === ix
              ? s.setDefaultChain(`${i}:${r}`, t)
              : s.setDefaultChain(r, t);
          } catch (e) {
            if (!/Please call connect/.test(e.message)) throw e;
          }
        }
        async cleanupPendingPairings(e = {}) {
          this.logger.info("Cleaning up inactive pairings...");
          let t = this.client.pairing.getAll();
          if ((0, S.qt8)(t)) {
            for (let i of t)
              e.deletePairings
                ? this.client.core.expirer.set(i.topic, 0)
                : await this.client.core.relayer.subscriber.unsubscribe(
                    i.topic
                  );
            this.logger.info(`Inactive pairings cleared: ${t.length}`);
          }
        }
        abortPairingAttempt() {
          this.shouldAbortPairingAttempt = !0;
        }
        async checkStorage() {
          if (
            ((this.namespaces = await this.getFromStore("namespaces")),
            (this.optionalNamespaces =
              (await this.getFromStore("optionalNamespaces")) || {}),
            this.client.session.length)
          ) {
            let e = this.client.session.keys.length - 1;
            (this.session = this.client.session.get(
              this.client.session.keys[e]
            )),
              this.createProviders();
          }
        }
        async initialize() {
          this.logger.trace("Initialized"),
            await this.createClient(),
            await this.checkStorage(),
            this.registerEventListeners();
        }
        async createClient() {
          (this.client =
            this.providerOpts.client ||
            (await ip.init({
              core: this.providerOpts.core,
              logger: this.providerOpts.logger || iR,
              relayUrl:
                this.providerOpts.relayUrl || "wss://relay.walletconnect.com",
              projectId: this.providerOpts.projectId,
              metadata: this.providerOpts.metadata,
              storageOptions: this.providerOpts.storageOptions,
              storage: this.providerOpts.storage,
              name: this.providerOpts.name,
              customStoragePrefix: this.providerOpts.customStoragePrefix,
              telemetryEnabled: this.providerOpts.telemetryEnabled,
            }))),
            this.logger.trace("SignClient Initialized");
        }
        createProviders() {
          if (!this.client) throw Error("Sign Client not initialized");
          if (!this.session)
            throw Error(
              "Session not initialized. Please call connect() before enable()"
            );
          let e = [
            ...new Set(
              Object.keys(this.session.namespaces).map((e) => (0, S.Maj)(e))
            ),
          ];
          iZ("client", this.client),
            iZ("events", this.events),
            iZ("disableProviderPing", this.disableProviderPing),
            e.forEach((e) => {
              if (!this.session) return;
              let t = (function (e, t) {
                  let i = Object.keys(t.namespaces).filter((t) =>
                    t.includes(e)
                  );
                  if (!i.length) return [];
                  let r = [];
                  return (
                    i.forEach((e) => {
                      let i = t.namespaces[e].accounts;
                      r.push(...i);
                    }),
                    r
                  );
                })(e, this.session),
                i = iV(t),
                r = ry(
                  rf({}, iF(this.namespaces, this.optionalNamespaces)[e]),
                  { accounts: t, chains: i }
                );
              switch (e) {
                case "eip155":
                  this.rpcProviders[e] = new i7({ namespace: r });
                  break;
                case "algorand":
                  this.rpcProviders[e] = new ri({ namespace: r });
                  break;
                case "solana":
                  this.rpcProviders[e] = new re({ namespace: r });
                  break;
                case "cosmos":
                  this.rpcProviders[e] = new rt({ namespace: r });
                  break;
                case "polkadot":
                  this.rpcProviders[e] = new iX({ namespace: r });
                  break;
                case "cip34":
                  this.rpcProviders[e] = new rr({ namespace: r });
                  break;
                case "elrond":
                  this.rpcProviders[e] = new rs({ namespace: r });
                  break;
                case "multiversx":
                  this.rpcProviders[e] = new rn({ namespace: r });
                  break;
                case "near":
                  this.rpcProviders[e] = new ra({ namespace: r });
                  break;
                default:
                  this.rpcProviders[ix]
                    ? this.rpcProviders[ix].updateNamespace(r)
                    : (this.rpcProviders[ix] = new ro({ namespace: r }));
              }
            });
        }
        registerEventListeners() {
          if (typeof this.client > "u")
            throw Error("Sign Client is not initialized");
          this.client.on("session_ping", (e) => {
            this.events.emit("session_ping", e);
          }),
            this.client.on("session_event", (e) => {
              let { params: t } = e,
                { event: i } = t;
              if ("accountsChanged" === i.name) {
                let e = i.data;
                e &&
                  (0, S.qt8)(e) &&
                  this.events.emit("accountsChanged", e.map(iJ));
              } else if ("chainChanged" === i.name) {
                let e = t.chainId,
                  i = t.event.data,
                  r = (0, S.Maj)(e),
                  s = iW(e) !== iW(i) ? `${r}:${iW(i)}` : e;
                this.onChainChanged(s);
              } else this.events.emit(i.name, i.data);
              this.events.emit("session_event", e);
            }),
            this.client.on("session_update", ({ topic: e, params: t }) => {
              var i;
              let { namespaces: r } = t,
                s = null == (i = this.client) ? void 0 : i.session.get(e);
              (this.session = ry(rf({}, s), { namespaces: r })),
                this.onSessionUpdate(),
                this.events.emit("session_update", { topic: e, params: t });
            }),
            this.client.on("session_delete", async (e) => {
              await this.cleanup(),
                this.events.emit("session_delete", e),
                this.events.emit(
                  "disconnect",
                  ry(rf({}, (0, S.D6H)("USER_DISCONNECTED")), { data: e.topic })
                );
            }),
            this.on(iO.DEFAULT_CHAIN_CHANGED, (e) => {
              this.onChainChanged(e, !0);
            });
        }
        getProvider(e) {
          return this.rpcProviders[e] || this.rpcProviders[ix];
        }
        onSessionUpdate() {
          Object.keys(this.rpcProviders).forEach((e) => {
            var t;
            this.getProvider(e).updateNamespace(
              null == (t = this.session) ? void 0 : t.namespaces[e]
            );
          });
        }
        setNamespaces(e) {
          let {
            namespaces: t,
            optionalNamespaces: i,
            sessionProperties: r,
          } = e;
          t && Object.keys(t).length && (this.namespaces = t),
            i && Object.keys(i).length && (this.optionalNamespaces = i),
            (this.sessionProperties = r),
            this.persist("namespaces", t),
            this.persist("optionalNamespaces", i);
        }
        validateChain(e) {
          let [t, i] = e?.split(":") || ["", ""];
          if (!this.namespaces || !Object.keys(this.namespaces).length)
            return [t, i];
          if (
            t &&
            !Object.keys(this.namespaces || {})
              .map((e) => (0, S.Maj)(e))
              .includes(t)
          )
            throw Error(
              `Namespace '${t}' is not configured. Please call connect() first with namespace config.`
            );
          if (t && i) return [t, i];
          let r = (0, S.Maj)(Object.keys(this.namespaces)[0]),
            s = this.rpcProviders[r].getDefaultChain();
          return [r, s];
        }
        async requestAccounts() {
          let [e] = this.validateChain();
          return await this.getProvider(e).requestAccounts();
        }
        onChainChanged(e, t = !1) {
          if (!this.namespaces) return;
          let [i, r] = this.validateChain(e);
          r &&
            (t || this.getProvider(i).setDefaultChain(r),
            this.namespaces[i]
              ? (this.namespaces[i].defaultChain = r)
              : this.namespaces[`${i}:${r}`]
              ? (this.namespaces[`${i}:${r}`].defaultChain = r)
              : (this.namespaces[`${i}:${r}`] = { defaultChain: r }),
            this.persist("namespaces", this.namespaces),
            this.events.emit("chainChanged", r));
        }
        onConnect() {
          this.createProviders(),
            this.events.emit("connect", { session: this.session });
        }
        async cleanup() {
          (this.session = void 0),
            (this.namespaces = void 0),
            (this.optionalNamespaces = void 0),
            (this.sessionProperties = void 0),
            this.persist("namespaces", void 0),
            this.persist("optionalNamespaces", void 0),
            this.persist("sessionProperties", void 0),
            await this.cleanupPendingPairings({ deletePairings: !0 });
        }
        persist(e, t) {
          this.client.core.storage.setItem(`${iT}/${e}`, t);
        }
        async getFromStore(e) {
          return await this.client.core.storage.getItem(`${iT}/${e}`);
        }
      }
      let rv = ["eth_sendTransaction", "personal_sign"],
        rw = [
          "eth_accounts",
          "eth_requestAccounts",
          "eth_sendRawTransaction",
          "eth_sign",
          "eth_signTransaction",
          "eth_signTypedData",
          "eth_signTypedData_v3",
          "eth_signTypedData_v4",
          "eth_sendTransaction",
          "personal_sign",
          "wallet_switchEthereumChain",
          "wallet_addEthereumChain",
          "wallet_getPermissions",
          "wallet_requestPermissions",
          "wallet_registerOnboarding",
          "wallet_watchAsset",
          "wallet_scanQRCode",
          "wallet_sendCalls",
          "wallet_getCapabilities",
          "wallet_getCallsStatus",
          "wallet_showCallsStatus",
        ],
        r_ = ["chainChanged", "accountsChanged"],
        rb = [
          "chainChanged",
          "accountsChanged",
          "message",
          "disconnect",
          "connect",
        ];
      var rE = Object.defineProperty,
        rI = Object.defineProperties,
        rP = Object.getOwnPropertyDescriptors,
        rS = Object.getOwnPropertySymbols,
        rC = Object.prototype.hasOwnProperty,
        rR = Object.prototype.propertyIsEnumerable,
        rT = (e, t, i) =>
          t in e
            ? rE(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        rx = (e, t) => {
          for (var i in t || (t = {})) rC.call(t, i) && rT(e, i, t[i]);
          if (rS) for (var i of rS(t)) rR.call(t, i) && rT(e, i, t[i]);
          return e;
        },
        rO = (e, t) => rI(e, rP(t));
      function rA(e) {
        return Number(e[0].split(":")[1]);
      }
      function rq(e) {
        return `0x${e.toString(16)}`;
      }
      class rD {
        constructor() {
          (this.events = new r.EventEmitter()),
            (this.namespace = "eip155"),
            (this.accounts = []),
            (this.chainId = 1),
            (this.STORAGE_KEY = "wc@2:ethereum_provider:"),
            (this.on = (e, t) => (this.events.on(e, t), this)),
            (this.once = (e, t) => (this.events.once(e, t), this)),
            (this.removeListener = (e, t) => (
              this.events.removeListener(e, t), this
            )),
            (this.off = (e, t) => (this.events.off(e, t), this)),
            (this.parseAccount = (e) =>
              this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e),
            (this.signer = {}),
            (this.rpc = {});
        }
        static async init(e) {
          let t = new rD();
          return await t.initialize(e), t;
        }
        async request(e, t) {
          return await this.signer.request(
            e,
            this.formatChainId(this.chainId),
            t
          );
        }
        sendAsync(e, t, i) {
          this.signer.sendAsync(e, t, this.formatChainId(this.chainId), i);
        }
        get connected() {
          return (
            !!this.signer.client && this.signer.client.core.relayer.connected
          );
        }
        get connecting() {
          return (
            !!this.signer.client && this.signer.client.core.relayer.connecting
          );
        }
        async enable() {
          return (
            this.session || (await this.connect()),
            await this.request({ method: "eth_requestAccounts" })
          );
        }
        async connect(e) {
          if (!this.signer.client)
            throw Error("Provider not initialized. Call init() first");
          this.loadConnectOpts(e);
          let { required: t, optional: i } = (function (e) {
            let {
              chains: t,
              optionalChains: i,
              methods: r,
              optionalMethods: s,
              events: a,
              optionalEvents: o,
              rpcMap: c,
            } = e;
            if (!(0, n.qt8)(t)) throw Error("Invalid chains");
            let h = {
                chains: t,
                methods: r || rv,
                events: a || r_,
                rpcMap: rx({}, t.length ? { [rA(t)]: c[rA(t)] } : {}),
              },
              l = a?.filter((e) => !r_.includes(e)),
              u = r?.filter((e) => !rv.includes(e));
            if (
              !i &&
              !o &&
              !s &&
              !(null != l && l.length) &&
              !(null != u && u.length)
            )
              return { required: t.length ? h : void 0 };
            let p = (l?.length && u?.length) || !i,
              d = {
                chains: [...new Set(p ? h.chains.concat(i || []) : i)],
                methods: [
                  ...new Set(h.methods.concat(null != s && s.length ? s : rw)),
                ],
                events: [
                  ...new Set(h.events.concat(null != o && o.length ? o : rb)),
                ],
                rpcMap: c,
              };
            return {
              required: t.length ? h : void 0,
              optional: i.length ? d : void 0,
            };
          })(this.rpc);
          try {
            let r = await new Promise(async (r, s) => {
              var n;
              this.rpc.showQrModal &&
                (null == (n = this.modal) ||
                  n.subscribeModal((e) => {
                    e.open ||
                      this.signer.session ||
                      (this.signer.abortPairingAttempt(),
                      s(Error("Connection request reset. Please try again.")));
                  })),
                await this.signer
                  .connect(
                    rO(
                      rx(
                        { namespaces: rx({}, t && { [this.namespace]: t }) },
                        i && { optionalNamespaces: { [this.namespace]: i } }
                      ),
                      { pairingTopic: e?.pairingTopic }
                    )
                  )
                  .then((e) => {
                    r(e);
                  })
                  .catch((e) => {
                    s(Error(e.message));
                  });
            });
            if (!r) return;
            let s = (0, n.guN)(r.namespaces, [this.namespace]);
            this.setChainIds(this.rpc.chains.length ? this.rpc.chains : s),
              this.setAccounts(s),
              this.events.emit("connect", { chainId: rq(this.chainId) });
          } catch (e) {
            throw (this.signer.logger.error(e), e);
          } finally {
            this.modal && this.modal.closeModal();
          }
        }
        async authenticate(e, t) {
          if (!this.signer.client)
            throw Error("Provider not initialized. Call init() first");
          this.loadConnectOpts({ chains: e?.chains });
          try {
            let i = await new Promise(async (i, r) => {
                var s;
                this.rpc.showQrModal &&
                  (null == (s = this.modal) ||
                    s.subscribeModal((e) => {
                      e.open ||
                        this.signer.session ||
                        (this.signer.abortPairingAttempt(),
                        r(
                          Error("Connection request reset. Please try again.")
                        ));
                    })),
                  await this.signer
                    .authenticate(rO(rx({}, e), { chains: this.rpc.chains }), t)
                    .then((e) => {
                      i(e);
                    })
                    .catch((e) => {
                      r(Error(e.message));
                    });
              }),
              r = i.session;
            if (r) {
              let e = (0, n.guN)(r.namespaces, [this.namespace]);
              this.setChainIds(this.rpc.chains.length ? this.rpc.chains : e),
                this.setAccounts(e),
                this.events.emit("connect", { chainId: rq(this.chainId) });
            }
            return i;
          } catch (e) {
            throw (this.signer.logger.error(e), e);
          } finally {
            this.modal && this.modal.closeModal();
          }
        }
        async disconnect() {
          this.session && (await this.signer.disconnect()), this.reset();
        }
        get isWalletConnect() {
          return !0;
        }
        get session() {
          return this.signer.session;
        }
        registerEventListeners() {
          this.signer.on("session_event", (e) => {
            let { params: t } = e,
              { event: i } = t;
            "accountsChanged" === i.name
              ? ((this.accounts = this.parseAccounts(i.data)),
                this.events.emit("accountsChanged", this.accounts))
              : "chainChanged" === i.name
              ? this.setChainId(this.formatChainId(i.data))
              : this.events.emit(i.name, i.data),
              this.events.emit("session_event", e);
          }),
            this.signer.on("chainChanged", (e) => {
              let t = parseInt(e);
              (this.chainId = t),
                this.events.emit("chainChanged", rq(this.chainId)),
                this.persist();
            }),
            this.signer.on("session_update", (e) => {
              this.events.emit("session_update", e);
            }),
            this.signer.on("session_delete", (e) => {
              this.reset(),
                this.events.emit("session_delete", e),
                this.events.emit(
                  "disconnect",
                  rO(rx({}, (0, n.D6H)("USER_DISCONNECTED")), {
                    data: e.topic,
                    name: "USER_DISCONNECTED",
                  })
                );
            }),
            this.signer.on("display_uri", (e) => {
              var t, i;
              this.rpc.showQrModal &&
                (null == (t = this.modal) || t.closeModal(),
                null == (i = this.modal) || i.openModal({ uri: e })),
                this.events.emit("display_uri", e);
            });
        }
        switchEthereumChain(e) {
          this.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: e.toString(16) }],
          });
        }
        isCompatibleChainId(e) {
          return "string" == typeof e && e.startsWith(`${this.namespace}:`);
        }
        formatChainId(e) {
          return `${this.namespace}:${e}`;
        }
        parseChainId(e) {
          return Number(e.split(":")[1]);
        }
        setChainIds(e) {
          let t = e
            .filter((e) => this.isCompatibleChainId(e))
            .map((e) => this.parseChainId(e));
          t.length &&
            ((this.chainId = t[0]),
            this.events.emit("chainChanged", rq(this.chainId)),
            this.persist());
        }
        setChainId(e) {
          if (this.isCompatibleChainId(e)) {
            let t = this.parseChainId(e);
            (this.chainId = t), this.switchEthereumChain(t);
          }
        }
        parseAccountId(e) {
          let [t, i, r] = e.split(":");
          return { chainId: `${t}:${i}`, address: r };
        }
        setAccounts(e) {
          (this.accounts = e
            .filter(
              (e) =>
                this.parseChainId(this.parseAccountId(e).chainId) ===
                this.chainId
            )
            .map((e) => this.parseAccountId(e).address)),
            this.events.emit("accountsChanged", this.accounts);
        }
        getRpcConfig(e) {
          var t, i;
          let r = null != (t = e?.chains) ? t : [],
            s = null != (i = e?.optionalChains) ? i : [],
            n = r.concat(s);
          if (!n.length)
            throw Error(
              "No chains specified in either `chains` or `optionalChains`"
            );
          let a = r.length ? e?.methods || rv : [],
            o = r.length ? e?.events || r_ : [],
            c = e?.optionalMethods || [],
            h = e?.optionalEvents || [],
            l = e?.rpcMap || this.buildRpcMap(n, e.projectId),
            u = e?.qrModalOptions || void 0;
          return {
            chains: r?.map((e) => this.formatChainId(e)),
            optionalChains: s.map((e) => this.formatChainId(e)),
            methods: a,
            events: o,
            optionalMethods: c,
            optionalEvents: h,
            rpcMap: l,
            showQrModal: !!(null != e && e.showQrModal),
            qrModalOptions: u,
            projectId: e.projectId,
            metadata: e.metadata,
          };
        }
        buildRpcMap(e, t) {
          let i = {};
          return (
            e.forEach((e) => {
              i[e] = this.getRpcUrl(e, t);
            }),
            i
          );
        }
        async initialize(e) {
          if (
            ((this.rpc = this.getRpcConfig(e)),
            (this.chainId = this.rpc.chains.length
              ? rA(this.rpc.chains)
              : rA(this.rpc.optionalChains)),
            (this.signer = await rm.init({
              projectId: this.rpc.projectId,
              metadata: this.rpc.metadata,
              disableProviderPing: e.disableProviderPing,
              relayUrl: e.relayUrl,
              storageOptions: e.storageOptions,
              customStoragePrefix: e.customStoragePrefix,
              telemetryEnabled: e.telemetryEnabled,
            })),
            this.registerEventListeners(),
            await this.loadPersistedSession(),
            this.rpc.showQrModal)
          ) {
            let e;
            try {
              let { WalletConnectModal: t } = await i
                .e(59343)
                .then(i.bind(i, 59343));
              e = t;
            } catch {
              throw Error(
                "To use QR modal, please install @walletconnect/modal package"
              );
            }
            if (e)
              try {
                this.modal = new e(
                  rx({ projectId: this.rpc.projectId }, this.rpc.qrModalOptions)
                );
              } catch (e) {
                throw (
                  (this.signer.logger.error(e),
                  Error("Could not generate WalletConnectModal Instance"))
                );
              }
          }
        }
        loadConnectOpts(e) {
          if (!e) return;
          let { chains: t, optionalChains: i, rpcMap: r } = e;
          t &&
            (0, n.qt8)(t) &&
            ((this.rpc.chains = t.map((e) => this.formatChainId(e))),
            t.forEach((e) => {
              this.rpc.rpcMap[e] = r?.[e] || this.getRpcUrl(e);
            })),
            i &&
              (0, n.qt8)(i) &&
              ((this.rpc.optionalChains = []),
              (this.rpc.optionalChains = i?.map((e) => this.formatChainId(e))),
              i.forEach((e) => {
                this.rpc.rpcMap[e] = r?.[e] || this.getRpcUrl(e);
              }));
        }
        getRpcUrl(e, t) {
          var i;
          return (
            (null == (i = this.rpc.rpcMap) ? void 0 : i[e]) ||
            `https://rpc.walletconnect.com/v1/?chainId=eip155:${e}&projectId=${
              t || this.rpc.projectId
            }`
          );
        }
        async loadPersistedSession() {
          if (this.session)
            try {
              let e = await this.signer.client.core.storage.getItem(
                  `${this.STORAGE_KEY}/chainId`
                ),
                t = this.session.namespaces[`${this.namespace}:${e}`]
                  ? this.session.namespaces[`${this.namespace}:${e}`]
                  : this.session.namespaces[this.namespace];
              this.setChainIds(e ? [this.formatChainId(e)] : t?.accounts),
                this.setAccounts(t?.accounts);
            } catch (e) {
              this.signer.logger.error(
                "Failed to load persisted session, clearing state..."
              ),
                this.signer.logger.error(e),
                await this.disconnect().catch((e) =>
                  this.signer.logger.warn(e)
                );
            }
        }
        reset() {
          (this.chainId = 1), (this.accounts = []);
        }
        persist() {
          this.session &&
            this.signer.client.core.storage.setItem(
              `${this.STORAGE_KEY}/chainId`,
              this.chainId
            );
        }
        parseAccounts(e) {
          return "string" == typeof e || e instanceof String
            ? [this.parseAccount(e)]
            : e.map((e) => this.parseAccount(e));
        }
      }
      let rN = rD;
    },
    54098: function (e, t) {
      var i = "undefined" != typeof self ? self : this,
        r = (function () {
          function e() {
            (this.fetch = !1), (this.DOMException = i.DOMException);
          }
          return (e.prototype = i), new e();
        })();
      (function (e) {
        var t = {
          searchParams: "URLSearchParams" in r,
          iterable: "Symbol" in r && "iterator" in Symbol,
          blob:
            "FileReader" in r &&
            "Blob" in r &&
            (function () {
              try {
                return new Blob(), !0;
              } catch (e) {
                return !1;
              }
            })(),
          formData: "FormData" in r,
          arrayBuffer: "ArrayBuffer" in r,
        };
        if (t.arrayBuffer)
          var i = [
              "[object Int8Array]",
              "[object Uint8Array]",
              "[object Uint8ClampedArray]",
              "[object Int16Array]",
              "[object Uint16Array]",
              "[object Int32Array]",
              "[object Uint32Array]",
              "[object Float32Array]",
              "[object Float64Array]",
            ],
            s =
              ArrayBuffer.isView ||
              function (e) {
                return e && i.indexOf(Object.prototype.toString.call(e)) > -1;
              };
        function n(e) {
          if (
            ("string" != typeof e && (e = String(e)),
            /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))
          )
            throw TypeError("Invalid character in header field name");
          return e.toLowerCase();
        }
        function a(e) {
          return "string" != typeof e && (e = String(e)), e;
        }
        function o(e) {
          var i = {
            next: function () {
              var t = e.shift();
              return { done: void 0 === t, value: t };
            },
          };
          return (
            t.iterable &&
              (i[Symbol.iterator] = function () {
                return i;
              }),
            i
          );
        }
        function c(e) {
          (this.map = {}),
            e instanceof c
              ? e.forEach(function (e, t) {
                  this.append(t, e);
                }, this)
              : Array.isArray(e)
              ? e.forEach(function (e) {
                  this.append(e[0], e[1]);
                }, this)
              : e &&
                Object.getOwnPropertyNames(e).forEach(function (t) {
                  this.append(t, e[t]);
                }, this);
        }
        function h(e) {
          if (e.bodyUsed) return Promise.reject(TypeError("Already read"));
          e.bodyUsed = !0;
        }
        function l(e) {
          return new Promise(function (t, i) {
            (e.onload = function () {
              t(e.result);
            }),
              (e.onerror = function () {
                i(e.error);
              });
          });
        }
        function u(e) {
          var t = new FileReader(),
            i = l(t);
          return t.readAsArrayBuffer(e), i;
        }
        function p(e) {
          if (e.slice) return e.slice(0);
          var t = new Uint8Array(e.byteLength);
          return t.set(new Uint8Array(e)), t.buffer;
        }
        function d() {
          return (
            (this.bodyUsed = !1),
            (this._initBody = function (e) {
              if (((this._bodyInit = e), e)) {
                if ("string" == typeof e) this._bodyText = e;
                else if (t.blob && Blob.prototype.isPrototypeOf(e))
                  this._bodyBlob = e;
                else if (t.formData && FormData.prototype.isPrototypeOf(e))
                  this._bodyFormData = e;
                else if (
                  t.searchParams &&
                  URLSearchParams.prototype.isPrototypeOf(e)
                )
                  this._bodyText = e.toString();
                else {
                  var i;
                  t.arrayBuffer &&
                  t.blob &&
                  (i = e) &&
                  DataView.prototype.isPrototypeOf(i)
                    ? ((this._bodyArrayBuffer = p(e.buffer)),
                      (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                    : t.arrayBuffer &&
                      (ArrayBuffer.prototype.isPrototypeOf(e) || s(e))
                    ? (this._bodyArrayBuffer = p(e))
                    : (this._bodyText = e = Object.prototype.toString.call(e));
                }
              } else this._bodyText = "";
              !this.headers.get("content-type") &&
                ("string" == typeof e
                  ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                  : this._bodyBlob && this._bodyBlob.type
                  ? this.headers.set("content-type", this._bodyBlob.type)
                  : t.searchParams &&
                    URLSearchParams.prototype.isPrototypeOf(e) &&
                    this.headers.set(
                      "content-type",
                      "application/x-www-form-urlencoded;charset=UTF-8"
                    ));
            }),
            t.blob &&
              ((this.blob = function () {
                var e = h(this);
                if (e) return e;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer)
                  return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (!this._bodyFormData)
                  return Promise.resolve(new Blob([this._bodyText]));
                throw Error("could not read FormData body as blob");
              }),
              (this.arrayBuffer = function () {
                return this._bodyArrayBuffer
                  ? h(this) || Promise.resolve(this._bodyArrayBuffer)
                  : this.blob().then(u);
              })),
            (this.text = function () {
              var e,
                t,
                i,
                r = h(this);
              if (r) return r;
              if (this._bodyBlob)
                return (
                  (e = this._bodyBlob),
                  (i = l((t = new FileReader()))),
                  t.readAsText(e),
                  i
                );
              if (this._bodyArrayBuffer)
                return Promise.resolve(
                  (function (e) {
                    for (
                      var t = new Uint8Array(e), i = Array(t.length), r = 0;
                      r < t.length;
                      r++
                    )
                      i[r] = String.fromCharCode(t[r]);
                    return i.join("");
                  })(this._bodyArrayBuffer)
                );
              if (!this._bodyFormData) return Promise.resolve(this._bodyText);
              throw Error("could not read FormData body as text");
            }),
            t.formData &&
              (this.formData = function () {
                return this.text().then(y);
              }),
            (this.json = function () {
              return this.text().then(JSON.parse);
            }),
            this
          );
        }
        (c.prototype.append = function (e, t) {
          (e = n(e)), (t = a(t));
          var i = this.map[e];
          this.map[e] = i ? i + ", " + t : t;
        }),
          (c.prototype.delete = function (e) {
            delete this.map[n(e)];
          }),
          (c.prototype.get = function (e) {
            return (e = n(e)), this.has(e) ? this.map[e] : null;
          }),
          (c.prototype.has = function (e) {
            return this.map.hasOwnProperty(n(e));
          }),
          (c.prototype.set = function (e, t) {
            this.map[n(e)] = a(t);
          }),
          (c.prototype.forEach = function (e, t) {
            for (var i in this.map)
              this.map.hasOwnProperty(i) && e.call(t, this.map[i], i, this);
          }),
          (c.prototype.keys = function () {
            var e = [];
            return (
              this.forEach(function (t, i) {
                e.push(i);
              }),
              o(e)
            );
          }),
          (c.prototype.values = function () {
            var e = [];
            return (
              this.forEach(function (t) {
                e.push(t);
              }),
              o(e)
            );
          }),
          (c.prototype.entries = function () {
            var e = [];
            return (
              this.forEach(function (t, i) {
                e.push([i, t]);
              }),
              o(e)
            );
          }),
          t.iterable && (c.prototype[Symbol.iterator] = c.prototype.entries);
        var g = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        function f(e, t) {
          var i,
            r,
            s = (t = t || {}).body;
          if (e instanceof f) {
            if (e.bodyUsed) throw TypeError("Already read");
            (this.url = e.url),
              (this.credentials = e.credentials),
              t.headers || (this.headers = new c(e.headers)),
              (this.method = e.method),
              (this.mode = e.mode),
              (this.signal = e.signal),
              s ||
                null == e._bodyInit ||
                ((s = e._bodyInit), (e.bodyUsed = !0));
          } else this.url = String(e);
          if (
            ((this.credentials =
              t.credentials || this.credentials || "same-origin"),
            (t.headers || !this.headers) && (this.headers = new c(t.headers)),
            (this.method =
              ((r = (i = t.method || this.method || "GET").toUpperCase()),
              g.indexOf(r) > -1 ? r : i)),
            (this.mode = t.mode || this.mode || null),
            (this.signal = t.signal || this.signal),
            (this.referrer = null),
            ("GET" === this.method || "HEAD" === this.method) && s)
          )
            throw TypeError("Body not allowed for GET or HEAD requests");
          this._initBody(s);
        }
        function y(e) {
          var t = new FormData();
          return (
            e
              .trim()
              .split("&")
              .forEach(function (e) {
                if (e) {
                  var i = e.split("="),
                    r = i.shift().replace(/\+/g, " "),
                    s = i.join("=").replace(/\+/g, " ");
                  t.append(decodeURIComponent(r), decodeURIComponent(s));
                }
              }),
            t
          );
        }
        function m(e, t) {
          t || (t = {}),
            (this.type = "default"),
            (this.status = void 0 === t.status ? 200 : t.status),
            (this.ok = this.status >= 200 && this.status < 300),
            (this.statusText = "statusText" in t ? t.statusText : "OK"),
            (this.headers = new c(t.headers)),
            (this.url = t.url || ""),
            this._initBody(e);
        }
        (f.prototype.clone = function () {
          return new f(this, { body: this._bodyInit });
        }),
          d.call(f.prototype),
          d.call(m.prototype),
          (m.prototype.clone = function () {
            return new m(this._bodyInit, {
              status: this.status,
              statusText: this.statusText,
              headers: new c(this.headers),
              url: this.url,
            });
          }),
          (m.error = function () {
            var e = new m(null, { status: 0, statusText: "" });
            return (e.type = "error"), e;
          });
        var v = [301, 302, 303, 307, 308];
        (m.redirect = function (e, t) {
          if (-1 === v.indexOf(t)) throw RangeError("Invalid status code");
          return new m(null, { status: t, headers: { location: e } });
        }),
          (e.DOMException = r.DOMException);
        try {
          new e.DOMException();
        } catch (t) {
          (e.DOMException = function (e, t) {
            (this.message = e), (this.name = t);
            var i = Error(e);
            this.stack = i.stack;
          }),
            (e.DOMException.prototype = Object.create(Error.prototype)),
            (e.DOMException.prototype.constructor = e.DOMException);
        }
        function w(i, r) {
          return new Promise(function (s, n) {
            var a = new f(i, r);
            if (a.signal && a.signal.aborted)
              return n(new e.DOMException("Aborted", "AbortError"));
            var o = new XMLHttpRequest();
            function h() {
              o.abort();
            }
            (o.onload = function () {
              var e,
                t,
                i = {
                  status: o.status,
                  statusText: o.statusText,
                  headers:
                    ((e = o.getAllResponseHeaders() || ""),
                    (t = new c()),
                    e
                      .replace(/\r?\n[\t ]+/g, " ")
                      .split(/\r?\n/)
                      .forEach(function (e) {
                        var i = e.split(":"),
                          r = i.shift().trim();
                        if (r) {
                          var s = i.join(":").trim();
                          t.append(r, s);
                        }
                      }),
                    t),
                };
              (i.url =
                "responseURL" in o
                  ? o.responseURL
                  : i.headers.get("X-Request-URL")),
                s(new m("response" in o ? o.response : o.responseText, i));
            }),
              (o.onerror = function () {
                n(TypeError("Network request failed"));
              }),
              (o.ontimeout = function () {
                n(TypeError("Network request failed"));
              }),
              (o.onabort = function () {
                n(new e.DOMException("Aborted", "AbortError"));
              }),
              o.open(a.method, a.url, !0),
              "include" === a.credentials
                ? (o.withCredentials = !0)
                : "omit" === a.credentials && (o.withCredentials = !1),
              "responseType" in o && t.blob && (o.responseType = "blob"),
              a.headers.forEach(function (e, t) {
                o.setRequestHeader(t, e);
              }),
              a.signal &&
                (a.signal.addEventListener("abort", h),
                (o.onreadystatechange = function () {
                  4 === o.readyState &&
                    a.signal.removeEventListener("abort", h);
                })),
              o.send(void 0 === a._bodyInit ? null : a._bodyInit);
          });
        }
        (w.polyfill = !0),
          r.fetch ||
            ((r.fetch = w), (r.Headers = c), (r.Request = f), (r.Response = m)),
          (e.Headers = c),
          (e.Request = f),
          (e.Response = m),
          (e.fetch = w),
          Object.defineProperty(e, "__esModule", { value: !0 });
      })({}),
        (r.fetch.ponyfill = !0),
        delete r.fetch.polyfill,
        ((t = r.fetch).default = r.fetch),
        (t.fetch = r.fetch),
        (t.Headers = r.Headers),
        (t.Request = r.Request),
        (t.Response = r.Response),
        (e.exports = t);
    },
    11477: function (e, t, i) {
      "use strict";
      var r = i(91835);
      function s(e, t, i, r) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: i },
          decoder: { decode: r },
        };
      }
      s(
        "utf8",
        "u",
        (e) => "u" + new TextDecoder("utf8").decode(e),
        (e) => new TextEncoder().encode(e.substring(1))
      ),
        s(
          "ascii",
          "a",
          (e) => {
            let t = "a";
            for (let i = 0; i < e.length; i++) t += String.fromCharCode(e[i]);
            return t;
          },
          (e) => {
            let t = (function (e = 0) {
              return null != globalThis.Buffer &&
                null != globalThis.Buffer.allocUnsafe
                ? globalThis.Buffer.allocUnsafe(e)
                : new Uint8Array(e);
            })((e = e.substring(1)).length);
            for (let i = 0; i < e.length; i++) t[i] = e.charCodeAt(i);
            return t;
          }
        ),
        r.gh.base16,
        r.gh;
    },
    59800: function (e, t, i) {
      "use strict";
      function r(e = 0) {
        return null != globalThis.Buffer &&
          null != globalThis.Buffer.allocUnsafe
          ? globalThis.Buffer.allocUnsafe(e)
          : new Uint8Array(e);
      }
      function s(e, t) {
        t || (t = e.reduce((e, t) => e + t.length, 0));
        let i = r(t),
          s = 0;
        for (let t of e) i.set(t, s), (s += t.length);
        return i;
      }
      i.d(t, {
        zo: function () {
          return s;
        },
        mL: function () {
          return l;
        },
        BB: function () {
          return u;
        },
      });
      var n = i(91835);
      function a(e, t, i, r) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: i },
          decoder: { decode: r },
        };
      }
      let o = a(
          "utf8",
          "u",
          (e) => "u" + new TextDecoder("utf8").decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        c = a(
          "ascii",
          "a",
          (e) => {
            let t = "a";
            for (let i = 0; i < e.length; i++) t += String.fromCharCode(e[i]);
            return t;
          },
          (e) => {
            let t = r((e = e.substring(1)).length);
            for (let i = 0; i < e.length; i++) t[i] = e.charCodeAt(i);
            return t;
          }
        ),
        h = {
          utf8: o,
          "utf-8": o,
          hex: n.gh.base16,
          latin1: c,
          ascii: c,
          binary: c,
          ...n.gh,
        };
      function l(e, t = "utf8") {
        let i = h[t];
        if (!i) throw Error(`Unsupported encoding "${t}"`);
        return ("utf8" === t || "utf-8" === t) &&
          null != globalThis.Buffer &&
          null != globalThis.Buffer.from
          ? globalThis.Buffer.from(e, "utf8")
          : i.decoder.decode(`${i.prefix}${e}`);
      }
      function u(e, t = "utf8") {
        let i = h[t];
        if (!i) throw Error(`Unsupported encoding "${t}"`);
        return ("utf8" === t || "utf-8" === t) &&
          null != globalThis.Buffer &&
          null != globalThis.Buffer.from
          ? globalThis.Buffer.from(
              e.buffer,
              e.byteOffset,
              e.byteLength
            ).toString("utf8")
          : i.encoder.encode(e).substring(1);
      }
    },
  },
]);
