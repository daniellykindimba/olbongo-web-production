import{r as a,aO as i,aY as e,aS as S,aK as C,Q as I,cY as P,c$ as F,aV as b,bZ as L,b_ as N}from"./index-3b25761c.js";import{b as k}from"./data_objects-8a5fc783.js";import{S as q}from"./Skeleton-f7cf79cd.js";import{L as n}from"./index-086e93a6.js";import{A as E}from"./index-bba2b9d5.js";import"./data_objects-ddf513ee.js";import"./index-3c7b2ccc.js";const _=o=>{const[u,m]=a.useState([]),[l,x]=a.useState(!0),[c,d]=a.useState(1),[O,h]=a.useState(0),[T,p]=a.useState(0),[f,g]=a.useState(!0),[j]=i.useForm(),r=async(t,y="",w=!1)=>{const{data:s}=await L.custom({url:"",method:"get",meta:{operation:"darasaOrders",variables:{page:{value:t,type:"Int",required:!0},key:{value:y,type:"String",required:!1},darasaId:{value:parseInt(o.id===void 0?"0":o.id.toString()),type:"Int",required:!0},paid:{value:!0,type:"Boolean",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:k}]}}).catch(()=>(N.error("Error fetching Class Payments"),{data:null})).then(v=>v);s&&(p(s.total),h(s.pages),d(s.page),g(s.hasNext),m(s.results)),x(!1)};return a.useEffect(()=>{r(c)},[]),l?e.jsx(e.Fragment,{children:e.jsx(q,{loading:l,active:!0})}):e.jsxs(e.Fragment,{children:[e.jsx(S,{children:e.jsx(C,{span:12,children:e.jsx(i,{layout:"vertical",form:j,onFinish:t=>{d(0),r(0,t.key,!0)},children:e.jsx(i.Item,{name:"key",children:e.jsx(I,{size:"large",placeholder:"Search Payment(s)...",prefix:e.jsx(P,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsxs("div",{id:"scrollableDiv",style:{height:"74vh",overflow:"auto"},children:[e.jsx(n,{itemLayout:"horizontal",dataSource:u,locale:{emptyText:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(F,{style:{fontSize:20}})}),e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx("p",{children:"No Payments found"})})]})},renderItem:t=>e.jsx(n.Item,{children:e.jsx(n.Item.Meta,{avatar:e.jsx(E,{src:t.user.pic}),title:e.jsxs("a",{children:[t.user.fullName,e.jsxs(b,{color:"green",style:{marginLeft:10},children:[t.amount," TSH"]})]}),description:t.user.email})},t.id)}),f&&e.jsx("div",{style:{textAlign:"center",marginTop:12},children:e.jsx("button",{onClick:()=>{r(c+1)},children:"Load More"})})]})]})};export{_ as ClassPayments};
