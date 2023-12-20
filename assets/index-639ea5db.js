import{bp as z,bq as y,cD as C,b6 as f,cE as E,r as l,bl as v,cF as H,cz as O,b7 as D,cG as T,bn as j}from"./index-e4267a92.js";import{S as L}from"./index-733d2e15.js";const N=i=>{const{componentCls:n}=i,t=`${n}-inner`;return{[n]:{[`&${n}-small`]:{minWidth:i.switchMinWidthSM,height:i.switchHeightSM,lineHeight:`${i.switchHeightSM}px`,[`${n}-inner`]:{paddingInlineStart:i.switchInnerMarginMaxSM,paddingInlineEnd:i.switchInnerMarginMinSM,[`${t}-checked`]:{marginInlineStart:`calc(-100% + ${i.switchPinSizeSM+i.switchPadding*2}px - ${i.switchInnerMarginMaxSM*2}px)`,marginInlineEnd:`calc(100% - ${i.switchPinSizeSM+i.switchPadding*2}px + ${i.switchInnerMarginMaxSM*2}px)`},[`${t}-unchecked`]:{marginTop:-i.switchHeightSM,marginInlineStart:0,marginInlineEnd:0}},[`${n}-handle`]:{width:i.switchPinSizeSM,height:i.switchPinSizeSM},[`${n}-loading-icon`]:{top:(i.switchPinSizeSM-i.switchLoadingIconSize)/2,fontSize:i.switchLoadingIconSize},[`&${n}-checked`]:{[`${n}-inner`]:{paddingInlineStart:i.switchInnerMarginMinSM,paddingInlineEnd:i.switchInnerMarginMaxSM,[`${t}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${t}-unchecked`]:{marginInlineStart:`calc(100% - ${i.switchPinSizeSM+i.switchPadding*2}px + ${i.switchInnerMarginMaxSM*2}px)`,marginInlineEnd:`calc(-100% + ${i.switchPinSizeSM+i.switchPadding*2}px - ${i.switchInnerMarginMaxSM*2}px)`}},[`${n}-handle`]:{insetInlineStart:`calc(100% - ${i.switchPinSizeSM+i.switchPadding}px)`}},[`&:not(${n}-disabled):active`]:{[`&:not(${n}-checked) ${t}`]:{[`${t}-unchecked`]:{marginInlineStart:i.marginXXS/2,marginInlineEnd:-i.marginXXS/2}},[`&${n}-checked ${t}`]:{[`${t}-checked`]:{marginInlineStart:-i.marginXXS/2,marginInlineEnd:i.marginXXS/2}}}}}}},W=i=>{const{componentCls:n}=i;return{[n]:{[`${n}-loading-icon${i.iconCls}`]:{position:"relative",top:(i.switchPinSize-i.fontSize)/2,color:i.switchLoadingIconColor,verticalAlign:"top"},[`&${n}-checked ${n}-loading-icon`]:{color:i.switchColor}}}},X=i=>{const{componentCls:n,motion:t}=i,e=`${n}-handle`;return{[n]:{[e]:{position:"absolute",top:i.switchPadding,insetInlineStart:i.switchPadding,width:i.switchPinSize,height:i.switchPinSize,transition:`all ${i.switchDuration} ease-in-out`,"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:i.colorWhite,borderRadius:i.switchPinSize/2,boxShadow:i.switchHandleShadow,transition:`all ${i.switchDuration} ease-in-out`,content:'""'}},[`&${n}-checked ${e}`]:{insetInlineStart:`calc(100% - ${i.switchPinSize+i.switchPadding}px)`},[`&:not(${n}-disabled):active`]:t?{[`${e}::before`]:{insetInlineEnd:i.switchHandleActiveInset,insetInlineStart:0},[`&${n}-checked ${e}::before`]:{insetInlineEnd:0,insetInlineStart:i.switchHandleActiveInset}}:{}}}},A=i=>{const{componentCls:n}=i,t=`${n}-inner`;return{[n]:{[t]:{display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:i.switchInnerMarginMax,paddingInlineEnd:i.switchInnerMarginMin,transition:`padding-inline-start ${i.switchDuration} ease-in-out, padding-inline-end ${i.switchDuration} ease-in-out`,[`${t}-checked, ${t}-unchecked`]:{display:"block",color:i.colorTextLightSolid,fontSize:i.fontSizeSM,transition:`margin-inline-start ${i.switchDuration} ease-in-out, margin-inline-end ${i.switchDuration} ease-in-out`,pointerEvents:"none"},[`${t}-checked`]:{marginInlineStart:`calc(-100% + ${i.switchPinSize+i.switchPadding*2}px - ${i.switchInnerMarginMax*2}px)`,marginInlineEnd:`calc(100% - ${i.switchPinSize+i.switchPadding*2}px + ${i.switchInnerMarginMax*2}px)`},[`${t}-unchecked`]:{marginTop:-i.switchHeight,marginInlineStart:0,marginInlineEnd:0}},[`&${n}-checked ${t}`]:{paddingInlineStart:i.switchInnerMarginMin,paddingInlineEnd:i.switchInnerMarginMax,[`${t}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${t}-unchecked`]:{marginInlineStart:`calc(100% - ${i.switchPinSize+i.switchPadding*2}px + ${i.switchInnerMarginMax*2}px)`,marginInlineEnd:`calc(-100% + ${i.switchPinSize+i.switchPadding*2}px - ${i.switchInnerMarginMax*2}px)`}},[`&:not(${n}-disabled):active`]:{[`&:not(${n}-checked) ${t}`]:{[`${t}-unchecked`]:{marginInlineStart:i.switchPadding*2,marginInlineEnd:-i.switchPadding*2}},[`&${n}-checked ${t}`]:{[`${t}-checked`]:{marginInlineStart:-i.switchPadding*2,marginInlineEnd:i.switchPadding*2}}}}}},_=i=>{const{componentCls:n}=i;return{[n]:Object.assign(Object.assign(Object.assign(Object.assign({},f(i)),{position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:i.switchMinWidth,height:i.switchHeight,lineHeight:`${i.switchHeight}px`,verticalAlign:"middle",background:i.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:`all ${i.motionDurationMid}`,userSelect:"none",[`&:hover:not(${n}-disabled)`]:{background:i.colorTextTertiary}}),E(i)),{[`&${n}-checked`]:{background:i.switchColor,[`&:hover:not(${n}-disabled)`]:{background:i.colorPrimaryHover}},[`&${n}-loading, &${n}-disabled`]:{cursor:"not-allowed",opacity:i.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}},[`&${n}-rtl`]:{direction:"rtl"}})}},R=z("Switch",i=>{const n=i.fontSize*i.lineHeight,t=i.controlHeight/2,e=2,c=n-e*2,a=t-e*2,s=y(i,{switchMinWidth:c*2+e*4,switchHeight:n,switchDuration:i.motionDurationMid,switchColor:i.colorPrimary,switchDisabledOpacity:i.opacityLoading,switchInnerMarginMin:c/2,switchInnerMarginMax:c+e+e*2,switchPadding:e,switchPinSize:c,switchBg:i.colorBgContainer,switchMinWidthSM:a*2+e*2,switchHeightSM:t,switchInnerMarginMinSM:a/2,switchInnerMarginMaxSM:a+e+e*2,switchPinSizeSM:a,switchHandleShadow:`0 2px 4px 0 ${new C("#00230b").setAlpha(.2).toRgbString()}`,switchLoadingIconSize:i.fontSizeIcon*.75,switchLoadingIconColor:`rgba(0, 0, 0, ${i.opacityLoading})`,switchHandleActiveInset:"-30%"});return[_(s),A(s),X(s),W(s),N(s)]});var B=globalThis&&globalThis.__rest||function(i,n){var t={};for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&n.indexOf(e)<0&&(t[e]=i[e]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,e=Object.getOwnPropertySymbols(i);c<e.length;c++)n.indexOf(e[c])<0&&Object.prototype.propertyIsEnumerable.call(i,e[c])&&(t[e[c]]=i[e[c]]);return t};const h=l.forwardRef((i,n)=>{const{prefixCls:t,size:e,disabled:c,loading:a,className:s,rootClassName:o,style:g}=i,w=B(i,["prefixCls","size","disabled","loading","className","rootClassName","style"]),{getPrefixCls:S,direction:$,switch:d}=l.useContext(v),m=l.useContext(H),p=(c??m)||a,r=S("switch",t),I=l.createElement("div",{className:`${r}-handle`},a&&l.createElement(j,{className:`${r}-loading-icon`})),[M,b]=R(r),u=O(e),x=D(d==null?void 0:d.className,{[`${r}-small`]:u==="small",[`${r}-loading`]:a,[`${r}-rtl`]:$==="rtl"},s,o,b),P=Object.assign(Object.assign({},d==null?void 0:d.style),g);return M(l.createElement(T,{component:"Switch"},l.createElement(L,Object.assign({},w,{prefixCls:r,className:x,style:P,disabled:p,ref:n,loadingIcon:I}))))});h.__ANT_SWITCH=!0;const G=h;export{G as S};
