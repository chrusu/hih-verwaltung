var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=e=>{let n={};for(var r in e)t(n,r,{get:e[r],enumerable:!0});return n},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,a)=>(a=n==null?{}:e(i(n)),c(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function te(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ne(e,t){return te(e.type,t,e.props)}function T(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ie=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function oe(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function se(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,se(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ae(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ie,`$&/`)+`/`),se(o,r,i,``,function(e){return e})):o!=null&&(T(o)&&(o=ne(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ie,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ae(a,u),c+=se(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ae(a,u++),c+=se(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return se(oe(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ce(e,t,n){if(e==null)return e;var r=[],i=0;return se(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function le(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var E=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},D={map:ce,forEach:function(e,t,n){ce(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ce(e,function(){t++}),t},toArray:function(e){return ce(e,function(e){return e})||[]},only:function(e){if(!T(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=D,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return te(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return te(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=T,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:le}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,E)}catch(e){E(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.0`})),d=o(((e,t)=>{t.exports=u()})),f=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,T());else{var t=n(l);t!==null&&ae(x,t.startTime-e)}}var S=!1,C=-1,w=5,ee=-1;function te(){return g?!0:!(e.unstable_now()-ee<w)}function ne(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&te());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ae(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?T():S=!1}}}var T;if(typeof y==`function`)T=function(){y(ne)};else if(typeof MessageChannel<`u`){var re=new MessageChannel,ie=re.port2;re.port1.onmessage=ne,T=function(){ie.postMessage(null)}}else T=function(){_(ne,0)};function ae(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ae(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,T()))),r},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),p=o(((e,t)=>{t.exports=f()})),m=o((e=>{var t=d();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.0`})),h=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=o((e=>{var t=p(),n=d(),r=h();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var m=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),te=Symbol.for(`react.suspense_list`),ne=Symbol.for(`react.memo`),T=Symbol.for(`react.lazy`),re=Symbol.for(`react.activity`),ie=Symbol.for(`react.memo_cache_sentinel`),ae=Symbol.iterator;function oe(e){return typeof e!=`object`||!e?null:(e=ae&&e[ae]||e[`@@iterator`],typeof e==`function`?e:null)}var se=Symbol.for(`react.client.reference`);function ce(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ee:return`Suspense`;case te:return`SuspenseList`;case re:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ne:return t=e.displayName||null,t===null?ce(e.type)||`Memo`:t;case T:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}var le=Array.isArray,E=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O={pending:!1,data:null,method:null,action:null},k=[],ue=-1;function de(e){return{current:e}}function fe(e){0>ue||(e.current=k[ue],k[ue]=null,ue--)}function A(e,t){ue++,k[ue]=e.current,e.current=t}var pe=de(null),me=de(null),he=de(null),ge=de(null);function _e(e,t){switch(A(he,t),A(me,e),A(pe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?nf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=nf(t),e=rf(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}fe(pe),A(pe,e)}function ve(){fe(pe),fe(me),fe(he)}function ye(e){e.memoizedState!==null&&A(ge,e);var t=pe.current,n=rf(t,e.type);t!==n&&(A(me,e),A(pe,n))}function be(e){me.current===e&&(fe(pe),fe(me)),ge.current===e&&(fe(ge),mp._currentValue=O)}var xe,Se;function Ce(e){if(xe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);xe=t&&t[1]||``,Se=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+xe+e+Se}var we=!1;function Te(e,t){if(!e||we)return``;we=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{we=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ce(n):``}function Ee(e,t){switch(e.tag){case 26:case 27:case 5:return Ce(e.type);case 16:return Ce(`Lazy`);case 13:return e.child!==t&&t!==null?Ce(`Suspense Fallback`):Ce(`Suspense`);case 19:return Ce(`SuspenseList`);case 0:case 15:return Te(e.type,!1);case 11:return Te(e.type.render,!1);case 1:return Te(e.type,!0);case 31:return Ce(`Activity`);default:return``}}function De(e){try{var t=``,n=null;do t+=Ee(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Oe=Object.prototype.hasOwnProperty,ke=t.unstable_scheduleCallback,Ae=t.unstable_cancelCallback,je=t.unstable_shouldYield,Me=t.unstable_requestPaint,Ne=t.unstable_now,Pe=t.unstable_getCurrentPriorityLevel,Fe=t.unstable_ImmediatePriority,Ie=t.unstable_UserBlockingPriority,Le=t.unstable_NormalPriority,Re=t.unstable_LowPriority,ze=t.unstable_IdlePriority,Be=t.log,Ve=t.unstable_setDisableYieldValue,He=null,Ue=null;function We(e){if(typeof Be==`function`&&Ve(e),Ue&&typeof Ue.setStrictMode==`function`)try{Ue.setStrictMode(He,e)}catch{}}var Ge=Math.clz32?Math.clz32:Je,Ke=Math.log,qe=Math.LN2;function Je(e){return e>>>=0,e===0?32:31-(Ke(e)/qe|0)|0}var Ye=256,Xe=262144,Ze=4194304;function Qe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $e(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Qe(n))):i=Qe(o):i=Qe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Qe(n))):i=Qe(o)):i=Qe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function et(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function tt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nt(){var e=Ze;return Ze<<=1,!(Ze&62914560)&&(Ze=4194304),e}function rt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function it(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function at(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ge(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ot(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ot(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ge(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function st(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ge(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ct(e,t){var n=t&-t;return n=n&42?1:lt(n),(n&(e.suspendedLanes|t))===0?n:0}function lt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ut(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function dt(){var e=D.p;return e===0?(e=window.event,e===void 0?32:Ap(e.type)):e}function ft(e,t){var n=D.p;try{return D.p=e,t()}finally{D.p=n}}var pt=Math.random().toString(36).slice(2),mt=`__reactFiber$`+pt,ht=`__reactProps$`+pt,gt=`__reactContainer$`+pt,_t=`__reactEvents$`+pt,vt=`__reactListeners$`+pt,yt=`__reactHandles$`+pt,bt=`__reactResources$`+pt,xt=`__reactMarker$`+pt;function St(e){delete e[mt],delete e[ht],delete e[_t],delete e[vt],delete e[yt]}function Ct(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Df(e);e!==null;){if(n=e[mt])return n;e=Df(e)}return t}e=n,n=e.parentNode}return null}function wt(e){if(e=e[mt]||e[gt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Tt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Et(e){var t=e[bt];return t||=e[bt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Dt(e){e[xt]=!0}var Ot=new Set,kt={};function At(e,t){jt(e,t),jt(e+`Capture`,t)}function jt(e,t){for(kt[e]=t,e=0;e<t.length;e++)Ot.add(t[e])}var Mt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Nt={},Pt={};function Ft(e){return Oe.call(Pt,e)?!0:Oe.call(Nt,e)?!1:Mt.test(e)?Pt[e]=!0:(Nt[e]=!0,!1)}function It(e,t,n){if(Ft(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Lt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Rt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function zt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Bt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Vt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ht(e){if(!e._valueTracker){var t=Bt(e)?`checked`:`value`;e._valueTracker=Vt(e,t,``+e[t])}}function Ut(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Bt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Wt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Gt=/[\n"\\]/g;function Kt(e){return e.replace(Gt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function qt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+zt(t)):e.value!==``+zt(t)&&(e.value=``+zt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Yt(e,o,zt(n)):Yt(e,o,zt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+zt(s):e.removeAttribute(`name`)}function Jt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ht(e);return}n=n==null?``:``+zt(n),t=t==null?n:``+zt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ht(e)}function Yt(e,t,n){t===`number`&&Wt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Xt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+zt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Zt(e,t,n){if(t!=null&&(t=``+zt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+zt(n)}function Qt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(le(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=zt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ht(e)}function $t(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var en=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function tn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||en.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function nn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&tn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&tn(e,o,t[o])}function rn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var an=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),on=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sn(e){return on.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function cn(){}var ln=null;function un(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dn=null,fn=null;function pn(e){var t=wt(e);if(t&&(e=t.stateNode)){var n=e[ht]||null;a:switch(e=t.stateNode,t.type){case`input`:if(qt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Kt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[ht]||null;if(!a)throw Error(i(90));qt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ut(r)}break a;case`textarea`:Zt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Xt(e,!!n.multiple,t,!1)}}}var mn=!1;function hn(e,t,n){if(mn)return e(t,n);mn=!0;try{return e(t)}finally{if(mn=!1,(dn!==null||fn!==null)&&(Nu(),dn&&(t=dn,e=fn,fn=dn=null,pn(t),e)))for(t=0;t<e.length;t++)pn(e[t])}}function gn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ht]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var _n=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),vn=!1;if(_n)try{var yn={};Object.defineProperty(yn,`passive`,{get:function(){vn=!0}}),window.addEventListener(`test`,yn,yn),window.removeEventListener(`test`,yn,yn)}catch{vn=!1}var bn=null,xn=null,Sn=null;function Cn(){if(Sn)return Sn;var e,t=xn,n=t.length,r,i=`value`in bn?bn.value:bn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Sn=i.slice(e,1<r?1-r:void 0)}function wn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Tn(){return!0}function En(){return!1}function Dn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Tn:En,this.isPropagationStopped=En,this}return m(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Tn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Tn)},persist:function(){},isPersistent:Tn}),t}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kn=Dn(On),An=m({},On,{view:0,detail:0}),jn=Dn(An),Mn,Nn,Pn,Fn=m({},An,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Pn&&(Pn&&e.type===`mousemove`?(Mn=e.screenX-Pn.screenX,Nn=e.screenY-Pn.screenY):Nn=Mn=0,Pn=e),Mn)},movementY:function(e){return`movementY`in e?e.movementY:Nn}}),In=Dn(Fn),Ln=m({},Fn,{dataTransfer:0}),Rn=Dn(Ln),zn=m({},An,{relatedTarget:0}),Bn=Dn(zn),j=m({},On,{animationName:0,elapsedTime:0,pseudoElement:0}),Vn=Dn(j),Hn=m({},On,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}}),M=Dn(Hn),Un=m({},On,{data:0}),Wn=Dn(Un),N={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Gn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Kn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function qn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Kn[e])?!!t[e]:!1}function Jn(){return qn}var Yn=m({},An,{key:function(e){if(e.key){var t=N[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=wn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Gn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jn,charCode:function(e){return e.type===`keypress`?wn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?wn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}}),Xn=Dn(Yn),Zn=m({},Fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qn=Dn(Zn),$n=m({},An,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jn}),er=Dn($n),tr=m({},On,{propertyName:0,elapsedTime:0,pseudoElement:0}),nr=Dn(tr),rr=m({},Fn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ir=Dn(rr),ar=m({},On,{newState:0,oldState:0}),or=Dn(ar),sr=[9,13,27,32],cr=_n&&`CompositionEvent`in window,lr=null;_n&&`documentMode`in document&&(lr=document.documentMode);var ur=_n&&`TextEvent`in window&&!lr,dr=_n&&(!cr||lr&&8<lr&&11>=lr),fr=` `,pr=!1;function mr(e,t){switch(e){case`keyup`:return sr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function hr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var gr=!1;function _r(e,t){switch(e){case`compositionend`:return hr(t);case`keypress`:return t.which===32?(pr=!0,fr):null;case`textInput`:return e=t.data,e===fr&&pr?null:e;default:return null}}function vr(e,t){if(gr)return e===`compositionend`||!cr&&mr(e,t)?(e=Cn(),Sn=xn=bn=null,gr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return dr&&t.locale!==`ko`?null:t.data;default:return null}}var yr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function br(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!yr[e.type]:t===`textarea`}function xr(e,t,n,r){dn?fn?fn.push(r):fn=[r]:dn=r,t=Vd(t,`onChange`),0<t.length&&(n=new kn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Sr=null,Cr=null;function wr(e){Pd(e,0)}function Tr(e){var t=Tt(e);if(Ut(t))return e}function Er(e,t){if(e===`change`)return t}var Dr=!1;if(_n){var Or;if(_n){var kr=`oninput`in document;if(!kr){var Ar=document.createElement(`div`);Ar.setAttribute(`oninput`,`return;`),kr=typeof Ar.oninput==`function`}Or=kr}else Or=!1;Dr=Or&&(!document.documentMode||9<document.documentMode)}function jr(){Sr&&(Sr.detachEvent(`onpropertychange`,Mr),Cr=Sr=null)}function Mr(e){if(e.propertyName===`value`&&Tr(Cr)){var t=[];xr(t,Cr,e,un(e)),hn(wr,t)}}function Nr(e,t,n){e===`focusin`?(jr(),Sr=t,Cr=n,Sr.attachEvent(`onpropertychange`,Mr)):e===`focusout`&&jr()}function Pr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Tr(Cr)}function Fr(e,t){if(e===`click`)return Tr(t)}function Ir(e,t){if(e===`input`||e===`change`)return Tr(t)}function Lr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Rr=typeof Object.is==`function`?Object.is:Lr;function zr(e,t){if(Rr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Oe.call(t,i)||!Rr(e[i],t[i]))return!1}return!0}function Br(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vr(e,t){var n=Br(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Br(n)}}function Hr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ur(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Wt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wt(e.document)}return t}function Wr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Gr=_n&&`documentMode`in document&&11>=document.documentMode,Kr=null,qr=null,Jr=null,Yr=!1;function Xr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yr||Kr==null||Kr!==Wt(r)||(r=Kr,`selectionStart`in r&&Wr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jr&&zr(Jr,r)||(Jr=r,r=Vd(qr,`onSelect`),0<r.length&&(t=new kn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Kr)))}function Zr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Qr={animationend:Zr(`Animation`,`AnimationEnd`),animationiteration:Zr(`Animation`,`AnimationIteration`),animationstart:Zr(`Animation`,`AnimationStart`),transitionrun:Zr(`Transition`,`TransitionRun`),transitionstart:Zr(`Transition`,`TransitionStart`),transitioncancel:Zr(`Transition`,`TransitionCancel`),transitionend:Zr(`Transition`,`TransitionEnd`)},$r={},ei={};_n&&(ei=document.createElement(`div`).style,`AnimationEvent`in window||(delete Qr.animationend.animation,delete Qr.animationiteration.animation,delete Qr.animationstart.animation),`TransitionEvent`in window||delete Qr.transitionend.transition);function ti(e){if($r[e])return $r[e];if(!Qr[e])return e;var t=Qr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ei)return $r[e]=t[n];return e}var ni=ti(`animationend`),ri=ti(`animationiteration`),ii=ti(`animationstart`),ai=ti(`transitionrun`),oi=ti(`transitionstart`),si=ti(`transitioncancel`),ci=ti(`transitionend`),li=new Map,ui=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ui.push(`scrollEnd`);function di(e,t){li.set(e,t),At(t,[e])}var fi=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},pi=[],mi=0,hi=0;function gi(){for(var e=mi,t=hi=mi=0;t<e;){var n=pi[t];pi[t++]=null;var r=pi[t];pi[t++]=null;var i=pi[t];pi[t++]=null;var a=pi[t];if(pi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&bi(n,i,a)}}function _i(e,t,n,r){pi[mi++]=e,pi[mi++]=t,pi[mi++]=n,pi[mi++]=r,hi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function vi(e,t,n,r){return _i(e,t,n,r),xi(e)}function yi(e,t){return _i(e,null,null,t),xi(e)}function bi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ge(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function xi(e){if(50<wu)throw wu=0,Tu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Si={};function Ci(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wi(e,t,n,r){return new Ci(e,t,n,r)}function Ti(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ei(e,t){var n=e.alternate;return n===null?(n=wi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Di(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Oi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)Ti(e)&&(s=1);else if(typeof e==`string`)s=ap(e,n,pe.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case re:return e=wi(31,n,t,a),e.elementType=re,e.lanes=o,e;case y:return ki(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=wi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ee:return e=wi(13,n,t,a),e.elementType=ee,e.lanes=o,e;case te:return e=wi(19,n,t,a),e.elementType=te,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case ne:s=14;break a;case T:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=wi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function ki(e,t,n,r){return e=wi(7,e,r,t),e.lanes=n,e}function Ai(e,t,n){return e=wi(6,e,null,t),e.lanes=n,e}function ji(e){var t=wi(18,null,null,0);return t.stateNode=e,t}function Mi(e,t,n){return t=wi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ni=new WeakMap;function Pi(e,t){if(typeof e==`object`&&e){var n=Ni.get(e);return n===void 0?(t={value:e,source:t,stack:De(t)},Ni.set(e,t),t):n}return{value:e,source:t,stack:De(t)}}var Fi=[],Ii=0,Li=null,Ri=0,zi=[],Bi=0,Vi=null,Hi=1,Ui=``;function Wi(e,t){Fi[Ii++]=Ri,Fi[Ii++]=Li,Li=e,Ri=t}function Gi(e,t,n){zi[Bi++]=Hi,zi[Bi++]=Ui,zi[Bi++]=Vi,Vi=e;var r=Hi;e=Ui;var i=32-Ge(r)-1;r&=~(1<<i),n+=1;var a=32-Ge(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Hi=1<<32-Ge(t)+i|n<<i|r,Ui=a+e}else Hi=1<<a|n<<i|r,Ui=e}function Ki(e){e.return!==null&&(Wi(e,1),Gi(e,1,0))}function qi(e){for(;e===Li;)Li=Fi[--Ii],Fi[Ii]=null,Ri=Fi[--Ii],Fi[Ii]=null;for(;e===Vi;)Vi=zi[--Bi],zi[Bi]=null,Ui=zi[--Bi],zi[Bi]=null,Hi=zi[--Bi],zi[Bi]=null}function Ji(e,t){zi[Bi++]=Hi,zi[Bi++]=Ui,zi[Bi++]=Vi,Hi=t.id,Ui=t.overflow,Vi=e}var Yi=null,P=null,F=!1,Xi=null,Zi=!1,Qi=Error(i(519));function $i(e){var t=Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``));throw aa(Pi(t,e)),Qi}function ea(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[mt]=e,t[ht]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<Md.length;n++)Q(Md[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Jt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Qt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||qd(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=cn),t=!0):t=!1,t||$i(e,!0)}function ta(e){for(Yi=e.return;Yi;)switch(Yi.tag){case 5:case 31:case 13:Zi=!1;return;case 27:case 3:Zi=!0;return;default:Yi=Yi.return}}function na(e){if(e!==Yi)return!1;if(!F)return ta(e),F=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||af(e.type,e.memoizedProps)),n=!n),n&&P&&$i(e),ta(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));P=Ef(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));P=Ef(e)}else t===27?(t=P,mf(e.type)?(e=Tf,Tf=null,P=e):P=t):P=Yi?wf(e.stateNode.nextSibling):null;return!0}function ra(){P=Yi=null,F=!1}function ia(){var e=Xi;return e!==null&&(uu===null?uu=e:uu.push.apply(uu,e),Xi=null),e}function aa(e){Xi===null?Xi=[e]:Xi.push(e)}var oa=de(null),sa=null,ca=null;function la(e,t,n){A(oa,t._currentValue),t._currentValue=n}function ua(e){e._currentValue=oa.current,fe(oa)}function da(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function fa(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),da(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),da(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function pa(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Rr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ge.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[mp]:e.push(mp))}a=a.return}e!==null&&fa(t,e,n,r),t.flags|=262144}function ma(e){for(e=e.firstContext;e!==null;){if(!Rr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ha(e){sa=e,ca=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ga(e){return va(sa,e)}function _a(e,t){return sa===null&&ha(e),va(e,t)}function va(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ca===null){if(e===null)throw Error(i(308));ca=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ca=ca.next=t;return n}var ya=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ba=t.unstable_scheduleCallback,xa=t.unstable_NormalPriority,Sa={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ca(){return{controller:new ya,data:new Map,refCount:0}}function wa(e){e.refCount--,e.refCount===0&&ba(xa,function(){e.controller.abort()})}var Ta=null,Ea=0,Da=0,Oa=null;function ka(e,t){if(Ta===null){var n=Ta=[];Ea=0,Da=wd(),Oa={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return Ea++,t.then(Aa,Aa),t}function Aa(){if(--Ea===0&&Ta!==null){Oa!==null&&(Oa.status=`fulfilled`);var e=Ta;Ta=null,Da=0,Oa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ja(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ma=E.S;E.S=function(e,t){pu=Ne(),typeof t==`object`&&t&&typeof t.then==`function`&&ka(e,t),Ma!==null&&Ma(e,t)};var Na=de(null);function Pa(){var e=Na.current;return e===null?q.pooledCache:e}function Fa(e,t){t===null?A(Na,Na.current):A(Na,t.pool)}function Ia(){var e=Pa();return e===null?null:{parent:Sa._currentValue,pool:e}}var La=Error(i(460)),Ra=Error(i(474)),za=Error(i(542)),Ba={then:function(){}};function Va(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ha(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(cn,cn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ka(e),e;default:if(typeof t.status==`string`)t.then(cn,cn);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ka(e),e}throw Wa=t,La}}function Ua(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Wa=e,La):e}}var Wa=null;function Ga(){if(Wa===null)throw Error(i(459));var e=Wa;return Wa=null,e}function Ka(e){if(e===La||e===za)throw Error(i(483))}var I=null,qa=0;function Ja(e){var t=qa;return qa+=1,I===null&&(I=[]),Ha(I,e,t)}function Ya(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function L(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Xa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=Ei(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Ai(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===T&&Ua(i)===t.type)?(t=a(t,n.props),Ya(t,n),t.return=e,t):(t=Oi(n.type,n.key,n.props,null,e.mode,r),Ya(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Mi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=ki(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Ai(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=Oi(t.type,t.key,t.props,null,e.mode,n),Ya(n,t),n.return=e,n;case v:return t=Mi(t,e.mode,n),t.return=e,t;case T:return t=Ua(t),f(e,t,n)}if(le(t)||oe(t))return t=ki(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ja(t),n);if(t.$$typeof===C)return f(e,_a(e,t),n);L(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case T:return n=Ua(n),p(e,t,n,r)}if(le(n)||oe(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ja(n),r);if(n.$$typeof===C)return p(e,t,_a(e,n),r);L(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case T:return r=Ua(r),m(e,t,n,r,i)}if(le(r)||oe(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ja(r),i);if(r.$$typeof===C)return m(e,t,n,_a(t,r),i);L(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),F&&Wi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return F&&Wi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),F&&Wi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),F&&Wi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return F&&Wi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),F&&Wi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===T&&Ua(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ya(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=ki(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=Oi(o.type,o.key,o.props,null,e.mode,c),Ya(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Mi(o,e.mode,c),c.return=e,e=c}return s(e);case T:return o=Ua(o),b(e,r,o,c)}if(le(o))return h(e,r,o,c);if(oe(o)){if(l=oe(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ja(o),c);if(o.$$typeof===C)return b(e,r,_a(e,o),c);L(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Ai(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{qa=0;var i=b(e,t,n,r);return I=null,i}catch(t){if(t===La||t===za)throw t;var a=wi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Za=Xa(!0),Qa=Xa(!1),$a=!1;function eo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function to(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function no(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ro(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=xi(e),bi(e,null,n),t}return _i(e,r,t,n),xi(e)}function io(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,st(e,n)}}function ao(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var oo=!1;function so(){if(oo){var e=Oa;if(e!==null)throw e}}function co(e,t,n,r){oo=!1;var i=e.updateQueue;$a=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===Da&&(oo=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,f);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,f=typeof h==`function`?h.call(_,d,f):h,f==null)break a;d=m({},d,f);break a;case 2:$a=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),iu|=o,e.lanes=o,e.memoizedState=d}}function lo(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function uo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)lo(n[e],t)}var fo=de(null),po=de(0);function mo(e,t){e=nu,A(po,e),A(fo,t),nu=e|t.baseLanes}function ho(){A(po,nu),A(fo,fo.current)}function go(){nu=po.current,fe(fo),fe(po)}var _o=de(null),vo=null;function yo(e){var t=e.alternate;A(wo,wo.current&1),A(_o,e),vo===null&&(t===null||fo.current!==null||t.memoizedState!==null)&&(vo=e)}function bo(e){A(wo,wo.current),A(_o,e),vo===null&&(vo=e)}function xo(e){e.tag===22?(A(wo,wo.current),A(_o,e),vo===null&&(vo=e)):So(e)}function So(){A(wo,wo.current),A(_o,_o.current)}function Co(e){fe(_o),vo===e&&(vo=null),fe(wo)}var wo=de(0);function To(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||xf(n)||Sf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Eo=0,R=null,z=null,Do=null,Oo=!1,ko=!1,Ao=!1,jo=0,Mo=0,No=null,Po=0;function Fo(){throw Error(i(321))}function Io(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Rr(e[n],t[n]))return!1;return!0}function Lo(e,t,n,r,i,a){return Eo=a,R=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?tc:nc,Ao=!1,a=n(r,i),Ao=!1,ko&&(a=zo(t,n,r,i)),Ro(e),a}function Ro(e){E.H=ec;var t=z!==null&&z.next!==null;if(Eo=0,Do=z=R=null,Oo=!1,Mo=0,No=null,t)throw Error(i(300));e===null||V||(e=e.dependencies,e!==null&&ma(e)&&(V=!0))}function zo(e,t,n,r){R=e;var a=0;do{if(ko&&(No=null),Mo=0,ko=!1,25<=a)throw Error(i(301));if(a+=1,Do=z=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}E.H=rc,o=t(n,r)}while(ko);return o}function Bo(){var e=E.H,t=e.useState()[0];return t=typeof t.then==`function`?qo(t):t,e=e.useState()[0],(z===null?null:z.memoizedState)!==e&&(R.flags|=1024),t}function Vo(){var e=jo!==0;return jo=0,e}function Ho(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Uo(e){if(Oo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Oo=!1}Eo=0,Do=z=R=null,ko=!1,Mo=jo=0,No=null}function Wo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Do===null?R.memoizedState=Do=e:Do=Do.next=e,Do}function Go(){if(z===null){var e=R.alternate;e=e===null?null:e.memoizedState}else e=z.next;var t=Do===null?R.memoizedState:Do.next;if(t!==null)Do=t,z=e;else{if(e===null)throw R.alternate===null?Error(i(467)):Error(i(310));z=e,e={memoizedState:z.memoizedState,baseState:z.baseState,baseQueue:z.baseQueue,queue:z.queue,next:null},Do===null?R.memoizedState=Do=e:Do=Do.next=e}return Do}function Ko(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function qo(e){var t=Mo;return Mo+=1,No===null&&(No=[]),e=Ha(No,e,t),t=R,(Do===null?t.memoizedState:Do.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?tc:nc),e}function Jo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return qo(e);if(e.$$typeof===C)return ga(e)}throw Error(i(438,String(e)))}function Yo(e){var t=null,n=R.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=R.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Ko(),R.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ie;return t.index++,n}function Xo(e,t){return typeof t==`function`?t(e):t}function Zo(e){var t=Go();return Qo(t,z,e)}function Qo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Eo&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Da&&(d=!0);else if((Eo&p)===p){u=u.next,p===Da&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,R.lanes|=p,iu|=p;f=u.action,Ao&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,R.lanes|=f,iu|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Rr(o,e.memoizedState)&&(V=!0,d&&(n=Oa,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function $o(e){var t=Go(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Rr(o,t.memoizedState)||(V=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function es(e,t,n){var r=R,a=Go(),o=F;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Rr((z||a).memoizedState,n);if(s&&(a.memoizedState=n,V=!0),a=a.queue,Ds(rs.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||Do!==null&&Do.memoizedState.tag&1){if(r.flags|=2048,Ss(9,{destroy:void 0},ns.bind(null,r,a,n,t),null),q===null)throw Error(i(349));o||Eo&127||ts(r,t,n)}return n}function ts(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=R.updateQueue,t===null?(t=Ko(),R.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ns(e,t,n,r){t.value=n,t.getSnapshot=r,os(t)&&ss(e)}function rs(e,t,n){return n(function(){os(t)&&ss(e)})}function os(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Rr(e,n)}catch{return!0}}function ss(e){var t=yi(e,2);t!==null&&Ou(t,e,2)}function cs(e){var t=Wo();if(typeof e==`function`){var n=e;if(e=n(),Ao){We(!0);try{n()}finally{We(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xo,lastRenderedState:e},t}function ls(e,t,n,r){return e.baseState=n,Qo(e,z,typeof r==`function`?r:Xo)}function us(e,t,n,r,a){if(Zs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};E.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,ds(t,o)):(o.next=n.next,t.pending=n.next=o)}}function ds(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=E.T,o={};E.T=o;try{var s=n(i,r),c=E.S;c!==null&&c(o,s),fs(e,t,s)}catch(n){ms(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),E.T=a}}else try{a=n(i,r),fs(e,t,a)}catch(n){ms(e,t,n)}}function fs(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){ps(e,t,n)},function(n){return ms(e,t,n)}):ps(e,t,n)}function ps(e,t,n){t.status=`fulfilled`,t.value=n,hs(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,ds(e,n)))}function ms(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,hs(t),t=t.next;while(t!==r)}e.action=null}function hs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function gs(e,t){return t}function _s(e,t){if(F){var n=q.formState;if(n!==null){a:{var r=R;if(F){if(P){b:{for(var i=P,a=Zi;i.nodeType!==8;){if(!a){i=null;break b}if(i=wf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){P=wf(i.nextSibling),r=i.data===`F!`;break a}}$i(r)}r=!1}r&&(t=n[0])}}return n=Wo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gs,lastRenderedState:t},n.queue=r,n=Js.bind(null,R,r),r.dispatch=n,r=cs(!1),a=Xs.bind(null,R,!1,r.queue),r=Wo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=us.bind(null,R,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function vs(e){var t=Go();return ys(t,z,e)}function ys(e,t,n){if(t=Qo(e,t,gs)[0],e=Zo(Xo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=qo(t)}catch(e){throw e===La?za:e}else r=t;t=Go();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(R.flags|=2048,Ss(9,{destroy:void 0},bs.bind(null,i,n),null)),[r,a,e]}function bs(e,t){e.action=t}function xs(e){var t=Go(),n=z;if(n!==null)return ys(t,n,e);Go(),t=t.memoizedState,n=Go();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Ss(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=R.updateQueue,t===null&&(t=Ko(),R.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Cs(){return Go().memoizedState}function ws(e,t,n,r){var i=Wo();R.flags|=e,i.memoizedState=Ss(1|t,{destroy:void 0},n,r===void 0?null:r)}function Ts(e,t,n,r){var i=Go();r=r===void 0?null:r;var a=i.memoizedState.inst;z!==null&&r!==null&&Io(r,z.memoizedState.deps)?i.memoizedState=Ss(t,a,n,r):(R.flags|=e,i.memoizedState=Ss(1|t,a,n,r))}function Es(e,t){ws(8390656,8,e,t)}function Ds(e,t){Ts(2048,8,e,t)}function Os(e){R.flags|=4;var t=R.updateQueue;if(t===null)t=Ko(),R.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ks(e){var t=Go().memoizedState;return Os({ref:t,nextImpl:e}),function(){if(K&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function As(e,t){return Ts(4,2,e,t)}function js(e,t){return Ts(4,4,e,t)}function Ms(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ns(e,t,n){n=n==null?null:n.concat([e]),Ts(4,4,Ms.bind(null,t,e),n)}function Ps(){}function Fs(e,t){var n=Go();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Io(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Is(e,t){var n=Go();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Io(t,r[1]))return r[0];if(r=e(),Ao){We(!0);try{e()}finally{We(!1)}}return n.memoizedState=[r,t],r}function Ls(e,t,n){return n===void 0||Eo&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=Du(),R.lanes|=e,iu|=e,n)}function Rs(e,t,n,r){return Rr(n,t)?n:fo.current===null?!(Eo&42)||Eo&1073741824&&!(Y&261930)?(V=!0,e.memoizedState=n):(e=Du(),R.lanes|=e,iu|=e,t):(e=Ls(e,n,r),Rr(e,t)||(V=!0),e)}function zs(e,t,n,r,i){var a=D.p;D.p=a!==0&&8>a?a:8;var o=E.T,s={};E.T=s,Xs(e,!1,t,n);try{var c=i(),l=E.S;if(l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`){var u=ja(c,r);Ys(e,t,u,Eu(e))}else Ys(e,t,r,Eu(e))}catch(n){Ys(e,t,{then:function(){},status:`rejected`,reason:n},Eu())}finally{D.p=a,o!==null&&s.types!==null&&(o.types=s.types),E.T=o}}function Bs(){}function Vs(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Hs(e).queue;zs(e,a,t,O,n===null?Bs:function(){return Us(e),n(r)})}function Hs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:O,baseState:O,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xo,lastRenderedState:O},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Us(e){var t=Hs(e);t.next===null&&(t=e.alternate.memoizedState),Ys(e,t.next.queue,{},Eu())}function Ws(){return ga(mp)}function Gs(){return Go().memoizedState}function B(){return Go().memoizedState}function Ks(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Eu();e=no(n);var r=ro(t,e,n);r!==null&&(Ou(r,t,n),io(r,t,n)),t={cache:Ca()},e.payload=t;return}t=t.return}}function qs(e,t,n){var r=Eu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Zs(e)?Qs(t,n):(n=vi(e,t,n,r),n!==null&&(Ou(n,e,r),$s(n,t,r)))}function Js(e,t,n){var r=Eu();Ys(e,t,n,r)}function Ys(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zs(e))Qs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Rr(s,o))return _i(e,t,i,0),q===null&&gi(),!1}catch{}if(n=vi(e,t,i,r),n!==null)return Ou(n,e,r),$s(n,t,r),!0}return!1}function Xs(e,t,n,r){if(r={lane:2,revertLane:wd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Zs(e)){if(t)throw Error(i(479))}else t=vi(e,n,r,2),t!==null&&Ou(t,e,2)}function Zs(e){var t=e.alternate;return e===R||t!==null&&t===R}function Qs(e,t){ko=Oo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function $s(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,st(e,n)}}var ec={readContext:ga,use:Jo,useCallback:Fo,useContext:Fo,useEffect:Fo,useImperativeHandle:Fo,useLayoutEffect:Fo,useInsertionEffect:Fo,useMemo:Fo,useReducer:Fo,useRef:Fo,useState:Fo,useDebugValue:Fo,useDeferredValue:Fo,useTransition:Fo,useSyncExternalStore:Fo,useId:Fo,useHostTransitionStatus:Fo,useFormState:Fo,useActionState:Fo,useOptimistic:Fo,useMemoCache:Fo,useCacheRefresh:Fo};ec.useEffectEvent=Fo;var tc={readContext:ga,use:Jo,useCallback:function(e,t){return Wo().memoizedState=[e,t===void 0?null:t],e},useContext:ga,useEffect:Es,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ws(4194308,4,Ms.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ws(4194308,4,e,t)},useInsertionEffect:function(e,t){ws(4,2,e,t)},useMemo:function(e,t){var n=Wo();t=t===void 0?null:t;var r=e();if(Ao){We(!0);try{e()}finally{We(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Wo();if(n!==void 0){var i=n(t);if(Ao){We(!0);try{n(t)}finally{We(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=qs.bind(null,R,e),[r.memoizedState,e]},useRef:function(e){var t=Wo();return e={current:e},t.memoizedState=e},useState:function(e){e=cs(e);var t=e.queue,n=Js.bind(null,R,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ps,useDeferredValue:function(e,t){var n=Wo();return Ls(n,e,t)},useTransition:function(){var e=cs(!1);return e=zs.bind(null,R,e.queue,!0,!1),Wo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=R,a=Wo();if(F){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),q===null)throw Error(i(349));Y&127||ts(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Es(rs.bind(null,r,o,e),[e]),r.flags|=2048,Ss(9,{destroy:void 0},ns.bind(null,r,o,n,t),null),n},useId:function(){var e=Wo(),t=q.identifierPrefix;if(F){var n=Ui,r=Hi;n=(r&~(1<<32-Ge(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=jo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Po++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ws,useFormState:_s,useActionState:_s,useOptimistic:function(e){var t=Wo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Xs.bind(null,R,!0,n),n.dispatch=t,[e,t]},useMemoCache:Yo,useCacheRefresh:function(){return Wo().memoizedState=Ks.bind(null,R)},useEffectEvent:function(e){var t=Wo(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},nc={readContext:ga,use:Jo,useCallback:Fs,useContext:ga,useEffect:Ds,useImperativeHandle:Ns,useInsertionEffect:As,useLayoutEffect:js,useMemo:Is,useReducer:Zo,useRef:Cs,useState:function(){return Zo(Xo)},useDebugValue:Ps,useDeferredValue:function(e,t){var n=Go();return Rs(n,z.memoizedState,e,t)},useTransition:function(){var e=Zo(Xo)[0],t=Go().memoizedState;return[typeof e==`boolean`?e:qo(e),t]},useSyncExternalStore:es,useId:Gs,useHostTransitionStatus:Ws,useFormState:vs,useActionState:vs,useOptimistic:function(e,t){var n=Go();return ls(n,z,e,t)},useMemoCache:Yo,useCacheRefresh:B};nc.useEffectEvent=ks;var rc={readContext:ga,use:Jo,useCallback:Fs,useContext:ga,useEffect:Ds,useImperativeHandle:Ns,useInsertionEffect:As,useLayoutEffect:js,useMemo:Is,useReducer:$o,useRef:Cs,useState:function(){return $o(Xo)},useDebugValue:Ps,useDeferredValue:function(e,t){var n=Go();return z===null?Ls(n,e,t):Rs(n,z.memoizedState,e,t)},useTransition:function(){var e=$o(Xo)[0],t=Go().memoizedState;return[typeof e==`boolean`?e:qo(e),t]},useSyncExternalStore:es,useId:Gs,useHostTransitionStatus:Ws,useFormState:xs,useActionState:xs,useOptimistic:function(e,t){var n=Go();return z===null?(n.baseState=e,[e,n.queue.dispatch]):ls(n,z,e,t)},useMemoCache:Yo,useCacheRefresh:B};rc.useEffectEvent=ks;function ic(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:m({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ac={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Eu(),i=no(r);i.payload=t,n!=null&&(i.callback=n),t=ro(e,i,r),t!==null&&(Ou(t,e,r),io(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Eu(),i=no(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=ro(e,i,r),t!==null&&(Ou(t,e,r),io(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Eu(),r=no(n);r.tag=2,t!=null&&(r.callback=t),t=ro(e,r,n),t!==null&&(Ou(t,e,n),io(t,e,n))}};function oc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!zr(n,r)||!zr(i,a):!0}function sc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ac.enqueueReplaceState(t,t.state,null)}function cc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=m({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function lc(e){fi(e)}function uc(e){console.error(e)}function dc(e){fi(e)}function fc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function pc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function mc(e,t,n){return n=no(n),n.tag=3,n.payload={element:null},n.callback=function(){fc(e,t)},n}function hc(e){return e=no(e),e.tag=3,e}function gc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){pc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){pc(t,n,r),typeof i!=`function`&&(gu===null?gu=new Set([this]):gu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function _c(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&pa(t,n,a,!0),n=_o.current,n!==null){switch(n.tag){case 31:case 13:return vo===null?Bu():n.alternate===null&&ru===0&&(ru=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ba?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),id(e,r,a)),!1;case 22:return n.flags|=65536,r===Ba?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),id(e,r,a)),!1}throw Error(i(435,n.tag))}return id(e,r,a),Bu(),!1}if(F)return t=_o.current,t===null?(r!==Qi&&(t=Error(i(423),{cause:r}),aa(Pi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Pi(r,n),a=mc(e.stateNode,r,a),ao(e,a),ru!==4&&(ru=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Qi&&(e=Error(i(422),{cause:r}),aa(Pi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Pi(o,n),lu===null?lu=[o]:lu.push(o),ru!==4&&(ru=2),t===null)return!0;r=Pi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=mc(n.stateNode,r,e),ao(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(gu===null||!gu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=hc(a),gc(a,e,n,r),ao(n,a),!1}n=n.return}while(n!==null);return!1}var vc=Error(i(461)),V=!1;function yc(e,t,n,r){t.child=e===null?Qa(t,null,n,r):Za(t,e.child,n,r)}function bc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ha(t),r=Lo(e,t,n,o,a,i),s=Vo(),e!==null&&!V?(Ho(e,t,i),Wc(e,t,i)):(F&&s&&Ki(t),t.flags|=1,yc(e,t,r,i),t.child)}function xc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Ti(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Sc(e,t,a,r,i)):(e=Oi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Gc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?zr:n,n(o,r)&&e.ref===t.ref)return Wc(e,t,i)}return t.flags|=1,e=Ei(a,r),e.ref=t.ref,e.return=t,t.child=e}function Sc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(zr(a,r)&&e.ref===t.ref)if(V=!1,t.pendingProps=r=a,Gc(e,i))e.flags&131072&&(V=!0);else return t.lanes=e.lanes,Wc(e,t,i)}return Ac(e,t,n,r,i)}function Cc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Tc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Fa(t,a===null?null:a.cachePool),a===null?ho():mo(t,a),xo(t);else return r=t.lanes=536870912,Tc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Fa(t,null),ho(),So(t)):(Fa(t,a.cachePool),mo(t,a),So(t),t.memoizedState=null);return yc(e,t,i,n),t.child}function wc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Tc(e,t,n,r,i){var a=Pa();return a=a===null?null:{parent:Sa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Fa(t,null),ho(),xo(t),e!==null&&pa(e,t,r,!0),t.childLanes=i,null}function Ec(e,t){return t=zc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Dc(e,t,n){return Za(t,e.child,null,n),e=Ec(t,t.pendingProps),e.flags|=2,Co(t),t.memoizedState=null,e}function Oc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(F){if(r.mode===`hidden`)return e=Ec(t,r),t.lanes=536870912,wc(null,e);if(bo(t),(e=P)?(e=bf(e,Zi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Vi===null?null:{id:Hi,overflow:Ui},retryLane:536870912,hydrationErrors:null},n=ji(e),n.return=t,t.child=n,Yi=t,P=null)):e=null,e===null)throw $i(t);return t.lanes=536870912,null}return Ec(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(bo(t),a)if(t.flags&256)t.flags&=-257,t=Dc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(V||pa(e,t,n,!1),a=(n&e.childLanes)!==0,V||a){if(r=q,r!==null&&(s=ct(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,yi(e,s),Ou(r,e,s),vc;Bu(),t=Dc(e,t,n)}else e=o.treeContext,P=wf(s.nextSibling),Yi=t,F=!0,Xi=null,Zi=!1,e!==null&&Ji(t,e),t=Ec(t,r),t.flags|=4096;return t}return e=Ei(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function kc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Ac(e,t,n,r,i){return ha(t),n=Lo(e,t,n,r,void 0,i),r=Vo(),e!==null&&!V?(Ho(e,t,i),Wc(e,t,i)):(F&&r&&Ki(t),t.flags|=1,yc(e,t,n,i),t.child)}function jc(e,t,n,r,i,a){return ha(t),t.updateQueue=null,n=zo(t,r,n,i),Ro(e),r=Vo(),e!==null&&!V?(Ho(e,t,a),Wc(e,t,a)):(F&&r&&Ki(t),t.flags|=1,yc(e,t,n,a),t.child)}function Mc(e,t,n,r,i){if(ha(t),t.stateNode===null){var a=Si,o=n.contextType;typeof o==`object`&&o&&(a=ga(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=ac,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},eo(t),o=n.contextType,a.context=typeof o==`object`&&o?ga(o):Si,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(ic(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&ac.enqueueReplaceState(a,a.state,null),co(t,r,a,i),so(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=cc(n,s);a.props=c;var l=a.context,u=n.contextType;o=Si,typeof u==`object`&&u&&(o=ga(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&sc(t,a,r,o),$a=!1;var f=t.memoizedState;a.state=f,co(t,r,a,i),so(),l=t.memoizedState,s||f!==l||$a?(typeof d==`function`&&(ic(t,n,d,r),l=t.memoizedState),(c=$a||oc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,to(e,t),o=t.memoizedProps,u=cc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Si,typeof l==`object`&&l&&(c=ga(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&sc(t,a,r,c),$a=!1,f=t.memoizedState,a.state=f,co(t,r,a,i),so();var p=t.memoizedState;o!==d||f!==p||$a||e!==null&&e.dependencies!==null&&ma(e.dependencies)?(typeof s==`function`&&(ic(t,n,s,r),p=t.memoizedState),(u=$a||oc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ma(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,kc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Za(t,e.child,null,i),t.child=Za(t,null,n,i)):yc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Wc(e,t,i),e}function Nc(e,t,n,r){return ra(),t.flags|=256,yc(e,t,n,r),t.child}var Pc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Fc(e){return{baseLanes:e,cachePool:Ia()}}function Ic(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=su),e}function Lc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(wo.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(F){if(a?yo(t):So(t),(e=P)?(e=bf(e,Zi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Vi===null?null:{id:Hi,overflow:Ui},retryLane:536870912,hydrationErrors:null},n=ji(e),n.return=t,t.child=n,Yi=t,P=null)):e=null,e===null)throw $i(t);return Sf(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(So(t),a=t.mode,c=zc({mode:`hidden`,children:c},a),r=ki(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Fc(n),r.childLanes=Ic(e,s,n),t.memoizedState=Pc,wc(null,r)):(yo(t),Rc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(yo(t),t.flags&=-257,t=Bc(e,t,n)):t.memoizedState===null?(So(t),c=r.fallback,a=t.mode,r=zc({mode:`visible`,children:r.children},a),c=ki(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Za(t,e.child,null,n),r=t.child,r.memoizedState=Fc(n),r.childLanes=Ic(e,s,n),t.memoizedState=Pc,t=wc(null,r)):(So(t),t.child=e.child,t.flags|=128,t=null);else if(yo(t),Sf(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,aa({value:r,source:null,stack:null}),t=Bc(e,t,n)}else if(V||pa(e,t,n,!1),s=(n&e.childLanes)!==0,V||s){if(s=q,s!==null&&(r=ct(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,yi(e,r),Ou(s,e,r),vc;xf(c)||Bu(),t=Bc(e,t,n)}else xf(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,P=wf(c.nextSibling),Yi=t,F=!0,Xi=null,Zi=!1,e!==null&&Ji(t,e),t=Rc(t,r.children),t.flags|=4096);return t}return a?(So(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=Ei(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=ki(c,a,n,null),c.flags|=2):c=Ei(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,wc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Fc(n):(a=c.cachePool,a===null?a=Ia():(l=Sa._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Ic(e,s,n),t.memoizedState=Pc,wc(e.child,r)):(yo(t),n=e.child,e=n.sibling,n=Ei(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Rc(e,t){return t=zc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function zc(e,t){return e=wi(22,e,null,t),e.lanes=0,e}function Bc(e,t,n){return Za(t,e.child,null,n),e=Rc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Vc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),da(e.return,t,n)}function Hc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Uc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=wo.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,A(wo,o),yc(e,t,r,n),r=F?Ri:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vc(e,n,t);else if(e.tag===19)Vc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&To(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Hc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&To(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Hc(t,!0,n,null,a,r);break;case`together`:Hc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Wc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),iu|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(pa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Ei(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ei(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Gc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&ma(e))):!0}function Kc(e,t,n){switch(t.tag){case 3:_e(t,t.stateNode.containerInfo),la(t,Sa,e.memoizedState.cache),ra();break;case 27:case 5:ye(t);break;case 4:_e(t,t.stateNode.containerInfo);break;case 10:la(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,bo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(yo(t),e=Wc(e,t,n),e===null?null:e.sibling):Lc(e,t,n):(yo(t),t.flags|=128,null);yo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(pa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Uc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),A(wo,wo.current),r)break;return null;case 22:return t.lanes=0,Cc(e,t,n,t.pendingProps);case 24:la(t,Sa,e.memoizedState.cache)}return Wc(e,t,n)}function qc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)V=!0;else{if(!Gc(e,n)&&!(t.flags&128))return V=!1,Kc(e,t,n);V=!!(e.flags&131072)}else V=!1,F&&t.flags&1048576&&Gi(t,Ri,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ua(t.elementType),t.type=e,typeof e==`function`)Ti(e)?(r=cc(e,r),t.tag=1,t=Mc(null,t,e,r,n)):(t.tag=0,t=Ac(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=bc(null,t,e,r,n);break a}else if(a===ne){t.tag=14,t=xc(null,t,e,r,n);break a}}throw t=ce(e)||e,Error(i(306,t,``))}}return t;case 0:return Ac(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=cc(r,t.pendingProps),Mc(e,t,r,a,n);case 3:a:{if(_e(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,to(e,t),co(t,r,null,n);var s=t.memoizedState;if(r=s.cache,la(t,Sa,r),r!==o.cache&&fa(t,[Sa],n,!0),so(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Nc(e,t,r,n);break a}else if(r!==a){a=Pi(Error(i(424)),t),aa(a),t=Nc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(P=wf(e.firstChild),Yi=t,F=!0,Xi=null,Zi=!0,n=Qa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ra(),r===a){t=Wc(e,t,n);break a}yc(e,t,r,n)}t=t.child}return t;case 26:return kc(e,t),e===null?(n=Gf(t.type,null,t.pendingProps,null))?t.memoizedState=n:F||(n=t.type,e=t.pendingProps,r=tf(he.current).createElement(n),r[mt]=t,r[ht]=e,Yd(r,n,e),Dt(r),t.stateNode=r):t.memoizedState=Gf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ye(t),e===null&&F&&(r=t.stateNode=Of(t.type,t.pendingProps,he.current),Yi=t,Zi=!0,a=P,mf(t.type)?(Tf=a,P=wf(r.firstChild)):P=a),yc(e,t,t.pendingProps.children,n),kc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&F&&((a=r=P)&&(r=vf(r,t.type,t.pendingProps,Zi),r===null?a=!1:(t.stateNode=r,Yi=t,P=wf(r.firstChild),Zi=!1,a=!0)),a||$i(t)),ye(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,af(a,o)?r=null:s!==null&&af(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Lo(e,t,Bo,null,null,n),mp._currentValue=a),kc(e,t),yc(e,t,r,n),t.child;case 6:return e===null&&F&&((e=n=P)&&(n=yf(n,t.pendingProps,Zi),n===null?e=!1:(t.stateNode=n,Yi=t,P=null,e=!0)),e||$i(t)),null;case 13:return Lc(e,t,n);case 4:return _e(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Za(t,null,r,n):yc(e,t,r,n),t.child;case 11:return bc(e,t,t.type,t.pendingProps,n);case 7:return yc(e,t,t.pendingProps,n),t.child;case 8:return yc(e,t,t.pendingProps.children,n),t.child;case 12:return yc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,la(t,t.type,r.value),yc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ha(t),a=ga(a),r=r(a),t.flags|=1,yc(e,t,r,n),t.child;case 14:return xc(e,t,t.type,t.pendingProps,n);case 15:return Sc(e,t,t.type,t.pendingProps,n);case 19:return Uc(e,t,n);case 31:return Oc(e,t,n);case 22:return Cc(e,t,n,t.pendingProps);case 24:return ha(t),r=ga(Sa),e===null?(a=Pa(),a===null&&(a=q,o=Ca(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},eo(t),la(t,Sa,a)):((e.lanes&n)!==0&&(to(e,t),co(t,null,null,n),so()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,la(t,Sa,r),r!==a.cache&&fa(t,[Sa],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),la(t,Sa,r))),yc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Jc(e){e.flags|=4}function Yc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Lu())e.flags|=8192;else throw Wa=Ba,Ra}else e.flags&=-16777217}function Xc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!op(t))if(Lu())e.flags|=8192;else throw Wa=Ba,Ra}function Zc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:nt(),e.lanes|=t,cu|=t)}function Qc(e,t){if(!F)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function H(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function $c(e,t,n){var r=t.pendingProps;switch(qi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return H(t),null;case 1:return H(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ua(Sa),ve(),n.pendingContext&&=(n.context=n.pendingContext,null),(e===null||e.child===null)&&(na(t)?Jc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ia())),H(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Jc(t),o===null?(H(t),Yc(t,a,null,r,n)):(H(t),Xc(t,o))):o?o===e.memoizedState?(H(t),t.flags&=-16777217):(Jc(t),H(t),Xc(t,o)):(e=e.memoizedProps,e!==r&&Jc(t),H(t),Yc(t,a,e,r,n)),null;case 27:if(be(t),n=he.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Jc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),null}e=pe.current,na(t)?ea(t,e):(e=Of(a,r,n),t.stateNode=e,Jc(t))}return H(t),null;case 5:if(be(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Jc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),null}if(o=pe.current,na(t))ea(t,o);else{var s=tf(he.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[mt]=t,o[ht]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Yd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Jc(t)}}return H(t),Yc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Jc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=he.current,na(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Yi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[mt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||qd(e.nodeValue,n)),e||$i(t,!0)}else e=tf(e).createTextNode(r),e[mt]=t,t.stateNode=e}return H(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=na(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[mt]=t}else ra(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),e=!1}else n=ia(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Co(t),t):(Co(t),null);if(t.flags&128)throw Error(i(558))}return H(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=na(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[mt]=t}else ra(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),a=!1}else a=ia(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Co(t),t):(Co(t),null)}return Co(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Zc(t,t.updateQueue),H(t),null);case 4:return ve(),e===null&&Ld(t.stateNode.containerInfo),H(t),null;case 10:return ua(t.type),H(t),null;case 19:if(fe(wo),r=t.memoizedState,r===null)return H(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Qc(r,!1);else{if(ru!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=To(e),o!==null){for(t.flags|=128,Qc(r,!1),e=o.updateQueue,t.updateQueue=e,Zc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Di(n,e),n=n.sibling;return A(wo,wo.current&1|2),F&&Wi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ne()>mu&&(t.flags|=128,a=!0,Qc(r,!1),t.lanes=4194304)}else{if(!a)if(e=To(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Zc(t,e),Qc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!F)return H(t),null}else 2*Ne()-r.renderingStartTime>mu&&n!==536870912&&(t.flags|=128,a=!0,Qc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(H(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ne(),e.sibling=null,n=wo.current,A(wo,a?n&1|2:n&1),F&&Wi(t,r.treeForkCount),e);case 22:case 23:return Co(t),go(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(H(t),t.subtreeFlags&6&&(t.flags|=8192)):H(t),n=t.updateQueue,n!==null&&Zc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&fe(Na),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ua(Sa),H(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function el(e,t){switch(qi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ua(Sa),ve(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return be(t),null;case 31:if(t.memoizedState!==null){if(Co(t),t.alternate===null)throw Error(i(340));ra()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Co(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));ra()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(wo),null;case 4:return ve(),null;case 10:return ua(t.type),null;case 22:case 23:return Co(t),go(),e!==null&&fe(Na),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ua(Sa),null;case 25:return null;default:return null}}function tl(e,t){switch(qi(t),t.tag){case 3:ua(Sa),ve();break;case 26:case 27:case 5:be(t);break;case 4:ve();break;case 31:t.memoizedState!==null&&Co(t);break;case 13:Co(t);break;case 19:fe(wo);break;case 10:ua(t.type);break;case 22:case 23:Co(t),go(),e!==null&&fe(Na);break;case 24:ua(Sa)}}function nl(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function rl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function il(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{uo(t,n)}catch(t){Z(e,e.return,t)}}}function al(e,t,n){n.props=cc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function ol(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function sl(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function cl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function ll(e,t,n){try{var r=e.stateNode;Xd(r,e.type,n,t),r[ht]=t}catch(t){Z(e,e.return,t)}}function ul(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&mf(e.type)||e.tag===4}function dl(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||ul(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&mf(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cn));else if(r!==4&&(r===27&&mf(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(fl(e,t,n),e=e.sibling;e!==null;)fl(e,t,n),e=e.sibling}function pl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&mf(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(pl(e,t,n),e=e.sibling;e!==null;)pl(e,t,n),e=e.sibling}function ml(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Yd(t,r,n),t[mt]=e,t[ht]=n}catch(t){Z(e,e.return,t)}}var hl=!1,gl=!1,_l=!1,vl=typeof WeakSet==`function`?WeakSet:Set,yl=null;function bl(e,t){if(e=e.containerInfo,$d=Cp,e=Ur(e),Wr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(ef={focusedElem:e,selectionRange:n},Cp=!1,yl=t;yl!==null;)if(t=yl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,yl=e;else for(;yl!==null;){switch(t=yl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=cc(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)_f(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:_f(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,yl=e;break}yl=t.return}}function xl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Nl(e,n),r&4&&nl(5,n);break;case 1:if(Nl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=cc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&il(n),r&512&&ol(n,n.return);break;case 3:if(Nl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{uo(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&ml(n);case 26:case 5:Nl(e,n),t===null&&r&4&&cl(n),r&512&&ol(n,n.return);break;case 12:Nl(e,n);break;case 31:Nl(e,n),r&4&&Tl(e,n);break;case 13:Nl(e,n),r&4&&El(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=sd.bind(null,n),Cf(e,n))));break;case 22:if(r=n.memoizedState!==null||hl,!r){t=t!==null&&t.memoizedState!==null||gl,i=hl;var a=gl;hl=r,(gl=t)&&!a?Fl(e,n,(n.subtreeFlags&8772)!=0):Nl(e,n),hl=i,gl=a}break;case 30:break;default:Nl(e,n)}}function Sl(e){var t=e.alternate;t!==null&&(e.alternate=null,Sl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&St(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,W=!1;function Cl(e,t,n){for(n=n.child;n!==null;)wl(e,t,n),n=n.sibling}function wl(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount==`function`)try{Ue.onCommitFiberUnmount(He,n)}catch{}switch(n.tag){case 26:gl||sl(n,t),Cl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:gl||sl(n,t);var r=U,i=W;mf(n.type)&&(U=n.stateNode,W=!1),Cl(e,t,n),kf(n.stateNode),U=r,W=i;break;case 5:gl||sl(n,t);case 6:if(r=U,i=W,U=null,Cl(e,t,n),U=r,W=i,U!==null)if(W)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:U!==null&&(W?(e=U,hf(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Yp(e)):hf(U,n.stateNode));break;case 4:r=U,i=W,U=n.stateNode.containerInfo,W=!0,Cl(e,t,n),U=r,W=i;break;case 0:case 11:case 14:case 15:rl(2,n,t),gl||rl(4,n,t),Cl(e,t,n);break;case 1:gl||(sl(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&al(n,t,r)),Cl(e,t,n);break;case 21:Cl(e,t,n);break;case 22:gl=(r=gl)||n.memoizedState!==null,Cl(e,t,n),gl=r;break;default:Cl(e,t,n)}}function Tl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Yp(e)}catch(e){Z(t,t.return,e)}}}function El(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Yp(e)}catch(e){Z(t,t.return,e)}}function Dl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new vl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new vl),t;default:throw Error(i(435,e.tag))}}function Ol(e,t){var n=Dl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=cd.bind(null,e,t);t.then(r,r)}})}function kl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(mf(c.type)){U=c.stateNode,W=!1;break a}break;case 5:U=c.stateNode,W=!1;break a;case 3:case 4:U=c.stateNode.containerInfo,W=!0;break a}c=c.return}if(U===null)throw Error(i(160));wl(o,s,a),U=null,W=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)jl(t,e),t=t.sibling}var Al=null;function jl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:kl(t,e),Ml(e),r&4&&(rl(3,e,e.return),nl(3,e),rl(5,e,e.return));break;case 1:kl(t,e),Ml(e),r&512&&(gl||n===null||sl(n,n.return)),r&64&&hl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=Al;if(kl(t,e),Ml(e),r&512&&(gl||n===null||sl(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[xt]||o[mt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Yd(o,r,n),o[mt]=e,Dt(o),r=o;break a;case`link`:var s=rp(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Yd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=rp(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Yd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[mt]=e,Dt(o),r=o}e.stateNode=r}else ip(a,e.type,e.stateNode);else e.stateNode=Qf(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&ll(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?ip(a,e.type,e.stateNode):Qf(a,r,e.memoizedProps))}break;case 27:kl(t,e),Ml(e),r&512&&(gl||n===null||sl(n,n.return)),n!==null&&r&4&&ll(e,e.memoizedProps,n.memoizedProps);break;case 5:if(kl(t,e),Ml(e),r&512&&(gl||n===null||sl(n,n.return)),e.flags&32){a=e.stateNode;try{$t(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,ll(e,a,n===null?a:n.memoizedProps)),r&1024&&(_l=!0);break;case 6:if(kl(t,e),Ml(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(np=null,a=Al,Al=Mf(t.containerInfo),kl(t,e),Al=a,Ml(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yp(t.containerInfo)}catch(t){Z(e,e.return,t)}_l&&(_l=!1,G(e));break;case 4:r=Al,Al=Mf(e.stateNode.containerInfo),kl(t,e),Ml(e),Al=r;break;case 12:kl(t,e),Ml(e);break;case 31:kl(t,e),Ml(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ol(e,r)));break;case 13:kl(t,e),Ml(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(fu=Ne()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ol(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=hl,d=gl;if(hl=u||a,gl=d||l,kl(t,e),gl=d,hl=u,Ml(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||hl||gl||Pl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?gf(m,!0):gf(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,Ol(e,n))));break;case 19:kl(t,e),Ml(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ol(e,r)));break;case 30:break;case 21:break;default:kl(t,e),Ml(e)}}function Ml(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(ul(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode,o=dl(e);pl(e,o,a);break;case 5:var s=n.stateNode;n.flags&32&&($t(s,``),n.flags&=-33);var c=dl(e);pl(e,c,s);break;case 3:case 4:var l=n.stateNode.containerInfo,u=dl(e);fl(e,u,l);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function G(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;G(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Nl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)xl(e,t.alternate,t),t=t.sibling}function Pl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:rl(4,t,t.return),Pl(t);break;case 1:sl(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&al(t,t.return,n),Pl(t);break;case 27:kf(t.stateNode);case 26:case 5:sl(t,t.return),Pl(t);break;case 22:t.memoizedState===null&&Pl(t);break;case 30:Pl(t);break;default:Pl(t)}e=e.sibling}}function Fl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Fl(i,a,n),nl(4,a);break;case 1:if(Fl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)lo(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&il(a),ol(a,a.return);break;case 27:ml(a);case 26:case 5:Fl(i,a,n),n&&r===null&&o&4&&cl(a),ol(a,a.return);break;case 12:Fl(i,a,n);break;case 31:Fl(i,a,n),n&&o&4&&Tl(i,a);break;case 13:Fl(i,a,n),n&&o&4&&El(i,a);break;case 22:a.memoizedState===null&&Fl(i,a,n),ol(a,a.return);break;case 30:break;default:Fl(i,a,n)}t=t.sibling}}function Il(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&wa(n))}function Ll(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&wa(e))}function Rl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)zl(e,t,n,r),t=t.sibling}function zl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Rl(e,t,n,r),i&2048&&nl(9,t);break;case 1:Rl(e,t,n,r);break;case 3:Rl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&wa(e)));break;case 12:if(i&2048){Rl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Rl(e,t,n,r);break;case 31:Rl(e,t,n,r);break;case 13:Rl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Rl(e,t,n,r):(a._visibility|=2,Bl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Rl(e,t,n,r):Vl(e,t),i&2048&&Il(o,t);break;case 24:Rl(e,t,n,r),i&2048&&Ll(t.alternate,t);break;default:Rl(e,t,n,r)}}function Bl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Bl(a,o,s,c,i),nl(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Bl(a,o,s,c,i)):u._visibility&2?Bl(a,o,s,c,i):Vl(a,o),i&&l&2048&&Il(o.alternate,o);break;case 24:Bl(a,o,s,c,i),i&&l&2048&&Ll(o.alternate,o);break;default:Bl(a,o,s,c,i)}t=t.sibling}}function Vl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Vl(n,r),i&2048&&Il(r.alternate,r);break;case 24:Vl(n,r),i&2048&&Ll(r.alternate,r);break;default:Vl(n,r)}t=t.sibling}}var Hl=8192;function Ul(e,t,n){if(e.subtreeFlags&Hl)for(e=e.child;e!==null;)Wl(e,t,n),e=e.sibling}function Wl(e,t,n){switch(e.tag){case 26:Ul(e,t,n),e.flags&Hl&&e.memoizedState!==null&&sp(n,Al,e.memoizedState,e.memoizedProps);break;case 5:Ul(e,t,n);break;case 3:case 4:var r=Al;Al=Mf(e.stateNode.containerInfo),Ul(e,t,n),Al=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Hl,Hl=16777216,Ul(e,t,n),Hl=r):Ul(e,t,n));break;default:Ul(e,t,n)}}function Gl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Kl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];yl=r,Yl(r,e)}Gl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ql(e),e=e.sibling}function ql(e){switch(e.tag){case 0:case 11:case 15:Kl(e),e.flags&2048&&rl(9,e,e.return);break;case 3:Kl(e);break;case 12:Kl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Jl(e)):Kl(e);break;default:Kl(e)}}function Jl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];yl=r,Yl(r,e)}Gl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:rl(8,t,t.return),Jl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Jl(t));break;default:Jl(t)}e=e.sibling}}function Yl(e,t){for(;yl!==null;){var n=yl;switch(n.tag){case 0:case 11:case 15:rl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:wa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,yl=r;else a:for(n=e;yl!==null;){r=yl;var i=r.sibling,a=r.return;if(Sl(r),r===n){yl=null;break a}if(i!==null){i.return=a,yl=i;break a}yl=a}}}var Xl={getCacheForType:function(e){var t=ga(Sa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ga(Sa).controller.signal}},Zl=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,Ql=null,$l=!1,eu=!1,tu=!1,nu=0,ru=0,iu=0,au=0,ou=0,su=0,cu=0,lu=null,uu=null,du=!1,fu=0,pu=0,mu=1/0,hu=null,gu=null,_u=0,vu=null,yu=null,bu=0,xu=0,Su=null,Cu=null,wu=0,Tu=null;function Eu(){return K&2&&Y!==0?Y&-Y:E.T===null?dt():wd()}function Du(){if(su===0)if(!(Y&536870912)||F){var e=Xe;Xe<<=1,!(Xe&3932160)&&(Xe=262144),su=e}else su=536870912;return e=_o.current,e!==null&&(e.flags|=32),su}function Ou(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Fu(e,0),Mu(e,Y,su,!1)),it(e,n),(!(K&2)||e!==q)&&(e===q&&(!(K&2)&&(au|=n),ru===4&&Mu(e,Y,su,!1)),gd(e))}function ku(e,t,n){if(K&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||et(e,t),a=r?Uu(e,t):Vu(e,t,!0),o=r;do{if(a===0){eu&&!r&&Mu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!ju(n)){a=Vu(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=lu;var l=c.current.memoizedState.isDehydrated;if(l&&(Fu(c,s).flags|=256),s=Vu(c,s,!1),s!==2){if(tu&&!l){c.errorRecoveryDisabledLanes|=o,au|=o,a=4;break a}o=uu,uu=a,o!==null&&(uu===null?uu=o:uu.push.apply(uu,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Fu(e,0),Mu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:Mu(r,t,su,!$l);break a;case 2:uu=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=fu+300-Ne(),10<a)){if(Mu(r,t,su,!$l),$e(r,0,!0)!==0)break a;bu=t,r.timeoutHandle=lf(Au.bind(null,r,n,uu,hu,du,t,su,au,cu,$l,o,`Throttled`,-0,0),a);break a}Au(r,n,uu,hu,du,t,su,au,cu,$l,o,null,-0,0)}}break}while(1);gd(e)}function Au(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:cn},Wl(t,a,d);var m=(a&62914560)===a?fu-Ne():(a&4194048)===a?pu-Ne():0;if(m=lp(d,m),m!==null){bu=a,e.cancelPendingCommit=m(Xu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),Mu(e,a,o,!l);return}}Xu(e,t,a,n,r,i,o,s,c)}function ju(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Rr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mu(e,t,n,r){t&=~ou,t&=~au,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ge(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ot(e,n,t)}function Nu(){return K&6?!0:(_d(0,!1),!1)}function Pu(){if(J!==null){if(X===0)var e=J.return;else e=J,ca=sa=null,Uo(e),I=null,qa=0,e=J;for(;e!==null;)tl(e.alternate,e),e=e.return;J=null}}function Fu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,uf(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),bu=0,Pu(),q=e,J=n=Ei(e.current,null),Y=t,X=0,Ql=null,$l=!1,eu=et(e,t),tu=!1,cu=su=ou=au=iu=ru=0,uu=lu=null,du=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ge(r),a=1<<i;t|=e[i],r&=~a}return nu=t,gi(),n}function Iu(e,t){R=null,E.H=ec,t===La||t===za?(t=Ga(),X=3):t===Ra?(t=Ga(),X=4):X=t===vc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Ql=t,J===null&&(ru=1,fc(e,Pi(t,e.current)))}function Lu(){var e=_o.current;return e===null?!0:(Y&4194048)===Y?vo===null:(Y&62914560)===Y||Y&536870912?e===vo:!1}function Ru(){var e=E.H;return E.H=ec,e===null?ec:e}function zu(){var e=E.A;return E.A=Xl,e}function Bu(){ru=4,$l||(Y&4194048)!==Y&&_o.current!==null||(eu=!0),!(iu&134217727)&&!(au&134217727)||q===null||Mu(q,Y,su,!1)}function Vu(e,t,n){var r=K;K|=2;var i=Ru(),a=zu();(q!==e||Y!==t)&&(hu=null,Fu(e,t)),t=!1;var o=ru;a:do try{if(X!==0&&J!==null){var s=J,c=Ql;switch(X){case 8:Pu(),o=6;break a;case 3:case 2:case 9:case 6:_o.current===null&&(t=!0);var l=X;if(X=0,Ql=null,qu(e,s,c,l),n&&eu){o=0;break a}break;default:l=X,X=0,Ql=null,qu(e,s,c,l)}}Hu(),o=ru;break}catch(t){Iu(e,t)}while(1);return t&&e.shellSuspendCounter++,ca=sa=null,K=r,E.H=i,E.A=a,J===null&&(q=null,Y=0,gi()),o}function Hu(){for(;J!==null;)Gu(J)}function Uu(e,t){var n=K;K|=2;var r=Ru(),a=zu();q!==e||Y!==t?(hu=null,mu=Ne()+500,Fu(e,t)):eu=et(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=Ql;b:switch(X){case 1:X=0,Ql=null,qu(e,t,o,1);break;case 2:case 9:if(Va(o)){X=0,Ql=null,Ku(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),gd(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:Va(o)?(X=0,Ql=null,Ku(t)):(X=0,Ql=null,qu(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?op(s):c.stateNode.complete){X=0,Ql=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Ju(u))}break b}}X=0,Ql=null,qu(e,t,o,5);break;case 6:X=0,Ql=null,qu(e,t,o,6);break;case 8:Pu(),ru=6;break a;default:throw Error(i(462))}}Wu();break}catch(t){Iu(e,t)}while(1);return ca=sa=null,E.H=r,E.A=a,K=n,J===null?(q=null,Y=0,gi(),ru):0}function Wu(){for(;J!==null&&!je();)Gu(J)}function Gu(e){var t=qc(e.alternate,e,nu);e.memoizedProps=e.pendingProps,t===null?Ju(e):J=t}function Ku(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=jc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=jc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:Uo(t);default:tl(n,t),t=J=Di(t,nu),t=qc(n,t,nu)}e.memoizedProps=e.pendingProps,t===null?Ju(e):J=t}function qu(e,t,n,r){ca=sa=null,Uo(t),I=null,qa=0;var i=t.return;try{if(_c(e,i,t,n,Y)){ru=1,fc(e,Pi(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;ru=1,fc(e,Pi(n,e.current)),J=null;return}t.flags&32768?(F||r===1?e=!0:eu||Y&536870912?e=!1:($l=e=!0,(r===2||r===9||r===3||r===6)&&(r=_o.current,r!==null&&r.tag===13&&(r.flags|=16384))),Yu(t,e)):Ju(t)}function Ju(e){var t=e;do{if(t.flags&32768){Yu(t,$l);return}e=t.return;var n=$c(t.alternate,t,nu);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);ru===0&&(ru=5)}function Yu(e,t){do{var n=el(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);ru=6,J=null}function Xu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do td();while(_u!==0);if(K&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=hi,at(e,n,o,s,c,l),e===q&&(J=q=null,Y=0),yu=t,vu=e,bu=n,xu=o,Su=a,Cu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,ld(Le,function(){return nd(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=E.T,E.T=null,a=D.p,D.p=2,s=K,K|=4;try{bl(e,t,n)}finally{K=s,D.p=a,E.T=r}}_u=1,Zu(),Qu(),$u()}}function Zu(){if(_u===1){_u=0;var e=vu,t=yu,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=K;K|=4;try{jl(t,e);var a=ef,o=Ur(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Hr(s.ownerDocument.documentElement,s)){if(c!==null&&Wr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Vr(s,h),v=Vr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}Cp=!!$d,ef=$d=null}finally{K=i,D.p=r,E.T=n}}e.current=t,_u=2}}function Qu(){if(_u===2){_u=0;var e=vu,t=yu,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=K;K|=4;try{xl(e,t.alternate,t)}finally{K=i,D.p=r,E.T=n}}_u=3}}function $u(){if(_u===4||_u===3){_u=0,Me();var e=vu,t=yu,n=bu,r=Cu;t.subtreeFlags&10256||t.flags&10256?_u=5:(_u=0,yu=vu=null,ed(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(gu=null),ut(n),t=t.stateNode,Ue&&typeof Ue.onCommitFiberRoot==`function`)try{Ue.onCommitFiberRoot(He,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=E.T,i=D.p,D.p=2,E.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{E.T=t,D.p=i}}bu&3&&td(),gd(e),i=e.pendingLanes,n&261930&&i&42?e===Tu?wu++:(wu=0,Tu=e):wu=0,_d(0,!1)}}function ed(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,wa(t)))}function td(){return Zu(),Qu(),$u(),nd()}function nd(){if(_u!==5)return!1;var e=vu,t=xu;xu=0;var n=ut(bu),r=E.T,a=D.p;try{D.p=32>n?32:n,E.T=null,n=Su,Su=null;var o=vu,s=bu;if(_u=0,yu=vu=null,bu=0,K&6)throw Error(i(331));var c=K;if(K|=4,ql(o.current),zl(o,o.current,s,n),K=c,_d(0,!1),Ue&&typeof Ue.onPostCommitFiberRoot==`function`)try{Ue.onPostCommitFiberRoot(He,o)}catch{}return!0}finally{D.p=a,E.T=r,ed(e,t)}}function rd(e,t,n){t=Pi(n,t),t=mc(e.stateNode,t,2),e=ro(e,t,2),e!==null&&(it(e,2),gd(e))}function Z(e,t,n){if(e.tag===3)rd(e,e,n);else for(;t!==null;){if(t.tag===3){rd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(gu===null||!gu.has(r))){e=Pi(n,e),n=hc(2),r=ro(t,n,2),r!==null&&(gc(n,r,t,e),it(r,2),gd(r));break}}t=t.return}}function id(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(tu=!0,i.add(n),e=ad.bind(null,e,t,n),t.then(e,e))}function ad(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(ru===4||ru===3&&(Y&62914560)===Y&&300>Ne()-fu?!(K&2)&&Fu(e,0):ou|=n,cu===Y&&(cu=0)),gd(e)}function od(e,t){t===0&&(t=nt()),e=yi(e,t),e!==null&&(it(e,t),gd(e))}function sd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),od(e,n)}function cd(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),od(e,n)}function ld(e,t){return ke(e,t)}var ud=null,dd=null,fd=!1,pd=!1,md=!1,hd=0;function gd(e){e!==dd&&e.next===null&&(dd===null?ud=dd=e:dd=dd.next=e),pd=!0,fd||(fd=!0,Cd())}function _d(e,t){if(!md&&pd){md=!0;do for(var n=!1,r=ud;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ge(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Sd(r,a))}else a=Y,a=$e(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||et(r,a)||(n=!0,Sd(r,a));r=r.next}while(n);md=!1}}function vd(){yd()}function yd(){pd=fd=!1;var e=0;hd!==0&&cf()&&(e=hd);for(var t=Ne(),n=null,r=ud;r!==null;){var i=r.next,a=bd(r,t);a===0?(r.next=null,n===null?ud=i:n.next=i,i===null&&(dd=n)):(n=r,(e!==0||a&3)&&(pd=!0)),r=i}_u!==0&&_u!==5||_d(e,!1),hd!==0&&(hd=0)}function bd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ge(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=tt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=$e(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ae(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||et(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ae(r),ut(n)){case 2:case 8:n=Ie;break;case 32:n=Le;break;case 268435456:n=ze;break;default:n=Le}return r=xd.bind(null,e),n=ke(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ae(r),e.callbackPriority=2,e.callbackNode=null,2}function xd(e,t){if(_u!==0&&_u!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(td()&&e.callbackNode!==n)return null;var r=Y;return r=$e(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(ku(e,r,t),bd(e,Ne()),e.callbackNode!=null&&e.callbackNode===n?xd.bind(null,e):null)}function Sd(e,t){if(td())return null;ku(e,t,!0)}function Cd(){ff(function(){K&6?ke(Fe,vd):yd()})}function wd(){if(hd===0){var e=Da;e===0&&(e=Ye,Ye<<=1,!(Ye&261888)&&(Ye=256)),hd=e}return hd}function Td(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:sn(``+e)}function Ed(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Dd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Td((i[ht]||null).action),o=r.submitter;o&&(t=(t=o[ht]||null)?Td(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new kn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(hd!==0){var e=o?Ed(i,o):new FormData(i);Vs(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?Ed(i,o):new FormData(i),Vs(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Od=0;Od<ui.length;Od++){var kd=ui[Od],Ad=kd.toLowerCase(),jd=kd[0].toUpperCase()+kd.slice(1);di(Ad,`on`+jd)}di(ni,`onAnimationEnd`),di(ri,`onAnimationIteration`),di(ii,`onAnimationStart`),di(`dblclick`,`onDoubleClick`),di(`focusin`,`onFocus`),di(`focusout`,`onBlur`),di(ai,`onTransitionRun`),di(oi,`onTransitionStart`),di(si,`onTransitionCancel`),di(ci,`onTransitionEnd`),jt(`onMouseEnter`,[`mouseout`,`mouseover`]),jt(`onMouseLeave`,[`mouseout`,`mouseover`]),jt(`onPointerEnter`,[`pointerout`,`pointerover`]),jt(`onPointerLeave`,[`pointerout`,`pointerover`]),At(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),At(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),At(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),At(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var Md=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Nd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(Md));function Pd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){fi(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){fi(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[_t];n===void 0&&(n=t[_t]=new Set);var r=e+`__bubble`;n.has(r)||(Rd(t,e,2,!1),n.add(r))}function Fd(e,t,n){var r=0;t&&(r|=4),Rd(n,e,r,t)}var Id=`_reactListening`+Math.random().toString(36).slice(2);function Ld(e){if(!e[Id]){e[Id]=!0,Ot.forEach(function(t){t!==`selectionchange`&&(Nd.has(t)||Fd(t,!1,e),Fd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Id]||(t[Id]=!0,Fd(`selectionchange`,!1,t))}}function Rd(e,t,n,r){switch(Ap(t)){case 2:var i=wp;break;case 8:i=Tp;break;default:i=Ep}n=i.bind(null,t,n,e),i=void 0,!vn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function zd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Ct(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}hn(function(){var r=a,i=un(n),s=[];a:{var c=li.get(e);if(c!==void 0){var l=kn,u=e;switch(e){case`keypress`:if(wn(n)===0)break a;case`keydown`:case`keyup`:l=Xn;break;case`focusin`:u=`focus`,l=Bn;break;case`focusout`:u=`blur`,l=Bn;break;case`beforeblur`:case`afterblur`:l=Bn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=In;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Rn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=er;break;case ni:case ri:case ii:l=Vn;break;case ci:l=nr;break;case`scroll`:case`scrollend`:l=jn;break;case`wheel`:l=ir;break;case`copy`:case`cut`:case`paste`:l=M;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Qn;break;case`toggle`:case`beforetoggle`:l=or}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=gn(m,p),g!=null&&d.push(Bd(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==ln&&(u=n.relatedTarget||n.fromElement)&&(Ct(u)||u[gt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Ct(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=In,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Qn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Tt(l),h=u==null?c:Tt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Ct(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Hd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Ud(s,c,l,d,!1),u!==null&&f!==null&&Ud(s,f,u,d,!0)}}a:{if(c=r?Tt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=Er;else if(br(c))if(Dr)v=Ir;else{v=Pr;var y=Nr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&rn(r.elementType)&&(v=Er):v=Fr;if(v&&=v(e,r)){xr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Yt(c,`number`,c.value)}switch(y=r?Tt(r):window,e){case`focusin`:(br(y)||y.contentEditable===`true`)&&(Kr=y,qr=r,Jr=null);break;case`focusout`:Jr=qr=Kr=null;break;case`mousedown`:Yr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Yr=!1,Xr(s,n,i);break;case`selectionchange`:if(Gr)break;case`keydown`:case`keyup`:Xr(s,n,i)}var b;if(cr)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else gr?mr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(dr&&n.locale!==`ko`&&(gr||x!==`onCompositionStart`?x===`onCompositionEnd`&&gr&&(b=Cn()):(bn=i,xn=`value`in bn?bn.value:bn.textContent,gr=!0)),y=Vd(r,x),0<y.length&&(x=new Wn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=hr(n),b!==null&&(x.data=b)))),(b=ur?_r(e,n):vr(e,n))&&(x=Vd(r,`onBeforeInput`),0<x.length&&(y=new Wn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),Dd(s,e,r,n,i)}Pd(s,t)})}function Bd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vd(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=gn(e,n),i!=null&&r.unshift(Bd(e,i,a)),i=gn(e,t),i!=null&&r.push(Bd(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Hd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ud(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=gn(n,a),l!=null&&o.unshift(Bd(n,l,c))):i||(l=gn(n,a),l!=null&&o.push(Bd(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Wd=/\r\n?/g,Gd=/\u0000|\uFFFD/g;function Kd(e){return(typeof e==`string`?e:``+e).replace(Wd,`
`).replace(Gd,``)}function qd(e,t){return t=Kd(t),Kd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||$t(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&$t(e,``+r);break;case`className`:Lt(e,`class`,r);break;case`tabIndex`:Lt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Lt(e,n,r);break;case`style`:nn(e,r,o);break;case`data`:if(t!==`object`){Lt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=sn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=sn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=cn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=sn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),It(e,`popover`,r);break;case`xlinkActuate`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:It(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=an.get(n)||n,It(e,n,r))}}function Jd(e,t,n,r,a,o){switch(n){case`style`:nn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?$t(e,r):(typeof r==`number`||typeof r==`bigint`)&&$t(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=cn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!kt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[ht]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):It(e,n,r)}}}function Yd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Jt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Xt(e,!!r,n,!0):Xt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Qt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<Md.length;r++)Q(Md[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(rn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Jd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Xd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}qt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Xt(e,!!n,n?[]:``,!1):Xt(e,!!n,t,!0)):Xt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Zt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(rn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Jd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Jd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Zd(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Qd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Zd(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Zd(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var $d=null,ef=null;function tf(e){return e.nodeType===9?e:e.ownerDocument}function nf(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function rf(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function af(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var sf=null;function cf(){var e=window.event;return e&&e.type===`popstate`?e===sf?!1:(sf=e,!0):(sf=null,!1)}var lf=typeof setTimeout==`function`?setTimeout:void 0,uf=typeof clearTimeout==`function`?clearTimeout:void 0,df=typeof Promise==`function`?Promise:void 0,ff=typeof queueMicrotask==`function`?queueMicrotask:df===void 0?lf:function(e){return df.resolve(null).then(e).catch(pf)};function pf(e){setTimeout(function(){throw e})}function mf(e){return e===`head`}function hf(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Yp(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)kf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,kf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[xt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&kf(e.ownerDocument.body);n=i}while(n);Yp(t)}function gf(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function _f(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:_f(n),St(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function vf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(r){if(!e[xt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}}else if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;if(e=wf(e.nextSibling),e===null)break}return null}function yf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=wf(e.nextSibling),e===null))return null;return e}function bf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=wf(e.nextSibling),e===null))return null;return e}function xf(e){return e.data===`$?`||e.data===`$~`}function Sf(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function Cf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function wf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var Tf=null;function Ef(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return wf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function Df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function Of(e,t,n){switch(t=tf(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function kf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);St(e)}var Af=new Map,jf=new Set;function Mf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Nf=D.d;D.d={f:Pf,r:Ff,D:Rf,C:zf,L:Bf,m:Vf,X:Uf,S:Hf,M:Wf};function Pf(){var e=Nf.f(),t=Nu();return e||t}function Ff(e){var t=wt(e);t!==null&&t.tag===5&&t.type===`form`?Us(t):Nf.r(e)}var If=typeof document>`u`?null:document;function Lf(e,t,n){var r=If;if(r&&typeof t==`string`&&t){var i=Kt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),jf.has(i)||(jf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Yd(t,`link`,e),Dt(t),r.head.appendChild(t)))}}function Rf(e){Nf.D(e),Lf(`dns-prefetch`,e,null)}function zf(e,t){Nf.C(e,t),Lf(`preconnect`,e,t)}function Bf(e,t,n){Nf.L(e,t,n);var r=If;if(r&&e&&t){var i=`link[rel="preload"][as="`+Kt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Kt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Kt(n.imageSizes)+`"]`)):i+=`[href="`+Kt(e)+`"]`;var a=i;switch(t){case`style`:a=Kf(e);break;case`script`:a=Xf(e)}Af.has(a)||(e=m({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),Af.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(qf(a))||t===`script`&&r.querySelector(Zf(a))||(t=r.createElement(`link`),Yd(t,`link`,e),Dt(t),r.head.appendChild(t)))}}function Vf(e,t){Nf.m(e,t);var n=If;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Kt(r)+`"][href="`+Kt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Xf(e)}if(!Af.has(a)&&(e=m({rel:`modulepreload`,href:e},t),Af.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Zf(a)))return}r=n.createElement(`link`),Yd(r,`link`,e),Dt(r),n.head.appendChild(r)}}}function Hf(e,t,n){Nf.S(e,t,n);var r=If;if(r&&e){var i=Et(r).hoistableStyles,a=Kf(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(qf(a)))s.loading=5;else{e=m({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=Af.get(a))&&ep(e,n);var c=o=r.createElement(`link`);Dt(c),Yd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,$f(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Uf(e,t){Nf.X(e,t);var n=If;if(n&&e){var r=Et(n).hoistableScripts,i=Xf(e),a=r.get(i);a||(a=n.querySelector(Zf(i)),a||(e=m({src:e,async:!0},t),(t=Af.get(i))&&tp(e,t),a=n.createElement(`script`),Dt(a),Yd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Wf(e,t){Nf.M(e,t);var n=If;if(n&&e){var r=Et(n).hoistableScripts,i=Xf(e),a=r.get(i);a||(a=n.querySelector(Zf(i)),a||(e=m({src:e,async:!0,type:`module`},t),(t=Af.get(i))&&tp(e,t),a=n.createElement(`script`),Dt(a),Yd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Gf(e,t,n,r){var a=(a=he.current)?Mf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Kf(n.href),n=Et(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Kf(n.href);var o=Et(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(qf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),Af.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Af.set(e,n),o||Yf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Xf(n),n=Et(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Kf(e){return`href="`+Kt(e)+`"`}function qf(e){return`link[rel="stylesheet"][`+e+`]`}function Jf(e){return m({},e,{"data-precedence":e.precedence,precedence:null})}function Yf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Yd(t,`link`,n),Dt(t),e.head.appendChild(t))}function Xf(e){return`[src="`+Kt(e)+`"]`}function Zf(e){return`script[async]`+e}function Qf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Kt(n.href)+`"]`);if(r)return t.instance=r,Dt(r),r;var a=m({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Dt(r),Yd(r,`style`,a),$f(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Kf(n.href);var o=e.querySelector(qf(a));if(o)return t.state.loading|=4,t.instance=o,Dt(o),o;r=Jf(n),(a=Af.get(a))&&ep(r,a),o=(e.ownerDocument||e).createElement(`link`),Dt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Yd(o,`link`,r),t.state.loading|=4,$f(o,n.precedence,e),t.instance=o;case`script`:return o=Xf(n.src),(a=e.querySelector(Zf(o)))?(t.instance=a,Dt(a),a):(r=n,(a=Af.get(o))&&(r=m({},n),tp(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Dt(a),Yd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,$f(r,n.precedence,e));return t.instance}function $f(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function ep(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function tp(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var np=null;function rp(e,t,n){if(np===null){var r=new Map,i=np=new Map;i.set(n,r)}else i=np,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[xt]||a[mt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function ip(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function ap(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function op(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function sp(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Kf(r.href),a=t.querySelector(qf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=up.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Dt(a);return}a=t.ownerDocument||t,r=Jf(r),(i=Af.get(i))&&ep(r,i),a=a.createElement(`link`),Dt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Yd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=up.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var cp=0;function lp(e,t){return e.stylesheets&&e.count===0&&fp(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&fp(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&cp===0&&(cp=62500*Qd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&fp(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>cp?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function up(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)fp(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var dp=null;function fp(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,dp=new Map,t.forEach(pp,e),dp=null,up.call(e))}function pp(e,t){if(!(t.state.loading&4)){var n=dp.get(e);if(n)var r=n.get(null);else{n=new Map,dp.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=up.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var mp={$$typeof:C,Provider:null,Consumer:null,_currentValue:O,_currentValue2:O,_threadCount:0};function hp(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rt(0),this.hiddenUpdates=rt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function gp(e,t,n,r,i,a,o,s,c,l,u,d){return e=new hp(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=wi(3,null,null,t),e.current=a,a.stateNode=e,t=Ca(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},eo(a),e}function _p(e){return e?(e=Si,e):Si}function vp(e,t,n,r,i,a){i=_p(i),r.context===null?r.context=i:r.pendingContext=i,r=no(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=ro(e,r,t),n!==null&&(Ou(n,e,t),io(n,e,t))}function yp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function bp(e,t){yp(e,t),(e=e.alternate)&&yp(e,t)}function xp(e){if(e.tag===13||e.tag===31){var t=yi(e,67108864);t!==null&&Ou(t,e,67108864),bp(e,67108864)}}function Sp(e){if(e.tag===13||e.tag===31){var t=Eu();t=lt(t);var n=yi(e,t);n!==null&&Ou(n,e,t),bp(e,t)}}var Cp=!0;function wp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=2,Ep(e,t,n,r)}finally{D.p=a,E.T=i}}function Tp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=8,Ep(e,t,n,r)}finally{D.p=a,E.T=i}}function Ep(e,t,n,r){if(Cp){var i=Dp(r);if(i===null)zd(e,t,r,Op,n),zp(e,r);else if(Vp(i,e,t,n,r))r.stopPropagation();else if(zp(e,r),t&4&&-1<Rp.indexOf(e)){for(;i!==null;){var a=wt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Qe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ge(o);s.entanglements[1]|=c,o&=~c}gd(a),!(K&6)&&(mu=Ne()+500,_d(0,!1))}}break;case 31:case 13:s=yi(a,2),s!==null&&Ou(s,a,2),Nu(),bp(a,2)}if(a=Dp(r),a===null&&zd(e,t,r,Op,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else zd(e,t,r,null,n)}}function Dp(e){return e=un(e),kp(e)}var Op=null;function kp(e){if(Op=null,e=Ct(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Op=e,null}function Ap(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Pe()){case Fe:return 2;case Ie:return 8;case Le:case Re:return 32;case ze:return 268435456;default:return 32}default:return 32}}var jp=!1,Mp=null,Np=null,Pp=null,Fp=new Map,Ip=new Map,Lp=[],Rp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function zp(e,t){switch(e){case`focusin`:case`focusout`:Mp=null;break;case`dragenter`:case`dragleave`:Np=null;break;case`mouseover`:case`mouseout`:Pp=null;break;case`pointerover`:case`pointerout`:Fp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:Ip.delete(t.pointerId)}}function Bp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=wt(t),t!==null&&xp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Vp(e,t,n,r,i){switch(t){case`focusin`:return Mp=Bp(Mp,e,t,n,r,i),!0;case`dragenter`:return Np=Bp(Np,e,t,n,r,i),!0;case`mouseover`:return Pp=Bp(Pp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Fp.set(a,Bp(Fp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,Ip.set(a,Bp(Ip.get(a)||null,e,t,n,r,i)),!0}return!1}function Hp(e){var t=Ct(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ft(e.priority,function(){Sp(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ft(e.priority,function(){Sp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Up(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ln=r,n.target.dispatchEvent(r),ln=null}else return t=wt(n),t!==null&&xp(t),e.blockedOn=n,!1;t.shift()}return!0}function Wp(e,t,n){Up(e)&&n.delete(t)}function Gp(){jp=!1,Mp!==null&&Up(Mp)&&(Mp=null),Np!==null&&Up(Np)&&(Np=null),Pp!==null&&Up(Pp)&&(Pp=null),Fp.forEach(Wp),Ip.forEach(Wp)}function Kp(e,n){e.blockedOn===n&&(e.blockedOn=null,jp||(jp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Gp)))}var qp=null;function Jp(e){qp!==e&&(qp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){qp===e&&(qp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(kp(r||n)===null)continue;break}var a=wt(n);a!==null&&(e.splice(t,3),t-=3,Vs(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Yp(e){function t(t){return Kp(t,e)}Mp!==null&&Kp(Mp,e),Np!==null&&Kp(Np,e),Pp!==null&&Kp(Pp,e),Fp.forEach(t),Ip.forEach(t);for(var n=0;n<Lp.length;n++){var r=Lp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Lp.length&&(n=Lp[0],n.blockedOn===null);)Hp(n),n.blockedOn===null&&Lp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ht]||null;if(typeof a==`function`)o||Jp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ht]||null)s=o.formAction;else if(kp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Jp(n)}}}function Xp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Zp(e){this._internalRoot=e}Qp.prototype.render=Zp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current,r=Eu();vp(n,r,e,t,null,null)},Qp.prototype.unmount=Zp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;vp(e.current,2,null,e,null,null),Nu(),t[gt]=null}};function Qp(e){this._internalRoot=e}Qp.prototype.unstable_scheduleHydration=function(e){if(e){var t=dt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lp.length&&t!==0&&t<Lp[n].priority;n++);Lp.splice(n,0,e),n===0&&Hp(e)}};var $p=n.version;if($p!==`19.2.0`)throw Error(i(527,$p,`19.2.0`));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var em={bundleType:0,version:`19.2.0`,rendererPackageName:`react-dom`,currentDispatcherRef:E,reconcilerVersion:`19.2.0`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var tm=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tm.isDisabled&&tm.supportsFiber)try{He=tm.inject(em),Ue=tm}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=lc,s=uc,c=dc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=gp(e,1,!1,null,null,n,r,null,o,s,c,Xp),e[gt]=t.current,Ld(e),new Zp(t)}})),_=l(o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()}))()),v=l(d()),y=function(){return y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},y.apply(this,arguments)};function b(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||=Array.prototype.slice.call(t,0,r),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var x=o(((e,t)=>{t.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(i!==void 0)return!!i;if(e===t)return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var l=a[c];if(!s(l))return!1;var u=e[l],d=t[l];if(i=n?n.call(r,u,d,l):void 0,i===!1||i===void 0&&u!==d)return!1}return!0}})),S=`-ms-`,C=`-moz-`,w=`-webkit-`,ee=`comm`,te=`rule`,ne=`decl`,T=`@import`,re=`@keyframes`,ie=`@layer`,ae=Math.abs,oe=String.fromCharCode,se=Object.assign;function ce(e,t){return k(e,0)^45?(((t<<2^k(e,0))<<2^k(e,1))<<2^k(e,2))<<2^k(e,3):0}function le(e){return e.trim()}function E(e,t){return(e=t.exec(e))?e[0]:e}function D(e,t,n){return e.replace(t,n)}function O(e,t,n){return e.indexOf(t,n)}function k(e,t){return e.charCodeAt(t)|0}function ue(e,t,n){return e.slice(t,n)}function de(e){return e.length}function fe(e){return e.length}function A(e,t){return t.push(e),e}function pe(e,t){return e.map(t).join(``)}function me(e,t){return e.filter(function(e){return!E(e,t)})}var he=1,ge=1,_e=0,ve=0,ye=0,be=``;function xe(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:he,column:ge,length:o,return:``,siblings:s}}function Se(e,t){return se(xe(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function Ce(e){for(;e.root;)e=Se(e.root,{children:[e]});A(e,e.siblings)}function we(){return ye}function Te(){return ye=ve>0?k(be,--ve):0,ge--,ye===10&&(ge=1,he--),ye}function Ee(){return ye=ve<_e?k(be,ve++):0,ge++,ye===10&&(ge=1,he++),ye}function De(){return k(be,ve)}function Oe(){return ve}function ke(e,t){return ue(be,e,t)}function Ae(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function je(e){return he=ge=1,_e=de(be=e),ve=0,[]}function Me(e){return be=``,e}function Ne(e){return le(ke(ve-1,Ie(e===91?e+2:e===40?e+1:e)))}function Pe(e){for(;(ye=De())&&ye<33;)Ee();return Ae(e)>2||Ae(ye)>3?``:` `}function Fe(e,t){for(;--t&&Ee()&&!(ye<48||ye>102||ye>57&&ye<65||ye>70&&ye<97););return ke(e,Oe()+(t<6&&De()==32&&Ee()==32))}function Ie(e){for(;Ee();)switch(ye){case e:return ve;case 34:case 39:e!==34&&e!==39&&Ie(ye);break;case 40:e===41&&Ie(e);break;case 92:Ee();break}return ve}function Le(e,t){for(;Ee()&&e+ye!==57&&!(e+ye===84&&De()===47););return`/*`+ke(t,ve-1)+`*`+oe(e===47?e:Ee())}function Re(e){for(;!Ae(De());)Ee();return ke(e,ve)}function ze(e){return Me(Be(``,null,null,null,[``],e=je(e),0,[0],e))}function Be(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=Ee()){case 40:if(m!=108&&k(C,d-1)==58){O(C+=D(Ne(v),`&`,`&\f`),`&\f`,ae(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:C+=Ne(v);break;case 9:case 10:case 13:case 32:C+=Pe(m);break;case 92:C+=Fe(Oe()-1,7);continue;case 47:switch(De()){case 42:case 47:A(He(Le(Ee(),Oe()),t,n,c),c);break;default:C+=`/`}break;case 123*h:s[l++]=de(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=D(C,/\f/g,``)),p>0&&de(C)-d&&A(p>32?Ue(C+`;`,r,n,d-1,c):Ue(D(C,` `,``)+`;`,r,n,d-2,c),c);break;case 59:C+=`;`;default:if(A(S=Ve(C,t,n,l,u,i,s,y,b=[],x=[],d,a),a),v===123)if(u===0)Be(C,t,S,S,b,a,d,s,x);else switch(f===99&&k(C,3)===110?100:f){case 100:case 108:case 109:case 115:Be(e,S,S,r&&A(Ve(e,S,S,0,0,i,s,y,i,b=[],d,x),x),i,x,d,s,r?b:x);break;default:Be(C,S,S,S,[``],x,0,s,x)}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+de(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&Te()==125)continue}switch(C+=oe(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(de(C)-1)*_,_=1;break;case 64:De()===45&&(C+=Ne(Ee())),f=De(),u=d=de(y=C+=Re(Oe())),v++;break;case 45:m===45&&de(C)==2&&(h=0)}}return a}function Ve(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=fe(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=ue(e,f+1,f=ae(g=o[h])),b=e;v<m;++v)(b=le(g>0?p[v]+` `+y:D(y,/&\f/g,p[v])))&&(c[_++]=b);return xe(e,t,n,i===0?te:s,c,l,u,d)}function He(e,t,n,r){return xe(e,t,n,ee,oe(we()),ue(e,2,-2),0,r)}function Ue(e,t,n,r,i){return xe(e,t,n,ne,ue(e,0,r),ue(e,r+1,-1),r,i)}function We(e,t,n){switch(ce(e,t)){case 5103:return w+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return w+e+e;case 4789:return C+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return w+e+C+e+S+e+e;case 5936:switch(k(e,t+11)){case 114:return w+e+S+D(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return w+e+S+D(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return w+e+S+D(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return w+e+S+e+e;case 6165:return w+e+S+`flex-`+e+e;case 5187:return w+e+D(e,/(\w+).+(:[^]+)/,w+`box-$1$2`+S+`flex-$1$2`)+e;case 5443:return w+e+S+`flex-item-`+D(e,/flex-|-self/g,``)+(E(e,/flex-|baseline/)?``:S+`grid-row-`+D(e,/flex-|-self/g,``))+e;case 4675:return w+e+S+`flex-line-pack`+D(e,/align-content|flex-|-self/g,``)+e;case 5548:return w+e+S+D(e,`shrink`,`negative`)+e;case 5292:return w+e+S+D(e,`basis`,`preferred-size`)+e;case 6060:return w+`box-`+D(e,`-grow`,``)+w+e+S+D(e,`grow`,`positive`)+e;case 4554:return w+D(e,/([^-])(transform)/g,`$1`+w+`$2`)+e;case 6187:return D(D(D(e,/(zoom-|grab)/,w+`$1`),/(image-set)/,w+`$1`),e,``)+e;case 5495:case 3959:return D(e,/(image-set\([^]*)/,w+"$1$`$1");case 4968:return D(D(e,/(.+:)(flex-)?(.*)/,w+`box-pack:$3`+S+`flex-pack:$3`),/s.+-b[^;]+/,`justify`)+w+e+e;case 4200:if(!E(e,/flex-|baseline/))return S+`grid-column-align`+ue(e,t)+e;break;case 2592:case 3360:return S+D(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,E(e.props,/grid-\w+-end/)})?~O(e+(n=n[t].value),`span`,0)?e:S+D(e,`-start`,``)+e+S+`grid-row-span:`+(~O(n,`span`,0)?E(n,/\d+/):E(n,/\d+/)-+E(e,/\d+/))+`;`:S+D(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return E(e.props,/grid-\w+-start/)})?e:S+D(D(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return D(e,/(.+)-inline(.+)/,w+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(de(e)-1-t>6)switch(k(e,t+1)){case 109:if(k(e,t+4)!==45)break;case 102:return D(e,/(.+:)(.+)-([^]+)/,`$1`+w+`$2-$3$1`+C+(k(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~O(e,`stretch`,0)?We(D(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return D(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return S+n+`:`+r+s+(i?S+n+`-span:`+(a?o:o-+r)+s:``)+e});case 4949:if(k(e,t+6)===121)return D(e,`:`,`:`+w)+e;break;case 6444:switch(k(e,k(e,14)===45?18:11)){case 120:return D(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+w+(k(e,14)===45?`inline-`:``)+`box$3$1`+w+`$2$3$1`+S+`$2box$3`)+e;case 100:return D(e,`:`,`:`+S)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return D(e,`scroll-`,`scroll-snap-`)+e}return e}function Ge(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function Ke(e,t,n,r){switch(e.type){case ie:if(e.children.length)break;case T:case ne:return e.return=e.return||e.value;case ee:return``;case re:return e.return=e.value+`{`+Ge(e.children,r)+`}`;case te:if(!de(e.value=e.props.join(`,`)))return``}return de(n=Ge(e.children,r))?e.return=e.value+`{`+n+`}`:``}function qe(e){var t=fe(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function Je(e){return function(t){t.root||(t=t.return)&&e(t)}}function Ye(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case ne:e.return=We(e.value,e.length,n);return;case re:return Ge([Se(e,{value:D(e.value,`@`,`@`+w)})],r);case te:if(e.length)return pe(n=e.props,function(t){switch(E(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:Ce(Se(e,{props:[D(t,/:(read-\w+)/,`:`+C+`$1`)]})),Ce(Se(e,{props:[t]})),se(e,{props:me(n,r)});break;case`::placeholder`:Ce(Se(e,{props:[D(t,/:(plac\w+)/,`:`+w+`input-$1`)]})),Ce(Se(e,{props:[D(t,/:(plac\w+)/,`:`+C+`$1`)]})),Ce(Se(e,{props:[D(t,/:(plac\w+)/,S+`input-$1`)]})),Ce(Se(e,{props:[t]})),se(e,{props:me(n,r)});break}return``})}}var Xe=l(x()),Ze={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Qe=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,$e=`active`,et=`data-styled-version`,tt=`6.1.19`,nt=`/*!sc*/
`,rt=typeof window<`u`&&typeof document<`u`,it=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:typeof process<`u`&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==``?{}.REACT_APP_SC_DISABLE_SPEEDY!==`false`&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<`u`&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==``&&{}.SC_DISABLE_SPEEDY!==`false`&&{}.SC_DISABLE_SPEEDY),at={},ot=Object.freeze([]),st=Object.freeze({});function ct(e,t,n){return n===void 0&&(n=st),e.theme!==n.theme&&e.theme||t||n.theme}var lt=new Set(`a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.big.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.keygen.label.legend.li.link.main.map.mark.menu.menuitem.meta.meter.nav.noscript.object.ol.optgroup.option.output.p.param.picture.pre.progress.q.rp.rt.ruby.s.samp.script.section.select.small.source.span.strong.style.sub.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.tr.track.u.ul.use.var.video.wbr.circle.clipPath.defs.ellipse.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.text.tspan`.split(`.`)),ut=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,dt=/(^-|-$)/g;function ft(e){return e.replace(ut,`-`).replace(dt,``)}var pt=/(a)(d)/gi,mt=52,ht=function(e){return String.fromCharCode(e+(e>25?39:97))};function gt(e){var t,n=``;for(t=Math.abs(e);t>mt;t=t/mt|0)n=ht(t%mt)+n;return(ht(t%mt)+n).replace(pt,`$1-$2`)}var _t,vt=5381,yt=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},bt=function(e){return yt(vt,e)};function xt(e){return gt(bt(e)>>>0)}function St(e){return e.displayName||e.name||`Component`}function Ct(e){return typeof e==`string`&&!0}var wt=typeof Symbol==`function`&&Symbol.for,Tt=wt?Symbol.for(`react.memo`):60115,Et=wt?Symbol.for(`react.forward_ref`):60112,Dt={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ot={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},kt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},At=((_t={})[Et]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},_t[Tt]=kt,_t);function jt(e){return(`type`in(t=e)&&t.type.$$typeof)===Tt?kt:`$$typeof`in e?At[e.$$typeof]:Dt;var t}var Mt=Object.defineProperty,Nt=Object.getOwnPropertyNames,Pt=Object.getOwnPropertySymbols,Ft=Object.getOwnPropertyDescriptor,It=Object.getPrototypeOf,Lt=Object.prototype;function Rt(e,t,n){if(typeof t!=`string`){if(Lt){var r=It(t);r&&r!==Lt&&Rt(e,r,n)}var i=Nt(t);Pt&&(i=i.concat(Pt(t)));for(var a=jt(e),o=jt(t),s=0;s<i.length;++s){var c=i[s];if(!(c in Ot||n&&n[c]||o&&c in o||a&&c in a)){var l=Ft(t,c);try{Mt(e,c,l)}catch{}}}}return e}function zt(e){return typeof e==`function`}function Bt(e){return typeof e==`object`&&`styledComponentId`in e}function Vt(e,t){return e&&t?`${e} ${t}`:e||t||``}function Ht(e,t){if(e.length===0)return``;for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ut(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function Wt(e,t,n){if(n===void 0&&(n=!1),!n&&!Ut(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Wt(e[r],t[r]);else if(Ut(t))for(var r in t)e[r]=Wt(e[r],t[r]);return e}function Gt(e,t){Object.defineProperty(e,`toString`,{value:t})}function Kt(e){var t=[...arguments].slice(1);return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var qt=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw Kt(16,`${e}`);this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=r;a<i;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),s=(a=0,t.length);a<s;a++)this.tag.insertRule(o,t[a])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t=``;if(e>=this.length||this.groupSizes[e]===0)return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,a=r;a<i;a++)t+=`${this.tag.getRule(a)}${nt}`;return t},e}(),Jt=new Map,Yt=new Map,Xt=1,Zt=function(e){if(Jt.has(e))return Jt.get(e);for(;Yt.has(Xt);)Xt++;var t=Xt++;return Jt.set(e,t),Yt.set(t,e),t},Qt=function(e,t){Xt=t+1,Jt.set(e,t),Yt.set(t,e)},$t=`style[${Qe}][${et}="${tt}"]`,en=RegExp(`^${Qe}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),tn=function(e,t,n){for(var r,i=n.split(`,`),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},nn=function(e,t){for(var n=(t.textContent??``).split(nt),r=[],i=0,a=n.length;i<a;i++){var o=n[i].trim();if(o){var s=o.match(en);if(s){var c=0|parseInt(s[1],10),l=s[2];c!==0&&(Qt(l,c),tn(e,l,s[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(o)}}},rn=function(e){for(var t=document.querySelectorAll($t),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Qe)!==$e&&(nn(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function an(){return typeof __webpack_nonce__<`u`?__webpack_nonce__:null}var on=function(e){var t=document.head,n=e||t,r=document.createElement(`style`),i=function(e){var t=Array.from(e.querySelectorAll(`style[${Qe}]`));return t[t.length-1]}(n),a=i===void 0?null:i.nextSibling;r.setAttribute(Qe,$e),r.setAttribute(et,tt);var o=an();return o&&r.setAttribute(`nonce`,o),n.insertBefore(r,a),r},sn=function(){function e(e){this.element=on(e),this.element.appendChild(document.createTextNode(``)),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw Kt(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``},e}(),cn=function(){function e(e){this.element=on(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:``},e}(),ln=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:``},e}(),un=rt,dn={isServer:!rt,useCSSOMInjection:!it},fn=function(){function e(e,t,n){e===void 0&&(e=st),t===void 0&&(t={});var r=this;this.options=y(y({},dn),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&rt&&un&&(un=!1,rn(this)),Gt(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r=``,i=function(n){var i=function(e){return Yt.get(e)}(n);if(i===void 0)return`continue`;var a=e.names.get(i),o=t.getGroup(n);if(a===void 0||!a.size||o.length===0)return`continue`;var s=`${Qe}.g${n}[id="${i}"]`,c=``;a!==void 0&&a.forEach(function(e){e.length>0&&(c+=`${e},`)}),r+=`${o}${s}{content:"${c}"}${nt}`},a=0;a<n;a++)i(a);return r}(r)})}return e.registerId=function(e){return Zt(e)},e.prototype.rehydrate=function(){!this.server&&rt&&rn(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(y(y({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new ln(n):t?new sn(n):new cn(n)}(this.options),new qt(e));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Zt(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Zt(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Zt(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),pn=/&/g,mn=/^\s*\/\/.*$/gm;function hn(e,t){return e.map(function(e){return e.type===`rule`&&(e.value=`${t} ${e.value}`,e.value=e.value.replaceAll(`,`,`,${t} `),e.props=e.props.map(function(e){return`${t} ${e}`})),Array.isArray(e.children)&&e.type!==`@keyframes`&&(e.children=hn(e.children,t)),e})}function gn(e){var t,n,r,i=e===void 0?st:e,a=i.options,o=a===void 0?st:a,s=i.plugins,c=s===void 0?ot:s,l=function(e,r,i){return i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,``).length>0?`.${t}`:e},u=c.slice();u.push(function(e){e.type===`rule`&&e.value.includes(`&`)&&(e.props[0]=e.props[0].replace(pn,n).replace(r,l))}),o.prefix&&u.push(Ye),u.push(Ke);var d=function(e,i,a,s){i===void 0&&(i=``),a===void 0&&(a=``),s===void 0&&(s=`&`),t=s,n=i,r=RegExp(`\\${n}\\b`,`g`);var c=e.replace(mn,``),l=ze(a||i?`${a} ${i} { ${c} }`:c);o.namespace&&(l=hn(l,o.namespace));var d=[];return Ge(l,qe(u.concat(Je(function(e){return d.push(e)})))),d};return d.hash=c.length?c.reduce(function(e,t){return t.name||Kt(15),yt(e,t.name)},vt).toString():``,d}var _n=new fn,vn=gn(),yn=v.createContext({shouldForwardProp:void 0,styleSheet:_n,stylis:vn});yn.Consumer;var bn=v.createContext(void 0);function xn(){return(0,v.useContext)(yn)}function Sn(e){var t=(0,v.useState)(e.stylisPlugins),n=t[0],r=t[1],i=xn().styleSheet,a=(0,v.useMemo)(function(){var t=i;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,i]),o=(0,v.useMemo)(function(){return gn({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})},[e.enableVendorPrefixes,e.namespace,n]);(0,v.useEffect)(function(){(0,Xe.default)(n,e.stylisPlugins)||r(e.stylisPlugins)},[e.stylisPlugins]);var s=(0,v.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:o}},[e.shouldForwardProp,a,o]);return v.createElement(yn.Provider,{value:s},v.createElement(bn.Provider,{value:o},e.children))}var Cn=function(){function e(e,t){var n=this;this.inject=function(e,t){t===void 0&&(t=vn);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,`@keyframes`))},this.name=e,this.id=`sc-keyframes-${e}`,this.rules=t,Gt(this,function(){throw Kt(12,String(n.name))})}return e.prototype.getName=function(e){return e===void 0&&(e=vn),this.name+e.hash},e}(),wn=function(e){return e>=`A`&&e<=`Z`};function Tn(e){for(var t=``,n=0;n<e.length;n++){var r=e[n];if(n===1&&r===`-`&&e[0]===`-`)return e;wn(r)?t+=`-`+r.toLowerCase():t+=r}return t.startsWith(`ms-`)?`-`+t:t}var En=function(e){return e==null||!1===e||e===``},Dn=function(e){var t,n,r=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!En(a)&&(Array.isArray(a)&&a.isCss||zt(a)?r.push(`${Tn(i)}:`,a,`;`):Ut(a)?r.push.apply(r,b(b([`${i} {`],Dn(a),!1),[`}`],!1)):r.push(`${Tn(i)}: ${t=i,(n=a)==null||typeof n==`boolean`||n===``?``:typeof n!=`number`||n===0||t in Ze||t.startsWith(`--`)?String(n).trim():`${n}px`};`))}return r};function On(e,t,n,r){if(En(e))return[];if(Bt(e))return[`.${e.styledComponentId}`];if(zt(e)){if(!zt(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var i=e(t);return On(i,t,n,r)}var a;return e instanceof Cn?n?(e.inject(n,r),[e.getName(r)]):[e]:Ut(e)?Dn(e):Array.isArray(e)?Array.prototype.concat.apply(ot,e.map(function(e){return On(e,t,n,r)})):[e.toString()]}function kn(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(zt(n)&&!Bt(n))return!1}return!0}var An=bt(tt),jn=function(){function e(e,t,n){this.rules=e,this.staticRulesId=``,this.isStatic=(n===void 0||n.isStatic)&&kn(e),this.componentId=t,this.baseHash=yt(An,t),this.baseStyle=n,fn.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):``;if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Vt(r,this.staticRulesId);else{var i=Ht(On(this.rules,e,t,n)),a=gt(yt(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,a)){var o=n(i,`.${a}`,void 0,this.componentId);t.insertRules(this.componentId,a,o)}r=Vt(r,a),this.staticRulesId=a}else{for(var s=yt(this.baseHash,n.hash),c=``,l=0;l<this.rules.length;l++){var u=this.rules[l];if(typeof u==`string`)c+=u;else if(u){var d=Ht(On(u,e,t,n));s=yt(s,d+l),c+=d}}if(c){var f=gt(s>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(c,`.${f}`,void 0,this.componentId)),r=Vt(r,f)}}return r},e}(),Mn=v.createContext(void 0);Mn.Consumer;function Nn(e){var t=v.useContext(Mn),n=(0,v.useMemo)(function(){return function(e,t){if(!e)throw Kt(14);if(zt(e))return e(t);if(Array.isArray(e)||typeof e!=`object`)throw Kt(8);return t?y(y({},t),e):e}(e.theme,t)},[e.theme,t]);return e.children?v.createElement(Mn.Provider,{value:n},e.children):null}var Pn={};function Fn(e,t,n){var r=Bt(e),i=e,a=!Ct(e),o=t.attrs,s=o===void 0?ot:o,c=t.componentId,l=c===void 0?function(e,t){var n=typeof e==`string`?ft(e):`sc`;Pn[n]=(Pn[n]||0)+1;var r=`${n}-${xt(tt+n+Pn[n])}`;return t?`${t}-${r}`:r}(t.displayName,t.parentComponentId):c,u=t.displayName,d=u===void 0?function(e){return Ct(e)?`styled.${e}`:`Styled(${St(e)})`}(e):u,f=t.displayName&&t.componentId?`${ft(t.displayName)}-${t.componentId}`:t.componentId||l,p=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,m=t.shouldForwardProp;if(r&&i.shouldForwardProp){var h=i.shouldForwardProp;if(t.shouldForwardProp){var g=t.shouldForwardProp;m=function(e,t){return h(e,t)&&g(e,t)}}else m=h}var _=new jn(n,f,r?i.componentStyle:void 0);function b(e,t){return function(e,t,n){var r=e.attrs,i=e.componentStyle,a=e.defaultProps,o=e.foldedComponentIds,s=e.styledComponentId,c=e.target,l=v.useContext(Mn),u=xn(),d=e.shouldForwardProp||u.shouldForwardProp,f=ct(t,l,a)||st,p=function(e,t,n){for(var r,i=y(y({},t),{className:void 0,theme:n}),a=0;a<e.length;a+=1){var o=zt(r=e[a])?r(i):r;for(var s in o)i[s]=s===`className`?Vt(i[s],o[s]):s===`style`?y(y({},i[s]),o[s]):o[s]}return t.className&&(i.className=Vt(i.className,t.className)),i}(r,t,f),m=p.as||c,h={};for(var g in p)p[g]===void 0||g[0]===`$`||g===`as`||g===`theme`&&p.theme===f||(g===`forwardedAs`?h.as=p.forwardedAs:d&&!d(g,m)||(h[g]=p[g]));var _=function(e,t){var n=xn();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(i,p),b=Vt(o,s);return _&&(b+=` `+_),p.className&&(b+=` `+p.className),h[Ct(m)&&!lt.has(m)?`class`:`className`]=b,n&&(h.ref=n),(0,v.createElement)(m,h)}(x,e,t)}b.displayName=d;var x=v.forwardRef(b);return x.attrs=p,x.componentStyle=_,x.displayName=d,x.shouldForwardProp=m,x.foldedComponentIds=r?Vt(i.foldedComponentIds,i.styledComponentId):``,x.styledComponentId=f,x.target=r?i.target:e,Object.defineProperty(x,`defaultProps`,{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=r?function(e){for(var t=[...arguments].slice(1),n=0,r=t;n<r.length;n++)Wt(e,r[n],!0);return e}({},i.defaultProps,e):e}}),Gt(x,function(){return`.${x.styledComponentId}`}),a&&Rt(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function In(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Ln=function(e){return Object.assign(e,{isCss:!0})};function Rn(e){var t=[...arguments].slice(1);if(zt(e)||Ut(e))return Ln(On(In(ot,b([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?On(n):Ln(On(In(n,t)))}function zn(e,t,n){if(n===void 0&&(n=st),!t)throw Kt(1,t);var r=function(r){var i=[...arguments].slice(1);return e(t,n,Rn.apply(void 0,b([r],i,!1)))};return r.attrs=function(r){return zn(e,t,y(y({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return zn(e,t,y(y({},n),r))},r}var Bn=function(e){return zn(Fn,e)},j=Bn;lt.forEach(function(e){j[e]=Bn(e)});var Vn=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=kn(e),fn.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var i=r(Ht(On(this.rules,t,n,r)),``),a=this.componentId+e;n.insertRules(a,a,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&fn.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function Hn(e){var t=[...arguments].slice(1),n=Rn.apply(void 0,b([e],t,!1)),r=`sc-global-${xt(JSON.stringify(n))}`,i=new Vn(n,r),a=function(e){var t=xn(),n=v.useContext(Mn),a=v.useRef(t.styleSheet.allocateGSInstance(r)).current;return t.styleSheet.server&&o(a,e,t.styleSheet,n,t.stylis),v.useLayoutEffect(function(){if(!t.styleSheet.server)return o(a,e,t.styleSheet,n,t.stylis),function(){return i.removeStyles(a,t.styleSheet)}},[a,e,t.styleSheet,n,t.stylis]),null};function o(e,t,n,r,o){if(i.isStatic)i.renderStyles(e,at,n,o);else{var s=y(y({},t),{theme:ct(t,r,a.defaultProps)});i.renderStyles(e,s,n,o)}}return v.memo(a)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return``;var n=an();return`<style ${Ht([n&&`nonce="${n}"`,`${Qe}="true"`,`${et}="${tt}"`].filter(Boolean),` `)}>${t}</style>`},this.getStyleTags=function(){if(e.sealed)throw Kt(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw Kt(2);var n=e.instance.toString();if(!n)return[];var r=((t={})[Qe]=``,t[et]=tt,t.dangerouslySetInnerHTML={__html:n},t),i=an();return i&&(r.nonce=i),[v.createElement(`style`,y({},r,{key:`sc-0-0`}))]},this.seal=function(){e.sealed=!0},this.instance=new fn({isServer:!0}),this.sealed=!1}return e.prototype.collectStyles=function(e){if(this.sealed)throw Kt(2);return v.createElement(Sn,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Kt(3)},e})(),`${Qe}`;const M={colors:{bgPrimary:`#1e1e2e`,bgSecondary:`#181825`,bgTertiary:`#11111b`,bgHover:`#313244`,textPrimary:`#cdd6f4`,textSecondary:`#a6adc8`,textHighlight:`#f2cdcd`,accentBlue:`#89b4fa`,accentPurple:`#cba6f7`,accentCyan:`#94e2d5`,accentGreen:`#a6e3a1`,accentYellow:`#f9e2af`,accentRed:`#f38ba8`,accentPink:`#f5c2e7`,success:`#a6e3a1`,warning:`#f9e2af`,error:`#f38ba8`,info:`#94e2d5`,borderColor:`#45475a`,borderActive:`#89b4fa`},fonts:{mono:`'JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', monospace`},fontSizes:{xs:`10px`,sm:`11px`,md:`12px`,base:`13px`,lg:`14px`,xl:`16px`,xxl:`18px`},fontWeights:{normal:400,medium:500,semibold:600,bold:700},lineHeights:{tight:1.2,normal:1.4,relaxed:1.5},letterSpacing:{tight:`-0.025em`,normal:`0`,wide:`0.025em`,wider:`0.05em`,widest:`0.1em`},spacing:{xs:`6px`,sm:`10px`,md:`16px`,lg:`24px`,xl:`32px`,xxl:`48px`},borderRadius:{none:`0`,sm:`4px`,base:`6px`,md:`8px`,lg:`12px`,xl:`16px`,full:`9999px`},shadows:{sm:`0 2px 4px rgba(0, 0, 0, 0.3)`,md:`0 4px 8px rgba(0, 0, 0, 0.4)`,lg:`0 8px 16px rgba(0, 0, 0, 0.5)`,xl:`0 16px 32px rgba(0, 0, 0, 0.6)`},transitions:{fast:`0.15s ease`,normal:`0.2s ease`,slow:`0.3s ease`},breakpoints:{mobile:`768px`,tablet:`1024px`,desktop:`1200px`},zIndex:{base:1,dropdown:10,modal:100,tooltip:1e3}};`${M.breakpoints.mobile}`,`${M.breakpoints.tablet}`,`${M.breakpoints.desktop}`,`${M.breakpoints.mobile}`,`${M.breakpoints.tablet}`,`${M.breakpoints.desktop}`;const Un={terminalWindow:`
    background: ${M.colors.bgSecondary};
    border: 1px solid ${M.colors.borderColor};
    border-radius: ${M.borderRadius.lg};
    box-shadow: ${M.shadows.lg};
    overflow: hidden;
  `,buttonBase:`
    padding: ${M.spacing.sm} ${M.spacing.lg};
    border: none;
    border-radius: ${M.borderRadius.base};
    font-family: ${M.fonts.mono};
    font-size: ${M.fontSizes.md};
    font-weight: ${M.fontWeights.semibold};
    text-transform: uppercase;
    letter-spacing: ${M.letterSpacing.wide};
    cursor: pointer;
    transition: ${M.transitions.normal};
    
    &:focus {
      outline: none;
    }
  `,buttonPrimary:`
    background: ${M.colors.accentBlue};
    color: ${M.colors.bgPrimary};
    
    &:hover {
      background: ${M.colors.accentPurple};
      transform: translateY(-2px);
      box-shadow: ${M.shadows.md};
    }
    
    &:active {
      transform: translateY(0);
    }
  `,buttonSecondary:`
    background: ${M.colors.bgPrimary};
    color: ${M.colors.textPrimary};
    border: 1px solid ${M.colors.borderColor};
    
    &:hover {
      background: ${M.colors.bgHover};
    }
  `,inputBase:`
    width: 100%;
    padding: ${M.spacing.md};
    background: ${M.colors.bgPrimary};
    border: 2px solid ${M.colors.borderColor};
    border-radius: ${M.borderRadius.base};
    color: ${M.colors.textPrimary};
    font-family: ${M.fonts.mono};
    font-size: ${M.fontSizes.base};
    transition: ${M.transitions.normal};
    
    &:focus {
      outline: none;
      border-color: ${M.colors.accentBlue};
      background: ${M.colors.bgHover};
      box-shadow: 0 0 0 3px rgba(137, 180, 250, 0.1);
    }
    
    &::placeholder {
      color: ${M.colors.textSecondary};
      opacity: 0.7;
    }
  `,statusBadge:`
    display: inline-block;
    padding: 4px 8px;
    border-radius: ${M.borderRadius.base};
    font-size: ${M.fontSizes.xs};
    font-weight: ${M.fontWeights.semibold};
    text-transform: uppercase;
    letter-spacing: ${M.letterSpacing.wide};
    text-align: center;
    min-width: 60px;
  `,scrollbar:`
    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    
    &::-webkit-scrollbar-track {
      background: ${M.colors.bgTertiary};
    }
    
    &::-webkit-scrollbar-thumb {
      background: ${M.colors.borderColor};
      border-radius: ${M.borderRadius.base};
    }
    
    &::-webkit-scrollbar-thumb:hover {
      background: ${M.colors.accentBlue};
    }
    
    scrollbar-width: thin;
    scrollbar-color: ${M.colors.borderColor} ${M.colors.bgTertiary};
  `,tableRowHover:`
    cursor: pointer;
    transition: ${M.transitions.fast};
    border-bottom: 1px solid ${M.colors.bgTertiary};
    
    &:hover {
      background: ${M.colors.bgHover};
    }
  `};var Wn=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),N=l(o(((e,t)=>{t.exports=Wn()}))()),Gn=j.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  background: ${M.colors.bgPrimary};
  font-family: ${M.fonts.mono};
  font-size: ${M.fontSizes.base};
  line-height: ${M.lineHeights.normal};
  color: ${M.colors.textPrimary};
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
`,Kn=({children:e})=>(0,N.jsx)(Gn,{children:e}),qn=j.div`
  background: ${M.colors.bgTertiary};
  border-bottom: 1px solid ${M.colors.borderColor};
  padding: ${M.spacing.sm} ${M.spacing.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 36px;
`,Jn=j.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,Yn=j.h1`
  color: ${M.colors.accentBlue};
  font-weight: ${M.fontWeights.bold};
  font-size: ${M.fontSizes.lg};
  letter-spacing: ${M.letterSpacing.wide};
  margin: 0;
`;j.div`
  display: flex;
  gap: ${M.spacing.sm};
`,j.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${M.fontSizes.md};
  font-weight: ${M.fontWeights.bold};
  cursor: pointer;
  transition: ${M.transitions.normal};
  
  &.minimize {
    background: ${M.colors.accentYellow};
    color: ${M.colors.bgPrimary};
  }
  
  &.maximize {
    background: ${M.colors.accentGreen};
    color: ${M.colors.bgPrimary};
  }
  
  &.close {
    background: ${M.colors.accentRed};
    color: ${M.colors.bgPrimary};
  }
  
  &:hover {
    transform: scale(1.1);
  }
`;var Xn=({title:e=`HIH-Verwaltung Terminal Edition`})=>(0,N.jsx)(qn,{children:(0,N.jsx)(Jn,{children:(0,N.jsx)(Yn,{children:e})})}),Zn=j.div`
  flex: 1;
  padding: ${M.spacing.lg};
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  min-height: 0; /* Important for flex scrolling */
`,Qn=({children:e})=>(0,N.jsx)(Zn,{children:e});const $n=j.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${M.spacing.sm};
  padding: ${M.spacing.md} ${M.spacing.lg};
  font-family: ${M.fonts.mono};
  font-size: ${M.fontSizes.base};
  font-weight: ${M.fontWeights.medium};
  color: ${e=>e.variant===`secondary`?M.colors.textPrimary:M.colors.bgPrimary};
  background: ${e=>{switch(e.variant){case`secondary`:return M.colors.bgTertiary;case`danger`:return M.colors.accentRed;case`success`:return M.colors.accentGreen;default:return M.colors.accentBlue}}};
  border: 2px solid ${e=>{switch(e.variant){case`secondary`:return M.colors.borderColor;case`danger`:return M.colors.accentRed;case`success`:return M.colors.accentGreen;default:return M.colors.accentCyan}}};
  border-radius: ${M.borderRadius.base};
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  min-width: 120px;
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px ${e=>{switch(e.variant){case`danger`:return`rgba(255, 85, 85, 0.3)`;case`success`:return`rgba(85, 255, 85, 0.3)`;default:return`rgba(74, 158, 255, 0.3)`}}};
    background: ${e=>{if(e.variant===`secondary`)return M.colors.bgHover}};
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
    outline: 3px solid ${M.colors.accentYellow};
    outline-offset: 2px;
  }
  
  /* Mobile touch targets */
  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: 14px;
    min-height: 36px;
    min-width: 80px;
  }
`,er=j($n)`
  padding: ${M.spacing.xs} ${M.spacing.sm};
  font-size: ${M.fontSizes.xs};
  min-width: auto;
  margin: 0 2px;
  
  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 12px;
  }
`,tr=j.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${M.spacing.sm};
  padding: 0.2em 0.7em;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: ${M.borderRadius.base};
  font-size: ${M.fontSizes.base};
  font-family: ${M.fonts.mono};
  background: ${M.colors.bgTertiary};
  border: 2px solid ${M.colors.borderColor};
  color: ${M.colors.textPrimary};
  min-width: auto;
  width: auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  
  /* Desktop button styling */
  @media (min-width: 769px) {
    &:hover {
      background: ${M.colors.bgHover};
      border-color: ${M.colors.accentBlue};
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
    padding: 6px 12px;
    font-size: 13px;
    min-height: auto;
    min-width: auto;
    margin: 2px;
    justify-content: center;
    border-width: 1px;
  }
  
  &.active {
    background: ${M.colors.accentBlue};
    color: ${M.colors.bgPrimary};
    border-color: ${M.colors.accentCyan};
    box-shadow: 0 4px 12px rgba(74, 158, 255, 0.5);
    
    &:hover {
      background: ${M.colors.accentCyan};
    }
  }
  
  &:focus-visible {
    outline: 3px solid ${M.colors.accentYellow};
    outline-offset: 2px;
  }
`,nr=j.span`
  background: ${M.colors.bgPrimary};
  color: ${M.colors.accentYellow};
  padding: 4px 10px;
  border-radius: ${M.borderRadius.base};
  font-weight: ${M.fontWeights.bold};
  font-size: ${M.fontSizes.sm};
  border: 2px solid ${M.colors.accentBlue};
  min-width: 32px;
  text-align: center;
  box-shadow: inset 0 -2px 0 rgba(0, 0, 0, 0.3);
  
  /* Mobile: Label komplett ausblenden */
  @media (max-width: 768px) {
    display: none;
  }
  
  .active & {
    background: ${M.colors.bgPrimary};
    color: ${M.colors.accentYellow};
    border-color: ${M.colors.accentYellow};
  }
`,rr=j.span`
  font-weight: ${M.fontWeights.medium};
  letter-spacing: ${M.letterSpacing.normal};
  
  .active & {
    font-weight: ${M.fontWeights.bold};
  }
`;j.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: ${M.spacing.xs};
  background: ${M.colors.bgTertiary};
  border: 2px solid ${M.colors.borderColor};
  border-radius: ${M.borderRadius.base};
  color: ${M.colors.textPrimary};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    background: ${M.colors.bgHover};
    border-color: ${M.colors.accentBlue};
    color: ${M.colors.accentCyan};
  }
  
  &:active:not(:disabled) {
    transform: scale(0.95);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &:focus-visible {
    outline: 2px solid ${M.colors.accentYellow};
    outline-offset: 2px;
  }
  
  /* Mobile */
  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
  }
`,j.div`
  display: flex;
  gap: ${M.spacing.md};
  flex-wrap: wrap;
  align-items: center;
  
  @media (max-width: 768px) {
    gap: ${M.spacing.sm};
    width: 100%;
    
    button {
      flex: 1;
      min-width: 0;
    }
  }
`;var ir=j.div`
  background: ${M.colors.bgSecondary};
  border-top: 3px solid ${M.colors.accentBlue};
  padding: ${M.spacing.md} ${M.spacing.lg};
  margin-top: 0;
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: ${M.spacing.md};
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.2);
  
  /* Mobile improvements */
  @media (max-width: 768px) {
    padding: ${M.spacing.md} ${M.spacing.sm};
    padding-bottom: max(calc(${M.spacing.md} + env(safe-area-inset-bottom)), 25px);
    gap: ${M.spacing.sm};
    margin-top: ${M.spacing.sm};
    margin-bottom: 0;
  }
`,ar=j.div`
  background: ${M.colors.bgTertiary};
  border-top: 1px solid ${M.colors.borderColor};
  padding: ${M.spacing.sm} ${M.spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${M.fontSizes.sm};
  min-height: 32px;
  
  /* Mobile improvements */
  @media (max-width: 768px) {
    padding: ${M.spacing.md} ${M.spacing.lg};
    padding-bottom: max(calc(${M.spacing.md} + env(safe-area-inset-bottom)), 25px);
    font-size: ${M.fontSizes.base};
    min-height: 48px;
  }
`,or=j.div`
  color: ${M.colors.textSecondary};
  flex: 1;
`,sr=j.div`
  color: ${M.colors.accentCyan};
  font-weight: ${M.fontWeights.medium};
`,cr=[{key:`F1`,label:`Hilfe`,action:`help`},{key:`F2`,label:`Kunden`,action:`customers`},{key:`F3`,label:`Offerten`,action:`offers`},{key:`F4`,label:`Rechnung`,action:`invoices`},{key:`F5`,label:`Aktualisieren`,action:`refresh`},{key:`F9`,label:`Firma`,action:`firma`},{key:`F10`,label:`Hauptmenü`,action:`startup`}],lr=({currentScreen:e,onFKeyPress:t,statusMessage:n})=>{let[r,i]=(0,v.useState)(new Date);(0,v.useEffect)(()=>{let e=setInterval(()=>{i(new Date)},1e3);return()=>clearInterval(e)},[]);let a=e=>{t&&t(e)},o=e=>{let t=cr.find(t=>e.key===t.key||e.code===t.key||e.key===`F${t.key.slice(1)}`);t&&(e.preventDefault(),a(t.action))};return(0,v.useEffect)(()=>(document.addEventListener(`keydown`,o),()=>document.removeEventListener(`keydown`,o)),[]),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(ir,{children:cr.map(({key:t,label:n,action:r})=>(0,N.jsxs)(tr,{className:e===r?`active`:``,onClick:()=>a(r),children:[(0,N.jsx)(nr,{children:t}),(0,N.jsx)(rr,{children:n})]},t))}),(0,N.jsxs)(ar,{children:[(0,N.jsx)(or,{children:n||`System bereit - F-Tasten für Navigation`}),(0,N.jsx)(sr,{children:r.toLocaleTimeString()})]})]})},ur=j.div`
  background: ${M.colors.bgSecondary};
  border-top: 2px solid ${M.colors.accentYellow};
  border-bottom: 1px solid ${M.colors.borderColor};
  padding: ${M.spacing.md} ${M.spacing.lg};
  font-family: ${M.fonts.mono};
  font-size: ${M.fontSizes.base};
  
  display: flex;
  flex-wrap: wrap;
  gap: ${M.spacing.md};
  align-items: center;
  justify-content: center;
  
  /* Mobile: SubNavigation komplett ausblenden */
  @media (max-width: 768px) {
    display: none;
  }
`,dr=j.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${M.spacing.sm};
  padding: ${M.spacing.md} 2em ${M.spacing.md} ${M.spacing.md};
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: ${M.borderRadius.lg};
  font-size: ${M.fontSizes.base};
  font-family: ${M.fonts.mono};
  background: ${M.colors.bgTertiary};
  border: 2px solid ${M.colors.borderColor};
  color: ${M.colors.textSecondary};
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
    color: ${M.colors.textPrimary};
    cursor: pointer;
    
    &:hover {
      background: ${M.colors.bgHover};
      border-color: ${M.colors.accentBlue};
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(74, 158, 255, 0.3);
    }
    
    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
    
    @media (max-width: 768px) {
      &:active {
        background: ${M.colors.bgHover};
      }
    }
  }
  
  &.primary {
    color: ${M.colors.accentGreen};
    font-weight: bold;
    border-color: ${M.colors.accentGreen};
  }
  
  &.danger {
    color: ${M.colors.accentRed};
    border-color: ${M.colors.accentRed};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    
    &:hover {
      transform: none;
      background: ${M.colors.bgTertiary};
      border-color: ${M.colors.borderColor};
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  }
  
  &:focus-visible {
    outline: 3px solid ${M.colors.accentYellow};
    outline-offset: 2px;
  }
`,fr=j.span`
  background: ${M.colors.bgTertiary};
  color: ${M.colors.accentCyan};
  padding: 2px 6px;
  border-radius: 3px;
  font-weight: bold;
  font-size: ${M.fontSizes.xs};
  min-width: 20px;
  text-align: center;
  border: 1px solid ${M.colors.borderColor};
  
  /* Mobile improvements - Enhanced */
  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 16px;
    min-width: 48px;
    border-radius: 6px;
    font-weight: bold;
  }
`,pr=j.span`
  font-size: ${M.fontSizes.sm};
  
  @media (max-width: 768px) {
    display: none;
  }
`;j.div`
  width: 1px;
  height: 20px;
  background: ${M.colors.borderColor};
  margin: 0 ${M.spacing.sm};
  
  @media (max-width: 768px) {
    display: none;
  }
`;var mr=({currentScreen:e,selectedIndex:t=0,data:n=[],onAction:r,showPdfExport:i=!1})=>{let a=e=>{r&&r(e)},o=(()=>{let r=t>=0&&n.length>0,a=r?n[t]:null;switch(e){case`customers`:return[{key:`N`,text:`Neuer Kunde`,action:`new`,available:!0,primary:!0},{key:`E`,text:`Bearbeiten`,action:`edit`,available:r,primary:!1},{key:`ENTER`,text:`Öffnen`,action:`open`,available:r,primary:!0},{key:`D`,text:`Löschen`,action:`delete`,available:r,danger:!0}];case`offers`:let e=[{key:`N`,text:`Neue Offerte`,action:`new`,available:!0,primary:!0},{key:`E`,text:`Bearbeiten`,action:`edit`,available:r,primary:!1},{key:`ENTER`,text:`Positionen`,action:`open`,available:r,primary:!0},{key:`S`,text:`Status ändern`,action:`status`,available:r,primary:!1}];return r&&a.status===`angenommen`&&e.push({key:`R`,text:`→ Rechnung`,action:`toInvoice`,available:!0,primary:!1}),i&&r&&e.push({key:`P`,text:`PDF Export`,action:`pdf`,available:!0,primary:!1}),e.push({key:`D`,text:`Löschen`,action:`delete`,available:r,danger:!0}),e;case`invoices`:return[{key:`N`,text:`Neue Rechnung`,action:`new`,available:!0,primary:!0},{key:`E`,text:`Bearbeiten`,action:`edit`,available:r,primary:!1},{key:`P`,text:`PDF Export`,action:`pdf`,available:r,primary:!0},{key:`S`,text:`Status ändern`,action:`status`,available:r,primary:!1},{key:`D`,text:`Löschen`,action:`delete`,available:r,danger:!0}];default:return[]}})();return o.length===0?null:(0,N.jsx)(ur,{children:o.map((e,t)=>(0,N.jsx)(v.Fragment,{children:(0,N.jsxs)(dr,{className:`
              ${e.available?`available`:``} 
              ${e.primary?`primary`:``} 
              ${e.danger?`danger`:``}
            `,onClick:()=>e.available&&a(e.action),children:[(0,N.jsx)(fr,{children:e.key}),(0,N.jsx)(pr,{children:e.text})]})},e.key))})},hr=j.button`
  /* Desktop: Verstecken */
  display: none;
  
  /* Mobile: Floating Button rechts oben */
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 60px; /* Unter TitleBar */
    right: 16px;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: ${M.colors.accentGreen};
    border: 2px solid ${M.colors.bgPrimary};
    box-shadow: 0 2px 8px rgba(85, 255, 85, 0.4), 
                0 1px 4px rgba(0, 0, 0, 0.6);
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 900;
    
    /* Icon */
    font-size: 24px;
    color: ${M.colors.bgPrimary};
    font-weight: bold;
    line-height: 1;
    
    &:active {
      transform: scale(0.9);
      box-shadow: 0 2px 6px rgba(85, 255, 85, 0.3), 
                  0 1px 4px rgba(0, 0, 0, 0.4);
    }
    
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`,gr=({onClick:e,disabled:t=!1,icon:n=`+`})=>(0,N.jsx)(hr,{onClick:e,disabled:t,"aria-label":`Neu erstellen`,children:n}),_r=j.div`
  padding: ${M.spacing.xl};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
`,vr=j.div`
  text-align: center;
  margin-bottom: ${M.spacing.xl};
`,yr=j.pre`
  color: ${M.colors.accentPurple};
  font-family: ${M.fonts.mono};
  font-size: 24px;
  line-height: 1;
  margin: 0 0 ${M.spacing.lg} 0;
  text-align: center;
  user-select: none;
  letter-spacing: -2px;
  
  @media (max-width: ${M.breakpoints.mobile}) {
    font-size: 16px;
    letter-spacing: -1px;
  }
`,br=j.h2`
  color: ${M.colors.accentCyan};
  margin: 0;
  font-size: ${M.fontSizes.xl};
  font-weight: ${M.fontWeights.medium};
  letter-spacing: ${M.letterSpacing.wide};
  text-transform: uppercase;
  text-align: center;
`,xr=j.div`
  display: flex;
  gap: ${M.spacing.xl};
  margin: ${M.spacing.xl} 0;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  
  @media (max-width: ${M.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${M.spacing.lg};
  }
`,Sr=j.div`
  background: ${M.colors.bgSecondary};
  border: 2px solid ${M.colors.borderColor};
  border-radius: ${M.borderRadius.lg};
  padding: ${M.spacing.xl};
  min-width: 300px;
  max-width: 400px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${M.colors.accentBlue};
    box-shadow: 0 6px 16px rgba(74, 158, 255, 0.2);
    transform: translateY(-2px);
  }
  
  h3 {
    color: ${M.colors.accentGreen};
    margin: 0 0 ${M.spacing.lg} 0;
    font-size: ${M.fontSizes.lg};
    font-weight: ${M.fontWeights.bold};
    display: flex;
    align-items: center;
    gap: ${M.spacing.sm};
    padding-bottom: ${M.spacing.md};
    border-bottom: 2px solid ${M.colors.bgTertiary};
    letter-spacing: ${M.letterSpacing.normal};
  }
  
  @media (max-width: ${M.breakpoints.mobile}) {
    min-width: unset;
    max-width: unset;
    width: 100%;
  }
`,Cr=j.div`
  display: flex;
  flex-direction: column;
  gap: ${M.spacing.md};
`,wr=j.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${M.spacing.sm} ${M.spacing.md};
  background: ${M.colors.bgTertiary};
  border-radius: ${M.borderRadius.base};
  border-left: 3px solid ${M.colors.accentBlue};
  transition: all 0.2s ease;
  
  &:hover {
    background: ${M.colors.bgHover};
    border-left-color: ${M.colors.accentCyan};
    transform: translateX(4px);
  }
`,Tr=j.span`
  color: ${M.colors.textSecondary};
  font-size: ${M.fontSizes.base};
  font-weight: ${M.fontWeights.medium};
`,Er=j.span`
  color: ${M.colors.accentBlue};
  font-weight: ${M.fontWeights.bold};
  font-size: ${M.fontSizes.lg};
  font-family: ${M.fonts.mono};
  
  &.ready {
    color: ${M.colors.success};
  }
`,Dr=j.div`
  display: flex;
  flex-direction: column;
  gap: ${M.spacing.sm};
`,Or=j.div`
  color: ${M.colors.textPrimary};
  padding: ${M.spacing.md} ${M.spacing.lg};
  font-size: ${M.fontSizes.base};
  background: ${M.colors.bgTertiary};
  border-radius: ${M.borderRadius.base};
  border-left: 3px solid ${M.colors.accentYellow};
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    background: ${M.colors.bgHover};
    border-left-color: ${M.colors.accentGreen};
    transform: translateX(4px);
  }
  
  strong {
    color: ${M.colors.accentYellow};
    font-weight: ${M.fontWeights.bold};
  }
`,kr=j.div`
  text-align: center;
  color: ${M.colors.textSecondary};
  font-style: italic;
  margin-top: ${M.spacing.xl};
  padding-top: ${M.spacing.xl};
  border-top: 1px solid ${M.colors.borderColor};
  
  p {
    margin: 0;
    font-size: ${M.fontSizes.base};
    letter-spacing: ${M.letterSpacing.normal};
  }
`,Ar=({stats:e={}})=>{let t={kunden:0,offerten:0,rechnungen:0,status:`System bereit`,...e};return(0,N.jsxs)(_r,{children:[(0,N.jsxs)(vr,{children:[(0,N.jsx)(yr,{children:`
    ██╗  ██╗██╗██╗  ██╗
    ██║  ██║██║██║  ██║  
    ███████║██║███████║
    ██╔══██║██║██╔══██║
    ██║  ██║██║██║  ██║
    ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝
        `}),(0,N.jsx)(br,{children:`HIH-Verwaltung v2.0`})]}),(0,N.jsxs)(xr,{children:[(0,N.jsxs)(Sr,{children:[(0,N.jsx)(`h3`,{children:`📊 System Status`}),(0,N.jsxs)(Cr,{children:[(0,N.jsxs)(wr,{children:[(0,N.jsx)(Tr,{children:`Kunden`}),(0,N.jsx)(Er,{children:t.kunden})]}),(0,N.jsxs)(wr,{children:[(0,N.jsx)(Tr,{children:`Offerten`}),(0,N.jsx)(Er,{children:t.offerten})]}),(0,N.jsxs)(wr,{children:[(0,N.jsx)(Tr,{children:`Rechnungen`}),(0,N.jsx)(Er,{children:t.rechnungen})]}),(0,N.jsxs)(wr,{children:[(0,N.jsx)(Tr,{children:`Status`}),(0,N.jsx)(Er,{className:`ready`,children:t.status})]})]})]}),(0,N.jsxs)(Sr,{children:[(0,N.jsx)(`h3`,{children:`⚡ Schnellzugriff`}),(0,N.jsxs)(Dr,{children:[(0,N.jsxs)(Or,{children:[(0,N.jsx)(`strong`,{children:`F2`}),` → Kundenverwaltung`]}),(0,N.jsxs)(Or,{children:[(0,N.jsx)(`strong`,{children:`F3`}),` → Offertenverwaltung`]}),(0,N.jsxs)(Or,{children:[(0,N.jsx)(`strong`,{children:`F4`}),` → Rechnungserstellung`]}),(0,N.jsxs)(Or,{children:[(0,N.jsx)(`strong`,{children:`F6`}),` → PDF-Export`]}),(0,N.jsxs)(Or,{children:[(0,N.jsx)(`strong`,{children:`F5`}),` → Daten aktualisieren`]})]})]})]}),(0,N.jsx)(kr,{children:(0,N.jsx)(`p`,{children:`⌨️  Verwende die F-Tasten für die Navigation  •  ESC für Zurück  •  ↑↓ für Listen`})})]})},jr=j.div`
  flex: 1;
  padding: ${M.spacing.lg};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,Mr=j.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  background: ${M.colors.bgPrimary};
  border-radius: ${M.borderRadius.base};
  overflow: hidden;
  flex: 1;
  display: table;
  table-layout: fixed;
`,Nr=j.thead`
  background: ${M.colors.bgTertiary};
`,Pr=j.th`
  color: ${M.colors.accentCyan};
  padding: ${M.spacing.md} ${M.spacing.lg};
  text-align: left;
  border-bottom: 2px solid ${M.colors.borderColor};
  font-weight: ${M.fontWeights.semibold};
  font-size: ${M.fontSizes.sm};
  text-transform: uppercase;
  letter-spacing: ${M.letterSpacing.wide};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: ${M.breakpoints.mobile}) {
    padding: ${M.spacing.xs} ${M.spacing.sm};
    
    /* Hide header cells on mobile except first one */
    &:not(:first-child) {
      display: none;
    }
  }
`,Fr=j.tbody`
  background: ${M.colors.bgSecondary};
`,Ir=j.tr`
  ${Un.tableRowHover}
  height: auto;
  
  &.selected {
    background: ${M.colors.bgHover};
    border-left: 3px solid ${M.colors.accentBlue};
    position: relative;
  }
  
  &.empty-row td {
    text-align: center;
    color: ${M.colors.textSecondary};
    font-style: italic;
    padding: ${M.spacing.xl};
    font-size: ${M.fontSizes.base};
  }
`,Lr=j.td`
  padding: ${M.spacing.sm} ${M.spacing.md};
  color: ${M.colors.textPrimary};
  vertical-align: top;
  font-size: ${M.fontSizes.md};
  line-height: ${M.lineHeights.normal};
  
  @media (max-width: ${M.breakpoints.mobile}) {
    padding: ${M.spacing.xs} ${M.spacing.sm};
    
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
`,Rr=j.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  
  @media (max-width: ${M.breakpoints.mobile}) {
    display: none;
  }
`,zr=j.div`
  display: none;
  line-height: ${M.lineHeights.tight};
  
  @media (max-width: ${M.breakpoints.mobile}) {
    display: block;
  }
`,Br=j.div`
  margin-bottom: 2px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Vr=j.span`
  ${Un.statusBadge}
  
  &.status-offen {
    background: ${M.colors.accentYellow};
    color: ${M.colors.bgPrimary};
  }
  
  &.status-abgeschlossen {
    background: ${M.colors.accentGreen};
    color: ${M.colors.bgPrimary};
  }
  
  &.status-abgelehnt {
    background: ${M.colors.accentRed};
    color: ${M.colors.bgPrimary};
  }
`,Hr=({data:e=[],columns:t=[],selectedIndex:n=0,onRowClick:r,onDoubleClick:i,emptyMessage:a=`Keine Daten vorhanden`,type:o=`default`})=>{let s=(e,n)=>o===`customers`?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(Lr,{children:[(0,N.jsx)(Rr,{children:(0,N.jsx)(`div`,{style:{fontWeight:`bold`,color:M.colors.accentBlue},children:e.name})}),(0,N.jsxs)(zr,{children:[(0,N.jsx)(Br,{style:{fontWeight:`bold`,color:M.colors.accentBlue,fontSize:M.fontSizes.base},children:e.name}),(0,N.jsxs)(Br,{style:{color:M.colors.textSecondary,fontSize:M.fontSizes.sm},children:[e.email,`, `,e.telefon]})]})]}),(0,N.jsx)(Lr,{children:e.email}),(0,N.jsx)(Lr,{children:e.telefon})]}):o===`offers`?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(Lr,{children:[(0,N.jsx)(Rr,{children:(0,N.jsx)(`div`,{style:{fontWeight:`bold`,color:M.colors.accentBlue},children:e.titel})}),(0,N.jsxs)(zr,{children:[(0,N.jsxs)(Br,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,N.jsx)(`span`,{style:{fontWeight:`bold`,color:M.colors.accentBlue,fontSize:M.fontSizes.base,flex:1,marginRight:M.spacing.xs},children:e.titel}),(0,N.jsx)(Vr,{className:`status-${e.status}`,style:{fontSize:M.fontSizes.sm,whiteSpace:`nowrap`},children:e.status})]}),(0,N.jsxs)(Br,{style:{fontWeight:`bold`,color:M.colors.accentGreen,fontSize:M.fontSizes.md,textAlign:`center`,margin:`1px 0`},children:[`CHF `,e.gesamtBrutto?.toFixed(2)||`0.00`]}),(0,N.jsxs)(Br,{style:{display:`flex`,justifyContent:`space-between`,color:M.colors.textSecondary,fontSize:M.fontSizes.sm},children:[(0,N.jsx)(`span`,{children:e.kundeName||`Unbekannt`}),(0,N.jsx)(`span`,{children:e.datum?new Date(e.datum).toLocaleDateString(`de-CH`):``})]})]})]}),(0,N.jsx)(Lr,{children:e.kundeName||`Unbekannt`}),(0,N.jsx)(Lr,{style:{textAlign:`right`},children:(0,N.jsxs)(`span`,{style:{fontWeight:`bold`,color:M.colors.accentGreen},children:[`CHF `,e.gesamtBrutto?.toFixed(2)||`0.00`]})}),(0,N.jsx)(Lr,{style:{textAlign:`center`},children:(0,N.jsx)(Vr,{className:`status-${e.status}`,children:e.status})}),(0,N.jsx)(Lr,{children:e.datum?new Date(e.datum).toLocaleDateString(`de-CH`):``})]}):o===`invoices`?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(Lr,{children:[(0,N.jsx)(Rr,{children:(0,N.jsx)(`div`,{style:{fontWeight:`bold`,color:M.colors.accentCyan},children:e.nummer})}),(0,N.jsxs)(zr,{children:[(0,N.jsxs)(Br,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,N.jsx)(`span`,{style:{fontWeight:`bold`,color:M.colors.accentCyan,fontSize:M.fontSizes.sm,marginRight:M.spacing.xs},children:e.nummer}),(0,N.jsx)(Vr,{className:`status-${e.status}`,style:{fontSize:M.fontSizes.sm,whiteSpace:`nowrap`},children:e.status})]}),(0,N.jsx)(Br,{style:{fontWeight:`bold`,color:M.colors.accentBlue,fontSize:M.fontSizes.base},children:e.titel}),(0,N.jsxs)(Br,{style:{fontWeight:`bold`,color:M.colors.accentGreen,fontSize:M.fontSizes.md,textAlign:`center`,margin:`1px 0`},children:[`CHF `,e.gesamtBrutto?.toFixed(2)||`0.00`]}),(0,N.jsxs)(Br,{style:{display:`flex`,justifyContent:`space-between`,color:M.colors.textSecondary,fontSize:M.fontSizes.sm},children:[(0,N.jsx)(`span`,{children:e.kundeName||`Unbekannt`}),(0,N.jsxs)(`span`,{children:[`Fällig: `,e.faelligkeitsdatum?new Date(e.faelligkeitsdatum).toLocaleDateString(`de-CH`):``]})]})]})]}),(0,N.jsx)(Lr,{children:(0,N.jsx)(`span`,{style:{fontWeight:`bold`,color:M.colors.accentBlue},children:e.titel})}),(0,N.jsx)(Lr,{children:e.kundeName||`Unbekannt`}),(0,N.jsx)(Lr,{style:{textAlign:`right`},children:(0,N.jsxs)(`span`,{style:{fontWeight:`bold`,color:M.colors.accentGreen},children:[`CHF `,e.gesamtBrutto?.toFixed(2)||`0.00`]})}),(0,N.jsx)(Lr,{style:{textAlign:`center`},children:(0,N.jsx)(Vr,{className:`status-${e.status}`,children:e.status})}),(0,N.jsx)(Lr,{children:e.faelligkeitsdatum?new Date(e.faelligkeitsdatum).toLocaleDateString(`de-CH`):``})]}):t.map((t,n)=>(0,N.jsx)(Lr,{children:t.render?t.render(e):e[t.key]},n)),c=()=>o===`customers`?[`Name`,`E-Mail`,`Telefon`]:o===`offers`?[`Titel`,`Kunde`,`Gesamtbetrag`,`Status`,`Datum`]:o===`invoices`?[`Nummer`,`Titel`,`Kunde`,`Gesamtbetrag`,`Status`,`Fällig am`]:t.map(e=>e.label);return(0,N.jsx)(jr,{children:(0,N.jsxs)(Mr,{children:[(0,N.jsx)(Nr,{children:(0,N.jsx)(`tr`,{children:c().map((e,t)=>(0,N.jsx)(Pr,{children:e},t))})}),(0,N.jsx)(Fr,{children:e.length===0?(0,N.jsx)(Ir,{className:`empty-row`,children:(0,N.jsx)(Lr,{colSpan:c().length,children:a})}):e.map((e,t)=>(0,N.jsx)(Ir,{className:n===t?`selected`:``,onClick:()=>r&&r(t),onDoubleClick:()=>i&&i(e,t),style:{cursor:i?`pointer`:`default`},children:s(e,t)},e.id||t))})]})})},Ur=j.div`
  ${Un.terminalWindow}
  height: 100%;
  display: flex;
  flex-direction: column;
`,Wr=j.div`
  background: ${M.colors.bgTertiary};
  border-bottom: 1px solid ${M.colors.borderColor};
  padding: ${M.spacing.md} ${M.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: center;
`,Gr=j.h2`
  color: ${M.colors.accentBlue};
  margin: 0;
  font-size: ${M.fontSizes.lg};
  font-weight: ${M.fontWeights.bold};
  text-transform: uppercase;
  letter-spacing: ${M.letterSpacing.widest};
`,Kr=j.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,qr=({title:e,children:t,className:n})=>(0,N.jsxs)(Ur,{className:n,children:[(0,N.jsx)(Wr,{children:(0,N.jsx)(Gr,{children:e})}),(0,N.jsx)(Kr,{children:t})]}),Jr=({kunden:e=[],selectedIndex:t=0,onRowClick:n,onDoubleClick:r,onNewCustomer:i,onEditCustomer:a,onDeleteCustomer:o})=>(0,N.jsx)(qr,{title:`Kundenverwaltung`,children:(0,N.jsx)(Hr,{data:e,selectedIndex:t,onRowClick:n,onDoubleClick:r,emptyMessage:`Keine Kunden vorhanden - F3 für neuen Kunden`,type:`customers`})}),Yr=j.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${e=>e.theme.spacing.sm};
  padding: ${e=>e.theme.spacing.md};
  background: ${e=>e.theme.colors.bgSecondary};
  border-bottom: 1px solid ${e=>e.theme.colors.borderColor};
  
  @media (max-width: 768px) {
    gap: 6px;
    padding: 8px;
  }
`,Xr=j.button`
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
    padding: 8px 12px;
    min-height: auto;
    font-size: 13px;
    gap: 4px;
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
`,Zr=j.span`
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
`,Qr=j.span`
  opacity: 0.8;
  font-size: 0.875rem;
  margin-left: ${e=>e.theme.spacing.xs};
`,$r=[{value:`alle`,label:`Alle`,shortcut:`0`},{value:`entwurf`,label:`Entwurf`,shortcut:`1`},{value:`versendet`,label:`Versendet`,shortcut:`2`},{value:`angenommen`,label:`Angenommen`,shortcut:`3`},{value:`abgelehnt`,label:`Abgelehnt`,shortcut:`4`}],ei=({activeFilter:e,onFilterChange:t,allOfferten:n=[],statusOptions:r=$r})=>{(0,v.useEffect)(()=>{let e=e=>{if(e.target.tagName===`INPUT`||e.target.tagName===`TEXTAREA`||e.target.tagName===`SELECT`)return;let n=e.key,i=r.find(e=>e.shortcut===n);i&&(e.preventDefault(),t(i.value))};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},[t]);let i=e=>!n||n.length===0?0:e===`alle`?n.length:n.filter(t=>t.status===e).length;return(0,N.jsx)(Yr,{children:r.map(n=>(0,N.jsxs)(Xr,{$active:e===n.value,onClick:()=>t(n.value),children:[n.label,(0,N.jsx)(Zr,{$active:e===n.value,children:n.shortcut}),(0,N.jsxs)(Qr,{children:[`(`,i(n.value),`)`]})]},n.value))})},ti=({offerten:e=[],allOfferten:t=[],selectedIndex:n=0,onRowClick:r,onDoubleClick:i,onNewOffer:a,onEditOffer:o,onDeleteOffer:s,statusFilter:c,onStatusFilterChange:l})=>(0,N.jsxs)(qr,{title:`Offertenverwaltung`,children:[(0,N.jsx)(ei,{activeFilter:c,onFilterChange:l,allOfferten:t}),(0,N.jsx)(Hr,{data:e,selectedIndex:n,onRowClick:r,onDoubleClick:i,emptyMessage:`Keine Offerten mit Status "${c}" vorhanden - F3 für neue Offerte`,type:`offers`})]}),ni=[{value:`alle`,label:`Alle`,shortcut:`0`},{value:`entwurf`,label:`Entwurf`,shortcut:`1`},{value:`fertig`,label:`Fertig`,shortcut:`2`},{value:`gesendet`,label:`Gesendet`,shortcut:`3`},{value:`bezahlt`,label:`Bezahlt`,shortcut:`4`}],ri=({rechnungen:e=[],allRechnungen:t=[],selectedIndex:n=0,onRowClick:r,onDoubleClick:i,statusFilter:a,onStatusFilterChange:o})=>(0,N.jsxs)(qr,{title:`Rechnungsverwaltung`,children:[(0,N.jsx)(ei,{activeFilter:a,onFilterChange:o,allOfferten:t,statusOptions:ni}),(0,N.jsx)(Hr,{data:e,selectedIndex:n,onRowClick:r,onDoubleClick:i,emptyMessage:`Keine Rechnungen mit Status "${a}" vorhanden - F4 für neue Rechnung`,type:`invoices`})]}),ii=j.div`
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
  padding: ${M.spacing.lg};
  
  @media (max-width: ${M.breakpoints.mobile}) {
    padding: ${M.spacing.sm};
  }
`,ai=j.div`
  background: ${M.colors.bgPrimary};
  border: 2px solid ${M.colors.borderColor};
  border-radius: ${M.borderRadius.sm};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  max-width: ${e=>e.wide?`1200px`:`600px`};
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  
  /* Terminal-Style Shadow */
  box-shadow: 
    0 0 0 1px ${M.colors.borderColor},
    2px 2px 0 ${M.colors.bgTertiary};

  @media (max-width: ${M.breakpoints.mobile}) {
    max-width: 95vw;
    max-height: 95vh;
  }
`,oi=j.div`
  background: ${M.colors.bgSecondary};
  padding: ${M.spacing.md} ${M.spacing.lg};
  border-bottom: 1px solid ${M.colors.borderColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,si=j.h2`
  color: ${M.colors.accentCyan};
  font-size: ${M.fontSizes.lg};
  font-weight: ${M.fontWeights.semibold};
  margin: 0;
  font-family: ${M.fonts.mono};
  text-transform: uppercase;
  letter-spacing: ${M.letterSpacing.wide};
`,ci=j.button`
  background: transparent;
  border: 1px solid ${M.colors.borderColor};
  color: ${M.colors.textPrimary};
  width: 30px;
  height: 30px;
  border-radius: ${M.borderRadius.sm};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${M.fontSizes.lg};
  font-weight: bold;
  
  /* Mobile touch optimization */
  @media (max-width: 768px) {
    width: 52px;
    height: 52px;
    font-size: 20px;
    border: 2px solid ${M.colors.borderColor};
  }
  
  &:hover {
    background: ${M.colors.bgTertiary};
    color: ${M.colors.accentRed};
    border-color: ${M.colors.accentRed};
  }
  
  &:active {
    transform: translateY(1px);
  }
`,li=j.div`
  padding: ${M.spacing.lg};
  
  @media (max-width: ${M.breakpoints.mobile}) {
    padding: ${M.spacing.xl};
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
`,ui=({isOpen:e,onClose:t,title:n,children:r,closeOnOverlay:i=!0,wide:a=!1})=>((0,v.useEffect)(()=>{let n=e=>{e.keyCode===27&&t&&t()};return e&&(document.addEventListener(`keydown`,n,!1),document.body.style.overflow=`hidden`),()=>{document.removeEventListener(`keydown`,n,!1),document.body.style.overflow=`unset`}},[e,t]),e?(0,N.jsx)(ii,{onClick:e=>{e.target===e.currentTarget&&i&&t&&t()},children:(0,N.jsxs)(ai,{wide:a,children:[(0,N.jsxs)(oi,{children:[(0,N.jsx)(si,{children:n}),(0,N.jsx)(ci,{onClick:t,"aria-label":`Schließen`,children:`×`})]}),(0,N.jsx)(li,{children:r})]})}):null),di=s({Button:()=>Si,ButtonGroup:()=>xi,ErrorMessage:()=>Ci,Form:()=>fi,FormGroup:()=>gi,FormRow:()=>hi,FormSection:()=>pi,FormSectionTitle:()=>mi,Input:()=>vi,Label:()=>_i,Select:()=>bi,TextArea:()=>yi});const fi=j.form`
  display: flex;
  flex-direction: column;
  gap: ${M.spacing.lg};
`,pi=j.div`
  display: flex;
  flex-direction: column;
  gap: ${M.spacing.md};
`,mi=j.h3`
  color: ${M.colors.accentYellow};
  font-size: ${M.fontSizes.base};
  font-weight: ${M.fontWeights.semibold};
  margin: 0;
  padding-bottom: ${M.spacing.xs};
  border-bottom: 1px solid ${M.colors.borderColor};
  text-transform: uppercase;
  letter-spacing: ${M.letterSpacing.wide};
`,hi=j.div`
  display: flex;
  gap: ${M.spacing.md};
  
  @media (max-width: ${M.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${M.spacing.sm};
  }
`,gi=j.div`
  display: flex;
  flex-direction: column;
  gap: ${M.spacing.xs};
  flex: ${e=>e.flex||1};
`,_i=j.label`
  color: ${M.colors.textPrimary};
  font-size: ${M.fontSizes.sm};
  font-weight: ${M.fontWeights.medium};
  text-transform: uppercase;
  letter-spacing: ${M.letterSpacing.wide};
  
  ${e=>e.required&&`
    &::after {
      content: ' *';
      color: ${M.colors.accentRed};
    }
  `}
`,vi=j.input`
  background: ${M.colors.bgTertiary};
  border: 1px solid ${M.colors.borderColor};
  border-radius: ${M.borderRadius.sm};
  padding: ${M.spacing.sm} ${M.spacing.md};
  color: ${M.colors.textPrimary};
  font-size: ${M.fontSizes.md};
  font-family: ${M.fonts.mono};
  
  &:focus {
    outline: none;
    border-color: ${M.colors.accentBlue};
    box-shadow: 0 0 0 2px ${M.colors.accentBlue}33;
  }
  
  &:disabled {
    background: ${M.colors.bgSecondary};
    color: ${M.colors.textSecondary};
    cursor: not-allowed;
  }
  
  &::placeholder {
    color: ${M.colors.textSecondary};
  }
`,yi=j.textarea`
  background: ${M.colors.bgTertiary};
  border: 1px solid ${M.colors.borderColor};
  border-radius: ${M.borderRadius.sm};
  padding: ${M.spacing.sm} ${M.spacing.md};
  color: ${M.colors.textPrimary};
  font-size: ${M.fontSizes.md};
  font-family: ${M.fonts.mono};
  min-height: 80px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${M.colors.accentBlue};
    box-shadow: 0 0 0 2px ${M.colors.accentBlue}33;
  }
  
  &:disabled {
    background: ${M.colors.bgSecondary};
    color: ${M.colors.textSecondary};
    cursor: not-allowed;
  }
  
  &::placeholder {
    color: ${M.colors.textSecondary};
  }
`,bi=j.select`
  background: ${M.colors.bgTertiary};
  border: 1px solid ${M.colors.borderColor};
  border-radius: ${M.borderRadius.sm};
  padding: ${M.spacing.sm} ${M.spacing.md};
  color: ${M.colors.textPrimary};
  font-size: ${M.fontSizes.md};
  font-family: ${M.fonts.mono};
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: ${M.colors.accentBlue};
    box-shadow: 0 0 0 2px ${M.colors.accentBlue}33;
  }
  
  &:disabled {
    background: ${M.colors.bgSecondary};
    color: ${M.colors.textSecondary};
    cursor: not-allowed;
  }
  
  option {
    background: ${M.colors.bgTertiary};
    color: ${M.colors.textPrimary};
  }
`,xi=j.div`
  display: flex;
  gap: ${M.spacing.md};
  justify-content: flex-end;
  margin-top: ${M.spacing.xl};
  padding-top: ${M.spacing.lg};
  border-top: 1px solid ${M.colors.borderColor};
  
  @media (max-width: ${M.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${M.spacing.sm};
  }
`,Si=j.button`
  background: ${e=>e.variant===`primary`?M.colors.accentBlue:e.variant===`danger`?M.colors.accentRed:e.variant===`success`?M.colors.accentGreen:M.colors.bgTertiary};
  
  border: 1px solid ${e=>e.variant===`primary`?M.colors.accentBlue:e.variant===`danger`?M.colors.accentRed:e.variant===`success`?M.colors.accentGreen:M.colors.borderColor};
  
  color: ${e=>e.variant===`primary`||e.variant===`danger`||e.variant===`success`?M.colors.bgPrimary:M.colors.textPrimary};
  
  border-radius: ${M.borderRadius.sm};
  padding: ${M.spacing.sm} ${M.spacing.lg};
  font-size: ${M.fontSizes.md};
  font-weight: ${M.fontWeights.medium};
  font-family: ${M.fonts.mono};
  text-transform: uppercase;
  letter-spacing: ${M.letterSpacing.wide};
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
  
  @media (max-width: ${M.breakpoints.mobile}) {
    padding: ${M.spacing.md};
    min-width: unset;
  }
`,Ci=j.div`
  color: ${M.colors.accentRed};
  font-size: ${M.fontSizes.sm};
  margin-top: ${M.spacing.xs};
  display: flex;
  align-items: center;
  gap: ${M.spacing.xs};
  
  &::before {
    content: '⚠';
    font-size: ${M.fontSizes.base};
  }
`,wi=(e={},t=null)=>{let[n,r]=(0,v.useState)(e),[i,a]=(0,v.useState)({}),[o,s]=(0,v.useState)({}),[c,l]=(0,v.useState)(!1),u=(0,v.useCallback)((e,t)=>{r(n=>({...n,[e]:t})),i[e]&&a(t=>{let n={...t};return delete n[e],n})},[i]),d=(0,v.useCallback)(e=>{r(t=>({...t,...e}))},[]),f=(0,v.useCallback)(e=>{if(s(t=>({...t,[e]:!0})),t){let r=t(n);r[e]&&a(t=>({...t,[e]:r[e]}))}},[n,t]),p=(0,v.useCallback)(()=>{if(!t)return!0;let e=t(n);return a(e),Object.keys(e).length===0},[n,t]),m=(0,v.useCallback)((t=e)=>{r(t),a({}),s({}),l(!1)},[e]),h=(0,v.useCallback)(e=>{r(e),a({}),s({})},[]),g=(0,v.useCallback)(async e=>{let t=Object.keys(n).reduce((e,t)=>(e[t]=!0,e),{});if(s(t),!p())return!1;l(!0);try{return await e(n),!0}catch(e){return console.error(`Form submission error:`,e),!1}finally{l(!1)}},[n,p]),_=(0,v.useCallback)((e,t)=>{a(n=>({...n,[e]:t}))},[]),y=(0,v.useCallback)(e=>o[e]&&i[e],[o,i]);return{formData:n,errors:i,touched:o,isSubmitting:c,handleChange:u,handleBlur:f,handleSubmit:g,validate:p,resetForm:m,setFormData:h,setValues:d,setError:_,hasError:y,isValid:Object.keys(i).length===0,isDirty:Object.keys(o).length>0}};var{Form:Ti,FormSection:Ei,FormSectionTitle:Di,FormRow:Oi,FormGroup:ki,Label:Ai,Input:ji,Select:Mi,TextArea:Ni,ButtonGroup:Pi,Button:Fi,ErrorMessage:Ii}=di,Li=j.div`
  display: flex;
  align-items: center;
  gap: ${M.spacing.md};
`,Ri=j.div`
  width: 60px;
  height: 40px;
  border: 2px solid ${M.colors.borderColor};
  border-radius: ${M.borderRadius.sm};
  background: ${e=>e.color||`#bd00ff`};
  cursor: pointer;
`,zi=j(ji)`
  flex: 1;
`,Bi=e=>{let t={};return e.name?.trim()||(t.name=`Firmenname ist erforderlich`),e.email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)&&(t.email=`Ungültige E-Mail-Adresse`),e.mwstSatz!==void 0&&(isNaN(e.mwstSatz)||e.mwstSatz<0||e.mwstSatz>100)&&(t.mwstSatz=`MwSt-Satz muss zwischen 0 und 100 liegen`),t},Vi=({isOpen:e,onClose:t,firma:n=null,onSave:r,loading:i=!1})=>{let a=()=>n?{name:n.name||``,strasse:n.strasse||``,plz:n.plz||``,ort:n.ort||``,land:n.land||`Schweiz`,email:n.email||``,telefon:n.telefon||``,website:n.website||``,uid:n.uid||``,iban:n.iban||``,mwstSatz:n.mwstSatz===void 0?0:n.mwstSatz,mwstPflichtig:n.mwstPflichtig||!1,accentColor:n[`accent-color`]||n.accentColor||`#bd00ff`,mainFont:n[`main-font`]||n.mainFont||`Lexend Exa`,slogan:n.slogan||``}:{name:``,strasse:``,plz:``,ort:``,land:`Schweiz`,email:``,telefon:``,website:``,uid:``,iban:``,mwstSatz:0,mwstPflichtig:!1,accentColor:`#bd00ff`,mainFont:`Lexend Exa`,slogan:``},{formData:o,errors:s,touched:c,handleChange:l,handleBlur:u,handleSubmit:d,resetForm:f,setFormData:p}=wi(a(),Bi);(0,v.useEffect)(()=>{e?p(a()):f()},[n,e]);let m=()=>{r(o)},h=()=>{f(),t()},g=!!n,_=g?`Firmenprofil bearbeiten: ${n?.name}`:`Neues Firmenprofil`;return(0,N.jsx)(ui,{isOpen:e,onClose:h,title:_,closeOnOverlay:!i,wide:!0,children:(0,N.jsxs)(Ti,{onSubmit:e=>{e.preventDefault(),d(m)},children:[(0,N.jsxs)(Ei,{children:[(0,N.jsx)(Di,{children:`Grunddaten`}),(0,N.jsxs)(ki,{children:[(0,N.jsx)(Ai,{required:!0,children:`Firmenname`}),(0,N.jsx)(ji,{type:`text`,value:o.name,onChange:e=>l(`name`,e.target.value),onBlur:()=>u(`name`),disabled:i,placeholder:`Hinderling Internet Handwerk`}),s.name&&c.name&&(0,N.jsx)(Ii,{children:s.name})]}),(0,N.jsxs)(Oi,{children:[(0,N.jsxs)(ki,{flex:2,children:[(0,N.jsx)(Ai,{children:`Strasse & Hausnummer`}),(0,N.jsx)(ji,{type:`text`,value:o.strasse,onChange:e=>l(`strasse`,e.target.value),disabled:i,placeholder:`Werkhofstrasse 11`})]}),(0,N.jsxs)(ki,{flex:1,children:[(0,N.jsx)(Ai,{children:`PLZ`}),(0,N.jsx)(ji,{type:`text`,value:o.plz,onChange:e=>l(`plz`,e.target.value),disabled:i,placeholder:`2503`})]}),(0,N.jsxs)(ki,{flex:2,children:[(0,N.jsx)(Ai,{children:`Ort`}),(0,N.jsx)(ji,{type:`text`,value:o.ort,onChange:e=>l(`ort`,e.target.value),disabled:i,placeholder:`Biel`})]})]}),(0,N.jsx)(Oi,{children:(0,N.jsxs)(ki,{children:[(0,N.jsx)(Ai,{children:`Land`}),(0,N.jsx)(ji,{type:`text`,value:o.land,onChange:e=>l(`land`,e.target.value),disabled:i,placeholder:`Schweiz`})]})})]}),(0,N.jsxs)(Ei,{children:[(0,N.jsx)(Di,{children:`Kontaktdaten`}),(0,N.jsxs)(Oi,{children:[(0,N.jsxs)(ki,{children:[(0,N.jsx)(Ai,{children:`E-Mail`}),(0,N.jsx)(ji,{type:`email`,value:o.email,onChange:e=>l(`email`,e.target.value),onBlur:()=>u(`email`),disabled:i,placeholder:`hallo@beispiel.ch`}),s.email&&c.email&&(0,N.jsx)(Ii,{children:s.email})]}),(0,N.jsxs)(ki,{children:[(0,N.jsx)(Ai,{children:`Telefon`}),(0,N.jsx)(ji,{type:`tel`,value:o.telefon,onChange:e=>l(`telefon`,e.target.value),disabled:i,placeholder:`079/123'45'67`})]})]}),(0,N.jsxs)(ki,{children:[(0,N.jsx)(Ai,{children:`Website`}),(0,N.jsx)(ji,{type:`url`,value:o.website,onChange:e=>l(`website`,e.target.value),disabled:i,placeholder:`https://www.beispiel.ch`})]})]}),(0,N.jsxs)(Ei,{children:[(0,N.jsx)(Di,{children:`Steuer & Finanzen`}),(0,N.jsxs)(Oi,{children:[(0,N.jsxs)(ki,{children:[(0,N.jsx)(Ai,{children:`UID-Nummer`}),(0,N.jsx)(ji,{type:`text`,value:o.uid,onChange:e=>l(`uid`,e.target.value),disabled:i,placeholder:`CHE-123.456.789`})]}),(0,N.jsxs)(ki,{children:[(0,N.jsx)(Ai,{children:`IBAN`}),(0,N.jsx)(ji,{type:`text`,value:o.iban,onChange:e=>l(`iban`,e.target.value),disabled:i,placeholder:`CH93 0076 2011 6238 5295 7`})]})]}),(0,N.jsxs)(Oi,{children:[(0,N.jsxs)(ki,{children:[(0,N.jsx)(Ai,{children:`MwSt-Satz (%)`}),(0,N.jsx)(ji,{type:`number`,step:`0.1`,min:`0`,max:`100`,value:o.mwstSatz,onChange:e=>l(`mwstSatz`,parseFloat(e.target.value)||0),onBlur:()=>u(`mwstSatz`),disabled:i}),s.mwstSatz&&c.mwstSatz&&(0,N.jsx)(Ii,{children:s.mwstSatz})]}),(0,N.jsxs)(ki,{children:[(0,N.jsx)(Ai,{children:`MwSt-pflichtig`}),(0,N.jsxs)(Mi,{value:o.mwstPflichtig?`true`:`false`,onChange:e=>l(`mwstPflichtig`,e.target.value===`true`),disabled:i,children:[(0,N.jsx)(`option`,{value:`false`,children:`Nein`}),(0,N.jsx)(`option`,{value:`true`,children:`Ja`})]})]})]})]}),(0,N.jsxs)(Ei,{children:[(0,N.jsx)(Di,{children:`Design & Branding`}),(0,N.jsxs)(ki,{children:[(0,N.jsx)(Ai,{children:`Akzentfarbe`}),(0,N.jsxs)(Li,{children:[(0,N.jsx)(Ri,{color:o.accentColor,onClick:()=>document.getElementById(`colorPicker`).click()}),(0,N.jsx)(zi,{id:`colorPicker`,type:`color`,value:o.accentColor,onChange:e=>l(`accentColor`,e.target.value),disabled:i}),(0,N.jsx)(ji,{type:`text`,value:o.accentColor,onChange:e=>l(`accentColor`,e.target.value),disabled:i,placeholder:`#bd00ff`,style:{flex:1}})]})]}),(0,N.jsxs)(ki,{children:[(0,N.jsx)(Ai,{children:`Hauptschriftart`}),(0,N.jsxs)(Mi,{value:o.mainFont,onChange:e=>l(`mainFont`,e.target.value),disabled:i,children:[(0,N.jsx)(`option`,{value:`Lexend Exa`,children:`Lexend Exa`}),(0,N.jsx)(`option`,{value:`Urbanist`,children:`Urbanist`}),(0,N.jsx)(`option`,{value:`Arial`,children:`Arial`}),(0,N.jsx)(`option`,{value:`Helvetica`,children:`Helvetica`}),(0,N.jsx)(`option`,{value:`Times New Roman`,children:`Times New Roman`})]})]})]}),(0,N.jsxs)(Ei,{children:[(0,N.jsx)(Di,{children:`Zusätzliche Informationen`}),(0,N.jsxs)(ki,{children:[(0,N.jsx)(Ai,{children:`Slogan / Beschreibung`}),(0,N.jsx)(Ni,{value:o.slogan,onChange:e=>l(`slogan`,e.target.value),disabled:i,placeholder:`Bruchsch ä nöii Website? - chum ufnes Kafi vrbi!`,rows:3})]})]}),(0,N.jsxs)(Pi,{children:[(0,N.jsx)(Fi,{type:`button`,onClick:h,disabled:i,children:`Abbrechen`}),(0,N.jsx)(Fi,{type:`submit`,variant:`primary`,disabled:i,children:i?`Speichern...`:g?`Aktualisieren`:`Erstellen`})]})]})})};function Hi(e,t){return function(){return e.apply(t,arguments)}}var{toString:Ui}=Object.prototype,{getPrototypeOf:Wi}=Object,{iterator:Gi,toStringTag:Ki}=Symbol,qi=(e=>t=>{let n=Ui.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Ji=e=>(e=e.toLowerCase(),t=>qi(t)===e),Yi=e=>t=>typeof t===e,{isArray:P}=Array,F=Yi(`undefined`);function Xi(e){return e!==null&&!F(e)&&e.constructor!==null&&!F(e.constructor)&&ea(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}var Zi=Ji(`ArrayBuffer`);function Qi(e){let t;return t=typeof ArrayBuffer<`u`&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&Zi(e.buffer),t}var $i=Yi(`string`),ea=Yi(`function`),ta=Yi(`number`),na=e=>typeof e==`object`&&!!e,ra=e=>e===!0||e===!1,ia=e=>{if(qi(e)!==`object`)return!1;let t=Wi(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Ki in e)&&!(Gi in e)},aa=e=>{if(!na(e)||Xi(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},oa=Ji(`Date`),sa=Ji(`File`),ca=Ji(`Blob`),la=Ji(`FileList`),ua=e=>na(e)&&ea(e.pipe),da=e=>{let t;return e&&(typeof FormData==`function`&&e instanceof FormData||ea(e.append)&&((t=qi(e))===`formdata`||t===`object`&&ea(e.toString)&&e.toString()===`[object FormData]`))},fa=Ji(`URLSearchParams`),[pa,ma,ha,ga]=[`ReadableStream`,`Request`,`Response`,`Headers`].map(Ji),_a=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,``);function va(e,t,{allOwnKeys:n=!1}={}){if(e==null)return;let r,i;if(typeof e!=`object`&&(e=[e]),P(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{if(Xi(e))return;let i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length,o;for(r=0;r<a;r++)o=i[r],t.call(null,e[o],o,e)}}function ya(e,t){if(Xi(e))return null;t=t.toLowerCase();let n=Object.keys(e),r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}var ba=(()=>typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:global)(),xa=e=>!F(e)&&e!==ba;function Sa(){let{caseless:e,skipUndefined:t}=xa(this)&&this||{},n={},r=(r,i)=>{let a=e&&ya(n,i)||i;ia(n[a])&&ia(r)?n[a]=Sa(n[a],r):ia(r)?n[a]=Sa({},r):P(r)?n[a]=r.slice():(!t||!F(r))&&(n[a]=r)};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&va(arguments[e],r);return n}var Ca=(e,t,n,{allOwnKeys:r}={})=>(va(t,(t,r)=>{n&&ea(t)?e[r]=Hi(t,n):e[r]=t},{allOwnKeys:r}),e),wa=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Ta=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,`super`,{value:t.prototype}),n&&Object.assign(e.prototype,n)},Ea=(e,t,n,r)=>{let i,a,o,s={};if(t||={},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-- >0;)o=i[a],(!r||r(o,e,t))&&!s[o]&&(t[o]=e[o],s[o]=!0);e=n!==!1&&Wi(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Da=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;let r=e.indexOf(t,n);return r!==-1&&r===n},Oa=e=>{if(!e)return null;if(P(e))return e;let t=e.length;if(!ta(t))return null;let n=Array(t);for(;t-- >0;)n[t]=e[t];return n},ka=(e=>t=>e&&t instanceof e)(typeof Uint8Array<`u`&&Wi(Uint8Array)),Aa=(e,t)=>{let n=(e&&e[Gi]).call(e),r;for(;(r=n.next())&&!r.done;){let n=r.value;t.call(e,n[0],n[1])}},ja=(e,t)=>{let n,r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Ma=Ji(`HTMLFormElement`),Na=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,n){return t.toUpperCase()+n}),Pa=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Fa=Ji(`RegExp`),Ia=(e,t)=>{let n=Object.getOwnPropertyDescriptors(e),r={};va(n,(n,i)=>{let a;(a=t(n,i,e))!==!1&&(r[i]=a||n)}),Object.defineProperties(e,r)},La=e=>{Ia(e,(t,n)=>{if(ea(e)&&[`arguments`,`caller`,`callee`].indexOf(n)!==-1)return!1;let r=e[n];if(ea(r)){if(t.enumerable=!1,`writable`in t){t.writable=!1;return}t.set||=()=>{throw Error(`Can not rewrite read-only method '`+n+`'`)}}})},Ra=(e,t)=>{let n={},r=e=>{e.forEach(e=>{n[e]=!0})};return P(e)?r(e):r(String(e).split(t)),n},za=()=>{},Ba=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function Va(e){return!!(e&&ea(e.append)&&e[Ki]===`FormData`&&e[Gi])}var Ha=e=>{let t=Array(10),n=(e,r)=>{if(na(e)){if(t.indexOf(e)>=0)return;if(Xi(e))return e;if(!(`toJSON`in e)){t[r]=e;let i=P(e)?[]:{};return va(e,(e,t)=>{let a=n(e,r+1);!F(a)&&(i[t]=a)}),t[r]=void 0,i}}return e};return n(e,0)},Ua=Ji(`AsyncFunction`),Wa=e=>e&&(na(e)||ea(e))&&ea(e.then)&&ea(e.catch),Ga=((e,t)=>e?setImmediate:t?((e,t)=>(ba.addEventListener(`message`,({source:n,data:r})=>{n===ba&&r===e&&t.length&&t.shift()()},!1),n=>{t.push(n),ba.postMessage(e,`*`)}))(`axios@${Math.random()}`,[]):e=>setTimeout(e))(typeof setImmediate==`function`,ea(ba.postMessage)),Ka=typeof queueMicrotask<`u`?queueMicrotask.bind(ba):typeof process<`u`&&process.nextTick||Ga,I={isArray:P,isArrayBuffer:Zi,isBuffer:Xi,isFormData:da,isArrayBufferView:Qi,isString:$i,isNumber:ta,isBoolean:ra,isObject:na,isPlainObject:ia,isEmptyObject:aa,isReadableStream:pa,isRequest:ma,isResponse:ha,isHeaders:ga,isUndefined:F,isDate:oa,isFile:sa,isBlob:ca,isRegExp:Fa,isFunction:ea,isStream:ua,isURLSearchParams:fa,isTypedArray:ka,isFileList:la,forEach:va,merge:Sa,extend:Ca,trim:_a,stripBOM:wa,inherits:Ta,toFlatObject:Ea,kindOf:qi,kindOfTest:Ji,endsWith:Da,toArray:Oa,forEachEntry:Aa,matchAll:ja,isHTMLForm:Ma,hasOwnProperty:Pa,hasOwnProp:Pa,reduceDescriptors:Ia,freezeMethods:La,toObjectSet:Ra,toCamelCase:Na,noop:za,toFiniteNumber:Ba,findKey:ya,global:ba,isContextDefined:xa,isSpecCompliantForm:Va,toJSONObject:Ha,isAsyncFn:Ua,isThenable:Wa,setImmediate:Ga,asap:Ka,isIterable:e=>e!=null&&ea(e[Gi])};function qa(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error().stack,this.message=e,this.name=`AxiosError`,t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}I.inherits(qa,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:I.toJSONObject(this.config),code:this.code,status:this.status}}});var Ja=qa.prototype,Ya={};[`ERR_BAD_OPTION_VALUE`,`ERR_BAD_OPTION`,`ECONNABORTED`,`ETIMEDOUT`,`ERR_NETWORK`,`ERR_FR_TOO_MANY_REDIRECTS`,`ERR_DEPRECATED`,`ERR_BAD_RESPONSE`,`ERR_BAD_REQUEST`,`ERR_CANCELED`,`ERR_NOT_SUPPORT`,`ERR_INVALID_URL`].forEach(e=>{Ya[e]={value:e}}),Object.defineProperties(qa,Ya),Object.defineProperty(Ja,`isAxiosError`,{value:!0}),qa.from=(e,t,n,r,i,a)=>{let o=Object.create(Ja);I.toFlatObject(e,o,function(e){return e!==Error.prototype},e=>e!==`isAxiosError`);let s=e&&e.message?e.message:`Error`,c=t==null&&e?e.code:t;return qa.call(o,s,c,n,r,i),e&&o.cause==null&&Object.defineProperty(o,`cause`,{value:e,configurable:!0}),o.name=e&&e.name||`Error`,a&&Object.assign(o,a),o};var L=qa;function Xa(e){return I.isPlainObject(e)||I.isArray(e)}function Za(e){return I.endsWith(e,`[]`)?e.slice(0,-2):e}function Qa(e,t,n){return e?e.concat(t).map(function(e,t){return e=Za(e),!n&&t?`[`+e+`]`:e}).join(n?`.`:``):t}function $a(e){return I.isArray(e)&&!e.some(Xa)}var eo=I.toFlatObject(I,{},null,function(e){return/^is[A-Z]/.test(e)});function to(e,t,n){if(!I.isObject(e))throw TypeError(`target must be an object`);t||=new FormData,n=I.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){return!I.isUndefined(t[e])});let r=n.metaTokens,i=n.visitor||l,a=n.dots,o=n.indexes,s=(n.Blob||typeof Blob<`u`&&Blob)&&I.isSpecCompliantForm(t);if(!I.isFunction(i))throw TypeError(`visitor must be a function`);function c(e){if(e===null)return``;if(I.isDate(e))return e.toISOString();if(I.isBoolean(e))return e.toString();if(!s&&I.isBlob(e))throw new L(`Blob is not supported. Use a Buffer instead.`);return I.isArrayBuffer(e)||I.isTypedArray(e)?s&&typeof Blob==`function`?new Blob([e]):Buffer.from(e):e}function l(e,n,i){let s=e;if(e&&!i&&typeof e==`object`){if(I.endsWith(n,`{}`))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(I.isArray(e)&&$a(e)||(I.isFileList(e)||I.endsWith(n,`[]`))&&(s=I.toArray(e)))return n=Za(n),s.forEach(function(e,r){!(I.isUndefined(e)||e===null)&&t.append(o===!0?Qa([n],r,a):o===null?n:n+`[]`,c(e))}),!1}return Xa(e)?!0:(t.append(Qa(i,n,a),c(e)),!1)}let u=[],d=Object.assign(eo,{defaultVisitor:l,convertValue:c,isVisitable:Xa});function f(e,n){if(!I.isUndefined(e)){if(u.indexOf(e)!==-1)throw Error(`Circular reference detected in `+n.join(`.`));u.push(e),I.forEach(e,function(e,r){(!(I.isUndefined(e)||e===null)&&i.call(t,e,I.isString(r)?r.trim():r,n,d))===!0&&f(e,n?n.concat(r):[r])}),u.pop()}}if(!I.isObject(e))throw TypeError(`data must be an object`);return f(e),t}var no=to;function ro(e){let t={"!":`%21`,"'":`%27`,"(":`%28`,")":`%29`,"~":`%7E`,"%20":`+`,"%00":`\0`};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(e){return t[e]})}function io(e,t){this._pairs=[],e&&no(e,this,t)}var ao=io.prototype;ao.append=function(e,t){this._pairs.push([e,t])},ao.toString=function(e){let t=e?function(t){return e.call(this,t,ro)}:ro;return this._pairs.map(function(e){return t(e[0])+`=`+t(e[1])},``).join(`&`)};var oo=io;function so(e){return encodeURIComponent(e).replace(/%3A/gi,`:`).replace(/%24/g,`$`).replace(/%2C/gi,`,`).replace(/%20/g,`+`)}function co(e,t,n){if(!t)return e;let r=n&&n.encode||so;I.isFunction(n)&&(n={serialize:n});let i=n&&n.serialize,a;if(a=i?i(t,n):I.isURLSearchParams(t)?t.toString():new oo(t,n).toString(r),a){let t=e.indexOf(`#`);t!==-1&&(e=e.slice(0,t)),e+=(e.indexOf(`?`)===-1?`?`:`&`)+a}return e}var lo=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&=[]}forEach(e){I.forEach(this.handlers,function(t){t!==null&&e(t)})}},uo={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},fo={isBrowser:!0,classes:{URLSearchParams:typeof URLSearchParams<`u`?URLSearchParams:oo,FormData:typeof FormData<`u`?FormData:null,Blob:typeof Blob<`u`?Blob:null},protocols:[`http`,`https`,`file`,`blob`,`url`,`data`]},po=s({hasBrowserEnv:()=>mo,hasStandardBrowserEnv:()=>go,hasStandardBrowserWebWorkerEnv:()=>_o,navigator:()=>ho,origin:()=>vo}),mo=typeof window<`u`&&typeof document<`u`,ho=typeof navigator==`object`&&navigator||void 0,go=mo&&(!ho||[`ReactNative`,`NativeScript`,`NS`].indexOf(ho.product)<0),_o=(()=>typeof WorkerGlobalScope<`u`&&self instanceof WorkerGlobalScope&&typeof self.importScripts==`function`)(),vo=mo&&window.location.href||`http://localhost`,yo={...po,...fo};function bo(e,t){return no(e,new yo.classes.URLSearchParams,{visitor:function(e,t,n,r){return yo.isNode&&I.isBuffer(e)?(this.append(t,e.toString(`base64`)),!1):r.defaultVisitor.apply(this,arguments)},...t})}function xo(e){return I.matchAll(/\w+|\[(\w*)]/g,e).map(e=>e[0]===`[]`?``:e[1]||e[0])}function So(e){let t={},n=Object.keys(e),r,i=n.length,a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}function Co(e){function t(e,n,r,i){let a=e[i++];if(a===`__proto__`)return!0;let o=Number.isFinite(+a),s=i>=e.length;return a=!a&&I.isArray(r)?r.length:a,s?(I.hasOwnProp(r,a)?r[a]=[r[a],n]:r[a]=n,!o):((!r[a]||!I.isObject(r[a]))&&(r[a]=[]),t(e,n,r[a],i)&&I.isArray(r[a])&&(r[a]=So(r[a])),!o)}if(I.isFormData(e)&&I.isFunction(e.entries)){let n={};return I.forEachEntry(e,(e,r)=>{t(xo(e),r,n,0)}),n}return null}var wo=Co;function To(e,t,n){if(I.isString(e))try{return(t||JSON.parse)(e),I.trim(e)}catch(e){if(e.name!==`SyntaxError`)throw e}return(n||JSON.stringify)(e)}var Eo={transitional:uo,adapter:[`xhr`,`http`,`fetch`],transformRequest:[function(e,t){let n=t.getContentType()||``,r=n.indexOf(`application/json`)>-1,i=I.isObject(e);if(i&&I.isHTMLForm(e)&&(e=new FormData(e)),I.isFormData(e))return r?JSON.stringify(wo(e)):e;if(I.isArrayBuffer(e)||I.isBuffer(e)||I.isStream(e)||I.isFile(e)||I.isBlob(e)||I.isReadableStream(e))return e;if(I.isArrayBufferView(e))return e.buffer;if(I.isURLSearchParams(e))return t.setContentType(`application/x-www-form-urlencoded;charset=utf-8`,!1),e.toString();let a;if(i){if(n.indexOf(`application/x-www-form-urlencoded`)>-1)return bo(e,this.formSerializer).toString();if((a=I.isFileList(e))||n.indexOf(`multipart/form-data`)>-1){let t=this.env&&this.env.FormData;return no(a?{"files[]":e}:e,t&&new t,this.formSerializer)}}return i||r?(t.setContentType(`application/json`,!1),To(e)):e}],transformResponse:[function(e){let t=this.transitional||Eo.transitional,n=t&&t.forcedJSONParsing,r=this.responseType===`json`;if(I.isResponse(e)||I.isReadableStream(e))return e;if(e&&I.isString(e)&&(n&&!this.responseType||r)){let n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e,this.parseReviver)}catch(e){if(n)throw e.name===`SyntaxError`?L.from(e,L.ERR_BAD_RESPONSE,this,null,this.response):e}}return e}],timeout:0,xsrfCookieName:`XSRF-TOKEN`,xsrfHeaderName:`X-XSRF-TOKEN`,maxContentLength:-1,maxBodyLength:-1,env:{FormData:yo.classes.FormData,Blob:yo.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:`application/json, text/plain, */*`,"Content-Type":void 0}}};I.forEach([`delete`,`get`,`head`,`post`,`put`,`patch`],e=>{Eo.headers[e]={}});var R=Eo,z=I.toObjectSet([`age`,`authorization`,`content-length`,`content-type`,`etag`,`expires`,`from`,`host`,`if-modified-since`,`if-unmodified-since`,`last-modified`,`location`,`max-forwards`,`proxy-authorization`,`referer`,`retry-after`,`user-agent`]),Do=e=>{let t={},n,r,i;return e&&e.split(`
`).forEach(function(e){i=e.indexOf(`:`),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim(),!(!n||t[n]&&z[n])&&(n===`set-cookie`?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+`, `+r:r)}),t},Oo=Symbol(`internals`);function ko(e){return e&&String(e).trim().toLowerCase()}function Ao(e){return e===!1||e==null?e:I.isArray(e)?e.map(Ao):String(e)}function jo(e){let t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}var Mo=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function No(e,t,n,r,i){if(I.isFunction(r))return r.call(this,t,n);if(i&&(t=n),I.isString(t)){if(I.isString(r))return t.indexOf(r)!==-1;if(I.isRegExp(r))return r.test(t)}}function Po(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,n)=>t.toUpperCase()+n)}function Fo(e,t){let n=I.toCamelCase(` `+t);[`get`,`set`,`has`].forEach(r=>{Object.defineProperty(e,r+n,{value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})})}var Io=class{constructor(e){e&&this.set(e)}set(e,t,n){let r=this;function i(e,t,n){let i=ko(t);if(!i)throw Error(`header name must be a non-empty string`);let a=I.findKey(r,i);(!a||r[a]===void 0||n===!0||n===void 0&&r[a]!==!1)&&(r[a||t]=Ao(e))}let a=(e,t)=>I.forEach(e,(e,n)=>i(e,n,t));if(I.isPlainObject(e)||e instanceof this.constructor)a(e,t);else if(I.isString(e)&&(e=e.trim())&&!Mo(e))a(Do(e),t);else if(I.isObject(e)&&I.isIterable(e)){let n={},r,i;for(let t of e){if(!I.isArray(t))throw TypeError(`Object iterator must return a key-value pair`);n[i=t[0]]=(r=n[i])?I.isArray(r)?[...r,t[1]]:[r,t[1]]:t[1]}a(n,t)}else e!=null&&i(t,e,n);return this}get(e,t){if(e=ko(e),e){let n=I.findKey(this,e);if(n){let e=this[n];if(!t)return e;if(t===!0)return jo(e);if(I.isFunction(t))return t.call(this,e,n);if(I.isRegExp(t))return t.exec(e);throw TypeError(`parser must be boolean|regexp|function`)}}}has(e,t){if(e=ko(e),e){let n=I.findKey(this,e);return!!(n&&this[n]!==void 0&&(!t||No(this,this[n],n,t)))}return!1}delete(e,t){let n=this,r=!1;function i(e){if(e=ko(e),e){let i=I.findKey(n,e);i&&(!t||No(n,n[i],i,t))&&(delete n[i],r=!0)}}return I.isArray(e)?e.forEach(i):i(e),r}clear(e){let t=Object.keys(this),n=t.length,r=!1;for(;n--;){let i=t[n];(!e||No(this,this[i],i,e,!0))&&(delete this[i],r=!0)}return r}normalize(e){let t=this,n={};return I.forEach(this,(r,i)=>{let a=I.findKey(n,i);if(a){t[a]=Ao(r),delete t[i];return}let o=e?Po(i):String(i).trim();o!==i&&delete t[i],t[o]=Ao(r),n[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){let t=Object.create(null);return I.forEach(this,(n,r)=>{n!=null&&n!==!1&&(t[r]=e&&I.isArray(n)?n.join(`, `):n)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+`: `+t).join(`
`)}getSetCookie(){return this.get(`set-cookie`)||[]}get[Symbol.toStringTag](){return`AxiosHeaders`}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){let n=new this(e);return t.forEach(e=>n.set(e)),n}static accessor(e){let t=(this[Oo]=this[Oo]={accessors:{}}).accessors,n=this.prototype;function r(e){let r=ko(e);t[r]||(Fo(n,e),t[r]=!0)}return I.isArray(e)?e.forEach(r):r(e),this}};Io.accessor([`Content-Type`,`Content-Length`,`Accept`,`Accept-Encoding`,`User-Agent`,`Authorization`]),I.reduceDescriptors(Io.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}}),I.freezeMethods(Io);var Lo=Io;function Ro(e,t){let n=this||R,r=t||n,i=Lo.from(r.headers),a=r.data;return I.forEach(e,function(e){a=e.call(n,a,i.normalize(),t?t.status:void 0)}),i.normalize(),a}function zo(e){return!!(e&&e.__CANCEL__)}function Bo(e,t,n){L.call(this,e??`canceled`,L.ERR_CANCELED,t,n),this.name=`CanceledError`}I.inherits(Bo,L,{__CANCEL__:!0});var Vo=Bo;function Ho(e,t,n){let r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new L(`Request failed with status code `+n.status,[L.ERR_BAD_REQUEST,L.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Uo(e){let t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||``}function Wo(e,t){e||=10;let n=Array(e),r=Array(e),i=0,a=0,o;return t=t===void 0?1e3:t,function(s){let c=Date.now(),l=r[a];o||=c,n[i]=s,r[i]=c;let u=a,d=0;for(;u!==i;)d+=n[u++],u%=e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),c-o<t)return;let f=l&&c-l;return f?Math.round(d*1e3/f):void 0}}var Go=Wo;function Ko(e,t){let n=0,r=1e3/t,i,a,o=(t,r=Date.now())=>{n=r,i=null,a&&=(clearTimeout(a),null),e(...t)};return[(...e)=>{let t=Date.now(),s=t-n;s>=r?o(e,t):(i=e,a||=setTimeout(()=>{a=null,o(i)},r-s))},()=>i&&o(i)]}var qo=Ko;const Jo=(e,t,n=3)=>{let r=0,i=Go(50,250);return qo(n=>{let a=n.loaded,o=n.lengthComputable?n.total:void 0,s=a-r,c=i(s),l=a<=o;r=a;let u={loaded:a,total:o,progress:o?a/o:void 0,bytes:s,rate:c||void 0,estimated:c&&o&&l?(o-a)/c:void 0,event:n,lengthComputable:o!=null,[t?`download`:`upload`]:!0};e(u)},n)},Yo=(e,t)=>{let n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Xo=e=>(...t)=>I.asap(()=>e(...t));var Zo=yo.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,yo.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(yo.origin),yo.navigator&&/(msie|trident)/i.test(yo.navigator.userAgent)):()=>!0,Qo=yo.hasStandardBrowserEnv?{write(e,t,n,r,i,a){let o=[e+`=`+encodeURIComponent(t)];I.isNumber(n)&&o.push(`expires=`+new Date(n).toGMTString()),I.isString(r)&&o.push(`path=`+r),I.isString(i)&&o.push(`domain=`+i),a===!0&&o.push(`secure`),document.cookie=o.join(`; `)},read(e){let t=document.cookie.match(RegExp(`(^|;\\s*)(`+e+`)=([^;]*)`));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,``,Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function $o(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function es(e,t){return t?e.replace(/\/?\/$/,``)+`/`+t.replace(/^\/+/,``):e}function ts(e,t,n){let r=!$o(t);return e&&(r||n==0)?es(e,t):t}var ns=e=>e instanceof Lo?{...e}:e;function rs(e,t){t||={};let n={};function r(e,t,n,r){return I.isPlainObject(e)&&I.isPlainObject(t)?I.merge.call({caseless:r},e,t):I.isPlainObject(t)?I.merge({},t):I.isArray(t)?t.slice():t}function i(e,t,n,i){if(I.isUndefined(t)){if(!I.isUndefined(e))return r(void 0,e,n,i)}else return r(e,t,n,i)}function a(e,t){if(!I.isUndefined(t))return r(void 0,t)}function o(e,t){if(I.isUndefined(t)){if(!I.isUndefined(e))return r(void 0,e)}else return r(void 0,t)}function s(n,i,a){if(a in t)return r(n,i);if(a in e)return r(void 0,n)}let c={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:s,headers:(e,t,n)=>i(ns(e),ns(t),n,!0)};return I.forEach(Object.keys({...e,...t}),function(r){let a=c[r]||i,o=a(e[r],t[r],r);I.isUndefined(o)&&a!==s||(n[r]=o)}),n}var os=e=>{let t=rs({},e),{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:a,headers:o,auth:s}=t;if(t.headers=o=Lo.from(o),t.url=co(ts(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),s&&o.set(`Authorization`,`Basic `+btoa((s.username||``)+`:`+(s.password?unescape(encodeURIComponent(s.password)):``))),I.isFormData(n)){if(yo.hasStandardBrowserEnv||yo.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(I.isFunction(n.getHeaders)){let e=n.getHeaders(),t=[`content-type`,`content-length`];Object.entries(e).forEach(([e,n])=>{t.includes(e.toLowerCase())&&o.set(e,n)})}}if(yo.hasStandardBrowserEnv&&(r&&I.isFunction(r)&&(r=r(t)),r||r!==!1&&Zo(t.url))){let e=i&&a&&Qo.read(a);e&&o.set(i,e)}return t},ss=typeof XMLHttpRequest<`u`&&function(e){return new Promise(function(t,n){let r=os(e),i=r.data,a=Lo.from(r.headers).normalize(),{responseType:o,onUploadProgress:s,onDownloadProgress:c}=r,l,u,d,f,p;function m(){f&&f(),p&&p(),r.cancelToken&&r.cancelToken.unsubscribe(l),r.signal&&r.signal.removeEventListener(`abort`,l)}let h=new XMLHttpRequest;h.open(r.method.toUpperCase(),r.url,!0),h.timeout=r.timeout;function g(){if(!h)return;let r=Lo.from(`getAllResponseHeaders`in h&&h.getAllResponseHeaders()),i={data:!o||o===`text`||o===`json`?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:r,config:e,request:h};Ho(function(e){t(e),m()},function(e){n(e),m()},i),h=null}`onloadend`in h?h.onloadend=g:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf(`file:`)===0)||setTimeout(g)},h.onabort=function(){h&&=(n(new L(`Request aborted`,L.ECONNABORTED,e,h)),null)},h.onerror=function(t){let r=t&&t.message?t.message:`Network Error`,i=new L(r,L.ERR_NETWORK,e,h);i.event=t||null,n(i),h=null},h.ontimeout=function(){let t=r.timeout?`timeout of `+r.timeout+`ms exceeded`:`timeout exceeded`,i=r.transitional||uo;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new L(t,i.clarifyTimeoutError?L.ETIMEDOUT:L.ECONNABORTED,e,h)),h=null},i===void 0&&a.setContentType(null),`setRequestHeader`in h&&I.forEach(a.toJSON(),function(e,t){h.setRequestHeader(t,e)}),I.isUndefined(r.withCredentials)||(h.withCredentials=!!r.withCredentials),o&&o!==`json`&&(h.responseType=r.responseType),c&&([d,p]=Jo(c,!0),h.addEventListener(`progress`,d)),s&&h.upload&&([u,f]=Jo(s),h.upload.addEventListener(`progress`,u),h.upload.addEventListener(`loadend`,f)),(r.cancelToken||r.signal)&&(l=t=>{h&&=(n(!t||t.type?new Vo(null,e,h):t),h.abort(),null)},r.cancelToken&&r.cancelToken.subscribe(l),r.signal&&(r.signal.aborted?l():r.signal.addEventListener(`abort`,l)));let _=Uo(r.url);if(_&&yo.protocols.indexOf(_)===-1){n(new L(`Unsupported protocol `+_+`:`,L.ERR_BAD_REQUEST,e));return}h.send(i||null)})},cs=(e,t)=>{let{length:n}=e=e?e.filter(Boolean):[];if(t||n){let n=new AbortController,r,i=function(e){if(!r){r=!0,o();let t=e instanceof Error?e:this.reason;n.abort(t instanceof L?t:new Vo(t instanceof Error?t.message:t))}},a=t&&setTimeout(()=>{a=null,i(new L(`timeout ${t} of ms exceeded`,L.ETIMEDOUT))},t),o=()=>{e&&=(a&&clearTimeout(a),a=null,e.forEach(e=>{e.unsubscribe?e.unsubscribe(i):e.removeEventListener(`abort`,i)}),null)};e.forEach(e=>e.addEventListener(`abort`,i));let{signal:s}=n;return s.unsubscribe=()=>I.asap(o),s}};const ls=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},us=async function*(e,t){for await(let n of ds(e))yield*ls(n,t)};var ds=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}let t=e.getReader();try{for(;;){let{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}};const fs=(e,t,n,r)=>{let i=us(e,t),a=0,o,s=e=>{o||(o=!0,r&&r(e))};return new ReadableStream({async pull(e){try{let{done:t,value:r}=await i.next();if(t){s(),e.close();return}let o=r.byteLength;if(n){let e=a+=o;n(e)}e.enqueue(new Uint8Array(r))}catch(e){throw s(e),e}},cancel(e){return s(e),i.return()}},{highWaterMark:2})};var ps=64*1024,{isFunction:ms}=I,hs=(({Request:e,Response:t})=>({Request:e,Response:t}))(I.global),{ReadableStream:gs,TextEncoder:_s}=I.global,vs=(e,...t)=>{try{return!!e(...t)}catch{return!1}},ys=e=>{e=I.merge.call({skipUndefined:!0},hs,e);let{fetch:t,Request:n,Response:r}=e,i=t?ms(t):typeof fetch==`function`,a=ms(n),o=ms(r);if(!i)return!1;let s=i&&ms(gs),c=i&&(typeof _s==`function`?(e=>t=>e.encode(t))(new _s):async e=>new Uint8Array(await new n(e).arrayBuffer())),l=a&&s&&vs(()=>{let e=!1,t=new n(yo.origin,{body:new gs,method:`POST`,get duplex(){return e=!0,`half`}}).headers.has(`Content-Type`);return e&&!t}),u=o&&s&&vs(()=>I.isReadableStream(new r(``).body)),d={stream:u&&(e=>e.body)};i&&[`text`,`arrayBuffer`,`blob`,`formData`,`stream`].forEach(e=>{!d[e]&&(d[e]=(t,n)=>{let r=t&&t[e];if(r)return r.call(t);throw new L(`Response type '${e}' is not supported`,L.ERR_NOT_SUPPORT,n)})});let f=async e=>{if(e==null)return 0;if(I.isBlob(e))return e.size;if(I.isSpecCompliantForm(e))return(await new n(yo.origin,{method:`POST`,body:e}).arrayBuffer()).byteLength;if(I.isArrayBufferView(e)||I.isArrayBuffer(e))return e.byteLength;if(I.isURLSearchParams(e)&&(e+=``),I.isString(e))return(await c(e)).byteLength},p=async(e,t)=>I.toFiniteNumber(e.getContentLength())??f(t);return async e=>{let{url:i,method:o,data:s,signal:c,cancelToken:f,timeout:m,onDownloadProgress:h,onUploadProgress:g,responseType:_,headers:v,withCredentials:y=`same-origin`,fetchOptions:b}=os(e),x=t||fetch;_=_?(_+``).toLowerCase():`text`;let S=cs([c,f&&f.toAbortSignal()],m),C=null,w=S&&S.unsubscribe&&(()=>{S.unsubscribe()}),ee;try{if(g&&l&&o!==`get`&&o!==`head`&&(ee=await p(v,s))!==0){let e=new n(i,{method:`POST`,body:s,duplex:`half`}),t;if(I.isFormData(s)&&(t=e.headers.get(`content-type`))&&v.setContentType(t),e.body){let[t,n]=Yo(ee,Jo(Xo(g)));s=fs(e.body,ps,t,n)}}I.isString(y)||(y=y?`include`:`omit`);let t=a&&`credentials`in n.prototype,c={...b,signal:S,method:o.toUpperCase(),headers:v.normalize().toJSON(),body:s,duplex:`half`,credentials:t?y:void 0};C=a&&new n(i,c);let f=await(a?x(C,b):x(i,c)),m=u&&(_===`stream`||_===`response`);if(u&&(h||m&&w)){let e={};[`status`,`statusText`,`headers`].forEach(t=>{e[t]=f[t]});let t=I.toFiniteNumber(f.headers.get(`content-length`)),[n,i]=h&&Yo(t,Jo(Xo(h),!0))||[];f=new r(fs(f.body,ps,n,()=>{i&&i(),w&&w()}),e)}_||=`text`;let te=await d[I.findKey(d,_)||`text`](f,e);return!m&&w&&w(),await new Promise((t,n)=>{Ho(t,n,{data:te,headers:Lo.from(f.headers),status:f.status,statusText:f.statusText,config:e,request:C})})}catch(t){throw w&&w(),t&&t.name===`TypeError`&&/Load failed|fetch/i.test(t.message)?Object.assign(new L(`Network Error`,L.ERR_NETWORK,e,C),{cause:t.cause||t}):L.from(t,t&&t.code,e,C)}}},bs=new Map;const xs=e=>{let t=e?e.env:{},{fetch:n,Request:r,Response:i}=t,a=[r,i,n],o=a.length,s,c,l=bs;for(;o--;)s=a[o],c=l.get(s),c===void 0&&l.set(s,c=o?new Map:ys(t)),l=c;return c};xs();var Ss={http:null,xhr:ss,fetch:{get:xs}};I.forEach(Ss,(e,t)=>{if(e){try{Object.defineProperty(e,`name`,{value:t})}catch{}Object.defineProperty(e,`adapterName`,{value:t})}});var Cs=e=>`- ${e}`,ws=e=>I.isFunction(e)||e===null||e===!1,Ts={getAdapter:(e,t)=>{e=I.isArray(e)?e:[e];let{length:n}=e,r,i,a={};for(let o=0;o<n;o++){r=e[o];let n;if(i=r,!ws(r)&&(i=Ss[(n=String(r)).toLowerCase()],i===void 0))throw new L(`Unknown adapter '${n}'`);if(i&&(I.isFunction(i)||(i=i.get(t))))break;a[n||`#`+o]=i}if(!i){let e=Object.entries(a).map(([e,t])=>`adapter ${e} `+(t===!1?`is not supported by the environment`:`is not available in the build`)),t=n?e.length>1?`since :
`+e.map(Cs).join(`
`):` `+Cs(e[0]):`as no adapter specified`;throw new L(`There is no suitable adapter to dispatch the request `+t,`ERR_NOT_SUPPORT`)}return i},adapters:Ss};function Es(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Vo(null,e)}function Ds(e){return Es(e),e.headers=Lo.from(e.headers),e.data=Ro.call(e,e.transformRequest),[`post`,`put`,`patch`].indexOf(e.method)!==-1&&e.headers.setContentType(`application/x-www-form-urlencoded`,!1),Ts.getAdapter(e.adapter||R.adapter,e)(e).then(function(t){return Es(e),t.data=Ro.call(e,e.transformResponse,t),t.headers=Lo.from(t.headers),t},function(t){return zo(t)||(Es(e),t&&t.response&&(t.response.data=Ro.call(e,e.transformResponse,t.response),t.response.headers=Lo.from(t.response.headers))),Promise.reject(t)})}const Os=`1.12.2`;var ks={};[`object`,`boolean`,`number`,`function`,`string`,`symbol`].forEach((e,t)=>{ks[e]=function(n){return typeof n===e||`a`+(t<1?`n `:` `)+e}});var As={};ks.transitional=function(e,t,n){function r(e,t){return`[Axios v`+Os+`] Transitional option '`+e+`'`+t+(n?`. `+n:``)}return(n,i,a)=>{if(e===!1)throw new L(r(i,` has been removed`+(t?` in `+t:``)),L.ERR_DEPRECATED);return t&&!As[i]&&(As[i]=!0,console.warn(r(i,` has been deprecated since v`+t+` and will be removed in the near future`))),e?e(n,i,a):!0}},ks.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};function js(e,t,n){if(typeof e!=`object`)throw new L(`options must be an object`,L.ERR_BAD_OPTION_VALUE);let r=Object.keys(e),i=r.length;for(;i-- >0;){let a=r[i],o=t[a];if(o){let t=e[a],n=t===void 0||o(t,a,e);if(n!==!0)throw new L(`option `+a+` must be `+n,L.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new L(`Unknown option `+a,L.ERR_BAD_OPTION)}}var Ms={assertOptions:js,validators:ks},Ns=Ms.validators,Ps=class{constructor(e){this.defaults=e||{},this.interceptors={request:new lo,response:new lo}}async request(e,t){try{return await this._request(e,t)}catch(e){if(e instanceof Error){let t={};Error.captureStackTrace?Error.captureStackTrace(t):t=Error();let n=t.stack?t.stack.replace(/^.+\n/,``):``;try{e.stack?n&&!String(e.stack).endsWith(n.replace(/^.+\n.+\n/,``))&&(e.stack+=`
`+n):e.stack=n}catch{}}throw e}}_request(e,t){typeof e==`string`?(t||={},t.url=e):t=e||{},t=rs(this.defaults,t);let{transitional:n,paramsSerializer:r,headers:i}=t;n!==void 0&&Ms.assertOptions(n,{silentJSONParsing:Ns.transitional(Ns.boolean),forcedJSONParsing:Ns.transitional(Ns.boolean),clarifyTimeoutError:Ns.transitional(Ns.boolean)},!1),r!=null&&(I.isFunction(r)?t.paramsSerializer={serialize:r}:Ms.assertOptions(r,{encode:Ns.function,serialize:Ns.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls===void 0?t.allowAbsoluteUrls=!0:t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls),Ms.assertOptions(t,{baseUrl:Ns.spelling(`baseURL`),withXsrfToken:Ns.spelling(`withXSRFToken`)},!0),t.method=(t.method||this.defaults.method||`get`).toLowerCase();let a=i&&I.merge(i.common,i[t.method]);i&&I.forEach([`delete`,`get`,`head`,`post`,`put`,`patch`,`common`],e=>{delete i[e]}),t.headers=Lo.concat(a,i);let o=[],s=!0;this.interceptors.request.forEach(function(e){typeof e.runWhen==`function`&&e.runWhen(t)===!1||(s&&=e.synchronous,o.unshift(e.fulfilled,e.rejected))});let c=[];this.interceptors.response.forEach(function(e){c.push(e.fulfilled,e.rejected)});let l,u=0,d;if(!s){let e=[Ds.bind(this),void 0];for(e.unshift(...o),e.push(...c),d=e.length,l=Promise.resolve(t);u<d;)l=l.then(e[u++],e[u++]);return l}d=o.length;let f=t;for(;u<d;){let e=o[u++],t=o[u++];try{f=e(f)}catch(e){t.call(this,e);break}}try{l=Ds.call(this,f)}catch(e){return Promise.reject(e)}for(u=0,d=c.length;u<d;)l=l.then(c[u++],c[u++]);return l}getUri(e){e=rs(this.defaults,e);let t=ts(e.baseURL,e.url,e.allowAbsoluteUrls);return co(t,e.params,e.paramsSerializer)}};I.forEach([`delete`,`get`,`head`,`options`],function(e){Ps.prototype[e]=function(t,n){return this.request(rs(n||{},{method:e,url:t,data:(n||{}).data}))}}),I.forEach([`post`,`put`,`patch`],function(e){function t(t){return function(n,r,i){return this.request(rs(i||{},{method:e,headers:t?{"Content-Type":`multipart/form-data`}:{},url:n,data:r}))}}Ps.prototype[e]=t(),Ps.prototype[e+`Form`]=t(!0)});var Fs=Ps,Is=class e{constructor(e){if(typeof e!=`function`)throw TypeError(`executor must be a function.`);let t;this.promise=new Promise(function(e){t=e});let n=this;this.promise.then(e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null}),this.promise.then=e=>{let t,r=new Promise(e=>{n.subscribe(e),t=e}).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e(function(e,r,i){n.reason||(n.reason=new Vo(e,r,i),t(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;let t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){let e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let t;return{token:new e(function(e){t=e}),cancel:t}}};function Ls(e){return function(t){return e.apply(null,t)}}function Rs(e){return I.isObject(e)&&e.isAxiosError===!0}var zs={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(zs).forEach(([e,t])=>{zs[t]=e});var Bs=zs;function Vs(e){let t=new Fs(e),n=Hi(Fs.prototype.request,t);return I.extend(n,Fs.prototype,t,{allOwnKeys:!0}),I.extend(n,t,null,{allOwnKeys:!0}),n.create=function(t){return Vs(rs(e,t))},n}var Hs=Vs(R);Hs.Axios=Fs,Hs.CanceledError=Vo,Hs.CancelToken=Is,Hs.isCancel=zo,Hs.VERSION=Os,Hs.toFormData=no,Hs.AxiosError=L,Hs.Cancel=Hs.CanceledError,Hs.all=function(e){return Promise.all(e)},Hs.spread=Ls,Hs.isAxiosError=Rs,Hs.mergeConfig=rs,Hs.AxiosHeaders=Lo,Hs.formToJSON=e=>wo(I.isHTMLForm(e)?new FormData(e):e),Hs.getAdapter=Ts.getAdapter,Hs.HttpStatusCode=Bs,Hs.default=Hs;var Us=Hs,Ws=window.location.origin,Gs=Us.create({baseURL:`${Ws}/api`,headers:{"Content-Type":`application/json`},timeout:1e4});Gs.interceptors.request.use(e=>(console.log(`🌐 ${e.method?.toUpperCase()} ${e.url}`),e),e=>(console.error(`API Request Error:`,e),Promise.reject(e))),Gs.interceptors.response.use(e=>e,e=>{if(console.error(`API Response Error:`,e),e.response){let t=e.response.data?.message||e.response.statusText;throw Error(`API Fehler (${e.response.status}): ${t}`)}else if(e.request)throw Error(`Keine Antwort vom Server - Bitte Verbindung prüfen`);else throw Error(`Unbekannter Fehler: ${e.message}`)});var B=Gs,Ks={async getFirma(){try{return(await B.get(`/firma`)).data}catch(e){throw console.error(`Fehler beim Laden der Firmendaten:`,e),e}},async updateFirma(e){try{let t=e instanceof FormData;return(await B.put(`/firma`,e,{headers:t?{"Content-Type":`multipart/form-data`}:void 0})).data}catch(e){throw console.error(`Fehler beim Aktualisieren der Firmendaten:`,e),e}},async get(){return this.getFirma()},async update(e){return this.updateFirma(e)}},qs=j.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`,Js=j.div`
  flex: 1;
  overflow-y: auto;
  padding: ${M.spacing.xl};
  
  @media (max-width: 768px) {
    padding: ${M.spacing.md};
  }
`,Ys=j.div`
  background: ${M.colors.bgSecondary};
  border-top: 2px solid ${M.colors.borderColor};
  padding: ${M.spacing.md} ${M.spacing.lg};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${M.spacing.md};
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    padding: ${M.spacing.sm};
    gap: ${M.spacing.sm};
  }
`,Xs=j.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${M.spacing.xl};
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,Zs=j.div`
  background: ${M.colors.bgSecondary};
  border: 2px solid ${M.colors.borderColor};
  border-radius: ${M.borderRadius.lg};
  padding: ${M.spacing.xl};
  
  @media (max-width: 768px) {
    padding: ${M.spacing.lg};
  }
`,Qs=j.h2`
  color: ${M.colors.accentCyan};
  font-size: ${M.fontSizes.xl};
  margin: 0 0 ${M.spacing.lg} 0;
  padding-bottom: ${M.spacing.md};
  border-bottom: 2px solid ${M.colors.borderColor};
`,$s=j.div`
  width: 100%;
  height: 80px;
  border: 2px dashed ${M.colors.borderColor};
  border-radius: ${M.borderRadius.base};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${M.colors.bgTertiary};
  overflow: hidden;
  margin-bottom: ${M.spacing.sm};
  position: relative;
  
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  
  &:hover {
    border-color: ${M.colors.accentBlue};
  }
`,ec=j.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${M.spacing.sm};
  padding: ${M.spacing.sm} ${M.spacing.md};
  background: ${M.colors.bgPrimary};
  color: ${M.colors.textPrimary};
  border: 2px solid ${M.colors.accentGreen};
  border-radius: ${M.borderRadius.base};
  cursor: pointer;
  font-size: ${M.fontSizes.sm};
  font-family: ${M.fonts.mono};
  font-weight: ${M.fontWeights.medium};
  transition: all 0.2s;
  
  &:hover {
    background: ${M.colors.bgSecondary};
    border-color: ${M.colors.accentCyan};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(74, 158, 255, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  input {
    display: none;
  }
`,tc=j.div`
  text-align: center;
  color: ${M.colors.textSecondary};
  font-size: ${M.fontSizes.xs};
  
  .icon {
    font-size: 1.5em;
    margin-bottom: ${M.spacing.xs};
  }
`,nc=j.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${M.spacing.lg};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,rc=j.div`
  display: flex;
  flex-direction: column;
`,ic=j.div`
  margin-bottom: ${M.spacing.sm};
  
  &:last-child {
    margin-bottom: 0;
  }
`,ac=j.span`
  color: ${M.colors.textSecondary};
  font-size: ${M.fontSizes.sm};
  display: block;
  margin-bottom: 2px;
`,oc=j.span`
  color: ${M.colors.textPrimary};
  font-size: ${M.fontSizes.base};
  font-weight: ${M.fontWeights.medium};
`,sc=j.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: ${M.borderRadius.sm};
  border: 2px solid ${M.colors.borderColor};
  background: ${e=>e.color};
  vertical-align: middle;
  margin-left: ${M.spacing.sm};
`;j.div`
  margin-top: ${M.spacing.xl};
  padding-top: ${M.spacing.xl};
  border-top: 1px solid ${M.colors.borderColor};
  
  img {
    max-width: 300px;
    max-height: 150px;
    display: block;
    margin-top: ${M.spacing.md};
    margin-bottom: ${M.spacing.md};
    border: 1px solid ${M.colors.borderColor};
    border-radius: ${M.borderRadius.base};
    padding: ${M.spacing.sm};
    background: white;
  }
`,j.div`
  margin-top: ${M.spacing.md};
  max-width: 300px;
`;var cc=j.div`
  text-align: center;
  padding: ${M.spacing.xxl};
  color: ${M.colors.textSecondary};
  font-size: ${M.fontSizes.lg};
`,lc=()=>{let[e,t]=(0,v.useState)(null),[n,r]=(0,v.useState)(!0),[i,a]=(0,v.useState)(!1),[o,s]=(0,v.useState)(!1),[c,l]=(0,v.useState)(!1),[u,d]=(0,v.useState)(!1),f=(0,v.useCallback)(async()=>{r(!0);try{let e=await Ks.getFirma(),n=e.success?e.data:e;console.log(`Firmendaten geladen:`,n),t(n)}catch(e){console.error(`Fehler beim Laden der Firmendaten:`,e)}finally{r(!1)}},[]);return(0,v.useEffect)(()=>{f()},[]),(0,v.useEffect)(()=>{let e=e=>{e.target.tagName===`INPUT`||e.target.tagName===`TEXTAREA`||(e.key===`e`||e.key===`E`)&&(e.preventDefault(),a(!0))};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},[]),n?(0,N.jsx)(qr,{title:`🏢 Firmenprofil`,children:(0,N.jsx)(cc,{children:`⏳ Firmendaten werden geladen...`})}):(0,N.jsx)(qr,{title:`🏢 Firmenprofil`,children:(0,N.jsxs)(qs,{children:[(0,N.jsx)(Js,{children:e&&(0,N.jsxs)(Xs,{children:[(0,N.jsxs)(Zs,{children:[(0,N.jsx)(Qs,{children:`📞 Kontaktdaten`}),(0,N.jsxs)(ic,{children:[(0,N.jsx)(ac,{children:`Firmenname`}),(0,N.jsx)(oc,{children:e.name})]}),(0,N.jsxs)(ic,{children:[(0,N.jsx)(ac,{children:`Adresse`}),(0,N.jsxs)(oc,{children:[e.strasse&&`${e.strasse}, `,e.plz,` `,e.ort,e.land&&e.land!==`Schweiz`&&`, ${e.land}`]})]}),e.email&&(0,N.jsxs)(ic,{children:[(0,N.jsx)(ac,{children:`E-Mail`}),(0,N.jsx)(oc,{children:e.email})]}),e.telefon&&(0,N.jsxs)(ic,{children:[(0,N.jsx)(ac,{children:`Telefon`}),(0,N.jsx)(oc,{children:e.telefon})]}),e.website&&(0,N.jsxs)(ic,{children:[(0,N.jsx)(ac,{children:`Website`}),(0,N.jsx)(oc,{children:(0,N.jsx)(`a`,{href:e.website,target:`_blank`,rel:`noopener noreferrer`,style:{color:M.colors.accentBlue},children:e.website})})]}),e.slogan&&(0,N.jsxs)(ic,{children:[(0,N.jsx)(ac,{children:`Slogan`}),(0,N.jsx)(oc,{style:{fontStyle:`italic`,color:M.colors.textSecondary},children:e.slogan})]})]}),(0,N.jsxs)(Zs,{children:[(0,N.jsx)(Qs,{children:`💰 Finanzen`}),e.uid&&(0,N.jsxs)(ic,{children:[(0,N.jsx)(ac,{children:`UID-Nummer`}),(0,N.jsx)(oc,{children:e.uid})]}),e.iban&&(0,N.jsxs)(ic,{children:[(0,N.jsx)(ac,{children:`IBAN`}),(0,N.jsx)(oc,{children:e.iban})]}),(0,N.jsxs)(ic,{children:[(0,N.jsx)(ac,{children:`MwSt-Satz`}),(0,N.jsxs)(oc,{children:[e.mwstSatz,`%`]})]}),(0,N.jsxs)(ic,{children:[(0,N.jsx)(ac,{children:`MwSt-pflichtig`}),(0,N.jsx)(oc,{children:e.mwstPflichtig?`Ja`:`Nein`})]})]}),(0,N.jsxs)(Zs,{children:[(0,N.jsx)(Qs,{children:`🎨 Design`}),(0,N.jsxs)(ic,{children:[(0,N.jsx)(ac,{children:`Akzentfarbe`}),(0,N.jsxs)(oc,{children:[e[`accent-color`]||e.accentColor||`#bd00ff`,(0,N.jsx)(sc,{color:e[`accent-color`]||e.accentColor||`#bd00ff`})]})]}),(0,N.jsxs)(ic,{children:[(0,N.jsx)(ac,{children:`Hauptschriftart`}),(0,N.jsx)(oc,{children:e[`main-font`]||e.mainFont||`Lexend Exa`})]})]}),(0,N.jsxs)(Zs,{children:[(0,N.jsx)(Qs,{children:`🖼️ Bilder`}),(0,N.jsxs)(nc,{children:[(0,N.jsxs)(rc,{children:[(0,N.jsx)(ac,{children:`Logo`}),(0,N.jsx)($s,{children:e.logoUrl?(0,N.jsx)(`img`,{src:e.logoUrl,alt:`Firmenlogo`}):(0,N.jsxs)(tc,{children:[(0,N.jsx)(`div`,{className:`icon`,children:`🏢`}),(0,N.jsx)(`div`,{children:`Kein Logo`})]})}),(0,N.jsxs)(ec,{children:[c?`⏳ Lädt...`:`📷 Logo`,(0,N.jsx)(`input`,{type:`file`,accept:`image/*`,onChange:async t=>{let n=t.target.files?.[0];if(n){if(!n.type.startsWith(`image/`)){alert(`Bitte wählen Sie eine Bilddatei aus.`);return}if(n.size>10*1024*1024){alert(`Die Datei ist zu groß. Maximum: 10 MB`);return}l(!0);try{let t=new FormData;t.append(`logo`,n),Object.keys(e).forEach(n=>{n!==`logoUrl`&&n!==`signatureUrl`&&t.append(n,e[n])});let r=await Ks.updateFirma(t);console.log(`Logo Upload Response:`,r),await f(),alert(`✅ Logo erfolgreich hochgeladen!`)}catch(e){console.error(`Fehler beim Logo-Upload:`,e),alert(`Fehler beim Logo-Upload: `+e.message)}finally{l(!1)}}},disabled:c})]})]}),(0,N.jsxs)(rc,{children:[(0,N.jsx)(ac,{children:`Unterschrift`}),(0,N.jsx)($s,{children:e.signatureUrl?(0,N.jsx)(`img`,{src:e.signatureUrl,alt:`Unterschrift`,style:{background:`white`,padding:`4px`}}):(0,N.jsxs)(tc,{children:[(0,N.jsx)(`div`,{className:`icon`,children:`✍️`}),(0,N.jsx)(`div`,{children:`Keine Unterschrift`})]})}),(0,N.jsxs)(ec,{children:[u?`⏳ Lädt...`:`✍️ Unterschrift`,(0,N.jsx)(`input`,{type:`file`,accept:`image/*`,onChange:async t=>{let n=t.target.files?.[0];if(n){if(!n.type.startsWith(`image/`)){alert(`Bitte wählen Sie eine Bilddatei aus.`);return}if(n.size>10*1024*1024){alert(`Die Datei ist zu groß. Maximum: 10 MB`);return}d(!0);try{let t=new FormData;t.append(`signature`,n),Object.keys(e).forEach(n=>{n!==`logoUrl`&&n!==`signatureUrl`&&t.append(n,e[n])});let r=await Ks.updateFirma(t);console.log(`Unterschrift Upload Response:`,r),await f(),alert(`✅ Unterschrift erfolgreich hochgeladen!`)}catch(e){console.error(`Fehler beim Unterschrift-Upload:`,e),alert(`Fehler beim Unterschrift-Upload: `+e.message)}finally{d(!1)}}},disabled:u})]})]})]})]})]})}),(0,N.jsx)(Ys,{children:(0,N.jsxs)(tr,{onClick:()=>a(!0),children:[(0,N.jsx)(nr,{children:`E`}),(0,N.jsx)(rr,{children:`Bearbeiten`})]})}),(0,N.jsx)(Vi,{isOpen:i,onClose:()=>a(!1),firma:e,onSave:async e=>{s(!0);try{let n=await Ks.updateFirma(e),r=n.success?n.data:n;t(r),a(!1),await f()}catch(e){console.error(`Fehler beim Speichern der Firmendaten:`,e),alert(`Fehler beim Speichern: `+e.message)}finally{s(!1)}},loading:o})]})})};const uc=e=>{let t={};if(e.name?.trim()||(t.name=`Firmenname ist erforderlich`),e.email&&e.email.trim()&&(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)||(t.email=`Ungültige E-Mail-Adresse`)),e.telefon&&e.telefon.trim()&&(/^[+\d\s()-]+$/.test(e.telefon)||(t.telefon=`Ungültige Telefonnummer (nur Ziffern, +, -, (, ), Leerzeichen)`)),e.website&&e.website.trim())try{new URL(e.website)}catch{t.website=`Ungültige URL (muss mit http:// oder https:// beginnen)`}return t},dc=e=>{let t={};e.titel?.trim()||(t.titel=`Titel ist erforderlich`),e.kundeId||(t.kundeId=`Kunde muss ausgewählt werden`),e.datum||(t.datum=`Datum ist erforderlich`),e.gültigBis?e.datum&&new Date(e.gültigBis)<=new Date(e.datum)&&(t.gültigBis=`Gültigkeitsdatum muss nach dem Offertendatum liegen`):t.gültigBis=`Gültigkeitsdatum ist erforderlich`;let n=parseFloat(e.mwstSatz);return(isNaN(n)||n<0||n>100)&&(t.mwstSatz=`MwSt-Satz muss zwischen 0 und 100% liegen`),t},fc=e=>{let t={};e.titel?.trim()||(t.titel=`Titel ist erforderlich`),e.kundeId||(t.kundeId=`Kunde muss ausgewählt werden`),e.datum||(t.datum=`Datum ist erforderlich`),e.faelligkeitsdatum?e.datum&&new Date(e.faelligkeitsdatum)<new Date(e.datum)&&(t.faelligkeitsdatum=`Fälligkeitsdatum darf nicht vor dem Rechnungsdatum liegen`):t.faelligkeitsdatum=`Fälligkeitsdatum ist erforderlich`;let n=parseFloat(e.mwstSatz);if((isNaN(n)||n<0||n>100)&&(t.mwstSatz=`MwSt-Satz muss zwischen 0 und 100% liegen`),e.iban&&e.iban.trim()){let n=/^[A-Z]{2}[0-9]{2}[A-Z0-9]{1,30}$/,r=e.iban.replace(/\s/g,``).toUpperCase();n.test(r)||(t.iban=`Ungültige IBAN`)}return t},pc=e=>{let t={};e.beschreibung?.trim()||(t.beschreibung=`Beschreibung ist erforderlich`);let n=parseFloat(e.menge);(isNaN(n)||n<=0)&&(t.menge=`Menge muss größer als 0 sein`),e.einheit?.trim()||(t.einheit=`Einheit ist erforderlich`);let r=parseFloat(e.einzelpreis);return(isNaN(r)||r<0)&&(t.einzelpreis=`Einzelpreis muss 0 oder größer sein`),t};var{Form:mc,FormSection:hc,FormSectionTitle:gc,FormRow:_c,FormGroup:vc,Label:V,Input:yc,Select:bc,TextArea:xc,ButtonGroup:Sc,Button:Cc,ErrorMessage:wc}=di,Tc=({isOpen:e,onClose:t,kunde:n=null,onSave:r,loading:i=!1})=>{let a=()=>n?{name:n.name||``,email:n.email||``,telefon:n.telefon||``,typ:n.typ||`privat`,adresse:{strasse:n.adresse?.strasse||``,plz:n.adresse?.plz||``,ort:n.adresse?.ort||``,land:n.adresse?.land||`Schweiz`},notizen:n.notizen||``}:{name:``,email:``,telefon:``,typ:`privat`,adresse:{strasse:``,plz:``,ort:``,land:`Schweiz`},notizen:``},{formData:o,errors:s,touched:c,handleChange:l,handleBlur:u,handleSubmit:d,resetForm:f,setFormData:p}=wi(a(),uc);(0,v.useEffect)(()=>{e&&p(a())},[n,e]);let m=()=>{r(o)},h=()=>{f(),t()},g=!!n,_=g?`Kunde bearbeiten: ${n?.name}`:`Neuer Kunde`;return(0,N.jsx)(ui,{isOpen:e,onClose:h,title:_,closeOnOverlay:!i,children:(0,N.jsxs)(mc,{onSubmit:e=>{e.preventDefault(),d(m)},children:[(0,N.jsxs)(hc,{children:[(0,N.jsx)(gc,{children:`Grunddaten`}),(0,N.jsxs)(_c,{children:[(0,N.jsxs)(vc,{flex:2,children:[(0,N.jsx)(V,{required:!0,children:`Name`}),(0,N.jsx)(yc,{type:`text`,value:o.name,onChange:e=>l(`name`,e.target.value),onBlur:()=>u(`name`),disabled:i,placeholder:`Vollständiger Name`}),s.name&&c.name&&(0,N.jsx)(wc,{children:s.name})]}),(0,N.jsxs)(vc,{children:[(0,N.jsx)(V,{children:`Typ`}),(0,N.jsxs)(bc,{value:o.typ,onChange:e=>l(`typ`,e.target.value),disabled:i,children:[(0,N.jsx)(`option`,{value:`privat`,children:`Privat`}),(0,N.jsx)(`option`,{value:`firma`,children:`Firma`})]})]})]}),(0,N.jsxs)(_c,{children:[(0,N.jsxs)(vc,{children:[(0,N.jsx)(V,{required:!0,children:`E-Mail`}),(0,N.jsx)(yc,{type:`email`,value:o.email,onChange:e=>l(`email`,e.target.value),onBlur:()=>u(`email`),disabled:i,placeholder:`name@example.com`}),s.email&&c.email&&(0,N.jsx)(wc,{children:s.email})]}),(0,N.jsxs)(vc,{children:[(0,N.jsx)(V,{required:!0,children:`Telefon`}),(0,N.jsx)(yc,{type:`tel`,value:o.telefon,onChange:e=>l(`telefon`,e.target.value),onBlur:()=>u(`telefon`),disabled:i,placeholder:`012 345 67 89`}),s.telefon&&c.telefon&&(0,N.jsx)(wc,{children:s.telefon})]})]})]}),(0,N.jsxs)(hc,{children:[(0,N.jsx)(gc,{children:`Adresse`}),(0,N.jsxs)(vc,{children:[(0,N.jsx)(V,{children:`Strasse & Hausnummer`}),(0,N.jsx)(yc,{type:`text`,value:o.adresse.strasse,onChange:e=>l(`adresse.strasse`,e.target.value),disabled:i,placeholder:`Musterstrasse 123`})]}),(0,N.jsxs)(_c,{children:[(0,N.jsxs)(vc,{flex:1,children:[(0,N.jsx)(V,{required:!0,children:`PLZ`}),(0,N.jsx)(yc,{type:`text`,value:o.adresse.plz,onChange:e=>l(`adresse.plz`,e.target.value),onBlur:()=>u(`adresse.plz`),disabled:i,placeholder:`8000`}),s[`adresse.plz`]&&c[`adresse.plz`]&&(0,N.jsx)(wc,{children:s[`adresse.plz`]})]}),(0,N.jsxs)(vc,{flex:2,children:[(0,N.jsx)(V,{required:!0,children:`Ort`}),(0,N.jsx)(yc,{type:`text`,value:o.adresse.ort,onChange:e=>l(`adresse.ort`,e.target.value),onBlur:()=>u(`adresse.ort`),disabled:i,placeholder:`Zürich`}),s[`adresse.ort`]&&c[`adresse.ort`]&&(0,N.jsx)(wc,{children:s[`adresse.ort`]})]}),(0,N.jsxs)(vc,{flex:1,children:[(0,N.jsx)(V,{children:`Land`}),(0,N.jsx)(yc,{type:`text`,value:o.adresse.land,onChange:e=>l(`adresse.land`,e.target.value),disabled:i,placeholder:`Schweiz`})]})]})]}),(0,N.jsxs)(hc,{children:[(0,N.jsx)(gc,{children:`Zusätzliche Informationen`}),(0,N.jsxs)(vc,{children:[(0,N.jsx)(V,{children:`Notizen`}),(0,N.jsx)(xc,{value:o.notizen,onChange:e=>l(`notizen`,e.target.value),disabled:i,placeholder:`Zusätzliche Notizen zum Kunden...`})]})]}),(0,N.jsxs)(Sc,{children:[(0,N.jsx)(Cc,{type:`button`,onClick:h,disabled:i,children:`Abbrechen`}),(0,N.jsx)(Cc,{type:`submit`,variant:`primary`,disabled:i,children:i?`Speichern...`:g?`Aktualisieren`:`Erstellen`})]})]})})};const Ec=()=>{let[e,t]=(0,v.useState)({mwstSatz:0,iban:``,name:``,adresse:``,telefon:``,email:``,website:``}),[n,r]=(0,v.useState)(!0),[i,a]=(0,v.useState)(null);return(0,v.useEffect)(()=>{(async()=>{try{r(!0),a(null);let e=await Ks.get();e&&t({mwstSatz:e.mwstSatz===void 0?0:e.mwstSatz,iban:e.iban||``,name:e.name||``,adresse:e.adresse||``,telefon:e.telefon||``,email:e.email||``,website:e.website||``})}catch(e){console.error(`Fehler beim Laden der Firmeneinstellungen:`,e),a(e.message||`Fehler beim Laden der Firmeneinstellungen`)}finally{r(!1)}})()},[]),{settings:e,loading:n,error:i,mwstSatz:e.mwstSatz,iban:e.iban,firmaName:e.name,firmaAdresse:e.adresse,firmaTelefon:e.telefon,firmaEmail:e.email,firmaWebsite:e.website}},Dc=e=>{if(!e)return``;try{let t=typeof e==`string`?new Date(e):e;return isNaN(t.getTime())?``:t.toISOString().split(`T`)[0]}catch(e){return console.error(`Fehler beim Formatieren des Datums:`,e),``}},Oc=()=>Dc(new Date),kc=(e,t=new Date)=>{let n=new Date(t);return n.setMonth(n.getMonth()+e),Dc(n)};var{Form:Ac,FormSection:jc,FormSectionTitle:Mc,FormRow:Nc,FormGroup:Pc,Label:Fc,Input:Ic,Select:Lc,TextArea:Rc,ButtonGroup:zc,Button:Bc,ErrorMessage:Vc}=di,Hc=({isOpen:e,onClose:t,offerte:n=null,kunden:r=[],onSave:i,onPositionenEdit:a,loading:o=!1})=>{let{mwstSatz:s}=Ec(),c=()=>n?{titel:n.titel||``,kundeId:n.kundeId||``,datum:Dc(n.datum),gültigBis:Dc(n.gültigBis),status:n.status||`entwurf`,zahlungsbedingungen:n.zahlungsbedingungen||`30 Tage netto`,mwstSatz:n.mwstSatz===void 0?s:n.mwstSatz,beschreibung:n.beschreibung||``,notizen:n.notizen||``}:{titel:``,kundeId:``,datum:Oc(),gültigBis:kc(1),status:`entwurf`,zahlungsbedingungen:`30 Tage netto`,mwstSatz:s,beschreibung:``,notizen:``},{formData:l,errors:u,touched:d,handleChange:f,handleBlur:p,handleSubmit:m,resetForm:h,setFormData:g}=wi(c(),dc);(0,v.useEffect)(()=>{e&&g(c())},[n,e,s]);let _=()=>{i(l)},y=()=>{h(),t()},b=!!n,x=b?`Offerte bearbeiten: ${n?.nummer}`:`Neue Offerte`;return(0,N.jsx)(ui,{isOpen:e,onClose:y,title:x,closeOnOverlay:!o,children:(0,N.jsxs)(Ac,{onSubmit:e=>{e.preventDefault(),m(_)},children:[(0,N.jsxs)(jc,{children:[(0,N.jsx)(Mc,{children:`Offerten-Grunddaten`}),(0,N.jsxs)(Pc,{children:[(0,N.jsx)(Fc,{required:!0,children:`Titel`}),(0,N.jsx)(Ic,{type:`text`,value:l.titel,onChange:e=>f(`titel`,e.target.value),onBlur:()=>p(`titel`),disabled:o,placeholder:`WordPress Website mit Shop`}),u.titel&&d.titel&&(0,N.jsx)(Vc,{children:u.titel})]}),(0,N.jsx)(Nc,{children:(0,N.jsxs)(Pc,{children:[(0,N.jsx)(Fc,{required:!0,children:`Kunde`}),(0,N.jsxs)(Lc,{value:l.kundeId,onChange:e=>f(`kundeId`,e.target.value),onBlur:()=>p(`kundeId`),disabled:o,children:[(0,N.jsx)(`option`,{value:``,children:`-- Kunde auswählen --`}),r&&r.map(e=>(0,N.jsx)(`option`,{value:e.id,children:e.firma||e.name},e.id))]}),u.kundeId&&d.kundeId&&(0,N.jsx)(Vc,{children:u.kundeId})]})}),(0,N.jsxs)(Nc,{children:[(0,N.jsxs)(Pc,{children:[(0,N.jsx)(Fc,{required:!0,children:`Offertendatum`}),(0,N.jsx)(Ic,{type:`date`,value:l.datum,onChange:e=>f(`datum`,e.target.value),onBlur:()=>p(`datum`),disabled:o}),u.datum&&d.datum&&(0,N.jsx)(Vc,{children:u.datum})]}),(0,N.jsxs)(Pc,{children:[(0,N.jsx)(Fc,{required:!0,children:`Gültig bis`}),(0,N.jsx)(Ic,{type:`date`,value:l.gültigBis,onChange:e=>f(`gültigBis`,e.target.value),onBlur:()=>p(`gültigBis`),disabled:o}),u.gültigBis&&d.gültigBis&&(0,N.jsx)(Vc,{children:u.gültigBis})]}),(0,N.jsxs)(Pc,{children:[(0,N.jsx)(Fc,{children:`Status`}),(0,N.jsxs)(Lc,{value:l.status,onChange:e=>f(`status`,e.target.value),disabled:o,children:[(0,N.jsx)(`option`,{value:`entwurf`,children:`Entwurf`}),(0,N.jsx)(`option`,{value:`versendet`,children:`Versendet`}),(0,N.jsx)(`option`,{value:`angenommen`,children:`Angenommen`}),(0,N.jsx)(`option`,{value:`abgelehnt`,children:`Abgelehnt`})]})]})]})]}),(0,N.jsxs)(jc,{children:[(0,N.jsx)(Mc,{children:`Konditionen`}),(0,N.jsxs)(Nc,{children:[(0,N.jsxs)(Pc,{flex:2,children:[(0,N.jsx)(Fc,{children:`Zahlungsbedingungen`}),(0,N.jsx)(Ic,{type:`text`,value:l.zahlungsbedingungen,onChange:e=>f(`zahlungsbedingungen`,e.target.value),disabled:o,placeholder:`30 Tage netto`})]}),(0,N.jsxs)(Pc,{children:[(0,N.jsx)(Fc,{children:`MwSt-Satz (%)`}),(0,N.jsx)(Ic,{type:`number`,step:`0.1`,min:`0`,max:`100`,value:l.mwstSatz,onChange:e=>f(`mwstSatz`,parseFloat(e.target.value)||0),onBlur:()=>p(`mwstSatz`),disabled:o}),u.mwstSatz&&d.mwstSatz&&(0,N.jsx)(Vc,{children:u.mwstSatz})]})]})]}),(0,N.jsxs)(jc,{children:[(0,N.jsx)(Mc,{children:`Beschreibung & Notizen`}),(0,N.jsxs)(Pc,{children:[(0,N.jsx)(Fc,{children:`Beschreibung`}),(0,N.jsx)(Rc,{value:l.beschreibung,onChange:e=>f(`beschreibung`,e.target.value),disabled:o,placeholder:`Kurze Beschreibung der Leistungen...`})]}),(0,N.jsxs)(Pc,{children:[(0,N.jsx)(Fc,{children:`Interne Notizen`}),(0,N.jsx)(Rc,{value:l.notizen,onChange:e=>f(`notizen`,e.target.value),disabled:o,placeholder:`Interne Notizen (nicht sichtbar für Kunde)...`})]})]}),b&&(0,N.jsxs)(jc,{children:[(0,N.jsx)(Mc,{children:`Statistiken & Aktionen`}),(0,N.jsxs)(Nc,{children:[(0,N.jsxs)(Pc,{children:[(0,N.jsx)(Fc,{children:`Gesamtbetrag`}),(0,N.jsx)(Ic,{type:`text`,value:`CHF ${n.gesamtBrutto?.toFixed(2)||`0.00`}`,disabled:!0,readOnly:!0})]}),(0,N.jsxs)(Pc,{children:[(0,N.jsx)(Fc,{children:`Erstellt am`}),(0,N.jsx)(Ic,{type:`text`,value:n.erstellt?new Date(n.erstellt).toLocaleDateString(`de-CH`):``,disabled:!0,readOnly:!0})]})]}),(0,N.jsx)(Nc,{children:(0,N.jsxs)(Pc,{children:[(0,N.jsx)(Fc,{children:`Positionen verwalten`}),(0,N.jsx)(Bc,{type:`button`,onClick:()=>a&&a(n),disabled:o,variant:`secondary`,style:{width:`100%`},children:`📋 Positionen bearbeiten`})]})})]}),(0,N.jsxs)(zc,{children:[(0,N.jsx)(Bc,{type:`button`,onClick:y,disabled:o,children:`Abbrechen`}),(0,N.jsx)(Bc,{type:`submit`,variant:`primary`,disabled:o,children:o?`Speichern...`:b?`Aktualisieren`:`Erstellen`})]})]})})},{Form:Uc,FormSection:Wc,FormSectionTitle:Gc,FormRow:Kc,FormGroup:qc,Label:Jc,Input:Yc,Select:Xc,TextArea:Zc,ButtonGroup:Qc,Button:H,ErrorMessage:$c}=di,el=({isOpen:e,onClose:t,rechnung:n=null,kunden:r=[],onSave:i,onPositionenEdit:a,loading:o=!1})=>{let{mwstSatz:s,iban:c}=Ec(),l=()=>n?{titel:n.titel||``,kundeId:n.kundeId||``,datum:Dc(n.datum),faelligkeitsdatum:Dc(n.faelligkeitsdatum),status:n.status||`entwurf`,zahlungsbedingungen:n.zahlungsbedingungen||`30 Tage netto`,mwstSatz:n.mwstSatz===void 0?s:n.mwstSatz,iban:n.iban||c,qrReferenz:n.qrReferenz||``,beschreibung:n.beschreibung||``,notizen:n.notizen||``}:{titel:``,kundeId:``,datum:Oc(),faelligkeitsdatum:kc(1),status:`entwurf`,zahlungsbedingungen:`30 Tage netto`,mwstSatz:s,iban:c,qrReferenz:``,beschreibung:``,notizen:``},{formData:u,errors:d,touched:f,handleChange:p,handleBlur:m,handleSubmit:h,resetForm:g,setFormData:_}=wi(l(),fc);(0,v.useEffect)(()=>{e&&_(l())},[n,e,s,c]);let y=()=>{let e={...u,mwstSatz:parseFloat(u.mwstSatz)};i(e)},b=()=>{g(),t()},x=!!n,S=x?`Rechnung bearbeiten: ${n?.nummer}`:`Neue Rechnung`;return(0,N.jsx)(ui,{isOpen:e,onClose:b,title:S,closeOnOverlay:!o,children:(0,N.jsxs)(Uc,{onSubmit:e=>{e.preventDefault(),h(y)},children:[(0,N.jsxs)(Wc,{children:[(0,N.jsx)(Gc,{children:`Rechnungs-Grunddaten`}),(0,N.jsxs)(qc,{children:[(0,N.jsx)(Jc,{required:!0,children:`Titel`}),(0,N.jsx)(Yc,{type:`text`,value:u.titel,onChange:e=>p(`titel`,e.target.value),onBlur:()=>m(`titel`),disabled:o,placeholder:`WordPress Website mit Shop`}),d.titel&&f.titel&&(0,N.jsx)($c,{children:d.titel})]}),(0,N.jsx)(Kc,{children:(0,N.jsxs)(qc,{children:[(0,N.jsx)(Jc,{required:!0,children:`Kunde`}),(0,N.jsxs)(Xc,{value:u.kundeId,onChange:e=>p(`kundeId`,e.target.value),onBlur:()=>m(`kundeId`),disabled:o,children:[(0,N.jsx)(`option`,{value:``,children:`-- Kunde auswählen --`}),r&&r.map(e=>(0,N.jsx)(`option`,{value:e.id,children:e.firma||e.name},e.id))]}),d.kundeId&&f.kundeId&&(0,N.jsx)($c,{children:d.kundeId})]})}),(0,N.jsxs)(Kc,{children:[(0,N.jsxs)(qc,{children:[(0,N.jsx)(Jc,{required:!0,children:`Rechnungsdatum`}),(0,N.jsx)(Yc,{type:`date`,value:u.datum,onChange:e=>p(`datum`,e.target.value),onBlur:()=>m(`datum`),disabled:o}),d.datum&&f.datum&&(0,N.jsx)($c,{children:d.datum})]}),(0,N.jsxs)(qc,{children:[(0,N.jsx)(Jc,{required:!0,children:`Fälligkeitsdatum`}),(0,N.jsx)(Yc,{type:`date`,value:u.faelligkeitsdatum,onChange:e=>p(`faelligkeitsdatum`,e.target.value),onBlur:()=>m(`faelligkeitsdatum`),disabled:o}),d.faelligkeitsdatum&&f.faelligkeitsdatum&&(0,N.jsx)($c,{children:d.faelligkeitsdatum})]}),(0,N.jsxs)(qc,{children:[(0,N.jsx)(Jc,{children:`Status`}),(0,N.jsxs)(Xc,{value:u.status,onChange:e=>p(`status`,e.target.value),disabled:o,children:[(0,N.jsx)(`option`,{value:`entwurf`,children:`Entwurf`}),(0,N.jsx)(`option`,{value:`fertig`,children:`Fertig`}),(0,N.jsx)(`option`,{value:`gesendet`,children:`Gesendet`}),(0,N.jsx)(`option`,{value:`bezahlt`,children:`Bezahlt`})]})]})]})]}),(0,N.jsxs)(Wc,{children:[(0,N.jsx)(Gc,{children:`Zahlungsinformationen`}),(0,N.jsxs)(qc,{children:[(0,N.jsx)(Jc,{required:!0,children:`IBAN`}),(0,N.jsx)(Yc,{type:`text`,value:u.iban,onChange:e=>p(`iban`,e.target.value),onBlur:()=>m(`iban`),disabled:o,placeholder:`CH93 0076 2011 6238 5295 7`}),d.iban&&f.iban&&(0,N.jsx)($c,{children:d.iban})]}),x&&u.qrReferenz&&(0,N.jsxs)(qc,{children:[(0,N.jsx)(Jc,{children:`QR-Referenz`}),(0,N.jsx)(Yc,{type:`text`,value:u.qrReferenz,disabled:!0,readOnly:!0})]}),(0,N.jsxs)(Kc,{children:[(0,N.jsxs)(qc,{flex:2,children:[(0,N.jsx)(Jc,{children:`Zahlungsbedingungen`}),(0,N.jsx)(Yc,{type:`text`,value:u.zahlungsbedingungen,onChange:e=>p(`zahlungsbedingungen`,e.target.value),disabled:o,placeholder:`30 Tage netto`})]}),(0,N.jsxs)(qc,{children:[(0,N.jsx)(Jc,{children:`MwSt-Satz (%)`}),(0,N.jsx)(Yc,{type:`number`,step:`0.1`,min:`0`,max:`100`,value:u.mwstSatz,onChange:e=>p(`mwstSatz`,parseFloat(e.target.value)||0),onBlur:()=>m(`mwstSatz`),disabled:o}),d.mwstSatz&&f.mwstSatz&&(0,N.jsx)($c,{children:d.mwstSatz})]})]})]}),(0,N.jsxs)(Wc,{children:[(0,N.jsx)(Gc,{children:`Beschreibung & Notizen`}),(0,N.jsxs)(qc,{children:[(0,N.jsx)(Jc,{children:`Beschreibung`}),(0,N.jsx)(Zc,{value:u.beschreibung,onChange:e=>p(`beschreibung`,e.target.value),disabled:o,placeholder:`Kurze Beschreibung der Leistungen...`})]}),(0,N.jsxs)(qc,{children:[(0,N.jsx)(Jc,{children:`Interne Notizen`}),(0,N.jsx)(Zc,{value:u.notizen,onChange:e=>p(`notizen`,e.target.value),disabled:o,placeholder:`Interne Notizen (nicht sichtbar für Kunde)...`})]})]}),x&&(0,N.jsxs)(Wc,{children:[(0,N.jsx)(Gc,{children:`Statistiken & Aktionen`}),(0,N.jsxs)(Kc,{children:[(0,N.jsxs)(qc,{children:[(0,N.jsx)(Jc,{children:`Gesamtbetrag`}),(0,N.jsx)(Yc,{type:`text`,value:`CHF ${n.gesamtBrutto?.toFixed(2)||`0.00`}`,disabled:!0,readOnly:!0})]}),(0,N.jsxs)(qc,{children:[(0,N.jsx)(Jc,{children:`Erstellt am`}),(0,N.jsx)(Yc,{type:`text`,value:n.datum?new Date(n.datum).toLocaleDateString(`de-CH`):``,disabled:!0,readOnly:!0})]})]}),(0,N.jsx)(Kc,{children:(0,N.jsxs)(qc,{children:[(0,N.jsx)(Jc,{children:`Positionen verwalten`}),(0,N.jsx)(H,{type:`button`,onClick:()=>a&&a(n),disabled:o,variant:`secondary`,style:{width:`100%`},children:`📋 Positionen bearbeiten`})]})})]}),(0,N.jsxs)(Qc,{children:[(0,N.jsx)(H,{type:`button`,onClick:b,disabled:o,children:`Abbrechen`}),(0,N.jsx)(H,{type:`submit`,variant:`primary`,disabled:o,children:o?`Speichern...`:x?`Aktualisieren`:`Erstellen`})]})]})})},tl=s({CardActions:()=>hl,CardField:()=>gl,CardFieldLabel:()=>_l,CardFieldValue:()=>vl,CardHeader:()=>pl,CardTitle:()=>ml,EmptyState:()=>xl,LoadingState:()=>Sl,MobileCard:()=>fl,MobileList:()=>dl,MobileTotalCard:()=>yl,Table:()=>nl,TableBody:()=>al,TableContainer:()=>U,TableHead:()=>rl,TableInput:()=>ll,TableSelect:()=>ul,Td:()=>sl,Th:()=>il,TotalRow:()=>cl,TotalRowMobile:()=>bl,Tr:()=>ol});const nl=j.table`
  width: 100%;
  border-collapse: collapse;
  margin: ${M.spacing.md} 0;
  font-family: ${M.fonts.mono};
  font-size: ${M.fontSizes.sm};
  
  /* Hide table on mobile */
  @media (max-width: 768px) {
    display: ${e=>e.hideMobile?`none`:`table`};
  }
`,rl=j.thead`
  background: ${M.colors.bgSecondary};
`,il=j.th`
  background: ${M.colors.bgSecondary};
  color: ${M.colors.accentCyan};
  padding: ${M.spacing.sm};
  text-align: ${e=>e.align||`left`};
  border: 1px solid ${M.colors.borderColor};
  font-size: ${M.fontSizes.xs};
  text-transform: uppercase;
  letter-spacing: ${M.letterSpacing.wide};
  font-weight: ${M.fontWeights.semibold};
  white-space: nowrap;
  
  @media (max-width: 768px) {
    padding: ${M.spacing.xs} ${M.spacing.sm};
    font-size: ${M.fontSizes.xs};
  }
`,al=j.tbody`
  /* Styling via Rows */
`,ol=j.tr`
  transition: background 0.2s ease;
  
  &:hover:not(.editing) {
    background: ${M.colors.bgSecondary};
    
    td {
      color: ${M.colors.textPrimary};
    }
  }
  
  &.editing {
    background: ${M.colors.accentBlue}22;
    
    td {
      color: ${M.colors.textPrimary};
    }
  }
  
  &.clickable {
    cursor: pointer;
  }
`,sl=j.td`
  padding: ${M.spacing.sm};
  border: 1px solid ${M.colors.borderColor};
  background: ${e=>e.background||M.colors.bgTertiary};
  color: ${M.colors.textPrimary};
  text-align: ${e=>e.align||`left`};
  
  &.editing {
    padding: 2px;
  }
  
  &.numeric {
    text-align: right;
    font-family: ${M.fonts.mono};
    color: ${M.colors.textPrimary};
    font-weight: ${M.fontWeights.medium};
  }
  
  &.actions {
    text-align: center;
    width: ${e=>e.width||`120px`};
  }
  
  @media (max-width: 768px) {
    padding: ${M.spacing.xs};
    font-size: ${M.fontSizes.xs};
  }
`,cl=j(ol)`
  background: ${M.colors.bgSecondary};
  font-weight: bold;
  
  td {
    border-top: 2px solid ${M.colors.accentGreen};
    color: ${M.colors.textPrimary};
    font-weight: ${M.fontWeights.bold};
  }
`,ll=j.input`
  width: 100%;
  padding: ${M.spacing.xs};
  font-size: ${M.fontSizes.sm};
  margin: 0;
  background: ${M.colors.bgPrimary};
  color: ${M.colors.textPrimary};
  border: 1px solid ${M.colors.accentBlue};
  border-radius: ${M.borderRadius.base};
  font-family: ${M.fonts.mono};
  
  &:focus {
    background: ${M.colors.bgPrimary};
    border-color: ${M.colors.accentGreen};
    color: ${M.colors.textPrimary};
    outline: none;
  }
`,ul=j.select`
  width: 100%;
  padding: ${M.spacing.xs};
  font-size: ${M.fontSizes.sm};
  margin: 0;
  background: ${M.colors.bgPrimary};
  color: ${M.colors.textPrimary};
  border: 1px solid ${M.colors.accentBlue};
  border-radius: ${M.borderRadius.base};
  font-family: ${M.fonts.mono};
  
  &:focus {
    background: ${M.colors.bgPrimary};
    border-color: ${M.colors.accentGreen};
    outline: none;
  }
`,dl=j.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    margin: ${M.spacing.md} 0;
  }
`,fl=j.div`
  background: ${M.colors.bgTertiary};
  border: 1px solid ${M.colors.borderColor};
  border-radius: ${M.borderRadius.base};
  margin-bottom: ${M.spacing.md};
  padding: ${M.spacing.md};
  transition: all 0.2s ease;
  
  &.editing {
    border-color: ${M.colors.accentBlue};
    background: ${M.colors.accentBlue}22;
  }
  
  &.clickable {
    cursor: pointer;
    
    &:active {
      transform: scale(0.98);
      background: ${M.colors.bgSecondary};
    }
  }
`,pl=j.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${M.spacing.sm};
  padding-bottom: ${M.spacing.sm};
  border-bottom: 1px solid ${M.colors.borderColor};
`,ml=j.span`
  font-weight: bold;
  color: ${M.colors.accentCyan};
  font-size: ${M.fontSizes.base};
`,hl=j.div`
  display: flex;
  gap: ${M.spacing.xs};
  flex-wrap: wrap;
`,gl=j.div`
  margin-bottom: ${M.spacing.sm};
`,_l=j.div`
  font-size: ${M.fontSizes.xs};
  color: ${M.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: ${M.letterSpacing.wide};
  margin-bottom: ${M.spacing.xs};
`,vl=j.div`
  color: ${M.colors.textPrimary};
  font-size: ${M.fontSizes.sm};
  
  &.numeric {
    font-family: ${M.fonts.mono};
    font-weight: ${M.fontWeights.medium};
  }
  
  &.highlight {
    color: ${M.colors.accentCyan};
    font-weight: ${M.fontWeights.semibold};
  }
`,yl=j(fl)`
  background: ${M.colors.bgSecondary};
  border: 2px solid ${M.colors.accentGreen};
  margin-top: ${M.spacing.lg};
`,bl=j.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${M.spacing.sm};
  font-weight: bold;
  color: ${M.colors.textPrimary};
  
  &:last-child {
    margin-bottom: 0;
    padding-top: ${M.spacing.sm};
    border-top: 1px solid ${M.colors.accentYellow};
    color: ${M.colors.accentYellow};
  }
`,xl=j.div`
  text-align: center;
  padding: ${M.spacing.xl} ${M.spacing.lg};
  color: ${M.colors.textSecondary};
  font-style: italic;
  
  @media (max-width: 768px) {
    padding: ${M.spacing.lg} ${M.spacing.md};
  }
`,Sl=j(xl)`
  color: ${M.colors.accentCyan};
`,U=j.div`
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
    background: ${M.colors.bgTertiary};
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${M.colors.borderColor};
    border-radius: ${M.borderRadius.base};
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${M.colors.accentBlue};
  }
`;var W={async getAll(){try{let e=await B.get(`/offerten`);return e.data.success?e.data.data:[]}catch(e){throw console.error(`Fehler beim Laden der Offerten:`,e),e}},async getById(e){try{let t=await B.get(`/offerten/${e}`);return t.data.success?t.data.data:null}catch(t){throw console.error(`Fehler beim Laden der Offerte ${e}:`,t),t}},async create(e){try{let t=await B.post(`/offerten`,e);return t.data.success?t.data.data:null}catch(e){throw console.error(`Fehler beim Erstellen der Offerte:`,e),e}},async update(e,t){try{return(await B.put(`/offerten/${e}`,t)).data}catch(t){throw console.error(`Fehler beim Aktualisieren der Offerte ${e}:`,t),t}},async delete(e){try{return(await B.delete(`/offerten/${e}`)).data}catch(t){throw console.error(`Fehler beim Löschen der Offerte ${e}:`,t),t}},async getPositionen(e){try{return(await B.get(`/offerten/${e}/positionen`)).data}catch(t){throw console.error(`Fehler beim Laden der Positionen für Offerte ${e}:`,t),t}},async addPosition(e,t){try{return(await B.post(`/offerten/${e}/positionen`,t)).data}catch(t){throw console.error(`Fehler beim Hinzufügen der Position zur Offerte ${e}:`,t),t}},async updatePosition(e,t,n){try{return(await B.put(`/offerten/${e}/positionen/${t}`,n)).data}catch(e){throw console.error(`Fehler beim Aktualisieren der Position ${t}:`,e),e}},async deletePosition(e,t){try{return(await B.delete(`/offerten/${e}/positionen/${t}`)).data}catch(e){throw console.error(`Fehler beim Löschen der Position ${t}:`,e),e}},async exportToPdf(e){try{let t=await B.get(`/offerten/${e}/pdf`,{responseType:`blob`}),n=new Blob([t.data],{type:`application/pdf`}),r=window.URL.createObjectURL(n),i=document.createElement(`a`);return i.href=r,i.download=`offerte_${e}.pdf`,document.body.appendChild(i),i.click(),document.body.removeChild(i),window.URL.revokeObjectURL(r),{success:!0,message:`PDF wurde heruntergeladen`}}catch(t){throw console.error(`Fehler beim PDF-Export der Offerte ${e}:`,t),t}}},Cl={async getAll(){try{let e=await B.get(`/rechnungen`);return e.data.success?e.data.data:[]}catch(e){throw console.error(`Fehler beim Laden der Rechnungen:`,e),e}},async getById(e){try{let t=await B.get(`/rechnungen/${e}`);return t.data.success?t.data.data:null}catch(t){throw console.error(`Fehler beim Laden der Rechnung ${e}:`,t),t}},async create(e){try{let t=await B.post(`/rechnungen`,e);return t.data.success?t.data.data:null}catch(e){throw console.error(`Fehler beim Erstellen der Rechnung:`,e),e}},async createFromOfferte(e){try{let t=await B.post(`/rechnungen/from-offerte/${e}`);return t.data.success?t.data.data:null}catch(e){throw console.error(`Fehler beim Erstellen der Rechnung aus Offerte:`,e),e}},async update(e,t){try{return(await B.put(`/rechnungen/${e}`,t)).data}catch(t){throw console.error(`Fehler beim Aktualisieren der Rechnung ${e}:`,t),t}},async delete(e){try{return(await B.delete(`/rechnungen/${e}`)).data}catch(t){throw console.error(`Fehler beim Löschen der Rechnung ${e}:`,t),t}},async getPositionen(e){try{return(await B.get(`/rechnungen/${e}/positionen`)).data}catch(t){throw console.error(`Fehler beim Laden der Positionen für Rechnung ${e}:`,t),t}},async addPosition(e,t){try{return(await B.post(`/rechnungen/${e}/positionen`,t)).data}catch(t){throw console.error(`Fehler beim Hinzufügen der Position zur Rechnung ${e}:`,t),t}},async updatePosition(e,t,n){try{return(await B.put(`/rechnungen/${e}/positionen/${t}`,n)).data}catch(e){throw console.error(`Fehler beim Aktualisieren der Position ${t}:`,e),e}},async deletePosition(e,t){try{return(await B.delete(`/rechnungen/${e}/positionen/${t}`)).data}catch(e){throw console.error(`Fehler beim Löschen der Position ${t}:`,e),e}},async exportToPdf(e){try{let t=await B.get(`/rechnungen/${e}/pdf`,{responseType:`blob`}),n=t.headers[`content-disposition`],r=`rechnung_${e}.pdf`;if(n){let e=n.match(/filename="?(.+)"?/);e&&(r=e[1])}let i=new Blob([t.data],{type:`application/pdf`}),a=window.URL.createObjectURL(i),o=document.createElement(`a`);return o.href=a,o.download=r,document.body.appendChild(o),o.click(),document.body.removeChild(o),window.URL.revokeObjectURL(a),{success:!0,filename:r}}catch(t){throw console.error(`Fehler beim PDF-Export der Rechnung ${e}:`,t),t}}},{Form:wl,FormGroup:Tl,Label:El,Input:Dl,Select:Ol,ButtonGroup:kl,Button:Al}=di,{Table:jl,Th:Ml,Td:G,Tr:Nl,TotalRow:Pl,MobileCard:Fl,CardHeader:Il,CardField:Ll,EmptyState:Rl}=tl,zl=({isOpen:e,onClose:t,offerte:n,onSave:r,onEditEntity:i,loading:a=!1})=>{let[o,s]=(0,v.useState)([]),[c,l]=(0,v.useState)(null),[u,d]=(0,v.useState)({}),[f,p]=(0,v.useState)(!1),m=[`Std`,`Tag`,`Stk`,`Psch`,`Monat`],h=[`Beratung`,`Entwicklung`,`Design`,`Testing`,`Wartung`,`Hosting`,`E-Commerce`,`Sonstiges`],{formData:g,setFormData:_,resetForm:y}=wi((()=>({beschreibung:``,menge:1,einheit:`Std`,einzelpreis:0,rabatt:0,kategorie:`Entwicklung`}))(),pc);(0,v.useEffect)(()=>{e&&n&&b()},[e,n]);let b=async()=>{if(n)try{let e=await(n.nummer?.startsWith(`REC-`)?Cl:W).getPositionen(n.id),t=e.success?e.data:e;s(Array.isArray(t)?t:[])}catch(e){console.error(`Fehler beim Laden der Positionen:`,e),s([])}},x=(e,t,n)=>{let r=e*t,i=r*(n/100);return r-i},S=e=>{l(e.id),d({beschreibung:e.beschreibung,menge:e.menge,einheit:e.einheit,einzelpreis:e.einzelpreis,rabatt:e.rabatt,kategorie:e.kategorie})},C=async()=>{try{let e=x(u.menge,u.einzelpreis,u.rabatt),t={...u,gesamtpreis:e};await(n.nummer?.startsWith(`REC-`)?Cl:W).updatePosition(n.id,c,t),s(e=>e.map(e=>e.id===c?{...e,...t}:e)),l(null),d({})}catch(e){console.error(`Fehler beim Speichern der Position:`,e),alert(`Fehler beim Speichern der Position: `+e.message)}},w=()=>{l(null),d({})},ee=async e=>{if(confirm(`Position wirklich löschen?`))try{await(n.nummer?.startsWith(`REC-`)?Cl:W).deletePosition(n.id,e),s(t=>t.filter(t=>t.id!==e))}catch(e){console.error(`Fehler beim Löschen der Position:`,e),alert(`Fehler beim Löschen der Position: `+e.message)}},te=async()=>{try{let e=x(g.menge,g.einzelpreis,g.rabatt),t={position:o.length+1,...g,gesamtpreis:e},r=await(n.nummer?.startsWith(`REC-`)?Cl:W).addPosition(n.id,t),i=r.success?r.data:r;s(e=>[...e,i]),y(),p(!1)}catch(e){console.error(`Fehler beim Hinzufügen der Position:`,e),alert(`Fehler beim Hinzufügen der Position: `+e.message)}},ne=(e,t,n=`text`)=>c===e.id?(0,N.jsx)(G,{editing:!0,children:(0,N.jsx)(Dl,{type:n,value:u[t]||``,onChange:e=>d(r=>({...r,[t]:n===`number`?parseFloat(e.target.value)||0:e.target.value})),style:{fontSize:M.fontSizes.sm,padding:M.spacing.xs,margin:0}})}):(0,N.jsx)(G,{numeric:n===`number`,children:n===`number`&&typeof e[t]==`number`?e[t].toFixed(2):e[t]}),T=(e,t,n)=>c===e.id?(0,N.jsx)(G,{editing:!0,children:(0,N.jsx)(Ol,{value:u[t]||e[t],onChange:e=>d(n=>({...n,[t]:e.target.value})),style:{fontSize:M.fontSizes.sm,padding:M.spacing.xs},children:n.map(e=>(0,N.jsx)(`option`,{value:e,children:e},e))})}):(0,N.jsx)(G,{children:e[t]}),re=o.reduce((e,t)=>e+t.gesamtpreis,0),ie=re*((n?.mwstSatz===void 0?7.7:n.mwstSatz)/100),ae=re+ie;return n?(0,N.jsx)(ui,{isOpen:e,onClose:t,title:`Positionen: ${n.titel} (${n.nummer})`,closeOnOverlay:!a,wide:!0,children:(0,N.jsxs)(`div`,{children:[(0,N.jsxs)(jl,{children:[(0,N.jsx)(`thead`,{children:(0,N.jsxs)(`tr`,{children:[(0,N.jsx)(Ml,{children:`Pos.`}),(0,N.jsx)(Ml,{children:`Beschreibung`}),(0,N.jsx)(Ml,{children:`Menge`}),(0,N.jsx)(Ml,{children:`Einheit`}),(0,N.jsx)(Ml,{children:`Einzelpreis`}),(0,N.jsx)(Ml,{children:`Rabatt %`}),(0,N.jsx)(Ml,{children:`Gesamtpreis`}),(0,N.jsx)(Ml,{children:`Kategorie`}),(0,N.jsx)(Ml,{children:`Aktionen`})]})}),(0,N.jsxs)(`tbody`,{children:[o.map(e=>(0,N.jsxs)(Nl,{editing:c===e.id,children:[(0,N.jsx)(G,{children:e.position}),ne(e,`beschreibung`),ne(e,`menge`,`number`),T(e,`einheit`,m),ne(e,`einzelpreis`,`number`),ne(e,`rabatt`,`number`),(0,N.jsxs)(G,{numeric:!0,children:[`CHF `,e.gesamtpreis.toFixed(2)]}),T(e,`kategorie`,h),(0,N.jsx)(G,{actions:!0,children:c===e.id?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(er,{variant:`success`,onClick:C,children:`✓`}),(0,N.jsx)(er,{onClick:w,children:`✗`})]}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(er,{onClick:()=>S(e),children:`✎`}),(0,N.jsx)(er,{variant:`danger`,onClick:()=>ee(e.id),children:`🗑`})]})})]},e.id)),f&&(0,N.jsxs)(Nl,{editing:!0,children:[(0,N.jsx)(G,{children:o.length+1}),(0,N.jsx)(G,{editing:!0,children:(0,N.jsx)(Dl,{value:g.beschreibung,onChange:e=>_(t=>({...t,beschreibung:e.target.value})),placeholder:`Beschreibung...`,style:{fontSize:M.fontSizes.sm,padding:M.spacing.xs,margin:0}})}),(0,N.jsx)(G,{editing:!0,children:(0,N.jsx)(Dl,{type:`number`,value:g.menge,onChange:e=>_(t=>({...t,menge:parseFloat(e.target.value)||0})),style:{fontSize:M.fontSizes.sm,padding:M.spacing.xs,margin:0}})}),(0,N.jsx)(G,{editing:!0,children:(0,N.jsx)(Ol,{value:g.einheit,onChange:e=>_(t=>({...t,einheit:e.target.value})),style:{fontSize:M.fontSizes.sm,padding:M.spacing.xs},children:m.map(e=>(0,N.jsx)(`option`,{value:e,children:e},e))})}),(0,N.jsx)(G,{editing:!0,children:(0,N.jsx)(Dl,{type:`number`,step:`0.01`,value:g.einzelpreis,onChange:e=>_(t=>({...t,einzelpreis:parseFloat(e.target.value)||0})),style:{fontSize:M.fontSizes.sm,padding:M.spacing.xs,margin:0}})}),(0,N.jsx)(G,{editing:!0,children:(0,N.jsx)(Dl,{type:`number`,step:`0.1`,value:g.rabatt,onChange:e=>_(t=>({...t,rabatt:parseFloat(e.target.value)||0})),style:{fontSize:M.fontSizes.sm,padding:M.spacing.xs,margin:0}})}),(0,N.jsxs)(G,{numeric:!0,children:[`CHF `,x(g.menge,g.einzelpreis,g.rabatt).toFixed(2)]}),(0,N.jsx)(G,{editing:!0,children:(0,N.jsx)(Ol,{value:g.kategorie,onChange:e=>_(t=>({...t,kategorie:e.target.value})),style:{fontSize:M.fontSizes.sm,padding:M.spacing.xs},children:h.map(e=>(0,N.jsx)(`option`,{value:e,children:e},e))})}),(0,N.jsxs)(G,{actions:!0,children:[(0,N.jsx)(er,{variant:`success`,onClick:te,children:`✓`}),(0,N.jsx)(er,{onClick:()=>p(!1),children:`✗`})]})]}),(0,N.jsxs)(Pl,{children:[(0,N.jsx)(G,{colSpan:`6`,style:{textAlign:`right`,fontWeight:`bold`},children:`Subtotal:`}),(0,N.jsxs)(G,{numeric:!0,style:{fontWeight:`bold`,color:M.colors.accentGreen},children:[`CHF `,re.toFixed(2)]}),(0,N.jsx)(G,{colSpan:`2`})]}),(0,N.jsxs)(Pl,{children:[(0,N.jsxs)(G,{colSpan:`6`,style:{textAlign:`right`,fontWeight:`bold`},children:[`MwSt (`,n.mwstSatz===void 0?7.7:n.mwstSatz,`%):`]}),(0,N.jsxs)(G,{numeric:!0,style:{fontWeight:`bold`,color:M.colors.accentYellow},children:[`CHF `,ie.toFixed(2)]}),(0,N.jsx)(G,{colSpan:`2`})]}),(0,N.jsxs)(Pl,{children:[(0,N.jsx)(G,{colSpan:`6`,style:{textAlign:`right`,fontWeight:`bold`},children:`Gesamtbetrag:`}),(0,N.jsxs)(G,{numeric:!0,style:{fontWeight:`bold`,color:M.colors.accentBlue,fontSize:M.fontSizes.base},children:[`CHF `,ae.toFixed(2)]}),(0,N.jsx)(G,{colSpan:`2`})]})]})]}),(0,N.jsxs)(`div`,{style:{display:`none`},className:`mobile-only`,children:[o.map(e=>(0,N.jsxs)(Fl,{editing:c===e.id,children:[(0,N.jsxs)(Il,{children:[(0,N.jsxs)(`span`,{style:{fontWeight:`bold`,color:M.colors.accentCyan},children:[`Position `,e.position]}),(0,N.jsx)(`div`,{style:{display:`flex`,gap:M.spacing.xs},children:c===e.id?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(er,{variant:`success`,onClick:C,children:`✓`}),(0,N.jsx)(er,{onClick:w,children:`✗`})]}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(er,{onClick:()=>S(e),children:`✎`}),(0,N.jsx)(er,{variant:`danger`,onClick:()=>ee(e.id),children:`🗑`})]})})]}),(0,N.jsx)(Ll,{label:`Beschreibung`,value:e.beschreibung}),(0,N.jsx)(Ll,{label:`Menge`,value:`${e.menge} ${e.einheit}`}),(0,N.jsx)(Ll,{label:`Einzelpreis`,value:`CHF ${e.einzelpreis.toFixed(2)}`}),(0,N.jsx)(Ll,{label:`Rabatt`,value:`${e.rabatt}%`}),(0,N.jsx)(Ll,{label:`Kategorie`,value:e.kategorie}),(0,N.jsx)(Ll,{label:`Gesamtpreis`,value:`CHF ${e.gesamtpreis.toFixed(2)}`,highlight:!0})]},e.id)),(0,N.jsxs)(`div`,{style:{background:M.colors.bgSecondary,border:`2px solid ${M.colors.accentGreen}`,borderRadius:M.borderRadius.base,padding:M.spacing.md,marginTop:M.spacing.lg},children:[(0,N.jsx)(Ll,{label:`Subtotal`,value:`CHF ${re.toFixed(2)}`}),(0,N.jsx)(Ll,{label:`MwSt (${n.mwstSatz===void 0?7.7:n.mwstSatz}%)`,value:`CHF ${ie.toFixed(2)}`}),(0,N.jsx)(Ll,{label:`Gesamtbetrag`,value:`CHF ${ae.toFixed(2)}`,highlight:!0})]})]}),(0,N.jsxs)(kl,{children:[(0,N.jsx)(Al,{onClick:()=>p(!0),disabled:f||c,variant:`success`,children:`+ Neue Position`}),n&&i&&(0,N.jsxs)(Al,{onClick:()=>{t(),i(n)},variant:`secondary`,children:[`📝 `,n.nummer?.startsWith(`REC-`)?`Rechnung`:`Offerte`,` bearbeiten`]})]}),(0,N.jsxs)(kl,{children:[(0,N.jsx)(Al,{onClick:t,children:`Schließen`}),(0,N.jsx)(Al,{variant:`primary`,onClick:()=>r&&r({positionen:o,subtotal:re,mwstBetrag:ie,gesamtBrutto:ae}),disabled:a||c||f,children:a?`Speichern...`:`Änderungen speichern`})]})]})}):null},Bl=j.div`
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
`,Vl=j.div`
  color: ${e=>e.theme.colors.accentGreen};
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: ${e=>e.theme.spacing.sm};
  padding-bottom: ${e=>e.theme.spacing.xs};
  border-bottom: 1px solid ${e=>e.theme.colors.borderColor};
`,Hl=j.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,Ul=j.button`
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
`,Wl=j.div`
  margin-top: ${e=>e.theme.spacing.sm};
  padding-top: ${e=>e.theme.spacing.xs};
  border-top: 1px solid ${e=>e.theme.colors.borderColor};
  font-size: 0.875rem;
  color: ${e=>e.theme.colors.textSecondary};
  text-align: center;
`,Gl=j.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`,Kl={offers:[{value:`entwurf`,label:`Entwurf`},{value:`versendet`,label:`Versendet`},{value:`angenommen`,label:`Angenommen`},{value:`abgelehnt`,label:`Abgelehnt`}],invoices:[{value:`entwurf`,label:`Entwurf`},{value:`fertig`,label:`Fertig`},{value:`gesendet`,label:`Gesendet`},{value:`bezahlt`,label:`Bezahlt`}]},ql=({currentStatus:e,onStatusChange:t,onClose:n,entityType:r=`offers`})=>{let i=Kl[r]||Kl.offers,[a,o]=(0,v.useState)(i.findIndex(t=>t.value===e)),s=(0,v.useRef)(null);return(0,v.useEffect)(()=>{let e=e=>{switch(e.key){case`ArrowUp`:e.preventDefault(),o(e=>Math.max(0,e-1));break;case`ArrowDown`:e.preventDefault(),o(e=>Math.min(i.length-1,e+1));break;case`Enter`:e.preventDefault(),t(i[a].value);break;case`Escape`:e.preventDefault(),n();break;default:break}};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},[a,t,n,i]),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(Gl,{onClick:n}),(0,N.jsxs)(Bl,{ref:s,children:[(0,N.jsx)(Vl,{children:`Status wechseln`}),(0,N.jsx)(Hl,{children:i.map((e,n)=>(0,N.jsx)(Ul,{$selected:n===a,onClick:()=>t(e.value),children:e.label},e.value))}),(0,N.jsx)(Wl,{children:`↑↓ Navigation | Enter=Auswählen | Esc=Abbrechen`})]})]})},Jl={async getAll(){try{let e=await B.get(`/kunden`);return e.data.success?e.data.data:[]}catch(e){throw console.error(`Fehler beim Laden der Kunden:`,e),e}},async getById(e){try{let t=await B.get(`/kunden/${e}`);return t.data.success?t.data.data:null}catch(t){throw console.error(`Fehler beim Laden des Kunden ${e}:`,t),t}},async create(e){try{let t=await B.post(`/kunden`,e);return t.data.success?t.data.data:null}catch(e){throw console.error(`Fehler beim Erstellen des Kunden:`,e),e}},async update(e,t){try{return(await B.put(`/kunden/${e}`,t)).data}catch(t){throw console.error(`Fehler beim Aktualisieren des Kunden ${e}:`,t),t}},async delete(e){try{return(await B.delete(`/kunden/${e}`)).data}catch(t){throw console.error(`Fehler beim Löschen des Kunden ${e}:`,t),t}}},Yl=()=>{let[e,t]=(0,v.useState)([]),[n,r]=(0,v.useState)(!1),[i,a]=(0,v.useState)(null),o=async()=>{r(!0),a(null);try{let e=await Jl.getAll();t(Array.isArray(e)?e:[])}catch(e){a(e.message),console.error(`Fehler beim Laden der Kunden:`,e),t([])}finally{r(!1)}};return(0,v.useEffect)(()=>{o()},[]),{kunden:Array.isArray(e)?e:[],loading:n,error:i,loadKunden:o,refreshKunden:o,createKunde:async e=>{r(!0),a(null);try{let n=await Jl.create(e);return t(e=>[...e,n]),n}catch(e){throw a(e.message),e}finally{r(!1)}},updateKunde:async(e,n)=>{r(!0),a(null);try{let r=await Jl.update(e,n);return t(t=>t.map(t=>t.id===e?r:t)),r}catch(e){throw a(e.message),e}finally{r(!1)}},deleteKunde:async e=>{r(!0),a(null);try{await Jl.delete(e),t(t=>t.filter(t=>t.id!==e))}catch(e){throw a(e.message),e}finally{r(!1)}}}},Xl=()=>{let[e,t]=(0,v.useState)([]),[n,r]=(0,v.useState)(!1),[i,a]=(0,v.useState)(null),o=async()=>{r(!0),a(null);try{let e=await W.getAll();t(Array.isArray(e)?e:[])}catch(e){a(e.message),console.error(`Fehler beim Laden der Offerten:`,e),t([])}finally{r(!1)}};return(0,v.useEffect)(()=>{o()},[]),{offerten:Array.isArray(e)?e:[],loading:n,error:i,loadOfferten:o,refreshOfferten:o,createOfferte:async e=>{r(!0),a(null);try{let n=await W.create(e);return t(e=>[...e,n]),n}catch(e){throw a(e.message),e}finally{r(!1)}},updateOfferte:async(e,n)=>{r(!0),a(null);try{let r=await W.update(e,n);return t(t=>t.map(t=>t.id===e?r:t)),r}catch(e){throw a(e.message),e}finally{r(!1)}},deleteOfferte:async e=>{r(!0),a(null);try{await W.delete(e),t(t=>t.filter(t=>t.id!==e))}catch(e){throw a(e.message),e}finally{r(!1)}}}},Zl=()=>{let[e,t]=(0,v.useState)([]),[n,r]=(0,v.useState)(!0),[i,a]=(0,v.useState)(null),o=(0,v.useCallback)(async()=>{try{r(!0),a(null);let e=await Cl.getAll();t(Array.isArray(e)?e:[])}catch(e){console.error(`Fehler beim Laden der Rechnungen:`,e),a(e.message||`Fehler beim Laden der Rechnungen`),t([])}finally{r(!1)}},[]);(0,v.useEffect)(()=>{o()},[o]);let s=(0,v.useCallback)(()=>o(),[o]);return{rechnungen:e,loading:n,error:i,refreshRechnungen:s}},K=Hn`
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
    font-family: ${M.fonts.mono};
    background: ${M.colors.bgPrimary};
    color: ${M.colors.textPrimary};
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
    background: ${M.colors.bgTertiary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${M.colors.borderColor};
    border-radius: ${M.borderRadius.base};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${M.colors.accentBlue};
  }

  /* Firefox Scrollbar */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${M.colors.borderColor} ${M.colors.bgTertiary};
  }

  /* Mobile Touch Optimizations & Desktop Refinements */
  @media (max-width: 768px) {
    /* Input field enhancements only - Buttons werden durch styled-components gesteuert */
    input:not([type="button"]):not([type="submit"]):not([type="reset"]), 
    textarea, 
    select {
      min-height: 40px;
      padding: 10px 14px;
      font-size: 15px;
      margin: 6px 0;
      border: 2px solid #333;
      background: #1a1a1a;
      color: #ffffff;
      border-radius: 6px;
      box-sizing: border-box;
    }
    
    input:not([type="button"]):not([type="submit"]):not([type="reset"]):focus, 
    textarea:focus, 
    select:focus {
      border-color: #4a9eff;
      outline: none;
      box-shadow: 0 0 0 2px rgba(74, 158, 255, 0.3);
    }
    
    /* Table cell padding for mobile */
    td, th {
      padding: 10px 8px;
      min-height: auto;
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
`;function q(){let[e,t]=(0,v.useState)(`startup`),[n,r]=(0,v.useState)(0),[i,a]=(0,v.useState)(`System bereit - F-Tasten für Navigation`),[o,s]=(0,v.useState)(window.innerWidth<=768);v.useEffect(()=>{let e=()=>{s(window.innerWidth<=768)};return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let{kunden:c,loading:l,error:u,refreshKunden:d}=Yl(),{offerten:f,loading:p,error:m,refreshOfferten:h}=Xl(),{rechnungen:g,loading:_,error:y,refreshRechnungen:b}=Zl(),[x,S]=(0,v.useState)(!1),[C,w]=(0,v.useState)(!1),[ee,te]=(0,v.useState)(!1),[ne,T]=(0,v.useState)(!1),[re,ie]=(0,v.useState)(!1),[ae,oe]=(0,v.useState)(null),[se,ce]=(0,v.useState)(null),[le,E]=(0,v.useState)(null),[D,O]=(0,v.useState)(!1),[k,ue]=(0,v.useState)(`alle`),[de,fe]=(0,v.useState)(`alle`),A=v.useMemo(()=>!f||f.length===0?[]:k===`alle`?f:f.filter(e=>e.status===k),[f,k]),pe=v.useMemo(()=>!g||g.length===0?[]:de===`alle`?g:g.filter(e=>e.status===de),[g,de]);v.useEffect(()=>{r(0)},[k,de]);let me=e=>{switch(e){case`help`:a(`F1 = Hilfe anzeigen`);break;case`customers`:t(`customers`),a(`Kunden (${Array.isArray(c)?c.length:0}) - ↑↓ Navigation, Enter=Bearbeiten, F2=Neu`);break;case`offers`:t(`offers`),a(`Offerten (${Array.isArray(f)?f.length:0}) - ↑↓ Navigation, Enter=Bearbeiten, F3=Neu, S=Status, R=→Rechnung`);break;case`invoices`:t(`invoices`),a(`Rechnungen (${Array.isArray(g)?g.length:0}) - ↑↓ Navigation, Enter=Bearbeiten, F4=Neu, P=PDF`);break;case`firma`:t(`firma`),a(`Firmenprofil - F9 zum Bearbeiten`);break;case`refresh`:a(`Daten werden aktualisiert...`),d(),h(),setTimeout(()=>{a(`Daten erfolgreich aktualisiert`)},1e3);break;case`startup`:t(`startup`),r(0),a(`Zurück zum Hauptmenü - F-Tasten für Navigation`);break;default:console.log(`Unbekannte F-Key Aktion:`,e)}},he=t=>{let r;e===`customers`?r=c:e===`offers`?r=A:e===`invoices`&&(r=pe);let i=r&&r[n];switch(t){case`new`:e===`customers`?(oe(null),S(!0),a(`Neuen Kunden erstellen...`)):e===`offers`?(ce(null),w(!0),a(`Neue Offerte erstellen...`)):e===`invoices`&&(E(null),te(!0),a(`Neue Rechnung erstellen...`));break;case`edit`:i&&(e===`customers`?(oe(i),S(!0),a(`Kunde ${i.firma||i.name} bearbeiten...`)):e===`offers`?(ce(i),w(!0),a(`Offerte ${i.nummer} bearbeiten...`)):e===`invoices`&&(E(i),te(!0),a(`Rechnung ${i.nummer} bearbeiten...`)));break;case`open`:i&&(e===`customers`?(oe(i),S(!0),a(`Kunde-Details: ${i.firma||i.name}`)):e===`offers`?(ce(i),T(!0),a(`Positionen für Offerte ${i.nummer}`)):e===`invoices`&&(E(i),T(!0),a(`Positionen für Rechnung ${i.nummer}`)));break;case`delete`:let n=`Element`;e===`customers`?n=`Kunde`:e===`offers`?n=`Offerte`:e===`invoices`&&(n=`Rechnung`),i&&confirm(`${n} wirklich löschen?`)&&ge(i);break;case`pdf`:e===`offers`&&i?_e(i):e===`invoices`&&i&&ye(i);break;case`status`:e===`offers`&&i?(ie(!0),a(`Offerten-Status ändern...`)):e===`invoices`&&i&&(ie(!0),a(`Rechnungs-Status ändern...`));break;case`toInvoice`:e===`offers`&&i&&i.status===`angenommen`&&ve(i);break;default:console.log(`Unbekannte Context-Aktion:`,t)}},ge=async t=>{try{if(e===`customers`?(await Jl.delete(t.id),await d(),a(`Kunde erfolgreich gelöscht`)):e===`offers`?(await W.delete(t.id),await h(),a(`Offerte erfolgreich gelöscht`)):e===`invoices`&&(await Cl.delete(t.id),await b(),a(`Rechnung erfolgreich gelöscht`)),n>=0){let t=e===`customers`?c:e===`offers`?f:e===`invoices`?g:[];n>=t.length-1&&r(Math.max(0,t.length-2))}}catch(e){console.error(`Fehler beim Löschen:`,e),a(`Fehler beim Löschen: `+e.message)}},_e=async e=>{try{a(`PDF-Export für Offerte ${e.nummer} wird erstellt...`),O(!0),(await W.exportToPdf(e.id)).success?a(`PDF-Export für Offerte ${e.nummer} erfolgreich heruntergeladen`):a(`PDF-Export fehlgeschlagen`)}catch(e){console.error(`Fehler beim PDF-Export:`,e),a(`Fehler beim PDF-Export: `+(e.response?.data?.message||e.message))}finally{O(!1)}},ve=async e=>{try{a(`Erstelle Rechnung aus Offerte ${e.nummer}...`),O(!0);let n=await Cl.createFromOfferte(e.id);n?(await b(),a(`✅ Rechnung ${n.nummer} erfolgreich erstellt aus Offerte ${e.nummer}`),setTimeout(()=>{t(`invoices`),a(`Rechnungen (${Array.isArray(g)?g.length+1:1}) - Neue Rechnung ${n.nummer} erstellt`)},2e3)):a(`Fehler beim Erstellen der Rechnung`)}catch(e){console.error(`Fehler beim Erstellen der Rechnung:`,e),a(`Fehler: `+(e.response?.data?.message||e.message))}finally{O(!1)}},ye=async e=>{try{a(`PDF-Export für Rechnung ${e.nummer} wird erstellt...`),O(!0),(await Cl.exportToPdf(e.id)).success?a(`PDF-Export für Rechnung ${e.nummer} erfolgreich heruntergeladen`):a(`PDF-Export fehlgeschlagen`)}catch(e){console.error(`Fehler beim PDF-Export:`,e),a(`Fehler beim PDF-Export: `+(e.response?.data?.message||e.message))}finally{O(!1)}},be=t=>{if(x||C||ne||re||e!==`customers`&&e!==`offers`&&e!==`invoices`)return;let i;if(e===`customers`?i=c:e===`offers`?i=A:e===`invoices`&&(i=pe),!(!i||i.length===0))switch(t.key){case`ArrowUp`:t.preventDefault(),r(e=>Math.max(0,e-1));break;case`ArrowDown`:t.preventDefault(),r(e=>Math.min(i.length-1,e+1));break;case`Enter`:t.preventDefault(),he(`open`);break;case`n`:case`N`:t.preventDefault(),he(`new`);break;case`e`:case`E`:t.preventDefault(),he(`edit`);break;case`d`:case`D`:t.preventDefault(),he(`delete`);break;case`p`:case`P`:(e===`offers`||e===`invoices`)&&(t.preventDefault(),he(`pdf`));break;case`s`:case`S`:(e===`offers`&&f&&f.length>0||e===`invoices`&&g&&g.length>0)&&(t.preventDefault(),ie(!0));break;case`r`:case`R`:if(e===`offers`&&A&&A.length>0){t.preventDefault();let e=A[n];e&&e.status===`angenommen`?ve(e):a(`Nur angenommene Offerten können in Rechnungen umgewandelt werden`)}break;default:break}};v.useEffect(()=>(document.addEventListener(`keydown`,be),()=>document.removeEventListener(`keydown`,be)),[e,n,c,A,x,C,ne,re]);let xe=t=>{r(t),o&&setTimeout(()=>{e===`customers`&&c[t]?Se(c[t],t):e===`offers`&&A[t]?Ce(A[t],t):e===`invoices`&&pe[t]&&we(pe[t],t)},100)},Se=(e,t)=>{oe(e),S(!0)},Ce=(e,t)=>{ce(e),w(!0)},we=(e,t)=>{E(e),T(!0)},Te=()=>{S(!1),oe(null)},Ee=()=>{w(!1),ce(null)},De=()=>{te(!1),E(null)},Oe=()=>{T(!1)},ke=async t=>{O(!0);try{if(e===`offers`){if(!f||f.length===0)return;let e=f[n];if(!e)return;await W.update(e.id,{...e,status:t}),await h(),a(`Offerten-Status geändert zu: ${t}`)}else if(e===`invoices`){if(!g||g.length===0)return;let e=g[n];if(!e)return;await Cl.update(e.id,{...e,status:t}),await b(),a(`Rechnungs-Status geändert zu: ${t}`)}ie(!1)}catch(e){console.error(`Fehler beim Ändern des Status:`,e),a(`Fehler beim Ändern des Status`)}finally{O(!1)}},Ae=()=>{ie(!1)};return(0,N.jsxs)(Nn,{theme:M,children:[(0,N.jsx)(K,{}),(0,N.jsxs)(Kn,{children:[(0,N.jsx)(Xn,{}),(0,N.jsx)(Qn,{children:(()=>{switch(e){case`startup`:return(0,N.jsx)(Ar,{stats:{kunden:Array.isArray(c)?c.length:0,offerten:Array.isArray(f)?f.length:0,rechnungen:0,status:`System bereit`}});case`customers`:return(0,N.jsx)(Jr,{kunden:c,selectedIndex:n,onRowClick:xe,onDoubleClick:Se});case`offers`:return(0,N.jsx)(ti,{offerten:A,allOfferten:f,selectedIndex:n,onRowClick:xe,onDoubleClick:Ce,statusFilter:k,onStatusFilterChange:ue});case`invoices`:return(0,N.jsx)(ri,{rechnungen:pe,allRechnungen:g,selectedIndex:n,onRowClick:xe,onDoubleClick:we,statusFilter:de,onStatusFilterChange:fe});case`firma`:return(0,N.jsx)(lc,{});default:return(0,N.jsx)(Ar,{})}})()}),(e===`customers`||e===`offers`||e===`invoices`)&&(0,N.jsx)(mr,{currentScreen:e,selectedIndex:n,data:e===`customers`?c:e===`offers`?A:e===`invoices`?pe:[],onAction:he,showPdfExport:e===`offers`||e===`invoices`}),(e===`customers`||e===`offers`||e===`invoices`)&&(0,N.jsx)(gr,{onClick:()=>he(`new`),icon:`+`}),(0,N.jsx)(lr,{currentScreen:e,onFKeyPress:me,statusMessage:i})]}),(0,N.jsx)(Tc,{isOpen:x,onClose:Te,kunde:ae,onSave:async e=>{O(!0);try{ae?await Jl.update(ae.id,e):await Jl.create(e),await d(),Te()}catch(e){console.error(`Fehler beim Speichern des Kunden:`,e),alert(`Fehler beim Speichern des Kunden: `+e.message)}finally{O(!1)}},loading:D}),(0,N.jsx)(Hc,{isOpen:C,onClose:Ee,offerte:se,kunden:c,onSave:async e=>{O(!0);try{se?await W.update(se.id,e):await W.create(e),await h(),Ee()}catch(e){console.error(`Fehler beim Speichern der Offerte:`,e),alert(`Fehler beim Speichern der Offerte: `+(e.message||e.toString()))}finally{O(!1)}},onPositionenEdit:e=>{ce(e),T(!0)},loading:D}),(0,N.jsx)(el,{isOpen:ee,onClose:De,rechnung:le,kunden:c,onSave:async e=>{O(!0);try{le?await Cl.update(le.id,e):await Cl.create(e),await b(),De()}catch(e){console.error(`Fehler beim Speichern der Rechnung:`,e),alert(`Fehler beim Speichern der Rechnung: `+(e.message||e.toString()))}finally{O(!1)}},onPositionenEdit:e=>{E(e),T(!0)},loading:D}),(0,N.jsx)(zl,{isOpen:ne,onClose:Oe,offerte:se||le,onSave:async e=>{O(!0);try{console.log(`Positionen speichern:`,e),await h(),a(`Positionen erfolgreich gespeichert`)}catch(e){console.error(`Fehler beim Speichern der Positionen:`,e),alert(`Fehler beim Speichern der Positionen: `+e.message)}finally{O(!1)}},onEditEntity:e=>{e.faelligkeitsdatum||e.qrReferenz||e.nummer?.startsWith(`REC-`)?(E(e),te(!0)):(ce(e),w(!0))},loading:D}),re&&e===`offers`&&f&&f.length>0&&(0,N.jsx)(ql,{currentStatus:f[n]?.status||`entwurf`,onStatusChange:ke,onClose:Ae,entityType:`offers`}),re&&e===`invoices`&&g&&g.length>0&&(0,N.jsx)(ql,{currentStatus:g[n]?.status||`entwurf`,onStatusChange:ke,onClose:Ae,entityType:`invoices`})]})}var J=q;(0,_.createRoot)(document.getElementById(`root`)).render((0,N.jsx)(v.StrictMode,{children:(0,N.jsx)(J,{})}));