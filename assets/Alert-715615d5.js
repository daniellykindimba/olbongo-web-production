import{bU as c,aY as s,bE as W,bF as N,bA as d,iF as H,bR as g,iG as m,iH as y,k as a,r as U,a$ as F,iI as I,cp as _,bP as V,bT as Z,bQ as G}from"./index-ac5228cb.js";const Q=c(s.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");function Y(t){return N("MuiAlert",t)}const q=W("MuiAlert",["root","action","icon","message","filled","colorSuccess","colorInfo","colorWarning","colorError","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),M=q,D=c(s.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),J=c(s.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),K=c(s.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),X=c(s.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),tt=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],ot=Z(),et=t=>{const{variant:e,color:r,severity:o,classes:l}=t,u={root:["root",`color${g(r||o)}`,`${e}${g(r||o)}`,`${e}`],icon:["icon"],message:["message"],action:["action"]};return G(u,Y,l)},st=d(H,{name:"MuiAlert",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,e[r.variant],e[`${r.variant}${g(r.color||r.severity)}`]]}})(({theme:t})=>{const e=t.palette.mode==="light"?m:y,r=t.palette.mode==="light"?y:m;return a({},t.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px",variants:[...Object.entries(t.palette).filter(([,o])=>o.main&&o.light).map(([o])=>({props:{colorSeverity:o,variant:"standard"},style:{color:t.vars?t.vars.palette.Alert[`${o}Color`]:e(t.palette[o].light,.6),backgroundColor:t.vars?t.vars.palette.Alert[`${o}StandardBg`]:r(t.palette[o].light,.9),[`& .${M.icon}`]:t.vars?{color:t.vars.palette.Alert[`${o}IconColor`]}:{color:t.palette[o].main}}})),...Object.entries(t.palette).filter(([,o])=>o.main&&o.light).map(([o])=>({props:{colorSeverity:o,variant:"outlined"},style:{color:t.vars?t.vars.palette.Alert[`${o}Color`]:e(t.palette[o].light,.6),border:`1px solid ${(t.vars||t).palette[o].light}`,[`& .${M.icon}`]:t.vars?{color:t.vars.palette.Alert[`${o}IconColor`]}:{color:t.palette[o].main}}})),...Object.entries(t.palette).filter(([,o])=>o.main&&o.dark).map(([o])=>({props:{colorSeverity:o,variant:"filled"},style:a({fontWeight:t.typography.fontWeightMedium},t.vars?{color:t.vars.palette.Alert[`${o}FilledColor`],backgroundColor:t.vars.palette.Alert[`${o}FilledBg`]}:{backgroundColor:t.palette.mode==="dark"?t.palette[o].dark:t.palette[o].main,color:t.palette.getContrastText(t.palette[o].main)})}))]})}),rt=d("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(t,e)=>e.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),nt=d("div",{name:"MuiAlert",slot:"Message",overridesResolver:(t,e)=>e.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),b=d("div",{name:"MuiAlert",slot:"Action",overridesResolver:(t,e)=>e.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),j={success:s.jsx(D,{fontSize:"inherit"}),warning:s.jsx(J,{fontSize:"inherit"}),error:s.jsx(K,{fontSize:"inherit"}),info:s.jsx(X,{fontSize:"inherit"})},at=U.forwardRef(function(e,r){const o=ot({props:e,name:"MuiAlert"}),{action:l,children:u,className:$,closeText:v="Close",color:f,components:x={},componentsProps:h={},icon:C,iconMapping:z=j,onClose:A,role:P="alert",severity:p="success",slotProps:L={},slots:R={},variant:k="standard"}=o,w=F(o,tt),n=a({},o,{color:f,severity:p,variant:k,colorSeverity:f||p}),i=et(n),S={slots:a({closeButton:x.CloseButton,closeIcon:x.CloseIcon},R),slotProps:a({},h,L)},[O,B]=I("closeButton",{elementType:_,externalForwardedProps:S,ownerState:n}),[E,T]=I("closeIcon",{elementType:Q,externalForwardedProps:S,ownerState:n});return s.jsxs(st,a({role:P,elevation:0,ownerState:n,className:V(i.root,$),ref:r},w,{children:[C!==!1?s.jsx(rt,{ownerState:n,className:i.icon,children:C||z[p]||j[p]}):null,s.jsx(nt,{ownerState:n,className:i.message,children:u}),l!=null?s.jsx(b,{ownerState:n,className:i.action,children:l}):null,l==null&&A?s.jsx(b,{ownerState:n,className:i.action,children:s.jsx(O,a({size:"small","aria-label":v,title:v,color:"inherit",onClick:A},B,{children:s.jsx(E,a({fontSize:"small"},T))}))}):null]}))}),it=at;export{it as A};
