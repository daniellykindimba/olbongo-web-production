import{r as n,e$ as $,gd as He,az as je,bU as E,gh as $e,eJ as Q,gi as ge,b as le,x as Ue,g9 as Ke,e_ as ke,c9 as Ce,R as ue,w as fe,k as Ge,cQ as De,a2 as Me,gj as Be}from"./index-50292268.js";import{D as qe}from"./DialogWrap-6cd776fa.js";var Ne=["crossOrigin","decoding","draggable","loading","referrerPolicy","sizes","srcSet","useMap","alt"],Re=n.createContext(null),Xe=0;function Je(i,e){var o=n.useState(function(){return Xe+=1,String(Xe)}),u=$(o,1),s=u[0],t=n.useContext(Re),v={data:e,canPreview:i};return n.useEffect(function(){if(t)return t.register(s,v)},[]),n.useEffect(function(){t&&t.register(s,v)},[i,e]),s}function Qe(i){return new Promise(function(e){var o=document.createElement("img");o.onerror=function(){return e(!1)},o.onload=function(){return e(!0)},o.src=i})}function Ze(i){var e=i.src,o=i.isCustomPlaceholder,u=i.fallback,s=n.useState(o?"loading":"normal"),t=$(s,2),v=t[0],r=t[1],c=n.useRef(!1),l=v==="error";n.useEffect(function(){var C=!0;return Qe(e).then(function(h){!h&&C&&r("error")}),function(){C=!1}},[e]),n.useEffect(function(){o&&!c.current?r("loading"):l&&r("normal")},[e]);var S=function(){r("normal")},m=function(h){c.current=!1,v==="loading"&&h!==null&&h!==void 0&&h.complete&&(h.naturalWidth||h.naturalHeight)&&(c.current=!0,S())},_=l&&u?{src:u}:{onLoad:S,src:e};return[m,_,v]}var Ie={x:0,y:0,rotate:0,scale:1,flipX:!1,flipY:!1};function en(i,e,o,u){var s=n.useRef(null),t=n.useRef([]),v=n.useState(Ie),r=$(v,2),c=r[0],l=r[1],S=function(h){l(Ie),u&&!He(Ie,c)&&u({transform:Ie,action:h})},m=function(h,I){s.current===null&&(t.current=[],s.current=je(function(){l(function(w){var p=w;return t.current.forEach(function(k){p=E(E({},p),k)}),s.current=null,u==null||u({transform:p,action:I}),p})})),t.current.push(E(E({},c),h))},_=function(h,I,w,p,k){var Y=i.current,y=Y.width,a=Y.height,x=Y.offsetWidth,d=Y.offsetHeight,f=Y.offsetLeft,R=Y.offsetTop,b=h,g=c.scale*h;g>o?(g=o,b=o/c.scale):g<e&&(g=k?g:e,b=g/c.scale);var M=w??innerWidth/2,O=p??innerHeight/2,N=b-1,D=N*y*.5,F=N*a*.5,V=N*(M-c.x-f),Z=N*(O-c.y-R),H=c.x-(V-D),j=c.y-(Z-F);if(h<1&&g===1){var K=x*g,G=d*g,ee=$e(),oe=ee.width,z=ee.height;K<=oe&&G<=z&&(H=0,j=0)}m({x:H,y:j,scale:g},I)};return{transform:c,resetTransform:S,updateTransform:m,dispatchZoomChange:_}}function Oe(i,e,o,u){var s=e+o,t=(o-u)/2;if(o>u){if(e>0)return Q({},i,t);if(e<0&&s<u)return Q({},i,-t)}else if(e<0||s>u)return Q({},i,e<0?t:-t);return{}}function ze(i,e,o,u){var s=$e(),t=s.width,v=s.height,r=null;return i<=t&&e<=v?r={x:0,y:0}:(i>t||e>v)&&(r=E(E({},Oe("x",o,i,t)),Oe("y",u,e,v))),r}var he=1,nn=1;function tn(i,e,o,u,s,t,v){var r=s.rotate,c=s.scale,l=s.x,S=s.y,m=n.useState(!1),_=$(m,2),C=_[0],h=_[1],I=n.useRef({diffX:0,diffY:0,transformX:0,transformY:0}),w=function(a){!e||a.button!==0||(a.preventDefault(),a.stopPropagation(),I.current={diffX:a.pageX-l,diffY:a.pageY-S,transformX:l,transformY:S},h(!0))},p=function(a){o&&C&&t({x:a.pageX-I.current.diffX,y:a.pageY-I.current.diffY},"move")},k=function(){if(o&&C){h(!1);var a=I.current,x=a.transformX,d=a.transformY,f=l!==x&&S!==d;if(!f)return;var R=i.current.offsetWidth*c,b=i.current.offsetHeight*c,g=i.current.getBoundingClientRect(),M=g.left,O=g.top,N=r%180!==0,D=ze(N?b:R,N?R:b,M,O);D&&t(E({},D),"dragRebound")}},Y=function(a){if(!(!o||a.deltaY==0)){var x=Math.abs(a.deltaY/100),d=Math.min(x,nn),f=he+d*u;a.deltaY>0&&(f=he/f),v(f,"wheel",a.clientX,a.clientY)}};return n.useEffect(function(){var y,a,x,d;if(e){x=ge(window,"mouseup",k,!1),d=ge(window,"mousemove",p,!1);try{window.top!==window.self&&(y=ge(window.top,"mouseup",k,!1),a=ge(window.top,"mousemove",p,!1))}catch{}}return function(){var f,R,b,g;(f=x)===null||f===void 0||f.remove(),(R=d)===null||R===void 0||R.remove(),(b=y)===null||b===void 0||b.remove(),(g=a)===null||g===void 0||g.remove()}},[o,C,l,S,r,e]),{isMoving:C,onMouseDown:w,onMouseMove:p,onMouseUp:k,onWheel:Y}}function Te(i,e){var o=i.x-e.x,u=i.y-e.y;return Math.hypot(o,u)}function on(i,e,o,u){var s=Te(i,o),t=Te(e,u);if(s===0&&t===0)return[i.x,i.y];var v=s/(s+t),r=i.x+v*(e.x-i.x),c=i.y+v*(e.y-i.y);return[r,c]}function an(i,e,o,u,s,t,v){var r=s.rotate,c=s.scale,l=s.x,S=s.y,m=n.useState(!1),_=$(m,2),C=_[0],h=_[1],I=n.useRef({point1:{x:0,y:0},point2:{x:0,y:0},eventType:"none"}),w=function(a){I.current=E(E({},I.current),a)},p=function(a){if(e){a.stopPropagation(),h(!0);var x=a.touches,d=x===void 0?[]:x;d.length>1?w({point1:{x:d[0].clientX,y:d[0].clientY},point2:{x:d[1].clientX,y:d[1].clientY},eventType:"touchZoom"}):w({point1:{x:d[0].clientX-l,y:d[0].clientY-S},eventType:"move"})}},k=function(a){var x=a.touches,d=x===void 0?[]:x,f=I.current,R=f.point1,b=f.point2,g=f.eventType;if(d.length>1&&g==="touchZoom"){var M={x:d[0].clientX,y:d[0].clientY},O={x:d[1].clientX,y:d[1].clientY},N=on(R,b,M,O),D=$(N,2),F=D[0],V=D[1],Z=Te(M,O)/Te(R,b);v(Z,"touchZoom",F,V,!0),w({point1:M,point2:O,eventType:"touchZoom"})}else g==="move"&&(t({x:d[0].clientX-R.x,y:d[0].clientY-R.y},"move"),w({eventType:"move"}))},Y=function(){if(o){if(C&&h(!1),w({eventType:"none"}),u>c)return t({x:0,y:0,scale:u},"touchZoom");var a=i.current.offsetWidth*c,x=i.current.offsetHeight*c,d=i.current.getBoundingClientRect(),f=d.left,R=d.top,b=r%180!==0,g=ze(b?x:a,b?a:x,f,R);g&&t(E({},g),"dragRebound")}};return n.useEffect(function(){var y;return o&&e&&(y=ge(window,"touchmove",function(a){return a.preventDefault()},{passive:!1})),function(){var a;(a=y)===null||a===void 0||a.remove()}},[o,e]),{isTouching:C,onTouchStart:p,onTouchMove:k,onTouchEnd:Y}}var rn=function(e){var o=e.visible,u=e.maskTransitionName,s=e.getContainer,t=e.prefixCls,v=e.rootClassName,r=e.icons,c=e.countRender,l=e.showSwitch,S=e.showProgress,m=e.current,_=e.transform,C=e.count,h=e.scale,I=e.minScale,w=e.maxScale,p=e.closeIcon,k=e.onSwitchLeft,Y=e.onSwitchRight,y=e.onClose,a=e.onZoomIn,x=e.onZoomOut,d=e.onRotateRight,f=e.onRotateLeft,R=e.onFlipX,b=e.onFlipY,g=e.toolbarRender,M=e.zIndex,O=n.useContext(Re),N=r.rotateLeft,D=r.rotateRight,F=r.zoomIn,V=r.zoomOut,Z=r.close,H=r.left,j=r.right,K=r.flipX,G=r.flipY,ee="".concat(t,"-operations-operation");n.useEffect(function(){var P=function(T){T.keyCode===ke.ESC&&y()};return o&&window.addEventListener("keydown",P),function(){window.removeEventListener("keydown",P)}},[o]);var oe=[{icon:G,onClick:b,type:"flipY"},{icon:K,onClick:R,type:"flipX"},{icon:N,onClick:f,type:"rotateLeft"},{icon:D,onClick:d,type:"rotateRight"},{icon:V,onClick:x,type:"zoomOut",disabled:h<=I},{icon:F,onClick:a,type:"zoomIn",disabled:h===w}],z=oe.map(function(P){var X,T=P.icon,J=P.onClick,W=P.type,A=P.disabled;return n.createElement("div",{className:le(ee,(X={},Q(X,"".concat(t,"-operations-operation-").concat(W),!0),Q(X,"".concat(t,"-operations-operation-disabled"),!!A),X)),onClick:J,key:W},T)}),U=n.createElement("div",{className:"".concat(t,"-operations")},z);return n.createElement(Ue,{visible:o,motionName:u},function(P){var X=P.className,T=P.style;return n.createElement(Ke,{open:!0,getContainer:s??document.body},n.createElement("div",{className:le("".concat(t,"-operations-wrapper"),X,v),style:E(E({},T),{},{zIndex:M})},p===null?null:n.createElement("button",{className:"".concat(t,"-close"),onClick:y},p||Z),l&&n.createElement(n.Fragment,null,n.createElement("div",{className:le("".concat(t,"-switch-left"),Q({},"".concat(t,"-switch-left-disabled"),m===0)),onClick:k},H),n.createElement("div",{className:le("".concat(t,"-switch-right"),Q({},"".concat(t,"-switch-right-disabled"),m===C-1)),onClick:Y},j)),n.createElement("div",{className:"".concat(t,"-footer")},S&&n.createElement("div",{className:"".concat(t,"-progress")},c?c(m+1,C):"".concat(m+1," / ").concat(C)),g?g(U,E({icons:{flipYIcon:z[0],flipXIcon:z[1],rotateLeftIcon:z[2],rotateRightIcon:z[3],zoomOutIcon:z[4],zoomInIcon:z[5]},actions:{onFlipY:b,onFlipX:R,onRotateLeft:f,onRotateRight:d,onZoomOut:x,onZoomIn:a},transform:_},O?{current:m,total:C}:{})):U)))})},sn=["fallback","src","imgRef"],cn=["prefixCls","src","alt","fallback","movable","onClose","visible","icons","rootClassName","closeIcon","getContainer","current","count","countRender","scaleStep","minScale","maxScale","transitionName","maskTransitionName","imageRender","imgCommonProps","toolbarRender","onTransform","onChange"],ln=function(e){var o=e.fallback,u=e.src,s=e.imgRef,t=Ce(e,sn),v=Ze({src:u,fallback:o}),r=$(v,2),c=r[0],l=r[1];return ue.createElement("img",fe({ref:function(m){s.current=m,c(m)}},t,l))},Fe=function(e){var o=e.prefixCls,u=e.src,s=e.alt,t=e.fallback,v=e.movable,r=v===void 0?!0:v,c=e.onClose,l=e.visible,S=e.icons,m=S===void 0?{}:S,_=e.rootClassName,C=e.closeIcon,h=e.getContainer,I=e.current,w=I===void 0?0:I,p=e.count,k=p===void 0?1:p,Y=e.countRender,y=e.scaleStep,a=y===void 0?.5:y,x=e.minScale,d=x===void 0?1:x,f=e.maxScale,R=f===void 0?50:f,b=e.transitionName,g=b===void 0?"zoom":b,M=e.maskTransitionName,O=M===void 0?"fade":M,N=e.imageRender,D=e.imgCommonProps,F=e.toolbarRender,V=e.onTransform,Z=e.onChange,H=Ce(e,cn),j=n.useRef(),K=n.useContext(Re),G=K&&k>1,ee=K&&k>=1,oe=n.useState(!0),z=$(oe,2),U=z[0],P=z[1],X=en(j,d,R,V),T=X.transform,J=X.resetTransform,W=X.updateTransform,A=X.dispatchZoomChange,re=tn(j,r,l,a,T,W,A),we=re.isMoving,ve=re.onMouseDown,Se=re.onWheel,B=an(j,r,l,d,T,W,A),ne=B.isTouching,te=B.onTouchStart,ie=B.onTouchMove,ae=B.onTouchEnd,pe=T.rotate,me=T.scale,de=le(Q({},"".concat(o,"-moving"),we));n.useEffect(function(){U||P(!0)},[U]);var _e=function(){J("close")},Pe=function(){A(he+a,"zoomIn")},Ee=function(){A(he/(he+a),"zoomOut")},se=function(){W({rotate:pe+90},"rotateRight")},ce=function(){W({rotate:pe-90},"rotateLeft")},be=function(){W({flipX:!T.flipX},"flipX")},ye=function(){W({flipY:!T.flipY},"flipY")},xe=function(L){L==null||L.preventDefault(),L==null||L.stopPropagation(),w>0&&(P(!1),J("prev"),Z==null||Z(w-1,w))},Le=function(L){L==null||L.preventDefault(),L==null||L.stopPropagation(),w<k-1&&(P(!1),J("next"),Z==null||Z(w+1,w))},Ae=function(L){!l||!G||(L.keyCode===ke.LEFT?xe():L.keyCode===ke.RIGHT&&Le())},Ve=function(L){l&&(me!==1?W({x:0,y:0,scale:1},"doubleClick"):A(he+a,"doubleClick",L.clientX,L.clientY))};n.useEffect(function(){var q=ge(window,"keydown",Ae,!1);return function(){q.remove()}},[l,G,w]);var Ye=ue.createElement(ln,fe({},D,{width:e.width,height:e.height,imgRef:j,className:"".concat(o,"-img"),alt:s,style:{transform:"translate3d(".concat(T.x,"px, ").concat(T.y,"px, 0) scale3d(").concat(T.flipX?"-":"").concat(me,", ").concat(T.flipY?"-":"").concat(me,", 1) rotate(").concat(pe,"deg)"),transitionDuration:(!U||ne)&&"0s"},fallback:t,src:u,onWheel:Se,onMouseDown:ve,onDoubleClick:Ve,onTouchStart:te,onTouchMove:ie,onTouchEnd:ae,onTouchCancel:ae}));return ue.createElement(ue.Fragment,null,ue.createElement(qe,fe({transitionName:g,maskTransitionName:O,closable:!1,keyboard:!0,prefixCls:o,onClose:c,visible:l,classNames:{wrapper:de},rootClassName:_,getContainer:h},H,{afterClose:_e}),ue.createElement("div",{className:"".concat(o,"-img-wrapper")},N?N(Ye,E({transform:T},K?{current:w}:{})):Ye)),ue.createElement(rn,{visible:l,transform:T,maskTransitionName:O,closeIcon:C,getContainer:h,prefixCls:o,rootClassName:_,icons:m,countRender:Y,showSwitch:G,showProgress:ee,current:w,count:k,scale:me,minScale:d,maxScale:R,toolbarRender:F,onSwitchLeft:xe,onSwitchRight:Le,onZoomIn:Pe,onZoomOut:Ee,onRotateRight:se,onRotateLeft:ce,onFlipX:be,onFlipY:ye,onClose:c,zIndex:H.zIndex!==void 0?H.zIndex+1:void 0}))};function un(i){var e=n.useState({}),o=$(e,2),u=o[0],s=o[1],t=n.useCallback(function(r,c){return s(function(l){return E(E({},l),{},Q({},r,c))}),function(){s(function(l){var S=E({},l);return delete S[r],S})}},[]),v=n.useMemo(function(){return i?i.map(function(r){if(typeof r=="string")return{data:{src:r}};var c={};return Object.keys(r).forEach(function(l){["src"].concat(Ge(Ne)).includes(l)&&(c[l]=r[l])}),{data:c}}):Object.keys(u).reduce(function(r,c){var l=u[c],S=l.canPreview,m=l.data;return S&&r.push({data:m,id:c}),r},[])},[i,u]);return[v,t]}var fn=["visible","onVisibleChange","getContainer","current","movable","minScale","maxScale","countRender","closeIcon","onChange","onTransform","toolbarRender","imageRender"],vn=["src"],mn=function(e){var o,u=e.previewPrefixCls,s=u===void 0?"rc-image-preview":u,t=e.children,v=e.icons,r=v===void 0?{}:v,c=e.items,l=e.preview,S=e.fallback,m=De(l)==="object"?l:{},_=m.visible,C=m.onVisibleChange,h=m.getContainer,I=m.current,w=m.movable,p=m.minScale,k=m.maxScale,Y=m.countRender,y=m.closeIcon,a=m.onChange,x=m.onTransform,d=m.toolbarRender,f=m.imageRender,R=Ce(m,fn),b=un(c),g=$(b,2),M=g[0],O=g[1],N=Me(0,{value:I}),D=$(N,2),F=D[0],V=D[1],Z=n.useState(!1),H=$(Z,2),j=H[0],K=H[1],G=((o=M[F])===null||o===void 0?void 0:o.data)||{},ee=G.src,oe=Ce(G,vn),z=Me(!!_,{value:_,onChange:function(ne,te){C==null||C(ne,te,F)}}),U=$(z,2),P=U[0],X=U[1],T=n.useState(null),J=$(T,2),W=J[0],A=J[1],re=n.useCallback(function(B,ne,te){var ie=M.findIndex(function(ae){return ae.id===B});X(!0),A({x:ne,y:te}),V(ie<0?0:ie),K(!0)},[M]);n.useEffect(function(){P?j||V(0):K(!1)},[P]);var we=function(ne,te){V(ne),a==null||a(ne,te)},ve=function(){X(!1),A(null)},Se=n.useMemo(function(){return{register:O,onPreview:re}},[O,re]);return n.createElement(Re.Provider,{value:Se},t,n.createElement(Fe,fe({"aria-hidden":!P,movable:w,visible:P,prefixCls:s,closeIcon:y,onClose:ve,mousePosition:W,imgCommonProps:oe,src:ee,fallback:S,icons:r,minScale:p,maxScale:k,getContainer:h,current:F,count:M.length,countRender:Y,onTransform:x,toolbarRender:d,imageRender:f,onChange:we},R)))},dn=["src","alt","onPreviewClose","prefixCls","previewPrefixCls","placeholder","fallback","width","height","style","preview","className","onClick","onError","wrapperClassName","wrapperStyle","rootClassName"],gn=["src","visible","onVisibleChange","getContainer","mask","maskClassName","movable","icons","scaleStep","minScale","maxScale","imageRender","toolbarRender"],We=function(e){var o=e.src,u=e.alt,s=e.onPreviewClose,t=e.prefixCls,v=t===void 0?"rc-image":t,r=e.previewPrefixCls,c=r===void 0?"".concat(v,"-preview"):r,l=e.placeholder,S=e.fallback,m=e.width,_=e.height,C=e.style,h=e.preview,I=h===void 0?!0:h,w=e.className,p=e.onClick,k=e.onError,Y=e.wrapperClassName,y=e.wrapperStyle,a=e.rootClassName,x=Ce(e,dn),d=l&&l!==!0,f=De(I)==="object"?I:{},R=f.src,b=f.visible,g=b===void 0?void 0:b,M=f.onVisibleChange,O=M===void 0?s:M,N=f.getContainer,D=N===void 0?void 0:N,F=f.mask,V=f.maskClassName,Z=f.movable,H=f.icons,j=f.scaleStep,K=f.minScale,G=f.maxScale,ee=f.imageRender,oe=f.toolbarRender,z=Ce(f,gn),U=R??o,P=Me(!!g,{value:g,onChange:O}),X=$(P,2),T=X[0],J=X[1],W=Ze({src:o,isCustomPlaceholder:d,fallback:S}),A=$(W,3),re=A[0],we=A[1],ve=A[2],Se=n.useState(null),B=$(Se,2),ne=B[0],te=B[1],ie=n.useContext(Re),ae=!!I,pe=function(){J(!1),te(null)},me=le(v,Y,a,Q({},"".concat(v,"-error"),ve==="error")),de=n.useMemo(function(){var se={};return Ne.forEach(function(ce){e[ce]!==void 0&&(se[ce]=e[ce])}),se},Ne.map(function(se){return e[se]})),_e=n.useMemo(function(){return E(E({},de),{},{src:U})},[U,de]),Pe=Je(ae,_e),Ee=function(ce){var be=Be(ce.target),ye=be.left,xe=be.top;ie?ie.onPreview(Pe,ye,xe):(te({x:ye,y:xe}),J(!0)),p==null||p(ce)};return n.createElement(n.Fragment,null,n.createElement("div",fe({},x,{className:me,onClick:ae?Ee:p,style:E({width:m,height:_},y)}),n.createElement("img",fe({},de,{className:le("".concat(v,"-img"),Q({},"".concat(v,"-img-placeholder"),l===!0),w),style:E({height:_},C),ref:re},we,{width:m,height:_,onError:k})),ve==="loading"&&n.createElement("div",{"aria-hidden":"true",className:"".concat(v,"-placeholder")},l),F&&ae&&n.createElement("div",{className:le("".concat(v,"-mask"),V),style:{display:(C==null?void 0:C.display)==="none"?"none":void 0}},F)),!ie&&ae&&n.createElement(Fe,fe({"aria-hidden":!T,visible:T,prefixCls:c,onClose:pe,mousePosition:ne,src:U,alt:u,fallback:S,getContainer:D,icons:H,movable:Z,scaleStep:j,minScale:K,maxScale:G,rootClassName:a,imageRender:ee,imgCommonProps:de,toolbarRender:oe},z)))};We.PreviewGroup=mn;We.displayName="Image";export{We as I};
