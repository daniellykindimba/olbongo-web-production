import{bL as j,r as g,aM as e,$ as C,ae as c,cH as t,aH as k,aA as m,aD as l,bK as r,bU as f,i5 as b,cf as d,bV as u,i6 as v,cy as y,aJ as A}from"./index-2fc17c3b.js";import{r as o}from"./remove_html_tags-be9c976e.js";import{C as x}from"./index-f023b25a.js";import{A as I}from"./index-20752ece.js";const{Meta:O}=x,D=i=>{var s;const{push:a}=j(),n=g.useMemo(()=>i==null?void 0:i.darasa,[i==null?void 0:i.darasa]);return e.jsx(x,{style:{marginBottom:"10px",marginRight:"10px"},cover:e.jsx("img",{alt:"example",src:n==null?void 0:n.cover,style:{height:(i==null?void 0:i.size)==="small"?"130px":"200px",objectFit:"cover"}}),actions:[(i==null?void 0:i.size)==="small"?e.jsx(C,{title:"Open "+n.name,color:"red",children:e.jsx(c,{style:{float:"right"},icon:e.jsx(t,{}),onClick:()=>a(`/oclass/class/session/${n.id}/${n.code}`),danger:!0})}):e.jsx(k,{style:{float:"right"},children:e.jsx(m,{trigger:["click"],overlay:e.jsxs(l,{children:[n.isConnected?e.jsxs(e.Fragment,{children:[e.jsx(l.Item,{icon:e.jsx(t,{}),disabled:!n.isActive,children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",onClick:()=>{n.isActive&&n.isConnected?a("/oclass/class/session/"+n.id+"/"+n.code):n.isActive&&!n.isConnected?i==null||i.showModalDarasaConnect(n):r("Class is Blocked")},children:"Open"})}),e.jsx(l.Item,{icon:e.jsx(f,{}),onClick:()=>i==null?void 0:i.showEditModal(n),disabled:!(n!=null&&n.canManage),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Edit"})}),e.jsx(l.Item,{icon:e.jsx(b,{}),onClick:()=>i==null?void 0:i.handleShareModal(n),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Share"})}),e.jsx(l.Item,{icon:e.jsx(d,{}),onClick:()=>r("Under construction"),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Report"})}),n.isAuthor?e.jsx(e.Fragment,{}):e.jsx(l.Item,{icon:e.jsx(d,{}),onClick:()=>i==null?void 0:i.handleDarasaDisconnect(n.id),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Disconnect"})}),e.jsx(l.Item,{icon:e.jsx(u,{}),onClick:()=>i==null?void 0:i.handleDarasaDelete(n.id),disabled:!(n!=null&&n.canDelete),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Delete"})}),e.jsx(l.Item,{icon:e.jsx(v,{}),onClick:()=>i==null?void 0:i.handleAddingToArchive(n.id),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Archive"})},"drive-archive-"+n.id)]}):e.jsx(e.Fragment,{}),n.isConnected?e.jsx(e.Fragment,{}):e.jsx(l.Item,{icon:e.jsx(t,{}),disabled:!n.isActive,children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",onClick:()=>a("/oclass/class/session/"+n.id+"/"+n.code),children:"Connect"})})]}),overlayStyle:{zIndex:9999},children:e.jsx(c,{type:"link",size:"large",className:"ant-dropdown-link",style:{zIndex:1},onClick:h=>h.preventDefault(),children:e.jsx(y,{style:{color:"orange",fontSize:28,fontWeight:"bold"}})})})})],children:e.jsx(O,{avatar:e.jsx(I,{src:(s=n==null?void 0:n.user)==null?void 0:s.pic}),title:e.jsxs("a",{onClick:()=>a(`/oclass/class/session/${n.id}/${n.code}`),children:[o(n.name).substring(0,50)+(n.name.length>50?"...":""),e.jsx(A,{color:"green",style:{marginLeft:"10px"},children:n.code})]}),description:o(n.description).substring(0,100)+(n.description.length>100?"...":"")})})};export{D as C};
