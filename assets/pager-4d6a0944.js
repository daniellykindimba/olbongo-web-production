import{ci as k,j as e,r,B as l,eS as b,av as v,a1 as R,g as h,_ as i,G as y,co as L,cM as M,aN as S,cA as D}from"./index-05772eb7.js";import{T as C}from"./index-c1ab6d96.js";import{L as A}from"./index-7c727271.js";import{C as w}from"./index-7b68fa8b.js";import"./EditOutlined-401a1613.js";import"./transButton-35d2d6df.js";import"./index-ad8bef66.js";import"./Skeleton-4d93f06a.js";import"./DotChartOutlined-f39c986e.js";import"./index-88e92a4a.js";const z=k(e.jsx("path",{d:"M22 4h-2c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h2V4zM2.17 11.12c-.11.25-.17.52-.17.8V13c0 1.1.9 2 2 2h5.5l-.92 4.65c-.05.22-.02.46.08.66.23.45.52.86.88 1.22L10 22l6.41-6.41c.38-.38.59-.89.59-1.42V6.34C17 5.05 15.95 4 14.66 4h-8.1c-.71 0-1.36.37-1.72.97l-2.67 6.15z"}),"ThumbDownAlt"),H=k(e.jsx("path",{d:"M2 20h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1H2v11zm19.83-7.12c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66-.23-.45-.52-.86-.88-1.22L14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.84C7 18.95 8.05 20 9.34 20h8.11c.7 0 1.36-.37 1.72-.97l2.66-6.15z"}),"ThumbUpAlt"),B=c=>{const a=r.useRef(null),[n,d]=r.useState(!1),[p,u]=r.useState([]),[x,g]=r.useState(""),f=()=>{a.current&&a.current.scrollIntoView({behavior:"smooth"})},T=async()=>{d(!0);const{data:t}=await h.custom({url:"",method:"post",meta:{operation:"createPrompty",variables:{content:{value:x,type:"String",required:!0},promptType:{value:"text",type:"String",required:!0}},fields:["success","message",{prompt:["id","content"]},{promptResponse:["id","content"]}]}}).catch(()=>(d(!1),i.remove(),i.error("Error sending Query"),{data:null})).then(o=>o);t&&(d(!1),t.success?(u([...p,{id:t.prompt.id,sender:"me",text:t.prompt.content,timestamp:new Date().toISOString(),voteType:"none"},{id:t.promptResponse.id,sender:"bot",text:t.promptResponse.content.data.replace(/>/g,"<br />"),timestamp:new Date().toISOString(),voteType:t.promptResponse.voteType}]),setTimeout(()=>{f()},1e3),c.onAdd(t.prompt)):(i.remove(),i.error(t.message))),g("")},j=async t=>{const{data:o}=await h.custom({url:"",method:"post",meta:{operation:"upvotePromptResponse",variables:{id:{value:t,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>({data:null})).then(s=>s);o&&(i.remove(),o.success&&(i.success(o.message),u(p.map(s=>s.id===t?{...s,voteType:"upvote"}:s))))},I=async t=>{const{data:o}=await h.custom({url:"",method:"post",meta:{operation:"downvotePromptResponse",variables:{id:{value:t,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>({data:null})).then(s=>s);i.remove(),o&&o.success&&(i.success(o.message),u(p.map(s=>s.id===t?{...s,voteType:"downvote"}:s)))};return e.jsxs(l,{className:"chat-container",sx:{padding:"20px"},children:[e.jsx(l,{className:"chat-window",sx:{display:"flex",flexDirection:"column",height:"calc(100vh - 380px)"},flexGrow:1,overflow:"auto",children:e.jsxs("div",{children:[p.map(t=>e.jsx(l,{sx:{display:"flex",justifyContent:t.sender==="me"?"flex-start":"flex-end"},children:e.jsx(l,{sx:{marginBottom:"10px",padding:"10px",borderRadius:"5px",backgroundColor:"#eee",width:"90%",borderLeft:t.sender==="me"?"5px solid green":"5px solid red"},children:e.jsxs(C.Paragraph,{style:{fontSize:"18px"},children:[e.jsx("div",{dangerouslySetInnerHTML:{__html:t.text}}),t.sender==="bot"&&e.jsxs(l,{sx:{marginTop:"10px"},children:[e.jsx(b,{title:"Dislike",children:e.jsx(v,{size:"small",onClick:()=>I(t.id),children:e.jsx(z,{sx:{fill:t.voteType==="downvote"?"red":"black"}})})}),e.jsx(b,{title:"Like",children:e.jsx(v,{size:"small",onClick:()=>j(t.id),children:e.jsx(H,{sx:{fill:t.voteType==="upvote"?"green":"black"}})})})]})]})})},t.id)),e.jsx("div",{id:"scrollToTarget",ref:a})]})}),e.jsx(R.TextArea,{value:x,onChange:t=>g(t.target.value),placeholder:"Type your message",autoSize:{minRows:3,maxRows:5},disabled:n}),e.jsx(v,{onClick:T,style:{marginBottom:"3px",marginTop:"5px",float:"right"},type:"primary",size:"large",loading:n,disabled:n,children:"Send"})]})},N=c=>{const[a,n]=r.useState(!1),[d,p]=r.useState([]),[u,x]=r.useState(0),[g,f]=r.useState(0),[T,j]=r.useState(1),[I,t]=r.useState(!1);r.useState("");const o=async(s,P="")=>{n(!0);const{data:m}=await h.custom({url:"",method:"get",meta:{operation:"prompts",variables:{page:{value:s,type:"Int",required:!0},key:{value:P,type:"String",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","content","created","updated","isActive"]}]}});x(m.total),f(m.pages),j(m.page),t(m.hasNext),p(m.results),n(!1)};return r.useEffect(()=>{o(1,"")},[c.refetch]),e.jsx(l,{sx:{paddingLeft:2,paddingRight:2,maxHeight:"calc(100vh - 200px)",overflowY:"auto"},children:e.jsx(A,{loading:a,dataSource:d,renderItem:s=>e.jsx(A.Item,{children:e.jsx(A.Item.Meta,{title:e.jsx("a",{children:s.content}),description:e.jsx(e.Fragment,{children:e.jsxs(C.Text,{type:"secondary",style:{float:"right"},children:[e.jsx("span",{children:new Date(s.created).toLocaleDateString()}),e.jsx("span",{style:{marginLeft:3},children:new Date(s.created).toLocaleTimeString()})]})})})})})})},q=()=>{const[c,a]=r.useState(Math.random()),n=async d=>{a(Math.random())};return e.jsx(l,{children:e.jsxs(y,{container:!0,children:[e.jsx(y,{item:!0,xs:12,sm:12,md:3,lg:3,xl:3,children:e.jsx(w,{title:"History",bodyStyle:{padding:0},children:e.jsx(N,{refetch:c})})}),e.jsx(y,{item:!0,xs:12,sm:12,md:9,lg:9,xl:9,children:e.jsx(w,{title:"AskAI Chat Window",children:e.jsx(B,{onAdd:n})})})]})})},V=()=>(r.useEffect(()=>{document.title=L.system_name+": AskAI"},[]),e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx(M,{children:e.jsxs(S,{children:[e.jsx(S.Item,{children:e.jsx(D,{to:"/askai",children:"Home"})}),e.jsx(S.Item,{children:"AskAI"})]})})}),e.jsx(q,{})]})),K=c=>{const{page:a}=c;return a==="AskAIHomePage"?e.jsx(V,{}):e.jsx("div",{children:"No page found ..."})};export{K as AskAIPages};
