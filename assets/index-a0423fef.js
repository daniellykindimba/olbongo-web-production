import{r as o,A as ce,w as de,fK as Te,fL as tt,f as nt,d as ot,b as ne,fM as it,y as st,e_ as Ee,i as lt,a as $e,as as je,af as ue,aC as rt,D as at,p as Re,fN as X,k as ct,a3 as dt,v as Ie,a2 as xe,fO as Oe,eX as ut}from"./index-31656684.js";import{E as pt}from"./EditOutlined-401a1613.js";import{T as _e}from"./transButton-051b5cc0.js";import{c as ft}from"./index-4d674653.js";var gt=function(n,i){return o.createElement(ce,de({},n,{ref:i,icon:pt}))},mt=o.forwardRef(gt);const bt=mt;var yt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"};const vt=yt;var ht=function(n,i){return o.createElement(ce,de({},n,{ref:i,icon:vt}))},Et=o.forwardRef(ht);const xt=Et,Ot=(e,n,i,t)=>{const{titleMarginBottom:s,fontWeightStrong:a}=t;return{marginBottom:s,color:i,fontWeight:a,fontSize:e,lineHeight:n}},Ct=e=>{const n=[1,2,3,4,5],i={};return n.forEach(t=>{i[`
      h${t}&,
      div&-h${t},
      div&-h${t} > textarea,
      h${t}
    `]=Ot(e[`fontSizeHeading${t}`],e[`lineHeightHeading${t}`],e.colorTextHeading,e)}),i},St=e=>{const{componentCls:n}=e;return{"a&, a":Object.assign(Object.assign({},Te(e)),{textDecoration:e.linkDecoration,"&:active, &:hover":{textDecoration:e.linkHoverDecoration},[`&[disabled], &${n}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed","&:active, &:hover":{color:e.colorTextDisabled},"&:active":{pointerEvents:"none"}}})}},wt=e=>({code:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.2em 0.1em",fontSize:"85%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3},kbd:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.15em 0.1em",fontSize:"90%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.06)",border:"1px solid rgba(100, 100, 100, 0.2)",borderBottomWidth:2,borderRadius:3},mark:{padding:0,backgroundColor:tt[2]},"u, ins":{textDecoration:"underline",textDecorationSkipInk:"auto"},"s, del":{textDecoration:"line-through"},strong:{fontWeight:600},"ul, ol":{marginInline:0,marginBlock:"0 1em",padding:0,li:{marginInline:"20px 0",marginBlock:0,paddingInline:"4px 0",paddingBlock:0}},ul:{listStyleType:"circle",ul:{listStyleType:"disc"}},ol:{listStyleType:"decimal"},"pre, blockquote":{margin:"1em 0"},pre:{padding:"0.4em 0.6em",whiteSpace:"pre-wrap",wordWrap:"break-word",background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3,fontFamily:e.fontFamilyCode,code:{display:"inline",margin:0,padding:0,fontSize:"inherit",fontFamily:"inherit",background:"transparent",border:0}},blockquote:{paddingInline:"0.6em 0",paddingBlock:0,borderInlineStart:"4px solid rgba(100, 100, 100, 0.2)",opacity:.85}}),Tt=e=>{const{componentCls:n,paddingSM:i}=e,t=i;return{"&-edit-content":{position:"relative","div&":{insetInlineStart:e.calc(e.paddingSM).mul(-1).equal(),marginTop:e.calc(t).mul(-1).equal(),marginBottom:`calc(1em - ${nt(t)})`},[`${n}-edit-content-confirm`]:{position:"absolute",insetInlineEnd:e.calc(e.marginXS).add(2).equal(),insetBlockEnd:e.marginXS,color:e.colorTextDescription,fontWeight:"normal",fontSize:e.fontSize,fontStyle:"normal",pointerEvents:"none"},textarea:{margin:"0!important",MozTransition:"none",height:"1em"}}}},$t=e=>({[`${e.componentCls}-copy-success`]:{"\n    &,\n    &:hover,\n    &:focus":{color:e.colorSuccess}},[`${e.componentCls}-copy-icon-only`]:{marginInlineStart:0}}),jt=()=>({"\n  a&-ellipsis,\n  span&-ellipsis\n  ":{display:"inline-block",maxWidth:"100%"},"&-single-line":{whiteSpace:"nowrap"},"&-ellipsis-single-line":{overflow:"hidden",textOverflow:"ellipsis","a&, span&":{verticalAlign:"bottom"},"> code":{paddingBlock:0,maxWidth:"calc(100% - 1.2em)",display:"inline-block",overflow:"hidden",textOverflow:"ellipsis",verticalAlign:"bottom",boxSizing:"content-box"}},"&-ellipsis-multiple-line":{display:"-webkit-box",overflow:"hidden",WebkitLineClamp:3,WebkitBoxOrient:"vertical"}}),Rt=e=>{const{componentCls:n,titleMarginTop:i}=e;return{[n]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.colorText,wordBreak:"break-word",lineHeight:e.lineHeight,[`&${n}-secondary`]:{color:e.colorTextDescription},[`&${n}-success`]:{color:e.colorSuccess},[`&${n}-warning`]:{color:e.colorWarning},[`&${n}-danger`]:{color:e.colorError,"a&:active, a&:focus":{color:e.colorErrorActive},"a&:hover":{color:e.colorErrorHover}},[`&${n}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed",userSelect:"none"},"\n        div&,\n        p\n      ":{marginBottom:"1em"}},Ct(e)),{[`
      & + h1${n},
      & + h2${n},
      & + h3${n},
      & + h4${n},
      & + h5${n}
      `]:{marginTop:i},"\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5":{"\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ":{marginTop:i}}}),wt(e)),St(e)),{[`
        ${n}-expand,
        ${n}-collapse,
        ${n}-edit,
        ${n}-copy
      `]:Object.assign(Object.assign({},Te(e)),{marginInlineStart:e.marginXXS})}),Tt(e)),$t(e)),jt()),{"&-rtl":{direction:"rtl"}})}},It=()=>({titleMarginTop:"1.2em",titleMarginBottom:"0.5em"}),Le=ot("Typography",e=>[Rt(e)],It),_t=e=>{const{prefixCls:n,"aria-label":i,className:t,style:s,direction:a,maxLength:f,autoSize:y=!0,value:g,onSave:d,onCancel:r,onEnd:p,component:u,enterIcon:m=o.createElement(xt,null)}=e,C=o.useRef(null),O=o.useRef(!1),R=o.useRef(),[H,B]=o.useState(g);o.useEffect(()=>{B(g)},[g]),o.useEffect(()=>{if(C.current&&C.current.resizableTextArea){const{textArea:h}=C.current.resizableTextArea;h.focus();const{length:x}=h.value;h.setSelectionRange(x,x)}},[]);const v=h=>{let{target:x}=h;B(x.value.replace(/[\n\r]/g,""))},S=()=>{O.current=!0},M=()=>{O.current=!1},w=h=>{let{keyCode:x}=h;O.current||(R.current=x)},U=()=>{d(H.trim())},k=h=>{let{keyCode:x,ctrlKey:q,altKey:A,metaKey:V,shiftKey:K}=h;R.current===x&&!O.current&&!q&&!A&&!V&&!K&&(x===Ee.ENTER?(U(),p==null||p()):x===Ee.ESC&&r())},b=()=>{U()},_=u?`${n}-${u}`:"",[T,I,$]=Le(n),z=ne(n,`${n}-edit-content`,{[`${n}-rtl`]:a==="rtl"},t,_,I,$);return T(o.createElement("div",{className:z,style:s},o.createElement(it,{ref:C,maxLength:f,value:H,onChange:v,onKeyDown:w,onKeyUp:k,onCompositionStart:S,onCompositionEnd:M,onBlur:b,"aria-label":i,rows:1,autoSize:y}),m!==null?st(m,{className:`${n}-edit-content-confirm`}):null))},Lt=_t;var Mt=globalThis&&globalThis.__awaiter||function(e,n,i,t){function s(a){return a instanceof i?a:new i(function(f){f(a)})}return new(i||(i=Promise))(function(a,f){function y(r){try{d(t.next(r))}catch(p){f(p)}}function g(r){try{d(t.throw(r))}catch(p){f(p)}}function d(r){r.done?a(r.value):s(r.value).then(y,g)}d((t=t.apply(e,n||[])).next())})};const kt=e=>{let{copyConfig:n,children:i}=e;const[t,s]=o.useState(!1),[a,f]=o.useState(!1),y=o.useRef(null),g=()=>{y.current&&clearTimeout(y.current)},d={};n.format&&(d.format=n.format),o.useEffect(()=>g,[]);const r=lt(p=>Mt(void 0,void 0,void 0,function*(){var u;p==null||p.preventDefault(),p==null||p.stopPropagation(),f(!0);try{const m=typeof n.text=="function"?yield n.text():n.text;ft(m||String(i)||"",d),f(!1),s(!0),g(),y.current=setTimeout(()=>{s(!1)},3e3),(u=n.onCopy)===null||u===void 0||u.call(n,p)}catch(m){throw f(!1),m}}));return{copied:t,copyLoading:a,onClick:r}},Nt=kt;function se(e,n){return o.useMemo(()=>{const i=!!e;return[i,Object.assign(Object.assign({},n),i&&typeof e=="object"?e:null)]},[e])}const Pt=(e,n)=>{const i=o.useRef(!1);o.useEffect(()=>{i.current?e():i.current=!0},n)},Ht=Pt,Bt=e=>{const n=o.useRef();return o.useEffect(()=>{n.current=e}),n.current},zt=Bt;var At=globalThis&&globalThis.__rest||function(e,n){var i={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(i[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(i[t[s]]=e[t[s]]);return i};const Dt=o.forwardRef((e,n)=>{const{prefixCls:i,component:t="article",className:s,rootClassName:a,setContentRef:f,children:y,direction:g,style:d}=e,r=At(e,["prefixCls","component","className","rootClassName","setContentRef","children","direction","style"]),{getPrefixCls:p,direction:u,typography:m}=o.useContext($e),C=g??u;let O=n;f&&(O=je(n,f));const R=p("typography",i),[H,B,v]=Le(R),S=ne(R,m==null?void 0:m.className,{[`${R}-rtl`]:C==="rtl"},s,a,B,v),M=Object.assign(Object.assign({},m==null?void 0:m.style),d);return H(o.createElement(t,Object.assign({className:S,style:M,ref:O},r),y))}),Me=Dt;var Wt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"};const Ut=Wt;var Vt=function(n,i){return o.createElement(ce,de({},n,{ref:i,icon:Ut}))},Kt=o.forwardRef(Vt);const Ft=Kt;function Ce(e){return e===!1?[!1,!1]:Array.isArray(e)?e:[e]}function Z(e,n,i){return e===!0||e===void 0?n:e||i&&n}const qt=e=>{const{prefixCls:n,copied:i,locale:t,iconOnly:s,tooltips:a,icon:f,loading:y,tabIndex:g,onCopy:d}=e,r=Ce(a),p=Ce(f),{copied:u,copy:m}=t??{},C=i?Z(r[1],u):Z(r[0],m),R=typeof C=="string"?C:i?u:m;return o.createElement(ue,{key:"copy",title:C},o.createElement(_e,{className:ne(`${n}-copy`,{[`${n}-copy-success`]:i,[`${n}-copy-icon-only`]:s}),onClick:d,"aria-label":R,tabIndex:g},i?Z(p[1],o.createElement(rt,null),!0):Z(p[0],y?o.createElement(at,null):o.createElement(Ft,null),!0)))},Xt=qt,ee=o.forwardRef((e,n)=>{let{style:i,children:t}=e;const s=o.useRef(null);return o.useImperativeHandle(n,()=>({isExceed:()=>{const a=s.current;return a.scrollHeight>a.clientHeight},getHeight:()=>s.current.clientHeight})),o.createElement("span",{"aria-hidden":!0,ref:s,style:Object.assign({position:"fixed",display:"block",left:0,top:0,pointerEvents:"none",backgroundColor:"rgba(255, 0, 0, 0.65)"},i)},t)});function ke(e){const n=typeof e;return n==="string"||n==="number"}function Jt(e){let n=0;return e.forEach(i=>{ke(i)?n+=String(i).length:n+=1}),n}function Se(e,n){let i=0;const t=[];for(let s=0;s<e.length;s+=1){if(i===n)return t;const a=e[s],y=ke(a)?String(a).length:1,g=i+y;if(g>n){const d=n-i;return t.push(String(a).slice(0,d)),t}t.push(a),i=g}return e}const le=0,re=1,ae=2,we=3,te={display:"-webkit-box",overflow:"hidden",WebkitBoxOrient:"vertical"};function Gt(e){const{enableMeasure:n,width:i,text:t,children:s,rows:a,expanded:f,miscDeps:y,onEllipsis:g}=e,d=o.useMemo(()=>Re(t),[t]),r=o.useMemo(()=>Jt(d),[t]),p=o.useMemo(()=>s(d,!1),[t]),[u,m]=o.useState(null),C=o.useRef(null),O=o.useRef(null),R=o.useRef(null),H=o.useRef(null),[B,v]=o.useState(!1),[S,M]=o.useState(le),[w,U]=o.useState(0);X(()=>{M(n&&i&&r?re:le)},[i,t,a,n,d]),X(()=>{var T,I,$,z;if(S===re){const h=!!(!((T=O.current)===null||T===void 0)&&T.isExceed());M(h?ae:we),m(h?[0,r]:null),v(h);const x=((I=O.current)===null||I===void 0?void 0:I.getHeight())||0,q=a===1?0:(($=R.current)===null||$===void 0?void 0:$.getHeight())||0,A=((z=H.current)===null||z===void 0?void 0:z.getHeight())||0,V=q+A,K=Math.max(x,V);U(K+1),g(h)}},[S]);const k=u?Math.ceil((u[0]+u[1])/2):0;X(()=>{var T;const[I,$]=u||[0,0];if(I!==$){const h=(((T=C.current)===null||T===void 0?void 0:T.getHeight())||0)>w;let x=k;$-I===1&&(x=h?I:$),m(h?[I,x]:[x,$])}},[u,k]);const b=o.useMemo(()=>{if(S!==ae||!u||u[0]!==u[1]){const T=s(d,!1);return S!==we&&S!==le?o.createElement("span",{style:Object.assign(Object.assign({},te),{WebkitLineClamp:a})},T):T}return s(f?d:Se(d,u[0]),B)},[f,S,u,d].concat(ct(y))),_={width:i,whiteSpace:"normal",margin:0,padding:0};return o.createElement(o.Fragment,null,b,S===re&&o.createElement(o.Fragment,null,o.createElement(ee,{style:Object.assign(Object.assign(Object.assign({},_),te),{WebkitLineClamp:a}),ref:O},p),o.createElement(ee,{style:Object.assign(Object.assign(Object.assign({},_),te),{WebkitLineClamp:a-1}),ref:R},p),o.createElement(ee,{style:Object.assign(Object.assign(Object.assign({},_),te),{WebkitLineClamp:1}),ref:H},s([],!0))),S===ae&&u&&u[0]!==u[1]&&o.createElement(ee,{style:Object.assign(Object.assign({},_),{top:400}),ref:C},s(Se(d,k),!0)))}const Qt=e=>{let{enableEllipsis:n,isEllipsis:i,children:t,tooltipProps:s}=e;return!(s!=null&&s.title)||!n?t:o.createElement(ue,Object.assign({open:i?void 0:!1},s),t)},Yt=Qt;var Zt=globalThis&&globalThis.__rest||function(e,n){var i={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(i[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(i[t[s]]=e[t[s]]);return i};function en(e,n){let{mark:i,code:t,underline:s,delete:a,strong:f,keyboard:y,italic:g}=e,d=n;function r(p,u){u&&(d=o.createElement(p,{},d))}return r("strong",f),r("u",s),r("del",a),r("code",t),r("mark",i),r("kbd",y),r("i",g),d}const tn="...",nn=o.forwardRef((e,n)=>{var i,t,s;const{prefixCls:a,className:f,style:y,type:g,disabled:d,children:r,ellipsis:p,editable:u,copyable:m,component:C,title:O}=e,R=Zt(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),{getPrefixCls:H,direction:B}=o.useContext($e),[v]=dt("Text"),S=o.useRef(null),M=o.useRef(null),w=H("typography",a),U=Ie(R,["mark","code","delete","underline","strong","keyboard","italic"]),[k,b]=se(u),[_,T]=xe(!1,{value:b.editing}),{triggerType:I=["icon"]}=b,$=l=>{var c;l&&((c=b.onStart)===null||c===void 0||c.call(b)),T(l)},z=zt(_);Ht(()=>{var l;!_&&z&&((l=M.current)===null||l===void 0||l.focus())},[_]);const h=l=>{l==null||l.preventDefault(),$(!0)},x=l=>{var c;(c=b.onChange)===null||c===void 0||c.call(b,l),$(!1)},q=()=>{var l;(l=b.onCancel)===null||l===void 0||l.call(b),$(!1)},[A,V]=se(m),{copied:K,copyLoading:pe,onClick:Ne}=Nt({copyConfig:V,children:r}),[fe,Pe]=o.useState(!1),[ge,He]=o.useState(!1),[me,Be]=o.useState(!1),[be,ze]=o.useState(!1),[Ae,De]=o.useState(!0),[D,E]=se(p,{expandable:!1,symbol:l=>l?v==null?void 0:v.collapse:v==null?void 0:v.expand}),[L,We]=xe(E.defaultExpanded||!1,{value:E.expanded}),j=D&&(!L||E.expandable==="collapsible"),{rows:F=1}=E,G=o.useMemo(()=>j&&(E.suffix!==void 0||E.onEllipsis||E.expandable||k||A),[j,E,k,A]);X(()=>{D&&!G&&(Pe(Oe("webkitLineClamp")),He(Oe("textOverflow")))},[G,D]);const[N,Ue]=o.useState(j),ye=o.useMemo(()=>G?!1:F===1?ge:fe,[G,ge,fe]);X(()=>{Ue(ye&&j)},[ye,j]);const ve=j&&(N?be:me),Ve=j&&F===1&&N,Q=j&&F>1&&N,Ke=(l,c)=>{var P;We(c.expanded),(P=E.onExpand)===null||P===void 0||P.call(E,l,c)},[he,Fe]=o.useState(0),qe=l=>{let{offsetWidth:c}=l;Fe(c)},Xe=l=>{var c;Be(l),me!==l&&((c=E.onEllipsis)===null||c===void 0||c.call(E,l))};o.useEffect(()=>{const l=S.current;if(D&&N&&l){const c=Q?l.offsetHeight<l.scrollHeight:l.offsetWidth<l.scrollWidth;be!==c&&ze(c)}},[D,N,r,Q,Ae,he]),o.useEffect(()=>{const l=S.current;if(typeof IntersectionObserver>"u"||!l||!N||!j)return;const c=new IntersectionObserver(()=>{De(!!l.offsetParent)});return c.observe(l),()=>{c.disconnect()}},[N,j]);let W={};E.tooltip===!0?W={title:(i=b.text)!==null&&i!==void 0?i:r}:o.isValidElement(E.tooltip)?W={title:E.tooltip}:typeof E.tooltip=="object"?W=Object.assign({title:(t=b.text)!==null&&t!==void 0?t:r},E.tooltip):W={title:E.tooltip};const Y=o.useMemo(()=>{const l=c=>["string","number"].includes(typeof c);if(!(!D||N)){if(l(b.text))return b.text;if(l(r))return r;if(l(O))return O;if(l(W.title))return W.title}},[D,N,O,W.title,ve]);if(_)return o.createElement(Lt,{value:(s=b.text)!==null&&s!==void 0?s:typeof r=="string"?r:"",onSave:x,onCancel:q,onEnd:b.onEnd,prefixCls:w,className:f,style:y,direction:B,component:C,maxLength:b.maxLength,autoSize:b.autoSize,enterIcon:b.enterIcon});const Je=()=>{const{expandable:l,symbol:c}=E;return!l||L&&l!=="collapsible"?null:o.createElement("a",{key:"expand",className:`${w}-${L?"collapse":"expand"}`,onClick:P=>Ke(P,{expanded:!L}),"aria-label":L?v.collapse:v==null?void 0:v.expand},typeof c=="function"?c(L):c)},Ge=()=>{if(!k)return;const{icon:l,tooltip:c,tabIndex:P}=b,ie=Re(c)[0]||(v==null?void 0:v.edit),et=typeof ie=="string"?ie:"";return I.includes("icon")?o.createElement(ue,{key:"edit",title:c===!1?"":ie},o.createElement(_e,{ref:M,className:`${w}-edit`,onClick:h,"aria-label":et,tabIndex:P},l||o.createElement(bt,{role:"button"}))):null},Qe=()=>A?o.createElement(Xt,Object.assign({key:"copy"},V,{prefixCls:w,copied:K,locale:v,onCopy:Ne,loading:pe,iconOnly:r==null})):null,Ye=l=>[l&&Je(),Ge(),Qe()],Ze=l=>[l&&!L&&o.createElement("span",{"aria-hidden":!0,key:"ellipsis"},tn),E.suffix,Ye(l)];return o.createElement(ut,{onResize:qe,disabled:!j},l=>o.createElement(Yt,{tooltipProps:W,enableEllipsis:j,isEllipsis:ve},o.createElement(Me,Object.assign({className:ne({[`${w}-${g}`]:g,[`${w}-disabled`]:d,[`${w}-ellipsis`]:D,[`${w}-single-line`]:j&&F===1&&!L,[`${w}-ellipsis-single-line`]:Ve,[`${w}-ellipsis-multiple-line`]:Q},f),prefixCls:a,style:Object.assign(Object.assign({},y),{WebkitLineClamp:Q?F:void 0}),component:C,ref:je(l,S,n),direction:B,onClick:I.includes("text")?h:void 0,"aria-label":Y==null?void 0:Y.toString(),title:O},U),o.createElement(Gt,{enableMeasure:j&&!N,text:r,rows:F,width:he,onEllipsis:Xe,expanded:L,miscDeps:[K,L,pe,k,A]},(c,P)=>en(e,o.createElement(o.Fragment,null,c.length>0&&P&&!L&&Y?o.createElement("span",{key:"show-content","aria-hidden":!0},c):c,Ze(P)))))))}),oe=nn;var on=globalThis&&globalThis.__rest||function(e,n){var i={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(i[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(i[t[s]]=e[t[s]]);return i};const sn=o.forwardRef((e,n)=>{var{ellipsis:i,rel:t}=e,s=on(e,["ellipsis","rel"]);const a=Object.assign(Object.assign({},s),{rel:t===void 0&&s.target==="_blank"?"noopener noreferrer":t});return delete a.navigate,o.createElement(oe,Object.assign({},a,{ref:n,ellipsis:!!i,component:"a"}))}),ln=sn,rn=o.forwardRef((e,n)=>o.createElement(oe,Object.assign({ref:n},e,{component:"div"}))),an=rn;var cn=globalThis&&globalThis.__rest||function(e,n){var i={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(i[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(i[t[s]]=e[t[s]]);return i};const dn=(e,n)=>{var{ellipsis:i}=e,t=cn(e,["ellipsis"]);const s=o.useMemo(()=>i&&typeof i=="object"?Ie(i,["expandable","rows"]):i,[i]);return o.createElement(oe,Object.assign({ref:n},t,{ellipsis:s,component:"span"}))},un=o.forwardRef(dn);var pn=globalThis&&globalThis.__rest||function(e,n){var i={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(i[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(i[t[s]]=e[t[s]]);return i};const fn=[1,2,3,4,5],gn=o.forwardRef((e,n)=>{const{level:i=1}=e,t=pn(e,["level"]);let s;return fn.includes(i)?s=`h${i}`:s="h1",o.createElement(oe,Object.assign({ref:n},t,{component:s}))}),mn=gn,J=Me;J.Text=un;J.Link=ln;J.Title=mn;J.Paragraph=an;const En=J;export{Ut as C,vt as E,En as T};
