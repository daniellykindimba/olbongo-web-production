import{j as e,aT as c,a1 as v,av as L,r as i,aW as _,aP as j,a8 as A,aR as N,aU as u,_ as o,cm as P,g as p}from"./index-05772eb7.js";import{j as k}from"./data_objects-e0ab4116.js";import{L as x}from"./index-7c727271.js";import{M as B}from"./index-013e811c.js";import{S as U}from"./SearchOutlined-0e97f4a9.js";import{L as y}from"./LinkOutlined-eb4f10b8.js";import{D as V}from"./DownloadOutlined-581febce.js";import{D as W}from"./DeleteOutlined-9fe75e98.js";import{I as H}from"./InfoCircleOutlined-a2af6d4a.js";import{M as G}from"./MoreOutlined-acda24b1.js";import{E as J}from"./ExclamationCircleOutlined-0a20a855.js";import"./data_objects-fdecb024.js";import"./InfoCircleFilled-219488c9.js";import"./InfoCircleFilled-baaa675e.js";import"./ActionButton-e20fca38.js";import"./DialogWrap-c515d700.js";import"./index-fe2fbeda.js";import"./fade-6bc080d2.js";import"./DownloadOutlined-6cd35f11.js";import"./DeleteOutlined-25685737.js";const K=s=>e.jsx(e.Fragment,{children:e.jsxs(c,{layout:"vertical",form:s.form,onFinish:l=>{s.onFinish(l)},requiredMark:!1,children:[e.jsx(c.Item,{name:"link",label:"Link",rules:[{required:!0,type:"url"}],children:e.jsx(v,{size:"large",placeholder:"Enter Url Address ..."})}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(L,{type:"primary",size:"large",htmlType:"submit",children:"Save"})})]})}),fe=s=>{const[l,d]=i.useState([]),[R,S]=i.useState(!0),[g,I]=i.useState(1),[C]=c.useForm(),[Q,b]=i.useState(0),[X,D]=i.useState(0),[F,w]=i.useState(!0),[M,m]=i.useState(!1),[f]=c.useForm(),q=()=>{m(!0)},E=async t=>{const{data:r}=await p.custom({url:"",method:"post",meta:{operation:"createDarasaResourceLink",variables:{id:{value:parseInt(s.id===void 0?"0":s.id.toString()),type:"Int",required:!0},link:{value:t.link,type:"String",required:!0}},fields:["success","message",{resource:k}]}}).catch(()=>(o.error("Error creating resource link"),{data:null})).then(n=>n);r&&(r.success?(o(r.message),d([r.resource,...l]),f.resetFields(),m(!1)):o.error(r.message))},h=async(t,r="",n=!1)=>{const{data:a}=await p.custom({url:"",method:"get",meta:{operation:"darasaResources",variables:{page:{value:t,type:"Int",required:!0},key:{value:r,type:"String",required:!1},id:{value:parseInt(s.id===void 0?"0":s.id.toString()),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:k}]}}).catch(()=>(o.error("Error fetching resources links"),{data:null})).then(T=>T);a&&(D(a.total),b(a.pages),I(a.page),w(a.hasNext),(r.length>0||r.length===0&&n)&&d(a.results),a.results.length>0&&!n&&d(l.concat(a.results))),S(!1)},O=async t=>{const{data:r}=await p.custom({url:"",method:"post",meta:{operation:"deleteDarasaResourceLink",variables:{id:{value:parseInt(t.toString()),type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(o.error("Error deleting resource link"),{data:null})).then(n=>n);r&&(r.success?(o.success(r.message),d(l.filter(n=>n.id!==t))):o.error(r.message))},z=t=>{B.confirm({title:"Deleting Resource Link",icon:e.jsx(J,{}),content:"Are you sure ...",okText:"Delete",cancelText:"Cancel",onOk:()=>O(t)})};return i.useEffect(()=>{h(g)},[]),e.jsxs(e.Fragment,{children:[e.jsxs(_,{children:[e.jsx(j,{span:20,children:e.jsx(c,{layout:"vertical",form:C,onFinish:t=>h(0,t.key,!0),children:e.jsx(c.Item,{name:"key",children:e.jsx(v,{size:"large",placeholder:"Search Resources Links...",prefix:e.jsx(U,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(j,{span:4,style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(L,{icon:e.jsx(y,{}),onClick:q,disabled:!s.canManage,size:"large",children:"Add Resource"})})]}),e.jsx("div",{id:"scrollableDiv",style:{height:"74vh",overflow:"auto"},children:e.jsxs(A,{spinning:R,children:[e.jsx(x,{itemLayout:"horizontal",dataSource:l,renderItem:t=>e.jsx("div",{style:{background:"white",marginBottom:5,paddingLeft:10,paddingTop:10},children:e.jsx(x.Item,{style:{margin:0,padding:0},actions:[e.jsx(N,{trigger:["click"],overlay:e.jsxs(u,{children:[e.jsx(u.Item,{icon:e.jsx(V,{}),children:e.jsx("a",{target:"_blank",href:t.link,rel:"noopener noreferrer",children:"Open"})}),e.jsx(u.Item,{icon:e.jsx(W,{}),disabled:!t.canDelete,onClick:()=>z(t.id),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Delete"})}),e.jsx(u.Item,{icon:e.jsx(H,{}),onClick:()=>o("Under construction"),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Report"})})]}),overlayStyle:{zIndex:9999},children:e.jsx("a",{className:"ant-dropdown-link",onClick:r=>r.preventDefault(),children:e.jsx(G,{style:{color:"orange",fontSize:28,fontWeight:"bold"}})})})],children:e.jsx(x.Item.Meta,{style:{borderBottom:"1px solid #e8e8e8"},avatar:e.jsx(y,{}),title:e.jsx("a",{href:t.link,target:"_blank",rel:"noreferrer",children:t.link}),description:e.jsxs(e.Fragment,{children:[e.jsx("p",{}),e.jsx("p",{children:new Date(t.created).toLocaleString()})]})})},"class-resource-link-"+t.id)},"class-resource-link-item-container-"+t.id)}),F&&e.jsx("div",{style:{textAlign:"center",marginTop:12},children:e.jsx("button",{onClick:()=>{h(g+1)},children:"Load More"})})]})}),e.jsx(P,{title:"Adding Resource Link",open:M,onClose:t=>m(t),width:"50vw",children:e.jsx(K,{form:f,onFinish:E})})]})};export{fe as ClassResurcesLinks};
