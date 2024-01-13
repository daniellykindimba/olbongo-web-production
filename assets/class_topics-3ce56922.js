import{r as u,c as h,j as e,I as w,m as J,n as Q,am as $,h as b,a9 as ee,B as T,g as C,gb as F,_ as l,l as je,aB as ye,R as S,d as y,C as k,gc as V,e as be,fH as ve,T as Se,b as I,S as Te,W as B,X as x,O as Ce,bU as Ie,gd as De,Y as H,ay as P,Z as K,a_ as Me,M as W,af as U,ag as X,E as ke}from"./index-0218b022.js";import{G as we}from"./iconBase-fea8a0f2.js";import{C as te}from"./Collapse-b6480b8d.js";import{a as Fe}from"./Table-7715ed79.js";import"./index-13ee89b5.js";import"./Tree-c957e1a9.js";import"./addEventListener-a1a8dbaa.js";import"./index-2d8eef81.js";const ze=d=>{const[o,m]=u.useState(""),[c]=h.useForm(),p=async s=>{const{data:n}=await C.custom({url:"",method:"post",meta:{operation:"createDarasaTopic",variables:{darasaId:{value:parseInt(d.darasa),type:"Int",required:!0},title:{value:s.title,type:"String",required:!0},description:{value:s.description,type:"String",required:!0},startDate:{value:b(s.start_date).format("YYYY-MM-DD"),type:"String",required:!1},minutes:{value:s.minutes,type:"Int",required:!1}},fields:["success","message",{topic:F}]}}).catch(()=>(l.error("Error creating topic"),{data:null})).then(g=>g);n&&(n.success?(l.success(n.message),d.onFinish(n.topic),c.resetFields()):l.error(n.message))};return e.jsx(e.Fragment,{children:e.jsxs(h,{layout:"vertical",form:c,onFinish:s=>{s.description=o,p(s)},onReset:()=>{m("")},requiredMark:!1,children:[e.jsx(h.Item,{name:"title",label:"Topic Title",rules:[{required:!0,type:"string",message:"Enter Topic Title ..."}],children:e.jsx(w,{size:"large",placeholder:"Enter Topic Title ..."})}),e.jsxs("div",{children:[e.jsx("h3",{children:"Description"}),e.jsx("div",{style:{marginBottom:10},children:e.jsx(J.CKEditor,{editor:Q,data:o,onReady:s=>{s.editing.view.change(n=>{n.setStyle("min-height","150px",s.editing.view.document.getRoot())})},onChange:(s,n)=>{const g=n.getData();m(g)},config:{toolbar:{items:["bold","italic","strikethrough","underline","code","subscript","superscript","removeFormat","|","bulletedList","numberedList","todoList","|","outdent","indent","|","-","fontSize","fontFamily","fontColor","fontBackgroundColor","highlight","|","alignment","|"],shouldNotGroupWhenFull:!0},fontFamily:{options:["default","Arial, Helvetica, sans-serif","Courier New, Courier, monospace","Georgia, serif","Lucida Sans Unicode, Lucida Grande, sans-serif","Tahoma, Geneva, sans-serif","Times New Roman, Times, serif","Trebuchet MS, Helvetica, sans-serif","Verdana, Geneva, sans-serif"],supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0}}})})]}),e.jsx(h.Item,{label:"Start Date",name:"start_date",rules:[{required:!!c.getFieldValue("minutes"),type:"object",message:"Please select Start Date"}],children:e.jsx($,{size:"large",style:{width:"50%"},disabledDate:s=>s.add(1,"day")<b().endOf("day"),popupStyle:{zIndex:9999}})}),e.jsx(h.Item,{label:"Total Duration (Minutes)",name:"minutes",rules:[{required:!1,type:"number",message:"Please enter total duration in minutes"}],children:e.jsx(ee,{style:{width:"35%"},size:"large"})}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(T,{type:"primary",size:"large",htmlType:"submit",children:"Save"})})]})})},Ae=d=>{const[o,m]=u.useState(""),[c]=h.useForm(),p=async s=>{const{data:n}=await C.custom({url:"",method:"post",meta:{operation:"createDarasaSubtopic",variables:{topicId:{value:parseInt(d.topic.id),type:"Int",required:!0},title:{value:s.title,type:"String",required:!0},description:{value:s.description,type:"String",required:!0},startDate:{value:b(s.start_date).format("YYYY-MM-DD"),type:"String",required:!1},minutes:{value:s.minutes,type:"Int",required:!1}},fields:["success","message",{topic:F}]}}).catch(()=>(l.error("Error creating topic"),{data:null})).then(g=>g);n&&(n.success?(l.success(n.message),d.onFinish(n.topic),c.resetFields()):l.error(n.message))};return e.jsx(e.Fragment,{children:e.jsxs(h,{layout:"vertical",form:c,onFinish:s=>{s.description=o,p(s)},requiredMark:!1,children:[e.jsx(h.Item,{name:"title",label:"Topic Title",rules:[{required:!0,type:"string"}],children:e.jsx(w,{size:"large",placeholder:"Enter Topic Title ..."})}),e.jsxs("div",{children:[e.jsx("h3",{children:"Description"}),e.jsx("div",{style:{marginBottom:10},children:e.jsx(J.CKEditor,{editor:Q,data:o,onReady:s=>{s.editing.view.change(n=>{n.setStyle("min-height","150px",s.editing.view.document.getRoot())})},onChange:(s,n)=>{const g=n.getData();m(g)},config:{toolbar:{items:["bold","italic","strikethrough","underline","code","subscript","superscript","removeFormat","|","bulletedList","numberedList","todoList","|","outdent","indent","|","-","fontSize","fontFamily","fontColor","fontBackgroundColor","highlight","|","alignment","|"],shouldNotGroupWhenFull:!0},fontFamily:{options:["default","Arial, Helvetica, sans-serif","Courier New, Courier, monospace","Georgia, serif","Lucida Sans Unicode, Lucida Grande, sans-serif","Tahoma, Geneva, sans-serif","Times New Roman, Times, serif","Trebuchet MS, Helvetica, sans-serif","Verdana, Geneva, sans-serif"],supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0}}})})]}),e.jsx(h.Item,{label:"Start Date",name:"start_date",rules:[{required:!1,type:"object",message:"Please select Start Date"}],children:e.jsx($,{size:"large",style:{width:"50%"},disabledDate:s=>s.add(1,"day")<b().endOf("day"),popupStyle:{zIndex:9999}})}),e.jsx(h.Item,{label:"Total Duration (Minutes)",name:"minutes",rules:[{required:!1,type:"number",message:"Enter Total Duration (Minutes)"}],children:e.jsx(ee,{style:{width:"50%"},size:"large"})}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(T,{type:"primary",size:"large",htmlType:"submit",children:"Save"})})]})})};function qe(d){return we({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"}},{tag:"path",attr:{d:"M8 4.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zM8 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-3.5 1.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"}}]})(d)}const{TreeNode:Z,DirectoryTree:Ee}=Fe,{Panel:Re}=te,Ue=d=>{const[o,m]=u.useState([]),[c,p]=u.useState([]),[s,n]=u.useState(),[g,se]=u.useState(!0),[z,A]=u.useState(1),[Le,ie]=u.useState(0),[Ye,re]=u.useState(0),[q,ne]=u.useState(!0),[ae]=h.useForm(),[Ne,E]=u.useState(void 0);je();const R=!ye.useBreakpoint().lg,[oe,L]=u.useState(!1),[le,Y]=u.useState(!1),de=()=>{L(!0)},D=async(t,i="",r=!1)=>{const{data:a}=await C.custom({url:"",method:"get",meta:{operation:"darasaTopics",variables:{page:{value:t,type:"Int",required:!0},key:{value:i,type:"String",required:!1},id:{value:parseInt(d.id===void 0?"0":d.id.toString()),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:F}]}}).catch(f=>(console.log(f),l.error("Error fetching Topics"),{data:null})).then(f=>f);a&&(re(a.total),ie(a.pages),A(a.page),ne(a.hasNext),m(a.results),p(a.results)),se(!1)},ce=async t=>{const{data:i}=await C.custom({url:"",method:"post",meta:{operation:"deleteDarasaTopic",variables:{id:{value:t,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(l.error("Error removing class Topic"),{data:null})).then(r=>r);i&&(i.success?(l.success(i.message),m(o.filter(r=>r.id!==t)),p(c.filter(r=>r.id!==t))):l.error(i.message))},ue=async(t,i)=>{const{data:r}=await C.custom({url:"",method:"post",meta:{operation:"deleteDarasaTopic",variables:{id:{value:t,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(l.error("Error removing class Topic"),{data:null})).then(a=>a);if(r)if(r.success){l.success(r.message);const a=[...o],f=a.findIndex(j=>j.id===i),_=a[f].subtopics.findIndex(j=>j.id===t);_!==-1&&a[f].subtopics.splice(_,1),m(a);const G=[...c],M=a.findIndex(j=>j.id===i);if(M!==-1){const j=a[M].subtopics.findIndex(fe=>fe.id===t);j!==-1&&G[M].subtopics.splice(j,1),p(G)}}else l.error(r.message)},he=t=>{U.confirm({title:"Deleting Topic",icon:e.jsx(X,{}),content:"Are you sure ...",okText:"Delete",cancelText:"Cancel",onOk:()=>ce(t)})},pe=(t,i)=>{U.confirm({title:"Deleting Subtopic",icon:e.jsx(X,{}),content:"Are you sure ...",okText:"Delete",cancelText:"Cancel",onOk:()=>ue(t,i)})},v=t=>{n(t),Y(!0)},me=async t=>{m([t,...o]),c.length===o.length&&p([t,...c])},xe=async t=>{m(o.map(i=>i.id===t.id?t:i)),p(c.map(i=>i.id===t.id?t:i))},N=t=>{const i=o.filter(r=>r.id===parseInt(t));p(i)},O=()=>e.jsx(ke,{description:"No topic Registered ..."}),ge=t=>t.subtopics.map(i=>e.jsx(Re,{extra:[e.jsx("div",{style:{right:0,zIndex:99999},children:e.jsx(B,{trigger:["click"],overlay:e.jsxs(x,{children:[e.jsx(x.Item,{icon:e.jsx(H,{}),onClick:()=>l("Under construction"),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Report"})}),e.jsx(x.Item,{icon:e.jsx(P,{}),onClick:()=>pe(i.id,t.id),disabled:!d.canManage,children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Remove"})})]}),overlayStyle:{zIndex:9999},children:e.jsx("a",{className:"ant-dropdown-link",onClick:r=>r.preventDefault(),children:e.jsx(K,{style:{color:"orange",fontSize:28,fontWeight:"bold"}})})})})],header:e.jsx("div",{children:e.jsxs("span",{children:[i.title,i.minutes>0&&e.jsxs(I,{color:"green",children:[i.minutes," ",i.minutes>1?"Mins":"Min"]})]})}),children:e.jsx("div",{dangerouslySetInnerHTML:{__html:i.description}})},i.id));return u.useEffect(()=>{D(z)},[]),e.jsxs(e.Fragment,{children:[e.jsxs(S,{children:[e.jsx(y,{span:6,children:e.jsxs(k,{style:{marginRight:5},children:[o.length===0&&e.jsx(e.Fragment,{children:O()}),e.jsx(Ee,{multiple:!0,defaultExpandedKeys:[],onExpand:(t,i)=>{const r=i.node.key;if(r&&r.toString().includes("topic")){E(r);const a=r.toString().split("-")[1];N(a)}else if(!(r&&r.toString().includes("sub")))p(o);else{const a=r.toString().split(":")[0];E(a);const f=a.toString().split("-")[1];N(f)}},children:o.map((t,i)=>e.jsx(Z,{icon:e.jsx(V,{}),title:t.title,children:t.subtopics.map(r=>e.jsx(Z,{icon:e.jsx(V,{}),title:r.title},"topic-"+t.id+":sub-"+r.id))},"topic-"+t.id))})]})}),e.jsxs(y,{span:18,children:[e.jsxs(S,{children:[e.jsx(y,{span:12,children:e.jsx(h,{layout:"vertical",form:ae,onFinish:t=>{A(0),D(0,t.key,!0)},children:e.jsx(h.Item,{name:"key",children:e.jsx(w,{size:"large",placeholder:"Search Topics(s)...",prefix:e.jsx(be,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(y,{span:12,style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(T,{icon:e.jsx(ve,{}),size:"large",onClick:de,disabled:!d.canManage,children:"Add Topic"})})]}),e.jsxs("div",{id:"scrollableDiv",style:{height:"74vh",overflow:"auto"},children:[c.length>0?e.jsx(S,{align:"top",children:c.map((t,i)=>e.jsx(y,{span:24,style:{marginTop:i===0?0:10},children:e.jsxs(k,{hoverable:t.isActive,style:{marginRight:10},title:e.jsxs("div",{children:[e.jsxs("span",{children:[e.jsx("span",{style:{fontSize:22},children:t.title}),t.minutes>0&&e.jsx("span",{style:{marginLeft:10},children:e.jsx(Se,{color:"green",title:e.jsxs(e.Fragment,{children:[e.jsxs(I,{children:["Starts:"," ",b(t.startDate).format("DD/MM/YYYY hh:mm a")]}),e.jsxs(I,{children:["Ends:"," ",b(t.endDate).format("DD/MM/YYYY hh:mm a")]})]}),children:e.jsxs(I,{color:"green",children:[t.minutes," ",t.minutes>1?"Mins":"Min"]})})})]}),e.jsx(Te,{style:{right:0,position:"absolute"},children:e.jsx(B,{trigger:["click"],overlay:e.jsxs(x,{children:[e.jsx(x.Item,{icon:e.jsx(Ce,{}),disabled:!t.canManage,children:e.jsx("a",{onClick:()=>v(t),children:"Add Subtopics"})}),e.jsx(x.Item,{icon:e.jsx(Ie,{}),disabled:!0,children:e.jsx("a",{onClick:()=>v(t),children:"Add Documents"})}),e.jsx(x.Item,{icon:e.jsx(De,{}),disabled:!0,children:e.jsx("a",{onClick:()=>v(t),children:"Add Videos"})}),e.jsx(x.Item,{icon:e.jsx(qe,{}),disabled:!0,children:e.jsx("a",{onClick:()=>v(t),children:"Add Audios"})}),e.jsx(x.Item,{icon:e.jsx(H,{}),onClick:()=>l("Under construction"),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Report"})}),e.jsx(x.Item,{icon:e.jsx(P,{}),onClick:()=>he(t.id),disabled:!d.canManage,children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Remove"})})]}),overlayStyle:{zIndex:9999},children:e.jsx("a",{className:"ant-dropdown-link",onClick:r=>r.preventDefault(),children:e.jsx(K,{style:{color:"orange",fontSize:28,fontWeight:"bold"}})})})})]}),children:[e.jsx("div",{dangerouslySetInnerHTML:{__html:t.description}}),t.subtopics.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(S,{children:e.jsxs(y,{span:24,style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{fontSize:20,fontWeight:"bolder"},children:"Subtopics"}),t.canManage&&e.jsx(T,{disabled:!t.canManage,icon:e.jsx(Me,{}),onClick:()=>v(t),children:"Add Subtopic"})]})}),e.jsx(te,{defaultActiveKey:["1"],accordion:!0,children:ge(t)})]})]})}))}):e.jsx(k,{children:e.jsx(S,{justify:"center",children:e.jsx(y,{children:O()})})}),q&&e.jsx("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"},children:e.jsx(T,{onClick:()=>D(z+1),disabled:!q,children:"Load More"})})]})]})]}),e.jsx(W,{title:"Adding Topics",open:oe,onClose:t=>L(t),width:R?"100vw":"50vw",children:e.jsx(ze,{darasa:d.id,onFinish:me})}),e.jsx(W,{title:"Add Subtopics to "+(s==null?void 0:s.title),open:le,onClose:t=>Y(t),width:R?"100vw":"50vw",children:e.jsx(Ae,{topic:s,onFinish:xe})})]})};export{Ue as ClassTopics};
