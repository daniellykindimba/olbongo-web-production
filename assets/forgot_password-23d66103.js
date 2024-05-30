import{aT as o,r as n,c as R,j as e,aW as A,aP as T,B as S,cA as B,cn as b,cB as c,a1 as g,av as p,g as u}from"./index-7ac8fc92.js";/* empty css               */import{E as L}from"./footer-71b1db0e.js";import{t as v}from"./styles-9e2ec2e2.js";import{C as W}from"./index-0a7ff63a.js";import{A as N}from"./index-3e999fd0.js";import{m as U}from"./index-53d198b2.js";import"./Skeleton-a1e70c5e.js";import"./DotChartOutlined-f39c986e.js";import"./index-0e10b20d.js";import"./InfoCircleFilled-72907a72.js";import"./InfoCircleFilled-baaa675e.js";import"./context-5a675a30.js";import"./useNotification-d3b1cac4.js";const se=()=>{const[y]=o.useForm(),[m]=o.useForm(),[f]=o.useForm(),[d,j]=n.useState(!1),[D,l]=n.useState(""),[w,i]=n.useState(""),[H,C]=n.useState(""),[s,P]=n.useState(),{push:h}=R(),I=async()=>{const{data:r}=await u.custom({url:"",method:"get",meta:{operation:"systemSettings",variables:{},fields:["passwordComplexityMinLength","passwordComplexityMaxLength","passwordComplexityMinUppercase","passwordComplexityMinLowercase","passwordComplexityMinNumeric","passwordComplexityMinSpecial"]}}).catch(t=>(U.error("Error occured while get System Settings"),{data:null})).then(t=>t);r&&P(r)},F=r=>{const t=r.slice(0,3),a=r.slice(8,12),z=r.slice(3,8).replace(/\d/g,"*");return e.jsxs(e.Fragment,{children:[t,e.jsx("span",{style:{fontWeight:"bold"},children:z}),a]})},k=e.jsx(e.Fragment,{children:e.jsx(c,{component:"h2",variant:"h2",align:"center",style:v,color:"primary",fontWeight:700,children:"Recover your account"})}),x=e.jsx(e.Fragment,{children:e.jsx("div",{style:{marginTop:8},children:e.jsxs(c,{children:["Have an account?"," ",e.jsx("a",{onClick:()=>{localStorage.removeItem("stage"),localStorage.removeItem("phone"),h("/login")},style:{fontWeight:"bold"},children:"Sign in"})]})})}),M=async r=>{i(""),l("");const{data:t}=await u.custom({url:"",method:"post",meta:{operation:"requestRecoveryToken",variables:{email:{value:r.email,type:"String",required:!0}},fields:["success","message","phoneNumber"]}});t.success?(l(t.message),C(t.phoneNumber),localStorage.setItem("phone",t.phoneNumber),localStorage.setItem("stage","2"),y.resetFields()):i(t.message)},q=async r=>{i(""),l("");const{data:t}=await u.custom({url:"",method:"post",meta:{operation:"verifyRecoveryToken",variables:{code:{value:r.code,type:"String",required:!0}},fields:["success","message","code"]}});t.success?(localStorage.setItem("stage","3"),localStorage.setItem("code",t.code),l(t.message),m.resetFields()):i(t.message)},E=async r=>{i(""),l("");const{data:t}=await u.custom({url:"",method:"post",meta:{operation:"changeAccountPasswordExternal",variables:{code:{value:r.code,type:"String",required:!0},password:{value:r.password,type:"String",required:!0},confirmPassword:{value:r.confirmPassword,type:"String",required:!0}},fields:["success","message","code"]}});t.success?(j(!0),localStorage.setItem("stage","3"),localStorage.setItem("code",t.code),l(t.message),localStorage.removeItem("phone"),localStorage.removeItem("code"),localStorage.removeItem("stage"),m.resetFields()):(j(!1),i(t.message))};return n.useEffect(()=>{localStorage.getItem("stage")===null&&localStorage.setItem("stage","1"),I()},[]),e.jsxs(A,{justify:"center",align:"middle",style:{height:(window.innerHeight-64).toString()+"px"},children:[e.jsx(T,{xs:22,xl:22,xxl:22,style:{marginBottom:20},children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"imageContainer",children:e.jsx("a",{onClick:()=>h("/login"),children:e.jsxs(S,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[e.jsx(B,{alt:"Remy Sharp",src:b.brandLogo,sx:{marginBottom:"5px",width:128,height:128,border:"1px solid red"}}),e.jsx(c,{component:"h2",variant:"h2",align:"center",style:v,color:"primary",fontWeight:700,children:b.system_name})]})})}),e.jsxs(W,{title:k,headStyle:{borderBottom:0},children:[w.length>0?e.jsx(e.Fragment,{children:e.jsx(N,{message:"Error",description:w,type:"error"})}):e.jsx(e.Fragment,{}),(localStorage.getItem("stage")===null||localStorage.getItem("stage")==="1")&&!d&&e.jsxs(e.Fragment,{children:[e.jsxs(o,{layout:"vertical",form:y,onFinish:r=>M(r),requiredMark:!1,children:[e.jsx(o.Item,{name:"email",label:"Email/Username",rules:[{required:!0,type:"string"}],children:e.jsx(g,{size:"large",placeholder:"Email/Username"})}),e.jsx(p,{type:"primary",size:"large",htmlType:"submit",style:{backgroundColor:"red",color:"white",fontWeight:"bolder"},block:!0,children:"Recover"})]}),x]}),localStorage.getItem("stage")&&localStorage.getItem("stage")==="2"&&!d&&e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{marginBottom:20},children:e.jsxs(c,{children:["A recovery code has been sent to"," ",F(localStorage.getItem("phone"))]})}),e.jsxs(o,{layout:"vertical",form:m,onFinish:r=>q(r),requiredMark:!1,children:[e.jsx(o.Item,{name:"code",label:"Recovery Code",rules:[{required:!0,type:"string"}],children:e.jsx(g,{size:"large",placeholder:"Enter Recovery Token ..."})}),e.jsx(p,{type:"primary",size:"large",style:{backgroundColor:"red",color:"white",fontWeight:"bolder"},block:!0,onClick:()=>m.submit(),children:"Verify"})]}),x]}),localStorage.getItem("stage")&&localStorage.getItem("stage")==="3"&&!d&&e.jsxs(e.Fragment,{children:[e.jsxs(o,{layout:"vertical",form:f,onFinish:r=>{r.code=localStorage.getItem("code"),E(r)},requiredMark:!1,children:[e.jsx(o.Item,{name:"password",label:"Password",rules:[{required:!0,message:"Password is required"},({getFieldValue:r})=>({validator(t,a){return!a||a.length<((s==null?void 0:s.passwordComplexityMinLength)??6)?Promise.reject("Password must be at least "+(s==null?void 0:s.passwordComplexityMinLength)):((s==null?void 0:s.passwordComplexityMinLowercase)??0)>0&&!a.match(/[a-z]/)?Promise.reject("Password must contain at least one lowercase letter"):((s==null?void 0:s.passwordComplexityMinUppercase)??0)>0&&!a.match(/[A-Z]/)?Promise.reject("Password must contain at least one uppercase letter"):((s==null?void 0:s.passwordComplexityMinNumeric)??0)>0&&!a.match(/[0-9]/)?Promise.reject("Password must contain at least one number"):((s==null?void 0:s.passwordComplexityMinSpecial)??0)>0&&!a.match(/[^a-zA-Z0-9]/)?Promise.reject("Password must contain at least one special character"):Promise.resolve()}})],children:e.jsx(g,{type:"password",size:"large",placeholder:"Enter Password ..."})}),e.jsx(o.Item,{name:"confirmPassword",label:"Confirm Password",rules:[{required:!0,type:"string"}],children:e.jsx(g,{type:"password",size:"large",placeholder:"Enter Password ..."})}),e.jsx(p,{type:"primary",size:"large",style:{backgroundColor:"red",color:"white",fontWeight:"bolder"},block:!0,onClick:()=>f.submit(),children:"Recover"})]}),x]}),d&&e.jsx(e.Fragment,{children:e.jsxs("div",{style:{marginBottom:20},children:[e.jsx(c,{children:"Your password has been successfully changed. Please login with your new password."}),e.jsx(p,{type:"primary",size:"large",style:{backgroundColor:"red",color:"white",fontWeight:"bolder",marginTop:20},block:!0,onClick:()=>h("/login"),children:"Login"})]})})]})]})}),e.jsx(S,{sx:{position:"relative",bottom:"0",width:"100%",textAlign:"center",padding:"2px",backgroundColor:"#f5f5f5",color:"#000",fontSize:"12px"},children:e.jsx(L,{})})]})};export{se as ForgotPassword};
