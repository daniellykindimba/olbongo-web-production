import{r as e,m as u,j as t,S as m,k as p,by as x,g as f,_ as h}from"./index-cdd95245.js";import{S as g}from"./index-f177bddf.js";const F=i=>{const[n,a]=e.useState(!1),[s,o]=e.useState(),{push:l}=u(),c=async()=>{a(!0);const{data:r}=await f.custom({url:"",method:"get",meta:{operation:"dashboardFilesAnalytics",variables:{},fields:["totalFiles"]}}).catch(()=>(h.error("Error Files Analytics"),{data:null})).then(d=>d);r&&o(r),a(!1)};return e.useEffect(()=>{c()},[i.randKey]),t.jsx(t.Fragment,{children:t.jsx(m,{spinning:n,children:t.jsx("a",{onClick:()=>l("/odrive"),children:t.jsx(p,{children:t.jsx(g,{title:"Files",value:s==null?void 0:s.totalFiles,valueStyle:{color:"#3f8600"},prefix:t.jsx(x,{})})})})})})};export{F as DashboardFilesAnalyticsComponent};
