import{ea as xe,eb as he,ec as oe,dw as S,ed as ze,r as n,ee as ge,ef as re,j as e,h as ee,eg as ve,aj as Ee,eh as Ue,ei as pe,ej as ue,ek as Ge,el as _e,em as Ve,en as Ye,eo as we,ep as He,dm as Ke,F as w,b6 as Ce,y as K,z as U,I as ae,S as ie,s as W,a5 as O,a6 as ne,B as F,bx as We,A as fe,J as A,aV as Ie,K as m,eq as _,ar as G,b1 as Je,x as Pe,a9 as Ze,b3 as qe,u as De,er as Qe,ag as Xe,es as et,et as tt,T as st,ak as rt,aw as nt,q as ot,au as ye,cq as Fe,b4 as Ne,Z as Le,$ as B,C as at,v as be,a0 as je,a1 as it,ao as lt,ap as Te,H as me,eu as ct,ev as dt,ew as ut,av as mt,as as pt}from"./index-e1c2324f.js";import{I as Re}from"./index.es-a238e733.js";import{B as se}from"./Breadcrumb-86dedde2.js";function xt(t){return xe("MuiDialogContent",t)}he("MuiDialogContent",["root","dividers"]);const ht=["className","dividers"],gt=t=>{const{classes:s,dividers:a}=t;return ve({root:["root",a&&"dividers"]},xt,s)},vt=oe("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:a}=t;return[s.root,a.dividers&&s.dividers]}})(({theme:t,ownerState:s})=>S({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},s.dividers?{padding:"16px 24px",borderTop:`1px solid ${(t.vars||t).palette.divider}`,borderBottom:`1px solid ${(t.vars||t).palette.divider}`}:{[`.${ze.root} + &`]:{paddingTop:0}})),ft=n.forwardRef(function(s,a){const i=ge({props:s,name:"MuiDialogContent"}),{className:p,dividers:f=!1}=i,h=re(i,ht),j=S({},i,{dividers:f}),r=gt(j);return e.jsx(vt,S({className:ee(r.root,p),ownerState:j,ref:a},h))}),yt=ft;function bt(t){return xe("MuiDialogContentText",t)}he("MuiDialogContentText",["root"]);const jt=["children","className"],Ct=t=>{const{classes:s}=t,i=ve({root:["root"]},bt,s);return S({},s,i)},It=oe(Ee,{shouldForwardProp:t=>Ue(t)||t==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(t,s)=>s.root})({}),Mt=n.forwardRef(function(s,a){const i=ge({props:s,name:"MuiDialogContentText"}),{className:p}=i,f=re(i,jt),h=Ct(f);return e.jsx(It,S({component:"p",variant:"body1",color:"text.secondary",ref:a,ownerState:f,className:ee(h.root,p)},i,{classes:h}))}),kt=Mt;function St(t){return xe("MuiListItem",t)}const At=he("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),X=At;function wt(t){return xe("MuiListItemSecondaryAction",t)}he("MuiListItemSecondaryAction",["root","disableGutters"]);const Dt=["className"],Ft=t=>{const{disableGutters:s,classes:a}=t;return ve({root:["root",s&&"disableGutters"]},wt,a)},Nt=oe("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:a}=t;return[s.root,a.disableGutters&&s.disableGutters]}})(({ownerState:t})=>S({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})),$e=n.forwardRef(function(s,a){const i=ge({props:s,name:"MuiListItemSecondaryAction"}),{className:p}=i,f=re(i,Dt),h=n.useContext(pe),j=S({},i,{disableGutters:h.disableGutters}),r=Ft(j);return e.jsx(Nt,S({className:ee(r.root,p),ownerState:j,ref:a},f))});$e.muiName="ListItemSecondaryAction";const Lt=$e,Tt=["className"],Pt=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],qt=(t,s)=>{const{ownerState:a}=t;return[s.root,a.dense&&s.dense,a.alignItems==="flex-start"&&s.alignItemsFlexStart,a.divider&&s.divider,!a.disableGutters&&s.gutters,!a.disablePadding&&s.padding,a.button&&s.button,a.hasSecondaryAction&&s.secondaryAction]},Rt=t=>{const{alignItems:s,button:a,classes:i,dense:p,disabled:f,disableGutters:h,disablePadding:j,divider:r,hasSecondaryAction:d,selected:u}=t;return ve({root:["root",p&&"dense",!h&&"gutters",!j&&"padding",r&&"divider",f&&"disabled",a&&"button",s==="flex-start"&&"alignItemsFlexStart",d&&"secondaryAction",u&&"selected"],container:["container"]},St,i)},$t=oe("div",{name:"MuiListItem",slot:"Root",overridesResolver:qt})(({theme:t,ownerState:s})=>S({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!s.disablePadding&&S({paddingTop:8,paddingBottom:8},s.dense&&{paddingTop:4,paddingBottom:4},!s.disableGutters&&{paddingLeft:16,paddingRight:16},!!s.secondaryAction&&{paddingRight:48}),!!s.secondaryAction&&{[`& > .${Ge.root}`]:{paddingRight:48}},{[`&.${X.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${X.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:ue(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${X.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:ue(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${X.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},s.alignItems==="flex-start"&&{alignItems:"flex-start"},s.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},s.button&&{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${X.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:ue(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:ue(t.palette.primary.main,t.palette.action.selectedOpacity)}}},s.hasSecondaryAction&&{paddingRight:48})),Bt=oe("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,s)=>s.container})({position:"relative"}),Ot=n.forwardRef(function(s,a){const i=ge({props:s,name:"MuiListItem"}),{alignItems:p="center",autoFocus:f=!1,button:h=!1,children:j,className:r,component:d,components:u={},componentsProps:l={},ContainerComponent:y="li",ContainerProps:{className:N}={},dense:z=!1,disabled:E=!1,disableGutters:C=!1,disablePadding:D=!1,divider:T=!1,focusVisibleClassName:P,secondaryAction:g,selected:I=!1,slotProps:c={},slots:v={}}=i,M=re(i.ContainerProps,Tt),V=re(i,Pt),J=n.useContext(pe),Z=n.useMemo(()=>({dense:z||J.dense||!1,alignItems:p,disableGutters:C}),[p,J.dense,z,C]),te=n.useRef(null);_e(()=>{f&&te.current&&te.current.focus()},[f]);const q=n.Children.toArray(j),le=q.length&&Ve(q[q.length-1],["ListItemSecondaryAction"]),L=S({},i,{alignItems:p,autoFocus:f,button:h,dense:Z.dense,disabled:E,disableGutters:C,disablePadding:D,divider:T,hasSecondaryAction:le,selected:I}),Y=Rt(L),ce=Ye(te,a),Q=v.root||u.Root||$t,H=c.root||l.root||{},R=S({className:ee(Y.root,H.className,r),disabled:E},V);let $=d||"li";return h&&(R.component=d||"div",R.focusVisibleClassName=ee(X.focusVisible,P),$=He),le?($=!R.component&&!d?"div":$,y==="li"&&($==="li"?$="div":R.component==="li"&&(R.component="div")),e.jsx(pe.Provider,{value:Z,children:e.jsxs(Bt,S({as:y,className:ee(Y.container,N),ref:ce,ownerState:L},M,{children:[e.jsx(Q,S({},H,!we(Q)&&{as:$,ownerState:S({},L,H.ownerState)},R,{children:q})),q.pop()]}))})):e.jsx(pe.Provider,{value:Z,children:e.jsxs(Q,S({},H,{as:$,ref:ce},!we(Q)&&{ownerState:S({},L,H.ownerState)},R,{children:[q,g&&e.jsx(Lt,{children:g})]}))})}),zt=Ot,Et=Ke(e.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}),"CloseOutlined"),Ut=t=>{const[s,a]=n.useState(),[i,p]=n.useState([]),[f,h]=n.useState(!0),[j,r]=n.useState(1),[d,u]=n.useState(0),[l,y]=n.useState(0),[N,z]=n.useState(!0),[E]=w.useForm(),C=Ce(),D=async g=>{const{data:I}=await A.custom({url:"",method:"get",meta:{operation:"drive",variables:{id:{value:g,type:"Int",required:!0}},fields:Ie}}).catch(()=>(m.error("Error occured while fetching drive"),{data:null})).then(c=>c);I&&a(I)},T=async g=>{const{data:I}=await A.custom({url:"",method:"post",meta:{operation:"directConnectMemberDrive",variables:{driveId:{value:parseInt(C.drive.toString()),type:"Int",required:!0},userId:{value:parseInt(g.toString()),type:"Int",required:!0}},fields:["success","message",{member:_}]}}).catch(()=>(m.error("Error occured while connecting member"),{data:null})).then(c=>c);I&&(I.success?(m.success(I.message),t.onAdd(I.member),p(i.filter(c=>c.id!==g))):m.error(I.message)),G.destroyAll()},P=async(g,I="",c=!1)=>{const{data:v}=await A.custom({url:"",method:"get",meta:{operation:"membersToConnectDrive",variables:{driveId:{value:parseInt(C.drive.toString()),type:"Int",required:!0},page:{value:g,type:"Int",required:!0},key:{value:I,type:"String",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:Je}]}}).catch(()=>(m.error("Error occured while fetching members"),{data:null})).then(M=>M);v&&(y(v.total),r(v.page+1),u(v.pages),z(v.hasNext),(I.length>0||I.length===0&&c||g===1)&&p(v.results),v.results.length>0&&!c&&g!==1&&p(i.concat(v.results))),h(!1)};return n.useEffect(()=>{D(parseInt(C.drive.toString())),P(1)},[t.randKey]),e.jsxs(e.Fragment,{children:[e.jsx(K,{children:e.jsx(U,{span:24,children:e.jsx(w,{layout:"vertical",form:E,onFinish:g=>P(0,g.key,!0),children:e.jsx(w.Item,{name:"key",children:e.jsx(ae,{size:"large",placeholder:"Search file(s)...",prefix:e.jsx(ie,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx(W,{spinning:f,children:e.jsx(Re,{dataLength:l,next:()=>P(j),hasMore:N,height:"76vh",loader:e.jsx(e.Fragment,{children:e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(W,{})})}),endMessage:e.jsx("p",{style:{textAlign:"center",display:i.length>0?"block":"none"},children:e.jsx("b",{children:"Yay! You have seen it all"})}),children:e.jsx(O,{itemLayout:"horizontal",dataSource:i,renderItem:g=>e.jsx("div",{style:{background:"white",marginBottom:5,paddingLeft:10,paddingTop:10},children:e.jsx(O.Item,{actions:[e.jsx(ne,{placement:"top",title:"Adding Member",onConfirm:()=>T(g.id),okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(F,{icon:e.jsx(We,{})})})],children:e.jsx(O.Item.Meta,{avatar:e.jsx(fe,{src:g.pic}),title:g.fullName,description:e.jsx(e.Fragment,{children:e.jsx("p",{children:g.email})})})},"drive-file-"+g.id)})})})})]})},Gt=t=>{const[s,a]=n.useState([]),[i,p]=n.useState(!0),[f]=w.useForm(),h=async(r,d="",u=20)=>{p(!0);const{data:l}=await A.custom({url:"",method:"get",meta:{operation:"driveAuthors",variables:{driveId:{value:parseInt(t.driveId.toString()),type:"Int",required:!0},page:{value:r,type:"Int",required:!0},key:{value:d,type:"String",required:!1},pageSize:{value:u,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:_}]}}).catch(()=>(m.error("Error occured while fetching Authors"),{data:null})).then(y=>y);p(!1),l&&a([...s,...l.results]),p(!1)},j=async(r,d)=>{const{data:u}=await A.custom({url:"",method:"post",meta:{operation:"driveMemberAuthor",variables:{id:{value:r,type:"Int",required:!0},author:{value:d,type:"Boolean",required:!0}},fields:["success","message",{driveMember:_}]}}).catch(()=>(m.error("Error in making Author"),{data:null})).then(l=>l);if(u)if(u.success){m.success(u.message);const l=s.filter(y=>y.id!==r);a(l),t.onModify(u.driveMember)}else m.error(u.message);G.destroyAll()};return n.useEffect(()=>{h(1,"",20)},[t.driveId]),i?e.jsx(e.Fragment,{children:e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(W,{})})}):e.jsxs(e.Fragment,{children:[e.jsx(K,{children:e.jsx(U,{span:20,children:e.jsx(w,{layout:"vertical",form:f,onFinish:r=>{h(1,r.key,20)},children:e.jsx(w.Item,{name:"key",children:e.jsx(ae,{size:"large",placeholder:"Search Author(s)...",prefix:e.jsx(ie,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx(O,{itemLayout:"horizontal",dataSource:s,renderItem:r=>{var d,u,l;return e.jsx("div",{style:{background:"white",marginBottom:5,paddingLeft:10,paddingTop:10},children:e.jsx(O.Item,{actions:[e.jsx(ne,{title:"Remove Author?",onConfirm:()=>j(r.id,!1),okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(Pe,{title:"Click to Remove Author",color:"green",children:e.jsx(F,{icon:e.jsx(Ze,{}),size:"large"})})})],children:e.jsx(O.Item.Meta,{avatar:e.jsx(fe,{src:(d=r==null?void 0:r.user)==null?void 0:d.pic}),title:e.jsx("a",{children:(u=r==null?void 0:r.user)==null?void 0:u.fullName}),description:e.jsx(e.Fragment,{children:e.jsx("p",{children:(l=r==null?void 0:r.user)==null?void 0:l.email})})})},"author-item-"+r.id)})}})]})},_t=t=>{const[s,a]=n.useState([]),[i,p]=n.useState(!0),[f]=w.useForm(),h=async(r,d="",u=20)=>{p(!0);const{data:l}=await A.custom({url:"",method:"get",meta:{operation:"blockedDriveMembers",variables:{driveId:{value:parseInt(t.driveId.toString()),type:"Int",required:!0},page:{value:r,type:"Int",required:!0},key:{value:d,type:"String",required:!1},pageSize:{value:u,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:_}]}}).catch(()=>(m.error("Error occured while fetching Authors"),{data:null})).then(y=>y);p(!1),l&&a([...s,...l.results]),p(!1)},j=async(r,d)=>{const{data:u}=await A.custom({url:"",method:"post",meta:{operation:"blockUnblockDriveMember",variables:{driveMemberId:{value:r,type:"Int",required:!0},blocked:{value:d,type:"Boolean",required:!0}},fields:["success","message",{driveMember:_}]}}).catch(()=>(m.error("Error occured while blocking/unblocking drive member"),{data:null})).then(l=>l);if(u)if(u.success){m.success(u.message);const l=s.filter(y=>y.id!==r);a(l),t.onModify(u.driveMember)}else m.error(u.message);G.destroyAll()};return n.useEffect(()=>{h(1,"",20)},[t.driveId]),i?e.jsx(e.Fragment,{children:e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(W,{})})}):e.jsxs(e.Fragment,{children:[e.jsx(K,{children:e.jsx(U,{span:20,children:e.jsx(w,{layout:"vertical",form:f,onFinish:r=>{h(1,r.key,20)},children:e.jsx(w.Item,{name:"key",children:e.jsx(ae,{size:"large",placeholder:"Search Author(s)...",prefix:e.jsx(ie,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx(O,{itemLayout:"horizontal",dataSource:s,renderItem:r=>{var d,u,l;return e.jsx("div",{style:{background:"white",marginBottom:5,paddingLeft:10,paddingTop:10},children:e.jsx(O.Item,{actions:[e.jsx(ne,{title:"Unblock Drive Member?",onConfirm:()=>j(r.id,!1),okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(Pe,{title:"Click to Unblock Drive Member",color:"green",children:e.jsx(F,{icon:e.jsx(qe,{}),size:"large"})})})],children:e.jsx(O.Item.Meta,{avatar:e.jsx(fe,{src:(d=r==null?void 0:r.user)==null?void 0:d.pic}),title:e.jsx("a",{children:(u=r==null?void 0:r.user)==null?void 0:u.fullName}),description:e.jsx(e.Fragment,{children:e.jsx("p",{children:(l=r==null?void 0:r.user)==null?void 0:l.email})})})},"author-item-"+r.id)})}})]})},Vt=t=>{const[s,a]=n.useState(),[i,p]=n.useState([]),[f,h]=n.useState(!0),[j,r]=n.useState(1),[d,u]=n.useState(0),[l,y]=n.useState(0),[N,z]=n.useState(!0),[E]=w.useForm(),[C,D]=n.useState([0]),T=Ce(),P=async c=>{const{data:v}=await A.custom({url:"",method:"get",meta:{operation:"drive",variables:{id:{value:c,type:"Int",required:!0}},fields:Ie}}).catch(()=>({data:null})).then(M=>M);v&&a(v)},g=async()=>{const{data:c}=await A.custom({url:"",method:"post",meta:{operation:"addClassMembersToDrive",variables:{driveId:{value:parseInt(T.drive.toString()),type:"Int",required:!0},classesIds:{value:C.map(v=>parseInt(v.toString())),type:"[Int]",required:!0}},fields:["success","message"]}}).catch(()=>(m.error("Error occured while connecting member"),{data:null})).then(v=>v);c&&(c.success?(D([0]),t.onAdd()):m.error(c.message)),G.destroyAll()},I=async(c,v="")=>{const{data:M}=await A.custom({url:"",method:"get",meta:{operation:"myMadarasaAuthored",variables:{page:{value:c,type:"Int",required:!0},key:{value:v,type:"String",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:nt}]}}).catch(()=>(m.error("Error occured while fetching members"),{data:null})).then(V=>V);M&&(y(M.total),r(M.page+1),u(M.pages),z(M.hasNext),p([...i,...M.results.filter(V=>i.findIndex(J=>J.id===V.id)===-1)])),h(!1)};return n.useEffect(()=>{P(parseInt(T.drive.toString())),I(1)},[t.randKey]),e.jsxs(e.Fragment,{children:[e.jsx(K,{children:e.jsx(U,{span:24,children:e.jsx(w,{layout:"vertical",form:E,onFinish:c=>I(0,c.key),children:e.jsx(w.Item,{name:"key",children:e.jsx(ae,{size:"large",placeholder:"Search Classes...",prefix:e.jsx(ie,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx(De,{sx:{display:"flex",justifyContent:"flex-end",p:2},children:C.length>1&&e.jsx(F,{onClick:()=>g(),children:"Add"})}),e.jsx(De,{sx:{width:"100%",bgcolor:"background.paper",position:"relative",overflow:"auto",maxHeight:"60vh"},children:e.jsx(W,{spinning:f,children:e.jsx(Qe,{sx:{width:"100%",bgcolor:"background.paper"},children:i.map(c=>{const v=`checkbox-list-label-${c.id}`;return e.jsxs(e.Fragment,{children:[e.jsx(zt,{secondaryAction:e.jsx(Xe,{onChange:()=>{C.indexOf(c.id)!==-1?D(C.filter(M=>M!==c.id)):D([...C,c.id])},checked:C.indexOf(c.id)!==-1}),disablePadding:!0,children:e.jsx(et,{role:void 0,onClick:()=>{C.indexOf(c.id)!==-1?D(C.filter(M=>M!==c.id)):D([...C,c.id])},dense:!0,children:e.jsx(tt,{id:v,primary:e.jsxs(e.Fragment,{children:[c.name,e.jsx(st,{style:{marginLeft:10},children:c.code})]})})})},c.id),e.jsx(rt,{variant:"inset"})]})})})})}),N&&e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(F,{onClick:()=>{I(j)},children:"Load More"})})]})},{Text:Yt}=mt,Ht=t=>{var Ae;const[s,a]=n.useState(!1),[i,p]=n.useState(0),[f,h]=n.useState(!1),[j,r]=n.useState(!1),[d,u]=n.useState(),[l,y]=n.useState([]),[N,z]=n.useState({}),[E,C]=n.useState(!0),[D,T]=n.useState(1),[P,g]=n.useState(0),[I,c]=n.useState(0),[v,M]=n.useState(!0),[V]=w.useForm(),[J,Z]=n.useState(!1),[te,q]=n.useState(!1),[le,L]=n.useState(!1);ot();const Y=Ce(),ce=async()=>{p(Math.random()),h(!0)},Q=async o=>{y([o,...l])},H=async o=>{const{data:x}=await A.custom({url:"",method:"post",meta:{operation:"deleteDriveMember",variables:{id:{value:o,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(m.error("Error in Deleting Drive Member"),{data:null})).then(b=>b);x&&(x.success?(m.success(x.message),y(l.filter(b=>b.id!==o)),L(!1)):m.error(x.message)),G.destroyAll()},R=o=>{z(o),L(!0)},$=async(o,x)=>{const{data:b}=await A.custom({url:"",method:"post",meta:{operation:"driveMemberAuthor",variables:{id:{value:o,type:"Int",required:!0},author:{value:x,type:"Boolean",required:!0}},fields:["success","message",{driveMember:_}]}}).catch(()=>(m.error("Error in making Author"),{data:null})).then(k=>k);b&&(b.success?(m.success(b.message),y(l.map(k=>k.id===o?b.driveMember:k))):m.error(b.message)),G.destroyAll()},Me=(o,x)=>{G.confirm({title:"Confirm",icon:e.jsx(pt,{}),content:x?"Removing Author ....":"Making Author ....",okText:"Ok",cancelText:"Cancel",onOk:()=>$(o,x)})},ke=o=>{y(l.map(x=>x.id===o.id?o:x))},de=async(o,x="",b=!1)=>{const{data:k}=await A.custom({url:"",method:"get",meta:{operation:"driveMembers",variables:{page:{value:o,type:"Int",required:!0},key:{value:x,type:"String",required:!1},id:{value:parseInt(Y.drive.toString()),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:_}]}}).catch(()=>(m.error("Error in Getting Drive Members"),{data:null})).then(Oe=>Oe);k&&(g(k.total),c(k.pages),T(k.page+1),M(k.hasNext),(x.length>0||x.length===0&&b)&&y(k.results),k.results.length>0&&!b&&(y(l.concat(k.results)),T(o+25))),C(!1)},Be=async o=>{const{data:x}=await A.custom({url:"",method:"get",meta:{operation:"drive",variables:{id:{value:o,type:"Int",required:!0}},fields:Ie}}).catch(()=>(m.error("Error in Getting Drive"),{data:null})).then(b=>b);x&&(u(x),a(!0))},Se=async(o,x)=>{const{data:b}=await A.custom({url:"",method:"post",meta:{operation:"blockUnblockDriveMember",variables:{driveMemberId:{value:o,type:"Int",required:!0},blocked:{value:x,type:"Boolean",required:!0}},fields:["success","message",{driveMember:_}]}}).catch(()=>(m.error("Error occured while blocking/unblocking drive member"),{data:null})).then(k=>k);b&&(b.success?(m.success(b.message),y(l.map(k=>k.id===b.driveMember.id?b.driveMember:k))):m.error(b.message)),G.destroyAll()};return n.useEffect(()=>{Be(parseInt(Y.drive.toString())),de(D)},[]),e.jsxs(e.Fragment,{children:[e.jsx(K,{children:e.jsx(U,{span:24,style:{display:"flex",justifyContent:"space-between",marginBottom:10},children:e.jsxs(se,{children:[e.jsx(se.Item,{children:e.jsx(ye,{to:"/odrive",children:"Home"})}),e.jsx(se.Item,{children:e.jsx(ye,{to:"/odrive/drives",children:"Drives"})}),e.jsx(se.Item,{children:e.jsxs(ye,{to:"/odrive/drive/"+(d==null?void 0:d.id)+"/"+(d==null?void 0:d.code)+"/files",children:[d==null?void 0:d.name," - Drive"]})}),e.jsx(se.Item,{children:"Member(s)"})]})})}),e.jsxs(K,{children:[e.jsx(U,{span:12,children:e.jsx(w,{layout:"vertical",form:V,onFinish:o=>de(0,o.key,!0),children:e.jsx(w.Item,{name:"key",children:e.jsx(ae,{size:"large",placeholder:"Search member(s)...",prefix:e.jsx(ie,{}),autoComplete:"off",allowClear:!0})})})}),e.jsxs(U,{span:12,style:{display:"flex",justifyContent:"flex-end"},children:[e.jsx(F,{size:"large",icon:e.jsx(Fe,{}),onClick:()=>Z(!0),children:"Drive Authors"}),e.jsx(F,{size:"large",icon:e.jsx(Ne,{}),onClick:()=>q(!0),children:"Blocked Members"}),e.jsx(Le,{disabled:!s,trigger:["click"],overlay:e.jsxs(B,{children:[e.jsx(B.Item,{children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",onClick:()=>ce(),children:"Add Directly"})}),e.jsx(B.Item,{children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",onClick:()=>r(!0),children:"Add From Classes"})})]}),placement:"bottomLeft",arrow:!0,overlayStyle:{zIndex:9999},children:e.jsx(F,{size:"large",icon:e.jsx(Fe,{}),children:"Add Member"})})]})]}),e.jsx(W,{spinning:E,children:e.jsx(Re,{dataLength:P,next:()=>de(D),hasMore:v,loader:e.jsx(e.Fragment,{children:l.length>0?e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(W,{})}):e.jsx(e.Fragment,{})}),endMessage:e.jsx("p",{style:{textAlign:"center",display:l.length>0?"block":"none"},children:e.jsx("b",{children:"Yay! You have seen it all"})}),children:l.length>0?e.jsx(K,{align:"top",children:l.map(o=>e.jsx(U,{span:6,children:e.jsxs(at,{hoverable:o.isActive,style:{marginRight:10,marginBottom:5,borderColor:o.isAuthor?"green":"white"},children:[e.jsx(be,{style:{right:0,position:"absolute"},children:e.jsx(Le,{trigger:["click"],overlay:e.jsxs(B,{children:[e.jsx(B.Item,{icon:e.jsx(je,{}),onClick:()=>R(o),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Disconnect"})}),o.blocked?e.jsx(B.Item,{icon:e.jsx(qe,{}),children:e.jsx(ne,{title:e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Are you sure?"}),e.jsx("div",{style:{width:"275px"},children:"Member will be Removed From Blocked Member(s), and will be able to access this drive."})]}),onConfirm:()=>Se(o.id,!1),okText:"Unblock",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx("a",{rel:"noopener noreferrer",children:"Unblock"})})}):e.jsx(B.Item,{icon:e.jsx(Ne,{}),children:e.jsx(ne,{title:e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Are you sure?"}),e.jsx("div",{style:{width:"275px"},children:"Member will be added to Blocked Member(s), and will not be able to access this drive."})]}),onConfirm:()=>Se(o.id,!0),okText:"Block",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx("a",{rel:"noopener noreferrer",children:"Block"})})}),o.isAuthor?e.jsx(B.Item,{icon:e.jsx(je,{}),onClick:()=>Me(o.id,!1),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Make Non Author"})}):e.jsx(B.Item,{icon:e.jsx(je,{}),onClick:()=>Me(o.id,!0),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Make Author"})})]}),overlayStyle:{zIndex:9999},children:e.jsx("a",{className:"ant-dropdown-link",onClick:x=>x.preventDefault(),children:e.jsx(it,{style:{color:"orange",fontSize:28,fontWeight:"bold"}})})})}),e.jsx("a",{children:e.jsxs(be,{direction:"vertical",align:"center",style:{width:"100%",justifyContent:"center"},children:[e.jsx(fe,{size:{xs:24,sm:32,md:40,lg:40,xl:40,xxl:80},icon:e.jsx(lt,{}),src:o.user.pic}),e.jsx(be,{direction:"horizontal",style:{width:"100%",justifyContent:"center"},children:e.jsx(Yt,{style:{width:"100%"},ellipsis:{tooltip:o.user.fullName},children:o.user.fullName})})]})})]})}))}):e.jsx(Te,{severity:"info",sx:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:"No Member Found ..."})})}),e.jsx(me,{title:"Directly Add Member",open:f,onClose:o=>h(o),width:"50vw",children:e.jsx(Ut,{onAdd:Q,randKey:i})}),e.jsx(me,{title:"Adding Members From Classes",centered:!0,open:j,onClose:o=>r(o),width:"50vw",children:e.jsx(Vt,{onAdd:()=>{de(1),m.success("Members Added Successfully")},randKey:i})}),e.jsx(me,{title:"Drive Authors",open:J,destroyOnClose:!0,onClose:o=>Z(o),width:"50vw",children:e.jsx(Gt,{driveId:Y.drive,randKey:Math.random(),onModify:ke})}),e.jsx(me,{title:"Drive Blocked Members",open:te,onClose:o=>q(o),width:"50vw",children:e.jsx(_t,{driveId:Y.drive,randKey:Math.random(),onModify:ke})}),e.jsxs(ct,{open:le,onClose:(o,x)=>{x!=="backdropClick"&&L(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[e.jsxs(dt,{id:"alert-dialog-title",children:["Disconnecting",e.jsx(F,{onClick:()=>L(!1),style:{float:"right"},children:e.jsx(Et,{})})]}),e.jsx(yt,{children:e.jsxs(kt,{id:"alert-dialog-description",children:["Are you sure you want to disconnect ",e.jsx("b",{children:(Ae=N==null?void 0:N.user)==null?void 0:Ae.fullName})," from this drive?",e.jsxs(Te,{severity:"warning",style:{marginTop:"10px"},children:["Disconnected Member, will be able to connect again to this drive. if you want to block this member from this drive, please use ",e.jsx("b",{children:"Block"})," option."]})]})}),e.jsxs(ut,{children:[e.jsx(F,{onClick:()=>L(!1),children:"No"}),e.jsx(F,{onClick:()=>H(N.id),autoFocus:!0,children:"Yes"})]})]})]})},Kt=()=>e.jsx(e.Fragment,{children:e.jsx("div",{style:{marginTop:10},children:e.jsx(Ht,{})})}),Qt=()=>e.jsx(Kt,{});export{Qt as DriveMembersPage};
