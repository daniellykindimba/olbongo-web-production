import{aY as e,aO as s,d2 as o,Q as u,c3 as r,aS as m,aK as i,S as n,ao as c}from"./index-ac5228cb.js";import{C as y}from"./ckeditor-3f271a74.js";import{D as h}from"./index-4f6ce190.js";import{I as x}from"./index-225f9f7c.js";const{Option:p}=n,l=[{value:"",label:"Select Duration Type"},{value:"minutes",label:"Minutes"},{value:"hours",label:"Hours"},{value:"days",label:"Days"}],b=a=>e.jsx(e.Fragment,{children:e.jsxs(s,{layout:"vertical",form:a.form,onFinish:t=>{t.id=a.darasa.id,a.onFinish(t)},requiredMark:!1,initialValues:{name:a.darasa.name,startDate:o(a.darasa.endDate),duration:a.darasa.duration,durationType:a.darasa.durationType,description:a.darasa.description},children:[e.jsx(s.Item,{name:"name",label:"Name",rules:[{required:!0,type:"string",message:"Please input name"}],children:e.jsx(u,{size:"large",placeholder:"Enter Name ..."})}),e.jsx(s.Item,{name:"startDate",label:"start Date",rules:[{required:!0,type:"date",message:"Please select date"}],children:e.jsx(h,{showTime:{format:"HH:mm"},disabledDate:t=>{const d=r().format("YYYY-MM-DD");return t&&t<r(d,"YYYY-MM-DD")},style:{width:"100%"},popupStyle:{zIndex:9999}})}),e.jsxs(m,{children:[e.jsx(i,{span:12,children:e.jsx(s.Item,{name:"duration",label:"Duration",style:{width:"100%"},rules:[{required:!0,type:"integer",message:"Enter Duration"}],children:e.jsx(x,{min:1,defaultValue:1,style:{width:"100%"},size:"large"})})}),e.jsx(i,{span:12,children:e.jsx(s.Item,{name:"durationType",label:"Duration Type",style:{width:"100%"},rules:[{required:!0,type:"string",message:"Please select duration type"}],children:e.jsx(n,{defaultValue:l[0].value,size:"large",style:{width:"100%"},dropdownStyle:{zIndex:9999},children:l.map(t=>e.jsx(p,{children:t.label},t.value))})})})]}),e.jsx(s.Item,{name:"description",label:"Description",style:{marginBottom:"12px"},rules:[{required:!0,type:"string",message:"Enter Description"}],children:e.jsx(y,{data:a.darasa.description,onChange:t=>{a.form.setFieldsValue({description:t})}})}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(c,{type:"primary",size:"large",htmlType:"submit",children:"Save"})})]})});export{b as E};
