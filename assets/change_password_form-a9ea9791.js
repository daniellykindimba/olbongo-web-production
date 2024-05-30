import{r as t,aT as n,gt as z,j as s,a8 as A,av as w,a1 as l,g as h,_ as E}from"./index-50292268.js";import{A as g}from"./index-00216300.js";const N=P=>{const[d,c]=t.useState(!1),[x,u]=t.useState(!1),[y,f]=t.useState(""),[j,i]=t.useState(!1),[C]=n.useForm(),[S,M]=t.useState(""),[p,b]=t.useState(""),[m,q]=t.useState(""),[e,F]=t.useState();z();const v=async()=>{i(!0);const{data:r}=await h.custom({url:"",method:"get",meta:{operation:"systemSettings",variables:{},fields:["passwordComplexityMinLength","passwordComplexityMaxLength","passwordComplexityMinUppercase","passwordComplexityMinLowercase","passwordComplexityMinNumeric","passwordComplexityMinSpecial"]}}).catch(()=>(E.error("Error occured while get System Settings"),{data:null})).then(o=>o);r&&F(r.data),i(!1)},L=async r=>{i(!0);const{data:o}=await h.custom({url:"",method:"post",meta:{operation:"changeAccountPassword",variables:{oldPassword:{value:r.oldPassword,type:"String",required:!0},password:{value:r.password,type:"String",required:!0},confirmPassword:{value:r.passwordRepeat,type:"String",required:!0}},fields:["success","message"]}}).catch(()=>({data:null})).then(a=>a);o&&(o.success?(c(!0),u(!1),i(!1),localStorage.clear(),P.onFinish()):(u(!0),f(o.message),c(!1))),i(!1)};return t.useEffect(()=>{v()},[]),s.jsx(s.Fragment,{children:s.jsxs(A,{spinning:j,children:[d&&s.jsxs(s.Fragment,{children:[s.jsx(g,{type:"success",description:"Password changed successfully!"}),s.jsx("div",{style:{height:30}}),s.jsx(w,{type:"primary",size:"large",block:!0,onClick:()=>{window.location.pathname="/login"},children:"Login Again"})]}),x&&s.jsx(g,{type:"error",description:y}),!d&&s.jsxs(n,{layout:"vertical",form:C,onFinish:L,requiredMark:!0,children:[s.jsx(n.Item,{name:"oldPassword",label:"Old Password",rules:[{required:!0,type:"string",message:"Please input Old Password"}],children:s.jsx(l.Password,{size:"large",placeholder:"Enter Old Password ...",onChange:r=>M(r.target.value)})}),s.jsx(n.Item,{name:"password",label:"New Password",rules:[{required:!0,message:"Password is required"},({getFieldValue:r})=>({validator(o,a){return!a||a.length<((e==null?void 0:e.passwordComplexityMinLength)??6)?Promise.reject("Password must be at least "+(e==null?void 0:e.passwordComplexityMinLength)):((e==null?void 0:e.passwordComplexityMinLowercase)??0)>0&&!a.match(/[a-z]/)?Promise.reject("Password must contain at least one lowercase letter"):((e==null?void 0:e.passwordComplexityMinUppercase)??0)>0&&!a.match(/[A-Z]/)?Promise.reject("Password must contain at least one uppercase letter"):((e==null?void 0:e.passwordComplexityMinNumeric)??0)>0&&!a.match(/[0-9]/)?Promise.reject("Password must contain at least one number"):((e==null?void 0:e.passwordComplexityMinSpecial)??0)>0&&!a.match(/[^a-zA-Z0-9]/)?Promise.reject("Password must contain at least one special character"):Promise.resolve()}})],children:s.jsx(l.Password,{size:"large",placeholder:"Enter Password ...",onChange:r=>b(r.target.value)})}),s.jsx(n.Item,{name:"passwordRepeat",label:"Repeat New Password",rules:[{required:!0,message:"Password is required"},({getFieldValue:r})=>({validator(o,a){return r("password")!==a?Promise.reject("Password and Confirm Password do not match"):Promise.resolve()}})],children:s.jsx(l.Password,{size:"large",placeholder:"Enter New Password ...",onChange:r=>q(r.target.value)})}),s.jsx(n.Item,{children:s.jsx(w,{type:"primary",htmlType:"submit",size:"large",block:!0,disabled:p!==m||S.length<1||p.length<1||m.length<1,children:"Change Password"})})]})]})})};export{N as C};
