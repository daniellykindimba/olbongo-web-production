import{r as i,a as T,b as H,d as q,m as D,f as l,fe as V,e as W,ex as k,Q as F,z as Q,y as R,ff as J,p as K,v as G}from"./index-8c21ffd9.js";import{C as L}from"./index-46fb651e.js";const U=i.forwardRef((n,e)=>{const{getPrefixCls:a}=i.useContext(T),{prefixCls:d,className:o,showArrow:u=!0}=n,$=a("collapse",d),b=H({[`${$}-no-arrow`]:!u},o);return i.createElement(L.Panel,Object.assign({ref:e},n,{prefixCls:$,className:b}))}),Y=U,Z=n=>{const{componentCls:e,contentBg:a,padding:d,headerBg:o,headerPadding:u,collapseHeaderPaddingSM:$,collapseHeaderPaddingLG:b,collapsePanelBorderRadius:c,lineWidth:I,lineType:B,colorBorder:f,colorText:m,colorTextHeading:x,colorTextDisabled:C,fontSizeLG:h,lineHeight:r,lineHeightLG:w,marginSM:S,paddingSM:v,paddingLG:P,paddingXS:y,motionDurationSlow:p,fontSizeIcon:O,contentPadding:j,fontHeight:M,fontHeightLG:N}=n,t=`${l(I)} ${B} ${f}`;return{[e]:Object.assign(Object.assign({},W(n)),{backgroundColor:o,border:t,borderRadius:c,"&-rtl":{direction:"rtl"},[`& > ${e}-item`]:{borderBottom:t,"&:last-child":{[`
            &,
            & > ${e}-header`]:{borderRadius:`0 0 ${l(c)} ${l(c)}`}},[`> ${e}-header`]:{position:"relative",display:"flex",flexWrap:"nowrap",alignItems:"flex-start",padding:u,color:x,lineHeight:r,cursor:"pointer",transition:`all ${p}, visibility 0s`,[`> ${e}-header-text`]:{flex:"auto"},"&:focus":{outline:"none"},[`${e}-expand-icon`]:{height:M,display:"flex",alignItems:"center",paddingInlineEnd:S},[`${e}-arrow`]:Object.assign(Object.assign({},k()),{fontSize:O,transition:`transform ${p}`,svg:{transition:`transform ${p}`}}),[`${e}-header-text`]:{marginInlineEnd:"auto"}},[`${e}-icon-collapsible-only`]:{cursor:"unset",[`${e}-expand-icon`]:{cursor:"pointer"}}},[`${e}-content`]:{color:m,backgroundColor:a,borderTop:t,[`& > ${e}-content-box`]:{padding:j},"&-hidden":{display:"none"}},"&-small":{[`> ${e}-item`]:{[`> ${e}-header`]:{padding:$,paddingInlineStart:y,[`> ${e}-expand-icon`]:{marginInlineStart:n.calc(v).sub(y).equal()}},[`> ${e}-content > ${e}-content-box`]:{padding:v}}},"&-large":{[`> ${e}-item`]:{fontSize:h,lineHeight:w,[`> ${e}-header`]:{padding:b,paddingInlineStart:d,[`> ${e}-expand-icon`]:{height:N,marginInlineStart:n.calc(P).sub(d).equal()}},[`> ${e}-content > ${e}-content-box`]:{padding:P}}},[`${e}-item:last-child`]:{borderBottom:0,[`> ${e}-content`]:{borderRadius:`0 0 ${l(c)} ${l(c)}`}},[`& ${e}-item-disabled > ${e}-header`]:{"\n          &,\n          & > .arrow\n        ":{color:C,cursor:"not-allowed"}},[`&${e}-icon-position-end`]:{[`& > ${e}-item`]:{[`> ${e}-header`]:{[`${e}-expand-icon`]:{order:1,paddingInlineEnd:0,paddingInlineStart:S}}}}})}},ee=n=>{const{componentCls:e}=n,a=`> ${e}-item > ${e}-header ${e}-arrow`;return{[`${e}-rtl`]:{[a]:{transform:"rotate(180deg)"}}}},ne=n=>{const{componentCls:e,headerBg:a,paddingXXS:d,colorBorder:o}=n;return{[`${e}-borderless`]:{backgroundColor:a,border:0,[`> ${e}-item`]:{borderBottom:`1px solid ${o}`},[`
        > ${e}-item:last-child,
        > ${e}-item:last-child ${e}-header
      `]:{borderRadius:0},[`> ${e}-item:last-child`]:{borderBottom:0},[`> ${e}-item > ${e}-content`]:{backgroundColor:"transparent",borderTop:0},[`> ${e}-item > ${e}-content > ${e}-content-box`]:{paddingTop:d}}}},oe=n=>{const{componentCls:e,paddingSM:a}=n;return{[`${e}-ghost`]:{backgroundColor:"transparent",border:0,[`> ${e}-item`]:{borderBottom:0,[`> ${e}-content`]:{backgroundColor:"transparent",border:0,[`> ${e}-content-box`]:{paddingBlock:a}}}}}},te=n=>({headerPadding:`${n.paddingSM}px ${n.padding}px`,headerBg:n.colorFillAlter,contentPadding:`${n.padding}px 16px`,contentBg:n.colorBgContainer}),ae=q("Collapse",n=>{const e=D(n,{collapseHeaderPaddingSM:`${l(n.paddingXS)} ${l(n.paddingSM)}`,collapseHeaderPaddingLG:`${l(n.padding)} ${l(n.paddingLG)}`,collapsePanelBorderRadius:n.borderRadiusLG});return[Z(e),ne(e),oe(e),ee(e),V(e)]},te),re=i.forwardRef((n,e)=>{const{getPrefixCls:a,direction:d,collapse:o}=i.useContext(T),{prefixCls:u,className:$,rootClassName:b,style:c,bordered:I=!0,ghost:B,size:f,expandIconPosition:m="start",children:x,expandIcon:C}=n,h=F(t=>{var s;return(s=f??t)!==null&&s!==void 0?s:"middle"}),r=a("collapse",u),w=a(),[S,v,P]=ae(r),y=i.useMemo(()=>m==="left"?"start":m==="right"?"end":m,[m]),p=C??(o==null?void 0:o.expandIcon),O=i.useCallback(function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const s=typeof p=="function"?p(t):i.createElement(Q,{rotate:t.isActive?90:void 0});return R(s,()=>{var g;return{className:H((g=s==null?void 0:s.props)===null||g===void 0?void 0:g.className,`${r}-arrow`)}})},[p,r]),j=H(`${r}-icon-position-${y}`,{[`${r}-borderless`]:!I,[`${r}-rtl`]:d==="rtl",[`${r}-ghost`]:!!B,[`${r}-${h}`]:h!=="middle"},o==null?void 0:o.className,$,b,v,P),M=Object.assign(Object.assign({},J(w)),{motionAppear:!1,leavedClassName:`${r}-content-hidden`}),N=i.useMemo(()=>x?K(x).map((t,s)=>{var g,z;if(!((g=t.props)===null||g===void 0)&&g.disabled){const A=(z=t.key)!==null&&z!==void 0?z:String(s),{disabled:X,collapsible:E}=t.props,_=Object.assign(Object.assign({},G(t.props,["disabled"])),{key:A,collapsible:E??(X?"disabled":void 0)});return R(t,_)}return t}):null,[x]);return S(i.createElement(L,Object.assign({ref:e,openMotion:M},G(n,["rootClassName"]),{expandIcon:O,prefixCls:r,className:j,style:Object.assign(Object.assign({},o==null?void 0:o.style),c)}),N))}),le=Object.assign(re,{Panel:Y});export{le as C};
