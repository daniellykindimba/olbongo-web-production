import{aO as m,r as a,b$ as V,aY as e,ct as Y,cm as r,cu as i,cs as g,ao as y,Q as C,cv as $,cw as Q,b_ as l,c7 as L,bY as Z,a6 as X,cx as ee,bZ as b,cy as q,c3 as te}from"./index-3b25761c.js";/* empty css               */import{E as oe}from"./footer-00da52ec.js";import{q as se}from"./base-416abc16.js";import{GoogleLogin as re}from"./index.esm-d1af212c.js";import{E as ae}from"./index-ef87f5f5.js";import{l as ie}from"./index-1bad78d3.js";import{A as D}from"./Alert-31134f7b.js";import"./index-0bcbf38d.js";import"./Skeleton-f7cf79cd.js";import"./index-11d43e8c.js";import"./defineProperty-617dcc0b.js";import"./useNotification-beaad861.js";import"./DialogWrap-c72cf114.js";import"./index-be032cea.js";import"./localeData-323d4f89.js";import"./SinglePicker-45749b9c.js";import"./useMutateObserver-0dc1868a.js";import"./index-145766ec.js";import"./InputNumber-9a89f098.js";import"./Image-0014e045.js";import"./Upload-42d17e48.js";import"./index-fec725b3.js";import"./index-22d44a8b.js";const ze=()=>{const[v]=m.useForm(),[k]=m.useForm(),[M,j]=a.useState(!1),[P,R]=a.useState(""),[N,O]=a.useState(),[u,w]=a.useState(!1),[A,d]=a.useState(!1),[W,T]=a.useState(!1),[B,G]=a.useState(!1),[I,p]=a.useState(!1),[z,x]=a.useState(!1),[E,F]=a.useState(!1),{push:h}=V(),n=se.parse(window.location.search),f=new Array(n.to).filter(t=>t!==null).join(","),K=async(t,o)=>{d(!0);const{data:s}=await b.custom({url:"",method:"post",meta:{operation:"decodeGoogleJwtToken",variables:{token:{value:t,type:"String",required:!0},sessionKey:{value:localStorage.getItem("sessionKey"),type:"String",required:!0},credential:{value:o,type:"Boolean",required:!0}},fields:["success","message","token","expires","tokenExpires","accountDisabled","sessionKey",{user:["id","firstName","middleName","lastName","fullName","pic","email","isAdmin","isStaff","isActive"]}]}}).catch(()=>({data:null})).then(c=>c);s&&(w(s.accountDisabled),localStorage.setItem("lastLoginAttemp",new Date().toString()),localStorage.setItem("accountDisabled",s.accountDisabled?"1":"0"),localStorage.getItem("loginAttemp")?(localStorage.setItem("loginAttemp",(parseInt(localStorage.getItem("loginAttemp")??"1")+1).toString()),localStorage.setItem("lastLoginAttemp",new Date().toString())):(localStorage.setItem("loginAttemp","1"),localStorage.setItem("lastLoginAttemp",new Date().toString())),s.token&&s.user&&!s.otpAuth&&(localStorage.setItem("token",s.token),localStorage.removeItem("loginAttemp"),q.setHeader("Authorization",`Bearer ${s.token}`),localStorage.setItem("expires",s.expires),localStorage.setItem("tokenExpires",s.tokenExpires),localStorage.setItem("lastLoginAttemp",new Date().toString()),localStorage.setItem("expired","0"),localStorage.setItem("user",JSON.stringify(s.user)),p(!0),x(!1),localStorage.getItem("token")&&setTimeout(()=>{var c;try{localStorage.removeItem("loginAttemp")}catch{}n.to&&((c=n.to)==null?void 0:c.length)>0?window.location.href=f:window.location.href="/apps"},2e3)))},H=async()=>{const{data:t}=await b.custom({url:"",method:"get",meta:{operation:"systemSettings",variables:{},fields:["allowUserPublicRegistration","resetAccountLockoutAfterMinutes","accountLockoutDurationInMinutes","maximumLoginAttemp","allowGoogleAuth","allowLinkedinAuth","allowFacebookAuth","allowGithubAuth"]}}).catch(()=>({data:null})).then(o=>o);t?(T(t.allowUserPublicRegistration),G(t.allowGoogleAuth),localStorage.setItem("resetAccountLockoutAfterMinutes",t.resetAccountLockoutAfterMinutes.toString()),localStorage.setItem("accountLockoutDurationInMinutes",t.accountLockoutDurationInMinutes.toString()),localStorage.setItem("maximumLoginAttemp",t.maximumLoginAttemp.toString())):T(!1)},U=async t=>{if(d(!0),x(!1),p(!1),localStorage.getItem("resetAccountLockoutAfterMinutes")&&localStorage.getItem("loginAttemp")){const s=te(new Date).diff(new Date(localStorage.getItem("lastLoginAttemp")??new Date),"minutes"),c=localStorage.getItem("resetAccountLockoutAfterMinutes");s>parseInt(c??"0")&&(localStorage.setItem("loginAttemp","0"),localStorage.setItem("lastLoginAttemp",new Date().toString()))}const{data:o}=await b.custom({url:"",method:"post",meta:{operation:"auth",variables:{username:{value:t.username,type:"String",required:!0},password:{value:t.password,type:"String",required:!0},attemp:{value:parseInt(localStorage.getItem("loginAttemp")??"1"),type:"Int",required:!0},sessionKey:{value:localStorage.getItem("sessionKey"),type:"String",required:!0}},fields:["token","otpAuth","expires","tokenExpires","accountDisabled",{user:["id","firstName","middleName","lastName","fullName","pic","email","isAdmin","isStaff","isActive"]}]}}).then(s=>s).catch(()=>(l.remove(),l.error("Error occured while login"),d(!1),{data:null}));if(o)if(w(o.accountDisabled),localStorage.setItem("accountDisabled",o.accountDisabled?"1":"0"),localStorage.getItem("loginAttemp")?(localStorage.setItem("loginAttemp",(parseInt(localStorage.getItem("loginAttemp")??"1")+1).toString()),localStorage.setItem("lastLoginAttemp",new Date().toString())):(localStorage.setItem("loginAttemp","1"),localStorage.setItem("lastLoginAttemp",new Date().toString())),o.token&&o.user&&!o.otpAuth)localStorage.removeItem("loginAttemp"),q.setHeader("Authorization",`Bearer ${o.token}`),localStorage.setItem("token",o.token),localStorage.setItem("expires",o.expires),localStorage.setItem("tokenExpires",o.tokenExpires),localStorage.setItem("lastLoginAttemp",new Date().toString()),localStorage.setItem("expired","0"),localStorage.setItem("user",JSON.stringify(o.user)),p(!0),x(!1),setTimeout(()=>{var s;try{localStorage.removeItem("loginAttemp")}catch{}n.to&&((s=n.to)==null?void 0:s.length)>0?window.location.href=f:window.location.href="/apps"},2e3);else{if(d(!1),o.otpAuth)return h("/otp/"+o.user.id+"?to="+f);o.accountDisabled||(p(!1),x(!0))}},_=async t=>{const{data:o}=await b.custom({url:"",method:"post",meta:{operation:"loginRedeemCodeValidator",variables:{code:{value:t.reedemCode,type:"String",required:!0},userSub:{value:N??localStorage.getItem("userSub"),type:"String",required:!1}},fields:["success","message"]}}).catch(()=>(l.remove(),l.error("Error occured while validating reedem code"),{data:null})).then(s=>s);o&&(o.success?(R(t.reedemCode),j(!1),localStorage.removeItem("loginAttemp"),localStorage.removeItem("accountDisabled"),w(!1),x(!1),p(!1),d(!1)):(l.remove(),l.error(o.message)))};function J(){const t=new Uint8Array(16);if(window.crypto&&window.crypto.getRandomValues)window.crypto.getRandomValues(t);else for(let s=0;s<t.length;s++)t[s]=Math.floor(Math.random()*256);let o="";for(let s=0;s<t.length;s++)o+=("0"+t[s].toString(16)).slice(-2);localStorage.getItem("sessionKey")||localStorage.setItem("sessionKey",o)}return a.useEffect(()=>{var t;localStorage.getItem("token")&&(n.to&&((t=n.to)==null?void 0:t.length)>0?h(f):h("/apps")),localStorage.setItem("accountDisabled","0"),J(),H(),parseInt(localStorage.getItem("accountDisabled")??"0")===1&&w(!0)},[]),e.jsxs(e.Fragment,{children:[e.jsx(Y,{maxWidth:"xl",children:e.jsx(r,{sx:{display:"flex",flexDirection:"column"},children:e.jsxs(i,{container:!0,spacing:2,children:[e.jsx(ae,{}),e.jsx(i,{item:!0,xs:12,sm:12,md:6,lg:6,xl:6,children:e.jsxs("div",{className:"container",children:[e.jsx(r,{sx:{marginBottom:"20px"},children:e.jsx(g,{component:"h2",variant:"h2",color:"primary",fontWeight:700,style:{fontSize:"36px",marginTop:"20px",lineHeight:"1.4",color:"#000",colorAdjust:"exact"},children:"Welcome to your professional digital learning platform"})}),I&&!z&&e.jsx(D,{severity:"success",children:"Congratulation, Successfully LoggedIn"}),z&&!I&&e.jsx(D,{severity:"error",children:"Login Failed, please try again ..."}),parseInt(localStorage.getItem("loginAttemp")??"0")>parseInt(localStorage.getItem("maximumLoginAttemp")??"3")?e.jsx(e.Fragment,{children:e.jsxs(r,{children:[e.jsx("div",{style:{fontSize:22},children:"You have reached maximum login attemp. Please contact your administrator."}),e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(y,{size:"large",onClick:()=>{k.resetFields(),j(!0)},children:"Attemp Another Login"})})]})}):e.jsx(e.Fragment,{children:e.jsxs(r,{children:[u&&e.jsx(D,{itemType:"warning",children:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"This Account has being Deactivated/Blocked, please contact Adminstrator"}),e.jsx("span",{style:{marginLeft:3},children:e.jsx(y,{onClick:()=>j(!0),children:"Reedem me"})})]})}),e.jsx(ie.Spin,{spinning:A,children:e.jsxs(m,{layout:"vertical",form:v,onFinish:t=>{U(t)},requiredMark:!1,initialValues:{remember:!1,email:"",password:""},children:[e.jsx(m.Item,{name:"username",label:"Username/Email Address",rules:[{required:!0,type:"string",message:"Provide Username/Email Address ..."}],children:e.jsx(C,{disabled:u||I,size:"large",placeholder:"Username/Email Address",onChange:t=>{localStorage.setItem("userSub",t.target.value),O(t.target.value)}})}),e.jsx(m.Item,{name:"password",label:"Password",rules:[{required:!0,message:"Provide Password ..."}],style:{marginBottom:"12px"},children:e.jsx(C,{type:E?"text":"password",placeholder:"Password",size:"large",disabled:u||I,suffix:E?e.jsx($,{onClick:()=>{F(!1)}}):e.jsx(Q,{onClick:()=>{F(!0)}})})}),e.jsx("div",{style:{marginBottom:"50px",marginTop:"10px"},children:e.jsx("a",{style:{float:"left",fontSize:"18px"},onClick:()=>h("/forgot_password"),children:"Forgot password?"})}),e.jsx(y,{shape:"round",itemType:"ghost",size:"large",style:{backgroundColor:"red",color:"white",fontWeight:"bolder",height:"50px"},htmlType:"submit",block:!0,loading:A,disabled:A||u,children:"Sign in"})]})}),e.jsxs(r,{children:[e.jsx("div",{style:{marginTop:20},children:e.jsx("hr",{style:{width:"100%"}})}),e.jsx("div",{style:{position:"relative",top:"-20px",display:"flex",justifyContent:"center"},children:e.jsx(g,{sx:{backgroundColor:"#fff",padding:"0 10px",borderRadius:"50%"},children:"Or"})})]}),B&&e.jsx("div",{style:{marginTop:8},children:e.jsx(re,{onSuccess:t=>{const o=t.credential;o&&K(o,!0)},onError:()=>{d(!1),l.remove(),l.error("Error occured while login")},useOneTap:!0,width:"600",shape:"pill",size:"large"})}),W&&e.jsx("div",{style:{marginTop:15},children:e.jsxs(y,{shape:"round",itemType:"ghost",size:"large",style:{color:"black",fontWeight:"bolder",height:"50px",display:"flex",justifyContent:"center",alignItems:"center"},block:!0,disabled:A||u,onClick:()=>h("/register?to="+f),children:["New to ",L.system_name,"? Sign up"]})})]})})]})}),e.jsx(i,{item:!0,xs:12,sm:12,md:6,lg:6,xl:6,sx:{display:"flex",flexDirection:"row",justifyContent:"flex-end",alignItems:"center"},children:e.jsx(r,{className:"brain background-cover",sx:{display:{xs:"none",sm:"none",md:"flex",lg:"flex",xl:"flex"}}})})]})})}),e.jsx(r,{sx:{marginTop:"30px"},children:e.jsxs(i,{container:!0,spacing:2,sx:{height:{xs:"300px",sm:"300px",md:"300px",lg:"350px",xl:"350px"},paddingLeft:{xs:"5px",sm:"5px",md:"0px",lg:"0px",xl:"0px"},paddingRight:{xs:"20px",sm:"10px",md:"0px",lg:"0px",xl:"0px"},display:"flex",flexDirection:"row",justifyContent:"flex-end",backgroundColor:"#f5f5f5"},children:[e.jsx(i,{item:!0,xs:12,sm:12,md:2,lg:2,xl:2}),e.jsxs(i,{item:!0,xs:12,sm:12,md:10,lg:10,xl:10,sx:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center"},children:[e.jsx(r,{sx:{height:{xs:"300px",sm:"300px",md:"300px",lg:"300px",xl:"300px"},width:"300px",display:{xs:"none",sm:"none",md:"flex",lg:"flex",xl:"flex"},backgroundImage:"url(/images/sharing.jpg)",backgroundSize:"cover",borderRadius:"50%",boxShadow:"0 0 10px 0px #000",marginLeft:"100px"}}),e.jsxs(r,{sx:{marginLeft:"20px",width:{xs:"100%",sm:"100%",md:"50vw",lg:"50vw",xl:"50vw"}},children:[e.jsx(g,{component:"h2",variant:"h2",color:"primary",fontWeight:700,style:{fontSize:"30px",marginTop:"20px",lineHeight:"1.4",color:"#000",colorAdjust:"exact"},children:"Accessing your learning materials has never been easier"}),e.jsxs(g,{component:"h4",variant:"h4",color:"primary",fontWeight:200,style:{fontSize:"20px",marginTop:"20px",lineHeight:"1.4",color:"#000",colorAdjust:"exact"},children:[L.system_name," is a digital learning platform that provides you with the best learning materials through community sharing. You can also share your learning materials with other. Utilize the power of Community Sharing via our well designed applications/modules",e.jsxs(r,{sx:{display:"flex",flexDirection:"row",justifyContent:"flex-start",marginTop:"20px"},children:[e.jsx(S,{title:"Odrive"}),e.jsx(S,{title:"Learning Center"}),e.jsx(S,{title:"Articles"}),e.jsx(S,{title:"Olib"}),e.jsx(S,{title:"Syllabus"})]})]})]})]}),e.jsxs(i,{item:!0,xs:12,sm:12,md:10,lg:10,xl:10,sx:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center"},children:[e.jsxs(r,{sx:{marginLeft:"20px",width:{xs:"100%",sm:"100%",md:"50vw",lg:"50vw",xl:"50vw"}},children:[e.jsx(g,{component:"h2",variant:"h2",color:"primary",fontWeight:700,style:{fontSize:"30px",marginTop:"20px",lineHeight:"1.4",color:"#000",colorAdjust:"exact"},children:"Operate your Online Classes with ease"}),e.jsxs(g,{component:"h4",variant:"h4",color:"primary",fontWeight:200,style:{fontSize:"20px",marginTop:"20px",lineHeight:"1.4",color:"#000",colorAdjust:"exact"},children:["Discover the power of ",L.system_name,", a dynamic platform designed to streamline virtual education. Whether you're a teacher, lecturer, or tutor, our OClass Module empowers you to effortlessly organize and manage your online class sessions. Seamlessly collect student fees upon subscription, ensuring a hassle-free experience for both educators and learners. Join us on Olbongo and revolutionize your teaching journey with our user-friendly tools for virtual education."]})]}),e.jsx(r,{sx:{height:{xs:"300px",sm:"300px",md:"300px",lg:"300px",xl:"300px"},width:"300px",display:{xs:"none",sm:"none",md:"flex",lg:"flex",xl:"flex"},backgroundImage:"url(/images/online_class.jpg)",backgroundSize:"cover",boxShadow:"0 0 10px 0px #000",marginLeft:"100px",borderTopRightRadius:"50%",borderBottomLeftRadius:"50%"}})]}),e.jsx(i,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12,children:e.jsx(oe,{})})]})}),e.jsx(Z,{title:"Failed Login Attemp Redemption",open:M,width:"35vw",onClose:t=>j(t),children:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx("p",{style:{fontSize:18},children:"Please fill the form below to redeem your failed login attemp."})}),e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx("p",{children:e.jsx(m,{layout:"vertical",form:k,onFinish:t=>{_(t)},requiredMark:!1,autoComplete:"off",children:e.jsx(m.Item,{name:"reedemCode",label:e.jsxs("div",{children:[e.jsx("span",{children:"Reedem Code"}),e.jsx("span",{style:{marginLeft:5},children:e.jsx(X,{title:"Please Enter Reedem Code sent to your mobile phone(SMS)",color:"green",children:e.jsx("a",{children:e.jsx(ee,{})})})})]}),rules:[{required:!0,type:"string",message:"Provide Reedem Code ..."}],children:e.jsx(C,{size:"large",placeholder:"Reedem Code",onChange:t=>{R(t.target.value)}})})})})}),e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(y,{size:"large",disabled:P.length<4,onClick:()=>k.submit(),children:"Reedem"})})]})})]})},S=v=>e.jsx(r,{sx:{border:"1px solid #000",padding:"5px 10px",borderRadius:"10px"},children:v.title});export{ze as Login};
