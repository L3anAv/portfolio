function Uf(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function bs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Gs={exports:{}},ei={},Ys={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vr=Symbol.for("react.element"),$f=Symbol.for("react.portal"),Qf=Symbol.for("react.fragment"),Hf=Symbol.for("react.strict_mode"),Wf=Symbol.for("react.profiler"),bf=Symbol.for("react.provider"),Gf=Symbol.for("react.context"),Yf=Symbol.for("react.forward_ref"),Xf=Symbol.for("react.suspense"),Jf=Symbol.for("react.memo"),Kf=Symbol.for("react.lazy"),pu=Symbol.iterator;function Zf(e){return e===null||typeof e!="object"?null:(e=pu&&e[pu]||e["@@iterator"],typeof e=="function"?e:null)}var Xs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Js=Object.assign,Ks={};function Wn(e,t,n){this.props=e,this.context=t,this.refs=Ks,this.updater=n||Xs}Wn.prototype.isReactComponent={};Wn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Wn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zs(){}Zs.prototype=Wn.prototype;function ua(e,t,n){this.props=e,this.context=t,this.refs=Ks,this.updater=n||Xs}var sa=ua.prototype=new Zs;sa.constructor=ua;Js(sa,Wn.prototype);sa.isPureReactComponent=!0;var hu=Array.isArray,qs=Object.prototype.hasOwnProperty,ca={current:null},ec={key:!0,ref:!0,__self:!0,__source:!0};function tc(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)qs.call(t,r)&&!ec.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+2];o.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Vr,type:e,key:i,ref:l,props:o,_owner:ca.current}}function qf(e,t){return{$$typeof:Vr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function da(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vr}function ep(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var mu=/\/+/g;function zi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ep(""+e.key):t.toString(36)}function po(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Vr:case $f:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+zi(l,0):r,hu(o)?(n="",e!=null&&(n=e.replace(mu,"$&/")+"/"),po(o,t,n,"",function(s){return s})):o!=null&&(da(o)&&(o=qf(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(mu,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",hu(e))for(var a=0;a<e.length;a++){i=e[a];var u=r+zi(i,a);l+=po(i,t,n,u,o)}else if(u=Zf(e),typeof u=="function")for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=r+zi(i,a++),l+=po(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Gr(e,t,n){if(e==null)return e;var r=[],o=0;return po(e,r,"","",function(i){return t.call(n,i,o++)}),r}function tp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var _e={current:null},ho={transition:null},np={ReactCurrentDispatcher:_e,ReactCurrentBatchConfig:ho,ReactCurrentOwner:ca};function nc(){throw Error("act(...) is not supported in production builds of React.")}Q.Children={map:Gr,forEach:function(e,t,n){Gr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Gr(e,function(){t++}),t},toArray:function(e){return Gr(e,function(t){return t})||[]},only:function(e){if(!da(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=Wn;Q.Fragment=Qf;Q.Profiler=Wf;Q.PureComponent=ua;Q.StrictMode=Hf;Q.Suspense=Xf;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=np;Q.act=nc;Q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Js({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=ca.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)qs.call(t,u)&&!ec.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var s=0;s<u;s++)a[s]=arguments[s+2];r.children=a}return{$$typeof:Vr,type:e.type,key:o,ref:i,props:r,_owner:l}};Q.createContext=function(e){return e={$$typeof:Gf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:bf,_context:e},e.Consumer=e};Q.createElement=tc;Q.createFactory=function(e){var t=tc.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:Yf,render:e}};Q.isValidElement=da;Q.lazy=function(e){return{$$typeof:Kf,_payload:{_status:-1,_result:e},_init:tp}};Q.memo=function(e,t){return{$$typeof:Jf,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=ho.transition;ho.transition={};try{e()}finally{ho.transition=t}};Q.unstable_act=nc;Q.useCallback=function(e,t){return _e.current.useCallback(e,t)};Q.useContext=function(e){return _e.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return _e.current.useDeferredValue(e)};Q.useEffect=function(e,t){return _e.current.useEffect(e,t)};Q.useId=function(){return _e.current.useId()};Q.useImperativeHandle=function(e,t,n){return _e.current.useImperativeHandle(e,t,n)};Q.useInsertionEffect=function(e,t){return _e.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return _e.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return _e.current.useMemo(e,t)};Q.useReducer=function(e,t,n){return _e.current.useReducer(e,t,n)};Q.useRef=function(e){return _e.current.useRef(e)};Q.useState=function(e){return _e.current.useState(e)};Q.useSyncExternalStore=function(e,t,n){return _e.current.useSyncExternalStore(e,t,n)};Q.useTransition=function(){return _e.current.useTransition()};Q.version="18.3.1";Ys.exports=Q;var T=Ys.exports;const bn=bs(T),rp=Uf({__proto__:null,default:bn},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var op=T,ip=Symbol.for("react.element"),lp=Symbol.for("react.fragment"),ap=Object.prototype.hasOwnProperty,up=op.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sp={key:!0,ref:!0,__self:!0,__source:!0};function rc(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)ap.call(t,r)&&!sp.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:ip,type:e,key:i,ref:l,props:o,_owner:up.current}}ei.Fragment=lp;ei.jsx=rc;ei.jsxs=rc;Gs.exports=ei;var fa=Gs.exports;const Ge=fa.Fragment,d=fa.jsx,z=fa.jsxs;var oc={exports:{}},Z={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ye=typeof Symbol=="function"&&Symbol.for,pa=ye?Symbol.for("react.element"):60103,ha=ye?Symbol.for("react.portal"):60106,ti=ye?Symbol.for("react.fragment"):60107,ni=ye?Symbol.for("react.strict_mode"):60108,ri=ye?Symbol.for("react.profiler"):60114,oi=ye?Symbol.for("react.provider"):60109,ii=ye?Symbol.for("react.context"):60110,ma=ye?Symbol.for("react.async_mode"):60111,li=ye?Symbol.for("react.concurrent_mode"):60111,ai=ye?Symbol.for("react.forward_ref"):60112,ui=ye?Symbol.for("react.suspense"):60113,cp=ye?Symbol.for("react.suspense_list"):60120,si=ye?Symbol.for("react.memo"):60115,ci=ye?Symbol.for("react.lazy"):60116,dp=ye?Symbol.for("react.block"):60121,fp=ye?Symbol.for("react.fundamental"):60117,pp=ye?Symbol.for("react.responder"):60118,hp=ye?Symbol.for("react.scope"):60119;function Je(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case pa:switch(e=e.type,e){case ma:case li:case ti:case ri:case ni:case ui:return e;default:switch(e=e&&e.$$typeof,e){case ii:case ai:case ci:case si:case oi:return e;default:return t}}case ha:return t}}}function ic(e){return Je(e)===li}Z.AsyncMode=ma;Z.ConcurrentMode=li;Z.ContextConsumer=ii;Z.ContextProvider=oi;Z.Element=pa;Z.ForwardRef=ai;Z.Fragment=ti;Z.Lazy=ci;Z.Memo=si;Z.Portal=ha;Z.Profiler=ri;Z.StrictMode=ni;Z.Suspense=ui;Z.isAsyncMode=function(e){return ic(e)||Je(e)===ma};Z.isConcurrentMode=ic;Z.isContextConsumer=function(e){return Je(e)===ii};Z.isContextProvider=function(e){return Je(e)===oi};Z.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===pa};Z.isForwardRef=function(e){return Je(e)===ai};Z.isFragment=function(e){return Je(e)===ti};Z.isLazy=function(e){return Je(e)===ci};Z.isMemo=function(e){return Je(e)===si};Z.isPortal=function(e){return Je(e)===ha};Z.isProfiler=function(e){return Je(e)===ri};Z.isStrictMode=function(e){return Je(e)===ni};Z.isSuspense=function(e){return Je(e)===ui};Z.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ti||e===li||e===ri||e===ni||e===ui||e===cp||typeof e=="object"&&e!==null&&(e.$$typeof===ci||e.$$typeof===si||e.$$typeof===oi||e.$$typeof===ii||e.$$typeof===ai||e.$$typeof===fp||e.$$typeof===pp||e.$$typeof===hp||e.$$typeof===dp)};Z.typeOf=Je;oc.exports=Z;var ga=oc.exports;function mp(e){function t(N,R,D,B,v){for(var H=0,P=0,ae=0,Y=0,J,$,xe=0,je=0,G,Ne=G=J=0,X=0,Se=0,Kn=0,ke=0,br=D.length,Zn=br-1,it,U="",se="",Ni="",Ti="",zt;X<br;){if($=D.charCodeAt(X),X===Zn&&P+Y+ae+H!==0&&(P!==0&&($=P===47?10:47),Y=ae=H=0,br++,Zn++),P+Y+ae+H===0){if(X===Zn&&(0<Se&&(U=U.replace(g,"")),0<U.trim().length)){switch($){case 32:case 9:case 59:case 13:case 10:break;default:U+=D.charAt(X)}$=59}switch($){case 123:for(U=U.trim(),J=U.charCodeAt(0),G=1,ke=++X;X<br;){switch($=D.charCodeAt(X)){case 123:G++;break;case 125:G--;break;case 47:switch($=D.charCodeAt(X+1)){case 42:case 47:e:{for(Ne=X+1;Ne<Zn;++Ne)switch(D.charCodeAt(Ne)){case 47:if($===42&&D.charCodeAt(Ne-1)===42&&X+2!==Ne){X=Ne+1;break e}break;case 10:if($===47){X=Ne+1;break e}}X=Ne}}break;case 91:$++;case 40:$++;case 34:case 39:for(;X++<Zn&&D.charCodeAt(X)!==$;);}if(G===0)break;X++}switch(G=D.substring(ke,X),J===0&&(J=(U=U.replace(m,"").trim()).charCodeAt(0)),J){case 64:switch(0<Se&&(U=U.replace(g,"")),$=U.charCodeAt(1),$){case 100:case 109:case 115:case 45:Se=R;break;default:Se=yt}if(G=t(R,Se,G,$,v+1),ke=G.length,0<I&&(Se=n(yt,U,Kn),zt=a(3,G,Se,R,we,fe,ke,$,v,B),U=Se.join(""),zt!==void 0&&(ke=(G=zt.trim()).length)===0&&($=0,G="")),0<ke)switch($){case 115:U=U.replace(O,l);case 100:case 109:case 45:G=U+"{"+G+"}";break;case 107:U=U.replace(c,"$1 $2"),G=U+"{"+G+"}",G=Pe===1||Pe===2&&i("@"+G,3)?"@-webkit-"+G+"@"+G:"@"+G;break;default:G=U+G,B===112&&(G=(se+=G,""))}else G="";break;default:G=t(R,n(R,U,Kn),G,B,v+1)}Ni+=G,G=Kn=Se=Ne=J=0,U="",$=D.charCodeAt(++X);break;case 125:case 59:if(U=(0<Se?U.replace(g,""):U).trim(),1<(ke=U.length))switch(Ne===0&&(J=U.charCodeAt(0),J===45||96<J&&123>J)&&(ke=(U=U.replace(" ",":")).length),0<I&&(zt=a(1,U,R,N,we,fe,se.length,B,v,B))!==void 0&&(ke=(U=zt.trim()).length)===0&&(U="\0\0"),J=U.charCodeAt(0),$=U.charCodeAt(1),J){case 0:break;case 64:if($===105||$===99){Ti+=U+D.charAt(X);break}default:U.charCodeAt(ke-1)!==58&&(se+=o(U,J,$,U.charCodeAt(2)))}Kn=Se=Ne=J=0,U="",$=D.charCodeAt(++X)}}switch($){case 13:case 10:P===47?P=0:1+J===0&&B!==107&&0<U.length&&(Se=1,U+="\0"),0<I*j&&a(0,U,R,N,we,fe,se.length,B,v,B),fe=1,we++;break;case 59:case 125:if(P+Y+ae+H===0){fe++;break}default:switch(fe++,it=D.charAt(X),$){case 9:case 32:if(Y+H+P===0)switch(xe){case 44:case 58:case 9:case 32:it="";break;default:$!==32&&(it=" ")}break;case 0:it="\\0";break;case 12:it="\\f";break;case 11:it="\\v";break;case 38:Y+P+H===0&&(Se=Kn=1,it="\f"+it);break;case 108:if(Y+P+H+He===0&&0<Ne)switch(X-Ne){case 2:xe===112&&D.charCodeAt(X-3)===58&&(He=xe);case 8:je===111&&(He=je)}break;case 58:Y+P+H===0&&(Ne=X);break;case 44:P+ae+Y+H===0&&(Se=1,it+="\r");break;case 34:case 39:P===0&&(Y=Y===$?0:Y===0?$:Y);break;case 91:Y+P+ae===0&&H++;break;case 93:Y+P+ae===0&&H--;break;case 41:Y+P+H===0&&ae--;break;case 40:if(Y+P+H===0){if(J===0)switch(2*xe+3*je){case 533:break;default:J=1}ae++}break;case 64:P+ae+Y+H+Ne+G===0&&(G=1);break;case 42:case 47:if(!(0<Y+H+ae))switch(P){case 0:switch(2*$+3*D.charCodeAt(X+1)){case 235:P=47;break;case 220:ke=X,P=42}break;case 42:$===47&&xe===42&&ke+2!==X&&(D.charCodeAt(ke+2)===33&&(se+=D.substring(ke,X+1)),it="",P=0)}}P===0&&(U+=it)}je=xe,xe=$,X++}if(ke=se.length,0<ke){if(Se=R,0<I&&(zt=a(2,se,Se,N,we,fe,ke,B,v,B),zt!==void 0&&(se=zt).length===0))return Ti+se+Ni;if(se=Se.join(",")+"{"+se+"}",Pe*He!==0){switch(Pe!==2||i(se,2)||(He=0),He){case 111:se=se.replace(y,":-moz-$1")+se;break;case 112:se=se.replace(p,"::-webkit-input-$1")+se.replace(p,"::-moz-$1")+se.replace(p,":-ms-input-$1")+se}He=0}}return Ti+se+Ni}function n(N,R,D){var B=R.trim().split(C);R=B;var v=B.length,H=N.length;switch(H){case 0:case 1:var P=0;for(N=H===0?"":N[0]+" ";P<v;++P)R[P]=r(N,R[P],D).trim();break;default:var ae=P=0;for(R=[];P<v;++P)for(var Y=0;Y<H;++Y)R[ae++]=r(N[Y]+" ",B[P],D).trim()}return R}function r(N,R,D){var B=R.charCodeAt(0);switch(33>B&&(B=(R=R.trim()).charCodeAt(0)),B){case 38:return R.replace(f,"$1"+N.trim());case 58:return N.trim()+R.replace(f,"$1"+N.trim());default:if(0<1*D&&0<R.indexOf("\f"))return R.replace(f,(N.charCodeAt(0)===58?"":"$1")+N.trim())}return N+R}function o(N,R,D,B){var v=N+";",H=2*R+3*D+4*B;if(H===944){N=v.indexOf(":",9)+1;var P=v.substring(N,v.length-1).trim();return P=v.substring(0,N).trim()+P+";",Pe===1||Pe===2&&i(P,1)?"-webkit-"+P+P:P}if(Pe===0||Pe===2&&!i(v,1))return v;switch(H){case 1015:return v.charCodeAt(10)===97?"-webkit-"+v+v:v;case 951:return v.charCodeAt(3)===116?"-webkit-"+v+v:v;case 963:return v.charCodeAt(5)===110?"-webkit-"+v+v:v;case 1009:if(v.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+v+v;case 978:return"-webkit-"+v+"-moz-"+v+v;case 1019:case 983:return"-webkit-"+v+"-moz-"+v+"-ms-"+v+v;case 883:if(v.charCodeAt(8)===45)return"-webkit-"+v+v;if(0<v.indexOf("image-set(",11))return v.replace(me,"$1-webkit-$2")+v;break;case 932:if(v.charCodeAt(4)===45)switch(v.charCodeAt(5)){case 103:return"-webkit-box-"+v.replace("-grow","")+"-webkit-"+v+"-ms-"+v.replace("grow","positive")+v;case 115:return"-webkit-"+v+"-ms-"+v.replace("shrink","negative")+v;case 98:return"-webkit-"+v+"-ms-"+v.replace("basis","preferred-size")+v}return"-webkit-"+v+"-ms-"+v+v;case 964:return"-webkit-"+v+"-ms-flex-"+v+v;case 1023:if(v.charCodeAt(8)!==99)break;return P=v.substring(v.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+P+"-webkit-"+v+"-ms-flex-pack"+P+v;case 1005:return x.test(v)?v.replace(S,":-webkit-")+v.replace(S,":-moz-")+v:v;case 1e3:switch(P=v.substring(13).trim(),R=P.indexOf("-")+1,P.charCodeAt(0)+P.charCodeAt(R)){case 226:P=v.replace(A,"tb");break;case 232:P=v.replace(A,"tb-rl");break;case 220:P=v.replace(A,"lr");break;default:return v}return"-webkit-"+v+"-ms-"+P+v;case 1017:if(v.indexOf("sticky",9)===-1)break;case 975:switch(R=(v=N).length-10,P=(v.charCodeAt(R)===33?v.substring(0,R):v).substring(N.indexOf(":",7)+1).trim(),H=P.charCodeAt(0)+(P.charCodeAt(7)|0)){case 203:if(111>P.charCodeAt(8))break;case 115:v=v.replace(P,"-webkit-"+P)+";"+v;break;case 207:case 102:v=v.replace(P,"-webkit-"+(102<H?"inline-":"")+"box")+";"+v.replace(P,"-webkit-"+P)+";"+v.replace(P,"-ms-"+P+"box")+";"+v}return v+";";case 938:if(v.charCodeAt(5)===45)switch(v.charCodeAt(6)){case 105:return P=v.replace("-items",""),"-webkit-"+v+"-webkit-box-"+P+"-ms-flex-"+P+v;case 115:return"-webkit-"+v+"-ms-flex-item-"+v.replace(L,"")+v;default:return"-webkit-"+v+"-ms-flex-line-pack"+v.replace("align-content","").replace(L,"")+v}break;case 973:case 989:if(v.charCodeAt(3)!==45||v.charCodeAt(4)===122)break;case 931:case 953:if(V.test(N)===!0)return(P=N.substring(N.indexOf(":")+1)).charCodeAt(0)===115?o(N.replace("stretch","fill-available"),R,D,B).replace(":fill-available",":stretch"):v.replace(P,"-webkit-"+P)+v.replace(P,"-moz-"+P.replace("fill-",""))+v;break;case 962:if(v="-webkit-"+v+(v.charCodeAt(5)===102?"-ms-"+v:"")+v,D+B===211&&v.charCodeAt(13)===105&&0<v.indexOf("transform",10))return v.substring(0,v.indexOf(";",27)+1).replace(w,"$1-webkit-$2")+v}return v}function i(N,R){var D=N.indexOf(R===1?":":"{"),B=N.substring(0,R!==3?D:10);return D=N.substring(D+1,N.length-1),F(R!==2?B:B.replace(b,"$1"),D,R)}function l(N,R){var D=o(R,R.charCodeAt(0),R.charCodeAt(1),R.charCodeAt(2));return D!==R+";"?D.replace(_," or ($1)").substring(4):"("+R+")"}function a(N,R,D,B,v,H,P,ae,Y,J){for(var $=0,xe=R,je;$<I;++$)switch(je=Le[$].call(h,N,xe,D,B,v,H,P,ae,Y,J)){case void 0:case!1:case!0:case null:break;default:xe=je}if(xe!==R)return xe}function u(N){switch(N){case void 0:case null:I=Le.length=0;break;default:if(typeof N=="function")Le[I++]=N;else if(typeof N=="object")for(var R=0,D=N.length;R<D;++R)u(N[R]);else j=!!N|0}return u}function s(N){return N=N.prefix,N!==void 0&&(F=null,N?typeof N!="function"?Pe=1:(Pe=2,F=N):Pe=0),s}function h(N,R){var D=N;if(33>D.charCodeAt(0)&&(D=D.trim()),q=D,D=[q],0<I){var B=a(-1,R,D,D,we,fe,0,0,0,0);B!==void 0&&typeof B=="string"&&(R=B)}var v=t(yt,D,R,0,0);return 0<I&&(B=a(-2,v,D,D,we,fe,v.length,0,0,0),B!==void 0&&(v=B)),q="",He=0,fe=we=1,v}var m=/^\0+/g,g=/[\0\r\f]/g,S=/: */g,x=/zoo|gra/,w=/([,: ])(transform)/g,C=/,\r+?/g,f=/([\t\r\n ])*\f?&/g,c=/@(k\w+)\s*(\S*)\s*/,p=/::(place)/g,y=/:(read-only)/g,A=/[svh]\w+-[tblr]{2}/,O=/\(\s*(.*)\s*\)/g,_=/([\s\S]*?);/g,L=/-self|flex-/g,b=/[^]*?(:[rp][el]a[\w-]+)[^]*/,V=/stretch|:\s*\w+\-(?:conte|avail)/,me=/([^-])(image-set\()/,fe=1,we=1,He=0,Pe=1,yt=[],Le=[],I=0,F=null,j=0,q="";return h.use=u,h.set=s,e!==void 0&&s(e),h}var gp={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function vp(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var yp=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,gu=vp(function(e){return yp.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),va=ga,wp={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},xp={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Sp={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},lc={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ya={};ya[va.ForwardRef]=Sp;ya[va.Memo]=lc;function vu(e){return va.isMemo(e)?lc:ya[e.$$typeof]||wp}var kp=Object.defineProperty,Ap=Object.getOwnPropertyNames,yu=Object.getOwnPropertySymbols,Cp=Object.getOwnPropertyDescriptor,Ep=Object.getPrototypeOf,wu=Object.prototype;function ac(e,t,n){if(typeof t!="string"){if(wu){var r=Ep(t);r&&r!==wu&&ac(e,r,n)}var o=Ap(t);yu&&(o=o.concat(yu(t)));for(var i=vu(e),l=vu(t),a=0;a<o.length;++a){var u=o[a];if(!xp[u]&&!(n&&n[u])&&!(l&&l[u])&&!(i&&i[u])){var s=Cp(t,u);try{kp(e,u,s)}catch{}}}}return e}var Ip=ac;const Pp=bs(Ip);function St(){return(St=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var xu=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},ul=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!ga.typeOf(e)},Io=Object.freeze([]),Bt=Object.freeze({});function Sr(e){return typeof e=="function"}function Su(e){return e.displayName||e.name||"Component"}function wa(e){return e&&typeof e.styledComponentId=="string"}var _n=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",xa=typeof window<"u"&&"HTMLElement"in window,Np=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function Ur(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Tp=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,l=i;n>=l;)(l<<=1)<0&&Ur(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(o),this.length=l;for(var a=i;a<l;a++)this.groupSizes[a]=0}for(var u=this.indexOfGroup(n+1),s=0,h=r.length;s<h;s++)this.tag.insertRule(u,r[s])&&(this.groupSizes[n]++,u++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),i=o+r;this.groupSizes[n]=0;for(var l=o;l<i;l++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],i=this.indexOfGroup(n),l=i+o,a=i;a<l;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),mo=new Map,Po=new Map,dr=1,Yr=function(e){if(mo.has(e))return mo.get(e);for(;Po.has(dr);)dr++;var t=dr++;return mo.set(e,t),Po.set(t,e),t},zp=function(e){return Po.get(e)},Rp=function(e,t){t>=dr&&(dr=t+1),mo.set(e,t),Po.set(t,e)},Op="style["+_n+'][data-styled-version="5.3.11"]',Lp=new RegExp("^"+_n+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Dp=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},Mp=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,i=n.length;o<i;o++){var l=n[o].trim();if(l){var a=l.match(Lp);if(a){var u=0|parseInt(a[1],10),s=a[2];u!==0&&(Rp(s,u),Dp(e,s,a[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(l)}}},_p=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},uc=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){for(var u=a.childNodes,s=u.length;s>=0;s--){var h=u[s];if(h&&h.nodeType===1&&h.hasAttribute(_n))return h}}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(_n,"active"),r.setAttribute("data-styled-version","5.3.11");var l=_p();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},Fp=function(){function e(n){var r=this.element=uc(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,l=0,a=i.length;l<a;l++){var u=i[l];if(u.ownerNode===o)return u}Ur(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),jp=function(){function e(n){var r=this.element=uc(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(o,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Bp=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),ku=xa,Vp={isServer:!xa,useCSSOMInjection:!Np},sc=function(){function e(n,r,o){n===void 0&&(n=Bt),r===void 0&&(r={}),this.options=St({},Vp,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&xa&&ku&&(ku=!1,function(i){for(var l=document.querySelectorAll(Op),a=0,u=l.length;a<u;a++){var s=l[a];s&&s.getAttribute(_n)!=="active"&&(Mp(i,s),s.parentNode&&s.parentNode.removeChild(s))}}(this))}e.registerId=function(n){return Yr(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(St({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,i=r.useCSSOMInjection,l=r.target,n=o?new Bp(l):i?new Fp(l):new jp(l),new Tp(n)));var n,r,o,i,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Yr(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(Yr(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Yr(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,i="",l=0;l<o;l++){var a=zp(l);if(a!==void 0){var u=n.names.get(a),s=r.getGroup(l);if(u&&s&&u.size){var h=_n+".g"+l+'[id="'+a+'"]',m="";u!==void 0&&u.forEach(function(g){g.length>0&&(m+=g+",")}),i+=""+s+h+'{content:"'+m+`"}/*!sc*/
`}}}return i}(this)},e}(),Up=/(a)(d)/gi,Au=function(e){return String.fromCharCode(e+(e>25?39:97))};function sl(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Au(t%52)+n;return(Au(t%52)+n).replace(Up,"$1-$2")}var vn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},cc=function(e){return vn(5381,e)};function $p(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Sr(n)&&!wa(n))return!1}return!0}var Qp=cc("5.3.11"),Hp=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&$p(t),this.componentId=n,this.baseHash=vn(Qp,n),this.baseStyle=r,sc.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))i.push(this.staticRulesId);else{var l=Fn(this.rules,t,n,r).join(""),a=sl(vn(this.baseHash,l)>>>0);if(!n.hasNameForId(o,a)){var u=r(l,"."+a,void 0,o);n.insertRules(o,a,u)}i.push(a),this.staticRulesId=a}else{for(var s=this.rules.length,h=vn(this.baseHash,r.hash),m="",g=0;g<s;g++){var S=this.rules[g];if(typeof S=="string")m+=S;else if(S){var x=Fn(S,t,n,r),w=Array.isArray(x)?x.join(""):x;h=vn(h,w+g),m+=w}}if(m){var C=sl(h>>>0);if(!n.hasNameForId(o,C)){var f=r(m,"."+C,void 0,o);n.insertRules(o,C,f)}i.push(C)}}return i.join(" ")},e}(),Wp=/^\s*\/\/.*$/gm,bp=[":","[",".","#"];function Gp(e){var t,n,r,o,i=e===void 0?Bt:e,l=i.options,a=l===void 0?Bt:l,u=i.plugins,s=u===void 0?Io:u,h=new mp(a),m=[],g=function(w){function C(f){if(f)try{w(f+"}")}catch{}}return function(f,c,p,y,A,O,_,L,b,V){switch(f){case 1:if(b===0&&c.charCodeAt(0)===64)return w(c+";"),"";break;case 2:if(L===0)return c+"/*|*/";break;case 3:switch(L){case 102:case 112:return w(p[0]+c),"";default:return c+(V===0?"/*|*/":"")}case-2:c.split("/*|*/}").forEach(C)}}}(function(w){m.push(w)}),S=function(w,C,f){return C===0&&bp.indexOf(f[n.length])!==-1||f.match(o)?w:"."+t};function x(w,C,f,c){c===void 0&&(c="&");var p=w.replace(Wp,""),y=C&&f?f+" "+C+" { "+p+" }":p;return t=c,n=C,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),h(f||!C?"":C,y)}return h.use([].concat(s,[function(w,C,f){w===2&&f.length&&f[0].lastIndexOf(n)>0&&(f[0]=f[0].replace(r,S))},g,function(w){if(w===-2){var C=m;return m=[],C}}])),x.hash=s.length?s.reduce(function(w,C){return C.name||Ur(15),vn(w,C.name)},5381).toString():"",x}var dc=bn.createContext();dc.Consumer;var fc=bn.createContext(),Yp=(fc.Consumer,new sc),cl=Gp();function Xp(){return T.useContext(dc)||Yp}function Jp(){return T.useContext(fc)||cl}var Kp=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=cl);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.toString=function(){return Ur(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=cl),this.name+t.hash},e}(),Zp=/([A-Z])/,qp=/([A-Z])/g,eh=/^ms-/,th=function(e){return"-"+e.toLowerCase()};function Cu(e){return Zp.test(e)?e.replace(qp,th).replace(eh,"-ms-"):e}var Eu=function(e){return e==null||e===!1||e===""};function Fn(e,t,n,r){if(Array.isArray(e)){for(var o,i=[],l=0,a=e.length;l<a;l+=1)(o=Fn(e[l],t,n,r))!==""&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}if(Eu(e))return"";if(wa(e))return"."+e.styledComponentId;if(Sr(e)){if(typeof(s=e)!="function"||s.prototype&&s.prototype.isReactComponent||!t)return e;var u=e(t);return Fn(u,t,n,r)}var s;return e instanceof Kp?n?(e.inject(n,r),e.getName(r)):e:ul(e)?function h(m,g){var S,x,w=[];for(var C in m)m.hasOwnProperty(C)&&!Eu(m[C])&&(Array.isArray(m[C])&&m[C].isCss||Sr(m[C])?w.push(Cu(C)+":",m[C],";"):ul(m[C])?w.push.apply(w,h(m[C],C)):w.push(Cu(C)+": "+(S=C,(x=m[C])==null||typeof x=="boolean"||x===""?"":typeof x!="number"||x===0||S in gp||S.startsWith("--")?String(x).trim():x+"px")+";"));return g?[g+" {"].concat(w,["}"]):w}(e):e.toString()}var Iu=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function nh(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Sr(e)||ul(e)?Iu(Fn(xu(Io,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Iu(Fn(xu(e,n)))}var rh=function(e,t,n){return n===void 0&&(n=Bt),e.theme!==n.theme&&e.theme||t||n.theme},oh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ih=/(^-|-$)/g;function Ri(e){return e.replace(oh,"-").replace(ih,"")}var lh=function(e){return sl(cc(e)>>>0)};function Xr(e){return typeof e=="string"&&!0}var dl=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},ah=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function uh(e,t,n){var r=e[n];dl(t)&&dl(r)?pc(r,t):e[n]=t}function pc(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var l=i[o];if(dl(l))for(var a in l)ah(a)&&uh(e,l[a],a)}return e}var hc=bn.createContext();hc.Consumer;var Oi={};function mc(e,t,n){var r=wa(e),o=!Xr(e),i=t.attrs,l=i===void 0?Io:i,a=t.componentId,u=a===void 0?function(c,p){var y=typeof c!="string"?"sc":Ri(c);Oi[y]=(Oi[y]||0)+1;var A=y+"-"+lh("5.3.11"+y+Oi[y]);return p?p+"-"+A:A}(t.displayName,t.parentComponentId):a,s=t.displayName,h=s===void 0?function(c){return Xr(c)?"styled."+c:"Styled("+Su(c)+")"}(e):s,m=t.displayName&&t.componentId?Ri(t.displayName)+"-"+t.componentId:t.componentId||u,g=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,S=t.shouldForwardProp;r&&e.shouldForwardProp&&(S=t.shouldForwardProp?function(c,p,y){return e.shouldForwardProp(c,p,y)&&t.shouldForwardProp(c,p,y)}:e.shouldForwardProp);var x,w=new Hp(n,m,r?e.componentStyle:void 0),C=w.isStatic&&l.length===0,f=function(c,p){return function(y,A,O,_){var L=y.attrs,b=y.componentStyle,V=y.defaultProps,me=y.foldedComponentIds,fe=y.shouldForwardProp,we=y.styledComponentId,He=y.target,Pe=function(B,v,H){B===void 0&&(B=Bt);var P=St({},v,{theme:B}),ae={};return H.forEach(function(Y){var J,$,xe,je=Y;for(J in Sr(je)&&(je=je(P)),je)P[J]=ae[J]=J==="className"?($=ae[J],xe=je[J],$&&xe?$+" "+xe:$||xe):je[J]}),[P,ae]}(rh(A,T.useContext(hc),V)||Bt,A,L),yt=Pe[0],Le=Pe[1],I=function(B,v,H,P){var ae=Xp(),Y=Jp(),J=v?B.generateAndInjectStyles(Bt,ae,Y):B.generateAndInjectStyles(H,ae,Y);return J}(b,_,yt),F=O,j=Le.$as||A.$as||Le.as||A.as||He,q=Xr(j),N=Le!==A?St({},A,{},Le):A,R={};for(var D in N)D[0]!=="$"&&D!=="as"&&(D==="forwardedAs"?R.as=N[D]:(fe?fe(D,gu,j):!q||gu(D))&&(R[D]=N[D]));return A.style&&Le.style!==A.style&&(R.style=St({},A.style,{},Le.style)),R.className=Array.prototype.concat(me,we,I!==we?I:null,A.className,Le.className).filter(Boolean).join(" "),R.ref=F,T.createElement(j,R)}(x,c,p,C)};return f.displayName=h,(x=bn.forwardRef(f)).attrs=g,x.componentStyle=w,x.displayName=h,x.shouldForwardProp=S,x.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Io,x.styledComponentId=m,x.target=r?e.target:e,x.withComponent=function(c){var p=t.componentId,y=function(O,_){if(O==null)return{};var L,b,V={},me=Object.keys(O);for(b=0;b<me.length;b++)L=me[b],_.indexOf(L)>=0||(V[L]=O[L]);return V}(t,["componentId"]),A=p&&p+"-"+(Xr(c)?c:Ri(Su(c)));return mc(c,St({},y,{attrs:g,componentId:A}),n)},Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(c){this._foldedDefaultProps=r?pc({},e.defaultProps,c):c}}),Object.defineProperty(x,"toString",{value:function(){return"."+x.styledComponentId}}),o&&Pp(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),x}var fl=function(e){return function t(n,r,o){if(o===void 0&&(o=Bt),!ga.isValidElementType(r))return Ur(1,String(r));var i=function(){return n(r,o,nh.apply(void 0,arguments))};return i.withConfig=function(l){return t(n,r,St({},o,{},l))},i.attrs=function(l){return t(n,r,St({},o,{attrs:Array.prototype.concat(o.attrs,l).filter(Boolean)}))},i}(mc,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){fl[e]=fl(e)});const E=fl,gc="#8f8f8f",sh="#FFFFFF",ch="#c0c0c0",dh="#010080",fh="#FFFFFF",vc="/portfolio/assets/sho-0b29f48c.webp",ph=E.div`
    padding:10px;
    grid-row:1;
    color:#ffffff;
    background:#000000;
`,hh=E.div`
    padding:10px;
    display:grid;
    background:#5f97e4;
    grid-column-template:1fr 50% 1fr;
`,mh=E.div`
    display:flex;
    grid-column:2/3;
    flex-direction:column;
    animation:OpacidadEntrada 1s;
`,gh=E.button`
    width:210px;
    height:50px;

    font-family:MonosSpace;
    border-top:3px solid white;
    border-left:4px solid white;
    border-right:5px solid #808080;
    border-bottom:3px solid #808080;

    padding:10px;
    font-size:15px;
    margin-top:20px;

    color:#000;

    cursor: url("/src/assets/cursor/cursor-old.png"), default;
    
    background:${gc};

    :active{
        border-bottom:2px solid white;
        border-right:2px solid white;
        border-left: 2px solid black;
        border-top: 2px solid black;
    }
`,vh=E.img`
    width:200px;
    margin-top:20%;
    margin-bottom:30px;
`;function yh({IrAlDesktop:e}){const[t,n]=T.useState([]),[r,o]=T.useState(!1),[i,l]=T.useState("");function a(){const u=new Date,s=u.toLocaleString("default",{month:"long"}),h=u.getFullYear(),m=u.toLocaleTimeString(),g=`${s} ${h} - ${m}`;console.log(g),l(g)}return T.useEffect(()=>{a()},[]),T.useEffect(()=>{const u=["BIOS: Version 2.4.1","Initializing the operating system...","Loading hardware drivers...","Disk driver: OK","Network driver: OK","Graphics driver: OK","Audio driver: OK","Detecting connected devices...","Hard disk: SATA hard disk found, 500GB","Network: Ethernet connection active","Monitor: Detected screen resolution: 1920x1080","Checking system integrity...","Starting system file verification: OK","Checking boot records: OK","Loading system configuration...","Network configuration: Assigned IP address: 192.168.1.100","Regional settings: Language set: Spanish (Latin America)","Date and time configuration: Current date: "+i,"Starting the operating system...","Welcome to XYZ Operating System","Version: 3.2.1","Please wait while system components are loaded...","Loading graphical user interface...","Control panel: OK","File explorer: OK","Default applications: OK","Ready! The operating system has been successfully loaded."];let s=0;const h=setInterval(()=>{n(m=>[...m,u[s]]),s++,s===u.length&&(o(!0),clearInterval(h))},50);return()=>clearInterval(h)},[i]),r?d(hh,{className:"crt",children:z(mh,{children:[d(vh,{src:vc}),d(gh,{onClick:e,children:"Iniciar Sesion"})]})}):d(Ge,{children:d(ph,{className:"crt",children:t.map((u,s)=>d("div",{className:"line",children:u},s))})})}const yc="data:image/webp;base64,UklGRhoKAABXRUJQVlA4WAoAAAAQAAAARQAARQAAQUxQSIEDAAABoLNt2zFJXtJTxtFj21ZkRbYRrW3bjqY3MsfR2t4d2/ZMs1z1We97B4X+vu+diJgAcjsYiybbde7WtXP7fvPm9EgkO/XtkgwFwiHyea8pq5788OejTaisNR3789MnV03p5avkkAXv7igxhtrzJRR3vLdgSNIv0X53/J6WDTgo51UcTTJhyOnf7+gX9UWvR/9u4Gg1AF5WnTEAdhq84e9He3lXt3prA+SsA9e5KqNh25o6j0a/cByyZMJTpss48eJoLyIzNqpGRobnVt5UN86IuBZddtBysvCl6lgHl0Vdit56BrIOnzIFZ26NuhK99xJSDnzLM7h0b9SF8O0X0OzAxzyDC7eH2xRafpY1M/g7zc4uD7UhOHkfUg58zjN83+RgbSM2WpIN33PJ+mpETR2fkmBCQAbpqY61LD2LLIRUcHZpDb03IgdBC9jYu9r9VzVJFFO7en+V7t+zEoRV2ffdK8RvuVZSxXFK126Jl3X/3i5AYNX+rjsRBadfZaZIjF2dHiTq9HwhzUVCrvB8J6Ixf9oShLbsP8cQzcmCiwVkZxPdb0oQXDbvI3pfbREtr9YTfa1IolnKN0S7VSYa1N1El00Ib14mkhzxHImIcfE4IwK4aBwouxneTLhoNjiRzSE8t4jytnh2juicIZxlnCP6T7VFy6v/EW1XiqJdU7YTvaOlBOMN2jtEtxq6YI5m3EI0qxGOWAoaZxEN+9ositVgfj2MqO6BbJ6JpOWyD9QRBSac46ZIRX52QoCIOn2l5QWyU9qXnYiIIgvPaao4Ke3cokgZtdtiy+IUnS3tqPL6k1ZBlGbr1Hqq2q4eRSaGWkB9u2o0cwdyYrRix0yqMXF7CooIGaRuT9RC/Teouu6/nK5t6E+1j/yB5XS/ZXPsx5HU1sk7WNr0VybFdkyhts/ehbTup0wKu2aTm4t2Ia/7J5fHrkXk7rw/uaX4JWXxP+eR2xO/LiLD/CC3oPj1RHJ/0Fs3LCnnXaNkNbw1iLzsvv43R1clT+wWRXd+W9+dvA1Nee0ozJzuuCUVUiaOvjYlRJ4nVn54yEa+xJ02OJblyI052Ic+XJkkX8bnfXyowYBlAuAVOICT5ziMhkMfz4uTX4PJYXdsPV9QTY4aHaWYP7/1jmHJIPk50W/coqc++NsAwBmgHf/ti+cWj+uXIAHbhUPhWLTXwHahUDwxemhH8hIAVlA4IHIGAADQGwCdASpGAEYAPpFCmkolo6Ihp7VbWLASCWwAvNgFScyWbJ/m+BPQtbw9H+2q8wHmx+i3zcupV9ADpd79A7ZOe49dpIvt5+S4eeAE7rYcP570P+ZnXhJB/+L9s3yH/8PmP+q+AZ+3nsmrxxdRpTQjt3+I9s3QgT4x8To2jcWZaY32LQaxo+yJROIXpPL02GlWsa21BBDA3PMmIdBn1Lfe3OCzDj+63fIvFOnWpcH5Mcn9C8nG8uG86ZB7JQXIff7u4cZAOsmTF7AAurX8JZdP939gkKVuvd2IfGWutcvCLnm4m4/NYcAA/va+X98T/+snExtcekyXVw23892kmdyeiSTcL1OKGO1EWGqCb6s3U6Z/ZbKhxCRGtrWB6pz6e6Pd+gRNBVVbIjtjW5l8uqqRzwRWSqSPAhAX2MUiIuF5JRngP4o9X8csg7mfzONfyynRkJjmPrJvR66/58LkHuuCHnt+zLjPyyMqJAKUee/tWEuwiDQSfYROvRQqQyC7nEk/76t56rJ/B9p2JM+/2Pb1G1HPSGLW7yWm9AJwqZZtOpYE4OyXdy8KxQyayXVjqNJ+xRb7UYBwffblADodQvVs1xWoGLnm+pKweeaDtzjEvFJPjANNFE2zlGUm62W4d3Znf9IKFTXieQkByxXd0tpwTrirHH63OwYWxTHr58Ok9LdTjSAn9/tD6b41/+K/4Qu8xk7TeWeGFGZNmCYDpDW/HPhbqXmEzET5yWcRWWzoJeXOPqfvUS7AkwA+eVtOSD+SDwTmFcp+4T58gKb8fiXGvlDcoL/UP7V3OT97zL2dmX5N/38s4+ebL8TwI4n/fO+jhGFq1b2rYMxdHTQrYu1tE8cuUVE9gAQ6yyHXVxXsT4WfTAA49MVY//ges1lEel2hJLF7HjvZz+yFlshHQJ8qYr/wZxZRyP46biKr8iQwhScI4H7VaO21cS1tMe46OGG/nnUVSxcznRJfdqGOgA9+bo65w9NdV8Vp0gDussvTHllGSHGUPth0BS0zg5TgW47DYBffqADP/PiYJSnGLbBLJ0F1GtUyKQP7sY21/J4xEqO3l9Ssuj+eKbp9/OTd10LlloLRJXJ/wZbVuLj6cKARTxm3GMy0I94yRk5ss/xtzFC/96pmgD9uYsr4Sr/8XliAC8GHCfMiZ+M8T7tNGejnCPSoVebqRONm2fI2unwxuV2USy8chFNbb5JHBp76OJecIRAF5bzn7ZN6Bz7PKzmTXQgoEGLJpMRZSpK05v8cJPHVSVv4wNtLrH2y/f4OOtQ5nRoCYEhBgxJgOlGQOzw4AM0+SuWfy/EyQnkL3DbFh/Hlnm90aTNwn/+bqs3PYuYJ9GQub+CFkRW8YIQxZbNa/+2UndPcu5BkLGHeWIGhN+jWy1NyQpB92RTux+fv5G9jiPR/pjR4qR/LZlf7cqYwAwptwXKf1Z/VsgJlypQKLX/D1SVx+cvFZ0zOOSIgbQLjRHKnZZEbtrHivLicz0r7eEUQ/xwfd2b6OAIsax/Vb8KCPf4jRfGefFJ8l1MoEJQ+k/uV3gkefKmf/x/mn4cpS9EHSRDgc3Uegqz/jfW2RDfgpCpfO1nFpKXRS07EVwp2jZpEJEWt2UtuBCjOMZtqsNg+Qvx/ygmnr8bX11Z9oYlyduVsdg95ukdBlYUGkcBV0NrGWwwNRT7E9BRZ6PqGGX9DAzfO9uLCryzS7UwWN3uVk83ELnfy1W+BNvC/sGJ500NMz9MYKCknkWxhbEYXHd7lMrnh2JwyIkr5Ut+R9GXcZL9ST5v0Jnk3k/Fek9/39ji1/e7db4LvaCR0s9NADPEc5J5fkS6MMiBofFgk6PjxSpTx7kkOAm5PUYyfhSxJr91qeIqGSwt0hcjHBKmqPN99+SNyqSmxi9jR/RErqbOAZqzfZCCVVryjad/Bi0IqFPBOD7QAEXoSPt05SN45rKRUphoPKdNCxsoA3gP+nXv/8IXeYyduIw4Wf03urseJBr3aAFGVMtB8A7nY/8uT8saJ0A2eJ99F0UcCgRhaTNIjwQfEg49YPh4dqXggk5tP3KGleTAisQyahyU6rcOH7Dx0qBei4fAtANcejoUFbzRgFsPL/VaktQBN63kI+NcmTOxy7NUy56ZajsrwDyUaDbOOZuDAdhVrH/fxGUFYB2lm6zKFbpplQswGU/rb/cwRwFsne8YBfLBjs9fgKTwAAAA=",wc=T.createContext(),xc=T.createContext(),Sc=T.createContext(),kc=T.createContext(),Ac=T.createContext(),Cc=T.createContext();function di(){return T.useContext(Sc)}function Gn(){return T.useContext(kc)}function Yn(){return T.useContext(wc)}function wh(){return T.useContext(xc)}function fi(){return T.useContext(Ac)}function Sa(){return T.useContext(Cc)}function xh(e){const[t,n]=T.useState(""),[r,o]=T.useState(),[i,l]=T.useState(!1);function a(h){l(h)}function u(h){o(h)}function s(h){n(h)}return d(Sc.Provider,{value:i,children:d(kc.Provider,{value:a,children:d(wc.Provider,{value:u,children:d(xc.Provider,{value:r,children:d(Ac.Provider,{value:s,children:d(Cc.Provider,{value:t,children:e.children})})})})})})}const Sh=E.div`
  display:flex;
  flex-direction:column;
  position:relative;
`,kh=E.div`
  position:sticky;
  top: 0;
  background:#fff;
`,Ah=E.div`
    width:90%;
    height:30px;
    display:flex;
    margin-top:5px;
    margin-left:4%;
    margin-bottom:5px;
    border:1px solid black;

    p{
        padding:8px;
        margin-left:5%;
        cursor:pointer;
        font-weight:800;
        font-family:MonoSpace;

        :hover{
            text-decoration:underline;
        }
    }


    @media(max-width:1132px){
        font-size:12px;
        height:auto;
     }
`,Ch=E.div`
  
color:#fff;
  height:35px;
  font-family:Linkedin;
  background: linear-gradient(0deg, rgba(44,44,44,1) 0%, rgba(74,74,74,1) 100%);

  p{
    font-size:20px;
    margin-top:5px;
    margin-left:10px;
  }

  span{
    padding:3px;
    border-radius:3px;
    background:#007bb6;
  }
`,Eh=E.div`
  color:#fff;
  height:25px;
  display:flex;
  flex-direction:row;
  background: linear-gradient(0deg, rgba(59,59,59,1) 0%, rgba(17,17,17,1) 100%);

  p:nth-child(2){
    color:#fff;
  }

  p{
    color:#5f97e4;
    margin-top:3px;
    margin-left:15px;
  }
`,Pu=E.div`
    heigth:10px;
    font-family:Zimra;
    padding-top:5px;
    padding-bottom:5px;
    padding-left:10px;
    background:#007bb6;
    margin-left:20px;
    margin-right:20px;
    margin-bottom:10px;
    color:#fff;
    
`,Li=E.p`
  margin-top:8px;
  margin-left:35px;
  margin-right:35px;
  margin-bottom:10px;
  font-family:Zimra;
  text-aling:justify;
  font-size: clamp(0.875rem, 0.7824rem + 0.4938vw, 1.375rem);
`,Ih=E.div`
    
    display:flex;
    margin-bottom:35px;
    flex-direction:row;

    @media(max-width:1132px){
      flex-direction:column;

      div{
        margin-bottom:-10px;
      }
    }
`,Ph=E.div`
    flex-direction:column;

    button a{
      cursor:url("/src/assets/cursor/pointer-old.png");
    }

    button{
      color:#fff;
      padding:8px;
      margin-top:20px;
      margin-left:30px;
      border-radius:5px;
      border:2px solid #4c7396;
      cursor: url("/src/assets/cursor/pointer-old.png"), pointer;
      background: linear-gradient(0deg, rgba(24,58,89,1) 0%, rgba(76,115,150,1) 100%);
    }
`,Nh=E.div`
  
  width:100%;
  padding:20px;
  margin-top:30px;
  margin-left:25px;
  border:2px solid black;
  
  h3{
    color:#183a59;
    margin-bottom:3px;
    font-size: clamp(0.875rem, 0.7824rem + 0.4938vw, 1.375rem);
  }

  p{
    font-size: clamp(0.875rem, 0.7824rem + 0.4938vw, 1.375rem);

    span{
      color:#6b84aa;
      padding-right:10px;
      font-size: clamp(0.875rem, 0.8287rem + 0.2469vw, 1.125rem);
    }
  }

  @media(max-width:1132px){
    width:78%;
    margin-left:12px;
  }
`,Th=E.div`
    
  flex-direction:column;
  justify-content:left;
  margin-left:20px;
  margin-top:30px;

  div{
    
    ul{
      margin-left:8px;
      li{
          color:#6b84aa;
          font-size:18px;
          padding-top:3px;
          padding-left:10px;
          padding-bottom:3px;
          border-bottom:1px solid #a8a8a8;
      }
    }
  }

  @media(max-width:1132px){

    div{
      width:80%;
    }
  }
`,zh=E.div`
  
  margin-top:60px;
  flex-direction:column;

  @media(max-width:1132px){
    margin-top:20px;
  }
`,Rh=E.h1`
  margin-left:20px;
  font-family:Zimra;
  font-weight: 600;
  ffont-size: clamp(0.875rem, 0.5741rem + 1.6049vw, 2.5rem);

  @media(max-width:1132px){
    margin-top:40px;
  }

`,Oh=E.p`
  margin-left:20px;
  font-family:Zimra;
  font-weight: normal;
  overflow-wrap: break-word;
  font-size: clamp(0.875rem, 0.7824rem + 0.4938vw, 1.375rem);
`,Lh=E.img`

    width:100%;
    max-width:200px;

   @media(max-width:1132px){
     display:block;
     margin:auto;
     margin-top:20px;
     width:50%;
     height:30%;
   }

`,Nu=E.div`

  width: calc(100%-30px);
  display:flex;
  margin-left:30px;
  flex-direction:row;

`,Tu=E.span`
  height: 180px; 
  position: relative;

  ::before {
    content: "";
    display: block; 
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%); 
    height: 100%; 
    border-left: 2px solid #0749a5; 
    width: 0;
  }

  @media(max-width:1132px){
     height: 250px;
   }
`,zu=E.span`
    color:#0749a5;
    font-size:15px;
    margin-left:-6.5px;
  
`,Ru=E.div`
    display:flex;
    text-align:left;
    margin-left:10px;
    flex-direction:column;
    
    ol{
      margin-top:8px;
      margin-left:18px;
    }

    li{
      list-style-type: square;
    }

    p{
      font-size: clamp(0.875rem, 0.7824rem + 0.4938vw, 1.375rem);

      :nth-child(1){
        font-size: clamp(0.75rem, 0.7153rem + 0.1852vw, 0.9375rem);
      }

      :nth-child(2){
      
        font-weight: bold;
        font-size: clamp(1rem, 0.9306rem + 0.3704vw, 1.375rem);

        a{
          color:#0749a5;
          font-weight: none;
          text-decoration:underline;
          cursor: url("/src/assets/cursor/pointer-old.png"), pointer;
        }
      }

      :nth-child(3){
       margin-bottom:8px;
       font-size: clamp(0.75rem, 0.7037rem + 0.2469vw, 1rem);
      }

      :nth-child(4){
       font-size: clamp(0.75rem, 0.6574rem + 0.4938vw, 1.25rem);
      }
    }

  @media(max-width:1132px){
     ol{
      margin-bottom:10px;
     }

      p{
        :nth-child(2){
          margin-left:10px;
          margin-bottom:8px;
        }
      }
   }
`;function Dh(){return z(Sh,{children:[d(kh,{children:d(Ah,{children:d("p",{children:"https://sobremi.com/@LeandroAvila"})})}),d(Ch,{children:z("p",{children:["Sobre ",d("span",{children:"MI"})]})}),z(Eh,{children:[d("p",{children:"Inicio"}),d("p",{children:"Perfil"})]}),z(Ih,{children:[z(Th,{children:[d(Lh,{src:vc}),d("div",{children:z("ul",{children:[d("li",{children:d("a",{href:"https://www.linkedin.com/in/l3anav/",children:"Ir a Linkedin"})}),d("li",{children:d("a",{href:"https://github.com/l3anav",children:"Ir a GitHub"})}),d("li",{children:d("a",{href:"mailto:leandroav.dev@gmail.com",children:"Enviar un Correo"})})]})})]}),z(Ph,{children:[z(zh,{children:[d(Rh,{children:"Matias Leandro Avila"}),d(Oh,{children:"Desarrollador Frontend"})]}),z(Nh,{children:[d("h3",{children:"Educación"}),z("p",{children:[d("span",{children:"Cursando"})," Técnico universitario en Informática"]}),z("p",{children:[d("span",{children:"Institución"})," Universidad Nacional General Sarmiento"]})]}),d("button",{children:d("a",{href:"https://drive.google.com/uc?export=download&id=15cS3zd0s_XIpxc8FL853pT2BFvu0a8y9",children:"Curriculum Vitae"})})]})]}),d(Pu,{children:"Sobre Mi"}),d(Li,{children:"✨ ¡Hola! 👋🏽👋🏽 Soy Matias Avila, un estudiante de sistemas apasionado por el desarrollo frontend, actualmente me encuentro en la búsqueda de oportunidades laborales en el área. He aprendido HTML, CSS, Js y por útilmo ReactJs."}),d(Li,{children:"🚀 Soy una persona curiosa y apasionada por la resolución de problemas. Cuando me enfrento a un desafío, no me gusta quedarme sin respuestas. Me impulsa el deseo de adquirir nuevos conocimientos y habilidades para superar obstáculos y mejorar continuamente."}),d(Li,{children:"✉ No dudes en contactarme si deseas saber más sobre mi experiencia o si estás interesado en discutir oportunidades de colaboración. Estoy emocionado por las posibilidades que el mundo del desarrollo tiene para ofrecerme."}),d(Pu,{children:"Experiencia"}),z(Nu,{children:[d(Tu,{}),d(zu,{children:"⬤"}),z(Ru,{children:[d("p",{children:"mayo 2024 - Actualidad"}),z("p",{children:["Desarollador Frontend Colaborador | ",d("a",{href:"https://goldendoglinux.org/",target:"_blanck",children:"Web"})]}),d("p",{children:"GoldenDog Linux (Proyecto Open Source) \\ Tecnología usada: Jekyll"}),d("p",{children:"Tareas Realizadas:"}),z("ol",{children:[d("li",{children:"Añadir una sección de documentación."}),d("li",{children:"Corrección de errores varios, y reestructuración."}),d("li",{children:"Añadir imágenes de proyectos con los cuales se colabora en el footer de la web."})]})]})]}),z(Nu,{children:[d(Tu,{}),d(zu,{children:"⬤"}),z(Ru,{children:[d("p",{children:"dic. 2022 - abr. 2023"}),z("p",{children:["Desarollador Frontend Freelance | ",d("a",{href:"https://adcargentina.com/",target:"_blanck",children:"Web"})]}),d("p",{children:"ADC ARGENTINA UNIENDO EMPRESAS SA (Buenos Aires) \\ Tecnología usada: ReactJS"}),d("p",{children:"Tareas Realizadas:"}),z("ol",{children:[d("li",{children:"Desarrollo con ReactJS."}),d("li",{children:"Configuración del dominio."}),d("li",{children:"Diseño de maquetas de UI con Penpot."}),d("li",{children:"Organización de reuniones para extracción de requerimientos, y luego para feedback."})]})]})]})]})}const Mh=E.div`
    
    
    display:flex;
    margin-top:40px;
    margin-left:20px;
    margin-right:20px;
    text-align:center;
    position:relative;
    flex-direction:column;

    p{
      width:100%;
      color:#fff;
      user-select: none;
      background:${e=>e.background};
    }
`,_h=E.img`
    width:${e=>e.width};
    height:${e=>e.height};
    object-fit:cover;
    margin-bottom:8px;
    margin-left:32px;
    margin-right:30px;
    margin-left:${e=>e.marginLeft};
    filter: invert(${e=>e.invert});
`,Ec=({handleDoubleClick:e,imgIcono:t,nombreIcono:n,FuiClikeado:r,darNombre:o,widthImg:i,marginLeftImg:l})=>d(Ge,{children:z(Mh,{onClick:()=>{o(n)},onDoubleClick:e,background:r?"#1e40bc":"#010080",children:[d(_h,{height:i===void 0?"45px":"auto",width:i===void 0?"80px":i,marginLeft:l,src:t,invert:r?"20%":"0%"}),d("p",{children:n})]})}),Fh="/portfolio/assets/webadc-00739be0.webp",jh="/portfolio/assets/spaFlixnet-7c1461c2.webp",Bh="/portfolio/assets/PortafolioV1-00b8cc46.webp",Vh="/portfolio/assets/PortafolioV2-8509c158.webp",Uh="/portfolio/assets/asciidocgenerator-1869fae3.webp",$h="/portfolio/assets/MobileFlixnetV2-b2b4f856.webp",Qh="/portfolio/assets/WebFlixnetV2-2787213c.webp",Hh="/portfolio/assets/MaquetaEstudioArq-c48c63d5.webp",Wh=[Fh,Bh,Vh,Hh,Uh,jh,$h,Qh],ka=["ADC-Maqueta.webp","Portafolio-V1.jpg","Portafolio-V2.jpge","Maqueta-Estudio.jpg","AsciiDoc.png","Spa-Flixnet.png","Flixnet-Mobile.jpg","FlixNet-Web-V2.jpg"];function Ic(e){return Wh[bh(e)]}function bh(e){return ka.indexOf(e)}const Gh=E.div`
    display:grid;
    margin-top:15%;
    margin-left:-5%;
    place-items:center;
`;function No(){return d(Gh,{children:d("span",{className:"loader"})})}const Pc="data:image/webp;base64,UklGRqABAABXRUJQVlA4WAoAAAAQAAAARQAARQAAQUxQSLoAAAABgGRrr4ImK2LGahi5w5R9cFgJK3CnbVJ9qbu7+z9C86acExETQIvAg0EvhFDxQfZ0xQfxt1rfA/nnGk6eRJhZmEVKNsKXVWDzZN2pqjqnd2wi8t8EcHaJ0SoWUmd1TKpsIPZdw8TOQPGxhsnVQPm9Og2ZPypc1SdzFij215hITVD8rA5g73IcNkHJ3wawdbq+papOVe/EBsVuqzh+YmFhYWYpGaHCfa1XIQ8mPte8QJnXuhcoHPDDAkVWUDggwAAAAFAGAJ0BKkYARgA+kUKdSiWjoqGrk5iAsBIJaQAD5DpBP7SAvaMPTeI/W0/n+AEJfeOamQ0rZ81XLqAAAP75WEFf/4NQvmX6tRKWFoSepGWXUuzw5GFXteRNjtuRB96z5w/im6/r/9WHk3lqWzSxGX82n/+MF0dkB73zrGlEZgQ73m9VNRNVUbpst6nJVh4NtPLRxuf5QZ/N5eMnt/nVH/gBLgQmEu8cdv0cn836FKYE9L65HkkTNpTRIIoSaAAAAA==",Yh=E.div`
    width:100%;
    position:relative;

    img{
      z-index:2;
      width:100%;
      object-fit: scale-down;
    }
    
`,Xh=E.img`
    display:flex;
    position:absolute;
    z-index:1;
    top:25px;
    left:5px;
    margin-top:5px;
    margin-left:2%;
    user-select:none;
    cursor:url(src/assets/cursor/pointer-old.png), pointer;
`,Jh=({imagen:e})=>{const t=Yn();fi();function n(){t(d(Nc,{}))}return z(Ge,{children:[d(Xh,{src:Pc,onClick:n}),d(Yh,{children:d("img",{src:e})})]})};function Kh(e){return d(Jh,{imagen:Ic(e)})}const Zh=E.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    flex-wrap:wrap;
    align-items: center;

    @media (max-width:700px){
      flex-direction:column;
    }
`,qh=E(Ec)`
    justify-content: center;
    align-items: flex-end;
`;function em(){const e=fi(),t=Gn(),n=Yn(),[r,o]=T.useState("");T.useEffect(()=>{e("Imagenes")},[]);function i(){t(!0),e(r);const a=Kh(r);n(a)}function l(a){o(a)}return d(Ge,{children:d(Zh,{children:ka.map(a=>d(qh,{handleDoubleClick:i,FuiClikeado:a===r,darNombre:l,nombreIcono:a,imgIcono:Ic(a)}))})})}function Nc(){return d(em,{})}function Tc(e){return Math.floor(Math.random()*e)}const tm="/portfolio/assets/reload-e985c94f.webp",nm=E.div`
    display:flex;
`,rm=E.img`
    height:20px;
    margin-top:10px;
    margin-left:8px;

    :hover{
        cursor:pointer;
    }
`,om=E.div`
    width:90%;
    height:30px;
    display:flex;
    margin-top:5px;
    margin-left:2%;
    background:#fff;
    margin-bottom:5px;
    border:1px solid black;

    p{
        padding:8px;
        margin-left:5%;
        cursor:pointer;
        font-weight:800;
        font-family:MonoSpace;

        :hover{
            text-decoration:underline;
        }
    }


    @media(max-width:1132px){
        font-size:12px;
        height:auto;
     }
`;function im(){const[e,t]=T.useState(!0),[n,r]=T.useState("ID8EUmz2KcU"),[o,i]=T.useState(!1);let l=["ID8EUmz2KcU","ZclzN7R_mmE","ALznpaBWUTo","xgG9wZPnf6k","86vaOUEjWzM","h7MYJghRWt0","g_-jc_wFTC8","ybGOT4d2Hs8","gYWUJzQ1g-Y","XxZhBTK3bDM","LW5kh1rpfYs"];const a=`https://www.youtube.com/watch?v=${n}`,u=`https://www.youtube.com/embed/${n}?autoplay=1&mute=0`;function s(){const S=Tc(l.length);r(l[S])}function h(){setTimeout(()=>{s(),t(!1),i(!0)},500)}T.useEffect(()=>{h()},[]);function m(){i(!1),setTimeout(()=>{h()},300)}function g(){window.open(a,"_blank")}if(e)return d(No,{});if(!e)return z(Ge,{children:[z(nm,{children:[d(rm,{onClick:m,src:tm}),d(om,{children:d("p",{onClick:g,children:a})})]}),o?d("iframe",{width:"100%",height:"90%",src:u}):d(No,{})]})}const lm="data:image/webp;base64,UklGRg4BAABXRUJQVlA4WAoAAAAQAAAALAAANgAAQUxQSCwAAAABDzD/ERFCTWSrEU6wirRIQQJl7vP1aSP6H+JrLZVARsfEeoYERyCjY2J9HVZQOCC8AAAAcAYAnQEqLQA3AD6JNpZHpSMiITqxqACgEQlpAAzgGqIf0fkhC0rvbQlWQEIJjjRvJS5WyzoyUocFqe2AAP766tF+RLe9M3GCK237WH2cVyuMvhjMibpFHYosP3+Hr/9/u8wUGYMDJf1JRtftfb/UYvsEkc6wxD8Np98Jp/26n4yIoLt/P38BGGSc4en7wpSpvlzg1KHALjQBrrcT/qQT/9pZwT1PyE/xyYCXA7baNknyftcwfDfndybJAAA=",am=E.div`
  
  margin-left:8px;

  p{
    width:10%;
    color:#fff;
    margin-top:2px;
    margin-left:12px;
    background:#010080;
  }
`;function um(){const e="",[t,n]=T.useState("");function r(i){n(i)}return z(am,{children:[d(Ec,{darNombre:r,FuiClikeado:e===t,nombreIcono:e,imgIcono:lm,widthImg:"35px",marginLeftImg:"20px",handleDoubleClick:()=>{window.open("https://github.com/L3anAv/frontend-utilidades?tab=readme-ov-file#Indice","_blank")}}),d("p",{children:"Utilidades Varias"})]})}const Ce=["Proyectos","Imagenes","Browser","Articulos"],sm=E.div`
  width:65px;
  height:98px;
  margin:10px;
  padding:10px;
  display:flex;
  aling-content:center;
  flex-direction:column;
  justify-content:center;
`,cm=E.div`
  top:0px;
  margin-left:15%;
  background:${e=>e.background};
  border-radius:${e=>e.borderRadius};
`,dm=E.img`
  user-select: none;
  width:${e=>e.width};
  height:${e=>e.height};
  padding:${e=>e.padding};
  margin-left:${e=>e.marginLeft};
  filter:grayscale(${e=>e.grayscale});
`,fm=E.h3`
  width:135%;
  color:#fff;
  border:1.5px;
  margin-top:5px;
  font-size:11px;
  user-select: none;
  text-align: center;
  letter-spacing: 0.6px;
  font-family:MonosSpace;
  color:${e=>e.color};
  background:${e=>e.background};
`;function tn({src:e,nombreIcono:t,width:n,height:r,decirQuienSoy:o,nombreDelClikeado:i}){const l=Gn(),[a,u]=T.useState(!1);function s(){return i==t?u(!0):u(!1)}T.useEffect(()=>{s()},[i]);function h(){o(t)}return z(sm,{onClick:h,onDoubleClick:m=>{m.stopPropagation(),l(!0)},children:[d(cm,{width:n,height:r,children:d(dm,{src:e,width:n,height:r,grayscale:a?"70%":"0%",padding:t=="Browser"?"1px":"",marginLeft:t=="Browser"?"5px":"2px"})}),d(fm,{color:a?"#000":"#fff",background:a?fh:dh,children:t})]})}const pm="/portfolio/assets/img-2bb3fa0b.webp",Ou="data:image/webp;base64,UklGRiIEAABXRUJQVlA4WAoAAAAQAAAANAAAKgAAQUxQSIcBAAABkGtt2zE7zyjWP7Ft28kRmJXTqUWX0ilT5gBSprZt23Yy/AfvHczs/efdJxARE6AKUT5XA2OK1upYxaoGmEG+IYpFU8Hsn7olADuXzxwbWitxLp85NrTOuXzmcGdJIdGawfvm0tDvYAbvm0tDv4NZ+ccTKRdNGXgHGLx9B7wCDN6+A3ImLedS44zaZbMf1P51vxA+oOZzdihm2egir2yTLGzcfy+ulHjiqnKXV9UVOoj3MMNQgfnKjDRS08uGb7vGJM0o4j2PNCbrDpNmhubtO800OCx7u8khiSZYkXZQ9XYq7CeR8UY4XDJzlx0s2Rd3uZGay09vJ6vDVaXsDVLjqOD8NNt1APdZpC2hO5DWh1VveYtpFXe9HWezZAVvgPScqrez9FQ/bniDxYpZ1l12jWQFd7ZXKV57e8Ge5DlK3vJ06oL751zUPn+vkPb7KyFtrborWFwbCiFgnm7STqNpgvMSagorJSkWj0mxRLLBqVbt2wfpdBB0CIJ0kE4H6Q5tUjHVjKcEAFZQOCB0AgAAcAwAnQEqNQArAD6FNpdHpSMiITf1WqigEIlqAL70X4XK173A8WDJM/QA8sv2QGeT/VW8DFf/9zyp/R+/V9Cs7nBS3Kyu+CtTq8iLpmlQgb7sp7UIZbUbJA5/tCg2jzvUTH43TP7VOLjI0zsAAP7sOQNV5C9fmIKz4DbgzqGVdVIpAl3Y/3QWHElTuywrkoBfRf/PvvBzjZLQ/yM4nwcjCfqu8mCcW/p5my5ivQe/G0i5xE0ncFICphluoEtjVhNfmpMQ9pDk+xmofVHhsmBz2Ua033Se3k1CJ+e/tvz9jwQFeqRkezf/6E0gUcUWXx9GvS/0fFGBciYq/1oluFQjLf97nl22/d3p0F5wzrIXchvexos9L3muKS8u8y+tuupT5jMYIZ5j6eTUHYHEi5q6UR/5Ruip5lImoVcG1I0Ll4ofrvS1UZ1MMeTmUmpyyc+Mc75j9/9joT/HlrJpZ2fMIiNn/hiECp/gr/nL3qjUlkrhK7+m43klMRCinLzeRNJzoPxXGpVEnsBx5GXJ70XKnI/oXV+zsq962CrXG/TMx4eUguvjThBHbpx19GEVt9rYX3U+MNyhnMk9e5qHza2+H0D9Zsb4Hr1ad7O+IzTnQq4Mo0kNsfLeQDiwAs7VF4W06PFHHlxvzawrJV6BVOfXbHgsmVfMsz6DoHCgsf/b01n9LWUQ65XqBcsbvbBMZnifBaT7oUpX8Pion4C7wvrMN/Blx31Pyk67jssfhNlKtrxtvg5FmDsdZVt3KPwREn9vuwuBW/kyKiUo/+GnyZCI1GtCNoNDE1qye8MfntFL1Dd4L8/tel69zua1hnEpb7kGWTAAAA==";function _t(e){if(ka.find(n=>n===e))return`${pm}`;switch(e){case Ce[0]:case Ce[1]:return`${Ou}`;case Ce[2]:case"Sobre Mi":return`${yc}`;case Ce[3]:return`${Ou}`}}const hm=E.div`
    display:flex;
    margin-left:45px;

    @media (max-width:700px){
       margin-left:10px;
      }
`;function mm(){const e=Yn(),[t,n]=T.useState("");function r(o){n(o);const i=kr(o);e(i)}return z(hm,{children:[d(tn,{src:_t("Proyectos"),decirQuienSoy:r,nombreDelClikeado:t,nombreIcono:"Frontend",width:"60px",height:"auto"}),d(tn,{src:_t("Proyectos"),decirQuienSoy:r,nombreDelClikeado:t,nombreIcono:"Backend",width:"60px",height:"auto"}),d(tn,{src:_t("Proyectos"),decirQuienSoy:r,nombreDelClikeado:t,nombreIcono:"Java",width:"60px",height:"auto"})]})}function gm(){const[e,t]=T.useState(!0),[n,r]=T.useState([]);return T.useEffect(()=>{t(!0),fetch("https://api.github.com/users/L3anAv/repos",{method:"GET",headers:{Authorization:"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"}}).then(o=>o.json()).then(o=>r([...o])).then(()=>t(!1))},[]),[n,e]}const vm=E.div`
    display:flex;
    flex-direction:column;
`,ym=E.div`
    width:55%;
    padding:10px;
    background:#fff;
    margin-top:20px;
    margin-left:20%;
    margin-bottom:10px;
    border:1px solid black;
    grid-row:${e=>e.row};
    grid-column:${e=>e.column};

    p{
        color: #454545;
        margin-left:5%;
        font-size:15px;
        margin-top:8px;
        font-family:MonoSpace;
    }

    @media(max-width:1132px){
        width:80%;
        margin-left:5%;
     }
`,wm=E.a`
    padding:2px;
    color: #008080;
    font-size:18px;
    cursor: pointer;
    font-family:MonoSpace;

    span{
        text-decoration: underline;
        overflow-wrap: break-word;
    }

    @media(max-width:1132px){
        border:none;
        font-size:15px;
     }
`,xm=E.a`
    margin-left:5%;
    font-size:22px;
    font-weight:800;
    cursor: pointer;
    user-select: none;
    font-family:MonoSpace;
    color: #087dcd;
    text-decoration: inherit;
`,Sm=E.div`
    display:flex;
    font-size:16px;
    flex-wrap: wrap;
    font-family:MonoSpace;

    p{
        margin-top:8px;
        font-weight:800;
        color:#05188d;
        margin-bottom:8px;
    }

    @media(max-width:1132px){
       flex-direction:column;
    }
`,km=E.div`
    width:10%;
    display:flex;
    margin-top:5px;
    margin-left:2%;
    user-select:none;

    a{
        cursor:pointer;
        margin-left:20px;
        color:${gc};
    }
`;function Di({ClaveTopic:e}){const[t,n]=gm(),r=Yn();function o(){r(kr(Ce[0]))}if(n)return d(No,{});if(!n)return z(vm,{children:[d(km,{children:d("a",{onClick:o,children:d("img",{src:Pc})})}),t.map(i=>{if(i.topics.includes(e)&&i.topics.length>0)return z(ym,{children:[d(xm,{href:i.html_url,children:i.name}),i.homepage!=""?d("p",{children:z(wm,{href:i.homepage,target:"_blank",children:[i.topics.includes("web")?"Web:":"Demo:"," ",d("span",{children:i.homepage})]})}):"",d("p",{children:i.description}),d(Sm,{children:i.topics.map((l,a)=>d("p",{children:l},a))})]},i.id)})]})}function kr(e){switch(e){case Ce[0]:return d(mm,{});case Ce[1]:return d(Nc,{});case Ce[2]:return d(im,{});case Ce[3]:return d(um,{});case"Frontend":return d(Di,{ClaveTopic:"javascript"});case"Backend":return d(Di,{ClaveTopic:"backend"});case"Java":return d(Di,{ClaveTopic:"java"});case"Sobre Mi":return d(Dh,{})}return d(No,{})}const Am=E.nav`
    width:100%;
    color:#000;
    grid-row:2;
    height:42px;
    display:flex;
    font-weight: bold;
    border:3px solid white;
    background:${ch};
    justify-content:space-between;

    @media (max-width:600px){
        grid-row:1;
    }

    @media (max-width:400px){
        width:100%;
    }
`,Cm=E.ul`
    width:60%;
    display:flex;
    position:relative;

    span{
        padding-top:-3px;
        margin-left:10px;
        margin-right:10px;
        border-right:2px solid white;
    }

    li:nth-child(2){
        width:25%;
        padding-left:9%;
    }

    @media(max-width:820px){
        width:90%;
        margin-left:0;
    }

`,zc=E.li`
    
    margin:5px;
    display: flex;
    font-size:12px;
    padding-top:5px;
    padding-left:5px;
    user-select:none;
    padding-right:5px;
    padding-bottom:3px;
    font-family:MonosSpace;
    
    border-top:2px solid white;
    border-left:2px solid white;
    border-right:2px solid #808080;
    border-bottom:2px solid #808080;

     img{
        width:16px;
        height:16px;
        display: block;
        margin-left:-30%;
        margin-right:8px;
    }
        
    :active{
        border-bottom:2px solid white;
        border-right:2px solid white;
        border-left: 2px solid black;
        border-top: 2px solid black;
    }

    @media(max-width:820px){
        margin:6px;
        font-size:10px;
    }

`,Em=E(zc)`
    border-bottom: ${e=>e.ventanaactiva?"2px solid white":"2px solid #808080"};
    border-right: ${e=>e.ventanaactiva?"2px solid white":"2px solid #808080"};
    border-left: ${e=>e.ventanaactiva?"2px solid black":"2px solid white"};
    border-top: ${e=>e.ventanaactiva?"2px solid black":"2px solid white"};
`,Im=E.p`
    font-size:13px;
    margin-top:3px;
    margin-bottom:3px;
    padding:8px;
    font-family:MonosSpace;
    border-left:2px solid white;

    @media(max-width:820px){
        padding:2px;
        font-size:12px;
        margin-left:0;
    }
`;function Pm({consultarSiExiste:e}){const t=di(),n=fi(),r=Gn(),o=Yn(),i=Sa(),[l,a]=T.useState(new Date().toLocaleTimeString());T.useEffect(()=>{const m=setInterval(()=>{a(new Date().toLocaleTimeString())},1e3);return()=>{clearInterval(m)}},[]);function u(){t===!1?(r(!0),n("Sobre Mi"),o(kr("Sobre Mi"))):r(!1)}function s(){h(),e()}function h(){localStorage.setItem("TOKENB","SIINICIO")}return d(Ge,{children:z(Am,{children:[z(Cm,{children:[d("span",{children:d(zc,{onClick:s,children:"Inicio"})}),z(Em,{ventanaactiva:t&&i=="Sobre Mi",onClick:u,children:[d("img",{src:yc}),"Sobre Mi"]})]}),d(Im,{children:l})]})})}const Nm=E.div`
  display:flex;
  flex-direction:column;
  animation:OpacidadEntrada 1.8s;

`;function Tm({nombreDelIcono:e}){const[t,n]=T.useState("");function r(o){n(o),e(t)}return z(Nm,{children:[d(tn,{src:_t(Ce[0]),decirQuienSoy:r,nombreDelClikeado:t,nombreIcono:Ce[0],width:"60px",height:"auto"}),d(tn,{src:_t(Ce[0]),decirQuienSoy:r,nombreDelClikeado:t,nombreIcono:Ce[1],width:"60px",height:"auto"}),d(tn,{src:_t(Ce[0]),decirQuienSoy:r,nombreDelClikeado:t,nombreIcono:Ce[3],width:"60px",height:"auto"}),d(tn,{src:_t(Ce[2]),decirQuienSoy:r,nombreDelClikeado:t,nombreIcono:Ce[2],width:"55px",height:"auto"})]})}const zm=E.div`
    overflow:hidden;
    position:absolute;
    z-index:1;
    outline:3px solid #c9ccc7;
    top:${e=>e.top};
    left:${e=>e.left};
    background:${sh};
    width:${e=>e.width};
    height:${e=>e.height};
    display:${e=>e.display};
    animation:${e=>e.animation};
`,Rm=E.div`
    width:100%;
    height: 88%;
    overflow:${e=>e.overflow};
`,Om=E.div`
    height:32px;
    display:flex;
    justify-content:space-between;
    border-bottom:4px solid black;
    background: linear-gradient(142deg, rgba(5,9,132,1) 0%, rgba(8,125,205,1) 100%);
`,Lm=E.h2`
    color:#fff;
    font-size:18px;
    margin-top:3px;
    margin-left:-6%;
    user-select:none;
    font-family:IBMRegular;
`,Dm=E.div`
    width:42px;
    color:#000;
    font-size:15px;
    padding-top:3px;
    user-select:none;
    text-align:center;
    background:#bdbdbd;
    font-family:MonosSpace;
    border-top:2px solid white;
    border-left:2px solid white;
    border-right:2px solid #1c1c1c;
    border-bottom:2px solid #1c1c1c;

    :active{
        border-bottom:2px solid white;
        border-right:2px solid white;
        border-left: 2px solid black;
        border-top: 2px solid black;
    }
`,Mm=E.img`
    transform:scale(0.5);
`,_m=E.div`
  height: 15px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 99.3%;
  background: #c9ccc7;
  display: flex;
  
  border-top:2px solid #808080;
  border-left:4px solid white;
  border-right:4px solid white;
  border-bottom:4px solid #808080;

`;function Fm({ImgParametro:e}){const t=wh(),n=Sa(),r=di(),o=Gn(),[i,l]=T.useState(!0),[a,u]=T.useState(!1),[s,h]=T.useState(!1);function m(){return h(!s)}function g(){u(!0),setTimeout(()=>{u(!1),o(!1)},100)}return z(zm,{top:s?"0":"55px",left:s?"0":"12%",width:s?"99.9%":"75%",height:s?"99.8%":"75%",display:r?"inline-block":"none",animation:a?"SalidaVentana 0.2s linear":"EntradaVentana 0.1s linear",children:[z(Om,{onDoubleClick:m,children:[d(Mm,{src:e}),d(Lm,{children:n}),d(Dm,{onClick:g,children:"X"})]}),d(Rm,{overflow:i?"auto":"hidden",children:t}),d(_m,{})]})}const jm="/portfolio/assets/background-08963b70.webp",Bm=E.div`
  width:100%;
  display: grid;
  overflow:hidden;
  background:#548cc4;
  grid-template-rows: 1fr 47px;

  background-image:url(${jm});
  background-size: cover;

  @media (max-width:600px){
    grid-template-rows:47px 1fr;
  }
`;function Vm({consultarSiExiste:e}){const t=fi(),n=Sa(),r=di(),o=Gn(),i=Yn();function l(){o(!0),t("Sobre Mi"),i(kr("Sobre Mi"))}T.useEffect(()=>{l()},[]);function a(u){t(u);const s=kr(u);i(s)}return z(Ge,{children:[z(Bm,{className:"crt",children:[d(Pm,{consultarSiExiste:e}),d(Tm,{nombreDelIcono:a})]}),r&&d(Fm,{ImgParametro:_t(n)})]})}function Um(e){const[t,n]=T.useState(!0);function r(){i(),n(!1)}function o(){localStorage.getItem("TOKENA")=="NOINICIO"&&n(!1)}function i(){localStorage.setItem("TOKENA","NOINICIO")}return T.useMemo(()=>o(),[t]),d(Ge,{children:t?d(yh,{IrAlDesktop:r}):d(Vm,{consultarSiExiste:e.consultarSiExiste})})}const $m="data:image/webp;base64,UklGRvgAAABXRUJQVlA4WAoAAAAQAAAAHQAAHQAAQUxQSIkAAAABcBrbtqtc9QGHQqFzBQwVxA5SCTgKwKMYOvgtkArIFgs+J5c5xPvOm/kFRMQEiIc+YaUF9C04ABDgzb6utDR+FliXXyDV8dflQEkZaHaEJNQps5MORlUYNkxgbNA2m6vCIEY0SwYURVBr/0D+47KmP4Kgh74WPIhIBhYrIg8bkCasdh9nqxAPBwBWUDggSAAAABAEAJ0BKh4AHgA+gTSUR6UjIiE3+qgAoBAJaQAAW/opL/qKVKt5ZWwAAP78104Si7Q1UmP+394oM+5N/Yg9wwAhS/2kvRAAAA==",Qm=E.div`
  display: flex;
  flex-direction: column;

  div{
    z-index:2;
  }
`,Hm=E.div`

  display:flex;
  margin-top:15%;
  margin-left:45px;

  div{
    display:flex;
    margin-top:25px;
    margin-right:30px;
    flex-direction:column;
    animation:OpacidadEntrada 1s;
  }
  
  svg{
      opacity:60%;
      cursor:pointer;
      margin-top:12px;
      margin-bottom:12px;
  }

  }

  @media(max-width:1132px){

    div{
      margin-bottom:-60px;
    }
    svg{
      width:28px;
      height:28px;
    }
  }
`,Wm=E.h1`

  width:410px;
  color:#fff;
  margin-top:5px;
  background:#000;
  margin-left:10px;
  padding-left:15px;
  letter-spacing:2px;
  font-family:Quattrocento;
  font-size: clamp(1.25rem, 0.9606rem + 1.5432vw, 2.8125rem);

  ::selection{
    color: #fff;
    background: #383a29;
  }

  @media(max-width:1132px){
    width:60%;
    margin-left:30px;
  }
`,bm=E.div`

  display:flex;
  margin-left:65px;
  flex-direction:row;
  letter-spacing: 1px;

  svg{
    transform:scale(0.8);  
  }

  h2{
    color:#000;
    margin-top:2px;
    margin-left:15px;
    font-family:Zimra;
    font-size: clamp(0.8125rem, 0.7315rem + 0.4321vw, 1.25rem);

    ::selection{
      color: #fff;
      background: #555843;
    }

  }

  @media(max-width:1132px){
    margin-left:30px;
  }
`,Gm=E.span`

  color:#fff;
  padding:10px;
  margin-left:20px;
  font-family:Zimra;
  background:#0033db;
  
  ::selection{
    color: #000;
    background: #fff;
  }

`,Ym=E.p`

  font-size: clamp(2.0625rem, 1.287rem + 4.1358vw, 6.25rem);
  
  span:nth-child(3){
    color:#000;
    background:#feff00;
    font-family:DaysOne;
    outline:5px solid black;
  }

  ::selection{
    color:#fff;
    background:#422e15;
  }

  @media(max-width:1132px){
    margin-top:15px;
  }

`,Lu=E.span`
  margin: 0 5px;
  display: inline-block;
  transform: rotate(15deg);
  animation: girarMano 0.6s 1.3s 4 linear;
`,Rc=E.button`
  width:50%;
  padding:10px;
  color:#000;
  font-family:Zimra;
  margin-top:20px;
  margin-left:42px;
  background:#d4d4d4;
  outline:1px solid black;
  border-top:2px solid white;
  border-left:2px solid white;
  border-right:2px solid #c1c1c1;
  border-bottom:2px solid #c1c1c1;
  cursor:url(src/assets/cursor/pointer-old.png), pointer;
  font-size: clamp(0.875rem, 0.6319rem + 1.2963vw, 2.1875rem);

  :active{
  border-top:2px solid #c1c1c1;
  border-left:2px solid #c1c1c1; 
  border-right:2px solid white;
  border-bottom:2px solid white;
  }

  @media(max-width:1132px){
    width:40%;
    margin-top:15px;
    margin-left:42px;    
  }
`,Mi=E(Rc)`
  width:25%;
  padding:5px;
  color:#4242f1;
  background:none;
  border:none;
  outline:none;
  font-family:default;
  text-decoration:underline;
  margin-bottom:20px;
  font-size: clamp(1.25rem, 1.1343rem + 0.6173vw, 1.875rem);

  a{
    cursor:url(src/assets/cursor/pointer-old.png), pointer;
  }

  :active{
    border:none;
  }

  @media(max-width:1132px){
    margin-left:30px;
  }
`,Xm=E.span`

  color:#000;
  font-family: DaysOne;
  font-size: clamp(2.0625rem, 1.287rem + 4.1358vw, 6.25rem);

  ::selection {
    color: #fff;
    background: #422e15;
  }
`,Jm=E.footer`
  
  position:absolute;
  bottom:0;
  z-index:1;
  width:45%;
  display:flex;
  background:none;
  overflow:hidden;
  background:#6d6d6d;
  flex-direction:column;

    p{
      color:#fff;
      font-size:15px;
      margin-bottom:5px;
      text-align:center;
      font-family:Quattrocento;
    }
    
    @media(max-width:1132px){
      grid-row:3;
      width:100%;
    }
`,Km=E.div`
  
  display:flex;
  flex-direction:row;

  @media(max-width:1132px){
    flex-direction:column;
  }
`,Zm=E.div`
  display: flex;
  flex-wrap: no-wrap;
  background:#dddddd;
`,qm=E.img`
  width: 45px;
  height: 35px;
  margin-bottom:-5px;
`;function e0({consultarSiExiste:e}){const[n,r]=T.useState("o");var o=new Date,i=o.getFullYear(),l=i.toString();T.useEffect(()=>{const s=setInterval(()=>{r(h=>h==="o"?"a":"o")},2200);return()=>clearInterval(s)},[]);function a(){u(),e()}function u(){localStorage.setItem("TOKENB","NOINICIO")}return z(Qm,{children:[z("div",{children:[d(Wm,{children:"//:Leandro Avila"}),z(bm,{children:[z("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"#666c13",children:[d("path",{d:"M20 10C20 14.4183 12 22 12 22C12 22 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z",stroke:"#000"}),d("path",{d:"M12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11Z",fill:"#000",stroke:"#000"})]}),d("h2",{children:" Buenos Aires, Argentina 🇦🇷"})]}),d(Hm,{children:z(Ym,{children:[z(Gm,{children:["Hola ",d(Lu,{children:"🖐🏽"}),d(Lu,{children:"🖐🏽"})]}),d("br",{}),z("span",{children:["Bienvenid",d(Xm,{children:n}),"///"]})]})}),d(Rc,{onClick:a,children:"Conóceme más  ↗"})]}),z(Jm,{children:[d(Zm,{children:[...Array(14)].map((s,h)=>d(qm,{src:$m,alt:"Imagen repetida"},`imagen-${h}`))}),z(Km,{children:[d(Mi,{children:d("a",{href:"mailto:leandroav.dev@gmail.com",children:"[EMail]"})}),d(Mi,{children:d("a",{href:"https://www.linkedin.com/in/l3anav/",children:"[Linkedin]"})}),d(Mi,{children:d("a",{href:"https://github.com/l3anav",children:"[GitHub]"})})]}),z("p",{children:["1996-",l]})]})]})}const t0=()=>d(Ge,{children:d("div",{id:"billboard-outer",children:z("ol",{id:"billboard",children:[z("li",{children:[d("div",{}),d("div",{}),d("div",{}),d("div",{})]}),z("li",{children:[d("div",{}),d("div",{}),d("div",{}),d("div",{})]}),z("li",{children:[d("div",{}),d("div",{}),d("div",{}),d("div",{})]}),z("li",{children:[d("div",{}),d("div",{}),d("div",{}),d("div",{})]}),z("li",{children:[d("div",{}),d("div",{}),d("div",{}),d("div",{})]}),z("li",{children:[d("div",{}),d("div",{}),d("div",{}),d("div",{})]}),z("li",{children:[d("div",{}),d("div",{}),d("div",{}),d("div",{})]}),z("li",{children:[d("div",{}),d("div",{}),d("div",{}),d("div",{})]}),z("li",{children:[d("div",{}),d("div",{}),d("div",{}),d("div",{})]}),z("li",{children:[d("div",{}),d("div",{}),d("div",{}),d("div",{})]}),z("li",{children:[d("div",{}),d("div",{}),d("div",{}),d("div",{})]}),z("li",{children:[d("div",{}),d("div",{}),d("div",{}),d("div",{})]}),z("li",{children:[d("div",{}),d("div",{}),d("div",{}),d("div",{})]}),z("li",{children:[d("div",{}),d("div",{}),d("div",{}),d("div",{})]}),z("li",{children:[d("div",{}),d("div",{}),d("div",{}),d("div",{})]}),z("li",{children:[d("div",{}),d("div",{}),d("div",{}),d("div",{})]}),z("li",{children:[d("div",{}),d("div",{}),d("div",{}),d("div",{})]}),z("li",{children:[d("div",{}),d("div",{}),d("div",{}),d("div",{})]})]})})}),n0=E.p`
  
  color: #fff;
  margin-left:20px;
  letter-spacing:2px;
  display: ${e=>e.displaySlogan};
  
  text-shadow:
  2px 0 #0033db, -2px 0 #0033db, 0 2px #0033db, 0 -2px #0033db,
  1px 1px #0033db, -1px -1px #0033db, 1px -1px #0033db, -1px 1px #0033db;

  background-image:
  linear-gradient(to right, #dddddd 2px, transparent 2px),
  linear-gradient(to bottom, #dddddd 2px, transparent 2px);
  background-size: 3.5rem 3.5rem;
  background-position: center center;

  user-select:none;
  font-family:Zimra;
  font-size: clamp(2.1875rem, 1.3773rem + 4.321vw, 6.5625rem);

  text-shadow:${e=>e.mostrarInicio?"none":` 0 0 7px #0762bc,
    0 0 10px #0762bc,
    0 0 21px #0762bc,
    0 0 42px #0762bc,
    0 0 82px #0762bc,
    0 0 92px #0762bc,
    0 0 102px #0762bc,
    0 0 151px #0762bc;`}

  @media (max-width:1132px){
    
    grid-row:1;
    grid-column:1;
    text-shadow:none;
    margin-left:5px;

    background-image:none;
    background-size: none;
    background-position: none;
  }

`,r0=E.div`
  
  margin:0;
  padding:0;
  grid-row:1;
  display:flex;
  grid-column:2;
  height:100vh;
  position:relative;
  align-items:center;
  transform:scale(0.9);
  flex-direction:column;
  justify-content: center;
  background-color:none;
  
  p{
    letter-spacing:8px;
  }

  img{
    z-index:-1;
    position:absolute;
    top:0;
    margin:0;
    right:20px;
    transform: scaleX(-1);
    animation:OpacidadEntrada 1.2s;
  }

  @media (max-width:1132px){

    p{
      letter-spacing:3px;
    }

    img{
      display:none;
    }
  }
`;E.button`
  position:absolute;
  width:60%;
  height:8%;
  grid-row:1;
  bottom:50px;
  color:black;
  margin-left:30px;
  outline:1px solid black;
  border-top:2px solid white;
  border-left:2px solid white;
  border-right:2px solid #c1c1c1;
  border-bottom:2px solid #c1c1c1;
  font-size: clamp(0.875rem, 0.713rem + 0.8642vw, 1.75rem);

  
  :active{
    border-top:2px solid #c1c1c1;
    border-left:2px solid #c1c1c1; 
    border-right:2px solid white;
    border-bottom:2px solid white;
  }
  

  :hover{
    cursor: url("/src/assets/cursor/pointer-old.png"), default;
  }
`;function o0(){const[e,t]=T.useState(0),[n,r]=T.useState("flex"),o=()=>{t(window.innerWidth)};return T.useEffect(()=>(o(),window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}),[]),T.useEffect(()=>{e>1130?r("flex"):r("none")},[e]),d(Ge,{children:d(r0,{children:d(n0,{displaySlogan:n,children:"Diseño y Desarollo el sitio web que te ayude a alcanzar tus objetivos de negocio."})})})}const i0="/portfolio/assets/yahoopage-7fd957b0.gif",l0="data:image/gif;base64,R0lGODlh1AE8ANUAAP///wAz/wAA7gAA/zMz/2Zm/5mZ/8zM/xkZGxISEysrLDQ0NcnJzF1dXu7u70dIYVRVcW5xmWFjgYaLsT0+RZygtoyNk6uwyLW70TNm/8LL32aZ/+Hj59PX3pnM/8z//0xNTW5vb7T1unDpdd3+3y/dMgLOBAkJCP39/fb29iIiIgEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAA1AE8AAAG/0CAcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6HQXxUap3/C4fE6v2+2pC2PPcdyjBwceBoQGgR9/iYqLjI2LKBwdABx7DHqWDCluix8GBRkBoaKjoRkbB46pqqusrVAMHR2wlbCUlhWwm3MHGwSkv78DBq7ExcbHdbS3FRUWFRcYshga0Ax9bx6gwNukqMjf4OHiVimze7gW6ekhIenMzBfVGAwOKWMGvtwBGfz9v+MAAwoMyEbPhXfq1llg16ABiIbsLEx496xWlwPaSBHYYCjJAQPaBoocSXIVCgYUEy5cyC5EQxAgKCyY+QBChAk4J1jgUuBXBv8DiIYEIkLIGwCMJZMqXRonBToLDFSybPkypkwFCBKcQEDhAU4tB34VMCp0wIANQ3yBGsu0LRoBcJcI6AK3LoC5QvAiqav3SN8ifP/mjTvEbmHDhtGwcSp1XUuGDmHKXKAAq9YVCSJcyLKBVIGgRsKeHVJgg+kB+8i6XU23sBLBWfTGJeyXCOy8ewHrxn3XNe/ft8Ow2SO1nXHIkSlMVqECAYITK1Qw00UlA+pSRj+AFvIhwGghprKNQsu6vJa/sgkjVu+7993Z7dO/T9I3vezBeOfy/b3bNn/3AJ4BiUrtTIUcTDHNpABzCVy2ADNXZBTAMEKFsh0A3pEHwAagXBf/ygAZmCeiFbfd5959JvYmH3CHzZebESbq55qMuJUII375tScgBysd95hLVSVI2YJZnQDdA3pYkVEGF4YVAIceDJFhaJ2NEuKIWEJh340n+iYjjf6BCeCXryUW45gqIgYjeimCGdwXi0XVo49ABjkZkUWucIIEFUhCxQbXXUnEAT2VAgoB3X13hAGjFJDlo0ygdxh776lJJo4qbpEjb25m2mVt/c2oIxlxGvgjkAiCMNOQDBqp50QcUOHkPkWIdp0g132i6BEfZKQafaFCSpKkaH4apqcoBihFfSx6mmmyoPqnW4pmsFHBqQcmt8CdzTXoagI4OUDdE6IISgQoVfYa/4AHT1oX5RLaEOAEbbQJW1Kbg3Ea374uvtkEs8V2qiyxxm7qrL9eoODAtT82FCRM27KqgrfQraDABBewIYUB1wkxDIeoeBMKu08GAIC7TWjzrlwr4idqpTfSS2nA7CFs77L1zpffzgAHCJ+yU+w3qZf1BuZX0UhvKSAbHbDUQJ0vJTcZZcwVWfEKFDwzrhOioGJdZyB6h0oojIbi9QArK9EdrZE+y+/MbNb4Mpoo2nxzI3bffUQbUTkcdaoQr7pgt1pdDcEEDGzNBMmOApANRo1iOCGthACathKAmtz2pQHzu++Zl0KrNxaBlW766ainrvrqrLfu+uuJkXqSBYBHFv+44IM3WPgKvK8gwQTiKq5ESEIMcvI+nYVo9j4cP4l2Ed5RSMTav8Z8sJeT5ix6jqHvl/fo4APEQAiA366qgoNntXvvJ0RgQRtRTAneWQWgvbbkJ5s1wEf7Q/8dIUOwjvSAxbkz/Uda13ObwQ4YvgYOBAXlsB3EVHU+iU2MYr3jXfsqIDwlOMkoAgTU2EwWCiFsgC1HSaGUhIEhs5CHYxoCVsGw16wWJbBYdHOgDkcCwQtUcFVArMzgLri+DCIgAhjooEdQcy5hiBB/FloUiAKINkD1o3hTlIu+hsaf2NVIaTWEGdB2SEZwoKACM/kh7pjDIIpdrXcLQJwSkcAxc4X/sH8lLOERwoIWyE0IFOyi0AGymIbvQYpYYmKZ0Qb2BEQyUIYIDNYY/0MjQ4pRS4qxAHMUAESqsZGIRnpjBr3SgTlKMYYCZJTXNBeaJ2FkbNepUgDkhcUYHg12uMzl6ZLiSEsSbFm7WWDb5sWlaMltkpA0pCWpsBgLOGRBlflkGwvnqgxm8HCmPIIHdgWoAXrEO6YAkRXRRTYidLOMckCkpVxWzC/qK2eR7JJdKglPwexMnjx7kajmeaJ69id2ZipDGxwwj2Y0ACvOIZwbrclQPmkMEANonAlZGEBaFkEbvACRu3qSvOPNr3roNEMvbUgtSnIvX5N0ZD/DCDR6olSY//Gs5EtHZaMtGmsMw3GGQa61gMJRs5oM7V1mODiFQZqLUGSJ3sg44qSPhc1k7ioFEyV3oZCeYaQMtOc/Z2jMT8GUkdOi4U2DJdMx/hKBBvvqFzjwjAtgbB7xMKgKgBpUayogAgyogh6TYAC0SFUYerRiHgOAK9SgYpvmsupbgonDSmkVrVxtp1e76EWtGnCsMZ1s9iTZrMuCQWEXcEcFMICBZ1TgJhibgAQe0NO6WvMBEfDTFKwDUiEsTxTC+AATOVYojB5lZQL8F2ejUFPSDQSrOHzs51hK0y3iK54J9CxZNdtYsF5WrVqYXQgiEIEHSOAmpHUrd1Hr1tWqwLW8s/9JrP5EyCMsz4lTNCoMrROA+qmmefNqmReW2dVx4Ou5/oRsWpNJwxidFVkDRmbnuBrg5HY2DE7hrgQkEAIJQMC7vxutBgwwgfHmRLUUSEBQT3A4e1CBekmwUAnreJRQAOoUhOWYarwjUZbZkJ0Itmy/1EOvZ9VnNvAUB0D7ZZtEghVZYi0ywH6WLzZ5r8mdNTKO7/ljs2ovaaPSQjmulY4JQ2DCEbBwTSIADwNwtwAe7vADKHDe3qmAzA+dbXuhF4D7GbWFGcDIAFVD30a6Lcos1c+mEsxjm0pZsf0t5DCXMiALhJm7Ff5yhRsA5ppYeAIYEG8BbDJe7kJgAdBZgGb/svnN+iKhhL5ocTgJy4QOefM1f15wdQVG6LfNzb+6zLWud83rXvt6ddnNg/sgsF0LWHjCx/bysR/A7MOZVrUEsEmHJdwVvLqB1EfQhi1tS8IBCAE1nXl1EdQVUUwWUKyLnNughQbgJyP63WlgTAS+LIEGhNkC3o00sedN6QnXhNlkvgCH09zpCBwA2ykORY257TjycKQJJGObn89taAIWuJjS5S+8Nw4FB8SDAaU19oS3C4F+SwAE3w3Bhb1cEwh82tIWuMAGpn3hBxAgAprAQsQTCwopqAucwIxsghlpwOuiW8EcTzozPR4JDXRAA6V130HC3HIvh9nllm42s5Uz/+YKTKAAq2W2BUyM8EWNQtxO+IAsnxQ0m17yxzrmVD5rqLQgK/3uUXAAyGOhgb77HepQx4CjH+3ylX/5wlj/95oXwOwMo5lPJs5C2UJBALR7pFBdw7vm99t2UC1T40TgwAVi8fS/930apKWGaSNA8i97t/CKV7xMGo/aCuQcAGXfIwE8xLzafgTzoth2I39NfNdt3hWf12LQrXASDnDA9H5Hfd8v0F0ye13kh6dA4SHQlQszntmsZTwzZMuFtZOiH/zghvCPv3nlHm1GcC+y59Lk5M8xWQooiIcGPtCBA5Q++lB3ARZWeM7QDBJWeNqXeLHXbDhBfl6AD/oADBlwOf/sV4GXdIHONWgXN1bCZHRIxwRs4HHM4HTQB3UVcGyH53KaoRNU13JaB34tBwHMkDi5BwggoQ+mUFsWaIHud2S1diyMBVmyVgUDhQEYY3rh1WEDuGyakWnNgHiNB4MxOBFJBD9mEAhYqIM7yINYNl1ypyZKxiUE84PM1wYo0AFeNw2nR1qZpoSF14RseBAT0HjKUXir5WwZY4WOMAIlIAIkUAIjgAIlUAJbqFg9mFluR0mK6IMPdgVmCEHlgBMX8Hfh5XVhhmmZlmnQ4ITd5YKF9w5muAomYAIkMAImMAIiYAKEWIg8WHELpoHSMoaN6Iga0waUIInMwIZO+Ay6qIn/8QANOCEB3QdbzKAJekgGeQUAyQgFoyiIpGiKIxB5rHh8PQYcSDN/9xSGm6UzW2CGeZAToxWHvRgPmfiLTjgBF8Zd7/OIZ7ACebUCUZCKJZACowgAJWACIjCN+pgUj9gBHYYTqNeLcWgAv1iQcug+wXOMVGABqyIEDNkAyrgADbAADLAAK0CRIcAA7ggA7uhMC9AOEgkAzgQA0EgCqggAo0gC+7hDxdeSu7YGfPOPmxh45ViO8UCQAkd9FhAroeiIIXACDEmRQPmRFjCU8LiR7oiU4wOUF1mULGEBpigCqTgCJmkCcbaSWEkQj8gA//gMAaiLNxlXccV6peQFDQCP/xp5lqtSlCJ5lO+okW8ZAke5Ex2ZkfdYivgoj1m5lw+0CW4QYTdBkF8JDQYZV1CBezWoBHJZkStQlOPjDPBYAW7JkXAJl2fJkRy0kShQlfT4jKfIl6CJDKbEVpeIieFFmL/IYctolhdJkQAwkQuAAgwpmwvwmhRJkRbQmuOzAiiwAO/jmgDwhyNgj/PIhyoZmsiplSlAmjdRAQZwmr+Yi1fZjXIZZ494ldRxncfIkInzkSIJnMkZnmZ0bSngj981EZv4ixijkFswkdnJjksAP8e4mBwZm7wjnvgZDn4pbNKGkxxme+wpBj2Je1PwUNeWmPmZoIoQghgQZr+DExWQkCMIOgcTqqAWWgfXJgTe2KCHcwESqp8XGqLf8Igp0HfGGAZBAAA7",a0="/portfolio/assets/hotmail-db401f06.gif",u0="/portfolio/assets/goldenLinux-32ad8cfa.gif",_i="/portfolio/assets/internetexplorer-3eeaaded.gif",s0=E.div`
    width:100%;
    height:100vh;
    display:grid;
    background: rgb(167,211,151);
    grid-template-row:1fr 1fr;
    grid-template-columns: 1fr 1fr;
    
    a{
      unset:all
    }

    background: ${e=>e.mostrarInicio?"#dddddd":"#0728dd"};
    
    @media (max-width:1132px){
      grid-template-row: 1fr 1fr 1fr;
      grid-template-columns: 1fr;
    }
`,Oc=E.div`
    grid-row:1;
    grid-column:2;
    cursor:url(src/assets/cursor/pointer-old.png), pointer;

     @media (max-width:1132px){
        grid-row:2;
        grid-column:1;
        margin-bottom:140px;
    }
`,c0=E(Oc)`
    grid-row:2;

    @media (max-width:1132px){
      display:none;
    }
`,Lc=E.img`
    
    margin-top:30px;
    margin-left:100px;
    
     @media (max-width:1132px){
      margin-top:0;
      margin-left:3%;
      margin-right:2%;
      width:95%;
    }
`,d0=E(Lc)`
      
      grid-row:2;
      margin-top:0;
      margin-bottom:20px;
`;function f0(){const e=[{src:_i,href:"https://www.microsoft.com/es-AR/download/internet-explorer.aspx"},{src:i0,href:"https://espanol.yahoo.com/"},{src:a0,href:"https://www.hotmail.com/"},{src:l0,href:"https://www.intel.la/"},{src:u0,href:"https://goldendoglinux.org/"}],t=di(),n=Gn(),[r,o]=T.useState(!0),[i,l]=T.useState(_i),[a,u]=T.useState(_i);function s(){const m=Tc(e.length);return e[m]}T.useEffect(()=>{const m=g=>{g.key==="Escape"&&!t&&n(!1)};return l(s()),u(s()),document.addEventListener("keydown",m,!1),()=>{document.removeEventListener("keydown",m,!1)}},[]),T.useEffect(()=>{h()},[r]);function h(){localStorage.getItem("TOKENB")==="NOINICIO"?o(!1):localStorage.getItem("TOKENB")==="SIINICIO"&&o(!0)}return d(Ge,{children:d(s0,{mostrarInicio:r,children:r?z(Ge,{children:[d(e0,{consultarSiExiste:h}),d(Oc,{children:d("a",{href:i.href,target:"_blanck",children:d(Lc,{src:i.src})})}),d(t0,{}),d(c0,{children:d("a",{href:a.href,target:"_blanck",children:d(d0,{src:a.src})})})]}):z(Ge,{children:[d(Um,{consultarSiExiste:h}),d(o0,{})]})})})}var pl={},Dc={exports:{}},Ke={},Mc={exports:{}},_c={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,F){var j=I.length;I.push(F);e:for(;0<j;){var q=j-1>>>1,N=I[q];if(0<o(N,F))I[q]=F,I[j]=N,j=q;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var F=I[0],j=I.pop();if(j!==F){I[0]=j;e:for(var q=0,N=I.length,R=N>>>1;q<R;){var D=2*(q+1)-1,B=I[D],v=D+1,H=I[v];if(0>o(B,j))v<N&&0>o(H,B)?(I[q]=H,I[v]=j,q=v):(I[q]=B,I[D]=j,q=D);else if(v<N&&0>o(H,j))I[q]=H,I[v]=j,q=v;else break e}}return F}function o(I,F){var j=I.sortIndex-F.sortIndex;return j!==0?j:I.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var u=[],s=[],h=1,m=null,g=3,S=!1,x=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(I){for(var F=n(s);F!==null;){if(F.callback===null)r(s);else if(F.startTime<=I)r(s),F.sortIndex=F.expirationTime,t(u,F);else break;F=n(s)}}function y(I){if(w=!1,p(I),!x)if(n(u)!==null)x=!0,yt(A);else{var F=n(s);F!==null&&Le(y,F.startTime-I)}}function A(I,F){x=!1,w&&(w=!1,f(L),L=-1),S=!0;var j=g;try{for(p(F),m=n(u);m!==null&&(!(m.expirationTime>F)||I&&!me());){var q=m.callback;if(typeof q=="function"){m.callback=null,g=m.priorityLevel;var N=q(m.expirationTime<=F);F=e.unstable_now(),typeof N=="function"?m.callback=N:m===n(u)&&r(u),p(F)}else r(u);m=n(u)}if(m!==null)var R=!0;else{var D=n(s);D!==null&&Le(y,D.startTime-F),R=!1}return R}finally{m=null,g=j,S=!1}}var O=!1,_=null,L=-1,b=5,V=-1;function me(){return!(e.unstable_now()-V<b)}function fe(){if(_!==null){var I=e.unstable_now();V=I;var F=!0;try{F=_(!0,I)}finally{F?we():(O=!1,_=null)}}else O=!1}var we;if(typeof c=="function")we=function(){c(fe)};else if(typeof MessageChannel<"u"){var He=new MessageChannel,Pe=He.port2;He.port1.onmessage=fe,we=function(){Pe.postMessage(null)}}else we=function(){C(fe,0)};function yt(I){_=I,O||(O=!0,we())}function Le(I,F){L=C(function(){I(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){x||S||(x=!0,yt(A))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(I){switch(g){case 1:case 2:case 3:var F=3;break;default:F=g}var j=g;g=F;try{return I()}finally{g=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,F){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var j=g;g=I;try{return F()}finally{g=j}},e.unstable_scheduleCallback=function(I,F,j){var q=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?q+j:q):j=q,I){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=j+N,I={id:h++,callback:F,priorityLevel:I,startTime:j,expirationTime:N,sortIndex:-1},j>q?(I.sortIndex=j,t(s,I),n(u)===null&&I===n(s)&&(w?(f(L),L=-1):w=!0,Le(y,j-q))):(I.sortIndex=N,t(u,I),x||S||(x=!0,yt(A))),I},e.unstable_shouldYield=me,e.unstable_wrapCallback=function(I){var F=g;return function(){var j=g;g=F;try{return I.apply(this,arguments)}finally{g=j}}}})(_c);Mc.exports=_c;var p0=Mc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h0=T,Xe=p0;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fc=new Set,Ar={};function hn(e,t){jn(e,t),jn(e+"Capture",t)}function jn(e,t){for(Ar[e]=t,e=0;e<t.length;e++)Fc.add(t[e])}var Et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hl=Object.prototype.hasOwnProperty,m0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Du={},Mu={};function g0(e){return hl.call(Mu,e)?!0:hl.call(Du,e)?!1:m0.test(e)?Mu[e]=!0:(Du[e]=!0,!1)}function v0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function y0(e,t,n,r){if(t===null||typeof t>"u"||v0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Fe(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var Ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ie[e]=new Fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ie[t]=new Fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ie[e]=new Fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ie[e]=new Fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ie[e]=new Fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ie[e]=new Fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ie[e]=new Fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ie[e]=new Fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ie[e]=new Fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Aa=/[\-:]([a-z])/g;function Ca(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Aa,Ca);Ie[t]=new Fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Aa,Ca);Ie[t]=new Fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Aa,Ca);Ie[t]=new Fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ie[e]=new Fe(e,1,!1,e.toLowerCase(),null,!1,!1)});Ie.xlinkHref=new Fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ie[e]=new Fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ea(e,t,n,r){var o=Ie.hasOwnProperty(t)?Ie[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(y0(t,n,o,r)&&(n=null),r||o===null?g0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Tt=h0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Jr=Symbol.for("react.element"),yn=Symbol.for("react.portal"),wn=Symbol.for("react.fragment"),Ia=Symbol.for("react.strict_mode"),ml=Symbol.for("react.profiler"),jc=Symbol.for("react.provider"),Bc=Symbol.for("react.context"),Pa=Symbol.for("react.forward_ref"),gl=Symbol.for("react.suspense"),vl=Symbol.for("react.suspense_list"),Na=Symbol.for("react.memo"),Ot=Symbol.for("react.lazy"),Vc=Symbol.for("react.offscreen"),_u=Symbol.iterator;function qn(e){return e===null||typeof e!="object"?null:(e=_u&&e[_u]||e["@@iterator"],typeof e=="function"?e:null)}var le=Object.assign,Fi;function ar(e){if(Fi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Fi=t&&t[1]||""}return`
`+Fi+e}var ji=!1;function Bi(e,t){if(!e||ji)return"";ji=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(s){var r=s}Reflect.construct(e,[],t)}else{try{t.call()}catch(s){r=s}e.call(t.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var o=s.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var u=`
`+o[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{ji=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ar(e):""}function w0(e){switch(e.tag){case 5:return ar(e.type);case 16:return ar("Lazy");case 13:return ar("Suspense");case 19:return ar("SuspenseList");case 0:case 2:case 15:return e=Bi(e.type,!1),e;case 11:return e=Bi(e.type.render,!1),e;case 1:return e=Bi(e.type,!0),e;default:return""}}function yl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wn:return"Fragment";case yn:return"Portal";case ml:return"Profiler";case Ia:return"StrictMode";case gl:return"Suspense";case vl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Bc:return(e.displayName||"Context")+".Consumer";case jc:return(e._context.displayName||"Context")+".Provider";case Pa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Na:return t=e.displayName||null,t!==null?t:yl(e.type)||"Memo";case Ot:t=e._payload,e=e._init;try{return yl(e(t))}catch{}}return null}function x0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yl(t);case 8:return t===Ia?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Uc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function S0(e){var t=Uc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Kr(e){e._valueTracker||(e._valueTracker=S0(e))}function $c(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Uc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function To(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function wl(e,t){var n=t.checked;return le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Fu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Yt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Qc(e,t){t=t.checked,t!=null&&Ea(e,"checked",t,!1)}function xl(e,t){Qc(e,t);var n=Yt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Sl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Sl(e,t.type,Yt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ju(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Sl(e,t,n){(t!=="number"||To(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ur=Array.isArray;function zn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Yt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function kl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Bu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(ur(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Yt(n)}}function Hc(e,t){var n=Yt(t.value),r=Yt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Vu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Wc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Al(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Wc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zr,bc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Zr=Zr||document.createElement("div"),Zr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Zr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Cr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var fr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},k0=["Webkit","ms","Moz","O"];Object.keys(fr).forEach(function(e){k0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fr[t]=fr[e]})});function Gc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||fr.hasOwnProperty(e)&&fr[e]?(""+t).trim():t+"px"}function Yc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Gc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var A0=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cl(e,t){if(t){if(A0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function El(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Il=null;function Ta(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pl=null,Rn=null,On=null;function Uu(e){if(e=Hr(e)){if(typeof Pl!="function")throw Error(k(280));var t=e.stateNode;t&&(t=vi(t),Pl(e.stateNode,e.type,t))}}function Xc(e){Rn?On?On.push(e):On=[e]:Rn=e}function Jc(){if(Rn){var e=Rn,t=On;if(On=Rn=null,Uu(e),t)for(e=0;e<t.length;e++)Uu(t[e])}}function Kc(e,t){return e(t)}function Zc(){}var Vi=!1;function qc(e,t,n){if(Vi)return e(t,n);Vi=!0;try{return Kc(e,t,n)}finally{Vi=!1,(Rn!==null||On!==null)&&(Zc(),Jc())}}function Er(e,t){var n=e.stateNode;if(n===null)return null;var r=vi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Nl=!1;if(Et)try{var er={};Object.defineProperty(er,"passive",{get:function(){Nl=!0}}),window.addEventListener("test",er,er),window.removeEventListener("test",er,er)}catch{Nl=!1}function C0(e,t,n,r,o,i,l,a,u){var s=Array.prototype.slice.call(arguments,3);try{t.apply(n,s)}catch(h){this.onError(h)}}var pr=!1,zo=null,Ro=!1,Tl=null,E0={onError:function(e){pr=!0,zo=e}};function I0(e,t,n,r,o,i,l,a,u){pr=!1,zo=null,C0.apply(E0,arguments)}function P0(e,t,n,r,o,i,l,a,u){if(I0.apply(this,arguments),pr){if(pr){var s=zo;pr=!1,zo=null}else throw Error(k(198));Ro||(Ro=!0,Tl=s)}}function mn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ed(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $u(e){if(mn(e)!==e)throw Error(k(188))}function N0(e){var t=e.alternate;if(!t){if(t=mn(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return $u(o),e;if(i===r)return $u(o),t;i=i.sibling}throw Error(k(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function td(e){return e=N0(e),e!==null?nd(e):null}function nd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=nd(e);if(t!==null)return t;e=e.sibling}return null}var rd=Xe.unstable_scheduleCallback,Qu=Xe.unstable_cancelCallback,T0=Xe.unstable_shouldYield,z0=Xe.unstable_requestPaint,ce=Xe.unstable_now,R0=Xe.unstable_getCurrentPriorityLevel,za=Xe.unstable_ImmediatePriority,od=Xe.unstable_UserBlockingPriority,Oo=Xe.unstable_NormalPriority,O0=Xe.unstable_LowPriority,id=Xe.unstable_IdlePriority,pi=null,gt=null;function L0(e){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(pi,e,void 0,(e.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:_0,D0=Math.log,M0=Math.LN2;function _0(e){return e>>>=0,e===0?32:31-(D0(e)/M0|0)|0}var qr=64,eo=4194304;function sr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Lo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=sr(a):(i&=l,i!==0&&(r=sr(i)))}else l=n&~o,l!==0?r=sr(l):i!==0&&(r=sr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ct(t),o=1<<n,r|=e[n],t&=~o;return r}function F0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function j0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-ct(i),a=1<<l,u=o[l];u===-1?(!(a&n)||a&r)&&(o[l]=F0(a,t)):u<=t&&(e.expiredLanes|=a),i&=~a}}function zl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ld(){var e=qr;return qr<<=1,!(qr&4194240)&&(qr=64),e}function Ui(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $r(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ct(t),e[t]=n}function B0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-ct(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Ra(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ct(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var K=0;function ad(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ud,Oa,sd,cd,dd,Rl=!1,to=[],Vt=null,Ut=null,$t=null,Ir=new Map,Pr=new Map,Dt=[],V0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hu(e,t){switch(e){case"focusin":case"focusout":Vt=null;break;case"dragenter":case"dragleave":Ut=null;break;case"mouseover":case"mouseout":$t=null;break;case"pointerover":case"pointerout":Ir.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pr.delete(t.pointerId)}}function tr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Hr(t),t!==null&&Oa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function U0(e,t,n,r,o){switch(t){case"focusin":return Vt=tr(Vt,e,t,n,r,o),!0;case"dragenter":return Ut=tr(Ut,e,t,n,r,o),!0;case"mouseover":return $t=tr($t,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Ir.set(i,tr(Ir.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Pr.set(i,tr(Pr.get(i)||null,e,t,n,r,o)),!0}return!1}function fd(e){var t=nn(e.target);if(t!==null){var n=mn(t);if(n!==null){if(t=n.tag,t===13){if(t=ed(n),t!==null){e.blockedOn=t,dd(e.priority,function(){sd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function go(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ol(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Il=r,n.target.dispatchEvent(r),Il=null}else return t=Hr(n),t!==null&&Oa(t),e.blockedOn=n,!1;t.shift()}return!0}function Wu(e,t,n){go(e)&&n.delete(t)}function $0(){Rl=!1,Vt!==null&&go(Vt)&&(Vt=null),Ut!==null&&go(Ut)&&(Ut=null),$t!==null&&go($t)&&($t=null),Ir.forEach(Wu),Pr.forEach(Wu)}function nr(e,t){e.blockedOn===t&&(e.blockedOn=null,Rl||(Rl=!0,Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority,$0)))}function Nr(e){function t(o){return nr(o,e)}if(0<to.length){nr(to[0],e);for(var n=1;n<to.length;n++){var r=to[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Vt!==null&&nr(Vt,e),Ut!==null&&nr(Ut,e),$t!==null&&nr($t,e),Ir.forEach(t),Pr.forEach(t),n=0;n<Dt.length;n++)r=Dt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Dt.length&&(n=Dt[0],n.blockedOn===null);)fd(n),n.blockedOn===null&&Dt.shift()}var Ln=Tt.ReactCurrentBatchConfig,Do=!0;function Q0(e,t,n,r){var o=K,i=Ln.transition;Ln.transition=null;try{K=1,La(e,t,n,r)}finally{K=o,Ln.transition=i}}function H0(e,t,n,r){var o=K,i=Ln.transition;Ln.transition=null;try{K=4,La(e,t,n,r)}finally{K=o,Ln.transition=i}}function La(e,t,n,r){if(Do){var o=Ol(e,t,n,r);if(o===null)Ki(e,t,r,Mo,n),Hu(e,r);else if(U0(o,e,t,n,r))r.stopPropagation();else if(Hu(e,r),t&4&&-1<V0.indexOf(e)){for(;o!==null;){var i=Hr(o);if(i!==null&&ud(i),i=Ol(e,t,n,r),i===null&&Ki(e,t,r,Mo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ki(e,t,r,null,n)}}var Mo=null;function Ol(e,t,n,r){if(Mo=null,e=Ta(r),e=nn(e),e!==null)if(t=mn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ed(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Mo=e,null}function pd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(R0()){case za:return 1;case od:return 4;case Oo:case O0:return 16;case id:return 536870912;default:return 16}default:return 16}}var Ft=null,Da=null,vo=null;function hd(){if(vo)return vo;var e,t=Da,n=t.length,r,o="value"in Ft?Ft.value:Ft.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return vo=o.slice(e,1<r?1-r:void 0)}function yo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function no(){return!0}function bu(){return!1}function Ze(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?no:bu,this.isPropagationStopped=bu,this}return le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=no)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=no)},persist:function(){},isPersistent:no}),t}var Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ma=Ze(Xn),Qr=le({},Xn,{view:0,detail:0}),W0=Ze(Qr),$i,Qi,rr,hi=le({},Qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_a,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rr&&(rr&&e.type==="mousemove"?($i=e.screenX-rr.screenX,Qi=e.screenY-rr.screenY):Qi=$i=0,rr=e),$i)},movementY:function(e){return"movementY"in e?e.movementY:Qi}}),Gu=Ze(hi),b0=le({},hi,{dataTransfer:0}),G0=Ze(b0),Y0=le({},Qr,{relatedTarget:0}),Hi=Ze(Y0),X0=le({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0}),J0=Ze(X0),K0=le({},Xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Z0=Ze(K0),q0=le({},Xn,{data:0}),Yu=Ze(q0),eg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ng={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ng[e])?!!t[e]:!1}function _a(){return rg}var og=le({},Qr,{key:function(e){if(e.key){var t=eg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=yo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_a,charCode:function(e){return e.type==="keypress"?yo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ig=Ze(og),lg=le({},hi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xu=Ze(lg),ag=le({},Qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_a}),ug=Ze(ag),sg=le({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),cg=Ze(sg),dg=le({},hi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fg=Ze(dg),pg=[9,13,27,32],Fa=Et&&"CompositionEvent"in window,hr=null;Et&&"documentMode"in document&&(hr=document.documentMode);var hg=Et&&"TextEvent"in window&&!hr,md=Et&&(!Fa||hr&&8<hr&&11>=hr),Ju=String.fromCharCode(32),Ku=!1;function gd(e,t){switch(e){case"keyup":return pg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xn=!1;function mg(e,t){switch(e){case"compositionend":return vd(t);case"keypress":return t.which!==32?null:(Ku=!0,Ju);case"textInput":return e=t.data,e===Ju&&Ku?null:e;default:return null}}function gg(e,t){if(xn)return e==="compositionend"||!Fa&&gd(e,t)?(e=hd(),vo=Da=Ft=null,xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return md&&t.locale!=="ko"?null:t.data;default:return null}}var vg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!vg[e.type]:t==="textarea"}function yd(e,t,n,r){Xc(r),t=_o(t,"onChange"),0<t.length&&(n=new Ma("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var mr=null,Tr=null;function yg(e){Td(e,0)}function mi(e){var t=An(e);if($c(t))return e}function wg(e,t){if(e==="change")return t}var wd=!1;if(Et){var Wi;if(Et){var bi="oninput"in document;if(!bi){var qu=document.createElement("div");qu.setAttribute("oninput","return;"),bi=typeof qu.oninput=="function"}Wi=bi}else Wi=!1;wd=Wi&&(!document.documentMode||9<document.documentMode)}function es(){mr&&(mr.detachEvent("onpropertychange",xd),Tr=mr=null)}function xd(e){if(e.propertyName==="value"&&mi(Tr)){var t=[];yd(t,Tr,e,Ta(e)),qc(yg,t)}}function xg(e,t,n){e==="focusin"?(es(),mr=t,Tr=n,mr.attachEvent("onpropertychange",xd)):e==="focusout"&&es()}function Sg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return mi(Tr)}function kg(e,t){if(e==="click")return mi(t)}function Ag(e,t){if(e==="input"||e==="change")return mi(t)}function Cg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:Cg;function zr(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!hl.call(t,o)||!ft(e[o],t[o]))return!1}return!0}function ts(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ns(e,t){var n=ts(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ts(n)}}function Sd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function kd(){for(var e=window,t=To();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=To(e.document)}return t}function ja(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Eg(e){var t=kd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Sd(n.ownerDocument.documentElement,n)){if(r!==null&&ja(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=ns(n,i);var l=ns(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ig=Et&&"documentMode"in document&&11>=document.documentMode,Sn=null,Ll=null,gr=null,Dl=!1;function rs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Dl||Sn==null||Sn!==To(r)||(r=Sn,"selectionStart"in r&&ja(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),gr&&zr(gr,r)||(gr=r,r=_o(Ll,"onSelect"),0<r.length&&(t=new Ma("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Sn)))}function ro(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kn={animationend:ro("Animation","AnimationEnd"),animationiteration:ro("Animation","AnimationIteration"),animationstart:ro("Animation","AnimationStart"),transitionend:ro("Transition","TransitionEnd")},Gi={},Ad={};Et&&(Ad=document.createElement("div").style,"AnimationEvent"in window||(delete kn.animationend.animation,delete kn.animationiteration.animation,delete kn.animationstart.animation),"TransitionEvent"in window||delete kn.transitionend.transition);function gi(e){if(Gi[e])return Gi[e];if(!kn[e])return e;var t=kn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ad)return Gi[e]=t[n];return e}var Cd=gi("animationend"),Ed=gi("animationiteration"),Id=gi("animationstart"),Pd=gi("transitionend"),Nd=new Map,os="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jt(e,t){Nd.set(e,t),hn(t,[e])}for(var Yi=0;Yi<os.length;Yi++){var Xi=os[Yi],Pg=Xi.toLowerCase(),Ng=Xi[0].toUpperCase()+Xi.slice(1);Jt(Pg,"on"+Ng)}Jt(Cd,"onAnimationEnd");Jt(Ed,"onAnimationIteration");Jt(Id,"onAnimationStart");Jt("dblclick","onDoubleClick");Jt("focusin","onFocus");Jt("focusout","onBlur");Jt(Pd,"onTransitionEnd");jn("onMouseEnter",["mouseout","mouseover"]);jn("onMouseLeave",["mouseout","mouseover"]);jn("onPointerEnter",["pointerout","pointerover"]);jn("onPointerLeave",["pointerout","pointerover"]);hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tg=new Set("cancel close invalid load scroll toggle".split(" ").concat(cr));function is(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,P0(r,t,void 0,e),e.currentTarget=null}function Td(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],u=a.instance,s=a.currentTarget;if(a=a.listener,u!==i&&o.isPropagationStopped())break e;is(o,a,s),i=u}else for(l=0;l<r.length;l++){if(a=r[l],u=a.instance,s=a.currentTarget,a=a.listener,u!==i&&o.isPropagationStopped())break e;is(o,a,s),i=u}}}if(Ro)throw e=Tl,Ro=!1,Tl=null,e}function te(e,t){var n=t[Bl];n===void 0&&(n=t[Bl]=new Set);var r=e+"__bubble";n.has(r)||(zd(t,e,2,!1),n.add(r))}function Ji(e,t,n){var r=0;t&&(r|=4),zd(n,e,r,t)}var oo="_reactListening"+Math.random().toString(36).slice(2);function Rr(e){if(!e[oo]){e[oo]=!0,Fc.forEach(function(n){n!=="selectionchange"&&(Tg.has(n)||Ji(n,!1,e),Ji(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[oo]||(t[oo]=!0,Ji("selectionchange",!1,t))}}function zd(e,t,n,r){switch(pd(t)){case 1:var o=Q0;break;case 4:o=H0;break;default:o=La}n=o.bind(null,t,n,e),o=void 0,!Nl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ki(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;l=l.return}for(;a!==null;){if(l=nn(a),l===null)return;if(u=l.tag,u===5||u===6){r=i=l;continue e}a=a.parentNode}}r=r.return}qc(function(){var s=i,h=Ta(n),m=[];e:{var g=Nd.get(e);if(g!==void 0){var S=Ma,x=e;switch(e){case"keypress":if(yo(n)===0)break e;case"keydown":case"keyup":S=ig;break;case"focusin":x="focus",S=Hi;break;case"focusout":x="blur",S=Hi;break;case"beforeblur":case"afterblur":S=Hi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Gu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=G0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=ug;break;case Cd:case Ed:case Id:S=J0;break;case Pd:S=cg;break;case"scroll":S=W0;break;case"wheel":S=fg;break;case"copy":case"cut":case"paste":S=Z0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Xu}var w=(t&4)!==0,C=!w&&e==="scroll",f=w?g!==null?g+"Capture":null:g;w=[];for(var c=s,p;c!==null;){p=c;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,f!==null&&(y=Er(c,f),y!=null&&w.push(Or(c,y,p)))),C)break;c=c.return}0<w.length&&(g=new S(g,x,null,n,h),m.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",g&&n!==Il&&(x=n.relatedTarget||n.fromElement)&&(nn(x)||x[It]))break e;if((S||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,S?(x=n.relatedTarget||n.toElement,S=s,x=x?nn(x):null,x!==null&&(C=mn(x),x!==C||x.tag!==5&&x.tag!==6)&&(x=null)):(S=null,x=s),S!==x)){if(w=Gu,y="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=Xu,y="onPointerLeave",f="onPointerEnter",c="pointer"),C=S==null?g:An(S),p=x==null?g:An(x),g=new w(y,c+"leave",S,n,h),g.target=C,g.relatedTarget=p,y=null,nn(h)===s&&(w=new w(f,c+"enter",x,n,h),w.target=p,w.relatedTarget=C,y=w),C=y,S&&x)t:{for(w=S,f=x,c=0,p=w;p;p=gn(p))c++;for(p=0,y=f;y;y=gn(y))p++;for(;0<c-p;)w=gn(w),c--;for(;0<p-c;)f=gn(f),p--;for(;c--;){if(w===f||f!==null&&w===f.alternate)break t;w=gn(w),f=gn(f)}w=null}else w=null;S!==null&&ls(m,g,S,w,!1),x!==null&&C!==null&&ls(m,C,x,w,!0)}}e:{if(g=s?An(s):window,S=g.nodeName&&g.nodeName.toLowerCase(),S==="select"||S==="input"&&g.type==="file")var A=wg;else if(Zu(g))if(wd)A=Ag;else{A=Sg;var O=xg}else(S=g.nodeName)&&S.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(A=kg);if(A&&(A=A(e,s))){yd(m,A,n,h);break e}O&&O(e,g,s),e==="focusout"&&(O=g._wrapperState)&&O.controlled&&g.type==="number"&&Sl(g,"number",g.value)}switch(O=s?An(s):window,e){case"focusin":(Zu(O)||O.contentEditable==="true")&&(Sn=O,Ll=s,gr=null);break;case"focusout":gr=Ll=Sn=null;break;case"mousedown":Dl=!0;break;case"contextmenu":case"mouseup":case"dragend":Dl=!1,rs(m,n,h);break;case"selectionchange":if(Ig)break;case"keydown":case"keyup":rs(m,n,h)}var _;if(Fa)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else xn?gd(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(md&&n.locale!=="ko"&&(xn||L!=="onCompositionStart"?L==="onCompositionEnd"&&xn&&(_=hd()):(Ft=h,Da="value"in Ft?Ft.value:Ft.textContent,xn=!0)),O=_o(s,L),0<O.length&&(L=new Yu(L,e,null,n,h),m.push({event:L,listeners:O}),_?L.data=_:(_=vd(n),_!==null&&(L.data=_)))),(_=hg?mg(e,n):gg(e,n))&&(s=_o(s,"onBeforeInput"),0<s.length&&(h=new Yu("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:s}),h.data=_))}Td(m,t)})}function Or(e,t,n){return{instance:e,listener:t,currentTarget:n}}function _o(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Er(e,n),i!=null&&r.unshift(Or(e,i,o)),i=Er(e,t),i!=null&&r.push(Or(e,i,o))),e=e.return}return r}function gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ls(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,u=a.alternate,s=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&s!==null&&(a=s,o?(u=Er(n,i),u!=null&&l.unshift(Or(n,u,a))):o||(u=Er(n,i),u!=null&&l.push(Or(n,u,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var zg=/\r\n?/g,Rg=/\u0000|\uFFFD/g;function as(e){return(typeof e=="string"?e:""+e).replace(zg,`
`).replace(Rg,"")}function io(e,t,n){if(t=as(t),as(e)!==t&&n)throw Error(k(425))}function Fo(){}var Ml=null,_l=null;function Fl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var jl=typeof setTimeout=="function"?setTimeout:void 0,Og=typeof clearTimeout=="function"?clearTimeout:void 0,us=typeof Promise=="function"?Promise:void 0,Lg=typeof queueMicrotask=="function"?queueMicrotask:typeof us<"u"?function(e){return us.resolve(null).then(e).catch(Dg)}:jl;function Dg(e){setTimeout(function(){throw e})}function Zi(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Nr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Nr(t)}function Qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ss(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Jn=Math.random().toString(36).slice(2),mt="__reactFiber$"+Jn,Lr="__reactProps$"+Jn,It="__reactContainer$"+Jn,Bl="__reactEvents$"+Jn,Mg="__reactListeners$"+Jn,_g="__reactHandles$"+Jn;function nn(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[It]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ss(e);e!==null;){if(n=e[mt])return n;e=ss(e)}return t}e=n,n=e.parentNode}return null}function Hr(e){return e=e[mt]||e[It],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function An(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function vi(e){return e[Lr]||null}var Vl=[],Cn=-1;function Kt(e){return{current:e}}function ne(e){0>Cn||(e.current=Vl[Cn],Vl[Cn]=null,Cn--)}function ee(e,t){Cn++,Vl[Cn]=e.current,e.current=t}var Xt={},Oe=Kt(Xt),Ue=Kt(!1),sn=Xt;function Bn(e,t){var n=e.type.contextTypes;if(!n)return Xt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function $e(e){return e=e.childContextTypes,e!=null}function jo(){ne(Ue),ne(Oe)}function cs(e,t,n){if(Oe.current!==Xt)throw Error(k(168));ee(Oe,t),ee(Ue,n)}function Rd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(k(108,x0(e)||"Unknown",o));return le({},n,r)}function Bo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Xt,sn=Oe.current,ee(Oe,e),ee(Ue,Ue.current),!0}function ds(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Rd(e,t,sn),r.__reactInternalMemoizedMergedChildContext=e,ne(Ue),ne(Oe),ee(Oe,e)):ne(Ue),ee(Ue,n)}var xt=null,yi=!1,qi=!1;function Od(e){xt===null?xt=[e]:xt.push(e)}function Fg(e){yi=!0,Od(e)}function Zt(){if(!qi&&xt!==null){qi=!0;var e=0,t=K;try{var n=xt;for(K=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}xt=null,yi=!1}catch(o){throw xt!==null&&(xt=xt.slice(e+1)),rd(za,Zt),o}finally{K=t,qi=!1}}return null}var En=[],In=0,Vo=null,Uo=0,qe=[],et=0,cn=null,kt=1,At="";function qt(e,t){En[In++]=Uo,En[In++]=Vo,Vo=e,Uo=t}function Ld(e,t,n){qe[et++]=kt,qe[et++]=At,qe[et++]=cn,cn=e;var r=kt;e=At;var o=32-ct(r)-1;r&=~(1<<o),n+=1;var i=32-ct(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,kt=1<<32-ct(t)+o|n<<o|r,At=i+e}else kt=1<<i|n<<o|r,At=e}function Ba(e){e.return!==null&&(qt(e,1),Ld(e,1,0))}function Va(e){for(;e===Vo;)Vo=En[--In],En[In]=null,Uo=En[--In],En[In]=null;for(;e===cn;)cn=qe[--et],qe[et]=null,At=qe[--et],qe[et]=null,kt=qe[--et],qe[et]=null}var Ye=null,be=null,re=!1,st=null;function Dd(e,t){var n=tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function fs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ye=e,be=Qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ye=e,be=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=cn!==null?{id:kt,overflow:At}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ye=e,be=null,!0):!1;default:return!1}}function Ul(e){return(e.mode&1)!==0&&(e.flags&128)===0}function $l(e){if(re){var t=be;if(t){var n=t;if(!fs(e,t)){if(Ul(e))throw Error(k(418));t=Qt(n.nextSibling);var r=Ye;t&&fs(e,t)?Dd(r,n):(e.flags=e.flags&-4097|2,re=!1,Ye=e)}}else{if(Ul(e))throw Error(k(418));e.flags=e.flags&-4097|2,re=!1,Ye=e}}}function ps(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ye=e}function lo(e){if(e!==Ye)return!1;if(!re)return ps(e),re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Fl(e.type,e.memoizedProps)),t&&(t=be)){if(Ul(e))throw Md(),Error(k(418));for(;t;)Dd(e,t),t=Qt(t.nextSibling)}if(ps(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){be=Qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}be=null}}else be=Ye?Qt(e.stateNode.nextSibling):null;return!0}function Md(){for(var e=be;e;)e=Qt(e.nextSibling)}function Vn(){be=Ye=null,re=!1}function Ua(e){st===null?st=[e]:st.push(e)}var jg=Tt.ReactCurrentBatchConfig;function or(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function ao(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function hs(e){var t=e._init;return t(e._payload)}function _d(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function o(f,c){return f=Gt(f,c),f.index=0,f.sibling=null,f}function i(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,p,y){return c===null||c.tag!==6?(c=ll(p,f.mode,y),c.return=f,c):(c=o(c,p),c.return=f,c)}function u(f,c,p,y){var A=p.type;return A===wn?h(f,c,p.props.children,y,p.key):c!==null&&(c.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ot&&hs(A)===c.type)?(y=o(c,p.props),y.ref=or(f,c,p),y.return=f,y):(y=Eo(p.type,p.key,p.props,null,f.mode,y),y.ref=or(f,c,p),y.return=f,y)}function s(f,c,p,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=al(p,f.mode,y),c.return=f,c):(c=o(c,p.children||[]),c.return=f,c)}function h(f,c,p,y,A){return c===null||c.tag!==7?(c=un(p,f.mode,y,A),c.return=f,c):(c=o(c,p),c.return=f,c)}function m(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ll(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Jr:return p=Eo(c.type,c.key,c.props,null,f.mode,p),p.ref=or(f,null,c),p.return=f,p;case yn:return c=al(c,f.mode,p),c.return=f,c;case Ot:var y=c._init;return m(f,y(c._payload),p)}if(ur(c)||qn(c))return c=un(c,f.mode,p,null),c.return=f,c;ao(f,c)}return null}function g(f,c,p,y){var A=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return A!==null?null:a(f,c,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Jr:return p.key===A?u(f,c,p,y):null;case yn:return p.key===A?s(f,c,p,y):null;case Ot:return A=p._init,g(f,c,A(p._payload),y)}if(ur(p)||qn(p))return A!==null?null:h(f,c,p,y,null);ao(f,p)}return null}function S(f,c,p,y,A){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(p)||null,a(c,f,""+y,A);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Jr:return f=f.get(y.key===null?p:y.key)||null,u(c,f,y,A);case yn:return f=f.get(y.key===null?p:y.key)||null,s(c,f,y,A);case Ot:var O=y._init;return S(f,c,p,O(y._payload),A)}if(ur(y)||qn(y))return f=f.get(p)||null,h(c,f,y,A,null);ao(c,y)}return null}function x(f,c,p,y){for(var A=null,O=null,_=c,L=c=0,b=null;_!==null&&L<p.length;L++){_.index>L?(b=_,_=null):b=_.sibling;var V=g(f,_,p[L],y);if(V===null){_===null&&(_=b);break}e&&_&&V.alternate===null&&t(f,_),c=i(V,c,L),O===null?A=V:O.sibling=V,O=V,_=b}if(L===p.length)return n(f,_),re&&qt(f,L),A;if(_===null){for(;L<p.length;L++)_=m(f,p[L],y),_!==null&&(c=i(_,c,L),O===null?A=_:O.sibling=_,O=_);return re&&qt(f,L),A}for(_=r(f,_);L<p.length;L++)b=S(_,f,L,p[L],y),b!==null&&(e&&b.alternate!==null&&_.delete(b.key===null?L:b.key),c=i(b,c,L),O===null?A=b:O.sibling=b,O=b);return e&&_.forEach(function(me){return t(f,me)}),re&&qt(f,L),A}function w(f,c,p,y){var A=qn(p);if(typeof A!="function")throw Error(k(150));if(p=A.call(p),p==null)throw Error(k(151));for(var O=A=null,_=c,L=c=0,b=null,V=p.next();_!==null&&!V.done;L++,V=p.next()){_.index>L?(b=_,_=null):b=_.sibling;var me=g(f,_,V.value,y);if(me===null){_===null&&(_=b);break}e&&_&&me.alternate===null&&t(f,_),c=i(me,c,L),O===null?A=me:O.sibling=me,O=me,_=b}if(V.done)return n(f,_),re&&qt(f,L),A;if(_===null){for(;!V.done;L++,V=p.next())V=m(f,V.value,y),V!==null&&(c=i(V,c,L),O===null?A=V:O.sibling=V,O=V);return re&&qt(f,L),A}for(_=r(f,_);!V.done;L++,V=p.next())V=S(_,f,L,V.value,y),V!==null&&(e&&V.alternate!==null&&_.delete(V.key===null?L:V.key),c=i(V,c,L),O===null?A=V:O.sibling=V,O=V);return e&&_.forEach(function(fe){return t(f,fe)}),re&&qt(f,L),A}function C(f,c,p,y){if(typeof p=="object"&&p!==null&&p.type===wn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Jr:e:{for(var A=p.key,O=c;O!==null;){if(O.key===A){if(A=p.type,A===wn){if(O.tag===7){n(f,O.sibling),c=o(O,p.props.children),c.return=f,f=c;break e}}else if(O.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ot&&hs(A)===O.type){n(f,O.sibling),c=o(O,p.props),c.ref=or(f,O,p),c.return=f,f=c;break e}n(f,O);break}else t(f,O);O=O.sibling}p.type===wn?(c=un(p.props.children,f.mode,y,p.key),c.return=f,f=c):(y=Eo(p.type,p.key,p.props,null,f.mode,y),y.ref=or(f,c,p),y.return=f,f=y)}return l(f);case yn:e:{for(O=p.key;c!==null;){if(c.key===O)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=o(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=al(p,f.mode,y),c.return=f,f=c}return l(f);case Ot:return O=p._init,C(f,c,O(p._payload),y)}if(ur(p))return x(f,c,p,y);if(qn(p))return w(f,c,p,y);ao(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=o(c,p),c.return=f,f=c):(n(f,c),c=ll(p,f.mode,y),c.return=f,f=c),l(f)):n(f,c)}return C}var Un=_d(!0),Fd=_d(!1),$o=Kt(null),Qo=null,Pn=null,$a=null;function Qa(){$a=Pn=Qo=null}function Ha(e){var t=$o.current;ne($o),e._currentValue=t}function Ql(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Dn(e,t){Qo=e,$a=Pn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ve=!0),e.firstContext=null)}function rt(e){var t=e._currentValue;if($a!==e)if(e={context:e,memoizedValue:t,next:null},Pn===null){if(Qo===null)throw Error(k(308));Pn=e,Qo.dependencies={lanes:0,firstContext:e}}else Pn=Pn.next=e;return t}var rn=null;function Wa(e){rn===null?rn=[e]:rn.push(e)}function jd(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Wa(t)):(n.next=o.next,o.next=n),t.interleaved=n,Pt(e,r)}function Pt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Lt=!1;function ba(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ct(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ht(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Pt(e,n)}return o=r.interleaved,o===null?(t.next=t,Wa(r)):(t.next=o.next,o.next=t),r.interleaved=t,Pt(e,n)}function wo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ra(e,n)}}function ms(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ho(e,t,n,r){var o=e.updateQueue;Lt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var u=a,s=u.next;u.next=null,l===null?i=s:l.next=s,l=u;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==l&&(a===null?h.firstBaseUpdate=s:a.next=s,h.lastBaseUpdate=u))}if(i!==null){var m=o.baseState;l=0,h=s=u=null,a=i;do{var g=a.lane,S=a.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:S,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,w=a;switch(g=t,S=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){m=x.call(S,m,g);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,g=typeof x=="function"?x.call(S,m,g):x,g==null)break e;m=le({},m,g);break e;case 2:Lt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[a]:g.push(a))}else S={eventTime:S,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(s=h=S,u=m):h=h.next=S,l|=g;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;g=a,a=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(1);if(h===null&&(u=m),o.baseState=u,o.firstBaseUpdate=s,o.lastBaseUpdate=h,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);fn|=l,e.lanes=l,e.memoizedState=m}}function gs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(k(191,o));o.call(r)}}}var Wr={},vt=Kt(Wr),Dr=Kt(Wr),Mr=Kt(Wr);function on(e){if(e===Wr)throw Error(k(174));return e}function Ga(e,t){switch(ee(Mr,t),ee(Dr,e),ee(vt,Wr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Al(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Al(t,e)}ne(vt),ee(vt,t)}function $n(){ne(vt),ne(Dr),ne(Mr)}function Vd(e){on(Mr.current);var t=on(vt.current),n=Al(t,e.type);t!==n&&(ee(Dr,e),ee(vt,n))}function Ya(e){Dr.current===e&&(ne(vt),ne(Dr))}var oe=Kt(0);function Wo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var el=[];function Xa(){for(var e=0;e<el.length;e++)el[e]._workInProgressVersionPrimary=null;el.length=0}var xo=Tt.ReactCurrentDispatcher,tl=Tt.ReactCurrentBatchConfig,dn=0,ie=null,pe=null,ge=null,bo=!1,vr=!1,_r=0,Bg=0;function Te(){throw Error(k(321))}function Ja(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ft(e[n],t[n]))return!1;return!0}function Ka(e,t,n,r,o,i){if(dn=i,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xo.current=e===null||e.memoizedState===null?Qg:Hg,e=n(r,o),vr){i=0;do{if(vr=!1,_r=0,25<=i)throw Error(k(301));i+=1,ge=pe=null,t.updateQueue=null,xo.current=Wg,e=n(r,o)}while(vr)}if(xo.current=Go,t=pe!==null&&pe.next!==null,dn=0,ge=pe=ie=null,bo=!1,t)throw Error(k(300));return e}function Za(){var e=_r!==0;return _r=0,e}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?ie.memoizedState=ge=e:ge=ge.next=e,ge}function ot(){if(pe===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=ge===null?ie.memoizedState:ge.next;if(t!==null)ge=t,pe=e;else{if(e===null)throw Error(k(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},ge===null?ie.memoizedState=ge=e:ge=ge.next=e}return ge}function Fr(e,t){return typeof t=="function"?t(e):t}function nl(e){var t=ot(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=pe,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,u=null,s=i;do{var h=s.lane;if((dn&h)===h)u!==null&&(u=u.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var m={lane:h,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};u===null?(a=u=m,l=r):u=u.next=m,ie.lanes|=h,fn|=h}s=s.next}while(s!==null&&s!==i);u===null?l=r:u.next=a,ft(r,t.memoizedState)||(Ve=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ie.lanes|=i,fn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function rl(e){var t=ot(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);ft(i,t.memoizedState)||(Ve=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Ud(){}function $d(e,t){var n=ie,r=ot(),o=t(),i=!ft(r.memoizedState,o);if(i&&(r.memoizedState=o,Ve=!0),r=r.queue,qa(Wd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ge!==null&&ge.memoizedState.tag&1){if(n.flags|=2048,jr(9,Hd.bind(null,n,r,o,t),void 0,null),ve===null)throw Error(k(349));dn&30||Qd(n,t,o)}return o}function Qd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Hd(e,t,n,r){t.value=n,t.getSnapshot=r,bd(t)&&Gd(e)}function Wd(e,t,n){return n(function(){bd(t)&&Gd(e)})}function bd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ft(e,n)}catch{return!0}}function Gd(e){var t=Pt(e,1);t!==null&&dt(t,e,1,-1)}function vs(e){var t=ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fr,lastRenderedState:e},t.queue=e,e=e.dispatch=$g.bind(null,ie,e),[t.memoizedState,e]}function jr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Yd(){return ot().memoizedState}function So(e,t,n,r){var o=ht();ie.flags|=e,o.memoizedState=jr(1|t,n,void 0,r===void 0?null:r)}function wi(e,t,n,r){var o=ot();r=r===void 0?null:r;var i=void 0;if(pe!==null){var l=pe.memoizedState;if(i=l.destroy,r!==null&&Ja(r,l.deps)){o.memoizedState=jr(t,n,i,r);return}}ie.flags|=e,o.memoizedState=jr(1|t,n,i,r)}function ys(e,t){return So(8390656,8,e,t)}function qa(e,t){return wi(2048,8,e,t)}function Xd(e,t){return wi(4,2,e,t)}function Jd(e,t){return wi(4,4,e,t)}function Kd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Zd(e,t,n){return n=n!=null?n.concat([e]):null,wi(4,4,Kd.bind(null,t,e),n)}function eu(){}function qd(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ja(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ef(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ja(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function tf(e,t,n){return dn&21?(ft(n,t)||(n=ld(),ie.lanes|=n,fn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ve=!0),e.memoizedState=n)}function Vg(e,t){var n=K;K=n!==0&&4>n?n:4,e(!0);var r=tl.transition;tl.transition={};try{e(!1),t()}finally{K=n,tl.transition=r}}function nf(){return ot().memoizedState}function Ug(e,t,n){var r=bt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rf(e))of(t,n);else if(n=jd(e,t,n,r),n!==null){var o=Me();dt(n,e,r,o),lf(n,t,r)}}function $g(e,t,n){var r=bt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rf(e))of(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,ft(a,l)){var u=t.interleaved;u===null?(o.next=o,Wa(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=jd(e,t,o,r),n!==null&&(o=Me(),dt(n,e,r,o),lf(n,t,r))}}function rf(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function of(e,t){vr=bo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function lf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ra(e,n)}}var Go={readContext:rt,useCallback:Te,useContext:Te,useEffect:Te,useImperativeHandle:Te,useInsertionEffect:Te,useLayoutEffect:Te,useMemo:Te,useReducer:Te,useRef:Te,useState:Te,useDebugValue:Te,useDeferredValue:Te,useTransition:Te,useMutableSource:Te,useSyncExternalStore:Te,useId:Te,unstable_isNewReconciler:!1},Qg={readContext:rt,useCallback:function(e,t){return ht().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:ys,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,So(4194308,4,Kd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return So(4194308,4,e,t)},useInsertionEffect:function(e,t){return So(4,2,e,t)},useMemo:function(e,t){var n=ht();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ht();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ug.bind(null,ie,e),[r.memoizedState,e]},useRef:function(e){var t=ht();return e={current:e},t.memoizedState=e},useState:vs,useDebugValue:eu,useDeferredValue:function(e){return ht().memoizedState=e},useTransition:function(){var e=vs(!1),t=e[0];return e=Vg.bind(null,e[1]),ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ie,o=ht();if(re){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),ve===null)throw Error(k(349));dn&30||Qd(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,ys(Wd.bind(null,r,i,e),[e]),r.flags|=2048,jr(9,Hd.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=ht(),t=ve.identifierPrefix;if(re){var n=At,r=kt;n=(r&~(1<<32-ct(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=_r++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Bg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Hg={readContext:rt,useCallback:qd,useContext:rt,useEffect:qa,useImperativeHandle:Zd,useInsertionEffect:Xd,useLayoutEffect:Jd,useMemo:ef,useReducer:nl,useRef:Yd,useState:function(){return nl(Fr)},useDebugValue:eu,useDeferredValue:function(e){var t=ot();return tf(t,pe.memoizedState,e)},useTransition:function(){var e=nl(Fr)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Ud,useSyncExternalStore:$d,useId:nf,unstable_isNewReconciler:!1},Wg={readContext:rt,useCallback:qd,useContext:rt,useEffect:qa,useImperativeHandle:Zd,useInsertionEffect:Xd,useLayoutEffect:Jd,useMemo:ef,useReducer:rl,useRef:Yd,useState:function(){return rl(Fr)},useDebugValue:eu,useDeferredValue:function(e){var t=ot();return pe===null?t.memoizedState=e:tf(t,pe.memoizedState,e)},useTransition:function(){var e=rl(Fr)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Ud,useSyncExternalStore:$d,useId:nf,unstable_isNewReconciler:!1};function at(e,t){if(e&&e.defaultProps){t=le({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Hl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:le({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var xi={isMounted:function(e){return(e=e._reactInternals)?mn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Me(),o=bt(e),i=Ct(r,o);i.payload=t,n!=null&&(i.callback=n),t=Ht(e,i,o),t!==null&&(dt(t,e,o,r),wo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Me(),o=bt(e),i=Ct(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ht(e,i,o),t!==null&&(dt(t,e,o,r),wo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Me(),r=bt(e),o=Ct(n,r);o.tag=2,t!=null&&(o.callback=t),t=Ht(e,o,r),t!==null&&(dt(t,e,r,n),wo(t,e,r))}};function ws(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!zr(n,r)||!zr(o,i):!0}function af(e,t,n){var r=!1,o=Xt,i=t.contextType;return typeof i=="object"&&i!==null?i=rt(i):(o=$e(t)?sn:Oe.current,r=t.contextTypes,i=(r=r!=null)?Bn(e,o):Xt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=xi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function xs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&xi.enqueueReplaceState(t,t.state,null)}function Wl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},ba(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=rt(i):(i=$e(t)?sn:Oe.current,o.context=Bn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Hl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&xi.enqueueReplaceState(o,o.state,null),Ho(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Qn(e,t){try{var n="",r=t;do n+=w0(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function ol(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function bl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var bg=typeof WeakMap=="function"?WeakMap:Map;function uf(e,t,n){n=Ct(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Xo||(Xo=!0,na=r),bl(e,t)},n}function sf(e,t,n){n=Ct(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){bl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){bl(e,t),typeof r!="function"&&(Wt===null?Wt=new Set([this]):Wt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Ss(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new bg;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=l1.bind(null,e,t,n),t.then(e,e))}function ks(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function As(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ct(-1,1),t.tag=2,Ht(n,t,1))),n.lanes|=1),e)}var Gg=Tt.ReactCurrentOwner,Ve=!1;function De(e,t,n,r){t.child=e===null?Fd(t,null,n,r):Un(t,e.child,n,r)}function Cs(e,t,n,r,o){n=n.render;var i=t.ref;return Dn(t,o),r=Ka(e,t,n,r,i,o),n=Za(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Nt(e,t,o)):(re&&n&&Ba(t),t.flags|=1,De(e,t,r,o),t.child)}function Es(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!uu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,cf(e,t,i,r,o)):(e=Eo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:zr,n(l,r)&&e.ref===t.ref)return Nt(e,t,o)}return t.flags|=1,e=Gt(i,r),e.ref=t.ref,e.return=t,t.child=e}function cf(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(zr(i,r)&&e.ref===t.ref)if(Ve=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ve=!0);else return t.lanes=e.lanes,Nt(e,t,o)}return Gl(e,t,n,r,o)}function df(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Tn,We),We|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ee(Tn,We),We|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ee(Tn,We),We|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ee(Tn,We),We|=r;return De(e,t,o,n),t.child}function ff(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Gl(e,t,n,r,o){var i=$e(n)?sn:Oe.current;return i=Bn(t,i),Dn(t,o),n=Ka(e,t,n,r,i,o),r=Za(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Nt(e,t,o)):(re&&r&&Ba(t),t.flags|=1,De(e,t,n,o),t.child)}function Is(e,t,n,r,o){if($e(n)){var i=!0;Bo(t)}else i=!1;if(Dn(t,o),t.stateNode===null)ko(e,t),af(t,n,r),Wl(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var u=l.context,s=n.contextType;typeof s=="object"&&s!==null?s=rt(s):(s=$e(n)?sn:Oe.current,s=Bn(t,s));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||u!==s)&&xs(t,l,r,s),Lt=!1;var g=t.memoizedState;l.state=g,Ho(t,r,l,o),u=t.memoizedState,a!==r||g!==u||Ue.current||Lt?(typeof h=="function"&&(Hl(t,n,h,r),u=t.memoizedState),(a=Lt||ws(t,n,a,r,g,u,s))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=s,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Bd(e,t),a=t.memoizedProps,s=t.type===t.elementType?a:at(t.type,a),l.props=s,m=t.pendingProps,g=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=rt(u):(u=$e(n)?sn:Oe.current,u=Bn(t,u));var S=n.getDerivedStateFromProps;(h=typeof S=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==m||g!==u)&&xs(t,l,r,u),Lt=!1,g=t.memoizedState,l.state=g,Ho(t,r,l,o);var x=t.memoizedState;a!==m||g!==x||Ue.current||Lt?(typeof S=="function"&&(Hl(t,n,S,r),x=t.memoizedState),(s=Lt||ws(t,n,s,r,g,x,u)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=u,r=s):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Yl(e,t,n,r,i,o)}function Yl(e,t,n,r,o,i){ff(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&ds(t,n,!1),Nt(e,t,i);r=t.stateNode,Gg.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Un(t,e.child,null,i),t.child=Un(t,null,a,i)):De(e,t,a,i),t.memoizedState=r.state,o&&ds(t,n,!0),t.child}function pf(e){var t=e.stateNode;t.pendingContext?cs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&cs(e,t.context,!1),Ga(e,t.containerInfo)}function Ps(e,t,n,r,o){return Vn(),Ua(o),t.flags|=256,De(e,t,n,r),t.child}var Xl={dehydrated:null,treeContext:null,retryLane:0};function Jl(e){return{baseLanes:e,cachePool:null,transitions:null}}function hf(e,t,n){var r=t.pendingProps,o=oe.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ee(oe,o&1),e===null)return $l(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Ai(l,r,0,null),e=un(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Jl(n),t.memoizedState=Xl,e):tu(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Yg(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Gt(o,u),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Gt(a,i):(i=un(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Jl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Xl,r}return i=e.child,e=i.sibling,r=Gt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function tu(e,t){return t=Ai({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function uo(e,t,n,r){return r!==null&&Ua(r),Un(t,e.child,null,n),e=tu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yg(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=ol(Error(k(422))),uo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Ai({mode:"visible",children:r.children},o,0,null),i=un(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Un(t,e.child,null,l),t.child.memoizedState=Jl(l),t.memoizedState=Xl,i);if(!(t.mode&1))return uo(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(k(419)),r=ol(i,r,void 0),uo(e,t,l,r)}if(a=(l&e.childLanes)!==0,Ve||a){if(r=ve,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Pt(e,o),dt(r,e,o,-1))}return au(),r=ol(Error(k(421))),uo(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=a1.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,be=Qt(o.nextSibling),Ye=t,re=!0,st=null,e!==null&&(qe[et++]=kt,qe[et++]=At,qe[et++]=cn,kt=e.id,At=e.overflow,cn=t),t=tu(t,r.children),t.flags|=4096,t)}function Ns(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ql(e.return,t,n)}function il(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function mf(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(De(e,t,r.children,n),r=oe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ns(e,n,t);else if(e.tag===19)Ns(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ee(oe,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Wo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),il(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Wo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}il(t,!0,n,null,i);break;case"together":il(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ko(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Nt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=Gt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Gt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Xg(e,t,n){switch(t.tag){case 3:pf(t),Vn();break;case 5:Vd(t);break;case 1:$e(t.type)&&Bo(t);break;case 4:Ga(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ee($o,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ee(oe,oe.current&1),t.flags|=128,null):n&t.child.childLanes?hf(e,t,n):(ee(oe,oe.current&1),e=Nt(e,t,n),e!==null?e.sibling:null);ee(oe,oe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return mf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ee(oe,oe.current),r)break;return null;case 22:case 23:return t.lanes=0,df(e,t,n)}return Nt(e,t,n)}var gf,Kl,vf,yf;gf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Kl=function(){};vf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,on(vt.current);var i=null;switch(n){case"input":o=wl(e,o),r=wl(e,r),i=[];break;case"select":o=le({},o,{value:void 0}),r=le({},r,{value:void 0}),i=[];break;case"textarea":o=kl(e,o),r=kl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Fo)}Cl(n,r);var l;n=null;for(s in o)if(!r.hasOwnProperty(s)&&o.hasOwnProperty(s)&&o[s]!=null)if(s==="style"){var a=o[s];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ar.hasOwnProperty(s)?i||(i=[]):(i=i||[]).push(s,null));for(s in r){var u=r[s];if(a=o!=null?o[s]:void 0,r.hasOwnProperty(s)&&u!==a&&(u!=null||a!=null))if(s==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(i||(i=[]),i.push(s,n)),n=u;else s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(s,u)):s==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(s,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(Ar.hasOwnProperty(s)?(u!=null&&s==="onScroll"&&te("scroll",e),i||a===u||(i=[])):(i=i||[]).push(s,u))}n&&(i=i||[]).push("style",n);var s=i;(t.updateQueue=s)&&(t.flags|=4)}};yf=function(e,t,n,r){n!==r&&(t.flags|=4)};function ir(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Jg(e,t,n){var r=t.pendingProps;switch(Va(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return $e(t.type)&&jo(),ze(t),null;case 3:return r=t.stateNode,$n(),ne(Ue),ne(Oe),Xa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(lo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,st!==null&&(ia(st),st=null))),Kl(e,t),ze(t),null;case 5:Ya(t);var o=on(Mr.current);if(n=t.type,e!==null&&t.stateNode!=null)vf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return ze(t),null}if(e=on(vt.current),lo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[mt]=t,r[Lr]=i,e=(t.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(o=0;o<cr.length;o++)te(cr[o],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":Fu(r,i),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},te("invalid",r);break;case"textarea":Bu(r,i),te("invalid",r)}Cl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&io(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&io(r.textContent,a,e),o=["children",""+a]):Ar.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&te("scroll",r)}switch(n){case"input":Kr(r),ju(r,i,!0);break;case"textarea":Kr(r),Vu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Fo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Wc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[mt]=t,e[Lr]=r,gf(e,t,!1,!1),t.stateNode=e;e:{switch(l=El(n,r),n){case"dialog":te("cancel",e),te("close",e),o=r;break;case"iframe":case"object":case"embed":te("load",e),o=r;break;case"video":case"audio":for(o=0;o<cr.length;o++)te(cr[o],e);o=r;break;case"source":te("error",e),o=r;break;case"img":case"image":case"link":te("error",e),te("load",e),o=r;break;case"details":te("toggle",e),o=r;break;case"input":Fu(e,r),o=wl(e,r),te("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=le({},r,{value:void 0}),te("invalid",e);break;case"textarea":Bu(e,r),o=kl(e,r),te("invalid",e);break;default:o=r}Cl(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?Yc(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&bc(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Cr(e,u):typeof u=="number"&&Cr(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ar.hasOwnProperty(i)?u!=null&&i==="onScroll"&&te("scroll",e):u!=null&&Ea(e,i,u,l))}switch(n){case"input":Kr(e),ju(e,r,!1);break;case"textarea":Kr(e),Vu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Yt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?zn(e,!!r.multiple,i,!1):r.defaultValue!=null&&zn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Fo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ze(t),null;case 6:if(e&&t.stateNode!=null)yf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=on(Mr.current),on(vt.current),lo(t)){if(r=t.stateNode,n=t.memoizedProps,r[mt]=t,(i=r.nodeValue!==n)&&(e=Ye,e!==null))switch(e.tag){case 3:io(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&io(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mt]=t,t.stateNode=r}return ze(t),null;case 13:if(ne(oe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&be!==null&&t.mode&1&&!(t.flags&128))Md(),Vn(),t.flags|=98560,i=!1;else if(i=lo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[mt]=t}else Vn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ze(t),i=!1}else st!==null&&(ia(st),st=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||oe.current&1?he===0&&(he=3):au())),t.updateQueue!==null&&(t.flags|=4),ze(t),null);case 4:return $n(),Kl(e,t),e===null&&Rr(t.stateNode.containerInfo),ze(t),null;case 10:return Ha(t.type._context),ze(t),null;case 17:return $e(t.type)&&jo(),ze(t),null;case 19:if(ne(oe),i=t.memoizedState,i===null)return ze(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)ir(i,!1);else{if(he!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Wo(e),l!==null){for(t.flags|=128,ir(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ee(oe,oe.current&1|2),t.child}e=e.sibling}i.tail!==null&&ce()>Hn&&(t.flags|=128,r=!0,ir(i,!1),t.lanes=4194304)}else{if(!r)if(e=Wo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ir(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!re)return ze(t),null}else 2*ce()-i.renderingStartTime>Hn&&n!==1073741824&&(t.flags|=128,r=!0,ir(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ce(),t.sibling=null,n=oe.current,ee(oe,r?n&1|2:n&1),t):(ze(t),null);case 22:case 23:return lu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?We&1073741824&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function Kg(e,t){switch(Va(t),t.tag){case 1:return $e(t.type)&&jo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $n(),ne(Ue),ne(Oe),Xa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ya(t),null;case 13:if(ne(oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));Vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(oe),null;case 4:return $n(),null;case 10:return Ha(t.type._context),null;case 22:case 23:return lu(),null;case 24:return null;default:return null}}var so=!1,Re=!1,Zg=typeof WeakSet=="function"?WeakSet:Set,M=null;function Nn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ue(e,t,r)}else n.current=null}function Zl(e,t,n){try{n()}catch(r){ue(e,t,r)}}var Ts=!1;function qg(e,t){if(Ml=Do,e=kd(),ja(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,u=-1,s=0,h=0,m=e,g=null;t:for(;;){for(var S;m!==n||o!==0&&m.nodeType!==3||(a=l+o),m!==i||r!==0&&m.nodeType!==3||(u=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(S=m.firstChild)!==null;)g=m,m=S;for(;;){if(m===e)break t;if(g===n&&++s===o&&(a=l),g===i&&++h===r&&(u=l),(S=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=S}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(_l={focusedElem:e,selectionRange:n},Do=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,C=x.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:at(t.type,w),C);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(y){ue(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return x=Ts,Ts=!1,x}function yr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Zl(t,n,i)}o=o.next}while(o!==r)}}function Si(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ql(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function wf(e){var t=e.alternate;t!==null&&(e.alternate=null,wf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mt],delete t[Lr],delete t[Bl],delete t[Mg],delete t[_g])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function xf(e){return e.tag===5||e.tag===3||e.tag===4}function zs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ea(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Fo));else if(r!==4&&(e=e.child,e!==null))for(ea(e,t,n),e=e.sibling;e!==null;)ea(e,t,n),e=e.sibling}function ta(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ta(e,t,n),e=e.sibling;e!==null;)ta(e,t,n),e=e.sibling}var Ae=null,ut=!1;function Rt(e,t,n){for(n=n.child;n!==null;)Sf(e,t,n),n=n.sibling}function Sf(e,t,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(pi,n)}catch{}switch(n.tag){case 5:Re||Nn(n,t);case 6:var r=Ae,o=ut;Ae=null,Rt(e,t,n),Ae=r,ut=o,Ae!==null&&(ut?(e=Ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ae.removeChild(n.stateNode));break;case 18:Ae!==null&&(ut?(e=Ae,n=n.stateNode,e.nodeType===8?Zi(e.parentNode,n):e.nodeType===1&&Zi(e,n),Nr(e)):Zi(Ae,n.stateNode));break;case 4:r=Ae,o=ut,Ae=n.stateNode.containerInfo,ut=!0,Rt(e,t,n),Ae=r,ut=o;break;case 0:case 11:case 14:case 15:if(!Re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Zl(n,t,l),o=o.next}while(o!==r)}Rt(e,t,n);break;case 1:if(!Re&&(Nn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ue(n,t,a)}Rt(e,t,n);break;case 21:Rt(e,t,n);break;case 22:n.mode&1?(Re=(r=Re)||n.memoizedState!==null,Rt(e,t,n),Re=r):Rt(e,t,n);break;default:Rt(e,t,n)}}function Rs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Zg),t.forEach(function(r){var o=u1.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Ae=a.stateNode,ut=!1;break e;case 3:Ae=a.stateNode.containerInfo,ut=!0;break e;case 4:Ae=a.stateNode.containerInfo,ut=!0;break e}a=a.return}if(Ae===null)throw Error(k(160));Sf(i,l,o),Ae=null,ut=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(s){ue(o,t,s)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)kf(t,e),t=t.sibling}function kf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lt(t,e),pt(e),r&4){try{yr(3,e,e.return),Si(3,e)}catch(w){ue(e,e.return,w)}try{yr(5,e,e.return)}catch(w){ue(e,e.return,w)}}break;case 1:lt(t,e),pt(e),r&512&&n!==null&&Nn(n,n.return);break;case 5:if(lt(t,e),pt(e),r&512&&n!==null&&Nn(n,n.return),e.flags&32){var o=e.stateNode;try{Cr(o,"")}catch(w){ue(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Qc(o,i),El(a,l);var s=El(a,i);for(l=0;l<u.length;l+=2){var h=u[l],m=u[l+1];h==="style"?Yc(o,m):h==="dangerouslySetInnerHTML"?bc(o,m):h==="children"?Cr(o,m):Ea(o,h,m,s)}switch(a){case"input":xl(o,i);break;case"textarea":Hc(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var S=i.value;S!=null?zn(o,!!i.multiple,S,!1):g!==!!i.multiple&&(i.defaultValue!=null?zn(o,!!i.multiple,i.defaultValue,!0):zn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Lr]=i}catch(w){ue(e,e.return,w)}}break;case 6:if(lt(t,e),pt(e),r&4){if(e.stateNode===null)throw Error(k(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){ue(e,e.return,w)}}break;case 3:if(lt(t,e),pt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Nr(t.containerInfo)}catch(w){ue(e,e.return,w)}break;case 4:lt(t,e),pt(e);break;case 13:lt(t,e),pt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(ou=ce())),r&4&&Rs(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(Re=(s=Re)||h,lt(t,e),Re=s):lt(t,e),pt(e),r&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!h&&e.mode&1)for(M=e,h=e.child;h!==null;){for(m=M=h;M!==null;){switch(g=M,S=g.child,g.tag){case 0:case 11:case 14:case 15:yr(4,g,g.return);break;case 1:Nn(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){ue(r,n,w)}}break;case 5:Nn(g,g.return);break;case 22:if(g.memoizedState!==null){Ls(m);continue}}S!==null?(S.return=g,M=S):Ls(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{o=m.stateNode,s?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=m.stateNode,u=m.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Gc("display",l))}catch(w){ue(e,e.return,w)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=s?"":m.memoizedProps}catch(w){ue(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:lt(t,e),pt(e),r&4&&Rs(e);break;case 21:break;default:lt(t,e),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(xf(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Cr(o,""),r.flags&=-33);var i=zs(e);ta(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=zs(e);ea(e,a,l);break;default:throw Error(k(161))}}catch(u){ue(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function e1(e,t,n){M=e,Af(e)}function Af(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var o=M,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||so;if(!l){var a=o.alternate,u=a!==null&&a.memoizedState!==null||Re;a=so;var s=Re;if(so=l,(Re=u)&&!s)for(M=o;M!==null;)l=M,u=l.child,l.tag===22&&l.memoizedState!==null?Ds(o):u!==null?(u.return=l,M=u):Ds(o);for(;i!==null;)M=i,Af(i),i=i.sibling;M=o,so=a,Re=s}Os(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,M=i):Os(e)}}function Os(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Re||Si(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Re)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:at(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&gs(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}gs(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var s=t.alternate;if(s!==null){var h=s.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Nr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}Re||t.flags&512&&ql(t)}catch(g){ue(t,t.return,g)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function Ls(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function Ds(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Si(4,t)}catch(u){ue(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){ue(t,o,u)}}var i=t.return;try{ql(t)}catch(u){ue(t,i,u)}break;case 5:var l=t.return;try{ql(t)}catch(u){ue(t,l,u)}}}catch(u){ue(t,t.return,u)}if(t===e){M=null;break}var a=t.sibling;if(a!==null){a.return=t.return,M=a;break}M=t.return}}var t1=Math.ceil,Yo=Tt.ReactCurrentDispatcher,nu=Tt.ReactCurrentOwner,nt=Tt.ReactCurrentBatchConfig,W=0,ve=null,de=null,Ee=0,We=0,Tn=Kt(0),he=0,Br=null,fn=0,ki=0,ru=0,wr=null,Be=null,ou=0,Hn=1/0,wt=null,Xo=!1,na=null,Wt=null,co=!1,jt=null,Jo=0,xr=0,ra=null,Ao=-1,Co=0;function Me(){return W&6?ce():Ao!==-1?Ao:Ao=ce()}function bt(e){return e.mode&1?W&2&&Ee!==0?Ee&-Ee:jg.transition!==null?(Co===0&&(Co=ld()),Co):(e=K,e!==0||(e=window.event,e=e===void 0?16:pd(e.type)),e):1}function dt(e,t,n,r){if(50<xr)throw xr=0,ra=null,Error(k(185));$r(e,n,r),(!(W&2)||e!==ve)&&(e===ve&&(!(W&2)&&(ki|=n),he===4&&Mt(e,Ee)),Qe(e,r),n===1&&W===0&&!(t.mode&1)&&(Hn=ce()+500,yi&&Zt()))}function Qe(e,t){var n=e.callbackNode;j0(e,t);var r=Lo(e,e===ve?Ee:0);if(r===0)n!==null&&Qu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Qu(n),t===1)e.tag===0?Fg(Ms.bind(null,e)):Od(Ms.bind(null,e)),Lg(function(){!(W&6)&&Zt()}),n=null;else{switch(ad(r)){case 1:n=za;break;case 4:n=od;break;case 16:n=Oo;break;case 536870912:n=id;break;default:n=Oo}n=Rf(n,Cf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Cf(e,t){if(Ao=-1,Co=0,W&6)throw Error(k(327));var n=e.callbackNode;if(Mn()&&e.callbackNode!==n)return null;var r=Lo(e,e===ve?Ee:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ko(e,r);else{t=r;var o=W;W|=2;var i=If();(ve!==e||Ee!==t)&&(wt=null,Hn=ce()+500,an(e,t));do try{o1();break}catch(a){Ef(e,a)}while(1);Qa(),Yo.current=i,W=o,de!==null?t=0:(ve=null,Ee=0,t=he)}if(t!==0){if(t===2&&(o=zl(e),o!==0&&(r=o,t=oa(e,o))),t===1)throw n=Br,an(e,0),Mt(e,r),Qe(e,ce()),n;if(t===6)Mt(e,r);else{if(o=e.current.alternate,!(r&30)&&!n1(o)&&(t=Ko(e,r),t===2&&(i=zl(e),i!==0&&(r=i,t=oa(e,i))),t===1))throw n=Br,an(e,0),Mt(e,r),Qe(e,ce()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:en(e,Be,wt);break;case 3:if(Mt(e,r),(r&130023424)===r&&(t=ou+500-ce(),10<t)){if(Lo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Me(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=jl(en.bind(null,e,Be,wt),t);break}en(e,Be,wt);break;case 4:if(Mt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-ct(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*t1(r/1960))-r,10<r){e.timeoutHandle=jl(en.bind(null,e,Be,wt),r);break}en(e,Be,wt);break;case 5:en(e,Be,wt);break;default:throw Error(k(329))}}}return Qe(e,ce()),e.callbackNode===n?Cf.bind(null,e):null}function oa(e,t){var n=wr;return e.current.memoizedState.isDehydrated&&(an(e,t).flags|=256),e=Ko(e,t),e!==2&&(t=Be,Be=n,t!==null&&ia(t)),e}function ia(e){Be===null?Be=e:Be.push.apply(Be,e)}function n1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!ft(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mt(e,t){for(t&=~ru,t&=~ki,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ct(t),r=1<<n;e[n]=-1,t&=~r}}function Ms(e){if(W&6)throw Error(k(327));Mn();var t=Lo(e,0);if(!(t&1))return Qe(e,ce()),null;var n=Ko(e,t);if(e.tag!==0&&n===2){var r=zl(e);r!==0&&(t=r,n=oa(e,r))}if(n===1)throw n=Br,an(e,0),Mt(e,t),Qe(e,ce()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,en(e,Be,wt),Qe(e,ce()),null}function iu(e,t){var n=W;W|=1;try{return e(t)}finally{W=n,W===0&&(Hn=ce()+500,yi&&Zt())}}function pn(e){jt!==null&&jt.tag===0&&!(W&6)&&Mn();var t=W;W|=1;var n=nt.transition,r=K;try{if(nt.transition=null,K=1,e)return e()}finally{K=r,nt.transition=n,W=t,!(W&6)&&Zt()}}function lu(){We=Tn.current,ne(Tn)}function an(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Og(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(Va(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&jo();break;case 3:$n(),ne(Ue),ne(Oe),Xa();break;case 5:Ya(r);break;case 4:$n();break;case 13:ne(oe);break;case 19:ne(oe);break;case 10:Ha(r.type._context);break;case 22:case 23:lu()}n=n.return}if(ve=e,de=e=Gt(e.current,null),Ee=We=t,he=0,Br=null,ru=ki=fn=0,Be=wr=null,rn!==null){for(t=0;t<rn.length;t++)if(n=rn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}rn=null}return e}function Ef(e,t){do{var n=de;try{if(Qa(),xo.current=Go,bo){for(var r=ie.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}bo=!1}if(dn=0,ge=pe=ie=null,vr=!1,_r=0,nu.current=null,n===null||n.return===null){he=1,Br=t,de=null;break}e:{var i=e,l=n.return,a=n,u=t;if(t=Ee,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var s=u,h=a,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var S=ks(l);if(S!==null){S.flags&=-257,As(S,l,a,i,t),S.mode&1&&Ss(i,s,t),t=S,u=s;var x=t.updateQueue;if(x===null){var w=new Set;w.add(u),t.updateQueue=w}else x.add(u);break e}else{if(!(t&1)){Ss(i,s,t),au();break e}u=Error(k(426))}}else if(re&&a.mode&1){var C=ks(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),As(C,l,a,i,t),Ua(Qn(u,a));break e}}i=u=Qn(u,a),he!==4&&(he=2),wr===null?wr=[i]:wr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=uf(i,u,t);ms(i,f);break e;case 1:a=u;var c=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Wt===null||!Wt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=sf(i,a,t);ms(i,y);break e}}i=i.return}while(i!==null)}Nf(n)}catch(A){t=A,de===n&&n!==null&&(de=n=n.return);continue}break}while(1)}function If(){var e=Yo.current;return Yo.current=Go,e===null?Go:e}function au(){(he===0||he===3||he===2)&&(he=4),ve===null||!(fn&268435455)&&!(ki&268435455)||Mt(ve,Ee)}function Ko(e,t){var n=W;W|=2;var r=If();(ve!==e||Ee!==t)&&(wt=null,an(e,t));do try{r1();break}catch(o){Ef(e,o)}while(1);if(Qa(),W=n,Yo.current=r,de!==null)throw Error(k(261));return ve=null,Ee=0,he}function r1(){for(;de!==null;)Pf(de)}function o1(){for(;de!==null&&!T0();)Pf(de)}function Pf(e){var t=zf(e.alternate,e,We);e.memoizedProps=e.pendingProps,t===null?Nf(e):de=t,nu.current=null}function Nf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Kg(n,t),n!==null){n.flags&=32767,de=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{he=6,de=null;return}}else if(n=Jg(n,t,We),n!==null){de=n;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);he===0&&(he=5)}function en(e,t,n){var r=K,o=nt.transition;try{nt.transition=null,K=1,i1(e,t,n,r)}finally{nt.transition=o,K=r}return null}function i1(e,t,n,r){do Mn();while(jt!==null);if(W&6)throw Error(k(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(B0(e,i),e===ve&&(de=ve=null,Ee=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||co||(co=!0,Rf(Oo,function(){return Mn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=nt.transition,nt.transition=null;var l=K;K=1;var a=W;W|=4,nu.current=null,qg(e,n),kf(n,e),Eg(_l),Do=!!Ml,_l=Ml=null,e.current=n,e1(n),z0(),W=a,K=l,nt.transition=i}else e.current=n;if(co&&(co=!1,jt=e,Jo=o),i=e.pendingLanes,i===0&&(Wt=null),L0(n.stateNode),Qe(e,ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Xo)throw Xo=!1,e=na,na=null,e;return Jo&1&&e.tag!==0&&Mn(),i=e.pendingLanes,i&1?e===ra?xr++:(xr=0,ra=e):xr=0,Zt(),null}function Mn(){if(jt!==null){var e=ad(Jo),t=nt.transition,n=K;try{if(nt.transition=null,K=16>e?16:e,jt===null)var r=!1;else{if(e=jt,jt=null,Jo=0,W&6)throw Error(k(331));var o=W;for(W|=4,M=e.current;M!==null;){var i=M,l=i.child;if(M.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var s=a[u];for(M=s;M!==null;){var h=M;switch(h.tag){case 0:case 11:case 15:yr(8,h,i)}var m=h.child;if(m!==null)m.return=h,M=m;else for(;M!==null;){h=M;var g=h.sibling,S=h.return;if(wf(h),h===s){M=null;break}if(g!==null){g.return=S,M=g;break}M=S}}}var x=i.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var C=w.sibling;w.sibling=null,w=C}while(w!==null)}}M=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,M=l;else e:for(;M!==null;){if(i=M,i.flags&2048)switch(i.tag){case 0:case 11:case 15:yr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,M=f;break e}M=i.return}}var c=e.current;for(M=c;M!==null;){l=M;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,M=p;else e:for(l=c;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Si(9,a)}}catch(A){ue(a,a.return,A)}if(a===l){M=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,M=y;break e}M=a.return}}if(W=o,Zt(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(pi,e)}catch{}r=!0}return r}finally{K=n,nt.transition=t}}return!1}function _s(e,t,n){t=Qn(n,t),t=uf(e,t,1),e=Ht(e,t,1),t=Me(),e!==null&&($r(e,1,t),Qe(e,t))}function ue(e,t,n){if(e.tag===3)_s(e,e,n);else for(;t!==null;){if(t.tag===3){_s(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wt===null||!Wt.has(r))){e=Qn(n,e),e=sf(t,e,1),t=Ht(t,e,1),e=Me(),t!==null&&($r(t,1,e),Qe(t,e));break}}t=t.return}}function l1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Me(),e.pingedLanes|=e.suspendedLanes&n,ve===e&&(Ee&n)===n&&(he===4||he===3&&(Ee&130023424)===Ee&&500>ce()-ou?an(e,0):ru|=n),Qe(e,t)}function Tf(e,t){t===0&&(e.mode&1?(t=eo,eo<<=1,!(eo&130023424)&&(eo=4194304)):t=1);var n=Me();e=Pt(e,t),e!==null&&($r(e,t,n),Qe(e,n))}function a1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Tf(e,n)}function u1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Tf(e,n)}var zf;zf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ue.current)Ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ve=!1,Xg(e,t,n);Ve=!!(e.flags&131072)}else Ve=!1,re&&t.flags&1048576&&Ld(t,Uo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ko(e,t),e=t.pendingProps;var o=Bn(t,Oe.current);Dn(t,n),o=Ka(null,t,r,e,o,n);var i=Za();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,$e(r)?(i=!0,Bo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ba(t),o.updater=xi,t.stateNode=o,o._reactInternals=t,Wl(t,r,e,n),t=Yl(null,t,r,!0,i,n)):(t.tag=0,re&&i&&Ba(t),De(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ko(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=c1(r),e=at(r,e),o){case 0:t=Gl(null,t,r,e,n);break e;case 1:t=Is(null,t,r,e,n);break e;case 11:t=Cs(null,t,r,e,n);break e;case 14:t=Es(null,t,r,at(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:at(r,o),Gl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:at(r,o),Is(e,t,r,o,n);case 3:e:{if(pf(t),e===null)throw Error(k(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Bd(e,t),Ho(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Qn(Error(k(423)),t),t=Ps(e,t,r,n,o);break e}else if(r!==o){o=Qn(Error(k(424)),t),t=Ps(e,t,r,n,o);break e}else for(be=Qt(t.stateNode.containerInfo.firstChild),Ye=t,re=!0,st=null,n=Fd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vn(),r===o){t=Nt(e,t,n);break e}De(e,t,r,n)}t=t.child}return t;case 5:return Vd(t),e===null&&$l(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Fl(r,o)?l=null:i!==null&&Fl(r,i)&&(t.flags|=32),ff(e,t),De(e,t,l,n),t.child;case 6:return e===null&&$l(t),null;case 13:return hf(e,t,n);case 4:return Ga(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Un(t,null,r,n):De(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:at(r,o),Cs(e,t,r,o,n);case 7:return De(e,t,t.pendingProps,n),t.child;case 8:return De(e,t,t.pendingProps.children,n),t.child;case 12:return De(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,ee($o,r._currentValue),r._currentValue=l,i!==null)if(ft(i.value,l)){if(i.children===o.children&&!Ue.current){t=Nt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Ct(-1,n&-n),u.tag=2;var s=i.updateQueue;if(s!==null){s=s.shared;var h=s.pending;h===null?u.next=u:(u.next=h.next,h.next=u),s.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ql(i.return,n,t),a.lanes|=n;break}u=u.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(k(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Ql(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}De(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Dn(t,n),o=rt(o),r=r(o),t.flags|=1,De(e,t,r,n),t.child;case 14:return r=t.type,o=at(r,t.pendingProps),o=at(r.type,o),Es(e,t,r,o,n);case 15:return cf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:at(r,o),ko(e,t),t.tag=1,$e(r)?(e=!0,Bo(t)):e=!1,Dn(t,n),af(t,r,o),Wl(t,r,o,n),Yl(null,t,r,!0,e,n);case 19:return mf(e,t,n);case 22:return df(e,t,n)}throw Error(k(156,t.tag))};function Rf(e,t){return rd(e,t)}function s1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tt(e,t,n,r){return new s1(e,t,n,r)}function uu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function c1(e){if(typeof e=="function")return uu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Pa)return 11;if(e===Na)return 14}return 2}function Gt(e,t){var n=e.alternate;return n===null?(n=tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Eo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")uu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case wn:return un(n.children,o,i,t);case Ia:l=8,o|=8;break;case ml:return e=tt(12,n,t,o|2),e.elementType=ml,e.lanes=i,e;case gl:return e=tt(13,n,t,o),e.elementType=gl,e.lanes=i,e;case vl:return e=tt(19,n,t,o),e.elementType=vl,e.lanes=i,e;case Vc:return Ai(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case jc:l=10;break e;case Bc:l=9;break e;case Pa:l=11;break e;case Na:l=14;break e;case Ot:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=tt(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function un(e,t,n,r){return e=tt(7,e,r,t),e.lanes=n,e}function Ai(e,t,n,r){return e=tt(22,e,r,t),e.elementType=Vc,e.lanes=n,e.stateNode={isHidden:!1},e}function ll(e,t,n){return e=tt(6,e,null,t),e.lanes=n,e}function al(e,t,n){return t=tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function d1(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ui(0),this.expirationTimes=Ui(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ui(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function su(e,t,n,r,o,i,l,a,u){return e=new d1(e,t,n,a,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=tt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ba(i),e}function f1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Of(e){if(!e)return Xt;e=e._reactInternals;e:{if(mn(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if($e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if($e(n))return Rd(e,n,t)}return t}function Lf(e,t,n,r,o,i,l,a,u){return e=su(n,r,!0,e,o,i,l,a,u),e.context=Of(null),n=e.current,r=Me(),o=bt(n),i=Ct(r,o),i.callback=t??null,Ht(n,i,o),e.current.lanes=o,$r(e,o,r),Qe(e,r),e}function Ci(e,t,n,r){var o=t.current,i=Me(),l=bt(o);return n=Of(n),t.context===null?t.context=n:t.pendingContext=n,t=Ct(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ht(o,t,l),e!==null&&(dt(e,o,l,i),wo(e,o,l)),l}function Zo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Fs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function cu(e,t){Fs(e,t),(e=e.alternate)&&Fs(e,t)}function p1(){return null}var Df=typeof reportError=="function"?reportError:function(e){console.error(e)};function du(e){this._internalRoot=e}Ei.prototype.render=du.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Ci(e,t,null,null)};Ei.prototype.unmount=du.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pn(function(){Ci(null,e,null,null)}),t[It]=null}};function Ei(e){this._internalRoot=e}Ei.prototype.unstable_scheduleHydration=function(e){if(e){var t=cd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Dt.length&&t!==0&&t<Dt[n].priority;n++);Dt.splice(n,0,e),n===0&&fd(e)}};function fu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ii(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function js(){}function h1(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var s=Zo(l);i.call(s)}}var l=Lf(t,r,e,0,null,!1,!1,"",js);return e._reactRootContainer=l,e[It]=l.current,Rr(e.nodeType===8?e.parentNode:e),pn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var s=Zo(u);a.call(s)}}var u=su(e,0,!1,null,null,!1,!1,"",js);return e._reactRootContainer=u,e[It]=u.current,Rr(e.nodeType===8?e.parentNode:e),pn(function(){Ci(t,u,n,r)}),u}function Pi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var u=Zo(l);a.call(u)}}Ci(t,l,e,o)}else l=h1(n,t,e,o,r);return Zo(l)}ud=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=sr(t.pendingLanes);n!==0&&(Ra(t,n|1),Qe(t,ce()),!(W&6)&&(Hn=ce()+500,Zt()))}break;case 13:pn(function(){var r=Pt(e,1);if(r!==null){var o=Me();dt(r,e,1,o)}}),cu(e,1)}};Oa=function(e){if(e.tag===13){var t=Pt(e,134217728);if(t!==null){var n=Me();dt(t,e,134217728,n)}cu(e,134217728)}};sd=function(e){if(e.tag===13){var t=bt(e),n=Pt(e,t);if(n!==null){var r=Me();dt(n,e,t,r)}cu(e,t)}};cd=function(){return K};dd=function(e,t){var n=K;try{return K=e,t()}finally{K=n}};Pl=function(e,t,n){switch(t){case"input":if(xl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=vi(r);if(!o)throw Error(k(90));$c(r),xl(r,o)}}}break;case"textarea":Hc(e,n);break;case"select":t=n.value,t!=null&&zn(e,!!n.multiple,t,!1)}};Kc=iu;Zc=pn;var m1={usingClientEntryPoint:!1,Events:[Hr,An,vi,Xc,Jc,iu]},lr={findFiberByHostInstance:nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},g1={bundleType:lr.bundleType,version:lr.version,rendererPackageName:lr.rendererPackageName,rendererConfig:lr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=td(e),e===null?null:e.stateNode},findFiberByHostInstance:lr.findFiberByHostInstance||p1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fo.isDisabled&&fo.supportsFiber)try{pi=fo.inject(g1),gt=fo}catch{}}Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m1;Ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fu(t))throw Error(k(200));return f1(e,t,null,n)};Ke.createRoot=function(e,t){if(!fu(e))throw Error(k(299));var n=!1,r="",o=Df;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=su(e,1,!1,null,null,n,!1,r,o),e[It]=t.current,Rr(e.nodeType===8?e.parentNode:e),new du(t)};Ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=td(t),e=e===null?null:e.stateNode,e};Ke.flushSync=function(e){return pn(e)};Ke.hydrate=function(e,t,n){if(!Ii(t))throw Error(k(200));return Pi(null,e,t,!0,n)};Ke.hydrateRoot=function(e,t,n){if(!fu(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Df;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Lf(t,null,e,1,n??null,o,!1,i,l),e[It]=t.current,Rr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ei(t)};Ke.render=function(e,t,n){if(!Ii(t))throw Error(k(200));return Pi(null,e,t,!1,n)};Ke.unmountComponentAtNode=function(e){if(!Ii(e))throw Error(k(40));return e._reactRootContainer?(pn(function(){Pi(null,null,e,!1,function(){e._reactRootContainer=null,e[It]=null})}),!0):!1};Ke.unstable_batchedUpdates=iu;Ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ii(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Pi(e,t,n,!1,r)};Ke.version="18.3.1-next-f1338f8080-20240426";function Mf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mf)}catch(e){console.error(e)}}Mf(),Dc.exports=Ke;var v1=Dc.exports,Bs=v1;pl.createRoot=Bs.createRoot,pl.hydrateRoot=Bs.hydrateRoot;/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qo(){return qo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qo.apply(this,arguments)}var ln;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ln||(ln={}));const Vs="popstate";function y1(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:l,hash:a}=r.location;return la("",{pathname:i,search:l,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Ff(o)}return x1(t,n,null,e)}function _f(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function w1(){return Math.random().toString(36).substr(2,8)}function Us(e,t){return{usr:e.state,key:e.key,idx:t}}function la(e,t,n,r){return n===void 0&&(n=null),qo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?jf(t):t,{state:n,key:t&&t.key||r||w1()})}function Ff(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function jf(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function x1(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,a=ln.Pop,u=null,s=h();s==null&&(s=0,l.replaceState(qo({},l.state,{idx:s}),""));function h(){return(l.state||{idx:null}).idx}function m(){a=ln.Pop;let C=h(),f=C==null?null:C-s;s=C,u&&u({action:a,location:w.location,delta:f})}function g(C,f){a=ln.Push;let c=la(w.location,C,f);n&&n(c,C),s=h()+1;let p=Us(c,s),y=w.createHref(c);try{l.pushState(p,"",y)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;o.location.assign(y)}i&&u&&u({action:a,location:w.location,delta:1})}function S(C,f){a=ln.Replace;let c=la(w.location,C,f);n&&n(c,C),s=h();let p=Us(c,s),y=w.createHref(c);l.replaceState(p,"",y),i&&u&&u({action:a,location:w.location,delta:0})}function x(C){let f=o.location.origin!=="null"?o.location.origin:o.location.href,c=typeof C=="string"?C:Ff(C);return c=c.replace(/ $/,"%20"),_f(f,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,f)}let w={get action(){return a},get location(){return e(o,l)},listen(C){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(Vs,m),u=C,()=>{o.removeEventListener(Vs,m),u=null}},createHref(C){return t(o,C)},createURL:x,encodeLocation(C){let f=x(C);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:S,go(C){return l.go(C)}};return w}var $s;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})($s||($s={}));function S1(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Bf=["post","put","patch","delete"];new Set(Bf);const k1=["get",...Bf];new Set(k1);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function aa(){return aa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},aa.apply(this,arguments)}const A1=T.createContext(null),Vf=T.createContext(null);function C1(){return T.useContext(Vf)!=null}function E1(e){let{basename:t="/",children:n=null,location:r,navigationType:o=ln.Pop,navigator:i,static:l=!1,future:a}=e;C1()&&_f(!1);let u=t.replace(/^\/*/,"/"),s=T.useMemo(()=>({basename:u,navigator:i,static:l,future:aa({v7_relativeSplatPath:!1},a)}),[u,a,i,l]);typeof r=="string"&&(r=jf(r));let{pathname:h="/",search:m="",hash:g="",state:S=null,key:x="default"}=r,w=T.useMemo(()=>{let C=S1(h,u);return C==null?null:{location:{pathname:C,search:m,hash:g,state:S,key:x},navigationType:o}},[u,h,m,g,S,x,o]);return w==null?null:T.createElement(A1.Provider,{value:s},T.createElement(Vf.Provider,{children:n,value:w}))}new Promise(()=>{});/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const I1="6";try{window.__reactRouterVersion=I1}catch{}const P1="startTransition",Qs=rp[P1];function N1(e){let{basename:t,children:n,future:r,window:o}=e,i=T.useRef();i.current==null&&(i.current=y1({window:o,v5Compat:!0}));let l=i.current,[a,u]=T.useState({action:l.action,location:l.location}),{v7_startTransition:s}=r||{},h=T.useCallback(m=>{s&&Qs?Qs(()=>u(m)):u(m)},[u,s]);return T.useLayoutEffect(()=>l.listen(h),[l,h]),T.createElement(E1,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l,future:r})}var Hs;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Hs||(Hs={}));var Ws;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ws||(Ws={}));pl.createRoot(document.getElementById("root")).render(d(bn.StrictMode,{children:d(xh,{children:d(N1,{children:d(f0,{})})})}));
