import{r as e,aM as a,bJ as u}from"./index-2fc17c3b.js";import{C as c}from"./index-6c1fe69f.js";import{C as d}from"./index-f023b25a.js";import"./Skeleton-94302138.js";const f=()=>{const[r,s]=e.useState([]),o=async()=>{const{data:t}=await u.custom({url:"",method:"get",meta:{operation:"studentsTeachersRegistrationByYearGraph",fields:[{data:["year","type","value"]}]}}).catch(()=>({data:null})).then(n=>n);t&&s(t.data)};e.useEffect(()=>{o()},[]);const i={data:r,xField:"year",yField:"value",seriesField:"type",isGroup:!0,columnStyle:{radius:[20,20,0,0]}};return a.jsx(d,{title:"Teachers/Students Registrations",children:a.jsx(c,{...i})})};export{f as StudentsTeachersBarChart};
