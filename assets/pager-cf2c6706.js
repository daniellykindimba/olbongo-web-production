import{r as t,aP as b,aZ as e,aT as q,aL as w,Q as D,cZ as W,aV as R,ap as F,cH as z,b_ as k,b$ as u,bZ as V,ca as Q,aW as P,al as K,fv as Z,a7 as H,cJ as U,c3 as Y,c8 as B}from"./index-29a13d6d.js";import{P as _}from"./index-46bc3d4d.js";import{I as $}from"./index-ac3429c7.js";import{D as X}from"./index-e4ebc2f7.js";import{G as O}from"./index-90929aea.js";import{A as ee}from"./index-6cbf32d2.js";import{C as A,T as J}from"./index-0ef7ceee.js";import{C as G}from"./Collapse-8de7cc6a.js";import{S as te}from"./schoool_examinations_component-b11fa421.js";import"./index-7e1a0f34.js";import"./ActionButton-268e5a9a.js";import"./InputNumber-d88ed4da.js";import"./InfoCircleFilled-154bca47.js";import"./Skeleton-15a49f54.js";import"./index-865d1987.js";import"./ckeditor-9a41d8e6.js";import"./index-c1859c69.js";import"./index-4d3ade3f.js";import"./index-270b7e76.js";import"./localeData-08f640e8.js";import"./SinglePicker-b28271a7.js";const ae=s=>{const[r,x]=t.useState([]),[p,v]=t.useState(0),[E,m]=t.useState(20),[C,S]=t.useState(""),[y,l]=t.useState(!0),[I]=b.useForm(),[c]=b.useForm();t.useState(!1);const[h,d]=t.useState(0),i=[{title:"Full Name",dataIndex:"name",fixed:!0,render:(a,n)=>e.jsx("span",{children:e.jsx("a",{children:n.member.fullName})})},{title:"Registration Number",dataIndex:"registrationNumber",fixed:!0,render:(a,n)=>e.jsx("span",{children:n.member.registrationNumber})},{title:"",dataIndex:"action",render:(a,n)=>e.jsx(e.Fragment,{children:e.jsx(_,{placement:"topRight",overlayStyle:{zIndex:9999},title:e.jsxs("div",{style:{width:"300px"},children:[e.jsxs("p",{style:{fontSize:18},children:["Are you sure to add Examination Score for"," ",e.jsx("b",{children:n.member.fullName})]}),e.jsx("div",{style:{marginTop:10},children:e.jsx(b,{layout:"vertical",form:c,onFinish:o=>{},requiredMark:!0,children:e.jsx(b.Item,{name:"score_value",label:"Score",rules:[{required:!0,type:"number",message:"Please input score value!"},{validator:(o,j)=>j<0||j>100?Promise.reject("Score value must be between 0 and 100"):Promise.resolve()}],children:e.jsx($,{size:"large",defaultValue:0,style:{width:"100%"},onChange:o=>{d(o??0)}})})})})]}),onConfirm:()=>f(n.id,h),onCancel:()=>{},okButtonProps:{disabled:h<0||h>100},okText:"Add",cancelText:"No",onVisibleChange:o=>{o&&(d(0),c.resetFields())},children:e.jsx(F,{icon:e.jsx(z,{}),style:{float:"right"},danger:!0})})})}],f=async(a,n)=>{var j;const{data:o}=await k.custom({url:"",method:"post",meta:{operation:"createSchoolExaminationEducationLevelSubjectStudentRecord",variables:{schoolExaminationEducationLevelSubjectId:{value:parseInt(((j=s.subject)==null?void 0:j.id.toString())??"0"),type:"Int",required:!0},schoolEducationLevelStudentId:{value:parseInt(a.toString()),type:"Int",required:!0},score:{value:parseFloat(n.toString()),type:"Float",required:!0}},fields:["success","message",{schoolExaminationEducationLevelSubjectStudent:["id",{schoolEducationLevelStudent:["id",{member:["id","fullName","registrationNumber"]}]},"score","grade","isActive","created","updated","canEdit","canDelete","canManage"]}]}}).catch(L=>(u.remove(),u.error("Something Went Wrong ...."),{data:null})).then(L=>L);o!=null&&o.success?(u.success("Score Added Successfully"),x(r.filter(L=>L.id!==a)),s.onAdd(o.schoolExaminationEducationLevelSubjectStudent)):u.error(o==null?void 0:o.message)},g=async(a,n="",o=20)=>{var L,N,T;const{data:j}=await k.custom({url:"",method:"get",meta:{operation:"schoolEducationLevelSubjectResultsStudentsTo",variables:{page:{value:a,type:"Int",required:!0},key:{value:n,type:"String",required:!1},pageSize:{value:o,type:"Int",required:!1},schoolExaminationEducationLevelSubjectId:{value:parseInt(((L=s.subject)==null?void 0:L.id.toString())??"0"),type:"Int",required:!0},schoolEducationLevelId:{value:parseInt(((T=(N=s.level)==null?void 0:N.schoolEducationLevel)==null?void 0:T.id.toString())??"0"),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:["id",{member:["id","firstName","middleName","lastName","fullName","registrationNumber"]},"isActive","created","updated","canEdit","canDelete","canManage"]}]}}).catch(M=>(u.remove(),u.error("Something Went Wrong ...."),{data:null})).then(M=>M);j&&(v(j.total),x([...j.results])),l(!1)};return t.useEffect(()=>{g(1,"",20)},[s.randKey]),e.jsxs(e.Fragment,{children:[e.jsx(q,{style:{marginTop:10},children:e.jsx(w,{span:16,children:e.jsx(b,{layout:"vertical",form:I,onFinish:a=>{S(a.key),r.length=0,g(1,a.key)},children:e.jsx(b.Item,{name:"key",children:e.jsx(D,{size:"large",placeholder:"Search ...",prefix:e.jsx(W,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx(R,{loading:y,columns:i,dataSource:r,pagination:{onChange:(a,n)=>{m(n),g(a,C,n)},total:p,pageSize:E,position:["bottomCenter"],showQuickJumper:!1},scroll:{y:"50vh"}})]})},ne=s=>{const[r,x]=t.useState([]),[p,v]=t.useState(0),[E,m]=t.useState(20),[C,S]=t.useState(""),[y,l]=t.useState(!0),[I]=b.useForm(),[c,h]=t.useState(!1),d=[{title:"Full Name",dataIndex:"name",fixed:!0,render:(a,n)=>e.jsx("span",{children:e.jsx("a",{children:n.schoolEducationLevelStudent.member.fullName})})},{title:"Registration Number",dataIndex:"registrationNumber",fixed:!0,render:(a,n)=>e.jsx("span",{children:e.jsx("a",{children:n.schoolEducationLevelStudent.registrationNumber})})},{title:"Score",dataIndex:"score",fixed:!0,render:(a,n)=>e.jsx("span",{children:e.jsx("a",{children:n.score})})},{title:"Grade",dataIndex:"grade",fixed:!0,render:(a,n)=>e.jsx("span",{children:e.jsx("a",{children:n.grade})})},{title:"",dataIndex:"action",render:(a,n)=>e.jsx(e.Fragment,{children:e.jsx(_,{title:"Are you sure to Delete",onConfirm:()=>i(n.id),onCancel:()=>{},okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(F,{icon:e.jsx(Q,{}),style:{float:"right"},danger:!0})})})}],i=async a=>{const{data:n}=await k.custom({url:"",method:"post",meta:{operation:"deleteSchoolExaminationEducationLevelSubjectStudent",variables:{id:{value:parseInt(a.toString()),type:"Int",required:!0}},fields:["success","message"]}}).catch(o=>(u.remove(),u.error("Something Went Wrong ...."),{data:null})).then(o=>o);n&&(n.success?(u.success(n.message),x(r.filter(o=>o.id!==a))):u.error(n.message)),l(!1)},f=async(a,n="",o=20)=>{var L;const{data:j}=await k.custom({url:"",method:"get",meta:{operation:"schoolExaminationEducationLevelSubjectStudents",variables:{page:{value:a,type:"Int",required:!0},key:{value:n,type:"String",required:!1},pageSize:{value:o,type:"Int",required:!1},schoolExaminationEducationLevelSubjectId:{value:parseInt(((L=s.subject)==null?void 0:L.id.toString())??"0"),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:["id",{schoolEducationLevelStudent:["id",{member:["id","fullName","registrationNumber"]}]},"score","grade","isActive","created","updated","canEdit","canDelete","canManage"]}]}}).catch(N=>(u.remove(),u.error("Something Went Wrong ...."),{data:null})).then(N=>N);j&&(v(j.total),x(j.results)),l(!1)},g=async a=>{x([a,...r])};return t.useEffect(()=>{f(1,"",20)},[s.randKey,s.subject]),e.jsxs(e.Fragment,{children:[e.jsxs(q,{style:{marginTop:10},children:[e.jsx(w,{span:16,children:e.jsx(b,{layout:"vertical",form:I,onFinish:a=>{S(a.key),r.length=0,f(1,a.key)},children:e.jsx(b.Item,{name:"key",children:e.jsx(D,{size:"large",placeholder:"Search ...",prefix:e.jsx(W,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(w,{span:8,style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(F,{size:"large",icon:e.jsx(z,{}),onClick:()=>h(!0),danger:!0,children:"Add"})})]}),e.jsx(R,{loading:y,columns:d,dataSource:r,pagination:{onChange:(a,n)=>{m(n),f(a,C,n)},total:p,pageSize:E,position:["bottomCenter"],showQuickJumper:!1},scroll:{y:"80vh"}}),e.jsx(V,{title:"Adding Students Scores",open:c,width:"40vw",onClose:a=>h(a),children:e.jsx(ae,{level:s.level,subject:s.subject,onAdd:g})})]})},se=s=>{const[r,x]=t.useState(),[p,v]=t.useState([]),[E,m]=t.useState(0);t.useState(20),t.useState("");const[C,S]=t.useState(!0),[y,l]=t.useState(!1);b.useForm(),O.useBreakpoint().lg;const c=async d=>{x(d),l(!0)},h=async(d,i="",f=20)=>{var a;const{data:g}=await k.custom({url:"",method:"get",meta:{operation:"schoolExaminationEducationLevelSubjects",variables:{page:{value:d,type:"Int",required:!0},key:{value:i,type:"String",required:!1},pageSize:{value:f,type:"Int",required:!1},schoolExaminationEducationLevelId:{value:parseInt(((a=s.level)==null?void 0:a.id.toString())??"0"),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:["id",{schoolEducationLevelSubject:["id",{schoolSubject:["id",{subject:["id","name"]}]}]},"isActive","created","updated","canEdit","canDelete","canManage"]}]}}).catch(n=>(u.remove(),u.error("Something Went Wrong ...."),{data:null})).then(n=>n);g&&(m(g.total),v([...g.results])),S(!1)};return t.useEffect(()=>{h(1,"",20)},[s.randKey]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[p.length===0&&e.jsx(ee,{description:"No Subject Found ..."}),p.map((d,i)=>e.jsx("a",{onClick:()=>c(d),children:e.jsx(P,{color:"red",style:{padding:5},children:e.jsx("span",{style:{fontSize:18},children:d.schoolEducationLevelSubject.schoolSubject.subject.name})})}))]}),e.jsx(X,{title:"View "+(r==null?void 0:r.schoolEducationLevelSubject.schoolSubject.subject.name)+" Results",anchor:"right",width:"50vw",onClose:d=>l(d),open:y,children:e.jsx(ne,{level:s.level,subject:r})})]})},re=s=>{const[r,x]=t.useState([]),[p,v]=t.useState([]),[E,m]=t.useState(0);t.useState(20),t.useState("");const[C,S]=t.useState(!0);t.useState(!1),b.useForm(),O.useBreakpoint().lg;const l=async(c,h="",d=20)=>{var f;const{data:i}=await k.custom({url:"",method:"get",meta:{operation:"schoolExaminationEducationLevelResults",variables:{schoolExaminationEducationLevelId:{value:parseInt(((f=s.level)==null?void 0:f.id.toString())??"0"),type:"Int",required:!0}},fields:["subjects","results"]}}).catch(()=>(u.remove(),u.error("Something Went Wrong ...."),{data:null})).then(g=>g);if(i){m(i.total),x([...i.subjects]);const g=[];i.subjects.map(a=>g.push({name:a})),x([...g]),v([...i.results])}S(!1)},I=[{fixed:!0,title:"Full Name",dataIndex:"name",key:"name",render:(c,h)=>e.jsx("span",{style:{fontWeight:"bolder"},children:h.student})},{fixed:!0,title:"Reg #.",dataIndex:"regno",key:"regno",render:(c,h)=>e.jsx("span",{style:{fontWeight:"bolder"},children:h.registration_number})},{title:"SUBJECTS",dataIndex:"subjects",key:"subjects",children:r.map(c=>({title:c.name,dataIndex:c.name,key:c.name,render:(h,d)=>{const i=d.results.find(f=>f.subject===c.name);return e.jsx(q,{children:e.jsxs(w,{span:24,style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{children:i==null?void 0:i.score}),e.jsx(P,{color:"green",children:i==null?void 0:i.grade})]})})}}))}];return t.useEffect(()=>{l(1,"",20)},[s.randKey]),e.jsx(e.Fragment,{children:e.jsx(R,{size:"small",columns:I,dataSource:p,scroll:{y:"80vh"}})})},{Panel:oe}=G,ie=s=>{const[r,x]=t.useState(!0),[p,v]=t.useState(),[E,m]=t.useState([]),[C,S]=t.useState(!1),y=async(l,I="",c=20)=>{var d;const{data:h}=await k.custom({url:"",method:"get",meta:{operation:"schoolExaminationEducationLevels",variables:{schoolExaminationId:{value:parseInt((d=s.examination)==null?void 0:d.id.toString()),type:"Int",required:!0},page:{value:l,type:"Int",required:!0},key:{value:I,type:"String",required:!1},pageSize:{value:c,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id",{schoolEducationLevel:["id",{educationLevel:["id","name"]}]},{schoolExamination:["id","name"]},"score","isActive","created","updated","canEdit","canDelete","canManage"]}]}}).catch(()=>(u.remove(),u.error("Something Went Wrong ..."),{data:null})).then(i=>i);h&&m([...h.results]),x(!1)};return t.useEffect(()=>{y(1,"",20)},[s.randKey,s.examination]),e.jsxs(e.Fragment,{children:[e.jsx(K,{spinning:r,children:e.jsx(q,{children:e.jsxs(w,{span:24,children:[E.length===0&&e.jsx(A,{children:e.jsxs("h3",{children:[e.jsx(Z,{type:"info-circle"})," No Data"]})}),e.jsx(A,{children:e.jsx(G,{defaultActiveKey:[],onChange:()=>{},expandIconPosition:"left",children:E.map((l,I)=>e.jsx(oe,{header:e.jsx(e.Fragment,{children:e.jsx("span",{style:{fontSize:18},children:l.schoolEducationLevel.educationLevel.name})}),extra:e.jsxs(e.Fragment,{children:[e.jsx(H,{title:"Click to View All "+l.schoolEducationLevel.educationLevel.name+" Subjects Students Results",color:"green",placement:"left",children:e.jsx(F,{danger:!0,type:"link",icon:e.jsx(U,{}),onClick:c=>{c.stopPropagation(),v(l),S(!0)},style:{marginRight:5}})}),e.jsx(F,{type:"link",icon:e.jsx(Y,{}),onClick:c=>{c.stopPropagation()}})]}),children:e.jsx(se,{level:l})},"level"+I))})})]})})}),e.jsx(V,{title:"View All Subjects Examination Results",open:C,width:"94vw",onClose:l=>S(l),children:e.jsx(re,{level:p})})]})},{TabPane:le}=J,ce=s=>{const[r,x]=t.useState(!0),[p,v]=t.useState([]),E=async(m,C="",S=20)=>{x(!0);const{data:y}=await k.custom({url:"",method:"get",meta:{operation:"schoolExaminations",variables:{page:{value:m,type:"Int",required:!0},key:{value:C,type:"String",required:!1},pageSize:{value:S,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","description","year","startDate","endDate",{school:["id","name"]},{examinationType:["id","name"]},"isActive","created","updated","canEdit","canDelete","canManage"]}]}}).catch(()=>(u.error("Error occured while fetching Examinations"),{data:null})).then(l=>l);y&&v([...y.results]),x(!1)};return t.useEffect(()=>{E(1,"",20)},[s.randKey]),e.jsx(e.Fragment,{children:e.jsx(K,{spinning:r,children:e.jsx(q,{children:e.jsxs(w,{span:24,children:[p.length===0&&e.jsx(A,{children:e.jsx("h3",{children:"No Examinations Found"})}),e.jsx(A,{children:e.jsx(J,{tabPosition:"left",children:p.map(m=>e.jsxs(le,{tab:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:m.name}),e.jsx(P,{color:"red",style:{marginLeft:5},children:m.year})]}),children:[e.jsxs("h3",{children:[m.name,e.jsx(P,{color:"red",style:{marginLeft:5},children:m.year})]}),e.jsx(ie,{examination:m})]},"examination-"+m.id))})})]})})})})},de=()=>(t.useEffect(()=>{document.title=B.system_name+": Examinations Results Dashboard"},[]),e.jsx("div",{style:{marginTop:10},children:e.jsx(ce,{})})),ue=()=>(t.useEffect(()=>{document.title=B.system_name+": Manage Examinations"},[]),e.jsx(te,{})),Ae=s=>{const{page:r}=s;return r==="ManageExaminationsPage"?e.jsx(ue,{}):r==="ExaminationsResultsDashBoardPage"?e.jsx(de,{}):e.jsx("div",{children:"Page not found ..."})};export{Ae as ExaminationsResultsPages};
