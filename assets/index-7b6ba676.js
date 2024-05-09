import{r as o,A as te,v as re,gj as ae,ap as ie,au as oe,d as de,m as le,ai as se,E as ce,e as G,aj as V,ak as pe,u as d,al as ue,am as ge,gk as be,gl as me,gm as fe,ao as he,fn as $e,a as Se,f as we,K as Ie,I as xe,N as ye,O as Oe,M as Ce,b as $,a7 as P,a3 as W,T as L,aR as Ee,fm as ve,X as je}from"./index-351477c3.js";import{I as Re}from"./InputNumber-e7f57cfa.js";var Be=function(e,a){return o.createElement(te,re({},e,{ref:a,icon:ae}))},Ne=o.forwardRef(Be);const ze=Ne,Ae=n=>{var e;const a=(e=n.handleVisible)!==null&&e!==void 0?e:"auto";return Object.assign(Object.assign({},ie(n)),{controlWidth:90,handleWidth:n.controlHeightSM-n.lineWidth*2,handleFontSize:n.fontSize/2,handleVisible:a,handleActiveBg:n.colorFillAlter,handleBg:n.colorBgContainer,filledHandleBg:new oe(n.colorFillSecondary).onBackground(n.colorBgContainer).toHexString(),handleHoverColor:n.colorPrimary,handleBorderColor:n.colorBorder,handleOpacity:a===!0?1:0})},D=(n,e)=>{let{componentCls:a,borderRadiusSM:t,borderRadiusLG:i}=n;const l=e==="lg"?i:t;return{[`&-${e}`]:{[`${a}-handler-wrap`]:{borderStartEndRadius:l,borderEndEndRadius:l},[`${a}-handler-up`]:{borderStartEndRadius:l},[`${a}-handler-down`]:{borderEndEndRadius:l}}}},He=n=>{const{componentCls:e,lineWidth:a,lineType:t,borderRadius:i,fontSizeLG:l,controlHeightLG:S,controlHeightSM:c,colorError:p,paddingInlineSM:w,paddingBlockSM:b,paddingBlockLG:m,paddingInlineLG:j,colorTextDescription:O,motionDurationMid:u,handleHoverColor:R,paddingInline:s,paddingBlock:B,handleBg:C,handleActiveBg:r,colorTextDisabled:E,borderRadiusSM:v,borderRadiusLG:g,controlWidth:N,handleOpacity:z,handleBorderColor:I,filledHandleBg:x,lineHeightLG:y,calc:f}=n;return[{[e]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},G(n)),V(n)),{display:"inline-block",width:N,margin:0,padding:0,borderRadius:i}),pe(n,{[`${e}-handler-wrap`]:{background:C,[`${e}-handler-down`]:{borderBlockStart:`${d(a)} ${t} ${I}`}}})),ue(n,{[`${e}-handler-wrap`]:{background:x,[`${e}-handler-down`]:{borderBlockStart:`${d(a)} ${t} ${I}`}},"&:focus-within":{[`${e}-handler-wrap`]:{background:C}}})),ge(n)),{"&-rtl":{direction:"rtl",[`${e}-input`]:{direction:"rtl"}},"&-lg":{padding:0,fontSize:l,lineHeight:y,borderRadius:g,[`input${e}-input`]:{height:f(S).sub(f(a).mul(2)).equal(),padding:`${d(m)} ${d(j)}`}},"&-sm":{padding:0,borderRadius:v,[`input${e}-input`]:{height:f(c).sub(f(a).mul(2)).equal(),padding:`${d(b)} ${d(w)}`}},"&-out-of-range":{[`${e}-input-wrap`]:{input:{color:p}}},"&-group":Object.assign(Object.assign(Object.assign({},G(n)),be(n)),{"&-wrapper":Object.assign(Object.assign(Object.assign({display:"inline-block",textAlign:"start",verticalAlign:"top",[`${e}-affix-wrapper`]:{width:"100%"},"&-lg":{[`${e}-group-addon`]:{borderRadius:g,fontSize:n.fontSizeLG}},"&-sm":{[`${e}-group-addon`]:{borderRadius:v}}},me(n)),fe(n)),{[`&:not(${e}-compact-first-item):not(${e}-compact-last-item)${e}-compact-item`]:{[`${e}, ${e}-group-addon`]:{borderRadius:0}},[`&:not(${e}-compact-last-item)${e}-compact-first-item`]:{[`${e}, ${e}-group-addon`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&:not(${e}-compact-first-item)${e}-compact-last-item`]:{[`${e}, ${e}-group-addon`]:{borderStartStartRadius:0,borderEndStartRadius:0}}})}),[`&-disabled ${e}-input`]:{cursor:"not-allowed"},[e]:{"&-input":Object.assign(Object.assign(Object.assign(Object.assign({},G(n)),{width:"100%",padding:`${d(B)} ${d(s)}`,textAlign:"start",backgroundColor:"transparent",border:0,borderRadius:i,outline:0,transition:`all ${u} linear`,appearance:"textfield",fontSize:"inherit"}),he(n.colorTextPlaceholder)),{'&[type="number"]::-webkit-inner-spin-button, &[type="number"]::-webkit-outer-spin-button':{margin:0,webkitAppearance:"none",appearance:"none"}})}})},{[e]:Object.assign(Object.assign(Object.assign({[`&:hover ${e}-handler-wrap, &-focused ${e}-handler-wrap`]:{opacity:1},[`${e}-handler-wrap`]:{position:"absolute",insetBlockStart:0,insetInlineEnd:0,width:n.handleWidth,height:"100%",borderStartStartRadius:0,borderStartEndRadius:i,borderEndEndRadius:i,borderEndStartRadius:0,opacity:z,display:"flex",flexDirection:"column",alignItems:"stretch",transition:`opacity ${u} linear ${u}`,[`${e}-handler`]:{display:"flex",alignItems:"center",justifyContent:"center",flex:"auto",height:"40%",[`
              ${e}-handler-up-inner,
              ${e}-handler-down-inner
            `]:{marginInlineEnd:0,fontSize:n.handleFontSize}}},[`${e}-handler`]:{height:"50%",overflow:"hidden",color:O,fontWeight:"bold",lineHeight:0,textAlign:"center",cursor:"pointer",borderInlineStart:`${d(a)} ${t} ${I}`,transition:`all ${u} linear`,"&:active":{background:r},"&:hover":{height:"60%",[`
              ${e}-handler-up-inner,
              ${e}-handler-down-inner
            `]:{color:R}},"&-up-inner, &-down-inner":Object.assign(Object.assign({},$e()),{color:O,transition:`all ${u} linear`,userSelect:"none"})},[`${e}-handler-up`]:{borderStartEndRadius:i},[`${e}-handler-down`]:{borderEndEndRadius:i}},D(n,"lg")),D(n,"sm")),{"&-disabled, &-readonly":{[`${e}-handler-wrap`]:{display:"none"},[`${e}-input`]:{color:"inherit"}},[`
          ${e}-handler-up-disabled,
          ${e}-handler-down-disabled
        `]:{cursor:"not-allowed"},[`
          ${e}-handler-up-disabled:hover &-handler-up-inner,
          ${e}-handler-down-disabled:hover &-handler-down-inner
        `]:{color:E}})}]},Ge=n=>{const{componentCls:e,paddingBlock:a,paddingInline:t,inputAffixPadding:i,controlWidth:l,borderRadiusLG:S,borderRadiusSM:c,paddingInlineLG:p,paddingInlineSM:w,paddingBlockLG:b,paddingBlockSM:m}=n;return{[`${e}-affix-wrapper`]:Object.assign(Object.assign({[`input${e}-input`]:{padding:`${d(a)} 0`}},V(n)),{position:"relative",display:"inline-flex",width:l,padding:0,paddingInlineStart:t,"&-lg":{borderRadius:S,paddingInlineStart:p,[`input${e}-input`]:{padding:`${d(b)} 0`}},"&-sm":{borderRadius:c,paddingInlineStart:w,[`input${e}-input`]:{padding:`${d(m)} 0`}},[`&:not(${e}-disabled):hover`]:{zIndex:1},"&-focused, &:focus":{zIndex:1},[`&-disabled > ${e}-disabled`]:{background:"transparent"},[`> div${e}`]:{width:"100%",border:"none",outline:"none",[`&${e}-focused`]:{boxShadow:"none !important"}},"&::before":{display:"inline-block",width:0,visibility:"hidden",content:'"\\a0"'},[`${e}-handler-wrap`]:{zIndex:2},[e]:{color:"inherit","&-prefix, &-suffix":{display:"flex",flex:"none",alignItems:"center",pointerEvents:"none"},"&-prefix":{marginInlineEnd:i},"&-suffix":{position:"absolute",insetBlockStart:0,insetInlineEnd:0,zIndex:1,height:"100%",marginInlineEnd:t,marginInlineStart:i}}})}},Te=de("InputNumber",n=>{const e=le(n,se(n));return[He(e),Ge(e),ce(e)]},Ae,{unitless:{handleOpacity:!0}});var Fe=globalThis&&globalThis.__rest||function(n,e){var a={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(a[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(n);i<t.length;i++)e.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(n,t[i])&&(a[t[i]]=n[t[i]]);return a};const _=o.forwardRef((n,e)=>{const{getPrefixCls:a,direction:t}=o.useContext(Se),i=o.useRef(null);o.useImperativeHandle(e,()=>i.current);const{className:l,rootClassName:S,size:c,disabled:p,prefixCls:w,addonBefore:b,addonAfter:m,prefix:j,bordered:O,readOnly:u,status:R,controls:s,variant:B}=n,C=Fe(n,["className","rootClassName","size","disabled","prefixCls","addonBefore","addonAfter","prefix","bordered","readOnly","status","controls","variant"]),r=a("input-number",w),E=we(r),[v,g,N]=Te(r,E),{compactSize:z,compactItemClassnames:I}=Ie(r,t);let x=o.createElement(ze,{className:`${r}-handler-up-inner`}),y=o.createElement(ve,{className:`${r}-handler-down-inner`});const f=typeof s=="boolean"?s:void 0;typeof s=="object"&&(x=typeof s.upIcon>"u"?x:o.createElement("span",{className:`${r}-handler-up-inner`},s.upIcon),y=typeof s.downIcon>"u"?y:o.createElement("span",{className:`${r}-handler-down-inner`},s.downIcon));const{hasFeedback:A,status:k,isFormItemInput:q,feedbackIcon:K}=o.useContext(xe),T=je(k,R),h=ye(ne=>{var H;return(H=c??z)!==null&&H!==void 0?H:ne}),X=o.useContext(Oe),Y=p??X,[F,M]=Ce(B,O),J=A&&o.createElement(o.Fragment,null,K),Q=$({[`${r}-lg`]:h==="large",[`${r}-sm`]:h==="small",[`${r}-rtl`]:t==="rtl",[`${r}-in-form-item`]:q},g),Z=`${r}-group`,ee=o.createElement(Re,Object.assign({ref:i,disabled:Y,className:$(N,E,l,S,I),upHandler:x,downHandler:y,prefixCls:r,readOnly:u,controls:f,prefix:j,suffix:J,addonAfter:m&&o.createElement(P,null,o.createElement(W,{override:!0,status:!0},m)),addonBefore:b&&o.createElement(P,null,o.createElement(W,{override:!0,status:!0},b)),classNames:{input:Q,variant:$({[`${r}-${F}`]:M},L(r,T,A)),affixWrapper:$({[`${r}-affix-wrapper-sm`]:h==="small",[`${r}-affix-wrapper-lg`]:h==="large",[`${r}-affix-wrapper-rtl`]:t==="rtl"},g),wrapper:$({[`${Z}-rtl`]:t==="rtl"},g),groupWrapper:$({[`${r}-group-wrapper-sm`]:h==="small",[`${r}-group-wrapper-lg`]:h==="large",[`${r}-group-wrapper-rtl`]:t==="rtl",[`${r}-group-wrapper-${F}`]:M},L(`${r}-group-wrapper`,T,A),g)}},C));return v(ee)}),U=_,Me=n=>o.createElement(Ee,{theme:{components:{InputNumber:{handleVisible:!0}}}},o.createElement(_,Object.assign({},n)));U._InternalPanelDoNotUseOrYouWillBeFired=Me;const Le=U;export{Le as I};
