import{c as l,j as e,G as c,B as n}from"./index-38408b6c.js";import{R as x}from"./index-056e2a86.js";const f=t=>{var r,s,i,o;const{push:a}=l();return e.jsx(e.Fragment,{children:e.jsx(c,{item:!0,xs:12,sm:6,md:4,lg:3,xl:3,children:e.jsxs(n,{sx:{display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"start",backgroundColor:"#f5f5f5",cursor:"pointer"},onClick:()=>{a(`/course/${t.course.id}/${t.course.slug}/details`)},children:[e.jsx(n,{sx:{height:"200px",width:"100%",backgroundImage:`url(${t.course.cover})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",marginBottom:"10px",borderRadius:"5px"}}),e.jsx(n,{sx:{display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"center",fontSize:"20px",fontWeight:"bold"},children:t.course.name}),e.jsx(n,{sx:{display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"start",fontSize:"16px",paddingTop:"3px"},children:(r=t.course.user)==null?void 0:r.fullName}),e.jsxs(n,{sx:{display:"flex",flexDirection:"row",justifyContent:"start",alignItems:"center",fontSize:"16px",paddingTop:"3px"},children:[e.jsx("span",{children:(s=t.course)==null?void 0:s.averageRating}),e.jsxs("span",{style:{marginLeft:"10px"},children:[e.jsx(x,{allowHalf:!0,disabled:!0,defaultValue:(i=t.course)==null?void 0:i.averageRating})," ","(",(o=t.course)==null?void 0:o.totalReviews.toLocaleString(),")"]})]}),e.jsx(n,{sx:{display:"flex",flexDirection:"row",justifyContent:"start",alignItems:"center",fontSize:"16px",paddingTop:"3px",paddingBottom:"3px"},children:e.jsx("span",{children:new Intl.NumberFormat("en-US",{style:"currency",currency:"TZS"}).format(t.course.price)})})]})},t.course.id)})};export{f as C};
