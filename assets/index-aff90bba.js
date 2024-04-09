import{r as t,g as Z,m as ee,a as te,ab as re,C as H,an as ne,fr as se,c as N,fo as oe,e as ae,k as ie}from"./index-bf2a13da.js";import{P as le}from"./index-ffbe86f1.js";const ce=t.createContext({size:"default",shape:void 0}),w=ce,ge=e=>{const{antCls:s,componentCls:n,iconCls:r,avatarBg:o,avatarColor:y,containerSize:p,containerSizeLG:c,containerSizeSM:h,textFontSize:d,textFontSizeLG:x,textFontSizeSM:R,borderRadius:u,borderRadiusLG:m,borderRadiusSM:C,lineWidth:b,lineType:E}=e,z=(S,g,$)=>({width:S,height:S,lineHeight:`${S-b*2}px`,borderRadius:"50%",[`&${n}-square`]:{borderRadius:$},[`${n}-string`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"},[`&${n}-icon`]:{fontSize:g,[`> ${r}`]:{margin:0}}});return{[n]:Object.assign(Object.assign(Object.assign(Object.assign({},te(e)),{position:"relative",display:"inline-block",overflow:"hidden",color:y,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:o,border:`${b}px ${E} transparent`,"&-image":{background:"transparent"},[`${s}-image-img`]:{display:"block"}}),z(p,d,u)),{"&-lg":Object.assign({},z(c,x,m)),"&-sm":Object.assign({},z(h,R,C)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},de=e=>{const{componentCls:s,groupBorderColor:n,groupOverlapping:r,groupSpace:o}=e;return{[`${s}-group`]:{display:"inline-flex",[`${s}`]:{borderColor:n},"> *:not(:first-child)":{marginInlineStart:r}},[`${s}-group-popover`]:{[`${s} + ${s}`]:{marginInlineStart:o}}}},L=Z("Avatar",e=>{const{colorTextLightSolid:s,colorTextPlaceholder:n}=e,r=ee(e,{avatarBg:n,avatarColor:s});return[ge(r),de(r)]},e=>{const{controlHeight:s,controlHeightLG:n,controlHeightSM:r,fontSize:o,fontSizeLG:y,fontSizeXL:p,fontSizeHeading3:c,marginXS:h,marginXXS:d,colorBorderBg:x}=e;return{containerSize:s,containerSizeLG:n,containerSizeSM:r,textFontSize:Math.round((y+p)/2),textFontSizeLG:c,textFontSizeSM:o,groupSpace:d,groupOverlapping:-h,groupBorderColor:x}});var ue=globalThis&&globalThis.__rest||function(e,s){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&s.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)s.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const me=(e,s)=>{const[n,r]=t.useState(1),[o,y]=t.useState(!1),[p,c]=t.useState(!0),h=t.useRef(null),d=t.useRef(null),x=re(s,h),{getPrefixCls:R,avatar:u}=t.useContext(H),m=t.useContext(w),C=()=>{if(!d.current||!h.current)return;const a=d.current.offsetWidth,l=h.current.offsetWidth;if(a!==0&&l!==0){const{gap:O=4}=e;O*2<l&&r(l-O*2<a?(l-O*2)/a:1)}};t.useEffect(()=>{y(!0)},[]),t.useEffect(()=>{c(!0),r(1)},[e.src]),t.useEffect(C,[e.gap]);const b=()=>{const{onError:a}=e;(a==null?void 0:a())!==!1&&c(!1)},{prefixCls:E,shape:z,size:S="default",src:g,srcSet:$,icon:f,className:P,rootClassName:F,alt:W,draggable:_,children:A,crossOrigin:X}=e,k=ue(e,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),i=S==="default"?m==null?void 0:m.size:S,V=Object.keys(typeof i=="object"?i||{}:{}).some(a=>["xs","sm","md","lg","xl","xxl"].includes(a)),I=ne(V),q=t.useMemo(()=>{if(typeof i!="object")return{};const a=se.find(O=>I[O]),l=i[a];return l?{width:l,height:l,lineHeight:`${l}px`,fontSize:f?l/2:18}:{}},[I,i]),v=R("avatar",E),[D,J]=L(v),K=N({[`${v}-lg`]:i==="large",[`${v}-sm`]:i==="small"}),G=t.isValidElement(g),Q=z||(m==null?void 0:m.shape)||"circle",U=N(v,K,u==null?void 0:u.className,`${v}-${Q}`,{[`${v}-image`]:G||g&&p,[`${v}-icon`]:!!f},P,F,J),Y=typeof i=="number"?{width:i,height:i,lineHeight:`${i}px`,fontSize:f?i/2:18}:{};let j;if(typeof g=="string"&&p)j=t.createElement("img",{src:g,draggable:_,srcSet:$,onError:b,alt:W,crossOrigin:X});else if(G)j=g;else if(f)j=f;else if(o||n!==1){const a=`scale(${n}) translateX(-50%)`,l={msTransform:a,WebkitTransform:a,transform:a},O=typeof i=="number"?{lineHeight:`${i}px`}:{};j=t.createElement(oe,{onResize:C},t.createElement("span",{className:`${v}-string`,ref:d,style:Object.assign(Object.assign({},O),l)},A))}else j=t.createElement("span",{className:`${v}-string`,style:{opacity:0},ref:d},A);return delete k.onError,delete k.gap,D(t.createElement("span",Object.assign({},k,{style:Object.assign(Object.assign(Object.assign(Object.assign({},Y),q),u==null?void 0:u.style),k.style),className:U,ref:x}),j))},fe=t.forwardRef(me),T=fe,M=e=>{const{size:s,shape:n}=t.useContext(w),r=t.useMemo(()=>({size:e.size||s,shape:e.shape||n}),[e.size,e.shape,s,n]);return t.createElement(w.Provider,{value:r},e.children)},pe=e=>{const{getPrefixCls:s,direction:n}=t.useContext(H),{prefixCls:r,className:o,rootClassName:y,style:p,maxCount:c,maxStyle:h,size:d,shape:x,maxPopoverPlacement:R="top",maxPopoverTrigger:u="hover",children:m}=e,C=s("avatar",r),b=`${C}-group`,[E,z]=L(C),S=N(b,{[`${b}-rtl`]:n==="rtl"},o,y,z),g=ae(m).map((f,P)=>ie(f,{key:`avatar-key-${P}`})),$=g.length;if(c&&c<$){const f=g.slice(0,c),P=g.slice(c,$);return f.push(t.createElement(le,{key:"avatar-popover-key",content:P,trigger:u,placement:R,overlayClassName:`${b}-popover`},t.createElement(T,{style:h},`+${$-c}`))),E(t.createElement(M,{shape:x,size:d},t.createElement("div",{className:S,style:p},f)))}return E(t.createElement(M,{shape:x,size:d},t.createElement("div",{className:S,style:p},g)))},he=pe,B=T;B.Group=he;const xe=B;export{xe as A};
