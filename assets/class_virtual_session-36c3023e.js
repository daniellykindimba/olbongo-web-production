import{r as n,j as e,c as l,I as k,ap as Q,h as I,R as E,d as g,ac as X,ao as q,m as $,n as ee,B as F,l as te,e as ae,gs as se,a as re,L as D,C as ie,Y as ne,Z as h,W as le,a5 as oe,as as de,a0 as ue,f as ce,A as me,_ as i,b as S,M as w,aH as he,g as p,aI as v,ai as pe,aj as ge}from"./index-c92f9f6b.js";import{f as M}from"./pager-d4e6ce8a.js";import"./index-742844e5.js";import"./toConsumableArray-bbf3d55f.js";import"./index-f6c51ccc.js";import"./index-9cea7caf.js";import"./index.es-7ae13c2d.js";import"./text_truncate-315d9efa.js";import"./book_payment_form-7e09c370.js";const{Option:xe}=q,V=[{value:"",label:"Select Duration Type"},{value:"minutes",label:"Minutes"},{value:"hours",label:"Hours"},{value:"days",label:"Days"}],ye=o=>{const[d,u]=n.useState("");return e.jsx(e.Fragment,{children:e.jsxs(l,{layout:"vertical",form:o.form,onFinish:s=>{s.description=d,o.onFinish(s),u("")},requiredMark:!1,children:[e.jsx(l.Item,{name:"name",label:"Name",rules:[{required:!0,type:"string",message:"Please input name"}],children:e.jsx(k,{size:"large",placeholder:"Enter Name ..."})}),e.jsx(l.Item,{name:"startDate",label:"start Date",rules:[{required:!0,type:"date",message:"Please select date"}],children:e.jsx(Q,{showTime:{format:"HH:mm"},disabledDate:s=>{const c=I().format("YYYY-MM-DD");return s&&s<I(c,"YYYY-MM-DD")},style:{width:"100%"},popupStyle:{zIndex:9999}})}),e.jsxs(E,{children:[e.jsx(g,{span:12,children:e.jsx(l.Item,{name:"duration",label:"Duration",style:{width:"100%"},rules:[{required:!0,type:"integer",message:"Enter Duration"}],children:e.jsx(X,{min:1,defaultValue:1,style:{width:"100%"},size:"large"})})}),e.jsx(g,{span:12,children:e.jsx(l.Item,{name:"durationType",label:"Duration Type",style:{width:"100%"},rules:[{required:!0,type:"string",message:"Please select duration type"}],children:e.jsx(q,{defaultValue:V[0].value,size:"large",style:{width:"100%"},dropdownStyle:{zIndex:9999},children:V.map(s=>e.jsx(xe,{children:s.label},s.value))})})})]}),e.jsx("h3",{children:"Description"}),e.jsx($.CKEditor,{editor:ee,data:d,onReady:s=>{s.editing.view.change(c=>{c.setStyle("min-height","100px",s.editing.view.document.getRoot())})},onChange:(s,c)=>{const x=c.getData();u(x)},config:{toolbar:{items:["bold","italic","strikethrough","underline","code","subscript","superscript","removeFormat","|","bulletedList","numberedList","todoList","|","outdent","indent","|","-","fontSize","fontFamily","fontColor","fontBackgroundColor","highlight","|","alignment","|","EmojiPanel"],shouldNotGroupWhenFull:!0},fontFamily:{options:["default","Arial, Helvetica, sans-serif","Courier New, Courier, monospace","Georgia, serif","Lucida Sans Unicode, Lucida Grande, sans-serif","Tahoma, Geneva, sans-serif","Times New Roman, Times, serif","Trebuchet MS, Helvetica, sans-serif","Verdana, Geneva, sans-serif"],supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0}}}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(F,{type:"primary",size:"large",htmlType:"submit",children:"Save"})})]})})},ke=o=>{const[d,u]=n.useState([]),[s,c]=n.useState(),[x,T]=n.useState(!0),[b,z]=n.useState(1),[L]=l.useForm(),[je,N]=n.useState(0),[fe,H]=n.useState(0),[P,Y]=n.useState(!0),{push:C}=te(),[O,y]=n.useState(!1),[A]=l.useForm(),[R,j]=n.useState(!1),[B]=l.useForm(),G=t=>{c(t),j(!0)},J=()=>{y(!0)},_=async t=>{const{data:a}=await p.custom({url:"",method:"post",meta:{operation:"editVirtualClass",variables:{id:{value:t.id,type:"Int",required:!0},name:{value:t.name,type:"String",required:!0},description:{value:t.description,type:"String",required:!0},duration:{value:t.duration,type:"Int",required:!0},durationType:{value:t.durationType.toUpperCase(),type:"String",required:!0},startDate:{value:t.startDate,type:"DateTime",required:!0},isPublic:{value:!0,type:"Boolean",required:!0}},fields:["success","message",{virtual:v}]}}).catch(()=>(i.error("Error editing class"),{data:null})).then(r=>r);a&&(a.success?(i.success(a.message),u(d.map(r=>r.id===a.virtual.id?a.virtual:r)),j(!1)):i.error(a.message))},U=async t=>{const{data:a}=await p.custom({url:"",method:"post",meta:{operation:"createVirtualClass",variables:{darasaId:{value:parseInt(o.id?o.id.toString():"0"),type:"Int",required:!1},name:{value:t.name,type:"String",required:!0},description:{value:t.description,type:"String",required:!0},duration:{value:t.duration,type:"Int",required:!0},durationType:{value:t.durationType.toUpperCase(),type:"String",required:!0},startDate:{value:t.startDate,type:"DateTime",required:!0},isPublic:{value:!0,type:"Boolean",required:!0}},fields:["success","message",{virtual:v}]}}).catch(()=>(i.error("Error creating virtual class"),{data:null})).then(r=>r);a&&(a.success?(i.success(a.message),y(!1),u([a.virtual,...d])):i.error(a.message))},f=async(t,a="",r=!1)=>{const{data:m}=await p.custom({url:"",method:"get",meta:{operation:"darasaVirtuals",variables:{page:{value:t,type:"Int",required:!0},key:{value:a,type:"String",required:!1},id:{value:parseInt(o.id===void 0?"0":o.id.toString()),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:v}]}}).catch(()=>(i.error("Error fetching virtual classes"),{data:null})).then(Z=>Z);m&&(H(m.total),N(m.pages),z(m.page),Y(m.hasNext),u(r?m.results:[...d,...m.results])),T(!1)},W=async t=>{const{data:a}=await p.custom({url:"",method:"post",meta:{operation:"deleteVirtualClass",variables:{id:{value:t,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(i.error("Error deleting virtual class"),{data:null})).then(r=>r);a&&(a.success?(i.success(a.message),u(d.filter(r=>r.id!==t))):i.error(a.message))},K=t=>{pe.confirm({title:"Deleting Virtual Class Session",icon:e.jsx(ge,{}),content:"Are you sure ...",okText:"Delete",cancelText:"Cancel",onOk:()=>W(t)})};return n.useEffect(()=>{f(b)},[]),e.jsxs(e.Fragment,{children:[e.jsxs(E,{children:[e.jsx(g,{span:20,children:e.jsx(l,{layout:"vertical",form:L,onFinish:t=>f(0,t.key,!0),children:e.jsx(l.Item,{name:"key",children:e.jsx(k,{size:"large",placeholder:"Search Virtual Sessions...",prefix:e.jsx(ae,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(g,{span:4,style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(F,{icon:e.jsx(se,{}),onClick:J,disabled:!o.canManage,size:"large",children:"Create Virtual Session"})})]}),e.jsx("div",{id:"scrollableDiv",style:{height:"74vh",overflow:"auto"},children:e.jsxs(re,{spinning:x,children:[e.jsx(D,{itemLayout:"horizontal",dataSource:d,renderItem:t=>e.jsx("div",{style:{background:"white",marginBottom:5,paddingLeft:10,paddingTop:10},children:e.jsx(ie,{children:e.jsx(D.Item,{actions:[e.jsx(ne,{trigger:["click"],overlay:e.jsxs(h,{children:[e.jsx(h.Item,{icon:e.jsx(le,{}),disabled:!t.canJoin,onClick:()=>C("/oclass/virtual/class/session/"+t.id+"/"+t.token),children:e.jsx("a",{children:"Join"})}),t.canDelete?e.jsx(h.Item,{disabled:!t.canDelete,icon:e.jsx(oe,{}),onClick:()=>K(t.id),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Delete"})}):e.jsx(e.Fragment,{}),t.canEdit&&e.jsx(h.Item,{icon:e.jsx(de,{}),disabled:!t.canEdit,onClick:()=>G(t),children:e.jsx("a",{children:"Edit"})})]}),overlayStyle:{zIndex:9999},children:e.jsx("a",{className:"ant-dropdown-link",onClick:a=>a.preventDefault(),children:e.jsx(ue,{style:{color:"orange",fontSize:28,fontWeight:"bold"}})})})],children:e.jsx(ce,{avatar:!0,title:!1,loading:!1,active:!0,children:e.jsx(D.Item.Meta,{avatar:e.jsx(me,{}),title:e.jsx("a",{onClick:()=>t.canJoin?C("/oclass/virtual/class/session/"+t.id+"/"+t.token):i("You can't join this session"),children:t.name}),description:e.jsxs(e.Fragment,{children:[e.jsx("div",{dangerouslySetInnerHTML:{__html:t.description}}),e.jsxs("p",{children:[e.jsxs(S,{color:"green",children:["Start At:"," ",M(new Date(t.startDate),"MMMM do, yyyy H:mma")]}),e.jsxs(S,{color:"green",children:["End In:"," ",M(new Date(t.endDate),"MMMM do, yyyy H:mma")]}),t.canJoin?e.jsx(e.Fragment,{}):e.jsx(e.Fragment,{children:e.jsx(S,{color:"red",children:"Not Joinable"})})]})]})})})})})},"class-virtual-session-item-container-"+t.id)}),P&&e.jsx("div",{style:{textAlign:"center",marginTop:12},children:e.jsx("button",{onClick:()=>{f(b+1)},children:"Load More"})})]})}),e.jsx(w,{title:"Creating Class Virtual Session",open:O,onClose:t=>y(t),width:"50vw",children:e.jsx(ye,{form:A,onFinish:U})}),e.jsx(w,{title:"Editting "+(s==null?void 0:s.name),width:"40vw",open:R,onClose:t=>j(t),children:e.jsx(he,{form:B,darasa:s,onFinish:_})})]})};export{ke as ClassVirtualSessions};
