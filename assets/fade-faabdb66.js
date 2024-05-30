import{ac as i,ad as s}from"./index-7df9ee76.js";const c=new i("antFadeIn",{"0%":{opacity:0},"100%":{opacity:1}}),r=new i("antFadeOut",{"0%":{opacity:1},"100%":{opacity:0}}),u=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const{antCls:o}=t,n=`${o}-fade`,a=e?"&":"";return[s(n,c,r,t.motionDurationMid,e),{[`
        ${a}${n}-enter,
        ${a}${n}-appear
      `]:{opacity:0,animationTimingFunction:"linear"},[`${a}${n}-leave`]:{animationTimingFunction:"linear"}}]};export{u as i};
