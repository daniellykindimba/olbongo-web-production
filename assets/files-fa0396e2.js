import{r,bF as et,bG as ot,bB as st,bH as ht,bS as A,k as j,br as N,b0 as V,iS as xt,bA as rt,aZ as e,bQ as at,bR as it,aP as U,c0 as Ct,aT as bt,aL as P,ap as I,d1 as _,iT as vt,Q as Z,cZ as K,cn as D,aR as Bt,bZ as E,b_ as J,b$ as Y}from"./index-29a13d6d.js";import{F as yt}from"./file_item_component-ae84b8e5.js";import{U as jt,a as $t}from"./upload_folder-4922bd1a.js";import{D as Ft}from"./index-e4ebc2f7.js";import{f as Tt}from"./data_objects-f2568388.js";import{F as Rt}from"./files_component-0fe1595d.js";import{G as zt}from"./index-90929aea.js";import{A as St}from"./index-da68382f.js";import{C as X}from"./index-0ef7ceee.js";import"./index-c0c98f05.js";import"./defineProperty-51517d30.js";import"./index-46bc3d4d.js";import"./index-7e1a0f34.js";import"./ActionButton-268e5a9a.js";import"./index-4f91ae23.js";import"./transButton-5228ed64.js";import"./index-47a1af4d.js";import"./index.esm-01373218.js";import"./iconBase-7a7975ff.js";import"./index-00135081.js";import"./index-ef8714bc.js";import"./index-6c675972.js";import"./Image-f22c960d.js";import"./DialogWrap-42f3b16e.js";import"./index-30e24ff4.js";import"./fade-1b8cb738.js";import"./index-6cbf32d2.js";import"./InfoCircleFilled-154bca47.js";import"./index-2f195e5a.js";import"./Upload-2a1c8c07.js";import"./index-7621bbd9.js";import"./useNotification-fd027c0f.js";import"./index-270b7e76.js";import"./localeData-08f640e8.js";import"./SinglePicker-b28271a7.js";import"./useMutateObserver-8b6b405f.js";import"./index-865d1987.js";import"./InputNumber-d88ed4da.js";import"./index-51322bfd.js";import"./index-c4c747cd.js";import"./Skeleton-15a49f54.js";function kt(t){return r.Children.toArray(t).filter(o=>r.isValidElement(o))}function wt(t){return ot("MuiToggleButton",t)}const Ut=et("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge","fullWidth"]),W=Ut,Wt=r.createContext({}),lt=Wt,Gt=r.createContext(void 0),nt=Gt;function Mt(t,o){return o===void 0||t===void 0?!1:Array.isArray(o)?o.indexOf(t)>=0:t===o}const Ot=["value"],Lt=["children","className","color","disabled","disableFocusRipple","fullWidth","onChange","onClick","selected","size","value"],Nt=t=>{const{classes:o,fullWidth:i,selected:l,disabled:h,size:g,color:C}=t,p={root:["root",l&&"selected",h&&"disabled",i&&"fullWidth",`size${A(g)}`,C]};return it(p,wt,o)},Pt=st(ht,{name:"MuiToggleButton",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:i}=t;return[o.root,o[`size${A(i.size)}`]]}})(({theme:t,ownerState:o})=>{let i=o.color==="standard"?t.palette.text.primary:t.palette[o.color].main,l;return t.vars&&(i=o.color==="standard"?t.vars.palette.text.primary:t.vars.palette[o.color].main,l=o.color==="standard"?t.vars.palette.text.primaryChannel:t.vars.palette[o.color].mainChannel),j({},t.typography.button,{borderRadius:(t.vars||t).shape.borderRadius,padding:11,border:`1px solid ${(t.vars||t).palette.divider}`,color:(t.vars||t).palette.action.active},o.fullWidth&&{width:"100%"},{[`&.${W.disabled}`]:{color:(t.vars||t).palette.action.disabled,border:`1px solid ${(t.vars||t).palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})`:N(t.palette.text.primary,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${W.selected}`]:{color:i,backgroundColor:t.vars?`rgba(${l} / ${t.vars.palette.action.selectedOpacity})`:N(i,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${l} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:N(i,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${l} / ${t.vars.palette.action.selectedOpacity})`:N(i,t.palette.action.selectedOpacity)}}}},o.size==="small"&&{padding:7,fontSize:t.typography.pxToRem(13)},o.size==="large"&&{padding:15,fontSize:t.typography.pxToRem(15)})}),It=r.forwardRef(function(o,i){const l=r.useContext(lt),{value:h}=l,g=V(l,Ot),C=r.useContext(nt),p=xt(j({},g,{selected:Mt(o.value,h)}),o),v=rt({props:p,name:"MuiToggleButton"}),{children:f,className:x,color:z="standard",disabled:$=!1,disableFocusRipple:n=!1,fullWidth:G=!1,onChange:B,onClick:u,selected:F,size:M="medium",value:T}=v,S=V(v,Lt),R=j({},v,{color:z,disabled:$,disableFocusRipple:n,fullWidth:G,size:M}),O=Nt(R),c=m=>{u&&(u(m,T),m.defaultPrevented)||B&&B(m,T)},d=C||"";return e.jsx(Pt,j({className:at(g.className,O.root,x,d),disabled:$,focusRipple:!n,ref:i,onClick:c,onChange:B,value:T,ownerState:R,"aria-pressed":F},S,{children:f}))}),tt=It;function At(t){return ot("MuiToggleButtonGroup",t)}const _t=et("MuiToggleButtonGroup",["root","selected","vertical","disabled","grouped","groupedHorizontal","groupedVertical","fullWidth","firstButton","lastButton","middleButton"]),a=_t,Dt=["children","className","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],Et=t=>{const{classes:o,orientation:i,fullWidth:l,disabled:h}=t,g={root:["root",i==="vertical"&&"vertical",l&&"fullWidth"],grouped:["grouped",`grouped${A(i)}`,h&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return it(g,At,o)},Vt=st("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:i}=t;return[{[`& .${a.grouped}`]:o.grouped},{[`& .${a.grouped}`]:o[`grouped${A(i.orientation)}`]},{[`& .${a.firstButton}`]:o.firstButton},{[`& .${a.lastButton}`]:o.lastButton},{[`& .${a.middleButton}`]:o.middleButton},o.root,i.orientation==="vertical"&&o.vertical,i.fullWidth&&o.fullWidth]}})(({ownerState:t,theme:o})=>j({display:"inline-flex",borderRadius:(o.vars||o).shape.borderRadius},t.orientation==="vertical"&&{flexDirection:"column"},t.fullWidth&&{width:"100%"},{[`& .${a.grouped}`]:j({},t.orientation==="horizontal"?{[`&.${a.selected} + .${a.grouped}.${a.selected}`]:{borderLeft:0,marginLeft:0}}:{[`&.${a.selected} + .${a.grouped}.${a.selected}`]:{borderTop:0,marginTop:0}})},t.orientation==="horizontal"?{[`& .${a.firstButton},& .${a.middleButton}`]:{borderTopRightRadius:0,borderBottomRightRadius:0},[`& .${a.lastButton},& .${a.middleButton}`]:{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0}}:{[`& .${a.firstButton},& .${a.middleButton}`]:{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`& .${a.lastButton},& .${a.middleButton}`]:{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0}},t.orientation==="horizontal"?{[`& .${a.lastButton}.${W.disabled},& .${a.middleButton}.${W.disabled}`]:{borderLeft:"1px solid transparent"}}:{[`& .${a.lastButton}.${W.disabled},& .${a.middleButton}.${W.disabled}`]:{borderTop:"1px solid transparent"}})),qt=r.forwardRef(function(o,i){const l=rt({props:o,name:"MuiToggleButtonGroup"}),{children:h,className:g,color:C="standard",disabled:p=!1,exclusive:v=!1,fullWidth:f=!1,onChange:x,orientation:z="horizontal",size:$="medium",value:n}=l,G=V(l,Dt),B=j({},l,{disabled:p,fullWidth:f,orientation:z,size:$}),u=Et(B),F=r.useCallback((c,d)=>{if(!x)return;const m=n&&n.indexOf(d);let y;n&&m>=0?(y=n.slice(),y.splice(m,1)):y=n?n.concat(d):[d],x(c,y)},[x,n]),M=r.useCallback((c,d)=>{x&&x(c,n===d?null:d)},[x,n]),T=r.useMemo(()=>({className:u.grouped,onChange:v?M:F,value:n,size:$,fullWidth:f,color:C,disabled:p}),[u.grouped,v,M,F,n,$,f,C,p]),S=kt(h),R=S.length,O=c=>{const d=c===0,m=c===R-1;return d&&m?"":d?u.firstButton:m?u.lastButton:u.middleButton};return e.jsx(Vt,j({role:"group",className:at(u.root,g),ref:i,ownerState:B},G,{children:e.jsx(lt.Provider,{value:T,children:S.map((c,d)=>e.jsx(nt.Provider,{value:O(d),children:c},d))})}))}),Ht=qt,Le=t=>{const[o,i]=r.useState(!1),[l,h]=r.useState([]),[g,C]=r.useState(!0),[p,v]=r.useState(1),[f,x]=r.useState(t.min?5:20),[z]=U.useForm();U.useForm();const[$,n]=r.useState(0),[G,B]=r.useState(0),[u,F]=r.useState(""),[M,T]=r.useState(!0);Ct();const[S,R]=r.useState(!1),[O,c]=r.useState(!1),[d,m]=r.useState(!1),[y,Qt]=r.useState(),[dt,ct]=r.useState(!1),[q,ut]=r.useState("files"),k=!zt.useBreakpoint().lg,H=()=>{R(!0)},Q=s=>{h([...s,...l])},L=async(s,b="",ft=25)=>{C(!0);const{data:w}=await J.custom({url:"",method:"get",meta:{operation:"files",variables:{page:{value:s,type:"Int",required:!0},key:{value:b,type:"String",required:!1},pageSize:{value:ft,type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:Tt}]}}).catch(()=>(Y.error("Error getting files"),{data:null})).then(mt=>mt);w&&(B(w.total),n(w.pages),v(w.page),T(w.hasNext),h(w.results)),C(!1)},pt=(s,b)=>{x(b),L(p,u,b)},gt=async()=>{const{data:s}=await J.custom({url:"",method:"get",meta:{operation:"odriveAuthorization",variables:{},fields:["auth"]}}).catch(()=>(Y.error("Error getting Odrive Authorization"),{data:null})).then(b=>b);s&&i(s.auth.upload_files)};return r.useEffect(()=>{gt(),L(p,u,f)},[]),e.jsxs(e.Fragment,{children:[!t.min&&e.jsx(St,{offsetTop:63,children:e.jsxs(bt,{children:[k&&e.jsxs(e.Fragment,{children:[e.jsxs(P,{span:24,style:{display:"flex",justifyContent:"flex-end",marginBottom:10},children:[e.jsx(I,{size:"large",icon:e.jsx(_,{}),disabled:!o,onClick:()=>H(),children:"Upload File(s)"}),e.jsx(I,{size:"large",icon:e.jsx(vt,{}),disabled:!o,onClick:()=>c(!0),children:"Upload Folder"})]}),e.jsx(P,{span:24,children:e.jsx(X,{bodyStyle:{paddingTop:10,paddingBottom:0},children:e.jsx(U,{layout:"vertical",form:z,onFinish:s=>{F(s.key),L(1,s.key,f)},children:e.jsx(U.Item,{name:"key",children:e.jsx(Z,{size:"large",placeholder:"Search file(s)...",prefix:e.jsx(K,{}),autoComplete:"off",allowClear:!0})})})})})]}),!k&&e.jsxs(e.Fragment,{children:[e.jsx(P,{span:12,children:e.jsx(X,{bodyStyle:{paddingTop:10,paddingBottom:0},children:e.jsx(U,{layout:"vertical",form:z,onFinish:s=>{F(s.key),L(1,s.key,f)},children:e.jsx(U.Item,{name:"key",children:e.jsx(Z,{size:"large",placeholder:"Search file(s)...",prefix:e.jsx(K,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsxs(P,{span:12,style:{display:"flex",justifyContent:"flex-end"},children:[e.jsx(I,{size:"large",icon:e.jsx(_,{}),disabled:!o,onClick:()=>H(),children:"Upload File(s)"}),e.jsx(I,{size:"large",icon:e.jsx(_,{}),disabled:!o,onClick:()=>c(!0),children:"Upload Folder"})]})]})]})}),!t.min&&e.jsxs(D,{sx:{display:"flex",justifyContent:"flex-start",alignItems:"center",marginBottom:2,marginTop:2},children:[e.jsx(D,{sx:{marginRight:2,fontSize:24},children:"Filter By:"}),e.jsxs(Ht,{color:"primary",value:q,exclusive:!0,onChange:(s,b)=>{b!==null&&ut(b)},"aria-label":"Alignment",sx:{display:"flex",justifyContent:"flex-start",alignItems:"center"},children:[e.jsx(tt,{value:"files",sx:{"&.Mui-selected":{backgroundColor:"red",color:"white",fontWeight:"bold","&:hover":{backgroundColor:"red",color:"white",fontWeight:"bold"}},fontWeight:"bold"},children:"Files"}),e.jsx(tt,{value:"folders",sx:{"&.Mui-selected":{backgroundColor:"red",color:"white",fontWeight:"bold","&:hover":{backgroundColor:"red",color:"white",fontWeight:"bold"}},fontWeight:"bold"},children:"Folders"})]})]}),q==="files"&&e.jsxs(e.Fragment,{children:[e.jsx(D,{sx:{maxHeight:"calc(100vh - 330px)",overflowY:"auto"},children:e.jsx("div",{style:{marginTop:t.min?0:20},children:e.jsx(Rt,{showDrive:!0,loading:g,data:l,min:t.min??!1})})}),!t.min&&e.jsx(e.Fragment,{children:!g&&e.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:10,marginTop:20},children:e.jsx(Bt,{showSizeChanger:!0,showQuickJumper:!0,defaultCurrent:p,current:p,total:G,pageSize:f,onShowSizeChange:pt,onChange:s=>L(s,u,f)})})})]}),e.jsx(E,{title:"Uploading Files",open:S,onClose:s=>R(s),width:k?"100vw":"50vw",children:e.jsx(jt,{onFinish:s=>Q(s),mode:"file"})}),e.jsx(E,{title:"Uploading Folder",open:O,onClose:s=>c(s),width:k?"100vw":"50vw",children:e.jsx($t,{onFinish:s=>Q(s),mode:"file"})}),e.jsx(Ft,{title:"File Informations",anchor:"right",width:k?"100vw":"35vw",onClose:s=>m(s),open:d,children:e.jsx(yt,{id:y==null?void 0:y.id})}),e.jsx(E,{title:"Share File",open:dt,onClose:s=>ct(s),width:k?"100vw":"50vw",children:e.jsx("span",{})})]})};export{Le as Files};
