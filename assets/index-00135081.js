import{R as f,r,C as K,c as W,n as he,aL as Se,g as ye,m as xe,u as s,a as be,E as ve,gi as Ce,aR as Ee,_ as Z,ax as ze,fN as k,aT as Pe,D as Oe,al as Ne}from"./index-29a13d6d.js";const q=f.createContext({});q.Consumer;var ee=globalThis&&globalThis.__rest||function(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(t);a<n.length;a++)e.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(i[n[a]]=t[n[a]]);return i};const Be=t=>{var{prefixCls:e,className:i,avatar:n,title:a,description:c}=t,u=ee(t,["prefixCls","className","avatar","title","description"]);const{getPrefixCls:h}=r.useContext(K),$=h("list",e),x=W(`${$}-item-meta`,i),b=f.createElement("div",{className:`${$}-item-meta-content`},a&&f.createElement("h4",{className:`${$}-item-meta-title`},a),c&&f.createElement("div",{className:`${$}-item-meta-description`},c));return f.createElement("div",Object.assign({},u,{className:x}),n&&f.createElement("div",{className:`${$}-item-meta-avatar`},n),(a||c)&&b)},Ie=(t,e)=>{var{prefixCls:i,children:n,actions:a,extra:c,className:u,colStyle:h}=t,$=ee(t,["prefixCls","children","actions","extra","className","colStyle"]);const{grid:x,itemLayout:b}=r.useContext(q),{getPrefixCls:P}=r.useContext(K),l=()=>{let S;return r.Children.forEach(n,C=>{typeof C=="string"&&(S=!0)}),S&&r.Children.count(n)>1},E=()=>b==="vertical"?!!c:!l(),m=P("list",i),v=a&&a.length>0&&f.createElement("ul",{className:`${m}-item-action`,key:"actions"},a.map((S,C)=>f.createElement("li",{key:`${m}-item-action-${C}`},S,C!==a.length-1&&f.createElement("em",{className:`${m}-item-action-split`})))),z=x?"div":"li",O=f.createElement(z,Object.assign({},$,x?{}:{ref:e},{className:W(`${m}-item`,{[`${m}-item-no-flex`]:!E()},u)}),b==="vertical"&&c?[f.createElement("div",{className:`${m}-item-main`,key:"content"},n,v),f.createElement("div",{className:`${m}-item-extra`,key:"extra"},c)]:[n,v,he(c,{key:"extra"})]);return x?f.createElement(Se,{ref:e,flex:1,style:h},O):O},te=r.forwardRef(Ie);te.Meta=Be;const Le=te,Me=t=>{const{listBorderedCls:e,componentCls:i,paddingLG:n,margin:a,itemPaddingSM:c,itemPaddingLG:u,marginLG:h,borderRadiusLG:$}=t;return{[`${e}`]:{border:`${s(t.lineWidth)} ${t.lineType} ${t.colorBorder}`,borderRadius:$,[`${i}-header,${i}-footer,${i}-item`]:{paddingInline:n},[`${i}-pagination`]:{margin:`${s(a)} ${s(h)}`}},[`${e}${i}-sm`]:{[`${i}-item,${i}-header,${i}-footer`]:{padding:c}},[`${e}${i}-lg`]:{[`${i}-item,${i}-header,${i}-footer`]:{padding:u}}}},je=t=>{const{componentCls:e,screenSM:i,screenMD:n,marginLG:a,marginSM:c,margin:u}=t;return{[`@media screen and (max-width:${n}px)`]:{[`${e}`]:{[`${e}-item`]:{[`${e}-item-action`]:{marginInlineStart:a}}},[`${e}-vertical`]:{[`${e}-item`]:{[`${e}-item-extra`]:{marginInlineStart:a}}}},[`@media screen and (max-width: ${i}px)`]:{[`${e}`]:{[`${e}-item`]:{flexWrap:"wrap",[`${e}-action`]:{marginInlineStart:c}}},[`${e}-vertical`]:{[`${e}-item`]:{flexWrap:"wrap-reverse",[`${e}-item-main`]:{minWidth:t.contentWidth},[`${e}-item-extra`]:{margin:`auto auto ${s(u)}`}}}}}},we=t=>{const{componentCls:e,antCls:i,controlHeight:n,minHeight:a,paddingSM:c,marginLG:u,padding:h,itemPadding:$,colorPrimary:x,itemPaddingSM:b,itemPaddingLG:P,paddingXS:l,margin:E,colorText:m,colorTextDescription:v,motionDurationSlow:z,lineWidth:O,headerBg:S,footerBg:C,emptyTextPadding:I,metaMarginBottom:G,avatarMarginRight:L,titleMarginBottom:R,descriptionFontSize:A}=t,M={};return["start","center","end"].forEach(j=>{M[`&-align-${j}`]={textAlign:j}}),{[`${e}`]:Object.assign(Object.assign({},be(t)),{position:"relative","*":{outline:"none"},[`${e}-header`]:{background:S},[`${e}-footer`]:{background:C},[`${e}-header, ${e}-footer`]:{paddingBlock:c},[`${e}-pagination`]:Object.assign(Object.assign({marginBlockStart:u},M),{[`${i}-pagination-options`]:{textAlign:"start"}}),[`${e}-spin`]:{minHeight:a,textAlign:"center"},[`${e}-items`]:{margin:0,padding:0,listStyle:"none"},[`${e}-item`]:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:$,color:m,[`${e}-item-meta`]:{display:"flex",flex:1,alignItems:"flex-start",maxWidth:"100%",[`${e}-item-meta-avatar`]:{marginInlineEnd:L},[`${e}-item-meta-content`]:{flex:"1 0",width:0,color:m},[`${e}-item-meta-title`]:{margin:`0 0 ${s(t.marginXXS)} 0`,color:m,fontSize:t.fontSize,lineHeight:t.lineHeight,"> a":{color:m,transition:`all ${z}`,"&:hover":{color:x}}},[`${e}-item-meta-description`]:{color:v,fontSize:A,lineHeight:t.lineHeight}},[`${e}-item-action`]:{flex:"0 0 auto",marginInlineStart:t.marginXXL,padding:0,fontSize:0,listStyle:"none","& > li":{position:"relative",display:"inline-block",padding:`0 ${s(l)}`,color:v,fontSize:t.fontSize,lineHeight:t.lineHeight,textAlign:"center","&:first-child":{paddingInlineStart:0}},[`${e}-item-action-split`]:{position:"absolute",insetBlockStart:"50%",insetInlineEnd:0,width:O,height:t.calc(t.fontHeight).sub(t.calc(t.marginXXS).mul(2)).equal(),transform:"translateY(-50%)",backgroundColor:t.colorSplit}}},[`${e}-empty`]:{padding:`${s(h)} 0`,color:v,fontSize:t.fontSizeSM,textAlign:"center"},[`${e}-empty-text`]:{padding:I,color:t.colorTextDisabled,fontSize:t.fontSize,textAlign:"center"},[`${e}-item-no-flex`]:{display:"block"}}),[`${e}-grid ${i}-col > ${e}-item`]:{display:"block",maxWidth:"100%",marginBlockEnd:E,paddingBlock:0,borderBlockEnd:"none"},[`${e}-vertical ${e}-item`]:{alignItems:"initial",[`${e}-item-main`]:{display:"block",flex:1},[`${e}-item-extra`]:{marginInlineStart:u},[`${e}-item-meta`]:{marginBlockEnd:G,[`${e}-item-meta-title`]:{marginBlockStart:0,marginBlockEnd:R,color:m,fontSize:t.fontSizeLG,lineHeight:t.lineHeightLG}},[`${e}-item-action`]:{marginBlockStart:h,marginInlineStart:"auto","> li":{padding:`0 ${s(h)}`,"&:first-child":{paddingInlineStart:0}}}},[`${e}-split ${e}-item`]:{borderBlockEnd:`${s(t.lineWidth)} ${t.lineType} ${t.colorSplit}`,"&:last-child":{borderBlockEnd:"none"}},[`${e}-split ${e}-header`]:{borderBlockEnd:`${s(t.lineWidth)} ${t.lineType} ${t.colorSplit}`},[`${e}-split${e}-empty ${e}-footer`]:{borderTop:`${s(t.lineWidth)} ${t.lineType} ${t.colorSplit}`},[`${e}-loading ${e}-spin-nested-loading`]:{minHeight:n},[`${e}-split${e}-something-after-last-item ${i}-spin-container > ${e}-items > ${e}-item:last-child`]:{borderBlockEnd:`${s(t.lineWidth)} ${t.lineType} ${t.colorSplit}`},[`${e}-lg ${e}-item`]:{padding:P},[`${e}-sm ${e}-item`]:{padding:b},[`${e}:not(${e}-vertical)`]:{[`${e}-item-no-flex`]:{[`${e}-item-action`]:{float:"right"}}}}},Te=t=>({contentWidth:220,itemPadding:`${s(t.paddingContentVertical)} 0`,itemPaddingSM:`${s(t.paddingContentVerticalSM)} ${s(t.paddingContentHorizontal)}`,itemPaddingLG:`${s(t.paddingContentVerticalLG)} ${s(t.paddingContentHorizontalLG)}`,headerBg:"transparent",footerBg:"transparent",emptyTextPadding:t.padding,metaMarginBottom:t.padding,avatarMarginRight:t.padding,titleMarginBottom:t.paddingSM,descriptionFontSize:t.fontSize}),He=ye("List",t=>{const e=xe(t,{listBorderedCls:`${t.componentCls}-bordered`,minHeight:t.controlHeightLG});return[we(e),Me(e),je(e)]},Te);var We=globalThis&&globalThis.__rest||function(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(t);a<n.length;a++)e.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(i[n[a]]=t[n[a]]);return i};function Ge(t){var e,{pagination:i=!1,prefixCls:n,bordered:a=!1,split:c=!0,className:u,rootClassName:h,style:$,children:x,itemLayout:b,loadMore:P,grid:l,dataSource:E=[],size:m,header:v,footer:z,loading:O=!1,rowKey:S,renderItem:C,locale:I}=t,G=We(t,["pagination","prefixCls","bordered","split","className","rootClassName","style","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]);const L=i&&typeof i=="object"?i:{},[R,A]=r.useState(L.defaultCurrent||1),[M,j]=r.useState(L.defaultPageSize||10),{getPrefixCls:ie,renderEmpty:_,direction:ne,list:N}=r.useContext(K),ae={current:1,total:0},J=o=>(g,y)=>{var F;A(g),j(y),i&&i[o]&&((F=i==null?void 0:i[o])===null||F===void 0||F.call(i,g,y))},re=J("onChange"),oe=J("onShowSizeChange"),le=(o,g)=>{if(!C)return null;let y;return typeof S=="function"?y=S(o):S?y=o[S]:y=o.key,y||(y=`list-item-${g}`),r.createElement(r.Fragment,{key:y},C(o,g))},se=()=>!!(P||i||z),d=ie("list",n),[ce,de,me]=He(d);let B=O;typeof B=="boolean"&&(B={spinning:B});const D=B&&B.spinning,ge=ve(m);let w="";switch(ge){case"large":w="lg";break;case"small":w="sm";break}const pe=W(d,{[`${d}-vertical`]:b==="vertical",[`${d}-${w}`]:w,[`${d}-split`]:c,[`${d}-bordered`]:a,[`${d}-loading`]:D,[`${d}-grid`]:!!l,[`${d}-something-after-last-item`]:se(),[`${d}-rtl`]:ne==="rtl"},N==null?void 0:N.className,u,h,de,me),p=Ce(ae,{total:E.length,current:R,pageSize:M},i||{}),Y=Math.ceil(p.total/p.pageSize);p.current>Y&&(p.current=Y);const Q=i?r.createElement("div",{className:W(`${d}-pagination`,`${d}-pagination-align-${(e=p==null?void 0:p.align)!==null&&e!==void 0?e:"end"}`)},r.createElement(Ee,Object.assign({},p,{onChange:re,onShowSizeChange:oe}))):null;let X=Z(E);i&&E.length>(p.current-1)*p.pageSize&&(X=Z(E).splice((p.current-1)*p.pageSize,p.pageSize));const $e=Object.keys(l||{}).some(o=>["xs","sm","md","lg","xl","xxl"].includes(o)),U=ze($e),T=r.useMemo(()=>{for(let o=0;o<k.length;o+=1){const g=k[o];if(U[g])return g}},[U]),fe=r.useMemo(()=>{if(!l)return;const o=T&&l[T]?l[T]:l.column;if(o)return{width:`${100/o}%`,maxWidth:`${100/o}%`}},[l==null?void 0:l.column,T]);let V=D&&r.createElement("div",{style:{minHeight:53}});if(X.length>0){const o=X.map((g,y)=>le(g,y));V=l?r.createElement(Pe,{gutter:l.gutter},r.Children.map(o,g=>r.createElement("div",{key:g==null?void 0:g.key,style:fe},g))):r.createElement("ul",{className:`${d}-items`},o)}else!x&&!D&&(V=r.createElement("div",{className:`${d}-empty-text`},I&&I.emptyText||(_==null?void 0:_("List"))||r.createElement(Oe,{componentName:"List"})));const H=p.position||"bottom",ue=r.useMemo(()=>({grid:l,itemLayout:b}),[JSON.stringify(l),b]);return ce(r.createElement(q.Provider,{value:ue},r.createElement("div",Object.assign({style:Object.assign(Object.assign({},N==null?void 0:N.style),$),className:pe},G),(H==="top"||H==="both")&&Q,v&&r.createElement("div",{className:`${d}-header`},v),r.createElement(Ne,Object.assign({},B),V,x),z&&r.createElement("div",{className:`${d}-footer`},z),P||(H==="bottom"||H==="both")&&Q)))}Ge.Item=Le;export{Ge as L};
