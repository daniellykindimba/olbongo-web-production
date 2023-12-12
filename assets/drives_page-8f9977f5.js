import{j as e,F as a,I as F,aE as de,B as C,r as n,q as ue,bd as he,a5 as xe,s as k,C as u,aw as P,S as N,u as I,x as _,X as me,Y as o,an as R,H as i,az as pe,Z as V,a7 as ge,aA as je,$ as fe,am as ve,A as ye,y as Ce,z as De,D as L,aB as Se,aC as be,aD as ke,ar as Ie,ap as y,aq as A,G as h,bt as Ae}from"./index-70789454.js";import{R as we}from"./index-a8735f59.js";import{B as w}from"./Breadcrumb-58b3bb92.js";const Fe=g=>{const j=[{label:"Public",value:!0},{label:"Private",value:!1}];return e.jsx(e.Fragment,{children:e.jsxs(a,{layout:"vertical",form:g.form,onFinish:x=>{g.onFinish(x)},requiredMark:!1,initialValues:{remember:!1,email:"",password:""},children:[e.jsx(a.Item,{name:"name",label:"Name",rules:[{required:!0,type:"string"}],children:e.jsx(F,{size:"large",placeholder:"Enter Name ..."})}),e.jsx(a.Item,{name:"availability",label:"Availability",initialValue:!0,children:e.jsx(we.Group,{options:j,onChange:()=>{},value:!0})}),e.jsx(a.Item,{name:"description",label:"Description",style:{marginBottom:"12px"},rules:[{required:!1,type:"string",message:"Please input description"}],children:e.jsx(de,{onChange:x=>{g.form.setFieldsValue({description:x})}})}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(C,{type:"primary",size:"large",htmlType:"submit",children:"Save"})})]})})},{Paragraph:ze}=Ie,qe=g=>{const[j,x]=n.useState(!1),[l,m]=n.useState([]),[c,G]=n.useState(),[z,H]=n.useState(!0),[f,D]=n.useState(1),[Oe,K]=n.useState(0),[J,Q]=n.useState(0),[v,U]=n.useState(20),[q,Te]=n.useState(""),[W,X]=n.useState(!0),[E]=a.useForm(),[Y,S]=n.useState(!1),[Z,O]=n.useState(!1),{push:T}=ue(),[B]=a.useForm(),b=!he.useBreakpoint().lg,$=()=>b?24:4,ee=async t=>{const{data:r}=await h.custom({url:"",method:"post",meta:{operation:"addDriveArchive",variables:{id:{value:t,type:"Int",required:!0}},fields:["success","message"]}}).catch(s=>(i.error("Error while adding to archive"),{data:null})).then(s=>s);r&&(r.success?(i.success(r.message),m(l.filter(s=>parseInt(s.id.toString())!==t))):i.error(r.message)),y.destroyAll()},te=t=>{y.confirm({title:"Confirm",icon:e.jsx(A,{}),content:"Adding Drive To Archive ....",okText:"Add",cancelText:"Cancel",onOk:()=>ee(t)})},re=async t=>{const{data:r}=await h.custom({url:"",method:"post",meta:{operation:"createDrive",variables:{name:{value:t.name,type:"String",required:!0},description:{value:t.description,type:"String",required:!1},isPublic:{value:t.availability,type:"Boolean",required:!0}},fields:["success","message",{drive:["id","name","code","created","canEdit","canDelete","updated","isActive","isAuthor"]}]}}).catch(s=>(i.error("Error while creating drive"),{data:null})).then(s=>s);r&&(r.success?(i.success(r.message),S(!1),m([r.drive,...l]),B.resetFields()):i.error(r.message))},M=()=>{S(!0)},se=async t=>{const{data:r}=await h.custom({url:"",method:"post",meta:{operation:"disconnectDrive",variables:{driveId:{value:t,type:"Int",required:!0}},fields:["success","message"]}}).catch(s=>(i.error("Error while disconnecting drive"),{data:null})).then(s=>s);r&&(r.success?(i.success(r.message),m(l.filter(s=>parseInt(s.id.toString())!==t))):i.error(r.message))},ie=t=>{y.confirm({title:"Disconnecting Drive",icon:e.jsx(A,{}),content:"Are you sure ...",okText:"Disconnect",cancelText:"Cancel",onOk:()=>se(t)})},ne=async t=>{const{data:r}=await h.custom({url:"",method:"post",meta:{operation:"deleteDrive",variables:{id:{value:t,type:"Int",required:!0}},fields:["success","message"]}}).catch(s=>(i.error("Error while deleting drive"),{data:null})).then(s=>s);r&&(r.success?(i.success(r.message),m(l.filter(s=>parseInt(s.id.toString())!==t))):i.error(r.message))},ae=t=>{y.confirm({title:"Deleting Drive",icon:e.jsx(A,{}),content:"Are you sure ...",okText:"Delete",cancelText:"Cancel",onOk:()=>ne(t)})},p=async(t,r="",s=20)=>{const{data:d}=await h.custom({url:"",method:"get",meta:{operation:"drives",variables:{page:{value:t,type:"Int",required:!0},key:{value:r,type:"String",required:!1},pageSize:{value:s,type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","code","created","canEdit","canDelete","updated","isActive","isAuthor"]}]}}).catch(Me=>(i.error("Error while fetching drives"),{data:null}));d&&(Q(d.total),K(d.pages),D(d.page),X(d.hasNext),m(d.results)),H(!1)},oe=async()=>{const{data:t}=await h.custom({url:"",method:"get",meta:{operation:"odriveAuthorization",variables:{},fields:["auth"]}}).catch(r=>(i.error("Error getting Odrive Authorization"),{data:null})).then(r=>r);t&&x(t.auth.create_drives)},le=(t,r)=>{U(r),p(f,q,r)},ce=t=>{G(t),O(!0)};return n.useEffect(()=>{p(f),oe()},[]),z?e.jsx(e.Fragment,{children:e.jsx(xe,{loading:z,active:!0})}):e.jsxs(e.Fragment,{children:[e.jsxs(k,{children:[b&&e.jsxs(e.Fragment,{children:[e.jsx(u,{span:24,style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(C,{size:"large",icon:e.jsx(P,{}),disabled:!j,onClick:()=>M(),children:"Create Drive"})}),e.jsx(u,{span:24,children:e.jsx(a,{layout:"vertical",form:E,onFinish:t=>{D(0),p(0,t.key,v)},children:e.jsx(a.Item,{name:"key",children:e.jsx(F,{size:"large",placeholder:"Search Drive(s)...",prefix:e.jsx(N,{}),autoComplete:"off",allowClear:!0})})})})]}),!b&&e.jsxs(e.Fragment,{children:[e.jsx(u,{span:20,children:e.jsx(a,{layout:"vertical",form:E,onFinish:t=>{D(0),p(0,t.key,v)},children:e.jsx(a.Item,{name:"key",children:e.jsx(F,{size:"large",placeholder:"Search Drive(s)...",prefix:e.jsx(N,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(u,{span:4,style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(C,{size:"large",icon:e.jsx(P,{}),disabled:!j,onClick:()=>M(),children:"Create Drive"})})]})]}),e.jsx("div",{children:l.length>0?e.jsx(k,{align:"top",children:l.map(t=>e.jsx(u,{span:$(),children:e.jsxs(I,{hoverable:t.isActive,style:{marginRight:10,marginBottom:3},children:[e.jsx(_,{style:{right:0,position:"absolute"},children:e.jsx(me,{trigger:["click"],overlay:e.jsxs(o,{children:[e.jsx(o.Item,{icon:e.jsx(R,{}),disabled:!t.isActive,children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",onClick:()=>{t.isActive?T("/odrive/drive/"+t.id+"/"+t.code+"/files"):i("Drive is Blocked")},children:"View"})}),e.jsx(o.Item,{icon:e.jsx(pe,{}),onClick:()=>ce(t),children:e.jsx("a",{children:"Share"})}),e.jsx(o.Item,{icon:e.jsx(V,{}),onClick:()=>i("Under construction"),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Report"})}),t.isAuthor?e.jsx(e.Fragment,{}):e.jsx(o.Item,{icon:e.jsx(V,{}),onClick:()=>ie(parseInt(t.id.toString())),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Disconnect"})}),t.canDelete?e.jsx(o.Item,{icon:e.jsx(ge,{}),onClick:()=>ae(parseInt(t.id.toString())),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Delete"})}):e.jsx(e.Fragment,{}),e.jsx(o.Item,{icon:e.jsx(je,{}),onClick:()=>te(parseInt(t.id.toString())),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Archive"})},"drive-archive-"+t.id)]}),overlayStyle:{zIndex:9999},children:e.jsx(C,{type:"text",className:"ant-dropdown-link",onClick:r=>r.preventDefault(),style:{zIndex:"1"},children:e.jsx(fe,{style:{color:"orange",fontSize:28,fontWeight:"bold"}})})})}),e.jsx(ve.Ribbon,{text:t.code,placement:"start",color:"orange",children:e.jsx("a",{onClick:()=>{t.isActive?T("/odrive/drive/"+t.id+"/"+t.code+"/files"):i("Drive is Blocked")},children:e.jsxs(_,{direction:"vertical",align:"center",style:{width:"100%",justifyContent:"center"},children:[e.jsx(ye,{size:{xs:24,sm:32,md:40,lg:40,xl:40,xxl:80},icon:e.jsx(R,{}),src:t.icon}),e.jsx("span",{style:{fontSize:20},children:e.jsx(Ce,{title:t.name,children:t.name.length>20?t.name.substring(0,15)+"...":t.name})})]})})})]})}))}):e.jsx(I,{children:e.jsx(k,{justify:"center",children:e.jsx(u,{children:e.jsx("h1",{children:"No drives found"})})})})}),W&&e.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:10},children:e.jsx(De,{showSizeChanger:!0,showQuickJumper:!0,defaultCurrent:f,current:f,total:J,pageSize:v,onShowSizeChange:le,onChange:t=>p(t,q,v)})}),e.jsx(L,{title:"Creating Drive",open:Y,width:"40vw",onClose:t=>S(t),children:e.jsx(Fe,{form:B,onFinish:re})}),e.jsx(L,{title:"Share Drive",open:Z,width:"40vw",onClose:t=>O(t),children:e.jsx(I,{title:"Click Copy icon to copy share link",children:e.jsx(ze,{copyable:{icon:[e.jsx(Se,{},"copy-icon"),e.jsx(be,{},"copied-icon")],tooltips:["click here","you clicked!!"],onCopy:()=>{i.success("Link Successfully Copied")}},style:{textAlign:"center",fontSize:20},children:ke.site_url+"/odrive/drive/"+(c==null?void 0:c.id)+"/"+(c==null?void 0:c.code)+"/files"})})})]})},Ee=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{marginTop:10,marginBottom:10},children:e.jsxs(w,{children:[e.jsx(w.Item,{children:e.jsx(Ae,{to:"/odrive",children:"Home"})}),e.jsx(w.Item,{children:"Drives"})]})}),e.jsx(qe,{})]}),Re=()=>e.jsx(Ee,{});export{Re as DrivesPage};
