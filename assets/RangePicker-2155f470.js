import{ge as Hr,g2 as _t,r as t,eJ as g,eL as xn,eD as nt,eW as tt,eX as Br,f_ as Kr,u as pe,eK as T,b6 as Lt,O as $r,eE as At,eF as Ft,eG as Ht,fM as Ue,eH as Bt,bG as xe,dr as Se,eM as j,fV as Kt,fA as Yr}from"./index-8383052a.js";import{j as _n,k as We,l as jr,m as qr,n as Nt,p as $t,o as Yt,P as jt,q as qt,r as Wt,t as Ut,s as zt,u as S,v as on,x as Wr,y as Z,z as un,A as Ur,B as zr,C as Xr,D as Gr,E as Qr,F as Jr,G as Zr,H as ea,R as na}from"./PickerPanel-03789d05.js";function Nn(r,o){var n=o.formatList,l=o.generateConfig,e=o.locale;return Hr(function(){if(!r)return[[""],""];for(var f="",a=[],p=0;p<n.length;p+=1){var R=n[p],v=We(r,{generateConfig:l,locale:e,format:R});a.push(v),p===0&&(f=v)}return[a,f]},[r,n,e],function(f,a){return!_n(l,f[0],a[0])||!_t(f[1],a[1],!0)||!_t(f[2],a[2],!0)})}function Jn(r,o){var n=o.formatList,l=o.generateConfig,e=o.locale,f=t.useState(null),a=g(f,2),p=a[0],R=a[1],v=t.useRef(null);function k(m){var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(cancelAnimationFrame(v.current),b){R(m);return}v.current=requestAnimationFrame(function(){R(m)})}var V=Nn(p,{formatList:n,generateConfig:l,locale:e}),x=g(V,2),N=x[1];function E(m){k(m)}function u(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;k(null,m)}return t.useEffect(function(){u(!0)},[r]),t.useEffect(function(){return function(){return cancelAnimationFrame(v.current)}},[]),[N,E,u]}function Zn(r){var o=r.open,n=r.value,l=r.isClickOutside,e=r.triggerOpen,f=r.forwardKeyDown,a=r.onKeyDown,p=r.blurToCancel,R=r.onSubmit,v=r.onCancel,k=r.onFocus,V=r.onBlur,x=r.changeOnBlur,N=t.useState(!1),E=g(N,2),u=E[0],m=E[1],b=t.useState(!1),X=g(b,2),A=X[0],$=X[1],I=t.useRef(!1),D=t.useRef(!1),F=t.useRef(!1),we={onMouseDown:function(){m(!0),e(!0)},onKeyDown:function(y){var U=function(){F.current=!0};if(a(y,U),!F.current){switch(y.which){case xn.ENTER:{o?R()!==!1&&m(!0):e(!0),y.preventDefault();return}case xn.TAB:{u&&o&&!y.shiftKey?(m(!1),y.preventDefault()):!u&&o&&!f(y)&&y.shiftKey&&(m(!0),y.preventDefault());return}case xn.ESC:{m(!0),v();return}}!o&&![xn.SHIFT].includes(y.which)?e(!0):u||f(y)}},onFocus:function(y){m(!0),$(!0),k&&k(y)},onBlur:function(y){if(I.current||!l(document.activeElement)){I.current=!1;return}p?setTimeout(function(){for(var U=document,z=U.activeElement;z&&z.shadowRoot;)z=z.shadowRoot.activeElement;l(z)&&v()},0):o&&(e(!1),D.current&&R()),$(!1),V==null||V(y)}};return t.useEffect(function(){D.current=!1},[o]),t.useEffect(function(){D.current=!0},[n]),t.useEffect(function(){return jr(function(W){var y=qr(W),U=l(y);o&&(U?!x&&(!A||U)&&e(!1):(I.current=!0,nt(function(){I.current=!1})))})}),[we,{focused:A,typing:u}]}function Xt(r,o){return t.useMemo(function(){return r||(o?(tt(!1,"`ranges` is deprecated. Please use `presets` instead."),Object.entries(o).map(function(n){var l=g(n,2),e=l[0],f=l[1];return{label:e,value:f}})):[])},[r,o])}function et(r){var o=r.valueTexts,n=r.onTextChange,l=t.useState(""),e=g(l,2),f=e[0],a=e[1],p=t.useRef([]);p.current=o;function R(k){a(k),n(k)}function v(){a(p.current[0])}return Br(function(){o.every(function(k){return k!==f})&&v()},[o.join("||")]),[f,R,v]}var ta={bottomLeft:{points:["tl","bl"],offset:[0,4],overflow:{adjustX:1,adjustY:1}},bottomRight:{points:["tr","br"],offset:[0,4],overflow:{adjustX:1,adjustY:1}},topLeft:{points:["bl","tl"],offset:[0,-4],overflow:{adjustX:0,adjustY:1}},topRight:{points:["br","tr"],offset:[0,-4],overflow:{adjustX:0,adjustY:1}}};function Gt(r){var o,n=r.prefixCls,l=r.popupElement,e=r.popupStyle,f=r.visible,a=r.dropdownClassName,p=r.dropdownAlign,R=r.transitionName,v=r.getPopupContainer,k=r.children,V=r.range,x=r.popupPlacement,N=r.direction,E="".concat(n,"-dropdown"),u=function(){return x!==void 0?x:N==="rtl"?"bottomRight":"bottomLeft"};return t.createElement(Kr,{showAction:[],hideAction:[],popupPlacement:u(),builtinPlacements:ta,prefixCls:E,popupTransitionName:R,popup:l,popupAlign:p,popupVisible:f,popupClassName:pe(a,(o={},T(o,"".concat(E,"-range"),V),T(o,"".concat(E,"-rtl"),N==="rtl"),o)),popupStyle:e,getPopupContainer:v},k)}function Qt(r){var o=r.prefixCls,n=r.presets,l=r.onClick,e=r.onHover;return n.length?t.createElement("div",{className:"".concat(o,"-presets")},t.createElement("ul",null,n.map(function(f,a){var p=f.label,R=f.value;return t.createElement("li",{key:a,onClick:function(){return l==null?void 0:l(Nt(R))},onMouseEnter:function(){return e==null?void 0:e(Nt(R))},onMouseLeave:function(){return e==null?void 0:e(null)}},p)}))):null}function Jt(r,o,n){var l=Lt(o)==="object"?o.clearIcon:n;return l||$r.createElement("span",{className:"".concat(r,"-clear-btn")})}function ra(r){var o,n=r,l=n.prefixCls,e=l===void 0?"rc-picker":l,f=n.id,a=n.name,p=n.tabIndex,R=n.style,v=n.className,k=n.dropdownClassName,V=n.dropdownAlign,x=n.popupStyle,N=n.transitionName,E=n.generateConfig,u=n.locale,m=n.inputReadOnly,b=n.allowClear,X=n.autoFocus,A=n.showTime,$=n.picker,I=$===void 0?"date":$,D=n.format,F=n.use12Hours,we=n.value,W=n.defaultValue,y=n.presets,U=n.open,z=n.defaultOpen,ke=n.defaultOpenValue,Ee=n.suffixIcon,ze=n.clearIcon,H=n.disabled,B=n.disabledDate,_e=n.placeholder,Ne=n.getPopupContainer,ae=n.pickerRef,ie=n.panelRender,Ie=n.onChange,ln=n.onOpenChange,Xe=n.onFocus,Oe=n.onBlur,sn=n.onMouseDown,In=n.onMouseUp,cn=n.onMouseEnter,fn=n.onMouseLeave,On=n.onContextMenu,Ge=n.onClick,Le=n.onKeyDown,Qe=n.onSelect,Me=n.direction,Je=n.autoComplete,dn=Je===void 0?"off":Je,Ae=n.inputRender,Ze=n.changeOnBlur,be=t.useRef(null),pn=I==="date"&&!!A||I==="time",Ln=Xt(y),se=Ut(zt(D,I,A,F)),Fe=t.useRef(null),He=t.useRef(null),vn=t.useRef(null),gn=Se(null,{value:we,defaultValue:W}),oe=g(gn,2),ce=oe[0],mn=oe[1],Cn=t.useState(ce),Pe=g(Cn,2),ue=Pe[0],ee=Pe[1],G=t.useRef(null),ve=Se(!1,{value:U,defaultValue:z,postState:function(s){return H?!1:s},onChange:function(s){ln&&ln(s),!s&&G.current&&G.current.onClose&&G.current.onClose()}}),Ve=g(ve,2),Q=Ve[0],ne=Ve[1],fe=Nn(ue,{formatList:se,generateConfig:E,locale:u}),de=g(fe,2),q=de[0],Be=de[1],_=et({valueTexts:q,onTextChange:function(s){var K=$t(s,{locale:u,formatList:se,generateConfig:E});K&&(!B||!B(K))&&ee(K)}}),en=g(_,3),ge=en[0],O=en[1],Ke=en[2],ye=function(s){ee(s),mn(s),Ie&&!_n(E,ce,s)&&Ie(s,s?We(s,{generateConfig:E,locale:u,format:se[0]}):"")},le=function(s){H&&s||ne(s)},An=function(s){return Q&&G.current&&G.current.onKeyDown?G.current.onKeyDown(s):(tt(!1,"Picker not correct forward KeyDown operation. Please help to fire issue about this."),!1)},$e=function(){for(var s=arguments.length,K=new Array(s),Y=0;Y<s;Y++)K[Y]=arguments[Y];Ge==null||Ge.apply(void 0,K),be.current&&(be.current.focus(),le(!0))},Fn=function(s){Ze&&ye(ue),Oe==null||Oe(s)},hn=Zn({blurToCancel:pn,open:Q,value:ge,triggerOpen:le,forwardKeyDown:An,isClickOutside:function(s){return!Yt([Fe.current,He.current,vn.current],s)},onSubmit:function(){return!ue||B&&B(ue)?!1:(ye(ue),le(!1),Ke(),!0)},onCancel:function(){le(!1),ee(ce),Ke()},onKeyDown:function(s,K){Le==null||Le(s,K)},onFocus:Xe,onBlur:Fn,changeOnBlur:Ze}),w=g(hn,2),me=w[0],Rn=w[1],Dn=Rn.focused,Ce=Rn.typing;t.useEffect(function(){Q||(ee(ce),!q.length||q[0]===""?O(""):Be!==ge&&Ke())},[Q,q]),t.useEffect(function(){Q||Ke()},[I]),t.useEffect(function(){ee(ce)},[ce]),ae&&(ae.current={focus:function(){var s;(s=be.current)===null||s===void 0||s.focus()},blur:function(){var s;(s=be.current)===null||s===void 0||s.blur()}});var Sn=Jn(ge,{formatList:se,generateConfig:E,locale:u}),nn=g(Sn,3),wn=nn[0],Ye=nn[1],L=nn[2],d=j(j({},r),{},{className:void 0,style:void 0,pickerValue:void 0,onPickerValueChange:void 0,onChange:null}),tn=t.createElement("div",{className:"".concat(e,"-panel-layout")},t.createElement(Qt,{prefixCls:e,presets:Ln,onClick:function(s){ye(s),le(!1)}}),t.createElement(jt,xe({},d,{generateConfig:E,className:pe(T({},"".concat(e,"-panel-focused"),!Ce)),value:ue,locale:u,tabIndex:-1,onSelect:function(s){Qe==null||Qe(s),ee(s)},direction:Me,onPanelChange:function(s,K){var Y=r.onPanelChange;L(!0),Y==null||Y(s,K)}})));ie&&(tn=ie(tn));var J=t.createElement("div",{className:"".concat(e,"-panel-container"),ref:Fe,onMouseDown:function(s){s.preventDefault()}},tn),kn;Ee&&(kn=t.createElement("span",{className:"".concat(e,"-suffix"),onMouseDown:function(s){s.preventDefault()}},Ee));var Hn=Jt(e,b,ze),Bn=t.createElement("span",{onMouseDown:function(s){s.preventDefault(),s.stopPropagation()},onMouseUp:function(s){s.preventDefault(),s.stopPropagation(),ye(null),le(!1)},className:"".concat(e,"-clear"),role:"button"},Hn),En=!!b&&ce&&!H,rn=j(j(j({id:f,tabIndex:p,disabled:H,readOnly:m||typeof se[0]=="function"||!Ce,value:wn||ge,onChange:function(s){O(s.target.value)},autoFocus:X,placeholder:_e,ref:be,title:ge},me),{},{size:qt(I,se[0],E),name:a},Kt(r,{aria:!0,data:!0})),{},{autoComplete:dn}),Mn=Ae?Ae(rn):t.createElement("input",rn),Kn=function(s,K){(K==="submit"||K!=="key"&&!pn)&&(ye(s),le(!1))},bn=Me==="rtl"?"bottomRight":"bottomLeft";return t.createElement(Wt.Provider,{value:{operationRef:G,hideHeader:I==="time",onSelect:Kn,open:Q,defaultOpenValue:ke,onDateMouseEnter:Ye,onDateMouseLeave:L}},t.createElement(Gt,{visible:Q,popupElement:J,popupStyle:x,prefixCls:e,dropdownClassName:k,dropdownAlign:V,getPopupContainer:Ne,transitionName:N,popupPlacement:bn,direction:Me},t.createElement("div",{ref:vn,className:pe(e,v,(o={},T(o,"".concat(e,"-disabled"),H),T(o,"".concat(e,"-focused"),Dn),T(o,"".concat(e,"-rtl"),Me==="rtl"),o)),style:R,onMouseDown:sn,onMouseUp:In,onMouseEnter:cn,onMouseLeave:fn,onContextMenu:On,onClick:$e},t.createElement("div",{className:pe("".concat(e,"-input"),T({},"".concat(e,"-input-placeholder"),!!wn)),ref:He},Mn,kn,En&&Bn))))}var da=function(r){At(n,r);var o=Ft(n);function n(){var l;Ht(this,n);for(var e=arguments.length,f=new Array(e),a=0;a<e;a++)f[a]=arguments[a];return l=o.call.apply(o,[this].concat(f)),T(Ue(l),"pickerRef",t.createRef()),T(Ue(l),"focus",function(){l.pickerRef.current&&l.pickerRef.current.focus()}),T(Ue(l),"blur",function(){l.pickerRef.current&&l.pickerRef.current.blur()}),l}return Bt(n,[{key:"render",value:function(){return t.createElement(ra,xe({},this.props,{pickerRef:this.pickerRef}))}}]),n}(t.Component);function aa(r,o){var n=r.picker,l=r.locale,e=r.selectedValue,f=r.disabledDate,a=r.disabled,p=r.generateConfig,R=S(e,0),v=S(e,1);function k(u){return p.locale.getWeekFirstDate(l.locale,u)}function V(u){var m=p.getYear(u),b=p.getMonth(u);return m*100+b}function x(u){var m=p.getYear(u),b=Wr(p,u);return m*10+b}var N=t.useCallback(function(u){if(a[0]||f&&f(u))return!0;if(a[1]&&v)return!on(p,u,v)&&p.isAfter(u,v);if(!o&&v)switch(n){case"quarter":return x(u)>x(v);case"month":return V(u)>V(v);case"week":return k(u)>k(v);default:return!on(p,u,v)&&p.isAfter(u,v)}return!1},[f,a[1],v,o]),E=t.useCallback(function(u){if(a[1]||f&&f(u))return!0;if(a[0]&&R)return!on(p,u,v)&&p.isAfter(R,u);if(!o&&R)switch(n){case"quarter":return x(u)<x(R);case"month":return V(u)<V(R);case"week":return k(u)<k(R);default:return!on(p,u,R)&&p.isAfter(R,u)}return!1},[f,a[0],R,o]);return[N,E]}function oa(r,o,n,l,e,f,a,p,R,v){var k=t.useState(!1),V=g(k,2),x=V[0],N=V[1],E=Se(r||!1,{value:o}),u=g(E,2),m=u[0],b=u[1],X=Se(r||!1,{value:o,onChange:function(B){v==null||v(B)}}),A=g(X,2),$=A[0],I=A[1],D=Se(0,{value:n}),F=g(D,2),we=F[0],W=F[1],y=t.useState(null),U=g(y,2),z=U[0],ke=U[1];t.useEffect(function(){$&&N(!0)},[$]);var Ee=function(B){return B===0?1:0},ze=Yr(function(H,B,_e){if(B===!1)I(H);else if(H){W(B),I(H);var Ne=Ee(B);!$||![a,p][Ne]?ke(Ne):(N(!1),z!==null&&ke(null))}else if(_e==="confirm"||_e==="blur"&&l){var ae=m?Ee(B):z;ae!==null&&(N(!1),W(ae)),ke(null),ae!==null&&!R[ae]?nt(function(){var ie,Ie=[e,f][ae];(ie=Ie.current)===null||ie===void 0||ie.focus()}):I(!1)}else I(!1),b(!1)});return[$,we,x,ze]}function ua(r,o,n,l){var e=un(r,n,l,1);function f(a){return a(r,o)?"same":a(e,o)?"closing":"far"}switch(n){case"year":return f(function(a,p){return Xr(l,a,p)});case"quarter":case"month":return f(function(a,p){return zr(l,a,p)});default:return f(function(a,p){return Ur(l,a,p)})}}function la(r,o,n,l){var e=S(r,0),f=S(r,1);if(o===0)return e;if(e&&f){var a=ua(e,f,n,l);switch(a){case"same":return e;case"closing":return e;default:return un(f,n,l,-1)}}return e}function ia(r){var o=r.values,n=r.picker,l=r.defaultDates,e=r.generateConfig,f=t.useState(function(){return[S(l,0),S(l,1)]}),a=g(f,2),p=a[0],R=a[1],v=t.useState(null),k=g(v,2),V=k[0],x=k[1],N=S(o,0),E=S(o,1);function u(b){return p[b]?p[b]:S(V,b)||la(o,b,n,e)||N||E||e.getNow()}function m(b,X){if(b){var A=Z(V,b,X);R(Z(p,null,X)||[null,null]);var $=(X+1)%2;S(o,$)||(A=Z(A,b,$)),x(A)}else(N||E)&&x(null)}return[u,m]}function It(r,o){return r&&r[0]&&r[1]&&o.isAfter(r[0],r[1])?[r[1],r[0]]:r}function Ot(r,o,n,l){return!!(r||l&&l[o]||n[(o+1)%2])}function sa(r){var o,n,l,e=r,f=e.prefixCls,a=f===void 0?"rc-picker":f,p=e.id,R=e.style,v=e.className,k=e.popupStyle,V=e.dropdownClassName,x=e.transitionName,N=e.dropdownAlign,E=e.getPopupContainer,u=e.generateConfig,m=e.locale,b=e.placeholder,X=e.autoFocus,A=e.disabled,$=e.format,I=e.picker,D=I===void 0?"date":I,F=e.showTime,we=e.use12Hours,W=e.separator,y=W===void 0?"~":W,U=e.value,z=e.defaultValue,ke=e.defaultPickerValue,Ee=e.open,ze=e.defaultOpen,H=e.disabledDate,B=e.disabledTime,_e=e.dateRender,Ne=e.monthCellRender,ae=e.cellRender,ie=e.panelRender,Ie=e.presets,ln=e.ranges,Xe=e.allowEmpty,Oe=e.allowClear,sn=e.suffixIcon,In=e.clearIcon,cn=e.pickerRef,fn=e.inputReadOnly,On=e.mode,Ge=e.renderExtraFooter,Le=e.onChange,Qe=e.onOpenChange,Me=e.onPanelChange,Je=e.onCalendarChange,dn=e.onFocus,Ae=e.onBlur,Ze=e.onMouseDown,be=e.onMouseUp,pn=e.onMouseEnter,Ln=e.onMouseLeave,se=e.onClick,Fe=e.onOk,He=e.onKeyDown,vn=e.components,gn=e.order,oe=e.direction,ce=e.activePickerIndex,mn=e.autoComplete,Cn=mn===void 0?"off":mn,Pe=e.changeOnBlur,ue=D==="date"&&!!F||D==="time",ee=t.useRef(null),G=t.useRef(null),ve=t.useRef(null),Ve=t.useRef(null),Q=t.useRef(null),ne=t.useRef(null),fe=t.useRef(null),de=t.useRef(null),q=Ut(zt($,D,F,we)),Be=t.useRef(null),_=t.useMemo(function(){return Array.isArray(A)?A:[A||!1,A||!1]},[A]),en=Se(null,{value:U,defaultValue:z,postState:function(i){return D==="time"&&!gn?i:It(i,u)}}),ge=g(en,2),O=ge[0],Ke=ge[1],ye=ia({values:O,picker:D,defaultDates:ke,generateConfig:u}),le=g(ye,2),An=le[0],$e=le[1],Fn=Se(O,{postState:function(i){var c=i;if(_[0]&&_[1])return c;for(var h=0;h<2;h+=1)_[h]&&!c&&!S(c,h)&&!S(Xe,h)&&(c=Z(c,u.getNow(),h));return c}}),hn=g(Fn,2),w=hn[0],me=hn[1],Rn=Se([D,D],{value:On}),Dn=g(Rn,2),Ce=Dn[0],Sn=Dn[1];t.useEffect(function(){Sn([D,D])},[D]);var nn=function(i,c){Sn(i),Me&&Me(c,i)},wn=oa(ze,Ee,ce,Pe,ne,fe,S(w,0),S(w,1),_,Qe),Ye=g(wn,4),L=Ye[0],d=Ye[1],tn=Ye[2],J=Ye[3],kn=L&&d===0,Hn=L&&d===1,Bn=aa({picker:D,selectedValue:w,locale:m,disabled:_,disabledDate:H,generateConfig:u},!L||tn),En=g(Bn,2),rn=En[0],Mn=En[1],Kn=t.useState(0),bn=g(Kn,2),P=bn[0],s=bn[1];t.useEffect(function(){!L&&ee.current&&s(ee.current.offsetWidth)},[L]);function K(C){J(!0,C,"open"),nt(function(){var i,c=[ne,fe][C];(i=c.current)===null||i===void 0||i.focus()},0)}function Y(C,i){var c=C,h=S(c,0),M=S(c,1);h&&M&&u.isAfter(h,M)&&(D==="week"&&!Zr(u,m.locale,h,M)||D==="quarter"&&!ea(u,h,M)||D!=="week"&&D!=="quarter"&&D!=="time"&&!on(u,h,M)?i===0?(c=[h,null],M=null):(h=null,c=[null,M]):(D!=="time"||gn!==!1)&&(c=It(c,u))),me(c);var qe=c&&c[0]?We(c[0],{generateConfig:u,locale:m,format:q[0]}):"",te=c&&c[1]?We(c[1],{generateConfig:u,locale:m,format:q[0]}):"";if(Je){var Re={range:i===0?"start":"end"};Je(c,[qe,te],Re)}var De=Ot(h,0,_,Xe),an=Ot(M,1,_,Xe),Te=c===null||De&&an;Te&&(Ke(c),Le&&(!_n(u,S(O,0),h)||!_n(u,S(O,1),M))&&Le(c,[qe,te]))}var Zt=function(i){return L&&Be.current&&Be.current.onKeyDown?Be.current.onKeyDown(i):(tt(!1,"Picker not correct forward KeyDown operation. Please help to fire issue about this."),!1)},rt={formatList:q,generateConfig:u,locale:m},er=Nn(S(w,0),rt),at=g(er,2),Pn=at[0],nr=at[1],tr=Nn(S(w,1),rt),ot=g(tr,2),Vn=ot[0],rr=ot[1],ut=function(i,c){var h=$t(i,{locale:m,formatList:q,generateConfig:u}),M=c===0?rn:Mn;h&&!M(h)&&(me(Z(w,h,c)),$e(h,c))},ar=et({valueTexts:Pn,onTextChange:function(i){return ut(i,0)}}),$n=g(ar,3),yn=$n[0],lt=$n[1],it=$n[2],or=et({valueTexts:Vn,onTextChange:function(i){return ut(i,1)}}),Yn=g(or,3),Tn=Yn[0],st=Yn[1],ct=Yn[2],ur=t.useState(null),ft=g(ur,2),lr=ft[0],ir=ft[1],sr=t.useState(null),dt=g(sr,2),je=dt[0],pt=dt[1],cr=Jn(yn,{formatList:q,generateConfig:u,locale:m}),jn=g(cr,3),vt=jn[0],fr=jn[1],qn=jn[2],dr=Jn(Tn,{formatList:q,generateConfig:u,locale:m}),Wn=g(dr,3),gt=Wn[0],pr=Wn[1],Un=Wn[2],vr=function(i){pt(Z(w,i,d)),d===0?fr(i):pr(i)},gr=function(){pt(Z(w,null,d)),d===0?qn():Un()},mr=t.useState(L),mt=g(mr,2),Cr=mt[0],hr=mt[1];t.useEffect(function(){hr(L)},[L]);var Rr=function(i){if(Pe&&Cr){var c=S(w,d);c&&Y(w,d)}return Ae==null?void 0:Ae(i)},Ct=function(i,c){return{blurToCancel:!Pe&&ue,forwardKeyDown:Zt,onBlur:Rr,isClickOutside:function(M){return!Yt([G.current,ve.current,Ve.current,ee.current],M)},onFocus:function(M){dn&&dn(M)},triggerOpen:function(M){M?J(M,i,"open"):J(M,S(w,i)?i:!1,"blur")},onSubmit:function(){if(!w||H&&H(w[i]))return!1;Y(w,i),c(),J(!1,d,"confirm")},onCancel:function(){J(!1,i,"cancel"),me(O),c()}}},ht={onKeyDown:function(i,c){He==null||He(i,c)},changeOnBlur:Pe},Dr=Zn(j(j({},Ct(0,it)),{},{open:kn,value:yn},ht)),Rt=g(Dr,2),Sr=Rt[0],Dt=Rt[1],St=Dt.focused,wt=Dt.typing,wr=Zn(j(j({},Ct(1,ct)),{},{open:Hn,value:Tn},ht)),kt=g(wr,2),kr=kt[0],Et=kt[1],Mt=Et.focused,bt=Et.typing,Er=function(i){se&&se(i),!L&&!ne.current.contains(i.target)&&!fe.current.contains(i.target)&&(_[0]?_[1]||K(1):K(0))},Mr=function(i){Ze&&Ze(i),L&&(St||Mt)&&!ne.current.contains(i.target)&&!fe.current.contains(i.target)&&i.preventDefault()},br=O&&O[0]?We(O[0],{locale:m,format:"YYYYMMDDHHmmss",generateConfig:u}):"",Pr=O&&O[1]?We(O[1],{locale:m,format:"YYYYMMDDHHmmss",generateConfig:u}):"";t.useEffect(function(){L||(me(O),!Pn.length||Pn[0]===""?lt(""):nr!==yn&&it(),!Vn.length||Vn[0]===""?st(""):rr!==Tn&&ct())},[L,Pn,Vn]),t.useEffect(function(){me(O)},[br,Pr]);var zn=Gr({cellRender:ae,monthCellRender:Ne,dateRender:_e}),Vr=t.useMemo(function(){if(zn)return function(C,i){return zn(C,j(j({},i),{},{range:d?"end":"start"}))}},[d,zn]);cn&&(cn.current={focus:function(){ne.current&&ne.current.focus()},blur:function(){ne.current&&ne.current.blur(),fe.current&&fe.current.blur()}});var yr=Xt(Ie,ln);function Xn(){var C=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=null;L&&je&&je[0]&&je[1]&&u.isAfter(je[1],je[0])&&(c=je);var h=F;if(F&&Lt(F)==="object"&&F.defaultValue){var M=F.defaultValue;h=j(j({},F),{},{defaultValue:S(M,d)||void 0})}return t.createElement(na.Provider,{value:{inRange:!0,panelPosition:C,rangedValue:lr||w,hoverRangedValue:c}},t.createElement(jt,xe({},r,i,{cellRender:Vr,showTime:h,mode:Ce[d],generateConfig:u,style:void 0,direction:oe,disabledDate:d===0?rn:Mn,disabledTime:function(te){return B?B(te,d===0?"start":"end"):!1},className:pe(T({},"".concat(a,"-panel-focused"),d===0?!wt:!bt)),value:S(w,d),locale:m,tabIndex:-1,onPanelChange:function(te,Re){d===0&&qn(!0),d===1&&Un(!0),nn(Z(Ce,Re,d),Z(w,te,d));var De=te;C==="right"&&Ce[d]===Re&&(De=un(De,Re,u,-1)),$e(De,d)},onOk:null,onSelect:void 0,onChange:void 0,defaultValue:d===0?S(w,1):S(w,0)})))}var he=0,Pt=0;if(d&&ve.current&&Q.current&&G.current&&de.current){he=ve.current.offsetWidth+Q.current.offsetWidth;var Tr=de.current.offsetLeft>he?de.current.offsetLeft-he:de.current.offsetLeft,Vt=G.current.offsetWidth,yt=de.current.offsetWidth;Vt&&yt&&he>Vt-yt-(oe==="rtl"?0:Tr)&&(Pt=he)}var xr=oe==="rtl"?{right:he}:{left:he};function _r(){var C,i=Qr(a,Ce[d],Ge),c=Jr({prefixCls:a,components:vn,needConfirmButton:ue,okDisabled:!S(w,d)||H&&H(w[d]),locale:m,onOk:function(){var re=S(w,d);re&&(Y(w,d),Fe==null||Fe(w),J(!1,d,"confirm"))}});if(D!=="time"&&!F){var h=An(d),M=un(h,D,u),qe=Ce[d],te=qe===D,Re=Xn(te?"left":!1,{pickerValue:h,onPickerValueChange:function(re){$e(re,d)}}),De=Xn("right",{pickerValue:M,onPickerValueChange:function(re){$e(un(re,D,u,-1),d)}});oe==="rtl"?C=t.createElement(t.Fragment,null,De,te&&Re):C=t.createElement(t.Fragment,null,Re,te&&De)}else C=Xn();var an=t.createElement("div",{className:"".concat(a,"-panel-layout")},t.createElement(Qt,{prefixCls:a,presets:yr,onClick:function(re){Y(re,null),J(!1,d,"preset")},onHover:function(re){ir(re)}}),t.createElement("div",null,t.createElement("div",{className:"".concat(a,"-panels")},C),(i||c)&&t.createElement("div",{className:"".concat(a,"-footer")},i,c)));return ie&&(an=ie(an)),t.createElement("div",{className:"".concat(a,"-panel-container"),style:{marginLeft:Pt},ref:G,onMouseDown:function(re){re.preventDefault()}},an)}var Nr=t.createElement("div",{className:pe("".concat(a,"-range-wrapper"),"".concat(a,"-").concat(D,"-range-wrapper")),style:{minWidth:P}},t.createElement("div",{ref:de,className:"".concat(a,"-range-arrow"),style:xr}),_r()),Tt;sn&&(Tt=t.createElement("span",{className:"".concat(a,"-suffix"),onMouseDown:function(i){i.preventDefault()}},sn));var Ir=Jt(a,Oe,In),Or=t.createElement("span",{onMouseDown:function(i){i.preventDefault(),i.stopPropagation()},onMouseUp:function(i){i.preventDefault(),i.stopPropagation();var c=O;_[0]||(c=Z(c,null,0)),_[1]||(c=Z(c,null,1)),Y(c,null),J(!1,d,"clear")},className:"".concat(a,"-clear"),role:"button"},Ir),Lr=Oe&&(S(O,0)&&!_[0]||S(O,1)&&!_[1]),xt={size:qt(D,q[0],u)},Gn=0,Qn=0;ve.current&&Ve.current&&Q.current&&(d===0?Qn=ve.current.offsetWidth:(Gn=he,Qn=Ve.current.offsetWidth));var Ar=oe==="rtl"?{right:Gn}:{left:Gn},Fr=function(i,c){var h=Z(w,i,d);if(c==="submit"||c!=="key"&&!ue){Y(h,d),d===0?qn():Un();var M=d===0?1:0;_[M]?J(!1,!1,"confirm"):J(!1,d,"confirm")}else me(h)};return t.createElement(Wt.Provider,{value:{operationRef:Be,hideHeader:D==="time",onDateMouseEnter:vr,onDateMouseLeave:gr,hideRanges:!0,onSelect:Fr,open:L}},t.createElement(Gt,{visible:L,popupElement:Nr,popupStyle:k,prefixCls:a,dropdownClassName:V,dropdownAlign:N,getPopupContainer:E,transitionName:x,range:!0,direction:oe},t.createElement("div",xe({ref:ee,className:pe(a,"".concat(a,"-range"),v,(o={},T(o,"".concat(a,"-disabled"),_[0]&&_[1]),T(o,"".concat(a,"-focused"),d===0?St:Mt),T(o,"".concat(a,"-rtl"),oe==="rtl"),o)),style:R,onClick:Er,onMouseEnter:pn,onMouseLeave:Ln,onMouseDown:Mr,onMouseUp:be},Kt(r,{aria:!0,data:!0})),t.createElement("div",{className:pe("".concat(a,"-input"),(n={},T(n,"".concat(a,"-input-active"),d===0),T(n,"".concat(a,"-input-placeholder"),!!vt),n)),ref:ve},t.createElement("input",xe({id:p,disabled:_[0],readOnly:fn||typeof q[0]=="function"||!wt,value:vt||yn,onChange:function(i){lt(i.target.value)},autoFocus:X,placeholder:S(b,0)||"",ref:ne},Sr,xt,{autoComplete:Cn}))),t.createElement("div",{className:"".concat(a,"-range-separator"),ref:Q},y),t.createElement("div",{className:pe("".concat(a,"-input"),(l={},T(l,"".concat(a,"-input-active"),d===1),T(l,"".concat(a,"-input-placeholder"),!!gt),l)),ref:Ve},t.createElement("input",xe({disabled:_[1],readOnly:fn||typeof q[0]=="function"||!bt,value:gt||Tn,onChange:function(i){st(i.target.value)},placeholder:S(b,1)||"",ref:fe},kr,xt,{autoComplete:Cn}))),t.createElement("div",{className:"".concat(a,"-active-bar"),style:j(j({},Ar),{},{width:Qn,position:"absolute"})}),Tt,Lr&&Or)))}var pa=function(r){At(n,r);var o=Ft(n);function n(){var l;Ht(this,n);for(var e=arguments.length,f=new Array(e),a=0;a<e;a++)f[a]=arguments[a];return l=o.call.apply(o,[this].concat(f)),T(Ue(l),"pickerRef",t.createRef()),T(Ue(l),"focus",function(){l.pickerRef.current&&l.pickerRef.current.focus()}),T(Ue(l),"blur",function(){l.pickerRef.current&&l.pickerRef.current.blur()}),l}return Bt(n,[{key:"render",value:function(){return t.createElement(sa,xe({},this.props,{pickerRef:this.pickerRef}))}}]),n}(t.Component);export{da as P,pa as R};
