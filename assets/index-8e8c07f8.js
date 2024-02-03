import{r as i,ea as X,bH as Z,eb as k,p as ee,dT as ne,ec as re,s as N,ed as W,ee as T,ef as D,eg as te,eh as ae,ei as ie,ej as oe,dA as se,t as de,ek as le,dB as pe,e6 as ue,e5 as ce,u as m,dC as z,el as A,em as H,J as be,dv as ge,dE as fe}from"./index-cdd95245.js";import{I as me}from"./InputNumber-d6d7b041.js";var he=function(e,a){return i.createElement(X,Z({},e,{ref:a,icon:k}))};const $e=i.forwardRef(he),B=(n,e)=>{let{componentCls:a,borderRadiusSM:t,borderRadiusLG:o}=n;const s=e==="lg"?o:t;return{[`&-${e}`]:{[`${a}-handler-wrap`]:{borderStartEndRadius:s,borderEndEndRadius:s},[`${a}-handler-up`]:{borderStartEndRadius:s},[`${a}-handler-down`]:{borderEndEndRadius:s}}}},xe=n=>{const{componentCls:e,lineWidth:a,lineType:t,colorBorder:o,borderRadius:s,fontSizeLG:b,controlHeightLG:l,controlHeightSM:g,colorError:w,inputPaddingHorizontalSM:h,colorTextDescription:f,motionDurationMid:p,colorPrimary:$,inputPaddingHorizontal:S,inputPaddingVertical:y,colorBgContainer:d,colorTextDisabled:I,borderRadiusSM:r,borderRadiusLG:x,controlWidth:u,handleVisible:O}=n;return[{[e]:Object.assign(Object.assign(Object.assign(Object.assign({},N(n)),W(n)),T(n,e)),{display:"inline-block",width:u,margin:0,padding:0,border:`${a}px ${t} ${o}`,borderRadius:s,"&-rtl":{direction:"rtl",[`${e}-input`]:{direction:"rtl"}},"&-lg":{padding:0,fontSize:b,borderRadius:x,[`input${e}-input`]:{height:l-2*a}},"&-sm":{padding:0,borderRadius:r,[`input${e}-input`]:{height:g-2*a,padding:`0 ${h}px`}},"&:hover":Object.assign({},D(n)),"&-focused":Object.assign({},te(n)),"&-out-of-range":{[`${e}-input-wrap`]:{input:{color:w}}},"&-group":Object.assign(Object.assign(Object.assign({},N(n)),ae(n)),{"&-wrapper":{display:"inline-block",textAlign:"start",verticalAlign:"top",[`${e}-affix-wrapper`]:{width:"100%"},"&-lg":{[`${e}-group-addon`]:{borderRadius:x,fontSize:n.fontSizeLG}},"&-sm":{[`${e}-group-addon`]:{borderRadius:r}},[`${e}-wrapper-disabled > ${e}-group-addon`]:Object.assign({},ie(n))}}),[`&-disabled ${e}-input`]:{cursor:"not-allowed"},[e]:{"&-input":Object.assign(Object.assign(Object.assign(Object.assign({},N(n)),{width:"100%",padding:`${y}px ${S}px`,textAlign:"start",backgroundColor:"transparent",border:0,borderRadius:s,outline:0,transition:`all ${p} linear`,appearance:"textfield",fontSize:"inherit"}),oe(n.colorTextPlaceholder)),{'&[type="number"]::-webkit-inner-spin-button, &[type="number"]::-webkit-outer-spin-button':{margin:0,webkitAppearance:"none",appearance:"none"}})}})},{[e]:Object.assign(Object.assign(Object.assign({[`&:hover ${e}-handler-wrap, &-focused ${e}-handler-wrap`]:{opacity:1},[`${e}-handler-wrap`]:{position:"absolute",insetBlockStart:0,insetInlineEnd:0,width:n.handleWidth,height:"100%",background:d,borderStartStartRadius:0,borderStartEndRadius:s,borderEndEndRadius:s,borderEndStartRadius:0,opacity:O===!0?1:0,display:"flex",flexDirection:"column",alignItems:"stretch",transition:`opacity ${p} linear ${p}`,[`${e}-handler`]:{display:"flex",alignItems:"center",justifyContent:"center",flex:"auto",height:"40%",[`
              ${e}-handler-up-inner,
              ${e}-handler-down-inner
            `]:{marginInlineEnd:0,fontSize:n.handleFontSize}}},[`${e}-handler`]:{height:"50%",overflow:"hidden",color:f,fontWeight:"bold",lineHeight:0,textAlign:"center",cursor:"pointer",borderInlineStart:`${a}px ${t} ${o}`,transition:`all ${p} linear`,"&:active":{background:n.colorFillAlter},"&:hover":{height:"60%",[`
              ${e}-handler-up-inner,
              ${e}-handler-down-inner
            `]:{color:$}},"&-up-inner, &-down-inner":Object.assign(Object.assign({},se()),{color:f,transition:`all ${p} linear`,userSelect:"none"})},[`${e}-handler-up`]:{borderStartEndRadius:s},[`${e}-handler-down`]:{borderBlockStart:`${a}px ${t} ${o}`,borderEndEndRadius:s}},B(n,"lg")),B(n,"sm")),{"&-disabled, &-readonly":{[`${e}-handler-wrap`]:{display:"none"},[`${e}-input`]:{color:"inherit"}},[`
          ${e}-handler-up-disabled,
          ${e}-handler-down-disabled
        `]:{cursor:"not-allowed"},[`
          ${e}-handler-up-disabled:hover &-handler-up-inner,
          ${e}-handler-down-disabled:hover &-handler-down-inner
        `]:{color:I}})},{[`${e}-borderless`]:{borderColor:"transparent",boxShadow:"none",[`${e}-handler-down`]:{borderBlockStartWidth:0}}}]},we=n=>{const{componentCls:e,inputPaddingVertical:a,inputPaddingHorizontal:t,inputAffixPadding:o,controlWidth:s,borderRadiusLG:b,borderRadiusSM:l}=n;return{[`${e}-affix-wrapper`]:Object.assign(Object.assign(Object.assign({},W(n)),T(n,`${e}-affix-wrapper`)),{position:"relative",display:"inline-flex",width:s,padding:0,paddingInlineStart:t,"&-lg":{borderRadius:b},"&-sm":{borderRadius:l},[`&:not(${e}-affix-wrapper-disabled):hover`]:Object.assign(Object.assign({},D(n)),{zIndex:1}),"&-focused, &:focus":{zIndex:1},[`&-disabled > ${e}-disabled`]:{background:"transparent"},[`> div${e}`]:{width:"100%",border:"none",outline:"none",[`&${e}-focused`]:{boxShadow:"none !important"}},[`input${e}-input`]:{padding:`${a}px 0`},"&::before":{display:"inline-block",width:0,visibility:"hidden",content:'"\\a0"'},[`${e}-handler-wrap`]:{zIndex:2},[e]:{"&-prefix, &-suffix":{display:"flex",flex:"none",alignItems:"center",pointerEvents:"none"},"&-prefix":{marginInlineEnd:o},"&-suffix":{position:"absolute",insetBlockStart:0,insetInlineEnd:0,zIndex:1,height:"100%",marginInlineEnd:t,marginInlineStart:o}}})}},Se=ee("InputNumber",n=>{const e=ne(n);return[xe(e),we(e),re(e)]},n=>({controlWidth:90,handleWidth:n.controlHeightSM-n.lineWidth*2,handleFontSize:n.fontSize/2,handleVisible:"auto"}));var ye=globalThis&&globalThis.__rest||function(n,e){var a={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(a[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(n);o<t.length;o++)e.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(n,t[o])&&(a[t[o]]=n[t[o]]);return a};const F=i.forwardRef((n,e)=>{const{getPrefixCls:a,direction:t}=i.useContext(de),o=i.useRef(null);i.useImperativeHandle(e,()=>o.current);const{className:s,rootClassName:b,size:l,disabled:g,prefixCls:w,addonBefore:h,addonAfter:f,prefix:p,bordered:$=!0,readOnly:S,status:y,controls:d}=n,I=ye(n,["className","rootClassName","size","disabled","prefixCls","addonBefore","addonAfter","prefix","bordered","readOnly","status","controls"]),r=a("input-number",w),[x,u]=Se(r),{compactSize:O,compactItemClassnames:G}=le(r,t);let E=i.createElement($e,{className:`${r}-handler-up-inner`}),C=i.createElement(ge,{className:`${r}-handler-down-inner`});const _=typeof d=="boolean"?d:void 0;typeof d=="object"&&(E=typeof d.upIcon>"u"?E:i.createElement("span",{className:`${r}-handler-up-inner`},d.upIcon),C=typeof d.downIcon>"u"?C:i.createElement("span",{className:`${r}-handler-down-inner`},d.downIcon));const{hasFeedback:j,status:L,isFormItemInput:U,feedbackIcon:V}=i.useContext(pe),v=fe(L,y),c=ue(Q=>{var R;return(R=l??O)!==null&&R!==void 0?R:Q}),J=i.useContext(ce),P=g??J,Y=m({[`${r}-lg`]:c==="large",[`${r}-sm`]:c==="small",[`${r}-rtl`]:t==="rtl",[`${r}-borderless`]:!$,[`${r}-in-form-item`]:U},z(r,v),G,u),q=`${r}-group`,K=i.createElement(me,Object.assign({ref:o,disabled:P,className:m(s,b),upHandler:E,downHandler:C,prefixCls:r,readOnly:S,controls:_,prefix:p,suffix:j&&V,addonAfter:f&&i.createElement(A,null,i.createElement(H,{override:!0,status:!0},f)),addonBefore:h&&i.createElement(A,null,i.createElement(H,{override:!0,status:!0},h)),classNames:{input:Y},classes:{affixWrapper:m(z(`${r}-affix-wrapper`,v,j),{[`${r}-affix-wrapper-sm`]:c==="small",[`${r}-affix-wrapper-lg`]:c==="large",[`${r}-affix-wrapper-rtl`]:t==="rtl",[`${r}-affix-wrapper-borderless`]:!$},u),wrapper:m({[`${q}-rtl`]:t==="rtl",[`${r}-wrapper-disabled`]:P},u),group:m({[`${r}-group-wrapper-sm`]:c==="small",[`${r}-group-wrapper-lg`]:c==="large",[`${r}-group-wrapper-rtl`]:t==="rtl"},z(`${r}-group-wrapper`,v,j),u)}},I));return x(K)}),M=F,Ie=n=>i.createElement(be,{theme:{components:{InputNumber:{handleVisible:!0}}}},i.createElement(F,Object.assign({},n)));M._InternalPanelDoNotUseOrYouWillBeFired=Ie;const Ce=M;export{Ce as I};
