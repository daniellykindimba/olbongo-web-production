import{r as a,q as r,t as se,j as e,R as O,C,I as U,v as H,a7 as W,Y as F,aj as _,as as re,ab as J,bW as ne,P,Q as D,x as Z,b8 as T,es as le,ae as ie,y as oe,af as de,w as ce,b2 as ue,b3 as pe,aQ as ee,W as he,bf as me,al as G,a2 as te}from"./index-1fe25657.js";import{S as ge}from"./index-e4a02108.js";import{T as X}from"./Table-dcc1f9df.js";import"./index-c40f71dd.js";import"./index-e435ee25.js";const xe=s=>{var M;const[o,j]=a.useState(!1),[d]=r.useForm(),[L,q]=a.useState([]),[x,w]=a.useState(null),[k,N]=a.useState(!1),[p,m]=a.useState(!1),[S,y]=a.useState(1),[i,I]=a.useState(0),[n,l]=a.useState(!1);se();const f=c=>{w(c),l(!0)},E=async(c,A="")=>{j(!0);const{data:b}=await P.custom({url:"",method:"get",meta:{operation:"pastPapersSearch",variables:{page:{value:c,type:"Int",required:!0},key:{value:A,type:"String",required:!1},pageSize:{value:20,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","title","description","year","doc","created","updated","canEdit","canManage","canDelete",{school:["id","name"]},{subject:["id","name"]},{schoolType:["id","name"]},{educationLevel:["id","name"]},{examinationType:["id","name"]},{author:["id"]}]}]}}).catch(z=>(console.error(z),D.error("Error getting Books"),{data:null})).then(z=>z);j(!1),console.log(b),b&&(q(b.results),I(b.total),y(b.page),N(b.hasNext),m(b.hasPrev))};return a.useEffect(()=>{E(1)},[s.randKey,s.school,s.subject,s.year,s.educationLevel,s.examinationType,s.national]),e.jsxs(e.Fragment,{children:[e.jsx(O,{style:{display:"flex",justifyContent:"center"},children:e.jsx(C,{span:12,children:e.jsx(r,{layout:"vertical",form:d,onFinish:c=>{},children:e.jsx(r.Item,{name:"key",children:e.jsx(U,{size:"large",placeholder:"Search Past Paper(s)...",prefix:e.jsx(H,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx("div",{children:e.jsx(W,{loading:!1,itemLayout:"horizontal",dataSource:L,renderItem:c=>{var A,b,z,Y;return e.jsxs(e.Fragment,{children:[e.jsx(W.Item,{actions:[e.jsx(F,{danger:!0,onClick:()=>f(c),children:"View/Read"},"list-loadmore-more")],children:e.jsx(W.Item.Meta,{title:e.jsx("a",{onClick:()=>f(c),children:c.title}),description:e.jsxs(e.Fragment,{children:[c.school&&e.jsxs(_,{children:["School: ",(A=c.school)==null?void 0:A.name]}),c.subject&&e.jsxs(_,{children:["Subject: ",(b=c.subject)==null?void 0:b.name]}),c.year&&e.jsxs(_,{children:["Year: ",c.year]}),c.examinationType&&e.jsxs(_,{children:["Examination Type: ",(z=c.examinationType)==null?void 0:z.name]}),c.educationLevel&&e.jsxs(_,{children:["Education Level: ",(Y=c.educationLevel)==null?void 0:Y.name]})]})})}),e.jsx(re,{})]})}})}),e.jsx(J,{anchor:"right",open:n,onClose:c=>l(c),title:e.jsxs("b",{children:[x==null?void 0:x.title," - ",(M=x==null?void 0:x.educationLevel)==null?void 0:M.name," - ",x==null?void 0:x.year]}),width:"80vw",children:e.jsx(e.Fragment,{children:e.jsx(ae,{url:x==null?void 0:x.doc})})})]})},ae=({url:s})=>{const[o,j]=a.useState(!0),d=()=>{j(!0),setTimeout(()=>{j(!1)},3e3)};return e.jsxs(e.Fragment,{children:[o&&e.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"89vh"},children:[e.jsx(ne,{color:"secondary"}),e.jsx("h4",{children:"Loading..."})]}),e.jsx("iframe",{src:s+"#toolbar=0",style:{width:"100%",height:"89vh",display:o?"none":"block"},onLoad:d})]})},{Option:R}=T;let B=[];for(let s=1960;s<=new Date().getFullYear();s++)B.push(s);B=B.reverse();const ye=s=>{const[o,j]=a.useState([]),[d,L]=a.useState([]),[q,x]=a.useState([]),[w,k]=a.useState([]),[N,p]=a.useState(),[m,S]=a.useState(),[y,i]=a.useState(),[I,n]=a.useState(),[l,f]=a.useState(),[E,M]=a.useState(!1),[c]=r.useForm(),A=async(t,g="",v=25)=>{const{data:h}=await P.custom({url:"",method:"get",meta:{operation:"subjects",variables:{page:{value:t,type:"Int",required:!0},key:{value:g,type:"String",required:!1},pageSize:{value:v,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","isActive","created","updated","canDelete","canManage"]}]}}).catch(u=>({data:null})).then(u=>u);h&&k(h.results)},b=async(t,g="",v=25)=>{const{data:h}=await P.custom({url:"",method:"get",meta:{operation:"educationLevels",variables:{page:{value:t,type:"Int",required:!0},key:{value:g,type:"String",required:!1},pageSize:{value:v,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","isActive","created","updated","canDelete","canManage"]}]}}).catch(u=>({data:null})).then(u=>u);h&&x(h.results)},z=async(t,g="",v=25)=>{const{data:h}=await P.custom({url:"",method:"get",meta:{operation:"examinationsTypes",variables:{page:{value:t,type:"Int",required:!0},key:{value:g,type:"String",required:!1},pageSize:{value:v,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","isActive","created","updated","canDelete","canManage"]}]}}).catch(u=>({data:null})).then(u=>u);h&&j(h.results)},Y=async(t,g="",v=25)=>{const{data:h}=await P.custom({url:"",method:"get",meta:{operation:"schools",variables:{page:{value:t,type:"Int",required:!0},key:{value:g,type:"String",required:!1},pageSize:{value:v,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","serialNumber","isActive","created","updated","canDelete","canManage"]}]}}).catch(u=>({data:null})).then(u=>u);h&&L(h.results)};return a.useEffect(()=>{Y(1),z(1),b(1),A(1)},[s.randKey]),e.jsx(e.Fragment,{children:e.jsxs(O,{children:[e.jsx(C,{span:8,children:e.jsx(Z,{title:e.jsxs(e.Fragment,{children:[e.jsx("span",{style:{fontSize:16},children:"Past Papers Search Filter"}),e.jsxs("span",{style:{float:"right"},children:[e.jsx("span",{style:{marginRight:3,fontSize:16,fontWeight:"bolder"},children:"National Examinations"}),e.jsx(ge,{size:"default",onChange:t=>{M(t)}})]})]}),children:e.jsxs(r,{layout:"vertical",form:c,onFinish:t=>{f(t.educationLevelId),S(t.subjectId),n(t.examinationTypeId),p(t.schoolId),i(t.year),M(E)},children:[!E&&e.jsx(r.Item,{name:"examinationTypeId",label:"Examination Type",children:e.jsx(T,{size:"large",onChange:t=>{},dropdownStyle:{zIndex:9999},children:o.map(t=>e.jsx(R,{value:t.id,children:t.name},"examinationType_"+t.id))})}),e.jsx(r.Item,{name:"educationLevelId",label:"Education Level",rules:[{required:!0,type:"number",message:"Please input an Education Level"}],children:e.jsx(T,{size:"large",showSearch:!0,placeholder:"Select an Education Level...",filterOption:!1,onSearch:t=>{b(1,t)},onChange:t=>{},dropdownStyle:{zIndex:9999},children:q.map(t=>e.jsx(R,{value:parseInt(t.id.toString()),children:t.name},"educationLevel_"+t.id.toString()))})}),e.jsx(r.Item,{name:"subjectId",label:"Subject",rules:[{required:!0,type:"number",message:"Please input a Subject"}],children:e.jsx(T,{size:"large",placeholder:"Select a Subject...",showSearch:!0,filterOption:!1,onSearch:t=>{A(1,t)},onChange:t=>{},dropdownStyle:{zIndex:9999},children:w.map(t=>e.jsx(R,{value:parseInt(t.id.toString()),children:t.name},"subject_"+t.id.toString()))})}),e.jsx(r.Item,{name:"year",label:"Year",rules:[{required:!0,type:"number",message:"Please input a valid year"}],children:e.jsx(T,{size:"large",filterOption:!0,showSearch:!0,onChange:t=>{},dropdownStyle:{zIndex:9999},children:B.map(t=>e.jsx(R,{value:t,children:t},"year_"+t))})}),!E&&e.jsx(r.Item,{name:"schoolId",label:"School",children:e.jsx(T,{size:"large",filterOption:!1,showSearch:!0,onSearch:t=>{Y(1,t)},onChange:t=>{},dropdownStyle:{zIndex:9999},children:d.map(t=>e.jsxs(R,{value:parseInt(t.id.toString()),children:[t.name," ",e.jsx("span",{style:{marginLeft:5},children:e.jsx(_,{color:"red",children:t.serialNumber})})]},"school_"+t.id.toString()))})}),e.jsxs(r.Item,{children:[e.jsx(F,{style:{float:"left"},size:"large",icon:e.jsx(le,{}),danger:!0,onClick:()=>{c.resetFields(),f(null),S(null),n(null),p(null),i(null),M(!1)},children:"Clear"}),e.jsx(F,{style:{float:"right"},htmlType:"submit",size:"large",icon:e.jsx(H,{}),danger:!0,children:"Search"})]})]})})}),e.jsx(C,{span:16,children:e.jsx(Z,{title:"Search Results",style:{minHeight:"90vh"},children:e.jsx(xe,{school:N,educationLevel:l,subject:m,year:y,examinationType:I,national:E})})})]})})},je=()=>e.jsx("div",{style:{marginTop:10},children:e.jsx(ye,{})}),{Option:V}=T,fe=s=>Array.isArray(s)?s:s==null?void 0:s.fileList;let Q=[];for(let s=1960;s<=new Date().getFullYear();s++)Q.push(s);Q=Q.reverse();const ve=s=>{const[o]=r.useForm(),[j,d]=a.useState(!1),[L,q]=a.useState(!1);ie();const[x,w]=a.useState([]),[k,N]=a.useState([]),[p,m]=a.useState([]),[S,y]=a.useState([]),[i,I]=a.useState([]),[n,l]=a.useState(null);a.useState(),a.useState(),a.useState(),a.useState(),a.useState();const[f,E]=a.useState(!1),M=async(t,g="",v=25)=>{const{data:h}=await P.custom({url:"",method:"get",meta:{operation:"schoolTypes",variables:{page:{value:t,type:"Int",required:!0},key:{value:g,type:"String",required:!1},pageSize:{value:v,type:"Int",required:!1},showAll:{value:!0,type:"Boolean",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","isActive","created","updated","canDelete","canManage"]}]}}).catch(u=>({data:null})).then(u=>u);h&&w(h.results)},c=async(t,g="",v=25)=>{const{data:h}=await P.custom({url:"",method:"get",meta:{operation:"subjects",variables:{page:{value:t,type:"Int",required:!0},key:{value:g,type:"String",required:!1},pageSize:{value:v,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","isActive","created","updated","canDelete","canManage"]}]}}).catch(u=>({data:null})).then(u=>u);h&&I(h.results)},A=async(t,g="",v=25,h=[])=>{const{data:u}=await P.custom({url:"",method:"get",meta:{operation:"educationLevels",variables:{page:{value:t,type:"Int",required:!0},key:{value:g,type:"String",required:!1},pageSize:{value:v,type:"Int",required:!1},schoolTypes:{value:h,type:"[Int]",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","isActive","created","updated","canDelete","canManage"]}]}}).catch(K=>({data:null})).then(K=>K);u&&y(u.results)},b=async(t,g="",v=25)=>{const{data:h}=await P.custom({url:"",method:"get",meta:{operation:"examinationsTypes",variables:{page:{value:t,type:"Int",required:!0},key:{value:g,type:"String",required:!1},pageSize:{value:v,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","isActive","created","updated","canDelete","canManage"]}]}}).catch(u=>({data:null})).then(u=>u);h&&N(h.results)},z=async(t,g="",v=25,h=[])=>{const{data:u}=await P.custom({url:"",method:"get",meta:{operation:"schools",variables:{page:{value:t,type:"Int",required:!0},key:{value:g,type:"String",required:!1},pageSize:{value:v,type:"Int",required:!1},schoolTypes:{value:h,type:"[Int]",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","serialNumber","isActive","created","updated","canDelete","canManage"]}]}}).catch(K=>({data:null})).then(K=>K);u&&m(u.results)},Y=async t=>{d(!0),q(!1);const{data:g}=await P.custom({url:"",method:"post",meta:{operation:"createPastPaper",variables:{title:{value:t.title,type:"String",required:!0},file:{value:t.file,type:"Upload",required:!0},schoolTypeId:{value:parseInt(t.schoolTypeId.toString()),type:"Int",required:!0},examinationTypeId:{value:parseInt(t.examinationTypeId.toString()),type:"Int",required:!1},subjectId:{value:t.subjectId,type:"Int",required:!0},educationLevelId:{value:parseInt(t.educationLevelId.toString()),type:"Int",required:!0},schoolId:{value:parseInt(t.schoolId.toString()),type:"Int",required:!1},year:{value:t.year,type:"Int",required:!0}},fields:["success","message",{pastPaper:["id","title","description","year","doc",{school:["id","name","serialNumber"]},{subject:["id","name"]},{examinationType:["id","name"]},{educationLevel:["id","name"]},{author:["id","fullName","firstName","middleName","lastName","email"]},"isActive","created","updated","canDelete","canManage"]}]}}).catch(v=>(D.error("Error creating past paper"),{data:null})).then(v=>v);g&&(g.success?(D.success(g.message),o.resetFields(),s.onFinish(g.pastPaper)):D.error(g.message)),d(!1)};return a.useEffect(()=>{M(1),z(1,"",25,[]),b(1),c(1)},[s.random]),L?e.jsx(e.Fragment,{children:e.jsx(oe,{direction:"vertical",style:{display:"flex",justifyContent:"center"},children:e.jsx(de,{message:"Success",description:e.jsx(e.Fragment,{children:e.jsx("p",{children:"File uploaded successfully"})}),action:[e.jsx(F,{onClick:()=>q(!1),children:"Upload another file(s)"})],type:"success"})})}):e.jsx(e.Fragment,{children:e.jsx(ce,{spinning:j,children:e.jsxs(r,{layout:"vertical",form:o,onFinish:t=>{Y(t)},requiredMark:!0,autoComplete:"off",children:[e.jsxs(O,{children:[e.jsxs(C,{span:12,style:{padding:5},children:[e.jsx(r.Item,{name:"title",label:"Examination Title",rules:[{required:!0,message:"Please input an Examination Title"}],children:e.jsx(U,{size:"large",placeholder:"Examination Title"})}),e.jsx(r.Item,{name:"schoolTypeId",label:"School Type",rules:[{required:!0,message:"Please select a school type"}],children:e.jsx(T,{size:"large",onChange:t=>{l(t),A(1,"",100,[parseInt(t.toString())]),z(1,"",100,[parseInt(t.toString())]),o.resetFields(["educationLevelId","schoolId","subjectId"])},dropdownStyle:{zIndex:9999},children:x.map(t=>e.jsx(V,{value:t.id,children:t.name},"schoolType_"+t.id))})}),!f&&e.jsx(r.Item,{name:"examinationTypeId",label:"Examination Type",children:e.jsx(T,{size:"large",onChange:t=>{},dropdownStyle:{zIndex:9999},children:k.map(t=>e.jsx(V,{value:t.id,children:t.name},"examinationType_"+t.id))})})]}),e.jsxs(C,{span:12,style:{padding:5},children:[e.jsx(r.Item,{name:"educationLevelId",label:"Education Level",rules:[{required:!0,type:"number",message:"Please input an Education Level"}],children:e.jsx(T,{disabled:n===null,size:"large",showSearch:!0,placeholder:"Select an Education Level...",filterOption:!1,onSearch:t=>{A(1,t)},onChange:t=>{},dropdownStyle:{zIndex:9999},children:S.map(t=>e.jsx(V,{value:parseInt(t.id.toString()),children:t.name},"educationLevel_"+t.id.toString()))})}),e.jsx(r.Item,{name:"subjectId",label:"Subject",rules:[{required:!0,type:"number",message:"Please input a Subject"}],children:e.jsx(T,{size:"large",placeholder:"Select a Subject...",showSearch:!0,filterOption:!1,onSearch:t=>{c(1,t)},onChange:t=>{},dropdownStyle:{zIndex:9999},children:i.map(t=>e.jsx(V,{value:parseInt(t.id.toString()),children:t.name},"subject_"+t.id.toString()))})}),e.jsx(r.Item,{name:"year",label:"Year",rules:[{required:!0,type:"number",message:"Please input a valid year"}],children:e.jsx(T,{size:"large",filterOption:!0,showSearch:!0,onChange:t=>{},dropdownStyle:{zIndex:9999},children:Q.map(t=>e.jsx(V,{value:t,children:t},"year_"+t))})}),!f&&e.jsx(r.Item,{name:"schoolId",label:"School",children:e.jsx(T,{disabled:n===null,size:"large",filterOption:!1,showSearch:!0,onSearch:t=>{z(1,t)},onChange:t=>{},dropdownStyle:{zIndex:9999},children:p.map(t=>e.jsxs(V,{value:parseInt(t.id.toString()),children:[t.name," ",e.jsx("span",{style:{marginLeft:5},children:e.jsx(_,{color:"red",children:t.serialNumber})})]},"school_"+t.id.toString()))})})]}),e.jsx(C,{span:24,children:e.jsx(r.Item,{label:"Pick Past Paper File (PDF)",children:e.jsx(r.Item,{name:"file",valuePropName:"fileList",getValueFromEvent:fe,noStyle:!0,rules:[{required:!0,type:"array",message:"Please upload students excel file"}],children:e.jsxs(ue.Dragger,{name:"file",accept:".pdf",multiple:!0,beforeUpload:()=>!1,children:[e.jsx("p",{className:"ant-upload-drag-icon",children:e.jsx(pe,{})}),e.jsx("p",{className:"ant-upload-text",children:"Click or drag file to this area to upload"}),e.jsx("p",{className:"ant-upload-hint",children:"Support for a single or bulk upload."})]})})})})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx(F,{size:"large",loading:j,onClick:()=>{l(null),o.resetFields()},danger:!0,children:"Reset"}),e.jsx(F,{type:"primary",size:"large",htmlType:"submit",loading:j,children:"Upload"})]})]})})})},Se=s=>{var I;const[o,j]=a.useState([]),[d,L]=a.useState(null),[q]=r.useForm(),[x,w]=a.useState(!1),[k,N]=a.useState(!1),p=n=>{L(n),N(!0)},m=async(n,l="",f=25)=>{const{data:E}=await P.custom({url:"",method:"get",meta:{operation:"pastPapers",variables:{page:{value:n,type:"Int",required:!0},key:{value:l,type:"String",required:!1},pageSize:{value:f,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","title","description","year","doc",{school:["id","name","serialNumber"]},{subject:["id","name"]},{examinationType:["id","name"]},{educationLevel:["id","name"]},{author:["id","fullName","firstName","middleName","lastName","email"]},"isActive","created","updated","canDelete","canManage"]}]}}).catch(M=>({data:null})).then(M=>M);E&&j(E.results)},S=n=>{j([n,...o])},y=async n=>{const{data:l}=await P.custom({url:"",method:"post",meta:{operation:"deletePastPaper",variables:{id:{value:n,type:"Int",required:!0}},fields:["success","message"]}}).catch(f=>({data:null})).then(f=>f);l&&(l.success?(D.success(l.message),j(o.filter(f=>parseInt(f.id.toString())!==n))):D.error(l.message))},i=[{title:"Title",dataIndex:"title",key:"title",render:(n,l,f)=>e.jsxs("span",{children:[e.jsx("a",{children:l.title}),e.jsx(_,{color:"red",style:{marginLeft:5},children:l.year})]})},{title:"Education Level",dataIndex:"educationLevel",key:"educationLEvel",render:(n,l,f)=>e.jsx("span",{children:l.educationLevel.name})},{title:"Examination Type",dataIndex:"examinationType",key:"examinationType",render:(n,l,f)=>e.jsx("span",{children:l.examinationType.name})},{title:"Document",dataIndex:"doc",key:"doc",render:(n,l,f)=>e.jsx("span",{children:e.jsx(F,{icon:e.jsx(me,{}),style:{float:"left"},danger:!0,onClick:()=>p(l),children:"View"})})},{title:"",key:"action",render:(n,l,f)=>e.jsx("span",{children:e.jsx(G,{title:"Are you sure delete this manager?",placement:"topLeft",onConfirm:()=>y(parseInt(l.id.toString())),onCancel:()=>{},okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(F,{icon:e.jsx(te,{}),style:{float:"right"},danger:!0})})})}];return a.useEffect(()=>{m(1)},[s.randKey]),e.jsxs(e.Fragment,{children:[e.jsxs(O,{style:{marginTop:10},children:[e.jsx(C,{span:10,children:e.jsx(r,{layout:"vertical",form:q,onFinish:n=>{o.length=0,m(1,n.key)},children:e.jsx(r.Item,{name:"key",children:e.jsx(U,{size:"large",placeholder:"Search ...",prefix:e.jsx(H,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(C,{span:14,style:{display:"flex",justifyContent:"end"},children:e.jsx(F,{size:"large",icon:e.jsx(ee,{}),onClick:()=>w(!0),danger:!0,children:"Create/Add Past Paper"})})]}),e.jsx(O,{children:e.jsx(C,{span:24,children:e.jsx(X,{columns:i,dataSource:o})})}),e.jsx(he,{title:"Adding/Creating Past Paper",width:"80vw",open:x,onClose:n=>w(n),children:e.jsx(ve,{onFinish:S})}),e.jsx(J,{anchor:"right",open:k,onClose:n=>N(n),title:e.jsxs("b",{children:[d==null?void 0:d.title," - ",(I=d==null?void 0:d.educationLevel)==null?void 0:I.name," - ",d==null?void 0:d.year]}),width:"80vw",children:e.jsx(e.Fragment,{children:e.jsx(ae,{url:d==null?void 0:d.doc})})})]})},Ie=()=>e.jsx("div",{style:{marginTop:10},children:e.jsx(Se,{})}),Pe=()=>e.jsx(Ie,{}),be=s=>{const[o,j]=a.useState(0),[d,L]=a.useState(50),[q,x]=a.useState(""),[w,k]=a.useState([]),[N]=r.useForm(),p=async(y,i="",I=50)=>{const{data:n}=await P.custom({url:"",method:"get",meta:{operation:"pastPapersManagersToAdd",variables:{page:{value:y,type:"Int",required:!0},key:{value:i,type:"String",required:!1},pageSize:{value:I,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","firstName","middleName","lastName","fullName","dp","email","isActive","created","updated","canDelete","canManage"]}]}}).catch(l=>({data:null})).then(l=>l);n&&k(n.results)},m=async y=>{const{data:i}=await P.custom({url:"",method:"post",meta:{operation:"addPastPaperManager",variables:{id:{value:y,type:"Int",required:!0}},fields:["success","message",{pastPaperManager:["id",{manager:["id","firstName","middleName","lastName","fullName","dp","email","isActive","created","updated","canDelete","canManage"]},"created","updated","canDelete","canManage","canEdit","isActive"]}]}}).catch(I=>({data:null})).then(I=>I);i&&(i.success?(D.success(i.message),k(w.filter(I=>parseInt(I.id.toString())!==y)),s.onAdd(i.pastPaperManager)):D.error(i.message))},S=[{title:"Full Name",dataIndex:"fullName",key:"fullName",render:(y,i,I)=>e.jsx("span",{children:e.jsx("a",{children:i.fullName})})},{title:"Email",dataIndex:"email",key:"email",render:(y,i,I)=>e.jsx("span",{children:e.jsx("a",{children:i.email})})},{title:"Action",key:"action",render:(y,i,I)=>e.jsx(G,{title:"Add Manager?",placement:"topLeft",onConfirm:()=>m(parseInt(i.id.toString())),onCancel:()=>{},okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(F,{danger:!0,children:"Add"})})}];return a.useEffect(()=>{p(1,"",50)},[s.randKey]),e.jsxs(e.Fragment,{children:[e.jsx(O,{style:{marginTop:10},children:e.jsx(C,{span:10,children:e.jsx(r,{layout:"vertical",form:N,onFinish:y=>{w.length=0,p(1,y.key,d)},children:e.jsx(r.Item,{name:"key",children:e.jsx(U,{size:"large",placeholder:"Search ...",prefix:e.jsx(H,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx(O,{children:e.jsx(C,{span:24,children:e.jsx(X,{columns:S,dataSource:w,scroll:{x:!0,y:"calc(100vh - 280px)"},pagination:{onChange:(y,i)=>{L(i),p(y,q,i)},total:o,pageSize:d,position:["bottomCenter"],showQuickJumper:!0}})})})]})};let $=[];for(let s=1960;s<=new Date().getFullYear();s++)$.push(s);$=$.reverse();const we=s=>{const[o,j]=a.useState([]),[d]=r.useForm(),[L,q]=a.useState(!1),x=async(p,m="",S=25)=>{const{data:y}=await P.custom({url:"",method:"get",meta:{operation:"pastPapersManagers",variables:{page:{value:p,type:"Int",required:!0},key:{value:m,type:"String",required:!1},pageSize:{value:S,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id",{manager:["id","firstName","middleName","lastName","fullName","dp","email"]},"isActive","created","updated","canDelete","canManage"]}]}}).catch(i=>({data:null})).then(i=>i);y&&j(y.results)},w=p=>{j([p,...o])},k=async p=>{const{data:m}=await P.custom({url:"",method:"post",meta:{operation:"deletePastPaperManager",variables:{id:{value:p,type:"Int",required:!0}},fields:["success","message"]}}).catch(S=>({data:null})).then(S=>S);m&&(m.success?(D.success(m.message),j(o.filter(S=>parseInt(S.id.toString())!==p))):D.error(m.message))},N=[{title:"Full Name",dataIndex:"fullName",key:"fullName",render:(p,m,S)=>e.jsx("span",{children:e.jsx("a",{children:m.manager.fullName})})},{title:"Email",dataIndex:"email",key:"email",render:(p,m,S)=>e.jsx("span",{children:e.jsx("a",{children:m.manager.email})})},{title:"",key:"action",render:(p,m,S)=>e.jsx("span",{children:e.jsx(G,{title:"Are you sure delete this manager?",placement:"topLeft",onConfirm:()=>k(parseInt(m.id.toString())),onCancel:()=>{},okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(F,{icon:e.jsx(te,{}),style:{float:"right"},danger:!0})})})}];return a.useEffect(()=>{x(1)},[s.randKey]),e.jsxs(e.Fragment,{children:[e.jsxs(O,{style:{marginTop:10},children:[e.jsx(C,{span:10,children:e.jsx(r,{layout:"vertical",form:d,onFinish:p=>{o.length=0,x(1,p.key)},children:e.jsx(r.Item,{name:"key",children:e.jsx(U,{size:"large",placeholder:"Search ...",prefix:e.jsx(H,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(C,{span:14,style:{display:"flex",justifyContent:"end"},children:e.jsx(F,{size:"large",icon:e.jsx(ee,{}),onClick:()=>q(!0),danger:!0,children:"Create Manager"})})]}),e.jsx(O,{children:e.jsx(C,{span:24,children:e.jsx(X,{columns:N,dataSource:o})})}),e.jsx(J,{title:"Adding Past Papers Managers",anchor:"right",width:"40vw",onClose:p=>q(p),open:L,children:e.jsx(be,{randKey:Math.random(),onAdd:w})})]})},Ce=()=>e.jsx("div",{style:{marginTop:10},children:e.jsx(we,{})}),qe=()=>e.jsx(Ce,{}),ke=s=>{const{page:o}=s;return o==="PastPapersManagersPage"?e.jsx(qe,{}):o==="PastPapersManagementPage"?e.jsx(Pe,{}):o==="PastPapersHomePage"?e.jsx(je,{}):e.jsx("div",{children:"Page not found ..."})};export{ke as PastPapersPages};
