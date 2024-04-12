import{r as c,aC as h,bL as M,aM as e,aG as b,ay as y,M as L,cF as P,c4 as U,ac as B,bI as k,aH as V,aA as R,aD as m,cw as W,bV as _,bU as G,cS as K,ie as Q,ig as X,bK as i,aJ as f,cL as S,bJ as p,cI as Z}from"./index-2a194481.js";import{E as $}from"./edit_class_virtual_form-224739a2.js";import{l as ee}from"./index-dbdbb616.js";import{r as x}from"./remove_html_tags-be9c976e.js";import{S as ae}from"./Skeleton-49b5872f.js";import{A as te}from"./index-8d1996cc.js";import{C as I}from"./index-98a9641c.js";import{P as E}from"./index-a9bb9b36.js";import{A as se}from"./index-582573e6.js";import{M as re}from"./index-b9dad506.js";import{u as ie}from"./olbongo_store-910624cc.js";import"./ckeditor-4c4e3aed.js";import"./ckeditor-eb8ac3e8.js";import"./index-38f0ba5f.js";import"./index-4bcb7f72.js";import"./PickerPanel-87326b23.js";import"./localeData-cd9ff663.js";import"./RangePicker-a3cd4730.js";import"./index-9580d35b.js";import"./InputNumber-0b7918dc.js";import"./extends-cb92634a.js";import"./useNotification-aa85ff0b.js";import"./DialogWrap-8e36c74f.js";import"./MutateObserver-c1a75347.js";import"./index-eb884c20.js";import"./Image-361761f1.js";import"./Upload-56cbf851.js";import"./index-be60139f.js";import"./index-e8792b52.js";import"./InfoCircleFilled-f367ccf6.js";import"./index-df246fd6.js";import"./ActionButton-d68b8b67.js";import"./index-43845558.js";import"./fade-3c234f74.js";const{Meta:ne}=I,oe=l=>{const[n,a]=c.useState([]),[o,u]=c.useState(),[g,C]=c.useState(!0),[F,v]=c.useState(1),[N]=h.useForm();M();const[w]=h.useForm(),[T,j]=c.useState(!1),q=t=>{u(t),j(!0)},A=async(t,r)=>{const{data:s}=await p.custom({url:"",method:"post",meta:{operation:"endVirtualClass",variables:{id:{value:t,type:"Int",required:!0},stop:{value:r,type:"Boolean",required:!0}},fields:["success","message",{virtualClass:["id","name","description","cover","startDate","endDate","duration","durationType","token","canJoin",{darasa:["id","name","code","description"]},{author:["id","firstName","lastName","middleName","fullName","email","pic"]},"created","canEdit","canDelete","canManage","updated","isActive","ended"]}]}}).catch(()=>(i.error("Error in Ending Virtual Class"),{data:null})).then(d=>d);s&&(s.success?(i(s.message),a(n.map(d=>d.id===t?s.virtualClass:d))):i.error(s.message))},Y=async t=>{const{data:r}=await p.custom({url:"",method:"post",meta:{operation:"editVirtualClass",variables:{id:{value:t.id,type:"Int",required:!0},name:{value:t.name,type:"String",required:!0},description:{value:t.description,type:"String",required:!0},duration:{value:t.duration,type:"Int",required:!0},durationType:{value:t.durationType.toUpperCase(),type:"String",required:!0},startDate:{value:t.startDate,type:"DateTime",required:!0},isPublic:{value:!0,type:"Boolean",required:!0}},fields:["success","message",{virtual:["id","name","description","cover","startDate","endDate","duration","durationType","token","canJoin",{darasa:["id","name","code","description"]},{author:["id","firstName","lastName","middleName","fullName","email","pic"]},"created","canEdit","canDelete","canManage","updated","isActive"]}]}}).catch(s=>(i.error("Error editing class"),{data:null})).then(s=>s);r&&(r.success?(i.success(r.message),a(n.map(s=>s.id===r.virtual.id?r.virtual:s)),j(!1)):i.error(r.message))},J=async t=>{const{data:r}=await p.custom({url:"",method:"post",meta:{operation:"deleteVirtualClass",variables:{id:{value:t,type:"Int",required:!0}},fields:["success","message"]}}).catch(s=>(i.error("Error deleting class"),{data:null})).then(s=>s);r&&(r.success?(i.success(r.message),a(n.filter(s=>s.id!==t))):i.error(r.message))},O=t=>{re.confirm({title:"Deleting Virtual Class",icon:e.jsx(Z,{}),content:"Are you sure ...",okText:"Delete",cancelText:"Cancel",onOk:()=>J(t)})},D=async(t,r="",s=!1)=>{C(!0);const{data:d}=await p.custom({url:"",method:"get",meta:{operation:"myVirtualClasses",variables:{page:{value:t,type:"Int",required:!0},key:{value:r,type:"String",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","description","cover","startDate","endDate","duration","durationType","token","canJoin","ended",{darasa:["id","name","code","description"]},{author:["id","firstName","lastName","middleName","fullName","email","pic"]},"created","canEdit","canDelete","canManage","updated","isActive"]}]}}).catch(()=>(i.error("Error fetching classes"),{data:null})).then(H=>H);d&&(v(d.page),a(d.results)),C(!1)},z=async()=>{await p.custom({url:"",method:"get",meta:{operation:"darasaAuth",variables:{},fields:["auth"]}}).catch(()=>(i.error("Error getting darasa auth"),{data:null})).then(t=>t)};return c.useEffect(()=>{z(),D(F)},[]),g?e.jsx(e.Fragment,{children:e.jsx(ae,{loading:g,active:!0})}):e.jsxs(e.Fragment,{children:[e.jsx(b,{children:e.jsx(y,{span:14,children:e.jsx(h,{layout:"vertical",form:N,onFinish:t=>{v(0),D(0,t.key,!0)},children:e.jsx(h.Item,{name:"key",children:e.jsx(L,{size:"large",placeholder:"Search Public Virtual Classes...",prefix:e.jsx(P,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx(U,{sx:{maxHeight:"68vh",overflowY:"auto"},children:e.jsx(B,{spinning:g,children:e.jsxs(b,{children:[n.map(t=>e.jsx(le,{darasa:t,handleDarasaDelete:O,handleDarasaEdit:q,handleDarasaEnd:A},t.id)),n.length===0&&e.jsx(y,{span:24,children:e.jsx(te,{message:"No Virtual Class Found",type:"info",showIcon:!0})})]})})}),e.jsx(k,{title:"Editting "+(o==null?void 0:o.name),width:"40vw",open:T,onClose:t=>j(t),children:e.jsx($,{form:w,darasa:o,onFinish:Y})})]})},le=l=>{var o;const{push:n}=M(),a=c.useMemo(()=>l.darasa,[l.darasa]);return e.jsx(y,{span:12,xs:24,sm:24,md:12,children:e.jsx(I,{style:{margin:"5px"},bodyStyle:{minHeight:"180px"},cover:e.jsx("img",{alt:"example",src:a.cover,style:{height:"200px",objectFit:"cover"}}),actions:[e.jsx(V,{style:{float:"right"},children:e.jsx(R,{trigger:["click"],overlay:e.jsxs(m,{children:[e.jsx(m.Item,{icon:e.jsx(W,{}),disabled:!a.canJoin,onClick:()=>n("/oclass/virtual/class/session/"+a.id+"/"+a.token),children:e.jsx("a",{children:"Join"})}),a.canDelete?e.jsx(m.Item,{disabled:!a.canDelete,icon:e.jsx(_,{}),onClick:()=>l.handleDarasaDelete(a.id),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Delete"})}):e.jsx(e.Fragment,{}),a.canManage&&e.jsx(m.Item,{icon:e.jsx(G,{}),disabled:!a.canManage,onClick:()=>l.handleDarasaEdit(a),children:e.jsx("a",{children:"Edit"})}),a.ended?e.jsx(E,{title:"Un-Stoping Virtual Class",onConfirm:()=>l.handleDarasaEnd(a.id,!1),okText:"Yes",cancelText:"No",disabled:!a.canManage,overlayStyle:{zIndex:9999},children:e.jsx(m.Item,{icon:e.jsx(K,{}),disabled:!a.canManage,children:e.jsx("a",{children:"Un-Stop"})})}):e.jsx(E,{title:"Ending/Stoping Virtual Class",onConfirm:()=>l.handleDarasaEnd(a.id,!0),okText:"Yes",cancelText:"No",disabled:!a.canManage,overlayStyle:{zIndex:9999},children:e.jsx(m.Item,{icon:e.jsx(Q,{}),disabled:!a.canManage,children:e.jsx("a",{children:"End/Stop"})})})]}),overlayStyle:{zIndex:9999},children:e.jsx("a",{className:"ant-dropdown-link",onClick:u=>u.preventDefault(),children:e.jsx(X,{style:{color:"orange",fontSize:28,fontWeight:"bold"}},"ellipsis")})})})],children:e.jsx(ne,{avatar:e.jsx(se,{src:(o=a==null?void 0:a.author)==null?void 0:o.pic}),title:e.jsx(ee.Tooltip,{title:x(a.name),placement:"top",children:e.jsx("a",{onClick:()=>a.canJoin?n("/oclass/virtual/class/session/"+a.id+"/"+a.token):i("You can't join this class"),children:x(a.name).substring(0,20)+" "+(x(a.name).length>20?"...":"")})}),description:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:x(a.description).substring(0,100)}),e.jsxs("p",{children:[e.jsxs(f,{color:"green",children:["Start At:"," ",e.jsx("span",{style:{marginLeft:10},children:S(a.startDate).format("MMMM do, YYYY H:mma")})]}),e.jsxs(f,{color:"green",children:["End In:",e.jsx("span",{style:{marginLeft:10},children:S(a.endDate).format("MMMM do, YYYY H:mma")})]}),a.canJoin?e.jsx(e.Fragment,{}):e.jsx(e.Fragment,{children:e.jsx(f,{color:"red",children:"Not Joinable"})})]})]})})})},a.id)},Ue=l=>{const[n,a]=c.useState(!1),o=ie(u=>u.totalVirtualClasses);return e.jsxs(e.Fragment,{children:[e.jsx("span",{children:e.jsx("a",{onClick:()=>a(!0),children:e.jsx("span",{children:e.jsxs(V,{children:[e.jsx("span",{style:{marginRight:10,fontSize:24,color:"green",fontWeight:"bolder"},children:o}),e.jsx("span",{style:{fontSize:18},children:"Virtual Classess"})]})})})}),e.jsx(k,{title:"Virtual Classes",width:"60vw",open:n,onClose:u=>a(u),footer:[],children:e.jsx(oe,{})})]})};export{Ue as DashboardVirtualClassesComponent};
