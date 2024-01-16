import{aQ as z,aR as y,e0 as C,aS as f,e1 as v,r as l,aL as E,e2 as H,e3 as O,aM as D,e4 as T,aO as j}from"./index-c92f9f6b.js";import{S as L}from"./index-9cea7caf.js";const N=i=>{const{componentCls:n}=i,e=`${n}-inner`;return{[n]:{[`&${n}-small`]:{minWidth:i.switchMinWidthSM,height:i.switchHeightSM,lineHeight:`${i.switchHeightSM}px`,[`${n}-inner`]:{paddingInlineStart:i.switchInnerMarginMaxSM,paddingInlineEnd:i.switchInnerMarginMinSM,[`${e}-checked`]:{marginInlineStart:`calc(-100% + ${i.switchPinSizeSM+i.switchPadding*2}px - ${i.switchInnerMarginMaxSM*2}px)`,marginInlineEnd:`calc(100% - ${i.switchPinSizeSM+i.switchPadding*2}px + ${i.switchInnerMarginMaxSM*2}px)`},[`${e}-unchecked`]:{marginTop:-i.switchHeightSM,marginInlineStart:0,marginInlineEnd:0}},[`${n}-handle`]:{width:i.switchPinSizeSM,height:i.switchPinSizeSM},[`${n}-loading-icon`]:{top:(i.switchPinSizeSM-i.switchLoadingIconSize)/2,fontSize:i.switchLoadingIconSize},[`&${n}-checked`]:{[`${n}-inner`]:{paddingInlineStart:i.switchInnerMarginMinSM,paddingInlineEnd:i.switchInnerMarginMaxSM,[`${e}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${e}-unchecked`]:{marginInlineStart:`calc(100% - ${i.switchPinSizeSM+i.switchPadding*2}px + ${i.switchInnerMarginMaxSM*2}px)`,marginInlineEnd:`calc(-100% + ${i.switchPinSizeSM+i.switchPadding*2}px - ${i.switchInnerMarginMaxSM*2}px)`}},[`${n}-handle`]:{insetInlineStart:`calc(100% - ${i.switchPinSizeSM+i.switchPadding}px)`}},[`&:not(${n}-disabled):active`]:{[`&:not(${n}-checked) ${e}`]:{[`${e}-unchecked`]:{marginInlineStart:i.marginXXS/2,marginInlineEnd:-i.marginXXS/2}},[`&${n}-checked ${e}`]:{[`${e}-checked`]:{marginInlineStart:-i.marginXXS/2,marginInlineEnd:i.marginXXS/2}}}}}}},W=i=>{const{componentCls:n}=i;return{[n]:{[`${n}-loading-icon${i.iconCls}`]:{position:"relative",top:(i.switchPinSize-i.fontSize)/2,color:i.switchLoadingIconColor,verticalAlign:"top"},[`&${n}-checked ${n}-loading-icon`]:{color:i.switchColor}}}},X=i=>{const{componentCls:n,motion:e}=i,t=`${n}-handle`;return{[n]:{[t]:{position:"absolute",top:i.switchPadding,insetInlineStart:i.switchPadding,width:i.switchPinSize,height:i.switchPinSize,transition:`all ${i.switchDuration} ease-in-out`,"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:i.colorWhite,borderRadius:i.switchPinSize/2,boxShadow:i.switchHandleShadow,transition:`all ${i.switchDuration} ease-in-out`,content:'""'}},[`&${n}-checked ${t}`]:{insetInlineStart:`calc(100% - ${i.switchPinSize+i.switchPadding}px)`},[`&:not(${n}-disabled):active`]:e?{[`${t}::before`]:{insetInlineEnd:i.switchHandleActiveInset,insetInlineStart:0},[`&${n}-checked ${t}::before`]:{insetInlineEnd:0,insetInlineStart:i.switchHandleActiveInset}}:{}}}},A=i=>{const{componentCls:n}=i,e=`${n}-inner`;return{[n]:{[e]:{display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:i.switchInnerMarginMax,paddingInlineEnd:i.switchInnerMarginMin,transition:`padding-inline-start ${i.switchDuration} ease-in-out, padding-inline-end ${i.switchDuration} ease-in-out`,[`${e}-checked, ${e}-unchecked`]:{display:"block",color:i.colorTextLightSolid,fontSize:i.fontSizeSM,transition:`margin-inline-start ${i.switchDuration} ease-in-out, margin-inline-end ${i.switchDuration} ease-in-out`,pointerEvents:"none"},[`${e}-checked`]:{marginInlineStart:`calc(-100% + ${i.switchPinSize+i.switchPadding*2}px - ${i.switchInnerMarginMax*2}px)`,marginInlineEnd:`calc(100% - ${i.switchPinSize+i.switchPadding*2}px + ${i.switchInnerMarginMax*2}px)`},[`${e}-unchecked`]:{marginTop:-i.switchHeight,marginInlineStart:0,marginInlineEnd:0}},[`&${n}-checked ${e}`]:{paddingInlineStart:i.switchInnerMarginMin,paddingInlineEnd:i.switchInnerMarginMax,[`${e}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${e}-unchecked`]:{marginInlineStart:`calc(100% - ${i.switchPinSize+i.switchPadding*2}px + ${i.switchInnerMarginMax*2}px)`,marginInlineEnd:`calc(-100% + ${i.switchPinSize+i.switchPadding*2}px - ${i.switchInnerMarginMax*2}px)`}},[`&:not(${n}-disabled):active`]:{[`&:not(${n}-checked) ${e}`]:{[`${e}-unchecked`]:{marginInlineStart:i.switchPadding*2,marginInlineEnd:-i.switchPadding*2}},[`&${n}-checked ${e}`]:{[`${e}-checked`]:{marginInlineStart:-i.switchPadding*2,marginInlineEnd:i.switchPadding*2}}}}}},R=i=>{const{componentCls:n}=i;return{[n]:Object.assign(Object.assign(Object.assign(Object.assign({},f(i)),{position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:i.switchMinWidth,height:i.switchHeight,lineHeight:`${i.switchHeight}px`,verticalAlign:"middle",background:i.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:`all ${i.motionDurationMid}`,userSelect:"none",[`&:hover:not(${n}-disabled)`]:{background:i.colorTextTertiary}}),v(i)),{[`&${n}-checked`]:{background:i.switchColor,[`&:hover:not(${n}-disabled)`]:{background:i.colorPrimaryHover}},[`&${n}-loading, &${n}-disabled`]:{cursor:"not-allowed",opacity:i.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}},[`&${n}-rtl`]:{direction:"rtl"}})}},_=z("Switch",i=>{const n=i.fontSize*i.lineHeight,e=i.controlHeight/2,t=2,a=n-t*2,c=e-t*2,s=y(i,{switchMinWidth:a*2+t*4,switchHeight:n,switchDuration:i.motionDurationMid,switchColor:i.colorPrimary,switchDisabledOpacity:i.opacityLoading,switchInnerMarginMin:a/2,switchInnerMarginMax:a+t+t*2,switchPadding:t,switchPinSize:a,switchBg:i.colorBgContainer,switchMinWidthSM:c*2+t*2,switchHeightSM:e,switchInnerMarginMinSM:c/2,switchInnerMarginMaxSM:c+t+t*2,switchPinSizeSM:c,switchHandleShadow:`0 2px 4px 0 ${new C("#00230b").setAlpha(.2).toRgbString()}`,switchLoadingIconSize:i.fontSizeIcon*.75,switchLoadingIconColor:`rgba(0, 0, 0, ${i.opacityLoading})`,switchHandleActiveInset:"-30%"});return[R(s),A(s),X(s),W(s),N(s)]});var B=globalThis&&globalThis.__rest||function(i,n){var e={};for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&n.indexOf(t)<0&&(e[t]=i[t]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(i);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(i,t[a])&&(e[t[a]]=i[t[a]]);return e};const h=l.forwardRef((i,n)=>{const{prefixCls:e,size:t,disabled:a,loading:c,className:s,rootClassName:o,style:g}=i,w=B(i,["prefixCls","size","disabled","loading","className","rootClassName","style"]),{getPrefixCls:S,direction:$,switch:d}=l.useContext(E),m=l.useContext(H),I=(a??m)||c,r=S("switch",e),p=l.createElement("div",{className:`${r}-handle`},c&&l.createElement(j,{className:`${r}-loading-icon`})),[M,u]=_(r),b=O(t),x=D(d==null?void 0:d.className,{[`${r}-small`]:b==="small",[`${r}-loading`]:c,[`${r}-rtl`]:$==="rtl"},s,o,u),P=Object.assign(Object.assign({},d==null?void 0:d.style),g);return M(l.createElement(T,{component:"Switch"},l.createElement(L,Object.assign({},w,{prefixCls:r,className:x,style:P,disabled:I,ref:n,loadingIcon:p}))))});h.__ANT_SWITCH=!0;const q=h;export{q as S};
