import{r as a,fP as H,db as ve,fJ as Re,k as Y,c as J,fU as ae,fW as Ae,R as F,gy as Le,fY as de,fQ as K,_ as O,gz as be}from"./index-29a13d6d.js";var pe=a.forwardRef(function(e,r){var d=e.prefixCls,i=e.style,u=e.className,C=e.duration,k=C===void 0?4.5:C,R=e.eventKey,L=e.content,N=e.closable,_=e.closeIcon,b=_===void 0?"x":_,f=e.props,m=e.onClick,p=e.onNoticeClose,A=e.times,v=e.hovering,w=a.useState(!1),M=H(w,2),E=M[0],g=M[1],S=v||E,c=function(){p(R)},h=function(l){(l.key==="Enter"||l.code==="Enter"||l.keyCode===Ae.ENTER)&&c()};a.useEffect(function(){if(!S&&k>0){var o=setTimeout(function(){c()},k*1e3);return function(){clearTimeout(o)}}},[k,S,A]);var n=a.useMemo(function(){return ve(N)==="object"&&N!==null?N:N?{closeIcon:b}:{}},[N,b]),t=Re(n,!0),s="".concat(d,"-notice");return a.createElement("div",Y({},f,{ref:r,className:J(s,u,ae({},"".concat(s,"-closable"),N)),style:i,onMouseEnter:function(l){var y;g(!0),f==null||(y=f.onMouseEnter)===null||y===void 0||y.call(f,l)},onMouseLeave:function(l){var y;g(!1),f==null||(y=f.onMouseLeave)===null||y===void 0||y.call(f,l)},onClick:m}),a.createElement("div",{className:"".concat(s,"-content")},L),N&&a.createElement("a",Y({tabIndex:0,className:"".concat(s,"-close"),onKeyDown:h,"aria-label":"Close"},t,{onClick:function(l){l.preventDefault(),l.stopPropagation(),c()}}),n.closeIcon))}),me=F.createContext({}),We=function(r){var d=r.children,i=r.classNames;return F.createElement(me.Provider,{value:{classNames:i}},d)},ce=8,le=3,ue=16,Me=function(r){var d={offset:ce,threshold:le,gap:ue};if(r&&ve(r)==="object"){var i,u,C;d.offset=(i=r.offset)!==null&&i!==void 0?i:ce,d.threshold=(u=r.threshold)!==null&&u!==void 0?u:le,d.gap=(C=r.gap)!==null&&C!==void 0?C:ue}return[!!r,d]},Pe=["className","style","classNames","styles"],_e=function(r){var d=r.configList,i=r.placement,u=r.prefixCls,C=r.className,k=r.style,R=r.motion,L=r.onAllNoticeRemoved,N=r.onNoticeClose,_=r.stack,b=a.useContext(me),f=b.classNames,m=a.useRef({}),p=a.useState(null),A=H(p,2),v=A[0],w=A[1],M=a.useState([]),E=H(M,2),g=E[0],S=E[1],c=d.map(function(x){return{config:x,key:String(x.key)}}),h=Me(_),n=H(h,2),t=n[0],s=n[1],o=s.offset,l=s.threshold,y=s.gap,I=t&&(g.length>0||c.length<=l),B=typeof R=="function"?R(i):R;return a.useEffect(function(){t&&g.length>1&&S(function(x){return x.filter(function(T){return c.some(function(U){var V=U.key;return T===V})})})},[g,c,t]),a.useEffect(function(){var x;if(t&&m.current[(x=c[c.length-1])===null||x===void 0?void 0:x.key]){var T;w(m.current[(T=c[c.length-1])===null||T===void 0?void 0:T.key])}},[c,t]),F.createElement(Le,Y({key:i,className:J(u,"".concat(u,"-").concat(i),f==null?void 0:f.list,C,ae(ae({},"".concat(u,"-stack"),!!t),"".concat(u,"-stack-expanded"),I)),style:k,keys:c,motionAppear:!0},B,{onAllRemoved:function(){L(i)}}),function(x,T){var U=x.config,V=x.className,ye=x.style,Ce=x.index,re=U,X=re.key,Ne=re.times,P=String(X),W=U,ge=W.className,ke=W.style,G=W.classNames,Q=W.styles,he=de(W,Pe),Z=c.findIndex(function(z){return z.key===P}),q={};if(t){var j=c.length-1-(Z>-1?Z:Ce-1),ie=i==="top"||i==="bottom"?"-50%":"0";if(j>0){var $,ee,te;q.height=I?($=m.current[P])===null||$===void 0?void 0:$.offsetHeight:v==null?void 0:v.offsetHeight;for(var se=0,ne=0;ne<j;ne++){var oe;se+=((oe=m.current[c[c.length-1-ne].key])===null||oe===void 0?void 0:oe.offsetHeight)+y}var xe=(I?se:j*o)*(i.startsWith("top")?1:-1),Ee=!I&&v!==null&&v!==void 0&&v.offsetWidth&&(ee=m.current[P])!==null&&ee!==void 0&&ee.offsetWidth?((v==null?void 0:v.offsetWidth)-o*2*(j<3?j:3))/((te=m.current[P])===null||te===void 0?void 0:te.offsetWidth):1;q.transform="translate3d(".concat(ie,", ").concat(xe,"px, 0) scaleX(").concat(Ee,")")}else q.transform="translate3d(".concat(ie,", 0, 0)")}return F.createElement("div",{ref:T,className:J("".concat(u,"-notice-wrapper"),V,G==null?void 0:G.wrapper),style:K(K(K({},ye),q),Q==null?void 0:Q.wrapper),onMouseEnter:function(){return S(function(D){return D.includes(P)?D:[].concat(O(D),[P])})},onMouseLeave:function(){return S(function(D){return D.filter(function(Se){return Se!==P})})}},F.createElement(pe,Y({},he,{ref:function(D){Z>-1?m.current[P]=D:delete m.current[P]},prefixCls:u,classNames:G,styles:Q,className:J(ge,f==null?void 0:f.notice),style:ke,times:Ne,key:X,eventKey:X,onNoticeClose:N,hovering:t&&g.length>0})))})},Ie=a.forwardRef(function(e,r){var d=e.prefixCls,i=d===void 0?"rc-notification":d,u=e.container,C=e.motion,k=e.maxCount,R=e.className,L=e.style,N=e.onAllRemoved,_=e.stack,b=e.renderNotifications,f=a.useState([]),m=H(f,2),p=m[0],A=m[1],v=function(t){var s,o=p.find(function(l){return l.key===t});o==null||(s=o.onClose)===null||s===void 0||s.call(o),A(function(l){return l.filter(function(y){return y.key!==t})})};a.useImperativeHandle(r,function(){return{open:function(t){A(function(s){var o=O(s),l=o.findIndex(function(B){return B.key===t.key}),y=K({},t);if(l>=0){var I;y.times=(((I=s[l])===null||I===void 0?void 0:I.times)||0)+1,o[l]=y}else y.times=0,o.push(y);return k>0&&o.length>k&&(o=o.slice(-k)),o})},close:function(t){v(t)},destroy:function(){A([])}}});var w=a.useState({}),M=H(w,2),E=M[0],g=M[1];a.useEffect(function(){var n={};p.forEach(function(t){var s=t.placement,o=s===void 0?"topRight":s;o&&(n[o]=n[o]||[],n[o].push(t))}),Object.keys(E).forEach(function(t){n[t]=n[t]||[]}),g(n)},[p]);var S=function(t){g(function(s){var o=K({},s),l=o[t]||[];return l.length||delete o[t],o})},c=a.useRef(!1);if(a.useEffect(function(){Object.keys(E).length>0?c.current=!0:c.current&&(N==null||N(),c.current=!1)},[E]),!u)return null;var h=Object.keys(E);return be.createPortal(a.createElement(a.Fragment,null,h.map(function(n){var t=E[n],s=a.createElement(_e,{key:n,configList:t,placement:n,prefixCls:i,className:R==null?void 0:R(n),style:L==null?void 0:L(n),motion:C,onNoticeClose:v,onAllNoticeRemoved:S,stack:_});return b?b(s,{prefixCls:i,key:n}):s})),u)}),He=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved","stack","renderNotifications"],we=function(){return document.body},fe=0;function Te(){for(var e={},r=arguments.length,d=new Array(r),i=0;i<r;i++)d[i]=arguments[i];return d.forEach(function(u){u&&Object.keys(u).forEach(function(C){var k=u[C];k!==void 0&&(e[C]=k)})}),e}function je(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=e.getContainer,d=r===void 0?we:r,i=e.motion,u=e.prefixCls,C=e.maxCount,k=e.className,R=e.style,L=e.onAllRemoved,N=e.stack,_=e.renderNotifications,b=de(e,He),f=a.useState(),m=H(f,2),p=m[0],A=m[1],v=a.useRef(),w=a.createElement(Ie,{container:p,ref:v,prefixCls:u,motion:i,maxCount:C,className:k,style:R,onAllRemoved:L,stack:N,renderNotifications:_}),M=a.useState([]),E=H(M,2),g=E[0],S=E[1],c=a.useMemo(function(){return{open:function(n){var t=Te(b,n);(t.key===null||t.key===void 0)&&(t.key="rc-notification-".concat(fe),fe+=1),S(function(s){return[].concat(O(s),[{type:"open",config:t}])})},close:function(n){S(function(t){return[].concat(O(t),[{type:"close",key:n}])})},destroy:function(){S(function(n){return[].concat(O(n),[{type:"destroy"}])})}}},[]);return a.useEffect(function(){A(d())}),a.useEffect(function(){v.current&&g.length&&(g.forEach(function(h){switch(h.type){case"open":v.current.open(h.config);break;case"close":v.current.close(h.key);break;case"destroy":v.current.destroy();break}}),S(function(h){return h.filter(function(n){return!g.includes(n)})}))},[g]),[c,w]}export{pe as N,We as a,je as u};
