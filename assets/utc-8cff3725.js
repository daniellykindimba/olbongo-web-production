import{gl as x,g1 as M}from"./index-38408b6c.js";var m={exports:{}};(function(d,H){(function(f,n){d.exports=n()})(x,function(){var f="minute",n=/[+-]\d\d(?::?\d\d)?/g,D=/([+-]|\d\d)/g;return function(y,l,r){var i=l.prototype;r.utc=function(t){var s={date:t,utc:!0,args:arguments};return new l(s)},i.utc=function(t){var s=r(this.toDate(),{locale:this.$L,utc:!0});return t?s.add(this.utcOffset(),f):s},i.local=function(){return r(this.toDate(),{locale:this.$L,utc:!1})};var p=i.parse;i.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),p.call(this,t)};var T=i.init;i.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else T.call(this)};var O=i.utcOffset;i.utcOffset=function(t,s){var u=this.$utils().u;if(u(t))return this.$u?0:u(this.$offset)?O.call(this):this.$offset;if(typeof t=="string"&&(t=function(a){a===void 0&&(a="");var g=a.match(n);if(!g)return null;var c=(""+g[0]).match(D)||["-",0,0],U=c[0],h=60*+c[1]+ +c[2];return h===0?0:U==="+"?h:-h}(t),t===null))return this;var o=Math.abs(t)<=16?60*t:t,e=this;if(s)return e.$offset=o,e.$u=t===0,e;if(t!==0){var v=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(e=this.local().add(o+v,f)).$offset=o,e.$x.$localOffset=v}else e=this.utc();return e};var C=i.format;i.format=function(t){var s=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return C.call(this,s)},i.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*t},i.isUTC=function(){return!!this.$u},i.toISOString=function(){return this.toDate().toISOString()},i.toString=function(){return this.toDate().toUTCString()};var S=i.toDate;i.toDate=function(t){return t==="s"&&this.$offset?r(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():S.call(this)};var $=i.diff;i.diff=function(t,s,u){if(t&&this.$u===t.$u)return $.call(this,t,s,u);var o=this.local(),e=r(t).local();return $.call(o,e,s,u)}}})})(m);var Y=m.exports;const j=M(Y);export{j as u};
