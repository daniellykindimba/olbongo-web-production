import{bX as xe,j as e,r as a,aV as m,aZ as R,aR as D,a0 as Q,cT as W,B as Y,aw as N,b0 as B,fv as ne,cP as je,aX as fe,db as ye,g as S,_ as b,G as L,S as k,c1 as Se,c7 as X,aP as U,cq as le,cE as ie,fw as ve,u as Pe,a_ as Ie,a7 as be,c4 as we,d9 as ae,cF as me,a$ as oe,b$ as Ce,fx as qe,c9 as pe,fh as Le,fy as Te}from"./index-ccfcd4da.js";import{D as ce}from"./index-36291a54.js";import{L as se}from"./index-885f566c.js";import{S as he}from"./index-e57195d9.js";import{C as Z}from"./index-e733c2fd.js";import{A as de}from"./Alert-a74bd568.js";import{A as ze}from"./index-8ddfcaf4.js";import{U as Ne}from"./index-200f56a0.js";import{P as ue}from"./index-27f5ca3f.js";import"./index-ba1d69b2.js";import"./Skeleton-a2d4f426.js";import"./index-5c2e1e93.js";import"./InfoCircleFilled-f916d949.js";import"./Upload-a74f9032.js";import"./fade-dd39912a.js";import"./index-afc6ce50.js";import"./ActionButton-3b8e0c74.js";const Ee=xe(e.jsx("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"}),"CloudDownload"),Fe=s=>{var A;const[l,g]=a.useState(!1),[p]=m.useForm(),[I,j]=a.useState([]),[f,T]=a.useState(null),[w,E]=a.useState(!1),[h,x]=a.useState(!1),[i,y]=a.useState(1),[u,d]=a.useState(0),[P,M]=a.useState(!1),O=o=>{T(o),M(!0)},K=async o=>{const{data:C}=await S.custom({url:"",method:"post",meta:{operation:"createPastPaperDownload",variables:{id:{value:o.id,type:"Int",required:!0}},fields:["success","message"]}}).catch(n=>(console.error(n),b.error("Error creating download"),{data:null})).then(n=>n);C?C.success?(j(I.map(n=>(n.id===o.id&&(n.downloads=n.downloads+1),n))),window.open(o.doc,"_blank")):b.error("Error creating download"):b.error("Error in downloading")},_=async(o,C=20,n="")=>{g(!0);const{data:c}=await S.custom({url:"",method:"get",meta:{operation:"pastPapersSearch",variables:{page:{value:o,type:"Int",required:!0},key:{value:n,type:"String",required:!1},pageSize:{value:C,type:"Int",required:!1},year:{value:s.year,type:"Int",required:!1},subjectId:{value:s.subject,type:"Int",required:!1},schoolId:{value:s.school,type:"Int",required:!1},examinationTypeId:{value:s.examinationType,type:"Int",required:!1},educationLevelId:{value:s.educationLevel,type:"Int",required:!1},national:{value:s.national,type:"Boolean",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","title","description","year","doc","downloads","created","updated","canEdit","canManage","canDelete",{school:["id","name"]},{subject:["id","name"]},{schoolType:["id","name"]},{educationLevel:["id","name"]},{examinationType:["id","name"]},{author:["id"]}]}]}}).catch(()=>(b.error("Error getting Books"),{data:null})).then(t=>t);g(!1),c&&(j(c.results),d(c.total),y(c.page),E(c.hasNext),x(c.hasPrev))};return a.useEffect(()=>{_(1)},[s.randKey,s.school,s.subject,s.year,s.educationLevel,s.examinationType,s.national]),e.jsxs(e.Fragment,{children:[e.jsx(R,{style:{display:"flex",justifyContent:"center"},children:e.jsx(D,{span:12,children:e.jsx(m,{layout:"vertical",form:p,onFinish:o=>{_(1,20,o.key)},children:e.jsx(m.Item,{name:"key",children:e.jsx(Q,{size:"large",placeholder:"Search Past Paper(s)...",prefix:e.jsx(W,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx(Y,{sx:{maxHeight:"70vh",minHeight:"70vh",overflow:"auto"},children:e.jsx(se,{loading:l,itemLayout:"horizontal",dataSource:I,renderItem:o=>{var C,n,c,t;return e.jsxs(e.Fragment,{children:[e.jsx(se.Item,{actions:[e.jsx(N,{danger:!0,onClick:()=>O(o),children:"View/Read"},"list-loadmore-more")],children:e.jsx(se.Item.Meta,{title:e.jsxs(e.Fragment,{children:[e.jsxs("a",{onClick:()=>O(o),children:[o.title,e.jsxs(B,{style:{marginLeft:"10px"},children:["Downloads: ",o.downloads]})]}),e.jsx(ne,{title:"Download",placement:"top",children:e.jsx(N,{danger:!0,size:"small",icon:e.jsx(Ee,{}),onClick:()=>{K(o)}})})]}),description:e.jsxs(e.Fragment,{children:[o.school&&e.jsxs(B,{children:["School: ",(C=o.school)==null?void 0:C.name]}),o.subject&&e.jsxs(B,{children:["Subject: ",(n=o.subject)==null?void 0:n.name]}),o.year&&e.jsxs(B,{children:["Year: ",o.year]}),o.examinationType&&e.jsxs(B,{children:["Examination Type: ",(c=o.examinationType)==null?void 0:c.name]}),o.educationLevel&&e.jsxs(B,{children:["Education Level: ",(t=o.educationLevel)==null?void 0:t.name]})]})})}),e.jsx(je,{})]})}})}),(w||h)&&e.jsx(Y,{sx:{marginTop:"20px",display:"flex",justifyContent:"center"},children:e.jsx(fe,{defaultCurrent:i,total:u,onChange:(o,C)=>{_(o,C)}})}),e.jsx(ce,{anchor:"right",open:P,noOverFlow:!0,onClose:o=>M(o),title:e.jsxs("b",{children:[f==null?void 0:f.title," - ",(A=f==null?void 0:f.educationLevel)==null?void 0:A.name," - ",f==null?void 0:f.year]}),width:"80vw",children:e.jsx(e.Fragment,{children:e.jsx(ge,{url:f==null?void 0:f.doc})})})]})},ge=({url:s})=>{const[l,g]=a.useState(!0),p=()=>{g(!0),setTimeout(()=>{g(!1)},3e3)};return e.jsxs(e.Fragment,{children:[l&&e.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"89vh"},children:[e.jsx(ye,{color:"secondary"}),e.jsx("h4",{children:"Loading..."})]}),e.jsx("iframe",{src:s+"#toolbar=0",style:{width:"100%",height:"89vh",display:l?"none":"block"},onLoad:p})]})},{Option:J}=k;let ee=[];for(let s=1960;s<=new Date().getFullYear();s++)ee.push(s);ee=ee.reverse();const ke=s=>{const[l,g]=a.useState(!1),[p,I]=a.useState([]),[j,f]=a.useState([]),[T,w]=a.useState([]),[E,h]=a.useState([]),[x,i]=a.useState(),[y,u]=a.useState(),[d,P]=a.useState(),[M,O]=a.useState(),[K,_]=a.useState(),[A,o]=a.useState(!1),[C]=m.useForm(),[n,c]=a.useState(!1),t=async(r,F="",$=25)=>{const{data:V}=await S.custom({url:"",method:"get",meta:{operation:"subjects",variables:{page:{value:r,type:"Int",required:!0},key:{value:F,type:"String",required:!1},pageSize:{value:$,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","isActive","created","updated","canDelete","canManage"]}]}}).catch(H=>({data:null})).then(H=>H);V&&h(V.results)},v=async(r,F="",$=25)=>{const{data:V}=await S.custom({url:"",method:"get",meta:{operation:"educationLevels",variables:{page:{value:r,type:"Int",required:!0},key:{value:F,type:"String",required:!1},pageSize:{value:$,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","isActive","created","updated","canDelete","canManage"]}]}}).catch(H=>({data:null})).then(H=>H);V&&w(V.results)},z=async(r,F="",$=25)=>{const{data:V}=await S.custom({url:"",method:"get",meta:{operation:"examinationsTypes",variables:{page:{value:r,type:"Int",required:!0},key:{value:F,type:"String",required:!1},pageSize:{value:$,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","isActive","created","updated","canDelete","canManage"]}]}}).catch(H=>({data:null})).then(H=>H);V&&I(V.results)},q=async(r,F="",$=25)=>{const{data:V}=await S.custom({url:"",method:"get",meta:{operation:"schools",variables:{page:{value:r,type:"Int",required:!0},key:{value:F,type:"String",required:!1},pageSize:{value:$,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","serialNumber","isActive","created","updated","canDelete","canManage"]}]}}).catch(H=>({data:null})).then(H=>H);V&&f(V.results)};return a.useEffect(()=>{q(1),z(1),v(1),t(1)},[s.randKey]),e.jsxs(e.Fragment,{children:[e.jsx(L,{container:!0,spacing:2,children:e.jsx(L,{item:!0,xs:12,children:e.jsxs(Y,{style:{fontSize:18,marginBottom:5,display:"flex",alignItems:"center",height:40},children:["Enable Advanced Past Papers Search Filter",e.jsx(Y,{sx:{display:"inline",marginLeft:2},children:e.jsx(he,{size:"default",onChange:r=>{c(r),r||(C.resetFields(),_(null),u(null),O(null),i(null),P(null),o(!1))},title:"Advanced Filter"})})]})})}),e.jsxs(L,{container:!0,spacing:2,children:[n&&e.jsx(L,{item:!0,xs:12,children:e.jsx(Z,{title:e.jsx(e.Fragment,{children:n&&e.jsxs("span",{style:{float:"right"},children:[e.jsx("span",{style:{marginRight:3,fontSize:16,fontWeight:"bolder"},children:"National Examinations"}),e.jsx(he,{size:"default",onChange:r=>{o(r)}})]})}),children:n&&e.jsx(m,{layout:"vertical",form:C,onFinish:r=>{_(r.educationLevelId),u(r.subjectId),O(r.examinationTypeId),i(r.schoolId),P(r.year),o(A),g(!1)},onValuesChange:(r,F)=>{g(!0)},children:e.jsxs(L,{container:!0,spacing:2,children:[e.jsx(L,{item:!0,xs:12,sm:3,children:!A&&e.jsx(m.Item,{name:"examinationTypeId",label:"Examination Type",children:e.jsx(k,{size:"large",onChange:r=>{},dropdownStyle:{zIndex:9999},children:p.map(r=>e.jsx(J,{value:parseInt(r.id.toString()),children:r.name},"examinationType_"+r.id))})})}),e.jsx(L,{item:!0,xs:12,sm:2,children:e.jsx(m.Item,{name:"educationLevelId",label:"Education Level",rules:[{required:!1,type:"number",message:"Please input an Education Level"}],children:e.jsx(k,{size:"large",showSearch:!0,placeholder:"Select an Education Level...",filterOption:!1,onSearch:r=>{v(1,r)},onChange:r=>{},dropdownStyle:{zIndex:9999},children:T.map(r=>e.jsx(J,{value:parseInt(r.id.toString()),children:r.name},"educationLevel_"+r.id.toString()))})})}),e.jsx(L,{item:!0,xs:12,sm:2,children:e.jsx(m.Item,{name:"subjectId",label:"Subject",rules:[{required:!1,type:"number",message:"Please input a Subject"}],children:e.jsx(k,{size:"large",placeholder:"Select a Subject...",showSearch:!0,filterOption:!1,onSearch:r=>{t(1,r)},onChange:r=>{},dropdownStyle:{zIndex:9999},children:E.map(r=>e.jsx(J,{value:parseInt(r.id.toString()),children:r.name},"subject_"+r.id.toString()))})})}),e.jsx(L,{item:!0,xs:12,sm:2,children:e.jsx(m.Item,{name:"year",label:"Year",rules:[{required:!1,type:"number",message:"Please input a valid year"}],children:e.jsx(k,{size:"large",filterOption:!0,showSearch:!0,onChange:r=>{},dropdownStyle:{zIndex:9999},children:ee.map(r=>e.jsx(J,{value:r,children:r},"year_"+r))})})}),e.jsx(L,{item:!0,xs:12,sm:3,children:!A&&e.jsx(m.Item,{name:"schoolId",label:"School",children:e.jsx(k,{size:"large",filterOption:!1,showSearch:!0,onSearch:r=>{q(1,r)},onChange:r=>{},dropdownStyle:{zIndex:9999},children:j.map(r=>e.jsxs(J,{value:parseInt(r.id.toString()),children:[r.name," ",e.jsx("span",{style:{marginLeft:5},children:e.jsx(B,{color:"red",children:r.serialNumber})})]},"school_"+r.id.toString()))})})}),e.jsx(L,{item:!0,xs:12,sm:12,children:e.jsxs(m.Item,{children:[e.jsx(N,{style:{float:"left"},size:"large",icon:e.jsx(Se,{}),danger:!0,onClick:()=>{C.resetFields(),_(null),u(null),O(null),i(null),P(null),o(!1)},children:"Clear"}),e.jsx(N,{style:{float:"right"},htmlType:"submit",size:"large",icon:e.jsx(W,{}),disabled:!l,danger:!0,children:"Search"})]})})]})})})}),e.jsx(L,{item:!0,xs:12,children:e.jsx(Z,{style:{padding:0,minHeight:"80svh",maxHeight:"80svh"},children:e.jsx(Fe,{school:x,educationLevel:K,subject:y,year:d,examinationType:M,national:A})})})]})]})},Me=()=>(a.useEffect(()=>{document.title=X.system_name+": Past Papers"},[]),e.jsxs("div",{style:{marginTop:10},children:[e.jsx("div",{style:{marginTop:10,marginBottom:10},children:e.jsx(U,{children:e.jsx(U.Item,{children:e.jsx(le,{to:"/pastpapers",children:"Home"})})})}),e.jsx(ke,{})]})),Ae=s=>{const[l,g]=a.useState(!1),[p,I]=a.useState([]),[j,f]=a.useState(0),[T,w]=a.useState(1),[E,h]=a.useState(25),x=async(i,y="",u=25)=>{g(!0);const{data:d}=await S.custom({url:"",method:"get",meta:{operation:"pastPapersEducationLevels",variables:{page:{value:i,type:"Int",required:!0},key:{value:y,type:"String",required:!1},pageSize:{value:u,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","totalPastPapers",{educationLevel:ve}]}]}}).catch(()=>({data:null})).then(P=>P);d&&(f(d.total),w(d.page),h(d.pageSize),I(d.results)),g(!1)};return a.useEffect(()=>{x(1)},[]),e.jsx(e.Fragment,{children:e.jsx(Y,{children:l?e.jsx(ie,{}):e.jsxs(e.Fragment,{children:[p.length===0&&e.jsx(de,{severity:"info",children:"No Education Level found"}),p.length>0&&e.jsx(L,{container:!0,spacing:2,children:p.map(i=>e.jsx(L,{item:!0,xs:12,sm:6,md:4,lg:3,xl:2,children:e.jsx(ne,{title:"Click to View Paster Papers",placement:"top",children:e.jsx(Z,{style:{width:"100%",cursor:"pointer"},children:e.jsxs("h3",{children:[i.educationLevel.name,e.jsx(B,{color:"green",style:{marginLeft:10},children:i.totalPastPapers})]})})})},i.id))})]})})})},De=()=>(a.useEffect(()=>{document.title=X.system_name+": Education Levels"},[]),e.jsx("div",{style:{marginTop:10},children:e.jsx(Ae,{})})),{Option:G}=k,Oe=s=>Array.isArray(s)?s:s==null?void 0:s.fileList;let te=[];for(let s=1960;s<=new Date().getFullYear();s++)te.push(s);te=te.reverse();const _e=s=>{const[l]=m.useForm(),[g,p]=a.useState(!1),[I,j]=a.useState(!1);Pe();const[f,T]=a.useState([]),[w,E]=a.useState([]),[h,x]=a.useState([]),[i,y]=a.useState([]),[u,d]=a.useState([]),[P,M]=a.useState(null);a.useState(),a.useState(),a.useState(),a.useState(),a.useState();const[O,K]=a.useState(!1),_=async(t,v="",z=25)=>{const{data:q}=await S.custom({url:"",method:"get",meta:{operation:"schoolTypes",variables:{page:{value:t,type:"Int",required:!0},key:{value:v,type:"String",required:!1},pageSize:{value:z,type:"Int",required:!1},showAll:{value:!0,type:"Boolean",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","isActive","created","updated","canDelete","canManage"]}]}}).catch(r=>({data:null})).then(r=>r);q&&T(q.results)},A=async(t,v="",z=25)=>{const{data:q}=await S.custom({url:"",method:"get",meta:{operation:"subjects",variables:{page:{value:t,type:"Int",required:!0},key:{value:v,type:"String",required:!1},pageSize:{value:z,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","isActive","created","updated","canDelete","canManage"]}]}}).catch(r=>({data:null})).then(r=>r);q&&d(q.results)},o=async(t,v="",z=25,q=[])=>{const{data:r}=await S.custom({url:"",method:"get",meta:{operation:"educationLevels",variables:{page:{value:t,type:"Int",required:!0},key:{value:v,type:"String",required:!1},pageSize:{value:z,type:"Int",required:!1},schoolTypes:{value:q,type:"[Int]",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","isActive","created","updated","canDelete","canManage"]}]}}).catch(F=>({data:null})).then(F=>F);r&&y(r.results)},C=async(t,v="",z=25)=>{const{data:q}=await S.custom({url:"",method:"get",meta:{operation:"examinationsTypes",variables:{page:{value:t,type:"Int",required:!0},key:{value:v,type:"String",required:!1},pageSize:{value:z,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","isActive","created","updated","canDelete","canManage"]}]}}).catch(r=>({data:null})).then(r=>r);q&&E(q.results)},n=async(t,v="",z=25,q=[])=>{const{data:r}=await S.custom({url:"",method:"get",meta:{operation:"schools",variables:{page:{value:t,type:"Int",required:!0},key:{value:v,type:"String",required:!1},pageSize:{value:z,type:"Int",required:!1},schoolTypes:{value:q,type:"[Int]",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","serialNumber","isActive","created","updated","canDelete","canManage"]}]}}).catch(F=>({data:null})).then(F=>F);r&&x(r.results)},c=async t=>{var z;p(!0),j(!1);const{data:v}=await S.custom({url:"",method:"post",meta:{operation:"createPastPaper",variables:{title:{value:t.title,type:"String",required:!0},file:{value:t.file,type:"Upload",required:!0},schoolTypeId:{value:parseInt(t.schoolTypeId.toString()),type:"Int",required:!0},examinationTypeId:{value:parseInt(t.examinationTypeId.toString()),type:"Int",required:!1},subjectId:{value:t.subjectId,type:"Int",required:!0},educationLevelId:{value:parseInt(t.educationLevelId.toString()),type:"Int",required:!0},schoolId:{value:parseInt(((z=t==null?void 0:t.schoolId)==null?void 0:z.toString())??"0"),type:"Int",required:!1},year:{value:t.year,type:"Int",required:!0}},fields:["success","message",{pastPaper:["id","title","description","year","doc",{school:["id","name","serialNumber"]},{subject:["id","name"]},{examinationType:["id","name"]},{educationLevel:["id","name"]},{author:["id","fullName","firstName","middleName","lastName","email"]},"isActive","created","updated","canDelete","canManage"]}]}}).catch(q=>(b.error("Error creating past paper"),{data:null})).then(q=>q);v&&(v.success?(b.success(v.message),l.resetFields(),s.onFinish(v.pastPaper)):b.error(v.message)),p(!1)};return a.useEffect(()=>{_(1),n(1,"",25,[]),C(1),A(1)},[s.random]),I?e.jsx(e.Fragment,{children:e.jsx(Ie,{direction:"vertical",style:{display:"flex",justifyContent:"center"},children:e.jsx(ze,{message:"Success",description:e.jsx(e.Fragment,{children:e.jsx("p",{children:"File uploaded successfully"})}),action:[e.jsx(N,{onClick:()=>j(!1),children:"Upload another file(s)"})],type:"success"})})}):e.jsx(e.Fragment,{children:e.jsx(be,{spinning:g,children:e.jsxs(m,{layout:"vertical",form:l,onFinish:t=>{c(t)},requiredMark:!0,autoComplete:"off",children:[e.jsxs(R,{children:[e.jsxs(D,{span:12,style:{padding:5},children:[e.jsx(m.Item,{name:"title",label:"Examination Title",rules:[{required:!0,message:"Please input an Examination Title"}],children:e.jsx(Q,{size:"large",placeholder:"Examination Title"})}),e.jsx(m.Item,{name:"schoolTypeId",label:"School Type",rules:[{required:!0,message:"Please select a school type"}],children:e.jsx(k,{size:"large",onChange:t=>{M(t),o(1,"",100,[parseInt(t.toString())]),n(1,"",100,[parseInt(t.toString())]),l.resetFields(["educationLevelId","schoolId","subjectId"])},dropdownStyle:{zIndex:9999},children:f.map(t=>e.jsx(G,{value:t.id,children:t.name},"schoolType_"+t.id))})}),!O&&e.jsx(m.Item,{name:"examinationTypeId",label:"Examination Type",children:e.jsx(k,{size:"large",onChange:t=>{},dropdownStyle:{zIndex:9999},children:w.map(t=>e.jsx(G,{value:t.id,children:t.name},"examinationType_"+t.id))})})]}),e.jsxs(D,{span:12,style:{padding:5},children:[e.jsx(m.Item,{name:"educationLevelId",label:"Education Level",rules:[{required:!0,type:"number",message:"Please input an Education Level"}],children:e.jsx(k,{disabled:P===null,size:"large",showSearch:!0,placeholder:"Select an Education Level...",filterOption:!1,onSearch:t=>{o(1,t)},onChange:t=>{},dropdownStyle:{zIndex:9999},children:i.map(t=>e.jsx(G,{value:parseInt(t.id.toString()),children:t.name},"educationLevel_"+t.id.toString()))})}),e.jsx(m.Item,{name:"subjectId",label:"Subject",rules:[{required:!0,type:"number",message:"Please input a Subject"}],children:e.jsx(k,{size:"large",placeholder:"Select a Subject...",showSearch:!0,filterOption:!1,onSearch:t=>{A(1,t)},onChange:t=>{},dropdownStyle:{zIndex:9999},children:u.map(t=>e.jsx(G,{value:parseInt(t.id.toString()),children:t.name},"subject_"+t.id.toString()))})}),e.jsx(m.Item,{name:"year",label:"Year",rules:[{required:!0,type:"number",message:"Please input a valid year"}],children:e.jsx(k,{size:"large",filterOption:!0,showSearch:!0,onChange:t=>{},dropdownStyle:{zIndex:9999},children:te.map(t=>e.jsx(G,{value:t,children:t},"year_"+t))})}),!O&&e.jsx(m.Item,{name:"schoolId",label:"School",children:e.jsx(k,{disabled:P===null,size:"large",filterOption:!1,showSearch:!0,onSearch:t=>{n(1,t)},onChange:t=>{},dropdownStyle:{zIndex:9999},children:h.map(t=>e.jsxs(G,{value:parseInt(t.id.toString()),children:[t.name," ",e.jsx("span",{style:{marginLeft:5},children:e.jsx(B,{color:"red",children:t.serialNumber})})]},"school_"+t.id.toString()))})})]}),e.jsx(D,{span:24,children:e.jsx(m.Item,{label:"Pick Past Paper File (PDF)",children:e.jsx(m.Item,{name:"file",valuePropName:"fileList",getValueFromEvent:Oe,noStyle:!0,rules:[{required:!0,type:"array",message:"Please upload students excel file"}],children:e.jsxs(Ne.Dragger,{name:"file",accept:".pdf",multiple:!0,beforeUpload:()=>!1,children:[e.jsx("p",{className:"ant-upload-drag-icon",children:e.jsx(we,{})}),e.jsx("p",{className:"ant-upload-text",children:"Click or drag file to this area to upload"}),e.jsx("p",{className:"ant-upload-hint",children:"Support for a single or bulk upload."})]})})})})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx(N,{size:"large",loading:g,onClick:()=>{M(null),l.resetFields()},danger:!0,children:"Reset"}),e.jsx(N,{type:"primary",size:"large",htmlType:"submit",loading:g,children:"Upload"})]})]})})})},Ve=async()=>{const{data:s}=await S.custom({url:"",method:"post",meta:{operation:"syncPastPapersSubjects",fields:["success","message"]}}).catch(()=>({data:null})).then(l=>l);return s?s.success?(b.success(s.message),s.success):(b.error(s.message),!1):!1},He=async()=>{const{data:s}=await S.custom({url:"",method:"post",meta:{operation:"syncPastPapersEducationLevels",fields:["success","message"]}}).catch(()=>({data:null})).then(l=>l);return s?s.success?(b.success(s.message),s.success):(b.error(s.message),!1):!1},Be=async()=>{const{data:s}=await S.custom({url:"",method:"post",meta:{operation:"syncPastPapersSchools",fields:["success","message"]}}).catch(()=>({data:null})).then(l=>l);return s?s.success?(b.success(s.message),s.success):(b.error(s.message),!1):!1},Ye=s=>{var C;const[l,g]=a.useState(!1),[p,I]=a.useState([]),[j,f]=a.useState(null),[T]=m.useForm(),[w,E]=a.useState(!1),[h,x]=a.useState(!1),[i,y]=a.useState(0),[u,d]=a.useState(1),[P,M]=a.useState(25),O=n=>{f(n),x(!0)},K=async(n,c="",t=25)=>{g(!0);const{data:v}=await S.custom({url:"",method:"get",meta:{operation:"pastPapers",variables:{page:{value:n,type:"Int",required:!0},key:{value:c,type:"String",required:!1},pageSize:{value:t,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","title","description","year","doc",{school:["id","name","serialNumber"]},{subject:["id","name"]},{examinationType:["id","name"]},{educationLevel:["id","name"]},{author:["id","fullName","firstName","middleName","lastName","email"]},"isActive","created","updated","canDelete","canManage"]}]}}).catch(()=>({data:null})).then(z=>z);v&&(y(v.total),d(v.page),I(v.results)),g(!1)},_=n=>{I([n,...p])},A=async n=>{const{data:c}=await S.custom({url:"",method:"post",meta:{operation:"deletePastPaper",variables:{id:{value:n,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>({data:null})).then(t=>t);c&&(c.success?(b.success(c.message),I(p.filter(t=>parseInt(t.id.toString())!==n))):b.error(c.message))},o=[{title:"Title",dataIndex:"title",key:"title",render:(n,c,t)=>e.jsxs("span",{children:[e.jsx("a",{children:c.title}),e.jsx(B,{color:"red",style:{marginLeft:5},children:c.year})]})},{title:"Education Level",dataIndex:"educationLevel",key:"educationLEvel",render:(n,c,t)=>e.jsx("span",{children:c.educationLevel.name})},{title:"Examination Type",dataIndex:"examinationType",key:"examinationType",render:(n,c,t)=>e.jsx("span",{children:c.examinationType.name})},{title:"Document",dataIndex:"doc",key:"doc",render:(n,c,t)=>e.jsx("span",{children:e.jsx(N,{icon:e.jsx(qe,{}),style:{float:"left"},danger:!0,onClick:()=>O(c),children:"View"})})},{title:"",key:"action",render:(n,c,t)=>e.jsx("span",{children:e.jsx(ue,{title:"Are you sure delete this manager?",placement:"topLeft",onConfirm:()=>A(parseInt(c.id.toString())),onCancel:()=>{},okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(N,{icon:e.jsx(pe,{}),style:{float:"right"},danger:!0})})})}];return a.useEffect(()=>{K(1,"",P)},[s.randKey]),e.jsxs(e.Fragment,{children:[e.jsxs(R,{style:{marginTop:10},children:[e.jsx(D,{span:10,children:e.jsx(m,{layout:"vertical",form:T,onFinish:n=>{p.length=0,K(1,n.key)},children:e.jsx(m.Item,{name:"key",children:e.jsx(Q,{size:"large",placeholder:"Search ...",prefix:e.jsx(W,{}),autoComplete:"off",allowClear:!0})})})}),e.jsxs(D,{span:14,style:{display:"flex",justifyContent:"end"},children:[e.jsx(N,{size:"large",danger:!0,icon:e.jsx(ae,{}),onClick:()=>He(),children:"Sync Education Levels"}),e.jsx(N,{size:"large",icon:e.jsx(ae,{}),onClick:()=>{Ve().then(n=>{n&&K(1)})},danger:!0,children:"Sync Subjects"}),e.jsx(N,{size:"large",icon:e.jsx(ae,{}),onClick:()=>Be(),danger:!0,children:"Sync Schools"}),e.jsx(N,{size:"large",icon:e.jsx(me,{}),onClick:()=>E(!0),danger:!0,children:"Create/Add Past Paper"})]})]}),e.jsx(R,{children:e.jsx(D,{span:24,children:e.jsx(oe,{loading:l,columns:o,dataSource:p,pagination:{position:["bottomCenter"],pageSize:P,total:i,onChange:(n,c)=>{K(n,"",c)},onShowSizeChange:(n,c)=>{K(n,"",c),M(c)}},scroll:{y:window.innerHeight-325}})})}),e.jsx(Ce,{title:"Adding/Creating Past Paper",width:"80vw",open:w,onClose:n=>E(n),children:e.jsx(_e,{onFinish:_})}),e.jsx(ce,{anchor:"right",open:h,noOverFlow:!0,onClose:n=>x(n),title:e.jsxs("b",{children:[j==null?void 0:j.title," - ",(C=j==null?void 0:j.educationLevel)==null?void 0:C.name," - ",j==null?void 0:j.year]}),width:"80vw",children:e.jsx(e.Fragment,{children:e.jsx(ge,{url:j==null?void 0:j.doc})})})]})},Ke=()=>(a.useEffect(()=>{document.title=X.system_name+": Past Papers Management"},[]),e.jsxs(Y,{sx:{marginTop:{xs:10,sm:8}},children:[e.jsx(Y,{children:e.jsxs(U,{children:[e.jsx(U.Item,{children:e.jsx(le,{to:"/pastpapers",children:"Home"})}),e.jsx(U.Item,{children:"Past Papers Management"})]})}),e.jsx(Ye,{})]})),Ue=s=>{const[l,g]=a.useState(0),[p,I]=a.useState(50),[j,f]=a.useState(""),[T,w]=a.useState([]),[E]=m.useForm(),h=async(y,u="",d=50)=>{const{data:P}=await S.custom({url:"",method:"get",meta:{operation:"pastPapersManagersToAdd",variables:{page:{value:y,type:"Int",required:!0},key:{value:u,type:"String",required:!1},pageSize:{value:d,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","firstName","middleName","lastName","fullName","dp","email","isActive","created","updated","canDelete","canManage"]}]}}).catch(M=>({data:null})).then(M=>M);P&&w(P.results)},x=async y=>{const{data:u}=await S.custom({url:"",method:"post",meta:{operation:"addPastPaperManager",variables:{id:{value:y,type:"Int",required:!0}},fields:["success","message",{pastPaperManager:["id",{manager:["id","firstName","middleName","lastName","fullName","dp","email","isActive","created","updated","canDelete","canManage"]},"created","updated","canDelete","canManage","canEdit","isActive"]}]}}).catch(d=>({data:null})).then(d=>d);u&&(u.success?(b.success(u.message),w(T.filter(d=>parseInt(d.id.toString())!==y)),s.onAdd(u.pastPaperManager)):b.error(u.message))},i=[{title:"Full Name",dataIndex:"fullName",key:"fullName",render:(y,u,d)=>e.jsx("span",{children:e.jsx("a",{children:u.fullName})})},{title:"Email",dataIndex:"email",key:"email",render:(y,u,d)=>e.jsx("span",{children:e.jsx("a",{children:u.email})})},{title:"Action",key:"action",render:(y,u,d)=>e.jsx(ue,{title:"Add Manager?",placement:"topLeft",onConfirm:()=>x(parseInt(u.id.toString())),onCancel:()=>{},okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(N,{danger:!0,children:"Add"})})}];return a.useEffect(()=>{h(1,"",50)},[s.randKey]),e.jsxs(e.Fragment,{children:[e.jsx(R,{style:{marginTop:10},children:e.jsx(D,{span:10,children:e.jsx(m,{layout:"vertical",form:E,onFinish:y=>{T.length=0,h(1,y.key,p)},children:e.jsx(m.Item,{name:"key",children:e.jsx(Q,{size:"large",placeholder:"Search ...",prefix:e.jsx(W,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx(R,{children:e.jsx(D,{span:24,children:e.jsx(oe,{columns:i,dataSource:T,scroll:{x:!0,y:"calc(100vh - 280px)"},pagination:{onChange:(y,u)=>{I(u),h(y,j,u)},total:l,pageSize:p,position:["bottomCenter"],showQuickJumper:!0}})})})]})};let re=[];for(let s=1960;s<=new Date().getFullYear();s++)re.push(s);re=re.reverse();const Re=s=>{const[l,g]=a.useState([]),[p]=m.useForm(),[I,j]=a.useState(!1),f=async(h,x="",i=25)=>{const{data:y}=await S.custom({url:"",method:"get",meta:{operation:"pastPapersManagers",variables:{page:{value:h,type:"Int",required:!0},key:{value:x,type:"String",required:!1},pageSize:{value:i,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id",{manager:["id","firstName","middleName","lastName","fullName","dp","email"]},"isActive","created","updated","canDelete","canManage"]}]}}).catch(u=>({data:null})).then(u=>u);y&&g(y.results)},T=h=>{g([h,...l])},w=async h=>{const{data:x}=await S.custom({url:"",method:"post",meta:{operation:"deletePastPaperManager",variables:{id:{value:h,type:"Int",required:!0}},fields:["success","message"]}}).catch(i=>({data:null})).then(i=>i);x&&(x.success?(b.success(x.message),g(l.filter(i=>parseInt(i.id.toString())!==h))):b.error(x.message))},E=[{title:"Full Name",dataIndex:"fullName",key:"fullName",render:(h,x,i)=>e.jsx("span",{children:e.jsx("a",{children:x.manager.fullName})})},{title:"Email",dataIndex:"email",key:"email",render:(h,x,i)=>e.jsx("span",{children:e.jsx("a",{children:x.manager.email})})},{title:"",key:"action",render:(h,x,i)=>e.jsx("span",{children:e.jsx(ue,{title:"Are you sure delete this manager?",placement:"topLeft",onConfirm:()=>w(parseInt(x.id.toString())),onCancel:()=>{},okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(N,{icon:e.jsx(pe,{}),style:{float:"right"},danger:!0})})})}];return a.useEffect(()=>{f(1)},[s.randKey]),e.jsxs(e.Fragment,{children:[e.jsxs(R,{style:{marginTop:10},children:[e.jsx(D,{span:10,children:e.jsx(m,{layout:"vertical",form:p,onFinish:h=>{l.length=0,f(1,h.key)},children:e.jsx(m.Item,{name:"key",children:e.jsx(Q,{size:"large",placeholder:"Search ...",prefix:e.jsx(W,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(D,{span:14,style:{display:"flex",justifyContent:"end"},children:e.jsx(N,{size:"large",icon:e.jsx(me,{}),onClick:()=>j(!0),danger:!0,children:"Create Manager"})})]}),e.jsx(R,{children:e.jsx(D,{span:24,children:e.jsx(oe,{columns:E,dataSource:l})})}),e.jsx(ce,{title:"Adding Past Papers Managers",anchor:"right",width:"40vw",onClose:h=>j(h),open:I,noOverFlow:!0,children:e.jsx(Ue,{randKey:Math.random(),onAdd:T})})]})},$e=()=>(a.useEffect(()=>{document.title=X.system_name+": Managers"},[]),e.jsx("div",{style:{marginTop:10},children:e.jsx(Re,{})})),Ge=s=>{const[l,g]=a.useState(!1),[p,I]=a.useState([]),[j,f]=a.useState(0),[T,w]=a.useState(1),[E,h]=a.useState(25),x=async(i,y="",u=25)=>{g(!0);const{data:d}=await S.custom({url:"",method:"get",meta:{operation:"pastPapersSchools",variables:{page:{value:i,type:"Int",required:!0},key:{value:y,type:"String",required:!1},pageSize:{value:u,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id",{school:Le}]}]}}).catch(P=>({data:null})).then(P=>P);d&&(f(d.total),w(d.page),h(d.pageSize),I(d.results)),g(!1)};return a.useEffect(()=>{x(1)},[s.randKey]),e.jsx(Y,{children:l?e.jsx(ie,{}):e.jsxs(e.Fragment,{children:[p.length===0&&e.jsx(de,{severity:"info",children:"No schools found"}),p.length>0&&e.jsx(L,{container:!0,spacing:2,children:p.map(i=>e.jsx(L,{item:!0,xs:12,sm:6,md:4,lg:3,xl:2,children:e.jsx("div",{className:"card",children:e.jsxs("div",{className:"card-body",children:[e.jsx("h5",{className:"card-title",children:i.school.name}),e.jsx("p",{className:"card-text",children:i.school.serialNumber})]})})},i.id))})]})})},Xe=()=>(a.useEffect(()=>{document.title=X.system_name+": Past Papers Schools"},[]),e.jsxs(Y,{sx:{marginTop:10},children:[e.jsx("div",{style:{marginTop:10,marginBottom:10},children:e.jsxs(U,{children:[e.jsx(U.Item,{children:e.jsx(le,{to:"/pastpapers",children:"Home"})}),e.jsx(U.Item,{children:"Schools"})]})}),e.jsx(Ge,{})]})),Je=s=>{const[l,g]=a.useState(!1),[p,I]=a.useState([]),[j,f]=a.useState(0),[T,w]=a.useState(1),[E,h]=a.useState(25),x=async(i,y="",u=25)=>{g(!0);const{data:d}=await S.custom({url:"",method:"get",meta:{operation:"pastPapersSubjects",variables:{page:{value:i,type:"Int",required:!0},key:{value:y,type:"String",required:!1},pageSize:{value:u,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","totalPastPapers",{subject:Te}]}]}}).catch(()=>({data:null})).then(P=>P);d&&(f(d.total),w(d.page),h(d.pageSize),I(d.results)),g(!1)};return a.useEffect(()=>{x(1)},[]),e.jsx(e.Fragment,{children:e.jsx(Y,{children:l?e.jsx(ie,{}):e.jsxs(e.Fragment,{children:[p.length===0&&e.jsx(de,{severity:"info",children:"No Subject found"}),p.length>0&&e.jsx(L,{container:!0,spacing:2,children:p.map(i=>e.jsx(L,{item:!0,xs:12,sm:6,md:4,lg:3,xl:2,children:e.jsx(ne,{title:"Click to View Paster Papers",placement:"top",children:e.jsx(Z,{style:{width:"100%",cursor:"pointer"},children:e.jsxs("h3",{children:[i.subject.name,e.jsx(B,{color:"green",style:{marginLeft:10},children:i.totalPastPapers})]})})})},i.id))})]})})})},Qe=()=>(a.useEffect(()=>{document.title=X.system_name+": Past Papers Subjects"},[]),e.jsx(Y,{sx:{marginTop:10},children:e.jsx(Je,{})})),gt=s=>{const{page:l}=s;return l==="PastPapersManagersPage"?e.jsx($e,{}):l==="PastPapersManagementPage"?e.jsx(Ke,{}):l==="PastPapersHomePage"?e.jsx(Me,{}):l==="PastPapersSchoolsPage"?e.jsx(Xe,{}):l==="PastPapersSubjectsPage"?e.jsx(Qe,{}):l==="PastPapersEducationLevelsPage"?e.jsx(De,{}):e.jsx("div",{children:"Page not found ..."})};export{gt as PastPapersPages};
