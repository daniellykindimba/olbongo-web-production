import{r as a,aM as e,ae as g,co as j,aJ as x,bJ as u,bK as m,ac as f,aH as y,$ as p,eT as h,bI as w}from"./index-bf2a13da.js";import{L as S}from"./index-8b58fb29.js";import{P as b}from"./index-6044adfe.js";const C=n=>{const[i,c]=a.useState(!0),[l,r]=a.useState([]),t=async o=>{const{data:s}=await u.custom({url:"",method:"post",meta:{operation:"makeSchoolOperational",variables:{schoolId:{value:parseInt(o.toString()),type:"Int",required:!0}},fields:["success","message"]}});s.success?(m.success(s.message),window.location.reload()):m.error(s.message)},d=async()=>{const{data:o}=await u.custom({url:"",method:"get",meta:{operation:"userOperationalSchools",variables:{},fields:["schools"]}});r(o.schools),c(!1)};return a.useEffect(()=>{d()},[n.randKey]),e.jsx("div",{children:e.jsx(S,{bordered:!0,loading:i,dataSource:l,renderItem:o=>e.jsxs(S.Item,{actions:[e.jsx(b,{placement:"topRight",title:"Are you sure to switch to "+o.name+"?",onConfirm:()=>t(o.id),okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(g,{icon:e.jsx(j,{})})})],children:[o.name," - ",e.jsx(x,{color:"green",children:o.serialNumber})]})})})},I=n=>{const[i,c]=a.useState(!0),[l,r]=a.useState(!1),[t,d]=a.useState(),o=async()=>{const{data:s}=await u.custom({url:"",method:"get",meta:{operation:"operationalSchool",variables:{},fields:["school"]}});d(s.school),c(!1)};return a.useEffect(()=>{o()},[n.randKey]),e.jsxs("div",{style:{display:"flex",justifyContent:"center",marginTop:10},children:[e.jsx(f,{spinning:i,children:e.jsx(x,{color:"red",style:{padding:5},children:e.jsxs(y,{direction:"horizontal",style:{justifyContent:"center",marginRight:10,fontSize:16,fontWeight:"bolder",whiteSpace:"break-spaces",wordWrap:"break-word"},children:[e.jsx(p,{title:t==null?void 0:t.name,color:"green",children:(t==null?void 0:t.name)??"Operational School (Pick)"}),!(t!=null&&t.status)&&e.jsx(p,{title:"Click to Switch School",color:"green",placement:"top",children:e.jsx("a",{onClick:()=>r(!0),children:e.jsx(h,{})})}),(((t==null?void 0:t.status)&&(t==null?void 0:t.multiple))??!0)&&e.jsx(p,{title:"Click to Switch School",color:"green",placement:"top",children:e.jsx("a",{onClick:()=>r(!0),children:e.jsx(h,{})})})]})})}),e.jsx(w,{title:"Choose School to Operate With",width:"40vw",open:l,onClose:s=>r(s),children:e.jsx(C,{randKey:Math.random()})})]})};export{I as S};
