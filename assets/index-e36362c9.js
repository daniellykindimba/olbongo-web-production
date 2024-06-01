import{i as se,g as ce,a as de,b as ge}from"./index-b7483f4f.js";import{r as o,K as V,S as z,eD as ue,eE as F,d as he,m as me,e as pe,f as m,a as $e,a2 as L,b as B,a3 as Ce,eF as fe}from"./index-5ca9535b.js";import{R as ve}from"./index-ffebc748.js";const be=10,Se=20;function ye(e){const{fullscreen:n,validRange:a,generateConfig:r,locale:g,prefixCls:l,value:s,onChange:p,divRef:S}=e,$=r.getYear(s||r.getNow());let u=$-be,C=u+Se;a&&(u=r.getYear(a[0]),C=r.getYear(a[1])+1);const y=g&&g.year==="年"?"年":"",f=[];for(let i=u;i<C;i++)f.push({label:`${i}${y}`,value:i});return o.createElement(z,{size:n?void 0:"small",options:f,value:$,className:`${l}-year-select`,onChange:i=>{let d=r.setYear(s,i);if(a){const[v,R]=a,O=r.getYear(d),M=r.getMonth(d);O===r.getYear(R)&&M>r.getMonth(R)&&(d=r.setMonth(d,r.getMonth(R))),O===r.getYear(v)&&M<r.getMonth(v)&&(d=r.setMonth(d,r.getMonth(v)))}p(d)},getPopupContainer:()=>S.current})}function Me(e){const{prefixCls:n,fullscreen:a,validRange:r,value:g,generateConfig:l,locale:s,onChange:p,divRef:S}=e,$=l.getMonth(g||l.getNow());let u=0,C=11;if(r){const[i,d]=r,v=l.getYear(g);l.getYear(d)===v&&(C=l.getMonth(d)),l.getYear(i)===v&&(u=l.getMonth(i))}const y=s.shortMonths||l.locale.getShortMonths(s.locale),f=[];for(let i=u;i<=C;i+=1)f.push({label:y[i],value:i});return o.createElement(z,{size:a?void 0:"small",className:`${n}-month-select`,value:$,options:f,onChange:i=>{p(l.setMonth(g,i))},getPopupContainer:()=>S.current})}function xe(e){const{prefixCls:n,locale:a,mode:r,fullscreen:g,onModeChange:l}=e;return o.createElement(ue,{onChange:s=>{let{target:{value:p}}=s;l(p)},value:r,size:g?void 0:"small",className:`${n}-mode-switch`},o.createElement(F,{value:"month"},a.month),o.createElement(F,{value:"year"},a.year))}function Re(e){const{prefixCls:n,fullscreen:a,mode:r,onChange:g,onModeChange:l}=e,s=o.useRef(null),p=o.useContext(V),S=o.useMemo(()=>Object.assign(Object.assign({},p),{isFormItemInput:!1}),[p]),$=Object.assign(Object.assign({},e),{fullscreen:a,divRef:s});return o.createElement("div",{className:`${n}-header`,ref:s},o.createElement(V.Provider,{value:S},o.createElement(ye,Object.assign({},$,{onChange:u=>{g(u,"year")}})),r==="month"&&o.createElement(Me,Object.assign({},$,{onChange:u=>{g(u,"month")}}))),o.createElement(xe,Object.assign({},$,{onModeChange:l})))}const we=e=>{const{calendarCls:n,componentCls:a,fullBg:r,fullPanelBg:g,itemActiveBg:l}=e;return{[n]:Object.assign(Object.assign(Object.assign({},ce(e)),pe(e)),{background:r,"&-rtl":{direction:"rtl"},[`${n}-header`]:{display:"flex",justifyContent:"flex-end",padding:`${m(e.paddingSM)} 0`,[`${n}-year-select`]:{minWidth:e.yearControlWidth},[`${n}-month-select`]:{minWidth:e.monthControlWidth,marginInlineStart:e.marginXS},[`${n}-mode-switch`]:{marginInlineStart:e.marginXS}}}),[`${n} ${a}-panel`]:{background:g,border:0,borderTop:`${m(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,borderRadius:0,[`${a}-month-panel, ${a}-date-panel`]:{width:"auto"},[`${a}-body`]:{padding:`${m(e.paddingXS)} 0`},[`${a}-content`]:{width:"100%"}},[`${n}-mini`]:{borderRadius:e.borderRadiusLG,[`${n}-header`]:{paddingInlineEnd:e.paddingXS,paddingInlineStart:e.paddingXS},[`${a}-panel`]:{borderRadius:`0 0 ${m(e.borderRadiusLG)} ${m(e.borderRadiusLG)}`},[`${a}-content`]:{height:e.miniContentHeight,th:{height:"auto",padding:0,lineHeight:`${m(e.weekHeight)}`}},[`${a}-cell::before`]:{pointerEvents:"none"}},[`${n}${n}-full`]:{[`${a}-panel`]:{display:"block",width:"100%",textAlign:"end",background:r,border:0,[`${a}-body`]:{"th, td":{padding:0},th:{height:"auto",paddingInlineEnd:e.paddingSM,paddingBottom:e.paddingXXS,lineHeight:`${m(e.weekHeight)}`}}},[`${a}-cell`]:{"&::before":{display:"none"},"&:hover":{[`${n}-date`]:{background:e.controlItemBgHover}},[`${n}-date-today::before`]:{display:"none"},[`&-in-view${a}-cell-selected`]:{[`${n}-date, ${n}-date-today`]:{background:l}},"&-selected, &-selected:hover":{[`${n}-date, ${n}-date-today`]:{[`${n}-date-value`]:{color:e.colorPrimary}}}},[`${n}-date`]:{display:"block",width:"auto",height:"auto",margin:`0 ${m(e.calc(e.marginXS).div(2).equal())}`,padding:`${m(e.calc(e.paddingXS).div(2).equal())} ${m(e.paddingXS)} 0`,border:0,borderTop:`${m(e.lineWidthBold)} ${e.lineType} ${e.colorSplit}`,borderRadius:0,transition:`background ${e.motionDurationSlow}`,"&-value":{lineHeight:`${m(e.dateValueHeight)}`,transition:`color ${e.motionDurationSlow}`},"&-content":{position:"static",width:"auto",height:e.dateContentHeight,overflowY:"auto",color:e.colorText,lineHeight:e.lineHeight,textAlign:"start"},"&-today":{borderColor:e.colorPrimary,[`${n}-date-value`]:{color:e.colorText}}}},[`@media only screen and (max-width: ${m(e.screenXS)}) `]:{[`${n}`]:{[`${n}-header`]:{display:"block",[`${n}-year-select`]:{width:"50%"},[`${n}-month-select`]:{width:`calc(50% - ${m(e.paddingXS)})`},[`${n}-mode-switch`]:{width:"100%",marginTop:e.marginXS,marginInlineStart:0,"> label":{width:"50%",textAlign:"center"}}}}}}},Ee=e=>Object.assign({fullBg:e.colorBgContainer,fullPanelBg:e.colorBgContainer,itemActiveBg:e.controlItemBgActive,yearControlWidth:80,monthControlWidth:70,miniContentHeight:256},de(e)),He=he("Calendar",e=>{const n=`${e.componentCls}-calendar`,a=me(e,se(e),{calendarCls:n,pickerCellInnerCls:`${e.componentCls}-cell-inner`,dateValueHeight:e.controlHeightSM,weekHeight:e.calc(e.controlHeightSM).mul(.75).equal(),dateContentHeight:e.calc(e.calc(e.fontHeightSM).add(e.marginXS)).mul(3).add(e.calc(e.lineWidth).mul(2)).equal()});return[we(a)]},Ee);function q(e){function n(l,s){return l&&s&&e.getYear(l)===e.getYear(s)}function a(l,s){return n(l,s)&&e.getMonth(l)===e.getMonth(s)}function r(l,s){return a(l,s)&&e.getDate(l)===e.getDate(s)}return l=>{const{prefixCls:s,className:p,rootClassName:S,style:$,dateFullCellRender:u,dateCellRender:C,monthFullCellRender:y,monthCellRender:f,cellRender:i,fullCellRender:d,headerRender:v,value:R,defaultValue:O,disabledDate:M,mode:K,validRange:E,fullscreen:N=!0,onChange:P,onPanelChange:Y,onSelect:D}=l,{getPrefixCls:U,direction:J,calendar:w}=o.useContext($e),H=U("picker",s),h=`${H}-calendar`,[Q,Z,_]=He(H,h),T=e.getNow(),[x,k]=L(()=>R||e.getNow(),{defaultValue:O,value:R}),[I,ee]=L("month",{value:K}),j=o.useMemo(()=>I==="year"?"month":"date",[I]),te=o.useCallback(t=>(E?e.isAfter(E[0],t)||e.isAfter(t,E[1]):!1)||!!(M!=null&&M(t)),[M,E]),W=(t,c)=>{Y==null||Y(t,c)},ne=t=>{k(t),r(t,x)||((j==="date"&&!a(t,x)||j==="month"&&!n(t,x))&&W(t,I),P==null||P(t))},A=t=>{ee(t),W(x,t)},X=(t,c)=>{ne(t),D==null||D(t,{source:c})},ae=()=>{const{locale:t}=l,c=Object.assign(Object.assign({},fe),t);return c.lang=Object.assign(Object.assign({},c.lang),(t||{}).lang),c},le=o.useCallback((t,c)=>d?d(t,c):u?u(t):o.createElement("div",{className:B(`${H}-cell-inner`,`${h}-date`,{[`${h}-date-today`]:r(T,t)})},o.createElement("div",{className:`${h}-date-value`},String(e.getDate(t)).padStart(2,"0")),o.createElement("div",{className:`${h}-date-content`},i?i(t,c):C&&C(t))),[u,C,i,d]),re=o.useCallback((t,c)=>{if(d)return d(t,c);if(y)return y(t);const ie=c.locale.shortMonths||e.locale.getShortMonths(c.locale.locale);return o.createElement("div",{className:B(`${H}-cell-inner`,`${h}-date`,{[`${h}-date-today`]:a(T,t)})},o.createElement("div",{className:`${h}-date-value`},ie[e.getMonth(t)]),o.createElement("div",{className:`${h}-date-content`},i?i(t,c):f&&f(t)))},[y,f,i,d]),[b]=Ce("Calendar",ae),oe=(t,c)=>{if(c.type==="date")return le(t,c);if(c.type==="month")return re(t,Object.assign(Object.assign({},c),{locale:b==null?void 0:b.lang}))};return Q(o.createElement("div",{className:B(h,{[`${h}-full`]:N,[`${h}-mini`]:!N,[`${h}-rtl`]:J==="rtl"},w==null?void 0:w.className,p,S,Z,_),style:Object.assign(Object.assign({},w==null?void 0:w.style),$)},v?v({value:x,type:I,onChange:t=>{X(t,"customize")},onTypeChange:A}):o.createElement(Re,{prefixCls:h,value:x,generateConfig:e,mode:I,fullscreen:N,locale:b==null?void 0:b.lang,validRange:E,onChange:X,onModeChange:A}),o.createElement(ve,{value:x,prefixCls:H,locale:b==null?void 0:b.lang,generateConfig:e,cellRender:oe,onSelect:t=>{X(t,j)},mode:j,picker:j,disabledDate:te,hideHeader:!0})))}}const G=q(ge);G.generateCalendar=q;const Ne=G;export{Ne as C};
