import{r,c as w,u as D,j as t,C as R,B as n,G as i,g as m,_ as x}from"./index-3f04361d.js";import{E}from"./index-bbf02133.js";import{E as I}from"./footer-0ed9a70b.js";import{d as g}from"./data_objects-c5a24b89.js";import{C as b}from"./course_item-c483b62f.js";import{R as L}from"./index-b8719ce6.js";import{S as B}from"./Skeleton-4286ac29.js";import"./index-cf6a1b0b.js";import"./index-2ac5d61b.js";import"./index-983365c0.js";import"./data_objects-54e2a4fd.js";import"./StarFilled-ce1748cd.js";import"./Rate-7f164c2b.js";import"./DotChartOutlined-f39c986e.js";const J=()=>{const[c,o]=r.useState(!0);r.useState(!0);const[T,u]=r.useState(0),[f,h]=r.useState(1),[e,j]=r.useState(),[y,S]=r.useState([]);w();const d=D(),C=async()=>{o(!0);const{data:s}=await m.custom({url:"",method:"get",meta:{operation:"darasaOpen",variables:{id:{value:parseInt(d.id.toString()),type:"Int",required:!0}},fields:g}}).catch(a=>(console.error(a),x.remove(),x.error("Error getting class"),{data:null})).then(a=>a);console.log(s),s&&j(s),o(!1)},v=async(s,a="")=>{o(!0);const{data:l}=await m.custom({url:"",method:"get",meta:{operation:"madarasaToBuyBrowse",variables:{page:{value:s,type:"Int",required:!0},key:{value:a,type:"String",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:g}]}}).catch(p=>(x.remove(),x.error("Error getting darasas"),{data:null})).then(p=>p);l&&(u(l.total),h(l.page),S(l.results)),o(!1)};return r.useEffect(()=>{C(),v(f)},[d.id]),t.jsxs(t.Fragment,{children:[t.jsx(R,{maxWidth:"xl",children:t.jsx(n,{sx:{display:"flex",flexDirection:"column"},children:t.jsxs(i,{container:!0,spacing:2,children:[t.jsx(E,{}),t.jsxs(i,{item:!0,xs:24,sm:24,md:24,lg:24,xl:24,children:[t.jsx(n,{sx:{display:"flex",flexDirection:"row",justifyContent:"start",alignItems:"center",padding:"20px",fontSize:"30px",fontWeight:"bold"},children:t.jsx("div",{style:{color:"#333",textDecoration:"underline"},children:e==null?void 0:e.name})}),t.jsx(n,{sx:{display:"flex",flexDirection:"row",justifyContent:"start",alignItems:"center",paddingBottom:"20px",paddingLeft:"20px",paddingRight:"20px",fontSize:"20px",fontWeight:"bold"},children:t.jsx("div",{dangerouslySetInnerHTML:{__html:(e==null?void 0:e.description)||""}})}),t.jsxs(n,{sx:{display:"flex",flexDirection:"row",justifyContent:"start",alignItems:"center",fontSize:"16px",paddingTop:"3px",paddingleft:"20px"},children:[t.jsx("span",{children:e==null?void 0:e.averageRating}),t.jsxs("span",{style:{marginLeft:"10px"},children:[t.jsx(L,{allowHalf:!0,disabled:!0,defaultValue:e==null?void 0:e.averageRating,onChange:s=>{console.log(s)}})," ","(",e==null?void 0:e.totalReviews.toLocaleString(),") Reviews |"," ",e==null?void 0:e.totalStudents.toLocaleString()," students"]})]})]}),t.jsx(i,{item:!0,xs:24,sm:24,md:24,lg:24,xl:24,children:t.jsx(n,{sx:{display:"flex",flexDirection:"row",justifyContent:"start",alignItems:"center",padding:"20px",fontSize:"30px",fontWeight:"bold"},children:"Related Courses"})}),c&&t.jsx(B,{active:!0}),y.map((s,a)=>t.jsx(b,{course:s}))]})})}),t.jsx(n,{sx:{marginTop:"30px"},children:t.jsx(i,{container:!0,spacing:2,sx:{height:{xs:"300px",sm:"300px",md:"300px",lg:"350px",xl:"350px"},paddingLeft:{xs:"5px",sm:"5px",md:"0px",lg:"0px",xl:"0px"},paddingRight:{xs:"20px",sm:"10px",md:"0px",lg:"0px",xl:"0px"},display:"flex",flexDirection:"row",justifyContent:"flex-end",backgroundColor:"#f5f5f5"},children:t.jsx(i,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12,children:t.jsx(I,{})})})})]})};export{J as CourseDetailsPage};
