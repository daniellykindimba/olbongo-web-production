import{r as t,aT as h,j as e,aY as O,g as S,_ as b,aW as D,aP as y,av as f,c as P,a1 as T,ce as q,aZ as E,cl as M}from"./index-50292268.js";import{b as A,o as L}from"./data_objects-e33fab1e.js";import{D as z}from"./index-9d5dd287.js";import{S as V}from"./index-d81a968a.js";import{S as B}from"./Skeleton-0ebe64c3.js";import{L as j}from"./index-3635f765.js";import{A as H}from"./index-c859586b.js";import{S as K}from"./SearchOutlined-95469259.js";import{E as R}from"./ExclamationCircleOutlined-e4f18f89.js";import"./data_objects-f8a538ae.js";import"./DotChartOutlined-f39c986e.js";import"./index-13223a6d.js";const _=s=>{const[o,n]=t.useState(!0),[i,p]=t.useState([]);h.useForm();const u=async(d,r="",C=!1)=>{n(!0);const{data:m}=await S.custom({url:"",method:"get",meta:{operation:"darasaOrders",variables:{page:{value:d,type:"Int",required:!0},key:{value:r,type:"String",required:!1},darasaId:{value:parseInt(s.darasa===void 0?"0":s.darasa.toString()),type:"Int",required:!0},paid:{value:!0,type:"Boolean",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:A}]}}).catch(()=>(b.error("Error getting Orders"),{data:null})).then(x=>x);n(!1),m&&p(m.results)},c=[{title:"Student Name",dataIndex:"studentName",key:"studentName",rebnder:(d,r)=>e.jsx(e.Fragment,{children:r.darasa.user.fullName})},{title:"Receipt Number",dataIndex:"receiptNumber",key:"receiptNumber",render:(d,r)=>e.jsx(e.Fragment,{children:r.receiptNumber})},{title:"Amount",dataIndex:"amount",key:"amount",render:(d,r)=>e.jsx(e.Fragment,{children:r.amount})}];return t.useEffect(()=>{u(1)},[s.randKey]),e.jsx(e.Fragment,{children:e.jsx(O,{loading:o,dataSource:i,columns:c,locale:{emptyText:"No Payments yet"}})})},W=s=>{const[o,n]=t.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx(D,{children:e.jsxs(y,{span:24,children:[e.jsx(V,{title:"Total Amount to be Disbursed (Approximate)",value:112893,precision:2}),e.jsx(f,{style:{marginTop:16},type:"primary",onClick:()=>n(!0),children:"View Details"})]})})}),e.jsx(z,{title:"Disbursement Details",anchor:"right",width:"40vw",onClose:i=>n(i),open:o,noOverFlow:!0,children:e.jsx(_,{darasa:s.darasa,randKey:Math.random()})})]})},ne=s=>{const[o,n]=t.useState([]),[i,p]=t.useState(!0),[u,c]=t.useState(1),[d,r]=t.useState(0),[C,m]=t.useState(0),[x,I]=t.useState(!0),[N]=h.useForm();P();const[w,v]=t.useState(!1),g=async(a,F="",Y=!1)=>{const{data:l}=await S.custom({url:"",method:"get",meta:{operation:"darasaOrderDisbursements",variables:{page:{value:a,type:"Int",required:!0},key:{value:F,type:"String",required:!1},darasaId:{value:parseInt(s.id===void 0?"0":s.id.toString()),type:"Int",required:!0},paid:{value:!0,type:"Boolean",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:L}]}}).catch(()=>(b.error("Error fetching Class Disbursements"),{data:null})).then(k=>k);l&&(m(l.total),r(l.pages),c(l.page),I(l.hasNext),n(l.results)),p(!1)};return t.useEffect(()=>{g(u)},[]),i?e.jsx(e.Fragment,{children:e.jsx(B,{loading:i,active:!0})}):e.jsxs(e.Fragment,{children:[e.jsxs(D,{children:[e.jsx(y,{span:12,children:e.jsx(h,{layout:"vertical",form:N,onFinish:a=>{c(0),g(0,a.key,!0)},children:e.jsx(h.Item,{name:"key",children:e.jsx(T,{size:"large",placeholder:"Search Payment(s)...",prefix:e.jsx(K,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(y,{span:12,style:{textAlign:"right"},children:e.jsx(f,{size:"large",disabled:!s.canManage,icon:e.jsx(q,{}),onClick:()=>v(!0),children:"Create Disbursement"})})]}),e.jsxs("div",{id:"scrollableDiv",style:{height:"74vh",overflow:"auto"},children:[e.jsx(j,{itemLayout:"horizontal",dataSource:o,locale:{emptyText:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(R,{style:{fontSize:20}})}),e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx("p",{children:"No Disbursement found"})})]})},renderItem:a=>e.jsxs(j.Item,{children:[e.jsx(j.Item.Meta,{avatar:e.jsx(H,{src:a.user.pic}),title:e.jsxs("a",{children:[a.user.fullName,e.jsxs(E,{color:"green",style:{marginLeft:10},children:[a.amount," TSH"]})]}),description:a.user.email}),"first"]},a.id)}),x&&e.jsx("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"},children:e.jsx(f,{onClick:()=>g(u+1),disabled:!x,children:"Load More"})})]}),e.jsx(M,{title:"Create Disbursement",open:w,width:"50vw",onClose:a=>v(a),children:e.jsx(W,{darasa:s.id,randKey:Math.random()})})]})};export{ne as ClassDisbursement};
