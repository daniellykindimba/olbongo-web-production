import{ch as je,j as e,r as a,aT as m,aW as $,aP as O,a1 as Z,B as R,av as E,aZ as K,eT as ie,cM as fe,P as ye,cT as Se,g as S,_ as w,G as T,S as M,cn as J,cL as Q,aN as b,cz as _,cK as oe,eU as ve,u as Pe,aX as Ie,a8 as be,ce as pe,aY as ce,cl as we,ez as Ce,eV as qe}from"./index-7ac8fc92.js";import{D as de}from"./index-1974f517.js";import{L as re}from"./index-537ec24f.js";import{S as ee}from"./SearchOutlined-a14f7475.js";import{S as me}from"./index-a20c1719.js";import{C as te}from"./index-0a7ff63a.js";import{C as Le}from"./ClearOutlined-44d826c7.js";import{A as ue}from"./Alert-cd7f3232.js";import{A as Te}from"./index-3e999fd0.js";import{U as ze}from"./index-3b39667f.js";import{I as Ne}from"./InboxOutlined-c2b4e4a6.js";import{F as Ee}from"./FolderViewOutlined-490dc0ac.js";import{P as he}from"./index-c1edda26.js";import{S as ne}from"./SyncOutlined-a9363d40.js";import{D as ge}from"./DeleteOutlined-044ab42c.js";import"./index-c246f7c3.js";import"./Skeleton-a1e70c5e.js";import"./DotChartOutlined-f39c986e.js";import"./index-0e10b20d.js";import"./InfoCircleFilled-72907a72.js";import"./InfoCircleFilled-baaa675e.js";import"./Upload-8fd33b7d.js";import"./fade-4eb0cb8a.js";import"./DeleteOutlined-25685737.js";import"./DownloadOutlined-6cd35f11.js";import"./index-03a70552.js";import"./ActionButton-c3339e52.js";const Fe=je(e.jsx("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"}),"CloudDownload"),ke=s=>{var D;const[l,g]=a.useState(!1),[p]=m.useForm(),[I,j]=a.useState([]),[f,z]=a.useState(null),[C,F]=a.useState(!1),[h,x]=a.useState(!1),[i,y]=a.useState(1),[u,d]=a.useState(0),[P,A]=a.useState(!1),V=o=>{z(o),A(!0)},U=async o=>{const{data:q}=await S.custom({url:"",method:"post",meta:{operation:"createPastPaperDownload",variables:{id:{value:o.id,type:"Int",required:!0}},fields:["success","message"]}}).catch(n=>(console.error(n),w.error("Error creating download"),{data:null})).then(n=>n);q?q.success?(j(I.map(n=>(n.id===o.id&&(n.downloads=n.downloads+1),n))),window.open(o.doc,"_blank")):w.error("Error creating download"):w.error("Error in downloading")},H=async(o,q=20,n="")=>{g(!0);const{data:c}=await S.custom({url:"",method:"get",meta:{operation:"pastPapersSearch",variables:{page:{value:o,type:"Int",required:!0},key:{value:n,type:"String",required:!1},pageSize:{value:q,type:"Int",required:!1},year:{value:s.year,type:"Int",required:!1},subjectId:{value:s.subject,type:"Int",required:!1},schoolId:{value:s.school,type:"Int",required:!1},examinationTypeId:{value:s.examinationType,type:"Int",required:!1},educationLevelId:{value:s.educationLevel,type:"Int",required:!1},national:{value:s.national,type:"Boolean",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","title","description","year","doc","downloads","created","updated","canEdit","canManage","canDelete",{school:["id","name"]},{subject:["id","name"]},{schoolType:["id","name"]},{educationLevel:["id","name"]},{examinationType:["id","name"]},{author:["id"]}]}]}}).catch(()=>(w.error("Error getting Books"),{data:null})).then(t=>t);g(!1),c&&(j(c.results),d(c.total),y(c.page),F(c.hasNext),x(c.hasPrev))};return a.useEffect(()=>{H(1)},[s.randKey,s.school,s.subject,s.year,s.educationLevel,s.examinationType,s.national]),e.jsxs(e.Fragment,{children:[e.jsx($,{style:{display:"flex",justifyContent:"center"},children:e.jsx(O,{span:12,children:e.jsx(m,{layout:"vertical",form:p,onFinish:o=>{H(1,20,o.key)},children:e.jsx(m.Item,{name:"key",children:e.jsx(Z,{size:"large",placeholder:"Search Past Paper(s)...",prefix:e.jsx(ee,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx(R,{sx:{maxHeight:"70vh",minHeight:"70vh",overflow:"auto"},children:e.jsx(re,{loading:l,itemLayout:"horizontal",dataSource:I,renderItem:o=>{var q,n,c,t;return e.jsxs(e.Fragment,{children:[e.jsx(re.Item,{actions:[e.jsx(E,{danger:!0,onClick:()=>V(o),children:"View/Read"},"list-loadmore-more")],children:e.jsx(re.Item.Meta,{title:e.jsxs(e.Fragment,{children:[e.jsxs("a",{onClick:()=>V(o),children:[o.title,e.jsxs(K,{style:{marginLeft:"10px"},children:["Downloads: ",o.downloads]})]}),e.jsx(ie,{title:"Download",placement:"top",children:e.jsx(E,{danger:!0,size:"small",icon:e.jsx(Fe,{}),onClick:()=>{U(o)}})})]}),description:e.jsxs(e.Fragment,{children:[o.school&&e.jsxs(K,{children:["School: ",(q=o.school)==null?void 0:q.name]}),o.subject&&e.jsxs(K,{children:["Subject: ",(n=o.subject)==null?void 0:n.name]}),o.year&&e.jsxs(K,{children:["Year: ",o.year]}),o.examinationType&&e.jsxs(K,{children:["Examination Type: ",(c=o.examinationType)==null?void 0:c.name]}),o.educationLevel&&e.jsxs(K,{children:["Education Level: ",(t=o.educationLevel)==null?void 0:t.name]})]})})}),e.jsx(fe,{})]})}})}),(C||h)&&e.jsx(R,{sx:{marginTop:"20px",display:"flex",justifyContent:"center"},children:e.jsx(ye,{defaultCurrent:i,total:u,onChange:(o,q)=>{H(o,q)}})}),e.jsx(de,{anchor:"right",open:P,noOverFlow:!0,onClose:o=>A(o),title:e.jsxs("b",{children:[f==null?void 0:f.title," - ",(D=f==null?void 0:f.educationLevel)==null?void 0:D.name," - ",f==null?void 0:f.year]}),width:"80vw",children:e.jsx(e.Fragment,{children:e.jsx(xe,{url:f==null?void 0:f.doc})})})]})},xe=({url:s})=>{const[l,g]=a.useState(!0),p=()=>{g(!0),setTimeout(()=>{g(!1)},3e3)};return e.jsxs(e.Fragment,{children:[l&&e.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"89vh"},children:[e.jsx(Se,{color:"secondary"}),e.jsx("h4",{children:"Loading..."})]}),e.jsx("iframe",{src:s+"#toolbar=0",style:{width:"100%",height:"89vh",display:l?"none":"block"},onLoad:p})]})},{Option:X}=M;let ae=[];for(let s=1960;s<=new Date().getFullYear();s++)ae.push(s);ae=ae.reverse();const Me=s=>{const[l,g]=a.useState(!1),[p,I]=a.useState([]),[j,f]=a.useState([]),[z,C]=a.useState([]),[F,h]=a.useState([]),[x,i]=a.useState(),[y,u]=a.useState(),[d,P]=a.useState(),[A,V]=a.useState(),[U,H]=a.useState(),[D,o]=a.useState(!1),[q]=m.useForm(),[n,c]=a.useState(!1),t=async(r,k="",W=25)=>{const{data:B}=await S.custom({url:"",method:"get",meta:{operation:"subjects",variables:{page:{value:r,type:"Int",required:!0},key:{value:k,type:"String",required:!1},pageSize:{value:W,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","isActive","created","updated","canDelete","canManage"]}]}}).catch(Y=>({data:null})).then(Y=>Y);B&&h(B.results)},v=async(r,k="",W=25)=>{const{data:B}=await S.custom({url:"",method:"get",meta:{operation:"educationLevels",variables:{page:{value:r,type:"Int",required:!0},key:{value:k,type:"String",required:!1},pageSize:{value:W,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","isActive","created","updated","canDelete","canManage"]}]}}).catch(Y=>({data:null})).then(Y=>Y);B&&C(B.results)},N=async(r,k="",W=25)=>{const{data:B}=await S.custom({url:"",method:"get",meta:{operation:"examinationsTypes",variables:{page:{value:r,type:"Int",required:!0},key:{value:k,type:"String",required:!1},pageSize:{value:W,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","isActive","created","updated","canDelete","canManage"]}]}}).catch(Y=>({data:null})).then(Y=>Y);B&&I(B.results)},L=async(r,k="",W=25)=>{const{data:B}=await S.custom({url:"",method:"get",meta:{operation:"schools",variables:{page:{value:r,type:"Int",required:!0},key:{value:k,type:"String",required:!1},pageSize:{value:W,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","serialNumber","isActive","created","updated","canDelete","canManage"]}]}}).catch(Y=>({data:null})).then(Y=>Y);B&&f(B.results)};return a.useEffect(()=>{L(1),N(1),v(1),t(1)},[s.randKey]),e.jsxs(e.Fragment,{children:[e.jsx(T,{container:!0,spacing:2,children:e.jsx(T,{item:!0,xs:12,children:e.jsxs(R,{style:{fontSize:18,marginBottom:5,display:"flex",alignItems:"center",height:40},children:["Enable Advanced Past Papers Search Filter",e.jsx(R,{sx:{display:"inline",marginLeft:2},children:e.jsx(me,{size:"default",onChange:r=>{c(r),r||(q.resetFields(),H(null),u(null),V(null),i(null),P(null),o(!1))},title:"Advanced Filter"})})]})})}),e.jsxs(T,{container:!0,spacing:2,children:[n&&e.jsx(T,{item:!0,xs:12,children:e.jsx(te,{title:e.jsx(e.Fragment,{children:n&&e.jsxs("span",{style:{float:"right"},children:[e.jsx("span",{style:{marginRight:3,fontSize:16,fontWeight:"bolder"},children:"National Examinations"}),e.jsx(me,{size:"default",onChange:r=>{o(r)}})]})}),children:n&&e.jsx(m,{layout:"vertical",form:q,onFinish:r=>{H(r.educationLevelId),u(r.subjectId),V(r.examinationTypeId),i(r.schoolId),P(r.year),o(D),g(!1)},onValuesChange:(r,k)=>{g(!0)},children:e.jsxs(T,{container:!0,spacing:2,children:[e.jsx(T,{item:!0,xs:12,sm:3,children:!D&&e.jsx(m.Item,{name:"examinationTypeId",label:"Examination Type",children:e.jsx(M,{size:"large",onChange:r=>{},dropdownStyle:{zIndex:9999},children:p.map(r=>e.jsx(X,{value:parseInt(r.id.toString()),children:r.name},"examinationType_"+r.id))})})}),e.jsx(T,{item:!0,xs:12,sm:2,children:e.jsx(m.Item,{name:"educationLevelId",label:"Education Level",rules:[{required:!1,type:"number",message:"Please input an Education Level"}],children:e.jsx(M,{size:"large",showSearch:!0,placeholder:"Select an Education Level...",filterOption:!1,onSearch:r=>{v(1,r)},onChange:r=>{},dropdownStyle:{zIndex:9999},children:z.map(r=>e.jsx(X,{value:parseInt(r.id.toString()),children:r.name},"educationLevel_"+r.id.toString()))})})}),e.jsx(T,{item:!0,xs:12,sm:2,children:e.jsx(m.Item,{name:"subjectId",label:"Subject",rules:[{required:!1,type:"number",message:"Please input a Subject"}],children:e.jsx(M,{size:"large",placeholder:"Select a Subject...",showSearch:!0,filterOption:!1,onSearch:r=>{t(1,r)},onChange:r=>{},dropdownStyle:{zIndex:9999},children:F.map(r=>e.jsx(X,{value:parseInt(r.id.toString()),children:r.name},"subject_"+r.id.toString()))})})}),e.jsx(T,{item:!0,xs:12,sm:2,children:e.jsx(m.Item,{name:"year",label:"Year",rules:[{required:!1,type:"number",message:"Please input a valid year"}],children:e.jsx(M,{size:"large",filterOption:!0,showSearch:!0,onChange:r=>{},dropdownStyle:{zIndex:9999},children:ae.map(r=>e.jsx(X,{value:r,children:r},"year_"+r))})})}),e.jsx(T,{item:!0,xs:12,sm:3,children:!D&&e.jsx(m.Item,{name:"schoolId",label:"School",children:e.jsx(M,{size:"large",filterOption:!1,showSearch:!0,onSearch:r=>{L(1,r)},onChange:r=>{},dropdownStyle:{zIndex:9999},children:j.map(r=>e.jsxs(X,{value:parseInt(r.id.toString()),children:[r.name," ",e.jsx("span",{style:{marginLeft:5},children:e.jsx(K,{color:"red",children:r.serialNumber})})]},"school_"+r.id.toString()))})})}),e.jsx(T,{item:!0,xs:12,sm:12,children:e.jsxs(m.Item,{children:[e.jsx(E,{style:{float:"left"},size:"large",icon:e.jsx(Le,{}),danger:!0,onClick:()=>{q.resetFields(),H(null),u(null),V(null),i(null),P(null),o(!1)},children:"Clear"}),e.jsx(E,{style:{float:"right"},htmlType:"submit",size:"large",icon:e.jsx(ee,{}),disabled:!l,danger:!0,children:"Search"})]})})]})})})}),e.jsx(T,{item:!0,xs:12,children:e.jsx(te,{style:{padding:0,minHeight:"80svh",maxHeight:"80svh"},children:e.jsx(ke,{school:x,educationLevel:U,subject:y,year:d,examinationType:A,national:D})})})]})]})},Ae=()=>(a.useEffect(()=>{document.title=J.system_name+": Past Papers"},[]),e.jsxs("div",{style:{marginTop:10},children:[e.jsx("div",{style:{marginTop:10,marginBottom:10},children:e.jsx(Q,{children:e.jsxs(b,{children:[e.jsx(b.Item,{children:e.jsx(_,{to:"/",children:"Home"})}),e.jsx(b.Item,{children:e.jsx(_,{to:"/pastpapers",children:"Past Papers"})})]})})}),e.jsx(Me,{})]})),De=s=>{const[l,g]=a.useState(!1),[p,I]=a.useState([]),[j,f]=a.useState(0),[z,C]=a.useState(1),[F,h]=a.useState(25),x=async(i,y="",u=25)=>{g(!0);const{data:d}=await S.custom({url:"",method:"get",meta:{operation:"pastPapersEducationLevels",variables:{page:{value:i,type:"Int",required:!0},key:{value:y,type:"String",required:!1},pageSize:{value:u,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","totalPastPapers",{educationLevel:ve}]}]}}).catch(()=>({data:null})).then(P=>P);d&&(f(d.total),C(d.page),h(d.pageSize),I(d.results)),g(!1)};return a.useEffect(()=>{x(1)},[]),e.jsx(e.Fragment,{children:e.jsx(R,{children:l?e.jsx(oe,{}):e.jsxs(e.Fragment,{children:[p.length===0&&e.jsx(ue,{severity:"info",children:"No Education Level found"}),p.length>0&&e.jsx(T,{container:!0,spacing:2,children:p.map(i=>e.jsx(T,{item:!0,xs:12,sm:6,md:4,lg:3,xl:2,children:e.jsx(ie,{title:"Click to View Paster Papers",placement:"top",children:e.jsx(te,{style:{width:"100%",cursor:"pointer"},children:e.jsxs("h3",{children:[i.educationLevel.name,e.jsx(K,{color:"green",style:{marginLeft:10},children:i.totalPastPapers})]})})})},i.id))})]})})})},Oe=()=>(a.useEffect(()=>{document.title=J.system_name+": Education Levels"},[]),e.jsxs("div",{style:{marginTop:10},children:[e.jsx(Q,{children:e.jsxs(b,{children:[e.jsx(b.Item,{children:e.jsx(_,{to:"/",children:"Home"})}),e.jsx(b.Item,{children:e.jsx(_,{to:"/pastpapers",children:"Past Papers"})}),e.jsx("span",{children:"Education Levels"})]})}),e.jsx(De,{})]})),{Option:G}=M,_e=s=>Array.isArray(s)?s:s==null?void 0:s.fileList;let se=[];for(let s=1960;s<=new Date().getFullYear();s++)se.push(s);se=se.reverse();const Ve=s=>{const[l]=m.useForm(),[g,p]=a.useState(!1),[I,j]=a.useState(!1);Pe();const[f,z]=a.useState([]),[C,F]=a.useState([]),[h,x]=a.useState([]),[i,y]=a.useState([]),[u,d]=a.useState([]),[P,A]=a.useState(null);a.useState(),a.useState(),a.useState(),a.useState(),a.useState();const[V,U]=a.useState(!1),H=async(t,v="",N=25)=>{const{data:L}=await S.custom({url:"",method:"get",meta:{operation:"schoolTypes",variables:{page:{value:t,type:"Int",required:!0},key:{value:v,type:"String",required:!1},pageSize:{value:N,type:"Int",required:!1},showAll:{value:!0,type:"Boolean",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","isActive","created","updated","canDelete","canManage"]}]}}).catch(r=>({data:null})).then(r=>r);L&&z(L.results)},D=async(t,v="",N=25)=>{const{data:L}=await S.custom({url:"",method:"get",meta:{operation:"subjects",variables:{page:{value:t,type:"Int",required:!0},key:{value:v,type:"String",required:!1},pageSize:{value:N,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","isActive","created","updated","canDelete","canManage"]}]}}).catch(r=>({data:null})).then(r=>r);L&&d(L.results)},o=async(t,v="",N=25,L=[])=>{const{data:r}=await S.custom({url:"",method:"get",meta:{operation:"educationLevels",variables:{page:{value:t,type:"Int",required:!0},key:{value:v,type:"String",required:!1},pageSize:{value:N,type:"Int",required:!1},schoolTypes:{value:L,type:"[Int]",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","isActive","created","updated","canDelete","canManage"]}]}}).catch(k=>({data:null})).then(k=>k);r&&y(r.results)},q=async(t,v="",N=25)=>{const{data:L}=await S.custom({url:"",method:"get",meta:{operation:"examinationsTypes",variables:{page:{value:t,type:"Int",required:!0},key:{value:v,type:"String",required:!1},pageSize:{value:N,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","isActive","created","updated","canDelete","canManage"]}]}}).catch(r=>({data:null})).then(r=>r);L&&F(L.results)},n=async(t,v="",N=25,L=[])=>{const{data:r}=await S.custom({url:"",method:"get",meta:{operation:"schools",variables:{page:{value:t,type:"Int",required:!0},key:{value:v,type:"String",required:!1},pageSize:{value:N,type:"Int",required:!1},schoolTypes:{value:L,type:"[Int]",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","serialNumber","isActive","created","updated","canDelete","canManage"]}]}}).catch(k=>({data:null})).then(k=>k);r&&x(r.results)},c=async t=>{var N;p(!0),j(!1);const{data:v}=await S.custom({url:"",method:"post",meta:{operation:"createPastPaper",variables:{title:{value:t.title,type:"String",required:!0},file:{value:t.file,type:"Upload",required:!0},schoolTypeId:{value:parseInt(t.schoolTypeId.toString()),type:"Int",required:!0},examinationTypeId:{value:parseInt(t.examinationTypeId.toString()),type:"Int",required:!1},subjectId:{value:t.subjectId,type:"Int",required:!0},educationLevelId:{value:parseInt(t.educationLevelId.toString()),type:"Int",required:!0},schoolId:{value:parseInt(((N=t==null?void 0:t.schoolId)==null?void 0:N.toString())??"0"),type:"Int",required:!1},year:{value:t.year,type:"Int",required:!0}},fields:["success","message",{pastPaper:["id","title","description","year","doc",{school:["id","name","serialNumber"]},{subject:["id","name"]},{examinationType:["id","name"]},{educationLevel:["id","name"]},{author:["id","fullName","firstName","middleName","lastName","email"]},"isActive","created","updated","canDelete","canManage"]}]}}).catch(L=>(w.error("Error creating past paper"),{data:null})).then(L=>L);v&&(v.success?(w.success(v.message),l.resetFields(),s.onFinish(v.pastPaper)):w.error(v.message)),p(!1)};return a.useEffect(()=>{H(1),n(1,"",25,[]),q(1),D(1)},[s.random]),I?e.jsx(e.Fragment,{children:e.jsx(Ie,{direction:"vertical",style:{display:"flex",justifyContent:"center"},children:e.jsx(Te,{message:"Success",description:e.jsx(e.Fragment,{children:e.jsx("p",{children:"File uploaded successfully"})}),action:[e.jsx(E,{onClick:()=>j(!1),children:"Upload another file(s)"})],type:"success"})})}):e.jsx(e.Fragment,{children:e.jsx(be,{spinning:g,children:e.jsxs(m,{layout:"vertical",form:l,onFinish:t=>{c(t)},requiredMark:!0,autoComplete:"off",children:[e.jsxs($,{children:[e.jsxs(O,{span:12,style:{padding:5},children:[e.jsx(m.Item,{name:"title",label:"Examination Title",rules:[{required:!0,message:"Please input an Examination Title"}],children:e.jsx(Z,{size:"large",placeholder:"Examination Title"})}),e.jsx(m.Item,{name:"schoolTypeId",label:"School Type",rules:[{required:!0,message:"Please select a school type"}],children:e.jsx(M,{size:"large",onChange:t=>{A(t),o(1,"",100,[parseInt(t.toString())]),n(1,"",100,[parseInt(t.toString())]),l.resetFields(["educationLevelId","schoolId","subjectId"])},dropdownStyle:{zIndex:9999},children:f.map(t=>e.jsx(G,{value:t.id,children:t.name},"schoolType_"+t.id))})}),!V&&e.jsx(m.Item,{name:"examinationTypeId",label:"Examination Type",children:e.jsx(M,{size:"large",onChange:t=>{},dropdownStyle:{zIndex:9999},children:C.map(t=>e.jsx(G,{value:t.id,children:t.name},"examinationType_"+t.id))})})]}),e.jsxs(O,{span:12,style:{padding:5},children:[e.jsx(m.Item,{name:"educationLevelId",label:"Education Level",rules:[{required:!0,type:"number",message:"Please input an Education Level"}],children:e.jsx(M,{disabled:P===null,size:"large",showSearch:!0,placeholder:"Select an Education Level...",filterOption:!1,onSearch:t=>{o(1,t)},onChange:t=>{},dropdownStyle:{zIndex:9999},children:i.map(t=>e.jsx(G,{value:parseInt(t.id.toString()),children:t.name},"educationLevel_"+t.id.toString()))})}),e.jsx(m.Item,{name:"subjectId",label:"Subject",rules:[{required:!0,type:"number",message:"Please input a Subject"}],children:e.jsx(M,{size:"large",placeholder:"Select a Subject...",showSearch:!0,filterOption:!1,onSearch:t=>{D(1,t)},onChange:t=>{},dropdownStyle:{zIndex:9999},children:u.map(t=>e.jsx(G,{value:parseInt(t.id.toString()),children:t.name},"subject_"+t.id.toString()))})}),e.jsx(m.Item,{name:"year",label:"Year",rules:[{required:!0,type:"number",message:"Please input a valid year"}],children:e.jsx(M,{size:"large",filterOption:!0,showSearch:!0,onChange:t=>{},dropdownStyle:{zIndex:9999},children:se.map(t=>e.jsx(G,{value:t,children:t},"year_"+t))})}),!V&&e.jsx(m.Item,{name:"schoolId",label:"School",children:e.jsx(M,{disabled:P===null,size:"large",filterOption:!1,showSearch:!0,onSearch:t=>{n(1,t)},onChange:t=>{},dropdownStyle:{zIndex:9999},children:h.map(t=>e.jsxs(G,{value:parseInt(t.id.toString()),children:[t.name," ",e.jsx("span",{style:{marginLeft:5},children:e.jsx(K,{color:"red",children:t.serialNumber})})]},"school_"+t.id.toString()))})})]}),e.jsx(O,{span:24,children:e.jsx(m.Item,{label:"Pick Past Paper File (PDF)",children:e.jsx(m.Item,{name:"file",valuePropName:"fileList",getValueFromEvent:_e,noStyle:!0,rules:[{required:!0,type:"array",message:"Please upload students excel file"}],children:e.jsxs(ze.Dragger,{name:"file",accept:".pdf",multiple:!0,beforeUpload:()=>!1,children:[e.jsx("p",{className:"ant-upload-drag-icon",children:e.jsx(Ne,{})}),e.jsx("p",{className:"ant-upload-text",children:"Click or drag file to this area to upload"}),e.jsx("p",{className:"ant-upload-hint",children:"Support for a single or bulk upload."})]})})})})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx(E,{size:"large",loading:g,onClick:()=>{A(null),l.resetFields()},danger:!0,children:"Reset"}),e.jsx(E,{type:"primary",size:"large",htmlType:"submit",loading:g,children:"Upload"})]})]})})})},He=async()=>{const{data:s}=await S.custom({url:"",method:"post",meta:{operation:"syncPastPapersSubjects",fields:["success","message"]}}).catch(()=>({data:null})).then(l=>l);return s?s.success?(w.success(s.message),s.success):(w.error(s.message),!1):!1},Be=async()=>{const{data:s}=await S.custom({url:"",method:"post",meta:{operation:"syncPastPapersEducationLevels",fields:["success","message"]}}).catch(()=>({data:null})).then(l=>l);return s?s.success?(w.success(s.message),s.success):(w.error(s.message),!1):!1},Ye=async()=>{const{data:s}=await S.custom({url:"",method:"post",meta:{operation:"syncPastPapersSchools",fields:["success","message"]}}).catch(()=>({data:null})).then(l=>l);return s?s.success?(w.success(s.message),s.success):(w.error(s.message),!1):!1},Ke=s=>{var q;const[l,g]=a.useState(!1),[p,I]=a.useState([]),[j,f]=a.useState(null),[z]=m.useForm(),[C,F]=a.useState(!1),[h,x]=a.useState(!1),[i,y]=a.useState(0),[u,d]=a.useState(1),[P,A]=a.useState(25),V=n=>{f(n),x(!0)},U=async(n,c="",t=25)=>{g(!0);const{data:v}=await S.custom({url:"",method:"get",meta:{operation:"pastPapers",variables:{page:{value:n,type:"Int",required:!0},key:{value:c,type:"String",required:!1},pageSize:{value:t,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","title","description","year","doc",{school:["id","name","serialNumber"]},{subject:["id","name"]},{examinationType:["id","name"]},{educationLevel:["id","name"]},{author:["id","fullName","firstName","middleName","lastName","email"]},"isActive","created","updated","canDelete","canManage"]}]}}).catch(()=>({data:null})).then(N=>N);v&&(y(v.total),d(v.page),I(v.results)),g(!1)},H=n=>{I([n,...p])},D=async n=>{const{data:c}=await S.custom({url:"",method:"post",meta:{operation:"deletePastPaper",variables:{id:{value:n,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>({data:null})).then(t=>t);c&&(c.success?(w.success(c.message),I(p.filter(t=>parseInt(t.id.toString())!==n))):w.error(c.message))},o=[{title:"Title",dataIndex:"title",key:"title",render:(n,c,t)=>e.jsxs("span",{children:[e.jsx("a",{children:c.title}),e.jsx(K,{color:"red",style:{marginLeft:5},children:c.year})]})},{title:"Education Level",dataIndex:"educationLevel",key:"educationLEvel",render:(n,c,t)=>e.jsx("span",{children:c.educationLevel.name})},{title:"Examination Type",dataIndex:"examinationType",key:"examinationType",render:(n,c,t)=>e.jsx("span",{children:c.examinationType.name})},{title:"Document",dataIndex:"doc",key:"doc",render:(n,c,t)=>e.jsx("span",{children:e.jsx(E,{icon:e.jsx(Ee,{}),style:{float:"left"},danger:!0,onClick:()=>V(c),children:"View"})})},{title:"",key:"action",render:(n,c,t)=>e.jsx("span",{children:e.jsx(he,{title:"Are you sure delete this manager?",placement:"topLeft",onConfirm:()=>D(parseInt(c.id.toString())),onCancel:()=>{},okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(E,{icon:e.jsx(ge,{}),style:{float:"right"},danger:!0})})})}];return a.useEffect(()=>{U(1,"",P)},[s.randKey]),e.jsxs(e.Fragment,{children:[e.jsxs($,{style:{marginTop:10},children:[e.jsx(O,{span:10,children:e.jsx(m,{layout:"vertical",form:z,onFinish:n=>{p.length=0,U(1,n.key)},children:e.jsx(m.Item,{name:"key",children:e.jsx(Z,{size:"large",placeholder:"Search ...",prefix:e.jsx(ee,{}),autoComplete:"off",allowClear:!0})})})}),e.jsxs(O,{span:14,style:{display:"flex",justifyContent:"end"},children:[e.jsx(E,{size:"large",danger:!0,icon:e.jsx(ne,{}),onClick:()=>Be(),children:"Sync Education Levels"}),e.jsx(E,{size:"large",icon:e.jsx(ne,{}),onClick:()=>{He().then(n=>{n&&U(1)})},danger:!0,children:"Sync Subjects"}),e.jsx(E,{size:"large",icon:e.jsx(ne,{}),onClick:()=>Ye(),danger:!0,children:"Sync Schools"}),e.jsx(E,{size:"large",icon:e.jsx(pe,{}),onClick:()=>F(!0),danger:!0,children:"Create/Add Past Paper"})]})]}),e.jsx($,{children:e.jsx(O,{span:24,children:e.jsx(ce,{loading:l,columns:o,dataSource:p,pagination:{position:["bottomCenter"],pageSize:P,total:i,onChange:(n,c)=>{U(n,"",c)},onShowSizeChange:(n,c)=>{U(n,"",c),A(c)}},scroll:{y:window.innerHeight-325}})})}),e.jsx(we,{title:"Adding/Creating Past Paper",width:"80vw",open:C,onClose:n=>F(n),children:e.jsx(Ve,{onFinish:H})}),e.jsx(de,{anchor:"right",open:h,noOverFlow:!0,onClose:n=>x(n),title:e.jsxs("b",{children:[j==null?void 0:j.title," - ",(q=j==null?void 0:j.educationLevel)==null?void 0:q.name," - ",j==null?void 0:j.year]}),width:"80vw",children:e.jsx(e.Fragment,{children:e.jsx(xe,{url:j==null?void 0:j.doc})})})]})},Ue=()=>(a.useEffect(()=>{document.title=J.system_name+": Past Papers Management"},[]),e.jsxs(R,{sx:{marginTop:{xs:10,sm:8}},children:[e.jsx(R,{children:e.jsx(Q,{children:e.jsxs(b,{children:[e.jsx(b.Item,{children:e.jsx(_,{to:"/",children:"Home"})}),e.jsx(b.Item,{children:e.jsx(_,{to:"/pastpapers",children:"Past Papers"})}),e.jsx(b.Item,{children:"Past Papers Management"})]})})}),e.jsx(Ke,{})]})),Re=s=>{const[l,g]=a.useState(0),[p,I]=a.useState(50),[j,f]=a.useState(""),[z,C]=a.useState([]),[F]=m.useForm(),h=async(y,u="",d=50)=>{const{data:P}=await S.custom({url:"",method:"get",meta:{operation:"pastPapersManagersToAdd",variables:{page:{value:y,type:"Int",required:!0},key:{value:u,type:"String",required:!1},pageSize:{value:d,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","firstName","middleName","lastName","fullName","dp","email","isActive","created","updated","canDelete","canManage"]}]}}).catch(A=>({data:null})).then(A=>A);P&&C(P.results)},x=async y=>{const{data:u}=await S.custom({url:"",method:"post",meta:{operation:"addPastPaperManager",variables:{id:{value:y,type:"Int",required:!0}},fields:["success","message",{pastPaperManager:["id",{manager:["id","firstName","middleName","lastName","fullName","dp","email","isActive","created","updated","canDelete","canManage"]},"created","updated","canDelete","canManage","canEdit","isActive"]}]}}).catch(d=>({data:null})).then(d=>d);u&&(u.success?(w.success(u.message),C(z.filter(d=>parseInt(d.id.toString())!==y)),s.onAdd(u.pastPaperManager)):w.error(u.message))},i=[{title:"Full Name",dataIndex:"fullName",key:"fullName",render:(y,u,d)=>e.jsx("span",{children:e.jsx("a",{children:u.fullName})})},{title:"Email",dataIndex:"email",key:"email",render:(y,u,d)=>e.jsx("span",{children:e.jsx("a",{children:u.email})})},{title:"Action",key:"action",render:(y,u,d)=>e.jsx(he,{title:"Add Manager?",placement:"topLeft",onConfirm:()=>x(parseInt(u.id.toString())),onCancel:()=>{},okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(E,{danger:!0,children:"Add"})})}];return a.useEffect(()=>{h(1,"",50)},[s.randKey]),e.jsxs(e.Fragment,{children:[e.jsx($,{style:{marginTop:10},children:e.jsx(O,{span:10,children:e.jsx(m,{layout:"vertical",form:F,onFinish:y=>{z.length=0,h(1,y.key,p)},children:e.jsx(m.Item,{name:"key",children:e.jsx(Z,{size:"large",placeholder:"Search ...",prefix:e.jsx(ee,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx($,{children:e.jsx(O,{span:24,children:e.jsx(ce,{columns:i,dataSource:z,scroll:{x:!0,y:"calc(100vh - 280px)"},pagination:{onChange:(y,u)=>{I(u),h(y,j,u)},total:l,pageSize:p,position:["bottomCenter"],showQuickJumper:!0}})})})]})};let le=[];for(let s=1960;s<=new Date().getFullYear();s++)le.push(s);le=le.reverse();const $e=s=>{const[l,g]=a.useState([]),[p]=m.useForm(),[I,j]=a.useState(!1),f=async(h,x="",i=25)=>{const{data:y}=await S.custom({url:"",method:"get",meta:{operation:"pastPapersManagers",variables:{page:{value:h,type:"Int",required:!0},key:{value:x,type:"String",required:!1},pageSize:{value:i,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id",{manager:["id","firstName","middleName","lastName","fullName","dp","email"]},"isActive","created","updated","canDelete","canManage"]}]}}).catch(u=>({data:null})).then(u=>u);y&&g(y.results)},z=h=>{g([h,...l])},C=async h=>{const{data:x}=await S.custom({url:"",method:"post",meta:{operation:"deletePastPaperManager",variables:{id:{value:h,type:"Int",required:!0}},fields:["success","message"]}}).catch(i=>({data:null})).then(i=>i);x&&(x.success?(w.success(x.message),g(l.filter(i=>parseInt(i.id.toString())!==h))):w.error(x.message))},F=[{title:"Full Name",dataIndex:"fullName",key:"fullName",render:(h,x,i)=>e.jsx("span",{children:e.jsx("a",{children:x.manager.fullName})})},{title:"Email",dataIndex:"email",key:"email",render:(h,x,i)=>e.jsx("span",{children:e.jsx("a",{children:x.manager.email})})},{title:"",key:"action",render:(h,x,i)=>e.jsx("span",{children:e.jsx(he,{title:"Are you sure delete this manager?",placement:"topLeft",onConfirm:()=>C(parseInt(x.id.toString())),onCancel:()=>{},okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(E,{icon:e.jsx(ge,{}),style:{float:"right"},danger:!0})})})}];return a.useEffect(()=>{f(1)},[s.randKey]),e.jsxs(e.Fragment,{children:[e.jsxs($,{style:{marginTop:10},children:[e.jsx(O,{span:10,children:e.jsx(m,{layout:"vertical",form:p,onFinish:h=>{l.length=0,f(1,h.key)},children:e.jsx(m.Item,{name:"key",children:e.jsx(Z,{size:"large",placeholder:"Search ...",prefix:e.jsx(ee,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(O,{span:14,style:{display:"flex",justifyContent:"end"},children:e.jsx(E,{size:"large",icon:e.jsx(pe,{}),onClick:()=>j(!0),danger:!0,children:"Create Manager"})})]}),e.jsx($,{children:e.jsx(O,{span:24,children:e.jsx(ce,{columns:F,dataSource:l})})}),e.jsx(de,{title:"Adding Past Papers Managers",anchor:"right",width:"40vw",onClose:h=>j(h),open:I,noOverFlow:!0,children:e.jsx(Re,{randKey:Math.random(),onAdd:z})})]})},We=()=>(a.useEffect(()=>{document.title=J.system_name+": Managers"},[]),e.jsxs("div",{style:{marginTop:10},children:[e.jsx(Q,{children:e.jsxs(b,{children:[e.jsx(b.Item,{children:e.jsx(_,{to:"/",children:"Home"})}),e.jsx(b.Item,{children:e.jsx(_,{to:"/pastpapers",children:"Past Papers"})}),e.jsx("span",{children:"Managers"})]})}),e.jsx($e,{})]})),Ge=s=>{const[l,g]=a.useState(!1),[p,I]=a.useState([]),[j,f]=a.useState(0),[z,C]=a.useState(1),[F,h]=a.useState(25),x=async(i,y="",u=25)=>{g(!0);const{data:d}=await S.custom({url:"",method:"get",meta:{operation:"pastPapersSchools",variables:{page:{value:i,type:"Int",required:!0},key:{value:y,type:"String",required:!1},pageSize:{value:u,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id",{school:Ce}]}]}}).catch(P=>({data:null})).then(P=>P);d&&(f(d.total),C(d.page),h(d.pageSize),I(d.results)),g(!1)};return a.useEffect(()=>{x(1)},[s.randKey]),e.jsx(R,{children:l?e.jsx(oe,{}):e.jsxs(e.Fragment,{children:[p.length===0&&e.jsx(ue,{severity:"info",children:"No schools found"}),p.length>0&&e.jsx(T,{container:!0,spacing:2,children:p.map(i=>e.jsx(T,{item:!0,xs:12,sm:6,md:4,lg:3,xl:2,children:e.jsx("div",{className:"card",children:e.jsxs("div",{className:"card-body",children:[e.jsx("h5",{className:"card-title",children:i.school.name}),e.jsx("p",{className:"card-text",children:i.school.serialNumber})]})})},i.id))})]})})},Je=()=>(a.useEffect(()=>{document.title=J.system_name+": Past Papers Schools"},[]),e.jsxs("div",{style:{marginTop:10},children:[e.jsx("div",{style:{marginBottom:10},children:e.jsx(Q,{children:e.jsxs(b,{children:[e.jsx(b.Item,{children:e.jsx(_,{to:"/",children:"Home"})}),e.jsx(b.Item,{children:e.jsx(_,{to:"/pastpapers",children:"Past Papers"})}),e.jsx(b.Item,{children:"Schools"})]})})}),e.jsx(Ge,{})]})),Qe=s=>{const[l,g]=a.useState(!1),[p,I]=a.useState([]),[j,f]=a.useState(0),[z,C]=a.useState(1),[F,h]=a.useState(25),x=async(i,y="",u=25)=>{g(!0);const{data:d}=await S.custom({url:"",method:"get",meta:{operation:"pastPapersSubjects",variables:{page:{value:i,type:"Int",required:!0},key:{value:y,type:"String",required:!1},pageSize:{value:u,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","totalPastPapers",{subject:qe}]}]}}).catch(()=>({data:null})).then(P=>P);d&&(f(d.total),C(d.page),h(d.pageSize),I(d.results)),g(!1)};return a.useEffect(()=>{x(1)},[]),e.jsx(e.Fragment,{children:e.jsx(R,{children:l?e.jsx(oe,{}):e.jsxs(e.Fragment,{children:[p.length===0&&e.jsx(ue,{severity:"info",children:"No Subject found"}),p.length>0&&e.jsx(T,{container:!0,spacing:2,children:p.map(i=>e.jsx(T,{item:!0,xs:12,sm:6,md:4,lg:3,xl:2,children:e.jsx(ie,{title:"Click to View Paster Papers",placement:"top",children:e.jsx(te,{style:{width:"100%",cursor:"pointer"},children:e.jsxs("h3",{children:[i.subject.name,e.jsx(K,{color:"green",style:{marginLeft:10},children:i.totalPastPapers})]})})})},i.id))})]})})})},Xe=()=>(a.useEffect(()=>{document.title=J.system_name+": Past Papers Subjects"},[]),e.jsxs("div",{children:[e.jsx(Q,{children:e.jsxs(b,{children:[e.jsx(b.Item,{children:e.jsx(_,{to:"/",children:"Home"})}),e.jsx(b.Item,{children:e.jsx(_,{to:"/pastpapers",children:"Past Papers"})}),e.jsx("span",{children:"Subjects"})]})}),e.jsx(Qe,{})]})),Ct=s=>{const{page:l}=s;return l==="PastPapersManagersPage"?e.jsx(We,{}):l==="PastPapersManagementPage"?e.jsx(Ue,{}):l==="PastPapersHomePage"?e.jsx(Ae,{}):l==="PastPapersSchoolsPage"?e.jsx(Je,{}):l==="PastPapersSubjectsPage"?e.jsx(Xe,{}):l==="PastPapersEducationLevelsPage"?e.jsx(Oe,{}):e.jsx("div",{children:"Page not found ..."})};export{Ct as PastPapersPages};
