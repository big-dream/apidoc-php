import{m as R,n as E,q as z,t as we,v as I,x as oe,y as _e,z as O,A as d,B as be,C as Se,D as ie,S as Pe,E as Ae,F as Ee,G as F,H as Ie}from"./app.83e4c83f.js";var Q;const $=typeof window<"u",$e=e=>typeof e=="function",je=e=>typeof e=="string",Ce=()=>{};$&&((Q=window==null?void 0:window.navigator)==null?void 0:Q.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function H(e){return typeof e=="function"?e():R(e)}function ue(e,t){function r(...n){e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})}return r}const ce=e=>e();function xe(e,t={}){let r,n;return s=>{const f=H(e),u=H(t.maxWait);if(r&&clearTimeout(r),f<=0||u!==void 0&&u<=0)return n&&(clearTimeout(n),n=null),s();u&&!n&&(n=setTimeout(()=>{r&&clearTimeout(r),n=null,s()},u)),r=setTimeout(()=>{n&&clearTimeout(n),n=null,s()},f)}}function Re(e=ce){const t=E(!0);function r(){t.value=!1}function n(){t.value=!0}return{isActive:t,pause:r,resume:n,eventFilter:(...s)=>{t.value&&e(...s)}}}function He(e){return e}function Le(e,t=200,r={}){return ue(xe(t,r),e)}var W=Object.getOwnPropertySymbols,ke=Object.prototype.hasOwnProperty,Ne=Object.prototype.propertyIsEnumerable,Fe=(e,t)=>{var r={};for(var n in e)ke.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&W)for(var n of W(e))t.indexOf(n)<0&&Ne.call(e,n)&&(r[n]=e[n]);return r};function Me(e,t,r={}){const n=r,{eventFilter:a=ce}=n,s=Fe(n,["eventFilter"]);return z(e,ue(a,t),s)}var Te=Object.defineProperty,De=Object.defineProperties,ze=Object.getOwnPropertyDescriptors,L=Object.getOwnPropertySymbols,fe=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable,J=(e,t,r)=>t in e?Te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ve=(e,t)=>{for(var r in t||(t={}))fe.call(t,r)&&J(e,r,t[r]);if(L)for(var r of L(t))pe.call(t,r)&&J(e,r,t[r]);return e},Qe=(e,t)=>De(e,ze(t)),We=(e,t)=>{var r={};for(var n in e)fe.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&L)for(var n of L(e))t.indexOf(n)<0&&pe.call(e,n)&&(r[n]=e[n]);return r};function Je(e,t,r={}){const n=r,{eventFilter:a}=n,s=We(n,["eventFilter"]),{eventFilter:f,pause:u,resume:p,isActive:i}=Re(a);return{stop:Me(e,t,Qe(Ve({},s),{eventFilter:f})),pause:u,resume:p,isActive:i}}function Ke(e){var t;const r=H(e);return(t=r==null?void 0:r.$el)!=null?t:r}const k=$?window:void 0;$&&window.document;$&&window.navigator;$&&window.location;function de(...e){let t,r,n,a;if(je(e[0])||Array.isArray(e[0])?([r,n,a]=e,t=k):[t,r,n,a]=e,!t)return Ce;Array.isArray(r)||(r=[r]),Array.isArray(n)||(n=[n]);const s=[],f=()=>{s.forEach(l=>l()),s.length=0},u=(l,o,v)=>(l.addEventListener(o,v,a),()=>l.removeEventListener(o,v,a)),p=z(()=>Ke(t),l=>{f(),l&&s.push(...r.flatMap(o=>n.map(v=>u(l,o,v))))},{immediate:!0,flush:"post"});return()=>{p(),f()}}const T=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D="__vueuse_ssr_handlers__";T[D]=T[D]||{};const qe=T[D];function Be(e,t){return qe[e]||t}function Ue(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Ge=Object.defineProperty,K=Object.getOwnPropertySymbols,Ze=Object.prototype.hasOwnProperty,Xe=Object.prototype.propertyIsEnumerable,q=(e,t,r)=>t in e?Ge(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,B=(e,t)=>{for(var r in t||(t={}))Ze.call(t,r)&&q(e,r,t[r]);if(K)for(var r of K(t))Xe.call(t,r)&&q(e,r,t[r]);return e};const Ye={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function et(e,t,r,n={}){var a;const{flush:s="pre",deep:f=!0,listenToStorageChanges:u=!0,writeDefaults:p=!0,mergeDefaults:i=!1,shallow:l,window:o=k,eventFilter:v,onError:g=c=>{console.error(c)}}=n,_=(l?we:E)(t);if(!r)try{r=Be("getDefaultStorage",()=>{var c;return(c=k)==null?void 0:c.localStorage})()}catch(c){g(c)}if(!r)return _;const w=H(t),j=Ue(w),b=(a=n.serializer)!=null?a:Ye[j],{pause:C,resume:M}=Je(_,()=>h(_.value),{flush:s,deep:f,eventFilter:v});return o&&u&&de(o,"storage",S),S(),_;function h(c){try{c==null?r.removeItem(e):r.setItem(e,b.write(c))}catch(m){g(m)}}function y(c){C();try{const m=c?c.newValue:r.getItem(e);if(m==null)return p&&w!==null&&r.setItem(e,b.write(w)),w;if(!c&&i){const P=b.read(m);return $e(i)?i(P,w):j==="object"&&!Array.isArray(P)?B(B({},w),P):P}else return typeof m!="string"?m:b.read(m)}catch(m){g(m)}finally{M()}}function S(c){if(!(c&&c.storageArea!==r)){if(c&&c.key===null){_.value=w;return}c&&c.key!==e||(_.value=y(c))}}}function tt(e,t,r={}){const{window:n=k}=r;return et(e,t,n==null?void 0:n.localStorage,r)}var U;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(U||(U={}));var rt=Object.defineProperty,G=Object.getOwnPropertySymbols,nt=Object.prototype.hasOwnProperty,at=Object.prototype.propertyIsEnumerable,Z=(e,t,r)=>t in e?rt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,st=(e,t)=>{for(var r in t||(t={}))nt.call(t,r)&&Z(e,r,t[r]);if(G)for(var r of G(t))at.call(t,r)&&Z(e,r,t[r]);return e};const lt={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};st({linear:He},lt);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const ot=()=>{},N=Array.isArray;function X(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function it(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const r in e)if(!ut(e[r],t[r]))return!1;return!0}function ut(e,t){return N(e)?Y(e,t):N(t)?Y(t,e):e===t}function Y(e,t){return N(t)?e.length===t.length&&e.every((r,n)=>r===t[n]):e.length===1&&e[0]===t}var ee;(function(e){e.pop="pop",e.push="push"})(ee||(ee={}));var te;(function(e){e.back="back",e.forward="forward",e.unknown=""})(te||(te={}));var re;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(re||(re={}));const V=Symbol(""),ve=Symbol("");function ne(e){const t=I(V),r=I(ve),n=O(()=>t.resolve(R(e.to))),a=O(()=>{const{matched:p}=n.value,{length:i}=p,l=p[i-1],o=r.matched;if(!l||!o.length)return-1;const v=o.findIndex(X.bind(null,l));if(v>-1)return v;const g=ae(p[i-2]);return i>1&&ae(l)===g&&o[o.length-1].path!==g?o.findIndex(X.bind(null,p[i-2])):v}),s=O(()=>a.value>-1&&dt(r.params,n.value.params)),f=O(()=>a.value>-1&&a.value===r.matched.length-1&&it(r.params,n.value.params));function u(p={}){return pt(p)?t[R(e.replace)?"replace":"push"](R(e.to)).catch(ot):Promise.resolve()}return{route:n,href:O(()=>n.value.href),isActive:s,isExactActive:f,navigate:u}}const ct=oe({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ne,setup(e,{slots:t}){const r=_e(ne(e)),{options:n}=I(V),a=O(()=>({[se(e.activeClass,n.linkActiveClass,"router-link-active")]:r.isActive,[se(e.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:r.isExactActive}));return()=>{const s=t.default&&t.default(r);return e.custom?s:d("a",{"aria-current":r.isExactActive?e.ariaCurrentValue:null,href:r.href,onClick:r.navigate,class:a.value},s)}}}),ft=ct;function pt(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function dt(e,t){for(const r in t){const n=t[r],a=e[r];if(typeof n=="string"){if(n!==a)return!1}else if(!N(a)||a.length!==n.length||n.some((s,f)=>s!==a[f]))return!1}return!0}function ae(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const se=(e,t,r)=>e!=null?e:t!=null?t:r;function vt(){return I(V)}function ht(){return I(ve)}const he=()=>d(F,{name:"heading"},()=>d("path",{d:"M250.4 704.6H64V595.4h202.4l26.2-166.6H94V319.6h214.4L352 64h127.8l-43.6 255.4h211.2L691 64h126.2l-43.6 255.4H960v109.2H756.2l-24.6 166.6H930v109.2H717L672 960H545.8l43.6-255.4H376.6L333 960H206.8l43.6-255.4zm168.4-276L394 595.4h211.2l24.6-166.6h-211z"}));he.displayName="HeadingIcon";const me=()=>d(F,{name:"heart"},()=>d("path",{d:"M1024 358.156C1024 195.698 892.3 64 729.844 64c-86.362 0-164.03 37.218-217.844 96.49C458.186 101.218 380.518 64 294.156 64 131.698 64 0 195.698 0 358.156 0 444.518 37.218 522.186 96.49 576H96l320 320c32 32 64 64 96 64s64-32 96-64l320-320h-.49c59.272-53.814 96.49-131.482 96.49-217.844zM841.468 481.232 517.49 805.49a2981.962 2981.962 0 0 1-5.49 5.48c-1.96-1.95-3.814-3.802-5.49-5.48L182.532 481.234C147.366 449.306 128 405.596 128 358.156 128 266.538 202.538 192 294.156 192c47.44 0 91.15 19.366 123.076 54.532L512 350.912l94.768-104.378C638.696 211.366 682.404 192 729.844 192 821.462 192 896 266.538 896 358.156c0 47.44-19.368 91.15-54.532 123.076z"}));me.displayName="HeartIcon";const ye=()=>d(F,{name:"history"},()=>d("path",{d:"M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512zm0-896a384 384 0 1 0 384 384 384 384 0 0 0-384-384zm192 448H512a64 64 0 0 1-64-64V320a64 64 0 0 1 128 0v128h128a64 64 0 0 1 0 128z"}));ye.displayName="HistoryIcon";const ge=()=>d(F,{name:"title"},()=>d("path",{d:"M512 256c70.656 0 134.656 28.672 180.992 75.008A254.933 254.933 0 0 1 768 512c0 83.968-41.024 157.888-103.488 204.48C688.96 748.736 704 788.48 704 832c0 105.984-86.016 192-192 192-106.048 0-192-86.016-192-192h128a64 64 0 1 0 128 0 64 64 0 0 0-64-64 255.19 255.19 0 0 1-181.056-75.008A255.403 255.403 0 0 1 256 512c0-83.968 41.024-157.824 103.488-204.544C335.04 275.264 320 235.584 320 192A192 192 0 0 1 512 0c105.984 0 192 85.952 192 192H576a64.021 64.021 0 0 0-128 0c0 35.328 28.672 64 64 64zM384 512c0 70.656 57.344 128 128 128s128-57.344 128-128-57.344-128-128-128-128 57.344-128 128z"}));ge.displayName="TitleIcon";const mt="search-pro-history",A=tt(mt,[]),yt=(e=5)=>{const t=r=>{A.value.length<e?A.value=Array.from(new Set([r,...A.value])):A.value=Array.from(new Set([...A.value.slice(0,e-1),r]))};return{history:Ie(A),addHistory:t}},Oe=E(be),gt=O(()=>JSON.parse(Se(Oe.value)));import.meta.webpackHot&&(__VUE_HMR_RUNTIME__.updateSearchProDatabase=e=>{Oe.value=e});const Ot={category:"分类：$content",tag:"标签：$content"},wt={"/":{close:"关闭",placeholder:"搜索",search:"搜索",select:"选择",navigate:"切换",exit:"关闭",emply:"没有找到结果",loading:"正在加载搜索索引..."}},x=(e,t)=>{const r=[];let n=0,a=0;const s=e.toLowerCase();let f=s.indexOf(t,n);const u=(p,i)=>{let l=p,o=!1;if(!i&&l.length>100&&a===0&&(l=`… ${l.slice(-10)}`),a+l.length>100){if(r.some(v=>v[0]==="strong"))return;l=l.slice(0,Math.max(100-a,1)),o=!0}l.length&&(r.push(i?["strong",l]:l),a+=l.length),o&&(r.push("…"),a+=2)};if(f<0)return null;for(;f>=0;){const p=f+t.length;if(u(e.slice(n,f),!1),u(e.slice(f,p),!0),n=p,f=s.indexOf(t,n),a>100)break}return u(e.slice(n),!1),r},le=e=>e.reduce((t,{type:r})=>t+(r==="title"?50:r==="heading"?20:r==="custom"?10:1),0),_t=(e,t)=>{var r;const n={};for(const[a,s]of Object.entries(t)){const f=((r=t[a.replace(/\/[^\\]*$/,"")])==null?void 0:r.title)||"",u=`${f?`${f} > `:""}${s.title}`,p=x(s.title,e);p&&(n[u]=[...n[u]||[],{type:"title",path:a,display:p}]),s.customFields&&Object.entries(s.customFields).forEach(([i,l])=>{l.forEach(o=>{const v=x(o,e);v&&(n[u]=[...n[u]||[],{type:"custom",path:a,name:i,display:v}])})});for(const i of s.contents){const l=x(i.header,e);l&&(n[u]=[...n[u]||[],{type:"heading",path:a+(i.slug?`#${i.slug}`:""),display:l}]);for(const o of i.contents){const v=x(o,e);v&&(n[u]=[...n[u]||[],{type:"content",header:i.header||s.title||"Documentation",path:a+(i.slug?`#${i.slug}`:""),display:v}])}}}return Object.keys(n).sort((a,s)=>le(n[a])-le(n[s])).map(a=>({title:a,contents:n[a]}))},bt=e=>{const t=ie(),r=E([]),n=O(()=>gt.value[t.value]),a=Le(s=>{r.value=s?_t(s,n.value):[]},200);return z([e,t],()=>{a(e.value)}),r};var Pt=oe({name:"SearchResult",props:{query:{type:String,required:!0}},emits:["close","updateQuery"],setup(e,{emit:t}){const r=vt(),n=ht(),a=ie(),s=Pe(wt),{history:f,addHistory:u}=yt(),p=Ae(e,"query"),i=bt(p),l=E(0),o=E(0),v=O(()=>i.value.length>0),g=O(()=>i.value[l.value]||null),_=()=>{l.value=l.value>0?l.value-1:i.value.length-1,o.value=g.value.contents.length-1},w=()=>{l.value=l.value<i.value.length-1?l.value+1:0,o.value=0},j=()=>{o.value<g.value.contents.length-1?o.value=o.value+1:w()},b=()=>{o.value>0?o.value=o.value-1:_()},C=h=>h.map(y=>typeof y=="string"?y:d(y[0],y[1])),M=h=>{if(h.type==="custom"){const y=Ot[h.name]||"$content",[S,c=""]=typeof y=="object"?y[a.value].split("$content"):y.split("$content");return C([S,...h.display,c])}return C(h.display)};return Ee(()=>{de("keydown",h=>{if(v.value){if(h.key==="ArrowUp")b();else if(h.key==="ArrowDown")j();else if(h.key==="Enter"){const y=g.value.contents[o.value].path;n.path!==y&&(r.push(y),u(p.value),t("updateQuery",""),t("close"))}}})}),()=>p.value===""?d("ul",{class:"search-pro-result-list"},f.value.map(h=>d("li",{class:"search-pro-result-list-item"},d("div",{class:"search-pro-result-item",onClick:()=>{t("updateQuery",h)}},[d(ye,{class:"search-pro-result-type"}),d("div",{class:"search-pro-result-content"},h)])))):v.value?d("ul",{class:"search-pro-result-list"},i.value.map(({title:h,contents:y},S)=>{const c=l.value===S;return d("li",{class:["search-pro-result-list-item",{active:c}]},[d("div",{class:"search-pro-result-title"},h||"Documentation"),y.map((m,P)=>d(ft,{to:m.path,class:["search-pro-result-item",{active:c&&o.value===P}],onClick:()=>{u(p.value),t("updateQuery",""),t("close")}},()=>[m.type==="content"?null:d(m.type==="title"?ge:m.type==="heading"?he:me,{class:"search-pro-result-type"}),d("div",{class:"search-pro-result-content"},[m.type==="content"?d("div",{class:"content-header"},m.header):null,d("div",M(m))])]))])})):d("div",{class:"search-pro-result-list empty"},s.value.emply)}});export{Pt as default};