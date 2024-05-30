import{r as s,aT as C,c as ee,u as q,j as e,aW as F,aP as x,a8 as te,av as g,a1 as re,B as se,P as oe,cl as A,g as j,_ as u,cn as ie,cL as ae,aN as h,cz as w}from"./index-8c21ffd9.js";import{U as ne,a as le}from"./upload_folder-3a7a5e85.js";import{D as ce}from"./drive_info-d59c4ba5.js";import{d as E,f as me}from"./data_objects-82f12d9a.js";import{F as de}from"./files_component-dd0384f8.js";import{G as pe}from"./index-e99dddd8.js";import{A as P}from"./index-06fc9389.js";import{C as ue}from"./index-9397a134.js";import{S as he}from"./SearchOutlined-1925663a.js";import{U as fe}from"./UploadOutlined-b6e05402.js";import{F as xe}from"./FolderOutlined-c1e46233.js";import{U as ge}from"./UserOutlined-8d0c633a.js";import"./index-3569dbdd.js";import"./Upload-85badca6.js";import"./fade-f7dec92e.js";import"./DeleteOutlined-25685737.js";import"./DownloadOutlined-6cd35f11.js";import"./InboxOutlined-5c802022.js";import"./index-752f0678.js";import"./defineProperty-61bdb182.js";import"./useNotification-cf33d44b.js";import"./DialogWrap-e146f0cd.js";import"./index-61dd26a9.js";import"./localeData-2383786f.js";import"./SinglePicker-fa20c50f.js";import"./index-b0dde265.js";import"./useMutateObserver-74fb39e5.js";import"./index-46fb651e.js";import"./InputNumber-f9e24fe2.js";import"./Image-f0a32439.js";import"./Rate-925e451d.js";import"./index-1983f99d.js";import"./index-e94b76ec.js";import"./index-6a6c0005.js";import"./EditOutlined-401a1613.js";import"./transButton-ae6957ec.js";import"./file_item_component-0d4f7bbd.js";import"./index-70cf22ff.js";import"./index-077fec2b.js";import"./pdf_document_viewer-58e9d223.js";import"./SecurityScanOutlined-064304ee.js";import"./index-503e6345.js";import"./index-5818325c.js";import"./ActionButton-527228ff.js";import"./index.esm-c6ce8ca6.js";import"./index-ee5b33d5.js";import"./index-d4a02f16.js";import"./index-e98137f8.js";import"./ZoomOutOutlined-4d40b3b9.js";import"./index-83bdb35e.js";import"./DeleteOutlined-8d9e06c1.js";import"./DownloadOutlined-bf1cd2b4.js";import"./InfoCircleOutlined-4804a067.js";import"./MoreOutlined-602dc259.js";import"./SaveOutlined-889e3138.js";import"./index-54942713.js";import"./InfoCircleFilled-68f8d5c6.js";import"./InfoCircleFilled-baaa675e.js";import"./SmileOutlined-a883f7a3.js";import"./ExclamationCircleOutlined-b57964ca.js";import"./Skeleton-bf8200fc.js";import"./DotChartOutlined-f39c986e.js";const je=c=>{const[m,y]=s.useState(!1),[t,v]=s.useState(),[i,f]=s.useState([]),[I,D]=s.useState(!0),[d,N]=s.useState(1),[ye,O]=s.useState(0),[S,R]=s.useState(20),[T,K]=s.useState(0),[ve,L]=s.useState(!0),[b,H]=s.useState(""),[Y]=C.useForm(),{push:_}=ee(),[G,V]=s.useState(Math.random()),[W,k]=s.useState(!1),a=q(),[J,U]=s.useState(!1),M=!pe.useBreakpoint().lg,Q=()=>{V(Math.random()),k(!0)},B=async r=>{const{data:o}=await j.custom({url:"",method:"get",meta:{operation:"drive",variables:{id:{value:r,type:"Int",required:!0}},fields:E}}).catch(()=>(u.error("Error occured while fetching drive data"),{data:null})).then(p=>p);o&&(v(o),y(!0))},z=r=>{f([...r,...i])},n=async(r,o="",p=20)=>{D(!0);const{data:l}=await j.custom({url:"",method:"get",meta:{operation:"driveFiles",variables:{id:{value:parseInt(a.drive.toString()),type:"Int",required:!0},page:{value:r,type:"Int",required:!0},key:{value:o,type:"String",required:!1},pageSize:{value:p,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:me}]}}).catch(()=>(u.error("Error occured while fetching files"),{data:null})).then($=>$);l&&(K(l.total),N(l.page),O(l.pages),L(l.hasNext),f(l.results)),D(!1)},X=(r,o)=>{R(o),n(d,b,o)},Z=async r=>{const{data:o}=await j.custom({url:"",method:"post",meta:{operation:"connectDrive",variables:{id:{value:r,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(u.error("Drive connection failed"),{data:null})).then(p=>p);o&&(o.success?(u(o.message),B(parseInt(a.drive.toString())),n(d,"",20)):u.error(o.message))};return s.useEffect(()=>{B(parseInt(a.drive.toString())),n(d,"",20)},[a.drive]),m?t!=null&&t.isBlocked?e.jsx("div",{children:e.jsx(P,{message:"You can not Access this Drive, you are blocked",type:"error",showIcon:!0})}):t!=null&&t.isConnected?e.jsxs(e.Fragment,{children:[t&&e.jsxs("div",{style:{marginTop:10},children:[e.jsxs(F,{children:[e.jsx(x,{span:12,children:e.jsx(C,{layout:"vertical",form:Y,onFinish:r=>{H(r.key),n(1,r.key,S)},children:e.jsx(C.Item,{name:"key",children:e.jsx(re,{size:"large",placeholder:"Search file(s)...",prefix:e.jsx(he,{}),autoComplete:"off",allowClear:!0})})})}),e.jsxs(x,{span:12,style:{display:"flex",justifyContent:"flex-end"},children:[e.jsx(g,{size:"large",icon:e.jsx(fe,{}),onClick:()=>Q(),loading:!m,disabled:!(t!=null&&t.isAuthor)||(t==null?void 0:t.isArchived),children:"Upload File(s)"}),e.jsx(g,{size:"large",icon:e.jsx(xe,{}),onClick:()=>U(!0),loading:!m,disabled:!(t!=null&&t.isAuthor)||(t==null?void 0:t.isArchived),children:"Upload Folder"}),e.jsx(g,{size:"large",icon:e.jsx(ge,{}),disabled:!(t!=null&&t.canManage)||(t==null?void 0:t.isArchived),onClick:()=>_("/odrive/drive/"+a.drive+"/"+a.code+"/members"),children:"Members"})]})]}),e.jsx(se,{sx:{maxHeight:"calc(100vh - 270px)",overflowY:"auto"},children:e.jsx(de,{showDrive:!1,loading:I,data:i,min:c.min??!1,onRefresh:()=>{alert("refresh2"),n(1,"",20)}})})]}),!I&&i.length>0&&e.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:10,marginTop:15},children:e.jsx(oe,{showSizeChanger:!0,showQuickJumper:!0,defaultCurrent:d,current:d,total:T,pageSize:S,onShowSizeChange:X,onChange:r=>n(r,b,S)})}),e.jsx(A,{title:"Uploading Files",open:W,onClose:r=>k(r),width:M?"100vw":"50vw",children:e.jsx(ne,{onFinish:z,random:G,mode:"drive"})}),e.jsx(A,{title:"Uploading Folder",open:J,onClose:r=>U(r),width:M?"100vw":"50vw",children:e.jsx(le,{onFinish:r=>z(r),mode:"drive",drive:t})})]}):e.jsx(F,{style:{display:"flex",justifyContent:"center"},children:e.jsx(x,{span:12,children:e.jsxs(ue,{children:[e.jsx(P,{message:"You can not Access this Drive, you are not connected, Please Click Connect button Below",type:"error",showIcon:!0,style:{marginBottom:30}}),e.jsx(ce,{id:t==null?void 0:t.id}),e.jsx(g,{type:"primary",size:"large",style:{float:"right"},onClick:()=>Z(t==null?void 0:t.id),children:"Connect"})]})})}):e.jsx(F,{children:e.jsx(x,{span:24,style:{display:"flex",justifyContent:"center"},children:e.jsx(te,{})})})},Mt=()=>{const[c,m]=s.useState(),y=q(),t=async v=>{const{data:i}=await j.custom({url:"",method:"get",meta:{operation:"drive",variables:{id:{value:v,type:"Int",required:!0}},fields:E}}).catch(()=>({data:null})).then(f=>f);i&&m(i)};return s.useEffect(()=>{document.title=ie.system_name+": Drive Files",t(parseInt(y.drive.toString()))},[]),e.jsxs("div",{style:{marginTop:10},children:[e.jsx(ae,{children:e.jsxs(h,{children:[e.jsx(h.Item,{children:e.jsx(w,{to:"/",children:"Home"})}),e.jsx(h.Item,{children:e.jsx(w,{to:"/odrive",children:"Odrive"})}),e.jsx(h.Item,{children:e.jsx(w,{to:"/odrive/drives",children:"Drives"})}),e.jsxs(h.Item,{children:[c==null?void 0:c.name," - Files"]})]})}),e.jsx(je,{})]})};export{Mt as DriveFilesPage};
