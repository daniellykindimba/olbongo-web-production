import{r as a,aT as o,j as e,aW as S,aP as P,a1 as C,aZ as I,g as F,_ as E}from"./index-7ac8fc92.js";import{b as L}from"./data_objects-775efe39.js";import{S as N}from"./Skeleton-a1e70c5e.js";import{L as i}from"./index-537ec24f.js";import{A as T}from"./index-76c73f07.js";import{S as k}from"./SearchOutlined-a14f7475.js";import{E as q}from"./ExclamationCircleOutlined-919e7f99.js";import"./data_objects-63bc483e.js";import"./DotChartOutlined-f39c986e.js";import"./index-03a70552.js";const G=n=>{const[u,m]=a.useState([]),[l,x]=a.useState(!0),[c,d]=a.useState(1),[b,h]=a.useState(0),[w,p]=a.useState(0),[f,g]=a.useState(!0),[j]=o.useForm(),r=async(t,y="",O=!1)=>{const{data:s}=await F.custom({url:"",method:"get",meta:{operation:"darasaOrders",variables:{page:{value:t,type:"Int",required:!0},key:{value:y,type:"String",required:!1},darasaId:{value:parseInt(n.id===void 0?"0":n.id.toString()),type:"Int",required:!0},paid:{value:!0,type:"Boolean",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:L}]}}).catch(()=>(E.error("Error fetching Class Payments"),{data:null})).then(v=>v);s&&(p(s.total),h(s.pages),d(s.page),g(s.hasNext),m(s.results)),x(!1)};return a.useEffect(()=>{r(c)},[]),l?e.jsx(e.Fragment,{children:e.jsx(N,{loading:l,active:!0})}):e.jsxs(e.Fragment,{children:[e.jsx(S,{children:e.jsx(P,{span:12,children:e.jsx(o,{layout:"vertical",form:j,onFinish:t=>{d(0),r(0,t.key,!0)},children:e.jsx(o.Item,{name:"key",children:e.jsx(C,{size:"large",placeholder:"Search Payment(s)...",prefix:e.jsx(k,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsxs("div",{id:"scrollableDiv",style:{height:"74vh",overflow:"auto"},children:[e.jsx(i,{itemLayout:"horizontal",dataSource:u,locale:{emptyText:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(q,{style:{fontSize:20}})}),e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx("p",{children:"No Payments found"})})]})},renderItem:t=>e.jsx(i.Item,{children:e.jsx(i.Item.Meta,{avatar:e.jsx(T,{src:t.user.pic}),title:e.jsxs("a",{children:[t.user.fullName,e.jsxs(I,{color:"green",style:{marginLeft:10},children:[t.amount," TSH"]})]}),description:t.user.email})},t.id)}),f&&e.jsx("div",{style:{textAlign:"center",marginTop:12},children:e.jsx("button",{onClick:()=>{r(c+1)},children:"Load More"})})]})]})};export{G as ClassPayments};
