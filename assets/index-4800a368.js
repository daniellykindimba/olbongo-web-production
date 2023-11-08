import{ay as i,cp as D,bA as O,d3 as g,d8 as T,_ as $,cJ as B,d9 as j,bP as F,cI as G,cn as Q,bu as U,bN as X}from"./index-1fe25657.js";var z=i.forwardRef(function(e,t){var a,n=e.prefixCls,c=e.forceRender,b=e.className,k=e.style,d=e.children,r=e.isActive,u=e.role,A=i.useState(r||c),l=D(A,2),o=l[0],v=l[1];return i.useEffect(function(){(c||r)&&v(!0)},[c,r]),o?i.createElement("div",{ref:t,className:O("".concat(n,"-content"),(a={},g(a,"".concat(n,"-content-active"),r),g(a,"".concat(n,"-content-inactive"),!r),a),b),style:k,role:u},i.createElement("div",{className:"".concat(n,"-content-box")},d)):null});z.displayName="PanelContent";var Y=["showArrow","headerClass","isActive","onItemClick","forceRender","className","prefixCls","collapsible","accordion","panelKey","extra","header","expandIcon","openMotion","destroyInactivePanel","children"],H=i.forwardRef(function(e,t){var a,n,c=e.showArrow,b=c===void 0?!0:c,k=e.headerClass,d=e.isActive,r=e.onItemClick,u=e.forceRender,A=e.className,l=e.prefixCls,o=e.collapsible,v=e.accordion,E=e.panelKey,f=e.extra,C=e.header,m=e.expandIcon,I=e.openMotion,x=e.destroyInactivePanel,s=e.children,_=T(e,Y),y=o==="disabled",N=o==="header",h=o==="icon",P=f!=null&&typeof f!="boolean",w=function(){r==null||r(E)},p=function(M){(M.key==="Enter"||M.keyCode===j.ENTER||M.which===j.ENTER)&&w()},K=typeof m=="function"?m(e):i.createElement("i",{className:"arrow"});K&&(K=i.createElement("div",{className:"".concat(l,"-expand-icon"),onClick:["header","icon"].includes(o)?w:void 0},K));var L=O((a={},g(a,"".concat(l,"-item"),!0),g(a,"".concat(l,"-item-active"),d),g(a,"".concat(l,"-item-disabled"),y),a),A),V=O(k,(n={},g(n,"".concat(l,"-header"),!0),g(n,"".concat(l,"-header-collapsible-only"),N),g(n,"".concat(l,"-icon-collapsible-only"),h),n)),R={className:V,"aria-expanded":d,"aria-disabled":y,onKeyDown:p};return!N&&!h&&(R.onClick=w,R.role=v?"tab":"button",R.tabIndex=y?-1:0),i.createElement("div",$({},_,{ref:t,className:L}),i.createElement("div",R,b&&K,i.createElement("span",{className:"".concat(l,"-header-text"),onClick:o==="header"?w:void 0},C),P&&i.createElement("div",{className:"".concat(l,"-extra")},f)),i.createElement(B,$({visible:d,leavedClassName:"".concat(l,"-content-hidden")},I,{forceRender:u,removeOnLeave:x}),function(S,M){var W=S.className,q=S.style;return i.createElement(z,{ref:M,prefixCls:l,className:W,style:q,isActive:d,forceRender:u,role:v?"tabpanel":void 0},s)}))}),Z=["children","label","key","collapsible","onItemClick","destroyInactivePanel"],ee=function(t,a){var n=a.prefixCls,c=a.accordion,b=a.collapsible,k=a.destroyInactivePanel,d=a.onItemClick,r=a.activeKey,u=a.openMotion,A=a.expandIcon;return t.map(function(l,o){var v=l.children,E=l.label,f=l.key,C=l.collapsible,m=l.onItemClick,I=l.destroyInactivePanel,x=T(l,Z),s=String(f??o),_=C??b,y=I??k,N=function(w){_!=="disabled"&&(d(w),m==null||m(w))},h=!1;return c?h=r[0]===s:h=r.indexOf(s)>-1,i.createElement(H,$({},x,{prefixCls:n,key:s,panelKey:s,isActive:h,accordion:c,openMotion:u,expandIcon:A,header:E,collapsible:_,onItemClick:N,destroyInactivePanel:y}),v)})},ae=function(t,a,n){if(!t)return null;var c=n.prefixCls,b=n.accordion,k=n.collapsible,d=n.destroyInactivePanel,r=n.onItemClick,u=n.activeKey,A=n.openMotion,l=n.expandIcon,o=t.key||String(a),v=t.props,E=v.header,f=v.headerClass,C=v.destroyInactivePanel,m=v.collapsible,I=v.onItemClick,x=!1;b?x=u[0]===o:x=u.indexOf(o)>-1;var s=m??k,_=function(h){s!=="disabled"&&(r(h),I==null||I(h))},y={key:o,panelKey:o,header:E,headerClass:f,isActive:x,prefixCls:c,destroyInactivePanel:C??d,openMotion:A,accordion:b,children:t.props.children,onItemClick:_,expandIcon:l,collapsible:s};return typeof t.type=="string"?t:(Object.keys(y).forEach(function(N){typeof y[N]>"u"&&delete y[N]}),i.cloneElement(t,y))};function ne(e,t,a){return Array.isArray(e)?ee(e,a):F(t).map(function(n,c){return ae(n,c,a)})}function le(e){var t=e;if(!Array.isArray(t)){var a=U(t);t=a==="number"||a==="string"?[t]:[]}return t.map(function(n){return String(n)})}var te=i.forwardRef(function(e,t){var a=e.prefixCls,n=a===void 0?"rc-collapse":a,c=e.destroyInactivePanel,b=c===void 0?!1:c,k=e.style,d=e.accordion,r=e.className,u=e.children,A=e.collapsible,l=e.openMotion,o=e.expandIcon,v=e.activeKey,E=e.defaultActiveKey,f=e.onChange,C=e.items,m=O(n,r),I=G([],{value:v,onChange:function(P){return f==null?void 0:f(P)},defaultValue:E,postState:le}),x=D(I,2),s=x[0],_=x[1],y=function(P){return _(function(){if(d)return s[0]===P?[]:[P];var w=s.indexOf(P),p=w>-1;return p?s.filter(function(K){return K!==P}):[].concat(X(s),[P])})};Q(!u,"`children` will be removed in next major version. Please use `items` instead.");var N=ne(C,u,{prefixCls:n,accordion:d,openMotion:l,expandIcon:o,collapsible:A,destroyInactivePanel:b,onItemClick:y,activeKey:s});return i.createElement("div",{ref:t,className:m,style:k,role:d?"tablist":void 0},N)});const J=Object.assign(te,{Panel:H});var ie=J.Panel;const re=Object.freeze(Object.defineProperty({__proto__:null,Panel:ie,default:J},Symbol.toStringTag,{value:"Module"}));export{J as C,re as e};
