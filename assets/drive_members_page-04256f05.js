import{bG as he,bF as ge,bD as oe,w as k,iJ as ze,r as n,bC as fe,b4 as re,j as e,bP as te,bQ as ve,cB as Ee,bI as Ue,bM as xe,bt as ue,iK as Ge,bN as _e,iL as Ve,bO as Ye,iM as we,bH as He,aT as w,u as Ce,aW as K,aP as U,a1 as ie,a8 as W,av as N,g as A,_ as m,cT as Ke,af as Pe,B as De,iN as We,aO as Qe,iO as Je,iP as Xe,aZ as Ze,cM as et,c as tt,cL as st,aN as Z,cz as me,aR as Ne,aU as $,aX as ye,cl as pe,iQ as rt,iR as nt,cN as ot,iS as it,cn as at}from"./index-3f04361d.js";import{I as Re}from"./index.es-4018ea4e.js";import{d as Ie,b as _}from"./data_objects-54e2a4fd.js";import{L as q}from"./index-a638a95e.js";import{P as ne}from"./index-f2761152.js";import{A as be}from"./index-094fff42.js";import{M as G}from"./index-0f874ea4.js";import{S as ae}from"./SearchOutlined-ca526dda.js";import{P as lt}from"./PlusCircleFilled-72045ac9.js";import{D as ct}from"./DeleteOutlined-dd5d4858.js";import{U as Be}from"./UnlockFilled-dd213ee3.js";import{d as dt}from"./data_objects-c5a24b89.js";import{C as ut}from"./index-2ac5d61b.js";import{A as Fe}from"./Alert-0262c3cc.js";import{T as mt}from"./index-9f7d3fdf.js";import{U as Le}from"./UserAddOutlined-9e2c71ab.js";import{L as Te}from"./LockOutlined-843315b4.js";import{I as je}from"./InfoCircleOutlined-95ab394c.js";import{M as pt}from"./MoreOutlined-d3af1bd1.js";import{F as xt}from"./FolderOpenOutlined-6fe92a4c.js";import{E as ht}from"./ExclamationCircleOutlined-dc1ce38f.js";import"./index-926c2b48.js";import"./ActionButton-1fdd8a6f.js";import"./InfoCircleFilled-cf97344e.js";import"./InfoCircleFilled-baaa675e.js";import"./DialogWrap-baa689d5.js";import"./index-0a6ac51b.js";import"./fade-4604162d.js";import"./DeleteOutlined-25685737.js";import"./Skeleton-4286ac29.js";import"./DotChartOutlined-f39c986e.js";import"./index-983365c0.js";import"./EditOutlined-401a1613.js";import"./transButton-953f01b7.js";import"./index-464f1c81.js";function gt(t){return he("MuiDialogContent",t)}ge("MuiDialogContent",["root","dividers"]);const ft=["className","dividers"],vt=t=>{const{classes:s,dividers:i}=t;return ve({root:["root",i&&"dividers"]},gt,s)},bt=oe("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:i}=t;return[s.root,i.dividers&&s.dividers]}})(({theme:t,ownerState:s})=>k({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},s.dividers?{padding:"16px 24px",borderTop:`1px solid ${(t.vars||t).palette.divider}`,borderBottom:`1px solid ${(t.vars||t).palette.divider}`}:{[`.${ze.root} + &`]:{paddingTop:0}})),yt=n.forwardRef(function(s,i){const a=fe({props:s,name:"MuiDialogContent"}),{className:p,dividers:v=!1}=a,h=re(a,ft),j=k({},a,{dividers:v}),r=vt(j);return e.jsx(bt,k({className:te(r.root,p),ownerState:j,ref:i},h))}),jt=yt;function Ct(t){return he("MuiDialogContentText",t)}ge("MuiDialogContentText",["root"]);const It=["children","className"],Mt=t=>{const{classes:s}=t,a=ve({root:["root"]},Ct,s);return k({},s,a)},St=oe(Ee,{shouldForwardProp:t=>Ue(t)||t==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(t,s)=>s.root})({}),kt=n.forwardRef(function(s,i){const a=fe({props:s,name:"MuiDialogContentText"}),{className:p}=a,v=re(a,It),h=Mt(v);return e.jsx(St,k({component:"p",variant:"body1",color:"text.secondary",ref:i,ownerState:v,className:te(h.root,p)},a,{classes:h}))}),At=kt;function wt(t){return he("MuiListItem",t)}const Dt=ge("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),ee=Dt;function Nt(t){return he("MuiListItemSecondaryAction",t)}ge("MuiListItemSecondaryAction",["root","disableGutters"]);const Ft=["className"],Lt=t=>{const{disableGutters:s,classes:i}=t;return ve({root:["root",s&&"disableGutters"]},Nt,i)},Tt=oe("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:i}=t;return[s.root,i.disableGutters&&s.disableGutters]}})(({ownerState:t})=>k({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})),Oe=n.forwardRef(function(s,i){const a=fe({props:s,name:"MuiListItemSecondaryAction"}),{className:p}=a,v=re(a,Ft),h=n.useContext(xe),j=k({},a,{disableGutters:h.disableGutters}),r=Lt(j);return e.jsx(Tt,k({className:te(r.root,p),ownerState:j,ref:i},v))});Oe.muiName="ListItemSecondaryAction";const Pt=Oe,Rt=["className"],Bt=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],Ot=(t,s)=>{const{ownerState:i}=t;return[s.root,i.dense&&s.dense,i.alignItems==="flex-start"&&s.alignItemsFlexStart,i.divider&&s.divider,!i.disableGutters&&s.gutters,!i.disablePadding&&s.padding,i.button&&s.button,i.hasSecondaryAction&&s.secondaryAction]},$t=t=>{const{alignItems:s,button:i,classes:a,dense:p,disabled:v,disableGutters:h,disablePadding:j,divider:r,hasSecondaryAction:d,selected:u}=t;return ve({root:["root",p&&"dense",!h&&"gutters",!j&&"padding",r&&"divider",v&&"disabled",i&&"button",s==="flex-start"&&"alignItemsFlexStart",d&&"secondaryAction",u&&"selected"],container:["container"]},wt,a)},qt=oe("div",{name:"MuiListItem",slot:"Root",overridesResolver:Ot})(({theme:t,ownerState:s})=>k({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!s.disablePadding&&k({paddingTop:8,paddingBottom:8},s.dense&&{paddingTop:4,paddingBottom:4},!s.disableGutters&&{paddingLeft:16,paddingRight:16},!!s.secondaryAction&&{paddingRight:48}),!!s.secondaryAction&&{[`& > .${Ge.root}`]:{paddingRight:48}},{[`&.${ee.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${ee.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:ue(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${ee.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:ue(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${ee.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},s.alignItems==="flex-start"&&{alignItems:"flex-start"},s.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},s.button&&{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${ee.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:ue(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:ue(t.palette.primary.main,t.palette.action.selectedOpacity)}}},s.hasSecondaryAction&&{paddingRight:48})),zt=oe("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,s)=>s.container})({position:"relative"}),Et=n.forwardRef(function(s,i){const a=fe({props:s,name:"MuiListItem"}),{alignItems:p="center",autoFocus:v=!1,button:h=!1,children:j,className:r,component:d,components:u={},componentsProps:l={},ContainerComponent:b="li",ContainerProps:{className:F}={},dense:z=!1,disabled:E=!1,disableGutters:C=!1,disablePadding:D=!1,divider:T=!1,focusVisibleClassName:P,secondaryAction:g,selected:I=!1,slotProps:c={},slots:f={}}=a,M=re(a.ContainerProps,Rt),V=re(a,Bt),Q=n.useContext(xe),J=n.useMemo(()=>({dense:z||Q.dense||!1,alignItems:p,disableGutters:C}),[p,Q.dense,z,C]),se=n.useRef(null);_e(()=>{v&&se.current&&se.current.focus()},[v]);const R=n.Children.toArray(j),le=R.length&&Ve(R[R.length-1],["ListItemSecondaryAction"]),L=k({},a,{alignItems:p,autoFocus:v,button:h,dense:J.dense,disabled:E,disableGutters:C,disablePadding:D,divider:T,hasSecondaryAction:le,selected:I}),Y=$t(L),ce=Ye(se,i),X=f.root||u.Root||qt,H=c.root||l.root||{},B=k({className:te(Y.root,H.className,r),disabled:E},V);let O=d||"li";return h&&(B.component=d||"div",B.focusVisibleClassName=te(ee.focusVisible,P),O=He),le?(O=!B.component&&!d?"div":O,b==="li"&&(O==="li"?O="div":B.component==="li"&&(B.component="div")),e.jsx(xe.Provider,{value:J,children:e.jsxs(zt,k({as:b,className:te(Y.container,F),ref:ce,ownerState:L},M,{children:[e.jsx(X,k({},H,!we(X)&&{as:O,ownerState:k({},L,H.ownerState)},B,{children:R})),R.pop()]}))})):e.jsx(xe.Provider,{value:J,children:e.jsxs(X,k({},H,{as:O,ref:ce},!we(X)&&{ownerState:k({},L,H.ownerState)},B,{children:[R,g&&e.jsx(Pt,{children:g})]}))})}),Ut=Et,Gt=t=>{const[s,i]=n.useState(),[a,p]=n.useState([]),[v,h]=n.useState(!0),[j,r]=n.useState(1),[d,u]=n.useState(0),[l,b]=n.useState(0),[F,z]=n.useState(!0),[E]=w.useForm(),C=Ce(),D=async g=>{const{data:I}=await A.custom({url:"",method:"get",meta:{operation:"drive",variables:{id:{value:g,type:"Int",required:!0}},fields:Ie}}).catch(()=>(m.error("Error occured while fetching drive"),{data:null})).then(c=>c);I&&i(I)},T=async g=>{const{data:I}=await A.custom({url:"",method:"post",meta:{operation:"directConnectMemberDrive",variables:{driveId:{value:parseInt(C.drive.toString()),type:"Int",required:!0},userId:{value:parseInt(g.toString()),type:"Int",required:!0}},fields:["success","message",{member:_}]}}).catch(()=>(m.error("Error occured while connecting member"),{data:null})).then(c=>c);I&&(I.success?(m.success(I.message),t.onAdd(I.member),p(a.filter(c=>c.id!==g))):m.error(I.message)),G.destroyAll()},P=async(g,I="",c=!1)=>{const{data:f}=await A.custom({url:"",method:"get",meta:{operation:"membersToConnectDrive",variables:{driveId:{value:parseInt(C.drive.toString()),type:"Int",required:!0},page:{value:g,type:"Int",required:!0},key:{value:I,type:"String",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:Ke}]}}).catch(()=>(m.error("Error occured while fetching members"),{data:null})).then(M=>M);f&&(b(f.total),r(f.page+1),u(f.pages),z(f.hasNext),(I.length>0||I.length===0&&c||g===1)&&p(f.results),f.results.length>0&&!c&&g!==1&&p(a.concat(f.results))),h(!1)};return n.useEffect(()=>{D(parseInt(C.drive.toString())),P(1)},[t.randKey]),e.jsxs(e.Fragment,{children:[e.jsx(K,{children:e.jsx(U,{span:24,children:e.jsx(w,{layout:"vertical",form:E,onFinish:g=>P(0,g.key,!0),children:e.jsx(w.Item,{name:"key",children:e.jsx(ie,{size:"large",placeholder:"Search file(s)...",prefix:e.jsx(ae,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx(W,{spinning:v,children:e.jsx(Re,{dataLength:l,next:()=>P(j),hasMore:F,height:"76vh",loader:e.jsx(e.Fragment,{children:e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(W,{})})}),endMessage:e.jsx("p",{style:{textAlign:"center",display:a.length>0?"block":"none"},children:e.jsx("b",{children:"Yay! You have seen it all"})}),children:e.jsx(q,{itemLayout:"horizontal",dataSource:a,renderItem:g=>e.jsx("div",{style:{background:"white",marginBottom:5,paddingLeft:10,paddingTop:10},children:e.jsx(q.Item,{actions:[e.jsx(ne,{placement:"top",title:"Adding Member",onConfirm:()=>T(g.id),okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(N,{icon:e.jsx(lt,{})})})],children:e.jsx(q.Item.Meta,{avatar:e.jsx(be,{src:g.pic}),title:g.fullName,description:e.jsx(e.Fragment,{children:e.jsx("p",{children:g.email})})})},"drive-file-"+g.id)})})})})]})},_t=t=>{const[s,i]=n.useState([]),[a,p]=n.useState(!0),[v]=w.useForm(),h=async(r,d="",u=20)=>{p(!0);const{data:l}=await A.custom({url:"",method:"get",meta:{operation:"driveAuthors",variables:{driveId:{value:parseInt(t.driveId.toString()),type:"Int",required:!0},page:{value:r,type:"Int",required:!0},key:{value:d,type:"String",required:!1},pageSize:{value:u,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:_}]}}).catch(()=>(m.error("Error occured while fetching Authors"),{data:null})).then(b=>b);p(!1),l&&i([...s,...l.results]),p(!1)},j=async(r,d)=>{const{data:u}=await A.custom({url:"",method:"post",meta:{operation:"driveMemberAuthor",variables:{id:{value:r,type:"Int",required:!0},author:{value:d,type:"Boolean",required:!0}},fields:["success","message",{driveMember:_}]}}).catch(()=>(m.error("Error in making Author"),{data:null})).then(l=>l);if(u)if(u.success){m.success(u.message);const l=s.filter(b=>b.id!==r);i(l),t.onModify(u.driveMember)}else m.error(u.message);G.destroyAll()};return n.useEffect(()=>{h(1,"",20)},[t.driveId]),a?e.jsx(e.Fragment,{children:e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(W,{})})}):e.jsxs(e.Fragment,{children:[e.jsx(K,{children:e.jsx(U,{span:20,children:e.jsx(w,{layout:"vertical",form:v,onFinish:r=>{h(1,r.key,20)},children:e.jsx(w.Item,{name:"key",children:e.jsx(ie,{size:"large",placeholder:"Search Author(s)...",prefix:e.jsx(ae,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx(q,{itemLayout:"horizontal",dataSource:s,renderItem:r=>{var d,u,l;return e.jsx("div",{style:{background:"white",marginBottom:5,paddingLeft:10,paddingTop:10},children:e.jsx(q.Item,{actions:[e.jsx(ne,{title:"Remove Author?",onConfirm:()=>j(r.id,!1),okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(Pe,{title:"Click to Remove Author",color:"green",children:e.jsx(N,{icon:e.jsx(ct,{}),size:"large"})})})],children:e.jsx(q.Item.Meta,{avatar:e.jsx(be,{src:(d=r==null?void 0:r.user)==null?void 0:d.pic}),title:e.jsx("a",{children:(u=r==null?void 0:r.user)==null?void 0:u.fullName}),description:e.jsx(e.Fragment,{children:e.jsx("p",{children:(l=r==null?void 0:r.user)==null?void 0:l.email})})})},"author-item-"+r.id)})}})]})},Vt=t=>{const[s,i]=n.useState([]),[a,p]=n.useState(!0),[v]=w.useForm(),h=async(r,d="",u=20)=>{p(!0);const{data:l}=await A.custom({url:"",method:"get",meta:{operation:"blockedDriveMembers",variables:{driveId:{value:parseInt(t.driveId.toString()),type:"Int",required:!0},page:{value:r,type:"Int",required:!0},key:{value:d,type:"String",required:!1},pageSize:{value:u,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:_}]}}).catch(()=>(m.error("Error occured while fetching Authors"),{data:null})).then(b=>b);p(!1),l&&i([...s,...l.results]),p(!1)},j=async(r,d)=>{const{data:u}=await A.custom({url:"",method:"post",meta:{operation:"blockUnblockDriveMember",variables:{driveMemberId:{value:r,type:"Int",required:!0},blocked:{value:d,type:"Boolean",required:!0}},fields:["success","message",{driveMember:_}]}}).catch(()=>(m.error("Error occured while blocking/unblocking drive member"),{data:null})).then(l=>l);if(u)if(u.success){m.success(u.message);const l=s.filter(b=>b.id!==r);i(l),t.onModify(u.driveMember)}else m.error(u.message);G.destroyAll()};return n.useEffect(()=>{h(1,"",20)},[t.driveId]),a?e.jsx(e.Fragment,{children:e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(W,{})})}):e.jsxs(e.Fragment,{children:[e.jsx(K,{children:e.jsx(U,{span:20,children:e.jsx(w,{layout:"vertical",form:v,onFinish:r=>{h(1,r.key,20)},children:e.jsx(w.Item,{name:"key",children:e.jsx(ie,{size:"large",placeholder:"Search Author(s)...",prefix:e.jsx(ae,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx(q,{itemLayout:"horizontal",dataSource:s,renderItem:r=>{var d,u,l;return e.jsx("div",{style:{background:"white",marginBottom:5,paddingLeft:10,paddingTop:10},children:e.jsx(q.Item,{actions:[e.jsx(ne,{title:"Unblock Drive Member?",onConfirm:()=>j(r.id,!1),okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(Pe,{title:"Click to Unblock Drive Member",color:"green",children:e.jsx(N,{icon:e.jsx(Be,{}),size:"large"})})})],children:e.jsx(q.Item.Meta,{avatar:e.jsx(be,{src:(d=r==null?void 0:r.user)==null?void 0:d.pic}),title:e.jsx("a",{children:(u=r==null?void 0:r.user)==null?void 0:u.fullName}),description:e.jsx(e.Fragment,{children:e.jsx("p",{children:(l=r==null?void 0:r.user)==null?void 0:l.email})})})},"author-item-"+r.id)})}})]})},Yt=t=>{const[s,i]=n.useState(),[a,p]=n.useState([]),[v,h]=n.useState(!0),[j,r]=n.useState(1),[d,u]=n.useState(0),[l,b]=n.useState(0),[F,z]=n.useState(!0),[E]=w.useForm(),[C,D]=n.useState([0]),T=Ce(),P=async c=>{const{data:f}=await A.custom({url:"",method:"get",meta:{operation:"drive",variables:{id:{value:c,type:"Int",required:!0}},fields:Ie}}).catch(()=>({data:null})).then(M=>M);f&&i(f)},g=async()=>{const{data:c}=await A.custom({url:"",method:"post",meta:{operation:"addClassMembersToDrive",variables:{driveId:{value:parseInt(T.drive.toString()),type:"Int",required:!0},classesIds:{value:C.map(f=>parseInt(f.toString())),type:"[Int]",required:!0}},fields:["success","message"]}}).catch(()=>(m.error("Error occured while connecting member"),{data:null})).then(f=>f);c&&(c.success?(D([0]),t.onAdd()):m.error(c.message)),G.destroyAll()},I=async(c,f="")=>{const{data:M}=await A.custom({url:"",method:"get",meta:{operation:"myMadarasaAuthored",variables:{page:{value:c,type:"Int",required:!0},key:{value:f,type:"String",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:dt}]}}).catch(()=>(m.error("Error occured while fetching members"),{data:null})).then(V=>V);M&&(b(M.total),r(M.page+1),u(M.pages),z(M.hasNext),p([...a,...M.results.filter(V=>a.findIndex(Q=>Q.id===V.id)===-1)])),h(!1)};return n.useEffect(()=>{P(parseInt(T.drive.toString())),I(1)},[t.randKey]),e.jsxs(e.Fragment,{children:[e.jsx(K,{children:e.jsx(U,{span:24,children:e.jsx(w,{layout:"vertical",form:E,onFinish:c=>I(0,c.key),children:e.jsx(w.Item,{name:"key",children:e.jsx(ie,{size:"large",placeholder:"Search Classes...",prefix:e.jsx(ae,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx(De,{sx:{display:"flex",justifyContent:"flex-end",p:2},children:C.length>1&&e.jsx(N,{onClick:()=>g(),children:"Add"})}),e.jsx(De,{sx:{width:"100%",bgcolor:"background.paper",position:"relative",overflow:"auto",maxHeight:"60vh"},children:e.jsx(W,{spinning:v,children:e.jsx(We,{sx:{width:"100%",bgcolor:"background.paper"},children:a.map(c=>{const f=`checkbox-list-label-${c.id}`;return e.jsxs(e.Fragment,{children:[e.jsx(Ut,{secondaryAction:e.jsx(Qe,{onChange:()=>{C.indexOf(c.id)!==-1?D(C.filter(M=>M!==c.id)):D([...C,c.id])},checked:C.indexOf(c.id)!==-1}),disablePadding:!0,children:e.jsx(Je,{role:void 0,onClick:()=>{C.indexOf(c.id)!==-1?D(C.filter(M=>M!==c.id)):D([...C,c.id])},dense:!0,children:e.jsx(Xe,{id:f,primary:e.jsxs(e.Fragment,{children:[c.name,e.jsx(Ze,{style:{marginLeft:10},children:c.code})]})})})},c.id),e.jsx(et,{variant:"inset"})]})})})})}),F&&e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(N,{onClick:()=>{I(j)},children:"Load More"})})]})},{Text:Ht}=mt,Kt=t=>{var Ae;const[s,i]=n.useState(!1),[a,p]=n.useState(0),[v,h]=n.useState(!1),[j,r]=n.useState(!1),[d,u]=n.useState(),[l,b]=n.useState([]),[F,z]=n.useState({}),[E,C]=n.useState(!0),[D,T]=n.useState(1),[P,g]=n.useState(0),[I,c]=n.useState(0),[f,M]=n.useState(!0),[V]=w.useForm(),[Q,J]=n.useState(!1),[se,R]=n.useState(!1),[le,L]=n.useState(!1);tt();const Y=Ce(),ce=async()=>{p(Math.random()),h(!0)},X=async o=>{b([o,...l])},H=async o=>{const{data:x}=await A.custom({url:"",method:"post",meta:{operation:"deleteDriveMember",variables:{id:{value:o,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(m.error("Error in Deleting Drive Member"),{data:null})).then(y=>y);x&&(x.success?(m.success(x.message),b(l.filter(y=>y.id!==o)),L(!1)):m.error(x.message)),G.destroyAll()},B=o=>{z(o),L(!0)},O=async(o,x)=>{const{data:y}=await A.custom({url:"",method:"post",meta:{operation:"driveMemberAuthor",variables:{id:{value:o,type:"Int",required:!0},author:{value:x,type:"Boolean",required:!0}},fields:["success","message",{driveMember:_}]}}).catch(()=>(m.error("Error in making Author"),{data:null})).then(S=>S);y&&(y.success?(m.success(y.message),b(l.map(S=>S.id===o?y.driveMember:S))):m.error(y.message)),G.destroyAll()},Me=(o,x)=>{G.confirm({title:"Confirm",icon:e.jsx(ht,{}),content:x?"Removing Author ....":"Making Author ....",okText:"Ok",cancelText:"Cancel",onOk:()=>O(o,x)})},Se=o=>{b(l.map(x=>x.id===o.id?o:x))},de=async(o,x="",y=!1)=>{const{data:S}=await A.custom({url:"",method:"get",meta:{operation:"driveMembers",variables:{page:{value:o,type:"Int",required:!0},key:{value:x,type:"String",required:!1},id:{value:parseInt(Y.drive.toString()),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:_}]}}).catch(()=>(m.error("Error in Getting Drive Members"),{data:null})).then(qe=>qe);S&&(g(S.total),c(S.pages),T(S.page+1),M(S.hasNext),(x.length>0||x.length===0&&y)&&b(S.results),S.results.length>0&&!y&&(b(l.concat(S.results)),T(o+25))),C(!1)},$e=async o=>{const{data:x}=await A.custom({url:"",method:"get",meta:{operation:"drive",variables:{id:{value:o,type:"Int",required:!0}},fields:Ie}}).catch(()=>(m.error("Error in Getting Drive"),{data:null})).then(y=>y);x&&(u(x),i(!0))},ke=async(o,x)=>{const{data:y}=await A.custom({url:"",method:"post",meta:{operation:"blockUnblockDriveMember",variables:{driveMemberId:{value:o,type:"Int",required:!0},blocked:{value:x,type:"Boolean",required:!0}},fields:["success","message",{driveMember:_}]}}).catch(()=>(m.error("Error occured while blocking/unblocking drive member"),{data:null})).then(S=>S);y&&(y.success?(m.success(y.message),b(l.map(S=>S.id===y.driveMember.id?y.driveMember:S))):m.error(y.message)),G.destroyAll()};return n.useEffect(()=>{$e(parseInt(Y.drive.toString())),de(D)},[]),e.jsxs(e.Fragment,{children:[e.jsx(K,{children:e.jsx(U,{span:24,style:{display:"flex",justifyContent:"space-between",marginBottom:10},children:e.jsx(st,{children:e.jsxs(Z,{children:[e.jsx(Z.Item,{children:e.jsx(me,{to:"/",children:"Home"})}),e.jsx(Z.Item,{children:e.jsx(me,{to:"/odrive",children:"Odrive"})}),e.jsx(Z.Item,{children:e.jsx(me,{to:"/odrive/drives",children:"Drives"})}),e.jsx(Z.Item,{children:e.jsxs(me,{to:"/odrive/drive/"+(d==null?void 0:d.id)+"/"+(d==null?void 0:d.code)+"/files",children:[d==null?void 0:d.name," - Drive"]})}),e.jsx(Z.Item,{children:"Member(s)"})]})})})}),e.jsxs(K,{children:[e.jsx(U,{span:12,children:e.jsx(w,{layout:"vertical",form:V,onFinish:o=>de(0,o.key,!0),children:e.jsx(w.Item,{name:"key",children:e.jsx(ie,{size:"large",placeholder:"Search member(s)...",prefix:e.jsx(ae,{}),autoComplete:"off",allowClear:!0})})})}),e.jsxs(U,{span:12,style:{display:"flex",justifyContent:"flex-end"},children:[e.jsx(N,{size:"large",icon:e.jsx(Le,{}),onClick:()=>J(!0),children:"Drive Authors"}),e.jsx(N,{size:"large",icon:e.jsx(Te,{}),onClick:()=>R(!0),children:"Blocked Members"}),e.jsx(Ne,{disabled:!s,trigger:["click"],overlay:e.jsxs($,{children:[e.jsx($.Item,{children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",onClick:()=>ce(),children:"Add Directly"})}),e.jsx($.Item,{children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",onClick:()=>r(!0),children:"Add From Classes"})})]}),placement:"bottomLeft",arrow:!0,overlayStyle:{zIndex:9999},children:e.jsx(N,{size:"large",icon:e.jsx(Le,{}),children:"Add Member"})})]})]}),e.jsx(W,{spinning:E,children:e.jsx(Re,{dataLength:P,next:()=>de(D),hasMore:f,loader:e.jsx(e.Fragment,{children:l.length>0?e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(W,{})}):e.jsx(e.Fragment,{})}),endMessage:e.jsx("p",{style:{textAlign:"center",display:l.length>0?"block":"none"},children:e.jsx("b",{children:"Yay! You have seen it all"})}),children:l.length>0?e.jsx(K,{align:"top",children:l.map(o=>e.jsx(U,{span:6,children:e.jsxs(ut,{hoverable:o.isActive,style:{marginRight:10,marginBottom:5,borderColor:o.isAuthor?"green":"white"},children:[e.jsx(ye,{style:{right:0,position:"absolute"},children:e.jsx(Ne,{trigger:["click"],overlay:e.jsxs($,{children:[e.jsx($.Item,{icon:e.jsx(je,{}),onClick:()=>B(o),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Disconnect"})}),o.blocked?e.jsx($.Item,{icon:e.jsx(Be,{}),children:e.jsx(ne,{title:e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Are you sure?"}),e.jsx("div",{style:{width:"275px"},children:"Member will be Removed From Blocked Member(s), and will be able to access this drive."})]}),onConfirm:()=>ke(o.id,!1),okText:"Unblock",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx("a",{rel:"noopener noreferrer",children:"Unblock"})})}):e.jsx($.Item,{icon:e.jsx(Te,{}),children:e.jsx(ne,{title:e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Are you sure?"}),e.jsx("div",{style:{width:"275px"},children:"Member will be added to Blocked Member(s), and will not be able to access this drive."})]}),onConfirm:()=>ke(o.id,!0),okText:"Block",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx("a",{rel:"noopener noreferrer",children:"Block"})})}),o.isAuthor?e.jsx($.Item,{icon:e.jsx(je,{}),onClick:()=>Me(o.id,!1),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Make Non Author"})}):e.jsx($.Item,{icon:e.jsx(je,{}),onClick:()=>Me(o.id,!0),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Make Author"})})]}),overlayStyle:{zIndex:9999},children:e.jsx("a",{className:"ant-dropdown-link",onClick:x=>x.preventDefault(),children:e.jsx(pt,{style:{color:"orange",fontSize:28,fontWeight:"bold"}})})})}),e.jsx("a",{children:e.jsxs(ye,{direction:"vertical",align:"center",style:{width:"100%",justifyContent:"center"},children:[e.jsx(be,{size:{xs:24,sm:32,md:40,lg:40,xl:40,xxl:80},icon:e.jsx(xt,{}),src:o.user.pic}),e.jsx(ye,{direction:"horizontal",style:{width:"100%",justifyContent:"center"},children:e.jsx(Ht,{style:{width:"100%"},ellipsis:{tooltip:o.user.fullName},children:o.user.fullName})})]})})]})}))}):e.jsx(Fe,{severity:"info",sx:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:"No Member Found ..."})})}),e.jsx(pe,{title:"Directly Add Member",open:v,onClose:o=>h(o),width:"50vw",children:e.jsx(Gt,{onAdd:X,randKey:a})}),e.jsx(pe,{title:"Adding Members From Classes",centered:!0,open:j,onClose:o=>r(o),width:"50vw",children:e.jsx(Yt,{onAdd:()=>{de(1),m.success("Members Added Successfully")},randKey:a})}),e.jsx(pe,{title:"Drive Authors",open:Q,destroyOnClose:!0,onClose:o=>J(o),width:"50vw",children:e.jsx(_t,{driveId:Y.drive,randKey:Math.random(),onModify:Se})}),e.jsx(pe,{title:"Drive Blocked Members",open:se,onClose:o=>R(o),width:"50vw",children:e.jsx(Vt,{driveId:Y.drive,randKey:Math.random(),onModify:Se})}),e.jsxs(rt,{open:le,onClose:(o,x)=>{x!=="backdropClick"&&L(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[e.jsxs(nt,{id:"alert-dialog-title",children:["Disconnecting",e.jsx(N,{onClick:()=>L(!1),style:{float:"right"},children:e.jsx(ot,{})})]}),e.jsx(jt,{children:e.jsxs(At,{id:"alert-dialog-description",children:["Are you sure you want to disconnect ",e.jsx("b",{children:(Ae=F==null?void 0:F.user)==null?void 0:Ae.fullName})," ","from this drive?",e.jsxs(Fe,{severity:"warning",style:{marginTop:"10px"},children:["Disconnected Member, will be able to connect again to this drive. if you want to block this member from this drive, please use"," ",e.jsx("b",{children:"Block"})," option."]})]})}),e.jsxs(it,{children:[e.jsx(N,{onClick:()=>L(!1),children:"No"}),e.jsx(N,{onClick:()=>H(F.id),autoFocus:!0,children:"Yes"})]})]})]})},Ns=()=>(n.useEffect(()=>{document.title=at.system_name+": Drive Members"},[]),e.jsx(e.Fragment,{children:e.jsx("div",{style:{marginTop:10},children:e.jsx(Kt,{})})}));export{Ns as DriveMembersPage};
