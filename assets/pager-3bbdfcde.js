import{r as t,q as b,j as e,R as q,C as w,I as W,v as D,am as z,b5 as J,Y as N,aR as K,P as k,Q as v,W as V,a2 as Q,G as B,ag as Y,ak as R,ac as U,w as O,x as P,eY as H,V as X,aU as Z,bL as $,bK as _}from"./index-d45767e9.js";import{T as A}from"./Table-9c871b5d.js";import{C as G}from"./Collapse-b41e08b8.js";import{S as ee}from"./schoool_examinations_component-e7205c13.js";import"./index-aed3008a.js";import"./index-a541f1d2.js";const te=s=>{const[r,h]=t.useState([]),[g,f]=t.useState(0),[E,u]=t.useState(20),[C,p]=t.useState(""),[y,l]=t.useState(!0),[I]=b.useForm(),[c]=b.useForm();t.useState(!1);const[m,d]=t.useState(0),o=[{title:"Full Name",dataIndex:"name",fixed:!0,render:(n,a)=>e.jsx("span",{children:e.jsx("a",{children:a.member.fullName})})},{title:"Registration Number",dataIndex:"registrationNumber",fixed:!0,render:(n,a)=>e.jsx("span",{children:a.member.registrationNumber})},{title:"",dataIndex:"action",render:(n,a)=>e.jsx(e.Fragment,{children:e.jsx(z,{placement:"topRight",overlayStyle:{zIndex:9999},title:e.jsxs("div",{style:{width:"300px"},children:[e.jsxs("p",{style:{fontSize:18},children:["Are you sure to add Examination Score for"," ",e.jsx("b",{children:a.member.fullName})]}),e.jsx("div",{style:{marginTop:10},children:e.jsx(b,{layout:"vertical",form:c,onFinish:i=>{},requiredMark:!0,children:e.jsx(b.Item,{name:"score_value",label:"Score",rules:[{required:!0,type:"number",message:"Please input score value!"},{validator:(i,j)=>j<0||j>100?Promise.reject("Score value must be between 0 and 100"):Promise.resolve()}],children:e.jsx(J,{size:"large",defaultValue:0,style:{width:"100%"},onChange:i=>{d(i??0)}})})})})]}),onConfirm:()=>S(a.id,m),onCancel:()=>{},okButtonProps:{disabled:m<0||m>100},okText:"Add",cancelText:"No",onVisibleChange:i=>{i&&(d(0),c.resetFields())},children:e.jsx(N,{icon:e.jsx(K,{}),style:{float:"right"},danger:!0})})})}],S=async(n,a)=>{var j;const{data:i}=await k.custom({url:"",method:"post",meta:{operation:"createSchoolExaminationEducationLevelSubjectStudentRecord",variables:{schoolExaminationEducationLevelSubjectId:{value:parseInt(((j=s.subject)==null?void 0:j.id.toString())??"0"),type:"Int",required:!0},schoolEducationLevelStudentId:{value:parseInt(n.toString()),type:"Int",required:!0},score:{value:parseFloat(a.toString()),type:"Float",required:!0}},fields:["success","message",{schoolExaminationEducationLevelSubjectStudent:["id",{schoolEducationLevelStudent:["id",{member:["id","fullName","registrationNumber"]}]},"score","grade","isActive","created","updated","canEdit","canDelete","canManage"]}]}}).catch(L=>(v.error("Something Went Wrong ...."),{data:null})).then(L=>L);i!=null&&i.success?(v.success("Score Added Successfully"),h(r.filter(L=>L.id!==n)),s.onAdd(i.schoolExaminationEducationLevelSubjectStudent)):v.error(i==null?void 0:i.message)},x=async(n,a="",i=20)=>{var L,F,T;const{data:j}=await k.custom({url:"",method:"get",meta:{operation:"schoolEducationLevelSubjectResultsStudentsTo",variables:{page:{value:n,type:"Int",required:!0},key:{value:a,type:"String",required:!1},pageSize:{value:i,type:"Int",required:!1},schoolExaminationEducationLevelSubjectId:{value:parseInt(((L=s.subject)==null?void 0:L.id.toString())??"0"),type:"Int",required:!0},schoolEducationLevelId:{value:parseInt(((T=(F=s.level)==null?void 0:F.schoolEducationLevel)==null?void 0:T.id.toString())??"0"),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:["id",{member:["id","firstName","middleName","lastName","fullName","registrationNumber"]},"isActive","created","updated","canEdit","canDelete","canManage"]}]}}).catch(M=>(v.error("Something Went Wrong ...."),{data:null})).then(M=>M);j&&(f(j.total),h([...j.results])),l(!1)};return t.useEffect(()=>{x(1,"",20)},[s.randKey]),e.jsxs(e.Fragment,{children:[e.jsx(q,{style:{marginTop:10},children:e.jsx(w,{span:16,children:e.jsx(b,{layout:"vertical",form:I,onFinish:n=>{p(n.key),r.length=0,x(1,n.key)},children:e.jsx(b.Item,{name:"key",children:e.jsx(W,{size:"large",placeholder:"Search ...",prefix:e.jsx(D,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx(A,{loading:y,columns:o,dataSource:r,pagination:{onChange:(n,a)=>{u(a),x(n,C,a)},total:g,pageSize:E,position:["bottomCenter"],showQuickJumper:!1},scroll:{y:"50vh"}})]})},ne=s=>{const[r,h]=t.useState([]),[g,f]=t.useState(0),[E,u]=t.useState(20),[C,p]=t.useState(""),[y,l]=t.useState(!0),[I]=b.useForm(),[c,m]=t.useState(!1),d=[{title:"Full Name",dataIndex:"name",fixed:!0,render:(n,a)=>e.jsx("span",{children:e.jsx("a",{children:a.schoolEducationLevelStudent.member.fullName})})},{title:"Registration Number",dataIndex:"registrationNumber",fixed:!0,render:(n,a)=>e.jsx("span",{children:e.jsx("a",{children:a.schoolEducationLevelStudent.registrationNumber})})},{title:"Score",dataIndex:"score",fixed:!0,render:(n,a)=>e.jsx("span",{children:e.jsx("a",{children:a.score})})},{title:"Grade",dataIndex:"grade",fixed:!0,render:(n,a)=>e.jsx("span",{children:e.jsx("a",{children:a.grade})})},{title:"",dataIndex:"action",render:(n,a)=>e.jsx(e.Fragment,{children:e.jsx(z,{title:"Are you sure to Delete",onConfirm:()=>o(a.id),onCancel:()=>{},okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(N,{icon:e.jsx(Q,{}),style:{float:"right"},danger:!0})})})}],o=async n=>{const{data:a}=await k.custom({url:"",method:"post",meta:{operation:"deleteSchoolExaminationEducationLevelSubjectStudent",variables:{id:{value:parseInt(n.toString()),type:"Int",required:!0}},fields:["success","message"]}}).catch(i=>(v.error("Something Went Wrong ...."),{data:null})).then(i=>i);a&&(a.success?(v.success(a.message),h(r.filter(i=>i.id!==n))):v.error(a.message)),l(!1)},S=async(n,a="",i=20)=>{var L;const{data:j}=await k.custom({url:"",method:"get",meta:{operation:"schoolExaminationEducationLevelSubjectStudents",variables:{page:{value:n,type:"Int",required:!0},key:{value:a,type:"String",required:!1},pageSize:{value:i,type:"Int",required:!1},schoolExaminationEducationLevelSubjectId:{value:parseInt(((L=s.subject)==null?void 0:L.id.toString())??"0"),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:["id",{schoolEducationLevelStudent:["id",{member:["id","fullName","registrationNumber"]}]},"score","grade","isActive","created","updated","canEdit","canDelete","canManage"]}]}}).catch(F=>(v.error("Something Went Wrong ...."),{data:null})).then(F=>F);j&&(f(j.total),h(j.results)),l(!1)},x=async n=>{h([n,...r])};return t.useEffect(()=>{S(1,"",20)},[s.randKey,s.subject]),e.jsxs(e.Fragment,{children:[e.jsxs(q,{style:{marginTop:10},children:[e.jsx(w,{span:16,children:e.jsx(b,{layout:"vertical",form:I,onFinish:n=>{p(n.key),r.length=0,S(1,n.key)},children:e.jsx(b.Item,{name:"key",children:e.jsx(W,{size:"large",placeholder:"Search ...",prefix:e.jsx(D,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(w,{span:8,style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(N,{size:"large",icon:e.jsx(K,{}),onClick:()=>m(!0),danger:!0,children:"Add"})})]}),e.jsx(A,{loading:y,columns:d,dataSource:r,pagination:{onChange:(n,a)=>{u(a),S(n,C,a)},total:g,pageSize:E,position:["bottomCenter"],showQuickJumper:!1},scroll:{y:"80vh"}}),e.jsx(V,{title:"Adding Students Scores",open:c,width:"40vw",onClose:n=>m(n),children:e.jsx(te,{level:s.level,subject:s.subject,onAdd:x})})]})},ae=s=>{const[r,h]=t.useState(),[g,f]=t.useState([]),[E,u]=t.useState(0);t.useState(20),t.useState("");const[C,p]=t.useState(!0),[y,l]=t.useState(!1);b.useForm(),B.useBreakpoint().lg;const c=async d=>{h(d),l(!0)},m=async(d,o="",S=20)=>{var n;const{data:x}=await k.custom({url:"",method:"get",meta:{operation:"schoolExaminationEducationLevelSubjects",variables:{page:{value:d,type:"Int",required:!0},key:{value:o,type:"String",required:!1},pageSize:{value:S,type:"Int",required:!1},schoolExaminationEducationLevelId:{value:parseInt(((n=s.level)==null?void 0:n.id.toString())??"0"),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:["id",{schoolEducationLevelSubject:["id",{schoolSubject:["id",{subject:["id","name"]}]}]},"isActive","created","updated","canEdit","canDelete","canManage"]}]}}).catch(a=>(v.error("Something Went Wrong ...."),{data:null})).then(a=>a);x&&(u(x.total),f([...x.results])),p(!1)};return t.useEffect(()=>{m(1,"",20)},[s.randKey]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[g.length===0&&e.jsx(Y,{description:"No Subject Found ..."}),g.map((d,o)=>e.jsx("a",{onClick:()=>c(d),children:e.jsx(R,{color:"red",style:{padding:5},children:e.jsx("span",{style:{fontSize:18},children:d.schoolEducationLevelSubject.schoolSubject.subject.name})})}))]}),e.jsx(U,{title:"View "+(r==null?void 0:r.schoolEducationLevelSubject.schoolSubject.subject.name)+" Results",anchor:"right",width:"50vw",onClose:d=>l(d),open:y,children:e.jsx(ne,{level:s.level,subject:r})})]})},se=s=>{const[r,h]=t.useState([]),[g,f]=t.useState([]),[E,u]=t.useState(0);t.useState(20),t.useState("");const[C,p]=t.useState(!0);t.useState(!1),b.useForm(),B.useBreakpoint().lg;const l=async(c,m="",d=20)=>{var S;const{data:o}=await k.custom({url:"",method:"get",meta:{operation:"schoolExaminationEducationLevelResults",variables:{schoolExaminationEducationLevelId:{value:parseInt(((S=s.level)==null?void 0:S.id.toString())??"0"),type:"Int",required:!0}},fields:["subjects","results"]}}).catch(x=>(v.error("Something Went Wrong ...."),{data:null})).then(x=>x);if(o){u(o.total),h([...o.subjects]);const x=[];o.subjects.map(n=>x.push({name:n})),h([...x]),f([...o.results])}p(!1)},I=[{fixed:!0,title:"Full Name",dataIndex:"name",key:"name",render:(c,m)=>e.jsx("span",{style:{fontWeight:"bolder"},children:m.student})},{fixed:!0,title:"Reg #.",dataIndex:"regno",key:"regno",render:(c,m)=>e.jsx("span",{style:{fontWeight:"bolder"},children:m.registration_number})},{title:"SUBJECTS",dataIndex:"subjects",key:"subjects",children:r.map(c=>({title:c.name,dataIndex:c.name,key:c.name,render:(m,d)=>{const o=d.results.find(S=>S.subject===c.name);return e.jsx(q,{children:e.jsxs(w,{span:24,style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{children:o==null?void 0:o.score}),e.jsx(R,{color:"green",children:o==null?void 0:o.grade})]})})}}))}];return t.useEffect(()=>{l(1,"",20)},[s.randKey]),e.jsx(e.Fragment,{children:e.jsx(A,{size:"small",columns:I,dataSource:g,scroll:{y:"80vh",x:"100vw"}})})},{Panel:re}=G,oe=s=>{const[r,h]=t.useState(!0),[g,f]=t.useState(),[E,u]=t.useState([]),[C,p]=t.useState(!1),y=async(l,I="",c=20)=>{var d;const{data:m}=await k.custom({url:"",method:"get",meta:{operation:"schoolExaminationEducationLevels",variables:{schoolExaminationId:{value:(d=s.examination)==null?void 0:d.id,type:"Int",required:!0},page:{value:l,type:"Int",required:!0},key:{value:I,type:"String",required:!1},pageSize:{value:c,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id",{schoolEducationLevel:["id",{educationLevel:["id","name"]}]},{schoolExamination:["id","name"]},"score","isActive","created","updated","canEdit","canDelete","canManage"]}]}}).catch(o=>(v.error("Something Went Wrong ..."),{data:null})).then(o=>o);m&&u([...m.results]),h(!1)};return t.useEffect(()=>{y(1,"",20)},[s.randKey,s.examination]),e.jsxs(e.Fragment,{children:[e.jsx(O,{spinning:r,children:e.jsx(q,{children:e.jsxs(w,{span:24,children:[E.length===0&&e.jsx(P,{children:e.jsxs("h3",{children:[e.jsx(H,{type:"info-circle"})," No Data"]})}),e.jsx(P,{children:e.jsx(G,{defaultActiveKey:[],onChange:()=>{},expandIconPosition:"left",children:E.map((l,I)=>e.jsx(re,{header:e.jsx(e.Fragment,{children:e.jsx("span",{style:{fontSize:18},children:l.schoolEducationLevel.educationLevel.name})}),extra:e.jsxs(e.Fragment,{children:[e.jsx(X,{title:"Click to View All "+l.schoolEducationLevel.educationLevel.name+" Subjects Students Results",color:"green",placement:"left",children:e.jsx(N,{danger:!0,type:"link",icon:e.jsx(Z,{}),onClick:c=>{c.stopPropagation(),f(l),p(!0)},style:{marginRight:5}})}),e.jsx(N,{type:"link",icon:e.jsx($,{}),onClick:c=>{c.stopPropagation()}})]}),children:e.jsx(ae,{level:l})},"level"+I))})})]})})}),e.jsx(V,{title:"View All Subjects Examination Results",open:C,width:"100vw",onClose:l=>p(l),children:e.jsx(se,{level:g})})]})},{TabPane:ie}=_,le=s=>{const[r,h]=t.useState(!0),[g,f]=t.useState([]),E=async(u,C="",p=20)=>{h(!0);const{data:y}=await k.custom({url:"",method:"get",meta:{operation:"schoolExaminations",variables:{page:{value:u,type:"Int",required:!0},key:{value:C,type:"String",required:!1},pageSize:{value:p,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","description","year","startDate","endDate",{school:["id","name"]},{examinationType:["id","name"]},"isActive","created","updated","canEdit","canDelete","canManage"]}]}}).catch(l=>(v.error("Error occured while fetching Examinations"),{data:null})).then(l=>l);y&&f([...y.results]),h(!1)};return t.useEffect(()=>{E(1,"",20)},[s.randKey]),e.jsx(e.Fragment,{children:e.jsx(O,{spinning:r,children:e.jsx(q,{children:e.jsxs(w,{span:24,children:[g.length===0&&e.jsx(P,{children:e.jsx("h3",{children:"No Examinations Found"})}),e.jsx(P,{children:e.jsx(_,{tabPosition:"left",children:g.map(u=>e.jsxs(ie,{tab:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:u.name}),e.jsx(R,{color:"red",style:{marginLeft:5},children:u.year})]}),children:[e.jsxs("h3",{children:[u.name,e.jsx(R,{color:"red",style:{marginLeft:5},children:u.year})]}),e.jsx(oe,{examination:u})]},"examination-"+u.id))})})]})})})})},ce=()=>e.jsx("div",{style:{marginTop:10},children:e.jsx(le,{})}),de=()=>e.jsx(e.Fragment,{children:e.jsx(ce,{})}),ue=()=>e.jsx(ee,{}),me=()=>e.jsx(e.Fragment,{children:e.jsx(ue,{})}),ve=s=>{const{page:r}=s;return r==="ManageExaminationsPage"?e.jsx(me,{}):r==="ExaminationsResultsDashBoardPage"?e.jsx(de,{}):e.jsx("div",{children:"Page not found ..."})};export{ve as ExaminationsResultsPages};
