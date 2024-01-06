import{r as o,bF as T,e9 as L,bk as B,eC as ee,cU as re,bJ as te,bK as ne,bj as ae,ds as oe,bI as A,dl as le}from"./index-8ddffded.js";const K=e=>{let{children:t}=e;const{getPrefixCls:a}=o.useContext(T),r=a("breadcrumb");return o.createElement("li",{className:`${r}-separator`,"aria-hidden":"true"},t===""?t:t||"/")};K.__ANT_BREADCRUMB_SEPARATOR=!0;const X=K;var se=globalThis&&globalThis.__rest||function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a};function ie(e,t){if(e.title===void 0||e.title===null)return null;const a=Object.keys(t).join("|");return typeof e.title=="object"?e.title:String(e.title).replace(new RegExp(`:(${a})`,"g"),(r,n)=>t[n]||r)}function U(e,t,a,r){if(a==null)return null;const{className:n,onClick:l}=t,s=se(t,["className","onClick"]),i=Object.assign(Object.assign({},L(s,{data:!0,aria:!0})),{onClick:l});return r!==void 0?o.createElement("a",Object.assign({},i,{className:B(`${e}-link`,n),href:r}),a):o.createElement("span",Object.assign({},i,{className:B(`${e}-link`,n)}),a)}function ce(e,t){return(r,n,l,s,i)=>{if(t)return t(r,n,l,s);const p=ie(r,n);return U(e,r,p,i)}}var R=globalThis&&globalThis.__rest||function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a};const J=e=>{const{prefixCls:t,separator:a="/",children:r,menu:n,overlay:l,dropdownProps:s,href:i}=e,g=(y=>{if(n||l){const O=Object.assign({},s);if(n){const S=n||{},{items:h}=S,c=R(S,["items"]);O.menu=Object.assign(Object.assign({},c),{items:h==null?void 0:h.map((b,u)=>{var{key:C,title:I,label:m,path:x}=b,E=R(b,["key","title","label","path"]);let j=m??I;return x&&(j=o.createElement("a",{href:`${i}${x}`},j)),Object.assign(Object.assign({},E),{key:C??u,label:j})})})}else l&&(O.overlay=l);return o.createElement(ee,Object.assign({placement:"bottom"},O),o.createElement("span",{className:`${t}-overlay-link`},y,o.createElement(re,null)))}return y})(r);return g!=null?o.createElement(o.Fragment,null,o.createElement("li",null,g),a&&o.createElement(X,null,a)):null},W=e=>{const{prefixCls:t,children:a,href:r}=e,n=R(e,["prefixCls","children","href"]),{getPrefixCls:l}=o.useContext(T),s=l("breadcrumb",t);return o.createElement(J,Object.assign({},n,{prefixCls:s}),U(s,n,a,r))};W.__ANT_BREADCRUMB_ITEM=!0;const me=W,ue=e=>{const{componentCls:t,iconCls:a}=e;return{[t]:Object.assign(Object.assign({},ae(e)),{color:e.itemColor,fontSize:e.fontSize,[a]:{fontSize:e.iconFontSize},ol:{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"},a:Object.assign({color:e.linkColor,transition:`color ${e.motionDurationMid}`,padding:`0 ${e.paddingXXS}px`,borderRadius:e.borderRadiusSM,height:e.lineHeight*e.fontSize,display:"inline-block",marginInline:-e.marginXXS,"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover}},oe(e)),"li:last-child":{color:e.lastItemColor},[`${t}-separator`]:{marginInline:e.separatorMargin,color:e.separatorColor},[`${t}-link`]:{[`
          > ${a} + span,
          > ${a} + a
        `]:{marginInlineStart:e.marginXXS}},[`${t}-overlay-link`]:{borderRadius:e.borderRadiusSM,height:e.lineHeight*e.fontSize,display:"inline-block",padding:`0 ${e.paddingXXS}px`,marginInline:-e.marginXXS,[`> ${a}`]:{marginInlineStart:e.marginXXS,fontSize:e.fontSizeIcon},"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover,a:{color:e.linkHoverColor}},a:{"&:hover":{backgroundColor:"transparent"}}},[`&${e.componentCls}-rtl`]:{direction:"rtl"}})}},de=te("Breadcrumb",e=>{const t=ne(e,{});return[ue(t)]},e=>({itemColor:e.colorTextDescription,lastItemColor:e.colorText,iconFontSize:e.fontSize,linkColor:e.colorTextDescription,linkHoverColor:e.colorText,separatorColor:e.colorTextDescription,separatorMargin:e.marginXS}));var F=globalThis&&globalThis.__rest||function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a};function pe(e){const{breadcrumbName:t,children:a}=e,r=F(e,["breadcrumbName","children"]),n=Object.assign({title:t},r);return a&&(n.menu={items:a.map(l=>{var{breadcrumbName:s}=l,i=F(l,["breadcrumbName"]);return Object.assign(Object.assign({},i),{title:s})})}),n}function be(e,t){return o.useMemo(()=>e||(t?t.map(pe):null),[e,t])}var fe=globalThis&&globalThis.__rest||function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a};const ge=(e,t)=>{if(t===void 0)return t;let a=(t||"").replace(/^\//,"");return Object.keys(e).forEach(r=>{a=a.replace(`:${r}`,e[r])}),a},z=e=>{const{prefixCls:t,separator:a="/",style:r,className:n,rootClassName:l,routes:s,items:i,children:p,itemRender:g,params:y={}}=e,O=fe(e,["prefixCls","separator","style","className","rootClassName","routes","items","children","itemRender","params"]),{getPrefixCls:S,direction:h,breadcrumb:c}=o.useContext(T);let b;const u=S("breadcrumb",t),[C,I]=de(u),m=be(i,s),x=ce(u,g);if(m&&m.length>0){const f=[],v=i||s;b=m.map((d,P)=>{const{path:q,key:N,type:G,menu:D,overlay:H,onClick:Q,className:V,separator:Y,dropdownProps:Z}=d,$=ge(y,q);$!==void 0&&f.push($);const M=N??P;if(G==="separator")return o.createElement(X,{key:M},Y);const _={},k=P===m.length-1;D?_.menu=D:H&&(_.overlay=H);let{href:w}=d;return f.length&&$!==void 0&&(w=`#/${f.join("/")}`),o.createElement(J,Object.assign({key:M},_,L(d,{data:!0,aria:!0}),{className:V,dropdownProps:Z,href:w,separator:k?"":a,onClick:Q,prefixCls:u}),x(d,y,v,f,w))})}else if(p){const f=A(p).length;b=A(p).map((v,d)=>{if(!v)return v;const P=d===f-1;return le(v,{separator:P?"":a,key:d})})}const E=B(u,c==null?void 0:c.className,{[`${u}-rtl`]:h==="rtl"},n,l,I),j=Object.assign(Object.assign({},c==null?void 0:c.style),r);return C(o.createElement("nav",Object.assign({className:E,style:j},O),o.createElement("ol",null,b)))};z.Item=me;z.Separator=X;const Oe=z;export{Oe as B};
