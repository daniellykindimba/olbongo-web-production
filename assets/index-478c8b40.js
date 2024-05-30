import{R as i,e$ as D,b as S,eJ as E,c9 as T,w as O,x as V,e_ as j,p as W,a2 as q,g8 as B,f0 as F,cQ as G,k as U}from"./index-50292268.js";var z=i.forwardRef(function(e,n){var a=e.prefixCls,l=e.forceRender,v=e.className,f=e.style,C=e.children,r=e.isActive,k=e.role,t=i.useState(r||l),s=D(t,2),o=s[0],m=s[1];return i.useEffect(function(){(l||r)&&m(!0)},[l,r]),o?i.createElement("div",{ref:n,className:S("".concat(a,"-content"),E(E({},"".concat(a,"-content-active"),r),"".concat(a,"-content-inactive"),!r),v),style:f,role:k},i.createElement("div",{className:"".concat(a,"-content-box")},C)):null});z.displayName="PanelContent";var X=["showArrow","headerClass","isActive","onItemClick","forceRender","className","prefixCls","collapsible","accordion","panelKey","extra","header","expandIcon","openMotion","destroyInactivePanel","children"],H=i.forwardRef(function(e,n){var a=e.showArrow,l=a===void 0?!0:a,v=e.headerClass,f=e.isActive,C=e.onItemClick,r=e.forceRender,k=e.className,t=e.prefixCls,s=e.collapsible,o=e.accordion,m=e.panelKey,d=e.extra,K=e.header,y=e.expandIcon,I=e.openMotion,h=e.destroyInactivePanel,b=e.children,P=T(e,X),c=s==="disabled",A=s==="header",x=s==="icon",w=d!=null&&typeof d!="boolean",u=function(){C==null||C(m)},N=function(_){(_.key==="Enter"||_.keyCode===j.ENTER||_.which===j.ENTER)&&u()},g=typeof y=="function"?y(e):i.createElement("i",{className:"arrow"});g&&(g=i.createElement("div",{className:"".concat(t,"-expand-icon"),onClick:["header","icon"].includes(s)?u:void 0},g));var p=S(E(E(E({},"".concat(t,"-item"),!0),"".concat(t,"-item-active"),f),"".concat(t,"-item-disabled"),c),k),$=S(v,E(E(E({},"".concat(t,"-header"),!0),"".concat(t,"-header-collapsible-only"),A),"".concat(t,"-icon-collapsible-only"),x)),M={className:$,"aria-expanded":f,"aria-disabled":c,onKeyDown:N};return!A&&!x&&(M.onClick=u,M.role=o?"tab":"button",M.tabIndex=c?-1:0),i.createElement("div",O({},P,{ref:n,className:p}),i.createElement("div",M,l&&g,i.createElement("span",{className:"".concat(t,"-header-text"),onClick:s==="header"?u:void 0},K),w&&i.createElement("div",{className:"".concat(t,"-extra")},d)),i.createElement(V,O({visible:f,leavedClassName:"".concat(t,"-content-hidden")},I,{forceRender:r,removeOnLeave:h}),function(R,_){var L=R.className,Q=R.style;return i.createElement(z,{ref:_,prefixCls:t,className:L,style:Q,isActive:f,forceRender:r,role:o?"tabpanel":void 0},b)}))}),Y=["children","label","key","collapsible","onItemClick","destroyInactivePanel"],Z=function(n,a){var l=a.prefixCls,v=a.accordion,f=a.collapsible,C=a.destroyInactivePanel,r=a.onItemClick,k=a.activeKey,t=a.openMotion,s=a.expandIcon;return n.map(function(o,m){var d=o.children,K=o.label,y=o.key,I=o.collapsible,h=o.onItemClick,b=o.destroyInactivePanel,P=T(o,Y),c=String(y??m),A=I??f,x=b??C,w=function(g){A!=="disabled"&&(r(g),h==null||h(g))},u=!1;return v?u=k[0]===c:u=k.indexOf(c)>-1,i.createElement(H,O({},P,{prefixCls:l,key:c,panelKey:c,isActive:u,accordion:v,openMotion:t,expandIcon:s,header:K,collapsible:A,onItemClick:w,destroyInactivePanel:x}),d)})},ee=function(n,a,l){if(!n)return null;var v=l.prefixCls,f=l.accordion,C=l.collapsible,r=l.destroyInactivePanel,k=l.onItemClick,t=l.activeKey,s=l.openMotion,o=l.expandIcon,m=n.key||String(a),d=n.props,K=d.header,y=d.headerClass,I=d.destroyInactivePanel,h=d.collapsible,b=d.onItemClick,P=!1;f?P=t[0]===m:P=t.indexOf(m)>-1;var c=h??C,A=function(u){c!=="disabled"&&(k(u),b==null||b(u))},x={key:m,panelKey:m,header:K,headerClass:y,isActive:P,prefixCls:v,destroyInactivePanel:I??r,openMotion:s,accordion:f,children:n.props.children,onItemClick:A,expandIcon:o,collapsible:c};return typeof n.type=="string"?n:(Object.keys(x).forEach(function(w){typeof x[w]>"u"&&delete x[w]}),i.cloneElement(n,x))};function ae(e,n,a){return Array.isArray(e)?Z(e,a):W(n).map(function(l,v){return ee(l,v,a)})}function ne(e){var n=e;if(!Array.isArray(n)){var a=G(n);n=a==="number"||a==="string"?[n]:[]}return n.map(function(l){return String(l)})}var le=i.forwardRef(function(e,n){var a=e.prefixCls,l=a===void 0?"rc-collapse":a,v=e.destroyInactivePanel,f=v===void 0?!1:v,C=e.style,r=e.accordion,k=e.className,t=e.children,s=e.collapsible,o=e.openMotion,m=e.expandIcon,d=e.activeKey,K=e.defaultActiveKey,y=e.onChange,I=e.items,h=S(l,k),b=q([],{value:d,onChange:function(N){return y==null?void 0:y(N)},defaultValue:K,postState:ne}),P=D(b,2),c=P[0],A=P[1],x=function(N){return A(function(){if(r)return c[0]===N?[]:[N];var g=c.indexOf(N),p=g>-1;return p?c.filter(function($){return $!==N}):[].concat(U(c),[N])})};B(!t,"[rc-collapse] `children` will be removed in next major version. Please use `items` instead.");var w=ae(I,t,{prefixCls:l,accordion:r,openMotion:o,expandIcon:m,collapsible:s,destroyInactivePanel:f,onItemClick:x,activeKey:c});return i.createElement("div",O({ref:n,className:h,style:C,role:r?"tablist":void 0},F(e,{aria:!0,data:!0})),w)});const J=Object.assign(le,{Panel:H});var te=J.Panel;const ce=Object.freeze(Object.defineProperty({__proto__:null,Panel:te,default:J},Symbol.toStringTag,{value:"Module"}));export{J as C,ce as e};
