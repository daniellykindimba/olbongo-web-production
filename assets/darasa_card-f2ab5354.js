import{c as j,r as g,j as e,aZ as m,af as f,av as s,aX as C,aR as k,aU as t,_ as c}from"./index-5ca9535b.js";import{r as o}from"./remove_html_tags-be9c976e.js";import{C as x}from"./index-09932534.js";import{A as u}from"./index-a98b3333.js";import{S as b,C as v}from"./ShareAltOutlined-2cbf0750.js";import{F as a}from"./FolderOpenOutlined-8df3d760.js";import{E as I}from"./EditOutlined-5af7fbe4.js";import{I as d}from"./InfoCircleOutlined-0090fdc4.js";import{D as y}from"./DeleteOutlined-ce15cd19.js";import{M as A}from"./MoreOutlined-086a1476.js";const{Meta:O}=x,B=i=>{var r;const{push:l}=j(),n=g.useMemo(()=>i==null?void 0:i.darasa,[i==null?void 0:i.darasa]);return e.jsx(x,{style:{marginBottom:"10px",marginRight:"10px",minHeight:i.min?"0px":"295px"},cover:e.jsx("img",{alt:"example",src:n==null?void 0:n.cover,style:{height:(i==null?void 0:i.size)==="small"?"130px":"200px",objectFit:"cover"}}),children:e.jsx(O,{avatar:e.jsx(u,{src:(r=n==null?void 0:n.user)==null?void 0:r.pic}),title:e.jsxs(e.Fragment,{children:[e.jsxs("a",{onClick:()=>l(`/oclass/class/session/${n.id}/${n.code}`),children:[o(n.name).substring(0,50)+(n.name.length>50?"...":""),e.jsx(m,{color:"green",style:{marginLeft:"10px"},children:n.code})]}),(i==null?void 0:i.size)==="small"?e.jsx(f,{title:"Open "+n.name,color:"red",children:e.jsx(s,{style:{float:"right",position:"absolute",right:0},icon:e.jsx(a,{}),onClick:()=>l(`/oclass/class/session/${n.id}/${n.code}`),danger:!0})}):e.jsx(C,{style:{float:"right",position:"absolute",right:0},children:e.jsx(k,{trigger:["click"],overlay:e.jsxs(t,{children:[n.isConnected?e.jsxs(e.Fragment,{children:[e.jsx(t.Item,{icon:e.jsx(a,{}),disabled:!n.isActive,children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",onClick:()=>{n.isActive&&n.isConnected?l("/oclass/class/session/"+n.id+"/"+n.code):n.isActive&&!n.isConnected?i==null||i.showModalDarasaConnect(n):c("Class is Blocked")},children:"Open"})}),e.jsx(t.Item,{icon:e.jsx(I,{}),onClick:()=>i==null?void 0:i.showEditModal(n),disabled:!(n!=null&&n.canManage),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Edit"})}),e.jsx(t.Item,{icon:e.jsx(b,{}),onClick:()=>i==null?void 0:i.handleShareModal(n),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Share"})}),e.jsx(t.Item,{icon:e.jsx(d,{}),onClick:()=>c("Under construction"),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Report"})}),n.isAuthor?e.jsx(e.Fragment,{}):e.jsx(t.Item,{icon:e.jsx(d,{}),onClick:()=>i==null?void 0:i.handleDarasaDisconnect(n.id),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Disconnect"})}),e.jsx(t.Item,{icon:e.jsx(y,{}),onClick:()=>i==null?void 0:i.handleDarasaDelete(n.id),disabled:!(n!=null&&n.canDelete),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Delete"})}),e.jsx(t.Item,{icon:e.jsx(v,{}),onClick:()=>i==null?void 0:i.handleAddingToArchive(n.id),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Archive"})},"drive-archive-"+n.id)]}):e.jsx(e.Fragment,{}),n.isConnected?e.jsx(e.Fragment,{}):e.jsx(t.Item,{icon:e.jsx(a,{}),disabled:!n.isActive,children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",onClick:()=>l("/oclass/class/session/"+n.id+"/"+n.code),children:"Connect"})})]}),overlayStyle:{zIndex:9999},children:e.jsx(s,{type:"link",size:"large",className:"ant-dropdown-link",style:{zIndex:1},onClick:h=>h.preventDefault(),children:e.jsx(A,{style:{color:"orange",fontSize:28,fontWeight:"bold"}})})})})]}),description:o(n.description).substring(0,100)+(n.description.length>100?"...":"")})})};export{B as C};
