import{r as i,go as x,av as y,fo as E}from"./index-50292268.js";function f(o){return!!(o&&o.then)}const O=o=>{const{type:d,children:p,prefixCls:v,buttonProps:m,close:u,autoFocus:g,emitEvent:h,isSilent:l,quitOnNullishReturnValue:C,actionFn:r}=o,n=i.useRef(!1),a=i.useRef(null),[R,c]=x(!1),s=function(){u==null||u.apply(void 0,arguments)};i.useEffect(()=>{let t=null;return g&&(t=setTimeout(()=>{var e;(e=a.current)===null||e===void 0||e.focus()})),()=>{t&&clearTimeout(t)}},[]);const b=t=>{f(t)&&(c(!0),t.then(function(){c(!1,!0),s.apply(void 0,arguments),n.current=!1},e=>{if(c(!1,!0),n.current=!1,!(l!=null&&l()))return Promise.reject(e)}))},k=t=>{if(n.current)return;if(n.current=!0,!r){s();return}let e;if(h){if(e=r(t),C&&!f(e)){n.current=!1,s(t);return}}else if(r.length)e=r(u),n.current=!1;else if(e=r(),!e){s();return}b(e)};return i.createElement(y,Object.assign({},E(d),{onClick:k,loading:R,prefixCls:v},m,{ref:a}),p)},A=O;export{A};
