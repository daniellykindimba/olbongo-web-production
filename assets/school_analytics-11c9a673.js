import{r as n,aM as s,aG as c,ay as d,jv as g}from"./index-2fc17c3b.js";import{A as o}from"./analytic_card_component-90936126.js";import{T as j}from"./index-0b5f66ee.js";import"./Skeleton-94302138.js";import"./index-9abc7cc3.js";import"./transButton-b0336faf.js";const{Title:x,Text:A}=j,C=l=>{const[e,m]=n.useState(),[t,u]=n.useState(!0),i=async()=>{g().then(r=>{r&&m(r.analytics)}),u(!1)};return n.useEffect(()=>{i()},[]),s.jsx(s.Fragment,{children:s.jsxs(c,{align:"top",children:[s.jsx(d,{span:24,children:s.jsx(x,{level:5,children:"Analytics"})}),s.jsx(o,{title:"Users/Members",value:e==null?void 0:e.total_members,link:"/schoolmanager/schoolmembers",loading:t}),["pr","osc","asc"].some(r=>{var a;return(a=l==null?void 0:l.operatingTypesCodes)==null?void 0:a.includes(r)})&&s.jsxs(s.Fragment,{children:[s.jsx(o,{title:"Education Levels",value:e==null?void 0:e.total_education_levels,link:"/schoolmanager/educationlevels",loading:t}),s.jsx(o,{title:"Subjects",value:e==null?void 0:e.total_subjects,link:"/schoolmanager/subjects",loading:t})]}),["uni","col","poly"].some(r=>{var a;return(a=l==null?void 0:l.operatingTypesCodes)==null?void 0:a.includes(r)})&&s.jsxs(s.Fragment,{children:[s.jsx(o,{title:"Programmes",value:e==null?void 0:e.total_programmes,link:"/schoolmanager/programmes",loading:t}),s.jsx(o,{title:"Faculties",value:e==null?void 0:e.total_faculties,link:"/schoolmanager/faculties",loading:t}),s.jsx(o,{title:"Departments",value:e==null?void 0:e.total_departments,link:"/schoolmanager/departments",loading:t}),s.jsx(o,{title:"Courses",value:e==null?void 0:e.total_courses,link:"/schoolmanager/courses",loading:t}),s.jsx(o,{title:"Study Courses",value:e==null?void 0:e.total_study_courses,link:"/schoolmanager/study/courses",loading:t}),s.jsx(o,{title:"Modules",value:e==null?void 0:e.total_modules,link:"/schoolmanager/modules",loading:t})]}),s.jsx(o,{title:"Roles",value:e==null?void 0:e.total_roles,link:"/schoolmanager/roles",loading:t})]})})};export{C as SchoolAnalytics};
