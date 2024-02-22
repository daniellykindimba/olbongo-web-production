import{r,F as j,m as X,a$ as Z,b5 as ee,j as e,R as m,n as d,S as te,A as U,k as se,a as p,am as h,aS as M,bm as re,I as ae,aN as oe,aV as ie,h2 as ne,B as le,al as ce,M as B,g as y,_ as u,d as de}from"./index-8383052a.js";import{U as ue,a as me}from"./upload_folder-aec09a6a.js";import{D as pe}from"./drive_info-ab49e2f1.js";import{d as he,f as xe}from"./data_objects-4aa0e35d.js";import{F as fe}from"./files_component-d5a34c99.js";import"./index-f01bf1ec.js";import"./objectWithoutProperties-b8bf9153.js";import"./DialogWrap-346db36a.js";import"./useNotification-db69f818.js";import"./PickerPanel-03789d05.js";import"./localeData-23d6edf5.js";import"./RangePicker-2155f470.js";import"./index-c090ff23.js";import"./InputNumber-f580c739.js";import"./index-55e86b79.js";import"./file_item_component-935533f3.js";import"./index-2c4983dd.js";import"./index-df69e7d2.js";import"./index-05816c56.js";import"./index.esm-02dc71fa.js";import"./iconBase-5c18f08e.js";import"./index-79c49ce7.js";import"./index-a08762ee.js";import"./ReactTimeAgo-50ae14ef.js";import"./memoize-one.esm-297ddbcb.js";import"./index-48b0d1f7.js";const ge=A=>{const[x,z]=r.useState(!1),[t,q]=r.useState(),[f,v]=r.useState([]),[F,S]=r.useState(!0),[n,P]=r.useState(1),[je,E]=r.useState(0),[g,N]=r.useState(20),[R,K]=r.useState(0),[ye,O]=r.useState(!0),[C,H]=r.useState(""),[L]=j.useForm(),{push:T}=X(),[V,Y]=r.useState(Math.random()),[_,w]=r.useState(!1),o=Z(),[G,b]=r.useState(!1),I=!ee.useBreakpoint().lg,J=()=>{Y(Math.random()),w(!0)},k=async s=>{const{data:a}=await y.custom({url:"",method:"get",meta:{operation:"drive",variables:{id:{value:s,type:"Int",required:!0}},fields:he}}).catch(()=>(u.error("Error occured while fetching drive data"),{data:null})).then(c=>c);a&&(q(a),z(!0))},D=s=>{v([...s,...f])},l=async(s,a="",c=20)=>{S(!0);const{data:i}=await y.custom({url:"",method:"get",meta:{operation:"driveFiles",variables:{id:{value:parseInt(o.drive.toString()),type:"Int",required:!0},page:{value:s,type:"Int",required:!0},key:{value:a,type:"String",required:!1},pageSize:{value:c,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:xe}]}}).catch(()=>(u.error("Error occured while fetching files"),{data:null})).then(W=>W);i&&(K(i.total),P(i.page),E(i.pages),O(i.hasNext),v(i.results)),S(!1)},Q=(s,a)=>{N(a),l(n,C,a)},$=async s=>{const{data:a}=await y.custom({url:"",method:"post",meta:{operation:"connectDrive",variables:{id:{value:s,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(u.error("Drive connection failed"),{data:null})).then(c=>c);a&&(a.success?(u(a.message),k(parseInt(o.drive.toString())),l(n,"",20)):u.error(a.message))};return r.useEffect(()=>{k(parseInt(o.drive.toString())),l(n,"",20)},[o.drive]),x?t!=null&&t.isBlocked?e.jsx("div",{children:e.jsx(U,{message:"You can not Access this Drive, you are blocked",type:"error",showIcon:!0})}):t!=null&&t.isConnected?e.jsxs(e.Fragment,{children:[t&&e.jsxs(e.Fragment,{children:[e.jsx(m,{children:e.jsxs(d,{span:24,style:{display:"flex",justifyContent:"space-between",marginBottom:10},children:[e.jsxs(h,{children:[e.jsx(h.Item,{children:e.jsx(M,{to:"/odrive",children:"Home"})}),e.jsx(h.Item,{children:e.jsx(M,{to:"/odrive/drives",children:"Drives"})}),e.jsxs(h.Item,{children:[t==null?void 0:t.name," - Files"]})]}),e.jsx("div",{children:e.jsx(p,{size:"large",icon:e.jsx(re,{}),disabled:!(t!=null&&t.canManage)||(t==null?void 0:t.isArchived),onClick:()=>T("/odrive/drive/"+o.drive+"/"+o.code+"/members"),children:"Members"})})]})}),e.jsxs(m,{children:[e.jsx(d,{span:12,children:e.jsx(j,{layout:"vertical",form:L,onFinish:s=>{H(s.key),l(1,s.key,g)},children:e.jsx(j.Item,{name:"key",children:e.jsx(ae,{size:"large",placeholder:"Search file(s)...",prefix:e.jsx(oe,{}),autoComplete:"off",allowClear:!0})})})}),e.jsxs(d,{span:12,style:{display:"flex",justifyContent:"flex-end"},children:[e.jsx(p,{size:"large",icon:e.jsx(ie,{}),onClick:()=>J(),loading:!x,disabled:!(t!=null&&t.isAuthor)||(t==null?void 0:t.isArchived),children:"Upload File(s)"}),e.jsx(p,{size:"large",icon:e.jsx(ne,{}),onClick:()=>b(!0),loading:!x,disabled:!(t!=null&&t.isAuthor)||(t==null?void 0:t.isArchived),children:"Upload Folder"})]})]}),e.jsx(le,{sx:{maxHeight:"calc(100vh - 270px)",overflowY:"auto"},children:e.jsx(fe,{showDrive:!1,loading:F,data:f,min:A.min??!1})})]}),!F&&f.length>0&&e.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:10,marginTop:15},children:e.jsx(ce,{showSizeChanger:!0,showQuickJumper:!0,defaultCurrent:n,current:n,total:R,pageSize:g,onShowSizeChange:Q,onChange:s=>l(s,C,g)})}),e.jsx(B,{title:"Uploading Files",open:_,onClose:s=>w(s),width:I?"100vw":"50vw",children:e.jsx(ue,{onFinish:D,random:V,mode:"drive"})}),e.jsx(B,{title:"Uploading Folder",open:G,onClose:s=>b(s),width:I?"100vw":"50vw",children:e.jsx(me,{onFinish:s=>D(s),mode:"drive",drive:t})})]}):e.jsx(m,{style:{display:"flex",justifyContent:"center"},children:e.jsx(d,{span:12,children:e.jsxs(se,{children:[e.jsx(U,{message:"You can not Access this Drive, you are not connected, Please Click Connect button Below",type:"error",showIcon:!0,style:{marginBottom:30}}),e.jsx(pe,{id:t==null?void 0:t.id}),e.jsx(p,{type:"primary",size:"large",style:{float:"right"},onClick:()=>$(t==null?void 0:t.id),children:"Connect"})]})})}):e.jsx(m,{children:e.jsx(d,{span:24,style:{display:"flex",justifyContent:"center"},children:e.jsx(te,{})})})},Ge=()=>(r.useEffect(()=>{document.title=de.system_name+": Drive Files"},[]),e.jsx("div",{style:{marginTop:10},children:e.jsx(ge,{})}));export{Ge as DriveFilesPage};
