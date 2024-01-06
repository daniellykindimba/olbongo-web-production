import{r as o,c_ as A,ax as L,bJ as oe,bK as ie,da as se,db as de,dc as ce,bj as ge,bF as ue,cR as z,bk as D,cN as he,dd as me,de as pe,df as $e}from"./index-8ddffded.js";import{G as Ce,B as F}from"./index-314fa976.js";const fe=10,ve=20;function be(e){const{fullscreen:n,validRange:a,generateConfig:r,locale:g,prefixCls:l,value:s,onChange:m,divRef:b}=e,p=r.getYear(s||r.getNow());let u=p-fe,$=u+ve;a&&(u=r.getYear(a[0]),$=r.getYear(a[1])+1);const S=g&&g.year==="年"?"年":"",C=[];for(let i=u;i<$;i++)C.push({label:`${i}${S}`,value:i});return o.createElement(L,{size:n?void 0:"small",options:C,value:p,className:`${l}-year-select`,onChange:i=>{let c=r.setYear(s,i);if(a){const[f,M]=a,j=r.getYear(c),x=r.getMonth(c);j===r.getYear(M)&&x>r.getMonth(M)&&(c=r.setMonth(c,r.getMonth(M))),j===r.getYear(f)&&x<r.getMonth(f)&&(c=r.setMonth(c,r.getMonth(f)))}m(c)},getPopupContainer:()=>b.current})}function Se(e){const{prefixCls:n,fullscreen:a,validRange:r,value:g,generateConfig:l,locale:s,onChange:m,divRef:b}=e,p=l.getMonth(g||l.getNow());let u=0,$=11;if(r){const[i,c]=r,f=l.getYear(g);l.getYear(c)===f&&($=l.getMonth(c)),l.getYear(i)===f&&(u=l.getMonth(i))}const S=s.shortMonths||l.locale.getShortMonths(s.locale),C=[];for(let i=u;i<=$;i+=1)C.push({label:S[i],value:i});return o.createElement(L,{size:a?void 0:"small",className:`${n}-month-select`,value:p,options:C,onChange:i=>{m(l.setMonth(g,i))},getPopupContainer:()=>b.current})}function xe(e){const{prefixCls:n,locale:a,mode:r,fullscreen:g,onModeChange:l}=e;return o.createElement(Ce,{onChange:s=>{let{target:{value:m}}=s;l(m)},value:r,size:g?void 0:"small",className:`${n}-mode-switch`},o.createElement(F,{value:"month"},a.month),o.createElement(F,{value:"year"},a.year))}function ye(e){const{prefixCls:n,fullscreen:a,mode:r,onChange:g,onModeChange:l}=e,s=o.useRef(null),m=o.useContext(A),b=o.useMemo(()=>Object.assign(Object.assign({},m),{isFormItemInput:!1}),[m]),p=Object.assign(Object.assign({},e),{fullscreen:a,divRef:s});return o.createElement("div",{className:`${n}-header`,ref:s},o.createElement(A.Provider,{value:b},o.createElement(be,Object.assign({},p,{onChange:u=>{g(u,"year")}})),r==="month"&&o.createElement(Se,Object.assign({},p,{onChange:u=>{g(u,"month")}}))),o.createElement(xe,Object.assign({},p,{onModeChange:l})))}const Me=e=>{const{calendarCls:n,componentCls:a,fullBg:r,fullPanelBg:g,itemActiveBg:l}=e;return{[n]:Object.assign(Object.assign(Object.assign({},ce(e)),ge(e)),{background:r,"&-rtl":{direction:"rtl"},[`${n}-header`]:{display:"flex",justifyContent:"flex-end",padding:`${e.paddingSM}px 0`,[`${n}-year-select`]:{minWidth:e.yearControlWidth},[`${n}-month-select`]:{minWidth:e.monthControlWidth,marginInlineStart:e.marginXS},[`${n}-mode-switch`]:{marginInlineStart:e.marginXS}}}),[`${n} ${a}-panel`]:{background:g,border:0,borderTop:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,borderRadius:0,[`${a}-month-panel, ${a}-date-panel`]:{width:"auto"},[`${a}-body`]:{padding:`${e.paddingXS}px 0`},[`${a}-content`]:{width:"100%"}},[`${n}-mini`]:{borderRadius:e.borderRadiusLG,[`${n}-header`]:{paddingInlineEnd:e.paddingXS,paddingInlineStart:e.paddingXS},[`${a}-panel`]:{borderRadius:`0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`},[`${a}-content`]:{height:e.miniContentHeight,th:{height:"auto",padding:0,lineHeight:`${e.weekHeight}px`}},[`${a}-cell::before`]:{pointerEvents:"none"}},[`${n}${n}-full`]:{[`${a}-panel`]:{display:"block",width:"100%",textAlign:"end",background:r,border:0,[`${a}-body`]:{"th, td":{padding:0},th:{height:"auto",paddingInlineEnd:e.paddingSM,paddingBottom:e.paddingXXS,lineHeight:`${e.weekHeight}px`}}},[`${a}-cell`]:{"&::before":{display:"none"},"&:hover":{[`${n}-date`]:{background:e.controlItemBgHover}},[`${n}-date-today::before`]:{display:"none"},[`&-in-view${a}-cell-selected`]:{[`${n}-date, ${n}-date-today`]:{background:l}},"&-selected, &-selected:hover":{[`${n}-date, ${n}-date-today`]:{[`${n}-date-value`]:{color:e.colorPrimary}}}},[`${n}-date`]:{display:"block",width:"auto",height:"auto",margin:`0 ${e.marginXS/2}px`,padding:`${e.paddingXS/2}px ${e.paddingXS}px 0`,border:0,borderTop:`${e.lineWidthBold}px ${e.lineType} ${e.colorSplit}`,borderRadius:0,transition:`background ${e.motionDurationSlow}`,"&-value":{lineHeight:`${e.dateValueHeight}px`,transition:`color ${e.motionDurationSlow}`},"&-content":{position:"static",width:"auto",height:e.dateContentHeight,overflowY:"auto",color:e.colorText,lineHeight:e.lineHeight,textAlign:"start"},"&-today":{borderColor:e.colorPrimary,[`${n}-date-value`]:{color:e.colorText}}}},[`@media only screen and (max-width: ${e.screenXS}px) `]:{[`${n}`]:{[`${n}-header`]:{display:"block",[`${n}-year-select`]:{width:"50%"},[`${n}-month-select`]:{width:`calc(50% - ${e.paddingXS}px)`},[`${n}-mode-switch`]:{width:"100%",marginTop:e.marginXS,marginInlineStart:0,"> label":{width:"50%",textAlign:"center"}}}}}}},Re=oe("Calendar",e=>{const n=`${e.componentCls}-calendar`,a=ie(de(e),se(e),{calendarCls:n,pickerCellInnerCls:`${e.componentCls}-cell-inner`,dateValueHeight:e.controlHeightSM,weekHeight:e.controlHeightSM*.75,dateContentHeight:(e.fontSizeSM*e.lineHeightSM+e.marginXS)*3+e.lineWidth*2});return[Me(a)]},e=>({fullBg:e.colorBgContainer,fullPanelBg:e.colorBgContainer,itemActiveBg:e.controlItemBgActive,yearControlWidth:80,monthControlWidth:70,miniContentHeight:256}));function G(e){function n(l,s){return l&&s&&e.getYear(l)===e.getYear(s)}function a(l,s){return n(l,s)&&e.getMonth(l)===e.getMonth(s)}function r(l,s){return a(l,s)&&e.getDate(l)===e.getDate(s)}return l=>{const{prefixCls:s,className:m,rootClassName:b,style:p,dateFullCellRender:u,dateCellRender:$,monthFullCellRender:S,monthCellRender:C,cellRender:i,fullCellRender:c,headerRender:f,value:M,defaultValue:j,disabledDate:x,mode:J,validRange:w,fullscreen:N=!0,onChange:O,onPanelChange:Y,onSelect:P}=l,{getPrefixCls:K,direction:U,calendar:R}=o.useContext(ue),E=K("picker",s),h=`${E}-calendar`,[_,q]=Re(E),X=e.getNow(),[y,Q]=z(()=>M||e.getNow(),{defaultValue:j,value:M}),[I,Z]=z("month",{value:J}),H=o.useMemo(()=>I==="year"?"month":"date",[I]),k=o.useCallback(t=>(w?e.isAfter(w[0],t)||e.isAfter(t,w[1]):!1)||!!(x!=null&&x(t)),[x,w]),T=(t,d)=>{Y==null||Y(t,d)},ee=t=>{Q(t),r(t,y)||((H==="date"&&!a(t,y)||H==="month"&&!n(t,y))&&T(t,I),O==null||O(t))},W=t=>{Z(t),T(y,t)},B=(t,d)=>{ee(t),P==null||P(t,{source:d})},te=()=>{const{locale:t}=l,d=Object.assign(Object.assign({},pe),t);return d.lang=Object.assign(Object.assign({},d.lang),(t||{}).lang),d},ne=o.useCallback((t,d)=>c?c(t,d):u?u(t):o.createElement("div",{className:D(`${E}-cell-inner`,`${h}-date`,{[`${h}-date-today`]:r(X,t)})},o.createElement("div",{className:`${h}-date-value`},String(e.getDate(t)).padStart(2,"0")),o.createElement("div",{className:`${h}-date-content`},i?i(t,d):$&&$(t))),[u,$,i,c]),ae=o.useCallback((t,d)=>{if(c)return c(t,d);if(S)return S(t);const re=d.locale.shortMonths||e.locale.getShortMonths(d.locale.locale);return o.createElement("div",{className:D(`${E}-cell-inner`,`${h}-date`,{[`${h}-date-today`]:a(X,t)})},o.createElement("div",{className:`${h}-date-value`},re[e.getMonth(t)]),o.createElement("div",{className:`${h}-date-content`},i?i(t,d):C&&C(t)))},[S,C,i,c]),[v]=he("Calendar",te),le=(t,d)=>{if(d.type==="date")return ne(t,d);if(d.type==="month")return ae(t,Object.assign(Object.assign({},d),{locale:v==null?void 0:v.lang}))};return _(o.createElement("div",{className:D(h,{[`${h}-full`]:N,[`${h}-mini`]:!N,[`${h}-rtl`]:U==="rtl"},R==null?void 0:R.className,m,b,q),style:Object.assign(Object.assign({},R==null?void 0:R.style),p)},f?f({value:y,type:I,onChange:t=>{B(t,"customize")},onTypeChange:W}):o.createElement(ye,{prefixCls:h,value:y,generateConfig:e,mode:I,fullscreen:N,locale:v==null?void 0:v.lang,validRange:w,onChange:B,onModeChange:W}),o.createElement(me,{value:y,prefixCls:E,locale:v==null?void 0:v.lang,generateConfig:e,cellRender:le,onSelect:t=>{B(t,H)},mode:H,picker:H,disabledDate:k,hideHeader:!0})))}}const V=G($e);V.generateCalendar=G;const Ie=V;export{Ie as C};
