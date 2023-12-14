import{r as n,F as v,q as le,aV as oe,j as e,y as m,z as d,s as ce,bj as z,C as de,B as g,bt as B,bA as ue,I as he,S as me,aJ as pe,a5 as F,Z as xe,$ as j,a9 as ge,X as je,a0 as fe,K as i,a1 as ye,A as M,x as V,aR as Ce,T as ve,ab as Fe,D as Ie,H as we,fb as be,a2 as Se,aS as De,J as f,aq as L,ar as ke}from"./index-a5fcf18b.js";import{D as Ne}from"./drive_info-5fe9d6bf.js";import{B as y}from"./Breadcrumb-b23f4465.js";const Ae=Be=>{const[I,U]=n.useState(!1),[t,q]=n.useState(),[u,p]=n.useState([]),[w,O]=n.useState(!0),[h,T]=n.useState(1),[Me,E]=n.useState(0),[x,P]=n.useState(20),[R,K]=n.useState(0),[Ve,_]=n.useState(!0),[b,H]=n.useState(""),[J]=v.useForm(),{push:Y}=le(),[Q,W]=n.useState(Math.random()),[X,S]=n.useState(!1),l=oe(),[Z,D]=n.useState(!1),[C,$]=n.useState(),k=s=>{$(s),D(!0)},G=()=>{W(Math.random()),S(!0)},N=async s=>{const{data:a}=await f.custom({url:"",method:"get",meta:{operation:"drive",variables:{id:{value:s,type:"Int",required:!0}},fields:["id","name","code","canDelete","isAuthor","isArchived","canEdit","canManage","isBlocked","isConnected",{author:["id","firstName","lastName","middleName","fullName","email","pic"]}]}}).catch(r=>(i.error("Error occured while fetching drive data"),{data:null})).then(r=>r);a&&(q(a),U(!0))},ee=async s=>{const{data:a}=await f.custom({url:"",method:"post",meta:{operation:"deleteFile",variables:{id:{value:s,type:"Int",required:!0}},fields:["success","message"]}}).catch(r=>(i.error("Error occured while deleting file"),{data:null})).then(r=>r);a&&(a.success?(i.success(a.message),p(u.filter(r=>r.id!==s))):i.error(a.message)),L.destroyAll()},se=s=>{L.confirm({title:"Confirm",icon:e.jsx(ke,{}),content:"Deleting File ....",okText:"Delete",cancelText:"Cancel",onOk:()=>ee(s)})},te=()=>{o(1,"",x)},o=async(s,a="",r=20)=>{const{data:c}=await f.custom({url:"",method:"get",meta:{operation:"driveFiles",variables:{id:{value:parseInt(l.drive.toString()),type:"Int",required:!0},page:{value:s,type:"Int",required:!0},key:{value:a,type:"String",required:!1},pageSize:{value:r,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","title","file","icon","size","description","created","updated","isActive","isPublic","canEdit","canDelete","canManage","isAuthor","canRead","isVideo","isAudio","isImage","imageVisible",{tags:["id",{tag:["id","name"]}]},{drive:["id","name","code",{author:["id","firstName","lastName","middleName","fullName","email","pic"]}]},{author:["id","firstName","lastName","middleName","fullName","email","pic"]}]}]}}).catch(A=>(i.error("Error occured while fetching files"),{data:null})).then(A=>A);c&&(K(c.total),T(c.page),E(c.pages),_(c.hasNext),p(c.results)),O(!1)},ae=(s,a)=>{P(a),o(h,b,a)},re=async s=>{const{data:a}=await f.custom({url:"",method:"post",meta:{operation:"connectDrive",variables:{id:{value:s,type:"Int",required:!0}},fields:["success","message"]}}).catch(r=>(i.error("Drive connection failed"),{data:null})).then(r=>r);a&&(a.success?(i(a.message),N(parseInt(l.drive.toString())),o(h,"",20)):i.error(a.message))},ne=s=>{const a=u.map(r=>(r.id===s.id&&(r.imageVisible=!0),r));p(a)},ie=s=>{const a=u.map(r=>(r.id===s.id&&(r.imageVisible=!1),r));p(a)};return n.useEffect(()=>{N(parseInt(l.drive.toString())),o(h,"",20)},[l.drive]),I?t!=null&&t.isBlocked?e.jsx("div",{children:e.jsx(z,{message:"You can not Access this Drive, you are blocked",type:"error",showIcon:!0})}):t!=null&&t.isConnected?e.jsxs(e.Fragment,{children:[t&&e.jsxs(e.Fragment,{children:[e.jsx(m,{children:e.jsxs(d,{span:24,style:{display:"flex",justifyContent:"space-between",marginBottom:10},children:[e.jsxs(y,{children:[e.jsx(y.Item,{children:e.jsx(B,{to:"/odrive",children:"Home"})}),e.jsx(y.Item,{children:e.jsx(B,{to:"/odrive/drives",children:"Drives"})}),e.jsxs(y.Item,{children:[t==null?void 0:t.name," - Files"]})]}),e.jsx("div",{children:e.jsx(g,{size:"large",icon:e.jsx(ue,{}),disabled:!(t!=null&&t.canManage)||(t==null?void 0:t.isArchived),onClick:()=>Y("/odrive/drive/"+l.drive+"/"+l.code+"/members"),children:"Members"})})]})}),e.jsxs(m,{children:[e.jsx(d,{span:12,children:e.jsx(v,{layout:"vertical",form:J,onFinish:s=>{H(s.key),o(1,s.key,x)},children:e.jsx(v.Item,{name:"key",children:e.jsx(he,{size:"large",placeholder:"Search file(s)...",prefix:e.jsx(me,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(d,{span:12,style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(g,{size:"large",icon:e.jsx(pe,{}),onClick:()=>G(),loading:!I,disabled:!(t!=null&&t.isAuthor)||(t==null?void 0:t.isArchived),children:"Upload File(s)"})})]}),e.jsx(F,{itemLayout:"horizontal",loading:w,dataSource:u,renderItem:s=>e.jsx("div",{style:{background:"white",marginBottom:5,paddingLeft:10,paddingTop:10},children:e.jsx(F.Item,{actions:[e.jsx(xe,{trigger:["click"],overlay:e.jsxs(j,{children:[s.canDelete?e.jsx(j.Item,{disabled:!s.canDelete,icon:e.jsx(ge,{}),onClick:()=>se(s.id),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Delete"})}):e.jsx(e.Fragment,{}),e.jsx(j.Item,{icon:e.jsx(je,{}),children:e.jsx("a",{target:"_blank",href:s.file,rel:"noopener noreferrer",download:!0,children:"Download"})}),e.jsx(j.Item,{icon:e.jsx(fe,{}),onClick:()=>i("Under construction"),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Report"})})]}),overlayStyle:{zIndex:9999},children:e.jsx("a",{className:"ant-dropdown-link",onClick:a=>a.preventDefault(),children:e.jsx(ye,{style:{color:"orange",fontSize:28,fontWeight:"bold"}})})})],children:e.jsx(F.Item.Meta,{avatar:e.jsx(M,{src:s.icon}),title:s.isImage?e.jsxs(e.Fragment,{children:[e.jsx(V,{title:"Click to View Image",color:"red",placement:"top",children:e.jsx("a",{onClick:()=>ne(s),children:s.title})}),e.jsx(g,{onClick:()=>k(s),style:{marginLeft:10},danger:!0,children:"Details Dialog"}),e.jsx(Ce,{style:{display:"none"},src:s.file,preview:{visible:s.imageVisible,src:s.file,onVisibleChange:a=>{ie(s)}}})]}):e.jsx("a",{onClick:()=>k(s),children:s.title}),description:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:s.description}),s.tags.length>0&&e.jsx(m,{style:{marginBottom:3},children:e.jsx(d,{children:s.tags.map(a=>e.jsx(V,{title:"File Tag",placement:"top",children:e.jsx(ve,{color:"orange",children:a.tag.name},"tag-"+a.id)}))})}),e.jsxs("p",{children:[!s.isAuthor&&e.jsx(e.Fragment,{children:e.jsxs("span",{style:{color:"orange"},children:["Uploaded By:",e.jsx(M,{size:"small",style:{marginLeft:5},src:s.author.pic}),s.author.fullName]})}),s.isAuthor&&e.jsx(e.Fragment,{children:e.jsx("span",{style:{color:"orange"},children:"Uploaded By:You"})}),e.jsxs("span",{style:{color:"orange",marginLeft:3},children:["|",e.jsx("span",{style:{marginLeft:2},children:s.size})]}),e.jsx(e.Fragment,{children:e.jsxs("span",{style:{marginLeft:3},children:["|",e.jsx(Fe,{date:new Date(s.created),locale:"en-US"})]})})]})]})})},"drive-file-"+s.id)})})]}),!w&&u.length>0&&e.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:10},children:e.jsx(Ie,{showSizeChanger:!0,showQuickJumper:!0,defaultCurrent:h,current:h,total:R,pageSize:x,onShowSizeChange:ae,onChange:s=>o(s,b,x)})}),e.jsx(we,{title:"Uploading Files",open:X,onClose:s=>S(s),width:"50vw",children:e.jsx(be,{onFinish:te,random:Q,mode:"drive"})}),e.jsx(Se,{title:"File Informations",anchor:"right",width:"35vw",destroyOnClose:!0,onClose:s=>D(s),open:Z,children:e.jsx(De,{id:C==null?void 0:C.id})})]}):e.jsx(m,{style:{display:"flex",justifyContent:"center"},children:e.jsx(d,{span:12,children:e.jsxs(de,{children:[e.jsx(z,{message:"You can not Access this Drive, you are not connected, Please Click Connect button Below",type:"error",showIcon:!0,style:{marginBottom:30}}),e.jsx(Ne,{id:t==null?void 0:t.id}),e.jsx(g,{type:"primary",size:"large",style:{float:"right"},onClick:()=>re(t==null?void 0:t.id),children:"Connect"})]})})}):e.jsx(m,{children:e.jsx(d,{span:24,style:{display:"flex",justifyContent:"center"},children:e.jsx(ce,{})})})},ze=()=>e.jsx("div",{style:{marginTop:10},children:e.jsx(Ae,{})}),Oe=()=>e.jsx(ze,{});export{Oe as DriveFilesPage};
