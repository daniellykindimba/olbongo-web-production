import{r as s,b as ce,a3 as ze,aD as Pe,aO as He,a2 as ut,P as mt,a1 as gt,ew as ht,v as ft,R as b,aR as pt,ex as vt,av as Oe,z as Re,L as Ke,d as bt,m as St,e as yt,f as K,t as je,ey as Ct,a as $t,ez as Me,K as xt,W as It,k as re,J as Et,Z as wt}from"./index-3ee95507.js";import{D as Tt}from"./index-c926c066.js";import{T as kt}from"./transButton-e7e285d6.js";const ue=t=>{const e=new Map;return t.forEach((o,l)=>{e.set(o,l)}),e},Lt=t=>{const e=new Map;return t.forEach((o,l)=>{let{disabled:a,key:c}=o;a&&e.set(c,l)}),e},At=(t,e,o)=>{const l=s.useMemo(()=>(t||[]).map(i=>(e&&(i=Object.assign(Object.assign({},i),{key:e(i)})),i)),[t,e]),[a,c]=s.useMemo(()=>{const i=[],m=new Array((o||[]).length),g=ue(o||[]);return l.forEach(h=>{g.has(h.key)?m[g.get(h.key)]=h:i.push(h)}),[i,m]},[l,o,e]);return[l,a,c]},Ot=At,Rt=[];function ne(t,e){const o=t.filter(l=>e.has(l));return t.length===o.length?t:o}function De(t){return Array.from(t).join(";")}function Kt(t,e){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Rt;const[l,a]=s.useMemo(()=>[new Set(t.map(h=>h.key)),new Set(e.map(h=>h.key))],[t,e]),[c,i]=s.useState(()=>ne(o,l)),[m,g]=s.useState(()=>ne(o,a));return s.useEffect(()=>{i(ne(o,l)),g(ne(o,a))},[o]),s.useEffect(()=>{i(ne(c,l)),g(ne(m,a))},[De(l),De(a)]),[c,m,i,g]}const jt=t=>{const{renderedText:e,renderedEl:o,item:l,checked:a,disabled:c,prefixCls:i,onClick:m,onRemove:g,showRemove:h}=t,C=ce(`${i}-content-item`,{[`${i}-content-item-disabled`]:c||l.disabled,[`${i}-content-item-checked`]:a});let x;(typeof e=="string"||typeof e=="number")&&(x=String(e));const[L]=ze("Transfer",Pe.Transfer),S={className:C,title:x},E=s.createElement("span",{className:`${i}-content-item-text`},o);return h?s.createElement("li",Object.assign({},S),E,s.createElement(kt,{disabled:c||l.disabled,className:`${i}-content-item-remove`,"aria-label":L==null?void 0:L.remove,onClick:()=>{g==null||g(l)}},s.createElement(Tt,null))):(S.onClick=c||l.disabled?void 0:F=>m(l,F),s.createElement("li",Object.assign({},S),s.createElement(He,{className:`${i}-checkbox`,checked:a,disabled:c||l.disabled}),E))},Mt=s.memo(jt),Dt=["handleFilter","handleClear","checkedKeys"],Nt=t=>Object.assign(Object.assign({},{simple:!0,showSizeChanger:!1,showLessItems:!1}),t),zt=(t,e)=>{const{prefixCls:o,filteredRenderItems:l,selectedKeys:a,disabled:c,showRemove:i,pagination:m,onScroll:g,onItemSelect:h,onItemRemove:C}=t,[x,L]=s.useState(1),S=s.useMemo(()=>m?Nt(typeof m=="object"?m:{}):null,[m]),[E,F]=ut(10,{value:S==null?void 0:S.pageSize});s.useEffect(()=>{if(S){const y=Math.ceil(l.length/E);L(Math.min(x,y))}},[l,S,E]);const W=(y,I)=>{h(y.key,!a.includes(y.key),I)},D=y=>{C==null||C([y.key])},H=y=>{L(y)},B=(y,I)=>{L(y),F(I)},N=s.useMemo(()=>S?l.slice((x-1)*E,x*E):l,[x,l,S,E]);s.useImperativeHandle(e,()=>({items:N}));const X=S?s.createElement(mt,{size:"small",disabled:c,simple:S.simple,pageSize:E,showLessItems:S.showLessItems,showSizeChanger:S.showSizeChanger,className:`${o}-pagination`,total:l.length,current:x,onChange:H,onShowSizeChange:B}):null,j=ce(`${o}-content`,{[`${o}-content-show-remove`]:i});return s.createElement(s.Fragment,null,s.createElement("ul",{className:j,onScroll:g},(N||[]).map(y=>{let{renderedEl:I,renderedText:G,item:p}=y;return s.createElement(Mt,{key:p.key,item:p,renderedText:G,renderedEl:I,prefixCls:o,showRemove:i,onClick:W,onRemove:D,checked:a.includes(p.key),disabled:c||p.disabled})})),X)},Pt=s.forwardRef(zt),Ht=t=>{const{placeholder:e="",value:o,prefixCls:l,disabled:a,onChange:c,handleClear:i}=t,m=s.useCallback(g=>{c==null||c(g),g.target.value===""&&(i==null||i())},[c]);return s.createElement(gt,{placeholder:e,className:l,value:o,onChange:m,disabled:a,allowClear:!0,prefix:s.createElement(ht,null)})},Be=Ht,Bt=()=>null;function Ft(t){return!!(t&&!b.isValidElement(t)&&Object.prototype.toString.call(t)==="[object Object]")}function ie(t){return t.filter(e=>!e.disabled).map(e=>e.key)}const Wt=t=>t!==void 0,Vt=t=>{const{prefixCls:e,dataSource:o=[],titleText:l="",checkedKeys:a,disabled:c,showSearch:i=!1,style:m,searchPlaceholder:g,notFoundContent:h,selectAll:C,deselectAll:x,selectCurrent:L,selectInvert:S,removeAll:E,removeCurrent:F,showSelectAll:W=!0,showRemove:D,pagination:H,direction:B,itemsUnit:N,itemUnit:X,selectAllLabel:j,selectionsIcon:y,footer:I,renderList:G,onItemSelectAll:p,onItemRemove:A,handleFilter:w,handleClear:_,filterOption:de,render:le=Bt}=t,[z,M]=s.useState(""),T=s.useRef({}),ge=r=>{M(r.target.value),w(r)},he=()=>{M(""),_()},fe=(r,u)=>de?de(z,u,B):r.includes(z),pe=r=>{let u=G?G(Object.assign(Object.assign({},r),{onItemSelect:(k,V)=>r.onItemSelect(k,V)})):null;const v=!!u;return v||(u=b.createElement(Pt,Object.assign({ref:T},r))),{customize:v,bodyContent:u}},oe=r=>{const u=le(r),v=Ft(u);return{item:r,renderedEl:v?u.label:u,renderedText:v?u.value:u}},Z=s.useMemo(()=>Array.isArray(h)?h[B==="left"?0:1]:h,[h,B]),[$,P]=s.useMemo(()=>{const r=[],u=[];return o.forEach(v=>{const k=oe(v);z&&!fe(k.renderedText,v)||(r.push(v),u.push(k))}),[r,u]},[o,z]),Q=s.useMemo(()=>{if(a.length===0)return"none";const r=ue(a);return $.every(u=>r.has(u.key)||!!u.disabled)?"all":"part"},[a,$]),ve=s.useMemo(()=>{const r=i?b.createElement("div",{className:`${e}-body-search-wrapper`},b.createElement(Be,{prefixCls:`${e}-search`,onChange:ge,handleClear:he,placeholder:g,value:z,disabled:c})):null,{customize:u,bodyContent:v}=pe(Object.assign(Object.assign({},ft(t,Dt)),{filteredItems:$,filteredRenderItems:P,selectedKeys:a}));let k;return u?k=b.createElement("div",{className:`${e}-body-customize-wrapper`},v):k=$.length?v:b.createElement("div",{className:`${e}-body-not-found`},Z),b.createElement("div",{className:ce(i?`${e}-body ${e}-body-with-search`:`${e}-body`)},r,k)},[i,e,g,z,c,a,$,P,Z]),be=b.createElement(He,{disabled:o.length===0||c,checked:Q==="all",indeterminate:Q==="part",className:`${e}-checkbox`,onChange:()=>{p==null||p($.filter(r=>!r.disabled).map(r=>{let{key:u}=r;return u}),Q!=="all")}}),Se=(r,u)=>{if(j)return typeof j=="function"?j({selectedCount:r,totalCount:u}):j;const v=u>1?N:X;return b.createElement(b.Fragment,null,(r>0?`${r}/`:"")+u," ",v)},se=I&&(I.length<2?I(t):I(t,{direction:B})),ye=ce(e,{[`${e}-with-pagination`]:!!H,[`${e}-with-footer`]:!!se}),ee=se?b.createElement("div",{className:`${e}-footer`},se):null,q=!D&&!H&&be;let J;D?J=[H?{key:"removeCurrent",label:F,onClick(){var r;const u=ie((((r=T.current)===null||r===void 0?void 0:r.items)||[]).map(v=>v.item));A==null||A(u)}}:null,{key:"removeAll",label:E,onClick(){A==null||A(ie($))}}].filter(Boolean):J=[{key:"selectAll",label:Q==="all"?x:C,onClick(){const r=ie($);p==null||p(r,r.length!==a.length)}},H?{key:"selectCurrent",label:L,onClick(){var r;const u=((r=T.current)===null||r===void 0?void 0:r.items)||[];p==null||p(ie(u.map(v=>v.item)),!0)}}:null,{key:"selectInvert",label:S,onClick(){var r;const u=ie((((r=T.current)===null||r===void 0?void 0:r.items)||[]).map(V=>V.item)),v=new Set(a),k=new Set(v);u.forEach(V=>{v.has(V)?k.delete(V):k.add(V)}),p==null||p(Array.from(k),"replace")}}];const Ce=b.createElement(pt,{className:`${e}-header-dropdown`,menu:{items:J},disabled:c},Wt(y)?y:b.createElement(vt,null));return b.createElement("div",{className:ye,style:m},b.createElement("div",{className:`${e}-header`},W?b.createElement(b.Fragment,null,q,Ce):null,b.createElement("span",{className:`${e}-header-selected`},Se(a.length,$.length)),b.createElement("span",{className:`${e}-header-title`},l)),ve,ee)},xe=Vt,Xt=t=>{const{disabled:e,moveToLeft:o,moveToRight:l,leftArrowText:a="",rightArrowText:c="",leftActive:i,rightActive:m,className:g,style:h,direction:C,oneWay:x}=t;return s.createElement("div",{className:g,style:h},s.createElement(Oe,{type:"primary",size:"small",disabled:e||!m,onClick:l,icon:C!=="rtl"?s.createElement(Re,null):s.createElement(Ke,null)},c),!x&&s.createElement(Oe,{type:"primary",size:"small",disabled:e||!i,onClick:o,icon:C!=="rtl"?s.createElement(Ke,null):s.createElement(Re,null)},a))},Fe=Xt,Gt=t=>{const{antCls:e,componentCls:o,listHeight:l,controlHeightLG:a}=t,c=`${e}-table`,i=`${e}-input`;return{[`${o}-customize-list`]:{[`${o}-list`]:{flex:"1 1 50%",width:"auto",height:"auto",minHeight:l},[`${c}-wrapper`]:{[`${c}-small`]:{border:0,borderRadius:0,[`${c}-selection-column`]:{width:a,minWidth:a}},[`${c}-pagination${c}-pagination`]:{margin:0,padding:t.paddingXS}},[`${i}[disabled]`]:{backgroundColor:"transparent"}}}},Ne=(t,e)=>{const{componentCls:o,colorBorder:l}=t;return{[`${o}-list`]:{borderColor:e,"&-search:not([disabled])":{borderColor:l}}}},_t=t=>{const{componentCls:e}=t;return{[`${e}-status-error`]:Object.assign({},Ne(t,t.colorError)),[`${e}-status-warning`]:Object.assign({},Ne(t,t.colorWarning))}},Yt=t=>{const{componentCls:e,colorBorder:o,colorSplit:l,lineWidth:a,itemHeight:c,headerHeight:i,transferHeaderVerticalPadding:m,itemPaddingBlock:g,controlItemBgActive:h,colorTextDisabled:C,listHeight:x,listWidth:L,listWidthLG:S,fontSizeIcon:E,marginXS:F,paddingSM:W,lineType:D,antCls:H,iconCls:B,motionDurationSlow:N,controlItemBgHover:X,borderRadiusLG:j,colorBgContainer:y,colorText:I,controlItemBgActiveHover:G}=t;return{display:"flex",flexDirection:"column",width:L,height:x,border:`${K(a)} ${D} ${o}`,borderRadius:t.borderRadiusLG,"&-with-pagination":{width:S,height:"auto"},"&-search":{[`${B}-search`]:{color:C}},"&-header":{display:"flex",flex:"none",alignItems:"center",height:i,padding:`${K(t.calc(m).sub(a).equal())} ${K(W)} ${K(m)}`,color:I,background:y,borderBottom:`${K(a)} ${D} ${l}`,borderRadius:`${K(j)} ${K(j)} 0 0`,"> *:not(:last-child)":{marginInlineEnd:4},"> *":{flex:"none"},"&-title":Object.assign(Object.assign({},je),{flex:"auto",textAlign:"end"}),"&-dropdown":Object.assign(Object.assign({},Ct()),{fontSize:E,transform:"translateY(10%)",cursor:"pointer","&[disabled]":{cursor:"not-allowed"}})},"&-body":{display:"flex",flex:"auto",flexDirection:"column",fontSize:t.fontSize,minHeight:0,"&-search-wrapper":{position:"relative",flex:"none",padding:W}},"&-content":{flex:"auto",margin:0,padding:0,overflow:"auto",listStyle:"none","&-item":{display:"flex",alignItems:"center",minHeight:c,padding:`${K(g)} ${K(W)}`,transition:`all ${N}`,"> *:not(:last-child)":{marginInlineEnd:F},"> *":{flex:"none"},"&-text":Object.assign(Object.assign({},je),{flex:"auto"}),"&-remove":{position:"relative",color:o,cursor:"pointer",transition:`all ${N}`,"&:hover":{color:t.colorLinkHover},"&::after":{position:"absolute",inset:`-${K(g)} -50%`,content:'""'}},[`&:not(${e}-list-content-item-disabled)`]:{"&:hover":{backgroundColor:X,cursor:"pointer"},[`&${e}-list-content-item-checked:hover`]:{backgroundColor:G}},"&-checked":{backgroundColor:h},"&-disabled":{color:C,cursor:"not-allowed"}},[`&-show-remove ${e}-list-content-item:not(${e}-list-content-item-disabled):hover`]:{background:"transparent",cursor:"default"}},"&-pagination":{padding:t.paddingXS,textAlign:"end",borderTop:`${K(a)} ${D} ${l}`,[`${H}-pagination-options`]:{paddingInlineEnd:t.paddingXS}},"&-body-not-found":{flex:"none",width:"100%",margin:"auto 0",color:C,textAlign:"center"},"&-footer":{borderTop:`${K(a)} ${D} ${l}`},"&-checkbox":{lineHeight:1}}},Ut=t=>{const{antCls:e,iconCls:o,componentCls:l,marginXS:a,marginXXS:c,fontSizeIcon:i,colorBgContainerDisabled:m}=t;return{[l]:Object.assign(Object.assign({},yt(t)),{position:"relative",display:"flex",alignItems:"stretch",[`${l}-disabled`]:{[`${l}-list`]:{background:m}},[`${l}-list`]:Yt(t),[`${l}-operation`]:{display:"flex",flex:"none",flexDirection:"column",alignSelf:"center",margin:`0 ${K(a)}`,verticalAlign:"middle",[`${e}-btn`]:{display:"block","&:first-child":{marginBottom:c},[o]:{fontSize:i}}}})}},qt=t=>{const{componentCls:e}=t;return{[`${e}-rtl`]:{direction:"rtl"}}},Jt=t=>{const{fontSize:e,lineHeight:o,controlHeight:l,controlHeightLG:a,lineWidth:c}=t,i=Math.round(e*o);return{listWidth:180,listHeight:200,listWidthLG:250,headerHeight:a,itemHeight:l,itemPaddingBlock:(l-i)/2,transferHeaderVerticalPadding:Math.ceil((a-c-i)/2)}},Zt=bt("Transfer",t=>{const e=St(t);return[Ut(e),Gt(e),_t(e),qt(e)]},Jt),me=t=>{const{dataSource:e,targetKeys:o=[],selectedKeys:l,selectAllLabels:a=[],operations:c=[],style:i={},listStyle:m={},locale:g={},titles:h,disabled:C,showSearch:x=!1,operationStyle:L,showSelectAll:S,oneWay:E,pagination:F,status:W,prefixCls:D,className:H,rootClassName:B,selectionsIcon:N,filterOption:X,render:j,footer:y,children:I,rowKey:G,onScroll:p,onChange:A,onSearch:w,onSelectChange:_}=t,{getPrefixCls:de,renderEmpty:le,direction:z,transfer:M}=s.useContext($t),T=de("transfer",D),[ge,he,fe]=Zt(T),[pe,oe,Z]=Ot(e,G,o),[$,P,Q,ve]=Kt(oe,Z,l),[be,Se]=Me(n=>n.key),[se,ye]=Me(n=>n.key),ee=s.useCallback((n,d)=>{if(n==="left"){const f=typeof d=="function"?d($||[]):d;Q(f)}else{const f=typeof d=="function"?d(P||[]):d;ve(f)}},[$,P]),q=(n,d)=>{(n==="left"?Se:ye)(d)},J=s.useCallback((n,d)=>{n==="left"?_==null||_(d,P):_==null||_($,d)},[$,P]),Ce=n=>{var d;return(d=h??n.titles)!==null&&d!==void 0?d:[]},r=n=>{p==null||p("left",n)},u=n=>{p==null||p("right",n)},v=n=>{const d=n==="right"?$:P,f=Lt(pe),O=d.filter(te=>!f.has(te)),R=ue(O),Y=n==="right"?O.concat(o):o.filter(te=>!R.has(te)),U=n==="right"?"left":"right";ee(U,[]),J(U,[]),A==null||A(Y,n,O)},k=()=>{v("left"),q("left",null)},V=()=>{v("right"),q("right",null)},Ie=(n,d,f)=>{ee(n,O=>{let R=[];if(f==="replace")R=d;else if(f)R=Array.from(new Set([].concat(re(O),re(d))));else{const Y=ue(d);R=O.filter(U=>!Y.has(U))}return J(n,R),R}),q(n,null)},We=(n,d)=>{Ie("left",n,d)},Ve=(n,d)=>{Ie("right",n,d)},Xe=n=>w==null?void 0:w("left",n.target.value),Ge=n=>w==null?void 0:w("right",n.target.value),_e=()=>w==null?void 0:w("left",""),Ye=()=>w==null?void 0:w("right",""),Ue=(n,d,f,O,R)=>{d.has(f)&&(d.delete(f),q(n,null)),O&&(d.add(f),q(n,R))},qe=(n,d,f,O)=>{(n==="left"?be:se)(O,d,f)},Ee=(n,d,f,O)=>{const R=n==="left",Y=re(R?$:P),U=new Set(Y),te=re(R?oe:Z).filter(ae=>!(ae!=null&&ae.disabled)),Le=te.findIndex(ae=>ae.key===d);O&&Y.length>0?qe(n,te,U,Le):Ue(n,U,d,f,Le);const Ae=Array.from(U);J(n,Ae),t.selectedKeys||ee(n,Ae)},Je=(n,d,f)=>{Ee("left",n,d,f==null?void 0:f.shiftKey)},Ze=(n,d,f)=>{Ee("right",n,d,f==null?void 0:f.shiftKey)},Qe=n=>{ee("right",[]),A==null||A(o.filter(d=>!n.includes(d)),"left",re(n))},we=n=>typeof m=="function"?m({direction:n}):m||{},et=s.useContext(xt),{hasFeedback:tt,status:nt}=et,lt=n=>Object.assign(Object.assign(Object.assign({},n),{notFoundContent:(le==null?void 0:le("Transfer"))||b.createElement(Et,{componentName:"Transfer"})}),g),ot=wt(nt,W),Te=!I&&F,st=P.length>0,at=$.length>0,rt=ce(T,{[`${T}-disabled`]:C,[`${T}-customize-list`]:!!I,[`${T}-rtl`]:z==="rtl"},It(T,ot,tt),M==null?void 0:M.className,H,B,he,fe),[it]=ze("Transfer",Pe.Transfer),$e=lt(it),[ct,dt]=Ce($e),ke=N??(M==null?void 0:M.selectionsIcon);return ge(b.createElement("div",{className:rt,style:Object.assign(Object.assign({},M==null?void 0:M.style),i)},b.createElement(xe,Object.assign({prefixCls:`${T}-list`,titleText:ct,dataSource:oe,filterOption:X,style:we("left"),checkedKeys:$,handleFilter:Xe,handleClear:_e,onItemSelect:Je,onItemSelectAll:We,render:j,showSearch:x,renderList:I,footer:y,onScroll:r,disabled:C,direction:z==="rtl"?"right":"left",showSelectAll:S,selectAllLabel:a[0],pagination:Te,selectionsIcon:ke},$e)),b.createElement(Fe,{className:`${T}-operation`,rightActive:at,rightArrowText:c[0],moveToRight:V,leftActive:st,leftArrowText:c[1],moveToLeft:k,style:L,disabled:C,direction:z,oneWay:E}),b.createElement(xe,Object.assign({prefixCls:`${T}-list`,titleText:dt,dataSource:Z,filterOption:X,style:we("right"),checkedKeys:P,handleFilter:Ge,handleClear:Ye,onItemSelect:Ze,onItemSelectAll:Ve,onItemRemove:Qe,render:j,showSearch:x,renderList:I,footer:y,onScroll:u,disabled:C,direction:z==="rtl"?"left":"right",showSelectAll:S,selectAllLabel:a[1],showRemove:E,pagination:Te,selectionsIcon:ke},$e))))};me.List=xe;me.Search=Be;me.Operation=Fe;const nn=me;export{nn as T};
