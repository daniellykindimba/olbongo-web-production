import{r as c,eP as M,dr as T,eJ as j,u as G,eK as m,bG as L,eL as p}from"./index-8383052a.js";var O=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],v=c.forwardRef(function(e,f){var d,C=e.prefixCls,n=C===void 0?"rc-switch":C,g=e.className,w=e.checked,b=e.defaultChecked,s=e.disabled,y=e.loadingIcon,N=e.checkedChildren,x=e.unCheckedChildren,o=e.onClick,i=e.onChange,r=e.onKeyDown,S=M(e,O),I=T(!1,{value:w,defaultValue:b}),k=j(I,2),l=k[0],K=k[1];function h(a,u){var t=l;return s||(t=a,K(t),i==null||i(t,u)),t}function E(a){a.which===p.LEFT?h(!1,a):a.which===p.RIGHT&&h(!0,a),r==null||r(a)}function D(a){var u=h(!l,a);o==null||o(u,a)}var P=G(n,g,(d={},m(d,"".concat(n,"-checked"),l),m(d,"".concat(n,"-disabled"),s),d));return c.createElement("button",L({},S,{type:"button",role:"switch","aria-checked":l,disabled:s,className:P,ref:f,onKeyDown:E,onClick:D}),y,c.createElement("span",{className:"".concat(n,"-inner")},c.createElement("span",{className:"".concat(n,"-inner-checked")},N),c.createElement("span",{className:"".concat(n,"-inner-unchecked")},x)))});v.displayName="Switch";const _=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"}));export{v as S,_ as e};
