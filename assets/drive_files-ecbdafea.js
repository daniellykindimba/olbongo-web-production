import{r as a,F as v,q as le,b6 as oe,j as e,y as x,z as d,s as ce,bC as B,C as de,B as j,au as A,bS as ue,I as he,S as xe,aO as pe,a5 as F,Z as ge,$ as m,a9 as je,X as me,a0 as fe,K as i,a1 as ye,A as M,x as L,aZ as Ce,T as ve,ab as Fe,D as we,H as Ie,e9 as Se,a2 as De,a_ as be,J as f,aV as ke,ar as O,as as ze,a$ as Be}from"./index-e1c2324f.js";import{D as Ae}from"./drive_info-9dfdab80.js";import{B as y}from"./Breadcrumb-86dedde2.js";const Me=Oe=>{const[w,U]=a.useState(!1),[t,T]=a.useState(),[u,p]=a.useState([]),[I,V]=a.useState(!0),[h,q]=a.useState(1),[Ue,E]=a.useState(0),[g,N]=a.useState(20),[P,R]=a.useState(0),[Te,K]=a.useState(!0),[S,_]=a.useState(""),[H]=v.useForm(),{push:Y}=le(),[J,Z]=a.useState(Math.random()),[$,D]=a.useState(!1),l=oe(),[Q,b]=a.useState(!1),[C,W]=a.useState(),k=s=>{W(s),b(!0)},X=()=>{Z(Math.random()),D(!0)},z=async s=>{const{data:n}=await f.custom({url:"",method:"get",meta:{operation:"drive",variables:{id:{value:s,type:"Int",required:!0}},fields:ke}}).catch(()=>(i.error("Error occured while fetching drive data"),{data:null})).then(r=>r);n&&(T(n),U(!0))},G=async s=>{const{data:n}=await f.custom({url:"",method:"post",meta:{operation:"deleteFile",variables:{id:{value:s,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(i.error("Error occured while deleting file"),{data:null})).then(r=>r);n&&(n.success?(i.success(n.message),p(u.filter(r=>r.id!==s))):i.error(n.message)),O.destroyAll()},ee=s=>{O.confirm({title:"Confirm",icon:e.jsx(ze,{}),content:"Deleting File ....",okText:"Delete",cancelText:"Cancel",onOk:()=>G(s)})},se=()=>{o(1,"",g)},o=async(s,n="",r=20)=>{const{data:c}=await f.custom({url:"",method:"get",meta:{operation:"driveFiles",variables:{id:{value:parseInt(l.drive.toString()),type:"Int",required:!0},page:{value:s,type:"Int",required:!0},key:{value:n,type:"String",required:!1},pageSize:{value:r,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:Be}]}}).catch(()=>(i.error("Error occured while fetching files"),{data:null})).then(ie=>ie);c&&(R(c.total),q(c.page),E(c.pages),K(c.hasNext),p(c.results)),V(!1)},te=(s,n)=>{N(n),o(h,S,n)},ne=async s=>{const{data:n}=await f.custom({url:"",method:"post",meta:{operation:"connectDrive",variables:{id:{value:s,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(i.error("Drive connection failed"),{data:null})).then(r=>r);n&&(n.success?(i(n.message),z(parseInt(l.drive.toString())),o(h,"",20)):i.error(n.message))},re=s=>{const n=u.map(r=>(r.id===s.id&&(r.imageVisible=!0),r));p(n)},ae=s=>{const n=u.map(r=>(r.id===s.id&&(r.imageVisible=!1),r));p(n)};return a.useEffect(()=>{z(parseInt(l.drive.toString())),o(h,"",20)},[l.drive]),w?t!=null&&t.isBlocked?e.jsx("div",{children:e.jsx(B,{message:"You can not Access this Drive, you are blocked",type:"error",showIcon:!0})}):t!=null&&t.isConnected?e.jsxs(e.Fragment,{children:[t&&e.jsxs(e.Fragment,{children:[e.jsx(x,{children:e.jsxs(d,{span:24,style:{display:"flex",justifyContent:"space-between",marginBottom:10},children:[e.jsxs(y,{children:[e.jsx(y.Item,{children:e.jsx(A,{to:"/odrive",children:"Home"})}),e.jsx(y.Item,{children:e.jsx(A,{to:"/odrive/drives",children:"Drives"})}),e.jsxs(y.Item,{children:[t==null?void 0:t.name," - Files"]})]}),e.jsx("div",{children:e.jsx(j,{size:"large",icon:e.jsx(ue,{}),disabled:!(t!=null&&t.canManage)||(t==null?void 0:t.isArchived),onClick:()=>Y("/odrive/drive/"+l.drive+"/"+l.code+"/members"),children:"Members"})})]})}),e.jsxs(x,{children:[e.jsx(d,{span:12,children:e.jsx(v,{layout:"vertical",form:H,onFinish:s=>{_(s.key),o(1,s.key,g)},children:e.jsx(v.Item,{name:"key",children:e.jsx(he,{size:"large",placeholder:"Search file(s)...",prefix:e.jsx(xe,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(d,{span:12,style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(j,{size:"large",icon:e.jsx(pe,{}),onClick:()=>X(),loading:!w,disabled:!(t!=null&&t.isAuthor)||(t==null?void 0:t.isArchived),children:"Upload File(s)"})})]}),e.jsx(F,{itemLayout:"horizontal",loading:I,dataSource:u,renderItem:s=>e.jsx("div",{style:{background:"white",marginBottom:5,paddingLeft:10,paddingTop:10},children:e.jsx(F.Item,{actions:[e.jsx(ge,{trigger:["click"],overlay:e.jsxs(m,{children:[s.canDelete?e.jsx(m.Item,{disabled:!s.canDelete,icon:e.jsx(je,{}),onClick:()=>ee(s.id),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Delete"})}):e.jsx(e.Fragment,{}),e.jsx(m.Item,{icon:e.jsx(me,{}),children:e.jsx("a",{target:"_blank",href:s.file,rel:"noopener noreferrer",download:!0,children:"Download"})}),e.jsx(m.Item,{icon:e.jsx(fe,{}),onClick:()=>i("Under construction"),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Report"})})]}),overlayStyle:{zIndex:9999},children:e.jsx("a",{className:"ant-dropdown-link",onClick:n=>n.preventDefault(),children:e.jsx(ye,{style:{color:"orange",fontSize:28,fontWeight:"bold"}})})})],children:e.jsx(F.Item.Meta,{avatar:e.jsx(M,{src:s.icon}),title:s.isImage?e.jsxs(e.Fragment,{children:[e.jsx(L,{title:"Click to View Image",color:"red",placement:"top",children:e.jsx("a",{onClick:()=>re(s),children:s.title})}),e.jsx(j,{onClick:()=>k(s),style:{marginLeft:10},danger:!0,children:"Details Dialog"}),e.jsx(Ce,{style:{display:"none"},src:s.file,preview:{visible:s.imageVisible,src:s.file,onVisibleChange:n=>{ae(s)}}})]}):e.jsx("a",{onClick:()=>k(s),children:s.title}),description:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:s.description}),s.tags.length>0&&e.jsx(x,{style:{marginBottom:3},children:e.jsx(d,{children:s.tags.map(n=>e.jsx(L,{title:"File Tag",placement:"top",children:e.jsx(ve,{color:"orange",children:n.tag.name},"tag-"+n.id)}))})}),e.jsxs("p",{children:[!s.isAuthor&&e.jsx(e.Fragment,{children:e.jsxs("span",{style:{color:"orange"},children:["Uploaded By:",e.jsx(M,{size:"small",style:{marginLeft:5},src:s.author.pic}),s.author.fullName]})}),s.isAuthor&&e.jsx(e.Fragment,{children:e.jsx("span",{style:{color:"orange"},children:"Uploaded By:You"})}),e.jsxs("span",{style:{color:"orange",marginLeft:3},children:["|",e.jsx("span",{style:{marginLeft:2},children:s.size})]}),e.jsx(e.Fragment,{children:e.jsxs("span",{style:{marginLeft:3},children:["|",e.jsx(Fe,{date:new Date(s.created),locale:"en-US"})]})})]})]})})},"drive-file-"+s.id)})})]}),!I&&u.length>0&&e.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:10},children:e.jsx(we,{showSizeChanger:!0,showQuickJumper:!0,defaultCurrent:h,current:h,total:P,pageSize:g,onShowSizeChange:te,onChange:s=>o(s,S,g)})}),e.jsx(Ie,{title:"Uploading Files",open:$,onClose:s=>D(s),width:"50vw",children:e.jsx(Se,{onFinish:se,random:J,mode:"drive"})}),e.jsx(De,{title:"File Informations",anchor:"right",width:"35vw",destroyOnClose:!0,onClose:s=>b(s),open:Q,children:e.jsx(be,{id:C==null?void 0:C.id})})]}):e.jsx(x,{style:{display:"flex",justifyContent:"center"},children:e.jsx(d,{span:12,children:e.jsxs(de,{children:[e.jsx(B,{message:"You can not Access this Drive, you are not connected, Please Click Connect button Below",type:"error",showIcon:!0,style:{marginBottom:30}}),e.jsx(Ae,{id:t==null?void 0:t.id}),e.jsx(j,{type:"primary",size:"large",style:{float:"right"},onClick:()=>ne(t==null?void 0:t.id),children:"Connect"})]})})}):e.jsx(x,{children:e.jsx(d,{span:24,style:{display:"flex",justifyContent:"center"},children:e.jsx(ce,{})})})},Le=()=>e.jsx("div",{style:{marginTop:10},children:e.jsx(Me,{})}),Ne=()=>e.jsx(Le,{});export{Ne as DriveFilesPage};
