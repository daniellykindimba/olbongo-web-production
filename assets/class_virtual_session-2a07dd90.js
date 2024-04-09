import{r as n,aM as e,aC as o,M as E,bP as I,aG as k,ay as g,S as F,ae as q,bL as X,cF as Z,jp as $,ac as ee,aA as te,aD as p,cw as re,bV as ae,bU as se,cy as ie,bK as i,aJ as D,bI as w,bJ as h,cI as ne}from"./index-2fc17c3b.js";import{d as oe,C as le}from"./ckeditor-bbf99639.js";import{D as de}from"./index-72c63eba.js";import{I as ue}from"./index-8aa917b6.js";import{E as ce}from"./edit_class_virtual_form-e4ff4bc8.js";import{c as S}from"./data_objects-d90052d5.js";import{L as b}from"./index-ca65b019.js";import{C as me}from"./index-f023b25a.js";import{S as pe}from"./Skeleton-94302138.js";import{A as he}from"./index-20752ece.js";import{f as M}from"./pager-4c2a6f57.js";import{M as ge}from"./index-6215977a.js";import"./index-e8e9ceb4.js";import"./PickerPanel-be3ca01f.js";import"./localeData-6904e615.js";import"./RangePicker-7a53e9ae.js";import"./InputNumber-5bec0d4b.js";import"./ckeditor-d3cf0660.js";import"./data_objects-8fb99e43.js";import"./index-651f824b.js";import"./index-c57ac89c.js";import"./extends-538408d9.js";import"./useNotification-c6a88f9b.js";import"./DialogWrap-b6ee72d4.js";import"./MutateObserver-517aa91f.js";import"./index-812618d0.js";import"./Image-e05734f9.js";import"./Upload-7e9943b4.js";import"./index-79fec706.js";import"./index-9abc7cc3.js";import"./Alert-26f02f9c.js";import"./index-0b5f66ee.js";import"./transButton-b0336faf.js";import"./index-ce61678e.js";import"./index-eae8dd11.js";import"./fade-7be4fa1b.js";import"./index-6af274c2.js";import"./index-93153875.js";import"./darasa_card-513f71ac.js";import"./remove_html_tags-be9c976e.js";import"./index-9c7bc008.js";import"./ActionButton-e92b0465.js";import"./index-d62905de.js";import"./index.es-014b7c98.js";import"./text_truncate-315d9efa.js";import"./index-7067581d.js";import"./book_payment_form-b3091809.js";import"./index-389401b2.js";import"./InfoCircleFilled-c05f8e68.js";import"./index-9b2d1d25.js";const{Option:xe}=F,V=[{value:"",label:"Select Duration Type"},{value:"minutes",label:"Minutes"},{value:"hours",label:"Hours"},{value:"days",label:"Days"}],fe=l=>{const[d,u]=n.useState("");return e.jsx(e.Fragment,{children:e.jsxs(o,{layout:"vertical",form:l.form,onFinish:a=>{a.description=d,l.onFinish(a),u("")},requiredMark:!1,children:[e.jsx(o.Item,{name:"name",label:"Name",rules:[{required:!0,type:"string",message:"Please input name"}],children:e.jsx(E,{size:"large",placeholder:"Enter Name ..."})}),e.jsx(o.Item,{name:"startDate",label:"start Date",rules:[{required:!0,type:"date",message:"Please select date"}],children:e.jsx(de,{showTime:{format:"HH:mm"},disabledDate:a=>{const c=I().format("YYYY-MM-DD");return a&&a<I(c,"YYYY-MM-DD")},style:{width:"100%"},popupStyle:{zIndex:9999}})}),e.jsxs(k,{children:[e.jsx(g,{span:12,children:e.jsx(o.Item,{name:"duration",label:"Duration",style:{width:"100%"},rules:[{required:!0,type:"integer",message:"Enter Duration"}],children:e.jsx(ue,{min:1,defaultValue:1,style:{width:"100%"},size:"large"})})}),e.jsx(g,{span:12,children:e.jsx(o.Item,{name:"durationType",label:"Duration Type",style:{width:"100%"},rules:[{required:!0,type:"string",message:"Please select duration type"}],children:e.jsx(F,{defaultValue:V[0].value,size:"large",style:{width:"100%"},dropdownStyle:{zIndex:9999},children:V.map(a=>e.jsx(xe,{children:a.label},a.value))})})})]}),e.jsx("h3",{children:"Description"}),e.jsx(oe.CKEditor,{editor:le,data:d,onReady:a=>{a.editing.view.change(c=>{c.setStyle("min-height","100px",a.editing.view.document.getRoot())})},onChange:(a,c)=>{const x=c.getData();u(x)},config:{toolbar:{items:["bold","italic","strikethrough","underline","code","subscript","superscript","removeFormat","|","bulletedList","numberedList","todoList","|","outdent","indent","|","-","fontSize","fontFamily","fontColor","fontBackgroundColor","highlight","|","alignment","|","EmojiPanel"],shouldNotGroupWhenFull:!0},fontFamily:{options:["default","Arial, Helvetica, sans-serif","Courier New, Courier, monospace","Georgia, serif","Lucida Sans Unicode, Lucida Grande, sans-serif","Tahoma, Geneva, sans-serif","Times New Roman, Times, serif","Trebuchet MS, Helvetica, sans-serif","Verdana, Geneva, sans-serif"],supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0}}}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(q,{type:"primary",size:"large",htmlType:"submit",children:"Save"})})]})})},xt=l=>{const[d,u]=n.useState([]),[a,c]=n.useState(),[x,T]=n.useState(!0),[v,L]=n.useState(1),[z]=o.useForm(),[ye,N]=n.useState(0),[je,P]=n.useState(0),[A,H]=n.useState(!0),{push:C}=X(),[O,f]=n.useState(!1),[Y]=o.useForm(),[J,y]=n.useState(!1),[G]=o.useForm(),R=t=>{c(t),y(!0)},B=()=>{f(!0)},U=async t=>{const{data:r}=await h.custom({url:"",method:"post",meta:{operation:"editVirtualClass",variables:{id:{value:t.id,type:"Int",required:!0},name:{value:t.name,type:"String",required:!0},description:{value:t.description,type:"String",required:!0},duration:{value:t.duration,type:"Int",required:!0},durationType:{value:t.durationType.toUpperCase(),type:"String",required:!0},startDate:{value:t.startDate,type:"DateTime",required:!0},isPublic:{value:!0,type:"Boolean",required:!0}},fields:["success","message",{virtual:S}]}}).catch(()=>(i.error("Error editing class"),{data:null})).then(s=>s);r&&(r.success?(i.success(r.message),u(d.map(s=>s.id===r.virtual.id?r.virtual:s)),y(!1)):i.error(r.message))},_=async t=>{const{data:r}=await h.custom({url:"",method:"post",meta:{operation:"createVirtualClass",variables:{darasaId:{value:parseInt(l.id?l.id.toString():"0"),type:"Int",required:!1},name:{value:t.name,type:"String",required:!0},description:{value:t.description,type:"String",required:!0},duration:{value:t.duration,type:"Int",required:!0},durationType:{value:t.durationType.toUpperCase(),type:"String",required:!0},startDate:{value:t.startDate,type:"DateTime",required:!0},isPublic:{value:!0,type:"Boolean",required:!0}},fields:["success","message",{virtual:S}]}}).catch(()=>(i.error("Error creating virtual class"),{data:null})).then(s=>s);r&&(r.success?(i.success(r.message),f(!1),u([r.virtual,...d])):i.error(r.message))},j=async(t,r="",s=!1)=>{const{data:m}=await h.custom({url:"",method:"get",meta:{operation:"darasaVirtuals",variables:{page:{value:t,type:"Int",required:!0},key:{value:r,type:"String",required:!1},id:{value:parseInt(l.id===void 0?"0":l.id.toString()),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:S}]}}).catch(()=>(i.error("Error fetching virtual classes"),{data:null})).then(Q=>Q);m&&(P(m.total),N(m.pages),L(m.page),H(m.hasNext),u(s?m.results:[...d,...m.results])),T(!1)},K=async t=>{const{data:r}=await h.custom({url:"",method:"post",meta:{operation:"deleteVirtualClass",variables:{id:{value:t,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(i.error("Error deleting virtual class"),{data:null})).then(s=>s);r&&(r.success?(i.success(r.message),u(d.filter(s=>s.id!==t))):i.error(r.message))},W=t=>{ge.confirm({title:"Deleting Virtual Class Session",icon:e.jsx(ne,{}),content:"Are you sure ...",okText:"Delete",cancelText:"Cancel",onOk:()=>K(t)})};return n.useEffect(()=>{j(v)},[]),e.jsxs(e.Fragment,{children:[e.jsxs(k,{children:[e.jsx(g,{span:20,children:e.jsx(o,{layout:"vertical",form:z,onFinish:t=>j(0,t.key,!0),children:e.jsx(o.Item,{name:"key",children:e.jsx(E,{size:"large",placeholder:"Search Virtual Sessions...",prefix:e.jsx(Z,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(g,{span:4,style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(q,{icon:e.jsx($,{}),onClick:B,disabled:!l.canManage,size:"large",children:"Create Virtual Session"})})]}),e.jsx("div",{id:"scrollableDiv",style:{height:"74vh",overflow:"auto"},children:e.jsxs(ee,{spinning:x,children:[e.jsx(b,{itemLayout:"horizontal",dataSource:d,renderItem:t=>e.jsx("div",{style:{background:"white",marginBottom:5,paddingLeft:10,paddingTop:10},children:e.jsx(me,{children:e.jsx(b.Item,{actions:[e.jsx(te,{trigger:["click"],overlay:e.jsxs(p,{children:[e.jsx(p.Item,{icon:e.jsx(re,{}),disabled:!t.canJoin,onClick:()=>C("/oclass/virtual/class/session/"+t.id+"/"+t.token),children:e.jsx("a",{children:"Join"})}),t.canDelete?e.jsx(p.Item,{disabled:!t.canDelete,icon:e.jsx(ae,{}),onClick:()=>W(t.id),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Delete"})}):e.jsx(e.Fragment,{}),t.canEdit&&e.jsx(p.Item,{icon:e.jsx(se,{}),disabled:!t.canEdit,onClick:()=>R(t),children:e.jsx("a",{children:"Edit"})})]}),overlayStyle:{zIndex:9999},children:e.jsx("a",{className:"ant-dropdown-link",onClick:r=>r.preventDefault(),children:e.jsx(ie,{style:{color:"orange",fontSize:28,fontWeight:"bold"}})})})],children:e.jsx(pe,{avatar:!0,title:!1,loading:!1,active:!0,children:e.jsx(b.Item.Meta,{avatar:e.jsx(he,{}),title:e.jsx("a",{onClick:()=>t.canJoin?C("/oclass/virtual/class/session/"+t.id+"/"+t.token):i("You can't join this session"),children:t.name}),description:e.jsxs(e.Fragment,{children:[e.jsx("div",{dangerouslySetInnerHTML:{__html:t.description}}),e.jsxs("p",{children:[e.jsxs(D,{color:"green",children:["Start At:"," ",M(new Date(t.startDate),"MMMM do, yyyy H:mma")]}),e.jsxs(D,{color:"green",children:["End In:"," ",M(new Date(t.endDate),"MMMM do, yyyy H:mma")]}),t.canJoin?e.jsx(e.Fragment,{}):e.jsx(e.Fragment,{children:e.jsx(D,{color:"red",children:"Not Joinable"})})]})]})})})})})},"class-virtual-session-item-container-"+t.id)}),A&&e.jsx("div",{style:{textAlign:"center",marginTop:12},children:e.jsx("button",{onClick:()=>{j(v+1)},children:"Load More"})})]})}),e.jsx(w,{title:"Creating Class Virtual Session",open:O,onClose:t=>f(t),width:"50vw",children:e.jsx(fe,{form:Y,onFinish:_})}),e.jsx(w,{title:"Editting "+(a==null?void 0:a.name),width:"40vw",open:J,onClose:t=>y(t),children:e.jsx(ce,{form:G,darasa:a,onFinish:U})})]})};export{xt as ClassVirtualSessions};
