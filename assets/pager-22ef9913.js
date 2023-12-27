import{r as s,F as h,q as S,j as e,y as b,z as d,C as y,V as f,W as g,N as M,I as J,S as R,J as q,K as O,ab as K,a6 as U,B as T,a9 as Y,x as V,bL as W}from"./index-e1c2324f.js";import{T as H}from"./Table-89b121d5.js";import{B as m}from"./Breadcrumb-86dedde2.js";import"./index-83554738.js";const G=c=>{const[u,x]=s.useState(!1),[n,v]=s.useState(),[_,C]=s.useState(0),[z,P]=s.useState(0),[I,A]=s.useState(1),[B,L]=s.useState(25),[N,E]=s.useState(""),[D,p]=s.useState([]);s.useState();const[F]=h.useForm(),{push:a}=S(),t=async(i,l="",j=25)=>{x(!0);const{data:k}=await q.custom({url:"",method:"get",meta:{operation:"bills",variables:{page:{value:i,type:"Int",required:!0},key:{value:l,type:"String",required:!1},pageSize:{value:j,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","billNumber","billAmount","billPayerName","billPayerPhone","billPayerEmail","paymentCallbackUrl","paymentStatus","paymentStatusDisplay","isActive","created","updated","canDelete","canManage"]}]}}).catch(Q=>(O.error("Error getting Bills"),{data:null})).then(Q=>Q);k&&(C(k.total),P(k.pages),A(k.page),p(k.results)),x(!1)},r=async()=>{x(!0);const{data:i}=await q.custom({url:"",method:"get",meta:{operation:"opayAnalytics",fields:["analytics"]}}).catch(l=>(O.error("Error fetching analytics"),{data:null})).then(l=>l);i&&v(i.analytics),x(!1)},o=[{title:"Bill#",dataIndex:"billNumber",fixed:!0,render:(i,l,j)=>e.jsx("span",{children:e.jsx("a",{children:l.billNumber})})},{title:"Customer Name",dataIndex:"billPayerName",fixed:!0,render:(i,l,j)=>e.jsx("span",{children:l.billPayerName})},{title:e.jsx(e.Fragment,{children:e.jsx("span",{style:{float:"right"},children:"Bill Amount"})}),dataIndex:"billAmount",fixed:!0,render:(i,l,j)=>e.jsx("span",{style:{float:"right"},children:new Intl.NumberFormat("en-US",{style:"currency",currency:"Tsh"}).format(l.billAmount)})},{title:"Created",dataIndex:"created",render:(i,l,j)=>e.jsx(e.Fragment,{children:e.jsx("span",{children:e.jsx(K,{date:new Date(l.created)})})})},{title:"Status",dataIndex:"isActive",render:(i,l,j)=>e.jsx("a",{children:l!=null&&l.isActive?e.jsx("span",{style:{color:"green"},children:"Active"}):e.jsx("span",{style:{color:"red"},children:"Inactive"})})},{title:"",dataIndex:"action",render:(i,l,j)=>e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(U,{title:"Are you sure to delete this bill?",onConfirm:()=>{},onCancel:()=>{},okText:"Yes",cancelText:"No",disabled:!(l!=null&&l.canDelete),overlayStyle:{zIndex:9999},children:e.jsx(T,{icon:e.jsx(Y,{}),disabled:!(l!=null&&l.canDelete)})})})}];return s.useEffect(()=>{r(),t(I,"",25)},[c.randKey]),e.jsxs(e.Fragment,{children:[e.jsxs(b,{style:{display:"flex",justifyContent:"flex-start"},children:[e.jsx(d,{span:3,children:e.jsx("a",{onClick:()=>a("/opay/bills"),children:e.jsx(y,{children:e.jsx(f,{title:"Bills",value:n==null?void 0:n.bills,precision:0,valueStyle:{color:"#3f8600",fontSize:"16px"},prefix:e.jsx(g,{})})})})}),e.jsx(d,{span:3,children:e.jsx("a",{onClick:()=>a("/opay/bills"),children:e.jsx(y,{children:e.jsx(f,{title:"Paid Bills",value:n==null?void 0:n.paid_bills,precision:0,valueStyle:{color:"#3f8600",fontSize:"16px"},prefix:e.jsx(g,{})})})})}),e.jsx(d,{span:3,children:e.jsx("a",{onClick:()=>a("/opay/bills"),children:e.jsx(y,{children:e.jsx(f,{title:"Unpaid Bills",value:n==null?void 0:n.unpaid_bills,precision:0,valueStyle:{color:"#3f8600",fontSize:"16px"},prefix:e.jsx(g,{})})})})}),e.jsx(d,{span:3,children:e.jsx("a",{onClick:()=>a("/opay/bills/payments"),children:e.jsx(y,{children:e.jsx(f,{title:"Payments",value:n==null?void 0:n.payments,precision:0,valueStyle:{color:"#3f8600",fontSize:"16px"},prefix:e.jsx(g,{})})})})}),e.jsx(d,{span:3,children:e.jsx("a",{children:e.jsx(y,{children:e.jsx(f,{title:"Bills Amount",value:n==null?void 0:n.bills_amount,precision:2,valueStyle:{color:"#3f8600",fontSize:"16px"},prefix:e.jsx(g,{})})})})}),e.jsx(d,{span:3,children:e.jsx("a",{children:e.jsx(y,{children:e.jsx(f,{title:"Paid Bills Amount",value:n==null?void 0:n.paid_bills_amount,precision:2,valueStyle:{color:"#3f8600",fontSize:"16px"},prefix:e.jsx(g,{})})})})}),e.jsx(d,{span:3,children:e.jsx("a",{children:e.jsx(y,{children:e.jsx(f,{title:"Unpaid Bills Amount",value:n==null?void 0:n.unpaid_bills_amount,precision:2,valueStyle:{color:"#3f8600",fontSize:"16px"},prefix:e.jsx(g,{})})})})})]}),e.jsx(M,{offsetTop:75,children:e.jsx(b,{style:{display:"flex",justifyContent:"center",marginTop:20},children:e.jsx(d,{span:10,children:e.jsx(h,{layout:"vertical",form:F,onFinish:i=>{t(1,i.key,25)},children:e.jsx(h.Item,{name:"key",children:e.jsx(J,{size:"large",placeholder:"Search Bill(s)...",prefix:e.jsx(R,{}),autoComplete:"off",allowClear:!0})})})})})}),e.jsx(b,{children:e.jsx(d,{span:24,children:e.jsx(H,{loading:u,columns:o,dataSource:D,pagination:{onChange:(i,l)=>{L(l),t(i,N,l)},total:_,pageSize:B,position:["bottomCenter"],showQuickJumper:!1},scroll:{x:!0}})})})]})},X=()=>{const{push:c}=S();return e.jsxs(e.Fragment,{children:[e.jsxs(m,{children:[e.jsx(m.Item,{children:e.jsx("a",{onClick:()=>c("/opay"),children:"Home"})}),e.jsx(m.Item,{children:"Dashboard"})]}),e.jsx(G,{})]})},Z=()=>e.jsx(e.Fragment,{children:e.jsx(X,{})}),$=c=>{const[u,x]=s.useState(!1),[n,v]=s.useState(0),[_,C]=s.useState(0),[z,P]=s.useState(1),[I,A]=s.useState(25),[B,L]=s.useState(""),[N,E]=s.useState([]);s.useState();const[D]=h.useForm();S();const p=async(a,t="",r=25)=>{x(!0);const{data:o}=await q.custom({url:"",method:"get",meta:{operation:"bills",variables:{page:{value:a,type:"Int",required:!0},key:{value:t,type:"String",required:!1},pageSize:{value:r,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","billNumber","billAmount","billPayerName","billPayerPhone","billPayerEmail","paymentCallbackUrl","paymentStatus","paymentStatusDisplay","isActive","created","updated","canDelete","canManage"]}]}}).catch(i=>(O.error("Error getting Bills"),{data:null})).then(i=>i);o&&(v(o.total),C(o.pages),P(o.page),E(o.results)),x(!1)},F=[{title:"Bill#",dataIndex:"billNumber",fixed:!0,render:(a,t,r)=>e.jsx("span",{children:e.jsx("a",{children:t.billNumber})})},{title:"Customer Name",dataIndex:"billPayerName",fixed:!0,render:(a,t,r)=>e.jsx("span",{children:t.billPayerName})},{title:e.jsx(e.Fragment,{children:e.jsx("span",{style:{float:"right"},children:"Bill Amount"})}),dataIndex:"billAmount",fixed:!0,render:(a,t,r)=>e.jsx("span",{style:{float:"right"},children:new Intl.NumberFormat("en-US",{style:"currency",currency:"Tsh"}).format(t.billAmount)})},{title:"Created",dataIndex:"created",render:(a,t,r)=>e.jsx(e.Fragment,{children:e.jsx("span",{children:e.jsx(K,{date:new Date(t.created)})})})},{title:"Status",dataIndex:"isActive",render:(a,t,r)=>e.jsx("a",{children:t!=null&&t.isActive?e.jsx("span",{style:{color:"green"},children:"Active"}):e.jsx("span",{style:{color:"red"},children:"Inactive"})})},{title:"",dataIndex:"action",render:(a,t,r)=>e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(U,{title:"Are you sure to delete this bill?",onConfirm:()=>{},onCancel:()=>{},okText:"Yes",cancelText:"No",disabled:!(t!=null&&t.canDelete),overlayStyle:{zIndex:9999},children:e.jsx(T,{icon:e.jsx(Y,{}),disabled:!(t!=null&&t.canDelete)})})})}];return s.useEffect(()=>{p(z,"",25)},[c.randKey]),e.jsxs(e.Fragment,{children:[e.jsx(M,{offsetTop:75,children:e.jsx(b,{style:{display:"flex",justifyContent:"center",marginTop:20},children:e.jsx(d,{span:10,children:e.jsx(h,{layout:"vertical",form:D,onFinish:a=>{p(1,a.key,25)},children:e.jsx(h.Item,{name:"key",children:e.jsx(J,{size:"large",placeholder:"Search Bill(s)...",prefix:e.jsx(R,{}),autoComplete:"off",allowClear:!0})})})})})}),e.jsx(b,{children:e.jsx(d,{span:24,children:e.jsx(H,{loading:u,columns:F,dataSource:N,pagination:{onChange:(a,t)=>{A(t),p(a,B,t)},total:n,pageSize:I,position:["bottomCenter"],showQuickJumper:!1},scroll:{x:!0}})})})]})},w=()=>{const{push:c}=S();return e.jsxs(e.Fragment,{children:[e.jsxs(m,{children:[e.jsx(m.Item,{children:e.jsx("a",{onClick:()=>c("/opay"),children:"Home"})}),e.jsx(m.Item,{children:"Bills"})]}),e.jsx($,{})]})},ee=()=>e.jsx(e.Fragment,{children:e.jsx(w,{})}),te=c=>{const[u,x]=s.useState(!1),[n,v]=s.useState(0),[_,C]=s.useState(0),[z,P]=s.useState(1),[I,A]=s.useState(25),[B,L]=s.useState(""),[N,E]=s.useState([]);s.useState();const[D]=h.useForm();S();const p=async(a,t="",r=25)=>{x(!0);const{data:o}=await q.custom({url:"",method:"get",meta:{operation:"billsPayments",variables:{page:{value:a,type:"Int",required:!0},key:{value:t,type:"String",required:!1},pageSize:{value:r,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id",{bill:["id","billNumber","billAmount","billPayerName","billPayerPhone","billPayerEmail","paymentCallbackUrl","paymentStatus","paymentStatusDisplay","isActive","created","updated","canDelete","canManage"]},"amount","paymentDate","isActive","created","updated","canDelete","canManage"]}]}}).catch(i=>(O.error("Error getting Bills Payments"),{data:null})).then(i=>i);o&&(v(o.total),C(o.pages),P(o.page),E(o.results)),x(!1)},F=[{title:"Bill#",dataIndex:"billNumber",fixed:!0,render:(a,t,r)=>e.jsx("span",{children:e.jsx("a",{children:t.bill.billNumber})})},{title:"Customer Name",dataIndex:"billPayerName",fixed:!0,render:(a,t,r)=>e.jsx("span",{children:e.jsx("a",{children:t.bill.billPayerName})})},{title:"Bill Amount",dataIndex:"billAmount",fixed:!0,render:(a,t,r)=>e.jsx("span",{children:e.jsx("a",{children:t.bill.billAmount})})},{title:"Paid Amount",dataIndex:"amount",fixed:!0,render:(a,t,r)=>e.jsx("span",{children:e.jsx("a",{children:t.amount})})},{title:"Payment Date",dataIndex:"paymentDate",render:(a,t,r)=>e.jsx(e.Fragment,{children:e.jsx("span",{children:e.jsx(K,{date:new Date(t.paymentDate)})})})},{title:"Created",dataIndex:"created",render:(a,t,r)=>e.jsx(e.Fragment,{children:e.jsx("span",{children:e.jsx(K,{date:new Date(t.created)})})})},{title:"Status",dataIndex:"isActive",render:(a,t,r)=>e.jsx("a",{children:t!=null&&t.isActive?e.jsx("span",{style:{color:"green"},children:"Active"}):e.jsx("span",{style:{color:"red"},children:"Inactive"})})},{title:"",dataIndex:"action",render:(a,t,r)=>e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end"},children:[e.jsx(U,{title:"Synchronize",placement:"left",onConfirm:()=>{},onCancel:()=>{},okText:"Yes",cancelText:"No",disabled:!(t!=null&&t.canManage),overlayStyle:{zIndex:9999},children:e.jsx(V,{title:"Synchronize Payment",placement:"top",color:"green",children:e.jsx(T,{icon:e.jsx(W,{}),disabled:!(t!=null&&t.canManage)})})}),e.jsx(U,{title:"Are you sure to delete this Payment?",onConfirm:()=>{},onCancel:()=>{},okText:"Yes",cancelText:"No",disabled:!(t!=null&&t.canDelete),overlayStyle:{zIndex:9999},children:e.jsx(T,{icon:e.jsx(Y,{}),disabled:!(t!=null&&t.canDelete)})})]})}];return s.useEffect(()=>{p(z,"",25)},[c.randKey]),e.jsxs(e.Fragment,{children:[e.jsx(M,{offsetTop:75,children:e.jsxs(b,{style:{display:"flex",justifyContent:"center",marginTop:20},children:[e.jsx(d,{span:10,children:e.jsx(h,{layout:"vertical",form:D,onFinish:a=>{p(1,a.key,25)},children:e.jsx(h.Item,{name:"key",children:e.jsx(J,{size:"large",placeholder:"Search Bill(s)...",prefix:e.jsx(R,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(d,{span:14,style:{display:"flex",justifyContent:"end"},children:e.jsx(T,{size:"large",children:"Sync CDR"})})]})}),e.jsx(b,{children:e.jsx(d,{span:24,children:e.jsx(H,{loading:u,columns:F,dataSource:N,pagination:{onChange:(a,t)=>{A(t),p(a,B,t)},total:n,pageSize:I,position:["bottomCenter"],showQuickJumper:!1},scroll:{x:!0}})})})]})},ae=()=>{const{push:c}=S();return e.jsxs(e.Fragment,{children:[e.jsxs(m,{children:[e.jsx(m.Item,{children:e.jsx("a",{onClick:()=>c("/opay"),children:"Home"})}),e.jsx(m.Item,{children:"Payments"})]}),e.jsx(te,{})]})},se=()=>e.jsx(e.Fragment,{children:e.jsx(ae,{})}),de=c=>{const{page:u}=c;return u==="BillsPaymentsPage"?e.jsx(se,{}):u==="BillsPage"?e.jsx(ee,{}):u==="OpayDashboardPage"?e.jsx(Z,{}):e.jsx("div",{children:"Page not found ..."})};export{de as OpayPages};
