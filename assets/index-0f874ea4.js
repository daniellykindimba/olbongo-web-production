import{r,k as w,R as y,fl as $e,i as Te,av as Y,fm as je,ag as Z,a3 as W,fn as U,fo as we,a as z,h as J,b as j,a6 as Ne,a7 as D,q as Ie,aa as Se,a5 as ke,ab as Fe,Y as L,en as Me,eW as Be,f as Re,ay as Ae,ax as Le,aw as ze,aQ as K,a4 as _e,cF as We,fp as De,cH as He,cI as Ve,aD as qe,aI as Qe}from"./index-3f04361d.js";import{I as Xe}from"./InfoCircleFilled-cf97344e.js";import{A as ee}from"./ActionButton-1fdd8a6f.js";import{D as Ge,P as Ye}from"./DialogWrap-baa689d5.js";import{u as te,p as Ze,a as Ue}from"./index-0a6ac51b.js";function Je(){const[e,n]=r.useState([]),l=r.useCallback(t=>(n(o=>[].concat(w(o),[t])),()=>{n(o=>o.filter(a=>a!==t))}),[]);return[e,l]}const k=y.createContext({}),{Provider:ne}=k,Ke=()=>{const{autoFocusButton:e,cancelButtonProps:n,cancelTextLocale:l,isSilent:t,mergedOkCancel:o,rootPrefixCls:a,close:m,onCancel:u,onConfirm:c}=r.useContext(k);return o?y.createElement(ee,{isSilent:t,actionFn:u,close:function(){m==null||m.apply(void 0,arguments),c==null||c(!1)},autoFocus:e==="cancel",buttonProps:n,prefixCls:`${a}-btn`},l):null},H=Ke,et=()=>{const{autoFocusButton:e,close:n,isSilent:l,okButtonProps:t,rootPrefixCls:o,okTextLocale:a,okType:m,onConfirm:u,onOk:c}=r.useContext(k);return y.createElement(ee,{isSilent:l,type:m||"primary",actionFn:c,close:function(){n==null||n.apply(void 0,arguments),u==null||u(!0)},autoFocus:e==="ok",buttonProps:t,prefixCls:`${o}-btn`},a)},V=et,tt=()=>$e()&&window.document.documentElement;function q(){}const oe=r.createContext({add:q,remove:q});function nt(e){const n=r.useContext(oe),l=r.useRef();return Te(o=>{if(o){const a=e?o.querySelector(e):o;n.add(a),l.current=a}else n.remove(l.current)})}const wt=oe,ot=()=>{const{cancelButtonProps:e,cancelTextLocale:n,onCancel:l}=r.useContext(k);return y.createElement(Y,Object.assign({onClick:l},e),n)},Q=ot,lt=()=>{const{confirmLoading:e,okButtonProps:n,okType:l,okTextLocale:t,onOk:o}=r.useContext(k);return y.createElement(Y,Object.assign({},je(l),{loading:e,onClick:o},n),t)},X=lt;function le(e,n){return y.createElement("span",{className:`${e}-close-x`},n||y.createElement(Z,{className:`${e}-close-icon`}))}const re=e=>{const{okText:n,okType:l="primary",cancelText:t,confirmLoading:o,onOk:a,onCancel:m,okButtonProps:u,cancelButtonProps:c,footer:i}=e,[s]=W("Modal",U()),f=n||(s==null?void 0:s.okText),b=t||(s==null?void 0:s.cancelText),d={confirmLoading:o,okButtonProps:u,cancelButtonProps:c,okTextLocale:f,cancelTextLocale:b,okType:l,onOk:a,onCancel:m},O=y.useMemo(()=>d,w(Object.values(d)));let g;return typeof i=="function"||typeof i>"u"?(g=y.createElement(y.Fragment,null,y.createElement(Q,null),y.createElement(X,null)),typeof i=="function"&&(g=i(g,{OkBtn:X,CancelBtn:Q})),g=y.createElement(ne,{value:O},g)):g=i,y.createElement(we,{disabled:!1},g)};var rt=globalThis&&globalThis.__rest||function(e,n){var l={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(l[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(l[t[o]]=e[t[o]]);return l};let _;const st=e=>{_={x:e.pageX,y:e.pageY},setTimeout(()=>{_=null},100)};tt()&&document.documentElement.addEventListener("click",st,!0);const at=e=>{var n;const{getPopupContainer:l,getPrefixCls:t,direction:o,modal:a}=r.useContext(z),m=S=>{const{onCancel:N}=e;N==null||N(S)},u=S=>{const{onOk:N}=e;N==null||N(S)},{prefixCls:c,className:i,rootClassName:s,open:f,wrapClassName:b,centered:d,getContainer:O,focusTriggerAfterClose:g=!0,style:p,visible:C,width:x=520,footer:P,classNames:v,styles:T}=e,h=rt(e,["prefixCls","className","rootClassName","open","wrapClassName","centered","getContainer","focusTriggerAfterClose","style","visible","width","footer","classNames","styles"]),$=t("modal",c),M=t(),B=J($),[R,A,be]=te($,B),pe=j(b,{[`${$}-centered`]:!!d,[`${$}-wrap-rtl`]:o==="rtl"}),ve=P!==null&&r.createElement(re,Object.assign({},e,{onOk:u,onCancel:m})),[ye,Oe]=Ne(D(e),D(a),{closable:!0,closeIcon:r.createElement(Z,{className:`${$}-close-icon`}),closeIconRender:S=>le($,S)}),Pe=nt(`.${$}-content`),[he,Ee]=Ie("Modal",h.zIndex);return R(r.createElement(Se,null,r.createElement(ke,{status:!0,override:!0},r.createElement(Fe.Provider,{value:Ee},r.createElement(Ge,Object.assign({width:x},h,{zIndex:he,getContainer:O===void 0?l:O,prefixCls:$,rootClassName:j(A,s,be,B),footer:ve,visible:f??C,mousePosition:(n=h.mousePosition)!==null&&n!==void 0?n:_,onClose:m,closable:ye,closeIcon:Oe,focusTriggerAfterClose:g,transitionName:L(M,"zoom",e.transitionName),maskTransitionName:L(M,"fade",e.maskTransitionName),className:j(A,i,a==null?void 0:a.className),style:Object.assign(Object.assign({},a==null?void 0:a.style),p),classNames:Object.assign(Object.assign(Object.assign({},a==null?void 0:a.classNames),v),{wrapper:j(pe,v==null?void 0:v.wrapper)}),styles:Object.assign(Object.assign({},a==null?void 0:a.styles),T),panelRef:Pe}))))))},se=at,ct=e=>{const{componentCls:n,titleFontSize:l,titleLineHeight:t,modalConfirmIconSize:o,fontSize:a,lineHeight:m,modalTitleHeight:u,fontHeight:c,confirmBodyPadding:i}=e,s=`${n}-confirm`;return{[s]:{"&-rtl":{direction:"rtl"},[`${e.antCls}-modal-header`]:{display:"none"},[`${s}-body-wrapper`]:Object.assign({},Be()),[`&${n} ${n}-body`]:{padding:i},[`${s}-body`]:{display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${e.iconCls}`]:{flex:"none",fontSize:o,marginInlineEnd:e.confirmIconMarginInlineEnd,marginTop:e.calc(e.calc(c).sub(o).equal()).div(2).equal()},[`&-has-title > ${e.iconCls}`]:{marginTop:e.calc(e.calc(u).sub(o).equal()).div(2).equal()}},[`${s}-paragraph`]:{display:"flex",flexDirection:"column",flex:"auto",rowGap:e.marginXS},[`${e.iconCls} + ${s}-paragraph`]:{maxWidth:`calc(100% - ${Re(e.calc(e.modalConfirmIconSize).add(e.marginSM).equal())})`},[`${s}-title`]:{color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:l,lineHeight:t},[`${s}-content`]:{color:e.colorText,fontSize:a,lineHeight:m},[`${s}-btns`]:{textAlign:"end",marginTop:e.confirmBtnsMarginTop,[`${e.antCls}-btn + ${e.antCls}-btn`]:{marginBottom:0,marginInlineStart:e.marginXS}}},[`${s}-error ${s}-body > ${e.iconCls}`]:{color:e.colorError},[`${s}-warning ${s}-body > ${e.iconCls},
        ${s}-confirm ${s}-body > ${e.iconCls}`]:{color:e.colorWarning},[`${s}-info ${s}-body > ${e.iconCls}`]:{color:e.colorInfo},[`${s}-success ${s}-body > ${e.iconCls}`]:{color:e.colorSuccess}}},it=Me(["Modal","confirm"],e=>{const n=Ue(e);return[ct(n)]},Ze,{order:-1e3});var ut=globalThis&&globalThis.__rest||function(e,n){var l={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(l[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(l[t[o]]=e[t[o]]);return l};function ae(e){const{prefixCls:n,icon:l,okText:t,cancelText:o,confirmPrefixCls:a,type:m,okCancel:u,footer:c,locale:i}=e,s=ut(e,["prefixCls","icon","okText","cancelText","confirmPrefixCls","type","okCancel","footer","locale"]);let f=l;if(!l&&l!==null)switch(m){case"info":f=r.createElement(Xe,null);break;case"success":f=r.createElement(ze,null);break;case"error":f=r.createElement(Le,null);break;default:f=r.createElement(Ae,null)}const b=u??m==="confirm",d=e.autoFocusButton===null?!1:e.autoFocusButton||"ok",[O]=W("Modal"),g=i||O,p=t||(b?g==null?void 0:g.okText:g==null?void 0:g.justOkText),C=o||(g==null?void 0:g.cancelText),x=Object.assign({autoFocusButton:d,cancelTextLocale:C,okTextLocale:p,mergedOkCancel:b},s),P=r.useMemo(()=>x,w(Object.values(x))),v=r.createElement(r.Fragment,null,r.createElement(H,null),r.createElement(V,null)),T=e.title!==void 0&&e.title!==null,h=`${a}-body`;return r.createElement("div",{className:`${a}-body-wrapper`},r.createElement("div",{className:j(h,{[`${h}-has-title`]:T})},f,r.createElement("div",{className:`${a}-paragraph`},T&&r.createElement("span",{className:`${a}-title`},e.title),r.createElement("div",{className:`${a}-content`},e.content))),c===void 0||typeof c=="function"?r.createElement(ne,{value:P},r.createElement("div",{className:`${a}-btns`},typeof c=="function"?c(v,{OkBtn:V,CancelBtn:H}):v)):c,r.createElement(it,{prefixCls:n}))}const ft=e=>{const{close:n,zIndex:l,afterClose:t,open:o,keyboard:a,centered:m,getContainer:u,maskStyle:c,direction:i,prefixCls:s,wrapClassName:f,rootPrefixCls:b,bodyStyle:d,closable:O=!1,closeIcon:g,modalRender:p,focusTriggerAfterClose:C,onConfirm:x,styles:P}=e,v=`${s}-confirm`,T=e.width||416,h=e.style||{},$=e.mask===void 0?!0:e.mask,M=e.maskClosable===void 0?!1:e.maskClosable,B=j(v,`${v}-${e.type}`,{[`${v}-rtl`]:i==="rtl"},e.className),[,R]=_e(),A=r.useMemo(()=>l!==void 0?l:R.zIndexPopupBase+We,[l,R]);return r.createElement(se,{prefixCls:s,className:B,wrapClassName:j({[`${v}-centered`]:!!e.centered},f),onCancel:()=>{n==null||n({triggerCancel:!0}),x==null||x(!1)},open:o,title:"",footer:null,transitionName:L(b||"","zoom",e.transitionName),maskTransitionName:L(b||"","fade",e.maskTransitionName),mask:$,maskClosable:M,style:h,styles:Object.assign({body:d,mask:c},P),width:T,zIndex:A,afterClose:t,keyboard:a,centered:m,getContainer:u,closable:O,closeIcon:g,modalRender:p,focusTriggerAfterClose:C},r.createElement(ae,Object.assign({},e,{confirmPrefixCls:v})))},ce=e=>{const{rootPrefixCls:n,iconPrefixCls:l,direction:t,theme:o}=e;return r.createElement(K,{prefixCls:n,iconPrefixCls:l,direction:t,theme:o},r.createElement(ft,Object.assign({},e)))},dt=[],I=dt;let ie="";function ue(){return ie}const mt=e=>{var n,l;const{prefixCls:t,getContainer:o,direction:a}=e,m=U(),u=r.useContext(z),c=ue()||u.getPrefixCls(),i=t||`${c}-modal`;let s=o;return s===!1&&(s=void 0),y.createElement(ce,Object.assign({},e,{rootPrefixCls:c,prefixCls:i,iconPrefixCls:u.iconPrefixCls,theme:u.theme,direction:a??u.direction,locale:(l=(n=u.locale)===null||n===void 0?void 0:n.Modal)!==null&&l!==void 0?l:m,getContainer:s}))};function F(e){const n=Ve(),l=document.createDocumentFragment();let t=Object.assign(Object.assign({},e),{close:u,open:!0}),o;function a(){for(var i=arguments.length,s=new Array(i),f=0;f<i;f++)s[f]=arguments[f];const b=s.some(d=>d&&d.triggerCancel);e.onCancel&&b&&e.onCancel.apply(e,[()=>{}].concat(w(s.slice(1))));for(let d=0;d<I.length;d++)if(I[d]===u){I.splice(d,1);break}De(l)}function m(i){clearTimeout(o),o=setTimeout(()=>{const s=n.getPrefixCls(void 0,ue()),f=n.getIconPrefixCls(),b=n.getTheme(),d=y.createElement(mt,Object.assign({},i));He(y.createElement(K,{prefixCls:s,iconPrefixCls:f,theme:b},n.holderRender?n.holderRender(d):d),l)})}function u(){for(var i=arguments.length,s=new Array(i),f=0;f<i;f++)s[f]=arguments[f];t=Object.assign(Object.assign({},t),{open:!1,afterClose:()=>{typeof e.afterClose=="function"&&e.afterClose(),a.apply(this,s)}}),t.visible&&delete t.visible,m(t)}function c(i){typeof i=="function"?t=i(t):t=Object.assign(Object.assign({},t),i),m(t)}return m(t),I.push(u),{destroy:u,update:c}}function fe(e){return Object.assign(Object.assign({},e),{type:"warning"})}function de(e){return Object.assign(Object.assign({},e),{type:"info"})}function me(e){return Object.assign(Object.assign({},e),{type:"success"})}function Ce(e){return Object.assign(Object.assign({},e),{type:"error"})}function ge(e){return Object.assign(Object.assign({},e),{type:"confirm"})}function Ct(e){let{rootPrefixCls:n}=e;ie=n}var gt=globalThis&&globalThis.__rest||function(e,n){var l={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(l[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(l[t[o]]=e[t[o]]);return l};const xt=(e,n)=>{var l,{afterClose:t,config:o}=e,a=gt(e,["afterClose","config"]);const[m,u]=r.useState(!0),[c,i]=r.useState(o),{direction:s,getPrefixCls:f}=r.useContext(z),b=f("modal"),d=f(),O=()=>{var x;t(),(x=c.afterClose)===null||x===void 0||x.call(c)},g=function(){u(!1);for(var x=arguments.length,P=new Array(x),v=0;v<x;v++)P[v]=arguments[v];const T=P.some(h=>h&&h.triggerCancel);c.onCancel&&T&&c.onCancel.apply(c,[()=>{}].concat(w(P.slice(1))))};r.useImperativeHandle(n,()=>({destroy:g,update:x=>{i(P=>Object.assign(Object.assign({},P),x))}}));const p=(l=c.okCancel)!==null&&l!==void 0?l:c.type==="confirm",[C]=W("Modal",qe.Modal);return r.createElement(ce,Object.assign({prefixCls:b,rootPrefixCls:d},c,{close:g,open:m,afterClose:O,okText:c.okText||(p?C==null?void 0:C.okText:C==null?void 0:C.justOkText),direction:c.direction||s,cancelText:c.cancelText||(C==null?void 0:C.cancelText)},a))},bt=r.forwardRef(xt);let G=0;const pt=r.memo(r.forwardRef((e,n)=>{const[l,t]=Je();return r.useImperativeHandle(n,()=>({patchElement:t}),[]),r.createElement(r.Fragment,null,l)}));function vt(){const e=r.useRef(null),[n,l]=r.useState([]);r.useEffect(()=>{n.length&&(w(n).forEach(m=>{m()}),l([]))},[n]);const t=r.useCallback(a=>function(u){var c;G+=1;const i=r.createRef();let s;const f=new Promise(p=>{s=p});let b=!1,d;const O=r.createElement(bt,{key:`modal-${G}`,config:a(u),ref:i,afterClose:()=>{d==null||d()},isSilent:()=>b,onConfirm:p=>{s(p)}});return d=(c=e.current)===null||c===void 0?void 0:c.patchElement(O),d&&I.push(d),{destroy:()=>{function p(){var C;(C=i.current)===null||C===void 0||C.destroy()}i.current?p():l(C=>[].concat(w(C),[p]))},update:p=>{function C(){var x;(x=i.current)===null||x===void 0||x.update(p)}i.current?C():l(x=>[].concat(w(x),[C]))},then:p=>(b=!0,f.then(p))}},[]);return[r.useMemo(()=>({info:t(de),success:t(me),error:t(Ce),warning:t(fe),confirm:t(ge)}),[]),r.createElement(pt,{key:"modal-holder",ref:e})]}var yt=globalThis&&globalThis.__rest||function(e,n){var l={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(l[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(l[t[o]]=e[t[o]]);return l};const Ot=e=>{const{prefixCls:n,className:l,closeIcon:t,closable:o,type:a,title:m,children:u,footer:c}=e,i=yt(e,["prefixCls","className","closeIcon","closable","type","title","children","footer"]),{getPrefixCls:s}=r.useContext(z),f=s(),b=n||s("modal"),d=J(f),[O,g,p]=te(b,d),C=`${b}-confirm`;let x={};return a?x={closable:o??!1,title:"",footer:"",children:r.createElement(ae,Object.assign({},e,{prefixCls:b,confirmPrefixCls:C,rootPrefixCls:f,content:u}))}:x={closable:o??!0,title:m,footer:c!==null&&r.createElement(re,Object.assign({},e)),children:u},O(r.createElement(Ye,Object.assign({prefixCls:b,className:j(g,`${b}-pure-panel`,a&&C,a&&`${C}-${a}`,l,p,d)},i,{closeIcon:le(b,t),closable:o},x)))},Pt=Qe(Ot);function xe(e){return F(fe(e))}const E=se;E.useModal=vt;E.info=function(n){return F(de(n))};E.success=function(n){return F(me(n))};E.error=function(n){return F(Ce(n))};E.warning=xe;E.warn=xe;E.confirm=function(n){return F(ge(n))};E.destroyAll=function(){for(;I.length;){const n=I.pop();n&&n()}};E.config=Ct;E._InternalPanelDoNotUseOrYouWillBeFired=Pt;const Nt=E;export{Nt as M,wt as W,nt as a,vt as u};
