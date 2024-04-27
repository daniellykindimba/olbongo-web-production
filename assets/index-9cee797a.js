import{r as o,A as ce,k as de,gM as Ze,gN as et,gO as we,gP as tt,u as nt,g as ot,c as oe,gQ as it,n as lt,fV as he,C as Te,aj as je,gR as st,a6 as pe,ax as rt,q as at,i as $e,gS as J,_ as ct,U as dt,o as Re,T as ve,gT as xe,fH as pt}from"./index-3b25761c.js";import{T as _e}from"./transButton-cd447730.js";import{c as ut}from"./index-22d44a8b.js";var ft=function(n,i){return o.createElement(ce,de({},n,{ref:i,icon:Ze}))},gt=o.forwardRef(ft);const mt=gt;var yt=function(n,i){return o.createElement(ce,de({},n,{ref:i,icon:et}))},bt=o.forwardRef(yt);const Et=bt,ht=(e,n,i,t)=>{const{titleMarginBottom:l,fontWeightStrong:a}=t;return{marginBottom:l,color:i,fontWeight:a,fontSize:e,lineHeight:n}},vt=e=>{const n=[1,2,3,4,5],i={};return n.forEach(t=>{i[`
      h${t}&,
      div&-h${t},
      div&-h${t} > textarea,
      h${t}
    `]=ht(e[`fontSizeHeading${t}`],e[`lineHeightHeading${t}`],e.colorTextHeading,e)}),i},xt=e=>{const{componentCls:n}=e;return{"a&, a":Object.assign(Object.assign({},we(e)),{textDecoration:e.linkDecoration,"&:active, &:hover":{textDecoration:e.linkHoverDecoration},[`&[disabled], &${n}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed","&:active, &:hover":{color:e.colorTextDisabled},"&:active":{pointerEvents:"none"}}})}},Ot=e=>({code:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.2em 0.1em",fontSize:"85%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3},kbd:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.15em 0.1em",fontSize:"90%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.06)",border:"1px solid rgba(100, 100, 100, 0.2)",borderBottomWidth:2,borderRadius:3},mark:{padding:0,backgroundColor:tt[2]},"u, ins":{textDecoration:"underline",textDecorationSkipInk:"auto"},"s, del":{textDecoration:"line-through"},strong:{fontWeight:600},"ul, ol":{marginInline:0,marginBlock:"0 1em",padding:0,li:{marginInline:"20px 0",marginBlock:0,paddingInline:"4px 0",paddingBlock:0}},ul:{listStyleType:"circle",ul:{listStyleType:"disc"}},ol:{listStyleType:"decimal"},"pre, blockquote":{margin:"1em 0"},pre:{padding:"0.4em 0.6em",whiteSpace:"pre-wrap",wordWrap:"break-word",background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3,fontFamily:e.fontFamilyCode,code:{display:"inline",margin:0,padding:0,fontSize:"inherit",fontFamily:"inherit",background:"transparent",border:0}},blockquote:{paddingInline:"0.6em 0",paddingBlock:0,borderInlineStart:"4px solid rgba(100, 100, 100, 0.2)",opacity:.85}}),St=e=>{const{componentCls:n,paddingSM:i}=e,t=i;return{"&-edit-content":{position:"relative","div&":{insetInlineStart:e.calc(e.paddingSM).mul(-1).equal(),marginTop:e.calc(t).mul(-1).equal(),marginBottom:`calc(1em - ${nt(t)})`},[`${n}-edit-content-confirm`]:{position:"absolute",insetInlineEnd:e.calc(e.marginXS).add(2).equal(),insetBlockEnd:e.marginXS,color:e.colorTextDescription,fontWeight:"normal",fontSize:e.fontSize,fontStyle:"normal",pointerEvents:"none"},textarea:{margin:"0!important",MozTransition:"none",height:"1em"}}}},Ct=e=>({[`${e.componentCls}-copy-success`]:{"\n    &,\n    &:hover,\n    &:focus":{color:e.colorSuccess}},[`${e.componentCls}-copy-icon-only`]:{marginInlineStart:0}}),wt=()=>({"\n  a&-ellipsis,\n  span&-ellipsis\n  ":{display:"inline-block",maxWidth:"100%"},"&-single-line":{whiteSpace:"nowrap"},"&-ellipsis-single-line":{overflow:"hidden",textOverflow:"ellipsis","a&, span&":{verticalAlign:"bottom"},"> code":{paddingBlock:0,maxWidth:"calc(100% - 1.2em)",display:"inline-block",overflow:"hidden",textOverflow:"ellipsis",verticalAlign:"bottom",boxSizing:"content-box"}},"&-ellipsis-multiple-line":{display:"-webkit-box",overflow:"hidden",WebkitLineClamp:3,WebkitBoxOrient:"vertical"}}),Tt=e=>{const{componentCls:n,titleMarginTop:i}=e;return{[n]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.colorText,wordBreak:"break-word",lineHeight:e.lineHeight,[`&${n}-secondary`]:{color:e.colorTextDescription},[`&${n}-success`]:{color:e.colorSuccess},[`&${n}-warning`]:{color:e.colorWarning},[`&${n}-danger`]:{color:e.colorError,"a&:active, a&:focus":{color:e.colorErrorActive},"a&:hover":{color:e.colorErrorHover}},[`&${n}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed",userSelect:"none"},"\n        div&,\n        p\n      ":{marginBottom:"1em"}},vt(e)),{[`
      & + h1${n},
      & + h2${n},
      & + h3${n},
      & + h4${n},
      & + h5${n}
      `]:{marginTop:i},"\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5":{"\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ":{marginTop:i}}}),Ot(e)),xt(e)),{[`
        ${n}-expand,
        ${n}-collapse,
        ${n}-edit,
        ${n}-copy
      `]:Object.assign(Object.assign({},we(e)),{marginInlineStart:e.marginXXS})}),St(e)),Ct(e)),wt()),{"&-rtl":{direction:"rtl"}})}},jt=()=>({titleMarginTop:"1.2em",titleMarginBottom:"0.5em"}),Ie=ot("Typography",e=>[Tt(e)],jt),$t=e=>{const{prefixCls:n,"aria-label":i,className:t,style:l,direction:a,maxLength:u,autoSize:y=!0,value:f,onSave:d,onCancel:r,onEnd:g,component:p,enterIcon:h=o.createElement(Et,null)}=e,$=o.useRef(null),x=o.useRef(!1),I=o.useRef(),[M,H]=o.useState(f);o.useEffect(()=>{H(f)},[f]),o.useEffect(()=>{if($.current&&$.current.resizableTextArea){const{textArea:v}=$.current.resizableTextArea;v.focus();const{length:O}=v.value;v.setSelectionRange(O,O)}},[]);const b=v=>{let{target:O}=v;H(O.value.replace(/[\n\r]/g,""))},S=()=>{x.current=!0},L=()=>{x.current=!1},C=v=>{let{keyCode:O}=v;x.current||(I.current=O)},U=()=>{d(M.trim())},A=v=>{let{keyCode:O,ctrlKey:z,altKey:F,metaKey:K,shiftKey:V}=v;I.current===O&&!x.current&&!z&&!F&&!K&&!V&&(O===he.ENTER?(U(),g==null||g()):O===he.ESC&&r())},m=()=>{U()},N=p?`${n}-${p}`:"",[w,R,T]=Ie(n),B=oe(n,`${n}-edit-content`,{[`${n}-rtl`]:a==="rtl"},t,N,R,T);return w(o.createElement("div",{className:B,style:l},o.createElement(it,{ref:$,maxLength:u,value:M,onChange:b,onKeyDown:C,onKeyUp:A,onCompositionStart:S,onCompositionEnd:L,onBlur:m,"aria-label":i,rows:1,autoSize:y}),h!==null?lt(h,{className:`${n}-edit-content-confirm`}):null))},Rt=$t;var _t=globalThis&&globalThis.__awaiter||function(e,n,i,t){function l(a){return a instanceof i?a:new i(function(u){u(a)})}return new(i||(i=Promise))(function(a,u){function y(r){try{d(t.next(r))}catch(g){u(g)}}function f(r){try{d(t.throw(r))}catch(g){u(g)}}function d(r){r.done?a(r.value):l(r.value).then(y,f)}d((t=t.apply(e,n||[])).next())})};const It=e=>{let{copyConfig:n,children:i}=e;const[t,l]=o.useState(!1),[a,u]=o.useState(!1),y=o.useRef(null),f=()=>{y.current&&clearTimeout(y.current)},d={};return n.format&&(d.format=n.format),o.useEffect(()=>f,[]),{copied:t,copyLoading:a,onClick:r=>_t(void 0,void 0,void 0,function*(){var g;r==null||r.preventDefault(),r==null||r.stopPropagation(),u(!0);try{const p=typeof n.text=="function"?yield n.text():n.text;ut(p||String(i)||"",d),u(!1),l(!0),f(),y.current=setTimeout(()=>{l(!1)},3e3),(g=n.onCopy)===null||g===void 0||g.call(n,r)}catch(p){throw u(!1),p}})}},Lt=It;function le(e,n){return o.useMemo(()=>{const i=!!e;return[i,Object.assign(Object.assign({},n),i&&typeof e=="object"?e:null)]},[e])}const Nt=(e,n)=>{const i=o.useRef(!1);o.useEffect(()=>{i.current?e():i.current=!0},n)},kt=Nt;var Pt=globalThis&&globalThis.__rest||function(e,n){var i={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(i[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(i[t[l]]=e[t[l]]);return i};const Mt=o.forwardRef((e,n)=>{const{prefixCls:i,component:t="article",className:l,rootClassName:a,setContentRef:u,children:y,direction:f,style:d}=e,r=Pt(e,["prefixCls","component","className","rootClassName","setContentRef","children","direction","style"]),{getPrefixCls:g,direction:p,typography:h}=o.useContext(Te),$=f??p;let x=n;u&&(x=je(n,u));const I=g("typography",i),[M,H,b]=Ie(I),S=oe(I,h==null?void 0:h.className,{[`${I}-rtl`]:$==="rtl"},l,a,H,b),L=Object.assign(Object.assign({},h==null?void 0:h.style),d);return M(o.createElement(t,Object.assign({className:S,style:L,ref:x},r),y))}),Le=Mt;var Ht=function(n,i){return o.createElement(ce,de({},n,{ref:i,icon:st}))},At=o.forwardRef(Ht);const Bt=At;function Oe(e){return e===!1?[!1,!1]:Array.isArray(e)?e:[e]}function ee(e,n,i){return e===!0||e===void 0?n:e||i&&n}function Dt(e){const{prefixCls:n,copied:i,locale:t={},onCopy:l,iconOnly:a,tooltips:u,icon:y,loading:f}=e,d=Oe(u),r=Oe(y),{copied:g,copy:p}=t,h=i?ee(d[1],g):ee(d[0],p),x=typeof h=="string"?h:i?g:p;return o.createElement(pe,{key:"copy",title:h},o.createElement(_e,{className:oe(`${n}-copy`,{[`${n}-copy-success`]:i,[`${n}-copy-icon-only`]:a}),onClick:l,"aria-label":x},i?ee(r[1],o.createElement(rt,null),!0):ee(r[0],f?o.createElement(at,null):o.createElement(Bt,null),!0)))}const te=o.forwardRef((e,n)=>{let{style:i,children:t}=e;const l=o.useRef(null);return o.useImperativeHandle(n,()=>({isExceed:()=>{const a=l.current;return a.scrollHeight>a.clientHeight},getHeight:()=>l.current.clientHeight})),o.createElement("span",{"aria-hidden":!0,ref:l,style:Object.assign({position:"fixed",display:"block",left:0,top:0,pointerEvents:"none",backgroundColor:"rgba(255, 0, 0, 0.65)"},i)},t)});function Ne(e){const n=typeof e;return n==="string"||n==="number"}function Wt(e){let n=0;return e.forEach(i=>{Ne(i)?n+=String(i).length:n+=1}),n}function Se(e,n){let i=0;const t=[];for(let l=0;l<e.length;l+=1){if(i===n)return t;const a=e[l],y=Ne(a)?String(a).length:1,f=i+y;if(f>n){const d=n-i;return t.push(String(a).slice(0,d)),t}t.push(a),i=f}return e}const se=0,re=1,ae=2,Ce=3,ne={display:"-webkit-box",overflow:"hidden",WebkitBoxOrient:"vertical"};function zt(e){const{enableMeasure:n,width:i,text:t,children:l,rows:a,expanded:u,miscDeps:y,onEllipsis:f}=e,d=o.useMemo(()=>$e(t),[t]),r=o.useMemo(()=>Wt(d),[t]),g=o.useMemo(()=>l(d,!1),[t]),[p,h]=o.useState(null),$=o.useRef(null),x=o.useRef(null),I=o.useRef(null),M=o.useRef(null),[H,b]=o.useState(!1),[S,L]=o.useState(se),[C,U]=o.useState(0);J(()=>{L(n&&i&&r?re:se)},[i,t,a,n,d]),J(()=>{var w,R,T,B;if(S===re){const v=!!(!((w=x.current)===null||w===void 0)&&w.isExceed());L(v?ae:Ce),h(v?[0,r]:null),b(v);const O=((R=x.current)===null||R===void 0?void 0:R.getHeight())||0,z=a===1?0:((T=I.current)===null||T===void 0?void 0:T.getHeight())||0,F=((B=M.current)===null||B===void 0?void 0:B.getHeight())||0,K=z+F,V=Math.max(O,K);U(V+1),f(v)}},[S]);const A=p?Math.ceil((p[0]+p[1])/2):0;J(()=>{var w;const[R,T]=p||[0,0];if(R!==T){const v=(((w=$.current)===null||w===void 0?void 0:w.getHeight())||0)>C;let O=A;T-R===1&&(O=v?R:T),h(v?[R,O]:[O,T])}},[p,A]);const m=o.useMemo(()=>{if(S!==ae||!p||p[0]!==p[1]){const w=l(d,!1);return S!==Ce&&S!==se?o.createElement("span",{style:Object.assign(Object.assign({},ne),{WebkitLineClamp:a})},w):w}return l(u?d:Se(d,p[0]),H)},[u,S,p,d].concat(ct(y))),N={width:i,whiteSpace:"normal",margin:0,padding:0};return o.createElement(o.Fragment,null,m,S===re&&o.createElement(o.Fragment,null,o.createElement(te,{style:Object.assign(Object.assign(Object.assign({},N),ne),{WebkitLineClamp:a}),ref:x},g),o.createElement(te,{style:Object.assign(Object.assign(Object.assign({},N),ne),{WebkitLineClamp:a-1}),ref:I},g),o.createElement(te,{style:Object.assign(Object.assign(Object.assign({},N),ne),{WebkitLineClamp:1}),ref:M},l([],!0))),S===ae&&p&&p[0]!==p[1]&&o.createElement(te,{style:Object.assign(Object.assign({},N),{top:400}),ref:$},l(Se(d,A),!0)))}const Ut=e=>{let{enableEllipsis:n,isEllipsis:i,children:t,tooltipProps:l}=e;return!(l!=null&&l.title)||!n?t:o.createElement(pe,Object.assign({open:i?void 0:!1},l),t)},Ft=Ut;var Kt=globalThis&&globalThis.__rest||function(e,n){var i={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(i[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(i[t[l]]=e[t[l]]);return i};function Vt(e,n){let{mark:i,code:t,underline:l,delete:a,strong:u,keyboard:y,italic:f}=e,d=n;function r(g,p){p&&(d=o.createElement(g,{},d))}return r("strong",u),r("u",l),r("del",a),r("code",t),r("mark",i),r("kbd",y),r("i",f),d}const qt="...",Xt=o.forwardRef((e,n)=>{var i,t,l;const{prefixCls:a,className:u,style:y,type:f,disabled:d,children:r,ellipsis:g,editable:p,copyable:h,component:$,title:x}=e,I=Kt(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),{getPrefixCls:M,direction:H}=o.useContext(Te),[b]=dt("Text"),S=o.useRef(null),L=o.useRef(null),C=M("typography",a),U=Re(I,["mark","code","delete","underline","strong","keyboard","italic"]),[A,m]=le(p),[N,w]=ve(!1,{value:m.editing}),{triggerType:R=["icon"]}=m,T=s=>{var c;s&&((c=m.onStart)===null||c===void 0||c.call(m)),w(s)};kt(()=>{var s;N||(s=L.current)===null||s===void 0||s.focus()},[N]);const B=s=>{s==null||s.preventDefault(),T(!0)},v=s=>{var c;(c=m.onChange)===null||c===void 0||c.call(m,s),T(!1)},O=()=>{var s;(s=m.onCancel)===null||s===void 0||s.call(m),T(!1)},[z,F]=le(h),{copied:K,copyLoading:V,onClick:ke}=Lt({copyConfig:F,children:r}),[ue,Pe]=o.useState(!1),[fe,Me]=o.useState(!1),[ge,He]=o.useState(!1),[me,Ae]=o.useState(!1),[Be,De]=o.useState(!0),[D,E]=le(g,{expandable:!1,symbol:s=>s?b==null?void 0:b.collapse:b==null?void 0:b.expand}),[k,We]=ve(E.defaultExpanded||!1,{value:E.expanded}),j=D&&(!k||E.expandable==="collapsible"),{rows:q=1}=E,G=o.useMemo(()=>j&&(E.suffix!==void 0||E.onEllipsis||E.expandable||A||z),[j,E,A,z]);J(()=>{D&&!G&&(Pe(xe("webkitLineClamp")),Me(xe("textOverflow")))},[G,D]);const[P,ze]=o.useState(j),ye=o.useMemo(()=>G?!1:q===1?fe:ue,[G,fe,ue]);J(()=>{ze(ye&&j)},[ye,j]);const be=j&&(P?me:ge),Ue=j&&q===1&&P,Y=j&&q>1&&P,Fe=(s,c)=>{var _;We(c.expanded),(_=E.onExpand)===null||_===void 0||_.call(E,s,c)},[Ee,Ke]=o.useState(0),Ve=s=>{let{offsetWidth:c}=s;Ke(c)},qe=s=>{var c;He(s),ge!==s&&((c=E.onEllipsis)===null||c===void 0||c.call(E,s))};o.useEffect(()=>{const s=S.current;if(D&&P&&s){const c=Y?s.offsetHeight<s.scrollHeight:s.offsetWidth<s.scrollWidth;me!==c&&Ae(c)}},[D,P,r,Y,Be,Ee]),o.useEffect(()=>{const s=S.current;if(typeof IntersectionObserver>"u"||!s||!P||!j)return;const c=new IntersectionObserver(()=>{De(!!s.offsetParent)});return c.observe(s),()=>{c.disconnect()}},[P,j]);let W={};E.tooltip===!0?W={title:(i=m.text)!==null&&i!==void 0?i:r}:o.isValidElement(E.tooltip)?W={title:E.tooltip}:typeof E.tooltip=="object"?W=Object.assign({title:(t=m.text)!==null&&t!==void 0?t:r},E.tooltip):W={title:E.tooltip};const Z=o.useMemo(()=>{const s=c=>["string","number"].includes(typeof c);if(!(!D||P)){if(s(m.text))return m.text;if(s(r))return r;if(s(x))return x;if(s(W.title))return W.title}},[D,P,x,W.title,be]);if(N)return o.createElement(Rt,{value:(l=m.text)!==null&&l!==void 0?l:typeof r=="string"?r:"",onSave:v,onCancel:O,onEnd:m.onEnd,prefixCls:C,className:u,style:y,direction:H,component:$,maxLength:m.maxLength,autoSize:m.autoSize,enterIcon:m.enterIcon});const Xe=()=>{const{expandable:s,symbol:c}=E;return!s||k&&s!=="collapsible"?null:o.createElement("a",{key:"expand",className:`${C}-${k?"collapse":"expand"}`,onClick:_=>Fe(_,{expanded:!k}),"aria-label":k?b.collapse:b==null?void 0:b.expand},typeof c=="function"?c(k):c)},Je=()=>{if(!A)return;const{icon:s,tooltip:c}=m,_=$e(c)[0]||(b==null?void 0:b.edit),X=typeof _=="string"?_:"";return R.includes("icon")?o.createElement(pe,{key:"edit",title:c===!1?"":_},o.createElement(_e,{ref:L,className:`${C}-edit`,onClick:B,"aria-label":X},s||o.createElement(mt,{role:"button"}))):null},Qe=()=>z?o.createElement(Dt,Object.assign({key:"copy"},F,{prefixCls:C,copied:K,locale:b,onCopy:ke,loading:V,iconOnly:r==null})):null,Ge=s=>[s&&Xe(),Je(),Qe()],Ye=s=>[s&&!k&&o.createElement("span",{"aria-hidden":!0,key:"ellipsis"},qt),E.suffix,Ge(s)];return o.createElement(pt,{onResize:Ve,disabled:!j},s=>o.createElement(Ft,{tooltipProps:W,enableEllipsis:j,isEllipsis:be},o.createElement(Le,Object.assign({className:oe({[`${C}-${f}`]:f,[`${C}-disabled`]:d,[`${C}-ellipsis`]:D,[`${C}-single-line`]:j&&q===1,[`${C}-ellipsis-single-line`]:Ue,[`${C}-ellipsis-multiple-line`]:Y},u),prefixCls:a,style:Object.assign(Object.assign({},y),{WebkitLineClamp:Y?q:void 0}),component:$,ref:je(s,S,n),direction:H,onClick:R.includes("text")?B:void 0,"aria-label":Z==null?void 0:Z.toString(),title:x},U),o.createElement(zt,{enableMeasure:j&&!P,text:r,rows:q,width:Ee,onEllipsis:qe,expanded:k,miscDeps:[K,k,V]},(c,_)=>{let X=c;return c.length&&_&&!k&&Z&&(X=o.createElement("span",{key:"show-content","aria-hidden":!0},X)),Vt(e,o.createElement(o.Fragment,null,X,Ye(_)))}))))}),ie=Xt;var Jt=globalThis&&globalThis.__rest||function(e,n){var i={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(i[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(i[t[l]]=e[t[l]]);return i};const Qt=o.forwardRef((e,n)=>{var{ellipsis:i,rel:t}=e,l=Jt(e,["ellipsis","rel"]);const a=Object.assign(Object.assign({},l),{rel:t===void 0&&l.target==="_blank"?"noopener noreferrer":t});return delete a.navigate,o.createElement(ie,Object.assign({},a,{ref:n,ellipsis:!!i,component:"a"}))}),Gt=Qt,Yt=o.forwardRef((e,n)=>o.createElement(ie,Object.assign({ref:n},e,{component:"div"}))),Zt=Yt;var en=globalThis&&globalThis.__rest||function(e,n){var i={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(i[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(i[t[l]]=e[t[l]]);return i};const tn=(e,n)=>{var{ellipsis:i}=e,t=en(e,["ellipsis"]);const l=o.useMemo(()=>i&&typeof i=="object"?Re(i,["expandable","rows"]):i,[i]);return o.createElement(ie,Object.assign({ref:n},t,{ellipsis:l,component:"span"}))},nn=o.forwardRef(tn);var on=globalThis&&globalThis.__rest||function(e,n){var i={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(i[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(i[t[l]]=e[t[l]]);return i};const ln=[1,2,3,4,5],sn=o.forwardRef((e,n)=>{const{level:i=1}=e,t=on(e,["level"]);let l;return ln.includes(i)?l=`h${i}`:l="h1",o.createElement(ie,Object.assign({ref:n},t,{component:l}))}),rn=sn,Q=Le;Q.Text=nn;Q.Link=Gt;Q.Title=rn;Q.Paragraph=Zt;const un=Q;export{un as T};
