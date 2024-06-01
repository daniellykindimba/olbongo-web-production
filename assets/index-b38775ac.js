import{ac as I,d as X,f as j,a9 as K,e as Q,cF as Y,m as J,eo as Z,r as u,a as _,h as B,b as x,ag as tt,aw as et,ax as nt,ay as ot,R as d,a4 as it,cG as at,cH as ct,aQ as rt,cI as st}from"./index-38408b6c.js";import{A as lt}from"./context-e01cfdfe.js";import{I as dt}from"./InfoCircleFilled-9c58d6f8.js";import{N as ft,u as pt,a as ut}from"./useNotification-91acc5cc.js";const mt=t=>{const{componentCls:e,notificationMarginEdge:o,animationMaxHeight:n}=t,i=`${e}-notice`,a=new I("antNotificationFadeIn",{"0%":{transform:"translate3d(100%, 0, 0)",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",opacity:1}}),l=new I("antNotificationTopFadeIn",{"0%":{top:-n,opacity:0},"100%":{top:0,opacity:1}}),c=new I("antNotificationBottomFadeIn",{"0%":{bottom:t.calc(n).mul(-1).equal(),opacity:0},"100%":{bottom:0,opacity:1}}),r=new I("antNotificationLeftFadeIn",{"0%":{transform:"translate3d(-100%, 0, 0)",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",opacity:1}});return{[e]:{[`&${e}-top, &${e}-bottom`]:{marginInline:0,[i]:{marginInline:"auto auto"}},[`&${e}-top`]:{[`${e}-fade-enter${e}-fade-enter-active, ${e}-fade-appear${e}-fade-appear-active`]:{animationName:l}},[`&${e}-bottom`]:{[`${e}-fade-enter${e}-fade-enter-active, ${e}-fade-appear${e}-fade-appear-active`]:{animationName:c}},[`&${e}-topRight, &${e}-bottomRight`]:{[`${e}-fade-enter${e}-fade-enter-active, ${e}-fade-appear${e}-fade-appear-active`]:{animationName:a}},[`&${e}-topLeft, &${e}-bottomLeft`]:{marginRight:{value:0,_skip_check_:!0},marginLeft:{value:o,_skip_check_:!0},[i]:{marginInlineEnd:"auto",marginInlineStart:0},[`${e}-fade-enter${e}-fade-enter-active, ${e}-fade-appear${e}-fade-appear-active`]:{animationName:r}}}}},gt=mt,bt=["top","topLeft","topRight","bottom","bottomLeft","bottomRight"],ht={topLeft:"left",topRight:"right",bottomLeft:"left",bottomRight:"right",top:"left",bottom:"left"},yt=(t,e)=>{const{componentCls:o}=t;return{[`${o}-${e}`]:{[`&${o}-stack > ${o}-notice-wrapper`]:{[e.startsWith("top")?"top":"bottom"]:0,[ht[e]]:{value:0,_skip_check_:!0}}}}},$t=t=>{const e={};for(let o=1;o<t.notificationStackLayer;o++)e[`&:nth-last-child(${o+1})`]={overflow:"hidden",[`& > ${t.componentCls}-notice`]:{opacity:0,transition:`opacity ${t.motionDurationMid}`}};return Object.assign({[`&:not(:nth-last-child(-n+${t.notificationStackLayer}))`]:{opacity:0,overflow:"hidden",color:"transparent",pointerEvents:"none"}},e)},Ct=t=>{const e={};for(let o=1;o<t.notificationStackLayer;o++)e[`&:nth-last-child(${o+1})`]={background:t.colorBgBlur,backdropFilter:"blur(10px)","-webkit-backdrop-filter":"blur(10px)"};return Object.assign({},e)},vt=t=>{const{componentCls:e}=t;return Object.assign({[`${e}-stack`]:{[`& > ${e}-notice-wrapper`]:Object.assign({transition:`all ${t.motionDurationSlow}, backdrop-filter 0s`,position:"absolute"},$t(t))},[`${e}-stack:not(${e}-stack-expanded)`]:{[`& > ${e}-notice-wrapper`]:Object.assign({},Ct(t))},[`${e}-stack${e}-stack-expanded`]:{[`& > ${e}-notice-wrapper`]:{"&:not(:nth-last-child(-n + 1))":{opacity:1,overflow:"unset",color:"inherit",pointerEvents:"auto",[`& > ${t.componentCls}-notice`]:{opacity:1}},"&:after":{content:'""',position:"absolute",height:t.margin,width:"100%",insetInline:0,bottom:t.calc(t.margin).mul(-1).equal(),background:"transparent",pointerEvents:"auto"}}}},bt.map(o=>yt(t,o)).reduce((o,n)=>Object.assign(Object.assign({},o),n),{}))},St=vt,z=t=>{const{iconCls:e,componentCls:o,boxShadow:n,fontSizeLG:i,notificationMarginBottom:a,borderRadiusLG:l,colorSuccess:c,colorInfo:r,colorWarning:s,colorError:g,colorTextHeading:p,notificationBg:h,notificationPadding:b,notificationMarginEdge:v,fontSize:$,lineHeight:m,width:S,notificationIconSize:C,colorText:O}=t,f=`${o}-notice`;return{position:"relative",marginBottom:a,marginInlineStart:"auto",background:h,borderRadius:l,boxShadow:n,[f]:{padding:b,width:S,maxWidth:`calc(100vw - ${j(t.calc(v).mul(2).equal())})`,overflow:"hidden",lineHeight:m,wordWrap:"break-word"},[`${f}-message`]:{marginBottom:t.marginXS,color:p,fontSize:i,lineHeight:t.lineHeightLG},[`${f}-description`]:{fontSize:$,color:O},[`${f}-closable ${f}-message`]:{paddingInlineEnd:t.paddingLG},[`${f}-with-icon ${f}-message`]:{marginBottom:t.marginXS,marginInlineStart:t.calc(t.marginSM).add(C).equal(),fontSize:i},[`${f}-with-icon ${f}-description`]:{marginInlineStart:t.calc(t.marginSM).add(C).equal(),fontSize:$},[`${f}-icon`]:{position:"absolute",fontSize:C,lineHeight:1,[`&-success${e}`]:{color:c},[`&-info${e}`]:{color:r},[`&-warning${e}`]:{color:s},[`&-error${e}`]:{color:g}},[`${f}-close`]:Object.assign({position:"absolute",top:t.notificationPaddingVertical,insetInlineEnd:t.notificationPaddingHorizontal,color:t.colorIcon,outline:"none",width:t.notificationCloseButtonSize,height:t.notificationCloseButtonSize,borderRadius:t.borderRadiusSM,transition:`background-color ${t.motionDurationMid}, color ${t.motionDurationMid}`,display:"flex",alignItems:"center",justifyContent:"center","&:hover":{color:t.colorIconHover,backgroundColor:t.colorBgTextHover},"&:active":{backgroundColor:t.colorBgTextActive}},K(t)),[`${f}-btn`]:{float:"right",marginTop:t.marginSM}}},xt=t=>{const{componentCls:e,notificationMarginBottom:o,notificationMarginEdge:n,motionDurationMid:i,motionEaseInOut:a}=t,l=`${e}-notice`,c=new I("antNotificationFadeOut",{"0%":{maxHeight:t.animationMaxHeight,marginBottom:o},"100%":{maxHeight:0,marginBottom:0,paddingTop:0,paddingBottom:0,opacity:0}});return[{[e]:Object.assign(Object.assign({},Q(t)),{position:"fixed",zIndex:t.zIndexPopup,marginRight:{value:n,_skip_check_:!0},[`${e}-hook-holder`]:{position:"relative"},[`${e}-fade-appear-prepare`]:{opacity:"0 !important"},[`${e}-fade-enter, ${e}-fade-appear`]:{animationDuration:t.motionDurationMid,animationTimingFunction:a,animationFillMode:"both",opacity:0,animationPlayState:"paused"},[`${e}-fade-leave`]:{animationTimingFunction:a,animationFillMode:"both",animationDuration:i,animationPlayState:"paused"},[`${e}-fade-enter${e}-fade-enter-active, ${e}-fade-appear${e}-fade-appear-active`]:{animationPlayState:"running"},[`${e}-fade-leave${e}-fade-leave-active`]:{animationName:c,animationPlayState:"running"},"&-rtl":{direction:"rtl",[`${l}-btn`]:{float:"left"}}})},{[e]:{[`${l}-wrapper`]:Object.assign({},z(t))}}]},G=t=>({zIndexPopup:t.zIndexPopupBase+Y+50,width:384}),D=t=>{const e=t.paddingMD,o=t.paddingLG;return J(t,{notificationBg:t.colorBgElevated,notificationPaddingVertical:e,notificationPaddingHorizontal:o,notificationIconSize:t.calc(t.fontSizeLG).mul(t.lineHeightLG).equal(),notificationCloseButtonSize:t.calc(t.controlHeightLG).mul(.55).equal(),notificationMarginBottom:t.margin,notificationPadding:`${j(t.paddingMD)} ${j(t.paddingContentHorizontalLG)}`,notificationMarginEdge:t.marginLG,animationMaxHeight:150,notificationStackLayer:3})},A=X("Notification",t=>{const e=D(t);return[xt(e),gt(e),St(e)]},G),Ot=Z(["Notification","PurePanel"],t=>{const e=`${t.componentCls}-notice`,o=D(t);return{[`${e}-pure-panel`]:Object.assign(Object.assign({},z(o)),{width:o.width,maxWidth:`calc(100vw - ${j(t.calc(o.notificationMarginEdge).mul(2).equal())})`,margin:0})}},G);var Nt=globalThis&&globalThis.__rest||function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(o[n[i]]=t[n[i]]);return o};function F(t,e){return e===null||e===!1?null:e||u.createElement(tt,{className:`${t}-close-icon`})}const It={success:et,info:dt,error:nt,warning:ot},W=t=>{const{prefixCls:e,icon:o,type:n,message:i,description:a,btn:l,role:c="alert"}=t;let r=null;return o?r=u.createElement("span",{className:`${e}-icon`},o):n&&(r=u.createElement(It[n]||null,{className:x(`${e}-icon`,`${e}-icon-${n}`)})),u.createElement("div",{className:x({[`${e}-with-icon`]:r}),role:c},r,u.createElement("div",{className:`${e}-message`},i),u.createElement("div",{className:`${e}-description`},a),l&&u.createElement("div",{className:`${e}-btn`},l))},Pt=t=>{const{prefixCls:e,className:o,icon:n,type:i,message:a,description:l,btn:c,closable:r=!0,closeIcon:s,className:g}=t,p=Nt(t,["prefixCls","className","icon","type","message","description","btn","closable","closeIcon","className"]),{getPrefixCls:h}=u.useContext(_),b=e||h("notification"),v=`${b}-notice`,$=B(b),[m,S,C]=A(b,$);return m(u.createElement("div",{className:x(`${v}-pure-panel`,S,o,C,$)},u.createElement(Ot,{prefixCls:b}),u.createElement(ft,Object.assign({},p,{prefixCls:b,eventKey:"pure",duration:null,closable:r,className:x({notificationClassName:g}),closeIcon:F(b,s),content:u.createElement(W,{prefixCls:v,icon:n,type:i,message:a,description:l,btn:c})}))))},wt=Pt;function Et(t,e,o){let n;switch(t){case"top":n={left:"50%",transform:"translateX(-50%)",right:"auto",top:e,bottom:"auto"};break;case"topLeft":n={left:0,top:e,bottom:"auto"};break;case"topRight":n={right:0,top:e,bottom:"auto"};break;case"bottom":n={left:"50%",transform:"translateX(-50%)",right:"auto",top:"auto",bottom:o};break;case"bottomLeft":n={left:0,top:"auto",bottom:o};break;default:n={right:0,top:"auto",bottom:o};break}return n}function jt(t){return{motionName:`${t}-fade`}}var Mt=globalThis&&globalThis.__rest||function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(o[n[i]]=t[n[i]]);return o};const R=24,_t=4.5,Ft="topRight",Tt=t=>{let{children:e,prefixCls:o}=t;const n=B(o),[i,a,l]=A(o,n);return i(d.createElement(ut,{classNames:{list:x(a,l,n)}},e))},Lt=(t,e)=>{let{prefixCls:o,key:n}=e;return d.createElement(Tt,{prefixCls:o,key:n},t)},Rt=d.forwardRef((t,e)=>{const{top:o,bottom:n,prefixCls:i,getContainer:a,maxCount:l,rtl:c,onAllRemoved:r,stack:s,duration:g}=t,{getPrefixCls:p,getPopupContainer:h,notification:b,direction:v}=u.useContext(_),[,$]=it(),m=i||p("notification"),S=N=>Et(N,o??R,n??R),C=()=>x({[`${m}-rtl`]:c??v==="rtl"}),O=()=>jt(m),[f,w]=pt({prefixCls:m,style:S,className:C,motion:O,closable:!0,closeIcon:F(m),duration:g??_t,getContainer:()=>(a==null?void 0:a())||(h==null?void 0:h())||document.body,maxCount:l,onAllRemoved:r,renderNotifications:Lt,stack:s===!1?!1:{threshold:typeof s=="object"?s==null?void 0:s.threshold:void 0,offset:8,gap:$.margin}});return d.useImperativeHandle(e,()=>Object.assign(Object.assign({},f),{prefixCls:m,notification:b})),w});function q(t){const e=d.useRef(null);return at(),[d.useMemo(()=>{const n=c=>{var r;if(!e.current)return;const{open:s,prefixCls:g,notification:p}=e.current,h=`${g}-notice`,{message:b,description:v,icon:$,type:m,btn:S,className:C,style:O,role:f="alert",closeIcon:w,closable:N}=c,U=Mt(c,["message","description","icon","type","btn","className","style","role","closeIcon","closable"]),L=F(h,typeof w<"u"?w:p==null?void 0:p.closeIcon);return s(Object.assign(Object.assign({placement:(r=t==null?void 0:t.placement)!==null&&r!==void 0?r:Ft},U),{content:d.createElement(W,{prefixCls:h,icon:$,type:m,message:b,description:v,btn:S,role:f}),className:x(m&&`${h}-${m}`,C,p==null?void 0:p.className),style:Object.assign(Object.assign({},p==null?void 0:p.style),O),closeIcon:L,closable:N??!!L}))},a={open:n,destroy:c=>{var r,s;c!==void 0?(r=e.current)===null||r===void 0||r.close(c):(s=e.current)===null||s===void 0||s.destroy()}};return["success","info","warning","error"].forEach(c=>{a[c]=r=>n(Object.assign(Object.assign({},r),{type:c}))}),a},[]),d.createElement(Rt,Object.assign({key:"notification-holder"},t,{ref:e}))]}function Ht(t){return q(t)}let y=null,E=t=>t(),M=[],P={};function H(){const{getContainer:t,rtl:e,maxCount:o,top:n,bottom:i}=P,a=(t==null?void 0:t())||document.body;return{getContainer:()=>a,rtl:e,maxCount:o,top:n,bottom:i}}const Bt=d.forwardRef((t,e)=>{const{notificationConfig:o,sync:n}=t,{getPrefixCls:i}=u.useContext(_),a=P.prefixCls||i("notification"),l=u.useContext(lt),[c,r]=q(Object.assign(Object.assign(Object.assign({},o),{prefixCls:a}),l.notification));return d.useEffect(n,[]),d.useImperativeHandle(e,()=>{const s=Object.assign({},c);return Object.keys(s).forEach(g=>{s[g]=function(){return n(),c[g].apply(c,arguments)}}),{instance:s,sync:n}}),r}),zt=d.forwardRef((t,e)=>{const[o,n]=d.useState(H),i=()=>{n(H)};d.useEffect(i,[]);const a=st(),l=a.getRootPrefixCls(),c=a.getIconPrefixCls(),r=a.getTheme(),s=d.createElement(Bt,{ref:e,sync:i,notificationConfig:o});return d.createElement(rt,{prefixCls:l,iconPrefixCls:c,theme:r},a.holderRender?a.holderRender(s):s)});function T(){if(!y){const t=document.createDocumentFragment(),e={fragment:t};y=e,E(()=>{ct(d.createElement(zt,{ref:o=>{const{instance:n,sync:i}=o||{};Promise.resolve().then(()=>{!e.instance&&n&&(e.instance=n,e.sync=i,T())})}}),t)});return}y.instance&&(M.forEach(t=>{switch(t.type){case"open":{E(()=>{y.instance.open(Object.assign(Object.assign({},P),t.config))});break}case"destroy":E(()=>{y==null||y.instance.destroy(t.key)});break}}),M=[])}function Gt(t){P=Object.assign(Object.assign({},P),t),E(()=>{var e;(e=y==null?void 0:y.sync)===null||e===void 0||e.call(y)})}function V(t){M.push({type:"open",config:t}),T()}const Dt=t=>{M.push({type:"destroy",key:t}),T()},At=["success","info","warning","error"],Wt={open:V,destroy:Dt,config:Gt,useNotification:Ht,_InternalPanelDoNotUseOrYouWillBeFired:wt},k=Wt;At.forEach(t=>{k[t]=e=>V(Object.assign(Object.assign({},e),{type:t}))});const Xt=k;export{Xt as n,Ht as u};
