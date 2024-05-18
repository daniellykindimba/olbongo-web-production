import{j as e,aT as a,a1 as L,aV as ue,av as w,r as n,c as he,B as O,G as x,a8 as pe,aX as E,aR as xe,aU as l,_ as s,ae as ge,af as fe,aZ as je,aW as ve,aP as ye,P as Ce,cl as q,cn as R,g as m,cL as Se,aN as j,cz as B}from"./index-3f04361d.js";import{C as De}from"./ckeditor-03e5dfe4.js";import{d as M}from"./data_objects-54e2a4fd.js";import{r as b}from"./remove_html_tags-be9c976e.js";import{C as k}from"./index-2ac5d61b.js";import{A as be}from"./index-094fff42.js";import{T as ke}from"./index-9f7d3fdf.js";import{M as v}from"./index-0f874ea4.js";import{S as Ie}from"./SearchOutlined-ca526dda.js";import{P as we}from"./PlusCircleOutlined-9ea240a4.js";import{F as _}from"./FolderOpenOutlined-6fe92a4c.js";import{S as Ae,C as Fe}from"./ShareAltOutlined-81207fcc.js";import{I as N}from"./InfoCircleOutlined-95ab394c.js";import{D as Te}from"./DeleteOutlined-dd5d4858.js";import{M as Pe}from"./MoreOutlined-d3af1bd1.js";import{a as ze,S as Oe}from"./SmileOutlined-ba261cab.js";import{E as I}from"./ExclamationCircleOutlined-dc1ce38f.js";import"./ckeditor-21ed7852.js";import"./Skeleton-4286ac29.js";import"./DotChartOutlined-f39c986e.js";import"./index-983365c0.js";import"./index-926c2b48.js";import"./EditOutlined-401a1613.js";import"./transButton-953f01b7.js";import"./index-464f1c81.js";import"./InfoCircleFilled-cf97344e.js";import"./InfoCircleFilled-baaa675e.js";import"./ActionButton-1fdd8a6f.js";import"./DialogWrap-baa689d5.js";import"./index-0a6ac51b.js";import"./fade-4604162d.js";import"./DeleteOutlined-25685737.js";const Ee=g=>{const y=[{label:"Public",value:!0},{label:"Private",value:!1}];return e.jsx(e.Fragment,{children:e.jsxs(a,{layout:"vertical",form:g.form,onFinish:u=>{g.onFinish(u)},requiredMark:!1,initialValues:{remember:!1,email:"",password:""},children:[e.jsx(a.Item,{name:"name",label:"Name",rules:[{required:!0,type:"string"}],children:e.jsx(L,{size:"large",placeholder:"Enter Name ..."})}),e.jsx(a.Item,{name:"availability",label:"Availability",initialValue:!0,children:e.jsx(ue.Group,{options:y,onChange:()=>{},value:!0})}),e.jsx(a.Item,{name:"description",label:"Description",style:{marginBottom:"12px"},rules:[{required:!1,type:"string",message:"Please input description"}],children:e.jsx(De,{onChange:u=>{g.form.setFieldsValue({description:u})}})}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(w,{type:"primary",size:"large",htmlType:"submit",children:"Save"})})]})})},{Paragraph:qe}=ke,Be=g=>{const[y,u]=n.useState(!1),[c,h]=n.useState([]),[d,V]=n.useState(),[p,H]=n.useState(!0),[G,K]=n.useState(0),[C,A]=n.useState(1),[Me,W]=n.useState(0),[S,U]=n.useState(20),[F,_e]=n.useState(""),[J,Q]=n.useState(!0),[X,Z]=n.useState(!1),[Y]=a.useForm(),[$,D]=n.useState(!1),[ee,T]=n.useState(!1),{push:P}=he(),[z]=a.useForm(),te=async t=>{const{data:r}=await m.custom({url:"",method:"post",meta:{operation:"addDriveArchive",variables:{id:{value:t,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(s.error("Error while adding to archive"),{data:null})).then(i=>i);r&&(r.success?(s.success(r.message),h(c.filter(i=>parseInt(i.id.toString())!==t))):s.error(r.message)),v.destroyAll()},re=t=>{v.confirm({title:"Confirm",icon:e.jsx(I,{}),content:"Adding Drive To Archive ....",okText:"Add",cancelText:"Cancel",onOk:()=>te(t)})},se=async t=>{const{data:r}=await m.custom({url:"",method:"post",meta:{operation:"createDrive",variables:{name:{value:t.name,type:"String",required:!0},description:{value:t.description,type:"String",required:!1},isPublic:{value:t.availability,type:"Boolean",required:!0}},fields:["success","message",{drive:M}]}}).catch(()=>(s.error("Error while creating drive"),{data:null})).then(i=>i);r&&(r.success?(s.success(r.message),D(!1),h([r.drive,...c]),z.resetFields()):s.error(r.message))},ie=()=>{D(!0)},ne=async t=>{const{data:r}=await m.custom({url:"",method:"post",meta:{operation:"disconnectDrive",variables:{driveId:{value:t,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(s.error("Error while disconnecting drive"),{data:null})).then(i=>i);r&&(r.success?(s.success(r.message),h(c.filter(i=>parseInt(i.id.toString())!==t))):s.error(r.message))},ae=t=>{v.confirm({title:"Disconnecting Drive",icon:e.jsx(I,{}),content:"Are you sure ...",okText:"Disconnect",cancelText:"Cancel",onOk:()=>ne(t)})},oe=async t=>{const{data:r}=await m.custom({url:"",method:"post",meta:{operation:"deleteDrive",variables:{id:{value:t,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(s.error("Error while deleting drive"),{data:null})).then(i=>i);r&&(r.success?(s.success(r.message),h(c.filter(i=>parseInt(i.id.toString())!==t))):s.error(r.message))},le=t=>{v.confirm({title:"Deleting Drive",icon:e.jsx(I,{}),content:"Are you sure ...",okText:"Delete",cancelText:"Cancel",onOk:()=>oe(t)})},f=async(t,r="",i=20)=>{const{data:o}=await m.custom({url:"",method:"get",meta:{operation:"drives",variables:{page:{value:t,type:"Int",required:!0},key:{value:r,type:"String",required:!1},pageSize:{value:i,type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:M}]}}).catch(()=>(s.error("Error while fetching drives"),{data:null}));o&&(K(o.total),W(o.pages),A(o.page),Q(o.hasNext),Z(o.hasPrev),h(o.results)),H(!1)},ce=async()=>{const{data:t}=await m.custom({url:"",method:"get",meta:{operation:"odriveAuthorization",variables:{},fields:["auth"]}}).catch(()=>(s.error("Error getting Odrive Authorization"),{data:null})).then(r=>r);t&&u(t.auth.create_drives)},de=(t,r)=>{U(r),f(C,F,r)},me=t=>{V(t),T(!0)};return n.useEffect(()=>{f(1),ce()},[]),e.jsxs(e.Fragment,{children:[e.jsx(O,{children:e.jsxs(x,{container:!0,children:[e.jsx(x,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4,children:e.jsx(a,{layout:"vertical",form:Y,onFinish:t=>{A(1),f(1,t.key,S)},children:e.jsx(a.Item,{name:"key",children:e.jsx(L,{size:"large",placeholder:"Search Drive(s)...",prefix:e.jsx(Ie,{}),autoComplete:"off",allowClear:!0,disabled:p})})})}),e.jsx(x,{item:!0,xs:12,sm:6,md:8,lg:8,xl:8,sx:{display:"flex",justifyContent:"flex-end",mb:{xs:2,sm:0,md:0,lg:0,xl:0}},children:e.jsx(w,{size:"large",icon:e.jsx(we,{}),disabled:!y&&!p,onClick:()=>ie(),children:"Create Drive"})})]})}),e.jsx(pe,{spinning:p,children:e.jsx(O,{children:c.length>0?e.jsx(x,{container:!0,children:c.map(t=>e.jsx(x,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4,children:e.jsxs(k,{hoverable:t.isActive,style:{marginRight:10,marginBottom:3},children:[e.jsx(E,{style:{right:0,position:"absolute"},children:e.jsx(xe,{trigger:["click"],overlay:e.jsxs(l,{children:[e.jsx(l.Item,{icon:e.jsx(_,{}),disabled:!t.isActive,children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",onClick:()=>{t.isActive?P("/odrive/drive/"+t.id+"/"+t.code+"/files"):s("Drive is Blocked")},children:"View"})}),e.jsx(l.Item,{icon:e.jsx(Ae,{}),onClick:()=>me(t),children:e.jsx("a",{children:"Share"})}),e.jsx(l.Item,{icon:e.jsx(N,{}),onClick:()=>s("Under construction"),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Report"})}),t.isAuthor?e.jsx(e.Fragment,{}):e.jsx(l.Item,{icon:e.jsx(N,{}),onClick:()=>ae(parseInt(t.id.toString())),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Disconnect"})}),t.canDelete?e.jsx(l.Item,{icon:e.jsx(Te,{}),onClick:()=>le(parseInt(t.id.toString())),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Delete"})}):e.jsx(e.Fragment,{}),e.jsx(l.Item,{icon:e.jsx(Fe,{}),onClick:()=>re(parseInt(t.id.toString())),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Archive"})},"drive-archive-"+t.id)]}),overlayStyle:{zIndex:9999},children:e.jsx(w,{type:"text",className:"ant-dropdown-link",onClick:r=>r.preventDefault(),style:{zIndex:"1"},children:e.jsx(Pe,{style:{color:"orange",fontSize:28,fontWeight:"bold"}})})})}),e.jsx(ge.Ribbon,{text:t.code,placement:"start",color:"orange",children:e.jsx("a",{onClick:()=>{t.isActive?P("/odrive/drive/"+t.id+"/"+t.code+"/files"):s("Drive is Blocked")},children:e.jsxs(E,{direction:"vertical",align:"center",style:{width:"100%",justifyContent:"center"},children:[e.jsx(be,{size:{xs:24,sm:32,md:40,lg:40,xl:40,xxl:80},icon:e.jsx(_,{}),src:t.icon}),e.jsxs("span",{style:{fontSize:20},children:[e.jsx(fe,{title:b(t.name),children:t.name.length>20?b(t.name).substring(0,15)+"...":b(t.name)}),e.jsx("span",{style:{marginLeft:3},children:e.jsxs(je,{color:"green",children:[t.totalFiles," Files"]})})]})]})})})]})},t.id))}):e.jsx(k,{children:e.jsx(ve,{justify:"center",children:e.jsx(ye,{children:p?e.jsx("h1",{children:"Loading ..."}):e.jsx("h1",{children:"No drives found"})})})})})}),(J||X)&&!p&&e.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:10},children:e.jsx(Ce,{showSizeChanger:!0,showQuickJumper:!0,defaultCurrent:C,current:C,total:G,pageSize:S,onShowSizeChange:de,onChange:t=>f(t,F,S)})}),e.jsx(q,{title:"Creating Drive",open:$,width:"40vw",onClose:t=>D(t),children:e.jsx(Ee,{form:z,onFinish:se})}),e.jsx(q,{title:"Share Drive",open:ee,width:"40vw",onClose:t=>T(t),children:e.jsx(k,{title:"Click Copy icon to copy share link",children:e.jsx(qe,{copyable:{icon:[e.jsx(ze,{},"copy-icon"),e.jsx(Oe,{},"copied-icon")],tooltips:["click here","you clicked!!"],onCopy:()=>{s.success("Link Successfully Copied")}},style:{textAlign:"center",fontSize:20},children:R.site_url+"/odrive/drive/"+(d==null?void 0:d.id)+"/"+(d==null?void 0:d.code)+"/files"})})})]})},ft=()=>(n.useEffect(()=>{document.title=R.system_name+": Drives"},[]),e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{marginTop:10,marginBottom:10},children:e.jsx(Se,{children:e.jsxs(j,{children:[e.jsx(j.Item,{children:e.jsx(B,{to:"/",children:"Home"})}),e.jsx(j.Item,{children:e.jsx(B,{to:"/odrive",children:"Odrive"})}),e.jsx(j.Item,{children:"Drives"})]})})}),e.jsx(Be,{})]}));export{ft as DrivesPage};
