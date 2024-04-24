import{O as Ve,P as Be,fT as b,r as s,hc as tt,fO as G,gS as nt,fY as rt,au as j,c as ce,k as Q,fX as Fe,hf as at,aj as Oe,da as it,fQ as oe,ho as ut}from"./index-60f2319e.js";function fe(){return typeof BigInt=="function"}function Te(e){return!e&&e!==0&&!Number.isNaN(e)||!String(e).trim()}function _(e){var n=e.trim(),t=n.startsWith("-");t&&(n=n.slice(1)),n=n.replace(/(\.\d*[^0])0*$/,"$1").replace(/\.0*$/,"").replace(/^0+/,""),n.startsWith(".")&&(n="0".concat(n));var i=n||"0",a=i.split("."),l=a[0]||"0",N=a[1]||"0";l==="0"&&N==="0"&&(t=!1);var f=t?"-":"";return{negative:t,negativeStr:f,trimStr:i,integerStr:l,decimalStr:N,fullStr:"".concat(f).concat(i)}}function de(e){var n=String(e);return!Number.isNaN(Number(n))&&n.includes("e")}function R(e){var n=String(e);if(de(e)){var t=Number(n.slice(n.indexOf("e-")+2)),i=n.match(/\.(\d+)/);return i!=null&&i[1]&&(t+=i[1].length),t}return n.includes(".")&&ve(n)?n.length-n.indexOf(".")-1:0}function z(e){var n=String(e);if(de(e)){if(e>Number.MAX_SAFE_INTEGER)return String(fe()?BigInt(e).toString():Number.MAX_SAFE_INTEGER);if(e<Number.MIN_SAFE_INTEGER)return String(fe()?BigInt(e).toString():Number.MIN_SAFE_INTEGER);n=e.toFixed(R(n))}return _(n).fullStr}function ve(e){return typeof e=="number"?!Number.isNaN(e):e?/^\s*-?\d+(\.\d+)?\s*$/.test(e)||/^\s*-?\d+\.\s*$/.test(e)||/^\s*-?\.\d+\s*$/.test(e):!1}var st=function(){function e(n){if(Be(this,e),b(this,"origin",""),b(this,"negative",void 0),b(this,"integer",void 0),b(this,"decimal",void 0),b(this,"decimalLen",void 0),b(this,"empty",void 0),b(this,"nan",void 0),Te(n)){this.empty=!0;return}if(this.origin=String(n),n==="-"||Number.isNaN(n)){this.nan=!0;return}var t=n;if(de(t)&&(t=Number(t)),t=typeof t=="string"?t:z(t),ve(t)){var i=_(t);this.negative=i.negative;var a=i.trimStr.split(".");this.integer=BigInt(a[0]);var l=a[1]||"0";this.decimal=BigInt(l),this.decimalLen=l.length}else this.nan=!0}return Ve(e,[{key:"getMark",value:function(){return this.negative?"-":""}},{key:"getIntegerStr",value:function(){return this.integer.toString()}},{key:"getDecimalStr",value:function(){return this.decimal.toString().padStart(this.decimalLen,"0")}},{key:"alignDecimal",value:function(t){var i="".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(t,"0"));return BigInt(i)}},{key:"negate",value:function(){var t=new e(this.toString());return t.negative=!t.negative,t}},{key:"cal",value:function(t,i,a){var l=Math.max(this.getDecimalStr().length,t.getDecimalStr().length),N=this.alignDecimal(l),f=t.alignDecimal(l),p=i(N,f).toString(),v=a(l),d=_(p),h=d.negativeStr,S=d.trimStr,g="".concat(h).concat(S.padStart(v+1,"0"));return new e("".concat(g.slice(0,-v),".").concat(g.slice(-v)))}},{key:"add",value:function(t){if(this.isInvalidate())return new e(t);var i=new e(t);return i.isInvalidate()?this:this.cal(i,function(a,l){return a+l},function(a){return a})}},{key:"multi",value:function(t){var i=new e(t);return this.isInvalidate()||i.isInvalidate()?new e(NaN):this.cal(i,function(a,l){return a*l},function(a){return a*2})}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return this.nan}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(t){return this.toString()===(t==null?void 0:t.toString())}},{key:"lessEquals",value:function(t){return this.add(t.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.isNaN()?NaN:Number(this.toString())}},{key:"toString",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t?this.isInvalidate()?"":_("".concat(this.getMark()).concat(this.getIntegerStr(),".").concat(this.getDecimalStr())).fullStr:this.origin}}]),e}(),lt=function(){function e(n){if(Be(this,e),b(this,"origin",""),b(this,"number",void 0),b(this,"empty",void 0),Te(n)){this.empty=!0;return}this.origin=String(n),this.number=Number(n)}return Ve(e,[{key:"negate",value:function(){return new e(-this.toNumber())}},{key:"add",value:function(t){if(this.isInvalidate())return new e(t);var i=Number(t);if(Number.isNaN(i))return this;var a=this.number+i;if(a>Number.MAX_SAFE_INTEGER)return new e(Number.MAX_SAFE_INTEGER);if(a<Number.MIN_SAFE_INTEGER)return new e(Number.MIN_SAFE_INTEGER);var l=Math.max(R(this.number),R(i));return new e(a.toFixed(l))}},{key:"multi",value:function(t){var i=Number(t);if(this.isInvalidate()||Number.isNaN(i))return new e(NaN);var a=this.number*i;if(a>Number.MAX_SAFE_INTEGER)return new e(Number.MAX_SAFE_INTEGER);if(a<Number.MIN_SAFE_INTEGER)return new e(Number.MIN_SAFE_INTEGER);var l=Math.max(R(this.number),R(i));return new e(a.toFixed(l))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return Number.isNaN(this.number)}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(t){return this.toNumber()===(t==null?void 0:t.toNumber())}},{key:"lessEquals",value:function(t){return this.add(t.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.number}},{key:"toString",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t?this.isInvalidate()?"":z(this.number):this.origin}}]),e}();function E(e){return fe()?new st(e):new lt(e)}function Y(e,n,t){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(e==="")return"";var a=_(e),l=a.negativeStr,N=a.integerStr,f=a.decimalStr,p="".concat(n).concat(f),v="".concat(l).concat(N);if(t>=0){var d=Number(f[t]);if(d>=5&&!i){var h=E(e).add("".concat(l,"0.").concat("0".repeat(t)).concat(10-d));return Y(h.toString(),n,t,i)}return t===0?v:"".concat(v).concat(n).concat(f.padEnd(t,"0").slice(0,t))}return p===".0"?v:"".concat(v).concat(p)}function ot(e,n){var t=s.useRef(null);function i(){try{var l=e.selectionStart,N=e.selectionEnd,f=e.value,p=f.substring(0,l),v=f.substring(N);t.current={start:l,end:N,value:f,beforeTxt:p,afterTxt:v}}catch{}}function a(){if(e&&t.current&&n)try{var l=e.value,N=t.current,f=N.beforeTxt,p=N.afterTxt,v=N.start,d=l.length;if(l.endsWith(p))d=l.length-t.current.afterTxt.length;else if(l.startsWith(f))d=f.length;else{var h=f[v-1],S=l.indexOf(h,v-1);S!==-1&&(d=S+1)}e.setSelectionRange(d,d)}catch(g){tt(!1,"Something warning of cursor restore. Please fire issue about this: ".concat(g.message))}}return[i,a]}var ct=function(){var n=s.useState(!1),t=G(n,2),i=t[0],a=t[1];return nt(function(){a(rt())},[]),i},ft=200,dt=600;function vt(e){var n=e.prefixCls,t=e.upNode,i=e.downNode,a=e.upDisabled,l=e.downDisabled,N=e.onStep,f=s.useRef(),p=s.useRef([]),v=s.useRef();v.current=N;var d=function(){clearTimeout(f.current)},h=function(x,F){x.preventDefault(),d(),v.current(F);function W(){v.current(F),f.current=setTimeout(W,ft)}f.current=setTimeout(W,dt)};s.useEffect(function(){return function(){d(),p.current.forEach(function(y){return j.cancel(y)})}},[]);var S=ct();if(S)return null;var g="".concat(n,"-handler"),D=ce(g,"".concat(g,"-up"),b({},"".concat(g,"-up-disabled"),a)),L=ce(g,"".concat(g,"-down"),b({},"".concat(g,"-down-disabled"),l)),C=function(){return p.current.push(j(d))},P={unselectable:"on",role:"button",onMouseUp:C,onMouseLeave:C};return s.createElement("div",{className:"".concat(g,"-wrap")},s.createElement("span",Q({},P,{onMouseDown:function(x){h(x,!0)},"aria-label":"Increase Value","aria-disabled":a,className:D}),t||s.createElement("span",{unselectable:"on",className:"".concat(n,"-handler-up-inner")})),s.createElement("span",Q({},P,{onMouseDown:function(x){h(x,!1)},"aria-label":"Decrease Value","aria-disabled":l,className:L}),i||s.createElement("span",{unselectable:"on",className:"".concat(n,"-handler-down-inner")})))}function ke(e){var n=typeof e=="number"?z(e):_(e).fullStr,t=n.includes(".");return t?_(n.replace(/(\d)\.(\d)/g,"$1$2.")).fullStr:e+"0"}const mt=function(){var e=s.useRef(0),n=function(){j.cancel(e.current)};return s.useEffect(function(){return n},[]),function(t){n(),e.current=j(function(){t()})}};var gt=["prefixCls","className","style","min","max","step","defaultValue","value","disabled","readOnly","upHandler","downHandler","keyboard","changeOnWheel","controls","classNames","stringMode","parser","formatter","precision","decimalSeparator","onChange","onInput","onPressEnter","onStep","changeOnBlur"],Nt=["disabled","style","prefixCls","value","prefix","suffix","addonBefore","addonAfter","className","classNames"],Me=function(n,t){return n||t.isEmpty()?t.toString():t.toNumber()},Ae=function(n){var t=E(n);return t.isInvalidate()?null:t},ht=s.forwardRef(function(e,n){var t,i=e.prefixCls,a=i===void 0?"rc-input-number":i,l=e.className,N=e.style,f=e.min,p=e.max,v=e.step,d=v===void 0?1:v,h=e.defaultValue,S=e.value,g=e.disabled,D=e.readOnly,L=e.upHandler,C=e.downHandler,P=e.keyboard,y=e.changeOnWheel,x=y===void 0?!1:y,F=e.controls,W=F===void 0?!0:F;e.classNames;var me=e.stringMode,K=e.parser,k=e.formatter,M=e.precision,A=e.decimalSeparator,J=e.onChange,Z=e.onInput,ee=e.onPressEnter,te=e.onStep,ge=e.changeOnBlur,$e=ge===void 0?!0:ge,qe=Fe(e,gt),Ne="".concat(a,"-input"),O=s.useRef(null),Ue=s.useState(!1),he=G(Ue,2),ne=he[0],Se=he[1],w=s.useRef(!1),T=s.useRef(!1),H=s.useRef(!1),Ge=s.useState(function(){return E(S??h)}),pe=G(Ge,2),m=pe[0],be=pe[1];function Le(u){S===void 0&&be(u)}var re=s.useCallback(function(u,r){if(!r)return M>=0?M:Math.max(R(u),R(d))},[M,d]),ae=s.useCallback(function(u){var r=String(u);if(K)return K(r);var c=r;return A&&(c=c.replace(A,".")),c.replace(/[^\w.-]+/g,"")},[K,A]),ie=s.useRef(""),Ee=s.useCallback(function(u,r){if(k)return k(u,{userTyping:r,input:String(ie.current)});var c=typeof u=="number"?z(u):u;if(!r){var o=re(c,r);if(ve(c)&&(A||o>=0)){var I=A||".";c=Y(c,I,o)}}return c},[k,re,A]),Pe=s.useState(function(){var u=h??S;return m.isInvalidate()&&["string","number"].includes(it(u))?Number.isNaN(u)?"":u:Ee(m.toString(),!1)}),Ie=G(Pe,2),$=Ie[0],ye=Ie[1];ie.current=$;function q(u,r){ye(Ee(u.isInvalidate()?u.toString(!1):u.toString(!r),r))}var V=s.useMemo(function(){return Ae(p)},[p,M]),B=s.useMemo(function(){return Ae(f)},[f,M]),we=s.useMemo(function(){return!V||!m||m.isInvalidate()?!1:V.lessEquals(m)},[V,m]),De=s.useMemo(function(){return!B||!m||m.isInvalidate()?!1:m.lessEquals(B)},[B,m]),We=ot(O.current,ne),xe=G(We,2),Ke=xe[0],He=xe[1],Re=function(r){return V&&!r.lessEquals(V)?V:B&&!B.lessEquals(r)?B:null},ue=function(r){return!Re(r)},X=function(r,c){var o=r,I=ue(o)||o.isEmpty();if(!o.isEmpty()&&!c&&(o=Re(o)||o,I=!0),!D&&!g&&I){var U=o.toString(),le=re(U,c);return le>=0&&(o=E(Y(U,".",le)),ue(o)||(o=E(Y(U,".",le,!0)))),o.equals(m)||(Le(o),J==null||J(o.isEmpty()?null:Me(me,o)),S===void 0&&q(o,c)),o}return m},Xe=mt(),_e=function u(r){if(Ke(),ie.current=r,ye(r),!T.current){var c=ae(r),o=E(c);o.isNaN()||X(o,!0)}Z==null||Z(r),Xe(function(){var I=r;K||(I=r.replace(/。/g,".")),I!==r&&u(I)})},Ye=function(){T.current=!0},je=function(){T.current=!1,_e(O.current.value)},Qe=function(r){_e(r.target.value)},se=function(r){var c;if(!(r&&we||!r&&De)){w.current=!1;var o=E(H.current?ke(d):d);r||(o=o.negate());var I=(m||E(0)).add(o.toString()),U=X(I,!1);te==null||te(Me(me,U),{offset:H.current?ke(d):d,type:r?"up":"down"}),(c=O.current)===null||c===void 0||c.focus()}},Ce=function(r){var c=E(ae($)),o=c;c.isNaN()?o=X(m,r):o=X(c,r),S!==void 0?q(m,!1):o.isNaN()||q(o,!1)},ze=function(){w.current=!0},Je=function(r){var c=r.key,o=r.shiftKey;w.current=!0,H.current=o,c==="Enter"&&(T.current||(w.current=!1),Ce(!1),ee==null||ee(r)),P!==!1&&!T.current&&["Up","ArrowUp","Down","ArrowDown"].includes(c)&&(se(c==="Up"||c==="ArrowUp"),r.preventDefault())},Ze=function(){w.current=!1,H.current=!1};s.useEffect(function(){if(x&&ne){var u=function(o){se(o.deltaY<0),o.preventDefault()},r=O.current;if(r)return r.addEventListener("wheel",u,{passive:!1}),function(){return r.removeEventListener("wheel",u)}}});var et=function(){$e&&Ce(!1),Se(!1),w.current=!1};return oe(function(){m.isInvalidate()||q(m,!1)},[M,k]),oe(function(){var u=E(S);be(u);var r=E(ae($));(!u.equals(r)||!w.current||k)&&q(u,w.current)},[S]),oe(function(){k&&He()},[$]),s.createElement("div",{className:ce(a,l,(t={},b(t,"".concat(a,"-focused"),ne),b(t,"".concat(a,"-disabled"),g),b(t,"".concat(a,"-readonly"),D),b(t,"".concat(a,"-not-a-number"),m.isNaN()),b(t,"".concat(a,"-out-of-range"),!m.isInvalidate()&&!ue(m)),t)),style:N,onFocus:function(){Se(!0)},onBlur:et,onKeyDown:Je,onKeyUp:Ze,onCompositionStart:Ye,onCompositionEnd:je,onBeforeInput:ze},W&&s.createElement(vt,{prefixCls:a,upNode:L,downNode:C,upDisabled:we,downDisabled:De,onStep:se}),s.createElement("div",{className:"".concat(Ne,"-wrap")},s.createElement("input",Q({autoComplete:"off",role:"spinbutton","aria-valuemin":f,"aria-valuemax":p,"aria-valuenow":m.isInvalidate()?null:m.toString(),step:d},qe,{ref:Oe(O,n),className:Ne,value:$,onChange:Qe,disabled:g,readOnly:D}))))}),St=s.forwardRef(function(e,n){var t=e.disabled,i=e.style,a=e.prefixCls,l=e.value,N=e.prefix,f=e.suffix,p=e.addonBefore,v=e.addonAfter,d=e.className,h=e.classNames,S=Fe(e,Nt),g=s.useRef(null),D=function(C){g.current&&ut(g.current,C)};return s.createElement(at,{className:d,triggerFocus:D,prefixCls:a,value:l,disabled:t,style:i,prefix:N,suffix:f,addonAfter:v,addonBefore:p,classNames:h,components:{affixWrapper:"div",groupWrapper:"div",wrapper:"div",groupAddon:"div"}},s.createElement(ht,Q({prefixCls:a,disabled:t,ref:Oe(g,n),className:h==null?void 0:h.input},S)))});St.displayName="InputNumber";export{St as I};
