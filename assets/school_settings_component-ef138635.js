import{r as a,bk as oe,cN as Ke,cO as qe,cP as lt,cQ as it,ag as Te,cR as ot,D as rt,I as he,cS as ct,cT as dt,R as $,Z as ut,cU as mt,cV as ht,B as J,cW as Re,cX as we,bJ as gt,bK as pt,bj as ft,cY as Fe,cZ as Ct,bF as St,c_ as yt,c$ as vt,bG as ue,d0 as bt,d1 as xt,j as i,J as V,K as M,F as U,q as Ot,bw as jt,y as Le,z as $e,S as It,x as Pe,bN as $t,H as Et,ab as Tt,a6 as Mt,a9 as At,aC as kt,a7 as Rt,C as wt,d2 as Ft}from"./index-8ddffded.js";import{T as Pt}from"./Table-77fe0a00.js";import{S as Bt}from"./index-6ddeb5d3.js";const me=e=>{const t=new Map;return e.forEach((l,n)=>{t.set(l,n)}),t},Dt=e=>{const t=new Map;return e.forEach((l,n)=>{let{disabled:o,key:d}=l;o&&t.set(d,n)}),t};function Kt(e,t,l){const n=a.useMemo(()=>(e||[]).map(r=>(t&&(r=Object.assign(Object.assign({},r),{key:t(r)})),r)),[e,t]),[o,d]=a.useMemo(()=>{const r=[],u=new Array((l||[]).length),S=me(l||[]);return n.forEach(C=>{S.has(C.key)?u[S.get(C.key)]=C:r.push(C)}),[r,u]},[n,l,t]);return[n,o,d]}const qt=[];function ee(e,t){const l=e.filter(n=>t.has(n));return e.length===l.length?e:l}function Be(e){return Array.from(e).join(";")}function Lt(e,t){let l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:qt;const[n,o]=a.useMemo(()=>[new Set(e.map(C=>C.key)),new Set(t.map(C=>C.key))],[e,t]),[d,r]=a.useState(()=>ee(l,n)),[u,S]=a.useState(()=>ee(l,o));return a.useEffect(()=>{r(ee(l,n)),S(ee(l,o))},[l]),a.useEffect(()=>{r(ee(d,n)),S(ee(u,o))},[Be(n),Be(o)]),[d,u,r,S]}const Nt=e=>{const{renderedText:t,renderedEl:l,item:n,checked:o,disabled:d,prefixCls:r,onClick:u,onRemove:S,showRemove:C}=e,b=oe(`${r}-content-item`,{[`${r}-content-item-disabled`]:d||n.disabled,[`${r}-content-item-checked`]:o});let j;(typeof t=="string"||typeof t=="number")&&(j=String(t));const[s]=Ke("Transfer",qe.Transfer),g={className:b,title:j},p=a.createElement("span",{className:`${r}-content-item-text`},l);return C?a.createElement("li",Object.assign({},g),p,a.createElement(lt,{disabled:d||n.disabled,className:`${r}-content-item-remove`,"aria-label":s==null?void 0:s.remove,onClick:()=>{S==null||S(n)}},a.createElement(it,null))):(g.onClick=d||n.disabled?void 0:()=>u(n),a.createElement("li",Object.assign({},g),a.createElement(Te,{className:`${r}-checkbox`,checked:o,disabled:d||n.disabled}),p))},zt=a.memo(Nt),Ht=["handleFilter","handleClear","checkedKeys"],Vt=e=>Object.assign(Object.assign({},{simple:!0,showSizeChanger:!1,showLessItems:!1}),e),Ut=(e,t)=>{const{prefixCls:l,filteredRenderItems:n,selectedKeys:o,disabled:d,showRemove:r,pagination:u,onScroll:S,onItemSelect:C,onItemRemove:b}=e,[j,s]=a.useState(1),g=a.useMemo(()=>u?Vt(typeof u=="object"?u:{}):null,[u]),[p,T]=ot(10,{value:g==null?void 0:g.pageSize});a.useEffect(()=>{if(g){const x=Math.ceil(n.length/p);s(Math.min(j,x))}},[n,g,p]);const R=x=>{C==null||C(x.key,!o.includes(x.key))},A=x=>{b==null||b([x.key])},w=x=>{s(x)},_=(x,F)=>{s(x),T(F)},B=a.useMemo(()=>g?n.slice((j-1)*p,j*p):n,[j,n,g,p]);a.useImperativeHandle(t,()=>({items:B}));const P=g?a.createElement(rt,{size:"small",disabled:d,simple:g.simple,pageSize:p,showLessItems:g.showLessItems,showSizeChanger:g.showSizeChanger,className:`${l}-pagination`,total:n.length,current:j,onChange:w,onShowSizeChange:_}):null,D=oe(`${l}-content`,{[`${l}-content-show-remove`]:r});return a.createElement(a.Fragment,null,a.createElement("ul",{className:D,onScroll:S},(B||[]).map(x=>{let{renderedEl:F,renderedText:I,item:m}=x;return a.createElement(zt,{key:m.key,item:m,renderedText:I,renderedEl:F,prefixCls:l,showRemove:r,onClick:R,onRemove:A,checked:o.includes(m.key),disabled:d||m.disabled})})),P)},Wt=a.forwardRef(Ut),Gt=e=>{const{placeholder:t="",value:l,prefixCls:n,disabled:o,onChange:d,handleClear:r}=e,u=a.useCallback(S=>{d==null||d(S),S.target.value===""&&(r==null||r())},[d]);return a.createElement(he,{placeholder:t,className:n,value:l,onChange:u,disabled:o,allowClear:!0,prefix:a.createElement(ct,null)})},Ne=Gt,Xt=()=>null;function _t(e){return!!(e&&!ht(e)&&Object.prototype.toString.call(e)==="[object Object]")}function ie(e){return e.filter(t=>!t.disabled).map(t=>t.key)}const Yt=e=>e!==void 0,Jt=e=>{const{prefixCls:t,dataSource:l=[],titleText:n="",checkedKeys:o,disabled:d,showSearch:r=!1,style:u,searchPlaceholder:S,notFoundContent:C,selectAll:b,selectCurrent:j,selectInvert:s,removeAll:g,removeCurrent:p,showSelectAll:T=!0,showRemove:R,pagination:A,direction:w,itemsUnit:_,itemUnit:B,selectAllLabel:P,selectionsIcon:D,footer:x,renderList:F,onItemSelectAll:I,onItemRemove:m,handleFilter:c,handleClear:O,filterOption:K,render:pe=Xt}=e,[W,Y]=a.useState(""),L=a.useRef({}),N=h=>{Y(h.target.value),c(h)},fe=()=>{Y(""),O()},Ce=(h,y)=>K?K(W,y):h.includes(W),Se=h=>{let y=F?F(h):null;const E=!!y;return E||(y=$.createElement(Wt,Object.assign({ref:L},h))),{customize:E,bodyContent:y}},re=h=>{const y=pe(h),E=_t(y);return{item:h,renderedEl:E?y.label:y,renderedText:E?y.value:y}},te=a.useMemo(()=>Array.isArray(C)?C[w==="left"?0:1]:C,[C,w]),[k,z]=a.useMemo(()=>{const h=[],y=[];return l.forEach(E=>{const H=re(E);W&&!Ce(H.renderedText,E)||(h.push(E),y.push(H))}),[h,y]},[l,W]),se=a.useMemo(()=>{if(o.length===0)return"none";const h=me(o);return k.every(y=>h.has(y.key)||!!y.disabled)?"all":"part"},[o,k]),ye=a.useMemo(()=>{const h=r?$.createElement("div",{className:`${t}-body-search-wrapper`},$.createElement(Ne,{prefixCls:`${t}-search`,onChange:N,handleClear:fe,placeholder:S,value:W,disabled:d})):null,{customize:y,bodyContent:E}=Se(Object.assign(Object.assign({},dt(e,Ht)),{filteredItems:k,filteredRenderItems:z,selectedKeys:o}));let H;return y?H=$.createElement("div",{className:`${t}-body-customize-wrapper`},E):H=k.length?E:$.createElement("div",{className:`${t}-body-not-found`},te),$.createElement("div",{className:oe(r?`${t}-body ${t}-body-with-search`:`${t}-body`)},h,H)},[r,t,S,W,d,o,k,z,te]),Z=$.createElement(Te,{disabled:l.length===0||d,checked:se==="all",indeterminate:se==="part",className:`${t}-checkbox`,onChange:()=>{I==null||I(k.filter(h=>!h.disabled).map(h=>{let{key:y}=h;return y}),se!=="all")}}),ne=(h,y)=>{if(P)return typeof P=="function"?P({selectedCount:h,totalCount:y}):P;const E=y>1?_:B;return $.createElement($.Fragment,null,(h>0?`${h}/`:"")+y," ",E)},ae=x&&(x.length<2?x(e):x(e,{direction:w})),ve=oe(t,{[`${t}-with-pagination`]:!!A,[`${t}-with-footer`]:!!ae}),be=ae?$.createElement("div",{className:`${t}-footer`},ae):null,ce=!R&&!A&&Z;let le;R?le=[A?{key:"removeCurrent",label:p,onClick(){var h;const y=ie((((h=L.current)===null||h===void 0?void 0:h.items)||[]).map(E=>E.item));m==null||m(y)}}:null,{key:"removeAll",label:g,onClick(){m==null||m(ie(k))}}].filter(Boolean):le=[{key:"selectAll",label:b,onClick(){const h=ie(k);I==null||I(h,h.length!==o.length)}},A?{key:"selectCurrent",label:j,onClick(){var h;const y=((h=L.current)===null||h===void 0?void 0:h.items)||[];I==null||I(ie(y.map(E=>E.item)),!0)}}:null,{key:"selectInvert",label:s,onClick(){var h;const y=ie(A?(((h=L.current)===null||h===void 0?void 0:h.items)||[]).map(Q=>Q.item):k),E=new Set(o),H=[];y.forEach(Q=>{E.has(Q)||H.push(Q)}),I==null||I(H,"replace")}}];const xe=$.createElement(ut,{className:`${t}-header-dropdown`,menu:{items:le},disabled:d},Yt(D)?D:$.createElement(mt,null));return $.createElement("div",{className:ve,style:u},$.createElement("div",{className:`${t}-header`},T?$.createElement($.Fragment,null,ce,xe):null,$.createElement("span",{className:`${t}-header-selected`},ne(o.length,k.length)),$.createElement("span",{className:`${t}-header-title`},n)),ye,be)},Ee=Jt,Zt=e=>{const{disabled:t,moveToLeft:l,moveToRight:n,leftArrowText:o="",rightArrowText:d="",leftActive:r,rightActive:u,className:S,style:C,direction:b,oneWay:j}=e;return a.createElement("div",{className:S,style:C},a.createElement(J,{type:"primary",size:"small",disabled:t||!u,onClick:n,icon:b!=="rtl"?a.createElement(Re,null):a.createElement(we,null)},d),!j&&a.createElement(J,{type:"primary",size:"small",disabled:t||!r,onClick:l,icon:b!=="rtl"?a.createElement(we,null):a.createElement(Re,null)},o))},ze=Zt,Qt=e=>{const{antCls:t,componentCls:l,listHeight:n,controlHeightLG:o,marginXXS:d,margin:r}=e,u=`${t}-table`,S=`${t}-input`;return{[`${l}-customize-list`]:{[`${l}-list`]:{flex:"1 1 50%",width:"auto",height:"auto",minHeight:n},[`${u}-wrapper`]:{[`${u}-small`]:{border:0,borderRadius:0,[`${u}-selection-column`]:{width:o,minWidth:o}},[`${u}-pagination${u}-pagination`]:{margin:`${r}px 0 ${d}px`}},[`${S}[disabled]`]:{backgroundColor:"transparent"}}}},De=(e,t)=>{const{componentCls:l,colorBorder:n}=e;return{[`${l}-list`]:{borderColor:t,"&-search:not([disabled])":{borderColor:n}}}},es=e=>{const{componentCls:t}=e;return{[`${t}-status-error`]:Object.assign({},De(e,e.colorError)),[`${t}-status-warning`]:Object.assign({},De(e,e.colorWarning))}},ts=e=>{const{componentCls:t,colorBorder:l,colorSplit:n,lineWidth:o,itemHeight:d,headerHeight:r,transferHeaderVerticalPadding:u,itemPaddingBlock:S,controlItemBgActive:C,colorTextDisabled:b,listHeight:j,listWidth:s,listWidthLG:g,fontSizeIcon:p,marginXS:T,paddingSM:R,lineType:A,antCls:w,iconCls:_,motionDurationSlow:B,controlItemBgHover:P,borderRadiusLG:D,colorBgContainer:x,colorText:F,controlItemBgActiveHover:I}=e;return{display:"flex",flexDirection:"column",width:s,height:j,border:`${o}px ${A} ${l}`,borderRadius:e.borderRadiusLG,"&-with-pagination":{width:g,height:"auto"},"&-search":{[`${_}-search`]:{color:b}},"&-header":{display:"flex",flex:"none",alignItems:"center",height:r,padding:`${u-o}px ${R}px ${u}px`,color:F,background:x,borderBottom:`${o}px ${A} ${n}`,borderRadius:`${D}px ${D}px 0 0`,"> *:not(:last-child)":{marginInlineEnd:4},"> *":{flex:"none"},"&-title":Object.assign(Object.assign({},Fe),{flex:"auto",textAlign:"end"}),"&-dropdown":Object.assign(Object.assign({},Ct()),{fontSize:p,transform:"translateY(10%)",cursor:"pointer","&[disabled]":{cursor:"not-allowed"}})},"&-body":{display:"flex",flex:"auto",flexDirection:"column",fontSize:e.fontSize,minHeight:0,"&-search-wrapper":{position:"relative",flex:"none",padding:R}},"&-content":{flex:"auto",margin:0,padding:0,overflow:"auto",listStyle:"none","&-item":{display:"flex",alignItems:"center",minHeight:d,padding:`${S}px ${R}px`,transition:`all ${B}`,"> *:not(:last-child)":{marginInlineEnd:T},"> *":{flex:"none"},"&-text":Object.assign(Object.assign({},Fe),{flex:"auto"}),"&-remove":{position:"relative",color:l,cursor:"pointer",transition:`all ${B}`,"&:hover":{color:e.colorLinkHover},"&::after":{position:"absolute",inset:`-${S}px -50%`,content:'""'}},[`&:not(${t}-list-content-item-disabled)`]:{"&:hover":{backgroundColor:P,cursor:"pointer"},[`&${t}-list-content-item-checked:hover`]:{backgroundColor:I}},"&-checked":{backgroundColor:C},"&-disabled":{color:b,cursor:"not-allowed"}},[`&-show-remove ${t}-list-content-item:not(${t}-list-content-item-disabled):hover`]:{background:"transparent",cursor:"default"}},"&-pagination":{padding:`${e.paddingXS}px 0`,textAlign:"end",borderTop:`${o}px ${A} ${n}`,[`${w}-pagination-options`]:{paddingInlineEnd:e.paddingXS}},"&-body-not-found":{flex:"none",width:"100%",margin:"auto 0",color:b,textAlign:"center"},"&-footer":{borderTop:`${o}px ${A} ${n}`}}},ss=e=>{const{antCls:t,iconCls:l,componentCls:n,headerHeight:o,marginXS:d,marginXXS:r,fontSizeIcon:u,fontSize:S,lineHeight:C,colorBgContainerDisabled:b}=e;return{[n]:Object.assign(Object.assign({},ft(e)),{position:"relative",display:"flex",alignItems:"stretch",[`${n}-disabled`]:{[`${n}-list`]:{background:b}},[`${n}-list`]:ts(e),[`${n}-operation`]:{display:"flex",flex:"none",flexDirection:"column",alignSelf:"center",margin:`0 ${d}px`,verticalAlign:"middle",[`${t}-btn`]:{display:"block","&:first-child":{marginBottom:r},[l]:{fontSize:u}}},[`${t}-empty-image`]:{maxHeight:o/2-Math.round(S*C)}})}},ns=e=>{const{componentCls:t}=e;return{[`${t}-rtl`]:{direction:"rtl"}}},as=gt("Transfer",e=>{const{fontSize:t,lineHeight:l,lineWidth:n,controlHeightLG:o}=e,d=Math.round(t*l),r=pt(e,{transferHeaderVerticalPadding:Math.ceil((o-n-d)/2)});return[ss(r),Qt(r),es(r),ns(r)]},e=>{const{fontSize:t,lineHeight:l,controlHeight:n,controlHeightLG:o}=e,d=Math.round(t*l);return{listWidth:180,listHeight:200,listWidthLG:250,headerHeight:o,itemHeight:n,itemPaddingBlock:(n-d)/2}}),ge=e=>{const{dataSource:t,targetKeys:l=[],selectedKeys:n,selectAllLabels:o=[],operations:d=[],style:r={},listStyle:u={},locale:S={},titles:C,disabled:b,showSearch:j=!1,operationStyle:s,showSelectAll:g,oneWay:p,pagination:T,status:R,prefixCls:A,className:w,rootClassName:_,selectionsIcon:B,filterOption:P,render:D,footer:x,children:F,rowKey:I,onScroll:m,onChange:c,onSearch:O,onSelectChange:K}=e,{getPrefixCls:pe,renderEmpty:W,direction:Y,transfer:L}=a.useContext(St),N=pe("transfer",A),[fe,Ce]=as(N),[Se,re,te]=Kt(t,I,l),[k,z,se,ye]=Lt(re,te,n),Z=a.useCallback((f,v)=>{if(f==="left"){const G=typeof v=="function"?v(k||[]):v;se(G)}else{const G=typeof v=="function"?v(z||[]):v;ye(G)}},[k,z]),ne=a.useCallback((f,v)=>{f==="left"?K==null||K(v,z):K==null||K(k,v)},[k,z]),ae=f=>{var v;return(v=C??f.titles)!==null&&v!==void 0?v:[]},ve=f=>{m==null||m("left",f)},be=f=>{m==null||m("right",f)},ce=f=>{const v=f==="right"?k:z,G=Dt(Se),q=v.filter(Ie=>!G.has(Ie)),X=me(q),je=f==="right"?q.concat(l):l.filter(Ie=>!X.has(Ie)),de=f==="right"?"left":"right";Z(de,[]),ne(de,[]),c==null||c(je,f,q)},le=()=>{ce("left")},xe=()=>{ce("right")},h=(f,v,G)=>{Z(f,q=>{let X=[];if(G==="replace")X=v;else if(G)X=Array.from(new Set([].concat(ue(q),ue(v))));else{const je=me(v);X=q.filter(de=>!je.has(de))}return ne(f,X),X})},y=(f,v)=>{h("left",f,v)},E=(f,v)=>{h("right",f,v)},H=f=>O==null?void 0:O("left",f.target.value),Q=f=>O==null?void 0:O("right",f.target.value),He=()=>O==null?void 0:O("left",""),Ve=()=>O==null?void 0:O("right",""),Me=(f,v,G)=>{const q=ue(f==="left"?k:z),X=q.indexOf(v);X>-1&&q.splice(X,1),G&&q.push(v),ne(f,q),e.selectedKeys||Z(f,q)},Ue=(f,v)=>{Me("left",f,v)},We=(f,v)=>{Me("right",f,v)},Ge=f=>{Z("right",[]),c==null||c(l.filter(v=>!f.includes(v)),"left",ue(f))},Ae=f=>typeof u=="function"?u({direction:f}):u||{},Xe=a.useContext(yt),{hasFeedback:_e,status:Ye}=Xe,Je=f=>Object.assign(Object.assign(Object.assign({},f),{notFoundContent:(W==null?void 0:W("Transfer"))||$.createElement(bt,{componentName:"Transfer"})}),S),Ze=xt(Ye,R),ke=!F&&T,Qe=z.length>0,et=k.length>0,tt=oe(N,{[`${N}-disabled`]:b,[`${N}-customize-list`]:!!F,[`${N}-rtl`]:Y==="rtl"},vt(N,Ze,_e),L==null?void 0:L.className,w,_,Ce),[st]=Ke("Transfer",qe.Transfer),Oe=Je(st),[nt,at]=ae(Oe);return fe($.createElement("div",{className:tt,style:Object.assign(Object.assign({},L==null?void 0:L.style),r)},$.createElement(Ee,Object.assign({prefixCls:`${N}-list`,titleText:nt,dataSource:re,filterOption:P,style:Ae("left"),checkedKeys:k,handleFilter:H,handleClear:He,onItemSelect:Ue,onItemSelectAll:y,render:D,showSearch:j,renderList:F,footer:x,onScroll:ve,disabled:b,direction:Y==="rtl"?"right":"left",showSelectAll:g,selectAllLabel:o[0],pagination:ke,selectionsIcon:B},Oe)),$.createElement(ze,{className:`${N}-operation`,rightActive:et,rightArrowText:d[0],moveToRight:xe,leftActive:Qe,leftArrowText:d[1],moveToLeft:le,style:s,disabled:b,direction:Y,oneWay:p}),$.createElement(Ee,Object.assign({prefixCls:`${N}-list`,titleText:at,dataSource:te,filterOption:P,style:Ae("right"),checkedKeys:z,handleFilter:Q,handleClear:Ve,onItemSelect:We,onItemSelectAll:E,onItemRemove:Ge,render:D,showSearch:j,renderList:F,footer:x,onScroll:be,disabled:b,direction:Y==="rtl"?"left":"right",showSelectAll:g,selectAllLabel:o[1],showRemove:p,pagination:ke,selectionsIcon:B},Oe))))};ge.List=Ee;ge.Search=Ne;ge.Operation=ze;const ls=ge,us=e=>{const[t,l]=a.useState([]),[n,o]=a.useState([]),[d,r]=a.useState([]),[u,S]=a.useState([]),C=async(p,T="")=>{const{data:R}=await V.custom({url:"",method:"get",meta:{operation:"systemRolePermissionsRecords",variables:{page:{value:p,type:"Int",required:!0},key:{value:T,type:"String",required:!1},roleId:{value:e.role.id,type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:["key","title","description","chosen"]}]}}),A=[];R.results.forEach(w=>{w.chosen&&A.push(w.key)}),l([...R.results]),o(A)},b=async p=>{const{data:T}=await V.custom({url:"",method:"post",meta:{operation:"addRolePermissions",variables:{roleId:{value:parseInt(e.role.id),type:"Int",required:!0},permissions:{value:p,type:"[Int]",required:!0}},fields:["success","message"]}});T.success?M.success(T.message):M.error(T.message)},j=async p=>{const{data:T}=await V.custom({url:"",method:"post",meta:{operation:"removeRolePermissions",variables:{roleId:{value:parseInt(e.role.id),type:"Int",required:!0},permissions:{value:p,type:"[Int]",required:!0}},fields:["success","message"]}});T.success?M.success(T.message):M.error(T.message)},s=p=>{o(p),u.length>0&&b(u),d.length>0&&j(d)},g=(p,T)=>{S(p),r(T)};return a.useEffect(()=>{C(1)},[e.randKey,e.role]),i.jsx(i.Fragment,{children:i.jsx(ls,{titles:["Not Assigned Permissions","Assigned Permissions"],dataSource:t,showSearch:!0,listStyle:{width:"100vw",height:"65vh"},operations:["Add","Remove"],targetKeys:n,onChange:s,onSelectChange:g,onSearch:(p,T)=>{},render:p=>p.title})})},{TextArea:is}=he,os=e=>{const[t,l]=a.useState(e.programme.isActive);return a.useEffect(()=>{e.form.setFieldsValue({name:e.programme.name,description:e.programme.description,isActive:e.programme.isActive})},[e.form,e.programme]),i.jsx(i.Fragment,{children:i.jsxs(U,{layout:"vertical",form:e.form,onFinish:n=>{n.isActive=t,n.id=parseInt(e.programme.id),e.onFinish(n)},requiredMark:!1,children:[i.jsx(U.Item,{name:"name",label:"Name",rules:[{required:!0,type:"string",message:"Please input Name"}],children:i.jsx(he,{size:"large",placeholder:"Enter Name ..."})}),i.jsx(U.Item,{name:"description",label:"Description",rules:[{required:!1,type:"string",message:"Please input Description"}],children:i.jsx(is,{rows:4})}),i.jsx(U.Item,{name:"isActive",children:i.jsx(Te,{checked:t,onChange:()=>l(!t),children:"Active"})}),i.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:i.jsx(J,{type:"primary",size:"large",htmlType:"submit",children:"Save"})})]})})},ms=e=>{const[t,l]=a.useState(),[n,o]=a.useState([]),[d,r]=a.useState(0),[u,S]=a.useState(20),[C,b]=a.useState(""),[j,s]=a.useState(!0);Ot();const[g]=U.useForm(),[p]=U.useForm(),R=!jt.useBreakpoint().lg,[A,w]=a.useState(!1),_=m=>{l(m),w(!0)},B=async m=>{const{data:c}=await V.custom({url:"",method:"post",meta:{operation:"updateProgramme",variables:{id:{value:m.id,type:"Int",required:!0},name:{value:m.name,type:"String",required:!0},description:{value:m.description,type:"String",required:!1},isActive:{value:m.isActive,type:"Boolean",required:!0}},fields:["success","message",{programme:["id","name","description","created","updated","isActive","canDelete","canEdit","canManage"]}]}});c.success?(M.success(c.message),p.resetFields(),w(!1),o(n.map(O=>O.id===c.programme.id?c.programme:O))):M.error(c.message)},P=async()=>{const{data:m}=await V.custom({url:"",method:"post",meta:{operation:"syncSystemProgrammes",variables:{},fields:["success","message"]}});m.success?(M.success(m.message),n.length=0,o([]),I(1)):M.error(m.message)},D=async m=>{const{data:c}=await V.custom({url:"",method:"post",meta:{operation:"deleteProgramme",variables:{id:{value:parseInt(m.toString()),type:"Int",required:!0}},fields:["success","message"]}});c.success?(M.success(c.message),o(n.filter(O=>O.id!==m))):M.error(c.message)},x=()=>{M("Canceled")},F=[{title:"Name",dataIndex:"name",fixed:!0,render:(m,c,O)=>i.jsx("span",{children:i.jsx("a",{children:c.name})})},{title:"Created",dataIndex:"created",render:(m,c,O)=>i.jsx(i.Fragment,{children:i.jsx("span",{children:i.jsx(Tt,{date:new Date(c.created)})})})},{title:"Status",dataIndex:"isActive",render:(m,c,O)=>i.jsx("a",{children:c!=null&&c.isActive?i.jsx("span",{style:{color:"green"},children:"Active"}):i.jsx("span",{style:{color:"red"},children:"Inactive"})})},{title:"",dataIndex:"action",render:(m,c,O)=>i.jsxs("div",{style:{display:"flex",justifyContent:"flex-end"},children:[e.control&&i.jsx(Mt,{title:"Are you sure to delete this Programme?",onConfirm:()=>D(c==null?void 0:c.id),onCancel:()=>x,okText:"Yes",cancelText:"No",disabled:!(c!=null&&c.canDelete),overlayStyle:{zIndex:9999},children:i.jsx(J,{icon:i.jsx(At,{}),disabled:!(c!=null&&c.canDelete)})}),e.control&&i.jsx(Pe,{title:"Edit "+(c==null?void 0:c.name)+" Programme",color:"green",children:i.jsx(J,{icon:i.jsx(kt,{}),disabled:!(c!=null&&c.canEdit),onClick:()=>_(c)})})]})}],I=async(m,c="",O=20)=>{const{data:K}=await V.custom({url:"",method:"get",meta:{operation:"systemProgrammes",variables:{page:{value:m,type:"Int",required:!0},key:{value:c,type:"String",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","description","isActive","created","updated","canEdit","canDelete","canManage"]}]}});r(K.total),o([...K.results]),s(!1)};return a.useEffect(()=>{I(1,"",20)},[]),i.jsxs(i.Fragment,{children:[i.jsxs(Le,{style:{marginTop:10},children:[i.jsx($e,{span:R?24:20,children:i.jsx(U,{layout:"vertical",form:g,onFinish:m=>{b(m.key),n.length=0,I(1,m.key)},children:i.jsx(U.Item,{name:"key",children:i.jsx(he,{size:"large",placeholder:"Search ...",prefix:i.jsx(It,{}),autoComplete:"off",allowClear:!0})})})}),(e==null?void 0:e.control)&&i.jsx($e,{span:R?24:4,style:{display:"flex",justifyContent:"flex-end"},children:i.jsx(Pe,{title:"Synchronize Default System Programmes",children:i.jsx(J,{icon:i.jsx($t,{}),size:"large",onClick:()=>P(),children:"Sync Programmes"})})})]}),i.jsx(Pt,{loading:j,columns:F,dataSource:n,pagination:{onChange:(m,c)=>{S(c),I(m,C,c)},total:d,pageSize:u,position:["bottomCenter"],showQuickJumper:!1},scroll:{x:!0}}),i.jsx(Et,{title:"Edit "+(t==null?void 0:t.name)+" Informations",width:"40vw",open:A,onClose:m=>w(m),children:i.jsx(os,{form:p,programme:t,onFinish:B})})]})},hs=e=>{const[t,l]=a.useState(!1),[n,o]=a.useState(!1),[d,r]=a.useState(),[u]=U.useForm(),S=async()=>{const{data:s}=await V.custom({url:"",method:"post",meta:{operation:"autoCreateSchoolSettings",variables:{},fields:["success","message"]}}).catch(()=>(M.error("Error occured while Auto Creating School Settings"),{data:null})).then(g=>g);s&&(s.success?(M.success(s.message),C()):M.error(s.message))},C=async()=>{o(!0);const{data:s}=await V.custom({url:"",method:"get",meta:{operation:e.school?"schoolSettings":"operationalSchoolSettings",variables:e.school?{schoolId:{value:parseInt(e.school.id),type:"Int",required:!0}}:{},fields:Ft}}).catch(()=>(M.error("Error occured while get Operational School Settings"),{data:null})).then(g=>g);s?(l(!0),r(s),u.setFieldsValue({teachersCanCreateClasses:s.teachersCanCreateClasses,teachersCanCreateDrives:s.teachersCanCreateDrives,teachersCanCreatePublicVirtualClassSessions:s.teachersCanCreatePublicVirtualClassSessions,dispatchMessagesOnClassVirtualSessionCreation:s.dispatchMessagesOnClassVirtualSessionCreation,dispatchMessagesOnFilesUpload:s.dispatchMessagesOnFilesUpload,dispatchMessagesOnAssignmentsCreation:s.dispatchMessagesOnAssignmentsCreation,dispatchMessagesOnAnnouncementsCreation:s.dispatchMessagesOnAnnouncementsCreation,dispatchMessagesOnTimetableSessionsCreation:s.dispatchMessagesOnTimetableSessionsCreation,dispatchMessagesOnTimetableSessionCancellation:s.dispatchMessagesOnTimetableSessionCancellation,dispatchMessagesOnTimetableSessionRescheduling:s.dispatchMessagesOnTimetableSessionRescheduling,studentsCanCreateClassVirtualSessions:s.studentsCanCreateClassVirtualSessions,studentsCanCreateDrives:s.studentsCanCreateDrives,studentsCanCreateClasses:s.studentsCanCreateClasses,studentsCanUploadFiles:s.studentsCanUploadFiles,teachersCanUploadFiles:s.teachersCanUploadFiles})):l(!1),o(!1)},b=async s=>{const{data:g}=await V.custom({url:"",method:"post",meta:{operation:"updateSchoolSettings",variables:{schoolId:{value:parseInt(e.school.id),type:"Int",required:!0},teachersCanCreateClasses:{value:s.teachersCanCreateClasses,type:"Boolean",required:!1},teachersCanCreateDrives:{value:s.teachersCanCreateDrives,type:"Boolean",required:!1},teachersCanCreatePublicVirtualClassSessions:{value:s.teachersCanCreatePublicVirtualClassSessions,type:"Boolean",required:!1},dispatchMessagesOnClassVirtualSessionCreation:{value:s.dispatchMessagesOnClassVirtualSessionCreation,type:"Boolean",required:!1},dispatchMessagesOnFilesUpload:{value:s.dispatchMessagesOnFilesUpload,type:"Boolean",required:!1},dispatchMessagesOnAssignmentsCreation:{value:s.dispatchMessagesOnAssignmentsCreation,type:"Boolean",required:!1},dispatchMessagesOnAnnouncementsCreation:{value:s.dispatchMessagesOnAnnouncementsCreation,type:"Boolean",required:!1},dispatchMessagesOnTimetableSessionsCreation:{value:s.dispatchMessagesOnTimetableSessionsCreation,type:"Boolean",required:!1},dispatchMessagesOnTimetableSessionCancellation:{value:s.dispatchMessagesOnTimetableSessionCancellation,type:"Boolean",required:!1},dispatchMessagesOnTimetableSessionRescheduling:{value:s.dispatchMessagesOnTimetableSessionRescheduling,type:"Boolean",required:!1},studentsCanCreateClassVirtualSessions:{value:s.studentsCanCreateClassVirtualSessions,type:"Boolean",required:!1},studentsCanCreateDrives:{value:s.studentsCanCreateDrives,type:"Boolean",required:!1},studentsCanCreateClasses:{value:s.studentsCanCreateClasses,type:"Boolean",required:!1}},fields:["success","message"]}}).catch(()=>(M.error("Error occured while updating Operational School Settings"),{data:null})).then(p=>p);g&&(g.success?M.success(g.message):M.error(g.message))},j=async s=>{const{data:g}=await V.custom({url:"",method:"post",meta:{operation:"updateOperationalSchoolSettings",variables:{teachersCanCreateClasses:{value:s.teachersCanCreateClasses,type:"Boolean",required:!1},teachersCanCreateDrives:{value:s.teachersCanCreateDrives,type:"Boolean",required:!1},teachersCanCreatePublicVirtualClassSessions:{value:s.teachersCanCreatePublicVirtualClassSessions,type:"Boolean",required:!1},dispatchMessagesOnClassVirtualSessionCreation:{value:s.dispatchMessagesOnClassVirtualSessionCreation,type:"Boolean",required:!1},dispatchMessagesOnFilesUpload:{value:s.dispatchMessagesOnFilesUpload,type:"Boolean",required:!1},dispatchMessagesOnAssignmentsCreation:{value:s.dispatchMessagesOnAssignmentsCreation,type:"Boolean",required:!1},dispatchMessagesOnAnnouncementsCreation:{value:s.dispatchMessagesOnAnnouncementsCreation,type:"Boolean",required:!1},dispatchMessagesOnTimetableSessionsCreation:{value:s.dispatchMessagesOnTimetableSessionsCreation,type:"Boolean",required:!1},dispatchMessagesOnTimetableSessionCancellation:{value:s.dispatchMessagesOnTimetableSessionCancellation,type:"Boolean",required:!1},dispatchMessagesOnTimetableSessionRescheduling:{value:s.dispatchMessagesOnTimetableSessionRescheduling,type:"Boolean",required:!1},studentsCanCreateClassVirtualSessions:{value:s.studentsCanCreateClassVirtualSessions,type:"Boolean",required:!1},studentsCanCreateDrives:{value:s.studentsCanCreateDrives,type:"Boolean",required:!1},studentsCanCreateClasses:{value:s.studentsCanCreateClasses,type:"Boolean",required:!1},studentsCanUploadFiles:{value:s.studentsCanUploadFiles,type:"Boolean",required:!1},teachersCanUploadFiles:{value:s.teachersCanUploadFiles,type:"Boolean",required:!1}},fields:["success","message"]}}).catch(()=>(M.error("Error occured while updating Operational School Settings"),{data:null})).then(p=>p);g&&(g.success?M.success(g.message):M.error(g.message))};return a.useEffect(()=>{C()},[e.randKey,e.school]),i.jsx(i.Fragment,{children:i.jsx(Rt,{loading:n,active:!0,children:t?i.jsx("div",{style:{marginTop:10,marginLeft:20,maxHeight:e.full?"70vh":"100vh",overflowY:"auto"},children:i.jsx(U,{layout:"horizontal",form:u,onFinish:s=>{e.school?b(s):j(s)},onChange:()=>{u.submit()},children:i.jsx(Le,{style:{display:"flex",justifyContent:"flex-start"},children:i.jsx($e,{span:e.full?24:12,children:i.jsx(wt,{children:Object.entries(d??{}).map(([s,g])=>i.jsx(U.Item,{label:s.split(/(?=[A-Z])/).map(p=>p.charAt(0).toUpperCase()+p.slice(1)).join(" "),name:s,initialValue:g,children:i.jsx(Bt,{checked:u.getFieldValue(s),onChange:p=>{u.submit(),r(u.getFieldsValue())}})}))})})})})}):i.jsx(i.Fragment,{children:i.jsx("div",{style:{display:"flex",justifyContent:"center"},children:i.jsx(J,{onClick:()=>S(),children:"Auto Create Settings"})})})})})};export{ms as P,us as R,hs as S,ls as T};
