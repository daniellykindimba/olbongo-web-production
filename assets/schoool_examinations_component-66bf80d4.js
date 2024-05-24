import{cQ as R,r as a,j as e,a8 as ce,aT as g,S as V,a1 as O,aW as _,aP as T,av as z,g as w,eM as ue,_ as h,eN as he,aX as ae,cf as J,aY as H,eO as ge,af as G,eP as ye,cm as Z,eQ as je,ce as xe,eR as fe,eS as Se,cn as re,aR as ve,aU as X}from"./index-3ee95507.js";import{d as me,C as pe}from"./ckeditor-69442fe0.js";import{D as ee}from"./index-413f080f.js";import{P as Y}from"./index-83878f15.js";import{I as se}from"./index-8a5c8c79.js";import{S as U}from"./SearchOutlined-57b520e5.js";import{G as Ee}from"./index-f53a7735.js";import{U as Ce}from"./UserAddOutlined-a531d027.js";import{D as ie}from"./DeleteOutlined-1abe9ead.js";import{D as oe}from"./index-ade8483e.js";import{E as be}from"./EditOutlined-49201e5d.js";import{M as Ie}from"./MoreOutlined-d4a00d34.js";const{Option:le}=V;let P=[];for(let n=0;n<5;n++)P.push(R().year()+n),P.push(R().year()-n);P=P.sort((n,l)=>n-l);P=P.filter((n,l)=>P.indexOf(n)===l);const Le=n=>{const[l,C]=a.useState(!0),[f,E]=a.useState([]),[b,F]=a.useState(""),L=async i=>{const{data:t}=await w.custom({url:"",method:"post",meta:{operation:"createSchoolExamination",variables:{examinationTypeId:{value:i.examination_type_id,type:"Int",required:!0},name:{value:i.name,type:"String",required:!0},description:{value:i.description,type:"String",required:!1},startDate:{value:i.start_date,type:"String",required:!1},endDate:{value:i.end_date,type:"String",required:!1},year:{value:i.year,type:"Int",required:!0}},fields:["success","message",{schoolExamination:ue}]}}).catch(()=>(h.remove(),h.error("Error occured while Creating School Examination"),{data:null})).then(d=>d);h.remove(),t&&(t.success?(h.success(t.message),n.onFinish(t.schoolExamination)):h.error(t.message))},k=async(i,t="")=>{C(!0);const{data:d}=await w.custom({url:"",method:"get",meta:{operation:"examinationsTypes",variables:{page:{value:i,type:"Int",required:!0},key:{value:t,type:"String",required:!1},strictSchool:{value:!0,type:"Boolean",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:he}]}}).catch(()=>(h.remove(),h.error("Error occured while Examinations Types"),{data:null})).then(m=>m);d&&E([...d.results]),C(!1)};return a.useEffect(()=>{k(1)},[n.randKey]),e.jsx(e.Fragment,{children:e.jsx(ce,{spinning:l,children:e.jsxs(g,{layout:"vertical",form:n.form,onFinish:i=>{i.description=b,L(i)},requiredMark:!0,children:[e.jsx(g.Item,{name:"examination_type_id",label:"Examination Type",rules:[{required:!0,type:"integer",message:"Please choose Examination Type..."}],children:e.jsx(V,{size:"large",showSearch:!0,placeholder:"Select a School Type",optionFilterProp:"children",onChange:i=>{},onSearch:i=>{},filterOption:(i,t)=>t.children.toLowerCase().includes(i.toLowerCase()),dropdownStyle:{zIndex:9999},children:f.map((i,t)=>e.jsx(le,{value:parseInt(i.id.toString()),children:i.name}))})}),e.jsx(g.Item,{name:"name",label:"Name",rules:[{required:!0,type:"string",message:"Please input Name"}],children:e.jsx(O,{size:"large",placeholder:"Enter Name ..."})}),e.jsx(g.Item,{name:"year",label:"Year",rules:[{required:!0,type:"integer",message:"Please choose Year..."}],children:e.jsx(V,{size:"large",showSearch:!0,placeholder:"Select a Year",optionFilterProp:"children",onChange:i=>{},onSearch:i=>{},filterOption:(i,t)=>t.children.toLowerCase().includes(i.toLowerCase()),dropdownStyle:{zIndex:9999},children:P.map((i,t)=>e.jsx(le,{value:i,children:i}))})}),e.jsxs(_,{children:[e.jsx(T,{span:12,children:e.jsx(g.Item,{name:"start_date",label:"Start Date",rules:[{required:!1,type:"date",message:"Please input Start Date"}],children:e.jsx(ee,{onChange:()=>{},style:{width:"100%"},popupStyle:{zIndex:9999}})})}),e.jsx(T,{span:12,children:e.jsx(g.Item,{name:"end_date",label:"End Date",rules:[{required:!1,type:"date",message:"Please input End Date"}],children:e.jsx(ee,{onChange:()=>{},style:{width:"100%"},popupStyle:{zIndex:9999}})})})]}),e.jsxs("div",{style:{marginBottom:10},children:[e.jsx("h3",{children:"Description"}),e.jsx(me.CKEditor,{editor:pe,data:b,onReady:i=>{i.editing.view.change(t=>{t.setStyle("min-height","100px",i.editing.view.document.getRoot())})},onChange:(i,t)=>{const d=t.getData();F(d)},onBlur:(i,t)=>{},onFocus:(i,t)=>{},config:{toolbar:{items:["bold","italic","strikethrough","underline","code","subscript","superscript","removeFormat","|","bulletedList","numberedList","todoList","|","outdent","indent","|","-","fontSize","fontFamily","fontColor","fontBackgroundColor","highlight","|","alignment","|","EmojiPanel"],shouldNotGroupWhenFull:!0},fontFamily:{options:["default","Arial, Helvetica, sans-serif","Courier New, Courier, monospace","Georgia, serif","Lucida Sans Unicode, Lucida Grande, sans-serif","Tahoma, Geneva, sans-serif","Times New Roman, Times, serif","Trebuchet MS, Helvetica, sans-serif","Verdana, Geneva, sans-serif"],supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0}}})]}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(z,{type:"primary",size:"large",htmlType:"submit",children:"Save"})})]})})})},Te=n=>{const[l,C]=a.useState([]),[f,E]=a.useState(0),[b,F]=a.useState(20),[L,k]=a.useState(""),[i,t]=a.useState(!0),[d]=g.useForm(),[m,q]=a.useState(0),D=x=>{q(x)},S=async(x,o=!1)=>{var p;ge(x,o,m??0,((p=n.schoolExamination)==null?void 0:p.id)??0).then(v=>{v&&(v.success?(h.success(v.message),v.schoolExaminationEducationLevel?(C(l.filter(A=>A.id!==x)),n.onAdd(v.schoolExaminationEducationLevel)):(y(1,"",20),n.onAddAll())):h.error(v.message))})},j=[{title:"Name",dataIndex:"name",fixed:!0,render:(x,o,p)=>e.jsx("span",{children:e.jsx("a",{children:o.educationLevel.name})})},{title:"",dataIndex:"action",render:(x,o,p)=>e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(Y,{placement:"left",title:e.jsx(e.Fragment,{children:e.jsxs(ae,{direction:"vertical",children:[e.jsxs("span",{children:["Are you sure to add ",o.educationLevel.name," ?"]}),e.jsx("div",{style:{height:"10px"}}),e.jsx("span",{style:{fontWeight:"bolder"},children:"Average Pass Score"}),e.jsx("span",{children:e.jsx(se,{size:"large",style:{width:"100%"},defaultValue:0,onChange:D})})]})}),disabled:!o.canManage,onConfirm:()=>S(o.id),onCancel:()=>{},okButtonProps:{disabled:m==null||m<0||m>100},okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(G,{title:"Click to Add",placement:"left",color:"green",children:e.jsx(z,{size:"large",icon:e.jsx(J,{}),disabled:!o.canManage,danger:!0})})})})}],y=async(x,o="",p=20)=>{var v;t(!0),ye(x,o,p,((v=n.schoolExamination)==null?void 0:v.id)??0).then(A=>{A&&(E(A.total),C([...A.results]))}),t(!1)};return a.useEffect(()=>{y(1,"",20)},[n.randKey]),e.jsxs(e.Fragment,{children:[e.jsxs(_,{style:{marginTop:10},children:[e.jsx(T,{span:12,children:e.jsx(g,{layout:"vertical",form:d,onFinish:x=>{k(x.key),l.length=0,y(1,x.key,b)},children:e.jsx(g.Item,{name:"key",children:e.jsx(O,{size:"large",placeholder:"Search ...",prefix:e.jsx(U,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(T,{span:4,children:e.jsx(z,{icon:e.jsx(U,{}),size:"large"})}),e.jsx(T,{span:8,style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(Y,{placement:"left",title:e.jsx(e.Fragment,{children:e.jsxs(ae,{direction:"vertical",children:[e.jsx("span",{children:"Are you sure to add All?"}),e.jsx("div",{style:{height:"10px"}}),e.jsx("span",{style:{fontWeight:"bolder"},children:"Average Pass Score"}),e.jsx("span",{children:e.jsx(se,{size:"large",style:{width:"100%"},defaultValue:0,onChange:D})})]})}),onConfirm:()=>S(0,!0),onCancel:()=>{},okButtonProps:{disabled:m==null||m<0||m>100},okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(z,{size:"large",icon:e.jsx(J,{}),danger:!0,children:"Add All"})})})]}),e.jsx(H,{loading:i,columns:j,dataSource:l,pagination:{onChange:(x,o)=>{F(o),y(x,L,o)},total:f,pageSize:b,position:["bottomCenter"],showQuickJumper:!1},scroll:{x:!0}})]})},Fe=n=>{const[l,C]=a.useState([]),[f,E]=a.useState(0),[b,F]=a.useState(20),[L,k]=a.useState(""),[i,t]=a.useState(!0),[d]=g.useForm(),m=[{title:"Subject Name",dataIndex:"name",fixed:!0,render:(S,j)=>e.jsx("span",{children:e.jsx("a",{children:j.schoolSubject.subject.name})})},{title:"",dataIndex:"action",render:(S,j)=>e.jsx(e.Fragment,{children:e.jsx(Y,{title:"Add "+(j==null?void 0:j.schoolSubject.subject.name),onConfirm:()=>q(!1,j==null?void 0:j.id),onCancel:()=>{},okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(z,{icon:e.jsx(J,{}),style:{float:"right"},danger:!0})})})}],q=async(S=!1,j)=>{var x;const{data:y}=await w.custom({url:"",method:"post",meta:{operation:"addSchoolExaminationEducationLevelSubject",variables:{schoolExaminationEducationLevelId:{value:parseInt(((x=n.level)==null?void 0:x.id.toString())??"0"),type:"Int",required:!0},schoolEducationLevelSubjectId:{value:parseInt(j.toString()),type:"Int",required:!1},all:{value:S,type:"Boolean",required:!1}},fields:["success","message",{schoolExaminationEducationLevelSubject:["id"]}]}}).catch(o=>(h.remove(),h.error("Something Went Wrong ...."),{data:null})).then(o=>o);y!=null&&y.success?(h.success(y==null?void 0:y.message),l.length=0,C([]),D(1,L,b),n.onAdd()):h.error(y==null?void 0:y.message)},D=async(S,j="",y=20)=>{var o;const{data:x}=await w.custom({url:"",method:"get",meta:{operation:"schoolEducationLevelSubjectsForExaminationToAdd",variables:{page:{value:S,type:"Int",required:!0},key:{value:j,type:"String",required:!1},pageSize:{value:y,type:"Int",required:!1},schoolExaminationEducationLevelId:{value:parseInt(((o=n.level)==null?void 0:o.id.toString())??"0"),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:["id",{schoolSubject:["id",{subject:["id","name"]}]},"isActive","created","updated","canEdit","canDelete","canManage"]}]}}).catch(p=>(h.remove(),h.error("Something Went Wrong ...."),{data:null})).then(p=>p);x&&(E(x.total),C([...x.results])),t(!1)};return a.useEffect(()=>{D(1,"",20)},[n.randKey]),e.jsxs(e.Fragment,{children:[e.jsxs(_,{style:{marginTop:10},children:[e.jsx(T,{span:16,children:e.jsx(g,{layout:"vertical",form:d,onFinish:S=>{k(S.key),l.length=0,D(1,S.key)},children:e.jsx(g.Item,{name:"key",children:e.jsx(O,{size:"large",placeholder:"Search ...",prefix:e.jsx(U,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(T,{span:8,style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(Y,{title:"Are you sure to add all subjects",onConfirm:()=>q(!0,0),onCancel:()=>{},okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(z,{size:"large",danger:!0,children:"Add All"})})})]}),e.jsx(H,{loading:i,columns:m,dataSource:l,pagination:{onChange:(S,j)=>{F(j),D(S,L,j)},total:f,pageSize:b,position:["bottomCenter"],showQuickJumper:!1},scroll:{y:"50vh"}})]})},ke=n=>{const[l,C]=a.useState([]),[f,E]=a.useState(0),[b,F]=a.useState(20),[L,k]=a.useState(""),[i,t]=a.useState(!0),[d,m]=a.useState(!1),[q]=g.useForm();Ee.useBreakpoint().lg;const S=[{title:"Subject Name",dataIndex:"name",fixed:!0,render:(o,p,v)=>e.jsx("span",{children:e.jsx("a",{children:p.schoolEducationLevelSubject.schoolSubject.subject.name})})},{title:"",dataIndex:"action",render:(o,p,v)=>e.jsx(e.Fragment,{children:e.jsx(Y,{title:"Delete this Subject",placement:"topLeft",onConfirm:()=>j(p==null?void 0:p.id),onCancel:()=>{},okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(z,{danger:!0,size:"small",icon:e.jsx(ie,{}),style:{float:"right"}})})})}],j=async o=>{const{data:p}=await w.custom({url:"",method:"post",meta:{operation:"removeSchoolExaminationEducationLevelSubject",variables:{schoolExaminationEducationLevelSubjectId:{value:parseInt(o.toString()),type:"Int",required:!0}},fields:["success","message"]}}).catch(v=>(h.remove(),h.error("Something Went Wrong ...."),{data:null})).then(v=>v);p&&(p.success?(h.success(p.message),y(1,"",20)):h.error(p.message))},y=async(o,p="",v=20)=>{var K;const{data:A}=await w.custom({url:"",method:"get",meta:{operation:"schoolExaminationEducationLevelSubjects",variables:{page:{value:o,type:"Int",required:!0},key:{value:p,type:"String",required:!1},pageSize:{value:v,type:"Int",required:!1},schoolExaminationEducationLevelId:{value:parseInt(((K=n.level)==null?void 0:K.id.toString())??"0"),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:["id",{schoolEducationLevelSubject:["id",{schoolSubject:["id",{subject:["id","name"]}]}]},"isActive","created","updated","canEdit","canDelete","canManage"]}]}}).catch(W=>(h.remove(),h.error("Something Went Wrong ...."),{data:null})).then(W=>W);A&&(E(A.total),C([...A.results])),t(!1)},x=async()=>{y(1,L,b)};return a.useEffect(()=>{y(1,"",20)},[n.randKey]),e.jsxs(e.Fragment,{children:[e.jsxs(_,{style:{marginTop:10},children:[e.jsx(T,{span:16,children:e.jsx(g,{layout:"vertical",form:q,onFinish:o=>{k(o.key),l.length=0,y(1,o.key)},children:e.jsx(g.Item,{name:"key",children:e.jsx(O,{size:"large",placeholder:"Search ...",prefix:e.jsx(U,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(T,{span:8,children:e.jsx(z,{danger:!0,size:"large",icon:e.jsx(Ce,{}),onClick:()=>m(!0),style:{float:"right"},children:"Add Subject"})})]}),e.jsx(H,{loading:i,columns:S,dataSource:l,pagination:{onChange:(o,p)=>{F(p),y(o,L,p)},total:f,pageSize:b,position:["bottomCenter"],showQuickJumper:!1},scroll:{y:"50vh"}}),e.jsx(Z,{title:"Adding Subjects",open:d,width:"40vw",onClose:o=>m(o),children:e.jsx(Fe,{level:n.level,onAdd:x})})]})},De=n=>{var c,r,I;const[l,C]=a.useState(),[f,E]=a.useState([]),[b,F]=a.useState(20),[L,k]=a.useState(""),[i,t]=a.useState(0),[d,m]=a.useState(!0),[q]=g.useForm(),[D,S]=a.useState(!1),[j,y]=a.useState(!1),[x,o]=a.useState(0),p=async u=>{C(u),y(!0)},v=u=>{o(u)},A=async()=>{B(1,"",20)},K=async u=>{E([u,...f])},W=async u=>{fe(u,x??0).then(s=>{s&&(s.success?(h.success(s.message),E(f.map(M=>M.id===u?s.schoolExaminationEducationLevel:M))):h.error(s.message))})},te=async u=>{Se(u).then(s=>{s&&(s.success?(h.success(s.message),E(f.filter(M=>M.id!==u))):h.error(s.message))})},B=async(u,s="",M=20)=>{var $;m(!0),je(u,s,M,(($=n.schoolExamination)==null?void 0:$.id)??0).then(ne=>{ne&&(t(ne.total),E([...ne.results]))}),m(!1)};a.useEffect(()=>{B(1,"",20)},[n.randKey,n.schoolExamination]);const Q=[{title:"Education Level",dataIndex:"educationLevel",fixed:!0,render:(u,s,M)=>e.jsx("span",{children:e.jsx(G,{title:"Click to View Results",color:"green",placement:"top",children:e.jsx("a",{children:s.schoolEducationLevel.educationLevel.name})})})},{title:"Average Pass Score",dataIndex:"score",fixed:!0,render:(u,s,M)=>e.jsx("span",{children:e.jsx(Y,{title:e.jsx(e.Fragment,{children:e.jsxs(ae,{direction:"vertical",children:[e.jsx("span",{children:"Updating Average Score ?"}),e.jsx("div",{style:{height:"10px"}}),e.jsx("span",{style:{fontWeight:"bolder"},children:"Average Pass Score"}),e.jsx("span",{children:e.jsx(se,{size:"large",style:{width:"100%"},defaultValue:s.score,onChange:v})})]})}),onVisibleChange:$=>{$&&o(s.score)},onConfirm:()=>W(s.id),onCancel:()=>{},okButtonProps:{disabled:x==null||x<0||x>100},okText:"Update",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(G,{title:"Tap to Edit",color:"green",children:e.jsx("a",{children:s.score})})})})},{title:"Created",dataIndex:"created",render:(u,s,M)=>e.jsx(e.Fragment,{children:e.jsx("span",{children:new Date(s.created).toLocaleString()})})},{title:"Status",dataIndex:"isActive",render:(u,s,M)=>e.jsx("a",{children:s!=null&&s.isActive?e.jsx("span",{style:{color:"green"},children:"Active"}):e.jsx("span",{style:{color:"red"},children:"Inactive"})})},{title:"",dataIndex:"action",render:(u,s,M)=>e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end"},children:[e.jsx(G,{title:"View Education Level Applicable Subjects",color:"green",placement:"left",children:e.jsx(z,{size:"small",style:{marginRight:3},icon:e.jsx(xe,{}),disabled:!(s!=null&&s.canManage),onClick:()=>p(s),danger:!0})}),e.jsx(Y,{title:"Are you sure to remove this Education Level?",onConfirm:()=>te(s==null?void 0:s.id),onCancel:()=>{},okText:"Yes",cancelText:"No",disabled:!(s!=null&&s.canDelete),overlayStyle:{zIndex:9999},children:e.jsx(z,{size:"small",icon:e.jsx(ie,{}),disabled:!(s!=null&&s.canDelete),danger:!0})})]})}];return e.jsxs(e.Fragment,{children:[e.jsxs(_,{style:{marginTop:10},children:[e.jsx(T,{span:16,children:e.jsx(g,{layout:"vertical",form:q,onFinish:u=>{k(u.key),f.length=0,B(1,u.key)},children:e.jsx(g.Item,{name:"key",children:e.jsx(O,{size:"large",placeholder:"Search ...",prefix:e.jsx(U,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(T,{span:8,style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(G,{title:"Add New Education Level",color:"green",children:e.jsx(z,{icon:e.jsx(J,{}),size:"large",danger:!0,onClick:()=>S(!0),children:"Add"})})})]}),e.jsx(H,{loading:d,columns:Q,dataSource:f,pagination:{onChange:(u,s)=>{F(s),B(u,L,s)},total:i,pageSize:b,position:["bottomCenter"],showQuickJumper:!1},scroll:{x:!0,y:"calc(100vh - 300px)"}}),e.jsx(oe,{title:"Adding Education Levels",width:"35vw",anchor:"right",onClose:u=>S(u),open:D,noOverFlow:!0,children:e.jsx(Te,{schoolExamination:n.schoolExamination,onAdd:K,onAddAll:A,randKey:Math.random()})}),e.jsx(oe,{title:((r=(c=l==null?void 0:l.schoolEducationLevel)==null?void 0:c.educationLevel)==null?void 0:r.name)+" => "+((I=l==null?void 0:l.schoolExamination)==null?void 0:I.name)+" => Subjects",destroyOnClose:!0,width:"45vw",anchor:"right",onClose:u=>y(u),open:j,noOverFlow:!0,children:e.jsx(ke,{level:l})})]})},{Option:de}=V;let N=[];for(let n=0;n<5;n++)N.push(R().year()+n),N.push(R().year()-n);N=N.sort((n,l)=>n-l);N=N.filter((n,l)=>N.indexOf(n)===l);const Ae=n=>{const[l,C]=a.useState(!0),[f,E]=a.useState([]),[b]=g.useForm(),[F,L]=a.useState(""),k=async t=>{const{data:d}=await w.custom({url:"",method:"post",meta:{operation:"updateSchoolExamination",variables:{id:{value:parseInt(t.id.toString()),type:"Int",required:!0},examinationTypeId:{value:t.examination_type_id,type:"Int",required:!0},name:{value:t.name,type:"String",required:!0},description:{value:t.description,type:"String",required:!1},startDate:{value:t.start_date,type:"String",required:!1},endDate:{value:t.end_date,type:"String",required:!1},year:{value:t.year,type:"Int",required:!1}},fields:["success","message",{schoolExamination:ue}]}}).catch(m=>(console.error(m),h.error("Error occured while Creating School Examination"),{data:null})).then(m=>m);d&&(d.success?(h.success(d.message),n.onFinish(d.schoolExamination)):h.error(d.message))},i=async(t,d="")=>{C(!0);const{data:m}=await w.custom({url:"",method:"get",meta:{operation:"examinationsTypes",variables:{page:{value:t,type:"Int",required:!0},key:{value:d,type:"String",required:!1},strictSchool:{value:!0,type:"Boolean",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:he}]}}).catch(()=>(h.error("Error occured while Examinations Types"),{data:null})).then(q=>q);m&&E([...m.results]),C(!1)};return a.useEffect(()=>{i(1)},[n.randKey]),e.jsx(e.Fragment,{children:e.jsx(ce,{spinning:l,children:e.jsxs(g,{layout:"vertical",form:b,onFinish:t=>{t.id=n.examination.id,t.description=F,k(t)},requiredMark:!0,initialValues:{id:n.examination.id,name:n.examination.name,description:n.examination.description,start_date:R(n.examination.startDate),end_date:R(n.examination.endDate),examination_type_id:n.examination.examinationType.id,year:n.examination.year},children:[e.jsx(g.Item,{name:"examination_type_id",label:"Examination Type",rules:[{required:!0,type:"integer",message:"Please choose Examination Type..."}],children:e.jsx(V,{size:"large",showSearch:!0,placeholder:"Select a School Type",optionFilterProp:"children",onChange:t=>{},onSearch:t=>{},filterOption:(t,d)=>d.children.toLowerCase().includes(t.toLowerCase()),dropdownStyle:{zIndex:9999},children:f.map((t,d)=>e.jsx(de,{value:parseInt(t.id.toString()),children:t.name}))})}),e.jsx(g.Item,{name:"name",label:"Name",rules:[{required:!0,type:"string",message:"Please input Name"}],children:e.jsx(O,{size:"large",placeholder:"Enter Name ..."})}),e.jsx(g.Item,{name:"year",label:"Year",rules:[{required:!0,type:"integer",message:"Please choose Year..."}],children:e.jsx(V,{size:"large",showSearch:!0,placeholder:"Select a Year",optionFilterProp:"children",onChange:t=>{},onSearch:t=>{},filterOption:(t,d)=>d.children.toLowerCase().includes(t.toLowerCase()),dropdownStyle:{zIndex:9999},children:N.map((t,d)=>e.jsx(de,{value:t,children:t}))})}),e.jsxs(_,{children:[e.jsx(T,{span:12,children:e.jsx(g.Item,{name:"start_date",label:"Start Date",rules:[{required:!1,type:"date",message:"Please input Start Date"}],children:e.jsx(ee,{onChange:()=>{},style:{width:"100%"},popupStyle:{zIndex:9999}})})}),e.jsx(T,{span:12,children:e.jsx(g.Item,{name:"end_date",label:"End Date",rules:[{required:!1,type:"date",message:"Please input End Date"}],children:e.jsx(ee,{onChange:()=>{},style:{width:"100%"},popupStyle:{zIndex:9999}})})})]}),e.jsxs("div",{style:{marginBottom:10},children:[e.jsx("h3",{children:"Description"}),e.jsx(me.CKEditor,{editor:pe,data:F,onReady:t=>{t.editing.view.change(d=>{d.setStyle("min-height","100px",t.editing.view.document.getRoot())})},onChange:(t,d)=>{const m=d.getData();L(m)},onBlur:(t,d)=>{},onFocus:(t,d)=>{},config:{toolbar:{items:["bold","italic","strikethrough","underline","code","subscript","superscript","removeFormat","|","bulletedList","numberedList","todoList","|","outdent","indent","|","-","fontSize","fontFamily","fontColor","fontBackgroundColor","highlight","|","alignment","|","EmojiPanel"],shouldNotGroupWhenFull:!0},fontFamily:{options:["default","Arial, Helvetica, sans-serif","Courier New, Courier, monospace","Georgia, serif","Lucida Sans Unicode, Lucida Grande, sans-serif","Tahoma, Geneva, sans-serif","Times New Roman, Times, serif","Trebuchet MS, Helvetica, sans-serif","Verdana, Geneva, sans-serif"],supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0}}})]}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(z,{type:"primary",size:"large",htmlType:"submit",children:"Save"})})]})})})},Ge=n=>{const[l,C]=a.useState(),[f,E]=a.useState([]),[b,F]=a.useState(0),[L,k]=a.useState(!0),[i,t]=a.useState(20),[d,m]=a.useState(""),[q]=g.useForm(),[D]=g.useForm(),[S,j]=a.useState(!1),[y,x]=a.useState(!1),[o,p]=a.useState(!1),v=c=>{C(c),x(!0)},A=c=>{C(c),p(!0)},K=async c=>{E([c,...f]),D.resetFields(),j(!1)},W=async c=>{E(f.map(r=>r.id===c.id?c:r)),x(!1)},te=async c=>{const{data:r}=await w.custom({url:"",method:"post",meta:{operation:"deleteSchoolExamination",variables:{schoolExaminationId:{value:c,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(h.error("Error occured while deleting Examination"),{data:null})).then(I=>I);r&&(r.success?(h.success(r.message),E(f.filter(I=>I.id.toString()!==c.toString()))):h.error(r.message))},B=[{title:"Name",dataIndex:"name",fixed:!0,render:(c,r,I)=>e.jsx("span",{children:e.jsx("a",{children:r.name})})},{title:"Year",dataIndex:"year",fixed:!0,render:(c,r,I)=>e.jsx("span",{children:e.jsx("a",{children:r.year})})},{title:"Exam Type",dataIndex:"examinationType",fixed:!0,render:(c,r,I)=>e.jsx("span",{children:r.examinationType.name})},{title:"Start Date",dataIndex:"startDate",fixed:!0,render:(c,r,I)=>e.jsx("span",{children:re(r.startDate).format("YYYY-MM-DD")})},{title:"End Date",dataIndex:"endDate",fixed:!0,render:(c,r,I)=>e.jsx("span",{children:re(r.endDate).format("YYYY-MM-DD")})},{title:"Date Created",dataIndex:"created",render:(c,r,I)=>e.jsx(e.Fragment,{children:e.jsx("span",{children:new Date(r.created).toLocaleString()})})},{title:"Status",dataIndex:"isActive",render:(c,r,I)=>e.jsx("a",{children:r!=null&&r.isActive?e.jsx("span",{style:{color:"green"},children:"Active"}):e.jsx("span",{style:{color:"red"},children:"Inactive"})})},{title:"",dataIndex:"action",render:(c,r,I)=>e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(ve,{trigger:["click"],overlay:e.jsxs(X,{children:[e.jsx(X.Item,{icon:e.jsx(ie,{style:{color:"red"}}),children:e.jsx(Y,{placement:"topLeft",title:`Are you sure you want to delete ${r.name} Examination?`,onConfirm:()=>te(parseInt(r.id)),okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx("a",{rel:"noopener noreferrer",children:"Delete"})})}),e.jsx(X.Item,{icon:e.jsx(be,{style:{color:"red"}}),disabled:!r.canEdit,onClick:()=>v(r),children:e.jsx("a",{rel:"noopener noreferrer",children:"Edit"})}),e.jsx(X.Item,{icon:e.jsx(xe,{style:{color:"red"}}),disabled:!r.canManage,onClick:()=>A(r),children:e.jsx("a",{rel:"noopener noreferrer",children:"Education Levels"})})]}),overlayStyle:{zIndex:9999},children:e.jsx("a",{className:"ant-dropdown-link",onClick:u=>u.preventDefault(),children:e.jsx(Ie,{style:{color:"red",fontSize:28,fontWeight:"bold"}})})})})}],Q=async(c,r="",I=20)=>{k(!0);const{data:u}=await w.custom({url:"",method:"get",meta:{operation:"schoolExaminations",variables:{page:{value:c,type:"Int",required:!0},key:{value:r,type:"String",required:!1},pageSize:{value:I,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","description","year","startDate","endDate",{school:["id","name"]},{examinationType:["id","name"]},"isActive","created","updated","canEdit","canDelete","canManage"]}]}}).catch(()=>(h.error("Error occured while fetching Examinations"),{data:null})).then(s=>s);u&&(F(u.total),E([...u.results])),k(!1)};return a.useEffect(()=>{Q(1,"",20)},[]),e.jsxs(e.Fragment,{children:[e.jsxs(_,{style:{marginTop:10},children:[e.jsx(T,{span:12,children:e.jsx(g,{layout:"vertical",form:q,onFinish:c=>{m(c.key),f.length=0,Q(1,c.key)},children:e.jsx(g.Item,{name:"key",children:e.jsx(O,{size:"large",placeholder:"Search ...",prefix:e.jsx(U,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(T,{span:12,children:e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(G,{title:"Create Examination",children:e.jsx(z,{icon:e.jsx(J,{}),size:"large",onClick:()=>j(!0),danger:!0,children:"Add"})})})})]}),e.jsx(H,{loading:L,columns:B,dataSource:f,pagination:{onChange:(c,r)=>{t(r),Q(c,d,r)},total:b,pageSize:i,position:["bottomCenter"],showQuickJumper:!1},scroll:{x:!0}}),e.jsx(Z,{title:"Creating Examination",open:S,onClose:c=>j(c),width:"30vw",children:e.jsx(Le,{form:D,onFinish:K})}),e.jsx(Z,{title:"Editting Examination",open:y,onClose:c=>x(c),width:"30vw",children:e.jsx(Ae,{onFinish:W,examination:l})}),e.jsx(Z,{title:e.jsxs(e.Fragment,{children:[e.jsx("span",{style:{color:"green"},children:l==null?void 0:l.name}),e.jsx("span",{children:" Education Levels"})]}),open:o,onClose:c=>p(c),width:"50vw",children:e.jsx(De,{schoolExamination:l,randKey:Math.random()})})]})};export{Ge as S};
