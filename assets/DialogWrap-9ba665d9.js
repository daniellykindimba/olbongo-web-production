import{r as n,R as c,h as x,fv as C,c as O,fw as H,j as p,gI as se,fp as ce,gV as F,fB as G,gD as fe}from"./index-bf2a13da.js";function J(e,a,t){var o=a;return!o&&t&&(o="".concat(e,"-").concat(t)),o}function Q(e,a){var t=e["page".concat(a?"Y":"X","Offset")],o="scroll".concat(a?"Top":"Left");if(typeof t!="number"){var i=e.document;t=i.documentElement[o],typeof t!="number"&&(t=i.body[o])}return t}function ue(e){var a=e.getBoundingClientRect(),t={left:a.left,top:a.top},o=e.ownerDocument,i=o.defaultView||o.parentWindow;return t.left+=Q(i),t.top+=Q(i,!0),t}const de=n.memo(function(e){var a=e.children;return a},function(e,a){var t=a.shouldUpdate;return!t});var Z={width:0,height:0,overflow:"hidden",outline:"none"},me=c.forwardRef(function(e,a){var t=e.prefixCls,o=e.className,i=e.style,r=e.title,s=e.ariaId,f=e.footer,m=e.closable,v=e.closeIcon,y=e.onClose,b=e.children,g=e.bodyStyle,h=e.bodyProps,N=e.modalRender,R=e.onMouseDown,I=e.onMouseUp,A=e.holderRef,k=e.visible,D=e.forceRender,u=e.width,S=e.height,E=n.useRef(),w=n.useRef();c.useImperativeHandle(a,function(){return{focus:function(){var d;(d=E.current)===null||d===void 0||d.focus()},changeActive:function(d){var M=document,W=M.activeElement;d&&W===w.current?E.current.focus():!d&&W===E.current&&w.current.focus()}}});var P={};u!==void 0&&(P.width=u),S!==void 0&&(P.height=S);var T;f&&(T=c.createElement("div",{className:"".concat(t,"-footer")},f));var $;r&&($=c.createElement("div",{className:"".concat(t,"-header")},c.createElement("div",{className:"".concat(t,"-title"),id:s},r)));var V;m&&(V=c.createElement("button",{type:"button",onClick:y,"aria-label":"Close",className:"".concat(t,"-close")},v||c.createElement("span",{className:"".concat(t,"-close-x")})));var U=c.createElement("div",{className:"".concat(t,"-content")},V,$,c.createElement("div",x({className:"".concat(t,"-body"),style:g},h),b),T);return c.createElement("div",{key:"dialog-element",role:"dialog","aria-labelledby":r?s:null,"aria-modal":"true",ref:A,style:C(C({},i),P),className:O(t,o),onMouseDown:R,onMouseUp:I},c.createElement("div",{tabIndex:0,ref:E,style:Z,"aria-hidden":"true"}),c.createElement(de,{shouldUpdate:k||D},N?N(U):U),c.createElement("div",{tabIndex:0,ref:w,style:Z,"aria-hidden":"true"}))}),ee=n.forwardRef(function(e,a){var t=e.prefixCls,o=e.title,i=e.style,r=e.className,s=e.visible,f=e.forceRender,m=e.destroyOnClose,v=e.motionName,y=e.ariaId,b=e.onVisibleChanged,g=e.mousePosition,h=n.useRef(),N=n.useState(),R=H(N,2),I=R[0],A=R[1],k={};I&&(k.transformOrigin=I);function D(){var u=ue(h.current);A(g?"".concat(g.x-u.left,"px ").concat(g.y-u.top,"px"):"")}return n.createElement(p,{visible:s,onVisibleChanged:b,onAppearPrepare:D,onEnterPrepare:D,forceRender:f,motionName:v,removeOnLeave:m,ref:h},function(u,S){var E=u.className,w=u.style;return n.createElement(me,x({},e,{ref:a,title:o,ariaId:y,prefixCls:t,holderRef:S,style:C(C(C({},w),i),k),className:O(r,E)}))})});ee.displayName="Content";function ve(e){var a=e.prefixCls,t=e.style,o=e.visible,i=e.maskProps,r=e.motionName;return n.createElement(p,{key:"mask",visible:o,motionName:r,leavedClassName:"".concat(a,"-mask-hidden")},function(s,f){var m=s.className,v=s.style;return n.createElement("div",x({ref:f,style:C(C({},v),t),className:O("".concat(a,"-mask"),m)},i))})}function Ce(e){var a=e.prefixCls,t=a===void 0?"rc-dialog":a,o=e.zIndex,i=e.visible,r=i===void 0?!1:i,s=e.keyboard,f=s===void 0?!0:s,m=e.focusTriggerAfterClose,v=m===void 0?!0:m,y=e.wrapStyle,b=e.wrapClassName,g=e.wrapProps,h=e.onClose,N=e.afterOpenChange,R=e.afterClose,I=e.transitionName,A=e.animation,k=e.closable,D=k===void 0?!0:k,u=e.mask,S=u===void 0?!0:u,E=e.maskTransitionName,w=e.maskAnimation,P=e.maskClosable,T=P===void 0?!0:P,$=e.maskStyle,V=e.maskProps,U=e.rootClassName,_=n.useRef(),d=n.useRef(),M=n.useRef(),W=n.useState(r),X=H(W,2),K=X[0],Y=X[1],te=se();function ae(){F(d.current,document.activeElement)||(_.current=document.activeElement)}function ne(){if(!F(d.current,document.activeElement)){var l;(l=M.current)===null||l===void 0||l.focus()}}function oe(l){if(l)ne();else{if(Y(!1),S&&_.current&&v){try{_.current.focus({preventScroll:!0})}catch{}_.current=null}K&&(R==null||R())}N==null||N(l)}function L(l){h==null||h(l)}var z=n.useRef(!1),B=n.useRef(),ie=function(){clearTimeout(B.current),z.current=!0},re=function(){B.current=setTimeout(function(){z.current=!1})},q=null;T&&(q=function(j){z.current?z.current=!1:d.current===j.target&&L(j)});function le(l){if(f&&l.keyCode===G.ESC){l.stopPropagation(),L(l);return}r&&l.keyCode===G.TAB&&M.current.changeActive(!l.shiftKey)}return n.useEffect(function(){r&&(Y(!0),ae())},[r]),n.useEffect(function(){return function(){clearTimeout(B.current)}},[]),n.createElement("div",x({className:O("".concat(t,"-root"),U)},ce(e,{data:!0})),n.createElement(ve,{prefixCls:t,visible:S&&r,motionName:J(t,E,w),style:C({zIndex:o},$),maskProps:V}),n.createElement("div",x({tabIndex:-1,onKeyDown:le,className:O("".concat(t,"-wrap"),b),ref:d,onClick:q,style:C(C({zIndex:o},y),{},{display:K?null:"none"})},g),n.createElement(ee,x({},e,{onMouseDown:ie,onMouseUp:re,ref:M,closable:D,ariaId:te,prefixCls:t,visible:r&&K,onClose:L,onVisibleChanged:oe,motionName:J(t,I,A)}))))}var ye=function(a){var t=a.visible,o=a.getContainer,i=a.forceRender,r=a.destroyOnClose,s=r===void 0?!1:r,f=a.afterClose,m=n.useState(t),v=H(m,2),y=v[0],b=v[1];return n.useEffect(function(){t&&b(!0)},[t]),!i&&s&&!y?null:n.createElement(fe,{open:t||i||y,autoDestroy:!1,getContainer:o,autoLock:t||y},n.createElement(Ce,x({},a,{destroyOnClose:s,afterClose:function(){f==null||f(),b(!1)}})))};ye.displayName="Dialog";export{ye as D,me as P};
