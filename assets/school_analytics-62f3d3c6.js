import{r,j as s,R as m,d as a,al as h,hf as g,f as x,ak as j,S as v}from"./index-0106a5d3.js";const{Title:k,Text:_}=h,b=o=>{const[e,i]=r.useState(),[c,u]=r.useState(!0),d=async()=>{g().then(l=>{l&&i(l.analytics)}),u(!1)};r.useEffect(()=>{d()},[]);const t=l=>s.jsx(a,{span:3,children:s.jsx(x,{loading:c,active:!0,children:s.jsx(j,{to:l.link,children:s.jsx("div",{style:{marginRight:10,marginTop:5,boxShadow:"0 0 10px rgba(0,0,0,0.1)",padding:10,backgroundColor:"#fff"},children:s.jsxs(v,{direction:"vertical",align:"center",style:{width:"100%",justifyContent:"center"},children:[s.jsx("span",{children:l.value}),s.jsx("span",{children:l.title})]})})})})});return s.jsx(s.Fragment,{children:s.jsxs(m,{align:"top",children:[s.jsx(a,{span:24,children:s.jsx(k,{level:5,children:"Analytics"})}),s.jsx(t,{title:"Users/Members",value:e==null?void 0:e.total_members,link:"/schoolmanager/schoolmembers"}),["pr","osc","asc"].some(l=>{var n;return(n=o==null?void 0:o.operatingTypesCodes)==null?void 0:n.includes(l)})&&s.jsxs(s.Fragment,{children:[s.jsx(t,{title:"Education Levels",value:e==null?void 0:e.total_education_levels,link:"/schoolmanager/educationlevels"}),s.jsx(t,{title:"Subjects",value:e==null?void 0:e.total_subjects,link:"/schoolmanager/subjects"})]}),["uni","col","poly"].some(l=>{var n;return(n=o==null?void 0:o.operatingTypesCodes)==null?void 0:n.includes(l)})&&s.jsxs(s.Fragment,{children:[s.jsx(t,{title:"Programmes",value:e==null?void 0:e.total_programmes,link:"/schoolmanager/programmes"}),s.jsx(t,{title:"Faculties",value:e==null?void 0:e.total_faculties,link:"/schoolmanager/faculties"}),s.jsx(t,{title:"Departments",value:e==null?void 0:e.total_departments,link:"/schoolmanager/departments"}),s.jsx(t,{title:"Courses",value:e==null?void 0:e.total_courses,link:"/schoolmanager/courses"}),s.jsx(t,{title:"Study Courses",value:e==null?void 0:e.total_study_courses,link:"/schoolmanager/study/courses"}),s.jsx(t,{title:"Modules",value:e==null?void 0:e.total_modules,link:"/schoolmanager/modules"})]}),s.jsx(t,{title:"Roles",value:e==null?void 0:e.total_roles,link:"/schoolmanager/roles"})]})})};export{b as SchoolAnalytics};
