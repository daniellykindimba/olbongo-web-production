import{r as n,j as t,s as h,at as x,J as p}from"./index-84802c99.js";const{Title:a,Text:i}=x,D=s=>{const[e,l]=n.useState(),[c,o]=n.useState(!0),d=async u=>{const{data:r}=await p.custom({url:"",method:"get",meta:{operation:"drive",variables:{id:{value:u,type:"Int",required:!0}},fields:["id","name","description","code","icon","created","updated","isActive","canEdit","canDelete",{author:["id","firstName","lastName","middleName","email","fullName","pic"]}]}}).catch(()=>({data:null})).then(m=>m);r&&l(r),o(!1)};return n.useEffect(()=>{d(s.id)},[s.id]),t.jsxs(h,{spinning:c,children:[t.jsx(a,{level:5,children:"Drive Name"}),t.jsx(i,{children:e==null?void 0:e.name}),t.jsx(a,{level:5,children:"Drive Code"}),t.jsx(i,{children:e==null?void 0:e.code}),t.jsx(a,{level:5,children:"Drive Description"}),t.jsx(i,{children:t.jsx("div",{dangerouslySetInnerHTML:{__html:(e==null?void 0:e.description)??""}})}),t.jsx(a,{level:5,children:"Drive Author"}),t.jsx(i,{children:e==null?void 0:e.author.fullName})]})};export{D};
