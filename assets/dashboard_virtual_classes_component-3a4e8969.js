import{r as c,aT as h,c as M,j as e,aW as E,aP as y,a1 as H,B,a8 as L,cl as k,aX as V,aR as R,aU as u,_ as i,aZ as j,cP as S,g as p,cu as U}from"./index-3f04361d.js";import{E as W}from"./edit_class_virtual_form-60d28f2a.js";import{l as _}from"./index-39a814b8.js";import{r as x}from"./remove_html_tags-be9c976e.js";import{S as X}from"./Skeleton-4286ac29.js";import{A as Z}from"./index-367510e2.js";import{C as I}from"./index-2ac5d61b.js";import{P as b}from"./index-f2761152.js";import{S as G,E as K}from"./StopOutlined-bae85863.js";import{A as Q}from"./index-094fff42.js";import{M as $}from"./index-0f874ea4.js";import{S as ee}from"./SearchOutlined-ca526dda.js";import{D as ae}from"./DownloadOutlined-f5329528.js";import{D as te}from"./DeleteOutlined-dd5d4858.js";import{E as re}from"./EditOutlined-036bd618.js";import{C as se}from"./CheckOutlined-9f791227.js";import{E as ie}from"./ExclamationCircleOutlined-dc1ce38f.js";import"./ckeditor-03e5dfe4.js";import"./ckeditor-21ed7852.js";import"./index-70413df2.js";import"./index-c576a427.js";import"./index-a52eff82.js";import"./localeData-ee81be6c.js";import"./SwapRightOutlined-c4e52b1e.js";import"./SinglePicker-8226d477.js";import"./index-5c7d8a8d.js";import"./UpOutlined-7082c42f.js";import"./InputNumber-baf1c013.js";import"./defineProperty-70760e04.js";import"./useNotification-c00c2ab5.js";import"./DialogWrap-baa689d5.js";import"./index-983365c0.js";import"./useMutateObserver-f4657bd8.js";import"./index-ee5ddf71.js";import"./Image-6bd0bf5e.js";import"./Upload-875c30fd.js";import"./Rate-7f164c2b.js";import"./index-74485df2.js";import"./index-464f1c81.js";import"./DotChartOutlined-f39c986e.js";import"./InfoCircleFilled-cf97344e.js";import"./InfoCircleFilled-baaa675e.js";import"./index-926c2b48.js";import"./ActionButton-1fdd8a6f.js";import"./index-0a6ac51b.js";import"./fade-4604162d.js";import"./DownloadOutlined-6cd35f11.js";import"./DeleteOutlined-25685737.js";import"./EditOutlined-401a1613.js";const{Meta:ne}=I,oe=l=>{const[n,a]=c.useState([]),[o,m]=c.useState(),[g,C]=c.useState(!0),[N,v]=c.useState(1),[F]=h.useForm();M();const[w]=h.useForm(),[T,f]=c.useState(!1),q=t=>{m(t),f(!0)},Y=async(t,s)=>{const{data:r}=await p.custom({url:"",method:"post",meta:{operation:"endVirtualClass",variables:{id:{value:t,type:"Int",required:!0},stop:{value:s,type:"Boolean",required:!0}},fields:["success","message",{virtualClass:["id","name","description","cover","startDate","endDate","duration","durationType","token","canJoin",{darasa:["id","name","code","description"]},{author:["id","firstName","lastName","middleName","fullName","email","pic"]},"created","canEdit","canDelete","canManage","updated","isActive","ended"]}]}}).catch(()=>(i.error("Error in Ending Virtual Class"),{data:null})).then(d=>d);r&&(r.success?(i(r.message),a(n.map(d=>d.id===t?r.virtualClass:d))):i.error(r.message))},A=async t=>{const{data:s}=await p.custom({url:"",method:"post",meta:{operation:"editVirtualClass",variables:{id:{value:t.id,type:"Int",required:!0},name:{value:t.name,type:"String",required:!0},description:{value:t.description,type:"String",required:!0},duration:{value:t.duration,type:"Int",required:!0},durationType:{value:t.durationType.toUpperCase(),type:"String",required:!0},startDate:{value:t.startDate,type:"DateTime",required:!0},isPublic:{value:!0,type:"Boolean",required:!0}},fields:["success","message",{virtual:["id","name","description","cover","startDate","endDate","duration","durationType","token","canJoin",{darasa:["id","name","code","description"]},{author:["id","firstName","lastName","middleName","fullName","email","pic"]},"created","canEdit","canDelete","canManage","updated","isActive"]}]}}).catch(r=>(i.error("Error editing class"),{data:null})).then(r=>r);s&&(s.success?(i.success(s.message),a(n.map(r=>r.id===s.virtual.id?s.virtual:r)),f(!1)):i.error(s.message))},O=async t=>{const{data:s}=await p.custom({url:"",method:"post",meta:{operation:"deleteVirtualClass",variables:{id:{value:t,type:"Int",required:!0}},fields:["success","message"]}}).catch(r=>(i.error("Error deleting class"),{data:null})).then(r=>r);s&&(s.success?(i.success(s.message),a(n.filter(r=>r.id!==t))):i.error(s.message))},J=t=>{$.confirm({title:"Deleting Virtual Class",icon:e.jsx(ie,{}),content:"Are you sure ...",okText:"Delete",cancelText:"Cancel",onOk:()=>O(t)})},D=async(t,s="",r=!1)=>{C(!0);const{data:d}=await p.custom({url:"",method:"get",meta:{operation:"myVirtualClasses",variables:{page:{value:t,type:"Int",required:!0},key:{value:s,type:"String",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","description","cover","startDate","endDate","duration","durationType","token","canJoin","ended",{darasa:["id","name","code","description"]},{author:["id","firstName","lastName","middleName","fullName","email","pic"]},"created","canEdit","canDelete","canManage","updated","isActive"]}]}}).catch(()=>(i.error("Error fetching classes"),{data:null})).then(z=>z);d&&(v(d.page),a(d.results)),C(!1)},P=async()=>{await p.custom({url:"",method:"get",meta:{operation:"darasaAuth",variables:{},fields:["auth"]}}).catch(()=>(i.error("Error getting darasa auth"),{data:null})).then(t=>t)};return c.useEffect(()=>{P(),D(N)},[]),g?e.jsx(e.Fragment,{children:e.jsx(X,{loading:g,active:!0})}):e.jsxs(e.Fragment,{children:[e.jsx(E,{children:e.jsx(y,{span:14,children:e.jsx(h,{layout:"vertical",form:F,onFinish:t=>{v(0),D(0,t.key,!0)},children:e.jsx(h.Item,{name:"key",children:e.jsx(H,{size:"large",placeholder:"Search Public Virtual Classes...",prefix:e.jsx(ee,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx(B,{sx:{maxHeight:"68vh",overflowY:"auto"},children:e.jsx(L,{spinning:g,children:e.jsxs(E,{children:[n.map(t=>e.jsx(le,{darasa:t,handleDarasaDelete:J,handleDarasaEdit:q,handleDarasaEnd:Y},t.id)),n.length===0&&e.jsx(y,{span:24,children:e.jsx(Z,{message:"No Virtual Class Found",type:"info",showIcon:!0})})]})})}),e.jsx(k,{title:"Editting "+(o==null?void 0:o.name),width:"40vw",open:T,onClose:t=>f(t),children:e.jsx(W,{form:w,darasa:o,onFinish:A})})]})},le=l=>{var o;const{push:n}=M(),a=c.useMemo(()=>l.darasa,[l.darasa]);return e.jsx(y,{span:12,xs:24,sm:24,md:12,children:e.jsx(I,{style:{margin:"5px"},bodyStyle:{minHeight:"180px"},cover:e.jsx("img",{alt:"example",src:a.cover,style:{height:"200px",objectFit:"cover"}}),actions:[e.jsx(V,{style:{float:"right"},children:e.jsx(R,{trigger:["click"],overlay:e.jsxs(u,{children:[e.jsx(u.Item,{icon:e.jsx(ae,{}),disabled:!a.canJoin,onClick:()=>n("/oclass/virtual/class/session/"+a.id+"/"+a.token),children:e.jsx("a",{children:"Join"})}),a.canDelete?e.jsx(u.Item,{disabled:!a.canDelete,icon:e.jsx(te,{}),onClick:()=>l.handleDarasaDelete(a.id),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Delete"})}):e.jsx(e.Fragment,{}),a.canManage&&e.jsx(u.Item,{icon:e.jsx(re,{}),disabled:!a.canManage,onClick:()=>l.handleDarasaEdit(a),children:e.jsx("a",{children:"Edit"})}),a.ended?e.jsx(b,{title:"Un-Stoping Virtual Class",onConfirm:()=>l.handleDarasaEnd(a.id,!1),okText:"Yes",cancelText:"No",disabled:!a.canManage,overlayStyle:{zIndex:9999},children:e.jsx(u.Item,{icon:e.jsx(se,{}),disabled:!a.canManage,children:e.jsx("a",{children:"Un-Stop"})})}):e.jsx(b,{title:"Ending/Stoping Virtual Class",onConfirm:()=>l.handleDarasaEnd(a.id,!0),okText:"Yes",cancelText:"No",disabled:!a.canManage,overlayStyle:{zIndex:9999},children:e.jsx(u.Item,{icon:e.jsx(G,{}),disabled:!a.canManage,children:e.jsx("a",{children:"End/Stop"})})})]}),overlayStyle:{zIndex:9999},children:e.jsx("a",{className:"ant-dropdown-link",onClick:m=>m.preventDefault(),children:e.jsx(K,{style:{color:"orange",fontSize:28,fontWeight:"bold"}},"ellipsis")})})})],children:e.jsx(ne,{avatar:e.jsx(Q,{src:(o=a==null?void 0:a.author)==null?void 0:o.pic}),title:e.jsx(_.Tooltip,{title:x(a.name),placement:"top",children:e.jsx("a",{onClick:()=>a.canJoin?n("/oclass/virtual/class/session/"+a.id+"/"+a.token):i("You can't join this class"),children:x(a.name).substring(0,20)+" "+(x(a.name).length>20?"...":"")})}),description:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:x(a.description).substring(0,100)}),e.jsxs("p",{children:[e.jsxs(j,{color:"green",children:["Start At:"," ",e.jsx("span",{style:{marginLeft:10},children:S(a.startDate).format("MMMM do, YYYY H:mma")})]}),e.jsxs(j,{color:"green",children:["End In:",e.jsx("span",{style:{marginLeft:10},children:S(a.endDate).format("MMMM do, YYYY H:mma")})]}),a.canJoin?e.jsx(e.Fragment,{}):e.jsx(e.Fragment,{children:e.jsx(j,{color:"red",children:"Not Joinable"})})]})]})})})},a.id)},sa=l=>{const[n,a]=c.useState(!1),o=U(m=>m.totalVirtualClasses);return e.jsxs(e.Fragment,{children:[e.jsx("span",{children:e.jsx("a",{onClick:()=>a(!0),children:e.jsx("span",{children:e.jsxs(V,{children:[e.jsx("span",{style:{marginRight:10,fontSize:24,color:"green",fontWeight:"bolder"},children:o}),e.jsx("span",{style:{fontSize:18},children:"Virtual Classess"})]})})})}),e.jsx(k,{title:"Virtual Classes",width:"60vw",open:n,onClose:m=>a(m),footer:[],children:e.jsx(oe,{})})]})};export{sa as DashboardVirtualClassesComponent};
