import{r as a,c as h,j as e,k as x,S as M,B as j,a as b,a5 as m,b as B,I as N,g as p,_ as f}from"./index-0106a5d3.js";const O=n=>{const[i,g]=a.useState(!1),[S,o]=a.useState(!1),[E,P]=a.useState(""),[v,k]=a.useState([]),[y,l]=a.useState(""),[F,c]=a.useState(!1),[C,u]=a.useState(!1),[I]=h.useForm(),q=async()=>{const{data:s}=await p.custom({url:"",method:"get",meta:{operation:"paymentSupportedTelecomCarriers",variables:{},fields:[{results:["id","name"]}]}}).catch(r=>({data:null})).then(r=>r);if(s){const r=s.results,t=[];r.forEach(d=>{t.push(d.name)}),k(t)}},z=async s=>{c(!0),u(!1);const{data:r}=await p.custom({url:"",method:"post",meta:{operation:"createBookPurchaseOrder",variables:{bookId:{value:s.book_id,type:"Int",required:!0},phone:{value:s.phone,type:"String",required:!0}},fields:["success","message"]}}).catch(t=>({data:null})).then(t=>t);r&&(r.success?(u(!0),f.success(r.message),n.onFinish()):f.error(r.message)),c(!1)},w=async s=>{g(!0);const{data:r}=await p.custom({url:"",method:"post",meta:{operation:"validateMobilePhoneNumber",variables:{phone:{value:s,type:"String",required:!0}},fields:["success","message","carrier","formattedPhone"]}}).catch(t=>(f.error("Error Validating Mobile Phone Number"),{data:null})).then(t=>t);return r&&(o(r.success),r.success||(P(r.message),l(r.carrier))),g(!1),r};return a.useEffect(()=>{q()},[n.randKey]),C?e.jsx(e.Fragment,{children:e.jsx(x,{type:"success",showIcon:!0,description:e.jsx(e.Fragment,{children:e.jsxs(M,{direction:"vertical",children:[e.jsxs("span",{style:{fontSize:22},children:["Please your phone, we have pushed payment request, you will be requested to Enter ",e.jsx("b",{children:"PIN"})," to authorize this payment."]}),e.jsx(j,{size:"large",onClick:()=>{u(!1),c(!1)},children:"Push Payment Again"})]})})})}):e.jsx(e.Fragment,{children:e.jsxs(b,{spinning:F,children:[e.jsx(x,{description:e.jsxs(e.Fragment,{children:["Payment is supported through"," ",e.jsx("span",{style:{fontSize:20},children:e.jsx("b",{children:v.join(",")})})]}),type:"info",showIcon:!0,style:{fontSize:22,marginBottom:10}}),e.jsxs(m,{title:"Payment For",column:1,labelStyle:{fontSize:22,fontWeight:"bold"},contentStyle:{fontSize:22},children:[e.jsx(m.Item,{label:"Book Name",children:n.book.title}),e.jsxs(m.Item,{label:"Cost",children:[n.book.price," Tsh"]})]}),e.jsxs(h,{layout:"vertical",form:I,onFinish:s=>{s.book_id=n.book.id,z(s)},requiredMark:!0,autoComplete:"off",children:[e.jsx(h.Item,{name:"phone",label:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Mobile Phone Number"}),y.length>0&&e.jsx(B,{color:"green",style:{marginLeft:10},children:y}),i&&e.jsx(b,{spinning:i})]}),rules:[{required:!0,type:"string",message:"Required"},{validator:async(s,r)=>{if(r.length>=10){if(!i){const t=await w(r).then(d=>d);if(t!=null&&t.success)l(t.carrier),o(!0);else return l(""),Promise.reject(t==null?void 0:t.message)}}else o(!1)}}],children:e.jsx(N,{size:"large",placeholder:"Mobile Phone Number ..."})}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(j,{type:"primary",size:"large",htmlType:"submit",disabled:!S,children:"Pay"})})]})]})})};export{O as B};
