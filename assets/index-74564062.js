import{r as c,e2 as P,c7 as T,dn as j,b7 as O,dZ as m,cJ as R,cV as p}from"./index-2ce10fe2.js";var V=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],v=c.forwardRef(function(e,f){var d,C=e.prefixCls,a=C===void 0?"rc-switch":C,g=e.className,w=e.checked,b=e.defaultChecked,s=e.disabled,y=e.loadingIcon,N=e.checkedChildren,x=e.unCheckedChildren,o=e.onClick,i=e.onChange,r=e.onKeyDown,S=P(e,V),I=T(!1,{value:w,defaultValue:b}),k=j(I,2),l=k[0],E=k[1];function h(n,u){var t=l;return s||(t=n,E(t),i==null||i(t,u)),t}function K(n){n.which===p.LEFT?h(!1,n):n.which===p.RIGHT&&h(!0,n),r==null||r(n)}function D(n){var u=h(!l,n);o==null||o(u,n)}var M=O(a,g,(d={},m(d,"".concat(a,"-checked"),l),m(d,"".concat(a,"-disabled"),s),d));return c.createElement("button",R({},S,{type:"button",role:"switch","aria-checked":l,disabled:s,className:M,ref:f,onKeyDown:K,onClick:D}),y,c.createElement("span",{className:"".concat(a,"-inner")},c.createElement("span",{className:"".concat(a,"-inner-checked")},N),c.createElement("span",{className:"".concat(a,"-inner-unchecked")},x)))});v.displayName="Switch";const z=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"}));export{v as S,z as e};
