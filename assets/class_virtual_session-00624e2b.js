import{r as n,j as e,F as o,I as k,i as w,R as E,n as g,aU as F,a as q,m as X,aN as Z,ij as $,S as ee,aA as D,k as te,av as ae,aw as p,at as re,aE as se,b7 as ie,ax as ne,aC as oe,ak as le,_ as i,ah as S,M as I,g as h,aR as de}from"./index-8383052a.js";import{d as ue,C as ce}from"./ckeditor-b27bc436.js";import{D as me}from"./index-98d518bb.js";import{I as pe}from"./index-4a3eabae.js";import{E as he}from"./edit_class_virtual_form-80921228.js";import{c as v}from"./data_objects-dd3fea6e.js";import{f as M}from"./pager-9f4e6466.js";import{M as ge}from"./index-48b0d1f7.js";import"./index-9a331c4e.js";import"./PickerPanel-03789d05.js";import"./localeData-23d6edf5.js";import"./RangePicker-2155f470.js";import"./InputNumber-f580c739.js";import"./ckeditor-393f2906.js";import"./data_objects-4aa0e35d.js";import"./index-f01bf1ec.js";import"./objectWithoutProperties-b8bf9153.js";import"./DialogWrap-346db36a.js";import"./useNotification-db69f818.js";import"./index-c090ff23.js";import"./index-55e86b79.js";import"./Alert-12a532b4.js";import"./index-05816c56.js";import"./index-79c49ce7.js";import"./index-a08762ee.js";import"./darasa_card-2d35fe54.js";import"./remove_html_tags-be9c976e.js";import"./index.es-6b458f8a.js";import"./text_truncate-315d9efa.js";import"./book_payment_form-89962b57.js";import"./index-8993e350.js";import"./ReactTimeAgo-50ae14ef.js";import"./memoize-one.esm-297ddbcb.js";const{Option:xe}=F,V=[{value:"",label:"Select Duration Type"},{value:"minutes",label:"Minutes"},{value:"hours",label:"Hours"},{value:"days",label:"Days"}],ye=l=>{const[d,u]=n.useState("");return e.jsx(e.Fragment,{children:e.jsxs(o,{layout:"vertical",form:l.form,onFinish:r=>{r.description=d,l.onFinish(r),u("")},requiredMark:!1,children:[e.jsx(o.Item,{name:"name",label:"Name",rules:[{required:!0,type:"string",message:"Please input name"}],children:e.jsx(k,{size:"large",placeholder:"Enter Name ..."})}),e.jsx(o.Item,{name:"startDate",label:"start Date",rules:[{required:!0,type:"date",message:"Please select date"}],children:e.jsx(me,{showTime:{format:"HH:mm"},disabledDate:r=>{const c=w().format("YYYY-MM-DD");return r&&r<w(c,"YYYY-MM-DD")},style:{width:"100%"},popupStyle:{zIndex:9999}})}),e.jsxs(E,{children:[e.jsx(g,{span:12,children:e.jsx(o.Item,{name:"duration",label:"Duration",style:{width:"100%"},rules:[{required:!0,type:"integer",message:"Enter Duration"}],children:e.jsx(pe,{min:1,defaultValue:1,style:{width:"100%"},size:"large"})})}),e.jsx(g,{span:12,children:e.jsx(o.Item,{name:"durationType",label:"Duration Type",style:{width:"100%"},rules:[{required:!0,type:"string",message:"Please select duration type"}],children:e.jsx(F,{defaultValue:V[0].value,size:"large",style:{width:"100%"},dropdownStyle:{zIndex:9999},children:V.map(r=>e.jsx(xe,{children:r.label},r.value))})})})]}),e.jsx("h3",{children:"Description"}),e.jsx(ue.CKEditor,{editor:ce,data:d,onReady:r=>{r.editing.view.change(c=>{c.setStyle("min-height","100px",r.editing.view.document.getRoot())})},onChange:(r,c)=>{const x=c.getData();u(x)},config:{toolbar:{items:["bold","italic","strikethrough","underline","code","subscript","superscript","removeFormat","|","bulletedList","numberedList","todoList","|","outdent","indent","|","-","fontSize","fontFamily","fontColor","fontBackgroundColor","highlight","|","alignment","|","EmojiPanel"],shouldNotGroupWhenFull:!0},fontFamily:{options:["default","Arial, Helvetica, sans-serif","Courier New, Courier, monospace","Georgia, serif","Lucida Sans Unicode, Lucida Grande, sans-serif","Tahoma, Geneva, sans-serif","Times New Roman, Times, serif","Trebuchet MS, Helvetica, sans-serif","Verdana, Geneva, sans-serif"],supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0}}}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(q,{type:"primary",size:"large",htmlType:"submit",children:"Save"})})]})})},$e=l=>{const[d,u]=n.useState([]),[r,c]=n.useState(),[x,T]=n.useState(!0),[b,z]=n.useState(1),[N]=o.useForm(),[fe,L]=n.useState(0),[je,P]=n.useState(0),[H,O]=n.useState(!0),{push:C}=X(),[Y,y]=n.useState(!1),[A]=o.useForm(),[R,f]=n.useState(!1),[B]=o.useForm(),G=t=>{c(t),f(!0)},J=()=>{y(!0)},_=async t=>{const{data:a}=await h.custom({url:"",method:"post",meta:{operation:"editVirtualClass",variables:{id:{value:t.id,type:"Int",required:!0},name:{value:t.name,type:"String",required:!0},description:{value:t.description,type:"String",required:!0},duration:{value:t.duration,type:"Int",required:!0},durationType:{value:t.durationType.toUpperCase(),type:"String",required:!0},startDate:{value:t.startDate,type:"DateTime",required:!0},isPublic:{value:!0,type:"Boolean",required:!0}},fields:["success","message",{virtual:v}]}}).catch(()=>(i.error("Error editing class"),{data:null})).then(s=>s);a&&(a.success?(i.success(a.message),u(d.map(s=>s.id===a.virtual.id?a.virtual:s)),f(!1)):i.error(a.message))},U=async t=>{const{data:a}=await h.custom({url:"",method:"post",meta:{operation:"createVirtualClass",variables:{darasaId:{value:parseInt(l.id?l.id.toString():"0"),type:"Int",required:!1},name:{value:t.name,type:"String",required:!0},description:{value:t.description,type:"String",required:!0},duration:{value:t.duration,type:"Int",required:!0},durationType:{value:t.durationType.toUpperCase(),type:"String",required:!0},startDate:{value:t.startDate,type:"DateTime",required:!0},isPublic:{value:!0,type:"Boolean",required:!0}},fields:["success","message",{virtual:v}]}}).catch(()=>(i.error("Error creating virtual class"),{data:null})).then(s=>s);a&&(a.success?(i.success(a.message),y(!1),u([a.virtual,...d])):i.error(a.message))},j=async(t,a="",s=!1)=>{const{data:m}=await h.custom({url:"",method:"get",meta:{operation:"darasaVirtuals",variables:{page:{value:t,type:"Int",required:!0},key:{value:a,type:"String",required:!1},id:{value:parseInt(l.id===void 0?"0":l.id.toString()),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:v}]}}).catch(()=>(i.error("Error fetching virtual classes"),{data:null})).then(Q=>Q);m&&(P(m.total),L(m.pages),z(m.page),O(m.hasNext),u(s?m.results:[...d,...m.results])),T(!1)},W=async t=>{const{data:a}=await h.custom({url:"",method:"post",meta:{operation:"deleteVirtualClass",variables:{id:{value:t,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(i.error("Error deleting virtual class"),{data:null})).then(s=>s);a&&(a.success?(i.success(a.message),u(d.filter(s=>s.id!==t))):i.error(a.message))},K=t=>{ge.confirm({title:"Deleting Virtual Class Session",icon:e.jsx(de,{}),content:"Are you sure ...",okText:"Delete",cancelText:"Cancel",onOk:()=>W(t)})};return n.useEffect(()=>{j(b)},[]),e.jsxs(e.Fragment,{children:[e.jsxs(E,{children:[e.jsx(g,{span:20,children:e.jsx(o,{layout:"vertical",form:N,onFinish:t=>j(0,t.key,!0),children:e.jsx(o.Item,{name:"key",children:e.jsx(k,{size:"large",placeholder:"Search Virtual Sessions...",prefix:e.jsx(Z,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(g,{span:4,style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(q,{icon:e.jsx($,{}),onClick:J,disabled:!l.canManage,size:"large",children:"Create Virtual Session"})})]}),e.jsx("div",{id:"scrollableDiv",style:{height:"74vh",overflow:"auto"},children:e.jsxs(ee,{spinning:x,children:[e.jsx(D,{itemLayout:"horizontal",dataSource:d,renderItem:t=>e.jsx("div",{style:{background:"white",marginBottom:5,paddingLeft:10,paddingTop:10},children:e.jsx(te,{children:e.jsx(D.Item,{actions:[e.jsx(ae,{trigger:["click"],overlay:e.jsxs(p,{children:[e.jsx(p.Item,{icon:e.jsx(re,{}),disabled:!t.canJoin,onClick:()=>C("/oclass/virtual/class/session/"+t.id+"/"+t.token),children:e.jsx("a",{children:"Join"})}),t.canDelete?e.jsx(p.Item,{disabled:!t.canDelete,icon:e.jsx(se,{}),onClick:()=>K(t.id),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Delete"})}):e.jsx(e.Fragment,{}),t.canEdit&&e.jsx(p.Item,{icon:e.jsx(ie,{}),disabled:!t.canEdit,onClick:()=>G(t),children:e.jsx("a",{children:"Edit"})})]}),overlayStyle:{zIndex:9999},children:e.jsx("a",{className:"ant-dropdown-link",onClick:a=>a.preventDefault(),children:e.jsx(ne,{style:{color:"orange",fontSize:28,fontWeight:"bold"}})})})],children:e.jsx(oe,{avatar:!0,title:!1,loading:!1,active:!0,children:e.jsx(D.Item.Meta,{avatar:e.jsx(le,{}),title:e.jsx("a",{onClick:()=>t.canJoin?C("/oclass/virtual/class/session/"+t.id+"/"+t.token):i("You can't join this session"),children:t.name}),description:e.jsxs(e.Fragment,{children:[e.jsx("div",{dangerouslySetInnerHTML:{__html:t.description}}),e.jsxs("p",{children:[e.jsxs(S,{color:"green",children:["Start At:"," ",M(new Date(t.startDate),"MMMM do, yyyy H:mma")]}),e.jsxs(S,{color:"green",children:["End In:"," ",M(new Date(t.endDate),"MMMM do, yyyy H:mma")]}),t.canJoin?e.jsx(e.Fragment,{}):e.jsx(e.Fragment,{children:e.jsx(S,{color:"red",children:"Not Joinable"})})]})]})})})})})},"class-virtual-session-item-container-"+t.id)}),H&&e.jsx("div",{style:{textAlign:"center",marginTop:12},children:e.jsx("button",{onClick:()=>{j(b+1)},children:"Load More"})})]})}),e.jsx(I,{title:"Creating Class Virtual Session",open:Y,onClose:t=>y(t),width:"50vw",children:e.jsx(ye,{form:A,onFinish:U})}),e.jsx(I,{title:"Editting "+(r==null?void 0:r.name),width:"40vw",open:R,onClose:t=>f(t),children:e.jsx(he,{form:B,darasa:r,onFinish:_})})]})};export{$e as ClassVirtualSessions};
