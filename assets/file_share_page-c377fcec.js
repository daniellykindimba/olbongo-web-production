import{bU as j,aY as e,r as n,d6 as f,ak as S,cm as w,fC as g,ao as p,bZ as F,b_ as z,c7 as b,aI as l,cq as D}from"./index-3b25761c.js";import{f as I}from"./data_objects-ddf513ee.js";import{D as r}from"./index-dfcc642a.js";const v=j(e.jsx("path",{d:"M19 9h-4V3H9v6H5l7 7zm-8 2V5h2v6h1.17L12 13.17 9.83 11zm-6 7h14v2H5z"}),"DownloadOutlined"),E=s=>{const[i,a]=n.useState(!0),[t,h]=n.useState(),d=f(),u=async m=>{a(!0);const{data:o}=await F.custom({url:"",method:"get",meta:{operation:"file",variables:{id:{value:m,type:"Int",required:!0}},fields:I}}).catch(()=>(z.error("Error occured while fetching file"),{data:null})).then(x=>x);o&&h(o),a(!1)};return n.useEffect(()=>{u(parseInt(d.file))},[]),e.jsx(e.Fragment,{children:e.jsxs(S,{spinning:i,children:[e.jsxs(r,{title:"Shared File Info",bordered:!0,column:1,children:[e.jsxs(r.Item,{label:"File Name",children:[t==null?void 0:t.title,e.jsx("span",{style:{marginLeft:"10px"},children:e.jsx(c,{file:t,showIcon:!0,showText:!1,showSize:!1,buttonSize:"small"})})]}),e.jsx(r.Item,{label:"File Size",children:t==null?void 0:t.size}),e.jsx(r.Item,{label:"File Author",children:t==null?void 0:t.author.fullName})]}),e.jsx(w,{sx:{marginTop:"10px"},children:e.jsx(c,{file:t,showIcon:!0,showText:!0,showSize:!0,buttonSize:"large"})})]})})},c=s=>{var i;return e.jsx(g,{title:"Click to Download Shared File",placement:"top",children:e.jsxs(p,{size:s.buttonSize,onClick:()=>{var a;window.open((a=s.file)==null?void 0:a.file)},icon:s.showIcon&&e.jsx(v,{}),children:[s.showText&&"Download",s.showSize&&`(${(i=s.file)==null?void 0:i.size})`]})})},B=()=>(n.useEffect(()=>{document.title=b.system_name+": File Share"},[]),e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:[e.jsx(l.Item,{children:e.jsx(D,{to:"/odrive",children:"Home"})}),e.jsx(l.Item,{children:"File Share"})]}),e.jsx(E,{})]}));export{B as FileSharePage};
