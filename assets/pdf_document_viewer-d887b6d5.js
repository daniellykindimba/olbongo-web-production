import{r as i,cu as c,j as e,cS as h,F as x,av as a}from"./index-3f04361d.js";const f=({url:o})=>{const[s,r]=i.useState(!1),l=c(t=>t.setReaderFullWidth),d=c(t=>t.readerFullWidth);return i.useEffect(()=>{r(!0);const t=u=>{u.preventDefault()},n=document.querySelector("object");return n&&n.addEventListener("contextmenu",t),()=>{n&&n.removeEventListener("contextmenu",t)}},[o]),e.jsxs(e.Fragment,{children:[s&&e.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"89vh"},children:[e.jsx(h,{color:"secondary"}),e.jsx("h4",{children:"Loading..."})]}),e.jsxs("div",{children:[!s&&e.jsx(x,{children:d?e.jsx(a,{onClick:()=>{l(!1)},children:"Min Width"}):e.jsx(a,{onClick:()=>{l(!0)},children:"Full Width"})}),e.jsx("div",{children:e.jsx("object",{data:o+"#toolbar=0",type:"application/pdf",style:{width:"100%",height:"89vh",display:s?"none":"block"},onLoad:()=>{r(!1)},onContextMenu:t=>t.preventDefault()})})]})]})};export{f as P};
