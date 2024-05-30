import{r as a,aT as i,c as W,j as e,C as _,B as m,G as x,cB as h,a8 as O,a1 as l,g as n,av as c,cn as $,cC as K}from"./index-7df9ee76.js";/* empty css               */import{q as V}from"./base-e8aaf39e.js";import{E as H}from"./footer-4675ea6b.js";import{t as J}from"./styles-9e2ec2e2.js";import{E as Q}from"./index-f1ab9a49.js";import{GoogleLogin as X}from"./index.esm-fd39173d.js";import{C as N}from"./index-746394d2.js";import{A as v}from"./index-e07fd9be.js";import{P as q}from"./index-d353142b.js";import{m as g}from"./index-08a7af9f.js";import{I as F}from"./InfoCircleFilled-70e4c643.js";import{a as E,E as L}from"./EyeOutlined-bfafc50e.js";import"./index-61bf09cd.js";import"./Skeleton-494b0004.js";import"./DotChartOutlined-f39c986e.js";import"./index-fdfe4d32.js";import"./InfoCircleFilled-60705b95.js";import"./InfoCircleFilled-baaa675e.js";import"./context-a409ffb8.js";import"./useNotification-ac3df694.js";const Se=()=>{const[y,w]=a.useState(!1),[f]=i.useForm(),[z,j]=a.useState(!1),[B,d]=a.useState(""),[S,C]=a.useState(""),{push:P}=W(),p=V.parse(window.location.search),u=new Array(p.to).filter(o=>o!==null).join(","),[r,D]=a.useState(),[b,A]=a.useState(!1),[M,I]=a.useState(!1),[T,G]=a.useState(!1),R=async()=>{w(!0);const{data:o}=await n.custom({url:"",method:"get",meta:{operation:"systemSettings",variables:{},fields:["passwordComplexityMinLength","passwordComplexityMaxLength","passwordComplexityMinUppercase","passwordComplexityMinLowercase","passwordComplexityMinNumeric","passwordComplexityMinSpecial","allowGoogleAuth","allowLinkedinAuth","allowFacebookAuth","allowGithubAuth"]}}).catch(()=>(g.error("Error occured while get System Settings"),{data:null})).then(t=>t);o&&(D(o),G(o.allowGoogleAuth)),w(!1)},k=e.jsx(e.Fragment,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:["Not less than ",(r==null?void 0:r.passwordComplexityMinLength)??6," characters"]}),(r==null?void 0:r.passwordComplexityMinUppercase)&&parseInt(r==null?void 0:r.passwordComplexityMinUppercase.toString())>0&&e.jsxs("li",{children:["At least ",(r==null?void 0:r.passwordComplexityMinUppercase)??0," uppercase letter"]}),(r==null?void 0:r.passwordComplexityMinLowercase)&&parseInt(r==null?void 0:r.passwordComplexityMinLowercase.toString())>0&&e.jsxs("li",{children:["At least ",(r==null?void 0:r.passwordComplexityMinLowercase)??0," lowercase letter"]}),(r==null?void 0:r.passwordComplexityMinNumeric)&&parseInt(r==null?void 0:r.passwordComplexityMinNumeric.toString())>0&&e.jsxs("li",{children:["At least ",(r==null?void 0:r.passwordComplexityMinNumeric)??0," ","number(Digit)"]}),(r==null?void 0:r.passwordComplexityMinSpecial)&&parseInt(r==null?void 0:r.passwordComplexityMinSpecial.toString())>0&&e.jsxs("li",{children:["At least ",(r==null?void 0:r.passwordComplexityMinSpecial)??0," special character"]})]})}),Z=async o=>{C(""),d("");const{data:t}=await n.custom({url:"",method:"post",meta:{operation:"register",variables:{email:{value:o.email,type:"String",required:!0},phone:{value:o.phone,type:"String",required:!0},fullName:{value:o.fullName,type:"String",required:!0},password:{value:o.password,type:"String",required:!0},passwordRepeat:{value:o.confirmPassword,type:"String",required:!0}},fields:["success","message","accountAvailable","errors"]}});t.success?(j(!0),d(t.message),g.success(t.message),f.resetFields()):(C(t.message),g.error(t.message))},U=async o=>{const{data:t}=await n.custom({url:"",method:"post",meta:{operation:"registerByGoogle",variables:{token:{value:o,type:"String",required:!0},sessionKey:{value:localStorage.getItem("sessionKey"),type:"String",required:!0}},fields:["success","message","token","expires","tokenExpires","accountDisabled","sessionKey","registered",{user:["id","firstName","middleName","lastName","fullName","pic","email","isAdmin","isStaff","isActive"]}]}}).catch(()=>({data:null})).then(s=>s);t&&(localStorage.setItem("accountDisabled",t.accountDisabled?"1":"0"),localStorage.getItem("loginAttemp")?(localStorage.setItem("loginAttemp",(parseInt(localStorage.getItem("loginAttemp")??"1")+1).toString()),localStorage.setItem("lastLoginAttemp",new Date().toString())):(localStorage.setItem("loginAttemp","1"),localStorage.setItem("lastLoginAttemp",new Date().toString())),t.token&&t.user&&!t.otpAuth&&(j(t.registered),d(t.message),localStorage.removeItem("loginAttemp"),K.setHeader("Authorization",`Bearer ${t.token}`),localStorage.setItem("token",t.token),localStorage.setItem("expires",t.expires),localStorage.setItem("tokenExpires",t.tokenExpires),localStorage.setItem("lastLoginAttemp",new Date().toString()),localStorage.setItem("expired","0"),localStorage.setItem("user",JSON.stringify(t.user)),setTimeout(()=>{var s;try{localStorage.removeItem("loginAttemp"),localStorage.removeItem("lastLoginAttemp")}catch{}p.to&&((s=p.to)==null?void 0:s.length)>0?window.location.href=u:window.location.href="/apps"},2e3)))};return a.useEffect(()=>{R()},[]),e.jsxs(e.Fragment,{children:[e.jsx(_,{maxWidth:"xl",children:e.jsxs(m,{sx:{display:"flex",flexDirection:"column"},children:[e.jsx(x,{container:!0,spacing:0,children:e.jsx(Q,{})}),e.jsx(x,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12,children:e.jsx(m,{sx:{marginTop:"50px"},children:e.jsx(h,{component:"h1",variant:"h1",align:"center",style:{...J,fontSize:"38px"},color:"primary",fontWeight:700,children:"Make your learning journey easier"})})}),e.jsx(x,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12,children:e.jsx(O,{spinning:y,children:e.jsx("div",{className:"container",style:{marginBottom:50},children:z?e.jsx(e.Fragment,{children:e.jsxs(N,{headStyle:{borderBottom:0},children:[e.jsx(v,{message:"Success",description:B,type:"success"}),e.jsx(c,{block:!0,style:{marginTop:20},onClick:()=>P("/login?to="+u),children:"Sign In Now"})]})}):e.jsxs(N,{headStyle:{borderBottom:0},children:[S.length>0?e.jsx(v,{message:"Error",description:S,type:"error",closable:!0}):e.jsx(e.Fragment,{}),e.jsxs(i,{layout:"vertical",form:f,onFinish:o=>Z(o),requiredMark:!0,initialValues:{remember:!1,email:"",password:""},children:[e.jsx(i.Item,{name:"fullName",label:"Full Name",rules:[{required:!0,message:"Full Name is required"},({getFieldValue:o})=>({validator(t,s){return!s||s.length<3||!/^[a-zA-Z ]+$/.test(s)?Promise.reject("Full Name must be at least 3 Names and only letters are allowed"):Promise.resolve()}})],children:e.jsx(l,{size:"large",placeholder:"Full Name"})}),e.jsx(i.Item,{name:"phone",label:"Mobile Phone Number",rules:[{required:!0,type:"string",message:"Mobile Phone Number is required"},({getFieldValue:o})=>({validator(t,s){return!s||!/^[0-9]+$/.test(s)||s.length<9?Promise.reject("Mobile Phone Number must be at least 10 numbers"):Promise.resolve()}}),{validator:async(o,t)=>{if(!t)return Promise.reject();const{data:s}=await n.custom({url:"",method:"post",meta:{operation:"checkMobilePhoneNumber",variables:{phone:{value:t,type:"String",required:!0}},fields:["success","message"]}});return s.success?Promise.resolve():Promise.reject(s.message)}}],children:e.jsx(l,{prefix:e.jsx(e.Fragment,{children:e.jsx("span",{style:{color:"red"},children:"255"})}),size:"large",placeholder:"Mobile Phone Number ..."})}),e.jsx(i.Item,{name:"email",label:"Email",rules:[{required:!0,type:"email",message:"Email is required"},({getFieldValue:o})=>({validator(t,s){return!s||!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(s)?Promise.reject("Please enter a valid email address"):Promise.resolve()}}),{validator:async(o,t)=>{if(!t)return Promise.reject();const{data:s}=await n.custom({url:"",method:"post",meta:{operation:"checkEmailWithAccount",variables:{email:{value:t,type:"String",required:!0}},fields:["success","message"]}});return s.success?Promise.resolve():Promise.reject(s.message)}}],children:e.jsx(l,{size:"large",placeholder:"Email"})}),e.jsx(i.Item,{name:"password",label:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Password"}),e.jsx(q,{content:k,title:"Password Complexity Definition",children:e.jsx(c,{type:"text",icon:e.jsx(F,{style:{color:"red"}})})})]}),rules:[{required:!0,message:"Password is required"},({getFieldValue:o})=>({validator(t,s){return!s||s.toLowerCase().includes(o("email").toLowerCase())?Promise.reject("Password must not contain "+o("email")):!s||s.length<((r==null?void 0:r.passwordComplexityMinLength)??6)?Promise.reject("Password must be at least "+(r==null?void 0:r.passwordComplexityMinLength)):((r==null?void 0:r.passwordComplexityMinLowercase)??0)>0&&!s.match(/[a-z]/)?Promise.reject("Password must contain at least one lowercase letter"):((r==null?void 0:r.passwordComplexityMinUppercase)??0)>0&&!s.match(/[A-Z]/)?Promise.reject("Password must contain at least one uppercase letter"):((r==null?void 0:r.passwordComplexityMinNumeric)??0)>0&&!s.match(/[0-9]/)?Promise.reject("Password must contain at least one number"):((r==null?void 0:r.passwordComplexityMinSpecial)??0)>0&&!s.match(/[^a-zA-Z0-9]/)?Promise.reject("Password must contain at least one special character"):Promise.resolve()}})],style:{marginBottom:"12px"},children:e.jsx(l,{type:b?"text":"password",placeholder:"",size:"large",suffix:b?e.jsx(E,{onClick:()=>{A(!1)}}):e.jsx(L,{onClick:()=>{A(!0)}})})}),e.jsx(i.Item,{name:"confirmPassword",label:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Confirm Password"}),e.jsx(q,{content:k,title:"Password Complexity Definition",children:e.jsx(c,{type:"text",icon:e.jsx(F,{style:{color:"red"}})})})]}),rules:[{required:!0,message:"Password is required"},({getFieldValue:o})=>({validator(t,s){return o("password")!==s?Promise.reject("Password and Confirm Password do not match"):Promise.resolve()}})],style:{marginBottom:"12px"},children:e.jsx(l,{type:M?"text":"password",placeholder:"",size:"large",suffix:M?e.jsx(E,{onClick:()=>{I(!1)}}):e.jsx(L,{onClick:()=>{I(!0)}})})}),e.jsx(c,{type:"primary",size:"large",htmlType:"submit",style:{backgroundColor:"red",color:"white",fontWeight:"bolder"},disabled:y||!r,block:!0,children:"Agree & Join"})]}),e.jsxs(m,{children:[e.jsx("div",{style:{marginTop:20},children:e.jsx("hr",{style:{width:"100%"}})}),e.jsx("div",{style:{position:"relative",top:"-20px",display:"flex",justifyContent:"center"},children:e.jsx(h,{sx:{backgroundColor:"#fff",padding:"0 10px",borderRadius:"50%"},children:"Or"})})]}),T&&e.jsx("div",{style:{marginTop:8},children:e.jsx(X,{text:"signup_with",context:"signup",onSuccess:o=>{const t=o.credential;t&&U(t)},useOneTap:!0,width:"350",shape:"pill",size:"large"})}),e.jsx(m,{sx:{marginTop:5,display:"flex",justifyContent:"center"},children:e.jsxs(h,{sx:{fontSize:"18px",color:"#000"},children:["Already on ",$.system_name," ?"," ",e.jsx("a",{onClick:()=>P("/login?to="+u),style:{fontWeight:"bold"},children:"Sign in"})]})})]})})})})]})}),e.jsx(H,{min:!0})]})};export{Se as Register};
