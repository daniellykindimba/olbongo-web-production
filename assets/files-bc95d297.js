import{r as s,bK as pe,bL as ge,bG as fe,bM as $e,bX as Q,v as N,bw as H,b5 as se,iT as Te,bF as he,j as e,bV as me,bW as xe,b_ as ve,aU as B,aY as re,aQ as D,$ as Y,a_ as ke,c2 as K,g as V,dv as ne,_ as R,ct as ze,ad as ee,av as P,iU as we,iV as Re,c as Me,d7 as Oe,d1 as te,iW as Ie,cZ as de,B as ce,c$ as We,aW as Ue}from"./index-62ca8c71.js";import{F as Ne}from"./file_item_component-fd075a5e.js";import{U as Le,a as Ge}from"./upload_folder-899ca68c.js";import{D as Pe}from"./index-fd68f2d5.js";import{f as Ee}from"./data_objects-db8d9736.js";import{F as Ae}from"./files_component-8feace3c.js";import{a as De}from"./index.esm-cc96fead.js";import{G as Ce}from"./index-b877aff7.js";import{C as ye}from"./index-2520e10c.js";import{F as qe}from"./index-0b7dca93.js";import{P as ue}from"./index-7f983f75.js";import{A as _e}from"./index-2cd6e89d.js";import"./index-9ae97127.js";import"./defineProperty-d9a91b7a.js";import"./index-3f73f4a1.js";import"./transButton-697c9585.js";import"./index-c11e1580.js";import"./index-a5f62a10.js";import"./index-c9a71fc6.js";import"./index-30f2475f.js";import"./index-1c660d60.js";import"./Image-fd2d922e.js";import"./DialogWrap-720f6df3.js";import"./index-243c6e9a.js";import"./fade-6a3d81d7.js";import"./index-d0bf4e29.js";import"./InfoCircleFilled-8c818918.js";import"./index-4606efc5.js";import"./Upload-af63b42f.js";import"./index-72829d9f.js";import"./useNotification-2cd7d170.js";import"./index-9484e0cf.js";import"./localeData-90cc4ac5.js";import"./SinglePicker-da7dc94a.js";import"./useMutateObserver-678ff4f3.js";import"./index-641f7544.js";import"./InputNumber-f45fbc30.js";import"./Rate-de48e710.js";import"./index-5b3a58f1.js";import"./index-57e02f2b.js";import"./ActionButton-e3468a72.js";import"./iconBase-6aad712e.js";import"./Skeleton-26b0114a.js";function Ve(t){return s.Children.toArray(t).filter(o=>s.isValidElement(o))}function He(t){return ge("MuiToggleButton",t)}const Ke=pe("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge","fullWidth"]),q=Ke,Ye=s.createContext({}),be=Ye,Qe=s.createContext(void 0),je=Qe;function Je(t,o){return o===void 0||t===void 0?!1:Array.isArray(o)?o.indexOf(t)>=0:t===o}const Xe=["value"],Ze=["children","className","color","disabled","disableFocusRipple","fullWidth","onChange","onClick","selected","size","value"],et=t=>{const{classes:o,fullWidth:l,selected:d,disabled:b,size:C,color:k}=t,m={root:["root",d&&"selected",b&&"disabled",l&&"fullWidth",`size${Q(C)}`,k]};return xe(m,He,o)},tt=fe($e,{name:"MuiToggleButton",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:l}=t;return[o.root,o[`size${Q(l.size)}`]]}})(({theme:t,ownerState:o})=>{let l=o.color==="standard"?t.palette.text.primary:t.palette[o.color].main,d;return t.vars&&(l=o.color==="standard"?t.vars.palette.text.primary:t.vars.palette[o.color].main,d=o.color==="standard"?t.vars.palette.text.primaryChannel:t.vars.palette[o.color].mainChannel),N({},t.typography.button,{borderRadius:(t.vars||t).shape.borderRadius,padding:11,border:`1px solid ${(t.vars||t).palette.divider}`,color:(t.vars||t).palette.action.active},o.fullWidth&&{width:"100%"},{[`&.${q.disabled}`]:{color:(t.vars||t).palette.action.disabled,border:`1px solid ${(t.vars||t).palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})`:H(t.palette.text.primary,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${q.selected}`]:{color:l,backgroundColor:t.vars?`rgba(${d} / ${t.vars.palette.action.selectedOpacity})`:H(l,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${d} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:H(l,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${d} / ${t.vars.palette.action.selectedOpacity})`:H(l,t.palette.action.selectedOpacity)}}}},o.size==="small"&&{padding:7,fontSize:t.typography.pxToRem(13)},o.size==="large"&&{padding:15,fontSize:t.typography.pxToRem(15)})}),ot=s.forwardRef(function(o,l){const d=s.useContext(be),{value:b}=d,C=se(d,Xe),k=s.useContext(je),m=Te(N({},C,{selected:Je(o.value,b)}),o),S=he({props:m,name:"MuiToggleButton"}),{children:x,className:$,color:I="standard",disabled:W=!1,disableFocusRipple:p=!1,fullWidth:M=!1,onChange:j,onClick:g,selected:F,size:L="medium",value:z}=S,G=se(S,Ze),O=N({},S,{color:I,disabled:W,disableFocusRipple:p,fullWidth:M,size:L}),U=et(O),f=y=>{g&&(g(y,z),y.defaultPrevented)||j&&j(y,z)},c=k||"";return e.jsx(tt,N({className:me(C.className,U.root,$,c),disabled:W,focusRipple:!p,ref:l,onClick:f,onChange:j,value:z,ownerState:O,"aria-pressed":F},G,{children:x}))}),oe=ot;function st(t){return ge("MuiToggleButtonGroup",t)}const rt=pe("MuiToggleButtonGroup",["root","selected","vertical","disabled","grouped","groupedHorizontal","groupedVertical","fullWidth","firstButton","lastButton","middleButton"]),i=rt,at=["children","className","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],lt=t=>{const{classes:o,orientation:l,fullWidth:d,disabled:b}=t,C={root:["root",l==="vertical"&&"vertical",d&&"fullWidth"],grouped:["grouped",`grouped${Q(l)}`,b&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return xe(C,st,o)},it=fe("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:l}=t;return[{[`& .${i.grouped}`]:o.grouped},{[`& .${i.grouped}`]:o[`grouped${Q(l.orientation)}`]},{[`& .${i.firstButton}`]:o.firstButton},{[`& .${i.lastButton}`]:o.lastButton},{[`& .${i.middleButton}`]:o.middleButton},o.root,l.orientation==="vertical"&&o.vertical,l.fullWidth&&o.fullWidth]}})(({ownerState:t,theme:o})=>N({display:"inline-flex",borderRadius:(o.vars||o).shape.borderRadius},t.orientation==="vertical"&&{flexDirection:"column"},t.fullWidth&&{width:"100%"},{[`& .${i.grouped}`]:N({},t.orientation==="horizontal"?{[`&.${i.selected} + .${i.grouped}.${i.selected}`]:{borderLeft:0,marginLeft:0}}:{[`&.${i.selected} + .${i.grouped}.${i.selected}`]:{borderTop:0,marginTop:0}})},t.orientation==="horizontal"?{[`& .${i.firstButton},& .${i.middleButton}`]:{borderTopRightRadius:0,borderBottomRightRadius:0},[`& .${i.lastButton},& .${i.middleButton}`]:{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0}}:{[`& .${i.firstButton},& .${i.middleButton}`]:{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`& .${i.lastButton},& .${i.middleButton}`]:{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0}},t.orientation==="horizontal"?{[`& .${i.lastButton}.${q.disabled},& .${i.middleButton}.${q.disabled}`]:{borderLeft:"1px solid transparent"}}:{[`& .${i.lastButton}.${q.disabled},& .${i.middleButton}.${q.disabled}`]:{borderTop:"1px solid transparent"}})),nt=s.forwardRef(function(o,l){const d=he({props:o,name:"MuiToggleButtonGroup"}),{children:b,className:C,color:k="standard",disabled:m=!1,exclusive:S=!1,fullWidth:x=!1,onChange:$,orientation:I="horizontal",size:W="medium",value:p}=d,M=se(d,at),j=N({},d,{disabled:m,fullWidth:x,orientation:I,size:W}),g=lt(j),F=s.useCallback((f,c)=>{if(!$)return;const y=p&&p.indexOf(c);let T;p&&y>=0?(T=p.slice(),T.splice(y,1)):T=p?p.concat(c):[c],$(f,T)},[$,p]),L=s.useCallback((f,c)=>{$&&$(f,p===c?null:c)},[$,p]),z=s.useMemo(()=>({className:g.grouped,onChange:S?L:F,value:p,size:W,fullWidth:x,color:k,disabled:m}),[g.grouped,S,L,F,p,W,x,k,m]),G=Ve(b),O=G.length,U=f=>{const c=f===0,y=f===O-1;return c&&y?"":c?g.firstButton:y?g.lastButton:g.middleButton};return e.jsx(it,N({role:"group",className:me(g.root,C),ref:l,ownerState:j},M,{children:e.jsx(be.Provider,{value:z,children:G.map((f,c)=>e.jsx(je.Provider,{value:U(c),children:f},c))})}))}),dt=nt,ct=ve(e.jsx("path",{d:"m9.17 6 2 2H20v10H4V6zM10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8z"}),"FolderOutlined"),ut=ve(e.jsx("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"SearchOutlined"),pt=()=>{const[t,o]=s.useState(""),[l,d]=s.useState(10),[b,C]=s.useState(0),[k,m]=s.useState(0),[S,x]=s.useState(1),[$,I]=s.useState(!1),[W,p]=s.useState(!1),[M,j]=s.useState([]),[g,F]=s.useState(null);s.useState(!1),s.useState(!1);const[L,z]=s.useState(!1),O=!Ce.useBreakpoint().lg,[U]=B.useForm(),[f]=B.useForm(),c=async r=>{const{data:n}=await V.custom({url:"",method:"post",meta:{operation:"deleteFolder",variables:{folderId:{value:parseInt(r.id.toString()),type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(R.remove(),R.error("Error deleting folder"),{data:null})).then(h=>h);if(n){R.success(n.message);const h=M.filter(u=>u.id!==r.id);j(h)}},y=async(r,n)=>{const{data:h}=await V.custom({url:"",method:"post",meta:{operation:"renameFolder",variables:{folderId:{value:parseInt(r.id.toString()),type:"Int",required:!0},name:{value:n,type:"String",required:!0}},fields:["success","message",{folder:["id","name","totalFiles","totalSize","canDelete","canEdit","canManage","isActive","created","updated",{author:ne}]}]}}).catch(()=>(R.remove(),R.error("Error renaming folder"),{data:null})).then(u=>u);if(h){R.success(h.message);const u=M.map(v=>v.id===r.id?h.folder:v);j(u)}},T=async(r,n="",h=25)=>{p(!0);const{data:u}=await V.custom({url:"",method:"get",meta:{operation:"myFolders",variables:{page:{value:r,type:"Int",required:!0},key:{value:n,type:"String",required:!1},pageSize:{value:h,type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","totalFiles","totalSize","canDelete","canEdit","canManage","isActive","created","updated",{author:ne}]}]}}).catch(v=>(R.remove(),R.error("Error getting files"),console.error(v),{data:null})).then(v=>v);u&&(C(u.total),m(u.pages),x(u.page),I(u.hasNext),j(u.results)),p(!1)},_=r=>{F(r)},ae=r=>{F(r)},J=r=>{F(r),z(!0)},X=[{title:"Name",dataIndex:"name",key:"name",render:(r,n)=>e.jsx(ze,{to:"/odrive/folder/"+n.id+"/"+n.name+"/files",children:e.jsx("a",{children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,cursor:"pointer",color:"#333",transition:"all 0.3s"},children:[e.jsx(ct,{}),r]})})})},{title:"Total Files",dataIndex:"totalFiles",key:"totalFiles"},{title:"Total Size",dataIndex:"totalSize",key:"totalSize"},{title:"",key:"action",render:(r,n)=>e.jsx("div",{style:{display:"flex",gap:10,justifyContent:"flex-end"},children:e.jsxs(qe,{gap:"small",wrap:"wrap",children:[e.jsx(ee,{title:"Share folder",children:e.jsx(P,{type:"primary",shape:"circle",icon:e.jsx(De,{}),size:"small",onClick:()=>{J(n)}})}),e.jsx(ee,{title:"Delete folder",children:e.jsx(ue,{title:"Are you sure you want to delete this folder?",description:"This action cannot be undone, all files in this folder will be deleted too.",onConfirm:()=>{c(n)},okText:"Yes",cancelText:"No",children:e.jsx(P,{type:"primary",shape:"circle",icon:e.jsx(we,{}),size:"small",onClick:()=>{_(n)}})})}),e.jsx(ee,{title:"Rename folder",children:e.jsx(ue,{title:"Are you sure you want to rename this folder?",description:e.jsx(B,{form:f,initialValues:{name:g==null?void 0:g.name},onFinish:h=>{console.log(h),y(n,h.name)},children:e.jsx(B.Item,{name:"name",children:e.jsx(Y,{placeholder:"Enter new folder name"})})}),onConfirm:()=>{f.submit()},okText:"Yes",cancelText:"No",onOpenChange:h=>{h||F(null)},children:e.jsx(P,{type:"primary",shape:"circle",icon:e.jsx(Re,{}),size:"small",onClick:()=>{ae(n)}})})})]})})}];return s.useEffect(()=>{T(S,t,l)},[]),e.jsxs("div",{style:{marginTop:5},children:[e.jsx("div",{style:{paddingTop:10,paddingBottom:0},children:e.jsx(re,{children:e.jsx(D,{span:O?24:12,children:e.jsx(B,{layout:"vertical",form:U,onFinish:r=>{o(r.key),T(1,r.key,l)},children:e.jsx(B.Item,{name:"key",children:e.jsx(Y,{size:"large",placeholder:"Search folder(s)...",prefix:e.jsx(ut,{}),autoComplete:"off",allowClear:!0})})})})})}),e.jsx(ke,{dataSource:M,columns:X,pagination:{total:b,current:S,pageSize:l,showSizeChanger:!0,onChange:(r,n)=>{T(r,t,n||25)},onShowSizeChange:(r,n)=>{T(r,t,n||25)}}}),e.jsx(K,{title:"Share File",open:L,onClose:r=>z(r),width:O?"100vw":"50vw",children:e.jsx(ye,{title:"Click Copy icon to copy share link",children:"sharing folder"})})]})},oo=t=>{const[o,l]=s.useState(!1),[d,b]=s.useState([]),[C,k]=s.useState(!0),[m,S]=s.useState(1),[x,$]=s.useState(t.min?5:20),[I]=B.useForm();B.useForm();const[W,p]=s.useState(0),[M,j]=s.useState(0),[g,F]=s.useState(""),[L,z]=s.useState(!0),{push:G}=Me(),[O,U]=s.useState(!1),[f,c]=s.useState(!1),[y,T]=s.useState(!1),[_,ae]=s.useState(),[J,X]=s.useState(!1),[r,n]=s.useState("files"),u=!Ce.useBreakpoint().lg,v=Oe(),le=()=>{U(!0)},ie=a=>{b([...a,...d])},E=async(a,w="",Se=25)=>{k(!0);const{data:A}=await V.custom({url:"",method:"get",meta:{operation:"files",variables:{page:{value:a,type:"Int",required:!0},key:{value:w,type:"String",required:!1},pageSize:{value:Se,type:"Int",required:!0},folder:{value:v.folder,type:"String",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:Ee}]}}).catch(Z=>(console.error(Z),R.error("Error getting files"),{data:null})).then(Z=>Z);A&&(j(A.total),p(A.pages),S(A.page),z(A.hasNext),b(A.results)),k(!1)},Fe=(a,w)=>{$(w),E(m,g,w)},Be=async()=>{const{data:a}=await V.custom({url:"",method:"get",meta:{operation:"odriveAuthorization",variables:{},fields:["auth"]}}).catch(()=>(R.error("Error getting Odrive Authorization"),{data:null})).then(w=>w);a&&l(a.auth.upload_files)};return s.useEffect(()=>{Be(),E(m,g,x),v.folder&&n("files")},[v]),e.jsxs(e.Fragment,{children:[!t.min&&e.jsx(_e,{offsetTop:63,children:e.jsxs(re,{children:[u&&e.jsxs(e.Fragment,{children:[e.jsxs(D,{span:24,style:{display:"flex",justifyContent:"flex-end",marginBottom:10},children:[e.jsx(P,{size:"large",icon:e.jsx(te,{}),disabled:!o,onClick:()=>le(),children:"Upload File(s)"}),e.jsx(P,{size:"large",icon:e.jsx(Ie,{}),disabled:!o,onClick:()=>c(!0),children:"Upload Folder"})]}),e.jsx(D,{span:24,children:e.jsx(ye,{bodyStyle:{paddingTop:10,paddingBottom:0},children:e.jsx(B,{layout:"vertical",form:I,onFinish:a=>{F(a.key),E(1,a.key,x)},children:e.jsx(B.Item,{name:"key",children:e.jsx(Y,{size:"large",placeholder:"Search file(s)...",prefix:e.jsx(de,{}),autoComplete:"off",allowClear:!0})})})})})]}),!u&&e.jsxs(e.Fragment,{children:[e.jsx(D,{span:12,children:!t.min&&e.jsx(ce,{sx:{display:"flex",justifyContent:"flex-start",alignItems:"center"},children:e.jsxs(dt,{color:"primary",value:v.folder?"folderOpen":r,exclusive:!0,onChange:(a,w)=>{w!==null&&(n(w),w==="files"&&E(1,g,x),v.folder&&G("/odrive"))},"aria-label":"Alignment",sx:{display:"flex",justifyContent:"flex-start",alignItems:"center"},children:[e.jsx(oe,{value:"files",sx:{"&.Mui-selected":{backgroundColor:"red",color:"white",fontWeight:"bold","&:hover":{backgroundColor:"red",color:"white",fontWeight:"bold"}},fontWeight:"bold"},children:"Files"}),e.jsx(oe,{value:"folders",sx:{"&.Mui-selected":{backgroundColor:"red",color:"white",fontWeight:"bold","&:hover":{backgroundColor:"red",color:"white",fontWeight:"bold"}},fontWeight:"bold"},children:"Folders"}),v.folder&&e.jsxs(oe,{disabled:!0,value:"folderOpen",sx:{"&.Mui-selected":{backgroundColor:"red",color:"white",fontWeight:"bold","&:hover":{backgroundColor:"red",color:"white",fontWeight:"bold"}},fontWeight:"bold"},children:[e.jsx(We,{}),e.jsx("span",{style:{marginLeft:"3px"},children:v.name})]})]})})}),r==="files"&&e.jsxs(D,{span:12,style:{display:"flex",justifyContent:"flex-end"},children:[e.jsx(P,{size:"large",icon:e.jsx(te,{}),disabled:!o,onClick:()=>le(),children:"Upload File(s)"}),e.jsx(P,{size:"large",icon:e.jsx(te,{}),disabled:!o,onClick:()=>c(!0),children:"Upload Folder"})]})]})]})}),r==="files"&&e.jsxs("div",{style:{marginTop:5},children:[!t.min&&e.jsx("div",{style:{paddingTop:10,paddingBottom:0},children:e.jsx(re,{children:e.jsx(D,{span:u?24:12,children:e.jsx(B,{layout:"vertical",form:I,onFinish:a=>{F(a.key),E(1,a.key,x)},children:e.jsx(B.Item,{name:"key",children:e.jsx(Y,{size:"large",placeholder:"Search file(s)...",prefix:e.jsx(de,{}),autoComplete:"off",allowClear:!0})})})})})}),e.jsx(ce,{sx:{maxHeight:"calc(100vh - 280px)",overflowY:"auto"},children:e.jsx("div",{style:{marginTop:t.min?0:20},children:e.jsx(Ae,{showDrive:!0,loading:C,data:d,min:t.min??!1})})}),!t.min&&e.jsx(e.Fragment,{children:!C&&d.length>0&&e.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:10,marginTop:20},children:e.jsx(Ue,{showSizeChanger:!0,showQuickJumper:!0,defaultCurrent:m,current:m,total:M,pageSize:x,onShowSizeChange:Fe,onChange:a=>E(a,g,x)})})})]}),r==="folders"&&e.jsx(e.Fragment,{children:e.jsx(pt,{})}),e.jsx(K,{title:"Uploading Files",open:O,onClose:a=>U(a),width:u?"100vw":"50vw",children:e.jsx(Le,{onFinish:a=>ie(a),mode:"file"})}),e.jsx(K,{title:"Uploading Folder",open:f,onClose:a=>c(a),width:u?"100vw":"50vw",children:e.jsx(Ge,{onFinish:a=>ie(a),mode:"file"})}),e.jsx(Pe,{title:"File Informations",anchor:"right",width:u?"100vw":"35vw",onClose:a=>T(a),open:y,children:e.jsx(Ne,{id:_==null?void 0:_.id})}),e.jsx(K,{title:"Share File",open:J,onClose:a=>X(a),width:u?"100vw":"50vw",children:e.jsx("span",{})})]})};export{oo as Files};
