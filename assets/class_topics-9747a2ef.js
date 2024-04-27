import{r as u,aO as p,aY as e,Q as w,c3 as b,ao as T,bZ as C,b_ as l,b$ as je,aS as S,aK as y,k3 as V,cY as ye,k0 as be,a6 as ve,aV as I,aT as Se,aM as H,aP as x,cI as Te,e5 as Ce,k4 as Ie,cx as P,d8 as B,cR as K,di as De,bY as W,aW as ke,c$ as U,aN as Me}from"./index-3b25761c.js";import{d as Z,C as J}from"./ckeditor-84a50c95.js";import{o as F}from"./data_objects-8a5fc783.js";import{D as X}from"./index-a115c268.js";import{I as ee}from"./index-55838eed.js";import{G as we}from"./iconBase-bda8ed31.js";import{G as Fe}from"./index-57fa16be.js";import{C as M}from"./index-0bcbf38d.js";import{C as te}from"./Collapse-07ebfd39.js";import{M as $}from"./index-2ea61cd2.js";import"./data_objects-ddf513ee.js";import"./index-d42cc587.js";import"./index-be032cea.js";import"./localeData-323d4f89.js";import"./SinglePicker-45749b9c.js";import"./InputNumber-9a89f098.js";import"./Skeleton-f7cf79cd.js";import"./index-145766ec.js";import"./InfoCircleFilled-28f92d26.js";import"./ActionButton-4004263b.js";import"./DialogWrap-c72cf114.js";import"./index-6faacfa0.js";import"./fade-4de01c07.js";const ze=d=>{const[o,h]=u.useState(""),[c]=p.useForm(),m=async s=>{const{data:n}=await C.custom({url:"",method:"post",meta:{operation:"createDarasaTopic",variables:{darasaId:{value:parseInt(d.darasa),type:"Int",required:!0},title:{value:s.title,type:"String",required:!0},description:{value:s.description,type:"String",required:!0},startDate:{value:b(s.start_date).format("YYYY-MM-DD"),type:"String",required:!1},minutes:{value:s.minutes,type:"Int",required:!1}},fields:["success","message",{topic:F}]}}).catch(()=>(l.error("Error creating topic"),{data:null})).then(g=>g);n&&(n.success?(l.success(n.message),d.onFinish(n.topic),c.resetFields()):l.error(n.message))};return e.jsx(e.Fragment,{children:e.jsxs(p,{layout:"vertical",form:c,onFinish:s=>{s.description=o,m(s)},onReset:()=>{h("")},requiredMark:!1,children:[e.jsx(p.Item,{name:"title",label:"Topic Title",rules:[{required:!0,type:"string",message:"Enter Topic Title ..."}],children:e.jsx(w,{size:"large",placeholder:"Enter Topic Title ..."})}),e.jsxs("div",{children:[e.jsx("h3",{children:"Description"}),e.jsx("div",{style:{marginBottom:10},children:e.jsx(Z.CKEditor,{editor:J,data:o,onReady:s=>{s.editing.view.change(n=>{n.setStyle("min-height","150px",s.editing.view.document.getRoot())})},onChange:(s,n)=>{const g=n.getData();h(g)},config:{toolbar:{items:["bold","italic","strikethrough","underline","code","subscript","superscript","removeFormat","|","bulletedList","numberedList","todoList","|","outdent","indent","|","-","fontSize","fontFamily","fontColor","fontBackgroundColor","highlight","|","alignment","|"],shouldNotGroupWhenFull:!0},fontFamily:{options:["default","Arial, Helvetica, sans-serif","Courier New, Courier, monospace","Georgia, serif","Lucida Sans Unicode, Lucida Grande, sans-serif","Tahoma, Geneva, sans-serif","Times New Roman, Times, serif","Trebuchet MS, Helvetica, sans-serif","Verdana, Geneva, sans-serif"],supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0}}})})]}),e.jsx(p.Item,{label:"Start Date",name:"start_date",rules:[{required:!!c.getFieldValue("minutes"),type:"object",message:"Please select Start Date"}],children:e.jsx(X,{size:"large",style:{width:"50%"},disabledDate:s=>s.add(1,"day")<b().endOf("day"),popupStyle:{zIndex:9999}})}),e.jsx(p.Item,{label:"Total Duration (Minutes)",name:"minutes",rules:[{required:!1,type:"number",message:"Please enter total duration in minutes"}],children:e.jsx(ee,{style:{width:"35%"},size:"large"})}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(T,{type:"primary",size:"large",htmlType:"submit",children:"Save"})})]})})},Ae=d=>{const[o,h]=u.useState(""),[c]=p.useForm(),m=async s=>{const{data:n}=await C.custom({url:"",method:"post",meta:{operation:"createDarasaSubtopic",variables:{topicId:{value:parseInt(d.topic.id),type:"Int",required:!0},title:{value:s.title,type:"String",required:!0},description:{value:s.description,type:"String",required:!0},startDate:{value:b(s.start_date).format("YYYY-MM-DD"),type:"String",required:!1},minutes:{value:s.minutes,type:"Int",required:!1}},fields:["success","message",{topic:F}]}}).catch(()=>(l.error("Error creating topic"),{data:null})).then(g=>g);n&&(n.success?(l.success(n.message),d.onFinish(n.topic),c.resetFields()):l.error(n.message))};return e.jsx(e.Fragment,{children:e.jsxs(p,{layout:"vertical",form:c,onFinish:s=>{s.description=o,m(s)},requiredMark:!1,children:[e.jsx(p.Item,{name:"title",label:"Topic Title",rules:[{required:!0,type:"string"}],children:e.jsx(w,{size:"large",placeholder:"Enter Topic Title ..."})}),e.jsxs("div",{children:[e.jsx("h3",{children:"Description"}),e.jsx("div",{style:{marginBottom:10},children:e.jsx(Z.CKEditor,{editor:J,data:o,onReady:s=>{s.editing.view.change(n=>{n.setStyle("min-height","150px",s.editing.view.document.getRoot())})},onChange:(s,n)=>{const g=n.getData();h(g)},config:{toolbar:{items:["bold","italic","strikethrough","underline","code","subscript","superscript","removeFormat","|","bulletedList","numberedList","todoList","|","outdent","indent","|","-","fontSize","fontFamily","fontColor","fontBackgroundColor","highlight","|","alignment","|"],shouldNotGroupWhenFull:!0},fontFamily:{options:["default","Arial, Helvetica, sans-serif","Courier New, Courier, monospace","Georgia, serif","Lucida Sans Unicode, Lucida Grande, sans-serif","Tahoma, Geneva, sans-serif","Times New Roman, Times, serif","Trebuchet MS, Helvetica, sans-serif","Verdana, Geneva, sans-serif"],supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0}}})})]}),e.jsx(p.Item,{label:"Start Date",name:"start_date",rules:[{required:!1,type:"object",message:"Please select Start Date"}],children:e.jsx(X,{size:"large",style:{width:"50%"},disabledDate:s=>s.add(1,"day")<b().endOf("day"),popupStyle:{zIndex:9999}})}),e.jsx(p.Item,{label:"Total Duration (Minutes)",name:"minutes",rules:[{required:!1,type:"number",message:"Enter Total Duration (Minutes)"}],children:e.jsx(ee,{style:{width:"50%"},size:"large"})}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(T,{type:"primary",size:"large",htmlType:"submit",children:"Save"})})]})})};function qe(d){return we({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"}},{tag:"path",attr:{d:"M8 4.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zM8 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-3.5 1.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"}}]})(d)}const{TreeNode:Q,DirectoryTree:Ee}=ke,{Panel:Re}=te,dt=d=>{const[o,h]=u.useState([]),[c,m]=u.useState([]),[s,n]=u.useState(),[g,se]=u.useState(!0),[z,A]=u.useState(1),[Ye,ie]=u.useState(0),[Le,re]=u.useState(0),[q,ne]=u.useState(!0),[ae]=p.useForm(),[Ne,E]=u.useState(void 0);je();const R=!Fe.useBreakpoint().lg,[oe,Y]=u.useState(!1),[le,L]=u.useState(!1),de=()=>{Y(!0)},D=async(t,i="",r=!1)=>{const{data:a}=await C.custom({url:"",method:"get",meta:{operation:"darasaTopics",variables:{page:{value:t,type:"Int",required:!0},key:{value:i,type:"String",required:!1},id:{value:parseInt(d.id===void 0?"0":d.id.toString()),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:F}]}}).catch(f=>(console.log(f),l.error("Error fetching Topics"),{data:null})).then(f=>f);a&&(re(a.total),ie(a.pages),A(a.page),ne(a.hasNext),h(a.results),m(a.results)),se(!1)},ce=async t=>{const{data:i}=await C.custom({url:"",method:"post",meta:{operation:"deleteDarasaTopic",variables:{id:{value:t,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(l.error("Error removing class Topic"),{data:null})).then(r=>r);i&&(i.success?(l.success(i.message),h(o.filter(r=>r.id!==t)),m(c.filter(r=>r.id!==t))):l.error(i.message))},ue=async(t,i)=>{const{data:r}=await C.custom({url:"",method:"post",meta:{operation:"deleteDarasaTopic",variables:{id:{value:t,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(l.error("Error removing class Topic"),{data:null})).then(a=>a);if(r)if(r.success){l.success(r.message);const a=[...o],f=a.findIndex(j=>j.id===i),_=a[f].subtopics.findIndex(j=>j.id===t);_!==-1&&a[f].subtopics.splice(_,1),h(a);const G=[...c],k=a.findIndex(j=>j.id===i);if(k!==-1){const j=a[k].subtopics.findIndex(fe=>fe.id===t);j!==-1&&G[k].subtopics.splice(j,1),m(G)}}else l.error(r.message)},pe=t=>{$.confirm({title:"Deleting Topic",icon:e.jsx(U,{}),content:"Are you sure ...",okText:"Delete",cancelText:"Cancel",onOk:()=>ce(t)})},me=(t,i)=>{$.confirm({title:"Deleting Subtopic",icon:e.jsx(U,{}),content:"Are you sure ...",okText:"Delete",cancelText:"Cancel",onOk:()=>ue(t,i)})},v=t=>{n(t),L(!0)},he=async t=>{h([t,...o]),c.length===o.length&&m([t,...c])},xe=async t=>{h(o.map(i=>i.id===t.id?t:i)),m(c.map(i=>i.id===t.id?t:i))},N=t=>{const i=o.filter(r=>parseInt(r.id.toString())===parseInt(t));m(i)},O=()=>e.jsx(Me,{description:"No topic Registered ..."}),ge=t=>t.subtopics.map(i=>e.jsx(Re,{extra:[e.jsx("div",{style:{right:0,zIndex:99999},children:e.jsx(H,{trigger:["click"],overlay:e.jsxs(x,{children:[e.jsx(x.Item,{icon:e.jsx(P,{}),onClick:()=>l("Under construction"),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Report"})}),e.jsx(x.Item,{icon:e.jsx(B,{}),onClick:()=>me(i.id,t.id),disabled:!d.canManage,children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Remove"})})]}),overlayStyle:{zIndex:9999},children:e.jsx("a",{className:"ant-dropdown-link",onClick:r=>r.preventDefault(),children:e.jsx(K,{style:{color:"orange",fontSize:28,fontWeight:"bold"}})})})})],header:e.jsx("div",{children:e.jsxs("span",{children:[i.title,i.minutes>0&&e.jsxs(I,{color:"green",children:[i.minutes," ",i.minutes>1?"Mins":"Min"]})]})}),children:e.jsx("div",{dangerouslySetInnerHTML:{__html:i.description}})},i.id));return u.useEffect(()=>{D(z)},[]),e.jsxs(e.Fragment,{children:[e.jsxs(S,{children:[e.jsx(y,{span:6,children:e.jsxs(M,{style:{marginRight:5},children:[o.length===0&&e.jsx(e.Fragment,{children:O()}),e.jsx(Ee,{multiple:!0,defaultExpandedKeys:[],onExpand:(t,i)=>{const r=i.node.key;if(r&&r.toString().includes("topic")){E(r);const a=r.toString().split("-")[1];N(a)}else if(!(r&&r.toString().includes("sub")))m(o);else{const a=r.toString().split(":")[0];E(a);const f=a.toString().split("-")[1];N(f)}},children:o.map((t,i)=>e.jsx(Q,{icon:e.jsx(V,{}),title:t.title,children:t.subtopics.map(r=>e.jsx(Q,{icon:e.jsx(V,{}),title:r.title},"topic-"+t.id+":sub-"+r.id))},"topic-"+t.id))})]})}),e.jsxs(y,{span:18,children:[e.jsxs(S,{children:[e.jsx(y,{span:12,children:e.jsx(p,{layout:"vertical",form:ae,onFinish:t=>{A(0),D(0,t.key,!0)},children:e.jsx(p.Item,{name:"key",children:e.jsx(w,{size:"large",placeholder:"Search Topics(s)...",prefix:e.jsx(ye,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(y,{span:12,style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(T,{icon:e.jsx(be,{}),size:"large",onClick:de,disabled:!d.canManage,children:"Add Topic"})})]}),e.jsxs("div",{id:"scrollableDiv",style:{height:"74vh",overflow:"auto"},children:[c.length>0?e.jsx(S,{align:"top",children:c.map((t,i)=>e.jsx(y,{span:24,style:{marginTop:i===0?0:10},children:e.jsxs(M,{hoverable:t.isActive,style:{marginRight:10},title:e.jsxs("div",{children:[e.jsxs("span",{children:[e.jsx("span",{style:{fontSize:22},children:t.title}),t.minutes>0&&e.jsx("span",{style:{marginLeft:10},children:e.jsx(ve,{color:"green",title:e.jsxs(e.Fragment,{children:[e.jsxs(I,{children:["Starts:"," ",b(t.startDate).format("DD/MM/YYYY hh:mm a")]}),e.jsxs(I,{children:["Ends:"," ",b(t.endDate).format("DD/MM/YYYY hh:mm a")]})]}),children:e.jsxs(I,{color:"green",children:[t.minutes," ",t.minutes>1?"Mins":"Min"]})})})]}),e.jsx(Se,{style:{right:0,position:"absolute"},children:e.jsx(H,{trigger:["click"],overlay:e.jsxs(x,{children:[e.jsx(x.Item,{icon:e.jsx(Te,{}),disabled:!t.canManage,children:e.jsx("a",{onClick:()=>v(t),children:"Add Subtopics"})}),e.jsx(x.Item,{icon:e.jsx(Ce,{}),disabled:!0,children:e.jsx("a",{onClick:()=>v(t),children:"Add Documents"})}),e.jsx(x.Item,{icon:e.jsx(Ie,{}),disabled:!0,children:e.jsx("a",{onClick:()=>v(t),children:"Add Videos"})}),e.jsx(x.Item,{icon:e.jsx(qe,{}),disabled:!0,children:e.jsx("a",{onClick:()=>v(t),children:"Add Audios"})}),e.jsx(x.Item,{icon:e.jsx(P,{}),onClick:()=>l("Under construction"),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Report"})}),e.jsx(x.Item,{icon:e.jsx(B,{}),onClick:()=>pe(t.id),disabled:!d.canManage,children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Remove"})})]}),overlayStyle:{zIndex:9999},children:e.jsx("a",{className:"ant-dropdown-link",onClick:r=>r.preventDefault(),children:e.jsx(K,{style:{color:"orange",fontSize:28,fontWeight:"bold"}})})})})]}),children:[e.jsx("div",{dangerouslySetInnerHTML:{__html:t.description}}),t.subtopics.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(S,{children:e.jsxs(y,{span:24,style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{fontSize:20,fontWeight:"bolder"},children:"Subtopics"}),t.canManage&&e.jsx(T,{disabled:!t.canManage,icon:e.jsx(De,{}),onClick:()=>v(t),children:"Add Subtopic"})]})}),e.jsx(te,{defaultActiveKey:["1"],accordion:!0,children:ge(t)})]})]})}))}):e.jsx(M,{children:e.jsx(S,{justify:"center",children:e.jsx(y,{children:O()})})}),q&&e.jsx("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"},children:e.jsx(T,{onClick:()=>D(z+1),disabled:!q,children:"Load More"})})]})]})]}),e.jsx(W,{title:"Adding Topics",open:oe,onClose:t=>Y(t),width:R?"100vw":"50vw",children:e.jsx(ze,{darasa:d.id,onFinish:he})}),e.jsx(W,{title:"Add Subtopics to "+(s==null?void 0:s.title),open:le,onClose:t=>L(t),width:R?"100vw":"50vw",children:e.jsx(Ae,{topic:s,onFinish:xe})})]})};export{dt as ClassTopics};
