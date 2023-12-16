import{r as l,bk as R,b6 as j,bo as L,bp as X,ey as _,b5 as k,eg as D,ez as W,eA as F,bn as q,d3 as M,eB as N,ed as J}from"./index-329f7062.js";import{C as E}from"./index-1fbfeba8.js";const K=l.forwardRef((o,e)=>{const{getPrefixCls:t}=l.useContext(R),{prefixCls:s,className:a,showArrow:$=!0}=o,c=t("collapse",s),m=j({[`${c}-no-arrow`]:!$},a);return l.createElement(E.Panel,Object.assign({ref:e},o,{prefixCls:c,className:m}))}),Q=K,U=o=>{const{componentCls:e,collapseContentBg:t,padding:s,collapseContentPaddingHorizontal:a,collapseHeaderBg:$,collapseHeaderPadding:c,collapseHeaderPaddingSM:m,collapseHeaderPaddingLG:I,collapsePanelBorderRadius:d,lineWidth:v,lineType:u,colorBorder:p,colorText:b,colorTextHeading:C,colorTextDisabled:f,fontSize:r,fontSizeLG:S,lineHeight:x,marginSM:h,paddingSM:g,paddingLG:P,paddingXS:y,motionDurationSlow:B,fontSizeIcon:z}=o,n=`${v}px ${u} ${p}`;return{[e]:Object.assign(Object.assign({},k(o)),{backgroundColor:$,border:n,borderBottom:0,borderRadius:`${d}px`,"&-rtl":{direction:"rtl"},[`& > ${e}-item`]:{borderBottom:n,"&:last-child":{[`
            &,
            & > ${e}-header`]:{borderRadius:`0 0 ${d}px ${d}px`}},[`> ${e}-header`]:{position:"relative",display:"flex",flexWrap:"nowrap",alignItems:"flex-start",padding:c,paddingInlineStart:g,color:C,lineHeight:x,cursor:"pointer",transition:`all ${B}, visibility 0s`,[`> ${e}-header-text`]:{flex:"auto"},"&:focus":{outline:"none"},[`${e}-expand-icon`]:{height:r*x,display:"flex",alignItems:"center",paddingInlineEnd:h,marginInlineStart:s-g},[`${e}-arrow`]:Object.assign(Object.assign({},D()),{fontSize:z,svg:{transition:`transform ${B}`}}),[`${e}-header-text`]:{marginInlineEnd:"auto"}},[`${e}-header-collapsible-only`]:{cursor:"default",[`${e}-header-text`]:{flex:"none",cursor:"pointer"}},[`${e}-icon-collapsible-only`]:{cursor:"default",[`${e}-expand-icon`]:{cursor:"pointer"}}},[`${e}-content`]:{color:b,backgroundColor:t,borderTop:n,[`& > ${e}-content-box`]:{padding:`${s}px ${a}px`},"&-hidden":{display:"none"}},"&-small":{[`> ${e}-item`]:{[`> ${e}-header`]:{padding:m,paddingInlineStart:y,[`> ${e}-expand-icon`]:{marginInlineStart:g-y}},[`> ${e}-content > ${e}-content-box`]:{padding:g}}},"&-large":{[`> ${e}-item`]:{fontSize:S,[`> ${e}-header`]:{padding:I,paddingInlineStart:s,[`> ${e}-expand-icon`]:{height:S*x,marginInlineStart:P-s}},[`> ${e}-content > ${e}-content-box`]:{padding:P}}},[`${e}-item:last-child`]:{[`> ${e}-content`]:{borderRadius:`0 0 ${d}px ${d}px`}},[`& ${e}-item-disabled > ${e}-header`]:{"\n          &,\n          & > .arrow\n        ":{color:f,cursor:"not-allowed"}},[`&${e}-icon-position-end`]:{[`& > ${e}-item`]:{[`> ${e}-header`]:{[`${e}-expand-icon`]:{order:1,paddingInlineEnd:0,paddingInlineStart:h}}}}})}},V=o=>{const{componentCls:e}=o,t=`> ${e}-item > ${e}-header ${e}-arrow svg`;return{[`${e}-rtl`]:{[t]:{transform:"rotate(180deg)"}}}},Y=o=>{const{componentCls:e,collapseHeaderBg:t,paddingXXS:s,colorBorder:a}=o;return{[`${e}-borderless`]:{backgroundColor:t,border:0,[`> ${e}-item`]:{borderBottom:`1px solid ${a}`},[`
        > ${e}-item:last-child,
        > ${e}-item:last-child ${e}-header
      `]:{borderRadius:0},[`> ${e}-item:last-child`]:{borderBottom:0},[`> ${e}-item > ${e}-content`]:{backgroundColor:"transparent",borderTop:0},[`> ${e}-item > ${e}-content > ${e}-content-box`]:{paddingTop:s}}}},Z=o=>{const{componentCls:e,paddingSM:t}=o;return{[`${e}-ghost`]:{backgroundColor:"transparent",border:0,[`> ${e}-item`]:{borderBottom:0,[`> ${e}-content`]:{backgroundColor:"transparent",border:0,[`> ${e}-content-box`]:{paddingBlock:t}}}}}},ee=L("Collapse",o=>{const e=X(o,{collapseContentBg:o.colorBgContainer,collapseHeaderBg:o.colorFillAlter,collapseHeaderPadding:`${o.paddingSM}px ${o.padding}px`,collapseHeaderPaddingSM:`${o.paddingXS}px ${o.paddingSM}px`,collapseHeaderPaddingLG:`${o.padding}px ${o.paddingLG}px`,collapsePanelBorderRadius:o.borderRadiusLG,collapseContentPaddingHorizontal:16});return[U(e),Y(e),Z(e),V(e),_(e)]}),oe=l.forwardRef((o,e)=>{const{getPrefixCls:t,direction:s,collapse:a}=l.useContext(R),{prefixCls:$,className:c,rootClassName:m,style:I,bordered:d=!0,ghost:v,size:u,expandIconPosition:p="start",children:b,expandIcon:C}=o,f=W(n=>{var i;return(i=u??n)!==null&&i!==void 0?i:"middle"}),r=t("collapse",$),S=t(),[x,h]=ee(r),g=l.useMemo(()=>p==="left"?"start":p==="right"?"end":p,[p]),P=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const i=C?C(n):l.createElement(J,{rotate:n.isActive?90:void 0});return N(i,()=>({className:j(i.props.className,`${r}-arrow`)}))},y=j(`${r}-icon-position-${g}`,{[`${r}-borderless`]:!d,[`${r}-rtl`]:s==="rtl",[`${r}-ghost`]:!!v,[`${r}-${f}`]:f!=="middle"},a==null?void 0:a.className,c,m,h),B=Object.assign(Object.assign({},F(S)),{motionAppear:!1,leavedClassName:`${r}-content-hidden`}),z=l.useMemo(()=>b?q(b).map((n,i)=>{var w,H;if(!((w=n.props)===null||w===void 0)&&w.disabled){const T=(H=n.key)!==null&&H!==void 0?H:String(i),{disabled:A,collapsible:O}=n.props,G=Object.assign(Object.assign({},M(n.props,["disabled"])),{key:T,collapsible:O??(A?"disabled":void 0)});return N(n,G)}return n}):null,[b]);return x(l.createElement(E,Object.assign({ref:e,openMotion:B},M(o,["rootClassName"]),{expandIcon:P,prefixCls:r,className:y,style:Object.assign(Object.assign({},a==null?void 0:a.style),I)}),z))}),ae=Object.assign(oe,{Panel:Q});export{ae as C};
