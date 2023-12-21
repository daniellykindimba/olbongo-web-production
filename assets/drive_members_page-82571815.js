import{fc as pe,fd as he,fe as ie,cJ as A,ff as Be,r as i,fg as xe,fh as se,j as e,h as X,fi as fe,aj as Oe,fj as Ee,fk as me,fl as ce,fm as ze,fn as Ue,fo as Ge,fp as _e,fq as Se,fr as Ve,cC as Ye,F as N,aW as be,y as H,z as G,I as ae,S as ne,s as K,a5 as O,a6 as re,B as w,bh as He,A as ge,J as S,K as m,aq as _,x as Te,a9 as Ke,aU as Pe,u as Ne,fs as We,ag as Je,ft as Ze,fu as Qe,T as Xe,ak as et,q as tt,as as ve,b$ as De,aV as we,Z as Fe,$ as B,C as st,v as ye,a0 as je,a1 as rt,ao as it,ap as Le,H as ue,fv as at,fw as nt,fx as ot,at as lt,ar as dt}from"./index-2ce10fe2.js";import{I as qe}from"./index.es-97e8184e.js";import{B as te}from"./Breadcrumb-5a3adddd.js";function ct(t){return pe("MuiDialogContent",t)}he("MuiDialogContent",["root","dividers"]);const ut=["className","dividers"],mt=t=>{const{classes:s,dividers:n}=t;return fe({root:["root",n&&"dividers"]},ct,s)},pt=ie("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:n}=t;return[s.root,n.dividers&&s.dividers]}})(({theme:t,ownerState:s})=>A({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},s.dividers?{padding:"16px 24px",borderTop:`1px solid ${(t.vars||t).palette.divider}`,borderBottom:`1px solid ${(t.vars||t).palette.divider}`}:{[`.${Be.root} + &`]:{paddingTop:0}})),ht=i.forwardRef(function(s,n){const o=xe({props:s,name:"MuiDialogContent"}),{className:p,dividers:j=!1}=o,x=se(o,ut),I=A({},o,{dividers:j}),r=mt(I);return e.jsx(pt,A({className:X(r.root,p),ownerState:I,ref:n},x))}),xt=ht;function ft(t){return pe("MuiDialogContentText",t)}he("MuiDialogContentText",["root"]);const gt=["children","className"],vt=t=>{const{classes:s}=t,o=fe({root:["root"]},ft,s);return A({},s,o)},yt=ie(Oe,{shouldForwardProp:t=>Ee(t)||t==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(t,s)=>s.root})({}),jt=i.forwardRef(function(s,n){const o=xe({props:s,name:"MuiDialogContentText"}),{className:p}=o,j=se(o,gt),x=vt(j);return e.jsx(yt,A({component:"p",variant:"body1",color:"text.secondary",ref:n,ownerState:j,className:X(x.root,p)},o,{classes:x}))}),bt=jt;function Ct(t){return pe("MuiListItem",t)}const It=he("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),Q=It;function Mt(t){return pe("MuiListItemSecondaryAction",t)}he("MuiListItemSecondaryAction",["root","disableGutters"]);const kt=["className"],At=t=>{const{disableGutters:s,classes:n}=t;return fe({root:["root",s&&"disableGutters"]},Mt,n)},St=ie("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:n}=t;return[s.root,n.disableGutters&&s.disableGutters]}})(({ownerState:t})=>A({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})),Re=i.forwardRef(function(s,n){const o=xe({props:s,name:"MuiListItemSecondaryAction"}),{className:p}=o,j=se(o,kt),x=i.useContext(me),I=A({},o,{disableGutters:x.disableGutters}),r=At(I);return e.jsx(St,A({className:X(r.root,p),ownerState:I,ref:n},j))});Re.muiName="ListItemSecondaryAction";const Nt=Re,Dt=["className"],wt=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],Ft=(t,s)=>{const{ownerState:n}=t;return[s.root,n.dense&&s.dense,n.alignItems==="flex-start"&&s.alignItemsFlexStart,n.divider&&s.divider,!n.disableGutters&&s.gutters,!n.disablePadding&&s.padding,n.button&&s.button,n.hasSecondaryAction&&s.secondaryAction]},Lt=t=>{const{alignItems:s,button:n,classes:o,dense:p,disabled:j,disableGutters:x,disablePadding:I,divider:r,hasSecondaryAction:c,selected:u}=t;return fe({root:["root",p&&"dense",!x&&"gutters",!I&&"padding",r&&"divider",j&&"disabled",n&&"button",s==="flex-start"&&"alignItemsFlexStart",c&&"secondaryAction",u&&"selected"],container:["container"]},Ct,o)},Tt=ie("div",{name:"MuiListItem",slot:"Root",overridesResolver:Ft})(({theme:t,ownerState:s})=>A({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!s.disablePadding&&A({paddingTop:8,paddingBottom:8},s.dense&&{paddingTop:4,paddingBottom:4},!s.disableGutters&&{paddingLeft:16,paddingRight:16},!!s.secondaryAction&&{paddingRight:48}),!!s.secondaryAction&&{[`& > .${ze.root}`]:{paddingRight:48}},{[`&.${Q.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${Q.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:ce(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${Q.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:ce(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${Q.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},s.alignItems==="flex-start"&&{alignItems:"flex-start"},s.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},s.button&&{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Q.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:ce(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:ce(t.palette.primary.main,t.palette.action.selectedOpacity)}}},s.hasSecondaryAction&&{paddingRight:48})),Pt=ie("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,s)=>s.container})({position:"relative"}),qt=i.forwardRef(function(s,n){const o=xe({props:s,name:"MuiListItem"}),{alignItems:p="center",autoFocus:j=!1,button:x=!1,children:I,className:r,component:c,components:u={},componentsProps:l={},ContainerComponent:f="li",ContainerProps:{className:F}={},dense:E=!1,disabled:z=!1,disableGutters:M=!1,disablePadding:D=!1,divider:T=!1,focusVisibleClassName:P,secondaryAction:g,selected:k=!1,slotProps:d={},slots:v={}}=o,b=se(o.ContainerProps,Dt),U=se(o,wt),W=i.useContext(me),J=i.useMemo(()=>({dense:E||W.dense||!1,alignItems:p,disableGutters:M}),[p,W.dense,E,M]),ee=i.useRef(null);Ue(()=>{j&&ee.current&&ee.current.focus()},[j]);const q=i.Children.toArray(I),oe=q.length&&Ge(q[q.length-1],["ListItemSecondaryAction"]),L=A({},o,{alignItems:p,autoFocus:j,button:x,dense:J.dense,disabled:z,disableGutters:M,disablePadding:D,divider:T,hasSecondaryAction:oe,selected:k}),V=Lt(L),le=_e(ee,n),Z=v.root||u.Root||Tt,Y=d.root||l.root||{},R=A({className:X(V.root,Y.className,r),disabled:z},U);let $=c||"li";return x&&(R.component=c||"div",R.focusVisibleClassName=X(Q.focusVisible,P),$=Ve),oe?($=!R.component&&!c?"div":$,f==="li"&&($==="li"?$="div":R.component==="li"&&(R.component="div")),e.jsx(me.Provider,{value:J,children:e.jsxs(Pt,A({as:f,className:X(V.container,F),ref:le,ownerState:L},b,{children:[e.jsx(Z,A({},Y,!Se(Z)&&{as:$,ownerState:A({},L,Y.ownerState)},R,{children:q})),q.pop()]}))})):e.jsx(me.Provider,{value:J,children:e.jsxs(Z,A({},Y,{as:$,ref:le},!Se(Z)&&{ownerState:A({},L,Y.ownerState)},R,{children:[q,g&&e.jsx(Nt,{children:g})]}))})}),Rt=qt,$t=Ye(e.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}),"CloseOutlined"),Bt=t=>{const[s,n]=i.useState(),[o,p]=i.useState([]),[j,x]=i.useState(!0),[I,r]=i.useState(1),[c,u]=i.useState(0),[l,f]=i.useState(0),[F,E]=i.useState(!0),[z]=N.useForm(),M=be(),D=async g=>{const{data:k}=await S.custom({url:"",method:"get",meta:{operation:"drive",variables:{id:{value:g,type:"Int",required:!0}},fields:["id","name","code","canDelete","isAuthor","isArchived","canEdit","canManage",{author:["id","firstName","lastName","middleName","fullName","email","pic"]}]}}).catch(d=>(m.error("Error occured while fetching drive"),{data:null})).then(d=>d);k&&n(k)},T=async g=>{const{data:k}=await S.custom({url:"",method:"post",meta:{operation:"directConnectMemberDrive",variables:{driveId:{value:parseInt(M.drive.toString()),type:"Int",required:!0},userId:{value:parseInt(g.toString()),type:"Int",required:!0}},fields:["success","message",{member:["id","created","updated","isActive","canDelete","isAuthor",{drive:["id"]},{user:["id","firstName","lastName","email","middleName","fullName","pic"]}]}]}}).catch(d=>(m.error("Error occured while connecting member"),{data:null})).then(d=>d);k&&(k.success?(m.success(k.message),t.onAdd(k.member),p(o.filter(d=>d.id!==g))):m.error(k.message)),_.destroyAll()},P=async(g,k="",d=!1)=>{const{data:v}=await S.custom({url:"",method:"get",meta:{operation:"membersToConnectDrive",variables:{driveId:{value:parseInt(M.drive.toString()),type:"Int",required:!0},page:{value:g,type:"Int",required:!0},key:{value:k,type:"String",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","firstName","middleName","lastName","fullName","pic","email"]}]}}).catch(b=>(m.error("Error occured while fetching members"),{data:null})).then(b=>b);v&&(f(v.total),r(v.page+1),u(v.pages),E(v.hasNext),(k.length>0||k.length===0&&d||g===1)&&p(v.results),v.results.length>0&&!d&&g!==1&&p(o.concat(v.results))),x(!1)};return i.useEffect(()=>{D(parseInt(M.drive.toString())),P(1)},[t.randKey]),e.jsxs(e.Fragment,{children:[e.jsx(H,{children:e.jsx(G,{span:24,children:e.jsx(N,{layout:"vertical",form:z,onFinish:g=>P(0,g.key,!0),children:e.jsx(N.Item,{name:"key",children:e.jsx(ae,{size:"large",placeholder:"Search file(s)...",prefix:e.jsx(ne,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx(K,{spinning:j,children:e.jsx(qe,{dataLength:l,next:()=>P(I),hasMore:F,height:"76vh",loader:e.jsx(e.Fragment,{children:e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(K,{})})}),endMessage:e.jsx("p",{style:{textAlign:"center",display:o.length>0?"block":"none"},children:e.jsx("b",{children:"Yay! You have seen it all"})}),children:e.jsx(O,{itemLayout:"horizontal",dataSource:o,renderItem:g=>e.jsx("div",{style:{background:"white",marginBottom:5,paddingLeft:10,paddingTop:10},children:e.jsx(O.Item,{actions:[e.jsx(re,{placement:"top",title:"Adding Member",onConfirm:()=>T(g.id),okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(w,{icon:e.jsx(He,{})})})],children:e.jsx(O.Item.Meta,{avatar:e.jsx(ge,{src:g.pic}),title:g.fullName,description:e.jsx(e.Fragment,{children:e.jsx("p",{children:g.email})})})},"drive-file-"+g.id)})})})})]})},Ot=t=>{const[s,n]=i.useState([]),[o,p]=i.useState(!0),[j]=N.useForm(),x=async(r,c="",u=20)=>{p(!0);const{data:l}=await S.custom({url:"",method:"get",meta:{operation:"driveAuthors",variables:{driveId:{value:parseInt(t.driveId.toString()),type:"Int",required:!0},page:{value:r,type:"Int",required:!0},key:{value:c,type:"String",required:!1},pageSize:{value:u,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","created","updated","isActive","canDelete","isAuthor",{drive:["id"]},{user:["id","firstName","lastName","email","middleName","fullName","pic"]}]}]}}).catch(f=>(m.error("Error occured while fetching Authors"),{data:null})).then(f=>f);p(!1),l&&n([...s,...l.results]),p(!1)},I=async(r,c)=>{const{data:u}=await S.custom({url:"",method:"post",meta:{operation:"driveMemberAuthor",variables:{id:{value:r,type:"Int",required:!0},author:{value:c,type:"Boolean",required:!0}},fields:["success","message",{driveMember:["id","created","updated","isActive","canDelete","isAuthor",{drive:["id"]},{user:["id","firstName","lastName","email","middleName","fullName","pic"]}]}]}}).catch(l=>(m.error("Error in making Author"),{data:null})).then(l=>l);if(u)if(u.success){m.success(u.message);const l=s.filter(f=>f.id!==r);n(l),t.onModify(u.driveMember)}else m.error(u.message);_.destroyAll()};return i.useEffect(()=>{x(1,"",20)},[t.driveId]),o?e.jsx(e.Fragment,{children:e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(K,{})})}):e.jsxs(e.Fragment,{children:[e.jsx(H,{children:e.jsx(G,{span:20,children:e.jsx(N,{layout:"vertical",form:j,onFinish:r=>{x(1,r.key,20)},children:e.jsx(N.Item,{name:"key",children:e.jsx(ae,{size:"large",placeholder:"Search Author(s)...",prefix:e.jsx(ne,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx(O,{itemLayout:"horizontal",dataSource:s,renderItem:r=>{var c,u,l;return e.jsx("div",{style:{background:"white",marginBottom:5,paddingLeft:10,paddingTop:10},children:e.jsx(O.Item,{actions:[e.jsx(re,{title:"Remove Author?",onConfirm:()=>I(r.id,!1),okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(Te,{title:"Click to Remove Author",color:"green",children:e.jsx(w,{icon:e.jsx(Ke,{}),size:"large"})})})],children:e.jsx(O.Item.Meta,{avatar:e.jsx(ge,{src:(c=r==null?void 0:r.user)==null?void 0:c.pic}),title:e.jsx("a",{children:(u=r==null?void 0:r.user)==null?void 0:u.fullName}),description:e.jsx(e.Fragment,{children:e.jsx("p",{children:(l=r==null?void 0:r.user)==null?void 0:l.email})})})},"author-item-"+r.id)})}})]})},Et=t=>{const[s,n]=i.useState([]),[o,p]=i.useState(!0),[j]=N.useForm(),x=async(r,c="",u=20)=>{p(!0);const{data:l}=await S.custom({url:"",method:"get",meta:{operation:"blockedDriveMembers",variables:{driveId:{value:parseInt(t.driveId.toString()),type:"Int",required:!0},page:{value:r,type:"Int",required:!0},key:{value:c,type:"String",required:!1},pageSize:{value:u,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","created","updated","isActive","canDelete","isAuthor",{drive:["id"]},{user:["id","firstName","lastName","email","middleName","fullName","pic"]}]}]}}).catch(f=>(m.error("Error occured while fetching Authors"),{data:null})).then(f=>f);p(!1),l&&n([...s,...l.results]),p(!1)},I=async(r,c)=>{const{data:u}=await S.custom({url:"",method:"post",meta:{operation:"blockUnblockDriveMember",variables:{driveMemberId:{value:r,type:"Int",required:!0},blocked:{value:c,type:"Boolean",required:!0}},fields:["success","message",{driveMember:["id","created","updated","isActive","canDelete","isAuthor",{drive:["id"]},{user:["id","firstName","lastName","email","middleName","fullName","pic"]}]}]}}).catch(l=>(m.error("Error occured while blocking/unblocking drive member"),{data:null})).then(l=>l);if(u)if(u.success){m.success(u.message);const l=s.filter(f=>f.id!==r);n(l),t.onModify(u.driveMember)}else m.error(u.message);_.destroyAll()};return i.useEffect(()=>{x(1,"",20)},[t.driveId]),o?e.jsx(e.Fragment,{children:e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(K,{})})}):e.jsxs(e.Fragment,{children:[e.jsx(H,{children:e.jsx(G,{span:20,children:e.jsx(N,{layout:"vertical",form:j,onFinish:r=>{x(1,r.key,20)},children:e.jsx(N.Item,{name:"key",children:e.jsx(ae,{size:"large",placeholder:"Search Author(s)...",prefix:e.jsx(ne,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx(O,{itemLayout:"horizontal",dataSource:s,renderItem:r=>{var c,u,l;return e.jsx("div",{style:{background:"white",marginBottom:5,paddingLeft:10,paddingTop:10},children:e.jsx(O.Item,{actions:[e.jsx(re,{title:"Unblock Drive Member?",onConfirm:()=>I(r.id,!1),okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(Te,{title:"Click to Unblock Drive Member",color:"green",children:e.jsx(w,{icon:e.jsx(Pe,{}),size:"large"})})})],children:e.jsx(O.Item.Meta,{avatar:e.jsx(ge,{src:(c=r==null?void 0:r.user)==null?void 0:c.pic}),title:e.jsx("a",{children:(u=r==null?void 0:r.user)==null?void 0:u.fullName}),description:e.jsx(e.Fragment,{children:e.jsx("p",{children:(l=r==null?void 0:r.user)==null?void 0:l.email})})})},"author-item-"+r.id)})}})]})},zt=t=>{const[s,n]=i.useState(),[o,p]=i.useState([]),[j,x]=i.useState(!0),[I,r]=i.useState(1),[c,u]=i.useState(0),[l,f]=i.useState(0),[F,E]=i.useState(!0),[z]=N.useForm(),[M,D]=i.useState([0]),T=be(),P=async d=>{const{data:v}=await S.custom({url:"",method:"get",meta:{operation:"drive",variables:{id:{value:d,type:"Int",required:!0}},fields:["id","name","code","canDelete","isAuthor","isArchived","canEdit","canManage",{author:["id","firstName","lastName","middleName","fullName","email","pic"]}]}}).catch(b=>({data:null})).then(b=>b);v&&n(v)},g=async()=>{const{data:d}=await S.custom({url:"",method:"post",meta:{operation:"addClassMembersToDrive",variables:{driveId:{value:parseInt(T.drive.toString()),type:"Int",required:!0},classesIds:{value:M.map(v=>parseInt(v.toString())),type:"[Int]",required:!0}},fields:["success","message"]}}).catch(()=>(m.error("Error occured while connecting member"),{data:null})).then(v=>v);d&&(d.success?(D([0]),t.onAdd()):m.error(d.message)),_.destroyAll()},k=async(d,v="")=>{const{data:b}=await S.custom({url:"",method:"get",meta:{operation:"myMadarasaAuthored",variables:{page:{value:d,type:"Int",required:!0},key:{value:v,type:"String",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","code","created","updated","isActive","canManage","canDelete","canEdit"]}]}}).catch(U=>(m.error("Error occured while fetching members"),{data:null})).then(U=>U);b&&(f(b.total),r(b.page+1),u(b.pages),E(b.hasNext),p([...o,...b.results.filter(U=>o.findIndex(W=>W.id===U.id)===-1)])),x(!1)};return i.useEffect(()=>{P(parseInt(T.drive.toString())),k(1)},[t.randKey]),e.jsxs(e.Fragment,{children:[e.jsx(H,{children:e.jsx(G,{span:24,children:e.jsx(N,{layout:"vertical",form:z,onFinish:d=>k(0,d.key),children:e.jsx(N.Item,{name:"key",children:e.jsx(ae,{size:"large",placeholder:"Search Classes...",prefix:e.jsx(ne,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx(Ne,{sx:{display:"flex",justifyContent:"flex-end",p:2},children:M.length>1&&e.jsx(w,{onClick:()=>g(),children:"Add"})}),e.jsx(Ne,{sx:{width:"100%",bgcolor:"background.paper",position:"relative",overflow:"auto",maxHeight:"60vh"},children:e.jsx(K,{spinning:j,children:e.jsx(We,{sx:{width:"100%",bgcolor:"background.paper"},children:o.map(d=>{const v=`checkbox-list-label-${d.id}`;return e.jsxs(e.Fragment,{children:[e.jsx(Rt,{secondaryAction:e.jsx(Je,{onChange:()=>{M.indexOf(d.id)!==-1?D(M.filter(b=>b!==d.id)):D([...M,d.id])},checked:M.indexOf(d.id)!==-1}),disablePadding:!0,children:e.jsx(Ze,{role:void 0,onClick:()=>{M.indexOf(d.id)!==-1?D(M.filter(b=>b!==d.id)):D([...M,d.id])},dense:!0,children:e.jsx(Qe,{id:v,primary:e.jsxs(e.Fragment,{children:[d.name,e.jsx(Xe,{style:{marginLeft:10},children:d.code})]})})})},d.id),e.jsx(et,{variant:"inset"})]})})})})}),F&&e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(w,{onClick:()=>{k(I)},children:"Load More"})})]})},{Text:Ut}=lt,Gt=t=>{var ke;const[s,n]=i.useState(!1),[o,p]=i.useState(0),[j,x]=i.useState(!1),[I,r]=i.useState(!1),[c,u]=i.useState(),[l,f]=i.useState([]),[F,E]=i.useState({}),[z,M]=i.useState(!0),[D,T]=i.useState(1),[P,g]=i.useState(0),[k,d]=i.useState(0),[v,b]=i.useState(!0),[U]=N.useForm(),[W,J]=i.useState(!1),[ee,q]=i.useState(!1),[oe,L]=i.useState(!1);tt();const V=be(),le=async()=>{p(Math.random()),x(!0)},Z=async a=>{f([a,...l])},Y=async a=>{const{data:h}=await S.custom({url:"",method:"post",meta:{operation:"deleteDriveMember",variables:{id:{value:a,type:"Int",required:!0}},fields:["success","message"]}}).catch(y=>(m.error("Error in Deleting Drive Member"),{data:null})).then(y=>y);h&&(h.success?(m.success(h.message),f(l.filter(y=>y.id!==a)),L(!1)):m.error(h.message)),_.destroyAll()},R=a=>{E(a),L(!0)},$=async(a,h)=>{const{data:y}=await S.custom({url:"",method:"post",meta:{operation:"driveMemberAuthor",variables:{id:{value:a,type:"Int",required:!0},author:{value:h,type:"Boolean",required:!0}},fields:["success","message",{driveMember:["id","created","updated","isActive","canDelete","isAuthor",{drive:["id"]},{user:["id","firstName","lastName","email","middleName","fullName","pic"]}]}]}}).catch(C=>(m.error("Error in making Author"),{data:null})).then(C=>C);y&&(y.success?(m.success(y.message),f(l.map(C=>C.id===a?y.driveMember:C))):m.error(y.message)),_.destroyAll()},Ce=(a,h)=>{_.confirm({title:"Confirm",icon:e.jsx(dt,{}),content:h?"Removing Author ....":"Making Author ....",okText:"Ok",cancelText:"Cancel",onOk:()=>$(a,h)})},Ie=a=>{f(l.map(h=>h.id===a.id?a:h))},de=async(a,h="",y=!1)=>{const{data:C}=await S.custom({url:"",method:"get",meta:{operation:"driveMembers",variables:{page:{value:a,type:"Int",required:!0},key:{value:h,type:"String",required:!1},id:{value:parseInt(V.drive.toString()),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","created","updated","isActive","canDelete","isAuthor","blocked",{drive:["id"]},{user:["id","firstName","lastName","email","middleName","fullName","pic"]}]}]}}).catch(Ae=>(m.error("Error in Getting Drive Members"),{data:null})).then(Ae=>Ae);C&&(g(C.total),d(C.pages),T(C.page+1),b(C.hasNext),(h.length>0||h.length===0&&y)&&f(C.results),C.results.length>0&&!y&&(f(l.concat(C.results)),T(a+25))),M(!1)},$e=async a=>{const{data:h}=await S.custom({url:"",method:"get",meta:{operation:"drive",variables:{id:{value:a,type:"Int",required:!0}},fields:["id","name","code","canDelete","isAuthor","isArchived","canEdit","canManage",{author:["id","firstName","lastName","middleName","fullName","email","pic"]}]}}).catch(y=>(m.error("Error in Getting Drive"),{data:null})).then(y=>y);h&&(u(h),n(!0))},Me=async(a,h)=>{const{data:y}=await S.custom({url:"",method:"post",meta:{operation:"blockUnblockDriveMember",variables:{driveMemberId:{value:a,type:"Int",required:!0},blocked:{value:h,type:"Boolean",required:!0}},fields:["success","message",{driveMember:["id","created","updated","isActive","canDelete","isAuthor",{drive:["id"]},{user:["id","firstName","lastName","email","middleName","fullName","pic"]}]}]}}).catch(C=>(m.error("Error occured while blocking/unblocking drive member"),{data:null})).then(C=>C);y&&(y.success?(m.success(y.message),f(l.map(C=>C.id===y.driveMember.id?y.driveMember:C))):m.error(y.message)),_.destroyAll()};return i.useEffect(()=>{$e(parseInt(V.drive.toString())),de(D)},[]),e.jsxs(e.Fragment,{children:[e.jsx(H,{children:e.jsx(G,{span:24,style:{display:"flex",justifyContent:"space-between",marginBottom:10},children:e.jsxs(te,{children:[e.jsx(te.Item,{children:e.jsx(ve,{to:"/odrive",children:"Home"})}),e.jsx(te.Item,{children:e.jsx(ve,{to:"/odrive/drives",children:"Drives"})}),e.jsx(te.Item,{children:e.jsxs(ve,{to:"/odrive/drive/"+(c==null?void 0:c.id)+"/"+(c==null?void 0:c.code)+"/files",children:[c==null?void 0:c.name," - Drive"]})}),e.jsx(te.Item,{children:"Member(s)"})]})})}),e.jsxs(H,{children:[e.jsx(G,{span:12,children:e.jsx(N,{layout:"vertical",form:U,onFinish:a=>de(0,a.key,!0),children:e.jsx(N.Item,{name:"key",children:e.jsx(ae,{size:"large",placeholder:"Search member(s)...",prefix:e.jsx(ne,{}),autoComplete:"off",allowClear:!0})})})}),e.jsxs(G,{span:12,style:{display:"flex",justifyContent:"flex-end"},children:[e.jsx(w,{size:"large",icon:e.jsx(De,{}),onClick:()=>J(!0),children:"Drive Authors"}),e.jsx(w,{size:"large",icon:e.jsx(we,{}),onClick:()=>q(!0),children:"Blocked Members"}),e.jsx(Fe,{disabled:!s,trigger:["click"],overlay:e.jsxs(B,{children:[e.jsx(B.Item,{children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",onClick:()=>le(),children:"Add Directly"})}),e.jsx(B.Item,{children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",onClick:()=>r(!0),children:"Add From Classes"})})]}),placement:"bottomLeft",arrow:!0,overlayStyle:{zIndex:9999},children:e.jsx(w,{size:"large",icon:e.jsx(De,{}),children:"Add Member"})})]})]}),e.jsx(K,{spinning:z,children:e.jsx(qe,{dataLength:P,next:()=>de(D),hasMore:v,loader:e.jsx(e.Fragment,{children:l.length>0?e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(K,{})}):e.jsx(e.Fragment,{})}),endMessage:e.jsx("p",{style:{textAlign:"center",display:l.length>0?"block":"none"},children:e.jsx("b",{children:"Yay! You have seen it all"})}),children:l.length>0?e.jsx(H,{align:"top",children:l.map(a=>e.jsx(G,{span:6,children:e.jsxs(st,{hoverable:a.isActive,style:{marginRight:10,marginBottom:5,borderColor:a.isAuthor?"green":"white"},children:[e.jsx(ye,{style:{right:0,position:"absolute"},children:e.jsx(Fe,{trigger:["click"],overlay:e.jsxs(B,{children:[e.jsx(B.Item,{icon:e.jsx(je,{}),onClick:()=>R(a),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Disconnect"})}),a.blocked?e.jsx(B.Item,{icon:e.jsx(Pe,{}),children:e.jsx(re,{title:e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Are you sure?"}),e.jsx("div",{style:{width:"275px"},children:"Member will be Removed From Blocked Member(s), and will be able to access this drive."})]}),onConfirm:()=>Me(a.id,!1),okText:"Unblock",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx("a",{rel:"noopener noreferrer",children:"Unblock"})})}):e.jsx(B.Item,{icon:e.jsx(we,{}),children:e.jsx(re,{title:e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Are you sure?"}),e.jsx("div",{style:{width:"275px"},children:"Member will be added to Blocked Member(s), and will not be able to access this drive."})]}),onConfirm:()=>Me(a.id,!0),okText:"Block",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx("a",{rel:"noopener noreferrer",children:"Block"})})}),a.isAuthor?e.jsx(B.Item,{icon:e.jsx(je,{}),onClick:()=>Ce(a.id,!1),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Make Non Author"})}):e.jsx(B.Item,{icon:e.jsx(je,{}),onClick:()=>Ce(a.id,!0),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Make Author"})})]}),overlayStyle:{zIndex:9999},children:e.jsx("a",{className:"ant-dropdown-link",onClick:h=>h.preventDefault(),children:e.jsx(rt,{style:{color:"orange",fontSize:28,fontWeight:"bold"}})})})}),e.jsx("a",{children:e.jsxs(ye,{direction:"vertical",align:"center",style:{width:"100%",justifyContent:"center"},children:[e.jsx(ge,{size:{xs:24,sm:32,md:40,lg:40,xl:40,xxl:80},icon:e.jsx(it,{}),src:a.user.pic}),e.jsx(ye,{direction:"horizontal",style:{width:"100%",justifyContent:"center"},children:e.jsx(Ut,{style:{width:"100%"},ellipsis:{tooltip:a.user.fullName},children:a.user.fullName})})]})})]})}))}):e.jsx(Le,{severity:"info",sx:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:"No Member Found ..."})})}),e.jsx(ue,{title:"Directly Add Member",open:j,onClose:a=>x(a),width:"50vw",children:e.jsx(Bt,{onAdd:Z,randKey:o})}),e.jsx(ue,{title:"Adding Members From Classes",centered:!0,open:I,onClose:a=>r(a),width:"50vw",children:e.jsx(zt,{onAdd:()=>{de(1),m.success("Members Added Successfully")},randKey:o})}),e.jsx(ue,{title:"Drive Authors",open:W,destroyOnClose:!0,onClose:a=>J(a),width:"50vw",children:e.jsx(Ot,{driveId:V.drive,randKey:Math.random(),onModify:Ie})}),e.jsx(ue,{title:"Drive Blocked Members",open:ee,onClose:a=>q(a),width:"50vw",children:e.jsx(Et,{driveId:V.drive,randKey:Math.random(),onModify:Ie})}),e.jsxs(at,{open:oe,onClose:(a,h)=>{h!=="backdropClick"&&L(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[e.jsxs(nt,{id:"alert-dialog-title",children:["Disconnecting",e.jsx(w,{onClick:()=>L(!1),style:{float:"right"},children:e.jsx($t,{})})]}),e.jsx(xt,{children:e.jsxs(bt,{id:"alert-dialog-description",children:["Are you sure you want to disconnect ",e.jsx("b",{children:(ke=F==null?void 0:F.user)==null?void 0:ke.fullName})," from this drive?",e.jsxs(Le,{severity:"warning",style:{marginTop:"10px"},children:["Disconnected Member, will be able to connect again to this drive. if you want to block this member from this drive, please use ",e.jsx("b",{children:"Block"})," option."]})]})}),e.jsxs(ot,{children:[e.jsx(w,{onClick:()=>L(!1),children:"No"}),e.jsx(w,{onClick:()=>Y(F.id),autoFocus:!0,children:"Yes"})]})]})]})},_t=()=>e.jsx(e.Fragment,{children:e.jsx("div",{style:{marginTop:10},children:e.jsx(Gt,{})})}),Kt=()=>e.jsx(_t,{});export{Kt as DriveMembersPage};
