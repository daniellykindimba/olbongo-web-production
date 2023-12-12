import{eC as se,j as e,r as a,F as n,q as re,s as _,C as q,I as R,S as U,a3 as G,B as z,T as O,a$ as ne,aj as le,a0 as Q,bv as ie,G as b,H as N,u as Z,as as T,e4 as oe,aV as de,x as ce,bj as ue,t as he,ab as pe,ac as me,v as ee,D as ge,aH as xe,a4 as W,a7 as te}from"./index-70789454.js";import{S as ye}from"./index-6d433b65.js";import{T as X}from"./Table-b2b477db.js";import"./index-d0df5b0f.js";import"./index-a8735f59.js";const je=se(e.jsx("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"}),"CloudDownload"),fe=s=>{var V;const[c,f]=a.useState(!1),[u]=n.useForm(),[F,w]=a.useState([]),[y,C]=a.useState(null),[M,k]=a.useState(!1),[p,g]=a.useState(!1),[I,j]=a.useState(1),[o,P]=a.useState(0),[l,i]=a.useState(!1);re();const v=r=>{C(r),i(!0)},A=async r=>{const{data:L}=await b.custom({url:"",method:"post",meta:{operation:"createPastPaperDownload",variables:{id:{value:r.id,type:"Int",required:!0}},fields:["success","message"]}}).catch(m=>(console.error(m),N.error("Error creating download"),{data:null})).then(m=>m);L?L.success?(w(F.map(m=>(m.id===r.id&&(m.downloads=m.downloads+1),m))),window.open(r.doc,"_blank")):N.error("Error creating download"):N.error("Error in downloading")},D=async(r,L="")=>{f(!0);const{data:m}=await b.custom({url:"",method:"get",meta:{operation:"pastPapersSearch",variables:{page:{value:r,type:"Int",required:!0},key:{value:L,type:"String",required:!1},pageSize:{value:20,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","title","description","year","doc","downloads","created","updated","canEdit","canManage","canDelete",{school:["id","name"]},{subject:["id","name"]},{schoolType:["id","name"]},{educationLevel:["id","name"]},{examinationType:["id","name"]},{author:["id"]}]}]}}).catch(E=>(console.error(E),N.error("Error getting Books"),{data:null})).then(E=>E);f(!1),console.log(m),m&&(w(m.results),P(m.total),j(m.page),k(m.hasNext),g(m.hasPrev))};return a.useEffect(()=>{D(1)},[s.randKey,s.school,s.subject,s.year,s.educationLevel,s.examinationType,s.national]),e.jsxs(e.Fragment,{children:[e.jsx(_,{style:{display:"flex",justifyContent:"center"},children:e.jsx(q,{span:12,children:e.jsx(n,{layout:"vertical",form:u,onFinish:r=>{},children:e.jsx(n.Item,{name:"key",children:e.jsx(R,{size:"large",placeholder:"Search Past Paper(s)...",prefix:e.jsx(U,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx("div",{children:e.jsx(G,{loading:!1,itemLayout:"horizontal",dataSource:F,renderItem:r=>{var L,m,E,t;return e.jsxs(e.Fragment,{children:[e.jsx(G.Item,{actions:[e.jsx(z,{danger:!0,onClick:()=>v(r),children:"View/Read"},"list-loadmore-more")],children:e.jsx(G.Item.Meta,{title:e.jsxs(e.Fragment,{children:[e.jsxs("a",{onClick:()=>v(r),children:[r.title,e.jsxs(O,{style:{marginLeft:"10px"},children:["Downloads: ",r.downloads]})]}),e.jsx(ne,{title:"Download",placement:"top",children:e.jsx(z,{danger:!0,size:"small",icon:e.jsx(je,{}),onClick:()=>{A(r)}})})]}),description:e.jsxs(e.Fragment,{children:[r.school&&e.jsxs(O,{children:["School: ",(L=r.school)==null?void 0:L.name]}),r.subject&&e.jsxs(O,{children:["Subject: ",(m=r.subject)==null?void 0:m.name]}),r.year&&e.jsxs(O,{children:["Year: ",r.year]}),r.examinationType&&e.jsxs(O,{children:["Examination Type: ",(E=r.examinationType)==null?void 0:E.name]}),r.educationLevel&&e.jsxs(O,{children:["Education Level: ",(t=r.educationLevel)==null?void 0:t.name]})]})})}),e.jsx(le,{})]})}})}),e.jsx(Q,{anchor:"right",open:l,onClose:r=>i(r),title:e.jsxs("b",{children:[y==null?void 0:y.title," - ",(V=y==null?void 0:y.educationLevel)==null?void 0:V.name," - ",y==null?void 0:y.year]}),width:"80vw",children:e.jsx(e.Fragment,{children:e.jsx(ae,{url:y==null?void 0:y.doc})})})]})},ae=({url:s})=>{const[c,f]=a.useState(!0),u=()=>{f(!0),setTimeout(()=>{f(!1)},3e3)};return e.jsxs(e.Fragment,{children:[c&&e.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"89vh"},children:[e.jsx(ie,{color:"secondary"}),e.jsx("h4",{children:"Loading..."})]}),e.jsx("iframe",{src:s+"#toolbar=0",style:{width:"100%",height:"89vh",display:c?"none":"block"},onLoad:u})]})},{Option:H}=T;let B=[];for(let s=1960;s<=new Date().getFullYear();s++)B.push(s);B=B.reverse();const ve=s=>{const[c,f]=a.useState([]),[u,F]=a.useState([]),[w,y]=a.useState([]),[C,M]=a.useState([]),[k,p]=a.useState(),[g,I]=a.useState(),[j,o]=a.useState(),[P,l]=a.useState(),[i,v]=a.useState(),[A,D]=a.useState(!1),[V]=n.useForm(),r=async(t,x="",S=25)=>{const{data:d}=await b.custom({url:"",method:"get",meta:{operation:"subjects",variables:{page:{value:t,type:"Int",required:!0},key:{value:x,type:"String",required:!1},pageSize:{value:S,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","isActive","created","updated","canDelete","canManage"]}]}}).catch(h=>({data:null})).then(h=>h);d&&M(d.results)},L=async(t,x="",S=25)=>{const{data:d}=await b.custom({url:"",method:"get",meta:{operation:"educationLevels",variables:{page:{value:t,type:"Int",required:!0},key:{value:x,type:"String",required:!1},pageSize:{value:S,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","isActive","created","updated","canDelete","canManage"]}]}}).catch(h=>({data:null})).then(h=>h);d&&y(d.results)},m=async(t,x="",S=25)=>{const{data:d}=await b.custom({url:"",method:"get",meta:{operation:"examinationsTypes",variables:{page:{value:t,type:"Int",required:!0},key:{value:x,type:"String",required:!1},pageSize:{value:S,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","isActive","created","updated","canDelete","canManage"]}]}}).catch(h=>({data:null})).then(h=>h);d&&f(d.results)},E=async(t,x="",S=25)=>{const{data:d}=await b.custom({url:"",method:"get",meta:{operation:"schools",variables:{page:{value:t,type:"Int",required:!0},key:{value:x,type:"String",required:!1},pageSize:{value:S,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","serialNumber","isActive","created","updated","canDelete","canManage"]}]}}).catch(h=>({data:null})).then(h=>h);d&&F(d.results)};return a.useEffect(()=>{E(1),m(1),L(1),r(1)},[s.randKey]),e.jsx(e.Fragment,{children:e.jsxs(_,{children:[e.jsx(q,{span:8,children:e.jsx(Z,{title:e.jsxs(e.Fragment,{children:[e.jsx("span",{style:{fontSize:16},children:"Past Papers Search Filter"}),e.jsxs("span",{style:{float:"right"},children:[e.jsx("span",{style:{marginRight:3,fontSize:16,fontWeight:"bolder"},children:"National Examinations"}),e.jsx(ye,{size:"default",onChange:t=>{D(t)}})]})]}),children:e.jsxs(n,{layout:"vertical",form:V,onFinish:t=>{v(t.educationLevelId),I(t.subjectId),l(t.examinationTypeId),p(t.schoolId),o(t.year),D(A)},children:[!A&&e.jsx(n.Item,{name:"examinationTypeId",label:"Examination Type",children:e.jsx(T,{size:"large",onChange:t=>{},dropdownStyle:{zIndex:9999},children:c.map(t=>e.jsx(H,{value:t.id,children:t.name},"examinationType_"+t.id))})}),e.jsx(n.Item,{name:"educationLevelId",label:"Education Level",rules:[{required:!0,type:"number",message:"Please input an Education Level"}],children:e.jsx(T,{size:"large",showSearch:!0,placeholder:"Select an Education Level...",filterOption:!1,onSearch:t=>{L(1,t)},onChange:t=>{},dropdownStyle:{zIndex:9999},children:w.map(t=>e.jsx(H,{value:parseInt(t.id.toString()),children:t.name},"educationLevel_"+t.id.toString()))})}),e.jsx(n.Item,{name:"subjectId",label:"Subject",rules:[{required:!0,type:"number",message:"Please input a Subject"}],children:e.jsx(T,{size:"large",placeholder:"Select a Subject...",showSearch:!0,filterOption:!1,onSearch:t=>{r(1,t)},onChange:t=>{},dropdownStyle:{zIndex:9999},children:C.map(t=>e.jsx(H,{value:parseInt(t.id.toString()),children:t.name},"subject_"+t.id.toString()))})}),e.jsx(n.Item,{name:"year",label:"Year",rules:[{required:!0,type:"number",message:"Please input a valid year"}],children:e.jsx(T,{size:"large",filterOption:!0,showSearch:!0,onChange:t=>{},dropdownStyle:{zIndex:9999},children:B.map(t=>e.jsx(H,{value:t,children:t},"year_"+t))})}),!A&&e.jsx(n.Item,{name:"schoolId",label:"School",children:e.jsx(T,{size:"large",filterOption:!1,showSearch:!0,onSearch:t=>{E(1,t)},onChange:t=>{},dropdownStyle:{zIndex:9999},children:u.map(t=>e.jsxs(H,{value:parseInt(t.id.toString()),children:[t.name," ",e.jsx("span",{style:{marginLeft:5},children:e.jsx(O,{color:"red",children:t.serialNumber})})]},"school_"+t.id.toString()))})}),e.jsxs(n.Item,{children:[e.jsx(z,{style:{float:"left"},size:"large",icon:e.jsx(oe,{}),danger:!0,onClick:()=>{V.resetFields(),v(null),I(null),l(null),p(null),o(null),D(!1)},children:"Clear"}),e.jsx(z,{style:{float:"right"},htmlType:"submit",size:"large",icon:e.jsx(U,{}),danger:!0,children:"Search"})]})]})})}),e.jsx(q,{span:16,children:e.jsx(Z,{title:"Search Results",style:{minHeight:"90vh"},children:e.jsx(fe,{school:k,educationLevel:i,subject:g,year:j,examinationType:P,national:A})})})]})})},Se=()=>e.jsx("div",{style:{marginTop:10},children:e.jsx(ve,{})}),{Option:Y}=T,Ie=s=>Array.isArray(s)?s:s==null?void 0:s.fileList;let $=[];for(let s=1960;s<=new Date().getFullYear();s++)$.push(s);$=$.reverse();const Pe=s=>{const[c]=n.useForm(),[f,u]=a.useState(!1),[F,w]=a.useState(!1);de();const[y,C]=a.useState([]),[M,k]=a.useState([]),[p,g]=a.useState([]),[I,j]=a.useState([]),[o,P]=a.useState([]),[l,i]=a.useState(null);a.useState(),a.useState(),a.useState(),a.useState(),a.useState();const[v,A]=a.useState(!1),D=async(t,x="",S=25)=>{const{data:d}=await b.custom({url:"",method:"get",meta:{operation:"schoolTypes",variables:{page:{value:t,type:"Int",required:!0},key:{value:x,type:"String",required:!1},pageSize:{value:S,type:"Int",required:!1},showAll:{value:!0,type:"Boolean",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","isActive","created","updated","canDelete","canManage"]}]}}).catch(h=>({data:null})).then(h=>h);d&&C(d.results)},V=async(t,x="",S=25)=>{const{data:d}=await b.custom({url:"",method:"get",meta:{operation:"subjects",variables:{page:{value:t,type:"Int",required:!0},key:{value:x,type:"String",required:!1},pageSize:{value:S,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","isActive","created","updated","canDelete","canManage"]}]}}).catch(h=>({data:null})).then(h=>h);d&&P(d.results)},r=async(t,x="",S=25,d=[])=>{const{data:h}=await b.custom({url:"",method:"get",meta:{operation:"educationLevels",variables:{page:{value:t,type:"Int",required:!0},key:{value:x,type:"String",required:!1},pageSize:{value:S,type:"Int",required:!1},schoolTypes:{value:d,type:"[Int]",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","isActive","created","updated","canDelete","canManage"]}]}}).catch(K=>({data:null})).then(K=>K);h&&j(h.results)},L=async(t,x="",S=25)=>{const{data:d}=await b.custom({url:"",method:"get",meta:{operation:"examinationsTypes",variables:{page:{value:t,type:"Int",required:!0},key:{value:x,type:"String",required:!1},pageSize:{value:S,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","isActive","created","updated","canDelete","canManage"]}]}}).catch(h=>({data:null})).then(h=>h);d&&k(d.results)},m=async(t,x="",S=25,d=[])=>{const{data:h}=await b.custom({url:"",method:"get",meta:{operation:"schools",variables:{page:{value:t,type:"Int",required:!0},key:{value:x,type:"String",required:!1},pageSize:{value:S,type:"Int",required:!1},schoolTypes:{value:d,type:"[Int]",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","serialNumber","isActive","created","updated","canDelete","canManage"]}]}}).catch(K=>({data:null})).then(K=>K);h&&g(h.results)},E=async t=>{var S;u(!0),w(!1);const{data:x}=await b.custom({url:"",method:"post",meta:{operation:"createPastPaper",variables:{title:{value:t.title,type:"String",required:!0},file:{value:t.file,type:"Upload",required:!0},schoolTypeId:{value:parseInt(t.schoolTypeId.toString()),type:"Int",required:!0},examinationTypeId:{value:parseInt(t.examinationTypeId.toString()),type:"Int",required:!1},subjectId:{value:t.subjectId,type:"Int",required:!0},educationLevelId:{value:parseInt(t.educationLevelId.toString()),type:"Int",required:!0},schoolId:{value:parseInt(((S=t==null?void 0:t.schoolId)==null?void 0:S.toString())??"0"),type:"Int",required:!1},year:{value:t.year,type:"Int",required:!0}},fields:["success","message",{pastPaper:["id","title","description","year","doc",{school:["id","name","serialNumber"]},{subject:["id","name"]},{examinationType:["id","name"]},{educationLevel:["id","name"]},{author:["id","fullName","firstName","middleName","lastName","email"]},"isActive","created","updated","canDelete","canManage"]}]}}).catch(d=>(N.error("Error creating past paper"),{data:null})).then(d=>d);x&&(x.success?(N.success(x.message),c.resetFields(),s.onFinish(x.pastPaper)):N.error(x.message)),u(!1)};return a.useEffect(()=>{D(1),m(1,"",25,[]),L(1),V(1)},[s.random]),F?e.jsx(e.Fragment,{children:e.jsx(ce,{direction:"vertical",style:{display:"flex",justifyContent:"center"},children:e.jsx(ue,{message:"Success",description:e.jsx(e.Fragment,{children:e.jsx("p",{children:"File uploaded successfully"})}),action:[e.jsx(z,{onClick:()=>w(!1),children:"Upload another file(s)"})],type:"success"})})}):e.jsx(e.Fragment,{children:e.jsx(he,{spinning:f,children:e.jsxs(n,{layout:"vertical",form:c,onFinish:t=>{E(t)},requiredMark:!0,autoComplete:"off",children:[e.jsxs(_,{children:[e.jsxs(q,{span:12,style:{padding:5},children:[e.jsx(n.Item,{name:"title",label:"Examination Title",rules:[{required:!0,message:"Please input an Examination Title"}],children:e.jsx(R,{size:"large",placeholder:"Examination Title"})}),e.jsx(n.Item,{name:"schoolTypeId",label:"School Type",rules:[{required:!0,message:"Please select a school type"}],children:e.jsx(T,{size:"large",onChange:t=>{i(t),r(1,"",100,[parseInt(t.toString())]),m(1,"",100,[parseInt(t.toString())]),c.resetFields(["educationLevelId","schoolId","subjectId"])},dropdownStyle:{zIndex:9999},children:y.map(t=>e.jsx(Y,{value:t.id,children:t.name},"schoolType_"+t.id))})}),!v&&e.jsx(n.Item,{name:"examinationTypeId",label:"Examination Type",children:e.jsx(T,{size:"large",onChange:t=>{},dropdownStyle:{zIndex:9999},children:M.map(t=>e.jsx(Y,{value:t.id,children:t.name},"examinationType_"+t.id))})})]}),e.jsxs(q,{span:12,style:{padding:5},children:[e.jsx(n.Item,{name:"educationLevelId",label:"Education Level",rules:[{required:!0,type:"number",message:"Please input an Education Level"}],children:e.jsx(T,{disabled:l===null,size:"large",showSearch:!0,placeholder:"Select an Education Level...",filterOption:!1,onSearch:t=>{r(1,t)},onChange:t=>{},dropdownStyle:{zIndex:9999},children:I.map(t=>e.jsx(Y,{value:parseInt(t.id.toString()),children:t.name},"educationLevel_"+t.id.toString()))})}),e.jsx(n.Item,{name:"subjectId",label:"Subject",rules:[{required:!0,type:"number",message:"Please input a Subject"}],children:e.jsx(T,{size:"large",placeholder:"Select a Subject...",showSearch:!0,filterOption:!1,onSearch:t=>{V(1,t)},onChange:t=>{},dropdownStyle:{zIndex:9999},children:o.map(t=>e.jsx(Y,{value:parseInt(t.id.toString()),children:t.name},"subject_"+t.id.toString()))})}),e.jsx(n.Item,{name:"year",label:"Year",rules:[{required:!0,type:"number",message:"Please input a valid year"}],children:e.jsx(T,{size:"large",filterOption:!0,showSearch:!0,onChange:t=>{},dropdownStyle:{zIndex:9999},children:$.map(t=>e.jsx(Y,{value:t,children:t},"year_"+t))})}),!v&&e.jsx(n.Item,{name:"schoolId",label:"School",children:e.jsx(T,{disabled:l===null,size:"large",filterOption:!1,showSearch:!0,onSearch:t=>{m(1,t)},onChange:t=>{},dropdownStyle:{zIndex:9999},children:p.map(t=>e.jsxs(Y,{value:parseInt(t.id.toString()),children:[t.name," ",e.jsx("span",{style:{marginLeft:5},children:e.jsx(O,{color:"red",children:t.serialNumber})})]},"school_"+t.id.toString()))})})]}),e.jsx(q,{span:24,children:e.jsx(n.Item,{label:"Pick Past Paper File (PDF)",children:e.jsx(n.Item,{name:"file",valuePropName:"fileList",getValueFromEvent:Ie,noStyle:!0,rules:[{required:!0,type:"array",message:"Please upload students excel file"}],children:e.jsxs(pe.Dragger,{name:"file",accept:".pdf",multiple:!0,beforeUpload:()=>!1,children:[e.jsx("p",{className:"ant-upload-drag-icon",children:e.jsx(me,{})}),e.jsx("p",{className:"ant-upload-text",children:"Click or drag file to this area to upload"}),e.jsx("p",{className:"ant-upload-hint",children:"Support for a single or bulk upload."})]})})})})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx(z,{size:"large",loading:f,onClick:()=>{i(null),c.resetFields()},danger:!0,children:"Reset"}),e.jsx(z,{type:"primary",size:"large",htmlType:"submit",loading:f,children:"Upload"})]})]})})})},be=s=>{var P;const[c,f]=a.useState([]),[u,F]=a.useState(null),[w]=n.useForm(),[y,C]=a.useState(!1),[M,k]=a.useState(!1),p=l=>{F(l),k(!0)},g=async(l,i="",v=25)=>{const{data:A}=await b.custom({url:"",method:"get",meta:{operation:"pastPapers",variables:{page:{value:l,type:"Int",required:!0},key:{value:i,type:"String",required:!1},pageSize:{value:v,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","title","description","year","doc",{school:["id","name","serialNumber"]},{subject:["id","name"]},{examinationType:["id","name"]},{educationLevel:["id","name"]},{author:["id","fullName","firstName","middleName","lastName","email"]},"isActive","created","updated","canDelete","canManage"]}]}}).catch(D=>({data:null})).then(D=>D);A&&f(A.results)},I=l=>{f([l,...c])},j=async l=>{const{data:i}=await b.custom({url:"",method:"post",meta:{operation:"deletePastPaper",variables:{id:{value:l,type:"Int",required:!0}},fields:["success","message"]}}).catch(v=>({data:null})).then(v=>v);i&&(i.success?(N.success(i.message),f(c.filter(v=>parseInt(v.id.toString())!==l))):N.error(i.message))},o=[{title:"Title",dataIndex:"title",key:"title",render:(l,i,v)=>e.jsxs("span",{children:[e.jsx("a",{children:i.title}),e.jsx(O,{color:"red",style:{marginLeft:5},children:i.year})]})},{title:"Education Level",dataIndex:"educationLevel",key:"educationLEvel",render:(l,i,v)=>e.jsx("span",{children:i.educationLevel.name})},{title:"Examination Type",dataIndex:"examinationType",key:"examinationType",render:(l,i,v)=>e.jsx("span",{children:i.examinationType.name})},{title:"Document",dataIndex:"doc",key:"doc",render:(l,i,v)=>e.jsx("span",{children:e.jsx(z,{icon:e.jsx(xe,{}),style:{float:"left"},danger:!0,onClick:()=>p(i),children:"View"})})},{title:"",key:"action",render:(l,i,v)=>e.jsx("span",{children:e.jsx(W,{title:"Are you sure delete this manager?",placement:"topLeft",onConfirm:()=>j(parseInt(i.id.toString())),onCancel:()=>{},okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(z,{icon:e.jsx(te,{}),style:{float:"right"},danger:!0})})})}];return a.useEffect(()=>{g(1)},[s.randKey]),e.jsxs(e.Fragment,{children:[e.jsxs(_,{style:{marginTop:10},children:[e.jsx(q,{span:10,children:e.jsx(n,{layout:"vertical",form:w,onFinish:l=>{c.length=0,g(1,l.key)},children:e.jsx(n.Item,{name:"key",children:e.jsx(R,{size:"large",placeholder:"Search ...",prefix:e.jsx(U,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(q,{span:14,style:{display:"flex",justifyContent:"end"},children:e.jsx(z,{size:"large",icon:e.jsx(ee,{}),onClick:()=>C(!0),danger:!0,children:"Create/Add Past Paper"})})]}),e.jsx(_,{children:e.jsx(q,{span:24,children:e.jsx(X,{columns:o,dataSource:c})})}),e.jsx(ge,{title:"Adding/Creating Past Paper",width:"80vw",open:y,onClose:l=>C(l),children:e.jsx(Pe,{onFinish:I})}),e.jsx(Q,{anchor:"right",open:M,onClose:l=>k(l),title:e.jsxs("b",{children:[u==null?void 0:u.title," - ",(P=u==null?void 0:u.educationLevel)==null?void 0:P.name," - ",u==null?void 0:u.year]}),width:"80vw",children:e.jsx(e.Fragment,{children:e.jsx(ae,{url:u==null?void 0:u.doc})})})]})},we=()=>e.jsx("div",{style:{marginTop:10},children:e.jsx(be,{})}),Ce=()=>e.jsx(we,{}),qe=s=>{const[c,f]=a.useState(0),[u,F]=a.useState(50),[w,y]=a.useState(""),[C,M]=a.useState([]),[k]=n.useForm(),p=async(j,o="",P=50)=>{const{data:l}=await b.custom({url:"",method:"get",meta:{operation:"pastPapersManagersToAdd",variables:{page:{value:j,type:"Int",required:!0},key:{value:o,type:"String",required:!1},pageSize:{value:P,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","firstName","middleName","lastName","fullName","dp","email","isActive","created","updated","canDelete","canManage"]}]}}).catch(i=>({data:null})).then(i=>i);l&&M(l.results)},g=async j=>{const{data:o}=await b.custom({url:"",method:"post",meta:{operation:"addPastPaperManager",variables:{id:{value:j,type:"Int",required:!0}},fields:["success","message",{pastPaperManager:["id",{manager:["id","firstName","middleName","lastName","fullName","dp","email","isActive","created","updated","canDelete","canManage"]},"created","updated","canDelete","canManage","canEdit","isActive"]}]}}).catch(P=>({data:null})).then(P=>P);o&&(o.success?(N.success(o.message),M(C.filter(P=>parseInt(P.id.toString())!==j)),s.onAdd(o.pastPaperManager)):N.error(o.message))},I=[{title:"Full Name",dataIndex:"fullName",key:"fullName",render:(j,o,P)=>e.jsx("span",{children:e.jsx("a",{children:o.fullName})})},{title:"Email",dataIndex:"email",key:"email",render:(j,o,P)=>e.jsx("span",{children:e.jsx("a",{children:o.email})})},{title:"Action",key:"action",render:(j,o,P)=>e.jsx(W,{title:"Add Manager?",placement:"topLeft",onConfirm:()=>g(parseInt(o.id.toString())),onCancel:()=>{},okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(z,{danger:!0,children:"Add"})})}];return a.useEffect(()=>{p(1,"",50)},[s.randKey]),e.jsxs(e.Fragment,{children:[e.jsx(_,{style:{marginTop:10},children:e.jsx(q,{span:10,children:e.jsx(n,{layout:"vertical",form:k,onFinish:j=>{C.length=0,p(1,j.key,u)},children:e.jsx(n.Item,{name:"key",children:e.jsx(R,{size:"large",placeholder:"Search ...",prefix:e.jsx(U,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx(_,{children:e.jsx(q,{span:24,children:e.jsx(X,{columns:I,dataSource:C,scroll:{x:!0,y:"calc(100vh - 280px)"},pagination:{onChange:(j,o)=>{F(o),p(j,w,o)},total:c,pageSize:u,position:["bottomCenter"],showQuickJumper:!0}})})})]})};let J=[];for(let s=1960;s<=new Date().getFullYear();s++)J.push(s);J=J.reverse();const Te=s=>{const[c,f]=a.useState([]),[u]=n.useForm(),[F,w]=a.useState(!1),y=async(p,g="",I=25)=>{const{data:j}=await b.custom({url:"",method:"get",meta:{operation:"pastPapersManagers",variables:{page:{value:p,type:"Int",required:!0},key:{value:g,type:"String",required:!1},pageSize:{value:I,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id",{manager:["id","firstName","middleName","lastName","fullName","dp","email"]},"isActive","created","updated","canDelete","canManage"]}]}}).catch(o=>({data:null})).then(o=>o);j&&f(j.results)},C=p=>{f([p,...c])},M=async p=>{const{data:g}=await b.custom({url:"",method:"post",meta:{operation:"deletePastPaperManager",variables:{id:{value:p,type:"Int",required:!0}},fields:["success","message"]}}).catch(I=>({data:null})).then(I=>I);g&&(g.success?(N.success(g.message),f(c.filter(I=>parseInt(I.id.toString())!==p))):N.error(g.message))},k=[{title:"Full Name",dataIndex:"fullName",key:"fullName",render:(p,g,I)=>e.jsx("span",{children:e.jsx("a",{children:g.manager.fullName})})},{title:"Email",dataIndex:"email",key:"email",render:(p,g,I)=>e.jsx("span",{children:e.jsx("a",{children:g.manager.email})})},{title:"",key:"action",render:(p,g,I)=>e.jsx("span",{children:e.jsx(W,{title:"Are you sure delete this manager?",placement:"topLeft",onConfirm:()=>M(parseInt(g.id.toString())),onCancel:()=>{},okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(z,{icon:e.jsx(te,{}),style:{float:"right"},danger:!0})})})}];return a.useEffect(()=>{y(1)},[s.randKey]),e.jsxs(e.Fragment,{children:[e.jsxs(_,{style:{marginTop:10},children:[e.jsx(q,{span:10,children:e.jsx(n,{layout:"vertical",form:u,onFinish:p=>{c.length=0,y(1,p.key)},children:e.jsx(n.Item,{name:"key",children:e.jsx(R,{size:"large",placeholder:"Search ...",prefix:e.jsx(U,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(q,{span:14,style:{display:"flex",justifyContent:"end"},children:e.jsx(z,{size:"large",icon:e.jsx(ee,{}),onClick:()=>w(!0),danger:!0,children:"Create Manager"})})]}),e.jsx(_,{children:e.jsx(q,{span:24,children:e.jsx(X,{columns:k,dataSource:c})})}),e.jsx(Q,{title:"Adding Past Papers Managers",anchor:"right",width:"40vw",onClose:p=>w(p),open:F,children:e.jsx(qe,{randKey:Math.random(),onAdd:C})})]})},Ne=()=>e.jsx("div",{style:{marginTop:10},children:e.jsx(Te,{})}),ze=()=>e.jsx(Ne,{}),Ae=s=>{const{page:c}=s;return c==="PastPapersManagersPage"?e.jsx(ze,{}):c==="PastPapersManagementPage"?e.jsx(Ce,{}):c==="PastPapersHomePage"?e.jsx(Se,{}):e.jsx("div",{children:"Page not found ..."})};export{Ae as PastPapersPages};
