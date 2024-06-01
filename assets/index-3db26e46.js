import{r as n,a as P,b as m,d as me,m as pe,e as $e,f as o,eY as z,t as W,Q as he,v as ye}from"./index-38408b6c.js";import{S as ue}from"./Skeleton-5a34f23c.js";import{T as fe}from"./index-e6aa0438.js";var Se=globalThis&&globalThis.__rest||function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)i.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t};const ve=e=>{var{prefixCls:i,className:t,hoverable:a=!0}=e,r=Se(e,["prefixCls","className","hoverable"]);const{getPrefixCls:d}=n.useContext(P),g=d("card",i),$=m(`${g}-grid`,t,{[`${g}-grid-hoverable`]:a});return n.createElement("div",Object.assign({},r,{className:$}))},D=ve,Ce=e=>{const{antCls:i,componentCls:t,headerHeight:a,cardPaddingBase:r,tabsMarginBottom:d}=e;return Object.assign(Object.assign({display:"flex",justifyContent:"center",flexDirection:"column",minHeight:a,marginBottom:-1,padding:`0 ${o(r)}`,color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.headerFontSize,background:e.headerBg,borderBottom:`${o(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`,borderRadius:`${o(e.borderRadiusLG)} ${o(e.borderRadiusLG)} 0 0`},z()),{"&-wrapper":{width:"100%",display:"flex",alignItems:"center"},"&-title":Object.assign(Object.assign({display:"inline-block",flex:1},W),{[`
          > ${t}-typography,
          > ${t}-typography-edit-content
        `]:{insetInlineStart:0,marginTop:0,marginBottom:0}}),[`${i}-tabs-top`]:{clear:"both",marginBottom:d,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,"&-bar":{borderBottom:`${o(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`}}})},xe=e=>{const{cardPaddingBase:i,colorBorderSecondary:t,cardShadow:a,lineWidth:r}=e;return{width:"33.33%",padding:i,border:0,borderRadius:0,boxShadow:`
      ${o(r)} 0 0 0 ${t},
      0 ${o(r)} 0 0 ${t},
      ${o(r)} ${o(r)} 0 0 ${t},
      ${o(r)} 0 0 0 ${t} inset,
      0 ${o(r)} 0 0 ${t} inset;
    `,transition:`all ${e.motionDurationMid}`,"&-hoverable:hover":{position:"relative",zIndex:1,boxShadow:a}}},Oe=e=>{const{componentCls:i,iconCls:t,actionsLiMargin:a,cardActionsIconSize:r,colorBorderSecondary:d,actionsBg:g}=e;return Object.assign(Object.assign({margin:0,padding:0,listStyle:"none",background:g,borderTop:`${o(e.lineWidth)} ${e.lineType} ${d}`,display:"flex",borderRadius:`0 0 ${o(e.borderRadiusLG)} ${o(e.borderRadiusLG)}`},z()),{"& > li":{margin:a,color:e.colorTextDescription,textAlign:"center","> span":{position:"relative",display:"block",minWidth:e.calc(e.cardActionsIconSize).mul(2).equal(),fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer","&:hover":{color:e.colorPrimary,transition:`color ${e.motionDurationMid}`},[`a:not(${i}-btn), > ${t}`]:{display:"inline-block",width:"100%",color:e.colorTextDescription,lineHeight:o(e.fontHeight),transition:`color ${e.motionDurationMid}`,"&:hover":{color:e.colorPrimary}},[`> ${t}`]:{fontSize:r,lineHeight:o(e.calc(r).mul(e.lineHeight).equal())}},"&:not(:last-child)":{borderInlineEnd:`${o(e.lineWidth)} ${e.lineType} ${d}`}}})},je=e=>Object.assign(Object.assign({margin:`${o(e.calc(e.marginXXS).mul(-1).equal())} 0`,display:"flex"},z()),{"&-avatar":{paddingInlineEnd:e.padding},"&-detail":{overflow:"hidden",flex:1,"> div:not(:last-child)":{marginBottom:e.marginXS}},"&-title":Object.assign({color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG},W),"&-description":{color:e.colorTextDescription}}),ze=e=>{const{componentCls:i,cardPaddingBase:t,colorFillAlter:a}=e;return{[`${i}-head`]:{padding:`0 ${o(t)}`,background:a,"&-title":{fontSize:e.fontSize}},[`${i}-body`]:{padding:`${o(e.padding)} ${o(t)}`}}},Te=e=>{const{componentCls:i}=e;return{overflow:"hidden",[`${i}-body`]:{userSelect:"none"}}},we=e=>{const{antCls:i,componentCls:t,cardShadow:a,cardHeadPadding:r,colorBorderSecondary:d,boxShadowTertiary:g,cardPaddingBase:$,extraColor:p}=e;return{[t]:Object.assign(Object.assign({},$e(e)),{position:"relative",background:e.colorBgContainer,borderRadius:e.borderRadiusLG,[`&:not(${t}-bordered)`]:{boxShadow:g},[`${t}-head`]:Ce(e),[`${t}-extra`]:{marginInlineStart:"auto",color:p,fontWeight:"normal",fontSize:e.fontSize},[`${t}-body`]:Object.assign({padding:$,borderRadius:`0 0 ${o(e.borderRadiusLG)} ${o(e.borderRadiusLG)}`},z()),[`${t}-grid`]:xe(e),[`${t}-cover`]:{"> *":{display:"block",width:"100%"},[`img, img + ${i}-image-mask`]:{borderRadius:`${o(e.borderRadiusLG)} ${o(e.borderRadiusLG)} 0 0`}},[`${t}-actions`]:Oe(e),[`${t}-meta`]:je(e)}),[`${t}-bordered`]:{border:`${o(e.lineWidth)} ${e.lineType} ${d}`,[`${t}-cover`]:{marginTop:-1,marginInlineStart:-1,marginInlineEnd:-1}},[`${t}-hoverable`]:{cursor:"pointer",transition:`box-shadow ${e.motionDurationMid}, border-color ${e.motionDurationMid}`,"&:hover":{borderColor:"transparent",boxShadow:a}},[`${t}-contain-grid`]:{borderRadius:`${o(e.borderRadiusLG)} ${o(e.borderRadiusLG)} 0 0 `,[`${t}-body`]:{display:"flex",flexWrap:"wrap"},[`&:not(${t}-loading) ${t}-body`]:{marginBlockStart:e.calc(e.lineWidth).mul(-1).equal(),marginInlineStart:e.calc(e.lineWidth).mul(-1).equal(),padding:0}},[`${t}-contain-tabs`]:{[`> ${t}-head`]:{minHeight:0,[`${t}-head-title, ${t}-extra`]:{paddingTop:r}}},[`${t}-type-inner`]:ze(e),[`${t}-loading`]:Te(e),[`${t}-rtl`]:{direction:"rtl"}}},Ee=e=>{const{componentCls:i,cardPaddingSM:t,headerHeightSM:a,headerFontSizeSM:r}=e;return{[`${i}-small`]:{[`> ${i}-head`]:{minHeight:a,padding:`0 ${o(t)}`,fontSize:r,[`> ${i}-head-wrapper`]:{[`> ${i}-extra`]:{fontSize:e.fontSize}}},[`> ${i}-body`]:{padding:t}},[`${i}-small${i}-contain-tabs`]:{[`> ${i}-head`]:{[`${i}-head-title, ${i}-extra`]:{paddingTop:0,display:"flex",alignItems:"center"}}}}},Be=e=>({headerBg:"transparent",headerFontSize:e.fontSizeLG,headerFontSizeSM:e.fontSize,headerHeight:e.fontSizeLG*e.lineHeightLG+e.padding*2,headerHeightSM:e.fontSize*e.lineHeight+e.paddingXS*2,actionsBg:e.colorBgContainer,actionsLiMargin:`${e.paddingSM}px 0`,tabsMarginBottom:-e.padding-e.lineWidth,extraColor:e.colorText}),Pe=me("Card",e=>{const i=pe(e,{cardShadow:e.boxShadowCard,cardHeadPadding:e.padding,cardPaddingBase:e.paddingLG,cardActionsIconSize:e.fontSize,cardPaddingSM:12});return[we(i),Ee(i)]},Be);var R=globalThis&&globalThis.__rest||function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)i.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t};const Ne=e=>{const{actionClasses:i,actions:t=[],actionStyle:a}=e;return n.createElement("ul",{className:i,style:a},t.map((r,d)=>{const g=`action-${d}`;return n.createElement("li",{style:{width:`${100/t.length}%`},key:g},n.createElement("span",null,r))}))},Ge=n.forwardRef((e,i)=>{const{prefixCls:t,className:a,rootClassName:r,style:d,extra:g,headStyle:$={},bodyStyle:p={},title:u,loading:S,bordered:v=!0,size:C,type:x,cover:G,actions:T,tabList:O,children:j,activeTabKey:H,defaultActiveTabKey:_,tabBarExtraContent:A,hoverable:K,tabProps:F={},classNames:w,styles:E}=e,q=R(e,["prefixCls","className","rootClassName","style","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps","classNames","styles"]),{getPrefixCls:X,direction:V,card:b}=n.useContext(P),Q=c=>{var s;(s=e.onTabChange)===null||s===void 0||s.call(e,c)},h=c=>{var s;return m((s=b==null?void 0:b.classNames)===null||s===void 0?void 0:s[c],w==null?void 0:w[c])},y=c=>{var s;return Object.assign(Object.assign({},(s=b==null?void 0:b.styles)===null||s===void 0?void 0:s[c]),E==null?void 0:E[c])},Y=n.useMemo(()=>{let c=!1;return n.Children.forEach(j,s=>{s&&s.type&&s.type===D&&(c=!0)}),c},[j]),l=X("card",t),[J,U,Z]=Pe(l),k=n.createElement(ue,{loading:!0,active:!0,paragraph:{rows:4},title:!1},j),M=H!==void 0,ee=Object.assign(Object.assign({},F),{[M?"activeKey":"defaultActiveKey"]:M?H:_,tabBarExtraContent:A});let L;const f=he(C),te=!f||f==="default"?"large":f,I=O?n.createElement(fe,Object.assign({size:te},ee,{className:`${l}-head-tabs`,onChange:Q,items:O.map(c=>{var{tab:s}=c,B=R(c,["tab"]);return Object.assign({label:s},B)})})):null;if(u||g||I){const c=m(`${l}-head`,h("header")),s=m(`${l}-head-title`,h("title")),B=m(`${l}-extra`,h("extra")),be=Object.assign(Object.assign({},$),y("header"));L=n.createElement("div",{className:c,style:be},n.createElement("div",{className:`${l}-head-wrapper`},u&&n.createElement("div",{className:s,style:y("title")},u),g&&n.createElement("div",{className:B,style:y("extra")},g)),I)}const ae=m(`${l}-cover`,h("cover")),re=G?n.createElement("div",{className:ae,style:y("cover")},G):null,ie=m(`${l}-body`,h("body")),oe=Object.assign(Object.assign({},p),y("body")),ne=n.createElement("div",{className:ie,style:oe},S?k:j),se=m(`${l}-actions`,h("actions")),le=T&&T.length?n.createElement(Ne,{actionClasses:se,actionStyle:y("actions"),actions:T}):null,de=ye(q,["onTabChange"]),ce=m(l,b==null?void 0:b.className,{[`${l}-loading`]:S,[`${l}-bordered`]:v,[`${l}-hoverable`]:K,[`${l}-contain-grid`]:Y,[`${l}-contain-tabs`]:O&&O.length,[`${l}-${f}`]:f,[`${l}-type-${x}`]:!!x,[`${l}-rtl`]:V==="rtl"},a,r,U,Z),ge=Object.assign(Object.assign({},b==null?void 0:b.style),d);return J(n.createElement("div",Object.assign({ref:i},de,{className:ce,style:ge}),L,re,ne,le))}),He=Ge;var Me=globalThis&&globalThis.__rest||function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)i.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t};const Le=e=>{const{prefixCls:i,className:t,avatar:a,title:r,description:d}=e,g=Me(e,["prefixCls","className","avatar","title","description"]),{getPrefixCls:$}=n.useContext(P),p=$("card",i),u=m(`${p}-meta`,t),S=a?n.createElement("div",{className:`${p}-meta-avatar`},a):null,v=r?n.createElement("div",{className:`${p}-meta-title`},r):null,C=d?n.createElement("div",{className:`${p}-meta-description`},d):null,x=v||C?n.createElement("div",{className:`${p}-meta-detail`},v,C):null;return n.createElement("div",Object.assign({},g,{className:u}),S,x)},Ie=Le,N=He;N.Grid=D;N.Meta=Ie;const _e=N;export{_e as C};
