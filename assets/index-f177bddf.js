import{r,p as h,q as w,s as R,t as k,u as z,aE as D,hU as j,hT as F}from"./index-cdd95245.js";const O=t=>{const{value:e,formatter:o,precision:n,decimalSeparator:u,groupSeparator:m="",prefixCls:s}=t;let i;if(typeof o=="function")i=o(e);else{const a=String(e),d=a.match(/^(-?)(\d*)(\.(\d+))?$/);if(!d||a==="-")i=a;else{const f=d[1];let c=d[2]||"0",l=d[4]||"";c=c.replace(/\B(?=(\d{3})+(?!\d))/g,m),typeof n=="number"&&(l=l.padEnd(n,"0").slice(0,n>0?n:0)),l&&(l=`${u}${l}`),i=[r.createElement("span",{key:"int",className:`${s}-content-value-int`},f,c),l&&r.createElement("span",{key:"decimal",className:`${s}-content-value-decimal`},l)]}}return r.createElement("span",{className:`${s}-content-value`},i)},H=O,I=t=>{const{componentCls:e,marginXXS:o,padding:n,colorTextDescription:u,titleFontSize:m,colorTextHeading:s,contentFontSize:i,fontFamily:a}=t;return{[`${e}`]:Object.assign(Object.assign({},R(t)),{[`${e}-title`]:{marginBottom:o,color:u,fontSize:m},[`${e}-skeleton`]:{paddingTop:n},[`${e}-content`]:{color:s,fontSize:i,fontFamily:a,[`${e}-content-value`]:{display:"inline-block",direction:"ltr"},[`${e}-content-prefix, ${e}-content-suffix`]:{display:"inline-block"},[`${e}-content-prefix`]:{marginInlineEnd:o},[`${e}-content-suffix`]:{marginInlineStart:o}}})}},M=h("Statistic",t=>{const e=w(t,{});return[I(e)]},t=>{const{fontSizeHeading3:e,fontSize:o}=t;return{titleFontSize:o,contentFontSize:e}}),L=t=>{const{prefixCls:e,className:o,rootClassName:n,style:u,valueStyle:m,value:s=0,title:i,valueRender:a,prefix:d,suffix:f,loading:c=!1,onMouseEnter:l,onMouseLeave:S,decimalSeparator:v=".",groupSeparator:E=","}=t,{getPrefixCls:C,direction:N,statistic:g}=r.useContext(k),p=C("statistic",e),[y,T]=M(p),x=r.createElement(H,Object.assign({decimalSeparator:v,groupSeparator:E,prefixCls:p},t,{value:s})),b=z(p,{[`${p}-rtl`]:N==="rtl"},g==null?void 0:g.className,o,n,T);return y(r.createElement("div",{className:b,style:Object.assign(Object.assign({},g==null?void 0:g.style),u),onMouseEnter:l,onMouseLeave:S},i&&r.createElement("div",{className:`${p}-title`},i),r.createElement(D,{paragraph:!1,loading:c,className:`${p}-skeleton`},r.createElement("div",{style:m,className:`${p}-content`},d&&r.createElement("span",{className:`${p}-content-prefix`},d),a?a(x):x,f&&r.createElement("span",{className:`${p}-content-suffix`},f)))))},$=L,U=[["Y",1e3*60*60*24*365],["M",1e3*60*60*24*30],["D",1e3*60*60*24],["H",1e3*60*60],["m",1e3*60],["s",1e3],["S",1]];function B(t,e){let o=t;const n=/\[[^\]]*]/g,u=(e.match(n)||[]).map(a=>a.slice(1,-1)),m=e.replace(n,"[]"),s=U.reduce((a,d)=>{let[f,c]=d;if(a.includes(f)){const l=Math.floor(o/c);return o-=l*c,a.replace(new RegExp(`${f}+`,"g"),S=>{const v=S.length;return l.toString().padStart(v,"0")})}return a},m);let i=0;return s.replace(n,()=>{const a=u[i];return i+=1,a})}function P(t,e){const{format:o=""}=e,n=new Date(t).getTime(),u=Date.now(),m=Math.max(n-u,0);return B(m,o)}const X=1e3/30;function q(t){return new Date(t).getTime()}const A=t=>{const{value:e,format:o="HH:mm:ss",onChange:n,onFinish:u}=t,m=j(),s=r.useRef(null),i=()=>{u==null||u(),s.current&&(clearInterval(s.current),s.current=null)},a=()=>{const c=q(e);c>=Date.now()&&(s.current=setInterval(()=>{m(),n==null||n(c-Date.now()),c<Date.now()&&i()},X))};r.useEffect(()=>(a(),()=>{s.current&&(clearInterval(s.current),s.current=null)}),[e]);const d=(c,l)=>P(c,Object.assign(Object.assign({},l),{format:o})),f=c=>F(c,{title:void 0});return r.createElement($,Object.assign({},t,{valueRender:f,formatter:d}))},V=r.memo(A);$.Countdown=V;export{$ as S};
