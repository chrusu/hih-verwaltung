var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=e=>{let n={};for(var r in e)t(n,r,{get:e[r],enumerable:!0});return n},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,a)=>(a=n==null?{}:e(i(n)),c(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function te(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ne(e,t){return te(e.type,t,e.props)}function T(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ie=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function oe(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function se(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,se(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ae(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ie,`$&/`)+`/`),se(o,r,i,``,function(e){return e})):o!=null&&(T(o)&&(o=ne(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ie,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ae(a,u),c+=se(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ae(a,u++),c+=se(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return se(oe(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ce(e,t,n){if(e==null)return e;var r=[],i=0;return se(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function le(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var E=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},D={map:ce,forEach:function(e,t,n){ce(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ce(e,function(){t++}),t},toArray:function(e){return ce(e,function(e){return e})||[]},only:function(e){if(!T(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=D,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return te(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return te(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=T,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:le}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,E)}catch(e){E(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.0`})),d=o(((e,t)=>{t.exports=u()})),f=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,T());else{var t=n(l);t!==null&&ae(x,t.startTime-e)}}var S=!1,C=-1,w=5,ee=-1;function te(){return g?!0:!(e.unstable_now()-ee<w)}function ne(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&te());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ae(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?T():S=!1}}}var T;if(typeof y==`function`)T=function(){y(ne)};else if(typeof MessageChannel<`u`){var re=new MessageChannel,ie=re.port2;re.port1.onmessage=ne,T=function(){ie.postMessage(null)}}else T=function(){_(ne,0)};function ae(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ae(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,T()))),r},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),p=o(((e,t)=>{t.exports=f()})),m=o((e=>{var t=d();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.0`})),h=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=o((e=>{var t=p(),n=d(),r=h();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var m=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),te=Symbol.for(`react.suspense_list`),ne=Symbol.for(`react.memo`),T=Symbol.for(`react.lazy`),re=Symbol.for(`react.activity`),ie=Symbol.for(`react.memo_cache_sentinel`),ae=Symbol.iterator;function oe(e){return typeof e!=`object`||!e?null:(e=ae&&e[ae]||e[`@@iterator`],typeof e==`function`?e:null)}var se=Symbol.for(`react.client.reference`);function ce(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ee:return`Suspense`;case te:return`SuspenseList`;case re:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ne:return t=e.displayName||null,t===null?ce(e.type)||`Memo`:t;case T:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}var le=Array.isArray,E=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},O=[],de=-1;function k(e){return{current:e}}function fe(e){0>de||(e.current=O[de],O[de]=null,de--)}function A(e,t){de++,O[de]=e.current,e.current=t}var pe=k(null),me=k(null),he=k(null),ge=k(null);function _e(e,t){switch(A(he,t),A(me,e),A(pe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?nf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=nf(t),e=rf(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}fe(pe),A(pe,e)}function ve(){fe(pe),fe(me),fe(he)}function j(e){e.memoizedState!==null&&A(ge,e);var t=pe.current,n=rf(t,e.type);t!==n&&(A(me,e),A(pe,n))}function ye(e){me.current===e&&(fe(pe),fe(me)),ge.current===e&&(fe(ge),mp._currentValue=ue)}var be,xe;function Se(e){if(be===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);be=t&&t[1]||``,xe=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+be+e+xe}var Ce=!1;function we(e,t){if(!e||Ce)return``;Ce=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ce=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Se(n):``}function Te(e,t){switch(e.tag){case 26:case 27:case 5:return Se(e.type);case 16:return Se(`Lazy`);case 13:return e.child!==t&&t!==null?Se(`Suspense Fallback`):Se(`Suspense`);case 19:return Se(`SuspenseList`);case 0:case 15:return we(e.type,!1);case 11:return we(e.type.render,!1);case 1:return we(e.type,!0);case 31:return Se(`Activity`);default:return``}}function Ee(e){try{var t=``,n=null;do t+=Te(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var De=Object.prototype.hasOwnProperty,Oe=t.unstable_scheduleCallback,ke=t.unstable_cancelCallback,Ae=t.unstable_shouldYield,je=t.unstable_requestPaint,Me=t.unstable_now,Ne=t.unstable_getCurrentPriorityLevel,Pe=t.unstable_ImmediatePriority,Fe=t.unstable_UserBlockingPriority,Ie=t.unstable_NormalPriority,Le=t.unstable_LowPriority,Re=t.unstable_IdlePriority,ze=t.log,Be=t.unstable_setDisableYieldValue,Ve=null,He=null;function Ue(e){if(typeof ze==`function`&&Be(e),He&&typeof He.setStrictMode==`function`)try{He.setStrictMode(Ve,e)}catch{}}var We=Math.clz32?Math.clz32:qe,Ge=Math.log,Ke=Math.LN2;function qe(e){return e>>>=0,e===0?32:31-(Ge(e)/Ke|0)|0}var Je=256,Ye=262144,Xe=4194304;function Ze(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Qe(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ze(n))):i=Ze(o):i=Ze(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ze(n))):i=Ze(o)):i=Ze(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function $e(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function et(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tt(){var e=Xe;return Xe<<=1,!(Xe&62914560)&&(Xe=4194304),e}function nt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function rt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function it(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-We(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&at(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function at(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-We(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ot(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-We(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function st(e,t){var n=t&-t;return n=n&42?1:ct(n),(n&(e.suspendedLanes|t))===0?n:0}function ct(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function lt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ut(){var e=D.p;return e===0?(e=window.event,e===void 0?32:Ap(e.type)):e}function dt(e,t){var n=D.p;try{return D.p=e,t()}finally{D.p=n}}var ft=Math.random().toString(36).slice(2),pt=`__reactFiber$`+ft,mt=`__reactProps$`+ft,ht=`__reactContainer$`+ft,gt=`__reactEvents$`+ft,_t=`__reactListeners$`+ft,vt=`__reactHandles$`+ft,yt=`__reactResources$`+ft,bt=`__reactMarker$`+ft;function xt(e){delete e[pt],delete e[mt],delete e[gt],delete e[_t],delete e[vt]}function St(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ht]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Df(e);e!==null;){if(n=e[pt])return n;e=Df(e)}return t}e=n,n=e.parentNode}return null}function Ct(e){if(e=e[pt]||e[ht]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function wt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Tt(e){var t=e[yt];return t||=e[yt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Et(e){e[bt]=!0}var Dt=new Set,Ot={};function kt(e,t){At(e,t),At(e+`Capture`,t)}function At(e,t){for(Ot[e]=t,e=0;e<t.length;e++)Dt.add(t[e])}var jt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Mt={},Nt={};function Pt(e){return De.call(Nt,e)?!0:De.call(Mt,e)?!1:jt.test(e)?Nt[e]=!0:(Mt[e]=!0,!1)}function Ft(e,t,n){if(Pt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function It(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Lt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Rt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function zt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Bt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vt(e){if(!e._valueTracker){var t=zt(e)?`checked`:`value`;e._valueTracker=Bt(e,t,``+e[t])}}function Ht(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=zt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Ut(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Wt=/[\n"\\]/g;function Gt(e){return e.replace(Wt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Kt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Rt(t)):e.value!==``+Rt(t)&&(e.value=``+Rt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Jt(e,o,Rt(n)):Jt(e,o,Rt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Rt(s):e.removeAttribute(`name`)}function qt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Vt(e);return}n=n==null?``:``+Rt(n),t=t==null?n:``+Rt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Vt(e)}function Jt(e,t,n){t===`number`&&Ut(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Yt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Rt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Xt(e,t,n){if(t!=null&&(t=``+Rt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Rt(n)}function Zt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(le(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Rt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Vt(e)}function Qt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $t=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function en(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||$t.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function tn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&en(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&en(e,o,t[o])}function nn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var rn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),an=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function on(e){return an.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function sn(){}var cn=null;function ln(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var un=null,dn=null;function fn(e){var t=Ct(e);if(t&&(e=t.stateNode)){var n=e[mt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Kt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Gt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[mt]||null;if(!a)throw Error(i(90));Kt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ht(r)}break a;case`textarea`:Xt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}}}var pn=!1;function mn(e,t,n){if(pn)return e(t,n);pn=!0;try{return e(t)}finally{if(pn=!1,(un!==null||dn!==null)&&(Nu(),un&&(t=un,e=dn,dn=un=null,fn(t),e)))for(t=0;t<e.length;t++)fn(e[t])}}function hn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[mt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var gn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),_n=!1;if(gn)try{var vn={};Object.defineProperty(vn,`passive`,{get:function(){_n=!0}}),window.addEventListener(`test`,vn,vn),window.removeEventListener(`test`,vn,vn)}catch{_n=!1}var yn=null,bn=null,xn=null;function Sn(){if(xn)return xn;var e,t=bn,n=t.length,r,i=`value`in yn?yn.value:yn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return xn=i.slice(e,1<r?1-r:void 0)}function Cn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wn(){return!0}function Tn(){return!1}function En(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?wn:Tn,this.isPropagationStopped=Tn,this}return m(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=wn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=wn)},persist:function(){},isPersistent:wn}),t}var Dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},On=En(Dn),kn=m({},Dn,{view:0,detail:0}),An=En(kn),jn,Mn,Nn,Pn=m({},kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Nn&&(Nn&&e.type===`mousemove`?(jn=e.screenX-Nn.screenX,Mn=e.screenY-Nn.screenY):Mn=jn=0,Nn=e),jn)},movementY:function(e){return`movementY`in e?e.movementY:Mn}}),Fn=En(Pn),In=m({},Pn,{dataTransfer:0}),Ln=En(In),Rn=m({},kn,{relatedTarget:0}),zn=En(Rn),M=m({},Dn,{animationName:0,elapsedTime:0,pseudoElement:0}),Bn=En(M),Vn=m({},Dn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}}),N=En(Vn),Hn=m({},Dn,{data:0}),Un=En(Hn),P={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Wn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Gn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Kn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gn[e])?!!t[e]:!1}function qn(){return Kn}var Jn=m({},kn,{key:function(e){if(e.key){var t=P[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Cn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Wn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qn,charCode:function(e){return e.type===`keypress`?Cn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Cn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}}),Yn=En(Jn),Xn=m({},Pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zn=En(Xn),Qn=m({},kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qn}),$n=En(Qn),er=m({},Dn,{propertyName:0,elapsedTime:0,pseudoElement:0}),tr=En(er),nr=m({},Pn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rr=En(nr),ir=m({},Dn,{newState:0,oldState:0}),ar=En(ir),or=[9,13,27,32],sr=gn&&`CompositionEvent`in window,cr=null;gn&&`documentMode`in document&&(cr=document.documentMode);var lr=gn&&`TextEvent`in window&&!cr,ur=gn&&(!sr||cr&&8<cr&&11>=cr),dr=` `,fr=!1;function pr(e,t){switch(e){case`keyup`:return or.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function mr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var hr=!1;function gr(e,t){switch(e){case`compositionend`:return mr(t);case`keypress`:return t.which===32?(fr=!0,dr):null;case`textInput`:return e=t.data,e===dr&&fr?null:e;default:return null}}function _r(e,t){if(hr)return e===`compositionend`||!sr&&pr(e,t)?(e=Sn(),xn=bn=yn=null,hr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return ur&&t.locale!==`ko`?null:t.data;default:return null}}var vr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!vr[e.type]:t===`textarea`}function br(e,t,n,r){un?dn?dn.push(r):dn=[r]:un=r,t=Vd(t,`onChange`),0<t.length&&(n=new On(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var xr=null,Sr=null;function Cr(e){Pd(e,0)}function wr(e){var t=wt(e);if(Ht(t))return e}function Tr(e,t){if(e===`change`)return t}var Er=!1;if(gn){var Dr;if(gn){var Or=`oninput`in document;if(!Or){var kr=document.createElement(`div`);kr.setAttribute(`oninput`,`return;`),Or=typeof kr.oninput==`function`}Dr=Or}else Dr=!1;Er=Dr&&(!document.documentMode||9<document.documentMode)}function Ar(){xr&&(xr.detachEvent(`onpropertychange`,jr),Sr=xr=null)}function jr(e){if(e.propertyName===`value`&&wr(Sr)){var t=[];br(t,Sr,e,ln(e)),mn(Cr,t)}}function Mr(e,t,n){e===`focusin`?(Ar(),xr=t,Sr=n,xr.attachEvent(`onpropertychange`,jr)):e===`focusout`&&Ar()}function Nr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return wr(Sr)}function Pr(e,t){if(e===`click`)return wr(t)}function Fr(e,t){if(e===`input`||e===`change`)return wr(t)}function Ir(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Lr=typeof Object.is==`function`?Object.is:Ir;function Rr(e,t){if(Lr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!De.call(t,i)||!Lr(e[i],t[i]))return!1}return!0}function zr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Br(e,t){var n=zr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=zr(n)}}function Vr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ut(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ut(e.document)}return t}function Ur(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Wr=gn&&`documentMode`in document&&11>=document.documentMode,Gr=null,Kr=null,qr=null,Jr=!1;function Yr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jr||Gr==null||Gr!==Ut(r)||(r=Gr,`selectionStart`in r&&Ur(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qr&&Rr(qr,r)||(qr=r,r=Vd(Kr,`onSelect`),0<r.length&&(t=new On(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Gr)))}function Xr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Zr={animationend:Xr(`Animation`,`AnimationEnd`),animationiteration:Xr(`Animation`,`AnimationIteration`),animationstart:Xr(`Animation`,`AnimationStart`),transitionrun:Xr(`Transition`,`TransitionRun`),transitionstart:Xr(`Transition`,`TransitionStart`),transitioncancel:Xr(`Transition`,`TransitionCancel`),transitionend:Xr(`Transition`,`TransitionEnd`)},Qr={},$r={};gn&&($r=document.createElement(`div`).style,`AnimationEvent`in window||(delete Zr.animationend.animation,delete Zr.animationiteration.animation,delete Zr.animationstart.animation),`TransitionEvent`in window||delete Zr.transitionend.transition);function ei(e){if(Qr[e])return Qr[e];if(!Zr[e])return e;var t=Zr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $r)return Qr[e]=t[n];return e}var ti=ei(`animationend`),ni=ei(`animationiteration`),ri=ei(`animationstart`),ii=ei(`transitionrun`),ai=ei(`transitionstart`),oi=ei(`transitioncancel`),si=ei(`transitionend`),ci=new Map,li=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);li.push(`scrollEnd`);function ui(e,t){ci.set(e,t),kt(t,[e])}var di=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},fi=[],pi=0,mi=0;function hi(){for(var e=pi,t=mi=pi=0;t<e;){var n=fi[t];fi[t++]=null;var r=fi[t];fi[t++]=null;var i=fi[t];fi[t++]=null;var a=fi[t];if(fi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&yi(n,i,a)}}function gi(e,t,n,r){fi[pi++]=e,fi[pi++]=t,fi[pi++]=n,fi[pi++]=r,mi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function _i(e,t,n,r){return gi(e,t,n,r),bi(e)}function vi(e,t){return gi(e,null,null,t),bi(e)}function yi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-We(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function bi(e){if(50<wu)throw wu=0,Tu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var xi={};function Si(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ci(e,t,n,r){return new Si(e,t,n,r)}function wi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ti(e,t){var n=e.alternate;return n===null?(n=Ci(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ei(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Di(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)wi(e)&&(s=1);else if(typeof e==`string`)s=ap(e,n,pe.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case re:return e=Ci(31,n,t,a),e.elementType=re,e.lanes=o,e;case y:return Oi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=Ci(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ee:return e=Ci(13,n,t,a),e.elementType=ee,e.lanes=o,e;case te:return e=Ci(19,n,t,a),e.elementType=te,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case ne:s=14;break a;case T:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=Ci(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Oi(e,t,n,r){return e=Ci(7,e,r,t),e.lanes=n,e}function ki(e,t,n){return e=Ci(6,e,null,t),e.lanes=n,e}function Ai(e){var t=Ci(18,null,null,0);return t.stateNode=e,t}function ji(e,t,n){return t=Ci(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Mi=new WeakMap;function Ni(e,t){if(typeof e==`object`&&e){var n=Mi.get(e);return n===void 0?(t={value:e,source:t,stack:Ee(t)},Mi.set(e,t),t):n}return{value:e,source:t,stack:Ee(t)}}var Pi=[],Fi=0,Ii=null,Li=0,Ri=[],zi=0,Bi=null,Vi=1,Hi=``;function Ui(e,t){Pi[Fi++]=Li,Pi[Fi++]=Ii,Ii=e,Li=t}function Wi(e,t,n){Ri[zi++]=Vi,Ri[zi++]=Hi,Ri[zi++]=Bi,Bi=e;var r=Vi;e=Hi;var i=32-We(r)-1;r&=~(1<<i),n+=1;var a=32-We(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Vi=1<<32-We(t)+i|n<<i|r,Hi=a+e}else Vi=1<<a|n<<i|r,Hi=e}function Gi(e){e.return!==null&&(Ui(e,1),Wi(e,1,0))}function Ki(e){for(;e===Ii;)Ii=Pi[--Fi],Pi[Fi]=null,Li=Pi[--Fi],Pi[Fi]=null;for(;e===Bi;)Bi=Ri[--zi],Ri[zi]=null,Hi=Ri[--zi],Ri[zi]=null,Vi=Ri[--zi],Ri[zi]=null}function qi(e,t){Ri[zi++]=Vi,Ri[zi++]=Hi,Ri[zi++]=Bi,Vi=t.id,Hi=t.overflow,Bi=e}var Ji=null,F=null,I=!1,Yi=null,Xi=!1,Zi=Error(i(519));function Qi(e){var t=Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``));throw ia(Ni(t,e)),Zi}function $i(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[pt]=e,t[mt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<Md.length;n++)Q(Md[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),qt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Zt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||qd(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=sn),t=!0):t=!1,t||Qi(e,!0)}function ea(e){for(Ji=e.return;Ji;)switch(Ji.tag){case 5:case 31:case 13:Xi=!1;return;case 27:case 3:Xi=!0;return;default:Ji=Ji.return}}function ta(e){if(e!==Ji)return!1;if(!I)return ea(e),I=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||af(e.type,e.memoizedProps)),n=!n),n&&F&&Qi(e),ea(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));F=Ef(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));F=Ef(e)}else t===27?(t=F,mf(e.type)?(e=Tf,Tf=null,F=e):F=t):F=Ji?wf(e.stateNode.nextSibling):null;return!0}function na(){F=Ji=null,I=!1}function ra(){var e=Yi;return e!==null&&(uu===null?uu=e:uu.push.apply(uu,e),Yi=null),e}function ia(e){Yi===null?Yi=[e]:Yi.push(e)}var aa=k(null),oa=null,sa=null;function ca(e,t,n){A(aa,t._currentValue),t._currentValue=n}function la(e){e._currentValue=aa.current,fe(aa)}function ua(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function da(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ua(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ua(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function fa(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Lr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ge.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[mp]:e.push(mp))}a=a.return}e!==null&&da(t,e,n,r),t.flags|=262144}function pa(e){for(e=e.firstContext;e!==null;){if(!Lr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ma(e){oa=e,sa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ha(e){return _a(oa,e)}function ga(e,t){return oa===null&&ma(e),_a(e,t)}function _a(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},sa===null){if(e===null)throw Error(i(308));sa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else sa=sa.next=t;return n}var va=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ya=t.unstable_scheduleCallback,ba=t.unstable_NormalPriority,xa={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Sa(){return{controller:new va,data:new Map,refCount:0}}function Ca(e){e.refCount--,e.refCount===0&&ya(ba,function(){e.controller.abort()})}var wa=null,Ta=0,Ea=0,Da=null;function Oa(e,t){if(wa===null){var n=wa=[];Ta=0,Ea=wd(),Da={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return Ta++,t.then(ka,ka),t}function ka(){if(--Ta===0&&wa!==null){Da!==null&&(Da.status=`fulfilled`);var e=wa;wa=null,Ea=0,Da=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Aa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ja=E.S;E.S=function(e,t){pu=Me(),typeof t==`object`&&t&&typeof t.then==`function`&&Oa(e,t),ja!==null&&ja(e,t)};var Ma=k(null);function Na(){var e=Ma.current;return e===null?q.pooledCache:e}function Pa(e,t){t===null?A(Ma,Ma.current):A(Ma,t.pool)}function Fa(){var e=Na();return e===null?null:{parent:xa._currentValue,pool:e}}var Ia=Error(i(460)),La=Error(i(474)),Ra=Error(i(542)),za={then:function(){}};function Ba(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Va(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(sn,sn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Wa(e),e;default:if(typeof t.status==`string`)t.then(sn,sn);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Wa(e),e}throw Ua=t,Ia}}function Ha(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ua=e,Ia):e}}var Ua=null;function L(){if(Ua===null)throw Error(i(459));var e=Ua;return Ua=null,e}function Wa(e){if(e===Ia||e===Ra)throw Error(i(483))}var Ga=null,Ka=0;function R(e){var t=Ka;return Ka+=1,Ga===null&&(Ga=[]),Va(Ga,e,t)}function qa(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ja(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ya(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=Ti(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=ki(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===T&&Ha(i)===t.type)?(t=a(t,n.props),qa(t,n),t.return=e,t):(t=Di(n.type,n.key,n.props,null,e.mode,r),qa(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=ji(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Oi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=ki(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=Di(t.type,t.key,t.props,null,e.mode,n),qa(n,t),n.return=e,n;case v:return t=ji(t,e.mode,n),t.return=e,t;case T:return t=Ha(t),f(e,t,n)}if(le(t)||oe(t))return t=Oi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,R(t),n);if(t.$$typeof===C)return f(e,ga(e,t),n);Ja(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case T:return n=Ha(n),p(e,t,n,r)}if(le(n)||oe(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,R(n),r);if(n.$$typeof===C)return p(e,t,ga(e,n),r);Ja(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case T:return r=Ha(r),m(e,t,n,r,i)}if(le(r)||oe(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,R(r),i);if(r.$$typeof===C)return m(e,t,n,ga(t,r),i);Ja(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),I&&Ui(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return I&&Ui(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),I&&Ui(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),I&&Ui(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return I&&Ui(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),I&&Ui(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===T&&Ha(l)===r.type){n(e,r.sibling),c=a(r,o.props),qa(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=Oi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=Di(o.type,o.key,o.props,null,e.mode,c),qa(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=ji(o,e.mode,c),c.return=e,e=c}return s(e);case T:return o=Ha(o),b(e,r,o,c)}if(le(o))return h(e,r,o,c);if(oe(o)){if(l=oe(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,R(o),c);if(o.$$typeof===C)return b(e,r,ga(e,o),c);Ja(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=ki(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ka=0;var i=b(e,t,n,r);return Ga=null,i}catch(t){if(t===Ia||t===Ra)throw t;var a=Ci(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Xa=Ya(!0),Za=Ya(!1),Qa=!1;function $a(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function eo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function to(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function no(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=bi(e),yi(e,null,n),t}return gi(e,r,t,n),bi(e)}function ro(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ot(e,n)}}function io(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ao=!1;function oo(){if(ao){var e=Da;if(e!==null)throw e}}function so(e,t,n,r){ao=!1;var i=e.updateQueue;Qa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===Ea&&(ao=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,f);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,f=typeof h==`function`?h.call(_,d,f):h,f==null)break a;d=m({},d,f);break a;case 2:Qa=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),iu|=o,e.lanes=o,e.memoizedState=d}}function co(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function lo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)co(n[e],t)}var uo=k(null),fo=k(0);function po(e,t){e=nu,A(fo,e),A(uo,t),nu=e|t.baseLanes}function mo(){A(fo,nu),A(uo,uo.current)}function ho(){nu=fo.current,fe(uo),fe(fo)}var z=k(null),go=null;function _o(e){var t=e.alternate;A(So,So.current&1),A(z,e),go===null&&(t===null||uo.current!==null||t.memoizedState!==null)&&(go=e)}function vo(e){A(So,So.current),A(z,e),go===null&&(go=e)}function yo(e){e.tag===22?(A(So,So.current),A(z,e),go===null&&(go=e)):bo(e)}function bo(){A(So,So.current),A(z,z.current)}function xo(e){fe(z),go===e&&(go=null),fe(So)}var So=k(0);function Co(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||xf(n)||Sf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wo=0,B=null,V=null,To=null,Eo=!1,Do=!1,Oo=!1,ko=0,Ao=0,jo=null,Mo=0;function H(){throw Error(i(321))}function No(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Lr(e[n],t[n]))return!1;return!0}function Po(e,t,n,r,i,a){return wo=a,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?Qs:$s,Oo=!1,a=n(r,i),Oo=!1,Do&&(a=Io(t,n,r,i)),Fo(e),a}function Fo(e){E.H=Zs;var t=V!==null&&V.next!==null;if(wo=0,To=V=B=null,Eo=!1,Ao=0,jo=null,t)throw Error(i(300));e===null||gc||(e=e.dependencies,e!==null&&pa(e)&&(gc=!0))}function Io(e,t,n,r){B=e;var a=0;do{if(Do&&(jo=null),Ao=0,Do=!1,25<=a)throw Error(i(301));if(a+=1,To=V=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}E.H=ec,o=t(n,r)}while(Do);return o}function Lo(){var e=E.H,t=e.useState()[0];return t=typeof t.then==`function`?Wo(t):t,e=e.useState()[0],(V===null?null:V.memoizedState)!==e&&(B.flags|=1024),t}function Ro(){var e=ko!==0;return ko=0,e}function zo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Bo(e){if(Eo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Eo=!1}wo=0,To=V=B=null,Do=!1,Ao=ko=0,jo=null}function Vo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return To===null?B.memoizedState=To=e:To=To.next=e,To}function Ho(){if(V===null){var e=B.alternate;e=e===null?null:e.memoizedState}else e=V.next;var t=To===null?B.memoizedState:To.next;if(t!==null)To=t,V=e;else{if(e===null)throw B.alternate===null?Error(i(467)):Error(i(310));V=e,e={memoizedState:V.memoizedState,baseState:V.baseState,baseQueue:V.baseQueue,queue:V.queue,next:null},To===null?B.memoizedState=To=e:To=To.next=e}return To}function Uo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Wo(e){var t=Ao;return Ao+=1,jo===null&&(jo=[]),e=Va(jo,e,t),t=B,(To===null?t.memoizedState:To.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?Qs:$s),e}function Go(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Wo(e);if(e.$$typeof===C)return ha(e)}throw Error(i(438,String(e)))}function Ko(e){var t=null,n=B.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=B.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Uo(),B.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ie;return t.index++,n}function qo(e,t){return typeof t==`function`?t(e):t}function Jo(e){var t=Ho();return Yo(t,V,e)}function Yo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(wo&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Ea&&(d=!0);else if((wo&p)===p){u=u.next,p===Ea&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,B.lanes|=p,iu|=p;f=u.action,Oo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,B.lanes|=f,iu|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Lr(o,e.memoizedState)&&(gc=!0,d&&(n=Da,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Xo(e){var t=Ho(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Lr(o,t.memoizedState)||(gc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Zo(e,t,n){var r=B,a=Ho(),o=I;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Lr((V||a).memoizedState,n);if(s&&(a.memoizedState=n,gc=!0),a=a.queue,ws(es.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||To!==null&&To.memoizedState.tag&1){if(r.flags|=2048,ys(9,{destroy:void 0},$o.bind(null,r,a,n,t),null),q===null)throw Error(i(349));o||wo&127||Qo(r,t,n)}return n}function Qo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=B.updateQueue,t===null?(t=Uo(),B.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function $o(e,t,n,r){t.value=n,t.getSnapshot=r,ts(t)&&ns(e)}function es(e,t,n){return n(function(){ts(t)&&ns(e)})}function ts(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Lr(e,n)}catch{return!0}}function ns(e){var t=vi(e,2);t!==null&&Ou(t,e,2)}function rs(e){var t=Vo();if(typeof e==`function`){var n=e;if(e=n(),Oo){Ue(!0);try{n()}finally{Ue(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:e},t}function os(e,t,n,r){return e.baseState=n,Yo(e,V,typeof r==`function`?r:qo)}function ss(e,t,n,r,a){if(Js(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};E.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,cs(t,o)):(o.next=n.next,t.pending=n.next=o)}}function cs(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=E.T,o={};E.T=o;try{var s=n(i,r),c=E.S;c!==null&&c(o,s),ls(e,t,s)}catch(n){ds(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),E.T=a}}else try{a=n(i,r),ls(e,t,a)}catch(n){ds(e,t,n)}}function ls(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){us(e,t,n)},function(n){return ds(e,t,n)}):us(e,t,n)}function us(e,t,n){t.status=`fulfilled`,t.value=n,fs(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,cs(e,n)))}function ds(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,fs(t),t=t.next;while(t!==r)}e.action=null}function fs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ps(e,t){return t}function ms(e,t){if(I){var n=q.formState;if(n!==null){a:{var r=B;if(I){if(F){b:{for(var i=F,a=Xi;i.nodeType!==8;){if(!a){i=null;break b}if(i=wf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){F=wf(i.nextSibling),r=i.data===`F!`;break a}}Qi(r)}r=!1}r&&(t=n[0])}}return n=Vo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ps,lastRenderedState:t},n.queue=r,n=Gs.bind(null,B,r),r.dispatch=n,r=rs(!1),a=qs.bind(null,B,!1,r.queue),r=Vo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=ss.bind(null,B,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function hs(e){var t=Ho();return gs(t,V,e)}function gs(e,t,n){if(t=Yo(e,t,ps)[0],e=Jo(qo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Wo(t)}catch(e){throw e===Ia?Ra:e}else r=t;t=Ho();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(B.flags|=2048,ys(9,{destroy:void 0},_s.bind(null,i,n),null)),[r,a,e]}function _s(e,t){e.action=t}function vs(e){var t=Ho(),n=V;if(n!==null)return gs(t,n,e);Ho(),t=t.memoizedState,n=Ho();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ys(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=B.updateQueue,t===null&&(t=Uo(),B.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function bs(){return Ho().memoizedState}function xs(e,t,n,r){var i=Vo();B.flags|=e,i.memoizedState=ys(1|t,{destroy:void 0},n,r===void 0?null:r)}function Ss(e,t,n,r){var i=Ho();r=r===void 0?null:r;var a=i.memoizedState.inst;V!==null&&r!==null&&No(r,V.memoizedState.deps)?i.memoizedState=ys(t,a,n,r):(B.flags|=e,i.memoizedState=ys(1|t,a,n,r))}function Cs(e,t){xs(8390656,8,e,t)}function ws(e,t){Ss(2048,8,e,t)}function Ts(e){B.flags|=4;var t=B.updateQueue;if(t===null)t=Uo(),B.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Es(e){var t=Ho().memoizedState;return Ts({ref:t,nextImpl:e}),function(){if(K&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Ds(e,t){return Ss(4,2,e,t)}function Os(e,t){return Ss(4,4,e,t)}function ks(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function As(e,t,n){n=n==null?null:n.concat([e]),Ss(4,4,ks.bind(null,t,e),n)}function js(){}function Ms(e,t){var n=Ho();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&No(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ns(e,t){var n=Ho();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&No(t,r[1]))return r[0];if(r=e(),Oo){Ue(!0);try{e()}finally{Ue(!1)}}return n.memoizedState=[r,t],r}function Ps(e,t,n){return n===void 0||wo&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=Du(),B.lanes|=e,iu|=e,n)}function Fs(e,t,n,r){return Lr(n,t)?n:uo.current===null?!(wo&42)||wo&1073741824&&!(Y&261930)?(gc=!0,e.memoizedState=n):(e=Du(),B.lanes|=e,iu|=e,t):(e=Ps(e,n,r),Lr(e,t)||(gc=!0),e)}function Is(e,t,n,r,i){var a=D.p;D.p=a!==0&&8>a?a:8;var o=E.T,s={};E.T=s,qs(e,!1,t,n);try{var c=i(),l=E.S;if(l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`){var u=Aa(c,r);Ks(e,t,u,Eu(e))}else Ks(e,t,r,Eu(e))}catch(n){Ks(e,t,{then:function(){},status:`rejected`,reason:n},Eu())}finally{D.p=a,o!==null&&s.types!==null&&(o.types=s.types),E.T=o}}function Ls(){}function Rs(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=zs(e).queue;Is(e,a,t,ue,n===null?Ls:function(){return Bs(e),n(r)})}function zs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:ue},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Bs(e){var t=zs(e);t.next===null&&(t=e.alternate.memoizedState),Ks(e,t.next.queue,{},Eu())}function U(){return ha(mp)}function Vs(){return Ho().memoizedState}function Hs(){return Ho().memoizedState}function Us(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Eu();e=to(n);var r=no(t,e,n);r!==null&&(Ou(r,t,n),ro(r,t,n)),t={cache:Sa()},e.payload=t;return}t=t.return}}function Ws(e,t,n){var r=Eu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Js(e)?Ys(t,n):(n=_i(e,t,n,r),n!==null&&(Ou(n,e,r),Xs(n,t,r)))}function Gs(e,t,n){var r=Eu();Ks(e,t,n,r)}function Ks(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Js(e))Ys(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Lr(s,o))return gi(e,t,i,0),q===null&&hi(),!1}catch{}if(n=_i(e,t,i,r),n!==null)return Ou(n,e,r),Xs(n,t,r),!0}return!1}function qs(e,t,n,r){if(r={lane:2,revertLane:wd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Js(e)){if(t)throw Error(i(479))}else t=_i(e,n,r,2),t!==null&&Ou(t,e,2)}function Js(e){var t=e.alternate;return e===B||t!==null&&t===B}function Ys(e,t){Do=Eo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ot(e,n)}}var Zs={readContext:ha,use:Go,useCallback:H,useContext:H,useEffect:H,useImperativeHandle:H,useLayoutEffect:H,useInsertionEffect:H,useMemo:H,useReducer:H,useRef:H,useState:H,useDebugValue:H,useDeferredValue:H,useTransition:H,useSyncExternalStore:H,useId:H,useHostTransitionStatus:H,useFormState:H,useActionState:H,useOptimistic:H,useMemoCache:H,useCacheRefresh:H};Zs.useEffectEvent=H;var Qs={readContext:ha,use:Go,useCallback:function(e,t){return Vo().memoizedState=[e,t===void 0?null:t],e},useContext:ha,useEffect:Cs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),xs(4194308,4,ks.bind(null,t,e),n)},useLayoutEffect:function(e,t){return xs(4194308,4,e,t)},useInsertionEffect:function(e,t){xs(4,2,e,t)},useMemo:function(e,t){var n=Vo();t=t===void 0?null:t;var r=e();if(Oo){Ue(!0);try{e()}finally{Ue(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Vo();if(n!==void 0){var i=n(t);if(Oo){Ue(!0);try{n(t)}finally{Ue(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ws.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var t=Vo();return e={current:e},t.memoizedState=e},useState:function(e){e=rs(e);var t=e.queue,n=Gs.bind(null,B,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:js,useDeferredValue:function(e,t){var n=Vo();return Ps(n,e,t)},useTransition:function(){var e=rs(!1);return e=Is.bind(null,B,e.queue,!0,!1),Vo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=B,a=Vo();if(I){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),q===null)throw Error(i(349));Y&127||Qo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Cs(es.bind(null,r,o,e),[e]),r.flags|=2048,ys(9,{destroy:void 0},$o.bind(null,r,o,n,t),null),n},useId:function(){var e=Vo(),t=q.identifierPrefix;if(I){var n=Hi,r=Vi;n=(r&~(1<<32-We(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=ko++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Mo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:U,useFormState:ms,useActionState:ms,useOptimistic:function(e){var t=Vo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=qs.bind(null,B,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ko,useCacheRefresh:function(){return Vo().memoizedState=Us.bind(null,B)},useEffectEvent:function(e){var t=Vo(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},$s={readContext:ha,use:Go,useCallback:Ms,useContext:ha,useEffect:ws,useImperativeHandle:As,useInsertionEffect:Ds,useLayoutEffect:Os,useMemo:Ns,useReducer:Jo,useRef:bs,useState:function(){return Jo(qo)},useDebugValue:js,useDeferredValue:function(e,t){var n=Ho();return Fs(n,V.memoizedState,e,t)},useTransition:function(){var e=Jo(qo)[0],t=Ho().memoizedState;return[typeof e==`boolean`?e:Wo(e),t]},useSyncExternalStore:Zo,useId:Vs,useHostTransitionStatus:U,useFormState:hs,useActionState:hs,useOptimistic:function(e,t){var n=Ho();return os(n,V,e,t)},useMemoCache:Ko,useCacheRefresh:Hs};$s.useEffectEvent=Es;var ec={readContext:ha,use:Go,useCallback:Ms,useContext:ha,useEffect:ws,useImperativeHandle:As,useInsertionEffect:Ds,useLayoutEffect:Os,useMemo:Ns,useReducer:Xo,useRef:bs,useState:function(){return Xo(qo)},useDebugValue:js,useDeferredValue:function(e,t){var n=Ho();return V===null?Ps(n,e,t):Fs(n,V.memoizedState,e,t)},useTransition:function(){var e=Xo(qo)[0],t=Ho().memoizedState;return[typeof e==`boolean`?e:Wo(e),t]},useSyncExternalStore:Zo,useId:Vs,useHostTransitionStatus:U,useFormState:vs,useActionState:vs,useOptimistic:function(e,t){var n=Ho();return V===null?(n.baseState=e,[e,n.queue.dispatch]):os(n,V,e,t)},useMemoCache:Ko,useCacheRefresh:Hs};ec.useEffectEvent=Es;function tc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:m({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var nc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Eu(),i=to(r);i.payload=t,n!=null&&(i.callback=n),t=no(e,i,r),t!==null&&(Ou(t,e,r),ro(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Eu(),i=to(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=no(e,i,r),t!==null&&(Ou(t,e,r),ro(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Eu(),r=to(n);r.tag=2,t!=null&&(r.callback=t),t=no(e,r,n),t!==null&&(Ou(t,e,n),ro(t,e,n))}};function rc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Rr(n,r)||!Rr(i,a):!0}function ic(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&nc.enqueueReplaceState(t,t.state,null)}function ac(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=m({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function oc(e){di(e)}function sc(e){console.error(e)}function cc(e){di(e)}function lc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function uc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function dc(e,t,n){return n=to(n),n.tag=3,n.payload={element:null},n.callback=function(){lc(e,t)},n}function fc(e){return e=to(e),e.tag=3,e}function pc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){uc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){uc(t,n,r),typeof i!=`function`&&(gu===null?gu=new Set([this]):gu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function mc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&fa(t,n,a,!0),n=z.current,n!==null){switch(n.tag){case 31:case 13:return go===null?Bu():n.alternate===null&&ru===0&&(ru=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===za?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),id(e,r,a)),!1;case 22:return n.flags|=65536,r===za?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),id(e,r,a)),!1}throw Error(i(435,n.tag))}return id(e,r,a),Bu(),!1}if(I)return t=z.current,t===null?(r!==Zi&&(t=Error(i(423),{cause:r}),ia(Ni(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ni(r,n),a=dc(e.stateNode,r,a),io(e,a),ru!==4&&(ru=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Zi&&(e=Error(i(422),{cause:r}),ia(Ni(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ni(o,n),lu===null?lu=[o]:lu.push(o),ru!==4&&(ru=2),t===null)return!0;r=Ni(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=dc(n.stateNode,r,e),io(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(gu===null||!gu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=fc(a),pc(a,e,n,r),io(n,a),!1}n=n.return}while(n!==null);return!1}var hc=Error(i(461)),gc=!1;function _c(e,t,n,r){t.child=e===null?Za(t,null,n,r):Xa(t,e.child,n,r)}function vc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ma(t),r=Po(e,t,n,o,a,i),s=Ro(),e!==null&&!gc?(zo(e,t,i),Hc(e,t,i)):(I&&s&&Gi(t),t.flags|=1,_c(e,t,r,i),t.child)}function yc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!wi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,bc(e,t,a,r,i)):(e=Di(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Uc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Rr:n,n(o,r)&&e.ref===t.ref)return Hc(e,t,i)}return t.flags|=1,e=Ti(a,r),e.ref=t.ref,e.return=t,t.child=e}function bc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Rr(a,r)&&e.ref===t.ref)if(gc=!1,t.pendingProps=r=a,Uc(e,i))e.flags&131072&&(gc=!0);else return t.lanes=e.lanes,Hc(e,t,i)}return Oc(e,t,n,r,i)}function xc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Cc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Pa(t,a===null?null:a.cachePool),a===null?mo():po(t,a),yo(t);else return r=t.lanes=536870912,Cc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Pa(t,null),mo(),bo(t)):(Pa(t,a.cachePool),po(t,a),bo(t),t.memoizedState=null);return _c(e,t,i,n),t.child}function Sc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Cc(e,t,n,r,i){var a=Na();return a=a===null?null:{parent:xa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Pa(t,null),mo(),yo(t),e!==null&&fa(e,t,r,!0),t.childLanes=i,null}function wc(e,t){return t=Lc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Tc(e,t,n){return Xa(t,e.child,null,n),e=wc(t,t.pendingProps),e.flags|=2,xo(t),t.memoizedState=null,e}function Ec(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(I){if(r.mode===`hidden`)return e=wc(t,r),t.lanes=536870912,Sc(null,e);if(vo(t),(e=F)?(e=bf(e,Xi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Bi===null?null:{id:Vi,overflow:Hi},retryLane:536870912,hydrationErrors:null},n=Ai(e),n.return=t,t.child=n,Ji=t,F=null)):e=null,e===null)throw Qi(t);return t.lanes=536870912,null}return wc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(vo(t),a)if(t.flags&256)t.flags&=-257,t=Tc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(gc||fa(e,t,n,!1),a=(n&e.childLanes)!==0,gc||a){if(r=q,r!==null&&(s=st(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,vi(e,s),Ou(r,e,s),hc;Bu(),t=Tc(e,t,n)}else e=o.treeContext,F=wf(s.nextSibling),Ji=t,I=!0,Yi=null,Xi=!1,e!==null&&qi(t,e),t=wc(t,r),t.flags|=4096;return t}return e=Ti(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Dc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Oc(e,t,n,r,i){return ma(t),n=Po(e,t,n,r,void 0,i),r=Ro(),e!==null&&!gc?(zo(e,t,i),Hc(e,t,i)):(I&&r&&Gi(t),t.flags|=1,_c(e,t,n,i),t.child)}function kc(e,t,n,r,i,a){return ma(t),t.updateQueue=null,n=Io(t,r,n,i),Fo(e),r=Ro(),e!==null&&!gc?(zo(e,t,a),Hc(e,t,a)):(I&&r&&Gi(t),t.flags|=1,_c(e,t,n,a),t.child)}function Ac(e,t,n,r,i){if(ma(t),t.stateNode===null){var a=xi,o=n.contextType;typeof o==`object`&&o&&(a=ha(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=nc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},$a(t),o=n.contextType,a.context=typeof o==`object`&&o?ha(o):xi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(tc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&nc.enqueueReplaceState(a,a.state,null),so(t,r,a,i),oo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=ac(n,s);a.props=c;var l=a.context,u=n.contextType;o=xi,typeof u==`object`&&u&&(o=ha(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&ic(t,a,r,o),Qa=!1;var f=t.memoizedState;a.state=f,so(t,r,a,i),oo(),l=t.memoizedState,s||f!==l||Qa?(typeof d==`function`&&(tc(t,n,d,r),l=t.memoizedState),(c=Qa||rc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,eo(e,t),o=t.memoizedProps,u=ac(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=xi,typeof l==`object`&&l&&(c=ha(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&ic(t,a,r,c),Qa=!1,f=t.memoizedState,a.state=f,so(t,r,a,i),oo();var p=t.memoizedState;o!==d||f!==p||Qa||e!==null&&e.dependencies!==null&&pa(e.dependencies)?(typeof s==`function`&&(tc(t,n,s,r),p=t.memoizedState),(u=Qa||rc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&pa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Dc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Xa(t,e.child,null,i),t.child=Xa(t,null,n,i)):_c(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Hc(e,t,i),e}function jc(e,t,n,r){return na(),t.flags|=256,_c(e,t,n,r),t.child}var Mc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Nc(e){return{baseLanes:e,cachePool:Fa()}}function Pc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=su),e}function Fc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(So.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(I){if(a?_o(t):bo(t),(e=F)?(e=bf(e,Xi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Bi===null?null:{id:Vi,overflow:Hi},retryLane:536870912,hydrationErrors:null},n=Ai(e),n.return=t,t.child=n,Ji=t,F=null)):e=null,e===null)throw Qi(t);return Sf(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(bo(t),a=t.mode,c=Lc({mode:`hidden`,children:c},a),r=Oi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Nc(n),r.childLanes=Pc(e,s,n),t.memoizedState=Mc,Sc(null,r)):(_o(t),Ic(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(_o(t),t.flags&=-257,t=Rc(e,t,n)):t.memoizedState===null?(bo(t),c=r.fallback,a=t.mode,r=Lc({mode:`visible`,children:r.children},a),c=Oi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Xa(t,e.child,null,n),r=t.child,r.memoizedState=Nc(n),r.childLanes=Pc(e,s,n),t.memoizedState=Mc,t=Sc(null,r)):(bo(t),t.child=e.child,t.flags|=128,t=null);else if(_o(t),Sf(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,ia({value:r,source:null,stack:null}),t=Rc(e,t,n)}else if(gc||fa(e,t,n,!1),s=(n&e.childLanes)!==0,gc||s){if(s=q,s!==null&&(r=st(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,vi(e,r),Ou(s,e,r),hc;xf(c)||Bu(),t=Rc(e,t,n)}else xf(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,F=wf(c.nextSibling),Ji=t,I=!0,Yi=null,Xi=!1,e!==null&&qi(t,e),t=Ic(t,r.children),t.flags|=4096);return t}return a?(bo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=Ti(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=Oi(c,a,n,null),c.flags|=2):c=Ti(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,Sc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Nc(n):(a=c.cachePool,a===null?a=Fa():(l=xa._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Pc(e,s,n),t.memoizedState=Mc,Sc(e.child,r)):(_o(t),n=e.child,e=n.sibling,n=Ti(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Ic(e,t){return t=Lc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Lc(e,t){return e=Ci(22,e,null,t),e.lanes=0,e}function Rc(e,t,n){return Xa(t,e.child,null,n),e=Ic(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function zc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ua(e.return,t,n)}function Bc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Vc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=So.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,A(So,o),_c(e,t,r,n),r=I?Li:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zc(e,n,t);else if(e.tag===19)zc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Co(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Bc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Co(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Bc(t,!0,n,null,a,r);break;case`together`:Bc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Hc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),iu|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(fa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Ti(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ti(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Uc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&pa(e))):!0}function Wc(e,t,n){switch(t.tag){case 3:_e(t,t.stateNode.containerInfo),ca(t,xa,e.memoizedState.cache),na();break;case 27:case 5:j(t);break;case 4:_e(t,t.stateNode.containerInfo);break;case 10:ca(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,vo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(_o(t),e=Hc(e,t,n),e===null?null:e.sibling):Fc(e,t,n):(_o(t),t.flags|=128,null);_o(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(fa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Vc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),A(So,So.current),r)break;return null;case 22:return t.lanes=0,xc(e,t,n,t.pendingProps);case 24:ca(t,xa,e.memoizedState.cache)}return Hc(e,t,n)}function Gc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)gc=!0;else{if(!Uc(e,n)&&!(t.flags&128))return gc=!1,Wc(e,t,n);gc=!!(e.flags&131072)}else gc=!1,I&&t.flags&1048576&&Wi(t,Li,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ha(t.elementType),t.type=e,typeof e==`function`)wi(e)?(r=ac(e,r),t.tag=1,t=Ac(null,t,e,r,n)):(t.tag=0,t=Oc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=vc(null,t,e,r,n);break a}else if(a===ne){t.tag=14,t=yc(null,t,e,r,n);break a}}throw t=ce(e)||e,Error(i(306,t,``))}}return t;case 0:return Oc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=ac(r,t.pendingProps),Ac(e,t,r,a,n);case 3:a:{if(_e(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,eo(e,t),so(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ca(t,xa,r),r!==o.cache&&da(t,[xa],n,!0),oo(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=jc(e,t,r,n);break a}else if(r!==a){a=Ni(Error(i(424)),t),ia(a),t=jc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(F=wf(e.firstChild),Ji=t,I=!0,Yi=null,Xi=!0,n=Za(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(na(),r===a){t=Hc(e,t,n);break a}_c(e,t,r,n)}t=t.child}return t;case 26:return Dc(e,t),e===null?(n=Gf(t.type,null,t.pendingProps,null))?t.memoizedState=n:I||(n=t.type,e=t.pendingProps,r=tf(he.current).createElement(n),r[pt]=t,r[mt]=e,Yd(r,n,e),Et(r),t.stateNode=r):t.memoizedState=Gf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return j(t),e===null&&I&&(r=t.stateNode=Of(t.type,t.pendingProps,he.current),Ji=t,Xi=!0,a=F,mf(t.type)?(Tf=a,F=wf(r.firstChild)):F=a),_c(e,t,t.pendingProps.children,n),Dc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&I&&((a=r=F)&&(r=vf(r,t.type,t.pendingProps,Xi),r===null?a=!1:(t.stateNode=r,Ji=t,F=wf(r.firstChild),Xi=!1,a=!0)),a||Qi(t)),j(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,af(a,o)?r=null:s!==null&&af(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Po(e,t,Lo,null,null,n),mp._currentValue=a),Dc(e,t),_c(e,t,r,n),t.child;case 6:return e===null&&I&&((e=n=F)&&(n=yf(n,t.pendingProps,Xi),n===null?e=!1:(t.stateNode=n,Ji=t,F=null,e=!0)),e||Qi(t)),null;case 13:return Fc(e,t,n);case 4:return _e(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Xa(t,null,r,n):_c(e,t,r,n),t.child;case 11:return vc(e,t,t.type,t.pendingProps,n);case 7:return _c(e,t,t.pendingProps,n),t.child;case 8:return _c(e,t,t.pendingProps.children,n),t.child;case 12:return _c(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ca(t,t.type,r.value),_c(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ma(t),a=ha(a),r=r(a),t.flags|=1,_c(e,t,r,n),t.child;case 14:return yc(e,t,t.type,t.pendingProps,n);case 15:return bc(e,t,t.type,t.pendingProps,n);case 19:return Vc(e,t,n);case 31:return Ec(e,t,n);case 22:return xc(e,t,n,t.pendingProps);case 24:return ma(t),r=ha(xa),e===null?(a=Na(),a===null&&(a=q,o=Sa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},$a(t),ca(t,xa,a)):((e.lanes&n)!==0&&(eo(e,t),so(t,null,null,n),oo()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ca(t,xa,r),r!==a.cache&&da(t,[xa],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ca(t,xa,r))),_c(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Kc(e){e.flags|=4}function qc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Lu())e.flags|=8192;else throw Ua=za,La}else e.flags&=-16777217}function Jc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!op(t))if(Lu())e.flags|=8192;else throw Ua=za,La}function Yc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:tt(),e.lanes|=t,cu|=t)}function Xc(e,t){if(!I)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function W(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Zc(e,t,n){var r=t.pendingProps;switch(Ki(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return W(t),null;case 1:return W(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),la(xa),ve(),n.pendingContext&&=(n.context=n.pendingContext,null),(e===null||e.child===null)&&(ta(t)?Kc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ra())),W(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Kc(t),o===null?(W(t),qc(t,a,null,r,n)):(W(t),Jc(t,o))):o?o===e.memoizedState?(W(t),t.flags&=-16777217):(Kc(t),W(t),Jc(t,o)):(e=e.memoizedProps,e!==r&&Kc(t),W(t),qc(t,a,e,r,n)),null;case 27:if(ye(t),n=he.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Kc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return W(t),null}e=pe.current,ta(t)?$i(t,e):(e=Of(a,r,n),t.stateNode=e,Kc(t))}return W(t),null;case 5:if(ye(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Kc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return W(t),null}if(o=pe.current,ta(t))$i(t,o);else{var s=tf(he.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[pt]=t,o[mt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Yd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Kc(t)}}return W(t),qc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Kc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=he.current,ta(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ji,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[pt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||qd(e.nodeValue,n)),e||Qi(t,!0)}else e=tf(e).createTextNode(r),e[pt]=t,t.stateNode=e}return W(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=ta(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[pt]=t}else na(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;W(t),e=!1}else n=ra(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(xo(t),t):(xo(t),null);if(t.flags&128)throw Error(i(558))}return W(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=ta(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[pt]=t}else na(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;W(t),a=!1}else a=ra(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(xo(t),t):(xo(t),null)}return xo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Yc(t,t.updateQueue),W(t),null);case 4:return ve(),e===null&&Ld(t.stateNode.containerInfo),W(t),null;case 10:return la(t.type),W(t),null;case 19:if(fe(So),r=t.memoizedState,r===null)return W(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Xc(r,!1);else{if(ru!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Co(e),o!==null){for(t.flags|=128,Xc(r,!1),e=o.updateQueue,t.updateQueue=e,Yc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Ei(n,e),n=n.sibling;return A(So,So.current&1|2),I&&Ui(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Me()>mu&&(t.flags|=128,a=!0,Xc(r,!1),t.lanes=4194304)}else{if(!a)if(e=Co(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Yc(t,e),Xc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!I)return W(t),null}else 2*Me()-r.renderingStartTime>mu&&n!==536870912&&(t.flags|=128,a=!0,Xc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(W(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Me(),e.sibling=null,n=So.current,A(So,a?n&1|2:n&1),I&&Ui(t,r.treeForkCount),e);case 22:case 23:return xo(t),ho(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(W(t),t.subtreeFlags&6&&(t.flags|=8192)):W(t),n=t.updateQueue,n!==null&&Yc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&fe(Ma),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),la(xa),W(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Qc(e,t){switch(Ki(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return la(xa),ve(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ye(t),null;case 31:if(t.memoizedState!==null){if(xo(t),t.alternate===null)throw Error(i(340));na()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(xo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));na()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(So),null;case 4:return ve(),null;case 10:return la(t.type),null;case 22:case 23:return xo(t),ho(),e!==null&&fe(Ma),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return la(xa),null;case 25:return null;default:return null}}function $c(e,t){switch(Ki(t),t.tag){case 3:la(xa),ve();break;case 26:case 27:case 5:ye(t);break;case 4:ve();break;case 31:t.memoizedState!==null&&xo(t);break;case 13:xo(t);break;case 19:fe(So);break;case 10:la(t.type);break;case 22:case 23:xo(t),ho(),e!==null&&fe(Ma);break;case 24:la(xa)}}function el(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function tl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function nl(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{lo(t,n)}catch(t){Z(e,e.return,t)}}}function rl(e,t,n){n.props=ac(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function il(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function al(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function ol(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function sl(e,t,n){try{var r=e.stateNode;Xd(r,e.type,n,t),r[mt]=t}catch(t){Z(e,e.return,t)}}function cl(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&mf(e.type)||e.tag===4}function ll(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||cl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&mf(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ul(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=sn));else if(r!==4&&(r===27&&mf(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(ul(e,t,n),e=e.sibling;e!==null;)ul(e,t,n),e=e.sibling}function dl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&mf(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(dl(e,t,n),e=e.sibling;e!==null;)dl(e,t,n),e=e.sibling}function fl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Yd(t,r,n),t[pt]=e,t[mt]=n}catch(t){Z(e,e.return,t)}}var pl=!1,ml=!1,hl=!1,gl=typeof WeakSet==`function`?WeakSet:Set,_l=null;function vl(e,t){if(e=e.containerInfo,$d=Cp,e=Hr(e),Ur(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(ef={focusedElem:e,selectionRange:n},Cp=!1,_l=t;_l!==null;)if(t=_l,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,_l=e;else for(;_l!==null;){switch(t=_l,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=ac(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)_f(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:_f(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,_l=e;break}_l=t.return}}function yl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Nl(e,n),r&4&&el(5,n);break;case 1:if(Nl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=ac(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&nl(n),r&512&&il(n,n.return);break;case 3:if(Nl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{lo(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&fl(n);case 26:case 5:Nl(e,n),t===null&&r&4&&ol(n),r&512&&il(n,n.return);break;case 12:Nl(e,n);break;case 31:Nl(e,n),r&4&&Tl(e,n);break;case 13:Nl(e,n),r&4&&El(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=sd.bind(null,n),Cf(e,n))));break;case 22:if(r=n.memoizedState!==null||pl,!r){t=t!==null&&t.memoizedState!==null||ml,i=pl;var a=ml;pl=r,(ml=t)&&!a?Fl(e,n,(n.subtreeFlags&8772)!=0):Nl(e,n),pl=i,ml=a}break;case 30:break;default:Nl(e,n)}}function bl(e){var t=e.alternate;t!==null&&(e.alternate=null,bl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&xt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var xl=null,Sl=!1;function Cl(e,t,n){for(n=n.child;n!==null;)wl(e,t,n),n=n.sibling}function wl(e,t,n){if(He&&typeof He.onCommitFiberUnmount==`function`)try{He.onCommitFiberUnmount(Ve,n)}catch{}switch(n.tag){case 26:ml||al(n,t),Cl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ml||al(n,t);var r=xl,i=Sl;mf(n.type)&&(xl=n.stateNode,Sl=!1),Cl(e,t,n),kf(n.stateNode),xl=r,Sl=i;break;case 5:ml||al(n,t);case 6:if(r=xl,i=Sl,xl=null,Cl(e,t,n),xl=r,Sl=i,xl!==null)if(Sl)try{(xl.nodeType===9?xl.body:xl.nodeName===`HTML`?xl.ownerDocument.body:xl).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{xl.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:xl!==null&&(Sl?(e=xl,hf(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Yp(e)):hf(xl,n.stateNode));break;case 4:r=xl,i=Sl,xl=n.stateNode.containerInfo,Sl=!0,Cl(e,t,n),xl=r,Sl=i;break;case 0:case 11:case 14:case 15:tl(2,n,t),ml||tl(4,n,t),Cl(e,t,n);break;case 1:ml||(al(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&rl(n,t,r)),Cl(e,t,n);break;case 21:Cl(e,t,n);break;case 22:ml=(r=ml)||n.memoizedState!==null,Cl(e,t,n),ml=r;break;default:Cl(e,t,n)}}function Tl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Yp(e)}catch(e){Z(t,t.return,e)}}}function El(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Yp(e)}catch(e){Z(t,t.return,e)}}function Dl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new gl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new gl),t;default:throw Error(i(435,e.tag))}}function Ol(e,t){var n=Dl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=cd.bind(null,e,t);t.then(r,r)}})}function G(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(mf(c.type)){xl=c.stateNode,Sl=!1;break a}break;case 5:xl=c.stateNode,Sl=!1;break a;case 3:case 4:xl=c.stateNode.containerInfo,Sl=!0;break a}c=c.return}if(xl===null)throw Error(i(160));wl(o,s,a),xl=null,Sl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Al(t,e),t=t.sibling}var kl=null;function Al(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:G(t,e),jl(e),r&4&&(tl(3,e,e.return),el(3,e),tl(5,e,e.return));break;case 1:G(t,e),jl(e),r&512&&(ml||n===null||al(n,n.return)),r&64&&pl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=kl;if(G(t,e),jl(e),r&512&&(ml||n===null||al(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[bt]||o[pt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Yd(o,r,n),o[pt]=e,Et(o),r=o;break a;case`link`:var s=rp(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Yd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=rp(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Yd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[pt]=e,Et(o),r=o}e.stateNode=r}else ip(a,e.type,e.stateNode);else e.stateNode=Qf(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&sl(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?ip(a,e.type,e.stateNode):Qf(a,r,e.memoizedProps))}break;case 27:G(t,e),jl(e),r&512&&(ml||n===null||al(n,n.return)),n!==null&&r&4&&sl(e,e.memoizedProps,n.memoizedProps);break;case 5:if(G(t,e),jl(e),r&512&&(ml||n===null||al(n,n.return)),e.flags&32){a=e.stateNode;try{Qt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,sl(e,a,n===null?a:n.memoizedProps)),r&1024&&(hl=!0);break;case 6:if(G(t,e),jl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(np=null,a=kl,kl=Mf(t.containerInfo),G(t,e),kl=a,jl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yp(t.containerInfo)}catch(t){Z(e,e.return,t)}hl&&(hl=!1,Ml(e));break;case 4:r=kl,kl=Mf(e.stateNode.containerInfo),G(t,e),jl(e),kl=r;break;case 12:G(t,e),jl(e);break;case 31:G(t,e),jl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ol(e,r)));break;case 13:G(t,e),jl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(fu=Me()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ol(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=pl,d=ml;if(pl=u||a,ml=d||l,G(t,e),ml=d,pl=u,jl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||pl||ml||Pl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?gf(m,!0):gf(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,Ol(e,n))));break;case 19:G(t,e),jl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ol(e,r)));break;case 30:break;case 21:break;default:G(t,e),jl(e)}}function jl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(cl(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode,o=ll(e);dl(e,o,a);break;case 5:var s=n.stateNode;n.flags&32&&(Qt(s,``),n.flags&=-33);var c=ll(e);dl(e,c,s);break;case 3:case 4:var l=n.stateNode.containerInfo,u=ll(e);ul(e,u,l);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ml(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ml(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Nl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)yl(e,t.alternate,t),t=t.sibling}function Pl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:tl(4,t,t.return),Pl(t);break;case 1:al(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&rl(t,t.return,n),Pl(t);break;case 27:kf(t.stateNode);case 26:case 5:al(t,t.return),Pl(t);break;case 22:t.memoizedState===null&&Pl(t);break;case 30:Pl(t);break;default:Pl(t)}e=e.sibling}}function Fl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Fl(i,a,n),el(4,a);break;case 1:if(Fl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)co(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&nl(a),il(a,a.return);break;case 27:fl(a);case 26:case 5:Fl(i,a,n),n&&r===null&&o&4&&ol(a),il(a,a.return);break;case 12:Fl(i,a,n);break;case 31:Fl(i,a,n),n&&o&4&&Tl(i,a);break;case 13:Fl(i,a,n),n&&o&4&&El(i,a);break;case 22:a.memoizedState===null&&Fl(i,a,n),il(a,a.return);break;case 30:break;default:Fl(i,a,n)}t=t.sibling}}function Il(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ca(n))}function Ll(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ca(e))}function Rl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)zl(e,t,n,r),t=t.sibling}function zl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Rl(e,t,n,r),i&2048&&el(9,t);break;case 1:Rl(e,t,n,r);break;case 3:Rl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ca(e)));break;case 12:if(i&2048){Rl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Rl(e,t,n,r);break;case 31:Rl(e,t,n,r);break;case 13:Rl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Rl(e,t,n,r):(a._visibility|=2,Bl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Rl(e,t,n,r):Vl(e,t),i&2048&&Il(o,t);break;case 24:Rl(e,t,n,r),i&2048&&Ll(t.alternate,t);break;default:Rl(e,t,n,r)}}function Bl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Bl(a,o,s,c,i),el(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Bl(a,o,s,c,i)):u._visibility&2?Bl(a,o,s,c,i):Vl(a,o),i&&l&2048&&Il(o.alternate,o);break;case 24:Bl(a,o,s,c,i),i&&l&2048&&Ll(o.alternate,o);break;default:Bl(a,o,s,c,i)}t=t.sibling}}function Vl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Vl(n,r),i&2048&&Il(r.alternate,r);break;case 24:Vl(n,r),i&2048&&Ll(r.alternate,r);break;default:Vl(n,r)}t=t.sibling}}var Hl=8192;function Ul(e,t,n){if(e.subtreeFlags&Hl)for(e=e.child;e!==null;)Wl(e,t,n),e=e.sibling}function Wl(e,t,n){switch(e.tag){case 26:Ul(e,t,n),e.flags&Hl&&e.memoizedState!==null&&sp(n,kl,e.memoizedState,e.memoizedProps);break;case 5:Ul(e,t,n);break;case 3:case 4:var r=kl;kl=Mf(e.stateNode.containerInfo),Ul(e,t,n),kl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Hl,Hl=16777216,Ul(e,t,n),Hl=r):Ul(e,t,n));break;default:Ul(e,t,n)}}function Gl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Kl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];_l=r,Yl(r,e)}Gl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ql(e),e=e.sibling}function ql(e){switch(e.tag){case 0:case 11:case 15:Kl(e),e.flags&2048&&tl(9,e,e.return);break;case 3:Kl(e);break;case 12:Kl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Jl(e)):Kl(e);break;default:Kl(e)}}function Jl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];_l=r,Yl(r,e)}Gl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:tl(8,t,t.return),Jl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Jl(t));break;default:Jl(t)}e=e.sibling}}function Yl(e,t){for(;_l!==null;){var n=_l;switch(n.tag){case 0:case 11:case 15:tl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ca(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,_l=r;else a:for(n=e;_l!==null;){r=_l;var i=r.sibling,a=r.return;if(bl(r),r===n){_l=null;break a}if(i!==null){i.return=a,_l=i;break a}_l=a}}}var Xl={getCacheForType:function(e){var t=ha(xa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ha(xa).controller.signal}},Zl=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,Ql=null,$l=!1,eu=!1,tu=!1,nu=0,ru=0,iu=0,au=0,ou=0,su=0,cu=0,lu=null,uu=null,du=!1,fu=0,pu=0,mu=1/0,hu=null,gu=null,_u=0,vu=null,yu=null,bu=0,xu=0,Su=null,Cu=null,wu=0,Tu=null;function Eu(){return K&2&&Y!==0?Y&-Y:E.T===null?ut():wd()}function Du(){if(su===0)if(!(Y&536870912)||I){var e=Ye;Ye<<=1,!(Ye&3932160)&&(Ye=262144),su=e}else su=536870912;return e=z.current,e!==null&&(e.flags|=32),su}function Ou(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Fu(e,0),Mu(e,Y,su,!1)),rt(e,n),(!(K&2)||e!==q)&&(e===q&&(!(K&2)&&(au|=n),ru===4&&Mu(e,Y,su,!1)),gd(e))}function ku(e,t,n){if(K&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||$e(e,t),a=r?Uu(e,t):Vu(e,t,!0),o=r;do{if(a===0){eu&&!r&&Mu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!ju(n)){a=Vu(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=lu;var l=c.current.memoizedState.isDehydrated;if(l&&(Fu(c,s).flags|=256),s=Vu(c,s,!1),s!==2){if(tu&&!l){c.errorRecoveryDisabledLanes|=o,au|=o,a=4;break a}o=uu,uu=a,o!==null&&(uu===null?uu=o:uu.push.apply(uu,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Fu(e,0),Mu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:Mu(r,t,su,!$l);break a;case 2:uu=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=fu+300-Me(),10<a)){if(Mu(r,t,su,!$l),Qe(r,0,!0)!==0)break a;bu=t,r.timeoutHandle=lf(Au.bind(null,r,n,uu,hu,du,t,su,au,cu,$l,o,`Throttled`,-0,0),a);break a}Au(r,n,uu,hu,du,t,su,au,cu,$l,o,null,-0,0)}}break}while(1);gd(e)}function Au(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sn},Wl(t,a,d);var m=(a&62914560)===a?fu-Me():(a&4194048)===a?pu-Me():0;if(m=lp(d,m),m!==null){bu=a,e.cancelPendingCommit=m(Xu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),Mu(e,a,o,!l);return}}Xu(e,t,a,n,r,i,o,s,c)}function ju(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Lr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mu(e,t,n,r){t&=~ou,t&=~au,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-We(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&at(e,n,t)}function Nu(){return K&6?!0:(_d(0,!1),!1)}function Pu(){if(J!==null){if(X===0)var e=J.return;else e=J,sa=oa=null,Bo(e),Ga=null,Ka=0,e=J;for(;e!==null;)$c(e.alternate,e),e=e.return;J=null}}function Fu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,uf(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),bu=0,Pu(),q=e,J=n=Ti(e.current,null),Y=t,X=0,Ql=null,$l=!1,eu=$e(e,t),tu=!1,cu=su=ou=au=iu=ru=0,uu=lu=null,du=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-We(r),a=1<<i;t|=e[i],r&=~a}return nu=t,hi(),n}function Iu(e,t){B=null,E.H=Zs,t===Ia||t===Ra?(t=L(),X=3):t===La?(t=L(),X=4):X=t===hc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Ql=t,J===null&&(ru=1,lc(e,Ni(t,e.current)))}function Lu(){var e=z.current;return e===null?!0:(Y&4194048)===Y?go===null:(Y&62914560)===Y||Y&536870912?e===go:!1}function Ru(){var e=E.H;return E.H=Zs,e===null?Zs:e}function zu(){var e=E.A;return E.A=Xl,e}function Bu(){ru=4,$l||(Y&4194048)!==Y&&z.current!==null||(eu=!0),!(iu&134217727)&&!(au&134217727)||q===null||Mu(q,Y,su,!1)}function Vu(e,t,n){var r=K;K|=2;var i=Ru(),a=zu();(q!==e||Y!==t)&&(hu=null,Fu(e,t)),t=!1;var o=ru;a:do try{if(X!==0&&J!==null){var s=J,c=Ql;switch(X){case 8:Pu(),o=6;break a;case 3:case 2:case 9:case 6:z.current===null&&(t=!0);var l=X;if(X=0,Ql=null,qu(e,s,c,l),n&&eu){o=0;break a}break;default:l=X,X=0,Ql=null,qu(e,s,c,l)}}Hu(),o=ru;break}catch(t){Iu(e,t)}while(1);return t&&e.shellSuspendCounter++,sa=oa=null,K=r,E.H=i,E.A=a,J===null&&(q=null,Y=0,hi()),o}function Hu(){for(;J!==null;)Gu(J)}function Uu(e,t){var n=K;K|=2;var r=Ru(),a=zu();q!==e||Y!==t?(hu=null,mu=Me()+500,Fu(e,t)):eu=$e(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=Ql;b:switch(X){case 1:X=0,Ql=null,qu(e,t,o,1);break;case 2:case 9:if(Ba(o)){X=0,Ql=null,Ku(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),gd(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:Ba(o)?(X=0,Ql=null,Ku(t)):(X=0,Ql=null,qu(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?op(s):c.stateNode.complete){X=0,Ql=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Ju(u))}break b}}X=0,Ql=null,qu(e,t,o,5);break;case 6:X=0,Ql=null,qu(e,t,o,6);break;case 8:Pu(),ru=6;break a;default:throw Error(i(462))}}Wu();break}catch(t){Iu(e,t)}while(1);return sa=oa=null,E.H=r,E.A=a,K=n,J===null?(q=null,Y=0,hi(),ru):0}function Wu(){for(;J!==null&&!Ae();)Gu(J)}function Gu(e){var t=Gc(e.alternate,e,nu);e.memoizedProps=e.pendingProps,t===null?Ju(e):J=t}function Ku(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=kc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=kc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:Bo(t);default:$c(n,t),t=J=Ei(t,nu),t=Gc(n,t,nu)}e.memoizedProps=e.pendingProps,t===null?Ju(e):J=t}function qu(e,t,n,r){sa=oa=null,Bo(t),Ga=null,Ka=0;var i=t.return;try{if(mc(e,i,t,n,Y)){ru=1,lc(e,Ni(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;ru=1,lc(e,Ni(n,e.current)),J=null;return}t.flags&32768?(I||r===1?e=!0:eu||Y&536870912?e=!1:($l=e=!0,(r===2||r===9||r===3||r===6)&&(r=z.current,r!==null&&r.tag===13&&(r.flags|=16384))),Yu(t,e)):Ju(t)}function Ju(e){var t=e;do{if(t.flags&32768){Yu(t,$l);return}e=t.return;var n=Zc(t.alternate,t,nu);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);ru===0&&(ru=5)}function Yu(e,t){do{var n=Qc(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);ru=6,J=null}function Xu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do td();while(_u!==0);if(K&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=mi,it(e,n,o,s,c,l),e===q&&(J=q=null,Y=0),yu=t,vu=e,bu=n,xu=o,Su=a,Cu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,ld(Ie,function(){return nd(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=E.T,E.T=null,a=D.p,D.p=2,s=K,K|=4;try{vl(e,t,n)}finally{K=s,D.p=a,E.T=r}}_u=1,Zu(),Qu(),$u()}}function Zu(){if(_u===1){_u=0;var e=vu,t=yu,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=K;K|=4;try{Al(t,e);var a=ef,o=Hr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Vr(s.ownerDocument.documentElement,s)){if(c!==null&&Ur(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Br(s,h),v=Br(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}Cp=!!$d,ef=$d=null}finally{K=i,D.p=r,E.T=n}}e.current=t,_u=2}}function Qu(){if(_u===2){_u=0;var e=vu,t=yu,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=K;K|=4;try{yl(e,t.alternate,t)}finally{K=i,D.p=r,E.T=n}}_u=3}}function $u(){if(_u===4||_u===3){_u=0,je();var e=vu,t=yu,n=bu,r=Cu;t.subtreeFlags&10256||t.flags&10256?_u=5:(_u=0,yu=vu=null,ed(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(gu=null),lt(n),t=t.stateNode,He&&typeof He.onCommitFiberRoot==`function`)try{He.onCommitFiberRoot(Ve,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=E.T,i=D.p,D.p=2,E.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{E.T=t,D.p=i}}bu&3&&td(),gd(e),i=e.pendingLanes,n&261930&&i&42?e===Tu?wu++:(wu=0,Tu=e):wu=0,_d(0,!1)}}function ed(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ca(t)))}function td(){return Zu(),Qu(),$u(),nd()}function nd(){if(_u!==5)return!1;var e=vu,t=xu;xu=0;var n=lt(bu),r=E.T,a=D.p;try{D.p=32>n?32:n,E.T=null,n=Su,Su=null;var o=vu,s=bu;if(_u=0,yu=vu=null,bu=0,K&6)throw Error(i(331));var c=K;if(K|=4,ql(o.current),zl(o,o.current,s,n),K=c,_d(0,!1),He&&typeof He.onPostCommitFiberRoot==`function`)try{He.onPostCommitFiberRoot(Ve,o)}catch{}return!0}finally{D.p=a,E.T=r,ed(e,t)}}function rd(e,t,n){t=Ni(n,t),t=dc(e.stateNode,t,2),e=no(e,t,2),e!==null&&(rt(e,2),gd(e))}function Z(e,t,n){if(e.tag===3)rd(e,e,n);else for(;t!==null;){if(t.tag===3){rd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(gu===null||!gu.has(r))){e=Ni(n,e),n=fc(2),r=no(t,n,2),r!==null&&(pc(n,r,t,e),rt(r,2),gd(r));break}}t=t.return}}function id(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(tu=!0,i.add(n),e=ad.bind(null,e,t,n),t.then(e,e))}function ad(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(ru===4||ru===3&&(Y&62914560)===Y&&300>Me()-fu?!(K&2)&&Fu(e,0):ou|=n,cu===Y&&(cu=0)),gd(e)}function od(e,t){t===0&&(t=tt()),e=vi(e,t),e!==null&&(rt(e,t),gd(e))}function sd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),od(e,n)}function cd(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),od(e,n)}function ld(e,t){return Oe(e,t)}var ud=null,dd=null,fd=!1,pd=!1,md=!1,hd=0;function gd(e){e!==dd&&e.next===null&&(dd===null?ud=dd=e:dd=dd.next=e),pd=!0,fd||(fd=!0,Cd())}function _d(e,t){if(!md&&pd){md=!0;do for(var n=!1,r=ud;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-We(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Sd(r,a))}else a=Y,a=Qe(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||$e(r,a)||(n=!0,Sd(r,a));r=r.next}while(n);md=!1}}function vd(){yd()}function yd(){pd=fd=!1;var e=0;hd!==0&&cf()&&(e=hd);for(var t=Me(),n=null,r=ud;r!==null;){var i=r.next,a=bd(r,t);a===0?(r.next=null,n===null?ud=i:n.next=i,i===null&&(dd=n)):(n=r,(e!==0||a&3)&&(pd=!0)),r=i}_u!==0&&_u!==5||_d(e,!1),hd!==0&&(hd=0)}function bd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-We(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=et(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=Qe(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&ke(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||$e(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&ke(r),lt(n)){case 2:case 8:n=Fe;break;case 32:n=Ie;break;case 268435456:n=Re;break;default:n=Ie}return r=xd.bind(null,e),n=Oe(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&ke(r),e.callbackPriority=2,e.callbackNode=null,2}function xd(e,t){if(_u!==0&&_u!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(td()&&e.callbackNode!==n)return null;var r=Y;return r=Qe(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(ku(e,r,t),bd(e,Me()),e.callbackNode!=null&&e.callbackNode===n?xd.bind(null,e):null)}function Sd(e,t){if(td())return null;ku(e,t,!0)}function Cd(){ff(function(){K&6?Oe(Pe,vd):yd()})}function wd(){if(hd===0){var e=Ea;e===0&&(e=Je,Je<<=1,!(Je&261888)&&(Je=256)),hd=e}return hd}function Td(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:on(``+e)}function Ed(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Dd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Td((i[mt]||null).action),o=r.submitter;o&&(t=(t=o[mt]||null)?Td(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new On(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(hd!==0){var e=o?Ed(i,o):new FormData(i);Rs(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?Ed(i,o):new FormData(i),Rs(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Od=0;Od<li.length;Od++){var kd=li[Od],Ad=kd.toLowerCase(),jd=kd[0].toUpperCase()+kd.slice(1);ui(Ad,`on`+jd)}ui(ti,`onAnimationEnd`),ui(ni,`onAnimationIteration`),ui(ri,`onAnimationStart`),ui(`dblclick`,`onDoubleClick`),ui(`focusin`,`onFocus`),ui(`focusout`,`onBlur`),ui(ii,`onTransitionRun`),ui(ai,`onTransitionStart`),ui(oi,`onTransitionCancel`),ui(si,`onTransitionEnd`),At(`onMouseEnter`,[`mouseout`,`mouseover`]),At(`onMouseLeave`,[`mouseout`,`mouseover`]),At(`onPointerEnter`,[`pointerout`,`pointerover`]),At(`onPointerLeave`,[`pointerout`,`pointerover`]),kt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),kt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),kt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),kt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),kt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),kt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var Md=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Nd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(Md));function Pd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){di(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){di(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[gt];n===void 0&&(n=t[gt]=new Set);var r=e+`__bubble`;n.has(r)||(Rd(t,e,2,!1),n.add(r))}function Fd(e,t,n){var r=0;t&&(r|=4),Rd(n,e,r,t)}var Id=`_reactListening`+Math.random().toString(36).slice(2);function Ld(e){if(!e[Id]){e[Id]=!0,Dt.forEach(function(t){t!==`selectionchange`&&(Nd.has(t)||Fd(t,!1,e),Fd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Id]||(t[Id]=!0,Fd(`selectionchange`,!1,t))}}function Rd(e,t,n,r){switch(Ap(t)){case 2:var i=wp;break;case 8:i=Tp;break;default:i=Ep}n=i.bind(null,t,n,e),i=void 0,!_n||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function zd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=St(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}mn(function(){var r=a,i=ln(n),s=[];a:{var c=ci.get(e);if(c!==void 0){var l=On,u=e;switch(e){case`keypress`:if(Cn(n)===0)break a;case`keydown`:case`keyup`:l=Yn;break;case`focusin`:u=`focus`,l=zn;break;case`focusout`:u=`blur`,l=zn;break;case`beforeblur`:case`afterblur`:l=zn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Fn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Ln;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=$n;break;case ti:case ni:case ri:l=Bn;break;case si:l=tr;break;case`scroll`:case`scrollend`:l=An;break;case`wheel`:l=rr;break;case`copy`:case`cut`:case`paste`:l=N;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Zn;break;case`toggle`:case`beforetoggle`:l=ar}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=hn(m,p),g!=null&&d.push(Bd(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==cn&&(u=n.relatedTarget||n.fromElement)&&(St(u)||u[ht]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?St(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Fn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Zn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:wt(l),h=u==null?c:wt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,St(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Hd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Ud(s,c,l,d,!1),u!==null&&f!==null&&Ud(s,f,u,d,!0)}}a:{if(c=r?wt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=Tr;else if(yr(c))if(Er)v=Fr;else{v=Nr;var y=Mr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&nn(r.elementType)&&(v=Tr):v=Pr;if(v&&=v(e,r)){br(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Jt(c,`number`,c.value)}switch(y=r?wt(r):window,e){case`focusin`:(yr(y)||y.contentEditable===`true`)&&(Gr=y,Kr=r,qr=null);break;case`focusout`:qr=Kr=Gr=null;break;case`mousedown`:Jr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Jr=!1,Yr(s,n,i);break;case`selectionchange`:if(Wr)break;case`keydown`:case`keyup`:Yr(s,n,i)}var b;if(sr)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else hr?pr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(ur&&n.locale!==`ko`&&(hr||x!==`onCompositionStart`?x===`onCompositionEnd`&&hr&&(b=Sn()):(yn=i,bn=`value`in yn?yn.value:yn.textContent,hr=!0)),y=Vd(r,x),0<y.length&&(x=new Un(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=mr(n),b!==null&&(x.data=b)))),(b=lr?gr(e,n):_r(e,n))&&(x=Vd(r,`onBeforeInput`),0<x.length&&(y=new Un(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),Dd(s,e,r,n,i)}Pd(s,t)})}function Bd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vd(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=hn(e,n),i!=null&&r.unshift(Bd(e,i,a)),i=hn(e,t),i!=null&&r.push(Bd(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Hd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ud(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=hn(n,a),l!=null&&o.unshift(Bd(n,l,c))):i||(l=hn(n,a),l!=null&&o.push(Bd(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Wd=/\r\n?/g,Gd=/\u0000|\uFFFD/g;function Kd(e){return(typeof e==`string`?e:``+e).replace(Wd,`
`).replace(Gd,``)}function qd(e,t){return t=Kd(t),Kd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Qt(e,``+r);break;case`className`:It(e,`class`,r);break;case`tabIndex`:It(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:It(e,n,r);break;case`style`:tn(e,r,o);break;case`data`:if(t!==`object`){It(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=sn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=on(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Ft(e,`popover`,r);break;case`xlinkActuate`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Ft(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=rn.get(n)||n,Ft(e,n,r))}}function Jd(e,t,n,r,a,o){switch(n){case`style`:tn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Qt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=sn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Ot.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[mt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Ft(e,n,r)}}}function Yd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}qt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Yt(e,!!r,n,!0):Yt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Zt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<Md.length;r++)Q(Md[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(nn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Jd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Xd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Kt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Yt(e,!!n,n?[]:``,!1):Yt(e,!!n,t,!0)):Yt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Xt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(nn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Jd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Jd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Zd(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Qd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Zd(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Zd(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var $d=null,ef=null;function tf(e){return e.nodeType===9?e:e.ownerDocument}function nf(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function rf(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function af(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var sf=null;function cf(){var e=window.event;return e&&e.type===`popstate`?e===sf?!1:(sf=e,!0):(sf=null,!1)}var lf=typeof setTimeout==`function`?setTimeout:void 0,uf=typeof clearTimeout==`function`?clearTimeout:void 0,df=typeof Promise==`function`?Promise:void 0,ff=typeof queueMicrotask==`function`?queueMicrotask:df===void 0?lf:function(e){return df.resolve(null).then(e).catch(pf)};function pf(e){setTimeout(function(){throw e})}function mf(e){return e===`head`}function hf(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Yp(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)kf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,kf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[bt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&kf(e.ownerDocument.body);n=i}while(n);Yp(t)}function gf(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function _f(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:_f(n),xt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function vf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(r){if(!e[bt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}}else if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;if(e=wf(e.nextSibling),e===null)break}return null}function yf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=wf(e.nextSibling),e===null))return null;return e}function bf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=wf(e.nextSibling),e===null))return null;return e}function xf(e){return e.data===`$?`||e.data===`$~`}function Sf(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function Cf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function wf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var Tf=null;function Ef(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return wf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function Df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function Of(e,t,n){switch(t=tf(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function kf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);xt(e)}var Af=new Map,jf=new Set;function Mf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Nf=D.d;D.d={f:Pf,r:Ff,D:Rf,C:zf,L:Bf,m:Vf,X:Uf,S:Hf,M:Wf};function Pf(){var e=Nf.f(),t=Nu();return e||t}function Ff(e){var t=Ct(e);t!==null&&t.tag===5&&t.type===`form`?Bs(t):Nf.r(e)}var If=typeof document>`u`?null:document;function Lf(e,t,n){var r=If;if(r&&typeof t==`string`&&t){var i=Gt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),jf.has(i)||(jf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Yd(t,`link`,e),Et(t),r.head.appendChild(t)))}}function Rf(e){Nf.D(e),Lf(`dns-prefetch`,e,null)}function zf(e,t){Nf.C(e,t),Lf(`preconnect`,e,t)}function Bf(e,t,n){Nf.L(e,t,n);var r=If;if(r&&e&&t){var i=`link[rel="preload"][as="`+Gt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Gt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Gt(n.imageSizes)+`"]`)):i+=`[href="`+Gt(e)+`"]`;var a=i;switch(t){case`style`:a=Kf(e);break;case`script`:a=Xf(e)}Af.has(a)||(e=m({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),Af.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(qf(a))||t===`script`&&r.querySelector(Zf(a))||(t=r.createElement(`link`),Yd(t,`link`,e),Et(t),r.head.appendChild(t)))}}function Vf(e,t){Nf.m(e,t);var n=If;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Gt(r)+`"][href="`+Gt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Xf(e)}if(!Af.has(a)&&(e=m({rel:`modulepreload`,href:e},t),Af.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Zf(a)))return}r=n.createElement(`link`),Yd(r,`link`,e),Et(r),n.head.appendChild(r)}}}function Hf(e,t,n){Nf.S(e,t,n);var r=If;if(r&&e){var i=Tt(r).hoistableStyles,a=Kf(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(qf(a)))s.loading=5;else{e=m({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=Af.get(a))&&ep(e,n);var c=o=r.createElement(`link`);Et(c),Yd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,$f(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Uf(e,t){Nf.X(e,t);var n=If;if(n&&e){var r=Tt(n).hoistableScripts,i=Xf(e),a=r.get(i);a||(a=n.querySelector(Zf(i)),a||(e=m({src:e,async:!0},t),(t=Af.get(i))&&tp(e,t),a=n.createElement(`script`),Et(a),Yd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Wf(e,t){Nf.M(e,t);var n=If;if(n&&e){var r=Tt(n).hoistableScripts,i=Xf(e),a=r.get(i);a||(a=n.querySelector(Zf(i)),a||(e=m({src:e,async:!0,type:`module`},t),(t=Af.get(i))&&tp(e,t),a=n.createElement(`script`),Et(a),Yd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Gf(e,t,n,r){var a=(a=he.current)?Mf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Kf(n.href),n=Tt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Kf(n.href);var o=Tt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(qf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),Af.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Af.set(e,n),o||Yf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Xf(n),n=Tt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Kf(e){return`href="`+Gt(e)+`"`}function qf(e){return`link[rel="stylesheet"][`+e+`]`}function Jf(e){return m({},e,{"data-precedence":e.precedence,precedence:null})}function Yf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Yd(t,`link`,n),Et(t),e.head.appendChild(t))}function Xf(e){return`[src="`+Gt(e)+`"]`}function Zf(e){return`script[async]`+e}function Qf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Gt(n.href)+`"]`);if(r)return t.instance=r,Et(r),r;var a=m({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Et(r),Yd(r,`style`,a),$f(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Kf(n.href);var o=e.querySelector(qf(a));if(o)return t.state.loading|=4,t.instance=o,Et(o),o;r=Jf(n),(a=Af.get(a))&&ep(r,a),o=(e.ownerDocument||e).createElement(`link`),Et(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Yd(o,`link`,r),t.state.loading|=4,$f(o,n.precedence,e),t.instance=o;case`script`:return o=Xf(n.src),(a=e.querySelector(Zf(o)))?(t.instance=a,Et(a),a):(r=n,(a=Af.get(o))&&(r=m({},n),tp(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Et(a),Yd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,$f(r,n.precedence,e));return t.instance}function $f(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function ep(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function tp(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var np=null;function rp(e,t,n){if(np===null){var r=new Map,i=np=new Map;i.set(n,r)}else i=np,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[bt]||a[pt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function ip(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function ap(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function op(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function sp(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Kf(r.href),a=t.querySelector(qf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=up.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Et(a);return}a=t.ownerDocument||t,r=Jf(r),(i=Af.get(i))&&ep(r,i),a=a.createElement(`link`),Et(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Yd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=up.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var cp=0;function lp(e,t){return e.stylesheets&&e.count===0&&fp(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&fp(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&cp===0&&(cp=62500*Qd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&fp(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>cp?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function up(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)fp(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var dp=null;function fp(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,dp=new Map,t.forEach(pp,e),dp=null,up.call(e))}function pp(e,t){if(!(t.state.loading&4)){var n=dp.get(e);if(n)var r=n.get(null);else{n=new Map,dp.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=up.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var mp={$$typeof:C,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function hp(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nt(0),this.hiddenUpdates=nt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function gp(e,t,n,r,i,a,o,s,c,l,u,d){return e=new hp(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=Ci(3,null,null,t),e.current=a,a.stateNode=e,t=Sa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},$a(a),e}function _p(e){return e?(e=xi,e):xi}function vp(e,t,n,r,i,a){i=_p(i),r.context===null?r.context=i:r.pendingContext=i,r=to(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=no(e,r,t),n!==null&&(Ou(n,e,t),ro(n,e,t))}function yp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function bp(e,t){yp(e,t),(e=e.alternate)&&yp(e,t)}function xp(e){if(e.tag===13||e.tag===31){var t=vi(e,67108864);t!==null&&Ou(t,e,67108864),bp(e,67108864)}}function Sp(e){if(e.tag===13||e.tag===31){var t=Eu();t=ct(t);var n=vi(e,t);n!==null&&Ou(n,e,t),bp(e,t)}}var Cp=!0;function wp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=2,Ep(e,t,n,r)}finally{D.p=a,E.T=i}}function Tp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=8,Ep(e,t,n,r)}finally{D.p=a,E.T=i}}function Ep(e,t,n,r){if(Cp){var i=Dp(r);if(i===null)zd(e,t,r,Op,n),zp(e,r);else if(Vp(i,e,t,n,r))r.stopPropagation();else if(zp(e,r),t&4&&-1<Rp.indexOf(e)){for(;i!==null;){var a=Ct(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ze(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-We(o);s.entanglements[1]|=c,o&=~c}gd(a),!(K&6)&&(mu=Me()+500,_d(0,!1))}}break;case 31:case 13:s=vi(a,2),s!==null&&Ou(s,a,2),Nu(),bp(a,2)}if(a=Dp(r),a===null&&zd(e,t,r,Op,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else zd(e,t,r,null,n)}}function Dp(e){return e=ln(e),kp(e)}var Op=null;function kp(e){if(Op=null,e=St(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Op=e,null}function Ap(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ne()){case Pe:return 2;case Fe:return 8;case Ie:case Le:return 32;case Re:return 268435456;default:return 32}default:return 32}}var jp=!1,Mp=null,Np=null,Pp=null,Fp=new Map,Ip=new Map,Lp=[],Rp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function zp(e,t){switch(e){case`focusin`:case`focusout`:Mp=null;break;case`dragenter`:case`dragleave`:Np=null;break;case`mouseover`:case`mouseout`:Pp=null;break;case`pointerover`:case`pointerout`:Fp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:Ip.delete(t.pointerId)}}function Bp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ct(t),t!==null&&xp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Vp(e,t,n,r,i){switch(t){case`focusin`:return Mp=Bp(Mp,e,t,n,r,i),!0;case`dragenter`:return Np=Bp(Np,e,t,n,r,i),!0;case`mouseover`:return Pp=Bp(Pp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Fp.set(a,Bp(Fp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,Ip.set(a,Bp(Ip.get(a)||null,e,t,n,r,i)),!0}return!1}function Hp(e){var t=St(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,dt(e.priority,function(){Sp(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,dt(e.priority,function(){Sp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Up(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);cn=r,n.target.dispatchEvent(r),cn=null}else return t=Ct(n),t!==null&&xp(t),e.blockedOn=n,!1;t.shift()}return!0}function Wp(e,t,n){Up(e)&&n.delete(t)}function Gp(){jp=!1,Mp!==null&&Up(Mp)&&(Mp=null),Np!==null&&Up(Np)&&(Np=null),Pp!==null&&Up(Pp)&&(Pp=null),Fp.forEach(Wp),Ip.forEach(Wp)}function Kp(e,n){e.blockedOn===n&&(e.blockedOn=null,jp||(jp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Gp)))}var qp=null;function Jp(e){qp!==e&&(qp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){qp===e&&(qp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(kp(r||n)===null)continue;break}var a=Ct(n);a!==null&&(e.splice(t,3),t-=3,Rs(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Yp(e){function t(t){return Kp(t,e)}Mp!==null&&Kp(Mp,e),Np!==null&&Kp(Np,e),Pp!==null&&Kp(Pp,e),Fp.forEach(t),Ip.forEach(t);for(var n=0;n<Lp.length;n++){var r=Lp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Lp.length&&(n=Lp[0],n.blockedOn===null);)Hp(n),n.blockedOn===null&&Lp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[mt]||null;if(typeof a==`function`)o||Jp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[mt]||null)s=o.formAction;else if(kp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Jp(n)}}}function Xp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Zp(e){this._internalRoot=e}Qp.prototype.render=Zp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current,r=Eu();vp(n,r,e,t,null,null)},Qp.prototype.unmount=Zp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;vp(e.current,2,null,e,null,null),Nu(),t[ht]=null}};function Qp(e){this._internalRoot=e}Qp.prototype.unstable_scheduleHydration=function(e){if(e){var t=ut();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lp.length&&t!==0&&t<Lp[n].priority;n++);Lp.splice(n,0,e),n===0&&Hp(e)}};var $p=n.version;if($p!==`19.2.0`)throw Error(i(527,$p,`19.2.0`));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var em={bundleType:0,version:`19.2.0`,rendererPackageName:`react-dom`,currentDispatcherRef:E,reconcilerVersion:`19.2.0`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var tm=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tm.isDisabled&&tm.supportsFiber)try{Ve=tm.inject(em),He=tm}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=oc,s=sc,c=cc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=gp(e,1,!1,null,null,n,r,null,o,s,c,Xp),e[ht]=t.current,Ld(e),new Zp(t)}})),_=l(o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()}))()),v=l(d()),y=function(){return y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},y.apply(this,arguments)};function b(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||=Array.prototype.slice.call(t,0,r),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var x=o(((e,t)=>{t.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(i!==void 0)return!!i;if(e===t)return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var l=a[c];if(!s(l))return!1;var u=e[l],d=t[l];if(i=n?n.call(r,u,d,l):void 0,i===!1||i===void 0&&u!==d)return!1}return!0}})),S=`-ms-`,C=`-moz-`,w=`-webkit-`,ee=`comm`,te=`rule`,ne=`decl`,T=`@import`,re=`@keyframes`,ie=`@layer`,ae=Math.abs,oe=String.fromCharCode,se=Object.assign;function ce(e,t){return O(e,0)^45?(((t<<2^O(e,0))<<2^O(e,1))<<2^O(e,2))<<2^O(e,3):0}function le(e){return e.trim()}function E(e,t){return(e=t.exec(e))?e[0]:e}function D(e,t,n){return e.replace(t,n)}function ue(e,t,n){return e.indexOf(t,n)}function O(e,t){return e.charCodeAt(t)|0}function de(e,t,n){return e.slice(t,n)}function k(e){return e.length}function fe(e){return e.length}function A(e,t){return t.push(e),e}function pe(e,t){return e.map(t).join(``)}function me(e,t){return e.filter(function(e){return!E(e,t)})}var he=1,ge=1,_e=0,ve=0,j=0,ye=``;function be(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:he,column:ge,length:o,return:``,siblings:s}}function xe(e,t){return se(be(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function Se(e){for(;e.root;)e=xe(e.root,{children:[e]});A(e,e.siblings)}function Ce(){return j}function we(){return j=ve>0?O(ye,--ve):0,ge--,j===10&&(ge=1,he--),j}function Te(){return j=ve<_e?O(ye,ve++):0,ge++,j===10&&(ge=1,he++),j}function Ee(){return O(ye,ve)}function De(){return ve}function Oe(e,t){return de(ye,e,t)}function ke(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ae(e){return he=ge=1,_e=k(ye=e),ve=0,[]}function je(e){return ye=``,e}function Me(e){return le(Oe(ve-1,Fe(e===91?e+2:e===40?e+1:e)))}function Ne(e){for(;(j=Ee())&&j<33;)Te();return ke(e)>2||ke(j)>3?``:` `}function Pe(e,t){for(;--t&&Te()&&!(j<48||j>102||j>57&&j<65||j>70&&j<97););return Oe(e,De()+(t<6&&Ee()==32&&Te()==32))}function Fe(e){for(;Te();)switch(j){case e:return ve;case 34:case 39:e!==34&&e!==39&&Fe(j);break;case 40:e===41&&Fe(e);break;case 92:Te();break}return ve}function Ie(e,t){for(;Te()&&e+j!==57&&!(e+j===84&&Ee()===47););return`/*`+Oe(t,ve-1)+`*`+oe(e===47?e:Te())}function Le(e){for(;!ke(Ee());)Te();return Oe(e,ve)}function Re(e){return je(ze(``,null,null,null,[``],e=Ae(e),0,[0],e))}function ze(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=Te()){case 40:if(m!=108&&O(C,d-1)==58){ue(C+=D(Me(v),`&`,`&\f`),`&\f`,ae(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:C+=Me(v);break;case 9:case 10:case 13:case 32:C+=Ne(m);break;case 92:C+=Pe(De()-1,7);continue;case 47:switch(Ee()){case 42:case 47:A(Ve(Ie(Te(),De()),t,n,c),c);break;default:C+=`/`}break;case 123*h:s[l++]=k(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=D(C,/\f/g,``)),p>0&&k(C)-d&&A(p>32?He(C+`;`,r,n,d-1,c):He(D(C,` `,``)+`;`,r,n,d-2,c),c);break;case 59:C+=`;`;default:if(A(S=Be(C,t,n,l,u,i,s,y,b=[],x=[],d,a),a),v===123)if(u===0)ze(C,t,S,S,b,a,d,s,x);else switch(f===99&&O(C,3)===110?100:f){case 100:case 108:case 109:case 115:ze(e,S,S,r&&A(Be(e,S,S,0,0,i,s,y,i,b=[],d,x),x),i,x,d,s,r?b:x);break;default:ze(C,S,S,S,[``],x,0,s,x)}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+k(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&we()==125)continue}switch(C+=oe(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(k(C)-1)*_,_=1;break;case 64:Ee()===45&&(C+=Me(Te())),f=Ee(),u=d=k(y=C+=Le(De())),v++;break;case 45:m===45&&k(C)==2&&(h=0)}}return a}function Be(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=fe(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=de(e,f+1,f=ae(g=o[h])),b=e;v<m;++v)(b=le(g>0?p[v]+` `+y:D(y,/&\f/g,p[v])))&&(c[_++]=b);return be(e,t,n,i===0?te:s,c,l,u,d)}function Ve(e,t,n,r){return be(e,t,n,ee,oe(Ce()),de(e,2,-2),0,r)}function He(e,t,n,r,i){return be(e,t,n,ne,de(e,0,r),de(e,r+1,-1),r,i)}function Ue(e,t,n){switch(ce(e,t)){case 5103:return w+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return w+e+e;case 4789:return C+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return w+e+C+e+S+e+e;case 5936:switch(O(e,t+11)){case 114:return w+e+S+D(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return w+e+S+D(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return w+e+S+D(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return w+e+S+e+e;case 6165:return w+e+S+`flex-`+e+e;case 5187:return w+e+D(e,/(\w+).+(:[^]+)/,w+`box-$1$2`+S+`flex-$1$2`)+e;case 5443:return w+e+S+`flex-item-`+D(e,/flex-|-self/g,``)+(E(e,/flex-|baseline/)?``:S+`grid-row-`+D(e,/flex-|-self/g,``))+e;case 4675:return w+e+S+`flex-line-pack`+D(e,/align-content|flex-|-self/g,``)+e;case 5548:return w+e+S+D(e,`shrink`,`negative`)+e;case 5292:return w+e+S+D(e,`basis`,`preferred-size`)+e;case 6060:return w+`box-`+D(e,`-grow`,``)+w+e+S+D(e,`grow`,`positive`)+e;case 4554:return w+D(e,/([^-])(transform)/g,`$1`+w+`$2`)+e;case 6187:return D(D(D(e,/(zoom-|grab)/,w+`$1`),/(image-set)/,w+`$1`),e,``)+e;case 5495:case 3959:return D(e,/(image-set\([^]*)/,w+"$1$`$1");case 4968:return D(D(e,/(.+:)(flex-)?(.*)/,w+`box-pack:$3`+S+`flex-pack:$3`),/s.+-b[^;]+/,`justify`)+w+e+e;case 4200:if(!E(e,/flex-|baseline/))return S+`grid-column-align`+de(e,t)+e;break;case 2592:case 3360:return S+D(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,E(e.props,/grid-\w+-end/)})?~ue(e+(n=n[t].value),`span`,0)?e:S+D(e,`-start`,``)+e+S+`grid-row-span:`+(~ue(n,`span`,0)?E(n,/\d+/):E(n,/\d+/)-+E(e,/\d+/))+`;`:S+D(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return E(e.props,/grid-\w+-start/)})?e:S+D(D(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return D(e,/(.+)-inline(.+)/,w+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(k(e)-1-t>6)switch(O(e,t+1)){case 109:if(O(e,t+4)!==45)break;case 102:return D(e,/(.+:)(.+)-([^]+)/,`$1`+w+`$2-$3$1`+C+(O(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~ue(e,`stretch`,0)?Ue(D(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return D(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return S+n+`:`+r+s+(i?S+n+`-span:`+(a?o:o-+r)+s:``)+e});case 4949:if(O(e,t+6)===121)return D(e,`:`,`:`+w)+e;break;case 6444:switch(O(e,O(e,14)===45?18:11)){case 120:return D(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+w+(O(e,14)===45?`inline-`:``)+`box$3$1`+w+`$2$3$1`+S+`$2box$3`)+e;case 100:return D(e,`:`,`:`+S)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return D(e,`scroll-`,`scroll-snap-`)+e}return e}function We(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function Ge(e,t,n,r){switch(e.type){case ie:if(e.children.length)break;case T:case ne:return e.return=e.return||e.value;case ee:return``;case re:return e.return=e.value+`{`+We(e.children,r)+`}`;case te:if(!k(e.value=e.props.join(`,`)))return``}return k(n=We(e.children,r))?e.return=e.value+`{`+n+`}`:``}function Ke(e){var t=fe(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function qe(e){return function(t){t.root||(t=t.return)&&e(t)}}function Je(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case ne:e.return=Ue(e.value,e.length,n);return;case re:return We([xe(e,{value:D(e.value,`@`,`@`+w)})],r);case te:if(e.length)return pe(n=e.props,function(t){switch(E(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:Se(xe(e,{props:[D(t,/:(read-\w+)/,`:`+C+`$1`)]})),Se(xe(e,{props:[t]})),se(e,{props:me(n,r)});break;case`::placeholder`:Se(xe(e,{props:[D(t,/:(plac\w+)/,`:`+w+`input-$1`)]})),Se(xe(e,{props:[D(t,/:(plac\w+)/,`:`+C+`$1`)]})),Se(xe(e,{props:[D(t,/:(plac\w+)/,S+`input-$1`)]})),Se(xe(e,{props:[t]})),se(e,{props:me(n,r)});break}return``})}}var Ye=l(x()),Xe={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ze=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,Qe=`active`,$e=`data-styled-version`,et=`6.1.19`,tt=`/*!sc*/
`,nt=typeof window<`u`&&typeof document<`u`,rt=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:typeof process<`u`&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==``?{}.REACT_APP_SC_DISABLE_SPEEDY!==`false`&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<`u`&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==``&&{}.SC_DISABLE_SPEEDY!==`false`&&{}.SC_DISABLE_SPEEDY),it={},at=Object.freeze([]),ot=Object.freeze({});function st(e,t,n){return n===void 0&&(n=ot),e.theme!==n.theme&&e.theme||t||n.theme}var ct=new Set(`a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.big.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.keygen.label.legend.li.link.main.map.mark.menu.menuitem.meta.meter.nav.noscript.object.ol.optgroup.option.output.p.param.picture.pre.progress.q.rp.rt.ruby.s.samp.script.section.select.small.source.span.strong.style.sub.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.tr.track.u.ul.use.var.video.wbr.circle.clipPath.defs.ellipse.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.text.tspan`.split(`.`)),lt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ut=/(^-|-$)/g;function dt(e){return e.replace(lt,`-`).replace(ut,``)}var ft=/(a)(d)/gi,pt=52,mt=function(e){return String.fromCharCode(e+(e>25?39:97))};function ht(e){var t,n=``;for(t=Math.abs(e);t>pt;t=t/pt|0)n=mt(t%pt)+n;return(mt(t%pt)+n).replace(ft,`$1-$2`)}var gt,_t=5381,vt=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},yt=function(e){return vt(_t,e)};function bt(e){return ht(yt(e)>>>0)}function xt(e){return e.displayName||e.name||`Component`}function St(e){return typeof e==`string`&&!0}var Ct=typeof Symbol==`function`&&Symbol.for,wt=Ct?Symbol.for(`react.memo`):60115,Tt=Ct?Symbol.for(`react.forward_ref`):60112,Et={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Dt={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ot={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},kt=((gt={})[Tt]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},gt[wt]=Ot,gt);function At(e){return(`type`in(t=e)&&t.type.$$typeof)===wt?Ot:`$$typeof`in e?kt[e.$$typeof]:Et;var t}var jt=Object.defineProperty,Mt=Object.getOwnPropertyNames,Nt=Object.getOwnPropertySymbols,Pt=Object.getOwnPropertyDescriptor,Ft=Object.getPrototypeOf,It=Object.prototype;function Lt(e,t,n){if(typeof t!=`string`){if(It){var r=Ft(t);r&&r!==It&&Lt(e,r,n)}var i=Mt(t);Nt&&(i=i.concat(Nt(t)));for(var a=At(e),o=At(t),s=0;s<i.length;++s){var c=i[s];if(!(c in Dt||n&&n[c]||o&&c in o||a&&c in a)){var l=Pt(t,c);try{jt(e,c,l)}catch{}}}}return e}function Rt(e){return typeof e==`function`}function zt(e){return typeof e==`object`&&`styledComponentId`in e}function Bt(e,t){return e&&t?`${e} ${t}`:e||t||``}function Vt(e,t){if(e.length===0)return``;for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ht(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function Ut(e,t,n){if(n===void 0&&(n=!1),!n&&!Ht(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ut(e[r],t[r]);else if(Ht(t))for(var r in t)e[r]=Ut(e[r],t[r]);return e}function Wt(e,t){Object.defineProperty(e,`toString`,{value:t})}function Gt(e){var t=[...arguments].slice(1);return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var Kt=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw Gt(16,`${e}`);this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=r;a<i;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),s=(a=0,t.length);a<s;a++)this.tag.insertRule(o,t[a])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t=``;if(e>=this.length||this.groupSizes[e]===0)return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,a=r;a<i;a++)t+=`${this.tag.getRule(a)}${tt}`;return t},e}(),qt=new Map,Jt=new Map,Yt=1,Xt=function(e){if(qt.has(e))return qt.get(e);for(;Jt.has(Yt);)Yt++;var t=Yt++;return qt.set(e,t),Jt.set(t,e),t},Zt=function(e,t){Yt=t+1,qt.set(e,t),Jt.set(t,e)},Qt=`style[${Ze}][${$e}="${et}"]`,$t=RegExp(`^${Ze}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),en=function(e,t,n){for(var r,i=n.split(`,`),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},tn=function(e,t){for(var n=(t.textContent??``).split(tt),r=[],i=0,a=n.length;i<a;i++){var o=n[i].trim();if(o){var s=o.match($t);if(s){var c=0|parseInt(s[1],10),l=s[2];c!==0&&(Zt(l,c),en(e,l,s[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(o)}}},nn=function(e){for(var t=document.querySelectorAll(Qt),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Ze)!==Qe&&(tn(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function rn(){return typeof __webpack_nonce__<`u`?__webpack_nonce__:null}var an=function(e){var t=document.head,n=e||t,r=document.createElement(`style`),i=function(e){var t=Array.from(e.querySelectorAll(`style[${Ze}]`));return t[t.length-1]}(n),a=i===void 0?null:i.nextSibling;r.setAttribute(Ze,Qe),r.setAttribute($e,et);var o=rn();return o&&r.setAttribute(`nonce`,o),n.insertBefore(r,a),r},on=function(){function e(e){this.element=an(e),this.element.appendChild(document.createTextNode(``)),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw Gt(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``},e}(),sn=function(){function e(e){this.element=an(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:``},e}(),cn=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:``},e}(),ln=nt,un={isServer:!nt,useCSSOMInjection:!rt},dn=function(){function e(e,t,n){e===void 0&&(e=ot),t===void 0&&(t={});var r=this;this.options=y(y({},un),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&nt&&ln&&(ln=!1,nn(this)),Wt(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r=``,i=function(n){var i=function(e){return Jt.get(e)}(n);if(i===void 0)return`continue`;var a=e.names.get(i),o=t.getGroup(n);if(a===void 0||!a.size||o.length===0)return`continue`;var s=`${Ze}.g${n}[id="${i}"]`,c=``;a!==void 0&&a.forEach(function(e){e.length>0&&(c+=`${e},`)}),r+=`${o}${s}{content:"${c}"}${tt}`},a=0;a<n;a++)i(a);return r}(r)})}return e.registerId=function(e){return Xt(e)},e.prototype.rehydrate=function(){!this.server&&nt&&nn(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(y(y({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new cn(n):t?new on(n):new sn(n)}(this.options),new Kt(e));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Xt(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Xt(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Xt(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),fn=/&/g,pn=/^\s*\/\/.*$/gm;function mn(e,t){return e.map(function(e){return e.type===`rule`&&(e.value=`${t} ${e.value}`,e.value=e.value.replaceAll(`,`,`,${t} `),e.props=e.props.map(function(e){return`${t} ${e}`})),Array.isArray(e.children)&&e.type!==`@keyframes`&&(e.children=mn(e.children,t)),e})}function hn(e){var t,n,r,i=e===void 0?ot:e,a=i.options,o=a===void 0?ot:a,s=i.plugins,c=s===void 0?at:s,l=function(e,r,i){return i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,``).length>0?`.${t}`:e},u=c.slice();u.push(function(e){e.type===`rule`&&e.value.includes(`&`)&&(e.props[0]=e.props[0].replace(fn,n).replace(r,l))}),o.prefix&&u.push(Je),u.push(Ge);var d=function(e,i,a,s){i===void 0&&(i=``),a===void 0&&(a=``),s===void 0&&(s=`&`),t=s,n=i,r=RegExp(`\\${n}\\b`,`g`);var c=e.replace(pn,``),l=Re(a||i?`${a} ${i} { ${c} }`:c);o.namespace&&(l=mn(l,o.namespace));var d=[];return We(l,Ke(u.concat(qe(function(e){return d.push(e)})))),d};return d.hash=c.length?c.reduce(function(e,t){return t.name||Gt(15),vt(e,t.name)},_t).toString():``,d}var gn=new dn,_n=hn(),vn=v.createContext({shouldForwardProp:void 0,styleSheet:gn,stylis:_n});vn.Consumer;var yn=v.createContext(void 0);function bn(){return(0,v.useContext)(vn)}function xn(e){var t=(0,v.useState)(e.stylisPlugins),n=t[0],r=t[1],i=bn().styleSheet,a=(0,v.useMemo)(function(){var t=i;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,i]),o=(0,v.useMemo)(function(){return hn({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})},[e.enableVendorPrefixes,e.namespace,n]);(0,v.useEffect)(function(){(0,Ye.default)(n,e.stylisPlugins)||r(e.stylisPlugins)},[e.stylisPlugins]);var s=(0,v.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:o}},[e.shouldForwardProp,a,o]);return v.createElement(vn.Provider,{value:s},v.createElement(yn.Provider,{value:o},e.children))}var Sn=function(){function e(e,t){var n=this;this.inject=function(e,t){t===void 0&&(t=_n);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,`@keyframes`))},this.name=e,this.id=`sc-keyframes-${e}`,this.rules=t,Wt(this,function(){throw Gt(12,String(n.name))})}return e.prototype.getName=function(e){return e===void 0&&(e=_n),this.name+e.hash},e}(),Cn=function(e){return e>=`A`&&e<=`Z`};function wn(e){for(var t=``,n=0;n<e.length;n++){var r=e[n];if(n===1&&r===`-`&&e[0]===`-`)return e;Cn(r)?t+=`-`+r.toLowerCase():t+=r}return t.startsWith(`ms-`)?`-`+t:t}var Tn=function(e){return e==null||!1===e||e===``},En=function(e){var t,n,r=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!Tn(a)&&(Array.isArray(a)&&a.isCss||Rt(a)?r.push(`${wn(i)}:`,a,`;`):Ht(a)?r.push.apply(r,b(b([`${i} {`],En(a),!1),[`}`],!1)):r.push(`${wn(i)}: ${t=i,(n=a)==null||typeof n==`boolean`||n===``?``:typeof n!=`number`||n===0||t in Xe||t.startsWith(`--`)?String(n).trim():`${n}px`};`))}return r};function Dn(e,t,n,r){if(Tn(e))return[];if(zt(e))return[`.${e.styledComponentId}`];if(Rt(e)){if(!Rt(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var i=e(t);return Dn(i,t,n,r)}var a;return e instanceof Sn?n?(e.inject(n,r),[e.getName(r)]):[e]:Ht(e)?En(e):Array.isArray(e)?Array.prototype.concat.apply(at,e.map(function(e){return Dn(e,t,n,r)})):[e.toString()]}function On(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Rt(n)&&!zt(n))return!1}return!0}var kn=yt(et),An=function(){function e(e,t,n){this.rules=e,this.staticRulesId=``,this.isStatic=(n===void 0||n.isStatic)&&On(e),this.componentId=t,this.baseHash=vt(kn,t),this.baseStyle=n,dn.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):``;if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Bt(r,this.staticRulesId);else{var i=Vt(Dn(this.rules,e,t,n)),a=ht(vt(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,a)){var o=n(i,`.${a}`,void 0,this.componentId);t.insertRules(this.componentId,a,o)}r=Bt(r,a),this.staticRulesId=a}else{for(var s=vt(this.baseHash,n.hash),c=``,l=0;l<this.rules.length;l++){var u=this.rules[l];if(typeof u==`string`)c+=u;else if(u){var d=Vt(Dn(u,e,t,n));s=vt(s,d+l),c+=d}}if(c){var f=ht(s>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(c,`.${f}`,void 0,this.componentId)),r=Bt(r,f)}}return r},e}(),jn=v.createContext(void 0);jn.Consumer;function Mn(e){var t=v.useContext(jn),n=(0,v.useMemo)(function(){return function(e,t){if(!e)throw Gt(14);if(Rt(e))return e(t);if(Array.isArray(e)||typeof e!=`object`)throw Gt(8);return t?y(y({},t),e):e}(e.theme,t)},[e.theme,t]);return e.children?v.createElement(jn.Provider,{value:n},e.children):null}var Nn={};function Pn(e,t,n){var r=zt(e),i=e,a=!St(e),o=t.attrs,s=o===void 0?at:o,c=t.componentId,l=c===void 0?function(e,t){var n=typeof e==`string`?dt(e):`sc`;Nn[n]=(Nn[n]||0)+1;var r=`${n}-${bt(et+n+Nn[n])}`;return t?`${t}-${r}`:r}(t.displayName,t.parentComponentId):c,u=t.displayName,d=u===void 0?function(e){return St(e)?`styled.${e}`:`Styled(${xt(e)})`}(e):u,f=t.displayName&&t.componentId?`${dt(t.displayName)}-${t.componentId}`:t.componentId||l,p=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,m=t.shouldForwardProp;if(r&&i.shouldForwardProp){var h=i.shouldForwardProp;if(t.shouldForwardProp){var g=t.shouldForwardProp;m=function(e,t){return h(e,t)&&g(e,t)}}else m=h}var _=new An(n,f,r?i.componentStyle:void 0);function b(e,t){return function(e,t,n){var r=e.attrs,i=e.componentStyle,a=e.defaultProps,o=e.foldedComponentIds,s=e.styledComponentId,c=e.target,l=v.useContext(jn),u=bn(),d=e.shouldForwardProp||u.shouldForwardProp,f=st(t,l,a)||ot,p=function(e,t,n){for(var r,i=y(y({},t),{className:void 0,theme:n}),a=0;a<e.length;a+=1){var o=Rt(r=e[a])?r(i):r;for(var s in o)i[s]=s===`className`?Bt(i[s],o[s]):s===`style`?y(y({},i[s]),o[s]):o[s]}return t.className&&(i.className=Bt(i.className,t.className)),i}(r,t,f),m=p.as||c,h={};for(var g in p)p[g]===void 0||g[0]===`$`||g===`as`||g===`theme`&&p.theme===f||(g===`forwardedAs`?h.as=p.forwardedAs:d&&!d(g,m)||(h[g]=p[g]));var _=function(e,t){var n=bn();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(i,p),b=Bt(o,s);return _&&(b+=` `+_),p.className&&(b+=` `+p.className),h[St(m)&&!ct.has(m)?`class`:`className`]=b,n&&(h.ref=n),(0,v.createElement)(m,h)}(x,e,t)}b.displayName=d;var x=v.forwardRef(b);return x.attrs=p,x.componentStyle=_,x.displayName=d,x.shouldForwardProp=m,x.foldedComponentIds=r?Bt(i.foldedComponentIds,i.styledComponentId):``,x.styledComponentId=f,x.target=r?i.target:e,Object.defineProperty(x,`defaultProps`,{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=r?function(e){for(var t=[...arguments].slice(1),n=0,r=t;n<r.length;n++)Ut(e,r[n],!0);return e}({},i.defaultProps,e):e}}),Wt(x,function(){return`.${x.styledComponentId}`}),a&&Lt(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function Fn(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var In=function(e){return Object.assign(e,{isCss:!0})};function Ln(e){var t=[...arguments].slice(1);if(Rt(e)||Ht(e))return In(Dn(Fn(at,b([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?Dn(n):In(Dn(Fn(n,t)))}function Rn(e,t,n){if(n===void 0&&(n=ot),!t)throw Gt(1,t);var r=function(r){var i=[...arguments].slice(1);return e(t,n,Ln.apply(void 0,b([r],i,!1)))};return r.attrs=function(r){return Rn(e,t,y(y({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Rn(e,t,y(y({},n),r))},r}var zn=function(e){return Rn(Pn,e)},M=zn;ct.forEach(function(e){M[e]=zn(e)});var Bn=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=On(e),dn.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var i=r(Vt(Dn(this.rules,t,n,r)),``),a=this.componentId+e;n.insertRules(a,a,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&dn.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function Vn(e){var t=[...arguments].slice(1),n=Ln.apply(void 0,b([e],t,!1)),r=`sc-global-${bt(JSON.stringify(n))}`,i=new Bn(n,r),a=function(e){var t=bn(),n=v.useContext(jn),a=v.useRef(t.styleSheet.allocateGSInstance(r)).current;return t.styleSheet.server&&o(a,e,t.styleSheet,n,t.stylis),v.useLayoutEffect(function(){if(!t.styleSheet.server)return o(a,e,t.styleSheet,n,t.stylis),function(){return i.removeStyles(a,t.styleSheet)}},[a,e,t.styleSheet,n,t.stylis]),null};function o(e,t,n,r,o){if(i.isStatic)i.renderStyles(e,it,n,o);else{var s=y(y({},t),{theme:st(t,r,a.defaultProps)});i.renderStyles(e,s,n,o)}}return v.memo(a)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return``;var n=rn();return`<style ${Vt([n&&`nonce="${n}"`,`${Ze}="true"`,`${$e}="${et}"`].filter(Boolean),` `)}>${t}</style>`},this.getStyleTags=function(){if(e.sealed)throw Gt(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw Gt(2);var n=e.instance.toString();if(!n)return[];var r=((t={})[Ze]=``,t[$e]=et,t.dangerouslySetInnerHTML={__html:n},t),i=rn();return i&&(r.nonce=i),[v.createElement(`style`,y({},r,{key:`sc-0-0`}))]},this.seal=function(){e.sealed=!0},this.instance=new dn({isServer:!0}),this.sealed=!1}return e.prototype.collectStyles=function(e){if(this.sealed)throw Gt(2);return v.createElement(xn,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Gt(3)},e})(),`${Ze}`;const N={colors:{bgPrimary:`#1e1e2e`,bgSecondary:`#181825`,bgTertiary:`#11111b`,bgHover:`#313244`,textPrimary:`#cdd6f4`,textSecondary:`#a6adc8`,textHighlight:`#f2cdcd`,accentBlue:`#89b4fa`,accentPurple:`#cba6f7`,accentCyan:`#94e2d5`,accentGreen:`#a6e3a1`,accentYellow:`#f9e2af`,accentRed:`#f38ba8`,accentPink:`#f5c2e7`,success:`#a6e3a1`,warning:`#f9e2af`,error:`#f38ba8`,info:`#94e2d5`,borderColor:`#45475a`,borderActive:`#89b4fa`},fonts:{mono:`'JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', monospace`},fontSizes:{xs:`10px`,sm:`11px`,md:`12px`,base:`13px`,lg:`14px`,xl:`16px`,xxl:`18px`},fontWeights:{normal:400,medium:500,semibold:600,bold:700},lineHeights:{tight:1.2,normal:1.4,relaxed:1.5},letterSpacing:{tight:`-0.025em`,normal:`0`,wide:`0.025em`,wider:`0.05em`,widest:`0.1em`},spacing:{xs:`6px`,sm:`10px`,md:`16px`,lg:`24px`,xl:`32px`,xxl:`48px`},borderRadius:{none:`0`,sm:`4px`,base:`6px`,md:`8px`,lg:`12px`,xl:`16px`,full:`9999px`},shadows:{sm:`0 2px 4px rgba(0, 0, 0, 0.3)`,md:`0 4px 8px rgba(0, 0, 0, 0.4)`,lg:`0 8px 16px rgba(0, 0, 0, 0.5)`,xl:`0 16px 32px rgba(0, 0, 0, 0.6)`},transitions:{fast:`0.15s ease`,normal:`0.2s ease`,slow:`0.3s ease`},breakpoints:{mobile:`768px`,tablet:`1024px`,desktop:`1200px`},zIndex:{base:1,dropdown:10,modal:100,tooltip:1e3}};`${N.breakpoints.mobile}`,`${N.breakpoints.tablet}`,`${N.breakpoints.desktop}`,`${N.breakpoints.mobile}`,`${N.breakpoints.tablet}`,`${N.breakpoints.desktop}`;const Hn={terminalWindow:`
    background: ${N.colors.bgSecondary};
    border: 1px solid ${N.colors.borderColor};
    border-radius: ${N.borderRadius.lg};
    box-shadow: ${N.shadows.lg};
    overflow: hidden;
  `,buttonBase:`
    padding: ${N.spacing.sm} ${N.spacing.lg};
    border: none;
    border-radius: ${N.borderRadius.base};
    font-family: ${N.fonts.mono};
    font-size: ${N.fontSizes.md};
    font-weight: ${N.fontWeights.semibold};
    text-transform: uppercase;
    letter-spacing: ${N.letterSpacing.wide};
    cursor: pointer;
    transition: ${N.transitions.normal};
    
    &:focus {
      outline: none;
    }
  `,buttonPrimary:`
    background: ${N.colors.accentBlue};
    color: ${N.colors.bgPrimary};
    
    &:hover {
      background: ${N.colors.accentPurple};
      transform: translateY(-2px);
      box-shadow: ${N.shadows.md};
    }
    
    &:active {
      transform: translateY(0);
    }
  `,buttonSecondary:`
    background: ${N.colors.bgPrimary};
    color: ${N.colors.textPrimary};
    border: 1px solid ${N.colors.borderColor};
    
    &:hover {
      background: ${N.colors.bgHover};
    }
  `,inputBase:`
    width: 100%;
    padding: ${N.spacing.md};
    background: ${N.colors.bgPrimary};
    border: 2px solid ${N.colors.borderColor};
    border-radius: ${N.borderRadius.base};
    color: ${N.colors.textPrimary};
    font-family: ${N.fonts.mono};
    font-size: ${N.fontSizes.base};
    transition: ${N.transitions.normal};
    
    &:focus {
      outline: none;
      border-color: ${N.colors.accentBlue};
      background: ${N.colors.bgHover};
      box-shadow: 0 0 0 3px rgba(137, 180, 250, 0.1);
    }
    
    &::placeholder {
      color: ${N.colors.textSecondary};
      opacity: 0.7;
    }
  `,statusBadge:`
    display: inline-block;
    padding: 4px 8px;
    border-radius: ${N.borderRadius.base};
    font-size: ${N.fontSizes.xs};
    font-weight: ${N.fontWeights.semibold};
    text-transform: uppercase;
    letter-spacing: ${N.letterSpacing.wide};
    text-align: center;
    min-width: 60px;
  `,scrollbar:`
    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    
    &::-webkit-scrollbar-track {
      background: ${N.colors.bgTertiary};
    }
    
    &::-webkit-scrollbar-thumb {
      background: ${N.colors.borderColor};
      border-radius: ${N.borderRadius.base};
    }
    
    &::-webkit-scrollbar-thumb:hover {
      background: ${N.colors.accentBlue};
    }
    
    scrollbar-width: thin;
    scrollbar-color: ${N.colors.borderColor} ${N.colors.bgTertiary};
  `,tableRowHover:`
    cursor: pointer;
    transition: ${N.transitions.fast};
    border-bottom: 1px solid ${N.colors.bgTertiary};
    
    &:hover {
      background: ${N.colors.bgHover};
    }
  `};var Un=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),P=l(o(((e,t)=>{t.exports=Un()}))()),Wn=M.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  background: ${N.colors.bgPrimary};
  font-family: ${N.fonts.mono};
  font-size: ${N.fontSizes.base};
  line-height: ${N.lineHeights.normal};
  color: ${N.colors.textPrimary};
  overflow: hidden;
  user-select: none;
  cursor: default;
  position: absolute;
  top: 0;
  left: 0;
  
  /* Mobile Safari viewport fix */
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
  
  /* Android Chrome viewport fix */
  @media (max-width: 768px) {
    height: 100dvh; /* Dynamic viewport height */
    padding-bottom: max(env(safe-area-inset-bottom), 20px); /* Extra padding for Android */
  }
`,Gn=({children:e})=>(0,P.jsx)(Wn,{children:e}),Kn=M.div`
  background: ${N.colors.bgTertiary};
  border-bottom: 1px solid ${N.colors.borderColor};
  padding: ${N.spacing.sm} ${N.spacing.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 36px;
`,qn=M.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,Jn=M.h1`
  color: ${N.colors.accentBlue};
  font-weight: ${N.fontWeights.bold};
  font-size: ${N.fontSizes.lg};
  letter-spacing: ${N.letterSpacing.wide};
  margin: 0;
`;M.div`
  display: flex;
  gap: ${N.spacing.sm};
`,M.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${N.fontSizes.md};
  font-weight: ${N.fontWeights.bold};
  cursor: pointer;
  transition: ${N.transitions.normal};
  
  &.minimize {
    background: ${N.colors.accentYellow};
    color: ${N.colors.bgPrimary};
  }
  
  &.maximize {
    background: ${N.colors.accentGreen};
    color: ${N.colors.bgPrimary};
  }
  
  &.close {
    background: ${N.colors.accentRed};
    color: ${N.colors.bgPrimary};
  }
  
  &:hover {
    transform: scale(1.1);
  }
`;var Yn=({title:e=`HIH-Verwaltung Terminal Edition`})=>(0,P.jsx)(Kn,{children:(0,P.jsx)(qn,{children:(0,P.jsx)(Jn,{children:e})})}),Xn=M.div`
  flex: 1;
  padding: ${N.spacing.lg};
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  min-height: 0; /* Important for flex scrolling */
`,Zn=({children:e})=>(0,P.jsx)(Xn,{children:e});const Qn=M.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${N.spacing.sm};
  padding: ${N.spacing.md} ${N.spacing.lg};
  font-family: ${N.fonts.mono};
  font-size: ${N.fontSizes.base};
  font-weight: ${N.fontWeights.medium};
  color: ${e=>e.variant===`secondary`?N.colors.textPrimary:N.colors.bgPrimary};
  background: ${e=>{switch(e.variant){case`secondary`:return N.colors.bgTertiary;case`danger`:return N.colors.accentRed;case`success`:return N.colors.accentGreen;default:return N.colors.accentBlue}}};
  border: 2px solid ${e=>{switch(e.variant){case`secondary`:return N.colors.borderColor;case`danger`:return N.colors.accentRed;case`success`:return N.colors.accentGreen;default:return N.colors.accentCyan}}};
  border-radius: ${N.borderRadius.base};
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  min-width: 120px;
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px ${e=>{switch(e.variant){case`danger`:return`rgba(255, 85, 85, 0.3)`;case`success`:return`rgba(85, 255, 85, 0.3)`;default:return`rgba(74, 158, 255, 0.3)`}}};
    background: ${e=>{if(e.variant===`secondary`)return N.colors.bgHover}};
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &:focus-visible {
    outline: 3px solid ${N.colors.accentYellow};
    outline-offset: 2px;
  }
  
  /* Mobile touch targets */
  @media (max-width: 768px) {
    padding: 18px 24px;
    font-size: 18px;
    min-height: 52px;
    min-width: 120px;
  }
`,$n=M(Qn)`
  padding: ${N.spacing.xs} ${N.spacing.sm};
  font-size: ${N.fontSizes.xs};
  min-width: auto;
  margin: 0 2px;
  
  @media (max-width: 768px) {
    padding: ${N.spacing.sm} ${N.spacing.md};
    font-size: ${N.fontSizes.sm};
  }
`,er=M.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${N.spacing.sm};
  padding: ${N.spacing.md} 2em ${N.spacing.md} ${N.spacing.md};
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: ${N.borderRadius.base};
  font-size: ${N.fontSizes.base};
  font-family: ${N.fonts.mono};
  background: ${N.colors.bgTertiary};
  border: 2px solid ${N.colors.borderColor};
  color: ${N.colors.textPrimary};
  min-width: auto;
  width: auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  
  /* Desktop button styling */
  @media (min-width: 769px) {
    &:hover {
      background: ${N.colors.bgHover};
      border-color: ${N.colors.accentBlue};
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(74, 158, 255, 0.3);
    }
    
    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  }
  
  /* Mobile touch targets */
  @media (max-width: 768px) {
    padding: 18px 24px;
    font-size: 18px;
    min-height: 52px;
    min-width: 120px;
    margin: 4px 2px;
  }
  
  &.active {
    background: ${N.colors.accentBlue};
    color: ${N.colors.bgPrimary};
    border-color: ${N.colors.accentCyan};
    box-shadow: 0 4px 12px rgba(74, 158, 255, 0.5);
    
    &:hover {
      background: ${N.colors.accentCyan};
    }
  }
  
  &:focus-visible {
    outline: 3px solid ${N.colors.accentYellow};
    outline-offset: 2px;
  }
`,tr=M.span`
  background: ${N.colors.bgPrimary};
  color: ${N.colors.accentYellow};
  padding: 4px 10px;
  border-radius: ${N.borderRadius.base};
  font-weight: ${N.fontWeights.bold};
  font-size: ${N.fontSizes.sm};
  border: 2px solid ${N.colors.accentBlue};
  min-width: 32px;
  text-align: center;
  box-shadow: inset 0 -2px 0 rgba(0, 0, 0, 0.3);
  
  /* Mobile enhancements */
  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 14px;
    font-weight: ${N.fontWeights.bold};
    border-radius: 6px;
    min-width: 36px;
  }
  
  .active & {
    background: ${N.colors.bgPrimary};
    color: ${N.colors.accentYellow};
    border-color: ${N.colors.accentYellow};
  }
`,nr=M.span`
  font-weight: ${N.fontWeights.medium};
  letter-spacing: ${N.letterSpacing.normal};
  
  .active & {
    font-weight: ${N.fontWeights.bold};
  }
`;M.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: ${N.spacing.xs};
  background: ${N.colors.bgTertiary};
  border: 2px solid ${N.colors.borderColor};
  border-radius: ${N.borderRadius.base};
  color: ${N.colors.textPrimary};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    background: ${N.colors.bgHover};
    border-color: ${N.colors.accentBlue};
    color: ${N.colors.accentCyan};
  }
  
  &:active:not(:disabled) {
    transform: scale(0.95);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &:focus-visible {
    outline: 2px solid ${N.colors.accentYellow};
    outline-offset: 2px;
  }
  
  /* Mobile */
  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
  }
`,M.div`
  display: flex;
  gap: ${N.spacing.md};
  flex-wrap: wrap;
  align-items: center;
  
  @media (max-width: 768px) {
    gap: ${N.spacing.sm};
    width: 100%;
    
    button {
      flex: 1;
      min-width: 0;
    }
  }
`;var rr=M.div`
  background: ${N.colors.bgSecondary};
  border-top: 3px solid ${N.colors.accentBlue};
  padding: ${N.spacing.md} ${N.spacing.lg};
  margin-top: 0;
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: ${N.spacing.md};
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.2);
  
  /* Mobile improvements */
  @media (max-width: 768px) {
    padding: ${N.spacing.md} ${N.spacing.sm};
    padding-bottom: max(calc(${N.spacing.md} + env(safe-area-inset-bottom)), 25px);
    gap: ${N.spacing.sm};
    margin-top: ${N.spacing.sm};
    margin-bottom: 0;
  }
`,ir=M.div`
  background: ${N.colors.bgTertiary};
  border-top: 1px solid ${N.colors.borderColor};
  padding: ${N.spacing.sm} ${N.spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${N.fontSizes.sm};
  min-height: 32px;
  
  /* Mobile improvements */
  @media (max-width: 768px) {
    padding: ${N.spacing.md} ${N.spacing.lg};
    padding-bottom: max(calc(${N.spacing.md} + env(safe-area-inset-bottom)), 25px);
    font-size: ${N.fontSizes.base};
    min-height: 48px;
  }
`,ar=M.div`
  color: ${N.colors.textSecondary};
  flex: 1;
`,or=M.div`
  color: ${N.colors.accentCyan};
  font-weight: ${N.fontWeights.medium};
`,sr=[{key:`F1`,label:`Hilfe`,action:`help`},{key:`F2`,label:`Kunden`,action:`customers`},{key:`F3`,label:`Offerten`,action:`offers`},{key:`F4`,label:`Rechnung`,action:`invoices`},{key:`F5`,label:`Aktualisieren`,action:`refresh`},{key:`F9`,label:`Firma`,action:`firma`},{key:`F10`,label:`Hauptmenü`,action:`startup`}],cr=({currentScreen:e,onFKeyPress:t,statusMessage:n})=>{let[r,i]=(0,v.useState)(new Date);(0,v.useEffect)(()=>{let e=setInterval(()=>{i(new Date)},1e3);return()=>clearInterval(e)},[]);let a=e=>{t&&t(e)},o=e=>{let t=sr.find(t=>e.key===t.key||e.code===t.key||e.key===`F${t.key.slice(1)}`);t&&(e.preventDefault(),a(t.action))};return(0,v.useEffect)(()=>(document.addEventListener(`keydown`,o),()=>document.removeEventListener(`keydown`,o)),[]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(rr,{children:sr.map(({key:t,label:n,action:r})=>(0,P.jsxs)(er,{className:e===r?`active`:``,onClick:()=>a(r),children:[(0,P.jsx)(tr,{children:t}),(0,P.jsx)(nr,{children:n})]},t))}),(0,P.jsxs)(ir,{children:[(0,P.jsx)(ar,{children:n||`System bereit - F-Tasten für Navigation`}),(0,P.jsx)(or,{children:r.toLocaleTimeString()})]})]})},lr=M.div`
  background: ${N.colors.bgSecondary};
  border-top: 2px solid ${N.colors.accentYellow};
  border-bottom: 1px solid ${N.colors.borderColor};
  padding: ${N.spacing.md} ${N.spacing.lg};
  font-family: ${N.fonts.mono};
  font-size: ${N.fontSizes.base};
  
  display: flex;
  flex-wrap: wrap;
  gap: ${N.spacing.md};
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    gap: 8px;
    padding: 12px 8px;
    font-size: 16px;
    flex-wrap: wrap;
    justify-content: center;
  }
`,ur=M.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${N.spacing.sm};
  padding: ${N.spacing.md} 2em ${N.spacing.md} ${N.spacing.md};
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: ${N.borderRadius.lg};
  font-size: ${N.fontSizes.base};
  font-family: ${N.fonts.mono};
  background: ${N.colors.bgTertiary};
  border: 2px solid ${N.colors.borderColor};
  color: ${N.colors.textSecondary};
  min-width: auto;
  width: auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  
  /* Mobile touch targets - Enhanced */
  @media (max-width: 768px) {
    padding: 16px 20px;
    border-radius: 8px;
    min-height: 52px;
    min-width: 100px;
    margin: 4px;
    text-align: center;
    justify-content: center;
  }
  
  &.available {
    color: ${N.colors.textPrimary};
    cursor: pointer;
    
    &:hover {
      background: ${N.colors.bgHover};
      border-color: ${N.colors.accentBlue};
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(74, 158, 255, 0.3);
    }
    
    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
    
    @media (max-width: 768px) {
      &:active {
        background: ${N.colors.bgHover};
      }
    }
  }
  
  &.primary {
    color: ${N.colors.accentGreen};
    font-weight: bold;
    border-color: ${N.colors.accentGreen};
  }
  
  &.danger {
    color: ${N.colors.accentRed};
    border-color: ${N.colors.accentRed};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    
    &:hover {
      transform: none;
      background: ${N.colors.bgTertiary};
      border-color: ${N.colors.borderColor};
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  }
  
  &:focus-visible {
    outline: 3px solid ${N.colors.accentYellow};
    outline-offset: 2px;
  }
`,dr=M.span`
  background: ${N.colors.bgTertiary};
  color: ${N.colors.accentCyan};
  padding: 2px 6px;
  border-radius: 3px;
  font-weight: bold;
  font-size: ${N.fontSizes.xs};
  min-width: 20px;
  text-align: center;
  border: 1px solid ${N.colors.borderColor};
  
  /* Mobile improvements - Enhanced */
  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 16px;
    min-width: 48px;
    border-radius: 6px;
    font-weight: bold;
  }
`,fr=M.span`
  font-size: ${N.fontSizes.sm};
  
  @media (max-width: 768px) {
    display: none;
  }
`;M.div`
  width: 1px;
  height: 20px;
  background: ${N.colors.borderColor};
  margin: 0 ${N.spacing.sm};
  
  @media (max-width: 768px) {
    display: none;
  }
`;var pr=({currentScreen:e,selectedIndex:t=0,data:n=[],onAction:r,showPdfExport:i=!1})=>{let a=e=>{r&&r(e)},o=(()=>{let r=t>=0&&n.length>0,a=r?n[t]:null;switch(e){case`customers`:return[{key:`N`,text:`Neuer Kunde`,action:`new`,available:!0,primary:!0},{key:`E`,text:`Bearbeiten`,action:`edit`,available:r,primary:!1},{key:`ENTER`,text:`Öffnen`,action:`open`,available:r,primary:!0},{key:`D`,text:`Löschen`,action:`delete`,available:r,danger:!0}];case`offers`:let e=[{key:`N`,text:`Neue Offerte`,action:`new`,available:!0,primary:!0},{key:`E`,text:`Bearbeiten`,action:`edit`,available:r,primary:!1},{key:`ENTER`,text:`Positionen`,action:`open`,available:r,primary:!0},{key:`S`,text:`Status ändern`,action:`status`,available:r,primary:!1}];return r&&a.status===`angenommen`&&e.push({key:`R`,text:`→ Rechnung`,action:`toInvoice`,available:!0,primary:!1}),i&&r&&e.push({key:`P`,text:`PDF Export`,action:`pdf`,available:!0,primary:!1}),e.push({key:`D`,text:`Löschen`,action:`delete`,available:r,danger:!0}),e;case`invoices`:return[{key:`N`,text:`Neue Rechnung`,action:`new`,available:!0,primary:!0},{key:`E`,text:`Bearbeiten`,action:`edit`,available:r,primary:!1},{key:`P`,text:`PDF Export`,action:`pdf`,available:r,primary:!0},{key:`S`,text:`Status ändern`,action:`status`,available:r,primary:!1},{key:`D`,text:`Löschen`,action:`delete`,available:r,danger:!0}];default:return[]}})();return o.length===0?null:(0,P.jsx)(lr,{children:o.map((e,t)=>(0,P.jsx)(v.Fragment,{children:(0,P.jsxs)(ur,{className:`
              ${e.available?`available`:``} 
              ${e.primary?`primary`:``} 
              ${e.danger?`danger`:``}
            `,onClick:()=>e.available&&a(e.action),children:[(0,P.jsx)(dr,{children:e.key}),(0,P.jsx)(fr,{children:e.text})]})},e.key))})},mr=M.div`
  padding: ${N.spacing.xl};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
`,hr=M.div`
  text-align: center;
  margin-bottom: ${N.spacing.xl};
`,gr=M.pre`
  color: ${N.colors.accentPurple};
  font-family: ${N.fonts.mono};
  font-size: 24px;
  line-height: 1;
  margin: 0 0 ${N.spacing.lg} 0;
  text-align: center;
  user-select: none;
  letter-spacing: -2px;
  
  @media (max-width: ${N.breakpoints.mobile}) {
    font-size: 16px;
    letter-spacing: -1px;
  }
`,_r=M.h2`
  color: ${N.colors.accentCyan};
  margin: 0;
  font-size: ${N.fontSizes.xl};
  font-weight: ${N.fontWeights.medium};
  letter-spacing: ${N.letterSpacing.wide};
  text-transform: uppercase;
  text-align: center;
`,vr=M.div`
  display: flex;
  gap: ${N.spacing.xl};
  margin: ${N.spacing.xl} 0;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  
  @media (max-width: ${N.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${N.spacing.lg};
  }
`,yr=M.div`
  background: ${N.colors.bgSecondary};
  border: 2px solid ${N.colors.borderColor};
  border-radius: ${N.borderRadius.lg};
  padding: ${N.spacing.xl};
  min-width: 300px;
  max-width: 400px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${N.colors.accentBlue};
    box-shadow: 0 6px 16px rgba(74, 158, 255, 0.2);
    transform: translateY(-2px);
  }
  
  h3 {
    color: ${N.colors.accentGreen};
    margin: 0 0 ${N.spacing.lg} 0;
    font-size: ${N.fontSizes.lg};
    font-weight: ${N.fontWeights.bold};
    display: flex;
    align-items: center;
    gap: ${N.spacing.sm};
    padding-bottom: ${N.spacing.md};
    border-bottom: 2px solid ${N.colors.bgTertiary};
    letter-spacing: ${N.letterSpacing.normal};
  }
  
  @media (max-width: ${N.breakpoints.mobile}) {
    min-width: unset;
    max-width: unset;
    width: 100%;
  }
`,br=M.div`
  display: flex;
  flex-direction: column;
  gap: ${N.spacing.md};
`,xr=M.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${N.spacing.sm} ${N.spacing.md};
  background: ${N.colors.bgTertiary};
  border-radius: ${N.borderRadius.base};
  border-left: 3px solid ${N.colors.accentBlue};
  transition: all 0.2s ease;
  
  &:hover {
    background: ${N.colors.bgHover};
    border-left-color: ${N.colors.accentCyan};
    transform: translateX(4px);
  }
`,Sr=M.span`
  color: ${N.colors.textSecondary};
  font-size: ${N.fontSizes.base};
  font-weight: ${N.fontWeights.medium};
`,Cr=M.span`
  color: ${N.colors.accentBlue};
  font-weight: ${N.fontWeights.bold};
  font-size: ${N.fontSizes.lg};
  font-family: ${N.fonts.mono};
  
  &.ready {
    color: ${N.colors.success};
  }
`,wr=M.div`
  display: flex;
  flex-direction: column;
  gap: ${N.spacing.sm};
`,Tr=M.div`
  color: ${N.colors.textPrimary};
  padding: ${N.spacing.md} ${N.spacing.lg};
  font-size: ${N.fontSizes.base};
  background: ${N.colors.bgTertiary};
  border-radius: ${N.borderRadius.base};
  border-left: 3px solid ${N.colors.accentYellow};
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    background: ${N.colors.bgHover};
    border-left-color: ${N.colors.accentGreen};
    transform: translateX(4px);
  }
  
  strong {
    color: ${N.colors.accentYellow};
    font-weight: ${N.fontWeights.bold};
  }
`,Er=M.div`
  text-align: center;
  color: ${N.colors.textSecondary};
  font-style: italic;
  margin-top: ${N.spacing.xl};
  padding-top: ${N.spacing.xl};
  border-top: 1px solid ${N.colors.borderColor};
  
  p {
    margin: 0;
    font-size: ${N.fontSizes.base};
    letter-spacing: ${N.letterSpacing.normal};
  }
`,Dr=({stats:e={}})=>{let t={kunden:0,offerten:0,rechnungen:0,status:`System bereit`,...e};return(0,P.jsxs)(mr,{children:[(0,P.jsxs)(hr,{children:[(0,P.jsx)(gr,{children:`
    ██╗  ██╗██╗██╗  ██╗
    ██║  ██║██║██║  ██║  
    ███████║██║███████║
    ██╔══██║██║██╔══██║
    ██║  ██║██║██║  ██║
    ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝
        `}),(0,P.jsx)(_r,{children:`HIH-Verwaltung v2.0`})]}),(0,P.jsxs)(vr,{children:[(0,P.jsxs)(yr,{children:[(0,P.jsx)(`h3`,{children:`📊 System Status`}),(0,P.jsxs)(br,{children:[(0,P.jsxs)(xr,{children:[(0,P.jsx)(Sr,{children:`Kunden`}),(0,P.jsx)(Cr,{children:t.kunden})]}),(0,P.jsxs)(xr,{children:[(0,P.jsx)(Sr,{children:`Offerten`}),(0,P.jsx)(Cr,{children:t.offerten})]}),(0,P.jsxs)(xr,{children:[(0,P.jsx)(Sr,{children:`Rechnungen`}),(0,P.jsx)(Cr,{children:t.rechnungen})]}),(0,P.jsxs)(xr,{children:[(0,P.jsx)(Sr,{children:`Status`}),(0,P.jsx)(Cr,{className:`ready`,children:t.status})]})]})]}),(0,P.jsxs)(yr,{children:[(0,P.jsx)(`h3`,{children:`⚡ Schnellzugriff`}),(0,P.jsxs)(wr,{children:[(0,P.jsxs)(Tr,{children:[(0,P.jsx)(`strong`,{children:`F2`}),` → Kundenverwaltung`]}),(0,P.jsxs)(Tr,{children:[(0,P.jsx)(`strong`,{children:`F3`}),` → Offertenverwaltung`]}),(0,P.jsxs)(Tr,{children:[(0,P.jsx)(`strong`,{children:`F4`}),` → Rechnungserstellung`]}),(0,P.jsxs)(Tr,{children:[(0,P.jsx)(`strong`,{children:`F6`}),` → PDF-Export`]}),(0,P.jsxs)(Tr,{children:[(0,P.jsx)(`strong`,{children:`F5`}),` → Daten aktualisieren`]})]})]})]}),(0,P.jsx)(Er,{children:(0,P.jsx)(`p`,{children:`⌨️  Verwende die F-Tasten für die Navigation  •  ESC für Zurück  •  ↑↓ für Listen`})})]})},Or=M.div`
  flex: 1;
  padding: ${N.spacing.lg};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,kr=M.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  background: ${N.colors.bgPrimary};
  border-radius: ${N.borderRadius.base};
  overflow: hidden;
  flex: 1;
  display: table;
  table-layout: fixed;
`,Ar=M.thead`
  background: ${N.colors.bgTertiary};
`,jr=M.th`
  color: ${N.colors.accentCyan};
  padding: ${N.spacing.md} ${N.spacing.lg};
  text-align: left;
  border-bottom: 2px solid ${N.colors.borderColor};
  font-weight: ${N.fontWeights.semibold};
  font-size: ${N.fontSizes.sm};
  text-transform: uppercase;
  letter-spacing: ${N.letterSpacing.wide};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: ${N.breakpoints.mobile}) {
    padding: ${N.spacing.xs} ${N.spacing.sm};
    
    /* Hide header cells on mobile except first one */
    &:not(:first-child) {
      display: none;
    }
  }
`,Mr=M.tbody`
  background: ${N.colors.bgSecondary};
`,Nr=M.tr`
  ${Hn.tableRowHover}
  height: auto;
  
  &.selected {
    background: ${N.colors.bgHover};
    border-left: 3px solid ${N.colors.accentBlue};
    position: relative;
  }
  
  &.empty-row td {
    text-align: center;
    color: ${N.colors.textSecondary};
    font-style: italic;
    padding: ${N.spacing.xl};
    font-size: ${N.fontSizes.base};
  }
`,Pr=M.td`
  padding: ${N.spacing.sm} ${N.spacing.md};
  color: ${N.colors.textPrimary};
  vertical-align: top;
  font-size: ${N.fontSizes.md};
  line-height: ${N.lineHeights.normal};
  
  @media (max-width: ${N.breakpoints.mobile}) {
    padding: ${N.spacing.xs} ${N.spacing.sm};
    
    /* Hide certain cells on mobile except first one */
    &:not(:first-child) {
      display: none;
    }
    
    /* First cell takes full width on mobile */
    &:first-child {
      display: block;
      width: 100%;
    }
  }
`,Fr=M.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  
  @media (max-width: ${N.breakpoints.mobile}) {
    display: none;
  }
`,Ir=M.div`
  display: none;
  line-height: ${N.lineHeights.tight};
  
  @media (max-width: ${N.breakpoints.mobile}) {
    display: block;
  }
`,Lr=M.div`
  margin-bottom: 2px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Rr=M.span`
  ${Hn.statusBadge}
  
  &.status-offen {
    background: ${N.colors.accentYellow};
    color: ${N.colors.bgPrimary};
  }
  
  &.status-abgeschlossen {
    background: ${N.colors.accentGreen};
    color: ${N.colors.bgPrimary};
  }
  
  &.status-abgelehnt {
    background: ${N.colors.accentRed};
    color: ${N.colors.bgPrimary};
  }
`,zr=({data:e=[],columns:t=[],selectedIndex:n=0,onRowClick:r,onDoubleClick:i,emptyMessage:a=`Keine Daten vorhanden`,type:o=`default`})=>{let s=(e,n)=>o===`customers`?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(Pr,{children:[(0,P.jsx)(Fr,{children:(0,P.jsx)(`div`,{style:{fontWeight:`bold`,color:N.colors.accentBlue},children:e.name})}),(0,P.jsxs)(Ir,{children:[(0,P.jsx)(Lr,{style:{fontWeight:`bold`,color:N.colors.accentBlue,fontSize:N.fontSizes.base},children:e.name}),(0,P.jsxs)(Lr,{style:{color:N.colors.textSecondary,fontSize:N.fontSizes.sm},children:[e.email,`, `,e.telefon]})]})]}),(0,P.jsx)(Pr,{children:e.email}),(0,P.jsx)(Pr,{children:e.telefon})]}):o===`offers`?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(Pr,{children:[(0,P.jsx)(Fr,{children:(0,P.jsx)(`div`,{style:{fontWeight:`bold`,color:N.colors.accentBlue},children:e.titel})}),(0,P.jsxs)(Ir,{children:[(0,P.jsxs)(Lr,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,P.jsx)(`span`,{style:{fontWeight:`bold`,color:N.colors.accentBlue,fontSize:N.fontSizes.base,flex:1,marginRight:N.spacing.xs},children:e.titel}),(0,P.jsx)(Rr,{className:`status-${e.status}`,style:{fontSize:N.fontSizes.sm,whiteSpace:`nowrap`},children:e.status})]}),(0,P.jsxs)(Lr,{style:{fontWeight:`bold`,color:N.colors.accentGreen,fontSize:N.fontSizes.md,textAlign:`center`,margin:`1px 0`},children:[`CHF `,e.gesamtBrutto?.toFixed(2)||`0.00`]}),(0,P.jsxs)(Lr,{style:{display:`flex`,justifyContent:`space-between`,color:N.colors.textSecondary,fontSize:N.fontSizes.sm},children:[(0,P.jsx)(`span`,{children:e.kundeName||`Unbekannt`}),(0,P.jsx)(`span`,{children:e.datum?new Date(e.datum).toLocaleDateString(`de-CH`):``})]})]})]}),(0,P.jsx)(Pr,{children:e.kundeName||`Unbekannt`}),(0,P.jsx)(Pr,{style:{textAlign:`right`},children:(0,P.jsxs)(`span`,{style:{fontWeight:`bold`,color:N.colors.accentGreen},children:[`CHF `,e.gesamtBrutto?.toFixed(2)||`0.00`]})}),(0,P.jsx)(Pr,{style:{textAlign:`center`},children:(0,P.jsx)(Rr,{className:`status-${e.status}`,children:e.status})}),(0,P.jsx)(Pr,{children:e.datum?new Date(e.datum).toLocaleDateString(`de-CH`):``})]}):o===`invoices`?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(Pr,{children:[(0,P.jsx)(Fr,{children:(0,P.jsx)(`div`,{style:{fontWeight:`bold`,color:N.colors.accentCyan},children:e.nummer})}),(0,P.jsxs)(Ir,{children:[(0,P.jsxs)(Lr,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,P.jsx)(`span`,{style:{fontWeight:`bold`,color:N.colors.accentCyan,fontSize:N.fontSizes.sm,marginRight:N.spacing.xs},children:e.nummer}),(0,P.jsx)(Rr,{className:`status-${e.status}`,style:{fontSize:N.fontSizes.sm,whiteSpace:`nowrap`},children:e.status})]}),(0,P.jsx)(Lr,{style:{fontWeight:`bold`,color:N.colors.accentBlue,fontSize:N.fontSizes.base},children:e.titel}),(0,P.jsxs)(Lr,{style:{fontWeight:`bold`,color:N.colors.accentGreen,fontSize:N.fontSizes.md,textAlign:`center`,margin:`1px 0`},children:[`CHF `,e.gesamtBrutto?.toFixed(2)||`0.00`]}),(0,P.jsxs)(Lr,{style:{display:`flex`,justifyContent:`space-between`,color:N.colors.textSecondary,fontSize:N.fontSizes.sm},children:[(0,P.jsx)(`span`,{children:e.kundeName||`Unbekannt`}),(0,P.jsxs)(`span`,{children:[`Fällig: `,e.faelligkeitsdatum?new Date(e.faelligkeitsdatum).toLocaleDateString(`de-CH`):``]})]})]})]}),(0,P.jsx)(Pr,{children:(0,P.jsx)(`span`,{style:{fontWeight:`bold`,color:N.colors.accentBlue},children:e.titel})}),(0,P.jsx)(Pr,{children:e.kundeName||`Unbekannt`}),(0,P.jsx)(Pr,{style:{textAlign:`right`},children:(0,P.jsxs)(`span`,{style:{fontWeight:`bold`,color:N.colors.accentGreen},children:[`CHF `,e.gesamtBrutto?.toFixed(2)||`0.00`]})}),(0,P.jsx)(Pr,{style:{textAlign:`center`},children:(0,P.jsx)(Rr,{className:`status-${e.status}`,children:e.status})}),(0,P.jsx)(Pr,{children:e.faelligkeitsdatum?new Date(e.faelligkeitsdatum).toLocaleDateString(`de-CH`):``})]}):t.map((t,n)=>(0,P.jsx)(Pr,{children:t.render?t.render(e):e[t.key]},n)),c=()=>o===`customers`?[`Name`,`E-Mail`,`Telefon`]:o===`offers`?[`Titel`,`Kunde`,`Gesamtbetrag`,`Status`,`Datum`]:o===`invoices`?[`Nummer`,`Titel`,`Kunde`,`Gesamtbetrag`,`Status`,`Fällig am`]:t.map(e=>e.label);return(0,P.jsx)(Or,{children:(0,P.jsxs)(kr,{children:[(0,P.jsx)(Ar,{children:(0,P.jsx)(`tr`,{children:c().map((e,t)=>(0,P.jsx)(jr,{children:e},t))})}),(0,P.jsx)(Mr,{children:e.length===0?(0,P.jsx)(Nr,{className:`empty-row`,children:(0,P.jsx)(Pr,{colSpan:c().length,children:a})}):e.map((e,t)=>(0,P.jsx)(Nr,{className:n===t?`selected`:``,onClick:()=>r&&r(t),onDoubleClick:()=>i&&i(e,t),style:{cursor:i?`pointer`:`default`},children:s(e,t)},e.id||t))})]})})},Br=M.div`
  ${Hn.terminalWindow}
  height: 100%;
  display: flex;
  flex-direction: column;
`,Vr=M.div`
  background: ${N.colors.bgTertiary};
  border-bottom: 1px solid ${N.colors.borderColor};
  padding: ${N.spacing.md} ${N.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: center;
`,Hr=M.h2`
  color: ${N.colors.accentBlue};
  margin: 0;
  font-size: ${N.fontSizes.lg};
  font-weight: ${N.fontWeights.bold};
  text-transform: uppercase;
  letter-spacing: ${N.letterSpacing.widest};
`,Ur=M.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,Wr=({title:e,children:t,className:n})=>(0,P.jsxs)(Br,{className:n,children:[(0,P.jsx)(Vr,{children:(0,P.jsx)(Hr,{children:e})}),(0,P.jsx)(Ur,{children:t})]}),Gr=({kunden:e=[],selectedIndex:t=0,onRowClick:n,onDoubleClick:r,onNewCustomer:i,onEditCustomer:a,onDeleteCustomer:o})=>(0,P.jsx)(Wr,{title:`Kundenverwaltung`,children:(0,P.jsx)(zr,{data:e,selectedIndex:t,onRowClick:n,onDoubleClick:r,emptyMessage:`Keine Kunden vorhanden - F3 für neuen Kunden`,type:`customers`})}),Kr=M.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${e=>e.theme.spacing.sm};
  padding: ${e=>e.theme.spacing.md};
  background: ${e=>e.theme.colors.bgSecondary};
  border-bottom: 1px solid ${e=>e.theme.colors.borderColor};
  
  @media (max-width: 768px) {
    gap: 8px;
    padding: 12px;
  }
`,qr=M.button`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.xs};
  padding: ${e=>e.theme.spacing.sm} ${e=>e.theme.spacing.md};
  background: ${e=>e.$active?e.theme.colors.accentGreen:e.theme.colors.bgTertiary};
  color: ${e=>e.$active?e.theme.colors.bgPrimary:e.theme.colors.textSecondary};
  border: 2px solid ${e=>e.$active?e.theme.colors.accentGreen:e.theme.colors.borderColor};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-family: ${e=>e.theme.fonts.mono};
  font-size: ${e=>e.theme.fontSizes.base};
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: ${e=>e.$active?`bold`:`normal`};
  
  @media (max-width: 768px) {
    padding: 12px 16px;
    min-height: 48px;
    font-size: 16px;
  }
  
  &:hover {
    background: ${e=>e.$active?e.theme.colors.accentGreen:e.theme.colors.bgHover};
    border-color: ${e=>e.$active?e.theme.colors.accentGreen:e.theme.colors.accentBlue};
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:focus {
    outline: none;
  }
`,Jr=M.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  padding: 2px 6px;
  background: ${e=>e.$active?e.theme.colors.bgPrimary:e.theme.colors.bgSecondary};
  color: ${e=>e.$active?e.theme.colors.accentGreen:e.theme.colors.textSecondary};
  border-radius: ${e=>e.theme.borderRadius.sm};
  font-size: 0.75rem;
  font-weight: bold;
  margin-left: ${e=>e.theme.spacing.xs};
`,Yr=M.span`
  opacity: 0.8;
  font-size: 0.875rem;
  margin-left: ${e=>e.theme.spacing.xs};
`,Xr=[{value:`alle`,label:`Alle`,shortcut:`0`},{value:`entwurf`,label:`Entwurf`,shortcut:`1`},{value:`versendet`,label:`Versendet`,shortcut:`2`},{value:`angenommen`,label:`Angenommen`,shortcut:`3`},{value:`abgelehnt`,label:`Abgelehnt`,shortcut:`4`}],Zr=({activeFilter:e,onFilterChange:t,allOfferten:n=[],statusOptions:r=Xr})=>{(0,v.useEffect)(()=>{let e=e=>{if(e.target.tagName===`INPUT`||e.target.tagName===`TEXTAREA`||e.target.tagName===`SELECT`)return;let n=e.key,i=r.find(e=>e.shortcut===n);i&&(e.preventDefault(),t(i.value))};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},[t]);let i=e=>!n||n.length===0?0:e===`alle`?n.length:n.filter(t=>t.status===e).length;return(0,P.jsx)(Kr,{children:r.map(n=>(0,P.jsxs)(qr,{$active:e===n.value,onClick:()=>t(n.value),children:[n.label,(0,P.jsx)(Jr,{$active:e===n.value,children:n.shortcut}),(0,P.jsxs)(Yr,{children:[`(`,i(n.value),`)`]})]},n.value))})},Qr=({offerten:e=[],allOfferten:t=[],selectedIndex:n=0,onRowClick:r,onDoubleClick:i,onNewOffer:a,onEditOffer:o,onDeleteOffer:s,statusFilter:c,onStatusFilterChange:l})=>(0,P.jsxs)(Wr,{title:`Offertenverwaltung`,children:[(0,P.jsx)(Zr,{activeFilter:c,onFilterChange:l,allOfferten:t}),(0,P.jsx)(zr,{data:e,selectedIndex:n,onRowClick:r,onDoubleClick:i,emptyMessage:`Keine Offerten mit Status "${c}" vorhanden - F3 für neue Offerte`,type:`offers`})]}),$r=[{value:`alle`,label:`Alle`,shortcut:`0`},{value:`entwurf`,label:`Entwurf`,shortcut:`1`},{value:`fertig`,label:`Fertig`,shortcut:`2`},{value:`gesendet`,label:`Gesendet`,shortcut:`3`},{value:`bezahlt`,label:`Bezahlt`,shortcut:`4`}],ei=({rechnungen:e=[],allRechnungen:t=[],selectedIndex:n=0,onRowClick:r,onDoubleClick:i,statusFilter:a,onStatusFilterChange:o})=>(0,P.jsxs)(Wr,{title:`Rechnungsverwaltung`,children:[(0,P.jsx)(Zr,{activeFilter:a,onFilterChange:o,allOfferten:t,statusOptions:$r}),(0,P.jsx)(zr,{data:e,selectedIndex:n,onRowClick:r,onDoubleClick:i,emptyMessage:`Keine Rechnungen mit Status "${a}" vorhanden - F4 für neue Rechnung`,type:`invoices`})]}),ti=M.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: ${N.spacing.lg};
  
  @media (max-width: ${N.breakpoints.mobile}) {
    padding: ${N.spacing.sm};
  }
`,ni=M.div`
  background: ${N.colors.bgPrimary};
  border: 2px solid ${N.colors.borderColor};
  border-radius: ${N.borderRadius.sm};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  max-width: ${e=>e.wide?`1200px`:`600px`};
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  
  /* Terminal-Style Shadow */
  box-shadow: 
    0 0 0 1px ${N.colors.borderColor},
    2px 2px 0 ${N.colors.bgTertiary};

  @media (max-width: ${N.breakpoints.mobile}) {
    max-width: 95vw;
    max-height: 95vh;
  }
`,ri=M.div`
  background: ${N.colors.bgSecondary};
  padding: ${N.spacing.md} ${N.spacing.lg};
  border-bottom: 1px solid ${N.colors.borderColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,ii=M.h2`
  color: ${N.colors.accentCyan};
  font-size: ${N.fontSizes.lg};
  font-weight: ${N.fontWeights.semibold};
  margin: 0;
  font-family: ${N.fonts.mono};
  text-transform: uppercase;
  letter-spacing: ${N.letterSpacing.wide};
`,ai=M.button`
  background: transparent;
  border: 1px solid ${N.colors.borderColor};
  color: ${N.colors.textPrimary};
  width: 30px;
  height: 30px;
  border-radius: ${N.borderRadius.sm};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${N.fontSizes.lg};
  font-weight: bold;
  
  /* Mobile touch optimization */
  @media (max-width: 768px) {
    width: 52px;
    height: 52px;
    font-size: 20px;
    border: 2px solid ${N.colors.borderColor};
  }
  
  &:hover {
    background: ${N.colors.bgTertiary};
    color: ${N.colors.accentRed};
    border-color: ${N.colors.accentRed};
  }
  
  &:active {
    transform: translateY(1px);
  }
`,oi=M.div`
  padding: ${N.spacing.lg};
  
  @media (max-width: ${N.breakpoints.mobile}) {
    padding: ${N.spacing.xl};
  }
  
  /* Enhanced form styling for mobile */
  @media (max-width: 768px) {
    input, textarea, select {
      width: 100%;
      box-sizing: border-box;
      margin-bottom: 16px;
    }
    
    label {
      display: block;
      margin-bottom: 8px;
      font-weight: bold;
      font-size: 16px;
    }
    
    button {
      margin: 8px;
      min-width: 140px;
    }
  }
`,si=({isOpen:e,onClose:t,title:n,children:r,closeOnOverlay:i=!0,wide:a=!1})=>((0,v.useEffect)(()=>{let n=e=>{e.keyCode===27&&t&&t()};return e&&(document.addEventListener(`keydown`,n,!1),document.body.style.overflow=`hidden`),()=>{document.removeEventListener(`keydown`,n,!1),document.body.style.overflow=`unset`}},[e,t]),e?(0,P.jsx)(ti,{onClick:e=>{e.target===e.currentTarget&&i&&t&&t()},children:(0,P.jsxs)(ni,{wide:a,children:[(0,P.jsxs)(ri,{children:[(0,P.jsx)(ii,{children:n}),(0,P.jsx)(ai,{onClick:t,"aria-label":`Schließen`,children:`×`})]}),(0,P.jsx)(oi,{children:r})]})}):null),ci=s({Button:()=>yi,ButtonGroup:()=>vi,ErrorMessage:()=>bi,Form:()=>li,FormGroup:()=>pi,FormRow:()=>fi,FormSection:()=>ui,FormSectionTitle:()=>di,Input:()=>hi,Label:()=>mi,Select:()=>_i,TextArea:()=>gi});const li=M.form`
  display: flex;
  flex-direction: column;
  gap: ${N.spacing.lg};
`,ui=M.div`
  display: flex;
  flex-direction: column;
  gap: ${N.spacing.md};
`,di=M.h3`
  color: ${N.colors.accentYellow};
  font-size: ${N.fontSizes.base};
  font-weight: ${N.fontWeights.semibold};
  margin: 0;
  padding-bottom: ${N.spacing.xs};
  border-bottom: 1px solid ${N.colors.borderColor};
  text-transform: uppercase;
  letter-spacing: ${N.letterSpacing.wide};
`,fi=M.div`
  display: flex;
  gap: ${N.spacing.md};
  
  @media (max-width: ${N.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${N.spacing.sm};
  }
`,pi=M.div`
  display: flex;
  flex-direction: column;
  gap: ${N.spacing.xs};
  flex: ${e=>e.flex||1};
`,mi=M.label`
  color: ${N.colors.textPrimary};
  font-size: ${N.fontSizes.sm};
  font-weight: ${N.fontWeights.medium};
  text-transform: uppercase;
  letter-spacing: ${N.letterSpacing.wide};
  
  ${e=>e.required&&`
    &::after {
      content: ' *';
      color: ${N.colors.accentRed};
    }
  `}
`,hi=M.input`
  background: ${N.colors.bgTertiary};
  border: 1px solid ${N.colors.borderColor};
  border-radius: ${N.borderRadius.sm};
  padding: ${N.spacing.sm} ${N.spacing.md};
  color: ${N.colors.textPrimary};
  font-size: ${N.fontSizes.md};
  font-family: ${N.fonts.mono};
  
  &:focus {
    outline: none;
    border-color: ${N.colors.accentBlue};
    box-shadow: 0 0 0 2px ${N.colors.accentBlue}33;
  }
  
  &:disabled {
    background: ${N.colors.bgSecondary};
    color: ${N.colors.textSecondary};
    cursor: not-allowed;
  }
  
  &::placeholder {
    color: ${N.colors.textSecondary};
  }
`,gi=M.textarea`
  background: ${N.colors.bgTertiary};
  border: 1px solid ${N.colors.borderColor};
  border-radius: ${N.borderRadius.sm};
  padding: ${N.spacing.sm} ${N.spacing.md};
  color: ${N.colors.textPrimary};
  font-size: ${N.fontSizes.md};
  font-family: ${N.fonts.mono};
  min-height: 80px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${N.colors.accentBlue};
    box-shadow: 0 0 0 2px ${N.colors.accentBlue}33;
  }
  
  &:disabled {
    background: ${N.colors.bgSecondary};
    color: ${N.colors.textSecondary};
    cursor: not-allowed;
  }
  
  &::placeholder {
    color: ${N.colors.textSecondary};
  }
`,_i=M.select`
  background: ${N.colors.bgTertiary};
  border: 1px solid ${N.colors.borderColor};
  border-radius: ${N.borderRadius.sm};
  padding: ${N.spacing.sm} ${N.spacing.md};
  color: ${N.colors.textPrimary};
  font-size: ${N.fontSizes.md};
  font-family: ${N.fonts.mono};
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: ${N.colors.accentBlue};
    box-shadow: 0 0 0 2px ${N.colors.accentBlue}33;
  }
  
  &:disabled {
    background: ${N.colors.bgSecondary};
    color: ${N.colors.textSecondary};
    cursor: not-allowed;
  }
  
  option {
    background: ${N.colors.bgTertiary};
    color: ${N.colors.textPrimary};
  }
`,vi=M.div`
  display: flex;
  gap: ${N.spacing.md};
  justify-content: flex-end;
  margin-top: ${N.spacing.xl};
  padding-top: ${N.spacing.lg};
  border-top: 1px solid ${N.colors.borderColor};
  
  @media (max-width: ${N.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${N.spacing.sm};
  }
`,yi=M.button`
  background: ${e=>e.variant===`primary`?N.colors.accentBlue:e.variant===`danger`?N.colors.accentRed:e.variant===`success`?N.colors.accentGreen:N.colors.bgTertiary};
  
  border: 1px solid ${e=>e.variant===`primary`?N.colors.accentBlue:e.variant===`danger`?N.colors.accentRed:e.variant===`success`?N.colors.accentGreen:N.colors.borderColor};
  
  color: ${e=>e.variant===`primary`||e.variant===`danger`||e.variant===`success`?N.colors.bgPrimary:N.colors.textPrimary};
  
  border-radius: ${N.borderRadius.sm};
  padding: ${N.spacing.sm} ${N.spacing.lg};
  font-size: ${N.fontSizes.md};
  font-weight: ${N.fontWeights.medium};
  font-family: ${N.fonts.mono};
  text-transform: uppercase;
  letter-spacing: ${N.letterSpacing.wide};
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 100px;
  
  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
  
  @media (max-width: ${N.breakpoints.mobile}) {
    padding: ${N.spacing.md};
    min-width: unset;
  }
`,bi=M.div`
  color: ${N.colors.accentRed};
  font-size: ${N.fontSizes.sm};
  margin-top: ${N.spacing.xs};
  display: flex;
  align-items: center;
  gap: ${N.spacing.xs};
  
  &::before {
    content: '⚠';
    font-size: ${N.fontSizes.base};
  }
`,xi=(e={},t=null)=>{let[n,r]=(0,v.useState)(e),[i,a]=(0,v.useState)({}),[o,s]=(0,v.useState)({}),[c,l]=(0,v.useState)(!1),u=(0,v.useCallback)((e,t)=>{r(n=>({...n,[e]:t})),i[e]&&a(t=>{let n={...t};return delete n[e],n})},[i]),d=(0,v.useCallback)(e=>{r(t=>({...t,...e}))},[]),f=(0,v.useCallback)(e=>{if(s(t=>({...t,[e]:!0})),t){let r=t(n);r[e]&&a(t=>({...t,[e]:r[e]}))}},[n,t]),p=(0,v.useCallback)(()=>{if(!t)return!0;let e=t(n);return a(e),Object.keys(e).length===0},[n,t]),m=(0,v.useCallback)((t=e)=>{r(t),a({}),s({}),l(!1)},[e]),h=(0,v.useCallback)(e=>{r(e),a({}),s({})},[]),g=(0,v.useCallback)(async e=>{let t=Object.keys(n).reduce((e,t)=>(e[t]=!0,e),{});if(s(t),!p())return!1;l(!0);try{return await e(n),!0}catch(e){return console.error(`Form submission error:`,e),!1}finally{l(!1)}},[n,p]),_=(0,v.useCallback)((e,t)=>{a(n=>({...n,[e]:t}))},[]),y=(0,v.useCallback)(e=>o[e]&&i[e],[o,i]);return{formData:n,errors:i,touched:o,isSubmitting:c,handleChange:u,handleBlur:f,handleSubmit:g,validate:p,resetForm:m,setFormData:h,setValues:d,setError:_,hasError:y,isValid:Object.keys(i).length===0,isDirty:Object.keys(o).length>0}};var{Form:Si,FormSection:Ci,FormSectionTitle:wi,FormRow:Ti,FormGroup:Ei,Label:Di,Input:Oi,Select:ki,TextArea:Ai,ButtonGroup:ji,Button:Mi,ErrorMessage:Ni}=ci,Pi=M.div`
  display: flex;
  align-items: center;
  gap: ${N.spacing.md};
`,Fi=M.div`
  width: 60px;
  height: 40px;
  border: 2px solid ${N.colors.borderColor};
  border-radius: ${N.borderRadius.sm};
  background: ${e=>e.color||`#bd00ff`};
  cursor: pointer;
`,Ii=M(Oi)`
  flex: 1;
`,Li=e=>{let t={};return e.name?.trim()||(t.name=`Firmenname ist erforderlich`),e.email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)&&(t.email=`Ungültige E-Mail-Adresse`),e.mwstSatz!==void 0&&(isNaN(e.mwstSatz)||e.mwstSatz<0||e.mwstSatz>100)&&(t.mwstSatz=`MwSt-Satz muss zwischen 0 und 100 liegen`),t},Ri=({isOpen:e,onClose:t,firma:n=null,onSave:r,loading:i=!1})=>{let a=()=>n?{name:n.name||``,strasse:n.strasse||``,plz:n.plz||``,ort:n.ort||``,land:n.land||`Schweiz`,email:n.email||``,telefon:n.telefon||``,website:n.website||``,uid:n.uid||``,iban:n.iban||``,mwstSatz:n.mwstSatz===void 0?0:n.mwstSatz,mwstPflichtig:n.mwstPflichtig||!1,accentColor:n[`accent-color`]||n.accentColor||`#bd00ff`,mainFont:n[`main-font`]||n.mainFont||`Lexend Exa`,slogan:n.slogan||``}:{name:``,strasse:``,plz:``,ort:``,land:`Schweiz`,email:``,telefon:``,website:``,uid:``,iban:``,mwstSatz:0,mwstPflichtig:!1,accentColor:`#bd00ff`,mainFont:`Lexend Exa`,slogan:``},{formData:o,errors:s,touched:c,handleChange:l,handleBlur:u,handleSubmit:d,resetForm:f,setFormData:p}=xi(a(),Li);(0,v.useEffect)(()=>{e?p(a()):f()},[n,e]);let m=()=>{r(o)},h=()=>{f(),t()},g=!!n,_=g?`Firmenprofil bearbeiten: ${n?.name}`:`Neues Firmenprofil`;return(0,P.jsx)(si,{isOpen:e,onClose:h,title:_,closeOnOverlay:!i,wide:!0,children:(0,P.jsxs)(Si,{onSubmit:e=>{e.preventDefault(),d(m)},children:[(0,P.jsxs)(Ci,{children:[(0,P.jsx)(wi,{children:`Grunddaten`}),(0,P.jsxs)(Ei,{children:[(0,P.jsx)(Di,{required:!0,children:`Firmenname`}),(0,P.jsx)(Oi,{type:`text`,value:o.name,onChange:e=>l(`name`,e.target.value),onBlur:()=>u(`name`),disabled:i,placeholder:`Hinderling Internet Handwerk`}),s.name&&c.name&&(0,P.jsx)(Ni,{children:s.name})]}),(0,P.jsxs)(Ti,{children:[(0,P.jsxs)(Ei,{flex:2,children:[(0,P.jsx)(Di,{children:`Strasse & Hausnummer`}),(0,P.jsx)(Oi,{type:`text`,value:o.strasse,onChange:e=>l(`strasse`,e.target.value),disabled:i,placeholder:`Werkhofstrasse 11`})]}),(0,P.jsxs)(Ei,{flex:1,children:[(0,P.jsx)(Di,{children:`PLZ`}),(0,P.jsx)(Oi,{type:`text`,value:o.plz,onChange:e=>l(`plz`,e.target.value),disabled:i,placeholder:`2503`})]}),(0,P.jsxs)(Ei,{flex:2,children:[(0,P.jsx)(Di,{children:`Ort`}),(0,P.jsx)(Oi,{type:`text`,value:o.ort,onChange:e=>l(`ort`,e.target.value),disabled:i,placeholder:`Biel`})]})]}),(0,P.jsx)(Ti,{children:(0,P.jsxs)(Ei,{children:[(0,P.jsx)(Di,{children:`Land`}),(0,P.jsx)(Oi,{type:`text`,value:o.land,onChange:e=>l(`land`,e.target.value),disabled:i,placeholder:`Schweiz`})]})})]}),(0,P.jsxs)(Ci,{children:[(0,P.jsx)(wi,{children:`Kontaktdaten`}),(0,P.jsxs)(Ti,{children:[(0,P.jsxs)(Ei,{children:[(0,P.jsx)(Di,{children:`E-Mail`}),(0,P.jsx)(Oi,{type:`email`,value:o.email,onChange:e=>l(`email`,e.target.value),onBlur:()=>u(`email`),disabled:i,placeholder:`hallo@beispiel.ch`}),s.email&&c.email&&(0,P.jsx)(Ni,{children:s.email})]}),(0,P.jsxs)(Ei,{children:[(0,P.jsx)(Di,{children:`Telefon`}),(0,P.jsx)(Oi,{type:`tel`,value:o.telefon,onChange:e=>l(`telefon`,e.target.value),disabled:i,placeholder:`079/123'45'67`})]})]}),(0,P.jsxs)(Ei,{children:[(0,P.jsx)(Di,{children:`Website`}),(0,P.jsx)(Oi,{type:`url`,value:o.website,onChange:e=>l(`website`,e.target.value),disabled:i,placeholder:`https://www.beispiel.ch`})]})]}),(0,P.jsxs)(Ci,{children:[(0,P.jsx)(wi,{children:`Steuer & Finanzen`}),(0,P.jsxs)(Ti,{children:[(0,P.jsxs)(Ei,{children:[(0,P.jsx)(Di,{children:`UID-Nummer`}),(0,P.jsx)(Oi,{type:`text`,value:o.uid,onChange:e=>l(`uid`,e.target.value),disabled:i,placeholder:`CHE-123.456.789`})]}),(0,P.jsxs)(Ei,{children:[(0,P.jsx)(Di,{children:`IBAN`}),(0,P.jsx)(Oi,{type:`text`,value:o.iban,onChange:e=>l(`iban`,e.target.value),disabled:i,placeholder:`CH93 0076 2011 6238 5295 7`})]})]}),(0,P.jsxs)(Ti,{children:[(0,P.jsxs)(Ei,{children:[(0,P.jsx)(Di,{children:`MwSt-Satz (%)`}),(0,P.jsx)(Oi,{type:`number`,step:`0.1`,min:`0`,max:`100`,value:o.mwstSatz,onChange:e=>l(`mwstSatz`,parseFloat(e.target.value)||0),onBlur:()=>u(`mwstSatz`),disabled:i}),s.mwstSatz&&c.mwstSatz&&(0,P.jsx)(Ni,{children:s.mwstSatz})]}),(0,P.jsxs)(Ei,{children:[(0,P.jsx)(Di,{children:`MwSt-pflichtig`}),(0,P.jsxs)(ki,{value:o.mwstPflichtig?`true`:`false`,onChange:e=>l(`mwstPflichtig`,e.target.value===`true`),disabled:i,children:[(0,P.jsx)(`option`,{value:`false`,children:`Nein`}),(0,P.jsx)(`option`,{value:`true`,children:`Ja`})]})]})]})]}),(0,P.jsxs)(Ci,{children:[(0,P.jsx)(wi,{children:`Design & Branding`}),(0,P.jsxs)(Ei,{children:[(0,P.jsx)(Di,{children:`Akzentfarbe`}),(0,P.jsxs)(Pi,{children:[(0,P.jsx)(Fi,{color:o.accentColor,onClick:()=>document.getElementById(`colorPicker`).click()}),(0,P.jsx)(Ii,{id:`colorPicker`,type:`color`,value:o.accentColor,onChange:e=>l(`accentColor`,e.target.value),disabled:i}),(0,P.jsx)(Oi,{type:`text`,value:o.accentColor,onChange:e=>l(`accentColor`,e.target.value),disabled:i,placeholder:`#bd00ff`,style:{flex:1}})]})]}),(0,P.jsxs)(Ei,{children:[(0,P.jsx)(Di,{children:`Hauptschriftart`}),(0,P.jsxs)(ki,{value:o.mainFont,onChange:e=>l(`mainFont`,e.target.value),disabled:i,children:[(0,P.jsx)(`option`,{value:`Lexend Exa`,children:`Lexend Exa`}),(0,P.jsx)(`option`,{value:`Urbanist`,children:`Urbanist`}),(0,P.jsx)(`option`,{value:`Arial`,children:`Arial`}),(0,P.jsx)(`option`,{value:`Helvetica`,children:`Helvetica`}),(0,P.jsx)(`option`,{value:`Times New Roman`,children:`Times New Roman`})]})]})]}),(0,P.jsxs)(Ci,{children:[(0,P.jsx)(wi,{children:`Zusätzliche Informationen`}),(0,P.jsxs)(Ei,{children:[(0,P.jsx)(Di,{children:`Slogan / Beschreibung`}),(0,P.jsx)(Ai,{value:o.slogan,onChange:e=>l(`slogan`,e.target.value),disabled:i,placeholder:`Bruchsch ä nöii Website? - chum ufnes Kafi vrbi!`,rows:3})]})]}),(0,P.jsxs)(ji,{children:[(0,P.jsx)(Mi,{type:`button`,onClick:h,disabled:i,children:`Abbrechen`}),(0,P.jsx)(Mi,{type:`submit`,variant:`primary`,disabled:i,children:i?`Speichern...`:g?`Aktualisieren`:`Erstellen`})]})]})})};function zi(e,t){return function(){return e.apply(t,arguments)}}var{toString:Bi}=Object.prototype,{getPrototypeOf:Vi}=Object,{iterator:Hi,toStringTag:Ui}=Symbol,Wi=(e=>t=>{let n=Bi.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Gi=e=>(e=e.toLowerCase(),t=>Wi(t)===e),Ki=e=>t=>typeof t===e,{isArray:qi}=Array,Ji=Ki(`undefined`);function F(e){return e!==null&&!Ji(e)&&e.constructor!==null&&!Ji(e.constructor)&&Zi(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}var I=Gi(`ArrayBuffer`);function Yi(e){let t;return t=typeof ArrayBuffer<`u`&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&I(e.buffer),t}var Xi=Ki(`string`),Zi=Ki(`function`),Qi=Ki(`number`),$i=e=>typeof e==`object`&&!!e,ea=e=>e===!0||e===!1,ta=e=>{if(Wi(e)!==`object`)return!1;let t=Vi(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Ui in e)&&!(Hi in e)},na=e=>{if(!$i(e)||F(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},ra=Gi(`Date`),ia=Gi(`File`),aa=Gi(`Blob`),oa=Gi(`FileList`),sa=e=>$i(e)&&Zi(e.pipe),ca=e=>{let t;return e&&(typeof FormData==`function`&&e instanceof FormData||Zi(e.append)&&((t=Wi(e))===`formdata`||t===`object`&&Zi(e.toString)&&e.toString()===`[object FormData]`))},la=Gi(`URLSearchParams`),[ua,da,fa,pa]=[`ReadableStream`,`Request`,`Response`,`Headers`].map(Gi),ma=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,``);function ha(e,t,{allOwnKeys:n=!1}={}){if(e==null)return;let r,i;if(typeof e!=`object`&&(e=[e]),qi(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{if(F(e))return;let i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length,o;for(r=0;r<a;r++)o=i[r],t.call(null,e[o],o,e)}}function ga(e,t){if(F(e))return null;t=t.toLowerCase();let n=Object.keys(e),r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}var _a=(()=>typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:global)(),va=e=>!Ji(e)&&e!==_a;function ya(){let{caseless:e,skipUndefined:t}=va(this)&&this||{},n={},r=(r,i)=>{let a=e&&ga(n,i)||i;ta(n[a])&&ta(r)?n[a]=ya(n[a],r):ta(r)?n[a]=ya({},r):qi(r)?n[a]=r.slice():(!t||!Ji(r))&&(n[a]=r)};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&ha(arguments[e],r);return n}var ba=(e,t,n,{allOwnKeys:r}={})=>(ha(t,(t,r)=>{n&&Zi(t)?e[r]=zi(t,n):e[r]=t},{allOwnKeys:r}),e),xa=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Sa=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,`super`,{value:t.prototype}),n&&Object.assign(e.prototype,n)},Ca=(e,t,n,r)=>{let i,a,o,s={};if(t||={},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-- >0;)o=i[a],(!r||r(o,e,t))&&!s[o]&&(t[o]=e[o],s[o]=!0);e=n!==!1&&Vi(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},wa=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;let r=e.indexOf(t,n);return r!==-1&&r===n},Ta=e=>{if(!e)return null;if(qi(e))return e;let t=e.length;if(!Qi(t))return null;let n=Array(t);for(;t-- >0;)n[t]=e[t];return n},Ea=(e=>t=>e&&t instanceof e)(typeof Uint8Array<`u`&&Vi(Uint8Array)),Da=(e,t)=>{let n=(e&&e[Hi]).call(e),r;for(;(r=n.next())&&!r.done;){let n=r.value;t.call(e,n[0],n[1])}},Oa=(e,t)=>{let n,r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},ka=Gi(`HTMLFormElement`),Aa=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,n){return t.toUpperCase()+n}),ja=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Ma=Gi(`RegExp`),Na=(e,t)=>{let n=Object.getOwnPropertyDescriptors(e),r={};ha(n,(n,i)=>{let a;(a=t(n,i,e))!==!1&&(r[i]=a||n)}),Object.defineProperties(e,r)},Pa=e=>{Na(e,(t,n)=>{if(Zi(e)&&[`arguments`,`caller`,`callee`].indexOf(n)!==-1)return!1;let r=e[n];if(Zi(r)){if(t.enumerable=!1,`writable`in t){t.writable=!1;return}t.set||=()=>{throw Error(`Can not rewrite read-only method '`+n+`'`)}}})},Fa=(e,t)=>{let n={},r=e=>{e.forEach(e=>{n[e]=!0})};return qi(e)?r(e):r(String(e).split(t)),n},Ia=()=>{},La=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function Ra(e){return!!(e&&Zi(e.append)&&e[Ui]===`FormData`&&e[Hi])}var za=e=>{let t=Array(10),n=(e,r)=>{if($i(e)){if(t.indexOf(e)>=0)return;if(F(e))return e;if(!(`toJSON`in e)){t[r]=e;let i=qi(e)?[]:{};return ha(e,(e,t)=>{let a=n(e,r+1);!Ji(a)&&(i[t]=a)}),t[r]=void 0,i}}return e};return n(e,0)},Ba=Gi(`AsyncFunction`),Va=e=>e&&($i(e)||Zi(e))&&Zi(e.then)&&Zi(e.catch),Ha=((e,t)=>e?setImmediate:t?((e,t)=>(_a.addEventListener(`message`,({source:n,data:r})=>{n===_a&&r===e&&t.length&&t.shift()()},!1),n=>{t.push(n),_a.postMessage(e,`*`)}))(`axios@${Math.random()}`,[]):e=>setTimeout(e))(typeof setImmediate==`function`,Zi(_a.postMessage)),Ua=typeof queueMicrotask<`u`?queueMicrotask.bind(_a):typeof process<`u`&&process.nextTick||Ha,L={isArray:qi,isArrayBuffer:I,isBuffer:F,isFormData:ca,isArrayBufferView:Yi,isString:Xi,isNumber:Qi,isBoolean:ea,isObject:$i,isPlainObject:ta,isEmptyObject:na,isReadableStream:ua,isRequest:da,isResponse:fa,isHeaders:pa,isUndefined:Ji,isDate:ra,isFile:ia,isBlob:aa,isRegExp:Ma,isFunction:Zi,isStream:sa,isURLSearchParams:la,isTypedArray:Ea,isFileList:oa,forEach:ha,merge:ya,extend:ba,trim:ma,stripBOM:xa,inherits:Sa,toFlatObject:Ca,kindOf:Wi,kindOfTest:Gi,endsWith:wa,toArray:Ta,forEachEntry:Da,matchAll:Oa,isHTMLForm:ka,hasOwnProperty:ja,hasOwnProp:ja,reduceDescriptors:Na,freezeMethods:Pa,toObjectSet:Fa,toCamelCase:Aa,noop:Ia,toFiniteNumber:La,findKey:ga,global:_a,isContextDefined:va,isSpecCompliantForm:Ra,toJSONObject:za,isAsyncFn:Ba,isThenable:Va,setImmediate:Ha,asap:Ua,isIterable:e=>e!=null&&Zi(e[Hi])};function Wa(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error().stack,this.message=e,this.name=`AxiosError`,t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}L.inherits(Wa,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:L.toJSONObject(this.config),code:this.code,status:this.status}}});var Ga=Wa.prototype,Ka={};[`ERR_BAD_OPTION_VALUE`,`ERR_BAD_OPTION`,`ECONNABORTED`,`ETIMEDOUT`,`ERR_NETWORK`,`ERR_FR_TOO_MANY_REDIRECTS`,`ERR_DEPRECATED`,`ERR_BAD_RESPONSE`,`ERR_BAD_REQUEST`,`ERR_CANCELED`,`ERR_NOT_SUPPORT`,`ERR_INVALID_URL`].forEach(e=>{Ka[e]={value:e}}),Object.defineProperties(Wa,Ka),Object.defineProperty(Ga,`isAxiosError`,{value:!0}),Wa.from=(e,t,n,r,i,a)=>{let o=Object.create(Ga);L.toFlatObject(e,o,function(e){return e!==Error.prototype},e=>e!==`isAxiosError`);let s=e&&e.message?e.message:`Error`,c=t==null&&e?e.code:t;return Wa.call(o,s,c,n,r,i),e&&o.cause==null&&Object.defineProperty(o,`cause`,{value:e,configurable:!0}),o.name=e&&e.name||`Error`,a&&Object.assign(o,a),o};var R=Wa;function qa(e){return L.isPlainObject(e)||L.isArray(e)}function Ja(e){return L.endsWith(e,`[]`)?e.slice(0,-2):e}function Ya(e,t,n){return e?e.concat(t).map(function(e,t){return e=Ja(e),!n&&t?`[`+e+`]`:e}).join(n?`.`:``):t}function Xa(e){return L.isArray(e)&&!e.some(qa)}var Za=L.toFlatObject(L,{},null,function(e){return/^is[A-Z]/.test(e)});function Qa(e,t,n){if(!L.isObject(e))throw TypeError(`target must be an object`);t||=new FormData,n=L.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){return!L.isUndefined(t[e])});let r=n.metaTokens,i=n.visitor||l,a=n.dots,o=n.indexes,s=(n.Blob||typeof Blob<`u`&&Blob)&&L.isSpecCompliantForm(t);if(!L.isFunction(i))throw TypeError(`visitor must be a function`);function c(e){if(e===null)return``;if(L.isDate(e))return e.toISOString();if(L.isBoolean(e))return e.toString();if(!s&&L.isBlob(e))throw new R(`Blob is not supported. Use a Buffer instead.`);return L.isArrayBuffer(e)||L.isTypedArray(e)?s&&typeof Blob==`function`?new Blob([e]):Buffer.from(e):e}function l(e,n,i){let s=e;if(e&&!i&&typeof e==`object`){if(L.endsWith(n,`{}`))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(L.isArray(e)&&Xa(e)||(L.isFileList(e)||L.endsWith(n,`[]`))&&(s=L.toArray(e)))return n=Ja(n),s.forEach(function(e,r){!(L.isUndefined(e)||e===null)&&t.append(o===!0?Ya([n],r,a):o===null?n:n+`[]`,c(e))}),!1}return qa(e)?!0:(t.append(Ya(i,n,a),c(e)),!1)}let u=[],d=Object.assign(Za,{defaultVisitor:l,convertValue:c,isVisitable:qa});function f(e,n){if(!L.isUndefined(e)){if(u.indexOf(e)!==-1)throw Error(`Circular reference detected in `+n.join(`.`));u.push(e),L.forEach(e,function(e,r){(!(L.isUndefined(e)||e===null)&&i.call(t,e,L.isString(r)?r.trim():r,n,d))===!0&&f(e,n?n.concat(r):[r])}),u.pop()}}if(!L.isObject(e))throw TypeError(`data must be an object`);return f(e),t}var $a=Qa;function eo(e){let t={"!":`%21`,"'":`%27`,"(":`%28`,")":`%29`,"~":`%7E`,"%20":`+`,"%00":`\0`};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(e){return t[e]})}function to(e,t){this._pairs=[],e&&$a(e,this,t)}var no=to.prototype;no.append=function(e,t){this._pairs.push([e,t])},no.toString=function(e){let t=e?function(t){return e.call(this,t,eo)}:eo;return this._pairs.map(function(e){return t(e[0])+`=`+t(e[1])},``).join(`&`)};var ro=to;function io(e){return encodeURIComponent(e).replace(/%3A/gi,`:`).replace(/%24/g,`$`).replace(/%2C/gi,`,`).replace(/%20/g,`+`)}function ao(e,t,n){if(!t)return e;let r=n&&n.encode||io;L.isFunction(n)&&(n={serialize:n});let i=n&&n.serialize,a;if(a=i?i(t,n):L.isURLSearchParams(t)?t.toString():new ro(t,n).toString(r),a){let t=e.indexOf(`#`);t!==-1&&(e=e.slice(0,t)),e+=(e.indexOf(`?`)===-1?`?`:`&`)+a}return e}var oo=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&=[]}forEach(e){L.forEach(this.handlers,function(t){t!==null&&e(t)})}},so={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},co={isBrowser:!0,classes:{URLSearchParams:typeof URLSearchParams<`u`?URLSearchParams:ro,FormData:typeof FormData<`u`?FormData:null,Blob:typeof Blob<`u`?Blob:null},protocols:[`http`,`https`,`file`,`blob`,`url`,`data`]},lo=s({hasBrowserEnv:()=>uo,hasStandardBrowserEnv:()=>po,hasStandardBrowserWebWorkerEnv:()=>mo,navigator:()=>fo,origin:()=>ho}),uo=typeof window<`u`&&typeof document<`u`,fo=typeof navigator==`object`&&navigator||void 0,po=uo&&(!fo||[`ReactNative`,`NativeScript`,`NS`].indexOf(fo.product)<0),mo=(()=>typeof WorkerGlobalScope<`u`&&self instanceof WorkerGlobalScope&&typeof self.importScripts==`function`)(),ho=uo&&window.location.href||`http://localhost`,z={...lo,...co};function go(e,t){return $a(e,new z.classes.URLSearchParams,{visitor:function(e,t,n,r){return z.isNode&&L.isBuffer(e)?(this.append(t,e.toString(`base64`)),!1):r.defaultVisitor.apply(this,arguments)},...t})}function _o(e){return L.matchAll(/\w+|\[(\w*)]/g,e).map(e=>e[0]===`[]`?``:e[1]||e[0])}function vo(e){let t={},n=Object.keys(e),r,i=n.length,a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}function yo(e){function t(e,n,r,i){let a=e[i++];if(a===`__proto__`)return!0;let o=Number.isFinite(+a),s=i>=e.length;return a=!a&&L.isArray(r)?r.length:a,s?(L.hasOwnProp(r,a)?r[a]=[r[a],n]:r[a]=n,!o):((!r[a]||!L.isObject(r[a]))&&(r[a]=[]),t(e,n,r[a],i)&&L.isArray(r[a])&&(r[a]=vo(r[a])),!o)}if(L.isFormData(e)&&L.isFunction(e.entries)){let n={};return L.forEachEntry(e,(e,r)=>{t(_o(e),r,n,0)}),n}return null}var bo=yo;function xo(e,t,n){if(L.isString(e))try{return(t||JSON.parse)(e),L.trim(e)}catch(e){if(e.name!==`SyntaxError`)throw e}return(n||JSON.stringify)(e)}var So={transitional:so,adapter:[`xhr`,`http`,`fetch`],transformRequest:[function(e,t){let n=t.getContentType()||``,r=n.indexOf(`application/json`)>-1,i=L.isObject(e);if(i&&L.isHTMLForm(e)&&(e=new FormData(e)),L.isFormData(e))return r?JSON.stringify(bo(e)):e;if(L.isArrayBuffer(e)||L.isBuffer(e)||L.isStream(e)||L.isFile(e)||L.isBlob(e)||L.isReadableStream(e))return e;if(L.isArrayBufferView(e))return e.buffer;if(L.isURLSearchParams(e))return t.setContentType(`application/x-www-form-urlencoded;charset=utf-8`,!1),e.toString();let a;if(i){if(n.indexOf(`application/x-www-form-urlencoded`)>-1)return go(e,this.formSerializer).toString();if((a=L.isFileList(e))||n.indexOf(`multipart/form-data`)>-1){let t=this.env&&this.env.FormData;return $a(a?{"files[]":e}:e,t&&new t,this.formSerializer)}}return i||r?(t.setContentType(`application/json`,!1),xo(e)):e}],transformResponse:[function(e){let t=this.transitional||So.transitional,n=t&&t.forcedJSONParsing,r=this.responseType===`json`;if(L.isResponse(e)||L.isReadableStream(e))return e;if(e&&L.isString(e)&&(n&&!this.responseType||r)){let n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e,this.parseReviver)}catch(e){if(n)throw e.name===`SyntaxError`?R.from(e,R.ERR_BAD_RESPONSE,this,null,this.response):e}}return e}],timeout:0,xsrfCookieName:`XSRF-TOKEN`,xsrfHeaderName:`X-XSRF-TOKEN`,maxContentLength:-1,maxBodyLength:-1,env:{FormData:z.classes.FormData,Blob:z.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:`application/json, text/plain, */*`,"Content-Type":void 0}}};L.forEach([`delete`,`get`,`head`,`post`,`put`,`patch`],e=>{So.headers[e]={}});var Co=So,wo=L.toObjectSet([`age`,`authorization`,`content-length`,`content-type`,`etag`,`expires`,`from`,`host`,`if-modified-since`,`if-unmodified-since`,`last-modified`,`location`,`max-forwards`,`proxy-authorization`,`referer`,`retry-after`,`user-agent`]),B=e=>{let t={},n,r,i;return e&&e.split(`
`).forEach(function(e){i=e.indexOf(`:`),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim(),!(!n||t[n]&&wo[n])&&(n===`set-cookie`?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+`, `+r:r)}),t},V=Symbol(`internals`);function To(e){return e&&String(e).trim().toLowerCase()}function Eo(e){return e===!1||e==null?e:L.isArray(e)?e.map(Eo):String(e)}function Do(e){let t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}var Oo=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ko(e,t,n,r,i){if(L.isFunction(r))return r.call(this,t,n);if(i&&(t=n),L.isString(t)){if(L.isString(r))return t.indexOf(r)!==-1;if(L.isRegExp(r))return r.test(t)}}function Ao(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,n)=>t.toUpperCase()+n)}function jo(e,t){let n=L.toCamelCase(` `+t);[`get`,`set`,`has`].forEach(r=>{Object.defineProperty(e,r+n,{value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})})}var Mo=class{constructor(e){e&&this.set(e)}set(e,t,n){let r=this;function i(e,t,n){let i=To(t);if(!i)throw Error(`header name must be a non-empty string`);let a=L.findKey(r,i);(!a||r[a]===void 0||n===!0||n===void 0&&r[a]!==!1)&&(r[a||t]=Eo(e))}let a=(e,t)=>L.forEach(e,(e,n)=>i(e,n,t));if(L.isPlainObject(e)||e instanceof this.constructor)a(e,t);else if(L.isString(e)&&(e=e.trim())&&!Oo(e))a(B(e),t);else if(L.isObject(e)&&L.isIterable(e)){let n={},r,i;for(let t of e){if(!L.isArray(t))throw TypeError(`Object iterator must return a key-value pair`);n[i=t[0]]=(r=n[i])?L.isArray(r)?[...r,t[1]]:[r,t[1]]:t[1]}a(n,t)}else e!=null&&i(t,e,n);return this}get(e,t){if(e=To(e),e){let n=L.findKey(this,e);if(n){let e=this[n];if(!t)return e;if(t===!0)return Do(e);if(L.isFunction(t))return t.call(this,e,n);if(L.isRegExp(t))return t.exec(e);throw TypeError(`parser must be boolean|regexp|function`)}}}has(e,t){if(e=To(e),e){let n=L.findKey(this,e);return!!(n&&this[n]!==void 0&&(!t||ko(this,this[n],n,t)))}return!1}delete(e,t){let n=this,r=!1;function i(e){if(e=To(e),e){let i=L.findKey(n,e);i&&(!t||ko(n,n[i],i,t))&&(delete n[i],r=!0)}}return L.isArray(e)?e.forEach(i):i(e),r}clear(e){let t=Object.keys(this),n=t.length,r=!1;for(;n--;){let i=t[n];(!e||ko(this,this[i],i,e,!0))&&(delete this[i],r=!0)}return r}normalize(e){let t=this,n={};return L.forEach(this,(r,i)=>{let a=L.findKey(n,i);if(a){t[a]=Eo(r),delete t[i];return}let o=e?Ao(i):String(i).trim();o!==i&&delete t[i],t[o]=Eo(r),n[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){let t=Object.create(null);return L.forEach(this,(n,r)=>{n!=null&&n!==!1&&(t[r]=e&&L.isArray(n)?n.join(`, `):n)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+`: `+t).join(`
`)}getSetCookie(){return this.get(`set-cookie`)||[]}get[Symbol.toStringTag](){return`AxiosHeaders`}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){let n=new this(e);return t.forEach(e=>n.set(e)),n}static accessor(e){let t=(this[V]=this[V]={accessors:{}}).accessors,n=this.prototype;function r(e){let r=To(e);t[r]||(jo(n,e),t[r]=!0)}return L.isArray(e)?e.forEach(r):r(e),this}};Mo.accessor([`Content-Type`,`Content-Length`,`Accept`,`Accept-Encoding`,`User-Agent`,`Authorization`]),L.reduceDescriptors(Mo.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}}),L.freezeMethods(Mo);var H=Mo;function No(e,t){let n=this||Co,r=t||n,i=H.from(r.headers),a=r.data;return L.forEach(e,function(e){a=e.call(n,a,i.normalize(),t?t.status:void 0)}),i.normalize(),a}function Po(e){return!!(e&&e.__CANCEL__)}function Fo(e,t,n){R.call(this,e??`canceled`,R.ERR_CANCELED,t,n),this.name=`CanceledError`}L.inherits(Fo,R,{__CANCEL__:!0});var Io=Fo;function Lo(e,t,n){let r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new R(`Request failed with status code `+n.status,[R.ERR_BAD_REQUEST,R.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Ro(e){let t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||``}function zo(e,t){e||=10;let n=Array(e),r=Array(e),i=0,a=0,o;return t=t===void 0?1e3:t,function(s){let c=Date.now(),l=r[a];o||=c,n[i]=s,r[i]=c;let u=a,d=0;for(;u!==i;)d+=n[u++],u%=e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),c-o<t)return;let f=l&&c-l;return f?Math.round(d*1e3/f):void 0}}var Bo=zo;function Vo(e,t){let n=0,r=1e3/t,i,a,o=(t,r=Date.now())=>{n=r,i=null,a&&=(clearTimeout(a),null),e(...t)};return[(...e)=>{let t=Date.now(),s=t-n;s>=r?o(e,t):(i=e,a||=setTimeout(()=>{a=null,o(i)},r-s))},()=>i&&o(i)]}var Ho=Vo;const Uo=(e,t,n=3)=>{let r=0,i=Bo(50,250);return Ho(n=>{let a=n.loaded,o=n.lengthComputable?n.total:void 0,s=a-r,c=i(s),l=a<=o;r=a;let u={loaded:a,total:o,progress:o?a/o:void 0,bytes:s,rate:c||void 0,estimated:c&&o&&l?(o-a)/c:void 0,event:n,lengthComputable:o!=null,[t?`download`:`upload`]:!0};e(u)},n)},Wo=(e,t)=>{let n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Go=e=>(...t)=>L.asap(()=>e(...t));var Ko=z.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,z.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(z.origin),z.navigator&&/(msie|trident)/i.test(z.navigator.userAgent)):()=>!0,qo=z.hasStandardBrowserEnv?{write(e,t,n,r,i,a){let o=[e+`=`+encodeURIComponent(t)];L.isNumber(n)&&o.push(`expires=`+new Date(n).toGMTString()),L.isString(r)&&o.push(`path=`+r),L.isString(i)&&o.push(`domain=`+i),a===!0&&o.push(`secure`),document.cookie=o.join(`; `)},read(e){let t=document.cookie.match(RegExp(`(^|;\\s*)(`+e+`)=([^;]*)`));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,``,Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Jo(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Yo(e,t){return t?e.replace(/\/?\/$/,``)+`/`+t.replace(/^\/+/,``):e}function Xo(e,t,n){let r=!Jo(t);return e&&(r||n==0)?Yo(e,t):t}var Zo=e=>e instanceof H?{...e}:e;function Qo(e,t){t||={};let n={};function r(e,t,n,r){return L.isPlainObject(e)&&L.isPlainObject(t)?L.merge.call({caseless:r},e,t):L.isPlainObject(t)?L.merge({},t):L.isArray(t)?t.slice():t}function i(e,t,n,i){if(L.isUndefined(t)){if(!L.isUndefined(e))return r(void 0,e,n,i)}else return r(e,t,n,i)}function a(e,t){if(!L.isUndefined(t))return r(void 0,t)}function o(e,t){if(L.isUndefined(t)){if(!L.isUndefined(e))return r(void 0,e)}else return r(void 0,t)}function s(n,i,a){if(a in t)return r(n,i);if(a in e)return r(void 0,n)}let c={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:s,headers:(e,t,n)=>i(Zo(e),Zo(t),n,!0)};return L.forEach(Object.keys({...e,...t}),function(r){let a=c[r]||i,o=a(e[r],t[r],r);L.isUndefined(o)&&a!==s||(n[r]=o)}),n}var $o=e=>{let t=Qo({},e),{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:a,headers:o,auth:s}=t;if(t.headers=o=H.from(o),t.url=ao(Xo(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),s&&o.set(`Authorization`,`Basic `+btoa((s.username||``)+`:`+(s.password?unescape(encodeURIComponent(s.password)):``))),L.isFormData(n)){if(z.hasStandardBrowserEnv||z.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(L.isFunction(n.getHeaders)){let e=n.getHeaders(),t=[`content-type`,`content-length`];Object.entries(e).forEach(([e,n])=>{t.includes(e.toLowerCase())&&o.set(e,n)})}}if(z.hasStandardBrowserEnv&&(r&&L.isFunction(r)&&(r=r(t)),r||r!==!1&&Ko(t.url))){let e=i&&a&&qo.read(a);e&&o.set(i,e)}return t},es=typeof XMLHttpRequest<`u`&&function(e){return new Promise(function(t,n){let r=$o(e),i=r.data,a=H.from(r.headers).normalize(),{responseType:o,onUploadProgress:s,onDownloadProgress:c}=r,l,u,d,f,p;function m(){f&&f(),p&&p(),r.cancelToken&&r.cancelToken.unsubscribe(l),r.signal&&r.signal.removeEventListener(`abort`,l)}let h=new XMLHttpRequest;h.open(r.method.toUpperCase(),r.url,!0),h.timeout=r.timeout;function g(){if(!h)return;let r=H.from(`getAllResponseHeaders`in h&&h.getAllResponseHeaders()),i={data:!o||o===`text`||o===`json`?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:r,config:e,request:h};Lo(function(e){t(e),m()},function(e){n(e),m()},i),h=null}`onloadend`in h?h.onloadend=g:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf(`file:`)===0)||setTimeout(g)},h.onabort=function(){h&&=(n(new R(`Request aborted`,R.ECONNABORTED,e,h)),null)},h.onerror=function(t){let r=t&&t.message?t.message:`Network Error`,i=new R(r,R.ERR_NETWORK,e,h);i.event=t||null,n(i),h=null},h.ontimeout=function(){let t=r.timeout?`timeout of `+r.timeout+`ms exceeded`:`timeout exceeded`,i=r.transitional||so;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new R(t,i.clarifyTimeoutError?R.ETIMEDOUT:R.ECONNABORTED,e,h)),h=null},i===void 0&&a.setContentType(null),`setRequestHeader`in h&&L.forEach(a.toJSON(),function(e,t){h.setRequestHeader(t,e)}),L.isUndefined(r.withCredentials)||(h.withCredentials=!!r.withCredentials),o&&o!==`json`&&(h.responseType=r.responseType),c&&([d,p]=Uo(c,!0),h.addEventListener(`progress`,d)),s&&h.upload&&([u,f]=Uo(s),h.upload.addEventListener(`progress`,u),h.upload.addEventListener(`loadend`,f)),(r.cancelToken||r.signal)&&(l=t=>{h&&=(n(!t||t.type?new Io(null,e,h):t),h.abort(),null)},r.cancelToken&&r.cancelToken.subscribe(l),r.signal&&(r.signal.aborted?l():r.signal.addEventListener(`abort`,l)));let _=Ro(r.url);if(_&&z.protocols.indexOf(_)===-1){n(new R(`Unsupported protocol `+_+`:`,R.ERR_BAD_REQUEST,e));return}h.send(i||null)})},ts=(e,t)=>{let{length:n}=e=e?e.filter(Boolean):[];if(t||n){let n=new AbortController,r,i=function(e){if(!r){r=!0,o();let t=e instanceof Error?e:this.reason;n.abort(t instanceof R?t:new Io(t instanceof Error?t.message:t))}},a=t&&setTimeout(()=>{a=null,i(new R(`timeout ${t} of ms exceeded`,R.ETIMEDOUT))},t),o=()=>{e&&=(a&&clearTimeout(a),a=null,e.forEach(e=>{e.unsubscribe?e.unsubscribe(i):e.removeEventListener(`abort`,i)}),null)};e.forEach(e=>e.addEventListener(`abort`,i));let{signal:s}=n;return s.unsubscribe=()=>L.asap(o),s}};const ns=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},rs=async function*(e,t){for await(let n of os(e))yield*ns(n,t)};var os=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}let t=e.getReader();try{for(;;){let{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}};const ss=(e,t,n,r)=>{let i=rs(e,t),a=0,o,s=e=>{o||(o=!0,r&&r(e))};return new ReadableStream({async pull(e){try{let{done:t,value:r}=await i.next();if(t){s(),e.close();return}let o=r.byteLength;if(n){let e=a+=o;n(e)}e.enqueue(new Uint8Array(r))}catch(e){throw s(e),e}},cancel(e){return s(e),i.return()}},{highWaterMark:2})};var cs=64*1024,{isFunction:ls}=L,us=(({Request:e,Response:t})=>({Request:e,Response:t}))(L.global),{ReadableStream:ds,TextEncoder:fs}=L.global,ps=(e,...t)=>{try{return!!e(...t)}catch{return!1}},ms=e=>{e=L.merge.call({skipUndefined:!0},us,e);let{fetch:t,Request:n,Response:r}=e,i=t?ls(t):typeof fetch==`function`,a=ls(n),o=ls(r);if(!i)return!1;let s=i&&ls(ds),c=i&&(typeof fs==`function`?(e=>t=>e.encode(t))(new fs):async e=>new Uint8Array(await new n(e).arrayBuffer())),l=a&&s&&ps(()=>{let e=!1,t=new n(z.origin,{body:new ds,method:`POST`,get duplex(){return e=!0,`half`}}).headers.has(`Content-Type`);return e&&!t}),u=o&&s&&ps(()=>L.isReadableStream(new r(``).body)),d={stream:u&&(e=>e.body)};i&&[`text`,`arrayBuffer`,`blob`,`formData`,`stream`].forEach(e=>{!d[e]&&(d[e]=(t,n)=>{let r=t&&t[e];if(r)return r.call(t);throw new R(`Response type '${e}' is not supported`,R.ERR_NOT_SUPPORT,n)})});let f=async e=>{if(e==null)return 0;if(L.isBlob(e))return e.size;if(L.isSpecCompliantForm(e))return(await new n(z.origin,{method:`POST`,body:e}).arrayBuffer()).byteLength;if(L.isArrayBufferView(e)||L.isArrayBuffer(e))return e.byteLength;if(L.isURLSearchParams(e)&&(e+=``),L.isString(e))return(await c(e)).byteLength},p=async(e,t)=>L.toFiniteNumber(e.getContentLength())??f(t);return async e=>{let{url:i,method:o,data:s,signal:c,cancelToken:f,timeout:m,onDownloadProgress:h,onUploadProgress:g,responseType:_,headers:v,withCredentials:y=`same-origin`,fetchOptions:b}=$o(e),x=t||fetch;_=_?(_+``).toLowerCase():`text`;let S=ts([c,f&&f.toAbortSignal()],m),C=null,w=S&&S.unsubscribe&&(()=>{S.unsubscribe()}),ee;try{if(g&&l&&o!==`get`&&o!==`head`&&(ee=await p(v,s))!==0){let e=new n(i,{method:`POST`,body:s,duplex:`half`}),t;if(L.isFormData(s)&&(t=e.headers.get(`content-type`))&&v.setContentType(t),e.body){let[t,n]=Wo(ee,Uo(Go(g)));s=ss(e.body,cs,t,n)}}L.isString(y)||(y=y?`include`:`omit`);let t=a&&`credentials`in n.prototype,c={...b,signal:S,method:o.toUpperCase(),headers:v.normalize().toJSON(),body:s,duplex:`half`,credentials:t?y:void 0};C=a&&new n(i,c);let f=await(a?x(C,b):x(i,c)),m=u&&(_===`stream`||_===`response`);if(u&&(h||m&&w)){let e={};[`status`,`statusText`,`headers`].forEach(t=>{e[t]=f[t]});let t=L.toFiniteNumber(f.headers.get(`content-length`)),[n,i]=h&&Wo(t,Uo(Go(h),!0))||[];f=new r(ss(f.body,cs,n,()=>{i&&i(),w&&w()}),e)}_||=`text`;let te=await d[L.findKey(d,_)||`text`](f,e);return!m&&w&&w(),await new Promise((t,n)=>{Lo(t,n,{data:te,headers:H.from(f.headers),status:f.status,statusText:f.statusText,config:e,request:C})})}catch(t){throw w&&w(),t&&t.name===`TypeError`&&/Load failed|fetch/i.test(t.message)?Object.assign(new R(`Network Error`,R.ERR_NETWORK,e,C),{cause:t.cause||t}):R.from(t,t&&t.code,e,C)}}},hs=new Map;const gs=e=>{let t=e?e.env:{},{fetch:n,Request:r,Response:i}=t,a=[r,i,n],o=a.length,s,c,l=hs;for(;o--;)s=a[o],c=l.get(s),c===void 0&&l.set(s,c=o?new Map:ms(t)),l=c;return c};gs();var _s={http:null,xhr:es,fetch:{get:gs}};L.forEach(_s,(e,t)=>{if(e){try{Object.defineProperty(e,`name`,{value:t})}catch{}Object.defineProperty(e,`adapterName`,{value:t})}});var vs=e=>`- ${e}`,ys=e=>L.isFunction(e)||e===null||e===!1,bs={getAdapter:(e,t)=>{e=L.isArray(e)?e:[e];let{length:n}=e,r,i,a={};for(let o=0;o<n;o++){r=e[o];let n;if(i=r,!ys(r)&&(i=_s[(n=String(r)).toLowerCase()],i===void 0))throw new R(`Unknown adapter '${n}'`);if(i&&(L.isFunction(i)||(i=i.get(t))))break;a[n||`#`+o]=i}if(!i){let e=Object.entries(a).map(([e,t])=>`adapter ${e} `+(t===!1?`is not supported by the environment`:`is not available in the build`)),t=n?e.length>1?`since :
`+e.map(vs).join(`
`):` `+vs(e[0]):`as no adapter specified`;throw new R(`There is no suitable adapter to dispatch the request `+t,`ERR_NOT_SUPPORT`)}return i},adapters:_s};function xs(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Io(null,e)}function Ss(e){return xs(e),e.headers=H.from(e.headers),e.data=No.call(e,e.transformRequest),[`post`,`put`,`patch`].indexOf(e.method)!==-1&&e.headers.setContentType(`application/x-www-form-urlencoded`,!1),bs.getAdapter(e.adapter||Co.adapter,e)(e).then(function(t){return xs(e),t.data=No.call(e,e.transformResponse,t),t.headers=H.from(t.headers),t},function(t){return Po(t)||(xs(e),t&&t.response&&(t.response.data=No.call(e,e.transformResponse,t.response),t.response.headers=H.from(t.response.headers))),Promise.reject(t)})}const Cs=`1.12.2`;var ws={};[`object`,`boolean`,`number`,`function`,`string`,`symbol`].forEach((e,t)=>{ws[e]=function(n){return typeof n===e||`a`+(t<1?`n `:` `)+e}});var Ts={};ws.transitional=function(e,t,n){function r(e,t){return`[Axios v`+Cs+`] Transitional option '`+e+`'`+t+(n?`. `+n:``)}return(n,i,a)=>{if(e===!1)throw new R(r(i,` has been removed`+(t?` in `+t:``)),R.ERR_DEPRECATED);return t&&!Ts[i]&&(Ts[i]=!0,console.warn(r(i,` has been deprecated since v`+t+` and will be removed in the near future`))),e?e(n,i,a):!0}},ws.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};function Es(e,t,n){if(typeof e!=`object`)throw new R(`options must be an object`,R.ERR_BAD_OPTION_VALUE);let r=Object.keys(e),i=r.length;for(;i-- >0;){let a=r[i],o=t[a];if(o){let t=e[a],n=t===void 0||o(t,a,e);if(n!==!0)throw new R(`option `+a+` must be `+n,R.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new R(`Unknown option `+a,R.ERR_BAD_OPTION)}}var Ds={assertOptions:Es,validators:ws},Os=Ds.validators,ks=class{constructor(e){this.defaults=e||{},this.interceptors={request:new oo,response:new oo}}async request(e,t){try{return await this._request(e,t)}catch(e){if(e instanceof Error){let t={};Error.captureStackTrace?Error.captureStackTrace(t):t=Error();let n=t.stack?t.stack.replace(/^.+\n/,``):``;try{e.stack?n&&!String(e.stack).endsWith(n.replace(/^.+\n.+\n/,``))&&(e.stack+=`
`+n):e.stack=n}catch{}}throw e}}_request(e,t){typeof e==`string`?(t||={},t.url=e):t=e||{},t=Qo(this.defaults,t);let{transitional:n,paramsSerializer:r,headers:i}=t;n!==void 0&&Ds.assertOptions(n,{silentJSONParsing:Os.transitional(Os.boolean),forcedJSONParsing:Os.transitional(Os.boolean),clarifyTimeoutError:Os.transitional(Os.boolean)},!1),r!=null&&(L.isFunction(r)?t.paramsSerializer={serialize:r}:Ds.assertOptions(r,{encode:Os.function,serialize:Os.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls===void 0?t.allowAbsoluteUrls=!0:t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls),Ds.assertOptions(t,{baseUrl:Os.spelling(`baseURL`),withXsrfToken:Os.spelling(`withXSRFToken`)},!0),t.method=(t.method||this.defaults.method||`get`).toLowerCase();let a=i&&L.merge(i.common,i[t.method]);i&&L.forEach([`delete`,`get`,`head`,`post`,`put`,`patch`,`common`],e=>{delete i[e]}),t.headers=H.concat(a,i);let o=[],s=!0;this.interceptors.request.forEach(function(e){typeof e.runWhen==`function`&&e.runWhen(t)===!1||(s&&=e.synchronous,o.unshift(e.fulfilled,e.rejected))});let c=[];this.interceptors.response.forEach(function(e){c.push(e.fulfilled,e.rejected)});let l,u=0,d;if(!s){let e=[Ss.bind(this),void 0];for(e.unshift(...o),e.push(...c),d=e.length,l=Promise.resolve(t);u<d;)l=l.then(e[u++],e[u++]);return l}d=o.length;let f=t;for(;u<d;){let e=o[u++],t=o[u++];try{f=e(f)}catch(e){t.call(this,e);break}}try{l=Ss.call(this,f)}catch(e){return Promise.reject(e)}for(u=0,d=c.length;u<d;)l=l.then(c[u++],c[u++]);return l}getUri(e){e=Qo(this.defaults,e);let t=Xo(e.baseURL,e.url,e.allowAbsoluteUrls);return ao(t,e.params,e.paramsSerializer)}};L.forEach([`delete`,`get`,`head`,`options`],function(e){ks.prototype[e]=function(t,n){return this.request(Qo(n||{},{method:e,url:t,data:(n||{}).data}))}}),L.forEach([`post`,`put`,`patch`],function(e){function t(t){return function(n,r,i){return this.request(Qo(i||{},{method:e,headers:t?{"Content-Type":`multipart/form-data`}:{},url:n,data:r}))}}ks.prototype[e]=t(),ks.prototype[e+`Form`]=t(!0)});var As=ks,js=class e{constructor(e){if(typeof e!=`function`)throw TypeError(`executor must be a function.`);let t;this.promise=new Promise(function(e){t=e});let n=this;this.promise.then(e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null}),this.promise.then=e=>{let t,r=new Promise(e=>{n.subscribe(e),t=e}).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e(function(e,r,i){n.reason||(n.reason=new Io(e,r,i),t(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;let t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){let e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let t;return{token:new e(function(e){t=e}),cancel:t}}};function Ms(e){return function(t){return e.apply(null,t)}}function Ns(e){return L.isObject(e)&&e.isAxiosError===!0}var Ps={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ps).forEach(([e,t])=>{Ps[t]=e});var Fs=Ps;function Is(e){let t=new As(e),n=zi(As.prototype.request,t);return L.extend(n,As.prototype,t,{allOwnKeys:!0}),L.extend(n,t,null,{allOwnKeys:!0}),n.create=function(t){return Is(Qo(e,t))},n}var Ls=Is(Co);Ls.Axios=As,Ls.CanceledError=Io,Ls.CancelToken=js,Ls.isCancel=Po,Ls.VERSION=Cs,Ls.toFormData=$a,Ls.AxiosError=R,Ls.Cancel=Ls.CanceledError,Ls.all=function(e){return Promise.all(e)},Ls.spread=Ms,Ls.isAxiosError=Ns,Ls.mergeConfig=Qo,Ls.AxiosHeaders=H,Ls.formToJSON=e=>bo(L.isHTMLForm(e)?new FormData(e):e),Ls.getAdapter=bs.getAdapter,Ls.HttpStatusCode=Fs,Ls.default=Ls;var Rs=Ls,zs=window.location.origin,Bs=Rs.create({baseURL:`${zs}/api`,headers:{"Content-Type":`application/json`},timeout:1e4});Bs.interceptors.request.use(e=>(console.log(`🌐 ${e.method?.toUpperCase()} ${e.url}`),e),e=>(console.error(`API Request Error:`,e),Promise.reject(e))),Bs.interceptors.response.use(e=>e,e=>{if(console.error(`API Response Error:`,e),e.response){let t=e.response.data?.message||e.response.statusText;throw Error(`API Fehler (${e.response.status}): ${t}`)}else if(e.request)throw Error(`Keine Antwort vom Server - Bitte Verbindung prüfen`);else throw Error(`Unbekannter Fehler: ${e.message}`)});var U=Bs,Vs={async getFirma(){try{return(await U.get(`/firma`)).data}catch(e){throw console.error(`Fehler beim Laden der Firmendaten:`,e),e}},async updateFirma(e){try{let t=e instanceof FormData;return(await U.put(`/firma`,e,{headers:t?{"Content-Type":`multipart/form-data`}:void 0})).data}catch(e){throw console.error(`Fehler beim Aktualisieren der Firmendaten:`,e),e}},async get(){return this.getFirma()},async update(e){return this.updateFirma(e)}},Hs=M.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`,Us=M.div`
  background: ${N.colors.bgSecondary};
  border-bottom: 2px solid ${N.colors.borderColor};
  padding: ${N.spacing.md} ${N.spacing.lg};
  display: flex;
  gap: ${N.spacing.md};
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    padding: ${N.spacing.sm};
    gap: ${N.spacing.sm};
  }
`,Ws=M.div`
  flex: 1;
  overflow-y: auto;
  padding: ${N.spacing.xl};
  
  @media (max-width: 768px) {
    padding: ${N.spacing.md};
  }
`,Gs=M.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${N.spacing.xl};
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,Ks=M.div`
  background: ${N.colors.bgSecondary};
  border: 2px solid ${N.colors.borderColor};
  border-radius: ${N.borderRadius.lg};
  padding: ${N.spacing.xl};
  
  @media (max-width: 768px) {
    padding: ${N.spacing.lg};
  }
`,qs=M.h2`
  color: ${N.colors.accentCyan};
  font-size: ${N.fontSizes.xl};
  margin: 0 0 ${N.spacing.lg} 0;
  padding-bottom: ${N.spacing.md};
  border-bottom: 2px solid ${N.colors.borderColor};
`,Js=M.div`
  width: 100%;
  height: 180px;
  border: 2px dashed ${N.colors.borderColor};
  border-radius: ${N.borderRadius.base};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${N.colors.bgTertiary};
  overflow: hidden;
  margin-bottom: ${N.spacing.md};
  position: relative;
  
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  
  &:hover {
    border-color: ${N.colors.accentBlue};
  }
`,Ys=M.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${N.spacing.sm};
  padding: ${N.spacing.sm} ${N.spacing.md};
  background: ${N.colors.accentGreen};
  color: ${N.colors.textPrimary};
  border: 2px solid ${N.colors.accentGreen};
  border-radius: ${N.borderRadius.base};
  cursor: pointer;
  font-size: ${N.fontSizes.sm};
  font-family: ${N.fonts.mono};
  font-weight: ${N.fontWeights.medium};
  transition: all 0.2s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(85, 255, 85, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  input {
    display: none;
  }
`,Xs=M.div`
  text-align: center;
  color: ${N.colors.textSecondary};
  
  .icon {
    font-size: 3em;
    margin-bottom: ${N.spacing.sm};
  }
`,Zs=M.div`
  margin-bottom: ${N.spacing.sm};
  
  &:last-child {
    margin-bottom: 0;
  }
`,Qs=M.span`
  color: ${N.colors.textSecondary};
  font-size: ${N.fontSizes.sm};
  display: block;
  margin-bottom: 2px;
`,$s=M.span`
  color: ${N.colors.textPrimary};
  font-size: ${N.fontSizes.base};
  font-weight: ${N.fontWeights.medium};
`,ec=M.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: ${N.borderRadius.sm};
  border: 2px solid ${N.colors.borderColor};
  background: ${e=>e.color};
  vertical-align: middle;
  margin-left: ${N.spacing.sm};
`;M.div`
  margin-top: ${N.spacing.xl};
  padding-top: ${N.spacing.xl};
  border-top: 1px solid ${N.colors.borderColor};
  
  img {
    max-width: 300px;
    max-height: 150px;
    display: block;
    margin-top: ${N.spacing.md};
    margin-bottom: ${N.spacing.md};
    border: 1px solid ${N.colors.borderColor};
    border-radius: ${N.borderRadius.base};
    padding: ${N.spacing.sm};
    background: white;
  }
`,M.div`
  margin-top: ${N.spacing.md};
  max-width: 300px;
`;var tc=M.div`
  text-align: center;
  padding: ${N.spacing.xxl};
  color: ${N.colors.textSecondary};
  font-size: ${N.fontSizes.lg};
`,nc=()=>{let[e,t]=(0,v.useState)(null),[n,r]=(0,v.useState)(!0),[i,a]=(0,v.useState)(!1),[o,s]=(0,v.useState)(!1),[c,l]=(0,v.useState)(!1),[u,d]=(0,v.useState)(!1);(0,v.useEffect)(()=>{f()},[]);let f=async()=>{r(!0);try{let e=await Vs.getFirma(),n=e.success?e.data:e;console.log(`Firmendaten geladen:`,n),t(n)}catch(e){console.error(`Fehler beim Laden der Firmendaten:`,e)}finally{r(!1)}},p=async e=>{s(!0);try{let n=await Vs.updateFirma(e),r=n.success?n.data:n;t(r),a(!1),await f()}catch(e){console.error(`Fehler beim Speichern der Firmendaten:`,e),alert(`Fehler beim Speichern: `+e.message)}finally{s(!1)}},m=async t=>{let n=t.target.files?.[0];if(n){if(!n.type.startsWith(`image/`)){alert(`Bitte wählen Sie eine Bilddatei aus.`);return}if(n.size>10*1024*1024){alert(`Die Datei ist zu groß. Maximum: 10 MB`);return}l(!0);try{let t=new FormData;t.append(`logo`,n),Object.keys(e).forEach(n=>{n!==`logoUrl`&&n!==`signatureUrl`&&t.append(n,e[n])});let r=await Vs.updateFirma(t);console.log(`Logo Upload Response:`,r),await f(),alert(`✅ Logo erfolgreich hochgeladen!`)}catch(e){console.error(`Fehler beim Logo-Upload:`,e),alert(`Fehler beim Logo-Upload: `+e.message)}finally{l(!1)}}},h=async t=>{let n=t.target.files?.[0];if(n){if(!n.type.startsWith(`image/`)){alert(`Bitte wählen Sie eine Bilddatei aus.`);return}if(n.size>10*1024*1024){alert(`Die Datei ist zu groß. Maximum: 10 MB`);return}d(!0);try{let t=new FormData;t.append(`signature`,n),Object.keys(e).forEach(n=>{n!==`logoUrl`&&n!==`signatureUrl`&&t.append(n,e[n])});let r=await Vs.updateFirma(t);console.log(`Unterschrift Upload Response:`,r),await f(),alert(`✅ Unterschrift erfolgreich hochgeladen!`)}catch(e){console.error(`Fehler beim Unterschrift-Upload:`,e),alert(`Fehler beim Unterschrift-Upload: `+e.message)}finally{d(!1)}}};if(n)return(0,P.jsx)(Wr,{title:`🏢 Firmenprofil`,children:(0,P.jsx)(tc,{children:`⏳ Firmendaten werden geladen...`})});let g=e=>{e.key===`F3`?(e.preventDefault(),a(!0)):e.key===`F5`&&(e.preventDefault(),f())};return(0,v.useEffect)(()=>(document.addEventListener(`keydown`,g),()=>document.removeEventListener(`keydown`,g)),[]),(0,P.jsx)(Wr,{title:`🏢 Firmenprofil`,children:(0,P.jsxs)(Hs,{children:[(0,P.jsxs)(Us,{children:[(0,P.jsxs)(er,{onClick:()=>a(!0),children:[(0,P.jsx)(tr,{children:`F3`}),(0,P.jsx)(nr,{children:`Bearbeiten`})]}),(0,P.jsxs)(er,{onClick:f,children:[(0,P.jsx)(tr,{children:`F5`}),(0,P.jsx)(nr,{children:`Aktualisieren`})]})]}),(0,P.jsx)(Ws,{children:e&&(0,P.jsxs)(Gs,{children:[(0,P.jsxs)(Ks,{children:[(0,P.jsx)(qs,{children:`📞 Kontaktdaten`}),(0,P.jsxs)(Zs,{children:[(0,P.jsx)(Qs,{children:`Firmenname`}),(0,P.jsx)($s,{children:e.name})]}),(0,P.jsxs)(Zs,{children:[(0,P.jsx)(Qs,{children:`Adresse`}),(0,P.jsxs)($s,{children:[e.strasse&&`${e.strasse}, `,e.plz,` `,e.ort,e.land&&e.land!==`Schweiz`&&`, ${e.land}`]})]}),e.email&&(0,P.jsxs)(Zs,{children:[(0,P.jsx)(Qs,{children:`E-Mail`}),(0,P.jsx)($s,{children:e.email})]}),e.telefon&&(0,P.jsxs)(Zs,{children:[(0,P.jsx)(Qs,{children:`Telefon`}),(0,P.jsx)($s,{children:e.telefon})]}),e.website&&(0,P.jsxs)(Zs,{children:[(0,P.jsx)(Qs,{children:`Website`}),(0,P.jsx)($s,{children:(0,P.jsx)(`a`,{href:e.website,target:`_blank`,rel:`noopener noreferrer`,style:{color:N.colors.accentBlue},children:e.website})})]}),e.slogan&&(0,P.jsxs)(Zs,{children:[(0,P.jsx)(Qs,{children:`Slogan`}),(0,P.jsx)($s,{style:{fontStyle:`italic`,color:N.colors.textSecondary},children:e.slogan})]})]}),(0,P.jsxs)(Ks,{children:[(0,P.jsx)(qs,{children:`💰 Finanzen`}),e.uid&&(0,P.jsxs)(Zs,{children:[(0,P.jsx)(Qs,{children:`UID-Nummer`}),(0,P.jsx)($s,{children:e.uid})]}),e.iban&&(0,P.jsxs)(Zs,{children:[(0,P.jsx)(Qs,{children:`IBAN`}),(0,P.jsx)($s,{children:e.iban})]}),(0,P.jsxs)(Zs,{children:[(0,P.jsx)(Qs,{children:`MwSt-Satz`}),(0,P.jsxs)($s,{children:[e.mwstSatz,`%`]})]}),(0,P.jsxs)(Zs,{children:[(0,P.jsx)(Qs,{children:`MwSt-pflichtig`}),(0,P.jsx)($s,{children:e.mwstPflichtig?`Ja`:`Nein`})]})]}),(0,P.jsxs)(Ks,{children:[(0,P.jsx)(qs,{children:`🎨 Design`}),(0,P.jsxs)(Zs,{children:[(0,P.jsx)(Qs,{children:`Akzentfarbe`}),(0,P.jsxs)($s,{children:[e[`accent-color`]||e.accentColor||`#bd00ff`,(0,P.jsx)(ec,{color:e[`accent-color`]||e.accentColor||`#bd00ff`})]})]}),(0,P.jsxs)(Zs,{children:[(0,P.jsx)(Qs,{children:`Hauptschriftart`}),(0,P.jsx)($s,{children:e[`main-font`]||e.mainFont||`Lexend Exa`})]})]}),(0,P.jsxs)(Ks,{children:[(0,P.jsx)(qs,{children:`🖼️ Bilder`}),(0,P.jsxs)(Zs,{children:[(0,P.jsx)(Qs,{children:`Logo`}),(0,P.jsx)(Js,{children:e.logoUrl?(0,P.jsx)(`img`,{src:e.logoUrl,alt:`Firmenlogo`}):(0,P.jsxs)(Xs,{children:[(0,P.jsx)(`div`,{className:`icon`,children:`🏢`}),(0,P.jsx)(`div`,{children:`Kein Logo`})]})}),(0,P.jsxs)(Ys,{children:[c?`⏳ Lädt...`:`📷 Logo hochladen`,(0,P.jsx)(`input`,{type:`file`,accept:`image/*`,onChange:m,disabled:c})]})]}),(0,P.jsxs)(Zs,{style:{marginTop:N.spacing.xl},children:[(0,P.jsx)(Qs,{children:`Unterschrift`}),(0,P.jsx)(Js,{children:e.signatureUrl?(0,P.jsx)(`img`,{src:e.signatureUrl,alt:`Unterschrift`,style:{background:`white`,padding:N.spacing.sm}}):(0,P.jsxs)(Xs,{children:[(0,P.jsx)(`div`,{className:`icon`,children:`✍️`}),(0,P.jsx)(`div`,{children:`Keine Unterschrift`})]})}),(0,P.jsxs)(Ys,{children:[u?`⏳ Lädt...`:`✍️ Unterschrift hochladen`,(0,P.jsx)(`input`,{type:`file`,accept:`image/*`,onChange:h,disabled:u})]})]})]})]})}),(0,P.jsx)(Ri,{isOpen:i,onClose:()=>a(!1),firma:e,onSave:p,loading:o})]})})};const rc=e=>{let t={};if(e.name?.trim()||(t.name=`Firmenname ist erforderlich`),e.email&&e.email.trim()&&(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)||(t.email=`Ungültige E-Mail-Adresse`)),e.telefon&&e.telefon.trim()&&(/^[+\d\s()-]+$/.test(e.telefon)||(t.telefon=`Ungültige Telefonnummer (nur Ziffern, +, -, (, ), Leerzeichen)`)),e.website&&e.website.trim())try{new URL(e.website)}catch{t.website=`Ungültige URL (muss mit http:// oder https:// beginnen)`}return t},ic=e=>{let t={};e.titel?.trim()||(t.titel=`Titel ist erforderlich`),e.kundeId||(t.kundeId=`Kunde muss ausgewählt werden`),e.datum||(t.datum=`Datum ist erforderlich`),e.gültigBis?e.datum&&new Date(e.gültigBis)<=new Date(e.datum)&&(t.gültigBis=`Gültigkeitsdatum muss nach dem Offertendatum liegen`):t.gültigBis=`Gültigkeitsdatum ist erforderlich`;let n=parseFloat(e.mwstSatz);return(isNaN(n)||n<0||n>100)&&(t.mwstSatz=`MwSt-Satz muss zwischen 0 und 100% liegen`),t},ac=e=>{let t={};e.titel?.trim()||(t.titel=`Titel ist erforderlich`),e.kundeId||(t.kundeId=`Kunde muss ausgewählt werden`),e.datum||(t.datum=`Datum ist erforderlich`),e.faelligkeitsdatum?e.datum&&new Date(e.faelligkeitsdatum)<new Date(e.datum)&&(t.faelligkeitsdatum=`Fälligkeitsdatum darf nicht vor dem Rechnungsdatum liegen`):t.faelligkeitsdatum=`Fälligkeitsdatum ist erforderlich`;let n=parseFloat(e.mwstSatz);if((isNaN(n)||n<0||n>100)&&(t.mwstSatz=`MwSt-Satz muss zwischen 0 und 100% liegen`),e.iban&&e.iban.trim()){let n=/^[A-Z]{2}[0-9]{2}[A-Z0-9]{1,30}$/,r=e.iban.replace(/\s/g,``).toUpperCase();n.test(r)||(t.iban=`Ungültige IBAN`)}return t},oc=e=>{let t={};e.beschreibung?.trim()||(t.beschreibung=`Beschreibung ist erforderlich`);let n=parseFloat(e.menge);(isNaN(n)||n<=0)&&(t.menge=`Menge muss größer als 0 sein`),e.einheit?.trim()||(t.einheit=`Einheit ist erforderlich`);let r=parseFloat(e.einzelpreis);return(isNaN(r)||r<0)&&(t.einzelpreis=`Einzelpreis muss 0 oder größer sein`),t};var{Form:sc,FormSection:cc,FormSectionTitle:lc,FormRow:uc,FormGroup:dc,Label:fc,Input:pc,Select:mc,TextArea:hc,ButtonGroup:gc,Button:_c,ErrorMessage:vc}=ci,yc=({isOpen:e,onClose:t,kunde:n=null,onSave:r,loading:i=!1})=>{let a=()=>n?{name:n.name||``,email:n.email||``,telefon:n.telefon||``,typ:n.typ||`privat`,adresse:{strasse:n.adresse?.strasse||``,plz:n.adresse?.plz||``,ort:n.adresse?.ort||``,land:n.adresse?.land||`Schweiz`},notizen:n.notizen||``}:{name:``,email:``,telefon:``,typ:`privat`,adresse:{strasse:``,plz:``,ort:``,land:`Schweiz`},notizen:``},{formData:o,errors:s,touched:c,handleChange:l,handleBlur:u,handleSubmit:d,resetForm:f,setFormData:p}=xi(a(),rc);(0,v.useEffect)(()=>{e&&p(a())},[n,e]);let m=()=>{r(o)},h=()=>{f(),t()},g=!!n,_=g?`Kunde bearbeiten: ${n?.name}`:`Neuer Kunde`;return(0,P.jsx)(si,{isOpen:e,onClose:h,title:_,closeOnOverlay:!i,children:(0,P.jsxs)(sc,{onSubmit:e=>{e.preventDefault(),d(m)},children:[(0,P.jsxs)(cc,{children:[(0,P.jsx)(lc,{children:`Grunddaten`}),(0,P.jsxs)(uc,{children:[(0,P.jsxs)(dc,{flex:2,children:[(0,P.jsx)(fc,{required:!0,children:`Name`}),(0,P.jsx)(pc,{type:`text`,value:o.name,onChange:e=>l(`name`,e.target.value),onBlur:()=>u(`name`),disabled:i,placeholder:`Vollständiger Name`}),s.name&&c.name&&(0,P.jsx)(vc,{children:s.name})]}),(0,P.jsxs)(dc,{children:[(0,P.jsx)(fc,{children:`Typ`}),(0,P.jsxs)(mc,{value:o.typ,onChange:e=>l(`typ`,e.target.value),disabled:i,children:[(0,P.jsx)(`option`,{value:`privat`,children:`Privat`}),(0,P.jsx)(`option`,{value:`firma`,children:`Firma`})]})]})]}),(0,P.jsxs)(uc,{children:[(0,P.jsxs)(dc,{children:[(0,P.jsx)(fc,{required:!0,children:`E-Mail`}),(0,P.jsx)(pc,{type:`email`,value:o.email,onChange:e=>l(`email`,e.target.value),onBlur:()=>u(`email`),disabled:i,placeholder:`name@example.com`}),s.email&&c.email&&(0,P.jsx)(vc,{children:s.email})]}),(0,P.jsxs)(dc,{children:[(0,P.jsx)(fc,{required:!0,children:`Telefon`}),(0,P.jsx)(pc,{type:`tel`,value:o.telefon,onChange:e=>l(`telefon`,e.target.value),onBlur:()=>u(`telefon`),disabled:i,placeholder:`012 345 67 89`}),s.telefon&&c.telefon&&(0,P.jsx)(vc,{children:s.telefon})]})]})]}),(0,P.jsxs)(cc,{children:[(0,P.jsx)(lc,{children:`Adresse`}),(0,P.jsxs)(dc,{children:[(0,P.jsx)(fc,{children:`Strasse & Hausnummer`}),(0,P.jsx)(pc,{type:`text`,value:o.adresse.strasse,onChange:e=>l(`adresse.strasse`,e.target.value),disabled:i,placeholder:`Musterstrasse 123`})]}),(0,P.jsxs)(uc,{children:[(0,P.jsxs)(dc,{flex:1,children:[(0,P.jsx)(fc,{required:!0,children:`PLZ`}),(0,P.jsx)(pc,{type:`text`,value:o.adresse.plz,onChange:e=>l(`adresse.plz`,e.target.value),onBlur:()=>u(`adresse.plz`),disabled:i,placeholder:`8000`}),s[`adresse.plz`]&&c[`adresse.plz`]&&(0,P.jsx)(vc,{children:s[`adresse.plz`]})]}),(0,P.jsxs)(dc,{flex:2,children:[(0,P.jsx)(fc,{required:!0,children:`Ort`}),(0,P.jsx)(pc,{type:`text`,value:o.adresse.ort,onChange:e=>l(`adresse.ort`,e.target.value),onBlur:()=>u(`adresse.ort`),disabled:i,placeholder:`Zürich`}),s[`adresse.ort`]&&c[`adresse.ort`]&&(0,P.jsx)(vc,{children:s[`adresse.ort`]})]}),(0,P.jsxs)(dc,{flex:1,children:[(0,P.jsx)(fc,{children:`Land`}),(0,P.jsx)(pc,{type:`text`,value:o.adresse.land,onChange:e=>l(`adresse.land`,e.target.value),disabled:i,placeholder:`Schweiz`})]})]})]}),(0,P.jsxs)(cc,{children:[(0,P.jsx)(lc,{children:`Zusätzliche Informationen`}),(0,P.jsxs)(dc,{children:[(0,P.jsx)(fc,{children:`Notizen`}),(0,P.jsx)(hc,{value:o.notizen,onChange:e=>l(`notizen`,e.target.value),disabled:i,placeholder:`Zusätzliche Notizen zum Kunden...`})]})]}),(0,P.jsxs)(gc,{children:[(0,P.jsx)(_c,{type:`button`,onClick:h,disabled:i,children:`Abbrechen`}),(0,P.jsx)(_c,{type:`submit`,variant:`primary`,disabled:i,children:i?`Speichern...`:g?`Aktualisieren`:`Erstellen`})]})]})})};const bc=()=>{let[e,t]=(0,v.useState)({mwstSatz:0,iban:``,name:``,adresse:``,telefon:``,email:``,website:``}),[n,r]=(0,v.useState)(!0),[i,a]=(0,v.useState)(null);return(0,v.useEffect)(()=>{(async()=>{try{r(!0),a(null);let e=await Vs.get();e&&t({mwstSatz:e.mwstSatz===void 0?0:e.mwstSatz,iban:e.iban||``,name:e.name||``,adresse:e.adresse||``,telefon:e.telefon||``,email:e.email||``,website:e.website||``})}catch(e){console.error(`Fehler beim Laden der Firmeneinstellungen:`,e),a(e.message||`Fehler beim Laden der Firmeneinstellungen`)}finally{r(!1)}})()},[]),{settings:e,loading:n,error:i,mwstSatz:e.mwstSatz,iban:e.iban,firmaName:e.name,firmaAdresse:e.adresse,firmaTelefon:e.telefon,firmaEmail:e.email,firmaWebsite:e.website}},xc=e=>{if(!e)return``;try{let t=typeof e==`string`?new Date(e):e;return isNaN(t.getTime())?``:t.toISOString().split(`T`)[0]}catch(e){return console.error(`Fehler beim Formatieren des Datums:`,e),``}},Sc=()=>xc(new Date),Cc=(e,t=new Date)=>{let n=new Date(t);return n.setMonth(n.getMonth()+e),xc(n)};var{Form:wc,FormSection:Tc,FormSectionTitle:Ec,FormRow:Dc,FormGroup:Oc,Label:kc,Input:Ac,Select:jc,TextArea:Mc,ButtonGroup:Nc,Button:Pc,ErrorMessage:Fc}=ci,Ic=({isOpen:e,onClose:t,offerte:n=null,kunden:r=[],onSave:i,onPositionenEdit:a,loading:o=!1})=>{let{mwstSatz:s}=bc(),c=()=>n?{titel:n.titel||``,kundeId:n.kundeId||``,datum:xc(n.datum),gültigBis:xc(n.gültigBis),status:n.status||`entwurf`,zahlungsbedingungen:n.zahlungsbedingungen||`30 Tage netto`,mwstSatz:n.mwstSatz===void 0?s:n.mwstSatz,beschreibung:n.beschreibung||``,notizen:n.notizen||``}:{titel:``,kundeId:``,datum:Sc(),gültigBis:Cc(1),status:`entwurf`,zahlungsbedingungen:`30 Tage netto`,mwstSatz:s,beschreibung:``,notizen:``},{formData:l,errors:u,touched:d,handleChange:f,handleBlur:p,handleSubmit:m,resetForm:h,setFormData:g}=xi(c(),ic);(0,v.useEffect)(()=>{e&&g(c())},[n,e,s]);let _=()=>{i(l)},y=()=>{h(),t()},b=!!n,x=b?`Offerte bearbeiten: ${n?.nummer}`:`Neue Offerte`;return(0,P.jsx)(si,{isOpen:e,onClose:y,title:x,closeOnOverlay:!o,children:(0,P.jsxs)(wc,{onSubmit:e=>{e.preventDefault(),m(_)},children:[(0,P.jsxs)(Tc,{children:[(0,P.jsx)(Ec,{children:`Offerten-Grunddaten`}),(0,P.jsxs)(Oc,{children:[(0,P.jsx)(kc,{required:!0,children:`Titel`}),(0,P.jsx)(Ac,{type:`text`,value:l.titel,onChange:e=>f(`titel`,e.target.value),onBlur:()=>p(`titel`),disabled:o,placeholder:`WordPress Website mit Shop`}),u.titel&&d.titel&&(0,P.jsx)(Fc,{children:u.titel})]}),(0,P.jsx)(Dc,{children:(0,P.jsxs)(Oc,{children:[(0,P.jsx)(kc,{required:!0,children:`Kunde`}),(0,P.jsxs)(jc,{value:l.kundeId,onChange:e=>f(`kundeId`,e.target.value),onBlur:()=>p(`kundeId`),disabled:o,children:[(0,P.jsx)(`option`,{value:``,children:`-- Kunde auswählen --`}),r&&r.map(e=>(0,P.jsx)(`option`,{value:e.id,children:e.firma||e.name},e.id))]}),u.kundeId&&d.kundeId&&(0,P.jsx)(Fc,{children:u.kundeId})]})}),(0,P.jsxs)(Dc,{children:[(0,P.jsxs)(Oc,{children:[(0,P.jsx)(kc,{required:!0,children:`Offertendatum`}),(0,P.jsx)(Ac,{type:`date`,value:l.datum,onChange:e=>f(`datum`,e.target.value),onBlur:()=>p(`datum`),disabled:o}),u.datum&&d.datum&&(0,P.jsx)(Fc,{children:u.datum})]}),(0,P.jsxs)(Oc,{children:[(0,P.jsx)(kc,{required:!0,children:`Gültig bis`}),(0,P.jsx)(Ac,{type:`date`,value:l.gültigBis,onChange:e=>f(`gültigBis`,e.target.value),onBlur:()=>p(`gültigBis`),disabled:o}),u.gültigBis&&d.gültigBis&&(0,P.jsx)(Fc,{children:u.gültigBis})]}),(0,P.jsxs)(Oc,{children:[(0,P.jsx)(kc,{children:`Status`}),(0,P.jsxs)(jc,{value:l.status,onChange:e=>f(`status`,e.target.value),disabled:o,children:[(0,P.jsx)(`option`,{value:`entwurf`,children:`Entwurf`}),(0,P.jsx)(`option`,{value:`versendet`,children:`Versendet`}),(0,P.jsx)(`option`,{value:`angenommen`,children:`Angenommen`}),(0,P.jsx)(`option`,{value:`abgelehnt`,children:`Abgelehnt`})]})]})]})]}),(0,P.jsxs)(Tc,{children:[(0,P.jsx)(Ec,{children:`Konditionen`}),(0,P.jsxs)(Dc,{children:[(0,P.jsxs)(Oc,{flex:2,children:[(0,P.jsx)(kc,{children:`Zahlungsbedingungen`}),(0,P.jsx)(Ac,{type:`text`,value:l.zahlungsbedingungen,onChange:e=>f(`zahlungsbedingungen`,e.target.value),disabled:o,placeholder:`30 Tage netto`})]}),(0,P.jsxs)(Oc,{children:[(0,P.jsx)(kc,{children:`MwSt-Satz (%)`}),(0,P.jsx)(Ac,{type:`number`,step:`0.1`,min:`0`,max:`100`,value:l.mwstSatz,onChange:e=>f(`mwstSatz`,parseFloat(e.target.value)||0),onBlur:()=>p(`mwstSatz`),disabled:o}),u.mwstSatz&&d.mwstSatz&&(0,P.jsx)(Fc,{children:u.mwstSatz})]})]})]}),(0,P.jsxs)(Tc,{children:[(0,P.jsx)(Ec,{children:`Beschreibung & Notizen`}),(0,P.jsxs)(Oc,{children:[(0,P.jsx)(kc,{children:`Beschreibung`}),(0,P.jsx)(Mc,{value:l.beschreibung,onChange:e=>f(`beschreibung`,e.target.value),disabled:o,placeholder:`Kurze Beschreibung der Leistungen...`})]}),(0,P.jsxs)(Oc,{children:[(0,P.jsx)(kc,{children:`Interne Notizen`}),(0,P.jsx)(Mc,{value:l.notizen,onChange:e=>f(`notizen`,e.target.value),disabled:o,placeholder:`Interne Notizen (nicht sichtbar für Kunde)...`})]})]}),b&&(0,P.jsxs)(Tc,{children:[(0,P.jsx)(Ec,{children:`Statistiken & Aktionen`}),(0,P.jsxs)(Dc,{children:[(0,P.jsxs)(Oc,{children:[(0,P.jsx)(kc,{children:`Gesamtbetrag`}),(0,P.jsx)(Ac,{type:`text`,value:`CHF ${n.gesamtBrutto?.toFixed(2)||`0.00`}`,disabled:!0,readOnly:!0})]}),(0,P.jsxs)(Oc,{children:[(0,P.jsx)(kc,{children:`Erstellt am`}),(0,P.jsx)(Ac,{type:`text`,value:n.erstellt?new Date(n.erstellt).toLocaleDateString(`de-CH`):``,disabled:!0,readOnly:!0})]})]}),(0,P.jsx)(Dc,{children:(0,P.jsxs)(Oc,{children:[(0,P.jsx)(kc,{children:`Positionen verwalten`}),(0,P.jsx)(Pc,{type:`button`,onClick:()=>a&&a(n),disabled:o,variant:`secondary`,style:{width:`100%`},children:`📋 Positionen bearbeiten`})]})})]}),(0,P.jsxs)(Nc,{children:[(0,P.jsx)(Pc,{type:`button`,onClick:y,disabled:o,children:`Abbrechen`}),(0,P.jsx)(Pc,{type:`submit`,variant:`primary`,disabled:o,children:o?`Speichern...`:b?`Aktualisieren`:`Erstellen`})]})]})})},{Form:Lc,FormSection:Rc,FormSectionTitle:zc,FormRow:Bc,FormGroup:Vc,Label:Hc,Input:Uc,Select:Wc,TextArea:Gc,ButtonGroup:Kc,Button:qc,ErrorMessage:Jc}=ci,Yc=({isOpen:e,onClose:t,rechnung:n=null,kunden:r=[],onSave:i,onPositionenEdit:a,loading:o=!1})=>{let{mwstSatz:s,iban:c}=bc(),l=()=>n?{titel:n.titel||``,kundeId:n.kundeId||``,datum:xc(n.datum),faelligkeitsdatum:xc(n.faelligkeitsdatum),status:n.status||`entwurf`,zahlungsbedingungen:n.zahlungsbedingungen||`30 Tage netto`,mwstSatz:n.mwstSatz===void 0?s:n.mwstSatz,iban:n.iban||c,qrReferenz:n.qrReferenz||``,beschreibung:n.beschreibung||``,notizen:n.notizen||``}:{titel:``,kundeId:``,datum:Sc(),faelligkeitsdatum:Cc(1),status:`entwurf`,zahlungsbedingungen:`30 Tage netto`,mwstSatz:s,iban:c,qrReferenz:``,beschreibung:``,notizen:``},{formData:u,errors:d,touched:f,handleChange:p,handleBlur:m,handleSubmit:h,resetForm:g,setFormData:_}=xi(l(),ac);(0,v.useEffect)(()=>{e&&_(l())},[n,e,s,c]);let y=()=>{let e={...u,mwstSatz:parseFloat(u.mwstSatz)};i(e)},b=()=>{g(),t()},x=!!n,S=x?`Rechnung bearbeiten: ${n?.nummer}`:`Neue Rechnung`;return(0,P.jsx)(si,{isOpen:e,onClose:b,title:S,closeOnOverlay:!o,children:(0,P.jsxs)(Lc,{onSubmit:e=>{e.preventDefault(),h(y)},children:[(0,P.jsxs)(Rc,{children:[(0,P.jsx)(zc,{children:`Rechnungs-Grunddaten`}),(0,P.jsxs)(Vc,{children:[(0,P.jsx)(Hc,{required:!0,children:`Titel`}),(0,P.jsx)(Uc,{type:`text`,value:u.titel,onChange:e=>p(`titel`,e.target.value),onBlur:()=>m(`titel`),disabled:o,placeholder:`WordPress Website mit Shop`}),d.titel&&f.titel&&(0,P.jsx)(Jc,{children:d.titel})]}),(0,P.jsx)(Bc,{children:(0,P.jsxs)(Vc,{children:[(0,P.jsx)(Hc,{required:!0,children:`Kunde`}),(0,P.jsxs)(Wc,{value:u.kundeId,onChange:e=>p(`kundeId`,e.target.value),onBlur:()=>m(`kundeId`),disabled:o,children:[(0,P.jsx)(`option`,{value:``,children:`-- Kunde auswählen --`}),r&&r.map(e=>(0,P.jsx)(`option`,{value:e.id,children:e.firma||e.name},e.id))]}),d.kundeId&&f.kundeId&&(0,P.jsx)(Jc,{children:d.kundeId})]})}),(0,P.jsxs)(Bc,{children:[(0,P.jsxs)(Vc,{children:[(0,P.jsx)(Hc,{required:!0,children:`Rechnungsdatum`}),(0,P.jsx)(Uc,{type:`date`,value:u.datum,onChange:e=>p(`datum`,e.target.value),onBlur:()=>m(`datum`),disabled:o}),d.datum&&f.datum&&(0,P.jsx)(Jc,{children:d.datum})]}),(0,P.jsxs)(Vc,{children:[(0,P.jsx)(Hc,{required:!0,children:`Fälligkeitsdatum`}),(0,P.jsx)(Uc,{type:`date`,value:u.faelligkeitsdatum,onChange:e=>p(`faelligkeitsdatum`,e.target.value),onBlur:()=>m(`faelligkeitsdatum`),disabled:o}),d.faelligkeitsdatum&&f.faelligkeitsdatum&&(0,P.jsx)(Jc,{children:d.faelligkeitsdatum})]}),(0,P.jsxs)(Vc,{children:[(0,P.jsx)(Hc,{children:`Status`}),(0,P.jsxs)(Wc,{value:u.status,onChange:e=>p(`status`,e.target.value),disabled:o,children:[(0,P.jsx)(`option`,{value:`entwurf`,children:`Entwurf`}),(0,P.jsx)(`option`,{value:`fertig`,children:`Fertig`}),(0,P.jsx)(`option`,{value:`gesendet`,children:`Gesendet`}),(0,P.jsx)(`option`,{value:`bezahlt`,children:`Bezahlt`})]})]})]})]}),(0,P.jsxs)(Rc,{children:[(0,P.jsx)(zc,{children:`Zahlungsinformationen`}),(0,P.jsxs)(Vc,{children:[(0,P.jsx)(Hc,{required:!0,children:`IBAN`}),(0,P.jsx)(Uc,{type:`text`,value:u.iban,onChange:e=>p(`iban`,e.target.value),onBlur:()=>m(`iban`),disabled:o,placeholder:`CH93 0076 2011 6238 5295 7`}),d.iban&&f.iban&&(0,P.jsx)(Jc,{children:d.iban})]}),x&&u.qrReferenz&&(0,P.jsxs)(Vc,{children:[(0,P.jsx)(Hc,{children:`QR-Referenz`}),(0,P.jsx)(Uc,{type:`text`,value:u.qrReferenz,disabled:!0,readOnly:!0})]}),(0,P.jsxs)(Bc,{children:[(0,P.jsxs)(Vc,{flex:2,children:[(0,P.jsx)(Hc,{children:`Zahlungsbedingungen`}),(0,P.jsx)(Uc,{type:`text`,value:u.zahlungsbedingungen,onChange:e=>p(`zahlungsbedingungen`,e.target.value),disabled:o,placeholder:`30 Tage netto`})]}),(0,P.jsxs)(Vc,{children:[(0,P.jsx)(Hc,{children:`MwSt-Satz (%)`}),(0,P.jsx)(Uc,{type:`number`,step:`0.1`,min:`0`,max:`100`,value:u.mwstSatz,onChange:e=>p(`mwstSatz`,parseFloat(e.target.value)||0),onBlur:()=>m(`mwstSatz`),disabled:o}),d.mwstSatz&&f.mwstSatz&&(0,P.jsx)(Jc,{children:d.mwstSatz})]})]})]}),(0,P.jsxs)(Rc,{children:[(0,P.jsx)(zc,{children:`Beschreibung & Notizen`}),(0,P.jsxs)(Vc,{children:[(0,P.jsx)(Hc,{children:`Beschreibung`}),(0,P.jsx)(Gc,{value:u.beschreibung,onChange:e=>p(`beschreibung`,e.target.value),disabled:o,placeholder:`Kurze Beschreibung der Leistungen...`})]}),(0,P.jsxs)(Vc,{children:[(0,P.jsx)(Hc,{children:`Interne Notizen`}),(0,P.jsx)(Gc,{value:u.notizen,onChange:e=>p(`notizen`,e.target.value),disabled:o,placeholder:`Interne Notizen (nicht sichtbar für Kunde)...`})]})]}),x&&(0,P.jsxs)(Rc,{children:[(0,P.jsx)(zc,{children:`Statistiken & Aktionen`}),(0,P.jsxs)(Bc,{children:[(0,P.jsxs)(Vc,{children:[(0,P.jsx)(Hc,{children:`Gesamtbetrag`}),(0,P.jsx)(Uc,{type:`text`,value:`CHF ${n.gesamtBrutto?.toFixed(2)||`0.00`}`,disabled:!0,readOnly:!0})]}),(0,P.jsxs)(Vc,{children:[(0,P.jsx)(Hc,{children:`Erstellt am`}),(0,P.jsx)(Uc,{type:`text`,value:n.datum?new Date(n.datum).toLocaleDateString(`de-CH`):``,disabled:!0,readOnly:!0})]})]}),(0,P.jsx)(Bc,{children:(0,P.jsxs)(Vc,{children:[(0,P.jsx)(Hc,{children:`Positionen verwalten`}),(0,P.jsx)(qc,{type:`button`,onClick:()=>a&&a(n),disabled:o,variant:`secondary`,style:{width:`100%`},children:`📋 Positionen bearbeiten`})]})})]}),(0,P.jsxs)(Kc,{children:[(0,P.jsx)(qc,{type:`button`,onClick:b,disabled:o,children:`Abbrechen`}),(0,P.jsx)(qc,{type:`submit`,variant:`primary`,disabled:o,children:o?`Speichern...`:x?`Aktualisieren`:`Erstellen`})]})]})})},Xc=s({CardActions:()=>ll,CardField:()=>ul,CardFieldLabel:()=>dl,CardFieldValue:()=>fl,CardHeader:()=>sl,CardTitle:()=>cl,EmptyState:()=>hl,LoadingState:()=>gl,MobileCard:()=>ol,MobileList:()=>al,MobileTotalCard:()=>pl,Table:()=>W,TableBody:()=>$c,TableContainer:()=>_l,TableHead:()=>Zc,TableInput:()=>rl,TableSelect:()=>il,Td:()=>tl,Th:()=>Qc,TotalRow:()=>nl,TotalRowMobile:()=>ml,Tr:()=>el});const W=M.table`
  width: 100%;
  border-collapse: collapse;
  margin: ${N.spacing.md} 0;
  font-family: ${N.fonts.mono};
  font-size: ${N.fontSizes.sm};
  
  /* Hide table on mobile */
  @media (max-width: 768px) {
    display: ${e=>e.hideMobile?`none`:`table`};
  }
`,Zc=M.thead`
  background: ${N.colors.bgSecondary};
`,Qc=M.th`
  background: ${N.colors.bgSecondary};
  color: ${N.colors.accentCyan};
  padding: ${N.spacing.sm};
  text-align: ${e=>e.align||`left`};
  border: 1px solid ${N.colors.borderColor};
  font-size: ${N.fontSizes.xs};
  text-transform: uppercase;
  letter-spacing: ${N.letterSpacing.wide};
  font-weight: ${N.fontWeights.semibold};
  white-space: nowrap;
  
  @media (max-width: 768px) {
    padding: ${N.spacing.xs} ${N.spacing.sm};
    font-size: ${N.fontSizes.xs};
  }
`,$c=M.tbody`
  /* Styling via Rows */
`,el=M.tr`
  transition: background 0.2s ease;
  
  &:hover:not(.editing) {
    background: ${N.colors.bgSecondary};
    
    td {
      color: ${N.colors.textPrimary};
    }
  }
  
  &.editing {
    background: ${N.colors.accentBlue}22;
    
    td {
      color: ${N.colors.textPrimary};
    }
  }
  
  &.clickable {
    cursor: pointer;
  }
`,tl=M.td`
  padding: ${N.spacing.sm};
  border: 1px solid ${N.colors.borderColor};
  background: ${e=>e.background||N.colors.bgTertiary};
  color: ${N.colors.textPrimary};
  text-align: ${e=>e.align||`left`};
  
  &.editing {
    padding: 2px;
  }
  
  &.numeric {
    text-align: right;
    font-family: ${N.fonts.mono};
    color: ${N.colors.textPrimary};
    font-weight: ${N.fontWeights.medium};
  }
  
  &.actions {
    text-align: center;
    width: ${e=>e.width||`120px`};
  }
  
  @media (max-width: 768px) {
    padding: ${N.spacing.xs};
    font-size: ${N.fontSizes.xs};
  }
`,nl=M(el)`
  background: ${N.colors.bgSecondary};
  font-weight: bold;
  
  td {
    border-top: 2px solid ${N.colors.accentGreen};
    color: ${N.colors.textPrimary};
    font-weight: ${N.fontWeights.bold};
  }
`,rl=M.input`
  width: 100%;
  padding: ${N.spacing.xs};
  font-size: ${N.fontSizes.sm};
  margin: 0;
  background: ${N.colors.bgPrimary};
  color: ${N.colors.textPrimary};
  border: 1px solid ${N.colors.accentBlue};
  border-radius: ${N.borderRadius.base};
  font-family: ${N.fonts.mono};
  
  &:focus {
    background: ${N.colors.bgPrimary};
    border-color: ${N.colors.accentGreen};
    color: ${N.colors.textPrimary};
    outline: none;
  }
`,il=M.select`
  width: 100%;
  padding: ${N.spacing.xs};
  font-size: ${N.fontSizes.sm};
  margin: 0;
  background: ${N.colors.bgPrimary};
  color: ${N.colors.textPrimary};
  border: 1px solid ${N.colors.accentBlue};
  border-radius: ${N.borderRadius.base};
  font-family: ${N.fonts.mono};
  
  &:focus {
    background: ${N.colors.bgPrimary};
    border-color: ${N.colors.accentGreen};
    outline: none;
  }
`,al=M.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    margin: ${N.spacing.md} 0;
  }
`,ol=M.div`
  background: ${N.colors.bgTertiary};
  border: 1px solid ${N.colors.borderColor};
  border-radius: ${N.borderRadius.base};
  margin-bottom: ${N.spacing.md};
  padding: ${N.spacing.md};
  transition: all 0.2s ease;
  
  &.editing {
    border-color: ${N.colors.accentBlue};
    background: ${N.colors.accentBlue}22;
  }
  
  &.clickable {
    cursor: pointer;
    
    &:active {
      transform: scale(0.98);
      background: ${N.colors.bgSecondary};
    }
  }
`,sl=M.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${N.spacing.sm};
  padding-bottom: ${N.spacing.sm};
  border-bottom: 1px solid ${N.colors.borderColor};
`,cl=M.span`
  font-weight: bold;
  color: ${N.colors.accentCyan};
  font-size: ${N.fontSizes.base};
`,ll=M.div`
  display: flex;
  gap: ${N.spacing.xs};
  flex-wrap: wrap;
`,ul=M.div`
  margin-bottom: ${N.spacing.sm};
`,dl=M.div`
  font-size: ${N.fontSizes.xs};
  color: ${N.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: ${N.letterSpacing.wide};
  margin-bottom: ${N.spacing.xs};
`,fl=M.div`
  color: ${N.colors.textPrimary};
  font-size: ${N.fontSizes.sm};
  
  &.numeric {
    font-family: ${N.fonts.mono};
    font-weight: ${N.fontWeights.medium};
  }
  
  &.highlight {
    color: ${N.colors.accentCyan};
    font-weight: ${N.fontWeights.semibold};
  }
`,pl=M(ol)`
  background: ${N.colors.bgSecondary};
  border: 2px solid ${N.colors.accentGreen};
  margin-top: ${N.spacing.lg};
`,ml=M.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${N.spacing.sm};
  font-weight: bold;
  color: ${N.colors.textPrimary};
  
  &:last-child {
    margin-bottom: 0;
    padding-top: ${N.spacing.sm};
    border-top: 1px solid ${N.colors.accentYellow};
    color: ${N.colors.accentYellow};
  }
`,hl=M.div`
  text-align: center;
  padding: ${N.spacing.xl} ${N.spacing.lg};
  color: ${N.colors.textSecondary};
  font-style: italic;
  
  @media (max-width: 768px) {
    padding: ${N.spacing.lg} ${N.spacing.md};
  }
`,gl=M(hl)`
  color: ${N.colors.accentCyan};
`,_l=M.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: auto;
  max-height: ${e=>e.maxHeight||`none`};
  
  /* Custom Scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${N.colors.bgTertiary};
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${N.colors.borderColor};
    border-radius: ${N.borderRadius.base};
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${N.colors.accentBlue};
  }
`;var vl={async getAll(){try{let e=await U.get(`/offerten`);return e.data.success?e.data.data:[]}catch(e){throw console.error(`Fehler beim Laden der Offerten:`,e),e}},async getById(e){try{let t=await U.get(`/offerten/${e}`);return t.data.success?t.data.data:null}catch(t){throw console.error(`Fehler beim Laden der Offerte ${e}:`,t),t}},async create(e){try{let t=await U.post(`/offerten`,e);return t.data.success?t.data.data:null}catch(e){throw console.error(`Fehler beim Erstellen der Offerte:`,e),e}},async update(e,t){try{return(await U.put(`/offerten/${e}`,t)).data}catch(t){throw console.error(`Fehler beim Aktualisieren der Offerte ${e}:`,t),t}},async delete(e){try{return(await U.delete(`/offerten/${e}`)).data}catch(t){throw console.error(`Fehler beim Löschen der Offerte ${e}:`,t),t}},async getPositionen(e){try{return(await U.get(`/offerten/${e}/positionen`)).data}catch(t){throw console.error(`Fehler beim Laden der Positionen für Offerte ${e}:`,t),t}},async addPosition(e,t){try{return(await U.post(`/offerten/${e}/positionen`,t)).data}catch(t){throw console.error(`Fehler beim Hinzufügen der Position zur Offerte ${e}:`,t),t}},async updatePosition(e,t,n){try{return(await U.put(`/offerten/${e}/positionen/${t}`,n)).data}catch(e){throw console.error(`Fehler beim Aktualisieren der Position ${t}:`,e),e}},async deletePosition(e,t){try{return(await U.delete(`/offerten/${e}/positionen/${t}`)).data}catch(e){throw console.error(`Fehler beim Löschen der Position ${t}:`,e),e}},async exportToPdf(e){try{let t=await U.get(`/offerten/${e}/pdf`,{responseType:`blob`}),n=new Blob([t.data],{type:`application/pdf`}),r=window.URL.createObjectURL(n),i=document.createElement(`a`);return i.href=r,i.download=`offerte_${e}.pdf`,document.body.appendChild(i),i.click(),document.body.removeChild(i),window.URL.revokeObjectURL(r),{success:!0,message:`PDF wurde heruntergeladen`}}catch(t){throw console.error(`Fehler beim PDF-Export der Offerte ${e}:`,t),t}}},yl={async getAll(){try{let e=await U.get(`/rechnungen`);return e.data.success?e.data.data:[]}catch(e){throw console.error(`Fehler beim Laden der Rechnungen:`,e),e}},async getById(e){try{let t=await U.get(`/rechnungen/${e}`);return t.data.success?t.data.data:null}catch(t){throw console.error(`Fehler beim Laden der Rechnung ${e}:`,t),t}},async create(e){try{let t=await U.post(`/rechnungen`,e);return t.data.success?t.data.data:null}catch(e){throw console.error(`Fehler beim Erstellen der Rechnung:`,e),e}},async createFromOfferte(e){try{let t=await U.post(`/rechnungen/from-offerte/${e}`);return t.data.success?t.data.data:null}catch(e){throw console.error(`Fehler beim Erstellen der Rechnung aus Offerte:`,e),e}},async update(e,t){try{return(await U.put(`/rechnungen/${e}`,t)).data}catch(t){throw console.error(`Fehler beim Aktualisieren der Rechnung ${e}:`,t),t}},async delete(e){try{return(await U.delete(`/rechnungen/${e}`)).data}catch(t){throw console.error(`Fehler beim Löschen der Rechnung ${e}:`,t),t}},async getPositionen(e){try{return(await U.get(`/rechnungen/${e}/positionen`)).data}catch(t){throw console.error(`Fehler beim Laden der Positionen für Rechnung ${e}:`,t),t}},async addPosition(e,t){try{return(await U.post(`/rechnungen/${e}/positionen`,t)).data}catch(t){throw console.error(`Fehler beim Hinzufügen der Position zur Rechnung ${e}:`,t),t}},async updatePosition(e,t,n){try{return(await U.put(`/rechnungen/${e}/positionen/${t}`,n)).data}catch(e){throw console.error(`Fehler beim Aktualisieren der Position ${t}:`,e),e}},async deletePosition(e,t){try{return(await U.delete(`/rechnungen/${e}/positionen/${t}`)).data}catch(e){throw console.error(`Fehler beim Löschen der Position ${t}:`,e),e}},async exportToPdf(e){try{let t=await U.get(`/rechnungen/${e}/pdf`,{responseType:`blob`}),n=t.headers[`content-disposition`],r=`rechnung_${e}.pdf`;if(n){let e=n.match(/filename="?(.+)"?/);e&&(r=e[1])}let i=new Blob([t.data],{type:`application/pdf`}),a=window.URL.createObjectURL(i),o=document.createElement(`a`);return o.href=a,o.download=r,document.body.appendChild(o),o.click(),document.body.removeChild(o),window.URL.revokeObjectURL(a),{success:!0,filename:r}}catch(t){throw console.error(`Fehler beim PDF-Export der Rechnung ${e}:`,t),t}}},{Form:bl,FormGroup:xl,Label:Sl,Input:Cl,Select:wl,ButtonGroup:Tl,Button:El}=ci,{Table:Dl,Th:Ol,Td:G,Tr:kl,TotalRow:Al,MobileCard:jl,CardHeader:Ml,CardField:Nl,EmptyState:Pl}=Xc,Fl=({isOpen:e,onClose:t,offerte:n,onSave:r,onEditEntity:i,loading:a=!1})=>{let[o,s]=(0,v.useState)([]),[c,l]=(0,v.useState)(null),[u,d]=(0,v.useState)({}),[f,p]=(0,v.useState)(!1),m=[`Std`,`Tag`,`Stk`,`Psch`,`Monat`],h=[`Beratung`,`Entwicklung`,`Design`,`Testing`,`Wartung`,`Hosting`,`E-Commerce`,`Sonstiges`],{formData:g,setFormData:_,resetForm:y}=xi((()=>({beschreibung:``,menge:1,einheit:`Std`,einzelpreis:0,rabatt:0,kategorie:`Entwicklung`}))(),oc);(0,v.useEffect)(()=>{e&&n&&b()},[e,n]);let b=async()=>{if(n)try{let e=await(n.nummer?.startsWith(`REC-`)?yl:vl).getPositionen(n.id),t=e.success?e.data:e;s(Array.isArray(t)?t:[])}catch(e){console.error(`Fehler beim Laden der Positionen:`,e),s([])}},x=(e,t,n)=>{let r=e*t,i=r*(n/100);return r-i},S=e=>{l(e.id),d({beschreibung:e.beschreibung,menge:e.menge,einheit:e.einheit,einzelpreis:e.einzelpreis,rabatt:e.rabatt,kategorie:e.kategorie})},C=async()=>{try{let e=x(u.menge,u.einzelpreis,u.rabatt),t={...u,gesamtpreis:e};await(n.nummer?.startsWith(`REC-`)?yl:vl).updatePosition(n.id,c,t),s(e=>e.map(e=>e.id===c?{...e,...t}:e)),l(null),d({})}catch(e){console.error(`Fehler beim Speichern der Position:`,e),alert(`Fehler beim Speichern der Position: `+e.message)}},w=()=>{l(null),d({})},ee=async e=>{if(confirm(`Position wirklich löschen?`))try{await(n.nummer?.startsWith(`REC-`)?yl:vl).deletePosition(n.id,e),s(t=>t.filter(t=>t.id!==e))}catch(e){console.error(`Fehler beim Löschen der Position:`,e),alert(`Fehler beim Löschen der Position: `+e.message)}},te=async()=>{try{let e=x(g.menge,g.einzelpreis,g.rabatt),t={position:o.length+1,...g,gesamtpreis:e},r=await(n.nummer?.startsWith(`REC-`)?yl:vl).addPosition(n.id,t),i=r.success?r.data:r;s(e=>[...e,i]),y(),p(!1)}catch(e){console.error(`Fehler beim Hinzufügen der Position:`,e),alert(`Fehler beim Hinzufügen der Position: `+e.message)}},ne=(e,t,n=`text`)=>c===e.id?(0,P.jsx)(G,{editing:!0,children:(0,P.jsx)(Cl,{type:n,value:u[t]||``,onChange:e=>d(r=>({...r,[t]:n===`number`?parseFloat(e.target.value)||0:e.target.value})),style:{fontSize:N.fontSizes.sm,padding:N.spacing.xs,margin:0}})}):(0,P.jsx)(G,{numeric:n===`number`,children:n===`number`&&typeof e[t]==`number`?e[t].toFixed(2):e[t]}),T=(e,t,n)=>c===e.id?(0,P.jsx)(G,{editing:!0,children:(0,P.jsx)(wl,{value:u[t]||e[t],onChange:e=>d(n=>({...n,[t]:e.target.value})),style:{fontSize:N.fontSizes.sm,padding:N.spacing.xs},children:n.map(e=>(0,P.jsx)(`option`,{value:e,children:e},e))})}):(0,P.jsx)(G,{children:e[t]}),re=o.reduce((e,t)=>e+t.gesamtpreis,0),ie=re*((n?.mwstSatz===void 0?7.7:n.mwstSatz)/100),ae=re+ie;return n?(0,P.jsx)(si,{isOpen:e,onClose:t,title:`Positionen: ${n.titel} (${n.nummer})`,closeOnOverlay:!a,wide:!0,children:(0,P.jsxs)(`div`,{children:[(0,P.jsxs)(Dl,{children:[(0,P.jsx)(`thead`,{children:(0,P.jsxs)(`tr`,{children:[(0,P.jsx)(Ol,{children:`Pos.`}),(0,P.jsx)(Ol,{children:`Beschreibung`}),(0,P.jsx)(Ol,{children:`Menge`}),(0,P.jsx)(Ol,{children:`Einheit`}),(0,P.jsx)(Ol,{children:`Einzelpreis`}),(0,P.jsx)(Ol,{children:`Rabatt %`}),(0,P.jsx)(Ol,{children:`Gesamtpreis`}),(0,P.jsx)(Ol,{children:`Kategorie`}),(0,P.jsx)(Ol,{children:`Aktionen`})]})}),(0,P.jsxs)(`tbody`,{children:[o.map(e=>(0,P.jsxs)(kl,{editing:c===e.id,children:[(0,P.jsx)(G,{children:e.position}),ne(e,`beschreibung`),ne(e,`menge`,`number`),T(e,`einheit`,m),ne(e,`einzelpreis`,`number`),ne(e,`rabatt`,`number`),(0,P.jsxs)(G,{numeric:!0,children:[`CHF `,e.gesamtpreis.toFixed(2)]}),T(e,`kategorie`,h),(0,P.jsx)(G,{actions:!0,children:c===e.id?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)($n,{variant:`success`,onClick:C,children:`✓`}),(0,P.jsx)($n,{onClick:w,children:`✗`})]}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)($n,{onClick:()=>S(e),children:`✎`}),(0,P.jsx)($n,{variant:`danger`,onClick:()=>ee(e.id),children:`🗑`})]})})]},e.id)),f&&(0,P.jsxs)(kl,{editing:!0,children:[(0,P.jsx)(G,{children:o.length+1}),(0,P.jsx)(G,{editing:!0,children:(0,P.jsx)(Cl,{value:g.beschreibung,onChange:e=>_(t=>({...t,beschreibung:e.target.value})),placeholder:`Beschreibung...`,style:{fontSize:N.fontSizes.sm,padding:N.spacing.xs,margin:0}})}),(0,P.jsx)(G,{editing:!0,children:(0,P.jsx)(Cl,{type:`number`,value:g.menge,onChange:e=>_(t=>({...t,menge:parseFloat(e.target.value)||0})),style:{fontSize:N.fontSizes.sm,padding:N.spacing.xs,margin:0}})}),(0,P.jsx)(G,{editing:!0,children:(0,P.jsx)(wl,{value:g.einheit,onChange:e=>_(t=>({...t,einheit:e.target.value})),style:{fontSize:N.fontSizes.sm,padding:N.spacing.xs},children:m.map(e=>(0,P.jsx)(`option`,{value:e,children:e},e))})}),(0,P.jsx)(G,{editing:!0,children:(0,P.jsx)(Cl,{type:`number`,step:`0.01`,value:g.einzelpreis,onChange:e=>_(t=>({...t,einzelpreis:parseFloat(e.target.value)||0})),style:{fontSize:N.fontSizes.sm,padding:N.spacing.xs,margin:0}})}),(0,P.jsx)(G,{editing:!0,children:(0,P.jsx)(Cl,{type:`number`,step:`0.1`,value:g.rabatt,onChange:e=>_(t=>({...t,rabatt:parseFloat(e.target.value)||0})),style:{fontSize:N.fontSizes.sm,padding:N.spacing.xs,margin:0}})}),(0,P.jsxs)(G,{numeric:!0,children:[`CHF `,x(g.menge,g.einzelpreis,g.rabatt).toFixed(2)]}),(0,P.jsx)(G,{editing:!0,children:(0,P.jsx)(wl,{value:g.kategorie,onChange:e=>_(t=>({...t,kategorie:e.target.value})),style:{fontSize:N.fontSizes.sm,padding:N.spacing.xs},children:h.map(e=>(0,P.jsx)(`option`,{value:e,children:e},e))})}),(0,P.jsxs)(G,{actions:!0,children:[(0,P.jsx)($n,{variant:`success`,onClick:te,children:`✓`}),(0,P.jsx)($n,{onClick:()=>p(!1),children:`✗`})]})]}),(0,P.jsxs)(Al,{children:[(0,P.jsx)(G,{colSpan:`6`,style:{textAlign:`right`,fontWeight:`bold`},children:`Subtotal:`}),(0,P.jsxs)(G,{numeric:!0,style:{fontWeight:`bold`,color:N.colors.accentGreen},children:[`CHF `,re.toFixed(2)]}),(0,P.jsx)(G,{colSpan:`2`})]}),(0,P.jsxs)(Al,{children:[(0,P.jsxs)(G,{colSpan:`6`,style:{textAlign:`right`,fontWeight:`bold`},children:[`MwSt (`,n.mwstSatz===void 0?7.7:n.mwstSatz,`%):`]}),(0,P.jsxs)(G,{numeric:!0,style:{fontWeight:`bold`,color:N.colors.accentYellow},children:[`CHF `,ie.toFixed(2)]}),(0,P.jsx)(G,{colSpan:`2`})]}),(0,P.jsxs)(Al,{children:[(0,P.jsx)(G,{colSpan:`6`,style:{textAlign:`right`,fontWeight:`bold`},children:`Gesamtbetrag:`}),(0,P.jsxs)(G,{numeric:!0,style:{fontWeight:`bold`,color:N.colors.accentBlue,fontSize:N.fontSizes.base},children:[`CHF `,ae.toFixed(2)]}),(0,P.jsx)(G,{colSpan:`2`})]})]})]}),(0,P.jsxs)(`div`,{style:{display:`none`},className:`mobile-only`,children:[o.map(e=>(0,P.jsxs)(jl,{editing:c===e.id,children:[(0,P.jsxs)(Ml,{children:[(0,P.jsxs)(`span`,{style:{fontWeight:`bold`,color:N.colors.accentCyan},children:[`Position `,e.position]}),(0,P.jsx)(`div`,{style:{display:`flex`,gap:N.spacing.xs},children:c===e.id?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)($n,{variant:`success`,onClick:C,children:`✓`}),(0,P.jsx)($n,{onClick:w,children:`✗`})]}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)($n,{onClick:()=>S(e),children:`✎`}),(0,P.jsx)($n,{variant:`danger`,onClick:()=>ee(e.id),children:`🗑`})]})})]}),(0,P.jsx)(Nl,{label:`Beschreibung`,value:e.beschreibung}),(0,P.jsx)(Nl,{label:`Menge`,value:`${e.menge} ${e.einheit}`}),(0,P.jsx)(Nl,{label:`Einzelpreis`,value:`CHF ${e.einzelpreis.toFixed(2)}`}),(0,P.jsx)(Nl,{label:`Rabatt`,value:`${e.rabatt}%`}),(0,P.jsx)(Nl,{label:`Kategorie`,value:e.kategorie}),(0,P.jsx)(Nl,{label:`Gesamtpreis`,value:`CHF ${e.gesamtpreis.toFixed(2)}`,highlight:!0})]},e.id)),(0,P.jsxs)(`div`,{style:{background:N.colors.bgSecondary,border:`2px solid ${N.colors.accentGreen}`,borderRadius:N.borderRadius.base,padding:N.spacing.md,marginTop:N.spacing.lg},children:[(0,P.jsx)(Nl,{label:`Subtotal`,value:`CHF ${re.toFixed(2)}`}),(0,P.jsx)(Nl,{label:`MwSt (${n.mwstSatz===void 0?7.7:n.mwstSatz}%)`,value:`CHF ${ie.toFixed(2)}`}),(0,P.jsx)(Nl,{label:`Gesamtbetrag`,value:`CHF ${ae.toFixed(2)}`,highlight:!0})]})]}),(0,P.jsxs)(Tl,{children:[(0,P.jsx)(El,{onClick:()=>p(!0),disabled:f||c,variant:`success`,children:`+ Neue Position`}),n&&i&&(0,P.jsxs)(El,{onClick:()=>{t(),i(n)},variant:`secondary`,children:[`📝 `,n.nummer?.startsWith(`REC-`)?`Rechnung`:`Offerte`,` bearbeiten`]})]}),(0,P.jsxs)(Tl,{children:[(0,P.jsx)(El,{onClick:t,children:`Schließen`}),(0,P.jsx)(El,{variant:`primary`,onClick:()=>r&&r({positionen:o,subtotal:re,mwstBetrag:ie,gesamtBrutto:ae}),disabled:a||c||f,children:a?`Speichern...`:`Änderungen speichern`})]})]})}):null},Il=M.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${e=>e.theme.colors.bgSecondary};
  border: 2px solid ${e=>e.theme.colors.accentGreen};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>e.theme.spacing.sm};
  z-index: 1000;
  min-width: 300px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`,Ll=M.div`
  color: ${e=>e.theme.colors.accentGreen};
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: ${e=>e.theme.spacing.sm};
  padding-bottom: ${e=>e.theme.spacing.xs};
  border-bottom: 1px solid ${e=>e.theme.colors.borderColor};
`,Rl=M.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,zl=M.button`
  background: ${e=>e.$selected?e.theme.colors.accentGreen:e.theme.colors.bgTertiary};
  color: ${e=>e.$selected?e.theme.colors.bgPrimary:e.theme.colors.textPrimary};
  border: 1px solid ${e=>e.$selected?e.theme.colors.accentGreen:e.theme.colors.borderColor};
  padding: ${e=>e.theme.spacing.sm};
  font-family: ${e=>e.theme.fonts.mono};
  font-size: 1rem;
  cursor: pointer;
  text-align: left;
  border-radius: ${e=>e.theme.borderRadius.sm};
  transition: all 0.2s;

  &:hover {
    background: ${e=>e.$selected?e.theme.colors.accentGreen:e.theme.colors.borderColor};
  }

  &:focus {
    outline: none;
  }
`,Bl=M.div`
  margin-top: ${e=>e.theme.spacing.sm};
  padding-top: ${e=>e.theme.spacing.xs};
  border-top: 1px solid ${e=>e.theme.colors.borderColor};
  font-size: 0.875rem;
  color: ${e=>e.theme.colors.textSecondary};
  text-align: center;
`,Vl=M.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`,Hl={offers:[{value:`entwurf`,label:`Entwurf`},{value:`versendet`,label:`Versendet`},{value:`angenommen`,label:`Angenommen`},{value:`abgelehnt`,label:`Abgelehnt`}],invoices:[{value:`entwurf`,label:`Entwurf`},{value:`fertig`,label:`Fertig`},{value:`gesendet`,label:`Gesendet`},{value:`bezahlt`,label:`Bezahlt`}]},Ul=({currentStatus:e,onStatusChange:t,onClose:n,entityType:r=`offers`})=>{let i=Hl[r]||Hl.offers,[a,o]=(0,v.useState)(i.findIndex(t=>t.value===e)),s=(0,v.useRef)(null);return(0,v.useEffect)(()=>{let e=e=>{switch(e.key){case`ArrowUp`:e.preventDefault(),o(e=>Math.max(0,e-1));break;case`ArrowDown`:e.preventDefault(),o(e=>Math.min(i.length-1,e+1));break;case`Enter`:e.preventDefault(),t(i[a].value);break;case`Escape`:e.preventDefault(),n();break;default:break}};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},[a,t,n,i]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Vl,{onClick:n}),(0,P.jsxs)(Il,{ref:s,children:[(0,P.jsx)(Ll,{children:`Status wechseln`}),(0,P.jsx)(Rl,{children:i.map((e,n)=>(0,P.jsx)(zl,{$selected:n===a,onClick:()=>t(e.value),children:e.label},e.value))}),(0,P.jsx)(Bl,{children:`↑↓ Navigation | Enter=Auswählen | Esc=Abbrechen`})]})]})},Wl={async getAll(){try{let e=await U.get(`/kunden`);return e.data.success?e.data.data:[]}catch(e){throw console.error(`Fehler beim Laden der Kunden:`,e),e}},async getById(e){try{let t=await U.get(`/kunden/${e}`);return t.data.success?t.data.data:null}catch(t){throw console.error(`Fehler beim Laden des Kunden ${e}:`,t),t}},async create(e){try{let t=await U.post(`/kunden`,e);return t.data.success?t.data.data:null}catch(e){throw console.error(`Fehler beim Erstellen des Kunden:`,e),e}},async update(e,t){try{return(await U.put(`/kunden/${e}`,t)).data}catch(t){throw console.error(`Fehler beim Aktualisieren des Kunden ${e}:`,t),t}},async delete(e){try{return(await U.delete(`/kunden/${e}`)).data}catch(t){throw console.error(`Fehler beim Löschen des Kunden ${e}:`,t),t}}},Gl=()=>{let[e,t]=(0,v.useState)([]),[n,r]=(0,v.useState)(!1),[i,a]=(0,v.useState)(null),o=async()=>{r(!0),a(null);try{let e=await Wl.getAll();t(Array.isArray(e)?e:[])}catch(e){a(e.message),console.error(`Fehler beim Laden der Kunden:`,e),t([])}finally{r(!1)}};return(0,v.useEffect)(()=>{o()},[]),{kunden:Array.isArray(e)?e:[],loading:n,error:i,loadKunden:o,refreshKunden:o,createKunde:async e=>{r(!0),a(null);try{let n=await Wl.create(e);return t(e=>[...e,n]),n}catch(e){throw a(e.message),e}finally{r(!1)}},updateKunde:async(e,n)=>{r(!0),a(null);try{let r=await Wl.update(e,n);return t(t=>t.map(t=>t.id===e?r:t)),r}catch(e){throw a(e.message),e}finally{r(!1)}},deleteKunde:async e=>{r(!0),a(null);try{await Wl.delete(e),t(t=>t.filter(t=>t.id!==e))}catch(e){throw a(e.message),e}finally{r(!1)}}}},Kl=()=>{let[e,t]=(0,v.useState)([]),[n,r]=(0,v.useState)(!1),[i,a]=(0,v.useState)(null),o=async()=>{r(!0),a(null);try{let e=await vl.getAll();t(Array.isArray(e)?e:[])}catch(e){a(e.message),console.error(`Fehler beim Laden der Offerten:`,e),t([])}finally{r(!1)}};return(0,v.useEffect)(()=>{o()},[]),{offerten:Array.isArray(e)?e:[],loading:n,error:i,loadOfferten:o,refreshOfferten:o,createOfferte:async e=>{r(!0),a(null);try{let n=await vl.create(e);return t(e=>[...e,n]),n}catch(e){throw a(e.message),e}finally{r(!1)}},updateOfferte:async(e,n)=>{r(!0),a(null);try{let r=await vl.update(e,n);return t(t=>t.map(t=>t.id===e?r:t)),r}catch(e){throw a(e.message),e}finally{r(!1)}},deleteOfferte:async e=>{r(!0),a(null);try{await vl.delete(e),t(t=>t.filter(t=>t.id!==e))}catch(e){throw a(e.message),e}finally{r(!1)}}}},ql=()=>{let[e,t]=(0,v.useState)([]),[n,r]=(0,v.useState)(!0),[i,a]=(0,v.useState)(null),o=(0,v.useCallback)(async()=>{try{r(!0),a(null);let e=await yl.getAll();t(Array.isArray(e)?e:[])}catch(e){console.error(`Fehler beim Laden der Rechnungen:`,e),a(e.message||`Fehler beim Laden der Rechnungen`),t([])}finally{r(!1)}},[]);(0,v.useEffect)(()=>{o()},[o]);let s=(0,v.useCallback)(()=>o(),[o]);return{rechnungen:e,loading:n,error:i,refreshRechnungen:s}},Jl=Vn`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    
    /* Larger font on mobile for better touch targets */
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  html, body {
    margin: 0 !important;
    padding: 0 !important;
    font-family: ${N.fonts.mono};
    background: ${N.colors.bgPrimary};
    color: ${N.colors.textPrimary};
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    
    /* Mobile Safari viewport fix */
    @supports (-webkit-touch-callout: none) {
      height: -webkit-fill-available;
    }
    
    /* Android Chrome viewport fix */
    @media (max-width: 768px) {
      height: 100dvh; /* Dynamic viewport height */
    }
  }

  #root {
    margin: 0 !important;
    padding: 0 !important;
    width: 100vw;
    height: 100vh;
    
    /* Mobile Safari viewport fix */
    @supports (-webkit-touch-callout: none) {
      height: -webkit-fill-available;
    }
    
    /* Android Chrome viewport fix */
    @media (max-width: 768px) {
      height: 100dvh; /* Dynamic viewport height */
    }
  }

  /* Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${N.colors.bgTertiary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${N.colors.borderColor};
    border-radius: ${N.borderRadius.base};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${N.colors.accentBlue};
  }

  /* Firefox Scrollbar */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${N.colors.borderColor} ${N.colors.bgTertiary};
  }

  /* Mobile Touch Optimizations & Desktop Refinements */
  @media (max-width: 768px) {
    /* Enhanced button and input styling for mobile */
    button, input[type="button"], input[type="submit"], input[type="reset"] {
      min-height: 52px !important;
      padding: 16px 20px !important;
      font-size: 18px !important;
      border-radius: 8px !important;
      min-width: 120px !important;
      margin: 8px 4px !important;
      cursor: pointer !important;
      transition: all 0.2s ease !important;
      box-sizing: border-box !important;
    }
    
    button:hover, button:focus,
    input[type="button"]:hover, input[type="button"]:focus,
    input[type="submit"]:hover, input[type="submit"]:focus {
      transform: translateY(-1px) !important;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3) !important;
    }
    
    /* Input field enhancements */
    input, textarea, select {
      min-height: 52px !important;
      padding: 16px 20px !important;
      font-size: 18px !important;
      margin: 8px 0 !important;
      border: 2px solid #333 !important;
      background: #1a1a1a !important;
      color: #ffffff !important;
      border-radius: 8px !important;
      box-sizing: border-box !important;
    }
    
    input:focus, textarea:focus, select:focus {
      border-color: #4a9eff !important;
      outline: none !important;
      box-shadow: 0 0 0 3px rgba(74, 158, 255, 0.3) !important;
    }
    
    /* Table cell padding for mobile */
    td, th {
      padding: 16px 12px !important;
      min-height: 52px !important;
    }
    
    /* Enhanced readability */
    .screen-content {
      font-size: 18px !important;
      line-height: 1.6 !important;
    }
    
    .status-bar {
      font-size: 16px !important;
      padding: 12px 16px !important;
    }
    
    /* Modal improvements */
    .modal-content {
      padding: 24px !important;
    }
    
    /* List item improvements */
    .list-item, .table-row {
      min-height: 56px !important;
      padding: 16px !important;
    }
    
    /* Label spacing */
    label {
      font-size: 16px !important;
      margin-bottom: 8px !important;
      display: block !important;
    }
  }
  
  /* Desktop Accessibility & Aesthetics */
  @media (min-width: 769px) {
    /* Better focus states for keyboard navigation */
    button:focus-visible,
    input:focus-visible,
    select:focus-visible,
    textarea:focus-visible,
    a:focus-visible {
      outline: 3px solid #f9e2af !important;
      outline-offset: 3px !important;
    }
    
    /* Smoother interactions */
    * {
      scroll-behavior: smooth;
    }
    
    /* Better spacing for desktop */
    section, article {
      margin-bottom: 24px;
    }
    
    /* Enhanced table styling */
    table {
      border-spacing: 0 8px;
    }
    
    td, th {
      padding: 12px 16px;
    }
    
    /* Card-like elements get subtle shadows */
    .card, [role="article"], [role="region"] {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }
  }

  /* Accessibility */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;function Yl(){let[e,t]=(0,v.useState)(`startup`),[n,r]=(0,v.useState)(0),[i,a]=(0,v.useState)(`System bereit - F-Tasten für Navigation`),{kunden:o,loading:s,error:c,refreshKunden:l}=Gl(),{offerten:u,loading:d,error:f,refreshOfferten:p}=Kl(),{rechnungen:m,loading:h,error:g,refreshRechnungen:_}=ql(),[y,b]=(0,v.useState)(!1),[x,S]=(0,v.useState)(!1),[C,w]=(0,v.useState)(!1),[ee,te]=(0,v.useState)(!1),[ne,T]=(0,v.useState)(!1),[re,ie]=(0,v.useState)(null),[ae,oe]=(0,v.useState)(null),[se,ce]=(0,v.useState)(null),[le,E]=(0,v.useState)(!1),[D,ue]=(0,v.useState)(`alle`),[O,de]=(0,v.useState)(`alle`),k=v.useMemo(()=>!u||u.length===0?[]:D===`alle`?u:u.filter(e=>e.status===D),[u,D]),fe=v.useMemo(()=>!m||m.length===0?[]:O===`alle`?m:m.filter(e=>e.status===O),[m,O]);v.useEffect(()=>{r(0)},[D,O]);let A=e=>{switch(e){case`help`:a(`F1 = Hilfe anzeigen`);break;case`customers`:t(`customers`),a(`Kunden (${Array.isArray(o)?o.length:0}) - ↑↓ Navigation, Enter=Bearbeiten, F2=Neu`);break;case`offers`:t(`offers`),a(`Offerten (${Array.isArray(u)?u.length:0}) - ↑↓ Navigation, Enter=Bearbeiten, F3=Neu, S=Status, R=→Rechnung`);break;case`invoices`:t(`invoices`),a(`Rechnungen (${Array.isArray(m)?m.length:0}) - ↑↓ Navigation, Enter=Bearbeiten, F4=Neu, P=PDF`);break;case`firma`:t(`firma`),a(`Firmenprofil - F9 zum Bearbeiten`);break;case`refresh`:a(`Daten werden aktualisiert...`),l(),p(),setTimeout(()=>{a(`Daten erfolgreich aktualisiert`)},1e3);break;case`startup`:t(`startup`),r(0),a(`Zurück zum Hauptmenü - F-Tasten für Navigation`);break;default:console.log(`Unbekannte F-Key Aktion:`,e)}},pe=t=>{let r;e===`customers`?r=o:e===`offers`?r=k:e===`invoices`&&(r=fe);let i=r&&r[n];switch(t){case`new`:e===`customers`?(ie(null),b(!0),a(`Neuen Kunden erstellen...`)):e===`offers`?(oe(null),S(!0),a(`Neue Offerte erstellen...`)):e===`invoices`&&(ce(null),w(!0),a(`Neue Rechnung erstellen...`));break;case`edit`:i&&(e===`customers`?(ie(i),b(!0),a(`Kunde ${i.firma||i.name} bearbeiten...`)):e===`offers`?(oe(i),S(!0),a(`Offerte ${i.nummer} bearbeiten...`)):e===`invoices`&&(ce(i),w(!0),a(`Rechnung ${i.nummer} bearbeiten...`)));break;case`open`:i&&(e===`customers`?(ie(i),b(!0),a(`Kunde-Details: ${i.firma||i.name}`)):e===`offers`?(oe(i),te(!0),a(`Positionen für Offerte ${i.nummer}`)):e===`invoices`&&(ce(i),te(!0),a(`Positionen für Rechnung ${i.nummer}`)));break;case`delete`:let n=`Element`;e===`customers`?n=`Kunde`:e===`offers`?n=`Offerte`:e===`invoices`&&(n=`Rechnung`),i&&confirm(`${n} wirklich löschen?`)&&me(i);break;case`pdf`:e===`offers`&&i?he(i):e===`invoices`&&i&&_e(i);break;case`status`:e===`offers`&&i?(T(!0),a(`Offerten-Status ändern...`)):e===`invoices`&&i&&(T(!0),a(`Rechnungs-Status ändern...`));break;case`toInvoice`:e===`offers`&&i&&i.status===`angenommen`&&ge(i);break;default:console.log(`Unbekannte Context-Aktion:`,t)}},me=async t=>{try{if(e===`customers`?(await Wl.delete(t.id),await l(),a(`Kunde erfolgreich gelöscht`)):e===`offers`?(await vl.delete(t.id),await p(),a(`Offerte erfolgreich gelöscht`)):e===`invoices`&&(await yl.delete(t.id),await _(),a(`Rechnung erfolgreich gelöscht`)),n>=0){let t=e===`customers`?o:e===`offers`?u:e===`invoices`?m:[];n>=t.length-1&&r(Math.max(0,t.length-2))}}catch(e){console.error(`Fehler beim Löschen:`,e),a(`Fehler beim Löschen: `+e.message)}},he=async e=>{try{a(`PDF-Export für Offerte ${e.nummer} wird erstellt...`),E(!0),(await vl.exportToPdf(e.id)).success?a(`PDF-Export für Offerte ${e.nummer} erfolgreich heruntergeladen`):a(`PDF-Export fehlgeschlagen`)}catch(e){console.error(`Fehler beim PDF-Export:`,e),a(`Fehler beim PDF-Export: `+(e.response?.data?.message||e.message))}finally{E(!1)}},ge=async e=>{try{a(`Erstelle Rechnung aus Offerte ${e.nummer}...`),E(!0);let n=await yl.createFromOfferte(e.id);n?(await _(),a(`✅ Rechnung ${n.nummer} erfolgreich erstellt aus Offerte ${e.nummer}`),setTimeout(()=>{t(`invoices`),a(`Rechnungen (${Array.isArray(m)?m.length+1:1}) - Neue Rechnung ${n.nummer} erstellt`)},2e3)):a(`Fehler beim Erstellen der Rechnung`)}catch(e){console.error(`Fehler beim Erstellen der Rechnung:`,e),a(`Fehler: `+(e.response?.data?.message||e.message))}finally{E(!1)}},_e=async e=>{try{a(`PDF-Export für Rechnung ${e.nummer} wird erstellt...`),E(!0),(await yl.exportToPdf(e.id)).success?a(`PDF-Export für Rechnung ${e.nummer} erfolgreich heruntergeladen`):a(`PDF-Export fehlgeschlagen`)}catch(e){console.error(`Fehler beim PDF-Export:`,e),a(`Fehler beim PDF-Export: `+(e.response?.data?.message||e.message))}finally{E(!1)}},ve=t=>{if(y||x||ee||ne||e!==`customers`&&e!==`offers`&&e!==`invoices`)return;let i;if(e===`customers`?i=o:e===`offers`?i=k:e===`invoices`&&(i=fe),!(!i||i.length===0))switch(t.key){case`ArrowUp`:t.preventDefault(),r(e=>Math.max(0,e-1));break;case`ArrowDown`:t.preventDefault(),r(e=>Math.min(i.length-1,e+1));break;case`Enter`:t.preventDefault(),pe(`open`);break;case`n`:case`N`:t.preventDefault(),pe(`new`);break;case`e`:case`E`:t.preventDefault(),pe(`edit`);break;case`d`:case`D`:t.preventDefault(),pe(`delete`);break;case`p`:case`P`:(e===`offers`||e===`invoices`)&&(t.preventDefault(),pe(`pdf`));break;case`s`:case`S`:(e===`offers`&&u&&u.length>0||e===`invoices`&&m&&m.length>0)&&(t.preventDefault(),T(!0));break;case`r`:case`R`:if(e===`offers`&&k&&k.length>0){t.preventDefault();let e=k[n];e&&e.status===`angenommen`?ge(e):a(`Nur angenommene Offerten können in Rechnungen umgewandelt werden`)}break;default:break}};v.useEffect(()=>(document.addEventListener(`keydown`,ve),()=>document.removeEventListener(`keydown`,ve)),[e,n,o,k,y,x,ee,ne]);let j=e=>{r(e)},ye=(e,t)=>{ie(e),b(!0)},be=(e,t)=>{oe(e),S(!0)},xe=(e,t)=>{ce(e),te(!0)},Se=()=>{b(!1),ie(null)},Ce=()=>{S(!1),oe(null)},we=()=>{w(!1),ce(null)},Te=()=>{te(!1)},Ee=async t=>{E(!0);try{if(e===`offers`){if(!u||u.length===0)return;let e=u[n];if(!e)return;await vl.update(e.id,{...e,status:t}),await p(),a(`Offerten-Status geändert zu: ${t}`)}else if(e===`invoices`){if(!m||m.length===0)return;let e=m[n];if(!e)return;await yl.update(e.id,{...e,status:t}),await _(),a(`Rechnungs-Status geändert zu: ${t}`)}T(!1)}catch(e){console.error(`Fehler beim Ändern des Status:`,e),a(`Fehler beim Ändern des Status`)}finally{E(!1)}},De=()=>{T(!1)};return(0,P.jsxs)(Mn,{theme:N,children:[(0,P.jsx)(Jl,{}),(0,P.jsxs)(Gn,{children:[(0,P.jsx)(Yn,{}),(0,P.jsx)(Zn,{children:(()=>{switch(e){case`startup`:return(0,P.jsx)(Dr,{stats:{kunden:Array.isArray(o)?o.length:0,offerten:Array.isArray(u)?u.length:0,rechnungen:0,status:`System bereit`}});case`customers`:return(0,P.jsx)(Gr,{kunden:o,selectedIndex:n,onRowClick:j,onDoubleClick:ye});case`offers`:return(0,P.jsx)(Qr,{offerten:k,allOfferten:u,selectedIndex:n,onRowClick:j,onDoubleClick:be,statusFilter:D,onStatusFilterChange:ue});case`invoices`:return(0,P.jsx)(ei,{rechnungen:fe,allRechnungen:m,selectedIndex:n,onRowClick:j,onDoubleClick:xe,statusFilter:O,onStatusFilterChange:de});case`firma`:return(0,P.jsx)(nc,{});default:return(0,P.jsx)(Dr,{})}})()}),(e===`customers`||e===`offers`||e===`invoices`)&&(0,P.jsx)(pr,{currentScreen:e,selectedIndex:n,data:e===`customers`?o:e===`offers`?k:e===`invoices`?fe:[],onAction:pe,showPdfExport:e===`offers`||e===`invoices`}),(0,P.jsx)(cr,{currentScreen:e,onFKeyPress:A,statusMessage:i})]}),(0,P.jsx)(yc,{isOpen:y,onClose:Se,kunde:re,onSave:async e=>{E(!0);try{re?await Wl.update(re.id,e):await Wl.create(e),await l(),Se()}catch(e){console.error(`Fehler beim Speichern des Kunden:`,e),alert(`Fehler beim Speichern des Kunden: `+e.message)}finally{E(!1)}},loading:le}),(0,P.jsx)(Ic,{isOpen:x,onClose:Ce,offerte:ae,kunden:o,onSave:async e=>{E(!0);try{ae?await vl.update(ae.id,e):await vl.create(e),await p(),Ce()}catch(e){console.error(`Fehler beim Speichern der Offerte:`,e),alert(`Fehler beim Speichern der Offerte: `+(e.message||e.toString()))}finally{E(!1)}},onPositionenEdit:e=>{oe(e),te(!0)},loading:le}),(0,P.jsx)(Yc,{isOpen:C,onClose:we,rechnung:se,kunden:o,onSave:async e=>{E(!0);try{se?await yl.update(se.id,e):await yl.create(e),await _(),we()}catch(e){console.error(`Fehler beim Speichern der Rechnung:`,e),alert(`Fehler beim Speichern der Rechnung: `+(e.message||e.toString()))}finally{E(!1)}},onPositionenEdit:e=>{ce(e),te(!0)},loading:le}),(0,P.jsx)(Fl,{isOpen:ee,onClose:Te,offerte:ae||se,onSave:async e=>{E(!0);try{console.log(`Positionen speichern:`,e),await p(),a(`Positionen erfolgreich gespeichert`)}catch(e){console.error(`Fehler beim Speichern der Positionen:`,e),alert(`Fehler beim Speichern der Positionen: `+e.message)}finally{E(!1)}},onEditEntity:e=>{e.faelligkeitsdatum||e.qrReferenz||e.nummer?.startsWith(`REC-`)?(ce(e),w(!0)):(oe(e),S(!0))},loading:le}),ne&&e===`offers`&&u&&u.length>0&&(0,P.jsx)(Ul,{currentStatus:u[n]?.status||`entwurf`,onStatusChange:Ee,onClose:De,entityType:`offers`}),ne&&e===`invoices`&&m&&m.length>0&&(0,P.jsx)(Ul,{currentStatus:m[n]?.status||`entwurf`,onStatusChange:Ee,onClose:De,entityType:`invoices`})]})}var Xl=Yl;(0,_.createRoot)(document.getElementById(`root`)).render((0,P.jsx)(v.StrictMode,{children:(0,P.jsx)(Xl,{})}));