import{r as a,aC as d,bL as k,aM as e,aG as L,ay as N,M as V,cF as M,ac as q,ae as E,bJ as P,bK as z}from"./index-bf2a13da.js";import{a as H,F as R}from"./file_item_component-73c3b0b7.js";import{D as T}from"./index-ffd78ccf.js";import{f as A}from"./data_objects-cbb08b34.js";import{L as B}from"./index-8b58fb29.js";import"./index-228c0bd2.js";import"./extends-5fe7dd43.js";import"./index-ef8f48da.js";import"./index-992621f0.js";import"./Skeleton-3baadd7d.js";import"./index-6044adfe.js";import"./index-ffbe86f1.js";import"./ActionButton-fe9a6812.js";import"./index-ada1152e.js";import"./index-60b6abd8.js";import"./transButton-ca5bbd65.js";import"./index.esm-542de13f.js";import"./iconBase-79271b73.js";import"./index-aff90bba.js";import"./index-3773303d.js";import"./Image-69bf0a0d.js";import"./DialogWrap-9ba665d9.js";import"./index-e25aa918.js";import"./fade-0b1d8e26.js";const he=l=>{const[o,n]=a.useState([]),[g,f]=a.useState(!0),[u,x]=a.useState(1),[F]=d.useForm(),[G,S]=a.useState(0),[J,I]=a.useState(0),[m,j]=a.useState(!0);k();const[w,h]=a.useState(!1),[p,v]=a.useState(),b=t=>{v(t),h(!0)},c=async(t,r="",s=!1)=>{if(m){const{data:i}=await P.custom({url:"",method:"get",meta:{operation:"darasaFiles",variables:{page:{value:parseInt(t.toString()),type:"Int",required:!0},key:{value:r,type:"String",required:!1},id:{value:parseInt(l.id===void 0?"0":l.id.toString()),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:A}]}}).catch(()=>(z.error("Error loading files"),{data:null})).then(D=>D);i&&(I(i.total),S(i.pages),x(i.page),j(i.hasNext),(r.length>0||r.length===0&&s)&&n(i.results),i.results.length>0&&!s&&n(o.concat(i.results))),f(!1)}},y=t=>{const r=o.map(s=>(s.id===t.id&&(s.imageVisible=!1),s));n(r)},C=t=>{const r=o.map(s=>(s.id===t.id&&(s.imageVisible=!0),s));n(r)};return a.useEffect(()=>{c(u)},[]),e.jsxs(e.Fragment,{children:[e.jsx(L,{children:e.jsx(N,{span:20,children:e.jsx(d,{layout:"vertical",form:F,onFinish:t=>c(0,t.key,!0),children:e.jsx(d.Item,{name:"key",children:e.jsx(V,{size:"large",placeholder:"Search file(s)...",prefix:e.jsx(M,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx("div",{id:"scrollableDiv",style:{height:"74vh",overflow:"auto"},children:e.jsxs(q,{spinning:g,children:[e.jsx(B,{itemLayout:"horizontal",dataSource:o,renderItem:t=>e.jsx(H,{item:t,min:l.min??!1,handleMakeImageNotVisible:y,handleMakeImageVisible:C,handleShowFileInfoDrawer:b})}),m&&e.jsx("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"},children:e.jsx(E,{type:"primary",onClick:()=>c(u+1),disabled:!m,children:"Load More"})})]})}),e.jsx(T,{title:"File Informations",anchor:"right",width:"35vw",onClose:t=>h(t),open:w,children:e.jsx(R,{id:p==null?void 0:p.id})})]})};export{he as ClassFiles};
