(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [32517],
  {
    26729: function (e) {
      "use strict";
      var t = Object.prototype.hasOwnProperty,
        r = "~";
      function n() {}
      function i(e, t, r) {
        (this.fn = e), (this.context = t), (this.once = r || !1);
      }
      function s(e, t, n, s, a) {
        if ("function" != typeof n)
          throw TypeError("The listener must be a function");
        var o = new i(n, s || e, a),
          l = r ? r + t : t;
        return (
          e._events[l]
            ? e._events[l].fn
              ? (e._events[l] = [e._events[l], o])
              : e._events[l].push(o)
            : ((e._events[l] = o), e._eventsCount++),
          e
        );
      }
      function a(e, t) {
        0 == --e._eventsCount ? (e._events = new n()) : delete e._events[t];
      }
      function o() {
        (this._events = new n()), (this._eventsCount = 0);
      }
      Object.create &&
        ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1)),
        (o.prototype.eventNames = function () {
          var e,
            n,
            i = [];
          if (0 === this._eventsCount) return i;
          for (n in (e = this._events))
            t.call(e, n) && i.push(r ? n.slice(1) : n);
          return Object.getOwnPropertySymbols
            ? i.concat(Object.getOwnPropertySymbols(e))
            : i;
        }),
        (o.prototype.listeners = function (e) {
          var t = r ? r + e : e,
            n = this._events[t];
          if (!n) return [];
          if (n.fn) return [n.fn];
          for (var i = 0, s = n.length, a = Array(s); i < s; i++)
            a[i] = n[i].fn;
          return a;
        }),
        (o.prototype.listenerCount = function (e) {
          var t = r ? r + e : e,
            n = this._events[t];
          return n ? (n.fn ? 1 : n.length) : 0;
        }),
        (o.prototype.emit = function (e, t, n, i, s, a) {
          var o = r ? r + e : e;
          if (!this._events[o]) return !1;
          var l,
            c,
            u = this._events[o],
            h = arguments.length;
          if (u.fn) {
            switch ((u.once && this.removeListener(e, u.fn, void 0, !0), h)) {
              case 1:
                return u.fn.call(u.context), !0;
              case 2:
                return u.fn.call(u.context, t), !0;
              case 3:
                return u.fn.call(u.context, t, n), !0;
              case 4:
                return u.fn.call(u.context, t, n, i), !0;
              case 5:
                return u.fn.call(u.context, t, n, i, s), !0;
              case 6:
                return u.fn.call(u.context, t, n, i, s, a), !0;
            }
            for (c = 1, l = Array(h - 1); c < h; c++) l[c - 1] = arguments[c];
            u.fn.apply(u.context, l);
          } else {
            var d,
              f = u.length;
            for (c = 0; c < f; c++)
              switch (
                (u[c].once && this.removeListener(e, u[c].fn, void 0, !0), h)
              ) {
                case 1:
                  u[c].fn.call(u[c].context);
                  break;
                case 2:
                  u[c].fn.call(u[c].context, t);
                  break;
                case 3:
                  u[c].fn.call(u[c].context, t, n);
                  break;
                case 4:
                  u[c].fn.call(u[c].context, t, n, i);
                  break;
                default:
                  if (!l)
                    for (d = 1, l = Array(h - 1); d < h; d++)
                      l[d - 1] = arguments[d];
                  u[c].fn.apply(u[c].context, l);
              }
          }
          return !0;
        }),
        (o.prototype.on = function (e, t, r) {
          return s(this, e, t, r, !1);
        }),
        (o.prototype.once = function (e, t, r) {
          return s(this, e, t, r, !0);
        }),
        (o.prototype.removeListener = function (e, t, n, i) {
          var s = r ? r + e : e;
          if (!this._events[s]) return this;
          if (!t) return a(this, s), this;
          var o = this._events[s];
          if (o.fn)
            o.fn !== t ||
              (i && !o.once) ||
              (n && o.context !== n) ||
              a(this, s);
          else {
            for (var l = 0, c = [], u = o.length; l < u; l++)
              (o[l].fn !== t ||
                (i && !o[l].once) ||
                (n && o[l].context !== n)) &&
                c.push(o[l]);
            c.length
              ? (this._events[s] = 1 === c.length ? c[0] : c)
              : a(this, s);
          }
          return this;
        }),
        (o.prototype.removeAllListeners = function (e) {
          var t;
          return (
            e
              ? ((t = r ? r + e : e), this._events[t] && a(this, t))
              : ((this._events = new n()), (this._eventsCount = 0)),
            this
          );
        }),
        (o.prototype.off = o.prototype.removeListener),
        (o.prototype.addListener = o.prototype.on),
        (o.prefixed = r),
        (o.EventEmitter = o),
        (e.exports = o);
    },
    95811: function (e, t, r) {
      e.exports = r(26066)(r(79653));
    },
    26066: function (e, t, r) {
      let n = r(37016),
        i = r(5675);
      e.exports = function (e) {
        let t = n(e),
          r = i(e);
        return function (e, n) {
          switch ("string" == typeof e ? e.toLowerCase() : e) {
            case "keccak224":
              return new t(1152, 448, null, 224, n);
            case "keccak256":
              return new t(1088, 512, null, 256, n);
            case "keccak384":
              return new t(832, 768, null, 384, n);
            case "keccak512":
              return new t(576, 1024, null, 512, n);
            case "sha3-224":
              return new t(1152, 448, 6, 224, n);
            case "sha3-256":
              return new t(1088, 512, 6, 256, n);
            case "sha3-384":
              return new t(832, 768, 6, 384, n);
            case "sha3-512":
              return new t(576, 1024, 6, 512, n);
            case "shake128":
              return new r(1344, 256, 31, n);
            case "shake256":
              return new r(1088, 512, 31, n);
            default:
              throw Error("Invald algorithm: " + e);
          }
        };
      };
    },
    37016: function (e, t, r) {
      var n = r(48764).Buffer;
      let { Transform: i } = r(88473);
      e.exports = (e) =>
        class t extends i {
          constructor(t, r, n, i, s) {
            super(s),
              (this._rate = t),
              (this._capacity = r),
              (this._delimitedSuffix = n),
              (this._hashBitLength = i),
              (this._options = s),
              (this._state = new e()),
              this._state.initialize(t, r),
              (this._finalized = !1);
          }
          _transform(e, t, r) {
            let n = null;
            try {
              this.update(e, t);
            } catch (e) {
              n = e;
            }
            r(n);
          }
          _flush(e) {
            let t = null;
            try {
              this.push(this.digest());
            } catch (e) {
              t = e;
            }
            e(t);
          }
          update(e, t) {
            if (!n.isBuffer(e) && "string" != typeof e)
              throw TypeError("Data must be a string or a buffer");
            if (this._finalized) throw Error("Digest already called");
            return (
              n.isBuffer(e) || (e = n.from(e, t)), this._state.absorb(e), this
            );
          }
          digest(e) {
            if (this._finalized) throw Error("Digest already called");
            (this._finalized = !0),
              this._delimitedSuffix &&
                this._state.absorbLastFewBits(this._delimitedSuffix);
            let t = this._state.squeeze(this._hashBitLength / 8);
            return void 0 !== e && (t = t.toString(e)), this._resetState(), t;
          }
          _resetState() {
            return this._state.initialize(this._rate, this._capacity), this;
          }
          _clone() {
            let e = new t(
              this._rate,
              this._capacity,
              this._delimitedSuffix,
              this._hashBitLength,
              this._options
            );
            return (
              this._state.copy(e._state), (e._finalized = this._finalized), e
            );
          }
        };
    },
    5675: function (e, t, r) {
      var n = r(48764).Buffer;
      let { Transform: i } = r(88473);
      e.exports = (e) =>
        class t extends i {
          constructor(t, r, n, i) {
            super(i),
              (this._rate = t),
              (this._capacity = r),
              (this._delimitedSuffix = n),
              (this._options = i),
              (this._state = new e()),
              this._state.initialize(t, r),
              (this._finalized = !1);
          }
          _transform(e, t, r) {
            let n = null;
            try {
              this.update(e, t);
            } catch (e) {
              n = e;
            }
            r(n);
          }
          _flush() {}
          _read(e) {
            this.push(this.squeeze(e));
          }
          update(e, t) {
            if (!n.isBuffer(e) && "string" != typeof e)
              throw TypeError("Data must be a string or a buffer");
            if (this._finalized) throw Error("Squeeze already called");
            return (
              n.isBuffer(e) || (e = n.from(e, t)), this._state.absorb(e), this
            );
          }
          squeeze(e, t) {
            this._finalized ||
              ((this._finalized = !0),
              this._state.absorbLastFewBits(this._delimitedSuffix));
            let r = this._state.squeeze(e);
            return void 0 !== t && (r = r.toString(t)), r;
          }
          _resetState() {
            return this._state.initialize(this._rate, this._capacity), this;
          }
          _clone() {
            let e = new t(
              this._rate,
              this._capacity,
              this._delimitedSuffix,
              this._options
            );
            return (
              this._state.copy(e._state), (e._finalized = this._finalized), e
            );
          }
        };
    },
    34040: function (e, t) {
      let r = [
        1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0,
        2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136,
        0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905,
        2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648,
        32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896,
        2147483648, 2147483649, 0, 2147516424, 2147483648,
      ];
      t.p1600 = function (e) {
        for (let t = 0; t < 24; ++t) {
          let n = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40],
            i = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41],
            s = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42],
            a = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43],
            o = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44],
            l = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45],
            c = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46],
            u = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47],
            h = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48],
            d = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49],
            f = h ^ ((s << 1) | (a >>> 31)),
            p = d ^ ((a << 1) | (s >>> 31)),
            _ = e[0] ^ f,
            g = e[1] ^ p,
            b = e[10] ^ f,
            m = e[11] ^ p,
            y = e[20] ^ f,
            v = e[21] ^ p,
            w = e[30] ^ f,
            E = e[31] ^ p,
            S = e[40] ^ f,
            k = e[41] ^ p;
          (f = n ^ ((o << 1) | (l >>> 31))), (p = i ^ ((l << 1) | (o >>> 31)));
          let C = e[2] ^ f,
            I = e[3] ^ p,
            M = e[12] ^ f,
            R = e[13] ^ p,
            x = e[22] ^ f,
            L = e[23] ^ p,
            A = e[32] ^ f,
            P = e[33] ^ p,
            T = e[42] ^ f,
            N = e[43] ^ p;
          (f = s ^ ((c << 1) | (u >>> 31))), (p = a ^ ((u << 1) | (c >>> 31)));
          let j = e[4] ^ f,
            O = e[5] ^ p,
            D = e[14] ^ f,
            U = e[15] ^ p,
            B = e[24] ^ f,
            W = e[25] ^ p,
            q = e[34] ^ f,
            H = e[35] ^ p,
            F = e[44] ^ f,
            z = e[45] ^ p;
          (f = o ^ ((h << 1) | (d >>> 31))), (p = l ^ ((d << 1) | (h >>> 31)));
          let V = e[6] ^ f,
            K = e[7] ^ p,
            Z = e[16] ^ f,
            G = e[17] ^ p,
            $ = e[26] ^ f,
            Y = e[27] ^ p,
            J = e[36] ^ f,
            Q = e[37] ^ p,
            X = e[46] ^ f,
            ee = e[47] ^ p;
          (f = c ^ ((n << 1) | (i >>> 31))), (p = u ^ ((i << 1) | (n >>> 31)));
          let et = e[8] ^ f,
            er = e[9] ^ p,
            en = e[18] ^ f,
            ei = e[19] ^ p,
            es = e[28] ^ f,
            ea = e[29] ^ p,
            eo = e[38] ^ f,
            el = e[39] ^ p,
            ec = e[48] ^ f,
            eu = e[49] ^ p,
            eh = (m << 4) | (b >>> 28),
            ed = (b << 4) | (m >>> 28),
            ef = (y << 3) | (v >>> 29),
            ep = (v << 3) | (y >>> 29),
            e_ = (E << 9) | (w >>> 23),
            eg = (w << 9) | (E >>> 23),
            eb = (S << 18) | (k >>> 14),
            em = (k << 18) | (S >>> 14),
            ey = (C << 1) | (I >>> 31),
            ev = (I << 1) | (C >>> 31),
            ew = (R << 12) | (M >>> 20),
            eE = (M << 12) | (R >>> 20),
            eS = (x << 10) | (L >>> 22),
            ek = (L << 10) | (x >>> 22),
            eC = (P << 13) | (A >>> 19),
            eI = (A << 13) | (P >>> 19),
            eM = (T << 2) | (N >>> 30),
            eR = (N << 2) | (T >>> 30),
            ex = (O << 30) | (j >>> 2),
            eL = (j << 30) | (O >>> 2),
            eA = (D << 6) | (U >>> 26),
            eP = (U << 6) | (D >>> 26),
            eT = (W << 11) | (B >>> 21),
            eN = (B << 11) | (W >>> 21),
            ej = (q << 15) | (H >>> 17),
            eO = (H << 15) | (q >>> 17),
            eD = (z << 29) | (F >>> 3),
            eU = (F << 29) | (z >>> 3),
            eB = (V << 28) | (K >>> 4),
            eW = (K << 28) | (V >>> 4),
            eq = (G << 23) | (Z >>> 9),
            eH = (Z << 23) | (G >>> 9),
            eF = ($ << 25) | (Y >>> 7),
            ez = (Y << 25) | ($ >>> 7),
            eV = (J << 21) | (Q >>> 11),
            eK = (Q << 21) | (J >>> 11),
            eZ = (ee << 24) | (X >>> 8),
            eG = (X << 24) | (ee >>> 8),
            e$ = (et << 27) | (er >>> 5),
            eY = (er << 27) | (et >>> 5),
            eJ = (en << 20) | (ei >>> 12),
            eQ = (ei << 20) | (en >>> 12),
            eX = (ea << 7) | (es >>> 25),
            e0 = (es << 7) | (ea >>> 25),
            e1 = (eo << 8) | (el >>> 24),
            e2 = (el << 8) | (eo >>> 24),
            e3 = (ec << 14) | (eu >>> 18),
            e5 = (eu << 14) | (ec >>> 18);
          (e[0] = _ ^ (~ew & eT)),
            (e[1] = g ^ (~eE & eN)),
            (e[10] = eB ^ (~eJ & ef)),
            (e[11] = eW ^ (~eQ & ep)),
            (e[20] = ey ^ (~eA & eF)),
            (e[21] = ev ^ (~eP & ez)),
            (e[30] = e$ ^ (~eh & eS)),
            (e[31] = eY ^ (~ed & ek)),
            (e[40] = ex ^ (~eq & eX)),
            (e[41] = eL ^ (~eH & e0)),
            (e[2] = ew ^ (~eT & eV)),
            (e[3] = eE ^ (~eN & eK)),
            (e[12] = eJ ^ (~ef & eC)),
            (e[13] = eQ ^ (~ep & eI)),
            (e[22] = eA ^ (~eF & e1)),
            (e[23] = eP ^ (~ez & e2)),
            (e[32] = eh ^ (~eS & ej)),
            (e[33] = ed ^ (~ek & eO)),
            (e[42] = eq ^ (~eX & e_)),
            (e[43] = eH ^ (~e0 & eg)),
            (e[4] = eT ^ (~eV & e3)),
            (e[5] = eN ^ (~eK & e5)),
            (e[14] = ef ^ (~eC & eD)),
            (e[15] = ep ^ (~eI & eU)),
            (e[24] = eF ^ (~e1 & eb)),
            (e[25] = ez ^ (~e2 & em)),
            (e[34] = eS ^ (~ej & eZ)),
            (e[35] = ek ^ (~eO & eG)),
            (e[44] = eX ^ (~e_ & eM)),
            (e[45] = e0 ^ (~eg & eR)),
            (e[6] = eV ^ (~e3 & _)),
            (e[7] = eK ^ (~e5 & g)),
            (e[16] = eC ^ (~eD & eB)),
            (e[17] = eI ^ (~eU & eW)),
            (e[26] = e1 ^ (~eb & ey)),
            (e[27] = e2 ^ (~em & ev)),
            (e[36] = ej ^ (~eZ & e$)),
            (e[37] = eO ^ (~eG & eY)),
            (e[46] = e_ ^ (~eM & ex)),
            (e[47] = eg ^ (~eR & eL)),
            (e[8] = e3 ^ (~_ & ew)),
            (e[9] = e5 ^ (~g & eE)),
            (e[18] = eD ^ (~eB & eJ)),
            (e[19] = eU ^ (~eW & eQ)),
            (e[28] = eb ^ (~ey & eA)),
            (e[29] = em ^ (~ev & eP)),
            (e[38] = eZ ^ (~e$ & eh)),
            (e[39] = eG ^ (~eY & ed)),
            (e[48] = eM ^ (~ex & eq)),
            (e[49] = eR ^ (~eL & eH)),
            (e[0] ^= r[2 * t]),
            (e[1] ^= r[2 * t + 1]);
        }
      };
    },
    79653: function (e, t, r) {
      var n = r(48764).Buffer;
      let i = r(34040);
      function s() {
        (this.state = [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0,
        ]),
          (this.blockSize = null),
          (this.count = 0),
          (this.squeezing = !1);
      }
      (s.prototype.initialize = function (e, t) {
        for (let e = 0; e < 50; ++e) this.state[e] = 0;
        (this.blockSize = e / 8), (this.count = 0), (this.squeezing = !1);
      }),
        (s.prototype.absorb = function (e) {
          for (let t = 0; t < e.length; ++t)
            (this.state[~~(this.count / 4)] ^= e[t] << ((this.count % 4) * 8)),
              (this.count += 1),
              this.count === this.blockSize &&
                (i.p1600(this.state), (this.count = 0));
        }),
        (s.prototype.absorbLastFewBits = function (e) {
          (this.state[~~(this.count / 4)] ^= e << ((this.count % 4) * 8)),
            (128 & e) != 0 &&
              this.count === this.blockSize - 1 &&
              i.p1600(this.state),
            (this.state[~~((this.blockSize - 1) / 4)] ^=
              128 << (((this.blockSize - 1) % 4) * 8)),
            i.p1600(this.state),
            (this.count = 0),
            (this.squeezing = !0);
        }),
        (s.prototype.squeeze = function (e) {
          this.squeezing || this.absorbLastFewBits(1);
          let t = n.alloc(e);
          for (let r = 0; r < e; ++r)
            (t[r] =
              (this.state[~~(this.count / 4)] >>> ((this.count % 4) * 8)) &
              255),
              (this.count += 1),
              this.count === this.blockSize &&
                (i.p1600(this.state), (this.count = 0));
          return t;
        }),
        (s.prototype.copy = function (e) {
          for (let t = 0; t < 50; ++t) e.state[t] = this.state[t];
          (e.blockSize = this.blockSize),
            (e.count = this.count),
            (e.squeezing = this.squeezing);
        }),
        (e.exports = s);
    },
    6400: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          Component: function () {
            return E;
          },
          Fragment: function () {
            return w;
          },
          cloneElement: function () {
            return U;
          },
          createContext: function () {
            return B;
          },
          createElement: function () {
            return m;
          },
          createRef: function () {
            return v;
          },
          h: function () {
            return m;
          },
          hydrate: function () {
            return D;
          },
          isValidElement: function () {
            return a;
          },
          options: function () {
            return i;
          },
          render: function () {
            return O;
          },
          toChildArray: function () {
            return function e(t, r) {
              return (
                (r = r || []),
                null == t ||
                  "boolean" == typeof t ||
                  (_(t)
                    ? t.some(function (t) {
                        e(t, r);
                      })
                    : r.push(t)),
                r
              );
            };
          },
        });
      var n,
        i,
        s,
        a,
        o,
        l,
        c,
        u,
        h,
        d = {},
        f = [],
        p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
        _ = Array.isArray;
      function g(e, t) {
        for (var r in t) e[r] = t[r];
        return e;
      }
      function b(e) {
        var t = e.parentNode;
        t && t.removeChild(e);
      }
      function m(e, t, r) {
        var i,
          s,
          a,
          o = {};
        for (a in t)
          "key" == a ? (i = t[a]) : "ref" == a ? (s = t[a]) : (o[a] = t[a]);
        if (
          (arguments.length > 2 &&
            (o.children = arguments.length > 3 ? n.call(arguments, 2) : r),
          "function" == typeof e && null != e.defaultProps)
        )
          for (a in e.defaultProps)
            void 0 === o[a] && (o[a] = e.defaultProps[a]);
        return y(e, o, i, s, null);
      }
      function y(e, t, r, n, a) {
        var o = {
          type: e,
          props: t,
          key: r,
          ref: n,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __d: void 0,
          __c: null,
          constructor: void 0,
          __v: null == a ? ++s : a,
          __i: -1,
          __u: 0,
        };
        return null == a && null != i.vnode && i.vnode(o), o;
      }
      function v() {
        return { current: null };
      }
      function w(e) {
        return e.children;
      }
      function E(e, t) {
        (this.props = e), (this.context = t);
      }
      function S(e, t) {
        if (null == t) return e.__ ? S(e.__, e.__i + 1) : null;
        for (var r; t < e.__k.length; t++)
          if (null != (r = e.__k[t]) && null != r.__e) return r.__e;
        return "function" == typeof e.type ? S(e) : null;
      }
      function k(e) {
        ((!e.__d && (e.__d = !0) && o.push(e) && !C.__r++) ||
          l !== i.debounceRendering) &&
          ((l = i.debounceRendering) || c)(C);
      }
      function C() {
        var e, t, r, n, s, a, l, c, h;
        for (o.sort(u); (e = o.shift()); )
          e.__d &&
            ((t = o.length),
            (n = void 0),
            (a = (s = (r = e).__v).__e),
            (c = []),
            (h = []),
            (l = r.__P) &&
              (((n = g({}, s)).__v = s.__v + 1),
              i.vnode && i.vnode(n),
              A(
                l,
                n,
                s,
                r.__n,
                void 0 !== l.ownerSVGElement,
                32 & s.__u ? [a] : null,
                c,
                null == a ? S(s) : a,
                !!(32 & s.__u),
                h
              ),
              (n.__v = s.__v),
              (n.__.__k[n.__i] = n),
              P(c, n, h),
              n.__e != a &&
                (function e(t) {
                  var r, n;
                  if (null != (t = t.__) && null != t.__c) {
                    for (
                      t.__e = t.__c.base = null, r = 0;
                      r < t.__k.length;
                      r++
                    )
                      if (null != (n = t.__k[r]) && null != n.__e) {
                        t.__e = t.__c.base = n.__e;
                        break;
                      }
                    return e(t);
                  }
                })(n)),
            o.length > t && o.sort(u));
        C.__r = 0;
      }
      function I(e, t, r, n, i, s, a, o, l, c, u) {
        var h,
          p,
          g,
          b,
          m,
          v = (n && n.__k) || f,
          E = t.length;
        for (
          r.__d = l,
            (function (e, t, r) {
              var n,
                i,
                s,
                a,
                o,
                l = t.length,
                c = r.length,
                u = c,
                h = 0;
              for (e.__k = [], n = 0; n < l; n++)
                (a = n + h),
                  null !=
                  (i = e.__k[n] =
                    null == (i = t[n]) ||
                    "boolean" == typeof i ||
                    "function" == typeof i
                      ? null
                      : "string" == typeof i ||
                        "number" == typeof i ||
                        "bigint" == typeof i ||
                        i.constructor == String
                      ? y(null, i, null, null, null)
                      : _(i)
                      ? y(w, { children: i }, null, null, null)
                      : void 0 === i.constructor && i.__b > 0
                      ? y(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v)
                      : i)
                    ? ((i.__ = e),
                      (i.__b = e.__b + 1),
                      (o = (function (e, t, r, n) {
                        var i = e.key,
                          s = e.type,
                          a = r - 1,
                          o = r + 1,
                          l = t[r];
                        if (
                          null === l ||
                          (l &&
                            i == l.key &&
                            s === l.type &&
                            0 == (131072 & l.__u))
                        )
                          return r;
                        if (n > (null != l && 0 == (131072 & l.__u) ? 1 : 0))
                          for (; a >= 0 || o < t.length; ) {
                            if (a >= 0) {
                              if (
                                (l = t[a]) &&
                                0 == (131072 & l.__u) &&
                                i == l.key &&
                                s === l.type
                              )
                                return a;
                              a--;
                            }
                            if (o < t.length) {
                              if (
                                (l = t[o]) &&
                                0 == (131072 & l.__u) &&
                                i == l.key &&
                                s === l.type
                              )
                                return o;
                              o++;
                            }
                          }
                        return -1;
                      })(i, r, a, u)),
                      (i.__i = o),
                      (s = null),
                      -1 !== o && (u--, (s = r[o]) && (s.__u |= 131072)),
                      null == s || null === s.__v
                        ? (-1 == o && h--,
                          "function" != typeof i.type && (i.__u |= 65536))
                        : o !== a &&
                          (o === a + 1
                            ? h++
                            : o > a
                            ? u > l - a
                              ? (h += o - a)
                              : h--
                            : o < a
                            ? o == a - 1 && (h = o - a)
                            : (h = 0),
                          o !== n + h && (i.__u |= 65536)))
                    : (s = r[a]) &&
                      null == s.key &&
                      s.__e &&
                      0 == (131072 & s.__u) &&
                      (s.__e == e.__d && (e.__d = S(s)),
                      N(s, s, !1),
                      (r[a] = null),
                      u--);
              if (u)
                for (n = 0; n < c; n++)
                  null != (s = r[n]) &&
                    0 == (131072 & s.__u) &&
                    (s.__e == e.__d && (e.__d = S(s)), N(s, s));
            })(r, t, v),
            l = r.__d,
            h = 0;
          h < E;
          h++
        )
          null != (g = r.__k[h]) &&
            "boolean" != typeof g &&
            "function" != typeof g &&
            ((p = -1 === g.__i ? d : v[g.__i] || d),
            (g.__i = h),
            A(e, g, p, i, s, a, o, l, c, u),
            (b = g.__e),
            g.ref &&
              p.ref != g.ref &&
              (p.ref && T(p.ref, null, g), u.push(g.ref, g.__c || b, g)),
            null == m && null != b && (m = b),
            65536 & g.__u || p.__k === g.__k
              ? (b || p.__e != l || (l = S(p)),
                (l = (function e(t, r, n) {
                  var i, s;
                  if ("function" == typeof t.type) {
                    for (i = t.__k, s = 0; i && s < i.length; s++)
                      i[s] && ((i[s].__ = t), (r = e(i[s], r, n)));
                    return r;
                  }
                  t.__e != r && (n.insertBefore(t.__e, r || null), (r = t.__e));
                  do r = r && r.nextSibling;
                  while (null != r && 8 === r.nodeType);
                  return r;
                })(g, l, e)))
              : "function" == typeof g.type && void 0 !== g.__d
              ? (l = g.__d)
              : b && (l = b.nextSibling),
            (g.__d = void 0),
            (g.__u &= -196609));
        (r.__d = l), (r.__e = m);
      }
      function M(e, t, r) {
        "-" === t[0]
          ? e.setProperty(t, null == r ? "" : r)
          : (e[t] =
              null == r
                ? ""
                : "number" != typeof r || p.test(t)
                ? r
                : r + "px");
      }
      function R(e, t, r, n, i) {
        var s;
        e: if ("style" === t) {
          if ("string" == typeof r) e.style.cssText = r;
          else {
            if (("string" == typeof n && (e.style.cssText = n = ""), n))
              for (t in n) (r && t in r) || M(e.style, t, "");
            if (r) for (t in r) (n && r[t] === n[t]) || M(e.style, t, r[t]);
          }
        } else if ("o" === t[0] && "n" === t[1])
          (s = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1"))),
            (t =
              t.toLowerCase() in e || "onFocusOut" === t || "onFocusIn" === t
                ? t.toLowerCase().slice(2)
                : t.slice(2)),
            e.l || (e.l = {}),
            (e.l[t + s] = r),
            r
              ? n
                ? (r.u = n.u)
                : ((r.u = Date.now()), e.addEventListener(t, s ? L : x, s))
              : e.removeEventListener(t, s ? L : x, s);
        else {
          if (i) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
          else if (
            "width" !== t &&
            "height" !== t &&
            "href" !== t &&
            "list" !== t &&
            "form" !== t &&
            "tabIndex" !== t &&
            "download" !== t &&
            "rowSpan" !== t &&
            "colSpan" !== t &&
            "role" !== t &&
            t in e
          )
            try {
              e[t] = null == r ? "" : r;
              break e;
            } catch (e) {}
          "function" == typeof r ||
            (null == r || (!1 === r && "-" !== t[4])
              ? e.removeAttribute(t)
              : e.setAttribute(t, r));
        }
      }
      function x(e) {
        if (this.l) {
          var t = this.l[e.type + !1];
          if (e.t) {
            if (e.t <= t.u) return;
          } else e.t = Date.now();
          return t(i.event ? i.event(e) : e);
        }
      }
      function L(e) {
        if (this.l) return this.l[e.type + !0](i.event ? i.event(e) : e);
      }
      function A(e, t, r, s, a, o, l, c, u, h) {
        var f,
          p,
          m,
          y,
          v,
          k,
          C,
          M,
          x,
          L,
          A,
          P,
          T,
          N,
          O,
          D = t.type;
        if (void 0 !== t.constructor) return null;
        128 & r.__u && ((u = !!(32 & r.__u)), (o = [(c = t.__e = r.__e)])),
          (f = i.__b) && f(t);
        e: if ("function" == typeof D)
          try {
            if (
              ((M = t.props),
              (x = (f = D.contextType) && s[f.__c]),
              (L = f ? (x ? x.props.value : f.__) : s),
              r.__c
                ? (C = (p = t.__c = r.__c).__ = p.__E)
                : ("prototype" in D && D.prototype.render
                    ? (t.__c = p = new D(M, L))
                    : ((t.__c = p = new E(M, L)),
                      (p.constructor = D),
                      (p.render = j)),
                  x && x.sub(p),
                  (p.props = M),
                  p.state || (p.state = {}),
                  (p.context = L),
                  (p.__n = s),
                  (m = p.__d = !0),
                  (p.__h = []),
                  (p._sb = [])),
              null == p.__s && (p.__s = p.state),
              null != D.getDerivedStateFromProps &&
                (p.__s == p.state && (p.__s = g({}, p.__s)),
                g(p.__s, D.getDerivedStateFromProps(M, p.__s))),
              (y = p.props),
              (v = p.state),
              (p.__v = t),
              m)
            )
              null == D.getDerivedStateFromProps &&
                null != p.componentWillMount &&
                p.componentWillMount(),
                null != p.componentDidMount && p.__h.push(p.componentDidMount);
            else {
              if (
                (null == D.getDerivedStateFromProps &&
                  M !== y &&
                  null != p.componentWillReceiveProps &&
                  p.componentWillReceiveProps(M, L),
                !p.__e &&
                  ((null != p.shouldComponentUpdate &&
                    !1 === p.shouldComponentUpdate(M, p.__s, L)) ||
                    t.__v === r.__v))
              ) {
                for (
                  t.__v !== r.__v &&
                    ((p.props = M), (p.state = p.__s), (p.__d = !1)),
                    t.__e = r.__e,
                    t.__k = r.__k,
                    t.__k.forEach(function (e) {
                      e && (e.__ = t);
                    }),
                    A = 0;
                  A < p._sb.length;
                  A++
                )
                  p.__h.push(p._sb[A]);
                (p._sb = []), p.__h.length && l.push(p);
                break e;
              }
              null != p.componentWillUpdate &&
                p.componentWillUpdate(M, p.__s, L),
                null != p.componentDidUpdate &&
                  p.__h.push(function () {
                    p.componentDidUpdate(y, v, k);
                  });
            }
            if (
              ((p.context = L),
              (p.props = M),
              (p.__P = e),
              (p.__e = !1),
              (P = i.__r),
              (T = 0),
              "prototype" in D && D.prototype.render)
            ) {
              for (
                p.state = p.__s,
                  p.__d = !1,
                  P && P(t),
                  f = p.render(p.props, p.state, p.context),
                  N = 0;
                N < p._sb.length;
                N++
              )
                p.__h.push(p._sb[N]);
              p._sb = [];
            } else
              do
                (p.__d = !1),
                  P && P(t),
                  (f = p.render(p.props, p.state, p.context)),
                  (p.state = p.__s);
              while (p.__d && ++T < 25);
            (p.state = p.__s),
              null != p.getChildContext &&
                (s = g(g({}, s), p.getChildContext())),
              m ||
                null == p.getSnapshotBeforeUpdate ||
                (k = p.getSnapshotBeforeUpdate(y, v)),
              I(
                e,
                _(
                  (O =
                    null != f && f.type === w && null == f.key
                      ? f.props.children
                      : f)
                )
                  ? O
                  : [O],
                t,
                r,
                s,
                a,
                o,
                l,
                c,
                u,
                h
              ),
              (p.base = t.__e),
              (t.__u &= -161),
              p.__h.length && l.push(p),
              C && (p.__E = p.__ = null);
          } catch (e) {
            (t.__v = null),
              u || null != o
                ? ((t.__e = c),
                  (t.__u |= u ? 160 : 32),
                  (o[o.indexOf(c)] = null))
                : ((t.__e = r.__e), (t.__k = r.__k)),
              i.__e(e, t, r);
          }
        else
          null == o && t.__v === r.__v
            ? ((t.__k = r.__k), (t.__e = r.__e))
            : (t.__e = (function (e, t, r, i, s, a, o, l, c) {
                var u,
                  h,
                  f,
                  p,
                  g,
                  m,
                  y,
                  v = r.props,
                  w = t.props,
                  E = t.type;
                if (("svg" === E && (s = !0), null != a)) {
                  for (u = 0; u < a.length; u++)
                    if (
                      (g = a[u]) &&
                      "setAttribute" in g == !!E &&
                      (E ? g.localName === E : 3 === g.nodeType)
                    ) {
                      (e = g), (a[u] = null);
                      break;
                    }
                }
                if (null == e) {
                  if (null === E) return document.createTextNode(w);
                  (e = s
                    ? document.createElementNS("http://www.w3.org/2000/svg", E)
                    : document.createElement(E, w.is && w)),
                    (a = null),
                    (l = !1);
                }
                if (null === E) v === w || (l && e.data === w) || (e.data = w);
                else {
                  if (
                    ((a = a && n.call(e.childNodes)),
                    (v = r.props || d),
                    !l && null != a)
                  )
                    for (v = {}, u = 0; u < e.attributes.length; u++)
                      v[(g = e.attributes[u]).name] = g.value;
                  for (u in v)
                    (g = v[u]),
                      "children" == u ||
                        ("dangerouslySetInnerHTML" == u
                          ? (f = g)
                          : "key" === u || u in w || R(e, u, null, g, s));
                  for (u in w)
                    (g = w[u]),
                      "children" == u
                        ? (p = g)
                        : "dangerouslySetInnerHTML" == u
                        ? (h = g)
                        : "value" == u
                        ? (m = g)
                        : "checked" == u
                        ? (y = g)
                        : "key" === u ||
                          (l && "function" != typeof g) ||
                          v[u] === g ||
                          R(e, u, g, v[u], s);
                  if (h)
                    l ||
                      (f &&
                        (h.__html === f.__html || h.__html === e.innerHTML)) ||
                      (e.innerHTML = h.__html),
                      (t.__k = []);
                  else if (
                    (f && (e.innerHTML = ""),
                    I(
                      e,
                      _(p) ? p : [p],
                      t,
                      r,
                      i,
                      s && "foreignObject" !== E,
                      a,
                      o,
                      a ? a[0] : r.__k && S(r, 0),
                      l,
                      c
                    ),
                    null != a)
                  )
                    for (u = a.length; u--; ) null != a[u] && b(a[u]);
                  l ||
                    ((u = "value"),
                    void 0 === m ||
                      (m === e[u] &&
                        ("progress" !== E || m) &&
                        ("option" !== E || m === v[u])) ||
                      R(e, u, m, v[u], !1),
                    (u = "checked"),
                    void 0 !== y && y !== e[u] && R(e, u, y, v[u], !1));
                }
                return e;
              })(r.__e, t, r, s, a, o, l, u, h));
        (f = i.diffed) && f(t);
      }
      function P(e, t, r) {
        t.__d = void 0;
        for (var n = 0; n < r.length; n++) T(r[n], r[++n], r[++n]);
        i.__c && i.__c(t, e),
          e.some(function (t) {
            try {
              (e = t.__h),
                (t.__h = []),
                e.some(function (e) {
                  e.call(t);
                });
            } catch (e) {
              i.__e(e, t.__v);
            }
          });
      }
      function T(e, t, r) {
        try {
          "function" == typeof e ? e(t) : (e.current = t);
        } catch (e) {
          i.__e(e, r);
        }
      }
      function N(e, t, r) {
        var n, s;
        if (
          (i.unmount && i.unmount(e),
          (n = e.ref) && ((n.current && n.current !== e.__e) || T(n, null, t)),
          null != (n = e.__c))
        ) {
          if (n.componentWillUnmount)
            try {
              n.componentWillUnmount();
            } catch (e) {
              i.__e(e, t);
            }
          (n.base = n.__P = null), (e.__c = void 0);
        }
        if ((n = e.__k))
          for (s = 0; s < n.length; s++)
            n[s] && N(n[s], t, r || "function" != typeof e.type);
        r || null == e.__e || b(e.__e), (e.__ = e.__e = e.__d = void 0);
      }
      function j(e, t, r) {
        return this.constructor(e, r);
      }
      function O(e, t, r) {
        var s, a, o, l;
        i.__ && i.__(e, t),
          (a = (s = "function" == typeof r) ? null : (r && r.__k) || t.__k),
          (o = []),
          (l = []),
          A(
            t,
            (e = ((!s && r) || t).__k = m(w, null, [e])),
            a || d,
            d,
            void 0 !== t.ownerSVGElement,
            !s && r
              ? [r]
              : a
              ? null
              : t.firstChild
              ? n.call(t.childNodes)
              : null,
            o,
            !s && r ? r : a ? a.__e : t.firstChild,
            s,
            l
          ),
          P(o, e, l);
      }
      function D(e, t) {
        O(e, t, D);
      }
      function U(e, t, r) {
        var i,
          s,
          a,
          o,
          l = g({}, e.props);
        for (a in (e.type && e.type.defaultProps && (o = e.type.defaultProps),
        t))
          "key" == a
            ? (i = t[a])
            : "ref" == a
            ? (s = t[a])
            : (l[a] = void 0 === t[a] && void 0 !== o ? o[a] : t[a]);
        return (
          arguments.length > 2 &&
            (l.children = arguments.length > 3 ? n.call(arguments, 2) : r),
          y(e.type, l, i || e.key, s || e.ref, null)
        );
      }
      function B(e, t) {
        var r = {
          __c: (t = "__cC" + h++),
          __: e,
          Consumer: function (e, t) {
            return e.children(t);
          },
          Provider: function (e) {
            var r, n;
            return (
              this.getChildContext ||
                ((r = []),
                ((n = {})[t] = this),
                (this.getChildContext = function () {
                  return n;
                }),
                (this.shouldComponentUpdate = function (e) {
                  this.props.value !== e.value &&
                    r.some(function (e) {
                      (e.__e = !0), k(e);
                    });
                }),
                (this.sub = function (e) {
                  r.push(e);
                  var t = e.componentWillUnmount;
                  e.componentWillUnmount = function () {
                    r.splice(r.indexOf(e), 1), t && t.call(e);
                  };
                })),
              e.children
            );
          },
        };
        return (r.Provider.__ = r.Consumer.contextType = r);
      }
      (n = f.slice),
        (i = {
          __e: function (e, t, r, n) {
            for (var i, s, a; (t = t.__); )
              if ((i = t.__c) && !i.__)
                try {
                  if (
                    ((s = i.constructor) &&
                      null != s.getDerivedStateFromError &&
                      (i.setState(s.getDerivedStateFromError(e)), (a = i.__d)),
                    null != i.componentDidCatch &&
                      (i.componentDidCatch(e, n || {}), (a = i.__d)),
                    a)
                  )
                    return (i.__E = i);
                } catch (t) {
                  e = t;
                }
            throw e;
          },
        }),
        (s = 0),
        (a = function (e) {
          return null != e && null == e.constructor;
        }),
        (E.prototype.setState = function (e, t) {
          var r;
          (r =
            null != this.__s && this.__s !== this.state
              ? this.__s
              : (this.__s = g({}, this.state))),
            "function" == typeof e && (e = e(g({}, r), this.props)),
            e && g(r, e),
            null != e && this.__v && (t && this._sb.push(t), k(this));
        }),
        (E.prototype.forceUpdate = function (e) {
          this.__v && ((this.__e = !0), e && this.__h.push(e), k(this));
        }),
        (E.prototype.render = w),
        (o = []),
        (c =
          "function" == typeof Promise
            ? Promise.prototype.then.bind(Promise.resolve())
            : setTimeout),
        (u = function (e, t) {
          return e.__v.__b - t.__v.__b;
        }),
        (C.__r = 0),
        (h = 0);
    },
    30396: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          useCallback: function () {
            return I;
          },
          useContext: function () {
            return M;
          },
          useDebugValue: function () {
            return R;
          },
          useEffect: function () {
            return w;
          },
          useErrorBoundary: function () {
            return x;
          },
          useId: function () {
            return L;
          },
          useImperativeHandle: function () {
            return k;
          },
          useLayoutEffect: function () {
            return E;
          },
          useMemo: function () {
            return C;
          },
          useReducer: function () {
            return v;
          },
          useRef: function () {
            return S;
          },
          useState: function () {
            return y;
          },
        });
      var n,
        i,
        s,
        a,
        o = r(6400),
        l = 0,
        c = [],
        u = [],
        h = o.options,
        d = h.__b,
        f = h.__r,
        p = h.diffed,
        _ = h.__c,
        g = h.unmount,
        b = h.__;
      function m(e, t) {
        h.__h && h.__h(i, e, l || t), (l = 0);
        var r = i.__H || (i.__H = { __: [], __h: [] });
        return e >= r.__.length && r.__.push({ __V: u }), r.__[e];
      }
      function y(e) {
        return (l = 1), v(O, e);
      }
      function v(e, t, r) {
        var s = m(n++, 2);
        if (
          ((s.t = e),
          !s.__c &&
            ((s.__ = [
              r ? r(t) : O(void 0, t),
              function (e) {
                var t = s.__N ? s.__N[0] : s.__[0],
                  r = s.t(t, e);
                t !== r && ((s.__N = [r, s.__[1]]), s.__c.setState({}));
              },
            ]),
            (s.__c = i),
            !i.u))
        ) {
          var a = function (e, t, r) {
            if (!s.__c.__H) return !0;
            var n = s.__c.__H.__.filter(function (e) {
              return !!e.__c;
            });
            if (
              n.every(function (e) {
                return !e.__N;
              })
            )
              return !o || o.call(this, e, t, r);
            var i = !1;
            return (
              n.forEach(function (e) {
                if (e.__N) {
                  var t = e.__[0];
                  (e.__ = e.__N), (e.__N = void 0), t !== e.__[0] && (i = !0);
                }
              }),
              !(!i && s.__c.props === e) && (!o || o.call(this, e, t, r))
            );
          };
          i.u = !0;
          var o = i.shouldComponentUpdate,
            l = i.componentWillUpdate;
          (i.componentWillUpdate = function (e, t, r) {
            if (this.__e) {
              var n = o;
              (o = void 0), a(e, t, r), (o = n);
            }
            l && l.call(this, e, t, r);
          }),
            (i.shouldComponentUpdate = a);
        }
        return s.__N || s.__;
      }
      function w(e, t) {
        var r = m(n++, 3);
        !h.__s && j(r.__H, t) && ((r.__ = e), (r.i = t), i.__H.__h.push(r));
      }
      function E(e, t) {
        var r = m(n++, 4);
        !h.__s && j(r.__H, t) && ((r.__ = e), (r.i = t), i.__h.push(r));
      }
      function S(e) {
        return (
          (l = 5),
          C(function () {
            return { current: e };
          }, [])
        );
      }
      function k(e, t, r) {
        (l = 6),
          E(
            function () {
              return "function" == typeof e
                ? (e(t()),
                  function () {
                    return e(null);
                  })
                : e
                ? ((e.current = t()),
                  function () {
                    return (e.current = null);
                  })
                : void 0;
            },
            null == r ? r : r.concat(e)
          );
      }
      function C(e, t) {
        var r = m(n++, 7);
        return j(r.__H, t)
          ? ((r.__V = e()), (r.i = t), (r.__h = e), r.__V)
          : r.__;
      }
      function I(e, t) {
        return (
          (l = 8),
          C(function () {
            return e;
          }, t)
        );
      }
      function M(e) {
        var t = i.context[e.__c],
          r = m(n++, 9);
        return (
          (r.c = e),
          t ? (null == r.__ && ((r.__ = !0), t.sub(i)), t.props.value) : e.__
        );
      }
      function R(e, t) {
        h.useDebugValue && h.useDebugValue(t ? t(e) : e);
      }
      function x(e) {
        var t = m(n++, 10),
          r = y();
        return (
          (t.__ = e),
          i.componentDidCatch ||
            (i.componentDidCatch = function (e, n) {
              t.__ && t.__(e, n), r[1](e);
            }),
          [
            r[0],
            function () {
              r[1](void 0);
            },
          ]
        );
      }
      function L() {
        var e = m(n++, 11);
        if (!e.__) {
          for (var t = i.__v; null !== t && !t.__m && null !== t.__; ) t = t.__;
          var r = t.__m || (t.__m = [0, 0]);
          e.__ = "P" + r[0] + "-" + r[1]++;
        }
        return e.__;
      }
      function A() {
        for (var e; (e = c.shift()); )
          if (e.__P && e.__H)
            try {
              e.__H.__h.forEach(T), e.__H.__h.forEach(N), (e.__H.__h = []);
            } catch (t) {
              (e.__H.__h = []), h.__e(t, e.__v);
            }
      }
      (h.__b = function (e) {
        (i = null), d && d(e);
      }),
        (h.__ = function (e, t) {
          e && t.__k && t.__k.__m && (e.__m = t.__k.__m), b && b(e, t);
        }),
        (h.__r = function (e) {
          f && f(e), (n = 0);
          var t = (i = e.__c).__H;
          t &&
            (s === i
              ? ((t.__h = []),
                (i.__h = []),
                t.__.forEach(function (e) {
                  e.__N && (e.__ = e.__N), (e.__V = u), (e.__N = e.i = void 0);
                }))
              : (t.__h.forEach(T), t.__h.forEach(N), (t.__h = []), (n = 0))),
            (s = i);
        }),
        (h.diffed = function (e) {
          p && p(e);
          var t = e.__c;
          t &&
            t.__H &&
            (t.__H.__h.length &&
              ((1 !== c.push(t) && a === h.requestAnimationFrame) ||
                (
                  (a = h.requestAnimationFrame) ||
                  function (e) {
                    var t,
                      r = function () {
                        clearTimeout(n),
                          P && cancelAnimationFrame(t),
                          setTimeout(e);
                      },
                      n = setTimeout(r, 100);
                    P && (t = requestAnimationFrame(r));
                  }
                )(A)),
            t.__H.__.forEach(function (e) {
              e.i && (e.__H = e.i),
                e.__V !== u && (e.__ = e.__V),
                (e.i = void 0),
                (e.__V = u);
            })),
            (s = i = null);
        }),
        (h.__c = function (e, t) {
          t.some(function (e) {
            try {
              e.__h.forEach(T),
                (e.__h = e.__h.filter(function (e) {
                  return !e.__ || N(e);
                }));
            } catch (r) {
              t.some(function (e) {
                e.__h && (e.__h = []);
              }),
                (t = []),
                h.__e(r, e.__v);
            }
          }),
            _ && _(e, t);
        }),
        (h.unmount = function (e) {
          g && g(e);
          var t,
            r = e.__c;
          r &&
            r.__H &&
            (r.__H.__.forEach(function (e) {
              try {
                T(e);
              } catch (e) {
                t = e;
              }
            }),
            (r.__H = void 0),
            t && h.__e(t, r.__v));
        });
      var P = "function" == typeof requestAnimationFrame;
      function T(e) {
        var t = i,
          r = e.__c;
        "function" == typeof r && ((e.__c = void 0), r()), (i = t);
      }
      function N(e) {
        var t = i;
        (e.__c = e.__()), (i = t);
      }
      function j(e, t) {
        return (
          !e ||
          e.length !== t.length ||
          t.some(function (t, r) {
            return t !== e[r];
          })
        );
      }
      function O(e, t) {
        return "function" == typeof t ? t(e) : t;
      }
    },
    94281: function (e) {
      "use strict";
      var t = {};
      function r(e, r, n) {
        n || (n = Error);
        var i = (function (e) {
          function t(t, n, i) {
            return e.call(this, "string" == typeof r ? r : r(t, n, i)) || this;
          }
          return (
            (t.prototype = Object.create(e.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = e),
            t
          );
        })(n);
        (i.prototype.name = n.name), (i.prototype.code = e), (t[e] = i);
      }
      function n(e, t) {
        if (!Array.isArray(e)) return "of ".concat(t, " ").concat(String(e));
        var r = e.length;
        return ((e = e.map(function (e) {
          return String(e);
        })),
        r > 2)
          ? "one of "
              .concat(t, " ")
              .concat(e.slice(0, r - 1).join(", "), ", or ") + e[r - 1]
          : 2 === r
          ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1])
          : "of ".concat(t, " ").concat(e[0]);
      }
      r(
        "ERR_INVALID_OPT_VALUE",
        function (e, t) {
          return 'The value "' + t + '" is invalid for option "' + e + '"';
        },
        TypeError
      ),
        r(
          "ERR_INVALID_ARG_TYPE",
          function (e, t, r) {
            if (
              ("string" == typeof t &&
              ((i = "not "), t.substr(!s || s < 0 ? 0 : +s, i.length) === i)
                ? ((c = "must not be"), (t = t.replace(/^not /, "")))
                : (c = "must be"),
              (a = " argument"),
              (void 0 === o || o > e.length) && (o = e.length),
              e.substring(o - a.length, o) === a)
            )
              u = "The ".concat(e, " ").concat(c, " ").concat(n(t, "type"));
            else {
              var i,
                s,
                a,
                o,
                l,
                c,
                u,
                h = ("number" != typeof l && (l = 0),
                l + 1 > e.length || -1 === e.indexOf(".", l))
                  ? "argument"
                  : "property";
              u = 'The "'
                .concat(e, '" ')
                .concat(h, " ")
                .concat(c, " ")
                .concat(n(t, "type"));
            }
            return u + ". Received type ".concat(typeof r);
          },
          TypeError
        ),
        r("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"),
        r("ERR_METHOD_NOT_IMPLEMENTED", function (e) {
          return "The " + e + " method is not implemented";
        }),
        r("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
        r("ERR_STREAM_DESTROYED", function (e) {
          return "Cannot call " + e + " after a stream was destroyed";
        }),
        r("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"),
        r("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"),
        r("ERR_STREAM_WRITE_AFTER_END", "write after end"),
        r(
          "ERR_STREAM_NULL_VALUES",
          "May not write null values to stream",
          TypeError
        ),
        r(
          "ERR_UNKNOWN_ENCODING",
          function (e) {
            return "Unknown encoding: " + e;
          },
          TypeError
        ),
        r(
          "ERR_STREAM_UNSHIFT_AFTER_END_EVENT",
          "stream.unshift() after end event"
        ),
        (e.exports.q = t);
    },
    56753: function (e, t, r) {
      "use strict";
      var n = r(34155),
        i =
          Object.keys ||
          function (e) {
            var t = [];
            for (var r in e) t.push(r);
            return t;
          };
      e.exports = u;
      var s = r(79481),
        a = r(64229);
      r(35717)(u, s);
      for (var o = i(a.prototype), l = 0; l < o.length; l++) {
        var c = o[l];
        u.prototype[c] || (u.prototype[c] = a.prototype[c]);
      }
      function u(e) {
        if (!(this instanceof u)) return new u(e);
        s.call(this, e),
          a.call(this, e),
          (this.allowHalfOpen = !0),
          e &&
            (!1 === e.readable && (this.readable = !1),
            !1 === e.writable && (this.writable = !1),
            !1 === e.allowHalfOpen &&
              ((this.allowHalfOpen = !1), this.once("end", h)));
      }
      function h() {
        this._writableState.ended || n.nextTick(d, this);
      }
      function d(e) {
        e.end();
      }
      Object.defineProperty(u.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function () {
          return this._writableState.highWaterMark;
        },
      }),
        Object.defineProperty(u.prototype, "writableBuffer", {
          enumerable: !1,
          get: function () {
            return this._writableState && this._writableState.getBuffer();
          },
        }),
        Object.defineProperty(u.prototype, "writableLength", {
          enumerable: !1,
          get: function () {
            return this._writableState.length;
          },
        }),
        Object.defineProperty(u.prototype, "destroyed", {
          enumerable: !1,
          get: function () {
            return (
              void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              this._readableState.destroyed &&
              this._writableState.destroyed
            );
          },
          set: function (e) {
            void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              ((this._readableState.destroyed = e),
              (this._writableState.destroyed = e));
          },
        });
    },
    82725: function (e, t, r) {
      "use strict";
      e.exports = i;
      var n = r(74605);
      function i(e) {
        if (!(this instanceof i)) return new i(e);
        n.call(this, e);
      }
      r(35717)(i, n),
        (i.prototype._transform = function (e, t, r) {
          r(null, e);
        });
    },
    79481: function (e, t, r) {
      "use strict";
      var n,
        i,
        s,
        a,
        o,
        l = r(34155);
      (e.exports = C), (C.ReadableState = k), r(17187).EventEmitter;
      var c = function (e, t) {
          return e.listeners(t).length;
        },
        u = r(22503),
        h = r(48764).Buffer,
        d =
          (void 0 !== r.g
            ? r.g
            : "undefined" != typeof window
            ? window
            : "undefined" != typeof self
            ? self
            : {}
          ).Uint8Array || function () {},
        f = r(94616);
      i = f && f.debuglog ? f.debuglog("stream") : function () {};
      var p = r(57327),
        _ = r(61195),
        g = r(82457).getHighWaterMark,
        b = r(94281).q,
        m = b.ERR_INVALID_ARG_TYPE,
        y = b.ERR_STREAM_PUSH_AFTER_EOF,
        v = b.ERR_METHOD_NOT_IMPLEMENTED,
        w = b.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
      r(35717)(C, u);
      var E = _.errorOrDestroy,
        S = ["error", "close", "destroy", "pause", "resume"];
      function k(e, t, i) {
        (n = n || r(56753)),
          (e = e || {}),
          "boolean" != typeof i && (i = t instanceof n),
          (this.objectMode = !!e.objectMode),
          i && (this.objectMode = this.objectMode || !!e.readableObjectMode),
          (this.highWaterMark = g(this, e, "readableHighWaterMark", i)),
          (this.buffer = new p()),
          (this.length = 0),
          (this.pipes = null),
          (this.pipesCount = 0),
          (this.flowing = null),
          (this.ended = !1),
          (this.endEmitted = !1),
          (this.reading = !1),
          (this.sync = !0),
          (this.needReadable = !1),
          (this.emittedReadable = !1),
          (this.readableListening = !1),
          (this.resumeScheduled = !1),
          (this.paused = !0),
          (this.emitClose = !1 !== e.emitClose),
          (this.autoDestroy = !!e.autoDestroy),
          (this.destroyed = !1),
          (this.defaultEncoding = e.defaultEncoding || "utf8"),
          (this.awaitDrain = 0),
          (this.readingMore = !1),
          (this.decoder = null),
          (this.encoding = null),
          e.encoding &&
            (s || (s = r(32553).s),
            (this.decoder = new s(e.encoding)),
            (this.encoding = e.encoding));
      }
      function C(e) {
        if (((n = n || r(56753)), !(this instanceof C))) return new C(e);
        var t = this instanceof n;
        (this._readableState = new k(e, this, t)),
          (this.readable = !0),
          e &&
            ("function" == typeof e.read && (this._read = e.read),
            "function" == typeof e.destroy && (this._destroy = e.destroy)),
          u.call(this);
      }
      function I(e, t, r, n, s) {
        i("readableAddChunk", t);
        var a,
          o,
          l,
          c,
          u,
          f = e._readableState;
        if (null === t)
          (f.reading = !1),
            (function (e, t) {
              if ((i("onEofChunk"), !t.ended)) {
                if (t.decoder) {
                  var r = t.decoder.end();
                  r &&
                    r.length &&
                    (t.buffer.push(r),
                    (t.length += t.objectMode ? 1 : r.length));
                }
                (t.ended = !0),
                  t.sync
                    ? x(e)
                    : ((t.needReadable = !1),
                      t.emittedReadable || ((t.emittedReadable = !0), L(e)));
              }
            })(e, f);
        else {
          if (
            (s ||
              ((a = f),
              (o = t),
              h.isBuffer(o) ||
                o instanceof d ||
                "string" == typeof o ||
                void 0 === o ||
                a.objectMode ||
                (l = new m("chunk", ["string", "Buffer", "Uint8Array"], o)),
              (u = l)),
            u)
          )
            E(e, u);
          else if (f.objectMode || (t && t.length > 0)) {
            if (
              ("string" == typeof t ||
                f.objectMode ||
                Object.getPrototypeOf(t) === h.prototype ||
                ((c = t), (t = h.from(c))),
              n)
            )
              f.endEmitted ? E(e, new w()) : M(e, f, t, !0);
            else if (f.ended) E(e, new y());
            else {
              if (f.destroyed) return !1;
              (f.reading = !1),
                f.decoder && !r
                  ? ((t = f.decoder.write(t)),
                    f.objectMode || 0 !== t.length ? M(e, f, t, !1) : A(e, f))
                  : M(e, f, t, !1);
            }
          } else n || ((f.reading = !1), A(e, f));
        }
        return !f.ended && (f.length < f.highWaterMark || 0 === f.length);
      }
      function M(e, t, r, n) {
        t.flowing && 0 === t.length && !t.sync
          ? ((t.awaitDrain = 0), e.emit("data", r))
          : ((t.length += t.objectMode ? 1 : r.length),
            n ? t.buffer.unshift(r) : t.buffer.push(r),
            t.needReadable && x(e)),
          A(e, t);
      }
      function R(e, t) {
        if (e <= 0 || (0 === t.length && t.ended)) return 0;
        if (t.objectMode) return 1;
        if (e != e)
          return t.flowing && t.length ? t.buffer.head.data.length : t.length;
        if (e > t.highWaterMark) {
          var r;
          t.highWaterMark =
            ((r = e) >= 1073741824
              ? (r = 1073741824)
              : (r--,
                (r |= r >>> 1),
                (r |= r >>> 2),
                (r |= r >>> 4),
                (r |= r >>> 8),
                (r |= r >>> 16),
                r++),
            r);
        }
        return e <= t.length
          ? e
          : t.ended
          ? t.length
          : ((t.needReadable = !0), 0);
      }
      function x(e) {
        var t = e._readableState;
        i("emitReadable", t.needReadable, t.emittedReadable),
          (t.needReadable = !1),
          t.emittedReadable ||
            (i("emitReadable", t.flowing),
            (t.emittedReadable = !0),
            l.nextTick(L, e));
      }
      function L(e) {
        var t = e._readableState;
        i("emitReadable_", t.destroyed, t.length, t.ended),
          !t.destroyed &&
            (t.length || t.ended) &&
            (e.emit("readable"), (t.emittedReadable = !1)),
          (t.needReadable =
            !t.flowing && !t.ended && t.length <= t.highWaterMark),
          O(e);
      }
      function A(e, t) {
        t.readingMore || ((t.readingMore = !0), l.nextTick(P, e, t));
      }
      function P(e, t) {
        for (
          ;
          !t.reading &&
          !t.ended &&
          (t.length < t.highWaterMark || (t.flowing && 0 === t.length));

        ) {
          var r = t.length;
          if ((i("maybeReadMore read 0"), e.read(0), r === t.length)) break;
        }
        t.readingMore = !1;
      }
      function T(e) {
        var t = e._readableState;
        (t.readableListening = e.listenerCount("readable") > 0),
          t.resumeScheduled && !t.paused
            ? (t.flowing = !0)
            : e.listenerCount("data") > 0 && e.resume();
      }
      function N(e) {
        i("readable nexttick read 0"), e.read(0);
      }
      function j(e, t) {
        i("resume", t.reading),
          t.reading || e.read(0),
          (t.resumeScheduled = !1),
          e.emit("resume"),
          O(e),
          t.flowing && !t.reading && e.read(0);
      }
      function O(e) {
        var t = e._readableState;
        for (i("flow", t.flowing); t.flowing && null !== e.read(); );
      }
      function D(e, t) {
        var r;
        return 0 === t.length
          ? null
          : (t.objectMode
              ? (r = t.buffer.shift())
              : !e || e >= t.length
              ? ((r = t.decoder
                  ? t.buffer.join("")
                  : 1 === t.buffer.length
                  ? t.buffer.first()
                  : t.buffer.concat(t.length)),
                t.buffer.clear())
              : (r = t.buffer.consume(e, t.decoder)),
            r);
      }
      function U(e) {
        var t = e._readableState;
        i("endReadable", t.endEmitted),
          t.endEmitted || ((t.ended = !0), l.nextTick(B, t, e));
      }
      function B(e, t) {
        if (
          (i("endReadableNT", e.endEmitted, e.length),
          !e.endEmitted &&
            0 === e.length &&
            ((e.endEmitted = !0),
            (t.readable = !1),
            t.emit("end"),
            e.autoDestroy))
        ) {
          var r = t._writableState;
          (!r || (r.autoDestroy && r.finished)) && t.destroy();
        }
      }
      function W(e, t) {
        for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
        return -1;
      }
      Object.defineProperty(C.prototype, "destroyed", {
        enumerable: !1,
        get: function () {
          return (
            void 0 !== this._readableState && this._readableState.destroyed
          );
        },
        set: function (e) {
          this._readableState && (this._readableState.destroyed = e);
        },
      }),
        (C.prototype.destroy = _.destroy),
        (C.prototype._undestroy = _.undestroy),
        (C.prototype._destroy = function (e, t) {
          t(e);
        }),
        (C.prototype.push = function (e, t) {
          var r,
            n = this._readableState;
          return (
            n.objectMode
              ? (r = !0)
              : "string" == typeof e &&
                ((t = t || n.defaultEncoding) !== n.encoding &&
                  ((e = h.from(e, t)), (t = "")),
                (r = !0)),
            I(this, e, t, !1, r)
          );
        }),
        (C.prototype.unshift = function (e) {
          return I(this, e, null, !0, !1);
        }),
        (C.prototype.isPaused = function () {
          return !1 === this._readableState.flowing;
        }),
        (C.prototype.setEncoding = function (e) {
          s || (s = r(32553).s);
          var t = new s(e);
          (this._readableState.decoder = t),
            (this._readableState.encoding =
              this._readableState.decoder.encoding);
          for (var n = this._readableState.buffer.head, i = ""; null !== n; )
            (i += t.write(n.data)), (n = n.next);
          return (
            this._readableState.buffer.clear(),
            "" !== i && this._readableState.buffer.push(i),
            (this._readableState.length = i.length),
            this
          );
        }),
        (C.prototype.read = function (e) {
          i("read", e), (e = parseInt(e, 10));
          var t,
            r = this._readableState,
            n = e;
          if (
            (0 !== e && (r.emittedReadable = !1),
            0 === e &&
              r.needReadable &&
              ((0 !== r.highWaterMark
                ? r.length >= r.highWaterMark
                : r.length > 0) ||
                r.ended))
          )
            return (
              i("read: emitReadable", r.length, r.ended),
              0 === r.length && r.ended ? U(this) : x(this),
              null
            );
          if (0 === (e = R(e, r)) && r.ended)
            return 0 === r.length && U(this), null;
          var s = r.needReadable;
          return (
            i("need readable", s),
            (0 === r.length || r.length - e < r.highWaterMark) &&
              i("length less than watermark", (s = !0)),
            r.ended || r.reading
              ? i("reading or ended", (s = !1))
              : s &&
                (i("do read"),
                (r.reading = !0),
                (r.sync = !0),
                0 === r.length && (r.needReadable = !0),
                this._read(r.highWaterMark),
                (r.sync = !1),
                r.reading || (e = R(n, r))),
            null === (t = e > 0 ? D(e, r) : null)
              ? ((r.needReadable = r.length <= r.highWaterMark), (e = 0))
              : ((r.length -= e), (r.awaitDrain = 0)),
            0 === r.length &&
              (r.ended || (r.needReadable = !0), n !== e && r.ended && U(this)),
            null !== t && this.emit("data", t),
            t
          );
        }),
        (C.prototype._read = function (e) {
          E(this, new v("_read()"));
        }),
        (C.prototype.pipe = function (e, t) {
          var r = this,
            n = this._readableState;
          switch (n.pipesCount) {
            case 0:
              n.pipes = e;
              break;
            case 1:
              n.pipes = [n.pipes, e];
              break;
            default:
              n.pipes.push(e);
          }
          (n.pipesCount += 1), i("pipe count=%d opts=%j", n.pipesCount, t);
          var s =
            (t && !1 === t.end) || e === l.stdout || e === l.stderr ? _ : a;
          function a() {
            i("onend"), e.end();
          }
          n.endEmitted ? l.nextTick(s) : r.once("end", s),
            e.on("unpipe", function t(s, l) {
              i("onunpipe"),
                s === r &&
                  l &&
                  !1 === l.hasUnpiped &&
                  ((l.hasUnpiped = !0),
                  i("cleanup"),
                  e.removeListener("close", f),
                  e.removeListener("finish", p),
                  e.removeListener("drain", o),
                  e.removeListener("error", d),
                  e.removeListener("unpipe", t),
                  r.removeListener("end", a),
                  r.removeListener("end", _),
                  r.removeListener("data", h),
                  (u = !0),
                  n.awaitDrain &&
                    (!e._writableState || e._writableState.needDrain) &&
                    o());
            });
          var o = function () {
            var e = r._readableState;
            i("pipeOnDrain", e.awaitDrain),
              e.awaitDrain && e.awaitDrain--,
              0 === e.awaitDrain && c(r, "data") && ((e.flowing = !0), O(r));
          };
          e.on("drain", o);
          var u = !1;
          function h(t) {
            i("ondata");
            var s = e.write(t);
            i("dest.write", s),
              !1 === s &&
                (((1 === n.pipesCount && n.pipes === e) ||
                  (n.pipesCount > 1 && -1 !== W(n.pipes, e))) &&
                  !u &&
                  (i("false write response, pause", n.awaitDrain),
                  n.awaitDrain++),
                r.pause());
          }
          function d(t) {
            i("onerror", t),
              _(),
              e.removeListener("error", d),
              0 === c(e, "error") && E(e, t);
          }
          function f() {
            e.removeListener("finish", p), _();
          }
          function p() {
            i("onfinish"), e.removeListener("close", f), _();
          }
          function _() {
            i("unpipe"), r.unpipe(e);
          }
          return (
            r.on("data", h),
            (function (e, t, r) {
              if ("function" == typeof e.prependListener)
                return e.prependListener(t, r);
              e._events && e._events[t]
                ? Array.isArray(e._events[t])
                  ? e._events[t].unshift(r)
                  : (e._events[t] = [r, e._events[t]])
                : e.on(t, r);
            })(e, "error", d),
            e.once("close", f),
            e.once("finish", p),
            e.emit("pipe", r),
            n.flowing || (i("pipe resume"), r.resume()),
            e
          );
        }),
        (C.prototype.unpipe = function (e) {
          var t = this._readableState,
            r = { hasUnpiped: !1 };
          if (0 === t.pipesCount) return this;
          if (1 === t.pipesCount)
            return (
              (e && e !== t.pipes) ||
                (e || (e = t.pipes),
                (t.pipes = null),
                (t.pipesCount = 0),
                (t.flowing = !1),
                e && e.emit("unpipe", this, r)),
              this
            );
          if (!e) {
            var n = t.pipes,
              i = t.pipesCount;
            (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1);
            for (var s = 0; s < i; s++)
              n[s].emit("unpipe", this, { hasUnpiped: !1 });
            return this;
          }
          var a = W(t.pipes, e);
          return (
            -1 === a ||
              (t.pipes.splice(a, 1),
              (t.pipesCount -= 1),
              1 === t.pipesCount && (t.pipes = t.pipes[0]),
              e.emit("unpipe", this, r)),
            this
          );
        }),
        (C.prototype.on = function (e, t) {
          var r = u.prototype.on.call(this, e, t),
            n = this._readableState;
          return (
            "data" === e
              ? ((n.readableListening = this.listenerCount("readable") > 0),
                !1 !== n.flowing && this.resume())
              : "readable" !== e ||
                n.endEmitted ||
                n.readableListening ||
                ((n.readableListening = n.needReadable = !0),
                (n.flowing = !1),
                (n.emittedReadable = !1),
                i("on readable", n.length, n.reading),
                n.length ? x(this) : n.reading || l.nextTick(N, this)),
            r
          );
        }),
        (C.prototype.addListener = C.prototype.on),
        (C.prototype.removeListener = function (e, t) {
          var r = u.prototype.removeListener.call(this, e, t);
          return "readable" === e && l.nextTick(T, this), r;
        }),
        (C.prototype.removeAllListeners = function (e) {
          var t = u.prototype.removeAllListeners.apply(this, arguments);
          return ("readable" === e || void 0 === e) && l.nextTick(T, this), t;
        }),
        (C.prototype.resume = function () {
          var e = this._readableState;
          return (
            e.flowing ||
              (i("resume"),
              (e.flowing = !e.readableListening),
              e.resumeScheduled ||
                ((e.resumeScheduled = !0), l.nextTick(j, this, e))),
            (e.paused = !1),
            this
          );
        }),
        (C.prototype.pause = function () {
          return (
            i("call pause flowing=%j", this._readableState.flowing),
            !1 !== this._readableState.flowing &&
              (i("pause"),
              (this._readableState.flowing = !1),
              this.emit("pause")),
            (this._readableState.paused = !0),
            this
          );
        }),
        (C.prototype.wrap = function (e) {
          var t = this,
            r = this._readableState,
            n = !1;
          for (var s in (e.on("end", function () {
            if ((i("wrapped end"), r.decoder && !r.ended)) {
              var e = r.decoder.end();
              e && e.length && t.push(e);
            }
            t.push(null);
          }),
          e.on("data", function (s) {
            i("wrapped data"),
              r.decoder && (s = r.decoder.write(s)),
              (!r.objectMode || null != s) &&
                (r.objectMode || (s && s.length)) &&
                (t.push(s) || ((n = !0), e.pause()));
          }),
          e))
            void 0 === this[s] &&
              "function" == typeof e[s] &&
              (this[s] = (function (t) {
                return function () {
                  return e[t].apply(e, arguments);
                };
              })(s));
          for (var a = 0; a < S.length; a++)
            e.on(S[a], this.emit.bind(this, S[a]));
          return (
            (this._read = function (t) {
              i("wrapped _read", t), n && ((n = !1), e.resume());
            }),
            this
          );
        }),
        "function" == typeof Symbol &&
          (C.prototype[Symbol.asyncIterator] = function () {
            return void 0 === a && (a = r(45850)), a(this);
          }),
        Object.defineProperty(C.prototype, "readableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._readableState.highWaterMark;
          },
        }),
        Object.defineProperty(C.prototype, "readableBuffer", {
          enumerable: !1,
          get: function () {
            return this._readableState && this._readableState.buffer;
          },
        }),
        Object.defineProperty(C.prototype, "readableFlowing", {
          enumerable: !1,
          get: function () {
            return this._readableState.flowing;
          },
          set: function (e) {
            this._readableState && (this._readableState.flowing = e);
          },
        }),
        (C._fromList = D),
        Object.defineProperty(C.prototype, "readableLength", {
          enumerable: !1,
          get: function () {
            return this._readableState.length;
          },
        }),
        "function" == typeof Symbol &&
          (C.from = function (e, t) {
            return void 0 === o && (o = r(15167)), o(C, e, t);
          });
    },
    74605: function (e, t, r) {
      "use strict";
      e.exports = u;
      var n = r(94281).q,
        i = n.ERR_METHOD_NOT_IMPLEMENTED,
        s = n.ERR_MULTIPLE_CALLBACK,
        a = n.ERR_TRANSFORM_ALREADY_TRANSFORMING,
        o = n.ERR_TRANSFORM_WITH_LENGTH_0,
        l = r(56753);
      function c(e, t) {
        var r = this._transformState;
        r.transforming = !1;
        var n = r.writecb;
        if (null === n) return this.emit("error", new s());
        (r.writechunk = null),
          (r.writecb = null),
          null != t && this.push(t),
          n(e);
        var i = this._readableState;
        (i.reading = !1),
          (i.needReadable || i.length < i.highWaterMark) &&
            this._read(i.highWaterMark);
      }
      function u(e) {
        if (!(this instanceof u)) return new u(e);
        l.call(this, e),
          (this._transformState = {
            afterTransform: c.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null,
          }),
          (this._readableState.needReadable = !0),
          (this._readableState.sync = !1),
          e &&
            ("function" == typeof e.transform &&
              (this._transform = e.transform),
            "function" == typeof e.flush && (this._flush = e.flush)),
          this.on("prefinish", h);
      }
      function h() {
        var e = this;
        "function" != typeof this._flush || this._readableState.destroyed
          ? d(this, null, null)
          : this._flush(function (t, r) {
              d(e, t, r);
            });
      }
      function d(e, t, r) {
        if (t) return e.emit("error", t);
        if ((null != r && e.push(r), e._writableState.length)) throw new o();
        if (e._transformState.transforming) throw new a();
        return e.push(null);
      }
      r(35717)(u, l),
        (u.prototype.push = function (e, t) {
          return (
            (this._transformState.needTransform = !1),
            l.prototype.push.call(this, e, t)
          );
        }),
        (u.prototype._transform = function (e, t, r) {
          r(new i("_transform()"));
        }),
        (u.prototype._write = function (e, t, r) {
          var n = this._transformState;
          if (
            ((n.writecb = r),
            (n.writechunk = e),
            (n.writeencoding = t),
            !n.transforming)
          ) {
            var i = this._readableState;
            (n.needTransform || i.needReadable || i.length < i.highWaterMark) &&
              this._read(i.highWaterMark);
          }
        }),
        (u.prototype._read = function (e) {
          var t = this._transformState;
          null === t.writechunk || t.transforming
            ? (t.needTransform = !0)
            : ((t.transforming = !0),
              this._transform(t.writechunk, t.writeencoding, t.afterTransform));
        }),
        (u.prototype._destroy = function (e, t) {
          l.prototype._destroy.call(this, e, function (e) {
            t(e);
          });
        });
    },
    64229: function (e, t, r) {
      "use strict";
      var n,
        i,
        s = r(34155);
      function a(e) {
        var t = this;
        (this.next = null),
          (this.entry = null),
          (this.finish = function () {
            (function (e, t, r) {
              var n = e.entry;
              for (e.entry = null; n; ) {
                var i = n.callback;
                t.pendingcb--, i(void 0), (n = n.next);
              }
              t.corkedRequestsFree.next = e;
            })(t, e);
          });
      }
      (e.exports = C), (C.WritableState = k);
      var o = { deprecate: r(94927) },
        l = r(22503),
        c = r(48764).Buffer,
        u =
          (void 0 !== r.g
            ? r.g
            : "undefined" != typeof window
            ? window
            : "undefined" != typeof self
            ? self
            : {}
          ).Uint8Array || function () {},
        h = r(61195),
        d = r(82457).getHighWaterMark,
        f = r(94281).q,
        p = f.ERR_INVALID_ARG_TYPE,
        _ = f.ERR_METHOD_NOT_IMPLEMENTED,
        g = f.ERR_MULTIPLE_CALLBACK,
        b = f.ERR_STREAM_CANNOT_PIPE,
        m = f.ERR_STREAM_DESTROYED,
        y = f.ERR_STREAM_NULL_VALUES,
        v = f.ERR_STREAM_WRITE_AFTER_END,
        w = f.ERR_UNKNOWN_ENCODING,
        E = h.errorOrDestroy;
      function S() {}
      function k(e, t, i) {
        (n = n || r(56753)),
          (e = e || {}),
          "boolean" != typeof i && (i = t instanceof n),
          (this.objectMode = !!e.objectMode),
          i && (this.objectMode = this.objectMode || !!e.writableObjectMode),
          (this.highWaterMark = d(this, e, "writableHighWaterMark", i)),
          (this.finalCalled = !1),
          (this.needDrain = !1),
          (this.ending = !1),
          (this.ended = !1),
          (this.finished = !1),
          (this.destroyed = !1);
        var o = !1 === e.decodeStrings;
        (this.decodeStrings = !o),
          (this.defaultEncoding = e.defaultEncoding || "utf8"),
          (this.length = 0),
          (this.writing = !1),
          (this.corked = 0),
          (this.sync = !0),
          (this.bufferProcessing = !1),
          (this.onwrite = function (e) {
            (function (e, t) {
              var r = e._writableState,
                n = r.sync,
                i = r.writecb;
              if ("function" != typeof i) throw new g();
              if (
                ((r.writing = !1),
                (r.writecb = null),
                (r.length -= r.writelen),
                (r.writelen = 0),
                t)
              )
                --r.pendingcb,
                  n
                    ? (s.nextTick(i, t),
                      s.nextTick(A, e, r),
                      (e._writableState.errorEmitted = !0),
                      E(e, t))
                    : (i(t),
                      (e._writableState.errorEmitted = !0),
                      E(e, t),
                      A(e, r));
              else {
                var a = x(r) || e.destroyed;
                a ||
                  r.corked ||
                  r.bufferProcessing ||
                  !r.bufferedRequest ||
                  R(e, r),
                  n ? s.nextTick(M, e, r, a, i) : M(e, r, a, i);
              }
            })(t, e);
          }),
          (this.writecb = null),
          (this.writelen = 0),
          (this.bufferedRequest = null),
          (this.lastBufferedRequest = null),
          (this.pendingcb = 0),
          (this.prefinished = !1),
          (this.errorEmitted = !1),
          (this.emitClose = !1 !== e.emitClose),
          (this.autoDestroy = !!e.autoDestroy),
          (this.bufferedRequestCount = 0),
          (this.corkedRequestsFree = new a(this));
      }
      function C(e) {
        var t = this instanceof (n = n || r(56753));
        if (!t && !i.call(C, this)) return new C(e);
        (this._writableState = new k(e, this, t)),
          (this.writable = !0),
          e &&
            ("function" == typeof e.write && (this._write = e.write),
            "function" == typeof e.writev && (this._writev = e.writev),
            "function" == typeof e.destroy && (this._destroy = e.destroy),
            "function" == typeof e.final && (this._final = e.final)),
          l.call(this);
      }
      function I(e, t, r, n, i, s, a) {
        (t.writelen = n),
          (t.writecb = a),
          (t.writing = !0),
          (t.sync = !0),
          t.destroyed
            ? t.onwrite(new m("write"))
            : r
            ? e._writev(i, t.onwrite)
            : e._write(i, s, t.onwrite),
          (t.sync = !1);
      }
      function M(e, t, r, n) {
        r ||
          (0 === t.length &&
            t.needDrain &&
            ((t.needDrain = !1), e.emit("drain"))),
          t.pendingcb--,
          n(),
          A(e, t);
      }
      function R(e, t) {
        t.bufferProcessing = !0;
        var r = t.bufferedRequest;
        if (e._writev && r && r.next) {
          var n = Array(t.bufferedRequestCount),
            i = t.corkedRequestsFree;
          i.entry = r;
          for (var s = 0, o = !0; r; )
            (n[s] = r), r.isBuf || (o = !1), (r = r.next), (s += 1);
          (n.allBuffers = o),
            I(e, t, !0, t.length, n, "", i.finish),
            t.pendingcb++,
            (t.lastBufferedRequest = null),
            i.next
              ? ((t.corkedRequestsFree = i.next), (i.next = null))
              : (t.corkedRequestsFree = new a(t)),
            (t.bufferedRequestCount = 0);
        } else {
          for (; r; ) {
            var l = r.chunk,
              c = r.encoding,
              u = r.callback,
              h = t.objectMode ? 1 : l.length;
            if (
              (I(e, t, !1, h, l, c, u),
              (r = r.next),
              t.bufferedRequestCount--,
              t.writing)
            )
              break;
          }
          null === r && (t.lastBufferedRequest = null);
        }
        (t.bufferedRequest = r), (t.bufferProcessing = !1);
      }
      function x(e) {
        return (
          e.ending &&
          0 === e.length &&
          null === e.bufferedRequest &&
          !e.finished &&
          !e.writing
        );
      }
      function L(e, t) {
        e._final(function (r) {
          t.pendingcb--,
            r && E(e, r),
            (t.prefinished = !0),
            e.emit("prefinish"),
            A(e, t);
        });
      }
      function A(e, t) {
        var r = x(t);
        if (
          r &&
          (t.prefinished ||
            t.finalCalled ||
            ("function" != typeof e._final || t.destroyed
              ? ((t.prefinished = !0), e.emit("prefinish"))
              : (t.pendingcb++, (t.finalCalled = !0), s.nextTick(L, e, t))),
          0 === t.pendingcb &&
            ((t.finished = !0), e.emit("finish"), t.autoDestroy))
        ) {
          var n = e._readableState;
          (!n || (n.autoDestroy && n.endEmitted)) && e.destroy();
        }
        return r;
      }
      r(35717)(C, l),
        (k.prototype.getBuffer = function () {
          for (var e = this.bufferedRequest, t = []; e; )
            t.push(e), (e = e.next);
          return t;
        }),
        (function () {
          try {
            Object.defineProperty(k.prototype, "buffer", {
              get: o.deprecate(
                function () {
                  return this.getBuffer();
                },
                "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                "DEP0003"
              ),
            });
          } catch (e) {}
        })(),
        "function" == typeof Symbol &&
        Symbol.hasInstance &&
        "function" == typeof Function.prototype[Symbol.hasInstance]
          ? ((i = Function.prototype[Symbol.hasInstance]),
            Object.defineProperty(C, Symbol.hasInstance, {
              value: function (e) {
                return (
                  !!i.call(this, e) ||
                  (this === C && e && e._writableState instanceof k)
                );
              },
            }))
          : (i = function (e) {
              return e instanceof this;
            }),
        (C.prototype.pipe = function () {
          E(this, new b());
        }),
        (C.prototype.write = function (e, t, r) {
          var n,
            i,
            a,
            o,
            l,
            h,
            d,
            f = this._writableState,
            _ = !1,
            g = !f.objectMode && ((n = e), c.isBuffer(n) || n instanceof u);
          return (
            g && !c.isBuffer(e) && ((i = e), (e = c.from(i))),
            ("function" == typeof t && ((r = t), (t = null)),
            g ? (t = "buffer") : t || (t = f.defaultEncoding),
            "function" != typeof r && (r = S),
            f.ending)
              ? ((a = r), E(this, (o = new v())), s.nextTick(a, o))
              : (g ||
                  ((l = e),
                  (h = r),
                  null === l
                    ? (d = new y())
                    : "string" == typeof l ||
                      f.objectMode ||
                      (d = new p("chunk", ["string", "Buffer"], l)),
                  !d || (E(this, d), s.nextTick(h, d), 0))) &&
                (f.pendingcb++,
                (_ = (function (e, t, r, n, i, s) {
                  if (!r) {
                    var a,
                      o,
                      l =
                        ((a = n),
                        (o = i),
                        t.objectMode ||
                          !1 === t.decodeStrings ||
                          "string" != typeof a ||
                          (a = c.from(a, o)),
                        a);
                    n !== l && ((r = !0), (i = "buffer"), (n = l));
                  }
                  var u = t.objectMode ? 1 : n.length;
                  t.length += u;
                  var h = t.length < t.highWaterMark;
                  if ((h || (t.needDrain = !0), t.writing || t.corked)) {
                    var d = t.lastBufferedRequest;
                    (t.lastBufferedRequest = {
                      chunk: n,
                      encoding: i,
                      isBuf: r,
                      callback: s,
                      next: null,
                    }),
                      d
                        ? (d.next = t.lastBufferedRequest)
                        : (t.bufferedRequest = t.lastBufferedRequest),
                      (t.bufferedRequestCount += 1);
                  } else I(e, t, !1, u, n, i, s);
                  return h;
                })(this, f, g, e, t, r))),
            _
          );
        }),
        (C.prototype.cork = function () {
          this._writableState.corked++;
        }),
        (C.prototype.uncork = function () {
          var e = this._writableState;
          !e.corked ||
            (e.corked--,
            e.writing ||
              e.corked ||
              e.bufferProcessing ||
              !e.bufferedRequest ||
              R(this, e));
        }),
        (C.prototype.setDefaultEncoding = function (e) {
          if (
            ("string" == typeof e && (e = e.toLowerCase()),
            !(
              [
                "hex",
                "utf8",
                "utf-8",
                "ascii",
                "binary",
                "base64",
                "ucs2",
                "ucs-2",
                "utf16le",
                "utf-16le",
                "raw",
              ].indexOf((e + "").toLowerCase()) > -1
            ))
          )
            throw new w(e);
          return (this._writableState.defaultEncoding = e), this;
        }),
        Object.defineProperty(C.prototype, "writableBuffer", {
          enumerable: !1,
          get: function () {
            return this._writableState && this._writableState.getBuffer();
          },
        }),
        Object.defineProperty(C.prototype, "writableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._writableState.highWaterMark;
          },
        }),
        (C.prototype._write = function (e, t, r) {
          r(new _("_write()"));
        }),
        (C.prototype._writev = null),
        (C.prototype.end = function (e, t, r) {
          var n,
            i = this._writableState;
          return (
            "function" == typeof e
              ? ((r = e), (e = null), (t = null))
              : "function" == typeof t && ((r = t), (t = null)),
            null != e && this.write(e, t),
            i.corked && ((i.corked = 1), this.uncork()),
            i.ending ||
              ((n = r),
              (i.ending = !0),
              A(this, i),
              n && (i.finished ? s.nextTick(n) : this.once("finish", n)),
              (i.ended = !0),
              (this.writable = !1)),
            this
          );
        }),
        Object.defineProperty(C.prototype, "writableLength", {
          enumerable: !1,
          get: function () {
            return this._writableState.length;
          },
        }),
        Object.defineProperty(C.prototype, "destroyed", {
          enumerable: !1,
          get: function () {
            return (
              void 0 !== this._writableState && this._writableState.destroyed
            );
          },
          set: function (e) {
            this._writableState && (this._writableState.destroyed = e);
          },
        }),
        (C.prototype.destroy = h.destroy),
        (C.prototype._undestroy = h.undestroy),
        (C.prototype._destroy = function (e, t) {
          t(e);
        });
    },
    45850: function (e, t, r) {
      "use strict";
      var n,
        i = r(34155);
      function s(e, t, r) {
        var n;
        return (
          (t =
            "symbol" ==
            typeof (n = (function (e, t) {
              if ("object" != typeof e || null === e) return e;
              var r = e[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(e, t || "default");
                if ("object" != typeof n) return n;
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === t ? String : Number)(e);
            })(t, "string"))
              ? n
              : String(n)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var a = r(8610),
        o = Symbol("lastResolve"),
        l = Symbol("lastReject"),
        c = Symbol("error"),
        u = Symbol("ended"),
        h = Symbol("lastPromise"),
        d = Symbol("handlePromise"),
        f = Symbol("stream");
      function p(e, t) {
        return { value: e, done: t };
      }
      function _(e) {
        var t = e[o];
        if (null !== t) {
          var r = e[f].read();
          null !== r &&
            ((e[h] = null), (e[o] = null), (e[l] = null), t(p(r, !1)));
        }
      }
      function g(e) {
        i.nextTick(_, e);
      }
      var b = Object.getPrototypeOf(function () {}),
        m = Object.setPrototypeOf(
          (s(
            (n = {
              get stream() {
                return this[f];
              },
              next: function () {
                var e,
                  t,
                  r = this,
                  n = this[c];
                if (null !== n) return Promise.reject(n);
                if (this[u]) return Promise.resolve(p(void 0, !0));
                if (this[f].destroyed)
                  return new Promise(function (e, t) {
                    i.nextTick(function () {
                      r[c] ? t(r[c]) : e(p(void 0, !0));
                    });
                  });
                var s = this[h];
                if (s)
                  t = new Promise(
                    ((e = this),
                    function (t, r) {
                      s.then(function () {
                        if (e[u]) {
                          t(p(void 0, !0));
                          return;
                        }
                        e[d](t, r);
                      }, r);
                    })
                  );
                else {
                  var a = this[f].read();
                  if (null !== a) return Promise.resolve(p(a, !1));
                  t = new Promise(this[d]);
                }
                return (this[h] = t), t;
              },
            }),
            Symbol.asyncIterator,
            function () {
              return this;
            }
          ),
          s(n, "return", function () {
            var e = this;
            return new Promise(function (t, r) {
              e[f].destroy(null, function (e) {
                if (e) {
                  r(e);
                  return;
                }
                t(p(void 0, !0));
              });
            });
          }),
          n),
          b
        );
      e.exports = function (e) {
        var t,
          r = Object.create(
            m,
            (s((t = {}), f, { value: e, writable: !0 }),
            s(t, o, { value: null, writable: !0 }),
            s(t, l, { value: null, writable: !0 }),
            s(t, c, { value: null, writable: !0 }),
            s(t, u, { value: e._readableState.endEmitted, writable: !0 }),
            s(t, d, {
              value: function (e, t) {
                var n = r[f].read();
                n
                  ? ((r[h] = null), (r[o] = null), (r[l] = null), e(p(n, !1)))
                  : ((r[o] = e), (r[l] = t));
              },
              writable: !0,
            }),
            t)
          );
        return (
          (r[h] = null),
          a(e, function (e) {
            if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
              var t = r[l];
              null !== t && ((r[h] = null), (r[o] = null), (r[l] = null), t(e)),
                (r[c] = e);
              return;
            }
            var n = r[o];
            null !== n &&
              ((r[h] = null), (r[o] = null), (r[l] = null), n(p(void 0, !0))),
              (r[u] = !0);
          }),
          e.on("readable", g.bind(null, r)),
          r
        );
      };
    },
    57327: function (e, t, r) {
      "use strict";
      function n(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? n(Object(r), !0).forEach(function (t) {
                var n, i;
                (n = t),
                  (i = r[t]),
                  (n = a(n)) in e
                    ? Object.defineProperty(e, n, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[n] = i);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : n(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function s(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, a(n.key), n);
        }
      }
      function a(e) {
        var t = (function (e, t) {
          if ("object" != typeof e || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != typeof n) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == typeof t ? t : String(t);
      }
      var o = r(48764).Buffer,
        l = r(52361).inspect,
        c = (l && l.custom) || "inspect";
      e.exports = (function () {
        var e, t;
        function r() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw TypeError("Cannot call a class as a function");
          })(this, r),
            (this.head = null),
            (this.tail = null),
            (this.length = 0);
        }
        return (
          (e = [
            {
              key: "push",
              value: function (e) {
                var t = { data: e, next: null };
                this.length > 0 ? (this.tail.next = t) : (this.head = t),
                  (this.tail = t),
                  ++this.length;
              },
            },
            {
              key: "unshift",
              value: function (e) {
                var t = { data: e, next: this.head };
                0 === this.length && (this.tail = t),
                  (this.head = t),
                  ++this.length;
              },
            },
            {
              key: "shift",
              value: function () {
                if (0 !== this.length) {
                  var e = this.head.data;
                  return (
                    1 === this.length
                      ? (this.head = this.tail = null)
                      : (this.head = this.head.next),
                    --this.length,
                    e
                  );
                }
              },
            },
            {
              key: "clear",
              value: function () {
                (this.head = this.tail = null), (this.length = 0);
              },
            },
            {
              key: "join",
              value: function (e) {
                if (0 === this.length) return "";
                for (var t = this.head, r = "" + t.data; (t = t.next); )
                  r += e + t.data;
                return r;
              },
            },
            {
              key: "concat",
              value: function (e) {
                if (0 === this.length) return o.alloc(0);
                for (
                  var t, r, n = o.allocUnsafe(e >>> 0), i = this.head, s = 0;
                  i;

                )
                  (t = i.data),
                    (r = s),
                    o.prototype.copy.call(t, n, r),
                    (s += i.data.length),
                    (i = i.next);
                return n;
              },
            },
            {
              key: "consume",
              value: function (e, t) {
                var r;
                return (
                  e < this.head.data.length
                    ? ((r = this.head.data.slice(0, e)),
                      (this.head.data = this.head.data.slice(e)))
                    : (r =
                        e === this.head.data.length
                          ? this.shift()
                          : t
                          ? this._getString(e)
                          : this._getBuffer(e)),
                  r
                );
              },
            },
            {
              key: "first",
              value: function () {
                return this.head.data;
              },
            },
            {
              key: "_getString",
              value: function (e) {
                var t = this.head,
                  r = 1,
                  n = t.data;
                for (e -= n.length; (t = t.next); ) {
                  var i = t.data,
                    s = e > i.length ? i.length : e;
                  if (
                    (s === i.length ? (n += i) : (n += i.slice(0, e)),
                    0 == (e -= s))
                  ) {
                    s === i.length
                      ? (++r,
                        t.next
                          ? (this.head = t.next)
                          : (this.head = this.tail = null))
                      : ((this.head = t), (t.data = i.slice(s)));
                    break;
                  }
                  ++r;
                }
                return (this.length -= r), n;
              },
            },
            {
              key: "_getBuffer",
              value: function (e) {
                var t = o.allocUnsafe(e),
                  r = this.head,
                  n = 1;
                for (r.data.copy(t), e -= r.data.length; (r = r.next); ) {
                  var i = r.data,
                    s = e > i.length ? i.length : e;
                  if ((i.copy(t, t.length - e, 0, s), 0 == (e -= s))) {
                    s === i.length
                      ? (++n,
                        r.next
                          ? (this.head = r.next)
                          : (this.head = this.tail = null))
                      : ((this.head = r), (r.data = i.slice(s)));
                    break;
                  }
                  ++n;
                }
                return (this.length -= n), t;
              },
            },
            {
              key: c,
              value: function (e, t) {
                return l(
                  this,
                  i(i({}, t), {}, { depth: 0, customInspect: !1 })
                );
              },
            },
          ]),
          s(r.prototype, e),
          t && s(r, t),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
      })();
    },
    61195: function (e, t, r) {
      "use strict";
      var n = r(34155);
      function i(e, t) {
        a(e, t), s(e);
      }
      function s(e) {
        (!e._writableState || e._writableState.emitClose) &&
          (!e._readableState || e._readableState.emitClose) &&
          e.emit("close");
      }
      function a(e, t) {
        e.emit("error", t);
      }
      e.exports = {
        destroy: function (e, t) {
          var r = this,
            o = this._readableState && this._readableState.destroyed,
            l = this._writableState && this._writableState.destroyed;
          return (
            o || l
              ? t
                ? t(e)
                : e &&
                  (this._writableState
                    ? this._writableState.errorEmitted ||
                      ((this._writableState.errorEmitted = !0),
                      n.nextTick(a, this, e))
                    : n.nextTick(a, this, e))
              : (this._readableState && (this._readableState.destroyed = !0),
                this._writableState && (this._writableState.destroyed = !0),
                this._destroy(e || null, function (e) {
                  !t && e
                    ? r._writableState
                      ? r._writableState.errorEmitted
                        ? n.nextTick(s, r)
                        : ((r._writableState.errorEmitted = !0),
                          n.nextTick(i, r, e))
                      : n.nextTick(i, r, e)
                    : t
                    ? (n.nextTick(s, r), t(e))
                    : n.nextTick(s, r);
                })),
            this
          );
        },
        undestroy: function () {
          this._readableState &&
            ((this._readableState.destroyed = !1),
            (this._readableState.reading = !1),
            (this._readableState.ended = !1),
            (this._readableState.endEmitted = !1)),
            this._writableState &&
              ((this._writableState.destroyed = !1),
              (this._writableState.ended = !1),
              (this._writableState.ending = !1),
              (this._writableState.finalCalled = !1),
              (this._writableState.prefinished = !1),
              (this._writableState.finished = !1),
              (this._writableState.errorEmitted = !1));
        },
        errorOrDestroy: function (e, t) {
          var r = e._readableState,
            n = e._writableState;
          (r && r.autoDestroy) || (n && n.autoDestroy)
            ? e.destroy(t)
            : e.emit("error", t);
        },
      };
    },
    8610: function (e, t, r) {
      "use strict";
      var n = r(94281).q.ERR_STREAM_PREMATURE_CLOSE;
      function i() {}
      e.exports = function e(t, r, s) {
        if ("function" == typeof r) return e(t, null, r);
        r || (r = {}),
          (a = s || i),
          (o = !1),
          (s = function () {
            if (!o) {
              o = !0;
              for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
              a.apply(this, t);
            }
          });
        var a,
          o,
          l = r.readable || (!1 !== r.readable && t.readable),
          c = r.writable || (!1 !== r.writable && t.writable),
          u = function () {
            t.writable || d();
          },
          h = t._writableState && t._writableState.finished,
          d = function () {
            (c = !1), (h = !0), l || s.call(t);
          },
          f = t._readableState && t._readableState.endEmitted,
          p = function () {
            (l = !1), (f = !0), c || s.call(t);
          },
          _ = function (e) {
            s.call(t, e);
          },
          g = function () {
            var e;
            return l && !f
              ? ((t._readableState && t._readableState.ended) || (e = new n()),
                s.call(t, e))
              : c && !h
              ? ((t._writableState && t._writableState.ended) || (e = new n()),
                s.call(t, e))
              : void 0;
          },
          b = function () {
            t.req.on("finish", d);
          };
        return (
          t.setHeader && "function" == typeof t.abort
            ? (t.on("complete", d),
              t.on("abort", g),
              t.req ? b() : t.on("request", b))
            : c && !t._writableState && (t.on("end", u), t.on("close", u)),
          t.on("end", p),
          t.on("finish", d),
          !1 !== r.error && t.on("error", _),
          t.on("close", g),
          function () {
            t.removeListener("complete", d),
              t.removeListener("abort", g),
              t.removeListener("request", b),
              t.req && t.req.removeListener("finish", d),
              t.removeListener("end", u),
              t.removeListener("close", u),
              t.removeListener("finish", d),
              t.removeListener("end", p),
              t.removeListener("error", _),
              t.removeListener("close", g);
          }
        );
      };
    },
    15167: function (e) {
      e.exports = function () {
        throw Error("Readable.from is not available in the browser");
      };
    },
    59946: function (e, t, r) {
      "use strict";
      var n,
        i = r(94281).q,
        s = i.ERR_MISSING_ARGS,
        a = i.ERR_STREAM_DESTROYED;
      function o(e) {
        if (e) throw e;
      }
      function l(e) {
        e();
      }
      function c(e, t) {
        return e.pipe(t);
      }
      e.exports = function () {
        for (var e, t, i = arguments.length, u = Array(i), h = 0; h < i; h++)
          u[h] = arguments[h];
        var d =
          (e = u).length && "function" == typeof e[e.length - 1] ? e.pop() : o;
        if ((Array.isArray(u[0]) && (u = u[0]), u.length < 2))
          throw new s("streams");
        var f = u.map(function (e, i) {
          var s,
            o,
            c,
            h,
            p,
            _ = i < u.length - 1;
          return (
            (o = s =
              function (e) {
                t || (t = e), e && f.forEach(l), _ || (f.forEach(l), d(t));
              }),
            (c = !1),
            (s = function () {
              c || ((c = !0), o.apply(void 0, arguments));
            }),
            (h = !1),
            e.on("close", function () {
              h = !0;
            }),
            void 0 === n && (n = r(8610)),
            n(e, { readable: _, writable: i > 0 }, function (e) {
              if (e) return s(e);
              (h = !0), s();
            }),
            (p = !1),
            function (t) {
              if (!h && !p) {
                if (((p = !0), e.setHeader && "function" == typeof e.abort))
                  return e.abort();
                if ("function" == typeof e.destroy) return e.destroy();
                s(t || new a("pipe"));
              }
            }
          );
        });
        return u.reduce(c);
      };
    },
    82457: function (e, t, r) {
      "use strict";
      var n = r(94281).q.ERR_INVALID_OPT_VALUE;
      e.exports = {
        getHighWaterMark: function (e, t, r, i) {
          var s = null != t.highWaterMark ? t.highWaterMark : i ? t[r] : null;
          if (null != s) {
            if (!(isFinite(s) && Math.floor(s) === s) || s < 0)
              throw new n(i ? r : "highWaterMark", s);
            return Math.floor(s);
          }
          return e.objectMode ? 16 : 16384;
        },
      };
    },
    22503: function (e, t, r) {
      e.exports = r(17187).EventEmitter;
    },
    88473: function (e, t, r) {
      ((t = e.exports = r(79481)).Stream = t),
        (t.Readable = t),
        (t.Writable = r(64229)),
        (t.Duplex = r(56753)),
        (t.Transform = r(74605)),
        (t.PassThrough = r(82725)),
        (t.finished = r(8610)),
        (t.pipeline = r(59946));
    },
    89509: function (e, t, r) {
      /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ var n =
          r(48764),
        i = n.Buffer;
      function s(e, t) {
        for (var r in e) t[r] = e[r];
      }
      function a(e, t, r) {
        return i(e, t, r);
      }
      i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
        ? (e.exports = n)
        : (s(n, t), (t.Buffer = a)),
        (a.prototype = Object.create(i.prototype)),
        s(i, a),
        (a.from = function (e, t, r) {
          if ("number" == typeof e)
            throw TypeError("Argument must not be a number");
          return i(e, t, r);
        }),
        (a.alloc = function (e, t, r) {
          if ("number" != typeof e)
            throw TypeError("Argument must be a number");
          var n = i(e);
          return (
            void 0 !== t
              ? "string" == typeof r
                ? n.fill(t, r)
                : n.fill(t)
              : n.fill(0),
            n
          );
        }),
        (a.allocUnsafe = function (e) {
          if ("number" != typeof e)
            throw TypeError("Argument must be a number");
          return i(e);
        }),
        (a.allocUnsafeSlow = function (e) {
          if ("number" != typeof e)
            throw TypeError("Argument must be a number");
          return n.SlowBuffer(e);
        });
    },
    24189: function (e, t, r) {
      var n = r(89509).Buffer;
      function i(e, t) {
        (this._block = n.alloc(e)),
          (this._finalSize = t),
          (this._blockSize = e),
          (this._len = 0);
      }
      (i.prototype.update = function (e, t) {
        "string" == typeof e && ((t = t || "utf8"), (e = n.from(e, t)));
        for (
          var r = this._block,
            i = this._blockSize,
            s = e.length,
            a = this._len,
            o = 0;
          o < s;

        ) {
          for (var l = a % i, c = Math.min(s - o, i - l), u = 0; u < c; u++)
            r[l + u] = e[o + u];
          (a += c), (o += c), a % i == 0 && this._update(r);
        }
        return (this._len += s), this;
      }),
        (i.prototype.digest = function (e) {
          var t = this._len % this._blockSize;
          (this._block[t] = 128),
            this._block.fill(0, t + 1),
            t >= this._finalSize &&
              (this._update(this._block), this._block.fill(0));
          var r = 8 * this._len;
          if (r <= 4294967295)
            this._block.writeUInt32BE(r, this._blockSize - 4);
          else {
            var n = (4294967295 & r) >>> 0;
            this._block.writeUInt32BE(
              (r - n) / 4294967296,
              this._blockSize - 8
            ),
              this._block.writeUInt32BE(n, this._blockSize - 4);
          }
          this._update(this._block);
          var i = this._hash();
          return e ? i.toString(e) : i;
        }),
        (i.prototype._update = function () {
          throw Error("_update must be implemented by subclass");
        }),
        (e.exports = i);
    },
    89072: function (e, t, r) {
      var n = (e.exports = function (e) {
        var t = n[(e = e.toLowerCase())];
        if (!t) throw Error(e + " is not supported (we accept pull requests)");
        return new t();
      });
      (n.sha = r(74448)),
        (n.sha1 = r(18336)),
        (n.sha224 = r(48432)),
        (n.sha256 = r(67499)),
        (n.sha384 = r(51686)),
        (n.sha512 = r(87816));
    },
    74448: function (e, t, r) {
      var n = r(35717),
        i = r(24189),
        s = r(89509).Buffer,
        a = [1518500249, 1859775393, -1894007588, -899497514],
        o = Array(80);
      function l() {
        this.init(), (this._w = o), i.call(this, 64, 56);
      }
      n(l, i),
        (l.prototype.init = function () {
          return (
            (this._a = 1732584193),
            (this._b = 4023233417),
            (this._c = 2562383102),
            (this._d = 271733878),
            (this._e = 3285377520),
            this
          );
        }),
        (l.prototype._update = function (e) {
          for (
            var t = this._w,
              r = 0 | this._a,
              n = 0 | this._b,
              i = 0 | this._c,
              s = 0 | this._d,
              o = 0 | this._e,
              l = 0;
            l < 16;
            ++l
          )
            t[l] = e.readInt32BE(4 * l);
          for (; l < 80; ++l)
            t[l] = t[l - 3] ^ t[l - 8] ^ t[l - 14] ^ t[l - 16];
          for (var c = 0; c < 80; ++c) {
            var u,
              h,
              d,
              f,
              p,
              _ = ~~(c / 20),
              g =
                ((((u = r) << 5) | (u >>> 27)) +
                  ((h = n),
                  (d = i),
                  (f = s),
                  0 === _
                    ? (h & d) | (~h & f)
                    : 2 === _
                    ? (h & d) | (h & f) | (d & f)
                    : h ^ d ^ f) +
                  o +
                  t[c] +
                  a[_]) |
                0;
            (o = s),
              (s = i),
              (i = ((p = n) << 30) | (p >>> 2)),
              (n = r),
              (r = g);
          }
          (this._a = (r + this._a) | 0),
            (this._b = (n + this._b) | 0),
            (this._c = (i + this._c) | 0),
            (this._d = (s + this._d) | 0),
            (this._e = (o + this._e) | 0);
        }),
        (l.prototype._hash = function () {
          var e = s.allocUnsafe(20);
          return (
            e.writeInt32BE(0 | this._a, 0),
            e.writeInt32BE(0 | this._b, 4),
            e.writeInt32BE(0 | this._c, 8),
            e.writeInt32BE(0 | this._d, 12),
            e.writeInt32BE(0 | this._e, 16),
            e
          );
        }),
        (e.exports = l);
    },
    18336: function (e, t, r) {
      var n = r(35717),
        i = r(24189),
        s = r(89509).Buffer,
        a = [1518500249, 1859775393, -1894007588, -899497514],
        o = Array(80);
      function l() {
        this.init(), (this._w = o), i.call(this, 64, 56);
      }
      n(l, i),
        (l.prototype.init = function () {
          return (
            (this._a = 1732584193),
            (this._b = 4023233417),
            (this._c = 2562383102),
            (this._d = 271733878),
            (this._e = 3285377520),
            this
          );
        }),
        (l.prototype._update = function (e) {
          for (
            var t = this._w,
              r = 0 | this._a,
              n = 0 | this._b,
              i = 0 | this._c,
              s = 0 | this._d,
              o = 0 | this._e,
              l = 0;
            l < 16;
            ++l
          )
            t[l] = e.readInt32BE(4 * l);
          for (; l < 80; ++l)
            t[l] =
              ((u = t[l - 3] ^ t[l - 8] ^ t[l - 14] ^ t[l - 16]) << 1) |
              (u >>> 31);
          for (var c = 0; c < 80; ++c) {
            var u,
              h,
              d,
              f,
              p,
              _,
              g = ~~(c / 20),
              b =
                ((((h = r) << 5) | (h >>> 27)) +
                  ((d = n),
                  (f = i),
                  (p = s),
                  0 === g
                    ? (d & f) | (~d & p)
                    : 2 === g
                    ? (d & f) | (d & p) | (f & p)
                    : d ^ f ^ p) +
                  o +
                  t[c] +
                  a[g]) |
                0;
            (o = s),
              (s = i),
              (i = ((_ = n) << 30) | (_ >>> 2)),
              (n = r),
              (r = b);
          }
          (this._a = (r + this._a) | 0),
            (this._b = (n + this._b) | 0),
            (this._c = (i + this._c) | 0),
            (this._d = (s + this._d) | 0),
            (this._e = (o + this._e) | 0);
        }),
        (l.prototype._hash = function () {
          var e = s.allocUnsafe(20);
          return (
            e.writeInt32BE(0 | this._a, 0),
            e.writeInt32BE(0 | this._b, 4),
            e.writeInt32BE(0 | this._c, 8),
            e.writeInt32BE(0 | this._d, 12),
            e.writeInt32BE(0 | this._e, 16),
            e
          );
        }),
        (e.exports = l);
    },
    48432: function (e, t, r) {
      var n = r(35717),
        i = r(67499),
        s = r(24189),
        a = r(89509).Buffer,
        o = Array(64);
      function l() {
        this.init(), (this._w = o), s.call(this, 64, 56);
      }
      n(l, i),
        (l.prototype.init = function () {
          return (
            (this._a = 3238371032),
            (this._b = 914150663),
            (this._c = 812702999),
            (this._d = 4144912697),
            (this._e = 4290775857),
            (this._f = 1750603025),
            (this._g = 1694076839),
            (this._h = 3204075428),
            this
          );
        }),
        (l.prototype._hash = function () {
          var e = a.allocUnsafe(28);
          return (
            e.writeInt32BE(this._a, 0),
            e.writeInt32BE(this._b, 4),
            e.writeInt32BE(this._c, 8),
            e.writeInt32BE(this._d, 12),
            e.writeInt32BE(this._e, 16),
            e.writeInt32BE(this._f, 20),
            e.writeInt32BE(this._g, 24),
            e
          );
        }),
        (e.exports = l);
    },
    67499: function (e, t, r) {
      var n = r(35717),
        i = r(24189),
        s = r(89509).Buffer,
        a = [
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ],
        o = Array(64);
      function l() {
        this.init(), (this._w = o), i.call(this, 64, 56);
      }
      n(l, i),
        (l.prototype.init = function () {
          return (
            (this._a = 1779033703),
            (this._b = 3144134277),
            (this._c = 1013904242),
            (this._d = 2773480762),
            (this._e = 1359893119),
            (this._f = 2600822924),
            (this._g = 528734635),
            (this._h = 1541459225),
            this
          );
        }),
        (l.prototype._update = function (e) {
          for (
            var t = this._w,
              r = 0 | this._a,
              n = 0 | this._b,
              i = 0 | this._c,
              s = 0 | this._d,
              o = 0 | this._e,
              l = 0 | this._f,
              c = 0 | this._g,
              u = 0 | this._h,
              h = 0;
            h < 16;
            ++h
          )
            t[h] = e.readInt32BE(4 * h);
          for (; h < 64; ++h)
            t[h] =
              (((((f = t[h - 2]) >>> 17) | (f << 15)) ^
                ((f >>> 19) | (f << 13)) ^
                (f >>> 10)) +
                t[h - 7] +
                ((((p = t[h - 15]) >>> 7) | (p << 25)) ^
                  ((p >>> 18) | (p << 14)) ^
                  (p >>> 3)) +
                t[h - 16]) |
              0;
          for (var d = 0; d < 64; ++d) {
            var f,
              p,
              _,
              g,
              b,
              m,
              y,
              v,
              w,
              E =
                (u +
                  ((((_ = o) >>> 6) | (_ << 26)) ^
                    ((_ >>> 11) | (_ << 21)) ^
                    ((_ >>> 25) | (_ << 7))) +
                  ((g = o), (b = l), (m = c) ^ (g & (b ^ m))) +
                  a[d] +
                  t[d]) |
                0,
              S =
                (((((y = r) >>> 2) | (y << 30)) ^
                  ((y >>> 13) | (y << 19)) ^
                  ((y >>> 22) | (y << 10))) +
                  (((v = r) & (w = n)) | (i & (v | w)))) |
                0;
            (u = c),
              (c = l),
              (l = o),
              (o = (s + E) | 0),
              (s = i),
              (i = n),
              (n = r),
              (r = (E + S) | 0);
          }
          (this._a = (r + this._a) | 0),
            (this._b = (n + this._b) | 0),
            (this._c = (i + this._c) | 0),
            (this._d = (s + this._d) | 0),
            (this._e = (o + this._e) | 0),
            (this._f = (l + this._f) | 0),
            (this._g = (c + this._g) | 0),
            (this._h = (u + this._h) | 0);
        }),
        (l.prototype._hash = function () {
          var e = s.allocUnsafe(32);
          return (
            e.writeInt32BE(this._a, 0),
            e.writeInt32BE(this._b, 4),
            e.writeInt32BE(this._c, 8),
            e.writeInt32BE(this._d, 12),
            e.writeInt32BE(this._e, 16),
            e.writeInt32BE(this._f, 20),
            e.writeInt32BE(this._g, 24),
            e.writeInt32BE(this._h, 28),
            e
          );
        }),
        (e.exports = l);
    },
    51686: function (e, t, r) {
      var n = r(35717),
        i = r(87816),
        s = r(24189),
        a = r(89509).Buffer,
        o = Array(160);
      function l() {
        this.init(), (this._w = o), s.call(this, 128, 112);
      }
      n(l, i),
        (l.prototype.init = function () {
          return (
            (this._ah = 3418070365),
            (this._bh = 1654270250),
            (this._ch = 2438529370),
            (this._dh = 355462360),
            (this._eh = 1731405415),
            (this._fh = 2394180231),
            (this._gh = 3675008525),
            (this._hh = 1203062813),
            (this._al = 3238371032),
            (this._bl = 914150663),
            (this._cl = 812702999),
            (this._dl = 4144912697),
            (this._el = 4290775857),
            (this._fl = 1750603025),
            (this._gl = 1694076839),
            (this._hl = 3204075428),
            this
          );
        }),
        (l.prototype._hash = function () {
          var e = a.allocUnsafe(48);
          function t(t, r, n) {
            e.writeInt32BE(t, n), e.writeInt32BE(r, n + 4);
          }
          return (
            t(this._ah, this._al, 0),
            t(this._bh, this._bl, 8),
            t(this._ch, this._cl, 16),
            t(this._dh, this._dl, 24),
            t(this._eh, this._el, 32),
            t(this._fh, this._fl, 40),
            e
          );
        }),
        (e.exports = l);
    },
    87816: function (e, t, r) {
      var n = r(35717),
        i = r(24189),
        s = r(89509).Buffer,
        a = [
          1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
          3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
          2453635748, 2937671579, 2870763221, 3664609560, 3624381080,
          2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987,
          3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103,
          633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774,
          944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983,
          1495990901, 1249150122, 1856431235, 1555081692, 3175218132,
          1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016,
          2952996808, 2566594879, 3210313671, 3203337956, 3336571891,
          1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895,
          168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372,
          1522805485, 1396182291, 2643833823, 1695183700, 2343527390,
          1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627,
          2730485921, 1290863460, 2820302411, 3158454273, 3259730800,
          3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804,
          1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734,
          3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877,
          3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063,
          2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
          2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
          2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
          3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
          3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
          174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
          685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
          1126000580, 2618297676, 1288033470, 3409855158, 1501505948,
          4234509866, 1607167915, 987167468, 1816402316, 1246189591,
        ],
        o = Array(160);
      function l() {
        this.init(), (this._w = o), i.call(this, 128, 112);
      }
      function c(e, t) {
        return (
          ((e >>> 28) | (t << 4)) ^
          ((t >>> 2) | (e << 30)) ^
          ((t >>> 7) | (e << 25))
        );
      }
      function u(e, t) {
        return (
          ((e >>> 14) | (t << 18)) ^
          ((e >>> 18) | (t << 14)) ^
          ((t >>> 9) | (e << 23))
        );
      }
      function h(e, t) {
        return e >>> 0 < t >>> 0 ? 1 : 0;
      }
      n(l, i),
        (l.prototype.init = function () {
          return (
            (this._ah = 1779033703),
            (this._bh = 3144134277),
            (this._ch = 1013904242),
            (this._dh = 2773480762),
            (this._eh = 1359893119),
            (this._fh = 2600822924),
            (this._gh = 528734635),
            (this._hh = 1541459225),
            (this._al = 4089235720),
            (this._bl = 2227873595),
            (this._cl = 4271175723),
            (this._dl = 1595750129),
            (this._el = 2917565137),
            (this._fl = 725511199),
            (this._gl = 4215389547),
            (this._hl = 327033209),
            this
          );
        }),
        (l.prototype._update = function (e) {
          for (
            var t = this._w,
              r = 0 | this._ah,
              n = 0 | this._bh,
              i = 0 | this._ch,
              s = 0 | this._dh,
              o = 0 | this._eh,
              l = 0 | this._fh,
              d = 0 | this._gh,
              f = 0 | this._hh,
              p = 0 | this._al,
              _ = 0 | this._bl,
              g = 0 | this._cl,
              b = 0 | this._dl,
              m = 0 | this._el,
              y = 0 | this._fl,
              v = 0 | this._gl,
              w = 0 | this._hl,
              E = 0;
            E < 32;
            E += 2
          )
            (t[E] = e.readInt32BE(4 * E)),
              (t[E + 1] = e.readInt32BE(4 * E + 4));
          for (; E < 160; E += 2) {
            var S,
              k,
              C,
              I,
              M,
              R,
              x,
              L,
              A = t[E - 30],
              P = t[E - 30 + 1],
              T =
                (((S = A) >>> 1) | ((k = P) << 31)) ^
                ((S >>> 8) | (k << 24)) ^
                (S >>> 7),
              N =
                (((C = P) >>> 1) | ((I = A) << 31)) ^
                ((C >>> 8) | (I << 24)) ^
                ((C >>> 7) | (I << 25));
            (A = t[E - 4]), (P = t[E - 4 + 1]);
            var j =
                (((M = A) >>> 19) | ((R = P) << 13)) ^
                ((R >>> 29) | (M << 3)) ^
                (M >>> 6),
              O =
                (((x = P) >>> 19) | ((L = A) << 13)) ^
                ((L >>> 29) | (x << 3)) ^
                ((x >>> 6) | (L << 26)),
              D = t[E - 14],
              U = t[E - 14 + 1],
              B = t[E - 32],
              W = t[E - 32 + 1],
              q = (N + U) | 0,
              H = (T + D + h(q, N)) | 0;
            (H =
              ((H = (H + j + h((q = (q + O) | 0), O)) | 0) +
                B +
                h((q = (q + W) | 0), W)) |
              0),
              (t[E] = H),
              (t[E + 1] = q);
          }
          for (var F = 0; F < 160; F += 2) {
            (H = t[F]), (q = t[F + 1]);
            var z,
              V,
              K,
              Z,
              G,
              $,
              Y,
              J,
              Q,
              X,
              ee = ((z = r) & (V = n)) | (i & (z | V)),
              et = ((K = p) & (Z = _)) | (g & (K | Z)),
              er = c(r, p),
              en = c(p, r),
              ei = u(o, m),
              es = u(m, o),
              ea = a[F],
              eo = a[F + 1],
              el = ((G = o), ($ = l), (Y = d) ^ (G & ($ ^ Y))),
              ec = ((J = m), (Q = y), (X = v) ^ (J & (Q ^ X))),
              eu = (w + es) | 0,
              eh = (f + ei + h(eu, w)) | 0;
            eh =
              ((eh =
                ((eh = (eh + el + h((eu = (eu + ec) | 0), ec)) | 0) +
                  ea +
                  h((eu = (eu + eo) | 0), eo)) |
                0) +
                H +
                h((eu = (eu + q) | 0), q)) |
              0;
            var ed = (en + et) | 0,
              ef = (er + ee + h(ed, en)) | 0;
            (f = d),
              (w = v),
              (d = l),
              (v = y),
              (l = o),
              (y = m),
              (o = (s + eh + h((m = (b + eu) | 0), b)) | 0),
              (s = i),
              (b = g),
              (i = n),
              (g = _),
              (n = r),
              (_ = p),
              (r = (eh + ef + h((p = (eu + ed) | 0), eu)) | 0);
          }
          (this._al = (this._al + p) | 0),
            (this._bl = (this._bl + _) | 0),
            (this._cl = (this._cl + g) | 0),
            (this._dl = (this._dl + b) | 0),
            (this._el = (this._el + m) | 0),
            (this._fl = (this._fl + y) | 0),
            (this._gl = (this._gl + v) | 0),
            (this._hl = (this._hl + w) | 0),
            (this._ah = (this._ah + r + h(this._al, p)) | 0),
            (this._bh = (this._bh + n + h(this._bl, _)) | 0),
            (this._ch = (this._ch + i + h(this._cl, g)) | 0),
            (this._dh = (this._dh + s + h(this._dl, b)) | 0),
            (this._eh = (this._eh + o + h(this._el, m)) | 0),
            (this._fh = (this._fh + l + h(this._fl, y)) | 0),
            (this._gh = (this._gh + d + h(this._gl, v)) | 0),
            (this._hh = (this._hh + f + h(this._hl, w)) | 0);
        }),
        (l.prototype._hash = function () {
          var e = s.allocUnsafe(64);
          function t(t, r, n) {
            e.writeInt32BE(t, n), e.writeInt32BE(r, n + 4);
          }
          return (
            t(this._ah, this._al, 0),
            t(this._bh, this._bl, 8),
            t(this._ch, this._cl, 16),
            t(this._dh, this._dl, 24),
            t(this._eh, this._el, 32),
            t(this._fh, this._fl, 40),
            t(this._gh, this._gl, 48),
            t(this._hh, this._hl, 56),
            e
          );
        }),
        (e.exports = l);
    },
    32553: function (e, t, r) {
      "use strict";
      var n = r(89509).Buffer,
        i =
          n.isEncoding ||
          function (e) {
            switch ((e = "" + e) && e.toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
              case "raw":
                return !0;
              default:
                return !1;
            }
          };
      function s(e) {
        var t;
        switch (
          ((this.encoding = (function (e) {
            var t = (function (e) {
              var t;
              if (!e) return "utf8";
              for (;;)
                switch (e) {
                  case "utf8":
                  case "utf-8":
                    return "utf8";
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return "utf16le";
                  case "latin1":
                  case "binary":
                    return "latin1";
                  case "base64":
                  case "ascii":
                  case "hex":
                    return e;
                  default:
                    if (t) return;
                    (e = ("" + e).toLowerCase()), (t = !0);
                }
            })(e);
            if ("string" != typeof t && (n.isEncoding === i || !i(e)))
              throw Error("Unknown encoding: " + e);
            return t || e;
          })(e)),
          this.encoding)
        ) {
          case "utf16le":
            (this.text = l), (this.end = c), (t = 4);
            break;
          case "utf8":
            (this.fillLast = o), (t = 4);
            break;
          case "base64":
            (this.text = u), (this.end = h), (t = 3);
            break;
          default:
            (this.write = d), (this.end = f);
            return;
        }
        (this.lastNeed = 0),
          (this.lastTotal = 0),
          (this.lastChar = n.allocUnsafe(t));
      }
      function a(e) {
        return e <= 127
          ? 0
          : e >> 5 == 6
          ? 2
          : e >> 4 == 14
          ? 3
          : e >> 3 == 30
          ? 4
          : e >> 6 == 2
          ? -1
          : -2;
      }
      function o(e) {
        var t = this.lastTotal - this.lastNeed,
          r = (function (e, t, r) {
            if ((192 & t[0]) != 128) return (e.lastNeed = 0), "�";
            if (e.lastNeed > 1 && t.length > 1) {
              if ((192 & t[1]) != 128) return (e.lastNeed = 1), "�";
              if (e.lastNeed > 2 && t.length > 2 && (192 & t[2]) != 128)
                return (e.lastNeed = 2), "�";
            }
          })(this, e, 0);
        return void 0 !== r
          ? r
          : this.lastNeed <= e.length
          ? (e.copy(this.lastChar, t, 0, this.lastNeed),
            this.lastChar.toString(this.encoding, 0, this.lastTotal))
          : void (e.copy(this.lastChar, t, 0, e.length),
            (this.lastNeed -= e.length));
      }
      function l(e, t) {
        if ((e.length - t) % 2 == 0) {
          var r = e.toString("utf16le", t);
          if (r) {
            var n = r.charCodeAt(r.length - 1);
            if (n >= 55296 && n <= 56319)
              return (
                (this.lastNeed = 2),
                (this.lastTotal = 4),
                (this.lastChar[0] = e[e.length - 2]),
                (this.lastChar[1] = e[e.length - 1]),
                r.slice(0, -1)
              );
          }
          return r;
        }
        return (
          (this.lastNeed = 1),
          (this.lastTotal = 2),
          (this.lastChar[0] = e[e.length - 1]),
          e.toString("utf16le", t, e.length - 1)
        );
      }
      function c(e) {
        var t = e && e.length ? this.write(e) : "";
        if (this.lastNeed) {
          var r = this.lastTotal - this.lastNeed;
          return t + this.lastChar.toString("utf16le", 0, r);
        }
        return t;
      }
      function u(e, t) {
        var r = (e.length - t) % 3;
        return 0 === r
          ? e.toString("base64", t)
          : ((this.lastNeed = 3 - r),
            (this.lastTotal = 3),
            1 === r
              ? (this.lastChar[0] = e[e.length - 1])
              : ((this.lastChar[0] = e[e.length - 2]),
                (this.lastChar[1] = e[e.length - 1])),
            e.toString("base64", t, e.length - r));
      }
      function h(e) {
        var t = e && e.length ? this.write(e) : "";
        return this.lastNeed
          ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
          : t;
      }
      function d(e) {
        return e.toString(this.encoding);
      }
      function f(e) {
        return e && e.length ? this.write(e) : "";
      }
      (t.s = s),
        (s.prototype.write = function (e) {
          var t, r;
          if (0 === e.length) return "";
          if (this.lastNeed) {
            if (void 0 === (t = this.fillLast(e))) return "";
            (r = this.lastNeed), (this.lastNeed = 0);
          } else r = 0;
          return r < e.length
            ? t
              ? t + this.text(e, r)
              : this.text(e, r)
            : t || "";
        }),
        (s.prototype.end = function (e) {
          var t = e && e.length ? this.write(e) : "";
          return this.lastNeed ? t + "�" : t;
        }),
        (s.prototype.text = function (e, t) {
          var r = (function (e, t, r) {
            var n = t.length - 1;
            if (n < r) return 0;
            var i = a(t[n]);
            return i >= 0
              ? (i > 0 && (e.lastNeed = i - 1), i)
              : --n < r || -2 === i
              ? 0
              : (i = a(t[n])) >= 0
              ? (i > 0 && (e.lastNeed = i - 2), i)
              : --n < r || -2 === i
              ? 0
              : (i = a(t[n])) >= 0
              ? (i > 0 && (2 === i ? (i = 0) : (e.lastNeed = i - 3)), i)
              : 0;
          })(this, e, t);
          if (!this.lastNeed) return e.toString("utf8", t);
          this.lastTotal = r;
          var n = e.length - (r - this.lastNeed);
          return e.copy(this.lastChar, 0, n), e.toString("utf8", t, n);
        }),
        (s.prototype.fillLast = function (e) {
          if (this.lastNeed <= e.length)
            return (
              e.copy(
                this.lastChar,
                this.lastTotal - this.lastNeed,
                0,
                this.lastNeed
              ),
              this.lastChar.toString(this.encoding, 0, this.lastTotal)
            );
          e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length),
            (this.lastNeed -= e.length);
        });
    },
    9241: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__rest) ||
          function (e, t) {
            var r = {};
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) &&
                0 > t.indexOf(n) &&
                (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
              for (
                var i = 0, n = Object.getOwnPropertySymbols(e);
                i < n.length;
                i++
              )
                0 > t.indexOf(n[i]) &&
                  Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
                  (r[n[i]] = e[n[i]]);
            return r;
          },
        i =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CoinbaseWalletProvider = void 0);
      let s = i(r(26729)),
        a = r(88223),
        o = r(51619),
        l = r(54839),
        c = r(72537),
        u = r(59391),
        h = r(21460),
        d = r(51612),
        f = r(95651),
        p = r(81486);
      class _ extends s.default {
        constructor(e) {
          var t,
            r,
            { metadata: i } = e,
            s = e.preference,
            { keysUrl: o } = s,
            f = n(s, ["keysUrl"]);
          super(),
            (this.accounts = []),
            (this.handlers = {
              handshake: async (e) => {
                try {
                  if (this.connected)
                    return (
                      this.emit("connect", {
                        chainId: (0, c.hexStringFromIntNumber)(
                          (0, l.IntNumber)(this.chain.id)
                        ),
                      }),
                      this.accounts
                    );
                  let e = await this.requestSignerSelection(),
                    t = this.initSigner(e),
                    r = await t.handshake();
                  return (
                    (this.signer = t),
                    (0, u.storeSignerType)(e),
                    this.emit("connect", {
                      chainId: (0, c.hexStringFromIntNumber)(
                        (0, l.IntNumber)(this.chain.id)
                      ),
                    }),
                    r
                  );
                } catch (e) {
                  throw (this.handleUnauthorizedError(e), e);
                }
              },
              sign: async (e) => {
                if (!this.connected || !this.signer)
                  throw a.standardErrors.provider.unauthorized(
                    "Must call 'eth_requestAccounts' before other methods"
                  );
                try {
                  return await this.signer.request(e);
                } catch (e) {
                  throw (this.handleUnauthorizedError(e), e);
                }
              },
              fetch: (e) => (0, h.fetchRPCRequest)(e, this.chain),
              state: (e) => {
                let t = () => {
                  if (this.connected) return this.accounts;
                  throw a.standardErrors.provider.unauthorized(
                    "Must call 'eth_requestAccounts' before other methods"
                  );
                };
                switch (e.method) {
                  case "eth_chainId":
                    return (0, c.hexStringFromIntNumber)(
                      (0, l.IntNumber)(this.chain.id)
                    );
                  case "net_version":
                    return this.chain.id;
                  case "eth_accounts":
                    return t();
                  case "eth_coinbase":
                    return t()[0];
                  default:
                    return this.handlers.unsupported(e);
                }
              },
              deprecated: ({ method: e }) => {
                throw a.standardErrors.rpc.methodNotSupported(
                  `Method ${e} is deprecated.`
                );
              },
              unsupported: ({ method: e }) => {
                throw a.standardErrors.rpc.methodNotSupported(
                  `Method ${e} is not supported.`
                );
              },
            }),
            (this.isCoinbaseWallet = !0),
            (this.updateListener = {
              onAccountsUpdate: ({ accounts: e, source: t }) => {
                (0, c.areAddressArraysEqual)(this.accounts, e) ||
                  ((this.accounts = e),
                  "storage" !== t &&
                    this.emit("accountsChanged", this.accounts));
              },
              onChainUpdate: ({ chain: e, source: t }) => {
                (e.id !== this.chain.id || e.rpcUrl !== this.chain.rpcUrl) &&
                  ((this.chain = e),
                  "storage" !== t &&
                    this.emit(
                      "chainChanged",
                      (0, c.hexStringFromIntNumber)((0, l.IntNumber)(e.id))
                    ));
              },
            }),
            (this.metadata = i),
            (this.preference = f),
            (this.communicator = new d.Communicator(o)),
            (this.chain = {
              id:
                null !==
                  (r =
                    null === (t = i.appChainIds) || void 0 === t
                      ? void 0
                      : t[0]) && void 0 !== r
                  ? r
                  : 1,
            });
          let p = (0, u.loadSignerType)();
          this.signer = p ? this.initSigner(p) : null;
        }
        get connected() {
          return this.accounts.length > 0;
        }
        async request(e) {
          var t;
          try {
            let r = (0, h.checkErrorForInvalidRequestArgs)(e);
            if (r) throw r;
            let n =
              null !== (t = (0, f.determineMethodCategory)(e.method)) &&
              void 0 !== t
                ? t
                : "fetch";
            return this.handlers[n](e);
          } catch (t) {
            return Promise.reject((0, o.serializeError)(t, e.method));
          }
        }
        handleUnauthorizedError(e) {
          e.code === a.standardErrorCodes.provider.unauthorized &&
            this.disconnect();
        }
        async enable() {
          return (
            console.warn(
              '.enable() has been deprecated. Please use .request({ method: "eth_requestAccounts" }) instead.'
            ),
            await this.request({ method: "eth_requestAccounts" })
          );
        }
        async disconnect() {
          (this.accounts = []),
            (this.chain = { id: 1 }),
            p.ScopedLocalStorage.clearAll(),
            this.emit(
              "disconnect",
              a.standardErrors.provider.disconnected(
                "User initiated disconnection"
              )
            );
        }
        requestSignerSelection() {
          return (0, u.fetchSignerType)({
            communicator: this.communicator,
            preference: this.preference,
            metadata: this.metadata,
          });
        }
        initSigner(e) {
          return (0, u.createSigner)({
            signerType: e,
            metadata: this.metadata,
            communicator: this.communicator,
            updateListener: this.updateListener,
          });
        }
      }
      t.CoinbaseWalletProvider = _;
    },
    56938: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CoinbaseWalletSDK = void 0);
      let n = r(59781),
        i = r(9241),
        s = r(81486),
        a = r(86546),
        o = r(72537),
        l = r(21460);
      class c {
        constructor(e) {
          (this.metadata = {
            appName: e.appName || "Dapp",
            appLogoUrl: e.appLogoUrl || (0, o.getFavicon)(),
            appChainIds: e.appChainIds || [],
          }),
            this.storeLatestVersion();
        }
        makeWeb3Provider(e = { options: "all" }) {
          var t;
          let r = { metadata: this.metadata, preference: e };
          return null !== (t = (0, l.getCoinbaseInjectedProvider)(r)) &&
            void 0 !== t
            ? t
            : new i.CoinbaseWalletProvider(r);
        }
        getCoinbaseWalletLogo(e, t = 240) {
          return (0, n.walletLogo)(e, t);
        }
        storeLatestVersion() {
          new s.ScopedLocalStorage("CBWSDK").setItem("VERSION", a.LIB_VERSION);
        }
      }
      t.CoinbaseWalletSDK = c;
    },
    59781: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.walletLogo = void 0),
        (t.walletLogo = (e, t) => {
          let r;
          switch (e) {
            case "standard":
            default:
              return (
                (r = t),
                `data:image/svg+xml,%3Csvg width='${t}' height='${r}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `
              );
            case "circle":
              return (
                (r = t),
                `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${t}' height='${r}' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E`
              );
            case "text":
              return (
                (r = (0.1 * t).toFixed(2)),
                `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`
              );
            case "textWithLogo":
              return (
                (r = (0.25 * t).toFixed(2)),
                `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`
              );
            case "textLight":
              return (
                (r = (0.1 * t).toFixed(2)),
                `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`
              );
            case "textWithLogoLight":
              return (
                (r = (0.25 * t).toFixed(2)),
                `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`
              );
          }
        });
    },
    51612: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Communicator = void 0);
      let n = r(86546),
        i = r(58418),
        s = r(14170),
        a = r(88223);
      class o {
        constructor(e = s.CB_KEYS_URL) {
          (this.popup = null),
            (this.listeners = new Map()),
            (this.postMessage = async (e) => {
              (await this.waitForPopupLoaded()).postMessage(e, this.url.origin);
            }),
            (this.postRequestAndWaitForResponse = async (e) => {
              let t = this.onMessage(({ requestId: t }) => t === e.id);
              return this.postMessage(e), await t;
            }),
            (this.onMessage = async (e) =>
              new Promise((t, r) => {
                let n = (r) => {
                  if (r.origin !== this.url.origin) return;
                  let i = r.data;
                  e(i) &&
                    (t(i),
                    window.removeEventListener("message", n),
                    this.listeners.delete(n));
                };
                window.addEventListener("message", n),
                  this.listeners.set(n, { reject: r });
              })),
            (this.disconnect = () => {
              (0, i.closePopup)(this.popup),
                (this.popup = null),
                this.listeners.forEach(({ reject: e }, t) => {
                  e(
                    a.standardErrors.provider.userRejectedRequest(
                      "Request rejected"
                    )
                  ),
                    window.removeEventListener("message", t);
                }),
                this.listeners.clear();
            }),
            (this.waitForPopupLoaded = async () =>
              this.popup && !this.popup.closed
                ? (this.popup.focus(), this.popup)
                : ((this.popup = (0, i.openPopup)(this.url)),
                  this.onMessage(({ event: e }) => "PopupUnload" === e)
                    .then(this.disconnect)
                    .catch(() => {}),
                  this.onMessage(({ event: e }) => "PopupLoaded" === e)
                    .then((e) => {
                      this.postMessage({
                        requestId: e.id,
                        data: { version: n.LIB_VERSION },
                      });
                    })
                    .then(() => {
                      if (!this.popup) throw a.standardErrors.rpc.internal();
                      return this.popup;
                    }))),
            (this.url = new URL(e));
        }
      }
      t.Communicator = o;
    },
    58418: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.closePopup = t.openPopup = void 0);
      let n = r(88223);
      (t.openPopup = function (e) {
        let t = (window.innerWidth - 420) / 2 + window.screenX,
          r = (window.innerHeight - 540) / 2 + window.screenY,
          i = window.open(
            e,
            "Smart Wallet",
            `width=420, height=540, left=${t}, top=${r}`
          );
        if ((null == i || i.focus(), !i))
          throw n.standardErrors.rpc.internal("Pop up window failed to open");
        return i;
      }),
        (t.closePopup = function (e) {
          e && !e.closed && e.close();
        });
    },
    14170: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CBW_MOBILE_DEEPLINK_URL = t.WALLETLINK_URL = t.CB_KEYS_URL = void 0),
        (t.CB_KEYS_URL = "https://keys.coinbase.com/connect"),
        (t.WALLETLINK_URL = "https://www.walletlink.org"),
        (t.CBW_MOBILE_DEEPLINK_URL = "https://go.cb-w.com/walletlink");
    },
    53925: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.errorValues = t.standardErrorCodes = void 0),
        (t.standardErrorCodes = {
          rpc: {
            invalidInput: -32e3,
            resourceNotFound: -32001,
            resourceUnavailable: -32002,
            transactionRejected: -32003,
            methodNotSupported: -32004,
            limitExceeded: -32005,
            parse: -32700,
            invalidRequest: -32600,
            methodNotFound: -32601,
            invalidParams: -32602,
            internal: -32603,
          },
          provider: {
            userRejectedRequest: 4001,
            unauthorized: 4100,
            unsupportedMethod: 4200,
            disconnected: 4900,
            chainDisconnected: 4901,
            unsupportedChain: 4902,
          },
        }),
        (t.errorValues = {
          "-32700": {
            standard: "JSON RPC 2.0",
            message:
              "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
          },
          "-32600": {
            standard: "JSON RPC 2.0",
            message: "The JSON sent is not a valid Request object.",
          },
          "-32601": {
            standard: "JSON RPC 2.0",
            message: "The method does not exist / is not available.",
          },
          "-32602": {
            standard: "JSON RPC 2.0",
            message: "Invalid method parameter(s).",
          },
          "-32603": {
            standard: "JSON RPC 2.0",
            message: "Internal JSON-RPC error.",
          },
          "-32000": { standard: "EIP-1474", message: "Invalid input." },
          "-32001": { standard: "EIP-1474", message: "Resource not found." },
          "-32002": { standard: "EIP-1474", message: "Resource unavailable." },
          "-32003": { standard: "EIP-1474", message: "Transaction rejected." },
          "-32004": { standard: "EIP-1474", message: "Method not supported." },
          "-32005": {
            standard: "EIP-1474",
            message: "Request limit exceeded.",
          },
          4001: { standard: "EIP-1193", message: "User rejected the request." },
          4100: {
            standard: "EIP-1193",
            message:
              "The requested account and/or method has not been authorized by the user.",
          },
          4200: {
            standard: "EIP-1193",
            message:
              "The requested method is not supported by this Ethereum provider.",
          },
          4900: {
            standard: "EIP-1193",
            message: "The provider is disconnected from all chains.",
          },
          4901: {
            standard: "EIP-1193",
            message: "The provider is disconnected from the specified chain.",
          },
          4902: { standard: "EIP-3085", message: "Unrecognized chain ID." },
        });
    },
    46725: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.standardErrors = void 0);
      let n = r(53925),
        i = r(56430);
      function s(e, t) {
        let [r, n] = o(t);
        return new l(e, r || (0, i.getMessageFromCode)(e), n);
      }
      function a(e, t) {
        let [r, n] = o(t);
        return new c(e, r || (0, i.getMessageFromCode)(e), n);
      }
      function o(e) {
        if (e) {
          if ("string" == typeof e) return [e];
          if ("object" == typeof e && !Array.isArray(e)) {
            let { message: t, data: r } = e;
            if (t && "string" != typeof t)
              throw Error("Must specify string message.");
            return [t || void 0, r];
          }
        }
        return [];
      }
      t.standardErrors = {
        rpc: {
          parse: (e) => s(n.standardErrorCodes.rpc.parse, e),
          invalidRequest: (e) => s(n.standardErrorCodes.rpc.invalidRequest, e),
          invalidParams: (e) => s(n.standardErrorCodes.rpc.invalidParams, e),
          methodNotFound: (e) => s(n.standardErrorCodes.rpc.methodNotFound, e),
          internal: (e) => s(n.standardErrorCodes.rpc.internal, e),
          server: (e) => {
            if (!e || "object" != typeof e || Array.isArray(e))
              throw Error(
                "Ethereum RPC Server errors must provide single object argument."
              );
            let { code: t } = e;
            if (!Number.isInteger(t) || t > -32005 || t < -32099)
              throw Error(
                '"code" must be an integer such that: -32099 <= code <= -32005'
              );
            return s(t, e);
          },
          invalidInput: (e) => s(n.standardErrorCodes.rpc.invalidInput, e),
          resourceNotFound: (e) =>
            s(n.standardErrorCodes.rpc.resourceNotFound, e),
          resourceUnavailable: (e) =>
            s(n.standardErrorCodes.rpc.resourceUnavailable, e),
          transactionRejected: (e) =>
            s(n.standardErrorCodes.rpc.transactionRejected, e),
          methodNotSupported: (e) =>
            s(n.standardErrorCodes.rpc.methodNotSupported, e),
          limitExceeded: (e) => s(n.standardErrorCodes.rpc.limitExceeded, e),
        },
        provider: {
          userRejectedRequest: (e) =>
            a(n.standardErrorCodes.provider.userRejectedRequest, e),
          unauthorized: (e) => a(n.standardErrorCodes.provider.unauthorized, e),
          unsupportedMethod: (e) =>
            a(n.standardErrorCodes.provider.unsupportedMethod, e),
          disconnected: (e) => a(n.standardErrorCodes.provider.disconnected, e),
          chainDisconnected: (e) =>
            a(n.standardErrorCodes.provider.chainDisconnected, e),
          unsupportedChain: (e) =>
            a(n.standardErrorCodes.provider.unsupportedChain, e),
          custom: (e) => {
            if (!e || "object" != typeof e || Array.isArray(e))
              throw Error(
                "Ethereum Provider custom errors must provide single object argument."
              );
            let { code: t, message: r, data: n } = e;
            if (!r || "string" != typeof r)
              throw Error('"message" must be a nonempty string');
            return new c(t, r, n);
          },
        },
      };
      class l extends Error {
        constructor(e, t, r) {
          if (!Number.isInteger(e)) throw Error('"code" must be an integer.');
          if (!t || "string" != typeof t)
            throw Error('"message" must be a nonempty string.');
          super(t), (this.code = e), void 0 !== r && (this.data = r);
        }
      }
      class c extends l {
        constructor(e, t, r) {
          if (!(Number.isInteger(e) && e >= 1e3 && e <= 4999))
            throw Error(
              '"code" must be an integer such that: 1000 <= code <= 4999'
            );
          super(e, t, r);
        }
      }
    },
    88223: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.standardErrors = t.standardErrorCodes = void 0);
      var n = r(53925);
      Object.defineProperty(t, "standardErrorCodes", {
        enumerable: !0,
        get: function () {
          return n.standardErrorCodes;
        },
      });
      var i = r(46725);
      Object.defineProperty(t, "standardErrors", {
        enumerable: !0,
        get: function () {
          return i.standardErrors;
        },
      });
    },
    51619: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.serializeError = void 0);
      let n = r(91570),
        i = r(86546),
        s = r(53925),
        a = r(56430);
      t.serializeError = function (e, t) {
        let r = (0, a.serialize)(
            "string" == typeof e
              ? { message: e, code: s.standardErrorCodes.rpc.internal }
              : (0, n.isErrorResponse)(e)
              ? Object.assign(Object.assign({}, e), {
                  message: e.errorMessage,
                  code: e.errorCode,
                  data: { method: e.method },
                })
              : e,
            { shouldIncludeStack: !0 }
          ),
          o = new URL("https://docs.cloud.coinbase.com/wallet-sdk/docs/errors");
        o.searchParams.set("version", i.LIB_VERSION),
          o.searchParams.set("code", r.code.toString());
        let l = (function (e, t) {
          let r = null == e ? void 0 : e.method;
          if (r) return r;
          if (void 0 === t);
          else if ("string" == typeof t) return t;
          else if (!Array.isArray(t)) return t.method;
          else if (t.length > 0) return t[0].method;
        })(r.data, t);
        return (
          l && o.searchParams.set("method", l),
          o.searchParams.set("message", r.message),
          Object.assign(Object.assign({}, r), { docUrl: o.href })
        );
      };
    },
    56430: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.serialize =
          t.getErrorCode =
          t.isValidCode =
          t.getMessageFromCode =
          t.JSON_RPC_SERVER_ERROR_MESSAGE =
            void 0);
      let n = r(53925),
        i = "Unspecified error message.";
      function s(e, r = i) {
        if (e && Number.isInteger(e)) {
          let r = e.toString();
          if (l(n.errorValues, r)) return n.errorValues[r].message;
          if (e >= -32099 && e <= -32e3) return t.JSON_RPC_SERVER_ERROR_MESSAGE;
        }
        return r;
      }
      function a(e) {
        if (!Number.isInteger(e)) return !1;
        let t = e.toString();
        return !!(n.errorValues[t] || (e >= -32099 && e <= -32e3));
      }
      function o(e) {
        return e && "object" == typeof e && !Array.isArray(e)
          ? Object.assign({}, e)
          : e;
      }
      function l(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      function c(e, t) {
        return (
          "object" == typeof e &&
          null !== e &&
          t in e &&
          "string" == typeof e[t]
        );
      }
      (t.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error."),
        (t.getMessageFromCode = s),
        (t.isValidCode = a),
        (t.getErrorCode = function (e) {
          var t;
          return "number" == typeof e
            ? e
            : "object" == typeof e &&
              null !== e &&
              ("number" == typeof e.code || "number" == typeof e.errorCode)
            ? null !== (t = e.code) && void 0 !== t
              ? t
              : e.errorCode
            : void 0;
        }),
        (t.serialize = function (e, { shouldIncludeStack: t = !1 } = {}) {
          let r = {};
          return (
            e &&
            "object" == typeof e &&
            !Array.isArray(e) &&
            l(e, "code") &&
            a(e.code)
              ? ((r.code = e.code),
                e.message && "string" == typeof e.message
                  ? ((r.message = e.message), l(e, "data") && (r.data = e.data))
                  : ((r.message = s(r.code)),
                    (r.data = { originalError: o(e) })))
              : ((r.code = n.standardErrorCodes.rpc.internal),
                (r.message = c(e, "message") ? e.message : i),
                (r.data = { originalError: o(e) })),
            t && (r.stack = c(e, "stack") ? e.stack : void 0),
            r
          );
        });
    },
    95651: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.determineMethodCategory = void 0);
      let r = {
        handshake: ["eth_requestAccounts"],
        sign: [
          "eth_ecRecover",
          "personal_sign",
          "personal_ecRecover",
          "eth_signTransaction",
          "eth_sendTransaction",
          "eth_signTypedData_v1",
          "eth_signTypedData_v3",
          "eth_signTypedData_v4",
          "eth_signTypedData",
          "wallet_addEthereumChain",
          "wallet_switchEthereumChain",
          "wallet_watchAsset",
          "wallet_getCapabilities",
          "wallet_sendCalls",
          "wallet_showCallsStatus",
        ],
        state: ["eth_chainId", "eth_accounts", "eth_coinbase", "net_version"],
        deprecated: ["eth_sign", "eth_signTypedData_v2"],
        unsupported: ["eth_subscribe", "eth_unsubscribe"],
        fetch: [],
      };
      t.determineMethodCategory = function (e) {
        for (let t in r) if (r[t].includes(e)) return t;
      };
    },
    54839: function (e, t) {
      "use strict";
      function r() {
        return (e) => e;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.RegExpString =
          t.IntNumber =
          t.BigIntString =
          t.AddressString =
          t.HexString =
          t.OpaqueType =
            void 0),
        (t.OpaqueType = r),
        (t.HexString = r()),
        (t.AddressString = r()),
        (t.BigIntString = r()),
        (t.IntNumber = function (e) {
          return Math.floor(e);
        }),
        (t.RegExpString = r());
    },
    72537: function (e, t, r) {
      "use strict";
      var n = r(48764).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.areAddressArraysEqual =
          t.getFavicon =
          t.range =
          t.isBigNumber =
          t.ensureParsedJSONObject =
          t.ensureBigInt =
          t.ensureRegExpString =
          t.ensureIntNumber =
          t.ensureBuffer =
          t.ensureAddressString =
          t.ensureEvenLengthHexString =
          t.ensureHexString =
          t.isHexString =
          t.prepend0x =
          t.strip0x =
          t.has0xPrefix =
          t.hexStringFromIntNumber =
          t.intNumberFromHexString =
          t.bigIntStringFromBigInt =
          t.hexStringFromBuffer =
          t.hexStringToUint8Array =
          t.uint8ArrayToHex =
          t.randomBytesHex =
            void 0);
      let i = r(88223),
        s = r(54839),
        a = /^[0-9]*$/,
        o = /^[a-f0-9]*$/;
      function l(e) {
        return [...e].map((e) => e.toString(16).padStart(2, "0")).join("");
      }
      function c(e) {
        return e.startsWith("0x") || e.startsWith("0X");
      }
      function u(e) {
        return c(e) ? e.slice(2) : e;
      }
      function h(e) {
        return c(e) ? `0x${e.slice(2)}` : `0x${e}`;
      }
      function d(e) {
        if ("string" != typeof e) return !1;
        let t = u(e).toLowerCase();
        return o.test(t);
      }
      function f(e, t = !1) {
        if ("string" == typeof e) {
          let r = u(e).toLowerCase();
          if (o.test(r)) return (0, s.HexString)(t ? `0x${r}` : r);
        }
        throw i.standardErrors.rpc.invalidParams(
          `"${String(e)}" is not a hexadecimal string`
        );
      }
      function p(e, t = !1) {
        let r = f(e, !1);
        return (
          r.length % 2 == 1 && (r = (0, s.HexString)(`0${r}`)),
          t ? (0, s.HexString)(`0x${r}`) : r
        );
      }
      function _(e) {
        if ("number" == typeof e && Number.isInteger(e))
          return (0, s.IntNumber)(e);
        if ("string" == typeof e) {
          if (a.test(e)) return (0, s.IntNumber)(Number(e));
          if (d(e)) return (0, s.IntNumber)(Number(BigInt(p(e, !0))));
        }
        throw i.standardErrors.rpc.invalidParams(
          `Not an integer: ${String(e)}`
        );
      }
      function g(e) {
        if (null == e || "function" != typeof e.constructor) return !1;
        let { constructor: t } = e;
        return "function" == typeof t.config && "number" == typeof t.EUCLID;
      }
      (t.randomBytesHex = function (e) {
        return l(crypto.getRandomValues(new Uint8Array(e)));
      }),
        (t.uint8ArrayToHex = l),
        (t.hexStringToUint8Array = function (e) {
          return new Uint8Array(e.match(/.{1,2}/g).map((e) => parseInt(e, 16)));
        }),
        (t.hexStringFromBuffer = function (e, t = !1) {
          let r = e.toString("hex");
          return (0, s.HexString)(t ? `0x${r}` : r);
        }),
        (t.bigIntStringFromBigInt = function (e) {
          return (0, s.BigIntString)(e.toString(10));
        }),
        (t.intNumberFromHexString = function (e) {
          return (0, s.IntNumber)(Number(BigInt(p(e, !0))));
        }),
        (t.hexStringFromIntNumber = function (e) {
          return (0, s.HexString)(`0x${BigInt(e).toString(16)}`);
        }),
        (t.has0xPrefix = c),
        (t.strip0x = u),
        (t.prepend0x = h),
        (t.isHexString = d),
        (t.ensureHexString = f),
        (t.ensureEvenLengthHexString = p),
        (t.ensureAddressString = function (e) {
          if ("string" == typeof e) {
            let t = u(e).toLowerCase();
            if (d(t) && 40 === t.length) return (0, s.AddressString)(h(t));
          }
          throw i.standardErrors.rpc.invalidParams(
            `Invalid Ethereum address: ${String(e)}`
          );
        }),
        (t.ensureBuffer = function (e) {
          if (n.isBuffer(e)) return e;
          if ("string" == typeof e) {
            if (d(e)) {
              let t = p(e, !1);
              return n.from(t, "hex");
            }
            return n.from(e, "utf8");
          }
          throw i.standardErrors.rpc.invalidParams(
            `Not binary data: ${String(e)}`
          );
        }),
        (t.ensureIntNumber = _),
        (t.ensureRegExpString = function (e) {
          if (e instanceof RegExp) return (0, s.RegExpString)(e.toString());
          throw i.standardErrors.rpc.invalidParams(
            `Not a RegExp: ${String(e)}`
          );
        }),
        (t.ensureBigInt = function (e) {
          if (null !== e && ("bigint" == typeof e || g(e)))
            return BigInt(e.toString(10));
          if ("number" == typeof e) return BigInt(_(e));
          if ("string" == typeof e) {
            if (a.test(e)) return BigInt(e);
            if (d(e)) return BigInt(p(e, !0));
          }
          throw i.standardErrors.rpc.invalidParams(
            `Not an integer: ${String(e)}`
          );
        }),
        (t.ensureParsedJSONObject = function (e) {
          if ("string" == typeof e) return JSON.parse(e);
          if ("object" == typeof e) return e;
          throw i.standardErrors.rpc.invalidParams(
            `Not a JSON string or an object: ${String(e)}`
          );
        }),
        (t.isBigNumber = g),
        (t.range = function (e, t) {
          return Array.from({ length: t - e }, (t, r) => e + r);
        }),
        (t.getFavicon = function () {
          let e =
              document.querySelector('link[sizes="192x192"]') ||
              document.querySelector('link[sizes="180x180"]') ||
              document.querySelector('link[rel="icon"]') ||
              document.querySelector('link[rel="shortcut icon"]'),
            { protocol: t, host: r } = document.location,
            n = e ? e.getAttribute("href") : null;
          return !n || n.startsWith("javascript:") || n.startsWith("vbscript:")
            ? null
            : n.startsWith("http://") ||
              n.startsWith("https://") ||
              n.startsWith("data:")
            ? n
            : n.startsWith("//")
            ? t + n
            : `${t}//${r}${n}`;
        }),
        (t.areAddressArraysEqual = function (e, t) {
          return e.length === t.length && e.every((e, r) => e === t[r]);
        });
    },
    32517: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CoinbaseWalletSDK = void 0);
      let n = r(56938);
      t.default = n.CoinbaseWalletSDK;
      var i = r(56938);
      Object.defineProperty(t, "CoinbaseWalletSDK", {
        enumerable: !0,
        get: function () {
          return i.CoinbaseWalletSDK;
        },
      });
    },
    33032: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SCWKeyManager = void 0);
      let n = r(39867),
        i = r(81486),
        s = { storageKey: "ownPrivateKey", keyType: "private" },
        a = { storageKey: "ownPublicKey", keyType: "public" },
        o = { storageKey: "peerPublicKey", keyType: "public" };
      class l {
        constructor() {
          (this.storage = new i.ScopedLocalStorage("CBWSDK", "SCWKeyManager")),
            (this.ownPrivateKey = null),
            (this.ownPublicKey = null),
            (this.peerPublicKey = null),
            (this.sharedSecret = null);
        }
        async getOwnPublicKey() {
          return await this.loadKeysIfNeeded(), this.ownPublicKey;
        }
        async getSharedSecret() {
          return await this.loadKeysIfNeeded(), this.sharedSecret;
        }
        async setPeerPublicKey(e) {
          (this.sharedSecret = null),
            (this.peerPublicKey = e),
            await this.storeKey(o, e),
            await this.loadKeysIfNeeded();
        }
        async clear() {
          (this.ownPrivateKey = null),
            (this.ownPublicKey = null),
            (this.peerPublicKey = null),
            (this.sharedSecret = null),
            this.storage.removeItem(a.storageKey),
            this.storage.removeItem(s.storageKey),
            this.storage.removeItem(o.storageKey);
        }
        async generateKeyPair() {
          let e = await (0, n.generateKeyPair)();
          (this.ownPrivateKey = e.privateKey),
            (this.ownPublicKey = e.publicKey),
            await this.storeKey(s, e.privateKey),
            await this.storeKey(a, e.publicKey);
        }
        async loadKeysIfNeeded() {
          null === this.ownPrivateKey &&
            (this.ownPrivateKey = await this.loadKey(s)),
            null === this.ownPublicKey &&
              (this.ownPublicKey = await this.loadKey(a)),
            (null === this.ownPrivateKey || null === this.ownPublicKey) &&
              (await this.generateKeyPair()),
            null === this.peerPublicKey &&
              (this.peerPublicKey = await this.loadKey(o)),
            null === this.sharedSecret &&
              null !== this.ownPrivateKey &&
              null !== this.peerPublicKey &&
              (this.sharedSecret = await (0, n.deriveSharedSecret)(
                this.ownPrivateKey,
                this.peerPublicKey
              ));
        }
        async loadKey(e) {
          let t = this.storage.getItem(e.storageKey);
          return t ? (0, n.importKeyFromHexString)(e.keyType, t) : null;
        }
        async storeKey(e, t) {
          let r = await (0, n.exportKeyToHexString)(e.keyType, t);
          this.storage.setItem(e.storageKey, r);
        }
      }
      t.SCWKeyManager = l;
    },
    83841: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SCWSigner = void 0);
      let n = r(33032),
        i = r(87008),
        s = r(88223),
        a = r(72537),
        o = r(39867);
      class l {
        constructor(e) {
          (this.metadata = e.metadata),
            (this.communicator = e.communicator),
            (this.keyManager = new n.SCWKeyManager()),
            (this.stateManager = new i.SCWStateManager({
              appChainIds: this.metadata.appChainIds,
              updateListener: e.updateListener,
            })),
            (this.handshake = this.handshake.bind(this)),
            (this.request = this.request.bind(this)),
            (this.createRequestMessage = this.createRequestMessage.bind(this)),
            (this.decryptResponseMessage =
              this.decryptResponseMessage.bind(this));
        }
        async handshake() {
          let e = await this.createRequestMessage({
              handshake: {
                method: "eth_requestAccounts",
                params: this.metadata,
              },
            }),
            t = await this.communicator.postRequestAndWaitForResponse(e);
          if ("failure" in t.content) throw t.content.failure;
          let r = await (0, o.importKeyFromHexString)("public", t.sender);
          await this.keyManager.setPeerPublicKey(r);
          let n = await this.decryptResponseMessage(t);
          this.updateInternalState({ method: "eth_requestAccounts" }, n);
          let i = n.result;
          if ("error" in i) throw i.error;
          return this.stateManager.accounts;
        }
        async request(e) {
          let t = this.tryLocalHandling(e);
          if (void 0 !== t) {
            if (t instanceof Error) throw t;
            return t;
          }
          await this.communicator.waitForPopupLoaded();
          let r = await this.sendEncryptedRequest(e),
            n = await this.decryptResponseMessage(r);
          this.updateInternalState(e, n);
          let i = n.result;
          if ("error" in i) throw i.error;
          return i.value;
        }
        async disconnect() {
          this.stateManager.clear(), await this.keyManager.clear();
        }
        tryLocalHandling(e) {
          var t;
          switch (e.method) {
            case "wallet_switchEthereumChain": {
              let r = e.params;
              if (
                !r ||
                !(null === (t = r[0]) || void 0 === t ? void 0 : t.chainId)
              )
                throw s.standardErrors.rpc.invalidParams();
              let n = (0, a.ensureIntNumber)(r[0].chainId);
              return this.stateManager.switchChain(n) ? null : void 0;
            }
            case "wallet_getCapabilities": {
              let e = this.stateManager.walletCapabilities;
              if (!e)
                throw s.standardErrors.provider.unauthorized(
                  "No wallet capabilities found, please disconnect and reconnect"
                );
              return e;
            }
            default:
              return;
          }
        }
        async sendEncryptedRequest(e) {
          let t = await this.keyManager.getSharedSecret();
          if (!t)
            throw s.standardErrors.provider.unauthorized(
              "No valid session found, try requestAccounts before other methods"
            );
          let r = await (0, o.encryptContent)(
              { action: e, chainId: this.stateManager.activeChain.id },
              t
            ),
            n = await this.createRequestMessage({ encrypted: r });
          return this.communicator.postRequestAndWaitForResponse(n);
        }
        async createRequestMessage(e) {
          let t = await (0, o.exportKeyToHexString)(
            "public",
            await this.keyManager.getOwnPublicKey()
          );
          return {
            id: crypto.randomUUID(),
            sender: t,
            content: e,
            timestamp: new Date(),
          };
        }
        async decryptResponseMessage(e) {
          let t = e.content;
          if ("failure" in t) throw t.failure;
          let r = await this.keyManager.getSharedSecret();
          if (!r)
            throw s.standardErrors.provider.unauthorized("Invalid session");
          return (0, o.decryptContent)(t.encrypted, r);
        }
        updateInternalState(e, t) {
          var r, n;
          let i = null === (r = t.data) || void 0 === r ? void 0 : r.chains;
          i && this.stateManager.updateAvailableChains(i);
          let s =
            null === (n = t.data) || void 0 === n ? void 0 : n.capabilities;
          s && this.stateManager.updateWalletCapabilities(s);
          let o = t.result;
          if (!("error" in o))
            switch (e.method) {
              case "eth_requestAccounts": {
                let e = o.value;
                this.stateManager.updateAccounts(e);
                break;
              }
              case "wallet_switchEthereumChain": {
                if (null !== o.value) return;
                let t = e.params,
                  r = (0, a.ensureIntNumber)(t[0].chainId);
                this.stateManager.switchChain(r);
              }
            }
        }
      }
      t.SCWSigner = l;
    },
    87008: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SCWStateManager = void 0);
      let n = r(81486),
        i = "accounts",
        s = "activeChain",
        a = "availableChains",
        o = "walletCapabilities";
      class l {
        get accounts() {
          return this._accounts;
        }
        get activeChain() {
          return this._activeChain;
        }
        get walletCapabilities() {
          return this._walletCapabilities;
        }
        constructor(e) {
          var t, r;
          (this.storage = new n.ScopedLocalStorage(
            "CBWSDK",
            "SCWStateManager"
          )),
            (this.updateListener = e.updateListener),
            (this.availableChains = this.loadItemFromStorage(a)),
            (this._walletCapabilities = this.loadItemFromStorage(o));
          let l = this.loadItemFromStorage(i),
            c = this.loadItemFromStorage(s);
          l &&
            this.updateListener.onAccountsUpdate({
              accounts: l,
              source: "storage",
            }),
            c &&
              this.updateListener.onChainUpdate({
                chain: c,
                source: "storage",
              }),
            (this._accounts = l || []),
            (this._activeChain = c || {
              id:
                null !==
                  (r =
                    null === (t = e.appChainIds) || void 0 === t
                      ? void 0
                      : t[0]) && void 0 !== r
                  ? r
                  : 1,
            });
        }
        updateAccounts(e) {
          (this._accounts = e),
            this.storeItemToStorage(i, e),
            this.updateListener.onAccountsUpdate({
              accounts: e,
              source: "wallet",
            });
        }
        switchChain(e) {
          var t;
          let r =
            null === (t = this.availableChains) || void 0 === t
              ? void 0
              : t.find((t) => t.id === e);
          return (
            !!r &&
            (r === this._activeChain ||
              ((this._activeChain = r),
              this.storeItemToStorage(s, r),
              this.updateListener.onChainUpdate({ chain: r, source: "wallet" }),
              !0))
          );
        }
        updateAvailableChains(e) {
          if (!e || 0 === Object.keys(e).length) return;
          let t = Object.entries(e).map(([e, t]) => ({
            id: Number(e),
            rpcUrl: t,
          }));
          (this.availableChains = t),
            this.storeItemToStorage(a, t),
            this.switchChain(this._activeChain.id);
        }
        updateWalletCapabilities(e) {
          (this._walletCapabilities = e), this.storeItemToStorage(o, e);
        }
        storeItemToStorage(e, t) {
          this.storage.setItem(e, JSON.stringify(t));
        }
        loadItemFromStorage(e) {
          let t = this.storage.getItem(e);
          return t ? JSON.parse(t) : void 0;
        }
        clear() {
          this.storage.clear();
        }
      }
      t.SCWStateManager = l;
    },
    59391: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createSigner =
          t.fetchSignerType =
          t.storeSignerType =
          t.loadSignerType =
            void 0);
      let n = r(83841),
        i = r(95231),
        s = r(88223),
        a = r(21460),
        o = r(81486),
        l = "SignerType",
        c = new o.ScopedLocalStorage("CBWSDK", "SignerConfigurator");
      async function u(e) {
        let { communicator: t, metadata: r } = e;
        h(t, r).catch(() => {});
        let n = {
            id: crypto.randomUUID(),
            event: "selectSignerType",
            data: e.preference,
          },
          { data: i } = await t.postRequestAndWaitForResponse(n);
        return i;
      }
      async function h(e, t) {
        await e.onMessage(({ event: e }) => "WalletLinkSessionRequest" === e);
        let r = new i.WalletLinkSigner({ metadata: t });
        e.postMessage({
          event: "WalletLinkUpdate",
          data: { session: r.getSession() },
        }),
          await r.handshake(),
          e.postMessage({ event: "WalletLinkUpdate", data: { connected: !0 } });
      }
      (t.loadSignerType = function () {
        return c.getItem(l);
      }),
        (t.storeSignerType = function (e) {
          c.setItem(l, e);
        }),
        (t.fetchSignerType = u),
        (t.createSigner = function (e) {
          let {
            signerType: t,
            metadata: r,
            communicator: o,
            updateListener: l,
          } = e;
          switch (t) {
            case "scw":
              return new n.SCWSigner({
                metadata: r,
                updateListener: l,
                communicator: o,
              });
            case "walletlink":
              return new i.WalletLinkSigner({ metadata: r, updateListener: l });
            case "extension": {
              let e = (0, a.getCoinbaseInjectedSigner)();
              if (!e)
                throw s.standardErrors.rpc.internal(
                  "injected signer not found"
                );
              return e;
            }
          }
        });
    },
    95231: function (e, t, r) {
      "use strict";
      var n = r(48764).Buffer,
        i =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WalletLinkSigner = void 0);
      let s = i(r(94418)),
        a = r(43075),
        o = r(77354),
        l = r(91570),
        c = r(64124),
        u = r(14170),
        h = r(88223),
        d = r(72537),
        f = r(81486),
        p = "DefaultChainId",
        _ = "DefaultJsonRpcUrl";
      class g {
        constructor(e) {
          var t, r;
          (this._relay = null),
            (this._addresses = []),
            (this.hasMadeFirstChainChangedEmission = !1);
          let { appName: n, appLogoUrl: i } = e.metadata;
          (this._appName = n),
            (this._appLogoUrl = i),
            (this._storage = new f.ScopedLocalStorage(
              "walletlink",
              u.WALLETLINK_URL
            )),
            (this.updateListener = e.updateListener),
            (this._relayEventManager = new o.RelayEventManager()),
            (this._jsonRpcUrlFromOpts = "");
          let s = this._storage.getItem(a.LOCAL_STORAGE_ADDRESSES_KEY);
          if (s) {
            let e = s.split(" ");
            "" !== e[0] &&
              ((this._addresses = e.map((e) => (0, d.ensureAddressString)(e))),
              null === (t = this.updateListener) ||
                void 0 === t ||
                t.onAccountsUpdate({
                  accounts: this._addresses,
                  source: "storage",
                }));
          }
          this._storage.getItem(p) &&
            (null === (r = this.updateListener) ||
              void 0 === r ||
              r.onChainUpdate({
                chain: { id: this.getChainId(), rpcUrl: this.jsonRpcUrl },
                source: "storage",
              }),
            (this.hasMadeFirstChainChangedEmission = !0)),
            this.initializeRelay();
        }
        getSession() {
          let { id: e, secret: t } =
            this.initializeRelay().getWalletLinkSession();
          return { id: e, secret: t };
        }
        async handshake() {
          return await this.request({ method: "eth_requestAccounts" });
        }
        get selectedAddress() {
          return this._addresses[0] || void 0;
        }
        get jsonRpcUrl() {
          var e;
          return null !== (e = this._storage.getItem(_)) && void 0 !== e
            ? e
            : this._jsonRpcUrlFromOpts;
        }
        set jsonRpcUrl(e) {
          this._storage.setItem(_, e);
        }
        updateProviderInfo(e, t) {
          var r;
          this.jsonRpcUrl = e;
          let n = this.getChainId();
          this._storage.setItem(p, t.toString(10)),
            ((0, d.ensureIntNumber)(t) === n &&
              this.hasMadeFirstChainChangedEmission) ||
              (null === (r = this.updateListener) ||
                void 0 === r ||
                r.onChainUpdate({
                  chain: { id: t, rpcUrl: e },
                  source: "wallet",
                }),
              (this.hasMadeFirstChainChangedEmission = !0));
        }
        async watchAsset(e, t, r, n, i, s) {
          let a = this.initializeRelay(),
            o = await a.watchAsset(
              e,
              t,
              r,
              n,
              i,
              null == s ? void 0 : s.toString()
            );
          return !(0, l.isErrorResponse)(o) && !!o.result;
        }
        async addEthereumChain(e, t, r, n, i, s) {
          var a, o;
          if ((0, d.ensureIntNumber)(e) === this.getChainId()) return !1;
          let c = this.initializeRelay();
          this._isAuthorized() || (await c.requestEthereumAccounts());
          let u = await c.addEthereumChain(e.toString(), t, i, r, n, s);
          return (
            !(0, l.isErrorResponse)(u) &&
            ((null === (a = u.result) || void 0 === a
              ? void 0
              : a.isApproved) === !0 && this.updateProviderInfo(t[0], e),
            (null === (o = u.result) || void 0 === o
              ? void 0
              : o.isApproved) === !0)
          );
        }
        async switchEthereumChain(e) {
          let t = this.initializeRelay(),
            r = await t.switchEthereumChain(
              e.toString(10),
              this.selectedAddress || void 0
            );
          if ((0, l.isErrorResponse)(r)) {
            if (!r.errorCode) return;
            if (r.errorCode === h.standardErrorCodes.provider.unsupportedChain)
              throw h.standardErrors.provider.unsupportedChain();
            throw h.standardErrors.provider.custom({
              message: r.errorMessage,
              code: r.errorCode,
            });
          }
          let n = r.result;
          n.isApproved &&
            n.rpcUrl.length > 0 &&
            this.updateProviderInfo(n.rpcUrl, e);
        }
        async disconnect() {
          this._relay && this._relay.resetAndReload(), this._storage.clear();
        }
        async request(e) {
          try {
            return this._request(e).catch((e) => {
              throw e;
            });
          } catch (e) {
            return Promise.reject(e);
          }
        }
        async _request(e) {
          if (!e || "object" != typeof e || Array.isArray(e))
            throw h.standardErrors.rpc.invalidRequest({
              message: "Expected a single, non-array, object argument.",
              data: e,
            });
          let { method: t, params: r } = e;
          if ("string" != typeof t || 0 === t.length)
            throw h.standardErrors.rpc.invalidRequest({
              message: "'args.method' must be a non-empty string.",
              data: e,
            });
          if (
            void 0 !== r &&
            !Array.isArray(r) &&
            ("object" != typeof r || null === r)
          )
            throw h.standardErrors.rpc.invalidRequest({
              message: "'args.params' must be an object or array if provided.",
              data: e,
            });
          let n = void 0 === r ? [] : r,
            i = this._relayEventManager.makeRequestId();
          return (
            await this._sendRequestAsync({
              method: t,
              params: n,
              jsonrpc: "2.0",
              id: i,
            })
          ).result;
        }
        _setAddresses(e, t) {
          var r;
          if (!Array.isArray(e)) throw Error("addresses is not an array");
          let n = e.map((e) => (0, d.ensureAddressString)(e));
          JSON.stringify(n) !== JSON.stringify(this._addresses) &&
            ((this._addresses = n),
            null === (r = this.updateListener) ||
              void 0 === r ||
              r.onAccountsUpdate({ accounts: n, source: "wallet" }),
            this._storage.setItem(a.LOCAL_STORAGE_ADDRESSES_KEY, n.join(" ")));
        }
        _sendRequestAsync(e) {
          return new Promise((t, r) => {
            try {
              let r = this._handleSynchronousMethods(e);
              if (void 0 !== r)
                return t({ jsonrpc: "2.0", id: e.id, result: r });
            } catch (e) {
              return r(e);
            }
            this._handleAsynchronousMethods(e)
              .then(
                (r) => r && t(Object.assign(Object.assign({}, r), { id: e.id }))
              )
              .catch((e) => r(e));
          });
        }
        _handleSynchronousMethods(e) {
          let { method: t } = e;
          switch (t) {
            case "eth_accounts":
              return this._eth_accounts();
            case "eth_coinbase":
              return this._eth_coinbase();
            case "net_version":
              return this._net_version();
            case "eth_chainId":
              return this._eth_chainId();
            default:
              return;
          }
        }
        async _handleAsynchronousMethods(e) {
          let { method: t } = e,
            r = e.params || [];
          switch (t) {
            case "eth_requestAccounts":
              return this._eth_requestAccounts();
            case "eth_sign":
              return this._eth_sign(r);
            case "eth_ecRecover":
              return this._eth_ecRecover(r);
            case "personal_sign":
              return this._personal_sign(r);
            case "personal_ecRecover":
              return this._personal_ecRecover(r);
            case "eth_signTransaction":
              return this._eth_signTransaction(r);
            case "eth_sendRawTransaction":
              return this._eth_sendRawTransaction(r);
            case "eth_sendTransaction":
              return this._eth_sendTransaction(r);
            case "eth_signTypedData_v1":
              return this._eth_signTypedData_v1(r);
            case "eth_signTypedData_v2":
            default:
              return this._throwUnsupportedMethodError();
            case "eth_signTypedData_v3":
              return this._eth_signTypedData_v3(r);
            case "eth_signTypedData_v4":
            case "eth_signTypedData":
              return this._eth_signTypedData_v4(r);
            case "wallet_addEthereumChain":
              return this._wallet_addEthereumChain(r);
            case "wallet_switchEthereumChain":
              return this._wallet_switchEthereumChain(r);
            case "wallet_watchAsset":
              return this._wallet_watchAsset(r);
          }
        }
        _isKnownAddress(e) {
          try {
            let t = (0, d.ensureAddressString)(e);
            return this._addresses
              .map((e) => (0, d.ensureAddressString)(e))
              .includes(t);
          } catch (e) {}
          return !1;
        }
        _ensureKnownAddress(e) {
          if (!this._isKnownAddress(e)) throw Error("Unknown Ethereum address");
        }
        _prepareTransactionParams(e) {
          let t = e.from
            ? (0, d.ensureAddressString)(e.from)
            : this.selectedAddress;
          if (!t) throw Error("Ethereum address is unavailable");
          this._ensureKnownAddress(t);
          let r = e.to ? (0, d.ensureAddressString)(e.to) : null,
            i = null != e.value ? (0, d.ensureBigInt)(e.value) : BigInt(0),
            s = e.data ? (0, d.ensureBuffer)(e.data) : n.alloc(0),
            a = null != e.nonce ? (0, d.ensureIntNumber)(e.nonce) : null,
            o = null != e.gasPrice ? (0, d.ensureBigInt)(e.gasPrice) : null,
            l =
              null != e.maxFeePerGas
                ? (0, d.ensureBigInt)(e.maxFeePerGas)
                : null;
          return {
            fromAddress: t,
            toAddress: r,
            weiValue: i,
            data: s,
            nonce: a,
            gasPriceInWei: o,
            maxFeePerGas: l,
            maxPriorityFeePerGas:
              null != e.maxPriorityFeePerGas
                ? (0, d.ensureBigInt)(e.maxPriorityFeePerGas)
                : null,
            gasLimit: null != e.gas ? (0, d.ensureBigInt)(e.gas) : null,
            chainId: e.chainId
              ? (0, d.ensureIntNumber)(e.chainId)
              : this.getChainId(),
          };
        }
        _isAuthorized() {
          return this._addresses.length > 0;
        }
        _requireAuthorization() {
          if (!this._isAuthorized())
            throw h.standardErrors.provider.unauthorized({});
        }
        _throwUnsupportedMethodError() {
          throw h.standardErrors.provider.unsupportedMethod({});
        }
        async _signEthereumMessage(e, t, r, n) {
          this._ensureKnownAddress(t);
          try {
            let i = this.initializeRelay(),
              s = await i.signEthereumMessage(e, t, r, n);
            if ((0, l.isErrorResponse)(s)) throw Error(s.errorMessage);
            return { jsonrpc: "2.0", id: 0, result: s.result };
          } catch (e) {
            if (
              "string" == typeof e.message &&
              e.message.match(/(denied|rejected)/i)
            )
              throw h.standardErrors.provider.userRejectedRequest(
                "User denied message signature"
              );
            throw e;
          }
        }
        async _ethereumAddressFromSignedMessage(e, t, r) {
          let n = this.initializeRelay(),
            i = await n.ethereumAddressFromSignedMessage(e, t, r);
          if ((0, l.isErrorResponse)(i)) throw Error(i.errorMessage);
          return { jsonrpc: "2.0", id: 0, result: i.result };
        }
        _eth_accounts() {
          return [...this._addresses];
        }
        _eth_coinbase() {
          return this.selectedAddress || null;
        }
        _net_version() {
          return this.getChainId().toString(10);
        }
        _eth_chainId() {
          return (0, d.hexStringFromIntNumber)(this.getChainId());
        }
        getChainId() {
          let e = this._storage.getItem(p);
          if (!e) return (0, d.ensureIntNumber)(1);
          let t = parseInt(e, 10);
          return (0, d.ensureIntNumber)(t);
        }
        async _eth_requestAccounts() {
          let e;
          if (this._isAuthorized())
            return Promise.resolve({
              jsonrpc: "2.0",
              id: 0,
              result: this._addresses,
            });
          try {
            let t = this.initializeRelay();
            if (
              ((e = await t.requestEthereumAccounts()),
              (0, l.isErrorResponse)(e))
            )
              throw Error(e.errorMessage);
          } catch (e) {
            if (
              "string" == typeof e.message &&
              e.message.match(/(denied|rejected)/i)
            )
              throw h.standardErrors.provider.userRejectedRequest(
                "User denied account authorization"
              );
            throw e;
          }
          if (!e.result) throw Error("accounts received is empty");
          return (
            this._setAddresses(e.result),
            { jsonrpc: "2.0", id: 0, result: this._addresses }
          );
        }
        _eth_sign(e) {
          this._requireAuthorization();
          let t = (0, d.ensureAddressString)(e[0]),
            r = (0, d.ensureBuffer)(e[1]);
          return this._signEthereumMessage(r, t, !1);
        }
        _eth_ecRecover(e) {
          let t = (0, d.ensureBuffer)(e[0]),
            r = (0, d.ensureBuffer)(e[1]);
          return this._ethereumAddressFromSignedMessage(t, r, !1);
        }
        _personal_sign(e) {
          this._requireAuthorization();
          let t = (0, d.ensureBuffer)(e[0]),
            r = (0, d.ensureAddressString)(e[1]);
          return this._signEthereumMessage(t, r, !0);
        }
        _personal_ecRecover(e) {
          let t = (0, d.ensureBuffer)(e[0]),
            r = (0, d.ensureBuffer)(e[1]);
          return this._ethereumAddressFromSignedMessage(t, r, !0);
        }
        async _eth_signTransaction(e) {
          this._requireAuthorization();
          let t = this._prepareTransactionParams(e[0] || {});
          try {
            let e = this.initializeRelay(),
              r = await e.signEthereumTransaction(t);
            if ((0, l.isErrorResponse)(r)) throw Error(r.errorMessage);
            return { jsonrpc: "2.0", id: 0, result: r.result };
          } catch (e) {
            if (
              "string" == typeof e.message &&
              e.message.match(/(denied|rejected)/i)
            )
              throw h.standardErrors.provider.userRejectedRequest(
                "User denied transaction signature"
              );
            throw e;
          }
        }
        async _eth_sendRawTransaction(e) {
          let t = (0, d.ensureBuffer)(e[0]),
            r = this.initializeRelay(),
            n = await r.submitEthereumTransaction(t, this.getChainId());
          if ((0, l.isErrorResponse)(n)) throw Error(n.errorMessage);
          return { jsonrpc: "2.0", id: 0, result: n.result };
        }
        async _eth_sendTransaction(e) {
          this._requireAuthorization();
          let t = this._prepareTransactionParams(e[0] || {});
          try {
            let e = this.initializeRelay(),
              r = await e.signAndSubmitEthereumTransaction(t);
            if ((0, l.isErrorResponse)(r)) throw Error(r.errorMessage);
            return { jsonrpc: "2.0", id: 0, result: r.result };
          } catch (e) {
            if (
              "string" == typeof e.message &&
              e.message.match(/(denied|rejected)/i)
            )
              throw h.standardErrors.provider.userRejectedRequest(
                "User denied transaction signature"
              );
            throw e;
          }
        }
        async _eth_signTypedData_v1(e) {
          this._requireAuthorization();
          let t = (0, d.ensureParsedJSONObject)(e[0]),
            r = (0, d.ensureAddressString)(e[1]);
          this._ensureKnownAddress(r);
          let n = s.default.hashForSignTypedDataLegacy({ data: t }),
            i = JSON.stringify(t, null, 2);
          return this._signEthereumMessage(n, r, !1, i);
        }
        async _eth_signTypedData_v3(e) {
          this._requireAuthorization();
          let t = (0, d.ensureAddressString)(e[0]),
            r = (0, d.ensureParsedJSONObject)(e[1]);
          this._ensureKnownAddress(t);
          let n = s.default.hashForSignTypedData_v3({ data: r }),
            i = JSON.stringify(r, null, 2);
          return this._signEthereumMessage(n, t, !1, i);
        }
        async _eth_signTypedData_v4(e) {
          this._requireAuthorization();
          let t = (0, d.ensureAddressString)(e[0]),
            r = (0, d.ensureParsedJSONObject)(e[1]);
          this._ensureKnownAddress(t);
          let n = s.default.hashForSignTypedData_v4({ data: r }),
            i = JSON.stringify(r, null, 2);
          return this._signEthereumMessage(n, t, !1, i);
        }
        async _wallet_addEthereumChain(e) {
          var t, r, n, i;
          let s = e[0];
          if (
            (null === (t = s.rpcUrls) || void 0 === t ? void 0 : t.length) === 0
          )
            return {
              jsonrpc: "2.0",
              id: 0,
              error: { code: 2, message: "please pass in at least 1 rpcUrl" },
            };
          if (!s.chainName || "" === s.chainName.trim())
            throw h.standardErrors.rpc.invalidParams(
              "chainName is a required field"
            );
          if (!s.nativeCurrency)
            throw h.standardErrors.rpc.invalidParams(
              "nativeCurrency is a required field"
            );
          let a = parseInt(s.chainId, 16);
          return (await this.addEthereumChain(
            a,
            null !== (r = s.rpcUrls) && void 0 !== r ? r : [],
            null !== (n = s.blockExplorerUrls) && void 0 !== n ? n : [],
            s.chainName,
            null !== (i = s.iconUrls) && void 0 !== i ? i : [],
            s.nativeCurrency
          ))
            ? { jsonrpc: "2.0", id: 0, result: null }
            : {
                jsonrpc: "2.0",
                id: 0,
                error: { code: 2, message: "unable to add ethereum chain" },
              };
        }
        async _wallet_switchEthereumChain(e) {
          let t = e[0];
          return (
            await this.switchEthereumChain(parseInt(t.chainId, 16)),
            { jsonrpc: "2.0", id: 0, result: null }
          );
        }
        async _wallet_watchAsset(e) {
          let t = Array.isArray(e) ? e[0] : e;
          if (!t.type)
            throw h.standardErrors.rpc.invalidParams("Type is required");
          if ((null == t ? void 0 : t.type) !== "ERC20")
            throw h.standardErrors.rpc.invalidParams(
              `Asset of type '${t.type}' is not supported`
            );
          if (!(null == t ? void 0 : t.options))
            throw h.standardErrors.rpc.invalidParams("Options are required");
          if (!(null == t ? void 0 : t.options.address))
            throw h.standardErrors.rpc.invalidParams("Address is required");
          let r = this.getChainId(),
            { address: n, symbol: i, image: s, decimals: a } = t.options;
          return {
            jsonrpc: "2.0",
            id: 0,
            result: await this.watchAsset(t.type, n, i, a, s, r),
          };
        }
        initializeRelay() {
          if (!this._relay) {
            let e = new c.WalletLinkRelay({
              linkAPIUrl: u.WALLETLINK_URL,
              storage: this._storage,
            });
            e.setAppInfo(this._appName, this._appLogoUrl),
              e.attachUI(),
              e.setAccountsCallback((e, t) => this._setAddresses(e, t)),
              e.setChainCallback((e, t) => {
                this.updateProviderInfo(t, parseInt(e, 10));
              }),
              (this._relay = e);
          }
          return this._relay;
        }
      }
      t.WalletLinkSigner = g;
    },
    77354: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.RelayEventManager = void 0);
      let n = r(72537);
      class i {
        constructor() {
          (this._nextRequestId = 0), (this.callbacks = new Map());
        }
        makeRequestId() {
          this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
          let e = this._nextRequestId,
            t = (0, n.prepend0x)(e.toString(16));
          return this.callbacks.get(t) && this.callbacks.delete(t), e;
        }
      }
      t.RelayEventManager = i;
    },
    64124: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WalletLinkRelay = void 0);
      let n = r(80656),
        i = r(43075),
        s = r(77354),
        a = r(10672),
        o = r(91570),
        l = r(62814),
        c = r(79567),
        u = r(97819),
        h = r(88223),
        d = r(72537),
        f = r(81486);
      class p {
        constructor(e) {
          (this.accountsCallback = null),
            (this.chainCallbackParams = { chainId: "", jsonRpcUrl: "" }),
            (this.chainCallback = null),
            (this.dappDefaultChain = 1),
            (this.isMobileWeb = (0, l.isMobileWeb)()),
            (this.appName = ""),
            (this.appLogoUrl = null),
            (this.linkedUpdated = (e) => {
              this.isLinked = e;
              let t = this.storage.getItem(i.LOCAL_STORAGE_ADDRESSES_KEY);
              if (
                (e && (this._session.linked = e),
                (this.isUnlinkedErrorState = !1),
                t)
              ) {
                let r = t.split(" "),
                  n = "true" === this.storage.getItem("IsStandaloneSigning");
                "" === r[0] ||
                  e ||
                  !this._session.linked ||
                  n ||
                  (this.isUnlinkedErrorState = !0);
              }
            }),
            (this.metadataUpdated = (e, t) => {
              this.storage.setItem(e, t);
            }),
            (this.chainUpdated = (e, t) => {
              (this.chainCallbackParams.chainId !== e ||
                this.chainCallbackParams.jsonRpcUrl !== t) &&
                ((this.chainCallbackParams = { chainId: e, jsonRpcUrl: t }),
                this.chainCallback && this.chainCallback(e, t));
            }),
            (this.accountUpdated = (e) => {
              this.accountsCallback && this.accountsCallback([e]),
                p.accountRequestCallbackIds.size > 0 &&
                  (Array.from(p.accountRequestCallbackIds.values()).forEach(
                    (t) => {
                      this.invokeCallback(
                        Object.assign(
                          Object.assign(
                            {},
                            {
                              type: "WEB3_RESPONSE",
                              id: t,
                              response: {
                                method: "requestEthereumAccounts",
                                result: [e],
                              },
                            }
                          ),
                          { id: t }
                        )
                      );
                    }
                  ),
                  p.accountRequestCallbackIds.clear());
            }),
            (this.resetAndReload = this.resetAndReload.bind(this)),
            (this.linkAPIUrl = e.linkAPIUrl),
            (this.storage = e.storage);
          let { session: t, ui: r, connection: n } = this.subscribe();
          (this._session = t),
            (this.connection = n),
            (this.relayEventManager = new s.RelayEventManager()),
            (this.ui = r);
        }
        subscribe() {
          let e =
              a.WalletLinkSession.load(this.storage) ||
              new a.WalletLinkSession(this.storage).save(),
            { linkAPIUrl: t } = this,
            r = new n.WalletLinkConnection({
              session: e,
              linkAPIUrl: t,
              listener: this,
            }),
            i = this.isMobileWeb
              ? new u.WLMobileRelayUI()
              : new c.WalletLinkRelayUI();
          return r.connect(), { session: e, ui: i, connection: r };
        }
        attachUI() {
          this.ui.attach();
        }
        resetAndReload() {
          Promise.race([
            this.connection.setSessionMetadata("__destroyed", "1"),
            new Promise((e) => setTimeout(() => e(null), 1e3)),
          ])
            .then(() => {
              this.connection.destroy();
              let e = a.WalletLinkSession.load(this.storage);
              (null == e ? void 0 : e.id) === this._session.id &&
                f.ScopedLocalStorage.clearAll(),
                document.location.reload();
            })
            .catch((e) => {});
        }
        setAppInfo(e, t) {
          (this.appName = e), (this.appLogoUrl = t);
        }
        getStorageItem(e) {
          return this.storage.getItem(e);
        }
        setStorageItem(e, t) {
          this.storage.setItem(e, t);
        }
        signEthereumMessage(e, t, r, n) {
          return this.sendRequest({
            method: "signEthereumMessage",
            params: {
              message: (0, d.hexStringFromBuffer)(e, !0),
              address: t,
              addPrefix: r,
              typedDataJson: n || null,
            },
          });
        }
        ethereumAddressFromSignedMessage(e, t, r) {
          return this.sendRequest({
            method: "ethereumAddressFromSignedMessage",
            params: {
              message: (0, d.hexStringFromBuffer)(e, !0),
              signature: (0, d.hexStringFromBuffer)(t, !0),
              addPrefix: r,
            },
          });
        }
        signEthereumTransaction(e) {
          return this.sendRequest({
            method: "signEthereumTransaction",
            params: {
              fromAddress: e.fromAddress,
              toAddress: e.toAddress,
              weiValue: (0, d.bigIntStringFromBigInt)(e.weiValue),
              data: (0, d.hexStringFromBuffer)(e.data, !0),
              nonce: e.nonce,
              gasPriceInWei: e.gasPriceInWei
                ? (0, d.bigIntStringFromBigInt)(e.gasPriceInWei)
                : null,
              maxFeePerGas: e.gasPriceInWei
                ? (0, d.bigIntStringFromBigInt)(e.gasPriceInWei)
                : null,
              maxPriorityFeePerGas: e.gasPriceInWei
                ? (0, d.bigIntStringFromBigInt)(e.gasPriceInWei)
                : null,
              gasLimit: e.gasLimit
                ? (0, d.bigIntStringFromBigInt)(e.gasLimit)
                : null,
              chainId: e.chainId,
              shouldSubmit: !1,
            },
          });
        }
        signAndSubmitEthereumTransaction(e) {
          return this.sendRequest({
            method: "signEthereumTransaction",
            params: {
              fromAddress: e.fromAddress,
              toAddress: e.toAddress,
              weiValue: (0, d.bigIntStringFromBigInt)(e.weiValue),
              data: (0, d.hexStringFromBuffer)(e.data, !0),
              nonce: e.nonce,
              gasPriceInWei: e.gasPriceInWei
                ? (0, d.bigIntStringFromBigInt)(e.gasPriceInWei)
                : null,
              maxFeePerGas: e.maxFeePerGas
                ? (0, d.bigIntStringFromBigInt)(e.maxFeePerGas)
                : null,
              maxPriorityFeePerGas: e.maxPriorityFeePerGas
                ? (0, d.bigIntStringFromBigInt)(e.maxPriorityFeePerGas)
                : null,
              gasLimit: e.gasLimit
                ? (0, d.bigIntStringFromBigInt)(e.gasLimit)
                : null,
              chainId: e.chainId,
              shouldSubmit: !0,
            },
          });
        }
        submitEthereumTransaction(e, t) {
          return this.sendRequest({
            method: "submitEthereumTransaction",
            params: {
              signedTransaction: (0, d.hexStringFromBuffer)(e, !0),
              chainId: t,
            },
          });
        }
        scanQRCode(e) {
          return this.sendRequest({
            method: "scanQRCode",
            params: { regExp: e },
          });
        }
        getWalletLinkSession() {
          return this._session;
        }
        genericRequest(e, t) {
          return this.sendRequest({
            method: "generic",
            params: { action: t, data: e },
          });
        }
        sendGenericMessage(e) {
          return this.sendRequest(e);
        }
        sendRequest(e) {
          let t = null,
            r = (0, d.randomBytesHex)(8),
            n = (n) => {
              this.publishWeb3RequestCanceledEvent(r),
                this.handleErrorResponse(r, e.method, n),
                null == t || t();
            };
          return new Promise((i, s) => {
            (t = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: n,
              onResetConnection: this.resetAndReload,
            })),
              this.relayEventManager.callbacks.set(r, (e) => {
                if ((null == t || t(), (0, o.isErrorResponse)(e)))
                  return s(Error(e.errorMessage));
                i(e);
              }),
              this.publishWeb3RequestEvent(r, e);
          });
        }
        setAccountsCallback(e) {
          this.accountsCallback = e;
        }
        setChainCallback(e) {
          this.chainCallback = e;
        }
        setDappDefaultChainCallback(e) {
          this.dappDefaultChain = e;
        }
        publishWeb3RequestEvent(e, t) {
          let r = { type: "WEB3_REQUEST", id: e, request: t };
          this.publishEvent("Web3Request", r, !0)
            .then((e) => {})
            .catch((e) => {
              this.handleWeb3ResponseMessage({
                type: "WEB3_RESPONSE",
                id: r.id,
                response: { method: t.method, errorMessage: e.message },
              });
            }),
            this.isMobileWeb && this.openCoinbaseWalletDeeplink(t.method);
        }
        openCoinbaseWalletDeeplink(e) {
          if (this.ui instanceof u.WLMobileRelayUI)
            switch (e) {
              case "requestEthereumAccounts":
              case "switchEthereumChain":
                return;
              default:
                window.addEventListener(
                  "blur",
                  () => {
                    window.addEventListener(
                      "focus",
                      () => {
                        this.connection.checkUnseenEvents();
                      },
                      { once: !0 }
                    );
                  },
                  { once: !0 }
                ),
                  this.ui.openCoinbaseWalletDeeplink();
            }
        }
        publishWeb3RequestCanceledEvent(e) {
          this.publishEvent(
            "Web3RequestCanceled",
            { type: "WEB3_REQUEST_CANCELED", id: e },
            !1
          ).then();
        }
        publishEvent(e, t, r) {
          return this.connection.publishEvent(e, t, r);
        }
        handleWeb3ResponseMessage(e) {
          let { response: t } = e;
          if ("requestEthereumAccounts" === t.method) {
            p.accountRequestCallbackIds.forEach((t) =>
              this.invokeCallback(
                Object.assign(Object.assign({}, e), { id: t })
              )
            ),
              p.accountRequestCallbackIds.clear();
            return;
          }
          this.invokeCallback(e);
        }
        handleErrorResponse(e, t, r) {
          var n;
          let i =
            null !== (n = null == r ? void 0 : r.message) && void 0 !== n
              ? n
              : "Unspecified error message.";
          this.handleWeb3ResponseMessage({
            type: "WEB3_RESPONSE",
            id: e,
            response: { method: t, errorMessage: i },
          });
        }
        invokeCallback(e) {
          let t = this.relayEventManager.callbacks.get(e.id);
          t && (t(e.response), this.relayEventManager.callbacks.delete(e.id));
        }
        requestEthereumAccounts() {
          let e = {
              method: "requestEthereumAccounts",
              params: {
                appName: this.appName,
                appLogoUrl: this.appLogoUrl || null,
              },
            },
            t = (0, d.randomBytesHex)(8);
          return new Promise((r, n) => {
            this.relayEventManager.callbacks.set(t, (e) => {
              if ((0, o.isErrorResponse)(e)) return n(Error(e.errorMessage));
              r(e);
            }),
              p.accountRequestCallbackIds.add(t),
              this.publishWeb3RequestEvent(t, e);
          });
        }
        watchAsset(e, t, r, n, i, s) {
          let a = {
              method: "watchAsset",
              params: {
                type: e,
                options: { address: t, symbol: r, decimals: n, image: i },
                chainId: s,
              },
            },
            l = null,
            c = (0, d.randomBytesHex)(8);
          return (
            (l = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: (e) => {
                this.publishWeb3RequestCanceledEvent(c),
                  this.handleErrorResponse(c, a.method, e),
                  null == l || l();
              },
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(c, (r) => {
                if ((null == l || l(), (0, o.isErrorResponse)(r)))
                  return t(Error(r.errorMessage));
                e(r);
              }),
                this.publishWeb3RequestEvent(c, a);
            })
          );
        }
        addEthereumChain(e, t, r, n, i, s) {
          let a = {
              method: "addEthereumChain",
              params: {
                chainId: e,
                rpcUrls: t,
                blockExplorerUrls: n,
                chainName: i,
                iconUrls: r,
                nativeCurrency: s,
              },
            },
            l = null,
            c = (0, d.randomBytesHex)(8);
          return (
            (l = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: (e) => {
                this.publishWeb3RequestCanceledEvent(c),
                  this.handleErrorResponse(c, a.method, e),
                  null == l || l();
              },
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(c, (r) => {
                if ((null == l || l(), (0, o.isErrorResponse)(r)))
                  return t(Error(r.errorMessage));
                e(r);
              }),
                this.publishWeb3RequestEvent(c, a);
            })
          );
        }
        switchEthereumChain(e, t) {
          let r = {
              method: "switchEthereumChain",
              params: Object.assign({ chainId: e }, { address: t }),
            },
            n = (0, d.randomBytesHex)(8);
          return new Promise((e, t) => {
            this.relayEventManager.callbacks.set(n, (r) =>
              (0, o.isErrorResponse)(r) && r.errorCode
                ? t(
                    h.standardErrors.provider.custom({
                      code: r.errorCode,
                      message:
                        "Unrecognized chain ID. Try adding the chain using addEthereumChain first.",
                    })
                  )
                : (0, o.isErrorResponse)(r)
                ? t(Error(r.errorMessage))
                : void e(r)
            ),
              this.publishWeb3RequestEvent(n, r);
          });
        }
      }
      (t.WalletLinkRelay = p), (p.accountRequestCallbackIds = new Set());
    },
    36412: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WalletLinkCipher = void 0);
      let n = r(72537);
      class i {
        constructor(e) {
          this.secret = e;
        }
        async encrypt(e) {
          let t = this.secret;
          if (64 !== t.length) throw Error("secret must be 256 bits");
          let r = crypto.getRandomValues(new Uint8Array(12)),
            i = await crypto.subtle.importKey(
              "raw",
              (0, n.hexStringToUint8Array)(t),
              { name: "aes-gcm" },
              !1,
              ["encrypt", "decrypt"]
            ),
            s = new TextEncoder(),
            a = await window.crypto.subtle.encrypt(
              { name: "AES-GCM", iv: r },
              i,
              s.encode(e)
            ),
            o = a.slice(a.byteLength - 16),
            l = a.slice(0, a.byteLength - 16),
            c = new Uint8Array(o),
            u = new Uint8Array(l),
            h = new Uint8Array([...r, ...c, ...u]);
          return (0, n.uint8ArrayToHex)(h);
        }
        async decrypt(e) {
          let t = this.secret;
          if (64 !== t.length) throw Error("secret must be 256 bits");
          return new Promise((r, i) => {
            !(async function () {
              let s = await crypto.subtle.importKey(
                  "raw",
                  (0, n.hexStringToUint8Array)(t),
                  { name: "aes-gcm" },
                  !1,
                  ["encrypt", "decrypt"]
                ),
                a = (0, n.hexStringToUint8Array)(e),
                o = a.slice(0, 12),
                l = a.slice(12, 28),
                c = a.slice(28),
                u = new Uint8Array([...c, ...l]),
                h = { name: "AES-GCM", iv: new Uint8Array(o) };
              try {
                let e = await window.crypto.subtle.decrypt(h, s, u),
                  t = new TextDecoder();
                r(t.decode(e));
              } catch (e) {
                i(e);
              }
            })();
          });
        }
      }
      t.WalletLinkCipher = i;
    },
    80656: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WalletLinkConnection = void 0);
      let n = r(43075),
        i = r(36412),
        s = r(14006),
        a = r(73355),
        o = r(54839);
      class l {
        constructor({
          session: e,
          linkAPIUrl: t,
          listener: r,
          WebSocketClass: l = WebSocket,
        }) {
          (this.destroyed = !1),
            (this.lastHeartbeatResponse = 0),
            (this.nextReqId = (0, o.IntNumber)(1)),
            (this._connected = !1),
            (this._linked = !1),
            (this.shouldFetchUnseenEventsOnConnect = !1),
            (this.requestResolutions = new Map()),
            (this.handleSessionMetadataUpdated = (e) => {
              e &&
                new Map([
                  ["__destroyed", this.handleDestroyed],
                  ["EthereumAddress", this.handleAccountUpdated],
                  ["WalletUsername", this.handleWalletUsernameUpdated],
                  ["AppVersion", this.handleAppVersionUpdated],
                  [
                    "ChainId",
                    (t) =>
                      e.JsonRpcUrl && this.handleChainUpdated(t, e.JsonRpcUrl),
                  ],
                ]).forEach((t, r) => {
                  let n = e[r];
                  void 0 !== n && t(n);
                });
            }),
            (this.handleDestroyed = (e) => {
              var t;
              "1" === e &&
                (null === (t = this.listener) ||
                  void 0 === t ||
                  t.resetAndReload());
            }),
            (this.handleAccountUpdated = async (e) => {
              var t;
              {
                let r = await this.cipher.decrypt(e);
                null === (t = this.listener) ||
                  void 0 === t ||
                  t.accountUpdated(r);
              }
            }),
            (this.handleMetadataUpdated = async (e, t) => {
              var r;
              {
                let n = await this.cipher.decrypt(t);
                null === (r = this.listener) ||
                  void 0 === r ||
                  r.metadataUpdated(e, n);
              }
            }),
            (this.handleWalletUsernameUpdated = async (e) => {
              this.handleMetadataUpdated(n.WALLET_USER_NAME_KEY, e);
            }),
            (this.handleAppVersionUpdated = async (e) => {
              this.handleMetadataUpdated(n.APP_VERSION_KEY, e);
            }),
            (this.handleChainUpdated = async (e, t) => {
              var r;
              {
                let n = await this.cipher.decrypt(e),
                  i = await this.cipher.decrypt(t);
                null === (r = this.listener) ||
                  void 0 === r ||
                  r.chainUpdated(n, i);
              }
            }),
            (this.session = e),
            (this.cipher = new i.WalletLinkCipher(e.secret)),
            (this.listener = r);
          let c = new a.WalletLinkWebSocket(`${t}/rpc`, l);
          c.setConnectionStateListener(async (e) => {
            let t = !1;
            switch (e) {
              case a.ConnectionState.DISCONNECTED:
                if (!this.destroyed) {
                  let e = async () => {
                    await new Promise((e) => setTimeout(e, 5e3)),
                      this.destroyed ||
                        c.connect().catch(() => {
                          e();
                        });
                  };
                  e();
                }
                break;
              case a.ConnectionState.CONNECTED:
                try {
                  await this.authenticate(),
                    this.sendIsLinked(),
                    this.sendGetSessionConfig(),
                    (t = !0);
                } catch (e) {}
                this.updateLastHeartbeat(),
                  setInterval(() => {
                    this.heartbeat();
                  }, 1e4),
                  this.shouldFetchUnseenEventsOnConnect &&
                    this.fetchUnseenEventsAPI();
              case a.ConnectionState.CONNECTING:
            }
            this.connected !== t && (this.connected = t);
          }),
            c.setIncomingDataListener((e) => {
              var t;
              switch (e.type) {
                case "Heartbeat":
                  this.updateLastHeartbeat();
                  return;
                case "IsLinkedOK":
                case "Linked": {
                  let t = "IsLinkedOK" === e.type ? e.linked : void 0;
                  this.linked = t || e.onlineGuests > 0;
                  break;
                }
                case "GetSessionConfigOK":
                case "SessionConfigUpdated":
                  this.handleSessionMetadataUpdated(e.metadata);
                  break;
                case "Event":
                  this.handleIncomingEvent(e);
              }
              void 0 !== e.id &&
                (null === (t = this.requestResolutions.get(e.id)) ||
                  void 0 === t ||
                  t(e));
            }),
            (this.ws = c),
            (this.http = new s.WalletLinkHTTP(t, e.id, e.key));
        }
        connect() {
          if (this.destroyed) throw Error("instance is destroyed");
          this.ws.connect();
        }
        destroy() {
          (this.destroyed = !0), this.ws.disconnect(), (this.listener = void 0);
        }
        get isDestroyed() {
          return this.destroyed;
        }
        get connected() {
          return this._connected;
        }
        set connected(e) {
          var t;
          (this._connected = e),
            e &&
              (null === (t = this.onceConnected) ||
                void 0 === t ||
                t.call(this));
        }
        setOnceConnected(e) {
          return new Promise((t) => {
            this.connected
              ? e().then(t)
              : (this.onceConnected = () => {
                  e().then(t), (this.onceConnected = void 0);
                });
          });
        }
        get linked() {
          return this._linked;
        }
        set linked(e) {
          var t, r;
          (this._linked = e),
            e &&
              (null === (t = this.onceLinked) || void 0 === t || t.call(this)),
            null === (r = this.listener) || void 0 === r || r.linkedUpdated(e);
        }
        setOnceLinked(e) {
          return new Promise((t) => {
            this.linked
              ? e().then(t)
              : (this.onceLinked = () => {
                  e().then(t), (this.onceLinked = void 0);
                });
          });
        }
        async handleIncomingEvent(e) {
          var t;
          if ("Event" === e.type && "Web3Response" === e.event) {
            let r = JSON.parse(await this.cipher.decrypt(e.data));
            if ("WEB3_RESPONSE" !== r.type) return;
            null === (t = this.listener) ||
              void 0 === t ||
              t.handleWeb3ResponseMessage(r);
          }
        }
        async checkUnseenEvents() {
          if (!this.connected) {
            this.shouldFetchUnseenEventsOnConnect = !0;
            return;
          }
          await new Promise((e) => setTimeout(e, 250));
          try {
            await this.fetchUnseenEventsAPI();
          } catch (e) {
            console.error("Unable to check for unseen events", e);
          }
        }
        async fetchUnseenEventsAPI() {
          (this.shouldFetchUnseenEventsOnConnect = !1),
            (await this.http.fetchUnseenEvents()).forEach((e) =>
              this.handleIncomingEvent(e)
            );
        }
        async setSessionMetadata(e, t) {
          let r = {
            type: "SetSessionConfig",
            id: (0, o.IntNumber)(this.nextReqId++),
            sessionId: this.session.id,
            metadata: { [e]: t },
          };
          return this.setOnceConnected(async () => {
            let e = await this.makeRequest(r);
            if ("Fail" === e.type)
              throw Error(e.error || "failed to set session metadata");
          });
        }
        async publishEvent(e, t, r = !1) {
          let n = await this.cipher.encrypt(
              JSON.stringify(
                Object.assign(Object.assign({}, t), {
                  origin: location.origin,
                  relaySource:
                    "coinbaseWalletExtension" in window &&
                    window.coinbaseWalletExtension
                      ? "injected_sdk"
                      : "sdk",
                })
              )
            ),
            i = {
              type: "PublishEvent",
              id: (0, o.IntNumber)(this.nextReqId++),
              sessionId: this.session.id,
              event: e,
              data: n,
              callWebhook: r,
            };
          return this.setOnceLinked(async () => {
            let e = await this.makeRequest(i);
            if ("Fail" === e.type)
              throw Error(e.error || "failed to publish event");
            return e.eventId;
          });
        }
        sendData(e) {
          this.ws.sendData(JSON.stringify(e));
        }
        updateLastHeartbeat() {
          this.lastHeartbeatResponse = Date.now();
        }
        heartbeat() {
          if (Date.now() - this.lastHeartbeatResponse > 2e4) {
            this.ws.disconnect();
            return;
          }
          try {
            this.ws.sendData("h");
          } catch (e) {}
        }
        async makeRequest(e, t = 6e4) {
          let r;
          let n = e.id;
          return (
            this.sendData(e),
            Promise.race([
              new Promise((e, i) => {
                r = window.setTimeout(() => {
                  i(Error(`request ${n} timed out`));
                }, t);
              }),
              new Promise((e) => {
                this.requestResolutions.set(n, (t) => {
                  clearTimeout(r), e(t), this.requestResolutions.delete(n);
                });
              }),
            ])
          );
        }
        async authenticate() {
          let e = {
              type: "HostSession",
              id: (0, o.IntNumber)(this.nextReqId++),
              sessionId: this.session.id,
              sessionKey: this.session.key,
            },
            t = await this.makeRequest(e);
          if ("Fail" === t.type)
            throw Error(t.error || "failed to authenticate");
        }
        sendIsLinked() {
          let e = {
            type: "IsLinked",
            id: (0, o.IntNumber)(this.nextReqId++),
            sessionId: this.session.id,
          };
          this.sendData(e);
        }
        sendGetSessionConfig() {
          let e = {
            type: "GetSessionConfig",
            id: (0, o.IntNumber)(this.nextReqId++),
            sessionId: this.session.id,
          };
          this.sendData(e);
        }
      }
      t.WalletLinkConnection = l;
    },
    14006: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WalletLinkHTTP = void 0);
      class r {
        constructor(e, t, r) {
          (this.linkAPIUrl = e), (this.sessionId = t);
          let n = `${t}:${r}`;
          this.auth = `Basic ${btoa(n)}`;
        }
        async markUnseenEventsAsSeen(e) {
          return Promise.all(
            e.map((e) =>
              fetch(`${this.linkAPIUrl}/events/${e.eventId}/seen`, {
                method: "POST",
                headers: { Authorization: this.auth },
              })
            )
          ).catch((e) => console.error("Unabled to mark event as failed:", e));
        }
        async fetchUnseenEvents() {
          var e;
          let t = await fetch(`${this.linkAPIUrl}/events?unseen=true`, {
            headers: { Authorization: this.auth },
          });
          if (t.ok) {
            let { events: r, error: n } = await t.json();
            if (n) throw Error(`Check unseen events failed: ${n}`);
            let i =
              null !==
                (e =
                  null == r
                    ? void 0
                    : r
                        .filter((e) => "Web3Response" === e.event)
                        .map((e) => ({
                          type: "Event",
                          sessionId: this.sessionId,
                          eventId: e.id,
                          event: e.event,
                          data: e.data,
                        }))) && void 0 !== e
                ? e
                : [];
            return this.markUnseenEventsAsSeen(i), i;
          }
          throw Error(`Check unseen events failed: ${t.status}`);
        }
      }
      t.WalletLinkHTTP = r;
    },
    73355: function (e, t) {
      "use strict";
      var r, n;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WalletLinkWebSocket = t.ConnectionState = void 0),
        ((n = r || (t.ConnectionState = r = {}))[(n.DISCONNECTED = 0)] =
          "DISCONNECTED"),
        (n[(n.CONNECTING = 1)] = "CONNECTING"),
        (n[(n.CONNECTED = 2)] = "CONNECTED");
      class i {
        setConnectionStateListener(e) {
          this.connectionStateListener = e;
        }
        setIncomingDataListener(e) {
          this.incomingDataListener = e;
        }
        constructor(e, t = WebSocket) {
          (this.WebSocketClass = t),
            (this.webSocket = null),
            (this.pendingData = []),
            (this.url = e.replace(/^http/, "ws"));
        }
        async connect() {
          if (this.webSocket) throw Error("webSocket object is not null");
          return new Promise((e, t) => {
            var n;
            let i;
            try {
              this.webSocket = i = new this.WebSocketClass(this.url);
            } catch (e) {
              t(e);
              return;
            }
            null === (n = this.connectionStateListener) ||
              void 0 === n ||
              n.call(this, r.CONNECTING),
              (i.onclose = (e) => {
                var n;
                this.clearWebSocket(),
                  t(Error(`websocket error ${e.code}: ${e.reason}`)),
                  null === (n = this.connectionStateListener) ||
                    void 0 === n ||
                    n.call(this, r.DISCONNECTED);
              }),
              (i.onopen = (t) => {
                var n;
                e(),
                  null === (n = this.connectionStateListener) ||
                    void 0 === n ||
                    n.call(this, r.CONNECTED),
                  this.pendingData.length > 0 &&
                    ([...this.pendingData].forEach((e) => this.sendData(e)),
                    (this.pendingData = []));
              }),
              (i.onmessage = (e) => {
                var t, r;
                if ("h" === e.data)
                  null === (t = this.incomingDataListener) ||
                    void 0 === t ||
                    t.call(this, { type: "Heartbeat" });
                else
                  try {
                    let t = JSON.parse(e.data);
                    null === (r = this.incomingDataListener) ||
                      void 0 === r ||
                      r.call(this, t);
                  } catch (e) {}
              });
          });
        }
        disconnect() {
          var e;
          let { webSocket: t } = this;
          if (t) {
            this.clearWebSocket(),
              null === (e = this.connectionStateListener) ||
                void 0 === e ||
                e.call(this, r.DISCONNECTED),
              (this.connectionStateListener = void 0),
              (this.incomingDataListener = void 0);
            try {
              t.close();
            } catch (e) {}
          }
        }
        sendData(e) {
          let { webSocket: t } = this;
          if (!t) {
            this.pendingData.push(e), this.connect();
            return;
          }
          t.send(e);
        }
        clearWebSocket() {
          let { webSocket: e } = this;
          e &&
            ((this.webSocket = null),
            (e.onclose = null),
            (e.onerror = null),
            (e.onmessage = null),
            (e.onopen = null));
        }
      }
      t.WalletLinkWebSocket = i;
    },
    43075: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.APP_VERSION_KEY =
          t.LOCAL_STORAGE_ADDRESSES_KEY =
          t.WALLET_USER_NAME_KEY =
            void 0),
        (t.WALLET_USER_NAME_KEY = "walletUsername"),
        (t.LOCAL_STORAGE_ADDRESSES_KEY = "Addresses"),
        (t.APP_VERSION_KEY = "AppVersion");
    },
    10672: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WalletLinkSession = void 0);
      let n = r(89072),
        i = r(72537),
        s = "session:id",
        a = "session:secret",
        o = "session:linked";
      class l {
        constructor(e, t, r, s) {
          (this._storage = e),
            (this._id = t || (0, i.randomBytesHex)(16)),
            (this._secret = r || (0, i.randomBytesHex)(32)),
            (this._key = new n.sha256()
              .update(`${this._id}, ${this._secret} WalletLink`)
              .digest("hex")),
            (this._linked = !!s);
        }
        static load(e) {
          let t = e.getItem(s),
            r = e.getItem(o),
            n = e.getItem(a);
          return t && n ? new l(e, t, n, "1" === r) : null;
        }
        get id() {
          return this._id;
        }
        get secret() {
          return this._secret;
        }
        get key() {
          return this._key;
        }
        get linked() {
          return this._linked;
        }
        set linked(e) {
          (this._linked = e), this.persistLinked();
        }
        save() {
          return (
            this._storage.setItem(s, this._id),
            this._storage.setItem(a, this._secret),
            this.persistLinked(),
            this
          );
        }
        persistLinked() {
          this._storage.setItem(o, this._linked ? "1" : "0");
        }
      }
      t.WalletLinkSession = l;
    },
    91570: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isErrorResponse = void 0),
        (t.isErrorResponse = function (e) {
          return void 0 !== e.errorMessage;
        });
    },
    97819: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WLMobileRelayUI = void 0);
      let n = r(11288),
        i = r(62814),
        s = r(14170);
      class a {
        constructor() {
          (this.attached = !1), (this.redirectDialog = new n.RedirectDialog());
        }
        attach() {
          if (this.attached)
            throw Error("Coinbase Wallet SDK UI is already attached");
          this.redirectDialog.attach(), (this.attached = !0);
        }
        redirectToCoinbaseWallet(e) {
          let t = new URL(s.CBW_MOBILE_DEEPLINK_URL);
          t.searchParams.append("redirect_url", (0, i.getLocation)().href),
            e && t.searchParams.append("wl_url", e);
          let r = document.createElement("a");
          (r.target = "cbw-opener"),
            (r.href = t.href),
            (r.rel = "noreferrer noopener"),
            r.click();
        }
        openCoinbaseWalletDeeplink(e) {
          this.redirectDialog.present({
            title: "Redirecting to Coinbase Wallet...",
            buttonText: "Open",
            onButtonClick: () => {
              this.redirectToCoinbaseWallet(e);
            },
          }),
            setTimeout(() => {
              this.redirectToCoinbaseWallet(e);
            }, 99);
        }
        showConnecting(e) {
          return () => {
            this.redirectDialog.clear();
          };
        }
      }
      t.WLMobileRelayUI = a;
    },
    79567: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WalletLinkRelayUI = void 0);
      let n = r(57181),
        i = r(19297);
      class s {
        constructor() {
          (this.attached = !1), (this.snackbar = new i.Snackbar());
        }
        attach() {
          if (this.attached)
            throw Error("Coinbase Wallet SDK UI is already attached");
          let e = document.documentElement,
            t = document.createElement("div");
          (t.className = "-cbwsdk-css-reset"),
            e.appendChild(t),
            this.snackbar.attach(t),
            (this.attached = !0),
            (0, n.injectCssReset)();
        }
        showConnecting(e) {
          let t;
          return (
            (t = e.isUnlinkedErrorState
              ? {
                  autoExpand: !0,
                  message: "Connection lost",
                  menuItems: [
                    {
                      isRed: !1,
                      info: "Reset connection",
                      svgWidth: "10",
                      svgHeight: "11",
                      path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                      defaultFillRule: "evenodd",
                      defaultClipRule: "evenodd",
                      onClick: e.onResetConnection,
                    },
                  ],
                }
              : {
                  message: "Confirm on phone",
                  menuItems: [
                    {
                      isRed: !0,
                      info: "Cancel transaction",
                      svgWidth: "11",
                      svgHeight: "11",
                      path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
                      defaultFillRule: "inherit",
                      defaultClipRule: "inherit",
                      onClick: e.onCancel,
                    },
                    {
                      isRed: !1,
                      info: "Reset connection",
                      svgWidth: "10",
                      svgHeight: "11",
                      path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                      defaultFillRule: "evenodd",
                      defaultClipRule: "evenodd",
                      onClick: e.onResetConnection,
                    },
                  ],
                }),
            this.snackbar.presentItem(t)
          );
        }
      }
      t.WalletLinkRelayUI = s;
    },
    32660: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default =
          ".-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}");
    },
    11288: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.RedirectDialog = void 0);
      let i = n(r(45724)),
        s = r(6400),
        a = r(57181),
        o = r(19297),
        l = r(62814),
        c = n(r(32660));
      class u {
        constructor() {
          (this.root = null), (this.darkMode = (0, l.isDarkMode)());
        }
        attach() {
          let e = document.documentElement;
          (this.root = document.createElement("div")),
            (this.root.className = "-cbwsdk-css-reset"),
            e.appendChild(this.root),
            (0, a.injectCssReset)();
        }
        present(e) {
          this.render(e);
        }
        clear() {
          this.render(null);
        }
        render(e) {
          this.root &&
            ((0, s.render)(null, this.root),
            e &&
              (0, s.render)(
                (0, s.h)(
                  h,
                  Object.assign({}, e, {
                    onDismiss: () => {
                      this.clear();
                    },
                    darkMode: this.darkMode,
                  })
                ),
                this.root
              ));
        }
      }
      t.RedirectDialog = u;
      let h = ({
        title: e,
        buttonText: t,
        darkMode: r,
        onButtonClick: n,
        onDismiss: a,
      }) =>
        (0, s.h)(
          o.SnackbarContainer,
          { darkMode: r },
          (0, s.h)(
            "div",
            { class: "-cbwsdk-redirect-dialog" },
            (0, s.h)("style", null, c.default),
            (0, s.h)("div", {
              class: "-cbwsdk-redirect-dialog-backdrop",
              onClick: a,
            }),
            (0, s.h)(
              "div",
              {
                class: (0, i.default)(
                  "-cbwsdk-redirect-dialog-box",
                  r ? "dark" : "light"
                ),
              },
              (0, s.h)("p", null, e),
              (0, s.h)("button", { onClick: n }, t)
            )
          )
        );
    },
    32224: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default =
          ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}");
    },
    19297: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SnackbarInstance = t.SnackbarContainer = t.Snackbar = void 0);
      let i = n(r(45724)),
        s = r(6400),
        a = r(30396),
        o = r(62814),
        l = n(r(32224));
      class c {
        constructor() {
          (this.items = new Map()),
            (this.nextItemKey = 0),
            (this.root = null),
            (this.darkMode = (0, o.isDarkMode)());
        }
        attach(e) {
          (this.root = document.createElement("div")),
            (this.root.className = "-cbwsdk-snackbar-root"),
            e.appendChild(this.root),
            this.render();
        }
        presentItem(e) {
          let t = this.nextItemKey++;
          return (
            this.items.set(t, e),
            this.render(),
            () => {
              this.items.delete(t), this.render();
            }
          );
        }
        clear() {
          this.items.clear(), this.render();
        }
        render() {
          this.root &&
            (0, s.render)(
              (0, s.h)(
                "div",
                null,
                (0, s.h)(
                  t.SnackbarContainer,
                  { darkMode: this.darkMode },
                  Array.from(this.items.entries()).map(([e, r]) =>
                    (0, s.h)(
                      t.SnackbarInstance,
                      Object.assign({}, r, { key: e })
                    )
                  )
                )
              ),
              this.root
            );
        }
      }
      (t.Snackbar = c),
        (t.SnackbarContainer = (e) =>
          (0, s.h)(
            "div",
            { class: (0, i.default)("-cbwsdk-snackbar-container") },
            (0, s.h)("style", null, l.default),
            (0, s.h)("div", { class: "-cbwsdk-snackbar" }, e.children)
          )),
        (t.SnackbarInstance = ({ autoExpand: e, message: t, menuItems: r }) => {
          let [n, o] = (0, a.useState)(!0),
            [l, c] = (0, a.useState)(null != e && e);
          return (
            (0, a.useEffect)(() => {
              let e = [
                window.setTimeout(() => {
                  o(!1);
                }, 1),
                window.setTimeout(() => {
                  c(!0);
                }, 1e4),
              ];
              return () => {
                e.forEach(window.clearTimeout);
              };
            }),
            (0, s.h)(
              "div",
              {
                class: (0, i.default)(
                  "-cbwsdk-snackbar-instance",
                  n && "-cbwsdk-snackbar-instance-hidden",
                  l && "-cbwsdk-snackbar-instance-expanded"
                ),
              },
              (0, s.h)(
                "div",
                {
                  class: "-cbwsdk-snackbar-instance-header",
                  onClick: () => {
                    c(!l);
                  },
                },
                (0, s.h)("img", {
                  src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+",
                  class: "-cbwsdk-snackbar-instance-header-cblogo",
                }),
                " ",
                (0, s.h)(
                  "div",
                  { class: "-cbwsdk-snackbar-instance-header-message" },
                  t
                ),
                (0, s.h)(
                  "div",
                  { class: "-gear-container" },
                  !l &&
                    (0, s.h)(
                      "svg",
                      {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                      (0, s.h)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "12",
                        fill: "#F5F7F8",
                      })
                    ),
                  (0, s.h)("img", {
                    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=",
                    class: "-gear-icon",
                    title: "Expand",
                  })
                )
              ),
              r &&
                r.length > 0 &&
                (0, s.h)(
                  "div",
                  { class: "-cbwsdk-snackbar-instance-menu" },
                  r.map((e, t) =>
                    (0, s.h)(
                      "div",
                      {
                        class: (0, i.default)(
                          "-cbwsdk-snackbar-instance-menu-item",
                          e.isRed &&
                            "-cbwsdk-snackbar-instance-menu-item-is-red"
                        ),
                        onClick: e.onClick,
                        key: t,
                      },
                      (0, s.h)(
                        "svg",
                        {
                          width: e.svgWidth,
                          height: e.svgHeight,
                          viewBox: "0 0 10 11",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                        },
                        (0, s.h)("path", {
                          "fill-rule": e.defaultFillRule,
                          "clip-rule": e.defaultClipRule,
                          d: e.path,
                          fill: "#AAAAAA",
                        })
                      ),
                      (0, s.h)(
                        "span",
                        {
                          class: (0, i.default)(
                            "-cbwsdk-snackbar-instance-menu-item-info",
                            e.isRed &&
                              "-cbwsdk-snackbar-instance-menu-item-info-is-red"
                          ),
                        },
                        e.info
                      )
                    )
                  )
                )
            )
          );
        });
    },
    38877: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default =
          '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}');
    },
    57181: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.injectCssReset = void 0);
      let i = n(r(38877));
      t.injectCssReset = function () {
        let e = document.createElement("style");
        (e.type = "text/css"),
          e.appendChild(document.createTextNode(i.default)),
          document.documentElement.appendChild(e);
      };
    },
    62814: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isDarkMode = t.isMobileWeb = t.getLocation = t.createQrUrl = void 0),
        (t.createQrUrl = function (e, t, r, n, i, s) {
          let a = new URLSearchParams({
            [n ? "parent-id" : "id"]: e,
            secret: t,
            server: r,
            v: i,
            chainId: s.toString(),
          }).toString();
          return `${r}/#/link?${a}`;
        }),
        (t.getLocation = function () {
          try {
            if (
              (function () {
                try {
                  return null !== window.frameElement;
                } catch (e) {
                  return !1;
                }
              })() &&
              window.top
            )
              return window.top.location;
            return window.location;
          } catch (e) {
            return window.location;
          }
        }),
        (t.isMobileWeb = function () {
          var e;
          return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            null === (e = null == window ? void 0 : window.navigator) ||
              void 0 === e
              ? void 0
              : e.userAgent
          );
        }),
        (t.isDarkMode = function () {
          var e, t;
          return (
            null !==
              (t =
                null === (e = null == window ? void 0 : window.matchMedia) ||
                void 0 === e
                  ? void 0
                  : e.call(window, "(prefers-color-scheme: dark)").matches) &&
            void 0 !== t &&
            t
          );
        });
    },
    81486: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ScopedLocalStorage = void 0);
      class r {
        constructor(e, t) {
          (this.scope = e), (this.module = t);
        }
        setItem(e, t) {
          localStorage.setItem(this.scopedKey(e), t);
        }
        getItem(e) {
          return localStorage.getItem(this.scopedKey(e));
        }
        removeItem(e) {
          localStorage.removeItem(this.scopedKey(e));
        }
        clear() {
          let e = this.scopedKey(""),
            t = [];
          for (let r = 0; r < localStorage.length; r++) {
            let n = localStorage.key(r);
            "string" == typeof n && n.startsWith(e) && t.push(n);
          }
          t.forEach((e) => localStorage.removeItem(e));
        }
        scopedKey(e) {
          return `-${this.scope}${this.module ? `:${this.module}` : ""}:${e}`;
        }
        static clearAll() {
          new r("CBWSDK").clear(), new r("walletlink").clear();
        }
      }
      t.ScopedLocalStorage = r;
    },
    39867: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.decryptContent =
          t.encryptContent =
          t.importKeyFromHexString =
          t.exportKeyToHexString =
          t.decrypt =
          t.encrypt =
          t.deriveSharedSecret =
          t.generateKeyPair =
            void 0);
      let n = r(72537);
      async function i() {
        return crypto.subtle.generateKey(
          { name: "ECDH", namedCurve: "P-256" },
          !0,
          ["deriveKey"]
        );
      }
      async function s(e, t) {
        return crypto.subtle.deriveKey(
          { name: "ECDH", public: t },
          e,
          { name: "AES-GCM", length: 256 },
          !1,
          ["encrypt", "decrypt"]
        );
      }
      async function a(e, t) {
        let r = crypto.getRandomValues(new Uint8Array(12)),
          n = await crypto.subtle.encrypt(
            { name: "AES-GCM", iv: r },
            e,
            new TextEncoder().encode(t)
          );
        return { iv: r, cipherText: n };
      }
      async function o(e, { iv: t, cipherText: r }) {
        let n = await crypto.subtle.decrypt({ name: "AES-GCM", iv: t }, e, r);
        return new TextDecoder().decode(n);
      }
      function l(e) {
        switch (e) {
          case "public":
            return "spki";
          case "private":
            return "pkcs8";
        }
      }
      async function c(e, t) {
        let r = l(e),
          i = await crypto.subtle.exportKey(r, t);
        return (0, n.uint8ArrayToHex)(new Uint8Array(i));
      }
      async function u(e, t) {
        let r = l(e),
          i = (0, n.hexStringToUint8Array)(t).buffer;
        return await crypto.subtle.importKey(
          r,
          i,
          { name: "ECDH", namedCurve: "P-256" },
          !0,
          "private" === e ? ["deriveKey"] : []
        );
      }
      async function h(e, t) {
        return a(
          t,
          JSON.stringify(e, (e, t) =>
            t instanceof Error
              ? Object.assign(
                  Object.assign({}, t.code ? { code: t.code } : {}),
                  { message: t.message }
                )
              : t
          )
        );
      }
      async function d(e, t) {
        return JSON.parse(await o(t, e));
      }
      (t.generateKeyPair = i),
        (t.deriveSharedSecret = s),
        (t.encrypt = a),
        (t.decrypt = o),
        (t.exportKeyToHexString = c),
        (t.importKeyFromHexString = u),
        (t.encryptContent = h),
        (t.decryptContent = d);
    },
    21460: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.checkErrorForInvalidRequestArgs =
          t.getCoinbaseInjectedProvider =
          t.getCoinbaseInjectedSigner =
          t.fetchRPCRequest =
            void 0);
      let n = r(86546),
        i = r(88223);
      async function s(e, t) {
        if (!t.rpcUrl)
          throw i.standardErrors.rpc.internal("No RPC URL set for chain");
        let r = Object.assign(Object.assign({}, e), {
            jsonrpc: "2.0",
            id: crypto.randomUUID(),
          }),
          s = await window.fetch(t.rpcUrl, {
            method: "POST",
            body: JSON.stringify(r),
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              "X-Cbw-Sdk-Version": n.LIB_VERSION,
            },
          });
        return (await s.json()).result;
      }
      function a() {
        return globalThis.coinbaseWalletSigner;
      }
      (t.fetchRPCRequest = s),
        (t.getCoinbaseInjectedSigner = a),
        (t.getCoinbaseInjectedProvider = function ({
          metadata: e,
          preference: t,
        }) {
          var r;
          if ("smartWalletOnly" !== t.options) {
            if (a()) return;
            let t = globalThis.coinbaseWalletExtension;
            if (t) {
              let { appName: n, appLogoUrl: i, appChainIds: s } = e;
              return (
                null === (r = t.setAppInfo) ||
                  void 0 === r ||
                  r.call(t, n, i, s),
                t
              );
            }
          }
          let n = (function () {
            var e, t;
            try {
              let r = globalThis;
              return null !== (e = r.ethereum) && void 0 !== e
                ? e
                : null === (t = r.top) || void 0 === t
                ? void 0
                : t.ethereum;
            } catch (e) {
              return;
            }
          })();
          if (null == n ? void 0 : n.isCoinbaseBrowser) return n;
        }),
        (t.checkErrorForInvalidRequestArgs = function (e) {
          if (!e || "object" != typeof e || Array.isArray(e))
            return i.standardErrors.rpc.invalidParams({
              message: "Expected a single, non-array, object argument.",
              data: e,
            });
          let { method: t, params: r } = e;
          return "string" != typeof t || 0 === t.length
            ? i.standardErrors.rpc.invalidParams({
                message: "'args.method' must be a non-empty string.",
                data: e,
              })
            : void 0 === r ||
              Array.isArray(r) ||
              ("object" == typeof r && null !== r)
            ? void 0
            : i.standardErrors.rpc.invalidParams({
                message:
                  "'args.params' must be an object or array if provided.",
                data: e,
              });
        });
    },
    14766: function (e, t, r) {
      var n = r(48764).Buffer;
      let i = r(78417);
      function s(e) {
        if (e.startsWith("int[")) return "int256" + e.slice(3);
        if ("int" === e) return "int256";
        if (e.startsWith("uint[")) return "uint256" + e.slice(4);
        if ("uint" === e) return "uint256";
        if (e.startsWith("fixed[")) return "fixed128x128" + e.slice(5);
        if ("fixed" === e) return "fixed128x128";
        if (e.startsWith("ufixed[")) return "ufixed128x128" + e.slice(6);
        else if ("ufixed" === e) return "ufixed128x128";
        return e;
      }
      function a(e) {
        return parseInt(/^\D+(\d+)$/.exec(e)[1], 10);
      }
      function o(e) {
        var t = /^\D+(\d+)x(\d+)$/.exec(e);
        return [parseInt(t[1], 10), parseInt(t[2], 10)];
      }
      function l(e) {
        var t = e.match(/(.*)\[(.*?)\]$/);
        return t ? ("" === t[2] ? "dynamic" : parseInt(t[2], 10)) : null;
      }
      function c(e) {
        var t = typeof e;
        if ("string" === t || "number" === t) return BigInt(e);
        if ("bigint" === t) return e;
        throw Error("Argument is not a number");
      }
      function u(e, t) {
        if ("address" === e) return u("uint160", c(t));
        if ("bool" === e) return u("uint8", t ? 1 : 0);
        if ("string" === e) return u("bytes", new n(t, "utf8"));
        if ((f = e).lastIndexOf("]") === f.length - 1) {
          if (void 0 === t.length) throw Error("Not an array?");
          if ("dynamic" !== (r = l(e)) && 0 !== r && t.length > r)
            throw Error("Elements exceed array size: " + r);
          for (d in ((h = []),
          (e = e.slice(0, e.lastIndexOf("["))),
          "string" == typeof t && (t = JSON.parse(t)),
          t))
            h.push(u(e, t[d]));
          if ("dynamic" === r) {
            var r,
              s,
              h,
              d,
              f,
              p = u("uint256", t.length);
            h.unshift(p);
          }
          return n.concat(h);
        }
        if ("bytes" === e)
          return (
            (t = new n(t)),
            (h = n.concat([u("uint256", t.length), t])),
            t.length % 32 != 0 &&
              (h = n.concat([h, i.zeros(32 - (t.length % 32))])),
            h
          );
        if (e.startsWith("bytes")) {
          if ((r = a(e)) < 1 || r > 32)
            throw Error("Invalid bytes<N> width: " + r);
          return i.setLengthRight(t, 32);
        } else if (e.startsWith("uint")) {
          if ((r = a(e)) % 8 || r < 8 || r > 256)
            throw Error("Invalid uint<N> width: " + r);
          s = c(t);
          let n = i.bitLengthFromBigInt(s);
          if (n > r)
            throw Error("Supplied uint exceeds width: " + r + " vs " + n);
          if (s < 0) throw Error("Supplied uint is negative");
          return i.bufferBEFromBigInt(s, 32);
        } else if (e.startsWith("int")) {
          if ((r = a(e)) % 8 || r < 8 || r > 256)
            throw Error("Invalid int<N> width: " + r);
          s = c(t);
          let n = i.bitLengthFromBigInt(s);
          if (n > r)
            throw Error("Supplied int exceeds width: " + r + " vs " + n);
          let o = i.twosFromBigInt(s, 256);
          return i.bufferBEFromBigInt(o, 32);
        } else if (e.startsWith("ufixed")) {
          if (((r = o(e)), (s = c(t)) < 0))
            throw Error("Supplied ufixed is negative");
          return u("uint256", s * BigInt(2) ** BigInt(r[1]));
        } else if (e.startsWith("fixed"))
          return (r = o(e)), u("int256", c(t) * BigInt(2) ** BigInt(r[1]));
        throw Error("Unsupported or invalid type: " + e);
      }
      function h(e, t) {
        if (e.length !== t.length)
          throw Error("Number of types are not matching the values");
        for (var r, o, l = [], u = 0; u < e.length; u++) {
          var h = s(e[u]),
            d = t[u];
          if ("bytes" === h) l.push(d);
          else if ("string" === h) l.push(new n(d, "utf8"));
          else if ("bool" === h) l.push(new n(d ? "01" : "00", "hex"));
          else if ("address" === h) l.push(i.setLength(d, 20));
          else if (h.startsWith("bytes")) {
            if ((r = a(h)) < 1 || r > 32)
              throw Error("Invalid bytes<N> width: " + r);
            l.push(i.setLengthRight(d, r));
          } else if (h.startsWith("uint")) {
            if ((r = a(h)) % 8 || r < 8 || r > 256)
              throw Error("Invalid uint<N> width: " + r);
            o = c(d);
            let e = i.bitLengthFromBigInt(o);
            if (e > r)
              throw Error("Supplied uint exceeds width: " + r + " vs " + e);
            l.push(i.bufferBEFromBigInt(o, r / 8));
          } else if (h.startsWith("int")) {
            if ((r = a(h)) % 8 || r < 8 || r > 256)
              throw Error("Invalid int<N> width: " + r);
            o = c(d);
            let e = i.bitLengthFromBigInt(o);
            if (e > r)
              throw Error("Supplied int exceeds width: " + r + " vs " + e);
            let t = i.twosFromBigInt(o, r);
            l.push(i.bufferBEFromBigInt(t, r / 8));
          } else throw Error("Unsupported or invalid type: " + h);
        }
        return n.concat(l);
      }
      e.exports = {
        rawEncode: function (e, t) {
          var r = [],
            i = [],
            a = 32 * e.length;
          for (var o in e) {
            var c = s(e[o]),
              h = u(c, t[o]);
            "string" === c || "bytes" === c || "dynamic" === l(c)
              ? (r.push(u("uint256", a)), i.push(h), (a += h.length))
              : r.push(h);
          }
          return n.concat(r.concat(i));
        },
        solidityPack: h,
        soliditySHA3: function (e, t) {
          return i.keccak(h(e, t));
        },
      };
    },
    94418: function (e, t, r) {
      var n = r(48764).Buffer;
      let i = r(78417),
        s = r(14766),
        a = {
          type: "object",
          properties: {
            types: {
              type: "object",
              additionalProperties: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    name: { type: "string" },
                    type: { type: "string" },
                  },
                  required: ["name", "type"],
                },
              },
            },
            primaryType: { type: "string" },
            domain: { type: "object" },
            message: { type: "object" },
          },
          required: ["types", "primaryType", "domain", "message"],
        },
        o = {
          encodeData(e, t, r, a = !0) {
            let o = ["bytes32"],
              l = [this.hashType(e, r)];
            if (a) {
              let c = (e, t, o) => {
                if (void 0 !== r[t])
                  return [
                    "bytes32",
                    null == o
                      ? "0x0000000000000000000000000000000000000000000000000000000000000000"
                      : i.keccak(this.encodeData(t, o, r, a)),
                  ];
                if (void 0 === o)
                  throw Error(`missing value for field ${e} of type ${t}`);
                if ("bytes" === t) return ["bytes32", i.keccak(o)];
                if ("string" === t)
                  return (
                    "string" == typeof o && (o = n.from(o, "utf8")),
                    ["bytes32", i.keccak(o)]
                  );
                if (t.lastIndexOf("]") === t.length - 1) {
                  let r = t.slice(0, t.lastIndexOf("[")),
                    n = o.map((t) => c(e, r, t));
                  return [
                    "bytes32",
                    i.keccak(
                      s.rawEncode(
                        n.map(([e]) => e),
                        n.map(([, e]) => e)
                      )
                    ),
                  ];
                }
                return [t, o];
              };
              for (let n of r[e]) {
                let [e, r] = c(n.name, n.type, t[n.name]);
                o.push(e), l.push(r);
              }
            } else
              for (let s of r[e]) {
                let e = t[s.name];
                if (void 0 !== e) {
                  if ("bytes" === s.type)
                    o.push("bytes32"), (e = i.keccak(e)), l.push(e);
                  else if ("string" === s.type)
                    o.push("bytes32"),
                      "string" == typeof e && (e = n.from(e, "utf8")),
                      (e = i.keccak(e)),
                      l.push(e);
                  else if (void 0 !== r[s.type])
                    o.push("bytes32"),
                      (e = i.keccak(this.encodeData(s.type, e, r, a))),
                      l.push(e);
                  else if (s.type.lastIndexOf("]") === s.type.length - 1)
                    throw Error("Arrays currently unimplemented in encodeData");
                  else o.push(s.type), l.push(e);
                }
              }
            return s.rawEncode(o, l);
          },
          encodeType(e, t) {
            let r = "",
              n = this.findTypeDependencies(e, t).filter((t) => t !== e);
            for (let i of (n = [e].concat(n.sort()))) {
              if (!t[i]) throw Error("No type definition specified: " + i);
              r +=
                i +
                "(" +
                t[i].map(({ name: e, type: t }) => t + " " + e).join(",") +
                ")";
            }
            return r;
          },
          findTypeDependencies(e, t, r = []) {
            if (((e = e.match(/^\w*/)[0]), r.includes(e) || void 0 === t[e]))
              return r;
            for (let n of (r.push(e), t[e]))
              for (let e of this.findTypeDependencies(n.type, t, r))
                r.includes(e) || r.push(e);
            return r;
          },
          hashStruct(e, t, r, n = !0) {
            return i.keccak(this.encodeData(e, t, r, n));
          },
          hashType(e, t) {
            return i.keccak(this.encodeType(e, t));
          },
          sanitizeData(e) {
            let t = {};
            for (let r in a.properties) e[r] && (t[r] = e[r]);
            return (
              t.types &&
                (t.types = Object.assign({ EIP712Domain: [] }, t.types)),
              t
            );
          },
          hash(e, t = !0) {
            let r = this.sanitizeData(e),
              s = [n.from("1901", "hex")];
            return (
              s.push(this.hashStruct("EIP712Domain", r.domain, r.types, t)),
              "EIP712Domain" !== r.primaryType &&
                s.push(this.hashStruct(r.primaryType, r.message, r.types, t)),
              i.keccak(n.concat(s))
            );
          },
        };
      e.exports = {
        TYPED_MESSAGE_SCHEMA: a,
        TypedDataUtils: o,
        hashForSignTypedDataLegacy: function (e) {
          return (function (e) {
            let t = Error("Expect argument to be non-empty array");
            if ("object" != typeof e || !e.length) throw t;
            let r = e.map(function (e) {
                return "bytes" === e.type ? i.toBuffer(e.value) : e.value;
              }),
              n = e.map(function (e) {
                return e.type;
              }),
              a = e.map(function (e) {
                if (!e.name) throw t;
                return e.type + " " + e.name;
              });
            return s.soliditySHA3(
              ["bytes32", "bytes32"],
              [
                s.soliditySHA3(Array(e.length).fill("string"), a),
                s.soliditySHA3(n, r),
              ]
            );
          })(e.data);
        },
        hashForSignTypedData_v3: function (e) {
          return o.hash(e.data, !1);
        },
        hashForSignTypedData_v4: function (e) {
          return o.hash(e.data);
        },
      };
    },
    78417: function (e, t, r) {
      var n = r(48764).Buffer;
      let i = r(95811);
      function s(e) {
        return n.allocUnsafe(e).fill(0);
      }
      function a(e, t) {
        let r = e.toString(16);
        r.length % 2 != 0 && (r = "0" + r);
        let i = r.match(/.{1,2}/g).map((e) => parseInt(e, 16));
        for (; i.length < t; ) i.unshift(0);
        return n.from(i);
      }
      function o(e, t, r) {
        let n = s(t);
        return ((e = l(e)), r)
          ? e.length < t
            ? (e.copy(n), n)
            : e.slice(0, t)
          : e.length < t
          ? (e.copy(n, t - e.length), n)
          : e.slice(-t);
      }
      function l(e) {
        if (!n.isBuffer(e)) {
          if (Array.isArray(e)) e = n.from(e);
          else if ("string" == typeof e) {
            var t;
            e = c(e)
              ? n.from((t = u(e)).length % 2 ? "0" + t : t, "hex")
              : n.from(e);
          } else if ("number" == typeof e) e = intToBuffer(e);
          else if (null == e) e = n.allocUnsafe(0);
          else if ("bigint" == typeof e) e = a(e);
          else if (e.toArray) e = n.from(e.toArray());
          else throw Error("invalid type");
        }
        return e;
      }
      function c(e) {
        return "string" == typeof e && e.match(/^0x[0-9A-Fa-f]*$/);
      }
      function u(e) {
        return "string" == typeof e && e.startsWith("0x") ? e.slice(2) : e;
      }
      e.exports = {
        zeros: s,
        setLength: o,
        setLengthRight: function (e, t) {
          return o(e, t, !0);
        },
        isHexString: c,
        stripHexPrefix: u,
        toBuffer: l,
        bufferToHex: function (e) {
          return "0x" + (e = l(e)).toString("hex");
        },
        keccak: function (e, t) {
          return (
            (e = l(e)),
            t || (t = 256),
            i("keccak" + t)
              .update(e)
              .digest()
          );
        },
        bitLengthFromBigInt: function (e) {
          return e.toString(2).length;
        },
        bufferBEFromBigInt: a,
        twosFromBigInt: function (e, t) {
          return (
            (e < 0n ? (~e & ((1n << BigInt(t)) - 1n)) + 1n : e) &
            ((1n << BigInt(t)) - 1n)
          );
        },
      };
    },
    86546: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.LIB_VERSION = void 0),
        (t.LIB_VERSION = "4.0.4");
    },
    45724: function (e, t, r) {
      "use strict";
      function n() {
        for (var e, t, r = 0, n = ""; r < arguments.length; )
          (e = arguments[r++]) &&
            (t = (function e(t) {
              var r,
                n,
                i = "";
              if ("string" == typeof t || "number" == typeof t) i += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t))
                  for (r = 0; r < t.length; r++)
                    t[r] && (n = e(t[r])) && (i && (i += " "), (i += n));
                else for (r in t) t[r] && (i && (i += " "), (i += r));
              }
              return i;
            })(e)) &&
            (n && (n += " "), (n += t));
        return n;
      }
      r.r(t),
        r.d(t, {
          clsx: function () {
            return n;
          },
        }),
        (t.default = n);
    },
    94927: function (e, t, r) {
      e.exports = function (e, t) {
        if (n("noDeprecation")) return e;
        var r = !1;
        return function () {
          if (!r) {
            if (n("throwDeprecation")) throw Error(t);
            n("traceDeprecation") ? console.trace(t) : console.warn(t),
              (r = !0);
          }
          return e.apply(this, arguments);
        };
      };
      function n(e) {
        try {
          if (!r.g.localStorage) return !1;
        } catch (e) {
          return !1;
        }
        var t = r.g.localStorage[e];
        return null != t && "true" === String(t).toLowerCase();
      }
    },
  },
]);
