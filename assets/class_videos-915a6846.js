var Dt=Object.defineProperty;var Ut=(t,e,r)=>e in t?Dt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var Ae=(t,e,r)=>(Ut(t,typeof e!="symbol"?e+"":e,r),r);import{r as y,aZ as n,al as $t,aP as x,Q as ge,ap as X,b_ as G,b$ as S,d7 as Vt,c5 as kt,ir as Nt,iU as Ht,cF as Ft,hq as oe,cK as zt,c0 as Yt,aT as Ee,aL as le,cZ as Bt,aN as Re,aQ as R,d1 as qt,jZ as Kt,j_ as Wt,fD as Xt,c4 as Me,aU as Gt,c$ as Zt,cy as Qt,d9 as Jt,cS as er,bZ as Ie,d0 as tr}from"./index-29a13d6d.js";import{l as _e}from"./data_objects-2e174191.js";import{d as rr,C as ar}from"./ckeditor-9a41d8e6.js";import{U as sr}from"./index-2f195e5a.js";import{l as nr}from"./index-c0c98f05.js";import{D as ir}from"./index-e4ebc2f7.js";import{l as or}from"./index-7621bbd9.js";import{S as lr}from"./Skeleton-15a49f54.js";import{C as ur}from"./index-0ef7ceee.js";import{A as cr}from"./Alert-9705e544.js";import{M as dr}from"./index-c4c747cd.js";import"./data_objects-f2568388.js";import"./Upload-2a1c8c07.js";import"./fade-1b8cb738.js";import"./defineProperty-51517d30.js";import"./useNotification-fd027c0f.js";import"./DialogWrap-42f3b16e.js";import"./index-270b7e76.js";import"./localeData-08f640e8.js";import"./SinglePicker-b28271a7.js";import"./useMutateObserver-8b6b405f.js";import"./index-865d1987.js";import"./InputNumber-d88ed4da.js";import"./Image-f22c960d.js";import"./index-51322bfd.js";import"./index-47a1af4d.js";import"./InfoCircleFilled-154bca47.js";import"./ActionButton-268e5a9a.js";import"./index-30e24ff4.js";const pr=t=>{const[e,r]=y.useState(!1),a=async s=>{var u;r(!0);const{data:i}=await G.custom({url:"",method:"post",meta:{operation:"createClassYoutubeVideo",variables:{classId:{value:parseInt((u=t.id)==null?void 0:u.toString()),type:"Int",required:!0},url:{value:s.url,type:"String",required:!0}},fields:["success","message",{video:_e}]}}).catch(()=>(S.error("Error Adding a Video"),{data:null})).then(c=>c);i&&(i.success?(S.success(i.message),t.handleAddingDrive(i.video)):S.error(i.message)),r(!1)};return n.jsx(n.Fragment,{children:n.jsx($t,{spinning:e,children:n.jsxs(x,{layout:"vertical",onFinish:s=>{a(s)},requiredMark:!1,children:[n.jsx(x.Item,{name:"url",label:"Youtube Video URL",rules:[{required:!0,type:"url",message:"Please input Youtube URL ..."}],children:n.jsx(ge,{size:"large",placeholder:"Enter Youtube URL ..."})}),n.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:n.jsx(X,{type:"primary",size:"large",htmlType:"submit",loading:e,children:"Save"})})]})})})},Le=[".mp4"],fr=t=>Array.isArray(t)?t:t==null?void 0:t.fileList,hr=t=>{const[e,r]=y.useState(!1),[a]=x.useForm(),[s,i]=y.useState(""),u=Vt(),c=async l=>{r(!0);const{data:p}=await G.custom({url:"",method:"post",meta:{operation:"uploadClassVideo",variables:{classId:{value:parseInt(u.id),type:"Int",required:!0},video:{value:l.video,type:"Upload",required:!0},title:{value:l.title,type:"String",required:!0},description:{value:l.description,type:"String",required:!1}},fields:["success","message",{video:_e}]}}).catch(()=>(S.error("Error uploading a Video File"),{data:null})).then(d=>d);p&&(p.success?(i(""),S.success(p.message),t.handleAddingVideo(p.video)):S.error(p.message)),r(!1)};return n.jsx(n.Fragment,{children:n.jsxs(x,{layout:"vertical",onFinish:l=>{l.description=s,c(l)},requiredMark:!1,form:a,children:[n.jsx(x.Item,{label:"Pick a Video Files ("+Le.join()+")",children:n.jsx(x.Item,{name:"video",valuePropName:"fileList",getValueFromEvent:fr,noStyle:!0,rules:[{required:!0,type:"array",message:"Please upload students excel file"}],children:n.jsxs(sr.Dragger,{name:"file",accept:Le.join(),multiple:!1,beforeUpload:()=>!1,onChange:l=>{a.setFieldsValue({title:l.file.name})},onRemove:l=>{a.setFieldsValue({title:""})},children:[n.jsx("p",{className:"ant-upload-drag-icon",children:n.jsx(kt,{})}),n.jsx("p",{className:"ant-upload-text",children:"Click or drag file to this area to upload"}),n.jsx("p",{className:"ant-upload-hint",children:"Support for a single or bulk upload."})]})})}),n.jsx(x.Item,{name:"title",label:"Video Title",rules:[{required:!0,type:"string",message:"Please input title"}],children:n.jsx(ge,{size:"large",placeholder:"Enter Title ..."})}),n.jsx("h3",{children:"Description"}),n.jsx(rr.CKEditor,{editor:ar,data:s,onReady:l=>{l.editing.view.change(p=>{p.setStyle("min-height","100px",l.editing.view.document.getRoot())})},onChange:(l,p)=>{const d=p.getData();i(d)},config:{toolbar:{items:["bold","italic","strikethrough","underline","code","subscript","superscript","removeFormat","|","bulletedList","numberedList","todoList","|","outdent","indent","|","-","fontSize","fontFamily","fontColor","fontBackgroundColor","highlight","|","alignment","|","EmojiPanel"],shouldNotGroupWhenFull:!0},fontFamily:{options:["default","Arial, Helvetica, sans-serif","Courier New, Courier, monospace","Georgia, serif","Lucida Sans Unicode, Lucida Grande, sans-serif","Tahoma, Geneva, sans-serif","Times New Roman, Times, serif","Trebuchet MS, Helvetica, sans-serif","Verdana, Geneva, sans-serif"],supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0}}}),n.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:n.jsx(X,{type:"primary",size:"large",htmlType:"submit",children:"Save"})})]})})};class yr extends y.Component{constructor(r){super(r);Ae(this,"player");this.play=this.play.bind(this),this.pause=this.pause.bind(this),this.load=this.load.bind(this),this.changeCurrentTime=this.changeCurrentTime.bind(this),this.seek=this.seek.bind(this),this.changePlaybackRateRate=this.changePlaybackRateRate.bind(this),this.changeVolume=this.changeVolume.bind(this),this.setMuted=this.setMuted.bind(this)}componentDidMount(){this.player.subscribeToStateChange(this.handleStateChange.bind(this)),this.props.updatePlayer(this.player,this.props.index)}setMuted(r){return()=>{this.player.muted=r}}handleStateChange(r){this.setState({player:r})}play(){S("playing"),this.player.play()}pause(){this.player.pause()}load(){this.player.load()}changeCurrentTime(r){return()=>{const{player:a}=this.player.getState();this.player.seek(a.currentTime+r)}}seek(r){return()=>{this.player.seek(r)}}changePlaybackRateRate(r){return()=>{const{player:a}=this.player.getState();this.player.playbackRate=a.playbackRate+r}}changeVolume(r){return()=>{const{player:a}=this.player.getState();this.player.volume=a.volume+r}}render(){return n.jsx("div",{children:n.jsx(nr.Player,{ref:r=>{this.player=r},aspectRatio:"1110:680",preload:"auto",autoPlay:!1,children:n.jsx("source",{src:this.props.file})})})}}var mr=function(e){return gr(e)&&!_r(e)};function gr(t){return!!t&&typeof t=="object"}function _r(t){var e=Object.prototype.toString.call(t);return e==="[object RegExp]"||e==="[object Date]"||br(t)}var vr=typeof Symbol=="function"&&Symbol.for,Pr=vr?Symbol.for("react.element"):60103;function br(t){return t.$$typeof===Pr}function wr(t){return Array.isArray(t)?[]:{}}function H(t,e){return e.clone!==!1&&e.isMergeableObject(t)?$(wr(t),t,e):t}function Or(t,e,r){return t.concat(e).map(function(a){return H(a,r)})}function Sr(t,e){if(!e.customMerge)return $;var r=e.customMerge(t);return typeof r=="function"?r:$}function Tr(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(e){return Object.propertyIsEnumerable.call(t,e)}):[]}function De(t){return Object.keys(t).concat(Tr(t))}function Be(t,e){try{return e in t}catch{return!1}}function xr(t,e){return Be(t,e)&&!(Object.hasOwnProperty.call(t,e)&&Object.propertyIsEnumerable.call(t,e))}function jr(t,e,r){var a={};return r.isMergeableObject(t)&&De(t).forEach(function(s){a[s]=H(t[s],r)}),De(e).forEach(function(s){xr(t,s)||(Be(t,s)&&r.isMergeableObject(e[s])?a[s]=Sr(s,r)(t[s],e[s],r):a[s]=H(e[s],r))}),a}function $(t,e,r){r=r||{},r.arrayMerge=r.arrayMerge||Or,r.isMergeableObject=r.isMergeableObject||mr,r.cloneUnlessOtherwiseSpecified=H;var a=Array.isArray(e),s=Array.isArray(t),i=a===s;return i?a?r.arrayMerge(t,e,r):jr(t,e,r):H(e,r)}$.all=function(e,r){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(a,s){return $(a,s,r)},{})};var Cr=$,qe=Cr,Ue=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function Ar(t,e){return!!(t===e||Ue(t)&&Ue(e))}function Er(t,e){if(t.length!==e.length)return!1;for(var r=0;r<t.length;r++)if(!Ar(t[r],e[r]))return!1;return!0}function Rr(t,e){e===void 0&&(e=Er);var r,a=[],s,i=!1;function u(){for(var c=[],l=0;l<arguments.length;l++)c[l]=arguments[l];return i&&r===this&&e(c,a)||(s=t.apply(this,c),i=!0,r=this,a=c),s}return u}const Mr=Object.freeze(Object.defineProperty({__proto__:null,default:Rr},Symbol.toStringTag,{value:"Module"})),Ir=Nt(Mr);var Lr=typeof Element<"u",Dr=typeof Map=="function",Ur=typeof Set=="function",$r=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function W(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var r,a,s;if(Array.isArray(t)){if(r=t.length,r!=e.length)return!1;for(a=r;a--!==0;)if(!W(t[a],e[a]))return!1;return!0}var i;if(Dr&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(i=t.entries();!(a=i.next()).done;)if(!e.has(a.value[0]))return!1;for(i=t.entries();!(a=i.next()).done;)if(!W(a.value[1],e.get(a.value[0])))return!1;return!0}if(Ur&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(i=t.entries();!(a=i.next()).done;)if(!e.has(a.value[0]))return!1;return!0}if($r&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(r=t.length,r!=e.length)return!1;for(a=r;a--!==0;)if(t[a]!==e[a])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(s=Object.keys(t),r=s.length,r!==Object.keys(e).length)return!1;for(a=r;a--!==0;)if(!Object.prototype.hasOwnProperty.call(e,s[a]))return!1;if(Lr&&t instanceof Element)return!1;for(a=r;a--!==0;)if(!((s[a]==="_owner"||s[a]==="__v"||s[a]==="__o")&&t.$$typeof)&&!W(t[s[a]],e[s[a]]))return!1;return!0}return t!==t&&e!==e}var Ke=function(e,r){try{return W(e,r)}catch(a){if((a.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw a}},Vr=Object.create,Z=Object.defineProperty,kr=Object.getOwnPropertyDescriptor,Nr=Object.getOwnPropertyNames,Hr=Object.getPrototypeOf,Fr=Object.prototype.hasOwnProperty,zr=(t,e)=>{for(var r in e)Z(t,r,{get:e[r],enumerable:!0})},We=(t,e,r,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Nr(e))!Fr.call(t,s)&&s!==r&&Z(t,s,{get:()=>e[s],enumerable:!(a=kr(e,s))||a.enumerable});return t},Yr=(t,e,r)=>(r=t!=null?Vr(Hr(t)):{},We(e||!t||!t.__esModule?Z(r,"default",{value:t,enumerable:!0}):r,t)),Br=t=>We(Z({},"__esModule",{value:!0}),t),Xe={};zr(Xe,{defaultProps:()=>Wr,propTypes:()=>Kr});var Ge=Br(Xe),qr=Yr(Ht);const{string:g,bool:P,number:I,array:ue,oneOfType:V,shape:w,object:v,func:m,node:$e}=qr.default,Kr={url:V([g,ue,v]),playing:P,loop:P,controls:P,volume:I,muted:P,playbackRate:I,width:V([g,I]),height:V([g,I]),style:v,progressInterval:I,playsinline:P,pip:P,stopOnUnmount:P,light:V([P,g,v]),playIcon:$e,previewTabIndex:I,previewAriaLabel:g,fallback:$e,oEmbedUrl:g,wrapper:V([g,m,w({render:m.isRequired})]),config:w({soundcloud:w({options:v}),youtube:w({playerVars:v,embedOptions:v,onUnstarted:m}),facebook:w({appId:g,version:g,playerId:g,attributes:v}),dailymotion:w({params:v}),vimeo:w({playerOptions:v,title:g}),mux:w({attributes:v,version:g}),file:w({attributes:v,tracks:ue,forceVideo:P,forceAudio:P,forceHLS:P,forceSafariHLS:P,forceDisableHls:P,forceDASH:P,forceFLV:P,hlsOptions:v,hlsVersion:g,dashVersion:g,flvVersion:g}),wistia:w({options:v,playerId:g,customControls:ue}),mixcloud:w({options:v}),twitch:w({options:v,playerId:g}),vidyard:w({options:v})}),onReady:m,onStart:m,onPlay:m,onPause:m,onBuffer:m,onBufferEnd:m,onEnded:m,onError:m,onDuration:m,onSeek:m,onPlaybackRateChange:m,onPlaybackQualityChange:m,onProgress:m,onClickPreview:m,onEnablePIP:m,onDisablePIP:m},_=()=>{},Wr={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:_},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:_,onStart:_,onPlay:_,onPause:_,onBuffer:_,onBufferEnd:_,onEnded:_,onError:_,onDuration:_,onSeek:_,onPlaybackRateChange:_,onPlaybackQualityChange:_,onProgress:_,onClickPreview:_,onEnablePIP:_,onDisablePIP:_};var Xr=function(e,r,a){var s=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");typeof r=="function"&&(a=r,r={}),r=r||{},a=a||function(){},i.type=r.type||"text/javascript",i.charset=r.charset||"utf8",i.async="async"in r?!!r.async:!0,i.src=e,r.attrs&&Gr(i,r.attrs),r.text&&(i.text=""+r.text);var u="onload"in i?Ve:Zr;u(i,a),i.onload||Ve(i,a),s.appendChild(i)};function Gr(t,e){for(var r in e)t.setAttribute(r,e[r])}function Ve(t,e){t.onload=function(){this.onerror=this.onload=null,e(null,t)},t.onerror=function(){this.onerror=this.onload=null,e(new Error("Failed to load "+this.src),t)}}function Zr(t,e){t.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,e(null,t))}}var Qr=Object.create,Q=Object.defineProperty,Jr=Object.getOwnPropertyDescriptor,ea=Object.getOwnPropertyNames,ta=Object.getPrototypeOf,ra=Object.prototype.hasOwnProperty,aa=(t,e)=>{for(var r in e)Q(t,r,{get:e[r],enumerable:!0})},Ze=(t,e,r,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of ea(e))!ra.call(t,s)&&s!==r&&Q(t,s,{get:()=>e[s],enumerable:!(a=Jr(e,s))||a.enumerable});return t},ve=(t,e,r)=>(r=t!=null?Qr(ta(t)):{},Ze(e||!t||!t.__esModule?Q(r,"default",{value:t,enumerable:!0}):r,t)),sa=t=>Ze(Q({},"__esModule",{value:!0}),t),Qe={};aa(Qe,{callPlayer:()=>Pa,getConfig:()=>_a,getSDK:()=>ga,isBlobUrl:()=>wa,isMediaStream:()=>ba,lazy:()=>la,omit:()=>va,parseEndTime:()=>ha,parseStartTime:()=>fa,queryString:()=>ma,randomString:()=>ya,supportsWebKitPresentationMode:()=>Oa});var J=sa(Qe),na=ve(y),ia=ve(Xr),oa=ve(qe);const la=t=>na.default.lazy(async()=>{const e=await t();return typeof e.default=="function"?e:e.default}),ua=/[?&#](?:start|t)=([0-9hms]+)/,ca=/[?&#]end=([0-9hms]+)/,he=/(\d+)(h|m|s)/g,da=/^\d+$/;function Je(t,e){if(t instanceof Array)return;const r=t.match(e);if(r){const a=r[1];if(a.match(he))return pa(a);if(da.test(a))return parseInt(a)}}function pa(t){let e=0,r=he.exec(t);for(;r!==null;){const[,a,s]=r;s==="h"&&(e+=parseInt(a,10)*60*60),s==="m"&&(e+=parseInt(a,10)*60),s==="s"&&(e+=parseInt(a,10)),r=he.exec(t)}return e}function fa(t){return Je(t,ua)}function ha(t){return Je(t,ca)}function ya(){return Math.random().toString(36).substr(2,5)}function ma(t){return Object.keys(t).map(e=>`${e}=${t[e]}`).join("&")}function ce(t){return window[t]?window[t]:window.exports&&window.exports[t]?window.exports[t]:window.module&&window.module.exports&&window.module.exports[t]?window.module.exports[t]:null}const L={},ga=function(e,r,a=null,s=()=>!0,i=ia.default){const u=ce(r);return u&&s(u)?Promise.resolve(u):new Promise((c,l)=>{if(L[e]){L[e].push({resolve:c,reject:l});return}L[e]=[{resolve:c,reject:l}];const p=d=>{L[e].forEach(O=>O.resolve(d))};if(a){const d=window[a];window[a]=function(){d&&d(),p(ce(r))}}i(e,d=>{d?(L[e].forEach(O=>O.reject(d)),L[e]=null):a||p(ce(r))})})};function _a(t,e){return(0,oa.default)(e.config,t.config)}function va(t,...e){const r=[].concat(...e),a={},s=Object.keys(t);for(const i of s)r.indexOf(i)===-1&&(a[i]=t[i]);return a}function Pa(t,...e){if(!this.player||!this.player[t]){let r=`ReactPlayer: ${this.constructor.displayName} player could not call %c${t}%c – `;return this.player?this.player[t]||(r+="The method was not available"):r+="The player was not available",console.warn(r,"font-weight: bold",""),null}return this.player[t](...e)}function ba(t){return typeof window<"u"&&typeof window.MediaStream<"u"&&t instanceof window.MediaStream}function wa(t){return/^blob:/.test(t)}function Oa(t=document.createElement("video")){const e=/iPhone|iPod/.test(navigator.userAgent)===!1;return t.webkitSupportsPresentationMode&&typeof t.webkitSetPresentationMode=="function"&&e}var Sa=Object.create,F=Object.defineProperty,Ta=Object.getOwnPropertyDescriptor,xa=Object.getOwnPropertyNames,ja=Object.getPrototypeOf,Ca=Object.prototype.hasOwnProperty,Aa=(t,e,r)=>e in t?F(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Ea=(t,e)=>{for(var r in e)F(t,r,{get:e[r],enumerable:!0})},et=(t,e,r,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of xa(e))!Ca.call(t,s)&&s!==r&&F(t,s,{get:()=>e[s],enumerable:!(a=Ta(e,s))||a.enumerable});return t},tt=(t,e,r)=>(r=t!=null?Sa(ja(t)):{},et(e||!t||!t.__esModule?F(r,"default",{value:t,enumerable:!0}):r,t)),Ra=t=>et(F({},"__esModule",{value:!0}),t),h=(t,e,r)=>(Aa(t,typeof e!="symbol"?e+"":e,r),r),rt={};Ea(rt,{default:()=>ee});var Ma=Ra(rt),ke=tt(y),Ia=tt(Ke),at=Ge,La=J;const Da=5e3;let ee=class extends ke.Component{constructor(){super(...arguments),h(this,"mounted",!1),h(this,"isReady",!1),h(this,"isPlaying",!1),h(this,"isLoading",!0),h(this,"loadOnReady",null),h(this,"startOnPlay",!0),h(this,"seekOnPlay",null),h(this,"onDurationCalled",!1),h(this,"handlePlayerMount",e=>{if(this.player){this.progress();return}this.player=e,this.player.load(this.props.url),this.progress()}),h(this,"getInternalPlayer",e=>this.player?this.player[e]:null),h(this,"progress",()=>{if(this.props.url&&this.player&&this.isReady){const e=this.getCurrentTime()||0,r=this.getSecondsLoaded(),a=this.getDuration();if(a){const s={playedSeconds:e,played:e/a};r!==null&&(s.loadedSeconds=r,s.loaded=r/a),(s.playedSeconds!==this.prevPlayed||s.loadedSeconds!==this.prevLoaded)&&this.props.onProgress(s),this.prevPlayed=s.playedSeconds,this.prevLoaded=s.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)}),h(this,"handleReady",()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:e,playing:r,volume:a,muted:s}=this.props;e(),!s&&a!==null&&this.player.setVolume(a),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):r&&this.player.play(),this.handleDurationCheck()}),h(this,"handlePlay",()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:e,onPlay:r,playbackRate:a}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&a!==1&&this.player.setPlaybackRate(a),e(),this.startOnPlay=!1),r(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()}),h(this,"handlePause",e=>{this.isPlaying=!1,this.isLoading||this.props.onPause(e)}),h(this,"handleEnded",()=>{const{activePlayer:e,loop:r,onEnded:a}=this.props;e.loopOnEnded&&r&&this.seekTo(0),r||(this.isPlaying=!1,a())}),h(this,"handleError",(...e)=>{this.isLoading=!1,this.props.onError(...e)}),h(this,"handleDurationCheck",()=>{clearTimeout(this.durationCheckTimeout);const e=this.getDuration();e?this.onDurationCalled||(this.props.onDuration(e),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)}),h(this,"handleLoaded",()=>{this.isLoading=!1})}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(e){if(!this.player)return;const{url:r,playing:a,volume:s,muted:i,playbackRate:u,pip:c,loop:l,activePlayer:p,disableDeferredLoading:d}=this.props;if(!(0,Ia.default)(e.url,r)){if(this.isLoading&&!p.forceLoad&&!d&&!(0,La.isMediaStream)(r)){console.warn(`ReactPlayer: the attempt to load ${r} is being deferred until the player has loaded`),this.loadOnReady=r;return}this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(r,this.isReady)}!e.playing&&a&&!this.isPlaying&&this.player.play(),e.playing&&!a&&this.isPlaying&&this.player.pause(),!e.pip&&c&&this.player.enablePIP&&this.player.enablePIP(),e.pip&&!c&&this.player.disablePIP&&this.player.disablePIP(),e.volume!==s&&s!==null&&this.player.setVolume(s),e.muted!==i&&(i?this.player.mute():(this.player.unmute(),s!==null&&setTimeout(()=>this.player.setVolume(s)))),e.playbackRate!==u&&this.player.setPlaybackRate&&this.player.setPlaybackRate(u),e.loop!==l&&this.player.setLoop&&this.player.setLoop(l)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(e,r,a){if(!this.isReady){e!==0&&(this.seekOnPlay=e,setTimeout(()=>{this.seekOnPlay=null},Da));return}if(r?r==="fraction":e>0&&e<1){const i=this.player.getDuration();if(!i){console.warn("ReactPlayer: could not seek using fraction – duration not yet available");return}this.player.seekTo(i*e,a);return}this.player.seekTo(e,a)}render(){const e=this.props.activePlayer;return e?ke.default.createElement(e,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}};h(ee,"displayName","Player");h(ee,"propTypes",at.propTypes);h(ee,"defaultProps",at.defaultProps);var Ua=Object.create,z=Object.defineProperty,$a=Object.getOwnPropertyDescriptor,Va=Object.getOwnPropertyNames,ka=Object.getPrototypeOf,Na=Object.prototype.hasOwnProperty,Ha=(t,e,r)=>e in t?z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Fa=(t,e)=>{for(var r in e)z(t,r,{get:e[r],enumerable:!0})},st=(t,e,r,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Va(e))!Na.call(t,s)&&s!==r&&z(t,s,{get:()=>e[s],enumerable:!(a=$a(e,s))||a.enumerable});return t},Y=(t,e,r)=>(r=t!=null?Ua(ka(t)):{},st(e||!t||!t.__esModule?z(r,"default",{value:t,enumerable:!0}):r,t)),za=t=>st(z({},"__esModule",{value:!0}),t),f=(t,e,r)=>(Ha(t,typeof e!="symbol"?e+"":e,r),r),nt={};Fa(nt,{createReactPlayer:()=>Qa});var Ya=za(nt),U=Y(y),Ba=Y(qe),de=Y(Ir),Ne=Y(Ke),N=Ge,it=J,qa=Y(Ma);const Ka=(0,it.lazy)(()=>Ft(()=>import("./Preview-d41cd441.js").then(t=>t.P),["assets/Preview-d41cd441.js","assets/index-29a13d6d.js","assets/index-5e5904d3.css"])),Wa=typeof window<"u"&&window.document&&typeof document<"u",Xa=typeof oe<"u"&&oe.window&&oe.window.document,Ga=Object.keys(N.propTypes),Za=Wa||Xa?U.Suspense:()=>null,k=[],Qa=(t,e)=>{var r;return r=class extends U.Component{constructor(){super(...arguments),f(this,"state",{showPreview:!!this.props.light}),f(this,"references",{wrapper:a=>{this.wrapper=a},player:a=>{this.player=a}}),f(this,"handleClickPreview",a=>{this.setState({showPreview:!1}),this.props.onClickPreview(a)}),f(this,"showPreview",()=>{this.setState({showPreview:!0})}),f(this,"getDuration",()=>this.player?this.player.getDuration():null),f(this,"getCurrentTime",()=>this.player?this.player.getCurrentTime():null),f(this,"getSecondsLoaded",()=>this.player?this.player.getSecondsLoaded():null),f(this,"getInternalPlayer",(a="player")=>this.player?this.player.getInternalPlayer(a):null),f(this,"seekTo",(a,s,i)=>{if(!this.player)return null;this.player.seekTo(a,s,i)}),f(this,"handleReady",()=>{this.props.onReady(this)}),f(this,"getActivePlayer",(0,de.default)(a=>{for(const s of[...k,...t])if(s.canPlay(a))return s;return e||null})),f(this,"getConfig",(0,de.default)((a,s)=>{const{config:i}=this.props;return Ba.default.all([N.defaultProps.config,N.defaultProps.config[s]||{},i,i[s]||{}])})),f(this,"getAttributes",(0,de.default)(a=>(0,it.omit)(this.props,Ga))),f(this,"renderActivePlayer",a=>{if(!a)return null;const s=this.getActivePlayer(a);if(!s)return null;const i=this.getConfig(a,s.key);return U.default.createElement(qa.default,{...this.props,key:s.key,ref:this.references.player,config:i,activePlayer:s.lazyPlayer||s,onReady:this.handleReady})})}shouldComponentUpdate(a,s){return!(0,Ne.default)(this.props,a)||!(0,Ne.default)(this.state,s)}componentDidUpdate(a){const{light:s}=this.props;!a.light&&s&&this.setState({showPreview:!0}),a.light&&!s&&this.setState({showPreview:!1})}renderPreview(a){if(!a)return null;const{light:s,playIcon:i,previewTabIndex:u,oEmbedUrl:c,previewAriaLabel:l}=this.props;return U.default.createElement(Ka,{url:a,light:s,playIcon:i,previewTabIndex:u,previewAriaLabel:l,oEmbedUrl:c,onClick:this.handleClickPreview})}render(){const{url:a,style:s,width:i,height:u,fallback:c,wrapper:l}=this.props,{showPreview:p}=this.state,d=this.getAttributes(a),O=typeof l=="string"?this.references.wrapper:void 0;return U.default.createElement(l,{ref:O,style:{...s,width:i,height:u},...d},U.default.createElement(Za,{fallback:c},p?this.renderPreview(a):this.renderActivePlayer(a)))}},f(r,"displayName","ReactPlayer"),f(r,"propTypes",N.propTypes),f(r,"defaultProps",N.defaultProps),f(r,"addCustomPlayer",a=>{k.push(a)}),f(r,"removeCustomPlayers",()=>{k.length=0}),f(r,"canPlay",a=>{for(const s of[...k,...t])if(s.canPlay(a))return!0;return!1}),f(r,"canEnablePIP",a=>{for(const s of[...k,...t])if(s.canEnablePIP&&s.canEnablePIP(a))return!0;return!1}),r};var Pe=Object.defineProperty,Ja=Object.getOwnPropertyDescriptor,es=Object.getOwnPropertyNames,ts=Object.prototype.hasOwnProperty,rs=(t,e)=>{for(var r in e)Pe(t,r,{get:e[r],enumerable:!0})},as=(t,e,r,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of es(e))!ts.call(t,s)&&s!==r&&Pe(t,s,{get:()=>e[s],enumerable:!(a=Ja(e,s))||a.enumerable});return t},ss=t=>as(Pe({},"__esModule",{value:!0}),t),ot={};rs(ot,{AUDIO_EXTENSIONS:()=>be,DASH_EXTENSIONS:()=>bt,FLV_EXTENSIONS:()=>wt,HLS_EXTENSIONS:()=>Oe,MATCH_URL_DAILYMOTION:()=>gt,MATCH_URL_FACEBOOK:()=>dt,MATCH_URL_FACEBOOK_WATCH:()=>pt,MATCH_URL_KALTURA:()=>Pt,MATCH_URL_MIXCLOUD:()=>_t,MATCH_URL_MUX:()=>ct,MATCH_URL_SOUNDCLOUD:()=>lt,MATCH_URL_STREAMABLE:()=>ft,MATCH_URL_TWITCH_CHANNEL:()=>mt,MATCH_URL_TWITCH_VIDEO:()=>yt,MATCH_URL_VIDYARD:()=>vt,MATCH_URL_VIMEO:()=>ut,MATCH_URL_WISTIA:()=>ht,MATCH_URL_YOUTUBE:()=>ye,VIDEO_EXTENSIONS:()=>we,canPlay:()=>is});var ns=ss(ot),He=J;const ye=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,lt=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,ut=/vimeo\.com\/(?!progressive_redirect).+/,ct=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,dt=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,pt=/^https?:\/\/fb\.watch\/.+$/,ft=/streamable\.com\/([a-z0-9]+)$/,ht=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,yt=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,mt=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,gt=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,_t=/mixcloud\.com\/([^/]+\/[^/]+)/,vt=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,Pt=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,be=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,we=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,Oe=/\.(m3u8)($|\?)/i,bt=/\.(mpd)($|\?)/i,wt=/\.(flv)($|\?)/i,me=t=>{if(t instanceof Array){for(const e of t)if(typeof e=="string"&&me(e)||me(e.src))return!0;return!1}return(0,He.isMediaStream)(t)||(0,He.isBlobUrl)(t)?!0:be.test(t)||we.test(t)||Oe.test(t)||bt.test(t)||wt.test(t)},is={youtube:t=>t instanceof Array?t.every(e=>ye.test(e)):ye.test(t),soundcloud:t=>lt.test(t)&&!be.test(t),vimeo:t=>ut.test(t)&&!we.test(t)&&!Oe.test(t),mux:t=>ct.test(t),facebook:t=>dt.test(t)||pt.test(t),streamable:t=>ft.test(t),wistia:t=>ht.test(t),twitch:t=>yt.test(t)||mt.test(t),dailymotion:t=>gt.test(t),mixcloud:t=>_t.test(t),vidyard:t=>vt.test(t),kaltura:t=>Pt.test(t),file:me};var os=Object.create,B=Object.defineProperty,ls=Object.getOwnPropertyDescriptor,us=Object.getOwnPropertyNames,cs=Object.getPrototypeOf,ds=Object.prototype.hasOwnProperty,ps=(t,e,r)=>e in t?B(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,fs=(t,e)=>{for(var r in e)B(t,r,{get:e[r],enumerable:!0})},Ot=(t,e,r,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of us(e))!ds.call(t,s)&&s!==r&&B(t,s,{get:()=>e[s],enumerable:!(a=ls(e,s))||a.enumerable});return t},hs=(t,e,r)=>(r=t!=null?os(cs(t)):{},Ot(e||!t||!t.__esModule?B(r,"default",{value:t,enumerable:!0}):r,t)),ys=t=>Ot(B({},"__esModule",{value:!0}),t),C=(t,e,r)=>(ps(t,typeof e!="symbol"?e+"":e,r),r),St={};fs(St,{default:()=>Se});var ms=ys(St),pe=hs(y),D=J,Tt=ns;const gs="https://www.youtube.com/iframe_api",Fe="YT",_s="onYouTubeIframeAPIReady",K=/[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,fe=/user\/([a-zA-Z0-9_-]+)\/?/,vs=/youtube-nocookie\.com/,Ps="https://www.youtube-nocookie.com";class Se extends pe.Component{constructor(){super(...arguments),C(this,"callPlayer",D.callPlayer),C(this,"parsePlaylist",e=>{if(e instanceof Array)return{listType:"playlist",playlist:e.map(this.getID).join(",")};if(K.test(e)){const[,r]=e.match(K);return{listType:"playlist",list:r.replace(/^UC/,"UU")}}if(fe.test(e)){const[,r]=e.match(fe);return{listType:"user_uploads",list:r}}return{}}),C(this,"onStateChange",e=>{const{data:r}=e,{onPlay:a,onPause:s,onBuffer:i,onBufferEnd:u,onEnded:c,onReady:l,loop:p,config:{playerVars:d,onUnstarted:O}}=this.props,{UNSTARTED:M,PLAYING:A,PAUSED:j,BUFFERING:te,ENDED:re,CUED:q}=window[Fe].PlayerState;if(r===M&&O(),r===A&&(a(),u()),r===j&&s(),r===te&&i(),r===re){const ae=!!this.callPlayer("getPlaylist");p&&!ae&&(d.start?this.seekTo(d.start):this.play()),c()}r===q&&l()}),C(this,"mute",()=>{this.callPlayer("mute")}),C(this,"unmute",()=>{this.callPlayer("unMute")}),C(this,"ref",e=>{this.container=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}getID(e){return!e||e instanceof Array||K.test(e)?null:e.match(Tt.MATCH_URL_YOUTUBE)[1]}load(e,r){const{playing:a,muted:s,playsinline:i,controls:u,loop:c,config:l,onError:p}=this.props,{playerVars:d,embedOptions:O}=l,M=this.getID(e);if(r){if(K.test(e)||fe.test(e)||e instanceof Array){this.player.loadPlaylist(this.parsePlaylist(e));return}this.player.cueVideoById({videoId:M,startSeconds:(0,D.parseStartTime)(e)||d.start,endSeconds:(0,D.parseEndTime)(e)||d.end});return}(0,D.getSDK)(gs,Fe,_s,A=>A.loaded).then(A=>{this.container&&(this.player=new A.Player(this.container,{width:"100%",height:"100%",videoId:M,playerVars:{autoplay:a?1:0,mute:s?1:0,controls:u?1:0,start:(0,D.parseStartTime)(e),end:(0,D.parseEndTime)(e),origin:window.location.origin,playsinline:i?1:0,...this.parsePlaylist(e),...d},events:{onReady:()=>{c&&this.player.setLoop(!0),this.props.onReady()},onPlaybackRateChange:j=>this.props.onPlaybackRateChange(j.data),onPlaybackQualityChange:j=>this.props.onPlaybackQualityChange(j),onStateChange:this.onStateChange,onError:j=>p(j.data)},host:vs.test(e)?Ps:void 0,...O}))},p),O.events&&console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer’s callback props instead, eg onReady, onPlay, onPause")}play(){this.callPlayer("playVideo")}pause(){this.callPlayer("pauseVideo")}stop(){document.body.contains(this.callPlayer("getIframe"))&&this.callPlayer("stopVideo")}seekTo(e,r=!1){this.callPlayer("seekTo",e),!r&&!this.props.playing&&this.pause()}setVolume(e){this.callPlayer("setVolume",e*100)}setPlaybackRate(e){this.callPlayer("setPlaybackRate",e)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return this.callPlayer("getVideoLoadedFraction")*this.getDuration()}render(){const{display:e}=this.props,r={width:"100%",height:"100%",display:e};return pe.default.createElement("div",{style:r},pe.default.createElement("div",{ref:this.ref}))}}C(Se,"displayName","YouTube");C(Se,"canPlay",Tt.canPlay.youtube);var bs=Ya.createReactPlayer,ze=ms.default,ws=bs([{key:"youtube",canPlay:ze.canPlay,lazyPlayer:ze}]);const Os=zt(ws),Ye=[],tn=t=>{const[e,r]=y.useState([]),[a,s]=y.useState(),[i,u]=y.useState(!0),[c,l]=y.useState(1),[p,d]=y.useState(0),[O,M]=y.useState(0),[A,j]=y.useState(!0),[te]=x.useForm();Yt();const[re,q]=y.useState(!1),[ae,se]=y.useState(!1),[Te,xt]=y.useState(0),[jt,xe]=y.useState(!1),Ct=y.useRef([]),At=async o=>{s(o),xe(!0)},Et=()=>{se(!0)},Rt=()=>{q(!0)},ne=async(o,b="",T=!1)=>{const{data:E}=await G.custom({url:"",method:"get",meta:{operation:"darasaVideos",variables:{page:{value:o,type:"Int",required:!0},key:{value:b,type:"String",required:!1},id:{value:parseInt(t.id===void 0?"0":t.id.toString()),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:_e}]}}).catch(()=>(S.error("Error loading videos"),{data:null})).then(ie=>ie);E&&(M(E.total),d(E.pages),l(E.page),j(E.hasNext),r(E.results.map(ie=>({...ie,isPlaying:!1})))),u(!1)},je=async o=>{r([o,...e]),se(!1)},Mt=(o,b)=>{Ye[b]=o},Ce=(o,b)=>{Te.toString()!==o.toString()&&xt(o),r(e.map((T,E)=>T.id.toString()===o.toString()?{...T,isPlaying:b}:{...T,isPlaying:!1}))},It=async o=>{const{data:b}=await G.custom({url:"",method:"post",meta:{operation:"deleteClassVideo",variables:{id:{value:o,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(S.error("Error deleting video"),{data:null})).then(T=>T);b&&(b.success?(S.success(b.message),r(e.filter(T=>T.id!==o))):S.error(b.message))},Lt=o=>{dr.confirm({title:"Removing Video",icon:n.jsx(tr,{}),content:"Are you sure ...",okText:"Remove",cancelText:"Cancel",onOk:()=>It(o)})};return y.useEffect(()=>{ne(c)},[]),i?n.jsx(n.Fragment,{children:n.jsx(lr,{loading:i,active:!0})}):n.jsxs(n.Fragment,{children:[n.jsxs(Ee,{children:[n.jsx(le,{span:20,children:n.jsx(x,{layout:"vertical",form:te,onFinish:o=>{l(0),ne(0,o.key,!0)},children:n.jsx(x.Item,{name:"key",children:n.jsx(ge,{size:"large",placeholder:"Search Video(s)...",prefix:n.jsx(Bt,{}),autoComplete:"off",allowClear:!0})})})}),n.jsx(le,{span:4,style:{display:"flex",justifyContent:"flex-end"},children:n.jsx(Re,{trigger:["click"],overlay:n.jsxs(R,{children:[n.jsx(R.Item,{disabled:!t.canManage,children:n.jsxs("a",{target:"_blank",rel:"noopener noreferrer",onClick:Rt,children:[n.jsx(qt,{}),n.jsx("span",{style:{marginLeft:10},children:"Upload Video"})]})}),n.jsx(R.Item,{children:n.jsxs("a",{target:"_blank",rel:"noopener noreferrer",onClick:()=>Et(),children:[n.jsx(Kt,{}),n.jsx("span",{style:{marginLeft:10},children:"Youtube-Video"})]})})]}),placement:"bottomRight",overlayStyle:{zIndex:9999},children:n.jsx(X,{size:"large",icon:n.jsx(Wt,{}),children:"Add Video"})})})]}),n.jsxs("div",{id:"scrollableDiv",style:{height:"74vh",overflow:"auto"},children:[e.length>0?n.jsx(Ee,{align:"top",children:e.map((o,b)=>n.jsx(le,{span:12,children:n.jsxs(ur,{hoverable:o.isActive,style:{marginRight:10},title:n.jsxs(n.Fragment,{children:[n.jsx("span",{children:o.title}),n.jsx(Xt,{title:Me(o.created).format("LLLL"),placement:"top",children:n.jsxs(or.Tag,{color:"red",style:{float:"right"},children:["Published: ",Me(o.created).fromNow()]})}),n.jsx(Gt,{style:{right:0,position:"absolute",zIndex:"inherit"},children:n.jsx(Re,{trigger:["click"],overlay:n.jsxs(R,{children:[n.jsx(R.Item,{icon:n.jsx(Zt,{}),disabled:!o.isActive,children:n.jsx("a",{target:"_blank",rel:"noopener noreferrer",onClick:()=>At(o),children:"View Info's"})}),n.jsx(R.Item,{icon:n.jsx(Qt,{}),children:n.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Report"})}),n.jsx(R.Item,{icon:n.jsx(Jt,{}),onClick:()=>Lt(o.id),disabled:!t.canManage,children:n.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Remove"})})]}),overlayStyle:{zIndex:9999},children:n.jsx("a",{className:"ant-dropdown-link",onClick:T=>T.preventDefault(),children:n.jsx(er,{style:{color:"orange",fontSize:28,fontWeight:"bold"}})})})})]}),children:[o.isYoutube&&n.jsx(Os,{url:o.url,width:"100%"}),!o.isYoutube&&n.jsx("span",{onClick:()=>{Ce(o.id,!0),Ye[b].pause()},children:n.jsx(yr,{ref:Ct.current[b],index:b,file:o.video,videoId:o.id,updatePlaying:Ce,isPlaying:Te.toString()===o.id.toString(),updatePlayer:Mt})})]})}))}):n.jsx(cr,{severity:"info",children:"No Video found for this class, please add one"}),A&&n.jsx("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"},children:n.jsx(X,{type:"primary",onClick:()=>{ne(c+1)},children:"Load More"})})]}),n.jsx(Ie,{title:"Uploading Video",open:re,onClose:o=>q(o),width:"50vw",children:n.jsx(hr,{id:t.id,random:Math.random(),handleAddingVideo:je})}),n.jsx(Ie,{title:"Adding Youtube Video",open:ae,onClose:o=>se(o),width:"50vw",children:n.jsx(pr,{id:t.id,random:Math.random(),handleAddingDrive:je})}),n.jsx(ir,{title:"Video Info's",width:"40vw",anchor:"right",onClose:o=>xe(o),open:jt,children:n.jsx(n.Fragment,{children:a&&n.jsxs(n.Fragment,{children:[" ",n.jsx("div",{dangerouslySetInnerHTML:{__html:a.description}})]})})})]})};export{tn as ClassVideos};
