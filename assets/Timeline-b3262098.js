import{d as W,m as _,e as q,f as s,r as o,a as N,b as f,k as A,D as L,p as X,h as M}from"./index-05772eb7.js";const D=e=>{const{componentCls:t,calc:r}=e;return{[t]:Object.assign(Object.assign({},q(e)),{margin:0,padding:0,listStyle:"none",[`${t}-item`]:{position:"relative",margin:0,paddingBottom:e.itemPaddingBottom,fontSize:e.fontSize,listStyle:"none","&-tail":{position:"absolute",insetBlockStart:e.itemHeadSize,insetInlineStart:r(r(e.itemHeadSize).sub(e.tailWidth)).div(2).equal(),height:`calc(100% - ${s(e.itemHeadSize)})`,borderInlineStart:`${s(e.tailWidth)} ${e.lineType} ${e.tailColor}`},"&-pending":{[`${t}-item-head`]:{fontSize:e.fontSizeSM,backgroundColor:"transparent"},[`${t}-item-tail`]:{display:"none"}},"&-head":{position:"absolute",width:e.itemHeadSize,height:e.itemHeadSize,backgroundColor:e.dotBg,border:`${s(e.dotBorderWidth)} ${e.lineType} transparent`,borderRadius:"50%","&-blue":{color:e.colorPrimary,borderColor:e.colorPrimary},"&-red":{color:e.colorError,borderColor:e.colorError},"&-green":{color:e.colorSuccess,borderColor:e.colorSuccess},"&-gray":{color:e.colorTextDisabled,borderColor:e.colorTextDisabled}},"&-head-custom":{position:"absolute",insetBlockStart:r(e.itemHeadSize).div(2).equal(),insetInlineStart:r(e.itemHeadSize).div(2).equal(),width:"auto",height:"auto",marginBlockStart:0,paddingBlock:e.customHeadPaddingVertical,lineHeight:1,textAlign:"center",border:0,borderRadius:0,transform:"translate(-50%, -50%)"},"&-content":{position:"relative",insetBlockStart:r(r(e.fontSize).mul(e.lineHeight).sub(e.fontSize)).mul(-1).add(e.lineWidth).equal(),marginInlineStart:r(e.margin).add(e.itemHeadSize).equal(),marginInlineEnd:0,marginBlockStart:0,marginBlockEnd:0,wordBreak:"break-word"},"&-last":{[`> ${t}-item-tail`]:{display:"none"},[`> ${t}-item-content`]:{minHeight:r(e.controlHeightLG).mul(1.2).equal()}}},[`&${t}-alternate,
        &${t}-right,
        &${t}-label`]:{[`${t}-item`]:{"&-tail, &-head, &-head-custom":{insetInlineStart:"50%"},"&-head":{marginInlineStart:r(e.marginXXS).mul(-1).equal(),"&-custom":{marginInlineStart:r(e.tailWidth).div(2).equal()}},"&-left":{[`${t}-item-content`]:{insetInlineStart:`calc(50% - ${s(e.marginXXS)})`,width:`calc(50% - ${s(e.marginSM)})`,textAlign:"start"}},"&-right":{[`${t}-item-content`]:{width:`calc(50% - ${s(e.marginSM)})`,margin:0,textAlign:"end"}}}},[`&${t}-right`]:{[`${t}-item-right`]:{[`${t}-item-tail,
            ${t}-item-head,
            ${t}-item-head-custom`]:{insetInlineStart:`calc(100% - ${s(r(r(e.itemHeadSize).add(e.tailWidth)).div(2).equal())})`},[`${t}-item-content`]:{width:`calc(100% - ${s(r(e.itemHeadSize).add(e.marginXS).equal())})`}}},[`&${t}-pending
        ${t}-item-last
        ${t}-item-tail`]:{display:"block",height:`calc(100% - ${s(e.margin)})`,borderInlineStart:`${s(e.tailWidth)} dotted ${e.tailColor}`},[`&${t}-reverse
        ${t}-item-last
        ${t}-item-tail`]:{display:"none"},[`&${t}-reverse ${t}-item-pending`]:{[`${t}-item-tail`]:{insetBlockStart:e.margin,display:"block",height:`calc(100% - ${s(e.margin)})`,borderInlineStart:`${s(e.tailWidth)} dotted ${e.tailColor}`},[`${t}-item-content`]:{minHeight:r(e.controlHeightLG).mul(1.2).equal()}},[`&${t}-label`]:{[`${t}-item-label`]:{position:"absolute",insetBlockStart:r(r(e.fontSize).mul(e.lineHeight).sub(e.fontSize)).mul(-1).add(e.tailWidth).equal(),width:`calc(50% - ${s(e.marginSM)})`,textAlign:"end"},[`${t}-item-right`]:{[`${t}-item-label`]:{insetInlineStart:`calc(50% + ${s(e.marginSM)})`,width:`calc(50% - ${s(e.marginSM)})`,textAlign:"start"}}},"&-rtl":{direction:"rtl",[`${t}-item-head-custom`]:{transform:"translate(50%, -50%)"}}})}},V=e=>({tailColor:e.colorSplit,tailWidth:e.lineWidthBold,dotBorderWidth:e.wireframe?e.lineWidthBold:e.lineWidth*3,dotBg:e.colorBgContainer,itemPaddingBottom:e.padding*1.25}),G=W("Timeline",e=>{const t=_(e,{itemHeadSize:10,customHeadPaddingVertical:e.paddingXXS,paddingInlineEnd:2});return[D(t)]},V);var R=globalThis&&globalThis.__rest||function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,i=Object.getOwnPropertySymbols(e);l<i.length;l++)t.indexOf(i[l])<0&&Object.prototype.propertyIsEnumerable.call(e,i[l])&&(r[i[l]]=e[i[l]]);return r};const F=e=>{var{prefixCls:t,className:r,color:i="blue",dot:l,pending:h=!1,position:S,label:c,children:p}=e,$=R(e,["prefixCls","className","color","dot","pending","position","label","children"]);const{getPrefixCls:m}=o.useContext(N),n=m("timeline",t),b=f(`${n}-item`,{[`${n}-item-pending`]:h},r),g=/blue|red|green|gray/.test(i||"")?void 0:i,d=f(`${n}-item-head`,{[`${n}-item-head-custom`]:!!l,[`${n}-item-head-${i}`]:!g});return o.createElement("li",Object.assign({},$,{className:b}),c&&o.createElement("div",{className:`${n}-item-label`},c),o.createElement("div",{className:`${n}-item-tail`}),o.createElement("div",{className:d,style:{borderColor:g,color:g}},l),o.createElement("div",{className:`${n}-item-content`},p))},P=F;var x=globalThis&&globalThis.__rest||function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,i=Object.getOwnPropertySymbols(e);l<i.length;l++)t.indexOf(i[l])<0&&Object.prototype.propertyIsEnumerable.call(e,i[l])&&(r[i[l]]=e[i[l]]);return r};const J=e=>{var{prefixCls:t,className:r,pending:i=!1,children:l,items:h,rootClassName:S,reverse:c=!1,direction:p,hashId:$,pendingDot:m,mode:n=""}=e,b=x(e,["prefixCls","className","pending","children","items","rootClassName","reverse","direction","hashId","pendingDot","mode"]);const g=(a,u)=>n==="alternate"?a==="right"?`${t}-item-right`:a==="left"?`${t}-item-left`:u%2===0?`${t}-item-left`:`${t}-item-right`:n==="left"?`${t}-item-left`:n==="right"?`${t}-item-right`:a==="right"?`${t}-item-right`:"",d=A(h||[]),y=typeof i=="boolean"?null:i;i&&d.push({pending:!!i,dot:m||o.createElement(L,null),children:y}),c&&d.reverse();const C=d.length,O=`${t}-item-last`,z=d.filter(a=>!!a).map((a,u)=>{var v;const T=u===C-2?O:"",w=u===C-1?O:"",{className:B}=a,E=x(a,["className"]);return o.createElement(P,Object.assign({},E,{className:f([B,!c&&i?T:w,g((v=a==null?void 0:a.position)!==null&&v!==void 0?v:"",u)]),key:(a==null?void 0:a.key)||u}))}),I=d.some(a=>!!(a!=null&&a.label)),H=f(t,{[`${t}-pending`]:!!i,[`${t}-reverse`]:!!c,[`${t}-${n}`]:!!n&&!I,[`${t}-label`]:I,[`${t}-rtl`]:p==="rtl"},r,S,$);return o.createElement("ul",Object.assign({},b,{className:H}),z)},K=J;function Q(e,t){return e&&Array.isArray(e)?e:X(t).map(r=>{var i,l;return Object.assign({children:(l=(i=r==null?void 0:r.props)===null||i===void 0?void 0:i.children)!==null&&l!==void 0?l:""},r.props)})}var U=globalThis&&globalThis.__rest||function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,i=Object.getOwnPropertySymbols(e);l<i.length;l++)t.indexOf(i[l])<0&&Object.prototype.propertyIsEnumerable.call(e,i[l])&&(r[i[l]]=e[i[l]]);return r};const j=e=>{const{getPrefixCls:t,direction:r,timeline:i}=o.useContext(N),{prefixCls:l,children:h,items:S,className:c,style:p}=e,$=U(e,["prefixCls","children","items","className","style"]),m=t("timeline",l),n=M(m),[b,g,d]=G(m,n),y=Q(S,h);return b(o.createElement(K,Object.assign({},$,{className:f(i==null?void 0:i.className,c,d,n),style:Object.assign(Object.assign({},i==null?void 0:i.style),p),prefixCls:m,direction:r,items:y,hashId:g})))};j.Item=P;const Z=j;export{Z as T};
