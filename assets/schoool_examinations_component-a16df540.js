import{aA as V,r as n,j as e,s as ue,F as p,ax as G,I as K,y as _,z as F,ay as ee,ah as he,ai as xe,B as w,J as q,dm as me,K as m,dn as pe,S as J,a6 as Y,v as ae,af as ne,t as U,dp as se,x as R,cj as fe,bw as Se,ct as ve,H as X,a9 as ie,a2 as oe,ab as ge,O as ye,az as le,Z as Ee,$ as Z,aC as Ce,a1 as Ie}from"./index-96b6a8d9.js";import{T as $}from"./Table-29a32fc4.js";const{Option:de}=G;let P=[];for(let a=0;a<5;a++)P.push(V().year()+a),P.push(V().year()-a);P=P.sort((a,l)=>a-l);P=P.filter((a,l)=>P.indexOf(a)===l);const be=a=>{const[l,E]=n.useState(!0),[f,v]=n.useState([]),[C,k]=n.useState(""),L=async i=>{const{data:t}=await q.custom({url:"",method:"post",meta:{operation:"createSchoolExamination",variables:{examinationTypeId:{value:i.examination_type_id,type:"Int",required:!0},name:{value:i.name,type:"String",required:!0},description:{value:i.description,type:"String",required:!1},startDate:{value:i.start_date,type:"String",required:!1},endDate:{value:i.end_date,type:"String",required:!1},year:{value:i.year,type:"Int",required:!0}},fields:["success","message",{schoolExamination:me}]}}).catch(()=>(m.error("Error occured while Creating School Examination"),{data:null})).then(d=>d);t&&(t.success?(m.success(t.message),a.onFinish(t.schoolExamination)):m.error(t.message))},A=async(i,t="")=>{E(!0);const{data:d}=await q.custom({url:"",method:"get",meta:{operation:"examinationsTypes",variables:{page:{value:i,type:"Int",required:!0},key:{value:t,type:"String",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:pe}]}}).catch(()=>(m.error("Error occured while Examinations Types"),{data:null})).then(g=>g);d&&v([...d.results]),E(!1)};return n.useEffect(()=>{A(1)},[a.randKey]),e.jsx(e.Fragment,{children:e.jsx(ue,{spinning:l,children:e.jsxs(p,{layout:"vertical",form:a.form,onFinish:i=>{i.description=C,L(i)},requiredMark:!0,children:[e.jsx(p.Item,{name:"examination_type_id",label:"Examination Type",rules:[{required:!0,type:"integer",message:"Please choose Examination Type..."}],children:e.jsx(G,{size:"large",showSearch:!0,placeholder:"Select a School Type",optionFilterProp:"children",onChange:i=>{},onSearch:i=>{},filterOption:(i,t)=>t.children.toLowerCase().includes(i.toLowerCase()),dropdownStyle:{zIndex:9999},children:f.map((i,t)=>e.jsx(de,{value:parseInt(i.id.toString()),children:i.name}))})}),e.jsx(p.Item,{name:"name",label:"Name",rules:[{required:!0,type:"string",message:"Please input Name"}],children:e.jsx(K,{size:"large",placeholder:"Enter Name ..."})}),e.jsx(p.Item,{name:"year",label:"Year",rules:[{required:!0,type:"integer",message:"Please choose Year..."}],children:e.jsx(G,{size:"large",showSearch:!0,placeholder:"Select a Year",optionFilterProp:"children",onChange:i=>{},onSearch:i=>{},filterOption:(i,t)=>t.children.toLowerCase().includes(i.toLowerCase()),dropdownStyle:{zIndex:9999},children:P.map((i,t)=>e.jsx(de,{value:i,children:i}))})}),e.jsxs(_,{children:[e.jsx(F,{span:12,children:e.jsx(p.Item,{name:"start_date",label:"Start Date",rules:[{required:!1,type:"date",message:"Please input Start Date"}],children:e.jsx(ee,{onChange:()=>{},style:{width:"100%"},popupStyle:{zIndex:9999}})})}),e.jsx(F,{span:12,children:e.jsx(p.Item,{name:"end_date",label:"End Date",rules:[{required:!1,type:"date",message:"Please input End Date"}],children:e.jsx(ee,{onChange:()=>{},style:{width:"100%"},popupStyle:{zIndex:9999}})})})]}),e.jsxs("div",{style:{marginBottom:10},children:[e.jsx("h3",{children:"Description"}),e.jsx(he.CKEditor,{editor:xe,data:C,onReady:i=>{i.editing.view.change(t=>{t.setStyle("min-height","100px",i.editing.view.document.getRoot())})},onChange:(i,t)=>{const d=t.getData();k(d)},onBlur:(i,t)=>{},onFocus:(i,t)=>{},config:{toolbar:{items:["bold","italic","strikethrough","underline","code","subscript","superscript","removeFormat","|","bulletedList","numberedList","todoList","|","outdent","indent","|","-","fontSize","fontFamily","fontColor","fontBackgroundColor","highlight","|","alignment","|","EmojiPanel"],shouldNotGroupWhenFull:!0},fontFamily:{options:["default","Arial, Helvetica, sans-serif","Courier New, Courier, monospace","Georgia, serif","Lucida Sans Unicode, Lucida Grande, sans-serif","Tahoma, Geneva, sans-serif","Times New Roman, Times, serif","Trebuchet MS, Helvetica, sans-serif","Verdana, Geneva, sans-serif"],supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0}}})]}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(w,{type:"primary",size:"large",htmlType:"submit",children:"Save"})})]})})})},Le=a=>{const[l,E]=n.useState([]),[f,v]=n.useState(0),[C,k]=n.useState(20),[L,A]=n.useState(""),[i,t]=n.useState(!0),[d]=p.useForm(),[g,M]=n.useState(0),D=x=>{M(x)},S=async(x,o=!1)=>{var I;const{data:u}=await q.custom({url:"",method:"post",meta:{operation:"createSchoolExaminationEducationLevel",variables:{all:{value:o,type:"Boolean",required:!1},schoolExaminationId:{value:(I=a.schoolExamination)==null?void 0:I.id,type:"Int",required:!1},educationLevelId:{value:parseInt(x.toString()),type:"Int",required:!0},score:{value:g,type:"Float",required:!0}},fields:["success","message",{schoolExaminationEducationLevel:se}]}}).catch(()=>(m.error("Something went wrong"),{data:null})).then(z=>z);u&&(u.success?(m.success(u.message),u.schoolExaminationEducationLevel?(E(l.filter(z=>z.id!==x)),a.onAdd(u.schoolExaminationEducationLevel)):(y(1,"",20),a.onAddAll())):m.error(u.message))},j=[{title:"Name",dataIndex:"name",fixed:!0,render:(x,o,u)=>e.jsx("span",{children:e.jsx("a",{children:o.educationLevel.name})})},{title:"",dataIndex:"action",render:(x,o,u)=>e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(Y,{placement:"left",title:e.jsx(e.Fragment,{children:e.jsxs(ae,{direction:"vertical",children:[e.jsxs("span",{children:["Are you sure to add ",o.educationLevel.name," ?"]}),e.jsx("div",{style:{height:"10px"}}),e.jsx("span",{style:{fontWeight:"bolder"},children:"Average Pass Score"}),e.jsx("span",{children:e.jsx(ne,{size:"large",style:{width:"100%"},defaultValue:0,onChange:D})})]})}),disabled:!o.canManage,onConfirm:()=>S(o.id),onCancel:()=>{},okButtonProps:{disabled:g==null||g<0||g>100},okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(R,{title:"Click to Add",placement:"left",color:"green",children:e.jsx(w,{size:"large",icon:e.jsx(U,{}),disabled:!o.canManage,danger:!0})})})})}],y=async(x,o="",u=20)=>{var z;const{data:I}=await q.custom({url:"",method:"get",meta:{operation:"schoolEducationLevelsNoExamination",variables:{schoolExaminationId:{value:(z=a.schoolExamination)==null?void 0:z.id,type:"Int",required:!0},page:{value:x,type:"Int",required:!0},key:{value:o,type:"String",required:!1},pageSize:{value:u,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:fe}]}}).catch(()=>(m.error("Something Went Wrong ..."),{data:null})).then(N=>N);I&&(v(I.total),E([...I.results])),t(!1)};return n.useEffect(()=>{y(1,"",20)},[a.randKey]),e.jsxs(e.Fragment,{children:[e.jsxs(_,{style:{marginTop:10},children:[e.jsx(F,{span:12,children:e.jsx(p,{layout:"vertical",form:d,onFinish:x=>{A(x.key),l.length=0,y(1,x.key,C)},children:e.jsx(p.Item,{name:"key",children:e.jsx(K,{size:"large",placeholder:"Search ...",prefix:e.jsx(J,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(F,{span:4,children:e.jsx(w,{icon:e.jsx(J,{}),size:"large"})}),e.jsx(F,{span:8,style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(Y,{placement:"left",title:e.jsx(e.Fragment,{children:e.jsxs(ae,{direction:"vertical",children:[e.jsx("span",{children:"Are you sure to add All?"}),e.jsx("div",{style:{height:"10px"}}),e.jsx("span",{style:{fontWeight:"bolder"},children:"Average Pass Score"}),e.jsx("span",{children:e.jsx(ne,{size:"large",style:{width:"100%"},defaultValue:0,onChange:D})})]})}),onConfirm:()=>S(0,!0),onCancel:()=>{},okButtonProps:{disabled:g==null||g<0||g>100},okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(w,{size:"large",icon:e.jsx(U,{}),danger:!0,children:"Add All"})})})]}),e.jsx($,{loading:i,columns:j,dataSource:l,pagination:{onChange:(x,o)=>{k(o),y(x,L,o)},total:f,pageSize:C,position:["bottomCenter"],showQuickJumper:!1},scroll:{x:!0}})]})},Te=a=>{const[l,E]=n.useState([]),[f,v]=n.useState(0),[C,k]=n.useState(20),[L,A]=n.useState(""),[i,t]=n.useState(!0),[d]=p.useForm(),g=[{title:"Subject Name",dataIndex:"name",fixed:!0,render:(S,j)=>e.jsx("span",{children:e.jsx("a",{children:j.schoolSubject.subject.name})})},{title:"",dataIndex:"action",render:(S,j)=>e.jsx(e.Fragment,{children:e.jsx(Y,{title:"Add "+(j==null?void 0:j.schoolSubject.subject.name),onConfirm:()=>M(!1,j==null?void 0:j.id),onCancel:()=>{},okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(w,{icon:e.jsx(U,{}),style:{float:"right"},danger:!0})})})}],M=async(S=!1,j)=>{var x;const{data:y}=await q.custom({url:"",method:"post",meta:{operation:"addSchoolExaminationEducationLevelSubject",variables:{schoolExaminationEducationLevelId:{value:parseInt(((x=a.level)==null?void 0:x.id.toString())??"0"),type:"Int",required:!0},schoolEducationLevelSubjectId:{value:parseInt(j.toString()),type:"Int",required:!1},all:{value:S,type:"Boolean",required:!1}},fields:["success","message",{schoolExaminationEducationLevelSubject:["id"]}]}}).catch(o=>(m.error("Something Went Wrong ...."),{data:null})).then(o=>o);y!=null&&y.success?(m.success(y==null?void 0:y.message),l.length=0,E([]),D(1,L,C),a.onAdd()):m.error(y==null?void 0:y.message)},D=async(S,j="",y=20)=>{var o;const{data:x}=await q.custom({url:"",method:"get",meta:{operation:"schoolEducationLevelSubjectsForExaminationToAdd",variables:{page:{value:S,type:"Int",required:!0},key:{value:j,type:"String",required:!1},pageSize:{value:y,type:"Int",required:!1},schoolExaminationEducationLevelId:{value:parseInt(((o=a.level)==null?void 0:o.id.toString())??"0"),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:["id",{schoolSubject:["id",{subject:["id","name"]}]},"isActive","created","updated","canEdit","canDelete","canManage"]}]}}).catch(u=>(m.error("Something Went Wrong ...."),{data:null})).then(u=>u);x&&(v(x.total),E([...x.results])),t(!1)};return n.useEffect(()=>{D(1,"",20)},[a.randKey]),e.jsxs(e.Fragment,{children:[e.jsxs(_,{style:{marginTop:10},children:[e.jsx(F,{span:16,children:e.jsx(p,{layout:"vertical",form:d,onFinish:S=>{A(S.key),l.length=0,D(1,S.key)},children:e.jsx(p.Item,{name:"key",children:e.jsx(K,{size:"large",placeholder:"Search ...",prefix:e.jsx(J,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(F,{span:8,style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(Y,{title:"Are you sure to add all subjects",onConfirm:()=>M(!0,0),onCancel:()=>{},okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(w,{size:"large",danger:!0,children:"Add All"})})})]}),e.jsx($,{loading:i,columns:g,dataSource:l,pagination:{onChange:(S,j)=>{k(j),D(S,L,j)},total:f,pageSize:C,position:["bottomCenter"],showQuickJumper:!1},scroll:{y:"50vh"}})]})},Fe=a=>{const[l,E]=n.useState([]),[f,v]=n.useState(0),[C,k]=n.useState(20),[L,A]=n.useState(""),[i,t]=n.useState(!0),[d,g]=n.useState(!1),[M]=p.useForm();Se.useBreakpoint().lg;const S=[{title:"Subject Name",dataIndex:"name",fixed:!0,render:(o,u,I)=>e.jsx("span",{children:e.jsx("a",{children:u.schoolEducationLevelSubject.schoolSubject.subject.name})})},{title:"",dataIndex:"action",render:(o,u,I)=>e.jsx(e.Fragment,{children:e.jsx(Y,{title:"Delete this Subject",placement:"topLeft",onConfirm:()=>j(u==null?void 0:u.id),onCancel:()=>{},okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(w,{danger:!0,size:"small",icon:e.jsx(ie,{}),style:{float:"right"}})})})}],j=async o=>{const{data:u}=await q.custom({url:"",method:"post",meta:{operation:"removeSchoolExaminationEducationLevelSubject",variables:{schoolExaminationEducationLevelSubjectId:{value:parseInt(o.toString()),type:"Int",required:!0}},fields:["success","message"]}}).catch(I=>(m.error("Something Went Wrong ...."),{data:null})).then(I=>I);u&&(u.success?(m.success(u.message),y(1,"",20)):m.error(u.message))},y=async(o,u="",I=20)=>{var N;const{data:z}=await q.custom({url:"",method:"get",meta:{operation:"schoolExaminationEducationLevelSubjects",variables:{page:{value:o,type:"Int",required:!0},key:{value:u,type:"String",required:!1},pageSize:{value:I,type:"Int",required:!1},schoolExaminationEducationLevelId:{value:parseInt(((N=a.level)==null?void 0:N.id.toString())??"0"),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:["id",{schoolEducationLevelSubject:["id",{schoolSubject:["id",{subject:["id","name"]}]}]},"isActive","created","updated","canEdit","canDelete","canManage"]}]}}).catch(O=>(m.error("Something Went Wrong ...."),{data:null})).then(O=>O);z&&(v(z.total),E([...z.results])),t(!1)},x=async()=>{y(1,L,C)};return n.useEffect(()=>{y(1,"",20)},[a.randKey]),e.jsxs(e.Fragment,{children:[e.jsxs(_,{style:{marginTop:10},children:[e.jsx(F,{span:16,children:e.jsx(p,{layout:"vertical",form:M,onFinish:o=>{A(o.key),l.length=0,y(1,o.key)},children:e.jsx(p.Item,{name:"key",children:e.jsx(K,{size:"large",placeholder:"Search ...",prefix:e.jsx(J,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(F,{span:8,children:e.jsx(w,{danger:!0,size:"large",icon:e.jsx(ve,{}),onClick:()=>g(!0),style:{float:"right"},children:"Add Subject"})})]}),e.jsx($,{loading:i,columns:S,dataSource:l,pagination:{onChange:(o,u)=>{k(u),y(o,L,u)},total:f,pageSize:C,position:["bottomCenter"],showQuickJumper:!1},scroll:{y:"50vh"}}),e.jsx(X,{title:"Adding Subjects",open:d,width:"40vw",onClose:o=>g(o),children:e.jsx(Te,{level:a.level,onAdd:x})})]})},qe=a=>{var c,r,b;const[l,E]=n.useState(),[f,v]=n.useState([]),[C,k]=n.useState(20),[L,A]=n.useState(""),[i,t]=n.useState(0),[d,g]=n.useState(!0),[M]=p.useForm(),[D,S]=n.useState(!1),[j,y]=n.useState(!1),[x,o]=n.useState(0),u=async h=>{E(h),y(!0)},I=h=>{o(h)},z=async()=>{B(1,"",20)},N=async h=>{v([h,...f])},O=async h=>{const{data:s}=await q.custom({url:"",method:"post",meta:{operation:"updateScoreSchoolExaminationEducationLevel",variables:{schoolExaminationEducationLevelId:{value:parseInt(h.toString()),type:"Int",required:!0},score:{value:x,type:"Float",required:!0}},fields:["success","message",{schoolExaminationEducationLevel:se}]}}).catch(()=>(m.error("Something Went Wrong ..."),{data:null})).then(T=>T);s&&(s.success?(m.success(s.message),v(f.map(T=>T.id===h?s.schoolExaminationEducationLevel:T))):m.error(s.message))},te=async h=>{const{data:s}=await q.custom({url:"",method:"post",meta:{operation:"deleteSchoolExaminationEducationLevel",variables:{schoolExaminationEducationLevelId:{value:parseInt(h.toString()),type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(m.error("Something Went Wrong ..."),{data:null})).then(T=>T);s&&(s.success?(m.success(s.message),v(f.filter(T=>T.id!==h))):m.error(s.message))},B=async(h,s="",T=20)=>{var re;const{data:Q}=await q.custom({url:"",method:"get",meta:{operation:"schoolExaminationEducationLevels",variables:{schoolExaminationId:{value:(re=a.schoolExamination)==null?void 0:re.id,type:"Int",required:!0},page:{value:h,type:"Int",required:!0},key:{value:s,type:"String",required:!1},pageSize:{value:T,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:se}]}}).catch(()=>(m.error("Something Went Wrong ..."),{data:null})).then(je=>je);Q&&(t(Q.total),v([...Q.results])),g(!1)};n.useEffect(()=>{B(1,"",20)},[a.randKey,a.schoolExamination]);const H=[{title:"Education Level",dataIndex:"educationLevel",fixed:!0,render:(h,s,T)=>e.jsx("span",{children:e.jsx(R,{title:"Click to View Results",color:"green",placement:"top",children:e.jsx("a",{children:s.schoolEducationLevel.educationLevel.name})})})},{title:"Average Pass Score",dataIndex:"score",fixed:!0,render:(h,s,T)=>e.jsx("span",{children:e.jsx(Y,{title:e.jsx(e.Fragment,{children:e.jsxs(ae,{direction:"vertical",children:[e.jsx("span",{children:"Updating Average Score ?"}),e.jsx("div",{style:{height:"10px"}}),e.jsx("span",{style:{fontWeight:"bolder"},children:"Average Pass Score"}),e.jsx("span",{children:e.jsx(ne,{size:"large",style:{width:"100%"},defaultValue:s.score,onChange:I})})]})}),onVisibleChange:Q=>{Q&&o(s.score)},onConfirm:()=>O(s.id),onCancel:()=>{},okButtonProps:{disabled:x==null||x<0||x>100},okText:"Update",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(R,{title:"Tap to Edit",color:"green",children:e.jsx("a",{children:s.score})})})})},{title:"Created",dataIndex:"created",render:(h,s,T)=>e.jsx(e.Fragment,{children:e.jsx("span",{children:e.jsx(ge,{date:new Date(s.created)})})})},{title:"Status",dataIndex:"isActive",render:(h,s,T)=>e.jsx("a",{children:s!=null&&s.isActive?e.jsx("span",{style:{color:"green"},children:"Active"}):e.jsx("span",{style:{color:"red"},children:"Inactive"})})},{title:"",dataIndex:"action",render:(h,s,T)=>e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end"},children:[e.jsx(R,{title:"View Education Level Applicable Subjects",color:"green",placement:"left",children:e.jsx(w,{size:"small",style:{marginRight:3},icon:e.jsx(ye,{}),disabled:!(s!=null&&s.canManage),onClick:()=>u(s),danger:!0})}),e.jsx(Y,{title:"Are you sure to remove this Education Level?",onConfirm:()=>te(s==null?void 0:s.id),onCancel:()=>{},okText:"Yes",cancelText:"No",disabled:!(s!=null&&s.canDelete),overlayStyle:{zIndex:9999},children:e.jsx(w,{size:"small",icon:e.jsx(ie,{}),disabled:!(s!=null&&s.canDelete),danger:!0})})]})}];return e.jsxs(e.Fragment,{children:[e.jsxs(_,{style:{marginTop:10},children:[e.jsx(F,{span:16,children:e.jsx(p,{layout:"vertical",form:M,onFinish:h=>{A(h.key),f.length=0,B(1,h.key)},children:e.jsx(p.Item,{name:"key",children:e.jsx(K,{size:"large",placeholder:"Search ...",prefix:e.jsx(J,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(F,{span:8,style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(R,{title:"Add New Education Level",color:"green",children:e.jsx(w,{icon:e.jsx(U,{}),size:"large",danger:!0,onClick:()=>S(!0),children:"Add"})})})]}),e.jsx($,{loading:d,columns:H,dataSource:f,pagination:{onChange:(h,s)=>{k(s),B(h,L,s)},total:i,pageSize:C,position:["bottomCenter"],showQuickJumper:!1},scroll:{x:!0,y:"calc(100vh - 300px)"}}),e.jsx(oe,{title:"Adding Education Levels",width:"35vw",anchor:"right",onClose:h=>S(h),open:D,children:e.jsx(Le,{schoolExamination:a.schoolExamination,onAdd:N,onAddAll:z,randKey:Math.random()})}),e.jsx(oe,{title:((r=(c=l==null?void 0:l.schoolEducationLevel)==null?void 0:c.educationLevel)==null?void 0:r.name)+" => "+((b=l==null?void 0:l.schoolExamination)==null?void 0:b.name)+" => Subjects",destroyOnClose:!0,width:"45vw",anchor:"right",onClose:h=>y(h),open:j,children:e.jsx(Fe,{level:l})})]})},{Option:ce}=G;let W=[];for(let a=0;a<5;a++)W.push(V().year()+a),W.push(V().year()-a);W=W.sort((a,l)=>a-l);W=W.filter((a,l)=>W.indexOf(a)===l);const ke=a=>{const[l,E]=n.useState(!0),[f,v]=n.useState([]),[C]=p.useForm(),[k,L]=n.useState(""),A=async t=>{const{data:d}=await q.custom({url:"",method:"post",meta:{operation:"updateSchoolExamination",variables:{id:{value:t.id,type:"Int",required:!0},examinationTypeId:{value:t.examination_type_id,type:"Int",required:!0},name:{value:t.name,type:"String",required:!0},description:{value:t.description,type:"String",required:!1},startDate:{value:t.start_date,type:"String",required:!1},endDate:{value:t.end_date,type:"String",required:!1},year:{value:t.year,type:"Int",required:!1}},fields:["success","message",{schoolExamination:me}]}}).catch(()=>(m.error("Error occured while Creating School Examination"),{data:null})).then(g=>g);d&&(d.success?(m.success(d.message),a.onFinish(d.schoolExamination)):m.error(d.message))},i=async(t,d="")=>{E(!0);const{data:g}=await q.custom({url:"",method:"get",meta:{operation:"examinationsTypes",variables:{page:{value:t,type:"Int",required:!0},key:{value:d,type:"String",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:pe}]}}).catch(()=>(m.error("Error occured while Examinations Types"),{data:null})).then(M=>M);g&&v([...g.results]),E(!1)};return n.useEffect(()=>{i(1)},[a.randKey]),e.jsx(e.Fragment,{children:e.jsx(ue,{spinning:l,children:e.jsxs(p,{layout:"vertical",form:C,onFinish:t=>{t.id=a.examination.id,t.description=k,A(t)},requiredMark:!0,initialValues:{id:a.examination.id,name:a.examination.name,description:a.examination.description,start_date:V(a.examination.startDate),end_date:V(a.examination.endDate),examination_type_id:a.examination.examinationType.id,year:a.examination.year},children:[e.jsx(p.Item,{name:"examination_type_id",label:"Examination Type",rules:[{required:!0,type:"integer",message:"Please choose Examination Type..."}],children:e.jsx(G,{size:"large",showSearch:!0,placeholder:"Select a School Type",optionFilterProp:"children",onChange:t=>{},onSearch:t=>{},filterOption:(t,d)=>d.children.toLowerCase().includes(t.toLowerCase()),dropdownStyle:{zIndex:9999},children:f.map((t,d)=>e.jsx(ce,{value:t.id,children:t.name}))})}),e.jsx(p.Item,{name:"name",label:"Name",rules:[{required:!0,type:"string",message:"Please input Name"}],children:e.jsx(K,{size:"large",placeholder:"Enter Name ..."})}),e.jsx(p.Item,{name:"year",label:"Year",rules:[{required:!0,type:"integer",message:"Please choose Year..."}],children:e.jsx(G,{size:"large",showSearch:!0,placeholder:"Select a Year",optionFilterProp:"children",onChange:t=>{},onSearch:t=>{},filterOption:(t,d)=>d.children.toLowerCase().includes(t.toLowerCase()),dropdownStyle:{zIndex:9999},children:W.map((t,d)=>e.jsx(ce,{value:t,children:t}))})}),e.jsxs(_,{children:[e.jsx(F,{span:12,children:e.jsx(p.Item,{name:"start_date",label:"Start Date",rules:[{required:!1,type:"date",message:"Please input Start Date"}],children:e.jsx(ee,{onChange:()=>{},style:{width:"100%"},popupStyle:{zIndex:9999}})})}),e.jsx(F,{span:12,children:e.jsx(p.Item,{name:"end_date",label:"End Date",rules:[{required:!1,type:"date",message:"Please input End Date"}],children:e.jsx(ee,{onChange:()=>{},style:{width:"100%"},popupStyle:{zIndex:9999}})})})]}),e.jsxs("div",{style:{marginBottom:10},children:[e.jsx("h3",{children:"Description"}),e.jsx(he.CKEditor,{editor:xe,data:k,onReady:t=>{t.editing.view.change(d=>{d.setStyle("min-height","100px",t.editing.view.document.getRoot())})},onChange:(t,d)=>{const g=d.getData();L(g)},onBlur:(t,d)=>{},onFocus:(t,d)=>{},config:{toolbar:{items:["bold","italic","strikethrough","underline","code","subscript","superscript","removeFormat","|","bulletedList","numberedList","todoList","|","outdent","indent","|","-","fontSize","fontFamily","fontColor","fontBackgroundColor","highlight","|","alignment","|","EmojiPanel"],shouldNotGroupWhenFull:!0},fontFamily:{options:["default","Arial, Helvetica, sans-serif","Courier New, Courier, monospace","Georgia, serif","Lucida Sans Unicode, Lucida Grande, sans-serif","Tahoma, Geneva, sans-serif","Times New Roman, Times, serif","Trebuchet MS, Helvetica, sans-serif","Verdana, Geneva, sans-serif"],supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0}}})]}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(w,{type:"primary",size:"large",htmlType:"submit",children:"Save"})})]})})})},De=a=>{const[l,E]=n.useState(),[f,v]=n.useState([]),[C,k]=n.useState(0),[L,A]=n.useState(!0),[i,t]=n.useState(20),[d,g]=n.useState(""),[M]=p.useForm(),[D]=p.useForm(),[S,j]=n.useState(!1),[y,x]=n.useState(!1),[o,u]=n.useState(!1),I=c=>{E(c),x(!0)},z=c=>{E(c),u(!0)},N=async c=>{v([c,...f]),D.resetFields(),j(!1)},O=async c=>{v(f.map(r=>r.id===c.id?c:r)),x(!1)},te=async c=>{const{data:r}=await q.custom({url:"",method:"post",meta:{operation:"deleteSchoolExamination",variables:{schoolExaminationId:{value:c,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(m.error("Error occured while deleting Examination"),{data:null})).then(b=>b);r&&(r.success?(m.success(r.message),v(f.filter(b=>b.id.toString()!==c.toString()))):m.error(r.message))},B=[{title:"Name",dataIndex:"name",fixed:!0,render:(c,r,b)=>e.jsx("span",{children:e.jsx("a",{children:r.name})})},{title:"Year",dataIndex:"year",fixed:!0,render:(c,r,b)=>e.jsx("span",{children:e.jsx("a",{children:r.year})})},{title:"Exam Type",dataIndex:"examinationType",fixed:!0,render:(c,r,b)=>e.jsx("span",{children:r.examinationType.name})},{title:"Start Date",dataIndex:"startDate",fixed:!0,render:(c,r,b)=>e.jsx("span",{children:le(r.startDate).format("YYYY-MM-DD")})},{title:"End Date",dataIndex:"endDate",fixed:!0,render:(c,r,b)=>e.jsx("span",{children:le(r.endDate).format("YYYY-MM-DD")})},{title:"Date Created",dataIndex:"created",render:(c,r,b)=>e.jsx(e.Fragment,{children:e.jsx("span",{children:e.jsx(ge,{date:new Date(r.created)})})})},{title:"Status",dataIndex:"isActive",render:(c,r,b)=>e.jsx("a",{children:r!=null&&r.isActive?e.jsx("span",{style:{color:"green"},children:"Active"}):e.jsx("span",{style:{color:"red"},children:"Inactive"})})},{title:"",dataIndex:"action",render:(c,r,b)=>e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(Ee,{trigger:["click"],overlay:e.jsxs(Z,{children:[e.jsx(Z.Item,{icon:e.jsx(ie,{style:{color:"red"}}),children:e.jsx(Y,{placement:"topLeft",title:`Are you sure you want to delete ${r.name} Examination?`,onConfirm:()=>te(parseInt(r.id)),okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx("a",{rel:"noopener noreferrer",children:"Delete"})})}),e.jsx(Z.Item,{icon:e.jsx(Ce,{style:{color:"red"}}),disabled:!r.canEdit,onClick:()=>I(r),children:e.jsx("a",{rel:"noopener noreferrer",children:"Edit"})}),e.jsx(Z.Item,{icon:e.jsx(ye,{style:{color:"red"}}),disabled:!r.canManage,onClick:()=>z(r),children:e.jsx("a",{rel:"noopener noreferrer",children:"Education Levels"})})]}),overlayStyle:{zIndex:9999},children:e.jsx("a",{className:"ant-dropdown-link",onClick:h=>h.preventDefault(),children:e.jsx(Ie,{style:{color:"red",fontSize:28,fontWeight:"bold"}})})})})}],H=async(c,r="",b=20)=>{A(!0);const{data:h}=await q.custom({url:"",method:"get",meta:{operation:"schoolExaminations",variables:{page:{value:c,type:"Int",required:!0},key:{value:r,type:"String",required:!1},pageSize:{value:b,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","description","year","startDate","endDate",{school:["id","name"]},{examinationType:["id","name"]},"isActive","created","updated","canEdit","canDelete","canManage"]}]}}).catch(()=>(m.error("Error occured while fetching Examinations"),{data:null})).then(s=>s);h&&(k(h.total),v([...h.results])),A(!1)};return n.useEffect(()=>{H(1,"",20)},[]),e.jsxs(e.Fragment,{children:[e.jsxs(_,{style:{marginTop:10},children:[e.jsx(F,{span:12,children:e.jsx(p,{layout:"vertical",form:M,onFinish:c=>{g(c.key),f.length=0,H(1,c.key)},children:e.jsx(p.Item,{name:"key",children:e.jsx(K,{size:"large",placeholder:"Search ...",prefix:e.jsx(J,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(F,{span:12,children:e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(R,{title:"Create Examination",children:e.jsx(w,{icon:e.jsx(U,{}),size:"large",onClick:()=>j(!0),danger:!0,children:"Add"})})})})]}),e.jsx($,{loading:L,columns:B,dataSource:f,pagination:{onChange:(c,r)=>{t(r),H(c,d,r)},total:C,pageSize:i,position:["bottomCenter"],showQuickJumper:!1},scroll:{x:!0}}),e.jsx(X,{title:"Creating Examination",open:S,onClose:c=>j(c),width:"30vw",children:e.jsx(be,{form:D,onFinish:N})}),e.jsx(X,{title:"Editting Examination",open:y,onClose:c=>x(c),width:"30vw",children:e.jsx(ke,{onFinish:O,examination:l})}),e.jsx(X,{title:e.jsxs(e.Fragment,{children:[e.jsx("span",{style:{color:"green"},children:l==null?void 0:l.name}),e.jsx("span",{children:" Education Levels"})]}),open:o,onClose:c=>u(c),width:"50vw",children:e.jsx(qe,{schoolExamination:l,randKey:Math.random()})})]})};export{De as S};
