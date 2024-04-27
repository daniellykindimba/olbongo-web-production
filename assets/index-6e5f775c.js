import{g as V,r as l,C as h,U as W,ay as L,c as E,ao as A,gk as F,at as S,T as H,o as R}from"./index-3b25761c.js";import{g as T,a as X,P as D}from"./index-3c7b2ccc.js";import{A as U}from"./ActionButton-4004263b.js";const q=e=>{const{componentCls:n,iconCls:a,antCls:t,zIndexPopup:o,colorText:p,colorWarning:f,marginXXS:c,marginXS:i,fontSize:u,fontWeightStrong:C,colorTextHeading:g}=e;return{[n]:{zIndex:o,[`&${t}-popover`]:{fontSize:u},[`${n}-message`]:{marginBottom:i,display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${n}-message-icon ${a}`]:{color:f,fontSize:u,lineHeight:1,marginInlineEnd:i},[`${n}-title`]:{fontWeight:C,color:g,"&:only-child":{fontWeight:"normal"}},[`${n}-description`]:{marginTop:c,color:p}},[`${n}-buttons`]:{textAlign:"end",whiteSpace:"nowrap",button:{marginInlineStart:i}}}}},M=e=>{const{zIndexPopupBase:n}=e;return{zIndexPopup:n+60}},N=V("Popconfirm",e=>q(e),M,{resetStyle:!1});var Y=globalThis&&globalThis.__rest||function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const $=e=>{const{prefixCls:n,okButtonProps:a,cancelButtonProps:t,title:o,description:p,cancelText:f,okText:c,okType:i="primary",icon:u=l.createElement(S,null),showCancel:C=!0,close:g,onConfirm:v,onCancel:y,onPopupClick:P}=e,{getPrefixCls:b}=l.useContext(h),[m]=W("Popconfirm",L.Popconfirm),d=T(o),x=T(p);return l.createElement("div",{className:`${n}-inner-content`,onClick:P},l.createElement("div",{className:`${n}-message`},u&&l.createElement("span",{className:`${n}-message-icon`},u),l.createElement("div",{className:`${n}-message-text`},d&&l.createElement("div",{className:E(`${n}-title`)},d),x&&l.createElement("div",{className:`${n}-description`},x))),l.createElement("div",{className:`${n}-buttons`},C&&l.createElement(A,Object.assign({onClick:y,size:"small"},t),f||(m==null?void 0:m.cancelText)),l.createElement(U,{buttonProps:Object.assign(Object.assign({size:"small"},F(i)),a),actionFn:v,close:g,prefixCls:b("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},c||(m==null?void 0:m.okText))))},G=e=>{const{prefixCls:n,placement:a,className:t,style:o}=e,p=Y(e,["prefixCls","placement","className","style"]),{getPrefixCls:f}=l.useContext(h),c=f("popconfirm",n),[i]=N(c);return i(l.createElement(X,{placement:a,className:E(c,t),style:o,content:l.createElement($,Object.assign({prefixCls:c},p))}))},J=G;var K=globalThis&&globalThis.__rest||function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const j=l.forwardRef((e,n)=>{var a,t;const{prefixCls:o,placement:p="top",trigger:f="click",okType:c="primary",icon:i=l.createElement(S,null),children:u,overlayClassName:C,onOpenChange:g,onVisibleChange:v}=e,y=K(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),{getPrefixCls:P}=l.useContext(h),[b,m]=H(!1,{value:(a=e.open)!==null&&a!==void 0?a:e.visible,defaultValue:(t=e.defaultOpen)!==null&&t!==void 0?t:e.defaultVisible}),d=(r,s)=>{m(r,!0),v==null||v(r),g==null||g(r,s)},x=r=>{d(!1,r)},k=r=>{var s;return(s=e.onConfirm)===null||s===void 0?void 0:s.call(globalThis,r)},w=r=>{var s;d(!1,r),(s=e.onCancel)===null||s===void 0||s.call(globalThis,r)},_=(r,s)=>{const{disabled:B=!1}=e;B||d(r,s)},O=P("popconfirm",o),I=E(O,C),[z]=N(O);return z(l.createElement(D,Object.assign({},R(y,["title"]),{trigger:f,placement:p,onOpenChange:_,open:b,ref:n,overlayClassName:I,content:l.createElement($,Object.assign({okType:c,icon:i},e,{prefixCls:O,close:x,onConfirm:k,onCancel:w})),"data-popover-inject":!0}),u))});j._InternalPanelDoNotUseOrYouWillBeFired=J;const te=j;export{te as P};
