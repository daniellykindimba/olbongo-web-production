import{r,j as t,s as x,av as j,J as m,aV as p}from"./index-e1c2324f.js";const{Title:s,Text:n}=j,D=a=>{const[e,l]=r.useState(),[o,c]=r.useState(!0),d=async u=>{const{data:i}=await m.custom({url:"",method:"get",meta:{operation:"drive",variables:{id:{value:u,type:"Int",required:!0}},fields:p}}).catch(()=>({data:null})).then(h=>h);i&&l(i),c(!1)};return r.useEffect(()=>{d(a.id)},[a.id]),t.jsxs(x,{spinning:o,children:[t.jsx(s,{level:5,children:"Drive Name"}),t.jsx(n,{children:e==null?void 0:e.name}),t.jsx(s,{level:5,children:"Drive Code"}),t.jsx(n,{children:e==null?void 0:e.code}),t.jsx(s,{level:5,children:"Drive Description"}),t.jsx(n,{children:t.jsx("div",{dangerouslySetInnerHTML:{__html:(e==null?void 0:e.description)??""}})}),t.jsx(s,{level:5,children:"Drive Author"}),t.jsx(n,{children:e==null?void 0:e.author.fullName})]})};export{D};
