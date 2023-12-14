import{eC as re,j as e,r as s,F as l,q as le,y as Y,z,I as U,S as B,u as ee,a5 as Q,B as L,T as _,a$ as ie,ak as oe,D as de,a2 as G,bv as ce,J as b,K as k,C as te,at as F,e4 as ue,aV as he,v as pe,bj as me,s as ge,ad as xe,ae as ye,t as ae,H as je,aH as fe,a6 as X,a9 as se}from"./index-a5fcf18b.js";import{S as ve}from"./index-cc4e5842.js";import{T as Z}from"./Table-f98a8db9.js";import"./index-8a836b87.js";import"./index-eac8e748.js";const Se=re(e.jsx("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"}),"CloudDownload"),Ie=n=>{var V;const[c,j]=s.useState(!1),[u]=l.useForm(),[M,C]=s.useState([]),[g,q]=s.useState(null),[E,A]=s.useState(!1),[h,m]=s.useState(!1),[f,x]=s.useState(1),[o,I]=s.useState(0),[i,d]=s.useState(!1);le();const v=r=>{q(r),d(!0)},H=async r=>{const{data:T}=await b.custom({url:"",method:"post",meta:{operation:"createPastPaperDownload",variables:{id:{value:r.id,type:"Int",required:!0}},fields:["success","message"]}}).catch(S=>(console.error(S),k.error("Error creating download"),{data:null})).then(S=>S);T?T.success?(C(M.map(S=>(S.id===r.id&&(S.downloads=S.downloads+1),S))),window.open(r.doc,"_blank")):k.error("Error creating download"):k.error("Error in downloading")},D=async(r,T=20,S="")=>{j(!0);const{data:N}=await b.custom({url:"",method:"get",meta:{operation:"pastPapersSearch",variables:{page:{value:r,type:"Int",required:!0},key:{value:S,type:"String",required:!1},pageSize:{value:T,type:"Int",required:!1},year:{value:n.year,type:"Int",required:!1},subjectId:{value:n.subject,type:"Int",required:!1},schoolId:{value:n.school,type:"Int",required:!1},examinationTypeId:{value:n.examinationType,type:"Int",required:!1},educationLevelId:{value:n.educationLevel,type:"Int",required:!1},national:{value:n.national,type:"Boolean",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","title","description","year","doc","downloads","created","updated","canEdit","canManage","canDelete",{school:["id","name"]},{subject:["id","name"]},{schoolType:["id","name"]},{educationLevel:["id","name"]},{examinationType:["id","name"]},{author:["id"]}]}]}}).catch(()=>(k.error("Error getting Books"),{data:null})).then(t=>t);j(!1),N&&(C(N.results),I(N.total),x(N.page),A(N.hasNext),m(N.hasPrev))};return s.useEffect(()=>{D(1)},[n.randKey,n.school,n.subject,n.year,n.educationLevel,n.examinationType,n.national]),e.jsxs(e.Fragment,{children:[e.jsx(Y,{style:{display:"flex",justifyContent:"center"},children:e.jsx(z,{span:12,children:e.jsx(l,{layout:"vertical",form:u,onFinish:r=>{D(1,20,r.key)},children:e.jsx(l.Item,{name:"key",children:e.jsx(U,{size:"large",placeholder:"Search Past Paper(s)...",prefix:e.jsx(B,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx(ee,{sx:{maxHeight:"70vh",minHeight:"70vh",overflow:"auto"},children:e.jsx(Q,{loading:c,itemLayout:"horizontal",dataSource:M,renderItem:r=>{var T,S,N,t;return e.jsxs(e.Fragment,{children:[e.jsx(Q.Item,{actions:[e.jsx(L,{danger:!0,onClick:()=>v(r),children:"View/Read"},"list-loadmore-more")],children:e.jsx(Q.Item.Meta,{title:e.jsxs(e.Fragment,{children:[e.jsxs("a",{onClick:()=>v(r),children:[r.title,e.jsxs(_,{style:{marginLeft:"10px"},children:["Downloads: ",r.downloads]})]}),e.jsx(ie,{title:"Download",placement:"top",children:e.jsx(L,{danger:!0,size:"small",icon:e.jsx(Se,{}),onClick:()=>{H(r)}})})]}),description:e.jsxs(e.Fragment,{children:[r.school&&e.jsxs(_,{children:["School: ",(T=r.school)==null?void 0:T.name]}),r.subject&&e.jsxs(_,{children:["Subject: ",(S=r.subject)==null?void 0:S.name]}),r.year&&e.jsxs(_,{children:["Year: ",r.year]}),r.examinationType&&e.jsxs(_,{children:["Examination Type: ",(N=r.examinationType)==null?void 0:N.name]}),r.educationLevel&&e.jsxs(_,{children:["Education Level: ",(t=r.educationLevel)==null?void 0:t.name]})]})})}),e.jsx(oe,{})]})}})}),(E||h)&&e.jsx(ee,{sx:{marginTop:"20px",display:"flex",justifyContent:"center"},children:e.jsx(de,{defaultCurrent:f,total:o,onChange:(r,T)=>{D(r,T)}})}),e.jsx(G,{anchor:"right",open:i,onClose:r=>d(r),title:e.jsxs("b",{children:[g==null?void 0:g.title," - ",(V=g==null?void 0:g.educationLevel)==null?void 0:V.name," - ",g==null?void 0:g.year]}),width:"80vw",children:e.jsx(e.Fragment,{children:e.jsx(ne,{url:g==null?void 0:g.doc})})})]})},ne=({url:n})=>{const[c,j]=s.useState(!0),u=()=>{j(!0),setTimeout(()=>{j(!1)},3e3)};return e.jsxs(e.Fragment,{children:[c&&e.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"89vh"},children:[e.jsx(ce,{color:"secondary"}),e.jsx("h4",{children:"Loading..."})]}),e.jsx("iframe",{src:n+"#toolbar=0",style:{width:"100%",height:"89vh",display:c?"none":"block"},onLoad:u})]})},{Option:R}=F;let $=[];for(let n=1960;n<=new Date().getFullYear();n++)$.push(n);$=$.reverse();const Pe=n=>{const[c,j]=s.useState(!1),[u,M]=s.useState([]),[C,g]=s.useState([]),[q,E]=s.useState([]),[A,h]=s.useState([]),[m,f]=s.useState(),[x,o]=s.useState(),[I,i]=s.useState(),[d,v]=s.useState(),[H,D]=s.useState(),[V,r]=s.useState(!1),[T]=l.useForm(),S=async(a,p="",y=25)=>{const{data:w}=await b.custom({url:"",method:"get",meta:{operation:"subjects",variables:{page:{value:a,type:"Int",required:!0},key:{value:p,type:"String",required:!1},pageSize:{value:y,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","isActive","created","updated","canDelete","canManage"]}]}}).catch(O=>({data:null})).then(O=>O);w&&h(w.results)},N=async(a,p="",y=25)=>{const{data:w}=await b.custom({url:"",method:"get",meta:{operation:"educationLevels",variables:{page:{value:a,type:"Int",required:!0},key:{value:p,type:"String",required:!1},pageSize:{value:y,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","isActive","created","updated","canDelete","canManage"]}]}}).catch(O=>({data:null})).then(O=>O);w&&E(w.results)},t=async(a,p="",y=25)=>{const{data:w}=await b.custom({url:"",method:"get",meta:{operation:"examinationsTypes",variables:{page:{value:a,type:"Int",required:!0},key:{value:p,type:"String",required:!1},pageSize:{value:y,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","isActive","created","updated","canDelete","canManage"]}]}}).catch(O=>({data:null})).then(O=>O);w&&M(w.results)},P=async(a,p="",y=25)=>{const{data:w}=await b.custom({url:"",method:"get",meta:{operation:"schools",variables:{page:{value:a,type:"Int",required:!0},key:{value:p,type:"String",required:!1},pageSize:{value:y,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","serialNumber","isActive","created","updated","canDelete","canManage"]}]}}).catch(O=>({data:null})).then(O=>O);w&&g(w.results)};return s.useEffect(()=>{P(1),t(1),N(1),S(1)},[n.randKey]),e.jsx(e.Fragment,{children:e.jsxs(Y,{children:[e.jsx(z,{span:8,children:e.jsx(te,{title:e.jsxs(e.Fragment,{children:[e.jsx("span",{style:{fontSize:16},children:"Past Papers Search Filter"}),e.jsxs("span",{style:{float:"right"},children:[e.jsx("span",{style:{marginRight:3,fontSize:16,fontWeight:"bolder"},children:"National Examinations"}),e.jsx(ve,{size:"default",onChange:a=>{r(a)}})]})]}),children:e.jsxs(l,{layout:"vertical",form:T,onFinish:a=>{D(a.educationLevelId),o(a.subjectId),v(a.examinationTypeId),f(a.schoolId),i(a.year),r(V),j(!1)},onValuesChange:(a,p)=>{j(!0)},children:[!V&&e.jsx(l.Item,{name:"examinationTypeId",label:"Examination Type",children:e.jsx(F,{size:"large",onChange:a=>{},dropdownStyle:{zIndex:9999},children:u.map(a=>e.jsx(R,{value:parseInt(a.id.toString()),children:a.name},"examinationType_"+a.id))})}),e.jsx(l.Item,{name:"educationLevelId",label:"Education Level",rules:[{required:!1,type:"number",message:"Please input an Education Level"}],children:e.jsx(F,{size:"large",showSearch:!0,placeholder:"Select an Education Level...",filterOption:!1,onSearch:a=>{N(1,a)},onChange:a=>{},dropdownStyle:{zIndex:9999},children:q.map(a=>e.jsx(R,{value:parseInt(a.id.toString()),children:a.name},"educationLevel_"+a.id.toString()))})}),e.jsx(l.Item,{name:"subjectId",label:"Subject",rules:[{required:!1,type:"number",message:"Please input a Subject"}],children:e.jsx(F,{size:"large",placeholder:"Select a Subject...",showSearch:!0,filterOption:!1,onSearch:a=>{S(1,a)},onChange:a=>{},dropdownStyle:{zIndex:9999},children:A.map(a=>e.jsx(R,{value:parseInt(a.id.toString()),children:a.name},"subject_"+a.id.toString()))})}),e.jsx(l.Item,{name:"year",label:"Year",rules:[{required:!1,type:"number",message:"Please input a valid year"}],children:e.jsx(F,{size:"large",filterOption:!0,showSearch:!0,onChange:a=>{},dropdownStyle:{zIndex:9999},children:$.map(a=>e.jsx(R,{value:a,children:a},"year_"+a))})}),!V&&e.jsx(l.Item,{name:"schoolId",label:"School",children:e.jsx(F,{size:"large",filterOption:!1,showSearch:!0,onSearch:a=>{P(1,a)},onChange:a=>{},dropdownStyle:{zIndex:9999},children:C.map(a=>e.jsxs(R,{value:parseInt(a.id.toString()),children:[a.name," ",e.jsx("span",{style:{marginLeft:5},children:e.jsx(_,{color:"red",children:a.serialNumber})})]},"school_"+a.id.toString()))})}),e.jsxs(l.Item,{children:[e.jsx(L,{style:{float:"left"},size:"large",icon:e.jsx(ue,{}),danger:!0,onClick:()=>{T.resetFields(),D(null),o(null),v(null),f(null),i(null),r(!1)},children:"Clear"}),e.jsx(L,{style:{float:"right"},htmlType:"submit",size:"large",icon:e.jsx(B,{}),disabled:!c,danger:!0,children:"Search"})]})]})})}),e.jsx(z,{span:16,children:e.jsx(te,{title:"Search Results",style:{minHeight:"90vh"},children:e.jsx(Ie,{school:m,educationLevel:H,subject:x,year:I,examinationType:d,national:V})})})]})})},be=()=>e.jsx("div",{style:{marginTop:10},children:e.jsx(Pe,{})}),{Option:K}=F,we=n=>Array.isArray(n)?n:n==null?void 0:n.fileList;let J=[];for(let n=1960;n<=new Date().getFullYear();n++)J.push(n);J=J.reverse();const Ce=n=>{const[c]=l.useForm(),[j,u]=s.useState(!1),[M,C]=s.useState(!1);he();const[g,q]=s.useState([]),[E,A]=s.useState([]),[h,m]=s.useState([]),[f,x]=s.useState([]),[o,I]=s.useState([]),[i,d]=s.useState(null);s.useState(),s.useState(),s.useState(),s.useState(),s.useState();const[v,H]=s.useState(!1),D=async(t,P="",a=25)=>{const{data:p}=await b.custom({url:"",method:"get",meta:{operation:"schoolTypes",variables:{page:{value:t,type:"Int",required:!0},key:{value:P,type:"String",required:!1},pageSize:{value:a,type:"Int",required:!1},showAll:{value:!0,type:"Boolean",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","isActive","created","updated","canDelete","canManage"]}]}}).catch(y=>({data:null})).then(y=>y);p&&q(p.results)},V=async(t,P="",a=25)=>{const{data:p}=await b.custom({url:"",method:"get",meta:{operation:"subjects",variables:{page:{value:t,type:"Int",required:!0},key:{value:P,type:"String",required:!1},pageSize:{value:a,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","isActive","created","updated","canDelete","canManage"]}]}}).catch(y=>({data:null})).then(y=>y);p&&I(p.results)},r=async(t,P="",a=25,p=[])=>{const{data:y}=await b.custom({url:"",method:"get",meta:{operation:"educationLevels",variables:{page:{value:t,type:"Int",required:!0},key:{value:P,type:"String",required:!1},pageSize:{value:a,type:"Int",required:!1},schoolTypes:{value:p,type:"[Int]",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","isActive","created","updated","canDelete","canManage"]}]}}).catch(w=>({data:null})).then(w=>w);y&&x(y.results)},T=async(t,P="",a=25)=>{const{data:p}=await b.custom({url:"",method:"get",meta:{operation:"examinationsTypes",variables:{page:{value:t,type:"Int",required:!0},key:{value:P,type:"String",required:!1},pageSize:{value:a,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","isActive","created","updated","canDelete","canManage"]}]}}).catch(y=>({data:null})).then(y=>y);p&&A(p.results)},S=async(t,P="",a=25,p=[])=>{const{data:y}=await b.custom({url:"",method:"get",meta:{operation:"schools",variables:{page:{value:t,type:"Int",required:!0},key:{value:P,type:"String",required:!1},pageSize:{value:a,type:"Int",required:!1},schoolTypes:{value:p,type:"[Int]",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","serialNumber","isActive","created","updated","canDelete","canManage"]}]}}).catch(w=>({data:null})).then(w=>w);y&&m(y.results)},N=async t=>{var a;u(!0),C(!1);const{data:P}=await b.custom({url:"",method:"post",meta:{operation:"createPastPaper",variables:{title:{value:t.title,type:"String",required:!0},file:{value:t.file,type:"Upload",required:!0},schoolTypeId:{value:parseInt(t.schoolTypeId.toString()),type:"Int",required:!0},examinationTypeId:{value:parseInt(t.examinationTypeId.toString()),type:"Int",required:!1},subjectId:{value:t.subjectId,type:"Int",required:!0},educationLevelId:{value:parseInt(t.educationLevelId.toString()),type:"Int",required:!0},schoolId:{value:parseInt(((a=t==null?void 0:t.schoolId)==null?void 0:a.toString())??"0"),type:"Int",required:!1},year:{value:t.year,type:"Int",required:!0}},fields:["success","message",{pastPaper:["id","title","description","year","doc",{school:["id","name","serialNumber"]},{subject:["id","name"]},{examinationType:["id","name"]},{educationLevel:["id","name"]},{author:["id","fullName","firstName","middleName","lastName","email"]},"isActive","created","updated","canDelete","canManage"]}]}}).catch(p=>(k.error("Error creating past paper"),{data:null})).then(p=>p);P&&(P.success?(k.success(P.message),c.resetFields(),n.onFinish(P.pastPaper)):k.error(P.message)),u(!1)};return s.useEffect(()=>{D(1),S(1,"",25,[]),T(1),V(1)},[n.random]),M?e.jsx(e.Fragment,{children:e.jsx(pe,{direction:"vertical",style:{display:"flex",justifyContent:"center"},children:e.jsx(me,{message:"Success",description:e.jsx(e.Fragment,{children:e.jsx("p",{children:"File uploaded successfully"})}),action:[e.jsx(L,{onClick:()=>C(!1),children:"Upload another file(s)"})],type:"success"})})}):e.jsx(e.Fragment,{children:e.jsx(ge,{spinning:j,children:e.jsxs(l,{layout:"vertical",form:c,onFinish:t=>{N(t)},requiredMark:!0,autoComplete:"off",children:[e.jsxs(Y,{children:[e.jsxs(z,{span:12,style:{padding:5},children:[e.jsx(l.Item,{name:"title",label:"Examination Title",rules:[{required:!0,message:"Please input an Examination Title"}],children:e.jsx(U,{size:"large",placeholder:"Examination Title"})}),e.jsx(l.Item,{name:"schoolTypeId",label:"School Type",rules:[{required:!0,message:"Please select a school type"}],children:e.jsx(F,{size:"large",onChange:t=>{d(t),r(1,"",100,[parseInt(t.toString())]),S(1,"",100,[parseInt(t.toString())]),c.resetFields(["educationLevelId","schoolId","subjectId"])},dropdownStyle:{zIndex:9999},children:g.map(t=>e.jsx(K,{value:t.id,children:t.name},"schoolType_"+t.id))})}),!v&&e.jsx(l.Item,{name:"examinationTypeId",label:"Examination Type",children:e.jsx(F,{size:"large",onChange:t=>{},dropdownStyle:{zIndex:9999},children:E.map(t=>e.jsx(K,{value:t.id,children:t.name},"examinationType_"+t.id))})})]}),e.jsxs(z,{span:12,style:{padding:5},children:[e.jsx(l.Item,{name:"educationLevelId",label:"Education Level",rules:[{required:!0,type:"number",message:"Please input an Education Level"}],children:e.jsx(F,{disabled:i===null,size:"large",showSearch:!0,placeholder:"Select an Education Level...",filterOption:!1,onSearch:t=>{r(1,t)},onChange:t=>{},dropdownStyle:{zIndex:9999},children:f.map(t=>e.jsx(K,{value:parseInt(t.id.toString()),children:t.name},"educationLevel_"+t.id.toString()))})}),e.jsx(l.Item,{name:"subjectId",label:"Subject",rules:[{required:!0,type:"number",message:"Please input a Subject"}],children:e.jsx(F,{size:"large",placeholder:"Select a Subject...",showSearch:!0,filterOption:!1,onSearch:t=>{V(1,t)},onChange:t=>{},dropdownStyle:{zIndex:9999},children:o.map(t=>e.jsx(K,{value:parseInt(t.id.toString()),children:t.name},"subject_"+t.id.toString()))})}),e.jsx(l.Item,{name:"year",label:"Year",rules:[{required:!0,type:"number",message:"Please input a valid year"}],children:e.jsx(F,{size:"large",filterOption:!0,showSearch:!0,onChange:t=>{},dropdownStyle:{zIndex:9999},children:J.map(t=>e.jsx(K,{value:t,children:t},"year_"+t))})}),!v&&e.jsx(l.Item,{name:"schoolId",label:"School",children:e.jsx(F,{disabled:i===null,size:"large",filterOption:!1,showSearch:!0,onSearch:t=>{S(1,t)},onChange:t=>{},dropdownStyle:{zIndex:9999},children:h.map(t=>e.jsxs(K,{value:parseInt(t.id.toString()),children:[t.name," ",e.jsx("span",{style:{marginLeft:5},children:e.jsx(_,{color:"red",children:t.serialNumber})})]},"school_"+t.id.toString()))})})]}),e.jsx(z,{span:24,children:e.jsx(l.Item,{label:"Pick Past Paper File (PDF)",children:e.jsx(l.Item,{name:"file",valuePropName:"fileList",getValueFromEvent:we,noStyle:!0,rules:[{required:!0,type:"array",message:"Please upload students excel file"}],children:e.jsxs(xe.Dragger,{name:"file",accept:".pdf",multiple:!0,beforeUpload:()=>!1,children:[e.jsx("p",{className:"ant-upload-drag-icon",children:e.jsx(ye,{})}),e.jsx("p",{className:"ant-upload-text",children:"Click or drag file to this area to upload"}),e.jsx("p",{className:"ant-upload-hint",children:"Support for a single or bulk upload."})]})})})})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx(L,{size:"large",loading:j,onClick:()=>{d(null),c.resetFields()},danger:!0,children:"Reset"}),e.jsx(L,{type:"primary",size:"large",htmlType:"submit",loading:j,children:"Upload"})]})]})})})},qe=n=>{var I;const[c,j]=s.useState([]),[u,M]=s.useState(null),[C]=l.useForm(),[g,q]=s.useState(!1),[E,A]=s.useState(!1),h=i=>{M(i),A(!0)},m=async(i,d="",v=25)=>{const{data:H}=await b.custom({url:"",method:"get",meta:{operation:"pastPapers",variables:{page:{value:i,type:"Int",required:!0},key:{value:d,type:"String",required:!1},pageSize:{value:v,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","title","description","year","doc",{school:["id","name","serialNumber"]},{subject:["id","name"]},{examinationType:["id","name"]},{educationLevel:["id","name"]},{author:["id","fullName","firstName","middleName","lastName","email"]},"isActive","created","updated","canDelete","canManage"]}]}}).catch(D=>({data:null})).then(D=>D);H&&j(H.results)},f=i=>{j([i,...c])},x=async i=>{const{data:d}=await b.custom({url:"",method:"post",meta:{operation:"deletePastPaper",variables:{id:{value:i,type:"Int",required:!0}},fields:["success","message"]}}).catch(v=>({data:null})).then(v=>v);d&&(d.success?(k.success(d.message),j(c.filter(v=>parseInt(v.id.toString())!==i))):k.error(d.message))},o=[{title:"Title",dataIndex:"title",key:"title",render:(i,d,v)=>e.jsxs("span",{children:[e.jsx("a",{children:d.title}),e.jsx(_,{color:"red",style:{marginLeft:5},children:d.year})]})},{title:"Education Level",dataIndex:"educationLevel",key:"educationLEvel",render:(i,d,v)=>e.jsx("span",{children:d.educationLevel.name})},{title:"Examination Type",dataIndex:"examinationType",key:"examinationType",render:(i,d,v)=>e.jsx("span",{children:d.examinationType.name})},{title:"Document",dataIndex:"doc",key:"doc",render:(i,d,v)=>e.jsx("span",{children:e.jsx(L,{icon:e.jsx(fe,{}),style:{float:"left"},danger:!0,onClick:()=>h(d),children:"View"})})},{title:"",key:"action",render:(i,d,v)=>e.jsx("span",{children:e.jsx(X,{title:"Are you sure delete this manager?",placement:"topLeft",onConfirm:()=>x(parseInt(d.id.toString())),onCancel:()=>{},okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(L,{icon:e.jsx(se,{}),style:{float:"right"},danger:!0})})})}];return s.useEffect(()=>{m(1)},[n.randKey]),e.jsxs(e.Fragment,{children:[e.jsxs(Y,{style:{marginTop:10},children:[e.jsx(z,{span:10,children:e.jsx(l,{layout:"vertical",form:C,onFinish:i=>{c.length=0,m(1,i.key)},children:e.jsx(l.Item,{name:"key",children:e.jsx(U,{size:"large",placeholder:"Search ...",prefix:e.jsx(B,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(z,{span:14,style:{display:"flex",justifyContent:"end"},children:e.jsx(L,{size:"large",icon:e.jsx(ae,{}),onClick:()=>q(!0),danger:!0,children:"Create/Add Past Paper"})})]}),e.jsx(Y,{children:e.jsx(z,{span:24,children:e.jsx(Z,{columns:o,dataSource:c})})}),e.jsx(je,{title:"Adding/Creating Past Paper",width:"80vw",open:g,onClose:i=>q(i),children:e.jsx(Ce,{onFinish:f})}),e.jsx(G,{anchor:"right",open:E,onClose:i=>A(i),title:e.jsxs("b",{children:[u==null?void 0:u.title," - ",(I=u==null?void 0:u.educationLevel)==null?void 0:I.name," - ",u==null?void 0:u.year]}),width:"80vw",children:e.jsx(e.Fragment,{children:e.jsx(ne,{url:u==null?void 0:u.doc})})})]})},Te=()=>e.jsx("div",{style:{marginTop:10},children:e.jsx(qe,{})}),Ne=()=>e.jsx(Te,{}),ze=n=>{const[c,j]=s.useState(0),[u,M]=s.useState(50),[C,g]=s.useState(""),[q,E]=s.useState([]),[A]=l.useForm(),h=async(x,o="",I=50)=>{const{data:i}=await b.custom({url:"",method:"get",meta:{operation:"pastPapersManagersToAdd",variables:{page:{value:x,type:"Int",required:!0},key:{value:o,type:"String",required:!1},pageSize:{value:I,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","firstName","middleName","lastName","fullName","dp","email","isActive","created","updated","canDelete","canManage"]}]}}).catch(d=>({data:null})).then(d=>d);i&&E(i.results)},m=async x=>{const{data:o}=await b.custom({url:"",method:"post",meta:{operation:"addPastPaperManager",variables:{id:{value:x,type:"Int",required:!0}},fields:["success","message",{pastPaperManager:["id",{manager:["id","firstName","middleName","lastName","fullName","dp","email","isActive","created","updated","canDelete","canManage"]},"created","updated","canDelete","canManage","canEdit","isActive"]}]}}).catch(I=>({data:null})).then(I=>I);o&&(o.success?(k.success(o.message),E(q.filter(I=>parseInt(I.id.toString())!==x)),n.onAdd(o.pastPaperManager)):k.error(o.message))},f=[{title:"Full Name",dataIndex:"fullName",key:"fullName",render:(x,o,I)=>e.jsx("span",{children:e.jsx("a",{children:o.fullName})})},{title:"Email",dataIndex:"email",key:"email",render:(x,o,I)=>e.jsx("span",{children:e.jsx("a",{children:o.email})})},{title:"Action",key:"action",render:(x,o,I)=>e.jsx(X,{title:"Add Manager?",placement:"topLeft",onConfirm:()=>m(parseInt(o.id.toString())),onCancel:()=>{},okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(L,{danger:!0,children:"Add"})})}];return s.useEffect(()=>{h(1,"",50)},[n.randKey]),e.jsxs(e.Fragment,{children:[e.jsx(Y,{style:{marginTop:10},children:e.jsx(z,{span:10,children:e.jsx(l,{layout:"vertical",form:A,onFinish:x=>{q.length=0,h(1,x.key,u)},children:e.jsx(l.Item,{name:"key",children:e.jsx(U,{size:"large",placeholder:"Search ...",prefix:e.jsx(B,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx(Y,{children:e.jsx(z,{span:24,children:e.jsx(Z,{columns:f,dataSource:q,scroll:{x:!0,y:"calc(100vh - 280px)"},pagination:{onChange:(x,o)=>{M(o),h(x,C,o)},total:c,pageSize:u,position:["bottomCenter"],showQuickJumper:!0}})})})]})};let W=[];for(let n=1960;n<=new Date().getFullYear();n++)W.push(n);W=W.reverse();const Fe=n=>{const[c,j]=s.useState([]),[u]=l.useForm(),[M,C]=s.useState(!1),g=async(h,m="",f=25)=>{const{data:x}=await b.custom({url:"",method:"get",meta:{operation:"pastPapersManagers",variables:{page:{value:h,type:"Int",required:!0},key:{value:m,type:"String",required:!1},pageSize:{value:f,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id",{manager:["id","firstName","middleName","lastName","fullName","dp","email"]},"isActive","created","updated","canDelete","canManage"]}]}}).catch(o=>({data:null})).then(o=>o);x&&j(x.results)},q=h=>{j([h,...c])},E=async h=>{const{data:m}=await b.custom({url:"",method:"post",meta:{operation:"deletePastPaperManager",variables:{id:{value:h,type:"Int",required:!0}},fields:["success","message"]}}).catch(f=>({data:null})).then(f=>f);m&&(m.success?(k.success(m.message),j(c.filter(f=>parseInt(f.id.toString())!==h))):k.error(m.message))},A=[{title:"Full Name",dataIndex:"fullName",key:"fullName",render:(h,m,f)=>e.jsx("span",{children:e.jsx("a",{children:m.manager.fullName})})},{title:"Email",dataIndex:"email",key:"email",render:(h,m,f)=>e.jsx("span",{children:e.jsx("a",{children:m.manager.email})})},{title:"",key:"action",render:(h,m,f)=>e.jsx("span",{children:e.jsx(X,{title:"Are you sure delete this manager?",placement:"topLeft",onConfirm:()=>E(parseInt(m.id.toString())),onCancel:()=>{},okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(L,{icon:e.jsx(se,{}),style:{float:"right"},danger:!0})})})}];return s.useEffect(()=>{g(1)},[n.randKey]),e.jsxs(e.Fragment,{children:[e.jsxs(Y,{style:{marginTop:10},children:[e.jsx(z,{span:10,children:e.jsx(l,{layout:"vertical",form:u,onFinish:h=>{c.length=0,g(1,h.key)},children:e.jsx(l.Item,{name:"key",children:e.jsx(U,{size:"large",placeholder:"Search ...",prefix:e.jsx(B,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(z,{span:14,style:{display:"flex",justifyContent:"end"},children:e.jsx(L,{size:"large",icon:e.jsx(ae,{}),onClick:()=>C(!0),danger:!0,children:"Create Manager"})})]}),e.jsx(Y,{children:e.jsx(z,{span:24,children:e.jsx(Z,{columns:A,dataSource:c})})}),e.jsx(G,{title:"Adding Past Papers Managers",anchor:"right",width:"40vw",onClose:h=>C(h),open:M,children:e.jsx(ze,{randKey:Math.random(),onAdd:q})})]})},ke=()=>e.jsx("div",{style:{marginTop:10},children:e.jsx(Fe,{})}),Le=()=>e.jsx(ke,{}),Ve=n=>{const{page:c}=n;return c==="PastPapersManagersPage"?e.jsx(Le,{}):c==="PastPapersManagementPage"?e.jsx(Ne,{}):c==="PastPapersHomePage"?e.jsx(be,{}):e.jsx("div",{children:"Page not found ..."})};export{Ve as PastPapersPages};
