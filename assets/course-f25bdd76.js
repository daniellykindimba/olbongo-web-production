import{r,c as w,u as D,j as t,C as R,B as n,G as i,g as m,_ as x}from"./index-7ac8fc92.js";import{E}from"./index-d259ab62.js";import{E as I}from"./footer-71b1db0e.js";import{d as g}from"./data_objects-775efe39.js";import{C as b}from"./course_item-58c133c5.js";import{R as L}from"./index-ddfc7e40.js";import{S as B}from"./Skeleton-a1e70c5e.js";import"./index-a283429b.js";import"./index-0a7ff63a.js";import"./index-0e10b20d.js";import"./data_objects-63bc483e.js";import"./StarFilled-ce1748cd.js";import"./Rate-2aa04c07.js";import"./DotChartOutlined-f39c986e.js";const J=()=>{const[c,o]=r.useState(!0);r.useState(!0);const[T,u]=r.useState(0),[f,h]=r.useState(1),[e,j]=r.useState(),[y,S]=r.useState([]);w();const d=D(),C=async()=>{o(!0);const{data:s}=await m.custom({url:"",method:"get",meta:{operation:"darasaOpen",variables:{id:{value:parseInt(d.id.toString()),type:"Int",required:!0}},fields:g}}).catch(a=>(console.error(a),x.remove(),x.error("Error getting class"),{data:null})).then(a=>a);console.log(s),s&&j(s),o(!1)},v=async(s,a="")=>{o(!0);const{data:l}=await m.custom({url:"",method:"get",meta:{operation:"madarasaToBuyBrowse",variables:{page:{value:s,type:"Int",required:!0},key:{value:a,type:"String",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:g}]}}).catch(p=>(x.remove(),x.error("Error getting darasas"),{data:null})).then(p=>p);l&&(u(l.total),h(l.page),S(l.results)),o(!1)};return r.useEffect(()=>{C(),v(f)},[d.id]),t.jsxs(t.Fragment,{children:[t.jsx(R,{maxWidth:"xl",children:t.jsx(n,{sx:{display:"flex",flexDirection:"column"},children:t.jsxs(i,{container:!0,spacing:2,children:[t.jsx(E,{}),t.jsxs(i,{item:!0,xs:24,sm:24,md:24,lg:24,xl:24,children:[t.jsx(n,{sx:{display:"flex",flexDirection:"row",justifyContent:"start",alignItems:"center",padding:"20px",fontSize:"30px",fontWeight:"bold"},children:t.jsx("div",{style:{color:"#333",textDecoration:"underline"},children:e==null?void 0:e.name})}),t.jsx(n,{sx:{display:"flex",flexDirection:"row",justifyContent:"start",alignItems:"center",paddingBottom:"20px",paddingLeft:"20px",paddingRight:"20px",fontSize:"20px",fontWeight:"bold"},children:t.jsx("div",{dangerouslySetInnerHTML:{__html:(e==null?void 0:e.description)||""}})}),t.jsxs(n,{sx:{display:"flex",flexDirection:"row",justifyContent:"start",alignItems:"center",fontSize:"16px",paddingTop:"3px",paddingleft:"20px"},children:[t.jsx("span",{children:e==null?void 0:e.averageRating}),t.jsxs("span",{style:{marginLeft:"10px"},children:[t.jsx(L,{allowHalf:!0,disabled:!0,defaultValue:e==null?void 0:e.averageRating,onChange:s=>{console.log(s)}})," ","(",e==null?void 0:e.totalReviews.toLocaleString(),") Reviews |"," ",e==null?void 0:e.totalStudents.toLocaleString()," students"]})]})]}),t.jsx(i,{item:!0,xs:24,sm:24,md:24,lg:24,xl:24,children:t.jsx(n,{sx:{display:"flex",flexDirection:"row",justifyContent:"start",alignItems:"center",padding:"20px",fontSize:"30px",fontWeight:"bold"},children:"Related Courses"})}),c&&t.jsx(B,{active:!0}),y.map((s,a)=>t.jsx(b,{course:s}))]})})}),t.jsx(n,{sx:{marginTop:"30px"},children:t.jsx(i,{container:!0,spacing:2,sx:{height:{xs:"300px",sm:"300px",md:"300px",lg:"350px",xl:"350px"},paddingLeft:{xs:"5px",sm:"5px",md:"0px",lg:"0px",xl:"0px"},paddingRight:{xs:"20px",sm:"10px",md:"0px",lg:"0px",xl:"0px"},display:"flex",flexDirection:"row",justifyContent:"flex-end",backgroundColor:"#f5f5f5"},children:t.jsx(i,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12,children:t.jsx(I,{})})})})]})};export{J as CourseDetailsPage};
