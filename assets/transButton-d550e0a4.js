import{r as c,e_ as y}from"./index-7ac8fc92.js";var g=globalThis&&globalThis.__rest||function(t,a){var o={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&a.indexOf(e)<0&&(o[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(t);n<e.length;n++)a.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(t,e[n])&&(o[e[n]]=t[e[n]]);return o};const O={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},u=c.forwardRef((t,a)=>{const o=l=>{const{keyCode:s}=l;s===y.ENTER&&l.preventDefault()},e=l=>{const{keyCode:s}=l,{onClick:i}=t;s===y.ENTER&&i&&i()},{style:n,noStyle:b,disabled:d,tabIndex:f=0}=t,p=g(t,["style","noStyle","disabled","tabIndex"]);let r={};return b||(r=Object.assign({},O)),d&&(r.pointerEvents="none"),r=Object.assign(Object.assign({},r),n),c.createElement("div",Object.assign({role:"button",tabIndex:f,ref:a},p,{onKeyDown:o,onKeyUp:e,style:r}))}),E=u;export{E as T};
