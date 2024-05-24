import{r as t,d as re,m as se,e as ne,f as oe,as as ae,a as F,Q as ie,aB as le,fd as ce,h as H,b as I,eX as de,p as ge,y as ue}from"./index-e44e1a6d.js";import{P as me}from"./index-7a457e26.js";const fe=t.createContext({}),T=fe,pe=e=>{const{antCls:s,componentCls:n,iconCls:r,avatarBg:i,avatarColor:z,containerSize:p,containerSizeLG:l,containerSizeSM:h,textFontSize:c,textFontSizeLG:C,textFontSizeSM:R,borderRadius:g,borderRadiusLG:u,borderRadiusSM:y,lineWidth:O,lineType:$}=e,x=(b,v,E)=>({width:b,height:b,borderRadius:"50%",[`&${n}-square`]:{borderRadius:E},[`&${n}-icon`]:{fontSize:v,[`> ${r}`]:{margin:0}}});return{[n]:Object.assign(Object.assign(Object.assign(Object.assign({},ne(e)),{position:"relative",display:"inline-flex",justifyContent:"center",alignItems:"center",overflow:"hidden",color:z,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:i,border:`${oe(O)} ${$} transparent`,"&-image":{background:"transparent"},[`${s}-image-img`]:{display:"block"}}),x(p,c,g)),{"&-lg":Object.assign({},x(l,C,u)),"&-sm":Object.assign({},x(h,R,y)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},he=e=>{const{componentCls:s,groupBorderColor:n,groupOverlapping:r,groupSpace:i}=e;return{[`${s}-group`]:{display:"inline-flex",[`${s}`]:{borderColor:n},"> *:not(:first-child)":{marginInlineStart:r}},[`${s}-group-popover`]:{[`${s} + ${s}`]:{marginInlineStart:i}}}},ve=e=>{const{controlHeight:s,controlHeightLG:n,controlHeightSM:r,fontSize:i,fontSizeLG:z,fontSizeXL:p,fontSizeHeading3:l,marginXS:h,marginXXS:c,colorBorderBg:C}=e;return{containerSize:s,containerSizeLG:n,containerSizeSM:r,textFontSize:Math.round((z+p)/2),textFontSizeLG:l,textFontSizeSM:i,groupSpace:c,groupOverlapping:-h,groupBorderColor:C}},V=re("Avatar",e=>{const{colorTextLightSolid:s,colorTextPlaceholder:n}=e,r=se(e,{avatarBg:n,avatarColor:s});return[pe(r),he(r)]},ve);var Se=globalThis&&globalThis.__rest||function(e,s){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&s.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)s.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};const Ce=(e,s)=>{const[n,r]=t.useState(1),[i,z]=t.useState(!1),[p,l]=t.useState(!0),h=t.useRef(null),c=t.useRef(null),C=ae(s,h),{getPrefixCls:R,avatar:g}=t.useContext(F),u=t.useContext(T),y=()=>{if(!c.current||!h.current)return;const o=c.current.offsetWidth,a=h.current.offsetWidth;if(o!==0&&a!==0){const{gap:S=4}=e;S*2<a&&r(a-S*2<o?(a-S*2)/o:1)}};t.useEffect(()=>{z(!0)},[]),t.useEffect(()=>{l(!0),r(1)},[e.src]),t.useEffect(y,[e.gap]);const O=()=>{const{onError:o}=e;(o==null?void 0:o())!==!1&&l(!1)},{prefixCls:$,shape:x,size:b,src:v,srcSet:E,icon:m,className:N,rootClassName:j,alt:w,draggable:X,children:k,crossOrigin:q}=e,A=Se(e,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),d=ie(o=>{var a,S;return(S=(a=b??(u==null?void 0:u.size))!==null&&a!==void 0?a:o)!==null&&S!==void 0?S:"default"}),Q=Object.keys(typeof d=="object"?d||{}:{}).some(o=>["xs","sm","md","lg","xl","xxl"].includes(o)),G=le(Q),D=t.useMemo(()=>{if(typeof d!="object")return{};const o=ce.find(S=>G[S]),a=d[o];return a?{width:a,height:a,fontSize:a&&(m||k)?a/2:18}:{}},[G,d]),f=R("avatar",$),M=H(f),[J,K,U]=V(f,M),Y=I({[`${f}-lg`]:d==="large",[`${f}-sm`]:d==="small"}),B=t.isValidElement(v),Z=x||(u==null?void 0:u.shape)||"circle",ee=I(f,Y,g==null?void 0:g.className,`${f}-${Z}`,{[`${f}-image`]:B||v&&p,[`${f}-icon`]:!!m},U,M,N,j,K),te=typeof d=="number"?{width:d,height:d,fontSize:m?d/2:18}:{};let P;if(typeof v=="string"&&p)P=t.createElement("img",{src:v,draggable:X,srcSet:E,onError:O,alt:w,crossOrigin:q});else if(B)P=v;else if(m)P=m;else if(i||n!==1){const o=`scale(${n})`,a={msTransform:o,WebkitTransform:o,transform:o};P=t.createElement(de,{onResize:y},t.createElement("span",{className:`${f}-string`,ref:c,style:Object.assign({},a)},k))}else P=t.createElement("span",{className:`${f}-string`,style:{opacity:0},ref:c},k);return delete A.onError,delete A.gap,J(t.createElement("span",Object.assign({},A,{style:Object.assign(Object.assign(Object.assign(Object.assign({},te),D),g==null?void 0:g.style),A.style),className:ee,ref:C}),P))},ye=t.forwardRef(Ce),W=ye,L=e=>{const{size:s,shape:n}=t.useContext(T),r=t.useMemo(()=>({size:e.size||s,shape:e.shape||n}),[e.size,e.shape,s,n]);return t.createElement(T.Provider,{value:r},e.children)},xe=e=>{const{getPrefixCls:s,direction:n}=t.useContext(F),{prefixCls:r,className:i,rootClassName:z,style:p,maxCount:l,maxStyle:h,size:c,shape:C,maxPopoverPlacement:R="top",maxPopoverTrigger:g="hover",children:u}=e,y=s("avatar",r),O=`${y}-group`,$=H(y),[x,b,v]=V(y,$),E=I(O,{[`${O}-rtl`]:n==="rtl"},v,$,i,z,b),m=ge(u).map((j,w)=>ue(j,{key:`avatar-key-${w}`})),N=m.length;if(l&&l<N){const j=m.slice(0,l),w=m.slice(l,N);return j.push(t.createElement(me,{key:"avatar-popover-key",content:w,trigger:g,placement:R,overlayClassName:`${O}-popover`,destroyTooltipOnHide:!0},t.createElement(W,{style:h},`+${N-l}`))),x(t.createElement(L,{shape:C,size:c},t.createElement("div",{className:E,style:p},j)))}return x(t.createElement(L,{shape:C,size:c},t.createElement("div",{className:E,style:p},m)))},be=xe,_=W;_.Group=be;const $e=_;export{$e as A};
