import{p as d,q as l,gO as t,gP as c,s as g,e4 as m,gQ as s}from"./index-d9f4923f.js";function n(o){return{position:o,inset:0}}const p=o=>{const{componentCls:i,antCls:r}=o;return[{[`${i}-root`]:{[`${i}${r}-zoom-enter, ${i}${r}-zoom-appear`]:{transform:"none",opacity:0,animationDuration:o.motionDurationSlow,userSelect:"none"},[`${i}${r}-zoom-leave ${i}-content`]:{pointerEvents:"none"},[`${i}-mask`]:Object.assign(Object.assign({},n("fixed")),{zIndex:o.zIndexPopupBase,height:"100%",backgroundColor:o.colorBgMask,pointerEvents:"none",[`${i}-hidden`]:{display:"none"}}),[`${i}-wrap`]:Object.assign(Object.assign({},n("fixed")),{zIndex:o.zIndexPopupBase,overflow:"auto",outline:0,WebkitOverflowScrolling:"touch",[`&:has(${i}${r}-zoom-enter), &:has(${i}${r}-zoom-appear)`]:{pointerEvents:"none"}})}},{[`${i}-root`]:c(o)}]},$=o=>{const{componentCls:i}=o;return[{[`${i}-root`]:{[`${i}-wrap-rtl`]:{direction:"rtl"},[`${i}-centered`]:{textAlign:"center","&::before":{display:"inline-block",width:0,height:"100%",verticalAlign:"middle",content:'""'},[i]:{top:0,display:"inline-block",paddingBottom:0,textAlign:"start",verticalAlign:"middle"}},[`@media (max-width: ${o.screenSMMax})`]:{[i]:{maxWidth:"calc(100vw - 16px)",margin:`${o.marginXS} auto`},[`${i}-centered`]:{[i]:{flex:1}}}}},{[i]:Object.assign(Object.assign({},g(o)),{pointerEvents:"none",position:"relative",top:100,width:"auto",maxWidth:`calc(100vw - ${o.margin*2}px)`,margin:"0 auto",paddingBottom:o.paddingLG,[`${i}-title`]:{margin:0,color:o.titleColor,fontWeight:o.fontWeightStrong,fontSize:o.titleFontSize,lineHeight:o.titleLineHeight,wordWrap:"break-word"},[`${i}-content`]:{position:"relative",backgroundColor:o.contentBg,backgroundClip:"padding-box",border:0,borderRadius:o.borderRadiusLG,boxShadow:o.boxShadow,pointerEvents:"auto",padding:`${o.paddingMD}px ${o.paddingContentHorizontalLG}px`},[`${i}-close`]:Object.assign({position:"absolute",top:(o.modalHeaderHeight-o.modalCloseBtnSize)/2,insetInlineEnd:(o.modalHeaderHeight-o.modalCloseBtnSize)/2,zIndex:o.zIndexPopupBase+10,padding:0,color:o.modalCloseIconColor,fontWeight:o.fontWeightStrong,lineHeight:1,textDecoration:"none",background:"transparent",borderRadius:o.borderRadiusSM,width:o.modalCloseBtnSize,height:o.modalCloseBtnSize,border:0,outline:0,cursor:"pointer",transition:`color ${o.motionDurationMid}, background-color ${o.motionDurationMid}`,"&-x":{display:"flex",fontSize:o.fontSizeLG,fontStyle:"normal",lineHeight:`${o.modalCloseBtnSize}px`,justifyContent:"center",textTransform:"none",textRendering:"auto"},"&:hover":{color:o.modalIconHoverColor,backgroundColor:o.wireframe?"transparent":o.colorFillContent,textDecoration:"none"},"&:active":{backgroundColor:o.wireframe?"transparent":o.colorFillContentHover}},m(o)),[`${i}-header`]:{color:o.colorText,background:o.headerBg,borderRadius:`${o.borderRadiusLG}px ${o.borderRadiusLG}px 0 0`,marginBottom:o.marginXS},[`${i}-body`]:{fontSize:o.fontSize,lineHeight:o.lineHeight,wordWrap:"break-word"},[`${i}-footer`]:{textAlign:"end",background:o.footerBg,marginTop:o.marginSM,[`${o.antCls}-btn + ${o.antCls}-btn:not(${o.antCls}-dropdown-trigger)`]:{marginBottom:0,marginInlineStart:o.marginXS}},[`${i}-open`]:{overflow:"hidden"}})},{[`${i}-pure-panel`]:{top:"auto",padding:0,display:"flex",flexDirection:"column",[`${i}-content,
          ${i}-body,
          ${i}-confirm-body-wrapper`]:{display:"flex",flexDirection:"column",flex:"auto"},[`${i}-confirm-body`]:{marginBottom:"auto"}}}]},S=o=>{const{componentCls:i}=o,r=`${i}-confirm`;return{[r]:{"&-rtl":{direction:"rtl"},[`${o.antCls}-modal-header`]:{display:"none"},[`${r}-body-wrapper`]:Object.assign({},s()),[`${r}-body`]:{display:"flex",flexWrap:"wrap",alignItems:"center",[`${r}-title`]:{flex:"0 0 100%",display:"block",overflow:"hidden",color:o.colorTextHeading,fontWeight:o.fontWeightStrong,fontSize:o.titleFontSize,lineHeight:o.titleLineHeight,[`+ ${r}-content`]:{marginBlockStart:o.marginXS,flexBasis:"100%",maxWidth:`calc(100% - ${o.modalConfirmIconSize+o.marginSM}px)`}},[`${r}-content`]:{color:o.colorText,fontSize:o.fontSize},[`> ${o.iconCls}`]:{flex:"none",marginInlineEnd:o.marginSM,fontSize:o.modalConfirmIconSize,[`+ ${r}-title`]:{flex:1},[`+ ${r}-title + ${r}-content`]:{marginInlineStart:o.modalConfirmIconSize+o.marginSM}}},[`${r}-btns`]:{textAlign:"end",marginTop:o.marginSM,[`${o.antCls}-btn + ${o.antCls}-btn`]:{marginBottom:0,marginInlineStart:o.marginXS}}},[`${r}-error ${r}-body > ${o.iconCls}`]:{color:o.colorError},[`${r}-warning ${r}-body > ${o.iconCls},
        ${r}-confirm ${r}-body > ${o.iconCls}`]:{color:o.colorWarning},[`${r}-info ${r}-body > ${o.iconCls}`]:{color:o.colorInfo},[`${r}-success ${r}-body > ${o.iconCls}`]:{color:o.colorSuccess}}},f=o=>{const{componentCls:i}=o;return{[`${i}-root`]:{[`${i}-wrap-rtl`]:{direction:"rtl",[`${i}-confirm-body`]:{direction:"rtl"}}}}},b=o=>{const{componentCls:i,antCls:r}=o,e=`${i}-confirm`;return{[i]:{[`${i}-content`]:{padding:0},[`${i}-header`]:{padding:o.modalHeaderPadding,borderBottom:`${o.modalHeaderBorderWidth}px ${o.modalHeaderBorderStyle} ${o.modalHeaderBorderColorSplit}`,marginBottom:0},[`${i}-body`]:{padding:o.modalBodyPadding},[`${i}-footer`]:{padding:`${o.modalFooterPaddingVertical}px ${o.modalFooterPaddingHorizontal}px`,borderTop:`${o.modalFooterBorderWidth}px ${o.modalFooterBorderStyle} ${o.modalFooterBorderColorSplit}`,borderRadius:`0 0 ${o.borderRadiusLG}px ${o.borderRadiusLG}px`,marginTop:0}},[e]:{[`${r}-modal-body`]:{padding:`${o.padding*2}px ${o.padding*2}px ${o.paddingLG}px`},[`${e}-body`]:{[`> ${o.iconCls}`]:{marginInlineEnd:o.margin,[`+ ${e}-title + ${e}-content`]:{marginInlineStart:o.modalConfirmIconSize+o.margin}}},[`${e}-btns`]:{marginTop:o.marginLG}}}},h=d("Modal",o=>{const i=o.padding,r=o.fontSizeHeading5,e=o.lineHeightHeading5,a=l(o,{modalBodyPadding:o.paddingLG,modalHeaderPadding:`${i}px ${o.paddingLG}px`,modalHeaderBorderWidth:o.lineWidth,modalHeaderBorderStyle:o.lineType,modalHeaderBorderColorSplit:o.colorSplit,modalHeaderHeight:e*r+i*2,modalFooterBorderColorSplit:o.colorSplit,modalFooterBorderStyle:o.lineType,modalFooterPaddingVertical:o.paddingXS,modalFooterPaddingHorizontal:o.padding,modalFooterBorderWidth:o.lineWidth,modalIconHoverColor:o.colorIconHover,modalCloseIconColor:o.colorIcon,modalCloseBtnSize:o.fontSize*o.lineHeight,modalConfirmIconSize:o.fontSize*o.lineHeight});return[$(a),S(a),f(a),p(a),o.wireframe&&b(a),t(a,"zoom")]},o=>({footerBg:"transparent",headerBg:o.colorBgElevated,titleLineHeight:o.lineHeightHeading5,titleFontSize:o.fontSizeHeading5,contentBg:o.colorBgElevated,titleColor:o.colorTextHeading}));export{p as g,h as u};
