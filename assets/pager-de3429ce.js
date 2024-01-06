import{r as s,F as S,j as e,y as Y,z as N,I as K,S as H,a5 as b,x as q,B as M,d3 as P,a7 as z,A as R,T as y,H as J,aa as m,J as k,an as O,K as V,aA as A,a2 as _,au as G}from"./index-8ddffded.js";import{C as Q}from"./index-3ca9364a.js";import{B as D}from"./Breadcrumb-86726eef.js";import"./index-314fa976.js";const U=r=>{const[o,h]=s.useState(!1),[l,i]=s.useState(!1),[u,c]=s.useState(1),[a,p]=s.useState(),[j,n]=s.useState([]),[d,w]=s.useState(""),[E]=S.useForm(),[F,C]=s.useState(!1),T=t=>{p(t),C(!0)},v=async(t,x="",g=20)=>{var I;h(!0);const{data:f}=await k.custom({url:"",method:"get",meta:{operation:"attendeesByDate",variables:{page:{value:t,type:"Int",required:!0},key:{value:x,type:"String",required:!1},pageSize:{value:g,type:"Int",required:!1},attendanceDate:{value:(I=r.date)==null?void 0:I.format("YYYY-MM-DD"),type:"String",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:["id",{takenBy:["id","firstName","middleName","lastName","fullName","email","pic"]},{entry:["id","advanced","startTime","endTime",{schoolEducationLevelTimetable:["id",{schoolEducationLevel:["id",{educationLevel:["id","name"]}]}]},{venue:["id","name"]},{subject:["id",{schoolSubject:["id",{subject:["id","name"]}]}]}]},{member:["id","firstName","middleName","lastName","fullName","registrationNumber","email","phone",{user:["pic"]},"created","updated","isActive","canEdit","canManage","canDelete"]}]}]}}).catch(()=>({data:null})).then(L=>L);f&&(i(f.hasNext),c(f.page+1),n([...f.results])),h(!1)},B=l&&!o?e.jsx("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"},children:e.jsx(M,{onClick:()=>{v(u,d,20)},children:"loading more"})}):null;return s.useEffect(()=>{r.date&&v(1,"",10)},[r.randKey]),e.jsxs(e.Fragment,{children:[e.jsx(Y,{style:{marginTop:10},children:e.jsx(N,{span:24,children:e.jsx(S,{layout:"vertical",form:E,onFinish:t=>{w(t.key),j.length=0,v(1,t.key)},children:e.jsx(S.Item,{name:"key",children:e.jsx(K,{size:"large",placeholder:"Search ...",prefix:e.jsx(H,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx(Y,{children:e.jsx(N,{span:24,children:e.jsx(b,{loading:o,itemLayout:"horizontal",loadMore:B,dataSource:j,renderItem:t=>{var x,g;return e.jsx(b.Item,{actions:[e.jsx(q,{title:"Click to view Attendance Entry Details",color:"green",placement:"left",children:e.jsx(M,{icon:e.jsx(P,{}),onClick:()=>T(t)})})],children:e.jsx(z,{avatar:!0,title:!1,loading:!1,children:e.jsx(b.Item.Meta,{avatar:e.jsx(R,{src:(g=(x=t==null?void 0:t.member)==null?void 0:x.user)==null?void 0:g.pic}),title:e.jsx("a",{children:t.member.fullName}),description:e.jsxs(e.Fragment,{children:[e.jsxs(y,{color:"green",children:["Reg#:",t.member.registrationNumber]}),!t.entry.advanced&&e.jsxs(e.Fragment,{children:[e.jsxs(y,{color:"green",children:["Subject:"," ",t.entry.subject.schoolSubject.subject.name]}),e.jsxs(y,{color:"green",children:["Level:"," ",t.entry.schoolEducationLevelTimetable.schoolEducationLevel.educationLevel.name]})]})]})})})})}})})}),e.jsx(J,{title:"Attendance Entry Info",width:"45vw",open:F,onClose:t=>C(t),children:e.jsxs(m,{title:"",column:1,children:[e.jsx(m.Item,{label:"Subject Name",children:a==null?void 0:a.entry.subject.schoolSubject.subject.name}),e.jsx(m.Item,{label:"Venue",children:a==null?void 0:a.entry.venue.name}),e.jsx(m.Item,{label:"Started At",children:a==null?void 0:a.entry.startTime}),e.jsx(m.Item,{label:"Ended At",children:a==null?void 0:a.entry.endTime}),e.jsx(m.Item,{label:"Taken By",children:a==null?void 0:a.takenBy.fullName})]})})]})},W=r=>{const[o,h]=s.useState(!1),l=async()=>{var u;const{data:i}=await k.custom({url:"",method:"get",meta:{operation:"hasAttendeesByDate",variables:{date:{value:(u=r.date)==null?void 0:u.format("YYYY-MM-DD"),type:"String",required:!0}},fields:["hasAttendees"]}}).catch(c=>({data:null})).then(c=>c);i&&h(i.hasAttendees)};return s.useEffect(()=>{l()},[r.randKey,r.date]),e.jsxs(e.Fragment,{children:[o&&e.jsx("div",{style:{cursor:"pointer",height:"100%"},onClick:()=>{r.onClick(r.date)},children:e.jsx(O,{dot:!0,color:"green"})}),!o&&e.jsx("div",{style:{cursor:"pointer",height:"100%"},onClick:()=>{V("No Attendee for this date")}})]})},X=r=>{const[o,h]=s.useState("month"),[l,i]=s.useState(void 0),[u,c]=s.useState(!1),a=(n,d=!1)=>{o==="month"&&d&&n<A().add(1,"day")&&i(n)},p=n=>{i(n),c(!0)},j=n=>e.jsx(W,{date:n,randKey:Math.random(),onClick:p});return s.useEffect(()=>{},[r.randKey]),e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{padding:10},children:e.jsx(Q,{dateCellRender:j,onPanelChange:(n,d)=>{i(void 0),h(d)},value:void 0,onSelect:n=>{a(n,!0)},disabledDate:n=>{const d=A().add(1,"day").format("YYYY-MM-DD");return n>A(d,"YYYY-MM-DD")}})}),e.jsx(_,{title:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Attendee on "}),e.jsx(y,{color:"green",children:l==null?void 0:l.format("MMM DD, YYYY")})]}),anchor:"right",width:"45vw",open:u,onClose:n=>c(n),children:e.jsx(U,{date:l,randKey:Math.random()})})]})},Z=()=>e.jsxs(e.Fragment,{children:[e.jsxs(D,{children:[e.jsx(D.Item,{children:e.jsx(G,{to:"/attendance",children:"Home"})}),e.jsx(D.Item,{children:"Attendance Dashboard"})]}),e.jsx(X,{})]}),ne=r=>{const{page:o}=r;return o==="AttendanceDashboardPage"?e.jsx(Z,{}):e.jsx("div",{children:"No page found ..."})};export{ne as AttendancePages};
