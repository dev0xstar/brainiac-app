"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [34937],
  {
    34937: function (t, e, r) {
      r.r(e),
        r.d(e, {
          default: function () {
            return I;
          },
        });
      var i,
        n = r(85893),
        s = r(67294),
        o =
          (((i = o || {})[(i.Border = -1)] = "Border"),
          (i[(i.Data = 0)] = "Data"),
          (i[(i.Function = 1)] = "Function"),
          (i[(i.Position = 2)] = "Position"),
          (i[(i.Timing = 3)] = "Timing"),
          (i[(i.Alignment = 4)] = "Alignment"),
          i),
        l = Object.defineProperty,
        h = (t, e, r) =>
          e in t
            ? l(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        a = (t, e, r) => (h(t, "symbol" != typeof e ? e + "" : e, r), r);
      let u = [1, 0],
        f = [2, 3],
        d = [3, 2],
        c = { L: [0, 1], M: u, Q: f, H: d },
        g = /^[0-9]*$/,
        m = /^[A-Z0-9 $%*+.\/:-]*$/,
        y = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",
        p = [
          [
            -1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24,
            28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30,
            30, 30, 30, 30, 30, 30, 30,
          ],
          [
            -1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28,
            28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28,
            28, 28, 28, 28, 28, 28, 28,
          ],
          [
            -1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24,
            28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30,
            30, 30, 30, 30, 30, 30, 30,
          ],
          [
            -1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30,
            28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
            30, 30, 30, 30, 30, 30, 30,
          ],
        ],
        w = [
          [
            -1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8,
            9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22,
            24, 25,
          ],
          [
            -1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14,
            16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40,
            43, 45, 47, 49,
          ],
          [
            -1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21,
            20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56,
            59, 62, 65, 68,
          ],
          [
            -1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21,
            25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63,
            66, 70, 74, 77, 81,
          ],
        ];
      class M {
        constructor(t, e, r, i) {
          if (
            ((this.version = t),
            (this.ecc = e),
            a(this, "size"),
            a(this, "mask"),
            a(this, "modules", []),
            a(this, "types", []),
            t < 1 || t > 40)
          )
            throw RangeError("Version value out of range");
          if (i < -1 || i > 7) throw RangeError("Mask value out of range");
          this.size = 4 * t + 17;
          let n = Array.from({ length: this.size }, () => !1);
          for (let t = 0; t < this.size; t++)
            this.modules.push(n.slice()), this.types.push(n.map(() => 0));
          this.drawFunctionPatterns();
          let s = this.addEccAndInterleave(r);
          if ((this.drawCodewords(s), -1 === i)) {
            let t = 1e9;
            for (let e = 0; e < 8; e++) {
              this.applyMask(e), this.drawFormatBits(e);
              let r = this.getPenaltyScore();
              r < t && ((i = e), (t = r)), this.applyMask(e);
            }
          }
          (this.mask = i), this.applyMask(i), this.drawFormatBits(i);
        }
        getModule(t, e) {
          return (
            t >= 0 &&
            t < this.size &&
            e >= 0 &&
            e < this.size &&
            this.modules[e][t]
          );
        }
        drawFunctionPatterns() {
          for (let t = 0; t < this.size; t++)
            this.setFunctionModule(6, t, t % 2 == 0, o.Timing),
              this.setFunctionModule(t, 6, t % 2 == 0, o.Timing);
          this.drawFinderPattern(3, 3),
            this.drawFinderPattern(this.size - 4, 3),
            this.drawFinderPattern(3, this.size - 4);
          let t = this.getAlignmentPatternPositions(),
            e = t.length;
          for (let r = 0; r < e; r++)
            for (let i = 0; i < e; i++)
              (0 === r && 0 === i) ||
                (0 === r && i === e - 1) ||
                (r === e - 1 && 0 === i) ||
                this.drawAlignmentPattern(t[r], t[i]);
          this.drawFormatBits(0), this.drawVersion();
        }
        drawFormatBits(t) {
          let e = (this.ecc[1] << 3) | t,
            r = e;
          for (let t = 0; t < 10; t++) r = (r << 1) ^ ((r >>> 9) * 1335);
          let i = ((e << 10) | r) ^ 21522;
          for (let t = 0; t <= 5; t++) this.setFunctionModule(8, t, P(i, t));
          this.setFunctionModule(8, 7, P(i, 6)),
            this.setFunctionModule(8, 8, P(i, 7)),
            this.setFunctionModule(7, 8, P(i, 8));
          for (let t = 9; t < 15; t++)
            this.setFunctionModule(14 - t, 8, P(i, t));
          for (let t = 0; t < 8; t++)
            this.setFunctionModule(this.size - 1 - t, 8, P(i, t));
          for (let t = 8; t < 15; t++)
            this.setFunctionModule(8, this.size - 15 + t, P(i, t));
          this.setFunctionModule(8, this.size - 8, !0);
        }
        drawVersion() {
          if (this.version < 7) return;
          let t = this.version;
          for (let e = 0; e < 12; e++) t = (t << 1) ^ ((t >>> 11) * 7973);
          let e = (this.version << 12) | t;
          for (let t = 0; t < 18; t++) {
            let r = P(e, t),
              i = this.size - 11 + (t % 3),
              n = Math.floor(t / 3);
            this.setFunctionModule(i, n, r), this.setFunctionModule(n, i, r);
          }
        }
        drawFinderPattern(t, e) {
          for (let r = -4; r <= 4; r++)
            for (let i = -4; i <= 4; i++) {
              let n = Math.max(Math.abs(i), Math.abs(r)),
                s = t + i,
                l = e + r;
              s >= 0 &&
                s < this.size &&
                l >= 0 &&
                l < this.size &&
                this.setFunctionModule(s, l, 2 !== n && 4 !== n, o.Position);
            }
        }
        drawAlignmentPattern(t, e) {
          for (let r = -2; r <= 2; r++)
            for (let i = -2; i <= 2; i++)
              this.setFunctionModule(
                t + i,
                e + r,
                1 !== Math.max(Math.abs(i), Math.abs(r)),
                o.Alignment
              );
        }
        setFunctionModule(t, e, r, i = o.Function) {
          (this.modules[e][t] = r), (this.types[e][t] = i);
        }
        addEccAndInterleave(t) {
          let e = this.version,
            r = this.ecc;
          if (t.length !== R(e, r)) throw RangeError("Invalid argument");
          let i = w[r[0]][e],
            n = p[r[0]][e],
            s = Math.floor(x(e) / 8),
            o = i - (s % i),
            l = Math.floor(s / i),
            h = [],
            a = (function (t) {
              if (t < 1 || t > 255) throw RangeError("Degree out of range");
              let e = [];
              for (let r = 0; r < t - 1; r++) e.push(0);
              e.push(1);
              let r = 1;
              for (let i = 0; i < t; i++) {
                for (let t = 0; t < e.length; t++)
                  (e[t] = C(e[t], r)), t + 1 < e.length && (e[t] ^= e[t + 1]);
                r = C(r, 2);
              }
              return e;
            })(n);
          for (let e = 0, r = 0; e < i; e++) {
            let i = t.slice(r, r + l - n + (e < o ? 0 : 1));
            r += i.length;
            let s = (function (t, e) {
              let r = e.map((t) => 0);
              for (let i of t) {
                let t = i ^ r.shift();
                r.push(0), e.forEach((e, i) => (r[i] ^= C(e, t)));
              }
              return r;
            })(i, a);
            e < o && i.push(0), h.push(i.concat(s));
          }
          let u = [];
          for (let t = 0; t < h[0].length; t++)
            h.forEach((e, r) => {
              (t !== l - n || r >= o) && u.push(e[t]);
            });
          return u;
        }
        drawCodewords(t) {
          if (t.length !== Math.floor(x(this.version) / 8))
            throw RangeError("Invalid argument");
          let e = 0;
          for (let r = this.size - 1; r >= 1; r -= 2) {
            6 === r && (r = 5);
            for (let i = 0; i < this.size; i++)
              for (let n = 0; n < 2; n++) {
                let s = r - n,
                  o = ((r + 1) & 2) == 0 ? this.size - 1 - i : i;
                !this.types[o][s] &&
                  e < 8 * t.length &&
                  ((this.modules[o][s] = P(t[e >>> 3], 7 - (7 & e))), e++);
              }
          }
        }
        applyMask(t) {
          if (t < 0 || t > 7) throw RangeError("Mask value out of range");
          for (let e = 0; e < this.size; e++)
            for (let r = 0; r < this.size; r++) {
              let i;
              switch (t) {
                case 0:
                  i = (r + e) % 2 == 0;
                  break;
                case 1:
                  i = e % 2 == 0;
                  break;
                case 2:
                  i = r % 3 == 0;
                  break;
                case 3:
                  i = (r + e) % 3 == 0;
                  break;
                case 4:
                  i = (Math.floor(r / 3) + Math.floor(e / 2)) % 2 == 0;
                  break;
                case 5:
                  i = ((r * e) % 2) + ((r * e) % 3) == 0;
                  break;
                case 6:
                  i = (((r * e) % 2) + ((r * e) % 3)) % 2 == 0;
                  break;
                case 7:
                  i = (((r + e) % 2) + ((r * e) % 3)) % 2 == 0;
                  break;
                default:
                  throw Error("Unreachable");
              }
              !this.types[e][r] &&
                i &&
                (this.modules[e][r] = !this.modules[e][r]);
            }
        }
        getPenaltyScore() {
          let t = 0;
          for (let e = 0; e < this.size; e++) {
            let r = !1,
              i = 0,
              n = [0, 0, 0, 0, 0, 0, 0];
            for (let s = 0; s < this.size; s++)
              this.modules[e][s] === r
                ? 5 == ++i
                  ? (t += 3)
                  : i > 5 && t++
                : (this.finderPenaltyAddHistory(i, n),
                  r || (t += 40 * this.finderPenaltyCountPatterns(n)),
                  (r = this.modules[e][s]),
                  (i = 1));
            t += 40 * this.finderPenaltyTerminateAndCount(r, i, n);
          }
          for (let e = 0; e < this.size; e++) {
            let r = !1,
              i = 0,
              n = [0, 0, 0, 0, 0, 0, 0];
            for (let s = 0; s < this.size; s++)
              this.modules[s][e] === r
                ? 5 == ++i
                  ? (t += 3)
                  : i > 5 && t++
                : (this.finderPenaltyAddHistory(i, n),
                  r || (t += 40 * this.finderPenaltyCountPatterns(n)),
                  (r = this.modules[s][e]),
                  (i = 1));
            t += 40 * this.finderPenaltyTerminateAndCount(r, i, n);
          }
          for (let e = 0; e < this.size - 1; e++)
            for (let r = 0; r < this.size - 1; r++) {
              let i = this.modules[e][r];
              i === this.modules[e][r + 1] &&
                i === this.modules[e + 1][r] &&
                i === this.modules[e + 1][r + 1] &&
                (t += 3);
            }
          let e = 0;
          for (let t of this.modules)
            e = t.reduce((t, e) => t + (e ? 1 : 0), e);
          let r = this.size * this.size;
          return t + (Math.ceil(Math.abs(20 * e - 10 * r) / r) - 1) * 10;
        }
        getAlignmentPatternPositions() {
          if (1 === this.version) return [];
          {
            let t = Math.floor(this.version / 7) + 2,
              e =
                32 === this.version
                  ? 26
                  : 2 * Math.ceil((4 * this.version + 4) / (2 * t - 2)),
              r = [6];
            for (let i = this.size - 7; r.length < t; i -= e) r.splice(1, 0, i);
            return r;
          }
        }
        finderPenaltyCountPatterns(t) {
          let e = t[1],
            r =
              e > 0 && t[2] === e && t[3] === 3 * e && t[4] === e && t[5] === e;
          return (
            (r && t[0] >= 4 * e && t[6] >= e ? 1 : 0) +
            (r && t[6] >= 4 * e && t[0] >= e ? 1 : 0)
          );
        }
        finderPenaltyTerminateAndCount(t, e, r) {
          return (
            t && (this.finderPenaltyAddHistory(e, r), (e = 0)),
            (e += this.size),
            this.finderPenaltyAddHistory(e, r),
            this.finderPenaltyCountPatterns(r)
          );
        }
        finderPenaltyAddHistory(t, e) {
          0 === e[0] && (t += this.size), e.pop(), e.unshift(t);
        }
      }
      function b(t, e, r) {
        if (e < 0 || e > 31 || t >>> e != 0)
          throw RangeError("Value out of range");
        for (let i = e - 1; i >= 0; i--) r.push((t >>> i) & 1);
      }
      function P(t, e) {
        return ((t >>> e) & 1) != 0;
      }
      class z {
        constructor(t, e, r) {
          if (((this.mode = t), (this.numChars = e), (this.bitData = r), e < 0))
            throw RangeError("Invalid argument");
          this.bitData = r.slice();
        }
        getData() {
          return this.bitData.slice();
        }
      }
      let v = [1, 10, 12, 14],
        A = [2, 9, 11, 13],
        F = [4, 8, 16, 16];
      function E(t, e) {
        return t[Math.floor((e + 7) / 17) + 1];
      }
      function k(t) {
        let e = [];
        for (let r of t) b(r, 8, e);
        return new z(F, t.length, e);
      }
      function x(t) {
        if (t < 1 || t > 40) throw RangeError("Version number out of range");
        let e = (16 * t + 128) * t + 64;
        if (t >= 2) {
          let r = Math.floor(t / 7) + 2;
          (e -= (25 * r - 10) * r - 55), t >= 7 && (e -= 36);
        }
        return e;
      }
      function R(t, e) {
        return Math.floor(x(t) / 8) - p[e[0]][t] * w[e[0]][t];
      }
      function C(t, e) {
        if (t >>> 8 != 0 || e >>> 8 != 0) throw RangeError("Byte out of range");
        let r = 0;
        for (let i = 7; i >= 0; i--)
          r = (r << 1) ^ ((r >>> 7) * 285) ^ (((e >>> i) & 1) * t);
        return r;
      }
      var I = function ({
        ecl: t = "M",
        size: e = 200,
        uri: r,
        clearSize: i = 0,
        image: l,
        imageBackground: h = "transparent",
      }) {
        let a = e - 20,
          p = (0, s.useMemo)(() => {
            let e = [],
              s = (function (t, e) {
                let {
                    ecc: r = "L",
                    boostEcc: i = !1,
                    minVersion: n = 1,
                    maxVersion: s = 40,
                    maskPattern: l = -1,
                    border: h = 1,
                  } = e || {},
                  a =
                    "string" == typeof t
                      ? (function (t) {
                          return "" === t
                            ? []
                            : g.test(t)
                            ? [
                                (function (t) {
                                  if (!g.test(t))
                                    throw RangeError(
                                      "String contains non-numeric characters"
                                    );
                                  let e = [];
                                  for (let r = 0; r < t.length; ) {
                                    let i = Math.min(t.length - r, 3);
                                    b(
                                      Number.parseInt(
                                        t.substring(r, r + i),
                                        10
                                      ),
                                      3 * i + 1,
                                      e
                                    ),
                                      (r += i);
                                  }
                                  return new z(v, t.length, e);
                                })(t),
                              ]
                            : m.test(t)
                            ? [
                                (function (t) {
                                  let e;
                                  if (!m.test(t))
                                    throw RangeError(
                                      "String contains unencodable characters in alphanumeric mode"
                                    );
                                  let r = [];
                                  for (e = 0; e + 2 <= t.length; e += 2) {
                                    let i = 45 * y.indexOf(t.charAt(e));
                                    b((i += y.indexOf(t.charAt(e + 1))), 11, r);
                                  }
                                  return (
                                    e < t.length &&
                                      b(y.indexOf(t.charAt(e)), 6, r),
                                    new z(A, t.length, r)
                                  );
                                })(t),
                              ]
                            : [
                                k(
                                  (function (t) {
                                    t = encodeURI(t);
                                    let e = [];
                                    for (let r = 0; r < t.length; r++)
                                      "%" !== t.charAt(r)
                                        ? e.push(t.charCodeAt(r))
                                        : (e.push(
                                            Number.parseInt(
                                              t.substring(r + 1, r + 3),
                                              16
                                            )
                                          ),
                                          (r += 2));
                                    return e;
                                  })(t)
                                ),
                              ];
                        })(t)
                      : Array.isArray(t)
                      ? [k(t)]
                      : void 0;
                if (!a)
                  throw Error(
                    `uqr only supports encoding string and binary data, but got: ${typeof t}`
                  );
                let p = (function (t, e, r = 1, i = 40, n = -1, s = !0) {
                    let o, l;
                    if (!(1 <= r && r <= i && i <= 40) || n < -1 || n > 7)
                      throw RangeError("Invalid value");
                    for (o = r; ; o++) {
                      let r = 8 * R(o, e),
                        n = (function (t, e) {
                          let r = 0;
                          for (let i of t) {
                            let t = E(i.mode, e);
                            if (i.numChars >= 1 << t)
                              return Number.POSITIVE_INFINITY;
                            r += 4 + t + i.bitData.length;
                          }
                          return r;
                        })(t, o);
                      if (n <= r) {
                        l = n;
                        break;
                      }
                      if (o >= i) throw RangeError("Data too long");
                    }
                    for (let t of [u, f, d]) s && l <= 8 * R(o, t) && (e = t);
                    let h = [];
                    for (let e of t)
                      for (let t of (b(e.mode[0], 4, h),
                      b(e.numChars, E(e.mode, o), h),
                      e.getData()))
                        h.push(t);
                    let a = 8 * R(o, e);
                    b(0, Math.min(4, a - h.length), h),
                      b(0, (8 - (h.length % 8)) % 8, h);
                    for (let t = 236; h.length < a; t ^= 253) b(t, 8, h);
                    let c = Array.from(
                      { length: Math.ceil(h.length / 8) },
                      () => 0
                    );
                    return (
                      h.forEach((t, e) => (c[e >>> 3] |= t << (7 - (7 & e)))),
                      new M(o, e, c, n)
                    );
                  })(a, c[r], n, s, l, i),
                  w = (function (t, e = 1) {
                    if (!e) return t;
                    let { size: r } = t,
                      i = r + 2 * e;
                    (t.size = i),
                      t.data.forEach((t) => {
                        for (let r = 0; r < e; r++) t.unshift(!1), t.push(!1);
                      });
                    for (let r = 0; r < e; r++)
                      t.data.unshift(Array.from({ length: i }, (t) => !1)),
                        t.data.push(Array.from({ length: i }, (t) => !1));
                    let n = o.Border;
                    t.types.forEach((t) => {
                      for (let r = 0; r < e; r++) t.unshift(n), t.push(n);
                    });
                    for (let r = 0; r < e; r++)
                      t.types.unshift(Array.from({ length: i }, (t) => n)),
                        t.types.push(Array.from({ length: i }, (t) => n));
                    return t;
                  })(
                    {
                      version: p.version,
                      maskPattern: p.mask,
                      size: p.size,
                      data: p.modules,
                      types: p.types,
                    },
                    h
                  );
                return (
                  e?.invert && (w.data = w.data.map((t) => t.map((t) => !t))),
                  e?.onEncoded?.(w),
                  w
                );
              })(r, { ecc: t, border: 0 }).data,
              p = a / s.length;
            for (let { x: t, y: r } of [
              { x: 0, y: 0 },
              { x: 1, y: 0 },
              { x: 0, y: 1 },
            ]) {
              let i = (s.length - 7) * p * t,
                o = (s.length - 7) * p * r;
              for (let s = 0; s < 3; s++)
                e.push(
                  (0, n.jsx)(
                    "rect",
                    {
                      fill:
                        s % 2 != 0
                          ? "var(--ck-qr-background, var(--ck-body-background))"
                          : "var(--ck-qr-dot-color)",
                      rx: -((s - 2) * 5) + (0 === s ? 2 : 3),
                      ry: -((s - 2) * 5) + (0 === s ? 2 : 3),
                      width: p * (7 - 2 * s),
                      height: p * (7 - 2 * s),
                      x: i + p * s,
                      y: o + p * s,
                    },
                    `${s}-${t}-${r}`
                  )
                );
            }
            if (l) {
              let t = (s.length - 7) * p * 1,
                r = (s.length - 7) * p * 1;
              e.push(
                (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)("rect", {
                      fill: h,
                      rx: 12,
                      ry: 12,
                      width: 7 * p,
                      height: 7 * p,
                      x: t + 0 * p,
                      y: r + 0 * p,
                    }),
                    (0, n.jsx)("foreignObject", {
                      width: 7 * p,
                      height: 7 * p,
                      x: t + 0 * p,
                      y: r + 0 * p,
                      children: (0, n.jsx)("div", {
                        style: { borderRadius: 12, overflow: "hidden" },
                        children: l,
                      }),
                    }),
                  ],
                })
              );
            }
            let w = Math.floor((i + 25) / p),
              P = s.length / 2 - w / 2,
              F = s.length / 2 + w / 2 - 1;
            return (
              s.forEach((t, r) => {
                t.forEach((t, i) => {
                  s[r]?.[i] &&
                    !(
                      (r < 7 && i < 7) ||
                      (r > s.length - 8 && i < 7) ||
                      (r < 7 && i > s.length - 8)
                    ) &&
                    (l || !(r > P && r < F && i > P && i < F)) &&
                    e.push(
                      (0, n.jsx)(
                        "circle",
                        {
                          cx: r * p + p / 2,
                          cy: i * p + p / 2,
                          fill: "var(--ck-qr-dot-color)",
                          r: p / 3,
                        },
                        `circle-${r}-${i}`
                      )
                    );
                });
              }),
              e
            );
          }, [t, l, h, i, a, r]);
        return (0, n.jsxs)("svg", {
          height: a,
          width: a,
          viewBox: `0 0 ${a} ${a}`,
          style: { width: a, height: a },
          role: "presentation",
          children: [
            (0, n.jsx)("rect", { fill: "transparent", height: a, width: a }),
            p,
          ],
        });
      };
    },
  },
]);
