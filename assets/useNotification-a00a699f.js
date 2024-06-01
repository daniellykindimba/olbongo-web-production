import{r as a,e$ as w,cQ as ve,f0 as Re,w as B,b as z,eJ as ae,e_ as Ae,R as K,fx as be,c9 as de,bU as O,k as W,fy as Le}from"./index-3fd7f13b.js";var pe=a.forwardRef(function(e,r){var d=e.prefixCls,i=e.style,u=e.className,C=e.duration,k=C===void 0?4.5:C,R=e.eventKey,b=e.content,N=e.closable,P=e.closeIcon,L=P===void 0?"x":P,f=e.props,m=e.onClick,p=e.onNoticeClose,A=e.times,v=e.hovering,H=a.useState(!1),M=w(H,2),E=M[0],g=M[1],S=v||E,c=function(){p(R)},h=function(l){(l.key==="Enter"||l.code==="Enter"||l.keyCode===Ae.ENTER)&&c()};a.useEffect(function(){if(!S&&k>0){var o=setTimeout(function(){c()},k*1e3);return function(){clearTimeout(o)}}},[k,S,A]);var n=a.useMemo(function(){return ve(N)==="object"&&N!==null?N:N?{closeIcon:L}:{}},[N,L]),t=Re(n,!0),s="".concat(d,"-notice");return a.createElement("div",B({},f,{ref:r,className:z(s,u,ae({},"".concat(s,"-closable"),N)),style:i,onMouseEnter:function(l){var y;g(!0),f==null||(y=f.onMouseEnter)===null||y===void 0||y.call(f,l)},onMouseLeave:function(l){var y;g(!1),f==null||(y=f.onMouseLeave)===null||y===void 0||y.call(f,l)},onClick:m}),a.createElement("div",{className:"".concat(s,"-content")},b),N&&a.createElement("a",B({tabIndex:0,className:"".concat(s,"-close"),onKeyDown:h,"aria-label":"Close"},t,{onClick:function(l){l.preventDefault(),l.stopPropagation(),c()}}),n.closeIcon))}),me=K.createContext({}),je=function(r){var d=r.children,i=r.classNames;return K.createElement(me.Provider,{value:{classNames:i}},d)},ce=8,le=3,ue=16,Me=function(r){var d={offset:ce,threshold:le,gap:ue};if(r&&ve(r)==="object"){var i,u,C;d.offset=(i=r.offset)!==null&&i!==void 0?i:ce,d.threshold=(u=r.threshold)!==null&&u!==void 0?u:le,d.gap=(C=r.gap)!==null&&C!==void 0?C:ue}return[!!r,d]},_e=["className","style","classNames","styles"],Pe=function(r){var d=r.configList,i=r.placement,u=r.prefixCls,C=r.className,k=r.style,R=r.motion,b=r.onAllNoticeRemoved,N=r.onNoticeClose,P=r.stack,L=a.useContext(me),f=L.classNames,m=a.useRef({}),p=a.useState(null),A=w(p,2),v=A[0],H=A[1],M=a.useState([]),E=w(M,2),g=E[0],S=E[1],c=d.map(function(x){return{config:x,key:String(x.key)}}),h=Me(P),n=w(h,2),t=n[0],s=n[1],o=s.offset,l=s.threshold,y=s.gap,I=t&&(g.length>0||c.length<=l),V=typeof R=="function"?R(i):R;return a.useEffect(function(){t&&g.length>1&&S(function(x){return x.filter(function(T){return c.some(function(U){var X=U.key;return T===X})})})},[g,c,t]),a.useEffect(function(){var x;if(t&&m.current[(x=c[c.length-1])===null||x===void 0?void 0:x.key]){var T;H(m.current[(T=c[c.length-1])===null||T===void 0?void 0:T.key])}},[c,t]),K.createElement(be,B({key:i,className:z(u,"".concat(u,"-").concat(i),f==null?void 0:f.list,C,ae(ae({},"".concat(u,"-stack"),!!t),"".concat(u,"-stack-expanded"),I)),style:k,keys:c,motionAppear:!0},V,{onAllRemoved:function(){b(i)}}),function(x,T){var U=x.config,X=x.className,ye=x.style,Ce=x.index,re=U,Y=re.key,Ne=re.times,_=String(Y),j=U,ge=j.className,ke=j.style,G=j.classNames,Q=j.styles,he=de(j,_e),Z=c.findIndex(function(J){return J.key===_}),q={};if(t){var F=c.length-1-(Z>-1?Z:Ce-1),ie=i==="top"||i==="bottom"?"-50%":"0";if(F>0){var $,ee,te;q.height=I?($=m.current[_])===null||$===void 0?void 0:$.offsetHeight:v==null?void 0:v.offsetHeight;for(var se=0,ne=0;ne<F;ne++){var oe;se+=((oe=m.current[c[c.length-1-ne].key])===null||oe===void 0?void 0:oe.offsetHeight)+y}var xe=(I?se:F*o)*(i.startsWith("top")?1:-1),Ee=!I&&v!==null&&v!==void 0&&v.offsetWidth&&(ee=m.current[_])!==null&&ee!==void 0&&ee.offsetWidth?((v==null?void 0:v.offsetWidth)-o*2*(F<3?F:3))/((te=m.current[_])===null||te===void 0?void 0:te.offsetWidth):1;q.transform="translate3d(".concat(ie,", ").concat(xe,"px, 0) scaleX(").concat(Ee,")")}else q.transform="translate3d(".concat(ie,", 0, 0)")}return K.createElement("div",{ref:T,className:z("".concat(u,"-notice-wrapper"),X,G==null?void 0:G.wrapper),style:O(O(O({},ye),q),Q==null?void 0:Q.wrapper),onMouseEnter:function(){return S(function(D){return D.includes(_)?D:[].concat(W(D),[_])})},onMouseLeave:function(){return S(function(D){return D.filter(function(Se){return Se!==_})})}},K.createElement(pe,B({},he,{ref:function(D){Z>-1?m.current[_]=D:delete m.current[_]},prefixCls:u,classNames:G,styles:Q,className:z(ge,f==null?void 0:f.notice),style:ke,times:Ne,key:Y,eventKey:Y,onNoticeClose:N,hovering:t&&g.length>0})))})},Ie=a.forwardRef(function(e,r){var d=e.prefixCls,i=d===void 0?"rc-notification":d,u=e.container,C=e.motion,k=e.maxCount,R=e.className,b=e.style,N=e.onAllRemoved,P=e.stack,L=e.renderNotifications,f=a.useState([]),m=w(f,2),p=m[0],A=m[1],v=function(t){var s,o=p.find(function(l){return l.key===t});o==null||(s=o.onClose)===null||s===void 0||s.call(o),A(function(l){return l.filter(function(y){return y.key!==t})})};a.useImperativeHandle(r,function(){return{open:function(t){A(function(s){var o=W(s),l=o.findIndex(function(V){return V.key===t.key}),y=O({},t);if(l>=0){var I;y.times=(((I=s[l])===null||I===void 0?void 0:I.times)||0)+1,o[l]=y}else y.times=0,o.push(y);return k>0&&o.length>k&&(o=o.slice(-k)),o})},close:function(t){v(t)},destroy:function(){A([])}}});var H=a.useState({}),M=w(H,2),E=M[0],g=M[1];a.useEffect(function(){var n={};p.forEach(function(t){var s=t.placement,o=s===void 0?"topRight":s;o&&(n[o]=n[o]||[],n[o].push(t))}),Object.keys(E).forEach(function(t){n[t]=n[t]||[]}),g(n)},[p]);var S=function(t){g(function(s){var o=O({},s),l=o[t]||[];return l.length||delete o[t],o})},c=a.useRef(!1);if(a.useEffect(function(){Object.keys(E).length>0?c.current=!0:c.current&&(N==null||N(),c.current=!1)},[E]),!u)return null;var h=Object.keys(E);return Le.createPortal(a.createElement(a.Fragment,null,h.map(function(n){var t=E[n],s=a.createElement(Pe,{key:n,configList:t,placement:n,prefixCls:i,className:R==null?void 0:R(n),style:b==null?void 0:b(n),motion:C,onNoticeClose:v,onAllNoticeRemoved:S,stack:P});return L?L(s,{prefixCls:i,key:n}):s})),u)}),we=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved","stack","renderNotifications"],He=function(){return document.body},fe=0;function Te(){for(var e={},r=arguments.length,d=new Array(r),i=0;i<r;i++)d[i]=arguments[i];return d.forEach(function(u){u&&Object.keys(u).forEach(function(C){var k=u[C];k!==void 0&&(e[C]=k)})}),e}function Fe(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=e.getContainer,d=r===void 0?He:r,i=e.motion,u=e.prefixCls,C=e.maxCount,k=e.className,R=e.style,b=e.onAllRemoved,N=e.stack,P=e.renderNotifications,L=de(e,we),f=a.useState(),m=w(f,2),p=m[0],A=m[1],v=a.useRef(),H=a.createElement(Ie,{container:p,ref:v,prefixCls:u,motion:i,maxCount:C,className:k,style:R,onAllRemoved:b,stack:N,renderNotifications:P}),M=a.useState([]),E=w(M,2),g=E[0],S=E[1],c=a.useMemo(function(){return{open:function(n){var t=Te(L,n);(t.key===null||t.key===void 0)&&(t.key="rc-notification-".concat(fe),fe+=1),S(function(s){return[].concat(W(s),[{type:"open",config:t}])})},close:function(n){S(function(t){return[].concat(W(t),[{type:"close",key:n}])})},destroy:function(){S(function(n){return[].concat(W(n),[{type:"destroy"}])})}}},[]);return a.useEffect(function(){A(d())}),a.useEffect(function(){v.current&&g.length&&(g.forEach(function(h){switch(h.type){case"open":v.current.open(h.config);break;case"close":v.current.close(h.key);break;case"destroy":v.current.destroy();break}}),S(function(h){return h.filter(function(n){return!g.includes(n)})}))},[g]),[c,H]}export{pe as N,je as a,Fe as u};
