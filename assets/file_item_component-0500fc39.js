import{h$ as propTypesExports,r as reactExports,ey as getDefaultExportFromCjs,fq as commonjsGlobal,j as jsxRuntimeExports,F as Form,Q as Grid,S as Spin,a as Button,i0 as PlayCircleFilled,k as Card,aD as Popconfirm,I as Input,ai as PlusOutlined,ah as Empty,aj as Tag,M as ModalComponent,aV as Typography,g as gqlDataProvider,_ as _t,m as me,aC as List,ax as Dropdown,ay as Menu,aG as DeleteOutlined,av as DownloadOutlined,i1 as SecurityScanOutlined,f as InfoCircleOutlined,az as MoreOutlined,am as Avatar,e as Tooltip,R as Row,n as Col,aS as FolderOpenOutlined}from"./index-cdd95245.js";import{p as pdfjs}from"./index-98d8c4e0.js";import{l as lib$1}from"./index-6852aa15.js";import{D as DrawerComponent}from"./index-c62eae5d.js";import{a as driveFileTagsDataSet,f as filesDataSet}from"./data_objects-b1ad9e08.js";import{a as AiOutlineShareAlt}from"./index.esm-db701306.js";import{I as Image}from"./index-d6c3bfd0.js";import{R as ReactTimeAgo}from"./ReactTimeAgo-d90e120d.js";var bundle=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(n,o,i){r.o(n,o)||Object.defineProperty(n,o,{enumerable:!0,get:i})},r.r=function(n){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,o){if(1&o&&(n=r(n)),8&o||4&o&&typeof n=="object"&&n&&n.__esModule)return n;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&o&&typeof n!="string")for(var a in n)r.d(i,a,(function(D){return n[D]}).bind(null,a));return i},r.n=function(n){var o=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(o,"a",o),o},r.o=function(n,o){return Object.prototype.hasOwnProperty.call(n,o)},r.p="",r(r.s=2)}([function(e,t){e.exports=propTypesExports},function(e,t){e.exports=reactExports},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),(function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),enterModule;function _typeof(e){return(_typeof=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _inherits(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(r,n){return r.__proto__=n,r})(e,t)}function _createSuper(e){return function(){var t,r=_getPrototypeOf(e);if(_isNativeReflectConstruct()){var n=_getPrototypeOf(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return _possibleConstructorReturn(this,t)}}function _possibleConstructorReturn(e,t){return!t||_typeof(t)!=="object"&&typeof t!="function"?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}enterModule=typeof reactHotLoaderGlobal<"u"?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module),typeof reactHotLoaderGlobal<"u"&&reactHotLoaderGlobal.default.signature;var ReactAudioPlayer=function(_Component){_inherits(ReactAudioPlayer,_Component);var _super=_createSuper(ReactAudioPlayer);function ReactAudioPlayer(){var e;_classCallCheck(this,ReactAudioPlayer);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return _defineProperty(_assertThisInitialized(e=_super.call.apply(_super,[this].concat(r))),"audioEl",react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef()),_defineProperty(_assertThisInitialized(e),"listenTracker",void 0),_defineProperty(_assertThisInitialized(e),"onError",function(o){var i,a;return(i=(a=e.props).onError)===null||i===void 0?void 0:i.call(a,o)}),_defineProperty(_assertThisInitialized(e),"onCanPlay",function(o){var i,a;return(i=(a=e.props).onCanPlay)===null||i===void 0?void 0:i.call(a,o)}),_defineProperty(_assertThisInitialized(e),"onCanPlayThrough",function(o){var i,a;return(i=(a=e.props).onCanPlayThrough)===null||i===void 0?void 0:i.call(a,o)}),_defineProperty(_assertThisInitialized(e),"onPlay",function(o){var i,a;e.setListenTrack(),(i=(a=e.props).onPlay)===null||i===void 0||i.call(a,o)}),_defineProperty(_assertThisInitialized(e),"onAbort",function(o){var i,a;e.clearListenTrack(),(i=(a=e.props).onAbort)===null||i===void 0||i.call(a,o)}),_defineProperty(_assertThisInitialized(e),"onEnded",function(o){var i,a;e.clearListenTrack(),(i=(a=e.props).onEnded)===null||i===void 0||i.call(a,o)}),_defineProperty(_assertThisInitialized(e),"onPause",function(o){var i,a;e.clearListenTrack(),(i=(a=e.props).onPause)===null||i===void 0||i.call(a,o)}),_defineProperty(_assertThisInitialized(e),"onSeeked",function(o){var i,a;(i=(a=e.props).onSeeked)===null||i===void 0||i.call(a,o)}),_defineProperty(_assertThisInitialized(e),"onLoadedMetadata",function(o){var i,a;(i=(a=e.props).onLoadedMetadata)===null||i===void 0||i.call(a,o)}),_defineProperty(_assertThisInitialized(e),"onVolumeChanged",function(o){var i,a;(i=(a=e.props).onVolumeChanged)===null||i===void 0||i.call(a,o)}),e}return _createClass(ReactAudioPlayer,[{key:"componentDidMount",value:function(){var e=this.audioEl.current;e&&(this.updateVolume(this.props.volume),e.addEventListener("error",this.onError),e.addEventListener("canplay",this.onCanPlay),e.addEventListener("canplaythrough",this.onCanPlayThrough),e.addEventListener("play",this.onPlay),e.addEventListener("abort",this.onAbort),e.addEventListener("ended",this.onEnded),e.addEventListener("pause",this.onPause),e.addEventListener("seeked",this.onSeeked),e.addEventListener("loadedmetadata",this.onLoadedMetadata),e.addEventListener("volumechange",this.onVolumeChanged))}},{key:"componentWillUnmount",value:function(){var e=this.audioEl.current;e&&(e.removeEventListener("error",this.onError),e.removeEventListener("canplay",this.onCanPlay),e.removeEventListener("canplaythrough",this.onCanPlayThrough),e.removeEventListener("play",this.onPlay),e.removeEventListener("abort",this.onAbort),e.removeEventListener("ended",this.onEnded),e.removeEventListener("pause",this.onPause),e.removeEventListener("seeked",this.onSeeked),e.removeEventListener("loadedmetadata",this.onLoadedMetadata),e.removeEventListener("volumechange",this.onVolumeChanged))}},{key:"componentDidUpdate",value:function(e){this.updateVolume(this.props.volume)}},{key:"setListenTrack",value:function(){var e=this;if(!this.listenTracker){var t=this.props.listenInterval;this.listenTracker=window.setInterval(function(){var r,n;e.audioEl.current&&((r=(n=e.props).onListen)===null||r===void 0||r.call(n,e.audioEl.current.currentTime))},t)}}},{key:"updateVolume",value:function(e){var t=this.audioEl.current;t!==null&&typeof e=="number"&&e!==(t==null?void 0:t.volume)&&(t.volume=e)}},{key:"clearListenTrack",value:function(){this.listenTracker&&(clearInterval(this.listenTracker),delete this.listenTracker)}},{key:"render",value:function(){var e=this.props.children||react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Your browser does not support the ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",null,"audio")," element."),t=this.props.controls!==!1,r=this.props.title?this.props.title:this.props.src,n={};return this.props.controlsList&&(n.controlsList=this.props.controlsList),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("audio",_extends({autoPlay:this.props.autoPlay,className:"react-audio-player ".concat(this.props.className),controls:t,crossOrigin:this.props.crossOrigin,id:this.props.id,loop:this.props.loop,muted:this.props.muted,preload:this.props.preload,ref:this.audioEl,src:this.props.src,style:this.props.style,title:r},n),e)}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),ReactAudioPlayer}(react__WEBPACK_IMPORTED_MODULE_0__.Component);_defineProperty(ReactAudioPlayer,"propTypes",void 0),_defineProperty(ReactAudioPlayer,"defaultProps",void 0),ReactAudioPlayer.defaultProps={autoPlay:!1,children:null,className:"",controls:!1,controlsList:"",id:"",listenInterval:1e4,loop:!1,muted:!1,onAbort:function(){},onCanPlay:function(){},onCanPlayThrough:function(){},onEnded:function(){},onError:function(){},onListen:function(){},onPause:function(){},onPlay:function(){},onSeeked:function(){},onVolumeChanged:function(){},onLoadedMetadata:function(){},preload:"metadata",style:{},title:"",volume:1},ReactAudioPlayer.propTypes={autoPlay:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,children:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,controls:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,controlsList:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,crossOrigin:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,id:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,listenInterval:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,loop:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,muted:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,onAbort:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onCanPlay:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onCanPlayThrough:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onEnded:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onError:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onListen:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onLoadedMetadata:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onPause:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onPlay:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onSeeked:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onVolumeChanged:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,preload:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["","none","metadata","auto"]),src:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,style:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string),title:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,volume:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number};var _default=ReactAudioPlayer,reactHotLoader,leaveModule;__webpack_exports__.default=_default,reactHotLoader=typeof reactHotLoaderGlobal<"u"?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(ReactAudioPlayer,"ReactAudioPlayer","/home/justin/Projects/react-audio-player/src/index.tsx"),reactHotLoader.register(_default,"default","/home/justin/Projects/react-audio-player/src/index.tsx")),leaveModule=typeof reactHotLoaderGlobal<"u"?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(3)(module))},function(e,t){e.exports=function(r){if(!r.webpackPolyfill){var n=Object.create(r);n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),Object.defineProperty(n,"exports",{enumerable:!0}),n.webpackPolyfill=1}return n}}]);const ReactAudioPlayer=getDefaultExportFromCjs(bundle);var lib={},pdfobject$1={exports:{}};/**
 *  PDFObject v2.2.12
 *  https://github.com/pipwerks/PDFObject
 *  @license
 *  Copyright (c) 2008-2023 Philip Hutchison
 *  MIT-style license: http://pipwerks.mit-license.org/
 *  UMD module pattern from https://github.com/umdjs/umd/blob/master/templates/returnExports.js
 */(function(e){(function(t,r){e.exports?e.exports=r():t.PDFObject=r()})(commonjsGlobal,function(){if(typeof window>"u"||window.navigator===void 0||window.navigator.userAgent===void 0||window.navigator.mimeTypes===void 0)return!1;let t="2.2.12",r=window.navigator,n=window.navigator.userAgent,o="ActiveXObject"in window,i=window.Promise!==void 0,a=r.mimeTypes["application/pdf"]!==void 0,h=r.platform!==void 0&&r.platform==="MacIntel"&&r.maxTouchPoints!==void 0&&r.maxTouchPoints>1||/Mobi|Tablet|Android|iPad|iPhone/.test(n),w=!h&&r.vendor!==void 0&&/Apple/.test(r.vendor)&&/Safari/.test(n),k=!h&&/irefox/.test(n)&&n.split("rv:").length>1?parseInt(n.split("rv:")[1].split(".")[0],10)>18:!1,O=function(l){var u;try{u=new ActiveXObject(l)}catch{u=null}return u},E=!h&&(i||k||a||o&&function(){return!!(O("AcroPDF.PDF")||O("PDF.PdfCtrl"))}()),A=function(l){let u="",c;if(l){for(c in l)l.hasOwnProperty(c)&&(u+=encodeURIComponent(c)+"="+encodeURIComponent(l[c])+"&");u&&(u="#"+u,u=u.slice(0,u.length-1))}return u},x=function(l,u){return u||console.log("[PDFObject] "+l),!1},F=function(l){for(;l.firstChild;)l.removeChild(l.firstChild)},j=function(l){let u=document.body;return typeof l=="string"?u=document.querySelector(l):window.jQuery!==void 0&&l instanceof jQuery&&l.length?u=l.get(0):l.nodeType!==void 0&&l.nodeType===1&&(u=l),u},M=function(l,u,c,g,s,d,_,C,R,f,P){F(u);let y=c;if(l==="pdfjs"){let m=P.indexOf("?")!==-1?"&":"?";y=P+m+"file="+encodeURIComponent(c)+g}else y+=g;let v=l==="pdfjs"||l==="iframe"?"iframe":"embed",p=document.createElement(v);if(p.className="pdfobject",p.type="application/pdf",p.title=C,p.src=y,_&&(p.id=_),v==="iframe"&&(p.allow="fullscreen",p.frameborder="0"),!R){let m=v==="embed"?"overflow: auto;":"border: none;";u!==document.body?m+="width: "+s+"; height: "+d+";":m+="position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%;",p.style.cssText=m}let S=["className","type","title","src","style","id","allow","frameborder"];return f&&f.key&&S.indexOf(f.key)===-1&&p.setAttribute(f.key,typeof f.value<"u"?f.value:""),u.classList.add("pdfobject-container"),u.appendChild(p),u.getElementsByTagName(v)[0]},T=function(l,u,c){let g=u||!1,s=c||{},d=typeof s.id=="string"?s.id:"",_=s.page||!1,C=s.pdfOpenParams||{},R=typeof s.fallbackLink=="string"||typeof s.fallbackLink=="boolean"?s.fallbackLink:!0,f=s.width||"100%",P=s.height||"100%",y=s.title||"Embedded PDF",v=typeof s.assumptionMode=="boolean"?s.assumptionMode:!0,p=typeof s.forcePDFJS=="boolean"?s.forcePDFJS:!1,S=typeof s.supportRedirect=="boolean"?s.supportRedirect:!1,m=typeof s.omitInlineStyles=="boolean"?s.omitInlineStyles:!1,B=typeof s.suppressConsole=="boolean"?s.suppressConsole:!1,z=typeof s.forceIframe=="boolean"?s.forceIframe:!1,L=s.PDFJS_URL||!1,b=j(g),K="",I="",U=s.customAttribute||{},V="<p>This browser does not support inline PDFs. Please download the PDF to view it: <a href='[url]'>Download PDF</a></p>";return typeof l!="string"?x("URL is not valid",B):b?(_&&(C.page=_),I=A(C),p&&L?M("pdfjs",b,l,I,f,P,d,y,m,U,L):E||v&&!h?M(z||S||w?"iframe":"embed",b,l,I,f,P,d,y,m,U):L?M("pdfjs",b,l,I,f,P,d,y,m,U,L):(R&&(K=typeof R=="string"?R:V,b.innerHTML=K.replace(/\[url\]/g,l)),x("This browser does not support embedded PDFs",B))):x("Target element cannot be determined",B)};return{embed:function(l,u,c){return T(l,u,c)},pdfobjectversion:function(){return t}(),supportsPDFs:function(){return E}()}})})(pdfobject$1);var pdfobjectExports=pdfobject$1.exports,__extends=commonjsGlobal&&commonjsGlobal.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,o){n.__proto__=o}||function(n,o){for(var i in o)o.hasOwnProperty(i)&&(n[i]=o[i])},e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),__assign=commonjsGlobal&&commonjsGlobal.__assign||function(){return __assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},__assign.apply(this,arguments)},__rest=commonjsGlobal&&commonjsGlobal.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};Object.defineProperty(lib,"__esModule",{value:!0});var PDFObject_1=lib.PDFObject=void 0,React=reactExports,pdfobject=pdfobjectExports,PDFObject=function(e){__extends(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.embed=function(){var n=r.props,o=n.url,i=n.containerId;n.containerProps;var a=__rest(n,["url","containerId","containerProps"]);pdfobject&&pdfobject.embed(o,"#"+i,a)},r}return t.pdfobjectversion=function(){return pdfobject.pdfobjectversion},t.supportsPDFs=function(){return pdfobject.supportsPDFs},t.prototype.componentDidMount=function(){this.embed()},t.prototype.componentDidUpdate=function(r){r.url!==this.props.url&&this.embed()},t.prototype.render=function(){return React.createElement("div",__assign({},this.props.containerProps,{id:this.props.containerId}))},t.defaultProps={width:"100%",height:"100%",containerId:"pdfobject",forcePDFJS:!1,assumptionMode:!0},t}(React.PureComponent);PDFObject_1=lib.PDFObject=PDFObject;pdfjs.GlobalWorkerOptions.workerSrc=`//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;const DocumentReaderComponent=e=>{var n;const[t,r]=reactExports.useState(900);return reactExports.useState(),reactExports.useState(1),reactExports.useState(!1),reactExports.useEffect(()=>{r(window.innerWidth)},[e.randKey]),jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{children:jsxRuntimeExports.jsx(PDFObject_1,{url:((n=e.file)==null?void 0:n.file)+"#toolbar=0",height:"90vh",assumptionMode:!0,pdfOpenParams:{view:"Fit",pagemode:"none"}})})},videoReact="",VideoFilePlayerComponent=e=>{var t;return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{children:jsxRuntimeExports.jsx(lib$1.Player,{fluid:!0,aspectRatio:"1110:680",preload:"auto",autoPlay:!0,children:jsxRuntimeExports.jsx("source",{src:(t=e.file)==null?void 0:t.file})})})},{Title,Text}=Typography,FileInfoComponent=e=>{const[t,r]=reactExports.useState(),[n,o]=reactExports.useState([]),[i,a]=reactExports.useState(!1),[D,h]=reactExports.useState(!1),[w,k]=reactExports.useState(!0),[O,W]=reactExports.useState(!0),[E]=Form.useForm(),[A,x]=reactExports.useState(!1),[F,j]=reactExports.useState(!1),T=!Grid.useBreakpoint().lg,l=async s=>{const{data:d}=await gqlDataProvider.custom({url:"",method:"post",meta:{operation:"deleteFileTag",variables:{tagId:{value:s,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(_t.error("Failed to Delete Tag"),{data:null})).then(_=>_);d&&(d.success?(_t.success(d.message),c()):_t.error(d.message)),j(!1)},u=async s=>{const{data:d}=await gqlDataProvider.custom({url:"",method:"post",meta:{operation:"addFileTag",variables:{fileId:{value:e.id,type:"Int",required:!0},tag:{value:s.tag,type:"String",required:!0}},fields:["success","message"]}}).catch(()=>(_t.error("Failed to load file"),{data:null})).then(_=>_);d&&(d.success?(_t.success(d.message),c()):_t.error(d.message)),j(!1)},c=async()=>{const{data:s}=await gqlDataProvider.custom({url:"",method:"get",meta:{operation:"fileTags",variables:{fileId:{value:e.id,type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:driveFileTagsDataSet}]}}).catch(()=>(_t.error("Failed to load file"),{data:null})).then(d=>d);s&&o(s.results)},g=async s=>{const{data:d}=await gqlDataProvider.custom({url:"",method:"get",meta:{operation:"file",variables:{id:{value:s,type:"Int",required:!0}},fields:filesDataSet}}).catch(()=>(_t.error("Failed to load file"),{data:null})).then(_=>_);d&&r(d),k(!1)};return reactExports.useEffect(()=>{g(e.id),c()},[e.id]),jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsxs(Spin,{spinning:w,children:[t&&(t==null?void 0:t.canRead)&&jsxRuntimeExports.jsx("div",{style:{marginTop:10},children:jsxRuntimeExports.jsx("a",{onClick:()=>a(!0),children:jsxRuntimeExports.jsx(Button,{size:"large",block:!0,children:"Open in Read Mode"})})}),t&&(t==null?void 0:t.isVideo)&&jsxRuntimeExports.jsx("div",{style:{marginTop:10},children:jsxRuntimeExports.jsx("a",{onClick:()=>h(!0),children:jsxRuntimeExports.jsx(Button,{size:"large",icon:jsxRuntimeExports.jsx(PlayCircleFilled,{}),block:!0,children:"Play Video"})})}),t&&(t==null?void 0:t.isAudio)&&jsxRuntimeExports.jsxs("div",{style:{marginBottom:20},children:[jsxRuntimeExports.jsx("h3",{style:{fontWeight:"bolder"},children:"Audio File Player"}),jsxRuntimeExports.jsx(Spin,{spinning:O,children:jsxRuntimeExports.jsx(ReactAudioPlayer,{src:t==null?void 0:t.file,autoPlay:!0,controls:!0,style:{width:"100%"},id:e.id,crossOrigin:"*",onLoadedMetadata:()=>{W(!1)}})})]}),jsxRuntimeExports.jsxs(Title,{level:5,children:["File Name ",t==null?void 0:t.isAudio]}),jsxRuntimeExports.jsx(Text,{children:t==null?void 0:t.title}),jsxRuntimeExports.jsx(Title,{level:5,children:"File Size"}),jsxRuntimeExports.jsx(Text,{children:t==null?void 0:t.size}),jsxRuntimeExports.jsx(Title,{level:5,children:"File Description"}),jsxRuntimeExports.jsx(Text,{children:t==null?void 0:t.description}),jsxRuntimeExports.jsx(Title,{level:5,children:"Drive Author"}),jsxRuntimeExports.jsx(Text,{children:t==null?void 0:t.author.fullName}),jsxRuntimeExports.jsx("div",{style:{marginTop:10},children:jsxRuntimeExports.jsx("a",{href:t==null?void 0:t.file,target:"_blank",download:!0,children:jsxRuntimeExports.jsxs(Button,{size:"large",block:!0,children:["Download(",t==null?void 0:t.size,")"]})})}),jsxRuntimeExports.jsx("div",{style:{marginTop:10},children:jsxRuntimeExports.jsxs(Card,{title:jsxRuntimeExports.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[jsxRuntimeExports.jsx("span",{children:"File Tags"}),jsxRuntimeExports.jsx("span",{children:jsxRuntimeExports.jsx(Popconfirm,{destroyTooltipOnHide:!1,visible:F,title:jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx("span",{children:"Adding File Tag"}),jsxRuntimeExports.jsx("div",{children:jsxRuntimeExports.jsx(Form,{layout:"vertical",form:E,onFinish:s=>{u(s)},requiredMark:!0,autoComplete:"off",children:jsxRuntimeExports.jsx(Form.Item,{name:"tag",label:"Tag",help:"Tag must be atleast more than 3 letters",rules:[{required:!0,type:"string"}],children:jsxRuntimeExports.jsx(Input,{size:"large",placeholder:"Enter Tag ...",onChange:s=>{s.target.value.length>3?x(!0):x(!1)}})})})})]}),onConfirm:()=>{E.submit()},onCancel:()=>{E.resetFields(),x(!1),j(!1)},okText:"Yes",cancelText:"No",okButtonProps:{disabled:!A},onVisibleChange:s=>{s&&(E.resetFields(),x(!1))},overlayStyle:{zIndex:9999},children:jsxRuntimeExports.jsx(Button,{size:"large",icon:jsxRuntimeExports.jsx(PlusOutlined,{}),onClick:()=>j(!0)})})})]}),children:[n.length===0&&jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{children:jsxRuntimeExports.jsx(Empty,{description:jsxRuntimeExports.jsx("span",{children:"No tags found"})})}),n.map(s=>jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{children:jsxRuntimeExports.jsx(Popconfirm,{title:"Remove this Tag?",onConfirm:()=>l(parseInt(s.id.toString())),okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:jsxRuntimeExports.jsx("a",{children:jsxRuntimeExports.jsx(Tag,{color:"green",style:{fontSize:16},children:s.tag.name})})})}))]})})]}),jsxRuntimeExports.jsx(DrawerComponent,{title:t==null?void 0:t.title,anchor:"right",width:T?"100vw":"80vw",onClose:s=>a(s),open:i,children:jsxRuntimeExports.jsx(DocumentReaderComponent,{downloadable:!0,file:t,randKey:Math.random()})}),jsxRuntimeExports.jsx(ModalComponent,{title:t==null?void 0:t.title,open:D,width:T?"100vw":"60vw",onClose:s=>h(s),children:jsxRuntimeExports.jsx(VideoFilePlayerComponent,{file:t,random:Math.random()})})]})},FileItemComponent=e=>{const{push:t}=me();return jsxRuntimeExports.jsx("div",{style:{background:"white",marginBottom:e.min?0:5,paddingLeft:10,paddingTop:e.min?2:10,borderBottom:"1px solid #ddd",borderLeft:e.item.isAuthor?"1px solid green":"1px solid red"},children:jsxRuntimeExports.jsx(List.Item,{style:{margin:0,padding:0},actions:[jsxRuntimeExports.jsx(Dropdown,{trigger:["click"],overlay:jsxRuntimeExports.jsxs(Menu,{children:[e.item.canDelete?jsxRuntimeExports.jsx(Popconfirm,{title:"Delete the file?",description:"Are you sure to delete this file?",onConfirm:()=>e.handleDelete(parseInt(e.item.id.toString())),okText:"Yes",cancelText:"No",disabled:!e.item.canDelete,children:jsxRuntimeExports.jsx(Menu.Item,{disabled:!e.item.canDelete,icon:jsxRuntimeExports.jsx(DeleteOutlined,{}),children:jsxRuntimeExports.jsx("a",{children:"Delete"})})}):jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{}),jsxRuntimeExports.jsx(Menu.Item,{icon:jsxRuntimeExports.jsx(DownloadOutlined,{}),children:jsxRuntimeExports.jsx("a",{target:"_blank",href:e.item.file,rel:"noopener noreferrer",download:!0,children:"Download"})}),jsxRuntimeExports.jsx(Menu.Item,{icon:jsxRuntimeExports.jsx(AiOutlineShareAlt,{}),onClick:()=>e.handleShareFile(e.item),children:jsxRuntimeExports.jsx("a",{children:"Share"})}),e.item.isPublic&&e.item.isAuthor&&e.item.canManage?jsxRuntimeExports.jsx(Menu.Item,{icon:jsxRuntimeExports.jsx(SecurityScanOutlined,{}),onClick:()=>e.handleChangePrivate(e.item.id,!1),children:jsxRuntimeExports.jsx("a",{children:"Make Private"})}):jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{}),!e.item.isPublic&&e.item.isAuthor&&e.item.canManage?jsxRuntimeExports.jsx(Menu.Item,{icon:jsxRuntimeExports.jsx(SecurityScanOutlined,{}),onClick:()=>e.handleChangePrivate(e.item.id,!0),children:jsxRuntimeExports.jsx("a",{children:"Make Public"})}):jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{}),jsxRuntimeExports.jsx(Menu.Item,{icon:jsxRuntimeExports.jsx(InfoCircleOutlined,{}),children:jsxRuntimeExports.jsx("a",{children:"Report"})})]}),overlayStyle:{zIndex:9999},children:jsxRuntimeExports.jsx("a",{className:"ant-dropdown-link",onClick:r=>r.preventDefault(),children:jsxRuntimeExports.jsx(MoreOutlined,{style:{color:"orange",fontSize:28,fontWeight:"bold"}})})})],children:jsxRuntimeExports.jsx(List.Item.Meta,{style:{margin:0,padding:"0px 10px 10px 0"},avatar:jsxRuntimeExports.jsx(Avatar,{src:e.item.icon,alt:e.item.title.charAt(0)}),title:e.item.isImage?jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx(Tooltip,{title:"Click to View Image",color:"red",placement:"top",children:jsxRuntimeExports.jsx("a",{onClick:()=>e.handleMakeImageVisible(e.item),children:e.item.title})}),jsxRuntimeExports.jsx(Button,{onClick:()=>e.handleShowFileInfoDrawer(e.item),style:{marginLeft:10},danger:!0,children:"Details Dialog"}),jsxRuntimeExports.jsx(Image,{style:{display:"none"},src:e.item.file,preview:{visible:e.item.imageVisible,src:e.item.file,onVisibleChange:r=>{e.handleMakeImageNotVisible(e.item)}}})]}):jsxRuntimeExports.jsx("a",{onClick:()=>e.handleShowFileInfoDrawer(e.item),children:e.item.title}),description:jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx("span",{children:e.item.description}),e.item.tags.length>0&&jsxRuntimeExports.jsx(Row,{style:{marginBottom:e.min?0:3},children:jsxRuntimeExports.jsx(Col,{children:e.item.tags.map(r=>jsxRuntimeExports.jsx(Tooltip,{title:"File Tag",placement:"top",children:jsxRuntimeExports.jsx(Tag,{color:"orange",children:r.tag.name},"tag-"+r.id)}))})}),e.item.drive&&e.showDrive&&jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{children:jsxRuntimeExports.jsx(Row,{children:jsxRuntimeExports.jsxs(Col,{children:[jsxRuntimeExports.jsxs(Tag,{color:"green",children:["Drive: ",e.item.drive.name]}),jsxRuntimeExports.jsx(Tooltip,{title:"Open Drive:"+e.item.drive.name,children:jsxRuntimeExports.jsx(Button,{icon:jsxRuntimeExports.jsx(FolderOpenOutlined,{}),onClick:()=>{t("/odrive/drive/"+e.item.drive.id+"/"+e.item.drive.code+"/files")}})})]})})}),jsxRuntimeExports.jsxs("span",{children:[!e.item.isAuthor&&jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{children:jsxRuntimeExports.jsxs("span",{style:{color:"orange"},children:[jsxRuntimeExports.jsx(Avatar,{size:"small",style:{marginLeft:5},src:e.item.author.pic}),jsxRuntimeExports.jsx("span",{style:{marginLeft:3,marginRight:3},children:e.item.author.fullName})]})}),e.item.isAuthor&&jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{children:jsxRuntimeExports.jsx("span",{style:{color:"orange"},children:"Uploaded By:You"})}),jsxRuntimeExports.jsxs("span",{style:{color:"orange",marginLeft:3},children:["|",jsxRuntimeExports.jsx("span",{style:{marginLeft:2},children:e.item.size})]}),jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{children:jsxRuntimeExports.jsxs("span",{style:{marginLeft:3},children:["|",jsxRuntimeExports.jsx(ReactTimeAgo,{date:new Date(e.item.created),locale:"en-US"})]})})]})]})})},"file-"+e.item.id)},"file-div"+e.item.id)};export{FileInfoComponent as F,FileItemComponent as a};
