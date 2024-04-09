import{r as o,A as se,h as ae,gf as nt,gg as ot,gh as it,gi as Ce,gj as rt,a6 as lt,g as st,c as ee,gk as at,k as ct,fB as ye,C as we,ab as Te,e as $e,gl as Z,$ as le,O as dt,o as je,N as ut,gm as ve,fo as pt,ao as ft}from"./index-bf2a13da.js";import{c as gt}from"./index-60b6abd8.js";import{T as he}from"./transButton-ca5bbd65.js";var mt=function(n,i){return o.createElement(se,ae({},n,{ref:i,icon:nt}))};const bt=o.forwardRef(mt);var yt=function(n,i){return o.createElement(se,ae({},n,{ref:i,icon:ot}))};const vt=o.forwardRef(yt);var ht=function(n,i){return o.createElement(se,ae({},n,{ref:i,icon:it}))};const Et=o.forwardRef(ht),xt=(e,n,i,t)=>{const{titleMarginBottom:r,fontWeightStrong:u}=t;return{marginBottom:r,color:i,fontWeight:u,fontSize:e,lineHeight:n}},St=e=>{const n=[1,2,3,4,5],i={};return n.forEach(t=>{i[`
      h${t}&,
      div&-h${t},
      div&-h${t} > textarea,
      h${t}
    `]=xt(e[`fontSizeHeading${t}`],e[`lineHeightHeading${t}`],e.colorTextHeading,e)}),i},Ot=e=>{const{componentCls:n}=e;return{"a&, a":Object.assign(Object.assign({},Ce(e)),{textDecoration:e.linkDecoration,"&:active, &:hover":{textDecoration:e.linkHoverDecoration},[`&[disabled], &${n}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed","&:active, &:hover":{color:e.colorTextDisabled},"&:active":{pointerEvents:"none"}}})}},Ct=e=>({code:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.2em 0.1em",fontSize:"85%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3},kbd:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.15em 0.1em",fontSize:"90%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.06)",border:"1px solid rgba(100, 100, 100, 0.2)",borderBottomWidth:2,borderRadius:3},mark:{padding:0,backgroundColor:rt[2]},"u, ins":{textDecoration:"underline",textDecorationSkipInk:"auto"},"s, del":{textDecoration:"line-through"},strong:{fontWeight:600},"ul, ol":{marginInline:0,marginBlock:"0 1em",padding:0,li:{marginInline:"20px 0",marginBlock:0,paddingInline:"4px 0",paddingBlock:0}},ul:{listStyleType:"circle",ul:{listStyleType:"disc"}},ol:{listStyleType:"decimal"},"pre, blockquote":{margin:"1em 0"},pre:{padding:"0.4em 0.6em",whiteSpace:"pre-wrap",wordWrap:"break-word",background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3,fontFamily:e.fontFamilyCode,code:{display:"inline",margin:0,padding:0,fontSize:"inherit",fontFamily:"inherit",background:"transparent",border:0}},blockquote:{paddingInline:"0.6em 0",paddingBlock:0,borderInlineStart:"4px solid rgba(100, 100, 100, 0.2)",opacity:.85}}),wt=e=>{const{componentCls:n}=e,t=lt(e).inputPaddingVertical+1;return{"&-edit-content":{position:"relative","div&":{insetInlineStart:-e.paddingSM,marginTop:-t,marginBottom:`calc(1em - ${t}px)`},[`${n}-edit-content-confirm`]:{position:"absolute",insetInlineEnd:e.marginXS+2,insetBlockEnd:e.marginXS,color:e.colorTextDescription,fontWeight:"normal",fontSize:e.fontSize,fontStyle:"normal",pointerEvents:"none"},textarea:{margin:"0!important",MozTransition:"none",height:"1em"}}}},Tt=e=>({"&-copy-success":{"\n    &,\n    &:hover,\n    &:focus":{color:e.colorSuccess}}}),$t=()=>({"\n  a&-ellipsis,\n  span&-ellipsis\n  ":{display:"inline-block",maxWidth:"100%"},"&-single-line":{whiteSpace:"nowrap"},"&-ellipsis-single-line":{overflow:"hidden",textOverflow:"ellipsis","a&, span&":{verticalAlign:"bottom"}},"&-ellipsis-multiple-line":{display:"-webkit-box",overflow:"hidden",WebkitLineClamp:3,WebkitBoxOrient:"vertical"}}),jt=e=>{const{componentCls:n,titleMarginTop:i}=e;return{[n]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.colorText,wordBreak:"break-word",lineHeight:e.lineHeight,[`&${n}-secondary`]:{color:e.colorTextDescription},[`&${n}-success`]:{color:e.colorSuccess},[`&${n}-warning`]:{color:e.colorWarning},[`&${n}-danger`]:{color:e.colorError,"a&:active, a&:focus":{color:e.colorErrorActive},"a&:hover":{color:e.colorErrorHover}},[`&${n}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed",userSelect:"none"},"\n        div&,\n        p\n      ":{marginBottom:"1em"}},St(e)),{[`
      & + h1${n},
      & + h2${n},
      & + h3${n},
      & + h4${n},
      & + h5${n}
      `]:{marginTop:i},"\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5":{"\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ":{marginTop:i}}}),Ct(e)),Ot(e)),{[`
        ${n}-expand,
        ${n}-edit,
        ${n}-copy
      `]:Object.assign(Object.assign({},Ce(e)),{marginInlineStart:e.marginXXS})}),wt(e)),Tt(e)),$t()),{"&-rtl":{direction:"rtl"}})}},Re=st("Typography",e=>[jt(e)],()=>({titleMarginTop:"1.2em",titleMarginBottom:"0.5em"})),Rt=e=>{const{prefixCls:n,"aria-label":i,className:t,style:r,direction:u,maxLength:h,autoSize:w=!0,value:p,onSave:g,onCancel:d,onEnd:$,component:f,enterIcon:v=o.createElement(Et,null)}=e,S=o.useRef(null),O=o.useRef(!1),I=o.useRef(),[L,E]=o.useState(p);o.useEffect(()=>{E(p)},[p]),o.useEffect(()=>{if(S.current&&S.current.resizableTextArea){const{textArea:C}=S.current.resizableTextArea;C.focus();const{length:j}=C.value;C.setSelectionRange(j,j)}},[]);const a=C=>{let{target:j}=C;E(j.value.replace(/[\n\r]/g,""))},k=()=>{O.current=!0},D=()=>{O.current=!1},m=C=>{let{keyCode:j}=C;O.current||(I.current=j)},A=()=>{g(L.trim())},b=C=>{let{keyCode:j,ctrlKey:ne,altKey:U,metaKey:z,shiftKey:F}=C;I.current===j&&!O.current&&!ne&&!U&&!z&&!F&&(j===ye.ENTER?(A(),$==null||$()):j===ye.ESC&&d())},c=()=>{A()},T=f?`${n}-${f}`:"",[W,M]=Re(n),N=ee(n,`${n}-edit-content`,{[`${n}-rtl`]:u==="rtl"},t,T,M);return W(o.createElement("div",{className:N,style:r},o.createElement(at,{ref:S,maxLength:h,value:L,onChange:a,onKeyDown:m,onKeyUp:b,onCompositionStart:k,onCompositionEnd:D,onBlur:c,"aria-label":i,rows:1,autoSize:w}),v!==null?ct(v,{className:`${n}-edit-content-confirm`}):null))},It=Rt;var Lt=globalThis&&globalThis.__rest||function(e,n){var i={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(i[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(i[t[r]]=e[t[r]]);return i};const _t=o.forwardRef((e,n)=>{const{prefixCls:i,component:t="article",className:r,rootClassName:u,setContentRef:h,children:w,direction:p,style:g}=e,d=Lt(e,["prefixCls","component","className","rootClassName","setContentRef","children","direction","style"]),{getPrefixCls:$,direction:f,typography:v}=o.useContext(we),S=p??f;let O=n;h&&(O=Te(n,h));const I=$("typography",i),[L,E]=Re(I),a=ee(I,v==null?void 0:v.className,{[`${I}-rtl`]:S==="rtl"},r,u,E),k=Object.assign(Object.assign({},v==null?void 0:v.style),g);return L(o.createElement(t,Object.assign({className:a,style:k,ref:O},d),w))}),Ie=_t;function ie(e,n){return o.useMemo(()=>{const i=!!e;return[i,Object.assign(Object.assign({},n),i&&typeof e=="object"?e:null)]},[e])}const Pt=(e,n)=>{const i=o.useRef(!1);o.useEffect(()=>{i.current?e():i.current=!0},n)},Nt=Pt;function Le(e){const n=typeof e;return n==="string"||n==="number"}function kt(e){let n=0;return e.forEach(i=>{Le(i)?n+=String(i).length:n+=1}),n}function Ee(e,n){let i=0;const t=[];for(let r=0;r<e.length;r+=1){if(i===n)return t;const u=e[r],w=Le(u)?String(u).length:1,p=i+w;if(p>n){const g=n-i;return t.push(String(u).slice(0,g)),t}t.push(u),i=p}return e}const Mt=0,Q=1,xe=2,re=3,Se=4,zt=e=>{let{enabledMeasure:n,children:i,text:t,width:r,fontSize:u,rows:h,onEllipsis:w}=e;const[[p,g,d],$]=o.useState([0,0,0]),[f,v]=o.useState(Mt),[S,O]=o.useState(0),I=o.useRef(null),L=o.useRef(null),E=o.useMemo(()=>$e(t),[t]),a=o.useMemo(()=>kt(E),[E]),k=o.useMemo(()=>!n||f!==re?i(E,!1):i(Ee(E,g),g<a),[n,f,i,E,g,a]);Z(()=>{n&&r&&u&&a&&(v(Q),$([0,Math.ceil(a/2),a]))},[n,r,u,t,a,h]),Z(()=>{var b;f===Q&&O(((b=I.current)===null||b===void 0?void 0:b.offsetHeight)||0)},[f]),Z(()=>{var b,c;if(S){if(f===Q){const T=((b=L.current)===null||b===void 0?void 0:b.offsetHeight)||0,W=h*S;T<=W?(v(Se),w(!1)):v(xe)}else if(f===xe)if(p!==d){const T=((c=L.current)===null||c===void 0?void 0:c.offsetHeight)||0,W=h*S;let M=p,N=d;p===d-1?N=p:T<=W?M=g:N=g;const C=Math.ceil((M+N)/2);$([M,C,N])}else v(re),w(!0)}},[f,p,d,h,S]);const D={width:r,whiteSpace:"normal",margin:0,padding:0},m=(b,c,T)=>o.createElement("span",{"aria-hidden":!0,ref:c,style:Object.assign({position:"fixed",display:"block",left:0,top:0,zIndex:-9999,visibility:"hidden",pointerEvents:"none",fontSize:Math.floor(u/2)*2},T)},b),A=(b,c)=>{const T=Ee(E,b);return m(i(T,!0),c,D)};return o.createElement(o.Fragment,null,k,n&&f!==re&&f!==Se&&o.createElement(o.Fragment,null,m("lg",I,{wordBreak:"keep-all",whiteSpace:"nowrap"}),f===Q?m(i(E,!1),L,D):A(g,L)))},Bt=zt,Ht=e=>{let{enabledEllipsis:n,isEllipsis:i,children:t,tooltipProps:r}=e;return!(r!=null&&r.title)||!n?t:o.createElement(le,Object.assign({open:i?void 0:!1},r),t)},Dt=Ht;var Wt=globalThis&&globalThis.__rest||function(e,n){var i={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(i[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(i[t[r]]=e[t[r]]);return i};function At(e,n){let{mark:i,code:t,underline:r,delete:u,strong:h,keyboard:w,italic:p}=e,g=n;function d($,f){f&&(g=o.createElement($,{},g))}return d("strong",h),d("u",r),d("del",u),d("code",t),d("mark",i),d("kbd",w),d("i",p),g}function Y(e,n,i){return e===!0||e===void 0?n:e||i&&n}function Oe(e){return e===!1?[!1,!1]:Array.isArray(e)?e:[e]}const Ft="...",Kt=o.forwardRef((e,n)=>{var i,t,r;const{prefixCls:u,className:h,style:w,type:p,disabled:g,children:d,ellipsis:$,editable:f,copyable:v,component:S,title:O}=e,I=Wt(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),{getPrefixCls:L,direction:E}=o.useContext(we),[a]=dt("Text"),k=o.useRef(null),D=o.useRef(null),m=L("typography",u),A=je(I,["mark","code","delete","underline","strong","keyboard","italic"]),[b,c]=ie(f),[T,W]=ut(!1,{value:c.editing}),{triggerType:M=["icon"]}=c,N=l=>{var s;l&&((s=c.onStart)===null||s===void 0||s.call(c)),W(l)};Nt(()=>{var l;T||(l=D.current)===null||l===void 0||l.focus()},[T]);const C=l=>{l==null||l.preventDefault(),N(!0)},j=l=>{var s;(s=c.onChange)===null||s===void 0||s.call(c,l),N(!1)},ne=()=>{var l;(l=c.onCancel)===null||l===void 0||l.call(c),N(!1)},[U,z]=ie(v),[F,ce]=o.useState(!1),oe=o.useRef(null),de={};z.format&&(de.format=z.format);const ue=()=>{oe.current&&clearTimeout(oe.current)},_e=l=>{var s;l==null||l.preventDefault(),l==null||l.stopPropagation(),gt(z.text||String(d)||"",de),ce(!0),ue(),oe.current=setTimeout(()=>{ce(!1)},3e3),(s=z.onCopy)===null||s===void 0||s.call(z,l)};o.useEffect(()=>ue,[]);const[pe,Pe]=o.useState(!1),[fe,Ne]=o.useState(!1),[ke,Me]=o.useState(!1),[ge,ze]=o.useState(!1),[me,Be]=o.useState(!1),[He,De]=o.useState(!0),[B,y]=ie($,{expandable:!1}),_=B&&!ke,{rows:K=1}=y,X=o.useMemo(()=>!_||y.suffix!==void 0||y.onEllipsis||y.expandable||b||U,[_,y,b,U]);Z(()=>{B&&!X&&(Pe(ve("webkitLineClamp")),Ne(ve("textOverflow")))},[X,B]);const P=o.useMemo(()=>X?!1:K===1?fe:pe,[X,fe,pe]),be=_&&(P?me:ge),We=_&&K===1&&P,J=_&&K>1&&P,Ae=l=>{var s;Me(!0),(s=y.onExpand)===null||s===void 0||s.call(y,l)},[Fe,Ke]=o.useState(0),[Ue,Ve]=o.useState(0),Xe=(l,s)=>{let{offsetWidth:x}=l;var R;Ke(x),Ve(parseInt((R=window.getComputedStyle)===null||R===void 0?void 0:R.call(window,s).fontSize,10)||0)},Je=l=>{var s;ze(l),ge!==l&&((s=y.onEllipsis)===null||s===void 0||s.call(y,l))};o.useEffect(()=>{const l=k.current;if(B&&P&&l){const s=J?l.offsetHeight<l.scrollHeight:l.offsetWidth<l.scrollWidth;me!==s&&Be(s)}},[B,P,d,J,He]),o.useEffect(()=>{const l=k.current;if(typeof IntersectionObserver>"u"||!l||!P||!_)return;const s=new IntersectionObserver(()=>{De(!!l.offsetParent)});return s.observe(l),()=>{s.disconnect()}},[P,_]);let H={};y.tooltip===!0?H={title:(i=c.text)!==null&&i!==void 0?i:d}:o.isValidElement(y.tooltip)?H={title:y.tooltip}:typeof y.tooltip=="object"?H=Object.assign({title:(t=c.text)!==null&&t!==void 0?t:d},y.tooltip):H={title:y.tooltip};const q=o.useMemo(()=>{const l=s=>["string","number"].includes(typeof s);if(!(!B||P)){if(l(c.text))return c.text;if(l(d))return d;if(l(O))return O;if(l(H.title))return H.title}},[B,P,O,H.title,be]);if(T)return o.createElement(It,{value:(r=c.text)!==null&&r!==void 0?r:typeof d=="string"?d:"",onSave:j,onCancel:ne,onEnd:c.onEnd,prefixCls:m,className:h,style:w,direction:E,component:S,maxLength:c.maxLength,autoSize:c.autoSize,enterIcon:c.enterIcon});const qe=()=>{const{expandable:l,symbol:s}=y;if(!l)return null;let x;return s?x=s:x=a==null?void 0:a.expand,o.createElement("a",{key:"expand",className:`${m}-expand`,onClick:Ae,"aria-label":a==null?void 0:a.expand},x)},Ge=()=>{if(!b)return;const{icon:l,tooltip:s}=c,x=$e(s)[0]||(a==null?void 0:a.edit),R=typeof x=="string"?x:"";return M.includes("icon")?o.createElement(le,{key:"edit",title:s===!1?"":x},o.createElement(he,{ref:D,className:`${m}-edit`,onClick:C,"aria-label":R},l||o.createElement(vt,{role:"button"}))):null},Qe=()=>{if(!U)return;const{tooltips:l,icon:s}=z,x=Oe(l),R=Oe(s),G=F?Y(x[1],a==null?void 0:a.copied):Y(x[0],a==null?void 0:a.copy),et=F?a==null?void 0:a.copied:a==null?void 0:a.copy,tt=typeof G=="string"?G:et;return o.createElement(le,{key:"copy",title:G},o.createElement(he,{className:ee(`${m}-copy`,F&&`${m}-copy-success`),onClick:_e,"aria-label":tt},F?Y(R[1],o.createElement(ft,null),!0):Y(R[0],o.createElement(bt,null),!0)))},Ye=l=>[l&&qe(),Ge(),Qe()],Ze=l=>[l&&o.createElement("span",{"aria-hidden":!0,key:"ellipsis"},Ft),y.suffix,Ye(l)];return o.createElement(pt,{onResize:Xe,disabled:!_||P},l=>o.createElement(Dt,{tooltipProps:H,enabledEllipsis:_,isEllipsis:be},o.createElement(Ie,Object.assign({className:ee({[`${m}-${p}`]:p,[`${m}-disabled`]:g,[`${m}-ellipsis`]:B,[`${m}-single-line`]:_&&K===1,[`${m}-ellipsis-single-line`]:We,[`${m}-ellipsis-multiple-line`]:J},h),prefixCls:u,style:Object.assign(Object.assign({},w),{WebkitLineClamp:J?K:void 0}),component:S,ref:Te(l,k,n),direction:E,onClick:M.includes("text")?C:void 0,"aria-label":q==null?void 0:q.toString(),title:O},A),o.createElement(Bt,{enabledMeasure:_&&!P,text:d,rows:K,width:Fe,fontSize:Ue,onEllipsis:Je},(s,x)=>{let R=s;return s.length&&x&&q&&(R=o.createElement("span",{key:"show-content","aria-hidden":!0},R)),At(e,o.createElement(o.Fragment,null,R,Ze(x)))}))))}),te=Kt;var Ut=globalThis&&globalThis.__rest||function(e,n){var i={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(i[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(i[t[r]]=e[t[r]]);return i};const Vt=o.forwardRef((e,n)=>{var{ellipsis:i,rel:t}=e,r=Ut(e,["ellipsis","rel"]);const u=Object.assign(Object.assign({},r),{rel:t===void 0&&r.target==="_blank"?"noopener noreferrer":t});return delete u.navigate,o.createElement(te,Object.assign({},u,{ref:n,ellipsis:!!i,component:"a"}))}),Xt=Vt,Jt=o.forwardRef((e,n)=>o.createElement(te,Object.assign({ref:n},e,{component:"div"}))),qt=Jt;var Gt=globalThis&&globalThis.__rest||function(e,n){var i={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(i[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(i[t[r]]=e[t[r]]);return i};const Qt=(e,n)=>{var{ellipsis:i}=e,t=Gt(e,["ellipsis"]);const r=o.useMemo(()=>i&&typeof i=="object"?je(i,["expandable","rows"]):i,[i]);return o.createElement(te,Object.assign({ref:n},t,{ellipsis:r,component:"span"}))},Yt=o.forwardRef(Qt);var Zt=globalThis&&globalThis.__rest||function(e,n){var i={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(i[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(i[t[r]]=e[t[r]]);return i};const en=[1,2,3,4,5],tn=o.forwardRef((e,n)=>{const{level:i=1}=e,t=Zt(e,["level"]);let r;return en.includes(i)?r=`h${i}`:r="h1",o.createElement(te,Object.assign({ref:n},t,{component:r}))}),nn=tn,V=Ie;V.Text=Yt;V.Link=Xt;V.Title=nn;V.Paragraph=qt;const sn=V;export{sn as T};
