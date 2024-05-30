import{r as a,aT as S,c as H,j as e,aW as Q,aP as M,a1 as B,af as $,av as C,cW as he,aR as X,aU as z,_ as r,g as k,a8 as pe,cP as N,aO as xe,cm as fe}from"./index-c2aacc94.js";import{f as V,g as je,e as ye}from"./data_objects-f560073f.js";import{P as Se,A as ve}from"./PlusSquareFilled-9e9a275d.js";import{L as F}from"./index-5a878f72.js";import{A as ee}from"./index-39dba383.js";import{A as be}from"./index-e5a89580.js";import{U as E}from"./index-369d7591.js";import{M as Y}from"./index-4f75291d.js";import{S as te}from"./SearchOutlined-0a7c7395.js";import{D as R}from"./DownloadOutlined-5b7a48d4.js";import{I as se}from"./InboxOutlined-da957fdf.js";import{D as ne}from"./DeleteOutlined-d1e219b7.js";import{M as ae}from"./MoreOutlined-012dadc2.js";import{E as re}from"./ExclamationCircleOutlined-5ebd3c48.js";import{C as Ae}from"./ckeditor-6c36760a.js";import{D as Ie}from"./index-d5812015.js";const{Dragger:De}=E,J=window.innerHeight*.6,_e=s=>{var G,K;const[o,m]=a.useState(!1),[g,p]=a.useState([]),[i,l]=a.useState(!1),[d,u]=a.useState(!0),[T,v]=a.useState(1),[j,O]=a.useState(10),[q,b]=a.useState(""),[W]=S.useForm(),[Z,_]=a.useState(0),[n,c]=a.useState(0),[x,y]=a.useState(!0);H();const P=t=>{const h=["pdf","xls","xlsx","xlx","docx","doc","odt","ods","ppt","pptx","txt"],A=t.name.split(".").pop();return h.indexOf(A)===-1?(r.error("File type not supported"),E.LIST_IGNORE):t.size/1024/1024>50?(r.error("File size too large"),E.LIST_IGNORE):!0},L=async t=>{l(!0);const{onSuccess:h,onError:A,file:f,onProgress:U}=t,{data:w}=await k.custom({url:"",method:"post",meta:{operation:"uploadDarasaAssignmentAttachment",variables:{file:{value:f,type:"Upload",required:!0},title:{value:f.name,type:"String",required:!1},size:{value:f.size,type:"Decimal",required:!1},id:{value:parseInt(s.assignment===void 0?"0":s.assignment.id.toString()),type:"Int",required:!0}},onUploadProgress:I=>{const{loaded:ue,total:me}=I,ge=Math.floor(ue*100/me);U(ge)},onError:I=>{A(I),r.error(I.message)},fields:["success","message",{attachment:V}]}}).catch(()=>(r.error("Error uploading file"),{data:null})).then(I=>I);w&&(w.success?(le(),h("ok"),r("File(s) uploaded successfully")):r.error(w.message)),l(!1)},D=async(t,h="",A=!1)=>{var U,w;u(!0);const{data:f}=await k.custom({url:"",method:"get",meta:{operation:"assignmentDocuments",variables:{page:{value:parseInt(t.toString()),type:"Int",required:!1},pageSize:{value:parseInt(j.toString()),type:"Int",required:!1},key:{value:h,type:"String",required:!1},id:{value:parseInt(((U=s.assignment)==null?void 0:U.id)===void 0?"0":(w=s.assignment)==null?void 0:w.id.toString()),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:V}]}}).catch(()=>(r.error("Error fetching attachments"),{data:null})).then(I=>I);f&&(c(f.total),_(f.pages),v(f.page+1),y(f.hasNext),p([...g,...f.results])),u(!1)},ie=async t=>{const{data:h}=await k.custom({url:"",method:"post",meta:{operation:"deleteDarasaAssignmentAttachment",variables:{id:{value:t,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(r.error("Error deleting attachment"),{data:null})).then(A=>A);h&&(h.success?(r.success(h.message),p(g.filter(A=>A.id.toString()!==t.toString()))):r.error(h.message)),Y.destroyAll()},oe=t=>{Y.confirm({title:"Confirm",icon:e.jsx(re,{}),content:"Are you sure you want to delete this attachment?",okText:"Yes",cancelText:"Cancel",onOk:()=>ie(t)})},le=async()=>{D(1)},de=t=>{x&&!d&&t.currentTarget.scrollHeight-t.currentTarget.scrollTop===J&&D(T,q)},ce=async()=>{b(""),g.length=0,p([]),D(1)};return a.useEffect(()=>{p([]),D(1)},[s.assignment]),e.jsxs(e.Fragment,{children:[e.jsxs(Q,{children:[!o&&e.jsxs(e.Fragment,{children:[e.jsx(M,{span:10,children:e.jsx(S,{layout:"vertical",form:W,onFinish:t=>{g.length=0,p([]),v(1),b(t.key),D(0,t.key,!0)},children:e.jsx(S.Item,{name:"key",children:e.jsx(B,{size:"large",placeholder:"Search Attachment(s)...",prefix:e.jsx(te,{}),autoComplete:"off",allowClear:!0,onChange:t=>{t.target.value===""&&ce()}})})})}),e.jsxs(M,{span:14,style:{display:"flex",justifyContent:"flex-end"},children:[((G=s.assignment)==null?void 0:G.attachmentZippedFolderPath)&&e.jsx($,{title:"Click To Download All Files Zipped",placement:"bottomRight",children:e.jsx(C,{size:"large",icon:e.jsx(R,{}),onClick:()=>{var t;window.open((t=s.assignment)==null?void 0:t.attachmentZippedFolderPath,"_blank")},danger:!0,children:"Download All"})}),((K=s.assignment)==null?void 0:K.canUploadAttachment)&&e.jsx($,{title:"Add more Assignment Attachments",placement:"bottomRight",children:e.jsx(C,{size:"large",icon:e.jsx(Se,{}),disabled:!s.canManage,onClick:()=>{m(!o)},danger:!0,children:"Add Attachement"})})]})]}),o&&e.jsx(e.Fragment,{children:e.jsx(M,{span:24,style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(C,{size:"large",icon:e.jsx(ve,{}),onClick:()=>{m(!o)},children:"Attachments"})})})]}),o&&e.jsx("div",{style:{marginTop:30},children:e.jsxs(De,{customRequest:L,beforeUpload:P,multiple:!0,accept:".pdf, .xls, .xlsx, .xlx, .docx, .doc, .odt, .ods, .ppt,.pptx,.txt",children:[e.jsx("p",{className:"ant-upload-drag-icon",children:e.jsx(se,{})}),e.jsx("p",{className:"ant-upload-text",children:"Click or drag file to this area to upload"}),e.jsx("p",{className:"ant-upload-hint",children:"Support for a single or bulk upload"})]})}),!o&&e.jsxs("div",{children:[e.jsx(F,{split:!1,loading:d,size:"small",children:e.jsx(he,{data:g,height:J,itemHeight:100,itemKey:t=>t.id.toString(),onScroll:de,children:t=>e.jsx(F.Item,{style:{margin:0,padding:0},actions:[e.jsx(X,{trigger:["click"],placement:"topRight",overlay:e.jsxs(z,{children:[e.jsx(z.Item,{icon:e.jsx(R,{}),children:e.jsx("a",{target:"_blank",href:t.file,rel:"noopener noreferrer",download:!0,children:"Download"})}),e.jsx(z.Item,{icon:e.jsx(ne,{}),disabled:!t.canDelete,children:e.jsx("a",{rel:"noopener noreferrer",onClick:()=>oe(t.id),children:"Delete"})})]}),overlayStyle:{zIndex:9999},children:e.jsx("a",{className:"ant-dropdown-link",onClick:h=>h.preventDefault(),children:e.jsx(ae,{style:{color:"orange",fontSize:28,fontWeight:"bold"}})})})],children:e.jsx(F.Item.Meta,{style:{paddingBottom:0,borderBottom:"1px solid #e8e8e8"},avatar:e.jsx(ee,{src:t.icon}),title:e.jsx("a",{children:t.title}),description:e.jsxs(e.Fragment,{children:[e.jsx("p",{}),e.jsxs("p",{children:[e.jsx("span",{style:{color:"orange"},children:t.size})," |",new Date(t.created).toLocaleString()]})]})})},"file-"+t.id)})}),g.length>0&&!x&&e.jsx("div",{style:{textAlign:"center",marginTop:20},children:e.jsx(be,{message:"No more attachments",type:"info"})})]})]})},He=s=>{const[o,m]=a.useState([]),[g,p]=a.useState(!0),[i,l]=a.useState(1);a.useState(25);const[d]=S.useForm(),[u,T]=a.useState(0),[v,j]=a.useState(0),[O,q]=a.useState(!0);H();const b=async(n,c="",x=!1)=>{var P,L;const{data:y}=await k.custom({url:"",method:"get",meta:{operation:"assignmentSubmissions",variables:{page:{value:parseInt(n.toString()),type:"Int",required:!0},key:{value:c,type:"String",required:!1},id:{value:parseInt(((P=s.assignment)==null?void 0:P.id)===void 0?"0":(L=s.assignment)==null?void 0:L.id.toString()),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:je}]}}).catch(()=>(r.error("Error fetching submissions"),{data:null})).then(D=>D);y&&(j(y.total),T(y.pages),l(y.page),q(y.hasNext),(c.length>0||c.length===0&&x)&&m(y.results),y.results.length>0&&!x&&m(o.concat(y.results))),p(!1)},W=async n=>{const{data:c}=await k.custom({url:"",method:"post",meta:{operation:"deleteAssignmentSubmission",variables:{id:{value:n,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(r.error("Error deleting submission"),{data:null})).then(x=>x);c&&(c.success?(r.success(c.message),m(o.filter(x=>x.id.toString()!==n.toString()))):r.error(c.message)),Y.destroyAll()},Z=async()=>{var c;const{data:n}=await k.custom({url:"",method:"post",meta:{operation:"downloadAssignmentSubmissionWorksZipped",variables:{assignmentId:{value:parseInt(((c=s.assignment)==null?void 0:c.id.toString())??"0"),type:"Int",required:!0}},fields:["success","message","zipFile"]}}).catch(()=>(r.error("Error downloading submissions"),{data:null})).then(x=>x);n&&(n.success?(r.success(n.message),window.open(n.zipFile,"_blank")):r.error(n.message))},_=n=>{Y.confirm({title:"Confirm",icon:e.jsx(re,{}),content:"Are you sure you want to delete this Submission?",okText:"Yes",cancelText:"Cancel",onOk:()=>W(n)})};return a.useEffect(()=>{m([]),b(1)},[s.assignment]),e.jsxs(e.Fragment,{children:[e.jsxs(Q,{children:[e.jsx(M,{span:14,children:e.jsx(S,{layout:"vertical",form:d,onFinish:n=>b(0,n.key,!0),children:e.jsx(S.Item,{name:"key",children:e.jsx(B,{size:"large",placeholder:"Search Assignment(s) Work ...",prefix:e.jsx(te,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(M,{span:10,style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(C,{icon:e.jsx(R,{}),size:"large",onClick:Z,disabled:o.length===0||s.canManage===!1,children:"Download All Zipped"})})]}),e.jsxs("div",{id:"scrollableDiv",style:{height:"60vh",overflow:"auto"},children:[e.jsx(pe,{spinning:g,children:e.jsx(F,{itemLayout:"horizontal",dataSource:o,renderItem:n=>e.jsx("div",{style:{background:"white",marginBottom:5,paddingLeft:10,paddingTop:10},children:e.jsx(F.Item,{style:{margin:0,padding:0},actions:[e.jsx(X,{trigger:["click"],overlay:e.jsxs(z,{children:[e.jsx(z.Item,{icon:e.jsx(R,{}),children:e.jsx("a",{target:"_blank",href:n.file,rel:"noopener noreferrer",download:!0,children:"Download"})}),e.jsx(z.Item,{icon:e.jsx(ne,{}),disabled:!n.canDelete,children:e.jsx("a",{rel:"noopener noreferrer",onClick:()=>_(n.id),children:"Delete"})})]}),overlayStyle:{zIndex:9999},children:e.jsx("a",{className:"ant-dropdown-link",onClick:c=>c.preventDefault(),children:e.jsx(ae,{style:{color:"orange",fontSize:28,fontWeight:"bold"}})})})],children:e.jsx(F.Item.Meta,{style:{paddingBottom:0,borderBottom:"1px solid #e8e8e8"},avatar:e.jsx(ee,{src:n.icon}),title:e.jsx("a",{children:n.student.user.firstName+" "+n.student.user.middleName+" "+n.student.user.lastName}),description:e.jsxs(e.Fragment,{children:[e.jsx("p",{}),e.jsxs("p",{children:[e.jsx("span",{style:{color:"orange"},children:n.size})," |",new Date(n.created).toLocaleString()]})]})})},"file-"+n.id)})})}),O&&e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:10},children:e.jsx(C,{type:"primary",onClick:()=>{b(i+1)},children:"Load More"})})]})]})},{Dragger:ke}=E,Be=s=>{const[o,m]=a.useState(!1);H();const g=i=>{const l=["pdf","xls","xlsx","xlx","docx","doc","odt","ods","ppt","pptx","txt"],d=i.name.split(".").pop();return l.indexOf(d)===-1?(r.error("File type not supported"),E.LIST_IGNORE):i.size/1024/1024>50?(r.error("File size too large"),E.LIST_IGNORE):!0},p=async i=>{m(!0);const{onSuccess:l,onError:d,file:u,onProgress:T}=i,{data:v}=await k.custom({url:"",method:"post",meta:{operation:"submittAssignmentWork",variables:{work:{value:u,type:"Upload",required:!0},extension:{value:u.name.split(".").pop(),type:"String",required:!1},size:{value:u.size,type:"Decimal",required:!1},id:{value:parseInt(s.assignment===void 0?"0":s.assignment.id.toString()),type:"Int",required:!0}},onUploadProgress:j=>{const{loaded:O,total:q}=j,b=Math.floor(O*100/q);T(b)},onError:j=>{d(j),r.error(j.message)},fields:["success","message",{assignment:ye}]}}).catch(()=>(r.error("Error uploading file"),{data:null})).then(j=>j);v&&(v.success?(l("ok"),r("Assignment uploaded successfully"),s.onFinish(v.assignment)):(d(v.message),r.error(v.message))),m(!1)};return a.useEffect(()=>{},[s.assignment]),e.jsx(e.Fragment,{children:e.jsx("div",{style:{marginTop:30},children:e.jsxs(ke,{customRequest:p,beforeUpload:g,multiple:!0,accept:".pdf, .xls, .xlsx, .xlx, .docx, .doc, .odt, .ods, .ppt,.pptx,.txt",children:[e.jsx("p",{className:"ant-upload-drag-icon",children:e.jsx(se,{})}),e.jsx("p",{className:"ant-upload-text",children:"Click or drag file to this area to upload"}),e.jsx("p",{className:"ant-upload-hint",children:"Support for a single or bulk upload"})]})})})},Ze=s=>{const[o,m]=a.useState(!0),[g,p]=a.useState("");return a.useEffect(()=>{var i,l,d,u;s.form.setFieldsValue({title:(i=s.assignment)==null?void 0:i.title,description:(l=s.assignment)==null?void 0:l.description,deadline:N((d=s.assignment)==null?void 0:d.deadline),online:(u=s.assignment)==null?void 0:u.onlineSubmission})},[s.assignment,s.form]),e.jsx(e.Fragment,{children:e.jsxs(S,{layout:"vertical",form:s.form,onFinish:i=>{i.online=o,i.description=g,s.onFinish(i)},requiredMark:!1,children:[e.jsx(S.Item,{name:"title",label:"Title",rules:[{required:!0,type:"string",message:"Please input Title"}],children:e.jsx(B,{size:"large",placeholder:"Enter Title ..."})}),e.jsx(S.Item,{name:"online",children:e.jsx(xe,{checked:o,onChange:()=>m(!o),children:"Online Submit Assignment Work"})}),e.jsx(S.Item,{name:"deadline",label:"Deadline",rules:[{required:!0,type:"date",message:"Please select Deadline"}],children:e.jsx(Ie,{showTime:{format:"HH:mm"},onChange:()=>{console.log("change")},disabledDate:i=>{var d,u;let l;return N().isAfter(N((d=s.assignment)==null?void 0:d.deadline))?l=N((u=s.assignment)==null?void 0:u.deadline).format("YYYY-MM-DD"):l=N().format("YYYY-MM-DD"),i&&i<fe(l,"YYYY-MM-DD")},style:{width:"100%"},popupStyle:{zIndex:9999}})}),e.jsx("h3",{children:"Assignment Description"}),e.jsx(Ae,{onChange:i=>{p(i)}}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(C,{type:"primary",size:"large",htmlType:"submit",children:"Save"})})]})})};export{_e as A,Ze as E,He as a,Be as b};
