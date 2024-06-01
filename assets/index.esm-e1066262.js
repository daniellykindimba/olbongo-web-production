import{r as l,R as q}from"./index-3fd7f13b.js";function H(o={}){const{nonce:i,onScriptLoadSuccess:n,onScriptLoadError:d}=o,[e,u]=l.useState(!1),v=l.useRef(n);v.current=n;const _=l.useRef(d);return _.current=d,l.useEffect(()=>{const t=document.createElement("script");return t.src="https://accounts.google.com/gsi/client",t.async=!0,t.defer=!0,t.nonce=i,t.onload=()=>{var c;u(!0),(c=v.current)===null||c===void 0||c.call(v)},t.onerror=()=>{var c;u(!1),(c=_.current)===null||c===void 0||c.call(_)},document.body.appendChild(t),()=>{document.body.removeChild(t)}},[i]),e}const F=l.createContext(null);function z({clientId:o,nonce:i,onScriptLoadSuccess:n,onScriptLoadError:d,children:e}){const u=H({nonce:i,onScriptLoadSuccess:n,onScriptLoadError:d}),v=l.useMemo(()=>({clientId:o,scriptLoadedSuccessfully:u}),[o,u]);return q.createElement(F.Provider,{value:v},e)}function j(){const o=l.useContext(F);if(!o)throw new Error("Google OAuth components must be used within GoogleOAuthProvider");return o}function T(o){var i;return(i=o==null?void 0:o.clientId)!==null&&i!==void 0?i:o==null?void 0:o.client_id}const V={large:40,medium:32,small:20};function D({onSuccess:o,onError:i,useOneTap:n,promptMomentNotification:d,type:e="standard",theme:u="outline",size:v="large",text:_,shape:t,logo_alignment:c,width:S,locale:m,click_listener:y,containerProps:f,...k}){const C=l.useRef(null),{clientId:r,scriptLoadedSuccessfully:w}=j(),A=l.useRef(o);A.current=o;const G=l.useRef(i);G.current=i;const g=l.useRef(d);return g.current=d,l.useEffect(()=>{var a,b,E,s,h,L,p,O,M;if(w)return(E=(b=(a=window==null?void 0:window.google)===null||a===void 0?void 0:a.accounts)===null||b===void 0?void 0:b.id)===null||E===void 0||E.initialize({client_id:r,callback:R=>{var I;if(!(R!=null&&R.credential))return(I=G.current)===null||I===void 0?void 0:I.call(G);const{credential:x,select_by:B}=R;A.current({credential:x,clientId:T(R),select_by:B})},...k}),(L=(h=(s=window==null?void 0:window.google)===null||s===void 0?void 0:s.accounts)===null||h===void 0?void 0:h.id)===null||L===void 0||L.renderButton(C.current,{type:e,theme:u,size:v,text:_,shape:t,logo_alignment:c,width:S,locale:m,click_listener:y}),n&&((M=(O=(p=window==null?void 0:window.google)===null||p===void 0?void 0:p.accounts)===null||O===void 0?void 0:O.id)===null||M===void 0||M.prompt(g.current)),()=>{var R,I,x;n&&((x=(I=(R=window==null?void 0:window.google)===null||R===void 0?void 0:R.accounts)===null||I===void 0?void 0:I.id)===null||x===void 0||x.cancel())}},[r,w,n,e,u,v,_,t,c,S,m]),q.createElement("div",{...f,ref:C,style:{height:V[v],...f==null?void 0:f.style}})}function J(){var o,i,n;(n=(i=(o=window==null?void 0:window.google)===null||o===void 0?void 0:o.accounts)===null||i===void 0?void 0:i.id)===null||n===void 0||n.disableAutoSelect()}function K({flow:o="implicit",scope:i="",onSuccess:n,onError:d,onNonOAuthError:e,overrideScope:u,state:v,..._}){const{clientId:t,scriptLoadedSuccessfully:c}=j(),S=l.useRef(),m=l.useRef(n);m.current=n;const y=l.useRef(d);y.current=d;const f=l.useRef(e);f.current=e,l.useEffect(()=>{var r,w;if(!c)return;const A=o==="implicit"?"initTokenClient":"initCodeClient",G=(w=(r=window==null?void 0:window.google)===null||r===void 0?void 0:r.accounts)===null||w===void 0?void 0:w.oauth2[A]({client_id:t,scope:u?i:`openid profile email ${i}`,callback:g=>{var a,b;if(g.error)return(a=y.current)===null||a===void 0?void 0:a.call(y,g);(b=m.current)===null||b===void 0||b.call(m,g)},error_callback:g=>{var a;(a=f.current)===null||a===void 0||a.call(f,g)},state:v,..._});S.current=G},[t,c,o,i,v]);const k=l.useCallback(r=>{var w;return(w=S.current)===null||w===void 0?void 0:w.requestAccessToken(r)},[]),C=l.useCallback(()=>{var r;return(r=S.current)===null||r===void 0?void 0:r.requestCode()},[]);return o==="implicit"?k:C}function N({onSuccess:o,onError:i,promptMomentNotification:n,cancel_on_tap_outside:d,prompt_parent_id:e,state_cookie_domain:u,hosted_domain:v,use_fedcm_for_prompt:_=!1,disabled:t,auto_select:c}){const{clientId:S,scriptLoadedSuccessfully:m}=j(),y=l.useRef(o);y.current=o;const f=l.useRef(i);f.current=i;const k=l.useRef(n);k.current=n,l.useEffect(()=>{var C,r,w,A,G,g,a,b,E;if(m){if(t){(w=(r=(C=window==null?void 0:window.google)===null||C===void 0?void 0:C.accounts)===null||r===void 0?void 0:r.id)===null||w===void 0||w.cancel();return}return(g=(G=(A=window==null?void 0:window.google)===null||A===void 0?void 0:A.accounts)===null||G===void 0?void 0:G.id)===null||g===void 0||g.initialize({client_id:S,callback:s=>{var h;if(!(s!=null&&s.credential))return(h=f.current)===null||h===void 0?void 0:h.call(f);const{credential:L,select_by:p}=s;y.current({credential:L,clientId:T(s),select_by:p})},hosted_domain:v,cancel_on_tap_outside:d,prompt_parent_id:e,state_cookie_domain:u,use_fedcm_for_prompt:_,auto_select:c}),(E=(b=(a=window==null?void 0:window.google)===null||a===void 0?void 0:a.accounts)===null||b===void 0?void 0:b.id)===null||E===void 0||E.prompt(k.current),()=>{var s,h,L;(L=(h=(s=window==null?void 0:window.google)===null||s===void 0?void 0:s.accounts)===null||h===void 0?void 0:h.id)===null||L===void 0||L.cancel()}}},[S,m,d,e,u,v,_,t,c])}function P(o,i,...n){var d,e,u;return window!=null&&window.google&&((u=(e=(d=window==null?void 0:window.google)===null||d===void 0?void 0:d.accounts)===null||e===void 0?void 0:e.oauth2)===null||u===void 0?void 0:u.hasGrantedAllScopes(o,i,...n))||!1}function Q(o,i,...n){var d,e,u;return window!=null&&window.google&&((u=(e=(d=window==null?void 0:window.google)===null||d===void 0?void 0:d.accounts)===null||e===void 0?void 0:e.oauth2)===null||u===void 0?void 0:u.hasGrantedAnyScope(o,i,...n))||!1}export{D as GoogleLogin,z as GoogleOAuthProvider,J as googleLogout,P as hasGrantedAllScopesGoogle,Q as hasGrantedAnyScopeGoogle,K as useGoogleLogin,j as useGoogleOAuth,N as useGoogleOneTapLogin};
