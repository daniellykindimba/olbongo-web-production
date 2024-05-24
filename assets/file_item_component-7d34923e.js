import{hM as propTypesExports,r as reactExports,g1 as getDefaultExportFromCjs,j as jsxRuntimeExports,aT as Form,cv as useOlbongoStore,a8 as Spin,av as Button,a1 as Input,cf as PlusOutlined,aS as Empty,aZ as Tag,cm as ModalComponent,g as gqlDataProvider,_ as _t,c as ce,aR as Dropdown,aU as Menu,af as Tooltip,aW as Row,aP as Col}from"./index-3ee95507.js";import{l as lib}from"./index-e840324c.js";import{D as DrawerComponent}from"./index-ade8483e.js";import{a as driveFileTagsDataSet,f as filesDataSet}from"./data_objects-d21e859c.js";import{P as PdfDocumentViewer}from"./pdf_document_viewer-c63e7f7d.js";import{G as Grid}from"./index-f53a7735.js";import{P as PlayCircleFilled,S as SecurityScanOutlined}from"./SecurityScanOutlined-4da01689.js";import{C as Card}from"./index-94377945.js";import{P as Popconfirm}from"./index-83878f15.js";import{T as Typography}from"./index-be2a73ad.js";import{b as AiOutlineShareAlt}from"./index.esm-4bdeb277.js";import{L as List}from"./index-d5e9db55.js";import{A as Avatar}from"./index-8d1d76b6.js";import{I as Image}from"./index-dfc68cd1.js";import{D as DeleteOutlined}from"./DeleteOutlined-1abe9ead.js";import{D as DownloadOutlined}from"./DownloadOutlined-e311890a.js";import{I as InfoCircleOutlined}from"./InfoCircleOutlined-638c82a1.js";import{M as MoreOutlined}from"./MoreOutlined-d4a00d34.js";import{S as SaveOutlined}from"./SaveOutlined-44e0f9d2.js";var bundle=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(r,i,o){n.o(r,i)||Object.defineProperty(r,i,{enumerable:!0,get:o})},n.r=function(r){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},n.t=function(r,i){if(1&i&&(r=n(r)),8&i||4&i&&typeof r=="object"&&r&&r.__esModule)return r;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:r}),2&i&&typeof r!="string")for(var s in r)n.d(o,s,(function(p){return r[p]}).bind(null,s));return o},n.n=function(r){var i=r&&r.__esModule?function(){return r.default}:function(){return r};return n.d(i,"a",i),i},n.o=function(r,i){return Object.prototype.hasOwnProperty.call(r,i)},n.p="",n(n.s=2)}([function(e,t){e.exports=propTypesExports},function(e,t){e.exports=reactExports},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),(function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),enterModule;function _typeof(e){return(_typeof=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _inherits(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n})(e,t)}function _createSuper(e){return function(){var t,n=_getPrototypeOf(e);if(_isNativeReflectConstruct()){var r=_getPrototypeOf(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return _possibleConstructorReturn(this,t)}}function _possibleConstructorReturn(e,t){return!t||_typeof(t)!=="object"&&typeof t!="function"?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}enterModule=typeof reactHotLoaderGlobal<"u"?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module),typeof reactHotLoaderGlobal<"u"&&reactHotLoaderGlobal.default.signature;var ReactAudioPlayer=function(_Component){_inherits(ReactAudioPlayer,_Component);var _super=_createSuper(ReactAudioPlayer);function ReactAudioPlayer(){var e;_classCallCheck(this,ReactAudioPlayer);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return _defineProperty(_assertThisInitialized(e=_super.call.apply(_super,[this].concat(n))),"audioEl",react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef()),_defineProperty(_assertThisInitialized(e),"listenTracker",void 0),_defineProperty(_assertThisInitialized(e),"onError",function(i){var o,s;return(o=(s=e.props).onError)===null||o===void 0?void 0:o.call(s,i)}),_defineProperty(_assertThisInitialized(e),"onCanPlay",function(i){var o,s;return(o=(s=e.props).onCanPlay)===null||o===void 0?void 0:o.call(s,i)}),_defineProperty(_assertThisInitialized(e),"onCanPlayThrough",function(i){var o,s;return(o=(s=e.props).onCanPlayThrough)===null||o===void 0?void 0:o.call(s,i)}),_defineProperty(_assertThisInitialized(e),"onPlay",function(i){var o,s;e.setListenTrack(),(o=(s=e.props).onPlay)===null||o===void 0||o.call(s,i)}),_defineProperty(_assertThisInitialized(e),"onAbort",function(i){var o,s;e.clearListenTrack(),(o=(s=e.props).onAbort)===null||o===void 0||o.call(s,i)}),_defineProperty(_assertThisInitialized(e),"onEnded",function(i){var o,s;e.clearListenTrack(),(o=(s=e.props).onEnded)===null||o===void 0||o.call(s,i)}),_defineProperty(_assertThisInitialized(e),"onPause",function(i){var o,s;e.clearListenTrack(),(o=(s=e.props).onPause)===null||o===void 0||o.call(s,i)}),_defineProperty(_assertThisInitialized(e),"onSeeked",function(i){var o,s;(o=(s=e.props).onSeeked)===null||o===void 0||o.call(s,i)}),_defineProperty(_assertThisInitialized(e),"onLoadedMetadata",function(i){var o,s;(o=(s=e.props).onLoadedMetadata)===null||o===void 0||o.call(s,i)}),_defineProperty(_assertThisInitialized(e),"onVolumeChanged",function(i){var o,s;(o=(s=e.props).onVolumeChanged)===null||o===void 0||o.call(s,i)}),e}return _createClass(ReactAudioPlayer,[{key:"componentDidMount",value:function(){var e=this.audioEl.current;e&&(this.updateVolume(this.props.volume),e.addEventListener("error",this.onError),e.addEventListener("canplay",this.onCanPlay),e.addEventListener("canplaythrough",this.onCanPlayThrough),e.addEventListener("play",this.onPlay),e.addEventListener("abort",this.onAbort),e.addEventListener("ended",this.onEnded),e.addEventListener("pause",this.onPause),e.addEventListener("seeked",this.onSeeked),e.addEventListener("loadedmetadata",this.onLoadedMetadata),e.addEventListener("volumechange",this.onVolumeChanged))}},{key:"componentWillUnmount",value:function(){var e=this.audioEl.current;e&&(e.removeEventListener("error",this.onError),e.removeEventListener("canplay",this.onCanPlay),e.removeEventListener("canplaythrough",this.onCanPlayThrough),e.removeEventListener("play",this.onPlay),e.removeEventListener("abort",this.onAbort),e.removeEventListener("ended",this.onEnded),e.removeEventListener("pause",this.onPause),e.removeEventListener("seeked",this.onSeeked),e.removeEventListener("loadedmetadata",this.onLoadedMetadata),e.removeEventListener("volumechange",this.onVolumeChanged))}},{key:"componentDidUpdate",value:function(e){this.updateVolume(this.props.volume)}},{key:"setListenTrack",value:function(){var e=this;if(!this.listenTracker){var t=this.props.listenInterval;this.listenTracker=window.setInterval(function(){var n,r;e.audioEl.current&&((n=(r=e.props).onListen)===null||n===void 0||n.call(r,e.audioEl.current.currentTime))},t)}}},{key:"updateVolume",value:function(e){var t=this.audioEl.current;t!==null&&typeof e=="number"&&e!==(t==null?void 0:t.volume)&&(t.volume=e)}},{key:"clearListenTrack",value:function(){this.listenTracker&&(clearInterval(this.listenTracker),delete this.listenTracker)}},{key:"render",value:function(){var e=this.props.children||react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Your browser does not support the ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",null,"audio")," element."),t=this.props.controls!==!1,n=this.props.title?this.props.title:this.props.src,r={};return this.props.controlsList&&(r.controlsList=this.props.controlsList),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("audio",_extends({autoPlay:this.props.autoPlay,className:"react-audio-player ".concat(this.props.className),controls:t,crossOrigin:this.props.crossOrigin,id:this.props.id,loop:this.props.loop,muted:this.props.muted,preload:this.props.preload,ref:this.audioEl,src:this.props.src,style:this.props.style,title:n},r),e)}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),ReactAudioPlayer}(react__WEBPACK_IMPORTED_MODULE_0__.Component);_defineProperty(ReactAudioPlayer,"propTypes",void 0),_defineProperty(ReactAudioPlayer,"defaultProps",void 0),ReactAudioPlayer.defaultProps={autoPlay:!1,children:null,className:"",controls:!1,controlsList:"",id:"",listenInterval:1e4,loop:!1,muted:!1,onAbort:function(){},onCanPlay:function(){},onCanPlayThrough:function(){},onEnded:function(){},onError:function(){},onListen:function(){},onPause:function(){},onPlay:function(){},onSeeked:function(){},onVolumeChanged:function(){},onLoadedMetadata:function(){},preload:"metadata",style:{},title:"",volume:1},ReactAudioPlayer.propTypes={autoPlay:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,children:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,controls:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,controlsList:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,crossOrigin:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,id:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,listenInterval:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,loop:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,muted:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,onAbort:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onCanPlay:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onCanPlayThrough:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onEnded:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onError:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onListen:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onLoadedMetadata:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onPause:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onPlay:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onSeeked:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onVolumeChanged:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,preload:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["","none","metadata","auto"]),src:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,style:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string),title:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,volume:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number};var _default=ReactAudioPlayer,reactHotLoader,leaveModule;__webpack_exports__.default=_default,reactHotLoader=typeof reactHotLoaderGlobal<"u"?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(ReactAudioPlayer,"ReactAudioPlayer","/home/justin/Projects/react-audio-player/src/index.tsx"),reactHotLoader.register(_default,"default","/home/justin/Projects/react-audio-player/src/index.tsx")),leaveModule=typeof reactHotLoaderGlobal<"u"?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(3)(module))},function(e,t){e.exports=function(n){if(!n.webpackPolyfill){var r=Object.create(n);r.children||(r.children=[]),Object.defineProperty(r,"loaded",{enumerable:!0,get:function(){return r.l}}),Object.defineProperty(r,"id",{enumerable:!0,get:function(){return r.i}}),Object.defineProperty(r,"exports",{enumerable:!0}),r.webpackPolyfill=1}return r}}]);const ReactAudioPlayer=getDefaultExportFromCjs(bundle),videoReact="",VideoFilePlayerComponent=e=>{var t;return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{children:jsxRuntimeExports.jsx(lib.Player,{fluid:!0,aspectRatio:"1110:680",preload:"auto",autoPlay:!0,children:jsxRuntimeExports.jsx("source",{src:(t=e.file)==null?void 0:t.file})})})},{Title,Text}=Typography,FileInfoComponent=e=>{const[t,n]=reactExports.useState(),[r,i]=reactExports.useState([]),[o,s]=reactExports.useState(!1),[p,m]=reactExports.useState(!1),[E,h]=reactExports.useState(!0),[j,y]=reactExports.useState(!0),[d]=Form.useForm(),[g,c]=reactExports.useState(!1),[R,_]=reactExports.useState(!1),P=Grid.useBreakpoint(),v=useOlbongoStore(a=>a.setReaderFullWidth),f=!P.lg,M=async a=>{const{data:l}=await gqlDataProvider.custom({url:"",method:"post",meta:{operation:"deleteFileTag",variables:{tagId:{value:a,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(_t.error("Failed to Delete Tag"),{data:null})).then(u=>u);l&&(l.success?(_t.success(l.message),x()):_t.error(l.message)),_(!1)},T=async a=>{const{data:l}=await gqlDataProvider.custom({url:"",method:"post",meta:{operation:"addFileTag",variables:{fileId:{value:e.id,type:"Int",required:!0},tag:{value:a.tag,type:"String",required:!0}},fields:["success","message"]}}).catch(()=>(_t.error("Failed to load file"),{data:null})).then(u=>u);l&&(l.success?(_t.success(l.message),x()):_t.error(l.message)),_(!1)},x=async()=>{const{data:a}=await gqlDataProvider.custom({url:"",method:"get",meta:{operation:"fileTags",variables:{fileId:{value:e.id,type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:driveFileTagsDataSet}]}}).catch(()=>(_t.error("Failed to load file"),{data:null})).then(l=>l);a&&i(a.results)},D=async a=>{const{data:l}=await gqlDataProvider.custom({url:"",method:"get",meta:{operation:"file",variables:{id:{value:a,type:"Int",required:!0}},fields:filesDataSet}}).catch(()=>(_t.error("Failed to load file"),{data:null})).then(u=>u);l&&n(l),h(!1)};return reactExports.useEffect(()=>{D(e.id),x()},[e.id]),jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsxs(Spin,{spinning:E,children:[t&&(t==null?void 0:t.canRead)&&jsxRuntimeExports.jsx("div",{style:{marginTop:10},children:jsxRuntimeExports.jsx("a",{onClick:()=>s(!0),children:jsxRuntimeExports.jsx(Button,{size:"large",block:!0,children:"Open in Read Mode"})})}),t&&(t==null?void 0:t.isVideo)&&jsxRuntimeExports.jsx("div",{style:{marginTop:10},children:jsxRuntimeExports.jsx("a",{onClick:()=>m(!0),children:jsxRuntimeExports.jsx(Button,{size:"large",icon:jsxRuntimeExports.jsx(PlayCircleFilled,{}),block:!0,children:"Play Video"})})}),t&&(t==null?void 0:t.isAudio)&&jsxRuntimeExports.jsxs("div",{style:{marginBottom:20},children:[jsxRuntimeExports.jsx("h3",{style:{fontWeight:"bolder"},children:"Audio File Player"}),jsxRuntimeExports.jsx(Spin,{spinning:j,children:jsxRuntimeExports.jsx(ReactAudioPlayer,{src:t==null?void 0:t.file,autoPlay:!0,controls:!0,style:{width:"100%"},id:e.id,crossOrigin:"*",onLoadedMetadata:()=>{y(!1)}})})]}),jsxRuntimeExports.jsxs(Title,{level:5,children:["File Name ",t==null?void 0:t.isAudio]}),jsxRuntimeExports.jsx(Text,{children:t==null?void 0:t.title}),jsxRuntimeExports.jsx(Title,{level:5,children:"File Size"}),jsxRuntimeExports.jsx(Text,{children:t==null?void 0:t.size}),jsxRuntimeExports.jsx(Title,{level:5,children:"File Description"}),jsxRuntimeExports.jsx(Text,{children:t==null?void 0:t.description}),jsxRuntimeExports.jsx(Title,{level:5,children:"Drive Author"}),jsxRuntimeExports.jsx(Text,{children:t==null?void 0:t.author.fullName}),jsxRuntimeExports.jsx("div",{style:{marginTop:10},children:jsxRuntimeExports.jsx("a",{href:t==null?void 0:t.file,target:"_blank",download:!0,children:jsxRuntimeExports.jsxs(Button,{size:"large",block:!0,children:["Download(",t==null?void 0:t.size,")"]})})}),jsxRuntimeExports.jsx("div",{style:{marginTop:10},children:jsxRuntimeExports.jsxs(Card,{title:jsxRuntimeExports.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[jsxRuntimeExports.jsx("span",{children:"File Tags"}),jsxRuntimeExports.jsx("span",{children:jsxRuntimeExports.jsx(Popconfirm,{destroyTooltipOnHide:!1,visible:R,title:jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx("span",{children:"Adding File Tag"}),jsxRuntimeExports.jsx("div",{children:jsxRuntimeExports.jsx(Form,{layout:"vertical",form:d,onFinish:a=>{T(a)},requiredMark:!0,autoComplete:"off",children:jsxRuntimeExports.jsx(Form.Item,{name:"tag",label:"Tag",help:"Tag must be atleast more than 3 letters",rules:[{required:!0,type:"string"}],children:jsxRuntimeExports.jsx(Input,{size:"large",placeholder:"Enter Tag ...",onChange:a=>{a.target.value.length>3?c(!0):c(!1)}})})})})]}),onConfirm:()=>{d.submit()},onCancel:()=>{d.resetFields(),c(!1),_(!1)},okText:"Yes",cancelText:"No",okButtonProps:{disabled:!g},onVisibleChange:a=>{a&&(d.resetFields(),c(!1))},overlayStyle:{zIndex:9999},children:jsxRuntimeExports.jsx(Button,{size:"large",icon:jsxRuntimeExports.jsx(PlusOutlined,{}),onClick:()=>_(!0)})})})]}),children:[r.length===0&&jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{children:jsxRuntimeExports.jsx(Empty,{description:jsxRuntimeExports.jsx("span",{children:"No tags found"})})}),r.map(a=>jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{children:jsxRuntimeExports.jsx(Popconfirm,{title:"Remove this Tag?",onConfirm:()=>M(parseInt(a.id.toString())),okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:jsxRuntimeExports.jsx("a",{children:jsxRuntimeExports.jsx(Tag,{color:"green",style:{fontSize:16},children:a.tag.name})})})}))]})})]}),jsxRuntimeExports.jsx(DrawerComponent,{title:t==null?void 0:t.title,anchor:"right",width:f?"100vw":"80vw",onClose:a=>{v(!1),s(a)},open:o,noOverFlow:!0,children:jsxRuntimeExports.jsx(PdfDocumentViewer,{url:t==null?void 0:t.file})}),jsxRuntimeExports.jsx(ModalComponent,{title:t==null?void 0:t.title,open:p,width:f?"100vw":"60vw",onClose:a=>m(a),children:jsxRuntimeExports.jsx(VideoFilePlayerComponent,{file:t,random:Math.random()})})]})},FileItemComponent=e=>{const{push:t}=ce();return jsxRuntimeExports.jsx("div",{style:{background:"white",marginBottom:e.min?0:5,paddingLeft:10,paddingTop:e.min?2:10,borderBottom:"1px solid #ddd",borderLeft:e.item.isAuthor?"1px solid green":"1px solid red"},children:jsxRuntimeExports.jsx(List.Item,{style:{margin:0,padding:0},actions:[e.actionMenues?jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{children:e.actionMenues.map((n,r)=>jsxRuntimeExports.jsx(Button,{type:"primary",onClick:()=>n.action(e.item.id),children:n.title},"action-menu-"+r))}):jsxRuntimeExports.jsx(Dropdown,{trigger:["click"],overlay:jsxRuntimeExports.jsxs(Menu,{children:[e.item.canDelete&&e.handleDelete?jsxRuntimeExports.jsx(Popconfirm,{title:"Delete the file?",description:"Are you sure to delete this file?",onConfirm:()=>e.handleDelete(parseInt(e.item.id.toString())),okText:"Yes",cancelText:"No",disabled:!e.item.canDelete,children:jsxRuntimeExports.jsx(Menu.Item,{disabled:!e.item.canDelete,icon:jsxRuntimeExports.jsx(DeleteOutlined,{}),children:jsxRuntimeExports.jsx("a",{children:"Delete"})})}):jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{}),jsxRuntimeExports.jsx(Menu.Item,{icon:jsxRuntimeExports.jsx(DownloadOutlined,{}),children:jsxRuntimeExports.jsx("a",{target:"_blank",href:e.item.file,rel:"noopener noreferrer",download:!0,children:"Download"})}),e.handleShareFile&&jsxRuntimeExports.jsx(Menu.Item,{icon:jsxRuntimeExports.jsx(AiOutlineShareAlt,{}),onClick:()=>e.handleShareFile(e.item),children:jsxRuntimeExports.jsx("a",{children:"Share"})}),e.handleChangePrivate&&e.item.isPublic&&e.item.isAuthor&&e.item.canManage?jsxRuntimeExports.jsx(Menu.Item,{icon:jsxRuntimeExports.jsx(SecurityScanOutlined,{}),onClick:()=>e.handleChangePrivate(e.item.id,!1),children:jsxRuntimeExports.jsx("a",{children:"Make Private"})}):jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{}),e.handleChangePrivate&&!e.item.isPublic&&e.item.isAuthor&&e.item.canManage?jsxRuntimeExports.jsx(Menu.Item,{icon:jsxRuntimeExports.jsx(SecurityScanOutlined,{}),onClick:()=>e.handleChangePrivate(e.item.id,!0),children:jsxRuntimeExports.jsx("a",{children:"Make Public"})}):jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{}),e.handleReport&&jsxRuntimeExports.jsx(Menu.Item,{icon:jsxRuntimeExports.jsx(InfoCircleOutlined,{}),children:jsxRuntimeExports.jsx("a",{children:"Report"})})]}),overlayStyle:{zIndex:9999},children:jsxRuntimeExports.jsx("a",{className:"ant-dropdown-link",onClick:n=>n.preventDefault(),children:jsxRuntimeExports.jsx(MoreOutlined,{style:{color:"orange",fontSize:28,fontWeight:"bold"}})})})],children:jsxRuntimeExports.jsx(List.Item.Meta,{style:{margin:0,padding:"0px 10px 10px 0"},avatar:e.compact?jsxRuntimeExports.jsx(Avatar,{icon:e.compactIcon,alt:e.item.title.charAt(0),style:{backgroundColor:"red"}}):jsxRuntimeExports.jsx(Avatar,{src:e.item.icon,alt:e.item.title.charAt(0)}),title:e.item.isImage?jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx(Tooltip,{title:"Click to View Image",color:"red",placement:"top",children:jsxRuntimeExports.jsx("a",{onClick:()=>e.handleMakeImageVisible(e.item),children:e.item.title})}),jsxRuntimeExports.jsx(Button,{onClick:()=>e.handleShowFileInfoDrawer(e.item),style:{marginLeft:10},danger:!0,size:"small",shape:"circle",icon:jsxRuntimeExports.jsx(InfoCircleOutlined,{})}),jsxRuntimeExports.jsx(Image,{style:{display:"none"},src:e.item.file,preview:{visible:e.item.imageVisible,src:e.item.file,onVisibleChange:n=>{e.handleMakeImageNotVisible(e.item)}}})]}):jsxRuntimeExports.jsx("a",{onClick:()=>e.handleShowFileInfoDrawer(e.item),children:e.item.title}),description:e.compact?jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{}):jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx("span",{children:e.item.description}),e.item.tags.length>0&&jsxRuntimeExports.jsx(Row,{style:{marginBottom:e.min?0:3},children:jsxRuntimeExports.jsx(Col,{children:e.item.tags.map(n=>jsxRuntimeExports.jsx(Tooltip,{title:"File Tag",placement:"top",children:jsxRuntimeExports.jsx(Tag,{color:"orange",children:n.tag.name},"tag-"+n.id)}))})}),e.item.drive&&e.showDrive&&jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{children:jsxRuntimeExports.jsx(Row,{children:jsxRuntimeExports.jsxs(Col,{children:[jsxRuntimeExports.jsxs(Tag,{color:"green",children:["Drive: ",e.item.drive.name]}),jsxRuntimeExports.jsx(Tooltip,{title:"Open Drive:"+e.item.drive.name,children:jsxRuntimeExports.jsx(Button,{icon:jsxRuntimeExports.jsx(SaveOutlined,{}),onClick:()=>{t("/odrive/drive/"+e.item.drive.id+"/"+e.item.drive.code+"/files")}})})]})})}),jsxRuntimeExports.jsxs("span",{children:[!e.item.isAuthor&&jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{children:jsxRuntimeExports.jsxs("span",{style:{color:"orange"},children:[jsxRuntimeExports.jsx(Avatar,{size:"small",style:{marginLeft:5},src:e.item.author.pic}),jsxRuntimeExports.jsx("span",{style:{marginLeft:3,marginRight:3},children:e.item.author.fullName})]})}),e.item.isAuthor&&jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{children:jsxRuntimeExports.jsx("span",{style:{color:"orange"},children:"Uploaded By:You"})}),jsxRuntimeExports.jsxs("span",{style:{color:"orange",marginLeft:3},children:["|",jsxRuntimeExports.jsx("span",{style:{marginLeft:2},children:e.item.size})]}),jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{children:jsxRuntimeExports.jsxs("span",{style:{marginLeft:3},children:["|",new Date(e.item.created).toLocaleString()]})})]})]})})},"file-"+e.item.id)},"file-div"+e.item.id)};export{FileInfoComponent as F,FileItemComponent as a};
