import{bV as j,aZ as e,r as n,d7 as f,al as S,cn as w,fD as p,ap as g,b_ as F,b$ as z,c8 as b,aJ as l,cr as D}from"./index-29a13d6d.js";import{f as v}from"./data_objects-f2568388.js";import{D as i}from"./index-8d679c4e.js";const I=j(e.jsx("path",{d:"M19 9h-4V3H9v6H5l7 7zm-8 2V5h2v6h1.17L12 13.17 9.83 11zm-6 7h14v2H5z"}),"DownloadOutlined"),E=s=>{const[r,a]=n.useState(!0),[t,h]=n.useState(),d=f(),u=async m=>{a(!0);const{data:o}=await F.custom({url:"",method:"get",meta:{operation:"file",variables:{id:{value:m,type:"Int",required:!0}},fields:v}}).catch(()=>(z.error("Error occured while fetching file"),{data:null})).then(x=>x);o&&h(o),a(!1)};return n.useEffect(()=>{u(parseInt(d.file))},[]),e.jsx(e.Fragment,{children:e.jsxs(S,{spinning:r,children:[e.jsxs(i,{title:"Shared File Info",bordered:!0,column:1,children:[e.jsxs(i.Item,{label:"File Name",children:[t==null?void 0:t.title,e.jsx("span",{style:{marginLeft:"10px"},children:e.jsx(c,{file:t,showIcon:!0,showText:!1,showSize:!1,buttonSize:"small"})})]}),e.jsx(i.Item,{label:"File Size",children:t==null?void 0:t.size}),e.jsx(i.Item,{label:"File Author",children:t==null?void 0:t.author.fullName})]}),e.jsx(w,{sx:{marginTop:"10px"},children:e.jsx(c,{file:t,showIcon:!0,showText:!0,showSize:!0,buttonSize:"large"})})]})})},c=s=>{var r;return e.jsx(p,{title:"Click to Download Shared File",placement:"top",children:e.jsxs(g,{size:s.buttonSize,onClick:()=>{var a;window.open((a=s.file)==null?void 0:a.file)},icon:s.showIcon&&e.jsx(I,{}),children:[s.showText&&"Download",s.showSize&&`(${(r=s.file)==null?void 0:r.size})`]})})},H=()=>(n.useEffect(()=>{document.title=b.system_name+": File Share"},[]),e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:[e.jsx(l.Item,{children:e.jsx(D,{to:"/odrive",children:"Home"})}),e.jsx(l.Item,{children:"File Share"})]}),e.jsx(E,{})]}));export{H as FileSharePage};
