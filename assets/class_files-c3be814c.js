import{r as a,F as c,m as k,j as e,R as N,n as V,I as q,aP as E,S as L,aC as P,a as M,g as R,_ as z}from"./index-cdd95245.js";import{a as H,F as T}from"./file_item_component-0500fc39.js";import{D as _}from"./index-c62eae5d.js";import{f as A}from"./data_objects-b1ad9e08.js";import"./index-98d8c4e0.js";import"./index-6852aa15.js";import"./objectWithoutProperties-9bed54bb.js";import"./DialogWrap-870f1462.js";import"./index.esm-db701306.js";import"./iconBase-6117266a.js";import"./index-d6c3bfd0.js";import"./index-a087753e.js";import"./ReactTimeAgo-d90e120d.js";import"./memoize-one.esm-297ddbcb.js";const ie=l=>{const[o,n]=a.useState([]),[g,f]=a.useState(!0),[p,x]=a.useState(1),[F]=c.useForm(),[B,S]=a.useState(0),[O,I]=a.useState(0),[m,j]=a.useState(!0);k();const[w,h]=a.useState(!1),[d,v]=a.useState(),y=t=>{v(t),h(!0)},u=async(t,r="",s=!1)=>{if(m){const{data:i}=await R.custom({url:"",method:"get",meta:{operation:"darasaFiles",variables:{page:{value:parseInt(t.toString()),type:"Int",required:!0},key:{value:r,type:"String",required:!1},id:{value:parseInt(l.id===void 0?"0":l.id.toString()),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:A}]}}).catch(()=>(z.error("Error loading files"),{data:null})).then(D=>D);i&&(I(i.total),S(i.pages),x(i.page),j(i.hasNext),(r.length>0||r.length===0&&s)&&n(i.results),i.results.length>0&&!s&&n(o.concat(i.results))),f(!1)}},C=t=>{const r=o.map(s=>(s.id===t.id&&(s.imageVisible=!1),s));n(r)},b=t=>{const r=o.map(s=>(s.id===t.id&&(s.imageVisible=!0),s));n(r)};return a.useEffect(()=>{u(p)},[]),e.jsxs(e.Fragment,{children:[e.jsx(N,{children:e.jsx(V,{span:20,children:e.jsx(c,{layout:"vertical",form:F,onFinish:t=>u(0,t.key,!0),children:e.jsx(c.Item,{name:"key",children:e.jsx(q,{size:"large",placeholder:"Search file(s)...",prefix:e.jsx(E,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx("div",{id:"scrollableDiv",style:{height:"74vh",overflow:"auto"},children:e.jsxs(L,{spinning:g,children:[e.jsx(P,{itemLayout:"horizontal",dataSource:o,renderItem:t=>e.jsx(H,{item:t,min:l.min??!1,handleMakeImageNotVisible:C,handleMakeImageVisible:b,handleShowFileInfoDrawer:y})}),m&&e.jsx("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"},children:e.jsx(M,{type:"primary",onClick:()=>u(p+1),disabled:!m,children:"Load More"})})]})}),e.jsx(_,{title:"File Informations",anchor:"right",width:"35vw",onClose:t=>h(t),open:w,children:e.jsx(T,{id:d==null?void 0:d.id})})]})};export{ie as ClassFiles};
