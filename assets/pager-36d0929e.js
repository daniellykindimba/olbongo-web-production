import{r as s,aU as S,j as e,aY as I,aQ as N,$ as K,c$ as q,ad as H,av as M,cA as P,a$ as y,c2 as R,g as k,ac as z,_,d5 as b,ca as $,aO as A,ct as O}from"./index-351477c3.js";import{L as D}from"./index-a79ac33a.js";import{S as Q}from"./Skeleton-8f0e80db.js";import{A as U}from"./index-6af680ed.js";import{D as u}from"./index-4e600c89.js";import{D as V}from"./index-1cc45ed0.js";import{C as G}from"./index-f8f6bd3c.js";import"./index-cbd0288c.js";import"./index-b71cc5cf.js";import"./index-7b9f9af3.js";import"./localeData-365ad521.js";const J=r=>{const[o,m]=s.useState(!1),[i,l]=s.useState(!1),[h,c]=s.useState(1),[a,p]=s.useState(),[j,n]=s.useState([]),[d,E]=s.useState(""),[w]=S.useForm(),[F,C]=s.useState(!1),L=t=>{p(t),C(!0)},v=async(t,x="",f=20)=>{var Y;m(!0);const{data:g}=await k.custom({url:"",method:"get",meta:{operation:"attendeesByDate",variables:{page:{value:t,type:"Int",required:!0},key:{value:x,type:"String",required:!1},pageSize:{value:f,type:"Int",required:!1},attendanceDate:{value:(Y=r.date)==null?void 0:Y.format("YYYY-MM-DD"),type:"String",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:["id",{takenBy:["id","firstName","middleName","lastName","fullName","email","pic"]},{entry:["id","advanced","startTime","endTime",{schoolEducationLevelTimetable:["id",{schoolEducationLevel:["id",{educationLevel:["id","name"]}]}]},{venue:["id","name"]},{subject:["id",{schoolSubject:["id",{subject:["id","name"]}]}]}]},{member:["id","firstName","middleName","lastName","fullName","registrationNumber","email","phone",{user:["pic"]},"created","updated","isActive","canEdit","canManage","canDelete"]}]}]}}).catch(()=>({data:null})).then(B=>B);g&&(l(g.hasNext),c(g.page+1),n([...g.results])),m(!1)},T=i&&!o?e.jsx("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"},children:e.jsx(M,{onClick:()=>{v(h,d,20)},children:"loading more"})}):null;return s.useEffect(()=>{r.date&&v(1,"",10)},[r.randKey]),e.jsxs(e.Fragment,{children:[e.jsx(I,{style:{marginTop:10},children:e.jsx(N,{span:24,children:e.jsx(S,{layout:"vertical",form:w,onFinish:t=>{E(t.key),j.length=0,v(1,t.key)},children:e.jsx(S.Item,{name:"key",children:e.jsx(K,{size:"large",placeholder:"Search ...",prefix:e.jsx(q,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx(I,{children:e.jsx(N,{span:24,children:e.jsx(D,{loading:o,itemLayout:"horizontal",loadMore:T,dataSource:j,renderItem:t=>{var x,f;return e.jsx(D.Item,{actions:[e.jsx(H,{title:"Click to view Attendance Entry Details",color:"green",placement:"left",children:e.jsx(M,{icon:e.jsx(P,{}),onClick:()=>L(t)})})],children:e.jsx(Q,{avatar:!0,title:!1,loading:!1,children:e.jsx(D.Item.Meta,{avatar:e.jsx(U,{src:(f=(x=t==null?void 0:t.member)==null?void 0:x.user)==null?void 0:f.pic}),title:e.jsx("a",{children:t.member.fullName}),description:e.jsxs(e.Fragment,{children:[e.jsxs(y,{color:"green",children:["Reg#:",t.member.registrationNumber]}),!t.entry.advanced&&e.jsxs(e.Fragment,{children:[e.jsxs(y,{color:"green",children:["Subject:"," ",t.entry.subject.schoolSubject.subject.name]}),e.jsxs(y,{color:"green",children:["Level:"," ",t.entry.schoolEducationLevelTimetable.schoolEducationLevel.educationLevel.name]})]})]})})})})}})})}),e.jsx(R,{title:"Attendance Entry Info",width:"45vw",open:F,onClose:t=>C(t),children:e.jsxs(u,{title:"",column:1,children:[e.jsx(u.Item,{label:"Subject Name",children:a==null?void 0:a.entry.subject.schoolSubject.subject.name}),e.jsx(u.Item,{label:"Venue",children:a==null?void 0:a.entry.venue.name}),e.jsx(u.Item,{label:"Started At",children:a==null?void 0:a.entry.startTime}),e.jsx(u.Item,{label:"Ended At",children:a==null?void 0:a.entry.endTime}),e.jsx(u.Item,{label:"Taken By",children:a==null?void 0:a.takenBy.fullName})]})})]})},W=r=>{const[o,m]=s.useState(!1),i=async()=>{var h;const{data:l}=await k.custom({url:"",method:"get",meta:{operation:"hasAttendeesByDate",variables:{date:{value:(h=r.date)==null?void 0:h.format("YYYY-MM-DD"),type:"String",required:!0}},fields:["hasAttendees"]}}).catch(c=>({data:null})).then(c=>c);l&&m(l.hasAttendees)};return s.useEffect(()=>{i()},[r.randKey,r.date]),e.jsxs(e.Fragment,{children:[o&&e.jsx("div",{style:{cursor:"pointer",height:"100%"},onClick:()=>{r.onClick(r.date)},children:e.jsx(z,{dot:!0,color:"green"})}),!o&&e.jsx("div",{style:{cursor:"pointer",height:"100%"},onClick:()=>{_("No Attendee for this date")}})]})},X=r=>{const[o,m]=s.useState("month"),[i,l]=s.useState(void 0),[h,c]=s.useState(!1),a=(n,d=!1)=>{o==="month"&&d&&n<b().add(1,"day")&&l(n)},p=n=>{l(n),c(!0)},j=n=>e.jsx(W,{date:n,randKey:Math.random(),onClick:p});return s.useEffect(()=>{},[r.randKey]),e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{padding:10},children:e.jsx(G,{dateCellRender:j,onPanelChange:(n,d)=>{l(void 0),m(d)},value:void 0,onSelect:n=>{a(n,!0)},disabledDate:n=>{const d=b().add(1,"day").format("YYYY-MM-DD");return n>b(d,"YYYY-MM-DD")}})}),e.jsx(V,{title:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Attendee on "}),e.jsx(y,{color:"green",children:i==null?void 0:i.format("MMM DD, YYYY")})]}),anchor:"right",width:"45vw",open:h,onClose:n=>c(n),children:e.jsx(J,{date:i,randKey:Math.random()})})]})},Z=()=>(s.useEffect(()=>{document.title=$.system_name+": Attendance Dashboard"},[]),e.jsxs(e.Fragment,{children:[e.jsxs(A,{children:[e.jsx(A.Item,{children:e.jsx(O,{to:"/attendance",children:"Home"})}),e.jsx(A.Item,{children:"Attendance Dashboard"})]}),e.jsx(X,{})]})),me=r=>{const{page:o}=r;return o==="AttendanceDashboardPage"?e.jsx(Z,{}):e.jsx("div",{children:"No page found ..."})};export{me as AttendancePages};
