import{d as z,m as M,fh as R,e as H,aF as V,fs as A,aH as L,aG as F,r as a,a as $,b as P,ft as G,a2 as K,af as Y,Y as U,y as X,e_ as Z}from"./index-31656684.js";const C=e=>e?typeof e=="function"?e():e:null,q=e=>{const{componentCls:o,popoverColor:n,titleMinWidth:t,fontWeightStrong:r,innerPadding:l,boxShadowSecondary:i,colorTextHeading:c,borderRadiusLG:d,zIndexPopup:f,titleMarginBottom:p,colorBgElevated:v,popoverBg:u,titleBorderBottom:g,innerContentPadding:y,titlePadding:m}=e;return[{[o]:Object.assign(Object.assign({},H(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:f,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":v,width:"max-content",maxWidth:"100vw","&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${o}-content`]:{position:"relative"},[`${o}-inner`]:{backgroundColor:u,backgroundClip:"padding-box",borderRadius:d,boxShadow:i,padding:l},[`${o}-title`]:{minWidth:t,marginBottom:p,color:c,fontWeight:r,borderBottom:g,padding:m},[`${o}-inner-content`]:{color:n,padding:y}})},V(e,"var(--antd-arrow-background-color)"),{[`${o}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block",[`${o}-content`]:{display:"inline-block"}}}]},J=e=>{const{componentCls:o}=e;return{[o]:A.map(n=>{const t=e[`${n}6`];return{[`&${o}-${n}`]:{"--antd-arrow-background-color":t,[`${o}-inner`]:{backgroundColor:t},[`${o}-arrow`]:{background:"transparent"}}}})}},Q=e=>{const{lineWidth:o,controlHeight:n,fontHeight:t,padding:r,wireframe:l,zIndexPopupBase:i,borderRadiusLG:c,marginXS:d,lineType:f,colorSplit:p,paddingSM:v}=e,u=n-t,g=u/2,y=u/2-o,m=r;return Object.assign(Object.assign(Object.assign({titleMinWidth:177,zIndexPopup:i+30},L(e)),F({contentRadius:c,limitVerticalRadius:!0})),{innerPadding:l?0:12,titleMarginBottom:l?0:d,titlePadding:l?`${g}px ${m}px ${y}px`:0,titleBorderBottom:l?`${o}px ${f} ${p}`:"none",innerContentPadding:l?`${v}px ${m}px`:0})},S=z("Popover",e=>{const{colorBgElevated:o,colorText:n}=e,t=M(e,{popoverBg:o,popoverColor:n});return[q(t),J(t),R(t,"zoom-big")]},Q,{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]});var ee=globalThis&&globalThis.__rest||function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)o.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]]);return n};const te=(e,o,n)=>!o&&!n?null:a.createElement(a.Fragment,null,o&&a.createElement("div",{className:`${e}-title`},C(o)),a.createElement("div",{className:`${e}-inner-content`},C(n))),oe=e=>{const{hashId:o,prefixCls:n,className:t,style:r,placement:l="top",title:i,content:c,children:d}=e;return a.createElement("div",{className:P(o,n,`${n}-pure`,`${n}-placement-${l}`,t),style:r},a.createElement("div",{className:`${n}-arrow`}),a.createElement(G,Object.assign({},e,{className:o,prefixCls:n}),d||te(n,i,c)))},ne=e=>{const{prefixCls:o,className:n}=e,t=ee(e,["prefixCls","className"]),{getPrefixCls:r}=a.useContext($),l=r("popover",o),[i,c,d]=S(l);return i(a.createElement(oe,Object.assign({},t,{prefixCls:l,hashId:c,className:P(n,d)})))},re=ne;var ae=globalThis&&globalThis.__rest||function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)o.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]]);return n};const le=e=>{let{title:o,content:n,prefixCls:t}=e;return a.createElement(a.Fragment,null,o&&a.createElement("div",{className:`${t}-title`},C(o)),a.createElement("div",{className:`${t}-inner-content`},C(n)))},ie=a.forwardRef((e,o)=>{var n,t;const{prefixCls:r,title:l,content:i,overlayClassName:c,placement:d="top",trigger:f="hover",children:p,mouseEnterDelay:v=.1,mouseLeaveDelay:u=.1,onOpenChange:g,overlayStyle:y={}}=e,m=ae(e,["prefixCls","title","content","overlayClassName","placement","trigger","children","mouseEnterDelay","mouseLeaveDelay","onOpenChange","overlayStyle"]),{getPrefixCls:O}=a.useContext($),h=O("popover",r),[B,N,j]=S(h),T=O(),_=P(c,N,j),[k,I]=K(!1,{value:(n=e.open)!==null&&n!==void 0?n:e.visible,defaultValue:(t=e.defaultOpen)!==null&&t!==void 0?t:e.defaultVisible}),w=(s,b)=>{I(s,!0),g==null||g(s,b)},W=s=>{s.keyCode===Z.ESC&&w(!1,s)},D=s=>{w(s)};return B(a.createElement(Y,Object.assign({placement:d,trigger:f,mouseEnterDelay:v,mouseLeaveDelay:u,overlayStyle:y},m,{prefixCls:h,overlayClassName:_,ref:o,open:k,onOpenChange:D,overlay:l||i?a.createElement(le,{prefixCls:h,title:l,content:i}):null,transitionName:U(T,"zoom-big",m.transitionName),"data-popover-inject":!0}),X(p,{onKeyDown:s=>{var b,x;a.isValidElement(p)&&((x=p==null?void 0:(b=p.props).onKeyDown)===null||x===void 0||x.call(b,s)),W(s)}})))}),E=ie;E._InternalPanelDoNotUseOrYouWillBeFired=re;const ce=E;export{ce as P,oe as R,re as a,C as g};
