import{R as X,r as o,c as C,e as F,g as U,m as V,a as q,t as J,C as K,v as Q,fM as Y,fr as M}from"./index-bf2a13da.js";const Z=X.createContext({}),T=Z,k=e=>{let{children:t}=e;return t},ee=k;function E(e){return e!=null}const te=e=>{const{itemPrefixCls:t,component:l,span:n,className:s,style:r,labelStyle:i,contentStyle:m,bordered:p,label:d,content:c,colon:g}=e,u=l;return p?o.createElement(u,{className:C({[`${t}-item-label`]:E(d),[`${t}-item-content`]:E(c)},s),style:r,colSpan:n},E(d)&&o.createElement("span",{style:i},d),E(c)&&o.createElement("span",{style:m},c)):o.createElement(u,{className:C(`${t}-item`,s),style:r,colSpan:n},o.createElement("div",{className:`${t}-item-container`},(d||d===0)&&o.createElement("span",{className:C(`${t}-item-label`,{[`${t}-item-no-colon`]:!g}),style:i},d),(c||c===0)&&o.createElement("span",{className:C(`${t}-item-content`),style:m},c)))},z=te;function B(e,t,l){let{colon:n,prefixCls:s,bordered:r}=t,{component:i,type:m,showLabel:p,showContent:d,labelStyle:c,contentStyle:g}=l;return e.map((u,f)=>{let{label:y,children:O,prefixCls:$=s,className:x,style:S,labelStyle:b,contentStyle:a,span:v=1,key:h}=u;return typeof i=="string"?o.createElement(z,{key:`${m}-${h||f}`,className:x,style:S,labelStyle:Object.assign(Object.assign({},c),b),contentStyle:Object.assign(Object.assign({},g),a),span:v,colon:n,component:i,itemPrefixCls:$,bordered:r,label:p?y:null,content:d?O:null}):[o.createElement(z,{key:`label-${h||f}`,className:x,style:Object.assign(Object.assign(Object.assign({},c),S),b),span:1,colon:n,component:i[0],itemPrefixCls:$,bordered:r,label:y}),o.createElement(z,{key:`content-${h||f}`,className:x,style:Object.assign(Object.assign(Object.assign({},g),S),a),span:v*2-1,component:i[1],itemPrefixCls:$,bordered:r,content:O})]})}const ne=e=>{const t=o.useContext(T),{prefixCls:l,vertical:n,row:s,index:r,bordered:i}=e;return n?o.createElement(o.Fragment,null,o.createElement("tr",{key:`label-${r}`,className:`${l}-row`},B(s,e,Object.assign({component:"th",type:"label",showLabel:!0},t))),o.createElement("tr",{key:`content-${r}`,className:`${l}-row`},B(s,e,Object.assign({component:"td",type:"content",showContent:!0},t)))):o.createElement("tr",{key:r,className:`${l}-row`},B(s,e,Object.assign({component:i?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t)))},le=ne;function P(e,t,l){let n=e;return(l===void 0||l>t)&&(n=Object.assign(Object.assign({},e),{span:t})),n}const oe=e=>F(e).map(t=>Object.assign({},t==null?void 0:t.props));function R(e,t){const l=[];let n=[],s=t;return e.filter(r=>r).forEach((r,i)=>{const m=r==null?void 0:r.span,p=m||1;if(i===e.length-1){n.push(P(r,s,m)),l.push(n);return}p<s?(s-=p,n.push(r)):(n.push(P(r,s,p)),l.push(n),s=t,n=[])}),l}const se=(e,t,l)=>o.useMemo(()=>Array.isArray(t)?R(t,e):R(oe(l),e),[t,l,e]),re=se,ie=e=>{const{componentCls:t,labelBg:l}=e;return{[`&${t}-bordered`]:{[`> ${t}-view`]:{border:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,"> table":{tableLayout:"auto",borderCollapse:"collapse"},[`${t}-row`]:{borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBottom:"none"},[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${e.padding}px ${e.paddingLG}px`,borderInlineEnd:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderInlineEnd:"none"}},[`> ${t}-item-label`]:{color:e.colorTextSecondary,backgroundColor:l,"&::after":{display:"none"}}}},[`&${t}-middle`]:{[`${t}-row`]:{[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${e.paddingSM}px ${e.paddingLG}px`}}},[`&${t}-small`]:{[`${t}-row`]:{[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${e.paddingXS}px ${e.padding}px`}}}}}},ae=e=>{const{componentCls:t,extraColor:l,itemPaddingBottom:n,colonMarginRight:s,colonMarginLeft:r,titleMarginBottom:i}=e;return{[t]:Object.assign(Object.assign(Object.assign({},q(e)),ie(e)),{"&-rtl":{direction:"rtl"},[`${t}-header`]:{display:"flex",alignItems:"center",marginBottom:i},[`${t}-title`]:Object.assign(Object.assign({},J),{flex:"auto",color:e.colorText,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}),[`${t}-extra`]:{marginInlineStart:"auto",color:l,fontSize:e.fontSize},[`${t}-view`]:{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed"}},[`${t}-row`]:{"> th, > td":{paddingBottom:n},"&:last-child":{borderBottom:"none"}},[`${t}-item-label`]:{color:e.colorTextTertiary,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:`${r}px ${s}px`},[`&${t}-item-no-colon::after`]:{content:'""'}},[`${t}-item-no-label`]:{"&::after":{margin:0,content:'""'}},[`${t}-item-content`]:{display:"table-cell",flex:1,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"},[`${t}-item`]:{paddingBottom:0,verticalAlign:"top","&-container":{display:"flex",[`${t}-item-label`]:{display:"inline-flex",alignItems:"baseline"},[`${t}-item-content`]:{display:"inline-flex",alignItems:"baseline"}}},"&-middle":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingSM}}},"&-small":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingXS}}}})}},ce=U("Descriptions",e=>{const t=V(e,{});return[ae(t)]},e=>({labelBg:e.colorFillAlter,titleMarginBottom:e.fontSizeSM*e.lineHeightSM,itemPaddingBottom:e.padding,colonMarginRight:e.marginXS,colonMarginLeft:e.marginXXS/2,extraColor:e.colorText}));var de=globalThis&&globalThis.__rest||function(e,t){var l={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(l[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(l[n[s]]=e[n[s]]);return l};const D={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function me(e,t){if(typeof e=="number")return e;if(typeof e=="object")for(let l=0;l<M.length;l++){const n=M[l];if(t[n]&&e[n]!==void 0)return e[n]||D[n]}return 3}const A=e=>{const{prefixCls:t,title:l,extra:n,column:s=D,colon:r=!0,bordered:i,layout:m,children:p,className:d,rootClassName:c,style:g,size:u,labelStyle:f,contentStyle:y,items:O}=e,$=de(e,["prefixCls","title","extra","column","colon","bordered","layout","children","className","rootClassName","style","size","labelStyle","contentStyle","items"]),{getPrefixCls:x,direction:S,descriptions:b}=o.useContext(K),a=x("descriptions",t),[v,h]=o.useState({}),H=me(s,v),j=Q(u),I=re(H,O,p),[W,_]=ce(a),L=Y();o.useEffect(()=>{const N=L.subscribe(w=>{typeof s=="object"&&h(w)});return()=>{L.unsubscribe(N)}},[]);const G=o.useMemo(()=>({labelStyle:f,contentStyle:y}),[f,y]);return W(o.createElement(T.Provider,{value:G},o.createElement("div",Object.assign({className:C(a,b==null?void 0:b.className,{[`${a}-${j}`]:j&&j!=="default",[`${a}-bordered`]:!!i,[`${a}-rtl`]:S==="rtl"},d,c,_),style:Object.assign(Object.assign({},b==null?void 0:b.style),g)},$),(l||n)&&o.createElement("div",{className:`${a}-header`},l&&o.createElement("div",{className:`${a}-title`},l),n&&o.createElement("div",{className:`${a}-extra`},n)),o.createElement("div",{className:`${a}-view`},o.createElement("table",null,o.createElement("tbody",null,I.map((N,w)=>o.createElement(le,{key:w,index:w,colon:r,prefixCls:a,vertical:m==="vertical",bordered:i,row:N}))))))))};A.Item=ee;const be=A;export{be as D};
