import{r as i,a as T,b as H,d as q,m as D,u as l,g3 as V,e as W,fl as k,N as F,y as J,x as R,g4 as K,o as Q,q as G}from"./index-62ca8c71.js";import{C as L}from"./index-641f7544.js";const U=i.forwardRef((n,e)=>{const{getPrefixCls:a}=i.useContext(T),{prefixCls:d,className:o,showArrow:m=!0}=n,g=a("collapse",d),b=H({[`${g}-no-arrow`]:!m},o);return i.createElement(L.Panel,Object.assign({ref:e},n,{prefixCls:g,className:b}))}),Y=U,Z=n=>{const{componentCls:e,contentBg:a,padding:d,headerBg:o,headerPadding:m,collapseHeaderPaddingSM:g,collapseHeaderPaddingLG:b,collapsePanelBorderRadius:c,lineWidth:I,lineType:B,colorBorder:x,colorText:$,colorTextHeading:f,colorTextDisabled:C,fontSizeLG:h,lineHeight:r,lineHeightLG:w,marginSM:S,paddingSM:v,paddingLG:P,paddingXS:y,motionDurationSlow:u,fontSizeIcon:N,contentPadding:O,fontHeight:j,fontHeightLG:M}=n,t=`${l(I)} ${B} ${x}`;return{[e]:Object.assign(Object.assign({},W(n)),{backgroundColor:o,border:t,borderBottom:0,borderRadius:c,"&-rtl":{direction:"rtl"},[`& > ${e}-item`]:{borderBottom:t,"&:last-child":{[`
            &,
            & > ${e}-header`]:{borderRadius:`0 0 ${l(c)} ${l(c)}`}},[`> ${e}-header`]:{position:"relative",display:"flex",flexWrap:"nowrap",alignItems:"flex-start",padding:m,color:f,lineHeight:r,cursor:"pointer",transition:`all ${u}, visibility 0s`,[`> ${e}-header-text`]:{flex:"auto"},"&:focus":{outline:"none"},[`${e}-expand-icon`]:{height:j,display:"flex",alignItems:"center",paddingInlineEnd:S},[`${e}-arrow`]:Object.assign(Object.assign({},k()),{fontSize:N,svg:{transition:`transform ${u}`}}),[`${e}-header-text`]:{marginInlineEnd:"auto"}},[`${e}-icon-collapsible-only`]:{cursor:"unset",[`${e}-expand-icon`]:{cursor:"pointer"}}},[`${e}-content`]:{color:$,backgroundColor:a,borderTop:t,[`& > ${e}-content-box`]:{padding:O},"&-hidden":{display:"none"}},"&-small":{[`> ${e}-item`]:{[`> ${e}-header`]:{padding:g,paddingInlineStart:y,[`> ${e}-expand-icon`]:{marginInlineStart:n.calc(v).sub(y).equal()}},[`> ${e}-content > ${e}-content-box`]:{padding:v}}},"&-large":{[`> ${e}-item`]:{fontSize:h,lineHeight:w,[`> ${e}-header`]:{padding:b,paddingInlineStart:d,[`> ${e}-expand-icon`]:{height:M,marginInlineStart:n.calc(P).sub(d).equal()}},[`> ${e}-content > ${e}-content-box`]:{padding:P}}},[`${e}-item:last-child`]:{[`> ${e}-content`]:{borderRadius:`0 0 ${l(c)} ${l(c)}`}},[`& ${e}-item-disabled > ${e}-header`]:{"\n          &,\n          & > .arrow\n        ":{color:C,cursor:"not-allowed"}},[`&${e}-icon-position-end`]:{[`& > ${e}-item`]:{[`> ${e}-header`]:{[`${e}-expand-icon`]:{order:1,paddingInlineEnd:0,paddingInlineStart:S}}}}})}},ee=n=>{const{componentCls:e}=n,a=`> ${e}-item > ${e}-header ${e}-arrow svg`;return{[`${e}-rtl`]:{[a]:{transform:"rotate(180deg)"}}}},ne=n=>{const{componentCls:e,headerBg:a,paddingXXS:d,colorBorder:o}=n;return{[`${e}-borderless`]:{backgroundColor:a,border:0,[`> ${e}-item`]:{borderBottom:`1px solid ${o}`},[`
        > ${e}-item:last-child,
        > ${e}-item:last-child ${e}-header
      `]:{borderRadius:0},[`> ${e}-item:last-child`]:{borderBottom:0},[`> ${e}-item > ${e}-content`]:{backgroundColor:"transparent",borderTop:0},[`> ${e}-item > ${e}-content > ${e}-content-box`]:{paddingTop:d}}}},oe=n=>{const{componentCls:e,paddingSM:a}=n;return{[`${e}-ghost`]:{backgroundColor:"transparent",border:0,[`> ${e}-item`]:{borderBottom:0,[`> ${e}-content`]:{backgroundColor:"transparent",border:0,[`> ${e}-content-box`]:{paddingBlock:a}}}}}},te=n=>({headerPadding:`${n.paddingSM}px ${n.padding}px`,headerBg:n.colorFillAlter,contentPadding:`${n.padding}px 16px`,contentBg:n.colorBgContainer}),ae=q("Collapse",n=>{const e=D(n,{collapseHeaderPaddingSM:`${l(n.paddingXS)} ${l(n.paddingSM)}`,collapseHeaderPaddingLG:`${l(n.padding)} ${l(n.paddingLG)}`,collapsePanelBorderRadius:n.borderRadiusLG});return[Z(e),ne(e),oe(e),ee(e),V(e)]},te),re=i.forwardRef((n,e)=>{const{getPrefixCls:a,direction:d,collapse:o}=i.useContext(T),{prefixCls:m,className:g,rootClassName:b,style:c,bordered:I=!0,ghost:B,size:x,expandIconPosition:$="start",children:f,expandIcon:C}=n,h=F(t=>{var s;return(s=x??t)!==null&&s!==void 0?s:"middle"}),r=a("collapse",m),w=a(),[S,v,P]=ae(r),y=i.useMemo(()=>$==="left"?"start":$==="right"?"end":$,[$]),u=C??(o==null?void 0:o.expandIcon),N=i.useCallback(function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const s=typeof u=="function"?u(t):i.createElement(J,{rotate:t.isActive?90:void 0});return R(s,()=>{var p;return{className:H((p=s==null?void 0:s.props)===null||p===void 0?void 0:p.className,`${r}-arrow`)}})},[u,r]),O=H(`${r}-icon-position-${y}`,{[`${r}-borderless`]:!I,[`${r}-rtl`]:d==="rtl",[`${r}-ghost`]:!!B,[`${r}-${h}`]:h!=="middle"},o==null?void 0:o.className,g,b,v,P),j=Object.assign(Object.assign({},K(w)),{motionAppear:!1,leavedClassName:`${r}-content-hidden`}),M=i.useMemo(()=>f?Q(f).map((t,s)=>{var p,z;if(!((p=t.props)===null||p===void 0)&&p.disabled){const A=(z=t.key)!==null&&z!==void 0?z:String(s),{disabled:X,collapsible:E}=t.props,_=Object.assign(Object.assign({},G(t.props,["disabled"])),{key:A,collapsible:E??(X?"disabled":void 0)});return R(t,_)}return t}):null,[f]);return S(i.createElement(L,Object.assign({ref:e,openMotion:j},G(n,["rootClassName"]),{expandIcon:N,prefixCls:r,className:O,style:Object.assign(Object.assign({},o==null?void 0:o.style),c)}),M))}),le=Object.assign(re,{Panel:Y});export{le as C};
