import{eH as Me,eG as Ae,eK as p,r as s,eW as ze,eJ as K,eX as Qe,eY as et,eD as j,u as le,bG as J,eP as Ve,eZ as tt,e_ as Fe,b6 as nt,e$ as se,f0 as rt}from"./index-8383052a.js";function oe(){return typeof BigInt=="function"}function Be(e){return!e&&e!==0&&!Number.isNaN(e)||!String(e).trim()}function _(e){var n=e.trim(),t=n.startsWith("-");t&&(n=n.slice(1)),n=n.replace(/(\.\d*[^0])0*$/,"$1").replace(/\.0*$/,"").replace(/^0+/,""),n.startsWith(".")&&(n="0".concat(n));var a=n||"0",r=a.split("."),l=r[0]||"0",g=r[1]||"0";l==="0"&&g==="0"&&(t=!1);var f=t?"-":"";return{negative:t,negativeStr:f,trimStr:a,integerStr:l,decimalStr:g,fullStr:"".concat(f).concat(a)}}function ce(e){var n=String(e);return!Number.isNaN(Number(n))&&n.includes("e")}function R(e){var n=String(e);if(ce(e)){var t=Number(n.slice(n.indexOf("e-")+2)),a=n.match(/\.(\d+)/);return a!=null&&a[1]&&(t+=a[1].length),t}return n.includes(".")&&fe(n)?n.length-n.indexOf(".")-1:0}function Z(e){var n=String(e);if(ce(e)){if(e>Number.MAX_SAFE_INTEGER)return String(oe()?BigInt(e).toString():Number.MAX_SAFE_INTEGER);if(e<Number.MIN_SAFE_INTEGER)return String(oe()?BigInt(e).toString():Number.MIN_SAFE_INTEGER);n=e.toFixed(R(n))}return _(n).fullStr}function fe(e){return typeof e=="number"?!Number.isNaN(e):e?/^\s*-?\d+(\.\d+)?\s*$/.test(e)||/^\s*-?\d+\.\s*$/.test(e)||/^\s*-?\.\d+\s*$/.test(e):!1}var at=function(){function e(n){if(Ae(this,e),p(this,"origin",""),p(this,"negative",void 0),p(this,"integer",void 0),p(this,"decimal",void 0),p(this,"decimalLen",void 0),p(this,"empty",void 0),p(this,"nan",void 0),Be(n)){this.empty=!0;return}if(this.origin=String(n),n==="-"||Number.isNaN(n)){this.nan=!0;return}var t=n;if(ce(t)&&(t=Number(t)),t=typeof t=="string"?t:Z(t),fe(t)){var a=_(t);this.negative=a.negative;var r=a.trimStr.split(".");this.integer=BigInt(r[0]);var l=r[1]||"0";this.decimal=BigInt(l),this.decimalLen=l.length}else this.nan=!0}return Me(e,[{key:"getMark",value:function(){return this.negative?"-":""}},{key:"getIntegerStr",value:function(){return this.integer.toString()}},{key:"getDecimalStr",value:function(){return this.decimal.toString().padStart(this.decimalLen,"0")}},{key:"alignDecimal",value:function(t){var a="".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(t,"0"));return BigInt(a)}},{key:"negate",value:function(){var t=new e(this.toString());return t.negative=!t.negative,t}},{key:"cal",value:function(t,a,r){var l=Math.max(this.getDecimalStr().length,t.getDecimalStr().length),g=this.alignDecimal(l),f=t.alignDecimal(l),h=a(g,f).toString(),v=r(l),d=_(h),b=d.negativeStr,N=d.trimStr,S="".concat(b).concat(N.padStart(v+1,"0"));return new e("".concat(S.slice(0,-v),".").concat(S.slice(-v)))}},{key:"add",value:function(t){if(this.isInvalidate())return new e(t);var a=new e(t);return a.isInvalidate()?this:this.cal(a,function(r,l){return r+l},function(r){return r})}},{key:"multi",value:function(t){var a=new e(t);return this.isInvalidate()||a.isInvalidate()?new e(NaN):this.cal(a,function(r,l){return r*l},function(r){return r*2})}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return this.nan}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(t){return this.toString()===(t==null?void 0:t.toString())}},{key:"lessEquals",value:function(t){return this.add(t.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.isNaN()?NaN:Number(this.toString())}},{key:"toString",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t?this.isInvalidate()?"":_("".concat(this.getMark()).concat(this.getIntegerStr(),".").concat(this.getDecimalStr())).fullStr:this.origin}}]),e}(),it=function(){function e(n){if(Ae(this,e),p(this,"origin",""),p(this,"number",void 0),p(this,"empty",void 0),Be(n)){this.empty=!0;return}this.origin=String(n),this.number=Number(n)}return Me(e,[{key:"negate",value:function(){return new e(-this.toNumber())}},{key:"add",value:function(t){if(this.isInvalidate())return new e(t);var a=Number(t);if(Number.isNaN(a))return this;var r=this.number+a;if(r>Number.MAX_SAFE_INTEGER)return new e(Number.MAX_SAFE_INTEGER);if(r<Number.MIN_SAFE_INTEGER)return new e(Number.MIN_SAFE_INTEGER);var l=Math.max(R(this.number),R(a));return new e(r.toFixed(l))}},{key:"multi",value:function(t){var a=Number(t);if(this.isInvalidate()||Number.isNaN(a))return new e(NaN);var r=this.number*a;if(r>Number.MAX_SAFE_INTEGER)return new e(Number.MAX_SAFE_INTEGER);if(r<Number.MIN_SAFE_INTEGER)return new e(Number.MIN_SAFE_INTEGER);var l=Math.max(R(this.number),R(a));return new e(r.toFixed(l))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return Number.isNaN(this.number)}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(t){return this.toNumber()===(t==null?void 0:t.toNumber())}},{key:"lessEquals",value:function(t){return this.add(t.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.number}},{key:"toString",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t?this.isInvalidate()?"":Z(this.number):this.origin}}]),e}();function E(e){return oe()?new at(e):new it(e)}function Y(e,n,t){var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(e==="")return"";var r=_(e),l=r.negativeStr,g=r.integerStr,f=r.decimalStr,h="".concat(n).concat(f),v="".concat(l).concat(g);if(t>=0){var d=Number(f[t]);if(d>=5&&!a){var b=E(e).add("".concat(l,"0.").concat("0".repeat(t)).concat(10-d));return Y(b.toString(),n,t,a)}return t===0?v:"".concat(v).concat(n).concat(f.padEnd(t,"0").slice(0,t))}return h===".0"?v:"".concat(v).concat(h)}function ut(e,n){var t=s.useRef(null);function a(){try{var l=e.selectionStart,g=e.selectionEnd,f=e.value,h=f.substring(0,l),v=f.substring(g);t.current={start:l,end:g,value:f,beforeTxt:h,afterTxt:v}}catch{}}function r(){if(e&&t.current&&n)try{var l=e.value,g=t.current,f=g.beforeTxt,h=g.afterTxt,v=g.start,d=l.length;if(l.endsWith(h))d=l.length-t.current.afterTxt.length;else if(l.startsWith(f))d=f.length;else{var b=f[v-1],N=l.indexOf(b,v-1);N!==-1&&(d=N+1)}e.setSelectionRange(d,d)}catch(S){ze(!1,"Something warning of cursor restore. Please fire issue about this: ".concat(S.message))}}return[a,r]}var st=function(){var n=s.useState(!1),t=K(n,2),a=t[0],r=t[1];return Qe(function(){r(et())},[]),a},lt=200,ot=600;function ct(e){var n=e.prefixCls,t=e.upNode,a=e.downNode,r=e.upDisabled,l=e.downDisabled,g=e.onStep,f=s.useRef(),h=s.useRef([]),v=s.useRef();v.current=g;var d=function(){clearTimeout(f.current)},b=function(x,k){x.preventDefault(),d(),v.current(k);function $(){v.current(k),f.current=setTimeout($,lt)}f.current=setTimeout($,ot)};s.useEffect(function(){return function(){d(),h.current.forEach(function(w){return j.cancel(w)})}},[]);var N=st();if(N)return null;var S="".concat(n,"-handler"),y=le(S,"".concat(S,"-up"),p({},"".concat(S,"-up-disabled"),r)),B=le(S,"".concat(S,"-down"),p({},"".concat(S,"-down-disabled"),l)),T=function(){return h.current.push(j(d))},C={unselectable:"on",role:"button",onMouseUp:T,onMouseLeave:T};return s.createElement("div",{className:"".concat(S,"-wrap")},s.createElement("span",J({},C,{onMouseDown:function(x){b(x,!0)},"aria-label":"Increase Value","aria-disabled":r,className:y}),t||s.createElement("span",{unselectable:"on",className:"".concat(n,"-handler-up-inner")})),s.createElement("span",J({},C,{onMouseDown:function(x){b(x,!1)},"aria-label":"Decrease Value","aria-disabled":l,className:B}),a||s.createElement("span",{unselectable:"on",className:"".concat(n,"-handler-down-inner")})))}function _e(e){var n=typeof e=="number"?Z(e):_(e).fullStr,t=n.includes(".");return t?_(n.replace(/(\d)\.(\d)/g,"$1$2.")).fullStr:e+"0"}const ft=function(){var e=s.useRef(0),n=function(){j.cancel(e.current)};return s.useEffect(function(){return n},[]),function(t){n(),e.current=j(function(){t()})}};var dt=["prefixCls","className","style","min","max","step","defaultValue","value","disabled","readOnly","upHandler","downHandler","keyboard","controls","classNames","stringMode","parser","formatter","precision","decimalSeparator","onChange","onInput","onPressEnter","onStep"],vt=["disabled","style","prefixCls","value","prefix","suffix","addonBefore","addonAfter","classes","className","classNames"],Ce=function(n,t){return n||t.isEmpty()?t.toString():t.toNumber()},ke=function(n){var t=E(n);return t.isInvalidate()?null:t},mt=s.forwardRef(function(e,n){var t,a=e.prefixCls,r=a===void 0?"rc-input-number":a,l=e.className,g=e.style,f=e.min,h=e.max,v=e.step,d=v===void 0?1:v,b=e.defaultValue,N=e.value,S=e.disabled,y=e.readOnly,B=e.upHandler,T=e.downHandler,C=e.keyboard,w=e.controls,x=w===void 0?!0:w,k=e.classNames,$=e.stringMode,L=e.parser,q=e.formatter,M=e.precision,A=e.decimalSeparator,z=e.onChange,Q=e.onInput,ee=e.onPressEnter,te=e.onStep,Te=Ve(e,dt),de="".concat(r,"-input"),H=s.useRef(null),$e=s.useState(!1),ve=K($e,2),me=ve[0],ge=ve[1],D=s.useRef(!1),G=s.useRef(!1),W=s.useRef(!1),qe=s.useState(function(){return E(N??b)}),Ne=K(qe,2),m=Ne[0],Se=Ne[1];function Ge(u){N===void 0&&Se(u)}var ne=s.useCallback(function(u,i){if(!i)return M>=0?M:Math.max(R(u),R(d))},[M,d]),re=s.useCallback(function(u){var i=String(u);if(L)return L(i);var c=i;return A&&(c=c.replace(A,".")),c.replace(/[^\w.-]+/g,"")},[L,A]),ae=s.useRef(""),he=s.useCallback(function(u,i){if(q)return q(u,{userTyping:i,input:String(ae.current)});var c=typeof u=="number"?Z(u):u;if(!i){var o=ne(c,i);if(fe(c)&&(A||o>=0)){var I=A||".";c=Y(c,I,o)}}return c},[q,ne,A]),Ue=s.useState(function(){var u=b??N;return m.isInvalidate()&&["string","number"].includes(nt(u))?Number.isNaN(u)?"":u:he(m.toString(),!1)}),pe=K(Ue,2),U=pe[0],be=pe[1];ae.current=U;function P(u,i){be(he(u.isInvalidate()?u.toString(!1):u.toString(!i),i))}var V=s.useMemo(function(){return ke(h)},[h,M]),F=s.useMemo(function(){return ke(f)},[f,M]),Ee=s.useMemo(function(){return!V||!m||m.isInvalidate()?!1:V.lessEquals(m)},[V,m]),Ie=s.useMemo(function(){return!F||!m||m.isInvalidate()?!1:m.lessEquals(F)},[F,m]),Pe=ut(H.current,me),ye=K(Pe,2),Oe=ye[0],Ke=ye[1],we=function(i){return V&&!i.lessEquals(V)?V:F&&!F.lessEquals(i)?F:null},ie=function(i){return!we(i)},X=function(i,c){var o=i,I=ie(o)||o.isEmpty();if(!o.isEmpty()&&!c&&(o=we(o)||o,I=!0),!y&&!S&&I){var O=o.toString(),ue=ne(O,c);return ue>=0&&(o=E(Y(O,".",ue)),ie(o)||(o=E(Y(O,".",ue,!0)))),o.equals(m)||(Ge(o),z==null||z(o.isEmpty()?null:Ce($,o)),N===void 0&&P(o,c)),o}return m},Le=ft(),De=function u(i){if(Oe(),ae.current=i,be(i),!G.current){var c=re(i),o=E(c);o.isNaN()||X(o,!0)}Q==null||Q(i),Le(function(){var I=i;L||(I=i.replace(/。/g,".")),I!==i&&u(I)})},He=function(){G.current=!0},We=function(){G.current=!1,De(H.current.value)},Xe=function(i){De(i.target.value)},xe=function(i){var c;if(!(i&&Ee||!i&&Ie)){D.current=!1;var o=E(W.current?_e(d):d);i||(o=o.negate());var I=(m||E(0)).add(o.toString()),O=X(I,!1);te==null||te(Ce($,O),{offset:W.current?_e(d):d,type:i?"up":"down"}),(c=H.current)===null||c===void 0||c.focus()}},Re=function(i){var c=E(re(U)),o=c;c.isNaN()?o=X(m,i):o=X(c,i),N!==void 0?P(m,!1):o.isNaN()||P(o,!1)},Ye=function(){D.current=!0},je=function(i){var c=i.key,o=i.shiftKey;D.current=!0,W.current=o,c==="Enter"&&(G.current||(D.current=!1),Re(!1),ee==null||ee(i)),C!==!1&&!G.current&&["Up","ArrowUp","Down","ArrowDown"].includes(c)&&(xe(c==="Up"||c==="ArrowUp"),i.preventDefault())},Je=function(){D.current=!1,W.current=!1},Ze=function(){Re(!1),ge(!1),D.current=!1};return se(function(){m.isInvalidate()||P(m,!1)},[M]),se(function(){var u=E(N);Se(u);var i=E(re(U));(!u.equals(i)||!D.current||q)&&P(u,D.current)},[N]),se(function(){q&&Ke()},[U]),s.createElement("div",{className:le(r,k==null?void 0:k.input,l,(t={},p(t,"".concat(r,"-focused"),me),p(t,"".concat(r,"-disabled"),S),p(t,"".concat(r,"-readonly"),y),p(t,"".concat(r,"-not-a-number"),m.isNaN()),p(t,"".concat(r,"-out-of-range"),!m.isInvalidate()&&!ie(m)),t)),style:g,onFocus:function(){ge(!0)},onBlur:Ze,onKeyDown:je,onKeyUp:Je,onCompositionStart:He,onCompositionEnd:We,onBeforeInput:Ye},x&&s.createElement(ct,{prefixCls:r,upNode:B,downNode:T,upDisabled:Ee,downDisabled:Ie,onStep:xe}),s.createElement("div",{className:"".concat(de,"-wrap")},s.createElement("input",J({autoComplete:"off",role:"spinbutton","aria-valuemin":f,"aria-valuemax":h,"aria-valuenow":m.isInvalidate()?null:m.toString(),step:d},Te,{ref:Fe(H,n),className:de,value:U,onChange:Xe,disabled:S,readOnly:y}))))}),gt=s.forwardRef(function(e,n){var t=e.disabled,a=e.style,r=e.prefixCls,l=e.value,g=e.prefix,f=e.suffix,h=e.addonBefore,v=e.addonAfter,d=e.classes,b=e.className,N=e.classNames,S=Ve(e,vt),y=s.useRef(null),B=function(C){y.current&&rt(y.current,C)};return s.createElement(tt,{inputElement:s.createElement(mt,J({prefixCls:r,disabled:t,classNames:N,ref:Fe(y,n)},S)),className:b,triggerFocus:B,prefixCls:r,value:l,disabled:t,style:a,prefix:g,suffix:f,addonAfter:v,addonBefore:h,classes:d,classNames:N,components:{affixWrapper:"div",groupWrapper:"div",wrapper:"div",groupAddon:"div"}})});gt.displayName="InputNumber";export{gt as I};
