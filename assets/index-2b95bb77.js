import{R as F,r as s,g5 as T,i as G,c as v,g as X,m as U,a as V,t as q,u as p,C as J,aw as K,E as Q}from"./index-60f2319e.js";const Y={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1},Z=Y,k=F.createContext({}),z=k;var ee=globalThis&&globalThis.__rest||function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(o[n[l]]=e[n[l]]);return o};const te=e=>G(e).map(t=>Object.assign(Object.assign({},t==null?void 0:t.props),{key:t.key}));function ne(e,t,o){const n=s.useMemo(()=>t||te(o),[t,o]);return s.useMemo(()=>n.map(a=>{var{span:r}=a,d=ee(a,["span"]);return Object.assign(Object.assign({},d),{span:typeof r=="number"?r:T(e,r)})}),[n,e])}function B(e,t,o){let n=e,l=!1;return(o===void 0||o>t)&&(n=Object.assign(Object.assign({},e),{span:t}),l=o!==void 0),[n,l]}function le(e,t){const o=[];let n=[],l=t,a=!1;return e.filter(r=>r).forEach((r,d)=>{const y=r==null?void 0:r.span,c=y||1;if(d===e.length-1){const[i,b]=B(r,l,y);a=a||b,n.push(i),o.push(n);return}if(c<l)l-=c,n.push(r);else{const[i,b]=B(r,l,c);a=a||b,n.push(i),o.push(n),l=t,n=[]}}),[o,a]}const oe=(e,t)=>{const[o,n]=s.useMemo(()=>le(t,e),[t,e]);return o},se=oe,re=e=>{let{children:t}=e;return t},ae=re;function L(e){return e!=null}const ie=e=>{const{itemPrefixCls:t,component:o,span:n,className:l,style:a,labelStyle:r,contentStyle:d,bordered:y,label:c,content:i,colon:b,type:f}=e,g=o;return y?s.createElement(g,{className:v({[`${t}-item-label`]:f==="label",[`${t}-item-content`]:f==="content"},l),style:a,colSpan:n},L(c)&&s.createElement("span",{style:r},c),L(i)&&s.createElement("span",{style:d},i)):s.createElement(g,{className:v(`${t}-item`,l),style:a,colSpan:n},s.createElement("div",{className:`${t}-item-container`},(c||c===0)&&s.createElement("span",{className:v(`${t}-item-label`,{[`${t}-item-no-colon`]:!b}),style:r},c),(i||i===0)&&s.createElement("span",{className:v(`${t}-item-content`),style:d},i)))},N=ie;function M(e,t,o){let{colon:n,prefixCls:l,bordered:a}=t,{component:r,type:d,showLabel:y,showContent:c,labelStyle:i,contentStyle:b}=o;return e.map((f,g)=>{let{label:x,children:w,prefixCls:h=l,className:S,style:C,labelStyle:u,contentStyle:m,span:$=1,key:O}=f;return typeof r=="string"?s.createElement(N,{key:`${d}-${O||g}`,className:S,style:C,labelStyle:Object.assign(Object.assign({},i),u),contentStyle:Object.assign(Object.assign({},b),m),span:$,colon:n,component:r,itemPrefixCls:h,bordered:a,label:y?x:null,content:c?w:null,type:d}):[s.createElement(N,{key:`label-${O||g}`,className:S,style:Object.assign(Object.assign(Object.assign({},i),C),u),span:1,colon:n,component:r[0],itemPrefixCls:h,bordered:a,label:x,type:"label"}),s.createElement(N,{key:`content-${O||g}`,className:S,style:Object.assign(Object.assign(Object.assign({},b),C),m),span:$*2-1,component:r[1],itemPrefixCls:h,bordered:a,content:w,type:"content"})]})}const ce=e=>{const t=s.useContext(z),{prefixCls:o,vertical:n,row:l,index:a,bordered:r}=e;return n?s.createElement(s.Fragment,null,s.createElement("tr",{key:`label-${a}`,className:`${o}-row`},M(l,e,Object.assign({component:"th",type:"label",showLabel:!0},t))),s.createElement("tr",{key:`content-${a}`,className:`${o}-row`},M(l,e,Object.assign({component:"td",type:"content",showContent:!0},t)))):s.createElement("tr",{key:a,className:`${o}-row`},M(l,e,Object.assign({component:r?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t)))},me=ce,de=e=>{const{componentCls:t,labelBg:o}=e;return{[`&${t}-bordered`]:{[`> ${t}-view`]:{border:`${p(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"> table":{tableLayout:"auto"},[`${t}-row`]:{borderBottom:`${p(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBottom:"none"},[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${p(e.padding)} ${p(e.paddingLG)}`,borderInlineEnd:`${p(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderInlineEnd:"none"}},[`> ${t}-item-label`]:{color:e.colorTextSecondary,backgroundColor:o,"&::after":{display:"none"}}}},[`&${t}-middle`]:{[`${t}-row`]:{[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${p(e.paddingSM)} ${p(e.paddingLG)}`}}},[`&${t}-small`]:{[`${t}-row`]:{[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${p(e.paddingXS)} ${p(e.padding)}`}}}}}},pe=e=>{const{componentCls:t,extraColor:o,itemPaddingBottom:n,colonMarginRight:l,colonMarginLeft:a,titleMarginBottom:r}=e;return{[t]:Object.assign(Object.assign(Object.assign({},V(e)),de(e)),{"&-rtl":{direction:"rtl"},[`${t}-header`]:{display:"flex",alignItems:"center",marginBottom:r},[`${t}-title`]:Object.assign(Object.assign({},q),{flex:"auto",color:e.titleColor,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}),[`${t}-extra`]:{marginInlineStart:"auto",color:o,fontSize:e.fontSize},[`${t}-view`]:{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed",borderCollapse:"collapse"}},[`${t}-row`]:{"> th, > td":{paddingBottom:n},"&:last-child":{borderBottom:"none"}},[`${t}-item-label`]:{color:e.colorTextTertiary,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:`${p(a)} ${p(l)}`},[`&${t}-item-no-colon::after`]:{content:'""'}},[`${t}-item-no-label`]:{"&::after":{margin:0,content:'""'}},[`${t}-item-content`]:{display:"table-cell",flex:1,color:e.contentColor,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"},[`${t}-item`]:{paddingBottom:0,verticalAlign:"top","&-container":{display:"flex",[`${t}-item-label`]:{display:"inline-flex",alignItems:"baseline"},[`${t}-item-content`]:{display:"inline-flex",alignItems:"baseline"}}},"&-middle":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingSM}}},"&-small":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingXS}}}})}},be=e=>({labelBg:e.colorFillAlter,titleColor:e.colorText,titleMarginBottom:e.fontSizeSM*e.lineHeightSM,itemPaddingBottom:e.padding,colonMarginRight:e.marginXS,colonMarginLeft:e.marginXXS/2,contentColor:e.colorText,extraColor:e.colorText}),ge=X("Descriptions",e=>{const t=U(e,{});return pe(t)},be);var ue=globalThis&&globalThis.__rest||function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(o[n[l]]=e[n[l]]);return o};const I=e=>{const{prefixCls:t,title:o,extra:n,column:l,colon:a=!0,bordered:r,layout:d,children:y,className:c,rootClassName:i,style:b,size:f,labelStyle:g,contentStyle:x,items:w}=e,h=ue(e,["prefixCls","title","extra","column","colon","bordered","layout","children","className","rootClassName","style","size","labelStyle","contentStyle","items"]),{getPrefixCls:S,direction:C,descriptions:u}=s.useContext(J),m=S("descriptions",t),$=K(),O=s.useMemo(()=>{var j;return typeof l=="number"?l:(j=T($,Object.assign(Object.assign({},Z),l)))!==null&&j!==void 0?j:3},[$,l]),R=ne($,w,y),E=Q(f),_=se(O,R),[D,A,H]=ge(m),W=s.useMemo(()=>({labelStyle:g,contentStyle:x}),[g,x]);return D(s.createElement(z.Provider,{value:W},s.createElement("div",Object.assign({className:v(m,u==null?void 0:u.className,{[`${m}-${E}`]:E&&E!=="default",[`${m}-bordered`]:!!r,[`${m}-rtl`]:C==="rtl"},c,i,A,H),style:Object.assign(Object.assign({},u==null?void 0:u.style),b)},h),(o||n)&&s.createElement("div",{className:`${m}-header`},o&&s.createElement("div",{className:`${m}-title`},o),n&&s.createElement("div",{className:`${m}-extra`},n)),s.createElement("div",{className:`${m}-view`},s.createElement("table",null,s.createElement("tbody",null,_.map((j,P)=>s.createElement(me,{key:P,index:P,colon:a,prefixCls:m,vertical:d==="vertical",bordered:r,row:j}))))))))};I.Item=ae;const fe=I;export{fe as D};
