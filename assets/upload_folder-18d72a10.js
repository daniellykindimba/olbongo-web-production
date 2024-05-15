import{r as c,u as U,j as e,a_ as S,aw as h,a7 as b,aV as u,c7 as g,c4 as C,g as x,_ as l,B as N}from"./index-ccfcd4da.js";import{f as y}from"./data_objects-ce8f5e44.js";import{A as k}from"./index-8ddfcaf4.js";import{U as w}from"./index-200f56a0.js";import{l as D}from"./index-0a57a0d3.js";const I=s=>Array.isArray(s)?s:s==null?void 0:s.fileList,T=s=>{const[f,o]=c.useState(!1),[j,i]=c.useState(!1),v=U(),m=async n=>{o(!0),i(!1),console.log(n.file);const{data:r}=await x.custom({url:"",method:"post",meta:{operation:"uploadFile",variables:{files:{value:n.file,type:"[Upload]",required:!1}},fields:["success","message",{files:y}]}}).catch(d=>(console.log(d),l.error("Error occured while uploading file(s)"),{data:null})).then(d=>d);r&&(r.success?(l.success(r.message),i(!0),console.log(r.files),s.onFinish(r.files)):l.error(r.message)),o(!1)},F=async n=>{o(!0),i(!1);const{data:r}=await x.custom({url:"",method:"post",meta:{operation:"uploadDriveFile",variables:{files:{value:n.file,type:"[Upload]",required:!0},driveId:{value:parseInt(v.drive.toString()),type:"Int",required:!0}},fields:["success","message",{files:y}]}}).catch(()=>(l.error("Error occured while uploading file"),{data:null})).then(d=>d);r&&(r.success?(l.success(r.message),i(!0),s.onFinish(r.files)):l.error(r.message)),o(!1)};return j?e.jsx(e.Fragment,{children:e.jsx(S,{direction:"vertical",style:{display:"flex",justifyContent:"center"},children:e.jsx(k,{message:"Success",description:e.jsx(e.Fragment,{children:e.jsx("p",{children:"File uploaded successfully"})}),action:[e.jsx(h,{onClick:()=>i(!1),children:"Upload another file(s)"})],type:"success"})})}):e.jsx(e.Fragment,{children:e.jsx(b,{spinning:f,children:e.jsxs(u,{layout:"vertical",form:s.form,onFinish:n=>{s.mode==="drive"?F(n):m(n)},requiredMark:!0,autoComplete:"off",children:[e.jsx(u.Item,{label:"Pick Files ("+g.supported_file_extensions.join()+")",children:e.jsx(u.Item,{name:"file",valuePropName:"fileList",getValueFromEvent:I,noStyle:!0,rules:[{required:!0,type:"array",message:"Please upload some files."}],children:e.jsxs(w.Dragger,{name:"file",accept:g.supported_file_extensions.join(),multiple:!0,beforeUpload:()=>!1,children:[e.jsx("p",{className:"ant-upload-drag-icon",children:e.jsx(C,{})}),e.jsx("p",{className:"ant-upload-text",children:"Click or drag file to this area to upload"}),e.jsx("p",{className:"ant-upload-hint",children:"Support for a single or bulk upload."})]})})}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(h,{type:"primary",size:"large",htmlType:"submit",loading:f,children:"Upload"})})]})})})},_=s=>Array.isArray(s)?s:s==null?void 0:s.fileList,z=s=>{const[f,o]=c.useState(!1),[j,i]=c.useState(!1),v=U(),[m,F]=c.useState(""),[n,r]=c.useState(!1),d=async t=>{o(!0),i(!1);const{data:a}=await x.custom({url:"",method:"post",meta:{operation:"uploadFile",variables:{files:{value:t.file,type:"[Upload]",required:!0},folderName:{value:m,type:"String",required:!1},autoCreateDrive:{value:n,type:"Boolean",required:!1}},fields:["success","message",{files:y}]}}).catch(()=>(l.error("Error occured while uploading file"),{data:null})).then(p=>p);a&&(a.success?(l.success(a.message),i(!0),s.onFinish(a.files)):l.error(a.message)),o(!1)},q=async t=>{o(!0),i(!1);const{data:a}=await x.custom({url:"",method:"post",meta:{operation:"uploadDriveFile",variables:{files:{value:t.file,type:"[Upload]",required:!0},driveId:{value:parseInt(v.drive.toString()),type:"Int",required:!0},folderName:{value:m,type:"String",required:!1}},fields:["success","message",{files:y}]}}).catch(()=>(l.error("Error occured while uploading file"),{data:null})).then(p=>p);a&&(a.success?(l.success(a.message),i(!0),s.onFinish(a.files)):l.error(a.message)),o(!1)};return j?e.jsx(e.Fragment,{children:e.jsx(S,{direction:"vertical",style:{display:"flex",justifyContent:"center"},children:e.jsx(k,{message:"Success",description:e.jsx(e.Fragment,{children:e.jsx("p",{children:"File uploaded successfully"})}),action:[e.jsx(h,{onClick:()=>i(!1),children:"Upload another file(s)"})],type:"success"})})}):e.jsx(e.Fragment,{children:e.jsx(b,{spinning:f,children:e.jsxs(u,{layout:"vertical",form:s.form,onFinish:t=>{s.mode==="drive"?q(t):d(t)},requiredMark:!0,autoComplete:"off",children:[s.mode==="file"&&e.jsx(N,{sx:{marginBottom:2},children:e.jsx(D.Checkbox,{onChange:t=>{console.log(t.target.checked),r(t.target.checked)},style:{zoom:1.5,marginTop:5,marginBottom:5},type:"checkbox",children:"Auto create drive if not exists (Note: This will create drive with name of folder)"})}),e.jsx(u.Item,{label:"Folder can only contains files with these extensions ("+g.supported_file_extensions.join()+")",style:{maxHeight:"70vh",overflowY:"auto"},children:e.jsx(u.Item,{name:"file",valuePropName:"fileList",getValueFromEvent:_,noStyle:!0,rules:[{required:!0,type:"array",message:"Please upload students excel file"}],children:e.jsxs(w.Dragger,{name:"file",accept:g.supported_file_extensions.join(),directory:!0,beforeUpload:(t,a)=>{if(t&&t.webkitRelativePath){const p=t.webkitRelativePath.split("/")[0];F(p)}return!1},children:[e.jsx("p",{className:"ant-upload-drag-icon",children:e.jsx(C,{})}),e.jsx("p",{className:"ant-upload-text",children:"Click or drag file to this area to upload"}),e.jsx("p",{className:"ant-upload-hint",children:"Support for a single or bulk upload."})]})})}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(h,{type:"primary",size:"large",htmlType:"submit",loading:f,children:"Upload"})})]})})})};export{T as U,z as a};
