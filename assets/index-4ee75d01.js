import{r as c,eN as P,ds as T,eH as j,u as H,eI as m,bH as O,eJ as p}from"./index-d9f4923f.js";var R=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],v=c.forwardRef(function(e,f){var d,C=e.prefixCls,n=C===void 0?"rc-switch":C,g=e.className,w=e.checked,b=e.defaultChecked,t=e.disabled,y=e.loadingIcon,N=e.checkedChildren,x=e.unCheckedChildren,o=e.onClick,i=e.onChange,r=e.onKeyDown,I=P(e,R),S=T(!1,{value:w,defaultValue:b}),k=j(S,2),l=k[0],E=k[1];function h(a,u){var s=l;return t||(s=a,E(s),i==null||i(s,u)),s}function K(a){a.which===p.LEFT?h(!1,a):a.which===p.RIGHT&&h(!0,a),r==null||r(a)}function D(a){var u=h(!l,a);o==null||o(u,a)}var M=H(n,g,(d={},m(d,"".concat(n,"-checked"),l),m(d,"".concat(n,"-disabled"),t),d));return c.createElement("button",O({},I,{type:"button",role:"switch","aria-checked":l,disabled:t,className:M,ref:f,onKeyDown:K,onClick:D}),y,c.createElement("span",{className:"".concat(n,"-inner")},c.createElement("span",{className:"".concat(n,"-inner-checked")},N),c.createElement("span",{className:"".concat(n,"-inner-unchecked")},x)))});v.displayName="Switch";const z=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"}));export{v as S,z as e};
