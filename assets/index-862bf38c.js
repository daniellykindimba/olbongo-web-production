import{r as c,fe as P,dm as T,ez as j,aK as z,f9 as m,bo as O,fh as f}from"./index-0106a5d3.js";var R=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],p=c.forwardRef(function(e,v){var d,C=e.prefixCls,n=C===void 0?"rc-switch":C,g=e.className,w=e.checked,b=e.defaultChecked,o=e.disabled,y=e.loadingIcon,N=e.checkedChildren,x=e.unCheckedChildren,s=e.onClick,i=e.onChange,r=e.onKeyDown,S=P(e,R),I=T(!1,{value:w,defaultValue:b}),k=j(I,2),l=k[0],K=k[1];function h(a,u){var t=l;return o||(t=a,K(t),i==null||i(t,u)),t}function E(a){a.which===f.LEFT?h(!1,a):a.which===f.RIGHT&&h(!0,a),r==null||r(a)}function D(a){var u=h(!l,a);s==null||s(u,a)}var M=z(n,g,(d={},m(d,"".concat(n,"-checked"),l),m(d,"".concat(n,"-disabled"),o),d));return c.createElement("button",O({},S,{type:"button",role:"switch","aria-checked":l,disabled:o,className:M,ref:v,onKeyDown:E,onClick:D}),y,c.createElement("span",{className:"".concat(n,"-inner")},c.createElement("span",{className:"".concat(n,"-inner-checked")},N),c.createElement("span",{className:"".concat(n,"-inner-unchecked")},x)))});p.displayName="Switch";const A=Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"}));export{p as S,A as e};
