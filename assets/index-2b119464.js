import{fx as d,fy as f,fz as b,fA as i,fB as z,fC as T,fD as j,au as h,fE as S,fF as O,fG as m,fH as u,a4 as v}from"./index-3f04361d.js";const k=t=>{const e=t!=null&&t.algorithm?d(t.algorithm):d(i),s=Object.assign(Object.assign({},f),t==null?void 0:t.token);return b(s,{override:t==null?void 0:t.token},e,z)},B=k;function C(t){const{sizeUnit:e,sizeStep:s}=t,o=s-2;return{sizeXXL:e*(o+10),sizeXL:e*(o+6),sizeLG:e*(o+2),sizeMD:e*(o+2),sizeMS:e*(o+1),size:e*o,sizeSM:e*o,sizeXS:e*(o-1),sizeXXS:e*(o-1)}}const y=(t,e)=>{const s=e??i(t),o=s.fontSizeSM,n=s.controlHeight-4;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},s),C(e??t)),T(o)),{controlHeight:n}),j(Object.assign(Object.assign({},s),{controlHeight:n})))},M=y,r=(t,e)=>new h(t).setAlpha(e).toRgbString(),a=(t,e)=>new h(t).lighten(e).toHexString(),x=t=>{const e=S(t,{theme:"dark"});return{1:e[0],2:e[1],3:e[2],4:e[3],5:e[6],6:e[5],7:e[4],8:e[6],9:e[5],10:e[4]}},$=(t,e)=>{const s=t||"#000",o=e||"#fff";return{colorBgBase:s,colorTextBase:o,colorText:r(o,.85),colorTextSecondary:r(o,.65),colorTextTertiary:r(o,.45),colorTextQuaternary:r(o,.25),colorFill:r(o,.18),colorFillSecondary:r(o,.12),colorFillTertiary:r(o,.08),colorFillQuaternary:r(o,.04),colorBgElevated:a(s,12),colorBgContainer:a(s,8),colorBgLayout:a(s,0),colorBgSpotlight:a(s,26),colorBgBlur:r(o,.04),colorBorder:a(s,26),colorBorderSecondary:a(s,19)}},A=(t,e)=>{const s=Object.keys(O).map(n=>{const l=S(t[n],{theme:"dark"});return new Array(10).fill(1).reduce((g,p,c)=>(g[`${n}-${c+1}`]=l[c],g[`${n}${c+1}`]=l[c],g),{})}).reduce((n,l)=>(n=Object.assign(Object.assign({},n),l),n),{}),o=e??i(t);return Object.assign(Object.assign(Object.assign({},o),s),m(t,{generateColorPalettes:x,generateNeutralColorPalettes:$}))},F=A;function X(){const[t,e,s]=v();return{theme:t,token:e,hashId:s}}const H={defaultConfig:u,defaultSeed:u.token,useToken:X,defaultAlgorithm:i,darkAlgorithm:F,compactAlgorithm:M,getDesignToken:B};export{H as t};
