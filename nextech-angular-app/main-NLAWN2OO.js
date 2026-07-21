import{$ as it,$a as ee,$b as j,A as Hl,Aa as P,Ab as w,B as Ee,Ba as ec,Bb as de,C as Ra,Ca as Or,Cb as ot,D as Tn,Da as Fn,Db as Se,E as Nt,Ea as Pn,Eb as $,F as Ta,Fa as tc,Fb as Nr,G as Ia,Ga as nc,Gb as le,H as $l,Ha as ic,Hb as Ue,I as Oa,Ia as rc,Ib as re,J as Ir,Ja as oc,Jb as ja,K as nt,Ka as ac,Kb as ht,L as Ge,La as sc,Lb as oe,M as Re,Ma as Ie,Mb as ae,N as Te,Na as We,Nb as mc,O,Oa as lc,Ob as fc,P as wi,Pa as Nn,Pb as Ua,Q as bt,Qa as cc,Qb as Ai,R as B,Ra as Pa,Rb as za,S as F,Sa as Na,Sb as V,T as Gl,Ta as je,Tb as mt,U as b,Ua as p,Ub as m,V as T,Va as Bt,Vb as te,W as c,Wa as xe,Wb as Dt,X as ln,Xa as ue,Xb as Me,Y as Wl,Ya as yt,Yb as pc,Z as Ce,Za as Ct,Zb as gc,_ as Ve,_a as Mi,_b as De,a as h,aa as rt,ab as Fr,ac as Ha,b as q,ba as ql,bb as Vt,bc as Bn,ca as Yl,cb as Ln,cc as $a,d as Ke,da as L,db as Pr,dc as hn,e as Ul,ea as E,eb as dc,ec as ki,f as ct,fa as _t,fb as La,fc as vc,g as M,ga as Xl,gb as C,gc as Pe,h as Ne,ha as ie,hb as N,hc as bc,i as Aa,ia as S,ib as k,ic as Y,j as Le,ja as cn,jb as uc,jc as Lr,k as Be,ka as Ei,kb as ce,kc as Ga,l as A,la as Zl,lb as ut,lc as Br,m as Sr,ma as R,mb as Ba,n as Mr,na as dn,nb as Va,o as zl,oa as Kl,ob as xt,p as W,pa as In,pb as J,q as Ar,qa as On,qb as Z,r as Ft,ra as un,rb as K,s as kr,sa as Ql,sb as hc,t as Pt,ta as Lt,tb as Oe,u as Rr,ua as Si,ub as Fe,v as Tr,va as Jl,vb as se,w as he,wa as ge,wb as f,x as ka,xa as dt,xb as g,y as xi,ya as Fa,yb as H,z as Di,za as _,zb as x}from"./chunk-ZQ7LM25K.js";var _c=null;function Qe(){return _c}function Wa(n){_c??=n}var Ri=class{},mn=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=B({token:n,factory:()=>c(yc),providedIn:"platform"})}return n})();var yc=(()=>{class n extends mn{_location;_history;_doc=c(E);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Qe().getBaseHref(this._doc)}onPopState(e){let t=Qe().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){let t=Qe().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,r){this._history.pushState(e,t,r)}replaceState(e,t,r){this._history.replaceState(e,t,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(t){return new(t||n)};static \u0275prov=B({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function Vr(n,i){return n?i?n.endsWith("/")?i.startsWith("/")?n+i.slice(1):n+i:i.startsWith("/")?n+i:`${n}/${i}`:n:i}function Cc(n){let i=n.search(/#|\?|$/);return n[i-1]==="/"?n.slice(0,i-1)+n.slice(i):n}function at(n){return n&&n[0]!=="?"?`?${n}`:n}var ft=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=B({token:n,factory:()=>c(Dc),providedIn:"root"})}return n})(),qa=new b(""),Dc=(()=>{class n extends ft{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??c(E).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Vr(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+at(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${t}${r}`:t}pushState(e,t,r,o){let a=this.prepareExternalUrl(r+at(o));this._platformLocation.pushState(e,t,a)}replaceState(e,t,r,o){let a=this.prepareExternalUrl(r+at(o));this._platformLocation.replaceState(e,t,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||n)(T(mn),T(qa,8))};static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var wt=(()=>{class n{_subject=new M;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=um(Cc(xc(t))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+at(t))}normalize(e){return n.stripTrailingSlash(dm(this._basePath,xc(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",r=null){this._locationStrategy.pushState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+at(t)),r)}replaceState(e,t="",r=null){this._locationStrategy.replaceState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+at(t)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(r=>r(e,t))}subscribe(e,t,r){return this._subject.subscribe({next:e,error:t??void 0,complete:r??void 0})}static normalizeQueryParams=at;static joinWithSlash=Vr;static stripTrailingSlash=Cc;static \u0275fac=function(t){return new(t||n)(T(ft))};static \u0275prov=B({token:n,factory:()=>cm(),providedIn:"root"})}return n})();function cm(){return new wt(T(ft))}function dm(n,i){if(!n||!i.startsWith(n))return i;let e=i.substring(n.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function xc(n){return n.replace(/\/index\.html$/,"")}function um(n){if(new RegExp("^(https?:)?//").test(n)){let[,e]=n.split(/\/\/[^\/]+/);return e}return n}var Ya=(()=>{class n extends ft{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,t!=null&&(this._baseHref=t)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let t=this._platformLocation.hash??"#";return t.length>0?t.substring(1):t}prepareExternalUrl(e){let t=Vr(this._baseHref,e);return t.length>0?"#"+t:t}pushState(e,t,r,o){let a=this.prepareExternalUrl(r+at(o))||this._platformLocation.pathname;this._platformLocation.pushState(e,t,a)}replaceState(e,t,r,o){let a=this.prepareExternalUrl(r+at(o))||this._platformLocation.pathname;this._platformLocation.replaceState(e,t,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||n)(T(mn),T(qa,8))};static \u0275prov=B({token:n,factory:n.\u0275fac})}return n})();var Xa=(()=>{class n{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=c(L);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let t=this._viewContainerRef;if(this._viewRef&&t.remove(t.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=t.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,t,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,t,r):!1,get:(e,t,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,t,r)}})}static \u0275fac=function(t){return new(t||n)(ee(Vt))};static \u0275dir=k({type:n,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[ge]})}return n})();function Za(n,i){i=encodeURIComponent(i);for(let e of n.split(";")){let t=e.indexOf("="),[r,o]=t==-1?[e,""]:[e.slice(0,t),e.slice(t+1)];if(r.trim()===i)return decodeURIComponent(o)}return null}var Ka="browser";function wc(n){return n===Ka}var Ti=class{_doc;constructor(i){this._doc=i}manager},jr=(()=>{class n extends Ti{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,r,o){return e.addEventListener(t,r,o),()=>this.removeEventListener(e,t,r,o)}removeEventListener(e,t,r,o){return e.removeEventListener(t,r,o)}static \u0275fac=function(t){return new(t||n)(T(E))};static \u0275prov=B({token:n,factory:n.\u0275fac})}return n})(),Hr=new b(""),ts=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof jr));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof jr);o&&this._plugins.push(o)}addEventListener(e,t,r,o){return this._findPluginFor(t).addEventListener(e,t,r,o)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(o=>o.supports(e)),!t)throw new O(-5101,!1);return this._eventNameToPlugin.set(e,t),t}static \u0275fac=function(t){return new(t||n)(T(Hr),T(S))};static \u0275prov=B({token:n,factory:n.\u0275fac})}return n})(),Qa="ng-app-id";function Ec(n){for(let i of n)i.remove()}function Sc(n,i){let e=i.createElement("style");return e.textContent=n,e}function vm(n,i,e,t){let r=n.head?.querySelectorAll(`style[${Qa}="${i}"],link[${Qa}="${i}"]`);if(!r||r.length===0)return!1;for(let o of r)o.removeAttribute(Qa),o instanceof HTMLLinkElement?t.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]});return!0}function es(n,i){let e=i.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",n),e}var ns=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,t,r,o={}){this.doc=e,this.appId=t,this.nonce=r,vm(e,t,this.inline,this.external)&&this.hosts.add(e.head)}addStyles(e,t){for(let r of e)this.addUsage(r,this.inline,Sc);t?.forEach(r=>this.addUsage(r,this.external,es))}removeStyles(e,t){for(let r of e)this.removeUsage(r,this.inline);t?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,t,r){let o=t.get(e);o?o.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,t){let r=t.get(e);r&&(r.usage--,r.usage<=0&&(Ec(r.elements),t.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Ec(e);this.hosts.clear()}addHost(e){if(!this.hosts.has(e)){this.hosts.add(e);for(let[t,{elements:r}]of this.inline)r.push(this.addElement(e,Sc(t,this.doc)));for(let[t,{elements:r}]of this.external)r.push(this.addElement(e,es(t,this.doc)))}}removeHost(e){this.hosts.delete(e);for(let t of[...this.inline.values(),...this.external.values()]){let r=[];for(let o of t.elements)o.parentNode===e?o.remove():r.push(o);t.elements=r}}addElement(e,t){return this.nonce&&t.setAttribute("nonce",this.nonce),e.appendChild(t)}static \u0275fac=function(t){return new(t||n)(T(E),T(dn),T(un,8),T(In))};static \u0275prov=B({token:n,factory:n.\u0275fac})}return n})(),Ja={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},is=/%COMP%/g;var Ac="%COMP%",bm=`_nghost-${Ac}`,_m=`_ngcontent-${Ac}`,ym=!0,Cm=new b("",{factory:()=>ym});function xm(n){return _m.replace(is,n)}function Dm(n){return bm.replace(is,n)}function kc(n,i){return i.map(e=>e.replace(is,n))}var Fi=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,t,r,o,a,s,l=null,d=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=l,this.tracingService=d,this.defaultRenderer=new Ii(e,a,s,this.tracingService)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,t);return r instanceof zr?r.applyToHost(e):r instanceof Oi&&r.applyStyles(),r}getOrCreateRenderer(e,t){let r=this.rendererByCompId,o=r.get(t.id);if(!o){let a=this.doc,s=this.ngZone,l=this.eventManager,d=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,v=this.tracingService;switch(t.encapsulation){case Or.Emulated:o=new zr(l,d,t,this.appId,u,a,s,v);break;case Or.ShadowDom:return new Ur(l,e,t,a,s,this.nonce,v,d);case Or.ExperimentalIsolatedShadowDom:return new Ur(l,e,t,a,s,this.nonce,v);default:o=new Oi(l,d,t,u,a,s,v);break}r.set(t.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(t){return new(t||n)(T(ts),T(Mi),T(dn),T(Cm),T(E),T(S),T(un),T(Pa,8))};static \u0275prov=B({token:n,factory:n.\u0275fac})}return n})(),Ii=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,t,r){this.eventManager=i,this.doc=e,this.ngZone=t,this.tracingService=r}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(Ja[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(Mc(i)?i.content:i).appendChild(e)}insertBefore(i,e,t){i&&(Mc(i)?i.content:i).insertBefore(e,t)}removeChild(i,e){e.remove()}selectRootElement(i,e){let t=typeof i=="string"?this.doc.querySelector(i):i;if(!t)throw new O(-5104,!1);return e||(t.textContent=""),t}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,t,r){if(r){e=r+":"+e;let o=Ja[r];o?i.setAttributeNS(o,e,t):i.setAttribute(e,t)}else i.setAttribute(e,t)}removeAttribute(i,e,t){if(t){let r=Ja[t];r?i.removeAttributeNS(r,e):i.removeAttribute(`${t}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,t,r){r&(Nn.DashCase|Nn.Important)?i.style.setProperty(e,t,r&Nn.Important?"important":""):i.style[e]=t}removeStyle(i,e,t){t&Nn.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,t){i!=null&&(i[e]=t)}setValue(i,e){i.nodeValue=e}listen(i,e,t,r){if(typeof i=="string"&&(i=Qe().getGlobalEventTarget(this.doc,i),!i))throw new O(-5102,!1);let o=this.decoratePreventDefault(t);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(i,e,o)),this.eventManager.addEventListener(i,e,o,r)}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;i(e)===!1&&e.preventDefault()}}};function Mc(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Ur=class extends Ii{hostEl;sharedStylesHost;shadowRoot;constructor(i,e,t,r,o,a,s,l){super(i,r,o,s),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=t.styles;d=kc(t.id,d);for(let v of d){let y=document.createElement("style");a&&y.setAttribute("nonce",a),y.textContent=v,this.shadowRoot.appendChild(y)}let u=t.getExternalStyles?.();if(u)for(let v of u){let y=es(v,r);a&&y.setAttribute("nonce",a),this.shadowRoot.appendChild(y)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,t){return super.insertBefore(this.nodeOrShadowRoot(i),e,t)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Oi=class extends Ii{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,t,r,o,a,s,l){super(i,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let d=t.styles;this.styles=l?kc(l,d):d,this.styleUrls=t.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&cc.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},zr=class extends Oi{contentAttr;hostAttr;constructor(i,e,t,r,o,a,s,l){let d=r+"-"+t.id;super(i,e,t,o,a,s,l,d),this.contentAttr=xm(d),this.hostAttr=Dm(d)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let t=super.createElement(i,e);return super.setAttribute(t,this.contentAttr,""),t}};var $r=class n extends Ri{supportsDOMEvents=!0;static makeCurrent(){Wa(new n)}onAndCancel(i,e,t,r){return i.addEventListener(e,t,r),()=>{i.removeEventListener(e,t,r)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=Em();return e==null?null:Sm(e)}resetBaseElement(){Pi=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return Za(document.cookie,i)}},Pi=null;function Em(){return Pi=Pi||document.head.querySelector("base"),Pi?Pi.getAttribute("href"):null}function Sm(n){return new URL(n,document.baseURI).pathname}var Rc=["alt","control","meta","shift"],Mm={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Am={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},Tc=(()=>{class n extends Ti{constructor(e){super(e)}supports(e){return n.parseEventName(e)!=null}addEventListener(e,t,r,o){let a=n.parseEventName(t),s=n.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Qe().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let t=e.toLowerCase().split("."),r=t.shift();if(t.length===0||!(r==="keydown"||r==="keyup"))return null;let o=n._normalizeKey(t.pop()),a="",s=t.indexOf("code");if(s>-1&&(t.splice(s,1),a="code."),Rc.forEach(d=>{let u=t.indexOf(d);u>-1&&(t.splice(u,1),a+=d+".")}),a+=o,t.length!=0||o.length===0)return null;let l={};return l.domEventName=r,l.fullKey=a,l}static matchEventFullKeyCode(e,t){let r=Mm[e.key]||e.key,o="";return t.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Rc.forEach(a=>{if(a!==r){let s=Am[a];s(e)&&(o+=a+".")}}),o+=r,o===t)}static eventCallback(e,t,r){return o=>{n.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>t(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(t){return new(t||n)(T(E))};static \u0275prov=B({token:n,factory:n.\u0275fac})}return n})();async function rs(n,i,e){let t=h({rootComponent:n},km(i,e));return bc(t)}function km(n,i){return{platformRef:i?.platformRef,appProviders:[...Fm,...n?.providers??[]],platformProviders:Om}}function Rm(){$r.makeCurrent()}function Tm(){return new cn}function Im(){return ec(document),document}var Om=[{provide:In,useValue:Ka},{provide:Kl,useValue:Rm,multi:!0},{provide:E,useFactory:Im}];var Fm=[{provide:Wl,useValue:"root"},{provide:cn,useFactory:Tm},{provide:Hr,useClass:jr,multi:!0},{provide:Hr,useClass:Tc,multi:!0},Fi,{provide:Mi,useClass:ns},{provide:ns,useExisting:Mi},ts,{provide:xe,useExisting:Fi},[]];var St=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let t=e.indexOf(":");if(t>0){let r=e.slice(0,t),o=e.slice(t+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,t)=>{this.addHeaderEntry(t,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,t])=>{this.setHeaderEntries(e,t)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init(),Array.from(i.headers.keys()).forEach(e=>{this.headers.set(e,i.headers.get(e)),this.normalizedNames.set(e,i.normalizedNames.get(e))})}clone(i){let e=new n;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let t=i.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(i.name,e);let r=(i.op==="a"?this.headers.get(e):void 0)||[];r.push(...t),this.headers.set(e,r);break;case"d":let o=i.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(i,e){let t=i.toLowerCase();this.maybeSetNormalizedName(i,t),this.headers.has(t)?this.headers.get(t).push(e):this.headers.set(t,[e])}setHeaderEntries(i,e){let t=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=i.toLowerCase();this.headers.set(r,t),this.maybeSetNormalizedName(i,r)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var ss=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}},ls=class{encodeKey(i){return Ic(i)}encodeValue(i){return Ic(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function Pm(n,i){let e=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[i.decodeKey(r),""]:[i.decodeKey(r.slice(0,o)),i.decodeValue(r.slice(o+1))],l=e.get(a)||[];l.push(s),e.set(a,l)}),e}var Nm=/%(\d[a-f0-9])/gi,Lm={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Ic(n){return encodeURIComponent(n).replace(Nm,(i,e)=>Lm[e]??i)}function Gr(n){return`${n}`}var Et=class n{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new ls,i.fromString){if(i.fromObject)throw new O(2805,!1);this.map=Pm(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let t=i.fromObject[e],r=Array.isArray(t)?t.map(Gr):[Gr(t)];this.map.set(e,r)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(t=>{let r=i[t];Array.isArray(r)?r.forEach(o=>{e.push({param:t,value:o,op:"a"})}):e.push({param:t,value:r,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(t=>e+"="+this.encoder.encodeValue(t)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new n({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(i=>this.map.set(i,this.cloneFrom.map.get(i))),this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=(i.op==="a"?this.map.get(i.param):void 0)||[];e.push(Gr(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let t=this.map.get(i.param)||[],r=t.indexOf(Gr(i.value));r!==-1&&t.splice(r,1),t.length>0?this.map.set(i.param,t):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null)}};function Bm(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Oc(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function Fc(n){return typeof Blob<"u"&&n instanceof Blob}function Pc(n){return typeof FormData<"u"&&n instanceof FormData}function Vm(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var os="Content-Type",Nc="Accept",Bc="text/plain",Vc="application/json",jm=`${Vc}, ${Bc}, */*`,Vn=class n{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(i,e,t,r){this.url=e,this.method=i.toUpperCase();let o;if(Bm(this.method)||r?(this.body=t!==void 0?t:null,o=r):o=t,o){if(this.reportProgress=!!o.reportProgress,this.reportUploadProgress=!!o.reportUploadProgress,this.reportDownloadProgress=!!o.reportDownloadProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new O(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new St,this.context??=new ss,!this.params)this.params=new Et,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e,l="",d=e.indexOf("#");d!==-1&&(l=e.substring(d),s=e.substring(0,d));let u=s.indexOf("?"),v=u===-1?"?":u<s.length-1?"&":"";this.urlWithParams=s+v+a+l}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Oc(this.body)||Fc(this.body)||Pc(this.body)||Vm(this.body)?this.body:this.body instanceof Et?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Pc(this.body)?null:Fc(this.body)?this.body.type||null:Oc(this.body)?null:typeof this.body=="string"?Bc:this.body instanceof Et?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Vc:null}clone(i={}){let e=i.method||this.method,t=i.url||this.url,r=i.responseType||this.responseType,o=i.keepalive??this.keepalive,a=i.priority||this.priority,s=i.cache||this.cache,l=i.mode||this.mode,d=i.redirect||this.redirect,u=i.credentials||this.credentials,v=i.referrer??this.referrer,y=i.integrity||this.integrity,U=i.referrerPolicy||this.referrerPolicy,z=i.transferCache??this.transferCache,G=i.timeout??this.timeout,ne=i.body!==void 0?i.body:this.body,He=i.withCredentials??this.withCredentials,$e=i.reportProgress??this.reportProgress,we=i.reportUploadProgress??this.reportUploadProgress,kn=i.reportDownloadProgress??this.reportDownloadProgress,yi=i.headers||this.headers,an=i.params||this.params,Er=i.context??this.context;return i.setHeaders!==void 0&&(yi=Object.keys(i.setHeaders).reduce((Rn,sn)=>Rn.set(sn,i.setHeaders[sn]),yi)),i.setParams&&(an=Object.keys(i.setParams).reduce((Rn,sn)=>Rn.set(sn,i.setParams[sn]),an)),new n(e,t,ne,{params:an,headers:yi,context:Er,reportProgress:$e,reportUploadProgress:we,reportDownloadProgress:kn,responseType:r,withCredentials:He,transferCache:z,keepalive:o,cache:s,priority:a,timeout:G,mode:l,redirect:d,credentials:u,referrer:v,integrity:y,referrerPolicy:U})}},jn=(function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n})(jn||{}),Ni=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(i,e=200,t="OK"){this.headers=i.headers||new St,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||t,this.url=i.url||null,this.redirected=i.redirected,this.responseType=i.responseType,this.ok=this.status>=200&&this.status<300}},cs=class n extends Ni{constructor(i={}){super(i)}type=jn.ResponseHeader;clone(i={}){return new n({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},Li=class n extends Ni{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=jn.Response;clone(i={}){return new n({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0,redirected:i.redirected??this.redirected,responseType:i.responseType??this.responseType})}},fn=class extends Ni{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},Um=200;var zm=/^\)\]\}',?\n/,E0=1024*1024,Hm=new b("",{factory:()=>null}),$m=(()=>{class n{fetchImpl=c(ds,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=c(S);destroyRef=c(_t);maxResponseSize=c(Hm);handle(e){return new ct(t=>{let r=new AbortController;this.doRequest(e,r.signal,t).then(us,a=>t.error(new fn({error:a})));let o;return e.timeout&&(o=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{r.signal.aborted||r.abort(new DOMException("signal timed out","TimeoutError"))},e.timeout))),()=>{o!==void 0&&clearTimeout(o),r.abort()}})}async doRequest(e,t,r){let o=this.createRequestInit(e),a;try{let ne=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,h({signal:t},o)));Gm(ne),r.next({type:jn.Sent}),a=await ne}catch(ne){r.error(new fn({error:ne,status:ne.status??0,statusText:ne.statusText,url:e.urlWithParams,headers:ne.headers}));return}let s=new St(a.headers),l=a.statusText,d=a.url||e.urlWithParams,u=a.status,v=null,y=e.reportProgress||e.reportDownloadProgress;if(y&&r.next(new cs({headers:s,status:u,statusText:l,url:d})),a.body){let ne=a.headers.get("content-length"),He=ne!==null?Number(ne):NaN;this.maxResponseSize!==null&&Number.isFinite(He)&&He>this.maxResponseSize&&Lc(this.maxResponseSize);let $e=[],we=a.body.getReader(),kn=0,yi,an,Er=typeof Zone<"u"&&Zone.current,Rn=!1;if(await this.ngZone.runOutsideAngular(async()=>{for(;;){if(this.destroyRef.destroyed){await we.cancel(),Rn=!0;break}let{done:Ci,value:Ma}=await we.read();if(Ci)break;if($e.push(Ma),kn+=Ma.length,this.maxResponseSize!==null&&kn>this.maxResponseSize&&(await we.cancel(),Lc(this.maxResponseSize)),y){an=e.responseType==="text"?(an??"")+(yi??=new TextDecoder).decode(Ma,{stream:!0}):void 0;let jl=()=>r.next({type:jn.DownloadProgress,total:Number.isFinite(He)?He:void 0,loaded:kn,partialText:an});Er?Er.run(jl):jl()}}}),Rn){r.complete();return}let sn=this.concatChunks($e,kn);try{let Ci=a.headers.get(os)??"";v=this.parseBody(e,sn,Ci,u)}catch(Ci){r.error(new fn({error:Ci,headers:new St(a.headers),status:a.status,statusText:a.statusText,url:a.url||e.urlWithParams}));return}}u===0&&(u=v?Um:0);let U=u>=200&&u<300,z=a.redirected,G=a.type;U?(r.next(new Li({body:v,headers:s,status:u,statusText:l,url:d,redirected:z,responseType:G})),r.complete()):r.error(new fn({error:v,headers:s,status:u,statusText:l,url:d,redirected:z,responseType:G}))}parseBody(e,t,r,o){switch(e.responseType){case"json":let a=new TextDecoder().decode(t).replace(zm,"");if(a==="")return null;try{return JSON.parse(a)}catch(s){if(o<200||o>=300)return a;throw s}case"text":return new TextDecoder().decode(t);case"blob":return new Blob([t],{type:r});case"arraybuffer":return t.buffer}}createRequestInit(e){if(e.reportUploadProgress)throw new O(2824,!1);let t={},r;if(r=e.credentials,e.withCredentials&&(r="include"),e.headers.forEach((o,a)=>t[o]=a.join(",")),e.headers.has(Nc)||(t[Nc]=jm),!e.headers.has(os)){let o=e.detectContentTypeHeader();o!==null&&(t[os]=o)}return{body:e.serializeBody(),method:e.method,headers:t,credentials:r,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity,referrerPolicy:e.referrerPolicy}}concatChunks(e,t){let r=new Uint8Array(t),o=0;for(let a of e)r.set(a,o),o+=a.length;return r}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})(),ds=class{};function us(){}function Gm(n){n.then(us,us)}function Lc(n){throw new O(-2825,!1)}function Wm(n,i){return i(n)}function qm(n,i,e){return(t,r)=>Ve(e,()=>i(t,o=>n(o,r)))}var Ym=new b("",{factory:()=>[]}),jc=new b(""),Xm=new b("",{factory:()=>!0});var Zm=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=B({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=T($m),r},providedIn:"root"})}return n})();var Km=(()=>{class n{backend;injector;chain=null;pendingTasks=c(Jl);contributeToStability=c(Xm);constructor(e,t){this.backend=e,this.injector=t}handle(e){if(this.chain===null){let r=Array.from(new Set([...this.injector.get(Ym),...this.injector.get(jc,[])]));this.chain=r.reduceRight((o,a)=>qm(o,a,this.injector),Wm)}let t=this.chain;if(this.contributeToStability){let r=this.pendingTasks.add();return j(()=>t(e,o=>this.backend.handle(o))).pipe(Tn(r))}else return j(()=>t(e,r=>this.backend.handle(r)))}static \u0275fac=function(t){return new(t||n)(T(Zm),T(Ce))};static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Qm=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=B({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=T(Km),r},providedIn:"root"})}return n})();function as(n,i){return h({body:i},n)}var hs=(()=>{class n{handler;constructor(e){this.handler=e}request(e,t,r={}){let o;if(e instanceof Vn)o=e;else{let l;r.headers instanceof St?l=r.headers:l=new St(r.headers);let d;r.params&&(r.params instanceof Et?d=r.params:d=new Et({fromObject:r.params})),o=new Vn(e,t,r.body!==void 0?r.body:null,{headers:l,context:r.context,params:d,reportProgress:r.reportProgress,reportUploadProgress:r.reportUploadProgress,reportDownloadProgress:r.reportDownloadProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=A(o).pipe(Di(l=>this.handler.handle(l)));if(e instanceof Vn||r.observe==="events")return a;let s=a.pipe(he(l=>l instanceof Li));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(W(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new O(2806,!1);return l.body}));case"blob":return s.pipe(W(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new O(2807,!1);return l.body}));case"text":return s.pipe(W(l=>{if(l.body!==null&&typeof l.body!="string")throw new O(2808,!1);return l.body}));default:return s.pipe(W(l=>l.body))}case"response":return s;default:throw new O(2809,!1)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:new Et().append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,r={}){return this.request("PATCH",e,as(r,t))}post(e,t,r={}){return this.request("POST",e,as(r,t))}put(e,t,r={}){return this.request("PUT",e,as(r,t))}static \u0275fac=function(t){return new(t||n)(T(Qm))};static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Uc=(()=>{class n{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(t){return new(t||n)(T(E))};static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Bi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=B({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=T(nf),r},providedIn:"root"})}return n})(),nf=(()=>{class n extends Bi{_doc=c(E);sanitize(e,t){if(t==null)return null;switch(e){case Ie.NONE:return t;case Ie.HTML:return Pn(t,"HTML")?Fn(t):sc(this._doc,String(t)).toString();case Ie.STYLE:return Pn(t,"Style")?Fn(t):t;case Ie.SCRIPT:if(Pn(t,"Script"))return Fn(t);throw new O(5200,!1);case Ie.URL:return Pn(t,"URL")?Fn(t):ac(String(t));case Ie.RESOURCE_URL:if(Pn(t,"ResourceURL"))return Fn(t);throw new O(-5201,!1);default:throw new O(5202,!1)}}bypassSecurityTrustHtml(e){return tc(e)}bypassSecurityTrustStyle(e){return nc(e)}bypassSecurityTrustScript(e){return ic(e)}bypassSecurityTrustUrl(e){return rc(e)}bypassSecurityTrustResourceUrl(e){return oc(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})();var I="primary",Qi=Symbol("RouteTitle"),vs=class{params;constructor(i){this.params=i||{}}has(i){return Object.prototype.hasOwnProperty.call(this.params,i)}get(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e[0]:e}return null}getAll(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function gn(n){return new vs(n)}function ms(n,i,e){for(let t=0;t<n.length;t++){let r=n[t],o=i[t];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function Kc(n,i,e){let t=e.path.split("/"),r=t.indexOf("**");if(r===-1){if(t.length>n.length||e.pathMatch==="full"&&(i.hasChildren()||t.length<n.length))return null;let l={},d=n.slice(0,t.length);return ms(t,d,l)?{consumed:d,posParams:l}:null}if(r!==t.lastIndexOf("**"))return null;let o=t.slice(0,r),a=t.slice(r+1);if(o.length+a.length>n.length||e.pathMatch==="full"&&i.hasChildren()&&e.path!=="**")return null;let s={};return!ms(o,n.slice(0,o.length),s)||!ms(a,n.slice(n.length-a.length),s)?null:{consumed:n,posParams:s}}function Kr(n){return new Promise((i,e)=>{n.pipe(Nt()).subscribe({next:t=>i(t),error:t=>e(t)})})}function rf(n,i){if(n.length!==i.length)return!1;for(let e=0;e<n.length;++e)if(!pt(n[e],i[e]))return!1;return!0}function pt(n,i){let e=n?bs(n):void 0,t=i?bs(i):void 0;if(!e||!t||e.length!=t.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!Qc(n[r],i[r]))return!1;return!0}function bs(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function Qc(n,i){if(Array.isArray(n)&&Array.isArray(i)){if(n.length!==i.length)return!1;let e=[...n].sort(),t=[...i].sort();return e.every((r,o)=>t[o]===r)}else return n===i}function of(n){return n.length>0?n[n.length-1]:null}function _n(n){return Mr(n)?n:Ln(n)?Be(Promise.resolve(n)):A(n)}function Jc(n){return Mr(n)?Kr(n):Promise.resolve(n)}var af={exact:nd,subset:id},ed={exact:sf,subset:lf,ignored:()=>!0},td={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},_s={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function Hc(n,i,e){return af[e.paths](n.root,i.root,e.matrixParams)&&ed[e.queryParams](n.queryParams,i.queryParams)&&!(e.fragment==="exact"&&n.fragment!==i.fragment)}function sf(n,i){return pt(n,i)}function nd(n,i,e){if(!pn(n.segments,i.segments)||!Yr(n.segments,i.segments,e)||n.numberOfChildren!==i.numberOfChildren)return!1;for(let t in i.children)if(!n.children[t]||!nd(n.children[t],i.children[t],e))return!1;return!0}function lf(n,i){return Object.keys(i).length<=Object.keys(n).length&&Object.keys(i).every(e=>Qc(n[e],i[e]))}function id(n,i,e){return rd(n,i,i.segments,e)}function rd(n,i,e,t){if(n.segments.length>e.length){let r=n.segments.slice(0,e.length);return!(!pn(r,e)||i.hasChildren()||!Yr(r,e,t))}else if(n.segments.length===e.length){if(!pn(n.segments,e)||!Yr(n.segments,e,t))return!1;for(let r in i.children)if(!n.children[r]||!id(n.children[r],i.children[r],t))return!1;return!0}else{let r=e.slice(0,n.segments.length),o=e.slice(n.segments.length);return!pn(n.segments,r)||!Yr(n.segments,r,t)||!n.children[I]?!1:rd(n.children[I],i,o,t)}}function Yr(n,i,e){return i.every((t,r)=>ed[e](n[r].parameters,t.parameters))}var Ye=class{root;queryParams;fragment;_queryParamMap;constructor(i=new Q([],{}),e={},t=null){this.root=i,this.queryParams=e,this.fragment=t}get queryParamMap(){return this._queryParamMap??=gn(this.queryParams),this._queryParamMap}toString(){return uf.serialize(this)}},Q=class{segments;children;parent=null;constructor(i,e){this.segments=i,this.children=e,Object.values(e).forEach(t=>t.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Xr(this)}},jt=class{path;parameters;_parameterMap;constructor(i,e){this.path=i,this.parameters=e}get parameterMap(){return this._parameterMap??=gn(this.parameters),this._parameterMap}toString(){return ad(this)}};function cf(n,i){return pn(n,i)&&n.every((e,t)=>pt(e.parameters,i[t].parameters))}function pn(n,i){return n.length!==i.length?!1:n.every((e,t)=>e.path===i[t].path)}function df(n,i){let e=[];return Object.entries(n.children).forEach(([t,r])=>{t===I&&(e=e.concat(i(r,t)))}),Object.entries(n.children).forEach(([t,r])=>{t!==I&&(e=e.concat(i(r,t)))}),e}var Xn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:()=>new Ut})}return n})(),Ut=class{parse(i){let e=new Cs(i);return new Ye(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(i){let e=`/${Vi(i.root,!0)}`,t=ff(i.queryParams),r=typeof i.fragment=="string"?`#${hf(i.fragment)}`:"";return`${e}${t}${r}`}},uf=new Ut;function Xr(n){return n.segments.map(i=>ad(i)).join("/")}function Vi(n,i){if(!n.hasChildren())return Xr(n);if(i){let e=n.children[I]?Vi(n.children[I],!1):"",t=[];return Object.entries(n.children).forEach(([r,o])=>{r!==I&&t.push(`${r}:${Vi(o,!1)}`)}),t.length>0?`${e}(${t.join("//")})`:e}else{let e=df(n,(t,r)=>r===I?[Vi(n.children[I],!1)]:[`${r}:${Vi(t,!1)}`]);return Object.keys(n.children).length===1&&n.children[I]!=null?`${Xr(n)}/${e[0]}`:`${Xr(n)}/(${e.join("//")})`}}function od(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Wr(n){return od(n).replace(/%3B/gi,";")}function hf(n){return encodeURI(n)}function ys(n){return od(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Zr(n){return decodeURIComponent(n)}function $c(n){return Zr(n.replace(/\+/g,"%20"))}function ad(n){return`${ys(n.path)}${mf(n.parameters)}`}function mf(n){return Object.entries(n).map(([i,e])=>`;${ys(i)}=${ys(e)}`).join("")}function ff(n){let i=Object.entries(n).map(([e,t])=>Array.isArray(t)?t.map(r=>`${Wr(e)}=${Wr(r)}`).join("&"):`${Wr(e)}=${Wr(t)}`).filter(e=>e);return i.length?`?${i.join("&")}`:""}var pf=/^[^\/()?;#]+/;function fs(n){let i=n.match(pf);return i?i[0]:""}var gf=/^[^\/()?;=#]+/;function vf(n){let i=n.match(gf);return i?i[0]:""}var bf=/^[^=?&#]+/;function _f(n){let i=n.match(bf);return i?i[0]:""}var yf=/^[^&#]+/;function Cf(n){let i=n.match(yf);return i?i[0]:""}var Cs=class{url;remaining;constructor(i){this.url=i,this.remaining=i}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Q([],{}):new Q([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional("?"))do this.parseQueryParam(i);while(this.consumeOptional("&"));return i}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(i=0){if(i>50)throw new O(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0,i));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,i)),(e.length>0||Object.keys(t).length>0)&&(r[I]=new Q(e,t)),r}parseSegment(){let i=fs(this.remaining);if(i===""&&this.peekStartsWith(";"))throw new O(4009,!1);return this.capture(i),new jt(Zr(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(";");)this.parseParam(i);return i}parseParam(i){let e=vf(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let r=fs(this.remaining);r&&(t=r,this.capture(t))}i[Zr(e)]=Zr(t)}parseQueryParam(i){let e=_f(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let a=Cf(this.remaining);a&&(t=a,this.capture(t))}let r=$c(e),o=$c(t);if(Object.hasOwn(i,r)){let a=i[r];Array.isArray(a)||(a=[a],i[r]=a),a.push(o)}else i[r]=o}parseParens(i,e){let t=Object.create(null);for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=fs(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new O(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):i&&(a=I);let s=this.parseChildren(e+1);t[a??I]=Object.keys(s).length===1&&s[I]?s[I]:new Q([],s),this.consumeOptional("//")}return t}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new O(4011,!1)}};function sd(n){return n.segments.length>0?new Q([],{[I]:n}):n}function ld(n){let i=Object.create(null);for(let[t,r]of Object.entries(n.children)){let o=ld(r);if(t===I&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))i[a]=s;else(o.segments.length>0||o.hasChildren())&&(i[t]=o)}let e=new Q(n.segments,i);return xf(e)}function xf(n){if(n.numberOfChildren===1&&n.children[I]){let i=n.children[I];return new Q(n.segments.concat(i.segments),i.children)}return n}function zt(n){return n instanceof Ye}function cd(n,i,e=null,t=null,r=new Ut){let o=dd(n);return ud(o,i,e,t,r)}function dd(n){let i;function e(o){let a={};for(let l of o.children){let d=e(l);a[l.outlet]=d}let s=new Q(o.url,a);return o===n&&(i=s),s}let t=e(n.root),r=sd(t);return i??r}function ud(n,i,e,t,r){let o=n;for(;o.parent;)o=o.parent;if(i.length===0)return ps(o,o,o,e,t,r);let a=Df(i);if(a.toRoot())return ps(o,o,new Q([],{}),e,t,r);let s=wf(a,o,n),l=s.processChildren?Ui(s.segmentGroup,s.index,a.commands):md(s.segmentGroup,s.index,a.commands);return ps(o,s.segmentGroup,l,e,t,r)}function Qr(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function $i(n){return typeof n=="object"&&n!=null&&n.outlets}function Gc(n,i,e){n||="\u0275";let t=new Ye;return t.queryParams={[n]:i},e.parse(e.serialize(t)).queryParams[n]}function ps(n,i,e,t,r,o){let a={};for(let[d,u]of Object.entries(t??{}))a[d]=Array.isArray(u)?u.map(v=>Gc(d,v,o)):Gc(d,u,o);let s;n===i?s=e:s=hd(n,i,e);let l=sd(ld(s));return new Ye(l,a,r)}function hd(n,i,e){let t=Object.create(null);return Object.entries(n.children).forEach(([r,o])=>{o===i?t[r]=e:t[r]=hd(o,i,e)}),new Q(n.segments,t)}var Jr=class{isAbsolute;numberOfDoubleDots;commands;constructor(i,e,t){if(this.isAbsolute=i,this.numberOfDoubleDots=e,this.commands=t,i&&t.length>0&&Qr(t[0]))throw new O(4003,!1);let r=t.find($i);if(r&&r!==of(t))throw new O(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Df(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new Jr(!0,0,n);let i=0,e=!1,t=n.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([l,d])=>{s[l]=typeof d=="string"?d.split("/"):d}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,l)=>{l==0&&s==="."||(l==0&&s===""?e=!0:s===".."?i++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new Jr(e,i,t)}var zn=class{segmentGroup;processChildren;index;constructor(i,e,t){this.segmentGroup=i,this.processChildren=e,this.index=t}};function wf(n,i,e){if(n.isAbsolute)return new zn(i,!0,0);if(!e)return new zn(i,!1,NaN);if(e.parent===null)return new zn(e,!0,0);let t=Qr(n.commands[0])?0:1,r=e.segments.length-1+t;return Ef(e,r,n.numberOfDoubleDots)}function Ef(n,i,e){let t=n,r=i,o=e;for(;o>r;){if(o-=r,t=t.parent,!t)throw new O(4005,!1);r=t.segments.length}return new zn(t,!1,r-o)}function Sf(n){return $i(n[0])?n[0].outlets:{[I]:n}}function md(n,i,e){if(n??=new Q([],{}),n.segments.length===0&&n.hasChildren())return Ui(n,i,e);let t=Mf(n,i,e),r=e.slice(t.commandIndex);if(t.match&&t.pathIndex<n.segments.length){let o=new Q(n.segments.slice(0,t.pathIndex),{});return o.children[I]=new Q(n.segments.slice(t.pathIndex),n.children),Ui(o,0,r)}else return t.match&&r.length===0?new Q(n.segments,{}):t.match&&!n.hasChildren()?xs(n,i,e):t.match?Ui(n,0,r):xs(n,i,e)}function Ui(n,i,e){if(e.length===0)return new Q(n.segments,{});{let t=Sf(e),r=Object.create(null);if(Object.keys(t).some(o=>o!==I)&&n.children[I]&&n.numberOfChildren===1&&n.children[I].segments.length===0){let o=Ui(n.children[I],i,e);return new Q(n.segments,o.children)}return Object.entries(t).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=md(n.children[o],i,a))}),Object.entries(n.children).forEach(([o,a])=>{t[o]===void 0&&(r[o]=a)}),new Q(n.segments,r)}}function Mf(n,i,e){let t=0,r=i,o={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(t>=e.length)return o;let a=n.segments[r],s=e[t];if($i(s))break;let l=`${s}`,d=t<e.length-1?e[t+1]:null;if(r>0&&l===void 0)break;if(l&&d&&typeof d=="object"&&d.outlets===void 0){if(!qc(l,d,a))return o;t+=2}else{if(!qc(l,{},a))return o;t++}r++}return{match:!0,pathIndex:r,commandIndex:t}}function xs(n,i,e){let t=n.segments.slice(0,i),r=0;for(;r<e.length;){let o=e[r];if($i(o)){let l=Af(o.outlets);return new Q(t,l)}if(r===0&&Qr(e[0])){let l=n.segments[i];t.push(new jt(l.path,Wc(e[0]))),r++;continue}let a=$i(o)?o.outlets[I]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&Qr(s)?(t.push(new jt(a,Wc(s))),r+=2):(t.push(new jt(a,{})),r++)}return new Q(t,{})}function Af(n){let i={};return Object.entries(n).forEach(([e,t])=>{typeof t=="string"&&(t=[t]),t!==null&&(i[e]=xs(new Q([],{}),0,t))}),i}function Wc(n){let i={};return Object.entries(n).forEach(([e,t])=>i[e]=`${t}`),i}function qc(n,i,e){return n==e.path&&pt(i,e.parameters)}var zi="imperative",be=(function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n})(be||{}),Xe=class{id;url;constructor(i,e){this.id=i,this.url=e}},vn=class extends Xe{type=be.NavigationStart;navigationTrigger;restoredState;constructor(i,e,t="imperative",r=null){super(i,e),this.navigationTrigger=t,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},gt=class extends Xe{urlAfterRedirects;type=be.NavigationEnd;constructor(i,e,t){super(i,e),this.urlAfterRedirects=t}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Ae=(function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n[n.Aborted=4]="Aborted",n})(Ae||{}),Gi=(function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n})(Gi||{}),Je=class extends Xe{reason;code;type=be.NavigationCancel;constructor(i,e,t,r){super(i,e),this.reason=t,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function fd(n){return n instanceof Je&&(n.code===Ae.Redirect||n.code===Ae.SupersededByNewNavigation)}var At=class extends Xe{reason;code;type=be.NavigationSkipped;constructor(i,e,t,r){super(i,e),this.reason=t,this.code=r}},bn=class extends Xe{error;target;type=be.NavigationError;constructor(i,e,t,r){super(i,e),this.error=t,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Wi=class extends Xe{urlAfterRedirects;state;type=be.RoutesRecognized;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},eo=class extends Xe{urlAfterRedirects;state;type=be.GuardsCheckStart;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},to=class extends Xe{urlAfterRedirects;state;shouldActivate;type=be.GuardsCheckEnd;constructor(i,e,t,r,o){super(i,e),this.urlAfterRedirects=t,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},no=class extends Xe{urlAfterRedirects;state;type=be.ResolveStart;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},io=class extends Xe{urlAfterRedirects;state;type=be.ResolveEnd;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ro=class{route;type=be.RouteConfigLoadStart;constructor(i){this.route=i}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},oo=class{route;type=be.RouteConfigLoadEnd;constructor(i){this.route=i}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},ao=class{snapshot;type=be.ChildActivationStart;constructor(i){this.snapshot=i}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},so=class{snapshot;type=be.ChildActivationEnd;constructor(i){this.snapshot=i}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},lo=class{snapshot;type=be.ActivationStart;constructor(i){this.snapshot=i}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},co=class{snapshot;type=be.ActivationEnd;constructor(i){this.snapshot=i}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var $n=class{},qi=class{},Gn=class{url;navigationBehaviorOptions;constructor(i,e){this.url=i,this.navigationBehaviorOptions=e}};function kf(n){return!(n instanceof $n)&&!(n instanceof Gn)&&!(n instanceof qi)}var uo=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(i){this.rootInjector=i,this.children=new Zn(this.rootInjector)}},Zn=(()=>{class n{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,t){let r=this.getOrCreateContext(e);r.outlet=t,this.contexts.set(e,r)}onChildOutletDestroyed(e){let t=this.getContext(e);t&&(t.outlet=null,t.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let t=this.getContext(e);return t||(t=new uo(this.rootInjector),this.contexts.set(e,t)),t}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(t){return new(t||n)(T(Ce))};static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ho=class{_root;constructor(i){this._root=i}get root(){return this._root.value}parent(i){let e=this.pathFromRoot(i);return e.length>1?e[e.length-2]:null}children(i){let e=Ds(i,this._root);return e?e.children.map(t=>t.value):[]}firstChild(i){let e=Ds(i,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(i){let e=ws(i,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==i)}pathFromRoot(i){return ws(i,this._root).map(e=>e.value)}};function Ds(n,i){if(n===i.value)return i;for(let e of i.children){let t=Ds(n,e);if(t)return t}return null}function ws(n,i){if(n===i.value)return[i];for(let e of i.children){let t=ws(n,e);if(t.length)return t.unshift(i),t}return[]}var qe=class{value;children;constructor(i,e){this.value=i,this.children=e}toString(){return`TreeNode(${this.value})`}};function Un(n){let i={};return n&&n.children.forEach(e=>i[e.value.outlet]=e),i}var Yi=class extends ho{snapshot;constructor(i,e){super(i),this.snapshot=e,Os(this,i)}toString(){return this.snapshot.toString()}};function pd(n,i){let e=Rf(n,i),t=new Ne([new jt("",{})]),r=new Ne({}),o=new Ne({}),a=new Ne({}),s=new Ne(""),l=new kt(t,r,a,s,o,I,n,e.root);return l.snapshot=e.root,new Yi(new qe(l,[]),e)}function Rf(n,i){let e={},t={},r={},a=new Wn([],e,r,"",t,I,n,null,{},i);return new Xi("",new qe(a,[]))}var kt=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;_localInjector;constructor(i,e,t,r,o,a,s,l){this.urlSubject=i,this.paramsSubject=e,this.queryParamsSubject=t,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(W(d=>d[Qi]))??A(void 0),this.url=i,this.params=e,this.queryParams=t,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(W(i=>gn(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(W(i=>gn(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}},Tf="always";function Is(n,i,e){let t,{routeConfig:r}=n;return i!==null&&(e==="always"||r?.path===""||!i.component&&!i.routeConfig?.loadComponent)?t={params:h(h({},i.params),n.params),data:h(h({},i.data),n.data),resolve:h(h(h(h({},n.data),i.data),r?.data),n._resolvedData)}:t={params:h({},n.params),data:h({},n.data),resolve:h(h({},n.data),n._resolvedData??{})},r&&vd(r)&&(t.resolve[Qi]=r.title),t}var Wn=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Qi]}constructor(i,e,t,r,o,a,s,l,d,u){this.url=i,this.params=e,this.queryParams=t,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=l,this._resolve=d,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=gn(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=gn(this.queryParams),this._queryParamMap}toString(){let i=this.url.map(t=>t.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${i}', path:'${e}')`}},Xi=class extends ho{url;constructor(i,e){super(e),this.url=i,Os(this,e)}toString(){return gd(this._root)}};function Os(n,i){i.value._routerState=n,i.children.forEach(e=>Os(n,e))}function gd(n){let i=n.children.length>0?` { ${n.children.map(gd).join(", ")} } `:"";return`${n.value}${i}`}function gs(n){if(n.snapshot){let i=n.snapshot,e=n._futureSnapshot;n.snapshot=e,pt(i.queryParams,e.queryParams)||n.queryParamsSubject.next(e.queryParams),i.fragment!==e.fragment&&n.fragmentSubject.next(e.fragment),pt(i.params,e.params)||n.paramsSubject.next(e.params),rf(i.url,e.url)||n.urlSubject.next(e.url),pt(i.data,e.data)||n.dataSubject.next(e.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function Es(n,i){let e=pt(n.params,i.params)&&cf(n.url,i.url),t=!n.parent!=!i.parent;return e&&!t&&(!n.parent||Es(n.parent,i.parent))}function vd(n){return typeof n.title=="string"||n.title===null}var bd=new b(""),Ji=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=I;activateEvents=new ie;deactivateEvents=new ie;attachEvents=new ie;detachEvents=new ie;routerOutletData=hn();parentContexts=c(Zn);location=c(Vt);changeDetector=c(Pe);inputBinder=c(go,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:t,previousValue:r}=e.name;if(t)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new O(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new O(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new O(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,t){this.activated=e,this._activatedRoute=t,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,t){if(this.isActivated)throw new O(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,l=new Ss(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:l,environmentInjector:t}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=k({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[ge]})}return n})(),Ss=class{route;childContexts;parent;outletData;constructor(i,e,t,r){this.route=i,this.childContexts=e,this.parent=t,this.outletData=r}get(i,e){return i===kt?this.route:i===Zn?this.childContexts:i===bd?this.outletData:this.parent.get(i,e)}},go=new b("");var Fs=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(t,r){t&1&&H(0,"router-outlet")},dependencies:[Ji],encapsulation:2,changeDetection:1})}return n})();function Ps(n){let i=n.children&&n.children.map(Ps),e=i?q(h({},n),{children:i}):h({},n);return!e.component&&!e.loadComponent&&(i||e.loadChildren)&&e.outlet&&e.outlet!==I&&(e.component=Fs),e}function If(n,i,e){let t=new Set,r=Zi(n,i._root,e?e._root:void 0,t);return{newlyCreatedRoutes:t,state:new Yi(r,i)}}function Zi(n,i,e,t){if(e&&n.shouldReuseRoute(i.value,e.value.snapshot)){let r=e.value;r._futureSnapshot=i.value;let o=Of(n,i,e,t);return new qe(r,o)}else{if(n.shouldAttach(i.value)){let a=n.retrieve(i.value);if(a!==null){let s=a.route;return s.value._futureSnapshot=i.value,s.children=i.children.map(l=>Zi(n,l,void 0,t)),s}}let r=Ff(i.value);t.add(r);let o=i.children.map(a=>Zi(n,a,void 0,t));return new qe(r,o)}}function Of(n,i,e,t){return i.children.map(r=>{for(let o of e.children)if(n.shouldReuseRoute(r.value,o.value.snapshot))return Zi(n,r,o,t);return Zi(n,r,void 0,t)})}function Ff(n){return new kt(new Ne(n.url),new Ne(n.params),new Ne(n.queryParams),new Ne(n.fragment),new Ne(n.data),n.outlet,n.component,n)}var qn=class{redirectTo;navigationBehaviorOptions;constructor(i,e){this.redirectTo=i,this.navigationBehaviorOptions=e}},_d="ngNavigationCancelingError";function mo(n,i){let{redirectTo:e,navigationBehaviorOptions:t}=zt(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,r=yd(!1,Ae.Redirect);return r.url=e,r.navigationBehaviorOptions=t,r}function yd(n,i){let e=new Error(`NavigationCancelingError: ${n||""}`);return e[_d]=!0,e.cancellationCode=i,e}function Pf(n){return Cd(n)&&zt(n.url)}function Cd(n){return!!n&&n[_d]}var Ms=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(i,e,t,r,o){this.routeReuseStrategy=i,this.futureState=e,this.currState=t,this.forwardEvent=r,this.inputBindingEnabled=o}activate(i){let e=this.futureState._root,t=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,t,i),gs(this.futureState.root),this.activateChildRoutes(e,t,i)}deactivateChildRoutes(i,e,t){let r=Un(e);i.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],t),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,t)})}deactivateRoutes(i,e,t){let r=i.value,o=e?e.value:null;if(r===o)if(r.component){let a=t.getContext(r.outlet);a&&this.deactivateChildRoutes(i,e,a.children)}else this.deactivateChildRoutes(i,e,t);else o&&this.deactivateRouteAndItsChildren(e,t)}deactivateRouteAndItsChildren(i,e){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,e):this.deactivateRouteAndOutlet(i,e)}detachAndStoreRouteSubtree(i,e){let t=e.getContext(i.value.outlet),r=t&&i.value.component?t.children:e,o=Un(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(t&&t.outlet){let a=t.outlet.detach(),s=t.children.onOutletDeactivated();this.routeReuseStrategy.store(i.value.snapshot,{componentRef:a,route:i,contexts:s})}}deactivateRouteAndOutlet(i,e){let t=e.getContext(i.value.outlet),r=t&&i.value.component?t.children:e,o=Un(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);t&&(t.outlet&&(t.outlet.deactivate(),t.children.onOutletDeactivated()),t.attachRef=null,t.route=null),i.value._localInjector?.destroy()}activateChildRoutes(i,e,t){let r=Un(e);i.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],t),this.forwardEvent(new co(o.value.snapshot))}),i.children.length&&this.forwardEvent(new so(i.value.snapshot))}activateRoutes(i,e,t){let r=i.value,o=e?e.value:null;if(gs(r),r===o)if(r.component){let a=t.getOrCreateContext(r.outlet);this.activateChildRoutes(i,e,a.children)}else this.activateChildRoutes(i,e,t);else if(r.component){let a=t.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),gs(s.route.value),this.activateChildRoutes(i,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(i,null,a.children)}else this.activateChildRoutes(i,null,t)}},fo=class{path;route;constructor(i){this.path=i,this.route=this.path[this.path.length-1]}},Hn=class{component;route;constructor(i,e){this.component=i,this.route=e}};function Nf(n,i,e){let t=n._root,r=i?i._root:null;return ji(t,r,e,[t.value])}function Lf(n){let i=n.routeConfig?n.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:n,guards:i}}function Kn(n,i){let e=Symbol(),t=i.get(n,e);return t===e?typeof n=="function"&&!Gl(n)?n:i.get(n):t}function ji(n,i,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=Un(i);return n.children.forEach(a=>{Bf(a,o[a.value.outlet],e,t.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>Hi(s,e.getContext(a),r)),r}function Bf(n,i,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=n.value,a=i?i.value:null,s=e?e.getContext(n.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let l=Vf(a,o,o.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new fo(t)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?ji(n,i,s?s.children:null,t,r):ji(n,i,e,t,r),l&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new Hn(s.outlet.component,a))}else a&&Hi(i,s,r),r.canActivateChecks.push(new fo(t)),o.component?ji(n,null,s?s.children:null,t,r):ji(n,null,e,t,r);return r}function Vf(n,i,e){if(typeof e=="function")return Ve(i._environmentInjector,()=>e(n,i));switch(e){case"pathParamsChange":return!pn(n.url,i.url);case"pathParamsOrQueryParamsChange":return!pn(n.url,i.url)||!pt(n.queryParams,i.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Es(n,i)||!pt(n.queryParams,i.queryParams);default:return!Es(n,i)}}function Hi(n,i,e){let t=Un(n),r=n.value;Object.entries(t).forEach(([o,a])=>{r.component?i?Hi(a,i.children.getContext(o),e):Hi(a,null,e):Hi(a,i,e)}),r.component?i&&i.outlet&&i.outlet.isActivated?e.canDeactivateChecks.push(new Hn(i.outlet.component,r)):e.canDeactivateChecks.push(new Hn(null,r)):e.canDeactivateChecks.push(new Hn(null,r))}function er(n){return typeof n=="function"}function jf(n){return typeof n=="boolean"}function Uf(n){return n&&er(n.canLoad)}function zf(n){return n&&er(n.canActivate)}function Hf(n){return n&&er(n.canActivateChild)}function $f(n){return n&&er(n.canDeactivate)}function Gf(n){return n&&er(n.canMatch)}function xd(n){return n instanceof zl||n?.name==="EmptyError"}var qr=Symbol("INITIAL_VALUE");function Yn(){return Ge(n=>Ar(n.map(i=>i.pipe(Ee(1),nt(qr)))).pipe(W(i=>{for(let e of i)if(e!==!0){if(e===qr)return qr;if(e===!1||Wf(e))return e}return!0}),he(i=>i!==qr),Ee(1)))}function Wf(n){return zt(n)||n instanceof qn}function Dd(n){return n.aborted?A(void 0).pipe(Ee(1)):new ct(i=>{let e=()=>{i.next(),i.complete()};return n.addEventListener("abort",e),()=>n.removeEventListener("abort",e)})}function wd(n){return Re(Dd(n))}function qf(n){return Ft(i=>{let{targetSnapshot:e,currentSnapshot:t,guards:{canActivateChecks:r,canDeactivateChecks:o}}=i;return o.length===0&&r.length===0?A(q(h({},i),{guardsResult:!0})):Yf(o,e,t).pipe(Ft(a=>a&&jf(a)?Xf(e,r,n):A(a)),W(a=>q(h({},i),{guardsResult:a})))})}function Yf(n,i,e){return Be(n).pipe(Ft(t=>ep(t.component,t.route,e,i)),Nt(t=>t!==!0,!0))}function Xf(n,i,e){return Be(i).pipe(Di(t=>kr(Kf(t.route.parent,e),Zf(t.route,e),Jf(n,t.path),Qf(n,t.route))),Nt(t=>t!==!0,!0))}function Zf(n,i){return n!==null&&i&&i(new lo(n)),A(!0)}function Kf(n,i){return n!==null&&i&&i(new ao(n)),A(!0)}function Qf(n,i){let e=i.routeConfig?i.routeConfig.canActivate:null;if(!e||e.length===0)return A(!0);let t=e.map(r=>Pt(()=>{let o=i._environmentInjector,a=Kn(r,o),s=zf(a)?a.canActivate(i,n):Ve(o,()=>a(i,n));return _n(s).pipe(Nt())}));return A(t).pipe(Yn())}function Jf(n,i){let e=i[i.length-1],r=i.slice(0,i.length-1).reverse().map(o=>Lf(o)).filter(o=>o!==null).map(o=>Pt(()=>{let a=o.guards.map(s=>{let l=o.node._environmentInjector,d=Kn(s,l),u=Hf(d)?d.canActivateChild(e,n):Ve(l,()=>d(e,n));return _n(u).pipe(Nt())});return A(a).pipe(Yn())}));return A(r).pipe(Yn())}function ep(n,i,e,t){let r=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!r||r.length===0)return A(!0);let o=r.map(a=>{let s=i._environmentInjector,l=Kn(a,s),d=$f(l)?l.canDeactivate(n,i,e,t):Ve(s,()=>l(n,i,e,t));return _n(d).pipe(Nt())});return A(o).pipe(Yn())}function tp(n,i,e,t,r){let o=i.canLoad;if(o===void 0||o.length===0)return A(!0);let a=o.map(s=>{let l=Kn(s,n),d=Uf(l)?l.canLoad(i,e):Ve(n,()=>l(i,e)),u=_n(d);return r?u.pipe(wd(r)):u});return A(a).pipe(Yn(),Ed(t))}function Ed(n){return Ul(Te(i=>{if(typeof i!="boolean")throw mo(n,i)}),W(i=>i===!0))}function np(n,i,e,t,r,o){let a=i.canMatch;if(!a||a.length===0)return A(!0);let s=a.map(l=>{let d=Kn(l,n),u=Gf(d)?d.canMatch(i,e,r):Ve(n,()=>d(i,e,r));return _n(u).pipe(wd(o))});return A(s).pipe(Yn(),Ed(t))}var Mt=class n extends Error{segmentGroup;constructor(i){super(),this.segmentGroup=i||null,Object.setPrototypeOf(this,n.prototype)}},Ki=class n extends Error{urlTree;constructor(i){super(),this.urlTree=i,Object.setPrototypeOf(this,n.prototype)}};function ip(n){throw new O(4e3,!1)}function rp(n){throw yd(!1,Ae.GuardRejected)}var As=class{urlSerializer;urlTree;constructor(i,e){this.urlSerializer=i,this.urlTree=e}async lineralizeSegments(i,e){let t=[],r=e.root;for(;;){if(t=t.concat(r.segments),r.numberOfChildren===0)return t;if(r.numberOfChildren>1||!r.children[I])throw ip(`${i.redirectTo}`);r=r.children[I]}}async applyRedirectCommands(i,e,t,r,o){let a=await op(e,r,o);if(a instanceof Ye)throw new Ki(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),i,t);if(a[0]==="/")throw new Ki(s);return s}applyRedirectCreateUrlTree(i,e,t,r){let o=this.createSegmentGroup(i,e.root,t,r);return new Ye(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(i,e){let t={};return Object.entries(i).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);t[r]=e[s]}else t[r]=o}),t}createSegmentGroup(i,e,t,r){let o=this.createSegments(i,e.segments,t,r),a=Object.create(null);return Object.entries(e.children).forEach(([s,l])=>{a[s]=this.createSegmentGroup(i,l,t,r)}),new Q(o,a)}createSegments(i,e,t,r){return e.map(o=>o.path[0]===":"?this.findPosParam(i,o,r):this.findOrReturn(o,t))}findPosParam(i,e,t){let r=t[e.path.substring(1)];if(!r)throw new O(4001,!1);return r}findOrReturn(i,e){let t=0;for(let r of e){if(r.path===i.path)return e.splice(t),r;t++}return i}};function op(n,i,e){if(typeof n=="string")return Promise.resolve(n);let t=n;return Kr(_n(Ve(e,()=>t(i))))}function ap(n,i){return n.providers&&!n._injector&&(n._injector=La(n.providers,i,`Route: ${n.path}`)),n._injector??i}function st(n){return n.outlet||I}function sp(n,i){let e=n.filter(t=>st(t)===i);return e.push(...n.filter(t=>st(t)!==i)),e}var ks={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Sd(n){return{routeConfig:n.routeConfig,url:n.url,params:n.params,queryParams:n.queryParams,fragment:n.fragment,data:n.data,outlet:n.outlet,title:n.title,paramMap:n.paramMap,queryParamMap:n.queryParamMap}}function lp(n,i,e,t,r,o,a){let s=Md(n,i,e);if(!s.matched)return A(s);let l=Sd(o(s));return t=ap(i,t),np(t,i,e,r,l,a).pipe(W(d=>d===!0?s:h({},ks)))}function Md(n,i,e){if(i.path==="")return i.pathMatch==="full"&&(n.hasChildren()||e.length>0)?h({},ks):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(i.matcher||Kc)(e,n,i);if(!r)return h({},ks);let o={};Object.entries(r.posParams??{}).forEach(([s,l])=>{o[s]=l.path});let a=r.consumed.length>0?h(h({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function Yc(n,i,e,t,r){return e.length>0&&up(n,e,t,r)?{segmentGroup:new Q(i,dp(t,new Q(e,n.children))),slicedSegments:[]}:e.length===0&&hp(n,e,t)?{segmentGroup:new Q(n.segments,cp(n,e,t,n.children)),slicedSegments:e}:{segmentGroup:new Q(n.segments,n.children),slicedSegments:e}}function cp(n,i,e,t){let r={};for(let o of e)if(vo(n,i,o)&&!t[st(o)]){let a=new Q([],{});r[st(o)]=a}return h(h({},t),r)}function dp(n,i){let e={};e[I]=i;for(let t of n)if(t.path===""&&st(t)!==I){let r=new Q([],{});e[st(t)]=r}return e}function up(n,i,e,t){return e.some(r=>!vo(n,i,r)||!(st(r)!==I)?!1:!(t!==void 0&&st(r)===t))}function hp(n,i,e){return e.some(t=>vo(n,i,t))}function vo(n,i,e){return(n.hasChildren()||i.length>0)&&e.pathMatch==="full"?!1:e.path===""}function mp(n,i,e){return i.length===0&&!n.children[e]}var Rs=class{};async function fp(n,i,e,t,r,o,a,s){return new Ts(n,i,e,t,r,a,o,s).recognize()}var pp=31,Ts=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(i,e,t,r,o,a,s,l){this.injector=i,this.configLoader=e,this.rootComponentType=t,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=l,this.applyRedirects=new As(this.urlSerializer,this.urlTree)}noMatchError(i){return new O(4002,`'${i.segmentGroup}'`)}async recognize(){let i=Yc(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:t}=await this.match(i),r=new qe(t,e),o=new Xi("",r),a=cd(t,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(i){let e=new Wn([],Object.freeze({}),Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),I,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,i,I,e),rootSnapshot:e}}catch(t){if(t instanceof Ki)return this.urlTree=t.urlTree,this.match(t.urlTree.root);throw t instanceof Mt?this.noMatchError(t):t}}async processSegmentGroup(i,e,t,r,o){if(t.segments.length===0&&t.hasChildren())return this.processChildren(i,e,t,o);let a=await this.processSegment(i,e,t,t.segments,r,!0,o);return a instanceof qe?[a]:[]}async processChildren(i,e,t,r){let o=[];for(let l of Object.keys(t.children))l==="primary"?o.unshift(l):o.push(l);let a=[];for(let l of o){let d=t.children[l],u=sp(e,l),v=await this.processSegmentGroup(i,u,d,l,r);a.push(...v)}let s=Ad(a);return gp(s),s}async processSegment(i,e,t,r,o,a,s){for(let l of e)try{return await this.processSegmentAgainstRoute(l._injector??i,e,l,t,r,o,a,s)}catch(d){if(d instanceof Mt||xd(d))continue;throw d}if(mp(t,r,o))return new Rs;throw new Mt(t)}async processSegmentAgainstRoute(i,e,t,r,o,a,s,l){if(st(t)!==a&&(a===I||!vo(r,o,t)))throw new Mt(r);if(t.redirectTo===void 0)return this.matchSegmentAgainstRoute(i,r,t,o,a,l);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(i,r,e,t,o,a,l);throw new Mt(r)}async expandSegmentAgainstRouteUsingRedirect(i,e,t,r,o,a,s){let{matched:l,parameters:d,consumedSegments:u,positionalParamSegments:v,remainingSegments:y}=Md(e,r,o);if(!l)throw new Mt(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>pp&&(this.allowRedirects=!1));let U=this.createSnapshot(i,r,o,d,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let z=await this.applyRedirects.applyRedirectCommands(u,r.redirectTo,v,Sd(U),i),G=await this.applyRedirects.lineralizeSegments(r,z);return this.processSegment(i,t,e,G.concat(y),a,!1,s)}createSnapshot(i,e,t,r,o){let a=new Wn(t,r,Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,bp(e),st(e),e.component??e._loadedComponent??null,e,_p(e),i),s=Is(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(i,e,t,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=we=>this.createSnapshot(i,t,we.consumedSegments,we.parameters,a),l=await Kr(lp(e,t,r,i,this.urlSerializer,s,this.abortSignal));if(t.path==="**"&&(e.children={}),!l?.matched)throw new Mt(e);i=t._injector??i;let{routes:d}=await this.getChildConfig(i,t,r),u=t._loadedInjector??i,{parameters:v,consumedSegments:y,remainingSegments:U}=l,z=this.createSnapshot(i,t,y,v,a),{segmentGroup:G,slicedSegments:ne}=Yc(e,y,U,d,o);if(ne.length===0&&G.hasChildren()){let we=await this.processChildren(u,d,G,z);return new qe(z,we)}if(d.length===0&&ne.length===0)return new qe(z,[]);let He=st(t)===o,$e=await this.processSegment(u,d,G,ne,He?I:o,!0,z);return new qe(z,$e instanceof qe?[$e]:[])}async getChildConfig(i,e,t){if(e.children)return{routes:e.children,injector:i};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(i).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Kr(tp(i,e,t,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(i,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw rp(e)}return{routes:[],injector:i}}};function gp(n){n.sort((i,e)=>i.value.outlet===I?-1:e.value.outlet===I?1:i.value.outlet.localeCompare(e.value.outlet))}function vp(n){let i=n.value.routeConfig;return i&&i.path===""}function Ad(n){let i=[],e=new Set;for(let t of n){if(!vp(t)){i.push(t);continue}let r=i.find(o=>t.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...t.children),e.add(r)):i.push(t)}for(let t of e){let r=Ad(t.children);i.push(new qe(t.value,r))}return i.filter(t=>!e.has(t))}function bp(n){return n.data||{}}function _p(n){return n.resolve||{}}function yp(n,i,e,t,r,o,a){return Ft(async s=>{let{state:l,tree:d}=await fp(n,i,e,t,s.extractedUrl,r,o,a);return q(h({},s),{targetSnapshot:l,urlAfterRedirects:d})})}function Cp(n){return Ft(i=>{let{targetSnapshot:e,guards:{canActivateChecks:t}}=i;if(!t.length)return A(i);let r=new Set(t.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let l of kd(s))o.add(l);let a=0;return Be(o).pipe(Di(s=>r.has(s)?xp(s,e,n):(s.data=Is(s,s.parent,n).resolve,A(void 0))),Te(()=>a++),Ta(1),Ft(s=>a===o.size?A(i):Le))})}function kd(n){let i=n.children.map(e=>kd(e)).flat();return[n,...i]}function xp(n,i,e){let t=n.routeConfig,r=n._resolve;return t?.title!==void 0&&!vd(t)&&(r[Qi]=t.title),Pt(()=>(n.data=Is(n,n.parent,e).resolve,Dp(r,n,i).pipe(W(o=>(n._resolvedData=o,n.data=h(h({},n.data),o),null)))))}function Dp(n,i,e){let t=bs(n);if(t.length===0)return A({});let r={};return Be(t).pipe(Ft(o=>wp(n[o],i,e).pipe(Nt(),Te(a=>{if(a instanceof qn)throw mo(new Ut,a);r[o]=a}))),Ta(1),W(()=>r),xi(o=>xd(o)?Le:Sr(o)))}function wp(n,i,e){let t=i._environmentInjector,r=Kn(n,t),o=r.resolve?r.resolve(i,e):Ve(t,()=>r(i,e));return _n(o)}function Xc(n){return Ge(i=>{let e=n(i);return e?Be(e).pipe(W(()=>i)):A(i)})}var Ns=(()=>{class n{buildTitle(e){let t,r=e.root;for(;r!==void 0;)t=this.getResolvedTitleForRoute(r)??t,r=r.children.find(o=>o.outlet===I);return t}getResolvedTitleForRoute(e){return e.data[Qi]}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:()=>c(Rd)})}return n})(),Rd=(()=>{class n extends Ns{title;constructor(e){super(),this.title=e}updateTitle(e){let t=this.buildTitle(e);t!==void 0&&this.title.setTitle(t)}static \u0275fac=function(t){return new(t||n)(T(Uc))};static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Qn=new b("",{factory:()=>({})}),tr=new b(""),Td=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=c(gc);async loadComponent(e,t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Promise.resolve(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let r=(async()=>{try{let o=await Jc(Ve(e,()=>t.loadComponent())),a=await Od($a(o));return this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=a,a}finally{this.componentLoaders.delete(t)}})();return this.componentLoaders.set(t,r),r}loadChildren(e,t){if(this.childrenLoaders.get(t))return this.childrenLoaders.get(t);if(t._loadedRoutes)return Promise.resolve({routes:t._loadedRoutes,injector:t._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(t);let r=(async()=>{try{let o=await Id(t,this.compiler,e,this.onLoadEndListener);return t._loadedRoutes=o.routes,t._loadedInjector=o.injector,t._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(t)}})();return this.childrenLoaders.set(t,r),r}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})();async function Id(n,i,e,t){let r=await Jc(Ve(e,()=>n.loadChildren())),o=await Od($a(r)),a;o instanceof dc||Array.isArray(o)?a=o:a=await i.compileModuleAsync(o),t&&t(n);let s,l,d=!1,u;return Array.isArray(a)?(l=a,d=!0):(s=a.create(e).injector,u=a,l=s.get(tr,[],{optional:!0,self:!0}).flat()),{routes:l.map(Ps),injector:s,factory:u}}async function Od(n){return n}var bo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:()=>c(Ep)})}return n})(),Ep=(()=>{class n{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,t){return e}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})(),Fd=new b("");var Pd=new b(""),Sp=()=>{},Nd=new b(""),Ld=(()=>{class n{currentNavigation=R(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=R(null);events=new M;transitionAbortWithErrorSubject=new M;configLoader=c(Td);environmentInjector=c(Ce);destroyRef=c(_t);urlSerializer=c(Xn);rootContexts=c(Zn);location=c(wt);inputBindingEnabled=c(go,{optional:!0})!==null;titleStrategy=c(Ns);options=c(Qn,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||Tf;urlHandlingStrategy=c(bo);createViewTransition=c(Fd,{optional:!0});navigationErrorHandler=c(Nd,{optional:!0});activatedRouteInjectorFeature=c(Pd,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>A(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new ro(r)),t=r=>this.events.next(new oo(r));this.configLoader.onLoadEndListener=t,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let t=++this.navigationId;j(()=>{this.transitions?.next(q(h({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:t,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new Ne(null),this.transitions.pipe(he(t=>t!==null),Ge(t=>{let r=!0,o=!1,a=new AbortController,s=()=>!o&&this.currentTransition?.id===t.id;return A(t).pipe(Ge(l=>{if(this.navigationId>t.id)return this.cancelNavigationTransition(t,"",Ae.SupersededByNewNavigation),Le;this.currentTransition=t;let d=this.lastSuccessfulNavigation();this.currentNavigation.set({id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,targetBrowserUrl:typeof l.extras.browserUrl=="string"?this.urlSerializer.parse(l.extras.browserUrl):l.extras.browserUrl,trigger:l.source,extras:l.extras,previousNavigation:d?q(h({},d),{previousNavigation:null}):null,abort:()=>a.abort(),routesRecognizeHandler:l.routesRecognizeHandler,beforeActivateHandler:l.beforeActivateHandler});let u=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),v=l.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!u&&v!=="reload")return this.events.next(new At(l.id,this.urlSerializer.serialize(l.rawUrl),"",Gi.IgnoredSameUrlNavigation)),l.resolve(!1),Le;if(this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return A(l).pipe(Ge(y=>(this.events.next(new vn(y.id,this.urlSerializer.serialize(y.extractedUrl),y.source,y.restoredState)),y.id!==this.navigationId?Le:Promise.resolve(y))),yp(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,a.signal),Te(y=>{t.targetSnapshot=y.targetSnapshot,t.urlAfterRedirects=y.urlAfterRedirects,this.currentNavigation.update(U=>(U.finalUrl=y.urlAfterRedirects,U)),this.events.next(new qi)}),Ge(y=>Be(t.routesRecognizeHandler.deferredHandle??A(void 0)).pipe(W(()=>y))),Te(()=>{let y=new Wi(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(y)}));if(u&&this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:y,extractedUrl:U,source:z,restoredState:G,extras:ne}=l,He=new vn(y,this.urlSerializer.serialize(U),z,G);this.events.next(He);let $e=pd(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=t=q(h({},l),{targetSnapshot:$e,urlAfterRedirects:U,extras:q(h({},ne),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(we=>(we.finalUrl=U,we)),A(t)}else return this.events.next(new At(l.id,this.urlSerializer.serialize(l.extractedUrl),"",Gi.IgnoredByUrlHandlingStrategy)),l.resolve(!1),Le}),W(l=>{let d=new eo(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);return this.events.next(d),this.currentTransition=t=q(h({},l),{guards:Nf(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),t}),qf(l=>this.events.next(l)),Ge(l=>{if(t.guardsResult=l.guardsResult,l.guardsResult&&typeof l.guardsResult!="boolean")throw mo(this.urlSerializer,l.guardsResult);let d=new to(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);if(this.events.next(d),!s())return Le;if(!l.guardsResult)return this.cancelNavigationTransition(l,"",Ae.GuardRejected),Le;if(l.guards.canActivateChecks.length===0)return A(l);let u=new no(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);if(this.events.next(u),!s())return Le;let v=!1;return A(l).pipe(Cp(this.paramsInheritanceStrategy),Te({next:()=>{v=!0;let y=new io(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(y)},complete:()=>{v||this.cancelNavigationTransition(l,"",Ae.NoDataFromResolver)}}))}),Xc(l=>{let d=v=>{let y=[];if(v.routeConfig?._loadedComponent)v.component=v.routeConfig?._loadedComponent;else if(v.routeConfig?.loadComponent){let U=v._environmentInjector;y.push(this.configLoader.loadComponent(U,v.routeConfig).then(z=>{v.component=z}))}for(let U of v.children)y.push(...d(U));return y},u=d(l.targetSnapshot.root);return u.length===0?A(l):Be(Promise.all(u).then(()=>l))}),Ge(l=>{let{newlyCreatedRoutes:d,state:u}=If(e.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=t=l=q(h({},l),{targetRouterState:u,newlyCreatedRoutes:d}),this.currentNavigation.update(v=>(v.targetRouterState=u,v)),A(l)}),this.activatedRouteInjectorFeature?.operator()??(l=>l),Xc(()=>this.afterPreactivation()),Ge(()=>{let{currentSnapshot:l,targetSnapshot:d}=t,u=this.createViewTransition?.(this.environmentInjector,l.root,d.root);return u?Be(u).pipe(W(()=>t)):A(t)}),Ee(1),Ge(l=>{r=!1,this.events.next(new $n);let d=t.beforeActivateHandler.deferredHandle;return d?Be(d.then(()=>l)):A(l)}),Te(l=>{new Ms(e.routeReuseStrategy,t.targetRouterState,t.currentRouterState,d=>this.events.next(d),this.inputBindingEnabled).activate(this.rootContexts),l.newlyCreatedRoutes?.clear(),s()&&(o=!0,this.currentNavigation.update(d=>(d.abort=Sp,d)),this.lastSuccessfulNavigation.set(j(this.currentNavigation)),this.events.next(new gt(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),this.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0))}),Re(Dd(a.signal).pipe(he(()=>!o&&r),Te(()=>{this.cancelNavigationTransition(t,a.signal.reason+"",Ae.Aborted)}))),Te({complete:()=>{o=!0}}),Re(this.transitionAbortWithErrorSubject.pipe(Te(l=>{throw l}))),Tn(()=>{a.abort(),o||this.cancelNavigationTransition(t,"",Ae.SupersededByNewNavigation),this.currentTransition?.id===t.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),xi(l=>{if(o=!0,Zc(t),this.destroyed)return t.resolve(!1),Le;if(Cd(l))this.events.next(new Je(t.id,this.urlSerializer.serialize(t.extractedUrl),l.message,l.cancellationCode)),Pf(l)?this.events.next(new Gn(l.url,l.navigationBehaviorOptions)):t.resolve(!1);else{let d=new bn(t.id,this.urlSerializer.serialize(t.extractedUrl),l,t.targetSnapshot??void 0);try{let u=Ve(this.environmentInjector,()=>this.navigationErrorHandler?.(d));if(u instanceof qn){let{message:v,cancellationCode:y}=mo(this.urlSerializer,u);this.events.next(new Je(t.id,this.urlSerializer.serialize(t.extractedUrl),v,y)),this.events.next(new Gn(u.redirectTo,u.navigationBehaviorOptions))}else throw this.events.next(d),l}catch(u){this.options.resolveNavigationPromiseOnError?t.resolve(!1):t.reject(u)}}return Le}))}))}cancelNavigationTransition(e,t,r){Zc(e);let o=new Je(e.id,this.urlSerializer.serialize(e.extractedUrl),t,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),t=j(this.currentNavigation),r=t?.targetBrowserUrl??t?.extractedUrl;return e.toString()!==r?.toString()&&!t?.extras.skipLocationChange}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})();function Mp(n){return n!==zi}function Zc(n){if(n.newlyCreatedRoutes)for(let i of n.newlyCreatedRoutes)i._localInjector?.destroy()}var Bd=new b("");var Vd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:()=>c(Ap)})}return n})(),po=class{shouldDetach(i){return!1}store(i,e){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,e){return i.routeConfig===e.routeConfig}shouldDestroyInjector(i){return!0}},Ap=(()=>{class n extends po{static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})(),_o=(()=>{class n{urlSerializer=c(Xn);options=c(Qn,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=c(wt);urlHandlingStrategy=c(bo);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Ye;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:t,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,t):t,a=r??o;return a instanceof Ye?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:t,initialUrl:r}){t&&e?(this.currentUrlTree=t,this.rawUrlTree=this.urlHandlingStrategy.merge(t,r),this.routerState=e):this.rawUrlTree=r}routerState=pd(null,c(Ce));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:()=>c(kp)})}return n})(),kp=(()=>{class n extends _o{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(t=>{t.type==="popstate"&&setTimeout(()=>{e(t.url,t.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,t){e instanceof vn?this.updateStateMemento():e instanceof At?this.commitTransition(t):e instanceof Wi?this.urlUpdateStrategy==="eager"&&(t.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof $n?(this.commitTransition(t),this.urlUpdateStrategy==="deferred"&&!t.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof Je&&!fd(e)?this.restoreHistory(t):e instanceof bn?this.restoreHistory(t,!0):e instanceof gt&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,t){let{extras:r,id:o}=t,{replaceUrl:a,state:s}=r;if(this.location.isCurrentPathEqualTo(e)||a){let l=this.browserPageId,d=h(h({},s),this.generateNgRouterState(o,l,t));this.location.replaceState(e,"",d)}else{let l=h(h({},s),this.generateNgRouterState(o,this.browserPageId+1,t));this.location.go(e,"",l)}}restoreHistory(e,t=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(t&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,t,r){return this.canceledNavigationResolution==="computed"?h({navigationId:e,\u0275routerPageId:t},this.routerUrlState(r)):h({navigationId:e},this.routerUrlState(r))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})();function Ls(n,i){n.events.pipe(he(e=>e instanceof gt||e instanceof Je||e instanceof bn||e instanceof At),W(e=>e instanceof gt||e instanceof At?0:(e instanceof Je?e.code===Ae.Redirect||e.code===Ae.SupersededByNewNavigation:!1)?2:1),he(e=>e!==2),Ee(1)).subscribe(()=>{i()})}var Ht=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=c(Ba);stateManager=c(_o);options=c(Qn,{optional:!0})||{};pendingTasks=c(Xl);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=c(Ld);urlSerializer=c(Xn);location=c(wt);urlHandlingStrategy=c(bo);injector=c(Ce);_events=new M;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=c(Vd);injectorCleanup=c(Bd,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=c(tr,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!c(go,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new Ke;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(t=>{try{let r=this.navigationTransitions.currentTransition,o=j(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(t,o),t instanceof Je&&t.code!==Ae.Redirect&&t.code!==Ae.SupersededByNewNavigation)this.navigated=!0;else if(t instanceof gt)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(t instanceof Gn){let a=t.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(t.url,r.currentRawUrl),l=h({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Mp(r.source)},a);this.scheduleNavigation(s,zi,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}kf(t)&&this._events.next(t)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),zi,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,t,r,o)=>{this.navigateToSyncWithBrowser(e,r,t,o)})}navigateToSyncWithBrowser(e,t,r,o){let a=r?.navigationId?r:null,s=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=q(h({},o),{browserUrl:e})),r){let d=h({},r);delete d.navigationId,delete d.\u0275routerPageId,delete d.\u0275routerUrl,Object.keys(d).length!==0&&(o.state=d)}let l=this.parseUrl(s);this.scheduleNavigation(l,t,a,o).catch(d=>{this.disposed||this.injector.get(Ei)(d)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return j(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Ps),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,t={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:l}=t,d=l?this.currentUrlTree.fragment:a,u=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":u=h(h({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let v;try{let y=r?r.snapshot:this.routerState.snapshot.root;v=dd(y)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),v=this.currentUrlTree.root}return ud(v,e,u,d??null,this.urlSerializer)}navigateByUrl(e,t={skipLocationChange:!1}){let r=zt(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,zi,null,t)}navigate(e,t={skipLocationChange:!1}){return Rp(e),this.navigateByUrl(this.createUrlTree(e,t),t)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(wi(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,t){let r;if(t===!0?r=h({},td):t===!1?r=h({},_s):r=h(h({},_s),t),zt(e))return Hc(this.currentUrlTree,e,r);let o=this.parseUrl(e);return Hc(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((t,[r,o])=>(o!=null&&(t[r]=o),t),{})}scheduleNavigation(e,t,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,l,d;a?(s=a.resolve,l=a.reject,d=a.promise):d=new Promise((v,y)=>{s=v,l=y});let u=this.pendingTasks.add();return Ls(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:t,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:l,promise:d,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),d.catch(Promise.reject.bind(Promise))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})();function Rp(n){for(let i=0;i<n.length;i++)if(n[i]==null)throw new O(4008,!1)}var Op=(()=>{class n{router=c(Ht);stateManager=c(_o);fragment=R("");queryParams=R({});path=R("");serializer=c(Xn);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof gt&&this.updateState()})}updateState(){let{fragment:e,root:t,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new Ye(t)))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})(),Jn=(()=>{class n{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=c(new Bn("href"),{optional:!0});reactiveHref=Ha(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return j(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return j(this._target)}_target=R(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return j(this._queryParams)}_queryParams=R(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return j(this._fragment)}_fragment=R(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return j(this._queryParamsHandling)}_queryParamsHandling=R(void 0);set state(e){this._state.set(e)}get state(){return j(this._state)}_state=R(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return j(this._info)}_info=R(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return j(this._relativeTo)}_relativeTo=R(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return j(this._preserveFragment)}_preserveFragment=R(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return j(this._skipLocationChange)}_skipLocationChange=R(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return j(this._replaceUrl)}_replaceUrl=R(!1);browserUrl=hn(void 0);isAnchorElement;onChanges=new M;applicationErrorHandler=c(Ei);options=c(Qn,{optional:!0});reactiveRouterState=c(Op);constructor(e,t,r,o,a,s){this.router=e,this.route=t,this.tabIndexAttribute=r,this.renderer=o,this.el=a,this.locationStrategy=s;let l=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area"||!!(typeof customElements=="object"&&customElements.get(l)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=R(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(zt(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,t,r,o,a){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||t||r||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let l=this.browserUrl(),d=h({skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info},l!==void 0&&{browserUrl:l});return this.router.navigateByUrl(s,d)?.catch(u=>{this.applicationErrorHandler(u)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,t){let r=this.renderer,o=this.el.nativeElement;t!==null?r.setAttribute(o,e,t):r.removeAttribute(o,e)}_urlTree=De(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let t=this.routerLinkInput();return t===null||!this.router.createUrlTree?null:zt(t)?t:this.router.createUrlTree(t,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,t)=>this.computeHref(e)===this.computeHref(t)});get urlTree(){return j(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(t){return new(t||n)(ee(Ht),ee(kt),Fa("tabindex"),ee(ue),ee(P),ee(ft))};static \u0275dir=k({type:n,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(t,r){t&1&&$("click",function(a){return r.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),t&2&&J("href",r.reactiveHref(),lc)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",Y],skipLocationChange:[2,"skipLocationChange","skipLocationChange",Y],replaceUrl:[2,"replaceUrl","replaceUrl",Y],browserUrl:[1,"browserUrl"],routerLink:"routerLink"},features:[ge]})}return n})();var Fp=new b("");function Bs(n,...i){return ln([{provide:tr,multi:!0,useValue:n},{provide:kt,useFactory:Pp},{provide:Va,multi:!0,useFactory:Lp},i.map(e=>e.\u0275providers)])}function Pp(){return c(Ht).routerState.root}function Np(n,i){return{\u0275kind:n,\u0275providers:i}}function Lp(){let n=c(L);return i=>{let e=n.get(xt);if(i!==e.components[0])return;let t=n.get(Ht),r=n.get(Bp);n.get(Vp)===1&&t.initialNavigation(),n.get(jp,null,{optional:!0})?.setUpPreloading(),n.get(Fp,null,{optional:!0})?.init(),t.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var Bp=new b("",{factory:()=>new M}),Vp=new b("",{factory:()=>1});var jp=new b("");function Vs(){return Np(6,[{provide:ft,useClass:Ya}])}var Up="@",zp=(()=>{class n{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=c(L);loadingSchedulerFn=c(Hp,{optional:!0});_engine;constructor(e,t,r,o,a){this.doc=e,this.delegate=t,this.zone=r,this.animationType=o,this.moduleImpl=a}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-F3GF4XFD.js").then(r=>r),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(r=>{throw new O(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:o})=>{this._engine=r(this.animationType,this.doc);let a=new o(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(e,t){let r=this.delegate.createRenderer(e,t);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let o=new js(r);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let s=a.createRenderer(e,t);o.use(s),this.scheduler??=this.injector.get(Ql,null,{optional:!0}),this.scheduler?.notify(10)}).catch(a=>{o.use(r)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(t){Fr()};static \u0275prov=B({token:n,factory:n.\u0275fac})}return n})(),js=class{delegate;replay=[];\u0275type=1;constructor(i){this.delegate=i}use(i){if(this.delegate=i,this.replay!==null){for(let e of this.replay)e(i);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(i,e){return this.delegate.createElement(i,e)}createComment(i){return this.delegate.createComment(i)}createText(i){return this.delegate.createText(i)}get destroyNode(){return this.delegate.destroyNode}appendChild(i,e){this.delegate.appendChild(i,e)}insertBefore(i,e,t,r){this.delegate.insertBefore(i,e,t,r)}removeChild(i,e,t,r){this.delegate.removeChild(i,e,t,r)}selectRootElement(i,e){return this.delegate.selectRootElement(i,e)}parentNode(i){return this.delegate.parentNode(i)}nextSibling(i){return this.delegate.nextSibling(i)}setAttribute(i,e,t,r){this.delegate.setAttribute(i,e,t,r)}removeAttribute(i,e,t){this.delegate.removeAttribute(i,e,t)}addClass(i,e){this.delegate.addClass(i,e)}removeClass(i,e){this.delegate.removeClass(i,e)}setStyle(i,e,t,r){this.delegate.setStyle(i,e,t,r)}removeStyle(i,e,t){this.delegate.removeStyle(i,e,t)}setProperty(i,e,t){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(i,e,t)),this.delegate.setProperty(i,e,t)}setValue(i,e){this.delegate.setValue(i,e)}listen(i,e,t,r){return this.shouldReplay(e)&&this.replay.push(o=>o.listen(i,e,t,r)),this.delegate.listen(i,e,t,r)}shouldReplay(i){return this.replay!==null&&i.startsWith(Up)}},Hp=new b("");function jd(n="animations"){return Na("NgAsyncAnimations"),ln([{provide:xe,useFactory:()=>new zp(c(E),c(Fi),c(S),n)},{provide:On,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var yo=new WeakMap,_e=(()=>{class n{_appRef;_injector=c(L);_environmentInjector=c(Ce);load(e){let t=this._appRef=this._appRef||this._injector.get(xt),r=yo.get(t);r||(r={loaders:new Set,refs:[]},yo.set(t,r),t.onDestroy(()=>{yo.get(t)?.refs.forEach(o=>o.destroy()),yo.delete(t)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(Br(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})();var ei=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return n})(),Co;function $p(){if(Co===void 0&&(Co=null,typeof window<"u")){let n=window;if(n.trustedTypes!==void 0)try{Co=n.trustedTypes.createPolicy("angular#components",{createHTML:i=>i})}catch(i){console.error(i)}}return Co}function yn(n){return $p()?.createHTML(n)||n}function Ud(n,i,e){let t=e.sanitize(Ie.HTML,i);n.innerHTML=yn(t||"")}function zd(n){return Error(`Unable to find icon with the name "${n}"`)}function Gp(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Hd(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function $d(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var Rt=class{url;svgText;options;svgElement=null;constructor(i,e,t){this.url=i,this.svgText=e,this.options=t}},Wd=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,r,o){this._httpClient=e,this._sanitizer=t,this._errorHandler=o,this._document=r}addSvgIcon(e,t,r){return this.addSvgIconInNamespace("",e,t,r)}addSvgIconLiteral(e,t,r){return this.addSvgIconLiteralInNamespace("",e,t,r)}addSvgIconInNamespace(e,t,r,o){return this._addSvgIconConfig(e,t,new Rt(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,r,o){let a=this._sanitizer.sanitize(Ie.HTML,r);if(!a)throw $d(r);let s=yn(a);return this._addSvgIconConfig(e,t,new Rt("",s,o))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,r){return this._addSvgIconSetConfig(e,new Rt(t,null,r))}addSvgIconSetLiteralInNamespace(e,t,r){let o=this._sanitizer.sanitize(Ie.HTML,t);if(!o)throw $d(t);let a=yn(o);return this._addSvgIconSetConfig(e,new Rt("",a,r))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(Ie.RESOURCE_URL,e);if(!t)throw Hd(e);let r=this._cachedIconsByUrl.get(t);return r?A(xo(r)):this._loadSvgIconFromConfig(new Rt(e,null)).pipe(Te(o=>this._cachedIconsByUrl.set(t,o)),W(o=>xo(o)))}getNamedSvgIcon(e,t=""){let r=Gd(t,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(t,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(t);return a?this._getSvgFromIconSetConfigs(e,a):Sr(zd(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?A(xo(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(W(t=>xo(t)))}_getSvgFromIconSetConfigs(e,t){let r=this._extractIconWithNameFromAnySet(e,t);if(r)return A(r);let o=t.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(xi(s=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(Ie.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(d)),A(null)})));return Rr(o).pipe(W(()=>{let a=this._extractIconWithNameFromAnySet(e,t);if(!a)throw zd(e);return a}))}_extractIconWithNameFromAnySet(e,t){for(let r=t.length-1;r>=0;r--){let o=t[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(Te(t=>e.svgText=t),W(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?A(null):this._fetchIcon(e).pipe(Te(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,r){let o=e.querySelector(`[id="${t}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(yn("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let r=t.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let t=this._svgElementFromString(yn("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o];a!=="id"&&t.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[o].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw Gp();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let a=this._sanitizer.sanitize(Ie.RESOURCE_URL,t);if(!a)throw Hd(t);let s=this._inProgressUrlFetches.get(a);if(s)return s;let l=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(W(d=>yn(d)),Tn(()=>this._inProgressUrlFetches.delete(a)),$l());return this._inProgressUrlFetches.set(a,l),l}_addSvgIconConfig(e,t,r){return this._svgIconConfigs.set(Gd(e,t),r),this}_addSvgIconSetConfig(e,t){let r=this._iconSetConfigs.get(e);return r?r.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](t,e);if(o)return Wp(o)?new Rt(o.url,null,o.options):new Rt(o,null)}}static \u0275fac=function(t){return new(t||n)(T(hs,8),T(Bi),T(E,8),T(cn))};static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function xo(n){return n.cloneNode(!0)}function Gd(n,i){return n+":"+i}function Wp(n){return!!(n.url&&n.options)}var qp=new b("cdk-dir-doc",{providedIn:"root",factory:()=>c(E)}),Yp=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function qd(n){let i=n?.toLowerCase()||"";return i==="auto"&&typeof navigator<"u"&&navigator?.language?Yp.test(navigator.language)?"rtl":"ltr":i==="rtl"?"rtl":"ltr"}var $t=(()=>{class n{get value(){return this.valueSignal()}valueSignal=R("ltr");change=new ie;constructor(){let e=c(qp,{optional:!0});if(e){let t=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(qd(t||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})();var me=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=F({})}return n})();var Xp=["*"],Zp=new b("MAT_ICON_DEFAULT_OPTIONS"),Kp=new b("mat-icon-location",{providedIn:"root",factory:()=>{let n=c(E),i=n?n.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}}),Yd=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Qp=Yd.map(n=>`[${n}]`).join(", "),Jp=/^url\(['"]?#(.*?)['"]?\)$/,Gt=(()=>{class n{_elementRef=c(P);_iconRegistry=c(Wd);_location=c(Kp);_errorHandler=c(cn);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=Ke.EMPTY;constructor(){let e=c(new Bn("aria-hidden"),{optional:!0}),t=c(Zp,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let r=e.childNodes[t];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),t.forEach(r=>e.classList.add(r)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(Qp),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<t.length;o++)Yd.forEach(a=>{let s=t[o],l=s.getAttribute(a),d=l?l.match(Jp):null;if(d){let u=r.get(s);u||(u=[],r.set(s,u)),u.push({name:a,value:d[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,r]=this._splitIconName(e);t&&(this._svgNamespace=t),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,t).pipe(Ee(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${t}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,r){t&2&&(J("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),mt(r.color?"mat-"+r.color:""),V("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",Y],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:Xp,decls:1,vars:0,template:function(t,r){t&1&&(Ue(),re(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2})}return n})(),Wt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=F({imports:[me]})}return n})();function nr(n){return n.buttons===0||n.detail===0}function ir(n){let i=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var Us;function Xd(){if(Us==null){let n=typeof document<"u"?document.head:null;Us=!!(n&&(n.createShadowRoot||n.attachShadow))}return Us}function zs(n){if(Xd()){let i=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function rr(){let n=typeof document<"u"&&document?document.activeElement:null;for(;n&&n.shadowRoot;){let i=n.shadowRoot.activeElement;if(i===n)break;n=i}return n}function ze(n){if(n.composedPath)try{return n.composedPath()[0]}catch{}return n.target}var Hs;try{Hs=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Hs=!1}var X=(()=>{class n{_platformId=c(In);isBrowser=this._platformId?wc(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Hs)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})();var or;function Zd(){if(or==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>or=!0}))}finally{or=or||!1}return or}function ti(n){return Zd()?n:!!n.capture}function ni(n,i=0){return Kd(n)?Number(n):arguments.length===2?i:0}function Kd(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function Ze(n){return n instanceof P?n.nativeElement:n}var Qd=new b("cdk-input-modality-detector-options"),Jd={ignoreKeys:[18,17,224,91,16]},eu=650,$s={passive:!0,capture:!0},tu=(()=>{class n{_platform=c(X);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Ne(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=ze(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<eu||(this._modality.next(nr(e)?"keyboard":"mouse"),this._mostRecentTarget=ze(e))};_onTouchstart=e=>{if(ir(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=ze(e)};constructor(){let e=c(S),t=c(E),r=c(Qd,{optional:!0});if(this._options=h(h({},Jd),r),this.modalityDetected=this._modality.pipe(Ir(1)),this.modalityChanged=this.modalityDetected.pipe(Ra()),this._platform.isBrowser){let o=c(xe).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(t,"keydown",this._onKeydown,$s),o.listen(t,"mousedown",this._onMousedown,$s),o.listen(t,"touchstart",this._onTouchstart,$s)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})(),ar=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(ar||{}),nu=new b("cdk-focus-monitor-default-options"),wo=ti({passive:!0,capture:!0}),sr=(()=>{class n{_ngZone=c(S);_platform=c(X);_inputModalityDetector=c(tu);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=c(E);_stopInputModalityDetector=new M;constructor(){let e=c(nu,{optional:!0});this._detectionMode=e?.detectionMode||ar.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=ze(e);for(let r=t;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,t=!1){let r=Ze(e);if(!this._platform.isBrowser||r.nodeType!==1)return A();let o=zs(r)||this._document,a=this._elementInfo.get(r);if(a)return t&&(a.checkChildren=!0),a.subject;let s={checkChildren:t,subject:new M,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let t=Ze(e),r=this._elementInfo.get(t);r&&(r.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(r))}focusVia(e,t,r){let o=Ze(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,l])=>this._originChanged(s,t,l)):(this._setOrigin(t),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===ar.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===ar.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?eu:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,t){let r=this._elementInfo.get(t),o=ze(e);!r||!r.checkChildren&&t!==o||this._originChanged(t,this._getFocusOrigin(o),r)}_onBlur(e,t){let r=this._elementInfo.get(t);!r||r.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(r,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,r=this._rootNodeFocusListenerCount.get(t)||0;r||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,wo),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,wo)}),this._rootNodeFocusListenerCount.set(t,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Re(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let r=this._rootNodeFocusListenerCount.get(t);r>1?this._rootNodeFocusListenerCount.set(t,r-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,wo),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,wo),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,r){this._setClasses(e,t),this._emitOrigin(r,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&t.push([o,r])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})();function ii(n){return Array.isArray(n)?n:[n]}var iu=new Set,Cn,Eo=(()=>{class n{_platform=c(X);_nonce=c(un,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):tg}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&eg(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})();function eg(n,i){if(!iu.has(n))try{Cn||(Cn=document.createElement("style"),i&&Cn.setAttribute("nonce",i),Cn.setAttribute("type","text/css"),document.head.appendChild(Cn)),Cn.sheet&&(Cn.sheet.insertRule(`@media ${n.replace(/[{}]/g,"")} {body{ }}`,0),iu.add(n))}catch(e){console.error(e)}}function tg(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var lr=(()=>{class n{_mediaMatcher=c(Eo);_zone=c(S);_queries=new Map;_destroySubject=new M;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return ru(ii(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=ru(ii(e)).map(a=>this._registerQuery(a).observable),o=Ar(r);return o=kr(o.pipe(Ee(1)),o.pipe(Ir(1),Hl(0))),o.pipe(W(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:l,query:d})=>{s.matches=s.matches||l,s.breakpoints[d]=l}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),o={observable:new ct(a=>{let s=l=>this._zone.run(()=>a.next(l));return t.addListener(s),()=>{t.removeListener(s)}}).pipe(nt(t),W(({matches:a})=>({query:e,matches:a})),Re(this._destroySubject)),mql:t};return this._queries.set(e,o),o}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})();function ru(n){return n.map(i=>i.split(",")).reduce((i,e)=>i.concat(e)).map(i=>i.trim())}var ng=(()=>{class n{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})();var So=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=F({providers:[ng]})}return n})();var ri=(()=>{class n{_platform=c(X);isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return rg(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let t=ig(hg(e));if(t&&(ou(t)===-1||!this.isVisible(t)))return!1;let r=e.nodeName.toLowerCase(),o=ou(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!dg(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,t){return ug(e)&&!this.isDisabled(e)&&(t?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})();function ig(n){try{return n.frameElement}catch{return null}}function rg(n){return!!(n.offsetWidth||n.offsetHeight||typeof n.getClientRects=="function"&&n.getClientRects().length)}function og(n){let i=n.nodeName.toLowerCase();return i==="input"||i==="select"||i==="button"||i==="textarea"}function ag(n){return lg(n)&&n.type=="hidden"}function sg(n){return cg(n)&&n.hasAttribute("href")}function lg(n){return n.nodeName.toLowerCase()=="input"}function cg(n){return n.nodeName.toLowerCase()=="a"}function lu(n){if(!n.hasAttribute("tabindex")||n.tabIndex===void 0)return!1;let i=n.getAttribute("tabindex");return!!(i&&!isNaN(parseInt(i,10)))}function ou(n){if(!lu(n))return null;let i=parseInt(n.getAttribute("tabindex")||"",10);return isNaN(i)?-1:i}function dg(n){let i=n.nodeName.toLowerCase(),e=i==="input"&&n.type;return e==="text"||e==="password"||i==="select"||i==="textarea"}function ug(n){return ag(n)?!1:og(n)||sg(n)||n.hasAttribute("contenteditable")||lu(n)}function hg(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}var Mo=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(i){this._enabled=i,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_enabled=!0;constructor(i,e,t,r,o=!1,a){this._element=i,this._checker=e,this._ngZone=t,this._document=r,this._injector=a,o||this.attachAnchors()}destroy(){let i=this._startAnchor,e=this._endAnchor;i&&(i.removeEventListener("focus",this.startAnchorListener),i.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(i)))})}focusFirstTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(i)))})}focusLastTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(i)))})}_getRegionBoundary(i){let e=this._element.querySelectorAll(`[cdk-focus-region-${i}], [cdkFocusRegion${i}], [cdk-focus-${i}]`);return i=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(i){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let t=this._getFirstTabbableElement(e);return t?.focus(i),!!t}return e.focus(i),!0}return this.focusFirstTabbableElement(i)}focusFirstTabbableElement(i){let e=this._getRegionBoundary("start");return e&&e.focus(i),!!e}focusLastTabbableElement(i){let e=this._getRegionBoundary("end");return e&&e.focus(i),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=0;t<e.length;t++){let r=e[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[t]):null;if(r)return r}return null}_getLastTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=e.length-1;t>=0;t--){let r=e[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[t]):null;if(r)return r}return null}_createAnchor(){let i=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,i),i.classList.add("cdk-visually-hidden"),i.classList.add("cdk-focus-trap-anchor"),i.setAttribute("aria-hidden","true"),i}_toggleAnchorTabIndex(i,e){i?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(i){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_executeOnStable(i){je(i,{injector:this._injector})}},Ws=(()=>{class n{_checker=c(ri);_ngZone=c(S);_document=c(E);_injector=c(L);constructor(){c(_e).load(ei)}create(e,t=!1){return new Mo(e,this._checker,this._ngZone,this._document,t,this._injector)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})();var cu=new b("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),du=new b("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),mg=0,qs=(()=>{class n{_ngZone=c(S);_defaultOptions=c(du,{optional:!0});_liveElement;_document=c(E);_sanitizer=c(Bi);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=c(cu,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let r=this._defaultOptions,o,a;return t.length===1&&typeof t[0]=="number"?a=t[0]:[o,a]=t,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:"polite"),a==null&&r&&(a=r.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:Ud(this._liveElement,e,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",t=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let o=0;o<t.length;o++)t[o].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${mg++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<t.length;r++){let o=t[r],a=o.getAttribute("aria-owns");a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})();var qt=(function(n){return n[n.NONE=0]="NONE",n[n.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",n[n.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",n})(qt||{}),au="cdk-high-contrast-black-on-white",su="cdk-high-contrast-white-on-black",Gs="cdk-high-contrast-active",uu=(()=>{class n{_platform=c(X);_hasCheckedHighContrastMode=!1;_document=c(E);_breakpointSubscription;constructor(){this._breakpointSubscription=c(lr).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return qt.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let t=this._document.defaultView||window,r=t&&t.getComputedStyle?t.getComputedStyle(e):null,o=(r&&r.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return qt.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return qt.BLACK_ON_WHITE}return qt.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(Gs,au,su),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===qt.BLACK_ON_WHITE?e.add(Gs,au):t===qt.WHITE_ON_BLACK&&e.add(Gs,su)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})(),cr=(()=>{class n{constructor(){c(uu)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=F({imports:[So]})}return n})();function Ao(n,...i){return i.length?i.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var hu=new Map,fe=class n{_appId=c(dn);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){this._appId!=="ng"&&(i+=this._appId);let t=hu.get(i);return t===void 0?t=0:t++,hu.set(i,t),`${i}${e?n._infix+"-":""}${t}`}static \u0275fac=function(e){return new(e||n)};static \u0275prov=_({token:n,factory:n.\u0275fac})};var fu=" ";function fg(n,i,e){let t=Ro(n,i);e=e.trim(),!t.some(r=>r.trim()===e)&&(t.push(e),n.setAttribute(i,t.join(fu)))}function pg(n,i,e){let t=Ro(n,i);e=e.trim();let r=t.filter(o=>o!==e);r.length?n.setAttribute(i,r.join(fu)):n.removeAttribute(i)}function Ro(n,i){return n.getAttribute(i)?.match(/\S+/g)??[]}var pu="cdk-describedby-message",ko="cdk-describedby-host",Xs=0,gu=(()=>{class n{_platform=c(X);_document=c(E);_messageRegistry=new Map;_messagesContainer=null;_id=`${Xs++}`;constructor(){c(_e).load(ei),this._id=c(dn)+"-"+Xs++}describe(e,t,r){if(!this._canBeDescribed(e,t))return;let o=Ys(t,r);typeof t!="string"?(mu(t,this._id),this._messageRegistry.set(o,{messageElement:t,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(t,r),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,t,r){if(!t||!this._isElementNode(e))return;let o=Ys(t,r);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof t=="string"){let a=this._messageRegistry.get(o);a&&a.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${ko}="${this._id}"]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute(ko);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,t){let r=this._document.createElement("div");mu(r,this._id),r.textContent=e,t&&r.setAttribute("role",t),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(Ys(e,t),{messageElement:r,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",t=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<t.length;o++)t[o].remove();let r=this._document.createElement("div");r.style.visibility="hidden",r.classList.add(e),r.classList.add("cdk-visually-hidden"),this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(e){let t=Ro(e,"aria-describedby").filter(r=>r.indexOf(pu)!=0);e.setAttribute("aria-describedby",t.join(" "))}_addMessageReference(e,t){let r=this._messageRegistry.get(t);fg(e,"aria-describedby",r.messageElement.id),e.setAttribute(ko,this._id),r.referenceCount++}_removeMessageReference(e,t){let r=this._messageRegistry.get(t);r.referenceCount--,pg(e,"aria-describedby",r.messageElement.id),e.removeAttribute(ko)}_isElementDescribedByMessage(e,t){let r=Ro(e,"aria-describedby"),o=this._messageRegistry.get(t),a=o&&o.messageElement.id;return!!a&&r.indexOf(a)!=-1}_canBeDescribed(e,t){if(!this._isElementNode(e))return!1;if(t&&typeof t=="object")return!0;let r=t==null?"":`${t}`.trim(),o=e.getAttribute("aria-label");return r?!o||o.trim()!==r:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})();function Ys(n,i){return typeof n=="string"?`${i||""}/${n}`:n}function mu(n,i){n.id||(n.id=`${pu}-${i}-${Xs++}`)}var xn;function vu(){if(xn==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return xn=!1,xn;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)xn=!0;else{let n=Element.prototype.scrollTo;n?xn=!/\{\s*\[native code\]\s*\}/.test(n.toString()):xn=!1}}return xn}function Zs(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var oi,bu=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Ks(){if(oi)return oi;if(typeof document!="object"||!document)return oi=new Set(bu),oi;let n=document.createElement("input");return oi=new Set(bu.filter(i=>(n.setAttribute("type",i),n.type===i))),oi}var _u={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var gg=new b("MATERIAL_ANIMATIONS"),yu=null;function vg(){return c(gg,{optional:!0})?.animationsDisabled||c(On,{optional:!0})==="NoopAnimations"?"di-disabled":(yu??=c(Eo).matchMedia("(prefers-reduced-motion)").matches,yu?"reduced-motion":"enabled")}function ye(){return vg()!=="enabled"}function pe(n){return n==null?"":typeof n=="string"?n:`${n}px`}function ai(n){return n!=null&&`${n}`!="false"}var et=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(et||{}),Qs=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=et.HIDDEN;constructor(i,e,t,r=!1){this._renderer=i,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},Cu=ti({passive:!0,capture:!0}),Js=class{_events=new Map;addHandler(i,e,t,r){let o=this._events.get(e);if(o){let a=o.get(t);a?a.add(r):o.set(t,new Set([r]))}else this._events.set(e,new Map([[t,new Set([r])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Cu)})}removeHandler(i,e,t){let r=this._events.get(i);if(!r)return;let o=r.get(e);o&&(o.delete(t),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,Cu)))}_delegateEventHandler=i=>{let e=ze(i);e&&this._events.get(i.type)?.forEach((t,r)=>{(r===e||r.contains(e))&&t.forEach(o=>o.handleEvent(i))})}},dr={enterDuration:225,exitDuration:150},bg=800,xu=ti({passive:!0,capture:!0}),Du=["mousedown","touchstart"],wu=["mouseup","mouseleave","touchend","touchcancel"],_g=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return n})(),ur=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Js;constructor(i,e,t,r,o){this._target=i,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=Ze(t)),o&&o.get(_e).load(_g)}fadeInRipple(i,e,t={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=h(h({},dr),t.animation);t.centered&&(i=r.left+r.width/2,e=r.top+r.height/2);let a=t.radius||yg(i,e,r),s=i-r.left,l=e-r.top,d=o.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${s-a}px`,u.style.top=`${l-a}px`,u.style.height=`${a*2}px`,u.style.width=`${a*2}px`,t.color!=null&&(u.style.backgroundColor=t.color),u.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(u);let v=window.getComputedStyle(u),y=v.transitionProperty,U=v.transitionDuration,z=y==="none"||U==="0s"||U==="0s, 0s"||r.width===0&&r.height===0,G=new Qs(this,u,t,z);u.style.transform="scale3d(1, 1, 1)",G.state=et.FADING_IN,t.persistent||(this._mostRecentTransientRipple=G);let ne=null;return!z&&(d||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let He=()=>{ne&&(ne.fallbackTimer=null),clearTimeout(we),this._finishRippleTransition(G)},$e=()=>this._destroyRipple(G),we=setTimeout($e,d+100);u.addEventListener("transitionend",He),u.addEventListener("transitioncancel",$e),ne={onTransitionEnd:He,onTransitionCancel:$e,fallbackTimer:we}}),this._activeRipples.set(G,ne),(z||!d)&&this._finishRippleTransition(G),G}fadeOutRipple(i){if(i.state===et.FADING_OUT||i.state===et.HIDDEN)return;let e=i.element,t=h(h({},dr),i.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",i.state=et.FADING_OUT,(i._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=Ze(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Du.forEach(t=>{n._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{wu.forEach(e=>{this._triggerElement.addEventListener(e,this,xu)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===et.FADING_IN?this._startFadeOutTransition(i):i.state===et.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:t}=i.config;i.state=et.VISIBLE,!t&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=et.HIDDEN,e!==null&&(i.element.removeEventListener("transitionend",e.onTransitionEnd),i.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=nr(i),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+bg;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!ir(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===et.VISIBLE||i.config.terminateOnPointerUp&&i.state===et.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(Du.forEach(e=>n._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(wu.forEach(e=>i.removeEventListener(e,this,xu)),this._pointerUpEventsRegistered=!1))}};function yg(n,i,e){let t=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),r=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(t*t+r*r)}var el=new b("mat-ripple-global-options"),Eu=(()=>{class n{_elementRef=c(P);_animationsDisabled=ye();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=c(S),t=c(X),r=c(el,{optional:!0}),o=c(L);this._globalOptions=r||{},this._rippleRenderer=new ur(this,e,this._elementRef,t,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:h(h(h({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,h(h({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,h(h({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=k({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,r){t&2&&V("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return n})();var Cg={capture:!0},xg=["focus","mousedown","mouseenter","touchstart"],tl="mat-ripple-loader-uninitialized",nl="mat-ripple-loader-class-name",Su="mat-ripple-loader-centered",To="mat-ripple-loader-disabled",Mu=(()=>{class n{_document=c(E);_animationsDisabled=ye();_globalRippleOptions=c(el,{optional:!0});_platform=c(X);_ngZone=c(S);_injector=c(L);_eventCleanups;_hosts=new Map;constructor(){let e=c(xe).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>xg.map(t=>e.listen(this._document,t,this._onInteraction,Cg)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(tl,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(nl))&&e.setAttribute(nl,t.className||""),t.centered&&e.setAttribute(Su,""),t.disabled&&e.setAttribute(To,"")}setDisabled(e,t){let r=this._hosts.get(e);r?(r.target.rippleDisabled=t,!t&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):t?e.setAttribute(To,""):e.removeAttribute(To)}_onInteraction=e=>{let t=ze(e);if(t instanceof HTMLElement){let r=t.closest(`[${tl}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(nl)),e.append(t);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??dr.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??dr.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(To),rippleConfig:{centered:e.hasAttribute(Su),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},l=new ur(s,this._ngZone,t,this._platform,this._injector),d=!s.rippleDisabled;d&&l.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:l,hasSetUpEvents:d}),e.removeAttribute(tl)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})();var Io=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
    --mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return n})();var Dg=["*",[["","progressIndicator",""]]],wg=["*","[progressIndicator]"];function Eg(n,i){n&1&&(x(0,"div",1),re(1,1),w())}var Sg=new b("MAT_BUTTON_CONFIG");function Au(n){return n==null?void 0:Lr(n)}var il=(()=>{class n{_elementRef=c(P);_ngZone=c(S);_animationsDisabled=ye();_config=c(Sg,{optional:!0});_focusMonitor=c(sr);_cleanupClick;_renderer=c(ue);_rippleLoader=c(Mu);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=hn(!1,{transform:Y});constructor(){c(_e).load(Io);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=k({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(t,r){t&2&&(J("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),mt(r.color?"mat-"+r.color:""),V("mat-mdc-button-progress-indicator-shown",r.showProgress())("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",Y],disabled:[2,"disabled","disabled",Y],ariaDisabled:[2,"aria-disabled","ariaDisabled",Y],disabledInteractive:[2,"disabledInteractive","disabledInteractive",Y],tabIndex:[2,"tabIndex","tabIndex",Au],_tabindex:[2,"tabindex","_tabindex",Au],showProgress:[1,"showProgress"]}})}return n})(),Tt=(()=>{class n extends il{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[ce],ngContentSelectors:wg,decls:5,vars:1,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(Ue(Dg),de(0,"span",0),re(1),Z(2,Eg,2,0,"div",1),de(3,"span",2)(4,"span",3)),t&2&&(p(2),K(r.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return n})();var ku=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=F({imports:[me]})}return n})();var Mg=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]],[["","progressIndicator",""]]],Ag=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]","[progressIndicator]"];function kg(n,i){n&1&&(x(0,"div",2),re(1,3),w())}var Ru=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Tu=(()=>{class n extends il{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=Rg(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,r=this._appearance?Ru.get(this._appearance):null,o=Ru.get(e);r&&t.remove(...r),t.add(...o),this._appearance=e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[ce],ngContentSelectors:Ag,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(Ue(Mg),de(0,"span",0),re(1),x(2,"span",1),re(3,1),w(),re(4,2),Z(5,kg,2,0,"div",2),de(6,"span",3)(7,"span",4)),t&2&&(V("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab),p(5),K(r.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --mat-progress-spinner-active-indicator-color: var(--mat-button-filled-progress-active-indicator-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return n})();function Rg(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var lt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=F({imports:[ku,me]})}return n})();var Tg=new b("MAT_BADGE_CONFIG"),Iu="mat-badge-content",Ig=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["ng-component"]],decls:0,vars:0,template:function(t,r){},styles:[`.mat-badge {
  position: relative;
}
.mat-badge.mat-badge {
  overflow: visible;
}

.mat-badge-content {
  position: absolute;
  text-align: center;
  display: inline-block;
  transition: transform 200ms ease-in-out;
  transform: scale(0.6);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
  pointer-events: none;
  background-color: var(--mat-badge-background-color, var(--mat-sys-error));
  color: var(--mat-badge-text-color, var(--mat-sys-on-error));
  font-family: var(--mat-badge-text-font, var(--mat-sys-label-small-font));
  font-weight: var(--mat-badge-text-weight, var(--mat-sys-label-small-weight));
  border-radius: var(--mat-badge-container-shape, var(--mat-sys-corner-full));
}
.mat-badge-above .mat-badge-content {
  bottom: 100%;
}
.mat-badge-below .mat-badge-content {
  top: 100%;
}
.mat-badge-before .mat-badge-content {
  right: 100%;
}
[dir=rtl] .mat-badge-before .mat-badge-content {
  right: auto;
  left: 100%;
}
.mat-badge-after .mat-badge-content {
  left: 100%;
}
[dir=rtl] .mat-badge-after .mat-badge-content {
  left: auto;
  right: 100%;
}
@media (forced-colors: active) {
  .mat-badge-content {
    outline: solid 1px;
    border-radius: 0;
  }
}

.mat-badge-disabled .mat-badge-content {
  background-color: var(--mat-badge-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-error) 38%, transparent));
  color: var(--mat-badge-disabled-state-text-color, var(--mat-sys-on-error));
}

.mat-badge-hidden .mat-badge-content {
  display: none;
}

.ng-animate-disabled .mat-badge-content,
.mat-badge-content._mat-animation-noopable {
  transition: none;
}

.mat-badge-content.mat-badge-active {
  transform: none;
}

.mat-badge-small .mat-badge-content {
  width: var(--mat-badge-legacy-small-size-container-size, unset);
  height: var(--mat-badge-legacy-small-size-container-size, unset);
  min-width: var(--mat-badge-small-size-container-size, 6px);
  min-height: var(--mat-badge-small-size-container-size, 6px);
  line-height: var(--mat-badge-small-size-line-height, 6px);
  padding: var(--mat-badge-small-size-container-padding, 0);
  font-size: var(--mat-badge-small-size-text-size, 0);
  margin: var(--mat-badge-small-size-container-offset, -6px 0);
}
.mat-badge-small.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-small-size-container-overlap-offset, -6px);
}

.mat-badge-medium .mat-badge-content {
  width: var(--mat-badge-legacy-container-size, unset);
  height: var(--mat-badge-legacy-container-size, unset);
  min-width: var(--mat-badge-container-size, 16px);
  min-height: var(--mat-badge-container-size, 16px);
  line-height: var(--mat-badge-line-height, 16px);
  padding: var(--mat-badge-container-padding, 0 4px);
  font-size: var(--mat-badge-text-size, var(--mat-sys-label-small-size));
  margin: var(--mat-badge-container-offset, -12px 0);
}
.mat-badge-medium.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-container-overlap-offset, -12px);
}

.mat-badge-large .mat-badge-content {
  width: var(--mat-badge-legacy-large-size-container-size, unset);
  height: var(--mat-badge-legacy-large-size-container-size, unset);
  min-width: var(--mat-badge-large-size-container-size, 16px);
  min-height: var(--mat-badge-large-size-container-size, 16px);
  line-height: var(--mat-badge-large-size-line-height, 16px);
  padding: var(--mat-badge-large-size-container-padding, 0 4px);
  font-size: var(--mat-badge-large-size-text-size, var(--mat-sys-label-small-size));
  margin: var(--mat-badge-large-size-container-offset, -12px 0);
}
.mat-badge-large.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-large-size-container-overlap-offset, -12px);
}
`],encapsulation:2})}return n})(),Ou=(()=>{class n{_ngZone=c(S);_elementRef=c(P);_ariaDescriber=c(gu);_renderer=c(ue);_animationsDisabled=ye();_idGenerator=c(fe);get color(){return this._color}set color(e){this._setColor(e),this._color=e}_color;overlap;disabled=!1;position;get content(){return this._content}set content(e){this._updateRenderedContent(e)}_content;get description(){return this._description}set description(e){this._updateDescription(e)}_description;size;hidden=!1;_badgeElement;_inlineBadgeDescription;_isInitialized=!1;_interactivityChecker=c(ri);_document=c(E);constructor(){let e=c(Tg,{optional:!0}),t=c(_e);t.load(Ig),t.load(ei),this._color=e?.color||"primary",this.overlap=e?.overlap??!0,this.position=e?.position||"above after",this.size=e?.size||"medium"}isAbove(){return this.position.indexOf("below")===-1}isAfter(){return this.position.indexOf("before")===-1}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngAfterViewInit(){}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){let e=this._renderer.createElement("span"),t="mat-badge-active";return e.setAttribute("id",this._idGenerator.getId("mat-badge-content-")),e.setAttribute("aria-hidden","true"),e.classList.add(Iu),this._animationsDisabled&&e.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(e),typeof requestAnimationFrame=="function"&&!this._animationsDisabled?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{e.classList.add(t)})}):e.classList.add(t),e}_updateRenderedContent(e){let t=`${e??""}`.trim();this._isInitialized&&t&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=t),this._content=t}_updateDescription(e){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!e||this._isHostInteractive())&&this._removeInlineDescription(),this._description=e,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,e):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(e){let t=this._elementRef.nativeElement.classList;t.remove(`mat-badge-${this._color}`),e&&t.add(`mat-badge-${e}`)}_clearExistingBadges(){let e=this._elementRef.nativeElement.querySelectorAll(`:scope > .${Iu}`);for(let t of Array.from(e))t!==this._badgeElement&&t.remove()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=k({type:n,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(t,r){t&2&&V("mat-badge-overlap",r.overlap)("mat-badge-above",r.isAbove())("mat-badge-below",!r.isAbove())("mat-badge-before",!r.isAfter())("mat-badge-after",r.isAfter())("mat-badge-small",r.size==="small")("mat-badge-medium",r.size==="medium")("mat-badge-large",r.size==="large")("mat-badge-hidden",r.hidden||!r.content)("mat-badge-disabled",r.disabled)},inputs:{color:[0,"matBadgeColor","color"],overlap:[2,"matBadgeOverlap","overlap",Y],disabled:[2,"matBadgeDisabled","disabled",Y],position:[0,"matBadgePosition","position"],content:[0,"matBadge","content"],description:[0,"matBadgeDescription","description"],size:[0,"matBadgeSize","size"],hidden:[2,"matBadgeHidden","hidden",Y]}})}return n})(),Fu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=F({imports:[cr,me]})}return n})();var Yt=class n{itens=R([]);quantidade=De(()=>this.itens().length);adicionar(i){this.itens.update(e=>[...e,i])}listar(){return this.itens()}static \u0275fac=function(e){return new(e||n)};static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})};var Fg=(n,i)=>i.href;function Pg(n,i){if(n&1){let e=ot();f(0,"li")(1,"a",10),$("click",function(){it(e);let r=le();return rt(r.fecharMenu())}),m(2),g()()}if(n&2){let e=i.$implicit;p(),se("href",e.href,We),p(),te(e.label)}}var Fo=class n{carrinhoService=c(Yt);quantidadeCarrinho=this.carrinhoService.quantidade;menuAberto=R(!1);links=[{label:"In\xEDcio",href:"#inicio"},{label:"Categorias",href:"#categorias"},{label:"Destaques",href:"#destaques"},{label:"Novidades",href:"#novidades"},{label:"Galeria",href:"#galeria"},{label:"Sobre",href:"#sobre"},{label:"Contato",href:"#contato"}];alternarMenu(){this.menuAberto.update(i=>!i)}fecharMenu(){this.menuAberto.set(!1)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["app-header"]],decls:21,vars:5,consts:[[1,"navbar-nx"],[1,"container-nx","nav-inner"],["routerLink","/",1,"nx-logo",3,"click"],[1,"nx-logo-mark"],[1,"nx-logo-text"],[1,"nav-desktop"],[1,"nav-actions"],["routerLink","/login","mat-icon-button","","title","Entrar","aria-label","Entrar"],["mat-icon-button","","title","Carrinho","aria-label","Carrinho","matBadgeColor","primary","matBadgeSize","small",3,"matBadge","matBadgeHidden"],["mat-icon-button","","aria-label","Abrir menu",1,"nav-mobile-toggle",3,"click"],[3,"click","href"]],template:function(e,t){e&1&&(f(0,"nav",0)(1,"div",1)(2,"a",2),$("click",function(){return t.fecharMenu()}),H(3,"span",3),f(4,"span",4),m(5,"NEXTECH"),f(6,"span"),m(7,"."),g()()(),f(8,"ul",5),Oe(9,Pg,3,2,"li",null,Fg),g(),f(11,"div",6)(12,"a",7)(13,"mat-icon"),m(14,"person_outline"),g()(),f(15,"button",8)(16,"mat-icon"),m(17,"shopping_cart"),g()(),f(18,"button",9),$("click",function(){return t.alternarMenu()}),f(19,"mat-icon"),m(20),g()()()()()),e&2&&(p(8),V("open",t.menuAberto()),p(),Fe(t.links),p(6),se("matBadge",t.quantidadeCarrinho())("matBadgeHidden",t.quantidadeCarrinho()===0),p(5),te(t.menuAberto()?"close":"menu"))},dependencies:[Jn,Wt,Gt,lt,Tt,Fu,Ou],styles:[".navbar-nx[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1000;background-color:#08080ff2;-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);border-bottom:1px solid var(--nx-border)}.nav-inner[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;height:64px}.nx-logo[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;text-decoration:none}.nx-logo-mark[_ngcontent-%COMP%]{width:32px;height:32px;background-color:var(--nx-blue);clip-path:polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%);flex-shrink:0}.nx-logo-text[_ngcontent-%COMP%]{font-family:var(--nx-font-display);font-weight:700;font-size:20px;letter-spacing:2px;color:var(--nx-white)}.nx-logo-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--nx-blue)}.nav-desktop[_ngcontent-%COMP%]{display:flex;gap:32px;list-style:none;margin:0;padding:0}.nav-desktop[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--nx-muted);text-decoration:none;font-size:12px;font-weight:500;letter-spacing:1px;text-transform:uppercase;transition:color .2s}.nav-desktop[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--nx-blue)}.nav-actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:2px}.nav-actions[_ngcontent-%COMP%]   a[mat-icon-button][_ngcontent-%COMP%]{color:var(--nx-muted)}.nav-mobile-toggle[_ngcontent-%COMP%]{display:none;color:var(--nx-white)!important}@media(max-width:991px){.nav-desktop[_ngcontent-%COMP%]{display:none;position:absolute;top:64px;left:0;right:0;background-color:var(--nx-bg);flex-direction:column;gap:0;border-bottom:1px solid var(--nx-border)}.nav-desktop.open[_ngcontent-%COMP%]{display:flex}.nav-desktop[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border-top:1px solid var(--nx-border)}.nav-desktop[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;padding:16px 24px}.nav-mobile-toggle[_ngcontent-%COMP%]{display:inline-flex}}"]})};var Po=class n{anoAtual=new Date().getFullYear();static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["app-footer"]],decls:13,vars:1,consts:[[1,"footer-nx"],[1,"container-nx","footer-inner"],[1,"nx-logo-text"],[1,"footer-links"],["href","#"]],template:function(e,t){e&1&&(x(0,"footer",0)(1,"div",1)(2,"span",2),m(3,"NEXTECH"),x(4,"span"),m(5,"."),w()(),x(6,"p"),m(7),w(),x(8,"div",3)(9,"a",4),m(10,"Privacidade"),w(),x(11,"a",4),m(12,"Termos"),w()()()()),e&2&&(p(7),Dt("\xA9 ",t.anoAtual," NexTech. Todos os direitos reservados."))},styles:[".footer-nx[_ngcontent-%COMP%]{border-top:1px solid var(--nx-border);padding:30px 0;background-color:var(--nx-bg)}.footer-inner[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:14px}.footer-inner[_ngcontent-%COMP%]   .nx-logo-text[_ngcontent-%COMP%]{font-family:var(--nx-font-display);font-weight:700;font-size:18px;letter-spacing:2px;color:var(--nx-white)}.footer-inner[_ngcontent-%COMP%]   .nx-logo-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--nx-blue)}.footer-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;color:var(--nx-muted-2);margin:0}.footer-links[_ngcontent-%COMP%]{display:flex;gap:20px}.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:10px;color:var(--nx-muted-2);text-decoration:none;letter-spacing:1px;text-transform:uppercase}.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--nx-blue)}"]})};var Ng=(n,i)=>i.rotulo;function Lg(n,i){if(n&1&&(x(0,"div")(1,"strong"),m(2),w(),x(3,"span"),m(4),w()()),n&2){let e=i.$implicit;p(2),te(e.valor),p(2),te(e.rotulo)}}var No=class n{stats=[{valor:"500+",rotulo:"Produtos em estoque"},{valor:"8 anos",rotulo:"No mercado gamer"},{valor:"24h",rotulo:"Atendimento online"}];static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["app-hero"]],decls:24,vars:0,consts:[["id","inicio",1,"hero"],["src","https://images.unsplash.com/photo-1593640408182-31c228c8f91e?w=1600&h=900&fit=crop&auto=format","alt","Setup gamer iluminado com RGB",1,"hero-bg"],[1,"hero-overlay"],[1,"container-nx"],[1,"hero-inner"],[1,"eyebrow"],[1,"accent"],[1,"hero-lead"],[1,"hero-ctas"],["href","#destaques",1,"btn-nx","btn-nx-primary"],["href","#categorias",1,"btn-nx","btn-nx-outline"],[1,"hero-stats"]],template:function(e,t){e&1&&(x(0,"section",0),de(1,"img",1)(2,"div",2),x(3,"div",3)(4,"div",4)(5,"p",5),m(6,"\u2014 Mundo Gamer & Tecnologia"),w(),x(7,"h1"),m(8,"ELEVE"),de(9,"br"),x(10,"span",6),m(11,"SUA"),w(),de(12,"br"),m(13,"PERFORMANCE"),w(),x(14,"p",7),m(15," Equipamentos selecionados para quem leva tecnologia e jogos a s\xE9rio. Do setup casual ao profissional \u2014 encontre o que voc\xEA precisa. "),w(),x(16,"div",8)(17,"a",9),m(18,"Ver Produtos"),w(),x(19,"a",10),m(20,"Explorar"),w()()()(),x(21,"div",11),Oe(22,Lg,5,2,"div",null,Ng),w()()),e&2&&(p(22),Fe(t.stats))},styles:[".hero[_ngcontent-%COMP%]{position:relative;min-height:92vh;display:flex;align-items:center;overflow:hidden}.hero-bg[_ngcontent-%COMP%]{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.3}.hero-overlay[_ngcontent-%COMP%]{position:absolute;inset:0;background:linear-gradient(135deg,var(--nx-bg) 40%,rgba(0,87,255,.12) 100%)}.hero-inner[_ngcontent-%COMP%]{position:relative;z-index:2;max-width:720px;padding:120px 0 96px}.hero-inner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:clamp(48px,9vw,112px);font-weight:700;line-height:.92;letter-spacing:-1px;color:var(--nx-white);margin:0 0 28px}.hero-inner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .accent[_ngcontent-%COMP%]{color:var(--nx-blue)}.hero-lead[_ngcontent-%COMP%]{font-size:16px;line-height:1.7;color:var(--nx-muted);max-width:480px;margin-bottom:44px}.hero-ctas[_ngcontent-%COMP%]{display:flex;gap:16px;flex-wrap:wrap}.hero-stats[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;right:0;z-index:3;background-color:#0f0f1ae6;border-top:1px solid var(--nx-border);display:grid;grid-template-columns:repeat(3,1fr)}.hero-stats[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:20px 24px;border-right:1px solid var(--nx-border);text-align:center}.hero-stats[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child{border-right:none}.hero-stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;font-family:var(--nx-font-display);font-size:26px;font-weight:700;color:var(--nx-blue)}.hero-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:10px;color:var(--nx-muted-2);letter-spacing:1.5px;text-transform:uppercase}@media(max-width:767px){.hero-inner[_ngcontent-%COMP%]{padding:96px 0 140px}.hero-stats[_ngcontent-%COMP%]{position:static;margin-top:40px}.hero[_ngcontent-%COMP%]{min-height:unset}}@media(max-width:480px){.hero-inner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:44px}.hero-ctas[_ngcontent-%COMP%]   .btn-nx[_ngcontent-%COMP%]{width:100%;text-align:center}.hero-stats[_ngcontent-%COMP%]{grid-template-columns:1fr}.hero-stats[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{border-right:none;border-bottom:1px solid var(--nx-border)}.hero-stats[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child{border-bottom:none}}"]})};var It=class{constructor(i,e,t,r,o,a,s){this.id=i;this.nome=e;this.especificacoes=t;this.preco=r;this.imagem=o;this.badgeTexto=a;this.badgeTipo=s}id;nome;especificacoes;preco;imagem;badgeTexto;badgeTipo;precoFormatado(){return this.preco.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}temBadge(){return!!this.badgeTexto}};var Dn=class{constructor(i,e,t,r,o="destaques"){this.tag=i;this.titulo=e;this.descricao=t;this.imagem=r;this.ancora=o}tag;titulo;descricao;imagem;ancora};var vt=class n{categorias=[new Dn("Alta Performance","PCs Gamer","M\xE1quinas montadas para performance m\xE1xima","https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&h=400&fit=crop&auto=format"),new Dn("Portabilidade","Notebooks","Poder e portabilidade para trabalho e jogo","https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=400&fit=crop&auto=format"),new Dn("Setup Completo","Perif\xE9ricos","Teclados, mouses, headsets e monitores","https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&h=400&fit=crop&auto=format"),new Dn("Conectividade","Smartphones","Os melhores lan\xE7amentos para todos os perfis","https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=400&fit=crop&auto=format")];destaques=[new It(1,"PC Gamer Titan X","RTX 4070 \xB7 AMD Ryzen 7 \xB7 32GB DDR5 \xB7 1TB NVMe",8499,"https://images.unsplash.com/photo-1587202372583-49330a15584d?w=500&h=400&fit=crop&auto=format","Mais vendido","verde"),new It(2,"Notebook Pro 15","Intel Core i7 \xB7 RTX 3060 \xB7 16GB \xB7 512GB SSD",5999,"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&h=400&fit=crop&auto=format","Novo","azul"),new It(3,"Headset Void Pro","Som Surround 7.1 \xB7 Microfone Remov\xEDvel \xB7 USB",649,"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=400&fit=crop&auto=format","Oferta","vermelho"),new It(4,'Monitor 165Hz 27"',"IPS Full HD \xB7 1ms \xB7 FreeSync \xB7 HDR400",1899,"https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&h=400&fit=crop&auto=format","Destaque","azul"),new It(5,"Teclado Mec\xE2nico K95","Switch Red \xB7 RGB Full \xB7 Anti-Ghosting \xB7 ABNT2",799,"https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=400&fit=crop&auto=format"),new It(6,"iPhone 15 Pro Max","A17 Pro \xB7 256GB \xB7 C\xE2mera 48MP \xB7 Tit\xE2nio",9299,"https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=400&fit=crop&auto=format","Lan\xE7amento","verde")];galeria=["https://images.unsplash.com/photo-1593640408182-31c228c8f91e?w=700&h=700&fit=crop&auto=format","https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=700&h=700&fit=crop&auto=format","https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=700&h=700&fit=crop&auto=format","https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=700&h=700&fit=crop&auto=format","https://images.unsplash.com/photo-1587202372583-49330a15584d?w=700&h=700&fit=crop&auto=format","https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=700&h=700&fit=crop&auto=format"];getCategorias(){return this.categorias}getDestaques(){return this.destaques}getNovidades(){return this.destaques.filter(i=>i.temBadge())}getGaleria(){return this.galeria}static \u0275fac=function(e){return new(e||n)};static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})};var Bg=(n,i)=>i.titulo;function Vg(n,i){if(n&1&&(x(0,"a",6),de(1,"img",7)(2,"div",8),x(3,"div",9)(4,"span",10),m(5),w(),x(6,"h3"),m(7),w(),x(8,"p"),m(9),w()()()),n&2){let e=i.$implicit;Se("href","#"+e.ancora,We),p(),Se("src",e.imagem,We)("alt",e.titulo),p(4),te(e.tag),p(2),te(e.titulo),p(2),te(e.descricao)}}var Lo=class n{produtoService=c(vt);categorias=this.produtoService.getCategorias();static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["app-categorias"]],decls:10,vars:0,consts:[["id","categorias",1,"categorias"],[1,"container-nx"],[1,"section-head"],[1,"eyebrow"],[1,"section-title"],[1,"cat-grid"],[1,"cat-card",3,"href"],[3,"src","alt"],[1,"cat-overlay"],[1,"cat-body"],[1,"cat-tag"]],template:function(e,t){e&1&&(x(0,"section",0)(1,"div",1)(2,"div",2)(3,"p",3),m(4,"Categorias"),w(),x(5,"h2",4),m(6,"O que voc\xEA procura?"),w()(),x(7,"div",5),Oe(8,Vg,10,6,"a",6,Bg),w()()()),e&2&&(p(8),Fe(t.categorias))},styles:[".categorias[_ngcontent-%COMP%]{padding:100px 0}@media(max-width:767px){.categorias[_ngcontent-%COMP%]{padding:64px 0}}.cat-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:2px}.cat-card[_ngcontent-%COMP%]{position:relative;overflow:hidden;aspect-ratio:4/5;cursor:pointer;text-decoration:none;display:block}.cat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;opacity:.4;transition:opacity .3s,transform .4s}.cat-card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{opacity:.55;transform:scale(1.05)}.cat-overlay[_ngcontent-%COMP%]{position:absolute;inset:0;background:linear-gradient(to top,#08080fe6,#08080f33 60%)}.cat-body[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;right:0;padding:28px}.cat-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:26px;font-weight:700;margin-bottom:6px;color:var(--nx-white)}.cat-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:var(--nx-muted);margin:0}.cat-tag[_ngcontent-%COMP%]{display:inline-block;font-size:10px;letter-spacing:2px;color:var(--nx-blue);border:1px solid var(--nx-blue);padding:3px 10px;margin-bottom:12px;font-weight:600;text-transform:uppercase}"]})};var jg=20,rl=(()=>{class n{_ngZone=c(S);_platform=c(X);_renderer=c(xe).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new M;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=jg){return this._platform.isBrowser?new ct(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(ka(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):A()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let r=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(he(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((r,o)=>{this._targetContainsElement(o,e)&&t.push(o)}),t}_targetContainsElement(e,t){let r=Ze(t),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})();var Ug=20,hr=(()=>{class n{_platform=c(X);_listeners;_viewportSize=null;_change=new M;_document=c(E);constructor(){let e=c(S),t=c(xe).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[t.listen("window","resize",r),t.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+t,height:r,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||t.scrollY||r.scrollTop||0,s=-o.left||e.body?.scrollLeft||t.scrollX||r.scrollLeft||0;return{top:a,left:s}}change(e=Ug){return e>0?this._change.pipe(ka(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})();var Pu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=F({})}return n})(),ol=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=F({imports:[me,Pu,me,Pu]})}return n})();var mr=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},Ot=class extends mr{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(i,e,t,r,o,a){super(),this.component=i,this.viewContainerRef=e,this.injector=t,this.projectableNodes=r,this.bindings=o||null,this.directives=a||null}},Xt=class extends mr{templateRef;viewContainerRef;context;injector;constructor(i,e,t,r){super(),this.templateRef=i,this.viewContainerRef=e,this.context=t,this.injector=r}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}},al=class extends mr{element;constructor(i){super(),this.element=i instanceof P?i.nativeElement:i}},Zt=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof Ot)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof Xt)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof al)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Bo=class extends Zt{outletElement;_appRef;_defaultInjector;constructor(i,e,t){super(),this.outletElement=i,this._appRef=e,this._defaultInjector=t}attachComponentPortal(i){let e;if(i.viewContainerRef){let t=i.injector||i.viewContainerRef.injector,r=t.get(Pr,null,{optional:!0})||void 0;e=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:t,ngModuleRef:r,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,r=i.injector||this._defaultInjector||L.NULL,o=r.get(Ce,t.injector);e=Br(i.component,{elementInjector:r,environmentInjector:o,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=i,e}attachTemplatePortal(i){let e=i.viewContainerRef,t=e.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return t.rootNodes.forEach(r=>this.outletElement.appendChild(r)),t.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(t);r!==-1&&e.remove(r)}),this._attachedPortal=i,t}attachDomPortal=i=>{let e=i.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=i,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}};var Kt=(()=>{class n extends Zt{_moduleRef=c(Pr,{optional:!0});_document=c(E);_viewContainerRef=c(Vt);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new ie;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(r,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(t,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=(()=>{let e;return function(r){return(e||(e=dt(n)))(r||n)}})();static \u0275dir=k({type:n,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[ce]})}return n})(),Qt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=F({})}return n})();var Nu=vu();function li(n){return new Vo(n.get(hr),n.get(E))}var Vo=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,e){this._viewportRuler=i,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||"",this._previousHTMLStyles.top=i.style.top||"",i.style.left=pe(-this._previousScrollPosition.left),i.style.top=pe(-this._previousScrollPosition.top),i.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,e=this._document.body,t=i.style,r=e.style,o=t.scrollBehavior||"",a=r.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,i.classList.remove("cdk-global-scrollblock"),Nu&&(t.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Nu&&(t.scrollBehavior=o,r.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function Hu(n,i){return new jo(n.get(rl),n.get(S),n.get(hr),i)}var jo=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(i,e,t,r){this._scrollDispatcher=i,this._ngZone=e,this._viewportRuler=t,this._config=r}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(this._scrollSubscription)return;let i=this._scrollDispatcher.scrolled(0).pipe(he(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=i.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=i.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var fr=class{enable(){}disable(){}attach(){}};function sl(n,i){return i.some(e=>{let t=n.bottom<e.top,r=n.top>e.bottom,o=n.right<e.left,a=n.left>e.right;return t||r||o||a})}function Lu(n,i){return i.some(e=>{let t=n.top<e.top,r=n.bottom>e.bottom,o=n.left<e.left,a=n.right>e.right;return t||r||o||a})}function $u(n,i){return new Uo(n.get(rl),n.get(hr),n.get(S),i)}var Uo=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,e,t,r){this._scrollDispatcher=i,this._viewportRuler=e,this._ngZone=t,this._config=r}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:r}=this._viewportRuler.getViewportSize();sl(e,[{width:t,height:r,bottom:r,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},Gu=(()=>{class n{_injector=c(L);noop=()=>new fr;close=e=>Hu(this._injector,e);block=()=>li(this._injector);reposition=e=>$u(this._injector,e);static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})(),Jt=class{positionStrategy;scrollStrategy=new fr;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let e=Object.keys(i);for(let t of e)i[t]!==void 0&&(this[t]=i[t])}}};var zo=class{connectionPair;scrollableViewProperties;constructor(i,e){this.connectionPair=i,this.scrollableViewProperties=e}};var Wu=(()=>{class n{_attachedOverlays=[];_document=c(E);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})(),qu=(()=>{class n extends Wu{_ngZone=c(S);_renderer=c(xe).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let r=t.length-1;r>-1;r--){let o=t[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})(),Yu=(()=>{class n extends Wu{_platform=c(X);_ngZone=c(S);_renderer=c(xe).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(t,"pointerdown",this._pointerDownListener,r),o.listen(t,"click",this._clickListener,r),o.listen(t,"auxclick",this._clickListener,r),o.listen(t,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=ze(e)};_clickListener=e=>{let t=ze(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],l=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,l))){if(Bu(s.overlayElement,t)||Bu(s.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})();function Bu(n,i){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=i;for(;t;){if(t===n)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var Xu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return n})(),Go=(()=>{class n{_platform=c(X);_containerElement;_document=c(E);_styleLoader=c(_e);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Zs()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let t=this._document.createElement("div");t.classList.add(e),Zs()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(Xu)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})(),ll=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,e,t,r){this._renderer=e,this._ngZone=t,this.element=i.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents="none",i.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function cl(n){return n&&n.nodeType===1}var si=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new M;_attachments=new M;_detachments=new M;_positionStrategy;_scrollStrategy;_locationChanges=Ke.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new M;_outsidePointerEvents=new M;_afterNextRenderRef;constructor(i,e,t,r,o,a,s,l,d,u=!1,v,y){this._portalOutlet=i,this._host=e,this._pane=t,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=l,this._outsideClickDispatcher=d,this._animationsDisabled=u,this._injector=v,this._renderer=y,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=je(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=h(h({},this._config),i),this._updateElementSize()}setDirection(i){this._config=q(h({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i=="string"?i:i.value:"ltr"}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=pe(this._config.width),i.height=pe(this._config.height),i.minWidth=pe(this._config.minWidth),i.minHeight=pe(this._config.minHeight),i.maxWidth=pe(this._config.maxWidth),i.maxHeight=pe(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?"":"none"}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;cl(i)?i.after(this._host):i?.type==="parent"?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let i="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new ll(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,e,t){let r=ii(e||[]).filter(o=>!!o);r.length&&(t?i.classList.add(...r):i.classList.remove(...r))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=je(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(e){if(i)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}},Vu="cdk-overlay-connected-position-bounding-box",zg=/([A-Za-z%]+)$/;function Zu(n,i){return new Ho(i,n.get(hr),n.get(E),n.get(X),n.get(Go))}var Ho=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new M;_resizeSubscription=Ke.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,e,t,r,o){this._viewportRuler=e,this._document=t,this._platform=r,this._overlayContainer=o,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(Vu),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,e=this._overlayRect,t=this._viewportRect,r=this._containerRect,o=[],a;for(let s of this._preferredPositions){let l=this._getOriginPoint(i,r,s),d=this._getOverlayPoint(l,e,s),u=this._getOverlayFit(d,e,t,s);if(u.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,l);return}if(this._canFitWithFlexibleDimensions(u,d,t)){o.push({position:s,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,s)});continue}(!a||a.overlayFit.visibleArea<u.visibleArea)&&(a={overlayFit:u,overlayPoint:d,originPoint:l,position:s,overlayRect:e})}if(o.length){let s=null,l=-1;for(let d of o){let u=d.boundingBoxRect.width*d.boundingBoxRect.height*(d.position.weight||1);u>l&&(l=u,s=d)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&wn(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Vu),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof P?this._origin.nativeElement:cl(this._origin)?this._origin:null}_getOriginPoint(i,e,t){let r;if(t.originX=="center")r=i.left+i.width/2;else{let a=this._isRtl()?i.right:i.left,s=this._isRtl()?i.left:i.right;r=t.originX=="start"?a:s}e.left<0&&(r-=e.left);let o;return t.originY=="center"?o=i.top+i.height/2:o=t.originY=="top"?i.top:i.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(i,e,t){let r;t.overlayX=="center"?r=-e.width/2:t.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return t.overlayY=="center"?o=-e.height/2:o=t.overlayY=="top"?0:-e.height,{x:i.x+r,y:i.y+o}}_getOverlayFit(i,e,t,r){let o=Uu(e),{x:a,y:s}=i,l=this._getOffset(r,"x"),d=this._getOffset(r,"y");l&&(a+=l),d&&(s+=d);let u=0-a,v=a+o.width-t.width,y=0-s,U=s+o.height-t.height,z=this._subtractOverflows(o.width,u,v),G=this._subtractOverflows(o.height,y,U),ne=z*G;return{visibleArea:ne,isCompletelyWithinViewport:o.width*o.height===ne,fitsInViewportVertically:G===o.height,fitsInViewportHorizontally:z==o.width}}_canFitWithFlexibleDimensions(i,e,t){if(this._hasFlexibleDimensions){let r=t.bottom-e.y,o=t.right-e.x,a=ju(this._overlayRef.getConfig().minHeight),s=ju(this._overlayRef.getConfig().minWidth),l=i.fitsInViewportVertically||a!=null&&a<=r,d=i.fitsInViewportHorizontally||s!=null&&s<=o;return l&&d}return!1}_pushOverlayOnScreen(i,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let r=Uu(e),o=this._viewportRect,a=Math.max(i.x+r.width-o.width,0),s=Math.max(i.y+r.height-o.height,0),l=Math.max(o.top-t.top-i.y,0),d=Math.max(o.left-t.left-i.x,0),u=0,v=0;return r.width<=o.width?u=d||-a:u=i.x<this._getViewportMarginStart()?o.left-t.left-i.x:0,r.height<=o.height?v=l||-s:v=i.y<this._getViewportMarginTop()?o.top-t.top-i.y:0,this._previousPushAmount={x:u,y:v},{x:i.x+u,y:i.y+v}}_applyPosition(i,e){if(this._setTransformOrigin(i),this._setOverlayElementStyles(e,i),this._setBoundingBoxStyles(e,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!Hg(this._lastScrollVisibility,t)){let r=new zo(i,t);this._positionChanges.next(r)}this._lastScrollVisibility=t}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,r=i.overlayY;i.overlayX==="center"?t="center":this._isRtl()?t=i.overlayX==="start"?"right":"left":t=i.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${t} ${r}`}_calculateBoundingBoxRect(i,e){let t=this._viewportRect,r=this._isRtl(),o,a,s;if(e.overlayY==="top")a=i.y,o=t.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=t.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=t.height-s+this._getViewportMarginTop();else{let U=Math.min(t.bottom-i.y+t.top,i.y),z=this._lastBoundingBoxSize.height;o=U*2,a=i.y-U,o>z&&!this._isInitialRender&&!this._growAfterOpen&&(a=i.y-z/2)}let l=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,d=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,u,v,y;if(d)y=t.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),u=i.x-this._getViewportMarginStart();else if(l)v=i.x,u=t.right-i.x-this._getViewportMarginEnd();else{let U=Math.min(t.right-i.x+t.left,i.x),z=this._lastBoundingBoxSize.width;u=U*2,v=i.x-U,u>z&&!this._isInitialRender&&!this._growAfterOpen&&(v=i.x-z/2)}return{top:a,left:v,bottom:s,right:y,width:u,height:o}}_setBoundingBoxStyles(i,e){let t=this._calculateBoundingBoxRect(i,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=pe(t.width),r.height=pe(t.height),r.top=pe(t.top)||"auto",r.bottom=pe(t.bottom)||"auto",r.left=pe(t.left)||"auto",r.right=pe(t.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=pe(o)),a&&(r.maxWidth=pe(a))}this._lastBoundingBoxSize=t,wn(this._boundingBox.style,r)}_resetBoundingBoxStyles(){wn(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){wn(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(i,e){let t={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let u=this._viewportRuler.getViewportScrollPosition();wn(t,this._getExactOverlayY(e,i,u)),wn(t,this._getExactOverlayX(e,i,u))}else t.position="static";let s="",l=this._getOffset(e,"x"),d=this._getOffset(e,"y");l&&(s+=`translateX(${l}px) `),d&&(s+=`translateY(${d}px)`),t.transform=s.trim(),a.maxHeight&&(r?t.maxHeight=pe(a.maxHeight):o&&(t.maxHeight="")),a.maxWidth&&(r?t.maxWidth=pe(a.maxWidth):o&&(t.maxWidth="")),wn(this._pane.style,t)}_getExactOverlayY(i,e,t){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,i);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t)),i.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;r.bottom=`${a-(o.y+this._overlayRect.height)}px`}else r.top=pe(o.y);return r}_getExactOverlayX(i,e,t){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,i);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t));let a;if(this._isRtl()?a=i.overlayX==="end"?"left":"right":a=i.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;r.right=`${s-(o.x+this._overlayRect.width)}px`}else r.left=pe(o.x);return r}_getScrollVisibility(){let i=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Lu(i,t),isOriginOutsideView:sl(i,t),isOverlayClipped:Lu(e,t),isOverlayOutsideView:sl(e,t)}}_subtractOverflows(i,...e){return e.reduce((t,r)=>t-Math.max(r,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+i-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,e){return e==="x"?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&ii(i).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof P)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let e=i.width||0,t=i.height||0;return{top:i.y,bottom:i.y+t,left:i.x,right:i.x+e,height:t,width:e}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();i&&(e.style.display="block");let t=e.getBoundingClientRect();return i&&(e.style.display=""),t}};function wn(n,i){for(let e in i)i.hasOwnProperty(e)&&(n[e]=i[e]);return n}function ju(n){if(typeof n!="number"&&n!=null){let[i,e]=n.split(zg);return!e||e==="px"?parseFloat(i):null}return n||null}function Uu(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function Hg(n,i){return n===i?!0:n.isOriginClipped===i.isOriginClipped&&n.isOriginOutsideView===i.isOriginOutsideView&&n.isOverlayClipped===i.isOverlayClipped&&n.isOverlayOutsideView===i.isOverlayOutsideView}var zu="cdk-global-overlay-wrapper";function en(n){return new $o}var $o=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(i){let e=i.getConfig();this._overlayRef=i,this._width&&!e.width&&i.updateSize({width:this._width}),this._height&&!e.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(zu),this._isDisposed=!1}top(i=""){return this._bottomOffset="",this._topOffset=i,this._alignItems="flex-start",this}left(i=""){return this._xOffset=i,this._xPosition="left",this}bottom(i=""){return this._topOffset="",this._bottomOffset=i,this._alignItems="flex-end",this}right(i=""){return this._xOffset=i,this._xPosition="right",this}start(i=""){return this._xOffset=i,this._xPosition="start",this}end(i=""){return this._xOffset=i,this._xPosition="end",this}width(i=""){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=""){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=""){return this.left(i),this._xPosition="center",this}centerVertically(i=""){return this.top(i),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:a,maxHeight:s}=t,l=(r==="100%"||r==="100vw")&&(!a||a==="100%"||a==="100vw"),d=(o==="100%"||o==="100vh")&&(!s||s==="100%"||s==="100vh"),u=this._xPosition,v=this._xOffset,y=this._overlayRef.getConfig().direction==="rtl",U="",z="",G="";l?G="flex-start":u==="center"?(G="center",y?z=v:U=v):y?u==="left"||u==="end"?(G="flex-end",U=v):(u==="right"||u==="start")&&(G="flex-start",z=v):u==="left"||u==="start"?(G="flex-start",U=v):(u==="right"||u==="end")&&(G="flex-end",z=v),i.position=this._cssPosition,i.marginLeft=l?"0":U,i.marginTop=d?"0":this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=l?"0":z,e.justifyContent=G,e.alignItems=d?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(zu),t.justifyContent=t.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position="",this._overlayRef=null,this._isDisposed=!0}},Ku=(()=>{class n{_injector=c(L);global(){return en()}flexibleConnectedTo(e){return Zu(this._injector,e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})(),Qu=new b("OVERLAY_DEFAULT_CONFIG");function ci(n,i){n.get(_e).load(Xu);let e=n.get(Go),t=n.get(E),r=n.get(fe),o=n.get(xt),a=n.get($t),s=n.get(ue,null,{optional:!0})||n.get(xe).createRenderer(null,null),l=new Jt(i),d=n.get(Qu,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||a.value,!t.body||!("showPopover"in t.body)?l.usePopover=!1:l.usePopover=i?.usePopover??d;let u=t.createElement("div"),v=t.createElement("div");u.id=r.getId("cdk-overlay-"),u.classList.add("cdk-overlay-pane"),v.appendChild(u),l.usePopover&&(v.setAttribute("popover","manual"),v.classList.add("cdk-overlay-popover"));let y=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return cl(y)?y.after(v):y?.type==="parent"?y.element.appendChild(v):e.getContainerElement().appendChild(v),new si(new Bo(u,o,n),v,u,l,n.get(S),n.get(qu),t,n.get(wt),n.get(Yu),i?.disableAnimations??n.get(On,null,{optional:!0})==="NoopAnimations",n.get(Ce),s)}var Ju=(()=>{class n{scrollStrategies=c(Gu);_positionBuilder=c(Ku);_injector=c(L);create(e){return ci(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})();var di=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=F({providers:[Ju],imports:[me,Qt,ol,ol]})}return n})();function $g(n,i){if(n&1){let e=ot();f(0,"div",1)(1,"button",2),$("click",function(){it(e);let r=le();return rt(r.action())}),m(2),g()()}if(n&2){let e=le();p(2),Dt(" ",e.data.action," ")}}var Gg=["label"];function Wg(n,i){}var qg=Math.pow(2,31)-1,pr=class{_overlayRef;instance;containerInstance;_afterDismissed=new M;_afterOpened=new M;_onAction=new M;_durationTimeoutId;_dismissedByAction=!1;constructor(i,e){this._overlayRef=e,this.containerInstance=i,i._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(i){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(i,qg))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},eh=new b("MatSnackBarData"),ui=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},Yg=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=k({type:n,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return n})(),Xg=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=k({type:n,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return n})(),Zg=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=k({type:n,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return n})(),Kg=(()=>{class n{snackBarRef=c(pr);data=c(eh);action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(t,r){t&1&&(f(0,"div",0),m(1),g(),Z(2,$g,3,1,"div",1)),t&2&&(p(),Dt(" ",r.data.message,`
`),p(),K(r.hasAction?2:-1))},dependencies:[Tu,Yg,Xg,Zg],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})}return n})(),dl="_mat-snack-bar-enter",ul="_mat-snack-bar-exit",Qg=(()=>{class n extends Zt{_ngZone=c(S);_elementRef=c(P);_changeDetectorRef=c(Pe);_platform=c(X);_animationsDisabled=ye();snackBarConfig=c(ui);_document=c(E);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=c(L);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new M;_onExit=new M;_onEnter=new M;_animationState="void";_live;_label;_role;_liveElementId=c(fe).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===ul?this._completeExit():e===dl&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?je(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(dl)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(dl)},200)))}exit(){return this._destroyed?A(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?je(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(ul)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(ul),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(a=>e.classList.add(a)):e.classList.add(t)),this._exposeToModals();let r=this._label.nativeElement,o="mdc-snackbar__label";r.classList.toggle(o,!r.querySelector(`.${o}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<t.length;r++){let o=t[r],a=o.getAttribute("aria-owns");this._trackedModals.add(o),a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let r=t.replace(this._liveElementId,"").trim();r.length>0?e.setAttribute("aria-owns",r):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector("[aria-hidden]"),r=e.querySelector("[aria-live]");if(t&&r){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(o=document.activeElement),t.removeAttribute("aria-hidden"),r.appendChild(t),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,r){if(t&1&&ht(Kt,7)(Gg,7),t&2){let o;oe(o=ae())&&(r._portalOutlet=o.first),oe(o=ae())&&(r._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(t,r){t&1&&$("animationend",function(a){return r.onAnimationEnd(a.animationName)})("animationcancel",function(a){return r.onAnimationEnd(a.animationName)}),t&2&&V("mat-snack-bar-container-enter",r._animationState==="visible")("mat-snack-bar-container-exit",r._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!r._animationsDisabled)},features:[ce],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,r){t&1&&(f(0,"div",1)(1,"div",2,0)(3,"div",3),ut(4,Wg,0,0,"ng-template",4),g(),H(5,"div"),g()()),t&2&&(p(5),J("aria-live",r._live)("role",r._role)("id",r._liveElementId))},dependencies:[Kt],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2,changeDetection:1})}return n})(),Jg=new b("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new ui}),hi=(()=>{class n{_live=c(qs);_injector=c(L);_breakpointObserver=c(lr);_parentSnackBar=c(n,{optional:!0,skipSelf:!0});_defaultConfig=c(Jg);_animationsDisabled=ye();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Kg;snackBarContainerComponent=Qg;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",r){let o=h(h({},this._defaultConfig),r);return o.data={message:e,action:t},o.announcementMessage===e&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let r=t&&t.viewContainerRef&&t.viewContainerRef.injector,o=L.create({parent:r||this._injector,providers:[{provide:ui,useValue:t}]}),a=new Ot(this.snackBarContainerComponent,t.viewContainerRef,o),s=e.attach(a);return s.instance.snackBarConfig=t,s.instance}_attach(e,t){let r=h(h(h({},new ui),this._defaultConfig),t),o=this._createOverlay(r),a=this._attachSnackBarContainer(o,r),s=new pr(a,o);if(e instanceof Bt){let l=new Xt(e,null,{$implicit:r.data,snackBarRef:s});s.instance=a.attachTemplatePortal(l)}else{let l=this._createInjector(r,s),d=new Ot(e,void 0,l),u=a.attachComponentPortal(d);s.instance=u.instance}return this._breakpointObserver.observe(_u.HandsetPortrait).pipe(Re(o.detachments())).subscribe(l=>{o.overlayElement.classList.toggle(this.handsetCssClass,l.matches)}),r.announcementMessage&&a._onAnnounce.subscribe(()=>{this._live.announce(r.announcementMessage,r.politeness)}),this._animateSnackBar(s,r),this._openedSnackBarRef=s,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new Jt;t.direction=e.direction;let r=en(this._injector),o=e.direction==="rtl",a=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!o||e.horizontalPosition==="end"&&o,s=!a&&e.horizontalPosition!=="center";return a?r.left("0"):s?r.right("0"):r.centerHorizontally(),e.verticalPosition==="top"?r.top("0"):r.bottom("0"),t.positionStrategy=r,t.disableAnimations=this._animationsDisabled,ci(this._injector,t)}_createInjector(e,t){let r=e&&e.viewContainerRef&&e.viewContainerRef.injector;return L.create({parent:r||this._injector,providers:[{provide:pr,useValue:t},{provide:eh,useValue:e.data}]})}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})();var ev=(n,i)=>i.id;function tv(n,i){if(n&1&&(x(0,"span",16),m(1),w()),n&2){let e=le().$implicit;mt("badge-"+e.badgeTipo),p(),te(e.badgeTexto)}}function nv(n,i){if(n&1){let e=ot();x(0,"div",7)(1,"div",8),de(2,"img",9),Z(3,tv,2,3,"span",10),w(),x(4,"div",11)(5,"h3"),m(6),w(),x(7,"p",12),m(8),w(),x(9,"div",13)(10,"span",14),m(11),w(),x(12,"button",15),Nr("click",function(){let r=it(e).$implicit,o=le();return rt(o.comprar(r))}),m(13,"Comprar"),w()()()()}if(n&2){let e=i.$implicit;p(2),Se("src",e.imagem,We)("alt",e.nome),p(),K(e.temBadge()?3:-1),p(3),te(e.nome),p(2),te(e.especificacoes),p(3),te(e.precoFormatado())}}var Wo=class n{produtoService=c(vt);carrinhoService=c(Yt);snackBar=c(hi);produtos=this.produtoService.getDestaques();comprar(i){this.carrinhoService.adicionar(i),this.snackBar.open(`${i.nome} adicionado ao carrinho!`,"Fechar",{duration:3e3,horizontalPosition:"end",verticalPosition:"bottom"})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["app-destaques"]],decls:13,vars:0,consts:[["id","destaques",1,"destaques"],[1,"container-nx"],[1,"destaques-head"],[1,"eyebrow"],[1,"section-title"],["href","#contato",1,"link-ver-todos"],[1,"prod-grid"],[1,"prod-card"],[1,"prod-thumb"],[3,"src","alt"],[1,"badge-nx",3,"class"],[1,"prod-info"],[1,"prod-specs"],[1,"prod-footer"],[1,"prod-price"],[1,"btn-comprar",3,"click"],[1,"badge-nx"]],template:function(e,t){e&1&&(x(0,"section",0)(1,"div",1)(2,"div",2)(3,"div")(4,"p",3),m(5,"Produtos"),w(),x(6,"h2",4),m(7,"Destaques"),w()(),x(8,"a",5),m(9,"Ver todos os produtos \u2192"),w()(),x(10,"div",6),Oe(11,nv,14,6,"div",7,ev),w()()()),e&2&&(p(11),Fe(t.produtos))},styles:[".destaques[_ngcontent-%COMP%]{background-color:var(--nx-bg-alt);padding:100px 0}@media(max-width:767px){.destaques[_ngcontent-%COMP%]{padding:64px 0}}.destaques-head[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:56px;flex-wrap:wrap;gap:16px}@media(max-width:767px){.destaques-head[_ngcontent-%COMP%]{margin-bottom:36px}}.link-ver-todos[_ngcontent-%COMP%]{font-size:12px;color:var(--nx-blue);text-decoration:none;letter-spacing:2px;text-transform:uppercase;font-weight:600;border-bottom:1px solid var(--nx-blue);padding-bottom:2px}.prod-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(270px,1fr));gap:2px}.prod-card[_ngcontent-%COMP%]{background-color:var(--nx-card);overflow:hidden}.prod-card[_ngcontent-%COMP%]:hover   .prod-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transform:scale(1.06)}.prod-thumb[_ngcontent-%COMP%]{position:relative;aspect-ratio:4/3;overflow:hidden;background-color:var(--nx-img-bg)}.prod-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;opacity:.85;transition:transform .4s}.prod-thumb[_ngcontent-%COMP%]   .badge-nx[_ngcontent-%COMP%]{position:absolute;top:14px;left:14px}.prod-info[_ngcontent-%COMP%]{padding:22px 24px 26px}.prod-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;font-weight:700;margin-bottom:6px;color:var(--nx-white)}.prod-specs[_ngcontent-%COMP%]{font-size:11px;color:var(--nx-muted-2);letter-spacing:.5px;margin-bottom:18px}.prod-footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.prod-price[_ngcontent-%COMP%]{font-family:var(--nx-font-display);font-size:22px;font-weight:700;color:var(--nx-blue)}.btn-comprar[_ngcontent-%COMP%]{background:transparent;border:1px solid var(--nx-border);color:var(--nx-muted);padding:8px 18px;cursor:pointer;font-size:10px;letter-spacing:2px;text-transform:uppercase;font-weight:600;transition:.2s;font-family:var(--nx-font-body)}.btn-comprar[_ngcontent-%COMP%]:hover{border-color:var(--nx-blue);color:var(--nx-blue)}"]})};var th=(n,i)=>i.id;function iv(n,i){if(n&1){let e=ot();f(0,"div",8)(1,"div",13),H(2,"img",14),g(),f(3,"div",15)(4,"span",16),m(5),g(),f(6,"h3"),m(7),g(),f(8,"p"),m(9),g(),f(10,"span",17),m(11),g(),f(12,"button",18),$("click",function(){let r=it(e).$implicit,o=le();return rt(o.comprar(r))}),m(13," Comprar agora "),g()()()}if(n&2){let e=i.$implicit;p(2),se("src",e.imagem,We)("alt",e.nome),p(2),mt("badge-"+e.badgeTipo),p(),te(e.badgeTexto),p(2),te(e.nome),p(2),Dt("",e.especificacoes," \u2014 direto do estoque NexTech."),p(2),te(e.precoFormatado())}}function rv(n,i){if(n&1){let e=ot();f(0,"button",19),$("click",function(){let r=it(e).$index,o=le();return rt(o.irPara(r))}),g()}if(n&2){let e=i.$index,t=le();V("active",e===t.indiceAtual()),J("aria-label","Ir para o slide "+(e+1))}}var qo=class n{produtoService=c(vt);carrinhoService=c(Yt);snackBar=c(hi);slides=this.produtoService.getNovidades();indiceAtual=R(0);anterior(){this.indiceAtual.update(i=>i===0?this.slides.length-1:i-1)}proximo(){this.indiceAtual.update(i=>i===this.slides.length-1?0:i+1)}irPara(i){this.indiceAtual.set(i)}comprar(i){this.carrinhoService.adicionar(i),this.snackBar.open(`${i.nome} adicionado ao carrinho!`,"Fechar",{duration:3e3})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["app-novidades"]],decls:21,vars:2,consts:[["id","novidades",1,"novidades"],[1,"container-nx"],[1,"section-head"],[1,"eyebrow"],[1,"section-title"],[1,"carousel-wrap"],[1,"carousel-viewport"],[1,"carousel-track"],[1,"slide"],["mat-icon-button","","aria-label","Anterior",1,"carousel-nav","prev",3,"click"],["mat-icon-button","","aria-label","Pr\xF3ximo",1,"carousel-nav","next",3,"click"],[1,"carousel-dots"],[1,"dot",3,"active"],[1,"nv-img"],[3,"src","alt"],[1,"nv-content"],[1,"badge-nx"],[1,"prod-price"],[1,"btn-nx","btn-nx-primary",3,"click"],[1,"dot",3,"click"]],template:function(e,t){e&1&&(f(0,"section",0)(1,"div",1)(2,"div",2)(3,"p",3),m(4,"Chegaram agora"),g(),f(5,"h2",4),m(6,"Novidades"),g()(),f(7,"div",5)(8,"div",6)(9,"div",7),Oe(10,iv,14,8,"div",8,th),g()(),f(12,"button",9),$("click",function(){return t.anterior()}),f(13,"mat-icon"),m(14,"chevron_left"),g()(),f(15,"button",10),$("click",function(){return t.proximo()}),f(16,"mat-icon"),m(17,"chevron_right"),g()(),f(18,"div",11),Oe(19,rv,1,3,"button",12,th),g()()()()),e&2&&(p(9),za("transform","translateX(-"+t.indiceAtual()*100+"%)"),p(),Fe(t.slides),p(9),Fe(t.slides))},dependencies:[Wt,Gt,lt,Tt],styles:[".novidades[_ngcontent-%COMP%]{padding:100px 0}@media(max-width:767px){.novidades[_ngcontent-%COMP%]{padding:64px 0}}.carousel-wrap[_ngcontent-%COMP%]{position:relative;padding-bottom:40px;border:1px solid var(--nx-border)}.carousel-viewport[_ngcontent-%COMP%]{overflow:hidden}.carousel-track[_ngcontent-%COMP%]{display:flex;transition:transform .4s ease}.slide[_ngcontent-%COMP%]{flex:0 0 100%;display:grid;grid-template-columns:1.1fr 1fr;min-height:420px;background-color:var(--nx-card)}@media(max-width:991px){.slide[_ngcontent-%COMP%]{grid-template-columns:1fr;min-height:unset}}.nv-img[_ngcontent-%COMP%]{position:relative;overflow:hidden;background-color:var(--nx-img-bg)}.nv-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;opacity:.8}@media(max-width:991px){.nv-img[_ngcontent-%COMP%]{aspect-ratio:16/9}}.nv-content[_ngcontent-%COMP%]{padding:56px;display:flex;flex-direction:column;justify-content:center}@media(max-width:991px){.nv-content[_ngcontent-%COMP%]{padding:36px 28px}}.nv-content[_ngcontent-%COMP%]   .badge-nx[_ngcontent-%COMP%]{width:fit-content;margin-bottom:18px}.nv-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:34px;font-weight:700;color:var(--nx-white);margin-bottom:12px}.nv-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;color:var(--nx-muted);margin-bottom:28px;line-height:1.7}.nv-content[_ngcontent-%COMP%]   .prod-price[_ngcontent-%COMP%]{font-family:var(--nx-font-display);font-size:28px;font-weight:700;color:var(--nx-blue);margin-bottom:24px;display:block}.nv-content[_ngcontent-%COMP%]   .btn-nx[_ngcontent-%COMP%]{width:fit-content}.carousel-nav[_ngcontent-%COMP%]{position:absolute;top:calc(50% - 20px);transform:translateY(-50%);color:var(--nx-white)!important;background-color:#08080f80!important}.carousel-nav.prev[_ngcontent-%COMP%]{left:12px}.carousel-nav.next[_ngcontent-%COMP%]{right:12px}.carousel-dots[_ngcontent-%COMP%]{position:absolute;bottom:12px;left:0;right:0;display:flex;justify-content:center;gap:8px}.dot[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:50%;background-color:var(--nx-border);border:none;padding:0;cursor:pointer}.dot.active[_ngcontent-%COMP%]{background-color:var(--nx-blue)}"]})};function ov(n,i){}var tn=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var ml=(()=>{class n extends Zt{_elementRef=c(P);_focusTrapFactory=c(Ws);_config;_interactivityChecker=c(ri);_ngZone=c(S);_focusMonitor=c(sr);_renderer=c(ue);_changeDetectorRef=c(Pe);_injector=c(L);_platform=c(X);_document=c(E);_portalOutlet;_focusTrapped=new M;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=c(tn,{optional:!0})||new tn,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),a(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),a=this._renderer.listen(e,"mousedown",r)})),e.focus(t)}_focusByCssSelector(e,t){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,t)}_trapFocus(e){this._isDestroyed||je(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e=="string"?t=this._document.querySelector(e):typeof e=="boolean"?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus=="function"){let r=rr(),o=this._elementRef.nativeElement;(!r||r===this._document.body||r===o||o.contains(r))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=rr();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=rr()))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["cdk-dialog-container"]],viewQuery:function(t,r){if(t&1&&ht(Kt,7),t&2){let o;oe(o=ae())&&(r._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,r){t&2&&J("id",r._config.id||null)("role",r._config.role)("aria-modal",r._config.ariaModal)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null)},features:[ce],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,r){t&1&&ut(0,ov,0,0,"ng-template",0)},dependencies:[Kt],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})}return n})(),gr=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new M;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(i,e){this.overlayRef=i,this.config=e,this.disableClose=e.disableClose,this.backdropClick=i.backdropClick(),this.keydownEvents=i.keydownEvents(),this.outsidePointerEvents=i.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!Ao(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=i.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(i,e){if(this._canClose(i)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(i),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(i="",e=""){return this.overlayRef.updateSize({width:i,height:e}),this}addPanelClass(i){return this.overlayRef.addPanelClass(i),this}removePanelClass(i){return this.overlayRef.removePanelClass(i),this}_canClose(i){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(i,e,this.componentInstance))}},av=new b("DialogScrollStrategy",{providedIn:"root",factory:()=>{let n=c(L);return()=>li(n)}}),sv=new b("DialogData"),lv=new b("DefaultDialogConfig");function cv(n){let i=R(n),e=new ie;return{valueSignal:i,get value(){return i()},change:e,ngOnDestroy(){e.complete()}}}var fl=(()=>{class n{_injector=c(L);_defaultOptions=c(lv,{optional:!0});_parentDialog=c(n,{optional:!0,skipSelf:!0});_overlayContainer=c(Go);_idGenerator=c(fe);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new M;_afterOpenedAtThisLevel=new M;_ariaHiddenElements=new Map;_scrollStrategy=c(av);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Pt(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(nt(void 0)));open(e,t){let r=this._defaultOptions||new tn;t=h(h({},r),t),t.id=t.id||this._idGenerator.getId("cdk-dialog-"),t.id&&this.getDialogById(t.id);let o=this._getOverlayConfig(t),a=ci(this._injector,o),s=new gr(a,t),l=this._attachContainer(a,s,t);if(s.containerInstance=l,!this.openDialogs.length){let d=this._overlayContainer.getContainerElement();l._focusTrapped?l._focusTrapped.pipe(Ee(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(d)}):this._hideNonDialogContentFromAssistiveTechnology(d)}return this._attachDialogContent(e,s,l,t),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){hl(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){hl(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),hl(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new Jt({positionStrategy:e.positionStrategy||en().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,r){let o=r.injector||r.viewContainerRef?.injector,a=[{provide:tn,useValue:r},{provide:gr,useValue:t},{provide:si,useValue:e}],s;r.container?typeof r.container=="function"?s=r.container:(s=r.container.type,a.push(...r.container.providers(r))):s=ml;let l=new Ot(s,r.viewContainerRef,L.create({parent:o||this._injector,providers:a}));return e.attach(l).instance}_attachDialogContent(e,t,r,o){if(e instanceof Bt){let a=this._createInjector(o,t,r,void 0),s={$implicit:o.data,dialogRef:t};o.templateContext&&(s=h(h({},s),typeof o.templateContext=="function"?o.templateContext():o.templateContext)),r.attachTemplatePortal(new Xt(e,null,s,a))}else{let a=this._createInjector(o,t,r,this._injector),s=r.attachComponentPortal(new Ot(e,o.viewContainerRef,a,null,o.bindings));t.componentRef=s,t.componentInstance=s.instance}}_createInjector(e,t,r,o){let a=e.injector||e.viewContainerRef?.injector,s=[{provide:sv,useValue:e.data},{provide:gr,useValue:t}];return e.providers&&(typeof e.providers=="function"?s.push(...e.providers(t,e,r)):s.push(...e.providers)),e.direction&&(!a||!a.get($t,null,{optional:!0}))&&s.push({provide:$t,useValue:cv(e.direction)}),L.create({parent:a||o,providers:s})}_removeOpenDialog(e,t){let r=this.openDialogs.indexOf(e);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,a)=>{o?a.setAttribute("aria-hidden",o):a.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let r=t.length-1;r>-1;r--){let o=t[r];o!==e&&o.nodeName!=="SCRIPT"&&o.nodeName!=="STYLE"&&!o.hasAttribute("aria-live")&&!o.hasAttribute("popover")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})();function hl(n,i){let e=n.length;for(;e--;)i(n[e])}var ih=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=F({providers:[fl],imports:[di,Qt,cr,Qt]})}return n})();function dv(n,i){}var Xo=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings},pl="mdc-dialog--open",rh="mdc-dialog--opening",oh="mdc-dialog--closing",uv=150,hv=75,mv=(()=>{class n extends ml{_animationStateChanged=new ie;_animationsEnabled=!ye();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?sh(this._config.enterAnimationDuration)??uv:0;_exitAnimationDuration=this._animationsEnabled?sh(this._config.exitAnimationDuration)??hv:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(ah,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(rh,pl)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(pl),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(pl),this._animationsEnabled?(this._hostElement.style.setProperty(ah,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(oh)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(rh,oh)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),t}static \u0275fac=(()=>{let e;return function(r){return(e||(e=dt(n)))(r||n)}})();static \u0275cmp=C({type:n,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(t,r){t&2&&(Se("id",r._config.id),J("aria-modal",r._config.ariaModal)("role",r._config.role)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null),V("_mat-animation-noopable",!r._animationsEnabled)("mat-mdc-dialog-container-with-actions",r._actionSectionCount>0))},features:[ce],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(t,r){t&1&&(f(0,"div",0)(1,"div",1),ut(2,dv,0,0,"ng-template",2),g()())},dependencies:[Kt],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2,changeDetection:1})}return n})(),ah="--mat-dialog-transition-duration";function sh(n){return n==null?null:typeof n=="number"?n:n.endsWith("ms")?ni(n.substring(0,n.length-2)):n.endsWith("s")?ni(n.substring(0,n.length-1))*1e3:n==="0"?0:null}var Yo=(function(n){return n[n.OPEN=0]="OPEN",n[n.CLOSING=1]="CLOSING",n[n.CLOSED=2]="CLOSED",n})(Yo||{}),Zo=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new Aa(1);_beforeClosed=new Aa(1);_result;_closeFallbackTimeout;_state=Yo.OPEN;_closeInteractionType;constructor(i,e,t){this._ref=i,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=i.id,i.addPanelClass("mat-mdc-dialog-panel"),t._animationStateChanged.pipe(he(r=>r.state==="opened"),Ee(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(he(r=>r.state==="closed"),Ee(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),i.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Tr(this.backdropClick(),this.keydownEvents().pipe(he(r=>r.keyCode===27&&!this.disableClose&&!Ao(r)))).subscribe(r=>{this.disableClose||(r.preventDefault(),lh(this,r.type==="keydown"?"keyboard":"mouse"))})}close(i){let e=this._config.closePredicate;e&&!e(i,this._config,this.componentInstance)||(this._result=i,this._containerInstance._animationStateChanged.pipe(he(t=>t.state==="closing"),Ee(1)).subscribe(t=>{this._beforeClosed.next(i),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=Yo.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(i){let e=this._ref.config.positionStrategy;return i&&(i.left||i.right)?i.left?e.left(i.left):e.right(i.right):e.centerHorizontally(),i&&(i.top||i.bottom)?i.top?e.top(i.top):e.bottom(i.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(i="",e=""){return this._ref.updateSize(i,e),this}addPanelClass(i){return this._ref.addPanelClass(i),this}removePanelClass(i){return this._ref.removePanelClass(i),this}getState(){return this._state}_finishDialogClose(){this._state=Yo.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function lh(n,i,e){return n._closeInteractionType=i,n.close(e)}var gl=new b("MatMdcDialogData"),fv=new b("mat-mdc-dialog-default-options"),pv=new b("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let n=c(L);return()=>li(n)}}),Ko=(()=>{class n{_defaultOptions=c(fv,{optional:!0});_scrollStrategy=c(pv);_parentDialog=c(n,{optional:!0,skipSelf:!0});_idGenerator=c(fe);_injector=c(L);_dialog=c(fl);_animationsDisabled=ye();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new M;_afterOpenedAtThisLevel=new M;dialogConfigClass=Xo;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Pt(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(nt(void 0)));constructor(){this._dialogRefConstructor=Zo,this._dialogContainerType=mv,this._dialogDataToken=gl}open(e,t){let r;t=h(h({},this._defaultOptions||new Xo),t),t.id=t.id||this._idGenerator.getId("mat-mdc-dialog-"),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(e,q(h({},t),{positionStrategy:en(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()==="0"||t.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:tn,useValue:t}]},templateContext:()=>({dialogRef:r}),providers:(a,s,l)=>(r=new this._dialogRefConstructor(a,t,l),r.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:l},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:r}])}));return r.componentRef=o.componentRef,r.componentInstance=o.componentInstance,this.openDialogs.push(r),this.afterOpened.next(r),r.afterClosed().subscribe(()=>{let a=this.openDialogs.indexOf(r);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||this._getAfterAllClosed().next())}),r}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})(),ch=(()=>{class n{dialogRef=c(Zo,{optional:!0});_elementRef=c(P);_dialog=c(Ko);ariaLabel;type="button";dialogResult;_matDialogClose;ngOnInit(){this.dialogRef||(this.dialogRef=gv(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let t=e._matDialogClose;t&&(this.dialogResult=t.currentValue)}_onButtonClick(e){this._elementRef.nativeElement.getAttribute("aria-disabled")!=="true"&&lh(this.dialogRef,e.screenX===0&&e.screenY===0?"keyboard":"mouse",this.dialogResult)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=k({type:n,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(t,r){t&1&&$("click",function(a){return r._onButtonClick(a)}),t&2&&J("aria-label",r.ariaLabel||null)("type",r.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[ge]})}return n})();function gv(n,i){let e=n.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?i.find(t=>t.id===e.id):null}var dh=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=F({providers:[Ko],imports:[ih,di,Qt,me]})}return n})();var Qo=class n{data=c(gl);static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["app-galeria-dialog"]],decls:8,vars:3,consts:[[1,"galeria-dialog"],[1,"galeria-dialog-head"],["mat-icon-button","","mat-dialog-close","","aria-label","Fechar"],[3,"src","alt"]],template:function(e,t){e&1&&(f(0,"div",0)(1,"div",1)(2,"span"),m(3),g(),f(4,"button",2)(5,"mat-icon"),m(6,"close"),g()()(),H(7,"img",3),g()),e&2&&(p(3),te(t.data.legenda),p(4),se("src",t.data.imagem,We)("alt",t.data.legenda))},dependencies:[dh,ch,Wt,Gt,lt,Tt],styles:[".galeria-dialog[_ngcontent-%COMP%]{background-color:var(--nx-card)}.galeria-dialog-head[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:12px 8px 12px 20px;border-bottom:1px solid var(--nx-border);font-family:var(--nx-font-display);color:var(--nx-text);letter-spacing:.5px}.galeria-dialog-head[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:var(--nx-muted)}img[_ngcontent-%COMP%]{display:block;width:100%;max-height:70vh;object-fit:cover}"]})};function bv(n,i){if(n&1){let e=ot();x(0,"button",7),Nr("click",function(){let r=it(e),o=r.$implicit,a=r.$index,s=le();return rt(s.abrir(o,a))}),de(1,"img",8),w()}if(n&2){let e=i.$implicit,t=i.$index;J("aria-label","Ampliar imagem "+(t+1)),p(),Se("src",e,We)}}var Jo=class n{produtoService=c(vt);dialog=c(Ko);imagens=this.produtoService.getGaleria();abrir(i,e){this.dialog.open(Qo,{data:{imagem:i,legenda:`Universo gamer NexTech \xB7 foto ${e+1}`},maxWidth:"800px",width:"90vw",panelClass:"nx-dialog-panel"})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["app-galeria"]],decls:10,vars:0,consts:[["id","galeria",1,"galeria"],[1,"container-nx"],[1,"section-head"],[1,"eyebrow"],[1,"section-title"],[1,"gal-grid"],[1,"gal-item"],[1,"gal-item",3,"click"],["alt","Imagem da galeria NexTech",3,"src"]],template:function(e,t){e&1&&(x(0,"section",0)(1,"div",1)(2,"div",2)(3,"p",3),m(4,"Galeria"),w(),x(5,"h2",4),m(6,"Nosso universo gamer"),w()(),x(7,"div",5),Oe(8,bv,2,2,"button",6,hc),w()()()),e&2&&(p(8),Fe(t.imagens))},styles:['.galeria[_ngcontent-%COMP%]{background-color:var(--nx-bg-alt);padding:100px 0}@media(max-width:767px){.galeria[_ngcontent-%COMP%]{padding:64px 0}}.gal-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:2px}.gal-item[_ngcontent-%COMP%]{position:relative;aspect-ratio:1/1;overflow:hidden;cursor:pointer;border:none;padding:0;margin:0;display:block}.gal-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;opacity:.75;transition:transform .4s,opacity .3s}.gal-item[_ngcontent-%COMP%]:after{content:"+";position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:32px;color:var(--nx-white);background:#0057ff00;transition:background .25s;font-family:var(--nx-font-display);opacity:0}.gal-item[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{transform:scale(1.08);opacity:1}.gal-item[_ngcontent-%COMP%]:hover:after{background:#0057ff59;opacity:1}']})};var _v=(n,i)=>i.titulo;function yv(n,i){if(n&1&&(x(0,"div")(1,"strong"),m(2),w(),x(3,"span"),m(4),w()()),n&2){let e=i.$implicit;p(2),te(e.titulo),p(2),te(e.texto)}}var ea=class n{valores=[{titulo:"Miss\xE3o",texto:"Inspirar e valorizar a paix\xE3o pela tecnologia e inova\xE7\xE3o."},{titulo:"Vis\xE3o",texto:"Ampliar o p\xFAblico e as a\xE7\xF5es no mundo gamer."},{titulo:"\xC9tica",texto:"Respeito ao cliente e \xE0 lei em todas as a\xE7\xF5es."},{titulo:"Inova\xE7\xE3o",texto:"Conectados \xE0s novidades do setor tecnol\xF3gico."}];static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["app-sobre"]],decls:25,vars:0,consts:[["id","sobre",1,"sobre"],[1,"container-nx"],[1,"sobre-grid"],[1,"eyebrow"],[1,"sobre-texto"],[1,"sobre-valores"],[1,"sobre-img-wrap"],["src","https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=700&h=800&fit=crop&auto=format","alt","Setup gamer completo"],[1,"sobre-stat"]],template:function(e,t){e&1&&(x(0,"section",0)(1,"div",1)(2,"div",2)(3,"div")(4,"p",3),m(5,"Sobre n\xF3s"),w(),x(6,"h2"),m(7,"Feito por"),de(8,"br"),m(9,"quem joga."),w(),x(10,"div",4)(11,"p"),m(12," Somos apaixonados pelo mundo gamer e tecnol\xF3gico. Entendemos o que voc\xEA precisa porque vivemos esse universo \u2014 do setup para trabalho \xE0 m\xE1quina para rodar os games mais exigentes. "),w(),x(13,"p"),m(14," Nossa miss\xE3o \xE9 inspirar e valorizar a paix\xE3o pela tecnologia, jogos, entretenimento e inova\xE7\xE3o, criando experi\xEAncias \xFAnicas para cada cliente. "),w()(),x(15,"div",5),Oe(16,yv,5,2,"div",null,_v),w()(),x(18,"div",6),de(19,"img",7),x(20,"div",8)(21,"strong"),m(22,"14\u201340"),w(),x(23,"span"),m(24,"Anos de p\xFAblico"),w()()()()()()),e&2&&(p(16),Fe(t.valores))},styles:[".sobre[_ngcontent-%COMP%]{padding:100px 0}@media(max-width:767px){.sobre[_ngcontent-%COMP%]{padding:64px 0}}.sobre-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(360px,1fr));gap:72px;align-items:center}h2[_ngcontent-%COMP%]{font-size:clamp(32px,5vw,60px);font-weight:700;margin-bottom:26px;line-height:1}.sobre-texto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px;line-height:1.8;color:var(--nx-muted);margin-bottom:22px}.sobre-valores[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:1px;border:1px solid var(--nx-border);margin-top:32px}.sobre-valores[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:22px;background-color:var(--nx-card);border-bottom:1px solid var(--nx-border);border-right:1px solid var(--nx-border)}.sobre-valores[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2n){border-right:none}.sobre-valores[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;font-family:var(--nx-font-display);font-size:13px;font-weight:700;color:var(--nx-blue);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px}.sobre-valores[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px;color:var(--nx-muted-2);line-height:1.6}.sobre-img-wrap[_ngcontent-%COMP%]{position:relative}.sobre-img-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;aspect-ratio:4/5;object-fit:cover;opacity:.8}.sobre-stat[_ngcontent-%COMP%]{position:absolute;bottom:-2px;right:-2px;background-color:var(--nx-blue);padding:22px 30px}.sobre-stat[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;font-family:var(--nx-font-display);font-size:38px;font-weight:700;color:var(--nx-white);line-height:1}.sobre-stat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:10px;color:#ffffffb3;letter-spacing:2px;text-transform:uppercase}"]})};var bh=(()=>{class n{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(t){return new(t||n)(ee(ue),ee(P))};static \u0275dir=k({type:n})}return n})(),Cv=(()=>{class n extends bh{static \u0275fac=(()=>{let e;return function(r){return(e||(e=dt(n)))(r||n)}})();static \u0275dir=k({type:n,features:[ce]})}return n})(),ua=new b("");var xv={provide:ua,useExisting:bt(()=>vi),multi:!0};function Dv(){let n=Qe()?Qe().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var wv=new b(""),vi=(()=>{class n extends bh{_compositionMode;_composing=!1;constructor(e,t,r){super(e,t),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!Dv())}writeValue(e){let t=e??"";this.setProperty("value",t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(t){return new(t||n)(ee(ue),ee(P),ee(wv,8))};static \u0275dir=k({type:n,selectors:[["input","formControlName","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControlName","",3,"ngNoCva",""],["input","formControl","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControl","",3,"ngNoCva",""],["input","ngModel","",3,"type","checkbox",3,"ngNoCva",""],["textarea","ngModel","",3,"ngNoCva",""],["","ngDefaultControl",""]],hostBindings:function(t,r){t&1&&$("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[Me([xv]),ce]})}return n})();function Cl(n){return n==null||xl(n)===0}function xl(n){return n==null?null:Array.isArray(n)||typeof n=="string"?n.length:n instanceof Set?n.size:null}var bi=new b(""),Dl=new b(""),Ev=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,ve=class{static min(i){return Sv(i)}static max(i){return Mv(i)}static required(i){return _h(i)}static requiredTrue(i){return Av(i)}static email(i){return kv(i)}static minLength(i){return Rv(i)}static maxLength(i){return Tv(i)}static pattern(i){return Iv(i)}static nullValidator(i){return ia()}static compose(i){return Eh(i)}static composeAsync(i){return Sh(i)}};function Sv(n){return i=>{if(i.value==null||n==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e<n?{min:{min:n,actual:i.value}}:null}}function Mv(n){return i=>{if(i.value==null||n==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e>n?{max:{max:n,actual:i.value}}:null}}function _h(n){return Cl(n.value)?{required:!0}:null}function Av(n){return n.value===!0?null:{required:!0}}function kv(n){return Cl(n.value)||Ev.test(n.value)?null:{email:!0}}function Rv(n){return i=>{let e=i.value?.length??xl(i.value);return e===null||e===0?null:e<n?{minlength:{requiredLength:n,actualLength:e}}:null}}function Tv(n){return i=>{let e=i.value?.length??xl(i.value);return e!==null&&e>n?{maxlength:{requiredLength:n,actualLength:e}}:null}}function Iv(n){if(!n)return ia;let i,e;return typeof n=="string"?(e="",n.charAt(0)!=="^"&&(e+="^"),e+=n,n.charAt(n.length-1)!=="$"&&(e+="$"),i=new RegExp(e)):(e=n.toString(),i=n),t=>{if(Cl(t.value))return null;let r=t.value;return i.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function ia(n){return null}function yh(n){return n!=null}function Ch(n){return Ln(n)?Be(n):n}function xh(n){let i={};return n.forEach(e=>{i=e!=null?h(h({},i),e):i}),Object.keys(i).length===0?null:i}function Dh(n,i){return i.map(e=>e(n))}function Ov(n){return!n.validate}function wh(n){return n.map(i=>Ov(i)?i:e=>i.validate(e))}function Eh(n){if(!n)return null;let i=n.filter(yh);return i.length==0?null:function(e){return xh(Dh(e,i))}}function wl(n){return n!=null?Eh(wh(n)):null}function Sh(n){if(!n)return null;let i=n.filter(yh);return i.length==0?null:function(e){let t=Dh(e,i).map(Ch);return Rr(t).pipe(W(xh))}}function El(n){return n!=null?Sh(wh(n)):null}function uh(n,i){return n===null?[i]:Array.isArray(n)?[...n,i]:[n,i]}function Mh(n){return n._rawValidators}function Ah(n){return n._rawAsyncValidators}function vl(n){return n?Array.isArray(n)?n:[n]:[]}function ra(n,i){return Array.isArray(n)?n.includes(i):n===i}function hh(n,i){let e=vl(i);return vl(n).forEach(r=>{ra(e,r)||e.push(r)}),e}function mh(n,i){return vl(i).filter(e=>!ra(n,e))}var oa=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=wl(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=El(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control?.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},nn=class extends oa{name;get formDirective(){return null}get path(){return null}};var vr="VALID",ta="INVALID",mi="PENDING",br="DISABLED",rn=class{},aa=class extends rn{value;source;constructor(i,e){super(),this.value=i,this.source=e}},yr=class extends rn{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},Cr=class extends rn{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},fi=class extends rn{status;source;constructor(i,e){super(),this.status=i,this.source=e}},sa=class extends rn{source;constructor(i){super(),this.source=i}},En=class extends rn{source;constructor(i){super(),this.source=i}};function Sl(n){return(ha(n)?n.validators:n)||null}function Fv(n){return Array.isArray(n)?wl(n):n||null}function Ml(n,i){return(ha(i)?i.asyncValidators:n)||null}function Pv(n){return Array.isArray(n)?El(n):n||null}function ha(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function kh(n,i,e){let t=n.controls;if(!(i?Object.keys(t):t).length)throw new O(1e3,"");if(!Th(t,e))throw new O(1001,"")}function Rh(n,i,e){n._forEachChild((t,r)=>{if(e[r]===void 0)throw new O(-1002,"")})}var pi=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=R(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return j(this.statusReactive)}set status(i){j(()=>this.statusReactive.set(i))}_status=De(()=>this.statusReactive());statusReactive=R(void 0);get valid(){return this.status===vr}get invalid(){return this.status===ta}get pending(){return this.status===mi}get disabled(){return this.status===br}get enabled(){return this.status!==br}errors;get pristine(){return j(this.pristineReactive)}set pristine(i){j(()=>this.pristineReactive.set(i))}_pristine=De(()=>this.pristineReactive());pristineReactive=R(!0);get dirty(){return!this.pristine}get touched(){return j(this.touchedReactive)}set touched(i){j(()=>this.touchedReactive.set(i))}_touched=De(()=>this.touchedReactive());touchedReactive=R(!1);get untouched(){return!this.touched}_events=new M;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(hh(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(hh(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(mh(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(mh(i,this._rawAsyncValidators))}hasValidator(i){return ra(this._rawValidators,i)}hasAsyncValidator(i){return ra(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let t=i.sourceControl??this;i.onlySelf||this._parent?.markAsTouched(q(h({},i),{sourceControl:t})),e&&i.emitEvent!==!1&&this._events.next(new Cr(!0,t))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=i.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:t})}),i.onlySelf||this._parent?._updateTouched(i,t),e&&i.emitEvent!==!1&&this._events.next(new Cr(!1,t))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let t=i.sourceControl??this;i.onlySelf||this._parent?.markAsDirty(q(h({},i),{sourceControl:t})),e&&i.emitEvent!==!1&&this._events.next(new yr(!1,t))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=i.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),i.onlySelf||this._parent?._updatePristine(i,t),e&&i.emitEvent!==!1&&this._events.next(new yr(!0,t))}markAsPending(i={}){this.status=mi;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new fi(this.status,e)),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.markAsPending(q(h({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=br,this.errors=null,this._forEachChild(r=>{r.disable(q(h({},i),{onlySelf:!0}))}),this._updateValue();let t=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new aa(this.value,t)),this._events.next(new fi(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(q(h({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=vr,this._forEachChild(t=>{t.enable(q(h({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(q(h({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(i,e){i.onlySelf||(this._parent?.updateValueAndValidity(i),i.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===vr||this.status===mi)&&this._runAsyncValidator(t,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new aa(this.value,e)),this._events.next(new fi(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.updateValueAndValidity(q(h({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?br:vr}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=mi,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:i!==!1};let t=Ch(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,r)=>t&&t._find(r),this)}getError(i,e){let t=e?this.get(e):this;return t?.errors?t.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,t){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||t)&&this._events.next(new fi(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,t)}_initObservables(){this.valueChanges=new ie,this.statusChanges=new ie}_calculateStatus(){return this._allControlsDisabled()?br:this.errors?ta:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(mi)?mi:this._anyControlsHaveStatus(ta)?ta:vr}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let t=!this._anyControlsDirty(),r=this.pristine!==t;this.pristine=t,i.onlySelf||this._parent?._updatePristine(i,e),r&&this._events.next(new yr(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new Cr(this.touched,e)),i.onlySelf||this._parent?._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){ha(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){return!i&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=Fv(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=Pv(this._rawAsyncValidators)}_updateHasRequiredValidator(){j(()=>this._hasRequired.set(this.hasValidator(ve.required)))}};function Th(n,i){return Object.hasOwn(n,i)}function Nv(n){return n.tagName==="INPUT"||n.tagName==="SELECT"||n.tagName==="TEXTAREA"}function Lv(n,i,e,t){switch(e){case"name":n.setAttribute(i,e,t);break;case"disabled":case"readonly":case"required":t?n.setAttribute(i,e,""):n.removeAttribute(i,e);break;case"max":case"min":case"minLength":case"maxLength":t!==void 0?n.setAttribute(i,e,t.toString()):n.removeAttribute(i,e);break}}var bl=class{kind;context;control;message;constructor({kind:i,context:e,control:t}){this.kind=i,this.context=e,this.control=t}};var Bv=(()=>{class n{_validator=ia;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let t=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(t),this._validator=this._enabled?this.createValidator(t):ia,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=k({type:n,features:[ge]})}return n})();var Vv={provide:bi,useExisting:bt(()=>Ih),multi:!0};var Ih=(()=>{class n extends Bv{required;inputName="required";normalizeInput=Y;createValidator=e=>_h;enabled(e){return e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=dt(n)))(r||n)}})();static \u0275dir=k({type:n,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(t,r){t&2&&J("required",r._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[Me([Vv]),ce]})}return n})();var jv=new b(""),Al=new b("",{factory:()=>kl}),kl="always";function Uv(n,i){return[...i.path,n]}function zv(n,i,e=kl){Rl(n,i),i.valueAccessor.writeValue(n.value),(n.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(n.disabled),$v(n,i),Wv(n,i),Gv(n,i),Hv(n,i)}function fh(n,i,e=!0){let t=()=>{};i?.valueAccessor?.registerOnChange(t),i?.valueAccessor?.registerOnTouched(t),ca(n,i),n&&(i._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function la(n,i){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function Hv(n,i){if(i.valueAccessor.setDisabledState){let e=t=>{i.valueAccessor.setDisabledState(t)};n.registerOnDisabledChange(e),i._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}function Rl(n,i){let e=Mh(n);i.validator!==null?n.setValidators(uh(e,i.validator)):typeof e=="function"&&n.setValidators([e]);let t=Ah(n);i.asyncValidator!==null?n.setAsyncValidators(uh(t,i.asyncValidator)):typeof t=="function"&&n.setAsyncValidators([t]);let r=()=>n.updateValueAndValidity();la(i._rawValidators,r),la(i._rawAsyncValidators,r)}function ca(n,i){let e=!1;if(n!==null){if(i.validator!==null){let r=Mh(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==i.validator);o.length!==r.length&&(e=!0,n.setValidators(o))}}if(i.asyncValidator!==null){let r=Ah(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==i.asyncValidator);o.length!==r.length&&(e=!0,n.setAsyncValidators(o))}}}let t=()=>{};return la(i._rawValidators,t),la(i._rawAsyncValidators,t),e}function $v(n,i){i.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&Oh(n,i)})}function Gv(n,i){i.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&Oh(n,i),n.updateOn!=="submit"&&n.markAsTouched()})}function Oh(n,i){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Wv(n,i){let e=(t,r)=>{i.valueAccessor.writeValue(t),r&&i.viewToModelUpdate(t)};n.registerOnChange(e),i._registerOnDestroy(()=>{n._unregisterOnChange(e)})}function Fh(n,i){n==null,Rl(n,i)}function qv(n,i){return ca(n,i)}function Yv(n,i){if(!n.hasOwnProperty("model"))return!1;let e=n.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function Xv(n){return Object.getPrototypeOf(n.constructor)===Cv}function Ph(n,i){n._syncPendingControls(),i.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function Zv(n,i){if(!i)return null;Array.isArray(i);let e,t,r;return i.forEach(o=>{o.constructor===vi?e=o:Xv(o)?t=o:r=o}),r||t||e||null}function Kv(n,i){let e=n.indexOf(i);e>-1&&n.splice(e,1)}var Qv={provide:jv,useFactory:()=>{let n=c(on,{self:!0});return{setParseErrors:i=>{n.setParseErrorSource(i)},set onReset(i){n.onReset=i}}}},on=class extends oa{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(i){this.userOnReset=i,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof En&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=Zv(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(i,e,t){super(),this.injector=i,this.renderer=e,this.rawValueAccessors=t,this.injector?.get(_t)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let i=this.injector?.get(Pe);if(!this.control||!i)return;let e=i.markForCheck.bind(i);this.subscription=new Ke,this.subscription.add(this.control.valueChanges.subscribe(e)),this.subscription.add(this.control.statusChanges.subscribe(e)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(t=>{t instanceof En&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(i){!i.nativeElement.hasAttribute?.("ngNoCva")&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!i.customControl||(this.isCustomControlBased=!0,i.listenToCustomControlModel(r=>{this.control?.setValue(r,{emitModelToViewChange:!1}),this.control?.markAsDirty(),this.viewToModelUpdate(r)}),i.listenToCustomControlOutput("touch",()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=Nv(i.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(r=>r instanceof Ih))}ngControlUpdate(i,e){if(!this.isCustomControlBased)return;let t=this.control,r=this.customControlBindings;Object.is(r.value,t.value)||(r.value=t.value,i.setCustomControlModelInput(t.value)),this.bindControlProperty(i,r,"touched",t.touched),this.bindControlProperty(i,r,"dirty",t.dirty),this.bindControlProperty(i,r,"valid",t.valid),this.bindControlProperty(i,r,"invalid",t.invalid),this.bindControlProperty(i,r,"pending",t.pending),this.bindControlProperty(i,r,"disabled",t.disabled),this.shouldBindRequired&&this.bindControlProperty(i,r,"required",this.isRequired);let o=t.errors;if(r.errors!==o){r.errors=o;let a=this._convertErrors(o);i.setInputOnDirectives("errors",a)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(i,e,t,r){if(e[t]===r)return;e[t]=r;let o=i.setInputOnDirectives(t,r);this.isNativeFormElement&&!o&&(t==="disabled"||t==="required")&&this.renderer&&Lv(this.renderer,i.nativeElement,t,r)}_convertErrors(i){if(i===null)return[];let e=this.control;return Object.entries(i).map(([t,r])=>new bl({context:r,kind:t,control:e}))}setParseErrorSource(i){if(i===void 0)return;let e=null,t=De(()=>{let r=i();return r.length===0?null:r.reduce((o,a)=>(o[a.kind]=a,o),{})});this.parseErrorsValidator=(()=>e).bind(this),Lt(()=>{e=t(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(i){this.parseErrorsValidator&&(i?.removeValidators(this.parseErrorsValidator),i?.updateValueAndValidity({emitEvent:!1}))}},da=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var ma=(()=>{class n extends da{constructor(e){super(e)}static \u0275fac=function(t){return new(t||n)(ee(on,2))};static \u0275dir=k({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,r){t&2&&V("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[ce]})}return n})(),fa=(()=>{class n extends da{constructor(e){super(e)}static \u0275fac=function(t){return new(t||n)(ee(nn,10))};static \u0275dir=k({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,r){t&2&&V("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[ce]})}return n})(),gi=class extends pi{constructor(i,e,t){super(Sl(e),Ml(t,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,e){let t=this._find(i);return t||(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,t={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){let t=this._find(i);t&&t._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,t={}){let r=this._find(i);r&&r._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(i){return this._find(i)?.enabled===!0}setValue(i,e={}){j(()=>{Rh(this,!0,i),Object.keys(i).forEach(t=>{kh(this,!0,t),this.controls[t].setValue(i[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(t=>{let r=this._find(t);r&&r.patchValue(i[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((t,r)=>{t.reset(i?i[r]:null,q(h({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new En(this))}getRawValue(){return this._reduceChildren({},(i,e,t)=>(i[t]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&i(t,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&i(t))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(e,t,r)=>((t.enabled||this.disabled)&&(e[r]=t.value),e))}_reduceChildren(i,e){let t=i;return this._forEachChild((r,o)=>{t=e(t,r,o)}),t}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return Th(this.controls,i)?this.controls[i]:null}};var _l=class extends gi{};var Jv={provide:nn,useExisting:bt(()=>Tl)},_r=Promise.resolve(),Tl=(()=>{class n extends nn{callSetDisabledState;get submitted(){return j(this.submittedReactive)}_submitted=De(()=>this.submittedReactive());submittedReactive=R(!1);_directives=new Set;form;ngSubmit=new ie;options;constructor(e,t,r){super(),this.callSetDisabledState=r,this.form=new gi({},wl(e),El(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){_r.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){_r.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){_r.then(()=>{let t=this._findContainer(e.path),r=new gi({});Fh(r,e),t.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){_r.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){_r.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),Ph(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new sa(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(t){return new(t||n)(ee(bi,10),ee(Dl,10),ee(Al,8))};static \u0275dir=k({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,r){t&1&&$("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Me([Jv]),ce]})}return n})();function ph(n,i){let e=n.indexOf(i);e>-1&&n.splice(e,1)}function gh(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var na=class extends pi{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,t){super(Sl(e),Ml(t,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ha(e)&&(e.nonNullable||e.initialValueIsDefault)&&(gh(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){j(()=>{this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new En(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){ph(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){ph(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){gh(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var eb=n=>n instanceof na;var pa=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=k({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return n})();var yl=class extends pi{constructor(i,e,t){super(Sl(e),Ml(t,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(i){return this.controls[this._adjustIndex(i)]}push(i,e={}){Array.isArray(i)?i.forEach(t=>{this.controls.push(t),this._registerControl(t)}):(this.controls.push(i),this._registerControl(i)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(i,e,t={}){this.controls.splice(i,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent})}removeAt(i,e={}){let t=this._adjustIndex(i);t<0&&(t=0),this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(i,e,t={}){let r=this._adjustIndex(i);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),e&&(this.controls.splice(r,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(i,e={}){j(()=>{Rh(this,!1,i),i.forEach((t,r)=>{kh(this,!1,r),this.at(r).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(i,e={}){i!=null&&(i.forEach((t,r)=>{this.at(r)&&this.at(r).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i=[],e={}){this._forEachChild((t,r)=>{t.reset(i[r],q(h({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new En(this))}getRawValue(){return this.controls.map(i=>i.getRawValue())}clear(i={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:i.emitEvent}))}_adjustIndex(i){return i<0?i+this.length:i}_syncPendingControls(){let i=this.controls.reduce((e,t)=>t._syncPendingControls()?!0:e,!1);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){this.controls.forEach((e,t)=>{i(e,t)})}_updateValue(){this.value=this.controls.filter(i=>i.enabled||this.disabled).map(i=>i.value)}_anyControls(i){return this.controls.some(e=>e.enabled&&i(e))}_setUpControls(){this._forEachChild(i=>this._registerControl(i))}_allControlsDisabled(){for(let i of this.controls)if(i.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(i){i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)}_find(i){return this.at(i)??null}};var tb=(()=>{class n extends nn{callSetDisabledState;get submitted(){return j(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=De(()=>this._submittedReactive());_submittedReactive=R(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(ca(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);return e._setupWithForm(t,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){fh(e.control||null,e,!1),Kv(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,Ph(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new sa(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,r=this.form.get(e.path);t!==r&&(fh(t||null,e),eb(r)&&e._setupWithForm(r,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);Fh(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&qv(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Rl(this.form,this),this._oldForm&&ca(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(t){return new(t||n)(ee(bi,10),ee(Dl,10),ee(Al,8))};static \u0275dir=k({type:n,features:[ce,ge]})}return n})();var Nh=new b("");var nb={provide:on,useExisting:bt(()=>xr)},xr=(()=>{class n extends on{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new ie;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,t,r,o,a,s,l){super(l,s,o),this._ngModelWarningConfig=a,this._parent=e,this._setValidators(t),this._setAsyncValidators(r)}_setupWithForm(e,t){this.control=e,this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,zv(e,this,t))}ngOnChanges(e){this._added||this._setUpControl(),Yv(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return Uv(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}\u0275ngControlCreate(e){super.ngControlCreate(e)}\u0275ngControlUpdate(e){this.isCustomControlBased&&(this._added||this._setUpControl(),super.ngControlUpdate(e,!0))}static \u0275fac=function(t){return new(t||n)(ee(nn,13),ee(bi,10),ee(Dl,10),ee(ua,10),ee(Nh,8),ee(ue,8),ee(L,8))};static \u0275dir=k({type:n,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[Me([nb,Qv]),ce,ge,uc(null)]})}return n})();var ib={provide:nn,useExisting:bt(()=>Sn)},Sn=(()=>{class n extends tb{form=null;ngSubmit=new ie;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=dt(n)))(r||n)}})();static \u0275dir=k({type:n,selectors:[["","formGroup",""]],hostBindings:function(t,r){t&1&&$("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Me([ib]),ce]})}return n})();var rb=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=F({})}return n})();function vh(n){return!!n&&(n.asyncValidators!==void 0||n.validators!==void 0||n.updateOn!==void 0)}var ga=(()=>{class n{useNonNullable=!1;get nonNullable(){let e=new n;return e.useNonNullable=!0,e}group(e,t=null){let r=this._reduceControls(e),o={};return vh(t)?o=t:t!==null&&(o.validators=t.validator,o.asyncValidators=t.asyncValidator),new gi(r,o)}record(e,t=null){let r=this._reduceControls(e);return new _l(r,t)}control(e,t,r){let o={};return this.useNonNullable?(vh(t)?o=t:(o.validators=t,o.asyncValidators=r),new na(e,q(h({},o),{nonNullable:!0}))):new na(e,t,r)}array(e,t,r){let o=e.map(a=>this._createControl(a));return new yl(o,t,r)}_reduceControls(e){let t={};return Object.keys(e).forEach(r=>{t[r]=this._createControl(e[r])}),t}_createControl(e){if(e instanceof na)return e;if(e instanceof pi)return e;if(Array.isArray(e)){let t=e[0],r=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(t,r,o)}else return this.control(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})();var va=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:Nh,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Al,useValue:e.callSetDisabledState??kl}]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=F({imports:[rb]})}return n})();var Il=class{_box;_destroyed=new M;_resizeSubject=new M;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new ct(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),t.unsubscribe(),this._elementObservables.delete(i)}}).pipe(he(e=>e.some(t=>t.target===i)),Oa({bufferSize:1,refCount:!0}),Re(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Bh=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=c(S);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let r=t?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new Il(r)),this._observers.get(r).observe(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})();var ob=["notch"],ab=["*"],Vh=["iconPrefixContainer"],jh=["textPrefixContainer"],Uh=["iconSuffixContainer"],zh=["textSuffixContainer"],sb=["textField"],lb=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],cb=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function db(n,i){n&1&&H(0,"span",21)}function ub(n,i){if(n&1&&(f(0,"label",20),re(1,1),Z(2,db,1,0,"span",21),g()),n&2){let e=le(2);se("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),J("for",e._control.disableAutomaticLabeling?null:e._control.id),p(2),K(!e.hideRequiredMarker&&e._control.required?2:-1)}}function hb(n,i){if(n&1&&Z(0,ub,3,5,"label",20),n&2){let e=le();K(e._hasFloatingLabel()?0:-1)}}function mb(n,i){n&1&&H(0,"div",7)}function fb(n,i){}function pb(n,i){if(n&1&&ut(0,fb,0,0,"ng-template",13),n&2){le(2);let e=Ai(1);se("ngTemplateOutlet",e)}}function gb(n,i){if(n&1&&(f(0,"div",9),Z(1,pb,1,1,null,13),g()),n&2){let e=le();se("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),p(),K(e._forceDisplayInfixLabel()?-1:1)}}function vb(n,i){n&1&&(f(0,"div",10,2),re(2,2),g())}function bb(n,i){n&1&&(f(0,"div",11,3),re(2,3),g())}function _b(n,i){}function yb(n,i){if(n&1&&ut(0,_b,0,0,"ng-template",13),n&2){le();let e=Ai(1);se("ngTemplateOutlet",e)}}function Cb(n,i){n&1&&(f(0,"div",14,4),re(2,4),g())}function xb(n,i){n&1&&(f(0,"div",15,5),re(2,5),g())}function Db(n,i){n&1&&H(0,"div",16)}function wb(n,i){n&1&&(f(0,"div",18),re(1,6),g())}function Eb(n,i){if(n&1&&(f(0,"mat-hint",22),m(1),g()),n&2){let e=le(2);se("id",e._hintLabelId),p(),te(e.hintLabel)}}function Sb(n,i){if(n&1&&(f(0,"div",19),Z(1,Eb,2,2,"mat-hint",22),re(2,7),H(3,"div",23),re(4,8),g()),n&2){let e=le();p(),K(e.hintLabel?1:-1)}}var Mn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=k({type:n,selectors:[["mat-label"]]})}return n})(),Xh=new b("MatError"),Dr=(()=>{class n{id=c(fe).getId("mat-mdc-error-");static \u0275fac=function(t){return new(t||n)};static \u0275dir=k({type:n,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(t,r){t&2&&Se("id",r.id)},inputs:{id:"id"},features:[Me([{provide:Xh,useExisting:n}])]})}return n})(),Ol=(()=>{class n{align="start";id=c(fe).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||n)};static \u0275dir=k({type:n,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,r){t&2&&(Se("id",r.id),J("align",null),V("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return n})(),Mb=new b("MatPrefix");var Zh=new b("MatSuffix"),Fl=(()=>{class n{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(t){return new(t||n)};static \u0275dir=k({type:n,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[Me([{provide:Zh,useExisting:n}])]})}return n})(),Kh=new b("FloatingLabelParent"),Hh=(()=>{class n{_elementRef=c(P);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=c(Bh);_ngZone=c(S);_parent=c(Kh);_resizeSubscription=new Ke;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Ab(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=k({type:n,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,r){t&2&&V("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return n})();function Ab(n){let i=n;if(i.offsetParent!==null)return i.scrollWidth;let e=i.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var $h="mdc-line-ripple--active",ba="mdc-line-ripple--deactivating",Gh=(()=>{class n{_elementRef=c(P);_cleanupTransitionEnd;constructor(){let e=c(S),t=c(ue);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(ba),e.add($h)}deactivate(){this._elementRef.nativeElement.classList.add(ba)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,r=t.contains(ba);e.propertyName==="opacity"&&r&&t.remove($h,ba)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=k({type:n,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return n})(),Wh=(()=>{class n{_elementRef=c(P);_ngZone=c(S);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,r){if(t&1&&ht(ob,5),t&2){let o;oe(o=ae())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,r){t&2&&V("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},ngContentSelectors:ab,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,r){t&1&&(Ue(),de(0,"div",1),x(1,"div",2,0),re(3),w(),de(4,"div",3))},encapsulation:2})}return n})(),Pl=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||n)};static \u0275dir=k({type:n})}return n})();var Nl=new b("MatFormField"),kb=new b("MAT_FORM_FIELD_DEFAULT_OPTIONS"),qh="fill",Rb="auto",Yh="fixed",Tb="translateY(-50%)",_i=(()=>{class n{_elementRef=c(P);_changeDetectorRef=c(Pe);_platform=c(X);_idGenerator=c(fe);_ngZone=c(S);_defaults=c(kb,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=ki("iconPrefixContainer");_textPrefixContainerSignal=ki("textPrefixContainer");_iconSuffixContainerSignal=ki("iconSuffixContainer");_textSuffixContainerSignal=ki("textSuffixContainer");_prefixSuffixContainers=De(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=vc(Mn);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=ai(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Rb}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||qh;this._appearanceSignal.set(t)}_appearanceSignal=R(qh);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Yh}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Yh}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new M;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=ye();constructor(){let e=this._defaults,t=c($t);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Lt(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=De(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(r+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(nt([void 0,void 0]),W(()=>[t.errorState,t.userAriaDescribedBy]),Ia(),he(([[o,a],[s,l]])=>o!==s||a!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(Re(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Tr(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Ga({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=De(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let t=this._control.describedByIds,r;if(t){let o=this._describedByIds||e;r=e.concat(t.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=t?.getBoundingClientRect().width??0,l=r?.getBoundingClientRect().width??0,d=o?.getBoundingClientRect().width??0,u=this._currentDirection==="rtl"?"-1":"1",v=`${a+s}px`,U=`calc(${u} * (${v} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,z=`var(--mat-mdc-form-field-label-transform, ${Tb} translateX(${U}))`,G=a+s+l+d;return[z,G]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["mat-form-field"]],contentQueries:function(t,r,o){if(t&1&&(mc(o,r._labelChild,Mn,5),ja(o,Pl,5)(o,Mb,5)(o,Zh,5)(o,Xh,5)(o,Ol,5)),t&2){Ua();let a;oe(a=ae())&&(r._formFieldControl=a.first),oe(a=ae())&&(r._prefixChildren=a),oe(a=ae())&&(r._suffixChildren=a),oe(a=ae())&&(r._errorChildren=a),oe(a=ae())&&(r._hintChildren=a)}},viewQuery:function(t,r){if(t&1&&(fc(r._iconPrefixContainerSignal,Vh,5)(r._textPrefixContainerSignal,jh,5)(r._iconSuffixContainerSignal,Uh,5)(r._textSuffixContainerSignal,zh,5),ht(sb,5)(Vh,5)(jh,5)(Uh,5)(zh,5)(Hh,5)(Wh,5)(Gh,5)),t&2){Ua(4);let o;oe(o=ae())&&(r._textField=o.first),oe(o=ae())&&(r._iconPrefixContainer=o.first),oe(o=ae())&&(r._textPrefixContainer=o.first),oe(o=ae())&&(r._iconSuffixContainer=o.first),oe(o=ae())&&(r._textSuffixContainer=o.first),oe(o=ae())&&(r._floatingLabel=o.first),oe(o=ae())&&(r._notchedOutline=o.first),oe(o=ae())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,r){t&2&&V("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Me([{provide:Nl,useExisting:n},{provide:Kh,useExisting:n}])],ngContentSelectors:cb,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,r){if(t&1&&(Ue(lb),ut(0,hb,1,1,"ng-template",null,0,pc),f(2,"div",6,1),$("click",function(a){return r._control.onContainerClick(a)}),Z(4,mb,1,0,"div",7),f(5,"div",8),Z(6,gb,2,2,"div",9),Z(7,vb,3,0,"div",10),Z(8,bb,3,0,"div",11),f(9,"div",12),Z(10,yb,1,1,null,13),re(11),g(),Z(12,Cb,3,0,"div",14),Z(13,xb,3,0,"div",15),g(),Z(14,Db,1,0,"div",16),g(),f(15,"div",17),Z(16,wb,2,0,"div",18)(17,Sb,5,1,"div",19),g()),t&2){let o;p(2),V("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),p(2),K(!r._hasOutline()&&!r._control.disabled?4:-1),p(2),K(r._hasOutline()?6:-1),p(),K(r._hasIconPrefix?7:-1),p(),K(r._hasTextPrefix?8:-1),p(2),K(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),p(2),K(r._hasTextSuffix?12:-1),p(),K(r._hasIconSuffix?13:-1),p(),K(r._hasOutline()?-1:14),p(),V("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();p(),K((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[Hh,Wh,Xa,Gh,Ol],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})}return n})();var An=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=F({imports:[So,_i,me]})}return n})();var Ib=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2})}return n})(),Ob={passive:!0},Jh=(()=>{class n{_platform=c(X);_ngZone=c(S);_renderer=c(xe).createRenderer(null,null);_styleLoader=c(_e);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return Le;this._styleLoader.load(Ib);let t=Ze(e),r=this._monitoredElements.get(t);if(r)return r.subject;let o=new M,a="cdk-text-field-autofilled",s=d=>{d.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(a)?(t.classList.add(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!0}))):d.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(a)&&(t.classList.remove(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",s,Ob)));return this._monitoredElements.set(t,{subject:o,unlisten:l}),o}stopMonitoring(e){let t=Ze(e),r=this._monitoredElements.get(t);r&&(r.unlisten(),r.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})();var em=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=F({})}return n})();var tm=new b("");var nm=new b("MAT_INPUT_VALUE_ACCESSOR");var im=(()=>{class n{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}isSignalErrorState(e){if(!e)return!1;let t=e().invalid(),r=e().touched();return t&&r}static \u0275fac=function(t){return new(t||n)};static \u0275prov=_({token:n,factory:n.\u0275fac})}return n})();var _a=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(i,e,t,r,o){this._defaultMatcher=i,this._parentFormGroup=t,this._parentForm=r,this._stateChanges=o,e?Si(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let i=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==i&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(i){if(this.formField&&i?.isSignalErrorState)return i.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,t=this.ngControl?this.ngControl.control:null;return i?.isErrorState(t,e)??!1}};var Fb=["button","checkbox","file","hidden","image","radio","range","reset","submit"],Pb=new b("MAT_INPUT_CONFIG"),ya=(()=>{class n{_elementRef=c(P);_platform=c(X);ngControl=c(on,{optional:!0,self:!0});_autofillMonitor=c(Jh);_ngZone=c(S);_formField=c(Nl,{optional:!0});_renderer=c(ue);_uid=c(fe).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=c(Pb,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new M;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=ai(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(ve.required)??!1}set required(e){this._required=ai(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Ks().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=ai(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Ks().has(e));constructor(){let e=c(Tl,{optional:!0}),t=c(Sn,{optional:!0}),r=c(im),o=c(nm,{optional:!0,self:!0}),a=c(tm,{optional:!0,self:!0}),s=this._elementRef.nativeElement,l=s.nodeName.toLowerCase();o?Si(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=s,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(s,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new _a(r,a||this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=l==="select",this._isTextarea=l==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=s.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Lt(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){Fb.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=k({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,r){t&1&&$("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),t&2&&(Se("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),J("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),V("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",Y]},exportAs:["matInput"],features:[Me([{provide:Pl,useExisting:n}]),ge]})}return n})(),Ca=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=F({imports:[An,An,em,me]})}return n})();function Nb(n,i){n&1&&(f(0,"mat-error"),m(1,"Informe seu nome completo."),g())}function Lb(n,i){n&1&&(f(0,"mat-error"),m(1,"Informe um e-mail v\xE1lido."),g())}function Bb(n,i){n&1&&(f(0,"mat-error"),m(1,"Informe um telefone v\xE1lido."),g())}function Vb(n,i){n&1&&(f(0,"mat-error"),m(1,"Escreva uma mensagem."),g())}var xa=class n{fb=c(ga);snackBar=c(hi);form=this.fb.nonNullable.group({nome:["",[ve.required,ve.minLength(3)]],email:["",[ve.required,ve.email]],telefone:["",[ve.required,ve.minLength(8)]],mensagem:["",[ve.required,ve.minLength(5)]]});enviar(){if(this.form.invalid){this.form.markAllAsTouched();return}this.snackBar.open("Mensagem enviada com sucesso! Em breve retornaremos o contato.","Fechar",{duration:4e3}),this.form.reset()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["app-contato"]],decls:63,vars:5,consts:[["id","contato",1,"contato"],[1,"container-nx"],[1,"section-head"],[1,"eyebrow"],[1,"section-title"],[1,"contato-grid"],[1,"contato-card"],[1,"contato-info"],[1,"redes-sociais"],[1,"rs-links"],["href","https://facebook.com","target","_blank","rel","noopener"],["href","https://instagram.com","target","_blank","rel","noopener"],[1,"form-nx",3,"ngSubmit","formGroup"],["appearance","outline"],["matInput","","formControlName","nome","placeholder","Seu nome"],["matInput","","formControlName","email","placeholder","seu@email.com"],["matInput","","formControlName","telefone","placeholder","(11) 00000-0000"],["matInput","","formControlName","mensagem","rows","4","placeholder","Como podemos ajudar?"],["type","submit",1,"btn-nx","btn-nx-primary"]],template:function(e,t){e&1&&(f(0,"section",0)(1,"div",1)(2,"div",2)(3,"p",3),m(4,"Contato"),g(),f(5,"h2",4),m(6,"Fale conosco"),g()(),f(7,"div",5)(8,"div",6)(9,"h3"),m(10,"INFORMA\xC7\xD5ES"),g(),f(11,"div",7)(12,"div")(13,"label"),m(14,"Telefone"),g(),f(15,"span"),m(16,"(11) 99999-8888"),g()(),f(17,"div")(18,"label"),m(19,"E-mail"),g(),f(20,"span"),m(21,"contato@nextech.com.br"),g()(),f(22,"div")(23,"label"),m(24,"Localiza\xE7\xE3o"),g(),f(25,"span"),m(26,"Rua da Tecnologia, 420"),H(27,"br"),m(28,"S\xE3o Paulo, SP \u2013 01310-000"),g()()(),f(29,"div",8)(30,"label"),m(31,"Redes Sociais"),g(),f(32,"div",9)(33,"a",10),m(34,"Facebook"),g(),f(35,"a",11),m(36,"Instagram"),g()()()(),f(37,"div",6)(38,"h3"),m(39,"ENVIE UMA MENSAGEM"),g(),f(40,"form",12),$("ngSubmit",function(){return t.enviar()}),f(41,"mat-form-field",13)(42,"mat-label"),m(43,"Nome completo"),g(),H(44,"input",14),yt(),Z(45,Nb,2,0,"mat-error"),g(),f(46,"mat-form-field",13)(47,"mat-label"),m(48,"E-mail"),g(),H(49,"input",15),yt(),Z(50,Lb,2,0,"mat-error"),g(),f(51,"mat-form-field",13)(52,"mat-label"),m(53,"Telefone"),g(),H(54,"input",16),yt(),Z(55,Bb,2,0,"mat-error"),g(),f(56,"mat-form-field",13)(57,"mat-label"),m(58,"Mensagem"),g(),H(59,"textarea",17),yt(),Z(60,Vb,2,0,"mat-error"),g(),f(61,"button",18),m(62,"Enviar Mensagem"),g()()()()()()),e&2&&(p(40),se("formGroup",t.form),p(4),Ct(),p(),K(t.form.controls.nome.invalid&&t.form.controls.nome.touched?45:-1),p(4),Ct(),p(),K(t.form.controls.email.invalid&&t.form.controls.email.touched?50:-1),p(4),Ct(),p(),K(t.form.controls.telefone.invalid&&t.form.controls.telefone.touched?55:-1),p(4),Ct(),p(),K(t.form.controls.mensagem.invalid&&t.form.controls.mensagem.touched?60:-1))},dependencies:[va,pa,vi,ma,fa,Sn,xr,An,_i,Mn,Dr,Ca,ya,lt],styles:[".contato[_ngcontent-%COMP%]{background-color:var(--nx-bg-alt);border-top:1px solid var(--nx-border);padding:100px 0}@media(max-width:767px){.contato[_ngcontent-%COMP%]{padding:64px 0}}.contato-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2px}.contato-card[_ngcontent-%COMP%]{background-color:var(--nx-card);padding:48px}@media(max-width:767px){.contato-card[_ngcontent-%COMP%]{padding:32px 24px}}.contato-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:17px;font-weight:700;margin-bottom:30px;color:var(--nx-white);letter-spacing:1px}.contato-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px}.contato-info[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;font-size:10px;letter-spacing:2px;color:var(--nx-muted-2);text-transform:uppercase;margin-bottom:5px;font-weight:600}.contato-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;color:var(--nx-text);line-height:1.5;font-weight:500}.redes-sociais[_ngcontent-%COMP%]{margin-top:40px;padding-top:28px;border-top:1px solid var(--nx-border)}.redes-sociais[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;font-size:10px;letter-spacing:2px;color:var(--nx-muted-2);text-transform:uppercase;font-weight:600}.redes-sociais[_ngcontent-%COMP%]   .rs-links[_ngcontent-%COMP%]{display:flex;gap:10px;margin-top:16px}.redes-sociais[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:8px;padding:10px 20px;border:1px solid var(--nx-border);color:var(--nx-muted);text-decoration:none;font-size:13px;font-weight:500;transition:.2s}.redes-sociais[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{border-color:var(--nx-blue);color:var(--nx-blue)}.form-nx[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.form-nx[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}.form-nx[_ngcontent-%COMP%]   .btn-nx[_ngcontent-%COMP%]{align-self:flex-start;margin-top:10px;border:none}"]})};var Da=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["app-home"]],decls:9,vars:0,template:function(e,t){e&1&&H(0,"app-header")(1,"app-hero")(2,"app-categorias")(3,"app-destaques")(4,"app-novidades")(5,"app-galeria")(6,"app-sobre")(7,"app-contato")(8,"app-footer")},dependencies:[Fo,Po,No,Lo,Wo,qo,Jo,ea,xa],encapsulation:2})};var jb=["*"],om=(()=>{class n{labelPosition="after";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,r){t&2&&V("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},ngContentSelectors:jb,decls:1,vars:0,template:function(t,r){t&1&&(Ue(),re(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2})}return n})();var Ub=["input"],zb=["label"],Hb=["*"],Ll={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},$b=new b("mat-checkbox-default-options",{providedIn:"root",factory:()=>Ll}),ke=(function(n){return n[n.Init=0]="Init",n[n.Checked=1]="Checked",n[n.Unchecked=2]="Unchecked",n[n.Indeterminate=3]="Indeterminate",n})(ke||{}),Bl=class{source;checked},Vl=(()=>{class n{_elementRef=c(P);_changeDetectorRef=c(Pe);_ngZone=c(S);_animationsDisabled=ye();_options=c($b,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let t=new Bl;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new ie;indeterminateChange=new ie;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=ke.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){c(_e).load(Io);let e=c(new Bn("tabindex"),{optional:!0});this._options=this._options||Ll,this.color=this._options.color||Ll.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=c(fe).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(ke.Indeterminate):this._transitionCheckState(this.checked?ke.Checked:ke.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=R(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let t=this._currentCheckState,r=this._getAnimationTargetElement();if(!(t===e||!r)&&(this._currentAnimationClass&&r.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){r.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{r.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?ke.Checked:ke.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return"";switch(e){case ke.Init:if(t===ke.Checked)return this._animationClasses.uncheckedToChecked;if(t==ke.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case ke.Unchecked:return t===ke.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case ke.Checked:return t===ke.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case ke.Indeterminate:return t===ke.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["mat-checkbox"]],viewQuery:function(t,r){if(t&1&&ht(Ub,5)(zb,5),t&2){let o;oe(o=ae())&&(r._inputElement=o.first),oe(o=ae())&&(r._labelElement=o.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(t,r){t&2&&(Se("id",r.id),J("tabindex",null)("aria-label",null)("aria-labelledby",null),mt(r.color?"mat-"+r.color:"mat-accent"),V("_mat-animation-noopable",r._animationsDisabled)("mdc-checkbox--disabled",r.disabled)("mat-mdc-checkbox-disabled",r.disabled)("mat-mdc-checkbox-checked",r.checked)("mat-mdc-checkbox-disabled-interactive",r.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",Y],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",Y],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",Y],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:Lr(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",Y],checked:[2,"checked","checked",Y],disabled:[2,"disabled","disabled",Y],indeterminate:[2,"indeterminate","indeterminate",Y]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[Me([{provide:ua,useExisting:bt(()=>n),multi:!0},{provide:bi,useExisting:n,multi:!0}]),ge],ngContentSelectors:Hb,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(t,r){if(t&1&&(Ue(),f(0,"div",3),$("click",function(a){return r._preventBubblingFromLabel(a)}),f(1,"div",4,0)(3,"div",5),$("click",function(){return r._onTouchTargetClick()}),g(),f(4,"input",6,1),$("blur",function(){return r._onBlur()})("click",function(){return r._onInputClick()})("change",function(a){return r._onInteractionEvent(a)}),g(),H(6,"div",7),f(7,"div",8),ql(),f(8,"svg",9),H(9,"path",10),g(),Yl(),H(10,"div",11),g(),H(11,"div",12),g(),f(12,"label",13,2),re(14),g()()),t&2){let o=Ai(2);se("labelPosition",r.labelPosition),p(4),V("mdc-checkbox--selected",r.checked),se("checked",r.checked)("indeterminate",r.indeterminate)("disabled",r.disabled&&!r.disabledInteractive)("id",r.inputId)("required",r.required)("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex),J("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby)("aria-describedby",r.ariaDescribedby)("aria-checked",r.indeterminate?"mixed":null)("aria-controls",r.ariaControls)("aria-disabled",r.disabled&&r.disabledInteractive?!0:null)("aria-expanded",r.ariaExpanded)("aria-owns",r.ariaOwns)("name",r.name)("value",r.value),p(7),se("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0),p(),se("for",r.inputId)}},dependencies:[Eu,om],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-checkbox-state-layer-size, 40px);
  height: var(--mat-checkbox-state-layer-size, 40px);
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
    color: GrayText;
  }
}
.mat-mdc-checkbox label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-checkbox-touch-target-size, 48px);
  width: var(--mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return n})(),am=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=F({imports:[Vl,me]})}return n})();var wr=class{constructor(i,e){this.email=i;this.senha=e}email;senha;validarSenha(i){return this.senha===i}};var wa=class n{usuarios=[new wr("gamer@nextech.com.br","123456")];usuarioLogado=R(null);logado=this.usuarioLogado.asReadonly();login(i,e){let t=this.usuarios.find(o=>o.email===i);if(t){let o=t.validarSenha(e);return o&&this.usuarioLogado.set(t),o}let r=new wr(i,e);return this.usuarios.push(r),this.usuarioLogado.set(r),!0}logout(){this.usuarioLogado.set(null)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})};function Wb(n,i){if(n&1&&(f(0,"div",20),m(1),g()),n&2){let e=le();V("erro",e.mensagem().tipo==="erro"),p(),Dt(" ",e.mensagem().texto," ")}}function qb(n,i){n&1&&(f(0,"mat-error"),m(1,"Informe um e-mail v\xE1lido."),g())}function Yb(n,i){n&1&&(f(0,"mat-error"),m(1,"A senha deve ter no m\xEDnimo 6 caracteres."),g())}var Ea=class n{fb=c(ga);authService=c(wa);router=c(Ht);senhaVisivel=R(!1);enviando=R(!1);mensagem=R(null);form=this.fb.nonNullable.group({email:["",[ve.required,ve.email]],senha:["",[ve.required,ve.minLength(6)]],lembrarMe:[!1]});alternarSenha(){this.senhaVisivel.update(i=>!i)}entrar(){if(this.form.invalid){this.form.markAllAsTouched(),this.mensagem.set({tipo:"erro",texto:"Verifique os campos destacados abaixo."});return}let{email:i,senha:e}=this.form.getRawValue();this.authService.login(i,e)?(this.enviando.set(!0),this.mensagem.set({tipo:"sucesso",texto:"Login realizado com sucesso! Redirecionando..."}),setTimeout(()=>this.router.navigate(["/"]),1500)):this.mensagem.set({tipo:"erro",texto:"E-mail ou senha incorretos."})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["app-login"]],decls:40,vars:8,consts:[[1,"login-wrap"],["src","https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=1600&h=1200&fit=crop&auto=format","alt","PC Gamer com ilumina\xE7\xE3o RGB",1,"hero-bg"],[1,"hero-overlay"],[1,"login-box"],["routerLink","/",1,"voltar-site"],["routerLink","/",1,"nx-logo"],[1,"nx-logo-mark"],[1,"nx-logo-text"],[1,"login-lead"],[1,"alerta-nx",3,"erro"],[1,"login-form",3,"ngSubmit","formGroup"],["appearance","outline"],["matInput","","formControlName","email","placeholder","seu@email.com"],["matInput","","formControlName","senha","placeholder","Sua senha",3,"type"],["mat-icon-button","","matSuffix","","type","button",3,"click"],[1,"login-row"],["formControlName","lembrarMe"],["href","#"],["type","submit",1,"btn-nx","btn-nx-primary","btn-login",3,"disabled"],[1,"login-footer"],[1,"alerta-nx"]],template:function(e,t){e&1&&(f(0,"div",0),H(1,"img",1)(2,"div",2),f(3,"div",3)(4,"a",4),m(5,"\u2190 Voltar ao site"),g(),f(6,"a",5),H(7,"span",6),f(8,"span",7),m(9,"NEXTECH"),f(10,"span"),m(11,"."),g()()(),f(12,"h1"),m(13,"Bem-vindo de volta"),g(),f(14,"p",8),m(15,"Entre para acompanhar pedidos e ofertas exclusivas do mundo gamer."),g(),Z(16,Wb,2,3,"div",9),f(17,"form",10),$("ngSubmit",function(){return t.entrar()}),f(18,"mat-form-field",11)(19,"mat-label"),m(20,"E-mail"),g(),H(21,"input",12),yt(),Z(22,qb,2,0,"mat-error"),g(),f(23,"mat-form-field",11)(24,"mat-label"),m(25,"Senha"),g(),H(26,"input",13),yt(),f(27,"button",14),$("click",function(){return t.alternarSenha()}),f(28,"mat-icon"),m(29),g()(),Z(30,Yb,2,0,"mat-error"),g(),f(31,"div",15)(32,"mat-checkbox",16),m(33,"Lembrar-me"),g(),yt(),f(34,"a",17),m(35,"Esqueci minha senha"),g()(),f(36,"button",18),m(37," Entrar "),g()(),f(38,"p",19),m(39,"Ainda n\xE3o tem conta? Use qualquer e-mail e senha (6+) para simular um cadastro."),g()()()),e&2&&(p(16),K(t.mensagem()?16:-1),p(),se("formGroup",t.form),p(4),Ct(),p(),K(t.form.controls.email.invalid&&t.form.controls.email.touched?22:-1),p(4),se("type",t.senhaVisivel()?"text":"password"),Ct(),p(),J("aria-label",t.senhaVisivel()?"Ocultar senha":"Mostrar senha"),p(2),te(t.senhaVisivel()?"visibility_off":"visibility"),p(),K(t.form.controls.senha.invalid&&t.form.controls.senha.touched?30:-1),p(2),Ct(),p(4),se("disabled",t.enviando()))},dependencies:[Jn,va,pa,vi,ma,fa,Sn,xr,An,_i,Mn,Dr,Fl,Ca,ya,lt,Tt,Wt,Gt,am,Vl],styles:["[_nghost-%COMP%]{display:block}.login-wrap[_ngcontent-%COMP%]{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:40px 20px;position:relative;overflow:hidden}.hero-bg[_ngcontent-%COMP%]{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.18}.hero-overlay[_ngcontent-%COMP%]{position:absolute;inset:0;background:linear-gradient(160deg,var(--nx-bg) 30%,rgba(0,87,255,.15) 100%)}.login-box[_ngcontent-%COMP%]{position:relative;z-index:2;width:100%;max-width:440px;background-color:var(--nx-card);border:1px solid var(--nx-border);padding:48px 40px}@media(max-width:767px){.login-box[_ngcontent-%COMP%]{padding:36px 26px}}.voltar-site[_ngcontent-%COMP%]{display:inline-block;margin-bottom:24px;font-size:12px;color:var(--nx-muted-2);text-decoration:none;letter-spacing:1px;text-transform:uppercase}.voltar-site[_ngcontent-%COMP%]:hover{color:var(--nx-blue)}.nx-logo[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:10px;text-decoration:none;margin-bottom:32px}.nx-logo-mark[_ngcontent-%COMP%]{width:32px;height:32px;background-color:var(--nx-blue);clip-path:polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%);flex-shrink:0}.nx-logo-text[_ngcontent-%COMP%]{font-family:var(--nx-font-display);font-weight:700;font-size:20px;letter-spacing:2px;color:var(--nx-white)}.nx-logo-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--nx-blue)}h1[_ngcontent-%COMP%]{font-size:30px;font-weight:700;text-align:center;margin-bottom:8px;color:var(--nx-white)}.login-lead[_ngcontent-%COMP%]{text-align:center;font-size:13px;color:var(--nx-muted);margin-bottom:28px}.alerta-nx[_ngcontent-%COMP%]{background:#00e6761a;border:1px solid var(--nx-green);color:var(--nx-green);padding:12px 16px;font-size:13px;margin-bottom:18px}.alerta-nx.erro[_ngcontent-%COMP%]{background:#ff17441a;border-color:var(--nx-red);color:var(--nx-red)}.login-form[_ngcontent-%COMP%]{display:flex;flex-direction:column}.login-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}.login-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;font-size:12px;color:var(--nx-muted);margin:4px 0 20px}.login-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--nx-blue);text-decoration:none}.btn-login[_ngcontent-%COMP%]{width:100%;text-align:center;border:none}.btn-login[_ngcontent-%COMP%]:disabled{opacity:.6;cursor:not-allowed}.login-footer[_ngcontent-%COMP%]{text-align:center;margin-top:24px;font-size:12.5px;color:var(--nx-muted-2);line-height:1.6}"]})};var sm=[{path:"",component:Da,title:"NexTech \u2014 Mundo Gamer & Tecnologia"},{path:"login",component:Ea,title:"Entrar \u2014 NexTech"},{path:"**",redirectTo:""}];var lm={providers:[Zl(),Bs(sm,Vs()),jd()]};var Sa=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["app-root"]],decls:1,vars:0,template:function(e,t){e&1&&H(0,"router-outlet")},dependencies:[Ji],encapsulation:2})};rs(Sa,lm).catch(n=>console.error(n));
