import{r as s,H as w,O as I,z as Q,dn as _,gw as W,gx as ce,a as L,gy as ie,gz as ue,t as D,u as N,gA as fe,el as de,em as me,gB as M,gC as z,J as Ce,y as ge,x as be,w as ve,v as xe,gD as ye,D as pe,N as Oe,dp as Pe,gE as he}from"./index-d9f4923f.js";import{D as ke,P as Ee}from"./DialogWrap-994988aa.js";import{u as G}from"./index-6f06488e.js";function Te(){const[e,n]=s.useState([]),l=s.useCallback(t=>(n(o=>[].concat(w(o),[t])),()=>{n(o=>o.filter(a=>a!==t))}),[]);return[e,l]}function Y(e,n){return I.createElement("span",{className:`${e}-close-x`},n||I.createElement(Q,{className:`${e}-close-icon`}))}const J=e=>{const{okText:n,okType:l="primary",cancelText:t,confirmLoading:o,onOk:a,onCancel:g,okButtonProps:y,cancelButtonProps:r}=e,[c]=_("Modal",W());return I.createElement(ce,{disabled:!1},I.createElement(L,Object.assign({onClick:g},r),t||(c==null?void 0:c.cancelText)),I.createElement(L,Object.assign({},ie(l),{loading:o,onClick:a},y),n||(c==null?void 0:c.okText)))};var je=globalThis&&globalThis.__rest||function(e,n){var l={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(l[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(l[t[o]]=e[t[o]]);return l};let B;const we=e=>{B={x:e.pageX,y:e.pageY},setTimeout(()=>{B=null},100)};ue()&&document.documentElement.addEventListener("click",we,!0);const Ne=e=>{var n;const{getPopupContainer:l,getPrefixCls:t,direction:o,modal:a}=s.useContext(D),g=$=>{const{onCancel:T}=e;T==null||T($)},y=$=>{const{onOk:T}=e;T==null||T($)},{prefixCls:r,className:c,rootClassName:f,open:u,wrapClassName:m,centered:d,getContainer:x,closeIcon:h,closable:v,focusTriggerAfterClose:i=!0,style:C,visible:p,width:P=520,footer:O}=e,b=je(e,["prefixCls","className","rootClassName","open","wrapClassName","centered","getContainer","closeIcon","closable","focusTriggerAfterClose","style","visible","width","footer"]),E=t("modal",r),F=t(),[R,A]=G(E),le=N(m,{[`${E}-centered`]:!!d,[`${E}-wrap-rtl`]:o==="rtl"}),se=O===void 0?s.createElement(J,Object.assign({},e,{onOk:y,onCancel:g})):O,[re,ae]=fe(v,h,$=>Y(E,$),s.createElement(Q,{className:`${E}-close-icon`}),!0);return R(s.createElement(de,null,s.createElement(me,{status:!0,override:!0},s.createElement(ke,Object.assign({width:P},b,{getContainer:x===void 0?l:x,prefixCls:E,rootClassName:N(A,f),wrapClassName:le,footer:se,visible:u??p,mousePosition:(n=b.mousePosition)!==null&&n!==void 0?n:B,onClose:g,closable:re,closeIcon:ae,focusTriggerAfterClose:i,transitionName:M(F,"zoom",e.transitionName),maskTransitionName:M(F,"fade",e.maskTransitionName),className:N(A,c,a==null?void 0:a.className),style:Object.assign(Object.assign({},a==null?void 0:a.style),C)})))))},X=Ne;function q(e){const{icon:n,onCancel:l,onOk:t,close:o,onConfirm:a,isSilent:g,okText:y,okButtonProps:r,cancelText:c,cancelButtonProps:f,confirmPrefixCls:u,rootPrefixCls:m,type:d,okCancel:x,footer:h,locale:v}=e;let i=n;if(!n&&n!==null)switch(d){case"info":i=s.createElement(xe,null);break;case"success":i=s.createElement(ve,null);break;case"error":i=s.createElement(be,null);break;default:i=s.createElement(ge,null)}const C=e.okType||"primary",p=x??d==="confirm",P=e.autoFocusButton===null?!1:e.autoFocusButton||"ok",[O]=_("Modal"),b=v||O,E=p&&s.createElement(z,{isSilent:g,actionFn:l,close:function(){o==null||o.apply(void 0,arguments),a==null||a(!1)},autoFocus:P==="cancel",buttonProps:f,prefixCls:`${m}-btn`},c||(b==null?void 0:b.cancelText));return s.createElement("div",{className:`${u}-body-wrapper`},s.createElement("div",{className:`${u}-body`},i,e.title===void 0?null:s.createElement("span",{className:`${u}-title`},e.title),s.createElement("div",{className:`${u}-content`},e.content)),h===void 0?s.createElement("div",{className:`${u}-btns`},E,s.createElement(z,{isSilent:g,type:C,actionFn:t,close:function(){o==null||o.apply(void 0,arguments),a==null||a(!0)},autoFocus:P==="ok",buttonProps:r,prefixCls:`${m}-btn`},y||(p?b==null?void 0:b.okText:b==null?void 0:b.justOkText))):h)}const $e=e=>{const{close:n,zIndex:l,afterClose:t,visible:o,open:a,keyboard:g,centered:y,getContainer:r,maskStyle:c,direction:f,prefixCls:u,wrapClassName:m,rootPrefixCls:d,iconPrefixCls:x,theme:h,bodyStyle:v,closable:i=!1,closeIcon:C,modalRender:p,focusTriggerAfterClose:P}=e,O=`${u}-confirm`,b=e.width||416,E=e.style||{},F=e.mask===void 0?!0:e.mask,R=e.maskClosable===void 0?!1:e.maskClosable,A=N(O,`${O}-${e.type}`,{[`${O}-rtl`]:f==="rtl"},e.className);return s.createElement(Ce,{prefixCls:d,iconPrefixCls:x,direction:f,theme:h},s.createElement(X,{prefixCls:u,className:A,wrapClassName:N({[`${O}-centered`]:!!e.centered},m),onCancel:()=>n==null?void 0:n({triggerCancel:!0}),open:a,title:"",footer:null,transitionName:M(d,"zoom",e.transitionName),maskTransitionName:M(d,"fade",e.maskTransitionName),mask:F,maskClosable:R,maskStyle:c,style:E,bodyStyle:v,width:b,zIndex:l,afterClose:t,keyboard:g,centered:y,getContainer:r,closable:i,closeIcon:C,modalRender:p,focusTriggerAfterClose:P},s.createElement(q,Object.assign({},e,{confirmPrefixCls:O}))))},K=$e,Ie=[],j=Ie;var Se=globalThis&&globalThis.__rest||function(e,n){var l={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(l[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(l[t[o]]=e[t[o]]);return l};let U="";function Fe(){return U}function S(e){const n=document.createDocumentFragment();let l=Object.assign(Object.assign({},e),{close:g,open:!0}),t;function o(){for(var r=arguments.length,c=new Array(r),f=0;f<r;f++)c[f]=arguments[f];const u=c.some(m=>m&&m.triggerCancel);e.onCancel&&u&&e.onCancel.apply(e,[()=>{}].concat(w(c.slice(1))));for(let m=0;m<j.length;m++)if(j[m]===g){j.splice(m,1);break}ye(n)}function a(r){var{okText:c,cancelText:f,prefixCls:u,getContainer:m}=r,d=Se(r,["okText","cancelText","prefixCls","getContainer"]);clearTimeout(t),t=setTimeout(()=>{const x=W(),{getPrefixCls:h,getIconPrefixCls:v,getTheme:i}=Oe(),C=h(void 0,Fe()),p=u||`${C}-modal`,P=v(),O=i();let b=m;b===!1&&(b=void 0),pe(s.createElement(K,Object.assign({},d,{getContainer:b,prefixCls:p,rootPrefixCls:C,iconPrefixCls:P,okText:c,locale:x,theme:O,cancelText:f||x.cancelText})),n)})}function g(){for(var r=arguments.length,c=new Array(r),f=0;f<r;f++)c[f]=arguments[f];l=Object.assign(Object.assign({},l),{open:!1,afterClose:()=>{typeof e.afterClose=="function"&&e.afterClose(),o.apply(this,c)}}),l.visible&&delete l.visible,a(l)}function y(r){typeof r=="function"?l=r(l):l=Object.assign(Object.assign({},l),r),a(l)}return a(l),j.push(g),{destroy:g,update:y}}function V(e){return Object.assign(Object.assign({},e),{type:"warning"})}function Z(e){return Object.assign(Object.assign({},e),{type:"info"})}function ee(e){return Object.assign(Object.assign({},e),{type:"success"})}function te(e){return Object.assign(Object.assign({},e),{type:"error"})}function ne(e){return Object.assign(Object.assign({},e),{type:"confirm"})}function Ae(e){let{rootPrefixCls:n}=e;U=n}var Me=globalThis&&globalThis.__rest||function(e,n){var l={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(l[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(l[t[o]]=e[t[o]]);return l};const Re=(e,n)=>{var l,{afterClose:t,config:o}=e,a=Me(e,["afterClose","config"]);const[g,y]=s.useState(!0),[r,c]=s.useState(o),{direction:f,getPrefixCls:u}=s.useContext(D),m=u("modal"),d=u(),x=()=>{var C;t(),(C=r.afterClose)===null||C===void 0||C.call(r)},h=function(){y(!1);for(var C=arguments.length,p=new Array(C),P=0;P<C;P++)p[P]=arguments[P];const O=p.some(b=>b&&b.triggerCancel);r.onCancel&&O&&r.onCancel.apply(r,[()=>{}].concat(w(p.slice(1))))};s.useImperativeHandle(n,()=>({destroy:h,update:C=>{c(p=>Object.assign(Object.assign({},p),C))}}));const v=(l=r.okCancel)!==null&&l!==void 0?l:r.type==="confirm",[i]=_("Modal",Pe.Modal);return s.createElement(K,Object.assign({prefixCls:m,rootPrefixCls:d},r,{close:h,open:g,afterClose:x,okText:r.okText||(v?i==null?void 0:i.okText:i==null?void 0:i.justOkText),direction:r.direction||f,cancelText:r.cancelText||(i==null?void 0:i.cancelText)},a))},Be=s.forwardRef(Re);let H=0;const _e=s.memo(s.forwardRef((e,n)=>{const[l,t]=Te();return s.useImperativeHandle(n,()=>({patchElement:t}),[]),s.createElement(s.Fragment,null,l)}));function De(){const e=s.useRef(null),[n,l]=s.useState([]);s.useEffect(()=>{n.length&&(w(n).forEach(g=>{g()}),l([]))},[n]);const t=s.useCallback(a=>function(y){var r;H+=1;const c=s.createRef();let f;const u=new Promise(v=>{f=v});let m=!1,d;const x=s.createElement(Be,{key:`modal-${H}`,config:a(y),ref:c,afterClose:()=>{d==null||d()},isSilent:()=>m,onConfirm:v=>{f(v)}});return d=(r=e.current)===null||r===void 0?void 0:r.patchElement(x),d&&j.push(d),{destroy:()=>{function v(){var i;(i=c.current)===null||i===void 0||i.destroy()}c.current?v():l(i=>[].concat(w(i),[v]))},update:v=>{function i(){var C;(C=c.current)===null||C===void 0||C.update(v)}c.current?i():l(C=>[].concat(w(C),[i]))},then:v=>(m=!0,u.then(v))}},[]);return[s.useMemo(()=>({info:t(Z),success:t(ee),error:t(te),warning:t(V),confirm:t(ne)}),[]),s.createElement(_e,{key:"modal-holder",ref:e})]}var Le=globalThis&&globalThis.__rest||function(e,n){var l={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(l[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(l[t[o]]=e[t[o]]);return l};const ze=e=>{const{prefixCls:n,className:l,closeIcon:t,closable:o,type:a,title:g,children:y}=e,r=Le(e,["prefixCls","className","closeIcon","closable","type","title","children"]),{getPrefixCls:c}=s.useContext(D),f=c(),u=n||c("modal"),[,m]=G(u),d=`${u}-confirm`;let x={};return a?x={closable:o??!1,title:"",footer:"",children:s.createElement(q,Object.assign({},e,{confirmPrefixCls:d,rootPrefixCls:f,content:y}))}:x={closable:o??!0,title:g,footer:e.footer===void 0?s.createElement(J,Object.assign({},e)):e.footer,children:y},s.createElement(Ee,Object.assign({prefixCls:u,className:N(m,`${u}-pure-panel`,a&&d,a&&`${d}-${a}`,l)},r,{closeIcon:Y(u,t),closable:o},x))},He=he(ze);function oe(e){return S(V(e))}const k=X;k.useModal=De;k.info=function(n){return S(Z(n))};k.success=function(n){return S(ee(n))};k.error=function(n){return S(te(n))};k.warning=oe;k.warn=oe;k.confirm=function(n){return S(ne(n))};k.destroyAll=function(){for(;j.length;){const n=j.pop();n&&n()}};k.config=Ae;k._InternalPanelDoNotUseOrYouWillBeFired=He;const Ye=k;export{Ye as M};
