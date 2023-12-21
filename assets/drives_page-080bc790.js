import{j as e,F as a,I as M,aF as le,B as I,r as n,q as ce,u as E,G as g,S as de,ay as ue,s as he,C as S,v as O,Z as me,$ as l,ao as P,K as i,aA as xe,a0 as T,a9 as ge,aB as pe,a1 as je,an as fe,A as ve,x as ye,y as Ce,z as De,D as Se,H as B,aC as be,aD as ke,aE as Ie,at as Ae,aq as f,ar as b,J as u,as as we}from"./index-9a806659.js";import{R as Fe}from"./index-fb81046e.js";import{B as k}from"./Breadcrumb-db198361.js";const ze=p=>{const v=[{label:"Public",value:!0},{label:"Private",value:!1}];return e.jsx(e.Fragment,{children:e.jsxs(a,{layout:"vertical",form:p.form,onFinish:h=>{p.onFinish(h)},requiredMark:!1,initialValues:{remember:!1,email:"",password:""},children:[e.jsx(a.Item,{name:"name",label:"Name",rules:[{required:!0,type:"string"}],children:e.jsx(M,{size:"large",placeholder:"Enter Name ..."})}),e.jsx(a.Item,{name:"availability",label:"Availability",initialValue:!0,children:e.jsx(Fe.Group,{options:v,onChange:()=>{},value:!0})}),e.jsx(a.Item,{name:"description",label:"Description",style:{marginBottom:"12px"},rules:[{required:!1,type:"string",message:"Please input description"}],children:e.jsx(le,{onChange:h=>{p.form.setFieldsValue({description:h})}})}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(I,{type:"primary",size:"large",htmlType:"submit",children:"Save"})})]})})},{Paragraph:qe}=Ae,Ee=p=>{const[v,h]=n.useState(!1),[c,m]=n.useState([]),[d,N]=n.useState(),[x,_]=n.useState(!0),[R,V]=n.useState(0),[y,A]=n.useState(1),[Pe,L]=n.useState(0),[C,H]=n.useState(20),[w,Te]=n.useState(""),[K,G]=n.useState(!0),[J,Q]=n.useState(!1),[U]=a.useForm(),[W,D]=n.useState(!1),[Z,F]=n.useState(!1),{push:z}=ce(),[q]=a.useForm(),$=async t=>{const{data:r}=await u.custom({url:"",method:"post",meta:{operation:"addDriveArchive",variables:{id:{value:t,type:"Int",required:!0}},fields:["success","message"]}}).catch(s=>(i.error("Error while adding to archive"),{data:null})).then(s=>s);r&&(r.success?(i.success(r.message),m(c.filter(s=>parseInt(s.id.toString())!==t))):i.error(r.message)),f.destroyAll()},X=t=>{f.confirm({title:"Confirm",icon:e.jsx(b,{}),content:"Adding Drive To Archive ....",okText:"Add",cancelText:"Cancel",onOk:()=>$(t)})},Y=async t=>{const{data:r}=await u.custom({url:"",method:"post",meta:{operation:"createDrive",variables:{name:{value:t.name,type:"String",required:!0},description:{value:t.description,type:"String",required:!1},isPublic:{value:t.availability,type:"Boolean",required:!0}},fields:["success","message",{drive:["id","name","code","created","canEdit","canDelete","updated","isActive","isAuthor"]}]}}).catch(s=>(i.error("Error while creating drive"),{data:null})).then(s=>s);r&&(r.success?(i.success(r.message),D(!1),m([r.drive,...c]),q.resetFields()):i.error(r.message))},ee=()=>{D(!0)},te=async t=>{const{data:r}=await u.custom({url:"",method:"post",meta:{operation:"disconnectDrive",variables:{driveId:{value:t,type:"Int",required:!0}},fields:["success","message"]}}).catch(s=>(i.error("Error while disconnecting drive"),{data:null})).then(s=>s);r&&(r.success?(i.success(r.message),m(c.filter(s=>parseInt(s.id.toString())!==t))):i.error(r.message))},re=t=>{f.confirm({title:"Disconnecting Drive",icon:e.jsx(b,{}),content:"Are you sure ...",okText:"Disconnect",cancelText:"Cancel",onOk:()=>te(t)})},se=async t=>{const{data:r}=await u.custom({url:"",method:"post",meta:{operation:"deleteDrive",variables:{id:{value:t,type:"Int",required:!0}},fields:["success","message"]}}).catch(s=>(i.error("Error while deleting drive"),{data:null})).then(s=>s);r&&(r.success?(i.success(r.message),m(c.filter(s=>parseInt(s.id.toString())!==t))):i.error(r.message))},ie=t=>{f.confirm({title:"Deleting Drive",icon:e.jsx(b,{}),content:"Are you sure ...",okText:"Delete",cancelText:"Cancel",onOk:()=>se(t)})},j=async(t,r="",s=20)=>{const{data:o}=await u.custom({url:"",method:"get",meta:{operation:"drives",variables:{page:{value:t,type:"Int",required:!0},key:{value:r,type:"String",required:!1},pageSize:{value:s,type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","code","created","canEdit","canDelete","updated","isActive","isAuthor"]}]}}).catch(Be=>(i.error("Error while fetching drives"),{data:null}));o&&(V(o.total),L(o.pages),A(o.page),G(o.hasNext),Q(o.hasPrev),m(o.results)),_(!1)},ne=async()=>{const{data:t}=await u.custom({url:"",method:"get",meta:{operation:"odriveAuthorization",variables:{},fields:["auth"]}}).catch(r=>(i.error("Error getting Odrive Authorization"),{data:null})).then(r=>r);t&&h(t.auth.create_drives)},ae=(t,r)=>{H(r),j(y,w,r)},oe=t=>{N(t),F(!0)};return n.useEffect(()=>{j(1),ne()},[]),e.jsxs(e.Fragment,{children:[e.jsx(E,{children:e.jsxs(g,{container:!0,children:[e.jsx(g,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4,children:e.jsx(a,{layout:"vertical",form:U,onFinish:t=>{A(1),j(1,t.key,C)},children:e.jsx(a.Item,{name:"key",children:e.jsx(M,{size:"large",placeholder:"Search Drive(s)...",prefix:e.jsx(de,{}),autoComplete:"off",allowClear:!0,disabled:x})})})}),e.jsx(g,{item:!0,xs:12,sm:6,md:8,lg:8,xl:8,sx:{display:"flex",justifyContent:"flex-end",mb:{xs:2,sm:0,md:0,lg:0,xl:0}},children:e.jsx(I,{size:"large",icon:e.jsx(ue,{}),disabled:!v&&!x,onClick:()=>ee(),children:"Create Drive"})})]})}),e.jsx(he,{spinning:x,children:e.jsx(E,{children:c.length>0?e.jsx(g,{container:!0,children:c.map(t=>e.jsx(g,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4,children:e.jsxs(S,{hoverable:t.isActive,style:{marginRight:10,marginBottom:3},children:[e.jsx(O,{style:{right:0,position:"absolute"},children:e.jsx(me,{trigger:["click"],overlay:e.jsxs(l,{children:[e.jsx(l.Item,{icon:e.jsx(P,{}),disabled:!t.isActive,children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",onClick:()=>{t.isActive?z("/odrive/drive/"+t.id+"/"+t.code+"/files"):i("Drive is Blocked")},children:"View"})}),e.jsx(l.Item,{icon:e.jsx(xe,{}),onClick:()=>oe(t),children:e.jsx("a",{children:"Share"})}),e.jsx(l.Item,{icon:e.jsx(T,{}),onClick:()=>i("Under construction"),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Report"})}),t.isAuthor?e.jsx(e.Fragment,{}):e.jsx(l.Item,{icon:e.jsx(T,{}),onClick:()=>re(parseInt(t.id.toString())),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Disconnect"})}),t.canDelete?e.jsx(l.Item,{icon:e.jsx(ge,{}),onClick:()=>ie(parseInt(t.id.toString())),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Delete"})}):e.jsx(e.Fragment,{}),e.jsx(l.Item,{icon:e.jsx(pe,{}),onClick:()=>X(parseInt(t.id.toString())),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Archive"})},"drive-archive-"+t.id)]}),overlayStyle:{zIndex:9999},children:e.jsx(I,{type:"text",className:"ant-dropdown-link",onClick:r=>r.preventDefault(),style:{zIndex:"1"},children:e.jsx(je,{style:{color:"orange",fontSize:28,fontWeight:"bold"}})})})}),e.jsx(fe.Ribbon,{text:t.code,placement:"start",color:"orange",children:e.jsx("a",{onClick:()=>{t.isActive?z("/odrive/drive/"+t.id+"/"+t.code+"/files"):i("Drive is Blocked")},children:e.jsxs(O,{direction:"vertical",align:"center",style:{width:"100%",justifyContent:"center"},children:[e.jsx(ve,{size:{xs:24,sm:32,md:40,lg:40,xl:40,xxl:80},icon:e.jsx(P,{}),src:t.icon}),e.jsx("span",{style:{fontSize:20},children:e.jsx(ye,{title:t.name,children:t.name.length>20?t.name.substring(0,15)+"...":t.name})})]})})})]})},t.id))}):e.jsx(S,{children:e.jsx(Ce,{justify:"center",children:e.jsx(De,{children:x?e.jsx("h1",{children:"Loading ..."}):e.jsx("h1",{children:"No drives found"})})})})})}),(K||J)&&!x&&e.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:10},children:e.jsx(Se,{showSizeChanger:!0,showQuickJumper:!0,defaultCurrent:y,current:y,total:R,pageSize:C,onShowSizeChange:ae,onChange:t=>j(t,w,C)})}),e.jsx(B,{title:"Creating Drive",open:W,width:"40vw",onClose:t=>D(t),children:e.jsx(ze,{form:q,onFinish:Y})}),e.jsx(B,{title:"Share Drive",open:Z,width:"40vw",onClose:t=>F(t),children:e.jsx(S,{title:"Click Copy icon to copy share link",children:e.jsx(qe,{copyable:{icon:[e.jsx(be,{},"copy-icon"),e.jsx(ke,{},"copied-icon")],tooltips:["click here","you clicked!!"],onCopy:()=>{i.success("Link Successfully Copied")}},style:{textAlign:"center",fontSize:20},children:Ie.site_url+"/odrive/drive/"+(d==null?void 0:d.id)+"/"+(d==null?void 0:d.code)+"/files"})})})]})},Oe=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{marginTop:10,marginBottom:10},children:e.jsxs(k,{children:[e.jsx(k.Item,{children:e.jsx(we,{to:"/odrive",children:"Home"})}),e.jsx(k.Item,{children:"Drives"})]})}),e.jsx(Ee,{})]}),Re=()=>e.jsx(Oe,{});export{Re as DrivesPage};
