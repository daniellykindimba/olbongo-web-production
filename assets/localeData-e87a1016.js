import{hq as v,cJ as $}from"./index-ac5228cb.js";var h={exports:{}};(function(k,F){(function(w,u){k.exports=u()})(v,function(){return function(w,u,r){var y=u.prototype,f=function(n){return n&&(n.indexOf?n:n.s)},e=function(n,t,i,l,s){var a=n.name?n:n.$locale(),p=f(a[t]),S=f(a[i]),c=p||S.map(function(m){return m.slice(0,l)});if(!s)return c;var D=a.weekStart;return c.map(function(m,x){return c[(x+(D||0))%7]})},o=function(){return r.Ls[r.locale()]},d=function(n,t){return n.formats[t]||function(i){return i.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(l,s,a){return s||a.slice(1)})}(n.formats[t.toUpperCase()])},M=function(){var n=this;return{months:function(t){return t?t.format("MMMM"):e(n,"months")},monthsShort:function(t){return t?t.format("MMM"):e(n,"monthsShort","months",3)},firstDayOfWeek:function(){return n.$locale().weekStart||0},weekdays:function(t){return t?t.format("dddd"):e(n,"weekdays")},weekdaysMin:function(t){return t?t.format("dd"):e(n,"weekdaysMin","weekdays",2)},weekdaysShort:function(t){return t?t.format("ddd"):e(n,"weekdaysShort","weekdays",3)},longDateFormat:function(t){return d(n.$locale(),t)},meridiem:this.$locale().meridiem,ordinal:this.$locale().ordinal}};y.localeData=function(){return M.bind(this)()},r.localeData=function(){var n=o();return{firstDayOfWeek:function(){return n.weekStart||0},weekdays:function(){return r.weekdays()},weekdaysShort:function(){return r.weekdaysShort()},weekdaysMin:function(){return r.weekdaysMin()},months:function(){return r.months()},monthsShort:function(){return r.monthsShort()},longDateFormat:function(t){return d(n,t)},meridiem:n.meridiem,ordinal:n.ordinal}},r.months=function(){return e(o(),"months")},r.monthsShort=function(){return e(o(),"monthsShort","months",3)},r.weekdays=function(n){return e(o(),"weekdays",null,null,n)},r.weekdaysShort=function(n){return e(o(),"weekdaysShort","weekdays",3,n)},r.weekdaysMin=function(n){return e(o(),"weekdaysMin","weekdays",2,n)}}})})(h);var g=h.exports;const b=$(g);export{g as a,b as l};
