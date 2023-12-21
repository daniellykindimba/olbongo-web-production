import{cC as k,j as e,r,u as c,at as C,b0 as b,B as v,I as R,J as h,K as x,a5 as y,aw as H,G as A,C as w,as as M}from"./index-2ce10fe2.js";import{B as S}from"./Breadcrumb-5a3adddd.js";const z=k(e.jsx("path",{d:"M22 4h-2c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h2V4zM2.17 11.12c-.11.25-.17.52-.17.8V13c0 1.1.9 2 2 2h5.5l-.92 4.65c-.05.22-.02.46.08.66.23.45.52.86.88 1.22L10 22l6.41-6.41c.38-.38.59-.89.59-1.42V6.34C17 5.05 15.95 4 14.66 4h-8.1c-.71 0-1.36.37-1.72.97l-2.67 6.15z"}),"ThumbDownAlt"),D=k(e.jsx("path",{d:"M2 20h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1H2v11zm19.83-7.12c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66-.23-.45-.52-.86-.88-1.22L14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.84C7 18.95 8.05 20 9.34 20h8.11c.7 0 1.36-.37 1.72-.97l2.66-6.15z"}),"ThumbUpAlt"),L=n=>{const a=r.useRef(null),[i,l]=r.useState(!1),[d,u]=r.useState([]),[m,g]=r.useState(""),f=()=>{a.current&&a.current.scrollIntoView({behavior:"smooth"})},I=async()=>{l(!0);const{data:t}=await h.custom({url:"",method:"post",meta:{operation:"createPrompty",variables:{content:{value:m,type:"String",required:!0},promptType:{value:"text",type:"String",required:!0}},fields:["success","message",{prompt:["id","content"]},{promptResponse:["id","content"]}]}}).catch(o=>(l(!1),x.error("Error sending Query"),{data:null})).then(o=>o);t&&(l(!1),t.success?(u([...d,{id:t.prompt.id,sender:"me",text:t.prompt.content,timestamp:new Date().toISOString(),voteType:"none"},{id:t.promptResponse.id,sender:"bot",text:t.promptResponse.content.data.replace(/>/g,"<br />"),timestamp:new Date().toISOString(),voteType:t.promptResponse.voteType}]),setTimeout(()=>{f()},1e3),n.onAdd(t.prompt)):x.error(t.message)),g("")},j=async t=>{const{data:o}=await h.custom({url:"",method:"post",meta:{operation:"upvotePromptResponse",variables:{id:{value:t,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>({data:null})).then(s=>s);o&&o.success&&(x.success(o.message),u(d.map(s=>s.id===t?{...s,voteType:"upvote"}:s)))},T=async t=>{const{data:o}=await h.custom({url:"",method:"post",meta:{operation:"downvotePromptResponse",variables:{id:{value:t,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>({data:null})).then(s=>s);o&&o.success&&(x.success(o.message),u(d.map(s=>s.id===t?{...s,voteType:"downvote"}:s)))};return e.jsxs(c,{className:"chat-container",sx:{padding:"20px"},children:[e.jsx(c,{className:"chat-window",sx:{display:"flex",flexDirection:"column",height:"calc(100vh - 380px)"},flexGrow:1,overflow:"auto",children:e.jsxs("div",{children:[d.map(t=>e.jsx(c,{sx:{display:"flex",justifyContent:t.sender==="me"?"flex-start":"flex-end"},children:e.jsx(c,{sx:{marginBottom:"10px",padding:"10px",borderRadius:"5px",backgroundColor:"#eee",width:"90%",borderLeft:t.sender==="me"?"5px solid green":"5px solid red"},children:e.jsxs(C.Paragraph,{style:{fontSize:"18px"},children:[e.jsx("div",{dangerouslySetInnerHTML:{__html:t.text}}),t.sender==="bot"&&e.jsxs(c,{sx:{marginTop:"10px"},children:[e.jsx(b,{title:"Dislike",children:e.jsx(v,{size:"small",onClick:()=>T(t.id),children:e.jsx(z,{sx:{fill:t.voteType==="downvote"?"red":"black"}})})}),e.jsx(b,{title:"Like",children:e.jsx(v,{size:"small",onClick:()=>j(t.id),children:e.jsx(D,{sx:{fill:t.voteType==="upvote"?"green":"black"}})})})]})]})})},t.id)),e.jsx("div",{id:"scrollToTarget",ref:a})]})}),e.jsx(R.TextArea,{value:m,onChange:t=>g(t.target.value),placeholder:"Type your message",autoSize:{minRows:3,maxRows:5},disabled:i}),e.jsx(v,{onClick:I,style:{marginBottom:"3px",marginTop:"5px",float:"right"},type:"primary",size:"large",loading:i,disabled:i,children:"Send"})]})},B=n=>{const[a,i]=r.useState(!1),[l,d]=r.useState([]),[u,m]=r.useState(0),[g,f]=r.useState(0),[I,j]=r.useState(1),[T,t]=r.useState(!1);r.useState("");const o=async(s,P="")=>{const{data:p}=await h.custom({url:"",method:"get",meta:{operation:"prompts",variables:{page:{value:s,type:"Int",required:!0},key:{value:P,type:"String",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","content","created","updated","isActive"]}]}});m(p.total),f(p.pages),j(p.page),t(p.hasNext),d(p.results),i(!1)};return r.useEffect(()=>{o(1,"")},[n.refetch]),e.jsx(c,{sx:{paddingLeft:2,paddingRight:2,maxHeight:"calc(100vh - 200px)",overflowY:"auto"},children:e.jsx(y,{dataSource:l,renderItem:s=>e.jsx(y.Item,{children:e.jsx(y.Item.Meta,{title:e.jsx("a",{children:s.content}),description:e.jsx(e.Fragment,{children:e.jsx(C.Text,{type:"secondary",style:{float:"right"},children:H(s.created).format("DD/MM/YYYY HH:mm:ss")})})})})})})},q=()=>{const[n,a]=r.useState(Math.random()),i=async l=>{a(Math.random())};return e.jsx(c,{children:e.jsxs(A,{container:!0,children:[e.jsx(A,{item:!0,xs:12,sm:12,md:3,lg:3,xl:3,children:e.jsx(w,{title:"History",bodyStyle:{padding:0},children:e.jsx(B,{refetch:n})})}),e.jsx(A,{item:!0,xs:12,sm:12,md:9,lg:9,xl:9,children:e.jsx(w,{title:"AskAI Chat Window",children:e.jsx(L,{onAdd:i})})})]})})},N=()=>e.jsxs(e.Fragment,{children:[e.jsxs(S,{children:[e.jsx(S.Item,{children:e.jsx(M,{to:"/askai",children:"Home"})}),e.jsx(S.Item,{children:"AskAI"})]}),e.jsx(q,{})]}),V=()=>e.jsx(N,{}),G=n=>{const{page:a}=n;return a==="AskAIHomePage"?e.jsx(V,{}):e.jsx("div",{children:"No page found ..."})};export{G as AskAIPages};
