import{r as t,c as o,l as b,aC as I,j as e,a as C,R as P,d as k,I as D,e as E,y as B,D as H,g as N,ec as q,_ as R,H as _,J as l,ee as L,ak as O}from"./index-0106a5d3.js";import{F as T}from"./file_item_component-21ae1875.js";import{F as z}from"./files_component-38587ccf.js";import"./index-31681144.js";import"./index-60f50d6f.js";import"./toConsumableArray-6d974341.js";import"./index.esm-6e69e73e.js";import"./iconBase-499693d3.js";import"./index-1f6ebd04.js";const G=J=>{const[n,c]=t.useState([]),[u,h]=t.useState(!0),[f,x]=t.useState(1),[M,g]=t.useState(0),[A,j]=t.useState(!0),[K,F]=t.useState(0),[S]=o.useForm();b();const[v,w]=t.useState(!1),[r,Q]=t.useState(),m=!I.useBreakpoint().lg,d=async(a,i="",p=!1)=>{const{data:s}=await N.custom({url:"",method:"get",meta:{operation:"publicFiles",variables:{page:{value:a,type:"Int",required:!0},key:{value:i,type:"String",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:q}]}}).catch(()=>(R.error("Error while fetching files"),{data:null})).then(y=>y);s&&(g(s.total),F(s.pages),j(s.hasNext),x(s.page),(i.length>0||i.length===0&&p)&&c(s.results),s.results.length>0&&!p&&c(n.concat(s.results))),h(!1)};return t.useEffect(()=>{d(f)},[]),u?e.jsx(e.Fragment,{children:e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(C,{})})}):e.jsxs(e.Fragment,{children:[e.jsx(P,{children:e.jsx(k,{span:m?24:20,children:e.jsx(o,{layout:"vertical",form:S,onFinish:a=>d(0,a.key,!0),children:e.jsx(o.Item,{name:"key",children:e.jsx(D,{size:"large",placeholder:"Search file(s)...",prefix:e.jsx(E,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx(B,{children:e.jsx(z,{showDrive:!1,loading:u,data:n,min:!1})}),e.jsx(H,{title:"File Informations",anchor:"right",width:m?"100vw":"35vw",onClose:a=>w(a),open:v,children:e.jsx(T,{id:r==null?void 0:r.id})})]})},ae=()=>(t.useEffect(()=>{document.title=_.system_name+": Public Files"},[]),e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{marginTop:10,marginBottom:10},children:e.jsxs(l,{children:[e.jsxs(l.Item,{children:[e.jsx(L,{}),e.jsx(O,{to:"/odrive",children:"Home"})]}),e.jsx(l.Item,{children:"Public Files"})]})}),e.jsx(G,{})]}));export{ae as DrivesPublicFilesPage};
