import{r as e,j as a,g as u}from"./index-ccfcd4da.js";import{C as c}from"./index-d664ae32.js";import{C as d}from"./index-e733c2fd.js";import"./Skeleton-a2d4f426.js";import"./index-5c2e1e93.js";const y=()=>{const[r,s]=e.useState([]),o=async()=>{const{data:t}=await u.custom({url:"",method:"get",meta:{operation:"studentsTeachersRegistrationByYearGraph",fields:[{data:["year","type","value"]}]}}).catch(()=>({data:null})).then(n=>n);t&&s(t.data)};e.useEffect(()=>{o()},[]);const i={data:r,xField:"year",yField:"value",seriesField:"type",isGroup:!0,columnStyle:{radius:[20,20,0,0]}};return a.jsx(d,{title:"Teachers/Students Registrations",children:a.jsx(c,{...i})})};export{y as StudentsTeachersBarChart};
