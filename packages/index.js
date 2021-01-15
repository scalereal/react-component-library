'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ReactDOM = require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** @license React v17.0.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b=60103,c=60106,d=60107,e=60108,f=60114,g=60109,h=60110,k=60112,l=60113,m=60120,n=60115,p=60116,q=60121,r=60122,u=60117,v=60129,w=60131;
if("function"===typeof Symbol&&Symbol.for){var x=Symbol.for;b=x("react.element");c=x("react.portal");d=x("react.fragment");e=x("react.strict_mode");f=x("react.profiler");g=x("react.provider");h=x("react.context");k=x("react.forward_ref");l=x("react.suspense");m=x("react.suspense_list");n=x("react.memo");p=x("react.lazy");q=x("react.block");r=x("react.server.block");u=x("react.fundamental");v=x("react.debug_trace_mode");w=x("react.legacy_hidden");}
function y(a){if("object"===typeof a&&null!==a){var t=a.$$typeof;switch(t){case b:switch(a=a.type,a){case d:case f:case e:case l:case m:return a;default:switch(a=a&&a.$$typeof,a){case h:case k:case p:case n:case g:return a;default:return t}}case c:return t}}}var z=g,A=b,B=k,C=d,D=p,E=n,F=c,G=f,H=e,I=l;var ContextConsumer=h;var ContextProvider=z;var Element$1=A;var ForwardRef=B;var Fragment=C;var Lazy=D;var Memo=E;var Portal=F;var Profiler=G;var StrictMode=H;
var Suspense=I;var isAsyncMode=function(){return !1};var isConcurrentMode=function(){return !1};var isContextConsumer=function(a){return y(a)===h};var isContextProvider=function(a){return y(a)===g};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===b};var isForwardRef=function(a){return y(a)===k};var isFragment=function(a){return y(a)===d};var isLazy=function(a){return y(a)===p};var isMemo=function(a){return y(a)===n};
var isPortal=function(a){return y(a)===c};var isProfiler=function(a){return y(a)===f};var isStrictMode=function(a){return y(a)===e};var isSuspense=function(a){return y(a)===l};var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===d||a===f||a===v||a===e||a===l||a===m||a===w||"object"===typeof a&&null!==a&&(a.$$typeof===p||a.$$typeof===n||a.$$typeof===g||a.$$typeof===h||a.$$typeof===k||a.$$typeof===u||a.$$typeof===q||a[0]===r)?!0:!1};
var typeOf=y;

var reactIs_production_min = {
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element$1,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {

if (process.env.NODE_ENV !== "production") {
  (function() {

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  symbolFor('react.scope');
  symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false;
var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isConcurrentMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});
var reactIs_development_1 = reactIs_development.ContextConsumer;
var reactIs_development_2 = reactIs_development.ContextProvider;
var reactIs_development_3 = reactIs_development.Element;
var reactIs_development_4 = reactIs_development.ForwardRef;
var reactIs_development_5 = reactIs_development.Fragment;
var reactIs_development_6 = reactIs_development.Lazy;
var reactIs_development_7 = reactIs_development.Memo;
var reactIs_development_8 = reactIs_development.Portal;
var reactIs_development_9 = reactIs_development.Profiler;
var reactIs_development_10 = reactIs_development.StrictMode;
var reactIs_development_11 = reactIs_development.Suspense;
var reactIs_development_12 = reactIs_development.isAsyncMode;
var reactIs_development_13 = reactIs_development.isConcurrentMode;
var reactIs_development_14 = reactIs_development.isContextConsumer;
var reactIs_development_15 = reactIs_development.isContextProvider;
var reactIs_development_16 = reactIs_development.isElement;
var reactIs_development_17 = reactIs_development.isForwardRef;
var reactIs_development_18 = reactIs_development.isFragment;
var reactIs_development_19 = reactIs_development.isLazy;
var reactIs_development_20 = reactIs_development.isMemo;
var reactIs_development_21 = reactIs_development.isPortal;
var reactIs_development_22 = reactIs_development.isProfiler;
var reactIs_development_23 = reactIs_development.isStrictMode;
var reactIs_development_24 = reactIs_development.isSuspense;
var reactIs_development_25 = reactIs_development.isValidElementType;
var reactIs_development_26 = reactIs_development.typeOf;

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});
var reactIs_1 = reactIs.typeOf;
var reactIs_2 = reactIs.isElement;
var reactIs_3 = reactIs.isValidElementType;
var reactIs_4 = reactIs.ForwardRef;

function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = memoize(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$1="function"===typeof Symbol&&Symbol.for,c$1=b$1?Symbol.for("react.element"):60103,d$1=b$1?Symbol.for("react.portal"):60106,e$1=b$1?Symbol.for("react.fragment"):60107,f$1=b$1?Symbol.for("react.strict_mode"):60108,g$1=b$1?Symbol.for("react.profiler"):60114,h$1=b$1?Symbol.for("react.provider"):60109,k$1=b$1?Symbol.for("react.context"):60110,l$1=b$1?Symbol.for("react.async_mode"):60111,m$1=b$1?Symbol.for("react.concurrent_mode"):60111,n$1=b$1?Symbol.for("react.forward_ref"):60112,p$1=b$1?Symbol.for("react.suspense"):60113,q$1=b$1?
Symbol.for("react.suspense_list"):60120,r$1=b$1?Symbol.for("react.memo"):60115,t=b$1?Symbol.for("react.lazy"):60116,v$1=b$1?Symbol.for("react.block"):60121,w$1=b$1?Symbol.for("react.fundamental"):60117,x$1=b$1?Symbol.for("react.responder"):60118,y$1=b$1?Symbol.for("react.scope"):60119;
function z$1(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c$1:switch(a=a.type,a){case l$1:case m$1:case e$1:case g$1:case f$1:case p$1:return a;default:switch(a=a&&a.$$typeof,a){case k$1:case n$1:case t:case r$1:case h$1:return a;default:return u}}case d$1:return u}}}function A$1(a){return z$1(a)===m$1}var AsyncMode=l$1;var ConcurrentMode=m$1;var ContextConsumer$1=k$1;var ContextProvider$1=h$1;var Element$2=c$1;var ForwardRef$1=n$1;var Fragment$1=e$1;var Lazy$1=t;var Memo$1=r$1;var Portal$1=d$1;
var Profiler$1=g$1;var StrictMode$1=f$1;var Suspense$1=p$1;var isAsyncMode$1=function(a){return A$1(a)||z$1(a)===l$1};var isConcurrentMode$1=A$1;var isContextConsumer$1=function(a){return z$1(a)===k$1};var isContextProvider$1=function(a){return z$1(a)===h$1};var isElement$1=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c$1};var isForwardRef$1=function(a){return z$1(a)===n$1};var isFragment$1=function(a){return z$1(a)===e$1};var isLazy$1=function(a){return z$1(a)===t};
var isMemo$1=function(a){return z$1(a)===r$1};var isPortal$1=function(a){return z$1(a)===d$1};var isProfiler$1=function(a){return z$1(a)===g$1};var isStrictMode$1=function(a){return z$1(a)===f$1};var isSuspense$1=function(a){return z$1(a)===p$1};
var isValidElementType$1=function(a){return "string"===typeof a||"function"===typeof a||a===e$1||a===m$1||a===g$1||a===f$1||a===p$1||a===q$1||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r$1||a.$$typeof===h$1||a.$$typeof===k$1||a.$$typeof===n$1||a.$$typeof===w$1||a.$$typeof===x$1||a.$$typeof===y$1||a.$$typeof===v$1)};var typeOf$1=z$1;

var reactIs_production_min$1 = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer$1,
	ContextProvider: ContextProvider$1,
	Element: Element$2,
	ForwardRef: ForwardRef$1,
	Fragment: Fragment$1,
	Lazy: Lazy$1,
	Memo: Memo$1,
	Portal: Portal$1,
	Profiler: Profiler$1,
	StrictMode: StrictMode$1,
	Suspense: Suspense$1,
	isAsyncMode: isAsyncMode$1,
	isConcurrentMode: isConcurrentMode$1,
	isContextConsumer: isContextConsumer$1,
	isContextProvider: isContextProvider$1,
	isElement: isElement$1,
	isForwardRef: isForwardRef$1,
	isFragment: isFragment$1,
	isLazy: isLazy$1,
	isMemo: isMemo$1,
	isPortal: isPortal$1,
	isProfiler: isProfiler$1,
	isStrictMode: isStrictMode$1,
	isSuspense: isSuspense$1,
	isValidElementType: isValidElementType$1,
	typeOf: typeOf$1
};

var reactIs_development$1 = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});
var reactIs_development_1$1 = reactIs_development$1.AsyncMode;
var reactIs_development_2$1 = reactIs_development$1.ConcurrentMode;
var reactIs_development_3$1 = reactIs_development$1.ContextConsumer;
var reactIs_development_4$1 = reactIs_development$1.ContextProvider;
var reactIs_development_5$1 = reactIs_development$1.Element;
var reactIs_development_6$1 = reactIs_development$1.ForwardRef;
var reactIs_development_7$1 = reactIs_development$1.Fragment;
var reactIs_development_8$1 = reactIs_development$1.Lazy;
var reactIs_development_9$1 = reactIs_development$1.Memo;
var reactIs_development_10$1 = reactIs_development$1.Portal;
var reactIs_development_11$1 = reactIs_development$1.Profiler;
var reactIs_development_12$1 = reactIs_development$1.StrictMode;
var reactIs_development_13$1 = reactIs_development$1.Suspense;
var reactIs_development_14$1 = reactIs_development$1.isAsyncMode;
var reactIs_development_15$1 = reactIs_development$1.isConcurrentMode;
var reactIs_development_16$1 = reactIs_development$1.isContextConsumer;
var reactIs_development_17$1 = reactIs_development$1.isContextProvider;
var reactIs_development_18$1 = reactIs_development$1.isElement;
var reactIs_development_19$1 = reactIs_development$1.isForwardRef;
var reactIs_development_20$1 = reactIs_development$1.isFragment;
var reactIs_development_21$1 = reactIs_development$1.isLazy;
var reactIs_development_22$1 = reactIs_development$1.isMemo;
var reactIs_development_23$1 = reactIs_development$1.isPortal;
var reactIs_development_24$1 = reactIs_development$1.isProfiler;
var reactIs_development_25$1 = reactIs_development$1.isStrictMode;
var reactIs_development_26$1 = reactIs_development$1.isSuspense;
var reactIs_development_27 = reactIs_development$1.isValidElementType;
var reactIs_development_28 = reactIs_development$1.typeOf;

var reactIs$1 = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min$1;
} else {
  module.exports = reactIs_development$1;
}
});

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs$1.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs$1.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs$1.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

var hoistNonReactStatics_cjs = hoistNonReactStatics;

function v$2(){return (v$2=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);}return e}).apply(this,arguments)}var y$2=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},g$2=function(t){return null!==t&&"object"==typeof t&&"[object Object]"===(t.toString?t.toString():Object.prototype.toString.call(t))&&!reactIs_1(t)},S=Object.freeze([]),w$2=Object.freeze({});function E$1(e){return "function"==typeof e}function b$2(e){return "production"!==process.env.NODE_ENV&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function N(e){return e&&"string"==typeof e.styledComponentId}var _="undefined"!=typeof process&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",A$2="undefined"!=typeof window&&"HTMLElement"in window,I$1=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!==process.env.NODE_ENV),O="production"!==process.env.NODE_ENV?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"}:{};function R(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach((function(t){e=e.replace(/%[a-z]/,t);})),e}function D$1(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw "production"===process.env.NODE_ENV?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):"")):new Error(R.apply(void 0,[O[e]].concat(n)).trim())}var j=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e;}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&D$1(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0;}for(var i=this.indexOfGroup(e+1),a=0,c=t.length;a<c;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++);},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n);}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,s=r;s<o;s++)t+=this.tag.getRule(s)+"/*!sc*/\n";return t},e}(),T=new Map,x$2=new Map,k$2=1,V=function(e){if(T.has(e))return T.get(e);for(;x$2.has(k$2);)k$2++;var t=k$2++;return "production"!==process.env.NODE_ENV&&((0|t)<0||t>1<<30)&&D$1(16,""+t),T.set(e,t),x$2.set(t,e),t},M=function(e){return x$2.get(e)},B$1=function(e,t){T.set(e,t),x$2.set(t,e);},z$2="style["+_+'][data-styled-version="5.2.1"]',L=new RegExp("^"+_+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),G$1=function(e,t,n){for(var r,o=n.split(","),s=0,i=o.length;s<i;s++)(r=o[s])&&e.registerName(t,r);},F$1=function(e,t){for(var n=t.innerHTML.split("/*!sc*/\n"),r=[],o=0,s=n.length;o<s;o++){var i=n[o].trim();if(i){var a=i.match(L);if(a){var c=0|parseInt(a[1],10),u=a[2];0!==c&&(B$1(u,c),G$1(e,u,a[3]),e.getTag().insertRules(c,r)),r.length=0;}else r.push(i);}}},Y=function(){return "undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null},q$2=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(_))return r}}(n),s=void 0!==o?o.nextSibling:null;r.setAttribute(_,"active"),r.setAttribute("data-styled-version","5.2.1");var i=Y();return i&&r.setAttribute("nonce",i),n.insertBefore(r,s),r},H$1=function(){function e(e){var t=this.element=q$2(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}D$1(17);}(t),this.length=0;}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return !1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--;},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),$=function(){function e(e){var t=this.element=q$2(e);this.nodes=t.childNodes,this.length=0;}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return !1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--;},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),W=function(){function e(e){this.rules=[],this.length=0;}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--;},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),U=A$2,J={isServer:!A$2,useCSSOMInjection:!I$1},Z=function(){function e(e,t,n){void 0===e&&(e=w$2),void 0===t&&(t={}),this.options=v$2({},J,{},e),this.gs=t,this.names=new Map(n),!this.options.isServer&&A$2&&U&&(U=!1,function(e){for(var t=document.querySelectorAll(z$2),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(_)&&(F$1(e,o),o.parentNode&&o.parentNode.removeChild(o));}}(this));}e.registerId=function(e){return V(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(v$2({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,o=t.target,e=n?new W(o):r?new H$1(o):new $(o),new j(e)));var e,t,n,r,o;},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(V(e),this.names.has(e))this.names.get(e).add(t);else {var n=new Set;n.add(t),this.names.set(e,n);}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(V(e),n);},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear();},t.clearRules=function(e){this.getTag().clearGroup(V(e)),this.clearNames(e);},t.clearTag=function(){this.tag=void 0;},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++){var s=M(o);if(void 0!==s){var i=e.names.get(s),a=t.getGroup(o);if(void 0!==i&&0!==a.length){var c=_+".g"+o+'[id="'+s+'"]',u="";void 0!==i&&i.forEach((function(e){e.length>0&&(u+=e+",");})),r+=""+a+c+'{content:"'+u+'"}/*!sc*/\n';}}}return r}(this)},e}(),X=/(a)(d)/gi,K=function(e){return String.fromCharCode(e+(e>25?39:97))};function Q(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=K(t%52)+n;return (K(t%52)+n).replace(X,"$1-$2")}var ee=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},te=function(e){return ee(5381,e)};function ne(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(E$1(n)&&!N(n))return !1}return !0}var re=te("5.2.1"),oe=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic="production"===process.env.NODE_ENV&&(void 0===n||n.isStatic)&&ne(e),this.componentId=t,this.baseHash=ee(re,t),this.baseStyle=n,Z.registerId(t);}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else {var s=Ne(this.rules,e,t,n).join(""),i=Q(ee(this.baseHash,s.length)>>>0);if(!t.hasNameForId(r,i)){var a=n(s,"."+i,void 0,r);t.insertRules(r,i,a);}o.push(i),this.staticRulesId=i;}else {for(var c=this.rules.length,u=ee(this.baseHash,n.hash),l="",d=0;d<c;d++){var h=this.rules[d];if("string"==typeof h)l+=h,"production"!==process.env.NODE_ENV&&(u=ee(u,h+d));else if(h){var p=Ne(h,e,t,n),f=Array.isArray(p)?p.join(""):p;u=ee(u,f+d),l+=f;}}if(l){var m=Q(u>>>0);if(!t.hasNameForId(r,m)){var v=n(l,"."+m,void 0,r);t.insertRules(r,m,v);}o.push(m);}}return o.join(" ")},e}(),se=/^\s*\/\/.*$/gm,ie=[":","[",".","#"];function ae(e){var t,n,r,o,s=void 0===e?w$2:e,i=s.options,a=void 0===i?w$2:i,c=s.plugins,u=void 0===c?S:c,l=new stylis_min(a),d=[],p=function(e){function t(t){if(t)try{e(t+"}");}catch(e){}}return function(n,r,o,s,i,a,c,u,l,d){switch(n){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(o[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t);}}}((function(e){d.push(e);})),f=function(e,r,s){return 0===r&&ie.includes(s[n.length])||s.match(o)?e:"."+t};function m(e,s,i,a){void 0===a&&(a="&");var c=e.replace(se,""),u=s&&i?i+" "+s+" { "+c+" }":c;return t=a,n=s,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),l(i||!s?"":s,u)}return l.use([].concat(u,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,f));},p,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||D$1(15),ee(e,t.name)}),5381).toString():"",m}var ce=React__default['default'].createContext(),ue=ce.Consumer,le=React__default['default'].createContext(),de=(le.Consumer,new Z),he=ae();function pe(){return React.useContext(ce)||de}function fe(){return React.useContext(le)||he}var ve=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=he);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"));},this.toString=function(){return D$1(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t;}return e.prototype.getName=function(e){return void 0===e&&(e=he),this.name+e.hash},e}(),ye=/([A-Z])/,ge=/([A-Z])/g,Se=/^ms-/,we=function(e){return "-"+e.toLowerCase()};function Ee(e){return ye.test(e)?e.replace(ge,we).replace(Se,"-ms-"):e}var be=function(e){return null==e||!1===e||""===e};function Ne(e,n,r,o){if(Array.isArray(e)){for(var s,i=[],a=0,c=e.length;a<c;a+=1)""!==(s=Ne(e[a],n,r,o))&&(Array.isArray(s)?i.push.apply(i,s):i.push(s));return i}if(be(e))return "";if(N(e))return "."+e.styledComponentId;if(E$1(e)){if("function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!n)return e;var u=e(n);return "production"!==process.env.NODE_ENV&&reactIs_2(u)&&console.warn(b$2(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),Ne(u,n,r,o)}var l;return e instanceof ve?r?(e.inject(r,o),e.getName(o)):e:g$2(e)?function e(t,n){var r,o,s=[];for(var i in t)t.hasOwnProperty(i)&&!be(t[i])&&(g$2(t[i])?s.push.apply(s,e(t[i],i)):E$1(t[i])?s.push(Ee(i)+":",t[i],";"):s.push(Ee(i)+": "+(r=i,null==(o=t[i])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||r in unitlessKeys?String(o).trim():o+"px")+";"));return n?[n+" {"].concat(s,["}"]):s}(e):e.toString()}function _e(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return E$1(e)||g$2(e)?Ne(y$2(S,[e].concat(n))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:Ne(y$2(e,n))}var Ce=/invalid hook call/i,Ae=new Set,Ie=function(e,t){if("production"!==process.env.NODE_ENV){var n="The component "+e+(t?' with the id of "'+t+'"':"")+" has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.";try{React.useRef(),Ae.has(n)||(console.warn(n),Ae.add(n));}catch(e){Ce.test(e.message)&&Ae.delete(n);}}},Pe=function(e,t,n){return void 0===n&&(n=w$2),e.theme!==n.theme&&e.theme||t||n.theme},Oe=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Re=/(^-|-$)/g;function De(e){return e.replace(Oe,"-").replace(Re,"")}var je=function(e){return Q(te(e)>>>0)};function Te(e){return "string"==typeof e&&("production"===process.env.NODE_ENV||e.charAt(0)===e.charAt(0).toLowerCase())}var xe=function(e){return "function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},ke=function(e){return "__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function Ve(e,t,n){var r=e[n];xe(t)&&xe(r)?Me(r,t):e[n]=t;}function Me(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,s=n;o<s.length;o++){var i=s[o];if(xe(i))for(var a in i)ke(a)&&Ve(e,i[a],a);}return e}var Be=React__default['default'].createContext(),ze=Be.Consumer;var Ge={};function Fe(e,t,n){var o=N(e),i=!Te(e),a=t.attrs,c=void 0===a?S:a,d=t.componentId,h=void 0===d?function(e,t){var n="string"!=typeof e?"sc":De(e);Ge[n]=(Ge[n]||0)+1;var r=n+"-"+je("5.2.1"+n+Ge[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):d,p=t.displayName,y=void 0===p?function(e){return Te(e)?"styled."+e:"Styled("+b$2(e)+")"}(e):p,g=t.displayName&&t.componentId?De(t.displayName)+"-"+t.componentId:t.componentId||h,_=o&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,C=t.shouldForwardProp;o&&e.shouldForwardProp&&(C=t.shouldForwardProp?function(n,r){return e.shouldForwardProp(n,r)&&t.shouldForwardProp(n,r)}:e.shouldForwardProp);var A,I=new oe(n,g,o?e.componentStyle:void 0),P=I.isStatic&&0===c.length,O=function(e,t){return function(e,t,n,r){var o=e.attrs,i=e.componentStyle,a=e.defaultProps,c=e.foldedComponentIds,d=e.shouldForwardProp,h=e.styledComponentId,p=e.target;"production"!==process.env.NODE_ENV&&React.useDebugValue(h);var m=function(e,t,n){void 0===e&&(e=w$2);var r=v$2({},t,{theme:e}),o={};return n.forEach((function(e){var t,n,s,i=e;for(t in E$1(i)&&(i=i(r)),i)r[t]=o[t]="className"===t?(n=o[t],s=i[t],n&&s?n+" "+s:n||s):i[t];})),[r,o]}(Pe(t,React.useContext(Be),a)||w$2,t,o),y=m[0],g=m[1],S=function(e,t,n,r){var o=pe(),s=fe(),i=t?e.generateAndInjectStyles(w$2,o,s):e.generateAndInjectStyles(n,o,s);return "production"!==process.env.NODE_ENV&&React.useDebugValue(i),"production"!==process.env.NODE_ENV&&!t&&r&&r(i),i}(i,r,y,"production"!==process.env.NODE_ENV?e.warnTooManyClasses:void 0),b=n,N=g.$as||t.$as||g.as||t.as||p,_=Te(N),C=g!==t?v$2({},t,{},g):t,A={};for(var I in C)"$"!==I[0]&&"as"!==I&&("forwardedAs"===I?A.as=C[I]:(d?d(I,index):!_||index(I))&&(A[I]=C[I]));return t.style&&g.style!==t.style&&(A.style=v$2({},t.style,{},g.style)),A.className=Array.prototype.concat(c,h,S!==h?S:null,t.className,g.className).filter(Boolean).join(" "),A.ref=b,React.createElement(N,A)}(A,e,t,P)};return O.displayName=y,(A=React__default['default'].forwardRef(O)).attrs=_,A.componentStyle=I,A.displayName=y,A.shouldForwardProp=C,A.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):S,A.styledComponentId=g,A.target=o?e.target:e,A.withComponent=function(e){var r=t.componentId,o=function(e,t){if(null==e)return {};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["componentId"]),s=r&&r+"-"+(Te(e)?e:De(b$2(e)));return Fe(e,v$2({},o,{attrs:_,componentId:s}),n)},Object.defineProperty(A,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?Me({},e.defaultProps,t):t;}}),"production"!==process.env.NODE_ENV&&(Ie(y,g),A.warnTooManyClasses=function(e,t){var n={},r=!1;return function(o){if(!r&&(n[o]=!0,Object.keys(n).length>=200)){var s=t?' with the id of "'+t+'"':"";console.warn("Over 200 classes were generated for component "+e+s+".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),r=!0,n={};}}}(y,g)),A.toString=function(){return "."+A.styledComponentId},i&&hoistNonReactStatics_cjs(A,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),A}var Ye=function(e){return function e(t,r,o){if(void 0===o&&(o=w$2),!reactIs_3(r))return D$1(1,String(r));var s=function(){return t(r,o,_e.apply(void 0,arguments))};return s.withConfig=function(n){return e(t,r,v$2({},o,{},n))},s.attrs=function(n){return e(t,r,v$2({},o,{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},s}(Fe,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){Ye[e]=Ye(e);}));"production"!==process.env.NODE_ENV&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"),"production"!==process.env.NODE_ENV&&process.env.NODE_ENV;

var blue = {
    100: "#E7F0FF",
    200: "#D0E1FE",
    300: "#A5CBF1",
    400: "#70ADE9",
    500: "#126AFA",
    600: "#0F5AD5",
    700: "#0D4AAF",
    800: "#09357D"
};
var orange = {
    100: "#FFCCBC",
    200: "#FFAB91",
    300: "#FF8A65",
    400: "#FF7043",
    500: "#E64A19",
    600: "#E64A19",
    700: "#D84315",
    800: "#BF360C"
};
var red = {
    100: "#FAE6E6",
    200: "#F5CCCC",
    300: "#E58080",
    400: "#D42626",
    500: "#cc0000",
    600: "#AD0000",
    700: "#8F0000",
    800: "#660000"
};
var green = {
    100: "#E7F0FF",
    200: "#CCE6CC",
    300: "#80BF80",
    400: "#269326",
    500: "#008000",
    600: "#006D00",
    700: "#005A00",
    800: "#004000"
};
var grey = {
    100: "#eff2f4",
    200: "#dfe4e9",
    300: "#C7D0D8",
    400: "#b0bcc8",
    500: "#98A7B7",
    600: "#607890",
    700: "#546A7F",
    800: "#435465"
};

var defaultTheme = {
    primaryColor: blue[500],
    primaryHoverColor: blue[700],
    primaryActiveColor: blue[600],
    primaryFocusColor: blue[600],
    primaryDisabledColor: blue[300],
    secondaryColor: grey[500],
    secondaryHoverColor: grey[700],
    secondaryActiveColor: grey[600],
    secondaryFocusColor: grey[600],
    secondaryDisabledColor: grey[300],
    shadowColor: grey[500],
    iconColor: grey[800],
    borderColor: grey[500],
    whiteColor: '#ffffff',
    blackColor: '#000000',
    linkColor: blue[500],
    linkActiveColor: blue[600],
    linkHoverColor: blue[700],
    inputColor: grey[800],
    inputBackgroundColor: '#ffffff',
    inputDisabledColor: grey[300],
    inputPlaceHolderColor: grey[800],
    inputPreffixAndSuffixBackgroundColor: grey[500],
    typographyColor: grey[800],
    statusColors: {
        warning: orange[500],
        danger: red[500],
        success: green[500],
        info: blue[500],
    },
    warningColor: orange[500],
    warningHoverColor: orange[700],
    warningActiveColor: orange[600],
    warningFocusColor: orange[600],
    warningDisabledColor: orange[300],
    dangerColor: red[500],
    dangerHoverColor: red[700],
    dangerActiveColor: red[600],
    dangerFocusColor: red[600],
    dangerDisabledColor: red[300],
    successColor: green[500],
    successHoverColor: green[700],
    successActiveColor: green[600],
    successFocusColor: green[600],
    successDisabledColor: green[300],
    infoHoverColor: blue[700],
    infoActiveColor: blue[600],
    infoFocusColor: blue[600],
    infoDisabledColor: blue[300],
};

var avatarTheme = {
    defaults: {
        bgColor: defaultTheme.secondaryColor,
        hoverBgColor: defaultTheme.primaryActiveColor,
        shadowColor: defaultTheme.shadowColor,
        textColor: defaultTheme.primaryColor,
        hoverTextColor: defaultTheme.whiteColor
    }
};

var buttonTheme = {
    defaults: {
        bgColor: defaultTheme.primaryColor,
        textColor: defaultTheme.whiteColor,
        hoverTextColor: defaultTheme.whiteColor,
        hoverBgColor: defaultTheme.primaryActiveColor,
        hoverShadowColor: defaultTheme.shadowColor,
    },
    primary: {
        bgColor: defaultTheme.primaryColor,
        hoverBgColor: defaultTheme.primaryActiveColor,
    },
    secondary: {
        bgColor: 'transparent',
        hoverBgColor: 'transparent',
        textColor: defaultTheme.secondaryActiveColor,
        borderColor: defaultTheme.secondaryColor,
        hoverBorderColor: defaultTheme.primaryActiveColor
    },
    danger: {
        bgColor: defaultTheme.dangerColor,
        hoverBgColor: defaultTheme.dangerActiveColor,
    },
    warning: {
        bgColor: defaultTheme.warningColor,
        hoverBgColor: defaultTheme.warningActiveColor,
    },
    success: {
        bgColor: defaultTheme.successColor,
        hoverBgColor: defaultTheme.successActiveColor,
    },
};

var blue$1 = {
    100: "#E7F0FF",
    200: "#D0E1FE",
    300: "#A5CBF1",
    400: "#70ADE9",
    500: "#126AFA",
    600: "#0F5AD5",
    700: "#0D4AAF",
    800: "#09357D"
};
var orange$1 = {
    100: "#fff3e0",
    200: "#ffe0b2",
    300: "#ffcc80",
    400: "#ffb74d",
    500: "#ffa726",
    600: "#ff9800",
    700: "#fb8c00",
    800: "#f57c00"
};
var red$1 = {
    100: "#FAE6E6",
    200: "#F5CCCC",
    300: "#E58080",
    400: "#D42626",
    500: "#cc0000",
    600: "#AD0000",
    700: "#8F0000",
    800: "#660000"
};
var green$1 = {
    100: "#E6F2E6",
    200: "#CCE6CC",
    300: "#80BF80",
    400: "#269326",
    500: "#008000",
    600: "#006D00",
    700: "#005A00",
    800: "#004000"
};
var grey$1 = {
    100: "#eff2f4",
    200: "#dfe4e9",
    300: "#C7D0D8",
    400: "#b0bcc8",
    500: "#98A7B7",
    600: "#607890",
    700: "#546A7F",
    800: "#435465"
};
var colorsTheme = {
    black: '#000000',
    white: '#ffffff',
    blue: blue$1,
    green: green$1,
    grey: grey$1,
    red: red$1,
    orange: orange$1
};

var cardTheme = {
    defaults: {
        borderColor: grey$1[500],
        shadowColor: grey$1[500],
    }
};

var cardTableTheme = {
    defaults: {
        borderColor: defaultTheme.borderColor,
        headerBgColor: defaultTheme.whiteColor,
        hoverBorderColor: defaultTheme.primaryColor,
        trBgColor: defaultTheme.whiteColor,
        nthTrBgColor: defaultTheme.whiteColor,
        hoverTrBgColor: defaultTheme.whiteColor,
        hoverShadowColor: defaultTheme.shadowColor
    }
};

var checkBoxTheme = {
    defaults: {
        bgColor: defaultTheme.primaryColor,
        textColor: defaultTheme.typographyColor,
        errorTextColor: defaultTheme.dangerColor,
        hoverBgColor: defaultTheme.primaryActiveColor,
        borderColor: defaultTheme.borderColor,
        shadowColor: defaultTheme.shadowColor,
    }
};

var fileInputTheme = {
    defaults: {
        textColor: defaultTheme.typographyColor,
        btnTextColor: defaultTheme.primaryColor,
        errorTextColor: defaultTheme.dangerColor,
        btnHoverBgColor: grey[300],
        borderColor: grey[200],
        btnHoverBorderColor: defaultTheme.primaryColor,
        hoverBorderColor: grey[200],
        btnBgColor: grey[300]
    }
};

var inputTheme = {
    inputBackgroundColor: '#ffffff',
    inputTextColor: grey$1[800],
    inputBorderColor: grey$1[500],
    inputDisabledColor: grey$1[100],
    inputPlaceHolderColor: grey$1[500],
    inputPreffixBackgroundColor: grey$1[300],
    inputSuffixBackgroundColor: grey$1[300],
    fontFamily: '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    inputErrorColor: red$1[500],
    inputFocusBorderColor: grey$1[800],
    inputSuffixColor: grey$1[500],
    inputPreffixColor: grey$1[500]
};

var labelTheme = {
    sizes: {
        XS: {
            fontSize: '1rem',
        },
        S: {
            fontSize: '1.2rem',
        },
        M: {
            fontSize: '1.4rem',
        },
        L: {
            fontSize: '1.6rem',
        },
        XL: {
            fontSize: '1.8rem',
        }
    },
    weights: {
        light: {
            weight: '300'
        },
        regular: {
            weight: '400'
        },
        medium: {
            weight: '600'
        },
        strong: {
            weight: '700'
        },
        extraStrong: {
            weight: '800'
        }
    },
    fontFamily: '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    defaults: {
        labelColor: grey$1[800],
        lineHeight: '1',
        labelWeight: '400',
    }
};

var linkTheme = {
    sizes: {
        XS: {
            fontSize: '1rem',
        },
        S: {
            fontSize: '1.2rem',
        },
        M: {
            fontSize: '1.4rem',
        },
        L: {
            fontSize: '1.6rem',
        },
        XL: {
            fontSize: '1.8rem',
        }
    },
    fontFamily: '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    defaults: {
        linkColor: grey$1[800],
        hoverColor: grey$1[700],
        activeColor: grey$1[600],
    }
};

var listTheme = {
    S1: '0.4rem',
    S2: '0.8rem',
    S3: '1.2rem',
    S4: '1.6rem',
    M1: '2.4rem',
    M2: '3.2rem',
    M3: '4.0rem',
    L1: '4.8rem',
    L2: '5.6rem',
    L3: '6.4rem',
    L4: '7.2rem'
};

var modalTheme = {
    defaults: {
        borderColor: grey$1[500],
        shadowColor: grey$1[500],
    }
};

var radioTheme = {
    defaults: {
        bgColor: grey[200],
        textColor: defaultTheme.typographyColor,
        errorTextColor: defaultTheme.dangerColor,
        hoverBgColor: grey[300],
        borderColor: defaultTheme.borderColor,
        shadowColor: defaultTheme.shadowColor,
        checkedBgColor: defaultTheme.primaryColor,
        hoverCheckedBgColor: defaultTheme.primaryActiveColor
    }
};

var tableTheme = {
    defaults: {
        thBgColor: defaultTheme.primaryColor,
        thTextColor: defaultTheme.whiteColor,
        hoverTrBgColor: grey[300],
        borderColor: defaultTheme.borderColor,
        nthTrBgColor: grey[200]
    }
};

var textTheme = {
    sizes: {
        XS: {
            fontSize: '1rem',
        },
        S: {
            fontSize: '1.2rem',
        },
        M: {
            fontSize: '1.4rem',
        },
        L: {
            fontSize: '1.6rem',
        },
        XL: {
            fontSize: '1.8rem',
        }
    },
    weights: {
        light: {
            weight: '300'
        },
        regular: {
            weight: '400'
        },
        medium: {
            weight: '600'
        },
        strong: {
            weight: '700'
        },
        extraStrong: {
            weight: '800'
        }
    },
    fontFamily: '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    defaults: {
        textColor: grey$1[800],
        lineHeight: '1',
        hoverColor: grey$1[700],
        activeColor: grey$1[600],
        textAlign: 'left',
        textWeight: '400',
        size: 'S',
    }
};

var toastTheme = {
    statusColor: {
        success: {
            color: green$1[500],
            bgColor: green$1[100],
            borderColor: green$1[300]
        },
        info: {
            color: blue$1[500],
            bgColor: blue$1[100],
            borderColor: blue$1[300]
        },
        warning: {
            color: orange$1[500],
            bgColor: orange$1[100],
            borderColor: orange$1[300]
        },
        danger: {
            color: red$1[500],
            bgColor: red$1[100],
            borderColor: red$1[300]
        }
    },
    defaults: {
        position: {
            top: '0',
            right: '0',
        },
        shadowColor: grey$1[500],
        borderColor: grey$1[500],
    }
};

var toggleTheme = {
    sizes: {
        XS: '20px',
        S: '24px',
        M: '28px',
        L: '32px',
        XL: '40px'
    },
    borderColor: '#ffffff',
    checkedBackgroundColor: grey[800],
    backgroundColor: grey[300],
    disabledBackgroundColor: grey[300],
    shadowColor: grey[300],
};

var coreDefaultTheme = {
    card: cardTheme,
    input: inputTheme,
    label: labelTheme,
    link: linkTheme,
    modal: modalTheme,
    text: textTheme,
    toast: toastTheme,
    toggle: toggleTheme,
    colors: colorsTheme,
    list: listTheme,
    avatar: avatarTheme,
    button: buttonTheme,
    checkBox: checkBoxTheme,
    radio: radioTheme,
    table: tableTheme,
    cardTable: cardTableTheme,
    fileInput: fileInputTheme,
};

var navbarTheme = {
    defaults: {
        bgColor: '#282c34',
        popBgColor: 'rgba(40, 44, 47, 0.95)',
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        popShadowColor: 'rgba(0, 0, 0, 0.2)'
    }
};

var sidebarTheme = {
    defaults: {
        bgColor: 'white',
        hrColor: grey[200],
        shadowColor: 'rgba(0, 0, 0, 0.2)',
    }
};

var layoutDefaultTheme = {
    navbar: navbarTheme,
    sidebar: sidebarTheme
};

var defaultTheme$1 = __assign(__assign({}, coreDefaultTheme), layoutDefaultTheme);

var mixin = function (size) {
    switch (size) {
        case "XXS":
            return "width: 30px;\n            height: 30px;\n            line-height: 30px;\n            img{width: 30px;\n                height: 30px;\n            }\n            span{font-size:0.8em};\n            ";
        case "XS":
            return "width: 50px;\n            height: 50px;\n            line-height: 50px;\n            img{width: 50px;\n                height: 50px;\n            }\n            span{font-size:1.5em};\n            ";
        case "S":
            return "width: 100px;\n            height: 100px;\n            line-height: 100px;\n            img{width: 100px;\n                height: 100px;\n            }\n            span{font-size:3.5em}";
        case "M":
            return "width: 150px;\n            height: 150px;\n            line-height: 150px;\n            img{\n                width: 150px;\n                height: 150px;\n            }\n            span{font-size:5em}";
        case "L":
            return "width: 200px;\n            height: 200px;\n            line-height: 200px;\n            img{\n                width: 200px;\n                height: 200px;\n            }\n            span{font-size:7em}";
        case "XL":
            return "width: 250px;\n            height: 250px;\n            line-height: 250px;\n            img{\n                width: 250px;\n                height: 250px;\n            }\n            span{font-size:9em}";
        default:
            return "border:1px solid red;";
    }
};
var StyledAvatar = Ye.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", "\n    ", "\n    ", ";\n    margin:0 0.5rem;\n    border-radius: 50%;\n    text-align:center;\n    background-color: ", ";\n\n    ", "\n\n    img{\n        border-radius: 50%;\n        display: inline-block;\n        vertical-align: middle;\n        line-height: normal;\n    }\n    \n    span{\n        display: inline-block;\n        vertical-align: middle;\n        line-height: normal;\n        color: ", ";\n    }\n"], ["\n    ", "\n    ", "\n    ", ";\n    margin:0 0.5rem;\n    border-radius: 50%;\n    text-align:center;\n    background-color: ", ";\n\n    ",
    "\n\n    img{\n        border-radius: 50%;\n        display: inline-block;\n        vertical-align: middle;\n        line-height: normal;\n    }\n    \n    span{\n        display: inline-block;\n        vertical-align: middle;\n        line-height: normal;\n        color: ", ";\n    }\n"])), function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; }, function (pr) { return mixin(pr.size); }, function (pr) { return pr.display !== 'block' ? "display:" + pr.display + ";" : "display:block;"; }, function (pr) { return pr.bgColor || pr.theme.avatar.defaults.bgColor; }, function (pr) { return pr.hoverEffect ? "&:hover {\n        background-color: " + (pr.hoverBgColor || pr.theme.avatar.defaults.hoverBgColor) + ";\n        box-shadow: 0px 5px 8px " + (pr.hoverShadowColor || pr.theme.avatar.defaults.shadowColor) + ";\n        span{\n            color: " + (pr.hoverTextColor || pr.theme.avatar.defaults.hoverTextColor) + ";\n            text-shadow: 0px 5px 8px " + pr.hoverTextShadowColor + ";\n        }\n        }\n        " :
    ''; }, function (pr) { return pr.textColor || pr.theme.avatar.defaults.textColor; });
StyledAvatar.defaultProps = {
    theme: defaultTheme$1
};
var templateObject_1;

var Avatar = React.memo(React.forwardRef(function (props, ref) {
    var size = props.size, _a = props.res, res = _a === void 0 ? 'Pradip Bhusnar' : _a;
    var isValidURL = function (res) {
        var reso = res.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)/g);
        return (reso !== null);
    };
    var chars = function (name) {
        var nameSplit = String(name).toUpperCase().split(' ');
        if (nameSplit.length == 1)
            return nameSplit[0].charAt(0);
        return nameSplit[0].charAt(0) + nameSplit[1].charAt(0);
    };
    return (React.createElement(StyledAvatar, __assign({ ref: ref, size: size }, props), isValidURL(res) ? React.createElement("img", { src: res }) : React.createElement("span", null, chars(res))));
}));
Avatar.displayName = "Avatar";
Avatar.defaultProps = {
    size: 'S',
    hoverEffect: true
};

var uppercase = function () { return _e(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n    text-transform: uppercase;\n"], ["\n    text-transform: uppercase;\n"]))); };
var lineThrough = function () { return _e(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    text-decoration: line-through;\n"], ["\n    text-decoration: line-through;\n"]))); };
var getTextStyle = function (_a) {
    var props = __rest(_a, []);
    var textColor = props.textColor, lineHeight = props.lineHeight, textSize = props.textSize, textAlign = props.textAlign, textWeight = props.textWeight;
    return _e(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        margin: 0;\n        color: ", ";\n        line-height: ", ";\n        font-size: ", ";\n        text-align: ", ";\n        font-weight: ", ";\n        font-family: ", ";\n    "], ["\n        margin: 0;\n        color: ", ";\n        line-height: ", ";\n        font-size: ", ";\n        text-align: ", ";\n        font-weight: ", ";\n        font-family: ", ";\n    "])), function (_a) {
        var theme = _a.theme;
        return (textColor ? textColor : theme.text.defaults.textColor);
    }, function (_a) {
        var theme = _a.theme;
        return (lineHeight ? lineHeight : theme.text.defaults.lineHeight);
    }, function (_a) {
        var theme = _a.theme;
        return (textSize === undefined ? theme.text.defaults.size : theme.text.sizes[textSize].fontSize);
    }, function (_a) {
        var theme = _a.theme;
        return (textAlign ? textAlign : theme.text.defaults.textAlign);
    }, function (_a) {
        var theme = _a.theme;
        return (textWeight ? theme.text.weights[textWeight].weight : theme.text.defaults.textWeight);
    }, function (_a) {
        var theme = _a.theme;
        return (theme.text.fontFamily);
    });
};
var Text = Ye('span')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    padding:0.3rem;\n    ", "\n    ", ";\n    ", ";\n    &:active {\n        color: ", ";\n    }\n    ", ";\n    /* &:hover {\n        color: ", ";\n    } */\n\n"], ["\n    padding:0.3rem;\n    ", "\n    ", ";\n    ", ";\n    &:active {\n        color: ", ";\n    }\n    ",
    ";\n    /* &:hover {\n        color: ", ";\n    } */\n\n"])), getTextStyle, function (props) { return props.uppercase && uppercase(); }, function (props) { return props.lineThrough && lineThrough(); }, function (_a) {
    var theme = _a.theme, activeColor = _a.activeColor;
    return (activeColor ? activeColor : theme.text.defaults.activeColor);
}, function (props) { return props.hoverEffect ? "&:hover {\n        color: " + (props.hoverColor ? props.hoverColor : props.theme.text.defaults.hoverColor) + ";\n    }" : ''; }, function (_a) {
    var theme = _a.theme, hoverColor = _a.hoverColor;
    return (hoverColor ? hoverColor : theme.text.defaults.hoverColor);
});
Text.displayName = "Text";
Text.defaultProps = {
    theme: defaultTheme$1
};
var templateObject_1$1, templateObject_2, templateObject_3, templateObject_4;

var Text$1 = React.memo(React.forwardRef(function (_a, ref) {
    var children = _a.children, textSize = _a.textSize, textWeight = _a.textWeight, textAlign = _a.textAlign, restProps = __rest(_a, ["children", "textSize", "textWeight", "textAlign"]);
    return (React.createElement(Text, __assign({ textSize: textSize, textWeight: textWeight, textAlign: textAlign, ref: ref }, restProps), children));
}));
Text$1.defaultProps = {
    lineThrough: false,
    uppercase: false,
    textSize: 'S'
};
Text$1.displayName = 'Text';
Text$1.Style = Text;

var SizeMixin = function (size) {
    switch (size) {
        case "XS":
            return "padding: 0.6rem 2.4rem 0.8rem;\n            ";
        case "S":
            return "padding: 0.8rem 2.4rem 1rem;\n            ";
        case "M":
            return "padding: 1rem 2.4rem 1.2rem;\n           ";
        case "L":
            return "padding: 1.2rem 2.4rem 1.4rem;\n            ";
        case "XL":
            return "padding: 1.4rem 2.4rem 1.6rem;\n        ";
        default:
            return "border:1px solid red;";
    }
};
var hoverPick = function (pr) {
    switch (pr.type) {
        case "primary":
            {
                return "background: " + (pr.bgColor || buttonTheme.primary.bgColor) + ";\n            border:none;\n            span{color:" + (pr.textColor || buttonTheme.defaults.textColor) + ";};\n            " + (pr.hoverEffect ? "&:hover {\n                background-color: " + (pr.hoverBgColor || buttonTheme.primary.hoverBgColor) + ";\n                box-shadow: 0px 5px 8px " + (pr.hoverShadowColor || buttonTheme.defaults.hoverShadowColor) + ";\n                span{color:" + (pr.hoverTextColor || defaultTheme.whiteColor) + ";};\n                };" : '') + "\n            ";
            }
        case "secondary":
            return "background:transparent;\n            border:1px solid " + defaultTheme.secondaryColor + ";\n            span{color:" + (pr.textColor || defaultTheme.secondaryActiveColor) + ";};\n            " + (pr.hoverEffect ? "&:hover {\n            border:1px solid " + defaultTheme.secondaryActiveColor + ";\n            box-shadow: 0px 5px 8px " + (pr.hoverShadowColor || defaultTheme.shadowColor) + ";\n            span{color:" + (pr.hoverTextColor || defaultTheme.secondaryActiveColor) + ";};\n            };" : '') + "\n            ";
        case "warning":
            return "\n            background: " + (pr.bgColor || defaultTheme.warningColor) + ";\n            border:none;\n            span{color:" + (pr.textColor || defaultTheme.whiteColor) + ";};\n            " + (pr.hoverEffect ? "&:hover {\n                background-color: " + (pr.hoverBgColor || defaultTheme.warningActiveColor) + ";\n                box-shadow: 0px 5px 8px " + (pr.hoverShadowColor || defaultTheme.shadowColor) + ";\n                span{color:" + (pr.hoverTextColor || defaultTheme.whiteColor) + ";};\n                };" : '') + "\n           ";
        case "danger":
            return "background: " + (pr.bgColor || defaultTheme.dangerColor) + ";\n            border:none;\n            span{color:" + (pr.textColor || defaultTheme.whiteColor) + ";}\n            " + (pr.hoverEffect ? "&:hover {\n                background-color: " + (pr.hoverBgColor || defaultTheme.dangerActiveColor) + ";\n                box-shadow: 0px 5px 8px " + (pr.hoverShadowColor || defaultTheme.shadowColor) + ";\n                span{color:" + (pr.hoverTextColor || defaultTheme.whiteColor) + ";};\n                };" : '') + "\n            ";
        case "success":
            return "background: " + (pr.bgColor || defaultTheme.successColor) + ";\n        border:none;\n        span{color:" + (pr.textColor || defaultTheme.whiteColor) + ";};\n        " + (pr.hoverEffect ? "&:hover {\n            background-color: " + (pr.hoverBgColor || defaultTheme.successActiveColor) + ";\n            box-shadow: 0px 5px 8px " + (pr.hoverShadowColor || defaultTheme.shadowColor) + ";\n            span{color:" + (pr.hoverTextColor || defaultTheme.whiteColor) + ";};\n            };" : '') + "\n        ";
        default:
            return "background: " + (pr.bgColor || defaultTheme.primaryColor) + ";\n        border:none;\n        span{color:" + (pr.textColor || defaultTheme.whiteColor) + ";};\n        " + (pr.hoverEffect ? "&:hover {\n            background-color: " + (pr.hoverBgColor || defaultTheme.primaryActiveColor) + ";\n            box-shadow: 0px 5px 8px " + (pr.hoverShadowColor || defaultTheme.shadowColor) + ";\n            span{color:" + (pr.hoverTextColor || defaultTheme.whiteColor) + ";};\n            };" : '');
    }
};
var StyledButton = Ye.button(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n    ", ";\n    ", ";\n    ", ";\n    margin: 0.5rem;\n    /* font-size: 20px; */\n    border-radius: 0.5rem;\n    text-align:center;\n    position: relative;\n    user-select: none;\n    font-family: inherit;\n    text-decoration: none;\n    transition: all 100ms ease-out 0s;\n    display: inline-flex;\n    -webkit-box-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    align-items: center;\n"], ["\n    ", ";\n    ", ";\n    ", ";\n    margin: 0.5rem;\n    /* font-size: 20px; */\n    border-radius: 0.5rem;\n    text-align:center;\n    position: relative;\n    user-select: none;\n    font-family: inherit;\n    text-decoration: none;\n    transition: all 100ms ease-out 0s;\n    display: inline-flex;\n    -webkit-box-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    align-items: center;\n"])), function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; }, function (pr) { return SizeMixin(pr.size); }, function (pr) { return hoverPick(pr); });
var templateObject_1$2;

var Button = React.memo(React.forwardRef(function (props, ref) {
    var _a = props.type, type = _a === void 0 ? 'primary' : _a, _b = props.size, size = _b === void 0 ? 'S' : _b, textSize = props.textSize, textColor = props.textColor, hoverTextColor = props.hoverTextColor;
    return React.createElement(StyledButton, __assign({ ref: ref, type: type, size: size }, props),
        React.createElement(Text$1, { textSize: textSize, textColor: textColor, hoverColor: hoverTextColor }, props.children));
}));
Button.displayName = "Button";
Button.defaultProps = {
    hoverEffect: true
};

var Card = Ye('div')(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n    position: relative;\n    display: flex;\n    flex-direction: ", ";\n    min-width: 0;\n    margin:0.5rem;\n    word-wrap: break-word;\n    background-color: #fff;\n    background-clip: border-box;\n    border: 1px solid ", ";\n    border-radius: .3rem;\n    box-shadow: 0 0.5rem 2rem ", ";\n    width:18rem;\n    border-top-left-radius: calc(.3rem - 1px);\n    border-top-right-radius: calc(.3rem - 1px);\n    border-bottom-left-radius: calc(.3rem - 1px);\n    border-bottom-right-radius: calc(.3rem - 1px);\n"], ["\n    position: relative;\n    display: flex;\n    flex-direction: ", ";\n    min-width: 0;\n    margin:0.5rem;\n    word-wrap: break-word;\n    background-color: #fff;\n    background-clip: border-box;\n    border: 1px solid ", ";\n    border-radius: .3rem;\n    box-shadow: 0 0.5rem 2rem ", ";\n    width:18rem;\n    border-top-left-radius: calc(.3rem - 1px);\n    border-top-right-radius: calc(.3rem - 1px);\n    border-bottom-left-radius: calc(.3rem - 1px);\n    border-bottom-right-radius: calc(.3rem - 1px);\n"])), function (_a) {
    var variant = _a.variant;
    return variant === "vertical" ? "column" : "row";
}, function (_a) {
    var theme = _a.theme, borderColor = _a.borderColor;
    return borderColor ? borderColor : theme.card.defaults.borderColor;
}, function (_a) {
    var theme = _a.theme, shadowColor = _a.shadowColor;
    return shadowColor ? shadowColor : theme.card.defaults.shadowColor;
});
Card.defaultProps = {
    theme: defaultTheme$1
};
var CardHeader = Ye('div')(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n    background-color:#fff;\n    width:", ";\n"], ["\n    background-color:#fff;\n    width:", ";\n"])), function (_a) {
    var variant = _a.variant;
    return variant === "vertical" ? "auto" : "10rem";
});
var CardImage = Ye('img')(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n    width:100%;\n    height:100%;\n"], ["\n    width:100%;\n    height:100%;\n"])));
var CardTitle = Ye('div')(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n    margin-bottom: .5rem;\n"], ["\n    margin-bottom: .5rem;\n"])));
var CardBody = Ye('div')(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    background-color:#fff;\n    height:100%;\n    width:", ";\n    text-align:", ";\n    flex: 1 1 auto;\n    padding: 1rem 1rem;\n"], ["\n    background-color:#fff;\n    height:100%;\n    width:", ";\n    text-align:", ";\n    flex: 1 1 auto;\n    padding: 1rem 1rem;\n"])), function (_a) {
    var variant = _a.variant;
    return variant === "vertical" ? "auto" : "8rem";
}, function (_a) {
    var textAlignment = _a.textAlignment;
    return textAlignment;
});
var CardDescription = Ye('div')(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    margin-top: 0;\n    margin-bottom: 0.5rem;\n"], ["\n    margin-top: 0;\n    margin-bottom: 0.5rem;\n"])));
var templateObject_1$3, templateObject_2$1, templateObject_3$1, templateObject_4$1, templateObject_5, templateObject_6;

var Card$1 = React.memo(React.forwardRef(function (props, ref) {
    var title = props.title, description = props.description, imgSrc = props.imgSrc, titleSize = props.titleSize, descriptionSize = props.descriptionSize, titleColor = props.titleColor, descriptionColor = props.descriptionColor;
    return (React.createElement(Card, __assign({ ref: ref }, props),
        imgSrc && React.createElement(CardHeader, __assign({}, props),
            React.createElement(CardImage, { src: imgSrc })),
        React.createElement(CardBody, __assign({}, props),
            React.createElement(CardTitle, null,
                React.createElement(Text$1, { textColor: titleColor, textSize: titleSize }, title)),
            React.createElement(CardDescription, null,
                React.createElement(Text$1, { textColor: descriptionColor, textSize: descriptionSize }, description)))));
}));
Card$1.defaultProps = {
    textAlignment: 'left',
    variant: 'vertical'
};
Card$1.displayName = 'Card';
Card$1.Style = Card;

var StyledTh = Ye.th(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n   padding: 0.5rem;\n"], ["\n   padding: 0.5rem;\n"])));
var StyledTr = Ye.tr(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n    display: flex;\n    justify-content: space-between;\n    /* align-content: start; */\n    align-items: center;\n    /* justify-items: left; */\n    margin-bottom: 1rem;\n    width: 100%;\n    padding: 0.5rem 1rem 0.5rem 1rem;\n    background-color: transparentize( white,0.15 );\n    border: 1px solid ", ";\n    border-radius: 5px;\n"], ["\n    display: flex;\n    justify-content: space-between;\n    /* align-content: start; */\n    align-items: center;\n    /* justify-items: left; */\n    margin-bottom: 1rem;\n    width: 100%;\n    padding: 0.5rem 1rem 0.5rem 1rem;\n    background-color: transparentize( white,0.15 );\n    border: 1px solid ", ";\n    border-radius: 5px;\n"])), function (pr) { return pr.borderColor || cardTableTheme.defaults.borderColor; });
var StyledThead = Ye.thead(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n    ", "{\n        background-color:", ";\n    }\n"], ["\n    ", "{\n        background-color:", ";\n    }\n"])), StyledTr, function (pr) { return pr.headerBgColor || cardTableTheme.defaults.headerBgColor; });
var StyledTbody = Ye.tbody(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n    ", "{\n        box-shadow: 0px 4px 4px rgba(0, 74, 215, 0.45);\n        background-color:", ";\n        &:nth-child(even){background-color: ", ";};\n        ", "\n    }\n"], ["\n    ", "{\n        box-shadow: 0px 4px 4px rgba(0, 74, 215, 0.45);\n        background-color:", ";\n        &:nth-child(even){background-color: ", ";};\n        ",
    "\n    }\n"])), StyledTr, function (pr) { return pr.trBgColor || cardTableTheme.defaults.trBgColor; }, function (pr) { return pr.nthTrBgColor || cardTableTheme.defaults.nthTrBgColor; }, function (pr) { return pr.hoverEffect ? "&:hover {box-shadow: 0px 4px 19px " + (pr.hoverShadowColor || cardTableTheme.defaults.hoverShadowColor) + ";\n                                border:1px solid " + (pr.hoverBorderColor || cardTableTheme.defaults.hoverBorderColor) + ";\n                                background-color:" + (pr.hoverTrBgColor || cardTableTheme.defaults.hoverTrBgColor) + ";}" : ''; });
var StyledTd = Ye.td(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n    display: inline-block;\n    padding: 0.5rem;\n    text-align: left;\n"], ["\n    display: inline-block;\n    padding: 0.5rem;\n    text-align: left;\n"])));
var StyledTable = Ye.table(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject(["\n    width:90%;\n    margin:auto;\n    ", ",", "{\n        ", "\n        text-align: left;\n    }\n"], ["\n    width:90%;\n    margin:auto;\n    ", ",", "{\n        ", "\n        text-align: left;\n    }\n"])), StyledTd, StyledTh, function (pr) { var _a; return pr.thData && "width:" + 100 / ((_a = pr.thData) === null || _a === void 0 ? void 0 : _a.length) + "%;"; });
var templateObject_1$4, templateObject_2$2, templateObject_3$2, templateObject_4$2, templateObject_5$1, templateObject_6$1;

var CardTable = React.memo(React.forwardRef(function (props, ref) {
    var thData = props.thData, tdData = props.tdData;
    return React.createElement(StyledTable, __assign({ ref: ref }, props),
        React.createElement(StyledThead, __assign({}, props),
            React.createElement(StyledTr, __assign({}, props), thData && thData.map(function (th) { return React.createElement(StyledTh, __assign({ key: th.id }, props), th.data); }))),
        React.createElement(StyledTbody, __assign({}, props), tdData && tdData.map(function (tr) { return React.createElement(StyledTr, __assign({ key: tr.trId }, props), tr.trData.map(function (td) { return React.createElement(StyledTd, __assign({ key: td.tdId }, props), td.tdData); })); })));
}));
CardTable.displayName = "CardTable";
CardTable.defaultProps = {
// hoverEffect: false
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
var mixin$1 = function (size) {
    switch (size) {
        case "XS":
            return "input[type=\"checkbox\"]{\n                width: 1.4rem;\n                height: 1.4rem;\n                }\n                input[type=\"checkbox\"]:checked:before {\n                    width: 4px;\n                    height: 10px;\n                    border-width: 0 3px 3px 0;\n                    margin-top: 2px;\n                }\n            ";
        case "S":
            return "input{\n                width: 1.8rem;\n                height: 1.8rem;\n                }\n                input[type=\"checkbox\"]:checked:before {\n                    width: 5px;\n                    height: 14px;\n                    border-width: 0 3px 3px 0;\n                    margin-top: 4px;\n                }\n            ";
        case "M":
            return "input{\n                width: 2.2rem;\n                height: 2.2rem;\n                }\n                input[type=\"checkbox\"]:checked:before {\n                    width: 7px;\n                    height: 18px;\n                    border-width: 0 4px 4px 0;\n                    margin-top: 4px;\n                }\n            ";
        case "L":
            return "input{\n                width: 2.6rem;\n                height: 2.6rem;\n                }\n                input[type=\"checkbox\"]:checked:before {\n                    width: 7px;\n                    height: 21px;\n                    border-width: 0 5px 5px 0;\n                    margin-top: 4px;\n                }\n            ";
        case "XL":
            return "input{\n                width: 3rem;\n                height: 3rem;\n                }\n                input[type=\"checkbox\"]:checked:before {\n                    width: 8px;\n                    height: 24px;\n                    border-width: 0 5.5px 5.5px 0;\n                    margin-top: 4px;\n                }\n            ";
    }
};
var labelpos = function (position) {
    switch (position) {
        case "top":
            return "\n                span{\n                    display:block;\n                    position:relative;\n                    bottom:35px;\n                }\n                input{\n                    position:relative;\n                    top:35px;\n                }\n            ";
        case "bottom":
            return "span{\n                display:block;\n                width:100%;\n                padding:0;\n            }\n            ";
        case "left":
            return "span{\n                padding-right:1.6rem;\n            }\n            ";
        default:
            return "span{\n                padding: 0px 1.6rem;\n            }\n            ";
    }
};
var ErrorLabel = Ye.label(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n    display:block;\n    color: ", ";\n    padding-bottom:0.5rem;\n    padding-left:0.3rem;\n"], ["\n    display:block;\n    color: ", ";\n    padding-bottom:0.5rem;\n    padding-left:0.3rem;\n"])), checkBoxTheme.defaults.errorTextColor);
var StyledLabel = Ye.label(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n    ", ";\n    cursor: pointer;\n    padding-bottom: 0.5rem;\n    user-select: none;\n    ", ";\n    \n    span{\n        vertical-align:middle;\n        };\n\n    input[type=\"checkbox\"] {\n        vertical-align:middle;\n        border: 1px solid ", ";\n        -webkit-appearance: none;\n        -webkit-transition: box-shadow 200ms;\n        -webkit-border-radius:5px;\n        border-radius:5px;\n        \n        &:focus {\n            outline:none;\n        };\n        &:checked {\n            background-color: ", ";\n            &:before {\n                content: '';\n                display: block;\n                border: solid #fff;\n                -webkit-transform: rotate(45deg);\n                transform: rotate(45deg);\n                margin:auto;\n            };\n        };\n\n    };\n    ", ";\n    ", ";\n    ", ";\n        \n"], ["\n    ",
    ";\n    cursor: pointer;\n    padding-bottom: 0.5rem;\n    user-select: none;\n    ", ";\n    \n    span{\n        vertical-align:middle;\n        };\n\n    input[type=\"checkbox\"] {\n        vertical-align:middle;\n        border: 1px solid ", ";\n        -webkit-appearance: none;\n        -webkit-transition: box-shadow 200ms;\n        -webkit-border-radius:5px;\n        border-radius:5px;\n        \n        &:focus {\n            outline:none;\n        };\n        &:checked {\n            background-color: ", ";\n            &:before {\n                content: '';\n                display: block;\n                border: solid #fff;\n                -webkit-transform: rotate(45deg);\n                transform: rotate(45deg);\n                margin:auto;\n            };\n        };\n\n    };\n    ",
    ";\n    ", ";\n    ", ";\n        \n"])), function (pr) { return pr.labelPosition === 'left' ? "display:flex;\n            flex-direction:row-reverse;\n            justify-content:flex-end;" : "display:block;"; }, function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; }, function (pr) { return pr.errorText || pr.hasError ? '#CC0000' : checkBoxTheme.defaults.borderColor; }, function (pr) { return pr.hasError ? '#CC0000' : pr.bgColor || checkBoxTheme.defaults.bgColor; }, function (pr) { return pr.hoverEffect ? "&:hover {\n        " + (pr.labelHoverEffect ? "span{color: " + pr.labelHoverColor + ";}" : '') + "\n        input[type=\"checkbox\"]:checked{\n            background-color: " + (pr.hoverBgColor || checkBoxTheme.defaults.hoverBgColor) + ";\n        };\n        input[type=\"checkbox\"]{\n            border-color:" + checkBoxTheme.defaults.bgColor + ";\n            box-shadow: 0px 4px 19px " + (pr.hoverShadowColor || checkBoxTheme.defaults.shadowColor) + ";\n            }\n        }\n        " :
    ''; }, function (pr) { return pr.size && mixin$1(pr.size); }, function (pr) { return labelpos(pr.labelPosition); });
var CheckBoxWrapper = Ye.div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n\n"], ["\n\n"])));
var templateObject_1$5, templateObject_2$3, templateObject_3$3;

var CheckBox = React.memo(React.forwardRef(function (props, ref) {
    var _a = props.size, size = _a === void 0 ? 'S' : _a, _b = props.label, label = _b === void 0 ? 'CheckBox' : _b, _c = props.value, value = _c === void 0 ? '' : _c, _d = props.errorText, errorText = _d === void 0 ? '' : _d, fontSize = props.fontSize, labelHoverEffect = props.labelHoverEffect, labelHoverColor = props.labelHoverColor, labelColor = props.labelColor, _e = props.checked, checked = _e === void 0 ? false : _e;
    var _f = React.useState(checked), check = _f[0], setCheck = _f[1];
    return (React.createElement(CheckBoxWrapper, __assign({ ref: ref }, props),
        React.createElement(ErrorLabel, { id: "error", htmlFor: "error" }, errorText),
        React.createElement(StyledLabel, __assign({ size: size }, props),
            React.createElement("input", { type: "checkbox", checked: checked ? checked : check, value: value === '' ? label : value, onChange: function () { return setCheck(!check); } }),
            React.createElement(Text$1, { textSize: fontSize, textColor: labelColor, hoverEffect: labelHoverEffect, hoverColor: labelHoverColor }, label))));
}));
CheckBox.displayName = "CheckBox";
CheckBox.defaultProps = {
    hoverEffect: true
};

var StyledLi = Ye.li(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n    width:auto;\n    padding-right:1.5rem;\n"], ["\n    width:auto;\n    padding-right:1.5rem;\n"])));
var StyledUl = Ye.ul(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n    display:flex;\n    flex-direction:row;\n    margin:0;\n    padding:0;\n    list-style:none;\n    ", "\n"], ["\n    display:flex;\n    flex-direction:row;\n    margin:0;\n    padding:0;\n    list-style:none;\n    ",
    "\n"])), function (pr) {
    return pr.display === 'block' ? "flex-direction:column;" + StyledLi + "{\n        width:100%;\n        }" : '';
});
var StyledLabel$1 = Ye.label(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n    cursor: pointer;\n    padding: 0.8rem 0px;\n    user-select: none;\n    ", ";\n    \n    span{\n        vertical-align:middle;\n        };\n\n    input[type=\"checkbox\"] {\n        vertical-align:middle;\n        border: 1px solid ", ";\n        -webkit-appearance: none;\n        -webkit-transition: box-shadow 200ms;\n        -webkit-border-radius:5px;\n        border-radius:5px;\n        margin-right:0.5rem;\n        \n        &:focus {\n            outline:none;\n        };\n        &:checked {\n            background-color: ", ";\n            &:before {\n                content: '';\n                display: block;\n                border: solid #fff;\n                -webkit-transform: rotate(45deg);\n                transform: rotate(45deg);\n                margin:auto;\n            };\n        };\n\n    };\n    ", ";\n    ", ";\n        \n"], ["\n    cursor: pointer;\n    padding: 0.8rem 0px;\n    user-select: none;\n    ", ";\n    \n    span{\n        vertical-align:middle;\n        };\n\n    input[type=\"checkbox\"] {\n        vertical-align:middle;\n        border: 1px solid ", ";\n        -webkit-appearance: none;\n        -webkit-transition: box-shadow 200ms;\n        -webkit-border-radius:5px;\n        border-radius:5px;\n        margin-right:0.5rem;\n        \n        &:focus {\n            outline:none;\n        };\n        &:checked {\n            background-color: ", ";\n            &:before {\n                content: '';\n                display: block;\n                border: solid #fff;\n                -webkit-transform: rotate(45deg);\n                transform: rotate(45deg);\n                margin:auto;\n            };\n        };\n\n    };\n    ",
    ";\n    ", ";\n        \n"])), function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; }, function (pr) { return pr.errorText || pr.hasError ? '#CC0000' : checkBoxTheme.defaults.borderColor; }, function (pr) { return pr.hasError ? '#CC0000' : pr.bgColor || checkBoxTheme.defaults.bgColor; }, function (pr) { return pr.hoverEffect ? "&:hover {\n        " + (pr.labelHoverEffect ? "span{color: " + pr.labelHoverColor + ";}" : '') + "\n        input[type=\"checkbox\"]:checked{\n            background-color: " + (pr.hoverBgColor || checkBoxTheme.defaults.hoverBgColor) + ";\n        };\n        input[type=\"checkbox\"]{\n            border-color:" + checkBoxTheme.defaults.bgColor + ";\n            box-shadow: 0px 4px 19px " + (pr.hoverShadowColor || checkBoxTheme.defaults.shadowColor) + ";\n            }\n        }\n        " :
    ''; }, function (pr) { return pr.size && mixin$1(pr.size); });
var templateObject_1$6, templateObject_2$4, templateObject_3$4;

var CheckBoxGroup = React.memo(React.forwardRef(function (props, ref) {
    var _a = props.display, display = _a === void 0 ? "block" : _a, checkBoxOptions = props.checkBoxOptions, errorText = props.errorText, size = props.size, fontSize = props.fontSize, labelColor = props.labelColor, labelHoverEffect = props.labelHoverEffect, labelHoverColor = props.labelHoverColor, label = props.label, _b = props.showSelectAll, showSelectAll = _b === void 0 ? false : _b, hoverEffect = props.hoverEffect, disabled = props.disabled, bgColor = props.bgColor, hoverBgColor = props.hoverBgColor, hoverShadowColor = props.hoverShadowColor, labelPosition = props.labelPosition;
    var _c = React.useState(false), selectAll = _c[0], setSelectAll = _c[1];
    return (React.createElement(CheckBoxWrapper, __assign({ ref: ref }, props),
        React.createElement(ErrorLabel, { id: "error", htmlFor: "error" }, errorText),
        React.createElement(StyledLabel$1, __assign({ size: size }, props),
            showSelectAll ? React.createElement("input", { type: "checkbox", checked: selectAll, onChange: function () { return setSelectAll(!selectAll); } }) : '',
            React.createElement(Text$1, { textSize: fontSize, textColor: labelColor, hoverEffect: labelHoverEffect, hoverColor: labelHoverColor }, label)),
        React.createElement(StyledUl, __assign({ display: display }, props), checkBoxOptions && checkBoxOptions.map(function (obj) {
            return (React.createElement(StyledLi, { key: obj.id },
                React.createElement(CheckBox, { key: obj.id, label: obj.label, value: obj.value, checked: obj.checked ? obj.checked : selectAll, size: size, fontSize: fontSize, labelColor: labelColor, hoverEffect: hoverEffect, labelHoverEffect: labelHoverEffect, labelHoverColor: labelHoverColor, disabled: obj.disabled ? obj.disabled : disabled, bgColor: bgColor, hoverBgColor: hoverBgColor, hoverShadowColor: hoverShadowColor, labelPosition: labelPosition })));
        }))));
}));
CheckBoxGroup.displayName = "CheckBoxGroup";
CheckBoxGroup.defaultProps = {
    hoverEffect: true,
    size: 'S'
};

var StyledInput = Ye.input(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n    position: absolute;\n    left: 134px;\n    top: -60px;\n    cursor: pointer;\n    opacity: 0;\n    -moz-opacity: 0;\n    filter: progid:DXImageTransform.Microsoft.Alpha(opacity = 0);\n"], ["\n    position: absolute;\n    left: 134px;\n    top: -60px;\n    cursor: pointer;\n    opacity: 0;\n    -moz-opacity: 0;\n    filter: progid:DXImageTransform.Microsoft.Alpha(opacity = 0);\n"])));
var FileNameSpan = Ye.span(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n    width:70%;\n    margin: 1px 1px 1px 5px;\n    font-size: ", ";\n    color: ", ";\n    background:transparent;\n    font-style: italic;\n    padding: .3em .6em;\n    white-space: nowrap;\n    overflow: hidden !important;\n    text-overflow: ellipsis;\n"], ["\n    width:70%;\n    margin: 1px 1px 1px 5px;\n    font-size: ", ";\n    color: ", ";\n    background:transparent;\n    font-style: italic;\n    padding: .3em .6em;\n    white-space: nowrap;\n    overflow: hidden !important;\n    text-overflow: ellipsis;\n"])), function (pr) { return pr.size && textTheme.sizes[pr.size].fontSize; }, function (pr) { return pr.textColor || fileInputTheme.defaults.textColor; });
var BrowsSpan = Ye.span(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n    width:30%;\n    text-align:center;\n    border: none;\n    background: ", ";\n    color: ", ";\n    font-weight: bold;\n    padding: .3em .6em;\n    -webkit-text-decoration: none;\n    font-size: ", ";\n    -moz-border-radius: 5px;\n    -webkit-border-radius: 5px;\n    border-radius: 5px;\n"], ["\n    width:30%;\n    text-align:center;\n    border: none;\n    background: ", ";\n    color: ", ";\n    font-weight: bold;\n    padding: .3em .6em;\n    -webkit-text-decoration: none;\n    font-size: ", ";\n    -moz-border-radius: 5px;\n    -webkit-border-radius: 5px;\n    border-radius: 5px;\n"])), function (pr) { return pr.btnBgColor || fileInputTheme.defaults.btnBgColor; }, function (pr) { return pr.btnTextColor || fileInputTheme.defaults.btnTextColor; }, function (pr) { return pr.size && textTheme.sizes[pr.size].fontSize; });
var StyledLabel$2 = Ye.label(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n    ", ";\n    display:inline-flex;\n    border: 1px solid ", ";\n    cursor: pointer;\n    justify-content:flex-end;\n    flex-direction:row-reverse;\n    border-radius:5px;\n    -moz-border-radius: 5px;\n    -webkit-border-radius: 5px;\n    ", ";\n"], ["\n    ", ";\n    display:inline-flex;\n    border: 1px solid ", ";\n    cursor: pointer;\n    justify-content:flex-end;\n    flex-direction:row-reverse;\n    border-radius:5px;\n    -moz-border-radius: 5px;\n    -webkit-border-radius: 5px;\n    ",
    ";\n"])), function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; }, function (pr) { return pr.hasError || pr.errorText !== '' ? defaultTheme.dangerColor : pr.borderColor || fileInputTheme.defaults.borderColor; }, function (pr) { return pr.hoverEffect ? "&:hover{\n        " + BrowsSpan + "{\n                border:1px solid " + (pr.btnHoverBorderColor || fileInputTheme.defaults.btnHoverBorderColor) + ";\n                background: " + (pr.btnHoverBgColor || fileInputTheme.defaults.btnHoverBgColor) + ";\n            }\n    }" : ''; });
var StyledWrapper = Ye.div(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n    display:flex;\n    flex-direction:column;\n    width:280px;\n"], ["\n    display:flex;\n    flex-direction:column;\n    width:280px;\n"])));
var templateObject_1$7, templateObject_2$5, templateObject_3$5, templateObject_4$3, templateObject_5$2;

var FileInput = React.memo(React.forwardRef(function (props, ref) {
    var _a = React.useState(''), file = _a[0], setFile = _a[1];
    var errorText = props.errorText, _b = props.size, size = _b === void 0 ? 'S' : _b;
    var handleUpload = function (e) {
        setFile(e.target.files[0].name);
        console.log(file);
    };
    return (React.createElement(StyledWrapper, __assign({ ref: ref }, props),
        React.createElement(ErrorLabel, __assign({}, props), errorText),
        React.createElement(StyledLabel$2, __assign({}, props),
            React.createElement(BrowsSpan, __assign({ size: size }, props), "Browse"),
            React.createElement(FileNameSpan, __assign({ size: size }, props), file === '' ? 'Chose file' : file),
            React.createElement(StyledInput, { type: "file", onChange: handleUpload }))));
}));
FileInput.displayName = "FileInput";
FileInput.defaultProps = {
    hoverEffect: true,
    hasError: false,
    errorText: ''
};

var OuterWrapper = Ye('div')(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n    .error{\n        color:", ";\n        font-family: ", ";\n    }\n"], ["\n    .error{\n        color:", ";\n        font-family: ", ";\n    }\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.input.inputErrorColor);
}, function (_a) {
    var theme = _a.theme;
    return (theme.input.fontFamily);
});
OuterWrapper.defaultProps = {
    theme: defaultTheme$1
};
var Error$1 = Ye('span')(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n    font-size: 0.9rem;\n    line-height: 1rem;\n    white-space: initial;\n    user-select: none;\n    margin: 0.1rem 0.8rem;\n    color:", ";\n    font-family: ", ";\n"], ["\n    font-size: 0.9rem;\n    line-height: 1rem;\n    white-space: initial;\n    user-select: none;\n    margin: 0.1rem 0.8rem;\n    color:", ";\n    font-family: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.input.inputErrorColor);
}, function (_a) {
    var theme = _a.theme;
    return (theme.input.fontFamily);
});
Error$1.defaultProps = {
    theme: defaultTheme$1
};
var InputWrapper = Ye('div')(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n    display: flex;\n    &&& {\n        flex-direction: row;\n        align-items: center;\n        justify-content:center;\n    }\n    background-clip: padding-box;\n    box-sizing: border-box;\n    border: 2px solid ", ";\n    border-radius: 3px;\n    overflow: hidden;\n    margin: 1%;\n    width: ", ";\n    height: max-content;\n    font-family: ", ";\n    &:focus-within {\n        border-color: ", ";\n    }\n    & > * {\n        font-size: 1rem;\n        padding: 10px;\n        font-family: ", ";\n        color: ", ";\n    }\n    \n"], ["\n    display: flex;\n    &&& {\n        flex-direction: row;\n        align-items: center;\n        justify-content:center;\n    }\n    background-clip: padding-box;\n    box-sizing: border-box;\n    border: 2px solid ", ";\n    border-radius: 3px;\n    overflow: hidden;\n    margin: 1%;\n    width: ", ";\n    height: max-content;\n    font-family: ", ";\n    &:focus-within {\n        border-color: ", ";\n    }\n    & > * {\n        font-size: 1rem;\n        padding: 10px;\n        font-family: ", ";\n        color: ", ";\n    }\n    \n"])), function (_a) {
    var theme = _a.theme, borderColor = _a.borderColor, hasError = _a.hasError;
    return (borderColor ? hasError ? theme.input.inputErrorColor : borderColor : hasError ? theme.input.inputErrorColor : theme.input.inputBorderColor);
}, function (props) { return (props.fullWidth ? '98%' : 'max-content'); }, function (_a) {
    var theme = _a.theme;
    return (theme.input.fontFamily);
}, function (_a) {
    var theme = _a.theme, borderColor = _a.borderColor, hasError = _a.hasError;
    return (borderColor ? hasError ? theme.input.inputErrorColor : borderColor : hasError ? theme.input.inputErrorColor : theme.input.inputFocusBorderColor);
}, function (_a) {
    var theme = _a.theme;
    return (theme.input.fontFamily);
}, function (_a) {
    var theme = _a.theme, textColor = _a.textColor;
    return (textColor ? textColor : theme.input.inputTextColor);
});
InputWrapper.defaultProps = {
    theme: defaultTheme$1
};
var Input = Ye('input')(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n    flex: 1;\n    outline: 0;\n    border: 0;\n    cursor: ", ";\n    font-family: ", ";\n    background-color: ", ";\n    &::placeholder {\n        color: ", ";\n        font-family: ", ";\n    }\n"], ["\n    flex: 1;\n    outline: 0;\n    border: 0;\n    cursor: ", ";\n    font-family: ", ";\n    background-color: ",
    ";\n    &::placeholder {\n        color: ", ";\n        font-family: ", ";\n    }\n"])), function (_a) {
    var disabled = _a.disabled;
    return (disabled ? 'not-allowed' : 'inherit');
}, function (_a) {
    var theme = _a.theme;
    return (theme.input.fontFamily);
}, function (_a) {
    var disabled = _a.disabled, theme = _a.theme, disabledColor = _a.disabledColor, backgroundColor = _a.backgroundColor;
    return disabled
        ? disabledColor
            ? disabledColor
            : theme.input.inputDisabledColor
        : backgroundColor
            ? backgroundColor
            : theme.input.inputBackgroundColor;
}, function (_a) {
    var theme = _a.theme, placeHolderColor = _a.placeHolderColor;
    return placeHolderColor ? placeHolderColor : theme.input.inputPlaceHolderColor;
}, function (_a) {
    var theme = _a.theme;
    return (theme.input.fontFamily);
});
Input.defaultProps = {
    theme: defaultTheme$1
};
var Preffix = Ye('span')(templateObject_5$3 || (templateObject_5$3 = __makeTemplateObject(["\n    background-color: ", ";\n    font-family: ", ";\n    color:", ";\n"], ["\n    background-color: ", ";\n    font-family: ", ";\n    color:", ";\n"])), function (_a) {
    var theme = _a.theme, preffixBackgroundColor = _a.preffixBackgroundColor;
    return (preffixBackgroundColor ? preffixBackgroundColor : theme.input.inputPreffixBackgroundColor);
}, function (_a) {
    var theme = _a.theme;
    return (theme.input.fontFamily);
}, function (_a) {
    var theme = _a.theme, preffixColor = _a.preffixColor, hasError = _a.hasError;
    return (preffixColor ? hasError ? theme.input.inputErrorColor : preffixColor : hasError ? theme.input.inputErrorColor : theme.input.inputPreffixColor);
});
Preffix.defaultProps = {
    theme: defaultTheme$1
};
var Suffix = Ye('span')(templateObject_6$2 || (templateObject_6$2 = __makeTemplateObject(["\n    background-color: ", ";\n    font-family: ", ";\n    color:", ";\n"], ["\n    background-color: ", ";\n    font-family: ", ";\n    color:", ";\n"])), function (_a) {
    var theme = _a.theme, suffixBackgroundColor = _a.suffixBackgroundColor;
    return (suffixBackgroundColor ? suffixBackgroundColor : theme.input.inputSuffixBackgroundColor);
}, function (_a) {
    var theme = _a.theme;
    return (theme.input.fontFamily);
}, function (_a) {
    var theme = _a.theme, suffixColor = _a.suffixColor, hasError = _a.hasError;
    return (suffixColor ? hasError ? theme.input.inputErrorColor : suffixColor : hasError ? theme.input.inputErrorColor : theme.input.inputSuffixColor);
});
Suffix.defaultProps = {
    theme: defaultTheme$1
};
var templateObject_1$8, templateObject_2$6, templateObject_3$6, templateObject_4$4, templateObject_5$3, templateObject_6$2;

var Input$1 = React.memo(React.forwardRef(function (props, ref) {
    var fullWidth = props.fullWidth, required = props.required, preffix = props.preffix, suffix = props.suffix, borderColor = props.borderColor, textColor = props.textColor, disabledColor = props.disabledColor, backgroundColor = props.backgroundColor, disabled = props.disabled, placeHolderColor = props.placeHolderColor, preffixBackgroundColor = props.preffixBackgroundColor, suffixBackgroundColor = props.suffixBackgroundColor, hasError = props.hasError, errorText = props.errorText, preffixColor = props.preffixColor, suffixColor = props.suffixColor, restProps = __rest(props, ["fullWidth", "required", "preffix", "suffix", "borderColor", "textColor", "disabledColor", "backgroundColor", "disabled", "placeHolderColor", "preffixBackgroundColor", "suffixBackgroundColor", "hasError", "errorText", "preffixColor", "suffixColor"]), id = props.id || 'input';
    return (React.createElement(OuterWrapper, __assign({}, restProps),
        hasError && React.createElement(Text$1, { className: "error" }, errorText),
        React.createElement(InputWrapper, { fullWidth: fullWidth, borderColor: borderColor, textColor: textColor, hasError: hasError },
            preffix && React.createElement(Preffix, { preffixBackgroundColor: preffixBackgroundColor, preffixColor: preffixColor, hasError: hasError }, preffix),
            React.createElement(Input, __assign({ id: id, ref: ref, required: required, fullWidth: fullWidth, disabledColor: disabledColor, backgroundColor: backgroundColor, placeHolderColor: placeHolderColor, disabled: disabled }, restProps)),
            suffix && React.createElement(Suffix, { suffixBackgroundColor: suffixBackgroundColor, suffixColor: suffixColor, hasError: hasError }, suffix))));
}));
Input$1.displayName = 'Input';
Input$1.Style = Input;
Input$1.defaultProps = {
    type: 'text',
    disabled: false,
    fullWidth: false,
    required: false,
};

var asterisk = function () { return _e(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n    ::after {\n        color: red;\n        content: ' *';\n    }\n"], ["\n    ::after {\n        color: red;\n        content: ' *';\n    }\n"]))); };
var uppercase$1 = function () { return _e(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n    text-transform: uppercase;\n"], ["\n    text-transform: uppercase;\n"]))); };
var getTextStyle$1 = function (_a) {
    var props = __rest(_a, []);
    var labelColor = props.labelColor, lineHeight = props.lineHeight, _b = props.labelSize, labelSize = _b === void 0 ? "S" : _b, labelWeight = props.labelWeight;
    return _e(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n        margin: 0;\n        color: ", ";\n        line-height: ", ";\n        font-size: ", ";\n        font-weight: ", ";\n        font-family: ", ";\n    "], ["\n        margin: 0;\n        color: ", ";\n        line-height: ", ";\n        font-size: ", ";\n        font-weight: ", ";\n        font-family: ", ";\n    "])), function (_a) {
        var theme = _a.theme;
        return (labelColor ? labelColor : theme.label.defaults.labelColor);
    }, function (_a) {
        var theme = _a.theme;
        return (lineHeight ? lineHeight : theme.label.defaults.lineHeight);
    }, function (_a) {
        var theme = _a.theme;
        return (theme.label.sizes[labelSize].fontSize);
    }, function (_a) {
        var theme = _a.theme;
        return (labelWeight ? theme.label.weights[labelWeight].weight : theme.label.defaults.labelWeight);
    }, function (_a) {
        var theme = _a.theme;
        return (theme.label.fontFamily);
    });
};
var Label = Ye('label')(templateObject_4$5 || (templateObject_4$5 = __makeTemplateObject(["\n    ", "\n    ", "\n    ", ";\n    cursor: ", ";\n"], ["\n    ", "\n    ", "\n    ", ";\n    cursor: ", ";\n"])), getTextStyle$1, function (_a) {
    var required = _a.required;
    return required && asterisk();
}, function (props) { return props.uppercase && uppercase$1(); }, function (_a) {
    var showPointer = _a.showPointer;
    return (showPointer === undefined ? 'default' : showPointer ? 'pointer' : 'not-allowed');
});
Label.displayName = "Label";
Label.defaultProps = {
    theme: defaultTheme$1,
};
var templateObject_1$9, templateObject_2$7, templateObject_3$7, templateObject_4$5;

var Label$1 = React.memo(React.forwardRef(function (props, ref) { return (React.createElement(Label, __assign({ ref: ref }, props), props.children)); }));
Label$1.defaultProps = {
    required: false
};
Label$1.displayName = 'Label';
Label$1.Style = Label;

var LinkStyled = Ye('a')(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n    color: ", ";\n    background-color: transparent;\n    text-decoration: none;\n    cursor: pointer;\n    font-size: ", ";\n    font-family: ", ";\n\n    &:active {\n        color: ", ";\n    }\n\n    &:hover {\n        color: ", ";\n        outline-width: 0;\n    }\n"], ["\n    color: ", ";\n    background-color: transparent;\n    text-decoration: none;\n    cursor: pointer;\n    font-size: ", ";\n    font-family: ", ";\n\n    &:active {\n        color: ", ";\n    }\n\n    &:hover {\n        color: ", ";\n        outline-width: 0;\n    }\n"])), function (_a) {
    var theme = _a.theme, linkColor = _a.linkColor;
    return (linkColor ? linkColor : theme.link.defaults.linkColor);
}, function (_a) {
    var theme = _a.theme, linkSize = _a.linkSize;
    return (theme.link.sizes[linkSize].fontSize);
}, function (_a) {
    var theme = _a.theme;
    return (theme.link.fontFamily);
}, function (_a) {
    var theme = _a.theme, activeColor = _a.activeColor;
    return (activeColor ? activeColor : theme.link.defaults.activeColor);
}, function (_a) {
    var theme = _a.theme, hoverColor = _a.hoverColor;
    return (hoverColor ? hoverColor : theme.link.defaults.hoverColor);
});
LinkStyled.defaultProps = {
    theme: defaultTheme$1
};
var templateObject_1$a;

var Link = React.memo(React.forwardRef(function (_a, ref) {
    var href = _a.href, linkSize = _a.linkSize, linkColor = _a.linkColor, hoverColor = _a.hoverColor, activeColor = _a.activeColor, props = __rest(_a, ["href", "linkSize", "linkColor", "hoverColor", "activeColor"]);
    var isValidStringOrNumber = function (e) { return typeof e === 'string' || typeof e === 'number'; };
    return (React.createElement(LinkStyled, __assign({ href: href, ref: ref, linkSize: linkSize, linkColor: linkColor, hoverColor: hoverColor, activeColor: activeColor }, props), React.Children.map(props.children, function (c) {
        return isValidStringOrNumber(c) ? React.createElement(Text$1, { textSize: linkSize, textColor: linkColor, hoverColor: hoverColor, activeColor: activeColor, hoverEffect: true }, c) : c;
    })));
}));
Link.displayName = 'Link';
Link.Style = LinkStyled;
Link.defaultProps = {
    linkSize: 'S',
    href: "#"
};

var horizontal = function (spacings) { return _e(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n    li {\n        margin: 0 ", ";\n        &:last-child {\n            margin-right: ", ";\n        }\n        &:first-child {\n            margin-left: ", ";\n        }\n    }\n"], ["\n    li {\n        margin: 0 ", ";\n        &:last-child {\n            margin-right: ", ";\n        }\n        &:first-child {\n            margin-left: ", ";\n        }\n    }\n"])), spacings.S1, spacings.S2, spacings.S2); };
var vertical = function (spacings) { return _e(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n    li {\n        margin: ", " 0;\n        &:last-child {\n            margin-bottom: ", ";\n        }\n        &:first-child {\n            margin-top: ", ";\n        }\n    }\n"], ["\n    li {\n        margin: ", " 0;\n        &:last-child {\n            margin-bottom: ", ";\n        }\n        &:first-child {\n            margin-top: ", ";\n        }\n    }\n"])), spacings.S1, spacings.S2, spacings.S2); };
var ListStyled = Ye('ul').attrs(function (_a) {
    var list = _a.theme.list;
    return ({ list: list });
})(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n    padding: 0;\n    margin: 0;\n    display: flex;\n    list-style: none;\n    flex-direction: ", ";\n    ", ";\n    ", ";\n"], ["\n    padding: 0;\n    margin: 0;\n    display: flex;\n    list-style: none;\n    flex-direction: ", ";\n    ", ";\n    ", ";\n"])), function (_a) {
    var variant = _a.variant;
    return (variant === 'horizontal' ? 'row' : 'column');
}, function (_a) {
    var list = _a.list, variant = _a.variant;
    return variant === 'horizontal' && horizontal(list);
}, function (_a) {
    var list = _a.list, variant = _a.variant;
    return variant === 'vertical' && vertical(list);
});
ListStyled.defaultProps = {
    theme: defaultTheme$1
};
var templateObject_1$b, templateObject_2$8, templateObject_3$8;

var List = React.memo(React.forwardRef(function (props, ref) { return (React.createElement(ListStyled, __assign({ ref: ref }, props), React.Children.map(props.children, function (c, i) {
    return React.createElement("li", { key: i }, c);
}))); }));
List.displayName = 'List';
List.Style = ListStyled;
List.defaultProps = {
    variant: 'vertical'
};

var Modal = Ye('div')(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    margin: 1%;\n    width: 98%;\n    pointer-events: auto;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid ", ";\n    border-radius: .3rem;\n    outline: 0;\n    box-shadow: 0 0.5rem 2rem ", ";\n"], ["\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    margin: 1%;\n    width: 98%;\n    pointer-events: auto;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid ", ";\n    border-radius: .3rem;\n    outline: 0;\n    box-shadow: 0 0.5rem 2rem ", ";\n"])), function (_a) {
    var theme = _a.theme, borderColor = _a.borderColor;
    return borderColor ? borderColor : theme.modal.defaults.borderColor;
}, function (_a) {
    var theme = _a.theme, shadowColor = _a.shadowColor;
    return shadowColor ? shadowColor : theme.modal.defaults.shadowColor;
});
Modal.defaultProps = {
    theme: defaultTheme$1
};
var ModalHeader = Ye('div')(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n    display: flex;\n    flex-shrink: 0;\n    align-items: center;\n    justify-content: space-between;\n    padding: 1rem 1rem;\n    border-bottom: 1px solid ", ";\n    border-top-left-radius: calc(.3rem - 1px);\n    border-top-right-radius: calc(.3rem - 1px);\n"], ["\n    display: flex;\n    flex-shrink: 0;\n    align-items: center;\n    justify-content: space-between;\n    padding: 1rem 1rem;\n    border-bottom: 1px solid ", ";\n    border-top-left-radius: calc(.3rem - 1px);\n    border-top-right-radius: calc(.3rem - 1px);\n"])), function (_a) {
    var theme = _a.theme, borderColor = _a.borderColor;
    return borderColor ? borderColor : theme.modal.defaults.borderColor;
});
ModalHeader.defaultProps = {
    theme: defaultTheme$1
};
var ModalTitle = Ye('div')(templateObject_3$9 || (templateObject_3$9 = __makeTemplateObject(["\n    margin-bottom: 0;\n"], ["\n    margin-bottom: 0;\n"])));
var ModalBody = Ye('div')(templateObject_4$6 || (templateObject_4$6 = __makeTemplateObject(["\n    position: relative;\n    flex: 1 1 auto;\n    padding: 1rem;\n"], ["\n    position: relative;\n    flex: 1 1 auto;\n    padding: 1rem;\n"])));
var ModalDescription = Ye('div')(templateObject_5$4 || (templateObject_5$4 = __makeTemplateObject(["\n    margin-top: 0;\n    margin-bottom: 1rem;\n"], ["\n    margin-top: 0;\n    margin-bottom: 1rem;\n"])));
var ModalFooter = Ye('div')(templateObject_6$3 || (templateObject_6$3 = __makeTemplateObject(["\n    display: flex;\n    flex-wrap: wrap;\n    flex-shrink: 0;\n    align-items: center;\n    justify-content: flex-end;\n    padding: .75rem;\n    border-top: 1px solid ", ";\n    border-bottom-right-radius: calc(.3rem - 1px);\n    border-bottom-left-radius: calc(.3rem - 1px);\n"], ["\n    display: flex;\n    flex-wrap: wrap;\n    flex-shrink: 0;\n    align-items: center;\n    justify-content: flex-end;\n    padding: .75rem;\n    border-top: 1px solid ", ";\n    border-bottom-right-radius: calc(.3rem - 1px);\n    border-bottom-left-radius: calc(.3rem - 1px);\n"])), function (_a) {
    var theme = _a.theme, borderColor = _a.borderColor;
    return borderColor ? borderColor : theme.modal.defaults.borderColor;
});
ModalFooter.defaultProps = {
    theme: defaultTheme$1
};
var templateObject_1$c, templateObject_2$9, templateObject_3$9, templateObject_4$6, templateObject_5$4, templateObject_6$3;

var Modal$1 = function (_a) {
    var title = _a.title, description = _a.description, borderColor = _a.borderColor, shadowColor = _a.shadowColor, titleSize = _a.titleSize, titleColor = _a.titleColor, descriptionSize = _a.descriptionSize, descriptionColor = _a.descriptionColor;
    return (React.createElement(Modal, { title: title, description: description, shadowColor: shadowColor, borderColor: borderColor, titleSize: titleSize, descriptionSize: descriptionSize },
        React.createElement(ModalHeader, { title: title, description: description, shadowColor: shadowColor, borderColor: borderColor, titleSize: titleSize, descriptionSize: descriptionSize },
            React.createElement(ModalTitle, null,
                React.createElement(Text$1, { textSize: titleSize, lineHeight: "1.5", textColor: titleColor }, title))),
        React.createElement(ModalBody, { title: title, description: description, shadowColor: shadowColor, borderColor: borderColor, titleSize: titleSize, descriptionSize: descriptionSize },
            React.createElement(ModalDescription, null,
                React.createElement(Text$1, { textSize: descriptionSize, textColor: descriptionColor }, description))),
        React.createElement(ModalFooter, { title: title, description: description, shadowColor: shadowColor, borderColor: borderColor, titleSize: titleSize, descriptionSize: descriptionSize })));
};

var RadioSpan = Ye.span(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n    /* position: absolute;\n    top: 0;\n    left: 0; */\n    position: relative;\n    text-align:center;\n    background-color: ", ";\n    border-radius: 50%;\n    ", ";\n\n    &:after {\n        content: \"\";\n        position:absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        display: none;\n        border-radius: 50%;\n    }\n\n"], ["\n    /* position: absolute;\n    top: 0;\n    left: 0; */\n    position: relative;\n    text-align:center;\n    background-color: ", ";\n    border-radius: 50%;\n    ", ";\n\n    &:after {\n        content: \"\";\n        position:absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        display: none;\n        border-radius: 50%;\n    }\n\n"])), function (pr) { return pr.bgColor || radioTheme.defaults.bgColor; }, function (pr) { return (pr.hasError || pr.errorText !== '') ? "border:1px solid " + radioTheme.defaults.errorTextColor : ''; });
var ErrorLabel$1 = Ye.label(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n    display:block;\n    color: ", ";\n    padding:0.5rem 0;\n"], ["\n    display:block;\n    color: ", ";\n    padding:0.5rem 0;\n"])), radioTheme.defaults.errorTextColor);
var mixin$2 = function (size) {
    switch (size) {
        case "XS":
            return "\n            " + RadioSpan + "{\n                width: 1rem;\n                height: 1rem;\n                &:after {\n                    width: 0.5rem;\n                    height: 0.5rem;\n                }\n            }\n            ";
        case "S":
            return "\n            " + RadioSpan + "{\n                width: 1.4rem;\n                height: 1.4rem;\n                &:after {\n                    width: 0.8rem;\n                    height: 0.8rem;\n                }\n            }\n            ";
        case "M":
            return "\n            " + RadioSpan + "{\n                width: 1.8rem;\n                height: 1.8rem;\n                &:after {\n                    width: 1.2rem;\n                    height: 1.2rem;\n                }\n            }\n            ";
        case "L":
            return "\n            " + RadioSpan + "{\n                width: 2rem;\n                height: 2rem;\n                &:after {\n                    width: 1.4rem;\n                    height: 1.4rem;\n                }\n            }\n            ";
        case "XL":
            return "\n            " + RadioSpan + "{\n                width: 2.4rem;\n                height: 2.4rem;\n                &:after {\n                    width: 1.8rem;\n                    height: 1.8rem;\n                }\n            }\n            ";
    }
};
var labelPos = function (position) {
    switch (position) {
        case "top":
            return "flex-direction:column;\n            align-items: flex-start;\n            .radioLabel{\n                    padding:0.5rem 0;\n                }\n                \n            ";
        case "bottom":
            return "flex-direction:column-reverse;\n            align-items: flex-start;\n            .radioLabel{\n                    padding:0.5rem 0;\n                }\n            ";
        case "left":
            return "flex-direction:row;\n            justify-content:flex-start;\n            .radioLabel{\n                padding-right:1.6rem;\n                padding-left:0;\n            }\n            ";
        default:
            return ".radioLabel{\n                padding-left:1.3rem;\n            }\n            ";
    }
};
var StyledLabel$3 = Ye.label(templateObject_3$a || (templateObject_3$a = __makeTemplateObject(["\n    display: flex;\n    position:relative;\n    cursor: pointer;\n    /* margin:1rem 0; */\n    align-items: center;\n    flex-direction:row-reverse;\n    justify-content: flex-end;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    color:", ";\n    ", "\n\n    input{\n        position: absolute;\n        opacity: 0;\n        cursor: pointer;\n        &:checked ~ ", " {\n            &:after {\n                display: block;\n                background-color: ", ";\n            }\n        }\n    }\n\n    ", "\n\n    ", "\n    ", ";\n\n"], ["\n    display: flex;\n    position:relative;\n    cursor: pointer;\n    /* margin:1rem 0; */\n    align-items: center;\n    flex-direction:row-reverse;\n    justify-content: flex-end;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    color:", ";\n    ", "\n\n    input{\n        position: absolute;\n        opacity: 0;\n        cursor: pointer;\n        &:checked ~ ", " {\n            &:after {\n                display: block;\n                background-color: ", ";\n            }\n        }\n    }\n\n    ",
    "\n\n    ", "\n    ", ";\n\n"])), function (pr) { return pr.labelColor || radioTheme.defaults.textColor; }, function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; }, RadioSpan, function (pr) { return pr.checkedBgColor || radioTheme.defaults.checkedBgColor; }, function (pr) { return pr.hoverEffect ? "&:hover{ \n        " + RadioSpan + " {\n            background-color: " + (pr.hoverBgColor || radioTheme.defaults.hoverBgColor) + ";\n        }; \n        input:checked ~ " + RadioSpan + ":after{\n            background-color: " + (pr.hoverCheckedBgColor || radioTheme.defaults.hoverCheckedBgColor) + ";\n        };\n        " + (pr.labelHoverEffect ? ".radioLabel{\n            color:" + pr.hoverLabelColor + ";\n        }" : '') + " \n    };" : ''; }, function (pr) { return mixin$2(pr.size); }, function (pr) { return labelPos(pr.labelPosition); });
var RadioWrapper = Ye.div(templateObject_4$7 || (templateObject_4$7 = __makeTemplateObject(["\n\n"], ["\n\n"])));
var templateObject_1$d, templateObject_2$a, templateObject_3$a, templateObject_4$7;

var Radio = React.memo(React.forwardRef(function (props, ref) {
    var _a = props.size, size = _a === void 0 ? 'S' : _a, _b = props.label, label = _b === void 0 ? 'CheckBox' : _b, _c = props.errorText, errorText = _c === void 0 ? '' : _c, value = props.value, checked = props.checked, labelColor = props.labelColor, labelHoverEffect = props.labelHoverEffect, hoverLabelColor = props.hoverLabelColor;
    var _d = React.useState(checked), select = _d[0], setSelect = _d[1];
    return (React.createElement(RadioWrapper, null,
        React.createElement(ErrorLabel$1, { id: "error", htmlFor: "error" }, errorText),
        React.createElement(StyledLabel$3, __assign({ ref: ref, size: size, onChange: function () { return setSelect(!select); } }, props),
            React.createElement(Text$1, { className: 'radioLabel', hoverEffect: labelHoverEffect, hoverColor: hoverLabelColor, textSize: size, textColor: labelColor }, label),
            React.createElement("input", { type: "radio", value: value === '' ? label : value, checked: checked || select }),
            React.createElement(RadioSpan, __assign({}, props)))));
}));
Radio.displayName = "CheckBox";
Radio.defaultProps = {
    hoverEffect: true,
    hasError: false,
    errorText: ''
};

var ErrorLabel$2 = Ye.label(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n    display:block;\n    color: ", ";\n    padding:0.5rem 0.3rem;\n"], ["\n    display:block;\n    color: ", ";\n    padding:0.5rem 0.3rem;\n"])), radioTheme.defaults.errorTextColor);
var StyledLi$1 = Ye.li(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n    width:auto;\n    padding-right:1.5rem;\n"], ["\n    width:auto;\n    padding-right:1.5rem;\n"])));
var StyledUl$1 = Ye.ul(templateObject_3$b || (templateObject_3$b = __makeTemplateObject(["\n    display:flex;\n    flex-direction:row;\n    margin:0;\n    padding:0.3rem;\n    list-style:none;\n    ", "\n"], ["\n    display:flex;\n    flex-direction:row;\n    margin:0;\n    padding:0.3rem;\n    list-style:none;\n    ",
    "\n"])), function (pr) {
    return pr.display === 'block' ? "flex-direction:column;" + StyledLi$1 + "{\n        width:100%;\n        }" : '';
});
var RadioGroupWrapper = Ye.div(templateObject_4$8 || (templateObject_4$8 = __makeTemplateObject(["\n    ", ";\n\n"], ["\n    ", ";\n\n"])), function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; });
var StyledWrapper$1 = Ye.div(templateObject_5$5 || (templateObject_5$5 = __makeTemplateObject(["\n    \n"], ["\n    \n"])));
var templateObject_1$e, templateObject_2$b, templateObject_3$b, templateObject_4$8, templateObject_5$5;

var RadioGroup = React.memo(React.forwardRef(function (props, ref) {
    var size = props.size, options = props.options, mainLabel = props.mainLabel, errorText = props.errorText, labelColor = props.labelColor, labelHoverEffect = props.labelHoverEffect, hoverLabelColor = props.hoverLabelColor, hoverEffect = props.hoverEffect, bgColor = props.bgColor, hoverCheckedBgColor = props.hoverCheckedBgColor, hoverBgColor = props.hoverBgColor, checkedBgColor = props.checkedBgColor, labelPosition = props.labelPosition;
    var _a = React.useState(''), select = _a[0], setSelect = _a[1];
    var handleChange = function (e) {
        setSelect(e.target.value);
    };
    return (React.createElement(StyledWrapper$1, __assign({ ref: ref }, props),
        React.createElement(ErrorLabel$2, null, errorText),
        React.createElement(RadioGroupWrapper, __assign({}, props),
            React.createElement(Text$1, { className: 'radioGroupLabel', textColor: labelColor, hoverColor: hoverLabelColor, hoverEffect: labelHoverEffect, textSize: size }, mainLabel),
            React.createElement(StyledUl$1, __assign({}, props), options && options.map(function (obj) {
                return (React.createElement(StyledLi$1, { key: obj.id },
                    React.createElement(Radio, { label: obj.label, value: obj.value, checked: select == obj.value, onChange: handleChange, size: size, labelHoverEffect: labelHoverEffect, labelColor: labelColor, hoverLabelColor: hoverLabelColor, hoverEffect: hoverEffect, bgColor: bgColor, hoverCheckedBgColor: hoverCheckedBgColor, hoverBgColor: hoverBgColor, checkedBgColor: checkedBgColor, labelPosition: labelPosition })));
            })))));
}));
RadioGroup.displayName = "RadioGroup";
RadioGroup.defaultProps = {
    hoverEffect: true,
    size: 'S'
};

var StyledThead$1 = Ye.thead(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n\n"], ["\n\n"])));
var StyledTh$1 = Ye.th(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n    padding-top: 12px;\n    padding-bottom: 12px;\n    text-align: left;\n    background-color: ", ";\n    color: ", ";\n"], ["\n    padding-top: 12px;\n    padding-bottom: 12px;\n    text-align: left;\n    background-color: ", ";\n    color: ", ";\n"])), function (pr) { return pr.thBgColor || tableTheme.defaults.thBgColor; }, function (pr) { return pr.thTextColor || tableTheme.defaults.thTextColor; });
var StyledTr$1 = Ye.tr(templateObject_3$c || (templateObject_3$c = __makeTemplateObject(["\n    &:nth-child(even){background-color: ", ";};\n    /* &:hover {background-color:#ddd;} */\n    ", "\n"], ["\n    &:nth-child(even){background-color: ", ";};\n    /* &:hover {background-color:#ddd;} */\n    ", "\n"])), function (pr) { return pr.nthTrBgColor || tableTheme.defaults.nthTrBgColor; }, function (pr) { return pr.hoverEffect ? "&:hover {background-color:" + (pr.hoverTrBgColor || tableTheme.defaults.hoverTrBgColor) + ";" : ''; });
var StyledTbody$1 = Ye.tbody(templateObject_4$9 || (templateObject_4$9 = __makeTemplateObject(["\n\n"], ["\n\n"])));
var StyledTd$1 = Ye.td(templateObject_5$6 || (templateObject_5$6 = __makeTemplateObject(["\n\n"], ["\n\n"])));
var StyledTable$1 = Ye.table(templateObject_6$4 || (templateObject_6$4 = __makeTemplateObject(["\n    font-family: Arial, Helvetica, sans-serif;\n    border-collapse: collapse;\n    width: 90%;\n    margin:auto;\n    ", ",", "{\n        border: 1px solid ", ";\n        padding: 8px;\n    }\n"], ["\n    font-family: Arial, Helvetica, sans-serif;\n    border-collapse: collapse;\n    width: 90%;\n    margin:auto;\n    ", ",", "{\n        border: 1px solid ", ";\n        padding: 8px;\n    }\n"])), StyledTd$1, StyledTh$1, function (pr) { return pr.borderColor || cardTableTheme.defaults.borderColor; });
var templateObject_1$f, templateObject_2$c, templateObject_3$c, templateObject_4$9, templateObject_5$6, templateObject_6$4;

var Table = React.memo(React.forwardRef(function (props, ref) {
    var thData = props.thData, tdData = props.tdData;
    return React.createElement(StyledTable$1, __assign({ ref: ref }, props),
        React.createElement(StyledThead$1, null,
            React.createElement(StyledTr$1, __assign({}, props), thData && thData.map(function (th) { return React.createElement(StyledTh$1, __assign({ key: th.id }, props), th.data); }))),
        React.createElement(StyledTbody$1, null, tdData && tdData.map(function (tr) { return React.createElement(StyledTr$1, __assign({ key: tr.trId }, props), tr.trData.map(function (td) { return React.createElement(StyledTd$1, __assign({ key: td.tdId }, props), td.tdData); })); })));
}));
Table.displayName = "Table";
Table.defaultProps = {
    hoverEffect: true
};

var getPosition = function (position) {
    switch (position) {
        case 'top-left':
            return _e(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n                top: 0;\n                left: 0;\n            "], ["\n                top: 0;\n                left: 0;\n            "])));
        case 'top-center':
            return _e(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n                top: 0;\n                left: 50%;\n                transform: translateX(-50%);\n            "], ["\n                top: 0;\n                left: 50%;\n                transform: translateX(-50%);\n            "])));
        case 'top-right':
            return _e(templateObject_3$d || (templateObject_3$d = __makeTemplateObject(["\n                top: 0;\n                right: 0;\n            "], ["\n                top: 0;\n                right: 0;\n            "])));
        case 'right-center':
            return _e(templateObject_4$a || (templateObject_4$a = __makeTemplateObject(["\n                right: 0;\n                top: 50%;\n                transform: translateY(-50%);\n            "], ["\n                right: 0;\n                top: 50%;\n                transform: translateY(-50%);\n            "])));
        case 'left-center':
            return _e(templateObject_5$7 || (templateObject_5$7 = __makeTemplateObject(["\n                left: 0;\n                top: 50%;\n                transform: translateY(-50%);\n            "], ["\n                left: 0;\n                top: 50%;\n                transform: translateY(-50%);\n            "])));
        case 'bottom-left':
            return _e(templateObject_6$5 || (templateObject_6$5 = __makeTemplateObject(["\n                bottom: 0;\n                left: 0;\n            "], ["\n                bottom: 0;\n                left: 0;\n            "])));
        case 'bottom-center':
            return _e(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n                bottom: 0;\n                left: 50%;\n                transform: translateX(-50%);\n            "], ["\n                bottom: 0;\n                left: 50%;\n                transform: translateX(-50%);\n            "])));
        case 'bottom-right':
            return _e(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n                bottom: 0;\n                right: 0;\n            "], ["\n                bottom: 0;\n                right: 0;\n            "])));
    }
};
var getFlexPosition = function (position) {
    switch (position) {
        case 'top-left':
            return _e(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n                align-items: flex-start;\n            "], ["\n                align-items: flex-start;\n            "])));
        case 'top-center':
            return _e(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n                align-items:center;\n            "], ["\n                align-items:center;\n            "])));
        case 'top-right':
            return _e(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n                align-items:flex-end;\n            "], ["\n                align-items:flex-end;\n            "])));
    }
};
var getBorder = function (borderPosition) {
    switch (borderPosition) {
        case 'top':
            return _e(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n                border-bottom:none;\n                border-left:none;\n                border-right:none;\n            "], ["\n                border-bottom:none;\n                border-left:none;\n                border-right:none;\n            "])));
        case 'left':
            return _e(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n                border-bottom:none;\n                border-top:none;\n                border-right:none;\n            "], ["\n                border-bottom:none;\n                border-top:none;\n                border-right:none;\n            "])));
        case 'right':
            return _e(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n                border-bottom:none;\n                border-left:none;\n                border-top:none;\n            "], ["\n                border-bottom:none;\n                border-left:none;\n                border-top:none;\n            "])));
        case 'bottom':
            return _e(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n                border-top:none;\n                border-left:none;\n                border-right:none;\n            "], ["\n                border-top:none;\n                border-left:none;\n                border-right:none;\n            "])));
    }
};
var ToastContainer = Ye('div')(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n\tposition: ", ";\n    display: flex;\n    /* align-items: flex-end; */\n\tflex-direction: column;\n\theight: auto;\n\twidth: auto;\n\tz-index: 999;\n    ", "\n    ", "\n"], ["\n\tposition: ", ";\n    display: flex;\n    /* align-items: flex-end; */\n\tflex-direction: column;\n\theight: auto;\n\twidth: auto;\n\tz-index: 999;\n    ", "\n    ", "\n"])), function (pr) { return pr.fixed ? 'fixed' : 'relative'; }, function (_a) {
    var position = _a.position, theme = _a.theme, fixed = _a.fixed;
    return (position && fixed ? getPosition(position) : theme.toast.defaults.position);
}, function (_a) {
    var position = _a.position, fixed = _a.fixed;
    return (position && fixed !== true ? getFlexPosition(position) : '');
});
ToastContainer.defaultProps = {
    theme: defaultTheme$1
};
var Toast = Ye('div')(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n    cursor: pointer;\n\tdisplay: flex;\n    flex-direction: column;\n    position: relative;\n\twidth: fit-content;\n    height: auto;\n    padding: 12px;\n    margin: 10px;\n\tmin-width: 250px;\n    background-color:", ";\n    border-radius: 3px;\n    -webkit-box-shadow: 0 0 10px", ";\n\t-moz-box-shadow: 0 0 10px ", ";\n\tbox-shadow: 0 0 10px ", ";\n\t-webkit-transition: opacity 1s ease 0.5s;\n\t-moz-transition: opacity 1s ease 0.5s;\n\ttransition: opacity 1s ease 0.5s;\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\tuser-select: none;\n    border: solid 4px ", ";\n    ", "\n"], ["\n    cursor: pointer;\n\tdisplay: flex;\n    flex-direction: column;\n    position: relative;\n\twidth: fit-content;\n    height: auto;\n    padding: 12px;\n    margin: 10px;\n\tmin-width: 250px;\n    background-color:", ";\n    border-radius: 3px;\n    -webkit-box-shadow: 0 0 10px", ";\n\t-moz-box-shadow: 0 0 10px ", ";\n\tbox-shadow: 0 0 10px ", ";\n\t-webkit-transition: opacity 1s ease 0.5s;\n\t-moz-transition: opacity 1s ease 0.5s;\n\ttransition: opacity 1s ease 0.5s;\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\tuser-select: none;\n    border: solid 4px ", ";\n    ", "\n"])), function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? '' : _b;
    return (theme.toast.statusColor[variant].bgColor);
}, function (_a) {
    var theme = _a.theme, shadowColor = _a.shadowColor;
    return (shadowColor ? shadowColor : theme.toast.defaults.shadowColor);
}, function (_a) {
    var theme = _a.theme, shadowColor = _a.shadowColor;
    return (shadowColor ? shadowColor : theme.toast.defaults.shadowColor);
}, function (_a) {
    var theme = _a.theme, shadowColor = _a.shadowColor;
    return (shadowColor ? shadowColor : theme.toast.defaults.shadowColor);
}, function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? '' : _b, borderColor = _a.borderColor;
    return (borderColor ? borderColor : theme.toast.statusColor[variant].color);
}, function (_a) {
    var borderPosition = _a.borderPosition;
    return (getBorder(borderPosition));
});
var ToastHeader = Ye('div')(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n    display: flex;\n    flex-shrink: 0;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0.5rem;\n    border-bottom: 1px solid ", ";\n    border-top-left-radius: calc(3px - 1px);\n    border-top-right-radius: calc(3px - 1px);\n"], ["\n    display: flex;\n    flex-shrink: 0;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0.5rem;\n    border-bottom: 1px solid ", ";\n    border-top-left-radius: calc(3px - 1px);\n    border-top-right-radius: calc(3px - 1px);\n"])), function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? '' : _b, borderColor = _a.borderColor;
    return (borderColor ? borderColor : theme.toast.statusColor[variant].borderColor);
});
var ToastBody = Ye('div')(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n    position: relative;\n    flex: 1 1 auto;\n    padding: 0.5rem;\n"], ["\n    position: relative;\n    flex: 1 1 auto;\n    padding: 0.5rem;\n"])));
Toast.displayName = "Toast";
Toast.defaultProps = {
    theme: defaultTheme$1
};
ToastHeader.defaultProps = {
    theme: defaultTheme$1
};
var templateObject_1$g, templateObject_2$d, templateObject_3$d, templateObject_4$a, templateObject_5$7, templateObject_6$5, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19;

var Toast$1 = React.memo(React.forwardRef(function (props, ref) {
    var variant = props.variant, title = props.title, message = props.message, titleColor = props.titleColor, messageColor = props.messageColor, restProps = __rest(props, ["variant", "title", "message", "titleColor", "messageColor"]);
    var color = variant === 'success' ? '#008000' : variant === 'info' ? '#126AFA' : variant === 'danger' ? '#cc0000' : variant === 'warning' ? '#ffa726' : '';
    return (React.createElement(ToastContainer, __assign({ ref: ref, variant: variant }, restProps),
        React.createElement(Toast, __assign({ variant: variant }, restProps),
            React.createElement(ToastHeader, __assign({}, props),
                React.createElement(Text$1, { textSize: "S", textColor: titleColor ? titleColor : color }, title)),
            React.createElement(ToastBody, null,
                React.createElement(Text$1, { textSize: "XS", textColor: messageColor ? messageColor : color }, message)))));
}));
Toast$1.displayName = 'Toast';
Toast$1.Style = ToastContainer;
Toast$1.defaultProps = {
    variant: 'success',
    fixed: false,
    borderPosition: 'top'
};

var getHeight = function (_a) {
    var _b;
    var theme = _a.theme, _c = _a.size, size = _c === void 0 ? 'S' : _c;
    return ((_b = theme === null || theme === void 0 ? void 0 : theme.toggle) === null || _b === void 0 ? void 0 : _b.sizes[size]);
};
var getWidth = function (props) { return "calc(" + getHeight(props) + " * 2)"; };
var ToggleWrapper = Ye('div')(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n    position: relative;\n    width: ", ";\n    height: ", ";\n    border-radius: 15px;\n    &:focus-within {\n        box-shadow: 0 0 0 1pt ", ";\n    }\n    & > * {\n        width: 100%;\n        height: 100%;\n        border-radius: 15px;\n    }\n"], ["\n    position: relative;\n    width: ", ";\n    height: ", ";\n    border-radius: 15px;\n    &:focus-within {\n        box-shadow: 0 0 0 1pt ", ";\n    }\n    & > * {\n        width: 100%;\n        height: 100%;\n        border-radius: 15px;\n    }\n"])), getWidth, getHeight, function (_a) {
    var theme = _a.theme;
    return (theme.toggle.borderColor);
});
ToggleWrapper.defaultProps = {
    theme: defaultTheme$1
};
var Circle = Ye('div')(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n    z-index: 1;\n    position: absolute;\n    background-color: ", ";\n    &::after {\n        content: '';\n        margin: 3px;\n        display: block;\n        border-radius: 50%;\n        background: ", ";\n        transition: 0.2s;\n        width: ", ";\n        height: ", ";\n    }\n"], ["\n    z-index: 1;\n    position: absolute;\n    background-color: ", ";\n    &::after {\n        content: '';\n        margin: 3px;\n        display: block;\n        border-radius: 50%;\n        background: ", ";\n        transition: 0.2s;\n        width: ", ";\n        height: ", ";\n    }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.toggle.backgroundColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.toggle.borderColor;
}, function (props) { return "calc(" + getHeight(props) + " - 6px) "; }, function (props) { return "calc(" + getHeight(props) + " - 6px) "; });
Circle.defaultProps = {
    theme: defaultTheme$1
};
var Checkbox = Ye('input').attrs({ type: 'checkbox' })(templateObject_3$e || (templateObject_3$e = __makeTemplateObject(["\n    opacity: 0;\n    z-index: 2;\n    margin: 0;\n    position: absolute;\n    cursor: pointer;\n    &:focus {\n        outline: none;\n    }\n    &:disabled {\n        cursor: not-allowed;\n        & + ", " {\n            background: ", ";\n        }\n    }\n    &:checked + ", " {\n        background: ", ";\n        &::after {\n            margin-left: ", ";\n        }\n    }\n"], ["\n    opacity: 0;\n    z-index: 2;\n    margin: 0;\n    position: absolute;\n    cursor: pointer;\n    &:focus {\n        outline: none;\n    }\n    &:disabled {\n        cursor: not-allowed;\n        & + ", " {\n            background: ", ";\n        }\n    }\n    &:checked + ", " {\n        background: ", ";\n        &::after {\n            margin-left: ", ";\n        }\n    }\n"])), Circle, function (_a) {
    var theme = _a.theme;
    return theme.toggle.disabledBackgroundColor;
}, Circle, function (_a) {
    var theme = _a.theme;
    return theme.toggle.checkedBackgroundColor;
}, function (props) { return "calc(" + getWidth(props) + " - (" + getHeight(props) + ") + 3px) "; });
Checkbox.defaultProps = {
    theme: defaultTheme$1
};
var templateObject_1$h, templateObject_2$e, templateObject_3$e;

var Toggle = React.memo(React.forwardRef(function (props, ref) {
    var size = props.size, required = props.required, onChange = props.onChange, restProps = __rest(props, ["size", "required", "onChange"]);
    var changeHandler = React.useCallback(function (e) {
        e.stopPropagation();
        onChange && onChange(e);
    }, [onChange]);
    return (React.createElement(ToggleWrapper, { size: size, disabled: restProps.disabled },
        React.createElement(Checkbox, __assign({ ref: ref, size: size, required: required, onChange: changeHandler }, restProps)),
        React.createElement(Circle, { size: size })));
}));
Toggle.displayName = 'Toggle';
Toggle.Style = ToggleWrapper;
Toggle.defaultProps = {
    required: false,
};

/*!
 * Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
var faBars = {
  prefix: 'fas',
  iconName: 'bars',
  icon: [448, 512, [], "f0c9", "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"]
};
var faTimes = {
  prefix: 'fas',
  iconName: 'times',
  icon: [352, 512, [], "f00d", "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"]
};

/*!
 * Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var noop = function noop() {};

var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER = null;
var _PERFORMANCE = {
  mark: noop,
  measure: noop
};

try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}

var _ref = _WINDOW.navigator || {},
    _ref$userAgent = _ref.userAgent,
    userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
var DEFAULT_FAMILY_PREFIX = 'fa';
var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
var DATA_FA_I2SVG = 'data-fa-i2svg';
var PRODUCTION = function () {
  try {
    return process.env.NODE_ENV === 'production';
  } catch (e) {
    return false;
  }
}();
var DUOTONE_CLASSES = {
  GROUP: 'group',
  SWAP_OPACITY: 'swap-opacity',
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
};

var initial = WINDOW.FontAwesomeConfig || {};

function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector('script[' + attr + ']');

  if (element) {
    return element.getAttribute(attr);
  }
}

function coerce(val) {
  // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
  // We'll assume that this is an indication that it should be toggled to true
  // For example <script data-search-pseudo-elements src="..."></script>
  if (val === '') return true;
  if (val === 'false') return false;
  if (val === 'true') return true;
  return val;
}

if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
  var attrs = [['data-family-prefix', 'familyPrefix'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
  attrs.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        attr = _ref2[0],
        key = _ref2[1];

    var val = coerce(getAttrConfig(attr));

    if (val !== undefined && val !== null) {
      initial[key] = val;
    }
  });
}

var _default = {
  familyPrefix: DEFAULT_FAMILY_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: 'async',
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
};

var _config = _objectSpread({}, _default, initial);

if (!_config.autoReplaceSvg) _config.observeMutations = false;

var config = _objectSpread({}, _config);

WINDOW.FontAwesomeConfig = config;

var w$3 = WINDOW || {};
if (!w$3[NAMESPACE_IDENTIFIER]) w$3[NAMESPACE_IDENTIFIER] = {};
if (!w$3[NAMESPACE_IDENTIFIER].styles) w$3[NAMESPACE_IDENTIFIER].styles = {};
if (!w$3[NAMESPACE_IDENTIFIER].hooks) w$3[NAMESPACE_IDENTIFIER].hooks = {};
if (!w$3[NAMESPACE_IDENTIFIER].shims) w$3[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w$3[NAMESPACE_IDENTIFIER];

var functions = [];

var listener = function listener() {
  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
  loaded = 1;
  functions.map(function (fn) {
    return fn();
  });
};

var loaded = false;

if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
}

var isNode = typeof global !== 'undefined' && typeof global.process !== 'undefined' && typeof global.process.emit === 'function';
var asyncSetTimer = typeof setImmediate === 'undefined' ? setTimeout : setImmediate;
var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};
function insertCss(css) {
  if (!css || !IS_DOM) {
    return;
  }

  var style = DOCUMENT.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;

  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || '').toUpperCase();

    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }

  DOCUMENT.head.insertBefore(style, beforeChild);
  return css;
}
var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function nextUniqueId() {
  var size = 12;
  var id = '';

  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }

  return id;
}
function htmlEscape(str) {
  return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
    return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
  }, '').trim();
}
function joinStyles(styles) {
  return Object.keys(styles || {}).reduce(function (acc, styleName) {
    return acc + "".concat(styleName, ": ").concat(styles[styleName], ";");
  }, '');
}
function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
function transformForSvg(_ref) {
  var transform = _ref.transform,
      containerWidth = _ref.containerWidth,
      iconWidth = _ref.iconWidth;
  var outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  var inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  var path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer: outer,
    inner: inner,
    path: path
  };
}

var ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};

function fillBlack(abstract) {
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (abstract.attributes && (abstract.attributes.fill || force)) {
    abstract.attributes.fill = 'black';
  }

  return abstract;
}

function deGroup(abstract) {
  if (abstract.tag === 'g') {
    return abstract.children;
  } else {
    return [abstract];
  }
}

function makeIconMasking (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      mask = _ref.mask,
      explicitMaskId = _ref.maskId,
      transform = _ref.transform;
  var mainWidth = main.width,
      mainPath = main.icon;
  var maskWidth = mask.width,
      maskPath = mask.icon;
  var trans = transformForSvg({
    transform: transform,
    containerWidth: maskWidth,
    iconWidth: mainWidth
  });
  var maskRect = {
    tag: 'rect',
    attributes: _objectSpread({}, ALL_SPACE, {
      fill: 'white'
    })
  };
  var maskInnerGroupChildrenMixin = mainPath.children ? {
    children: mainPath.children.map(fillBlack)
  } : {};
  var maskInnerGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.inner),
    children: [fillBlack(_objectSpread({
      tag: mainPath.tag,
      attributes: _objectSpread({}, mainPath.attributes, trans.path)
    }, maskInnerGroupChildrenMixin))]
  };
  var maskOuterGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.outer),
    children: [maskInnerGroup]
  };
  var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
  var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
  var maskTag = {
    tag: 'mask',
    attributes: _objectSpread({}, ALL_SPACE, {
      id: maskId,
      maskUnits: 'userSpaceOnUse',
      maskContentUnits: 'userSpaceOnUse'
    }),
    children: [maskRect, maskOuterGroup]
  };
  var defs = {
    tag: 'defs',
    children: [{
      tag: 'clipPath',
      attributes: {
        id: clipId
      },
      children: deGroup(maskPath)
    }, maskTag]
  };
  children.push(defs, {
    tag: 'rect',
    attributes: _objectSpread({
      fill: 'currentColor',
      'clip-path': "url(#".concat(clipId, ")"),
      mask: "url(#".concat(maskId, ")")
    }, ALL_SPACE)
  });
  return {
    children: children,
    attributes: attributes
  };
}

function makeIconStandard (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      transform = _ref.transform,
      styles = _ref.styles;
  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  if (transformIsMeaningful(transform)) {
    var trans = transformForSvg({
      transform: transform,
      containerWidth: main.width,
      iconWidth: main.width
    });
    children.push({
      tag: 'g',
      attributes: _objectSpread({}, trans.outer),
      children: [{
        tag: 'g',
        attributes: _objectSpread({}, trans.inner),
        children: [{
          tag: main.icon.tag,
          children: main.icon.children,
          attributes: _objectSpread({}, main.icon.attributes, trans.path)
        }]
      }]
    });
  } else {
    children.push(main.icon);
  }

  return {
    children: children,
    attributes: attributes
  };
}

function asIcon (_ref) {
  var children = _ref.children,
      main = _ref.main,
      mask = _ref.mask,
      attributes = _ref.attributes,
      styles = _ref.styles,
      transform = _ref.transform;

  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width,
        height = main.height;
    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes['style'] = joinStyles(_objectSpread({}, styles, {
      'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
    }));
  }

  return [{
    tag: 'svg',
    attributes: attributes,
    children: children
  }];
}

function asSymbol (_ref) {
  var prefix = _ref.prefix,
      iconName = _ref.iconName,
      children = _ref.children,
      attributes = _ref.attributes,
      symbol = _ref.symbol;
  var id = symbol === true ? "".concat(prefix, "-").concat(config.familyPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _objectSpread({}, attributes, {
        id: id
      }),
      children: children
    }]
  }];
}

function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons,
      main = _params$icons.main,
      mask = _params$icons.mask,
      prefix = params.prefix,
      iconName = params.iconName,
      transform = params.transform,
      symbol = params.symbol,
      title = params.title,
      maskId = params.maskId,
      titleId = params.titleId,
      extra = params.extra,
      _params$watchable = params.watchable,
      watchable = _params$watchable === void 0 ? false : _params$watchable;

  var _ref = mask.found ? mask : main,
      width = _ref.width,
      height = _ref.height;

  var isUploadedIcon = prefix === 'fak';
  var widthClass = isUploadedIcon ? '' : "fa-w-".concat(Math.ceil(width / height * 16));
  var attrClass = [config.replacementClass, iconName ? "".concat(config.familyPrefix, "-").concat(iconName) : '', widthClass].filter(function (c) {
    return extra.classes.indexOf(c) === -1;
  }).filter(function (c) {
    return c !== '' || !!c;
  }).concat(extra.classes).join(' ');
  var content = {
    children: [],
    attributes: _objectSpread({}, extra.attributes, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': extra.attributes.role || 'img',
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': "0 0 ".concat(width, " ").concat(height)
    })
  };
  var uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf('fa-fw') ? {
    width: "".concat(width / height * 16 * 0.0625, "em")
  } : {};

  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }

  if (title) content.children.push({
    tag: 'title',
    attributes: {
      id: content.attributes['aria-labelledby'] || "title-".concat(titleId || nextUniqueId())
    },
    children: [title]
  });

  var args = _objectSpread({}, content, {
    prefix: prefix,
    iconName: iconName,
    main: main,
    mask: mask,
    maskId: maskId,
    transform: transform,
    symbol: symbol,
    styles: _objectSpread({}, uploadedIconWidthStyle, extra.styles)
  });

  var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
      children = _ref2.children,
      attributes = _ref2.attributes;

  args.children = children;
  args.attributes = attributes;

  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}

var noop$1 = function noop() {};

var p$2 = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};

/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */

var bindInternal4 = function bindInternal4(func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};

/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */


var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i,
      key,
      result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};

function defineIcons(prefix, icons) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _params$skipHooks = params.skipHooks,
      skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
  var normalized = Object.keys(icons).reduce(function (acc, iconName) {
    var icon = icons[iconName];
    var expanded = !!icon.icon;

    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }

    return acc;
  }, {});

  if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
    namespace.hooks.addPack(prefix, normalized);
  } else {
    namespace.styles[prefix] = _objectSpread({}, namespace.styles[prefix] || {}, normalized);
  }
  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll easy the upgrade process for our users by automatically defining
   * this as well.
   */


  if (prefix === 'fas') {
    defineIcons('fa', icons);
  }
}

var styles = namespace.styles,
    shims = namespace.shims;
var build = function build() {
  var lookup = function lookup(reducer) {
    return reduce(styles, function (o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };

  lookup(function (acc, icon, iconName) {
    if (icon[3]) {
      acc[icon[3]] = iconName;
    }

    return acc;
  });
  lookup(function (acc, icon, iconName) {
    var ligatures = icon[2];
    acc[iconName] = iconName;
    ligatures.forEach(function (ligature) {
      acc[ligature] = iconName;
    });
    return acc;
  });
  var hasRegular = 'far' in styles;
  reduce(shims, function (acc, shim) {
    var oldName = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];

    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }

    acc[oldName] = {
      prefix: prefix,
      iconName: iconName
    };
    return acc;
  }, {});
};
build();

var styles$1 = namespace.styles;
function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix: prefix,
      iconName: iconName,
      icon: mapping[prefix][iconName]
    };
  }
}

function toHtml(abstractNodes) {
  var tag = abstractNodes.tag,
      _abstractNodes$attrib = abstractNodes.attributes,
      attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
      _abstractNodes$childr = abstractNodes.children,
      children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
  }
}

var parseTransformString = function parseTransformString(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };

  if (!transformString) {
    return transform;
  } else {
    return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
      var parts = n.toLowerCase().split('-');
      var first = parts[0];
      var rest = parts.slice(1).join('-');

      if (first && rest === 'h') {
        acc.flipX = true;
        return acc;
      }

      if (first && rest === 'v') {
        acc.flipY = true;
        return acc;
      }

      rest = parseFloat(rest);

      if (isNaN(rest)) {
        return acc;
      }

      switch (first) {
        case 'grow':
          acc.size = acc.size + rest;
          break;

        case 'shrink':
          acc.size = acc.size - rest;
          break;

        case 'left':
          acc.x = acc.x - rest;
          break;

        case 'right':
          acc.x = acc.x + rest;
          break;

        case 'up':
          acc.y = acc.y - rest;
          break;

        case 'down':
          acc.y = acc.y + rest;
          break;

        case 'rotate':
          acc.rotate = acc.rotate + rest;
          break;
      }

      return acc;
    }, transform);
  }
};

function MissingIcon(error) {
  this.name = 'MissingIcon';
  this.message = error || 'Icon unavailable';
  this.stack = new Error().stack;
}
MissingIcon.prototype = Object.create(Error.prototype);
MissingIcon.prototype.constructor = MissingIcon;

var FILL = {
  fill: 'currentColor'
};
var ANIMATION_BASE = {
  attributeType: 'XML',
  repeatCount: 'indefinite',
  dur: '2s'
};
var RING = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
  })
};

var OPACITY_ANIMATE = _objectSpread({}, ANIMATION_BASE, {
  attributeName: 'opacity'
});

var DOT = {
  tag: 'circle',
  attributes: _objectSpread({}, FILL, {
    cx: '256',
    cy: '364',
    r: '28'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, ANIMATION_BASE, {
      attributeName: 'r',
      values: '28;14;28;28;14;28;'
    })
  }, {
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;1;1;0;1;'
    })
  }]
};
var QUESTION = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '1',
    d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;0;0;0;1;'
    })
  }]
};
var EXCLAMATION = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '0',
    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '0;0;1;1;0;0;'
    })
  }]
};

var styles$2 = namespace.styles;
function asFoundIcon(icon) {
  var width = icon[0];
  var height = icon[1];

  var _icon$slice = icon.slice(4),
      _icon$slice2 = _slicedToArray(_icon$slice, 1),
      vectorData = _icon$slice2[0];

  var element = null;

  if (Array.isArray(vectorData)) {
    element = {
      tag: 'g',
      attributes: {
        class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
      },
      children: [{
        tag: 'path',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
          fill: 'currentColor',
          d: vectorData[0]
        }
      }, {
        tag: 'path',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
          fill: 'currentColor',
          d: vectorData[1]
        }
      }]
    };
  } else {
    element = {
      tag: 'path',
      attributes: {
        fill: 'currentColor',
        d: vectorData
      }
    };
  }

  return {
    found: true,
    width: width,
    height: height,
    icon: element
  };
}

var styles$3 = namespace.styles;

var baseStyles = "svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}";

function css () {
  var dfp = DEFAULT_FAMILY_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config.familyPrefix;
  var rc = config.replacementClass;
  var s = baseStyles;

  if (fp !== dfp || rc !== drc) {
    var dPatt = new RegExp("\\.".concat(dfp, "\\-"), 'g');
    var customPropPatt = new RegExp("\\--".concat(dfp, "\\-"), 'g');
    var rPatt = new RegExp("\\.".concat(drc), 'g');
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }

  return s;
}

var Library =
/*#__PURE__*/
function () {
  function Library() {
    _classCallCheck(this, Library);

    this.definitions = {};
  }

  _createClass(Library, [{
    key: "add",
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }

      var additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach(function (key) {
        _this.definitions[key] = _objectSpread({}, _this.definitions[key] || {}, additions[key]);
        defineIcons(key, additions[key]);
        build();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
      Object.keys(normalized).map(function (key) {
        var _normalized$key = normalized[key],
            prefix = _normalized$key.prefix,
            iconName = _normalized$key.iconName,
            icon = _normalized$key.icon;
        if (!additions[prefix]) additions[prefix] = {};
        additions[prefix][iconName] = icon;
      });
      return additions;
    }
  }]);

  return Library;
}();

function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());

    _cssInserted = true;
  }
}

function apiObject(val, abstractCreator) {
  Object.defineProperty(val, 'abstract', {
    get: abstractCreator
  });
  Object.defineProperty(val, 'html', {
    get: function get() {
      return val.abstract.map(function (a) {
        return toHtml(a);
      });
    }
  });
  Object.defineProperty(val, 'node', {
    get: function get() {
      if (!IS_DOM) return;
      var container = DOCUMENT.createElement('div');
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}

function findIconDefinition(iconLookup) {
  var _iconLookup$prefix = iconLookup.prefix,
      prefix = _iconLookup$prefix === void 0 ? 'fa' : _iconLookup$prefix,
      iconName = iconLookup.iconName;
  if (!iconName) return;
  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}

function resolveIcons(next) {
  return function (maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    var mask = params.mask;

    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }

    return next(iconDefinition, _objectSpread({}, params, {
      mask: mask
    }));
  };
}

var library = new Library();
var _cssInserted = false;
var parse = {
  transform: function transform(transformString) {
    return parseTransformString(transformString);
  }
};
var icon = resolveIcons(function (iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform = params.transform,
      transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
      _params$symbol = params.symbol,
      symbol = _params$symbol === void 0 ? false : _params$symbol,
      _params$mask = params.mask,
      mask = _params$mask === void 0 ? null : _params$mask,
      _params$maskId = params.maskId,
      maskId = _params$maskId === void 0 ? null : _params$maskId,
      _params$title = params.title,
      title = _params$title === void 0 ? null : _params$title,
      _params$titleId = params.titleId,
      titleId = _params$titleId === void 0 ? null : _params$titleId,
      _params$classes = params.classes,
      classes = _params$classes === void 0 ? [] : _params$classes,
      _params$attributes = params.attributes,
      attributes = _params$attributes === void 0 ? {} : _params$attributes,
      _params$styles = params.styles,
      styles = _params$styles === void 0 ? {} : _params$styles;
  if (!iconDefinition) return;
  var prefix = iconDefinition.prefix,
      iconName = iconDefinition.iconName,
      icon = iconDefinition.icon;
  return apiObject(_objectSpread({
    type: 'icon'
  }, iconDefinition), function () {
    ensureCss();

    if (config.autoA11y) {
      if (title) {
        attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
      } else {
        attributes['aria-hidden'] = 'true';
        attributes['focusable'] = 'false';
      }
    }

    return makeInlineSvgAbstract({
      icons: {
        main: asFoundIcon(icon),
        mask: mask ? asFoundIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix: prefix,
      iconName: iconName,
      transform: _objectSpread({}, meaninglessTransform, transform),
      symbol: symbol,
      title: title,
      maskId: maskId,
      titleId: titleId,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: classes
      }
    });
  });
});

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$3="function"===typeof Symbol&&Symbol.for,c$2=b$3?Symbol.for("react.element"):60103,d$2=b$3?Symbol.for("react.portal"):60106,e$2=b$3?Symbol.for("react.fragment"):60107,f$2=b$3?Symbol.for("react.strict_mode"):60108,g$3=b$3?Symbol.for("react.profiler"):60114,h$2=b$3?Symbol.for("react.provider"):60109,k$3=b$3?Symbol.for("react.context"):60110,l$2=b$3?Symbol.for("react.async_mode"):60111,m$2=b$3?Symbol.for("react.concurrent_mode"):60111,n$2=b$3?Symbol.for("react.forward_ref"):60112,p$3=b$3?Symbol.for("react.suspense"):60113,q$3=b$3?
Symbol.for("react.suspense_list"):60120,r$2=b$3?Symbol.for("react.memo"):60115,t$1=b$3?Symbol.for("react.lazy"):60116,v$3=b$3?Symbol.for("react.block"):60121,w$4=b$3?Symbol.for("react.fundamental"):60117,x$3=b$3?Symbol.for("react.responder"):60118,y$3=b$3?Symbol.for("react.scope"):60119;
function z$3(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c$2:switch(a=a.type,a){case l$2:case m$2:case e$2:case g$3:case f$2:case p$3:return a;default:switch(a=a&&a.$$typeof,a){case k$3:case n$2:case t$1:case r$2:case h$2:return a;default:return u}}case d$2:return u}}}function A$3(a){return z$3(a)===m$2}var AsyncMode$1=l$2;var ConcurrentMode$1=m$2;var ContextConsumer$2=k$3;var ContextProvider$2=h$2;var Element$3=c$2;var ForwardRef$2=n$2;var Fragment$2=e$2;var Lazy$2=t$1;var Memo$2=r$2;var Portal$2=d$2;
var Profiler$2=g$3;var StrictMode$2=f$2;var Suspense$2=p$3;var isAsyncMode$2=function(a){return A$3(a)||z$3(a)===l$2};var isConcurrentMode$2=A$3;var isContextConsumer$2=function(a){return z$3(a)===k$3};var isContextProvider$2=function(a){return z$3(a)===h$2};var isElement$2=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c$2};var isForwardRef$2=function(a){return z$3(a)===n$2};var isFragment$2=function(a){return z$3(a)===e$2};var isLazy$2=function(a){return z$3(a)===t$1};
var isMemo$2=function(a){return z$3(a)===r$2};var isPortal$2=function(a){return z$3(a)===d$2};var isProfiler$2=function(a){return z$3(a)===g$3};var isStrictMode$2=function(a){return z$3(a)===f$2};var isSuspense$2=function(a){return z$3(a)===p$3};
var isValidElementType$2=function(a){return "string"===typeof a||"function"===typeof a||a===e$2||a===m$2||a===g$3||a===f$2||a===p$3||a===q$3||"object"===typeof a&&null!==a&&(a.$$typeof===t$1||a.$$typeof===r$2||a.$$typeof===h$2||a.$$typeof===k$3||a.$$typeof===n$2||a.$$typeof===w$4||a.$$typeof===x$3||a.$$typeof===y$3||a.$$typeof===v$3)};var typeOf$2=z$3;

var reactIs_production_min$2 = {
	AsyncMode: AsyncMode$1,
	ConcurrentMode: ConcurrentMode$1,
	ContextConsumer: ContextConsumer$2,
	ContextProvider: ContextProvider$2,
	Element: Element$3,
	ForwardRef: ForwardRef$2,
	Fragment: Fragment$2,
	Lazy: Lazy$2,
	Memo: Memo$2,
	Portal: Portal$2,
	Profiler: Profiler$2,
	StrictMode: StrictMode$2,
	Suspense: Suspense$2,
	isAsyncMode: isAsyncMode$2,
	isConcurrentMode: isConcurrentMode$2,
	isContextConsumer: isContextConsumer$2,
	isContextProvider: isContextProvider$2,
	isElement: isElement$2,
	isForwardRef: isForwardRef$2,
	isFragment: isFragment$2,
	isLazy: isLazy$2,
	isMemo: isMemo$2,
	isPortal: isPortal$2,
	isProfiler: isProfiler$2,
	isStrictMode: isStrictMode$2,
	isSuspense: isSuspense$2,
	isValidElementType: isValidElementType$2,
	typeOf: typeOf$2
};

var reactIs_development$2 = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});
var reactIs_development_1$2 = reactIs_development$2.AsyncMode;
var reactIs_development_2$2 = reactIs_development$2.ConcurrentMode;
var reactIs_development_3$2 = reactIs_development$2.ContextConsumer;
var reactIs_development_4$2 = reactIs_development$2.ContextProvider;
var reactIs_development_5$2 = reactIs_development$2.Element;
var reactIs_development_6$2 = reactIs_development$2.ForwardRef;
var reactIs_development_7$2 = reactIs_development$2.Fragment;
var reactIs_development_8$2 = reactIs_development$2.Lazy;
var reactIs_development_9$2 = reactIs_development$2.Memo;
var reactIs_development_10$2 = reactIs_development$2.Portal;
var reactIs_development_11$2 = reactIs_development$2.Profiler;
var reactIs_development_12$2 = reactIs_development$2.StrictMode;
var reactIs_development_13$2 = reactIs_development$2.Suspense;
var reactIs_development_14$2 = reactIs_development$2.isAsyncMode;
var reactIs_development_15$2 = reactIs_development$2.isConcurrentMode;
var reactIs_development_16$2 = reactIs_development$2.isContextConsumer;
var reactIs_development_17$2 = reactIs_development$2.isContextProvider;
var reactIs_development_18$2 = reactIs_development$2.isElement;
var reactIs_development_19$2 = reactIs_development$2.isForwardRef;
var reactIs_development_20$2 = reactIs_development$2.isFragment;
var reactIs_development_21$2 = reactIs_development$2.isLazy;
var reactIs_development_22$2 = reactIs_development$2.isMemo;
var reactIs_development_23$2 = reactIs_development$2.isPortal;
var reactIs_development_24$2 = reactIs_development$2.isProfiler;
var reactIs_development_25$2 = reactIs_development$2.isStrictMode;
var reactIs_development_26$2 = reactIs_development$2.isSuspense;
var reactIs_development_27$1 = reactIs_development$2.isValidElementType;
var reactIs_development_28$1 = reactIs_development$2.typeOf;

var reactIs$2 = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min$2;
} else {
  module.exports = reactIs_development$2;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols$1) {
			symbols = getOwnPropertySymbols$1(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs$2.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs$2;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

// Get CSS class list from a props object
function classList(props) {
  var _classes;

  var spin = props.spin,
      pulse = props.pulse,
      fixedWidth = props.fixedWidth,
      inverse = props.inverse,
      border = props.border,
      listItem = props.listItem,
      flip = props.flip,
      size = props.size,
      rotation = props.rotation,
      pull = props.pull; // map of CSS class names to properties

  var classes = (_classes = {
    'fa-spin': spin,
    'fa-pulse': pulse,
    'fa-fw': fixedWidth,
    'fa-inverse': inverse,
    'fa-border': border,
    'fa-li': listItem,
    'fa-flip-horizontal': flip === 'horizontal' || flip === 'both',
    'fa-flip-vertical': flip === 'vertical' || flip === 'both'
  }, _defineProperty$1(_classes, "fa-".concat(size), typeof size !== 'undefined' && size !== null), _defineProperty$1(_classes, "fa-rotate-".concat(rotation), typeof rotation !== 'undefined' && rotation !== null && rotation !== 0), _defineProperty$1(_classes, "fa-pull-".concat(pull), typeof pull !== 'undefined' && pull !== null), _defineProperty$1(_classes, 'fa-swap-opacity', props.swapOpacity), _classes); // map over all the keys in the classes object
  // return an array of the keys where the value for the key is not null

  return Object.keys(classes).map(function (key) {
    return classes[key] ? key : null;
  }).filter(function (key) {
    return key;
  });
}

// Camelize taken from humps
// humps is copyright © 2012+ Dom Christie
// Released under the MIT license.
// Performant way to determine if object coerces to a number
function _isNumerical(obj) {
  obj = obj - 0; // eslint-disable-next-line no-self-compare

  return obj === obj;
}

function camelize(string) {
  if (_isNumerical(string)) {
    return string;
  } // eslint-disable-next-line no-useless-escape


  string = string.replace(/[\-_\s]+(.)?/g, function (match, chr) {
    return chr ? chr.toUpperCase() : '';
  }); // Ensure 1st char is always lowercase

  return string.substr(0, 1).toLowerCase() + string.substr(1);
}

function capitalize(val) {
  return val.charAt(0).toUpperCase() + val.slice(1);
}

function styleToObject(style) {
  return style.split(';').map(function (s) {
    return s.trim();
  }).filter(function (s) {
    return s;
  }).reduce(function (acc, pair) {
    var i = pair.indexOf(':');
    var prop = camelize(pair.slice(0, i));
    var value = pair.slice(i + 1).trim();
    prop.startsWith('webkit') ? acc[capitalize(prop)] = value : acc[prop] = value;
    return acc;
  }, {});
}

function convert(createElement, element) {
  var extraProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (typeof element === 'string') {
    return element;
  }

  var children = (element.children || []).map(function (child) {
    return convert(createElement, child);
  });
  /* eslint-disable dot-notation */

  var mixins = Object.keys(element.attributes || {}).reduce(function (acc, key) {
    var val = element.attributes[key];

    switch (key) {
      case 'class':
        acc.attrs['className'] = val;
        delete element.attributes['class'];
        break;

      case 'style':
        acc.attrs['style'] = styleToObject(val);
        break;

      default:
        if (key.indexOf('aria-') === 0 || key.indexOf('data-') === 0) {
          acc.attrs[key.toLowerCase()] = val;
        } else {
          acc.attrs[camelize(key)] = val;
        }

    }

    return acc;
  }, {
    attrs: {}
  });

  var _extraProps$style = extraProps.style,
      existingStyle = _extraProps$style === void 0 ? {} : _extraProps$style,
      remaining = _objectWithoutProperties(extraProps, ["style"]);

  mixins.attrs['style'] = _objectSpread2({}, mixins.attrs['style'], {}, existingStyle);
  /* eslint-enable */

  return createElement.apply(void 0, [element.tag, _objectSpread2({}, mixins.attrs, {}, remaining)].concat(_toConsumableArray(children)));
}

var PRODUCTION$1 = false;

try {
  PRODUCTION$1 = process.env.NODE_ENV === 'production';
} catch (e) {}

function log () {
  if (!PRODUCTION$1 && console && typeof console.error === 'function') {
    var _console;

    (_console = console).error.apply(_console, arguments);
  }
}

function normalizeIconArgs(icon) {
  if (parse.icon) {
    return parse.icon(icon);
  } // if the icon is null, there's nothing to do


  if (icon === null) {
    return null;
  } // if the icon is an object and has a prefix and an icon name, return it


  if (_typeof(icon) === 'object' && icon.prefix && icon.iconName) {
    return icon;
  } // if it's an array with length of two


  if (Array.isArray(icon) && icon.length === 2) {
    // use the first item as prefix, second as icon name
    return {
      prefix: icon[0],
      iconName: icon[1]
    };
  } // if it's a string, use it as the icon name


  if (typeof icon === 'string') {
    return {
      prefix: 'fas',
      iconName: icon
    };
  }
}

// creates an object with a key of key
// and a value of value
// if certain conditions are met
function objectWithKey(key, value) {
  // if the value is a non-empty array
  // or it's not an array but it is truthy
  // then create the object with the key and the value
  // if not, return an empty array
  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? _defineProperty$1({}, key, value) : {};
}

function FontAwesomeIcon(_ref) {
  var forwardedRef = _ref.forwardedRef,
      props = _objectWithoutProperties(_ref, ["forwardedRef"]);

  var iconArgs = props.icon,
      maskArgs = props.mask,
      symbol = props.symbol,
      className = props.className,
      title = props.title,
      titleId = props.titleId;
  var iconLookup = normalizeIconArgs(iconArgs);
  var classes = objectWithKey('classes', [].concat(_toConsumableArray(classList(props)), _toConsumableArray(className.split(' '))));
  var transform = objectWithKey('transform', typeof props.transform === 'string' ? parse.transform(props.transform) : props.transform);
  var mask = objectWithKey('mask', normalizeIconArgs(maskArgs));
  var renderedIcon = icon(iconLookup, _objectSpread2({}, classes, {}, transform, {}, mask, {
    symbol: symbol,
    title: title,
    titleId: titleId
  }));

  if (!renderedIcon) {
    log('Could not find icon', iconLookup);
    return null;
  }

  var abstract = renderedIcon.abstract;
  var extraProps = {
    ref: forwardedRef
  };
  Object.keys(props).forEach(function (key) {
    // eslint-disable-next-line no-prototype-builtins
    if (!FontAwesomeIcon.defaultProps.hasOwnProperty(key)) {
      extraProps[key] = props[key];
    }
  });
  return convertCurry(abstract[0], extraProps);
}
FontAwesomeIcon.displayName = 'FontAwesomeIcon';
FontAwesomeIcon.propTypes = {
  border: propTypes.bool,
  className: propTypes.string,
  mask: propTypes.oneOfType([propTypes.object, propTypes.array, propTypes.string]),
  fixedWidth: propTypes.bool,
  inverse: propTypes.bool,
  flip: propTypes.oneOf(['horizontal', 'vertical', 'both']),
  icon: propTypes.oneOfType([propTypes.object, propTypes.array, propTypes.string]),
  listItem: propTypes.bool,
  pull: propTypes.oneOf(['right', 'left']),
  pulse: propTypes.bool,
  rotation: propTypes.oneOf([0, 90, 180, 270]),
  size: propTypes.oneOf(['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),
  spin: propTypes.bool,
  symbol: propTypes.oneOfType([propTypes.bool, propTypes.string]),
  title: propTypes.string,
  transform: propTypes.oneOfType([propTypes.string, propTypes.object]),
  swapOpacity: propTypes.bool
};
FontAwesomeIcon.defaultProps = {
  border: false,
  className: '',
  mask: null,
  fixedWidth: false,
  inverse: false,
  flip: null,
  icon: null,
  listItem: false,
  pull: null,
  pulse: false,
  rotation: null,
  size: null,
  spin: false,
  symbol: false,
  title: '',
  transform: null,
  swapOpacity: false
};
var convertCurry = convert.bind(null, React__default['default'].createElement);

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!hasClass(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}

function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}

var config$1 = {
  disabled: false
};

var timeoutsShape = process.env.NODE_ENV !== 'production' ? propTypes.oneOfType([propTypes.number, propTypes.shape({
  enter: propTypes.number,
  exit: propTypes.number,
  appear: propTypes.number
}).isRequired]) : null;
var classNamesShape = process.env.NODE_ENV !== 'production' ? propTypes.oneOfType([propTypes.string, propTypes.shape({
  enter: propTypes.string,
  exit: propTypes.string,
  active: propTypes.string
}), propTypes.shape({
  enter: propTypes.string,
  enterDone: propTypes.string,
  enterActive: propTypes.string,
  exit: propTypes.string,
  exitDone: propTypes.string,
  exitActive: propTypes.string
})]) : null;

var TransitionGroupContext = React__default['default'].createContext(null);

var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM__default['default'].findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config$1.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : ReactDOM__default['default'].findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config$1.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM__default['default'].findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = _objectWithoutPropertiesLoose$1(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      React__default['default'].createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : React__default['default'].cloneElement(React__default['default'].Children.only(children), childProps))
    );
  };

  return Transition;
}(React__default['default'].Component);

Transition.contextType = TransitionGroupContext;
Transition.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: propTypes.shape({
    current: typeof Element === 'undefined' ? propTypes.any : propTypes.instanceOf(Element)
  }),

  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: propTypes.oneOfType([propTypes.func.isRequired, propTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: propTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: propTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: propTypes.bool,

  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: propTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: propTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: propTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: propTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: propTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: propTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: propTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: propTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: propTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: propTypes.func
} : {}; // Name the function so it is clearer in the documentation

function noop$2() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop$2,
  onEntering: noop$2,
  onEntered: noop$2,
  onExit: noop$2,
  onExiting: noop$2,
  onExited: noop$2
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;

var _addClass = function addClass$1(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return addClass(node, c);
  });
};

var removeClass$1 = function removeClass$1(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return removeClass(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument[0],
          appearing = _this$resolveArgument[1];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };

    _this.onEntering = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument2[0],
          appearing = _this$resolveArgument2[1];

      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };

    _this.onEntered = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument3[0],
          appearing = _this$resolveArgument3[1];

      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };

    _this.onExit = function (maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument4[0];

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };

    _this.onExiting = function (maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument5[0];

      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };

    _this.onExited = function (maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument6[0];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };

    _this.resolveArguments = function (maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
      : [maybeNode, maybeAppearing];
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    var _this$getClassNames = this.getClassNames('enter'),
        doneClassName = _this$getClassNames.doneClassName;

    if (type === 'appear' && phase === 'done' && doneClassName) {
      className += " " + doneClassName;
    } // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
    }

    if (className) {
      this.appliedClasses[type][phase] = className;

      _addClass(node, className);
    }
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass$1(node, baseClassName);
    }

    if (activeClassName) {
      removeClass$1(node, activeClassName);
    }

    if (doneClassName) {
      removeClass$1(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _ = _this$props.classNames,
        props = _objectWithoutPropertiesLoose$1(_this$props, ["classNames"]);

    return /*#__PURE__*/React__default['default'].createElement(Transition, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(React__default['default'].Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, Transition.propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: classNamesShape,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: propTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: propTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: propTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: propTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: propTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: propTypes.func
}) : {};

var StyledLogo = Ye.div(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n    grid-area: logo;\n    height: 70px;\n    margin-left:30px;\n    img{\n        width:inherit;\n        height:inherit;\n    }\n"], ["\n    grid-area: logo;\n    height: 70px;\n    margin-left:30px;\n    img{\n        width:inherit;\n        height:inherit;\n    }\n"])));
var StyledNav = Ye.div(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n    display: grid;\n    grid-area: nav;\n    margin-right:30px;\n    grid-template-columns: repeat(", ", auto);\n    align-items: center;\n    justify-items: end;\n    div{\n        transition: 0.5s;\n        &:hover {\n                transform: scale(1.1);\n        }\n    }\n"], ["\n    display: grid;\n    grid-area: nav;\n    margin-right:30px;\n    grid-template-columns: repeat(", ", auto);\n    align-items: center;\n    justify-items: end;\n    div{\n        transition: 0.5s;\n        &:hover {\n                transform: scale(1.1);\n        }\n    }\n"])), function (pr) { var _a; return (_a = pr.navOptions) === null || _a === void 0 ? void 0 : _a.length; });
var NavButton = Ye.button(templateObject_3$f || (templateObject_3$f = __makeTemplateObject(["\n    color:#fff;\n    display: none;\n    grid-area: burger;\n    margin-right:30px;\n    padding: 0;\n    justify-self: end;\n    align-self: center;\n    font-size: 40px;\n    border: none;\n    background: none;\n    outline: none;\n    transition: 0.1s;\n    &:active {\n        transform: scale(1.2);\n    }\n"], ["\n    color:#fff;\n    display: none;\n    grid-area: burger;\n    margin-right:30px;\n    padding: 0;\n    justify-self: end;\n    align-self: center;\n    font-size: 40px;\n    border: none;\n    background: none;\n    outline: none;\n    transition: 0.1s;\n    &:active {\n        transform: scale(1.2);\n    }\n"])));
var StyledHeader = Ye.div(templateObject_4$b || (templateObject_4$b = __makeTemplateObject(["\n    position: fixed;\n    top: 0; /* Stick it to the top */\n    left:0;\n    min-height: 50px;\n    width: 100%;\n    z-index:100000;\n    display: grid;\n    align-items:center;\n    grid-template-areas: \"logo nav\";\n\n    /* Cosmetics */\n    background-color: ", ";\n    box-shadow: 0 4px 8px 0 ", ";\n\n    @media (max-width: 700px){\n        grid-template-areas: \"logo burger\" \"nav nav\";\n        ", " {\n            grid-template-rows: repeat(4, auto);\n            grid-template-columns: none;\n            justify-items:center;\n            width:100%;\n            grid-row-gap: 20px;\n            margin: 0;\n            padding: 30px 0 30px;\n            background:", ";\n            box-shadow: 0 4px 8px 0 ", ";\n            border-bottom-left-radius: 10px;\n            border-bottom-right-radius: 10px;\n        }\n        ", " {\n            display: inline;\n        }\n    }\n"], ["\n    position: fixed;\n    top: 0; /* Stick it to the top */\n    left:0;\n    min-height: 50px;\n    width: 100%;\n    z-index:100000;\n    display: grid;\n    align-items:center;\n    grid-template-areas: \"logo nav\";\n\n    /* Cosmetics */\n    background-color: ", ";\n    box-shadow: 0 4px 8px 0 ", ";\n\n    @media (max-width: 700px){\n        grid-template-areas: \"logo burger\" \"nav nav\";\n        ", " {\n            grid-template-rows: repeat(4, auto);\n            grid-template-columns: none;\n            justify-items:center;\n            width:100%;\n            grid-row-gap: 20px;\n            margin: 0;\n            padding: 30px 0 30px;\n            background:", ";\n            box-shadow: 0 4px 8px 0 ", ";\n            border-bottom-left-radius: 10px;\n            border-bottom-right-radius: 10px;\n        }\n        ", " {\n            display: inline;\n        }\n    }\n"])), function (pr) { return pr.bgColor || pr.theme.navbar.defaults.bgColor; }, function (pr) { return pr.shadowColor || pr.theme.navbar.defaults.shadowColor; }, StyledNav, function (pr) { return pr.popBgColor || pr.theme.navbar.defaults.popBgColor; }, function (pr) { return pr.popShadowColor || pr.theme.navbar.defaults.popShadowColor; }, NavButton);
StyledHeader.defaultProps = {
    theme: defaultTheme$1
};
var templateObject_1$i, templateObject_2$f, templateObject_3$f, templateObject_4$b;

var Navbar = React.memo(React.forwardRef(function (props, ref) {
    var navOptions = props.navOptions, Logo = props.Logo;
    var _a = React.useState(false), isNavVisible = _a[0], setNavVisibility = _a[1];
    var _b = React.useState(false), isSmallScreen = _b[0], setIsSmallScreen = _b[1];
    var handleMediaQueryChange = function (mediaQuery) {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        }
        else {
            setIsSmallScreen(false);
        }
    };
    React.useEffect(function () {
        var mediaQuery = window.matchMedia("(max-width: 700px)");
        mediaQuery.addEventListener("change", handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);
        return function () {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);
    var toggleNav = function () {
        setNavVisibility(!isNavVisible);
    };
    return (React.createElement(StyledHeader, __assign({ ref: ref }, props),
        Logo &&
            React.createElement(StyledLogo, null, Logo),
        React.createElement(CSSTransition, { in: !isSmallScreen || isNavVisible, timeout: 350, classNames: "NavAnimation", unmountOnExit: true },
            React.createElement(StyledNav, __assign({}, props), navOptions && navOptions.map(function (obj, index) {
                return React.createElement("div", { key: index }, obj.option);
            }))),
        React.createElement(NavButton, { onClick: toggleNav, className: "Burger" },
            React.createElement(FontAwesomeIcon, { icon: faBars }))));
}));
Navbar.displayName = "Navbar";
Navbar.defaultProps = {};

var StyledLogo$1 = Ye.div(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n    grid-area: logo;\n    height: 70px;\n    text-align:center;\n    margin:auto;\n    img{\n        vertical-align:middle;\n        width:inherit;\n        height:inherit;\n    }\n    hr{\n        border: 1px solid ", "rgb(221, 221, 221);\n    }\n"], ["\n    grid-area: logo;\n    height: 70px;\n    text-align:center;\n    margin:auto;\n    img{\n        vertical-align:middle;\n        width:inherit;\n        height:inherit;\n    }\n    hr{\n        border: 1px solid ", "rgb(221, 221, 221);\n    }\n"])), function (pr) { return pr.hrColor || pr.theme.sidebar.defaults.hrColor; });
StyledLogo$1.defaultProps = {
    theme: defaultTheme$1
};
var StyledNav$1 = Ye.div(templateObject_2$g || (templateObject_2$g = __makeTemplateObject(["\n    margin: 50px auto;\n    display: flex;\n    flex-direction: column;\n\n    div{\n        text-align:center;\n        padding: 0.5rem 1rem;\n        border-radius: 1rem;\n        margin-bottom: 0.5rem;\n        border: 1px solid silver;\n        transition: 0.5s;\n        &:hover {\n            transform: scale(1.1);\n        }\n    } \n"], ["\n    margin: 50px auto;\n    display: flex;\n    flex-direction: column;\n\n    div{\n        text-align:center;\n        padding: 0.5rem 1rem;\n        border-radius: 1rem;\n        margin-bottom: 0.5rem;\n        border: 1px solid silver;\n        transition: 0.5s;\n        &:hover {\n            transform: scale(1.1);\n        }\n    } \n"])));
var Wrapper = Ye.div(templateObject_3$g || (templateObject_3$g = __makeTemplateObject(["\n\ttransition: margin 0.3s;\n    .open,\n    .close {\n        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n        border-radius: 1rem;\n        font-size: 1.5rem;\n        background: white;\n        text-transform: uppercase;\n        text-decoration: none;\n        display: inline-flex;\n        flex-direction: row;\n        align-items: center;\n        padding: 0.5rem 1rem;\n        border: 1px solid silver;\n        > svg {\n            margin-right: 1rem;\n        }\n    }\n\n"], ["\n\ttransition: margin 0.3s;\n    .open,\n    .close {\n        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n        border-radius: 1rem;\n        font-size: 1.5rem;\n        background: white;\n        text-transform: uppercase;\n        text-decoration: none;\n        display: inline-flex;\n        flex-direction: row;\n        align-items: center;\n        padding: 0.5rem 1rem;\n        border: 1px solid silver;\n        > svg {\n            margin-right: 1rem;\n        }\n    }\n\n"])));
var StyledContent = Ye.div(templateObject_4$c || (templateObject_4$c = __makeTemplateObject(["\n    width: 90%;\n    margin:auto;\n"], ["\n    width: 90%;\n    margin:auto;\n"])));
var StyledHeader$1 = Ye.div(templateObject_5$8 || (templateObject_5$8 = __makeTemplateObject(["\n    padding: 1rem;\n\tbox-sizing: border-box;\n\tbackground: ", ";\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\theight: 100%;\n\twidth: 300px;\n\ttransform: translatex(-100%);\n\ttransition: transform 0.3s;\n\tbox-shadow: 0 1px 8px 0 ", ";\n\n\t&:target {\n\t\ttransform: translatex(0);\n\n\t\t& ~ ", " {\n\t\t\tmargin-left: 300px;\n\n\t\t\t& .open {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t}\n\t}\n\n\t&:not(:target) ~ ", " .close {\n\t\tdisplay: none;\n\t}\n"], ["\n    padding: 1rem;\n\tbox-sizing: border-box;\n\tbackground: ", ";\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\theight: 100%;\n\twidth: 300px;\n\ttransform: translatex(-100%);\n\ttransition: transform 0.3s;\n\tbox-shadow: 0 1px 8px 0 ", ";\n\n\t&:target {\n\t\ttransform: translatex(0);\n\n\t\t& ~ ", " {\n\t\t\tmargin-left: 300px;\n\n\t\t\t& .open {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t}\n\t}\n\n\t&:not(:target) ~ ", " .close {\n\t\tdisplay: none;\n\t}\n"])), function (pr) { return pr.bgColor || pr.theme.sidebar.defaults.bgColor; }, function (pr) { return pr.shadowColor || pr.theme.sidebar.defaults.shadowColor; }, Wrapper, Wrapper);
StyledHeader$1.defaultProps = {
    theme: defaultTheme$1
};
var templateObject_1$j, templateObject_2$g, templateObject_3$g, templateObject_4$c, templateObject_5$8;

var Sidenav = React.memo(React.forwardRef(function (props, ref) {
    var navOptions = props.navOptions, Logo = props.Logo;
    return (React.createElement(React.Fragment, null,
        React.createElement(StyledHeader$1, __assign({ ref: ref }, props, { id: "nav" }),
            React.createElement(StyledContent, null,
                Logo &&
                    React.createElement(StyledLogo$1, null,
                        Logo,
                        React.createElement("hr", null)),
                React.createElement(StyledNav$1, { className: "links" }, navOptions && navOptions.map(function (obj, index) {
                    return React.createElement("div", { key: index }, obj.option);
                })))),
        React.createElement(Wrapper, null,
            React.createElement("a", { className: "open", href: "#nav" },
                React.createElement(FontAwesomeIcon, { icon: faBars }),
                React.createElement("span", null, "Menu")),
            React.createElement("a", { className: "close", href: "#" },
                React.createElement(FontAwesomeIcon, { icon: faTimes }),
                React.createElement("span", null, "Close")))));
}));
Sidenav.displayName = "Sidenav";
Sidenav.defaultProps = {};

var Loader = Ye.div(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    border-radius: 50%;\n    animation: 1s loader-01 linear infinite;\n\n    @keyframes loader-01 {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n    \n"], ["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    border-radius: 50%;\n    animation: 1s loader-01 linear infinite;\n\n    @keyframes loader-01 {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n    \n"])), function (pr) { return pr.Color ? pr.Color : 'inherit'; });
var mixin$3 = function (size) {
    switch (size) {
        case "XXS":
            return "font-size: 0.8rem;\n            " + Loader + "{\n                border: 0.188em dotted currentcolor;\n            }";
        case "XS":
            return "font-size: 1rem;\n            " + Loader + "{\n                border: 0.188em dotted currentcolor;\n            }\n            ";
        case "S":
            return "font-size: 2rem;\n            " + Loader + "{\n                border: 0.2em dotted currentcolor;\n            }";
        case "M":
            return "font-size: 3rem;\n            " + Loader + "{\n                border: 0.2em dotted currentcolor;\n            }";
        case "L":
            return "font-size: 5rem;\n            " + Loader + "{\n                border: 0.2em dotted currentcolor;\n            }";
        case "XL":
            return "font-size: 6rem;\n            " + Loader + "{\n                border: 0.2em dotted currentcolor;\n            }";
        default:
            return "font-size: 1rem;\n        " + Loader + "{\n            border: 0.15em dotted currentcolor;\n        }";
    }
};
var LoaderWrapper = Ye.div(templateObject_2$h || (templateObject_2$h = __makeTemplateObject(["\n    ", "\n    ", "\n    display: ", ";\n"], ["\n    ", "\n    ", "\n    display: ", ";\n"])), function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; }, function (pr) { return mixin$3(pr.size); }, function (pr) { return pr.visible ? 'inline-block' : 'none'; });
var templateObject_1$k, templateObject_2$h;

var DotsCircle = React.memo(React.forwardRef(function (props, ref) {
    var size = props.size;
    return (React.createElement(LoaderWrapper, __assign({ ref: ref, size: size }, props),
        React.createElement(Loader, __assign({}, props))));
}));
DotsCircle.displayName = "DotsCircle";
DotsCircle.defaultProps = {
    size: 'S',
    visible: true
};

var StyledLoader = Ye.div(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    vertical-align: middle;\n    pointer-events: none;\n    border-radius: 50%;\n    animation: 1s StyledLoader-01 linear infinite;\n\n    @keyframes StyledLoader-01 {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n    \n"], ["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    vertical-align: middle;\n    pointer-events: none;\n    border-radius: 50%;\n    animation: 1s StyledLoader-01 linear infinite;\n\n    @keyframes StyledLoader-01 {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n    \n"])));
var mixin$4 = function (size) {
    switch (size) {
        case "XXS":
            return "font-size: 0.8rem;\n            " + StyledLoader + "{\n                border: 0.188em solid transparent;\n            }";
        case "XS":
            return "font-size: 1rem;\n            " + StyledLoader + "{\n                border: 0.188em solid transparent;\n            }\n            ";
        case "S":
            return "font-size: 2rem;\n            " + StyledLoader + "{\n                border: 0.2em solid transparent;\n            }";
        case "M":
            return "font-size: 3rem;\n            " + StyledLoader + "{\n                border: 0.2em solid transparent;\n            }";
        case "L":
            return "font-size: 5rem;\n            " + StyledLoader + "{\n                border: 0.2em solid transparent;\n            }";
        case "XL":
            return "font-size: 6rem;\n            " + StyledLoader + "{\n                border: 0.2em solid transparent;\n            }";
        default:
            return "font-size: 1rem;\n        " + StyledLoader + "{\n            border: 0.15em solid transparent;\n        }";
    }
};
var LoaderWrapper$1 = Ye.div(templateObject_2$i || (templateObject_2$i = __makeTemplateObject(["\n    ", "\n    ", "\n    display: ", ";\n    ", "{\n        border-left-color:  ", ";\n        border-right-color:  ", ";\n    }\n"], ["\n    ", "\n    ", "\n    display: ", ";\n    ", "{\n        border-left-color:  ", ";\n        border-right-color:  ", ";\n    }\n"])), function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; }, function (pr) { return mixin$4(pr.size); }, function (pr) { return pr.visible ? 'inline-block' : 'none'; }, StyledLoader, function (pr) { return pr.Color ? pr.Color : 'inherit'; }, function (pr) { return pr.Color ? pr.Color : 'inherit'; });
var templateObject_1$l, templateObject_2$i;

var Loader$1 = React.memo(React.forwardRef(function (props, ref) {
    var size = props.size;
    return (React.createElement(LoaderWrapper$1, __assign({ ref: ref, size: size }, props),
        React.createElement(StyledLoader, __assign({}, props))));
}));
Loader$1.displayName = "Loader";
Loader$1.defaultProps = {
    size: 'S',
    visible: true
};

var Loader$2 = Ye.div(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    border-radius: 50%;\n    animation: 1s loader-01 linear infinite;\n\n    @keyframes loader-01 {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n    \n"], ["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    border-radius: 50%;\n    animation: 1s loader-01 linear infinite;\n\n    @keyframes loader-01 {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n    \n"])), function (pr) { return pr.Color ? pr.Color : 'inherit'; });
var mixin$5 = function (size) {
    switch (size) {
        case "XXS":
            return "font-size: 0.8rem;\n            " + Loader$2 + "{\n                border: 0.188em solid currentcolor;\n            }";
        case "XS":
            return "font-size: 1rem;\n            " + Loader$2 + "{\n                border: 0.188em solid currentcolor;\n            }\n            ";
        case "S":
            return "font-size: 2rem;\n            " + Loader$2 + "{\n                border: 0.2em solid currentcolor;\n            }";
        case "M":
            return "font-size: 3rem;\n            " + Loader$2 + "{\n                border: 0.2em solid currentcolor;\n            }";
        case "L":
            return "font-size: 5rem;\n            " + Loader$2 + "{\n                border: 0.2em solid currentcolor;\n            }";
        case "XL":
            return "font-size: 6rem;\n            " + Loader$2 + "{\n                border: 0.2em solid currentcolor;\n            }";
        default:
            return "font-size: 1rem;\n        " + Loader$2 + "{\n            border: 0.15em solid currentcolor;\n        }";
    }
};
var LoaderWrapper$2 = Ye.div(templateObject_2$j || (templateObject_2$j = __makeTemplateObject(["\n    ", "\n    ", "\n    display: ", ";\n    ", "{\n        border-bottom-color: transparent;\n    }\n"], ["\n    ", "\n    ", "\n    display: ", ";\n    ", "{\n        border-bottom-color: transparent;\n    }\n"])), function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; }, function (pr) { return mixin$5(pr.size); }, function (pr) { return pr.visible ? 'inline-block' : 'none'; }, Loader$2);
var templateObject_1$m, templateObject_2$j;

var Loader1 = React.memo(React.forwardRef(function (props, ref) {
    var size = props.size;
    return (React.createElement(LoaderWrapper$2, __assign({ ref: ref, size: size }, props),
        React.createElement(Loader$2, __assign({}, props))));
}));
Loader1.displayName = "Loader1";
Loader1.defaultProps = {
    size: 'S',
    visible: true
};

var Loader$3 = Ye.div(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    \n    position: relative;\n\t&:before,\n\t&:after {\n\t\tcontent: '';\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\tbackground-color: currentcolor;\n\t\tleft: 50%;\n\t\tright: 0;\n\t\ttop: 0;\n\t\tbottom: 50%;\n\t\tbox-shadow: -.5em 0 0 currentcolor;\n\t\tanimation: loader-12 1s linear infinite;\n\t}\n\t&:after {\n\t\ttop: 50%;\n\t\tbottom: 0;\n\t\tanimation-delay: .25s;\n\t}\n\n    @keyframes loader-12 {\n        0%,\n        100% {\n            box-shadow: -.5em 0 0 transparent;\n            background-color: currentcolor;\n        }\n        50% {\n            box-shadow: -.5em 0 0 currentcolor;\n            background-color: transparent;\n        }\n    }\n\n"], ["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    \n    position: relative;\n\t&:before,\n\t&:after {\n\t\tcontent: '';\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\tbackground-color: currentcolor;\n\t\tleft: 50%;\n\t\tright: 0;\n\t\ttop: 0;\n\t\tbottom: 50%;\n\t\tbox-shadow: -.5em 0 0 currentcolor;\n\t\tanimation: loader-12 1s linear infinite;\n\t}\n\t&:after {\n\t\ttop: 50%;\n\t\tbottom: 0;\n\t\tanimation-delay: .25s;\n\t}\n\n    @keyframes loader-12 {\n        0%,\n        100% {\n            box-shadow: -.5em 0 0 transparent;\n            background-color: currentcolor;\n        }\n        50% {\n            box-shadow: -.5em 0 0 currentcolor;\n            background-color: transparent;\n        }\n    }\n\n"])), function (pr) { return pr.Color ? pr.Color : 'inherit'; });
var mixin$6 = function (size) {
    switch (size) {
        case "XXS":
            return "font-size: 0.8rem;\n           ";
        case "XS":
            return "font-size: 1rem;\n            \n            ";
        case "S":
            return "font-size: 2rem;\n            ";
        case "M":
            return "font-size: 3rem;\n            ";
        case "L":
            return "font-size: 5rem;\n            ";
        case "XL":
            return "font-size: 6rem;\n            ";
        default:
            return "font-size: 1rem;\n       ";
    }
};
var LoaderWrapper$3 = Ye.div(templateObject_2$k || (templateObject_2$k = __makeTemplateObject(["\n    ", "\n    ", "\n    display: ", ";\n"], ["\n    ", "\n    ", "\n    display: ", ";\n"])), function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; }, function (pr) { return mixin$6(pr.size); }, function (pr) { return pr.visible ? 'inline-block' : 'none'; });
var templateObject_1$n, templateObject_2$k;

var Loader10 = React.memo(React.forwardRef(function (props, ref) {
    var size = props.size;
    return (React.createElement(LoaderWrapper$3, __assign({ ref: ref, size: size }, props),
        React.createElement(Loader$3, __assign({}, props))));
}));
Loader10.displayName = "Loader10";
Loader10.defaultProps = {
    size: 'S',
    visible: true
};

var Loader$4 = Ye.div(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    \n    border-radius: 50%;\n\tanimation-fill-mode: both;\n\tanimation: loader-13 1.8s infinite ease-in-out;\n    &:after,&:before{\n        border-radius: 50%;\n        animation-fill-mode: both;\n        animation: loader-13 1.8s infinite ease-in-out;\n    }\n\n    /* color: currentcolor; */\n    position: relative;\n    transform: translateZ(0);\n    animation-delay: -0.16s;\n    &:before {\n        right: 100%;\n        animation-delay: -0.32s;\n    }\n    &:after {\n        left: 100%;\n    }\n    &:before,\n    &:after {\n        content: '';\n        display: block;\n        position: absolute;\n        top: 0;\n        width: inherit;\n        height: inherit;\n    }\n\n    @keyframes loader-13 {\n        0%,\n        80%,\n        100% {\n            box-shadow: 0 1em 0 -1em;\n        }\n        40% {\n            box-shadow: 0 1em 0 -.2em;\n        }\n    }\n\n"], ["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    \n    border-radius: 50%;\n\tanimation-fill-mode: both;\n\tanimation: loader-13 1.8s infinite ease-in-out;\n    &:after,&:before{\n        border-radius: 50%;\n        animation-fill-mode: both;\n        animation: loader-13 1.8s infinite ease-in-out;\n    }\n\n    /* color: currentcolor; */\n    position: relative;\n    transform: translateZ(0);\n    animation-delay: -0.16s;\n    &:before {\n        right: 100%;\n        animation-delay: -0.32s;\n    }\n    &:after {\n        left: 100%;\n    }\n    &:before,\n    &:after {\n        content: '';\n        display: block;\n        position: absolute;\n        top: 0;\n        width: inherit;\n        height: inherit;\n    }\n\n    @keyframes loader-13 {\n        0%,\n        80%,\n        100% {\n            box-shadow: 0 1em 0 -1em;\n        }\n        40% {\n            box-shadow: 0 1em 0 -.2em;\n        }\n    }\n\n"])), function (pr) { return pr.Color ? pr.Color : 'inherit'; });
var mixin$7 = function (size) {
    switch (size) {
        case "XXS":
            return "font-size: 0.8rem;\n            " + Loader$4 + "{\n                margin:0 15px;\n                top: -1em;\n            }\n           ";
        case "XS":
            return "font-size: 1rem;\n            " + Loader$4 + "{\n                margin:0 18px;\n                top: -1em;\n            }\n            \n            ";
        case "S":
            return "font-size: 2rem;\n            " + Loader$4 + "{\n                margin:0 25px;\n                top: -1.1em;\n            }\n            ";
        case "M":
            return "font-size: 3rem;\n            " + Loader$4 + "{\n                margin:0 40px;\n                top: -1.1em;\n            }\n            ";
        case "L":
            return "font-size: 5rem;\n            " + Loader$4 + "{\n                margin:0 65px;\n                top: -1.2em;\n            }\n            ";
        case "XL":
            return "font-size: 6rem;\n            " + Loader$4 + "{\n                margin:0 80px;\n                top: -1.2em;\n            }\n            ";
        default:
            return "font-size: 1rem;\n        " + Loader$4 + "{\n            margin:0 25px;\n        }\n       ";
    }
};
var LoaderWrapper$4 = Ye.div(templateObject_2$l || (templateObject_2$l = __makeTemplateObject(["\n    ", "\n    ", "\n    display: ", ";\n"], ["\n    ", "\n    ", "\n    display: ", ";\n"])), function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; }, function (pr) { return mixin$7(pr.size); }, function (pr) { return pr.visible ? 'inline-block' : 'none'; });
var templateObject_1$o, templateObject_2$l;

var Loader11 = React.memo(React.forwardRef(function (props, ref) {
    var size = props.size;
    return (React.createElement(LoaderWrapper$4, __assign({ ref: ref, size: size }, props),
        React.createElement(Loader$4, __assign({}, props))));
}));
Loader11.displayName = "Loader11";
Loader11.defaultProps = {
    size: 'S',
    visible: true
};

var Loader$5 = Ye.div(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    \n    border-radius: 50%;\n\tbox-shadow: 0 1em 0 -.2em currentcolor;\n\tposition: relative;\n\tanimation: loader-14 0.8s ease-in-out alternate infinite;\n\tanimation-delay: 0.32s;\n\ttop: -1em;\n\t&:after,\n\t&:before {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\twidth: inherit;\n\t\theight: inherit;\n\t\tborder-radius: inherit;\n\t\tbox-shadow: inherit;\n\t\tanimation: inherit;\n\t}\n\t&:before {\n\t\tleft: -1em;\n\t\tanimation-delay: 0.48s;\n\t}\n\t&:after {\n\t\tright: -1em;\n\t\tanimation-delay: 0.16s;\n\t}\n\n    @keyframes loader-14 {\n        0% {\n            box-shadow: 0 2em 0 -.2em currentcolor;\n        }\n        100% {\n            box-shadow: 0 1em 0 -.2em currentcolor;\n        }\n    }\n"], ["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    \n    border-radius: 50%;\n\tbox-shadow: 0 1em 0 -.2em currentcolor;\n\tposition: relative;\n\tanimation: loader-14 0.8s ease-in-out alternate infinite;\n\tanimation-delay: 0.32s;\n\ttop: -1em;\n\t&:after,\n\t&:before {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\twidth: inherit;\n\t\theight: inherit;\n\t\tborder-radius: inherit;\n\t\tbox-shadow: inherit;\n\t\tanimation: inherit;\n\t}\n\t&:before {\n\t\tleft: -1em;\n\t\tanimation-delay: 0.48s;\n\t}\n\t&:after {\n\t\tright: -1em;\n\t\tanimation-delay: 0.16s;\n\t}\n\n    @keyframes loader-14 {\n        0% {\n            box-shadow: 0 2em 0 -.2em currentcolor;\n        }\n        100% {\n            box-shadow: 0 1em 0 -.2em currentcolor;\n        }\n    }\n"])), function (pr) { return pr.Color ? pr.Color : 'inherit'; });
var mixin$8 = function (size) {
    switch (size) {
        case "XXS":
            return "font-size: 0.8rem;\n            " + Loader$5 + "{\n                margin: 0 15px 15px 15px;\n                top: -1em;\n            }\n           ";
        case "XS":
            return "font-size: 1rem;\n            " + Loader$5 + "{\n                margin: 0 15px 15px 15px;\n                top: -1em;\n            }\n            \n            ";
        case "S":
            return "font-size: 2rem;\n            " + Loader$5 + "{\n                margin: 0 25px 25px 25px;\n                top: -1.1em;\n            }\n            ";
        case "M":
            return "font-size: 3rem;\n            " + Loader$5 + "{\n                margin: 0 40px 35px 40px;\n                top: -1.1em;\n            }\n            ";
        case "L":
            return "font-size: 5rem;\n            " + Loader$5 + "{\n                margin: 0 65px 50px 65px;\n                top: -1.2em;\n            }\n            ";
        case "XL":
            return "font-size: 6rem;\n            " + Loader$5 + "{\n                margin: 0 80px 60px 80px;\n                top: -1.2em;\n            }\n            ";
        default:
            return "font-size: 1rem;\n        " + Loader$5 + "{\n            margin:0 25px;\n        }\n       ";
    }
};
var LoaderWrapper$5 = Ye.div(templateObject_2$m || (templateObject_2$m = __makeTemplateObject(["\n    ", "\n    ", "\n    display: ", ";\n"], ["\n    ", "\n    ", "\n    display: ", ";\n"])), function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; }, function (pr) { return mixin$8(pr.size); }, function (pr) { return pr.visible ? 'inline-block' : 'none'; });
var templateObject_1$p, templateObject_2$m;

var Loader12 = React.memo(React.forwardRef(function (props, ref) {
    var size = props.size;
    return (React.createElement(LoaderWrapper$5, __assign({ ref: ref, size: size }, props),
        React.createElement(Loader$5, __assign({}, props))));
}));
Loader12.displayName = "Loader12";
Loader12.defaultProps = {
    size: 'S',
    visible: true
};

var Loader$6 = Ye.div(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    \n    transform: rotateZ(45deg);\n\tperspective: 1000px;\n\tborder-radius: 50%;\n\t&:before,\n\t&:after {\n\t\tcontent: '';\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: inherit;\n\t\theight: inherit;\n\t\tborder-radius: 50%;\n\t\tanimation: 1s spin linear infinite;\n\t}\n\t&:before {\n\t\ttransform: rotateX(70deg);\n\t}\n\t&:after {\n\t\ttransform: rotateY(70deg);\n\t\tanimation-delay: .4s;\n\t}\n\n    @keyframes rotate {\n        0% {\n            transform: translate(-50%, -50%) rotateZ(0deg);\n        }\n        100% {\n            transform: translate(-50%, -50%) rotateZ(360deg);\n        }\n    }\n\n    @keyframes rotateccw {\n        0% {\n            transform: translate(-50%, -50%) rotate(0deg);\n        }\n        100% {\n            transform: translate(-50%, -50%) rotate(-360deg);\n        }\n    }\n\n    @keyframes spin {\n        0%,\n        100% {\n            box-shadow: .2em 0px 0 0px currentcolor;\n        }\n        12% {\n            box-shadow: .2em .2em 0 0 currentcolor;\n        }\n        25% {\n            box-shadow: 0 .2em 0 0px currentcolor;\n        }\n        37% {\n            box-shadow: -.2em .2em 0 0 currentcolor;\n        }\n        50% {\n            box-shadow: -.2em 0 0 0 currentcolor;\n        }\n        62% {\n            box-shadow: -.2em -.2em 0 0 currentcolor;\n        }\n        75% {\n            box-shadow: 0px -.2em 0 0 currentcolor;\n        }\n        87% {\n            box-shadow: .2em -.2em 0 0 currentcolor;\n        }\n    }\n"], ["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    \n    transform: rotateZ(45deg);\n\tperspective: 1000px;\n\tborder-radius: 50%;\n\t&:before,\n\t&:after {\n\t\tcontent: '';\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: inherit;\n\t\theight: inherit;\n\t\tborder-radius: 50%;\n\t\tanimation: 1s spin linear infinite;\n\t}\n\t&:before {\n\t\ttransform: rotateX(70deg);\n\t}\n\t&:after {\n\t\ttransform: rotateY(70deg);\n\t\tanimation-delay: .4s;\n\t}\n\n    @keyframes rotate {\n        0% {\n            transform: translate(-50%, -50%) rotateZ(0deg);\n        }\n        100% {\n            transform: translate(-50%, -50%) rotateZ(360deg);\n        }\n    }\n\n    @keyframes rotateccw {\n        0% {\n            transform: translate(-50%, -50%) rotate(0deg);\n        }\n        100% {\n            transform: translate(-50%, -50%) rotate(-360deg);\n        }\n    }\n\n    @keyframes spin {\n        0%,\n        100% {\n            box-shadow: .2em 0px 0 0px currentcolor;\n        }\n        12% {\n            box-shadow: .2em .2em 0 0 currentcolor;\n        }\n        25% {\n            box-shadow: 0 .2em 0 0px currentcolor;\n        }\n        37% {\n            box-shadow: -.2em .2em 0 0 currentcolor;\n        }\n        50% {\n            box-shadow: -.2em 0 0 0 currentcolor;\n        }\n        62% {\n            box-shadow: -.2em -.2em 0 0 currentcolor;\n        }\n        75% {\n            box-shadow: 0px -.2em 0 0 currentcolor;\n        }\n        87% {\n            box-shadow: .2em -.2em 0 0 currentcolor;\n        }\n    }\n"])), function (pr) { return pr.Color ? pr.Color : 'inherit'; });
var mixin$9 = function (size) {
    switch (size) {
        case "XXS":
            return "font-size: 0.8rem;\n            " + Loader$6 + "{\n                margin: 0 2px 2px 2px;\n            }\n           ";
        case "XS":
            return "font-size: 1rem;\n            " + Loader$6 + "{\n                margin: 0 3px 3px 3px;\n            }\n            \n            ";
        case "S":
            return "font-size: 2rem;\n            " + Loader$6 + "{\n                margin: 0 5px 5px 5px;\n            }\n            ";
        case "M":
            return "font-size: 3rem;\n            " + Loader$6 + "{\n                margin: 0 9px 9px 9px;\n            }\n            ";
        case "L":
            return "font-size: 5rem;\n            " + Loader$6 + "{\n                margin: 0 10px 10px 10px;\n            }\n            ";
        case "XL":
            return "font-size: 6rem;\n            " + Loader$6 + "{\n                margin: 0 10px 10px 10px;\n            }\n            ";
        default:
            return "font-size: 1rem;\n        " + Loader$6 + "{\n            margin: 0 3px 3px 3px;\n        }\n       ";
    }
};
var LoaderWrapper$6 = Ye.div(templateObject_2$n || (templateObject_2$n = __makeTemplateObject(["\n    ", "\n    ", "\n    display: ", ";\n"], ["\n    ", "\n    ", "\n    display: ", ";\n"])), function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; }, function (pr) { return mixin$9(pr.size); }, function (pr) { return pr.visible ? 'inline-block' : 'none'; });
var templateObject_1$q, templateObject_2$n;

var Loader13 = React.memo(React.forwardRef(function (props, ref) {
    var size = props.size;
    return (React.createElement(LoaderWrapper$6, __assign({ ref: ref, size: size }, props),
        React.createElement(Loader$6, __assign({}, props))));
}));
Loader13.displayName = "Loader13";
Loader13.defaultProps = {
    size: 'S',
    visible: true
};

var Loader$7 = Ye.div(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    \n    border-right: .1em solid currentcolor;\n\tborder-radius: 100%;\n\tanimation: loader-37 800ms linear infinite;\n\t&:before,\n\t&:after {\n\t\tcontent: '';\n\t\twidth: .8em;\n\t\theight: .8em;\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\ttop: calc(50% - .4em);\n\t\tleft: calc(50% - .4em);\n\t\tborder-left: .08em solid currentcolor;\n\t\tborder-radius: 100%;\n\t\tanimation: loader-37 400ms linear infinite reverse;\n\t}\n\t&:after {\n\t\twidth: .6em;\n\t\theight: .6em;\n\t\ttop: calc(50% - .3em);\n\t\tleft: calc(50% - .3em);\n\t\tborder: 0;\n\t\tborder-right: .05em solid currentcolor;\n\t\tanimation: none;\n\t}\n\n    @keyframes loader-37 {\n        from {\n            transform: rotate(360deg);\n        }\n        to {\n            transform: rotate(0deg);\n        }\n    }\n"], ["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    \n    border-right: .1em solid currentcolor;\n\tborder-radius: 100%;\n\tanimation: loader-37 800ms linear infinite;\n\t&:before,\n\t&:after {\n\t\tcontent: '';\n\t\twidth: .8em;\n\t\theight: .8em;\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\ttop: calc(50% - .4em);\n\t\tleft: calc(50% - .4em);\n\t\tborder-left: .08em solid currentcolor;\n\t\tborder-radius: 100%;\n\t\tanimation: loader-37 400ms linear infinite reverse;\n\t}\n\t&:after {\n\t\twidth: .6em;\n\t\theight: .6em;\n\t\ttop: calc(50% - .3em);\n\t\tleft: calc(50% - .3em);\n\t\tborder: 0;\n\t\tborder-right: .05em solid currentcolor;\n\t\tanimation: none;\n\t}\n\n    @keyframes loader-37 {\n        from {\n            transform: rotate(360deg);\n        }\n        to {\n            transform: rotate(0deg);\n        }\n    }\n"])), function (pr) { return pr.Color ? pr.Color : 'inherit'; });
var mixin$a = function (size) {
    switch (size) {
        case "XXS":
            return "font-size: 0.8rem;\n            " + Loader$7 + "{\n                margin: 0 2px 2px 2px;\n            }\n           ";
        case "XS":
            return "font-size: 1rem;\n            " + Loader$7 + "{\n                margin: 0 3px 3px 3px;\n            }\n            \n            ";
        case "S":
            return "font-size: 2rem;\n            " + Loader$7 + "{\n                margin: 0 5px 5px 5px;\n            }\n            ";
        case "M":
            return "font-size: 3rem;\n            " + Loader$7 + "{\n                margin: 0 5px 5px 5px;\n            }\n            ";
        case "L":
            return "font-size: 5rem;\n            " + Loader$7 + "{\n                margin: 0 10px 10px 10px;\n            }\n            ";
        case "XL":
            return "font-size: 6rem;\n            " + Loader$7 + "{\n                margin: 0 10px 10px 10px;\n            }\n            ";
        default:
            return "font-size: 1rem;\n        " + Loader$7 + "{\n            margin: 0 3px 3px 3px;\n        }\n       ";
    }
};
var LoaderWrapper$7 = Ye.div(templateObject_2$o || (templateObject_2$o = __makeTemplateObject(["\n    ", "\n    ", "\n    display: ", ";\n"], ["\n    ", "\n    ", "\n    display: ", ";\n"])), function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; }, function (pr) { return mixin$a(pr.size); }, function (pr) { return pr.visible ? 'inline-block' : 'none'; });
var templateObject_1$r, templateObject_2$o;

var Loader14 = React.memo(React.forwardRef(function (props, ref) {
    var size = props.size;
    return (React.createElement(LoaderWrapper$7, __assign({ ref: ref, size: size }, props),
        React.createElement(Loader$7, __assign({}, props))));
}));
Loader14.displayName = "Loader14";
Loader14.defaultProps = {
    size: 'S',
    visible: true
};

var Loader$8 = Ye.div(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    \n    position: relative;\n    width: .15em;\n    height: .15em;\n    background-color: currentcolor;\n    border-radius: 100%;\n    animation: loader-39-1 30s infinite linear;\n\t&:before, &:after {\n\t\tcontent: '';\n\t\tborder-radius: 100%;\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\ttransform: translate(-50%, -50%);\n\t}\n\t&:before {\n\t\twidth: .3em;\n\t\theight: 1em;\n\t\tanimation: loader-39-2 .8s linear infinite;\n\t}\n\t&:after {\n\t\twidth: 1em;\n\t\theight: .3em;\n\t\tanimation: loader-39-2 1.2s linear infinite;\n\t}\n\n    @keyframes loader-39-1 {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n    @keyframes loader-39-2 {\n        0% {\n            box-shadow: 0.04em -0.04em 0 0.02em currentcolor;\n        }\n        25% {\n            box-shadow: 0.04em 0.04em 0 0.02em currentcolor;\n        }\n        50% {\n            box-shadow: -0.04em 0.04em 0 0.02em currentcolor;\n        }\n        75% {\n            box-shadow: -0.04em -0.04em 0 0.02em currentcolor;\n        }\n        100% {\n            box-shadow: 0.04em -0.04em 0 0.02em currentcolor;\n        }\n    }\n"], ["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    \n    position: relative;\n    width: .15em;\n    height: .15em;\n    background-color: currentcolor;\n    border-radius: 100%;\n    animation: loader-39-1 30s infinite linear;\n\t&:before, &:after {\n\t\tcontent: '';\n\t\tborder-radius: 100%;\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\ttransform: translate(-50%, -50%);\n\t}\n\t&:before {\n\t\twidth: .3em;\n\t\theight: 1em;\n\t\tanimation: loader-39-2 .8s linear infinite;\n\t}\n\t&:after {\n\t\twidth: 1em;\n\t\theight: .3em;\n\t\tanimation: loader-39-2 1.2s linear infinite;\n\t}\n\n    @keyframes loader-39-1 {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n    @keyframes loader-39-2 {\n        0% {\n            box-shadow: 0.04em -0.04em 0 0.02em currentcolor;\n        }\n        25% {\n            box-shadow: 0.04em 0.04em 0 0.02em currentcolor;\n        }\n        50% {\n            box-shadow: -0.04em 0.04em 0 0.02em currentcolor;\n        }\n        75% {\n            box-shadow: -0.04em -0.04em 0 0.02em currentcolor;\n        }\n        100% {\n            box-shadow: 0.04em -0.04em 0 0.02em currentcolor;\n        }\n    }\n"])), function (pr) { return pr.Color ? pr.Color : 'inherit'; });
var mixin$b = function (size) {
    switch (size) {
        case "XXS":
            return "font-size: 0.8rem;\n            " + Loader$8 + "{\n                margin: 10px;\n            }\n           ";
        case "XS":
            return "font-size: 1rem;\n            " + Loader$8 + "{\n                margin: 10px;\n            }\n            \n            ";
        case "S":
            return "font-size: 2rem;\n            " + Loader$8 + "{\n                margin: 17px;\n            }\n            ";
        case "M":
            return "font-size: 3rem;\n            " + Loader$8 + "{\n                margin: 25px;\n            }\n            ";
        case "L":
            return "font-size: 5rem;\n            " + Loader$8 + "{\n                margin: 45px;\n            }\n            ";
        case "XL":
            return "font-size: 6rem;\n            " + Loader$8 + "{\n                margin: 55px;\n            }\n            ";
        default:
            return "font-size: 1rem;\n        " + Loader$8 + "{\n            margin: 10px;\n        }\n       ";
    }
};
var LoaderWrapper$8 = Ye.div(templateObject_2$p || (templateObject_2$p = __makeTemplateObject(["\n    ", "\n    ", "\n    display: ", ";\n"], ["\n    ", "\n    ", "\n    display: ", ";\n"])), function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; }, function (pr) { return mixin$b(pr.size); }, function (pr) { return pr.visible ? 'inline-block' : 'none'; });
var templateObject_1$s, templateObject_2$p;

var Loader15 = React.memo(React.forwardRef(function (props, ref) {
    var size = props.size;
    return (React.createElement(LoaderWrapper$8, __assign({ ref: ref, size: size }, props),
        React.createElement(Loader$8, __assign({}, props))));
}));
Loader15.displayName = "Loader15";
Loader15.defaultProps = {
    size: 'S',
    visible: true
};

var mixin$c = function (size) {
    switch (size) {
        case "XXS":
            return "\n                border: 1px solid transparent;\n                height: 10px;\n                width: 10px;\n                &:before{\n                    border: 1px solid transparent;\n                    top: 2px;\n                    left: 2px;\n                    right: 2px;\n                    bottom: 2px;\n                }\n           ";
        case "XS":
            return "\n                border: 2px solid transparent;\n                height: 20px;\n                width: 20px;\n                &:before{\n                    border: 2px solid transparent;\n                    top: 3px;\n                    left: 3px;\n                    right: 3px;\n                    bottom: 3px;\n                }\n            ";
        case "S":
            return "\n            border: 4px solid transparent;\n            height: 40px;\n            width: 40px;\n            &:before{\n                border: 4px solid transparent;\n                top: 5px;\n                left: 5px;\n                right: 5px;\n                bottom: 5px;\n            }\n            ";
        case "M":
            return "\n            border: 5px solid transparent;\n            height: 60px;\n            width: 60px;\n            &:before{\n                border: 5px solid transparent;\n                top: 8px;\n                left: 8px;\n                right: 8px;\n                bottom: 8px;\n            }\n            ";
        case "L":
            return "\n            border: 6px solid transparent;\n            height: 80px;\n            width: 80px;\n            &:before{\n                border: 6px solid transparent;\n                top: 12px;\n                left: 12px;\n                right: 12px;\n                bottom: 12px;\n            }\n            ";
        case "XL":
            return "\n            border: 7px solid transparent;\n            height: 120px;\n            width: 120px;\n            &:before{\n                border: 7px solid transparent;\n                top: 16px;\n                left: 16px;\n                right: 16px;\n                bottom: 16px;\n            }\n            ";
        default:
            return "\n        border: 1px solid transparent;\n        height: 100px;\n        width: 100px;\n        &:before{\n            border: 1px solid transparent;\n            top: 3px;\n            left: 3px;\n            right: 3px;\n            bottom: 3px;\n        }\n       ";
    }
};
var Loader$9 = Ye.div(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n    ", "\n    position: relative;\n    border-top-color: ", ";\n    border-left-color: ", ";\n    border-radius: 50%;\n    -webkit-animation: spin 1.5s linear infinite;\n    animation: spin 1.5s linear infinite;\n\n    &:before {\n    position: absolute;\n    content: \"\";\n    border-top-color: ", ";\n    border-left-color: ", ";\n    border-radius: 50%;\n    -webkit-animation: spinBack 1s linear infinite;\n    animation: spinBack 1s linear infinite;\n    }\n\n    @-webkit-keyframes spin {\n        from {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        to {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n        }\n    }\n\n    @keyframes spin {\n        from {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        to {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n        }\n    }\n\n    @-webkit-keyframes spinBack {\n        from {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        to {\n            -webkit-transform: rotate(-720deg);\n            transform: rotate(-720deg);\n        }\n    }\n\n    @keyframes spinBack {\n        from {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        to {\n            -webkit-transform: rotate(-720deg);\n            transform: rotate(-720deg);\n        }\n    }\n"], ["\n    ", "\n    position: relative;\n    border-top-color: ", ";\n    border-left-color: ", ";\n    border-radius: 50%;\n    -webkit-animation: spin 1.5s linear infinite;\n    animation: spin 1.5s linear infinite;\n\n    &:before {\n    position: absolute;\n    content: \"\";\n    border-top-color: ", ";\n    border-left-color: ", ";\n    border-radius: 50%;\n    -webkit-animation: spinBack 1s linear infinite;\n    animation: spinBack 1s linear infinite;\n    }\n\n    @-webkit-keyframes spin {\n        from {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        to {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n        }\n    }\n\n    @keyframes spin {\n        from {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        to {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n        }\n    }\n\n    @-webkit-keyframes spinBack {\n        from {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        to {\n            -webkit-transform: rotate(-720deg);\n            transform: rotate(-720deg);\n        }\n    }\n\n    @keyframes spinBack {\n        from {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        to {\n            -webkit-transform: rotate(-720deg);\n            transform: rotate(-720deg);\n        }\n    }\n"])), function (pr) { return pr.size && mixin$c(pr.size); }, function (pr) { return pr.Color ? pr.Color : '#1976d2'; }, function (pr) { return pr.Color ? pr.Color : '#1976d2'; }, function (pr) { return pr.innerColor ? pr.innerColor : '#03a9f4'; }, function (pr) { return pr.innerColor ? pr.innerColor : '#03a9f4'; });
var LoaderWrapper$9 = Ye.div(templateObject_2$q || (templateObject_2$q = __makeTemplateObject(["\n    ", "\n    display: ", ";\n"], ["\n    ", "\n    display: ", ";\n"])), function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; }, function (pr) { return pr.visible ? 'inline-block' : 'none'; });
var StyledWrapper$2 = Ye.div(templateObject_3$h || (templateObject_3$h = __makeTemplateObject(["\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    margin: 0;\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    overflow: hidden;\n"], ["\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    margin: 0;\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    overflow: hidden;\n"])));
var templateObject_1$t, templateObject_2$q, templateObject_3$h;

var Loader16 = React.memo(React.forwardRef(function (props, ref) {
    var size = props.size;
    return (React.createElement(LoaderWrapper$9, __assign({ ref: ref, size: size }, props),
        React.createElement(StyledWrapper$2, __assign({}, props),
            React.createElement(Loader$9, __assign({}, props)))));
}));
Loader16.displayName = "Loader16";
Loader16.defaultProps = {
    size: 'S',
    visible: true
};

var mixin$d = function (size) {
    switch (size) {
        case "XXS":
            return "\n                height: 10px;\n                width: 10px;\n                border: 1px solid transparent;\n                &:before{\n                    top: 2px;\n                    right: 2px;\n                    bottom: 2px;\n                    left: 2px;\n                    border: 1px solid transparent;\n                }\n           ";
        case "XS":
            return "\n                height: 20px;\n                width: 20px;\n                border: 2px solid transparent;\n                &:before{\n                    top: 5px;\n                    right: 5px;\n                    bottom: 5px;\n                    left: 5px;\n                    border: 2px solid transparent;\n                }\n            ";
        case "S":
            return "\n            height: 40px;\n            width: 40px;\n            border: 4px solid transparent;\n            &:before{\n                top: 8px;\n                right: 8px;\n                bottom: 8px;\n                left: 8px;\n                border: 4px solid transparent;\n            }\n            ";
        case "M":
            return "\n            height: 60px;\n            width: 60px;\n            border: 5px solid transparent;\n            &:before{\n                top: 10px;\n                right: 10px;\n                bottom: 10px;\n                left: 10px;\n                border: 5px solid transparent;\n            }\n            ";
        case "L":
            return "\n                border: 6px solid transparent;\n                height: 80px;\n                width: 80px;\n            &:before{\n                top: 10px;\n                right: 10px;\n                bottom: 10px;\n                left: 10px;\n                border: 5px solid transparent;\n            }\n            ";
        case "XL":
            return "\n            height: 120px;\n            width: 120px;\n            border: 6px solid transparent;\n            &:before{\n                top: 20px;\n                right: 20px;\n                bottom: 20px;\n                left: 20px;\n                border: 6px solid transparent;\n            }\n            ";
        default:
            return "\n        height: 115px;\n        width: 115px;\n        border: 5px solid transparent;\n        &:before{\n            top: 20px;\n            right: 20px;\n            bottom: 20px;\n            left: 20px;\n            border: 5px solid transparent;\n        }\n       ";
    }
};
var Loader$a = Ye.div(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n    ", "\n\n    border-top-color: ", ";\n    border-bottom-color: ", ";\n    border-radius: 50%;\n    position: relative;\n    -webkit-animation: spin 3s linear infinite;\n            animation: spin 3s linear infinite;\n\n    &:before{\n        content: \"\";\n        position: absolute;\n        border-top-color: ", ";\n        border-bottom-color: ", ";\n        border-radius: 50%;\n        -webkit-animation: spin 1.5s linear infinite;\n        animation: spin 1.5s linear infinite;\n\n    }\n\n    @-webkit-keyframes spin {\n        from {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        to {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n        }\n    }\n\n    @keyframes spin {\n        from {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        to {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n        }\n    }\n\n"], ["\n    ", "\n\n    border-top-color: ", ";\n    border-bottom-color: ", ";\n    border-radius: 50%;\n    position: relative;\n    -webkit-animation: spin 3s linear infinite;\n            animation: spin 3s linear infinite;\n\n    &:before{\n        content: \"\";\n        position: absolute;\n        border-top-color: ", ";\n        border-bottom-color: ", ";\n        border-radius: 50%;\n        -webkit-animation: spin 1.5s linear infinite;\n        animation: spin 1.5s linear infinite;\n\n    }\n\n    @-webkit-keyframes spin {\n        from {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        to {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n        }\n    }\n\n    @keyframes spin {\n        from {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        to {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n        }\n    }\n\n"])), function (pr) { return pr.size && mixin$d(pr.size); }, function (pr) { return pr.Color ? pr.Color : '#9C27B0'; }, function (pr) { return pr.Color ? pr.Color : '#9C27B0'; }, function (pr) { return pr.innerColor ? pr.innerColor : '#BA68C8'; }, function (pr) { return pr.innerColor ? pr.innerColor : '#BA68C8'; });
var LoaderWrapper$a = Ye.div(templateObject_2$r || (templateObject_2$r = __makeTemplateObject(["\n    ", "\n    display: ", ";\n"], ["\n    ", "\n    display: ", ";\n"])), function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; }, function (pr) { return pr.visible ? 'inline-block' : 'none'; });
var StyledWrapper$3 = Ye.div(templateObject_3$i || (templateObject_3$i = __makeTemplateObject(["\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    margin: 0;\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    overflow: hidden;\n"], ["\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    margin: 0;\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    overflow: hidden;\n"])));
var templateObject_1$u, templateObject_2$r, templateObject_3$i;

var Loader17 = React.memo(React.forwardRef(function (props, ref) {
    var size = props.size;
    return (React.createElement(LoaderWrapper$a, __assign({ ref: ref, size: size }, props),
        React.createElement(StyledWrapper$3, __assign({}, props),
            React.createElement(Loader$a, __assign({}, props)))));
}));
Loader17.displayName = "Loader17";
Loader17.defaultProps = {
    size: 'S',
    visible: true
};

var mixin$e = function (size, Color) {
    switch (size) {
        case "XXS":
            return "\n                height: 15px;\n                width: 15px;\n                border: 1px solid transparent;\n                border-top: 1px solid " + (Color || '#FF5722') + ";\n                &:before{\n                    top: 2px;\n                    right: 2px;\n                    bottom: 2px;\n                    left: 2px;\n                    border: 1px solid transparent;\n                }\n                &:after{\n                    top: 5px;\n                    right: 5px;\n                    bottom: 5px;\n                    left: 5px;\n                    border: 1px solid transparent;\n                }\n           ";
        case "XS":
            return "\n                height: 20px;\n                width: 20px;\n                border: 2px solid transparent;\n                border-top: 2px solid " + (Color || '#FF5722') + ";\n                &:before{\n                    top: 2px;\n                    right: 2px;\n                    bottom: 2px;\n                    left: 2px;\n                    border: 2px solid transparent;\n                }\n                &:after{\n                    top: 5px;\n                    right: 5px;\n                    bottom: 5px;\n                    left: 5px;\n                    border: 2px solid transparent;\n                }\n            ";
        case "S":
            return "\n            height: 40px;\n            width: 40px;\n            border: 4px solid transparent;\n            border-top: 4px solid " + (Color || '#FF5722') + ";\n            &:before{\n                top: 3px;\n                right: 3px;\n                bottom: 3px;\n                left: 3px;\n                border: 4px solid transparent;\n            }\n            &:after{\n                top: 10px;\n                right: 10px;\n                bottom: 10px;\n                left: 10px;\n                border: 4px solid transparent;\n            }\n            ";
        case "M":
            return "\n            height: 60px;\n            width: 60px;\n            border: 5px solid transparent;\n            border-top: 5px solid " + (Color || '#FF5722') + ";\n            &:before{\n                top: 4px;\n                right: 4px;\n                bottom: 4px;\n                left: 4px;\n                border: 5px solid transparent;\n            }\n            &:after{\n                top: 15px;\n                right: 15px;\n                bottom: 15px;\n                left: 15px;\n                border: 5px solid transparent;\n            }\n            ";
        case "L":
            return "\n                border: 6px solid transparent;\n                height: 80px;\n                width: 80px;\n                border-top: 6px solid " + (Color || '#FF5722') + ";\n            &:before{\n                top: 5px;\n                right: 5px;\n                bottom: 5px;\n                left: 5px;\n                border: 6px solid transparent;\n            }\n            &:after{\n                top: 18px;\n                right: 18px;\n                bottom: 18px;\n                left: 18px;\n                border: 6px solid transparent;\n            }\n            ";
        case "XL":
            return "\n            height: 120px;\n            width: 120px;\n            border: 6px solid transparent;\n            border-top: 6px solid " + (Color || '#FF5722') + ";\n            &:before{\n                top: 7px;\n                right: 7px;\n                bottom: 7px;\n                left: 7px;\n                border: 6px solid transparent;\n            }\n            &:after{\n                top: 25px;\n                right: 25px;\n                bottom: 25px;\n                left: 25px;\n                border: 6px solid transparent;\n            }\n            ";
    }
};
var Loader$b = Ye.div(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n    ", "\n\n    display: block;\n    position: relative;\n    border-radius: 50%;\n    -webkit-animation: spin 2s linear infinite;\n    animation: spin 2s linear infinite;\n\n    &:before,\n    &:after {\n        content: \"\";\n        position: absolute;\n        border-radius: 50%;\n    }\n    &:before {\n        border-top-color:", ";\n        -webkit-animation: spin 3s linear infinite;\n        animation: spin 3.5s linear infinite;\n    }\n    &:after {\n        border-top-color: ", ";\n        -webkit-animation: spin 1.5s linear infinite;\n        animation: spin 1.75s linear infinite;\n    }\n\n    @-webkit-keyframes spin {\n        from {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        to {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n        }\n    }\n\n    @keyframes spin {\n        from {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        to {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n        }\n    }\n\n"], ["\n    ", "\n\n    display: block;\n    position: relative;\n    border-radius: 50%;\n    -webkit-animation: spin 2s linear infinite;\n    animation: spin 2s linear infinite;\n\n    &:before,\n    &:after {\n        content: \"\";\n        position: absolute;\n        border-radius: 50%;\n    }\n    &:before {\n        border-top-color:", ";\n        -webkit-animation: spin 3s linear infinite;\n        animation: spin 3.5s linear infinite;\n    }\n    &:after {\n        border-top-color: ", ";\n        -webkit-animation: spin 1.5s linear infinite;\n        animation: spin 1.75s linear infinite;\n    }\n\n    @-webkit-keyframes spin {\n        from {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        to {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n        }\n    }\n\n    @keyframes spin {\n        from {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        to {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n        }\n    }\n\n"])), function (pr) { return mixin$e(pr.size, pr.Color); }, function (pr) { return pr.innerColor || "#FF9800"; }, function (pr) { return pr.coreColor || "#FFC107"; });
var LoaderWrapper$b = Ye.div(templateObject_2$s || (templateObject_2$s = __makeTemplateObject(["\n    ", "\n    display: ", ";\n"], ["\n    ", "\n    display: ", ";\n"])), function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; }, function (pr) { return pr.visible ? 'inline-block' : 'none'; });
var StyledWrapper$4 = Ye.div(templateObject_3$j || (templateObject_3$j = __makeTemplateObject(["\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    margin: 0;\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    overflow: hidden;\n"], ["\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    margin: 0;\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    overflow: hidden;\n"])));
var templateObject_1$v, templateObject_2$s, templateObject_3$j;

var Loader18 = React.memo(React.forwardRef(function (props, ref) {
    var size = props.size;
    return (React.createElement(LoaderWrapper$b, __assign({ ref: ref, size: size }, props),
        React.createElement(StyledWrapper$4, __assign({}, props),
            React.createElement(Loader$b, __assign({}, props)))));
}));
Loader18.displayName = "Loader18";
Loader18.defaultProps = {
    size: 'S',
    visible: true
};

var mixin$f = function (size, Color) {
    switch (size) {
        case "XXS":
            return "\n                height: 15px;\n                width: 15px;\n                border: 1px solid transparent;\n                border-top: 1px solid " + (Color || '#FF5722') + ";\n                &:before,&:after{\n                    top: 2px;\n                    right: 2px;\n                    bottom: 2px;\n                    left: 2px;\n                    border: 1px solid transparent;\n                }\n           ";
        case "XS":
            return "\n                height: 20px;\n                width: 20px;\n                border: 2px solid transparent;\n                border-top: 2px solid " + (Color || '#FF5722') + ";\n                &:before,&:after{\n                    top: 2px;\n                    right: 2px;\n                    bottom: 2px;\n                    left: 2px;\n                    border: 2px solid transparent;\n                }\n            ";
        case "S":
            return "\n            height: 40px;\n            width: 40px;\n            border: 4px solid transparent;\n            border-top: 4px solid " + (Color || '#FF5722') + ";\n            &:before,&:after{\n                top: 3px;\n                right: 3px;\n                bottom: 3px;\n                left: 3px;\n                border: 4px solid transparent;\n            }\n            ";
        case "M":
            return "\n            height: 60px;\n            width: 60px;\n            border: 5px solid transparent;\n            border-top: 5px solid " + (Color || '#FF5722') + ";\n            &:before,&:after{\n                top: 4px;\n                right: 4px;\n                bottom: 4px;\n                left: 4px;\n                border: 5px solid transparent;\n            }\n            ";
        case "L":
            return "\n                border: 6px solid transparent;\n                height: 80px;\n                width: 80px;\n                border-top: 6px solid " + (Color || '#FF5722') + ";\n                &:before,&:after{\n                    top: 5px;\n                    right: 5px;\n                    bottom: 5px;\n                    left: 5px;\n                    border: 6px solid transparent;\n                }\n            ";
        case "XL":
            return "\n            height: 120px;\n            width: 120px;\n            border: 6px solid transparent;\n            border-top: 6px solid " + (Color || '#FF5722') + ";\n            &:before,&:after{\n                top: 7px;\n                right: 7px;\n                bottom: 7px;\n                left: 7px;\n                border: 6px solid transparent;\n            }\n            ";
    }
};
var Loader$c = Ye.div(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n    ", "\n\n    border-radius: 50%;\n    -webkit-animation: spin 4s linear infinite;\n    animation: spin 4s linear infinite;\n    position: relative;\n\n    &:before,\n    &:after {\n        content: \"\";\n        position: absolute;\n        border-radius: 50%;\n    }\n\n    &:before {\n        border-top-color: ", ";\n        -webkit-animation: 3s spin linear infinite;\n        animation: 3s spin linear infinite;\n    }\n\n    &:after {\n        border-top-color: ", ";\n        -webkit-animation: spin 1.5s linear infinite;\n        animation: spin 1.5s linear infinite;\n    }\n\n    @-webkit-keyframes spin {\n        from {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        to {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n        }\n    }\n\n    @keyframes spin {\n        from {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        to {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n        }\n    }\n\n"], ["\n    ", "\n\n    border-radius: 50%;\n    -webkit-animation: spin 4s linear infinite;\n    animation: spin 4s linear infinite;\n    position: relative;\n\n    &:before,\n    &:after {\n        content: \"\";\n        position: absolute;\n        border-radius: 50%;\n    }\n\n    &:before {\n        border-top-color: ", ";\n        -webkit-animation: 3s spin linear infinite;\n        animation: 3s spin linear infinite;\n    }\n\n    &:after {\n        border-top-color: ", ";\n        -webkit-animation: spin 1.5s linear infinite;\n        animation: spin 1.5s linear infinite;\n    }\n\n    @-webkit-keyframes spin {\n        from {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        to {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n        }\n    }\n\n    @keyframes spin {\n        from {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        to {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n        }\n    }\n\n"])), function (pr) { return mixin$f(pr.size, pr.Color); }, function (pr) { return pr.innerColor || '#bad375'; }, function (pr) { return pr.coreColor || '#26a9e0'; });
var LoaderWrapper$c = Ye.div(templateObject_2$t || (templateObject_2$t = __makeTemplateObject(["\n    ", "\n    display: ", ";\n"], ["\n    ", "\n    display: ", ";\n"])), function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; }, function (pr) { return pr.visible ? 'inline-block' : 'none'; });
var StyledWrapper$5 = Ye.div(templateObject_3$k || (templateObject_3$k = __makeTemplateObject(["\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    margin: 0;\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    overflow: hidden;\n"], ["\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    margin: 0;\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    overflow: hidden;\n"])));
var templateObject_1$w, templateObject_2$t, templateObject_3$k;

var Loader19 = React.memo(React.forwardRef(function (props, ref) {
    var size = props.size;
    return (React.createElement(LoaderWrapper$c, __assign({ ref: ref, size: size }, props),
        React.createElement(StyledWrapper$5, __assign({}, props),
            React.createElement(Loader$c, __assign({}, props)))));
}));
Loader19.displayName = "Loader19";
Loader19.defaultProps = {
    size: 'S',
    visible: true
};

var Loader$d = Ye.div(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    border-radius: 50%;\n    border: 1px solid currentcolor;\n    animation: 1s loader-01 linear infinite;\n    position:relative;\n    &:before {\n\t\tcontent: '';\n\t\tdisplay: block;\n\t\twidth: 0;\n\t\theight: 0;\n\t\tposition: absolute;\n\t\t/* top: -.2em; */\n\t\tleft: 50%;\n\t\tborder: .2em solid currentcolor;\n\t\tborder-radius: 50%;\n\t}\n    @keyframes loader-01 {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n    \n"], ["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    border-radius: 50%;\n    border: 1px solid currentcolor;\n    animation: 1s loader-01 linear infinite;\n    position:relative;\n    &:before {\n\t\tcontent: '';\n\t\tdisplay: block;\n\t\twidth: 0;\n\t\theight: 0;\n\t\tposition: absolute;\n\t\t/* top: -.2em; */\n\t\tleft: 50%;\n\t\tborder: .2em solid currentcolor;\n\t\tborder-radius: 50%;\n\t}\n    @keyframes loader-01 {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n    \n"])), function (pr) { return pr.Color ? pr.Color : 'inherit'; });
var mixin$g = function (size) {
    switch (size) {
        case "XXS":
            return "font-size: 0.8rem;\n            ";
        case "XS":
            return "font-size: 1rem;\n            ";
        case "S":
            return "font-size: 2rem;\n           ";
        case "M":
            return "font-size: 3rem;\n            ";
        case "L":
            return "font-size: 5rem;\n           ";
        case "XL":
            return "font-size: 6rem;\n            ";
        default:
            return "font-size: 1rem;\n        ";
    }
};
var LoaderWrapper$d = Ye.div(templateObject_2$u || (templateObject_2$u = __makeTemplateObject(["\n    ", "\n    ", "\n    display: ", ";\n    ", "{\n        \n    }\n"], ["\n    ", "\n    ", "\n    display: ", ";\n    ", "{\n        \n    }\n"])), function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; }, function (pr) { return mixin$g(pr.size); }, function (pr) { return pr.visible ? 'inline-block' : 'none'; }, Loader$d);
var templateObject_1$x, templateObject_2$u;

var Loader2 = React.memo(React.forwardRef(function (props, ref) {
    var size = props.size;
    return (React.createElement(LoaderWrapper$d, __assign({ ref: ref, size: size }, props),
        React.createElement(Loader$d, __assign({}, props))));
}));
Loader2.displayName = "Loader2";
Loader2.defaultProps = {
    size: 'S',
    visible: true
};

var mixin$h = function (size) {
    switch (size) {
        case "S":
            return "\n            height: 60px;\n            width: 60px;\n            .multi-spinner {\n                border: 3px solid transparent;\n            }\n            ";
        case "M":
            return "\n            height: 80px;\n            width: 80px;\n            .multi-spinner {\n                border: 4px solid transparent;\n            }\n            ";
        case "L":
            return "\n                height: 120px;\n                width: 120px;\n                .multi-spinner {\n                    border: 5px solid transparent;\n                }\n            ";
        case "XL":
            return "\n            height: 150px;\n            width: 150px;\n            .multi-spinner {\n                border: 5px solid transparent;\n            }\n            ";
    }
};
var Loader$e = Ye.div(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n    ", "\n\n    position: relative;\n    margin: auto;\n    overflow: hidden;\n\n    .multi-spinner {\n        position: absolute;\n        width: calc(100% - 9.9px);\n        height: calc(100% - 9.9px);\n        border-top-color: ", ";\n        border-radius: 50%;\n        -webkit-animation: spin 5s cubic-bezier(0.17, 0.49, 0.96, 0.76) infinite;\n        animation: spin 5s cubic-bezier(0.17, 0.49, 0.96, 0.76) infinite;\n    }\n\n    @-webkit-keyframes spin {\n        from {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        to {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n        }\n    }\n\n    @keyframes spin {\n        from {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        to {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n        }\n    }\n\n"], ["\n    ", "\n\n    position: relative;\n    margin: auto;\n    overflow: hidden;\n\n    .multi-spinner {\n        position: absolute;\n        width: calc(100% - 9.9px);\n        height: calc(100% - 9.9px);\n        border-top-color: ", ";\n        border-radius: 50%;\n        -webkit-animation: spin 5s cubic-bezier(0.17, 0.49, 0.96, 0.76) infinite;\n        animation: spin 5s cubic-bezier(0.17, 0.49, 0.96, 0.76) infinite;\n    }\n\n    @-webkit-keyframes spin {\n        from {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        to {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n        }\n    }\n\n    @keyframes spin {\n        from {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        to {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n        }\n    }\n\n"])), function (pr) { return mixin$h(pr.size); }, function (pr) { return pr.Color || '#ff5722'; });
var LoaderWrapper$e = Ye.div(templateObject_2$v || (templateObject_2$v = __makeTemplateObject(["\n    ", "\n    display: ", ";\n"], ["\n    ", "\n    display: ", ";\n"])), function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; }, function (pr) { return pr.visible ? 'inline-block' : 'none'; });
var StyledWrapper$6 = Ye.div(templateObject_3$l || (templateObject_3$l = __makeTemplateObject(["\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    margin: 0;\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    overflow: hidden;\n"], ["\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    margin: 0;\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    overflow: hidden;\n"])));
var templateObject_1$y, templateObject_2$v, templateObject_3$l;

var Loader20 = React.memo(React.forwardRef(function (props, ref) {
    var size = props.size;
    return (React.createElement(LoaderWrapper$e, __assign({ ref: ref, size: size }, props),
        React.createElement(StyledWrapper$6, __assign({}, props),
            React.createElement(Loader$e, __assign({}, props),
                React.createElement("div", { className: "multi-spinner" },
                    React.createElement("div", { className: "multi-spinner" },
                        React.createElement("div", { className: "multi-spinner" },
                            React.createElement("div", { className: "multi-spinner" },
                                React.createElement("div", { className: "multi-spinner" },
                                    React.createElement("div", { className: "multi-spinner" }))))))))));
}));
Loader20.displayName = "Loader20";
Loader20.defaultProps = {
    size: 'S',
    visible: true
};

var Loader$f = Ye.div(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    border-radius: 50%;\n    animation: 1s loader-01 linear infinite;\n    position: relative;\n\t&:before {\n\t\tcontent: '';\n\t\tdisplay: block;\n\t\twidth: inherit;\n\t\theight: inherit;\n\t\tposition: absolute;\n\t\ttop: -.2em;\n\t\t;\n\t\tleft: -.2em;\n\t\t;\n\t\tborder: .2em solid currentcolor;\n\t\tborder-radius: 50%;\n\t\topacity: .5;\n\t}\n    @keyframes loader-01 {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n    \n"], ["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    border-radius: 50%;\n    animation: 1s loader-01 linear infinite;\n    position: relative;\n\t&:before {\n\t\tcontent: '';\n\t\tdisplay: block;\n\t\twidth: inherit;\n\t\theight: inherit;\n\t\tposition: absolute;\n\t\ttop: -.2em;\n\t\t;\n\t\tleft: -.2em;\n\t\t;\n\t\tborder: .2em solid currentcolor;\n\t\tborder-radius: 50%;\n\t\topacity: .5;\n\t}\n    @keyframes loader-01 {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n    \n"])), function (pr) { return pr.Color ? pr.Color : 'inherit'; });
var mixin$i = function (size) {
    switch (size) {
        case "XXS":
            return "font-size: 0.8rem;\n            " + Loader$f + "{\n                border: 0.2em solid transparent;\n            }";
        case "XS":
            return "font-size: 1rem;\n            " + Loader$f + "{\n                border: 0.2em solid transparent;\n            }\n            ";
        case "S":
            return "font-size: 2rem;\n            " + Loader$f + "{\n                border: 0.2em solid transparent;\n            }";
        case "M":
            return "font-size: 3rem;\n            " + Loader$f + "{\n                border: 0.2em solid transparent;\n            }";
        case "L":
            return "font-size: 5rem;\n            " + Loader$f + "{\n                border: 0.2em solid transparent;\n            }";
        case "XL":
            return "font-size: 6rem;\n            " + Loader$f + "{\n                border: 0.2em solid transparent;\n            }";
        default:
            return "font-size: 1rem;\n        " + Loader$f + "{\n            border: 0.15em solid transparent;\n        }";
    }
};
var LoaderWrapper$f = Ye.div(templateObject_2$w || (templateObject_2$w = __makeTemplateObject(["\n    ", "\n    ", "\n    display: ", ";\n    ", "{\n        border-top-color: currentcolor;\n    }\n"], ["\n    ", "\n    ", "\n    display: ", ";\n    ", "{\n        border-top-color: currentcolor;\n    }\n"])), function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; }, function (pr) { return mixin$i(pr.size); }, function (pr) { return pr.visible ? 'inline-block' : 'none'; }, Loader$f);
var templateObject_1$z, templateObject_2$w;

var Loader3 = React.memo(React.forwardRef(function (props, ref) {
    var size = props.size;
    return (React.createElement(LoaderWrapper$f, __assign({ ref: ref, size: size }, props),
        React.createElement(Loader$f, __assign({}, props))));
}));
Loader3.displayName = "Loader3";
Loader3.defaultProps = {
    size: 'S',
    visible: true
};

var Loader$g = Ye.div(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    \n    border: .2em solid currentcolor;\n\tborder-radius: 50%;\n\tanimation: loader-06 1s ease-out infinite;\n\n    @keyframes loader-06 {\n        0% {\n            transform: scale(0);\n            opacity: 0;\n        }\n        50% {\n            opacity: 1;\n        }\n        100% {\n            transform: scale(1);\n            opacity: 0;\n        }\n    }\n"], ["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    \n    border: .2em solid currentcolor;\n\tborder-radius: 50%;\n\tanimation: loader-06 1s ease-out infinite;\n\n    @keyframes loader-06 {\n        0% {\n            transform: scale(0);\n            opacity: 0;\n        }\n        50% {\n            opacity: 1;\n        }\n        100% {\n            transform: scale(1);\n            opacity: 0;\n        }\n    }\n"])), function (pr) { return pr.Color ? pr.Color : 'inherit'; });
var mixin$j = function (size) {
    switch (size) {
        case "XXS":
            return "font-size: 0.8rem;\n           ";
        case "XS":
            return "font-size: 1rem;\n            \n            ";
        case "S":
            return "font-size: 2rem;\n            ";
        case "M":
            return "font-size: 3rem;\n            ";
        case "L":
            return "font-size: 5rem;\n            ";
        case "XL":
            return "font-size: 6rem;\n            ";
        default:
            return "font-size: 1rem;\n       ";
    }
};
var LoaderWrapper$g = Ye.div(templateObject_2$x || (templateObject_2$x = __makeTemplateObject(["\n    ", "\n    ", "\n    display: ", ";\n"], ["\n    ", "\n    ", "\n    display: ", ";\n"])), function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; }, function (pr) { return mixin$j(pr.size); }, function (pr) { return pr.visible ? 'inline-block' : 'none'; });
var templateObject_1$A, templateObject_2$x;

var Loader4 = React.memo(React.forwardRef(function (props, ref) {
    var size = props.size;
    return (React.createElement(LoaderWrapper$g, __assign({ ref: ref, size: size }, props),
        React.createElement(Loader$g, __assign({}, props))));
}));
Loader4.displayName = "Loader4";
Loader4.defaultProps = {
    size: 'S',
    visible: true
};

var Loader$h = Ye.div(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    \n    border: 0 solid transparent;\n\tborder-radius: 50%;\n\tposition: relative;\n\t&:before,\n\t&:after {\n\t\tcontent: '';\n\t\tborder: .2em solid currentcolor;\n\t\tborder-radius: 50%;\n\t\twidth: inherit;\n\t\theight: inherit;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tanimation: loader-07 1s linear infinite;\n\t\topacity: 0;\n\t}\n\t&:before {\n\t\tanimation-delay: 1s;\n\t}\n\t&:after {\n\t\tanimation-delay: .5s;\n\t}\n\n    @keyframes loader-07 {\n        0% {\n            transform: scale(0);\n            opacity: 0;\n        }\n        50% {\n            opacity: 1;\n        }\n        100% {\n            transform: scale(1);\n            opacity: 0;\n        }\n    }\n\n"], ["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    \n    border: 0 solid transparent;\n\tborder-radius: 50%;\n\tposition: relative;\n\t&:before,\n\t&:after {\n\t\tcontent: '';\n\t\tborder: .2em solid currentcolor;\n\t\tborder-radius: 50%;\n\t\twidth: inherit;\n\t\theight: inherit;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tanimation: loader-07 1s linear infinite;\n\t\topacity: 0;\n\t}\n\t&:before {\n\t\tanimation-delay: 1s;\n\t}\n\t&:after {\n\t\tanimation-delay: .5s;\n\t}\n\n    @keyframes loader-07 {\n        0% {\n            transform: scale(0);\n            opacity: 0;\n        }\n        50% {\n            opacity: 1;\n        }\n        100% {\n            transform: scale(1);\n            opacity: 0;\n        }\n    }\n\n"])), function (pr) { return pr.Color ? pr.Color : 'inherit'; });
var mixin$k = function (size) {
    switch (size) {
        case "XXS":
            return "font-size: 0.8rem;\n            " + Loader$h + "{\n                margin: 0 5px 5px 0;\n            }\n           ";
        case "XS":
            return "font-size: 1rem;\n            " + Loader$h + "{\n                margin: 0 8px 8px 0;\n            }\n            ";
        case "S":
            return "font-size: 2rem;\n            " + Loader$h + "{\n                margin: 0 15px 15px 0;\n            }\n            ";
        case "M":
            return "font-size: 3rem;\n            " + Loader$h + "{\n                margin: 0 20px 20px 0;\n            }\n            ";
        case "L":
            return "font-size: 5rem;\n            " + Loader$h + "{\n                margin: 0 30px 30px 0;\n            }\n            ";
        case "XL":
            return "font-size: 6rem;\n            " + Loader$h + "{\n                margin: 0 45px 45px 0;\n            }\n            ";
        default:
            return "font-size: 1rem;\n        " + Loader$h + "{\n            margin: 0 8px 8px 0;\n        }\n       ";
    }
};
var LoaderWrapper$h = Ye.div(templateObject_2$y || (templateObject_2$y = __makeTemplateObject(["\n    ", "\n    ", "\n    display: ", ";\n"], ["\n    ", "\n    ", "\n    display: ", ";\n"])), function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; }, function (pr) { return mixin$k(pr.size); }, function (pr) { return pr.visible ? 'inline-block' : 'none'; });
var templateObject_1$B, templateObject_2$y;

var Loader5 = React.memo(React.forwardRef(function (props, ref) {
    var size = props.size;
    return (React.createElement(LoaderWrapper$h, __assign({ ref: ref, size: size }, props),
        React.createElement(Loader$h, __assign({}, props))));
}));
Loader5.displayName = "Loader5";
Loader5.defaultProps = {
    size: 'S',
    visible: true
};

var Loader$i = Ye.div(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    \n    position: relative;\n\t&:before,\n\t&:after {\n\t\tcontent: '';\n\t\twidth: inherit;\n\t\theight: inherit;\n\t\tborder-radius: 50%;\n\t\tbackground-color: currentcolor;\n\t\topacity: 0.6;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tanimation: loader-08 2.0s infinite ease-in-out;\n\t}\n\t&:after {\n\t\tanimation-delay: -1.0s;\n\t}\n\n    @keyframes loader-08 {\n        0%,\n        100% {\n            transform: scale(0.0);\n        }\n        50% {\n            transform: scale(1.0);\n\t    }\n    }\n"], ["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    \n    position: relative;\n\t&:before,\n\t&:after {\n\t\tcontent: '';\n\t\twidth: inherit;\n\t\theight: inherit;\n\t\tborder-radius: 50%;\n\t\tbackground-color: currentcolor;\n\t\topacity: 0.6;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tanimation: loader-08 2.0s infinite ease-in-out;\n\t}\n\t&:after {\n\t\tanimation-delay: -1.0s;\n\t}\n\n    @keyframes loader-08 {\n        0%,\n        100% {\n            transform: scale(0.0);\n        }\n        50% {\n            transform: scale(1.0);\n\t    }\n    }\n"])), function (pr) { return pr.Color ? pr.Color : 'inherit'; });
var mixin$l = function (size) {
    switch (size) {
        case "XXS":
            return "font-size: 0.8rem;\n           ";
        case "XS":
            return "font-size: 1rem;\n            \n            ";
        case "S":
            return "font-size: 2rem;\n            ";
        case "M":
            return "font-size: 3rem;\n            ";
        case "L":
            return "font-size: 5rem;\n            ";
        case "XL":
            return "font-size: 6rem;\n            ";
        default:
            return "font-size: 1rem;\n       ";
    }
};
var LoaderWrapper$i = Ye.div(templateObject_2$z || (templateObject_2$z = __makeTemplateObject(["\n    ", "\n    ", "\n    display: ", ";\n"], ["\n    ", "\n    ", "\n    display: ", ";\n"])), function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; }, function (pr) { return mixin$l(pr.size); }, function (pr) { return pr.visible ? 'inline-block' : 'none'; });
var templateObject_1$C, templateObject_2$z;

var Loader6 = React.memo(React.forwardRef(function (props, ref) {
    var size = props.size;
    return (React.createElement(LoaderWrapper$i, __assign({ ref: ref, size: size }, props),
        React.createElement(Loader$i, __assign({}, props))));
}));
Loader6.displayName = "Loader6";
Loader6.defaultProps = {
    size: 'S',
    visible: true
};

var Loader$j = Ye.div(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    \n    background-color: currentcolor;\n\tborder-radius: 50%;\n\tanimation: loader-09 1.0s infinite ease-in-out;\n\n    @keyframes loader-09 {\n        0% {\n            transform: scale(0);\n        }\n        100% {\n            transform: scale(1.0);\n            opacity: 0;\n        }\n    }\n"], ["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    \n    background-color: currentcolor;\n\tborder-radius: 50%;\n\tanimation: loader-09 1.0s infinite ease-in-out;\n\n    @keyframes loader-09 {\n        0% {\n            transform: scale(0);\n        }\n        100% {\n            transform: scale(1.0);\n            opacity: 0;\n        }\n    }\n"])), function (pr) { return pr.Color ? pr.Color : 'inherit'; });
var mixin$m = function (size) {
    switch (size) {
        case "XXS":
            return "font-size: 0.8rem;\n           ";
        case "XS":
            return "font-size: 1rem;\n            \n            ";
        case "S":
            return "font-size: 2rem;\n            ";
        case "M":
            return "font-size: 3rem;\n            ";
        case "L":
            return "font-size: 5rem;\n            ";
        case "XL":
            return "font-size: 6rem;\n            ";
        default:
            return "font-size: 1rem;\n       ";
    }
};
var LoaderWrapper$j = Ye.div(templateObject_2$A || (templateObject_2$A = __makeTemplateObject(["\n    ", "\n    ", "\n    display: ", ";\n"], ["\n    ", "\n    ", "\n    display: ", ";\n"])), function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; }, function (pr) { return mixin$m(pr.size); }, function (pr) { return pr.visible ? 'inline-block' : 'none'; });
var templateObject_1$D, templateObject_2$A;

var Loader7 = React.memo(React.forwardRef(function (props, ref) {
    var size = props.size;
    return (React.createElement(LoaderWrapper$j, __assign({ ref: ref, size: size }, props),
        React.createElement(Loader$j, __assign({}, props))));
}));
Loader7.displayName = "Loader7";
Loader7.defaultProps = {
    size: 'S',
    visible: true
};

var Loader$k = Ye.div(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    \n    position: relative;\n\tanimation: loader-10-1 2.0s infinite linear;\n\t&:before,\n\t&:after {\n\t\tcontent: '';\n\t\twidth: 0;\n\t\theight: 0;\n\t\tborder: .5em solid currentcolor;\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\tborder-radius: 100%;\n\t\tanimation: loader-10-2 2s infinite ease-in-out;\n\t}\n\t&:before {\n\t\ttop: 0;\n\t\tleft: 50%;\n\t}\n\t&:after {\n\t\tbottom: 0;\n\t\tright: 50%;\n\t\tanimation-delay: -1s;\n\t}\n\n    @keyframes loader-10-1 {\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n\n    @keyframes loader-10-2 {\n        0%,\n        100% {\n            transform: scale(0);\n        }\n        50% {\n            transform: scale(1);\n        }\n    }\n"], ["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    \n    position: relative;\n\tanimation: loader-10-1 2.0s infinite linear;\n\t&:before,\n\t&:after {\n\t\tcontent: '';\n\t\twidth: 0;\n\t\theight: 0;\n\t\tborder: .5em solid currentcolor;\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\tborder-radius: 100%;\n\t\tanimation: loader-10-2 2s infinite ease-in-out;\n\t}\n\t&:before {\n\t\ttop: 0;\n\t\tleft: 50%;\n\t}\n\t&:after {\n\t\tbottom: 0;\n\t\tright: 50%;\n\t\tanimation-delay: -1s;\n\t}\n\n    @keyframes loader-10-1 {\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n\n    @keyframes loader-10-2 {\n        0%,\n        100% {\n            transform: scale(0);\n        }\n        50% {\n            transform: scale(1);\n        }\n    }\n"])), function (pr) { return pr.Color ? pr.Color : 'inherit'; });
var mixin$n = function (size) {
    switch (size) {
        case "XXS":
            return "font-size: 0.8rem;\n            " + Loader$k + "{\n                margin: 5px 0 5px 10px;\n            }\n           ";
        case "XS":
            return "font-size: 1rem;\n            " + Loader$k + "{\n                margin: 7px 0 7px 10px;\n            }\n            ";
        case "S":
            return "font-size: 2rem;\n            " + Loader$k + "{\n                margin: 15px 0 15px 20px;\n            }\n            ";
        case "M":
            return "font-size: 3rem;\n            " + Loader$k + "{\n                margin: 18px 0 18px 25px;\n            }\n            ";
        case "L":
            return "font-size: 5rem;\n            " + Loader$k + "{\n                margin: 28px 0 28px 40px;\n            }\n            ";
        case "XL":
            return "font-size: 6rem;\n            " + Loader$k + "{\n                margin: 35px 0 35px 50px;\n            }\n            ";
        default:
            return "font-size: 1rem;\n        " + Loader$k + "{\n            margin: 15px 0 15px 20px;\n        }\n       ";
    }
};
var LoaderWrapper$k = Ye.div(templateObject_2$B || (templateObject_2$B = __makeTemplateObject(["\n    ", "\n    ", "\n    display: ", ";\n"], ["\n    ", "\n    ", "\n    display: ", ";\n"])), function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; }, function (pr) { return mixin$n(pr.size); }, function (pr) { return pr.visible ? 'inline-block' : 'none'; });
var templateObject_1$E, templateObject_2$B;

var Loader8 = React.memo(React.forwardRef(function (props, ref) {
    var size = props.size;
    return (React.createElement(LoaderWrapper$k, __assign({ ref: ref, size: size }, props),
        React.createElement(Loader$k, __assign({}, props))));
}));
Loader8.displayName = "Loader8";
Loader8.defaultProps = {
    size: 'S',
    visible: true
};

var Loader$l = Ye.div(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    \n    background-color: currentcolor;\n\tanimation: loader-11 1.2s infinite ease-in-out;\n\n    @keyframes loader-11 {\n        0% {\n            transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n        }\n        50% {\n            transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n        }\n        100% {\n            transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n        }\n    }\n\n"], ["\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    color: ", ";\n    vertical-align: middle;\n    pointer-events: none;\n    \n    background-color: currentcolor;\n\tanimation: loader-11 1.2s infinite ease-in-out;\n\n    @keyframes loader-11 {\n        0% {\n            transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n        }\n        50% {\n            transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n        }\n        100% {\n            transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n        }\n    }\n\n"])), function (pr) { return pr.Color ? pr.Color : 'inherit'; });
var mixin$o = function (size) {
    switch (size) {
        case "XXS":
            return "font-size: 0.8rem;\n           ";
        case "XS":
            return "font-size: 1rem;\n            \n            ";
        case "S":
            return "font-size: 2rem;\n            ";
        case "M":
            return "font-size: 3rem;\n            ";
        case "L":
            return "font-size: 5rem;\n            ";
        case "XL":
            return "font-size: 6rem;\n            ";
        default:
            return "font-size: 1rem;\n       ";
    }
};
var LoaderWrapper$l = Ye.div(templateObject_2$C || (templateObject_2$C = __makeTemplateObject(["\n    ", "\n    ", "\n    display: ", ";\n"], ["\n    ", "\n    ", "\n    display: ", ";\n"])), function (pr) { return pr.disabled === true ? 'pointer-events: none;opacity: 0.4;' : ''; }, function (pr) { return mixin$o(pr.size); }, function (pr) { return pr.visible ? 'inline-block' : 'none'; });
var templateObject_1$F, templateObject_2$C;

var Loader9 = React.memo(React.forwardRef(function (props, ref) {
    var size = props.size;
    return (React.createElement(LoaderWrapper$l, __assign({ ref: ref, size: size }, props),
        React.createElement(Loader$l, __assign({}, props))));
}));
Loader9.displayName = "Loader9";
Loader9.defaultProps = {
    size: 'S',
    visible: true
};

exports.Avatar = Avatar;
exports.Button = Button;
exports.Card = Card$1;
exports.CardTable = CardTable;
exports.CheckBox = CheckBox;
exports.CheckBoxGroup = CheckBoxGroup;
exports.DotsCircle = DotsCircle;
exports.FileInput = FileInput;
exports.Input = Input$1;
exports.Label = Label$1;
exports.Link = Link;
exports.List = List;
exports.Loader = Loader$1;
exports.Loader1 = Loader1;
exports.Loader10 = Loader10;
exports.Loader11 = Loader11;
exports.Loader12 = Loader12;
exports.Loader13 = Loader13;
exports.Loader14 = Loader14;
exports.Loader15 = Loader15;
exports.Loader16 = Loader16;
exports.Loader17 = Loader17;
exports.Loader18 = Loader18;
exports.Loader19 = Loader19;
exports.Loader2 = Loader2;
exports.Loader20 = Loader20;
exports.Loader3 = Loader3;
exports.Loader4 = Loader4;
exports.Loader5 = Loader5;
exports.Loader6 = Loader6;
exports.Loader7 = Loader7;
exports.Loader8 = Loader8;
exports.Loader9 = Loader9;
exports.Modal = Modal$1;
exports.Navbar = Navbar;
exports.Radio = Radio;
exports.RadioGroup = RadioGroup;
exports.Sidenav = Sidenav;
exports.Table = Table;
exports.Text = Text$1;
exports.Toast = Toast$1;
exports.Toggle = Toggle;
//# sourceMappingURL=index.js.map
