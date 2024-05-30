import{r as c,d as R,m as z,e as D,a as F,b as I,f0 as M,fw as P,y as _}from"./index-50292268.js";import{S as H}from"./Skeleton-0ebe64c3.js";const L=t=>{const{value:n,formatter:a,precision:e,decimalSeparator:o,groupSeparator:i="",prefixCls:u}=t;let r;if(typeof a=="function")r=a(n);else{const l=String(n),m=l.match(/^(-?)(\d*)(\.(\d+))?$/);if(!m||l==="-")r=l;else{const p=m[1];let f=m[2]||"0",s=m[4]||"";f=f.replace(/\B(?=(\d{3})+(?!\d))/g,i),typeof e=="number"&&(s=s.padEnd(e,"0").slice(0,e>0?e:0)),s&&(s=`${o}${s}`),r=[c.createElement("span",{key:"int",className:`${u}-content-value-int`},p,f),s&&c.createElement("span",{key:"decimal",className:`${u}-content-value-decimal`},s)]}}return c.createElement("span",{className:`${u}-content-value`},r)},U=L,V=t=>{const{componentCls:n,marginXXS:a,padding:e,colorTextDescription:o,titleFontSize:i,colorTextHeading:u,contentFontSize:r,fontFamily:l}=t;return{[`${n}`]:Object.assign(Object.assign({},D(t)),{[`${n}-title`]:{marginBottom:a,color:o,fontSize:i},[`${n}-skeleton`]:{paddingTop:e},[`${n}-content`]:{color:u,fontSize:r,fontFamily:l,[`${n}-content-value`]:{display:"inline-block",direction:"ltr"},[`${n}-content-prefix, ${n}-content-suffix`]:{display:"inline-block"},[`${n}-content-prefix`]:{marginInlineEnd:a},[`${n}-content-suffix`]:{marginInlineStart:a}}})}},A=t=>{const{fontSizeHeading3:n,fontSize:a}=t;return{titleFontSize:a,contentFontSize:n}},B=R("Statistic",t=>{const n=z(t,{});return[V(n)]},A);var X=globalThis&&globalThis.__rest||function(t,n){var a={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)n.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(a[e[o]]=t[e[o]]);return a};const Y=t=>{const{prefixCls:n,className:a,rootClassName:e,style:o,valueStyle:i,value:u=0,title:r,valueRender:l,prefix:m,suffix:p,loading:f=!1,formatter:s,precision:v,decimalSeparator:S=".",groupSeparator:b=",",onMouseEnter:O,onMouseLeave:$}=t,E=X(t,["prefixCls","className","rootClassName","style","valueStyle","value","title","valueRender","prefix","suffix","loading","formatter","precision","decimalSeparator","groupSeparator","onMouseEnter","onMouseLeave"]),{getPrefixCls:C,direction:h,statistic:g}=c.useContext(F),d=C("statistic",n),[w,N,T]=B(d),y=c.createElement(U,{decimalSeparator:S,groupSeparator:b,prefixCls:d,formatter:s,precision:v,value:u}),j=I(d,{[`${d}-rtl`]:h==="rtl"},g==null?void 0:g.className,a,e,N,T),k=M(E,{aria:!0,data:!0});return w(c.createElement("div",Object.assign({},k,{className:j,style:Object.assign(Object.assign({},g==null?void 0:g.style),o),onMouseEnter:O,onMouseLeave:$}),r&&c.createElement("div",{className:`${d}-title`},r),c.createElement(H,{paragraph:!1,loading:f,className:`${d}-skeleton`},c.createElement("div",{style:i,className:`${d}-content`},m&&c.createElement("span",{className:`${d}-content-prefix`},m),l?l(y):y,p&&c.createElement("span",{className:`${d}-content-suffix`},p)))))},x=Y,q=[["Y",1e3*60*60*24*365],["M",1e3*60*60*24*30],["D",1e3*60*60*24],["H",1e3*60*60],["m",1e3*60],["s",1e3],["S",1]];function G(t,n){let a=t;const e=/\[[^\]]*]/g,o=(n.match(e)||[]).map(l=>l.slice(1,-1)),i=n.replace(e,"[]"),u=q.reduce((l,m)=>{let[p,f]=m;if(l.includes(p)){const s=Math.floor(a/f);return a-=s*f,l.replace(new RegExp(`${p}+`,"g"),v=>{const S=v.length;return s.toString().padStart(S,"0")})}return l},i);let r=0;return u.replace(e,()=>{const l=o[r];return r+=1,l})}function J(t,n){const{format:a=""}=n,e=new Date(t).getTime(),o=Date.now(),i=Math.max(e-o,0);return G(i,a)}var K=globalThis&&globalThis.__rest||function(t,n){var a={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)n.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(a[e[o]]=t[e[o]]);return a};const Q=1e3/30;function W(t){return new Date(t).getTime()}const Z=t=>{const{value:n,format:a="HH:mm:ss",onChange:e,onFinish:o}=t,i=K(t,["value","format","onChange","onFinish"]),u=P(),r=c.useRef(null),l=()=>{o==null||o(),r.current&&(clearInterval(r.current),r.current=null)},m=()=>{const s=W(n);s>=Date.now()&&(r.current=setInterval(()=>{u(),e==null||e(s-Date.now()),s<Date.now()&&l()},Q))};c.useEffect(()=>(m(),()=>{r.current&&(clearInterval(r.current),r.current=null)}),[n]);const p=(s,v)=>J(s,Object.assign(Object.assign({},v),{format:a})),f=s=>_(s,{title:void 0});return c.createElement(x,Object.assign({},i,{value:n,valueRender:f,formatter:p}))},ee=c.memo(Z);x.Countdown=ee;export{x as S};
