import{r as h,fO as ye,gj as ke,da as L,fP as Z,fX as ie,k as B,c as ce,hc as be,fK as le,hb as ue,P as de,fT as m,hu as S,_ as X,O as pe,R as Q,fI as Ce,hv as De,hw as re}from"./index-60f2319e.js";var Se={percent:0,prefixCls:"rc-progress",strokeColor:"#2db7f5",strokeLinecap:"round",strokeWidth:1,trailColor:"#D9D9D9",trailWidth:1,gapPosition:"bottom"},Ee=function(){var a=h.useRef([]),n=h.useRef(null);return h.useEffect(function(){var e=Date.now(),s=!1;a.current.forEach(function(r){if(r){s=!0;var o=r.style;o.transitionDuration=".3s, .3s, .3s, .06s",n.current&&e-n.current<100&&(o.transitionDuration="0s, 0s")}}),s&&(n.current=Date.now())}),a.current},te=0,Fe=ke();function we(){var t;return Fe?(t=te,te+=1):t="TEST_OR_SSR",t}const Pe=function(t){var a=h.useState(),n=ye(a,2),e=n[0],s=n[1];return h.useEffect(function(){s("rc_progress_".concat(we()))},[]),t||e};var ae=function(a){var n=a.bg,e=a.children;return h.createElement("div",{style:{width:"100%",height:"100%",background:n}},e)};function ne(t,a){return Object.keys(t).map(function(n){var e=parseFloat(n),s="".concat(Math.floor(e*a),"%");return"".concat(t[n]," ").concat(s)})}var Ie=h.forwardRef(function(t,a){var n=t.prefixCls,e=t.color,s=t.gradientId,r=t.radius,o=t.style,i=t.ptg,l=t.strokeLinecap,c=t.strokeWidth,u=t.size,p=t.gapDegree,f=e&&L(e)==="object",g=f?"#FFF":void 0,v=u/2,y=h.createElement("circle",{className:"".concat(n,"-circle-path"),r,cx:v,cy:v,stroke:g,strokeLinecap:l,strokeWidth:c,opacity:i===0?0:1,style:o,ref:a});if(!f)return y;var E="".concat(s,"-conic"),b=p?"".concat(180+p/2,"deg"):"0deg",k=ne(e,(360-p)/360),F=ne(e,1),w="conic-gradient(from ".concat(b,", ").concat(k.join(", "),")"),d="linear-gradient(to ".concat(p?"bottom":"top",", ").concat(F.join(", "),")");return h.createElement(h.Fragment,null,h.createElement("mask",{id:E},y),h.createElement("foreignObject",{x:0,y:0,width:u,height:u,mask:"url(#".concat(E,")")},h.createElement(ae,{bg:d},h.createElement(ae,{bg:w}))))}),A=100,H=function(a,n,e,s,r,o,i,l,c,u){var p=arguments.length>10&&arguments[10]!==void 0?arguments[10]:0,f=e/100*360*((360-o)/360),g=o===0?0:{bottom:0,top:180,left:90,right:-90}[i],v=(100-s)/100*n;c==="round"&&s!==100&&(v+=u/2,v>=n&&(v=n-.01));var y=A/2;return{stroke:typeof l=="string"?l:void 0,strokeDasharray:"".concat(n,"px ").concat(a),strokeDashoffset:v+p,transform:"rotate(".concat(r+f+g,"deg)"),transformOrigin:"".concat(y,"px ").concat(y,"px"),transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s",fillOpacity:0}},Re=["id","prefixCls","steps","strokeWidth","trailWidth","gapDegree","gapPosition","trailColor","strokeLinecap","style","className","strokeColor","percent"];function se(t){var a=t??[];return Array.isArray(a)?a:[a]}var Ue=function(a){var n=Z(Z({},Se),a),e=n.id,s=n.prefixCls,r=n.steps,o=n.strokeWidth,i=n.trailWidth,l=n.gapDegree,c=l===void 0?0:l,u=n.gapPosition,p=n.trailColor,f=n.strokeLinecap,g=n.style,v=n.className,y=n.strokeColor,E=n.percent,b=ie(n,Re),k=A/2,F=Pe(e),w="".concat(F,"-gradient"),d=k-o/2,C=Math.PI*2*d,D=c>0?90+c/2:-90,P=C*((360-c)/360),$=L(r)==="object"?r:{count:r,gap:2},I=$.count,M=$.gap,W=se(E),R=se(y),q=R.find(function(T){return T&&L(T)==="object"}),fe=q&&L(q)==="object",x=fe?"butt":f,ve=H(C,P,0,100,D,c,u,p,x,o),Y=Ee(),he=function(){var U=0;return W.map(function(N,j){var z=R[j]||R[R.length-1],O=H(C,P,U,N,D,c,u,z,x,o);return U+=N,h.createElement(Ie,{key:j,color:z,ptg:N,radius:d,prefixCls:s,gradientId:w,style:O,strokeLinecap:x,strokeWidth:o,gapDegree:c,ref:function(K){Y[j]=K},size:A})}).reverse()},ge=function(){var U=Math.round(I*(W[0]/100)),N=100/I,j=0;return new Array(I).fill(null).map(function(z,O){var _=O<=U-1?R[0]:p,K=_&&L(_)==="object"?"url(#".concat(w,")"):void 0,ee=H(C,P,j,N,D,c,u,_,"butt",o,M);return j+=(P-ee.strokeDashoffset+M)*100/P,h.createElement("circle",{key:O,className:"".concat(s,"-circle-path"),r:d,cx:k,cy:k,stroke:K,strokeWidth:o,opacity:1,style:ee,ref:function(me){Y[O]=me}})})};return h.createElement("svg",B({className:ce("".concat(s,"-circle"),v),viewBox:"0 0 ".concat(A," ").concat(A),style:g,id:e,role:"presentation"},b),!I&&h.createElement("circle",{className:"".concat(s,"-circle-trail"),r:d,cx:k,cy:k,stroke:p,strokeLinecap:x,strokeWidth:i||o,style:ve}),I?ge():he())};const G=function(t,a){if(t&&a){var n=Array.isArray(a)?a:a.split(","),e=t.name||"",s=t.type||"",r=s.replace(/\/.*$/,"");return n.some(function(o){var i=o.trim();if(/^\*(\/\*)?$/.test(o))return!0;if(i.charAt(0)==="."){var l=e.toLowerCase(),c=i.toLowerCase(),u=[c];return(c===".jpg"||c===".jpeg")&&(u=[".jpg",".jpeg"]),u.some(function(p){return l.endsWith(p)})}return/\/\*$/.test(i)?r===i.replace(/\/.*$/,""):s===i?!0:/^\w+$/.test(i)?(be(!1,"Upload takes an invalidate 'accept' type '".concat(i,"'.Skip for check.")),!0):!1})}return!0};function je(t,a){var n="cannot ".concat(t.method," ").concat(t.action," ").concat(a.status,"'"),e=new Error(n);return e.status=a.status,e.method=t.method,e.url=t.action,e}function oe(t){var a=t.responseText||t.response;if(!a)return a;try{return JSON.parse(a)}catch{return a}}function Le(t){var a=new XMLHttpRequest;t.onProgress&&a.upload&&(a.upload.onprogress=function(r){r.total>0&&(r.percent=r.loaded/r.total*100),t.onProgress(r)});var n=new FormData;t.data&&Object.keys(t.data).forEach(function(s){var r=t.data[s];if(Array.isArray(r)){r.forEach(function(o){n.append("".concat(s,"[]"),o)});return}n.append(s,r)}),t.file instanceof Blob?n.append(t.filename,t.file,t.file.name):n.append(t.filename,t.file),a.onerror=function(r){t.onError(r)},a.onload=function(){return a.status<200||a.status>=300?t.onError(je(t,a),oe(a)):t.onSuccess(oe(a),a)},a.open(t.method,t.action,!0),t.withCredentials&&"withCredentials"in a&&(a.withCredentials=!0);var e=t.headers||{};return e["X-Requested-With"]!==null&&a.setRequestHeader("X-Requested-With","XMLHttpRequest"),Object.keys(e).forEach(function(s){e[s]!==null&&a.setRequestHeader(s,e[s])}),a.send(n),{abort:function(){a.abort()}}}function Ne(t,a){var n=t.createReader(),e=[];function s(){n.readEntries(function(r){var o=Array.prototype.slice.apply(r);e=e.concat(o);var i=!o.length;i?a(e):s()})}s()}var Oe=function(a,n,e){var s=function r(o,i){o&&(o.path=i||"",o.isFile?o.file(function(l){e(l)&&(o.fullPath&&!l.webkitRelativePath&&(Object.defineProperties(l,{webkitRelativePath:{writable:!0}}),l.webkitRelativePath=o.fullPath.replace(/^\//,""),Object.defineProperties(l,{webkitRelativePath:{writable:!1}})),n([l]))}):o.isDirectory&&Ne(o,function(l){l.forEach(function(c){r(c,"".concat(i).concat(o.name,"/"))})}))};a.forEach(function(r){s(r.webkitGetAsEntry())})},Ae=+new Date,$e=0;function V(){return"rc-upload-".concat(Ae,"-").concat(++$e)}var Me=["component","prefixCls","className","classNames","disabled","id","style","styles","multiple","accept","capture","children","directory","openFileDialogOnClick","onMouseEnter","onMouseLeave","hasControlInside"],We=function(t){le(n,t);var a=ue(n);function n(){var e;de(this,n);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return e=a.call.apply(a,[this].concat(r)),m(S(e),"state",{uid:V()}),m(S(e),"reqs",{}),m(S(e),"fileInput",void 0),m(S(e),"_isMounted",void 0),m(S(e),"onChange",function(i){var l=e.props,c=l.accept,u=l.directory,p=i.target.files,f=X(p).filter(function(g){return!u||G(g,c)});e.uploadFiles(f),e.reset()}),m(S(e),"onClick",function(i){var l=e.fileInput;if(l){var c=i.target,u=e.props.onClick;if(c&&c.tagName==="BUTTON"){var p=l.parentNode;p.focus(),c.blur()}l.click(),u&&u(i)}}),m(S(e),"onKeyDown",function(i){i.key==="Enter"&&e.onClick(i)}),m(S(e),"onFileDrop",function(i){var l=e.props.multiple;if(i.preventDefault(),i.type!=="dragover")if(e.props.directory)Oe(Array.prototype.slice.call(i.dataTransfer.items),e.uploadFiles,function(u){return G(u,e.props.accept)});else{var c=X(i.dataTransfer.files).filter(function(u){return G(u,e.props.accept)});l===!1&&(c=c.slice(0,1)),e.uploadFiles(c)}}),m(S(e),"uploadFiles",function(i){var l=X(i),c=l.map(function(u){return u.uid=V(),e.processFile(u,l)});Promise.all(c).then(function(u){var p=e.props.onBatchStart;p==null||p(u.map(function(f){var g=f.origin,v=f.parsedFile;return{file:g,parsedFile:v}})),u.filter(function(f){return f.parsedFile!==null}).forEach(function(f){e.post(f)})})}),m(S(e),"processFile",function(){var i=De(re().mark(function l(c,u){var p,f,g,v,y,E,b,k,F;return re().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(p=e.props.beforeUpload,f=c,!p){d.next=14;break}return d.prev=3,d.next=6,p(c,u);case 6:f=d.sent,d.next=12;break;case 9:d.prev=9,d.t0=d.catch(3),f=!1;case 12:if(f!==!1){d.next=14;break}return d.abrupt("return",{origin:c,parsedFile:null,action:null,data:null});case 14:if(g=e.props.action,typeof g!="function"){d.next=21;break}return d.next=18,g(c);case 18:v=d.sent,d.next=22;break;case 21:v=g;case 22:if(y=e.props.data,typeof y!="function"){d.next=29;break}return d.next=26,y(c);case 26:E=d.sent,d.next=30;break;case 29:E=y;case 30:return b=(L(f)==="object"||typeof f=="string")&&f?f:c,b instanceof File?k=b:k=new File([b],c.name,{type:c.type}),F=k,F.uid=c.uid,d.abrupt("return",{origin:c,data:E,parsedFile:F,action:v});case 35:case"end":return d.stop()}},l,null,[[3,9]])}));return function(l,c){return i.apply(this,arguments)}}()),m(S(e),"saveFileInput",function(i){e.fileInput=i}),e}return pe(n,[{key:"componentDidMount",value:function(){this._isMounted=!0}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.abort()}},{key:"post",value:function(s){var r=this,o=s.data,i=s.origin,l=s.action,c=s.parsedFile;if(this._isMounted){var u=this.props,p=u.onStart,f=u.customRequest,g=u.name,v=u.headers,y=u.withCredentials,E=u.method,b=i.uid,k=f||Le,F={action:l,filename:g,data:o,file:c,headers:v,withCredentials:y,method:E||"post",onProgress:function(d){var C=r.props.onProgress;C==null||C(d,c)},onSuccess:function(d,C){var D=r.props.onSuccess;D==null||D(d,c,C),delete r.reqs[b]},onError:function(d,C){var D=r.props.onError;D==null||D(d,C,c),delete r.reqs[b]}};p(i),this.reqs[b]=k(F)}}},{key:"reset",value:function(){this.setState({uid:V()})}},{key:"abort",value:function(s){var r=this.reqs;if(s){var o=s.uid?s.uid:s;r[o]&&r[o].abort&&r[o].abort(),delete r[o]}else Object.keys(r).forEach(function(i){r[i]&&r[i].abort&&r[i].abort(),delete r[i]})}},{key:"render",value:function(){var s,r=this.props,o=r.component,i=r.prefixCls,l=r.className,c=r.classNames,u=c===void 0?{}:c,p=r.disabled,f=r.id,g=r.style,v=r.styles,y=v===void 0?{}:v,E=r.multiple,b=r.accept,k=r.capture,F=r.children,w=r.directory,d=r.openFileDialogOnClick,C=r.onMouseEnter,D=r.onMouseLeave,P=r.hasControlInside,$=ie(r,Me),I=ce((s={},m(s,i,!0),m(s,"".concat(i,"-disabled"),p),m(s,l,l),s)),M=w?{directory:"directory",webkitdirectory:"webkitdirectory"}:{},W=p?{}:{onClick:d?this.onClick:function(){},onKeyDown:d?this.onKeyDown:function(){},onMouseEnter:C,onMouseLeave:D,onDrop:this.onFileDrop,onDragOver:this.onFileDrop,tabIndex:P?void 0:"0"};return Q.createElement(o,B({},W,{className:I,role:P?void 0:"button",style:g}),Q.createElement("input",B({},Ce($,{aria:!0,data:!0}),{id:f,disabled:p,type:"file",ref:this.saveFileInput,onClick:function(q){return q.stopPropagation()},key:this.state.uid,style:Z({display:"none"},y.input),className:u.input,accept:b},M,{multiple:E,onChange:this.onChange},k!=null?{capture:k}:{})),F)}}]),n}(h.Component);function J(){}var qe=function(t){le(n,t);var a=ue(n);function n(){var e;de(this,n);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return e=a.call.apply(a,[this].concat(r)),m(S(e),"uploader",void 0),m(S(e),"saveUploader",function(i){e.uploader=i}),e}return pe(n,[{key:"abort",value:function(s){this.uploader.abort(s)}},{key:"render",value:function(){return Q.createElement(We,B({},this.props,{ref:this.saveUploader}))}}]),n}(h.Component);m(qe,"defaultProps",{component:"span",prefixCls:"rc-upload",data:{},headers:{},name:"file",multipart:!1,onStart:J,onError:J,onSuccess:J,multiple:!1,beforeUpload:null,customRequest:null,withCredentials:!1,openFileDialogOnClick:!0,hasControlInside:!1});export{Ue as C,qe as U,Se as d,Ee as u};
