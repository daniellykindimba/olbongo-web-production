import{r as o,eH as I,bH as w,u as L,eI as Q,eJ as q,H as M,eK as K,eL as F,eM as J,eN as W}from"./index-d9f4923f.js";var z=o.forwardRef(function(e,y){var C=e.prefixCls,i=e.style,v=e.className,l=e.duration,s=l===void 0?4.5:l,E=e.eventKey,S=e.content,k=e.closable,A=e.closeIcon,h=A===void 0?"x":A,p=e.props,_=e.onClick,m=e.onNoticeClose,b=e.times,$=o.useState(!1),f=I($,2),d=f[0],g=f[1],N=function(){m(E)},u=function(r){(r.key==="Enter"||r.code==="Enter"||r.keyCode===q.ENTER)&&N()};o.useEffect(function(){if(!d&&s>0){var t=setTimeout(function(){N()},s*1e3);return function(){clearTimeout(t)}}},[s,d,b]);var n="".concat(C,"-notice");return o.createElement("div",w({},p,{ref:y,className:L(n,v,Q({},"".concat(n,"-closable"),k)),style:i,onMouseEnter:function(){g(!0)},onMouseLeave:function(){g(!1)},onClick:_}),o.createElement("div",{className:"".concat(n,"-content")},S),k&&o.createElement("a",{tabIndex:0,className:"".concat(n,"-close"),onKeyDown:u,onClick:function(r){r.preventDefault(),r.stopPropagation(),N()}},h))}),B=o.forwardRef(function(e,y){var C=e.prefixCls,i=C===void 0?"rc-notification":C,v=e.container,l=e.motion,s=e.maxCount,E=e.className,S=e.style,k=e.onAllRemoved,A=o.useState([]),h=I(A,2),p=h[0],_=h[1],m=function(t){var r,a=p.find(function(c){return c.key===t});a==null||(r=a.onClose)===null||r===void 0||r.call(a),_(function(c){return c.filter(function(x){return x.key!==t})})};o.useImperativeHandle(y,function(){return{open:function(t){_(function(r){var a=M(r),c=a.findIndex(function(P){return P.key===t.key}),x=K({},t);if(c>=0){var R;x.times=(((R=r[c])===null||R===void 0?void 0:R.times)||0)+1,a[c]=x}else x.times=0,a.push(x);return s>0&&a.length>s&&(a=a.slice(-s)),a})},close:function(t){m(t)},destroy:function(){_([])}}});var b=o.useState({}),$=I(b,2),f=$[0],d=$[1];o.useEffect(function(){var n={};p.forEach(function(t){var r=t.placement,a=r===void 0?"topRight":r;a&&(n[a]=n[a]||[],n[a].push(t))}),Object.keys(f).forEach(function(t){n[t]=n[t]||[]}),d(n)},[p]);var g=function(t){d(function(r){var a=K({},r),c=a[t]||[];return c.length||delete a[t],a})},N=o.useRef(!1);if(o.useEffect(function(){Object.keys(f).length>0?N.current=!0:N.current&&(k==null||k(),N.current=!1)},[f]),!v)return null;var u=Object.keys(f);return F.createPortal(o.createElement(o.Fragment,null,u.map(function(n){var t=f[n],r=t.map(function(c){return{config:c,key:c.key}}),a=typeof l=="function"?l(n):l;return o.createElement(J,w({key:n,className:L(i,"".concat(i,"-").concat(n),E==null?void 0:E(n)),style:S==null?void 0:S(n),keys:r,motionAppear:!0},a,{onAllRemoved:function(){g(n)}}),function(c,x){var R=c.config,P=c.className,T=c.style,H=R.key,O=R.times,j=R.className,G=R.style;return o.createElement(z,w({},R,{ref:x,prefixCls:i,className:L(P,j),style:K(K({},T),G),times:O,key:H,eventKey:H,onNoticeClose:m}))})})),v)}),U=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved"],V=function(){return document.body},D=0;function X(){for(var e={},y=arguments.length,C=new Array(y),i=0;i<y;i++)C[i]=arguments[i];return C.forEach(function(v){v&&Object.keys(v).forEach(function(l){var s=v[l];s!==void 0&&(e[l]=s)})}),e}function Z(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},y=e.getContainer,C=y===void 0?V:y,i=e.motion,v=e.prefixCls,l=e.maxCount,s=e.className,E=e.style,S=e.onAllRemoved,k=W(e,U),A=o.useState(),h=I(A,2),p=h[0],_=h[1],m=o.useRef(),b=o.createElement(B,{container:p,ref:m,prefixCls:v,motion:i,maxCount:l,className:s,style:E,onAllRemoved:S}),$=o.useState([]),f=I($,2),d=f[0],g=f[1],N=o.useMemo(function(){return{open:function(n){var t=X(k,n);(t.key===null||t.key===void 0)&&(t.key="rc-notification-".concat(D),D+=1),g(function(r){return[].concat(M(r),[{type:"open",config:t}])})},close:function(n){g(function(t){return[].concat(M(t),[{type:"close",key:n}])})},destroy:function(){g(function(n){return[].concat(M(n),[{type:"destroy"}])})}}},[]);return o.useEffect(function(){_(C())}),o.useEffect(function(){m.current&&d.length&&(d.forEach(function(u){switch(u.type){case"open":m.current.open(u.config);break;case"close":m.current.close(u.key);break;case"destroy":m.current.destroy();break}}),g(function(u){return u.filter(function(n){return!d.includes(n)})}))},[d]),[N,b]}export{z as N,Z as u};
