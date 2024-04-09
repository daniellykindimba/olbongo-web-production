import{aM as e,aC as a,M as _,aF as ue,ae as w,r as n,bL as me,c4 as P,cc as p,cF as he,cM as xe,ac as pe,aH as E,aA as ge,aD as l,cH as M,bK as r,i5 as je,cf as q,bV as fe,i6 as ve,cy as ye,Z as Ce,$ as Se,aJ as De,aG as be,ay as ke,aE as Ie,bI as B,cN as we,cO as Ae,bT as L,cI as D,bJ as u,aw as b,c8 as Fe}from"./index-2fc17c3b.js";import{C as Te}from"./ckeditor-d3cf0660.js";import{d as N}from"./data_objects-8fb99e43.js";import{r as k}from"./remove_html_tags-be9c976e.js";import{C as I}from"./index-f023b25a.js";import{A as ze}from"./index-20752ece.js";import{T as Oe}from"./index-0b5f66ee.js";import{M as f}from"./index-6215977a.js";import"./ckeditor-bbf99639.js";import"./Skeleton-94302138.js";import"./index-651f824b.js";import"./index-9abc7cc3.js";import"./transButton-b0336faf.js";import"./InfoCircleFilled-c05f8e68.js";import"./ActionButton-e92b0465.js";import"./DialogWrap-b6ee72d4.js";import"./index-93153875.js";import"./fade-7be4fa1b.js";const Pe=g=>{const v=[{label:"Public",value:!0},{label:"Private",value:!1}];return e.jsx(e.Fragment,{children:e.jsxs(a,{layout:"vertical",form:g.form,onFinish:m=>{g.onFinish(m)},requiredMark:!1,initialValues:{remember:!1,email:"",password:""},children:[e.jsx(a.Item,{name:"name",label:"Name",rules:[{required:!0,type:"string"}],children:e.jsx(_,{size:"large",placeholder:"Enter Name ..."})}),e.jsx(a.Item,{name:"availability",label:"Availability",initialValue:!0,children:e.jsx(ue.Group,{options:v,onChange:()=>{},value:!0})}),e.jsx(a.Item,{name:"description",label:"Description",style:{marginBottom:"12px"},rules:[{required:!1,type:"string",message:"Please input description"}],children:e.jsx(Te,{onChange:m=>{g.form.setFieldsValue({description:m})}})}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(w,{type:"primary",size:"large",htmlType:"submit",children:"Save"})})]})})},{Paragraph:Ee}=Oe,Me=g=>{const[v,m]=n.useState(!1),[c,h]=n.useState([]),[d,V]=n.useState(),[x,H]=n.useState(!0),[R,K]=n.useState(0),[y,A]=n.useState(1),[qe,G]=n.useState(0),[C,J]=n.useState(20),[F,Be]=n.useState(""),[Q,U]=n.useState(!0),[W,Z]=n.useState(!1),[$]=a.useForm(),[X,S]=n.useState(!1),[Y,T]=n.useState(!1),{push:z}=me(),[O]=a.useForm(),ee=async t=>{const{data:s}=await u.custom({url:"",method:"post",meta:{operation:"addDriveArchive",variables:{id:{value:t,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(r.error("Error while adding to archive"),{data:null})).then(i=>i);s&&(s.success?(r.success(s.message),h(c.filter(i=>parseInt(i.id.toString())!==t))):r.error(s.message)),f.destroyAll()},te=t=>{f.confirm({title:"Confirm",icon:e.jsx(D,{}),content:"Adding Drive To Archive ....",okText:"Add",cancelText:"Cancel",onOk:()=>ee(t)})},se=async t=>{const{data:s}=await u.custom({url:"",method:"post",meta:{operation:"createDrive",variables:{name:{value:t.name,type:"String",required:!0},description:{value:t.description,type:"String",required:!1},isPublic:{value:t.availability,type:"Boolean",required:!0}},fields:["success","message",{drive:N}]}}).catch(()=>(r.error("Error while creating drive"),{data:null})).then(i=>i);s&&(s.success?(r.success(s.message),S(!1),h([s.drive,...c]),O.resetFields()):r.error(s.message))},re=()=>{S(!0)},ie=async t=>{const{data:s}=await u.custom({url:"",method:"post",meta:{operation:"disconnectDrive",variables:{driveId:{value:t,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(r.error("Error while disconnecting drive"),{data:null})).then(i=>i);s&&(s.success?(r.success(s.message),h(c.filter(i=>parseInt(i.id.toString())!==t))):r.error(s.message))},ne=t=>{f.confirm({title:"Disconnecting Drive",icon:e.jsx(D,{}),content:"Are you sure ...",okText:"Disconnect",cancelText:"Cancel",onOk:()=>ie(t)})},ae=async t=>{const{data:s}=await u.custom({url:"",method:"post",meta:{operation:"deleteDrive",variables:{id:{value:t,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(r.error("Error while deleting drive"),{data:null})).then(i=>i);s&&(s.success?(r.success(s.message),h(c.filter(i=>parseInt(i.id.toString())!==t))):r.error(s.message))},oe=t=>{f.confirm({title:"Deleting Drive",icon:e.jsx(D,{}),content:"Are you sure ...",okText:"Delete",cancelText:"Cancel",onOk:()=>ae(t)})},j=async(t,s="",i=20)=>{const{data:o}=await u.custom({url:"",method:"get",meta:{operation:"drives",variables:{page:{value:t,type:"Int",required:!0},key:{value:s,type:"String",required:!1},pageSize:{value:i,type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:N}]}}).catch(()=>(r.error("Error while fetching drives"),{data:null}));o&&(K(o.total),G(o.pages),A(o.page),U(o.hasNext),Z(o.hasPrev),h(o.results)),H(!1)},le=async()=>{const{data:t}=await u.custom({url:"",method:"get",meta:{operation:"odriveAuthorization",variables:{},fields:["auth"]}}).catch(()=>(r.error("Error getting Odrive Authorization"),{data:null})).then(s=>s);t&&m(t.auth.create_drives)},ce=(t,s)=>{J(s),j(y,F,s)},de=t=>{V(t),T(!0)};return n.useEffect(()=>{j(1),le()},[]),e.jsxs(e.Fragment,{children:[e.jsx(P,{children:e.jsxs(p,{container:!0,children:[e.jsx(p,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4,children:e.jsx(a,{layout:"vertical",form:$,onFinish:t=>{A(1),j(1,t.key,C)},children:e.jsx(a.Item,{name:"key",children:e.jsx(_,{size:"large",placeholder:"Search Drive(s)...",prefix:e.jsx(he,{}),autoComplete:"off",allowClear:!0,disabled:x})})})}),e.jsx(p,{item:!0,xs:12,sm:6,md:8,lg:8,xl:8,sx:{display:"flex",justifyContent:"flex-end",mb:{xs:2,sm:0,md:0,lg:0,xl:0}},children:e.jsx(w,{size:"large",icon:e.jsx(xe,{}),disabled:!v&&!x,onClick:()=>re(),children:"Create Drive"})})]})}),e.jsx(pe,{spinning:x,children:e.jsx(P,{children:c.length>0?e.jsx(p,{container:!0,children:c.map(t=>e.jsx(p,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4,children:e.jsxs(I,{hoverable:t.isActive,style:{marginRight:10,marginBottom:3},children:[e.jsx(E,{style:{right:0,position:"absolute"},children:e.jsx(ge,{trigger:["click"],overlay:e.jsxs(l,{children:[e.jsx(l.Item,{icon:e.jsx(M,{}),disabled:!t.isActive,children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",onClick:()=>{t.isActive?z("/odrive/drive/"+t.id+"/"+t.code+"/files"):r("Drive is Blocked")},children:"View"})}),e.jsx(l.Item,{icon:e.jsx(je,{}),onClick:()=>de(t),children:e.jsx("a",{children:"Share"})}),e.jsx(l.Item,{icon:e.jsx(q,{}),onClick:()=>r("Under construction"),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Report"})}),t.isAuthor?e.jsx(e.Fragment,{}):e.jsx(l.Item,{icon:e.jsx(q,{}),onClick:()=>ne(parseInt(t.id.toString())),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Disconnect"})}),t.canDelete?e.jsx(l.Item,{icon:e.jsx(fe,{}),onClick:()=>oe(parseInt(t.id.toString())),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Delete"})}):e.jsx(e.Fragment,{}),e.jsx(l.Item,{icon:e.jsx(ve,{}),onClick:()=>te(parseInt(t.id.toString())),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Archive"})},"drive-archive-"+t.id)]}),overlayStyle:{zIndex:9999},children:e.jsx(w,{type:"text",className:"ant-dropdown-link",onClick:s=>s.preventDefault(),style:{zIndex:"1"},children:e.jsx(ye,{style:{color:"orange",fontSize:28,fontWeight:"bold"}})})})}),e.jsx(Ce.Ribbon,{text:t.code,placement:"start",color:"orange",children:e.jsx("a",{onClick:()=>{t.isActive?z("/odrive/drive/"+t.id+"/"+t.code+"/files"):r("Drive is Blocked")},children:e.jsxs(E,{direction:"vertical",align:"center",style:{width:"100%",justifyContent:"center"},children:[e.jsx(ze,{size:{xs:24,sm:32,md:40,lg:40,xl:40,xxl:80},icon:e.jsx(M,{}),src:t.icon}),e.jsxs("span",{style:{fontSize:20},children:[e.jsx(Se,{title:k(t.name),children:t.name.length>20?k(t.name).substring(0,15)+"...":k(t.name)}),e.jsx("span",{style:{marginLeft:3},children:e.jsxs(De,{color:"green",children:[t.totalFiles," Files"]})})]})]})})})]})},t.id))}):e.jsx(I,{children:e.jsx(be,{justify:"center",children:e.jsx(ke,{children:x?e.jsx("h1",{children:"Loading ..."}):e.jsx("h1",{children:"No drives found"})})})})})}),(Q||W)&&!x&&e.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:10},children:e.jsx(Ie,{showSizeChanger:!0,showQuickJumper:!0,defaultCurrent:y,current:y,total:R,pageSize:C,onShowSizeChange:ce,onChange:t=>j(t,F,C)})}),e.jsx(B,{title:"Creating Drive",open:X,width:"40vw",onClose:t=>S(t),children:e.jsx(Pe,{form:O,onFinish:se})}),e.jsx(B,{title:"Share Drive",open:Y,width:"40vw",onClose:t=>T(t),children:e.jsx(I,{title:"Click Copy icon to copy share link",children:e.jsx(Ee,{copyable:{icon:[e.jsx(we,{},"copy-icon"),e.jsx(Ae,{},"copied-icon")],tooltips:["click here","you clicked!!"],onCopy:()=>{r.success("Link Successfully Copied")}},style:{textAlign:"center",fontSize:20},children:L.site_url+"/odrive/drive/"+(d==null?void 0:d.id)+"/"+(d==null?void 0:d.code)+"/files"})})})]})},st=()=>(n.useEffect(()=>{document.title=L.system_name+": Drives"},[]),e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{marginTop:10,marginBottom:10},children:e.jsxs(b,{children:[e.jsx(b.Item,{children:e.jsx(Fe,{to:"/odrive",children:"Home"})}),e.jsx(b.Item,{children:"Drives"})]})}),e.jsx(Me,{})]}));export{st as DrivesPage};
