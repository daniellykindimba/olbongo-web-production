import{r as n,A as At,w as re,f1 as Dt,e$ as L,R as kt,az as et,bU as J,f2 as Wt,cQ as De,f3 as Gt,f4 as Ht,eJ as F,b as U,f5 as jt,e_ as te,i as Xt,k as tt,eX as Ae,f6 as Kt,c9 as Ee,x as Vt,f7 as Ft,a2 as at,Y as Ut,p as Yt,f8 as nt,d as qt,m as Qt,f as h,e as ft,t as Jt,a9 as bt,a as Zt,h as ea,ag as ta,Q as aa,f9 as na}from"./index-7ac8fc92.js";var ra=function(t,a){return n.createElement(At,re({},t,{ref:a,icon:Dt}))},ia=n.forwardRef(ra);const oa=ia,Pe=n.createContext(null);var la=function(t){var a=t.activeTabOffset,r=t.horizontal,i=t.rtl,l=t.indicator,c=l===void 0?{}:l,o=c.size,s=c.align,d=s===void 0?"center":s,v=n.useState(),f=L(v,2),y=f[0],P=f[1],N=n.useRef(),w=kt.useCallback(function(b){return typeof o=="function"?o(b):typeof o=="number"?o:b},[o]);function z(){et.cancel(N.current)}return n.useEffect(function(){var b={};if(a)if(r){b.width=w(a.width);var u=i?"right":"left";d==="start"&&(b[u]=a[u]),d==="center"&&(b[u]=a[u]+a.width/2,b.transform=i?"translateX(50%)":"translateX(-50%)"),d==="end"&&(b[u]=a[u]+a.width,b.transform="translateX(-100%)")}else b.height=w(a.height),d==="start"&&(b.top=a.top),d==="center"&&(b.top=a.top+a.height/2,b.transform="translateY(-50%)"),d==="end"&&(b.top=a.top+a.height,b.transform="translateY(-100%)");return z(),N.current=et(function(){P(b)}),z},[a,r,i,d,w]),{style:y}},rt={width:0,height:0,left:0,top:0};function ca(e,t,a){return n.useMemo(function(){for(var r,i=new Map,l=t.get((r=e[0])===null||r===void 0?void 0:r.key)||rt,c=l.left+l.width,o=0;o<e.length;o+=1){var s=e[o].key,d=t.get(s);if(!d){var v;d=t.get((v=e[o-1])===null||v===void 0?void 0:v.key)||rt}var f=i.get(s)||J({},d);f.right=c-f.left-f.width,i.set(s,f)}return i},[e.map(function(r){return r.key}).join("_"),t,a])}function it(e,t){var a=n.useRef(e),r=n.useState({}),i=L(r,2),l=i[1];function c(o){var s=typeof o=="function"?o(a.current):o;s!==a.current&&t(s,a.current),a.current=s,l({})}return[a.current,c]}var sa=.1,ot=.01,we=20,lt=Math.pow(.995,we);function da(e,t){var a=n.useState(),r=L(a,2),i=r[0],l=r[1],c=n.useState(0),o=L(c,2),s=o[0],d=o[1],v=n.useState(0),f=L(v,2),y=f[0],P=f[1],N=n.useState(),w=L(N,2),z=w[0],b=w[1],u=n.useRef();function E(p){var R=p.touches[0],$=R.screenX,x=R.screenY;l({x:$,y:x}),window.clearInterval(u.current)}function M(p){if(i){p.preventDefault();var R=p.touches[0],$=R.screenX,x=R.screenY;l({x:$,y:x});var m=$-i.x,C=x-i.y;t(m,C);var Y=Date.now();d(Y),P(Y-s),b({x:m,y:C})}}function A(){if(i&&(l(null),b(null),z)){var p=z.x/y,R=z.y/y,$=Math.abs(p),x=Math.abs(R);if(Math.max($,x)<sa)return;var m=p,C=R;u.current=window.setInterval(function(){if(Math.abs(m)<ot&&Math.abs(C)<ot){window.clearInterval(u.current);return}m*=lt,C*=lt,t(m*we,C*we)},we)}}var W=n.useRef();function D(p){var R=p.deltaX,$=p.deltaY,x=0,m=Math.abs(R),C=Math.abs($);m===C?x=W.current==="x"?R:$:m>C?(x=R,W.current="x"):(x=$,W.current="y"),t(-x,-x)&&p.preventDefault()}var _=n.useRef(null);_.current={onTouchStart:E,onTouchMove:M,onTouchEnd:A,onWheel:D},n.useEffect(function(){function p(m){_.current.onTouchStart(m)}function R(m){_.current.onTouchMove(m)}function $(m){_.current.onTouchEnd(m)}function x(m){_.current.onWheel(m)}return document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",$,{passive:!1}),e.current.addEventListener("touchstart",p,{passive:!1}),e.current.addEventListener("wheel",x),function(){document.removeEventListener("touchmove",R),document.removeEventListener("touchend",$)}},[])}function mt(e){var t=n.useState(0),a=L(t,2),r=a[0],i=a[1],l=n.useRef(0),c=n.useRef();return c.current=e,Wt(function(){var o;(o=c.current)===null||o===void 0||o.call(c)},[r]),function(){l.current===r&&(l.current+=1,i(l.current))}}function ua(e){var t=n.useRef([]),a=n.useState({}),r=L(a,2),i=r[1],l=n.useRef(typeof e=="function"?e():e),c=mt(function(){var s=l.current;t.current.forEach(function(d){s=d(s)}),t.current=[],l.current=s,i({})});function o(s){t.current.push(s),c()}return[l.current,o]}var ct={width:0,height:0,left:0,top:0,right:0};function va(e,t,a,r,i,l,c){var o=c.tabs,s=c.tabPosition,d=c.rtl,v,f,y;return["top","bottom"].includes(s)?(v="width",f=d?"right":"left",y=Math.abs(a)):(v="height",f="top",y=-a),n.useMemo(function(){if(!o.length)return[0,0];for(var P=o.length,N=P,w=0;w<P;w+=1){var z=e.get(o[w].key)||ct;if(z[f]+z[v]>y+t){N=w-1;break}}for(var b=0,u=P-1;u>=0;u-=1){var E=e.get(o[u].key)||ct;if(E[f]<y){b=u+1;break}}return b>=N?[0,0]:[b,N]},[e,t,r,i,l,y,s,o.map(function(P){return P.key}).join("_"),d])}function st(e){var t;return e instanceof Map?(t={},e.forEach(function(a,r){t[r]=a})):t=e,JSON.stringify(t)}var fa="TABS_DQ";function gt(e){return String(e).replace(/"/g,fa)}function ht(e,t,a,r){return!(!a||r||e===!1||e===void 0&&(t===!1||t===null))}var pt=n.forwardRef(function(e,t){var a=e.prefixCls,r=e.editable,i=e.locale,l=e.style;return!r||r.showAdd===!1?null:n.createElement("button",{ref:t,type:"button",className:"".concat(a,"-nav-add"),style:l,"aria-label":(i==null?void 0:i.addAriaLabel)||"Add tab",onClick:function(o){r.onEdit("add",{event:o})}},r.addIcon||"+")}),dt=n.forwardRef(function(e,t){var a=e.position,r=e.prefixCls,i=e.extra;if(!i)return null;var l,c={};return De(i)==="object"&&!n.isValidElement(i)?c=i:c.right=i,a==="right"&&(l=c.right),a==="left"&&(l=c.left),l?n.createElement("div",{className:"".concat(r,"-extra-content"),ref:t},l):null}),ba=n.forwardRef(function(e,t){var a=e.prefixCls,r=e.id,i=e.tabs,l=e.locale,c=e.mobile,o=e.more,s=o===void 0?{}:o,d=e.style,v=e.className,f=e.editable,y=e.tabBarGutter,P=e.rtl,N=e.removeAriaLabel,w=e.onTabClick,z=e.getPopupContainer,b=e.popupClassName,u=n.useState(!1),E=L(u,2),M=E[0],A=E[1],W=n.useState(null),D=L(W,2),_=D[0],p=D[1],R=s.icon,$=R===void 0?"More":R,x="".concat(r,"-more-popup"),m="".concat(a,"-dropdown"),C=_!==null?"".concat(x,"-").concat(_):null,Y=l==null?void 0:l.dropdownAriaLabel;function ie(T,B){T.preventDefault(),T.stopPropagation(),f.onEdit("remove",{key:B,event:T})}var g=n.createElement(Gt,{onClick:function(B){var H=B.key,X=B.domEvent;w(H,X),A(!1)},prefixCls:"".concat(m,"-menu"),id:x,tabIndex:-1,role:"listbox","aria-activedescendant":C,selectedKeys:[_],"aria-label":Y!==void 0?Y:"expanded dropdown"},i.map(function(T){var B=T.closable,H=T.disabled,X=T.closeIcon,V=T.key,Z=T.label,Q=ht(B,X,f,H);return n.createElement(Ht,{key:V,id:"".concat(x,"-").concat(V),role:"option","aria-controls":r&&"".concat(r,"-panel-").concat(V),disabled:H},n.createElement("span",null,Z),Q&&n.createElement("button",{type:"button","aria-label":N||"remove",tabIndex:0,className:"".concat(m,"-menu-item-remove"),onClick:function(le){le.stopPropagation(),ie(le,V)}},X||f.removeIcon||"×"))}));function j(T){for(var B=i.filter(function(Q){return!Q.disabled}),H=B.findIndex(function(Q){return Q.key===_})||0,X=B.length,V=0;V<X;V+=1){H=(H+T+X)%X;var Z=B[H];if(!Z.disabled){p(Z.key);return}}}function ae(T){var B=T.which;if(!M){[te.DOWN,te.SPACE,te.ENTER].includes(B)&&(A(!0),T.preventDefault());return}switch(B){case te.UP:j(-1),T.preventDefault();break;case te.DOWN:j(1),T.preventDefault();break;case te.ESC:A(!1);break;case te.SPACE:case te.ENTER:_!==null&&w(_,T);break}}n.useEffect(function(){var T=document.getElementById(C);T&&T.scrollIntoView&&T.scrollIntoView(!1)},[_]),n.useEffect(function(){M||p(null)},[M]);var G=F({},P?"marginRight":"marginLeft",y);i.length||(G.visibility="hidden",G.order=1);var K=U(F({},"".concat(m,"-rtl"),P)),oe=c?null:n.createElement(jt,re({prefixCls:m,overlay:g,visible:i.length?M:!1,onVisibleChange:A,overlayClassName:U(K,b),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:z},s),n.createElement("button",{type:"button",className:"".concat(a,"-nav-more"),style:G,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":x,id:"".concat(r,"-more"),"aria-expanded":M,onKeyDown:ae},$));return n.createElement("div",{className:U("".concat(a,"-nav-operations"),v),style:d,ref:t},oe,n.createElement(pt,{prefixCls:a,locale:l,editable:f}))});const ma=n.memo(ba,function(e,t){return t.tabMoving});var ga=function(t){var a=t.prefixCls,r=t.id,i=t.active,l=t.tab,c=l.key,o=l.label,s=l.disabled,d=l.closeIcon,v=l.icon,f=t.closable,y=t.renderWrapper,P=t.removeAriaLabel,N=t.editable,w=t.onClick,z=t.onFocus,b=t.style,u="".concat(a,"-tab"),E=ht(f,d,N,s);function M(_){s||w(_)}function A(_){_.preventDefault(),_.stopPropagation(),N.onEdit("remove",{key:c,event:_})}var W=n.useMemo(function(){return v&&typeof o=="string"?n.createElement("span",null,o):o},[o,v]),D=n.createElement("div",{key:c,"data-node-key":gt(c),className:U(u,F(F(F({},"".concat(u,"-with-remove"),E),"".concat(u,"-active"),i),"".concat(u,"-disabled"),s)),style:b,onClick:M},n.createElement("div",{role:"tab","aria-selected":i,id:r&&"".concat(r,"-tab-").concat(c),className:"".concat(u,"-btn"),"aria-controls":r&&"".concat(r,"-panel-").concat(c),"aria-disabled":s,tabIndex:s?null:0,onClick:function(p){p.stopPropagation(),M(p)},onKeyDown:function(p){[te.SPACE,te.ENTER].includes(p.which)&&(p.preventDefault(),M(p))},onFocus:z},v&&n.createElement("span",{className:"".concat(u,"-icon")},v),o&&W),E&&n.createElement("button",{type:"button","aria-label":P||"remove",tabIndex:0,className:"".concat(u,"-remove"),onClick:function(p){p.stopPropagation(),A(p)}},d||N.removeIcon||"×"));return y?y(D):D},ha=function(t,a){var r=t.offsetWidth,i=t.offsetHeight,l=t.offsetTop,c=t.offsetLeft,o=t.getBoundingClientRect(),s=o.width,d=o.height,v=o.x,f=o.y;return Math.abs(s-r)<1?[s,d,v-a.x,f-a.y]:[r,i,c,l]},me=function(t){var a=t.current||{},r=a.offsetWidth,i=r===void 0?0:r,l=a.offsetHeight,c=l===void 0?0:l;if(t.current){var o=t.current.getBoundingClientRect(),s=o.width,d=o.height;if(Math.abs(s-i)<1)return[s,d]}return[i,c]},Te=function(t,a){return t[a?0:1]},ut=n.forwardRef(function(e,t){var a=e.className,r=e.style,i=e.id,l=e.animated,c=e.activeKey,o=e.rtl,s=e.extra,d=e.editable,v=e.locale,f=e.tabPosition,y=e.tabBarGutter,P=e.children,N=e.onTabClick,w=e.onTabScroll,z=e.indicator,b=n.useContext(Pe),u=b.prefixCls,E=b.tabs,M=n.useRef(null),A=n.useRef(null),W=n.useRef(null),D=n.useRef(null),_=n.useRef(null),p=n.useRef(null),R=n.useRef(null),$=f==="top"||f==="bottom",x=it(0,function(O,S){$&&w&&w({direction:O>S?"left":"right"})}),m=L(x,2),C=m[0],Y=m[1],ie=it(0,function(O,S){!$&&w&&w({direction:O>S?"top":"bottom"})}),g=L(ie,2),j=g[0],ae=g[1],G=n.useState([0,0]),K=L(G,2),oe=K[0],T=K[1],B=n.useState([0,0]),H=L(B,2),X=H[0],V=H[1],Z=n.useState([0,0]),Q=L(Z,2),fe=Q[0],le=Q[1],de=n.useState([0,0]),be=L(de,2),I=be[0],ne=be[1],ge=ua(new Map),ke=L(ge,2),yt=ke[0],_t=ke[1],$e=ca(E,yt,X[0]),Re=Te(oe,$),he=Te(X,$),Ie=Te(fe,$),We=Te(I,$),Ge=Re<he+Ie,ee=Ge?Re-We:Re-Ie,xt="".concat(u,"-nav-operations-hidden"),ce=0,ue=0;$&&o?(ce=0,ue=Math.max(0,he-ee)):(ce=Math.min(0,ee-he),ue=0);function Le(O){return O<ce?ce:O>ue?ue:O}var ze=n.useRef(null),Ct=n.useState(),He=L(Ct,2),Se=He[0],je=He[1];function Me(){je(Date.now())}function Ne(){ze.current&&clearTimeout(ze.current)}da(D,function(O,S){function k(q,ve){q(function(se){var xe=Le(se+ve);return xe})}return Ge?($?k(Y,O):k(ae,S),Ne(),Me(),!0):!1}),n.useEffect(function(){return Ne(),Se&&(ze.current=setTimeout(function(){je(0)},100)),Ne},[Se]);var Tt=va($e,ee,$?C:j,he,Ie,We,J(J({},e),{},{tabs:E})),Xe=L(Tt,2),wt=Xe[0],Et=Xe[1],Ke=Xt(function(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:c,S=$e.get(O)||{width:0,height:0,left:0,right:0,top:0};if($){var k=C;o?S.right<C?k=S.right:S.right+S.width>C+ee&&(k=S.right+S.width-ee):S.left<-C?k=-S.left:S.left+S.width>-C+ee&&(k=-(S.left+S.width-ee)),ae(0),Y(Le(k))}else{var q=j;S.top<-j?q=-S.top:S.top+S.height>-j+ee&&(q=-(S.top+S.height-ee)),Y(0),ae(Le(q))}}),ye={};f==="top"||f==="bottom"?ye[o?"marginRight":"marginLeft"]=y:ye.marginTop=y;var Ve=E.map(function(O,S){var k=O.key;return n.createElement(ga,{id:i,prefixCls:u,key:k,tab:O,style:S===0?void 0:ye,closable:O.closable,editable:d,active:k===c,renderWrapper:P,removeAriaLabel:v==null?void 0:v.removeAriaLabel,onClick:function(ve){N(k,ve)},onFocus:function(){Ke(k),Me(),D.current&&(o||(D.current.scrollLeft=0),D.current.scrollTop=0)}})}),Fe=function(){return _t(function(){var S,k=new Map,q=(S=_.current)===null||S===void 0?void 0:S.getBoundingClientRect();return E.forEach(function(ve){var se,xe=ve.key,Ze=(se=_.current)===null||se===void 0?void 0:se.querySelector('[data-node-key="'.concat(gt(xe),'"]'));if(Ze){var zt=ha(Ze,q),Ce=L(zt,4),Mt=Ce[0],Nt=Ce[1],Ot=Ce[2],Bt=Ce[3];k.set(xe,{width:Mt,height:Nt,left:Ot,top:Bt})}}),k})};n.useEffect(function(){Fe()},[E.map(function(O){return O.key}).join("_")]);var _e=mt(function(){var O=me(M),S=me(A),k=me(W);T([O[0]-S[0]-k[0],O[1]-S[1]-k[1]]);var q=me(R);le(q);var ve=me(p);ne(ve);var se=me(_);V([se[0]-q[0],se[1]-q[1]]),Fe()}),Pt=E.slice(0,wt),Rt=E.slice(Et+1),Ue=[].concat(tt(Pt),tt(Rt)),Ye=$e.get(c),It=la({activeTabOffset:Ye,horizontal:$,indicator:z,rtl:o}),Lt=It.style;n.useEffect(function(){Ke()},[c,ce,ue,st(Ye),st($e),$]),n.useEffect(function(){_e()},[o]);var qe=!!Ue.length,pe="".concat(u,"-nav-wrap"),Oe,Be,Qe,Je;return $?o?(Be=C>0,Oe=C!==ue):(Oe=C<0,Be=C!==ce):(Qe=j<0,Je=j!==ce),n.createElement(Ae,{onResize:_e},n.createElement("div",{ref:Kt(t,M),role:"tablist",className:U("".concat(u,"-nav"),a),style:r,onKeyDown:function(){Me()}},n.createElement(dt,{ref:A,position:"left",extra:s,prefixCls:u}),n.createElement(Ae,{onResize:_e},n.createElement("div",{className:U(pe,F(F(F(F({},"".concat(pe,"-ping-left"),Oe),"".concat(pe,"-ping-right"),Be),"".concat(pe,"-ping-top"),Qe),"".concat(pe,"-ping-bottom"),Je)),ref:D},n.createElement(Ae,{onResize:_e},n.createElement("div",{ref:_,className:"".concat(u,"-nav-list"),style:{transform:"translate(".concat(C,"px, ").concat(j,"px)"),transition:Se?"none":void 0}},Ve,n.createElement(pt,{ref:R,prefixCls:u,locale:v,editable:d,style:J(J({},Ve.length===0?void 0:ye),{},{visibility:qe?"hidden":null})}),n.createElement("div",{className:U("".concat(u,"-ink-bar"),F({},"".concat(u,"-ink-bar-animated"),l.inkBar)),style:Lt}))))),n.createElement(ma,re({},e,{removeAriaLabel:v==null?void 0:v.removeAriaLabel,ref:p,prefixCls:u,tabs:Ue,className:!qe&&xt,tabMoving:!!Se})),n.createElement(dt,{ref:W,position:"right",extra:s,prefixCls:u})))}),$t=n.forwardRef(function(e,t){var a=e.prefixCls,r=e.className,i=e.style,l=e.id,c=e.active,o=e.tabKey,s=e.children;return n.createElement("div",{id:l&&"".concat(l,"-panel-").concat(o),role:"tabpanel",tabIndex:c?0:-1,"aria-labelledby":l&&"".concat(l,"-tab-").concat(o),"aria-hidden":!c,style:i,className:U(a,c&&"".concat(a,"-active"),r),ref:t},s)}),pa=["renderTabBar"],$a=["label","key"],Sa=function(t){var a=t.renderTabBar,r=Ee(t,pa),i=n.useContext(Pe),l=i.tabs;if(a){var c=J(J({},r),{},{panes:l.map(function(o){var s=o.label,d=o.key,v=Ee(o,$a);return n.createElement($t,re({tab:s,key:d,tabKey:d},v))})});return a(c,ut)}return n.createElement(ut,r)},ya=["key","forceRender","style","className","destroyInactiveTabPane"],_a=function(t){var a=t.id,r=t.activeKey,i=t.animated,l=t.tabPosition,c=t.destroyInactiveTabPane,o=n.useContext(Pe),s=o.prefixCls,d=o.tabs,v=i.tabPane,f="".concat(s,"-tabpane");return n.createElement("div",{className:U("".concat(s,"-content-holder"))},n.createElement("div",{className:U("".concat(s,"-content"),"".concat(s,"-content-").concat(l),F({},"".concat(s,"-content-animated"),v))},d.map(function(y){var P=y.key,N=y.forceRender,w=y.style,z=y.className,b=y.destroyInactiveTabPane,u=Ee(y,ya),E=P===r;return n.createElement(Vt,re({key:P,visible:E,forceRender:N,removeOnLeave:!!(c||b),leavedClassName:"".concat(f,"-hidden")},i.tabPaneMotion),function(M,A){var W=M.style,D=M.className;return n.createElement($t,re({},u,{prefixCls:f,id:a,tabKey:P,animated:v,active:E,style:J(J({},w),W),className:U(z,D),ref:A}))})})))};function xa(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{inkBar:!0,tabPane:!1},t;return e===!1?t={inkBar:!1,tabPane:!1}:e===!0?t={inkBar:!0,tabPane:!1}:t=J({inkBar:!0},De(e)==="object"?e:{}),t.tabPaneMotion&&t.tabPane===void 0&&(t.tabPane=!0),!t.tabPaneMotion&&t.tabPane&&(t.tabPane=!1),t}var Ca=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","more","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName","indicator"],vt=0,Ta=n.forwardRef(function(e,t){var a=e.id,r=e.prefixCls,i=r===void 0?"rc-tabs":r,l=e.className,c=e.items,o=e.direction,s=e.activeKey,d=e.defaultActiveKey,v=e.editable,f=e.animated,y=e.tabPosition,P=y===void 0?"top":y,N=e.tabBarGutter,w=e.tabBarStyle,z=e.tabBarExtraContent,b=e.locale,u=e.more,E=e.destroyInactiveTabPane,M=e.renderTabBar,A=e.onChange,W=e.onTabClick,D=e.onTabScroll,_=e.getPopupContainer,p=e.popupClassName,R=e.indicator,$=Ee(e,Ca),x=n.useMemo(function(){return(c||[]).filter(function(I){return I&&De(I)==="object"&&"key"in I})},[c]),m=o==="rtl",C=xa(f),Y=n.useState(!1),ie=L(Y,2),g=ie[0],j=ie[1];n.useEffect(function(){j(Ft())},[]);var ae=at(function(){var I;return(I=x[0])===null||I===void 0?void 0:I.key},{value:s,defaultValue:d}),G=L(ae,2),K=G[0],oe=G[1],T=n.useState(function(){return x.findIndex(function(I){return I.key===K})}),B=L(T,2),H=B[0],X=B[1];n.useEffect(function(){var I=x.findIndex(function(ge){return ge.key===K});if(I===-1){var ne;I=Math.max(0,Math.min(H,x.length-1)),oe((ne=x[I])===null||ne===void 0?void 0:ne.key)}X(I)},[x.map(function(I){return I.key}).join("_"),K,H]);var V=at(null,{value:a}),Z=L(V,2),Q=Z[0],fe=Z[1];n.useEffect(function(){a||(fe("rc-tabs-".concat(vt)),vt+=1)},[]);function le(I,ne){W==null||W(I,ne);var ge=I!==K;oe(I),ge&&(A==null||A(I))}var de={id:Q,activeKey:K,animated:C,tabPosition:P,rtl:m,mobile:g},be=J(J({},de),{},{editable:v,locale:b,more:u,tabBarGutter:N,onTabClick:le,onTabScroll:D,extra:z,style:w,panes:null,getPopupContainer:_,popupClassName:p,indicator:R});return n.createElement(Pe.Provider,{value:{tabs:x,prefixCls:i}},n.createElement("div",re({ref:t,id:a,className:U(i,"".concat(i,"-").concat(P),F(F(F({},"".concat(i,"-mobile"),g),"".concat(i,"-editable"),v),"".concat(i,"-rtl"),m),l)},$),n.createElement(Sa,re({},be,{renderTabBar:M})),n.createElement(_a,re({destroyInactiveTabPane:E},de,{animated:C}))))});const wa={motionAppear:!1,motionEnter:!0,motionLeave:!0};function Ea(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{inkBar:!0,tabPane:!1},a;return t===!1?a={inkBar:!1,tabPane:!1}:t===!0?a={inkBar:!0,tabPane:!0}:a=Object.assign({inkBar:!0},typeof t=="object"?t:{}),a.tabPane&&(a.tabPaneMotion=Object.assign(Object.assign({},wa),{motionName:Ut(e,"switch")})),a}var Pa=globalThis&&globalThis.__rest||function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(a[r[i]]=e[r[i]]);return a};function Ra(e){return e.filter(t=>t)}function Ia(e,t){if(e)return e;const a=Yt(t).map(r=>{if(n.isValidElement(r)){const{key:i,props:l}=r,c=l||{},{tab:o}=c,s=Pa(c,["tab"]);return Object.assign(Object.assign({key:String(i)},s),{label:o})}return null});return Ra(a)}const La=e=>{const{componentCls:t,motionDurationSlow:a}=e;return[{[t]:{[`${t}-switch`]:{"&-appear, &-enter":{transition:"none","&-start":{opacity:0},"&-active":{opacity:1,transition:`opacity ${a}`}},"&-leave":{position:"absolute",transition:"none",inset:0,"&-start":{opacity:1},"&-active":{opacity:0,transition:`opacity ${a}`}}}}},[nt(e,"slide-up"),nt(e,"slide-down")]]},za=La,Ma=e=>{const{componentCls:t,tabsCardPadding:a,cardBg:r,cardGutter:i,colorBorderSecondary:l,itemSelectedColor:c}=e;return{[`${t}-card`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{margin:0,padding:a,background:r,border:`${h(e.lineWidth)} ${e.lineType} ${l}`,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`},[`${t}-tab-active`]:{color:c,background:e.colorBgContainer},[`${t}-ink-bar`]:{visibility:"hidden"}},[`&${t}-top, &${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginLeft:{_skip_check_:!0,value:h(i)}}}},[`&${t}-top`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`${h(e.borderRadiusLG)} ${h(e.borderRadiusLG)} 0 0`},[`${t}-tab-active`]:{borderBottomColor:e.colorBgContainer}}},[`&${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`0 0 ${h(e.borderRadiusLG)} ${h(e.borderRadiusLG)}`},[`${t}-tab-active`]:{borderTopColor:e.colorBgContainer}}},[`&${t}-left, &${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginTop:h(i)}}},[`&${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${h(e.borderRadiusLG)} 0 0 ${h(e.borderRadiusLG)}`}},[`${t}-tab-active`]:{borderRightColor:{_skip_check_:!0,value:e.colorBgContainer}}}},[`&${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${h(e.borderRadiusLG)} ${h(e.borderRadiusLG)} 0`}},[`${t}-tab-active`]:{borderLeftColor:{_skip_check_:!0,value:e.colorBgContainer}}}}}}},Na=e=>{const{componentCls:t,itemHoverColor:a,dropdownEdgeChildVerticalPadding:r}=e;return{[`${t}-dropdown`]:Object.assign(Object.assign({},ft(e)),{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:e.zIndexPopup,display:"block","&-hidden":{display:"none"},[`${t}-dropdown-menu`]:{maxHeight:e.tabsDropdownHeight,margin:0,padding:`${h(r)} 0`,overflowX:"hidden",overflowY:"auto",textAlign:{_skip_check_:!0,value:"left"},listStyleType:"none",backgroundColor:e.colorBgContainer,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary,"&-item":Object.assign(Object.assign({},Jt),{display:"flex",alignItems:"center",minWidth:e.tabsDropdownWidth,margin:0,padding:`${h(e.paddingXXS)} ${h(e.paddingSM)}`,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"> span":{flex:1,whiteSpace:"nowrap"},"&-remove":{flex:"none",marginLeft:{_skip_check_:!0,value:e.marginSM},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:0,cursor:"pointer","&:hover":{color:a}},"&:hover":{background:e.controlItemBgHover},"&-disabled":{"&, &:hover":{color:e.colorTextDisabled,background:"transparent",cursor:"not-allowed"}}})}})}},Oa=e=>{const{componentCls:t,margin:a,colorBorderSecondary:r,horizontalMargin:i,verticalItemPadding:l,verticalItemMargin:c,calc:o}=e;return{[`${t}-top, ${t}-bottom`]:{flexDirection:"column",[`> ${t}-nav, > div > ${t}-nav`]:{margin:i,"&::before":{position:"absolute",right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},borderBottom:`${h(e.lineWidth)} ${e.lineType} ${r}`,content:"''"},[`${t}-ink-bar`]:{height:e.lineWidthBold,"&-animated":{transition:`width ${e.motionDurationSlow}, left ${e.motionDurationSlow},
            right ${e.motionDurationSlow}`}},[`${t}-nav-wrap`]:{"&::before, &::after":{top:0,bottom:0,width:e.controlHeight},"&::before":{left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowLeft},"&::after":{right:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowRight},[`&${t}-nav-wrap-ping-left::before`]:{opacity:1},[`&${t}-nav-wrap-ping-right::after`]:{opacity:1}}}},[`${t}-top`]:{[`> ${t}-nav,
        > div > ${t}-nav`]:{"&::before":{bottom:0},[`${t}-ink-bar`]:{bottom:0}}},[`${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,marginTop:a,marginBottom:0,"&::before":{top:0},[`${t}-ink-bar`]:{top:0}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0}},[`${t}-left, ${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{flexDirection:"column",minWidth:o(e.controlHeight).mul(1.25).equal(),[`${t}-tab`]:{padding:l,textAlign:"center"},[`${t}-tab + ${t}-tab`]:{margin:c},[`${t}-nav-wrap`]:{flexDirection:"column","&::before, &::after":{right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},height:e.controlHeight},"&::before":{top:0,boxShadow:e.boxShadowTabsOverflowTop},"&::after":{bottom:0,boxShadow:e.boxShadowTabsOverflowBottom},[`&${t}-nav-wrap-ping-top::before`]:{opacity:1},[`&${t}-nav-wrap-ping-bottom::after`]:{opacity:1}},[`${t}-ink-bar`]:{width:e.lineWidthBold,"&-animated":{transition:`height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`}},[`${t}-nav-list, ${t}-nav-operations`]:{flex:"1 0 auto",flexDirection:"column"}}},[`${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-ink-bar`]:{right:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{marginLeft:{_skip_check_:!0,value:h(o(e.lineWidth).mul(-1).equal())},borderLeft:{_skip_check_:!0,value:`${h(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingLeft:{_skip_check_:!0,value:e.paddingLG}}}},[`${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,[`${t}-ink-bar`]:{left:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0,marginRight:{_skip_check_:!0,value:o(e.lineWidth).mul(-1).equal()},borderRight:{_skip_check_:!0,value:`${h(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingRight:{_skip_check_:!0,value:e.paddingLG}}}}}},Ba=e=>{const{componentCls:t,cardPaddingSM:a,cardPaddingLG:r,horizontalItemPaddingSM:i,horizontalItemPaddingLG:l}=e;return{[t]:{"&-small":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:i,fontSize:e.titleFontSizeSM}}},"&-large":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:l,fontSize:e.titleFontSizeLG}}}},[`${t}-card`]:{[`&${t}-small`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:a}},[`&${t}-bottom`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`0 0 ${h(e.borderRadius)} ${h(e.borderRadius)}`}},[`&${t}-top`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`${h(e.borderRadius)} ${h(e.borderRadius)} 0 0`}},[`&${t}-right`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${h(e.borderRadius)} ${h(e.borderRadius)} 0`}}},[`&${t}-left`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${h(e.borderRadius)} 0 0 ${h(e.borderRadius)}`}}}},[`&${t}-large`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:r}}}}}},Aa=e=>{const{componentCls:t,itemActiveColor:a,itemHoverColor:r,iconCls:i,tabsHorizontalItemMargin:l,horizontalItemPadding:c,itemSelectedColor:o,itemColor:s}=e,d=`${t}-tab`;return{[d]:{position:"relative",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent",display:"inline-flex",alignItems:"center",padding:c,fontSize:e.titleFontSize,background:"transparent",border:0,outline:"none",cursor:"pointer",color:s,"&-btn, &-remove":Object.assign({"&:focus:not(:focus-visible), &:active":{color:a}},bt(e)),"&-btn":{outline:"none",transition:`all ${e.motionDurationSlow}`,[`${d}-icon:not(:last-child)`]:{marginInlineEnd:e.marginSM}},"&-remove":{flex:"none",marginRight:{_skip_check_:!0,value:e.calc(e.marginXXS).mul(-1).equal()},marginLeft:{_skip_check_:!0,value:e.marginXS},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:"none",outline:"none",cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"&:hover":{color:e.colorTextHeading}},"&:hover":{color:r},[`&${d}-active ${d}-btn`]:{color:o,textShadow:e.tabsActiveTextShadow},[`&${d}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed"},[`&${d}-disabled ${d}-btn, &${d}-disabled ${t}-remove`]:{"&:focus, &:active":{color:e.colorTextDisabled}},[`& ${d}-remove ${i}`]:{margin:0},[`${i}:not(:last-child)`]:{marginRight:{_skip_check_:!0,value:e.marginSM}}},[`${d} + ${d}`]:{margin:{_skip_check_:!0,value:l}}}},Da=e=>{const{componentCls:t,tabsHorizontalItemMarginRTL:a,iconCls:r,cardGutter:i,calc:l}=e;return{[`${t}-rtl`]:{direction:"rtl",[`${t}-nav`]:{[`${t}-tab`]:{margin:{_skip_check_:!0,value:a},[`${t}-tab:last-of-type`]:{marginLeft:{_skip_check_:!0,value:0}},[r]:{marginRight:{_skip_check_:!0,value:0},marginLeft:{_skip_check_:!0,value:h(e.marginSM)}},[`${t}-tab-remove`]:{marginRight:{_skip_check_:!0,value:h(e.marginXS)},marginLeft:{_skip_check_:!0,value:h(l(e.marginXXS).mul(-1).equal())},[r]:{margin:0}}}},[`&${t}-left`]:{[`> ${t}-nav`]:{order:1},[`> ${t}-content-holder`]:{order:0}},[`&${t}-right`]:{[`> ${t}-nav`]:{order:0},[`> ${t}-content-holder`]:{order:1}},[`&${t}-card${t}-top, &${t}-card${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginRight:{_skip_check_:!0,value:i},marginLeft:{_skip_check_:!0,value:0}}}}},[`${t}-dropdown-rtl`]:{direction:"rtl"},[`${t}-menu-item`]:{[`${t}-dropdown-rtl`]:{textAlign:{_skip_check_:!0,value:"right"}}}}},ka=e=>{const{componentCls:t,tabsCardPadding:a,cardHeight:r,cardGutter:i,itemHoverColor:l,itemActiveColor:c,colorBorderSecondary:o}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},ft(e)),{display:"flex",[`> ${t}-nav, > div > ${t}-nav`]:{position:"relative",display:"flex",flex:"none",alignItems:"center",[`${t}-nav-wrap`]:{position:"relative",display:"flex",flex:"auto",alignSelf:"stretch",overflow:"hidden",whiteSpace:"nowrap",transform:"translate(0)","&::before, &::after":{position:"absolute",zIndex:1,opacity:0,transition:`opacity ${e.motionDurationSlow}`,content:"''",pointerEvents:"none"}},[`${t}-nav-list`]:{position:"relative",display:"flex",transition:`opacity ${e.motionDurationSlow}`},[`${t}-nav-operations`]:{display:"flex",alignSelf:"stretch"},[`${t}-nav-operations-hidden`]:{position:"absolute",visibility:"hidden",pointerEvents:"none"},[`${t}-nav-more`]:{position:"relative",padding:a,background:"transparent",border:0,color:e.colorText,"&::after":{position:"absolute",right:{_skip_check_:!0,value:0},bottom:0,left:{_skip_check_:!0,value:0},height:e.calc(e.controlHeightLG).div(8).equal(),transform:"translateY(100%)",content:"''"}},[`${t}-nav-add`]:Object.assign({minWidth:r,minHeight:r,marginLeft:{_skip_check_:!0,value:i},padding:`0 ${h(e.paddingXS)}`,background:"transparent",border:`${h(e.lineWidth)} ${e.lineType} ${o}`,borderRadius:`${h(e.borderRadiusLG)} ${h(e.borderRadiusLG)} 0 0`,outline:"none",cursor:"pointer",color:e.colorText,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&:hover":{color:l},"&:active, &:focus:not(:focus-visible)":{color:c}},bt(e))},[`${t}-extra-content`]:{flex:"none"},[`${t}-ink-bar`]:{position:"absolute",background:e.inkBarColor,pointerEvents:"none"}}),Aa(e)),{[`${t}-content`]:{position:"relative",width:"100%"},[`${t}-content-holder`]:{flex:"auto",minWidth:0,minHeight:0},[`${t}-tabpane`]:{outline:"none","&-hidden":{display:"none"}}}),[`${t}-centered`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-nav-wrap`]:{[`&:not([class*='${t}-nav-wrap-ping'])`]:{justifyContent:"center"}}}}}},Wa=e=>{const t=e.controlHeightLG;return{zIndexPopup:e.zIndexPopupBase+50,cardBg:e.colorFillAlter,cardHeight:t,cardPadding:`${(t-Math.round(e.fontSize*e.lineHeight))/2-e.lineWidth}px ${e.padding}px`,cardPaddingSM:`${e.paddingXXS*1.5}px ${e.padding}px`,cardPaddingLG:`${e.paddingXS}px ${e.padding}px ${e.paddingXXS*1.5}px`,titleFontSize:e.fontSize,titleFontSizeLG:e.fontSizeLG,titleFontSizeSM:e.fontSize,inkBarColor:e.colorPrimary,horizontalMargin:`0 0 ${e.margin}px 0`,horizontalItemGutter:32,horizontalItemMargin:"",horizontalItemMarginRTL:"",horizontalItemPadding:`${e.paddingSM}px 0`,horizontalItemPaddingSM:`${e.paddingXS}px 0`,horizontalItemPaddingLG:`${e.padding}px 0`,verticalItemPadding:`${e.paddingXS}px ${e.paddingLG}px`,verticalItemMargin:`${e.margin}px 0 0 0`,itemColor:e.colorText,itemSelectedColor:e.colorPrimary,itemHoverColor:e.colorPrimaryHover,itemActiveColor:e.colorPrimaryActive,cardGutter:e.marginXXS/2}},Ga=qt("Tabs",e=>{const t=Qt(e,{tabsCardPadding:e.cardPadding,dropdownEdgeChildVerticalPadding:e.paddingXXS,tabsActiveTextShadow:"0 0 0.25px currentcolor",tabsDropdownHeight:200,tabsDropdownWidth:120,tabsHorizontalItemMargin:`0 0 0 ${h(e.horizontalItemGutter)}`,tabsHorizontalItemMarginRTL:`0 0 0 ${h(e.horizontalItemGutter)}`});return[Ba(t),Da(t),Oa(t),Na(t),Ma(t),ka(t),za(t)]},Wa),Ha=()=>null,ja=Ha;var Xa=globalThis&&globalThis.__rest||function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(a[r[i]]=e[r[i]]);return a};const St=e=>{var t,a,r,i,l,c,o,s,d,v,f;const{type:y,className:P,rootClassName:N,size:w,onEdit:z,hideAdd:b,centered:u,addIcon:E,removeIcon:M,moreIcon:A,more:W,popupClassName:D,children:_,items:p,animated:R,style:$,indicatorSize:x,indicator:m}=e,C=Xa(e,["type","className","rootClassName","size","onEdit","hideAdd","centered","addIcon","removeIcon","moreIcon","more","popupClassName","children","items","animated","style","indicatorSize","indicator"]),{prefixCls:Y}=C,{direction:ie,tabs:g,getPrefixCls:j,getPopupContainer:ae}=n.useContext(Zt),G=j("tabs",Y),K=ea(G),[oe,T,B]=Ga(G,K);let H;y==="editable-card"&&(H={onEdit:(de,be)=>{let{key:I,event:ne}=be;z==null||z(de==="add"?ne:I,de)},removeIcon:(t=M??(g==null?void 0:g.removeIcon))!==null&&t!==void 0?t:n.createElement(ta,null),addIcon:(E??(g==null?void 0:g.addIcon))||n.createElement(oa,null),showAdd:b!==!0});const X=j(),V=aa(w),Z=Ia(p,_),Q=Ea(G,R),fe=Object.assign(Object.assign({},g==null?void 0:g.style),$),le={align:(a=m==null?void 0:m.align)!==null&&a!==void 0?a:(r=g==null?void 0:g.indicator)===null||r===void 0?void 0:r.align,size:(o=(l=(i=m==null?void 0:m.size)!==null&&i!==void 0?i:x)!==null&&l!==void 0?l:(c=g==null?void 0:g.indicator)===null||c===void 0?void 0:c.size)!==null&&o!==void 0?o:g==null?void 0:g.indicatorSize};return oe(n.createElement(Ta,Object.assign({direction:ie,getPopupContainer:ae},C,{items:Z,className:U({[`${G}-${V}`]:V,[`${G}-card`]:["card","editable-card"].includes(y),[`${G}-editable-card`]:y==="editable-card",[`${G}-centered`]:u},g==null?void 0:g.className,P,N,T,B,K),popupClassName:U(D,T,B,K),style:fe,editable:H,more:Object.assign({icon:(f=(v=(d=(s=g==null?void 0:g.more)===null||s===void 0?void 0:s.icon)!==null&&d!==void 0?d:g==null?void 0:g.moreIcon)!==null&&v!==void 0?v:A)!==null&&f!==void 0?f:n.createElement(na,null),transitionName:`${X}-slide-up`},W),prefixCls:G,animated:Q,indicator:le})))};St.TabPane=ja;const Va=St;export{Va as T,Ta as a};
