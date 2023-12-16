import{aw as V,r as n,j as e,s as xe,F as m,at as G,I as _,y as O,z as D,au as ee,ah as me,ai as pe,B as w,J as A,K as x,bd as te,S as J,a6 as K,v as se,af as ie,t as U,x as R,e2 as je,H as X,a9 as re,a2 as de,ab as ge,O as ye,av as ce,Z as fe,$ as Z,ay as ve,a1 as Se}from"./index-329f7062.js";import{T as $}from"./Table-550527e4.js";const{Option:ue}=G;let W=[];for(let a=0;a<5;a++)W.push(V().year()+a),W.push(V().year()-a);W=W.sort((a,c)=>a-c);W=W.filter((a,c)=>W.indexOf(a)===c);const Ee=a=>{const[c,E]=n.useState(!0),[j,S]=n.useState([]),[I,F]=n.useState(""),T=async i=>{const{data:t}=await A.custom({url:"",method:"post",meta:{operation:"createSchoolExamination",variables:{examinationTypeId:{value:i.examination_type_id,type:"Int",required:!0},name:{value:i.name,type:"String",required:!0},description:{value:i.description,type:"String",required:!1},startDate:{value:i.start_date,type:"String",required:!1},endDate:{value:i.end_date,type:"String",required:!1},year:{value:i.year,type:"Int",required:!0}},fields:["success","message",{schoolExamination:["id","name",{examinationType:["id","name"]},"description","year","startDate","endDate","isActive","created","updated","canEdit","canDelete","canManage"]}]}}).catch(l=>(x.error("Error occured while Creating School Examination"),{data:null})).then(l=>l);t&&(t.success?(x.success(t.message),a.onFinish(t.schoolExamination)):x.error(t.message))},q=async(i,t="")=>{E(!0);const{data:l}=await A.custom({url:"",method:"get",meta:{operation:"examinationsTypes",variables:{page:{value:i,type:"Int",required:!0},key:{value:t,type:"String",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","code","description","startDate","endDate","isActive","created","updated","canEdit","canDelete","canManage"]}]}}).catch(v=>(x.error("Error occured while Examinations Types"),{data:null})).then(v=>v);l&&S([...l.results]),E(!1)};return n.useEffect(()=>{q(1)},[a.randKey]),e.jsx(e.Fragment,{children:e.jsx(xe,{spinning:c,children:e.jsxs(m,{layout:"vertical",form:a.form,onFinish:i=>{i.description=I,T(i)},requiredMark:!0,children:[e.jsx(m.Item,{name:"examination_type_id",label:"Examination Type",rules:[{required:!0,type:"integer",message:"Please choose Examination Type..."}],children:e.jsx(G,{size:"large",showSearch:!0,placeholder:"Select a School Type",optionFilterProp:"children",onChange:i=>{},onSearch:i=>{},filterOption:(i,t)=>t.children.toLowerCase().includes(i.toLowerCase()),dropdownStyle:{zIndex:9999},children:j.map((i,t)=>e.jsx(ue,{value:parseInt(i.id.toString()),children:i.name}))})}),e.jsx(m.Item,{name:"name",label:"Name",rules:[{required:!0,type:"string",message:"Please input Name"}],children:e.jsx(_,{size:"large",placeholder:"Enter Name ..."})}),e.jsx(m.Item,{name:"year",label:"Year",rules:[{required:!0,type:"integer",message:"Please choose Year..."}],children:e.jsx(G,{size:"large",showSearch:!0,placeholder:"Select a Year",optionFilterProp:"children",onChange:i=>{},onSearch:i=>{},filterOption:(i,t)=>t.children.toLowerCase().includes(i.toLowerCase()),dropdownStyle:{zIndex:9999},children:W.map((i,t)=>e.jsx(ue,{value:i,children:i}))})}),e.jsxs(O,{children:[e.jsx(D,{span:12,children:e.jsx(m.Item,{name:"start_date",label:"Start Date",rules:[{required:!1,type:"date",message:"Please input Start Date"}],children:e.jsx(ee,{onChange:()=>{},style:{width:"100%"},popupStyle:{zIndex:9999}})})}),e.jsx(D,{span:12,children:e.jsx(m.Item,{name:"end_date",label:"End Date",rules:[{required:!1,type:"date",message:"Please input End Date"}],children:e.jsx(ee,{onChange:()=>{},style:{width:"100%"},popupStyle:{zIndex:9999}})})})]}),e.jsxs("div",{style:{marginBottom:10},children:[e.jsx("h3",{children:"Description"}),e.jsx(me.CKEditor,{editor:pe,data:I,onReady:i=>{i.editing.view.change(t=>{t.setStyle("min-height","100px",i.editing.view.document.getRoot())})},onChange:(i,t)=>{const l=t.getData();F(l)},onBlur:(i,t)=>{},onFocus:(i,t)=>{},config:{toolbar:{items:["bold","italic","strikethrough","underline","code","subscript","superscript","removeFormat","|","bulletedList","numberedList","todoList","|","outdent","indent","|","-","fontSize","fontFamily","fontColor","fontBackgroundColor","highlight","|","alignment","|","EmojiPanel"],shouldNotGroupWhenFull:!0},fontFamily:{options:["default","Arial, Helvetica, sans-serif","Courier New, Courier, monospace","Georgia, serif","Lucida Sans Unicode, Lucida Grande, sans-serif","Tahoma, Geneva, sans-serif","Times New Roman, Times, serif","Trebuchet MS, Helvetica, sans-serif","Verdana, Geneva, sans-serif"],supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0}}})]}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(w,{type:"primary",size:"large",htmlType:"submit",children:"Save"})})]})})})},Ce=a=>{const[c,E]=n.useState([]),[j,S]=n.useState(0),[I,F]=n.useState(20),[T,q]=n.useState(""),[i,t]=n.useState(!0),[l]=m.useForm();te.useBreakpoint().lg;const[f,N]=n.useState(0),C=r=>{N(r)},p=async(r,d=!1)=>{var z;const{data:y}=await A.custom({url:"",method:"post",meta:{operation:"createSchoolExaminationEducationLevel",variables:{all:{value:d,type:"Boolean",required:!1},schoolExaminationId:{value:(z=a.schoolExamination)==null?void 0:z.id,type:"Int",required:!1},educationLevelId:{value:parseInt(r.toString()),type:"Int",required:!0},score:{value:f,type:"Float",required:!0}},fields:["success","message",{schoolExaminationEducationLevel:["id",{schoolEducationLevel:["id",{educationLevel:["id","name"]}]},"score","isActive","created","updated","canEdit","canDelete","canManage"]}]}}).catch(M=>(x.error("Something went wrong"),{data:null})).then(M=>M);y&&(y.success?(x.success(y.message),y.schoolExaminationEducationLevel?(E(c.filter(M=>M.id!==r)),a.onAdd(y.schoolExaminationEducationLevel)):(b(1,"",20),a.onAddAll())):x.error(y.message))},g=[{title:"Name",dataIndex:"name",fixed:!0,render:(r,d,y)=>e.jsx("span",{children:e.jsx("a",{children:d.educationLevel.name})})},{title:"",dataIndex:"action",render:(r,d,y)=>e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(K,{placement:"left",title:e.jsx(e.Fragment,{children:e.jsxs(se,{direction:"vertical",children:[e.jsxs("span",{children:["Are you sure to add ",d.educationLevel.name," ?"]}),e.jsx("div",{style:{height:"10px"}}),e.jsx("span",{style:{fontWeight:"bolder"},children:"Average Pass Score"}),e.jsx("span",{children:e.jsx(ie,{size:"large",style:{width:"100%"},defaultValue:0,onChange:C})})]})}),disabled:!d.canManage,onConfirm:()=>p(d.id),onCancel:()=>{},okButtonProps:{disabled:f==null||f<0||f>100},okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(R,{title:"Click to Add",placement:"left",color:"green",children:e.jsx(w,{size:"large",icon:e.jsx(U,{}),disabled:!d.canManage,danger:!0})})})})}],b=async(r,d="",y=20)=>{var M;const{data:z}=await A.custom({url:"",method:"get",meta:{operation:"schoolEducationLevelsNoExamination",variables:{schoolExaminationId:{value:(M=a.schoolExamination)==null?void 0:M.id,type:"Int",required:!0},page:{value:r,type:"Int",required:!0},key:{value:d,type:"String",required:!1},pageSize:{value:y,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id",{school:["id","name"]},{educationLevel:["id","name",{schoolType:["id","name","code"]}]},"isActive","created","updated","canEdit","canDelete","canManage"]}]}}).catch(P=>(x.error("Something Went Wrong ..."),{data:null})).then(P=>P);z&&(S(z.total),E([...z.results])),t(!1)};return n.useEffect(()=>{b(1,"",20)},[a.randKey]),e.jsxs(e.Fragment,{children:[e.jsxs(O,{style:{marginTop:10},children:[e.jsx(D,{span:12,children:e.jsx(m,{layout:"vertical",form:l,onFinish:r=>{q(r.key),c.length=0,b(1,r.key,I)},children:e.jsx(m.Item,{name:"key",children:e.jsx(_,{size:"large",placeholder:"Search ...",prefix:e.jsx(J,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(D,{span:4,children:e.jsx(w,{icon:e.jsx(J,{}),size:"large"})}),e.jsx(D,{span:8,style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(K,{placement:"left",title:e.jsx(e.Fragment,{children:e.jsxs(se,{direction:"vertical",children:[e.jsx("span",{children:"Are you sure to add All?"}),e.jsx("div",{style:{height:"10px"}}),e.jsx("span",{style:{fontWeight:"bolder"},children:"Average Pass Score"}),e.jsx("span",{children:e.jsx(ie,{size:"large",style:{width:"100%"},defaultValue:0,onChange:C})})]})}),onConfirm:()=>p(0,!0),onCancel:()=>{},okButtonProps:{disabled:f==null||f<0||f>100},okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(w,{size:"large",icon:e.jsx(U,{}),danger:!0,children:"Add All"})})})]}),e.jsx($,{loading:i,columns:g,dataSource:c,pagination:{onChange:(r,d)=>{F(d),b(r,T,d)},total:j,pageSize:I,position:["bottomCenter"],showQuickJumper:!1},scroll:{x:!0}})]})},be=a=>{const[c,E]=n.useState([]),[j,S]=n.useState(0),[I,F]=n.useState(20),[T,q]=n.useState(""),[i,t]=n.useState(!0),[l]=m.useForm(),v=[{title:"Subject Name",dataIndex:"name",fixed:!0,render:(C,p)=>e.jsx("span",{children:e.jsx("a",{children:p.schoolSubject.subject.name})})},{title:"",dataIndex:"action",render:(C,p)=>e.jsx(e.Fragment,{children:e.jsx(K,{title:"Add "+(p==null?void 0:p.schoolSubject.subject.name),onConfirm:()=>f(!1,p==null?void 0:p.id),onCancel:()=>{},okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(w,{icon:e.jsx(U,{}),style:{float:"right"},danger:!0})})})}],f=async(C=!1,p)=>{var b;const{data:g}=await A.custom({url:"",method:"post",meta:{operation:"addSchoolExaminationEducationLevelSubject",variables:{schoolExaminationEducationLevelId:{value:parseInt(((b=a.level)==null?void 0:b.id.toString())??"0"),type:"Int",required:!0},schoolEducationLevelSubjectId:{value:parseInt(p.toString()),type:"Int",required:!1},all:{value:C,type:"Boolean",required:!1}},fields:["success","message",{schoolExaminationEducationLevelSubject:["id"]}]}}).catch(r=>(x.error("Something Went Wrong ...."),{data:null})).then(r=>r);g!=null&&g.success?(x.success(g==null?void 0:g.message),c.length=0,E([]),N(1,T,I),a.onAdd()):x.error(g==null?void 0:g.message)},N=async(C,p="",g=20)=>{var r;const{data:b}=await A.custom({url:"",method:"get",meta:{operation:"schoolEducationLevelSubjectsForExaminationToAdd",variables:{page:{value:C,type:"Int",required:!0},key:{value:p,type:"String",required:!1},pageSize:{value:g,type:"Int",required:!1},schoolExaminationEducationLevelId:{value:parseInt(((r=a.level)==null?void 0:r.id.toString())??"0"),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:["id",{schoolSubject:["id",{subject:["id","name"]}]},"isActive","created","updated","canEdit","canDelete","canManage"]}]}}).catch(d=>(x.error("Something Went Wrong ...."),{data:null})).then(d=>d);b&&(S(b.total),E([...b.results])),t(!1)};return n.useEffect(()=>{N(1,"",20)},[a.randKey]),e.jsxs(e.Fragment,{children:[e.jsxs(O,{style:{marginTop:10},children:[e.jsx(D,{span:16,children:e.jsx(m,{layout:"vertical",form:l,onFinish:C=>{q(C.key),c.length=0,N(1,C.key)},children:e.jsx(m.Item,{name:"key",children:e.jsx(_,{size:"large",placeholder:"Search ...",prefix:e.jsx(J,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(D,{span:8,style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(K,{title:"Are you sure to add all subjects",onConfirm:()=>f(!0,0),onCancel:()=>{},okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(w,{size:"large",danger:!0,children:"Add All"})})})]}),e.jsx($,{loading:i,columns:v,dataSource:c,pagination:{onChange:(C,p)=>{F(p),N(C,T,p)},total:j,pageSize:I,position:["bottomCenter"],showQuickJumper:!1},scroll:{y:"50vh"}})]})},Ie=a=>{const[c,E]=n.useState([]),[j,S]=n.useState(0),[I,F]=n.useState(20),[T,q]=n.useState(""),[i,t]=n.useState(!0),[l,v]=n.useState(!1),[f]=m.useForm();te.useBreakpoint().lg;const C=[{title:"Subject Name",dataIndex:"name",fixed:!0,render:(r,d,y)=>e.jsx("span",{children:e.jsx("a",{children:d.schoolEducationLevelSubject.schoolSubject.subject.name})})},{title:"",dataIndex:"action",render:(r,d,y)=>e.jsx(e.Fragment,{children:e.jsx(K,{title:"Delete this Subject",placement:"topLeft",onConfirm:()=>p(d==null?void 0:d.id),onCancel:()=>{},okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(w,{danger:!0,size:"small",icon:e.jsx(re,{}),style:{float:"right"}})})})}],p=async r=>{const{data:d}=await A.custom({url:"",method:"post",meta:{operation:"removeSchoolExaminationEducationLevelSubject",variables:{schoolExaminationEducationLevelSubjectId:{value:parseInt(r.toString()),type:"Int",required:!0}},fields:["success","message"]}}).catch(y=>(x.error("Something Went Wrong ...."),{data:null})).then(y=>y);d&&(d.success?(x.success(d.message),g(1,"",20)):x.error(d.message))},g=async(r,d="",y=20)=>{var M;const{data:z}=await A.custom({url:"",method:"get",meta:{operation:"schoolExaminationEducationLevelSubjects",variables:{page:{value:r,type:"Int",required:!0},key:{value:d,type:"String",required:!1},pageSize:{value:y,type:"Int",required:!1},schoolExaminationEducationLevelId:{value:parseInt(((M=a.level)==null?void 0:M.id.toString())??"0"),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:["id",{schoolEducationLevelSubject:["id",{schoolSubject:["id",{subject:["id","name"]}]}]},"isActive","created","updated","canEdit","canDelete","canManage"]}]}}).catch(P=>(x.error("Something Went Wrong ...."),{data:null})).then(P=>P);z&&(S(z.total),E([...z.results])),t(!1)},b=async()=>{g(1,T,I)};return n.useEffect(()=>{g(1,"",20)},[a.randKey]),e.jsxs(e.Fragment,{children:[e.jsxs(O,{style:{marginTop:10},children:[e.jsx(D,{span:16,children:e.jsx(m,{layout:"vertical",form:f,onFinish:r=>{q(r.key),c.length=0,g(1,r.key)},children:e.jsx(m.Item,{name:"key",children:e.jsx(_,{size:"large",placeholder:"Search ...",prefix:e.jsx(J,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(D,{span:8,children:e.jsx(w,{danger:!0,size:"large",icon:e.jsx(je,{}),onClick:()=>v(!0),style:{float:"right"},children:"Add Subject"})})]}),e.jsx($,{loading:i,columns:C,dataSource:c,pagination:{onChange:(r,d)=>{F(d),g(r,T,d)},total:j,pageSize:I,position:["bottomCenter"],showQuickJumper:!1},scroll:{y:"50vh"}}),e.jsx(X,{title:"Adding Subjects",open:l,width:"40vw",onClose:r=>v(r),children:e.jsx(be,{level:a.level,onAdd:b})})]})},Le=a=>{var u,o,L;const[c,E]=n.useState(),[j,S]=n.useState([]),[I,F]=n.useState(20),[T,q]=n.useState(""),[i,t]=n.useState(0),[l,v]=n.useState(!0),[f]=m.useForm();te.useBreakpoint().lg;const[C,p]=n.useState(!1),[g,b]=n.useState(!1),[r,d]=n.useState(0),y=async h=>{E(h),b(!0)},z=h=>{d(h)},M=async()=>{B(1,"",20)},P=async h=>{S([h,...j])},ae=async h=>{const{data:s}=await A.custom({url:"",method:"post",meta:{operation:"updateScoreSchoolExaminationEducationLevel",variables:{schoolExaminationEducationLevelId:{value:parseInt(h.toString()),type:"Int",required:!0},score:{value:r,type:"Float",required:!0}},fields:["success","message",{schoolExaminationEducationLevel:["id",{schoolEducationLevel:["id",{educationLevel:["id","name"]}]},{schoolExamination:["id","name"]},"score","isActive","created","updated","canEdit","canDelete","canManage"]}]}}).catch(k=>(x.error("Something Went Wrong ..."),{data:null})).then(k=>k);s&&(s.success?(x.success(s.message),S(j.map(k=>k.id===h?s.schoolExaminationEducationLevel:k))):x.error(s.message))},ne=async h=>{const{data:s}=await A.custom({url:"",method:"post",meta:{operation:"deleteSchoolExaminationEducationLevel",variables:{schoolExaminationEducationLevelId:{value:parseInt(h.toString()),type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(x.error("Something Went Wrong ..."),{data:null})).then(k=>k);s&&(s.success?(x.success(s.message),S(j.filter(k=>k.id!==h))):x.error(s.message))},B=async(h,s="",k=20)=>{var oe;const{data:Q}=await A.custom({url:"",method:"get",meta:{operation:"schoolExaminationEducationLevels",variables:{schoolExaminationId:{value:(oe=a.schoolExamination)==null?void 0:oe.id,type:"Int",required:!0},page:{value:h,type:"Int",required:!0},key:{value:s,type:"String",required:!1},pageSize:{value:k,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id",{schoolEducationLevel:["id",{educationLevel:["id","name"]}]},{schoolExamination:["id","name"]},"score","isActive","created","updated","canEdit","canDelete","canManage"]}]}}).catch(le=>(x.error("Something Went Wrong ..."),{data:null})).then(le=>le);Q&&(t(Q.total),S([...Q.results])),v(!1)};n.useEffect(()=>{B(1,"",20)},[a.randKey,a.schoolExamination]);const H=[{title:"Education Level",dataIndex:"educationLevel",fixed:!0,render:(h,s,k)=>e.jsx("span",{children:e.jsx(R,{title:"Click to View Results",color:"green",placement:"top",children:e.jsx("a",{children:s.schoolEducationLevel.educationLevel.name})})})},{title:"Average Pass Score",dataIndex:"score",fixed:!0,render:(h,s,k)=>e.jsx("span",{children:e.jsx(K,{title:e.jsx(e.Fragment,{children:e.jsxs(se,{direction:"vertical",children:[e.jsx("span",{children:"Updating Average Score ?"}),e.jsx("div",{style:{height:"10px"}}),e.jsx("span",{style:{fontWeight:"bolder"},children:"Average Pass Score"}),e.jsx("span",{children:e.jsx(ie,{size:"large",style:{width:"100%"},defaultValue:s.score,onChange:z})})]})}),onVisibleChange:Q=>{Q&&d(s.score)},onConfirm:()=>ae(s.id),onCancel:()=>{},okButtonProps:{disabled:r==null||r<0||r>100},okText:"Update",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(R,{title:"Tap to Edit",color:"green",children:e.jsx("a",{children:s.score})})})})},{title:"Created",dataIndex:"created",render:(h,s,k)=>e.jsx(e.Fragment,{children:e.jsx("span",{children:e.jsx(ge,{date:new Date(s.created)})})})},{title:"Status",dataIndex:"isActive",render:(h,s,k)=>e.jsx("a",{children:s!=null&&s.isActive?e.jsx("span",{style:{color:"green"},children:"Active"}):e.jsx("span",{style:{color:"red"},children:"Inactive"})})},{title:"",dataIndex:"action",render:(h,s,k)=>e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end"},children:[e.jsx(R,{title:"View Education Level Applicable Subjects",color:"green",placement:"left",children:e.jsx(w,{size:"small",style:{marginRight:3},icon:e.jsx(ye,{}),disabled:!(s!=null&&s.canManage),onClick:()=>y(s),danger:!0})}),e.jsx(K,{title:"Are you sure to remove this Education Level?",onConfirm:()=>ne(s==null?void 0:s.id),onCancel:()=>{},okText:"Yes",cancelText:"No",disabled:!(s!=null&&s.canDelete),overlayStyle:{zIndex:9999},children:e.jsx(w,{size:"small",icon:e.jsx(re,{}),disabled:!(s!=null&&s.canDelete),danger:!0})})]})}];return e.jsxs(e.Fragment,{children:[e.jsxs(O,{style:{marginTop:10},children:[e.jsx(D,{span:16,children:e.jsx(m,{layout:"vertical",form:f,onFinish:h=>{q(h.key),j.length=0,B(1,h.key)},children:e.jsx(m.Item,{name:"key",children:e.jsx(_,{size:"large",placeholder:"Search ...",prefix:e.jsx(J,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(D,{span:8,style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(R,{title:"Add New Education Level",color:"green",children:e.jsx(w,{icon:e.jsx(U,{}),size:"large",danger:!0,onClick:()=>p(!0),children:"Add"})})})]}),e.jsx($,{loading:l,columns:H,dataSource:j,pagination:{onChange:(h,s)=>{F(s),B(h,T,s)},total:i,pageSize:I,position:["bottomCenter"],showQuickJumper:!1},scroll:{x:!0,y:"calc(100vh - 300px)"}}),e.jsx(de,{title:"Adding Education Levels",width:"35vw",anchor:"right",onClose:h=>p(h),open:C,children:e.jsx(Ce,{schoolExamination:a.schoolExamination,onAdd:P,onAddAll:M,randKey:Math.random()})}),e.jsx(de,{title:((o=(u=c==null?void 0:c.schoolEducationLevel)==null?void 0:u.educationLevel)==null?void 0:o.name)+" => "+((L=c==null?void 0:c.schoolExamination)==null?void 0:L.name)+" => Subjects",destroyOnClose:!0,width:"45vw",anchor:"right",onClose:h=>b(h),open:g,children:e.jsx(Ie,{level:c})})]})},{Option:he}=G;let Y=[];for(let a=0;a<5;a++)Y.push(V().year()+a),Y.push(V().year()-a);Y=Y.sort((a,c)=>a-c);Y=Y.filter((a,c)=>Y.indexOf(a)===c);const ke=a=>{const[c,E]=n.useState(!0),[j,S]=n.useState([]),[I]=m.useForm(),[F,T]=n.useState(""),q=async t=>{const{data:l}=await A.custom({url:"",method:"post",meta:{operation:"updateSchoolExamination",variables:{id:{value:t.id,type:"Int",required:!0},examinationTypeId:{value:t.examination_type_id,type:"Int",required:!0},name:{value:t.name,type:"String",required:!0},description:{value:t.description,type:"String",required:!1},startDate:{value:t.start_date,type:"String",required:!1},endDate:{value:t.end_date,type:"String",required:!1},year:{value:t.year,type:"Int",required:!1}},fields:["success","message",{schoolExamination:["id","name",{examinationType:["id","name"]},"description","year","startDate","endDate","isActive","created","updated","canEdit","canDelete","canManage"]}]}}).catch(v=>(x.error("Error occured while Creating School Examination"),{data:null})).then(v=>v);l&&(l.success?(x.success(l.message),a.onFinish(l.schoolExamination)):x.error(l.message))},i=async(t,l="")=>{E(!0);const{data:v}=await A.custom({url:"",method:"get",meta:{operation:"examinationsTypes",variables:{page:{value:t,type:"Int",required:!0},key:{value:l,type:"String",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","code","description","startDate","endDate","isActive","created","updated","canEdit","canDelete","canManage"]}]}}).catch(f=>(x.error("Error occured while Examinations Types"),{data:null})).then(f=>f);v&&S([...v.results]),E(!1)};return n.useEffect(()=>{i(1)},[a.randKey]),e.jsx(e.Fragment,{children:e.jsx(xe,{spinning:c,children:e.jsxs(m,{layout:"vertical",form:I,onFinish:t=>{t.id=a.examination.id,t.description=F,q(t)},requiredMark:!0,initialValues:{id:a.examination.id,name:a.examination.name,description:a.examination.description,start_date:V(a.examination.startDate),end_date:V(a.examination.endDate),examination_type_id:a.examination.examinationType.id,year:a.examination.year},children:[e.jsx(m.Item,{name:"examination_type_id",label:"Examination Type",rules:[{required:!0,type:"integer",message:"Please choose Examination Type..."}],children:e.jsx(G,{size:"large",showSearch:!0,placeholder:"Select a School Type",optionFilterProp:"children",onChange:t=>{},onSearch:t=>{},filterOption:(t,l)=>l.children.toLowerCase().includes(t.toLowerCase()),dropdownStyle:{zIndex:9999},children:j.map((t,l)=>e.jsx(he,{value:t.id,children:t.name}))})}),e.jsx(m.Item,{name:"name",label:"Name",rules:[{required:!0,type:"string",message:"Please input Name"}],children:e.jsx(_,{size:"large",placeholder:"Enter Name ..."})}),e.jsx(m.Item,{name:"year",label:"Year",rules:[{required:!0,type:"integer",message:"Please choose Year..."}],children:e.jsx(G,{size:"large",showSearch:!0,placeholder:"Select a Year",optionFilterProp:"children",onChange:t=>{},onSearch:t=>{},filterOption:(t,l)=>l.children.toLowerCase().includes(t.toLowerCase()),dropdownStyle:{zIndex:9999},children:Y.map((t,l)=>e.jsx(he,{value:t,children:t}))})}),e.jsxs(O,{children:[e.jsx(D,{span:12,children:e.jsx(m.Item,{name:"start_date",label:"Start Date",rules:[{required:!1,type:"date",message:"Please input Start Date"}],children:e.jsx(ee,{onChange:()=>{},style:{width:"100%"},popupStyle:{zIndex:9999}})})}),e.jsx(D,{span:12,children:e.jsx(m.Item,{name:"end_date",label:"End Date",rules:[{required:!1,type:"date",message:"Please input End Date"}],children:e.jsx(ee,{onChange:()=>{},style:{width:"100%"},popupStyle:{zIndex:9999}})})})]}),e.jsxs("div",{style:{marginBottom:10},children:[e.jsx("h3",{children:"Description"}),e.jsx(me.CKEditor,{editor:pe,data:F,onReady:t=>{t.editing.view.change(l=>{l.setStyle("min-height","100px",t.editing.view.document.getRoot())})},onChange:(t,l)=>{const v=l.getData();T(v)},onBlur:(t,l)=>{},onFocus:(t,l)=>{},config:{toolbar:{items:["bold","italic","strikethrough","underline","code","subscript","superscript","removeFormat","|","bulletedList","numberedList","todoList","|","outdent","indent","|","-","fontSize","fontFamily","fontColor","fontBackgroundColor","highlight","|","alignment","|","EmojiPanel"],shouldNotGroupWhenFull:!0},fontFamily:{options:["default","Arial, Helvetica, sans-serif","Courier New, Courier, monospace","Georgia, serif","Lucida Sans Unicode, Lucida Grande, sans-serif","Tahoma, Geneva, sans-serif","Times New Roman, Times, serif","Trebuchet MS, Helvetica, sans-serif","Verdana, Geneva, sans-serif"],supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0}}})]}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(w,{type:"primary",size:"large",htmlType:"submit",children:"Save"})})]})})})},Ae=a=>{const[c,E]=n.useState(),[j,S]=n.useState([]),[I,F]=n.useState(0),[T,q]=n.useState(!0),[i,t]=n.useState(20),[l,v]=n.useState(""),[f]=m.useForm(),[N]=m.useForm();te.useBreakpoint().lg;const[p,g]=n.useState(!1),[b,r]=n.useState(!1),[d,y]=n.useState(!1),z=u=>{E(u),r(!0)},M=u=>{E(u),y(!0)},P=async u=>{S([u,...j]),N.resetFields(),g(!1)},ae=async u=>{S(j.map(o=>o.id===u.id?u:o)),r(!1)},ne=async u=>{const{data:o}=await A.custom({url:"",method:"post",meta:{operation:"deleteSchoolExamination",variables:{schoolExaminationId:{value:u,type:"Int",required:!0}},fields:["success","message"]}}).catch(L=>(x.error("Error occured while deleting Examination"),{data:null})).then(L=>L);o&&(o.success?(x.success(o.message),S(j.filter(L=>L.id.toString()!==u.toString()))):x.error(o.message))},B=[{title:"Name",dataIndex:"name",fixed:!0,render:(u,o,L)=>e.jsx("span",{children:e.jsx("a",{children:o.name})})},{title:"Year",dataIndex:"year",fixed:!0,render:(u,o,L)=>e.jsx("span",{children:e.jsx("a",{children:o.year})})},{title:"Exam Type",dataIndex:"examinationType",fixed:!0,render:(u,o,L)=>e.jsx("span",{children:o.examinationType.name})},{title:"Start Date",dataIndex:"startDate",fixed:!0,render:(u,o,L)=>e.jsx("span",{children:ce(o.startDate).format("YYYY-MM-DD")})},{title:"End Date",dataIndex:"endDate",fixed:!0,render:(u,o,L)=>e.jsx("span",{children:ce(o.endDate).format("YYYY-MM-DD")})},{title:"Date Created",dataIndex:"created",render:(u,o,L)=>e.jsx(e.Fragment,{children:e.jsx("span",{children:e.jsx(ge,{date:new Date(o.created)})})})},{title:"Status",dataIndex:"isActive",render:(u,o,L)=>e.jsx("a",{children:o!=null&&o.isActive?e.jsx("span",{style:{color:"green"},children:"Active"}):e.jsx("span",{style:{color:"red"},children:"Inactive"})})},{title:"",dataIndex:"action",render:(u,o,L)=>e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(fe,{trigger:["click"],overlay:e.jsxs(Z,{children:[e.jsx(Z.Item,{icon:e.jsx(re,{style:{color:"red"}}),children:e.jsx(K,{placement:"topLeft",title:`Are you sure you want to delete ${o.name} Examination?`,onConfirm:()=>ne(parseInt(o.id)),okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx("a",{rel:"noopener noreferrer",children:"Delete"})})}),e.jsx(Z.Item,{icon:e.jsx(ve,{style:{color:"red"}}),disabled:!o.canEdit,onClick:()=>z(o),children:e.jsx("a",{rel:"noopener noreferrer",children:"Edit"})}),e.jsx(Z.Item,{icon:e.jsx(ye,{style:{color:"red"}}),disabled:!o.canManage,onClick:()=>M(o),children:e.jsx("a",{rel:"noopener noreferrer",children:"Education Levels"})})]}),overlayStyle:{zIndex:9999},children:e.jsx("a",{className:"ant-dropdown-link",onClick:h=>h.preventDefault(),children:e.jsx(Se,{style:{color:"red",fontSize:28,fontWeight:"bold"}})})})})}],H=async(u,o="",L=20)=>{q(!0);const{data:h}=await A.custom({url:"",method:"get",meta:{operation:"schoolExaminations",variables:{page:{value:u,type:"Int",required:!0},key:{value:o,type:"String",required:!1},pageSize:{value:L,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","description","year","startDate","endDate",{school:["id","name"]},{examinationType:["id","name"]},"isActive","created","updated","canEdit","canDelete","canManage"]}]}}).catch(s=>(x.error("Error occured while fetching Examinations"),{data:null})).then(s=>s);h&&(F(h.total),S([...h.results])),q(!1)};return n.useEffect(()=>{H(1,"",20)},[]),e.jsxs(e.Fragment,{children:[e.jsxs(O,{style:{marginTop:10},children:[e.jsx(D,{span:12,children:e.jsx(m,{layout:"vertical",form:f,onFinish:u=>{v(u.key),j.length=0,H(1,u.key)},children:e.jsx(m.Item,{name:"key",children:e.jsx(_,{size:"large",placeholder:"Search ...",prefix:e.jsx(J,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(D,{span:12,children:e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(R,{title:"Create Examination",children:e.jsx(w,{icon:e.jsx(U,{}),size:"large",onClick:()=>g(!0),danger:!0,children:"Add"})})})})]}),e.jsx($,{loading:T,columns:B,dataSource:j,pagination:{onChange:(u,o)=>{t(o),H(u,l,o)},total:I,pageSize:i,position:["bottomCenter"],showQuickJumper:!1},scroll:{x:!0}}),e.jsx(X,{title:"Creating Examination",open:p,onClose:u=>g(u),width:"30vw",children:e.jsx(Ee,{form:N,onFinish:P})}),e.jsx(X,{title:"Editting Examination",open:b,onClose:u=>r(u),width:"30vw",children:e.jsx(ke,{onFinish:ae,examination:c})}),e.jsx(X,{title:e.jsxs(e.Fragment,{children:[e.jsx("span",{style:{color:"green"},children:c==null?void 0:c.name}),e.jsx("span",{children:" Education Levels"})]}),open:d,onClose:u=>y(u),width:"50vw",children:e.jsx(Le,{schoolExamination:c,randKey:Math.random()})})]})};export{Ae as S};
