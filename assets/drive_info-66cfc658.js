import{r as n,j as t,a8 as m,g as x}from"./index-38408b6c.js";import{d as p}from"./data_objects-6dcda32f.js";import{T as j}from"./index-ca84d674.js";const{Title:r,Text:s}=j,g=a=>{const[e,o]=n.useState(),[l,c]=n.useState(!0),d=async u=>{const{data:i}=await x.custom({url:"",method:"get",meta:{operation:"drive",variables:{id:{value:u,type:"Int",required:!0}},fields:p}}).catch(()=>({data:null})).then(h=>h);i&&o(i),c(!1)};return n.useEffect(()=>{d(a.id)},[a.id]),t.jsxs(m,{spinning:l,children:[t.jsx(r,{level:5,children:"Drive Name"}),t.jsx(s,{children:e==null?void 0:e.name}),t.jsx(r,{level:5,children:"Drive Code"}),t.jsx(s,{children:e==null?void 0:e.code}),t.jsx(r,{level:5,children:"Drive Description"}),t.jsx(s,{children:t.jsx("div",{dangerouslySetInnerHTML:{__html:(e==null?void 0:e.description)??""}})}),t.jsx(r,{level:5,children:"Drive Author"}),t.jsx(s,{children:e==null?void 0:e.author.fullName})]})};export{g as D};
