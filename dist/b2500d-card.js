/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=globalThis,e$2=t$1.ShadowRoot&&(void 0===t$1.ShadyCSS||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$3=new WeakMap;let n$2 = class n{constructor(t,e,o){if(this._$cssResult$=!0,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$2&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$3.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$3.set(s,t));}return t}toString(){return this.cssText}};const r$2=t=>new n$2("string"==typeof t?t:t+"",void 0,s$2),i$3=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,s,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1],t[0]);return new n$2(o,t,s$2)},S$1=(s,o)=>{if(e$2)s.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of o){const o=document.createElement("style"),n=t$1.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$2,defineProperty:e$1,getOwnPropertyDescriptor:h$1,getOwnPropertyNames:r$1,getOwnPropertySymbols:o$2,getPrototypeOf:n$1}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$2(t,s),b$1={attribute:!0,type:String,converter:u$1,reflect:!1,useDefault:!1,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;let y$1 = class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=b$1){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),h=this.getPropertyDescriptor(t,i,s);void 0!==h&&e$1(this.prototype,t,h);}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=h$1(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get:e,set(s){const h=e?.call(this);r?.call(this,s),this.requestUpdate(t,h,i);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$1(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...r$1(t),...o$2(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return !1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.());}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.());}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const h=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e;const r=h.fromAttribute(s,t.type);this[e]=r??this._$Ej?.get(e)??r,this._$Em=null;}}requestUpdate(t,s,i,e=!1,h){if(void 0!==t){const r=this.constructor;if(!1===e&&(h=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??f$1)(h,s)||i.useDefault&&i.reflect&&h===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,s,i);}!1===this.isUpdatePending&&(this._$ES=this._$EP());}C(t,s,{useDefault:i,reflect:e,wrapped:h},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??s??this[t]),!0!==h||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),!0===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t));}async _$EP(){this.isUpdatePending=!0;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];!0!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e);}}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(s)):this._$EM();}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EM(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return !0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM();}updated(t){}firstUpdated(t){}};y$1.elementStyles=[],y$1.shadowRootOptions={mode:"open"},y$1[d$1("elementProperties")]=new Map,y$1[d$1("finalized")]=new Map,p$1?.({ReactiveElement:y$1}),(a$1.reactiveElementVersions??=[]).push("2.1.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,i$1=t=>t,s$1=t.trustedTypes,e=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,h="$lit$",o$1=`lit$${Math.random().toFixed(9).slice(2)}$`,n="?"+o$1,r=`<${n}>`,l=document,c=()=>l.createComment(""),a=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,d=t=>u(t)||"function"==typeof t?.[Symbol.iterator],f="[ \t\n\f\r]",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,x=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),b=x(1),E=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),C=new WeakMap,P=l.createTreeWalker(l,129);function V(t,i){if(!u(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e?e.createHTML(i):i}const N=(t,i)=>{const s=t.length-1,e=[];let n,l=2===i?"<svg>":3===i?"<math>":"",c=v;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,f=0;for(;f<s.length&&(c.lastIndex=f,u=c.exec(s),null!==u);)f=c.lastIndex,c===v?"!--"===u[1]?c=_:void 0!==u[1]?c=m:void 0!==u[2]?(y.test(u[2])&&(n=RegExp("</"+u[2],"g")),c=p):void 0!==u[3]&&(c=p):c===p?">"===u[0]?(c=n??v,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?p:'"'===u[3]?$:g):c===$||c===g?c=p:c===_||c===m?c=v:(c=p,n=void 0);const x=c===p&&t[i+1].startsWith("/>")?" ":"";l+=c===v?s+r:d>=0?(e.push(a),s.slice(0,d)+h+s.slice(d)+o$1+x):s+o$1+(-2===d?i:x);}return [V(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),e]};class S{constructor({strings:t,_$litType$:i},e){let r;this.parts=[];let l=0,a=0;const u=t.length-1,d=this.parts,[f,v]=N(t,i);if(this.el=S.createElement(f,e),P.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=P.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(h)){const i=v[a++],s=r.getAttribute(t).split(o$1),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:l,name:e[2],strings:s,ctor:"."===e[1]?I:"?"===e[1]?L:"@"===e[1]?z:H}),r.removeAttribute(t);}else t.startsWith(o$1)&&(d.push({type:6,index:l}),r.removeAttribute(t));if(y.test(r.tagName)){const t=r.textContent.split(o$1),i=t.length-1;if(i>0){r.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)r.append(t[s],c()),P.nextNode(),d.push({type:2,index:++l});r.append(t[i],c());}}}else if(8===r.nodeType)if(r.data===n)d.push({type:2,index:l});else {let t=-1;for(;-1!==(t=r.data.indexOf(o$1,t+1));)d.push({type:7,index:l}),t+=o$1.length-1;}l++;}}static createElement(t,i){const s=l.createElement("template");return s.innerHTML=t,s}}function M(t,i,s=t,e){if(i===E)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=a(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=M(t,h._$AS(t,i.values),h,e)),i}class R{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??l).importNode(i,!0);P.currentNode=e;let h=P.nextNode(),o=0,n=0,r=s[0];for(;void 0!==r;){if(o===r.index){let i;2===r.type?i=new k(h,h.nextSibling,this,t):1===r.type?i=new r.ctor(h,r.name,r.strings,this,t):6===r.type&&(i=new Z(h,this,t)),this._$AV.push(i),r=s[++n];}o!==r?.index&&(h=P.nextNode(),o++);}return P.currentNode=l,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=M(this,t,i),a(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==E&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):d(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==A&&a(this._$AH)?this._$AA.nextSibling.data=t:this.T(l.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=S.createElement(V(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new R(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=C.get(t.strings);return void 0===i&&C.set(t.strings,i=new S(t)),i}k(t){u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new k(this.O(c()),this.O(c()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);t!==this._$AB;){const s=i$1(t).nextSibling;i$1(t).remove(),t=s;}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=M(this,t,i,0),o=!a(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=M(this,e[s+n],i,n),r===E&&(r=this._$AH[n]),o||=!a(r)||r!==this._$AH[n],r===A?t=A:t!==A&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class I extends H{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}class L extends H{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A);}}class z extends H{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=M(this,t,i,0)??A)===E)return;const s=this._$AH,e=t===A&&s!==A||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==A&&(s===A||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t);}}const B=t.litHtmlPolyfillSupport;B?.(S,k),(t.litHtmlVersions??=[]).push("3.3.3");const D=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new k(i.insertBefore(c(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=globalThis;class i extends y$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1);}render(){return E}}i._$litElement$=!0,i["finalized"]=!0,s.litElementHydrateSupport?.({LitElement:i});const o=s.litElementPolyfillSupport;o?.({LitElement:i});(s.litElementVersions??=[]).push("4.2.2");

var en = {
  "errors": {
    "both": "Please specify either 'device' or 'entities', not both.",
    "missing": "You must provide either 'device' or 'entities'.",
    "entities_invalid" : "Only [p1_power + p2_power] or [p1_power + p2_power + p3_power + p4_power] are allowed",
  },
  "labels": {
    "last_update": "Last Update",
    "simul_charge": "Simultaneous Charging/Discharging",
    "full_then_discharge": "Fully Charge Then Discharge",
    "charging_mode": "Charging Mode",
    "discharge_mode": "Automatic Discharge Mode",
    "surplus": "Surplus"
  },
  "card": {
    "solar": "Solar Power",
    "output": "Output",
    "realtime": "Realtime Power",
    "battery": "Battery",
    "production": "Production",
    "today": "Today",
    "settings": "Settings"
  },
  "editor": {
    "name": "Card Name",
    "device": "Device ID (e.g. b2500d)",
    "entities": "Alternative Entities (object)",
    "compact": "Compact View",
    "icon": "Show storage icon",
    "horizontal": "Horizontal Orientation",
    "solar": "Show Solar",
    "output": "Show Output",
    "battery": "Show Battery",
    "production": "Show Production",
    "settings": "Show Settings",
    "max_input_power": "Maximum Input Power (W)",
    "custom_settings": "Custom Settings",
  },
  "helpers": {
    "device": "Enter the device short name (only ONE: either device OR entities).",
    "entities": "Alternative: object with entities (e.g. { \"solar_power\": \"sensor.x\" })",
    "compact": "Shows a more compact version of the card",
    "icon": "Hide the storage icon",
    "horizontal": "Orient the card horizontally",
    "settings": "Only shown if device ID is used",
    "max_input_power": "Maximum input power string 1",
    "max_input_power2": "Maximum input power string 2",
    "max_input_power3": "Maximum input power string 3",
    "max_input_power4": "Maximum input power string 4",
    "custom_settings": "Add your custom settings here (entities mode only)",
  }
};

var de = {
  "errors": {
    "both": "Bitte entweder 'device' oder 'entities' angeben, nicht beides.",
    "missing": "Du musst entweder 'device' oder 'entities' angeben.",
    "entities_invalid" : "Erlaubt sind nur [p1_power + p2_power] oder [p1_power + p2_power + p3_power + p4_power].",
  },
  "labels": {
    "last_update": "Aktualisierung",
    "simul_charge": "Gleichzeitiges Laden/Entladen",
    "full_then_discharge": "Vollständig Laden, dann Entladen",
    "charging_mode": "Lademodus",
    "discharge_mode": "Entlademodus automatisch",
    "surplus": "Überschuss"
  },
  "card": {
    "solar": "Solarenergie",
    "output": "Ausgang",
    "realtime": "Echtzeitleistung",
    "battery": "Batterie",
    "production": "Stromerzeugung",
    "today": "Heute",
    "settings": "Einstellungen"
  },
  "editor": {
    "name": "Name der Karte",
    "device": "Geräte-ID (z. B. b2500d)",
    "entities": "Alternative Entitäten (Objekt)",
    "compact": "Kompakt-Ansicht",
    "icon": "Speicher Icon anzeigen",
    "horizontal": "Horizontale Ausrichtung",
    "solar": "Solar anzeigen",
    "output": "Ausgang anzeigen",
    "battery": "Batterie anzeigen",
    "production": "Produktion anzeigen",
    "settings": "Einstellungen anzeigen",
    "max_input_power": "Maximale Eingangsleistung (W)",
    "custom_settings" : "Benutzerdefinierte Einstellungen",
  },
  "helpers": {
    "device": "Gib die Geräte-Kurzbezeichnung an (nur ODER, nicht beides: device ODER entities).",
    "entities": "Alternativ: Objekt mit Entitäten (z. B. { \"solar_power\": \"sensor.x\" })",
    "compact": "Zeigt eine kompaktere Variante der Karte",
     "icon": "Blendet das Speicher Icon aus",
    "horizontal": "Zeigt die Karte horizontal an",
    "settings": "Wird nur angezeigt, wenn Geräte-ID verwendet wird",
    "max_input_power": "Maximale Eingangsleistung String 1",
    "max_input_power2": "Maximale Eingangsleistung String 2",
    "max_input_power3": "Maximale Eingangsleistung String 3",
    "max_input_power4": "Maximale Eingangsleistung String 4",
    "custom_settings" : "Füge hier deine benutzerdefinierten Einstellungen hinzu (nur Entitiy Modus)",
  }
};

var es = {
  "errors": {
    "both": "Especifica 'device' o 'entities', no ambos.",
    "missing": "Debes proporcionar 'device' o 'entities'.",
    "entities_invalid" : "Solo se permiten [p1_power + p2_power] o [p1_power + p2_power + p3_power + p4_power].",
  },
  "labels": {
    "last_update": "Última actualización",
    "simul_charge": "Carga/descarga simultánea",
    "full_then_discharge": "Cargar completamente y luego descargar",
    "charging_mode": "Modo de carga",
    "discharge_mode": "Modo de descarga automático",
    "surplus": "Excedente"
  },
  "card": {
    "solar": "Energía solar",
    "output": "Salida",
    "realtime": "Potencia en tiempo real",
    "battery": "Batería",
    "production": "Producción",
    "today": "Hoy",
    "settings": "Ajustes"
  },
  "editor": {
    "name": "Nombre de la tarjeta",
    "device": "ID del dispositivo (ej. b2500d)",
    "entities": "Entidades alternativas (objeto)",
    "compact": "Vista compacta",
    "icon": "Mostrar icono de almacenamiento",
    "horizontal": "Orientación horizontal",
    "solar": "Mostrar solar",
    "output": "Mostrar salida",
    "battery": "Mostrar batería",
    "production": "Mostrar producción",
    "settings": "Mostrar ajustes",
    "max_input_power": "Potencia máxima de entrada (W)",
    "custom_settings": "Ajustes personalizados",
  },
  "helpers": {
    "device": "Introduce el nombre corto del dispositivo (solo UNO: device O entities).",
    "entities": "Alternativa: objeto con entidades (ej. { \"solar_power\": \"sensor.x\" })",
    "compact": "Muestra una versión más compacta de la tarjeta",
    "icon": "Ocultar icono de almacenamiento",
    "horizontal": "Orientar la tarjeta horizontalmente",
    "settings": "Solo se muestra si se utiliza la ID del dispositivo",
    "max_input_power": "Potencia de entrada máxima cadena 1",
    "max_input_power2": "Potencia de entrada máxima cadena 2",
    "max_input_power3": "Potencia de entrada máxima cadena 3",
    "max_input_power4": "Potencia de entrada máxima cadena 4",
    "custom_settings": "Agrega tus ajustes personalizados aquí (solo modo entidades)",
  }
};

var fr = {
  "errors": {
    "both": "Veuillez indiquer soit 'device' soit 'entities', pas les deux.",
    "missing": "Vous devez fournir soit 'device' soit 'entities'.",
    "entities_invalid" : "Seuls [p1_power + p2_power] ou [p1_power + p2_power + p3_power + p4_power] sont autorisés.",
  },
  "labels": {
    "last_update": "Dernière mise à jour",
    "simul_charge": "Charge/Décharge simultanée",
    "full_then_discharge": "Charger complètement puis décharger",
    "charging_mode": "Mode de charge",
    "discharge_mode": "Mode de décharge automatique",
    "surplus": "Excédent"
  },
  "card": {
    "solar": "Énergie solaire",
    "output": "Sortie",
    "realtime": "Puissance en temps réel",
    "battery": "Batterie",
    "production": "Production",
    "today": "Aujourd’hui",
    "settings": "Paramètres"
  },
  "editor": {
    "name": "Nom de la carte",
    "device": "ID de l’appareil (ex. b2500d)",
    "entities": "Entités alternatives (objet)",
    "compact": "Vue compacte",
    "icon": "Afficher l’icône de stockage",
    "horizontal": "Orientation horizontale",
    "solar": "Afficher solaire",
    "output": "Afficher sortie",
    "battery": "Afficher batterie",
    "production": "Afficher production",
    "settings": "Afficher paramètres",
    "max_input_power": "Puissance d’entrée maximale (W)",
    "custom_settings": "Paramètres personnalisés",
  },
  "helpers": {
    "device": "Indiquez le nom abrégé de l’appareil (un seul : device OU entities).",
    "entities": "Alternative : objet avec entités (ex. { \"solar_power\": \"sensor.x\" })",
    "compact": "Affiche une version plus compacte de la carte",
    "icon": "Masquer l’icône de stockage",
    "horizontal": "Orient la carte horizontalement",
    "settings": "Uniquement affiché si un ID d’appareil est utilisé",
    "max_input_power": "Puissance d’entrée maximale chaîne 1",
    "max_input_power2": "Puissance d’entrée maximale chaîne 2",
    "max_input_power3": "Puissance d’entrée maximale chaîne 3",
    "max_input_power4": "Puissance d’entrée maximale chaîne 4",
    "custom_settings": "Ajoutez vos paramètres personnalisés ici (mode entités uniquement)",
  }
};

var nl = {
  "errors": {
    "both": "Specificeer ofwel een 'device' of 'entities', niet beide.",
    "missing": "Je moet ofwel een 'device' of 'entities' opgeven.",
    "entities_invalid" : "Enkel [p1_power + p2_power] of [p1_power + p2_power + p3_power + p4_power] zijn toegestaan",
  },
  "labels": {
    "last_update": "Laatste update",
    "simul_charge": "Gelijktijdig laden/ontladen",
    "full_then_discharge": "Volledig laden en dan ontladen",
    "charging_mode": "Laadmodus",
    "discharge_mode": "Automatische ontlaadmodus",
    "surplus": "Overschot"
  },
  "card": {
    "solar": "Zonne-energie",
    "output": "Uitvoer",
    "realtime": "Realtime vermogen",
    "battery": "Batterij",
    "production": "Productie",
    "today": "Vandaag",
    "settings": "Instellingen"
  },
  "editor": {
    "name": "Kaartnaam",
    "device": "Device ID (bv. b2500d)",
    "entities": "Alternatieve entiteiten (object)",
    "compact": "Compacte weergave",
    "icon": "Opslagpictogram weergeven",
    "solar": "Toon zonne-energie",
    "output": "Toon uitvoer",
    "battery": "Toon batterij",
    "production": "Toon productie",
    "settings": "Toon instellingen",
    "horizontal": "Horizontale uitrichting",
    "max_input_power": "Maximaal invoervermogen (W)",
    "custom_settings": "Aangepaste instellingen",
  },
  "helpers": {
    "device": "Voer de korte naam van het apparaat in (slechts ÉÉN: of device OF entities).",
    "entities": "Alternatief: object met entiteiten (bv. { \"solar_power\": \"sensor.x\" })",
    "compact": "Toont een compactere versie van de kaart",
    "icon": "Opslagpictogram verbergen",
    "horizontal": "De kaart horizontaal oriënteren",
    "settings": "Alleen zichtbaar als een Device ID wordt gebruikt",
    "max_input_power": "Maximaal ingangsvermogen string 1",
    "max_input_power2": "Maximaal ingangsvermogen string 2",
    "max_input_power3": "Maximaal ingangsvermogen string 3",
    "max_input_power4": "Maximaal ingangsvermogen string 4",
    "custom_settings": "Voeg hier je aangepaste instellingen toe (alleen in entities-modus)",
  }
};

const languages = { en, de, es, fr, nl };


function _getLangCode(langInput) {
  const raw = (langInput || (typeof navigator !== "undefined" && navigator.language) || "en").toString().toLowerCase();
  return raw.split(/[_-]/)[0]; 
}

function localize(key, langInput) {
  const lang = _getLangCode(langInput);
  let result = languages[lang] || languages["en"];
  const parts = key.split(".");
  for (const p of parts) {
    result = result?.[p];
    if (!result) break;
  }
  return result || "";
}

class B2500DCard extends i {
  static get styles() {
    return i$3`
      :host {
        --text:var(--primary-text-color);
        --muted:var(--primary-text-color);
        --cyan:#58d0ff;
        --cyan-soft:#3bbcf0;
        --divider: var(--entities-divider-color,var(--divider-color));
        --radius:22px;
        display:block;
      }

      .container {
        width:100%;
        max-width:600px;
        margin:0 auto;
        padding:18px 14px 26px;
        background: var(--ha-card-background, var(--card-background-color, #fff));
        backdrop-filter: var(--ha-card-backdrop-filter, none);
        box-shadow: var(--ha-card-box-shadow, none);
        box-sizing: border-box;
        border-radius: var(--ha-card-border-radius, 12px);
        border-width: var(--ha-card-border-width, 1px);
        border-style: solid;
        border-color: var(--ha-card-border-color, var(--divider-color, #e0e0e0));
        color: var(--primary-text-color);
      }

      .device {
        display:flex;
        flex-direction:column;
        align-items:center;
        padding:6px 0 6px;
      }

      .device .unit {
        width:80px;
        height:130px;
        border-radius:18px;
        background:#68686A;
        background:linear-gradient(135deg,#68686A 0%,#48484a 45%,#5a5a5c 100%);
        box-shadow: inset 0 2px 0 rgba(255,255,255,.05), inset 0 -8px 16px rgba(0,0,0,.45);
        position:relative;
        display:flex;
        align-items:center;
        justify-content:center;
      }

      .unit-wrapper {
        width: 80px;
        height: 130px;
        display:flex;
        align-items:center;
        justify-content:center;
      }

      .unit-wrapper.rotated {
        width:130px;
        height:80px;
      }

      .unit-wrapper.rotated .unit {
        transform:rotate(90deg);
      }
    
      .unit .battery-bar {
        width: 10px;
        height: 80px;
        border-radius: 6px;
        border: 1px solid #000;
        background: rgb(28, 28, 28);
        position:relative;
        overflow:hidden;
        display:flex;
        justify-content:center;
      }
    
      .unit .battery-fill {
        position:absolute;
        bottom:2px;
        width:4px;      
        background:linear-gradient(#5be5bf, #2ae5a8);
        box-shadow:0 0 3px #5be5bf;
        border-radius:2px;
        height:0%;          
        transition:height .6s ease;
      }
    
      .unit .battery-fill.charging {
        background:linear-gradient(#5be5bf, #2ae5a8);
        box-shadow:0 0 6px #5be5bf;
        animation:pulseGreen 2.5s infinite ease-in-out;
      }
    
      @keyframes pulseGreen {
        0%,100% { opacity:0.6; transform:scaleY(0.95); }
        50%     { opacity:1;   transform:scaleY(1.05); }
      }
    
      .unit .battery-fill.discharging {
        background:linear-gradient(#ff9800, #ff5722);
        box-shadow:0 0 6px #ff9800;
        animation:pulseOrange 2.5s infinite ease-in-out;
      }
    
      @keyframes pulseOrange {
        0%,100% { opacity:0.6; transform:scaleY(0.95); }
        50%     { opacity:1;   transform:scaleY(1.05); }
      }

      .grid {
        display:grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        gap:14px;
      }

      .solar {
        grid-column: 1 / -1;
        padding:18px;
      }

      .battery-card {
        grid-row: span 2;
        display:flex;
        flex-direction:column;
      }

        .card {
          position: relative; 
          background: rgba(100,100,100, 0.15);
          border-radius: var(--radius);
          padding:12px;
          box-sizing:border-box;
          min-width: 0;
        }
        
        .icon {
          position: absolute;
          bottom: 5px;   
          right: 5px;   
          font-size: 22px; 
          color:var(--text);
          font-weight: 700;
          min-width: 0;
        }
        
        ha-icon[icon="mdi:battery-high"] {
          transform: rotate(90deg);
          transform-origin: center;
          backface-visibility: hidden;
          will-change: transform;
          display: inline-block;
        }
        
      .card.flat{ 
      box-shadow:none; 
      padding:0; 
      overflow: visible;
      }

      .title {
        display:flex; 
        align-items: 
        baseline; gap:1px;
        font-weight:600; 
        color:var(--text);
        font-size: var(--ha-font-size-l);
        margin-bottom: 10px;
      }

      .right-big {
        margin-left:auto; 
        font-weight:400; 
        font-size:24px; 
        color:var(--text);
        white-space: nowrap;
      }

      .big-num{ font-size:24px; color:var(--text); font-weight:400; }
      .muted{ color:var(--muted) }
      .subtitle{ color:var(--muted); font-size:13px; margin-top:15px }
      
      .big-num-unit{
          font-size:14px;
          font-weight:400;
          margin-left: 1px;
          color: var(--primary-text-color);
      }
      .big-num-unit.white {
        color: white;
      }

      .flex-wrapper{
            display: flex;
            align-items: baseline;
      }

      .barwrap{ margin-top:8px; display:flex; gap:12px; align-items:center; }
      .bar{
        background: #1C1C1C; 
        border-radius:12px; height:3px; flex:1; position:relative; overflow:hidden;
      }
      .bar .fill{
        position:absolute; left:0; top:0; bottom:0; width:0%;
        background: rgb(84, 158, 164);
        border-radius:12px;
        transition: width .6s ease;
      }
      .bar.r .fill{
        right:0; left:auto;
        background: rgb(84, 158,164);
      }
      .barlabels{ display:flex; justify-content:space-around; margin-top:8px; font-weight:400; color: #549EA4; align-items: center; }
      .barlabels .hint{ color: #549EA4; font-weight:400; font-size:12px; margin-top:2px; }

      .battery{
        display:flex; align-items:center; justify-content:center; padding:10px 0 4px;
      }

        .ring {
          position: relative; 
          width:min(150px, 100%);
          aspect-ratio:1 / 1;
          height:auto;
          flex:0 0 auto;
          border-radius:50%;
          display:grid;
          place-items:center;
          padding: 6px; /* Ringdicke */
          box-sizing: border-box;
          overflow: visible; 
        }
        
        .ring::before {
          content: "";
          position: absolute;
          inset: -3px;             
          border-radius: 50%;
          background: inherit;     
          filter: blur(8px);      
          opacity: 0.6;           
          z-index: 0;
        }
        
        .ring > .inner {
          position: relative;
          z-index: 1; 
        }
        
        .inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: rgba(
            var(--ha-card-background-rgb, 28,28,28),
            1
          );
          display: grid;
          place-items: center;
        }
  
        .pulse-green{
          color: #5be5bf;
          animation: pulseGreen 2.5s infinite ease-in-out;
          pointer-events:none;
        }

     .kwh{ font-size:28px; font-weight:400; color: white; }

      .percent{ 
      color: white;
      margin-top:2px; 
      font-weight:400; 
      font-size: var(--ha-font-size-l) 
          
      }

      .row{
        display:grid; grid-template-columns:minmax(0, 1fr) auto; align-items:center; gap:10px;
        padding:18px; 
      }
      
      .row .left{ display:flex; align-items:center; gap:12px; min-width:0; }
      .row .left span,
      .row .left div{ overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
      .row .right{ color:var(--muted); font-weight:600; display:flex; align-items:center; justify-content:flex-end; min-width:0; }
      .chev{ width:10px; height:10px; border-right:2px solid var(--muted); border-top:2px solid var(--muted); transform:rotate(45deg); margin-left:6px; }

      .divider{ height:1px; background:var(--divider); margin:1px 0 0; }

      .row .right ha-select {
        min-width: 140px;
        max-width: 100%;
      }
      .row .right ha-select {
        width: min(220px, 100%);
      }

      .row .right ha-switch {
        flex:0 0 auto;
      }

      .row:has(ha-select) {
        grid-template-columns:1fr;
      }

      .row:has(ha-select) .right {
        justify-content:stretch;
      }

      .row:has(ha-select) .right ha-select {
        width:100%;
        max-width:100%;
      }

      @media(max-width:700px){
        .grid{grid-template-columns:1fr}
        .battery-card{grid-row:auto}
      }
    
    
     /* Compact Card Styles */
      .compact {
        display: flex;
        align-items: center;
        background: var(--ha-card-background, var(--card-background-color, #fff));
        backdrop-filter: var(--ha-card-backdrop-filter, none);
        box-shadow: var(--ha-card-box-shadow, none);
        box-sizing: border-box;
        border-radius: var(--ha-card-border-radius, 12px);
        border-width: var(--ha-card-border-width, 1px);
        border-style: solid;
        border-color: var(--ha-card-border-color, var(--divider-color, #e0e0e0));
        color: var(--primary-text-color);
      }

      .compact .unit {
        transform: scale(0.6);
        transform-origin: center;
      }

      .compact .device{
        margin-left: 3px;
        padding: 0;
        position: relative;
        width: 48px;
        height: 88px;
        flex-shrink: 0;
     }
      
     .compact .device .unit {
        position: absolute;
        transform: scale(0.6);
        left: 2px;
        top: 5px;
        transform-origin: top left;
      }
      .compact .device.rotated {
        width: 80px;
        height: 48px;
        position: relative;
        flex-shrink: 0;
        margin: 2px;
      }

      .compact .device.rotated .unit {
         position: absolute;
         top: calc((48px - 130px) / 2);
        transform-origin: center;
        transform: scale(0.6) rotate(90deg);
      }

      .compact .right {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin: 10px;
      }

      .compact .name {
        font-weight: 800;
        font-size: 16px;
        color: var(--text);
        margin-bottom: 4px;
      }

      .compact .val {
        display: flex;
        align-items: center;
        font-weight: 600;
        color: var(--text);
        font-size: 12px;
      }

      .compact ha-icon[icon^="mdi:battery"] {
        transform: rotate(90deg);
      }
      
      .compact ha-icon {
        scale: 0.7;
        margin-right: 1px;
      }
      
      .compact .flex{
          display: flex;
          gap: 10px;
      }
      
      .compact p{
          color: gray;
          margin: 0;
      }
      
    `;
  }

  constructor() {
    super();
  }

  setConfig(config) {
    this.config = {
      output: true,
      battery: true,
      production: true,
      settings: true,
      solar: true,
      compact: false,
      icon: true,
      ...config
    };
    if (this._hass) {
      this._validateConfig(this.config);
    } else {
        this._delayedValidation = true;
    }
  }

    _validateConfig(config) {
      const lang = this._hass?.language || "en";
      const { device, entities } = config;
    
      if (device && entities) {
        this._configError = localize("errors.both", lang);
        return false;
      }
      if (!device && !entities) {
        this._configError = localize("errors.missing", lang);
        return false;
      }
    
      this._configError = null;
      return true;
    }

  set hass(hass) {
    this._hass = hass;
    if (!this.config) return;

    if (this.config.device) {
      // Device-Modus
      const device = this.config.device;
      const getState = (entity) => hass.states[entity]?.state || 0;
      this._solarPower = getState(`sensor.${device}_total_input_power`);
      this._p1 = getState(`sensor.${device}_input_1_power`);
      this._p2 = getState(`sensor.${device}_input_2_power`);
      this._outputPower = getState(`sensor.${device}_total_output_power`);
      this._batteryPercent = getState(`sensor.${device}_battery_percentage`);
      this._batteryKwh = getState(`sensor.${device}_battery_capacity`) / 1000;
      this._productionToday = getState(`sensor.${device}_daily_pv_charging`) / 1000;
      this._lastUpdate = this._formatLastUpdate(this._hass.states[`sensor.${this.config.device}_last_update`]?.state) || "n/a";
      
    } else if (this.config.entities) {
      // Entities-Modus
      const e = this.config.entities;
    
      const getNumericValue = (entity) => {
        const stateObj = this._hass.states[entity];
        if (!stateObj) return 0;
    
        const value = Number(stateObj.state) || 0;
        const unit = stateObj.attributes?.unit_of_measurement;
    
        if (unit?.toLowerCase() === "kwh") {
          return value;
        }

        if (unit?.toLowerCase() === "wh") {
          return value / 1000;
        }

        return value;
      };
    
      this._solarPower = Number(this._hass.states[e.solar_power]?.state) || 0;
      this._p1 = Number(this._hass.states[e.p1_power]?.state) || 0;
      this._p2 = this._hass.states[e.p2_power]?.state !== undefined
          ? Number(this._hass.states[e.p2_power].state)
          : null;
      this._p3 = this._hass.states[e.p3_power]?.state !== undefined
          ? Number(this._hass.states[e.p3_power].state)
          : null;
        
      this._p4 = this._hass.states[e.p4_power]?.state !== undefined
          ? Number(this._hass.states[e.p4_power].state)
          : null;
      this._outputPower = Number(this._hass.states[e.output_power]?.state) || 0;
      this._batteryPercent = Number(this._hass.states[e.battery_percentage]?.state) || 0;
    
      this._batteryKwh = e.battery_capacity ? getNumericValue(e.battery_capacity) : 0;
      this._productionToday = e.production_today ? getNumericValue(e.production_today) : 0;
      this._lastUpdate = this._formatLastUpdate(this._hass.states[e.last_update]?.state) || "n/a";


      if (this.config.custom_settings?.length) {
        this.config.settings = true;
      }else {
         this.config.settings = false;
      }
    }
    if (this._delayedValidation) {
        this._validateConfig(this.config);
        this._delayedValidation = false;
    }
    this.requestUpdate();
  }

  _handleMoreInfo(entityId) {
    const event = new CustomEvent("hass-more-info", {
      bubbles: true,
      composed: true,
      detail: { entityId }
    });
    this.dispatchEvent(event);
  }

    _getEntity(type) {
      const mapping = {
        daily_pv_charging: "production_today",
        battery_percentage: "battery_percentage",
        battery_capacity: "battery_capacity",
        total_input_power: "solar_power",
        input_1_power: "p1_power",
        input_2_power: "p2_power",
        input_3_power: "p3_power",
        input_4_power: "p4_power",
        total_output_power: "output_power",
      };
    
      if (this.config.device) {
        return `sensor.${this.config.device}_${type}`;
      }
    
      const externalType = mapping[type] ?? type;
      return this.config.entities?.[externalType] || null;
    }

  _toggleSwitch(entityId, checked) {
    this._hass.callService("switch", checked ? "turn_on" : "turn_off", {
      entity_id: entityId
    });
  }

  _formatLastUpdate(isoString) {
    if (!isoString) return '';

    const date = new Date(isoString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Monate 0-11
    const day = String(date.getDate()).padStart(2, '0');
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');

    const formatted = `${year}-${month}-${day} ${hour}:${minute}`;
    return formatted;
  }

  _formatEntityValue(entity) {
    const formatted = this._hass.formatEntityState(entity);
    const unit = entity.attributes.unit_of_measurement;

    if (!unit) return formatted;

    return formatted.endsWith(unit)
      ? formatted.slice(0, -unit.length).trim()
      : formatted;
  }



//RENDER COMPACT
     _renderCompact(batteryClass){
         const percent = this._batteryPercent ?? 0;
    
          let color = "green";
          if (percent <= 19) {
            color = "red";
          } else if (percent <= 59) {
            color = "orange";
          }
    
          let icon = "";
          if (percent >= 100) {
            icon = "mdi:battery";
          } else if (percent < 10) {
            icon = "mdi:battery-outline";
          } else {
            let level = Math.floor(percent / 10) * 10;
            icon = `mdi:battery-${level}`;
          }
          return b`
            <div class="compact" @click=${() => this._handleMoreInfo(this._getEntity("battery_percentage"))}>
            
   
            <div class="device ${this.config.horizontal === true ? "rotated" : ""}">
                <div class="unit">
                  <div class="battery-bar">
                    <div class="battery-fill ${batteryClass}" 
                        style="height:${Math.min(this._batteryPercent, 98)}%">
                    </div>
                  </div>
                </div>
            </div>
            
            
              <div class="right">
                <div class="name">${this.config.name || this.config.device}</div>
                <div class="flex">
                <div class="val">
                  <ha-icon icon="mdi:solar-power"></ha-icon>
                  <p>${this._solarPower}W</p>
                </div>
                <div class="val">
                  <ha-icon icon="mdi:transmission-tower"></ha-icon>
                  <p>${this._outputPower}W</p>
                </div>
                <div class="val">
                   <ha-icon icon=${icon} style="color:${color}"></ha-icon>
                  <p>${this._batteryPercent}%</p>
                </div>
              </div>
              </div>
            </div>
          `;
     }

    //RENDER UNIT
    _renderUnit(batteryClass){
      return b`  
      <div class="unit-wrapper ${this.config.horizontal === true ? "rotated" : ""}">
        <div class="unit">
          <div class="battery-bar">
            <div class="battery-fill ${batteryClass}" style="height:${Math.min(this._batteryPercent, 98)}%"></div>
          </div>
        </div>
      </div>
      `
    }

    //RENDER SOLAR
    _renderSolar(lang){
        const maxInputPower = this.config.max_input_power || 600;
        const maxInputPower2 = this.config.max_input_power2 || 600;
        const maxInputPower3 = this.config.max_input_power3 || 600;
        const maxInputPower4 = this.config.max_input_power4 || 600;
        const p1Pct = Math.round((this._p1 / maxInputPower) * 100);
        const p2Pct = Math.round((this._p2 / maxInputPower2) * 100);
        const p3Pct = Math.round((this._p3 / maxInputPower3) * 100);
        const p4Pct = Math.round((this._p4 / maxInputPower4) * 100);
        
        return b`
			<article class="card solar">
            <div class="title">
              ${localize("card.solar", lang)}
              <div class="right-big" @click=${() => this._handleMoreInfo(this._getEntity("total_input_power"))}>${this._solarPower}</div><div class="big-num-unit">W</div>
            </div>
            <div style="width: 85%;">
            <div class="barlabels">
              ${this._p1 != null ? b`<div @click=${() => this._handleMoreInfo(this._getEntity("input_1_power"))}>${this._p1} W</div>` : ""}
              ${this._p2 != null ? b`<div @click=${() => this._handleMoreInfo(this._getEntity("input_2_power"))}>${this._p2} W</div>` : ""}
              ${this._p3 != null ? b`<div @click=${() => this._handleMoreInfo(this._getEntity("input_3_power"))}>${this._p3} W</div>` : ""}
              ${this._p4 != null ? b`<div @click=${() => this._handleMoreInfo(this._getEntity("input_4_power"))}>${this._p4} W</div>` : ""}
            </div>
            <div class="barwrap">
            ${this._p1 != null ? b`<div class="bar"><div class="fill" style="width:${p1Pct}%"></div></div>`
              : ""}
            ${this._p2 != null ? b`<div class="bar"><div class="fill" style="width:${p2Pct}%"></div></div>`
              : ""}
            ${this._p3 != null ? b`<div class="bar"><div class="fill" style="width:${p3Pct}%"></div></div>`
              : ""}
            ${this._p4 != null ? b`<div class="bar"><div class="fill" style="width:${p4Pct}%"></div></div>`
              : ""}
            </div>
            <div class="barlabels">
            ${this._p1 != null ? b`<div class="hint">P1</div>` : ""}
            ${this._p2 != null ? b`<div class="hint">P2</div>` : ""}
            ${this._p3 != null ? b`<div class="hint">P3</div>` : ""}
            ${this._p4 != null ? b`<div class="hint">P4</div>` : ""}
            </div>
            
            </div>
            <div class="icon"><ha-icon icon="mdi:solar-power-variant-outline"></ha-icon>︎</div>
          </article>`
        
    }
    
    //RENDER OUTPUT
    _renderOutput(lang){
        return b`
          <article class="card" @click=${() => this._handleMoreInfo(this._getEntity("total_output_power"))}>
              <div class="title">${localize("card.output", lang)}</div>
              <div class="subtitle">${localize("card.realtime", lang)}</div>
              <div class="flex-wrapper">
                <div class="big-num">${Number(this._outputPower).toFixed(1)}</div>
                <div class="big-num-unit">W</div>
              </div>
               <div class="icon"><ha-icon icon="mdi:transmission-tower"></ha-icon>︎</div>
            </article>
          ` 
    }
    
    //RENDER BATTERY
    _renderBattery(lang, solar, output){
      return  b`
                <article class="card battery-card">
                  <div class="title">${localize("card.battery", lang)}</div>
                  <div class="battery">
                    <div class="ring"
                         style="
                          background: conic-gradient(
                              #FC2022 0 ${Math.min(this._batteryPercent, 15)}%, 
                              orange ${Math.min(this._batteryPercent, 50)}%, 
                              #58C3D3 ${Math.min(this._batteryPercent, 100)}%, 
                              rgb(13, 13, 13) ${this._batteryPercent}% 100%
                            );
                         "
                         @click=${() => this._handleMoreInfo(this._getEntity("battery_percentage"))}>
                      <div class="inner" style="position: relative;">
                          <div style="
                               text-align:center; 
                               display:flex; 
                               flex-direction:column; 
                               align-items:center; 
                               justify-content:center; 
                               height:100%;
                               width:100%;
                            ">
                            <div class="flex-wrapper">
                              <div class="kwh">${Number(this._batteryKwh).toFixed(2)}</div>
                              <div class="big-num-unit white">kWh</div>
                            </div>
                            <div class="percent">${this._batteryPercent}%</div>
                          </div>
                        </div>
                        </div>
                  ${solar > output && this._batteryPercent < 100 ? b`
                      <div class="icon pulse-green"><ha-icon icon="mdi:battery-high"></ha-icon>︎</div>
                          ` : 
                         b` <div class="icon"><ha-icon icon="mdi:battery-high"></ha-icon>︎</div>`}
                  </div>
                </article>`
    }
    
    //RENDER PRODUCTION
    _renderProduction(lang){
       return b`
          <article class="card"  @click=${() => this._handleMoreInfo(this._getEntity("daily_pv_charging"))}>
            <div class="title">${localize("card.production", lang)}</div>
            <div class="subtitle">${localize("card.today", lang)}</div>
           <div class="flex-wrapper"><div class="big-num">${Number(this._productionToday).toFixed(2)}</div><div class="big-num-unit">kWh</div></div>
            <div class="icon"><ha-icon icon="mdi:chart-bar"></ha-icon>︎</div>
          </article>`   
    }
    
    // RENDER CUSTOM SETTINGS
    _renderCustomSettings(){
        return b`
          ${this.config.custom_settings.map((item, index) => {
            const entity = this._hass.states[item.entity];
            if (!entity) return b``;
    
            const icon = item.icon || entity.attributes.icon;
            const name = item.name || entity.attributes.friendly_name || item.entity;
            const renderDivider = index < this.config.custom_settings.length - 1 
              ? b`<div class="divider"></div>` 
              : b``;
    
            // switch entities
            if (entity.entity_id.startsWith("switch.")) {
              return b`
                <div class="row">
                  <div class="left">
                    ${icon ? b`<ha-icon icon="${icon}"></ha-icon>` : ""}
                    <div style="font-weight:600">${name}</div>
                  </div>
                  <div class="right">
                    <ha-switch
                      .checked=${entity.state === "on"}
                      @change=${(e) => {
                        const service = e.target.checked ? "turn_on" : "turn_off";
                        this._hass.callService("switch", service, { entity_id: entity.entity_id });
                      }}>
                    </ha-switch>
                  </div>
                </div>
                ${renderDivider}
              `;
            }

            // select entities
            if (entity.entity_id.startsWith("select.")) {
              return b`
                <div class="row">
                  <div class="left">
                    ${icon ? b`<ha-icon icon="${icon}"></ha-icon>` : ""}
                    <div style="font-weight:600">${name}</div>
                  </div>
                  <div class="right">
                    <ha-select
                      .value=${entity.state}
                      .options=${entity.attributes?.options || []}
                      @closed=${(e) => e.stopPropagation()}
                      @change=${(e) => {
                        const val = e.detail?.value ?? e.target.value;
                        this._hass.callService("select", "select_option", {
                          entity_id: entity.entity_id,
                          option: val
                        });
                      }}>
                    </ha-select>
                  </div>
                </div>
                ${renderDivider}
              `;
            }
            // sensor entities
            if (entity.entity_id.startsWith("sensor.")) {
            return b`
              <div class="row">
                <div class="left">
                  ${icon ? b`<ha-icon icon="${icon}"></ha-icon>` : ""}
                  <div style="font-weight:600">${name}</div>
                </div>
                <div class="flex-wrapper"><div class="big-num">${this._formatEntityValue(entity)}</div> <div class="big-num-unit">${entity.attributes.unit_of_measurement}</div></div>
              </div>
              ${renderDivider}
            `;}
          }
         )}
        `;
    }
    
    // RENDER SETTINGS SECTION
    _renderSettings(lang){
       const selectEntity = this._hass.states[`select.${this.config.device}_charging_mode`];
       const switchEntity = this._hass.states[`switch.${this.config.device}_adaptive_mode`];
       return b`
       
        <div class="card flat" style="grid-column:1 / -1">
    
         <!-- Device Settings -->
        ${this.config.device && this.config.settings ? b`
          <div class="row">
            <div class="left"><ha-icon icon="mdi:cog"></ha-icon><div style="font-weight:600">${localize("labels.charging_mode", lang)}</div></div>
            <div class="right">
              ${selectEntity
                ? b`
                  <ha-select
                    .value=${selectEntity.state}
                    @change=${(e) => {
                      const val = e.target.value;
                      this._hass.callService("select", "select_option", {
                        entity_id: selectEntity.entity_id,
                        option: val
                      });
                    }}
                  >
                    ${(selectEntity.attributes?.options || []).map(
                      (opt) => b`<mwc-list-item value=${opt}>
                        ${localize(opt === "Simultaneous Charging/Discharging" ? "labels.simul_charge" : "labels.full_then_discharge", lang)}
                      </mwc-list-item>`
                    )}
                  </ha-select>
                `
                : b`<span>-</span>`}
            </div>
          </div>
          <div class="divider"></div>
    
          <div class="row">
            <div class="left"><ha-icon icon="mdi:power-plug-battery"></ha-icon><div style="font-weight:600">${localize("labels.discharge_mode", lang)}</div></div>
            <div class="right">
              ${switchEntity
                ? b`
                  <ha-switch
                    .checked=${switchEntity.state === "on"}
                    @change=${(e) => {
                      const service = e.target.checked ? "turn_on" : "turn_off";
                      this._hass.callService("switch", service, { entity_id: switchEntity.entity_id });
                    }}
                  ></ha-switch>
                `
                : b`<span>-</span>`}
            </div>
          </div>
          <div class="divider"></div>
    
          <div class="row">
            <div class="left">
              <ha-icon icon="mdi:transmission-tower-import"></ha-icon>
              <div style="font-weight:600">${localize("labels.surplus", lang)}</div>
            </div>
            <div class="right">
              <ha-switch
                style="margin-left:auto"
                .checked=${this._hass.states[`switch.${this.config.device}_surplus_feed_in`]?.state === "on"}
                @change=${(e) => this._toggleSwitch(`switch.${this.config.device}_surplus_feed_in`, e.target.checked)}>
              </ha-switch>
            </div>
          </div>
        ` : ''}
    
            <!-- Custom Settings -->
            ${this.config.custom_settings?.length && this._hass  ? this._renderCustomSettings() : ""}
          
       </div>
        `;
    }
    
    // RENDER HEADER
    _renderHeader(lang){
        return b`<div style="display:grid; justify-content:space-between; width:100%; padding:0 12px; margin-bottom:6px;">
            <div style="font-weight:600; color:var(--text); font-size:20px">
              ${this.config.name || this.config.device}
            </div>
            <div style="font-size:10px; color:var(--muted);">
              ${localize("labels.last_update", lang)}: ${this._lastUpdate}
            </div>
          </div>
          `
    }

/////////////////
// RENDER
/////////////////
  render() {
     if (this._configError) {
        return b`<ha-alert alert-type="error">${this._configError}</ha-alert>`;
     }

    const solar = Number(this._solarPower);
    const output = Number(this._outputPower);

    const lang = this._hass?.language || "en";
    const batteryClass = solar > output && this._batteryPercent < 100
      ? 'charging'
      : output > solar && this._batteryPercent > 0
        ? 'discharging'
        : '';

    if (this.config.compact) {
      return this._renderCompact(batteryClass);
    }

    return b`
      <div class="container">
        <div class="device">
          
          <!-- Header -->
          ${this._renderHeader(lang)}

          <!-- Unit mit Akku-Balken -->
           ${this.config.icon ? this._renderUnit(batteryClass):""}
        
        </div>

        <section class="grid">
          <!-- Solar -->
          ${this.config.solar ? this._renderSolar(lang) : ""}

          <!-- Output -->
          ${this.config.output ? this._renderOutput(lang) : ""}

          <!-- Battery -->
          ${this.config.battery ? this._renderBattery(lang, solar, output) : ""}

          <!-- Production -->
          ${this.config.production ? this._renderProduction(lang) : ""}
       
          <!-- Settings Section -->
          ${this.config.settings || (this.config.custom_settings?.length && this._hass) ? this._renderSettings(lang) : ""}
        </section>
      </div>
        `;
  }


  static getConfigElement() {
    return document.createElement("b2500d-card-editor");
  }

  getCardSize() { 
      return 3; 
  }

}

customElements.define("b2500d-card", B2500DCard);


// -------------------------------------
// Config Editor
// -------------------------------------

class B2500DCardEditor extends i {
  static get properties() {
    return {
      _config: { type: Object },
      hass: { type: Object },
    };
  }


  setConfig(config) {
    this._config = {
      output: true,
      battery: true,
      production: true,
      settings: true,
      solar: true,
      icon: true,
      compact: false,
      horizontal: false,
      max_input_power: 600,
      max_input_power2: 600,
      max_input_power3: 600,
      max_input_power4: 600,
      entities: {
        battery_percentage: "",
        battery_capacity: "",
        solar_power: "",
        p1_power: "",
        p2_power: "",
        output_power: "",
        production_today: ""
      },
      ...config,
    };
  }
  


  set hass(hass) {
    this._hass = hass;
  }

  _valueChanged(ev) {
    if (!this._config || !this._hass) return;

    const newConfig = { ...ev.detail.value };

    if (newConfig.entities) {
      const isEmpty = Object.values(newConfig.entities).every(
        (v) => v === null || v === undefined || v === ""
      );
      if (isEmpty) {
        delete newConfig.entities;
      }
    }

    this._config = newConfig;

    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: this._config },
        bubbles: true,
        composed: true
      })
    );
  }

  _computeLabel(field) {
    const name = field?.name || field; 
    const lang = this._hass?.locale?.language || this._hass?.language || navigator?.language || "en";
    return localize(`editor.${name}`, lang);
  }

  _computeHelper(field) {
    const name = field?.name || field;
    const lang = this._hass?.locale?.language || this._hass?.language || navigator?.language || "en";
    return localize(`helpers.${name}`, lang);
  }

  render() {
    if (!this._config) return b``;

    const schema = [
      { name: "name", selector: { text: {} } },
      { name: "device", selector: { text: {} } },
      {
        name: "entities",
        selector: {
          object: {
            properties: {
              battery_percentage: { selector: { entity: {} } },
              battery_capacity: { selector: { entity: {} } },
              solar_power: { selector: { entity: {} } },
              p1_power: { selector: { entity: {} } },
              p2_power: { selector: { entity: {} } },
              output_power: { selector: { entity: {} } },
              production_today: { selector: { entity: {} } }
            }
          }
        }
      },
      {
          name: "custom_settings",
          selector: {
            object: {
              properties: {
                entity: { selector: { entity: {} } },
                name: { selector: { text: {} } },
                icon: { selector: { text: {} } }
              }
            }
          },
        },
      { name: "compact", selector: { boolean: {} } },
      { name: "icon", selector: { boolean: {} } },
      { name: "horizontal", selector: { boolean: {} } },
      { name: "solar", selector: { boolean: {} } },
      { name: "output", selector: { boolean: {} } },
      { name: "battery", selector: { boolean: {} } },
      { name: "production", selector: { boolean: {} } },
      { name: "settings", selector: { boolean: {} } },
      { name: "max_input_power", selector: { number: { min: 100, max: 5000, step: 50 } }},
      { name: "max_input_power2", selector: { number: { min: 100, max: 5000, step: 50 } }},
      { name: "max_input_power3", selector: { number: { min: 100, max: 5000, step: 50 } }},
      { name: "max_input_power4", selector: { number: { min: 100, max: 5000, step: 50 } }},
    ];

    return b`
      <ha-form
        .hass=${this._hass}
        .data=${this._config}
        .schema=${schema}
        .computeLabel=${(f) => this._computeLabel(f)}
        .computeHelper=${(f) => this._computeHelper(f)}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }
}


customElements.define("b2500d-card-editor", B2500DCardEditor);

window.customCards = window.customCards || [];
window.customCards.push({
   type: "b2500d-card",
   name: "Solar Storage Card",
   preview: false,
   description: "Visualizing solar storage systems",

});
