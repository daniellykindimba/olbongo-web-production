import{r as o,j as e,aT as c,a1 as S,av as g,c as U,aW as K,aP as I,a8 as J,aR as Q,aU as p,_ as d,cl as C,g as f}from"./index-7df9ee76.js";import{d as X,C as Y}from"./ckeditor-96be3d2f.js";import{C as Z}from"./ckeditor-470b335d.js";import{t as $}from"./text_truncate-315d9efa.js";import{h as v}from"./data_objects-a5a8b655.js";import{L as ee}from"./LinkOutlined-9cb11235.js";import{L as A}from"./index-4a591484.js";import{M as te}from"./index-c15cc96b.js";import{S as ne}from"./SearchOutlined-dcd1f7fa.js";import{R as se}from"./ReadOutlined-2d08fd4c.js";import{D as re}from"./DeleteOutlined-645f7cb7.js";import{E as ie}from"./EditOutlined-a52bf258.js";import{I as oe}from"./InfoCircleOutlined-d965a3ac.js";import{M as ae}from"./MoreOutlined-8471c15a.js";import{N as le}from"./NotificationOutlined-85308cc5.js";import{E as ce}from"./ExclamationCircleOutlined-854fb9e1.js";import"./data_objects-327f1d7c.js";import"./InfoCircleFilled-60705b95.js";import"./InfoCircleFilled-baaa675e.js";import"./ActionButton-8146ab60.js";import"./DialogWrap-f6cebbde.js";import"./index-6d39d6f0.js";import"./fade-faabdb66.js";import"./DeleteOutlined-25685737.js";import"./EditOutlined-401a1613.js";const de=r=>{const[i,m]=o.useState("");return e.jsx(e.Fragment,{children:e.jsxs(c,{layout:"vertical",form:r.form,onFinish:s=>{s.content=i,r.onFinish(s)},requiredMark:!1,children:[e.jsx(c.Item,{name:"title",label:"Title",rules:[{required:!0,type:"string",message:"Please enter title"}],children:e.jsx(S,{size:"large",placeholder:"Write Content ..."})}),e.jsx("h3",{children:"Announcement Description"}),e.jsx(X.CKEditor,{editor:Y,data:i,onReady:s=>{s.editing.view.change(a=>{a.setStyle("min-height","300px",s.editing.view.document.getRoot())})},onChange:(s,a)=>{const h=a.getData();m(h)},config:{toolbar:{items:["bold","italic","strikethrough","underline","code","subscript","superscript","removeFormat","|","bulletedList","numberedList","todoList","|","outdent","indent","|","-","fontSize","fontFamily","fontColor","fontBackgroundColor","highlight","|","alignment","|","EmojiPanel"],shouldNotGroupWhenFull:!0},fontFamily:{options:["default","Arial, Helvetica, sans-serif","Courier New, Courier, monospace","Georgia, serif","Lucida Sans Unicode, Lucida Grande, sans-serif","Tahoma, Geneva, sans-serif","Times New Roman, Times, serif","Trebuchet MS, Helvetica, sans-serif","Verdana, Geneva, sans-serif"],supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0}}}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:10},children:e.jsx(g,{type:"primary",size:"large",htmlType:"submit",children:"Save"})})]})})},ue=r=>{const[i,m]=o.useState("");return o.useEffect(()=>{var s,a,h;(h=r.form)==null||h.setFieldsValue({title:(s=r.announcement)==null?void 0:s.title,content:(a=r.announcement)==null?void 0:a.content})},[r.form]),e.jsx(e.Fragment,{children:e.jsxs(c,{layout:"vertical",form:r.form,onFinish:s=>{s.content=i,r.onFinish(s)},requiredMark:!1,children:[e.jsx(c.Item,{name:"title",label:"Title",rules:[{required:!0,type:"string",message:"Please enter title"}],children:e.jsx(S,{size:"large",placeholder:"Write Content ..."})}),e.jsx("h3",{children:"Announcement Description"}),e.jsx(Z,{onChange:s=>m(s)}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(g,{type:"primary",size:"large",htmlType:"submit",children:"Save"})})]})})},_e=r=>{const[i,m]=o.useState(),[s,a]=o.useState([]),[h,E]=o.useState(!0),[b,M]=o.useState(1),[D]=c.useForm(),[me,T]=o.useState(0),[he,L]=o.useState(0),[q,R]=o.useState(!0);U();const[z,x]=o.useState(!1),[N,j]=o.useState(!1),[F]=c.useForm(),[w]=c.useForm(),[O,k]=o.useState(!1),_=t=>{m(t),k(!0)},V=t=>{m(t),j(!0)},P=()=>{x(!0)},G=async t=>{const{data:n}=await f.custom({url:"",method:"post",meta:{operation:"createDarasaAnnouncement",variables:{id:{value:parseInt(r.id===void 0?"0":r.id.toString()),type:"Int",required:!0},title:{value:t.title,type:"String",required:!0},content:{value:t.content,type:"String",required:!0}},fields:["success","message",{announcement:v}]}}).catch(()=>(d.error("Error creating announcement"),{data:null})).then(l=>l);n&&(n.success?(d(n.message),a([n.announcement,...s]),F.resetFields(),x(!1)):d.error(n.message))},W=async t=>{const{data:n}=await f.custom({url:"",method:"post",meta:{operation:"updateDarasaAnnouncement",variables:{id:{value:i===void 0?"0":i.id,type:"Int",required:!0},title:{value:t.title,type:"String",required:!0},content:{value:t.content,type:"String",required:!0}},fields:["success","message",{announcement:v}]}});n.success?(d(n.message),a(s.map(l=>l.id===n.announcement.id?n.announcement:l)),w.resetFields(),j(!1)):d.error(n.message)},y=async(t,n="",l=!1)=>{const{data:u}=await f.custom({url:"",method:"get",meta:{operation:"darasaAnnouncements",variables:{page:{value:t,type:"Int",required:!0},key:{value:n,type:"String",required:!1},id:{value:parseInt(r.id===void 0?"0":r.id.toString()),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:v}]}});L(u.total),T(u.pages),M(u.page),R(u.hasNext),(n.length>0||n.length===0&&l)&&a(u.results),u.results.length>0&&!l&&a(s.concat(u.results)),E(!1)},B=async t=>{const{data:n}=await f.custom({url:"",method:"post",meta:{operation:"deleteDarasaAnnouncement",variables:{id:{value:t,type:"Int",required:!0}},fields:["success","message"]}});n.success?(d.success(n.message),a(s.filter(l=>l.id!==t))):d.error(n.message)},H=t=>{te.confirm({title:"Deleting Announcent",icon:e.jsx(ce,{}),content:"Are you sure ...",okText:"Delete",cancelText:"Cancel",onOk:()=>B(t)})};return o.useEffect(()=>{y(b)},[]),e.jsxs(e.Fragment,{children:[e.jsxs(K,{children:[e.jsx(I,{span:20,children:e.jsx(c,{layout:"vertical",form:D,onFinish:t=>y(0,t.key,!0),children:e.jsx(c.Item,{name:"key",children:e.jsx(S,{size:"large",placeholder:"Search Resources Links...",prefix:e.jsx(ne,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(I,{span:4,style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(g,{size:"large",icon:e.jsx(ee,{}),onClick:P,disabled:!r.canManage,children:"Add Announcement"})})]}),e.jsx("div",{id:"scrollableDiv",style:{height:"74vh",overflow:"auto"},children:e.jsxs(J,{spinning:h,children:[e.jsx(A,{itemLayout:"horizontal",dataSource:s,renderItem:t=>e.jsx("div",{style:{background:"white",marginBottom:5,paddingLeft:10,paddingTop:10},children:e.jsx(A.Item,{style:{margin:0,padding:0},actions:[e.jsx(Q,{trigger:["click"],overlay:e.jsxs(p,{children:[e.jsx(p.Item,{icon:e.jsx(se,{}),onClick:()=>_(t),children:e.jsx("a",{children:"Read"})}),e.jsx(p.Item,{icon:e.jsx(re,{}),disabled:!t.canDelete,onClick:()=>H(t.id),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Delete"})}),e.jsx(p.Item,{icon:e.jsx(ie,{}),disabled:!t.canEdit,onClick:()=>V(t),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Edit"})}),e.jsx(p.Item,{icon:e.jsx(oe,{}),onClick:()=>d("Under construction"),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Report"})})]}),overlayStyle:{zIndex:9999},children:e.jsx("a",{className:"ant-dropdown-link",onClick:n=>n.preventDefault(),children:e.jsx(ae,{style:{color:"orange",fontSize:28,fontWeight:"bold"}})})})],children:e.jsx(A.Item.Meta,{style:{borderBottom:"1px solid #f0f0f0"},avatar:e.jsx(le,{}),title:e.jsx("a",{target:"_blank",rel:"noreferrer",children:t.title}),description:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:$(t.content.replace(/<[^>]+>/g,""),225)}),e.jsx("p",{children:new Date(t.created).toLocaleString()})]})})},"class-resource-link-"+t.id)},"class-resource-link-item-container-"+t.id)}),q&&e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:10},children:e.jsx(g,{type:"primary",onClick:()=>{y(b+1)},children:"Load More"})})]})}),e.jsx(C,{title:"Adding Announcement",open:z,onClose:t=>x(t),width:"50vw",children:e.jsx(de,{form:F,onFinish:G})}),e.jsx(C,{title:"Editting Announcement",open:N,onClose:t=>j(t),width:"50vw",children:e.jsx(ue,{announcement:i,form:w,onFinish:W})}),e.jsx(C,{title:e.jsx("h3",{children:i==null?void 0:i.title}),open:O,onClose:t=>k(t),width:"75vw",children:e.jsx("div",{dangerouslySetInnerHTML:{__html:(i==null?void 0:i.content)??""},style:{marginTop:10}})})]})};export{_e as ClassAnnouncements};
