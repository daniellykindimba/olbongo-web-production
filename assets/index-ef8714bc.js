import{r as t,g as re,m as se,a as ne,u as oe,ak as ae,C as F,E as ie,ax as le,fN as ce,b as H,c as I,fI as de,i as ge,n as ue}from"./index-29a13d6d.js";import{P as me}from"./index-7e1a0f34.js";const fe=t.createContext({}),T=fe,pe=e=>{const{antCls:s,componentCls:n,iconCls:r,avatarBg:i,avatarColor:z,containerSize:p,containerSizeLG:l,containerSizeSM:v,textFontSize:c,textFontSizeLG:C,textFontSizeSM:N,borderRadius:g,borderRadiusLG:u,borderRadiusSM:x,lineWidth:O,lineType:$}=e,y=(b,S,E)=>({width:b,height:b,borderRadius:"50%",[`&${n}-square`]:{borderRadius:E},[`&${n}-icon`]:{fontSize:S,[`> ${r}`]:{margin:0}}});return{[n]:Object.assign(Object.assign(Object.assign(Object.assign({},ne(e)),{position:"relative",display:"inline-flex",justifyContent:"center",alignItems:"center",overflow:"hidden",color:z,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:i,border:`${oe(O)} ${$} transparent`,"&-image":{background:"transparent"},[`${s}-image-img`]:{display:"block"}}),y(p,c,g)),{"&-lg":Object.assign({},y(l,C,u)),"&-sm":Object.assign({},y(v,N,x)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},ve=e=>{const{componentCls:s,groupBorderColor:n,groupOverlapping:r,groupSpace:i}=e;return{[`${s}-group`]:{display:"inline-flex",[`${s}`]:{borderColor:n},"> *:not(:first-child)":{marginInlineStart:r}},[`${s}-group-popover`]:{[`${s} + ${s}`]:{marginInlineStart:i}}}},Se=e=>{const{controlHeight:s,controlHeightLG:n,controlHeightSM:r,fontSize:i,fontSizeLG:z,fontSizeXL:p,fontSizeHeading3:l,marginXS:v,marginXXS:c,colorBorderBg:C}=e;return{containerSize:s,containerSizeLG:n,containerSizeSM:r,textFontSize:Math.round((z+p)/2),textFontSizeLG:l,textFontSizeSM:i,groupSpace:c,groupOverlapping:-v,groupBorderColor:C}},V=re("Avatar",e=>{const{colorTextLightSolid:s,colorTextPlaceholder:n}=e,r=se(e,{avatarBg:n,avatarColor:s});return[pe(r),ve(r)]},Se);var he=globalThis&&globalThis.__rest||function(e,s){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&s.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)s.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};const Ce=(e,s)=>{const[n,r]=t.useState(1),[i,z]=t.useState(!1),[p,l]=t.useState(!0),v=t.useRef(null),c=t.useRef(null),C=ae(s,v),{getPrefixCls:N,avatar:g}=t.useContext(F),u=t.useContext(T),x=()=>{if(!c.current||!v.current)return;const o=c.current.offsetWidth,a=v.current.offsetWidth;if(o!==0&&a!==0){const{gap:h=4}=e;h*2<a&&r(a-h*2<o?(a-h*2)/o:1)}};t.useEffect(()=>{z(!0)},[]),t.useEffect(()=>{l(!0),r(1)},[e.src]),t.useEffect(x,[e.gap]);const O=()=>{const{onError:o}=e;(o==null?void 0:o())!==!1&&l(!1)},{prefixCls:$,shape:y,size:b,src:S,srcSet:E,icon:m,className:R,rootClassName:j,alt:k,draggable:X,children:A,crossOrigin:q}=e,w=he(e,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),d=ie(o=>{var a,h;return(h=(a=b??(u==null?void 0:u.size))!==null&&a!==void 0?a:o)!==null&&h!==void 0?h:"default"}),D=Object.keys(typeof d=="object"?d||{}:{}).some(o=>["xs","sm","md","lg","xl","xxl"].includes(o)),G=le(D),J=t.useMemo(()=>{if(typeof d!="object")return{};const o=ce.find(h=>G[h]),a=d[o];return a?{width:a,height:a,fontSize:a&&(m||A)?a/2:18}:{}},[G,d]),f=N("avatar",$),M=H(f),[K,Q,U]=V(f,M),Y=I({[`${f}-lg`]:d==="large",[`${f}-sm`]:d==="small"}),L=t.isValidElement(S),Z=y||(u==null?void 0:u.shape)||"circle",ee=I(f,Y,g==null?void 0:g.className,`${f}-${Z}`,{[`${f}-image`]:L||S&&p,[`${f}-icon`]:!!m},U,M,R,j,Q),te=typeof d=="number"?{width:d,height:d,fontSize:m?d/2:18}:{};let P;if(typeof S=="string"&&p)P=t.createElement("img",{src:S,draggable:X,srcSet:E,onError:O,alt:k,crossOrigin:q});else if(L)P=S;else if(m)P=m;else if(i||n!==1){const o=`scale(${n})`,a={msTransform:o,WebkitTransform:o,transform:o};P=t.createElement(de,{onResize:x},t.createElement("span",{className:`${f}-string`,ref:c,style:Object.assign({},a)},A))}else P=t.createElement("span",{className:`${f}-string`,style:{opacity:0},ref:c},A);return delete w.onError,delete w.gap,K(t.createElement("span",Object.assign({},w,{style:Object.assign(Object.assign(Object.assign(Object.assign({},te),J),g==null?void 0:g.style),w.style),className:ee,ref:C}),P))},xe=t.forwardRef(Ce),W=xe,B=e=>{const{size:s,shape:n}=t.useContext(T),r=t.useMemo(()=>({size:e.size||s,shape:e.shape||n}),[e.size,e.shape,s,n]);return t.createElement(T.Provider,{value:r},e.children)},ye=e=>{const{getPrefixCls:s,direction:n}=t.useContext(F),{prefixCls:r,className:i,rootClassName:z,style:p,maxCount:l,maxStyle:v,size:c,shape:C,maxPopoverPlacement:N="top",maxPopoverTrigger:g="hover",children:u}=e,x=s("avatar",r),O=`${x}-group`,$=H(x),[y,b,S]=V(x,$),E=I(O,{[`${O}-rtl`]:n==="rtl"},S,$,i,z,b),m=ge(u).map((j,k)=>ue(j,{key:`avatar-key-${k}`})),R=m.length;if(l&&l<R){const j=m.slice(0,l),k=m.slice(l,R);return j.push(t.createElement(me,{key:"avatar-popover-key",content:k,trigger:g,placement:N,overlayClassName:`${O}-popover`,destroyTooltipOnHide:!0},t.createElement(W,{style:v},`+${R-l}`))),y(t.createElement(B,{shape:C,size:c},t.createElement("div",{className:E,style:p},j)))}return y(t.createElement(B,{shape:C,size:c},t.createElement("div",{className:E,style:p},m)))},be=ye,_=W;_.Group=be;const $e=_;export{$e as A};
