import{d as D,m as T,f as h,e as j,a9 as W,au as L,r as m,a2 as N,a as X,T as A,Q as _,b as R,eW as V,D as B}from"./index-38408b6c.js";import{S as Q}from"./index-55ccab30.js";const F=n=>{const{componentCls:e,trackHeightSM:l,trackPadding:t,trackMinWidthSM:r,innerMinMarginSM:o,innerMaxMarginSM:d,handleSizeSM:i,calc:a}=n,c=`${e}-inner`,s=h(a(i).add(a(t).mul(2)).equal()),g=h(a(d).mul(2).equal());return{[e]:{[`&${e}-small`]:{minWidth:r,height:l,lineHeight:h(l),[`${e}-inner`]:{paddingInlineStart:d,paddingInlineEnd:o,[`${c}-checked, ${c}-unchecked`]:{minHeight:l},[`${c}-checked`]:{marginInlineStart:`calc(-100% + ${s} - ${g})`,marginInlineEnd:`calc(100% - ${s} + ${g})`},[`${c}-unchecked`]:{marginTop:a(l).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}},[`${e}-handle`]:{width:i,height:i},[`${e}-loading-icon`]:{top:a(a(i).sub(n.switchLoadingIconSize)).div(2).equal(),fontSize:n.switchLoadingIconSize},[`&${e}-checked`]:{[`${e}-inner`]:{paddingInlineStart:o,paddingInlineEnd:d,[`${c}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${c}-unchecked`]:{marginInlineStart:`calc(100% - ${s} + ${g})`,marginInlineEnd:`calc(-100% + ${s} - ${g})`}},[`${e}-handle`]:{insetInlineStart:`calc(100% - ${h(a(i).add(t).equal())})`}},[`&:not(${e}-disabled):active`]:{[`&:not(${e}-checked) ${c}`]:{[`${c}-unchecked`]:{marginInlineStart:a(n.marginXXS).div(2).equal(),marginInlineEnd:a(n.marginXXS).mul(-1).div(2).equal()}},[`&${e}-checked ${c}`]:{[`${c}-checked`]:{marginInlineStart:a(n.marginXXS).mul(-1).div(2).equal(),marginInlineEnd:a(n.marginXXS).div(2).equal()}}}}}}},G=n=>{const{componentCls:e,handleSize:l,calc:t}=n;return{[e]:{[`${e}-loading-icon${n.iconCls}`]:{position:"relative",top:t(t(l).sub(n.fontSize)).div(2).equal(),color:n.switchLoadingIconColor,verticalAlign:"top"},[`&${e}-checked ${e}-loading-icon`]:{color:n.switchColor}}}},J=n=>{const{componentCls:e,trackPadding:l,handleBg:t,handleShadow:r,handleSize:o,calc:d}=n,i=`${e}-handle`;return{[e]:{[i]:{position:"absolute",top:l,insetInlineStart:l,width:o,height:o,transition:`all ${n.switchDuration} ease-in-out`,"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:t,borderRadius:d(o).div(2).equal(),boxShadow:r,transition:`all ${n.switchDuration} ease-in-out`,content:'""'}},[`&${e}-checked ${i}`]:{insetInlineStart:`calc(100% - ${h(d(o).add(l).equal())})`},[`&:not(${e}-disabled):active`]:{[`${i}::before`]:{insetInlineEnd:n.switchHandleActiveInset,insetInlineStart:0},[`&${e}-checked ${i}::before`]:{insetInlineEnd:0,insetInlineStart:n.switchHandleActiveInset}}}}},K=n=>{const{componentCls:e,trackHeight:l,trackPadding:t,innerMinMargin:r,innerMaxMargin:o,handleSize:d,calc:i}=n,a=`${e}-inner`,c=h(i(d).add(i(t).mul(2)).equal()),s=h(i(o).mul(2).equal());return{[e]:{[a]:{display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:o,paddingInlineEnd:r,transition:`padding-inline-start ${n.switchDuration} ease-in-out, padding-inline-end ${n.switchDuration} ease-in-out`,[`${a}-checked, ${a}-unchecked`]:{display:"block",color:n.colorTextLightSolid,fontSize:n.fontSizeSM,transition:`margin-inline-start ${n.switchDuration} ease-in-out, margin-inline-end ${n.switchDuration} ease-in-out`,pointerEvents:"none",minHeight:l},[`${a}-checked`]:{marginInlineStart:`calc(-100% + ${c} - ${s})`,marginInlineEnd:`calc(100% - ${c} + ${s})`},[`${a}-unchecked`]:{marginTop:i(l).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}},[`&${e}-checked ${a}`]:{paddingInlineStart:r,paddingInlineEnd:o,[`${a}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${a}-unchecked`]:{marginInlineStart:`calc(100% - ${c} + ${s})`,marginInlineEnd:`calc(-100% + ${c} - ${s})`}},[`&:not(${e}-disabled):active`]:{[`&:not(${e}-checked) ${a}`]:{[`${a}-unchecked`]:{marginInlineStart:i(t).mul(2).equal(),marginInlineEnd:i(t).mul(-1).mul(2).equal()}},[`&${e}-checked ${a}`]:{[`${a}-checked`]:{marginInlineStart:i(t).mul(-1).mul(2).equal(),marginInlineEnd:i(t).mul(2).equal()}}}}}},U=n=>{const{componentCls:e,trackHeight:l,trackMinWidth:t}=n;return{[e]:Object.assign(Object.assign(Object.assign(Object.assign({},j(n)),{position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:t,height:l,lineHeight:`${h(l)}`,verticalAlign:"middle",background:n.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:`all ${n.motionDurationMid}`,userSelect:"none",[`&:hover:not(${e}-disabled)`]:{background:n.colorTextTertiary}}),W(n)),{[`&${e}-checked`]:{background:n.switchColor,[`&:hover:not(${e}-disabled)`]:{background:n.colorPrimaryHover}},[`&${e}-loading, &${e}-disabled`]:{cursor:"not-allowed",opacity:n.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}},[`&${e}-rtl`]:{direction:"rtl"}})}},Y=n=>{const{fontSize:e,lineHeight:l,controlHeight:t,colorWhite:r}=n,o=e*l,d=t/2,i=2,a=o-i*2,c=d-i*2;return{trackHeight:o,trackHeightSM:d,trackMinWidth:a*2+i*4,trackMinWidthSM:c*2+i*2,trackPadding:i,handleBg:r,handleSize:a,handleSizeSM:c,handleShadow:`0 2px 4px 0 ${new L("#00230b").setAlpha(.2).toRgbString()}`,innerMinMargin:a/2,innerMaxMargin:a+i+i*2,innerMinMarginSM:c/2,innerMaxMarginSM:c+i+i*2}},Z=D("Switch",n=>{const e=T(n,{switchDuration:n.motionDurationMid,switchColor:n.colorPrimary,switchDisabledOpacity:n.opacityLoading,switchLoadingIconSize:n.calc(n.fontSizeIcon).mul(.75).equal(),switchLoadingIconColor:`rgba(0, 0, 0, ${n.opacityLoading})`,switchHandleActiveInset:"-30%"});return[U(e),K(e),J(e),G(e),F(e)]},Y);var nn=globalThis&&globalThis.__rest||function(n,e){var l={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(l[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(n);r<t.length;r++)e.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(n,t[r])&&(l[t[r]]=n[t[r]]);return l};const en=m.forwardRef((n,e)=>{const{prefixCls:l,size:t,disabled:r,loading:o,className:d,rootClassName:i,style:a,checked:c,value:s,defaultChecked:g,defaultValue:b,onChange:$}=n,I=nn(n,["prefixCls","size","disabled","loading","className","rootClassName","style","checked","value","defaultChecked","defaultValue","onChange"]),[w,C]=N(!1,{value:c??s,defaultValue:g??b}),{getPrefixCls:f,direction:v,switch:S}=m.useContext(X),M=m.useContext(A),y=(r??M)||o,u=f("switch",l),x=m.createElement("div",{className:`${u}-handle`},o&&m.createElement(B,{className:`${u}-loading-icon`})),[k,E,z]=Z(u),H=_(t),q=R(S==null?void 0:S.className,{[`${u}-small`]:H==="small",[`${u}-loading`]:o,[`${u}-rtl`]:v==="rtl"},d,i,E,z),O=Object.assign(Object.assign({},S==null?void 0:S.style),a),P=function(){C(arguments.length<=0?void 0:arguments[0]),$==null||$.apply(void 0,arguments)};return k(m.createElement(V,{component:"Switch"},m.createElement(Q,Object.assign({},I,{checked:w,onChange:P,prefixCls:u,className:q,style:O,disabled:y,ref:e,loadingIcon:x}))))}),p=en;p.__ANT_SWITCH=!0;const ln=p;export{ln as S};
