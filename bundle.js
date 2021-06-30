(()=>{"use strict";var e={390:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".content {\r\n    overflow: hidden;\r\n    background-color: #252526;\r\n    min-width: 100vw;\r\n    min-height: 100vh;\r\n    position: relative;\r\n    font-family: 'Inconsolata', monospace;\r\n    font-size: 30px;\r\n}\r\n\r\n.table-dark {\r\n    background-color: #1e1e1e;\r\n    color: #d4d4d4;\r\n}\r\n\r\n.my-table-container {\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    position: absolute;\r\n    left: 10vw;\r\n}\r\n\r\n.my-table {\r\n    margin: 0;\r\n    border-collapse: separate;\r\n    border-spacing: 0;\r\n    border-radius: 10px;\r\n    border: 5px solid #656565;\r\n    text-align: center;\r\n}\r\n\r\n.my-table thead {\r\n    font-family: serif;\r\n    font-family: initial;\r\n}\r\n\r\n.my-table th {\r\n    border: none;\r\n    border-bottom: 3px solid #656565 !important;\r\n}\r\n\r\n.my-table th > div{\r\n    padding-top: .2rem;\r\n    padding-bottom: .3rem;\r\n    line-height: 15px\r\n}\r\n.my-table th:nth-child(2n - 1) > div {\r\n    padding-top: .1rem;\r\n    padding-bottom: .4rem;\r\n}\r\n\r\n.my-table :is(tr, td) {\r\n    border-color: #656565;\r\n    padding-top: 0;\r\n    padding-bottom: 0;\r\n}\r\n\r\n.my-table td {\r\n    width: 4.5rem;\r\n    vertical-align: baseline;\r\n    border: none;\r\n    border-color: #656565;\r\n}\r\n\r\n.my-table td:first-child() {\r\n    border-left: 2px solid #656565;\r\n}\r\n\r\n.my-table td:nth-child(2n - 1) {\r\n    border-right: 2px solid #333333;\r\n}\r\n\r\n.my-table td:nth-child(2n):nth-last-child(n+2) {\r\n    width: 6rem;\r\n    border-right: 2px solid #656565;\r\n}\r\n\r\n.my-table tr:first-child() td:nth-child(-n+4) {\r\n    border-bottom: 5px solid;\r\n}\r\n\r\n.highlight-1 {\r\n    color: #d16969;\r\n}\r\n\r\n.highlight-2 {\r\n    color: #dcdcaa;\r\n}",""]);const i=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var s=0;s<e.length;s++){var a=[].concat(e[s]);r&&o[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a))}},t}},695:e=>{var t={};e.exports=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},c=[],s=0;s<e.length;s++){var a=e[s],u=r.base?a[0]+r.base:a[0],l=i[u]||0,d="".concat(u," ").concat(l);i[u]=l+1;var h=n(d),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==h?(t[h].references++,t[h].updater(f)):t.push({identifier:d,updater:o(f,r),references:1}),c.push(d)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<i.length;c++){var s=n(i[c]);t[s].references--}for(var a=r(e,o),u=0;u<i.length;u++){var l=n(i[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=a}}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(695),c=n.n(i),s=n(216),a=n.n(s),u=n(390),l={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=n.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=c()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};l.domAPI=o(),l.insertStyleElement=a(),t()(u.Z,l),u.Z&&u.Z.locals&&u.Z.locals;const d="application/font-woff",h="image/jpeg",f={woff:d,woff2:d,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:h,jpeg:h,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"},p=function(){let e=0;return()=>(e+=1,`u${`0000${(Math.random()*Math.pow(36,4)<<0).toString(36)}`.slice(-4)}${e}`)}();function m(e){const t=function(e){const t=/\.([^./]*?)$/g.exec(e);return t?t[1]:""}(e).toLowerCase();return f[t]||""}function g(e){return-1!==e.search(/^(data:)/)}function v(e,t){return`data:${t};base64,${e}`}function y(e){return e.split(/,/)[1]}function b(e){const t=[];for(let n=0,r=e.length;n<r;n+=1)t.push(e[n]);return t}function w(e,t){const n=window.getComputedStyle(e).getPropertyValue(t);return parseFloat(n.replace("px",""))}var x;!function(e){e.clonePseudoElement=function(e,t,n){const r=window.getComputedStyle(e,n),o=r.getPropertyValue("content");if(""===o||"none"===o)return;const i=p();try{t.className=`${t.className} ${i}`}catch(e){return}const c=document.createElement("style");c.appendChild(function(e,t,n){const r=`.${e}:${t}`,o=n.cssText?function(e){const t=e.getPropertyValue("content");return`${e.cssText} content: ${t};`}(n):function(e){return b(e).map((t=>`${t}: ${e.getPropertyValue(t)}${e.getPropertyPriority(t)?" !important":""};`)).join(" ")}(n);return document.createTextNode(`${r}{${o}}`)}(i,n,r)),t.appendChild(c)}}(x||(x={}));var P=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{a(r.next(e))}catch(e){i(e)}}function s(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}a((r=r.apply(e,t||[])).next())}))};function E(e){return P(this,void 0,void 0,(function*(){if(e instanceof HTMLCanvasElement){const n=e.toDataURL();return"data:,"===n?Promise.resolve(e.cloneNode(!1)):(t=n,new Promise(((e,n)=>{const r=new Image;r.onload=()=>e(r),r.onerror=n,r.crossOrigin="anonymous",r.src=t})))}var t;return Promise.resolve(e.cloneNode(!1))}))}function S(e,t,n){return P(this,void 0,void 0,(function*(){return n||!t||t(e)?Promise.resolve(e).then(E).then((n=>function(e,t,n){var r;return P(this,void 0,void 0,(function*(){const o=b((null!==(r=e.shadowRoot)&&void 0!==r?r:e).childNodes);return 0===o.length?Promise.resolve(t):o.reduce(((e,r)=>e.then((()=>S(r,n))).then((e=>{e&&t.appendChild(e)}))),Promise.resolve()).then((()=>t))}))}(e,n,t))).then((t=>function(e,t){return P(this,void 0,void 0,(function*(){return t instanceof Element?Promise.resolve().then((()=>function(e,t){const n=window.getComputedStyle(e),r=t.style;r&&(n.cssText?r.cssText=n.cssText:b(n).forEach((e=>{r.setProperty(e,n.getPropertyValue(e),n.getPropertyPriority(e))})))}(e,t))).then((()=>function(e,t){[":before",":after"].forEach((n=>x.clonePseudoElement(e,t,n)))}(e,t))).then((()=>function(e,t){e instanceof HTMLTextAreaElement&&(t.innerHTML=e.value),e instanceof HTMLInputElement&&t.setAttribute("value",e.value)}(e,t))).then((()=>t)):t}))}(e,t))):Promise.resolve(null)}))}const T={};function C(e,t){let n=e.replace(/\?.*/,"");if(/ttf|otf|eot|woff2?/i.test(n)&&(n=n.replace(/.*\//,"")),T[n])return T[n];t.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+(new Date).getTime());const r=(window.fetch?window.fetch(e).then((e=>new Promise(((t,n)=>{e.blob().then((n=>{t({blob:n,contentType:e.headers.get("Content-Type")})}))})))).then((({blob:e,contentType:t})=>new Promise(((n,r)=>{const o=new FileReader;o.onloadend=()=>n({contentType:t,blob:o.result}),o.onerror=r,o.readAsDataURL(e)})))).then((({blob:e,contentType:t})=>({contentType:t,blob:y(e)}))).catch((()=>new Promise(((e,t)=>t())))):new Promise(((t,n)=>{const r=new XMLHttpRequest;r.onreadystatechange=()=>{if(4!==r.readyState)return;if(200!==r.status)return void n(new Error(`Failed to fetch resource: ${e}, status: ${r.status}`));const o=new FileReader;o.onloadend=()=>{t({blob:y(o.result),contentType:r.getResponseHeader("Content-Type")||""})},o.readAsDataURL(r.response)},r.ontimeout=()=>{n(new Error(`Timeout of 30000ms occured while fetching resource: ${e}`))},r.responseType="blob",r.timeout=3e4,r.open("GET",e,!0),r.send()}))).catch((n=>{let r="";if(t.imagePlaceholder){const e=t.imagePlaceholder.split(/,/);e&&e[1]&&(r=e[1])}let o=`Failed to fetch resource: ${e}`;return n&&(o="string"==typeof n?n:n.message),o&&console.error(o),r}));return T[n]=r,r}const $=/url\((['"]?)([^'"]+?)\1\)/g,R=/url\([^)]+\)\s*format\((["'])([^"']+)\1\)/g,N=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function L(e){return-1!==e.search($)}function A(e,t,n){if(!L(e))return Promise.resolve(e);const r=function(e,{preferredFontFormat:t}){return t?e.replace(N,(e=>{for(;;){const[n,,r]=R.exec(e)||[];if(!r)return"";if(r===t)return`src: ${n};`}})):e}(e,n);return Promise.resolve(r).then(M).then((e=>e.reduce(((e,r)=>e.then((e=>function(e,t,n,r,o){const i=n?function(e,t){if(e.match(/^[a-z]+:\/\//i))return e;if(e.match(/^\/\//))return window.location.protocol+e;if(e.match(/^[a-z]+:/i))return e;const n=document.implementation.createHTMLDocument(),r=n.createElement("base"),o=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(o),t&&(r.href=t),o.href=e,o.href}(t,n):t;return Promise.resolve(i).then((e=>C(e,r))).then((e=>"string"==typeof e?v(e,m(t)):v(e.blob,m(t)||e.contentType))).then((n=>e.replace(function(e){return new RegExp(`(url\\(['"]?)(${function(e){return e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")}(e)})(['"]?\\))`,"g")}(t),`$1${n}$3`))).then((e=>e),(()=>i))}(e,r,t,n)))),Promise.resolve(r))))}function M(e){const t=[];return e.replace($,((e,n,r)=>(t.push(r),e))),t.filter((e=>!g(e)))}var I=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{a(r.next(e))}catch(e){i(e)}}function s(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}a((r=r.apply(e,t||[])).next())}))};function k(e,t){return I(this,void 0,void 0,(function*(){return e instanceof Element?Promise.resolve(e).then((e=>function(e,t){var n;return I(this,void 0,void 0,(function*(){const r=null===(n=e.style)||void 0===n?void 0:n.getPropertyValue("background");return r?Promise.resolve(r).then((e=>A(e,null,t))).then((t=>(e.style.setProperty("background",t,e.style.getPropertyPriority("background")),e))):Promise.resolve(e)}))}(e,t))).then((e=>function(e,t){return e instanceof HTMLImageElement&&!g(e.src)?Promise.resolve(e.src).then((e=>C(e,t))).then((t=>v(t.blob,m(e.src)||t.contentType))).then((t=>new Promise(((n,r)=>{e.onload=n,e.onerror=r,e.src=t})))).then((()=>e),(()=>e)):Promise.resolve(e)}(e,t))).then((e=>function(e,t){return I(this,void 0,void 0,(function*(){const n=b(e.childNodes).map((e=>k(e,t)));return Promise.all(n).then((()=>e))}))}(e,t))):Promise.resolve(e)}))}var F=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{a(r.next(e))}catch(e){i(e)}}function s(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}a((r=r.apply(e,t||[])).next())}))};const j={};function H(e,t){return F(this,void 0,void 0,(function*(){return(null!=t.fontEmbedCss?Promise.resolve(t.fontEmbedCss):function(e,t){return F(this,void 0,void 0,(function*(){return function(e){return F(this,void 0,void 0,(function*(){return new Promise(((t,n)=>{e.ownerDocument||n(new Error("Provided element is not within a Document")),t(b(e.ownerDocument.styleSheets))})).then((e=>function(e){return F(this,void 0,void 0,(function*(){const t=[],n=[];return e.forEach((t=>{if("cssRules"in t)try{b(t.cssRules).forEach(((e,r)=>{if(e.type===CSSRule.IMPORT_RULE){let o=r+1;n.push(U(e.href).then(z).then((e=>{O(e).forEach((e=>{try{t.insertRule(e,e.startsWith("@import")?o+=1:t.cssRules.length)}catch(t){console.log("Error inserting rule from remote css",{rule:e,error:t})}}))})).catch((e=>{console.log("Error loading remote css",e.toString())})))}}))}catch(r){const o=e.find((e=>null===e.href))||document.styleSheets[0];null!=t.href&&n.push(U(t.href).then(z).then((e=>{O(e).forEach((e=>{o.insertRule(e,t.cssRules.length)}))})).catch((e=>{console.log("Error loading remote stylesheet",e.toString())}))),console.log("Error inlining remote css file",r.toString())}})),Promise.all(n).then((()=>(e.forEach((e=>{if("cssRules"in e)try{b(e.cssRules).forEach((e=>{t.push(e)}))}catch(t){console.log(`Error while reading CSS rules from ${e.href}`,t.toString())}})),t)))}))}(e))).then(D)}))}(e).then((e=>Promise.all(e.map((e=>{const n=e.parentStyleSheet?e.parentStyleSheet.href:null;return A(e.cssText,n,t)}))))).then((e=>e.join("\n")))}))}(e,t)).then((t=>{const n=document.createElement("style"),r=document.createTextNode(t);return n.appendChild(r),e.firstChild?e.insertBefore(n,e.firstChild):e.appendChild(n),e}))}))}function D(e){return e.filter((e=>e.type===CSSRule.FONT_FACE_RULE)).filter((e=>L(e.style.getPropertyValue("src"))))}function O(e){if(void 0===e)return[];let t=e;const n=[],r=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi;t=t.replace(/(\/\*[\s\S]*?\*\/)/gi,"");const o=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");let i;for(;i=o.exec(t),null!==i;)n.push(i[0]);t=t.replace(o,"");const c=new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})","gi");for(;;){if(i=r.exec(t),null===i){if(i=c.exec(t),null===i)break;r.lastIndex=c.lastIndex}else c.lastIndex=r.lastIndex;n.push(i[0])}return n}function U(e,t){if(j[e])return j[e];const n=fetch(e).then((t=>({url:e,cssText:t.text()})),(e=>{console.log("ERROR FETCHING CSS: ",e.toString())}));return j[e]=n,n}function z(e){return F(this,void 0,void 0,(function*(){return e.cssText.then((t=>{let n=t;const r=/url\(["']?([^"')]+)["']?\)/g,o=(n.match(/url\([^)]+\)/g)||[]).map((t=>{let o=t.replace(r,"$1");if(!o.startsWith("https://")){const t=e.url;o=new URL(o,t).href}return new Promise(((e,r)=>{fetch(o).then((e=>e.blob())).then((r=>{const o=new FileReader;o.addEventListener("load",(r=>{n=n.replace(t,`url(${o.result})`),e([t,o.result])})),o.readAsDataURL(r)})).catch(r)}))}));return Promise.all(o).then((()=>n))}))}))}function V(e,t,n){const r="http://www.w3.org/2000/svg",o=document.createElementNS(r,"svg"),i=document.createElementNS(r,"foreignObject");return o.setAttributeNS("","width",`${t}`),o.setAttributeNS("","height",`${n}`),i.setAttributeNS("","width","100%"),i.setAttributeNS("","height","100%"),i.setAttributeNS("","x","0"),i.setAttributeNS("","y","0"),i.setAttributeNS("","externalResourcesRequired","true"),o.appendChild(i),i.appendChild(e),function(e){return t=this,n=void 0,o=function*(){return Promise.resolve().then((()=>(new XMLSerializer).serializeToString(e))).then(encodeURIComponent).then((e=>`data:image/svg+xml;charset=utf-8,${e}`))},new((r=void 0)||(r=Promise))((function(e,i){function c(e){try{a(o.next(e))}catch(e){i(e)}}function s(e){try{a(o.throw(e))}catch(e){i(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(c,s)}a((o=o.apply(t,n||[])).next())}));var t,n,r,o}(o)}function Z(e,t={}){return n=this,r=void 0,i=function*(){const{width:n,height:r}=function(e,t={}){return{width:t.width||function(e){const t=w(e,"border-left-width"),n=w(e,"border-right-width");return e.clientWidth+t+n}(e),height:t.height||function(e){const t=w(e,"border-top-width"),n=w(e,"border-bottom-width");return e.clientHeight+t+n}(e)}}(e,t);return S(e,t.filter,!0).then((e=>H(e,t))).then((e=>k(e,t))).then((e=>function(e,t){const{style:n}=e;t.backgroundColor&&(n.backgroundColor=t.backgroundColor),t.width&&(n.width=`${t.width}px`),t.height&&(n.height=`${t.height}px`);const r=t.style;return null!=r&&Object.keys(r).forEach((e=>{n[e]=r[e]})),e}(e,t))).then((e=>V(e,n,r)))},new((o=void 0)||(o=Promise))((function(e,t){function c(e){try{a(i.next(e))}catch(e){t(e)}}function s(e){try{a(i.throw(e))}catch(e){t(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(c,s)}a((i=i.apply(n,r||[])).next())}));var n,r,o,i}document.getElementById("btn-generate-svg")?.addEventListener("click",(function(){const e=document.getElementById("cheatsheets");null!=e&&Z(e).then((function(e){download(e,"cheatsheets.svg")}))}))})()})();