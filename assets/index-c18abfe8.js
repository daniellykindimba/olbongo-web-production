import{j as P,b0 as Ke,b1 as qe,r as T,w as p,b2 as W,b3 as Ye,b4 as G,b5 as z,b6 as ae,b7 as Qe,b8 as Je,b9 as Xe,ba as le,bb as C,bc as y,bd as Q,be as J,bf as K,bg as Ze,bh as _e,bi as Ne,bj as et,bk as tt}from"./index-c2aacc94.js";import{bE as Kt,bt as qt,by as Yt,bw as Qt,bu as Jt,bo as Xt,bz as Zt,bA as Nt,bs as er,bD as tr,bq as rr,br as or,bl as nr,bn as ar,bx as sr,bv as ir,bp as lr,bm as cr,bD as dr,bB as mr,bC as hr}from"./index-c2aacc94.js";let ce;typeof document=="object"&&(ce=qe({key:"css",prepend:!0}));function Ft(r){const{injectFirst:o,children:n}=r;return o&&ce?P.jsx(Ke,{value:ce,children:n}):n}const de="mode",me="color-scheme",Fe="data-color-scheme";function rt(r){const{defaultMode:o="light",defaultLightColorScheme:n="light",defaultDarkColorScheme:c="dark",modeStorageKey:d=de,colorSchemeStorageKey:h=me,attribute:g=Fe,colorSchemeNode:s="document.documentElement"}=r||{};return P.jsx("script",{dangerouslySetInnerHTML:{__html:`(function() { try {
        var mode = localStorage.getItem('${d}') || '${o}';
        var cssColorScheme = mode;
        var colorScheme = '';
        if (mode === 'system') {
          // handle system mode
          var mql = window.matchMedia('(prefers-color-scheme: dark)');
          if (mql.matches) {
            cssColorScheme = 'dark';
            colorScheme = localStorage.getItem('${h}-dark') || '${c}';
          } else {
            cssColorScheme = 'light';
            colorScheme = localStorage.getItem('${h}-light') || '${n}';
          }
        }
        if (mode === 'light') {
          colorScheme = localStorage.getItem('${h}-light') || '${n}';
        }
        if (mode === 'dark') {
          colorScheme = localStorage.getItem('${h}-dark') || '${c}';
        }
        if (colorScheme) {
          ${s}.setAttribute('${g}', colorScheme);
        }
      } catch (e) {} })();`}},"mui-color-scheme-init")}function Ae(r){if(typeof window<"u"&&r==="system")return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function Ve(r,o){if(r.mode==="light"||r.mode==="system"&&r.systemMode==="light")return o("light");if(r.mode==="dark"||r.mode==="system"&&r.systemMode==="dark")return o("dark")}function ot(r){return Ve(r,o=>{if(o==="light")return r.lightColorScheme;if(o==="dark")return r.darkColorScheme})}function se(r,o){if(typeof window>"u")return;let n;try{n=localStorage.getItem(r)||void 0,n||localStorage.setItem(r,o)}catch{}return n||o}function nt(r){const{defaultMode:o="light",defaultLightColorScheme:n,defaultDarkColorScheme:c,supportedColorSchemes:d=[],modeStorageKey:h=de,colorSchemeStorageKey:g=me,storageWindow:s=typeof window>"u"?void 0:window}=r,a=d.join(","),[b,S]=T.useState(()=>{const i=se(h,o),m=se(`${g}-light`,n),f=se(`${g}-dark`,c);return{mode:i,systemMode:Ae(i),lightColorScheme:m,darkColorScheme:f}}),A=ot(b),w=T.useCallback(i=>{S(m=>{if(i===m.mode)return m;const f=i||o;try{localStorage.setItem(h,f)}catch{}return p({},m,{mode:f,systemMode:Ae(f)})})},[h,o]),$=T.useCallback(i=>{i?typeof i=="string"?i&&!a.includes(i)?console.error(`\`${i}\` does not exist in \`theme.colorSchemes\`.`):S(m=>{const f=p({},m);return Ve(m,I=>{try{localStorage.setItem(`${g}-${I}`,i)}catch{}I==="light"&&(f.lightColorScheme=i),I==="dark"&&(f.darkColorScheme=i)}),f}):S(m=>{const f=p({},m),I=i.light===null?n:i.light,F=i.dark===null?c:i.dark;if(I)if(!a.includes(I))console.error(`\`${I}\` does not exist in \`theme.colorSchemes\`.`);else{f.lightColorScheme=I;try{localStorage.setItem(`${g}-light`,I)}catch{}}if(F)if(!a.includes(F))console.error(`\`${F}\` does not exist in \`theme.colorSchemes\`.`);else{f.darkColorScheme=F;try{localStorage.setItem(`${g}-dark`,F)}catch{}}return f}):S(m=>{try{localStorage.setItem(`${g}-light`,n),localStorage.setItem(`${g}-dark`,c)}catch{}return p({},m,{lightColorScheme:n,darkColorScheme:c})})},[a,g,n,c]),x=T.useCallback(i=>{b.mode==="system"&&S(m=>p({},m,{systemMode:i!=null&&i.matches?"dark":"light"}))},[b.mode]),u=T.useRef(x);return u.current=x,T.useEffect(()=>{const i=(...f)=>u.current(...f),m=window.matchMedia("(prefers-color-scheme: dark)");return m.addListener(i),i(m),()=>m.removeListener(i)},[]),T.useEffect(()=>{const i=m=>{const f=m.newValue;typeof m.key=="string"&&m.key.startsWith(g)&&(!f||a.match(f))&&(m.key.endsWith("light")&&$({light:f}),m.key.endsWith("dark")&&$({dark:f})),m.key===h&&(!f||["light","dark","system"].includes(f))&&w(f||o)};if(s)return s.addEventListener("storage",i),()=>s.removeEventListener("storage",i)},[$,w,h,g,a,o,s]),p({},b,{colorScheme:A,setMode:w,setColorScheme:$})}const at=["colorSchemes","components","generateCssVars","cssVarPrefix"],st="*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";function it(r){const{themeId:o,theme:n={},attribute:c=Fe,modeStorageKey:d=de,colorSchemeStorageKey:h=me,defaultMode:g="light",defaultColorScheme:s,disableTransitionOnChange:a=!1,resolveTheme:b,excludeVariablesFromRoot:S}=r;(!n.colorSchemes||typeof s=="string"&&!n.colorSchemes[s]||typeof s=="object"&&!n.colorSchemes[s==null?void 0:s.light]||typeof s=="object"&&!n.colorSchemes[s==null?void 0:s.dark])&&console.error(`MUI: \`${s}\` does not exist in \`theme.colorSchemes\`.`);const A=T.createContext(void 0),w=()=>{const m=T.useContext(A);if(!m)throw new Error(W(19));return m};function $({children:m,theme:f=n,modeStorageKey:I=d,colorSchemeStorageKey:F=h,attribute:B=c,defaultMode:e=g,defaultColorScheme:l=s,disableTransitionOnChange:k=a,storageWindow:v=typeof window>"u"?void 0:window,documentNode:M=typeof document>"u"?void 0:document,colorSchemeNode:U=typeof document>"u"?void 0:document.documentElement,colorSchemeSelector:q=":root",disableNestedContext:De=!1,disableStyleSheetGeneration:Me=!1}){const X=T.useRef(!1),he=Ye(),Z=T.useContext(A),N=!!Z&&!De,ge=f[o],ue=ge||f,{colorSchemes:ee={},components:Le={},generateCssVars:fe=()=>({vars:{},css:{}}),cssVarPrefix:te}=ue,je=G(ue,at),re=Object.keys(ee),pe=typeof l=="string"?l:l.light,Se=typeof l=="string"?l:l.dark,{mode:Pe,setMode:Ce,systemMode:ye,lightColorScheme:be,darkColorScheme:ke,colorScheme:Oe,setColorScheme:we}=nt({supportedColorSchemes:re,defaultLightColorScheme:pe,defaultDarkColorScheme:Se,modeStorageKey:I,colorSchemeStorageKey:F,defaultMode:e,storageWindow:v});let H=Pe,L=Oe;N&&(H=Z.mode,L=Z.colorScheme);const Re=(()=>H||(e==="system"?g:e))(),Ge=(()=>L||(Re==="dark"?Se:pe))(),{css:ze,vars:xe}=fe(),_=p({},je,{components:Le,colorSchemes:ee,cssVarPrefix:te,vars:xe,getColorSchemeSelector:E=>`[${B}="${E}"] &`}),oe={},$e={};Object.entries(ee).forEach(([E,j])=>{const{css:Y,vars:Ue}=fe(E);_.vars=z(_.vars,Ue),E===Ge&&(Object.keys(j).forEach(V=>{j[V]&&typeof j[V]=="object"?_[V]=p({},_[V],j[V]):_[V]=j[V]}),_.palette&&(_.palette.colorScheme=E));const He=(()=>typeof l=="string"?l:e==="dark"?l.dark:l.light)();if(E===He){if(S){const V={};S(te).forEach(ne=>{V[ne]=Y[ne],delete Y[ne]}),oe[`[${B}="${E}"]`]=V}oe[`${q}, [${B}="${E}"]`]=Y}else $e[`${q===":root"?"":q}[${B}="${E}"]`]=Y}),_.vars=z(_.vars,xe),T.useEffect(()=>{L&&U&&U.setAttribute(B,L)},[L,B,U]),T.useEffect(()=>{let E;if(k&&X.current&&M){const j=M.createElement("style");j.appendChild(M.createTextNode(st)),M.head.appendChild(j),window.getComputedStyle(M.body),E=setTimeout(()=>{M.head.removeChild(j)},1)}return()=>{clearTimeout(E)}},[L,k,M]),T.useEffect(()=>(X.current=!0,()=>{X.current=!1}),[]);const We=T.useMemo(()=>({mode:H,systemMode:ye,setMode:Ce,lightColorScheme:be,darkColorScheme:ke,colorScheme:L,setColorScheme:we,allColorSchemes:re}),[re,L,ke,be,H,we,Ce,ye]);let ve=!0;(Me||N&&(he==null?void 0:he.cssVarPrefix)===te)&&(ve=!1);const Te=P.jsxs(T.Fragment,{children:[ve&&P.jsxs(T.Fragment,{children:[P.jsx(ae,{styles:{[q]:ze}}),P.jsx(ae,{styles:oe}),P.jsx(ae,{styles:$e})]}),P.jsx(Qe,{themeId:ge?o:void 0,theme:b?b(_):_,children:m})]});return N?Te:P.jsx(A.Provider,{value:We,children:Te})}const x=typeof s=="string"?s:s.light,u=typeof s=="string"?s:s.dark;return{CssVarsProvider:$,useColorScheme:w,getInitColorSchemeScript:m=>rt(p({attribute:c,colorSchemeStorageKey:h,defaultMode:g,defaultLightColorScheme:x,defaultDarkColorScheme:u,modeStorageKey:d},m))}}function lt(r=""){function o(...c){if(!c.length)return"";const d=c[0];return typeof d=="string"&&!d.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)?`, var(--${r?`${r}-`:""}${d}${o(...c.slice(1))})`:`, ${d}`}return(c,...d)=>`var(--${r?`${r}-`:""}${c}${o(...d)})`}const Be=(r,o,n,c=[])=>{let d=r;o.forEach((h,g)=>{g===o.length-1?Array.isArray(d)?d[Number(h)]=n:d&&typeof d=="object"&&(d[h]=n):d&&typeof d=="object"&&(d[h]||(d[h]=c.includes(h)?[]:{}),d=d[h])})},ct=(r,o,n)=>{function c(d,h=[],g=[]){Object.entries(d).forEach(([s,a])=>{(!n||n&&!n([...h,s]))&&a!=null&&(typeof a=="object"&&Object.keys(a).length>0?c(a,[...h,s],Array.isArray(a)?[...g,s]:g):o([...h,s],a,g))})}c(r)},dt=(r,o)=>typeof o=="number"?["lineHeight","fontWeight","opacity","zIndex"].some(c=>r.includes(c))||r[r.length-1].toLowerCase().indexOf("opacity")>=0?o:`${o}px`:o;function ie(r,o){const{prefix:n,shouldSkipGeneratingVar:c}=o||{},d={},h={},g={};return ct(r,(s,a,b)=>{if((typeof a=="string"||typeof a=="number")&&(!c||!c(s,a))){const S=`--${n?`${n}-`:""}${s.join("-")}`;Object.assign(d,{[S]:dt(s,a)}),Be(h,s,`var(${S})`,b),Be(g,s,`var(${S}, ${a})`,b)}},s=>s[0]==="vars"),{css:d,vars:h,varsWithDefaults:g}}const mt=["colorSchemes","components"],ht=["light"];function gt(r,o){const{colorSchemes:n={}}=r,c=G(r,mt),{vars:d,css:h,varsWithDefaults:g}=ie(c,o);let s=g;const a={},{light:b}=n,S=G(n,ht);if(Object.entries(S||{}).forEach(([w,$])=>{const{vars:x,css:u,varsWithDefaults:i}=ie($,o);s=z(s,i),a[w]={css:u,vars:x}}),b){const{css:w,vars:$,varsWithDefaults:x}=ie(b,o);s=z(s,x),a.light={css:w,vars:$}}return{vars:s,generateCssVars:w=>w?{css:p({},a[w].css),vars:a[w].vars}:{css:p({},h),vars:d}}}const ut=["defaultProps","mixins","overrides","palette","props","styleOverrides"],ft=["type","mode"];function Vt(r){const{defaultProps:o={},mixins:n={},overrides:c={},palette:d={},props:h={},styleOverrides:g={}}=r,s=G(r,ut),a=p({},s,{components:{}});Object.keys(o).forEach(u=>{const i=a.components[u]||{};i.defaultProps=o[u],a.components[u]=i}),Object.keys(h).forEach(u=>{const i=a.components[u]||{};i.defaultProps=h[u],a.components[u]=i}),Object.keys(g).forEach(u=>{const i=a.components[u]||{};i.styleOverrides=g[u],a.components[u]=i}),Object.keys(c).forEach(u=>{const i=a.components[u]||{};i.styleOverrides=c[u],a.components[u]=i}),a.spacing=Je(r.spacing);const b=Xe(r.breakpoints||{}),S=a.spacing;a.mixins=p({gutters:(u={})=>p({paddingLeft:S(2),paddingRight:S(2)},u,{[b.up("sm")]:p({paddingLeft:S(3),paddingRight:S(3)},u[b.up("sm")])})},n);const{type:A,mode:w}=d,$=G(d,ft),x=w||A||"light";return a.palette=p({text:{hint:x==="dark"?"rgba(255, 255, 255, 0.5)":"rgba(0, 0, 0, 0.38)"},mode:x,type:x},$),a}function Dt(r,...o){return le(z({unstable_strictMode:!0},r),...o)}let Ie=!1;function Mt(r){return Ie||(console.warn(["MUI: createStyles from @mui/material/styles is deprecated.","Please use @mui/styles/createStyles"].join(`
`)),Ie=!0),r}function Ee(r){return String(parseFloat(r)).length===String(r).length}function pt(r){return String(r).match(/[\d.\-+]*\s*(.*)/)[1]||""}function R(r){return parseFloat(r)}function St(r){return(o,n)=>{const c=pt(o);if(c===n)return o;let d=R(o);c!=="px"&&(c==="em"||c==="rem")&&(d=R(o)*R(r));let h=d;if(n!=="px")if(n==="em")h=d/R(r);else if(n==="rem")h=d/R(r);else return o;return parseFloat(h.toFixed(5))+n}}function Ct({size:r,grid:o}){const n=r-r%o,c=n+o;return r-n<c-r?n:c}function yt({lineHeight:r,pixels:o,htmlFontSize:n}){return o/(r*n)}function bt({cssProperty:r,min:o,max:n,unit:c="rem",breakpoints:d=[600,900,1200],transform:h=null}){const g={[r]:`${o}${c}`},s=(n-o)/d[d.length-1];return d.forEach(a=>{let b=o+s*a;h!==null&&(b=h(b)),g[`@media (min-width:${a}px)`]={[r]:`${Math.round(b*1e4)/1e4}${c}`}}),g}function Lt(r,o={}){const{breakpoints:n=["sm","md","lg"],disableAlign:c=!1,factor:d=2,variants:h=["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline"]}=o,g=p({},r);g.typography=p({},g.typography);const s=g.typography,a=St(s.htmlFontSize),b=n.map(S=>g.breakpoints.values[S]);return h.forEach(S=>{const A=s[S],w=parseFloat(a(A.fontSize,"rem"));if(w<=1)return;const $=w,x=1+($-1)/d;let{lineHeight:u}=A;if(!Ee(u)&&!c)throw new Error(W(6));Ee(u)||(u=parseFloat(a(u,"rem"))/parseFloat(w));let i=null;c||(i=m=>Ct({size:m,grid:yt({pixels:4,lineHeight:u,htmlFontSize:s.htmlFontSize})})),s[S]=p({},A,bt({cssProperty:"fontSize",min:x,max:$,unit:"rem",breakpoints:b,transform:i}))}),g}function jt(){throw new Error(W(14))}function Pt(){throw new Error(W(15))}function Ot(){throw new Error(W(16))}function kt(r){var o;return!!r[0].match(/(cssVarPrefix|typography|mixins|breakpoints|direction|transitions)/)||!!r[0].match(/sxConfig$/)||r[0]==="palette"&&!!((o=r[1])!=null&&o.match(/(mode|contrastThreshold|tonalOffset)/))}const wt=["colorSchemes","cssVarPrefix","shouldSkipGeneratingVar"],xt=["palette"],$t=[...Array(25)].map((r,o)=>{if(o===0)return;const n=Ne(o);return`linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`});function vt(r,o){o.forEach(n=>{r[n]||(r[n]={})})}function t(r,o,n){!r[o]&&n&&(r[o]=n)}function O(r,o){`${o}Channel`in r||(r[`${o}Channel`]=K(r[o],`MUI: Can't create \`palette.${o}Channel\` because \`palette.${o}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${o}Channel\` as a string (in rgb format, e.g. "12 12 12") or undefined if you want to remove the channel token.`))}const D=r=>{try{return r()}catch{}},Tt=(r="mui")=>lt(r);function At(r={},...o){var n,c,d,h,g,s;const{colorSchemes:a={},cssVarPrefix:b="mui",shouldSkipGeneratingVar:S=kt}=r,A=G(r,wt),w=Tt(b),$=le(p({},A,a.light&&{palette:(n=a.light)==null?void 0:n.palette})),{palette:x}=$,u=G($,xt),{palette:i}=le({palette:p({mode:"dark"},(c=a.dark)==null?void 0:c.palette)});let m=p({},u,{cssVarPrefix:b,getCssVar:w,colorSchemes:p({},a,{light:p({},a.light,{palette:x,opacity:p({inputPlaceholder:.42,inputUnderline:.42,switchTrackDisabled:.12,switchTrack:.38},(d=a.light)==null?void 0:d.opacity),overlays:((h=a.light)==null?void 0:h.overlays)||[]}),dark:p({},a.dark,{palette:i,opacity:p({inputPlaceholder:.5,inputUnderline:.7,switchTrackDisabled:.2,switchTrack:.3},(g=a.dark)==null?void 0:g.opacity),overlays:((s=a.dark)==null?void 0:s.overlays)||$t})})});Object.keys(m.colorSchemes).forEach(B=>{const e=m.colorSchemes[B].palette,l=k=>{const v=k.split("-"),M=v[1],U=v[2];return w(k,e[M][U])};if(B==="light"?(t(e.common,"background","#fff"),t(e.common,"onBackground","#000")):(t(e.common,"background","#000"),t(e.common,"onBackground","#fff")),vt(e,["Alert","AppBar","Avatar","Button","Chip","FilledInput","LinearProgress","Skeleton","Slider","SnackbarContent","SpeedDialAction","StepConnector","StepContent","Switch","TableCell","Tooltip"]),B==="light"){t(e.Alert,"errorColor",C(e.error.light,.6)),t(e.Alert,"infoColor",C(e.info.light,.6)),t(e.Alert,"successColor",C(e.success.light,.6)),t(e.Alert,"warningColor",C(e.warning.light,.6)),t(e.Alert,"errorFilledBg",l("palette-error-main")),t(e.Alert,"infoFilledBg",l("palette-info-main")),t(e.Alert,"successFilledBg",l("palette-success-main")),t(e.Alert,"warningFilledBg",l("palette-warning-main")),t(e.Alert,"errorFilledColor",D(()=>x.getContrastText(e.error.main))),t(e.Alert,"infoFilledColor",D(()=>x.getContrastText(e.info.main))),t(e.Alert,"successFilledColor",D(()=>x.getContrastText(e.success.main))),t(e.Alert,"warningFilledColor",D(()=>x.getContrastText(e.warning.main))),t(e.Alert,"errorStandardBg",y(e.error.light,.9)),t(e.Alert,"infoStandardBg",y(e.info.light,.9)),t(e.Alert,"successStandardBg",y(e.success.light,.9)),t(e.Alert,"warningStandardBg",y(e.warning.light,.9)),t(e.Alert,"errorIconColor",l("palette-error-main")),t(e.Alert,"infoIconColor",l("palette-info-main")),t(e.Alert,"successIconColor",l("palette-success-main")),t(e.Alert,"warningIconColor",l("palette-warning-main")),t(e.AppBar,"defaultBg",l("palette-grey-100")),t(e.Avatar,"defaultBg",l("palette-grey-400")),t(e.Button,"inheritContainedBg",l("palette-grey-300")),t(e.Button,"inheritContainedHoverBg",l("palette-grey-A100")),t(e.Chip,"defaultBorder",l("palette-grey-400")),t(e.Chip,"defaultAvatarColor",l("palette-grey-700")),t(e.Chip,"defaultIconColor",l("palette-grey-700")),t(e.FilledInput,"bg","rgba(0, 0, 0, 0.06)"),t(e.FilledInput,"hoverBg","rgba(0, 0, 0, 0.09)"),t(e.FilledInput,"disabledBg","rgba(0, 0, 0, 0.12)"),t(e.LinearProgress,"primaryBg",y(e.primary.main,.62)),t(e.LinearProgress,"secondaryBg",y(e.secondary.main,.62)),t(e.LinearProgress,"errorBg",y(e.error.main,.62)),t(e.LinearProgress,"infoBg",y(e.info.main,.62)),t(e.LinearProgress,"successBg",y(e.success.main,.62)),t(e.LinearProgress,"warningBg",y(e.warning.main,.62)),t(e.Skeleton,"bg",`rgba(${l("palette-text-primaryChannel")} / 0.11)`),t(e.Slider,"primaryTrack",y(e.primary.main,.62)),t(e.Slider,"secondaryTrack",y(e.secondary.main,.62)),t(e.Slider,"errorTrack",y(e.error.main,.62)),t(e.Slider,"infoTrack",y(e.info.main,.62)),t(e.Slider,"successTrack",y(e.success.main,.62)),t(e.Slider,"warningTrack",y(e.warning.main,.62));const k=Q(e.background.default,.8);t(e.SnackbarContent,"bg",k),t(e.SnackbarContent,"color",D(()=>x.getContrastText(k))),t(e.SpeedDialAction,"fabHoverBg",Q(e.background.paper,.15)),t(e.StepConnector,"border",l("palette-grey-400")),t(e.StepContent,"border",l("palette-grey-400")),t(e.Switch,"defaultColor",l("palette-common-white")),t(e.Switch,"defaultDisabledColor",l("palette-grey-100")),t(e.Switch,"primaryDisabledColor",y(e.primary.main,.62)),t(e.Switch,"secondaryDisabledColor",y(e.secondary.main,.62)),t(e.Switch,"errorDisabledColor",y(e.error.main,.62)),t(e.Switch,"infoDisabledColor",y(e.info.main,.62)),t(e.Switch,"successDisabledColor",y(e.success.main,.62)),t(e.Switch,"warningDisabledColor",y(e.warning.main,.62)),t(e.TableCell,"border",y(J(e.divider,1),.88)),t(e.Tooltip,"bg",J(e.grey[700],.92))}else{t(e.Alert,"errorColor",y(e.error.light,.6)),t(e.Alert,"infoColor",y(e.info.light,.6)),t(e.Alert,"successColor",y(e.success.light,.6)),t(e.Alert,"warningColor",y(e.warning.light,.6)),t(e.Alert,"errorFilledBg",l("palette-error-dark")),t(e.Alert,"infoFilledBg",l("palette-info-dark")),t(e.Alert,"successFilledBg",l("palette-success-dark")),t(e.Alert,"warningFilledBg",l("palette-warning-dark")),t(e.Alert,"errorFilledColor",D(()=>i.getContrastText(e.error.dark))),t(e.Alert,"infoFilledColor",D(()=>i.getContrastText(e.info.dark))),t(e.Alert,"successFilledColor",D(()=>i.getContrastText(e.success.dark))),t(e.Alert,"warningFilledColor",D(()=>i.getContrastText(e.warning.dark))),t(e.Alert,"errorStandardBg",C(e.error.light,.9)),t(e.Alert,"infoStandardBg",C(e.info.light,.9)),t(e.Alert,"successStandardBg",C(e.success.light,.9)),t(e.Alert,"warningStandardBg",C(e.warning.light,.9)),t(e.Alert,"errorIconColor",l("palette-error-main")),t(e.Alert,"infoIconColor",l("palette-info-main")),t(e.Alert,"successIconColor",l("palette-success-main")),t(e.Alert,"warningIconColor",l("palette-warning-main")),t(e.AppBar,"defaultBg",l("palette-grey-900")),t(e.AppBar,"darkBg",l("palette-background-paper")),t(e.AppBar,"darkColor",l("palette-text-primary")),t(e.Avatar,"defaultBg",l("palette-grey-600")),t(e.Button,"inheritContainedBg",l("palette-grey-800")),t(e.Button,"inheritContainedHoverBg",l("palette-grey-700")),t(e.Chip,"defaultBorder",l("palette-grey-700")),t(e.Chip,"defaultAvatarColor",l("palette-grey-300")),t(e.Chip,"defaultIconColor",l("palette-grey-300")),t(e.FilledInput,"bg","rgba(255, 255, 255, 0.09)"),t(e.FilledInput,"hoverBg","rgba(255, 255, 255, 0.13)"),t(e.FilledInput,"disabledBg","rgba(255, 255, 255, 0.12)"),t(e.LinearProgress,"primaryBg",C(e.primary.main,.5)),t(e.LinearProgress,"secondaryBg",C(e.secondary.main,.5)),t(e.LinearProgress,"errorBg",C(e.error.main,.5)),t(e.LinearProgress,"infoBg",C(e.info.main,.5)),t(e.LinearProgress,"successBg",C(e.success.main,.5)),t(e.LinearProgress,"warningBg",C(e.warning.main,.5)),t(e.Skeleton,"bg",`rgba(${l("palette-text-primaryChannel")} / 0.13)`),t(e.Slider,"primaryTrack",C(e.primary.main,.5)),t(e.Slider,"secondaryTrack",C(e.secondary.main,.5)),t(e.Slider,"errorTrack",C(e.error.main,.5)),t(e.Slider,"infoTrack",C(e.info.main,.5)),t(e.Slider,"successTrack",C(e.success.main,.5)),t(e.Slider,"warningTrack",C(e.warning.main,.5));const k=Q(e.background.default,.98);t(e.SnackbarContent,"bg",k),t(e.SnackbarContent,"color",D(()=>i.getContrastText(k))),t(e.SpeedDialAction,"fabHoverBg",Q(e.background.paper,.15)),t(e.StepConnector,"border",l("palette-grey-600")),t(e.StepContent,"border",l("palette-grey-600")),t(e.Switch,"defaultColor",l("palette-grey-300")),t(e.Switch,"defaultDisabledColor",l("palette-grey-600")),t(e.Switch,"primaryDisabledColor",C(e.primary.main,.55)),t(e.Switch,"secondaryDisabledColor",C(e.secondary.main,.55)),t(e.Switch,"errorDisabledColor",C(e.error.main,.55)),t(e.Switch,"infoDisabledColor",C(e.info.main,.55)),t(e.Switch,"successDisabledColor",C(e.success.main,.55)),t(e.Switch,"warningDisabledColor",C(e.warning.main,.55)),t(e.TableCell,"border",C(J(e.divider,1),.68)),t(e.Tooltip,"bg",J(e.grey[700],.92))}O(e.background,"default"),O(e.common,"background"),O(e.common,"onBackground"),O(e,"divider"),Object.keys(e).forEach(k=>{const v=e[k];v&&typeof v=="object"&&(v.main&&t(e[k],"mainChannel",K(v.main)),v.light&&t(e[k],"lightChannel",K(v.light)),v.dark&&t(e[k],"darkChannel",K(v.dark)),v.contrastText&&t(e[k],"contrastTextChannel",K(v.contrastText)),k==="text"&&(O(e[k],"primary"),O(e[k],"secondary")),k==="action"&&(v.active&&O(e[k],"active"),v.selected&&O(e[k],"selected")))})}),m=o.reduce((B,e)=>z(B,e),m);const f={prefix:b,shouldSkipGeneratingVar:S},{vars:I,generateCssVars:F}=gt(m,f);return m.vars=I,m.generateCssVars=F,m.shouldSkipGeneratingVar=S,m.unstable_sxConfig=p({},Ze,A==null?void 0:A.unstable_sxConfig),m.unstable_sx=function(e){return _e({sx:e,theme:this})},m}const Bt=r=>[...[...Array(24)].map((o,n)=>`--${r?`${r}-`:""}overlays-${n+1}`),`--${r?`${r}-`:""}palette-AppBar-darkBg`,`--${r?`${r}-`:""}palette-AppBar-darkColor`],It=Bt,Et=At(),{CssVarsProvider:Rt,useColorScheme:Gt,getInitColorSchemeScript:zt}=it({themeId:et,theme:Et,attribute:"data-mui-color-scheme",modeStorageKey:"mui-mode",colorSchemeStorageKey:"mui-color-scheme",defaultColorScheme:{light:"light",dark:"dark"},resolveTheme:r=>{const o=p({},r,{typography:tt(r.palette,r.typography)});return o.unstable_sx=function(c){return _e({sx:c,theme:this})},o},excludeVariablesFromRoot:It});function Wt(){throw new Error(W(20))}export{Rt as Experimental_CssVarsProvider,Ft as StyledEngineProvider,et as THEME_ID,Kt as ThemeProvider,Vt as adaptV4Theme,qt as alpha,Yt as createMuiTheme,Mt as createStyles,le as createTheme,Qt as css,Jt as darken,Xt as decomposeColor,Zt as duration,Nt as easing,er as emphasize,tr as experimentalStyled,At as experimental_extendTheme,Wt as experimental_sx,rr as getContrastRatio,zt as getInitColorSchemeScript,or as getLuminance,Ne as getOverlayAlpha,nr as hexToRgb,ar as hslToRgb,sr as keyframes,ir as lighten,jt as makeStyles,tt as private_createTypography,It as private_excludeVariablesFromRoot,lr as recomposeColor,Lt as responsiveFontSizes,cr as rgbToHex,kt as shouldSkipGeneratingVar,dr as styled,Dt as unstable_createMuiStrictModeTheme,pt as unstable_getUnit,R as unstable_toUnitless,Gt as useColorScheme,mr as useTheme,hr as useThemeProps,Pt as withStyles,Ot as withTheme};
