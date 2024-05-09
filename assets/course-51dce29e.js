import{r as n,c as j,j as e,C as y,B as t,G as i,g as C,_ as l}from"./index-351477c3.js";import{E as S}from"./index-f2a8069e.js";import{E as w}from"./footer-297a1442.js";import{d as b}from"./data_objects-84b5f664.js";import{R as x}from"./index-bbc02a13.js";import"./index-3779f7bb.js";import"./index-e245930b.js";import"./Skeleton-8f0e80db.js";import"./index-d9a31a18.js";import"./data_objects-f008dc0a.js";import"./Rate-6e1c6086.js";const F=()=>{const[D,d]=n.useState(!0),[v,p]=n.useState(0),[c,u]=n.useState(1),[f,m]=n.useState([]),{push:g}=j(),h=async(s,a="")=>{const{data:r}=await C.custom({url:"",method:"get",meta:{operation:"madarasaToBuyBrowse",variables:{page:{value:s,type:"Int",required:!0},key:{value:a,type:"String",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:b}]}}).catch(o=>(l.remove(),l.error("Error getting darasas"),{data:null})).then(o=>o);r&&(p(r.total),u(r.page),m(r.results)),d(!1)};return n.useEffect(()=>{h(c)},[]),e.jsxs(e.Fragment,{children:[e.jsx(y,{maxWidth:"xl",children:e.jsx(t,{sx:{display:"flex",flexDirection:"column"},children:e.jsxs(i,{container:!0,spacing:2,children:[e.jsx(S,{}),e.jsxs(i,{item:!0,xs:24,sm:24,md:24,lg:24,xl:24,children:[e.jsx(t,{sx:{display:"flex",flexDirection:"row",justifyContent:"start",alignItems:"center",padding:"20px",fontSize:"30px",fontWeight:"bold"},children:"Ultimate AWS Certified Cloud Practitioner CLF-C02"}),e.jsx(t,{sx:{display:"flex",flexDirection:"row",justifyContent:"start",alignItems:"center",padding:"20px",fontSize:"20px",fontWeight:"bold"},children:"This AWS Certified Cloud Practitioner course is for anyone looking to learn and understand what AWS Cloud is all about. This course is designed to help you pass the AWS Certified Cloud Practitioner exam by breaking down the exam topics and by providing you with a solid understanding of what AWS Cloud is and what the core services are that AWS provides."}),e.jsxs(t,{sx:{display:"flex",flexDirection:"row",justifyContent:"start",alignItems:"center",fontSize:"16px",paddingTop:"3px"},children:[e.jsx("span",{children:"4.7"}),e.jsxs("span",{style:{marginLeft:"10px"},children:[e.jsx(x,{allowHalf:!0,defaultValue:4.7,onChange:s=>{console.log(s)}})," ","(1,000) Reviews | 10,000 students"]})]})]}),e.jsx(i,{item:!0,xs:24,sm:24,md:24,lg:24,xl:24,children:e.jsx(t,{sx:{display:"flex",flexDirection:"row",justifyContent:"start",alignItems:"center",padding:"20px",fontSize:"30px",fontWeight:"bold"},children:"Related Courses"})}),f.map((s,a)=>{var r;return e.jsx(i,{item:!0,xs:12,sm:6,md:4,lg:3,xl:3,children:e.jsxs(t,{sx:{display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"start",backgroundColor:"#f5f5f5",cursor:"pointer"},onClick:()=>{g(`/course/${s.id}/${s.slug}/details`)},children:[e.jsx(t,{sx:{height:"200px",width:"100%",backgroundImage:`url(${s.cover})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",marginBottom:"10px",borderRadius:"5px"}}),e.jsx(t,{sx:{display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"center",fontSize:"20px",fontWeight:"bold"},children:s.name}),e.jsx(t,{sx:{display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"start",fontSize:"16px",paddingTop:"3px"},children:(r=s.user)==null?void 0:r.fullName}),e.jsxs(t,{sx:{display:"flex",flexDirection:"row",justifyContent:"start",alignItems:"center",fontSize:"16px",paddingTop:"3px"},children:[e.jsx("span",{children:"4.7"}),e.jsxs("span",{style:{marginLeft:"10px"},children:[e.jsx(x,{allowHalf:!0,defaultValue:4.7})," (1,000)"]})]}),e.jsx(t,{sx:{display:"flex",flexDirection:"row",justifyContent:"start",alignItems:"center",fontSize:"16px",paddingTop:"3px",paddingBottom:"3px"},children:e.jsx("span",{children:new Intl.NumberFormat("en-US",{style:"currency",currency:"TZS"}).format(s.price)})})]})},a)})]})})}),e.jsx(t,{sx:{marginTop:"30px"},children:e.jsx(i,{container:!0,spacing:2,sx:{height:{xs:"300px",sm:"300px",md:"300px",lg:"350px",xl:"350px"},paddingLeft:{xs:"5px",sm:"5px",md:"0px",lg:"0px",xl:"0px"},paddingRight:{xs:"20px",sm:"10px",md:"0px",lg:"0px",xl:"0px"},display:"flex",flexDirection:"row",justifyContent:"flex-end",backgroundColor:"#f5f5f5"},children:e.jsx(i,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12,children:e.jsx(w,{})})})})]})};export{F as CourseDetailsPage};
