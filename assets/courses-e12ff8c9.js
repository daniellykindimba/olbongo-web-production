import{r as s,c as j,j as e,C,B as a,G as o,F as y,P as S,g as v,_ as p}from"./index-31656684.js";import{E}from"./index-02587921.js";import{E as w}from"./footer-f0e2dcbe.js";import{d as P}from"./data_objects-18138be9.js";import{C as b}from"./course_item-a5b7739a.js";import{S as D}from"./Skeleton-ac22c0ad.js";import"./index-76ef387c.js";import"./index-c6966173.js";import"./index-296df5bd.js";import"./data_objects-97b19571.js";import"./index-27322a9a.js";import"./StarFilled-ce1748cd.js";import"./Rate-c64c3a3a.js";import"./DotChartOutlined-f39c986e.js";const K=()=>{const[d,n]=s.useState(!0),[B,m]=s.useState(0),[c,x]=s.useState(1),[F,u]=s.useState(0),[g,f]=s.useState([]);j();const l=async(t,i="")=>{n(!0);const{data:r}=await v.custom({url:"",method:"get",meta:{operation:"madarasaToBuyBrowse",variables:{page:{value:t,type:"Int",required:!0},key:{value:i,type:"String",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:P}]}}).catch(()=>(p.remove(),p.error("Error getting darasas"),{data:null})).then(h=>h);r&&(m(r.total),x(r.page),u(r.pages),f(r.results)),n(!1)};return s.useEffect(()=>{l(1)},[]),e.jsxs(e.Fragment,{children:[e.jsxs(C,{maxWidth:"xl",children:[e.jsx(a,{sx:{display:"flex",flexDirection:"column"},children:e.jsxs(o,{container:!0,spacing:2,children:[e.jsx(E,{}),e.jsxs(o,{item:!0,xs:24,sm:24,md:24,lg:24,xl:24,children:[e.jsx(a,{sx:{display:"flex",flexDirection:"row",justifyContent:"start",alignItems:"center",padding:"20px",fontSize:"30px",fontWeight:"bold"},children:"A broad selection of Courses/Classes"}),e.jsx(a,{sx:{display:"flex",flexDirection:"row",justifyContent:"start",alignItems:"center",padding:"20px",fontSize:"20px",fontWeight:"bold"},children:"Choose from over thousdans online courses/classes with new additions published every month"})]}),d&&e.jsx(D,{active:!0}),g.map((t,i)=>e.jsx(b,{course:t}))]})}),e.jsx(a,{sx:{marginTop:10},children:e.jsx(y,{justify:"center",children:e.jsx(S,{defaultCurrent:c,onChange:async(t,i)=>{x(t),l(t)}})})})]}),e.jsx(a,{sx:{marginTop:"30px"},children:e.jsx(o,{container:!0,spacing:2,sx:{height:{xs:"300px",sm:"300px",md:"300px",lg:"350px",xl:"350px"},paddingLeft:{xs:"5px",sm:"5px",md:"0px",lg:"0px",xl:"0px"},paddingRight:{xs:"20px",sm:"10px",md:"0px",lg:"0px",xl:"0px"},display:"flex",flexDirection:"row",justifyContent:"flex-end",backgroundColor:"#f5f5f5"},children:e.jsx(o,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12,children:e.jsx(w,{})})})})]})};export{K as CoursesPage};
