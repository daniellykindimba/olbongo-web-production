import{r,aT as d,c as k,j as e,aW as N,aP as V,a1 as L,a8 as q,av as E,g as P,_ as M}from"./index-7ac8fc92.js";import{a as T,F as z}from"./file_item_component-5ccb0e1e.js";import{D as H}from"./index-1974f517.js";import{f as O}from"./data_objects-63bc483e.js";import{L as R}from"./index-537ec24f.js";import{S as _}from"./SearchOutlined-a14f7475.js";import"./index-57b8dc71.js";import"./defineProperty-4de63b55.js";import"./pdf_document_viewer-ec055d52.js";import"./index-3cb2cad1.js";import"./SecurityScanOutlined-b065335a.js";import"./index-0a7ff63a.js";import"./Skeleton-a1e70c5e.js";import"./DotChartOutlined-f39c986e.js";import"./index-0e10b20d.js";import"./index-c1edda26.js";import"./index-03a70552.js";import"./ActionButton-c3339e52.js";import"./index-56844372.js";import"./EditOutlined-401a1613.js";import"./transButton-d550e0a4.js";import"./index-608513de.js";import"./index.esm-18be33b7.js";import"./index-76c73f07.js";import"./index-b5c26610.js";import"./Image-dae1d70e.js";import"./DialogWrap-b20e3245.js";import"./ZoomOutOutlined-4d40b3b9.js";import"./index-36dcb6e5.js";import"./fade-4eb0cb8a.js";import"./DeleteOutlined-044ab42c.js";import"./DeleteOutlined-25685737.js";import"./DownloadOutlined-7fe85224.js";import"./DownloadOutlined-6cd35f11.js";import"./InfoCircleOutlined-4fbda646.js";import"./MoreOutlined-4666e32c.js";import"./SaveOutlined-01c629e7.js";const De=l=>{const[a,n]=r.useState([]),[g,f]=r.useState(!0),[u,x]=r.useState(1),[F]=d.useForm(),[A,S]=r.useState(0),[B,I]=r.useState(0),[m,j]=r.useState(!0);k();const[v,h]=r.useState(!1),[p,w]=r.useState(),y=t=>{w(t),h(!0)},c=async(t,o="",i=!1)=>{if(m){const{data:s}=await P.custom({url:"",method:"get",meta:{operation:"darasaFiles",variables:{page:{value:parseInt(t.toString()),type:"Int",required:!0},key:{value:o,type:"String",required:!1},id:{value:parseInt(l.id===void 0?"0":l.id.toString()),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:O}]}}).catch(()=>(M.error("Error loading files"),{data:null})).then(D=>D);s&&(I(s.total),S(s.pages),x(s.page),j(s.hasNext),(o.length>0||o.length===0&&i)&&n(s.results),s.results.length>0&&!i&&n(a.concat(s.results))),f(!1)}},b=t=>{const o=a.map(i=>(i.id===t.id&&(i.imageVisible=!1),i));n(o)},C=t=>{const o=a.map(i=>(i.id===t.id&&(i.imageVisible=!0),i));n(o)};return r.useEffect(()=>{c(u)},[]),e.jsxs(e.Fragment,{children:[e.jsx(N,{children:e.jsx(V,{span:20,children:e.jsx(d,{layout:"vertical",form:F,onFinish:t=>c(0,t.key,!0),children:e.jsx(d.Item,{name:"key",children:e.jsx(L,{size:"large",placeholder:"Search file(s)...",prefix:e.jsx(_,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx("div",{id:"scrollableDiv",style:{height:"74vh",overflow:"auto"},children:e.jsxs(q,{spinning:g,children:[e.jsx(R,{itemLayout:"horizontal",dataSource:a,renderItem:t=>e.jsx(T,{item:t,min:l.min??!1,handleMakeImageNotVisible:b,handleMakeImageVisible:C,handleShowFileInfoDrawer:y})}),m&&e.jsx("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"},children:e.jsx(E,{type:"primary",onClick:()=>c(u+1),disabled:!m,children:"Load More"})})]})}),e.jsx(H,{title:"File Informations",anchor:"right",width:"35vw",onClose:t=>h(t),open:v,noOverFlow:!0,children:e.jsx(z,{id:p==null?void 0:p.id})})]})};export{De as ClassFiles};
