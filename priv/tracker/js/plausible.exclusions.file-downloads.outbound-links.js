!function(){"use strict";var s=window.location,u=window.document,c=u.currentScript,d=c.getAttribute("data-api")||new URL(c.src).origin+"/api/event";function f(t){console.warn("Ignoring Event: "+t)}function t(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(s.hostname)||"file:"===s.protocol)return f("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return f("localStorage flag")}catch(t){}var i=c&&c.getAttribute("data-include"),n=c&&c.getAttribute("data-exclude");if("pageview"===t){var r=!i||i&&i.split(",").some(l),a=n&&n.split(",").some(l);if(!r||a)return f("exclusion rule")}var o={};o.n=t,o.u=s.href,o.d=c.getAttribute("data-domain"),o.r=u.referrer||null,o.w=window.innerWidth,e&&e.meta&&(o.m=JSON.stringify(e.meta)),e&&e.props&&(o.p=e.props);var p=new XMLHttpRequest;p.open("POST",d,!0),p.setRequestHeader("Content-Type","text/plain"),p.send(JSON.stringify(o)),p.onreadystatechange=function(){4===p.readyState&&e&&e.callback&&e.callback()}}function l(t){return s.pathname.match(new RegExp("^"+t.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var i,n=0;n<e.length;n++)t.apply(this,e[n]);function r(){i!==s.pathname&&(i=s.pathname,t("pageview"))}var a,o=window.history;o.pushState&&(a=o.pushState,o.pushState=function(){a.apply(this,arguments),r()},window.addEventListener("popstate",r)),"prerender"===u.visibilityState?u.addEventListener("visibilitychange",function(){i||"visible"!==u.visibilityState||r()}):r();var p=1;function l(t){if("auxclick"!==t.type||t.button===p){var e,i=function(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}(t.target),n=i&&i.href&&i.href.split("?")[0];if((e=i)&&e.href&&e.host&&e.host!==s.host)return w(t,i,"Outbound Link: Click",{url:i.href});if(function(t){if(!t)return!1;var e=t.split(".").pop();return m.some(function(t){return t===e})}(n))return w(t,i,"File Download",{url:n})}}function w(t,e,i,n){var r=!1;function a(){r||(r=!0,window.location=e.href)}!function(t,e){if(!t.defaultPrevented){var i=!e.target||e.target.match(/^_(self|parent|top)$/i),n=!(t.ctrlKey||t.metaKey||t.shiftKey)&&"click"===t.type;return i&&n}}(t,e)?plausible(i,{props:n}):(plausible(i,{props:n,callback:a}),setTimeout(a,5e3),t.preventDefault())}u.addEventListener("click",l),u.addEventListener("auxclick",l);var v=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],g=c.getAttribute("file-types"),h=c.getAttribute("add-file-types"),m=g&&g.split(",")||h&&h.split(",").concat(v)||v}();