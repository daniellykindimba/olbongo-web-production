import{bF as ue,bG as me,bD as fe,bH as Fe,bR as K,w as U,bt as H,r,bC as ge,b4 as he,j as e,bP as oe,bQ as xe,ci as Se,aT as j,aW as re,aP as D,a1 as V,aY as we,cm as _,g as G,cU as ie,_ as w,cA as ke,F as Te,af as Z,av as M,hJ as ze,hK as Be,c as Re,u as $e,B as ne,P as Oe}from"./index-05772eb7.js";import{F as Ie}from"./file_item_component-41663a6d.js";import{U as Me,a as Ue}from"./upload_folder-158d42b2.js";import{D as We}from"./index-0d3a98f8.js";import{f as Ne}from"./data_objects-fdecb024.js";import{F as Le}from"./files_component-0761df46.js";import{a as Ee}from"./index.esm-36e877c3.js";import{G as ye}from"./index-ab185c8e.js";import{S as De}from"./SearchOutlined-0207aa97.js";import{C as ve}from"./index-7b68fa8b.js";import{P as de}from"./index-1461aa9c.js";import{A as Pe}from"./index-f20852d4.js";import{U as ee}from"./UploadOutlined-e863922c.js";import{F as Ae}from"./FolderOutlined-3e72db18.js";import{S as ce}from"./SearchOutlined-0e97f4a9.js";import{F as Ge}from"./FolderOpenOutlined-d14d88e1.js";import"./index-ebabd3b4.js";import"./defineProperty-4d9f4f1d.js";import"./pdf_document_viewer-335b20eb.js";import"./SecurityScanOutlined-4218c3cf.js";import"./index-c1ab6d96.js";import"./EditOutlined-401a1613.js";import"./transButton-35d2d6df.js";import"./index-ad8bef66.js";import"./index-7c727271.js";import"./index-26ba155a.js";import"./index-54251132.js";import"./index-50c8e22a.js";import"./Image-256411dd.js";import"./DialogWrap-c515d700.js";import"./ZoomOutOutlined-4d40b3b9.js";import"./index-fe2fbeda.js";import"./fade-6bc080d2.js";import"./DeleteOutlined-9fe75e98.js";import"./DeleteOutlined-25685737.js";import"./DownloadOutlined-581febce.js";import"./DownloadOutlined-6cd35f11.js";import"./InfoCircleOutlined-a2af6d4a.js";import"./MoreOutlined-acda24b1.js";import"./SaveOutlined-228ba5aa.js";import"./index-951488b4.js";import"./InfoCircleFilled-219488c9.js";import"./InfoCircleFilled-baaa675e.js";import"./index-a29a8baa.js";import"./Upload-890ff9ff.js";import"./InboxOutlined-1c2ad304.js";import"./index-2dc20dbd.js";import"./useNotification-fddf6c6b.js";import"./index-cedb4c3d.js";import"./localeData-ea0dd020.js";import"./SinglePicker-9fafe884.js";import"./index-88e92a4a.js";import"./useMutateObserver-3cfc8689.js";import"./index-fa9d428a.js";import"./InputNumber-677354a2.js";import"./Rate-fbbf0fc9.js";import"./index-849a35e1.js";import"./index-013e811c.js";import"./ActionButton-e20fca38.js";import"./SmileOutlined-fb91edb3.js";import"./ExclamationCircleOutlined-0a20a855.js";import"./Skeleton-4d93f06a.js";import"./DotChartOutlined-f39c986e.js";function qe(t){return me("MuiToggleButton",t)}const He=ue("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge"]),pe=He,_e=["children","className","color","disabled","disableFocusRipple","fullWidth","onChange","onClick","selected","size","value"],Ve=t=>{const{classes:o,fullWidth:l,selected:i,disabled:x,size:y,color:k}=t,g={root:["root",i&&"selected",x&&"disabled",l&&"fullWidth",`size${K(y)}`,k]};return xe(g,qe,o)},Ke=fe(Fe,{name:"MuiToggleButton",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:l}=t;return[o.root,o[`size${K(l.size)}`]]}})(({theme:t,ownerState:o})=>{let l=o.color==="standard"?t.palette.text.primary:t.palette[o.color].main,i;return t.vars&&(l=o.color==="standard"?t.vars.palette.text.primary:t.vars.palette[o.color].main,i=o.color==="standard"?t.vars.palette.text.primaryChannel:t.vars.palette[o.color].mainChannel),U({},t.typography.button,{borderRadius:(t.vars||t).shape.borderRadius,padding:11,border:`1px solid ${(t.vars||t).palette.divider}`,color:(t.vars||t).palette.action.active},o.fullWidth&&{width:"100%"},{[`&.${pe.disabled}`]:{color:(t.vars||t).palette.action.disabled,border:`1px solid ${(t.vars||t).palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})`:H(t.palette.text.primary,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${pe.selected}`]:{color:l,backgroundColor:t.vars?`rgba(${i} / ${t.vars.palette.action.selectedOpacity})`:H(l,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${i} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:H(l,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${i} / ${t.vars.palette.action.selectedOpacity})`:H(l,t.palette.action.selectedOpacity)}}}},o.size==="small"&&{padding:7,fontSize:t.typography.pxToRem(13)},o.size==="large"&&{padding:15,fontSize:t.typography.pxToRem(15)})}),Ye=r.forwardRef(function(o,l){const i=ge({props:o,name:"MuiToggleButton"}),{children:x,className:y,color:k="standard",disabled:g=!1,disableFocusRipple:T=!1,fullWidth:u=!1,onChange:b,onClick:z,selected:W,size:m="medium",value:C}=i,S=he(i,_e),p=U({},i,{color:k,disabled:g,disableFocusRipple:T,fullWidth:u,size:m}),F=Ve(p),N=n=>{z&&(z(n,C),n.defaultPrevented)||b&&b(n,C)};return e.jsx(Ke,U({className:oe(F.root,y),disabled:g,focusRipple:!T,ref:l,onClick:N,onChange:b,value:C,ownerState:p,"aria-pressed":W},S,{children:x}))}),te=Ye;function Je(t,o){return o===void 0||t===void 0?!1:Array.isArray(o)?o.indexOf(t)>=0:t===o}function Qe(t){return me("MuiToggleButtonGroup",t)}const Xe=ue("MuiToggleButtonGroup",["root","selected","vertical","disabled","grouped","groupedHorizontal","groupedVertical"]),$=Xe,Ze=["children","className","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],et=t=>{const{classes:o,orientation:l,fullWidth:i,disabled:x}=t,y={root:["root",l==="vertical"&&"vertical",i&&"fullWidth"],grouped:["grouped",`grouped${K(l)}`,x&&"disabled"]};return xe(y,Qe,o)},tt=fe("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:l}=t;return[{[`& .${$.grouped}`]:o.grouped},{[`& .${$.grouped}`]:o[`grouped${K(l.orientation)}`]},o.root,l.orientation==="vertical"&&o.vertical,l.fullWidth&&o.fullWidth]}})(({ownerState:t,theme:o})=>U({display:"inline-flex",borderRadius:(o.vars||o).shape.borderRadius},t.orientation==="vertical"&&{flexDirection:"column"},t.fullWidth&&{width:"100%"},{[`& .${$.grouped}`]:U({},t.orientation==="horizontal"?{"&:not(:first-of-type)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-of-type)":{borderTopRightRadius:0,borderBottomRightRadius:0},[`&.${$.selected} + .${$.grouped}.${$.selected}`]:{borderLeft:0,marginLeft:0}}:{"&:not(:first-of-type)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-of-type)":{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`&.${$.selected} + .${$.grouped}.${$.selected}`]:{borderTop:0,marginTop:0}})})),ot=r.forwardRef(function(o,l){const i=ge({props:o,name:"MuiToggleButtonGroup"}),{children:x,className:y,color:k="standard",disabled:g=!1,exclusive:T=!1,fullWidth:u=!1,onChange:b,orientation:z="horizontal",size:W="medium",value:m}=i,C=he(i,Ze),S=U({},i,{disabled:g,fullWidth:u,orientation:z,size:W}),p=et(S),F=(n,B)=>{if(!b)return;const I=m&&m.indexOf(B);let R;m&&I>=0?(R=m.slice(),R.splice(I,1)):R=m?m.concat(B):[B],b(n,R)},N=(n,B)=>{b&&b(n,m===B?null:B)};return e.jsx(tt,U({role:"group",className:oe(p.root,y),ref:l,ownerState:S},C,{children:r.Children.map(x,n=>r.isValidElement(n)?r.cloneElement(n,{className:oe(p.grouped,n.props.className),onChange:T?N:F,selected:n.props.selected===void 0?Je(n.props.value,m):n.props.selected,size:n.props.size||W,fullWidth:u,color:n.props.color||k,disabled:n.props.disabled||g}):null)}))}),rt=ot,st=Se(e.jsx("path",{d:"m9.17 6 2 2H20v10H4V6h5.17M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"}),"FolderOutlined"),at=()=>{const[t,o]=r.useState(""),[l,i]=r.useState(10),[x,y]=r.useState(0),[k,g]=r.useState(0),[T,u]=r.useState(1),[b,z]=r.useState(!1),[W,m]=r.useState(!1),[C,S]=r.useState([]),[p,F]=r.useState(null);r.useState(!1),r.useState(!1);const[N,n]=r.useState(!1),I=!ye.useBreakpoint().lg,[R]=j.useForm(),[q]=j.useForm(),P=async s=>{const{data:d}=await G.custom({url:"",method:"post",meta:{operation:"deleteFolder",variables:{folderId:{value:parseInt(s.id.toString()),type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(w.remove(),w.error("Error deleting folder"),{data:null})).then(f=>f);if(d){w.success(d.message);const f=C.filter(c=>c.id!==s.id);S(f)}},Y=async(s,d)=>{const{data:f}=await G.custom({url:"",method:"post",meta:{operation:"renameFolder",variables:{folderId:{value:parseInt(s.id.toString()),type:"Int",required:!0},name:{value:d,type:"String",required:!0}},fields:["success","message",{folder:["id","name","totalFiles","totalSize","canDelete","canEdit","canManage","isActive","created","updated",{author:ie}]}]}}).catch(()=>(w.remove(),w.error("Error renaming folder"),{data:null})).then(c=>c);if(f){w.success(f.message);const c=C.map(h=>h.id===s.id?f.folder:h);S(c)}},L=async(s,d="",f=25)=>{m(!0);const{data:c}=await G.custom({url:"",method:"get",meta:{operation:"myFolders",variables:{page:{value:s,type:"Int",required:!0},key:{value:d,type:"String",required:!1},pageSize:{value:f,type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","totalFiles","totalSize","canDelete","canEdit","canManage","isActive","created","updated",{author:ie}]}]}}).catch(h=>(w.remove(),w.error("Error getting files"),console.error(h),{data:null})).then(h=>h);c&&(y(c.total),g(c.pages),u(c.page),z(c.hasNext),S(c.results)),m(!1)},A=s=>{F(s)},se=s=>{F(s)},J=s=>{F(s),n(!0)},Q=[{title:"Name",dataIndex:"name",key:"name",render:(s,d)=>e.jsx(ke,{to:"/odrive/folder/"+d.id+"/"+d.name+"/files",children:e.jsx("a",{children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,cursor:"pointer",color:"#333",transition:"all 0.3s"},children:[e.jsx(st,{}),s]})})})},{title:"Total Files",dataIndex:"totalFiles",key:"totalFiles"},{title:"Total Size",dataIndex:"totalSize",key:"totalSize"},{title:"",key:"action",render:(s,d)=>e.jsx("div",{style:{display:"flex",gap:10,justifyContent:"flex-end"},children:e.jsxs(Te,{gap:"small",wrap:"wrap",children:[e.jsx(Z,{title:"Share folder",children:e.jsx(M,{type:"primary",shape:"circle",icon:e.jsx(Ee,{}),size:"small",onClick:()=>{J(d)}})}),e.jsx(Z,{title:"Delete folder",children:e.jsx(de,{title:"Are you sure you want to delete this folder?",description:"This action cannot be undone, all files in this folder will be deleted too.",onConfirm:()=>{P(d)},okText:"Yes",cancelText:"No",children:e.jsx(M,{type:"primary",shape:"circle",icon:e.jsx(ze,{}),size:"small",onClick:()=>{A(d)}})})}),e.jsx(Z,{title:"Rename folder",children:e.jsx(de,{title:"Are you sure you want to rename this folder?",description:e.jsx(j,{form:q,initialValues:{name:p==null?void 0:p.name},onFinish:f=>{console.log(f),Y(d,f.name)},children:e.jsx(j.Item,{name:"name",children:e.jsx(V,{placeholder:"Enter new folder name"})})}),onConfirm:()=>{q.submit()},okText:"Yes",cancelText:"No",onOpenChange:f=>{f||F(null)},children:e.jsx(M,{type:"primary",shape:"circle",icon:e.jsx(Be,{}),size:"small",onClick:()=>{se(d)}})})})]})})}];return r.useEffect(()=>{L(T,t,l)},[]),e.jsxs("div",{style:{marginTop:5},children:[e.jsx("div",{style:{paddingTop:10,paddingBottom:0},children:e.jsx(re,{children:e.jsx(D,{span:I?24:12,children:e.jsx(j,{layout:"vertical",form:R,onFinish:s=>{o(s.key),L(1,s.key,l)},children:e.jsx(j.Item,{name:"key",children:e.jsx(V,{size:"large",placeholder:"Search folder(s)...",prefix:e.jsx(De,{}),autoComplete:"off",allowClear:!0})})})})})}),e.jsx(we,{dataSource:C,columns:Q,pagination:{total:x,current:T,pageSize:l,showSizeChanger:!0,onChange:(s,d)=>{L(s,t,d||25)},onShowSizeChange:(s,d)=>{L(s,t,d||25)}}}),e.jsx(_,{title:"Share File",open:N,onClose:s=>n(s),width:I?"100vw":"50vw",children:e.jsx(ve,{title:"Click Copy icon to copy share link",children:"sharing folder"})})]})},ho=t=>{const[o,l]=r.useState(!1),[i,x]=r.useState([]),[y,k]=r.useState(!0),[g,T]=r.useState(1),[u,b]=r.useState(t.min?5:25),[z]=j.useForm();j.useForm();const[W,m]=r.useState(0),[C,S]=r.useState(0),[p,F]=r.useState(""),[N,n]=r.useState(!0),{push:B}=Re(),[I,R]=r.useState(!1),[q,P]=r.useState(!1),[Y,L]=r.useState(!1),[A,se]=r.useState(),[J,Q]=r.useState(!1),[s,d]=r.useState("files"),c=!ye.useBreakpoint().lg,h=$e(),ae=()=>{R(!0)},le=a=>{x([...a,...i])},O=async(a,v="",Ce=25)=>{k(!0);const{data:E}=await G.custom({url:"",method:"get",meta:{operation:"files",variables:{page:{value:a,type:"Int",required:!0},key:{value:v,type:"String",required:!1},pageSize:{value:Ce,type:"Int",required:!0},folder:{value:h.folder,type:"String",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:Ne}]}}).catch(X=>(console.error(X),w.error("Error getting files"),{data:null})).then(X=>X);E&&(S(E.total),m(E.pages),T(E.page),n(E.hasNext),x(E.results)),k(!1)},je=(a,v)=>{b(v),O(g,p,v)},be=async()=>{const{data:a}=await G.custom({url:"",method:"get",meta:{operation:"odriveAuthorization",variables:{},fields:["auth"]}}).catch(()=>(w.error("Error getting Odrive Authorization"),{data:null})).then(v=>v);a&&l(a.auth.upload_files)};return r.useEffect(()=>{be(),O(g,p,u),h.folder&&d("files")},[h]),e.jsxs(e.Fragment,{children:[!t.min&&e.jsx(Pe,{offsetTop:63,children:e.jsxs(re,{children:[c&&e.jsxs(e.Fragment,{children:[e.jsxs(D,{span:24,style:{display:"flex",justifyContent:"flex-end",marginBottom:10},children:[e.jsx(M,{size:"large",icon:e.jsx(ee,{}),disabled:!o,onClick:()=>ae(),children:"Upload File(s)"}),e.jsx(M,{size:"large",icon:e.jsx(Ae,{}),disabled:!o,onClick:()=>P(!0),children:"Upload Folder"})]}),e.jsx(D,{span:24,children:e.jsx(ve,{bodyStyle:{paddingTop:10,paddingBottom:0},children:e.jsx(j,{layout:"vertical",form:z,onFinish:a=>{F(a.key),O(1,a.key,u)},children:e.jsx(j.Item,{name:"key",children:e.jsx(V,{size:"large",placeholder:"Search file(s)...",prefix:e.jsx(ce,{}),autoComplete:"off",allowClear:!0})})})})})]}),!c&&e.jsxs(e.Fragment,{children:[e.jsx(D,{span:12,children:!t.min&&e.jsx(ne,{sx:{display:"flex",justifyContent:"flex-start",alignItems:"center"},children:e.jsxs(rt,{color:"primary",value:h.folder?"folderOpen":s,exclusive:!0,onChange:(a,v)=>{v!==null&&(d(v),v==="files"&&O(1,p,u),h.folder&&B("/odrive"))},"aria-label":"Alignment",sx:{display:"flex",justifyContent:"flex-start",alignItems:"center"},children:[e.jsx(te,{value:"files",sx:{"&.Mui-selected":{backgroundColor:"red",color:"white",fontWeight:"bold","&:hover":{backgroundColor:"red",color:"white",fontWeight:"bold"}},fontWeight:"bold"},children:"Files"}),e.jsx(te,{value:"folders",sx:{"&.Mui-selected":{backgroundColor:"red",color:"white",fontWeight:"bold","&:hover":{backgroundColor:"red",color:"white",fontWeight:"bold"}},fontWeight:"bold"},children:"Folders"}),h.folder&&e.jsxs(te,{disabled:!0,value:"folderOpen",sx:{"&.Mui-selected":{backgroundColor:"red",color:"white",fontWeight:"bold","&:hover":{backgroundColor:"red",color:"white",fontWeight:"bold"}},fontWeight:"bold"},children:[e.jsx(Ge,{}),e.jsx("span",{style:{marginLeft:"3px"},children:h.name})]})]})})}),s==="files"&&e.jsxs(D,{span:12,style:{display:"flex",justifyContent:"flex-end"},children:[e.jsx(M,{size:"large",icon:e.jsx(ee,{}),disabled:!o,onClick:()=>ae(),children:"Upload File(s)"}),e.jsx(M,{size:"large",icon:e.jsx(ee,{}),disabled:!o,onClick:()=>P(!0),children:"Upload Folder"})]})]})]})}),s==="files"&&e.jsxs("div",{style:{marginTop:5},children:[!t.min&&e.jsx("div",{style:{paddingTop:10,paddingBottom:0},children:e.jsx(re,{children:e.jsx(D,{span:c?24:12,children:e.jsx(j,{layout:"vertical",form:z,onFinish:a=>{F(a.key),O(1,a.key,u)},children:e.jsx(j.Item,{name:"key",children:e.jsx(V,{size:"large",placeholder:"Search file(s)...",prefix:e.jsx(ce,{}),autoComplete:"off",allowClear:!0})})})})})}),e.jsx(ne,{sx:{maxHeight:"calc(100vh - 280px)",overflowY:"auto"},children:e.jsx("div",{style:{marginTop:t.min?0:20},children:e.jsx(Le,{showDrive:!0,loading:y,data:i,min:t.min??!1,onRefresh:()=>{alert("refresh"),O(1,p,u)},onDelete:a=>{x(i.filter(v=>v.id!==a)),i.length===1&&O(1,p,u)}})})}),!t.min&&e.jsx(e.Fragment,{children:!y&&i.length>0&&e.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:10,marginTop:20},children:e.jsx(Oe,{showSizeChanger:!0,showQuickJumper:!0,defaultCurrent:g,current:g,total:C,pageSize:u,onShowSizeChange:je,onChange:a=>O(a,p,u)})})})]}),s==="folders"&&e.jsx(e.Fragment,{children:e.jsx(at,{})}),e.jsx(_,{title:"Uploading Files",open:I,onClose:a=>R(a),width:c?"100vw":"50vw",children:e.jsx(Me,{onFinish:a=>le(a),mode:"file"})}),e.jsx(_,{title:"Uploading Folder",open:q,onClose:a=>P(a),width:c?"100vw":"50vw",children:e.jsx(Ue,{onFinish:a=>le(a),mode:"file"})}),e.jsx(We,{title:"File Informations",anchor:"right",width:c?"100vw":"35vw",onClose:a=>L(a),open:Y,noOverFlow:!0,children:e.jsx(Ie,{id:A==null?void 0:A.id})}),e.jsx(_,{title:"Share File",open:J,onClose:a=>Q(a),width:c?"100vw":"50vw",children:e.jsx("span",{})})]})};export{ho as Files};
