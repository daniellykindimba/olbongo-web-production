import{r as c,m as j,Q as I,j as s,aC as M,M as D,k as P,b0 as V,b1 as E,_ as r,d as q,aV as T,aT as _,g as F}from"./index-cdd95245.js";import{a as A,F as L}from"./file_item_component-0500fc39.js";import{D as O}from"./index-c62eae5d.js";import{M as u}from"./index-d04ae3d3.js";const{Paragraph:z}=T,U=o=>{const[d,l]=c.useState([]);j();const[f,m]=c.useState(!1),[i,h]=c.useState(),[k,g]=c.useState(!1),p=!I.useBreakpoint().lg,b=e=>{h(e),g(!0)},w=e=>{const a=o.data.map(t=>(t.id===e.id&&(t.imageVisible=!0),t));l(a)},x=e=>{const a=o.data.map(t=>(t.id===e.id&&(t.imageVisible=!1),t));l(a)},y=e=>{h(e),m(!0)},C=async(e,a)=>{const{data:t}=await F.custom({url:"",method:"post",meta:{operation:"makeFilePublicPrivate",variables:{id:{value:e,type:"Int",required:!0},public:{value:a,type:"Boolean",required:!0}},fields:["success","message"]}}).catch(n=>(r.error("Error changing file privacy"),{data:null})).then(n=>n);t&&(t.success?(r.success(t.message),l(d.map(n=>(n.id===e&&(n.isPublic=a),n)))):t.message),u.destroyAll()},S=(e,a)=>{u.confirm({title:"Confirm",icon:s.jsx(_,{}),content:a?"Making File Public ...":"Making File  Private  ....",okText:a?"Make Public":"Make Private",cancelText:"Cancel",onOk:()=>C(e,a)})},v=async e=>{const{data:a}=await F.custom({url:"",method:"post",meta:{operation:"deleteFile",variables:{id:{value:e,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(r.error("Error deleting file"),{data:null})).then(t=>t);a&&(a.success?(r.success(a.message),l(d.filter(t=>t.id.toString()!==e.toString()))):r.error(a.message)),u.destroyAll()};return c.useEffect(()=>{l(o.data)},[o.data]),s.jsxs(s.Fragment,{children:[s.jsx(M,{loading:o.loading,itemLayout:"horizontal",dataSource:d,renderItem:e=>s.jsx(A,{item:e,showDrive:o.showDrive,min:o.min??!1,handleChangePrivate:S,handleDelete:v,handleMakeImageNotVisible:x,handleMakeImageVisible:w,handleShowFileInfoDrawer:y,handleShareFile:b})}),s.jsx(O,{title:"File Informations",anchor:"right",width:p?"100vw":"35vw",onClose:e=>m(e),open:f,children:s.jsx(L,{id:i==null?void 0:i.id})}),s.jsx(D,{title:"Share File",open:k,onClose:e=>g(e),width:p?"100vw":"50vw",children:s.jsx(P,{title:"Click Copy icon to copy share link",children:s.jsx(z,{copyable:{icon:[s.jsx(V,{},"copy-icon"),s.jsx(E,{},"copied-icon")],tooltips:["click here","you clicked!!"],onCopy:()=>{r.success("Link Successfully Copied")}},style:{textAlign:"center",fontSize:20},children:q.site_url+"/odrive/file/"+(i==null?void 0:i.id)+"/"+encodeURIComponent((i==null?void 0:i.slug)??"")+"/share"})})})]})};export{U as F};
