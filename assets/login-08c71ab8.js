import{aT as g,r as a,c as le,cu as r,j as e,C as ce,B as i,G as l,cB as p,av as j,a1 as D,_ as c,cn as E,cl as me,af as de,g as A,cC as P,cD as ge,cm as ue}from"./index-3f04361d.js";/* empty css               */import{E as pe}from"./footer-0ed9a70b.js";import{q as xe}from"./base-e8aaf39e.js";import{GoogleLogin as he}from"./index.esm-17d6141a.js";import{E as fe}from"./index-bbf02133.js";import{l as ye}from"./index-39a814b8.js";import{A as T}from"./Alert-0262c3cc.js";import{a as Se,E as je}from"./EyeOutlined-020c3904.js";import{I as Ae}from"./InfoCircleOutlined-95ab394c.js";import"./index-2ac5d61b.js";import"./Skeleton-4286ac29.js";import"./DotChartOutlined-f39c986e.js";import"./index-983365c0.js";import"./index-cf6a1b0b.js";import"./defineProperty-70760e04.js";import"./useNotification-c00c2ab5.js";import"./DialogWrap-baa689d5.js";import"./index-a52eff82.js";import"./localeData-ee81be6c.js";import"./SinglePicker-8226d477.js";import"./useMutateObserver-f4657bd8.js";import"./index-ee5ddf71.js";import"./InputNumber-baf1c013.js";import"./Image-6bd0bf5e.js";import"./Upload-875c30fd.js";import"./Rate-7f164c2b.js";import"./index-74485df2.js";import"./index-464f1c81.js";const Xe=()=>{const[k]=g.useForm(),[L]=g.useForm(),[B,w]=a.useState(!1),[W,R]=a.useState(""),[K,U]=a.useState(),[v,u]=a.useState(!1),[G,z]=a.useState(!1),[H,_]=a.useState(!1),[b,x]=a.useState(!1),[M,h]=a.useState(!1),[F,q]=a.useState(!1),{push:n}=le(),m=xe.parse(window.location.search),f=new Array(m.to).filter(t=>t!==null).join(","),y=r(t=>t.accountDisabled),J=r(t=>t.loginAttemp),V=r(t=>t.setToken),Y=r(t=>t.setUser),N=r(t=>t.setLoginAttemp),$=r(t=>t.setExpires),Q=r(t=>t.setTokenExpires),O=r(t=>t.setLastLoginAttemp),X=r(t=>t.setExpired),S=r(t=>t.setAccountDisabled),Z=r(t=>t.setResetAccountLockoutAfterMinutes),ee=r(t=>t.setAccountLockoutDurationInMinutes),te=r(t=>t.setMaximumLoginAttemp),oe=r(t=>t.setSystemSettings),se=async(t,s)=>{u(!0);const{data:o}=await A.custom({url:"",method:"post",meta:{operation:"decodeGoogleJwtToken",variables:{token:{value:t,type:"String",required:!0},sessionKey:{value:localStorage.getItem("sessionKey"),type:"String",required:!0},credential:{value:s,type:"Boolean",required:!0}},fields:["success","message","token","expires","tokenExpires","accountDisabled","sessionKey",{user:["id","firstName","middleName","lastName","fullName","pic","email","isAdmin","isStaff","isActive"]}]}}).catch(()=>({data:null})).then(d=>d);o&&(S(o.accountDisabled),O(new Date),S(o.accountDisabled),N(J+1),localStorage.setItem("lastLoginAttemp",new Date().toString()),localStorage.setItem("accountDisabled",o.accountDisabled?"1":"0"),localStorage.getItem("loginAttemp")?(localStorage.setItem("loginAttemp",(parseInt(localStorage.getItem("loginAttemp")??"1")+1).toString()),localStorage.setItem("lastLoginAttemp",new Date().toString())):(localStorage.setItem("loginAttemp","1"),localStorage.setItem("lastLoginAttemp",new Date().toString())),o.token&&o.user&&!o.otpAuth&&(V(o.token),N(0),Y(o.user),$(o.expires),Q(o.tokenExpires),O(new Date),X(!1),localStorage.setItem("token",o.token),localStorage.removeItem("loginAttemp"),P.setHeader("Authorization",`Bearer ${o.token}`),localStorage.setItem("expires",o.expires),localStorage.setItem("tokenExpires",o.tokenExpires),localStorage.setItem("lastLoginAttemp",new Date().toString()),localStorage.setItem("expired","0"),localStorage.setItem("user",JSON.stringify(o.user)),x(!0),h(!1),localStorage.getItem("token")&&(C(),setTimeout(()=>{var d;try{localStorage.removeItem("loginAttemp")}catch{}return m.to&&((d=m.to)==null?void 0:d.length)>0?n(f):n("/apps")},2e3))))},C=async()=>{const{data:t}=await A.custom({url:"",method:"get",meta:{operation:"apps",fields:["pages","total","page","hasNext","hasPrev",{results:["id","name","icon","url","created","updated","canAccess","isActive"]}]}});localStorage.setItem("apps",JSON.stringify(t.results))},re=async()=>{const{data:t}=await A.custom({url:"",method:"get",meta:{operation:"systemSettings",variables:{},fields:ge}}).catch(s=>(console.error(s),{data:null})).then(s=>s);t?(oe(t),z(t.allowUserPublicRegistration),_(t.allowGoogleAuth),Z(t.resetAccountLockoutAfterMinutes),localStorage.setItem("resetAccountLockoutAfterMinutes",t.resetAccountLockoutAfterMinutes.toString()),ee(t.accountLockoutDurationInMinutes),localStorage.setItem("accountLockoutDurationInMinutes",t.accountLockoutDurationInMinutes.toString()),te(t.maximumLoginAttemp),localStorage.setItem("maximumLoginAttemp",t.maximumLoginAttemp.toString())):z(!1)},ie=async t=>{if(u(!0),h(!1),x(!1),localStorage.getItem("resetAccountLockoutAfterMinutes")&&localStorage.getItem("loginAttemp")){const o=ue(new Date).diff(new Date(localStorage.getItem("lastLoginAttemp")??new Date),"minutes"),d=localStorage.getItem("resetAccountLockoutAfterMinutes");o>parseInt(d??"0")&&(localStorage.setItem("loginAttemp","0"),localStorage.setItem("lastLoginAttemp",new Date().toString()))}const{data:s}=await A.custom({url:"",method:"post",meta:{operation:"auth",variables:{username:{value:t.username,type:"String",required:!0},password:{value:t.password,type:"String",required:!0},attemp:{value:parseInt(localStorage.getItem("loginAttemp")??"1"),type:"Int",required:!0},sessionKey:{value:localStorage.getItem("sessionKey"),type:"String",required:!0}},fields:["token","otpAuth","expires","tokenExpires","accountDisabled",{user:["id","firstName","middleName","lastName","fullName","pic","email","isAdmin","isStaff","isActive"]}]}}).then(o=>o).catch(()=>(c.remove(),c.error("Error occured while login"),u(!1),{data:null}));if(s)if(S(s.accountDisabled),localStorage.setItem("accountDisabled",s.accountDisabled?"1":"0"),localStorage.getItem("loginAttemp")?(localStorage.setItem("loginAttemp",(parseInt(localStorage.getItem("loginAttemp")??"1")+1).toString()),localStorage.setItem("lastLoginAttemp",new Date().toString())):(localStorage.setItem("loginAttemp","1"),localStorage.setItem("lastLoginAttemp",new Date().toString())),s.token&&s.user&&!s.otpAuth)localStorage.removeItem("loginAttemp"),P.setHeader("Authorization",`Bearer ${s.token}`),localStorage.setItem("token",s.token),localStorage.setItem("expires",s.expires),localStorage.setItem("tokenExpires",s.tokenExpires),localStorage.setItem("lastLoginAttemp",new Date().toString()),localStorage.setItem("expired","0"),localStorage.setItem("user",JSON.stringify(s.user)),x(!0),h(!1),C(),setTimeout(()=>{var o;try{localStorage.removeItem("loginAttemp")}catch{}return m.to&&((o=m.to)==null?void 0:o.length)>0?n(f):n("/apps")},2e3);else{if(u(!1),s.otpAuth)return n("/otp/"+s.user.id+"?to="+f);s.accountDisabled||(x(!1),h(!0))}},ae=async t=>{const{data:s}=await A.custom({url:"",method:"post",meta:{operation:"loginRedeemCodeValidator",variables:{code:{value:t.reedemCode,type:"String",required:!0},userSub:{value:K??localStorage.getItem("userSub"),type:"String",required:!1}},fields:["success","message"]}}).catch(()=>(c.remove(),c.error("Error occured while validating reedem code"),{data:null})).then(o=>o);s&&(s.success?(R(t.reedemCode),w(!1),localStorage.removeItem("loginAttemp"),localStorage.removeItem("accountDisabled"),S(!1),h(!1),x(!1),u(!1)):(c.remove(),c.error(s.message)))};function ne(){const t=new Uint8Array(16);if(window.crypto&&window.crypto.getRandomValues)window.crypto.getRandomValues(t);else for(let o=0;o<t.length;o++)t[o]=Math.floor(Math.random()*256);let s="";for(let o=0;o<t.length;o++)s+=("0"+t[o].toString(16)).slice(-2);localStorage.getItem("sessionKey")||localStorage.setItem("sessionKey",s)}return a.useEffect(()=>{var t;localStorage.getItem("token")&&(C(),m.to&&((t=m.to)==null?void 0:t.length)>0?n(f):n("/apps")),localStorage.setItem("accountDisabled","0"),ne(),re(),parseInt(localStorage.getItem("accountDisabled")??"0")===1&&S(!0)},[]),e.jsxs(e.Fragment,{children:[e.jsx(ce,{maxWidth:"xl",children:e.jsx(i,{sx:{display:"flex",flexDirection:"column"},children:e.jsxs(l,{container:!0,spacing:2,children:[e.jsx(fe,{}),e.jsx(l,{item:!0,xs:12,sm:12,md:6,lg:6,xl:6,children:e.jsxs("div",{className:"container",children:[e.jsx(i,{sx:{marginBottom:"20px"},children:e.jsx(p,{component:"h2",variant:"h2",color:"primary",fontWeight:700,style:{fontSize:"36px",marginTop:"20px",lineHeight:"1.4",color:"#000",colorAdjust:"exact"},children:"Welcome to your professional digital learning platform"})}),b&&!M&&e.jsx(T,{severity:"success",children:"Congratulation, Successfully LoggedIn"}),M&&!b&&e.jsx(T,{severity:"error",children:"Login Failed, please try again ..."}),parseInt(localStorage.getItem("loginAttemp")??"0")>parseInt(localStorage.getItem("maximumLoginAttemp")??"3")?e.jsx(e.Fragment,{children:e.jsxs(i,{children:[e.jsx("div",{style:{fontSize:22},children:"You have reached maximum login attemp. Please contact your administrator."}),e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(j,{size:"large",onClick:()=>{L.resetFields(),w(!0)},children:"Attemp Another Login"})})]})}):e.jsx(e.Fragment,{children:e.jsxs(i,{children:[y&&e.jsx(T,{itemType:"warning",children:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"This Account has being Deactivated/Blocked, please contact Adminstrator"}),e.jsx("span",{style:{marginLeft:3},children:e.jsx(j,{onClick:()=>w(!0),children:"Reedem me"})})]})}),e.jsx(ye.Spin,{spinning:v,children:e.jsxs(g,{layout:"vertical",form:k,onFinish:t=>{ie(t)},requiredMark:!1,initialValues:{remember:!1,email:"",password:""},children:[e.jsx(g.Item,{name:"username",label:"Username/Email Address",rules:[{required:!0,type:"string",message:"Provide Username/Email Address ..."}],children:e.jsx(D,{disabled:y||b,size:"large",placeholder:"Username/Email Address",onChange:t=>{localStorage.setItem("userSub",t.target.value),U(t.target.value)}})}),e.jsx(g.Item,{name:"password",label:"Password",rules:[{required:!0,message:"Provide Password ..."}],style:{marginBottom:"12px"},children:e.jsx(D,{type:F?"text":"password",placeholder:"Password",size:"large",disabled:y||b,suffix:F?e.jsx(Se,{onClick:()=>{q(!1)}}):e.jsx(je,{onClick:()=>{q(!0)}})})}),e.jsx("div",{style:{marginBottom:"50px",marginTop:"10px"},children:e.jsx("a",{style:{float:"left",fontSize:"18px"},onClick:()=>n("/forgot_password"),children:"Forgot password?"})}),e.jsx(j,{shape:"round",itemType:"ghost",size:"large",style:{backgroundColor:"red",color:"white",fontWeight:"bolder",height:"50px"},htmlType:"submit",block:!0,loading:v,disabled:v||y,children:"Sign in"})]})}),H&&e.jsxs("div",{style:{marginTop:8},children:[e.jsxs(i,{children:[e.jsx("div",{style:{marginTop:20},children:e.jsx("hr",{style:{width:"100%"}})}),e.jsx("div",{style:{position:"relative",top:"-20px",display:"flex",justifyContent:"center"},children:e.jsx(p,{sx:{backgroundColor:"#fff",padding:"0 10px",borderRadius:"50%"},children:"Or"})})]}),e.jsx(he,{onSuccess:t=>{const s=t.credential;s&&se(s,!0)},onError:()=>{u(!1),c.remove(),c.error("Error occured while login")},useOneTap:!0,width:"600",shape:"pill",size:"large"})]}),G&&e.jsx("div",{style:{marginTop:15},children:e.jsxs(j,{shape:"round",itemType:"ghost",size:"large",style:{color:"black",fontWeight:"bolder",height:"50px",display:"flex",justifyContent:"center",alignItems:"center"},block:!0,disabled:v||y,onClick:()=>n("/register?to="+f),children:["New to ",E.system_name,"? Sign up"]})})]})})]})}),e.jsx(l,{item:!0,xs:12,sm:12,md:6,lg:6,xl:6,sx:{display:"flex",flexDirection:"row",justifyContent:"flex-end",alignItems:"center"},children:e.jsx(i,{className:"brain background-cover",sx:{display:{xs:"none",sm:"none",md:"flex",lg:"flex",xl:"flex"}}})})]})})}),e.jsx(i,{sx:{marginTop:"30px"},children:e.jsxs(l,{container:!0,spacing:2,sx:{height:{xs:"300px",sm:"300px",md:"300px",lg:"350px",xl:"350px"},paddingLeft:{xs:"5px",sm:"5px",md:"0px",lg:"0px",xl:"0px"},paddingRight:{xs:"20px",sm:"10px",md:"0px",lg:"0px",xl:"0px"},display:"flex",flexDirection:"row",justifyContent:"flex-end",backgroundColor:"#f5f5f5"},children:[e.jsx(l,{item:!0,xs:12,sm:12,md:2,lg:2,xl:2}),e.jsxs(l,{item:!0,xs:12,sm:12,md:10,lg:10,xl:10,sx:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center"},children:[e.jsx(i,{sx:{height:{xs:"300px",sm:"300px",md:"300px",lg:"300px",xl:"300px"},width:"300px",display:{xs:"none",sm:"none",md:"flex",lg:"flex",xl:"flex"},backgroundImage:"url(/images/sharing.jpg)",backgroundSize:"cover",borderRadius:"50%",boxShadow:"0 0 10px 0px #000",marginLeft:"100px"}}),e.jsxs(i,{sx:{marginLeft:"20px",width:{xs:"100%",sm:"100%",md:"50vw",lg:"50vw",xl:"50vw"}},children:[e.jsx(p,{component:"h2",variant:"h2",color:"primary",fontWeight:700,style:{fontSize:"30px",marginTop:"20px",lineHeight:"1.4",color:"#000",colorAdjust:"exact"},children:"Accessing your learning materials has never been easier"}),e.jsxs(p,{component:"h4",variant:"h4",color:"primary",fontWeight:200,style:{fontSize:"20px",marginTop:"20px",lineHeight:"1.4",color:"#000",colorAdjust:"exact"},children:[E.system_name," is a digital learning platform that provides you with the best learning materials through community sharing. You can also share your learning materials with other. Utilize the power of Community Sharing via our well designed applications/modules",e.jsxs(i,{sx:{display:"flex",flexDirection:"row",justifyContent:"flex-start",marginTop:"20px"},children:[e.jsx(I,{title:"Odrive"}),e.jsx(I,{title:"Learning Center"}),e.jsx(I,{title:"Articles"}),e.jsx(I,{title:"Olib"}),e.jsx(I,{title:"Syllabus"})]})]})]})]}),e.jsxs(l,{item:!0,xs:12,sm:12,md:10,lg:10,xl:10,sx:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center"},children:[e.jsxs(i,{sx:{marginLeft:"20px",width:{xs:"100%",sm:"100%",md:"50vw",lg:"50vw",xl:"50vw"}},children:[e.jsx(p,{component:"h2",variant:"h2",color:"primary",fontWeight:700,style:{fontSize:"30px",marginTop:"20px",lineHeight:"1.4",color:"#000",colorAdjust:"exact"},children:"Operate your Online Classes with ease"}),e.jsxs(p,{component:"h4",variant:"h4",color:"primary",fontWeight:200,style:{fontSize:"20px",marginTop:"20px",lineHeight:"1.4",color:"#000",colorAdjust:"exact"},children:["Discover the power of ",E.system_name,", a dynamic platform designed to streamline virtual education. Whether you're a teacher, lecturer, or tutor, our OClass Module empowers you to effortlessly organize and manage your online class sessions. Seamlessly collect student fees upon subscription, ensuring a hassle-free experience for both educators and learners. Join us on Olbongo and revolutionize your teaching journey with our user-friendly tools for virtual education."]})]}),e.jsx(i,{sx:{height:{xs:"300px",sm:"300px",md:"300px",lg:"300px",xl:"300px"},width:"300px",display:{xs:"none",sm:"none",md:"flex",lg:"flex",xl:"flex"},backgroundImage:"url(/images/online_class.jpg)",backgroundSize:"cover",boxShadow:"0 0 10px 0px #000",marginLeft:"100px",borderTopRightRadius:"50%",borderBottomLeftRadius:"50%"}})]}),e.jsx(l,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12,children:e.jsx(pe,{})})]})}),e.jsx(me,{title:"Failed Login Attemp Redemption",open:B,width:"35vw",onClose:t=>w(t),children:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx("p",{style:{fontSize:18},children:"Please fill the form below to redeem your failed login attemp."})}),e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx("p",{children:e.jsx(g,{layout:"vertical",form:L,onFinish:t=>{ae(t)},requiredMark:!1,autoComplete:"off",children:e.jsx(g.Item,{name:"reedemCode",label:e.jsxs("div",{children:[e.jsx("span",{children:"Reedem Code"}),e.jsx("span",{style:{marginLeft:5},children:e.jsx(de,{title:"Please Enter Reedem Code sent to your mobile phone(SMS)",color:"green",children:e.jsx("a",{children:e.jsx(Ae,{})})})})]}),rules:[{required:!0,type:"string",message:"Provide Reedem Code ..."}],children:e.jsx(D,{size:"large",placeholder:"Reedem Code",onChange:t=>{R(t.target.value)}})})})})}),e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(j,{size:"large",disabled:W.length<4,onClick:()=>L.submit(),children:"Reedem"})})]})})]})},I=k=>e.jsx(i,{sx:{border:"1px solid #000",padding:"5px 10px",borderRadius:"10px"},children:k.title});export{Xe as Login};
