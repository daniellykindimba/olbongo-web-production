import{r,aT as d,c as k,j as e,aW as N,aP as V,a1 as L,a8 as q,av as E,g as P,_ as M}from"./index-3fd7f13b.js";import{a as T,F as z}from"./file_item_component-b8e44575.js";import{D as H}from"./index-8b6b3568.js";import{f as O}from"./data_objects-1d30f197.js";import{L as R}from"./index-f4e848a4.js";import{S as _}from"./SearchOutlined-ecf9dac0.js";import"./index-5b8abcf5.js";import"./defineProperty-66303050.js";import"./pdf_document_viewer-dbbb8b0a.js";import"./index-c712b740.js";import"./SecurityScanOutlined-fdb655cb.js";import"./index-04e1a8e1.js";import"./Skeleton-b232d1c4.js";import"./DotChartOutlined-f39c986e.js";import"./index-bb42f71b.js";import"./index-e19e8fa9.js";import"./index-da5d94d5.js";import"./ActionButton-48d88ba2.js";import"./index-fa873666.js";import"./EditOutlined-401a1613.js";import"./transButton-bc924565.js";import"./index-25197a99.js";import"./index.esm-b77115e9.js";import"./index-5066c649.js";import"./index-1334e9b9.js";import"./Image-cf12dd1b.js";import"./DialogWrap-00743730.js";import"./ZoomOutOutlined-4d40b3b9.js";import"./index-1de3813f.js";import"./fade-2bd0ea45.js";import"./DeleteOutlined-59a1eb9c.js";import"./DeleteOutlined-25685737.js";import"./DownloadOutlined-a253c871.js";import"./DownloadOutlined-6cd35f11.js";import"./InfoCircleOutlined-aed485c7.js";import"./MoreOutlined-dd08292b.js";import"./SaveOutlined-84f0579f.js";const De=l=>{const[a,n]=r.useState([]),[g,f]=r.useState(!0),[u,x]=r.useState(1),[F]=d.useForm(),[A,S]=r.useState(0),[B,I]=r.useState(0),[m,j]=r.useState(!0);k();const[v,h]=r.useState(!1),[p,w]=r.useState(),y=t=>{w(t),h(!0)},c=async(t,o="",i=!1)=>{if(m){const{data:s}=await P.custom({url:"",method:"get",meta:{operation:"darasaFiles",variables:{page:{value:parseInt(t.toString()),type:"Int",required:!0},key:{value:o,type:"String",required:!1},id:{value:parseInt(l.id===void 0?"0":l.id.toString()),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:O}]}}).catch(()=>(M.error("Error loading files"),{data:null})).then(D=>D);s&&(I(s.total),S(s.pages),x(s.page),j(s.hasNext),(o.length>0||o.length===0&&i)&&n(s.results),s.results.length>0&&!i&&n(a.concat(s.results))),f(!1)}},b=t=>{const o=a.map(i=>(i.id===t.id&&(i.imageVisible=!1),i));n(o)},C=t=>{const o=a.map(i=>(i.id===t.id&&(i.imageVisible=!0),i));n(o)};return r.useEffect(()=>{c(u)},[]),e.jsxs(e.Fragment,{children:[e.jsx(N,{children:e.jsx(V,{span:20,children:e.jsx(d,{layout:"vertical",form:F,onFinish:t=>c(0,t.key,!0),children:e.jsx(d.Item,{name:"key",children:e.jsx(L,{size:"large",placeholder:"Search file(s)...",prefix:e.jsx(_,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx("div",{id:"scrollableDiv",style:{height:"74vh",overflow:"auto"},children:e.jsxs(q,{spinning:g,children:[e.jsx(R,{itemLayout:"horizontal",dataSource:a,renderItem:t=>e.jsx(T,{item:t,min:l.min??!1,handleMakeImageNotVisible:b,handleMakeImageVisible:C,handleShowFileInfoDrawer:y})}),m&&e.jsx("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"},children:e.jsx(E,{type:"primary",onClick:()=>c(u+1),disabled:!m,children:"Load More"})})]})}),e.jsx(H,{title:"File Informations",anchor:"right",width:"35vw",onClose:t=>h(t),open:v,noOverFlow:!0,children:e.jsx(z,{id:p==null?void 0:p.id})})]})};export{De as ClassFiles};
