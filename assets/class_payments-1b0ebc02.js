import{r as s,c as n,j as e,f as S,R as I,d as C,I as P,e as F,L as l,aj as L,A as N,b as k,g as q,aF as E,_ as T}from"./index-c92f9f6b.js";const A=i=>{const[u,x]=s.useState([]),[o,h]=s.useState(!0),[c,d]=s.useState(1),[b,m]=s.useState(0),[w,j]=s.useState(0),[g,f]=s.useState(!0),[p]=n.useForm(),r=async(t,y="",O=!1)=>{const{data:a}=await q.custom({url:"",method:"get",meta:{operation:"darasaOrders",variables:{page:{value:t,type:"Int",required:!0},key:{value:y,type:"String",required:!1},darasaId:{value:parseInt(i.id===void 0?"0":i.id.toString()),type:"Int",required:!0},paid:{value:!0,type:"Boolean",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:E}]}}).catch(()=>(T.error("Error fetching Class Payments"),{data:null})).then(v=>v);a&&(j(a.total),m(a.pages),d(a.page),f(a.hasNext),x(a.results)),h(!1)};return s.useEffect(()=>{r(c)},[]),o?e.jsx(e.Fragment,{children:e.jsx(S,{loading:o,active:!0})}):e.jsxs(e.Fragment,{children:[e.jsx(I,{children:e.jsx(C,{span:12,children:e.jsx(n,{layout:"vertical",form:p,onFinish:t=>{d(0),r(0,t.key,!0)},children:e.jsx(n.Item,{name:"key",children:e.jsx(P,{size:"large",placeholder:"Search Payment(s)...",prefix:e.jsx(F,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsxs("div",{id:"scrollableDiv",style:{height:"74vh",overflow:"auto"},children:[e.jsx(l,{itemLayout:"horizontal",dataSource:u,locale:{emptyText:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(L,{style:{fontSize:20}})}),e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx("p",{children:"No Payments found"})})]})},renderItem:t=>e.jsx(l.Item,{children:e.jsx(l.Item.Meta,{avatar:e.jsx(N,{src:t.user.pic}),title:e.jsxs("a",{children:[t.user.fullName,e.jsxs(k,{color:"green",style:{marginLeft:10},children:[t.amount," TSH"]})]}),description:t.user.email})},t.id)}),g&&e.jsx("div",{style:{textAlign:"center",marginTop:12},children:e.jsx("button",{onClick:()=>{r(c+1)},children:"Load More"})})]})]})};export{A as ClassPayments};
