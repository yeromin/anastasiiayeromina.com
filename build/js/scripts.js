/*  
    halkaBox.js , url: https://github.com/ahmednooor/halkaBox.js
    Version: 1.3.0
    Auther: Ahmed Noor , url: https://github.com/ahmednooor
    License: MIT , url: https://opensource.org/licenses/MIT
*/
var halkaBox=function(){"use strict";var e={hideButtons:!0,animation:"slide",theme:"light",preload:2};function t(t){var n;for(n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function n(t,n){var i,o,l,s,a,r,d,c,u,p,h,m=document.getElementsByTagName("body")[0],y=document.getElementsByClassName(t),g=y.length,w=[],b=document.createElement("div"),v=document.createElement("div"),f=document.createElement("div"),E=document.createElement("div"),L=document.createElement("button"),x=document.createElement("div"),k=document.createElement("button"),C=document.createElement("div"),T=document.createElement("button"),B=document.createElement("p"),A=document.createElement("span"),H=document.createElement("span"),I=!1,N=window.innerWidth,W=window.innerWidth<window.innerHeight,M=!1,Y=100,P={},X=!0,D=!0,S=!1;for(h in e)e.hasOwnProperty(h)&&(P[h]=e[h]);for(h in n)n.hasOwnProperty(h)&&(P[h]=n[h]);function V(e,t){e+t>=g&&(t=g-e-1);var n=e;!function i(){if(!w[n]&&n<=e+t){var o=document.createElement("div");o.classList.add("hb-loader"),"dark"===P.theme&&(o.style.borderTop="5px solid #999");var l=document.createElement("img");if(w[n]=document.createElement("div"),w[n].classList.add("hb-image-div"),w[n].style.opacity=0,w[n].style.display="none",f.appendChild(w[n]),w[n].appendChild(o),w[n].appendChild(l),y[n].getAttribute("title")){var s=document.createElement("p");s.classList.add("hb-caption"),s.innerHTML='<span class="hb-caption-text">'+y[n].getAttribute("title")+"</span>",w[n].appendChild(s),"light"===P.theme?s.classList.add("hb-caption-white"):"dark"===P.theme&&s.classList.add("hb-caption-black")}l.onload=function(){o.style.display="none",n+=1,i()},l.onerror=function(){var e=document.createElement("p");e.innerHTML="Image not found.","light"===P.theme?e.classList.add("hb-err-text-black"):"dark"===P.theme&&e.classList.add("hb-err-text-white"),o.style.display="none",w[n].appendChild(e),n+=1,i()},l.src=y[n].href}else n<=e+t&&(n+=1,i())}()}function O(e,t){e-t<0&&(t=e);var n=e;!function i(){if(!w[n]&&n>=e-t){var o=document.createElement("div");o.classList.add("hb-loader"),"dark"===P.theme&&(o.style.borderTop="5px solid #999");var l=document.createElement("img");if(w[n]=document.createElement("div"),w[n].classList.add("hb-image-div"),w[n].style.opacity=0,w[n].style.display="none",f.appendChild(w[n]),w[n].appendChild(o),w[n].appendChild(l),y[n].getAttribute("title")){var s=document.createElement("p");s.classList.add("hb-caption"),s.innerHTML='<span class="hb-caption-text">'+y[n].getAttribute("title")+"</span>",w[n].appendChild(s),"light"===P.theme?s.classList.add("hb-caption-white"):"dark"===P.theme&&s.classList.add("hb-caption-black")}l.onload=function(){o.style.display="none",n-=1,i()},l.onerror=function(){var e=document.createElement("p");e.innerHTML="Image not found.","light"===P.theme?e.classList.add("hb-err-text-black"):"dark"===P.theme&&e.classList.add("hb-err-text-white"),o.style.display="none",w[n].appendChild(e),n-=1,i()},l.src=y[n].href}else n>=e-t&&(n-=1,i())}()}function z(e){r.innerHTML=e+1+" "}function _(e){g>1&&"hb-single"!==t&&!S&&(S=!0,"slide"===P.animation?(w[o].style.animation="slideNextOut 0.3s ease-out forwards",window.setTimeout(function(){w[o].style.opacity=0,w[o].style.display="none",G(w[o].getElementsByTagName("img")[0]),o>g-2&&(o=-1),z(o+=1),V(o,P.preload),w[o].style.display="block",w[o].style.animation="slideNextIn 0.3s ease-out forwards",S=!1},300)):"fade"===P.animation&&(w[o].style.opacity=0,window.setTimeout(function(){w[o].style.display="none",G(w[o].getElementsByTagName("img")[0]),o>g-2&&(o=-1),z(o+=1),V(o,P.preload),w[o].style.display="block",window.setTimeout(function(){w[o].style.opacity=1},50),S=!1},300)))}function q(e){g>1&&"hb-single"!==t&&!S&&(S=!0,"slide"===P.animation?(w[o].style.animation="slidePreviousOut 0.3s ease-out forwards",window.setTimeout(function(){w[o].style.opacity=0,w[o].style.display="none",G(w[o].getElementsByTagName("img")[0]),0===o&&(o=g),z(o-=1),O(o,P.preload),w[o].style.display="block",w[o].style.animation="slidePreviousIn 0.3s ease-out forwards",S=!1},300)):"fade"===P.animation&&(w[o].style.opacity=0,window.setTimeout(function(){w[o].style.display="none",G(w[o].getElementsByTagName("img")[0]),0===o&&(o=g),z(o-=1),O(o,P.preload),w[o].style.display="block",window.setTimeout(function(){w[o].style.opacity=1},50),S=!1},300)))}function K(e){e.preventDefault(),w[o].style.opacity=0,b.style.opacity=0,window.setTimeout(function(){w[o].style.display="none",b.style.display="none",G(w[o].getElementsByTagName("img")[0])},300),y[o].focus(),y[o].blur(),ce(),X=!0,D=!0}function j(e){e.stopPropagation(),e.preventDefault(),e.target===f||e.target===v||e.target===w[o]?K(e):re()}function F(e){e.stopPropagation(),e.preventDefault(),27===e.which?K(e):37===e.which&&"hb-single"!==t?q():39===e.which&&"hb-single"!==t&&_()}function G(e){e.removeAttribute("style"),e.style.transition="all 150ms ease-out",Y=100,M=!1,window.setTimeout(function(){e.removeAttribute("style")},160)}function J(e){var t=parseInt(window.getComputedStyle(e,null).getPropertyValue("width")),n=parseInt(window.getComputedStyle(e,null).getPropertyValue("height")),i=parseInt(window.getComputedStyle(e,null).getPropertyValue("left")),o=parseInt(window.getComputedStyle(e,null).getPropertyValue("top"));e.style.transition="all 150ms ease-out",t>=window.innerWidth?i>t/2?(e.style.left=t/2+"px",e.style.right="auto"):i<-1*(t-window.innerWidth-t/2)&&(e.style.left=-1*(t-window.innerWidth-t/2)+"px",e.style.right="auto"):t<window.innerWidth&&(i<t/2?(e.style.left=t/2+"px",e.style.right="auto"):i>window.innerWidth-t+t/2&&(e.style.left=window.innerWidth-t+t/2+"px",e.style.right="auto")),n>=window.innerHeight?o>n/2?(e.style.top=n/2+"px",e.style.bottom="auto"):o<-1*(n-window.innerHeight-n/2)&&(e.style.top=-1*(n-window.innerHeight-n/2)+"px",e.style.bottom="auto"):n<window.innerHeight&&(o<n/2?(e.style.top=n/2+"px",e.style.bottom="auto"):o>window.innerHeight-n+n/2&&(e.style.top=window.innerHeight-n+n/2+"px",e.style.bottom="auto")),t<=window.innerWidth&&n<=window.innerHeight&&G(e),window.setTimeout(function(){e.style.transition=""},160)}function Q(e,t,n){var i=window.getComputedStyle(n,null).getPropertyValue("left"),o=window.getComputedStyle(n,null).getPropertyValue("top");n.style.position="absolute",n.style.top=parseInt(o)+t+"px",n.style.left=parseInt(i)+e+"px",n.style.right="auto",n.style.bottom="auto"}function R(e){var t=parseInt(window.getComputedStyle(e,null).getPropertyValue("width")),n=parseInt(window.getComputedStyle(e,null).getPropertyValue("height"));Y>=50&&Y<=400&&t<e.naturalWidth&&n<e.naturalHeight?(e.style.position="absolute",e.style.maxWidth=parseInt(Y)+"%",e.style.maxHeight=parseInt(Y)+"%",M=!0):Y>=50&&Y<=400&&Y<=parseInt(e.style.maxWidth)?(e.style.position="absolute",e.style.maxWidth=parseInt(Y)+"%",e.style.maxHeight=parseInt(Y)+"%",M=!0):t>=e.naturalWidth||n>=e.naturalHeight?Y=parseInt(e.style.maxWidth):Y>=400?Y=400:M=!1}function U(e){e.preventDefault(),d=e.clientX,u=e.clientY,w[o].addEventListener("mousemove",Z,!1)}function Z(e){e.preventDefault();var t=e.clientX-d,n=e.clientY-u;d=e.clientX,u=e.clientY,Q(t,n,w[o].getElementsByTagName("img")[0])}function $(e){e.preventDefault(),w[o].removeEventListener("mousemove",Z),J(w[o].getElementsByTagName("img")[0])}function ee(e){e.preventDefault(),e.ctrlKey?(e.deltaY<0?Y+=20:M&&Y>100&&(Y-=20),Y>100?(w[o].addEventListener("mousedown",U,!1),w[o].addEventListener("mouseup",$,!1),w[o].style.cursor="move",se(),oe(),ce(),b.addEventListener("wheel",ee,!1)):(w[o].removeEventListener("mousedown",U),w[o].removeEventListener("mouseup",$),w[o].style.cursor="",ae(),le(),de()),R(w[o].getElementsByTagName("img")[0]),J(w[o].getElementsByTagName("img")[0])):Y<=100&&(e.deltaY<0?_():e.deltaY>0&&q())}function te(e){if(window.innerWidth<window.innerHeight!==W&&(W=!0!==W,N=window.innerWidth),d=e.touches[0].clientX,u=e.touches[0].clientY,!(e.touches.length>1))return!1;c=e.touches[1].clientX,p=e.touches[1].clientY}function ne(e){e.preventDefault();var t=e.touches[0]||e.changedTouches[0],n=e.touches.length;if(!1!==I||!1!==M||window.innerWidth!==N||2===n)if(2===n){I=!0;var i=Math.sqrt(Math.pow(c-d,2)+Math.pow(p-u,2)),l=Math.sqrt(Math.pow(e.touches[1].clientX-e.touches[0].clientX,2)+Math.pow(e.touches[1].clientY-e.touches[0].clientY,2));d=e.touches[0].clientX,u=e.touches[0].clientY,c=e.touches[1].clientX,p=e.touches[1].clientY,i<l?Y+=l-i:Y-=i-l,R(w[o].getElementsByTagName("img")[0])}else{if(!0!==M)return!1;I=!0;var s=e.touches[0].clientX-d,a=e.touches[0].clientY-u;d=e.touches[0].clientX,u=e.touches[0].clientY,Q(s,a,w[o].getElementsByTagName("img")[0])}else t.clientX-d>50&&t.clientY-u<25&&t.clientY-u>-25?(I=!0,q()):t.clientX-d<-50&&t.clientY-u<25&&t.clientY-u>-25&&(I=!0,_())}function ie(){I=!1,J(w[o].getElementsByTagName("img")[0])}function oe(){C.style.opacity=0,x.style.opacity=0,E.style.opacity=0,B.style.opacity=0,X=!0}function le(){C.style.opacity="",x.style.opacity="",E.style.opacity="",B.style.opacity="",X=!1}function se(){var e=f.getElementsByClassName("hb-caption"),t=0;for(t=0;t<e.length;t+=1)e[t].style.display="none";D=!0}function ae(){var e=f.getElementsByClassName("hb-caption"),t=0;for(t=0;t<e.length;t+=1)e[t].style.display="";D=!1}function re(e){D?ae():se(),X&&!D?le():!X&&D&&oe()}function de(){"hb-single"!==t&&(a.addEventListener("click",_,!1),s.addEventListener("click",q,!1)),b.addEventListener("touchstart",te,!1),b.addEventListener("touchmove",ne,!1),b.addEventListener("touchend",ie,!1),b.addEventListener("wheel",ee,!1),l.addEventListener("click",K,!1),f.addEventListener("click",j,!1),window.addEventListener("mouseout",oe,!1),window.addEventListener("mouseover",le,!1),window.addEventListener("keyup",F,!1)}function ce(){"hb-single"!==t&&(a.removeEventListener("click",_),s.removeEventListener("click",q)),b.removeEventListener("touchstart",te),b.removeEventListener("touchmove",ne),b.removeEventListener("touchend",ie),b.removeEventListener("wheel",ee),l.removeEventListener("click",K),f.removeEventListener("click",j),window.removeEventListener("mouseout",oe),window.removeEventListener("mouseover",le),window.removeEventListener("keyup",F)}function ue(e){return function(t){t.preventDefault(),y[o=e].blur(),z(o),b.style.display="block",window.setTimeout(function(){b.style.opacity=1},50),V(o,P.preload),O(o,P.preload),w[o].style.animation="none",w[o].style.display="block",w[o].style.opacity=1,G(w[o].getElementsByTagName("img")[0]),re(),de()}}b.setAttribute("class","hb-wrapper"),b.setAttribute("id","hb-wrapper"+t),v.setAttribute("class","hb-main-container"),f.setAttribute("class","hb-image-container"),E.setAttribute("class","hb-close-icon-container"),L.setAttribute("id","hb-close-"+t),L.setAttribute("class","hb-close"),x.setAttribute("class","hb-left-icon-container"),k.setAttribute("id","hb-left-"+t),k.setAttribute("class","hb-left"),C.setAttribute("class","hb-right-icon-container"),T.setAttribute("id","hb-right-"+t),T.setAttribute("class","hb-right"),B.setAttribute("id","hb-counter-"+t),B.setAttribute("class","hb-counter"),A.setAttribute("id","hb-counter-total"+t),A.setAttribute("class","hb-counter-total"),H.setAttribute("id","hb-counter-current"+t),H.setAttribute("class","hb-counter-current"),B.appendChild(H),B.appendChild(A),A.innerHTML="/ "+g,C.appendChild(T),T.innerHTML='<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 580 580" style="enable-background:new 0 0 580 580;" xml:space="preserve"><path d="M576,290c0-0.1,0-0.2,0-0.3c0.1-7.9-3-15.7-8.8-21.4L311.5,12.5c-11.7-11.7-30.7-11.7-42.4,0s-11.7,30.7,0,42.4l204.5,204.5 H34c-16.6,0-30,13.4-30,30c0,0.2,0,0.3,0,0.5c0,0.2,0,0.3,0,0.5c0,16.6,13.4,30,30,30h439.6L269,525c-11.7,11.7-11.7,30.7,0,42.4 c5.9,5.9,13.5,8.8,21.2,8.8s15.4-2.9,21.2-8.8l255.7-255.8c5.8-5.8,8.8-13.6,8.8-21.4C576,290.2,576,290.1,576,290z"/></svg>',x.appendChild(k),k.innerHTML='<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 580 580" style="enable-background:new 0 0 580 580;" xml:space="preserve"><path d="M576,289.5c0-16.6-13.4-30-30-30H106.4L311,55c11.7-11.7,11.7-30.7,0-42.4c-11.7-11.7-30.7-11.7-42.4,0L12.8,268.3C7,274.1,3.9,281.8,4,289.7c0,0.1,0,0.2,0,0.3c0,0.1,0,0.2,0,0.3c-0.1,7.9,3,15.7,8.8,21.4l255.8,255.8c5.9,5.9,13.5,8.8,21.2,8.8s15.4-2.9,21.2-8.8c11.7-11.7,11.7-30.7,0-42.4L106.4,320.5H546c16.6,0,30-13.4,30-30c0-0.2,0-0.3,0-0.5\tC576,289.8,576,289.7,576,289.5z"/></svg>',E.appendChild(L),L.innerHTML='<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 580 580" style="enable-background:new 0 0 580 580;" xml:space="preserve"><path d="M332.1,290l235-235c11.7-11.7,11.7-30.7,0-42.4c-11.7-11.7-30.7-11.7-42.4,0L290,247.2L55.3,12.5c-11.7-11.7-30.7-11.7-42.4,0C1.2,24.3,1.2,43.2,12.9,55l235,235l-235,235c-11.7,11.7-11.7,30.7,0,42.4c5.9,5.9,13.5,8.8,21.2,8.8s15.4-2.9,21.2-8.8L290,332.8l234.7,234.7c5.9,5.9,13.5,8.8,21.2,8.8s15.4-2.9,21.2-8.8c11.7-11.7,11.7-30.7,0-42.4L332.1,290z"/></svg>',v.appendChild(f),v.appendChild(E),v.appendChild(x),v.appendChild(C),v.appendChild(B),b.appendChild(v),("ontouchstart"in window&&!0===P.hideButtons||"hb-single"===t||1===g)&&(C.style.display="none",x.style.display="none"),"hb-single"!==t&&1!==g||(B.style.display="none"),"dark"===P.theme&&(v.setAttribute("style","background-color: #000; background-color: rgba(0, 0, 0, 0.9);"),T.children[0].style.fill="#fff",k.children[0].style.fill="#fff",L.children[0].style.fill="#fff",B.style.color="#fff",window.innerWidth<=960&&(C.style.backgroundColor="rgba(0, 0, 0, 0.6)",x.style.backgroundColor="rgba(0, 0, 0, 0.6)",E.style.backgroundColor="rgba(0, 0, 0, 0.6)",B.style.backgroundColor="rgba(0, 0, 0, 0.6)")),b.style.display="none",m.appendChild(b),l=document.getElementById("hb-close-"+t),s=document.getElementById("hb-left-"+t),a=document.getElementById("hb-right-"+t),document.getElementById("hb-counter-"+t),document.getElementById("hb-counter-total"+t),r=document.getElementById("hb-counter-current"+t);for(i=0;i<g;i+=1)y[i].addEventListener("click",ue(i))}if("undefined"==typeof module||void 0===module.exports)return{run:n,options:t};module.exports={run:n,options:t}}();
/*!
 * imagesLoaded PACKAGED v4.1.3
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
// https://imagesloaded.desandro.com/

!function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return-1==n.indexOf(t)&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{},n=i[e]=i[e]||{};return n[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return-1!=n&&i.splice(n,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=0,o=i[n];t=t||[];for(var r=this._onceEvents&&this._onceEvents[e];o;){var s=r&&r[o];s&&(this.off(e,o),delete r[o]),o.apply(this,t),n+=s?0:1,o=i[n]}return this}},t.allOff=t.removeAllListeners=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return t(e,i)}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter")):e.imagesLoaded=t(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){function i(e,t){for(var i in t)e[i]=t[i];return e}function n(e){var t=[];if(Array.isArray(e))t=e;else if("number"==typeof e.length)for(var i=0;i<e.length;i++)t.push(e[i]);else t.push(e);return t}function o(e,t,r){return this instanceof o?("string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=n(e),this.options=i({},this.options),"function"==typeof t?r=t:i(this.options,t),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(function(){this.check()}.bind(this))):new o(e,t,r)}function r(e){this.img=e}function s(e,t){this.url=e,this.element=t,this.img=new Image}var h=e.jQuery,a=e.console;o.prototype=Object.create(t.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&d[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=e.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var d={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,e),n=i.exec(t.backgroundImage)}},o.prototype.addImage=function(e){var t=new r(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var i=new s(e,t);this.images.push(i)},o.prototype.check=function(){function e(e,i,n){setTimeout(function(){t.progress(e,i,n)})}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check()}):void this.complete()},o.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},r.prototype=Object.create(t.prototype),r.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},r.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},r.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(h=t,h.fn.imagesLoaded=function(e,t){var i=new o(this,e,t);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});
/*!
 * Masonry PACKAGED v4.2.0
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,r,a){function h(t,e,n){var o,r="$()."+i+'("'+e+'")';return t.each(function(t,h){var u=a.data(h,i);if(!u)return void s(i+" not initialized. Cannot call methods, i.e. "+r);var d=u[e];if(!d||"_"==e.charAt(0))return void s(r+" is not a valid method");var l=d.apply(u,n);o=void 0===o?l:o}),void 0!==o?o:t}function u(t,e){t.each(function(t,n){var o=a.data(n,i);o?(o.option(e),o._init()):(o=new r(n,e),a.data(n,i,o))})}a=a||e||t.jQuery,a&&(r.prototype.option||(r.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=o.call(arguments,1);return h(this,t,e)}return u(this,t),this},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var o=Array.prototype.slice,r=t.console,s="undefined"==typeof r?function(){}:function(t){r.error(t)};return n(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,e),n+=s?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("get-size/get-size",[],function(){return e()}):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=-1==t.indexOf("%")&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;u>e;e++){var i=h[e];t[i]=0}return t}function n(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),e}function o(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var o=n(e);r.isBoxSizeOuter=s=200==t(o.width),i.removeChild(e)}}function r(e){if(o(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var r=n(e);if("none"==r.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==r.boxSizing,l=0;u>l;l++){var c=h[l],f=r[c],m=parseFloat(f);a[c]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,g=a.paddingTop+a.paddingBottom,y=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,z=a.borderTopWidth+a.borderBottomWidth,E=d&&s,b=t(r.width);b!==!1&&(a.width=b+(E?0:p+_));var x=t(r.height);return x!==!1&&(a.height=x+(E?0:g+z)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(g+z),a.outerWidth=a.width+y,a.outerHeight=a.height+v,a}}var s,a="undefined"==typeof console?e:function(t){console.error(t)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],u=h.length,d=!1;return r}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],o=n+"MatchesSelector";if(t[o])return o}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e},i.makeArray=function(t){var e=[];if(Array.isArray(t))e=t;else if(t&&"object"==typeof t&&"number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void o.push(t);e(t,n)&&o.push(t);for(var i=t.querySelectorAll(n),r=0;r<i.length;r++)o.push(i[r])}}),o},i.debounceMethod=function(t,e,i){var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];t&&clearTimeout(t);var e=arguments,r=this;this[o]=setTimeout(function(){n.apply(r,e),delete r[o]},i||100)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var n=t.console;return i.htmlInit=function(e,o){i.docReady(function(){var r=i.toDashed(o),s="data-"+r,a=document.querySelectorAll("["+s+"]"),h=document.querySelectorAll(".js-"+r),u=i.makeArray(a).concat(i.makeArray(h)),d=s+"-options",l=t.jQuery;u.forEach(function(t){var i,r=t.getAttribute(s)||t.getAttribute(d);try{i=r&&JSON.parse(r)}catch(a){return void(n&&n.error("Error parsing "+s+" on "+t.className+": "+a))}var h=new e(t,i);l&&l.data(t,o,h)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function n(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var r=document.documentElement.style,s="string"==typeof r.transition?"transition":"WebkitTransition",a="string"==typeof r.transform?"transform":"WebkitTransform",h={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[s],u={transform:a,transition:s,transitionDuration:s+"Duration",transitionProperty:s+"Property",transitionDelay:s+"Delay"},d=n.prototype=Object.create(t.prototype);d.constructor=n,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var n=u[i]||i;e[n]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=t[e?"left":"right"],o=t[i?"top":"bottom"],r=this.layout.size,s=-1!=n.indexOf("%")?parseFloat(n)/100*r.width:parseInt(n,10),a=-1!=o.indexOf("%")?parseFloat(o)/100*r.height:parseInt(o,10);s=isNaN(s)?0:s,a=isNaN(a)?0:a,s-=e?r.paddingLeft:r.paddingRight,a-=i?r.paddingTop:r.paddingBottom,this.position.x=s,this.position.y=a},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=i?"paddingLeft":"paddingRight",r=i?"left":"right",s=i?"right":"left",a=this.position.x+t[o];e[r]=this.getXValue(a),e[s]="";var h=n?"paddingTop":"paddingBottom",u=n?"top":"bottom",d=n?"bottom":"top",l=this.position.y+t[h];e[u]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=parseInt(t,10),r=parseInt(e,10),s=o===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return void this.layoutPosition();var a=t-i,h=e-n,u={};u.transform=this.getTranslate(a,h),this.transition({to:u,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop");return t=i?t:-t,e=n?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+o(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(h,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var c={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,n=c[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var o=e.onEnd[n];o.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(h,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var f={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(f)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return s&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},n}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,n,o,r){return e(t,i,n,o,r)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,n,o){"use strict";function r(t,e){var i=n.getQueryElement(t);if(!i)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,u&&(this.$element=u(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var o=++l;this.element.outlayerGUID=o,c[o]=this,this._create();var r=this._getOption("initLayout");r&&this.layout()}function s(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],n=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var o=m[n]||1;return i*o}var h=t.console,u=t.jQuery,d=function(){},l=0,c={};r.namespace="outlayer",r.Item=o,r.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var f=r.prototype;n.extend(f,e.prototype),f.option=function(t){n.extend(this.options,t)},f._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},r.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},f._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},f.reloadItems=function(){this.items=this._itemize(this.element.children)},f._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0;o<e.length;o++){var r=e[o],s=new i(r,this);n.push(s)}return n},f._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},f.getItemElements=function(){return this.items.map(function(t){return t.element})},f.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},f._init=f.layout,f._resetLayout=function(){this.getSize()},f.getSize=function(){this.size=i(this.element)},f._getMeasurement=function(t,e){var n,o=this.options[t];o?("string"==typeof o?n=this.element.querySelector(o):o instanceof HTMLElement&&(n=o),this[t]=n?i(n)[e]:o):this[t]=0},f.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},f._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},f._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)},this),this._processLayoutQueue(i)}},f._getItemLayoutPosition=function(){return{x:0,y:0}},f._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},f.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},f._positionItem=function(t,e,i,n,o){n?t.goTo(e,i):(t.stagger(o*this.stagger),t.moveTo(e,i))},f._postLayout=function(){this.resizeContainer()},f.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},f._getContainerSize=d,f._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},f._emitCompleteOnItems=function(t,e){function i(){o.dispatchEvent(t+"Complete",null,[e])}function n(){s++,s==r&&i()}var o=this,r=e.length;if(!e||!r)return void i();var s=0;e.forEach(function(e){e.once(t,n)})},f.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),u)if(this.$element=this.$element||u(this.element),e){var o=u.Event(e);o.type=t,this.$element.trigger(o,i)}else this.$element.trigger(t,i)},f.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},f.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},f.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},f.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){n.removeFrom(this.stamps,t),this.unignore(t)},this)},f._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)):void 0},f._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},f._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},f._manageStamp=d,f._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,o=i(t),r={left:e.left-n.left-o.marginLeft,top:e.top-n.top-o.marginTop,right:n.right-e.right-o.marginRight,bottom:n.bottom-e.bottom-o.marginBottom};return r},f.handleEvent=n.handleEvent,f.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},f.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},f.onresize=function(){this.resize()},n.debounceMethod(r,"onresize",100),f.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},f.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},f.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},f.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},f.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},f.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},f.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},f.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},f.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},f.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},f.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},f.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),n.removeFrom(this.items,t)},this)},f.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete c[e],delete this.element.outlayerGUID,u&&u.removeData(this.element,this.constructor.namespace)},r.data=function(t){t=n.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&c[e]},r.create=function(t,e){var i=s(r);return i.defaults=n.extend({},r.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},r.compatOptions),i.namespace=t,i.data=r.data,i.Item=s(o),n.htmlInit(i,t),u&&u.bridget&&u.bridget(t,i),i};var m={ms:1,s:1e3};return r.Item=o,r}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");i.compatOptions.fitWidth="isFitWidth";var n=i.prototype;return n._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},n.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var n=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,r=o/n,s=n-o%n,a=s&&1>s?"round":"floor";r=Math[a](r),this.cols=Math.max(r,1)},n.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,n=e(i);this.containerWidth=n&&n.innerWidth},n._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&1>e?"round":"ceil",n=Math[i](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var o=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",r=this[o](n,t),s={x:this.columnWidth*r.col,y:r.y},a=r.y+t.size.outerHeight,h=n+r.col,u=r.col;h>u;u++)this.colYs[u]=a;return s},n._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},n._getTopColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;i>n;n++)e[n]=this._getColGroupY(n,t);return e},n._getColGroupY=function(t,e){if(2>e)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},n._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols,n=t>1&&i+t>this.cols;i=n?0:i;var o=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=o?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},n._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this._getOption("originLeft"),r=o?n.left:n.right,s=r+i.outerWidth,a=Math.floor(r/this.columnWidth);a=Math.max(0,a);var h=Math.floor(s/this.columnWidth);h-=s%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var u=this._getOption("originTop"),d=(u?n.top:n.bottom)+i.outerHeight,l=a;h>=l;l++)this.colYs[l]=Math.max(d,this.colYs[l])},n._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},n._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},n.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i});
(function (window, document) {
  "use strict";

  var backToTop = document.querySelector(".back-to-top");
  // var mainNavList = document.querySelector(".main-nav__list--fixed");
  var mainNav = document.querySelector(".main-nav");
  var mainLogo = document.querySelector(".logo");

  // show on / show off the UP-urrow
  window.onscroll = function () {
    var pageScrollPoint = window.pageYOffset || document.documentElement.scrollTop;
    var innerHeight = document.documentElement.clientHeight;
    if (pageScrollPoint >= innerHeight) {
      backToTop.classList.add("back-to-top-visible");
      // mainNavList.classList.add("main-nav__list--fixed-visible")
      mainNav.classList.add("main-nav--fixed")
      mainLogo.classList.add("logo--fixed")
    } else {
      backToTop.classList.remove("back-to-top-visible");
      // mainNavList.classList.remove("main-nav__list--fixed-visible");
      mainNav.classList.remove("main-nav--fixed");
      mainLogo.classList.remove("logo--fixed")
    }
  } // onscroll ends
  // show on / show off the UP-urrow ENDS 

  backToTop.addEventListener("click", smoothScroll);


  // Smooth scroll to top
  function getScrollTop(scrollable) {
    return scrollable.scrollTop || document.body.scrollTop || document.documentElement.scrollTop;
  }

  function scrollTo(scrollable, coords, millisecondsToTake) {
    var currentY = getScrollTop(scrollable),
      diffY = coords.y - currentY,
      startTimestamp = null;

    if (coords.y === currentY || typeof scrollable.scrollTo !== 'function') {
      return;
    }


    function doScroll(currentTimestamp) {
      if (startTimestamp === null) {
        startTimestamp = currentTimestamp;
      }

      var progress = currentTimestamp - startTimestamp,
        fractionDone = (progress / millisecondsToTake),
        pointOnSineWave = Math.sin(fractionDone * Math.PI / 2);
      scrollable.scrollTo(0, currentY + (diffY * pointOnSineWave));

      if (progress < millisecondsToTake) {
        window.requestAnimationFrame(doScroll);
      } else {
        // Ensure we're at our destination
        scrollable.scrollTo(coords.x, coords.y);
      }
    }

    window.requestAnimationFrame(doScroll);
  }


  function smoothScroll(e) {
    scrollTo(window, {
      x: 0,
      y: 0
    }, 1500);
  }
  // Smooth scroll to top ENDS 

}(window, document));

'use strict';
function scrollToAnchor() {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}

scrollToAnchor();
// https://htmlacademy.ru/blog/61-better-webfont-loading-with-localstorage-and-woff2
(function (window, document) {
  
console.time && console.time('fontLoading')

function loadFont(fontName, woffUrl, woff2Url) {
  // 0. Многие неподдерживаемые браузеры должны останавливать работу тут.
  var nua = navigator.userAgent;
  var noSupport = !window.addEventListener // IE8 и ниже
        || (nua.match(/(Android (2|3|4.0|4.1|4.2|4.3))|(Opera (Mini|Mobi))/) && !nua.match(/Chrome/)) // Android Stock Browser до 4.4 и Opera Mini

  if (noSupport) {
    return;
  }

  // 1. Настраиваем localStorage
  var loSto = {};
  try {
    // Устанавливаем вспомогательную переменную для помощи с localStorage,
    // например, для случаев когда cookies отключены и браузер не даёт к ним доступа.
    // Иначе могут быть получены исключения, которые полностью остановят загрузку шрифтов.
    loSto = localStorage || {};
  } catch(ex) {}

  var localStoragePrefix = 'x-font-' + fontName;
  var localStorageUrlKey = localStoragePrefix + 'url';
  var localStorageCssKey = localStoragePrefix + 'css';
  var storedFontUrl = loSto[localStorageUrlKey];
  var storedFontCss = loSto[localStorageCssKey];

  // 2. Создаём элемент <style>, который мы используем для вставки шрифта, закодированного в base64.
  var styleElement = document.createElement('style');
  styleElement.rel = 'stylesheet';
  document.head.appendChild(styleElement);
  // Из-за ошибок IE9 установка styleElement.textContent должна быть после этой строки.

  // 3. Проверяем, находится ли шрифт уже в localStorage и последней ли он версии.
  if (storedFontCss && (storedFontUrl === woffUrl || storedFontUrl === woff2Url)) {
    // css до сих пор в localStorage
    // и были загружены из одного из текущих адресов

    // 4. Применяем стили шрифта.
    styleElement.textContent = storedFontCss;
  } else {
    // Данных нет, или они загружены с устаревшего URL,
    // поэтому мы должны загрузить их снова.

    // 5. Проверяем поддержку WOFF2 чтобы узнать, какой URL использовать.
    var url = (woff2Url && supportsWoff2())
    ? woff2Url // WOFF2 URL передан в функцию и поддерживается.
    : woffUrl; // Поддерживается только WOFF.

    // 6. Получаем данные с сервера.
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // 7. Обновляем localStorage новыми данными и применяем стили шрифта.
        loSto[localStorageUrlKey] = url;
        loSto[localStorageCssKey] = styleElement.textContent = request.responseText;
      }
    };
    request.send();
  }

  function supportsWoff2() {
    // Источник: https://github.com/filamentgroup/woff2-feature-test
    if (!window.FontFace) {
      return false;
    }

    var f = new FontFace('t', 'url("data:application/font-woff2,") format("woff2")', {});
    f.load();

    return f.status === 'loading';
  }
};

loadFont('OpenSansCondensed', '../fonts/OpenSansCondensed.woff.css', '../fonts/OpenSansCondensed.woff2.css');
loadFont('Roboto', '../fonts/roboto.woff.css', '../fonts/roboto.woff2.css');

console.timeEnd && console.timeEnd('fontLoading');

}(window, document));
// HalkaBox gallery! 
// https://ahmednooor.github.io/halkaBox.js/#usage

halkaBox.options({
  hideButtons: false,  // hide buttons on touch devices (true || false)
  animation: "fade", // animation type on next/prev ("slide" || "fade")
  theme: "light",     // lightbox overlay theme ("light" || "dark")
  preload: 2          // number of images to preload
});

halkaBox.run("gallery1");
  document.querySelector(".hamburger-wrap__box").addEventListener("click", function(){
    this.classList.toggle("checked");
    document.querySelector(".main-nav").classList.toggle("menu-visible");
  });

  // document.querySelector(".hamburger-wrap").addEventListener("mouseover", mouseOver);
  // document.querySelector(".hamburger-wrap").addEventListener("mouseout", mouseOut);

  // function mouseOver() {
  //   document.querySelector(".main-nav__list").classList.add("menu-visible");
  //   this.classList.add("checked");
  // }

  // function mouseOut() {
  //   document.querySelector(".main-nav__list").classList.remove("menu-visible");
  //   this.classList.remove("checked");
  // }

// gallery switch
const bd = document.querySelector('body');
const gallCategory = document.querySelectorAll('.my-works__item-js');
const dataUrlArr = [];
const locUrl = location.origin + location.pathname;


// add to body class, whish is on Data-attr clicked link
gallCategory.forEach(element => {
    const dataUrl = element.dataset.url;
    dataUrlArr.push(dataUrl);

    element.addEventListener('click', function (ev) {
        ev.preventDefault();
    
        dataUrlArr.forEach(el => {
            bd.classList.remove(`${el}`)
        });
    
        bd.classList.add(`${dataUrl}`);
        location.href = locUrl + `#${dataUrl}`;
        
    
    });
});


(function (window, document) {
    $("#ajaxform").submit(function () { // пeрeхвaтывaeм всe при сoбытии oтпрaвки
        var form = $(this); // зaпишeм фoрму, чтoбы пoтoм нe былo прoблeм с this
        var error = false; // прeдвaритeльнo oшибoк нeт
        form.find('input, textarea').each(function () { // прoбeжим пo кaждoму пoлю в фoрмe
            // if ($(this).val() == '') { // eсли нaхoдим пустoe
            // 	alert('Зaпoлнитe пoлe "'+$(this).attr('placeholder')+'"!'); // гoвoрим зaпoлняй!
            // 	error = true; // oшибкa
            // }
        });
        // if (!error) { // eсли oшибки нeт
        var data = form.serialize(); // пoдгoтaвливaeм дaнныe
        $.ajax({ // инициaлизируeм ajax зaпрoс
            type: 'POST', // oтпрaвляeм в POST фoрмaтe, мoжнo GET
            url: 'send.php', // путь дo oбрaбoтчикa, у нaс oн лeжит в тoй жe пaпкe
            dataType: 'json', // oтвeт ждeм в json фoрмaтe
            data: data, // дaнныe для oтпрaвки
            beforeSend: function (data) { // сoбытиe дo oтпрaвки
                form.find('input[type="submit"]').attr('disabled', 'disabled'); // нaпримeр, oтключим кнoпку, чтoбы нe жaли пo 100 рaз
            },
            success: function (data) { // сoбытиe пoслe удaчнoгo oбрaщeния к сeрвeру и пoлучeния oтвeтa
                if (data['error']) { // eсли oбрaбoтчик вeрнул oшибку
                    alert(data['error']); // пoкaжeм eё тeкст
                } else { // eсли всe прoшлo oк
                    // t('Мы перезвоним Вам в течении 10 минут'); // пишeм чтo всe oк
                    $("#success").fadeIn("slow");
                    (function () { // закрываем модальку через 2 секунды после успешной отправки
                        setTimeout(toggleModalOut, 2000);
                    })();

                    function toggleModalOut() {
                        $('#modalCallback').modal('toggle');
                    }
                }
            },
            error: function (xhr, ajaxOptions, thrownError) { // в случae нeудaчнoгo зaвeршeния зaпрoсa к сeрвeру
                alert(xhr.status); // пoкaжeм oтвeт сeрвeрa
                alert(thrownError); // и тeкст oшибки
            },
            complete: function (data) { // сoбытиe пoслe любoгo исхoдa
                form.find('input[type="submit"]').prop('disabled', false); // в любoм случae включим кнoпку oбрaтнo
            }

        });
        // } // eсли oшибки нeт end
        return false; // вырубaeм стaндaртную oтпрaвку фoрмы - preventDefault
    });
}(window, document));
(function () {
  $('#main-slider').slick({
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    pauseOnFocus: false,
    pauseOnHover: false,
    prevArrow: '<button class="main-slider-btn btn-prev">Дальше</button>',
    nextArrow: '<button class="main-slider-btn btn-next">Назад</button>',
    // appendArrows: $('#main-slider'),
    variableWidth: true
  });
})();
// <!-- <div id="fb-root"></div> -->
(function (window, document) {
  (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
}(window, document));
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-96015131-2', 'auto');
ga('send', 'pageview');