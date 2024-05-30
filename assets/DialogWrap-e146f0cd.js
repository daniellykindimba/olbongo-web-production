import{r as a,R as d,f6 as de,b as x,bU as f,cQ as me,f0 as oe,w as I,e$ as J,x as le,ge as ve,gn as p,e_ as ee,g9 as Ce}from"./index-8c21ffd9.js";var ie=a.createContext({});function te(e,n,t){var o=n;return!o&&t&&(o="".concat(e,"-").concat(t)),o}function ae(e,n){var t=e["page".concat(n?"Y":"X","Offset")],o="scroll".concat(n?"Top":"Left");if(typeof t!="number"){var l=e.document;t=l.documentElement[o],typeof t!="number"&&(t=l.body[o])}return t}function ye(e){var n=e.getBoundingClientRect(),t={left:n.left,top:n.top},o=e.ownerDocument,l=o.defaultView||o.parentWindow;return t.left+=ae(l),t.top+=ae(l,!0),t}const be=a.memo(function(e){var n=e.children;return n},function(e,n){var t=n.shouldUpdate;return!t});var ne={width:0,height:0,overflow:"hidden",outline:"none"},Ne={outline:"none"},Re=d.forwardRef(function(e,n){var t=e.prefixCls,o=e.className,l=e.style,i=e.title,v=e.ariaId,m=e.footer,s=e.closable,C=e.closeIcon,b=e.onClose,h=e.children,N=e.bodyStyle,R=e.bodyProps,E=e.modalRender,S=e.onMouseDown,O=e.onMouseUp,U=e.holderRef,P=e.visible,A=e.forceRender,y=e.width,_=e.height,c=e.classNames,u=e.styles,K=d.useContext(ie),H=K.panel,Q=de(U,H),V=a.useRef(),W=a.useRef(),k=a.useRef();d.useImperativeHandle(n,function(){return{focus:function(){var w;(w=k.current)===null||w===void 0||w.focus()},changeActive:function(w){var Y=document,j=Y.activeElement;w&&j===W.current?V.current.focus():!w&&j===V.current&&W.current.focus()}}});var g={};y!==void 0&&(g.width=y),_!==void 0&&(g.height=_);var M;m&&(M=d.createElement("div",{className:x("".concat(t,"-footer"),c==null?void 0:c.footer),style:f({},u==null?void 0:u.footer)},m));var D;i&&(D=d.createElement("div",{className:x("".concat(t,"-header"),c==null?void 0:c.header),style:f({},u==null?void 0:u.header)},d.createElement("div",{className:"".concat(t,"-title"),id:v},i)));var $=a.useMemo(function(){return me(s)==="object"&&s!==null?s:s?{closeIcon:C??d.createElement("span",{className:"".concat(t,"-close-x")})}:{}},[s,C]),X=oe($,!0),z;s&&(z=d.createElement("button",I({type:"button",onClick:b,"aria-label":"Close"},X,{className:"".concat(t,"-close")}),$.closeIcon));var T=d.createElement("div",{className:x("".concat(t,"-content"),c==null?void 0:c.content),style:u==null?void 0:u.content},z,D,d.createElement("div",I({className:x("".concat(t,"-body"),c==null?void 0:c.body),style:f(f({},N),u==null?void 0:u.body)},R),h),M);return d.createElement("div",{key:"dialog-element",role:"dialog","aria-labelledby":i?v:null,"aria-modal":"true",ref:Q,style:f(f({},l),g),className:x(t,o),onMouseDown:S,onMouseUp:O},d.createElement("div",{tabIndex:0,ref:V,style:ne,"aria-hidden":"true"}),d.createElement("div",{ref:k,tabIndex:-1,style:Ne},d.createElement(be,{shouldUpdate:P||A},E?E(T):T)),d.createElement("div",{tabIndex:0,ref:W,style:ne,"aria-hidden":"true"}))}),re=a.forwardRef(function(e,n){var t=e.prefixCls,o=e.title,l=e.style,i=e.className,v=e.visible,m=e.forceRender,s=e.destroyOnClose,C=e.motionName,b=e.ariaId,h=e.onVisibleChanged,N=e.mousePosition,R=a.useRef(),E=a.useState(),S=J(E,2),O=S[0],U=S[1],P={};O&&(P.transformOrigin=O);function A(){var y=ye(R.current);U(N?"".concat(N.x-y.left,"px ").concat(N.y-y.top,"px"):"")}return a.createElement(le,{visible:v,onVisibleChanged:h,onAppearPrepare:A,onEnterPrepare:A,forceRender:m,motionName:C,removeOnLeave:s,ref:R},function(y,_){var c=y.className,u=y.style;return a.createElement(Re,I({},e,{ref:n,title:o,ariaId:b,prefixCls:t,holderRef:_,style:f(f(f({},u),l),P),className:x(i,c)}))})});re.displayName="Content";function ge(e){var n=e.prefixCls,t=e.style,o=e.visible,l=e.maskProps,i=e.motionName,v=e.className;return a.createElement(le,{key:"mask",visible:o,motionName:i,leavedClassName:"".concat(n,"-mask-hidden")},function(m,s){var C=m.className,b=m.style;return a.createElement("div",I({ref:s,style:f(f({},b),t),className:x("".concat(n,"-mask"),C,v)},l))})}function he(e){var n=e.prefixCls,t=n===void 0?"rc-dialog":n,o=e.zIndex,l=e.visible,i=l===void 0?!1:l,v=e.keyboard,m=v===void 0?!0:v,s=e.focusTriggerAfterClose,C=s===void 0?!0:s,b=e.wrapStyle,h=e.wrapClassName,N=e.wrapProps,R=e.onClose,E=e.afterOpenChange,S=e.afterClose,O=e.transitionName,U=e.animation,P=e.closable,A=P===void 0?!0:P,y=e.mask,_=y===void 0?!0:y,c=e.maskTransitionName,u=e.maskAnimation,K=e.maskClosable,H=K===void 0?!0:K,Q=e.maskStyle,V=e.maskProps,W=e.rootClassName,k=e.classNames,g=e.styles,M=a.useRef(),D=a.useRef(),$=a.useRef(),X=a.useState(i),z=J(X,2),T=z[0],L=z[1],w=ve();function Y(){p(D.current,document.activeElement)||(M.current=document.activeElement)}function j(){if(!p(D.current,document.activeElement)){var r;(r=$.current)===null||r===void 0||r.focus()}}function se(r){if(r)j();else{if(L(!1),_&&M.current&&C){try{M.current.focus({preventScroll:!0})}catch{}M.current=null}T&&(S==null||S())}E==null||E(r)}function q(r){R==null||R(r)}var B=a.useRef(!1),F=a.useRef(),ce=function(){clearTimeout(F.current),B.current=!0},ue=function(){F.current=setTimeout(function(){B.current=!1})},Z=null;H&&(Z=function(G){B.current?B.current=!1:D.current===G.target&&q(G)});function fe(r){if(m&&r.keyCode===ee.ESC){r.stopPropagation(),q(r);return}i&&r.keyCode===ee.TAB&&$.current.changeActive(!r.shiftKey)}return a.useEffect(function(){i&&(L(!0),Y())},[i]),a.useEffect(function(){return function(){clearTimeout(F.current)}},[]),a.createElement("div",I({className:x("".concat(t,"-root"),W)},oe(e,{data:!0})),a.createElement(ge,{prefixCls:t,visible:_&&i,motionName:te(t,c,u),style:f(f({zIndex:o},Q),g==null?void 0:g.mask),maskProps:V,className:k==null?void 0:k.mask}),a.createElement("div",I({tabIndex:-1,onKeyDown:fe,className:x("".concat(t,"-wrap"),h,k==null?void 0:k.wrapper),ref:D,onClick:Z,style:f(f(f({zIndex:o},b),g==null?void 0:g.wrapper),{},{display:T?null:"none"})},N),a.createElement(re,I({},e,{onMouseDown:ce,onMouseUp:ue,ref:$,closable:A,ariaId:w,prefixCls:t,visible:i&&T,onClose:q,onVisibleChanged:se,motionName:te(t,O,U)}))))}var Ee=function(n){var t=n.visible,o=n.getContainer,l=n.forceRender,i=n.destroyOnClose,v=i===void 0?!1:i,m=n.afterClose,s=n.panelRef,C=a.useState(t),b=J(C,2),h=b[0],N=b[1],R=a.useMemo(function(){return{panel:s}},[s]);return a.useEffect(function(){t&&N(!0)},[t]),!l&&v&&!h?null:a.createElement(ie.Provider,{value:R},a.createElement(Ce,{open:t||l||h,autoDestroy:!1,getContainer:o,autoLock:t||h},a.createElement(he,I({},n,{destroyOnClose:v,afterClose:function(){m==null||m(),N(!1)}}))))};Ee.displayName="Dialog";export{Ee as D,Re as P};
