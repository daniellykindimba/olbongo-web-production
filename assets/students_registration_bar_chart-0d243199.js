import{O as o,r as n,j as a,k as l,g as d}from"./index-d9f4923f.js";import{C as u}from"./index-9cc17a74.js";const p=()=>{const[e,s]=o.useState([]),r=async()=>{const{data:t}=await d.custom({url:"",method:"get",meta:{operation:"studentsRegistrationByYearGraph",fields:[{data:["year","total"]}]}}).catch(()=>({data:null})).then(i=>i);t&&s(t.data)};return n.useEffect(()=>{r()},[]),a.jsx(l,{title:"Students Registrations By Year",children:a.jsx(u,{data:e,xField:"year",yField:"total",label:{position:"middle",style:{fill:"#FFFFFF",opacity:.6}},xAxis:{label:{autoHide:!0,autoRotate:!1}},meta:{type:{alias:"Registration Year"},sales:{alias:"Students"}}})})};export{p as StudentsRegistrationLineChart};
