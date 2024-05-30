import{r as a,aT as f,c as T,j as e,aX as S,F as V,av as o,a8 as v,aZ as D,a1 as _,g as l,_ as g}from"./index-50292268.js";import{A as y}from"./index-00216300.js";import{D as x}from"./index-ae017361.js";const W=n=>{const[i,j]=a.useState(),[c,b]=a.useState(!1),[k,u]=a.useState(!1),[A,F]=a.useState(""),[w,C]=a.useState([]),[P,d]=a.useState(""),[I,h]=a.useState(!1),[z,m]=a.useState(!1),[q]=f.useForm(),{push:B}=T(),N=async s=>{const{data:r}=await l.custom({url:"",method:"get",meta:{operation:"bookOrder",variables:{id:{value:s,type:"Int",required:!0}},fields:["id","isPaid","paymentDate","receiptNumber","price"]}}).catch(()=>({data:null})).then(t=>t);r&&j(r)},M=async()=>{const{data:s}=await l.custom({url:"",method:"get",meta:{operation:"paymentSupportedTelecomCarriers",variables:{},fields:[{results:["id","name"]}]}}).catch(()=>({data:null})).then(r=>r);if(s){const r=s.results,t=[];r.forEach(p=>{t.push(p.name)}),C(t)}},O=async s=>{h(!0),m(!1);const{data:r}=await l.custom({url:"",method:"post",meta:{operation:"createBookPurchaseOrder",variables:{bookId:{value:s.book_id,type:"Int",required:!0},phone:{value:s.phone,type:"String",required:!0}},fields:["success","message",{purchasedBook:["id","isPaid","paymentDate","receiptNumber","price"]}]}}).catch(()=>({data:null})).then(t=>t);r&&(r.success?(m(!0),j(r.purchasedBook),g.success(r.message)):g.error(r.message)),h(!1)},E=async s=>{b(!0);const{data:r}=await l.custom({url:"",method:"post",meta:{operation:"validateMobilePhoneNumber",variables:{phone:{value:s,type:"String",required:!0}},fields:["success","message","carrier","formattedPhone"]}}).catch(t=>(g.error("Error Validating Mobile Phone Number"),{data:null})).then(t=>t);return r&&(u(r.success),r.success||(F(r.message),d(r.carrier))),b(!1),r};return a.useEffect(()=>{M();const s=setInterval(()=>{i&&!i.isPaid&&N(i.id)},5e3);return()=>clearInterval(s)},[n.randKey]),i&&i.isPaid?e.jsx(y,{type:"success",showIcon:!0,description:e.jsx(e.Fragment,{children:e.jsxs(S,{direction:"vertical",children:[e.jsx("span",{style:{fontSize:22},children:"Payment was successful, Thank you for your purchase."}),e.jsxs(V,{justify:"space-between",children:[e.jsx(o,{size:"large",onClick:()=>{B("/olib")},children:"View Purchased Books"}),e.jsx(o,{size:"large",onClick:()=>{n.onFinish()},children:"Continue Shopping"})]})]})})}):z?e.jsx(e.Fragment,{children:e.jsx(y,{type:"success",showIcon:!0,description:e.jsx(e.Fragment,{children:e.jsxs(S,{direction:"vertical",children:[e.jsxs("span",{style:{fontSize:22},children:["Please your phone, we have pushed payment request, you will be requested to Enter ",e.jsx("b",{children:"PIN"})," to authorize this payment."]}),e.jsx(o,{size:"large",onClick:()=>{m(!1),h(!1)},children:"Push Payment Again"})]})})})}):e.jsx(e.Fragment,{children:e.jsxs(v,{spinning:I,children:[e.jsx(y,{description:e.jsxs(e.Fragment,{children:["Payment is supported through"," ",e.jsx("span",{style:{fontSize:20},children:e.jsx("b",{children:w.join(",")})})]}),type:"info",showIcon:!0,style:{fontSize:22,marginBottom:10}}),e.jsxs(x,{title:"Payment For",column:1,labelStyle:{fontSize:22,fontWeight:"bold"},contentStyle:{fontSize:22},children:[e.jsx(x.Item,{label:"Book Name",children:n.book.title}),e.jsxs(x.Item,{label:"Cost",children:[n.book.price," Tsh"]})]}),e.jsxs(f,{layout:"vertical",form:q,onFinish:s=>{s.book_id=n.book.id,O(s)},requiredMark:!0,autoComplete:"off",children:[e.jsx(f.Item,{name:"phone",label:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Mobile Phone Number"}),P.length>0&&e.jsx(D,{color:"green",style:{marginLeft:10},children:P}),c&&e.jsx(v,{spinning:c})]}),rules:[{required:!0,type:"string",message:"Required"},{validator:async(s,r)=>{if(r.length>=10){if(!c){const t=await E(r).then(p=>p);if(t!=null&&t.success)d(t.carrier),u(!0);else return d(""),Promise.reject(t==null?void 0:t.message)}}else u(!1)}}],children:e.jsx(_,{size:"large",placeholder:"Mobile Phone Number ..."})}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(o,{type:"primary",size:"large",htmlType:"submit",disabled:!k,children:"Pay"})})]})]})})};export{W as B};
