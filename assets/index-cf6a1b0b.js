import{az as P,k as re,d as se,R as n,a as ie,b as F,v as ae,eV as L}from"./index-3f04361d.js";function B(o){let r;const i=c=>()=>{r=null,o.apply(void 0,re(c))},u=function(){if(r==null){for(var c=arguments.length,l=new Array(c),d=0;d<c;d++)l[d]=arguments[d];r=P(i(l))}};return u.cancel=()=>{P.cancel(r),r=null},u}const ce=o=>{const{componentCls:r}=o;return{[r]:{position:"fixed",zIndex:o.zIndexPopup}}},le=o=>({zIndexPopup:o.zIndexBase+10}),fe=se("Affix",ce,le);function R(o){return o!==window?o.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function M(o,r,i){if(i!==void 0&&Math.round(r.top)>Math.round(o.top)-i)return i+r.top}function O(o,r,i){if(i!==void 0&&Math.round(r.bottom)<Math.round(o.bottom)+i){const u=window.innerHeight-r.bottom;return i+u}}const _=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"];function ue(){return typeof window<"u"?window:null}const H=0,V=1,de=n.forwardRef((o,r)=>{var i;const{style:u,offsetTop:c,offsetBottom:l,prefixCls:d,className:U,rootClassName:G,children:X,target:h,onChange:y}=o,{getPrefixCls:j,getTargetContainer:q}=n.useContext(ie),E=j("affix",d),[D,$]=n.useState(!1),[f,J]=n.useState(),[K,Q]=n.useState(),A=n.useRef(H),C=n.useRef(null),p=n.useRef(),g=n.useRef(null),T=n.useRef(null),w=n.useRef(null),a=(i=h??q)!==null&&i!==void 0?i:ue,N=l===void 0&&c===void 0?0:c,W=()=>{if(A.current!==V||!T.current||!g.current||!a)return;const s=a();if(s){const t={status:H},e=R(g.current);if(e.top===0&&e.left===0&&e.width===0&&e.height===0)return;const x=R(s),v=M(e,x,N),I=O(e,x,l);v!==void 0?(t.affixStyle={position:"fixed",top:v,width:e.width,height:e.height},t.placeholderStyle={width:e.width,height:e.height}):I!==void 0&&(t.affixStyle={position:"fixed",bottom:I,width:e.width,height:e.height},t.placeholderStyle={width:e.width,height:e.height}),t.lastAffix=!!t.affixStyle,D!==t.lastAffix&&(y==null||y(t.lastAffix)),A.current=t.status,J(t.affixStyle),Q(t.placeholderStyle),$(t.lastAffix)}},b=()=>{A.current=V,W()},m=B(()=>{b()}),S=B(()=>{if(a&&f){const s=a();if(s&&g.current){const t=R(s),e=R(g.current),x=M(e,t,N),v=O(e,t,l);if(x!==void 0&&f.top===x||v!==void 0&&f.bottom===v)return}}b()}),z=()=>{const s=a==null?void 0:a();s&&(_.forEach(t=>{var e;p.current&&((e=C.current)===null||e===void 0||e.removeEventListener(t,p.current)),s==null||s.addEventListener(t,S)}),C.current=s,p.current=S)},Y=()=>{w.current&&(clearTimeout(w.current),w.current=null);const s=a==null?void 0:a();_.forEach(t=>{var e;s==null||s.removeEventListener(t,S),p.current&&((e=C.current)===null||e===void 0||e.removeEventListener(t,p.current))}),m.cancel(),S.cancel()};n.useImperativeHandle(r,()=>({updatePosition:m})),n.useEffect(()=>(w.current=setTimeout(z),()=>Y()),[]),n.useEffect(()=>{z()},[h,f]),n.useEffect(()=>{m()},[h,c,l]);const[Z,k,ee]=fe(E),te=F(G,k,E,ee),ne=F({[te]:f});let oe=ae(o,["prefixCls","offsetTop","offsetBottom","target","onChange","rootClassName"]);return Z(n.createElement(L,{onResize:m},n.createElement("div",Object.assign({style:u,className:U,ref:g},oe),f&&n.createElement("div",{style:K,"aria-hidden":"true"}),n.createElement("div",{className:ne,ref:T,style:f},n.createElement(L,{onResize:m},X)))))}),pe=de;export{pe as A,B as t};
