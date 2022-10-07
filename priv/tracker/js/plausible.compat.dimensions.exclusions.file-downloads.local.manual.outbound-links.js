!function(){"use strict";var t,e,r,s=window.location,f=window.document,d=f.getElementById("plausible"),g=d.getAttribute("data-api")||(t=d.src.split("/"),e=t[0],r=t[2],e+"//"+r+"/api/event");function v(t){console.warn("Ignoring Event: "+t)}function n(t,e){try{if("true"===window.localStorage.plausible_ignore)return v("localStorage flag")}catch(t){}var r=d&&d.getAttribute("data-include"),n=d&&d.getAttribute("data-exclude");if("pageview"===t){var a=!r||r&&r.split(",").some(o),i=n&&n.split(",").some(o);if(!a||i)return v("exclusion rule")}function o(t){return s.pathname.match(new RegExp("^"+t.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var l={};l.n=t,l.u=e&&e.u?e.u:s.href,l.d=d.getAttribute("data-domain"),l.r=f.referrer||null,l.w=window.innerWidth,e&&e.meta&&(l.m=JSON.stringify(e.meta)),e&&e.props&&(l.p=e.props);var u=d.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),p=l.p||{};u.forEach(function(t){var e=t.replace("event-",""),r=d.getAttribute(t);p[e]=p[e]||r}),l.p=p;var c=new XMLHttpRequest;c.open("POST",g,!0),c.setRequestHeader("Content-Type","text/plain"),c.send(JSON.stringify(l)),c.onreadystatechange=function(){4===c.readyState&&e&&e.callback&&e.callback()}}var a=window.plausible&&window.plausible.q||[];window.plausible=n;for(var i=0;i<a.length;i++)n.apply(this,a[i]);var o=1;function l(t){if("auxclick"!==t.type||t.button===o){var e,r=function(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}(t.target),n=r&&r.href&&r.href.split("?")[0];if((e=r)&&e.href&&e.host&&e.host!==s.host)return u(t,r,"Outbound Link: Click",{url:r.href});if(function(t){if(!t)return!1;var e=t.split(".").pop();return m.some(function(t){return t===e})}(n))return u(t,r,"File Download",{url:n})}}function u(t,e,r,n){var a=!1;function i(){a||(a=!0,window.location=e.href)}!function(t,e){if(!t.defaultPrevented){var r=!e.target||e.target.match(/^_(self|parent|top)$/i),n=!(t.ctrlKey||t.metaKey||t.shiftKey)&&"click"===t.type;return r&&n}}(t,e)?plausible(r,{props:n}):(plausible(r,{props:n,callback:i}),setTimeout(i,5e3),t.preventDefault())}f.addEventListener("click",l),f.addEventListener("auxclick",l);var p=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],c=d.getAttribute("file-types"),w=d.getAttribute("add-file-types"),m=c&&c.split(",")||w&&w.split(",").concat(p)||p}();