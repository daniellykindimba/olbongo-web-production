import{r as a,aT as h,c as S,j as e,aW as b,aP as c,a1 as U,aY as M,g as _,_ as O,av as T,co as Y,cM as H,aN as x,af as G}from"./index-3ee95507.js";import{C as y}from"./index-94377945.js";import{S as f}from"./index-69874f42.js";import{A as J}from"./index-76461af0.js";import{P as q}from"./index-83878f15.js";import{A as g}from"./ArrowUpOutlined-0ef307ed.js";import{S as Q}from"./SearchOutlined-57b520e5.js";import{D as R}from"./DeleteOutlined-1abe9ead.js";import{S as V}from"./SyncOutlined-41989c6b.js";import"./Skeleton-188a3216.js";import"./DotChartOutlined-f39c986e.js";import"./index-422314c8.js";import"./index-95dcb07d.js";import"./ActionButton-ec6aa8b6.js";import"./DeleteOutlined-25685737.js";const X=d=>{const[m,u]=a.useState(!1),[n,v]=a.useState(),[L,C]=a.useState(0),[z,P]=a.useState(0),[I,A]=a.useState(1),[B,K]=a.useState(25),[D,E]=a.useState(""),[N,p]=a.useState([]);a.useState();const[k]=h.useForm(),{push:l}=S(),t=async(i,s="",j=25)=>{u(!0);const{data:F}=await _.custom({url:"",method:"get",meta:{operation:"bills",variables:{page:{value:i,type:"Int",required:!0},key:{value:s,type:"String",required:!1},pageSize:{value:j,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","billNumber","billAmount","billPayerName","billPayerPhone","billPayerEmail","paymentCallbackUrl","paymentStatus","paymentStatusDisplay","isActive","created","updated","canDelete","canManage"]}]}}).catch(W=>(O.error("Error getting Bills"),{data:null})).then(W=>W);F&&(C(F.total),P(F.pages),A(F.page),p(F.results)),u(!1)},r=async()=>{u(!0);const{data:i}=await _.custom({url:"",method:"get",meta:{operation:"opayAnalytics",fields:["analytics"]}}).catch(s=>(O.error("Error fetching analytics"),{data:null})).then(s=>s);i&&v(i.analytics),u(!1)},o=[{title:"Bill#",dataIndex:"billNumber",fixed:!0,render:(i,s,j)=>e.jsx("span",{children:e.jsx("a",{children:s.billNumber})})},{title:"Customer Name",dataIndex:"billPayerName",fixed:!0,render:(i,s,j)=>e.jsx("span",{children:s.billPayerName})},{title:e.jsx(e.Fragment,{children:e.jsx("span",{style:{float:"right"},children:"Bill Amount"})}),dataIndex:"billAmount",fixed:!0,render:(i,s,j)=>e.jsx("span",{style:{float:"right"},children:new Intl.NumberFormat("en-US",{style:"currency",currency:"Tsh"}).format(s.billAmount)})},{title:"Created",dataIndex:"created",render:(i,s,j)=>e.jsx(e.Fragment,{children:e.jsx("span",{children:new Date(s.created).toLocaleString()})})},{title:"Status",dataIndex:"isActive",render:(i,s,j)=>e.jsx("a",{children:s!=null&&s.isActive?e.jsx("span",{style:{color:"green"},children:"Active"}):e.jsx("span",{style:{color:"red"},children:"Inactive"})})},{title:"",dataIndex:"action",render:(i,s,j)=>e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(q,{title:"Are you sure to delete this bill?",onConfirm:()=>{},onCancel:()=>{},okText:"Yes",cancelText:"No",disabled:!(s!=null&&s.canDelete),overlayStyle:{zIndex:9999},children:e.jsx(T,{icon:e.jsx(R,{}),disabled:!(s!=null&&s.canDelete)})})})}];return a.useEffect(()=>{r(),t(I,"",25)},[d.randKey]),e.jsxs(e.Fragment,{children:[e.jsxs(b,{style:{display:"flex",justifyContent:"flex-start"},children:[e.jsx(c,{span:3,children:e.jsx("a",{onClick:()=>l("/opay/bills"),children:e.jsx(y,{children:e.jsx(f,{title:"Bills",value:n==null?void 0:n.bills,precision:0,valueStyle:{color:"#3f8600",fontSize:"16px"},prefix:e.jsx(g,{})})})})}),e.jsx(c,{span:3,children:e.jsx("a",{onClick:()=>l("/opay/bills"),children:e.jsx(y,{children:e.jsx(f,{title:"Paid Bills",value:n==null?void 0:n.paid_bills,precision:0,valueStyle:{color:"#3f8600",fontSize:"16px"},prefix:e.jsx(g,{})})})})}),e.jsx(c,{span:3,children:e.jsx("a",{onClick:()=>l("/opay/bills"),children:e.jsx(y,{children:e.jsx(f,{title:"Unpaid Bills",value:n==null?void 0:n.unpaid_bills,precision:0,valueStyle:{color:"#3f8600",fontSize:"16px"},prefix:e.jsx(g,{})})})})}),e.jsx(c,{span:3,children:e.jsx("a",{onClick:()=>l("/opay/bills/payments"),children:e.jsx(y,{children:e.jsx(f,{title:"Payments",value:n==null?void 0:n.payments,precision:0,valueStyle:{color:"#3f8600",fontSize:"16px"},prefix:e.jsx(g,{})})})})}),e.jsx(c,{span:3,children:e.jsx("a",{children:e.jsx(y,{children:e.jsx(f,{title:"Bills Amount",value:n==null?void 0:n.bills_amount,precision:2,valueStyle:{color:"#3f8600",fontSize:"16px"},prefix:e.jsx(g,{})})})})}),e.jsx(c,{span:3,children:e.jsx("a",{children:e.jsx(y,{children:e.jsx(f,{title:"Paid Bills Amount",value:n==null?void 0:n.paid_bills_amount,precision:2,valueStyle:{color:"#3f8600",fontSize:"16px"},prefix:e.jsx(g,{})})})})}),e.jsx(c,{span:3,children:e.jsx("a",{children:e.jsx(y,{children:e.jsx(f,{title:"Unpaid Bills Amount",value:n==null?void 0:n.unpaid_bills_amount,precision:2,valueStyle:{color:"#3f8600",fontSize:"16px"},prefix:e.jsx(g,{})})})})})]}),e.jsx(J,{offsetTop:75,children:e.jsx(b,{style:{display:"flex",justifyContent:"center",marginTop:20},children:e.jsx(c,{span:10,children:e.jsx(h,{layout:"vertical",form:k,onFinish:i=>{t(1,i.key,25)},children:e.jsx(h.Item,{name:"key",children:e.jsx(U,{size:"large",placeholder:"Search Bill(s)...",prefix:e.jsx(Q,{}),autoComplete:"off",allowClear:!0})})})})})}),e.jsx(b,{children:e.jsx(c,{span:24,children:e.jsx(M,{loading:m,columns:o,dataSource:N,pagination:{onChange:(i,s)=>{K(s),t(i,D,s)},total:L,pageSize:B,position:["bottomCenter"],showQuickJumper:!1},scroll:{x:!0}})})})]})},Z=()=>{const{push:d}=S();return a.useEffect(()=>{document.title=Y.system_name+": Dashboard"},[]),e.jsxs(e.Fragment,{children:[e.jsx(H,{children:e.jsxs(x,{children:[e.jsx(x.Item,{children:e.jsx("a",{onClick:()=>d("/"),children:"Home"})}),e.jsx(x.Item,{children:e.jsx("a",{onClick:()=>d("/opay"),children:"Opay"})}),e.jsx(x.Item,{children:"Dashboard"})]})}),e.jsx(X,{})]})},$=d=>{const[m,u]=a.useState(!1),[n,v]=a.useState(0),[L,C]=a.useState(0),[z,P]=a.useState(1),[I,A]=a.useState(25),[B,K]=a.useState(""),[D,E]=a.useState([]);a.useState();const[N]=h.useForm();S();const p=async(l,t="",r=25)=>{u(!0);const{data:o}=await _.custom({url:"",method:"get",meta:{operation:"bills",variables:{page:{value:l,type:"Int",required:!0},key:{value:t,type:"String",required:!1},pageSize:{value:r,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","billNumber","billAmount","billPayerName","billPayerPhone","billPayerEmail","paymentCallbackUrl","paymentStatus","paymentStatusDisplay","isActive","created","updated","canDelete","canManage"]}]}}).catch(i=>(O.error("Error getting Bills"),{data:null})).then(i=>i);o&&(v(o.total),C(o.pages),P(o.page),E(o.results)),u(!1)},k=[{title:"Bill#",dataIndex:"billNumber",fixed:!0,render:(l,t,r)=>e.jsx("span",{children:e.jsx("a",{children:t.billNumber})})},{title:"Customer Name",dataIndex:"billPayerName",fixed:!0,render:(l,t,r)=>e.jsx("span",{children:t.billPayerName})},{title:e.jsx(e.Fragment,{children:e.jsx("span",{style:{float:"right"},children:"Bill Amount"})}),dataIndex:"billAmount",fixed:!0,render:(l,t,r)=>e.jsx("span",{style:{float:"right"},children:new Intl.NumberFormat("en-US",{style:"currency",currency:"Tsh"}).format(t.billAmount)})},{title:"Created",dataIndex:"created",render:(l,t,r)=>e.jsx(e.Fragment,{children:e.jsx("span",{children:new Date(t.created).toLocaleString()})})},{title:"Status",dataIndex:"isActive",render:(l,t,r)=>e.jsx("a",{children:t!=null&&t.isActive?e.jsx("span",{style:{color:"green"},children:"Active"}):e.jsx("span",{style:{color:"red"},children:"Inactive"})})},{title:"",dataIndex:"action",render:(l,t,r)=>e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(q,{title:"Are you sure to delete this bill?",onConfirm:()=>{},onCancel:()=>{},okText:"Yes",cancelText:"No",disabled:!(t!=null&&t.canDelete),overlayStyle:{zIndex:9999},children:e.jsx(T,{icon:e.jsx(R,{}),disabled:!(t!=null&&t.canDelete)})})})}];return a.useEffect(()=>{p(z,"",25)},[d.randKey]),e.jsxs(e.Fragment,{children:[e.jsx(J,{offsetTop:75,children:e.jsx(b,{style:{display:"flex",justifyContent:"center",marginTop:20},children:e.jsx(c,{span:10,children:e.jsx(h,{layout:"vertical",form:N,onFinish:l=>{p(1,l.key,25)},children:e.jsx(h.Item,{name:"key",children:e.jsx(U,{size:"large",placeholder:"Search Bill(s)...",prefix:e.jsx(Q,{}),autoComplete:"off",allowClear:!0})})})})})}),e.jsx(b,{children:e.jsx(c,{span:24,children:e.jsx(M,{loading:m,columns:k,dataSource:D,pagination:{onChange:(l,t)=>{A(t),p(l,B,t)},total:n,pageSize:I,position:["bottomCenter"],showQuickJumper:!1},scroll:{x:!0}})})})]})},w=()=>{const{push:d}=S();return a.useEffect(()=>{document.title=Y.system_name+": Bills"},[]),e.jsxs(e.Fragment,{children:[e.jsx(H,{children:e.jsxs(x,{children:[e.jsx(x.Item,{children:e.jsx("a",{onClick:()=>d("/"),children:"Home"})}),e.jsx(x.Item,{children:e.jsx("a",{onClick:()=>d("/opay"),children:"Opay"})}),e.jsx(x.Item,{children:"Bills"})]})}),e.jsx($,{})]})},ee=d=>{const[m,u]=a.useState(!1),[n,v]=a.useState(0),[L,C]=a.useState(0),[z,P]=a.useState(1),[I,A]=a.useState(25),[B,K]=a.useState(""),[D,E]=a.useState([]);a.useState();const[N]=h.useForm();S();const p=async(l,t="",r=25)=>{u(!0);const{data:o}=await _.custom({url:"",method:"get",meta:{operation:"billsPayments",variables:{page:{value:l,type:"Int",required:!0},key:{value:t,type:"String",required:!1},pageSize:{value:r,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id",{bill:["id","billNumber","billAmount","billPayerName","billPayerPhone","billPayerEmail","paymentCallbackUrl","paymentStatus","paymentStatusDisplay","isActive","created","updated","canDelete","canManage"]},"amount","paymentDate","isActive","created","updated","canDelete","canManage"]}]}}).catch(i=>(O.error("Error getting Bills Payments"),{data:null})).then(i=>i);o&&(v(o.total),C(o.pages),P(o.page),E(o.results)),u(!1)},k=[{title:"Bill#",dataIndex:"billNumber",fixed:!0,render:(l,t,r)=>e.jsx("span",{children:e.jsx("a",{children:t.bill.billNumber})})},{title:"Customer Name",dataIndex:"billPayerName",fixed:!0,render:(l,t,r)=>e.jsx("span",{children:e.jsx("a",{children:t.bill.billPayerName})})},{title:"Bill Amount",dataIndex:"billAmount",fixed:!0,render:(l,t,r)=>e.jsx("span",{children:e.jsx("a",{children:t.bill.billAmount})})},{title:"Paid Amount",dataIndex:"amount",fixed:!0,render:(l,t,r)=>e.jsx("span",{children:e.jsx("a",{children:t.amount})})},{title:"Payment Date",dataIndex:"paymentDate",render:(l,t,r)=>e.jsx(e.Fragment,{children:e.jsx("span",{children:new Date(t.paymentDate).toLocaleString()})})},{title:"Created",dataIndex:"created",render:(l,t,r)=>e.jsx(e.Fragment,{children:e.jsx("span",{children:new Date(t.created).toLocaleString()})})},{title:"Status",dataIndex:"isActive",render:(l,t,r)=>e.jsx("a",{children:t!=null&&t.isActive?e.jsx("span",{style:{color:"green"},children:"Active"}):e.jsx("span",{style:{color:"red"},children:"Inactive"})})},{title:"",dataIndex:"action",render:(l,t,r)=>e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end"},children:[e.jsx(q,{title:"Synchronize",placement:"left",onConfirm:()=>{},onCancel:()=>{},okText:"Yes",cancelText:"No",disabled:!(t!=null&&t.canManage),overlayStyle:{zIndex:9999},children:e.jsx(G,{title:"Synchronize Payment",placement:"top",color:"green",children:e.jsx(T,{icon:e.jsx(V,{}),disabled:!(t!=null&&t.canManage)})})}),e.jsx(q,{title:"Are you sure to delete this Payment?",onConfirm:()=>{},onCancel:()=>{},okText:"Yes",cancelText:"No",disabled:!(t!=null&&t.canDelete),overlayStyle:{zIndex:9999},children:e.jsx(T,{icon:e.jsx(R,{}),disabled:!(t!=null&&t.canDelete)})})]})}];return a.useEffect(()=>{p(z,"",25)},[d.randKey]),e.jsxs(e.Fragment,{children:[e.jsx(J,{offsetTop:75,children:e.jsxs(b,{style:{display:"flex",justifyContent:"center",marginTop:20},children:[e.jsx(c,{span:10,children:e.jsx(h,{layout:"vertical",form:N,onFinish:l=>{p(1,l.key,25)},children:e.jsx(h.Item,{name:"key",children:e.jsx(U,{size:"large",placeholder:"Search Bill(s)...",prefix:e.jsx(Q,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(c,{span:14,style:{display:"flex",justifyContent:"end"},children:e.jsx(T,{size:"large",children:"Sync CDR"})})]})}),e.jsx(b,{children:e.jsx(c,{span:24,children:e.jsx(M,{loading:m,columns:k,dataSource:D,pagination:{onChange:(l,t)=>{A(t),p(l,B,t)},total:n,pageSize:I,position:["bottomCenter"],showQuickJumper:!1},scroll:{x:!0}})})})]})},te=()=>{const{push:d}=S();return a.useEffect(()=>{document.title=Y.system_name+": Payments"},[]),e.jsxs(e.Fragment,{children:[e.jsx(H,{children:e.jsxs(x,{children:[e.jsx(x.Item,{children:e.jsx("a",{onClick:()=>d("/"),children:"Home"})}),e.jsx(x.Item,{children:e.jsx("a",{onClick:()=>d("/opay"),children:"Opay"})}),e.jsx(x.Item,{children:"Payments"})]})}),e.jsx(ee,{})]})},ye=d=>{const{page:m}=d;return m==="BillsPaymentsPage"?e.jsx(te,{}):m==="BillsPage"?e.jsx(w,{}):m==="OpayDashboardPage"?e.jsx(Z,{}):e.jsx("div",{children:"Page not found ..."})};export{ye as OpayPages};
