import{r as c,cL as P,ci as T,b$ as j,b6 as F,cF as m,cI as L,cM as p}from"./index-a5fcf18b.js";var O=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],v=c.forwardRef(function(e,f){var d,C=e.prefixCls,n=C===void 0?"rc-switch":C,g=e.className,b=e.checked,w=e.defaultChecked,s=e.disabled,y=e.loadingIcon,N=e.checkedChildren,x=e.unCheckedChildren,o=e.onClick,i=e.onChange,r=e.onKeyDown,I=P(e,O),S=T(!1,{value:b,defaultValue:w}),k=j(S,2),l=k[0],E=k[1];function h(a,u){var t=l;return s||(t=a,E(t),i==null||i(t,u)),t}function K(a){a.which===p.LEFT?h(!1,a):a.which===p.RIGHT&&h(!0,a),r==null||r(a)}function D(a){var u=h(!l,a);o==null||o(u,a)}var M=F(n,g,(d={},m(d,"".concat(n,"-checked"),l),m(d,"".concat(n,"-disabled"),s),d));return c.createElement("button",L({},I,{type:"button",role:"switch","aria-checked":l,disabled:s,className:M,ref:f,onKeyDown:K,onClick:D}),y,c.createElement("span",{className:"".concat(n,"-inner")},c.createElement("span",{className:"".concat(n,"-inner-checked")},N),c.createElement("span",{className:"".concat(n,"-inner-unchecked")},x)))});v.displayName="Switch";const _=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"}));export{v as S,_ as e};
