import{r as c,c as j,j as i,c2 as I,d7 as M,d8 as D,_ as n,ca as P,d2 as E,g as F}from"./index-351477c3.js";import{a as V,F as q}from"./file_item_component-56bb906d.js";import{D as L}from"./index-1cc45ed0.js";import{G as T}from"./index-ba2e3766.js";import{L as _}from"./index-a79ac33a.js";import{C as A}from"./index-e245930b.js";import{T as O}from"./index-fe5f5443.js";import{M as m}from"./index-8b72edfc.js";const{Paragraph:z}=O,W=o=>{const[d,l]=c.useState([]);j();const[f,u]=c.useState(!1),[s,h]=c.useState(),[k,g]=c.useState(!1),p=!T.useBreakpoint().lg,w=e=>{h(e),g(!0)},x=e=>{const a=o.data.map(t=>(t.id===e.id&&(t.imageVisible=!0),t));l(a)},y=e=>{const a=o.data.map(t=>(t.id===e.id&&(t.imageVisible=!1),t));l(a)},C=e=>{h(e),u(!0)},b=async(e,a)=>{const{data:t}=await F.custom({url:"",method:"post",meta:{operation:"makeFilePublicPrivate",variables:{id:{value:e,type:"Int",required:!0},public:{value:a,type:"Boolean",required:!0}},fields:["success","message"]}}).catch(r=>(n.error("Error changing file privacy"),{data:null})).then(r=>r);t&&(t.success?(n.success(t.message),l(d.map(r=>(r.id===e&&(r.isPublic=a),r)))):t.message),m.destroyAll()},S=(e,a)=>{m.confirm({title:"Confirm",icon:i.jsx(E,{}),content:a?"Making File Public ...":"Making File  Private  ....",okText:a?"Make Public":"Make Private",cancelText:"Cancel",onOk:()=>b(e,a)})},v=async e=>{const{data:a}=await F.custom({url:"",method:"post",meta:{operation:"deleteFile",variables:{id:{value:e,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(n.error("Error deleting file"),{data:null})).then(t=>t);a&&(a.success?(n.success(a.message),l(d.filter(t=>t.id.toString()!==e.toString()))):n.error(a.message)),m.destroyAll()};return c.useEffect(()=>{l(o.data)},[o.data]),i.jsxs(i.Fragment,{children:[i.jsx(_,{loading:o.loading,itemLayout:"horizontal",dataSource:d,renderItem:e=>i.jsx(V,{item:e,showDrive:o.showDrive,min:o.min??!1,handleChangePrivate:S,handleDelete:v,handleMakeImageNotVisible:y,handleMakeImageVisible:x,handleShowFileInfoDrawer:C,handleShareFile:w})}),i.jsx(L,{title:"File Informations",anchor:"right",width:p?"100vw":"35vw",onClose:e=>u(e),open:f,children:i.jsx(q,{id:s==null?void 0:s.id})}),i.jsx(I,{title:"Share File",open:k,onClose:e=>g(e),width:p?"100vw":"50vw",children:i.jsx(A,{title:"Click Copy icon to copy share link",children:i.jsx(z,{copyable:{icon:[i.jsx(M,{},"copy-icon"),i.jsx(D,{},"copied-icon")],tooltips:["click here","you clicked!!"],onCopy:()=>{n.success("Link Successfully Copied")}},style:{textAlign:"center",fontSize:20},children:P.site_url+"/odrive/file/"+(s==null?void 0:s.id)+"/"+encodeURIComponent((s==null?void 0:s.slug)??"")+"/share"})})})]})};export{W as F};
