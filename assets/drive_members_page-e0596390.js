import{br as xe,bq as he,bo as oe,h as S,je as ze,r as n,bn as ge,aR as re,aM as e,bA as ee,bB as fe,ca as Ee,bt as Ue,bx as pe,be as ue,jf as Ge,by as _e,jg as Ve,bz as Ye,jh as we,bs as He,aC as w,cP as Ce,aG as K,ay as U,M as ie,cF as ae,ac as W,ae as F,c$ as Ke,bJ as A,bK as m,da as We,$ as Pe,bV as Je,cX as Re,c4 as De,ji as Xe,ax as Qe,jj as Ze,jk as et,aJ as tt,cD as st,bL as rt,aw as se,c8 as be,dH as Fe,d8 as Ne,aA as Le,aD as B,aH as ye,cf as je,cy as nt,cH as ot,bI as me,jl as it,jm as at,jn as lt,jo as ct,cI as dt,bT as ut}from"./index-2a194481.js";import{I as $e}from"./index.es-71365c7c.js";import{d as Ie,b as _}from"./data_objects-b71f6ac2.js";import{L as O}from"./index-f16127c3.js";import{P as ne}from"./index-a9bb9b36.js";import{A as ve}from"./index-582573e6.js";import{M as G}from"./index-b9dad506.js";import{a as mt}from"./data_objects-986f0b00.js";import{C as pt}from"./index-98a9641c.js";import{A as Te}from"./Alert-cacefcaf.js";import{T as xt}from"./index-6c5aad82.js";import"./index-df246fd6.js";import"./ActionButton-d68b8b67.js";import"./InfoCircleFilled-f367ccf6.js";import"./DialogWrap-8e36c74f.js";import"./index-43845558.js";import"./fade-3c234f74.js";import"./Skeleton-49b5872f.js";import"./index-e8792b52.js";import"./transButton-a5c838d6.js";function ht(t){return xe("MuiDialogContent",t)}he("MuiDialogContent",["root","dividers"]);const gt=["className","dividers"],ft=t=>{const{classes:s,dividers:i}=t;return fe({root:["root",i&&"dividers"]},ht,s)},vt=oe("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:i}=t;return[s.root,i.dividers&&s.dividers]}})(({theme:t,ownerState:s})=>S({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},s.dividers?{padding:"16px 24px",borderTop:`1px solid ${(t.vars||t).palette.divider}`,borderBottom:`1px solid ${(t.vars||t).palette.divider}`}:{[`.${ze.root} + &`]:{paddingTop:0}})),bt=n.forwardRef(function(s,i){const a=ge({props:s,name:"MuiDialogContent"}),{className:p,dividers:v=!1}=a,h=re(a,gt),j=S({},a,{dividers:v}),r=ft(j);return e.jsx(vt,S({className:ee(r.root,p),ownerState:j,ref:i},h))}),yt=bt;function jt(t){return xe("MuiDialogContentText",t)}he("MuiDialogContentText",["root"]);const Ct=["children","className"],It=t=>{const{classes:s}=t,a=fe({root:["root"]},jt,s);return S({},s,a)},Mt=oe(Ee,{shouldForwardProp:t=>Ue(t)||t==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(t,s)=>s.root})({}),kt=n.forwardRef(function(s,i){const a=ge({props:s,name:"MuiDialogContentText"}),{className:p}=a,v=re(a,Ct),h=It(v);return e.jsx(Mt,S({component:"p",variant:"body1",color:"text.secondary",ref:i,ownerState:v,className:ee(h.root,p)},a,{classes:h}))}),St=kt;function At(t){return xe("MuiListItem",t)}const wt=he("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),Z=wt;function Dt(t){return xe("MuiListItemSecondaryAction",t)}he("MuiListItemSecondaryAction",["root","disableGutters"]);const Ft=["className"],Nt=t=>{const{disableGutters:s,classes:i}=t;return fe({root:["root",s&&"disableGutters"]},Dt,i)},Lt=oe("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:i}=t;return[s.root,i.disableGutters&&s.disableGutters]}})(({ownerState:t})=>S({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})),qe=n.forwardRef(function(s,i){const a=ge({props:s,name:"MuiListItemSecondaryAction"}),{className:p}=a,v=re(a,Ft),h=n.useContext(pe),j=S({},a,{disableGutters:h.disableGutters}),r=Nt(j);return e.jsx(Lt,S({className:ee(r.root,p),ownerState:j,ref:i},v))});qe.muiName="ListItemSecondaryAction";const Tt=qe,Pt=["className"],Rt=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],$t=(t,s)=>{const{ownerState:i}=t;return[s.root,i.dense&&s.dense,i.alignItems==="flex-start"&&s.alignItemsFlexStart,i.divider&&s.divider,!i.disableGutters&&s.gutters,!i.disablePadding&&s.padding,i.button&&s.button,i.hasSecondaryAction&&s.secondaryAction]},qt=t=>{const{alignItems:s,button:i,classes:a,dense:p,disabled:v,disableGutters:h,disablePadding:j,divider:r,hasSecondaryAction:d,selected:u}=t;return fe({root:["root",p&&"dense",!h&&"gutters",!j&&"padding",r&&"divider",v&&"disabled",i&&"button",s==="flex-start"&&"alignItemsFlexStart",d&&"secondaryAction",u&&"selected"],container:["container"]},At,a)},Bt=oe("div",{name:"MuiListItem",slot:"Root",overridesResolver:$t})(({theme:t,ownerState:s})=>S({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!s.disablePadding&&S({paddingTop:8,paddingBottom:8},s.dense&&{paddingTop:4,paddingBottom:4},!s.disableGutters&&{paddingLeft:16,paddingRight:16},!!s.secondaryAction&&{paddingRight:48}),!!s.secondaryAction&&{[`& > .${Ge.root}`]:{paddingRight:48}},{[`&.${Z.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${Z.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:ue(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${Z.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:ue(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${Z.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},s.alignItems==="flex-start"&&{alignItems:"flex-start"},s.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},s.button&&{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Z.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:ue(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:ue(t.palette.primary.main,t.palette.action.selectedOpacity)}}},s.hasSecondaryAction&&{paddingRight:48})),Ot=oe("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,s)=>s.container})({position:"relative"}),zt=n.forwardRef(function(s,i){const a=ge({props:s,name:"MuiListItem"}),{alignItems:p="center",autoFocus:v=!1,button:h=!1,children:j,className:r,component:d,components:u={},componentsProps:l={},ContainerComponent:b="li",ContainerProps:{className:N}={},dense:z=!1,disabled:E=!1,disableGutters:C=!1,disablePadding:D=!1,divider:T=!1,focusVisibleClassName:P,secondaryAction:g,selected:I=!1,slotProps:c={},slots:f={}}=a,M=re(a.ContainerProps,Pt),V=re(a,Rt),J=n.useContext(pe),X=n.useMemo(()=>({dense:z||J.dense||!1,alignItems:p,disableGutters:C}),[p,J.dense,z,C]),te=n.useRef(null);_e(()=>{v&&te.current&&te.current.focus()},[v]);const R=n.Children.toArray(j),le=R.length&&Ve(R[R.length-1],["ListItemSecondaryAction"]),L=S({},a,{alignItems:p,autoFocus:v,button:h,dense:X.dense,disabled:E,disableGutters:C,disablePadding:D,divider:T,hasSecondaryAction:le,selected:I}),Y=qt(L),ce=Ye(te,i),Q=f.root||u.Root||Bt,H=c.root||l.root||{},$=S({className:ee(Y.root,H.className,r),disabled:E},V);let q=d||"li";return h&&($.component=d||"div",$.focusVisibleClassName=ee(Z.focusVisible,P),q=He),le?(q=!$.component&&!d?"div":q,b==="li"&&(q==="li"?q="div":$.component==="li"&&($.component="div")),e.jsx(pe.Provider,{value:X,children:e.jsxs(Ot,S({as:b,className:ee(Y.container,N),ref:ce,ownerState:L},M,{children:[e.jsx(Q,S({},H,!we(Q)&&{as:q,ownerState:S({},L,H.ownerState)},$,{children:R})),R.pop()]}))})):e.jsx(pe.Provider,{value:X,children:e.jsxs(Q,S({},H,{as:q,ref:ce},!we(Q)&&{ownerState:S({},L,H.ownerState)},$,{children:[R,g&&e.jsx(Tt,{children:g})]}))})}),Et=zt,Ut=t=>{const[s,i]=n.useState(),[a,p]=n.useState([]),[v,h]=n.useState(!0),[j,r]=n.useState(1),[d,u]=n.useState(0),[l,b]=n.useState(0),[N,z]=n.useState(!0),[E]=w.useForm(),C=Ce(),D=async g=>{const{data:I}=await A.custom({url:"",method:"get",meta:{operation:"drive",variables:{id:{value:g,type:"Int",required:!0}},fields:Ie}}).catch(()=>(m.error("Error occured while fetching drive"),{data:null})).then(c=>c);I&&i(I)},T=async g=>{const{data:I}=await A.custom({url:"",method:"post",meta:{operation:"directConnectMemberDrive",variables:{driveId:{value:parseInt(C.drive.toString()),type:"Int",required:!0},userId:{value:parseInt(g.toString()),type:"Int",required:!0}},fields:["success","message",{member:_}]}}).catch(()=>(m.error("Error occured while connecting member"),{data:null})).then(c=>c);I&&(I.success?(m.success(I.message),t.onAdd(I.member),p(a.filter(c=>c.id!==g))):m.error(I.message)),G.destroyAll()},P=async(g,I="",c=!1)=>{const{data:f}=await A.custom({url:"",method:"get",meta:{operation:"membersToConnectDrive",variables:{driveId:{value:parseInt(C.drive.toString()),type:"Int",required:!0},page:{value:g,type:"Int",required:!0},key:{value:I,type:"String",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:We}]}}).catch(()=>(m.error("Error occured while fetching members"),{data:null})).then(M=>M);f&&(b(f.total),r(f.page+1),u(f.pages),z(f.hasNext),(I.length>0||I.length===0&&c||g===1)&&p(f.results),f.results.length>0&&!c&&g!==1&&p(a.concat(f.results))),h(!1)};return n.useEffect(()=>{D(parseInt(C.drive.toString())),P(1)},[t.randKey]),e.jsxs(e.Fragment,{children:[e.jsx(K,{children:e.jsx(U,{span:24,children:e.jsx(w,{layout:"vertical",form:E,onFinish:g=>P(0,g.key,!0),children:e.jsx(w.Item,{name:"key",children:e.jsx(ie,{size:"large",placeholder:"Search file(s)...",prefix:e.jsx(ae,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx(W,{spinning:v,children:e.jsx($e,{dataLength:l,next:()=>P(j),hasMore:N,height:"76vh",loader:e.jsx(e.Fragment,{children:e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(W,{})})}),endMessage:e.jsx("p",{style:{textAlign:"center",display:a.length>0?"block":"none"},children:e.jsx("b",{children:"Yay! You have seen it all"})}),children:e.jsx(O,{itemLayout:"horizontal",dataSource:a,renderItem:g=>e.jsx("div",{style:{background:"white",marginBottom:5,paddingLeft:10,paddingTop:10},children:e.jsx(O.Item,{actions:[e.jsx(ne,{placement:"top",title:"Adding Member",onConfirm:()=>T(g.id),okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(F,{icon:e.jsx(Ke,{})})})],children:e.jsx(O.Item.Meta,{avatar:e.jsx(ve,{src:g.pic}),title:g.fullName,description:e.jsx(e.Fragment,{children:e.jsx("p",{children:g.email})})})},"drive-file-"+g.id)})})})})]})},Gt=t=>{const[s,i]=n.useState([]),[a,p]=n.useState(!0),[v]=w.useForm(),h=async(r,d="",u=20)=>{p(!0);const{data:l}=await A.custom({url:"",method:"get",meta:{operation:"driveAuthors",variables:{driveId:{value:parseInt(t.driveId.toString()),type:"Int",required:!0},page:{value:r,type:"Int",required:!0},key:{value:d,type:"String",required:!1},pageSize:{value:u,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:_}]}}).catch(()=>(m.error("Error occured while fetching Authors"),{data:null})).then(b=>b);p(!1),l&&i([...s,...l.results]),p(!1)},j=async(r,d)=>{const{data:u}=await A.custom({url:"",method:"post",meta:{operation:"driveMemberAuthor",variables:{id:{value:r,type:"Int",required:!0},author:{value:d,type:"Boolean",required:!0}},fields:["success","message",{driveMember:_}]}}).catch(()=>(m.error("Error in making Author"),{data:null})).then(l=>l);if(u)if(u.success){m.success(u.message);const l=s.filter(b=>b.id!==r);i(l),t.onModify(u.driveMember)}else m.error(u.message);G.destroyAll()};return n.useEffect(()=>{h(1,"",20)},[t.driveId]),a?e.jsx(e.Fragment,{children:e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(W,{})})}):e.jsxs(e.Fragment,{children:[e.jsx(K,{children:e.jsx(U,{span:20,children:e.jsx(w,{layout:"vertical",form:v,onFinish:r=>{h(1,r.key,20)},children:e.jsx(w.Item,{name:"key",children:e.jsx(ie,{size:"large",placeholder:"Search Author(s)...",prefix:e.jsx(ae,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx(O,{itemLayout:"horizontal",dataSource:s,renderItem:r=>{var d,u,l;return e.jsx("div",{style:{background:"white",marginBottom:5,paddingLeft:10,paddingTop:10},children:e.jsx(O.Item,{actions:[e.jsx(ne,{title:"Remove Author?",onConfirm:()=>j(r.id,!1),okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(Pe,{title:"Click to Remove Author",color:"green",children:e.jsx(F,{icon:e.jsx(Je,{}),size:"large"})})})],children:e.jsx(O.Item.Meta,{avatar:e.jsx(ve,{src:(d=r==null?void 0:r.user)==null?void 0:d.pic}),title:e.jsx("a",{children:(u=r==null?void 0:r.user)==null?void 0:u.fullName}),description:e.jsx(e.Fragment,{children:e.jsx("p",{children:(l=r==null?void 0:r.user)==null?void 0:l.email})})})},"author-item-"+r.id)})}})]})},_t=t=>{const[s,i]=n.useState([]),[a,p]=n.useState(!0),[v]=w.useForm(),h=async(r,d="",u=20)=>{p(!0);const{data:l}=await A.custom({url:"",method:"get",meta:{operation:"blockedDriveMembers",variables:{driveId:{value:parseInt(t.driveId.toString()),type:"Int",required:!0},page:{value:r,type:"Int",required:!0},key:{value:d,type:"String",required:!1},pageSize:{value:u,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:_}]}}).catch(()=>(m.error("Error occured while fetching Authors"),{data:null})).then(b=>b);p(!1),l&&i([...s,...l.results]),p(!1)},j=async(r,d)=>{const{data:u}=await A.custom({url:"",method:"post",meta:{operation:"blockUnblockDriveMember",variables:{driveMemberId:{value:r,type:"Int",required:!0},blocked:{value:d,type:"Boolean",required:!0}},fields:["success","message",{driveMember:_}]}}).catch(()=>(m.error("Error occured while blocking/unblocking drive member"),{data:null})).then(l=>l);if(u)if(u.success){m.success(u.message);const l=s.filter(b=>b.id!==r);i(l),t.onModify(u.driveMember)}else m.error(u.message);G.destroyAll()};return n.useEffect(()=>{h(1,"",20)},[t.driveId]),a?e.jsx(e.Fragment,{children:e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(W,{})})}):e.jsxs(e.Fragment,{children:[e.jsx(K,{children:e.jsx(U,{span:20,children:e.jsx(w,{layout:"vertical",form:v,onFinish:r=>{h(1,r.key,20)},children:e.jsx(w.Item,{name:"key",children:e.jsx(ie,{size:"large",placeholder:"Search Author(s)...",prefix:e.jsx(ae,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx(O,{itemLayout:"horizontal",dataSource:s,renderItem:r=>{var d,u,l;return e.jsx("div",{style:{background:"white",marginBottom:5,paddingLeft:10,paddingTop:10},children:e.jsx(O.Item,{actions:[e.jsx(ne,{title:"Unblock Drive Member?",onConfirm:()=>j(r.id,!1),okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(Pe,{title:"Click to Unblock Drive Member",color:"green",children:e.jsx(F,{icon:e.jsx(Re,{}),size:"large"})})})],children:e.jsx(O.Item.Meta,{avatar:e.jsx(ve,{src:(d=r==null?void 0:r.user)==null?void 0:d.pic}),title:e.jsx("a",{children:(u=r==null?void 0:r.user)==null?void 0:u.fullName}),description:e.jsx(e.Fragment,{children:e.jsx("p",{children:(l=r==null?void 0:r.user)==null?void 0:l.email})})})},"author-item-"+r.id)})}})]})},Vt=t=>{const[s,i]=n.useState(),[a,p]=n.useState([]),[v,h]=n.useState(!0),[j,r]=n.useState(1),[d,u]=n.useState(0),[l,b]=n.useState(0),[N,z]=n.useState(!0),[E]=w.useForm(),[C,D]=n.useState([0]),T=Ce(),P=async c=>{const{data:f}=await A.custom({url:"",method:"get",meta:{operation:"drive",variables:{id:{value:c,type:"Int",required:!0}},fields:Ie}}).catch(()=>({data:null})).then(M=>M);f&&i(f)},g=async()=>{const{data:c}=await A.custom({url:"",method:"post",meta:{operation:"addClassMembersToDrive",variables:{driveId:{value:parseInt(T.drive.toString()),type:"Int",required:!0},classesIds:{value:C.map(f=>parseInt(f.toString())),type:"[Int]",required:!0}},fields:["success","message"]}}).catch(()=>(m.error("Error occured while connecting member"),{data:null})).then(f=>f);c&&(c.success?(D([0]),t.onAdd()):m.error(c.message)),G.destroyAll()},I=async(c,f="")=>{const{data:M}=await A.custom({url:"",method:"get",meta:{operation:"myMadarasaAuthored",variables:{page:{value:c,type:"Int",required:!0},key:{value:f,type:"String",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:mt}]}}).catch(()=>(m.error("Error occured while fetching members"),{data:null})).then(V=>V);M&&(b(M.total),r(M.page+1),u(M.pages),z(M.hasNext),p([...a,...M.results.filter(V=>a.findIndex(J=>J.id===V.id)===-1)])),h(!1)};return n.useEffect(()=>{P(parseInt(T.drive.toString())),I(1)},[t.randKey]),e.jsxs(e.Fragment,{children:[e.jsx(K,{children:e.jsx(U,{span:24,children:e.jsx(w,{layout:"vertical",form:E,onFinish:c=>I(0,c.key),children:e.jsx(w.Item,{name:"key",children:e.jsx(ie,{size:"large",placeholder:"Search Classes...",prefix:e.jsx(ae,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx(De,{sx:{display:"flex",justifyContent:"flex-end",p:2},children:C.length>1&&e.jsx(F,{onClick:()=>g(),children:"Add"})}),e.jsx(De,{sx:{width:"100%",bgcolor:"background.paper",position:"relative",overflow:"auto",maxHeight:"60vh"},children:e.jsx(W,{spinning:v,children:e.jsx(Xe,{sx:{width:"100%",bgcolor:"background.paper"},children:a.map(c=>{const f=`checkbox-list-label-${c.id}`;return e.jsxs(e.Fragment,{children:[e.jsx(Et,{secondaryAction:e.jsx(Qe,{onChange:()=>{C.indexOf(c.id)!==-1?D(C.filter(M=>M!==c.id)):D([...C,c.id])},checked:C.indexOf(c.id)!==-1}),disablePadding:!0,children:e.jsx(Ze,{role:void 0,onClick:()=>{C.indexOf(c.id)!==-1?D(C.filter(M=>M!==c.id)):D([...C,c.id])},dense:!0,children:e.jsx(et,{id:f,primary:e.jsxs(e.Fragment,{children:[c.name,e.jsx(tt,{style:{marginLeft:10},children:c.code})]})})})},c.id),e.jsx(st,{variant:"inset"})]})})})})}),N&&e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(F,{onClick:()=>{I(j)},children:"Load More"})})]})},{Text:Yt}=xt,Ht=t=>{var Ae;const[s,i]=n.useState(!1),[a,p]=n.useState(0),[v,h]=n.useState(!1),[j,r]=n.useState(!1),[d,u]=n.useState(),[l,b]=n.useState([]),[N,z]=n.useState({}),[E,C]=n.useState(!0),[D,T]=n.useState(1),[P,g]=n.useState(0),[I,c]=n.useState(0),[f,M]=n.useState(!0),[V]=w.useForm(),[J,X]=n.useState(!1),[te,R]=n.useState(!1),[le,L]=n.useState(!1);rt();const Y=Ce(),ce=async()=>{p(Math.random()),h(!0)},Q=async o=>{b([o,...l])},H=async o=>{const{data:x}=await A.custom({url:"",method:"post",meta:{operation:"deleteDriveMember",variables:{id:{value:o,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(m.error("Error in Deleting Drive Member"),{data:null})).then(y=>y);x&&(x.success?(m.success(x.message),b(l.filter(y=>y.id!==o)),L(!1)):m.error(x.message)),G.destroyAll()},$=o=>{z(o),L(!0)},q=async(o,x)=>{const{data:y}=await A.custom({url:"",method:"post",meta:{operation:"driveMemberAuthor",variables:{id:{value:o,type:"Int",required:!0},author:{value:x,type:"Boolean",required:!0}},fields:["success","message",{driveMember:_}]}}).catch(()=>(m.error("Error in making Author"),{data:null})).then(k=>k);y&&(y.success?(m.success(y.message),b(l.map(k=>k.id===o?y.driveMember:k))):m.error(y.message)),G.destroyAll()},Me=(o,x)=>{G.confirm({title:"Confirm",icon:e.jsx(dt,{}),content:x?"Removing Author ....":"Making Author ....",okText:"Ok",cancelText:"Cancel",onOk:()=>q(o,x)})},ke=o=>{b(l.map(x=>x.id===o.id?o:x))},de=async(o,x="",y=!1)=>{const{data:k}=await A.custom({url:"",method:"get",meta:{operation:"driveMembers",variables:{page:{value:o,type:"Int",required:!0},key:{value:x,type:"String",required:!1},id:{value:parseInt(Y.drive.toString()),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:_}]}}).catch(()=>(m.error("Error in Getting Drive Members"),{data:null})).then(Oe=>Oe);k&&(g(k.total),c(k.pages),T(k.page+1),M(k.hasNext),(x.length>0||x.length===0&&y)&&b(k.results),k.results.length>0&&!y&&(b(l.concat(k.results)),T(o+25))),C(!1)},Be=async o=>{const{data:x}=await A.custom({url:"",method:"get",meta:{operation:"drive",variables:{id:{value:o,type:"Int",required:!0}},fields:Ie}}).catch(()=>(m.error("Error in Getting Drive"),{data:null})).then(y=>y);x&&(u(x),i(!0))},Se=async(o,x)=>{const{data:y}=await A.custom({url:"",method:"post",meta:{operation:"blockUnblockDriveMember",variables:{driveMemberId:{value:o,type:"Int",required:!0},blocked:{value:x,type:"Boolean",required:!0}},fields:["success","message",{driveMember:_}]}}).catch(()=>(m.error("Error occured while blocking/unblocking drive member"),{data:null})).then(k=>k);y&&(y.success?(m.success(y.message),b(l.map(k=>k.id===y.driveMember.id?y.driveMember:k))):m.error(y.message)),G.destroyAll()};return n.useEffect(()=>{Be(parseInt(Y.drive.toString())),de(D)},[]),e.jsxs(e.Fragment,{children:[e.jsx(K,{children:e.jsx(U,{span:24,style:{display:"flex",justifyContent:"space-between",marginBottom:10},children:e.jsxs(se,{children:[e.jsx(se.Item,{children:e.jsx(be,{to:"/odrive",children:"Home"})}),e.jsx(se.Item,{children:e.jsx(be,{to:"/odrive/drives",children:"Drives"})}),e.jsx(se.Item,{children:e.jsxs(be,{to:"/odrive/drive/"+(d==null?void 0:d.id)+"/"+(d==null?void 0:d.code)+"/files",children:[d==null?void 0:d.name," - Drive"]})}),e.jsx(se.Item,{children:"Member(s)"})]})})}),e.jsxs(K,{children:[e.jsx(U,{span:12,children:e.jsx(w,{layout:"vertical",form:V,onFinish:o=>de(0,o.key,!0),children:e.jsx(w.Item,{name:"key",children:e.jsx(ie,{size:"large",placeholder:"Search member(s)...",prefix:e.jsx(ae,{}),autoComplete:"off",allowClear:!0})})})}),e.jsxs(U,{span:12,style:{display:"flex",justifyContent:"flex-end"},children:[e.jsx(F,{size:"large",icon:e.jsx(Fe,{}),onClick:()=>X(!0),children:"Drive Authors"}),e.jsx(F,{size:"large",icon:e.jsx(Ne,{}),onClick:()=>R(!0),children:"Blocked Members"}),e.jsx(Le,{disabled:!s,trigger:["click"],overlay:e.jsxs(B,{children:[e.jsx(B.Item,{children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",onClick:()=>ce(),children:"Add Directly"})}),e.jsx(B.Item,{children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",onClick:()=>r(!0),children:"Add From Classes"})})]}),placement:"bottomLeft",arrow:!0,overlayStyle:{zIndex:9999},children:e.jsx(F,{size:"large",icon:e.jsx(Fe,{}),children:"Add Member"})})]})]}),e.jsx(W,{spinning:E,children:e.jsx($e,{dataLength:P,next:()=>de(D),hasMore:f,loader:e.jsx(e.Fragment,{children:l.length>0?e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(W,{})}):e.jsx(e.Fragment,{})}),endMessage:e.jsx("p",{style:{textAlign:"center",display:l.length>0?"block":"none"},children:e.jsx("b",{children:"Yay! You have seen it all"})}),children:l.length>0?e.jsx(K,{align:"top",children:l.map(o=>e.jsx(U,{span:6,children:e.jsxs(pt,{hoverable:o.isActive,style:{marginRight:10,marginBottom:5,borderColor:o.isAuthor?"green":"white"},children:[e.jsx(ye,{style:{right:0,position:"absolute"},children:e.jsx(Le,{trigger:["click"],overlay:e.jsxs(B,{children:[e.jsx(B.Item,{icon:e.jsx(je,{}),onClick:()=>$(o),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Disconnect"})}),o.blocked?e.jsx(B.Item,{icon:e.jsx(Re,{}),children:e.jsx(ne,{title:e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Are you sure?"}),e.jsx("div",{style:{width:"275px"},children:"Member will be Removed From Blocked Member(s), and will be able to access this drive."})]}),onConfirm:()=>Se(o.id,!1),okText:"Unblock",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx("a",{rel:"noopener noreferrer",children:"Unblock"})})}):e.jsx(B.Item,{icon:e.jsx(Ne,{}),children:e.jsx(ne,{title:e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Are you sure?"}),e.jsx("div",{style:{width:"275px"},children:"Member will be added to Blocked Member(s), and will not be able to access this drive."})]}),onConfirm:()=>Se(o.id,!0),okText:"Block",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx("a",{rel:"noopener noreferrer",children:"Block"})})}),o.isAuthor?e.jsx(B.Item,{icon:e.jsx(je,{}),onClick:()=>Me(o.id,!1),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Make Non Author"})}):e.jsx(B.Item,{icon:e.jsx(je,{}),onClick:()=>Me(o.id,!0),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Make Author"})})]}),overlayStyle:{zIndex:9999},children:e.jsx("a",{className:"ant-dropdown-link",onClick:x=>x.preventDefault(),children:e.jsx(nt,{style:{color:"orange",fontSize:28,fontWeight:"bold"}})})})}),e.jsx("a",{children:e.jsxs(ye,{direction:"vertical",align:"center",style:{width:"100%",justifyContent:"center"},children:[e.jsx(ve,{size:{xs:24,sm:32,md:40,lg:40,xl:40,xxl:80},icon:e.jsx(ot,{}),src:o.user.pic}),e.jsx(ye,{direction:"horizontal",style:{width:"100%",justifyContent:"center"},children:e.jsx(Yt,{style:{width:"100%"},ellipsis:{tooltip:o.user.fullName},children:o.user.fullName})})]})})]})}))}):e.jsx(Te,{severity:"info",sx:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:"No Member Found ..."})})}),e.jsx(me,{title:"Directly Add Member",open:v,onClose:o=>h(o),width:"50vw",children:e.jsx(Ut,{onAdd:Q,randKey:a})}),e.jsx(me,{title:"Adding Members From Classes",centered:!0,open:j,onClose:o=>r(o),width:"50vw",children:e.jsx(Vt,{onAdd:()=>{de(1),m.success("Members Added Successfully")},randKey:a})}),e.jsx(me,{title:"Drive Authors",open:J,destroyOnClose:!0,onClose:o=>X(o),width:"50vw",children:e.jsx(Gt,{driveId:Y.drive,randKey:Math.random(),onModify:ke})}),e.jsx(me,{title:"Drive Blocked Members",open:te,onClose:o=>R(o),width:"50vw",children:e.jsx(_t,{driveId:Y.drive,randKey:Math.random(),onModify:ke})}),e.jsxs(it,{open:le,onClose:(o,x)=>{x!=="backdropClick"&&L(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[e.jsxs(at,{id:"alert-dialog-title",children:["Disconnecting",e.jsx(F,{onClick:()=>L(!1),style:{float:"right"},children:e.jsx(lt,{})})]}),e.jsx(yt,{children:e.jsxs(St,{id:"alert-dialog-description",children:["Are you sure you want to disconnect ",e.jsx("b",{children:(Ae=N==null?void 0:N.user)==null?void 0:Ae.fullName})," from this drive?",e.jsxs(Te,{severity:"warning",style:{marginTop:"10px"},children:["Disconnected Member, will be able to connect again to this drive. if you want to block this member from this drive, please use ",e.jsx("b",{children:"Block"})," option."]})]})}),e.jsxs(ct,{children:[e.jsx(F,{onClick:()=>L(!1),children:"No"}),e.jsx(F,{onClick:()=>H(N.id),autoFocus:!0,children:"Yes"})]})]})]})},xs=()=>(n.useEffect(()=>{document.title=ut.system_name+": Drive Members"},[]),e.jsx(e.Fragment,{children:e.jsx("div",{style:{marginTop:10},children:e.jsx(Ht,{})})}));export{xs as DriveMembersPage};
