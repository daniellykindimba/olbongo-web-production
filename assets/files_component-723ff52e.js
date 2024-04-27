import{r as c,b$ as j,aY as i,bY as I,d4 as M,d5 as D,b_ as n,c7 as P,c$ as E,bZ as F}from"./index-ac5228cb.js";import{a as V,F as q}from"./file_item_component-b14512fc.js";import{D as L}from"./index-2c5cec7a.js";import{G as T}from"./index-13b6e876.js";import{L as _}from"./index-cfbb0375.js";import{C as A}from"./index-384ee336.js";import{T as O}from"./index-35b38512.js";import{M as m}from"./index-c1373156.js";const{Paragraph:z}=O,J=o=>{const[d,l]=c.useState([]);j();const[f,u]=c.useState(!1),[s,h]=c.useState(),[b,p]=c.useState(!1),g=!T.useBreakpoint().lg,k=e=>{h(e),p(!0)},w=e=>{const a=o.data.map(t=>(t.id===e.id&&(t.imageVisible=!0),t));l(a)},x=e=>{const a=o.data.map(t=>(t.id===e.id&&(t.imageVisible=!1),t));l(a)},y=e=>{h(e),u(!0)},C=async(e,a)=>{const{data:t}=await F.custom({url:"",method:"post",meta:{operation:"makeFilePublicPrivate",variables:{id:{value:e,type:"Int",required:!0},public:{value:a,type:"Boolean",required:!0}},fields:["success","message"]}}).catch(r=>(n.error("Error changing file privacy"),{data:null})).then(r=>r);t&&(t.success?(n.success(t.message),l(d.map(r=>(r.id===e&&(r.isPublic=a),r)))):t.message),m.destroyAll()},S=(e,a)=>{m.confirm({title:"Confirm",icon:i.jsx(E,{}),content:a?"Making File Public ...":"Making File  Private  ....",okText:a?"Make Public":"Make Private",cancelText:"Cancel",onOk:()=>C(e,a)})},v=async e=>{const{data:a}=await F.custom({url:"",method:"post",meta:{operation:"deleteFile",variables:{id:{value:e,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(n.error("Error deleting file"),{data:null})).then(t=>t);a&&(a.success?(n.success(a.message),l(d.filter(t=>t.id.toString()!==e.toString()))):n.error(a.message)),m.destroyAll()};return c.useEffect(()=>{l(o.data)},[o.data]),i.jsxs(i.Fragment,{children:[i.jsx(_,{loading:o.loading,itemLayout:"horizontal",dataSource:d,renderItem:e=>i.jsx(V,{item:e,showDrive:o.showDrive,min:o.min??!1,handleChangePrivate:S,handleDelete:v,handleMakeImageNotVisible:x,handleMakeImageVisible:w,handleShowFileInfoDrawer:y,handleShareFile:k})}),i.jsx(L,{title:"File Informations",anchor:"right",width:g?"100vw":"35vw",onClose:e=>u(e),open:f,children:i.jsx(q,{id:s==null?void 0:s.id})}),i.jsx(I,{title:"Share File",open:b,onClose:e=>p(e),width:g?"100vw":"50vw",children:i.jsx(A,{title:"Click Copy icon to copy share link",children:i.jsx(z,{copyable:{icon:[i.jsx(M,{},"copy-icon"),i.jsx(D,{},"copied-icon")],tooltips:["click here","you clicked!!"],onCopy:()=>{n.success("Link Successfully Copied")}},style:{textAlign:"center",fontSize:20},children:P.site_url+"/odrive/file/"+(s==null?void 0:s.id)+"/"+encodeURIComponent((s==null?void 0:s.slug)??"")+"/share"})})})]})};export{J as F};
