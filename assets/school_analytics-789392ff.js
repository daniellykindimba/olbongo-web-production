import{r as m,j as s,aW as c,aP as d,iW as g}from"./index-5ca9535b.js";import{A as o}from"./analytic_card_component-38a8e503.js";import{T as j}from"./index-56a878e3.js";import"./Skeleton-716fddca.js";import"./DotChartOutlined-f39c986e.js";import"./EditOutlined-401a1613.js";import"./transButton-9e6b3446.js";import"./index-3a1cff3c.js";const{Title:x,Text:b}=j,T=l=>{const[e,n]=m.useState(),[t,i]=m.useState(!0),u=async()=>{g().then(r=>{r&&n(r.analytics)}),i(!1)};return m.useEffect(()=>{u()},[]),s.jsx(s.Fragment,{children:s.jsxs(c,{align:"top",children:[s.jsx(d,{span:24,children:s.jsx(x,{level:5,children:"Analytics"})}),s.jsx(o,{title:"Users/Members",value:e==null?void 0:e.total_members,link:"/schoolmanager/schoolmembers",loading:t}),["pr","osc","asc"].some(r=>{var a;return(a=l==null?void 0:l.operatingTypesCodes)==null?void 0:a.includes(r)})&&s.jsxs(s.Fragment,{children:[s.jsx(o,{title:"Education Levels",value:e==null?void 0:e.total_education_levels,link:"/schoolmanager/educationlevels",loading:t}),s.jsx(o,{title:"Subjects",value:e==null?void 0:e.total_subjects,link:"/schoolmanager/subjects",loading:t})]}),["uni","col","poly"].some(r=>{var a;return(a=l==null?void 0:l.operatingTypesCodes)==null?void 0:a.includes(r)})&&s.jsxs(s.Fragment,{children:[s.jsx(o,{title:"Programmes",value:e==null?void 0:e.total_programmes,link:"/schoolmanager/programmes",loading:t}),s.jsx(o,{title:"Faculties",value:e==null?void 0:e.total_faculties,link:"/schoolmanager/faculties",loading:t}),s.jsx(o,{title:"Departments",value:e==null?void 0:e.total_departments,link:"/schoolmanager/departments",loading:t}),s.jsx(o,{title:"Courses",value:e==null?void 0:e.total_courses,link:"/schoolmanager/courses",loading:t}),s.jsx(o,{title:"Study Courses",value:e==null?void 0:e.total_study_courses,link:"/schoolmanager/study/courses",loading:t}),s.jsx(o,{title:"Modules",value:e==null?void 0:e.total_modules,link:"/schoolmanager/modules",loading:t})]}),s.jsx(o,{title:"Roles",value:e==null?void 0:e.total_roles,link:"/schoolmanager/roles",loading:t})]})})};export{T as SchoolAnalytics};
