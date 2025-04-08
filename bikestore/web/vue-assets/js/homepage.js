(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
  new MutationObserver((r) => {
    for (const o of r) if (o.type === 'childList') for (const i of o.addedNodes) i.tagName === 'LINK' && i.rel === 'modulepreload' && n(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(r) {
    const o = {};
    return r.integrity && (o.integrity = r.integrity), r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy), r.crossOrigin === 'use-credentials' ? (o.credentials = 'include') : r.crossOrigin === 'anonymous' ? (o.credentials = 'omit') : (o.credentials = 'same-origin'), o;
  }
  function n(r) {
    if (r.ep) return;
    r.ep = !0;
    const o = s(r);
    fetch(r.href, o);
  }
})();
/**
 * @vue/shared v3.4.19
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function ws(e, t) {
  const s = new Set(e.split(','));
  return t ? (n) => s.has(n.toLowerCase()) : (n) => s.has(n);
}
const V = {},
  Je = [],
  ie = () => {},
  Ar = () => !1,
  Ht = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  ys = (e) => e.startsWith('onUpdate:'),
  Y = Object.assign,
  As = (e, t) => {
    const s = e.indexOf(t);
    s > -1 && e.splice(s, 1);
  },
  Cr = Object.prototype.hasOwnProperty,
  P = (e, t) => Cr.call(e, t),
  S = Array.isArray,
  We = (e) => Nt(e) === '[object Map]',
  Tn = (e) => Nt(e) === '[object Set]',
  k = (e) => typeof e == 'function',
  Q = (e) => typeof e == 'string',
  qe = (e) => typeof e == 'symbol',
  U = (e) => e !== null && typeof e == 'object',
  On = (e) => (U(e) || k(e)) && k(e.then) && k(e.catch),
  En = Object.prototype.toString,
  Nt = (e) => En.call(e),
  Tr = (e) => Nt(e).slice(8, -1),
  Sn = (e) => Nt(e) === '[object Object]',
  Cs = (e) => Q(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  it = ws(',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'),
  Vt = (e) => {
    const t = Object.create(null);
    return (s) => t[s] || (t[s] = e(s));
  },
  Or = /-(\w)/g,
  Ye = Vt((e) => e.replace(Or, (t, s) => (s ? s.toUpperCase() : ''))),
  Er = /\B([A-Z])/g,
  et = Vt((e) => e.replace(Er, '-$1').toLowerCase()),
  jn = Vt((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  es = Vt((e) => (e ? `on${jn(e)}` : '')),
  Pe = (e, t) => !Object.is(e, t),
  ts = (e, t) => {
    for (let s = 0; s < e.length; s++) e[s](t);
  },
  Bt = (e, t, s) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: s });
  },
  Sr = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let Ws;
const kn = () => Ws || (Ws = typeof globalThis < 'u' ? globalThis : typeof self < 'u' ? self : typeof window < 'u' ? window : typeof global < 'u' ? global : {});
function Ts(e) {
  if (S(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s],
        r = Q(n) ? Pr(n) : Ts(n);
      if (r) for (const o in r) t[o] = r[o];
    }
    return t;
  } else if (Q(e) || U(e)) return e;
}
const jr = /;(?![^(]*\))/g,
  kr = /:([^]+)/,
  Ir = /\/\*[^]*?\*\//g;
function Pr(e) {
  const t = {};
  return (
    e
      .replace(Ir, '')
      .split(jr)
      .forEach((s) => {
        if (s) {
          const n = s.split(kr);
          n.length > 1 && (t[n[0].trim()] = n[1].trim());
        }
      }),
    t
  );
}
function Os(e) {
  let t = '';
  if (Q(e)) t = e;
  else if (S(e))
    for (let s = 0; s < e.length; s++) {
      const n = Os(e[s]);
      n && (t += n + ' ');
    }
  else if (U(e)) for (const s in e) e[s] && (t += s + ' ');
  return t.trim();
}
const Br = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  Mr = ws(Br);
function In(e) {
  return !!e || e === '';
}
const wt = (e) => (Q(e) ? e : e == null ? '' : S(e) || (U(e) && (e.toString === En || !k(e.toString))) ? JSON.stringify(e, Pn, 2) : String(e)),
  Pn = (e, t) => (t && t.__v_isRef ? Pn(e, t.value) : We(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((s, [n, r], o) => ((s[ss(n, o) + ' =>'] = r), s), {}) } : Tn(t) ? { [`Set(${t.size})`]: [...t.values()].map((s) => ss(s)) } : qe(t) ? ss(t) : U(t) && !S(t) && !Sn(t) ? String(t) : t),
  ss = (e, t = '') => {
    var s;
    return qe(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e;
  };
/**
 * @vue/reactivity v3.4.19
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let ce;
class Rr {
  constructor(t = !1) {
    (this.detached = t), (this._active = !0), (this.effects = []), (this.cleanups = []), (this.parent = ce), !t && ce && (this.index = (ce.scopes || (ce.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const s = ce;
      try {
        return (ce = this), t();
      } finally {
        ce = s;
      }
    }
  }
  on() {
    ce = this;
  }
  off() {
    ce = this.parent;
  }
  stop(t) {
    if (this._active) {
      let s, n;
      for (s = 0, n = this.effects.length; s < n; s++) this.effects[s].stop();
      for (s = 0, n = this.cleanups.length; s < n; s++) this.cleanups[s]();
      if (this.scopes) for (s = 0, n = this.scopes.length; s < n; s++) this.scopes[s].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && ((this.parent.scopes[this.index] = r), (r.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function Fr(e, t = ce) {
  t && t.active && t.effects.push(e);
}
function Lr() {
  return ce;
}
let Ne;
class Es {
  constructor(t, s, n, r) {
    (this.fn = t), (this.trigger = s), (this.scheduler = n), (this.active = !0), (this.deps = []), (this._dirtyLevel = 4), (this._trackId = 0), (this._runnings = 0), (this._shouldSchedule = !1), (this._depsLength = 0), Fr(this, r);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      (this._dirtyLevel = 1), De();
      for (let t = 0; t < this._depsLength; t++) {
        const s = this.deps[t];
        if (s.computed && (Hr(s.computed), this._dirtyLevel >= 4)) break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Ue();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn();
    let t = ke,
      s = Ne;
    try {
      return (ke = !0), (Ne = this), this._runnings++, zs(this), this.fn();
    } finally {
      Gs(this), this._runnings--, (Ne = s), (ke = t);
    }
  }
  stop() {
    var t;
    this.active && (zs(this), Gs(this), (t = this.onStop) == null || t.call(this), (this.active = !1));
  }
}
function Hr(e) {
  return e.value;
}
function zs(e) {
  e._trackId++, (e._depsLength = 0);
}
function Gs(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) Bn(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Bn(e, t) {
  const s = e.get(t);
  s !== void 0 && t._trackId !== s && (e.delete(t), e.size === 0 && e.cleanup());
}
let ke = !0,
  fs = 0;
const Mn = [];
function De() {
  Mn.push(ke), (ke = !1);
}
function Ue() {
  const e = Mn.pop();
  ke = e === void 0 ? !0 : e;
}
function Ss() {
  fs++;
}
function js() {
  for (fs--; !fs && us.length; ) us.shift()();
}
function Rn(e, t, s) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const n = e.deps[e._depsLength];
    n !== t ? (n && Bn(n, e), (e.deps[e._depsLength++] = t)) : e._depsLength++;
  }
}
const us = [];
function Fn(e, t, s) {
  Ss();
  for (const n of e.keys()) {
    let r;
    n._dirtyLevel < t && (r ?? (r = e.get(n) === n._trackId)) && (n._shouldSchedule || (n._shouldSchedule = n._dirtyLevel === 0), (n._dirtyLevel = t)), n._shouldSchedule && (r ?? (r = e.get(n) === n._trackId)) && (n.trigger(), (!n._runnings || n.allowRecurse) && n._dirtyLevel !== 2 && ((n._shouldSchedule = !1), n.scheduler && us.push(n.scheduler)));
  }
  js();
}
const Ln = (e, t) => {
    const s = new Map();
    return (s.cleanup = e), (s.computed = t), s;
  },
  as = new WeakMap(),
  Ve = Symbol(''),
  ds = Symbol('');
function se(e, t, s) {
  if (ke && Ne) {
    let n = as.get(e);
    n || as.set(e, (n = new Map()));
    let r = n.get(s);
    r || n.set(s, (r = Ln(() => n.delete(s)))), Rn(Ne, r);
  }
}
function Ae(e, t, s, n, r, o) {
  const i = as.get(e);
  if (!i) return;
  let c = [];
  if (t === 'clear') c = [...i.values()];
  else if (s === 'length' && S(e)) {
    const u = Number(n);
    i.forEach((d, h) => {
      (h === 'length' || (!qe(h) && h >= u)) && c.push(d);
    });
  } else
    switch ((s !== void 0 && c.push(i.get(s)), t)) {
      case 'add':
        S(e) ? Cs(s) && c.push(i.get('length')) : (c.push(i.get(Ve)), We(e) && c.push(i.get(ds)));
        break;
      case 'delete':
        S(e) || (c.push(i.get(Ve)), We(e) && c.push(i.get(ds)));
        break;
      case 'set':
        We(e) && c.push(i.get(Ve));
        break;
    }
  Ss();
  for (const u of c) u && Fn(u, 4);
  js();
}
const Nr = ws('__proto__,__v_isRef,__isVue'),
  Hn = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(qe)
  ),
  Ys = Vr();
function Vr() {
  const e = {};
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
      e[t] = function (...s) {
        const n = M(this);
        for (let o = 0, i = this.length; o < i; o++) se(n, 'get', o + '');
        const r = n[t](...s);
        return r === -1 || r === !1 ? n[t](...s.map(M)) : r;
      };
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
      e[t] = function (...s) {
        De(), Ss();
        const n = M(this)[t].apply(this, s);
        return js(), Ue(), n;
      };
    }),
    e
  );
}
function Dr(e) {
  const t = M(this);
  return se(t, 'has', e), t.hasOwnProperty(e);
}
class Nn {
  constructor(t = !1, s = !1) {
    (this._isReadonly = t), (this._shallow = s);
  }
  get(t, s, n) {
    const r = this._isReadonly,
      o = this._shallow;
    if (s === '__v_isReactive') return !r;
    if (s === '__v_isReadonly') return r;
    if (s === '__v_isShallow') return o;
    if (s === '__v_raw') return n === (r ? (o ? eo : $n) : o ? Un : Dn).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const i = S(t);
    if (!r) {
      if (i && P(Ys, s)) return Reflect.get(Ys, s, n);
      if (s === 'hasOwnProperty') return Dr;
    }
    const c = Reflect.get(t, s, n);
    return (qe(s) ? Hn.has(s) : Nr(s)) || (r || se(t, 'get', s), o) ? c : ne(c) ? (i && Cs(s) ? c : c.value) : U(c) ? (r ? Kn(c) : Ps(c)) : c;
  }
}
class Vn extends Nn {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, r) {
    let o = t[s];
    if (!this._shallow) {
      const u = Ze(o);
      if ((!Mt(n) && !Ze(n) && ((o = M(o)), (n = M(n))), !S(t) && ne(o) && !ne(n))) return u ? !1 : ((o.value = n), !0);
    }
    const i = S(t) && Cs(s) ? Number(s) < t.length : P(t, s),
      c = Reflect.set(t, s, n, r);
    return t === M(r) && (i ? Pe(n, o) && Ae(t, 'set', s, n) : Ae(t, 'add', s, n)), c;
  }
  deleteProperty(t, s) {
    const n = P(t, s);
    t[s];
    const r = Reflect.deleteProperty(t, s);
    return r && n && Ae(t, 'delete', s, void 0), r;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!qe(s) || !Hn.has(s)) && se(t, 'has', s), n;
  }
  ownKeys(t) {
    return se(t, 'iterate', S(t) ? 'length' : Ve), Reflect.ownKeys(t);
  }
}
class Ur extends Nn {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, s) {
    return !0;
  }
  deleteProperty(t, s) {
    return !0;
  }
}
const $r = new Vn(),
  Kr = new Ur(),
  Qr = new Vn(!0),
  ks = (e) => e,
  Dt = (e) => Reflect.getPrototypeOf(e);
function yt(e, t, s = !1, n = !1) {
  e = e.__v_raw;
  const r = M(e),
    o = M(t);
  s || (Pe(t, o) && se(r, 'get', t), se(r, 'get', o));
  const { has: i } = Dt(r),
    c = n ? ks : s ? Ms : ut;
  if (i.call(r, t)) return c(e.get(t));
  if (i.call(r, o)) return c(e.get(o));
  e !== r && e.get(t);
}
function At(e, t = !1) {
  const s = this.__v_raw,
    n = M(s),
    r = M(e);
  return t || (Pe(e, r) && se(n, 'has', e), se(n, 'has', r)), e === r ? s.has(e) : s.has(e) || s.has(r);
}
function Ct(e, t = !1) {
  return (e = e.__v_raw), !t && se(M(e), 'iterate', Ve), Reflect.get(e, 'size', e);
}
function Zs(e) {
  e = M(e);
  const t = M(this);
  return Dt(t).has.call(t, e) || (t.add(e), Ae(t, 'add', e, e)), this;
}
function Xs(e, t) {
  t = M(t);
  const s = M(this),
    { has: n, get: r } = Dt(s);
  let o = n.call(s, e);
  o || ((e = M(e)), (o = n.call(s, e)));
  const i = r.call(s, e);
  return s.set(e, t), o ? Pe(t, i) && Ae(s, 'set', e, t) : Ae(s, 'add', e, t), this;
}
function qs(e) {
  const t = M(this),
    { has: s, get: n } = Dt(t);
  let r = s.call(t, e);
  r || ((e = M(e)), (r = s.call(t, e))), n && n.call(t, e);
  const o = t.delete(e);
  return r && Ae(t, 'delete', e, void 0), o;
}
function en() {
  const e = M(this),
    t = e.size !== 0,
    s = e.clear();
  return t && Ae(e, 'clear', void 0, void 0), s;
}
function Tt(e, t) {
  return function (n, r) {
    const o = this,
      i = o.__v_raw,
      c = M(i),
      u = t ? ks : e ? Ms : ut;
    return !e && se(c, 'iterate', Ve), i.forEach((d, h) => n.call(r, u(d), u(h), o));
  };
}
function Ot(e, t, s) {
  return function (...n) {
    const r = this.__v_raw,
      o = M(r),
      i = We(o),
      c = e === 'entries' || (e === Symbol.iterator && i),
      u = e === 'keys' && i,
      d = r[e](...n),
      h = s ? ks : t ? Ms : ut;
    return (
      !t && se(o, 'iterate', u ? ds : Ve),
      {
        next() {
          const { value: w, done: C } = d.next();
          return C ? { value: w, done: C } : { value: c ? [h(w[0]), h(w[1])] : h(w), done: C };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Oe(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this;
  };
}
function Jr() {
  const e = {
      get(o) {
        return yt(this, o);
      },
      get size() {
        return Ct(this);
      },
      has: At,
      add: Zs,
      set: Xs,
      delete: qs,
      clear: en,
      forEach: Tt(!1, !1),
    },
    t = {
      get(o) {
        return yt(this, o, !1, !0);
      },
      get size() {
        return Ct(this);
      },
      has: At,
      add: Zs,
      set: Xs,
      delete: qs,
      clear: en,
      forEach: Tt(!1, !0),
    },
    s = {
      get(o) {
        return yt(this, o, !0);
      },
      get size() {
        return Ct(this, !0);
      },
      has(o) {
        return At.call(this, o, !0);
      },
      add: Oe('add'),
      set: Oe('set'),
      delete: Oe('delete'),
      clear: Oe('clear'),
      forEach: Tt(!0, !1),
    },
    n = {
      get(o) {
        return yt(this, o, !0, !0);
      },
      get size() {
        return Ct(this, !0);
      },
      has(o) {
        return At.call(this, o, !0);
      },
      add: Oe('add'),
      set: Oe('set'),
      delete: Oe('delete'),
      clear: Oe('clear'),
      forEach: Tt(!0, !0),
    };
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((o) => {
      (e[o] = Ot(o, !1, !1)), (s[o] = Ot(o, !0, !1)), (t[o] = Ot(o, !1, !0)), (n[o] = Ot(o, !0, !0));
    }),
    [e, s, t, n]
  );
}
const [Wr, zr, Gr, Yr] = Jr();
function Is(e, t) {
  const s = t ? (e ? Yr : Gr) : e ? zr : Wr;
  return (n, r, o) => (r === '__v_isReactive' ? !e : r === '__v_isReadonly' ? e : r === '__v_raw' ? n : Reflect.get(P(s, r) && r in n ? s : n, r, o));
}
const Zr = { get: Is(!1, !1) },
  Xr = { get: Is(!1, !0) },
  qr = { get: Is(!0, !1) },
  Dn = new WeakMap(),
  Un = new WeakMap(),
  $n = new WeakMap(),
  eo = new WeakMap();
function to(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1;
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2;
    default:
      return 0;
  }
}
function so(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : to(Tr(e));
}
function Ps(e) {
  return Ze(e) ? e : Bs(e, !1, $r, Zr, Dn);
}
function no(e) {
  return Bs(e, !1, Qr, Xr, Un);
}
function Kn(e) {
  return Bs(e, !0, Kr, qr, $n);
}
function Bs(e, t, s, n, r) {
  if (!U(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const o = r.get(e);
  if (o) return o;
  const i = so(e);
  if (i === 0) return e;
  const c = new Proxy(e, i === 2 ? n : s);
  return r.set(e, c), c;
}
function ze(e) {
  return Ze(e) ? ze(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ze(e) {
  return !!(e && e.__v_isReadonly);
}
function Mt(e) {
  return !!(e && e.__v_isShallow);
}
function Qn(e) {
  return ze(e) || Ze(e);
}
function M(e) {
  const t = e && e.__v_raw;
  return t ? M(t) : e;
}
function Jn(e) {
  return Object.isExtensible(e) && Bt(e, '__v_skip', !0), e;
}
const ut = (e) => (U(e) ? Ps(e) : e),
  Ms = (e) => (U(e) ? Kn(e) : e);
class Wn {
  constructor(t, s, n, r) {
    (this._setter = s),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new Es(
        () => t(this._value),
        () => St(this, this.effect._dirtyLevel === 2 ? 2 : 3)
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !r),
      (this.__v_isReadonly = n);
  }
  get value() {
    const t = M(this);
    return (!t._cacheable || t.effect.dirty) && Pe(t._value, (t._value = t.effect.run())) && St(t, 4), zn(t), t.effect._dirtyLevel >= 2 && St(t, 2), t._value;
  }
  set value(t) {
    this._setter(t);
  }
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
}
function ro(e, t, s = !1) {
  let n, r;
  const o = k(e);
  return o ? ((n = e), (r = ie)) : ((n = e.get), (r = e.set)), new Wn(n, r, o || !r, s);
}
function zn(e) {
  var t;
  ke && Ne && ((e = M(e)), Rn(Ne, (t = e.dep) != null ? t : (e.dep = Ln(() => (e.dep = void 0), e instanceof Wn ? e : void 0))));
}
function St(e, t = 4, s) {
  e = M(e);
  const n = e.dep;
  n && Fn(n, t);
}
function ne(e) {
  return !!(e && e.__v_isRef === !0);
}
function oo(e) {
  return io(e, !1);
}
function io(e, t) {
  return ne(e) ? e : new lo(e, t);
}
class lo {
  constructor(t, s) {
    (this.__v_isShallow = s), (this.dep = void 0), (this.__v_isRef = !0), (this._rawValue = s ? t : M(t)), (this._value = s ? t : ut(t));
  }
  get value() {
    return zn(this), this._value;
  }
  set value(t) {
    const s = this.__v_isShallow || Mt(t) || Ze(t);
    (t = s ? t : M(t)), Pe(t, this._rawValue) && ((this._rawValue = t), (this._value = s ? t : ut(t)), St(this, 4));
  }
}
function co(e) {
  return ne(e) ? e.value : e;
}
const fo = {
  get: (e, t, s) => co(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const r = e[t];
    return ne(r) && !ne(s) ? ((r.value = s), !0) : Reflect.set(e, t, s, n);
  },
};
function Gn(e) {
  return ze(e) ? e : new Proxy(e, fo);
}
/**
 * @vue/runtime-core v3.4.19
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Ie(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (r) {
    Ut(r, t, s);
  }
}
function ae(e, t, s, n) {
  if (k(e)) {
    const o = Ie(e, t, s, n);
    return (
      o &&
        On(o) &&
        o.catch((i) => {
          Ut(i, t, s);
        }),
      o
    );
  }
  const r = [];
  for (let o = 0; o < e.length; o++) r.push(ae(e[o], t, s, n));
  return r;
}
function Ut(e, t, s, n = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy,
      c = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; o; ) {
      const d = o.ec;
      if (d) {
        for (let h = 0; h < d.length; h++) if (d[h](e, i, c) === !1) return;
      }
      o = o.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      Ie(u, null, 10, [e, i, c]);
      return;
    }
  }
  uo(e, s, r, n);
}
function uo(e, t, s, n = !0) {
  console.error(e);
}
let at = !1,
  hs = !1;
const G = [];
let _e = 0;
const Ge = [];
let Ee = null,
  He = 0;
const Yn = Promise.resolve();
let Rs = null;
function ao(e) {
  const t = Rs || Yn;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ho(e) {
  let t = _e + 1,
    s = G.length;
  for (; t < s; ) {
    const n = (t + s) >>> 1,
      r = G[n],
      o = dt(r);
    o < e || (o === e && r.pre) ? (t = n + 1) : (s = n);
  }
  return t;
}
function Fs(e) {
  (!G.length || !G.includes(e, at && e.allowRecurse ? _e + 1 : _e)) && (e.id == null ? G.push(e) : G.splice(ho(e.id), 0, e), Zn());
}
function Zn() {
  !at && !hs && ((hs = !0), (Rs = Yn.then(qn)));
}
function po(e) {
  const t = G.indexOf(e);
  t > _e && G.splice(t, 1);
}
function go(e) {
  S(e) ? Ge.push(...e) : (!Ee || !Ee.includes(e, e.allowRecurse ? He + 1 : He)) && Ge.push(e), Zn();
}
function tn(e, t, s = at ? _e + 1 : 0) {
  for (; s < G.length; s++) {
    const n = G[s];
    if (n && n.pre) {
      if (e && n.id !== e.uid) continue;
      G.splice(s, 1), s--, n();
    }
  }
}
function Xn(e) {
  if (Ge.length) {
    const t = [...new Set(Ge)].sort((s, n) => dt(s) - dt(n));
    if (((Ge.length = 0), Ee)) {
      Ee.push(...t);
      return;
    }
    for (Ee = t, He = 0; He < Ee.length; He++) Ee[He]();
    (Ee = null), (He = 0);
  }
}
const dt = (e) => (e.id == null ? 1 / 0 : e.id),
  mo = (e, t) => {
    const s = dt(e) - dt(t);
    if (s === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return s;
  };
function qn(e) {
  (hs = !1), (at = !0), G.sort(mo);
  try {
    for (_e = 0; _e < G.length; _e++) {
      const t = G[_e];
      t && t.active !== !1 && Ie(t, null, 14);
    }
  } finally {
    (_e = 0), (G.length = 0), Xn(), (at = !1), (Rs = null), (G.length || Ge.length) && qn();
  }
}
function bo(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || V;
  let r = s;
  const o = t.startsWith('update:'),
    i = o && t.slice(7);
  if (i && i in n) {
    const h = `${i === 'modelValue' ? 'model' : i}Modifiers`,
      { number: w, trim: C } = n[h] || V;
    C && (r = s.map((j) => (Q(j) ? j.trim() : j))), w && (r = s.map(Sr));
  }
  let c,
    u = n[(c = es(t))] || n[(c = es(Ye(t)))];
  !u && o && (u = n[(c = es(et(t)))]), u && ae(u, e, 6, r);
  const d = n[c + 'Once'];
  if (d) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[c]) return;
    (e.emitted[c] = !0), ae(d, e, 6, r);
  }
}
function er(e, t, s = !1) {
  const n = t.emitsCache,
    r = n.get(e);
  if (r !== void 0) return r;
  const o = e.emits;
  let i = {},
    c = !1;
  if (!k(e)) {
    const u = (d) => {
      const h = er(d, t, !0);
      h && ((c = !0), Y(i, h));
    };
    !s && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !o && !c ? (U(e) && n.set(e, null), null) : (S(o) ? o.forEach((u) => (i[u] = null)) : Y(i, o), U(e) && n.set(e, i), i);
}
function $t(e, t) {
  return !e || !Ht(t) ? !1 : ((t = t.slice(2).replace(/Once$/, '')), P(e, t[0].toLowerCase() + t.slice(1)) || P(e, et(t)) || P(e, t));
}
let xe = null,
  tr = null;
function Rt(e) {
  const t = xe;
  return (xe = e), (tr = (e && e.type.__scopeId) || null), t;
}
function _o(e, t = xe, s) {
  if (!t || e._n) return e;
  const n = (...r) => {
    n._d && dn(-1);
    const o = Rt(t);
    let i;
    try {
      i = e(...r);
    } finally {
      Rt(o), n._d && dn(1);
    }
    return i;
  };
  return (n._n = !0), (n._c = !0), (n._d = !0), n;
}
function ns(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: r,
    props: o,
    propsOptions: [i],
    slots: c,
    attrs: u,
    emit: d,
    render: h,
    renderCache: w,
    data: C,
    setupState: j,
    ctx: $,
    inheritAttrs: R,
  } = e;
  let J, K;
  const de = Rt(e);
  try {
    if (s.shapeFlag & 4) {
      const W = r || n,
        oe = W;
      (J = be(h.call(oe, W, w, o, j, C, $))), (K = u);
    } else {
      const W = t;
      (J = be(W.length > 1 ? W(o, { attrs: u, slots: c, emit: d }) : W(o, null))), (K = t.props ? u : xo(u));
    }
  } catch (W) {
    (ft.length = 0), Ut(W, e, 1), (J = q(ht));
  }
  let L = J;
  if (K && R !== !1) {
    const W = Object.keys(K),
      { shapeFlag: oe } = L;
    W.length && oe & 7 && (i && W.some(ys) && (K = vo(K, i)), (L = Xe(L, K)));
  }
  return s.dirs && ((L = Xe(L)), (L.dirs = L.dirs ? L.dirs.concat(s.dirs) : s.dirs)), s.transition && (L.transition = s.transition), (J = L), Rt(de), J;
}
const xo = (e) => {
    let t;
    for (const s in e) (s === 'class' || s === 'style' || Ht(s)) && ((t || (t = {}))[s] = e[s]);
    return t;
  },
  vo = (e, t) => {
    const s = {};
    for (const n in e) (!ys(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
    return s;
  };
function wo(e, t, s) {
  const { props: n, children: r, component: o } = e,
    { props: i, children: c, patchFlag: u } = t,
    d = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (s && u >= 0) {
    if (u & 1024) return !0;
    if (u & 16) return n ? sn(n, i, d) : !!i;
    if (u & 8) {
      const h = t.dynamicProps;
      for (let w = 0; w < h.length; w++) {
        const C = h[w];
        if (i[C] !== n[C] && !$t(d, C)) return !0;
      }
    }
  } else return (r || c) && (!c || !c.$stable) ? !0 : n === i ? !1 : n ? (i ? sn(n, i, d) : !0) : !!i;
  return !1;
}
function sn(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length) return !0;
  for (let r = 0; r < n.length; r++) {
    const o = n[r];
    if (t[o] !== e[o] && !$t(s, o)) return !0;
  }
  return !1;
}
function yo({ vnode: e, parent: t }, s) {
  for (; t; ) {
    const n = t.subTree;
    if ((n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)) ((e = t.vnode).el = s), (t = t.parent);
    else break;
  }
}
const Ao = Symbol.for('v-ndc'),
  Co = (e) => e.__isSuspense;
function To(e, t) {
  t && t.pendingBranch ? (S(e) ? t.effects.push(...e) : t.effects.push(e)) : go(e);
}
const Oo = Symbol.for('v-scx'),
  Eo = () => kt(Oo),
  Et = {};
function rs(e, t, s) {
  return sr(e, t, s);
}
function sr(e, t, { immediate: s, deep: n, flush: r, once: o, onTrack: i, onTrigger: c } = V) {
  if (t && o) {
    const B = t;
    t = (...we) => {
      B(...we), oe();
    };
  }
  const u = ee,
    d = (B) => (n === !0 ? B : Qe(B, n === !1 ? 1 : void 0));
  let h,
    w = !1,
    C = !1;
  if (
    (ne(e)
      ? ((h = () => e.value), (w = Mt(e)))
      : ze(e)
      ? ((h = () => d(e)), (w = !0))
      : S(e)
      ? ((C = !0),
        (w = e.some((B) => ze(B) || Mt(B))),
        (h = () =>
          e.map((B) => {
            if (ne(B)) return B.value;
            if (ze(B)) return d(B);
            if (k(B)) return Ie(B, u, 2);
          })))
      : k(e)
      ? t
        ? (h = () => Ie(e, u, 2))
        : (h = () => (j && j(), ae(e, u, 3, [$])))
      : (h = ie),
    t && n)
  ) {
    const B = h;
    h = () => Qe(B());
  }
  let j,
    $ = (B) => {
      j = L.onStop = () => {
        Ie(B, u, 4), (j = L.onStop = void 0);
      };
    },
    R;
  if (zt)
    if ((($ = ie), t ? s && ae(t, u, 3, [h(), C ? [] : void 0, $]) : h(), r === 'sync')) {
      const B = Eo();
      R = B.__watcherHandles || (B.__watcherHandles = []);
    } else return ie;
  let J = C ? new Array(e.length).fill(Et) : Et;
  const K = () => {
    if (!(!L.active || !L.dirty))
      if (t) {
        const B = L.run();
        (n || w || (C ? B.some((we, he) => Pe(we, J[he])) : Pe(B, J))) && (j && j(), ae(t, u, 3, [B, J === Et ? void 0 : C && J[0] === Et ? [] : J, $]), (J = B));
      } else L.run();
  };
  K.allowRecurse = !!t;
  let de;
  r === 'sync' ? (de = K) : r === 'post' ? (de = () => te(K, u && u.suspense)) : ((K.pre = !0), u && (K.id = u.uid), (de = () => Fs(K)));
  const L = new Es(h, ie, de),
    W = Lr(),
    oe = () => {
      L.stop(), W && As(W.effects, L);
    };
  return t ? (s ? K() : (J = L.run())) : r === 'post' ? te(L.run.bind(L), u && u.suspense) : L.run(), R && R.push(oe), oe;
}
function So(e, t, s) {
  const n = this.proxy,
    r = Q(e) ? (e.includes('.') ? nr(n, e) : () => n[e]) : e.bind(n, n);
  let o;
  k(t) ? (o = t) : ((o = t.handler), (s = t));
  const i = mt(this),
    c = sr(r, o.bind(n), s);
  return i(), c;
}
function nr(e, t) {
  const s = t.split('.');
  return () => {
    let n = e;
    for (let r = 0; r < s.length && n; r++) n = n[s[r]];
    return n;
  };
}
function Qe(e, t, s = 0, n) {
  if (!U(e) || e.__v_skip) return e;
  if (t && t > 0) {
    if (s >= t) return e;
    s++;
  }
  if (((n = n || new Set()), n.has(e))) return e;
  if ((n.add(e), ne(e))) Qe(e.value, t, s, n);
  else if (S(e)) for (let r = 0; r < e.length; r++) Qe(e[r], t, s, n);
  else if (Tn(e) || We(e))
    e.forEach((r) => {
      Qe(r, t, s, n);
    });
  else if (Sn(e)) for (const r in e) Qe(e[r], t, s, n);
  return e;
}
function Fe(e, t, s, n) {
  const r = e.dirs,
    o = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const c = r[i];
    o && (c.oldValue = o[i].value);
    let u = c.dir[n];
    u && (De(), ae(u, s, 8, [e.el, c, e, t]), Ue());
  }
}
const jt = (e) => !!e.type.__asyncLoader,
  rr = (e) => e.type.__isKeepAlive;
function jo(e, t) {
  or(e, 'a', t);
}
function ko(e, t) {
  or(e, 'da', t);
}
function or(e, t, s = ee) {
  const n =
    e.__wdc ||
    (e.__wdc = () => {
      let r = s;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return e();
    });
  if ((Kt(t, n, s), s)) {
    let r = s.parent;
    for (; r && r.parent; ) rr(r.parent.vnode) && Io(n, t, s, r), (r = r.parent);
  }
}
function Io(e, t, s, n) {
  const r = Kt(t, e, n, !0);
  lr(() => {
    As(n[t], r);
  }, s);
}
function Kt(e, t, s = ee, n = !1) {
  if (s) {
    const r = s[e] || (s[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          if (s.isUnmounted) return;
          De();
          const c = mt(s),
            u = ae(t, s, e, i);
          return c(), Ue(), u;
        });
    return n ? r.unshift(o) : r.push(o), o;
  }
}
const Te =
    (e) =>
    (t, s = ee) =>
      (!zt || e === 'sp') && Kt(e, (...n) => t(...n), s),
  Po = Te('bm'),
  ir = Te('m'),
  Bo = Te('bu'),
  Mo = Te('u'),
  Ro = Te('bum'),
  lr = Te('um'),
  Fo = Te('sp'),
  Lo = Te('rtg'),
  Ho = Te('rtc');
function No(e, t = ee) {
  Kt('ec', e, t);
}
function Vo(e, t, s, n) {
  let r;
  const o = s && s[n];
  if (S(e) || Q(e)) {
    r = new Array(e.length);
    for (let i = 0, c = e.length; i < c; i++) r[i] = t(e[i], i, void 0, o && o[i]);
  } else if (typeof e == 'number') {
    r = new Array(e);
    for (let i = 0; i < e; i++) r[i] = t(i + 1, i, void 0, o && o[i]);
  } else if (U(e))
    if (e[Symbol.iterator]) r = Array.from(e, (i, c) => t(i, c, void 0, o && o[c]));
    else {
      const i = Object.keys(e);
      r = new Array(i.length);
      for (let c = 0, u = i.length; c < u; c++) {
        const d = i[c];
        r[c] = t(e[d], d, c, o && o[c]);
      }
    }
  else r = [];
  return s && (s[n] = r), r;
}
const ps = (e) => (e ? (xr(e) ? Vs(e) || e.proxy : ps(e.parent)) : null),
  lt = Y(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ps(e.parent),
    $root: (e) => ps(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Ls(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        (e.effect.dirty = !0), Fs(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = ao.bind(e.proxy)),
    $watch: (e) => So.bind(e),
  }),
  os = (e, t) => e !== V && !e.__isScriptSetup && P(e, t),
  Do = {
    get({ _: e }, t) {
      const { ctx: s, setupState: n, data: r, props: o, accessCache: i, type: c, appContext: u } = e;
      let d;
      if (t[0] !== '$') {
        const j = i[t];
        if (j !== void 0)
          switch (j) {
            case 1:
              return n[t];
            case 2:
              return r[t];
            case 4:
              return s[t];
            case 3:
              return o[t];
          }
        else {
          if (os(n, t)) return (i[t] = 1), n[t];
          if (r !== V && P(r, t)) return (i[t] = 2), r[t];
          if ((d = e.propsOptions[0]) && P(d, t)) return (i[t] = 3), o[t];
          if (s !== V && P(s, t)) return (i[t] = 4), s[t];
          gs && (i[t] = 0);
        }
      }
      const h = lt[t];
      let w, C;
      if (h) return t === '$attrs' && se(e, 'get', t), h(e);
      if ((w = c.__cssModules) && (w = w[t])) return w;
      if (s !== V && P(s, t)) return (i[t] = 4), s[t];
      if (((C = u.config.globalProperties), P(C, t))) return C[t];
    },
    set({ _: e }, t, s) {
      const { data: n, setupState: r, ctx: o } = e;
      return os(r, t) ? ((r[t] = s), !0) : n !== V && P(n, t) ? ((n[t] = s), !0) : P(e.props, t) || (t[0] === '$' && t.slice(1) in e) ? !1 : ((o[t] = s), !0);
    },
    has({ _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: r, propsOptions: o } }, i) {
      let c;
      return !!s[i] || (e !== V && P(e, i)) || os(t, i) || ((c = o[0]) && P(c, i)) || P(n, i) || P(lt, i) || P(r.config.globalProperties, i);
    },
    defineProperty(e, t, s) {
      return s.get != null ? (e._.accessCache[t] = 0) : P(s, 'value') && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
    },
  };
function nn(e) {
  return S(e) ? e.reduce((t, s) => ((t[s] = null), t), {}) : e;
}
let gs = !0;
function Uo(e) {
  const t = Ls(e),
    s = e.proxy,
    n = e.ctx;
  (gs = !1), t.beforeCreate && rn(t.beforeCreate, e, 'bc');
  const { data: r, computed: o, methods: i, watch: c, provide: u, inject: d, created: h, beforeMount: w, mounted: C, beforeUpdate: j, updated: $, activated: R, deactivated: J, beforeDestroy: K, beforeUnmount: de, destroyed: L, unmounted: W, render: oe, renderTracked: B, renderTriggered: we, errorCaptured: he, serverPrefetch: Gt, expose: Be, inheritAttrs: st, components: bt, directives: _t, filters: Yt } = t;
  if ((d && $o(d, n, null), i))
    for (const D in i) {
      const H = i[D];
      k(H) && (n[D] = H.bind(s));
    }
  if (r) {
    const D = r.call(s, s);
    U(D) && (e.data = Ps(D));
  }
  if (((gs = !0), o))
    for (const D in o) {
      const H = o[D],
        Me = k(H) ? H.bind(s, s) : k(H.get) ? H.get.bind(s, s) : ie,
        xt = !k(H) && k(H.set) ? H.set.bind(s) : ie,
        Re = vi({ get: Me, set: xt });
      Object.defineProperty(n, D, { enumerable: !0, configurable: !0, get: () => Re.value, set: (pe) => (Re.value = pe) });
    }
  if (c) for (const D in c) cr(c[D], n, s, D);
  if (u) {
    const D = k(u) ? u.call(s) : u;
    Reflect.ownKeys(D).forEach((H) => {
      Go(H, D[H]);
    });
  }
  h && rn(h, e, 'c');
  function Z(D, H) {
    S(H) ? H.forEach((Me) => D(Me.bind(s))) : H && D(H.bind(s));
  }
  if ((Z(Po, w), Z(ir, C), Z(Bo, j), Z(Mo, $), Z(jo, R), Z(ko, J), Z(No, he), Z(Ho, B), Z(Lo, we), Z(Ro, de), Z(lr, W), Z(Fo, Gt), S(Be)))
    if (Be.length) {
      const D = e.exposed || (e.exposed = {});
      Be.forEach((H) => {
        Object.defineProperty(D, H, { get: () => s[H], set: (Me) => (s[H] = Me) });
      });
    } else e.exposed || (e.exposed = {});
  oe && e.render === ie && (e.render = oe), st != null && (e.inheritAttrs = st), bt && (e.components = bt), _t && (e.directives = _t);
}
function $o(e, t, s = ie) {
  S(e) && (e = ms(e));
  for (const n in e) {
    const r = e[n];
    let o;
    U(r) ? ('default' in r ? (o = kt(r.from || n, r.default, !0)) : (o = kt(r.from || n))) : (o = kt(r)), ne(o) ? Object.defineProperty(t, n, { enumerable: !0, configurable: !0, get: () => o.value, set: (i) => (o.value = i) }) : (t[n] = o);
  }
}
function rn(e, t, s) {
  ae(S(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy), t, s);
}
function cr(e, t, s, n) {
  const r = n.includes('.') ? nr(s, n) : () => s[n];
  if (Q(e)) {
    const o = t[e];
    k(o) && rs(r, o);
  } else if (k(e)) rs(r, e.bind(s));
  else if (U(e))
    if (S(e)) e.forEach((o) => cr(o, t, s, n));
    else {
      const o = k(e.handler) ? e.handler.bind(s) : t[e.handler];
      k(o) && rs(r, o, e);
    }
}
function Ls(e) {
  const t = e.type,
    { mixins: s, extends: n } = t,
    {
      mixins: r,
      optionsCache: o,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    c = o.get(t);
  let u;
  return c ? (u = c) : !r.length && !s && !n ? (u = t) : ((u = {}), r.length && r.forEach((d) => Ft(u, d, i, !0)), Ft(u, t, i)), U(t) && o.set(t, u), u;
}
function Ft(e, t, s, n = !1) {
  const { mixins: r, extends: o } = t;
  o && Ft(e, o, s, !0), r && r.forEach((i) => Ft(e, i, s, !0));
  for (const i in t)
    if (!(n && i === 'expose')) {
      const c = Ko[i] || (s && s[i]);
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const Ko = { data: on, props: ln, emits: ln, methods: ot, computed: ot, beforeCreate: X, created: X, beforeMount: X, mounted: X, beforeUpdate: X, updated: X, beforeDestroy: X, beforeUnmount: X, destroyed: X, unmounted: X, activated: X, deactivated: X, errorCaptured: X, serverPrefetch: X, components: ot, directives: ot, watch: Jo, provide: on, inject: Qo };
function on(e, t) {
  return t
    ? e
      ? function () {
          return Y(k(e) ? e.call(this, this) : e, k(t) ? t.call(this, this) : t);
        }
      : t
    : e;
}
function Qo(e, t) {
  return ot(ms(e), ms(t));
}
function ms(e) {
  if (S(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) t[e[s]] = e[s];
    return t;
  }
  return e;
}
function X(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ot(e, t) {
  return e ? Y(Object.create(null), e, t) : t;
}
function ln(e, t) {
  return e ? (S(e) && S(t) ? [...new Set([...e, ...t])] : Y(Object.create(null), nn(e), nn(t ?? {}))) : t;
}
function Jo(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = Y(Object.create(null), e);
  for (const n in t) s[n] = X(e[n], t[n]);
  return s;
}
function fr() {
  return { app: null, config: { isNativeTag: Ar, performance: !1, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: Object.create(null), optionsCache: new WeakMap(), propsCache: new WeakMap(), emitsCache: new WeakMap() };
}
let Wo = 0;
function zo(e, t) {
  return function (n, r = null) {
    k(n) || (n = Y({}, n)), r != null && !U(r) && (r = null);
    const o = fr(),
      i = new WeakSet();
    let c = !1;
    const u = (o.app = {
      _uid: Wo++,
      _component: n,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: wi,
      get config() {
        return o.config;
      },
      set config(d) {},
      use(d, ...h) {
        return i.has(d) || (d && k(d.install) ? (i.add(d), d.install(u, ...h)) : k(d) && (i.add(d), d(u, ...h))), u;
      },
      mixin(d) {
        return o.mixins.includes(d) || o.mixins.push(d), u;
      },
      component(d, h) {
        return h ? ((o.components[d] = h), u) : o.components[d];
      },
      directive(d, h) {
        return h ? ((o.directives[d] = h), u) : o.directives[d];
      },
      mount(d, h, w) {
        if (!c) {
          const C = q(n, r);
          return (C.appContext = o), w === !0 ? (w = 'svg') : w === !1 && (w = void 0), h && t ? t(C, d) : e(C, d, w), (c = !0), (u._container = d), (d.__vue_app__ = u), Vs(C.component) || C.component.proxy;
        }
      },
      unmount() {
        c && (e(null, u._container), delete u._container.__vue_app__);
      },
      provide(d, h) {
        return (o.provides[d] = h), u;
      },
      runWithContext(d) {
        const h = ct;
        ct = u;
        try {
          return d();
        } finally {
          ct = h;
        }
      },
    });
    return u;
  };
}
let ct = null;
function Go(e, t) {
  if (ee) {
    let s = ee.provides;
    const n = ee.parent && ee.parent.provides;
    n === s && (s = ee.provides = Object.create(n)), (s[e] = t);
  }
}
function kt(e, t, s = !1) {
  const n = ee || xe;
  if (n || ct) {
    const r = n ? (n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides) : ct._context.provides;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return s && k(t) ? t.call(n && n.proxy) : t;
  }
}
function Yo(e, t, s, n = !1) {
  const r = {},
    o = {};
  Bt(o, Jt, 1), (e.propsDefaults = Object.create(null)), ur(e, t, r, o);
  for (const i in e.propsOptions[0]) i in r || (r[i] = void 0);
  s ? (e.props = n ? r : no(r)) : e.type.props ? (e.props = r) : (e.props = o), (e.attrs = o);
}
function Zo(e, t, s, n) {
  const {
      props: r,
      attrs: o,
      vnode: { patchFlag: i },
    } = e,
    c = M(r),
    [u] = e.propsOptions;
  let d = !1;
  if ((n || i > 0) && !(i & 16)) {
    if (i & 8) {
      const h = e.vnode.dynamicProps;
      for (let w = 0; w < h.length; w++) {
        let C = h[w];
        if ($t(e.emitsOptions, C)) continue;
        const j = t[C];
        if (u)
          if (P(o, C)) j !== o[C] && ((o[C] = j), (d = !0));
          else {
            const $ = Ye(C);
            r[$] = bs(u, c, $, j, e, !1);
          }
        else j !== o[C] && ((o[C] = j), (d = !0));
      }
    }
  } else {
    ur(e, t, r, o) && (d = !0);
    let h;
    for (const w in c) (!t || (!P(t, w) && ((h = et(w)) === w || !P(t, h)))) && (u ? s && (s[w] !== void 0 || s[h] !== void 0) && (r[w] = bs(u, c, w, void 0, e, !0)) : delete r[w]);
    if (o !== c) for (const w in o) (!t || !P(t, w)) && (delete o[w], (d = !0));
  }
  d && Ae(e, 'set', '$attrs');
}
function ur(e, t, s, n) {
  const [r, o] = e.propsOptions;
  let i = !1,
    c;
  if (t)
    for (let u in t) {
      if (it(u)) continue;
      const d = t[u];
      let h;
      r && P(r, (h = Ye(u))) ? (!o || !o.includes(h) ? (s[h] = d) : ((c || (c = {}))[h] = d)) : $t(e.emitsOptions, u) || ((!(u in n) || d !== n[u]) && ((n[u] = d), (i = !0)));
    }
  if (o) {
    const u = M(s),
      d = c || V;
    for (let h = 0; h < o.length; h++) {
      const w = o[h];
      s[w] = bs(r, u, w, d[w], e, !P(d, w));
    }
  }
  return i;
}
function bs(e, t, s, n, r, o) {
  const i = e[s];
  if (i != null) {
    const c = P(i, 'default');
    if (c && n === void 0) {
      const u = i.default;
      if (i.type !== Function && !i.skipFactory && k(u)) {
        const { propsDefaults: d } = r;
        if (s in d) n = d[s];
        else {
          const h = mt(r);
          (n = d[s] = u.call(null, t)), h();
        }
      } else n = u;
    }
    i[0] && (o && !c ? (n = !1) : i[1] && (n === '' || n === et(s)) && (n = !0));
  }
  return n;
}
function ar(e, t, s = !1) {
  const n = t.propsCache,
    r = n.get(e);
  if (r) return r;
  const o = e.props,
    i = {},
    c = [];
  let u = !1;
  if (!k(e)) {
    const h = (w) => {
      u = !0;
      const [C, j] = ar(w, t, !0);
      Y(i, C), j && c.push(...j);
    };
    !s && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  if (!o && !u) return U(e) && n.set(e, Je), Je;
  if (S(o))
    for (let h = 0; h < o.length; h++) {
      const w = Ye(o[h]);
      cn(w) && (i[w] = V);
    }
  else if (o)
    for (const h in o) {
      const w = Ye(h);
      if (cn(w)) {
        const C = o[h],
          j = (i[w] = S(C) || k(C) ? { type: C } : Y({}, C));
        if (j) {
          const $ = an(Boolean, j.type),
            R = an(String, j.type);
          (j[0] = $ > -1), (j[1] = R < 0 || $ < R), ($ > -1 || P(j, 'default')) && c.push(w);
        }
      }
    }
  const d = [i, c];
  return U(e) && n.set(e, d), d;
}
function cn(e) {
  return e[0] !== '$' && !it(e);
}
function fn(e) {
  return e === null ? 'null' : typeof e == 'function' ? e.name || '' : (typeof e == 'object' && e.constructor && e.constructor.name) || '';
}
function un(e, t) {
  return fn(e) === fn(t);
}
function an(e, t) {
  return S(t) ? t.findIndex((s) => un(s, e)) : k(t) && un(t, e) ? 0 : -1;
}
const dr = (e) => e[0] === '_' || e === '$stable',
  Hs = (e) => (S(e) ? e.map(be) : [be(e)]),
  Xo = (e, t, s) => {
    if (t._n) return t;
    const n = _o((...r) => Hs(t(...r)), s);
    return (n._c = !1), n;
  },
  hr = (e, t, s) => {
    const n = e._ctx;
    for (const r in e) {
      if (dr(r)) continue;
      const o = e[r];
      if (k(o)) t[r] = Xo(r, o, n);
      else if (o != null) {
        const i = Hs(o);
        t[r] = () => i;
      }
    }
  },
  pr = (e, t) => {
    const s = Hs(t);
    e.slots.default = () => s;
  },
  qo = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const s = t._;
      s ? ((e.slots = M(t)), Bt(t, '_', s)) : hr(t, (e.slots = {}));
    } else (e.slots = {}), t && pr(e, t);
    Bt(e.slots, Jt, 1);
  },
  ei = (e, t, s) => {
    const { vnode: n, slots: r } = e;
    let o = !0,
      i = V;
    if (n.shapeFlag & 32) {
      const c = t._;
      c ? (s && c === 1 ? (o = !1) : (Y(r, t), !s && c === 1 && delete r._)) : ((o = !t.$stable), hr(t, r)), (i = t);
    } else t && (pr(e, t), (i = { default: 1 }));
    if (o) for (const c in r) !dr(c) && i[c] == null && delete r[c];
  };
function _s(e, t, s, n, r = !1) {
  if (S(e)) {
    e.forEach((C, j) => _s(C, t && (S(t) ? t[j] : t), s, n, r));
    return;
  }
  if (jt(n) && !r) return;
  const o = n.shapeFlag & 4 ? Vs(n.component) || n.component.proxy : n.el,
    i = r ? null : o,
    { i: c, r: u } = e,
    d = t && t.r,
    h = c.refs === V ? (c.refs = {}) : c.refs,
    w = c.setupState;
  if ((d != null && d !== u && (Q(d) ? ((h[d] = null), P(w, d) && (w[d] = null)) : ne(d) && (d.value = null)), k(u))) Ie(u, c, 12, [i, h]);
  else {
    const C = Q(u),
      j = ne(u);
    if (C || j) {
      const $ = () => {
        if (e.f) {
          const R = C ? (P(w, u) ? w[u] : h[u]) : u.value;
          r ? S(R) && As(R, o) : S(R) ? R.includes(o) || R.push(o) : C ? ((h[u] = [o]), P(w, u) && (w[u] = h[u])) : ((u.value = [o]), e.k && (h[e.k] = u.value));
        } else C ? ((h[u] = i), P(w, u) && (w[u] = i)) : j && ((u.value = i), e.k && (h[e.k] = i));
      };
      i ? (($.id = -1), te($, s)) : $();
    }
  }
}
const te = To;
function ti(e) {
  return si(e);
}
function si(e, t) {
  const s = kn();
  s.__VUE__ = !0;
  const { insert: n, remove: r, patchProp: o, createElement: i, createText: c, createComment: u, setText: d, setElementText: h, parentNode: w, nextSibling: C, setScopeId: j = ie, insertStaticContent: $ } = e,
    R = (l, f, a, p = null, g = null, _ = null, v = void 0, b = null, x = !!f.dynamicChildren) => {
      if (l === f) return;
      l && !rt(l, f) && ((p = vt(l)), pe(l, g, _, !0), (l = null)), f.patchFlag === -2 && ((x = !1), (f.dynamicChildren = null));
      const { type: m, ref: A, shapeFlag: O } = f;
      switch (m) {
        case Qt:
          J(l, f, a, p);
          break;
        case ht:
          K(l, f, a, p);
          break;
        case It:
          l == null && de(f, a, p, v);
          break;
        case fe:
          bt(l, f, a, p, g, _, v, b, x);
          break;
        default:
          O & 1 ? oe(l, f, a, p, g, _, v, b, x) : O & 6 ? _t(l, f, a, p, g, _, v, b, x) : (O & 64 || O & 128) && m.process(l, f, a, p, g, _, v, b, x, $e);
      }
      A != null && g && _s(A, l && l.ref, _, f || l, !f);
    },
    J = (l, f, a, p) => {
      if (l == null) n((f.el = c(f.children)), a, p);
      else {
        const g = (f.el = l.el);
        f.children !== l.children && d(g, f.children);
      }
    },
    K = (l, f, a, p) => {
      l == null ? n((f.el = u(f.children || '')), a, p) : (f.el = l.el);
    },
    de = (l, f, a, p) => {
      [l.el, l.anchor] = $(l.children, f, a, p, l.el, l.anchor);
    },
    L = ({ el: l, anchor: f }, a, p) => {
      let g;
      for (; l && l !== f; ) (g = C(l)), n(l, a, p), (l = g);
      n(f, a, p);
    },
    W = ({ el: l, anchor: f }) => {
      let a;
      for (; l && l !== f; ) (a = C(l)), r(l), (l = a);
      r(f);
    },
    oe = (l, f, a, p, g, _, v, b, x) => {
      f.type === 'svg' ? (v = 'svg') : f.type === 'math' && (v = 'mathml'), l == null ? B(f, a, p, g, _, v, b, x) : Gt(l, f, g, _, v, b, x);
    },
    B = (l, f, a, p, g, _, v, b) => {
      let x, m;
      const { props: A, shapeFlag: O, transition: T, dirs: E } = l;
      if (((x = l.el = i(l.type, _, A && A.is, A)), O & 8 ? h(x, l.children) : O & 16 && he(l.children, x, null, p, g, is(l, _), v, b), E && Fe(l, null, p, 'created'), we(x, l, l.scopeId, v, p), A)) {
        for (const F in A) F !== 'value' && !it(F) && o(x, F, null, A[F], _, l.children, p, g, ye);
        'value' in A && o(x, 'value', null, A.value, _), (m = A.onVnodeBeforeMount) && me(m, p, l);
      }
      E && Fe(l, null, p, 'beforeMount');
      const I = ni(g, T);
      I && T.beforeEnter(x),
        n(x, f, a),
        ((m = A && A.onVnodeMounted) || I || E) &&
          te(() => {
            m && me(m, p, l), I && T.enter(x), E && Fe(l, null, p, 'mounted');
          }, g);
    },
    we = (l, f, a, p, g) => {
      if ((a && j(l, a), p)) for (let _ = 0; _ < p.length; _++) j(l, p[_]);
      if (g) {
        let _ = g.subTree;
        if (f === _) {
          const v = g.vnode;
          we(l, v, v.scopeId, v.slotScopeIds, g.parent);
        }
      }
    },
    he = (l, f, a, p, g, _, v, b, x = 0) => {
      for (let m = x; m < l.length; m++) {
        const A = (l[m] = b ? Se(l[m]) : be(l[m]));
        R(null, A, f, a, p, g, _, v, b);
      }
    },
    Gt = (l, f, a, p, g, _, v) => {
      const b = (f.el = l.el);
      let { patchFlag: x, dynamicChildren: m, dirs: A } = f;
      x |= l.patchFlag & 16;
      const O = l.props || V,
        T = f.props || V;
      let E;
      if ((a && Le(a, !1), (E = T.onVnodeBeforeUpdate) && me(E, a, f, l), A && Fe(f, l, a, 'beforeUpdate'), a && Le(a, !0), m ? Be(l.dynamicChildren, m, b, a, p, is(f, g), _) : v || H(l, f, b, null, a, p, is(f, g), _, !1), x > 0)) {
        if (x & 16) st(b, f, O, T, a, p, g);
        else if ((x & 2 && O.class !== T.class && o(b, 'class', null, T.class, g), x & 4 && o(b, 'style', O.style, T.style, g), x & 8)) {
          const I = f.dynamicProps;
          for (let F = 0; F < I.length; F++) {
            const N = I[F],
              z = O[N],
              le = T[N];
            (le !== z || N === 'value') && o(b, N, z, le, g, l.children, a, p, ye);
          }
        }
        x & 1 && l.children !== f.children && h(b, f.children);
      } else !v && m == null && st(b, f, O, T, a, p, g);
      ((E = T.onVnodeUpdated) || A) &&
        te(() => {
          E && me(E, a, f, l), A && Fe(f, l, a, 'updated');
        }, p);
    },
    Be = (l, f, a, p, g, _, v) => {
      for (let b = 0; b < f.length; b++) {
        const x = l[b],
          m = f[b],
          A = x.el && (x.type === fe || !rt(x, m) || x.shapeFlag & 70) ? w(x.el) : a;
        R(x, m, A, null, p, g, _, v, !0);
      }
    },
    st = (l, f, a, p, g, _, v) => {
      if (a !== p) {
        if (a !== V) for (const b in a) !it(b) && !(b in p) && o(l, b, a[b], null, v, f.children, g, _, ye);
        for (const b in p) {
          if (it(b)) continue;
          const x = p[b],
            m = a[b];
          x !== m && b !== 'value' && o(l, b, m, x, v, f.children, g, _, ye);
        }
        'value' in p && o(l, 'value', a.value, p.value, v);
      }
    },
    bt = (l, f, a, p, g, _, v, b, x) => {
      const m = (f.el = l ? l.el : c('')),
        A = (f.anchor = l ? l.anchor : c(''));
      let { patchFlag: O, dynamicChildren: T, slotScopeIds: E } = f;
      E && (b = b ? b.concat(E) : E), l == null ? (n(m, a, p), n(A, a, p), he(f.children || [], a, A, g, _, v, b, x)) : O > 0 && O & 64 && T && l.dynamicChildren ? (Be(l.dynamicChildren, T, a, g, _, v, b), (f.key != null || (g && f === g.subTree)) && gr(l, f, !0)) : H(l, f, a, A, g, _, v, b, x);
    },
    _t = (l, f, a, p, g, _, v, b, x) => {
      (f.slotScopeIds = b), l == null ? (f.shapeFlag & 512 ? g.ctx.activate(f, a, p, v, x) : Yt(f, a, p, g, _, v, x)) : Ds(l, f, x);
    },
    Yt = (l, f, a, p, g, _, v) => {
      const b = (l.component = pi(l, p, g));
      if ((rr(l) && (b.ctx.renderer = $e), gi(b), b.asyncDep)) {
        if ((g && g.registerDep(b, Z), !l.el)) {
          const x = (b.subTree = q(ht));
          K(null, x, f, a);
        }
      } else Z(b, l, f, a, g, _, v);
    },
    Ds = (l, f, a) => {
      const p = (f.component = l.component);
      if (wo(l, f, a))
        if (p.asyncDep && !p.asyncResolved) {
          D(p, f, a);
          return;
        } else (p.next = f), po(p.update), (p.effect.dirty = !0), p.update();
      else (f.el = l.el), (p.vnode = f);
    },
    Z = (l, f, a, p, g, _, v) => {
      const b = () => {
          if (l.isMounted) {
            let { next: A, bu: O, u: T, parent: E, vnode: I } = l;
            {
              const Ke = mr(l);
              if (Ke) {
                A && ((A.el = I.el), D(l, A, v)),
                  Ke.asyncDep.then(() => {
                    l.isUnmounted || b();
                  });
                return;
              }
            }
            let F = A,
              N;
            Le(l, !1), A ? ((A.el = I.el), D(l, A, v)) : (A = I), O && ts(O), (N = A.props && A.props.onVnodeBeforeUpdate) && me(N, E, A, I), Le(l, !0);
            const z = ns(l),
              le = l.subTree;
            (l.subTree = z), R(le, z, w(le.el), vt(le), l, g, _), (A.el = z.el), F === null && yo(l, z.el), T && te(T, g), (N = A.props && A.props.onVnodeUpdated) && te(() => me(N, E, A, I), g);
          } else {
            let A;
            const { el: O, props: T } = f,
              { bm: E, m: I, parent: F } = l,
              N = jt(f);
            if ((Le(l, !1), E && ts(E), !N && (A = T && T.onVnodeBeforeMount) && me(A, F, f), Le(l, !0), O && qt)) {
              const z = () => {
                (l.subTree = ns(l)), qt(O, l.subTree, l, g, null);
              };
              N ? f.type.__asyncLoader().then(() => !l.isUnmounted && z()) : z();
            } else {
              const z = (l.subTree = ns(l));
              R(null, z, a, p, l, g, _), (f.el = z.el);
            }
            if ((I && te(I, g), !N && (A = T && T.onVnodeMounted))) {
              const z = f;
              te(() => me(A, F, z), g);
            }
            (f.shapeFlag & 256 || (F && jt(F.vnode) && F.vnode.shapeFlag & 256)) && l.a && te(l.a, g), (l.isMounted = !0), (f = a = p = null);
          }
        },
        x = (l.effect = new Es(b, ie, () => Fs(m), l.scope)),
        m = (l.update = () => {
          x.dirty && x.run();
        });
      (m.id = l.uid), Le(l, !0), m();
    },
    D = (l, f, a) => {
      f.component = l;
      const p = l.vnode.props;
      (l.vnode = f), (l.next = null), Zo(l, f.props, p, a), ei(l, f.children, a), De(), tn(l), Ue();
    },
    H = (l, f, a, p, g, _, v, b, x = !1) => {
      const m = l && l.children,
        A = l ? l.shapeFlag : 0,
        O = f.children,
        { patchFlag: T, shapeFlag: E } = f;
      if (T > 0) {
        if (T & 128) {
          xt(m, O, a, p, g, _, v, b, x);
          return;
        } else if (T & 256) {
          Me(m, O, a, p, g, _, v, b, x);
          return;
        }
      }
      E & 8 ? (A & 16 && ye(m, g, _), O !== m && h(a, O)) : A & 16 ? (E & 16 ? xt(m, O, a, p, g, _, v, b, x) : ye(m, g, _, !0)) : (A & 8 && h(a, ''), E & 16 && he(O, a, p, g, _, v, b, x));
    },
    Me = (l, f, a, p, g, _, v, b, x) => {
      (l = l || Je), (f = f || Je);
      const m = l.length,
        A = f.length,
        O = Math.min(m, A);
      let T;
      for (T = 0; T < O; T++) {
        const E = (f[T] = x ? Se(f[T]) : be(f[T]));
        R(l[T], E, a, null, g, _, v, b, x);
      }
      m > A ? ye(l, g, _, !0, !1, O) : he(f, a, p, g, _, v, b, x, O);
    },
    xt = (l, f, a, p, g, _, v, b, x) => {
      let m = 0;
      const A = f.length;
      let O = l.length - 1,
        T = A - 1;
      for (; m <= O && m <= T; ) {
        const E = l[m],
          I = (f[m] = x ? Se(f[m]) : be(f[m]));
        if (rt(E, I)) R(E, I, a, null, g, _, v, b, x);
        else break;
        m++;
      }
      for (; m <= O && m <= T; ) {
        const E = l[O],
          I = (f[T] = x ? Se(f[T]) : be(f[T]));
        if (rt(E, I)) R(E, I, a, null, g, _, v, b, x);
        else break;
        O--, T--;
      }
      if (m > O) {
        if (m <= T) {
          const E = T + 1,
            I = E < A ? f[E].el : p;
          for (; m <= T; ) R(null, (f[m] = x ? Se(f[m]) : be(f[m])), a, I, g, _, v, b, x), m++;
        }
      } else if (m > T) for (; m <= O; ) pe(l[m], g, _, !0), m++;
      else {
        const E = m,
          I = m,
          F = new Map();
        for (m = I; m <= T; m++) {
          const re = (f[m] = x ? Se(f[m]) : be(f[m]));
          re.key != null && F.set(re.key, m);
        }
        let N,
          z = 0;
        const le = T - I + 1;
        let Ke = !1,
          Ks = 0;
        const nt = new Array(le);
        for (m = 0; m < le; m++) nt[m] = 0;
        for (m = E; m <= O; m++) {
          const re = l[m];
          if (z >= le) {
            pe(re, g, _, !0);
            continue;
          }
          let ge;
          if (re.key != null) ge = F.get(re.key);
          else
            for (N = I; N <= T; N++)
              if (nt[N - I] === 0 && rt(re, f[N])) {
                ge = N;
                break;
              }
          ge === void 0 ? pe(re, g, _, !0) : ((nt[ge - I] = m + 1), ge >= Ks ? (Ks = ge) : (Ke = !0), R(re, f[ge], a, null, g, _, v, b, x), z++);
        }
        const Qs = Ke ? ri(nt) : Je;
        for (N = Qs.length - 1, m = le - 1; m >= 0; m--) {
          const re = I + m,
            ge = f[re],
            Js = re + 1 < A ? f[re + 1].el : p;
          nt[m] === 0 ? R(null, ge, a, Js, g, _, v, b, x) : Ke && (N < 0 || m !== Qs[N] ? Re(ge, a, Js, 2) : N--);
        }
      }
    },
    Re = (l, f, a, p, g = null) => {
      const { el: _, type: v, transition: b, children: x, shapeFlag: m } = l;
      if (m & 6) {
        Re(l.component.subTree, f, a, p);
        return;
      }
      if (m & 128) {
        l.suspense.move(f, a, p);
        return;
      }
      if (m & 64) {
        v.move(l, f, a, $e);
        return;
      }
      if (v === fe) {
        n(_, f, a);
        for (let O = 0; O < x.length; O++) Re(x[O], f, a, p);
        n(l.anchor, f, a);
        return;
      }
      if (v === It) {
        L(l, f, a);
        return;
      }
      if (p !== 2 && m & 1 && b)
        if (p === 0) b.beforeEnter(_), n(_, f, a), te(() => b.enter(_), g);
        else {
          const { leave: O, delayLeave: T, afterLeave: E } = b,
            I = () => n(_, f, a),
            F = () => {
              O(_, () => {
                I(), E && E();
              });
            };
          T ? T(_, I, F) : F();
        }
      else n(_, f, a);
    },
    pe = (l, f, a, p = !1, g = !1) => {
      const { type: _, props: v, ref: b, children: x, dynamicChildren: m, shapeFlag: A, patchFlag: O, dirs: T } = l;
      if ((b != null && _s(b, null, a, l, !0), A & 256)) {
        f.ctx.deactivate(l);
        return;
      }
      const E = A & 1 && T,
        I = !jt(l);
      let F;
      if ((I && (F = v && v.onVnodeBeforeUnmount) && me(F, f, l), A & 6)) yr(l.component, a, p);
      else {
        if (A & 128) {
          l.suspense.unmount(a, p);
          return;
        }
        E && Fe(l, null, f, 'beforeUnmount'), A & 64 ? l.type.remove(l, f, a, g, $e, p) : m && (_ !== fe || (O > 0 && O & 64)) ? ye(m, f, a, !1, !0) : ((_ === fe && O & 384) || (!g && A & 16)) && ye(x, f, a), p && Us(l);
      }
      ((I && (F = v && v.onVnodeUnmounted)) || E) &&
        te(() => {
          F && me(F, f, l), E && Fe(l, null, f, 'unmounted');
        }, a);
    },
    Us = (l) => {
      const { type: f, el: a, anchor: p, transition: g } = l;
      if (f === fe) {
        wr(a, p);
        return;
      }
      if (f === It) {
        W(l);
        return;
      }
      const _ = () => {
        r(a), g && !g.persisted && g.afterLeave && g.afterLeave();
      };
      if (l.shapeFlag & 1 && g && !g.persisted) {
        const { leave: v, delayLeave: b } = g,
          x = () => v(a, _);
        b ? b(l.el, _, x) : x();
      } else _();
    },
    wr = (l, f) => {
      let a;
      for (; l !== f; ) (a = C(l)), r(l), (l = a);
      r(f);
    },
    yr = (l, f, a) => {
      const { bum: p, scope: g, update: _, subTree: v, um: b } = l;
      p && ts(p),
        g.stop(),
        _ && ((_.active = !1), pe(v, l, f, a)),
        b && te(b, f),
        te(() => {
          l.isUnmounted = !0;
        }, f),
        f && f.pendingBranch && !f.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve());
    },
    ye = (l, f, a, p = !1, g = !1, _ = 0) => {
      for (let v = _; v < l.length; v++) pe(l[v], f, a, p, g);
    },
    vt = (l) => (l.shapeFlag & 6 ? vt(l.component.subTree) : l.shapeFlag & 128 ? l.suspense.next() : C(l.anchor || l.el));
  let Zt = !1;
  const $s = (l, f, a) => {
      l == null ? f._vnode && pe(f._vnode, null, null, !0) : R(f._vnode || null, l, f, null, null, null, a), Zt || ((Zt = !0), tn(), Xn(), (Zt = !1)), (f._vnode = l);
    },
    $e = { p: R, um: pe, m: Re, r: Us, mt: Yt, mc: he, pc: H, pbc: Be, n: vt, o: e };
  let Xt, qt;
  return t && ([Xt, qt] = t($e)), { render: $s, hydrate: Xt, createApp: zo($s, Xt) };
}
function is({ type: e, props: t }, s) {
  return (s === 'svg' && e === 'foreignObject') || (s === 'mathml' && e === 'annotation-xml' && t && t.encoding && t.encoding.includes('html')) ? void 0 : s;
}
function Le({ effect: e, update: t }, s) {
  e.allowRecurse = t.allowRecurse = s;
}
function ni(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function gr(e, t, s = !1) {
  const n = e.children,
    r = t.children;
  if (S(n) && S(r))
    for (let o = 0; o < n.length; o++) {
      const i = n[o];
      let c = r[o];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && ((c = r[o] = Se(r[o])), (c.el = i.el)), s || gr(i, c)), c.type === Qt && (c.el = i.el);
    }
}
function ri(e) {
  const t = e.slice(),
    s = [0];
  let n, r, o, i, c;
  const u = e.length;
  for (n = 0; n < u; n++) {
    const d = e[n];
    if (d !== 0) {
      if (((r = s[s.length - 1]), e[r] < d)) {
        (t[n] = r), s.push(n);
        continue;
      }
      for (o = 0, i = s.length - 1; o < i; ) (c = (o + i) >> 1), e[s[c]] < d ? (o = c + 1) : (i = c);
      d < e[s[o]] && (o > 0 && (t[n] = s[o - 1]), (s[o] = n));
    }
  }
  for (o = s.length, i = s[o - 1]; o-- > 0; ) (s[o] = i), (i = t[i]);
  return s;
}
function mr(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : mr(t);
}
const oi = (e) => e.__isTeleport,
  fe = Symbol.for('v-fgt'),
  Qt = Symbol.for('v-txt'),
  ht = Symbol.for('v-cmt'),
  It = Symbol.for('v-stc'),
  ft = [];
let ue = null;
function ve(e = !1) {
  ft.push((ue = e ? null : []));
}
function ii() {
  ft.pop(), (ue = ft[ft.length - 1] || null);
}
let pt = 1;
function dn(e) {
  pt += e;
}
function br(e) {
  return (e.dynamicChildren = pt > 0 ? ue || Je : null), ii(), pt > 0 && ue && ue.push(e), e;
}
function Ce(e, t, s, n, r, o) {
  return br(y(e, t, s, n, r, o, !0));
}
function li(e, t, s, n, r) {
  return br(q(e, t, s, n, r, !0));
}
function ci(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function rt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Jt = '__vInternal',
  _r = ({ key: e }) => e ?? null,
  Pt = ({ ref: e, ref_key: t, ref_for: s }) => (typeof e == 'number' && (e = '' + e), e != null ? (Q(e) || ne(e) || k(e) ? { i: xe, r: e, k: t, f: !!s } : e) : null);
function y(e, t = null, s = null, n = 0, r = null, o = e === fe ? 0 : 1, i = !1, c = !1) {
  const u = { __v_isVNode: !0, __v_skip: !0, type: e, props: t, key: t && _r(t), ref: t && Pt(t), scopeId: tr, slotScopeIds: null, children: s, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetAnchor: null, staticCount: 0, shapeFlag: o, patchFlag: n, dynamicProps: r, dynamicChildren: null, appContext: null, ctx: xe };
  return c ? (Ns(u, s), o & 128 && e.normalize(u)) : s && (u.shapeFlag |= Q(s) ? 8 : 16), pt > 0 && !i && ue && (u.patchFlag > 0 || o & 6) && u.patchFlag !== 32 && ue.push(u), u;
}
const q = fi;
function fi(e, t = null, s = null, n = 0, r = null, o = !1) {
  if (((!e || e === Ao) && (e = ht), ci(e))) {
    const c = Xe(e, t, !0);
    return s && Ns(c, s), pt > 0 && !o && ue && (c.shapeFlag & 6 ? (ue[ue.indexOf(e)] = c) : ue.push(c)), (c.patchFlag |= -2), c;
  }
  if ((xi(e) && (e = e.__vccOpts), t)) {
    t = ui(t);
    let { class: c, style: u } = t;
    c && !Q(c) && (t.class = Os(c)), U(u) && (Qn(u) && !S(u) && (u = Y({}, u)), (t.style = Ts(u)));
  }
  const i = Q(e) ? 1 : Co(e) ? 128 : oi(e) ? 64 : U(e) ? 4 : k(e) ? 2 : 0;
  return y(e, t, s, n, r, i, o, !0);
}
function ui(e) {
  return e ? (Qn(e) || Jt in e ? Y({}, e) : e) : null;
}
function Xe(e, t, s = !1) {
  const { props: n, ref: r, patchFlag: o, children: i } = e,
    c = t ? ai(n || {}, t) : n;
  return { __v_isVNode: !0, __v_skip: !0, type: e.type, props: c, key: c && _r(c), ref: t && t.ref ? (s && r ? (S(r) ? r.concat(Pt(t)) : [r, Pt(t)]) : Pt(t)) : r, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: i, target: e.target, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== fe ? (o === -1 ? 16 : o | 16) : o, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: e.transition, component: e.component, suspense: e.suspense, ssContent: e.ssContent && Xe(e.ssContent), ssFallback: e.ssFallback && Xe(e.ssFallback), el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce };
}
function Wt(e = ' ', t = 0) {
  return q(Qt, null, e, t);
}
function gt(e, t) {
  const s = q(It, null, e);
  return (s.staticCount = t), s;
}
function be(e) {
  return e == null || typeof e == 'boolean' ? q(ht) : S(e) ? q(fe, null, e.slice()) : typeof e == 'object' ? Se(e) : q(Qt, null, String(e));
}
function Se(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Xe(e);
}
function Ns(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null) t = null;
  else if (S(t)) s = 16;
  else if (typeof t == 'object')
    if (n & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Ns(e, r()), r._c && (r._d = !0));
      return;
    } else {
      s = 32;
      const r = t._;
      !r && !(Jt in t) ? (t._ctx = xe) : r === 3 && xe && (xe.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else k(t) ? ((t = { default: t, _ctx: xe }), (s = 32)) : ((t = String(t)), n & 64 ? ((s = 16), (t = [Wt(t)])) : (s = 8));
  (e.children = t), (e.shapeFlag |= s);
}
function ai(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const r in n)
      if (r === 'class') t.class !== n.class && (t.class = Os([t.class, n.class]));
      else if (r === 'style') t.style = Ts([t.style, n.style]);
      else if (Ht(r)) {
        const o = t[r],
          i = n[r];
        i && o !== i && !(S(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i);
      } else r !== '' && (t[r] = n[r]);
  }
  return t;
}
function me(e, t, s, n = null) {
  ae(e, t, 7, [s, n]);
}
const di = fr();
let hi = 0;
function pi(e, t, s) {
  const n = e.type,
    r = (t ? t.appContext : e.appContext) || di,
    o = { uid: hi++, vnode: e, type: n, parent: t, appContext: r, root: null, next: null, subTree: null, effect: null, update: null, scope: new Rr(!0), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t ? t.provides : Object.create(r.provides), accessCache: null, renderCache: [], components: null, directives: null, propsOptions: ar(n, r), emitsOptions: er(n, r), emit: null, emitted: null, propsDefaults: V, inheritAttrs: n.inheritAttrs, ctx: V, data: V, props: V, attrs: V, slots: V, refs: V, setupState: V, setupContext: null, attrsProxy: null, slotsProxy: null, suspense: s, suspenseId: s ? s.pendingId : 0, asyncDep: null, asyncResolved: !1, isMounted: !1, isUnmounted: !1, isDeactivated: !1, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return (o.ctx = { _: o }), (o.root = t ? t.root : o), (o.emit = bo.bind(null, o)), e.ce && e.ce(o), o;
}
let ee = null,
  Lt,
  xs;
{
  const e = kn(),
    t = (s, n) => {
      let r;
      return (
        (r = e[s]) || (r = e[s] = []),
        r.push(n),
        (o) => {
          r.length > 1 ? r.forEach((i) => i(o)) : r[0](o);
        }
      );
    };
  (Lt = t('__VUE_INSTANCE_SETTERS__', (s) => (ee = s))), (xs = t('__VUE_SSR_SETTERS__', (s) => (zt = s)));
}
const mt = (e) => {
    const t = ee;
    return (
      Lt(e),
      e.scope.on(),
      () => {
        e.scope.off(), Lt(t);
      }
    );
  },
  hn = () => {
    ee && ee.scope.off(), Lt(null);
  };
function xr(e) {
  return e.vnode.shapeFlag & 4;
}
let zt = !1;
function gi(e, t = !1) {
  t && xs(t);
  const { props: s, children: n } = e.vnode,
    r = xr(e);
  Yo(e, s, r, t), qo(e, n);
  const o = r ? mi(e, t) : void 0;
  return t && xs(!1), o;
}
function mi(e, t) {
  const s = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = Jn(new Proxy(e.ctx, Do)));
  const { setup: n } = s;
  if (n) {
    const r = (e.setupContext = n.length > 1 ? _i(e) : null),
      o = mt(e);
    De();
    const i = Ie(n, e, 0, [e.props, r]);
    if ((Ue(), o(), On(i))) {
      if ((i.then(hn, hn), t))
        return i
          .then((c) => {
            pn(e, c, t);
          })
          .catch((c) => {
            Ut(c, e, 0);
          });
      e.asyncDep = i;
    } else pn(e, i, t);
  } else vr(e, t);
}
function pn(e, t, s) {
  k(t) ? (e.type.__ssrInlineRender ? (e.ssrRender = t) : (e.render = t)) : U(t) && (e.setupState = Gn(t)), vr(e, s);
}
let gn;
function vr(e, t, s) {
  const n = e.type;
  if (!e.render) {
    if (!t && gn && !n.render) {
      const r = n.template || Ls(e).template;
      if (r) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config,
          { delimiters: c, compilerOptions: u } = n,
          d = Y(Y({ isCustomElement: o, delimiters: c }, i), u);
        n.render = gn(r, d);
      }
    }
    e.render = n.render || ie;
  }
  {
    const r = mt(e);
    De();
    try {
      Uo(e);
    } finally {
      Ue(), r();
    }
  }
}
function bi(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, s) {
        return se(e, 'get', '$attrs'), t[s];
      },
    }))
  );
}
function _i(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    get attrs() {
      return bi(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function Vs(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Gn(Jn(e.exposed)), {
        get(t, s) {
          if (s in t) return t[s];
          if (s in lt) return lt[s](e);
        },
        has(t, s) {
          return s in t || s in lt;
        },
      }))
    );
}
function xi(e) {
  return k(e) && '__vccOpts' in e;
}
const vi = (e, t) => ro(e, t, zt),
  wi = '3.4.19';
/**
 * @vue/runtime-dom v3.4.19
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const yi = 'http://www.w3.org/2000/svg',
  Ai = 'http://www.w3.org/1998/Math/MathML',
  je = typeof document < 'u' ? document : null,
  mn = je && je.createElement('template'),
  Ci = {
    insert: (e, t, s) => {
      t.insertBefore(e, s || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, s, n) => {
      const r = t === 'svg' ? je.createElementNS(yi, e) : t === 'mathml' ? je.createElementNS(Ai, e) : je.createElement(e, s ? { is: s } : void 0);
      return e === 'select' && n && n.multiple != null && r.setAttribute('multiple', n.multiple), r;
    },
    createText: (e) => je.createTextNode(e),
    createComment: (e) => je.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => je.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '');
    },
    insertStaticContent(e, t, s, n, r, o) {
      const i = s ? s.previousSibling : t.lastChild;
      if (r && (r === o || r.nextSibling)) for (; t.insertBefore(r.cloneNode(!0), s), !(r === o || !(r = r.nextSibling)); );
      else {
        mn.innerHTML = n === 'svg' ? `<svg>${e}</svg>` : n === 'mathml' ? `<math>${e}</math>` : e;
        const c = mn.content;
        if (n === 'svg' || n === 'mathml') {
          const u = c.firstChild;
          for (; u.firstChild; ) c.appendChild(u.firstChild);
          c.removeChild(u);
        }
        t.insertBefore(c, s);
      }
      return [i ? i.nextSibling : t.firstChild, s ? s.previousSibling : t.lastChild];
    },
  },
  Ti = Symbol('_vtc');
function Oi(e, t, s) {
  const n = e[Ti];
  n && (t = (t ? [t, ...n] : [...n]).join(' ')), t == null ? e.removeAttribute('class') : s ? e.setAttribute('class', t) : (e.className = t);
}
const bn = Symbol('_vod'),
  Ei = Symbol(''),
  Si = /(^|;)\s*display\s*:/;
function ji(e, t, s) {
  const n = e.style,
    r = Q(s),
    o = n.display;
  let i = !1;
  if (s && !r) {
    if (t && !Q(t)) for (const c in t) s[c] == null && vs(n, c, '');
    for (const c in s) c === 'display' && (i = !0), vs(n, c, s[c]);
  } else if (r) {
    if (t !== s) {
      const c = n[Ei];
      c && (s += ';' + c), (n.cssText = s), (i = Si.test(s));
    }
  } else t && e.removeAttribute('style');
  bn in e && ((e[bn] = i ? n.display : ''), (n.display = o));
}
const _n = /\s*!important$/;
function vs(e, t, s) {
  if (S(s)) s.forEach((n) => vs(e, t, n));
  else if ((s == null && (s = ''), t.startsWith('--'))) e.setProperty(t, s);
  else {
    const n = ki(e, t);
    _n.test(s) ? e.setProperty(et(n), s.replace(_n, ''), 'important') : (e[n] = s);
  }
}
const xn = ['Webkit', 'Moz', 'ms'],
  ls = {};
function ki(e, t) {
  const s = ls[t];
  if (s) return s;
  let n = Ye(t);
  if (n !== 'filter' && n in e) return (ls[t] = n);
  n = jn(n);
  for (let r = 0; r < xn.length; r++) {
    const o = xn[r] + n;
    if (o in e) return (ls[t] = o);
  }
  return t;
}
const vn = 'http://www.w3.org/1999/xlink';
function Ii(e, t, s, n, r) {
  if (n && t.startsWith('xlink:')) s == null ? e.removeAttributeNS(vn, t.slice(6, t.length)) : e.setAttributeNS(vn, t, s);
  else {
    const o = Mr(t);
    s == null || (o && !In(s)) ? e.removeAttribute(t) : e.setAttribute(t, o ? '' : s);
  }
}
function Pi(e, t, s, n, r, o, i) {
  if (t === 'innerHTML' || t === 'textContent') {
    n && i(n, r, o), (e[t] = s ?? '');
    return;
  }
  const c = e.tagName;
  if (t === 'value' && c !== 'PROGRESS' && !c.includes('-')) {
    e._value = s;
    const d = c === 'OPTION' ? e.getAttribute('value') : e.value,
      h = s ?? '';
    d !== h && (e.value = h), s == null && e.removeAttribute(t);
    return;
  }
  let u = !1;
  if (s === '' || s == null) {
    const d = typeof e[t];
    d === 'boolean' ? (s = In(s)) : s == null && d === 'string' ? ((s = ''), (u = !0)) : d === 'number' && ((s = 0), (u = !0));
  }
  try {
    e[t] = s;
  } catch {}
  u && e.removeAttribute(t);
}
function Bi(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function Mi(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const wn = Symbol('_vei');
function Ri(e, t, s, n, r = null) {
  const o = e[wn] || (e[wn] = {}),
    i = o[t];
  if (n && i) i.value = n;
  else {
    const [c, u] = Fi(t);
    if (n) {
      const d = (o[t] = Ni(n, r));
      Bi(e, c, d, u);
    } else i && (Mi(e, c, i, u), (o[t] = void 0));
  }
}
const yn = /(?:Once|Passive|Capture)$/;
function Fi(e) {
  let t;
  if (yn.test(e)) {
    t = {};
    let n;
    for (; (n = e.match(yn)); ) (e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0);
  }
  return [e[2] === ':' ? e.slice(3) : et(e.slice(2)), t];
}
let cs = 0;
const Li = Promise.resolve(),
  Hi = () => cs || (Li.then(() => (cs = 0)), (cs = Date.now()));
function Ni(e, t) {
  const s = (n) => {
    if (!n._vts) n._vts = Date.now();
    else if (n._vts <= s.attached) return;
    ae(Vi(n, s.value), t, 5, [n]);
  };
  return (s.value = e), (s.attached = Hi()), s;
}
function Vi(e, t) {
  if (S(t)) {
    const s = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        s.call(e), (e._stopped = !0);
      }),
      t.map((n) => (r) => !r._stopped && n && n(r))
    );
  } else return t;
}
const An = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123,
  Di = (e, t, s, n, r, o, i, c, u) => {
    const d = r === 'svg';
    t === 'class' ? Oi(e, n, d) : t === 'style' ? ji(e, s, n) : Ht(t) ? ys(t) || Ri(e, t, s, n, i) : (t[0] === '.' ? ((t = t.slice(1)), !0) : t[0] === '^' ? ((t = t.slice(1)), !1) : Ui(e, t, n, d)) ? Pi(e, t, n, o, i, c, u) : (t === 'true-value' ? (e._trueValue = n) : t === 'false-value' && (e._falseValue = n), Ii(e, t, n, d));
  };
function Ui(e, t, s, n) {
  if (n) return !!(t === 'innerHTML' || t === 'textContent' || (t in e && An(t) && k(s)));
  if (t === 'spellcheck' || t === 'draggable' || t === 'translate' || t === 'form' || (t === 'list' && e.tagName === 'INPUT') || (t === 'type' && e.tagName === 'TEXTAREA')) return !1;
  if (t === 'width' || t === 'height') {
    const r = e.tagName;
    if (r === 'IMG' || r === 'VIDEO' || r === 'CANVAS' || r === 'SOURCE') return !1;
  }
  return An(t) && Q(s) ? !1 : t in e;
}
const $i = Y({ patchProp: Di }, Ci);
let Cn;
function Ki() {
  return Cn || (Cn = ti($i));
}
const Qi = (...e) => {
  const t = Ki().createApp(...e),
    { mount: s } = t;
  return (
    (t.mount = (n) => {
      const r = Wi(n);
      if (!r) return;
      const o = t._component;
      !k(o) && !o.render && !o.template && (o.template = r.innerHTML), (r.innerHTML = '');
      const i = s(r, !1, Ji(r));
      return r instanceof Element && (r.removeAttribute('v-cloak'), r.setAttribute('data-v-app', '')), i;
    }),
    t
  );
};
function Ji(e) {
  if (e instanceof SVGElement) return 'svg';
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement) return 'mathml';
}
function Wi(e) {
  return Q(e) ? document.querySelector(e) : e;
}
const zi = 'vue-assets/assets/section-pic1.png',
  Gi = { class: 'flex sm:flex-row flex-col min-h-screen' },
  Yi = { class: 'xl:w-1/2 w-full flex flex-col justify-center text-left sm:px-20 px-10 my- my-10 sm:my-0' },
  Zi = { class: 'font-medium text-3xl font-sofia mb-4' },
  Xi = { class: 'text-nav-text-green' },
  qi = { class: 'font-inter' },
  el = { class: 'mb-2' },
  tl = { class: 'text-nav-text-green font-medium mb-2' },
  sl = { class: 'mb-4' },
  nl = y('div', { class: 'xl:w-1/2 w-full sm:block' }, [y('img', { class: 'w-full h-full object-cover', src: zi, alt: 'Bikepicture' })], -1),
  rl = {
    __name: 'AppTextAndPictureSection',
    props: { entry: { type: Object, required: !0 } },
    setup(e) {
      const t = e,
        s = () => {
          window.location.href = 'https://arthurdepuydt.be/atelier4/web/assortiment';
        };
      return (n, r) => (ve(), Ce('div', Gi, [y('div', Yi, [y('div', Zi, [y('p', Xi, wt(t.entry.title), 1)]), y('div', qi, [y('p', el, wt(t.entry.SectionOne), 1), y('p', tl, wt(t.entry.tussenTitel), 1), y('p', sl, wt(t.entry.SectionTwo), 1), y('button', { class: 'bg-nav-text-green text-primary-white font-regular py-2 px-4 rounded-1px font-sofia border border-white hover:border-nav-text-green transition-colors duration-400 delay-50 hover:bg-primary-white hover:text-nav-text-green', onClick: s }, 'Bezoek ons aanbod')])]), nl]));
    },
  },
  ol = 'vue-assets/assets/section-pic2.png',
  tt = (e, t) => {
    const s = e.__vccOpts || e;
    for (const [n, r] of t) s[n] = r;
    return s;
  },
  il = {
    methods: {
      navigateToBrochure() {
        window.location.href = 'https://arthurdepuydt.be/atelier4/web/brochure';
      },
    },
  },
  ll = { class: 'flex sm:flex-row-reverse flex-col min-h-screen' },
  cl = { class: 'xl:w-1/2 w-full flex flex-col justify-center text-left sm:px-16 md:px-20 px-10 my- my-10 sm:my-0' },
  fl = y('div', { class: 'font-medium text-3xl font-sofia mb-4' }, [y('p', null, 'Vraag onze gratis'), y('p', null, [y('span', { class: 'text-nav-text-green' }, 'brochure'), Wt(' aan')])], -1),
  ul = { class: 'font-inter' },
  al = y('p', { class: 'mb-4' }, 'Vraag hier onze gratis brochure aan en lees meer over onze unieke dienst, servicepakketten en prijzen. Wil je ook genieten van 1 jaar gratis onderhoud en pechverhelping? Ontdek het snel…', -1),
  dl = y('div', { class: 'xl:w-1/2 w-full sm:block' }, [y('img', { class: 'w-full h-full object-cover', src: ol, alt: 'Bikepicture' })], -1);
function hl(e, t, s, n, r, o) {
  return ve(), Ce('div', ll, [y('div', cl, [fl, y('div', ul, [al, y('button', { class: 'bg-nav-text-green text-primary-white font-regular py-2 px-4 rounded-1px font-sofia border border-white hover:border-nav-text-green transition-colors duration-400 delay-50 hover:bg-primary-white hover:text-nav-text-green', onClick: t[0] || (t[0] = (...i) => o.navigateToBrochure && o.navigateToBrochure(...i)) }, 'Vraag de brochure aan')])]), dl]);
}
const pl = tt(il, [['render', hl]]),
  gl = 'vue-assets/assets/icon-home-bol.png',
  ml = 'vue-assets/assets/icon-gear-bol.png',
  bl =
    'data:image/png;base64,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',
  _l = 'vue-assets/assets/icon-clock-bol.png',
  xl = {},
  vl = { class: 'py-20 bg-unieke-services flex flex-col justify-center mb-10 lg:mb-20' },
  wl = gt('<h2 class="text-center text-nav-text-green font-bold text-4xl font-inter mb-14">Onze unieke services</h2><div class="flex gap-16 justify-center flex-wrap"><div class="flex flex-col items-center"><img class="w-24 mb-6" src="' + gl + '" alt="home"><p class="text-nav-text-green w-56 text-lg text-center">Wij bieden een proefrit aan huis aan</p></div><div class="flex flex-col items-center"><img class="w-24 mb-6" src="' + ml + '" alt="gear"><p class="text-nav-text-green w-52 text-lg text-center">Iets mis met je fiets? wij bieden service op locatie aan</p></div><div class="flex flex-col items-center"><img class="w-24 mb-6" src="' + bl + '" alt="garantie"><p class="text-nav-text-green w-56 text-lg text-center">Je kan tot 5 jaar garantie krijgen</p></div><div class="flex flex-col items-center"><img class="w-24 mb-6" src="' + _l + '" alt="clock"><p class="text-nav-text-green w-56 text-lg text-center">Onze levertijd is 5 dagen</p></div></div>', 2),
  yl = [wl];
function Al(e, t) {
  return ve(), Ce('div', vl, yl);
}
const Cl = tt(xl, [['render', Al]]),
  Tl = 'vue-assets/assets/pexels-team-evelo.png',
  Ol = {
    methods: {
      navigateToOnsVerhaal() {
        window.location.href = 'https://arthurdepuydt.be/atelier4/web/verhaal';
      },
    },
  },
  El = { class: 'flex sm:flex-row-reverse flex-col-reverse min-h-screen mb-10 lg:mb-20' },
  Sl = y('div', { class: 'xl:w-1/2 w-full sm:block' }, [y('img', { class: 'w-full h-full object-cover', src: Tl, alt: 'Bikepicture' })], -1),
  jl = { class: 'xl:w-1/2 w-full flex flex-col justify-center text-left text-primary-white sm:px-16 md:px-20 px-10 py-10 sm:py-0 bg-nav-text-green' },
  kl = y('div', { class: 'font-medium text-3xl font-sofia mb-8' }, [y('p', null, 'Ons unieke verhaal')], -1),
  Il = { class: 'font-inter' },
  Pl = y('p', { class: 'mb-8' }, 'Een elektrische fiets van Bikestore, dat is vooral heel veel service Ook na je aankoop kan je rekenen op de service die je geniet zoals bij een lokale fietsenwinkel. En zelfs meer. Met onze mobiele servicewagens bieden we all-inservice aan huis voor levering, onderhoud, herstelling en pechverhelping. Jij hoeft dus alleen maar zorgeloos te genieten en te trappen. Want ja, ook met een elektrische fiets moet je blijven trappen.', -1);
function Bl(e, t, s, n, r, o) {
  return ve(), Ce('div', El, [Sl, y('div', jl, [kl, y('div', Il, [Pl, y('button', { class: 'bg-nav-text-green text-primary-white font-regular py-2 px-4 rounded-1px font-sofia border border-white transition-colors duration-400 delay-50 hover:bg-primary-white hover:text-nav-text-green', onClick: t[0] || (t[0] = (...i) => o.navigateToOnsVerhaal && o.navigateToOnsVerhaal(...i)) }, 'Over bikestore')])])]);
}
const Ml = tt(Ol, [['render', Bl]]),
  Rl = 'vue-assets/assets/herofiets.png',
  Fl = {
    methods: {
      navigateToAssortiment() {
        window.location.href = 'https://arthurdepuydt.be/atelier4/web/assortiment';
      },
    },
  },
  Ll = { class: 'lg:h-824 sm:h-476 flex lg:relative bg-nav-text-green lg:bg-white z-0' },
  Hl = y('div', { class: 'hidden lg:block lg:w-2/5 bg-primary-white' }, [y('img', { class: 'bike-image absolute left-min20rem xl:left-min15rem top-1/2 transform -translate-y-1/2 w-70p', src: Rl, alt: 'Bikepicture' })], -1),
  Nl = { class: 'w-full lg:w-3/5 bg-nav-text-green flex justify-center' },
  Vl = { class: 'flex justify-end items-center md:h-full' },
  Dl = { class: 'xl:w-4/5 w-full flex flex-col text-left text-primary-white sm:px-16 md:px-20 px-6 my-10 sm:my-0 bg-nav-text-green' },
  Ul = y('div', { class: 'font-black text-5xl md:text-7xl font-inter mb-8' }, [y('p', null, 'Welkom bij'), y('p', null, [Wt('Bike'), y('span', { class: 'text-title-accent' }, 'Store')])], -1),
  $l = { class: 'font-inter' },
  Kl = y('p', { class: 'mb-8' }, 'Ontdek jouw droomfiets met een gratis testrit bij ons! Of je nu door de stad wilt cruisen of de paden wilt verkennen, wij hebben de perfecte fiets voor jou. Ervaar het plezier van het rijden op een fiets die bij jou past. Boek nu jouw testrit en begin aan jouw fietsavontuur!', -1);
function Ql(e, t, s, n, r, o) {
  return ve(), Ce('div', Ll, [Hl, y('div', Nl, [y('div', Vl, [y('div', Dl, [Ul, y('div', $l, [Kl, y('button', { class: 'bg-nav-text-green text-primary-white font-regular py-2 px-4 rounded-1px font-inter border border-white transition-colors duration-400 delay-50 hover:bg-primary-white hover:text-nav-text-green', onClick: t[0] || (t[0] = (...i) => o.navigateToAssortiment && o.navigateToAssortiment(...i)) }, 'Bekijk ons assortiment')])])])])]);
}
const Jl = tt(Fl, [['render', Ql]]),
  Wl = 'vue-assets/assets/bike-orange.png',
  zl = 'vue-assets/assets/bike-light.png',
  Gl = 'vue-assets/assets/bike-dark.png',
  Yl = {
    methods: {
      navigateToAssortiment() {
        window.location.href = 'https://arthurdepuydt.be/atelier4/web/assortiment';
      },
    },
  },
  Zl = { class: 'max-w-screen-xl mx-auto lg:px-0 px-10 mt-10' },
  Xl = { class: 'grid lg:grid-cols-12 md:grid-cols-12 grid-cols-12-2 gap-4 justify-items-center' },
  ql = gt('<img src="' + Wl + '" alt="logo" class="lg:w-250p md:w-250p sm:w-100p w-100p h-auto"><h2 class="text-bike-color-dark-grey mt-3 font-semibold text-h2">Cortina-e</h2><h4 class="text-bike-color-dark-grey mb-3 mt-min5px">Cortina</h4><div class="flex mb-2"><span class="block h-2 w-5 bg-bike-color-grey mr-2"></span><span class="block h-2 w-5 bg-bike-color-orange mr-2"></span><span class="block h-2 w-5 bg-bike-color-blue mr-2"></span><span class="block h-2 w-5 bg-bike-color-dark-grey mr-2"></span></div><h3 class="font-bold">€1699</h3>', 5),
  ec = [ql],
  tc = gt('<img src="' + zl + '" alt="logo" class="lg:w-250p md:w-250p sm:w-100p w-100p h-auto"><h2 class="text-bike-color-dark-grey mt-3 font-semibold text-h2">Triple-x</h2><h3 class="text-bike-color-dark-grey mb-3 mt-min5px">Triple</h3><div class="flex mb-2"><span class="block h-2 w-5 bg-black mr-2"></span><span class="block h-2 w-5 bg-bike-color-dark-grey mr-2"></span></div><h3 class="font-bold">€1899</h3>', 5),
  sc = [tc],
  nc = gt('<img src="' + Gl + '" alt="logo" class="lg:w-250p md:w-250p sm:w-100p w-100p h-auto"><h2 class="text-bike-color-dark-grey mt-3 font-semibold text-h2">Cube Kathamandu</h2><h3 class="text-bike-color-dark-grey mb-3 mt-min5px">Cube</h3><div class="flex mb-2"><span class="block h-2 w-5 bg-bike-color-dark-grey mr-2"></span><span class="block h-2 w-5 bg-bike-color-light-grey mr-2"></span></div><h3 class="font-bold">€1699</h3>', 5),
  rc = [nc];
function oc(e, t, s, n, r, o) {
  return ve(), Ce('div', Zl, [y('div', Xl, [y('div', { class: 'md:col-span-6 lg:col-span-4 col-span-8 mx-auto sm:mb-4 mb-4 cursor-pointer', onClick: t[0] || (t[0] = (...i) => o.navigateToAssortiment && o.navigateToAssortiment(...i)) }, ec), y('div', { class: 'md:col-span-6 lg:col-span-4 col-span-8 mx-auto sm:mb-4 mb-4 cursor-pointer', onClick: t[1] || (t[1] = (...i) => o.navigateToAssortiment && o.navigateToAssortiment(...i)) }, sc), y('div', { class: 'md:col-span-6 lg:col-span-4 col-span-8 mx-auto sm:mb-4 mb-4 cursor-pointer', onClick: t[2] || (t[2] = (...i) => o.navigateToAssortiment && o.navigateToAssortiment(...i)) }, rc)])]);
}
const ic = tt(Yl, [['render', oc]]),
  lc = 'vue-assets/assets/blogitem1.svg',
  cc = 'vue-assets/assets/blogitem3.svg',
  fc = 'vue-assets/assets/blogitem4.svg',
  uc = 'vue-assets/assets/blogitem2.svg',
  ac = {
    methods: {
      navigateToBlog() {
        window.location.href = 'https://arthurdepuydt.be/atelier4/web/blog';
      },
    },
  },
  dc = y('h2', { class: 'text-center text-nav-text-green font-bold text-4xl font-inter mb-14' }, 'Blog', -1),
  hc = { class: 'max-w-screen-xl mx-auto mb-20' },
  pc = { class: 'grid grid-cols-1 sm:grid-cols-5 sm:grid-rows-5 gap-2 h-screen' },
  gc = y('img', { src: lc, class: 'w-full h-full object-cover', alt: 'blogitem1' }, null, -1),
  mc = y('div', { class: 'absolute bottom-0 left-0 w-full bg-nav-text-green p-3 transition duration-400 delay-50' }, [y('p', { class: 'text-white font-sofia font-medium text-lg' }, 'Ontdek de Hottest Bike Trends van het Seizoen!'), y('p', { class: 'text-white hidden lg:group-hover:block font-inter font-extralight text-sm pb-4' }, 'Ontdek de heetste fiets trends van het seizoen! Van elektrische fietsen tot gravelbikes, wij brengen je de nieuwste innovaties en stijlen. Of je nu avontuurlijk bent of gewoon op zoek naar stijlvolle opties voor je dagelijkse ritten, wij hebben alles wat je nodig hebt om in stijl te fietsen.')], -1),
  bc = [gc, mc],
  _c = gt('<div class="w-full h-full sm:col-span-2 sm:row-span-2 bg-yellow-500 relative group overflow-hidden cursor-pointer"><img src="' + cc + '" class="w-full h-full object-cover" alt="blogitem3"><div class="absolute bottom-0 left-0 w-full bg-nav-text-green p-3 transition duration-400 delay-50"><p class="text-white font-sofia font-medium text-lg">Ontdek de Hottest Bike Trends van het Seizoen!</p><p class="text-white hidden lg:group-hover:block font-inter font-extralight text-sm pb-4">Ontdek de heetste fiets trends van het seizoen! Van elektrische fietsen tot gravelbikes, wij brengen je de nieuwste innovaties en stijlen.</p></div></div>', 1),
  xc = y('img', { src: fc, class: 'w-full h-full object-cover', alt: 'blogitem4' }, null, -1),
  vc = y('div', { class: 'absolute bottom-0 left-0 w-full bg-nav-text-green p-3 transition duration-400 delay-50' }, [y('p', { class: 'text-white font-sofia font-medium text-lg' }, 'Ontdek de Beste Off-Road Routes!'), y('p', { class: 'text-white hidden lg:group-hover:block font-inter font-extralight text-sm pb-4' }, 'Ontdek de heetste fiets trends van het seizoen! Van elektrische fietsen tot gravelbikes, wij brengen je de nieuwste innovaties en stijlen.')], -1),
  wc = [xc, vc],
  yc = y('img', { src: uc, class: 'w-full h-full object-cover', alt: 'blogitem2' }, null, -1),
  Ac = y('div', { class: 'absolute bottom-0 left-0 w-full bg-nav-text-green p-3 transition duration-400 delay-50' }, [y('p', { class: 'text-white font-sofia font-medium text-lg' }, 'Ontdek de Beste Off-Road Routes!'), y('p', { class: 'text-white hidden lg:group-hover:block font-inter font-extralight text-sm pb-4' }, 'Ontdek de heetste fiets trends van het seizoen! Van elektrische fietsen tot gravelbikes, wij brengen je de nieuwste innovaties en stijlen.')], -1),
  Cc = [yc, Ac];
function Tc(e, t, s, n, r, o) {
  return ve(), Ce(fe, null, [dc, y('div', hc, [y('div', pc, [y('div', { class: 'w-full h-full sm:col-span-3 sm:row-span-3 bg-blue-500 relative group overflow-hidden cursor-pointer', onClick: t[0] || (t[0] = (...i) => o.navigateToBlog && o.navigateToBlog(...i)) }, bc), _c, y('div', { class: 'w-full h-full sm:col-span-2 sm:row-span-3 bg-red-500 relative group overflow-hidden cursor-pointer', onClick: t[1] || (t[1] = (...i) => o.navigateToBlog && o.navigateToBlog(...i)) }, wc), y('div', { class: 'w-full h-full sm:col-span-3 sm:row-span-2 bg-green-500 relative group overflow-hidden cursor-pointer', onClick: t[2] || (t[2] = (...i) => o.navigateToBlog && o.navigateToBlog(...i)) }, Cc)])])], 64);
}
const Oc = tt(ac, [['render', Tc]]),
  Ec = { class: 'bg-primary-white' },
  Sc = y('h2', { class: 'text-center text-nav-text-green font-bold text-4xl font-inter mb-10' }, [Wt('Nieuwe '), y('span', { class: 'text-black' }, 'fietsen')], -1),
  jc = y('div', { class: 'flex justify-center' }, [y('a', { href: 'https://arthurdepuydt.be/atelier4/web/assortiment' }, [y('button', { class: 'bg-nav-text-green text-primary-white font-regular py-2 px-4 rounded-1px font-sofia border border-white hover:border-nav-text-green transition-colors duration-400 delay-50 hover:bg-primary-white hover:text-nav-text-green mt-10' }, 'Bekijk ons aanbod')])], -1),
  kc = y('div', { class: 'mb-10 lg:mb-20' }, null, -1),
  Ic = y('div', { class: 'mb-10 lg:mb-20' }, null, -1),
  Pc = {
    __name: 'App',
    setup(e) {
      const t = oo([]);
      return (
        ir(async () => {
          try {
            const s = await fetch('http://localhost/2023-2024-atelier4-bs-groep4/bikestore/web/blogEntries.json');
            if (s.ok) {
              const n = await s.json();
              (t.value = n.data), console.log(t);
            } else console.log('Response not OK');
          } catch (s) {
            console.error(s);
          }
        }),
        (s, n) => (
          ve(),
          Ce('div', Ec, [
            q(Jl),
            q(Cl),
            Sc,
            q(ic),
            jc,
            kc,
            (ve(!0),
            Ce(
              fe,
              null,
              Vo(t.value, (r, o) => (ve(), li(rl, { key: o, entry: r }, null, 8, ['entry']))),
              128
            )),
            q(pl),
            q(Ml),
            q(Oc),
            Ic,
          ])
        )
      );
    },
  },
  Bc = Qi(Pc);
Bc.mount('#app');
