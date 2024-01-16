import{aq as B,r as a,j as e,a as ce,c as m,ao as G,I as _,R as K,d as T,ap as ee,m as ue,n as he,B as z,g as w,dQ as xe,_ as y,dR as me,e as U,a3 as Y,S as ae,ac as se,P as J,K as H,dS as ye,T as V,dT as je,aE as fe,c2 as Se,M as X,a5 as ie,D as re,dU as ve,a7 as pe,O as ge,dV as Ee,dW as Ce,h as oe,Y as be,Z,as as Ie,a0 as Le}from"./index-c92f9f6b.js";const{Option:le}=G;let N=[];for(let n=0;n<5;n++)N.push(B().year()+n),N.push(B().year()-n);N=N.sort((n,l)=>n-l);N=N.filter((n,l)=>N.indexOf(n)===l);const Te=n=>{const[l,C]=a.useState(!0),[f,E]=a.useState([]),[b,F]=a.useState(""),L=async i=>{const{data:t}=await w.custom({url:"",method:"post",meta:{operation:"createSchoolExamination",variables:{examinationTypeId:{value:i.examination_type_id,type:"Int",required:!0},name:{value:i.name,type:"String",required:!0},description:{value:i.description,type:"String",required:!1},startDate:{value:i.start_date,type:"String",required:!1},endDate:{value:i.end_date,type:"String",required:!1},year:{value:i.year,type:"Int",required:!0}},fields:["success","message",{schoolExamination:xe}]}}).catch(()=>(y.error("Error occured while Creating School Examination"),{data:null})).then(d=>d);t&&(t.success?(y.success(t.message),n.onFinish(t.schoolExamination)):y.error(t.message))},k=async(i,t="")=>{C(!0);const{data:d}=await w.custom({url:"",method:"get",meta:{operation:"examinationsTypes",variables:{page:{value:i,type:"Int",required:!0},key:{value:t,type:"String",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:me}]}}).catch(()=>(y.error("Error occured while Examinations Types"),{data:null})).then(p=>p);d&&E([...d.results]),C(!1)};return a.useEffect(()=>{k(1)},[n.randKey]),e.jsx(e.Fragment,{children:e.jsx(ce,{spinning:l,children:e.jsxs(m,{layout:"vertical",form:n.form,onFinish:i=>{i.description=b,L(i)},requiredMark:!0,children:[e.jsx(m.Item,{name:"examination_type_id",label:"Examination Type",rules:[{required:!0,type:"integer",message:"Please choose Examination Type..."}],children:e.jsx(G,{size:"large",showSearch:!0,placeholder:"Select a School Type",optionFilterProp:"children",onChange:i=>{},onSearch:i=>{},filterOption:(i,t)=>t.children.toLowerCase().includes(i.toLowerCase()),dropdownStyle:{zIndex:9999},children:f.map((i,t)=>e.jsx(le,{value:parseInt(i.id.toString()),children:i.name}))})}),e.jsx(m.Item,{name:"name",label:"Name",rules:[{required:!0,type:"string",message:"Please input Name"}],children:e.jsx(_,{size:"large",placeholder:"Enter Name ..."})}),e.jsx(m.Item,{name:"year",label:"Year",rules:[{required:!0,type:"integer",message:"Please choose Year..."}],children:e.jsx(G,{size:"large",showSearch:!0,placeholder:"Select a Year",optionFilterProp:"children",onChange:i=>{},onSearch:i=>{},filterOption:(i,t)=>t.children.toLowerCase().includes(i.toLowerCase()),dropdownStyle:{zIndex:9999},children:N.map((i,t)=>e.jsx(le,{value:i,children:i}))})}),e.jsxs(K,{children:[e.jsx(T,{span:12,children:e.jsx(m.Item,{name:"start_date",label:"Start Date",rules:[{required:!1,type:"date",message:"Please input Start Date"}],children:e.jsx(ee,{onChange:()=>{},style:{width:"100%"},popupStyle:{zIndex:9999}})})}),e.jsx(T,{span:12,children:e.jsx(m.Item,{name:"end_date",label:"End Date",rules:[{required:!1,type:"date",message:"Please input End Date"}],children:e.jsx(ee,{onChange:()=>{},style:{width:"100%"},popupStyle:{zIndex:9999}})})})]}),e.jsxs("div",{style:{marginBottom:10},children:[e.jsx("h3",{children:"Description"}),e.jsx(ue.CKEditor,{editor:he,data:b,onReady:i=>{i.editing.view.change(t=>{t.setStyle("min-height","100px",i.editing.view.document.getRoot())})},onChange:(i,t)=>{const d=t.getData();F(d)},onBlur:(i,t)=>{},onFocus:(i,t)=>{},config:{toolbar:{items:["bold","italic","strikethrough","underline","code","subscript","superscript","removeFormat","|","bulletedList","numberedList","todoList","|","outdent","indent","|","-","fontSize","fontFamily","fontColor","fontBackgroundColor","highlight","|","alignment","|","EmojiPanel"],shouldNotGroupWhenFull:!0},fontFamily:{options:["default","Arial, Helvetica, sans-serif","Courier New, Courier, monospace","Georgia, serif","Lucida Sans Unicode, Lucida Grande, sans-serif","Tahoma, Geneva, sans-serif","Times New Roman, Times, serif","Trebuchet MS, Helvetica, sans-serif","Verdana, Geneva, sans-serif"],supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0}}})]}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(z,{type:"primary",size:"large",htmlType:"submit",children:"Save"})})]})})})},Fe=n=>{const[l,C]=a.useState([]),[f,E]=a.useState(0),[b,F]=a.useState(20),[L,k]=a.useState(""),[i,t]=a.useState(!0),[d]=m.useForm(),[p,q]=a.useState(0),A=h=>{q(h)},S=async(h,o=!1)=>{var x;ye(h,o,p??0,((x=n.schoolExamination)==null?void 0:x.id)??0).then(v=>{v&&(v.success?(y.success(v.message),v.schoolExaminationEducationLevel?(C(l.filter(D=>D.id!==h)),n.onAdd(v.schoolExaminationEducationLevel)):(g(1,"",20),n.onAddAll())):y.error(v.message))})},j=[{title:"Name",dataIndex:"name",fixed:!0,render:(h,o,x)=>e.jsx("span",{children:e.jsx("a",{children:o.educationLevel.name})})},{title:"",dataIndex:"action",render:(h,o,x)=>e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(Y,{placement:"left",title:e.jsx(e.Fragment,{children:e.jsxs(ae,{direction:"vertical",children:[e.jsxs("span",{children:["Are you sure to add ",o.educationLevel.name," ?"]}),e.jsx("div",{style:{height:"10px"}}),e.jsx("span",{style:{fontWeight:"bolder"},children:"Average Pass Score"}),e.jsx("span",{children:e.jsx(se,{size:"large",style:{width:"100%"},defaultValue:0,onChange:A})})]})}),disabled:!o.canManage,onConfirm:()=>S(o.id),onCancel:()=>{},okButtonProps:{disabled:p==null||p<0||p>100},okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(V,{title:"Click to Add",placement:"left",color:"green",children:e.jsx(z,{size:"large",icon:e.jsx(J,{}),disabled:!o.canManage,danger:!0})})})})}],g=async(h,o="",x=20)=>{var v;t(!0),je(h,o,x,((v=n.schoolExamination)==null?void 0:v.id)??0).then(D=>{D&&(E(D.total),C([...D.results]))}),t(!1)};return a.useEffect(()=>{g(1,"",20)},[n.randKey]),e.jsxs(e.Fragment,{children:[e.jsxs(K,{style:{marginTop:10},children:[e.jsx(T,{span:12,children:e.jsx(m,{layout:"vertical",form:d,onFinish:h=>{k(h.key),l.length=0,g(1,h.key,b)},children:e.jsx(m.Item,{name:"key",children:e.jsx(_,{size:"large",placeholder:"Search ...",prefix:e.jsx(U,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(T,{span:4,children:e.jsx(z,{icon:e.jsx(U,{}),size:"large"})}),e.jsx(T,{span:8,style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(Y,{placement:"left",title:e.jsx(e.Fragment,{children:e.jsxs(ae,{direction:"vertical",children:[e.jsx("span",{children:"Are you sure to add All?"}),e.jsx("div",{style:{height:"10px"}}),e.jsx("span",{style:{fontWeight:"bolder"},children:"Average Pass Score"}),e.jsx("span",{children:e.jsx(se,{size:"large",style:{width:"100%"},defaultValue:0,onChange:A})})]})}),onConfirm:()=>S(0,!0),onCancel:()=>{},okButtonProps:{disabled:p==null||p<0||p>100},okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(z,{size:"large",icon:e.jsx(J,{}),danger:!0,children:"Add All"})})})]}),e.jsx(H,{loading:i,columns:j,dataSource:l,pagination:{onChange:(h,o)=>{F(o),g(h,L,o)},total:f,pageSize:b,position:["bottomCenter"],showQuickJumper:!1},scroll:{x:!0}})]})},ke=n=>{const[l,C]=a.useState([]),[f,E]=a.useState(0),[b,F]=a.useState(20),[L,k]=a.useState(""),[i,t]=a.useState(!0),[d]=m.useForm(),p=[{title:"Subject Name",dataIndex:"name",fixed:!0,render:(S,j)=>e.jsx("span",{children:e.jsx("a",{children:j.schoolSubject.subject.name})})},{title:"",dataIndex:"action",render:(S,j)=>e.jsx(e.Fragment,{children:e.jsx(Y,{title:"Add "+(j==null?void 0:j.schoolSubject.subject.name),onConfirm:()=>q(!1,j==null?void 0:j.id),onCancel:()=>{},okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(z,{icon:e.jsx(J,{}),style:{float:"right"},danger:!0})})})}],q=async(S=!1,j)=>{var h;const{data:g}=await w.custom({url:"",method:"post",meta:{operation:"addSchoolExaminationEducationLevelSubject",variables:{schoolExaminationEducationLevelId:{value:parseInt(((h=n.level)==null?void 0:h.id.toString())??"0"),type:"Int",required:!0},schoolEducationLevelSubjectId:{value:parseInt(j.toString()),type:"Int",required:!1},all:{value:S,type:"Boolean",required:!1}},fields:["success","message",{schoolExaminationEducationLevelSubject:["id"]}]}}).catch(o=>(y.error("Something Went Wrong ...."),{data:null})).then(o=>o);g!=null&&g.success?(y.success(g==null?void 0:g.message),l.length=0,C([]),A(1,L,b),n.onAdd()):y.error(g==null?void 0:g.message)},A=async(S,j="",g=20)=>{var o;const{data:h}=await w.custom({url:"",method:"get",meta:{operation:"schoolEducationLevelSubjectsForExaminationToAdd",variables:{page:{value:S,type:"Int",required:!0},key:{value:j,type:"String",required:!1},pageSize:{value:g,type:"Int",required:!1},schoolExaminationEducationLevelId:{value:parseInt(((o=n.level)==null?void 0:o.id.toString())??"0"),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:["id",{schoolSubject:["id",{subject:["id","name"]}]},"isActive","created","updated","canEdit","canDelete","canManage"]}]}}).catch(x=>(y.error("Something Went Wrong ...."),{data:null})).then(x=>x);h&&(E(h.total),C([...h.results])),t(!1)};return a.useEffect(()=>{A(1,"",20)},[n.randKey]),e.jsxs(e.Fragment,{children:[e.jsxs(K,{style:{marginTop:10},children:[e.jsx(T,{span:16,children:e.jsx(m,{layout:"vertical",form:d,onFinish:S=>{k(S.key),l.length=0,A(1,S.key)},children:e.jsx(m.Item,{name:"key",children:e.jsx(_,{size:"large",placeholder:"Search ...",prefix:e.jsx(U,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(T,{span:8,style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(Y,{title:"Are you sure to add all subjects",onConfirm:()=>q(!0,0),onCancel:()=>{},okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(z,{size:"large",danger:!0,children:"Add All"})})})]}),e.jsx(H,{loading:i,columns:p,dataSource:l,pagination:{onChange:(S,j)=>{F(j),A(S,L,j)},total:f,pageSize:b,position:["bottomCenter"],showQuickJumper:!1},scroll:{y:"50vh"}})]})},Ae=n=>{const[l,C]=a.useState([]),[f,E]=a.useState(0),[b,F]=a.useState(20),[L,k]=a.useState(""),[i,t]=a.useState(!0),[d,p]=a.useState(!1),[q]=m.useForm();fe.useBreakpoint().lg;const S=[{title:"Subject Name",dataIndex:"name",fixed:!0,render:(o,x,v)=>e.jsx("span",{children:e.jsx("a",{children:x.schoolEducationLevelSubject.schoolSubject.subject.name})})},{title:"",dataIndex:"action",render:(o,x,v)=>e.jsx(e.Fragment,{children:e.jsx(Y,{title:"Delete this Subject",placement:"topLeft",onConfirm:()=>j(x==null?void 0:x.id),onCancel:()=>{},okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(z,{danger:!0,size:"small",icon:e.jsx(ie,{}),style:{float:"right"}})})})}],j=async o=>{const{data:x}=await w.custom({url:"",method:"post",meta:{operation:"removeSchoolExaminationEducationLevelSubject",variables:{schoolExaminationEducationLevelSubjectId:{value:parseInt(o.toString()),type:"Int",required:!0}},fields:["success","message"]}}).catch(v=>(y.error("Something Went Wrong ...."),{data:null})).then(v=>v);x&&(x.success?(y.success(x.message),g(1,"",20)):y.error(x.message))},g=async(o,x="",v=20)=>{var O;const{data:D}=await w.custom({url:"",method:"get",meta:{operation:"schoolExaminationEducationLevelSubjects",variables:{page:{value:o,type:"Int",required:!0},key:{value:x,type:"String",required:!1},pageSize:{value:v,type:"Int",required:!1},schoolExaminationEducationLevelId:{value:parseInt(((O=n.level)==null?void 0:O.id.toString())??"0"),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:["id",{schoolEducationLevelSubject:["id",{schoolSubject:["id",{subject:["id","name"]}]}]},"isActive","created","updated","canEdit","canDelete","canManage"]}]}}).catch(R=>(y.error("Something Went Wrong ...."),{data:null})).then(R=>R);D&&(E(D.total),C([...D.results])),t(!1)},h=async()=>{g(1,L,b)};return a.useEffect(()=>{g(1,"",20)},[n.randKey]),e.jsxs(e.Fragment,{children:[e.jsxs(K,{style:{marginTop:10},children:[e.jsx(T,{span:16,children:e.jsx(m,{layout:"vertical",form:q,onFinish:o=>{k(o.key),l.length=0,g(1,o.key)},children:e.jsx(m.Item,{name:"key",children:e.jsx(_,{size:"large",placeholder:"Search ...",prefix:e.jsx(U,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(T,{span:8,children:e.jsx(z,{danger:!0,size:"large",icon:e.jsx(Se,{}),onClick:()=>p(!0),style:{float:"right"},children:"Add Subject"})})]}),e.jsx(H,{loading:i,columns:S,dataSource:l,pagination:{onChange:(o,x)=>{F(x),g(o,L,x)},total:f,pageSize:b,position:["bottomCenter"],showQuickJumper:!1},scroll:{y:"50vh"}}),e.jsx(X,{title:"Adding Subjects",open:d,width:"40vw",onClose:o=>p(o),children:e.jsx(ke,{level:n.level,onAdd:h})})]})},De=n=>{var c,r,I;const[l,C]=a.useState(),[f,E]=a.useState([]),[b,F]=a.useState(20),[L,k]=a.useState(""),[i,t]=a.useState(0),[d,p]=a.useState(!0),[q]=m.useForm(),[A,S]=a.useState(!1),[j,g]=a.useState(!1),[h,o]=a.useState(0),x=async u=>{C(u),g(!0)},v=u=>{o(u)},D=async()=>{W(1,"",20)},O=async u=>{E([u,...f])},R=async u=>{Ee(u,h??0).then(s=>{s&&(s.success?(y.success(s.message),E(f.map(M=>M.id===u?s.schoolExaminationEducationLevel:M))):y.error(s.message))})},te=async u=>{Ce(u).then(s=>{s&&(s.success?(y.success(s.message),E(f.filter(M=>M.id!==u))):y.error(s.message))})},W=async(u,s="",M=20)=>{var $;p(!0),ve(u,s,M,(($=n.schoolExamination)==null?void 0:$.id)??0).then(ne=>{ne&&(t(ne.total),E([...ne.results]))}),p(!1)};a.useEffect(()=>{W(1,"",20)},[n.randKey,n.schoolExamination]);const Q=[{title:"Education Level",dataIndex:"educationLevel",fixed:!0,render:(u,s,M)=>e.jsx("span",{children:e.jsx(V,{title:"Click to View Results",color:"green",placement:"top",children:e.jsx("a",{children:s.schoolEducationLevel.educationLevel.name})})})},{title:"Average Pass Score",dataIndex:"score",fixed:!0,render:(u,s,M)=>e.jsx("span",{children:e.jsx(Y,{title:e.jsx(e.Fragment,{children:e.jsxs(ae,{direction:"vertical",children:[e.jsx("span",{children:"Updating Average Score ?"}),e.jsx("div",{style:{height:"10px"}}),e.jsx("span",{style:{fontWeight:"bolder"},children:"Average Pass Score"}),e.jsx("span",{children:e.jsx(se,{size:"large",style:{width:"100%"},defaultValue:s.score,onChange:v})})]})}),onVisibleChange:$=>{$&&o(s.score)},onConfirm:()=>R(s.id),onCancel:()=>{},okButtonProps:{disabled:h==null||h<0||h>100},okText:"Update",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(V,{title:"Tap to Edit",color:"green",children:e.jsx("a",{children:s.score})})})})},{title:"Created",dataIndex:"created",render:(u,s,M)=>e.jsx(e.Fragment,{children:e.jsx("span",{children:e.jsx(pe,{date:new Date(s.created)})})})},{title:"Status",dataIndex:"isActive",render:(u,s,M)=>e.jsx("a",{children:s!=null&&s.isActive?e.jsx("span",{style:{color:"green"},children:"Active"}):e.jsx("span",{style:{color:"red"},children:"Inactive"})})},{title:"",dataIndex:"action",render:(u,s,M)=>e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end"},children:[e.jsx(V,{title:"View Education Level Applicable Subjects",color:"green",placement:"left",children:e.jsx(z,{size:"small",style:{marginRight:3},icon:e.jsx(ge,{}),disabled:!(s!=null&&s.canManage),onClick:()=>x(s),danger:!0})}),e.jsx(Y,{title:"Are you sure to remove this Education Level?",onConfirm:()=>te(s==null?void 0:s.id),onCancel:()=>{},okText:"Yes",cancelText:"No",disabled:!(s!=null&&s.canDelete),overlayStyle:{zIndex:9999},children:e.jsx(z,{size:"small",icon:e.jsx(ie,{}),disabled:!(s!=null&&s.canDelete),danger:!0})})]})}];return e.jsxs(e.Fragment,{children:[e.jsxs(K,{style:{marginTop:10},children:[e.jsx(T,{span:16,children:e.jsx(m,{layout:"vertical",form:q,onFinish:u=>{k(u.key),f.length=0,W(1,u.key)},children:e.jsx(m.Item,{name:"key",children:e.jsx(_,{size:"large",placeholder:"Search ...",prefix:e.jsx(U,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(T,{span:8,style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(V,{title:"Add New Education Level",color:"green",children:e.jsx(z,{icon:e.jsx(J,{}),size:"large",danger:!0,onClick:()=>S(!0),children:"Add"})})})]}),e.jsx(H,{loading:d,columns:Q,dataSource:f,pagination:{onChange:(u,s)=>{F(s),W(u,L,s)},total:i,pageSize:b,position:["bottomCenter"],showQuickJumper:!1},scroll:{x:!0,y:"calc(100vh - 300px)"}}),e.jsx(re,{title:"Adding Education Levels",width:"35vw",anchor:"right",onClose:u=>S(u),open:A,children:e.jsx(Fe,{schoolExamination:n.schoolExamination,onAdd:O,onAddAll:D,randKey:Math.random()})}),e.jsx(re,{title:((r=(c=l==null?void 0:l.schoolEducationLevel)==null?void 0:c.educationLevel)==null?void 0:r.name)+" => "+((I=l==null?void 0:l.schoolExamination)==null?void 0:I.name)+" => Subjects",destroyOnClose:!0,width:"45vw",anchor:"right",onClose:u=>g(u),open:j,children:e.jsx(Ae,{level:l})})]})},{Option:de}=G;let P=[];for(let n=0;n<5;n++)P.push(B().year()+n),P.push(B().year()-n);P=P.sort((n,l)=>n-l);P=P.filter((n,l)=>P.indexOf(n)===l);const ze=n=>{const[l,C]=a.useState(!0),[f,E]=a.useState([]),[b]=m.useForm(),[F,L]=a.useState(""),k=async t=>{const{data:d}=await w.custom({url:"",method:"post",meta:{operation:"updateSchoolExamination",variables:{id:{value:t.id,type:"Int",required:!0},examinationTypeId:{value:t.examination_type_id,type:"Int",required:!0},name:{value:t.name,type:"String",required:!0},description:{value:t.description,type:"String",required:!1},startDate:{value:t.start_date,type:"String",required:!1},endDate:{value:t.end_date,type:"String",required:!1},year:{value:t.year,type:"Int",required:!1}},fields:["success","message",{schoolExamination:xe}]}}).catch(()=>(y.error("Error occured while Creating School Examination"),{data:null})).then(p=>p);d&&(d.success?(y.success(d.message),n.onFinish(d.schoolExamination)):y.error(d.message))},i=async(t,d="")=>{C(!0);const{data:p}=await w.custom({url:"",method:"get",meta:{operation:"examinationsTypes",variables:{page:{value:t,type:"Int",required:!0},key:{value:d,type:"String",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:me}]}}).catch(()=>(y.error("Error occured while Examinations Types"),{data:null})).then(q=>q);p&&E([...p.results]),C(!1)};return a.useEffect(()=>{i(1)},[n.randKey]),e.jsx(e.Fragment,{children:e.jsx(ce,{spinning:l,children:e.jsxs(m,{layout:"vertical",form:b,onFinish:t=>{t.id=n.examination.id,t.description=F,k(t)},requiredMark:!0,initialValues:{id:n.examination.id,name:n.examination.name,description:n.examination.description,start_date:B(n.examination.startDate),end_date:B(n.examination.endDate),examination_type_id:n.examination.examinationType.id,year:n.examination.year},children:[e.jsx(m.Item,{name:"examination_type_id",label:"Examination Type",rules:[{required:!0,type:"integer",message:"Please choose Examination Type..."}],children:e.jsx(G,{size:"large",showSearch:!0,placeholder:"Select a School Type",optionFilterProp:"children",onChange:t=>{},onSearch:t=>{},filterOption:(t,d)=>d.children.toLowerCase().includes(t.toLowerCase()),dropdownStyle:{zIndex:9999},children:f.map((t,d)=>e.jsx(de,{value:t.id,children:t.name}))})}),e.jsx(m.Item,{name:"name",label:"Name",rules:[{required:!0,type:"string",message:"Please input Name"}],children:e.jsx(_,{size:"large",placeholder:"Enter Name ..."})}),e.jsx(m.Item,{name:"year",label:"Year",rules:[{required:!0,type:"integer",message:"Please choose Year..."}],children:e.jsx(G,{size:"large",showSearch:!0,placeholder:"Select a Year",optionFilterProp:"children",onChange:t=>{},onSearch:t=>{},filterOption:(t,d)=>d.children.toLowerCase().includes(t.toLowerCase()),dropdownStyle:{zIndex:9999},children:P.map((t,d)=>e.jsx(de,{value:t,children:t}))})}),e.jsxs(K,{children:[e.jsx(T,{span:12,children:e.jsx(m.Item,{name:"start_date",label:"Start Date",rules:[{required:!1,type:"date",message:"Please input Start Date"}],children:e.jsx(ee,{onChange:()=>{},style:{width:"100%"},popupStyle:{zIndex:9999}})})}),e.jsx(T,{span:12,children:e.jsx(m.Item,{name:"end_date",label:"End Date",rules:[{required:!1,type:"date",message:"Please input End Date"}],children:e.jsx(ee,{onChange:()=>{},style:{width:"100%"},popupStyle:{zIndex:9999}})})})]}),e.jsxs("div",{style:{marginBottom:10},children:[e.jsx("h3",{children:"Description"}),e.jsx(ue.CKEditor,{editor:he,data:F,onReady:t=>{t.editing.view.change(d=>{d.setStyle("min-height","100px",t.editing.view.document.getRoot())})},onChange:(t,d)=>{const p=d.getData();L(p)},onBlur:(t,d)=>{},onFocus:(t,d)=>{},config:{toolbar:{items:["bold","italic","strikethrough","underline","code","subscript","superscript","removeFormat","|","bulletedList","numberedList","todoList","|","outdent","indent","|","-","fontSize","fontFamily","fontColor","fontBackgroundColor","highlight","|","alignment","|","EmojiPanel"],shouldNotGroupWhenFull:!0},fontFamily:{options:["default","Arial, Helvetica, sans-serif","Courier New, Courier, monospace","Georgia, serif","Lucida Sans Unicode, Lucida Grande, sans-serif","Tahoma, Geneva, sans-serif","Times New Roman, Times, serif","Trebuchet MS, Helvetica, sans-serif","Verdana, Geneva, sans-serif"],supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0}}})]}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(z,{type:"primary",size:"large",htmlType:"submit",children:"Save"})})]})})})},Me=n=>{const[l,C]=a.useState(),[f,E]=a.useState([]),[b,F]=a.useState(0),[L,k]=a.useState(!0),[i,t]=a.useState(20),[d,p]=a.useState(""),[q]=m.useForm(),[A]=m.useForm(),[S,j]=a.useState(!1),[g,h]=a.useState(!1),[o,x]=a.useState(!1),v=c=>{C(c),h(!0)},D=c=>{C(c),x(!0)},O=async c=>{E([c,...f]),A.resetFields(),j(!1)},R=async c=>{E(f.map(r=>r.id===c.id?c:r)),h(!1)},te=async c=>{const{data:r}=await w.custom({url:"",method:"post",meta:{operation:"deleteSchoolExamination",variables:{schoolExaminationId:{value:c,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(y.error("Error occured while deleting Examination"),{data:null})).then(I=>I);r&&(r.success?(y.success(r.message),E(f.filter(I=>I.id.toString()!==c.toString()))):y.error(r.message))},W=[{title:"Name",dataIndex:"name",fixed:!0,render:(c,r,I)=>e.jsx("span",{children:e.jsx("a",{children:r.name})})},{title:"Year",dataIndex:"year",fixed:!0,render:(c,r,I)=>e.jsx("span",{children:e.jsx("a",{children:r.year})})},{title:"Exam Type",dataIndex:"examinationType",fixed:!0,render:(c,r,I)=>e.jsx("span",{children:r.examinationType.name})},{title:"Start Date",dataIndex:"startDate",fixed:!0,render:(c,r,I)=>e.jsx("span",{children:oe(r.startDate).format("YYYY-MM-DD")})},{title:"End Date",dataIndex:"endDate",fixed:!0,render:(c,r,I)=>e.jsx("span",{children:oe(r.endDate).format("YYYY-MM-DD")})},{title:"Date Created",dataIndex:"created",render:(c,r,I)=>e.jsx(e.Fragment,{children:e.jsx("span",{children:e.jsx(pe,{date:new Date(r.created)})})})},{title:"Status",dataIndex:"isActive",render:(c,r,I)=>e.jsx("a",{children:r!=null&&r.isActive?e.jsx("span",{style:{color:"green"},children:"Active"}):e.jsx("span",{style:{color:"red"},children:"Inactive"})})},{title:"",dataIndex:"action",render:(c,r,I)=>e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(be,{trigger:["click"],overlay:e.jsxs(Z,{children:[e.jsx(Z.Item,{icon:e.jsx(ie,{style:{color:"red"}}),children:e.jsx(Y,{placement:"topLeft",title:`Are you sure you want to delete ${r.name} Examination?`,onConfirm:()=>te(parseInt(r.id)),okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx("a",{rel:"noopener noreferrer",children:"Delete"})})}),e.jsx(Z.Item,{icon:e.jsx(Ie,{style:{color:"red"}}),disabled:!r.canEdit,onClick:()=>v(r),children:e.jsx("a",{rel:"noopener noreferrer",children:"Edit"})}),e.jsx(Z.Item,{icon:e.jsx(ge,{style:{color:"red"}}),disabled:!r.canManage,onClick:()=>D(r),children:e.jsx("a",{rel:"noopener noreferrer",children:"Education Levels"})})]}),overlayStyle:{zIndex:9999},children:e.jsx("a",{className:"ant-dropdown-link",onClick:u=>u.preventDefault(),children:e.jsx(Le,{style:{color:"red",fontSize:28,fontWeight:"bold"}})})})})}],Q=async(c,r="",I=20)=>{k(!0);const{data:u}=await w.custom({url:"",method:"get",meta:{operation:"schoolExaminations",variables:{page:{value:c,type:"Int",required:!0},key:{value:r,type:"String",required:!1},pageSize:{value:I,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","description","year","startDate","endDate",{school:["id","name"]},{examinationType:["id","name"]},"isActive","created","updated","canEdit","canDelete","canManage"]}]}}).catch(()=>(y.error("Error occured while fetching Examinations"),{data:null})).then(s=>s);u&&(F(u.total),E([...u.results])),k(!1)};return a.useEffect(()=>{Q(1,"",20)},[]),e.jsxs(e.Fragment,{children:[e.jsxs(K,{style:{marginTop:10},children:[e.jsx(T,{span:12,children:e.jsx(m,{layout:"vertical",form:q,onFinish:c=>{p(c.key),f.length=0,Q(1,c.key)},children:e.jsx(m.Item,{name:"key",children:e.jsx(_,{size:"large",placeholder:"Search ...",prefix:e.jsx(U,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(T,{span:12,children:e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(V,{title:"Create Examination",children:e.jsx(z,{icon:e.jsx(J,{}),size:"large",onClick:()=>j(!0),danger:!0,children:"Add"})})})})]}),e.jsx(H,{loading:L,columns:W,dataSource:f,pagination:{onChange:(c,r)=>{t(r),Q(c,d,r)},total:b,pageSize:i,position:["bottomCenter"],showQuickJumper:!1},scroll:{x:!0}}),e.jsx(X,{title:"Creating Examination",open:S,onClose:c=>j(c),width:"30vw",children:e.jsx(Te,{form:A,onFinish:O})}),e.jsx(X,{title:"Editting Examination",open:g,onClose:c=>h(c),width:"30vw",children:e.jsx(ze,{onFinish:R,examination:l})}),e.jsx(X,{title:e.jsxs(e.Fragment,{children:[e.jsx("span",{style:{color:"green"},children:l==null?void 0:l.name}),e.jsx("span",{children:" Education Levels"})]}),open:o,onClose:c=>x(c),width:"50vw",children:e.jsx(De,{schoolExamination:l,randKey:Math.random()})})]})};export{Me as S};
