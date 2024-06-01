import{R as i,b as ne,e_ as V,r as He,c9 as Ie,e$ as x,a2 as ee,eJ as ae,w as Se,f0 as _e}from"./index-3fd7f13b.js";function xe(e,o){var r=e.disabled,n=e.prefixCls,c=e.character,m=e.characterRender,f=e.index,D=e.count,v=e.value,R=e.allowHalf,h=e.focused,C=e.onHover,H=e.onClick,E=function(g){C(g,f)},k=function(g){H(g,f)},F=function(g){g.keyCode===V.ENTER&&H(g,f)},b=f+1,l=new Set([n]);v===0&&f===0&&h?l.add("".concat(n,"-focused")):R&&v+.5>=b&&v<b?(l.add("".concat(n,"-half")),l.add("".concat(n,"-active")),h&&l.add("".concat(n,"-focused"))):(b<=v?l.add("".concat(n,"-full")):l.add("".concat(n,"-zero")),b===v&&h&&l.add("".concat(n,"-focused")));var I=typeof c=="function"?c(e):c,w=i.createElement("li",{className:ne(Array.from(l)),ref:o},i.createElement("div",{onClick:r?null:k,onKeyDown:r?null:F,onMouseMove:r?null:E,role:"radio","aria-checked":v>f?"true":"false","aria-posinset":f+1,"aria-setsize":D,tabIndex:r?-1:0},i.createElement("div",{className:"".concat(n,"-first")},I),i.createElement("div",{className:"".concat(n,"-second")},I)));return m&&(w=m(w,e)),w}const Ve=i.forwardRef(xe);function ke(){var e=He.useRef({});function o(n){return e.current[n]}function r(n){return function(c){e.current[n]=c}}return[o,r]}function De(e){var o=e.pageXOffset,r="scrollLeft";if(typeof o!="number"){var n=e.document;o=n.documentElement[r],typeof o!="number"&&(o=n.body[r])}return o}function Ee(e){var o,r,n=e.ownerDocument,c=n.body,m=n&&n.documentElement,f=e.getBoundingClientRect();return o=f.left,r=f.top,o-=m.clientLeft||c.clientLeft||0,r-=m.clientTop||c.clientTop||0,{left:o,top:r}}function Fe(e){var o=Ee(e),r=e.ownerDocument,n=r.defaultView||r.parentWindow;return o.left+=De(n),o.left}var Le=["prefixCls","className","defaultValue","value","count","allowHalf","allowClear","character","characterRender","disabled","direction","tabIndex","autoFocus","onHoverChange","onChange","onFocus","onBlur","onKeyDown","onMouseLeave"];function Me(e,o){var r,n=e.prefixCls,c=n===void 0?"rc-rate":n,m=e.className,f=e.defaultValue,D=e.value,v=e.count,R=v===void 0?5:v,h=e.allowHalf,C=h===void 0?!1:h,H=e.allowClear,E=H===void 0?!0:H,k=e.character,F=k===void 0?"★":k,b=e.characterRender,l=e.disabled,I=e.direction,w=I===void 0?"ltr":I,S=e.tabIndex,g=S===void 0?0:S,te=e.autoFocus,y=e.onHoverChange,L=e.onChange,M=e.onFocus,N=e.onBlur,K=e.onKeyDown,$=e.onMouseLeave,re=Ie(e,Le),le=ke(),P=x(le,2),oe=P[0],ue=P[1],T=i.useRef(null),W=function(){if(!l){var a;(a=T.current)===null||a===void 0||a.focus()}};i.useImperativeHandle(o,function(){return{focus:W,blur:function(){if(!l){var a;(a=T.current)===null||a===void 0||a.blur()}}}});var ce=ee(f||0,{value:D}),X=x(ce,2),B=X[0],ie=X[1],fe=ee(null),z=x(fe,2),se=z[0],A=z[1],G=function(a,d){var u=w==="rtl",t=a+1;if(C){var Y=oe(a),Z=Fe(Y),p=Y.clientWidth;(u&&d-Z>p/2||!u&&d-Z<p/2)&&(t-=.5)}return t},_=function(a){ie(a),L==null||L(a)},de=i.useState(!1),O=x(de,2),ve=O[0],j=O[1],Ce=function(){j(!0),M==null||M()},ge=function(){j(!1),N==null||N()},me=i.useState(null),J=x(me,2),q=J[0],Q=J[1],we=function(a,d){var u=G(d,a.pageX);u!==se&&(Q(u),A(null)),y==null||y(u)},U=function(a){l||(Q(null),A(null),y==null||y(void 0)),a&&($==null||$(a))},Re=function(a,d){var u=G(d,a.pageX),t=!1;E&&(t=u===B),U(),_(t?0:u),A(t?u:null)},he=function(a){var d=a.keyCode,u=w==="rtl",t=B;d===V.RIGHT&&t<R&&!u?(C?t+=.5:t+=1,_(t),a.preventDefault()):d===V.LEFT&&t>0&&!u||d===V.RIGHT&&t>0&&u?(C?t-=.5:t-=1,_(t),a.preventDefault()):d===V.LEFT&&t<R&&u&&(C?t+=.5:t+=1,_(t),a.preventDefault()),K==null||K(a)};i.useEffect(function(){te&&!l&&W()},[]);var be=new Array(R).fill(0).map(function(s,a){return i.createElement(Ve,{ref:ue(a),index:a,count:R,disabled:l,prefixCls:"".concat(c,"-star"),allowHalf:C,value:q===null?B:q,onClick:Re,onHover:we,key:s||a,character:F,characterRender:b,focused:ve})}),ye=ne(c,m,(r={},ae(r,"".concat(c,"-disabled"),l),ae(r,"".concat(c,"-rtl"),w==="rtl"),r));return i.createElement("ul",Se({className:ye,onMouseLeave:U,tabIndex:l?-1:g,onFocus:l?null:Ce,onBlur:l?null:ge,onKeyDown:l?null:he,ref:T,role:"radiogroup"},_e(re,{aria:!0,data:!0,attr:!0})),be)}const Ke=i.forwardRef(Me);export{Ke as R};
