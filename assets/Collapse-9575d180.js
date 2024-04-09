import{r as l,C as R,c as j,g as L,m as X,fH as _,a as k,e$ as D,v as W,fI as F,e as q,o as M,k as N,G as J}from"./index-2fc17c3b.js";import{C as E}from"./index-812618d0.js";const K=l.forwardRef((o,e)=>{const{getPrefixCls:t}=l.useContext(R),{prefixCls:s,className:a,showArrow:$=!0}=o,c=t("collapse",s),m=j({[`${c}-no-arrow`]:!$},a);return l.createElement(E.Panel,Object.assign({ref:e},o,{prefixCls:c,className:m}))}),Q=K,U=o=>{const{componentCls:e,collapseContentBg:t,padding:s,collapseContentPaddingHorizontal:a,collapseHeaderBg:$,collapseHeaderPadding:c,collapseHeaderPaddingSM:m,collapseHeaderPaddingLG:y,collapsePanelBorderRadius:d,lineWidth:B,lineType:u,colorBorder:p,colorText:x,colorTextHeading:C,colorTextDisabled:f,fontSize:r,fontSizeLG:S,lineHeight:b,marginSM:h,paddingSM:g,paddingLG:P,paddingXS:I,motionDurationSlow:v,fontSizeIcon:H}=o,n=`${B}px ${u} ${p}`;return{[e]:Object.assign(Object.assign({},k(o)),{backgroundColor:$,border:n,borderBottom:0,borderRadius:`${d}px`,"&-rtl":{direction:"rtl"},[`& > ${e}-item`]:{borderBottom:n,"&:last-child":{[`
            &,
            & > ${e}-header`]:{borderRadius:`0 0 ${d}px ${d}px`}},[`> ${e}-header`]:{position:"relative",display:"flex",flexWrap:"nowrap",alignItems:"flex-start",padding:c,paddingInlineStart:g,color:C,lineHeight:b,cursor:"pointer",transition:`all ${v}, visibility 0s`,[`> ${e}-header-text`]:{flex:"auto"},"&:focus":{outline:"none"},[`${e}-expand-icon`]:{height:r*b,display:"flex",alignItems:"center",paddingInlineEnd:h,marginInlineStart:s-g},[`${e}-arrow`]:Object.assign(Object.assign({},D()),{fontSize:H,svg:{transition:`transform ${v}`}}),[`${e}-header-text`]:{marginInlineEnd:"auto"}},[`${e}-header-collapsible-only`]:{cursor:"default",[`${e}-header-text`]:{flex:"none",cursor:"pointer"}},[`${e}-icon-collapsible-only`]:{cursor:"default",[`${e}-expand-icon`]:{cursor:"pointer"}}},[`${e}-content`]:{color:x,backgroundColor:t,borderTop:n,[`& > ${e}-content-box`]:{padding:`${s}px ${a}px`},"&-hidden":{display:"none"}},"&-small":{[`> ${e}-item`]:{[`> ${e}-header`]:{padding:m,paddingInlineStart:I,[`> ${e}-expand-icon`]:{marginInlineStart:g-I}},[`> ${e}-content > ${e}-content-box`]:{padding:g}}},"&-large":{[`> ${e}-item`]:{fontSize:S,[`> ${e}-header`]:{padding:y,paddingInlineStart:s,[`> ${e}-expand-icon`]:{height:S*b,marginInlineStart:P-s}},[`> ${e}-content > ${e}-content-box`]:{padding:P}}},[`${e}-item:last-child`]:{[`> ${e}-content`]:{borderRadius:`0 0 ${d}px ${d}px`}},[`& ${e}-item-disabled > ${e}-header`]:{"\n          &,\n          & > .arrow\n        ":{color:f,cursor:"not-allowed"}},[`&${e}-icon-position-end`]:{[`& > ${e}-item`]:{[`> ${e}-header`]:{[`${e}-expand-icon`]:{order:1,paddingInlineEnd:0,paddingInlineStart:h}}}}})}},V=o=>{const{componentCls:e}=o,t=`> ${e}-item > ${e}-header ${e}-arrow svg`;return{[`${e}-rtl`]:{[t]:{transform:"rotate(180deg)"}}}},Y=o=>{const{componentCls:e,collapseHeaderBg:t,paddingXXS:s,colorBorder:a}=o;return{[`${e}-borderless`]:{backgroundColor:t,border:0,[`> ${e}-item`]:{borderBottom:`1px solid ${a}`},[`
        > ${e}-item:last-child,
        > ${e}-item:last-child ${e}-header
      `]:{borderRadius:0},[`> ${e}-item:last-child`]:{borderBottom:0},[`> ${e}-item > ${e}-content`]:{backgroundColor:"transparent",borderTop:0},[`> ${e}-item > ${e}-content > ${e}-content-box`]:{paddingTop:s}}}},Z=o=>{const{componentCls:e,paddingSM:t}=o;return{[`${e}-ghost`]:{backgroundColor:"transparent",border:0,[`> ${e}-item`]:{borderBottom:0,[`> ${e}-content`]:{backgroundColor:"transparent",border:0,[`> ${e}-content-box`]:{paddingBlock:t}}}}}},ee=L("Collapse",o=>{const e=X(o,{collapseContentBg:o.colorBgContainer,collapseHeaderBg:o.colorFillAlter,collapseHeaderPadding:`${o.paddingSM}px ${o.padding}px`,collapseHeaderPaddingSM:`${o.paddingXS}px ${o.paddingSM}px`,collapseHeaderPaddingLG:`${o.padding}px ${o.paddingLG}px`,collapsePanelBorderRadius:o.borderRadiusLG,collapseContentPaddingHorizontal:16});return[U(e),Y(e),Z(e),V(e),_(e)]}),oe=l.forwardRef((o,e)=>{const{getPrefixCls:t,direction:s,collapse:a}=l.useContext(R),{prefixCls:$,className:c,rootClassName:m,style:y,bordered:d=!0,ghost:B,size:u,expandIconPosition:p="start",children:x,expandIcon:C}=o,f=W(n=>{var i;return(i=u??n)!==null&&i!==void 0?i:"middle"}),r=t("collapse",$),S=t(),[b,h]=ee(r),g=l.useMemo(()=>p==="left"?"start":p==="right"?"end":p,[p]),P=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const i=C?C(n):l.createElement(J,{rotate:n.isActive?90:void 0});return N(i,()=>({className:j(i.props.className,`${r}-arrow`)}))},I=j(`${r}-icon-position-${g}`,{[`${r}-borderless`]:!d,[`${r}-rtl`]:s==="rtl",[`${r}-ghost`]:!!B,[`${r}-${f}`]:f!=="middle"},a==null?void 0:a.className,c,m,h),v=Object.assign(Object.assign({},F(S)),{motionAppear:!1,leavedClassName:`${r}-content-hidden`}),H=l.useMemo(()=>x?q(x).map((n,i)=>{var w,z;if(!((w=n.props)===null||w===void 0)&&w.disabled){const G=(z=n.key)!==null&&z!==void 0?z:String(i),{disabled:T,collapsible:O}=n.props,A=Object.assign(Object.assign({},M(n.props,["disabled"])),{key:G,collapsible:O??(T?"disabled":void 0)});return N(n,A)}return n}):null,[x]);return b(l.createElement(E,Object.assign({ref:e,openMotion:v},M(o,["rootClassName"]),{expandIcon:P,prefixCls:r,className:I,style:Object.assign(Object.assign({},a==null?void 0:a.style),y)}),H))}),ae=Object.assign(oe,{Panel:Q});export{ae as C};
