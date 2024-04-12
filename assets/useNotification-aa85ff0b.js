import{r as o,fw as w,h as M,c as L,ft as Q,fB as q,_ as K,fv as I,gd as B,gb as F,fu as W}from"./index-2a194481.js";var z=o.forwardRef(function(e,y){var C=e.prefixCls,i=e.style,v=e.className,l=e.duration,s=l===void 0?4.5:l,E=e.eventKey,S=e.content,k=e.closable,A=e.closeIcon,h=A===void 0?"x":A,p=e.props,_=e.onClick,m=e.onNoticeClose,b=e.times,$=o.useState(!1),f=w($,2),d=f[0],g=f[1],N=function(){m(E)},u=function(r){(r.key==="Enter"||r.code==="Enter"||r.keyCode===q.ENTER)&&N()};o.useEffect(function(){if(!d&&s>0){var n=setTimeout(function(){N()},s*1e3);return function(){clearTimeout(n)}}},[s,d,b]);var t="".concat(C,"-notice");return o.createElement("div",M({},p,{ref:y,className:L(t,v,Q({},"".concat(t,"-closable"),k)),style:i,onMouseEnter:function(){g(!0)},onMouseLeave:function(){g(!1)},onClick:_}),o.createElement("div",{className:"".concat(t,"-content")},S),k&&o.createElement("a",{tabIndex:0,className:"".concat(t,"-close"),onKeyDown:u,onClick:function(r){r.preventDefault(),r.stopPropagation(),N()}},h))}),J=o.forwardRef(function(e,y){var C=e.prefixCls,i=C===void 0?"rc-notification":C,v=e.container,l=e.motion,s=e.maxCount,E=e.className,S=e.style,k=e.onAllRemoved,A=o.useState([]),h=w(A,2),p=h[0],_=h[1],m=function(n){var r,a=p.find(function(c){return c.key===n});a==null||(r=a.onClose)===null||r===void 0||r.call(a),_(function(c){return c.filter(function(x){return x.key!==n})})};o.useImperativeHandle(y,function(){return{open:function(n){_(function(r){var a=K(r),c=a.findIndex(function(P){return P.key===n.key}),x=I({},n);if(c>=0){var R;x.times=(((R=r[c])===null||R===void 0?void 0:R.times)||0)+1,a[c]=x}else x.times=0,a.push(x);return s>0&&a.length>s&&(a=a.slice(-s)),a})},close:function(n){m(n)},destroy:function(){_([])}}});var b=o.useState({}),$=w(b,2),f=$[0],d=$[1];o.useEffect(function(){var t={};p.forEach(function(n){var r=n.placement,a=r===void 0?"topRight":r;a&&(t[a]=t[a]||[],t[a].push(n))}),Object.keys(f).forEach(function(n){t[n]=t[n]||[]}),d(t)},[p]);var g=function(n){d(function(r){var a=I({},r),c=a[n]||[];return c.length||delete a[n],a})},N=o.useRef(!1);if(o.useEffect(function(){Object.keys(f).length>0?N.current=!0:N.current&&(k==null||k(),N.current=!1)},[f]),!v)return null;var u=Object.keys(f);return B.createPortal(o.createElement(o.Fragment,null,u.map(function(t){var n=f[t],r=n.map(function(c){return{config:c,key:c.key}}),a=typeof l=="function"?l(t):l;return o.createElement(F,M({key:t,className:L(i,"".concat(i,"-").concat(t),E==null?void 0:E(t)),style:S==null?void 0:S(t),keys:r,motionAppear:!0},a,{onAllRemoved:function(){g(t)}}),function(c,x){var R=c.config,P=c.className,O=c.style,D=R.key,j=R.times,H=R.className,G=R.style;return o.createElement(z,M({},R,{ref:x,prefixCls:i,className:L(P,H),style:I(I({},O),G),times:j,key:D,eventKey:D,onNoticeClose:m}))})})),v)}),U=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved"],V=function(){return document.body},T=0;function X(){for(var e={},y=arguments.length,C=new Array(y),i=0;i<y;i++)C[i]=arguments[i];return C.forEach(function(v){v&&Object.keys(v).forEach(function(l){var s=v[l];s!==void 0&&(e[l]=s)})}),e}function Z(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},y=e.getContainer,C=y===void 0?V:y,i=e.motion,v=e.prefixCls,l=e.maxCount,s=e.className,E=e.style,S=e.onAllRemoved,k=W(e,U),A=o.useState(),h=w(A,2),p=h[0],_=h[1],m=o.useRef(),b=o.createElement(J,{container:p,ref:m,prefixCls:v,motion:i,maxCount:l,className:s,style:E,onAllRemoved:S}),$=o.useState([]),f=w($,2),d=f[0],g=f[1],N=o.useMemo(function(){return{open:function(t){var n=X(k,t);(n.key===null||n.key===void 0)&&(n.key="rc-notification-".concat(T),T+=1),g(function(r){return[].concat(K(r),[{type:"open",config:n}])})},close:function(t){g(function(n){return[].concat(K(n),[{type:"close",key:t}])})},destroy:function(){g(function(t){return[].concat(K(t),[{type:"destroy"}])})}}},[]);return o.useEffect(function(){_(C())}),o.useEffect(function(){m.current&&d.length&&(d.forEach(function(u){switch(u.type){case"open":m.current.open(u.config);break;case"close":m.current.close(u.key);break;case"destroy":m.current.destroy();break}}),g(function(u){return u.filter(function(t){return!d.includes(t)})}))},[d]),[N,b]}export{z as N,Z as u};
