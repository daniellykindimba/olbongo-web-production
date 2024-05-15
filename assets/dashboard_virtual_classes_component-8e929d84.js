import{r as c,aV as h,c as M,j as e,aZ as S,aR as y,a0 as H,cT as R,B,a7 as L,b$ as k,a_ as V,aT as W,aW as m,cI as _,c9 as U,c8 as Z,d3 as Q,iQ as $,iR as G,_ as i,b0 as f,cZ as b,g as p,cW as K,cl as X}from"./index-ccfcd4da.js";import{E as ee}from"./edit_class_virtual_form-fbd9bd05.js";import{l as ae}from"./index-0a57a0d3.js";import{r as x}from"./remove_html_tags-be9c976e.js";import{S as te}from"./Skeleton-a2d4f426.js";import{A as se}from"./index-8ddfcaf4.js";import{C as I}from"./index-e733c2fd.js";import{P as E}from"./index-27f5ca3f.js";import{A as re}from"./index-3bfb9ed3.js";import{M as ie}from"./index-65dd5ac4.js";import"./ckeditor-625b9636.js";import"./ckeditor-6faf30fb.js";import"./index-12434ef6.js";import"./index-0da323dc.js";import"./index-98406364.js";import"./localeData-8c06fba4.js";import"./SinglePicker-5ae69ed8.js";import"./index-e9b3f5aa.js";import"./InputNumber-df6a3867.js";import"./defineProperty-396cb65c.js";import"./useNotification-bc6f4548.js";import"./DialogWrap-1d0538d4.js";import"./index-5c2e1e93.js";import"./useMutateObserver-ca2a7753.js";import"./index-477d9320.js";import"./Image-eeb38737.js";import"./Upload-a74f9032.js";import"./Rate-1c034551.js";import"./index-ba1d69b2.js";import"./index-a75cd6c4.js";import"./InfoCircleFilled-f916d949.js";import"./index-afc6ce50.js";import"./ActionButton-3b8e0c74.js";import"./index-7da8bd4f.js";import"./fade-dd39912a.js";const{Meta:ne}=I,oe=l=>{const[n,a]=c.useState([]),[o,u]=c.useState(),[g,C]=c.useState(!0),[N,v]=c.useState(1),[F]=h.useForm();M();const[T]=h.useForm(),[w,j]=c.useState(!1),q=t=>{u(t),j(!0)},Y=async(t,r)=>{const{data:s}=await p.custom({url:"",method:"post",meta:{operation:"endVirtualClass",variables:{id:{value:t,type:"Int",required:!0},stop:{value:r,type:"Boolean",required:!0}},fields:["success","message",{virtualClass:["id","name","description","cover","startDate","endDate","duration","durationType","token","canJoin",{darasa:["id","name","code","description"]},{author:["id","firstName","lastName","middleName","fullName","email","pic"]},"created","canEdit","canDelete","canManage","updated","isActive","ended"]}]}}).catch(()=>(i.error("Error in Ending Virtual Class"),{data:null})).then(d=>d);s&&(s.success?(i(s.message),a(n.map(d=>d.id===t?s.virtualClass:d))):i.error(s.message))},A=async t=>{const{data:r}=await p.custom({url:"",method:"post",meta:{operation:"editVirtualClass",variables:{id:{value:t.id,type:"Int",required:!0},name:{value:t.name,type:"String",required:!0},description:{value:t.description,type:"String",required:!0},duration:{value:t.duration,type:"Int",required:!0},durationType:{value:t.durationType.toUpperCase(),type:"String",required:!0},startDate:{value:t.startDate,type:"DateTime",required:!0},isPublic:{value:!0,type:"Boolean",required:!0}},fields:["success","message",{virtual:["id","name","description","cover","startDate","endDate","duration","durationType","token","canJoin",{darasa:["id","name","code","description"]},{author:["id","firstName","lastName","middleName","fullName","email","pic"]},"created","canEdit","canDelete","canManage","updated","isActive"]}]}}).catch(s=>(i.error("Error editing class"),{data:null})).then(s=>s);r&&(r.success?(i.success(r.message),a(n.map(s=>s.id===r.virtual.id?r.virtual:s)),j(!1)):i.error(r.message))},O=async t=>{const{data:r}=await p.custom({url:"",method:"post",meta:{operation:"deleteVirtualClass",variables:{id:{value:t,type:"Int",required:!0}},fields:["success","message"]}}).catch(s=>(i.error("Error deleting class"),{data:null})).then(s=>s);r&&(r.success?(i.success(r.message),a(n.filter(s=>s.id!==t))):i.error(r.message))},J=t=>{ie.confirm({title:"Deleting Virtual Class",icon:e.jsx(K,{}),content:"Are you sure ...",okText:"Delete",cancelText:"Cancel",onOk:()=>O(t)})},D=async(t,r="",s=!1)=>{C(!0);const{data:d}=await p.custom({url:"",method:"get",meta:{operation:"myVirtualClasses",variables:{page:{value:t,type:"Int",required:!0},key:{value:r,type:"String",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","description","cover","startDate","endDate","duration","durationType","token","canJoin","ended",{darasa:["id","name","code","description"]},{author:["id","firstName","lastName","middleName","fullName","email","pic"]},"created","canEdit","canDelete","canManage","updated","isActive"]}]}}).catch(()=>(i.error("Error fetching classes"),{data:null})).then(P=>P);d&&(v(d.page),a(d.results)),C(!1)},z=async()=>{await p.custom({url:"",method:"get",meta:{operation:"darasaAuth",variables:{},fields:["auth"]}}).catch(()=>(i.error("Error getting darasa auth"),{data:null})).then(t=>t)};return c.useEffect(()=>{z(),D(N)},[]),g?e.jsx(e.Fragment,{children:e.jsx(te,{loading:g,active:!0})}):e.jsxs(e.Fragment,{children:[e.jsx(S,{children:e.jsx(y,{span:14,children:e.jsx(h,{layout:"vertical",form:F,onFinish:t=>{v(0),D(0,t.key,!0)},children:e.jsx(h.Item,{name:"key",children:e.jsx(H,{size:"large",placeholder:"Search Public Virtual Classes...",prefix:e.jsx(R,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx(B,{sx:{maxHeight:"68vh",overflowY:"auto"},children:e.jsx(L,{spinning:g,children:e.jsxs(S,{children:[n.map(t=>e.jsx(le,{darasa:t,handleDarasaDelete:J,handleDarasaEdit:q,handleDarasaEnd:Y},t.id)),n.length===0&&e.jsx(y,{span:24,children:e.jsx(se,{message:"No Virtual Class Found",type:"info",showIcon:!0})})]})})}),e.jsx(k,{title:"Editting "+(o==null?void 0:o.name),width:"40vw",open:w,onClose:t=>j(t),children:e.jsx(ee,{form:T,darasa:o,onFinish:A})})]})},le=l=>{var o;const{push:n}=M(),a=c.useMemo(()=>l.darasa,[l.darasa]);return e.jsx(y,{span:12,xs:24,sm:24,md:12,children:e.jsx(I,{style:{margin:"5px"},bodyStyle:{minHeight:"180px"},cover:e.jsx("img",{alt:"example",src:a.cover,style:{height:"200px",objectFit:"cover"}}),actions:[e.jsx(V,{style:{float:"right"},children:e.jsx(W,{trigger:["click"],overlay:e.jsxs(m,{children:[e.jsx(m.Item,{icon:e.jsx(_,{}),disabled:!a.canJoin,onClick:()=>n("/oclass/virtual/class/session/"+a.id+"/"+a.token),children:e.jsx("a",{children:"Join"})}),a.canDelete?e.jsx(m.Item,{disabled:!a.canDelete,icon:e.jsx(U,{}),onClick:()=>l.handleDarasaDelete(a.id),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Delete"})}):e.jsx(e.Fragment,{}),a.canManage&&e.jsx(m.Item,{icon:e.jsx(Z,{}),disabled:!a.canManage,onClick:()=>l.handleDarasaEdit(a),children:e.jsx("a",{children:"Edit"})}),a.ended?e.jsx(E,{title:"Un-Stoping Virtual Class",onConfirm:()=>l.handleDarasaEnd(a.id,!1),okText:"Yes",cancelText:"No",disabled:!a.canManage,overlayStyle:{zIndex:9999},children:e.jsx(m.Item,{icon:e.jsx(Q,{}),disabled:!a.canManage,children:e.jsx("a",{children:"Un-Stop"})})}):e.jsx(E,{title:"Ending/Stoping Virtual Class",onConfirm:()=>l.handleDarasaEnd(a.id,!0),okText:"Yes",cancelText:"No",disabled:!a.canManage,overlayStyle:{zIndex:9999},children:e.jsx(m.Item,{icon:e.jsx($,{}),disabled:!a.canManage,children:e.jsx("a",{children:"End/Stop"})})})]}),overlayStyle:{zIndex:9999},children:e.jsx("a",{className:"ant-dropdown-link",onClick:u=>u.preventDefault(),children:e.jsx(G,{style:{color:"orange",fontSize:28,fontWeight:"bold"}},"ellipsis")})})})],children:e.jsx(ne,{avatar:e.jsx(re,{src:(o=a==null?void 0:a.author)==null?void 0:o.pic}),title:e.jsx(ae.Tooltip,{title:x(a.name),placement:"top",children:e.jsx("a",{onClick:()=>a.canJoin?n("/oclass/virtual/class/session/"+a.id+"/"+a.token):i("You can't join this class"),children:x(a.name).substring(0,20)+" "+(x(a.name).length>20?"...":"")})}),description:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:x(a.description).substring(0,100)}),e.jsxs("p",{children:[e.jsxs(f,{color:"green",children:["Start At:"," ",e.jsx("span",{style:{marginLeft:10},children:b(a.startDate).format("MMMM do, YYYY H:mma")})]}),e.jsxs(f,{color:"green",children:["End In:",e.jsx("span",{style:{marginLeft:10},children:b(a.endDate).format("MMMM do, YYYY H:mma")})]}),a.canJoin?e.jsx(e.Fragment,{}):e.jsx(e.Fragment,{children:e.jsx(f,{color:"red",children:"Not Joinable"})})]})]})})})},a.id)},Le=l=>{const[n,a]=c.useState(!1),o=X(u=>u.totalVirtualClasses);return e.jsxs(e.Fragment,{children:[e.jsx("span",{children:e.jsx("a",{onClick:()=>a(!0),children:e.jsx("span",{children:e.jsxs(V,{children:[e.jsx("span",{style:{marginRight:10,fontSize:24,color:"green",fontWeight:"bolder"},children:o}),e.jsx("span",{style:{fontSize:18},children:"Virtual Classess"})]})})})}),e.jsx(k,{title:"Virtual Classes",width:"60vw",open:n,onClose:u=>a(u),footer:[],children:e.jsx(oe,{})})]})};export{Le as DashboardVirtualClassesComponent};
