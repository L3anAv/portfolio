function op(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function ac(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var uc={exports:{}},ni={},sc={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ur=Symbol.for("react.element"),ip=Symbol.for("react.portal"),lp=Symbol.for("react.fragment"),ap=Symbol.for("react.strict_mode"),up=Symbol.for("react.profiler"),sp=Symbol.for("react.provider"),cp=Symbol.for("react.context"),dp=Symbol.for("react.forward_ref"),fp=Symbol.for("react.suspense"),pp=Symbol.for("react.memo"),hp=Symbol.for("react.lazy"),Pu=Symbol.iterator;function mp(e){return e===null||typeof e!="object"?null:(e=Pu&&e[Pu]||e["@@iterator"],typeof e=="function"?e:null)}var cc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},dc=Object.assign,fc={};function Gn(e,t,n){this.props=e,this.context=t,this.refs=fc,this.updater=n||cc}Gn.prototype.isReactComponent={};Gn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Gn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function pc(){}pc.prototype=Gn.prototype;function xa(e,t,n){this.props=e,this.context=t,this.refs=fc,this.updater=n||cc}var Sa=xa.prototype=new pc;Sa.constructor=xa;dc(Sa,Gn.prototype);Sa.isPureReactComponent=!0;var Nu=Array.isArray,hc=Object.prototype.hasOwnProperty,ka={current:null},mc={key:!0,ref:!0,__self:!0,__source:!0};function gc(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)hc.call(t,r)&&!mc.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+2];o.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Ur,type:e,key:i,ref:l,props:o,_owner:ka.current}}function gp(e,t){return{$$typeof:Ur,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Aa(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ur}function vp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Tu=/\/+/g;function Ui(e,t){return typeof e=="object"&&e!==null&&e.key!=null?vp(""+e.key):t.toString(36)}function mo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Ur:case ip:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Ui(l,0):r,Nu(o)?(n="",e!=null&&(n=e.replace(Tu,"$&/")+"/"),mo(o,t,n,"",function(s){return s})):o!=null&&(Aa(o)&&(o=gp(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Tu,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Nu(e))for(var a=0;a<e.length;a++){i=e[a];var u=r+Ui(i,a);l+=mo(i,t,n,u,o)}else if(u=mp(e),typeof u=="function")for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=r+Ui(i,a++),l+=mo(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Jr(e,t,n){if(e==null)return e;var r=[],o=0;return mo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function yp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Fe={current:null},go={transition:null},wp={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:go,ReactCurrentOwner:ka};function vc(){throw Error("act(...) is not supported in production builds of React.")}Q.Children={map:Jr,forEach:function(e,t,n){Jr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Jr(e,function(){t++}),t},toArray:function(e){return Jr(e,function(t){return t})||[]},only:function(e){if(!Aa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=Gn;Q.Fragment=lp;Q.Profiler=up;Q.PureComponent=xa;Q.StrictMode=ap;Q.Suspense=fp;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wp;Q.act=vc;Q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=dc({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=ka.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)hc.call(t,u)&&!mc.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var s=0;s<u;s++)a[s]=arguments[s+2];r.children=a}return{$$typeof:Ur,type:e.type,key:o,ref:i,props:r,_owner:l}};Q.createContext=function(e){return e={$$typeof:cp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:sp,_context:e},e.Consumer=e};Q.createElement=gc;Q.createFactory=function(e){var t=gc.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:dp,render:e}};Q.isValidElement=Aa;Q.lazy=function(e){return{$$typeof:hp,_payload:{_status:-1,_result:e},_init:yp}};Q.memo=function(e,t){return{$$typeof:pp,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=go.transition;go.transition={};try{e()}finally{go.transition=t}};Q.unstable_act=vc;Q.useCallback=function(e,t){return Fe.current.useCallback(e,t)};Q.useContext=function(e){return Fe.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return Fe.current.useDeferredValue(e)};Q.useEffect=function(e,t){return Fe.current.useEffect(e,t)};Q.useId=function(){return Fe.current.useId()};Q.useImperativeHandle=function(e,t,n){return Fe.current.useImperativeHandle(e,t,n)};Q.useInsertionEffect=function(e,t){return Fe.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return Fe.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return Fe.current.useMemo(e,t)};Q.useReducer=function(e,t,n){return Fe.current.useReducer(e,t,n)};Q.useRef=function(e){return Fe.current.useRef(e)};Q.useState=function(e){return Fe.current.useState(e)};Q.useSyncExternalStore=function(e,t,n){return Fe.current.useSyncExternalStore(e,t,n)};Q.useTransition=function(){return Fe.current.useTransition()};Q.version="18.3.1";sc.exports=Q;var T=sc.exports;const Yn=ac(T),xp=op({__proto__:null,default:Yn},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sp=T,kp=Symbol.for("react.element"),Ap=Symbol.for("react.fragment"),Cp=Object.prototype.hasOwnProperty,Ep=Sp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ip={key:!0,ref:!0,__self:!0,__source:!0};function yc(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Cp.call(t,r)&&!Ip.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:kp,type:e,key:i,ref:l,props:o,_owner:Ep.current}}ni.Fragment=Ap;ni.jsx=yc;ni.jsxs=yc;uc.exports=ni;var Ca=uc.exports;const nt=Ca.Fragment,d=Ca.jsx,N=Ca.jsxs;const wc="/assets/click-944ee250.ogg",Pp="/assets/entrada-f7768463.ogg";var xc={exports:{}},K={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ea=Symbol.for("react.element"),Ia=Symbol.for("react.portal"),ri=Symbol.for("react.fragment"),oi=Symbol.for("react.strict_mode"),ii=Symbol.for("react.profiler"),li=Symbol.for("react.provider"),ai=Symbol.for("react.context"),Np=Symbol.for("react.server_context"),ui=Symbol.for("react.forward_ref"),si=Symbol.for("react.suspense"),ci=Symbol.for("react.suspense_list"),di=Symbol.for("react.memo"),fi=Symbol.for("react.lazy"),Tp=Symbol.for("react.offscreen"),Sc;Sc=Symbol.for("react.module.reference");function lt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ea:switch(e=e.type,e){case ri:case ii:case oi:case si:case ci:return e;default:switch(e=e&&e.$$typeof,e){case Np:case ai:case ui:case fi:case di:case li:return e;default:return t}}case Ia:return t}}}K.ContextConsumer=ai;K.ContextProvider=li;K.Element=Ea;K.ForwardRef=ui;K.Fragment=ri;K.Lazy=fi;K.Memo=di;K.Portal=Ia;K.Profiler=ii;K.StrictMode=oi;K.Suspense=si;K.SuspenseList=ci;K.isAsyncMode=function(){return!1};K.isConcurrentMode=function(){return!1};K.isContextConsumer=function(e){return lt(e)===ai};K.isContextProvider=function(e){return lt(e)===li};K.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ea};K.isForwardRef=function(e){return lt(e)===ui};K.isFragment=function(e){return lt(e)===ri};K.isLazy=function(e){return lt(e)===fi};K.isMemo=function(e){return lt(e)===di};K.isPortal=function(e){return lt(e)===Ia};K.isProfiler=function(e){return lt(e)===ii};K.isStrictMode=function(e){return lt(e)===oi};K.isSuspense=function(e){return lt(e)===si};K.isSuspenseList=function(e){return lt(e)===ci};K.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ri||e===ii||e===oi||e===si||e===ci||e===Tp||typeof e=="object"&&e!==null&&(e.$$typeof===fi||e.$$typeof===di||e.$$typeof===li||e.$$typeof===ai||e.$$typeof===ui||e.$$typeof===Sc||e.getModuleId!==void 0)};K.typeOf=lt;xc.exports=K;var kc=xc.exports;function zp(e){function t(z,R,D,B,v){for(var W=0,P=0,ue=0,Y=0,Z,U,Se=0,Be=0,G,Te=G=Z=0,J=0,ke=0,qn=0,Ae=0,Yr=D.length,er=Yr-1,at,$="",ce="",Vi="",$i="",Ot;J<Yr;){if(U=D.charCodeAt(J),J===er&&P+Y+ue+W!==0&&(P!==0&&(U=P===47?10:47),Y=ue=W=0,Yr++,er++),P+Y+ue+W===0){if(J===er&&(0<ke&&($=$.replace(g,"")),0<$.trim().length)){switch(U){case 32:case 9:case 59:case 13:case 10:break;default:$+=D.charAt(J)}U=59}switch(U){case 123:for($=$.trim(),Z=$.charCodeAt(0),G=1,Ae=++J;J<Yr;){switch(U=D.charCodeAt(J)){case 123:G++;break;case 125:G--;break;case 47:switch(U=D.charCodeAt(J+1)){case 42:case 47:e:{for(Te=J+1;Te<er;++Te)switch(D.charCodeAt(Te)){case 47:if(U===42&&D.charCodeAt(Te-1)===42&&J+2!==Te){J=Te+1;break e}break;case 10:if(U===47){J=Te+1;break e}}J=Te}}break;case 91:U++;case 40:U++;case 34:case 39:for(;J++<er&&D.charCodeAt(J)!==U;);}if(G===0)break;J++}switch(G=D.substring(Ae,J),Z===0&&(Z=($=$.replace(m,"").trim()).charCodeAt(0)),Z){case 64:switch(0<ke&&($=$.replace(g,"")),U=$.charCodeAt(1),U){case 100:case 109:case 115:case 45:ke=R;break;default:ke=xt}if(G=t(R,ke,G,U,v+1),Ae=G.length,0<I&&(ke=n(xt,$,qn),Ot=a(3,G,ke,R,xe,pe,Ae,U,v,B),$=ke.join(""),Ot!==void 0&&(Ae=(G=Ot.trim()).length)===0&&(U=0,G="")),0<Ae)switch(U){case 115:$=$.replace(O,l);case 100:case 109:case 45:G=$+"{"+G+"}";break;case 107:$=$.replace(c,"$1 $2"),G=$+"{"+G+"}",G=Ne===1||Ne===2&&i("@"+G,3)?"@-webkit-"+G+"@"+G:"@"+G;break;default:G=$+G,B===112&&(G=(ce+=G,""))}else G="";break;default:G=t(R,n(R,$,qn),G,B,v+1)}Vi+=G,G=qn=ke=Te=Z=0,$="",U=D.charCodeAt(++J);break;case 125:case 59:if($=(0<ke?$.replace(g,""):$).trim(),1<(Ae=$.length))switch(Te===0&&(Z=$.charCodeAt(0),Z===45||96<Z&&123>Z)&&(Ae=($=$.replace(" ",":")).length),0<I&&(Ot=a(1,$,R,z,xe,pe,ce.length,B,v,B))!==void 0&&(Ae=($=Ot.trim()).length)===0&&($="\0\0"),Z=$.charCodeAt(0),U=$.charCodeAt(1),Z){case 0:break;case 64:if(U===105||U===99){$i+=$+D.charAt(J);break}default:$.charCodeAt(Ae-1)!==58&&(ce+=o($,Z,U,$.charCodeAt(2)))}qn=ke=Te=Z=0,$="",U=D.charCodeAt(++J)}}switch(U){case 13:case 10:P===47?P=0:1+Z===0&&B!==107&&0<$.length&&(ke=1,$+="\0"),0<I*j&&a(0,$,R,z,xe,pe,ce.length,B,v,B),pe=1,xe++;break;case 59:case 125:if(P+Y+ue+W===0){pe++;break}default:switch(pe++,at=D.charAt(J),U){case 9:case 32:if(Y+W+P===0)switch(Se){case 44:case 58:case 9:case 32:at="";break;default:U!==32&&(at=" ")}break;case 0:at="\\0";break;case 12:at="\\f";break;case 11:at="\\v";break;case 38:Y+P+W===0&&(ke=qn=1,at="\f"+at);break;case 108:if(Y+P+W+He===0&&0<Te)switch(J-Te){case 2:Se===112&&D.charCodeAt(J-3)===58&&(He=Se);case 8:Be===111&&(He=Be)}break;case 58:Y+P+W===0&&(Te=J);break;case 44:P+ue+Y+W===0&&(ke=1,at+="\r");break;case 34:case 39:P===0&&(Y=Y===U?0:Y===0?U:Y);break;case 91:Y+P+ue===0&&W++;break;case 93:Y+P+ue===0&&W--;break;case 41:Y+P+W===0&&ue--;break;case 40:if(Y+P+W===0){if(Z===0)switch(2*Se+3*Be){case 533:break;default:Z=1}ue++}break;case 64:P+ue+Y+W+Te+G===0&&(G=1);break;case 42:case 47:if(!(0<Y+W+ue))switch(P){case 0:switch(2*U+3*D.charCodeAt(J+1)){case 235:P=47;break;case 220:Ae=J,P=42}break;case 42:U===47&&Se===42&&Ae+2!==J&&(D.charCodeAt(Ae+2)===33&&(ce+=D.substring(Ae,J+1)),at="",P=0)}}P===0&&($+=at)}Be=Se,Se=U,J++}if(Ae=ce.length,0<Ae){if(ke=R,0<I&&(Ot=a(2,ce,ke,z,xe,pe,Ae,B,v,B),Ot!==void 0&&(ce=Ot).length===0))return $i+ce+Vi;if(ce=ke.join(",")+"{"+ce+"}",Ne*He!==0){switch(Ne!==2||i(ce,2)||(He=0),He){case 111:ce=ce.replace(y,":-moz-$1")+ce;break;case 112:ce=ce.replace(p,"::-webkit-input-$1")+ce.replace(p,"::-moz-$1")+ce.replace(p,":-ms-input-$1")+ce}He=0}}return $i+ce+Vi}function n(z,R,D){var B=R.trim().split(C);R=B;var v=B.length,W=z.length;switch(W){case 0:case 1:var P=0;for(z=W===0?"":z[0]+" ";P<v;++P)R[P]=r(z,R[P],D).trim();break;default:var ue=P=0;for(R=[];P<v;++P)for(var Y=0;Y<W;++Y)R[ue++]=r(z[Y]+" ",B[P],D).trim()}return R}function r(z,R,D){var B=R.charCodeAt(0);switch(33>B&&(B=(R=R.trim()).charCodeAt(0)),B){case 38:return R.replace(f,"$1"+z.trim());case 58:return z.trim()+R.replace(f,"$1"+z.trim());default:if(0<1*D&&0<R.indexOf("\f"))return R.replace(f,(z.charCodeAt(0)===58?"":"$1")+z.trim())}return z+R}function o(z,R,D,B){var v=z+";",W=2*R+3*D+4*B;if(W===944){z=v.indexOf(":",9)+1;var P=v.substring(z,v.length-1).trim();return P=v.substring(0,z).trim()+P+";",Ne===1||Ne===2&&i(P,1)?"-webkit-"+P+P:P}if(Ne===0||Ne===2&&!i(v,1))return v;switch(W){case 1015:return v.charCodeAt(10)===97?"-webkit-"+v+v:v;case 951:return v.charCodeAt(3)===116?"-webkit-"+v+v:v;case 963:return v.charCodeAt(5)===110?"-webkit-"+v+v:v;case 1009:if(v.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+v+v;case 978:return"-webkit-"+v+"-moz-"+v+v;case 1019:case 983:return"-webkit-"+v+"-moz-"+v+"-ms-"+v+v;case 883:if(v.charCodeAt(8)===45)return"-webkit-"+v+v;if(0<v.indexOf("image-set(",11))return v.replace(ge,"$1-webkit-$2")+v;break;case 932:if(v.charCodeAt(4)===45)switch(v.charCodeAt(5)){case 103:return"-webkit-box-"+v.replace("-grow","")+"-webkit-"+v+"-ms-"+v.replace("grow","positive")+v;case 115:return"-webkit-"+v+"-ms-"+v.replace("shrink","negative")+v;case 98:return"-webkit-"+v+"-ms-"+v.replace("basis","preferred-size")+v}return"-webkit-"+v+"-ms-"+v+v;case 964:return"-webkit-"+v+"-ms-flex-"+v+v;case 1023:if(v.charCodeAt(8)!==99)break;return P=v.substring(v.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+P+"-webkit-"+v+"-ms-flex-pack"+P+v;case 1005:return x.test(v)?v.replace(S,":-webkit-")+v.replace(S,":-moz-")+v:v;case 1e3:switch(P=v.substring(13).trim(),R=P.indexOf("-")+1,P.charCodeAt(0)+P.charCodeAt(R)){case 226:P=v.replace(A,"tb");break;case 232:P=v.replace(A,"tb-rl");break;case 220:P=v.replace(A,"lr");break;default:return v}return"-webkit-"+v+"-ms-"+P+v;case 1017:if(v.indexOf("sticky",9)===-1)break;case 975:switch(R=(v=z).length-10,P=(v.charCodeAt(R)===33?v.substring(0,R):v).substring(z.indexOf(":",7)+1).trim(),W=P.charCodeAt(0)+(P.charCodeAt(7)|0)){case 203:if(111>P.charCodeAt(8))break;case 115:v=v.replace(P,"-webkit-"+P)+";"+v;break;case 207:case 102:v=v.replace(P,"-webkit-"+(102<W?"inline-":"")+"box")+";"+v.replace(P,"-webkit-"+P)+";"+v.replace(P,"-ms-"+P+"box")+";"+v}return v+";";case 938:if(v.charCodeAt(5)===45)switch(v.charCodeAt(6)){case 105:return P=v.replace("-items",""),"-webkit-"+v+"-webkit-box-"+P+"-ms-flex-"+P+v;case 115:return"-webkit-"+v+"-ms-flex-item-"+v.replace(L,"")+v;default:return"-webkit-"+v+"-ms-flex-line-pack"+v.replace("align-content","").replace(L,"")+v}break;case 973:case 989:if(v.charCodeAt(3)!==45||v.charCodeAt(4)===122)break;case 931:case 953:if(V.test(z)===!0)return(P=z.substring(z.indexOf(":")+1)).charCodeAt(0)===115?o(z.replace("stretch","fill-available"),R,D,B).replace(":fill-available",":stretch"):v.replace(P,"-webkit-"+P)+v.replace(P,"-moz-"+P.replace("fill-",""))+v;break;case 962:if(v="-webkit-"+v+(v.charCodeAt(5)===102?"-ms-"+v:"")+v,D+B===211&&v.charCodeAt(13)===105&&0<v.indexOf("transform",10))return v.substring(0,v.indexOf(";",27)+1).replace(w,"$1-webkit-$2")+v}return v}function i(z,R){var D=z.indexOf(R===1?":":"{"),B=z.substring(0,R!==3?D:10);return D=z.substring(D+1,z.length-1),F(R!==2?B:B.replace(b,"$1"),D,R)}function l(z,R){var D=o(R,R.charCodeAt(0),R.charCodeAt(1),R.charCodeAt(2));return D!==R+";"?D.replace(_," or ($1)").substring(4):"("+R+")"}function a(z,R,D,B,v,W,P,ue,Y,Z){for(var U=0,Se=R,Be;U<I;++U)switch(Be=De[U].call(h,z,Se,D,B,v,W,P,ue,Y,Z)){case void 0:case!1:case!0:case null:break;default:Se=Be}if(Se!==R)return Se}function u(z){switch(z){case void 0:case null:I=De.length=0;break;default:if(typeof z=="function")De[I++]=z;else if(typeof z=="object")for(var R=0,D=z.length;R<D;++R)u(z[R]);else j=!!z|0}return u}function s(z){return z=z.prefix,z!==void 0&&(F=null,z?typeof z!="function"?Ne=1:(Ne=2,F=z):Ne=0),s}function h(z,R){var D=z;if(33>D.charCodeAt(0)&&(D=D.trim()),ee=D,D=[ee],0<I){var B=a(-1,R,D,D,xe,pe,0,0,0,0);B!==void 0&&typeof B=="string"&&(R=B)}var v=t(xt,D,R,0,0);return 0<I&&(B=a(-2,v,D,D,xe,pe,v.length,0,0,0),B!==void 0&&(v=B)),ee="",He=0,pe=xe=1,v}var m=/^\0+/g,g=/[\0\r\f]/g,S=/: */g,x=/zoo|gra/,w=/([,: ])(transform)/g,C=/,\r+?/g,f=/([\t\r\n ])*\f?&/g,c=/@(k\w+)\s*(\S*)\s*/,p=/::(place)/g,y=/:(read-only)/g,A=/[svh]\w+-[tblr]{2}/,O=/\(\s*(.*)\s*\)/g,_=/([\s\S]*?);/g,L=/-self|flex-/g,b=/[^]*?(:[rp][el]a[\w-]+)[^]*/,V=/stretch|:\s*\w+\-(?:conte|avail)/,ge=/([^-])(image-set\()/,pe=1,xe=1,He=0,Ne=1,xt=[],De=[],I=0,F=null,j=0,ee="";return h.use=u,h.set=s,e!==void 0&&s(e),h}var Rp={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Op(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Lp=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,zu=Op(function(e){return Lp.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Ac={exports:{}},q={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var we=typeof Symbol=="function"&&Symbol.for,Pa=we?Symbol.for("react.element"):60103,Na=we?Symbol.for("react.portal"):60106,pi=we?Symbol.for("react.fragment"):60107,hi=we?Symbol.for("react.strict_mode"):60108,mi=we?Symbol.for("react.profiler"):60114,gi=we?Symbol.for("react.provider"):60109,vi=we?Symbol.for("react.context"):60110,Ta=we?Symbol.for("react.async_mode"):60111,yi=we?Symbol.for("react.concurrent_mode"):60111,wi=we?Symbol.for("react.forward_ref"):60112,xi=we?Symbol.for("react.suspense"):60113,Dp=we?Symbol.for("react.suspense_list"):60120,Si=we?Symbol.for("react.memo"):60115,ki=we?Symbol.for("react.lazy"):60116,Mp=we?Symbol.for("react.block"):60121,_p=we?Symbol.for("react.fundamental"):60117,Fp=we?Symbol.for("react.responder"):60118,jp=we?Symbol.for("react.scope"):60119;function Ze(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Pa:switch(e=e.type,e){case Ta:case yi:case pi:case mi:case hi:case xi:return e;default:switch(e=e&&e.$$typeof,e){case vi:case wi:case ki:case Si:case gi:return e;default:return t}}case Na:return t}}}function Cc(e){return Ze(e)===yi}q.AsyncMode=Ta;q.ConcurrentMode=yi;q.ContextConsumer=vi;q.ContextProvider=gi;q.Element=Pa;q.ForwardRef=wi;q.Fragment=pi;q.Lazy=ki;q.Memo=Si;q.Portal=Na;q.Profiler=mi;q.StrictMode=hi;q.Suspense=xi;q.isAsyncMode=function(e){return Cc(e)||Ze(e)===Ta};q.isConcurrentMode=Cc;q.isContextConsumer=function(e){return Ze(e)===vi};q.isContextProvider=function(e){return Ze(e)===gi};q.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Pa};q.isForwardRef=function(e){return Ze(e)===wi};q.isFragment=function(e){return Ze(e)===pi};q.isLazy=function(e){return Ze(e)===ki};q.isMemo=function(e){return Ze(e)===Si};q.isPortal=function(e){return Ze(e)===Na};q.isProfiler=function(e){return Ze(e)===mi};q.isStrictMode=function(e){return Ze(e)===hi};q.isSuspense=function(e){return Ze(e)===xi};q.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===pi||e===yi||e===mi||e===hi||e===xi||e===Dp||typeof e=="object"&&e!==null&&(e.$$typeof===ki||e.$$typeof===Si||e.$$typeof===gi||e.$$typeof===vi||e.$$typeof===wi||e.$$typeof===_p||e.$$typeof===Fp||e.$$typeof===jp||e.$$typeof===Mp)};q.typeOf=Ze;Ac.exports=q;var Bp=Ac.exports,za=Bp,Vp={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},$p={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Up={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ec={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ra={};Ra[za.ForwardRef]=Up;Ra[za.Memo]=Ec;function Ru(e){return za.isMemo(e)?Ec:Ra[e.$$typeof]||Vp}var Qp=Object.defineProperty,Wp=Object.getOwnPropertyNames,Ou=Object.getOwnPropertySymbols,Hp=Object.getOwnPropertyDescriptor,bp=Object.getPrototypeOf,Lu=Object.prototype;function Ic(e,t,n){if(typeof t!="string"){if(Lu){var r=bp(t);r&&r!==Lu&&Ic(e,r,n)}var o=Wp(t);Ou&&(o=o.concat(Ou(t)));for(var i=Ru(e),l=Ru(t),a=0;a<o.length;++a){var u=o[a];if(!$p[u]&&!(n&&n[u])&&!(l&&l[u])&&!(i&&i[u])){var s=Hp(t,u);try{Qp(e,u,s)}catch{}}}}return e}var Gp=Ic;const Yp=ac(Gp);function At(){return(At=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Du=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},wl=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!kc.typeOf(e)},No=Object.freeze([]),$t=Object.freeze({});function Ar(e){return typeof e=="function"}function Mu(e){return e.displayName||e.name||"Component"}function Oa(e){return e&&typeof e.styledComponentId=="string"}var jn=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",La=typeof window<"u"&&"HTMLElement"in window,Jp=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function Qr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Zp=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,l=i;n>=l;)(l<<=1)<0&&Qr(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(o),this.length=l;for(var a=i;a<l;a++)this.groupSizes[a]=0}for(var u=this.indexOfGroup(n+1),s=0,h=r.length;s<h;s++)this.tag.insertRule(u,r[s])&&(this.groupSizes[n]++,u++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),i=o+r;this.groupSizes[n]=0;for(var l=o;l<i;l++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],i=this.indexOfGroup(n),l=i+o,a=i;a<l;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),vo=new Map,To=new Map,pr=1,Zr=function(e){if(vo.has(e))return vo.get(e);for(;To.has(pr);)pr++;var t=pr++;return vo.set(e,t),To.set(t,e),t},Xp=function(e){return To.get(e)},Kp=function(e,t){t>=pr&&(pr=t+1),vo.set(e,t),To.set(t,e)},qp="style["+jn+'][data-styled-version="5.3.11"]',eh=new RegExp("^"+jn+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),th=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},nh=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,i=n.length;o<i;o++){var l=n[o].trim();if(l){var a=l.match(eh);if(a){var u=0|parseInt(a[1],10),s=a[2];u!==0&&(Kp(s,u),th(e,s,a[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(l)}}},rh=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Pc=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){for(var u=a.childNodes,s=u.length;s>=0;s--){var h=u[s];if(h&&h.nodeType===1&&h.hasAttribute(jn))return h}}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(jn,"active"),r.setAttribute("data-styled-version","5.3.11");var l=rh();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},oh=function(){function e(n){var r=this.element=Pc(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,l=0,a=i.length;l<a;l++){var u=i[l];if(u.ownerNode===o)return u}Qr(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),ih=function(){function e(n){var r=this.element=Pc(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(o,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),lh=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),_u=La,ah={isServer:!La,useCSSOMInjection:!Jp},Nc=function(){function e(n,r,o){n===void 0&&(n=$t),r===void 0&&(r={}),this.options=At({},ah,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&La&&_u&&(_u=!1,function(i){for(var l=document.querySelectorAll(qp),a=0,u=l.length;a<u;a++){var s=l[a];s&&s.getAttribute(jn)!=="active"&&(nh(i,s),s.parentNode&&s.parentNode.removeChild(s))}}(this))}e.registerId=function(n){return Zr(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(At({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,i=r.useCSSOMInjection,l=r.target,n=o?new lh(l):i?new oh(l):new ih(l),new Zp(n)));var n,r,o,i,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Zr(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(Zr(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Zr(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,i="",l=0;l<o;l++){var a=Xp(l);if(a!==void 0){var u=n.names.get(a),s=r.getGroup(l);if(u&&s&&u.size){var h=jn+".g"+l+'[id="'+a+'"]',m="";u!==void 0&&u.forEach(function(g){g.length>0&&(m+=g+",")}),i+=""+s+h+'{content:"'+m+`"}/*!sc*/
`}}}return i}(this)},e}(),uh=/(a)(d)/gi,Fu=function(e){return String.fromCharCode(e+(e>25?39:97))};function xl(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Fu(t%52)+n;return(Fu(t%52)+n).replace(uh,"$1-$2")}var wn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Tc=function(e){return wn(5381,e)};function sh(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ar(n)&&!Oa(n))return!1}return!0}var ch=Tc("5.3.11"),dh=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&sh(t),this.componentId=n,this.baseHash=wn(ch,n),this.baseStyle=r,Nc.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))i.push(this.staticRulesId);else{var l=Bn(this.rules,t,n,r).join(""),a=xl(wn(this.baseHash,l)>>>0);if(!n.hasNameForId(o,a)){var u=r(l,"."+a,void 0,o);n.insertRules(o,a,u)}i.push(a),this.staticRulesId=a}else{for(var s=this.rules.length,h=wn(this.baseHash,r.hash),m="",g=0;g<s;g++){var S=this.rules[g];if(typeof S=="string")m+=S;else if(S){var x=Bn(S,t,n,r),w=Array.isArray(x)?x.join(""):x;h=wn(h,w+g),m+=w}}if(m){var C=xl(h>>>0);if(!n.hasNameForId(o,C)){var f=r(m,"."+C,void 0,o);n.insertRules(o,C,f)}i.push(C)}}return i.join(" ")},e}(),fh=/^\s*\/\/.*$/gm,ph=[":","[",".","#"];function hh(e){var t,n,r,o,i=e===void 0?$t:e,l=i.options,a=l===void 0?$t:l,u=i.plugins,s=u===void 0?No:u,h=new zp(a),m=[],g=function(w){function C(f){if(f)try{w(f+"}")}catch{}}return function(f,c,p,y,A,O,_,L,b,V){switch(f){case 1:if(b===0&&c.charCodeAt(0)===64)return w(c+";"),"";break;case 2:if(L===0)return c+"/*|*/";break;case 3:switch(L){case 102:case 112:return w(p[0]+c),"";default:return c+(V===0?"/*|*/":"")}case-2:c.split("/*|*/}").forEach(C)}}}(function(w){m.push(w)}),S=function(w,C,f){return C===0&&ph.indexOf(f[n.length])!==-1||f.match(o)?w:"."+t};function x(w,C,f,c){c===void 0&&(c="&");var p=w.replace(fh,""),y=C&&f?f+" "+C+" { "+p+" }":p;return t=c,n=C,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),h(f||!C?"":C,y)}return h.use([].concat(s,[function(w,C,f){w===2&&f.length&&f[0].lastIndexOf(n)>0&&(f[0]=f[0].replace(r,S))},g,function(w){if(w===-2){var C=m;return m=[],C}}])),x.hash=s.length?s.reduce(function(w,C){return C.name||Qr(15),wn(w,C.name)},5381).toString():"",x}var zc=Yn.createContext();zc.Consumer;var Rc=Yn.createContext(),mh=(Rc.Consumer,new Nc),Sl=hh();function gh(){return T.useContext(zc)||mh}function vh(){return T.useContext(Rc)||Sl}var yh=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Sl);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.toString=function(){return Qr(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Sl),this.name+t.hash},e}(),wh=/([A-Z])/,xh=/([A-Z])/g,Sh=/^ms-/,kh=function(e){return"-"+e.toLowerCase()};function ju(e){return wh.test(e)?e.replace(xh,kh).replace(Sh,"-ms-"):e}var Bu=function(e){return e==null||e===!1||e===""};function Bn(e,t,n,r){if(Array.isArray(e)){for(var o,i=[],l=0,a=e.length;l<a;l+=1)(o=Bn(e[l],t,n,r))!==""&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}if(Bu(e))return"";if(Oa(e))return"."+e.styledComponentId;if(Ar(e)){if(typeof(s=e)!="function"||s.prototype&&s.prototype.isReactComponent||!t)return e;var u=e(t);return Bn(u,t,n,r)}var s;return e instanceof yh?n?(e.inject(n,r),e.getName(r)):e:wl(e)?function h(m,g){var S,x,w=[];for(var C in m)m.hasOwnProperty(C)&&!Bu(m[C])&&(Array.isArray(m[C])&&m[C].isCss||Ar(m[C])?w.push(ju(C)+":",m[C],";"):wl(m[C])?w.push.apply(w,h(m[C],C)):w.push(ju(C)+": "+(S=C,(x=m[C])==null||typeof x=="boolean"||x===""?"":typeof x!="number"||x===0||S in Rp||S.startsWith("--")?String(x).trim():x+"px")+";"));return g?[g+" {"].concat(w,["}"]):w}(e):e.toString()}var Vu=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Ah(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Ar(e)||wl(e)?Vu(Bn(Du(No,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Vu(Bn(Du(e,n)))}var Ch=function(e,t,n){return n===void 0&&(n=$t),e.theme!==n.theme&&e.theme||t||n.theme},Eh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ih=/(^-|-$)/g;function Qi(e){return e.replace(Eh,"-").replace(Ih,"")}var Ph=function(e){return xl(Tc(e)>>>0)};function Xr(e){return typeof e=="string"&&!0}var kl=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Nh=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Th(e,t,n){var r=e[n];kl(t)&&kl(r)?Oc(r,t):e[n]=t}function Oc(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var l=i[o];if(kl(l))for(var a in l)Nh(a)&&Th(e,l[a],a)}return e}var Lc=Yn.createContext();Lc.Consumer;var Wi={};function Dc(e,t,n){var r=Oa(e),o=!Xr(e),i=t.attrs,l=i===void 0?No:i,a=t.componentId,u=a===void 0?function(c,p){var y=typeof c!="string"?"sc":Qi(c);Wi[y]=(Wi[y]||0)+1;var A=y+"-"+Ph("5.3.11"+y+Wi[y]);return p?p+"-"+A:A}(t.displayName,t.parentComponentId):a,s=t.displayName,h=s===void 0?function(c){return Xr(c)?"styled."+c:"Styled("+Mu(c)+")"}(e):s,m=t.displayName&&t.componentId?Qi(t.displayName)+"-"+t.componentId:t.componentId||u,g=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,S=t.shouldForwardProp;r&&e.shouldForwardProp&&(S=t.shouldForwardProp?function(c,p,y){return e.shouldForwardProp(c,p,y)&&t.shouldForwardProp(c,p,y)}:e.shouldForwardProp);var x,w=new dh(n,m,r?e.componentStyle:void 0),C=w.isStatic&&l.length===0,f=function(c,p){return function(y,A,O,_){var L=y.attrs,b=y.componentStyle,V=y.defaultProps,ge=y.foldedComponentIds,pe=y.shouldForwardProp,xe=y.styledComponentId,He=y.target,Ne=function(B,v,W){B===void 0&&(B=$t);var P=At({},v,{theme:B}),ue={};return W.forEach(function(Y){var Z,U,Se,Be=Y;for(Z in Ar(Be)&&(Be=Be(P)),Be)P[Z]=ue[Z]=Z==="className"?(U=ue[Z],Se=Be[Z],U&&Se?U+" "+Se:U||Se):Be[Z]}),[P,ue]}(Ch(A,T.useContext(Lc),V)||$t,A,L),xt=Ne[0],De=Ne[1],I=function(B,v,W,P){var ue=gh(),Y=vh(),Z=v?B.generateAndInjectStyles($t,ue,Y):B.generateAndInjectStyles(W,ue,Y);return Z}(b,_,xt),F=O,j=De.$as||A.$as||De.as||A.as||He,ee=Xr(j),z=De!==A?At({},A,{},De):A,R={};for(var D in z)D[0]!=="$"&&D!=="as"&&(D==="forwardedAs"?R.as=z[D]:(pe?pe(D,zu,j):!ee||zu(D))&&(R[D]=z[D]));return A.style&&De.style!==A.style&&(R.style=At({},A.style,{},De.style)),R.className=Array.prototype.concat(ge,xe,I!==xe?I:null,A.className,De.className).filter(Boolean).join(" "),R.ref=F,T.createElement(j,R)}(x,c,p,C)};return f.displayName=h,(x=Yn.forwardRef(f)).attrs=g,x.componentStyle=w,x.displayName=h,x.shouldForwardProp=S,x.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):No,x.styledComponentId=m,x.target=r?e.target:e,x.withComponent=function(c){var p=t.componentId,y=function(O,_){if(O==null)return{};var L,b,V={},ge=Object.keys(O);for(b=0;b<ge.length;b++)L=ge[b],_.indexOf(L)>=0||(V[L]=O[L]);return V}(t,["componentId"]),A=p&&p+"-"+(Xr(c)?c:Qi(Mu(c)));return Dc(c,At({},y,{attrs:g,componentId:A}),n)},Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(c){this._foldedDefaultProps=r?Oc({},e.defaultProps,c):c}}),Object.defineProperty(x,"toString",{value:function(){return"."+x.styledComponentId}}),o&&Yp(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),x}var Al=function(e){return function t(n,r,o){if(o===void 0&&(o=$t),!kc.isValidElementType(r))return Qr(1,String(r));var i=function(){return n(r,o,Ah.apply(void 0,arguments))};return i.withConfig=function(l){return t(n,r,At({},o,{},l))},i.attrs=function(l){return t(n,r,At({},o,{attrs:Array.prototype.concat(o.attrs,l).filter(Boolean)}))},i}(Dc,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Al[e]=Al(e)});const E=Al,Mc="#8f8f8f",zh="#FFFFFF",Rh="#c0c0c0",Oh="#010080",Lh="#FFFFFF",_c="/assets/sho-0b29f48c.webp",Dh="/assets/boot-b31d0e4b.ogg",Mh=E.div`
    padding:10px;
    grid-row:1;
    color:#ffffff;
    background:#000000;
`,_h=E.div`
    padding:10px;
    display:grid;
    background:#5f97e4;
    grid-column-template:1fr 50% 1fr;
`,Fh=E.div`
    display:flex;
    grid-column:2/3;
    flex-direction:column;
    animation:OpacidadEntrada 1s;
`,jh=E.button`
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
    
    background:${Mc};

    :active{
        border-bottom:2px solid white;
        border-right:2px solid white;
        border-left: 2px solid black;
        border-top: 2px solid black;
    }
`,Bh=E.img`
    width:200px;
    margin-top:20%;
    margin-bottom:30px;
`;function Vh({IrAlDesktop:e}){const t=new Audio(Dh),[n,r]=T.useState([]),[o,i]=T.useState(!1),[l,a]=T.useState("");function u(){const s=new Date,h=s.toLocaleString("default",{month:"long"}),m=s.getFullYear(),g=s.toLocaleTimeString(),S=`${h} ${m} - ${g}`;a(S)}return T.useEffect(()=>{u(),t.volume=.1,t.play()},[]),T.useEffect(()=>{const s=["BIOS: Version 2.4.1","Initializing the operating system...","Loading hardware drivers...","Disk driver: OK","Network driver: OK","Graphics driver: OK","Audio driver: OK","Detecting connected devices...","Hard disk: SATA hard disk found, 500GB","Network: Ethernet connection active","Monitor: Detected screen resolution: 1920x1080","Checking system integrity...","Starting system file verification: OK","Checking boot records: OK","Loading system configuration...","Network configuration: Assigned IP address: 192.168.1.100","Regional settings: Language set: Spanish (Latin America)","Date and time configuration: Current date: "+l,"Starting the operating system...","Welcome to XYZ Operating System","Version: 3.2.1","Please wait while system components are loaded...","Loading graphical user interface...","Control panel: OK","File explorer: OK","Default applications: OK","Ready! The operating system has been successfully loaded."];let h=0;const m=setInterval(()=>{r(g=>[...g,s[h]]),h++,h===s.length&&(i(!0),clearInterval(m))},470);return()=>clearInterval(m)},[l]),o?d(_h,{className:"crt",children:N(Fh,{children:[d(Bh,{src:_c}),d(jh,{onClick:e,children:"Iniciar Sesion"})]})}):d(nt,{children:d(Mh,{className:"crt",children:n.map((s,h)=>d("div",{className:"line",children:s},h))})})}const Fc="data:image/webp;base64,UklGRhoKAABXRUJQVlA4WAoAAAAQAAAARQAARQAAQUxQSIEDAAABoLNt2zFJXtJTxtFj21ZkRbYRrW3bjqY3MsfR2t4d2/ZMs1z1We97B4X+vu+diJgAcjsYiybbde7WtXP7fvPm9EgkO/XtkgwFwiHyea8pq5788OejTaisNR3789MnV03p5avkkAXv7igxhtrzJRR3vLdgSNIv0X53/J6WDTgo51UcTTJhyOnf7+gX9UWvR/9u4Gg1AF5WnTEAdhq84e9He3lXt3prA+SsA9e5KqNh25o6j0a/cByyZMJTpss48eJoLyIzNqpGRobnVt5UN86IuBZddtBysvCl6lgHl0Vdit56BrIOnzIFZ26NuhK99xJSDnzLM7h0b9SF8O0X0OzAxzyDC7eH2xRafpY1M/g7zc4uD7UhOHkfUg58zjN83+RgbSM2WpIN33PJ+mpETR2fkmBCQAbpqY61LD2LLIRUcHZpDb03IgdBC9jYu9r9VzVJFFO7en+V7t+zEoRV2ffdK8RvuVZSxXFK126Jl3X/3i5AYNX+rjsRBadfZaZIjF2dHiTq9HwhzUVCrvB8J6Ixf9oShLbsP8cQzcmCiwVkZxPdb0oQXDbvI3pfbREtr9YTfa1IolnKN0S7VSYa1N1El00Ib14mkhzxHImIcfE4IwK4aBwouxneTLhoNjiRzSE8t4jytnh2juicIZxlnCP6T7VFy6v/EW1XiqJdU7YTvaOlBOMN2jtEtxq6YI5m3EI0qxGOWAoaZxEN+9ositVgfj2MqO6BbJ6JpOWyD9QRBSac46ZIRX52QoCIOn2l5QWyU9qXnYiIIgvPaao4Ke3cokgZtdtiy+IUnS3tqPL6k1ZBlGbr1Hqq2q4eRSaGWkB9u2o0cwdyYrRix0yqMXF7CooIGaRuT9RC/Teouu6/nK5t6E+1j/yB5XS/ZXPsx5HU1sk7WNr0VybFdkyhts/ehbTup0wKu2aTm4t2Ia/7J5fHrkXk7rw/uaX4JWXxP+eR2xO/LiLD/CC3oPj1RHJ/0Fs3LCnnXaNkNbw1iLzsvv43R1clT+wWRXd+W9+dvA1Nee0ozJzuuCUVUiaOvjYlRJ4nVn54yEa+xJ02OJblyI052Ic+XJkkX8bnfXyowYBlAuAVOICT5ziMhkMfz4uTX4PJYXdsPV9QTY4aHaWYP7/1jmHJIPk50W/coqc++NsAwBmgHf/ti+cWj+uXIAHbhUPhWLTXwHahUDwxemhH8hIAVlA4IHIGAADQGwCdASpGAEYAPpFCmkolo6Ihp7VbWLASCWwAvNgFScyWbJ/m+BPQtbw9H+2q8wHmx+i3zcupV9ADpd79A7ZOe49dpIvt5+S4eeAE7rYcP570P+ZnXhJB/+L9s3yH/8PmP+q+AZ+3nsmrxxdRpTQjt3+I9s3QgT4x8To2jcWZaY32LQaxo+yJROIXpPL02GlWsa21BBDA3PMmIdBn1Lfe3OCzDj+63fIvFOnWpcH5Mcn9C8nG8uG86ZB7JQXIff7u4cZAOsmTF7AAurX8JZdP939gkKVuvd2IfGWutcvCLnm4m4/NYcAA/va+X98T/+snExtcekyXVw23892kmdyeiSTcL1OKGO1EWGqCb6s3U6Z/ZbKhxCRGtrWB6pz6e6Pd+gRNBVVbIjtjW5l8uqqRzwRWSqSPAhAX2MUiIuF5JRngP4o9X8csg7mfzONfyynRkJjmPrJvR66/58LkHuuCHnt+zLjPyyMqJAKUee/tWEuwiDQSfYROvRQqQyC7nEk/76t56rJ/B9p2JM+/2Pb1G1HPSGLW7yWm9AJwqZZtOpYE4OyXdy8KxQyayXVjqNJ+xRb7UYBwffblADodQvVs1xWoGLnm+pKweeaDtzjEvFJPjANNFE2zlGUm62W4d3Znf9IKFTXieQkByxXd0tpwTrirHH63OwYWxTHr58Ok9LdTjSAn9/tD6b41/+K/4Qu8xk7TeWeGFGZNmCYDpDW/HPhbqXmEzET5yWcRWWzoJeXOPqfvUS7AkwA+eVtOSD+SDwTmFcp+4T58gKb8fiXGvlDcoL/UP7V3OT97zL2dmX5N/38s4+ebL8TwI4n/fO+jhGFq1b2rYMxdHTQrYu1tE8cuUVE9gAQ6yyHXVxXsT4WfTAA49MVY//ges1lEel2hJLF7HjvZz+yFlshHQJ8qYr/wZxZRyP46biKr8iQwhScI4H7VaO21cS1tMe46OGG/nnUVSxcznRJfdqGOgA9+bo65w9NdV8Vp0gDussvTHllGSHGUPth0BS0zg5TgW47DYBffqADP/PiYJSnGLbBLJ0F1GtUyKQP7sY21/J4xEqO3l9Ssuj+eKbp9/OTd10LlloLRJXJ/wZbVuLj6cKARTxm3GMy0I94yRk5ss/xtzFC/96pmgD9uYsr4Sr/8XliAC8GHCfMiZ+M8T7tNGejnCPSoVebqRONm2fI2unwxuV2USy8chFNbb5JHBp76OJecIRAF5bzn7ZN6Bz7PKzmTXQgoEGLJpMRZSpK05v8cJPHVSVv4wNtLrH2y/f4OOtQ5nRoCYEhBgxJgOlGQOzw4AM0+SuWfy/EyQnkL3DbFh/Hlnm90aTNwn/+bqs3PYuYJ9GQub+CFkRW8YIQxZbNa/+2UndPcu5BkLGHeWIGhN+jWy1NyQpB92RTux+fv5G9jiPR/pjR4qR/LZlf7cqYwAwptwXKf1Z/VsgJlypQKLX/D1SVx+cvFZ0zOOSIgbQLjRHKnZZEbtrHivLicz0r7eEUQ/xwfd2b6OAIsax/Vb8KCPf4jRfGefFJ8l1MoEJQ+k/uV3gkefKmf/x/mn4cpS9EHSRDgc3Uegqz/jfW2RDfgpCpfO1nFpKXRS07EVwp2jZpEJEWt2UtuBCjOMZtqsNg+Qvx/ygmnr8bX11Z9oYlyduVsdg95ukdBlYUGkcBV0NrGWwwNRT7E9BRZ6PqGGX9DAzfO9uLCryzS7UwWN3uVk83ELnfy1W+BNvC/sGJ500NMz9MYKCknkWxhbEYXHd7lMrnh2JwyIkr5Ut+R9GXcZL9ST5v0Jnk3k/Fek9/39ji1/e7db4LvaCR0s9NADPEc5J5fkS6MMiBofFgk6PjxSpTx7kkOAm5PUYyfhSxJr91qeIqGSwt0hcjHBKmqPN99+SNyqSmxi9jR/RErqbOAZqzfZCCVVryjad/Bi0IqFPBOD7QAEXoSPt05SN45rKRUphoPKdNCxsoA3gP+nXv/8IXeYyduIw4Wf03urseJBr3aAFGVMtB8A7nY/8uT8saJ0A2eJ99F0UcCgRhaTNIjwQfEg49YPh4dqXggk5tP3KGleTAisQyahyU6rcOH7Dx0qBei4fAtANcejoUFbzRgFsPL/VaktQBN63kI+NcmTOxy7NUy56ZajsrwDyUaDbOOZuDAdhVrH/fxGUFYB2lm6zKFbpplQswGU/rb/cwRwFsne8YBfLBjs9fgKTwAAAA=",$h="/assets/salida-5a785a0f.ogg",jc=T.createContext(),Bc=T.createContext(),Vc=T.createContext(),$c=T.createContext(),Uc=T.createContext(),Qc=T.createContext();function Ai(){return T.useContext(Vc)}function Jn(){return T.useContext($c)}function Zn(){return T.useContext(jc)}function Uh(){return T.useContext(Bc)}function Ci(){return T.useContext(Uc)}function Da(){return T.useContext(Qc)}function Qh(e){const[t,n]=T.useState(""),[r,o]=T.useState(),[i,l]=T.useState(!1);function a(h){l(h)}function u(h){o(h)}function s(h){n(h)}return d(Vc.Provider,{value:i,children:d($c.Provider,{value:a,children:d(jc.Provider,{value:u,children:d(Bc.Provider,{value:r,children:d(Uc.Provider,{value:s,children:d(Qc.Provider,{value:t,children:e.children})})})})})})}const Wh=E.div`
  display:flex;
  flex-direction:column;
  position:relative;
`,Hh=E.div`
  position:sticky;
  top: 0;
  background:#fff;
`,bh=E.div`
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
`,Gh=E.div`
  
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
`,Yh=E.div`
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
`,Hi=E.div`
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
    
`,bi=E.p`
  margin-top:8px;
  margin-left:35px;
  margin-right:35px;
  margin-bottom:10px;
  font-family:Zimra;
  text-aling:justify;
  font-size: clamp(0.875rem, 0.7824rem + 0.4938vw, 1.375rem);
`,Jh=E.div`
    
    display:flex;
    margin-bottom:35px;
    flex-direction:row;

    @media(max-width:1132px){
      flex-direction:column;

      div{
        margin-bottom:-10px;
      }
    }
`,Zh=E.div`
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
`,Xh=E.div`
  
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
`,Kh=E.div`
    
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
`,qh=E.div`
  
  margin-top:60px;
  flex-direction:column;

  @media(max-width:1132px){
    margin-top:20px;
  }
`,em=E.h1`
  margin-left:20px;
  font-family:Zimra;
  font-weight: 600;
  ffont-size: clamp(0.875rem, 0.5741rem + 1.6049vw, 2.5rem);

  @media(max-width:1132px){
    margin-top:40px;
  }

`,tm=E.p`
  margin-left:20px;
  font-family:Zimra;
  font-weight: normal;
  overflow-wrap: break-word;
  font-size: clamp(0.875rem, 0.7824rem + 0.4938vw, 1.375rem);
`,nm=E.img`

    width:100%;
    max-width:200px;

   @media(max-width:1132px){
     display:block;
     margin:auto;
     margin-top:20px;
     width:50%;
     height:30%;
   }

`,$u=E.div`

  width: calc(100%-30px);
  display:flex;
  margin-left:30px;
  flex-direction:row;

`,Uu=E.span`
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
`,Qu=E.span`
    color:#0749a5;
    font-size:15px;
    margin-left:-6.5px;
  
`,Wu=E.div`
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

      a{
        text-decoration:underline;
      }
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
`;function rm(){return N(Wh,{children:[d(Hh,{children:d(bh,{children:d("p",{children:"https://sobremi.com/@LeandroAvila"})})}),d(Gh,{children:N("p",{children:["Sobre ",d("span",{children:"MI"})]})}),N(Yh,{children:[d("p",{children:"Inicio"}),d("p",{children:"Perfil"})]}),N(Jh,{children:[N(Kh,{children:[d(nm,{src:_c}),d("div",{children:N("ul",{children:[d("li",{children:d("a",{href:"https://www.linkedin.com/in/l3anav/",children:"Ir a Linkedin"})}),d("li",{children:d("a",{href:"https://github.com/l3anav",children:"Ir a GitHub"})}),d("li",{children:d("a",{href:"mailto:leandroav.dev@gmail.com",children:"Enviar un Correo"})})]})})]}),N(Zh,{children:[N(qh,{children:[d(em,{children:"Matias Leandro Avila"}),d(tm,{children:"Desarrollador Frontend"})]}),N(Xh,{children:[d("h3",{children:"Educación"}),N("p",{children:[d("span",{children:"Cursando"})," Técnico universitario en Informática"]}),N("p",{children:[d("span",{children:"Institución"})," Universidad Nacional General Sarmiento"]})]}),d("button",{children:d("a",{href:"https://drive.google.com/uc?export=download&id=1SNmOZPi2sWR2qdm12fynewXku8KgyekO",children:"Curriculum Vitae"})})]})]}),d(Hi,{children:"Sobre Mi"}),d(bi,{children:"✨ ¡Hola! 👋🏽👋🏽 Soy Matias Avila, un estudiante de sistemas apasionado por el desarrollo frontend, actualmente me encuentro en la búsqueda de oportunidades laborales en el área. He aprendido HTML, CSS, Js y por útilmo ReactJs."}),d(bi,{children:"🚀 Soy una persona curiosa y apasionada por la resolución de problemas. Cuando me enfrento a un desafío, no me gusta quedarme sin respuestas. Me impulsa el deseo de adquirir nuevos conocimientos y habilidades para superar obstáculos y mejorar continuamente."}),d(bi,{children:"✉ No dudes en contactarme si deseas saber más sobre mi experiencia o si estás interesado en discutir oportunidades de colaboración. Estoy emocionado por las posibilidades que el mundo del desarrollo tiene para ofrecerme."}),d(Hi,{children:"Experiencia Laboral"}),N($u,{children:[d(Uu,{}),d(Qu,{children:"⬤"}),N(Wu,{children:[d("p",{children:"dic. 2022 - abr. 2023"}),N("p",{children:["Desarollador Frontend Freelance | ",d("a",{href:"https://adcargentina.com/",target:"_blanck",children:"Web"})]}),d("p",{children:"ADC ARGENTINA UNIENDO EMPRESAS SA (Buenos Aires) \\ Tecnología usada: ReactJS"}),N("ol",{children:[d("li",{children:"Desarrollo con ReactJS."}),d("li",{children:"Configuración del dominio."}),d("li",{children:"Despliegue del proyecto en firebase."}),d("li",{children:"Diseño de maquetas de UI con Penpot (similar figma)."}),d("li",{children:"Organización de reuniones para extracción de requerimientos, y luego para feedback."})]})]})]}),d(Hi,{children:"Voluntariado"}),N($u,{children:[d(Uu,{}),d(Qu,{children:"⬤"}),N(Wu,{children:[d("p",{children:"mayo 2024 - Actualidad"}),N("p",{children:["Desarollador Frontend Colaborador | ",d("a",{href:"https://docs.goldendoglinux.org/",target:"_blanck",children:"Web"})]}),d("p",{children:"GoldenDog Linux (Proyecto Open Source) \\ Tecnología usada: Jekyll"}),N("ol",{children:[N("li",{children:["Desplegar una ",d("a",{href:"https://goldendoglinux.org/",target:"_blanck",children:"web de documentación"})," con docsify."]}),d("li",{children:"Añadir una sección de documentación."}),d("li",{children:"Reestructuración de carpetas, y archivos."}),d("li",{children:"Coloqué un pequeño script para que la web se muestre en español automáticamente cuando corresponda al ingresar."}),d("li",{children:"Añadir imágenes de proyectos con los cuales se colabora en el footer de la web."})]})]})]})]})}const om=E.div`
    
    
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
`,im=E.img`
    width:${e=>e.width};
    height:${e=>e.height};
    object-fit:cover;
    margin-bottom:8px;
    margin-left:32px;
    margin-right:30px;
    margin-left:${e=>e.marginLeft};
    filter: invert(${e=>e.invert});
`,Wc=({handleDoubleClick:e,imgIcono:t,nombreIcono:n,FuiClikeado:r,darNombre:o,widthImg:i,marginLeftImg:l})=>d(nt,{children:N(om,{onClick:()=>{o(n)},onDoubleClick:e,background:r?"#1e40bc":"#010080",children:[d(im,{height:i===void 0?"45px":"auto",width:i===void 0?"80px":i,marginLeft:l,src:t,invert:r?"20%":"0%"}),d("p",{children:n})]})}),lm="/assets/webadc-00739be0.webp",am="/assets/spaFlixnet-7c1461c2.webp",um="/assets/PortafolioV1-00b8cc46.webp",sm="/assets/PortafolioV2-8509c158.webp",cm="/assets/asciidocgenerator-1869fae3.webp",dm="/assets/MobileFlixnetV2-b2b4f856.webp",fm="/assets/WebFlixnetV2-2787213c.webp",pm="/assets/MaquetaEstudioArq-c48c63d5.webp",hm=[lm,um,sm,pm,cm,am,dm,fm],Ma=["ADC-Maqueta.webp","Portafolio-V1.jpg","Portafolio-V2.jpge","Maqueta-Estudio.jpg","AsciiDoc.png","Spa-Flixnet.png","Flixnet-Mobile.jpg","FlixNet-Web-V2.jpg"];function Hc(e){return hm[mm(e)]}function mm(e){return Ma.indexOf(e)}const gm=E.div`
    display:grid;
    margin-top:15%;
    margin-left:-5%;
    place-items:center;
`;function zo(){return d(gm,{children:d("span",{className:"loader"})})}const bc="data:image/webp;base64,UklGRqABAABXRUJQVlA4WAoAAAAQAAAARQAARQAAQUxQSLoAAAABgGRrr4ImK2LGahi5w5R9cFgJK3CnbVJ9qbu7+z9C86acExETQIvAg0EvhFDxQfZ0xQfxt1rfA/nnGk6eRJhZmEVKNsKXVWDzZN2pqjqnd2wi8t8EcHaJ0SoWUmd1TKpsIPZdw8TOQPGxhsnVQPm9Og2ZPypc1SdzFij215hITVD8rA5g73IcNkHJ3wawdbq+papOVe/EBsVuqzh+YmFhYWYpGaHCfa1XIQ8mPte8QJnXuhcoHPDDAkVWUDggwAAAAFAGAJ0BKkYARgA+kUKdSiWjoqGrk5iAsBIJaQAD5DpBP7SAvaMPTeI/W0/n+AEJfeOamQ0rZ81XLqAAAP75WEFf/4NQvmX6tRKWFoSepGWXUuzw5GFXteRNjtuRB96z5w/im6/r/9WHk3lqWzSxGX82n/+MF0dkB73zrGlEZgQ73m9VNRNVUbpst6nJVh4NtPLRxuf5QZ/N5eMnt/nVH/gBLgQmEu8cdv0cn836FKYE9L65HkkTNpTRIIoSaAAAAA==",vm=E.div`
    width:100%;
    position:relative;

    img{
      z-index:2;
      width:100%;
      object-fit: scale-down;
    }
    
`,ym=E.img`
    display:flex;
    position:absolute;
    z-index:1;
    top:25px;
    left:5px;
    margin-top:5px;
    margin-left:2%;
    user-select:none;
    cursor:url(src/assets/cursor/pointer-old.png), pointer;
`,wm=({imagen:e})=>{const t=Zn();Ci();function n(){t(d(Gc,{}))}return N(nt,{children:[d(ym,{src:bc,onClick:n}),d(vm,{children:d("img",{src:e})})]})};function xm(e){return d(wm,{imagen:Hc(e)})}const Sm=E.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    flex-wrap:wrap;
    align-items: center;

    @media (max-width:700px){
      flex-direction:column;
    }
`,km=E(Wc)`
    justify-content: center;
    align-items: flex-end;
`;function Am(){const e=Ci(),t=Jn(),n=Zn(),[r,o]=T.useState("");T.useEffect(()=>{e("Imagenes")},[]);function i(){t(!0),e(r);const a=xm(r);n(a)}function l(a){o(a)}return d(nt,{children:d(Sm,{children:Ma.map(a=>d(km,{handleDoubleClick:i,FuiClikeado:a===r,darNombre:l,nombreIcono:a,imgIcono:Hc(a)}))})})}function Gc(){return d(Am,{})}function Yc(e){return Math.floor(Math.random()*e)}const Cm="/assets/reload-e985c94f.webp",Em=E.div`
    display:flex;
`,Im=E.img`
    height:20px;
    margin-top:10px;
    margin-left:8px;

    :hover{
        cursor:pointer;
    }
`,Pm=E.div`
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
`;function Nm(){const[e,t]=T.useState(!0),[n,r]=T.useState("ID8EUmz2KcU"),[o,i]=T.useState(!1);let l=["ID8EUmz2KcU","ZclzN7R_mmE","ALznpaBWUTo","xgG9wZPnf6k","86vaOUEjWzM","h7MYJghRWt0","g_-jc_wFTC8","ybGOT4d2Hs8","gYWUJzQ1g-Y","XxZhBTK3bDM","LW5kh1rpfYs"];const a=`https://www.youtube.com/watch?v=${n}`,u=`https://www.youtube.com/embed/${n}?autoplay=1&mute=0`;function s(){const S=Yc(l.length);r(l[S])}function h(){setTimeout(()=>{s(),t(!1),i(!0)},500)}T.useEffect(()=>{h()},[]);function m(){i(!1),setTimeout(()=>{h()},300)}function g(){window.open(a,"_blank")}if(e)return d(zo,{});if(!e)return N(nt,{children:[N(Em,{children:[d(Im,{onClick:m,src:Cm}),d(Pm,{children:d("p",{onClick:g,children:a})})]}),o?d("iframe",{width:"100%",height:"90%",src:u}):d(zo,{})]})}const Tm="data:image/webp;base64,UklGRg4BAABXRUJQVlA4WAoAAAAQAAAALAAANgAAQUxQSCwAAAABDzD/ERFCTWSrEU6wirRIQQJl7vP1aSP6H+JrLZVARsfEeoYERyCjY2J9HVZQOCC8AAAAcAYAnQEqLQA3AD6JNpZHpSMiITqxqACgEQlpAAzgGqIf0fkhC0rvbQlWQEIJjjRvJS5WyzoyUocFqe2AAP766tF+RLe9M3GCK237WH2cVyuMvhjMibpFHYosP3+Hr/9/u8wUGYMDJf1JRtftfb/UYvsEkc6wxD8Np98Jp/26n4yIoLt/P38BGGSc4en7wpSpvlzg1KHALjQBrrcT/qQT/9pZwT1PyE/xyYCXA7baNknyftcwfDfndybJAAA=",zm=E.div`
  
  margin-left:8px;

  p{
    width:10%;
    color:#fff;
    margin-top:2px;
    margin-left:12px;
    background:#010080;
  }
`;function Rm(){const e="Utilidades Frontend",[t,n]=T.useState("");function r(i){n(i)}return d(zm,{children:d(Wc,{darNombre:r,FuiClikeado:e===t,nombreIcono:e,imgIcono:Tm,widthImg:"45px",marginLeftImg:"38px",handleDoubleClick:()=>{window.open("https://gist.github.com/L3anAv/2c4595f73886c1f6606be7a3a3cd87f2","_blank")}})})}const Ee=["Proyectos","Imagenes","Browser","Recursos"],Om=E.div`
  width:65px;
  height:98px;
  margin:10px;
  padding:10px;
  display:flex;
  aling-content:center;
  flex-direction:column;
  justify-content:center;
`,Lm=E.div`
  top:0px;
  margin-left:15%;
  background:${e=>e.background};
  border-radius:${e=>e.borderRadius};
`,Dm=E.img`
  user-select: none;
  width:${e=>e.width};
  height:${e=>e.height};
  padding:${e=>e.padding};
  margin-left:${e=>e.marginLeft};
  filter:grayscale(${e=>e.grayscale});
`,Mm=E.h3`
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
`;function rn({src:e,nombreIcono:t,width:n,height:r,decirQuienSoy:o,nombreDelClikeado:i}){const l=Jn(),[a,u]=T.useState(!1);function s(){return i==t?u(!0):u(!1)}T.useEffect(()=>{s()},[i]);function h(){o(t)}return N(Om,{onClick:h,onDoubleClick:m=>{m.stopPropagation(),l(!0)},children:[d(Lm,{width:n,height:r,children:d(Dm,{src:e,width:n,height:r,grayscale:a?"70%":"0%",padding:t=="Browser"?"1px":"",marginLeft:t=="Browser"?"5px":"2px"})}),d(Mm,{color:a?"#000":"#fff",background:a?Lh:Oh,children:t})]})}const _m="/assets/img-2bb3fa0b.webp",Hu="data:image/webp;base64,UklGRmQFAABXRUJQVlA4WAoAAAAQAAAANAAAKgAAQUxQSF8BAAABkGPb1vI29xNUxv+3w8xMtdqsdClV/31ala5SagAahqcQTsqMwczs7xcufScg+NbTBCJiAhQYMQQGr2pEp7gMD2EEP4pcnDBscP8/fnj/4/Gg8o/cf3oz5If33xZjjLydPL/7NocAbD68c+fdKUD3ZFXK4+0z8PAY2GHgzgnQQqryOxZ04ZzBnf1e2GfgDnU5fLzoYUmiZa6TSWxECpHCOqtUtUzsfiTo5jwW1tsfoVwxxy6vVWmb6yG99uZAqnTNdSjrsb1dliUmUarb+9a+LdGzRuexhH3/X26u9VgVe194LCax/JpgbY0lNTDfQap1zIGU2esFp4xja6vUJHrWCEirmP/FNd1m1xpU5eia85lEzxx1lTi3tkK99Iu+tRaLFzF/wjc17J0hNYK5HlKNCXD60O5b22NWj5nA92XZCiEAmSQ55yRXGnNqbi5J0ySZS5I0SdMknZsqOQ10ZQEAVlA4IN4DAACwEQCdASo1ACsAPpFAmUklo6IhJW2YsBIJaicB9/+L4+gPL/Dvn9u07eL7e2Vfl/yOgg8wHngaY1vMn++oCNHDvB8w5h8+b2wgifICk4srMzby0/v3+R36HoAfrMbnYxqYYJYmwbBwdIFh/2Z/zXpygXz7KURaIwnwt5n3Fo2+Zvxm4simNDKc4KHgB1djbGGH+OWv/YgA/vMSATevutUzP4qJcdKBaRKCHvpHxy/dzRM2X8/AKhlabXi/99b43af0j/rLJzXaub45yNXpPtAbqKckwx/XUVc//vgJfWqpcb+RcKwa9r+JsWVReGe/y1ZCdbtO2hej17mncW/N1UR8+z1d0//g0vMH6SvJIi113CcXSPZ3buVOaBGEm+DoLEfqYxaLqCVSBpXgj4QJt24G+MedvrMNnFJmrxf18/vuYBSf0VWVHlGYeL8B5QgZJAxAzAuPsLTCbjBFNs+mQPRweEQxZaI48hQbGFJpS869wGSG6UWZeHvoNJQ+PN6cHEBFXfHrLBsdlqHK0A0L7ueDrg9UyIlfH52ubZRJ7PAMejkSs756RxZKuZ/tQgvI5WFlBp9C0nqfFc31Zn1yFQGbYncWN9dmYN9AeiwKyb9bs1NWze7WhNQ/AgU8Lw46BdKgQ7LOXMUZryryBphgnHpgLXqk62gbUAVPxHZCRnIObC8vpxNqzBOX8T0E5PDF/Vc7OP+bJGXTkDwMOhf8UJ8cCa3dMg9LiAWpHA3ihPZU7WkDM0nk5k6Riq2V3NSPO112dveohO0LT2Mt7BpKlxC8qsOfJlAYQ0t4Js0dMSqueWai4/3zjK05evNg40N3jRwrTa0of2sVdEMqG52r8tscOTGrQJ77c2elC2uvyLo7xtEcnxmFLTWZVJBpb9UiLSrVcomOPPSFuC3rDqO5U+VioDoL/qTgO1yassuyZdDzNQm/JhqJPawdvzmsDyxrru+zwSdKURtq47veAwHiMW0tquTIHBEvjdbmeVvecjzR7877/7BLe9HAgJjatmUuc9tx6vk/EfZT/6HO0t6m36TD1C3/X74zuMGdWfjCT3Wuf8Lx150u2t1LsTn9YQiN0QkvBxPUO/FwIHzYyKQTxGp4K+NlUGI0zIf6PVBWu1qQdzZmUCiahVxoAlXA9cUoChppzNQpG9ZCYNoAkjIFAEkHAxvGLSG1gD9FDu+lsDhzblw9B/Wa0NQx1H6z1iNsBmEP17ZEFh8MhXeko54Xhnvnrm+YgF8AuX9/Sh/6X2YDfDYaRTDko/Zf0/rLMYdspC7AmjthmirRDcM41c2PtGI67G86cBWAxTTdionGeAA=";function jt(e){if(Ma.find(n=>n===e))return`${_m}`;switch(e){case Ee[0]:case Ee[1]:return`${Hu}`;case Ee[2]:case"Sobre Mi":return`${Fc}`;case Ee[3]:return`${Hu}`}}const Fm=E.div`
    display:flex;
    margin-left:45px;

    @media (max-width:700px){
       margin-left:10px;
      }
`;function jm(){const e=Zn(),[t,n]=T.useState("");function r(o){n(o);const i=Cr(o);e(i)}return N(Fm,{children:[d(rn,{src:jt("Proyectos"),decirQuienSoy:r,nombreDelClikeado:t,nombreIcono:"Frontend",width:"60px",height:"auto"}),d(rn,{src:jt("Proyectos"),decirQuienSoy:r,nombreDelClikeado:t,nombreIcono:"Backend",width:"60px",height:"auto"}),d(rn,{src:jt("Proyectos"),decirQuienSoy:r,nombreDelClikeado:t,nombreIcono:"Java",width:"60px",height:"auto"})]})}function Bm(){const[e,t]=T.useState(!0),[n,r]=T.useState([]);return T.useEffect(()=>{t(!0),fetch("https://api.github.com/users/L3anAv/repos",{method:"GET",headers:{Authorization:"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"}}).then(o=>o.json()).then(o=>r([...o])).then(()=>t(!1))},[]),[n,e]}const Vm=E.div`
    display:flex;
    flex-direction:column;
`,$m=E.div`
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
`,Um=E.a`
    padding:2px;
    color: #4242f1;
    font-size:18px;
    cursor: pointer;
    font-family:MonoSpace;

    span{
        text-decoration: underline;
        overflow-wrap: break-word;

        &:hover{
            background:#ff630f;
        }
    }

    

    @media(max-width:1132px){
        border:none;
        font-size:15px;
     }
`,Qm=E.a`
    margin-left:5%;
    font-size:22px;
    color: #4242f1;
    font-weight:800;
    cursor: pointer;
    user-select: none;
    font-family:MonoSpace;
    text-decoration: inherit;

    &:hover{
       background:#ff630f;
    }
`,Wm=E.div`
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
`,Hm=E.div`
    width:10%;
    display:flex;
    margin-top:5px;
    margin-left:2%;
    user-select:none;

    a{
        cursor:pointer;
        margin-left:20px;
        color:${Mc};
    }
`;function Gi({ClaveTopic:e}){const[t,n]=Bm(),r=Zn();function o(){r(Cr(Ee[0]))}if(n)return d(zo,{});if(!n)return N(Vm,{children:[d(Hm,{children:d("a",{onClick:o,children:d("img",{src:bc})})}),t.map(i=>{if(i.topics.includes(e)&&i.topics.length>0)return N($m,{children:[d(Qm,{href:i.html_url,children:i.name}),i.homepage!=""?d("p",{children:N(Um,{href:i.homepage,target:"_blank",children:[i.topics.includes("web")?"Web:":"Demo:"," ",d("span",{children:i.homepage})]})}):"",d("p",{children:i.description}),d(Wm,{children:i.topics.map((l,a)=>d("p",{children:l},a))})]},i.id)})]})}function Cr(e){switch(e){case Ee[0]:return d(jm,{});case Ee[1]:return d(Gc,{});case Ee[2]:return d(Nm,{});case Ee[3]:return d(Rm,{});case"Frontend":return d(Gi,{ClaveTopic:"javascript"});case"Backend":return d(Gi,{ClaveTopic:"backend"});case"Java":return d(Gi,{ClaveTopic:"java"});case"Sobre Mi":return d(rm,{})}return d(zo,{})}const bm=E.nav`
    width:100%;
    color:#000;
    grid-row:2;
    height:42px;
    display:flex;
    font-weight: bold;
    border:3px solid white;
    background:${Rh};
    justify-content:space-between;

    @media (max-width:600px){
        grid-row:1;
    }

    @media (max-width:400px){
        width:100%;
    }
`,Gm=E.ul`
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

`,Jc=E.li`
    
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

`,Ym=E(Jc)`
    border-bottom: ${e=>e.ventanaactiva?"2px solid white":"2px solid #808080"};
    border-right: ${e=>e.ventanaactiva?"2px solid white":"2px solid #808080"};
    border-left: ${e=>e.ventanaactiva?"2px solid black":"2px solid white"};
    border-top: ${e=>e.ventanaactiva?"2px solid black":"2px solid white"};
`,Jm=E.p`
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
`;function Zm({consultarSiExiste:e}){const t=new Audio($h),n=Ai(),r=Ci(),o=Jn(),i=Zn(),l=Da(),[a,u]=T.useState(new Date().toLocaleTimeString());T.useEffect(()=>{const g=setInterval(()=>{u(new Date().toLocaleTimeString())},1e3);return()=>{clearInterval(g)}},[]);function s(){n===!1?(o(!0),r("Sobre Mi"),i(Cr("Sobre Mi"))):o(!1)}function h(){t.play(),m(),e()}function m(){localStorage.setItem("TOKENB","SIINICIO")}return d(nt,{children:N(bm,{children:[N(Gm,{children:[d("span",{children:d(Jc,{onClick:h,children:"Inicio"})}),N(Ym,{ventanaactiva:n&&l=="Sobre Mi",onClick:s,children:[d("img",{src:Fc}),"Sobre Mi"]})]}),d(Jm,{children:a})]})})}const Xm=E.div`
  display:flex;
  flex-direction:column;
  animation:OpacidadEntrada 1.8s;

`;function Km({nombreDelIcono:e}){const[t,n]=T.useState("");function r(o){n(o),e(t)}return N(Xm,{children:[d(rn,{src:jt(Ee[0]),decirQuienSoy:r,nombreDelClikeado:t,nombreIcono:Ee[0],width:"60px",height:"auto"}),d(rn,{src:jt(Ee[0]),decirQuienSoy:r,nombreDelClikeado:t,nombreIcono:Ee[1],width:"60px",height:"auto"}),d(rn,{src:jt(Ee[0]),decirQuienSoy:r,nombreDelClikeado:t,nombreIcono:Ee[3],width:"60px",height:"auto"}),d(rn,{src:jt(Ee[2]),decirQuienSoy:r,nombreDelClikeado:t,nombreIcono:Ee[2],width:"55px",height:"auto"})]})}const qm=E.div`
    overflow:hidden;
    position:absolute;
    z-index:1;
    outline:3px solid #c9ccc7;
    top:${e=>e.top};
    left:${e=>e.left};
    background:${zh};
    width:${e=>e.width};
    height:${e=>e.height};
    display:${e=>e.display};
    animation:${e=>e.animation};
`,e0=E.div`
    width:100%;
    height: 88%;
    overflow:${e=>e.overflow};
`,Cl=E.div`
    height:32px;
    display:flex;
    justify-content:space-between;
    border-bottom:4px solid black;
    background: linear-gradient(142deg, rgba(5,9,132,1) 0%, rgba(8,125,205,1) 100%);
`,Zc=E.h2`
    color:#fff;
    font-size:18px;
    margin-top:3px;
    margin-left:-6%;
    user-select:none;
    font-family:IBMRegular;
`,_a=E.div`
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
`,t0=E.img`
    transform:scale(0.5);
`,n0=E.div`
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

`;function r0({ImgParametro:e}){const t=Uh(),n=Da(),r=Ai(),o=Jn(),[i,l]=T.useState(!0),[a,u]=T.useState(!1),[s,h]=T.useState(!1);function m(){return h(!s)}function g(){u(!0),setTimeout(()=>{u(!1),o(!1)},100)}return N(qm,{top:s?"0":"55px",left:s?"0":"12%",width:s?"99.9%":"75%",height:s?"99.8%":"75%",display:r?"inline-block":"none",animation:a?"SalidaVentana 0.2s linear":"EntradaVentana 0.1s linear",children:[N(Cl,{onDoubleClick:m,children:[d(t0,{src:e}),d(Zc,{children:n}),d(_a,{onClick:g,children:n==="Sobre Mi"?"-":"X"})]}),d(e0,{overflow:i?"auto":"hidden",children:t}),d(n0,{})]})}const o0="/assets/background-08963b70.webp",i0=E.div`
  width:100%;
  display: grid;
  overflow:hidden;
  background:#548cc4;
  grid-template-rows: 1fr 47px;

  background-image:url(${o0});
  background-size: cover;

  @media (max-width:600px){
    grid-template-rows:47px 1fr;
  }
`;function l0({consultarSiExiste:e}){const t=Ci(),n=Da(),r=Ai(),o=Jn(),i=Zn();function l(){o(!0),t("Sobre Mi"),i(Cr("Sobre Mi"))}T.useEffect(()=>{l()},[]);function a(u){t(u);const s=Cr(u);i(s)}return N(nt,{children:[N(i0,{className:"crt",children:[d(Zm,{consultarSiExiste:e}),d(Km,{nombreDelIcono:a})]}),r&&d(r0,{ImgParametro:jt(n)})]})}function a0(e){const t=new Audio(wc),n=new Audio(Pp),[r,o]=T.useState(!0);function i(){t.play(),a(),o(!1),n.play()}function l(){localStorage.getItem("TOKENA")=="NOINICIO"&&o(!1)}function a(){localStorage.setItem("TOKENA","NOINICIO")}return T.useMemo(()=>l(),[r]),d(nt,{children:r?d(Vh,{IrAlDesktop:i}):d(l0,{consultarSiExiste:e.consultarSiExiste})})}const u0="data:image/webp;base64,UklGRvgAAABXRUJQVlA4WAoAAAAQAAAAHQAAHQAAQUxQSIkAAAABcBrbtqtc9QGHQqFzBQwVxA5SCTgKwKMYOvgtkArIFgs+J5c5xPvOm/kFRMQEiIc+YaUF9C04ABDgzb6utDR+FliXXyDV8dflQEkZaHaEJNQps5MORlUYNkxgbNA2m6vCIEY0SwYURVBr/0D+47KmP4Kgh74WPIhIBhYrIg8bkCasdh9nqxAPBwBWUDggSAAAABAEAJ0BKh4AHgA+gTSUR6UjIiE3+qgAoBAJaQAAW/opL/qKVKt5ZWwAAP78104Si7Q1UmP+394oM+5N/Yg9wwAhS/2kvRAAAA==",s0=E.div`
  display: flex;
  flex-direction: column;

  div{
    z-index:2;
  }
`,c0=E.div`

  display:flex;
  margin-top:10%;
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
`,d0=E.h1`

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
    color: #4242f1;
    background: #ff630f;
  }

  @media(max-width:1132px){
    width:60%;
    margin-left:30px;
  }
`,f0=E.div`

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
      color: #4242f1;
      background: #ff630f;
    }

  }

  @media(max-width:1132px){
    margin-left:30px;
  }
`,p0=E.span`

  color:#fff;
  padding:10px;
  margin-left:20px;
  font-family:Zimra;
  background:#0033db;
  
  ::selection{
      color: #000;
      background: #ff630f;
  }

`,h0=E.p`

  font-size: clamp(2.0625rem, 1.287rem + 4.1358vw, 6.25rem);
  
  span:nth-child(3){
    color:#000;
    background:#feff00;
    font-family:DaysOne;
    outline:5px solid black;

    ::selection{
      color: #4242f1;
      background: #ff630f;
    }

  }

  ::selection{
    color: #4242f1;
    background: #ff630f;
  }

  @media(max-width:1132px){
    margin-top:15px;
  }

`,bu=E.span`
  margin: 0 5px;
  display: inline-block;
  transform: rotate(15deg);
  animation: girarMano 0.6s 1.3s 4 linear;
`,m0=E.button`
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
`,g0=E.span`

  color:#000;
  font-family: DaysOne;
  font-size: clamp(2.0625rem, 1.287rem + 4.1358vw, 6.25rem);

  ::selection {
      color: #4242f1;
      background: #ff630f;
  }
`,v0=E.footer`
  
  position:absolute;
  bottom:0;
  width:100%;
  overflow:clip;
  background:#6d6d6d;

    p{
      color:#fff;
      font-size:15px;
      margin-bottom:5px;
      text-align:center;
      font-family:Quattrocento;
    }
    
    @media(max-width:1132px){
      width:100%;
      grid-row:3;
    }
`,y0=E.div`
  
  display:flex;
  width:100%;
  flex-direction:row;
  justify-content:center;

  a{
    border:none;
    outline:none;
    color:#4242f1;
    background:none;
    margin-top:15px;
    margin-left:30px;
    margin-right:30px;
    font-weight:bold;
    margin-bottom:15px;
    font-family:default;
    text-decoration:underline;
    cursor:url(src/assets/cursor/pointer-old.png), pointer;
    font-size: clamp(1.25rem, 1.1343rem + 0.6173vw, 1.6rem);

    &:hover{
      background:#ff630f;
    }
  }
  
  @media(max-width:1132px){
    flex-direction:column;
    align-items: center;
  }
`,w0=E.div`
  display: flex;
  flex-wrap: no-wrap;
  background:#dddddd;
`,x0=E.img`
  width: 45px;
  height: 35px;
  margin-bottom:-5px;
`;function S0({consultarSiExiste:e}){const n=new Audio(wc);var r=new Date,o=r.getFullYear(),i=o.toString();const[l,a]=T.useState("o");T.useEffect(()=>{const h=setInterval(()=>{a(m=>m==="o"?"a":"o")},2200);return()=>clearInterval(h)},[]);function u(){n.play(),s(),e()}function s(){localStorage.setItem("TOKENB","NOINICIO")}return N(s0,{children:[N("div",{children:[d(d0,{children:"://Leandro Avila"}),N(f0,{children:[N("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"#666c13",children:[d("path",{d:"M20 10C20 14.4183 12 22 12 22C12 22 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z",stroke:"#000"}),d("path",{d:"M12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11Z",fill:"#000",stroke:"#000"})]}),d("h2",{children:" Buenos Aires, Argentina 🇦🇷"})]}),d(c0,{children:N(h0,{children:[N(p0,{children:["Hola ",d(bu,{children:"🖐🏽"}),d(bu,{children:"🖐🏽"})]}),d("br",{}),N("span",{children:["Bienvenid",d(g0,{children:l}),"///"]})]})}),d(m0,{onClick:u,children:"Conóceme más  ↗"})]}),N(v0,{children:[d(w0,{children:[...Array(31)].map((h,m)=>d(x0,{src:u0,alt:"Imagen repetida"},`imagen-${m}`))}),N(y0,{children:[d("a",{href:"mailto:leandroav.dev@gmail.com",children:"[correo]"}),d("a",{href:"https://www.linkedin.com/in/l3anav/",children:"[linkedin]"}),d("a",{href:"https://github.com/l3anav",children:"[github]"})]}),N("p",{children:["1996-",i]})]})]})}const k0="/assets/error-e6613953.ogg",A0=E.div`
  grid-column: 2;
  grid-row: 1;
  width:95.3%;
  height:370px;
  margin-top: 18%;
  position: relative;

  @media(max-width:820px){
        display:none;
    }
`,C0=E(_a)`
  height: 80%;
  color:${e=>e.colorCruz};
  margin-left:70%;

  :active{
    border-bottom:${e=>e.activado?"2px solid #1c1c1c":"2px solid white"};
    border-right:${e=>e.activado?"2px solid #1c1c1c":"2px solid white"};
    border-left: ${e=>e.activado?"2px solid white":"2px solid black"};
    border-top: ${e=>e.activado?"2px solid white":"2px solid black"};
  }
`,Gu=E(Zc)`
  font-size:12px;
  margin-top:8px;
  margin-left:10px;
`,E0=E.div`
  position:absolute;
  top:0;
  z-index:3;
  width:300px;
  height:150px;
  display:flex;
  margin-top:15%;
  margin-left:25%;
  background:#aaaaaa;
  flex-direction:column;

  span{ 
    display:flex;

    svg{
      margin-left:10px;
      margin-right:5px;
    }

    color:#1c1c1c;
    margin-top:25px;
    margin-bottom:10px;
    text-align:center;
    font-family:IBMRegular;
  }
`,I0=E(_a)`
  color:#7c7c7c;

  :active{
    border-bottom: 2px solid #1c1c1c;
    border-right: 2px solid #1c1c1c;
    border-left: 2px solid white;
    border-top: 2px solid white;
  }
`,P0=E.button`
  position:absolute;
  top:80%;
  right:10px;
  width:20%;
  background:#d4d4d4;

  outline:1px solid black;
  border-top:2px solid white;
  border-left:2px solid white;
  border-right:2px solid #c1c1c1;
  border-bottom:2px solid #c1c1c1;
  cursor:url(src/assets/cursor/cursor-old.png), pointer;

  :active{
    border-top:2px solid #c1c1c1;
    border-left:2px solid #c1c1c1; 
    border-right:2px solid white;
    border-bottom:2px solid white;
  }
`,N0=()=>{const e=T.useRef(null),t=new Audio(k0),[n,r]=T.useState(!1),[o,i]=T.useState(!1),l=()=>{setTimeout(()=>{t.play(),i(!0)},500)};return T.useEffect(()=>{const a=e.current.children.length;n?l():i(!1);for(let u=0;u<a;u++){const s=e.current.children[u].children[0];s&&n?(s.style.animation="none",s.style.zIndex="2",s.style.filter="grayscale(0.5)"):s&&!n&&(s.style.filter="none",s.style.zIndex="1",s.style.animation="rotate 25s linear")}},[n]),N(A0,{children:[o&&N(E0,{children:[N(Cl,{children:[d(Gu,{children:"Mensaje del Sistema"}),d(I0,{children:"X"})]}),N("span",{children:[N("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:[d("title",{children:"close_circle_fill"}),N("g",{id:"close_circle_fill",fill:"none",children:[d("path",{d:"M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z"}),d("path",{fill:"#FF6252FF",d:"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2M9.879 8.464a1 1 0 0 0-1.498 1.32l.084.095 2.12 2.12-2.12 2.122a1 1 0 0 0 1.32 1.498l.094-.083L12 13.414l2.121 2.122a1 1 0 0 0 1.498-1.32l-.083-.095L13.414 12l2.122-2.121a1 1 0 0 0-1.32-1.498l-.095.083L12 10.586z"})]})]}),"Error al cerrar el proceso."]}),d(P0,{onClick:()=>setTimeout(()=>{r(!1)},1e3),children:"Reiniciar"})]}),N(Cl,{children:[d(Gu,{children:"Preview Proyectos"}),d(C0,{activado:n,colorCruz:n?"#7c7c7c":"#000",onClick:()=>r(!0),children:"X"})]}),d("div",{id:"billboard-outer",children:N("ol",{id:"billboard",ref:e,children:[N("li",{children:[d("div",{}),d("div",{}),d("div",{})]}),N("li",{children:[d("div",{}),d("div",{}),d("div",{})]}),N("li",{children:[d("div",{}),d("div",{}),d("div",{})]}),N("li",{children:[d("div",{}),d("div",{}),d("div",{})]}),N("li",{children:[d("div",{}),d("div",{}),d("div",{})]}),N("li",{children:[d("div",{}),d("div",{}),d("div",{})]}),N("li",{children:[d("div",{}),d("div",{}),d("div",{})]}),N("li",{children:[d("div",{}),d("div",{}),d("div",{})]}),N("li",{children:[d("div",{}),d("div",{}),d("div",{})]}),N("li",{children:[d("div",{}),d("div",{}),d("div",{})]}),N("li",{children:[d("div",{}),d("div",{}),d("div",{})]}),N("li",{children:[d("div",{}),d("div",{}),d("div",{})]}),N("li",{children:[d("div",{}),d("div",{}),d("div",{})]}),N("li",{children:[d("div",{}),d("div",{}),d("div",{})]}),N("li",{children:[d("div",{}),d("div",{}),d("div",{})]}),N("li",{children:[d("div",{}),d("div",{}),d("div",{})]}),N("li",{children:[d("div",{}),d("div",{}),d("div",{})]}),N("li",{children:[d("div",{}),d("div",{}),d("div",{})]})]})})]})},T0=E.p`
  
  color: #fff;
  margin-left:20px;
  letter-spacing:5px;
  display: ${e=>e.displaySlogan};

  background-image:
  linear-gradient(to right, #dddddd 2px, transparent 2px),
  linear-gradient(to bottom, #dddddd 2px, transparent 2px);
  background-size: 3.5rem 3.5rem;
  background-position: center center;

  user-select:none;
  font-family:Zimra;
  font-size: clamp(2.1875rem, 1.3773rem + 4.321vw, 6.5625rem);

  text-shadow: -2px 10px 0 #000,
               -3px 9px 0 #000,
               -4px 8px 0 #000,
               -5px 6px 0 #000,
               -6px 5px 0 #000,
               -7px 5px 0 #000,
               -8px 4px 0 #000,
               -9px 3px 0 #000,
               -10px 2px 0 #000,
               -11px 1px 0 #000;

`,z0=E.div`
  
  margin:0;
  padding:0;
  grid-row:1;
  display:flex;
  grid-column:2;
  height:100vh;
  position:relative;
  align-items:center;
  transform:scale(0.95);
  flex-direction:column;
  justify-content: center;
  background-color:none;
  
  p{
    letter-spacing:8px;
  }

  @media (max-width:1132px){

    p{
      letter-spacing:3px;
    }

  }
`;function R0(){const[e,t]=T.useState(0),[n,r]=T.useState("flex"),o=()=>{t(window.innerWidth)};return T.useEffect(()=>(o(),window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}),[]),T.useEffect(()=>{e>1130?r("flex"):r("none")},[e]),d(nt,{children:d(z0,{children:d(T0,{displaySlogan:n,children:"Diseño y Desarollo el sitio web que te ayude a alcanzar tus objetivos de negocio."})})})}const O0="/assets/yahoopage-7fd957b0.gif",L0="data:image/gif;base64,R0lGODlh1AE8ANUAAP///wAz/wAA7gAA/zMz/2Zm/5mZ/8zM/xkZGxISEysrLDQ0NcnJzF1dXu7u70dIYVRVcW5xmWFjgYaLsT0+RZygtoyNk6uwyLW70TNm/8LL32aZ/+Hj59PX3pnM/8z//0xNTW5vb7T1unDpdd3+3y/dMgLOBAkJCP39/fb29iIiIgEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAA1AE8AAAG/0CAcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6HQXxUap3/C4fE6v2+2pC2PPcdyjBwceBoQGgR9/iYqLjI2LKBwdABx7DHqWDCluix8GBRkBoaKjoRkbB46pqqusrVAMHR2wlbCUlhWwm3MHGwSkv78DBq7ExcbHdbS3FRUWFRcYshga0Ax9bx6gwNukqMjf4OHiVimze7gW6ekhIenMzBfVGAwOKWMGvtwBGfz9v+MAAwoMyEbPhXfq1llg16ABiIbsLEx496xWlwPaSBHYYCjJAQPaBoocSXIVCgYUEy5cyC5EQxAgKCyY+QBChAk4J1jgUuBXBv8DiIYEIkLIGwCMJZMqXRonBToLDFSybPkypkwFCBKcQEDhAU4tB34VMCp0wIANQ3yBGsu0LRoBcJcI6AK3LoC5QvAiqav3SN8ifP/mjTvEbmHDhtGwcSp1XUuGDmHKXKAAq9YVCSJcyLKBVIGgRsKeHVJgg+kB+8i6XU23sBLBWfTGJeyXCOy8ewHrxn3XNe/ft8Ow2SO1nXHIkSlMVqECAYITK1Qw00UlA+pSRj+AFvIhwGghprKNQsu6vJa/sgkjVu+7993Z7dO/T9I3vezBeOfy/b3bNn/3AJ4BiUrtTIUcTDHNpABzCVy2ADNXZBTAMEKFsh0A3pEHwAagXBf/ygAZmCeiFbfd5959JvYmH3CHzZebESbq55qMuJUII375tScgBysd95hLVSVI2YJZnQDdA3pYkVEGF4YVAIceDJFhaJ2NEuKIWEJh340n+iYjjf6BCeCXryUW45gqIgYjeimCGdwXi0XVo49ABjkZkUWucIIEFUhCxQbXXUnEAT2VAgoB3X13hAGjFJDlo0ygdxh776lJJo4qbpEjb25m2mVt/c2oIxlxGvgjkAiCMNOQDBqp50QcUOHkPkWIdp0g132i6BEfZKQafaFCSpKkaH4apqcoBihFfSx6mmmyoPqnW4pmsFHBqQcmt8CdzTXoagI4OUDdE6IISgQoVfYa/4AHT1oX5RLaEOAEbbQJW1Kbg3Ea374uvtkEs8V2qiyxxm7qrL9eoODAtT82FCRM27KqgrfQraDABBewIYUB1wkxDIeoeBMKu08GAIC7TWjzrlwr4idqpTfSS2nA7CFs77L1zpffzgAHCJ+yU+w3qZf1BuZX0UhvKSAbHbDUQJ0vJTcZZcwVWfEKFDwzrhOioGJdZyB6h0oojIbi9QArK9EdrZE+y+/MbNb4Mpoo2nxzI3bffUQbUTkcdaoQr7pgt1pdDcEEDGzNBMmOApANRo1iOCGthACathKAmtz2pQHzu++Zl0KrNxaBlW766ainrvrqrLfu+uuJkXqSBYBHFv+44IM3WPgKvK8gwQTiKq5ESEIMcvI+nYVo9j4cP4l2Ed5RSMTav8Z8sJeT5ix6jqHvl/fo4APEQAiA366qgoNntXvvJ0RgQRtRTAneWQWgvbbkJ5s1wEf7Q/8dIUOwjvSAxbkz/Uda13ObwQ4YvgYOBAXlsB3EVHU+iU2MYr3jXfsqIDwlOMkoAgTU2EwWCiFsgC1HSaGUhIEhs5CHYxoCVsGw16wWJbBYdHOgDkcCwQtUcFVArMzgLri+DCIgAhjooEdQcy5hiBB/FloUiAKINkD1o3hTlIu+hsaf2NVIaTWEGdB2SEZwoKACM/kh7pjDIIpdrXcLQJwSkcAxc4X/sH8lLOERwoIWyE0IFOyi0AGymIbvQYpYYmKZ0Qb2BEQyUIYIDNYY/0MjQ4pRS4qxAHMUAESqsZGIRnpjBr3SgTlKMYYCZJTXNBeaJ2FkbNepUgDkhcUYHg12uMzl6ZLiSEsSbFm7WWDb5sWlaMltkpA0pCWpsBgLOGRBlflkGwvnqgxm8HCmPIIHdgWoAXrEO6YAkRXRRTYidLOMckCkpVxWzC/qK2eR7JJdKglPwexMnjx7kajmeaJ69id2ZipDGxwwj2Y0ACvOIZwbrclQPmkMEANonAlZGEBaFkEbvACRu3qSvOPNr3roNEMvbUgtSnIvX5N0ZD/DCDR6olSY//Gs5EtHZaMtGmsMw3GGQa61gMJRs5oM7V1mODiFQZqLUGSJ3sg44qSPhc1k7ioFEyV3oZCeYaQMtOc/Z2jMT8GUkdOi4U2DJdMx/hKBBvvqFzjwjAtgbB7xMKgKgBpUayogAgyogh6TYAC0SFUYerRiHgOAK9SgYpvmsupbgonDSmkVrVxtp1e76EWtGnCsMZ1s9iTZrMuCQWEXcEcFMICBZ1TgJhibgAQe0NO6WvMBEfDTFKwDUiEsTxTC+AATOVYojB5lZQL8F2ejUFPSDQSrOHzs51hK0y3iK54J9CxZNdtYsF5WrVqYXQgiEIEHSOAmpHUrd1Hr1tWqwLW8s/9JrP5EyCMsz4lTNCoMrROA+qmmefNqmReW2dVx4Ou5/oRsWpNJwxidFVkDRmbnuBrg5HY2DE7hrgQkEAIJQMC7vxutBgwwgfHmRLUUSEBQT3A4e1CBekmwUAnreJRQAOoUhOWYarwjUZbZkJ0Itmy/1EOvZ9VnNvAUB0D7ZZtEghVZYi0ywH6WLzZ5r8mdNTKO7/ljs2ovaaPSQjmulY4JQ2DCEbBwTSIADwNwtwAe7vADKHDe3qmAzA+dbXuhF4D7GbWFGcDIAFVD30a6Lcos1c+mEsxjm0pZsf0t5DCXMiALhJm7Ff5yhRsA5ppYeAIYEG8BbDJe7kJgAdBZgGb/svnN+iKhhL5ocTgJy4QOefM1f15wdQVG6LfNzb+6zLWud83rXvt6ddnNg/sgsF0LWHjCx/bysR/A7MOZVrUEsEmHJdwVvLqB1EfQhi1tS8IBCAE1nXl1EdQVUUwWUKyLnNughQbgJyP63WlgTAS+LIEGhNkC3o00sedN6QnXhNlkvgCH09zpCBwA2ykORY257TjycKQJJGObn89taAIWuJjS5S+8Nw4FB8SDAaU19oS3C4F+SwAE3w3Bhb1cEwh82tIWuMAGpn3hBxAgAprAQsQTCwopqAucwIxsghlpwOuiW8EcTzozPR4JDXRAA6V130HC3HIvh9nllm42s5Uz/+YKTKAAq2W2BUyM8EWNQtxO+IAsnxQ0m17yxzrmVD5rqLQgK/3uUXAAyGOhgb77HepQx4CjH+3ylX/5wlj/95oXwOwMo5lPJs5C2UJBALR7pFBdw7vm99t2UC1T40TgwAVi8fS/930apKWGaSNA8i97t/CKV7xMGo/aCuQcAGXfIwE8xLzafgTzoth2I39NfNdt3hWf12LQrXASDnDA9H5Hfd8v0F0ye13kh6dA4SHQlQszntmsZTwzZMuFtZOiH/zghvCPv3nlHm1GcC+y59Lk5M8xWQooiIcGPtCBA5Q++lB3ARZWeM7QDBJWeNqXeLHXbDhBfl6AD/oADBlwOf/sV4GXdIHONWgXN1bCZHRIxwRs4HHM4HTQB3UVcGyH53KaoRNU13JaB34tBwHMkDi5BwggoQ+mUFsWaIHud2S1diyMBVmyVgUDhQEYY3rh1WEDuGyakWnNgHiNB4MxOBFJBD9mEAhYqIM7yINYNl1ypyZKxiUE84PM1wYo0AFeNw2nR1qZpoSF14RseBAT0HjKUXir5WwZY4WOMAIlIAIkUAIjgAIlUAJbqFg9mFluR0mK6IMPdgVmCEHlgBMX8Hfh5XVhhmmZlmnQ4ITd5YKF9w5muAomYAIkMAImMAIiYAKEWIg8WHELpoHSMoaN6Iga0waUIInMwIZO+Ay6qIn/8QANOCEB3QdbzKAJekgGeQUAyQgFoyiIpGiKIxB5rHh8PQYcSDN/9xSGm6UzW2CGeZAToxWHvRgPmfiLTjgBF8Zd7/OIZ7ACebUCUZCKJZACowgAJWACIjCN+pgUj9gBHYYTqNeLcWgAv1iQcug+wXOMVGABqyIEDNkAyrgADbAADLAAK0CRIcAA7ggA7uhMC9AOEgkAzgQA0EgCqggAo0gC+7hDxdeSu7YGfPOPmxh45ViO8UCQAkd9FhAroeiIIXACDEmRQPmRFjCU8LiR7oiU4wOUF1mULGEBpigCqTgCJmkCcbaSWEkQj8gA//gMAaiLNxlXccV6peQFDQCP/xp5lqtSlCJ5lO+okW8ZAke5Ex2ZkfdYivgoj1m5lw+0CW4QYTdBkF8JDQYZV1CBezWoBHJZkStQlOPjDPBYAW7JkXAJl2fJkRy0kShQlfT4jKfIl6CJDKbEVpeIieFFmL/IYctolhdJkQAwkQuAAgwpmwvwmhRJkRbQmuOzAiiwAO/jmgDwhyNgj/PIhyoZmsiplSlAmjdRAQZwmr+Yi1fZjXIZZ494ldRxncfIkInzkSIJnMkZnmZ0bSngj981EZv4ixijkFswkdnJjksAP8e4mBwZm7wjnvgZDn4pbNKGkxxme+wpBj2Je1PwUNeWmPmZoIoQghgQZr+DExWQkCMIOgcTqqAWWgfXJgTe2KCHcwESqp8XGqLf8Igp0HfGGAZBAAA7",D0="/assets/hotmail-db401f06.gif",M0="/assets/goldenLinux-32ad8cfa.gif",Yu="/assets/internetexplorer-3eeaaded.gif",_0=E.div`
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
`,F0=E.div`
    grid-row:1;
    grid-column:2;
    cursor:url(src/assets/cursor/pointer-old.png), pointer;

     @media (max-width:1132px){
        grid-row:2;
        grid-column:1;
        margin-bottom:140px;
    }
`,j0=E.img`
    
    margin-top:30px;
    margin-left:100px;
    
     @media (max-width:1132px){
      margin-top:0;
      margin-left:3%;
      margin-right:2%;
      width:95%;
    }
`;function B0(){const e=[{src:Yu,href:"https://www.microsoft.com/es-AR/download/internet-explorer.aspx"},{src:O0,href:"https://espanol.yahoo.com/"},{src:D0,href:"https://www.hotmail.com/"},{src:L0,href:"https://www.intel.la/"},{src:M0,href:"https://goldendoglinux.org/"}],t=Ai(),n=Jn(),[r,o]=T.useState(!0),[i,l]=T.useState(Yu);function a(){const s=Yc(e.length);return e[s]}T.useEffect(()=>{const s=h=>{h.key==="Escape"&&!t&&n(!1)};return l(a()),document.addEventListener("keydown",s,!1),()=>{document.removeEventListener("keydown",s,!1)}},[]),T.useEffect(()=>{u()},[r]);function u(){localStorage.getItem("TOKENB")==="NOINICIO"?o(!1):localStorage.getItem("TOKENB")==="SIINICIO"&&o(!0)}return d(nt,{children:d(_0,{mostrarInicio:r,children:r?N(nt,{children:[d(S0,{consultarSiExiste:u}),d(F0,{children:d("a",{href:i.href,target:"_blanck",children:d(j0,{src:i.src})})}),d(N0,{})]}):N(nt,{children:[d(a0,{consultarSiExiste:u}),d(R0,{})]})})})}var El={},Xc={exports:{}},Xe={},Kc={exports:{}},qc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,F){var j=I.length;I.push(F);e:for(;0<j;){var ee=j-1>>>1,z=I[ee];if(0<o(z,F))I[ee]=F,I[j]=z,j=ee;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var F=I[0],j=I.pop();if(j!==F){I[0]=j;e:for(var ee=0,z=I.length,R=z>>>1;ee<R;){var D=2*(ee+1)-1,B=I[D],v=D+1,W=I[v];if(0>o(B,j))v<z&&0>o(W,B)?(I[ee]=W,I[v]=j,ee=v):(I[ee]=B,I[D]=j,ee=D);else if(v<z&&0>o(W,j))I[ee]=W,I[v]=j,ee=v;else break e}}return F}function o(I,F){var j=I.sortIndex-F.sortIndex;return j!==0?j:I.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var u=[],s=[],h=1,m=null,g=3,S=!1,x=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(I){for(var F=n(s);F!==null;){if(F.callback===null)r(s);else if(F.startTime<=I)r(s),F.sortIndex=F.expirationTime,t(u,F);else break;F=n(s)}}function y(I){if(w=!1,p(I),!x)if(n(u)!==null)x=!0,xt(A);else{var F=n(s);F!==null&&De(y,F.startTime-I)}}function A(I,F){x=!1,w&&(w=!1,f(L),L=-1),S=!0;var j=g;try{for(p(F),m=n(u);m!==null&&(!(m.expirationTime>F)||I&&!ge());){var ee=m.callback;if(typeof ee=="function"){m.callback=null,g=m.priorityLevel;var z=ee(m.expirationTime<=F);F=e.unstable_now(),typeof z=="function"?m.callback=z:m===n(u)&&r(u),p(F)}else r(u);m=n(u)}if(m!==null)var R=!0;else{var D=n(s);D!==null&&De(y,D.startTime-F),R=!1}return R}finally{m=null,g=j,S=!1}}var O=!1,_=null,L=-1,b=5,V=-1;function ge(){return!(e.unstable_now()-V<b)}function pe(){if(_!==null){var I=e.unstable_now();V=I;var F=!0;try{F=_(!0,I)}finally{F?xe():(O=!1,_=null)}}else O=!1}var xe;if(typeof c=="function")xe=function(){c(pe)};else if(typeof MessageChannel<"u"){var He=new MessageChannel,Ne=He.port2;He.port1.onmessage=pe,xe=function(){Ne.postMessage(null)}}else xe=function(){C(pe,0)};function xt(I){_=I,O||(O=!0,xe())}function De(I,F){L=C(function(){I(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){x||S||(x=!0,xt(A))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(I){switch(g){case 1:case 2:case 3:var F=3;break;default:F=g}var j=g;g=F;try{return I()}finally{g=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,F){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var j=g;g=I;try{return F()}finally{g=j}},e.unstable_scheduleCallback=function(I,F,j){var ee=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?ee+j:ee):j=ee,I){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=j+z,I={id:h++,callback:F,priorityLevel:I,startTime:j,expirationTime:z,sortIndex:-1},j>ee?(I.sortIndex=j,t(s,I),n(u)===null&&I===n(s)&&(w?(f(L),L=-1):w=!0,De(y,j-ee))):(I.sortIndex=z,t(u,I),x||S||(x=!0,xt(A))),I},e.unstable_shouldYield=ge,e.unstable_wrapCallback=function(I){var F=g;return function(){var j=g;g=F;try{return I.apply(this,arguments)}finally{g=j}}}})(qc);Kc.exports=qc;var V0=Kc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $0=T,Je=V0;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ed=new Set,Er={};function gn(e,t){Vn(e,t),Vn(e+"Capture",t)}function Vn(e,t){for(Er[e]=t,e=0;e<t.length;e++)ed.add(t[e])}var Pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Il=Object.prototype.hasOwnProperty,U0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ju={},Zu={};function Q0(e){return Il.call(Zu,e)?!0:Il.call(Ju,e)?!1:U0.test(e)?Zu[e]=!0:(Ju[e]=!0,!1)}function W0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function H0(e,t,n,r){if(t===null||typeof t>"u"||W0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function je(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var Pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Pe[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Pe[t]=new je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Pe[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Pe[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Pe[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Pe[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Pe[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Pe[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Pe[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var Fa=/[\-:]([a-z])/g;function ja(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Fa,ja);Pe[t]=new je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Fa,ja);Pe[t]=new je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Fa,ja);Pe[t]=new je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Pe[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});Pe.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Pe[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ba(e,t,n,r){var o=Pe.hasOwnProperty(t)?Pe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(H0(t,n,o,r)&&(n=null),r||o===null?Q0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Rt=$0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Kr=Symbol.for("react.element"),xn=Symbol.for("react.portal"),Sn=Symbol.for("react.fragment"),Va=Symbol.for("react.strict_mode"),Pl=Symbol.for("react.profiler"),td=Symbol.for("react.provider"),nd=Symbol.for("react.context"),$a=Symbol.for("react.forward_ref"),Nl=Symbol.for("react.suspense"),Tl=Symbol.for("react.suspense_list"),Ua=Symbol.for("react.memo"),Dt=Symbol.for("react.lazy"),rd=Symbol.for("react.offscreen"),Xu=Symbol.iterator;function tr(e){return e===null||typeof e!="object"?null:(e=Xu&&e[Xu]||e["@@iterator"],typeof e=="function"?e:null)}var ae=Object.assign,Yi;function sr(e){if(Yi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Yi=t&&t[1]||""}return`
`+Yi+e}var Ji=!1;function Zi(e,t){if(!e||Ji)return"";Ji=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(s){var r=s}Reflect.construct(e,[],t)}else{try{t.call()}catch(s){r=s}e.call(t.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var o=s.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var u=`
`+o[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{Ji=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?sr(e):""}function b0(e){switch(e.tag){case 5:return sr(e.type);case 16:return sr("Lazy");case 13:return sr("Suspense");case 19:return sr("SuspenseList");case 0:case 2:case 15:return e=Zi(e.type,!1),e;case 11:return e=Zi(e.type.render,!1),e;case 1:return e=Zi(e.type,!0),e;default:return""}}function zl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Sn:return"Fragment";case xn:return"Portal";case Pl:return"Profiler";case Va:return"StrictMode";case Nl:return"Suspense";case Tl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case nd:return(e.displayName||"Context")+".Consumer";case td:return(e._context.displayName||"Context")+".Provider";case $a:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ua:return t=e.displayName||null,t!==null?t:zl(e.type)||"Memo";case Dt:t=e._payload,e=e._init;try{return zl(e(t))}catch{}}return null}function G0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zl(t);case 8:return t===Va?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function od(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Y0(e){var t=od(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qr(e){e._valueTracker||(e._valueTracker=Y0(e))}function id(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=od(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ro(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Rl(e,t){var n=t.checked;return ae({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ku(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Zt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ld(e,t){t=t.checked,t!=null&&Ba(e,"checked",t,!1)}function Ol(e,t){ld(e,t);var n=Zt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ll(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ll(e,t.type,Zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function qu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ll(e,t,n){(t!=="number"||Ro(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var cr=Array.isArray;function On(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Zt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Dl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return ae({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function es(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(cr(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Zt(n)}}function ad(e,t){var n=Zt(t.value),r=Zt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ts(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ud(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ml(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ud(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var eo,sd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(eo=eo||document.createElement("div"),eo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=eo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ir(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var hr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},J0=["Webkit","ms","Moz","O"];Object.keys(hr).forEach(function(e){J0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),hr[t]=hr[e]})});function cd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||hr.hasOwnProperty(e)&&hr[e]?(""+t).trim():t+"px"}function dd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=cd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Z0=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _l(e,t){if(t){if(Z0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Fl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jl=null;function Qa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bl=null,Ln=null,Dn=null;function ns(e){if(e=br(e)){if(typeof Bl!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Ti(t),Bl(e.stateNode,e.type,t))}}function fd(e){Ln?Dn?Dn.push(e):Dn=[e]:Ln=e}function pd(){if(Ln){var e=Ln,t=Dn;if(Dn=Ln=null,ns(e),t)for(e=0;e<t.length;e++)ns(t[e])}}function hd(e,t){return e(t)}function md(){}var Xi=!1;function gd(e,t,n){if(Xi)return e(t,n);Xi=!0;try{return hd(e,t,n)}finally{Xi=!1,(Ln!==null||Dn!==null)&&(md(),pd())}}function Pr(e,t){var n=e.stateNode;if(n===null)return null;var r=Ti(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Vl=!1;if(Pt)try{var nr={};Object.defineProperty(nr,"passive",{get:function(){Vl=!0}}),window.addEventListener("test",nr,nr),window.removeEventListener("test",nr,nr)}catch{Vl=!1}function X0(e,t,n,r,o,i,l,a,u){var s=Array.prototype.slice.call(arguments,3);try{t.apply(n,s)}catch(h){this.onError(h)}}var mr=!1,Oo=null,Lo=!1,$l=null,K0={onError:function(e){mr=!0,Oo=e}};function q0(e,t,n,r,o,i,l,a,u){mr=!1,Oo=null,X0.apply(K0,arguments)}function eg(e,t,n,r,o,i,l,a,u){if(q0.apply(this,arguments),mr){if(mr){var s=Oo;mr=!1,Oo=null}else throw Error(k(198));Lo||(Lo=!0,$l=s)}}function vn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function vd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function rs(e){if(vn(e)!==e)throw Error(k(188))}function tg(e){var t=e.alternate;if(!t){if(t=vn(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return rs(o),e;if(i===r)return rs(o),t;i=i.sibling}throw Error(k(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function yd(e){return e=tg(e),e!==null?wd(e):null}function wd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=wd(e);if(t!==null)return t;e=e.sibling}return null}var xd=Je.unstable_scheduleCallback,os=Je.unstable_cancelCallback,ng=Je.unstable_shouldYield,rg=Je.unstable_requestPaint,de=Je.unstable_now,og=Je.unstable_getCurrentPriorityLevel,Wa=Je.unstable_ImmediatePriority,Sd=Je.unstable_UserBlockingPriority,Do=Je.unstable_NormalPriority,ig=Je.unstable_LowPriority,kd=Je.unstable_IdlePriority,Ei=null,yt=null;function lg(e){if(yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(Ei,e,void 0,(e.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:sg,ag=Math.log,ug=Math.LN2;function sg(e){return e>>>=0,e===0?32:31-(ag(e)/ug|0)|0}var to=64,no=4194304;function dr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Mo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=dr(a):(i&=l,i!==0&&(r=dr(i)))}else l=n&~o,l!==0?r=dr(l):i!==0&&(r=dr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ft(t),o=1<<n,r|=e[n],t&=~o;return r}function cg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-ft(i),a=1<<l,u=o[l];u===-1?(!(a&n)||a&r)&&(o[l]=cg(a,t)):u<=t&&(e.expiredLanes|=a),i&=~a}}function Ul(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ad(){var e=to;return to<<=1,!(to&4194240)&&(to=64),e}function Ki(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Wr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ft(t),e[t]=n}function fg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-ft(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Ha(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ft(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var X=0;function Cd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ed,ba,Id,Pd,Nd,Ql=!1,ro=[],Ut=null,Qt=null,Wt=null,Nr=new Map,Tr=new Map,_t=[],pg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function is(e,t){switch(e){case"focusin":case"focusout":Ut=null;break;case"dragenter":case"dragleave":Qt=null;break;case"mouseover":case"mouseout":Wt=null;break;case"pointerover":case"pointerout":Nr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tr.delete(t.pointerId)}}function rr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=br(t),t!==null&&ba(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function hg(e,t,n,r,o){switch(t){case"focusin":return Ut=rr(Ut,e,t,n,r,o),!0;case"dragenter":return Qt=rr(Qt,e,t,n,r,o),!0;case"mouseover":return Wt=rr(Wt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Nr.set(i,rr(Nr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Tr.set(i,rr(Tr.get(i)||null,e,t,n,r,o)),!0}return!1}function Td(e){var t=on(e.target);if(t!==null){var n=vn(t);if(n!==null){if(t=n.tag,t===13){if(t=vd(n),t!==null){e.blockedOn=t,Nd(e.priority,function(){Id(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Wl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);jl=r,n.target.dispatchEvent(r),jl=null}else return t=br(n),t!==null&&ba(t),e.blockedOn=n,!1;t.shift()}return!0}function ls(e,t,n){yo(e)&&n.delete(t)}function mg(){Ql=!1,Ut!==null&&yo(Ut)&&(Ut=null),Qt!==null&&yo(Qt)&&(Qt=null),Wt!==null&&yo(Wt)&&(Wt=null),Nr.forEach(ls),Tr.forEach(ls)}function or(e,t){e.blockedOn===t&&(e.blockedOn=null,Ql||(Ql=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,mg)))}function zr(e){function t(o){return or(o,e)}if(0<ro.length){or(ro[0],e);for(var n=1;n<ro.length;n++){var r=ro[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ut!==null&&or(Ut,e),Qt!==null&&or(Qt,e),Wt!==null&&or(Wt,e),Nr.forEach(t),Tr.forEach(t),n=0;n<_t.length;n++)r=_t[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<_t.length&&(n=_t[0],n.blockedOn===null);)Td(n),n.blockedOn===null&&_t.shift()}var Mn=Rt.ReactCurrentBatchConfig,_o=!0;function gg(e,t,n,r){var o=X,i=Mn.transition;Mn.transition=null;try{X=1,Ga(e,t,n,r)}finally{X=o,Mn.transition=i}}function vg(e,t,n,r){var o=X,i=Mn.transition;Mn.transition=null;try{X=4,Ga(e,t,n,r)}finally{X=o,Mn.transition=i}}function Ga(e,t,n,r){if(_o){var o=Wl(e,t,n,r);if(o===null)ul(e,t,r,Fo,n),is(e,r);else if(hg(o,e,t,n,r))r.stopPropagation();else if(is(e,r),t&4&&-1<pg.indexOf(e)){for(;o!==null;){var i=br(o);if(i!==null&&Ed(i),i=Wl(e,t,n,r),i===null&&ul(e,t,r,Fo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else ul(e,t,r,null,n)}}var Fo=null;function Wl(e,t,n,r){if(Fo=null,e=Qa(r),e=on(e),e!==null)if(t=vn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=vd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fo=e,null}function zd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(og()){case Wa:return 1;case Sd:return 4;case Do:case ig:return 16;case kd:return 536870912;default:return 16}default:return 16}}var Bt=null,Ya=null,wo=null;function Rd(){if(wo)return wo;var e,t=Ya,n=t.length,r,o="value"in Bt?Bt.value:Bt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return wo=o.slice(e,1<r?1-r:void 0)}function xo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function oo(){return!0}function as(){return!1}function Ke(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?oo:as,this.isPropagationStopped=as,this}return ae(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oo)},persist:function(){},isPersistent:oo}),t}var Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ja=Ke(Xn),Hr=ae({},Xn,{view:0,detail:0}),yg=Ke(Hr),qi,el,ir,Ii=ae({},Hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Za,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ir&&(ir&&e.type==="mousemove"?(qi=e.screenX-ir.screenX,el=e.screenY-ir.screenY):el=qi=0,ir=e),qi)},movementY:function(e){return"movementY"in e?e.movementY:el}}),us=Ke(Ii),wg=ae({},Ii,{dataTransfer:0}),xg=Ke(wg),Sg=ae({},Hr,{relatedTarget:0}),tl=Ke(Sg),kg=ae({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ag=Ke(kg),Cg=ae({},Xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Eg=Ke(Cg),Ig=ae({},Xn,{data:0}),ss=Ke(Ig),Pg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ng={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Tg[e])?!!t[e]:!1}function Za(){return zg}var Rg=ae({},Hr,{key:function(e){if(e.key){var t=Pg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ng[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Za,charCode:function(e){return e.type==="keypress"?xo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Og=Ke(Rg),Lg=ae({},Ii,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cs=Ke(Lg),Dg=ae({},Hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Za}),Mg=Ke(Dg),_g=ae({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fg=Ke(_g),jg=ae({},Ii,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bg=Ke(jg),Vg=[9,13,27,32],Xa=Pt&&"CompositionEvent"in window,gr=null;Pt&&"documentMode"in document&&(gr=document.documentMode);var $g=Pt&&"TextEvent"in window&&!gr,Od=Pt&&(!Xa||gr&&8<gr&&11>=gr),ds=String.fromCharCode(32),fs=!1;function Ld(e,t){switch(e){case"keyup":return Vg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kn=!1;function Ug(e,t){switch(e){case"compositionend":return Dd(t);case"keypress":return t.which!==32?null:(fs=!0,ds);case"textInput":return e=t.data,e===ds&&fs?null:e;default:return null}}function Qg(e,t){if(kn)return e==="compositionend"||!Xa&&Ld(e,t)?(e=Rd(),wo=Ya=Bt=null,kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Od&&t.locale!=="ko"?null:t.data;default:return null}}var Wg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ps(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Wg[e.type]:t==="textarea"}function Md(e,t,n,r){fd(r),t=jo(t,"onChange"),0<t.length&&(n=new Ja("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var vr=null,Rr=null;function Hg(e){bd(e,0)}function Pi(e){var t=En(e);if(id(t))return e}function bg(e,t){if(e==="change")return t}var _d=!1;if(Pt){var nl;if(Pt){var rl="oninput"in document;if(!rl){var hs=document.createElement("div");hs.setAttribute("oninput","return;"),rl=typeof hs.oninput=="function"}nl=rl}else nl=!1;_d=nl&&(!document.documentMode||9<document.documentMode)}function ms(){vr&&(vr.detachEvent("onpropertychange",Fd),Rr=vr=null)}function Fd(e){if(e.propertyName==="value"&&Pi(Rr)){var t=[];Md(t,Rr,e,Qa(e)),gd(Hg,t)}}function Gg(e,t,n){e==="focusin"?(ms(),vr=t,Rr=n,vr.attachEvent("onpropertychange",Fd)):e==="focusout"&&ms()}function Yg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pi(Rr)}function Jg(e,t){if(e==="click")return Pi(t)}function Zg(e,t){if(e==="input"||e==="change")return Pi(t)}function Xg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:Xg;function Or(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Il.call(t,o)||!ht(e[o],t[o]))return!1}return!0}function gs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vs(e,t){var n=gs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gs(n)}}function jd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bd(){for(var e=window,t=Ro();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ro(e.document)}return t}function Ka(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Kg(e){var t=Bd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&jd(n.ownerDocument.documentElement,n)){if(r!==null&&Ka(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=vs(n,i);var l=vs(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var qg=Pt&&"documentMode"in document&&11>=document.documentMode,An=null,Hl=null,yr=null,bl=!1;function ys(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bl||An==null||An!==Ro(r)||(r=An,"selectionStart"in r&&Ka(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yr&&Or(yr,r)||(yr=r,r=jo(Hl,"onSelect"),0<r.length&&(t=new Ja("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=An)))}function io(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Cn={animationend:io("Animation","AnimationEnd"),animationiteration:io("Animation","AnimationIteration"),animationstart:io("Animation","AnimationStart"),transitionend:io("Transition","TransitionEnd")},ol={},Vd={};Pt&&(Vd=document.createElement("div").style,"AnimationEvent"in window||(delete Cn.animationend.animation,delete Cn.animationiteration.animation,delete Cn.animationstart.animation),"TransitionEvent"in window||delete Cn.transitionend.transition);function Ni(e){if(ol[e])return ol[e];if(!Cn[e])return e;var t=Cn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vd)return ol[e]=t[n];return e}var $d=Ni("animationend"),Ud=Ni("animationiteration"),Qd=Ni("animationstart"),Wd=Ni("transitionend"),Hd=new Map,ws="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kt(e,t){Hd.set(e,t),gn(t,[e])}for(var il=0;il<ws.length;il++){var ll=ws[il],e1=ll.toLowerCase(),t1=ll[0].toUpperCase()+ll.slice(1);Kt(e1,"on"+t1)}Kt($d,"onAnimationEnd");Kt(Ud,"onAnimationIteration");Kt(Qd,"onAnimationStart");Kt("dblclick","onDoubleClick");Kt("focusin","onFocus");Kt("focusout","onBlur");Kt(Wd,"onTransitionEnd");Vn("onMouseEnter",["mouseout","mouseover"]);Vn("onMouseLeave",["mouseout","mouseover"]);Vn("onPointerEnter",["pointerout","pointerover"]);Vn("onPointerLeave",["pointerout","pointerover"]);gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),n1=new Set("cancel close invalid load scroll toggle".split(" ").concat(fr));function xs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,eg(r,t,void 0,e),e.currentTarget=null}function bd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],u=a.instance,s=a.currentTarget;if(a=a.listener,u!==i&&o.isPropagationStopped())break e;xs(o,a,s),i=u}else for(l=0;l<r.length;l++){if(a=r[l],u=a.instance,s=a.currentTarget,a=a.listener,u!==i&&o.isPropagationStopped())break e;xs(o,a,s),i=u}}}if(Lo)throw e=$l,Lo=!1,$l=null,e}function ne(e,t){var n=t[Xl];n===void 0&&(n=t[Xl]=new Set);var r=e+"__bubble";n.has(r)||(Gd(t,e,2,!1),n.add(r))}function al(e,t,n){var r=0;t&&(r|=4),Gd(n,e,r,t)}var lo="_reactListening"+Math.random().toString(36).slice(2);function Lr(e){if(!e[lo]){e[lo]=!0,ed.forEach(function(n){n!=="selectionchange"&&(n1.has(n)||al(n,!1,e),al(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[lo]||(t[lo]=!0,al("selectionchange",!1,t))}}function Gd(e,t,n,r){switch(zd(t)){case 1:var o=gg;break;case 4:o=vg;break;default:o=Ga}n=o.bind(null,t,n,e),o=void 0,!Vl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ul(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;l=l.return}for(;a!==null;){if(l=on(a),l===null)return;if(u=l.tag,u===5||u===6){r=i=l;continue e}a=a.parentNode}}r=r.return}gd(function(){var s=i,h=Qa(n),m=[];e:{var g=Hd.get(e);if(g!==void 0){var S=Ja,x=e;switch(e){case"keypress":if(xo(n)===0)break e;case"keydown":case"keyup":S=Og;break;case"focusin":x="focus",S=tl;break;case"focusout":x="blur",S=tl;break;case"beforeblur":case"afterblur":S=tl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=us;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=xg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Mg;break;case $d:case Ud:case Qd:S=Ag;break;case Wd:S=Fg;break;case"scroll":S=yg;break;case"wheel":S=Bg;break;case"copy":case"cut":case"paste":S=Eg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=cs}var w=(t&4)!==0,C=!w&&e==="scroll",f=w?g!==null?g+"Capture":null:g;w=[];for(var c=s,p;c!==null;){p=c;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,f!==null&&(y=Pr(c,f),y!=null&&w.push(Dr(c,y,p)))),C)break;c=c.return}0<w.length&&(g=new S(g,x,null,n,h),m.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",g&&n!==jl&&(x=n.relatedTarget||n.fromElement)&&(on(x)||x[Nt]))break e;if((S||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,S?(x=n.relatedTarget||n.toElement,S=s,x=x?on(x):null,x!==null&&(C=vn(x),x!==C||x.tag!==5&&x.tag!==6)&&(x=null)):(S=null,x=s),S!==x)){if(w=us,y="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=cs,y="onPointerLeave",f="onPointerEnter",c="pointer"),C=S==null?g:En(S),p=x==null?g:En(x),g=new w(y,c+"leave",S,n,h),g.target=C,g.relatedTarget=p,y=null,on(h)===s&&(w=new w(f,c+"enter",x,n,h),w.target=p,w.relatedTarget=C,y=w),C=y,S&&x)t:{for(w=S,f=x,c=0,p=w;p;p=yn(p))c++;for(p=0,y=f;y;y=yn(y))p++;for(;0<c-p;)w=yn(w),c--;for(;0<p-c;)f=yn(f),p--;for(;c--;){if(w===f||f!==null&&w===f.alternate)break t;w=yn(w),f=yn(f)}w=null}else w=null;S!==null&&Ss(m,g,S,w,!1),x!==null&&C!==null&&Ss(m,C,x,w,!0)}}e:{if(g=s?En(s):window,S=g.nodeName&&g.nodeName.toLowerCase(),S==="select"||S==="input"&&g.type==="file")var A=bg;else if(ps(g))if(_d)A=Zg;else{A=Yg;var O=Gg}else(S=g.nodeName)&&S.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(A=Jg);if(A&&(A=A(e,s))){Md(m,A,n,h);break e}O&&O(e,g,s),e==="focusout"&&(O=g._wrapperState)&&O.controlled&&g.type==="number"&&Ll(g,"number",g.value)}switch(O=s?En(s):window,e){case"focusin":(ps(O)||O.contentEditable==="true")&&(An=O,Hl=s,yr=null);break;case"focusout":yr=Hl=An=null;break;case"mousedown":bl=!0;break;case"contextmenu":case"mouseup":case"dragend":bl=!1,ys(m,n,h);break;case"selectionchange":if(qg)break;case"keydown":case"keyup":ys(m,n,h)}var _;if(Xa)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else kn?Ld(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Od&&n.locale!=="ko"&&(kn||L!=="onCompositionStart"?L==="onCompositionEnd"&&kn&&(_=Rd()):(Bt=h,Ya="value"in Bt?Bt.value:Bt.textContent,kn=!0)),O=jo(s,L),0<O.length&&(L=new ss(L,e,null,n,h),m.push({event:L,listeners:O}),_?L.data=_:(_=Dd(n),_!==null&&(L.data=_)))),(_=$g?Ug(e,n):Qg(e,n))&&(s=jo(s,"onBeforeInput"),0<s.length&&(h=new ss("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:s}),h.data=_))}bd(m,t)})}function Dr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function jo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Pr(e,n),i!=null&&r.unshift(Dr(e,i,o)),i=Pr(e,t),i!=null&&r.push(Dr(e,i,o))),e=e.return}return r}function yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ss(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,u=a.alternate,s=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&s!==null&&(a=s,o?(u=Pr(n,i),u!=null&&l.unshift(Dr(n,u,a))):o||(u=Pr(n,i),u!=null&&l.push(Dr(n,u,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var r1=/\r\n?/g,o1=/\u0000|\uFFFD/g;function ks(e){return(typeof e=="string"?e:""+e).replace(r1,`
`).replace(o1,"")}function ao(e,t,n){if(t=ks(t),ks(e)!==t&&n)throw Error(k(425))}function Bo(){}var Gl=null,Yl=null;function Jl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zl=typeof setTimeout=="function"?setTimeout:void 0,i1=typeof clearTimeout=="function"?clearTimeout:void 0,As=typeof Promise=="function"?Promise:void 0,l1=typeof queueMicrotask=="function"?queueMicrotask:typeof As<"u"?function(e){return As.resolve(null).then(e).catch(a1)}:Zl;function a1(e){setTimeout(function(){throw e})}function sl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),zr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);zr(t)}function Ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Cs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Kn=Math.random().toString(36).slice(2),vt="__reactFiber$"+Kn,Mr="__reactProps$"+Kn,Nt="__reactContainer$"+Kn,Xl="__reactEvents$"+Kn,u1="__reactListeners$"+Kn,s1="__reactHandles$"+Kn;function on(e){var t=e[vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Nt]||n[vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Cs(e);e!==null;){if(n=e[vt])return n;e=Cs(e)}return t}e=n,n=e.parentNode}return null}function br(e){return e=e[vt]||e[Nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function En(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Ti(e){return e[Mr]||null}var Kl=[],In=-1;function qt(e){return{current:e}}function re(e){0>In||(e.current=Kl[In],Kl[In]=null,In--)}function te(e,t){In++,Kl[In]=e.current,e.current=t}var Xt={},Le=qt(Xt),Ue=qt(!1),dn=Xt;function $n(e,t){var n=e.type.contextTypes;if(!n)return Xt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Qe(e){return e=e.childContextTypes,e!=null}function Vo(){re(Ue),re(Le)}function Es(e,t,n){if(Le.current!==Xt)throw Error(k(168));te(Le,t),te(Ue,n)}function Yd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(k(108,G0(e)||"Unknown",o));return ae({},n,r)}function $o(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Xt,dn=Le.current,te(Le,e),te(Ue,Ue.current),!0}function Is(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Yd(e,t,dn),r.__reactInternalMemoizedMergedChildContext=e,re(Ue),re(Le),te(Le,e)):re(Ue),te(Ue,n)}var kt=null,zi=!1,cl=!1;function Jd(e){kt===null?kt=[e]:kt.push(e)}function c1(e){zi=!0,Jd(e)}function en(){if(!cl&&kt!==null){cl=!0;var e=0,t=X;try{var n=kt;for(X=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}kt=null,zi=!1}catch(o){throw kt!==null&&(kt=kt.slice(e+1)),xd(Wa,en),o}finally{X=t,cl=!1}}return null}var Pn=[],Nn=0,Uo=null,Qo=0,qe=[],et=0,fn=null,Ct=1,Et="";function tn(e,t){Pn[Nn++]=Qo,Pn[Nn++]=Uo,Uo=e,Qo=t}function Zd(e,t,n){qe[et++]=Ct,qe[et++]=Et,qe[et++]=fn,fn=e;var r=Ct;e=Et;var o=32-ft(r)-1;r&=~(1<<o),n+=1;var i=32-ft(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Ct=1<<32-ft(t)+o|n<<o|r,Et=i+e}else Ct=1<<i|n<<o|r,Et=e}function qa(e){e.return!==null&&(tn(e,1),Zd(e,1,0))}function eu(e){for(;e===Uo;)Uo=Pn[--Nn],Pn[Nn]=null,Qo=Pn[--Nn],Pn[Nn]=null;for(;e===fn;)fn=qe[--et],qe[et]=null,Et=qe[--et],qe[et]=null,Ct=qe[--et],qe[et]=null}var Ye=null,Ge=null,oe=!1,dt=null;function Xd(e,t){var n=tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ps(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ye=e,Ge=Ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ye=e,Ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=fn!==null?{id:Ct,overflow:Et}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ye=e,Ge=null,!0):!1;default:return!1}}function ql(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ea(e){if(oe){var t=Ge;if(t){var n=t;if(!Ps(e,t)){if(ql(e))throw Error(k(418));t=Ht(n.nextSibling);var r=Ye;t&&Ps(e,t)?Xd(r,n):(e.flags=e.flags&-4097|2,oe=!1,Ye=e)}}else{if(ql(e))throw Error(k(418));e.flags=e.flags&-4097|2,oe=!1,Ye=e}}}function Ns(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ye=e}function uo(e){if(e!==Ye)return!1;if(!oe)return Ns(e),oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Jl(e.type,e.memoizedProps)),t&&(t=Ge)){if(ql(e))throw Kd(),Error(k(418));for(;t;)Xd(e,t),t=Ht(t.nextSibling)}if(Ns(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ge=Ht(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ge=null}}else Ge=Ye?Ht(e.stateNode.nextSibling):null;return!0}function Kd(){for(var e=Ge;e;)e=Ht(e.nextSibling)}function Un(){Ge=Ye=null,oe=!1}function tu(e){dt===null?dt=[e]:dt.push(e)}var d1=Rt.ReactCurrentBatchConfig;function lr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function so(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ts(e){var t=e._init;return t(e._payload)}function qd(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function o(f,c){return f=Jt(f,c),f.index=0,f.sibling=null,f}function i(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,p,y){return c===null||c.tag!==6?(c=vl(p,f.mode,y),c.return=f,c):(c=o(c,p),c.return=f,c)}function u(f,c,p,y){var A=p.type;return A===Sn?h(f,c,p.props.children,y,p.key):c!==null&&(c.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Dt&&Ts(A)===c.type)?(y=o(c,p.props),y.ref=lr(f,c,p),y.return=f,y):(y=Po(p.type,p.key,p.props,null,f.mode,y),y.ref=lr(f,c,p),y.return=f,y)}function s(f,c,p,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=yl(p,f.mode,y),c.return=f,c):(c=o(c,p.children||[]),c.return=f,c)}function h(f,c,p,y,A){return c===null||c.tag!==7?(c=cn(p,f.mode,y,A),c.return=f,c):(c=o(c,p),c.return=f,c)}function m(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=vl(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Kr:return p=Po(c.type,c.key,c.props,null,f.mode,p),p.ref=lr(f,null,c),p.return=f,p;case xn:return c=yl(c,f.mode,p),c.return=f,c;case Dt:var y=c._init;return m(f,y(c._payload),p)}if(cr(c)||tr(c))return c=cn(c,f.mode,p,null),c.return=f,c;so(f,c)}return null}function g(f,c,p,y){var A=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return A!==null?null:a(f,c,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Kr:return p.key===A?u(f,c,p,y):null;case xn:return p.key===A?s(f,c,p,y):null;case Dt:return A=p._init,g(f,c,A(p._payload),y)}if(cr(p)||tr(p))return A!==null?null:h(f,c,p,y,null);so(f,p)}return null}function S(f,c,p,y,A){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(p)||null,a(c,f,""+y,A);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Kr:return f=f.get(y.key===null?p:y.key)||null,u(c,f,y,A);case xn:return f=f.get(y.key===null?p:y.key)||null,s(c,f,y,A);case Dt:var O=y._init;return S(f,c,p,O(y._payload),A)}if(cr(y)||tr(y))return f=f.get(p)||null,h(c,f,y,A,null);so(c,y)}return null}function x(f,c,p,y){for(var A=null,O=null,_=c,L=c=0,b=null;_!==null&&L<p.length;L++){_.index>L?(b=_,_=null):b=_.sibling;var V=g(f,_,p[L],y);if(V===null){_===null&&(_=b);break}e&&_&&V.alternate===null&&t(f,_),c=i(V,c,L),O===null?A=V:O.sibling=V,O=V,_=b}if(L===p.length)return n(f,_),oe&&tn(f,L),A;if(_===null){for(;L<p.length;L++)_=m(f,p[L],y),_!==null&&(c=i(_,c,L),O===null?A=_:O.sibling=_,O=_);return oe&&tn(f,L),A}for(_=r(f,_);L<p.length;L++)b=S(_,f,L,p[L],y),b!==null&&(e&&b.alternate!==null&&_.delete(b.key===null?L:b.key),c=i(b,c,L),O===null?A=b:O.sibling=b,O=b);return e&&_.forEach(function(ge){return t(f,ge)}),oe&&tn(f,L),A}function w(f,c,p,y){var A=tr(p);if(typeof A!="function")throw Error(k(150));if(p=A.call(p),p==null)throw Error(k(151));for(var O=A=null,_=c,L=c=0,b=null,V=p.next();_!==null&&!V.done;L++,V=p.next()){_.index>L?(b=_,_=null):b=_.sibling;var ge=g(f,_,V.value,y);if(ge===null){_===null&&(_=b);break}e&&_&&ge.alternate===null&&t(f,_),c=i(ge,c,L),O===null?A=ge:O.sibling=ge,O=ge,_=b}if(V.done)return n(f,_),oe&&tn(f,L),A;if(_===null){for(;!V.done;L++,V=p.next())V=m(f,V.value,y),V!==null&&(c=i(V,c,L),O===null?A=V:O.sibling=V,O=V);return oe&&tn(f,L),A}for(_=r(f,_);!V.done;L++,V=p.next())V=S(_,f,L,V.value,y),V!==null&&(e&&V.alternate!==null&&_.delete(V.key===null?L:V.key),c=i(V,c,L),O===null?A=V:O.sibling=V,O=V);return e&&_.forEach(function(pe){return t(f,pe)}),oe&&tn(f,L),A}function C(f,c,p,y){if(typeof p=="object"&&p!==null&&p.type===Sn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Kr:e:{for(var A=p.key,O=c;O!==null;){if(O.key===A){if(A=p.type,A===Sn){if(O.tag===7){n(f,O.sibling),c=o(O,p.props.children),c.return=f,f=c;break e}}else if(O.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Dt&&Ts(A)===O.type){n(f,O.sibling),c=o(O,p.props),c.ref=lr(f,O,p),c.return=f,f=c;break e}n(f,O);break}else t(f,O);O=O.sibling}p.type===Sn?(c=cn(p.props.children,f.mode,y,p.key),c.return=f,f=c):(y=Po(p.type,p.key,p.props,null,f.mode,y),y.ref=lr(f,c,p),y.return=f,f=y)}return l(f);case xn:e:{for(O=p.key;c!==null;){if(c.key===O)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=o(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=yl(p,f.mode,y),c.return=f,f=c}return l(f);case Dt:return O=p._init,C(f,c,O(p._payload),y)}if(cr(p))return x(f,c,p,y);if(tr(p))return w(f,c,p,y);so(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=o(c,p),c.return=f,f=c):(n(f,c),c=vl(p,f.mode,y),c.return=f,f=c),l(f)):n(f,c)}return C}var Qn=qd(!0),ef=qd(!1),Wo=qt(null),Ho=null,Tn=null,nu=null;function ru(){nu=Tn=Ho=null}function ou(e){var t=Wo.current;re(Wo),e._currentValue=t}function ta(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function _n(e,t){Ho=e,nu=Tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&($e=!0),e.firstContext=null)}function ot(e){var t=e._currentValue;if(nu!==e)if(e={context:e,memoizedValue:t,next:null},Tn===null){if(Ho===null)throw Error(k(308));Tn=e,Ho.dependencies={lanes:0,firstContext:e}}else Tn=Tn.next=e;return t}var ln=null;function iu(e){ln===null?ln=[e]:ln.push(e)}function tf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,iu(t)):(n.next=o.next,o.next=n),t.interleaved=n,Tt(e,r)}function Tt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Mt=!1;function lu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function It(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function bt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Tt(e,n)}return o=r.interleaved,o===null?(t.next=t,iu(r)):(t.next=o.next,o.next=t),r.interleaved=t,Tt(e,n)}function So(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ha(e,n)}}function zs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function bo(e,t,n,r){var o=e.updateQueue;Mt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var u=a,s=u.next;u.next=null,l===null?i=s:l.next=s,l=u;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==l&&(a===null?h.firstBaseUpdate=s:a.next=s,h.lastBaseUpdate=u))}if(i!==null){var m=o.baseState;l=0,h=s=u=null,a=i;do{var g=a.lane,S=a.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:S,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,w=a;switch(g=t,S=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){m=x.call(S,m,g);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,g=typeof x=="function"?x.call(S,m,g):x,g==null)break e;m=ae({},m,g);break e;case 2:Mt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[a]:g.push(a))}else S={eventTime:S,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(s=h=S,u=m):h=h.next=S,l|=g;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;g=a,a=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(1);if(h===null&&(u=m),o.baseState=u,o.firstBaseUpdate=s,o.lastBaseUpdate=h,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);hn|=l,e.lanes=l,e.memoizedState=m}}function Rs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(k(191,o));o.call(r)}}}var Gr={},wt=qt(Gr),_r=qt(Gr),Fr=qt(Gr);function an(e){if(e===Gr)throw Error(k(174));return e}function au(e,t){switch(te(Fr,t),te(_r,e),te(wt,Gr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ml(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ml(t,e)}re(wt),te(wt,t)}function Wn(){re(wt),re(_r),re(Fr)}function rf(e){an(Fr.current);var t=an(wt.current),n=Ml(t,e.type);t!==n&&(te(_r,e),te(wt,n))}function uu(e){_r.current===e&&(re(wt),re(_r))}var ie=qt(0);function Go(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var dl=[];function su(){for(var e=0;e<dl.length;e++)dl[e]._workInProgressVersionPrimary=null;dl.length=0}var ko=Rt.ReactCurrentDispatcher,fl=Rt.ReactCurrentBatchConfig,pn=0,le=null,he=null,ve=null,Yo=!1,wr=!1,jr=0,f1=0;function ze(){throw Error(k(321))}function cu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ht(e[n],t[n]))return!1;return!0}function du(e,t,n,r,o,i){if(pn=i,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ko.current=e===null||e.memoizedState===null?g1:v1,e=n(r,o),wr){i=0;do{if(wr=!1,jr=0,25<=i)throw Error(k(301));i+=1,ve=he=null,t.updateQueue=null,ko.current=y1,e=n(r,o)}while(wr)}if(ko.current=Jo,t=he!==null&&he.next!==null,pn=0,ve=he=le=null,Yo=!1,t)throw Error(k(300));return e}function fu(){var e=jr!==0;return jr=0,e}function gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?le.memoizedState=ve=e:ve=ve.next=e,ve}function it(){if(he===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=ve===null?le.memoizedState:ve.next;if(t!==null)ve=t,he=e;else{if(e===null)throw Error(k(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},ve===null?le.memoizedState=ve=e:ve=ve.next=e}return ve}function Br(e,t){return typeof t=="function"?t(e):t}function pl(e){var t=it(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=he,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,u=null,s=i;do{var h=s.lane;if((pn&h)===h)u!==null&&(u=u.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var m={lane:h,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};u===null?(a=u=m,l=r):u=u.next=m,le.lanes|=h,hn|=h}s=s.next}while(s!==null&&s!==i);u===null?l=r:u.next=a,ht(r,t.memoizedState)||($e=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,le.lanes|=i,hn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function hl(e){var t=it(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);ht(i,t.memoizedState)||($e=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function of(){}function lf(e,t){var n=le,r=it(),o=t(),i=!ht(r.memoizedState,o);if(i&&(r.memoizedState=o,$e=!0),r=r.queue,pu(sf.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,Vr(9,uf.bind(null,n,r,o,t),void 0,null),ye===null)throw Error(k(349));pn&30||af(n,t,o)}return o}function af(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function uf(e,t,n,r){t.value=n,t.getSnapshot=r,cf(t)&&df(e)}function sf(e,t,n){return n(function(){cf(t)&&df(e)})}function cf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ht(e,n)}catch{return!0}}function df(e){var t=Tt(e,1);t!==null&&pt(t,e,1,-1)}function Os(e){var t=gt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Br,lastRenderedState:e},t.queue=e,e=e.dispatch=m1.bind(null,le,e),[t.memoizedState,e]}function Vr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ff(){return it().memoizedState}function Ao(e,t,n,r){var o=gt();le.flags|=e,o.memoizedState=Vr(1|t,n,void 0,r===void 0?null:r)}function Ri(e,t,n,r){var o=it();r=r===void 0?null:r;var i=void 0;if(he!==null){var l=he.memoizedState;if(i=l.destroy,r!==null&&cu(r,l.deps)){o.memoizedState=Vr(t,n,i,r);return}}le.flags|=e,o.memoizedState=Vr(1|t,n,i,r)}function Ls(e,t){return Ao(8390656,8,e,t)}function pu(e,t){return Ri(2048,8,e,t)}function pf(e,t){return Ri(4,2,e,t)}function hf(e,t){return Ri(4,4,e,t)}function mf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gf(e,t,n){return n=n!=null?n.concat([e]):null,Ri(4,4,mf.bind(null,t,e),n)}function hu(){}function vf(e,t){var n=it();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function yf(e,t){var n=it();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function wf(e,t,n){return pn&21?(ht(n,t)||(n=Ad(),le.lanes|=n,hn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,$e=!0),e.memoizedState=n)}function p1(e,t){var n=X;X=n!==0&&4>n?n:4,e(!0);var r=fl.transition;fl.transition={};try{e(!1),t()}finally{X=n,fl.transition=r}}function xf(){return it().memoizedState}function h1(e,t,n){var r=Yt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Sf(e))kf(t,n);else if(n=tf(e,t,n,r),n!==null){var o=_e();pt(n,e,r,o),Af(n,t,r)}}function m1(e,t,n){var r=Yt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sf(e))kf(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,ht(a,l)){var u=t.interleaved;u===null?(o.next=o,iu(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=tf(e,t,o,r),n!==null&&(o=_e(),pt(n,e,r,o),Af(n,t,r))}}function Sf(e){var t=e.alternate;return e===le||t!==null&&t===le}function kf(e,t){wr=Yo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Af(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ha(e,n)}}var Jo={readContext:ot,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},g1={readContext:ot,useCallback:function(e,t){return gt().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:Ls,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ao(4194308,4,mf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ao(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ao(4,2,e,t)},useMemo:function(e,t){var n=gt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=gt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=h1.bind(null,le,e),[r.memoizedState,e]},useRef:function(e){var t=gt();return e={current:e},t.memoizedState=e},useState:Os,useDebugValue:hu,useDeferredValue:function(e){return gt().memoizedState=e},useTransition:function(){var e=Os(!1),t=e[0];return e=p1.bind(null,e[1]),gt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=le,o=gt();if(oe){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),ye===null)throw Error(k(349));pn&30||af(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Ls(sf.bind(null,r,i,e),[e]),r.flags|=2048,Vr(9,uf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=gt(),t=ye.identifierPrefix;if(oe){var n=Et,r=Ct;n=(r&~(1<<32-ft(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=jr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=f1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},v1={readContext:ot,useCallback:vf,useContext:ot,useEffect:pu,useImperativeHandle:gf,useInsertionEffect:pf,useLayoutEffect:hf,useMemo:yf,useReducer:pl,useRef:ff,useState:function(){return pl(Br)},useDebugValue:hu,useDeferredValue:function(e){var t=it();return wf(t,he.memoizedState,e)},useTransition:function(){var e=pl(Br)[0],t=it().memoizedState;return[e,t]},useMutableSource:of,useSyncExternalStore:lf,useId:xf,unstable_isNewReconciler:!1},y1={readContext:ot,useCallback:vf,useContext:ot,useEffect:pu,useImperativeHandle:gf,useInsertionEffect:pf,useLayoutEffect:hf,useMemo:yf,useReducer:hl,useRef:ff,useState:function(){return hl(Br)},useDebugValue:hu,useDeferredValue:function(e){var t=it();return he===null?t.memoizedState=e:wf(t,he.memoizedState,e)},useTransition:function(){var e=hl(Br)[0],t=it().memoizedState;return[e,t]},useMutableSource:of,useSyncExternalStore:lf,useId:xf,unstable_isNewReconciler:!1};function st(e,t){if(e&&e.defaultProps){t=ae({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function na(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ae({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Oi={isMounted:function(e){return(e=e._reactInternals)?vn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=_e(),o=Yt(e),i=It(r,o);i.payload=t,n!=null&&(i.callback=n),t=bt(e,i,o),t!==null&&(pt(t,e,o,r),So(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=_e(),o=Yt(e),i=It(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=bt(e,i,o),t!==null&&(pt(t,e,o,r),So(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=_e(),r=Yt(e),o=It(n,r);o.tag=2,t!=null&&(o.callback=t),t=bt(e,o,r),t!==null&&(pt(t,e,r,n),So(t,e,r))}};function Ds(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Or(n,r)||!Or(o,i):!0}function Cf(e,t,n){var r=!1,o=Xt,i=t.contextType;return typeof i=="object"&&i!==null?i=ot(i):(o=Qe(t)?dn:Le.current,r=t.contextTypes,i=(r=r!=null)?$n(e,o):Xt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Oi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ms(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Oi.enqueueReplaceState(t,t.state,null)}function ra(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},lu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=ot(i):(i=Qe(t)?dn:Le.current,o.context=$n(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(na(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Oi.enqueueReplaceState(o,o.state,null),bo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Hn(e,t){try{var n="",r=t;do n+=b0(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function ml(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function oa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var w1=typeof WeakMap=="function"?WeakMap:Map;function Ef(e,t,n){n=It(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Xo||(Xo=!0,ha=r),oa(e,t)},n}function If(e,t,n){n=It(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){oa(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){oa(e,t),typeof r!="function"&&(Gt===null?Gt=new Set([this]):Gt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function _s(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new w1;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=L1.bind(null,e,t,n),t.then(e,e))}function Fs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function js(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=It(-1,1),t.tag=2,bt(n,t,1))),n.lanes|=1),e)}var x1=Rt.ReactCurrentOwner,$e=!1;function Me(e,t,n,r){t.child=e===null?ef(t,null,n,r):Qn(t,e.child,n,r)}function Bs(e,t,n,r,o){n=n.render;var i=t.ref;return _n(t,o),r=du(e,t,n,r,i,o),n=fu(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,zt(e,t,o)):(oe&&n&&qa(t),t.flags|=1,Me(e,t,r,o),t.child)}function Vs(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!ku(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Pf(e,t,i,r,o)):(e=Po(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Or,n(l,r)&&e.ref===t.ref)return zt(e,t,o)}return t.flags|=1,e=Jt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Pf(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Or(i,r)&&e.ref===t.ref)if($e=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&($e=!0);else return t.lanes=e.lanes,zt(e,t,o)}return ia(e,t,n,r,o)}function Nf(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(Rn,be),be|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,te(Rn,be),be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,te(Rn,be),be|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,te(Rn,be),be|=r;return Me(e,t,o,n),t.child}function Tf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ia(e,t,n,r,o){var i=Qe(n)?dn:Le.current;return i=$n(t,i),_n(t,o),n=du(e,t,n,r,i,o),r=fu(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,zt(e,t,o)):(oe&&r&&qa(t),t.flags|=1,Me(e,t,n,o),t.child)}function $s(e,t,n,r,o){if(Qe(n)){var i=!0;$o(t)}else i=!1;if(_n(t,o),t.stateNode===null)Co(e,t),Cf(t,n,r),ra(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var u=l.context,s=n.contextType;typeof s=="object"&&s!==null?s=ot(s):(s=Qe(n)?dn:Le.current,s=$n(t,s));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||u!==s)&&Ms(t,l,r,s),Mt=!1;var g=t.memoizedState;l.state=g,bo(t,r,l,o),u=t.memoizedState,a!==r||g!==u||Ue.current||Mt?(typeof h=="function"&&(na(t,n,h,r),u=t.memoizedState),(a=Mt||Ds(t,n,a,r,g,u,s))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=s,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,nf(e,t),a=t.memoizedProps,s=t.type===t.elementType?a:st(t.type,a),l.props=s,m=t.pendingProps,g=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=ot(u):(u=Qe(n)?dn:Le.current,u=$n(t,u));var S=n.getDerivedStateFromProps;(h=typeof S=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==m||g!==u)&&Ms(t,l,r,u),Mt=!1,g=t.memoizedState,l.state=g,bo(t,r,l,o);var x=t.memoizedState;a!==m||g!==x||Ue.current||Mt?(typeof S=="function"&&(na(t,n,S,r),x=t.memoizedState),(s=Mt||Ds(t,n,s,r,g,x,u)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=u,r=s):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return la(e,t,n,r,i,o)}function la(e,t,n,r,o,i){Tf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Is(t,n,!1),zt(e,t,i);r=t.stateNode,x1.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Qn(t,e.child,null,i),t.child=Qn(t,null,a,i)):Me(e,t,a,i),t.memoizedState=r.state,o&&Is(t,n,!0),t.child}function zf(e){var t=e.stateNode;t.pendingContext?Es(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Es(e,t.context,!1),au(e,t.containerInfo)}function Us(e,t,n,r,o){return Un(),tu(o),t.flags|=256,Me(e,t,n,r),t.child}var aa={dehydrated:null,treeContext:null,retryLane:0};function ua(e){return{baseLanes:e,cachePool:null,transitions:null}}function Rf(e,t,n){var r=t.pendingProps,o=ie.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),te(ie,o&1),e===null)return ea(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Mi(l,r,0,null),e=cn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ua(n),t.memoizedState=aa,e):mu(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return S1(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Jt(o,u),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Jt(a,i):(i=cn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?ua(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=aa,r}return i=e.child,e=i.sibling,r=Jt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function mu(e,t){return t=Mi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function co(e,t,n,r){return r!==null&&tu(r),Qn(t,e.child,null,n),e=mu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function S1(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=ml(Error(k(422))),co(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Mi({mode:"visible",children:r.children},o,0,null),i=cn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Qn(t,e.child,null,l),t.child.memoizedState=ua(l),t.memoizedState=aa,i);if(!(t.mode&1))return co(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(k(419)),r=ml(i,r,void 0),co(e,t,l,r)}if(a=(l&e.childLanes)!==0,$e||a){if(r=ye,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Tt(e,o),pt(r,e,o,-1))}return Su(),r=ml(Error(k(421))),co(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=D1.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ge=Ht(o.nextSibling),Ye=t,oe=!0,dt=null,e!==null&&(qe[et++]=Ct,qe[et++]=Et,qe[et++]=fn,Ct=e.id,Et=e.overflow,fn=t),t=mu(t,r.children),t.flags|=4096,t)}function Qs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ta(e.return,t,n)}function gl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Of(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Me(e,t,r.children,n),r=ie.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qs(e,n,t);else if(e.tag===19)Qs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(te(ie,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Go(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),gl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Go(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}gl(t,!0,n,null,i);break;case"together":gl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Co(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function zt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),hn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=Jt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Jt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function k1(e,t,n){switch(t.tag){case 3:zf(t),Un();break;case 5:rf(t);break;case 1:Qe(t.type)&&$o(t);break;case 4:au(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;te(Wo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(te(ie,ie.current&1),t.flags|=128,null):n&t.child.childLanes?Rf(e,t,n):(te(ie,ie.current&1),e=zt(e,t,n),e!==null?e.sibling:null);te(ie,ie.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Of(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),te(ie,ie.current),r)break;return null;case 22:case 23:return t.lanes=0,Nf(e,t,n)}return zt(e,t,n)}var Lf,sa,Df,Mf;Lf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sa=function(){};Df=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,an(wt.current);var i=null;switch(n){case"input":o=Rl(e,o),r=Rl(e,r),i=[];break;case"select":o=ae({},o,{value:void 0}),r=ae({},r,{value:void 0}),i=[];break;case"textarea":o=Dl(e,o),r=Dl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Bo)}_l(n,r);var l;n=null;for(s in o)if(!r.hasOwnProperty(s)&&o.hasOwnProperty(s)&&o[s]!=null)if(s==="style"){var a=o[s];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Er.hasOwnProperty(s)?i||(i=[]):(i=i||[]).push(s,null));for(s in r){var u=r[s];if(a=o!=null?o[s]:void 0,r.hasOwnProperty(s)&&u!==a&&(u!=null||a!=null))if(s==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(i||(i=[]),i.push(s,n)),n=u;else s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(s,u)):s==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(s,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(Er.hasOwnProperty(s)?(u!=null&&s==="onScroll"&&ne("scroll",e),i||a===u||(i=[])):(i=i||[]).push(s,u))}n&&(i=i||[]).push("style",n);var s=i;(t.updateQueue=s)&&(t.flags|=4)}};Mf=function(e,t,n,r){n!==r&&(t.flags|=4)};function ar(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function A1(e,t,n){var r=t.pendingProps;switch(eu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(t),null;case 1:return Qe(t.type)&&Vo(),Re(t),null;case 3:return r=t.stateNode,Wn(),re(Ue),re(Le),su(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(uo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,dt!==null&&(va(dt),dt=null))),sa(e,t),Re(t),null;case 5:uu(t);var o=an(Fr.current);if(n=t.type,e!==null&&t.stateNode!=null)Df(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return Re(t),null}if(e=an(wt.current),uo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[vt]=t,r[Mr]=i,e=(t.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(o=0;o<fr.length;o++)ne(fr[o],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":Ku(r,i),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ne("invalid",r);break;case"textarea":es(r,i),ne("invalid",r)}_l(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&ao(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&ao(r.textContent,a,e),o=["children",""+a]):Er.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&ne("scroll",r)}switch(n){case"input":qr(r),qu(r,i,!0);break;case"textarea":qr(r),ts(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Bo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ud(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[vt]=t,e[Mr]=r,Lf(e,t,!1,!1),t.stateNode=e;e:{switch(l=Fl(n,r),n){case"dialog":ne("cancel",e),ne("close",e),o=r;break;case"iframe":case"object":case"embed":ne("load",e),o=r;break;case"video":case"audio":for(o=0;o<fr.length;o++)ne(fr[o],e);o=r;break;case"source":ne("error",e),o=r;break;case"img":case"image":case"link":ne("error",e),ne("load",e),o=r;break;case"details":ne("toggle",e),o=r;break;case"input":Ku(e,r),o=Rl(e,r),ne("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ae({},r,{value:void 0}),ne("invalid",e);break;case"textarea":es(e,r),o=Dl(e,r),ne("invalid",e);break;default:o=r}_l(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?dd(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&sd(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ir(e,u):typeof u=="number"&&Ir(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Er.hasOwnProperty(i)?u!=null&&i==="onScroll"&&ne("scroll",e):u!=null&&Ba(e,i,u,l))}switch(n){case"input":qr(e),qu(e,r,!1);break;case"textarea":qr(e),ts(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Zt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?On(e,!!r.multiple,i,!1):r.defaultValue!=null&&On(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Bo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Re(t),null;case 6:if(e&&t.stateNode!=null)Mf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=an(Fr.current),an(wt.current),uo(t)){if(r=t.stateNode,n=t.memoizedProps,r[vt]=t,(i=r.nodeValue!==n)&&(e=Ye,e!==null))switch(e.tag){case 3:ao(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ao(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[vt]=t,t.stateNode=r}return Re(t),null;case 13:if(re(ie),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(oe&&Ge!==null&&t.mode&1&&!(t.flags&128))Kd(),Un(),t.flags|=98560,i=!1;else if(i=uo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[vt]=t}else Un(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Re(t),i=!1}else dt!==null&&(va(dt),dt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ie.current&1?me===0&&(me=3):Su())),t.updateQueue!==null&&(t.flags|=4),Re(t),null);case 4:return Wn(),sa(e,t),e===null&&Lr(t.stateNode.containerInfo),Re(t),null;case 10:return ou(t.type._context),Re(t),null;case 17:return Qe(t.type)&&Vo(),Re(t),null;case 19:if(re(ie),i=t.memoizedState,i===null)return Re(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)ar(i,!1);else{if(me!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Go(e),l!==null){for(t.flags|=128,ar(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return te(ie,ie.current&1|2),t.child}e=e.sibling}i.tail!==null&&de()>bn&&(t.flags|=128,r=!0,ar(i,!1),t.lanes=4194304)}else{if(!r)if(e=Go(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ar(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!oe)return Re(t),null}else 2*de()-i.renderingStartTime>bn&&n!==1073741824&&(t.flags|=128,r=!0,ar(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=de(),t.sibling=null,n=ie.current,te(ie,r?n&1|2:n&1),t):(Re(t),null);case 22:case 23:return xu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?be&1073741824&&(Re(t),t.subtreeFlags&6&&(t.flags|=8192)):Re(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function C1(e,t){switch(eu(t),t.tag){case 1:return Qe(t.type)&&Vo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wn(),re(Ue),re(Le),su(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return uu(t),null;case 13:if(re(ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));Un()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return re(ie),null;case 4:return Wn(),null;case 10:return ou(t.type._context),null;case 22:case 23:return xu(),null;case 24:return null;default:return null}}var fo=!1,Oe=!1,E1=typeof WeakSet=="function"?WeakSet:Set,M=null;function zn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(e,t,r)}else n.current=null}function ca(e,t,n){try{n()}catch(r){se(e,t,r)}}var Ws=!1;function I1(e,t){if(Gl=_o,e=Bd(),Ka(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,u=-1,s=0,h=0,m=e,g=null;t:for(;;){for(var S;m!==n||o!==0&&m.nodeType!==3||(a=l+o),m!==i||r!==0&&m.nodeType!==3||(u=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(S=m.firstChild)!==null;)g=m,m=S;for(;;){if(m===e)break t;if(g===n&&++s===o&&(a=l),g===i&&++h===r&&(u=l),(S=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=S}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yl={focusedElem:e,selectionRange:n},_o=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,C=x.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:st(t.type,w),C);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(y){se(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return x=Ws,Ws=!1,x}function xr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&ca(t,n,i)}o=o.next}while(o!==r)}}function Li(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function da(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function _f(e){var t=e.alternate;t!==null&&(e.alternate=null,_f(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[vt],delete t[Mr],delete t[Xl],delete t[u1],delete t[s1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ff(e){return e.tag===5||e.tag===3||e.tag===4}function Hs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ff(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Bo));else if(r!==4&&(e=e.child,e!==null))for(fa(e,t,n),e=e.sibling;e!==null;)fa(e,t,n),e=e.sibling}function pa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(pa(e,t,n),e=e.sibling;e!==null;)pa(e,t,n),e=e.sibling}var Ce=null,ct=!1;function Lt(e,t,n){for(n=n.child;n!==null;)jf(e,t,n),n=n.sibling}function jf(e,t,n){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(Ei,n)}catch{}switch(n.tag){case 5:Oe||zn(n,t);case 6:var r=Ce,o=ct;Ce=null,Lt(e,t,n),Ce=r,ct=o,Ce!==null&&(ct?(e=Ce,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ce.removeChild(n.stateNode));break;case 18:Ce!==null&&(ct?(e=Ce,n=n.stateNode,e.nodeType===8?sl(e.parentNode,n):e.nodeType===1&&sl(e,n),zr(e)):sl(Ce,n.stateNode));break;case 4:r=Ce,o=ct,Ce=n.stateNode.containerInfo,ct=!0,Lt(e,t,n),Ce=r,ct=o;break;case 0:case 11:case 14:case 15:if(!Oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&ca(n,t,l),o=o.next}while(o!==r)}Lt(e,t,n);break;case 1:if(!Oe&&(zn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){se(n,t,a)}Lt(e,t,n);break;case 21:Lt(e,t,n);break;case 22:n.mode&1?(Oe=(r=Oe)||n.memoizedState!==null,Lt(e,t,n),Oe=r):Lt(e,t,n);break;default:Lt(e,t,n)}}function bs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new E1),t.forEach(function(r){var o=M1.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function ut(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Ce=a.stateNode,ct=!1;break e;case 3:Ce=a.stateNode.containerInfo,ct=!0;break e;case 4:Ce=a.stateNode.containerInfo,ct=!0;break e}a=a.return}if(Ce===null)throw Error(k(160));jf(i,l,o),Ce=null,ct=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(s){se(o,t,s)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bf(t,e),t=t.sibling}function Bf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ut(t,e),mt(e),r&4){try{xr(3,e,e.return),Li(3,e)}catch(w){se(e,e.return,w)}try{xr(5,e,e.return)}catch(w){se(e,e.return,w)}}break;case 1:ut(t,e),mt(e),r&512&&n!==null&&zn(n,n.return);break;case 5:if(ut(t,e),mt(e),r&512&&n!==null&&zn(n,n.return),e.flags&32){var o=e.stateNode;try{Ir(o,"")}catch(w){se(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&ld(o,i),Fl(a,l);var s=Fl(a,i);for(l=0;l<u.length;l+=2){var h=u[l],m=u[l+1];h==="style"?dd(o,m):h==="dangerouslySetInnerHTML"?sd(o,m):h==="children"?Ir(o,m):Ba(o,h,m,s)}switch(a){case"input":Ol(o,i);break;case"textarea":ad(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var S=i.value;S!=null?On(o,!!i.multiple,S,!1):g!==!!i.multiple&&(i.defaultValue!=null?On(o,!!i.multiple,i.defaultValue,!0):On(o,!!i.multiple,i.multiple?[]:"",!1))}o[Mr]=i}catch(w){se(e,e.return,w)}}break;case 6:if(ut(t,e),mt(e),r&4){if(e.stateNode===null)throw Error(k(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){se(e,e.return,w)}}break;case 3:if(ut(t,e),mt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zr(t.containerInfo)}catch(w){se(e,e.return,w)}break;case 4:ut(t,e),mt(e);break;case 13:ut(t,e),mt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(yu=de())),r&4&&bs(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(Oe=(s=Oe)||h,ut(t,e),Oe=s):ut(t,e),mt(e),r&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!h&&e.mode&1)for(M=e,h=e.child;h!==null;){for(m=M=h;M!==null;){switch(g=M,S=g.child,g.tag){case 0:case 11:case 14:case 15:xr(4,g,g.return);break;case 1:zn(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){se(r,n,w)}}break;case 5:zn(g,g.return);break;case 22:if(g.memoizedState!==null){Ys(m);continue}}S!==null?(S.return=g,M=S):Ys(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{o=m.stateNode,s?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=m.stateNode,u=m.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=cd("display",l))}catch(w){se(e,e.return,w)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=s?"":m.memoizedProps}catch(w){se(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:ut(t,e),mt(e),r&4&&bs(e);break;case 21:break;default:ut(t,e),mt(e)}}function mt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ff(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Ir(o,""),r.flags&=-33);var i=Hs(e);pa(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Hs(e);fa(e,a,l);break;default:throw Error(k(161))}}catch(u){se(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function P1(e,t,n){M=e,Vf(e)}function Vf(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var o=M,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||fo;if(!l){var a=o.alternate,u=a!==null&&a.memoizedState!==null||Oe;a=fo;var s=Oe;if(fo=l,(Oe=u)&&!s)for(M=o;M!==null;)l=M,u=l.child,l.tag===22&&l.memoizedState!==null?Js(o):u!==null?(u.return=l,M=u):Js(o);for(;i!==null;)M=i,Vf(i),i=i.sibling;M=o,fo=a,Oe=s}Gs(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,M=i):Gs(e)}}function Gs(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Oe||Li(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Oe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:st(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Rs(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Rs(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var s=t.alternate;if(s!==null){var h=s.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&zr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}Oe||t.flags&512&&da(t)}catch(g){se(t,t.return,g)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function Ys(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function Js(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Li(4,t)}catch(u){se(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){se(t,o,u)}}var i=t.return;try{da(t)}catch(u){se(t,i,u)}break;case 5:var l=t.return;try{da(t)}catch(u){se(t,l,u)}}}catch(u){se(t,t.return,u)}if(t===e){M=null;break}var a=t.sibling;if(a!==null){a.return=t.return,M=a;break}M=t.return}}var N1=Math.ceil,Zo=Rt.ReactCurrentDispatcher,gu=Rt.ReactCurrentOwner,rt=Rt.ReactCurrentBatchConfig,H=0,ye=null,fe=null,Ie=0,be=0,Rn=qt(0),me=0,$r=null,hn=0,Di=0,vu=0,Sr=null,Ve=null,yu=0,bn=1/0,St=null,Xo=!1,ha=null,Gt=null,po=!1,Vt=null,Ko=0,kr=0,ma=null,Eo=-1,Io=0;function _e(){return H&6?de():Eo!==-1?Eo:Eo=de()}function Yt(e){return e.mode&1?H&2&&Ie!==0?Ie&-Ie:d1.transition!==null?(Io===0&&(Io=Ad()),Io):(e=X,e!==0||(e=window.event,e=e===void 0?16:zd(e.type)),e):1}function pt(e,t,n,r){if(50<kr)throw kr=0,ma=null,Error(k(185));Wr(e,n,r),(!(H&2)||e!==ye)&&(e===ye&&(!(H&2)&&(Di|=n),me===4&&Ft(e,Ie)),We(e,r),n===1&&H===0&&!(t.mode&1)&&(bn=de()+500,zi&&en()))}function We(e,t){var n=e.callbackNode;dg(e,t);var r=Mo(e,e===ye?Ie:0);if(r===0)n!==null&&os(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&os(n),t===1)e.tag===0?c1(Zs.bind(null,e)):Jd(Zs.bind(null,e)),l1(function(){!(H&6)&&en()}),n=null;else{switch(Cd(r)){case 1:n=Wa;break;case 4:n=Sd;break;case 16:n=Do;break;case 536870912:n=kd;break;default:n=Do}n=Yf(n,$f.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function $f(e,t){if(Eo=-1,Io=0,H&6)throw Error(k(327));var n=e.callbackNode;if(Fn()&&e.callbackNode!==n)return null;var r=Mo(e,e===ye?Ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=qo(e,r);else{t=r;var o=H;H|=2;var i=Qf();(ye!==e||Ie!==t)&&(St=null,bn=de()+500,sn(e,t));do try{R1();break}catch(a){Uf(e,a)}while(1);ru(),Zo.current=i,H=o,fe!==null?t=0:(ye=null,Ie=0,t=me)}if(t!==0){if(t===2&&(o=Ul(e),o!==0&&(r=o,t=ga(e,o))),t===1)throw n=$r,sn(e,0),Ft(e,r),We(e,de()),n;if(t===6)Ft(e,r);else{if(o=e.current.alternate,!(r&30)&&!T1(o)&&(t=qo(e,r),t===2&&(i=Ul(e),i!==0&&(r=i,t=ga(e,i))),t===1))throw n=$r,sn(e,0),Ft(e,r),We(e,de()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:nn(e,Ve,St);break;case 3:if(Ft(e,r),(r&130023424)===r&&(t=yu+500-de(),10<t)){if(Mo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){_e(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Zl(nn.bind(null,e,Ve,St),t);break}nn(e,Ve,St);break;case 4:if(Ft(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-ft(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*N1(r/1960))-r,10<r){e.timeoutHandle=Zl(nn.bind(null,e,Ve,St),r);break}nn(e,Ve,St);break;case 5:nn(e,Ve,St);break;default:throw Error(k(329))}}}return We(e,de()),e.callbackNode===n?$f.bind(null,e):null}function ga(e,t){var n=Sr;return e.current.memoizedState.isDehydrated&&(sn(e,t).flags|=256),e=qo(e,t),e!==2&&(t=Ve,Ve=n,t!==null&&va(t)),e}function va(e){Ve===null?Ve=e:Ve.push.apply(Ve,e)}function T1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!ht(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ft(e,t){for(t&=~vu,t&=~Di,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ft(t),r=1<<n;e[n]=-1,t&=~r}}function Zs(e){if(H&6)throw Error(k(327));Fn();var t=Mo(e,0);if(!(t&1))return We(e,de()),null;var n=qo(e,t);if(e.tag!==0&&n===2){var r=Ul(e);r!==0&&(t=r,n=ga(e,r))}if(n===1)throw n=$r,sn(e,0),Ft(e,t),We(e,de()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,nn(e,Ve,St),We(e,de()),null}function wu(e,t){var n=H;H|=1;try{return e(t)}finally{H=n,H===0&&(bn=de()+500,zi&&en())}}function mn(e){Vt!==null&&Vt.tag===0&&!(H&6)&&Fn();var t=H;H|=1;var n=rt.transition,r=X;try{if(rt.transition=null,X=1,e)return e()}finally{X=r,rt.transition=n,H=t,!(H&6)&&en()}}function xu(){be=Rn.current,re(Rn)}function sn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,i1(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(eu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Vo();break;case 3:Wn(),re(Ue),re(Le),su();break;case 5:uu(r);break;case 4:Wn();break;case 13:re(ie);break;case 19:re(ie);break;case 10:ou(r.type._context);break;case 22:case 23:xu()}n=n.return}if(ye=e,fe=e=Jt(e.current,null),Ie=be=t,me=0,$r=null,vu=Di=hn=0,Ve=Sr=null,ln!==null){for(t=0;t<ln.length;t++)if(n=ln[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}ln=null}return e}function Uf(e,t){do{var n=fe;try{if(ru(),ko.current=Jo,Yo){for(var r=le.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Yo=!1}if(pn=0,ve=he=le=null,wr=!1,jr=0,gu.current=null,n===null||n.return===null){me=1,$r=t,fe=null;break}e:{var i=e,l=n.return,a=n,u=t;if(t=Ie,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var s=u,h=a,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var S=Fs(l);if(S!==null){S.flags&=-257,js(S,l,a,i,t),S.mode&1&&_s(i,s,t),t=S,u=s;var x=t.updateQueue;if(x===null){var w=new Set;w.add(u),t.updateQueue=w}else x.add(u);break e}else{if(!(t&1)){_s(i,s,t),Su();break e}u=Error(k(426))}}else if(oe&&a.mode&1){var C=Fs(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),js(C,l,a,i,t),tu(Hn(u,a));break e}}i=u=Hn(u,a),me!==4&&(me=2),Sr===null?Sr=[i]:Sr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Ef(i,u,t);zs(i,f);break e;case 1:a=u;var c=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Gt===null||!Gt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=If(i,a,t);zs(i,y);break e}}i=i.return}while(i!==null)}Hf(n)}catch(A){t=A,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(1)}function Qf(){var e=Zo.current;return Zo.current=Jo,e===null?Jo:e}function Su(){(me===0||me===3||me===2)&&(me=4),ye===null||!(hn&268435455)&&!(Di&268435455)||Ft(ye,Ie)}function qo(e,t){var n=H;H|=2;var r=Qf();(ye!==e||Ie!==t)&&(St=null,sn(e,t));do try{z1();break}catch(o){Uf(e,o)}while(1);if(ru(),H=n,Zo.current=r,fe!==null)throw Error(k(261));return ye=null,Ie=0,me}function z1(){for(;fe!==null;)Wf(fe)}function R1(){for(;fe!==null&&!ng();)Wf(fe)}function Wf(e){var t=Gf(e.alternate,e,be);e.memoizedProps=e.pendingProps,t===null?Hf(e):fe=t,gu.current=null}function Hf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=C1(n,t),n!==null){n.flags&=32767,fe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{me=6,fe=null;return}}else if(n=A1(n,t,be),n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);me===0&&(me=5)}function nn(e,t,n){var r=X,o=rt.transition;try{rt.transition=null,X=1,O1(e,t,n,r)}finally{rt.transition=o,X=r}return null}function O1(e,t,n,r){do Fn();while(Vt!==null);if(H&6)throw Error(k(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(fg(e,i),e===ye&&(fe=ye=null,Ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||po||(po=!0,Yf(Do,function(){return Fn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=rt.transition,rt.transition=null;var l=X;X=1;var a=H;H|=4,gu.current=null,I1(e,n),Bf(n,e),Kg(Yl),_o=!!Gl,Yl=Gl=null,e.current=n,P1(n),rg(),H=a,X=l,rt.transition=i}else e.current=n;if(po&&(po=!1,Vt=e,Ko=o),i=e.pendingLanes,i===0&&(Gt=null),lg(n.stateNode),We(e,de()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Xo)throw Xo=!1,e=ha,ha=null,e;return Ko&1&&e.tag!==0&&Fn(),i=e.pendingLanes,i&1?e===ma?kr++:(kr=0,ma=e):kr=0,en(),null}function Fn(){if(Vt!==null){var e=Cd(Ko),t=rt.transition,n=X;try{if(rt.transition=null,X=16>e?16:e,Vt===null)var r=!1;else{if(e=Vt,Vt=null,Ko=0,H&6)throw Error(k(331));var o=H;for(H|=4,M=e.current;M!==null;){var i=M,l=i.child;if(M.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var s=a[u];for(M=s;M!==null;){var h=M;switch(h.tag){case 0:case 11:case 15:xr(8,h,i)}var m=h.child;if(m!==null)m.return=h,M=m;else for(;M!==null;){h=M;var g=h.sibling,S=h.return;if(_f(h),h===s){M=null;break}if(g!==null){g.return=S,M=g;break}M=S}}}var x=i.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var C=w.sibling;w.sibling=null,w=C}while(w!==null)}}M=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,M=l;else e:for(;M!==null;){if(i=M,i.flags&2048)switch(i.tag){case 0:case 11:case 15:xr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,M=f;break e}M=i.return}}var c=e.current;for(M=c;M!==null;){l=M;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,M=p;else e:for(l=c;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Li(9,a)}}catch(A){se(a,a.return,A)}if(a===l){M=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,M=y;break e}M=a.return}}if(H=o,en(),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(Ei,e)}catch{}r=!0}return r}finally{X=n,rt.transition=t}}return!1}function Xs(e,t,n){t=Hn(n,t),t=Ef(e,t,1),e=bt(e,t,1),t=_e(),e!==null&&(Wr(e,1,t),We(e,t))}function se(e,t,n){if(e.tag===3)Xs(e,e,n);else for(;t!==null;){if(t.tag===3){Xs(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Gt===null||!Gt.has(r))){e=Hn(n,e),e=If(t,e,1),t=bt(t,e,1),e=_e(),t!==null&&(Wr(t,1,e),We(t,e));break}}t=t.return}}function L1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=_e(),e.pingedLanes|=e.suspendedLanes&n,ye===e&&(Ie&n)===n&&(me===4||me===3&&(Ie&130023424)===Ie&&500>de()-yu?sn(e,0):vu|=n),We(e,t)}function bf(e,t){t===0&&(e.mode&1?(t=no,no<<=1,!(no&130023424)&&(no=4194304)):t=1);var n=_e();e=Tt(e,t),e!==null&&(Wr(e,t,n),We(e,n))}function D1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),bf(e,n)}function M1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),bf(e,n)}var Gf;Gf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ue.current)$e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return $e=!1,k1(e,t,n);$e=!!(e.flags&131072)}else $e=!1,oe&&t.flags&1048576&&Zd(t,Qo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Co(e,t),e=t.pendingProps;var o=$n(t,Le.current);_n(t,n),o=du(null,t,r,e,o,n);var i=fu();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Qe(r)?(i=!0,$o(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,lu(t),o.updater=Oi,t.stateNode=o,o._reactInternals=t,ra(t,r,e,n),t=la(null,t,r,!0,i,n)):(t.tag=0,oe&&i&&qa(t),Me(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Co(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=F1(r),e=st(r,e),o){case 0:t=ia(null,t,r,e,n);break e;case 1:t=$s(null,t,r,e,n);break e;case 11:t=Bs(null,t,r,e,n);break e;case 14:t=Vs(null,t,r,st(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:st(r,o),ia(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:st(r,o),$s(e,t,r,o,n);case 3:e:{if(zf(t),e===null)throw Error(k(387));r=t.pendingProps,i=t.memoizedState,o=i.element,nf(e,t),bo(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Hn(Error(k(423)),t),t=Us(e,t,r,n,o);break e}else if(r!==o){o=Hn(Error(k(424)),t),t=Us(e,t,r,n,o);break e}else for(Ge=Ht(t.stateNode.containerInfo.firstChild),Ye=t,oe=!0,dt=null,n=ef(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Un(),r===o){t=zt(e,t,n);break e}Me(e,t,r,n)}t=t.child}return t;case 5:return rf(t),e===null&&ea(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Jl(r,o)?l=null:i!==null&&Jl(r,i)&&(t.flags|=32),Tf(e,t),Me(e,t,l,n),t.child;case 6:return e===null&&ea(t),null;case 13:return Rf(e,t,n);case 4:return au(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Qn(t,null,r,n):Me(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:st(r,o),Bs(e,t,r,o,n);case 7:return Me(e,t,t.pendingProps,n),t.child;case 8:return Me(e,t,t.pendingProps.children,n),t.child;case 12:return Me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,te(Wo,r._currentValue),r._currentValue=l,i!==null)if(ht(i.value,l)){if(i.children===o.children&&!Ue.current){t=zt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=It(-1,n&-n),u.tag=2;var s=i.updateQueue;if(s!==null){s=s.shared;var h=s.pending;h===null?u.next=u:(u.next=h.next,h.next=u),s.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),ta(i.return,n,t),a.lanes|=n;break}u=u.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(k(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),ta(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Me(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,_n(t,n),o=ot(o),r=r(o),t.flags|=1,Me(e,t,r,n),t.child;case 14:return r=t.type,o=st(r,t.pendingProps),o=st(r.type,o),Vs(e,t,r,o,n);case 15:return Pf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:st(r,o),Co(e,t),t.tag=1,Qe(r)?(e=!0,$o(t)):e=!1,_n(t,n),Cf(t,r,o),ra(t,r,o,n),la(null,t,r,!0,e,n);case 19:return Of(e,t,n);case 22:return Nf(e,t,n)}throw Error(k(156,t.tag))};function Yf(e,t){return xd(e,t)}function _1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tt(e,t,n,r){return new _1(e,t,n,r)}function ku(e){return e=e.prototype,!(!e||!e.isReactComponent)}function F1(e){if(typeof e=="function")return ku(e)?1:0;if(e!=null){if(e=e.$$typeof,e===$a)return 11;if(e===Ua)return 14}return 2}function Jt(e,t){var n=e.alternate;return n===null?(n=tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Po(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")ku(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Sn:return cn(n.children,o,i,t);case Va:l=8,o|=8;break;case Pl:return e=tt(12,n,t,o|2),e.elementType=Pl,e.lanes=i,e;case Nl:return e=tt(13,n,t,o),e.elementType=Nl,e.lanes=i,e;case Tl:return e=tt(19,n,t,o),e.elementType=Tl,e.lanes=i,e;case rd:return Mi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case td:l=10;break e;case nd:l=9;break e;case $a:l=11;break e;case Ua:l=14;break e;case Dt:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=tt(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function cn(e,t,n,r){return e=tt(7,e,r,t),e.lanes=n,e}function Mi(e,t,n,r){return e=tt(22,e,r,t),e.elementType=rd,e.lanes=n,e.stateNode={isHidden:!1},e}function vl(e,t,n){return e=tt(6,e,null,t),e.lanes=n,e}function yl(e,t,n){return t=tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function j1(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ki(0),this.expirationTimes=Ki(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ki(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Au(e,t,n,r,o,i,l,a,u){return e=new j1(e,t,n,a,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=tt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},lu(i),e}function B1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Jf(e){if(!e)return Xt;e=e._reactInternals;e:{if(vn(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(Qe(n))return Yd(e,n,t)}return t}function Zf(e,t,n,r,o,i,l,a,u){return e=Au(n,r,!0,e,o,i,l,a,u),e.context=Jf(null),n=e.current,r=_e(),o=Yt(n),i=It(r,o),i.callback=t??null,bt(n,i,o),e.current.lanes=o,Wr(e,o,r),We(e,r),e}function _i(e,t,n,r){var o=t.current,i=_e(),l=Yt(o);return n=Jf(n),t.context===null?t.context=n:t.pendingContext=n,t=It(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=bt(o,t,l),e!==null&&(pt(e,o,l,i),So(e,o,l)),l}function ei(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ks(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Cu(e,t){Ks(e,t),(e=e.alternate)&&Ks(e,t)}function V1(){return null}var Xf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Eu(e){this._internalRoot=e}Fi.prototype.render=Eu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));_i(e,t,null,null)};Fi.prototype.unmount=Eu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;mn(function(){_i(null,e,null,null)}),t[Nt]=null}};function Fi(e){this._internalRoot=e}Fi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Pd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<_t.length&&t!==0&&t<_t[n].priority;n++);_t.splice(n,0,e),n===0&&Td(e)}};function Iu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ji(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function qs(){}function $1(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var s=ei(l);i.call(s)}}var l=Zf(t,r,e,0,null,!1,!1,"",qs);return e._reactRootContainer=l,e[Nt]=l.current,Lr(e.nodeType===8?e.parentNode:e),mn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var s=ei(u);a.call(s)}}var u=Au(e,0,!1,null,null,!1,!1,"",qs);return e._reactRootContainer=u,e[Nt]=u.current,Lr(e.nodeType===8?e.parentNode:e),mn(function(){_i(t,u,n,r)}),u}function Bi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var u=ei(l);a.call(u)}}_i(t,l,e,o)}else l=$1(n,t,e,o,r);return ei(l)}Ed=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dr(t.pendingLanes);n!==0&&(Ha(t,n|1),We(t,de()),!(H&6)&&(bn=de()+500,en()))}break;case 13:mn(function(){var r=Tt(e,1);if(r!==null){var o=_e();pt(r,e,1,o)}}),Cu(e,1)}};ba=function(e){if(e.tag===13){var t=Tt(e,134217728);if(t!==null){var n=_e();pt(t,e,134217728,n)}Cu(e,134217728)}};Id=function(e){if(e.tag===13){var t=Yt(e),n=Tt(e,t);if(n!==null){var r=_e();pt(n,e,t,r)}Cu(e,t)}};Pd=function(){return X};Nd=function(e,t){var n=X;try{return X=e,t()}finally{X=n}};Bl=function(e,t,n){switch(t){case"input":if(Ol(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ti(r);if(!o)throw Error(k(90));id(r),Ol(r,o)}}}break;case"textarea":ad(e,n);break;case"select":t=n.value,t!=null&&On(e,!!n.multiple,t,!1)}};hd=wu;md=mn;var U1={usingClientEntryPoint:!1,Events:[br,En,Ti,fd,pd,wu]},ur={findFiberByHostInstance:on,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Q1={bundleType:ur.bundleType,version:ur.version,rendererPackageName:ur.rendererPackageName,rendererConfig:ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=yd(e),e===null?null:e.stateNode},findFiberByHostInstance:ur.findFiberByHostInstance||V1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ho=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ho.isDisabled&&ho.supportsFiber)try{Ei=ho.inject(Q1),yt=ho}catch{}}Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U1;Xe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Iu(t))throw Error(k(200));return B1(e,t,null,n)};Xe.createRoot=function(e,t){if(!Iu(e))throw Error(k(299));var n=!1,r="",o=Xf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Au(e,1,!1,null,null,n,!1,r,o),e[Nt]=t.current,Lr(e.nodeType===8?e.parentNode:e),new Eu(t)};Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=yd(t),e=e===null?null:e.stateNode,e};Xe.flushSync=function(e){return mn(e)};Xe.hydrate=function(e,t,n){if(!ji(t))throw Error(k(200));return Bi(null,e,t,!0,n)};Xe.hydrateRoot=function(e,t,n){if(!Iu(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Xf;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Zf(t,null,e,1,n??null,o,!1,i,l),e[Nt]=t.current,Lr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Fi(t)};Xe.render=function(e,t,n){if(!ji(t))throw Error(k(200));return Bi(null,e,t,!1,n)};Xe.unmountComponentAtNode=function(e){if(!ji(e))throw Error(k(40));return e._reactRootContainer?(mn(function(){Bi(null,null,e,!1,function(){e._reactRootContainer=null,e[Nt]=null})}),!0):!1};Xe.unstable_batchedUpdates=wu;Xe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ji(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Bi(e,t,n,!1,r)};Xe.version="18.3.1-next-f1338f8080-20240426";function Kf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kf)}catch(e){console.error(e)}}Kf(),Xc.exports=Xe;var W1=Xc.exports,ec=W1;El.createRoot=ec.createRoot,El.hydrateRoot=ec.hydrateRoot;/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ti(){return ti=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ti.apply(this,arguments)}var un;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(un||(un={}));const tc="popstate";function H1(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:l,hash:a}=r.location;return ya("",{pathname:i,search:l,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:ep(o)}return G1(t,n,null,e)}function qf(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function b1(){return Math.random().toString(36).substr(2,8)}function nc(e,t){return{usr:e.state,key:e.key,idx:t}}function ya(e,t,n,r){return n===void 0&&(n=null),ti({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?tp(t):t,{state:n,key:t&&t.key||r||b1()})}function ep(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function tp(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function G1(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,a=un.Pop,u=null,s=h();s==null&&(s=0,l.replaceState(ti({},l.state,{idx:s}),""));function h(){return(l.state||{idx:null}).idx}function m(){a=un.Pop;let C=h(),f=C==null?null:C-s;s=C,u&&u({action:a,location:w.location,delta:f})}function g(C,f){a=un.Push;let c=ya(w.location,C,f);n&&n(c,C),s=h()+1;let p=nc(c,s),y=w.createHref(c);try{l.pushState(p,"",y)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;o.location.assign(y)}i&&u&&u({action:a,location:w.location,delta:1})}function S(C,f){a=un.Replace;let c=ya(w.location,C,f);n&&n(c,C),s=h();let p=nc(c,s),y=w.createHref(c);l.replaceState(p,"",y),i&&u&&u({action:a,location:w.location,delta:0})}function x(C){let f=o.location.origin!=="null"?o.location.origin:o.location.href,c=typeof C=="string"?C:ep(C);return c=c.replace(/ $/,"%20"),qf(f,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,f)}let w={get action(){return a},get location(){return e(o,l)},listen(C){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(tc,m),u=C,()=>{o.removeEventListener(tc,m),u=null}},createHref(C){return t(o,C)},createURL:x,encodeLocation(C){let f=x(C);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:S,go(C){return l.go(C)}};return w}var rc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(rc||(rc={}));function Y1(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const np=["post","put","patch","delete"];new Set(np);const J1=["get",...np];new Set(J1);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wa(){return wa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wa.apply(this,arguments)}const Z1=T.createContext(null),rp=T.createContext(null);function X1(){return T.useContext(rp)!=null}function K1(e){let{basename:t="/",children:n=null,location:r,navigationType:o=un.Pop,navigator:i,static:l=!1,future:a}=e;X1()&&qf(!1);let u=t.replace(/^\/*/,"/"),s=T.useMemo(()=>({basename:u,navigator:i,static:l,future:wa({v7_relativeSplatPath:!1},a)}),[u,a,i,l]);typeof r=="string"&&(r=tp(r));let{pathname:h="/",search:m="",hash:g="",state:S=null,key:x="default"}=r,w=T.useMemo(()=>{let C=Y1(h,u);return C==null?null:{location:{pathname:C,search:m,hash:g,state:S,key:x},navigationType:o}},[u,h,m,g,S,x,o]);return w==null?null:T.createElement(Z1.Provider,{value:s},T.createElement(rp.Provider,{children:n,value:w}))}new Promise(()=>{});/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const q1="6";try{window.__reactRouterVersion=q1}catch{}const ev="startTransition",oc=xp[ev];function tv(e){let{basename:t,children:n,future:r,window:o}=e,i=T.useRef();i.current==null&&(i.current=H1({window:o,v5Compat:!0}));let l=i.current,[a,u]=T.useState({action:l.action,location:l.location}),{v7_startTransition:s}=r||{},h=T.useCallback(m=>{s&&oc?oc(()=>u(m)):u(m)},[u,s]);return T.useLayoutEffect(()=>l.listen(h),[l,h]),T.createElement(K1,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l,future:r})}var ic;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ic||(ic={}));var lc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(lc||(lc={}));El.createRoot(document.getElementById("root")).render(d(Yn.StrictMode,{children:d(Qh,{children:d(tv,{children:d(B0,{})})})}));
