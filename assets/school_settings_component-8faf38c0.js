import{ch as U,j as t,bG as Z,bF as X,b4 as W,eq as ae,w as b,bD as D,bH as ne,bt as B,r as p,bC as w,bB as ie,bP as V,bR as T,bQ as ee,g as L,_ as f,aT as k,a1 as _,aO as oe,av as E,c as re,aW as se,aP as K,af as G,aY as le,cl as ce,er as de,es as ue,et as pe,eu as ge}from"./index-c2aacc94.js";import{T as me}from"./index-08dc69fe.js";import{G as xe}from"./index-1c6a345e.js";import{P as fe}from"./index-c8b7207b.js";import{S as ve}from"./SearchOutlined-0a7c7395.js";import{S as he}from"./SyncOutlined-8f7b4813.js";import{D as ye}from"./DeleteOutlined-d1e219b7.js";import{E as Ce}from"./EditOutlined-012ce82f.js";import{S as be}from"./Skeleton-7afb965a.js";import{C as Se}from"./index-792862f2.js";import{S as Pe}from"./index-be2758db.js";const H=U(t.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),Q=U(t.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage");function je(e){return Z("MuiPagination",e)}X("MuiPagination",["root","ul","outlined","text"]);const Ie=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];function Me(e={}){const{boundaryCount:s=1,componentName:i="usePagination",count:r=1,defaultPage:m=1,disabled:h=!1,hideNextButton:y=!1,hidePrevButton:d=!1,onChange:v,page:C,showFirstButton:j=!1,showLastButton:$=!1,siblingCount:c=1}=e,a=W(e,Ie),[o,g]=ae({controlled:C,default:m,name:i,state:"page"}),S=(u,l)=>{C||g(l),v&&v(u,l)},x=(u,l)=>{const n=l-u+1;return Array.from({length:n},(z,q)=>u+q)},P=x(1,Math.min(s,r)),I=x(Math.max(r-s+1,s+1),r),F=Math.max(Math.min(o-c,r-s-c*2-1),s+2),R=Math.min(Math.max(o+c,s+c*2+2),I.length>0?I[0]-2:r-1),N=[...j?["first"]:[],...d?[]:["previous"],...P,...F>s+2?["start-ellipsis"]:s+1<r-s?[s+1]:[],...x(F,R),...R<r-s-1?["end-ellipsis"]:r-s>s?[r-s]:[],...I,...y?[]:["next"],...$?["last"]:[]],A=u=>{switch(u){case"first":return 1;case"previous":return o-1;case"next":return o+1;case"last":return r;default:return null}},O=N.map(u=>typeof u=="number"?{onClick:l=>{S(l,u)},type:"page",page:u,selected:u===o,disabled:h,"aria-current":u===o?"true":void 0}:{onClick:l=>{S(l,A(u))},type:u,page:A(u),selected:!1,disabled:h||u.indexOf("ellipsis")===-1&&(u==="next"||u==="last"?o>=r:o<=1)});return b({items:O},a)}function $e(e){return Z("MuiPaginationItem",e)}const ke=X("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]),M=ke,Y=U(t.jsx("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),J=U(t.jsx("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),Oe=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],te=(e,s)=>{const{ownerState:i}=e;return[s.root,s[i.variant],s[`size${T(i.size)}`],i.variant==="text"&&s[`text${T(i.color)}`],i.variant==="outlined"&&s[`outlined${T(i.color)}`],i.shape==="rounded"&&s.rounded,i.type==="page"&&s.page,(i.type==="start-ellipsis"||i.type==="end-ellipsis")&&s.ellipsis,(i.type==="previous"||i.type==="next")&&s.previousNext,(i.type==="first"||i.type==="last")&&s.firstLast]},ze=e=>{const{classes:s,color:i,disabled:r,selected:m,size:h,shape:y,type:d,variant:v}=e,C={root:["root",`size${T(h)}`,v,y,i!=="standard"&&`${v}${T(i)}`,r&&"disabled",m&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[d]],icon:["icon"]};return ee(C,$e,s)},Re=D("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:te})(({theme:e,ownerState:s})=>b({},e.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(e.vars||e).palette.text.primary,height:"auto",[`&.${M.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},s.size==="small"&&{minWidth:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},s.size==="large"&&{minWidth:40,borderRadius:40/2,padding:"0 10px",fontSize:e.typography.pxToRem(15)})),Fe=D(ne,{name:"MuiPaginationItem",slot:"Root",overridesResolver:te})(({theme:e,ownerState:s})=>b({},e.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(e.vars||e).palette.text.primary,[`&.${M.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${M.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},transition:e.transitions.create(["color","background-color"],{duration:e.transitions.duration.short}),"&:hover":{backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${M.selected}`]:{backgroundColor:(e.vars||e).palette.action.selected,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selected} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:B(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(e.vars||e).palette.action.selected}},[`&.${M.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selected} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:B(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},[`&.${M.disabled}`]:{opacity:1,color:(e.vars||e).palette.action.disabled,backgroundColor:(e.vars||e).palette.action.selected}}},s.size==="small"&&{minWidth:26,height:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},s.size==="large"&&{minWidth:40,height:40,borderRadius:40/2,padding:"0 10px",fontSize:e.typography.pxToRem(15)},s.shape==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius}),({theme:e,ownerState:s})=>b({},s.variant==="text"&&{[`&.${M.selected}`]:b({},s.color!=="standard"&&{color:(e.vars||e).palette[s.color].contrastText,backgroundColor:(e.vars||e).palette[s.color].main,"&:hover":{backgroundColor:(e.vars||e).palette[s.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[s.color].main}},[`&.${M.focusVisible}`]:{backgroundColor:(e.vars||e).palette[s.color].dark}},{[`&.${M.disabled}`]:{color:(e.vars||e).palette.action.disabled}})},s.variant==="outlined"&&{border:e.vars?`1px solid rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${M.selected}`]:b({},s.color!=="standard"&&{color:(e.vars||e).palette[s.color].main,border:`1px solid ${e.vars?`rgba(${e.vars.palette[s.color].mainChannel} / 0.5)`:B(e.palette[s.color].main,.5)}`,backgroundColor:e.vars?`rgba(${e.vars.palette[s.color].mainChannel} / ${e.vars.palette.action.activatedOpacity})`:B(e.palette[s.color].main,e.palette.action.activatedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[s.color].mainChannel} / calc(${e.vars.palette.action.activatedOpacity} + ${e.vars.palette.action.focusOpacity}))`:B(e.palette[s.color].main,e.palette.action.activatedOpacity+e.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${M.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[s.color].mainChannel} / calc(${e.vars.palette.action.activatedOpacity} + ${e.vars.palette.action.focusOpacity}))`:B(e.palette[s.color].main,e.palette.action.activatedOpacity+e.palette.action.focusOpacity)}},{[`&.${M.disabled}`]:{borderColor:(e.vars||e).palette.action.disabledBackground,color:(e.vars||e).palette.action.disabled}})})),Ne=D("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(e,s)=>s.icon})(({theme:e,ownerState:s})=>b({fontSize:e.typography.pxToRem(20),margin:"0 -8px"},s.size==="small"&&{fontSize:e.typography.pxToRem(18)},s.size==="large"&&{fontSize:e.typography.pxToRem(22)})),Ae=p.forwardRef(function(s,i){const r=w({props:s,name:"MuiPaginationItem"}),{className:m,color:h="standard",component:y,components:d={},disabled:v=!1,page:C,selected:j=!1,shape:$="circular",size:c="medium",slots:a={},type:o="page",variant:g="text"}=r,S=W(r,Oe),x=b({},r,{color:h,disabled:v,selected:j,shape:$,size:c,type:o,variant:g}),P=ie(),I=ze(x),R=(P.direction==="rtl"?{previous:a.next||d.next||J,next:a.previous||d.previous||Y,last:a.first||d.first||Q,first:a.last||d.last||H}:{previous:a.previous||d.previous||Y,next:a.next||d.next||J,first:a.first||d.first||Q,last:a.last||d.last||H})[o];return o==="start-ellipsis"||o==="end-ellipsis"?t.jsx(Re,{ref:i,ownerState:x,className:V(I.root,m),children:"…"}):t.jsxs(Fe,b({ref:i,ownerState:x,component:y,disabled:v,className:V(I.root,m)},S,{children:[o==="page"&&C,R?t.jsx(Ne,{as:R,ownerState:x,className:I.icon}):null]}))}),Le=Ae,Be=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],Te=e=>{const{classes:s,variant:i}=e;return ee({root:["root",i],ul:["ul"]},je,s)},Ee=D("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:i}=e;return[s.root,s[i.variant]]}})({}),De=D("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(e,s)=>s.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function qe(e,s,i){return e==="page"?`${i?"":"Go to "}page ${s}`:`Go to ${e} page`}const Ue=p.forwardRef(function(s,i){const r=w({props:s,name:"MuiPagination"}),{boundaryCount:m=1,className:h,color:y="standard",count:d=1,defaultPage:v=1,disabled:C=!1,getItemAriaLabel:j=qe,hideNextButton:$=!1,hidePrevButton:c=!1,renderItem:a=O=>t.jsx(Le,b({},O)),shape:o="circular",showFirstButton:g=!1,showLastButton:S=!1,siblingCount:x=1,size:P="medium",variant:I="text"}=r,F=W(r,Be),{items:R}=Me(b({},r,{componentName:"Pagination"})),N=b({},r,{boundaryCount:m,color:y,count:d,defaultPage:v,disabled:C,getItemAriaLabel:j,hideNextButton:$,hidePrevButton:c,renderItem:a,shape:o,showFirstButton:g,showLastButton:S,siblingCount:x,size:P,variant:I}),A=Te(N);return t.jsx(Ee,b({"aria-label":"pagination navigation",className:V(A.root,h),ownerState:N,ref:i},F,{children:t.jsx(De,{className:A.ul,ownerState:N,children:R.map((O,u)=>t.jsx("li",{children:a(b({},O,{color:y,"aria-label":j(O.type,O.page,O.selected),shape:o,size:P,variant:I}))},u))})}))}),ss=Ue,ts=e=>{const[s,i]=p.useState([]),[r,m]=p.useState([]),[h,y]=p.useState([]),[d,v]=p.useState([]),C=async(o,g="")=>{const{data:S}=await L.custom({url:"",method:"get",meta:{operation:"systemRolePermissionsRecords",variables:{page:{value:o,type:"Int",required:!0},key:{value:g,type:"String",required:!1},roleId:{value:e.role.id,type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:["key","title","description","chosen"]}]}}),x=[];S.results.forEach(P=>{P.chosen&&x.push(P.key)}),i([...S.results]),m(x)},j=async o=>{const{data:g}=await L.custom({url:"",method:"post",meta:{operation:"addRolePermissions",variables:{roleId:{value:parseInt(e.role.id),type:"Int",required:!0},permissions:{value:o,type:"[Int]",required:!0}},fields:["success","message"]}});g.success?f.success(g.message):f.error(g.message)},$=async o=>{const{data:g}=await L.custom({url:"",method:"post",meta:{operation:"removeRolePermissions",variables:{roleId:{value:parseInt(e.role.id),type:"Int",required:!0},permissions:{value:o,type:"[Int]",required:!0}},fields:["success","message"]}});g.success?f.success(g.message):f.error(g.message)},c=o=>{m(o),d.length>0&&j(d),h.length>0&&$(h)},a=(o,g)=>{v(o),y(g)};return p.useEffect(()=>{C(1)},[e.randKey,e.role]),t.jsx(t.Fragment,{children:t.jsx(me,{titles:["Not Assigned Permissions","Assigned Permissions"],dataSource:s,showSearch:!0,listStyle:{width:"100vw",height:"65vh"},operations:["Add","Remove"],targetKeys:r,onChange:(o,g,S)=>c(o.map(x=>x.toString())),onSelectChange:()=>a,onSearch:(o,g)=>{},render:o=>o.title})})},{TextArea:Ve}=_,Ke=e=>{const[s,i]=p.useState(e.programme.isActive);return p.useEffect(()=>{e.form.setFieldsValue({name:e.programme.name,description:e.programme.description,isActive:e.programme.isActive})},[e.form,e.programme]),t.jsx(t.Fragment,{children:t.jsxs(k,{layout:"vertical",form:e.form,onFinish:r=>{r.isActive=s,r.id=parseInt(e.programme.id),e.onFinish(r)},requiredMark:!1,children:[t.jsx(k.Item,{name:"name",label:"Name",rules:[{required:!0,type:"string",message:"Please input Name"}],children:t.jsx(_,{size:"large",placeholder:"Enter Name ..."})}),t.jsx(k.Item,{name:"description",label:"Description",rules:[{required:!1,type:"string",message:"Please input Description"}],children:t.jsx(Ve,{rows:4})}),t.jsx(k.Item,{name:"isActive",children:t.jsx(oe,{checked:s,onChange:()=>i(!s),children:"Active"})}),t.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:t.jsx(E,{type:"primary",size:"large",htmlType:"submit",children:"Save"})})]})})},as=e=>{const[s,i]=p.useState(),[r,m]=p.useState([]),[h,y]=p.useState(0),[d,v]=p.useState(20),[C,j]=p.useState(""),[$,c]=p.useState(!0);re();const[a]=k.useForm(),[o]=k.useForm(),S=!xe.useBreakpoint().lg,[x,P]=p.useState(!1),I=l=>{i(l),P(!0)},F=async l=>{const{data:n}=await L.custom({url:"",method:"post",meta:{operation:"updateProgramme",variables:{id:{value:l.id,type:"Int",required:!0},name:{value:l.name,type:"String",required:!0},description:{value:l.description,type:"String",required:!1},isActive:{value:l.isActive,type:"Boolean",required:!0}},fields:["success","message",{programme:["id","name","description","created","updated","isActive","canDelete","canEdit","canManage"]}]}});n.success?(f.success(n.message),o.resetFields(),P(!1),m(r.map(z=>z.id===n.programme.id?n.programme:z))):f.error(n.message)},R=async()=>{const{data:l}=await L.custom({url:"",method:"post",meta:{operation:"syncSystemProgrammes",variables:{},fields:["success","message"]}});l.success?(f.success(l.message),r.length=0,m([]),u(1)):f.error(l.message)},N=async l=>{const{data:n}=await L.custom({url:"",method:"post",meta:{operation:"deleteProgramme",variables:{id:{value:parseInt(l.toString()),type:"Int",required:!0}},fields:["success","message"]}});n.success?(f.success(n.message),m(r.filter(z=>z.id!==l))):f.error(n.message)},A=()=>{f("Canceled")},O=[{title:"Name",dataIndex:"name",fixed:!0,render:(l,n,z)=>t.jsx("span",{children:t.jsx("a",{children:n.name})})},{title:"Created",dataIndex:"created",render:(l,n,z)=>t.jsx(t.Fragment,{children:t.jsx("span",{children:new Date(n.created).toLocaleString()})})},{title:"Status",dataIndex:"isActive",render:(l,n,z)=>t.jsx("a",{children:n!=null&&n.isActive?t.jsx("span",{style:{color:"green"},children:"Active"}):t.jsx("span",{style:{color:"red"},children:"Inactive"})})},{title:"",dataIndex:"action",render:(l,n,z)=>t.jsxs("div",{style:{display:"flex",justifyContent:"flex-end"},children:[e.control&&t.jsx(fe,{title:"Are you sure to delete this Programme?",onConfirm:()=>N(n==null?void 0:n.id),onCancel:()=>A,okText:"Yes",cancelText:"No",disabled:!(n!=null&&n.canDelete),overlayStyle:{zIndex:9999},children:t.jsx(E,{icon:t.jsx(ye,{}),disabled:!(n!=null&&n.canDelete)})}),e.control&&t.jsx(G,{title:"Edit "+(n==null?void 0:n.name)+" Programme",color:"green",children:t.jsx(E,{icon:t.jsx(Ce,{}),disabled:!(n!=null&&n.canEdit),onClick:()=>I(n)})})]})}],u=async(l,n="",z=20)=>{const{data:q}=await L.custom({url:"",method:"get",meta:{operation:"systemProgrammes",variables:{page:{value:l,type:"Int",required:!0},key:{value:n,type:"String",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","description","isActive","created","updated","canEdit","canDelete","canManage"]}]}});y(q.total),m([...q.results]),c(!1)};return p.useEffect(()=>{u(1,"",20)},[]),t.jsxs(t.Fragment,{children:[t.jsxs(se,{style:{marginTop:10},children:[t.jsx(K,{span:S?24:20,children:t.jsx(k,{layout:"vertical",form:a,onFinish:l=>{j(l.key),r.length=0,u(1,l.key)},children:t.jsx(k.Item,{name:"key",children:t.jsx(_,{size:"large",placeholder:"Search ...",prefix:t.jsx(ve,{}),autoComplete:"off",allowClear:!0})})})}),(e==null?void 0:e.control)&&t.jsx(K,{span:S?24:4,style:{display:"flex",justifyContent:"flex-end"},children:t.jsx(G,{title:"Synchronize Default System Programmes",children:t.jsx(E,{icon:t.jsx(he,{}),size:"large",onClick:()=>R(),children:"Sync Programmes"})})})]}),t.jsx(le,{loading:$,columns:O,dataSource:r,pagination:{onChange:(l,n)=>{v(n),u(l,C,n)},total:h,pageSize:d,position:["bottomCenter"],showQuickJumper:!1},scroll:{x:!0}}),t.jsx(ce,{title:"Edit "+(s==null?void 0:s.name)+" Informations",width:"40vw",open:x,onClose:l=>P(l),children:t.jsx(Ke,{form:o,programme:s,onFinish:F})})]})},ns=e=>{const[s,i]=p.useState(!1),[r,m]=p.useState(!1),[h,y]=p.useState(),[d]=k.useForm(),v=async()=>{de().then(c=>{c&&(c.success?(f.success(c.message),C()):f.error(c.message))})},C=async()=>{var c;m(!0),ue(e.school,((c=e.school)==null?void 0:c.id)??0).then(a=>{a?(i(!0),y(a),d.setFieldsValue({teachersCanCreateClasses:a.teachersCanCreateClasses,teachersCanCreateDrives:a.teachersCanCreateDrives,teachersCanCreatePublicVirtualClassSessions:a.teachersCanCreatePublicVirtualClassSessions,dispatchMessagesOnClassVirtualSessionCreation:a.dispatchMessagesOnClassVirtualSessionCreation,dispatchMessagesOnFilesUpload:a.dispatchMessagesOnFilesUpload,dispatchMessagesOnAssignmentsCreation:a.dispatchMessagesOnAssignmentsCreation,dispatchMessagesOnAnnouncementsCreation:a.dispatchMessagesOnAnnouncementsCreation,dispatchMessagesOnTimetableSessionsCreation:a.dispatchMessagesOnTimetableSessionsCreation,dispatchMessagesOnTimetableSessionCancellation:a.dispatchMessagesOnTimetableSessionCancellation,dispatchMessagesOnTimetableSessionRescheduling:a.dispatchMessagesOnTimetableSessionRescheduling,studentsCanCreateClassVirtualSessions:a.studentsCanCreateClassVirtualSessions,studentsCanCreateDrives:a.studentsCanCreateDrives,studentsCanCreateClasses:a.studentsCanCreateClasses,studentsCanUploadFiles:a.studentsCanUploadFiles,teachersCanUploadFiles:a.teachersCanUploadFiles})):i(!1)}),m(!1)},j=async c=>{pe(c,e.school.id).then(a=>{a&&(a.success?f.success(a.message):f.error(a.message))})},$=async c=>{ge(c).then(a=>{a&&(a.success?f.success(a.message):f.error(a.message))})};return p.useEffect(()=>{C()},[e.randKey,e.school]),t.jsx(t.Fragment,{children:t.jsx(be,{loading:r,active:!0,children:s?t.jsx("div",{children:t.jsx(k,{layout:"horizontal",form:d,onFinish:c=>{e.school?j(c):$(c)},onChange:()=>{d.submit()},children:t.jsx(se,{style:{display:"flex",justifyContent:"flex-start"},children:t.jsx(K,{span:e.full?24:12,children:t.jsx(Se,{children:Object.entries(h??{}).map(([c,a])=>t.jsx(k.Item,{label:c.split(/(?=[A-Z])/).map(o=>o.charAt(0).toUpperCase()+o.slice(1)).join(" "),name:c,initialValue:a,children:t.jsx(Pe,{checked:d.getFieldValue(c),onChange:o=>{d.submit(),y(d.getFieldsValue())}})}))})})})})}):t.jsx(t.Fragment,{children:t.jsx("div",{style:{display:"flex",justifyContent:"center"},children:t.jsx(E,{onClick:()=>v(),children:"Auto Create Settings"})})})})})};export{as as P,ts as R,ns as S,ss as a};
