import{r as n,c as a,cu as p,j as r,a8 as c}from"./index-8c21ffd9.js";import{C as l}from"./index-9397a134.js";import{S as m}from"./index-e93bc20d.js";import{A as x}from"./ArrowUpOutlined-025afdf3.js";import"./Skeleton-bf8200fc.js";import"./DotChartOutlined-f39c986e.js";import"./index-b0dde265.js";const g=d=>{const[s,t]=n.useTransition(),{push:i}=a(),o=p(e=>e.totalDrives);return r.jsx(r.Fragment,{children:r.jsx(c,{spinning:s,children:r.jsx("a",{onClick:()=>{t(()=>{i("/odrive/drives")})},children:r.jsx(l,{children:r.jsx(m,{title:"Drives",value:o,valueStyle:{color:"#3f8600"},prefix:r.jsx(x,{})})})})})})};export{g as DashboardDrivesAnalyticsComponent};
