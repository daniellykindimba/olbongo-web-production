import{r as i,aQ as ue,gK as Ie,e as Te,b as ae,ck as me,aT as oe,j as e,a8 as pe,aR as he,aU as M,_ as y,av as q,aW as te,aP as K,cm as fe,F as Oe,cn as ge,cl as ye,g as L,aX as se}from"./index-5ca9535b.js";import{I as De}from"./index.es-5dcda770.js";import{d as ve,C as xe}from"./ckeditor-04dbc548.js";import{L as R}from"./index-7b2e326e.js";import{P as Ne}from"./index-89f4336e.js";import{A as V}from"./index-a98b3333.js";import{I as X}from"./index-cf1c3ccb.js";import{t as Ee}from"./index-4dfda1a4.js";import{U as je}from"./index-3ccba980.js";import{D as Se}from"./DeleteOutlined-ce15cd19.js";import{I as be}from"./InfoCircleOutlined-0090fdc4.js";import{M as we}from"./MoreOutlined-086a1476.js";import{F as Ce}from"./FileImageOutlined-332b1326.js";import{D as Le}from"./index-7036fc77.js";import{m as ie}from"./data_objects-2e46d347.js";import{H as Fe,a as Me}from"./HeartOutlined-f1cf4f3e.js";import{T as Re}from"./index-56a878e3.js";import{M as ke}from"./index-cba636c8.js";import{M as Ae}from"./MessageOutlined-cebb5907.js";import{E as ze}from"./ExclamationCircleOutlined-572d6e07.js";import"./index-b657a759.js";import"./ActionButton-82a2aabb.js";import"./Image-decbf9f6.js";import"./DialogWrap-6d0a9ba5.js";import"./ZoomOutOutlined-4d40b3b9.js";import"./index-b0010e2a.js";import"./fade-77903fe8.js";import"./Upload-7eb0a44c.js";import"./DeleteOutlined-25685737.js";import"./DownloadOutlined-6cd35f11.js";import"./data_objects-b919bf8a.js";import"./EditOutlined-401a1613.js";import"./transButton-9e6b3446.js";import"./index-3a1cff3c.js";import"./InfoCircleFilled-dfe59508.js";import"./InfoCircleFilled-baaa675e.js";function _(r){"@babel/helpers - typeof";return _=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(r)}function le(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);t&&(o=o.filter(function(d){return Object.getOwnPropertyDescriptor(r,d).enumerable})),n.push.apply(n,o)}return n}function re(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?le(Object(n),!0).forEach(function(o){E(r,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):le(Object(n)).forEach(function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(n,o))})}return r}function E(r,t,n){return t=He(t),t in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}function He(r){var t=qe(r,"string");return _(t)==="symbol"?t:String(t)}function qe(r,t){if(_(r)!=="object"||r===null)return r;var n=r[Symbol.toPrimitive];if(n!==void 0){var o=n.call(r,t||"default");if(_(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}var _e=function(t){var n,o=t.componentCls,d=t.colorBgContainer,u=t.fontSize,v=t.fontSizeSM,h=t.padding,m=t.paddingXS,p=t.marginSM,b=t.marginXXS,w=t.controlHeight,N=t.lineHeightSM,C=t.colorText,x=t.colorTextSecondary,f=t.colorTextTertiary,P=t.motionDurationSlow;return E({},o,re(re({},Te(t)),{},(n={position:"relative",backgroundColor:d},E(n,"".concat(o,"-inner"),{display:"flex",paddingBlock:h}),E(n,"".concat(o,"-avatar"),{position:"relative",flexShrink:0,marginInlineEnd:p,cursor:"pointer",img:{width:w,height:w,borderRadius:"50%"}}),E(n,"".concat(o,"-content"),{position:"relative",flex:"auto",minWidth:0,wordWrap:"break-word","&-author":{display:"flex",flexWrap:"wrap",justifyContent:"flex-start",marginBottom:b,"& > a, & > span":{paddingInlineEnd:m,fontSize:v,lineHeight:N},"&-name":{color:x,fontSize:u,transition:"color ".concat(P),"> *":{color:x,"&:hover":{color:x}}},"&-time":{color:f,whiteSpace:"nowrap",cursor:"auto"}},"&-detail p":{whiteSpace:"pre-wrap",marginBlock:0}}),E(n,"".concat(o,"-actions"),{marginTop:p,marginBottom:0,paddingInlineStart:0,"> li":{display:"inline-block",color:x,"> span":{marginInlineEnd:p,color:x,fontSize:v,cursor:"pointer",transition:"color ".concat(P),userSelect:"none","&:hover":{color:C}}}}),E(n,"".concat(o,"-nested"),{marginInlineStart:44}),n)))};function Be(r){var t=Ee.useToken(),n=t.theme,o=t.token,d=t.hashId,u=i.useContext(ue.ConfigContext),v=u.iconPrefixCls;return[Ie({theme:n,token:o,hashId:d,path:["compatible","Comment",r,v]},function(){var h=re({componentCls:".".concat(r)},o);return[_e(h)]}),d]}function B(r){"@babel/helpers - typeof";return B=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(r)}var Ue=["actions","author","avatar","children","className","content","prefixCls","datetime"];function ne(){return ne=Object.assign?Object.assign.bind():function(r){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(r[o]=n[o])}return r},ne.apply(this,arguments)}function Ge(r,t,n){return t=$e(t),t in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}function $e(r){var t=We(r,"string");return B(t)==="symbol"?t:String(t)}function We(r,t){if(B(r)!=="object"||r===null)return r;var n=r[Symbol.toPrimitive];if(n!==void 0){var o=n.call(r,t||"default");if(B(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}function Ke(r,t){return Qe(r)||Ye(r,t)||Xe(r,t)||Ve()}function Ve(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xe(r,t){if(r){if(typeof r=="string")return ce(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);if(n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set")return Array.from(r);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ce(r,t)}}function ce(r,t){(t==null||t>r.length)&&(t=r.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=r[n];return o}function Ye(r,t){var n=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(n!=null){var o,d,u,v,h=[],m=!0,p=!1;try{if(u=(n=n.call(r)).next,t===0){if(Object(n)!==n)return;m=!1}else for(;!(m=(o=u.call(n)).done)&&(h.push(o.value),h.length!==t);m=!0);}catch(b){p=!0,d=b}finally{try{if(!m&&n.return!=null&&(v=n.return(),Object(v)!==v))return}finally{if(p)throw d}}return h}}function Qe(r){if(Array.isArray(r))return r}function Je(r,t){if(r==null)return{};var n=Ze(r,t),o,d;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(r);for(d=0;d<u.length;d++)o=u[d],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(r,o)&&(n[o]=r[o])}return n}function Ze(r,t){if(r==null)return{};var n={},o=Object.keys(r),d,u;for(u=0;u<o.length;u++)d=o[u],!(t.indexOf(d)>=0)&&(n[d]=r[d]);return n}var et=ue.ConfigContext,tt=function(t){var n=t.actions,o=t.author,d=t.avatar,u=t.children,v=t.className,h=t.content,m=t.prefixCls,p=t.datetime,b=Je(t,Ue),w=i.useContext(et),N=w.getPrefixCls,C=w.direction,x=function(S,D){return i.createElement("div",{className:ae("".concat(S,"-nested"))},D)},f=N("comment",m),P=Be(f),k=Ke(P,2),A=k[0],z=k[1],H=d?i.createElement("div",{className:"".concat(f,"-avatar")},typeof d=="string"?i.createElement("img",{src:d,alt:"comment-avatar"}):d):null,j=n&&n.length?i.createElement("ul",{className:"".concat(f,"-actions")},n.map(function(O,S){return i.createElement("li",{key:"action-".concat(S)},O)})):null,I=(o||p)&&i.createElement("div",{className:"".concat(f,"-content-author")},o&&i.createElement("span",{className:"".concat(f,"-content-author-name")},o),p&&i.createElement("span",{className:"".concat(f,"-content-author-time")},p)),T=i.createElement("div",{className:"".concat(f,"-content")},I,i.createElement("div",{className:"".concat(f,"-content-detail")},h),j),F=ae(f,Ge({},"".concat(f,"-rtl"),C==="rtl"),v,z);return A(i.createElement("div",ne({},b,{className:F}),i.createElement("div",{className:"".concat(f,"-inner")},H,T),u?x(f,u):null))};const Pe=tt,rt=r=>new Promise((t,n)=>{const o=new FileReader;o.readAsDataURL(r),o.onload=()=>t(o.result),o.onerror=d=>n(d)}),nt=r=>{const{data:t}=me(),[n,o]=i.useState(!1),[d,u]=i.useState(""),[v,h]=i.useState(""),[m,p]=i.useState([]),[b,w]=i.useState(!0),[N,C]=i.useState(1),[x]=oe.useForm(),[f,P]=i.useState(0),[k,A]=i.useState(0),[z,H]=i.useState(!0),[j,I]=i.useState(!1),[T,F]=i.useState(""),O=i.useRef(null),S=i.useRef([]),[D,U]=i.useState([]),G=s=>{S.current[s-1].scrollIntoView({behavior:"smooth"})},$=()=>{O.current.scrollIntoView({behavior:"smooth"})},W=async(s,a="",l=25)=>{s===1&&(m.length=0,p([]));const{data:c}=await L.custom({url:"",method:"get",meta:{operation:"darasaPostComments",variables:{page:{value:parseInt(s.toString()),type:"Int",required:!0},key:{value:a,type:"String",required:!1},postId:{value:parseInt(r.id===void 0?"0":r.id.toString()),type:"Int",required:!0},pageSize:{value:parseInt(l.toString()),type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","content","created","canDelete",{user:["id","fullName","pic","canManage","canDelete"]},{medias:["id","media"]}]}]}}).catch(g=>(console.error(g),y.error("Error loading comments1"),{data:null})).then(g=>g);c&&(A(c.total),P(c.pages),C(c.page+1),H(c.hasNext),p([...m,...c.results])),w(!1)},Y=async s=>{I(!0);const{data:a}=await L.custom({url:"",method:"post",meta:{operation:"createDarasaPostComment",variables:{postId:{value:parseInt(r.id===void 0?"0":r.id.toString()),type:"Int",required:!0},content:{value:s.content,type:"String",required:!0},photos:{value:D,type:"[Upload]",required:!1}},fields:["success","message",{comment:["id","content","created","canDelete",{user:["id","fullName","pic","canManage","canDelete"]},{medias:["id","media"]}]}]}}).catch(()=>(y.error("Error submitting comment"),{data:null})).then(l=>l);I(!1),F(""),a&&(a.success?(U([]),p([...m,a.comment]),$(),r.updateTotalComment(r==null?void 0:r.id,1)):y.error(a.message))},Q=async(s,a)=>{const{data:l}=await L.custom({url:"",method:"post",meta:{operation:"deleteDarasaPostComment",variables:{id:{value:parseInt(s.toString()),type:"Int",required:!0}},fields:["success","message"]}}).catch(c=>(console.error(c),y.error("Error deleting comment"),{data:null})).then(c=>c);l&&(l.success?(y.success(l.message),p(m.filter(c=>c.id!==s)),r.updateTotalComment(r==null?void 0:r.id,-1),G(a)):y.error(l.message))},J=e.jsx("div",{children:e.jsx(Ce,{})}),Z=async s=>{!s.url&&!s.preview&&(s.preview=await rt(s.originFileObj)),u(s.url||s.preview),o(!0),h(s.name||s.url.substring(s.url.lastIndexOf("/")+1))},ee=({fileList:s})=>{U(s)};return i.useEffect(()=>{W(1),$()},[r.id,r.randKey]),e.jsxs(e.Fragment,{children:[e.jsx("div",{id:"scrollableDiv",style:{height:"58vh",overflowY:"auto",overflowX:"hidden"},children:e.jsxs(pe,{spinning:b,children:[e.jsx("div",{ref:O}),e.jsx(R,{className:"comment-list",header:`${m.length} replies`,itemLayout:"horizontal",dataSource:m,renderItem:(s,a)=>{var l;return e.jsx(R.Item,{ref:c=>{S.current[a]=c},extra:[e.jsx(he,{overlay:e.jsxs(M,{children:[e.jsx(M.Item,{icon:e.jsx(Se,{}),disabled:!s.canDelete,children:e.jsx(Ne,{placement:"topLeft",title:"Are you sure to delete this comment?",onConfirm:()=>Q(s.id,a),okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx("a",{children:"Delete"})})},"delete-post-comment"+s.id),s.canManage?e.jsx(e.Fragment,{}):e.jsx(M.Item,{icon:e.jsx(be,{}),children:e.jsx("a",{onClick:()=>y("Under construction"),children:"Report"})},"report-post-comment"+s.id)]}),trigger:["click"],placement:"bottomRight",arrow:!0,overlayStyle:{zIndex:9999},children:e.jsx(q,{children:e.jsx(we,{})})})],actions:[],children:e.jsx(R.Item.Meta,{avatar:e.jsx(V,{src:(l=s==null?void 0:s.user)==null?void 0:l.pic}),title:e.jsx("a",{children:s.user.fullName}),description:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:s.user.bio}),e.jsx("span",{dangerouslySetInnerHTML:{__html:s.content}}),e.jsx("div",{children:s.medias.length>0&&e.jsx(te,{children:e.jsx(K,{span:24,children:e.jsx(X.PreviewGroup,{children:s.medias.map(c=>e.jsx(X,{preview:{visible:!0,zIndex:99999,bodyStyle:{zIndex:99999,zIndexPopup:99999}},style:{padding:10,display:"inline"},width:100,src:c.media}))})})})}),e.jsxs("span",{style:{color:"orange",display:"block"},children:[": Posted ",fe(s.created).fromNow()]})]})})},"post-comment-"+s.id)}}),z&&e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(q,{onClick:()=>W(N,"",25),children:"Load More"})})]})}),e.jsx("div",{children:e.jsx(Pe,{avatar:e.jsx(V,{src:t.pic,alt:"Han Solo"}),content:e.jsxs(oe,{form:x,onFinish:s=>{s.content=T,Y(s),x.resetFields()},children:[e.jsx("div",{children:e.jsx(ve.CKEditor,{disabled:j,editor:xe,data:T,onReady:s=>{s.editing.view.change(a=>{a.setStyle("min-height","75px",s.editing.view.document.getRoot())})},onChange:(s,a)=>{const l=a.getData();F(l)},config:{toolbar:{items:["bold","italic","strikethrough","underline","code","subscript","superscript","removeFormat","|","bulletedList","numberedList","todoList","|","outdent","indent","|","-","fontSize","fontFamily","fontColor","fontBackgroundColor","highlight","|","alignment","|"],shouldNotGroupWhenFull:!0},fontFamily:{options:["default","Arial, Helvetica, sans-serif","Courier New, Courier, monospace","Georgia, serif","Lucida Sans Unicode, Lucida Grande, sans-serif","Tahoma, Geneva, sans-serif","Times New Roman, Times, serif","Trebuchet MS, Helvetica, sans-serif","Verdana, Geneva, sans-serif"],supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0}}})}),e.jsx("div",{style:{marginTop:10},children:e.jsxs(Oe,{justify:"space-between",children:[e.jsx(je,{multiple:!0,name:"photos",accept:ge.supported_image_extensions.join(),beforeUpload:()=>!1,fileList:D,maxCount:2,onPreview:s=>{Z(s)},onChange:ee,style:{height:30},className:"upload-list-inline",children:D.length>=3?null:J}),e.jsx(q,{size:"large",loading:j,onClick:()=>x.submit(),type:"primary",disabled:T.length===0,children:"Publish Comment"})]})}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"}})]})})}),e.jsx(ye,{open:n,title:v,onClose:s=>o(s),children:e.jsx("img",{alt:"example",style:{width:"100%"},src:d})})]})},{Text:de}=Re,at=r=>new Promise((t,n)=>{const o=new FileReader;o.readAsDataURL(r),o.onload=()=>t(o.result),o.onerror=d=>n(d)}),_t=r=>{const[t,n]=i.useState(!1),[o,d]=i.useState(""),[u,v]=i.useState(""),[h,m]=i.useState([]),[p,b]=i.useState(),[w,N]=i.useState(!0),[C,x]=i.useState(!1),[f,P]=i.useState(1),[k,A]=i.useState(0),[z,H]=i.useState(!0),{data:j}=me(),[I,T]=i.useState(""),[F,O]=i.useState(!1),[S,D]=i.useState([]),U=a=>{b(a),O(!0)},G=async(a,l="")=>{const{data:c}=await L.custom({url:"",method:"get",meta:{operation:"darasaPosts",variables:{id:{value:parseInt(r.id.toString()),type:"Int",required:!0},page:{value:a,type:"Int",required:!0},key:{value:l,type:"String",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:ie}]}}).catch(g=>(console.log(g),y.error("Error loading posts"),{data:null})).then(g=>g);c&&(A(c.total),P(c.page+1),H(c.hasNext),m(c.results)),N(!1)};i.useEffect(()=>{G(f)},[]);const $=async()=>{x(!0);const{data:a}=await L.custom({url:"",method:"post",meta:{operation:"createDarasaPost",variables:{id:{value:parseInt(r.id.toString()),type:"Int",required:!0},content:{value:I,type:"String",required:!0},photos:{value:S,type:"[Upload]",required:!0}},fields:["success","message",{post:ie}]}}).catch(()=>(y.error("Error creating post"),{data:null})).then(l=>l);x(!1),a&&a.success&&(T(""),m([a.post,...h]),D([]),y.success(a.message))},W=async a=>{const{data:l}=await L.custom({url:"",method:"post",meta:{operation:"deleteDarasaPost",variables:{id:{value:parseInt(a.toString()),type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(y.error("Error deleting post"),{data:null})).then(c=>c);l&&(l.success?(y.success(l.message),m(h.filter(c=>c.id!==a))):y.error(l.message))},Y=a=>{ke.confirm({title:"Deleting Post",icon:e.jsx(ze,{}),content:"Are you sure ...",okText:"Delete",cancelText:"Cancel",onOk:()=>W(a)})},Q=async a=>{const{data:l}=await L.custom({url:"",method:"post",meta:{operation:"addDarasaPostLike",variables:{id:{value:parseInt(a.toString()),type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(y.error("Error liking post"),{data:null})).then(c=>c);if(l)if(l.success){const c=h.map(g=>g.id===a?{...g,isLiked:!0,totalLikes:g.totalLikes+1}:g);m(c)}else y.error(l.message)},J=async(a,l)=>{const c=h.map(g=>g.id===a?{...g,totalComments:g.totalComments+l}:g);m(c)},Z=e.jsxs("div",{children:[e.jsx(Ce,{}),e.jsx("div",{style:{marginTop:8},children:"Photo"})]}),ee=async a=>{!a.url&&!a.preview&&(a.preview=await at(a.originFileObj)),d(a.url||a.preview),n(!0),v(a.name||a.url.substring(a.url.lastIndexOf("/")+1))},s=({fileList:a})=>{D(a)};return e.jsxs(e.Fragment,{children:[e.jsxs(te,{children:[e.jsx(K,{span:24,children:e.jsx("div",{id:"scrollableDiv",style:{height:"80vh",overflow:"auto"},children:e.jsxs(De,{dataLength:k,next:()=>G(f),hasMore:z,scrollableTarget:"scrollableDiv",loader:e.jsx(e.Fragment,{children:e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(pe,{})})}),endMessage:e.jsx("p",{style:{textAlign:"center",display:h.length>0?"block":"none"},children:e.jsx("b",{children:"Yay! You have seen it all"})}),children:[e.jsx("div",{style:{marginLeft:20,marginRight:20},children:e.jsx(Pe,{avatar:e.jsx(V,{src:j==null?void 0:j.pic,alt:j==null?void 0:j.fullName}),style:{padding:0,border:"1",borderColor:"silver"},content:e.jsxs("div",{children:[e.jsx(ve.CKEditor,{disabled:C,editor:xe,data:I,onReady:a=>{a.editing.view.change(l=>{l.setStyle("min-height","100px",a.editing.view.document.getRoot())})},onChange:(a,l)=>{const c=l.getData();T(c)},config:{toolbar:{items:["bold","italic","strikethrough","underline","code","subscript","superscript","removeFormat","|","bulletedList","numberedList","todoList","|","outdent","indent","|","-","fontSize","fontFamily","fontColor","fontBackgroundColor","highlight","|","alignment","|","EmojiPanel"],shouldNotGroupWhenFull:!0},fontFamily:{options:["default","Arial, Helvetica, sans-serif","Courier New, Courier, monospace","Georgia, serif","Lucida Sans Unicode, Lucida Grande, sans-serif","Tahoma, Geneva, sans-serif","Times New Roman, Times, serif","Trebuchet MS, Helvetica, sans-serif","Verdana, Geneva, sans-serif"],supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0}}}),e.jsx("div",{children:e.jsx(je,{multiple:!0,name:"photos",accept:ge.supported_image_extensions.join(),beforeUpload:()=>!1,listType:"picture-card",fileList:S,maxCount:7,onPreview:a=>{ee(a)},onChange:s,children:S.length>=7?null:Z})}),e.jsx("span",{style:{display:"flex",justifyContent:"flex-end",padding:0},children:e.jsx(q,{size:"large",htmlType:"submit",loading:C,type:"primary",disabled:!I,style:{marginTop:10},onClick:()=>$(),children:"Post"})})]})},"comment-header-")}),e.jsx(R,{itemLayout:"vertical",size:"large",dataSource:h,loading:w,renderItem:a=>e.jsxs(R.Item,{extra:[e.jsx(he,{overlay:e.jsxs(M,{children:[e.jsx(M.Item,{icon:e.jsx(Se,{}),disabled:!a.canDelete,children:e.jsx("a",{onClick:()=>Y(a.id),children:"Delete"})},"delete-post-"+a.id),a.canManage?e.jsx(e.Fragment,{}):e.jsx(M.Item,{icon:e.jsx(be,{}),children:e.jsx("a",{onClick:()=>y("Under construction"),children:"Report"})},"report-post"+a.id)]}),trigger:["click"],placement:"bottomRight",arrow:!0,overlayStyle:{zIndex:9999},children:e.jsx(q,{children:e.jsx(we,{})})})],actions:[e.jsx("a",{onClick:()=>Q(a.id),children:e.jsxs(se,{children:[a.isLiked?e.jsx(Fe,{style:{color:"red"}}):e.jsx(Me,{style:{color:"red"}}),e.jsx(de,{children:a.totalLikes})]})}),e.jsx("a",{onClick:()=>U(a),children:e.jsxs(se,{children:[e.jsx(Ae,{}),e.jsx(de,{children:a.totalComments})]})})],children:[e.jsx(R.Item.Meta,{avatar:e.jsx(V,{src:a.user.pic}),title:e.jsx("a",{children:a.user.fullName}),description:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:a.user.bio}),e.jsxs("span",{style:{color:"orange"},children:[": Posted ",fe(a.created).fromNow()]})]})}),e.jsx("span",{dangerouslySetInnerHTML:{__html:a.content}}),e.jsx("div",{children:e.jsx(te,{children:e.jsx(K,{span:24,children:e.jsx(X.PreviewGroup,{children:a.medias.map(l=>e.jsx(X,{style:{padding:10,display:"inline"},width:300,src:l.media}))})})})})]},a.slug+a.id)})]})})}),e.jsx(K,{span:6})]}),e.jsx(Le,{title:"Comments",anchor:"right",width:"40vw",open:F,noOverFlow:!0,onClose:a=>O(a),children:e.jsx(nt,{id:p==null?void 0:p.id,randKey:Math.random(),updateTotalComment:J})}),e.jsx(ye,{visible:t,title:u,footer:null,onCancel:()=>n(!1),destroyOnClose:!0,children:e.jsx("img",{alt:"example",style:{width:"100%"},src:o})})]})};export{_t as PostsComponent};
