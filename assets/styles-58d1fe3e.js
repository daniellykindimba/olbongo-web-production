import{p as L,q as k,K as M,s as B,r,t as A,u as j,v as K,w as U,x as W,y as X,L as Y,z as q,D as J,H as Q,J as V,N as D}from"./index-d9f4923f.js";import{N as Z,u as ee}from"./useNotification-a43f2219.js";const ne=n=>{const{componentCls:e,iconCls:s,boxShadow:t,colorText:o,colorSuccess:i,colorError:p,colorWarning:f,colorInfo:a,fontSizeLG:l,motionEaseInOutCirc:c,motionDurationSlow:d,marginXS:g,paddingXS:u,borderRadiusLG:v,zIndexPopup:y,contentPadding:C,contentBg:O}=n,h=`${e}-notice`,P=new M("MessageMoveIn",{"0%":{padding:0,transform:"translateY(-100%)",opacity:0},"100%":{padding:u,transform:"translateY(0)",opacity:1}}),b=new M("MessageMoveOut",{"0%":{maxHeight:n.height,padding:u,opacity:1},"100%":{maxHeight:0,padding:0,opacity:0}}),w={padding:u,textAlign:"center",[`${e}-custom-content > ${s}`]:{verticalAlign:"text-bottom",marginInlineEnd:g,fontSize:l},[`${h}-content`]:{display:"inline-block",padding:C,background:O,borderRadius:v,boxShadow:t,pointerEvents:"all"},[`${e}-success > ${s}`]:{color:i},[`${e}-error > ${s}`]:{color:p},[`${e}-warning > ${s}`]:{color:f},[`${e}-info > ${s},
      ${e}-loading > ${s}`]:{color:a}};return[{[e]:Object.assign(Object.assign({},B(n)),{color:o,position:"fixed",top:g,width:"100%",pointerEvents:"none",zIndex:y,[`${e}-move-up`]:{animationFillMode:"forwards"},[`
        ${e}-move-up-appear,
        ${e}-move-up-enter
      `]:{animationName:P,animationDuration:d,animationPlayState:"paused",animationTimingFunction:c},[`
        ${e}-move-up-appear${e}-move-up-appear-active,
        ${e}-move-up-enter${e}-move-up-enter-active
      `]:{animationPlayState:"running"},[`${e}-move-up-leave`]:{animationName:b,animationDuration:d,animationPlayState:"paused",animationTimingFunction:c},[`${e}-move-up-leave${e}-move-up-leave-active`]:{animationPlayState:"running"},"&-rtl":{direction:"rtl",span:{direction:"rtl"}}})},{[e]:{[h]:Object.assign({},w)}},{[`${e}-notice-pure-panel`]:Object.assign(Object.assign({},w),{padding:0,textAlign:"start"})}]},H=L("Message",n=>{const e=k(n,{height:150});return[ne(e)]},n=>({zIndexPopup:n.zIndexPopupBase+10,contentBg:n.colorBgElevated,contentPadding:`${(n.controlHeightLG-n.fontSize*n.lineHeight)/2}px ${n.paddingSM}px`}),{clientOnly:!0});var te=globalThis&&globalThis.__rest||function(n,e){var s={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(s[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(n);o<t.length;o++)e.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(n,t[o])&&(s[t[o]]=n[t[o]]);return s};const oe={info:r.createElement(K,null),success:r.createElement(U,null),error:r.createElement(W,null),warning:r.createElement(X,null),loading:r.createElement(Y,null)},R=n=>{let{prefixCls:e,type:s,icon:t,children:o}=n;return r.createElement("div",{className:j(`${e}-custom-content`,`${e}-${s}`)},t||oe[s],r.createElement("span",null,o))},se=n=>{const{prefixCls:e,className:s,type:t,icon:o,content:i}=n,p=te(n,["prefixCls","className","type","icon","content"]),{getPrefixCls:f}=r.useContext(A),a=e||f("message"),[,l]=H(a);return r.createElement(Z,Object.assign({},p,{prefixCls:a,className:j(s,l,`${a}-notice-pure-panel`),eventKey:"pure",duration:null,content:r.createElement(R,{prefixCls:a,type:t,icon:o},i)}))},re=se;function ae(n,e){return{motionName:e??`${n}-move-up`}}function N(n){let e;const s=new Promise(o=>{e=n(()=>{o(!0)})}),t=()=>{e==null||e()};return t.then=(o,i)=>s.then(o,i),t.promise=s,t}var le=globalThis&&globalThis.__rest||function(n,e){var s={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(s[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(n);o<t.length;o++)e.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(n,t[o])&&(s[t[o]]=n[t[o]]);return s};const ie=8,ce=3,ue=r.forwardRef((n,e)=>{const{top:s,prefixCls:t,getContainer:o,maxCount:i,duration:p=ce,rtl:f,transitionName:a,onAllRemoved:l}=n,{getPrefixCls:c,getPopupContainer:d,message:g}=r.useContext(A),u=t||c("message"),[,v]=H(u),y=()=>({left:"50%",transform:"translateX(-50%)",top:s??ie}),C=()=>j(v,{[`${u}-rtl`]:f}),O=()=>ae(u,a),h=r.createElement("span",{className:`${u}-close-x`},r.createElement(q,{className:`${u}-close-icon`})),[P,b]=ee({prefixCls:u,style:y,className:C,motion:O,closable:!1,closeIcon:h,duration:p,getContainer:()=>(o==null?void 0:o())||(d==null?void 0:d())||document.body,maxCount:i,onAllRemoved:l});return r.useImperativeHandle(e,()=>Object.assign(Object.assign({},P),{prefixCls:u,hashId:v,message:g})),b});let T=0;function z(n){const e=r.useRef(null);return[r.useMemo(()=>{const t=a=>{var l;(l=e.current)===null||l===void 0||l.close(a)},o=a=>{if(!e.current){const I=()=>{};return I.then=()=>{},I}const{open:l,prefixCls:c,hashId:d,message:g}=e.current,u=`${c}-notice`,{content:v,icon:y,type:C,key:O,className:h,style:P,onClose:b}=a,w=le(a,["content","icon","type","key","className","style","onClose"]);let $=O;return $==null&&(T+=1,$=`antd-message-${T}`),N(I=>(l(Object.assign(Object.assign({},w),{key:$,content:r.createElement(R,{prefixCls:c,type:C,icon:y},v),placement:"top",className:j(C&&`${u}-${C}`,d,h,g==null?void 0:g.className),style:Object.assign(Object.assign({},g==null?void 0:g.style),P),onClose:()=>{b==null||b(),I()}})),()=>{t($)}))},p={open:o,destroy:a=>{var l;a!==void 0?t(a):(l=e.current)===null||l===void 0||l.destroy()}};return["info","success","warning","error","loading"].forEach(a=>{const l=(c,d,g)=>{let u;c&&typeof c=="object"&&"content"in c?u=c:u={content:c};let v,y;typeof d=="function"?y=d:(v=d,y=g);const C=Object.assign(Object.assign({onClose:y,duration:v},u),{type:a});return o(C)};p[a]=l}),p},[]),r.createElement(ue,Object.assign({key:"message-holder"},n,{ref:e}))]}function pe(n){return z(n)}let m=null,x=n=>n(),E=[],S={};function _(){const{prefixCls:n,getContainer:e,duration:s,rtl:t,maxCount:o,top:i}=S,p=n??D().getPrefixCls("message"),f=(e==null?void 0:e())||document.body;return{prefixCls:p,getContainer:()=>f,duration:s,rtl:t,maxCount:o,top:i}}const de=r.forwardRef((n,e)=>{const[s,t]=r.useState(_),[o,i]=z(s),p=D(),f=p.getRootPrefixCls(),a=p.getIconPrefixCls(),l=p.getTheme(),c=()=>{t(_)};return r.useEffect(c,[]),r.useImperativeHandle(e,()=>{const d=Object.assign({},o);return Object.keys(d).forEach(g=>{d[g]=function(){return c(),o[g].apply(o,arguments)}}),{instance:d,sync:c}}),r.createElement(V,{prefixCls:f,iconPrefixCls:a,theme:l},i)});function F(){if(!m){const n=document.createDocumentFragment(),e={fragment:n};m=e,x(()=>{J(r.createElement(de,{ref:s=>{const{instance:t,sync:o}=s||{};Promise.resolve().then(()=>{!e.instance&&t&&(e.instance=t,e.sync=o,F())})}}),n)});return}m.instance&&(E.forEach(n=>{const{type:e,skipped:s}=n;if(!s)switch(e){case"open":{x(()=>{const t=m.instance.open(Object.assign(Object.assign({},S),n.config));t==null||t.then(n.resolve),n.setCloseFn(t)});break}case"destroy":x(()=>{m==null||m.instance.destroy(n.key)});break;default:x(()=>{var t;const o=(t=m.instance)[e].apply(t,Q(n.args));o==null||o.then(n.resolve),n.setCloseFn(o)})}}),E=[])}function ge(n){S=Object.assign(Object.assign({},S),n),x(()=>{var e;(e=m==null?void 0:m.sync)===null||e===void 0||e.call(m)})}function me(n){const e=N(s=>{let t;const o={type:"open",config:n,resolve:s,setCloseFn:i=>{t=i}};return E.push(o),()=>{t?x(()=>{t()}):o.skipped=!0}});return F(),e}function fe(n,e){const s=N(t=>{let o;const i={type:n,args:e,resolve:t,setCloseFn:p=>{o=p}};return E.push(i),()=>{o?x(()=>{o()}):i.skipped=!0}});return F(),s}function ve(n){E.push({type:"destroy",key:n}),F()}const ye=["success","info","warning","error","loading"],Ce={open:me,destroy:ve,config:ge,useMessage:pe,_InternalPanelDoNotUseOrYouWillBeFired:re},G=Ce;ye.forEach(n=>{G[n]=function(){for(var e=arguments.length,s=new Array(e),t=0;t<e;t++)s[t]=arguments[t];return fe(n,s)}});const he=G,Oe={textAlign:"center",fontSize:"24px",marginBottom:"2px",overflowWrap:"break-word",hyphens:"manual",textOverflow:"unset",whiteSpace:"pre-wrap",color:"#000000"};export{he as m,Oe as t};
