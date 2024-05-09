import{r as t,c as E,aU as d,j as e,aY as T,aQ as q,$ as R,c$ as z,c6 as O,g as k,_ as I,av as w,ar as V,aZ as D,ac as _,c2 as G,cJ as B,aP as U,iU as Y,ad as L,cH as $}from"./index-351477c3.js";import{L as v}from"./index-a79ac33a.js";import{S as J}from"./Skeleton-8f0e80db.js";import{A as Q}from"./index-6af680ed.js";import{D as H}from"./index-1cc45ed0.js";import{d as W,C as X}from"./ckeditor-84fadb55.js";import{A as Z}from"./index-204a1fd3.js";import{C as ee}from"./index-e245930b.js";import"./index-cbd0288c.js";import"./InfoCircleFilled-9eecc8d9.js";import"./index-d9a31a18.js";const te=a=>{const[g,u]=t.useState(!1),[b,c]=t.useState(1),[y,f]=t.useState(!1),[m,l]=t.useState(""),[r,p]=t.useState([]);E();const[C]=d.useForm(),x=async(i,N="",M=5)=>{u(!0);const{data:n}=await k.custom({url:"",method:"get",meta:{operation:"announcementViewers",variables:{page:{value:i,type:"Int",required:!0},key:{value:N,type:"String",required:!1},pageSize:{value:M,type:"Int",required:!1},announcementId:{value:parseInt(a.announcement.id),type:"Int",required:!0}},fields:["pages","total","page","hasNext","hasPrev",{results:["id",{user:["id","firstName","middleName","lastName","fullName","email","pic"]},"created","updated","isActive","canManage","canDelete","canEdit"]}]}}).catch(o=>(I.error("Error fetching announcement viewers"),{data:null})).then(o=>o);n&&(c(n.page+1),f(n.hasNext),p([...r,...n.results])),u(!1)},A=y&&!g?e.jsx("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"},children:e.jsx(w,{onClick:()=>x(b,m,25),children:"loading more"})}):null;return t.useEffect(()=>{x(1,"",25)},[a.announcement]),e.jsxs(e.Fragment,{children:[e.jsx(T,{style:{marginTop:10},children:e.jsx(q,{span:24,children:e.jsx(d,{layout:"vertical",form:C,onFinish:i=>{l(i.key),p([]),r.length=0,x(1,i.key,25)},children:e.jsx(d.Item,{name:"key",children:e.jsx(R,{size:"large",placeholder:"Search ...",prefix:e.jsx(z,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx(v,{className:"demo-loadmore-list",loading:g,itemLayout:"horizontal",loadMore:A,dataSource:r,renderItem:i=>e.jsx(v.Item,{actions:[],children:e.jsx(J,{avatar:!0,title:!1,loading:g,active:!0,children:e.jsx(v.Item.Meta,{avatar:e.jsx(Q,{src:i.user.pic}),title:e.jsx("a",{children:i.user.fullName}),description:"Viewed on: "+O(i.created).format("lll")})})})})]})},P=a=>{const[g,u]=t.useState(!1),[b,c]=t.useState(1);t.useState(25),t.useState("");const[y,f]=t.useState(!1),[m,l]=t.useState([]),[r,p]=t.useState(),[C,x]=t.useState(!1),[A,i]=t.useState(!1);t.useState(a.reset),E();const[N]=d.useForm(),M=async s=>{const{data:h}=await k.custom({url:"",method:"post",meta:{operation:"markAnnouncementViewed",variables:{announcementId:{value:s,type:"Int",required:!0}},fields:["success","message",{darasaAnnouncement:["id","title","content",{user:["id","firstName","middleName","lastName","email","pic"]},{darasa:["id","name","code","description"]},{school:["id","name"]},"created","updated","isActive","isRead","canManage","canDelete","canEdit"]}]}}).catch(()=>(I.error("Error marking announcement as read"),{data:null})).then(S=>S);h&&h.success&&l(m.map(S=>S.id===h.darasaAnnouncement.id?h.darasaAnnouncement:S))},n=s=>{M(parseInt(s.id.toString())),p(s),x(!0)},o=(s,h)=>s.length>h?s.substring(0,h)+"...":s,j=async(s=1,h=25,S="")=>{const{data:F}=await k.custom({url:"",method:"get",meta:{operation:"announcements",variables:{page:{value:s,type:"Int",required:!0},pageSize:{value:h,type:"Int",required:!0},key:{value:S,type:"String",required:!1}},fields:["pages","total","page","hasNext","hasPrev",{results:["id","title","content",{user:["id","firstName","middleName","lastName","email","pic"]},{darasa:["id","name","code","description"]},{school:["id","name"]},"created","updated","isActive","isRead","canManage","canDelete","canEdit"]}]}}).catch(()=>(I.error("Error fetching announcements"),{data:null})).then(K=>K);F&&(c(F.page+1),f(F.hasNext),a.infinite?l([...m,...F.results]):l([...F.results]))};return t.useEffect(()=>{l([]),a.infinite?j(1,25,""):j(1,5,"")},[a.infinite,a.randKey,a.refresh,a.reset]),e.jsxs(e.Fragment,{children:[a.infinite&&e.jsx(T,{style:{marginTop:10},children:e.jsx(q,{span:24,children:e.jsx(d,{layout:"vertical",form:N,children:e.jsx(d.Item,{name:"key",children:e.jsx(R,{size:"large",placeholder:"Search ...",prefix:e.jsx(z,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx(V,{spinning:g,children:e.jsx("div",{style:{overflowY:"auto",maxHeight:a.infinite?"80vh":"61vh",minHeight:a.infinite?"80vh":"61vh"},children:e.jsx(v,{itemLayout:"horizontal",dataSource:m,renderItem:s=>e.jsx("div",{style:{borderBottomColor:"green",marginBottom:3,paddingLeft:10,paddingRight:10,borderBottom:"1px solid #f0f0f0"},children:e.jsx(v.Item,{children:e.jsx(v.Item.Meta,{title:e.jsx(e.Fragment,{children:e.jsxs(D,{style:{display:"flex",justifyContent:"space-between"},children:[e.jsxs("a",{onClick:()=>n(s),children:[!s.isRead&&e.jsx(_,{size:"default",dot:!0}),e.jsx("span",{style:{marginLeft:3},children:o(s.title,20)})]}),e.jsx(w,{onClick:()=>n(s),danger:!0,children:"Read"})]})}),description:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:o(s.content.replace(/<[^>]+>/g,""),250)}),e.jsxs("span",{style:{display:"block"},children:[e.jsx("b",{children:"Published"}),":"," ",new Date(s.created).toUTCString()]})]})})})})})})}),e.jsx(G,{title:r==null?void 0:r.title,width:"50vw",open:C,onClose:s=>x(s),children:e.jsxs(e.Fragment,{children:[e.jsx("div",{dangerouslySetInnerHTML:{__html:(r==null?void 0:r.content)??""},style:{height:"70vh",overflowY:"auto",overflowX:"hidden"}}),e.jsx(w,{icon:e.jsx(B,{}),size:"large",disabled:!(r!=null&&r.canManage),onClick:()=>i(!0),style:{position:"absolute",bottom:10,right:10,zIndex:1e3},children:"Viewers"})]})}),e.jsx(H,{title:"Announcement Viewers",anchor:"right",width:"40vw",onClose:s=>i(s),open:A,children:e.jsx(te,{announcement:r})})]})},ne=a=>{const[g,u]=t.useState(!1),[b,c]=t.useState(!1),[y,f]=t.useState(!1),[m]=d.useForm(),[l,r]=t.useState("");t.useState("");const[p,C]=t.useState(""),[x,A]=t.useState(!1),[i,N]=t.useState(""),M=async n=>{f(!0);const{data:o}=await k.custom({url:"",method:"post",meta:{operation:"publishGlobalAnnouncement",variables:{title:{value:n.title,type:"String",required:!0},content:{value:n.content,type:"String",required:!0},smsNotify:{value:x,type:"Boolean",required:!0}},fields:["success","message"]}}).catch(j=>({data:null})).then(j=>j);o&&(o.success?(u(!0),c(!1),a.onFinish()):(c(!0),u(!1),N(o.message),Y.error(o.message))),f(!1)};return e.jsx(e.Fragment,{children:e.jsxs(V,{spinning:y,children:[i.length>0&&e.jsx(Z,{description:e.jsx(e.Fragment,{children:e.jsx("span",{style:{fontSize:22},children:i})}),type:"error"}),e.jsxs(d,{layout:"vertical",form:m,onFinish:n=>{n.content=p,M(n)},requiredMark:!0,children:[e.jsx(d.Item,{name:"title",label:"Title",rules:[{required:!0,type:"string",message:"Please input Announcement Title"}],children:e.jsx(R,{onChange:n=>r(n.target.value),size:"large",placeholder:"Announcement Title"})}),e.jsx("div",{style:{marginBottom:10},children:e.jsx(W.CKEditor,{editor:X,data:p,onReady:n=>{n.editing.view.change(o=>{o.setStyle("min-height","200px",n.editing.view.document.getRoot())})},onChange:(n,o)=>{const j=o.getData();C(j)},config:{toolbar:{items:["bold","italic","strikethrough","underline","code","subscript","superscript","removeFormat","|","bulletedList","numberedList","todoList","|","outdent","indent","|","-","fontSize","fontFamily","fontColor","fontBackgroundColor","highlight","|","alignment","|","EmojiPanel"],shouldNotGroupWhenFull:!0},fontFamily:{options:["default","Arial, Helvetica, sans-serif","Courier New, Courier, monospace","Georgia, serif","Lucida Sans Unicode, Lucida Grande, sans-serif","Tahoma, Geneva, sans-serif","Times New Roman, Times, serif","Trebuchet MS, Helvetica, sans-serif","Verdana, Geneva, sans-serif"],supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0}}})}),e.jsx(d.Item,{name:"sms_notify",valuePropName:"checked",children:e.jsx(U,{onChange:n=>{A(n.target.checked)},children:"SMS Notify"})}),e.jsx(d.Item,{children:e.jsx(w,{type:"primary",htmlType:"submit",size:"large",style:{float:"right"},disabled:!l||!p||i.length>0,children:"Publish"})})]})]})})},ge=a=>{const[g,u]=t.useState(!1),[b,c]=t.useState(!1),[y,f]=t.useState(Math.random()),m=()=>{f(Math.random()),c(!1)};return t.useEffect(()=>{},[a.randKey]),e.jsxs(e.Fragment,{children:[e.jsx(ee,{bodyStyle:{padding:0},title:e.jsx(e.Fragment,{children:e.jsxs(D,{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{children:"Notice Board"}),e.jsxs("div",{children:[e.jsx(L,{title:"Publish Global Announcement",placement:"left",color:"red",children:e.jsx(w,{style:{marginRight:10},icon:e.jsx($,{}),onClick:()=>{c(!0)},danger:!0})}),e.jsx(L,{title:"View All Announcements",placement:"left",color:"red",children:e.jsx(w,{icon:e.jsx(B,{}),onClick:()=>u(!0),danger:!0})})]})]})}),children:e.jsx(P,{infinite:!1,randKey:Math.random(),reset:!0})}),e.jsx(H,{title:"Announcements",anchor:"right",width:"40vw",onClose:l=>u(l),open:g,children:e.jsx(t.Suspense,{fallback:e.jsx(e.Fragment,{}),children:e.jsx(P,{infinite:!0,randKey:Math.random(),refresh:y,reset:!0})})}),e.jsx(G,{title:"Global Announcement Publishing",width:"40vw",open:b,onClose:l=>c(l),children:e.jsx(ne,{randKey:Math.random(),onFinish:m})})]})};export{ge as DashboardAnnouncementsComponent};
