import{r as n,j as t,S as x,aV as m,g as j}from"./index-cdd95245.js";import{d as p}from"./data_objects-b1ad9e08.js";const{Title:r,Text:s}=m,f=a=>{const[e,l]=n.useState(),[o,c]=n.useState(!0),d=async u=>{const{data:i}=await j.custom({url:"",method:"get",meta:{operation:"drive",variables:{id:{value:u,type:"Int",required:!0}},fields:p}}).catch(()=>({data:null})).then(h=>h);i&&l(i),c(!1)};return n.useEffect(()=>{d(a.id)},[a.id]),t.jsxs(x,{spinning:o,children:[t.jsx(r,{level:5,children:"Drive Name"}),t.jsx(s,{children:e==null?void 0:e.name}),t.jsx(r,{level:5,children:"Drive Code"}),t.jsx(s,{children:e==null?void 0:e.code}),t.jsx(r,{level:5,children:"Drive Description"}),t.jsx(s,{children:t.jsx("div",{dangerouslySetInnerHTML:{__html:(e==null?void 0:e.description)??""}})}),t.jsx(r,{level:5,children:"Drive Author"}),t.jsx(s,{children:e==null?void 0:e.author.fullName})]})};export{f as D};
