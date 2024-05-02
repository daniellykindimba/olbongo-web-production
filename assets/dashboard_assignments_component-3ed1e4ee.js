import{r as i,aU as g,c as X,j as e,aY as k,aQ as v,$ as ee,cZ as te,ar as se,aS as ne,aV as p,fF as O,cb as ie,cc as ae,cS as re,e6 as oe,a$ as u,ad as A,d1 as le,av as de,c2 as x,g as S,iS as c,d0 as ce,co as me}from"./index-62ca8c71.js";import{E as ue,A as he,a as ge,b as pe}from"./edit_assignment-c0653b3a.js";import{L as y}from"./index-a5f62a10.js";import{M as xe}from"./index-57e02f2b.js";import{T as V}from"./index-2520e10c.js";import"./data_objects-491ec606.js";import"./data_objects-db8d9736.js";import"./index-c9a71fc6.js";import"./index-30f2475f.js";import"./index-d0bf4e29.js";import"./InfoCircleFilled-8c818918.js";import"./index-4606efc5.js";import"./Upload-af63b42f.js";import"./fade-6a3d81d7.js";import"./ckeditor-60a8f509.js";import"./ckeditor-72044844.js";import"./index-965e0d1d.js";import"./index-b23d1d6c.js";import"./index-9484e0cf.js";import"./localeData-90cc4ac5.js";import"./SinglePicker-da7dc94a.js";import"./ActionButton-e3468a72.js";import"./DialogWrap-720f6df3.js";import"./index-243c6e9a.js";import"./Skeleton-26b0114a.js";const W=m=>{const[o,r]=i.useState([]),[s,d]=i.useState(),[h,L]=i.useState(!0),[M,R]=i.useState(1);i.useState(25);const[q]=g.useForm(),[je,N]=i.useState(0),[be,z]=i.useState(0),[_,B]=i.useState(!0);X(),i.useState(!1);const[P,C]=i.useState(!1),[H,j]=i.useState(!1),[U,b]=i.useState(!1),[Y,w]=i.useState(!1);g.useForm();const[F]=g.useForm(),Z=t=>{d(t),w(!0)},$=t=>{r(o.map(n=>n.id===t.id?t:n))},D=t=>{d(t),b(!0)},I=t=>{d(t),C(!0)},K=t=>{d(t),j(!0)},f=async(t,n="",a=!1)=>{const{data:l}=await S.custom({url:"",method:"get",meta:{operation:"myAssignments",variables:{page:{value:t,type:"Int",required:!0},key:{value:n,type:"String",required:!1},overdue:{value:m.overdue?m.overdue:!1,type:"Boolean",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","title","description","totalAttachments","deadline","onlineSubmission","submitted","canSubmit","created","updated","isActive","canDelete","canEdit","canManage","canUploadAttachment","attachmentZippedFolderPath",{user:["id","firstName","middleName","lastName","fullName","pic"]},{darasa:["id"]}]}]}}).catch(E=>(c.error("Failed to fetch assignments"),{data:null})).then(E=>E);l&&(z(l.total),N(l.pages),R(l.page),B(l.hasNext),r(o.concat(l.results)),r(t===1?[...l.results]:[...o,...l.results])),L(!1)},Q=async t=>{const{data:n}=await S.custom({url:"",method:"post",meta:{operation:"deleteDarasaAssignment",variables:{id:{value:t,type:"Int",required:!0}},fields:["success","message"]}}).catch(a=>(c.error("Failed to delete assignment"),{data:null})).then(a=>a);n&&(n.success?(c.success(n.message),r(o.filter(a=>a.id!==t))):c.error(n.message))},G=async t=>{const{data:n}=await S.custom({url:"",method:"post",meta:{operation:"updateDarasaAssignment",variables:{id:{value:s===void 0?0:s.id,type:"Int",required:!0},title:{value:t.title,type:"String",required:!0},description:{value:t.description,type:"String",required:!0},deadline:{value:t.deadline,type:"DateTime",required:!0},online:{value:t.online,type:"Boolean",required:!0}},fields:["success","message",{assignment:["id","title","description","deadline","onlineSubmission","submitted","canSubmit",{user:["id"]},{darasa:["id"]},"created","updated","isActive","canDelete","canEdit","canManage"]}]}}).catch(a=>(c.error("Failed to update assignment"),{data:null})).then(a=>a);n&&(n.success?(c(n.message),r(o.map(a=>a.id===n.assignment.id?n.assignment:a)),F.resetFields(),j(!1)):c.error(n.message))},J=t=>{xe.confirm({title:"Deleting Assignment",icon:e.jsx(ce,{}),content:"Are you sure ...",okText:"Delete",cancelText:"Cancel",onOk:()=>Q(t)})};return i.useEffect(()=>{f(M)},[]),e.jsxs(e.Fragment,{children:[e.jsx(k,{children:e.jsx(v,{span:16,children:e.jsx(g,{layout:"vertical",form:q,onFinish:t=>f(0,t.key,!0),children:e.jsx(g.Item,{name:"key",children:e.jsx(ee,{size:"large",placeholder:"Search Assignments...",prefix:e.jsx(te,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx("div",{id:"scrollableDiv",style:{height:"62vh",overflow:"auto"},children:e.jsxs(se,{spinning:h,children:[e.jsx(y,{itemLayout:"horizontal",dataSource:o,renderItem:t=>e.jsx("div",{style:{background:"white",marginBottom:5,paddingLeft:10,paddingTop:10},children:e.jsx(y.Item,{style:{margin:0,padding:0},actions:[e.jsx(ne,{trigger:["click"],overlay:e.jsxs(p,{children:[e.jsx(p.Item,{icon:e.jsx(O,{}),children:e.jsx("a",{target:"_blank",onClick:()=>D(t),children:"Submissions"})}),e.jsx(p.Item,{icon:e.jsx(O,{}),children:e.jsx("a",{target:"_blank",onClick:()=>I(t),children:"Attachements"})}),e.jsx(p.Item,{icon:e.jsx(ie,{}),disabled:!t.canDelete,onClick:()=>K(t),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Edit"})}),e.jsx(p.Item,{icon:e.jsx(ae,{}),disabled:!t.canDelete,onClick:()=>J(t.id),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Delete"})})]}),overlayStyle:{zIndex:9999},children:e.jsx("a",{className:"ant-dropdown-link",onClick:n=>n.preventDefault(),children:e.jsx(re,{style:{color:"orange",fontSize:28,fontWeight:"bold"}})})})],children:e.jsx(y.Item.Meta,{style:{borderBottom:"1px solid #e8e8e8",paddingBottom:10},avatar:e.jsx(oe,{}),title:e.jsxs("a",{target:"_blank",rel:"noreferrer",children:[t.title,t.onlineSubmission&&e.jsx("span",{style:{marginLeft:20},children:e.jsx(u,{color:"red",children:"Online Submission"})})]}),description:e.jsxs(e.Fragment,{children:[e.jsx("span",{dangerouslySetInnerHTML:{__html:t.description}}),e.jsxs("p",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsxs("span",{children:[e.jsxs(u,{color:"cyan",children:[e.jsx("span",{style:{marginRight:5},children:"Created:"}),new Date(t.created).toLocaleString()]}),e.jsxs(u,{color:"green",children:[e.jsx("span",{style:{marginRight:5},children:"Deadline:"}),new Date(t.deadline).toLocaleString()]}),e.jsx(A,{title:"Click to View Attachments",children:e.jsx("a",{onClick:()=>I(t),children:e.jsxs(u,{color:"orange",children:[e.jsx("span",{style:{marginRight:5},children:"Attachments:"}),t.totalAttachments]})})})]}),e.jsxs("span",{children:[t.canSubmit&&!t.canManage&&e.jsx(A,{title:t.submitted?"Click to Re-submitt Your Assignment Work":"Click to Submitt Your Assignment Work",color:t.submitted?"green":"red",children:e.jsx("a",{onClick:()=>Z(t),children:e.jsx(u,{color:t.submitted?"green":"red",icon:e.jsx(le,{}),children:e.jsxs("span",{style:{marginRight:5},children:[t.submitted?"Re-submitt":"Submitt"," ","Assignment Work:"]})})})}),t.canManage&&e.jsx(A,{title:"Click to View Students Submissions",color:"green",children:e.jsx("a",{onClick:()=>D(t),children:e.jsx(u,{color:"green",children:e.jsx("span",{style:{marginRight:5},children:"Submissions"})})})})]})]})]})})},"class-assignment-link-"+t.id)},"class-resource-link-item-container-"+t.id)}),_&&e.jsx("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"},children:e.jsx(de,{type:"primary",onClick:()=>{f(M+1)},children:"Load More"})})]})}),e.jsx(x,{title:"Edit Assignment",open:H,onClose:t=>j(t),width:"50vw",children:e.jsx(ue,{assignment:s,form:F,onFinish:G})}),e.jsx(x,{title:"Assignment Attachements",visible:P,onClose:t=>C(t),width:"50vw",children:e.jsx(he,{assignment:s,canManage:(s==null?void 0:s.canManage)??!1})}),e.jsx(x,{title:"Assignment Submissions",open:U,onOk:()=>b(!1),onClose:t=>b(t),width:"50vw",children:e.jsx(ge,{assignment:s,canManage:(s==null?void 0:s.canManage)??!1})}),e.jsx(x,{title:"Assignment Work Submission",open:Y,onClose:t=>w(t),width:"50vw",children:e.jsx(pe,{assignment:s,canManage:(s==null?void 0:s.canManage)??!1,submitted:s==null?void 0:s.submitted,onFinish:$})})]})},{TabPane:T}=V,He=m=>{var d;const[o,r]=i.useState(!1),s=me(h=>h.totalAssignments);return e.jsxs(e.Fragment,{children:[e.jsx("span",{children:e.jsx("a",{onClick:()=>r(!0),style:{padding:"0px !important",cursor:"pointer"},children:e.jsxs("span",{onClick:()=>r(!0),style:{padding:"0px !important",cursor:"pointer"},children:[e.jsx(k,{children:e.jsxs(v,{children:[e.jsx("span",{style:{marginRight:10,fontSize:20,color:"green",fontWeight:"bolder"},children:s}),e.jsx("span",{style:{fontSize:18},children:"Assignments"})]})}),e.jsx(k,{children:e.jsxs(v,{children:[e.jsx("span",{style:{marginRight:10,fontSize:20,color:"red",fontWeight:"bolder"},children:(d=m==null?void 0:m.data)==null?void 0:d.overdue_assignments}),e.jsx("span",{style:{fontSize:18},children:"Assignments Overdue"})]})})]})})}),e.jsx(x,{title:"Assignments",width:"60vw",open:o,onClose:h=>r(h),children:e.jsxs(V,{defaultActiveKey:"1",children:[e.jsx(T,{tab:"Assignments",children:e.jsx(W,{infinite:!0,overdue:!1})},"1"),e.jsx(T,{tab:"Overdue Assignments",children:e.jsx(W,{infinite:!0,overdue:!0})},"2")]})})]})};export{He as DashboardAssignmentsComponent};
