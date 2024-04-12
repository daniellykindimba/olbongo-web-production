import{r as t,fw as T,gO as Ve,fv as _,ft as Q,gH as tt,ak as at,c as ue,j as nt,gD as ot,fB as Ye,fu as pe,gP as _e,R as ve,h as de,_ as rt,cT as He,N as Xe,gQ as it}from"./index-2a194481.js";import{D as st}from"./DialogWrap-8e36c74f.js";var $e=["crossOrigin","decoding","draggable","loading","referrerPolicy","sizes","srcSet","useMap","alt"],ye=t.createContext(null),ze=0;function lt(m,e){var o=t.useState(function(){return ze+=1,String(ze)}),c=T(o,1),f=c[0],a=t.useContext(ye),u={data:e,canPreview:m};return t.useEffect(function(){if(a)return a.register(f,u)},[]),t.useEffect(function(){a&&a.register(f,u)},[m,e]),f}function ct(m){return new Promise(function(e){var o=document.createElement("img");o.onerror=function(){return e(!1)},o.onload=function(){return e(!0)},o.src=m})}function je(m){var e=m.src,o=m.isCustomPlaceholder,c=m.fallback,f=t.useState(o?"loading":"normal"),a=T(f,2),u=a[0],n=a[1],l=t.useRef(!1),i=u==="error";t.useEffect(function(){ct(e).then(function(C){C||n("error")})},[e]),t.useEffect(function(){o&&!l.current?n("loading"):i&&n("normal")},[e]);var b=function(){n("normal")},s=function(d){l.current=!1,u==="loading"&&d!=null&&d.complete&&(d.naturalWidth||d.naturalHeight)&&(l.current=!0,b())},y=i&&c?{src:c}:{onLoad:b,src:e};return[s,y,u]}function We(m,e,o,c){var f=e+o,a=(o-c)/2;if(o>c){if(e>0)return Q({},m,a);if(e<0&&f<c)return Q({},m,-a)}else if(e<0||f>c)return Q({},m,e<0?a:-a);return{}}function ut(m,e,o,c){var f=Ve(),a=f.width,u=f.height,n=null;return m<=a&&e<=u?n={x:0,y:0}:(m>a||e>u)&&(n=_(_({},We("x",o,m,a)),We("y",c,e,u))),n}var Ne={x:0,y:0,rotate:0,scale:1,flipX:!1,flipY:!1};function ft(m,e,o,c){var f=t.useRef(null),a=t.useRef([]),u=t.useState(Ne),n=T(u,2),l=n[0],i=n[1],b=function(d){i(Ne),c&&!tt(Ne,l)&&c({transform:Ne,action:d})},s=function(d,L){f.current===null&&(a.current=[],f.current=at(function(){i(function(h){var w=h;return a.current.forEach(function(R){w=_(_({},w),R)}),f.current=null,c==null||c({transform:w,action:L}),w})})),a.current.push(_(_({},l),d))},y=function(d,L,h,w){var R=m.current,ae=R.width,W=R.height,k=R.offsetWidth,V=R.offsetHeight,H=R.offsetLeft,g=R.offsetTop,N=d,p=l.scale*d;p>o?(N=o/l.scale,p=o):p<e&&(N=e/l.scale,p=e);var A=h??innerWidth/2,O=w??innerHeight/2,Y=N-1,j=Y*ae*.5,J=Y*W*.5,z=Y*(A-l.x-H),K=Y*(O-l.y-g),E=l.x-(z-j),G=l.y-(K-J);if(d<1&&p===1){var D=k*p,F=V*p,U=Ve(),ee=U.width,P=U.height;D<=ee&&F<=P&&(E=0,G=0)}s({x:E,y:G,scale:p},L)};return{transform:l,resetTransform:b,updateTransform:s,dispatchZoomChange:y}}var mt=function(e){var o=e.visible,c=e.maskTransitionName,f=e.getContainer,a=e.prefixCls,u=e.rootClassName,n=e.icons,l=e.countRender,i=e.showSwitch,b=e.showProgress,s=e.current,y=e.transform,C=e.count,d=e.scale,L=e.minScale,h=e.maxScale,w=e.closeIcon,R=e.onSwitchLeft,ae=e.onSwitchRight,W=e.onClose,k=e.onZoomIn,V=e.onZoomOut,H=e.onRotateRight,g=e.onRotateLeft,N=e.onFlipX,p=e.onFlipY,A=e.toolbarRender,O=t.useContext(ye),Y=n.rotateLeft,j=n.rotateRight,J=n.zoomIn,z=n.zoomOut,K=n.close,E=n.left,G=n.right,D=n.flipX,F=n.flipY,U="".concat(a,"-operations-operation");t.useEffect(function(){var S=function(Z){Z.keyCode===Ye.ESC&&W()};return o&&window.addEventListener("keydown",S),function(){window.removeEventListener("keydown",S)}},[o]);var ee=[{icon:F,onClick:p,type:"flipY"},{icon:D,onClick:N,type:"flipX"},{icon:Y,onClick:g,type:"rotateLeft"},{icon:j,onClick:H,type:"rotateRight"},{icon:z,onClick:V,type:"zoomOut",disabled:d===L},{icon:J,onClick:k,type:"zoomIn",disabled:d===h}],P=ee.map(function(S){var I,Z=S.icon,q=S.onClick,v=S.type,oe=S.disabled;return t.createElement("div",{className:ue(U,(I={},Q(I,"".concat(a,"-operations-operation-").concat(v),!0),Q(I,"".concat(a,"-operations-operation-disabled"),!!oe),I)),onClick:q,key:v},Z)}),ne=t.createElement("div",{className:"".concat(a,"-operations")},P);return t.createElement(nt,{visible:o,motionName:c},function(S){var I=S.className,Z=S.style;return t.createElement(ot,{open:!0,getContainer:f??document.body},t.createElement("div",{className:ue("".concat(a,"-operations-wrapper"),I,u),style:Z},w===null?null:t.createElement("button",{className:"".concat(a,"-close"),onClick:W},w||K),i&&t.createElement(t.Fragment,null,t.createElement("div",{className:ue("".concat(a,"-switch-left"),Q({},"".concat(a,"-switch-left-disabled"),s===0)),onClick:R},E),t.createElement("div",{className:ue("".concat(a,"-switch-right"),Q({},"".concat(a,"-switch-right-disabled"),s===C-1)),onClick:ae},G)),t.createElement("div",{className:"".concat(a,"-footer")},b&&t.createElement("div",{className:"".concat(a,"-progress")},l?l(s+1,C):"".concat(s+1," / ").concat(C)),A?A(ne,_({icons:{flipYIcon:P[0],flipXIcon:P[1],rotateLeftIcon:P[2],rotateRightIcon:P[3],zoomOutIcon:P[4],zoomInIcon:P[5]},actions:{onFlipY:p,onFlipX:N,onRotateLeft:g,onRotateRight:H,onZoomOut:V,onZoomIn:k},transform:y},O?{current:s,total:C}:{})):ne)))})},Re=1,vt=1,dt=["fallback","src","imgRef"],gt=["prefixCls","src","alt","fallback","movable","onClose","visible","icons","rootClassName","closeIcon","getContainer","current","count","countRender","scaleStep","minScale","maxScale","transitionName","maskTransitionName","imageRender","imgCommonProps","toolbarRender","onTransform","onChange"],Ct=function(e){var o=e.fallback,c=e.src,f=e.imgRef,a=pe(e,dt),u=je({src:c,fallback:o}),n=T(u,2),l=n[0],i=n[1];return ve.createElement("img",de({ref:function(s){f.current=s,l(s)}},a,i))},Ke=function(e){var o=e.prefixCls,c=e.src,f=e.alt,a=e.fallback,u=e.movable,n=u===void 0?!0:u,l=e.onClose,i=e.visible,b=e.icons,s=b===void 0?{}:b,y=e.rootClassName,C=e.closeIcon,d=e.getContainer,L=e.current,h=L===void 0?0:L,w=e.count,R=w===void 0?1:w,ae=e.countRender,W=e.scaleStep,k=W===void 0?.5:W,V=e.minScale,H=V===void 0?1:V,g=e.maxScale,N=g===void 0?50:g,p=e.transitionName,A=p===void 0?"zoom":p,O=e.maskTransitionName,Y=O===void 0?"fade":O,j=e.imageRender,J=e.imgCommonProps,z=e.toolbarRender,K=e.onTransform,E=e.onChange,G=pe(e,gt),D=t.useRef(),F=t.useRef({deltaX:0,deltaY:0,transformX:0,transformY:0}),U=t.useState(!1),ee=T(U,2),P=ee[0],ne=ee[1],S=t.useContext(ye),I=S&&R>1,Z=S&&R>=1,q=ft(D,H,N,K),v=q.transform,oe=q.resetTransform,X=q.updateTransform,re=q.dispatchZoomChange,xe=t.useState(!0),fe=T(xe,2),me=fe[0],B=fe[1],$=v.rotate,M=v.scale,ie=v.x,se=v.y,Ee=ue(Q({},"".concat(o,"-moving"),P));t.useEffect(function(){me||B(!0)},[me]);var Me=function(){oe("close")},ge=function(){re(Re+k,"zoomIn")},Te=function(){re(Re/(Re+k),"zoomOut")},Le=function(){X({rotate:$+90},"rotateRight")},Oe=function(){X({rotate:$-90},"rotateLeft")},le=function(){X({flipX:!v.flipX},"flipX")},ce=function(){X({flipY:!v.flipY},"flipY")},Pe=function(r){r==null||r.preventDefault(),r==null||r.stopPropagation(),h>0&&(B(!1),oe("prev"),E==null||E(h-1,h))},Ie=function(r){r==null||r.preventDefault(),r==null||r.stopPropagation(),h<R-1&&(B(!1),oe("next"),E==null||E(h+1,h))},ke=function(){if(i&&P){ne(!1);var r=F.current,Ce=r.transformX,he=r.transformY,te=ie!==Ce&&se!==he;if(!te)return;var we=D.current.offsetWidth*M,Se=D.current.offsetHeight*M,be=D.current.getBoundingClientRect(),Je=be.left,et=be.top,Ze=$%180!==0,Ae=ut(Ze?Se:we,Ze?we:Se,Je,et);Ae&&X(_({},Ae),"dragRebound")}},Ue=function(r){!n||r.button!==0||(r.preventDefault(),r.stopPropagation(),F.current={deltaX:r.pageX-v.x,deltaY:r.pageY-v.y,transformX:v.x,transformY:v.y},ne(!0))},De=function(r){i&&P&&X({x:r.pageX-F.current.deltaX,y:r.pageY-F.current.deltaY},"move")},qe=function(r){if(!(!i||r.deltaY==0)){var Ce=Math.abs(r.deltaY/100),he=Math.min(Ce,vt),te=Re+he*k;r.deltaY>0&&(te=Re/te),re(te,"wheel",r.clientX,r.clientY)}},Be=function(r){!i||!I||(r.keyCode===Ye.LEFT?Pe():r.keyCode===Ye.RIGHT&&Ie())},Qe=function(r){i&&(M!==1?X({x:0,y:0,scale:1},"doubleClick"):re(Re+k,"doubleClick",r.clientX,r.clientY))};t.useEffect(function(){var x,r,Ce,he;if(n){Ce=_e(window,"mouseup",ke,!1),he=_e(window,"mousemove",De,!1);try{window.top!==window.self&&(x=_e(window.top,"mouseup",ke,!1),r=_e(window.top,"mousemove",De,!1))}catch{}}return function(){var te,we,Se,be;(te=Ce)===null||te===void 0||te.remove(),(we=he)===null||we===void 0||we.remove(),(Se=x)===null||Se===void 0||Se.remove(),(be=r)===null||be===void 0||be.remove()}},[i,P,ie,se,$,n]),t.useEffect(function(){var x=_e(window,"keydown",Be,!1);return function(){x.remove()}},[i,I,h]);var Fe=ve.createElement(Ct,de({},J,{width:e.width,height:e.height,imgRef:D,className:"".concat(o,"-img"),alt:f,style:{transform:"translate3d(".concat(v.x,"px, ").concat(v.y,"px, 0) scale3d(").concat(v.flipX?"-":"").concat(M,", ").concat(v.flipY?"-":"").concat(M,", 1) rotate(").concat($,"deg)"),transitionDuration:!me&&"0s"},fallback:a,src:c,onWheel:qe,onMouseDown:Ue,onDoubleClick:Qe}));return ve.createElement(ve.Fragment,null,ve.createElement(st,de({transitionName:A,maskTransitionName:Y,closable:!1,keyboard:!0,prefixCls:o,onClose:l,visible:i,wrapClassName:Ee,rootClassName:y,getContainer:d},G,{afterClose:Me}),ve.createElement("div",{className:"".concat(o,"-img-wrapper")},j?j(Fe,_({transform:v},S?{current:h}:{})):Fe)),ve.createElement(mt,{visible:i,transform:v,maskTransitionName:Y,closeIcon:C,getContainer:d,prefixCls:o,rootClassName:y,icons:s,countRender:ae,showSwitch:I,showProgress:Z,current:h,count:R,scale:M,minScale:H,maxScale:N,toolbarRender:z,onSwitchLeft:Pe,onSwitchRight:Ie,onZoomIn:ge,onZoomOut:Te,onRotateRight:Le,onRotateLeft:Oe,onFlipX:le,onFlipY:ce,onClose:l}))};function ht(m){var e=t.useState({}),o=T(e,2),c=o[0],f=o[1],a=t.useCallback(function(n,l){return f(function(i){return _(_({},i),{},Q({},n,l))}),function(){f(function(i){var b=_({},i);return delete b[n],b})}},[]),u=t.useMemo(function(){return m?m.map(function(n){if(typeof n=="string")return{data:{src:n}};var l={};return Object.keys(n).forEach(function(i){["src"].concat(rt($e)).includes(i)&&(l[i]=n[i])}),{data:l}}):Object.keys(c).reduce(function(n,l){var i=c[l],b=i.canPreview,s=i.data;return b&&n.push({data:s,id:l}),n},[])},[m,c]);return[u,a]}var wt=["visible","onVisibleChange","getContainer","current","movable","minScale","maxScale","countRender","closeIcon","onChange","onTransform","toolbarRender","imageRender"],St=["src"],bt=function(e){var o,c=e.previewPrefixCls,f=c===void 0?"rc-image-preview":c,a=e.children,u=e.icons,n=u===void 0?{}:u,l=e.items,i=e.preview,b=e.fallback,s=He(i)==="object"?i:{},y=s.visible,C=s.onVisibleChange,d=s.getContainer,L=s.current,h=s.movable,w=s.minScale,R=s.maxScale,ae=s.countRender,W=s.closeIcon,k=s.onChange,V=s.onTransform,H=s.toolbarRender,g=s.imageRender,N=pe(s,wt),p=ht(l),A=T(p,2),O=A[0],Y=A[1],j=Xe(0,{value:L}),J=T(j,2),z=J[0],K=J[1],E=t.useState(!1),G=T(E,2),D=G[0],F=G[1],U=((o=O[z])===null||o===void 0?void 0:o.data)||{},ee=U.src,P=pe(U,St),ne=Xe(!!y,{value:y,onChange:function($,M){C==null||C($,M,z)}}),S=T(ne,2),I=S[0],Z=S[1],q=t.useState(null),v=T(q,2),oe=v[0],X=v[1],re=t.useCallback(function(B,$,M){var ie=O.findIndex(function(se){return se.id===B});Z(!0),X({x:$,y:M}),K(ie<0?0:ie),F(!0)},[O]);t.useEffect(function(){I?D||K(0):F(!1)},[I]);var xe=function($,M){K($),k==null||k($,M)},fe=function(){Z(!1),X(null)},me=t.useMemo(function(){return{register:Y,onPreview:re}},[Y,re]);return t.createElement(ye.Provider,{value:me},a,t.createElement(Ke,de({"aria-hidden":!I,movable:h,visible:I,prefixCls:f,closeIcon:W,onClose:fe,mousePosition:oe,imgCommonProps:P,src:ee,fallback:b,icons:n,minScale:w,maxScale:R,getContainer:d,current:z,count:O.length,countRender:ae,onTransform:V,toolbarRender:H,imageRender:g,onChange:xe},N)))},Rt=["src","alt","onPreviewClose","prefixCls","previewPrefixCls","placeholder","fallback","width","height","style","preview","className","onClick","onError","wrapperClassName","wrapperStyle","rootClassName"],pt=["src","visible","onVisibleChange","getContainer","mask","maskClassName","movable","icons","scaleStep","minScale","maxScale","imageRender","toolbarRender"],Ge=function(e){var o=e.src,c=e.alt,f=e.onPreviewClose,a=e.prefixCls,u=a===void 0?"rc-image":a,n=e.previewPrefixCls,l=n===void 0?"".concat(u,"-preview"):n,i=e.placeholder,b=e.fallback,s=e.width,y=e.height,C=e.style,d=e.preview,L=d===void 0?!0:d,h=e.className,w=e.onClick,R=e.onError,ae=e.wrapperClassName,W=e.wrapperStyle,k=e.rootClassName,V=pe(e,Rt),H=i&&i!==!0,g=He(L)==="object"?L:{},N=g.src,p=g.visible,A=p===void 0?void 0:p,O=g.onVisibleChange,Y=O===void 0?f:O,j=g.getContainer,J=j===void 0?void 0:j,z=g.mask,K=g.maskClassName,E=g.movable,G=g.icons,D=g.scaleStep,F=g.minScale,U=g.maxScale,ee=g.imageRender,P=g.toolbarRender,ne=pe(g,pt),S=N??o,I=Xe(!!A,{value:A,onChange:Y}),Z=T(I,2),q=Z[0],v=Z[1],oe=je({src:o,isCustomPlaceholder:H,fallback:b}),X=T(oe,3),re=X[0],xe=X[1],fe=X[2],me=t.useState(null),B=T(me,2),$=B[0],M=B[1],ie=t.useContext(ye),se=!!L,Ee=function(){v(!1),M(null)},Me=ue(u,ae,k,Q({},"".concat(u,"-error"),fe==="error")),ge=t.useMemo(function(){var le={};return $e.forEach(function(ce){e[ce]!==void 0&&(le[ce]=e[ce])}),le},$e.map(function(le){return e[le]})),Te=t.useMemo(function(){return _(_({},ge),{},{src:S})},[S,ge]),Le=lt(se,Te),Oe=function(ce){var Pe=it(ce.target),Ie=Pe.left,ke=Pe.top;ie?ie.onPreview(Le,Ie,ke):(M({x:Ie,y:ke}),v(!0)),w==null||w(ce)};return t.createElement(t.Fragment,null,t.createElement("div",de({},V,{className:Me,onClick:se?Oe:w,style:_({width:s,height:y},W)}),t.createElement("img",de({},ge,{className:ue("".concat(u,"-img"),Q({},"".concat(u,"-img-placeholder"),i===!0),h),style:_({height:y},C),ref:re},xe,{width:s,height:y,onError:R})),fe==="loading"&&t.createElement("div",{"aria-hidden":"true",className:"".concat(u,"-placeholder")},i),z&&se&&t.createElement("div",{className:ue("".concat(u,"-mask"),K),style:{display:(C==null?void 0:C.display)==="none"?"none":void 0}},z)),!ie&&se&&t.createElement(Ke,de({"aria-hidden":!q,visible:q,prefixCls:l,onClose:Ee,mousePosition:$,src:S,alt:c,fallback:b,getContainer:J,icons:G,movable:E,scaleStep:D,minScale:F,maxScale:U,rootClassName:k,imageRender:ee,imgCommonProps:ge,toolbarRender:P},ne)))};Ge.PreviewGroup=bt;Ge.displayName="Image";export{Ge as I};
