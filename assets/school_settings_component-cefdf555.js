import{r as a,b7 as oe,c3 as qe,c4 as Ke,c5 as lt,c6 as it,ag as Ee,c7 as ot,D as rt,I as he,c8 as ct,c9 as dt,R as M,Z as ut,ca as mt,cb as ht,B as J,cc as Re,cd as Fe,bp as gt,bq as pt,b6 as ft,ce as we,cf as Ct,bl as St,cg as yt,ch as vt,bm as ue,ci as bt,cj as xt,j as i,J as V,K as T,F as U,q as Ot,be as jt,y as Le,z as Me,S as It,x as Pe,bt as Mt,H as $t,ab as Et,a6 as Tt,a9 as At,az as kt,a7 as Rt,C as Ft}from"./index-f4f91bd9.js";import{T as wt}from"./Table-1f5b71d9.js";import{S as Pt}from"./index-7eab88ac.js";const me=e=>{const t=new Map;return e.forEach((l,n)=>{t.set(l,n)}),t},Dt=e=>{const t=new Map;return e.forEach((l,n)=>{let{disabled:o,key:d}=l;o&&t.set(d,n)}),t};function Bt(e,t,l){const n=a.useMemo(()=>(e||[]).map(r=>(t&&(r=Object.assign(Object.assign({},r),{key:t(r)})),r)),[e,t]),[o,d]=a.useMemo(()=>{const r=[],u=new Array((l||[]).length),S=me(l||[]);return n.forEach(C=>{S.has(C.key)?u[S.get(C.key)]=C:r.push(C)}),[r,u]},[n,l,t]);return[n,o,d]}const qt=[];function ee(e,t){const l=e.filter(n=>t.has(n));return e.length===l.length?e:l}function De(e){return Array.from(e).join(";")}function Kt(e,t){let l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:qt;const[n,o]=a.useMemo(()=>[new Set(e.map(C=>C.key)),new Set(t.map(C=>C.key))],[e,t]),[d,r]=a.useState(()=>ee(l,n)),[u,S]=a.useState(()=>ee(l,o));return a.useEffect(()=>{r(ee(l,n)),S(ee(l,o))},[l]),a.useEffect(()=>{r(ee(d,n)),S(ee(u,o))},[De(n),De(o)]),[d,u,r,S]}const Lt=e=>{const{renderedText:t,renderedEl:l,item:n,checked:o,disabled:d,prefixCls:r,onClick:u,onRemove:S,showRemove:C}=e,b=oe(`${r}-content-item`,{[`${r}-content-item-disabled`]:d||n.disabled,[`${r}-content-item-checked`]:o});let j;(typeof t=="string"||typeof t=="number")&&(j=String(t));const[s]=qe("Transfer",Ke.Transfer),h={className:b,title:j},p=a.createElement("span",{className:`${r}-content-item-text`},l);return C?a.createElement("li",Object.assign({},h),p,a.createElement(lt,{disabled:d||n.disabled,className:`${r}-content-item-remove`,"aria-label":s==null?void 0:s.remove,onClick:()=>{S==null||S(n)}},a.createElement(it,null))):(h.onClick=d||n.disabled?void 0:()=>u(n),a.createElement("li",Object.assign({},h),a.createElement(Ee,{className:`${r}-checkbox`,checked:o,disabled:d||n.disabled}),p))},Nt=a.memo(Lt),zt=["handleFilter","handleClear","checkedKeys"],Ht=e=>Object.assign(Object.assign({},{simple:!0,showSizeChanger:!1,showLessItems:!1}),e),Vt=(e,t)=>{const{prefixCls:l,filteredRenderItems:n,selectedKeys:o,disabled:d,showRemove:r,pagination:u,onScroll:S,onItemSelect:C,onItemRemove:b}=e,[j,s]=a.useState(1),h=a.useMemo(()=>u?Ht(typeof u=="object"?u:{}):null,[u]),[p,E]=ot(10,{value:h==null?void 0:h.pageSize});a.useEffect(()=>{if(h){const x=Math.ceil(n.length/p);s(Math.min(j,x))}},[n,h,p]);const R=x=>{C==null||C(x.key,!o.includes(x.key))},A=x=>{b==null||b([x.key])},F=x=>{s(x)},_=(x,w)=>{s(x),E(w)},D=a.useMemo(()=>h?n.slice((j-1)*p,j*p):n,[j,n,h,p]);a.useImperativeHandle(t,()=>({items:D}));const P=h?a.createElement(rt,{size:"small",disabled:d,simple:h.simple,pageSize:p,showLessItems:h.showLessItems,showSizeChanger:h.showSizeChanger,className:`${l}-pagination`,total:n.length,current:j,onChange:F,onShowSizeChange:_}):null,B=oe(`${l}-content`,{[`${l}-content-show-remove`]:r});return a.createElement(a.Fragment,null,a.createElement("ul",{className:B,onScroll:S},(D||[]).map(x=>{let{renderedEl:w,renderedText:I,item:m}=x;return a.createElement(Nt,{key:m.key,item:m,renderedText:I,renderedEl:w,prefixCls:l,showRemove:r,onClick:R,onRemove:A,checked:o.includes(m.key),disabled:d||m.disabled})})),P)},Ut=a.forwardRef(Vt),Wt=e=>{const{placeholder:t="",value:l,prefixCls:n,disabled:o,onChange:d,handleClear:r}=e,u=a.useCallback(S=>{d==null||d(S),S.target.value===""&&(r==null||r())},[d]);return a.createElement(he,{placeholder:t,className:n,value:l,onChange:u,disabled:o,allowClear:!0,prefix:a.createElement(ct,null)})},Ne=Wt,Gt=()=>null;function Xt(e){return!!(e&&!ht(e)&&Object.prototype.toString.call(e)==="[object Object]")}function ie(e){return e.filter(t=>!t.disabled).map(t=>t.key)}const _t=e=>e!==void 0,Yt=e=>{const{prefixCls:t,dataSource:l=[],titleText:n="",checkedKeys:o,disabled:d,showSearch:r=!1,style:u,searchPlaceholder:S,notFoundContent:C,selectAll:b,selectCurrent:j,selectInvert:s,removeAll:h,removeCurrent:p,showSelectAll:E=!0,showRemove:R,pagination:A,direction:F,itemsUnit:_,itemUnit:D,selectAllLabel:P,selectionsIcon:B,footer:x,renderList:w,onItemSelectAll:I,onItemRemove:m,handleFilter:c,handleClear:O,filterOption:q,render:pe=Gt}=e,[W,Y]=a.useState(""),L=a.useRef({}),N=g=>{Y(g.target.value),c(g)},fe=()=>{Y(""),O()},Ce=(g,y)=>q?q(W,y):g.includes(W),Se=g=>{let y=w?w(g):null;const $=!!y;return $||(y=M.createElement(Ut,Object.assign({ref:L},g))),{customize:$,bodyContent:y}},re=g=>{const y=pe(g),$=Xt(y);return{item:g,renderedEl:$?y.label:y,renderedText:$?y.value:y}},te=a.useMemo(()=>Array.isArray(C)?C[F==="left"?0:1]:C,[C,F]),[k,z]=a.useMemo(()=>{const g=[],y=[];return l.forEach($=>{const H=re($);W&&!Ce(H.renderedText,$)||(g.push($),y.push(H))}),[g,y]},[l,W]),se=a.useMemo(()=>{if(o.length===0)return"none";const g=me(o);return k.every(y=>g.has(y.key)||!!y.disabled)?"all":"part"},[o,k]),ye=a.useMemo(()=>{const g=r?M.createElement("div",{className:`${t}-body-search-wrapper`},M.createElement(Ne,{prefixCls:`${t}-search`,onChange:N,handleClear:fe,placeholder:S,value:W,disabled:d})):null,{customize:y,bodyContent:$}=Se(Object.assign(Object.assign({},dt(e,zt)),{filteredItems:k,filteredRenderItems:z,selectedKeys:o}));let H;return y?H=M.createElement("div",{className:`${t}-body-customize-wrapper`},$):H=k.length?$:M.createElement("div",{className:`${t}-body-not-found`},te),M.createElement("div",{className:oe(r?`${t}-body ${t}-body-with-search`:`${t}-body`)},g,H)},[r,t,S,W,d,o,k,z,te]),Z=M.createElement(Ee,{disabled:l.length===0||d,checked:se==="all",indeterminate:se==="part",className:`${t}-checkbox`,onChange:()=>{I==null||I(k.filter(g=>!g.disabled).map(g=>{let{key:y}=g;return y}),se!=="all")}}),ne=(g,y)=>{if(P)return typeof P=="function"?P({selectedCount:g,totalCount:y}):P;const $=y>1?_:D;return M.createElement(M.Fragment,null,(g>0?`${g}/`:"")+y," ",$)},ae=x&&(x.length<2?x(e):x(e,{direction:F})),ve=oe(t,{[`${t}-with-pagination`]:!!A,[`${t}-with-footer`]:!!ae}),be=ae?M.createElement("div",{className:`${t}-footer`},ae):null,ce=!R&&!A&&Z;let le;R?le=[A?{key:"removeCurrent",label:p,onClick(){var g;const y=ie((((g=L.current)===null||g===void 0?void 0:g.items)||[]).map($=>$.item));m==null||m(y)}}:null,{key:"removeAll",label:h,onClick(){m==null||m(ie(k))}}].filter(Boolean):le=[{key:"selectAll",label:b,onClick(){const g=ie(k);I==null||I(g,g.length!==o.length)}},A?{key:"selectCurrent",label:j,onClick(){var g;const y=((g=L.current)===null||g===void 0?void 0:g.items)||[];I==null||I(ie(y.map($=>$.item)),!0)}}:null,{key:"selectInvert",label:s,onClick(){var g;const y=ie(A?(((g=L.current)===null||g===void 0?void 0:g.items)||[]).map(Q=>Q.item):k),$=new Set(o),H=[];y.forEach(Q=>{$.has(Q)||H.push(Q)}),I==null||I(H,"replace")}}];const xe=M.createElement(ut,{className:`${t}-header-dropdown`,menu:{items:le},disabled:d},_t(B)?B:M.createElement(mt,null));return M.createElement("div",{className:ve,style:u},M.createElement("div",{className:`${t}-header`},E?M.createElement(M.Fragment,null,ce,xe):null,M.createElement("span",{className:`${t}-header-selected`},ne(o.length,k.length)),M.createElement("span",{className:`${t}-header-title`},n)),ye,be)},$e=Yt,Jt=e=>{const{disabled:t,moveToLeft:l,moveToRight:n,leftArrowText:o="",rightArrowText:d="",leftActive:r,rightActive:u,className:S,style:C,direction:b,oneWay:j}=e;return a.createElement("div",{className:S,style:C},a.createElement(J,{type:"primary",size:"small",disabled:t||!u,onClick:n,icon:b!=="rtl"?a.createElement(Re,null):a.createElement(Fe,null)},d),!j&&a.createElement(J,{type:"primary",size:"small",disabled:t||!r,onClick:l,icon:b!=="rtl"?a.createElement(Fe,null):a.createElement(Re,null)},o))},ze=Jt,Zt=e=>{const{antCls:t,componentCls:l,listHeight:n,controlHeightLG:o,marginXXS:d,margin:r}=e,u=`${t}-table`,S=`${t}-input`;return{[`${l}-customize-list`]:{[`${l}-list`]:{flex:"1 1 50%",width:"auto",height:"auto",minHeight:n},[`${u}-wrapper`]:{[`${u}-small`]:{border:0,borderRadius:0,[`${u}-selection-column`]:{width:o,minWidth:o}},[`${u}-pagination${u}-pagination`]:{margin:`${r}px 0 ${d}px`}},[`${S}[disabled]`]:{backgroundColor:"transparent"}}}},Be=(e,t)=>{const{componentCls:l,colorBorder:n}=e;return{[`${l}-list`]:{borderColor:t,"&-search:not([disabled])":{borderColor:n}}}},Qt=e=>{const{componentCls:t}=e;return{[`${t}-status-error`]:Object.assign({},Be(e,e.colorError)),[`${t}-status-warning`]:Object.assign({},Be(e,e.colorWarning))}},es=e=>{const{componentCls:t,colorBorder:l,colorSplit:n,lineWidth:o,itemHeight:d,headerHeight:r,transferHeaderVerticalPadding:u,itemPaddingBlock:S,controlItemBgActive:C,colorTextDisabled:b,listHeight:j,listWidth:s,listWidthLG:h,fontSizeIcon:p,marginXS:E,paddingSM:R,lineType:A,antCls:F,iconCls:_,motionDurationSlow:D,controlItemBgHover:P,borderRadiusLG:B,colorBgContainer:x,colorText:w,controlItemBgActiveHover:I}=e;return{display:"flex",flexDirection:"column",width:s,height:j,border:`${o}px ${A} ${l}`,borderRadius:e.borderRadiusLG,"&-with-pagination":{width:h,height:"auto"},"&-search":{[`${_}-search`]:{color:b}},"&-header":{display:"flex",flex:"none",alignItems:"center",height:r,padding:`${u-o}px ${R}px ${u}px`,color:w,background:x,borderBottom:`${o}px ${A} ${n}`,borderRadius:`${B}px ${B}px 0 0`,"> *:not(:last-child)":{marginInlineEnd:4},"> *":{flex:"none"},"&-title":Object.assign(Object.assign({},we),{flex:"auto",textAlign:"end"}),"&-dropdown":Object.assign(Object.assign({},Ct()),{fontSize:p,transform:"translateY(10%)",cursor:"pointer","&[disabled]":{cursor:"not-allowed"}})},"&-body":{display:"flex",flex:"auto",flexDirection:"column",fontSize:e.fontSize,minHeight:0,"&-search-wrapper":{position:"relative",flex:"none",padding:R}},"&-content":{flex:"auto",margin:0,padding:0,overflow:"auto",listStyle:"none","&-item":{display:"flex",alignItems:"center",minHeight:d,padding:`${S}px ${R}px`,transition:`all ${D}`,"> *:not(:last-child)":{marginInlineEnd:E},"> *":{flex:"none"},"&-text":Object.assign(Object.assign({},we),{flex:"auto"}),"&-remove":{position:"relative",color:l,cursor:"pointer",transition:`all ${D}`,"&:hover":{color:e.colorLinkHover},"&::after":{position:"absolute",inset:`-${S}px -50%`,content:'""'}},[`&:not(${t}-list-content-item-disabled)`]:{"&:hover":{backgroundColor:P,cursor:"pointer"},[`&${t}-list-content-item-checked:hover`]:{backgroundColor:I}},"&-checked":{backgroundColor:C},"&-disabled":{color:b,cursor:"not-allowed"}},[`&-show-remove ${t}-list-content-item:not(${t}-list-content-item-disabled):hover`]:{background:"transparent",cursor:"default"}},"&-pagination":{padding:`${e.paddingXS}px 0`,textAlign:"end",borderTop:`${o}px ${A} ${n}`,[`${F}-pagination-options`]:{paddingInlineEnd:e.paddingXS}},"&-body-not-found":{flex:"none",width:"100%",margin:"auto 0",color:b,textAlign:"center"},"&-footer":{borderTop:`${o}px ${A} ${n}`}}},ts=e=>{const{antCls:t,iconCls:l,componentCls:n,headerHeight:o,marginXS:d,marginXXS:r,fontSizeIcon:u,fontSize:S,lineHeight:C,colorBgContainerDisabled:b}=e;return{[n]:Object.assign(Object.assign({},ft(e)),{position:"relative",display:"flex",alignItems:"stretch",[`${n}-disabled`]:{[`${n}-list`]:{background:b}},[`${n}-list`]:es(e),[`${n}-operation`]:{display:"flex",flex:"none",flexDirection:"column",alignSelf:"center",margin:`0 ${d}px`,verticalAlign:"middle",[`${t}-btn`]:{display:"block","&:first-child":{marginBottom:r},[l]:{fontSize:u}}},[`${t}-empty-image`]:{maxHeight:o/2-Math.round(S*C)}})}},ss=e=>{const{componentCls:t}=e;return{[`${t}-rtl`]:{direction:"rtl"}}},ns=gt("Transfer",e=>{const{fontSize:t,lineHeight:l,lineWidth:n,controlHeightLG:o}=e,d=Math.round(t*l),r=pt(e,{transferHeaderVerticalPadding:Math.ceil((o-n-d)/2)});return[ts(r),Zt(r),Qt(r),ss(r)]},e=>{const{fontSize:t,lineHeight:l,controlHeight:n,controlHeightLG:o}=e,d=Math.round(t*l);return{listWidth:180,listHeight:200,listWidthLG:250,headerHeight:o,itemHeight:n,itemPaddingBlock:(n-d)/2}}),ge=e=>{const{dataSource:t,targetKeys:l=[],selectedKeys:n,selectAllLabels:o=[],operations:d=[],style:r={},listStyle:u={},locale:S={},titles:C,disabled:b,showSearch:j=!1,operationStyle:s,showSelectAll:h,oneWay:p,pagination:E,status:R,prefixCls:A,className:F,rootClassName:_,selectionsIcon:D,filterOption:P,render:B,footer:x,children:w,rowKey:I,onScroll:m,onChange:c,onSearch:O,onSelectChange:q}=e,{getPrefixCls:pe,renderEmpty:W,direction:Y,transfer:L}=a.useContext(St),N=pe("transfer",A),[fe,Ce]=ns(N),[Se,re,te]=Bt(t,I,l),[k,z,se,ye]=Kt(re,te,n),Z=a.useCallback((f,v)=>{if(f==="left"){const G=typeof v=="function"?v(k||[]):v;se(G)}else{const G=typeof v=="function"?v(z||[]):v;ye(G)}},[k,z]),ne=a.useCallback((f,v)=>{f==="left"?q==null||q(v,z):q==null||q(k,v)},[k,z]),ae=f=>{var v;return(v=C??f.titles)!==null&&v!==void 0?v:[]},ve=f=>{m==null||m("left",f)},be=f=>{m==null||m("right",f)},ce=f=>{const v=f==="right"?k:z,G=Dt(Se),K=v.filter(Ie=>!G.has(Ie)),X=me(K),je=f==="right"?K.concat(l):l.filter(Ie=>!X.has(Ie)),de=f==="right"?"left":"right";Z(de,[]),ne(de,[]),c==null||c(je,f,K)},le=()=>{ce("left")},xe=()=>{ce("right")},g=(f,v,G)=>{Z(f,K=>{let X=[];if(G==="replace")X=v;else if(G)X=Array.from(new Set([].concat(ue(K),ue(v))));else{const je=me(v);X=K.filter(de=>!je.has(de))}return ne(f,X),X})},y=(f,v)=>{g("left",f,v)},$=(f,v)=>{g("right",f,v)},H=f=>O==null?void 0:O("left",f.target.value),Q=f=>O==null?void 0:O("right",f.target.value),He=()=>O==null?void 0:O("left",""),Ve=()=>O==null?void 0:O("right",""),Te=(f,v,G)=>{const K=ue(f==="left"?k:z),X=K.indexOf(v);X>-1&&K.splice(X,1),G&&K.push(v),ne(f,K),e.selectedKeys||Z(f,K)},Ue=(f,v)=>{Te("left",f,v)},We=(f,v)=>{Te("right",f,v)},Ge=f=>{Z("right",[]),c==null||c(l.filter(v=>!f.includes(v)),"left",ue(f))},Ae=f=>typeof u=="function"?u({direction:f}):u||{},Xe=a.useContext(yt),{hasFeedback:_e,status:Ye}=Xe,Je=f=>Object.assign(Object.assign(Object.assign({},f),{notFoundContent:(W==null?void 0:W("Transfer"))||M.createElement(bt,{componentName:"Transfer"})}),S),Ze=xt(Ye,R),ke=!w&&E,Qe=z.length>0,et=k.length>0,tt=oe(N,{[`${N}-disabled`]:b,[`${N}-customize-list`]:!!w,[`${N}-rtl`]:Y==="rtl"},vt(N,Ze,_e),L==null?void 0:L.className,F,_,Ce),[st]=qe("Transfer",Ke.Transfer),Oe=Je(st),[nt,at]=ae(Oe);return fe(M.createElement("div",{className:tt,style:Object.assign(Object.assign({},L==null?void 0:L.style),r)},M.createElement($e,Object.assign({prefixCls:`${N}-list`,titleText:nt,dataSource:re,filterOption:P,style:Ae("left"),checkedKeys:k,handleFilter:H,handleClear:He,onItemSelect:Ue,onItemSelectAll:y,render:B,showSearch:j,renderList:w,footer:x,onScroll:ve,disabled:b,direction:Y==="rtl"?"right":"left",showSelectAll:h,selectAllLabel:o[0],pagination:ke,selectionsIcon:D},Oe)),M.createElement(ze,{className:`${N}-operation`,rightActive:et,rightArrowText:d[0],moveToRight:xe,leftActive:Qe,leftArrowText:d[1],moveToLeft:le,style:s,disabled:b,direction:Y,oneWay:p}),M.createElement($e,Object.assign({prefixCls:`${N}-list`,titleText:at,dataSource:te,filterOption:P,style:Ae("right"),checkedKeys:z,handleFilter:Q,handleClear:Ve,onItemSelect:We,onItemSelectAll:$,onItemRemove:Ge,render:B,showSearch:j,renderList:w,footer:x,onScroll:be,disabled:b,direction:Y==="rtl"?"left":"right",showSelectAll:h,selectAllLabel:o[1],showRemove:p,pagination:ke,selectionsIcon:D},Oe))))};ge.List=$e;ge.Search=Ne;ge.Operation=ze;const as=ge,ds=e=>{const[t,l]=a.useState([]),[n,o]=a.useState([]),[d,r]=a.useState([]),[u,S]=a.useState([]),C=async(p,E="")=>{const{data:R}=await V.custom({url:"",method:"get",meta:{operation:"systemRolePermissionsRecords",variables:{page:{value:p,type:"Int",required:!0},key:{value:E,type:"String",required:!1},roleId:{value:e.role.id,type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:["key","title","description","chosen"]}]}}),A=[];R.results.forEach(F=>{F.chosen&&A.push(F.key)}),l([...R.results]),o(A)},b=async p=>{const{data:E}=await V.custom({url:"",method:"post",meta:{operation:"addRolePermissions",variables:{roleId:{value:parseInt(e.role.id),type:"Int",required:!0},permissions:{value:p,type:"[Int]",required:!0}},fields:["success","message"]}});E.success?T.success(E.message):T.error(E.message)},j=async p=>{const{data:E}=await V.custom({url:"",method:"post",meta:{operation:"removeRolePermissions",variables:{roleId:{value:parseInt(e.role.id),type:"Int",required:!0},permissions:{value:p,type:"[Int]",required:!0}},fields:["success","message"]}});E.success?T.success(E.message):T.error(E.message)},s=p=>{o(p),u.length>0&&b(u),d.length>0&&j(d)},h=(p,E)=>{S(p),r(E)};return a.useEffect(()=>{C(1)},[e.randKey,e.role]),i.jsx(i.Fragment,{children:i.jsx(as,{titles:["Not Assigned Permissions","Assigned Permissions"],dataSource:t,showSearch:!0,listStyle:{width:"100vw",height:"65vh"},operations:["Add","Remove"],targetKeys:n,onChange:s,onSelectChange:h,onSearch:(p,E)=>{},render:p=>p.title})})},{TextArea:ls}=he,is=e=>{const[t,l]=a.useState(e.programme.isActive);return a.useEffect(()=>{e.form.setFieldsValue({name:e.programme.name,description:e.programme.description,isActive:e.programme.isActive})},[e.form,e.programme]),i.jsx(i.Fragment,{children:i.jsxs(U,{layout:"vertical",form:e.form,onFinish:n=>{n.isActive=t,n.id=parseInt(e.programme.id),e.onFinish(n)},requiredMark:!1,children:[i.jsx(U.Item,{name:"name",label:"Name",rules:[{required:!0,type:"string",message:"Please input Name"}],children:i.jsx(he,{size:"large",placeholder:"Enter Name ..."})}),i.jsx(U.Item,{name:"description",label:"Description",rules:[{required:!1,type:"string",message:"Please input Description"}],children:i.jsx(ls,{rows:4})}),i.jsx(U.Item,{name:"isActive",children:i.jsx(Ee,{checked:t,onChange:()=>l(!t),children:"Active"})}),i.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:i.jsx(J,{type:"primary",size:"large",htmlType:"submit",children:"Save"})})]})})},us=e=>{const[t,l]=a.useState(),[n,o]=a.useState([]),[d,r]=a.useState(0),[u,S]=a.useState(20),[C,b]=a.useState(""),[j,s]=a.useState(!0);Ot();const[h]=U.useForm(),[p]=U.useForm(),R=!jt.useBreakpoint().lg,[A,F]=a.useState(!1),_=m=>{l(m),F(!0)},D=async m=>{const{data:c}=await V.custom({url:"",method:"post",meta:{operation:"updateProgramme",variables:{id:{value:m.id,type:"Int",required:!0},name:{value:m.name,type:"String",required:!0},description:{value:m.description,type:"String",required:!1},isActive:{value:m.isActive,type:"Boolean",required:!0}},fields:["success","message",{programme:["id","name","description","created","updated","isActive","canDelete","canEdit","canManage"]}]}});c.success?(T.success(c.message),p.resetFields(),F(!1),o(n.map(O=>O.id===c.programme.id?c.programme:O))):T.error(c.message)},P=async()=>{const{data:m}=await V.custom({url:"",method:"post",meta:{operation:"syncSystemProgrammes",variables:{},fields:["success","message"]}});m.success?(T.success(m.message),n.length=0,o([]),I(1)):T.error(m.message)},B=async m=>{const{data:c}=await V.custom({url:"",method:"post",meta:{operation:"deleteProgramme",variables:{id:{value:parseInt(m.toString()),type:"Int",required:!0}},fields:["success","message"]}});c.success?(T.success(c.message),o(n.filter(O=>O.id!==m))):T.error(c.message)},x=()=>{T("Canceled")},w=[{title:"Name",dataIndex:"name",fixed:!0,render:(m,c,O)=>i.jsx("span",{children:i.jsx("a",{children:c.name})})},{title:"Created",dataIndex:"created",render:(m,c,O)=>i.jsx(i.Fragment,{children:i.jsx("span",{children:i.jsx(Et,{date:new Date(c.created)})})})},{title:"Status",dataIndex:"isActive",render:(m,c,O)=>i.jsx("a",{children:c!=null&&c.isActive?i.jsx("span",{style:{color:"green"},children:"Active"}):i.jsx("span",{style:{color:"red"},children:"Inactive"})})},{title:"",dataIndex:"action",render:(m,c,O)=>i.jsxs("div",{style:{display:"flex",justifyContent:"flex-end"},children:[e.control&&i.jsx(Tt,{title:"Are you sure to delete this Programme?",onConfirm:()=>B(c==null?void 0:c.id),onCancel:()=>x,okText:"Yes",cancelText:"No",disabled:!(c!=null&&c.canDelete),overlayStyle:{zIndex:9999},children:i.jsx(J,{icon:i.jsx(At,{}),disabled:!(c!=null&&c.canDelete)})}),e.control&&i.jsx(Pe,{title:"Edit "+(c==null?void 0:c.name)+" Programme",color:"green",children:i.jsx(J,{icon:i.jsx(kt,{}),disabled:!(c!=null&&c.canEdit),onClick:()=>_(c)})})]})}],I=async(m,c="",O=20)=>{const{data:q}=await V.custom({url:"",method:"get",meta:{operation:"systemProgrammes",variables:{page:{value:m,type:"Int",required:!0},key:{value:c,type:"String",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","description","isActive","created","updated","canEdit","canDelete","canManage"]}]}});r(q.total),o([...q.results]),s(!1)};return a.useEffect(()=>{I(1,"",20)},[]),i.jsxs(i.Fragment,{children:[i.jsxs(Le,{style:{marginTop:10},children:[i.jsx(Me,{span:R?24:20,children:i.jsx(U,{layout:"vertical",form:h,onFinish:m=>{b(m.key),n.length=0,I(1,m.key)},children:i.jsx(U.Item,{name:"key",children:i.jsx(he,{size:"large",placeholder:"Search ...",prefix:i.jsx(It,{}),autoComplete:"off",allowClear:!0})})})}),(e==null?void 0:e.control)&&i.jsx(Me,{span:R?24:4,style:{display:"flex",justifyContent:"flex-end"},children:i.jsx(Pe,{title:"Synchronize Default System Programmes",children:i.jsx(J,{icon:i.jsx(Mt,{}),size:"large",onClick:()=>P(),children:"Sync Programmes"})})})]}),i.jsx(wt,{loading:j,columns:w,dataSource:n,pagination:{onChange:(m,c)=>{S(c),I(m,C,c)},total:d,pageSize:u,position:["bottomCenter"],showQuickJumper:!1},scroll:{x:!0}}),i.jsx($t,{title:"Edit "+(t==null?void 0:t.name)+" Informations",width:"40vw",open:A,onClose:m=>F(m),children:i.jsx(is,{form:p,programme:t,onFinish:D})})]})},ms=e=>{const[t,l]=a.useState(!1),[n,o]=a.useState(!1),[d,r]=a.useState(),[u]=U.useForm(),S=async()=>{const{data:s}=await V.custom({url:"",method:"post",meta:{operation:"autoCreateSchoolSettings",variables:{},fields:["success","message"]}}).catch(h=>(T.error("Error occured while Auto Creating School Settings"),{data:null})).then(h=>h);s&&(s.success?(T.success(s.message),C()):T.error(s.message))},C=async()=>{o(!0);const{data:s}=await V.custom({url:"",method:"get",meta:{operation:e.school?"schoolSettings":"operationalSchoolSettings",variables:e.school?{schoolId:{value:parseInt(e.school.id),type:"Int",required:!0}}:{},fields:["teachersCanCreateClasses","teachersCanCreateDrives","teachersCanCreatePublicVirtualClassSessions","dispatchMessagesOnClassVirtualSessionCreation","dispatchMessagesOnFilesUpload","dispatchMessagesOnAssignmentsCreation","dispatchMessagesOnAnnouncementsCreation","dispatchMessagesOnTimetableSessionsCreation","dispatchMessagesOnTimetableSessionCancellation","dispatchMessagesOnTimetableSessionRescheduling","studentsCanCreateClassVirtualSessions","studentsCanCreateDrives","studentsCanCreateClasses","studentsCanUploadFiles","teachersCanUploadFiles"]}}).catch(h=>(T.error("Error occured while get Operational School Settings"),{data:null})).then(h=>h);s?(l(!0),r(s),u.setFieldsValue({teachersCanCreateClasses:s.teachersCanCreateClasses,teachersCanCreateDrives:s.teachersCanCreateDrives,teachersCanCreatePublicVirtualClassSessions:s.teachersCanCreatePublicVirtualClassSessions,dispatchMessagesOnClassVirtualSessionCreation:s.dispatchMessagesOnClassVirtualSessionCreation,dispatchMessagesOnFilesUpload:s.dispatchMessagesOnFilesUpload,dispatchMessagesOnAssignmentsCreation:s.dispatchMessagesOnAssignmentsCreation,dispatchMessagesOnAnnouncementsCreation:s.dispatchMessagesOnAnnouncementsCreation,dispatchMessagesOnTimetableSessionsCreation:s.dispatchMessagesOnTimetableSessionsCreation,dispatchMessagesOnTimetableSessionCancellation:s.dispatchMessagesOnTimetableSessionCancellation,dispatchMessagesOnTimetableSessionRescheduling:s.dispatchMessagesOnTimetableSessionRescheduling,studentsCanCreateClassVirtualSessions:s.studentsCanCreateClassVirtualSessions,studentsCanCreateDrives:s.studentsCanCreateDrives,studentsCanCreateClasses:s.studentsCanCreateClasses,studentsCanUploadFiles:s.studentsCanUploadFiles,teachersCanUploadFiles:s.teachersCanUploadFiles})):l(!1),o(!1)},b=async s=>{const{data:h}=await V.custom({url:"",method:"post",meta:{operation:"updateSchoolSettings",variables:{schoolId:{value:parseInt(e.school.id),type:"Int",required:!0},teachersCanCreateClasses:{value:s.teachersCanCreateClasses,type:"Boolean",required:!1},teachersCanCreateDrives:{value:s.teachersCanCreateDrives,type:"Boolean",required:!1},teachersCanCreatePublicVirtualClassSessions:{value:s.teachersCanCreatePublicVirtualClassSessions,type:"Boolean",required:!1},dispatchMessagesOnClassVirtualSessionCreation:{value:s.dispatchMessagesOnClassVirtualSessionCreation,type:"Boolean",required:!1},dispatchMessagesOnFilesUpload:{value:s.dispatchMessagesOnFilesUpload,type:"Boolean",required:!1},dispatchMessagesOnAssignmentsCreation:{value:s.dispatchMessagesOnAssignmentsCreation,type:"Boolean",required:!1},dispatchMessagesOnAnnouncementsCreation:{value:s.dispatchMessagesOnAnnouncementsCreation,type:"Boolean",required:!1},dispatchMessagesOnTimetableSessionsCreation:{value:s.dispatchMessagesOnTimetableSessionsCreation,type:"Boolean",required:!1},dispatchMessagesOnTimetableSessionCancellation:{value:s.dispatchMessagesOnTimetableSessionCancellation,type:"Boolean",required:!1},dispatchMessagesOnTimetableSessionRescheduling:{value:s.dispatchMessagesOnTimetableSessionRescheduling,type:"Boolean",required:!1},studentsCanCreateClassVirtualSessions:{value:s.studentsCanCreateClassVirtualSessions,type:"Boolean",required:!1},studentsCanCreateDrives:{value:s.studentsCanCreateDrives,type:"Boolean",required:!1},studentsCanCreateClasses:{value:s.studentsCanCreateClasses,type:"Boolean",required:!1}},fields:["success","message"]}}).catch(p=>(T.error("Error occured while updating Operational School Settings"),{data:null})).then(p=>p);h&&(h.success?T.success(h.message):T.error(h.message))},j=async s=>{const{data:h}=await V.custom({url:"",method:"post",meta:{operation:"updateOperationalSchoolSettings",variables:{teachersCanCreateClasses:{value:s.teachersCanCreateClasses,type:"Boolean",required:!1},teachersCanCreateDrives:{value:s.teachersCanCreateDrives,type:"Boolean",required:!1},teachersCanCreatePublicVirtualClassSessions:{value:s.teachersCanCreatePublicVirtualClassSessions,type:"Boolean",required:!1},dispatchMessagesOnClassVirtualSessionCreation:{value:s.dispatchMessagesOnClassVirtualSessionCreation,type:"Boolean",required:!1},dispatchMessagesOnFilesUpload:{value:s.dispatchMessagesOnFilesUpload,type:"Boolean",required:!1},dispatchMessagesOnAssignmentsCreation:{value:s.dispatchMessagesOnAssignmentsCreation,type:"Boolean",required:!1},dispatchMessagesOnAnnouncementsCreation:{value:s.dispatchMessagesOnAnnouncementsCreation,type:"Boolean",required:!1},dispatchMessagesOnTimetableSessionsCreation:{value:s.dispatchMessagesOnTimetableSessionsCreation,type:"Boolean",required:!1},dispatchMessagesOnTimetableSessionCancellation:{value:s.dispatchMessagesOnTimetableSessionCancellation,type:"Boolean",required:!1},dispatchMessagesOnTimetableSessionRescheduling:{value:s.dispatchMessagesOnTimetableSessionRescheduling,type:"Boolean",required:!1},studentsCanCreateClassVirtualSessions:{value:s.studentsCanCreateClassVirtualSessions,type:"Boolean",required:!1},studentsCanCreateDrives:{value:s.studentsCanCreateDrives,type:"Boolean",required:!1},studentsCanCreateClasses:{value:s.studentsCanCreateClasses,type:"Boolean",required:!1},studentsCanUploadFiles:{value:s.studentsCanUploadFiles,type:"Boolean",required:!1},teachersCanUploadFiles:{value:s.teachersCanUploadFiles,type:"Boolean",required:!1}},fields:["success","message"]}}).catch(p=>(T.error("Error occured while updating Operational School Settings"),{data:null})).then(p=>p);h&&(h.success?T.success(h.message):T.error(h.message))};return a.useEffect(()=>{C()},[e.randKey,e.school]),i.jsx(i.Fragment,{children:i.jsx(Rt,{loading:n,active:!0,children:t?i.jsx("div",{style:{marginTop:10,marginLeft:20,maxHeight:e.full?"70vh":"100vh",overflowY:"auto"},children:i.jsx(U,{layout:"horizontal",form:u,onFinish:s=>{e.school?b(s):j(s)},onChange:()=>{u.submit()},children:i.jsx(Le,{style:{display:"flex",justifyContent:"flex-start"},children:i.jsx(Me,{span:e.full?24:12,children:i.jsx(Ft,{children:Object.entries(d??{}).map(([s,h])=>i.jsx(U.Item,{label:s.split(/(?=[A-Z])/).map(p=>p.charAt(0).toUpperCase()+p.slice(1)).join(" "),name:s,initialValue:h,children:i.jsx(Pt,{checked:u.getFieldValue(s),onChange:p=>{u.submit(),r(u.getFieldsValue())}})}))})})})})}):i.jsx(i.Fragment,{children:i.jsx("div",{style:{display:"flex",justifyContent:"center"},children:i.jsx(J,{onClick:()=>S(),children:"Auto Create Settings"})})})})})};export{us as P,ds as R,ms as S,as as T};
