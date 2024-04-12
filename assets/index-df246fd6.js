import{g as S,m as O,fS as w,a as E,ar as N,g2 as j,r as a,C as v,c as y,g3 as B,$ as T,E as k}from"./index-2a194481.js";const f=e=>e?typeof e=="function"?e():e:null,_=e=>{const{componentCls:o,popoverColor:r,minWidth:t,fontWeightStrong:n,popoverPadding:l,boxShadowSecondary:s,colorTextHeading:i,borderRadiusLG:c,zIndexPopup:u,marginXS:p,colorBgElevated:d,popoverBg:g}=e;return[{[o]:Object.assign(Object.assign({},E(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:u,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":d,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${o}-content`]:{position:"relative"},[`${o}-inner`]:{backgroundColor:g,backgroundClip:"padding-box",borderRadius:c,boxShadow:s,padding:l},[`${o}-title`]:{minWidth:t,marginBottom:p,color:i,fontWeight:n},[`${o}-inner-content`]:{color:r}})},N(e,{colorBg:"var(--antd-arrow-background-color)"}),{[`${o}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block",[`${o}-content`]:{display:"inline-block"}}}]},z=e=>{const{componentCls:o}=e;return{[o]:j.map(r=>{const t=e[`${r}6`];return{[`&${o}-${r}`]:{"--antd-arrow-background-color":t,[`${o}-inner`]:{backgroundColor:t},[`${o}-arrow`]:{background:"transparent"}}}})}},I=e=>{const{componentCls:o,lineWidth:r,lineType:t,colorSplit:n,paddingSM:l,controlHeight:s,fontSize:i,lineHeight:c,padding:u}=e,p=s-Math.round(i*c),d=p/2,g=p/2-r,m=u;return{[o]:{[`${o}-inner`]:{padding:0},[`${o}-title`]:{margin:0,padding:`${d}px ${m}px ${g}px`,borderBottom:`${r}px ${t} ${n}`},[`${o}-inner-content`]:{padding:`${l}px ${m}px`}}}},x=S("Popover",e=>{const{colorBgElevated:o,colorText:r,wireframe:t}=e,n=O(e,{popoverPadding:12,popoverBg:o,popoverColor:r});return[_(n),z(n),t&&I(n),w(n,"zoom-big")]},e=>({width:177,minWidth:177,zIndexPopup:e.zIndexPopupBase+30}),{deprecatedTokens:[["width","minWidth"]]});var W=globalThis&&globalThis.__rest||function(e,o){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)o.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(r[t[n]]=e[t[n]]);return r};const D=(e,o,r)=>{if(!(!o&&!r))return a.createElement(a.Fragment,null,o&&a.createElement("div",{className:`${e}-title`},f(o)),a.createElement("div",{className:`${e}-inner-content`},f(r)))},R=e=>{const{hashId:o,prefixCls:r,className:t,style:n,placement:l="top",title:s,content:i,children:c}=e;return a.createElement("div",{className:y(o,r,`${r}-pure`,`${r}-placement-${l}`,t),style:n},a.createElement("div",{className:`${r}-arrow`}),a.createElement(B,Object.assign({},e,{className:o,prefixCls:r}),c||D(r,s,i)))},H=e=>{const{prefixCls:o}=e,r=W(e,["prefixCls"]),{getPrefixCls:t}=a.useContext(v),n=t("popover",o),[l,s]=x(n);return l(a.createElement(R,Object.assign({},r,{prefixCls:n,hashId:s})))},L=H;var A=globalThis&&globalThis.__rest||function(e,o){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)o.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(r[t[n]]=e[t[n]]);return r};const F=e=>{let{title:o,content:r,prefixCls:t}=e;return a.createElement(a.Fragment,null,o&&a.createElement("div",{className:`${t}-title`},f(o)),a.createElement("div",{className:`${t}-inner-content`},f(r)))},b=a.forwardRef((e,o)=>{const{prefixCls:r,title:t,content:n,overlayClassName:l,placement:s="top",trigger:i="hover",mouseEnterDelay:c=.1,mouseLeaveDelay:u=.1,overlayStyle:p={}}=e,d=A(e,["prefixCls","title","content","overlayClassName","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),{getPrefixCls:g}=a.useContext(v),m=g("popover",r),[h,C]=x(m),P=g(),$=y(l,C);return h(a.createElement(T,Object.assign({placement:s,trigger:i,mouseEnterDelay:c,mouseLeaveDelay:u,overlayStyle:p},d,{prefixCls:m,overlayClassName:$,ref:o,overlay:t||n?a.createElement(F,{prefixCls:m,title:t,content:n}):null,transitionName:k(P,"zoom-big",d.transitionName),"data-popover-inject":!0})))});b._InternalPanelDoNotUseOrYouWillBeFired=L;const G=b;export{G as P,R,L as a,f as g};
