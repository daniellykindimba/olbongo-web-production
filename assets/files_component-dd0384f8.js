import{r as l,c as j,j as i,cl as M,_ as r,cn as I,g as f}from"./index-8c21ffd9.js";import{a as D,F as P}from"./file_item_component-0d4f7bbd.js";import{D as E}from"./index-077fec2b.js";import{G as V}from"./index-e99dddd8.js";import{L as q}from"./index-ee5b33d5.js";import{C as L}from"./index-9397a134.js";import{T as O}from"./index-6a6c0005.js";import{M as d}from"./index-54942713.js";import{a as T,S as _}from"./SmileOutlined-a883f7a3.js";import{E as A}from"./ExclamationCircleOutlined-b57964ca.js";const{Paragraph:R}=O,Y=s=>{const[m,c]=l.useState([]);j();const[F,u]=l.useState(!1),[o,h]=l.useState(),[w,g]=l.useState(!1),p=!V.useBreakpoint().lg,k=e=>{h(e),g(!0)},x=e=>{const t=s.data.map(a=>(a.id===e.id&&(a.imageVisible=!0),a));c(t)},y=e=>{const t=s.data.map(a=>(a.id===e.id&&(a.imageVisible=!1),a));c(t)},C=e=>{h(e),u(!0)},b=async(e,t)=>{const{data:a}=await f.custom({url:"",method:"post",meta:{operation:"makeFilePublicPrivate",variables:{id:{value:e,type:"Int",required:!0},public:{value:t,type:"Boolean",required:!0}},fields:["success","message"]}}).catch(n=>(r.error("Error changing file privacy"),{data:null})).then(n=>n);a&&(a.success?(r.success(a.message),c(m.map(n=>(n.id===e&&(n.isPublic=t),n)))):a.message),d.destroyAll()},v=(e,t)=>{d.confirm({title:"Confirm",icon:i.jsx(A,{}),content:t?"Making File Public ...":"Making File  Private  ....",okText:t?"Make Public":"Make Private",cancelText:"Cancel",onOk:()=>b(e,t)})},S=async e=>{const{data:t}=await f.custom({url:"",method:"post",meta:{operation:"deleteFile",variables:{id:{value:e,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(r.error("Error deleting file"),{data:null})).then(a=>a);t&&(t.success?(r.success(t.message),s.onDelete(e)):r.error(t.message),m.length===0&&s.onRefresh()),d.destroyAll()};return l.useEffect(()=>{c(s.data)},[s.data]),i.jsxs(i.Fragment,{children:[i.jsx(q,{loading:s.loading,itemLayout:"horizontal",dataSource:m,renderItem:e=>i.jsx(D,{item:e,showDrive:s.showDrive,min:s.min??!1,handleChangePrivate:v,handleDelete:S,handleMakeImageNotVisible:y,handleMakeImageVisible:x,handleShowFileInfoDrawer:C,handleShareFile:k,actionMenues:s.actionMenues})}),i.jsx(E,{title:"File Informations",anchor:"right",width:p?"100vw":"35vw",onClose:e=>u(e),open:F,noOverFlow:!0,children:i.jsx(P,{id:o==null?void 0:o.id})}),i.jsx(M,{title:"Share File",open:w,onClose:e=>g(e),width:p?"100vw":"50vw",children:i.jsx(L,{title:"Click Copy icon to copy share link",children:i.jsx(R,{copyable:{icon:[i.jsx(T,{},"copy-icon"),i.jsx(_,{},"copied-icon")],tooltips:["click here","you clicked!!"],onCopy:()=>{r.success("Link Successfully Copied")}},style:{textAlign:"center",fontSize:20},children:I.site_url+"/odrive/file/"+(o==null?void 0:o.id)+"/"+encodeURIComponent((o==null?void 0:o.slug)??"")+"/share"})})})]})};export{Y as F};
