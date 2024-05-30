import{r as i,j as e,aT as c,a1 as R,aO as ne,cm as V,av as M,c as re,aW as ae,aP as O,a8 as oe,aR as le,aU as g,_ as o,aZ as x,af as C,cl as j,g as b}from"./index-7df9ee76.js";import{E as de,A as ce,a as me,b as ue}from"./edit_assignment-d9062ff0.js";import{d as he,C as ge}from"./ckeditor-96be3d2f.js";import{D as pe}from"./index-de05c9af.js";import{e as k}from"./data_objects-a5a8b655.js";import{L as v}from"./index-4a591484.js";import{M as xe}from"./index-c15cc96b.js";import{S as je}from"./SearchOutlined-dcd1f7fa.js";import{L as fe}from"./LinkOutlined-9cb11235.js";import{F as w}from"./FolderViewOutlined-00f263a0.js";import{E as be}from"./EditOutlined-a52bf258.js";import{D as Se}from"./DeleteOutlined-645f7cb7.js";import{I as ye}from"./InfoCircleOutlined-d965a3ac.js";import{M as Ae}from"./MoreOutlined-8471c15a.js";import{B as Ce}from"./BookOutlined-af73bed4.js";import{U as ke}from"./UploadOutlined-0a5ff0f3.js";import{E as ve}from"./ExclamationCircleOutlined-854fb9e1.js";import"./PlusSquareFilled-e5f9aa47.js";import"./index-efa01bbc.js";import"./index-d353142b.js";import"./index-e07fd9be.js";import"./InfoCircleFilled-60705b95.js";import"./InfoCircleFilled-baaa675e.js";import"./index-28ec3157.js";import"./Upload-02bc7b9c.js";import"./fade-faabdb66.js";import"./DeleteOutlined-25685737.js";import"./DownloadOutlined-6cd35f11.js";import"./DownloadOutlined-c8c6c7c5.js";import"./InboxOutlined-fd02d12e.js";import"./ckeditor-470b335d.js";import"./index-13e34696.js";import"./index-9a949468.js";import"./localeData-6fc112a3.js";import"./SwapRightOutlined-c4e52b1e.js";import"./SinglePicker-7cf916b3.js";import"./data_objects-327f1d7c.js";import"./ActionButton-8146ab60.js";import"./DialogWrap-f6cebbde.js";import"./index-6d39d6f0.js";import"./EditOutlined-401a1613.js";const we=l=>{const[d,m]=i.useState(!0),[r,p]=i.useState("");return e.jsx(e.Fragment,{children:e.jsxs(c,{layout:"vertical",form:l.form,onFinish:a=>{a.online=d,a.description=r,l.onFinish(a)},requiredMark:!1,children:[e.jsx(c.Item,{name:"title",label:"Title",rules:[{required:!0,type:"string",message:"Please input Title"}],children:e.jsx(R,{size:"large",placeholder:"Enter Title ..."})}),e.jsx(c.Item,{name:"online",children:e.jsx(ne,{checked:d,onChange:()=>m(!d),children:"Online Submit Assignment Work"})}),e.jsx(c.Item,{name:"deadline",label:"Deadline",rules:[{required:!0,type:"date",message:"Please select Deadline"}],children:e.jsx(pe,{size:"large",showTime:{format:"HH:mm"},disabledDate:a=>{const h=V().format("YYYY-MM-DD");return a&&a<V(h,"YYYY-MM-DD")},style:{width:"100%"},popupStyle:{zIndex:9999}})}),e.jsx("h3",{children:"Description"}),e.jsx(he.CKEditor,{editor:ge,data:r,onReady:a=>{a.editing.view.change(h=>{h.setStyle("min-height","150px",a.editing.view.document.getRoot())})},onChange:(a,h)=>{const f=h.getData();p(f)},config:{toolbar:{items:["bold","italic","strikethrough","underline","code","subscript","superscript","removeFormat","|","bulletedList","numberedList","todoList","|","outdent","indent","|","-","fontSize","fontFamily","fontColor","fontBackgroundColor","highlight","|","alignment","|","EmojiPanel"],shouldNotGroupWhenFull:!0},fontFamily:{options:["default","Arial, Helvetica, sans-serif","Courier New, Courier, monospace","Georgia, serif","Lucida Sans Unicode, Lucida Grande, sans-serif","Tahoma, Geneva, sans-serif","Times New Roman, Times, serif","Trebuchet MS, Helvetica, sans-serif","Verdana, Geneva, sans-serif"],supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0}}}),e.jsx("div",{style:{height:45}}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(M,{type:"primary",size:"large",htmlType:"submit",children:"Save"})})]})})},xt=l=>{const[d,m]=i.useState([]),[r,p]=i.useState(),[a,h]=i.useState(!0),[f,W]=i.useState(1),[z]=c.useForm(),[Me,_]=i.useState(0),[Fe,Y]=i.useState(0),[B,N]=i.useState(!0);re();const[P,S]=i.useState(!1),[H,F]=i.useState(!1),[G,y]=i.useState(!1),[U,D]=i.useState(!1),[K,I]=i.useState(!1),[E]=c.useForm(),[T]=c.useForm(),Z=t=>{p(t),I(!0)},J=t=>{m(d.map(s=>s.id===t.id?t:s))},q=t=>{p(t),D(!0)},L=t=>{p(t),F(!0)},Q=t=>{p(t),y(!0)},X=()=>{S(!0)},$=async t=>{const{data:s}=await b.custom({url:"",method:"post",meta:{operation:"createDarasaAssignment",variables:{id:{value:parseInt(l.id===void 0?"0":l.id.toString()),type:"Int",required:!0},title:{value:t.title,type:"String",required:!0},description:{value:t.description,type:"String",required:!0},deadline:{value:t.deadline,type:"DateTime",required:!0},online:{value:t.online,type:"Boolean",required:!0}},fields:["success","message",{assignment:k}]}}).catch(()=>(o.error("Failed to create assignment"),{data:null})).then(n=>n);s&&(s.success?(o(s.message),m([s.assignment,...d]),E.resetFields(),S(!1)):o.error(s.message))},ee=async t=>{const{data:s}=await b.custom({url:"",method:"post",meta:{operation:"updateDarasaAssignment",variables:{id:{value:r===void 0?0:parseInt(r.id.toString()),type:"Int",required:!0},title:{value:t.title,type:"String",required:!0},description:{value:t.description,type:"String",required:!0},deadline:{value:t.deadline,type:"DateTime",required:!0},online:{value:t.online,type:"Boolean",required:!0}},fields:["success","message",{assignment:k}]}}).catch(()=>(o.error("Failed to update assignment"),{data:null})).then(n=>n);s&&(s.success?(o(s.message),m(d.map(n=>n.id===s.assignment.id?s.assignment:n)),T.resetFields(),y(!1)):o.error(s.message))},A=async(t,s="",n=!1)=>{const{data:u}=await b.custom({url:"",method:"get",meta:{operation:"darasaAssignments",variables:{page:{value:t,type:"Int",required:!0},key:{value:s,type:"String",required:!1},id:{value:parseInt(l.id===void 0?"0":l.id.toString()),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:k}]}}).catch(()=>(o.error("Failed to fetch assignments"),{data:null})).then(ie=>ie);u&&(Y(u.total),_(u.pages),W(u.page),N(u.hasNext),(s.length>0||s.length===0&&n)&&m(u.results),u.results.length>0&&!n&&m(d.concat(u.results))),h(!1)},te=async t=>{const{data:s}=await b.custom({url:"",method:"post",meta:{operation:"deleteDarasaAssignment",variables:{id:{value:t,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(o.error("Failed to delete assignment"),{data:null})).then(n=>n);s&&(s.success?(o.success(s.message),m(d.filter(n=>n.id!==t))):o.error(s.message))},se=t=>{xe.confirm({title:"Deleting Assignment",icon:e.jsx(ve,{}),content:"Are you sure ...",okText:"Delete",cancelText:"Cancel",onOk:()=>te(t)})};return i.useEffect(()=>{A(f)},[]),e.jsxs(e.Fragment,{children:[e.jsxs(ae,{children:[e.jsx(O,{span:20,children:e.jsx(c,{layout:"vertical",form:z,onFinish:t=>A(0,t.key,!0),children:e.jsx(c.Item,{name:"key",children:e.jsx(R,{size:"large",placeholder:"Search Assignments...",prefix:e.jsx(je,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(O,{span:4,style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(M,{icon:e.jsx(fe,{}),onClick:X,disabled:!l.canManage,size:"large",children:"Add Assignment"})})]}),e.jsx("div",{id:"scrollableDiv",style:{height:"74vh",overflow:"auto"},children:e.jsxs(oe,{spinning:a,children:[e.jsx(v,{itemLayout:"horizontal",dataSource:d,renderItem:t=>e.jsx("div",{style:{background:"white",marginBottom:5,paddingLeft:10,paddingTop:10},children:e.jsx(v.Item,{style:{margin:0,padding:0},actions:[e.jsx(le,{trigger:["click"],overlay:e.jsxs(g,{children:[e.jsx(g.Item,{icon:e.jsx(w,{}),children:e.jsx("a",{target:"_blank",onClick:()=>o("on construction"),children:"View"})}),e.jsx(g.Item,{icon:e.jsx(w,{}),children:e.jsx("a",{target:"_blank",onClick:()=>q(t),children:"Submissions"})}),e.jsx(g.Item,{icon:e.jsx(w,{}),children:e.jsx("a",{target:"_blank",onClick:()=>L(t),children:"Attachements"})}),e.jsx(g.Item,{icon:e.jsx(be,{}),disabled:!t.canDelete,onClick:()=>Q(t),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Edit"})}),e.jsx(g.Item,{icon:e.jsx(Se,{}),disabled:!t.canEdit,onClick:()=>se(t.id),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Delete"})}),e.jsx(g.Item,{icon:e.jsx(ye,{}),onClick:()=>o("Under construction"),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Report"})})]}),overlayStyle:{zIndex:9999},children:e.jsx("a",{className:"ant-dropdown-link",onClick:s=>s.preventDefault(),children:e.jsx(Ae,{style:{color:"orange",fontSize:28,fontWeight:"bold"}})})})],children:e.jsx(v.Item.Meta,{style:{borderBottom:"1px solid #e8e8e8",paddingBottom:10},avatar:e.jsx(Ce,{}),title:e.jsxs("a",{target:"_blank",rel:"noreferrer",children:[t.title,t.onlineSubmission&&e.jsx("span",{style:{marginLeft:20},children:e.jsx(x,{color:"red",children:"Online Submission"})})]}),description:e.jsxs(e.Fragment,{children:[e.jsx("span",{dangerouslySetInnerHTML:{__html:t.description}}),e.jsxs("p",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsxs("span",{children:[e.jsxs(x,{color:"cyan",children:[e.jsx("span",{style:{marginRight:5},children:"Created:"}),new Date(t.created).toLocaleString()]}),e.jsxs(x,{color:"green",children:[e.jsx("span",{style:{marginRight:5},children:"Deadline:"}),new Date(t.deadline).toLocaleString()]}),e.jsx(C,{title:"Click to View Attachments",children:e.jsx("a",{onClick:()=>L(t),children:e.jsxs(x,{color:"orange",children:[e.jsx("span",{style:{marginRight:5},children:"Attachments:"}),t.totalAttachments]})})})]}),e.jsxs("span",{children:[t.canSubmit&&!t.canManage&&e.jsx(C,{title:t.submitted?"Click to Re-submitt Your Assignment Work":"Click to Submitt Your Assignment Work",color:t.submitted?"green":"red",children:e.jsx("a",{onClick:()=>Z(t),children:e.jsx(x,{color:t.submitted?"green":"red",icon:e.jsx(ke,{}),children:e.jsxs("span",{style:{marginRight:5},children:[t.submitted?"Re-submitt":"Submitt"," ","Assignment Work:"]})})})}),t.canManage&&e.jsx(C,{title:"Click to View Students Submissions",color:"green",children:e.jsx("a",{onClick:()=>q(t),children:e.jsx(x,{color:"green",children:e.jsx("span",{style:{marginRight:5},children:"Submissions"})})})})]})]})]})})},"class-assignment-link-"+t.id)},"class-resource-link-item-container-"+t.id)}),B&&e.jsx("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"},children:e.jsx(M,{type:"primary",onClick:()=>{A(f+1)},children:"Load More"})})]})}),e.jsx(j,{title:"Creating Assignment",open:P,onClose:t=>S(t),width:"50vw",children:e.jsx(we,{form:E,onFinish:$})}),e.jsx(j,{title:"Edit Assignment",open:G,onClose:t=>y(t),width:"50vw",children:e.jsx(de,{assignment:r,form:T,onFinish:ee})}),e.jsx(j,{title:"Assignment Attachements",open:H,onClose:t=>F(t),width:"50vw",children:e.jsx(ce,{assignment:r,canManage:l.canManage})}),e.jsx(j,{title:"Assignment Submissions",open:U,onClose:t=>D(t),width:"50vw",children:e.jsx(me,{assignment:r,canManage:l.canManage})}),e.jsx(j,{title:"Assignment Work Submission",open:K,onClose:t=>I(t),width:"50vw",children:e.jsx(ue,{assignment:r,canManage:l.canManage,submitted:r==null?void 0:r.submitted,onFinish:J})})]})};export{xt as ClassAssignments};
