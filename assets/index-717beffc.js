import{r,bq as Be,br as Fe,bo as xe,bs as Qe,bt as et,h as P,bu as ze,be as J,bv as ke,bw as Ne,bn as Le,aR as Ve,bx as Re,by as tt,bz as ot,aM as e,bA as X,bB as Ee,bC as y,bD as we,bE as st,bF as D,bG as W,bH as nt,bI as L,aC as Z,M as rt,ae as E,bJ as O,bK as f,bL as ve,ay as at,ac as ee,aH as V,bM as Ue,aG as it,$ as U,bN as lt,bO as ct,bP as dt,bQ as ut,bR as pt,bS as gt,bT as Q,bU as ht,bV as ft,bW as mt,bX as xt,bY as vt,aD as $,bZ as bt,b_ as jt,b$ as yt,aA as _e,Z as Ct,c0 as Pt,c1 as he,c2 as Ot,c3 as Mt,c4 as T,c5 as St,c6 as It,c7 as A,c8 as Te,c9 as $t,ca as zt}from"./index-2a194481.js";import{C as kt}from"./change_password_form-1809e0f5.js";import{D as z}from"./index-a8cc210f.js";import{T as fe}from"./index-6c5aad82.js";import{A as Nt}from"./index-8d1996cc.js";import{C as Rt,T as De}from"./index-98a9641c.js";import{A as k}from"./index-582573e6.js";import{G as be}from"./index-b2796850.js";import{D as We}from"./index-8f3b3cd1.js";import{L as ue}from"./index-f16127c3.js";import{S as wt}from"./school_switcher_component-fb323688.js";import{U as me}from"./index-5a405bdc.js";import{u as _t}from"./olbongo_store-910624cc.js";import"./index-e8792b52.js";import"./transButton-a5c838d6.js";import"./InfoCircleFilled-f367ccf6.js";import"./Skeleton-49b5872f.js";import"./index-df246fd6.js";import"./index-a9bb9b36.js";import"./ActionButton-d68b8b67.js";import"./Upload-56cbf851.js";import"./fade-3c234f74.js";const Tt=t=>{const o=r.useRef({});return r.useEffect(()=>{o.current=t}),o.current},qe=Tt;function At(t){const{badgeContent:o,invisible:s=!1,max:i=99,showZero:l=!1}=t,d=qe({badgeContent:o,max:i});let c=s;s===!1&&o===0&&!l&&(c=!0);const{badgeContent:n,max:a=i}=c?d:t,u=n&&Number(n)>a?`${a}+`:n;return{badgeContent:n,invisible:c,max:a,displayValue:u}}function Bt(t){return Fe("MuiMenuItem",t)}const Ft=Be("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),B=Ft,Lt=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],Vt=(t,o)=>{const{ownerState:s}=t;return[o.root,s.dense&&o.dense,s.divider&&o.divider,!s.disableGutters&&o.gutters]},Et=t=>{const{disabled:o,dense:s,divider:i,disableGutters:l,selected:d,classes:c}=t,a=Ee({root:["root",s&&"dense",o&&"disabled",!l&&"gutters",i&&"divider",d&&"selected"]},Bt,c);return P({},c,a)},Ut=xe(Qe,{shouldForwardProp:t=>et(t)||t==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:Vt})(({theme:t,ownerState:o})=>P({},t.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!o.disableGutters&&{paddingLeft:16,paddingRight:16},o.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${B.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:J(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${B.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:J(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${B.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:J(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:J(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${B.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${B.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},[`& + .${ke.root}`]:{marginTop:t.spacing(1),marginBottom:t.spacing(1)},[`& + .${ke.inset}`]:{marginLeft:52},[`& .${Ne.root}`]:{marginTop:0,marginBottom:0},[`& .${Ne.inset}`]:{paddingLeft:36},[`& .${ze.root}`]:{minWidth:36}},!o.dense&&{[t.breakpoints.up("sm")]:{minHeight:"auto"}},o.dense&&P({minHeight:32,paddingTop:4,paddingBottom:4},t.typography.body2,{[`& .${ze.root} svg`]:{fontSize:"1.25rem"}}))),Dt=r.forwardRef(function(o,s){const i=Le({props:o,name:"MuiMenuItem"}),{autoFocus:l=!1,component:d="li",dense:c=!1,divider:n=!1,disableGutters:a=!1,focusVisibleClassName:u,role:p="menuitem",tabIndex:g,className:h}=i,m=Ve(i,Lt),v=r.useContext(Re),C=r.useMemo(()=>({dense:c||v.dense||!1,disableGutters:a}),[v.dense,c,a]),j=r.useRef(null);tt(()=>{l&&j.current&&j.current.focus()},[l]);const M=P({},i,{dense:C.dense,divider:n,disableGutters:a}),b=Et(i),w=ot(j,s);let S;return i.disabled||(S=g!==void 0?g:-1),e.jsx(Re.Provider,{value:C,children:e.jsx(Ut,P({ref:w,role:p,tabIndex:S,component:d,focusVisibleClassName:X(b.focusVisible,u),className:X(b.root,h)},m,{ownerState:M,classes:b}))})}),F=Dt;function Wt(t){return Fe("MuiBadge",t)}const qt=Be("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]),I=qt,Ht=["anchorOrigin","className","classes","component","components","componentsProps","children","overlap","color","invisible","max","badgeContent","slots","slotProps","showZero","variant"],pe=10,ge=4,Gt=t=>{const{color:o,anchorOrigin:s,invisible:i,overlap:l,variant:d,classes:c={}}=t,n={root:["root"],badge:["badge",d,i&&"invisible",`anchorOrigin${y(s.vertical)}${y(s.horizontal)}`,`anchorOrigin${y(s.vertical)}${y(s.horizontal)}${y(l)}`,`overlap${y(l)}`,o!=="default"&&`color${y(o)}`]};return Ee(n,Wt,c)},Kt=xe("span",{name:"MuiBadge",slot:"Root",overridesResolver:(t,o)=>o.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),Jt=xe("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(t,o)=>{const{ownerState:s}=t;return[o.badge,o[s.variant],o[`anchorOrigin${y(s.anchorOrigin.vertical)}${y(s.anchorOrigin.horizontal)}${y(s.overlap)}`],s.color!=="default"&&o[`color${y(s.color)}`],s.invisible&&o.invisible]}})(({theme:t,ownerState:o})=>P({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:t.typography.fontFamily,fontWeight:t.typography.fontWeightMedium,fontSize:t.typography.pxToRem(12),minWidth:pe*2,lineHeight:1,padding:"0 6px",height:pe*2,borderRadius:pe,zIndex:1,transition:t.transitions.create("transform",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.enteringScreen})},o.color!=="default"&&{backgroundColor:(t.vars||t).palette[o.color].main,color:(t.vars||t).palette[o.color].contrastText},o.variant==="dot"&&{borderRadius:ge,height:ge*2,minWidth:ge*2,padding:0},o.anchorOrigin.vertical==="top"&&o.anchorOrigin.horizontal==="right"&&o.overlap==="rectangular"&&{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${I.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},o.anchorOrigin.vertical==="bottom"&&o.anchorOrigin.horizontal==="right"&&o.overlap==="rectangular"&&{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${I.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},o.anchorOrigin.vertical==="top"&&o.anchorOrigin.horizontal==="left"&&o.overlap==="rectangular"&&{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${I.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},o.anchorOrigin.vertical==="bottom"&&o.anchorOrigin.horizontal==="left"&&o.overlap==="rectangular"&&{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${I.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},o.anchorOrigin.vertical==="top"&&o.anchorOrigin.horizontal==="right"&&o.overlap==="circular"&&{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${I.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},o.anchorOrigin.vertical==="bottom"&&o.anchorOrigin.horizontal==="right"&&o.overlap==="circular"&&{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${I.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},o.anchorOrigin.vertical==="top"&&o.anchorOrigin.horizontal==="left"&&o.overlap==="circular"&&{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${I.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},o.anchorOrigin.vertical==="bottom"&&o.anchorOrigin.horizontal==="left"&&o.overlap==="circular"&&{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${I.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},o.invisible&&{transition:t.transitions.create("transform",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.leavingScreen})})),Zt=r.forwardRef(function(o,s){var i,l,d,c,n,a;const u=Le({props:o,name:"MuiBadge"}),{anchorOrigin:p={vertical:"top",horizontal:"right"},className:g,component:h,components:m={},componentsProps:v={},children:C,overlap:j="rectangular",color:M="default",invisible:b=!1,max:w=99,badgeContent:S,slots:N,slotProps:R,showZero:q=!1,variant:H="standard"}=u,te=Ve(u,Ht),{badgeContent:G,invisible:oe,max:Me,displayValue:se}=At({max:w,invisible:b,badgeContent:S,showZero:q}),ne=qe({anchorOrigin:p,color:M,overlap:j,variant:H,badgeContent:S}),K=oe||G==null&&H!=="dot",{color:re=M,overlap:ae=j,anchorOrigin:ie=p,variant:x=H}=K?ne:u,_=x!=="dot"?se:void 0,le=P({},u,{badgeContent:G,invisible:K,max:Me,displayValue:_,showZero:q,anchorOrigin:ie,color:re,overlap:ae,variant:x}),Se=Gt(le),Ie=(i=(l=N==null?void 0:N.root)!=null?l:m.Root)!=null?i:Kt,$e=(d=(c=N==null?void 0:N.badge)!=null?c:m.Badge)!=null?d:Jt,ce=(n=R==null?void 0:R.root)!=null?n:v.root,de=(a=R==null?void 0:R.badge)!=null?a:v.badge,Ye=we({elementType:Ie,externalSlotProps:ce,externalForwardedProps:te,additionalProps:{ref:s,as:h},ownerState:le,className:X(ce==null?void 0:ce.className,Se.root,g)}),Xe=we({elementType:$e,externalSlotProps:de,ownerState:le,className:X(Se.badge,de==null?void 0:de.className)});return e.jsxs(Ie,P({},Ye,{children:[C,e.jsx($e,P({},Xe,{children:_}))]}))}),Ae=Zt,Yt=st(e.jsx("path",{d:"M12.5 6.9c1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-.39.08-.75.21-1.1.36l1.51 1.51c.32-.08.69-.13 1.09-.13zM5.47 3.92 4.06 5.33 7.5 8.77c0 2.08 1.56 3.22 3.91 3.91l3.51 3.51c-.34.49-1.05.91-2.42.91-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c.96-.18 1.83-.55 2.46-1.12l2.22 2.22 1.41-1.41L5.47 3.92z"}),"MoneyOffOutlined");var je={},Xt=W;Object.defineProperty(je,"__esModule",{value:!0});var He=je.default=void 0,Qt=Xt(D()),eo=e,to=(0,Qt.default)((0,eo.jsx)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");He=je.default=to;var ye={},oo=W;Object.defineProperty(ye,"__esModule",{value:!0});var Ge=ye.default=void 0,so=oo(D()),no=e,ro=(0,so.default)((0,no.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"}),"AccountCircle");Ge=ye.default=ro;var Ce={},ao=W;Object.defineProperty(Ce,"__esModule",{value:!0});var Ke=Ce.default=void 0,io=ao(D()),lo=e,co=(0,io.default)((0,lo.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"}),"Mail");Ke=Ce.default=co;var Pe={},uo=W;Object.defineProperty(Pe,"__esModule",{value:!0});var Je=Pe.default=void 0,po=uo(D()),go=e,ho=(0,po.default)((0,go.jsx)("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"}),"Notifications");Je=Pe.default=ho;var Oe={},fo=W;Object.defineProperty(Oe,"__esModule",{value:!0});var Ze=Oe.default=void 0,mo=fo(D()),xo=e,vo=(0,mo.default)((0,xo.jsx)("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert");Ze=Oe.default=vo;const bo=t=>{var a;const{data:o}=nt(),[s,i]=r.useState(!1),[l,d]=r.useState((a=t.user)==null?void 0:a.phone),c=async(u,p)=>{const{data:g}=await O.custom({url:"",method:"post",meta:{operation:"selfUpdateUserProfileInformations",variables:{phone:{value:p,type:"String",required:!1}},fields:["success","message"]}}).catch(h=>({data:null})).then(h=>h);g&&(g.success?(f.success(g.message),i(!1)):f.error(g.message))},n=async u=>{const{data:p}=await O.custom({url:"",method:"post",meta:{operation:"selfVerifyMobilePhoneNumber",variables:{phone:{value:u,type:"String",required:!0}},fields:["success","message","verified","otpSent"]}}).catch(g=>({data:null})).then(g=>g);if(p)if(p.success){if(p.otpSent)return!0}else f.error(p.message);return!1};return r.useEffect(()=>{},[t.randKey]),e.jsxs(e.Fragment,{children:[e.jsxs(z,{title:"",column:1,labelStyle:{fontSize:22,fontWeight:"bolder"},contentStyle:{fontSize:20},children:[e.jsx(z.Item,{label:"First Name",children:o==null?void 0:o.firstName}),e.jsx(z.Item,{label:"Middle Name",children:o==null?void 0:o.middleName}),e.jsx(z.Item,{label:"Last Name",children:o==null?void 0:o.lastName}),e.jsx(z.Item,{label:"Email Address",children:e.jsx(fe.Title,{level:4,style:{fontSize:20,width:"100%",fontWeight:"normal",marginTop:3},children:o==null?void 0:o.email})}),e.jsx(z.Item,{label:"Gender",children:o==null?void 0:o.gender}),e.jsx(z.Item,{label:"Mobile Phone Number",children:e.jsxs(fe.Title,{editable:{onChange:async u=>{u&&(d(u),await n(u)&&i(!0))}},level:4,style:{fontSize:20,fontWeight:"normal",marginTop:5},children:[l&&e.jsx(e.Fragment,{children:l}),!l&&e.jsx(e.Fragment,{children:o==null?void 0:o.phone})]})})]}),e.jsx(L,{title:"Mobile Phone Number Verification",open:s,onClose:u=>i(u),children:e.jsx(jo,{user:o,phone:l,onFinish:c})})]})},jo=t=>{const[o]=Z.useForm(),[s,i]=r.useState(!1),l=async(d,c)=>{const{data:n}=await O.custom({url:"",method:"post",meta:{operation:"selfVerifyMobilePhoneNumber",variables:{phone:{value:d,type:"String",required:!0},otp:{value:c,type:"String",required:!1}},fields:["success","message","verified","otpSent"]}}).catch(a=>({data:null})).then(a=>a);if(n)if(n.success){if(n.verified)return!0}else f.error(n.message);return!1};return e.jsxs(e.Fragment,{children:[e.jsx(Nt,{message:`Verification code sent to ${t.phone}, check a recent SMS with four digits`,type:"info"}),e.jsxs(Z,{layout:"vertical",form:o,onFinish:d=>{t.onFinish(d.otp,t.phone)},requiredMark:!0,children:[e.jsx(Z.Item,{name:"otp",label:"Verification Code",rules:[({getFieldValue:d})=>({async validator(c,n){return n.length>=4?(i(!0),await l(t.phone,n)?Promise.resolve():Promise.reject(new Error("Verification Code is not valid"))):Promise.reject(new Error("Verification Code must be 4 characters long"))}})],children:e.jsx(rt,{size:"large",placeholder:"Enter Verification Code ..."})}),e.jsx(Z.Item,{children:e.jsx(E,{size:"large",danger:!0,style:{float:"right"},disabled:!s,onClick:()=>{t.onFinish(o.getFieldValue("otp"),t.phone)},children:"Verify"})})]})]})},yo=t=>{const[o,s]=r.useTransition(),{push:i}=ve();return e.jsx(e.Fragment,{children:e.jsx(at,{span:t.colSize,children:e.jsx(fe.Link,{disabled:!t.app.canAccess,children:e.jsx(ee,{spinning:o,children:e.jsx(Rt,{onClick:()=>{t.app.isActive?s(()=>{i("/"+t.app.url),t.onClose()}):f("Under Construction")},children:e.jsx("div",{style:{marginRight:10,marginTop:10},children:e.jsxs(V,{direction:"vertical",align:"center",style:{width:"100%",justifyContent:"center",textAlign:"center"},children:[e.jsx(k,{size:{xs:24,sm:32,md:40,lg:40,xl:40,xxl:50},icon:e.jsx(Ue,{}),src:t.app.icon}),e.jsx("span",{style:{fontWeight:"bolder",fontSize:16},children:t.app.name})]})})})})})})})},Y=()=>{const t=localStorage.getItem("apps");return t?JSON.parse(t):[]},Co=t=>{const[o,s]=r.useState(Y()),[i,l]=r.useState(!0),c=!be.useBreakpoint().lg,n=async()=>{l(!0);const{data:a}=await O.custom({url:"",method:"get",meta:{operation:"apps",fields:["pages","total","page","hasNext","hasPrev",{results:["id","name","icon","url","created","updated","canAccess","isActive"]}]}});localStorage.setItem("apps",JSON.stringify(a.results)),s(a.results),l(!1)};return r.useEffect(()=>{n()},[]),e.jsxs(e.Fragment,{children:[Y().length==0&&e.jsx("div",{style:{width:"100%",textAlign:"center",marginTop:20},children:e.jsx(ee,{})}),Y().length>0&&e.jsx(it,{align:"top",children:Y().map(a=>e.jsx(yo,{app:a,colSize:c?12:4,onClose:()=>t.onClose()}))})]})},Po=t=>{const[o,s]=r.useState([]),[i,l]=r.useState(!0);ve();const d=async()=>{const{data:n}=await O.custom({url:"",method:"get",meta:{operation:"myNotifications",fields:["pages","total","page","hasNext","hasPrev",{results:["id","message","url",{sender:["id","firstName","lastName","middleName","pic","fullName"]},{receiver:["id","firstName","lastName","middleName","pic","fullName"]},"isRead","created","updated","isActive"]}]}}).catch(a=>(f.error("Failed to get notifications"),{data:null})).then(a=>a);n&&s([...o,...n.results]),l(!1)},c=async()=>{const{data:n}=await O.custom({url:"",method:"post",meta:{operation:"clearNotifications",fields:["success","message"]}}).catch(a=>(f.error("Failed to clear notifications"),{data:null})).then(a=>a);n&&(n.success?(f.success(n.message),d()):f.error(n.message))};return r.useEffect(()=>{d(),window.addEventListener("unload",()=>{Oo()})},[]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{paddingLeft:20,display:"flex",justifyContent:"space-between",paddingTop:20},children:[e.jsx("h3",{children:"Notifications"}),e.jsxs("span",{children:[e.jsx(U,{title:"Clear All",children:e.jsx("a",{style:{marginRight:20},onClick:c,children:e.jsx(lt,{})})}),e.jsx("a",{style:{marginRight:20},onClick:()=>f("Notification Settings"),children:e.jsx(ct,{})})]})]}),e.jsx(We,{style:{marginTop:0,marginBottom:0}}),e.jsx("div",{style:{maxHeight:"70vh",overflowY:"auto",overflowX:"hidden",paddingLeft:"20px"},children:e.jsx(ee,{spinning:i,children:e.jsx(ue,{itemLayout:"horizontal",dataSource:o,renderItem:n=>e.jsx("a",{children:e.jsx(ue.Item,{children:e.jsx(ue.Item.Meta,{avatar:e.jsx(k,{src:n.sender.pic}),title:e.jsx("a",{children:n.message}),description:dt(n.created).fromNow()})})})})})})]})};function Oo(t){throw new Error("Function not implemented.")}const{Dragger:Mo}=me,So=t=>{const[o,s]=r.useState([]),i=l=>{const d=["png","jpg","jpeg","gif","bmp","webp","tiff","svg","psd"],c=l.name.split(".").pop();return d.indexOf(c)===-1?(f.error("File type not supported"),me.LIST_IGNORE):l.size/1024/1024>50?(f.error("File size too large"),me.LIST_IGNORE):(s([l,...o]),!0)};return r.useEffect(()=>{s([])},[t.random]),e.jsx(e.Fragment,{children:e.jsxs(Mo,{customRequest:t.handleUpload,beforeUpload:i,fileList:o,multiple:!1,accept:"image/*",children:[e.jsx("p",{className:"ant-upload-drag-icon",children:e.jsx(ut,{})}),e.jsx("p",{className:"ant-upload-text",children:"Click or drag file to this area to upload a Profile Picture"})]})})},{TabPane:Io}=De,$o=t=>{var c;const[o,s]=r.useState(!1),i=(n,a)=>{t.changeWidth(n),s(a)},l=async()=>{const{data:n}=await O.custom({url:"",method:"post",meta:{operation:"removeUserProfilePhoto",variables:{id:{value:parseInt(t.user.id),type:"Int",required:!0}},fields:["success","message"]}});n.success?(f.success(n.message),t.close(),window.location.reload()):f.error(n.message)},d=async n=>{const{onSuccess:a,onError:u,file:p,onProgress:g}=n,{data:h}=await O.custom({url:"",method:"post",meta:{operation:"uploadUserProfilePhoto",variables:{id:{value:parseInt(t.user.id),type:"Int",required:!0},photo:{value:p,type:"Upload",required:!0}},onUploadProgress:m=>{const{loaded:v,total:C}=m,j=Math.floor(v*100/C);g(j)},onError:m=>{u(m),f.error(m.message)},fields:["success","message",{user:["id","firstName","middleName","lastName","fullName","pic","email","isAdmin","isStaff","isActive"]}]}});if(h.success){a("ok"),f.success(h.message),localStorage.removeItem("user"),localStorage.setItem("user",JSON.stringify(h.user));const m=localStorage.getItem("user"),{pic:v}=JSON.parse(m||"");h.user.pic===v&&window.location.reload()}else f.error(h.message)};return r.useEffect(()=>{t.triggerClose&&(s(!1),t.close())},[t.changeWidth]),e.jsx(e.Fragment,{children:o?e.jsx(De,{defaultActiveKey:"1",centered:!0,draggable:!0,children:e.jsxs(Io,{tab:e.jsx("span",{style:{fontSize:18},children:"From Computer"}),children:[e.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:30,marginBottom:30},children:e.jsx(So,{user:t.user,handleUpload:d})}),e.jsx("span",{style:{marginRight:10},children:e.jsx(E,{icon:e.jsx(pt,{}),size:"large",onClick:()=>i(30,!1),children:"Back"})})]},"3")}):e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("span",{style:{fontSize:18,fontWeight:"bolder"},children:"Profile picture"}),e.jsx("span",{style:{display:"block",marginTop:10},children:"A picture helps people recognize you and lets you know when you’re signed in to your account"}),e.jsxs("span",{style:{display:"block",marginTop:10},children:[e.jsx(gt,{}),"Visible across ",Q.system_name," services.",e.jsx("a",{children:"Learn more"})]})]}),e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(k,{src:(c=t.user)==null?void 0:c.pic,style:{width:225,height:225}})}),e.jsxs("div",{style:{display:"flex",justifyContent:"center",marginTop:30},children:[e.jsx("span",{style:{marginRight:10},children:e.jsx(E,{icon:e.jsx(ht,{}),size:"large",onClick:()=>i(60,!0),children:"Change"})}),e.jsx("span",{children:e.jsx(E,{icon:e.jsx(ft,{}),size:"large",onClick:l,children:"Remove"})})]})]})})},{LogoutOutlined:zo,UserOutlined:ko}=Ot,No=()=>{const[t,o]=r.useTransition(),{data:s}=mt();xt();const[i,l]=r.useState(0),[d,c]=r.useState(!1),[n,a]=r.useState(30),[u,p]=r.useState(!1),[g,h]=r.useState(0),[m,v]=r.useState(!1),[C,j]=r.useState(!1),[M,b]=r.useState(!1),{mutate:w}=vt(),{push:S}=ve(),N=be.useBreakpoint(),[R,q]=r.useState(!1),[H,te]=r.useState(!0),G=r.useRef(null),oe=!N.lg,[Me,se]=r.useState(!1),ne=x=>{a(x)},K=async()=>{const{data:x}=await O.custom({url:"",method:"get",meta:{operation:"totalNotifications",fields:["total"]}}).catch(_=>({data:null})).then(_=>_);x&&l(x.total)},re=()=>{a(30),p(!0),h(Math.random())};r.useEffect(()=>{K(),se(oe)},[]);const ae=e.jsx(ee,{spinning:t,children:e.jsx($,{style:{width:400,backgroundColor:"white",padding:20},children:e.jsxs("span",{ref:G,style:{margin:10,padding:30},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"center"},children:[e.jsx(k,{src:s==null?void 0:s.pic,style:{width:75,height:75}}),e.jsx(U,{title:"Change Profile Picture",color:"green",placement:"left",children:e.jsx(E,{shape:"circle",icon:e.jsx(bt,{}),style:{position:"absolute",marginLeft:75,marginTop:40},onClick:()=>c(!0)})})]}),e.jsx("div",{style:{display:"flex",justifyContent:"center",fontWeight:"bolder",color:"black",marginTop:20,marginBottom:30,fontSize:24},children:s==null?void 0:s.fullName}),e.jsx(wt,{}),e.jsx(We,{}),e.jsx($.Item,{onClick:()=>b(!0),icon:e.jsx(ko,{style:{color:"red"}}),style:{fontSize:18,color:"black"},children:"Profile"},"profile"),s!=null&&s.isStaff||s!=null&&s.isAdmin?e.jsxs(e.Fragment,{children:[e.jsx($.Item,{onClick:()=>{o(()=>{S("/control/analytics")})},icon:e.jsx(jt,{style:{color:"red"}}),style:{fontSize:18,color:"black"},children:"Control Panel"},"controlpanel"),e.jsx($.Item,{onClick:()=>{o(()=>{S("/opay")})},style:{fontSize:18,color:"black"},icon:e.jsx(Yt,{style:{color:"red"}}),children:"Billing Management"},"controlpanel")]}):e.jsx(e.Fragment,{}),!(s!=null&&s.ldapAuth)&&e.jsx(U,{title:"Click to Change Your Password",color:"green",children:e.jsx($.Item,{onClick:()=>v(!0),icon:e.jsx(yt,{style:{color:"red"}}),style:{fontSize:18,color:"black"},children:"Change Password"},"accountChangePassword")}),e.jsx($.Item,{onClick:()=>w(),icon:e.jsx(zo,{style:{color:"red"}}),style:{fontSize:18,color:"black"},children:"Logout"},"logout")]})})}),ie=e.jsx($,{style:{width:500,minHeight:50},children:e.jsx(Po,{})});return e.jsxs(V,{children:[e.jsx(V,{style:{marginLeft:"0px",marginRight:"20px"},children:e.jsx(Ro,{})}),e.jsx(V,{style:{marginLeft:"0px",marginRight:"20px"},children:e.jsx(_e,{overlay:ie,trigger:["click"],overlayStyle:{zIndex:9999},children:e.jsx(U,{title:"Notifications",placement:"bottom",color:"green",children:e.jsx(Ct,{count:i,children:e.jsx("a",{children:e.jsx(k,{icon:e.jsx(Pt,{}),style:{backgroundColor:"silver"}})})})})})}),e.jsx(V,{style:{marginLeft:"10px"},children:e.jsx(_e,{overlay:ae,trigger:["click"],overlayStyle:{zIndex:9999},children:e.jsx("a",{onClick:()=>q(!R),children:(s==null?void 0:s.pic)&&e.jsx(k,{src:s==null?void 0:s.pic,alt:s==null?void 0:s.fullName})})})}),e.jsx(L,{title:e.jsx(e.Fragment,{children:n>30&&e.jsx("span",{children:"Change Profile Picture"})||e.jsxs("span",{children:[Q.system_name," Account"]})}),open:d,width:n+"vw",onClose:x=>c(x),children:e.jsx($o,{user:s,changeWidth:ne,triggerClose:u,close:re})}),e.jsx(L,{title:"Change Password",open:m,width:"30vw",onClose:x=>v(x),children:e.jsx(kt,{onFinish:()=>{te(!1)}})}),e.jsx(L,{title:"Account Payment Settings",destroyOnClose:!0,closable:!0,open:C,width:"40vw",onClose:x=>j(x),children:e.jsx("p",{children:"Account Payment Settings"})}),e.jsx(L,{title:(s==null?void 0:s.fullName)+" Profile Information's",open:M,width:"60vw",onClose:x=>b(x),children:e.jsx(bo,{randKey:Math.random(),user:s})})]})};function Ro(){const[t,o]=r.useState(null),s=!!t,l=!be.useBreakpoint().lg,d=n=>{o(n.currentTarget)},c=()=>{o(null)};return e.jsxs("div",{children:[e.jsx(U,{title:"Apps",color:"green",placement:"left",children:e.jsx("span",{id:"basic-button","aria-controls":s?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":s?"true":void 0,onClick:d,style:{cursor:"pointer"},children:e.jsx(k,{icon:e.jsx(Ue,{}),style:{backgroundColor:"silver"}})})}),e.jsx(he,{id:"basic-menu",anchorEl:t,open:s,onClose:c,MenuListProps:{"aria-labelledby":"basic-button",style:{width:l?"100vw":"70vw"}},children:e.jsx(Co,{onClose:()=>{c()}})})]})}const ts=t=>{const[o,s]=r.useState(null),[i,l]=r.useState(null),d=!!o,c=!!i,n=_t(b=>b.hasSidebar),{setSiderCollapsed:a,setMobileSiderOpen:u}=Mt(),p=b=>{s(b.currentTarget)},g=()=>{l(null)},h=()=>{s(null),g()},m=b=>{l(b.currentTarget)},v="primary-search-account-menu",C=e.jsxs(he,{anchorEl:o,anchorOrigin:{vertical:"top",horizontal:"right"},id:v,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:d,onClose:h,children:[e.jsx(F,{onClick:h,children:"Profile"}),e.jsx(F,{onClick:h,children:"My account"})]}),j="primary-search-account-menu-mobile",M=e.jsxs(he,{anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},id:j,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:c,onClose:g,children:[e.jsxs(F,{children:[e.jsx(A,{size:"large","aria-label":"show 4 new mails",color:"inherit",children:e.jsx(Ae,{badgeContent:4,color:"error",children:e.jsx(Ke,{})})}),e.jsx("p",{children:"Messages"})]}),e.jsxs(F,{children:[e.jsx(A,{size:"large","aria-label":"show 17 new notifications",color:"inherit",children:e.jsx(Ae,{badgeContent:17,color:"error",children:e.jsx(Je,{})})}),e.jsx("p",{children:"Notifications"})]}),e.jsxs(F,{onClick:p,children:[e.jsx(A,{size:"large","aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:e.jsx(Ge,{})}),e.jsx("p",{children:"Profile"})]})]});return e.jsxs(T,{position:"fixed",sx:{width:"100%",zIndex:100},children:[e.jsx(St,{position:"fixed",children:e.jsxs(It,{children:[n&&e.jsx(A,{size:"large",edge:"start",color:"inherit","aria-label":"open drawer",sx:{mr:2},onClick:()=>{u(!0)},children:e.jsx(He,{})}),!n&&e.jsx(T,{sx:{display:"flex",alignItems:"center",justifyContent:"center",mr:2},children:e.jsx(Te,{to:"/",children:e.jsx($t,{src:Q.brandLogo,sx:{width:50,height:50,mr:1,border:"1px solid #ccc"}})})}),e.jsx(zt,{variant:"h6",noWrap:!0,component:Te,to:"/",sx:{display:{xs:"none",sm:"block"},textDecoration:"none",textTransform:"none",color:"black",fontWeight:"bold"},children:t.title?t.title:Q.system_name}),e.jsx(T,{sx:{flexGrow:1}}),e.jsx(T,{sx:{display:{xs:"flex",md:"flex"}},children:e.jsx(No,{})}),e.jsx(T,{sx:{display:{xs:"none",md:"none"}},children:e.jsx(A,{size:"large","aria-label":"show more","aria-controls":j,"aria-haspopup":"true",onClick:m,color:"inherit",children:e.jsx(Ze,{})})})]})}),M,C]})};export{ts as Header};
