parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var r=document.querySelector(".start"),e=document.querySelector(".message-start"),t=document.querySelector(".message-win"),a=document.querySelector(".message-lose"),n=document.querySelectorAll(".field-cell"),o=document.querySelector(".game-score"),c=4,f=0,s=[];function i(){for(var r=0;r<c;r++){s[r]=[];for(var e=0;e<c;e++)s[r][e]=0}}function u(){for(var r=[],e=0;e<c;e++)for(var t=0;t<c;t++)0===s[e][t]&&r.push({r:e,c:t});if(r.length>0){var a=r[Math.floor(Math.random()*r.length)];s[a.r][a.c]=Math.random()<.9?2:4}}function l(){for(var r=0;r<c;r++)for(var e=0;e<c;e++){var t=s[r][e],a=n[r*c+e];a.textContent=t||"",a.className="field-cell",t&&a.classList.add("field-cell--".concat(t))}}function d(r){f=r,o.textContent=f}function v(){for(var r=0;r<c;r++)for(var e=0;e<c;e++)if(2048===s[r][e])return!0;return!1}function m(){for(var r=0;r<c;r++)for(var e=0;e<c;e++){if(0===s[r][e])return!1;if(e!==c-1&&s[r][e]===s[r][e+1])return!1;if(r!==c-1&&s[r][e]===s[r+1][e])return!1}return!0}function h(e){var n=!1;function o(r,e,a,o){var i=r,u=e,l=s[i][u];if(l)for(var v=i+a,m=u+o;v>=0&&v<c&&m>=0&&m<c;){var h=s[v][m];if(h){if(h===l){s[v][m]=2*l,s[i][u]=0,d(f+2*l),n=!0,2048===s[v][m]&&t.classList.remove("hidden");break}break}s[v][m]=l,s[i][u]=0,i=v,u=m,v+=a,m+=o,n=!0}}switch(e){case"up":!function(){for(var r=0;r<c;r++)for(var e=1;e<c;e++)o(e,r,-1,0)}();break;case"down":!function(){for(var r=0;r<c;r++)for(var e=c-2;e>=0;e--)o(e,r,1,0)}();break;case"left":!function(){for(var r=0;r<c;r++)for(var e=1;e<c;e++)o(r,e,0,-1)}();break;case"right":!function(){for(var r=0;r<c;r++)for(var e=c-2;e>=0;e--)o(r,e,0,1)}()}n&&(u(),l(),m()&&(a.classList.remove("hidden"),r.classList.replace("restart","start"),r.innerHTML="Restart"),v()&&t.classList.remove("hidden"))}r.addEventListener("click",function(t){i(),u(),u(),l(),d(0),r.classList.replace("start","restart"),r.innerHTML="Start",e.classList.add("hidden")}),document.addEventListener("keydown",function(r){"ArrowUp"===r.key?h("up"):"ArrowDown"===r.key?h("down"):"ArrowLeft"===r.key?h("left"):"ArrowRight"===r.key&&h("right")});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.94008268.js.map