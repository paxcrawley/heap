Brisk Logo Menu
/*!
 * jQuery JavaScript Library v1.5.2
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Thu Mar 31 15:28:23 2011 -0400
 */
(function(a,b){function ci(a){return d.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cf(a){if(!b_[a]){var b=d("<"+a+">").appendTo("body"),c=b.css("display");b.remove();if(c==="none"||c==="")c="block";b_[a]=c}return b_[a]}function ce(a,b){var c={};d.each(cd.concat.apply([],cd.slice(0,b)),function(){c[this]=a});return c}function b$(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function bZ(){try{return new a.XMLHttpRequest}catch(b){}}function bY(){d(a).unload(function(){for(var a in bW)bW[a](0,1)})}function bS(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var e=a.dataTypes,f={},g,h,i=e.length,j,k=e[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h==="string"&&(f[h.toLowerCase()]=a.converters[h]);l=k,k=e[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=f[m]||f["* "+k];if(!n){p=b;for(o in f){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=f[j[1]+" "+k];if(p){o=f[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&d.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function bR(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function bQ(a,b,c,e){if(d.isArray(b)&&b.length)d.each(b,function(b,f){c||bs.test(a)?e(a,f):bQ(a+"["+(typeof f==="object"||d.isArray(f)?b:"")+"]",f,c,e)});else if(c||b==null||typeof b!=="object")e(a,b);else if(d.isArray(b)||d.isEmptyObject(b))e(a,"");else for(var f in b)bQ(a+"["+f+"]",b[f],c,e)}function bP(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bJ,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l==="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bP(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bP(a,c,d,e,"*",g));return l}function bO(a){return function(b,c){typeof b!=="string"&&(c=b,b="*");if(d.isFunction(c)){var e=b.toLowerCase().split(bD),f=0,g=e.length,h,i,j;for(;f<g;f++)h=e[f],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bq(a,b,c){var e=b==="width"?bk:bl,f=b==="width"?a.offsetWidth:a.offsetHeight;if(c==="border")return f;d.each(e,function(){c||(f-=parseFloat(d.css(a,"padding"+this))||0),c==="margin"?f+=parseFloat(d.css(a,"margin"+this))||0:f-=parseFloat(d.css(a,"border"+this+"Width"))||0});return f}function bc(a,b){b.src?d.ajax({url:b.src,async:!1,dataType:"script"}):d.globalEval(b.text||b.textContent||b.innerHTML||""),b.parentNode&&b.parentNode.removeChild(b)}function bb(a){return"getElementsByTagName"in a?a.getElementsByTagName("*"):"querySelectorAll"in a?a.querySelectorAll("*"):[]}function ba(a,b){if(b.nodeType===1){var c=b.nodeName.toLowerCase();b.clearAttributes(),b.mergeAttributes(a);if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(d.expando)}}function _(a,b){if(b.nodeType===1&&d.hasData(a)){var c=d.expando,e=d.data(a),f=d.data(b,e);if(e=e[c]){var g=e.events;f=f[c]=d.extend({},e);if(g){delete f.handle,f.events={};for(var h in g)for(var i=0,j=g[h].length;i<j;i++)d.event.add(b,h+(g[h][i].namespace?".":"")+g[h][i].namespace,g[h][i],g[h][i].data)}}}}function $(a,b){return d.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Q(a,b,c){if(d.isFunction(b))return d.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return d.grep(a,function(a,d){return a===b===c});if(typeof b==="string"){var e=d.grep(a,function(a){return a.nodeType===1});if(L.test(b))return d.filter(b,e,!c);b=d.filter(b,e)}return d.grep(a,function(a,e){return d.inArray(a,b)>=0===c})}function P(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function H(a,b){return(a&&a!=="*"?a+".":"")+b.replace(t,"`").replace(u,"&")}function G(a){var b,c,e,f,g,h,i,j,k,l,m,n,o,p=[],q=[],s=d._data(this,"events");if(a.liveFired!==this&&s&&s.live&&!a.target.disabled&&(!a.button||a.type!=="click")){a.namespace&&(n=new RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")),a.liveFired=this;var t=s.live.slice(0);for(i=0;i<t.length;i++)g=t[i],g.origType.replace(r,"")===a.type?q.push(g.selector):t.splice(i--,1);f=d(a.target).closest(q,a.currentTarget);for(j=0,k=f.length;j<k;j++){m=f[j];for(i=0;i<t.length;i++){g=t[i];if(m.selector===g.selector&&(!n||n.test(g.namespace))&&!m.elem.disabled){h=m.elem,e=null;if(g.preType==="mouseenter"||g.preType==="mouseleave")a.type=g.preType,e=d(a.relatedTarget).closest(g.selector)[0];(!e||e!==h)&&p.push({elem:h,handleObj:g,level:m.level})}}}for(j=0,k=p.length;j<k;j++){f=p[j];if(c&&f.level>c)break;a.currentTarget=f.elem,a.data=f.handleObj.data,a.handleObj=f.handleObj,o=f.handleObj.origHandler.apply(f.elem,arguments);if(o===!1||a.isPropagationStopped()){c=f.level,o===!1&&(b=!1);if(a.isImmediatePropagationStopped())break}}return b}}function E(a,c,e){var f=d.extend({},e[0]);f.type=a,f.originalEvent={},f.liveFired=b,d.event.handle.call(c,f),f.isDefaultPrevented()&&e[0].preventDefault()}function y(){return!0}function x(){return!1}function i(a){for(var b in a)if(b!=="toJSON")return!1;return!0}function h(a,c,e){if(e===b&&a.nodeType===1){e=a.getAttribute("data-"+c);if(typeof e==="string"){try{e=e==="true"?!0:e==="false"?!1:e==="null"?null:d.isNaN(e)?g.test(e)?d.parseJSON(e):e:parseFloat(e)}catch(f){}d.data(a,c,e)}else e=b}return e}var c=a.document,d=function(){function G(){if(!d.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(G,1);return}d.ready()}}var d=function(a,b){return new d.fn.init(a,b,g)},e=a.jQuery,f=a.$,g,h=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,i=/\S/,j=/^\s+/,k=/\s+$/,l=/\d/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=navigator.userAgent,w,x,y,z=Object.prototype.toString,A=Object.prototype.hasOwnProperty,B=Array.prototype.push,C=Array.prototype.slice,D=String.prototype.trim,E=Array.prototype.indexOf,F={};d.fn=d.prototype={constructor:d,init:function(a,e,f){var g,i,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!e&&c.body){this.context=c,this[0]=c.body,this.selector="body",this.length=1;return this}if(typeof a==="string"){g=h.exec(a);if(!g||!g[1]&&e)return!e||e.jquery?(e||f).find(a):this.constructor(e).find(a);if(g[1]){e=e instanceof d?e[0]:e,k=e?e.ownerDocument||e:c,j=m.exec(a),j?d.isPlainObject(e)?(a=[c.createElement(j[1])],d.fn.attr.call(a,e,!0)):a=[k.createElement(j[1])]:(j=d.buildFragment([g[1]],[k]),a=(j.cacheable?d.clone(j.fragment):j.fragment).childNodes);return d.merge(this,a)}i=c.getElementById(g[2]);if(i&&i.parentNode){if(i.id!==g[2])return f.find(a);this.length=1,this[0]=i}this.context=c,this.selector=a;return this}if(d.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return d.makeArray(a,this)},selector:"",jquery:"1.5.2",length:0,size:function(){return this.length},toArray:function(){return C.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var e=this.constructor();d.isArray(a)?B.apply(e,a):d.merge(e,a),e.prevObject=this,e.context=this.context,b==="find"?e.selector=this.selector+(this.selector?" ":"")+c:b&&(e.selector=this.selector+"."+b+"("+c+")");return e},each:function(a,b){return d.each(this,a,b)},ready:function(a){d.bindReady(),x.done(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(C.apply(this,arguments),"slice",C.call(arguments).join(","))},map:function(a){return this.pushStack(d.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:B,sort:[].sort,splice:[].splice},d.fn.init.prototype=d.fn,d.extend=d.fn.extend=function(){var a,c,e,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i==="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!=="object"&&!d.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){e=i[c],f=a[c];if(i===f)continue;l&&f&&(d.isPlainObject(f)||(g=d.isArray(f)))?(g?(g=!1,h=e&&d.isArray(e)?e:[]):h=e&&d.isPlainObject(e)?e:{},i[c]=d.extend(l,h,f)):f!==b&&(i[c]=f)}return i},d.extend({noConflict:function(b){a.$=f,b&&(a.jQuery=e);return d},isReady:!1,readyWait:1,ready:function(a){a===!0&&d.readyWait--;if(!d.readyWait||a!==!0&&!d.isReady){if(!c.body)return setTimeout(d.ready,1);d.isReady=!0;if(a!==!0&&--d.readyWait>0)return;x.resolveWith(c,[d]),d.fn.trigger&&d(c).trigger("ready").unbind("ready")}},bindReady:function(){if(!x){x=d._Deferred();if(c.readyState==="complete")return setTimeout(d.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",y,!1),a.addEventListener("load",d.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",y),a.attachEvent("onload",d.ready);var b=!1;try{b=a.frameElement==null}catch(e){}c.documentElement.doScroll&&b&&G()}}},isFunction:function(a){return d.type(a)==="function"},isArray:Array.isArray||function(a){return d.type(a)==="array"},isWindow:function(a){return a&&typeof a==="object"&&"setInterval"in a},isNaN:function(a){return a==null||!l.test(a)||isNaN(a)},type:function(a){return a==null?String(a):F[z.call(a)]||"object"},isPlainObject:function(a){if(!a||d.type(a)!=="object"||a.nodeType||d.isWindow(a))return!1;if(a.constructor&&!A.call(a,"constructor")&&!A.call(a.constructor.prototype,"isPrototypeOf"))return!1;var c;for(c in a){}return c===b||A.call(a,c)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw a},parseJSON:function(b){if(typeof b!=="string"||!b)return null;b=d.trim(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return a.JSON&&a.JSON.parse?a.JSON.parse(b):(new Function("return "+b))();d.error("Invalid JSON: "+b)},parseXML:function(b,c,e){a.DOMParser?(e=new DOMParser,c=e.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b)),e=c.documentElement,(!e||!e.nodeName||e.nodeName==="parsererror")&&d.error("Invalid XML: "+b);return c},noop:function(){},globalEval:function(a){if(a&&i.test(a)){var b=c.head||c.getElementsByTagName("head")[0]||c.documentElement,e=c.createElement("script");d.support.scriptEval()?e.appendChild(c.createTextNode(a)):e.text=a,b.insertBefore(e,b.firstChild),b.removeChild(e)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,e){var f,g=0,h=a.length,i=h===b||d.isFunction(a);if(e){if(i){for(f in a)if(c.apply(a[f],e)===!1)break}else for(;g<h;)if(c.apply(a[g++],e)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(var j=a[0];g<h&&c.call(j,g,j)!==!1;j=a[++g]){}return a},trim:D?function(a){return a==null?"":D.call(a)}:function(a){return a==null?"":(a+"").replace(j,"").replace(k,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var e=d.type(a);a.length==null||e==="string"||e==="function"||e==="regexp"||d.isWindow(a)?B.call(c,a):d.merge(c,a)}return c},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;c<d;c++)if(b[c]===a)return c;return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length==="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,b,c){var d=[],e;for(var f=0,g=a.length;f<g;f++)e=b(a[f],f,c),e!=null&&(d[d.length]=e);return d.concat.apply([],d)},guid:1,proxy:function(a,c,e){arguments.length===2&&(typeof c==="string"?(e=a,a=e[c],c=b):c&&!d.isFunction(c)&&(e=c,c=b)),!c&&a&&(c=function(){return a.apply(e||this,arguments)}),a&&(c.guid=a.guid=a.guid||c.guid||d.guid++);return c},access:function(a,c,e,f,g,h){var i=a.length;if(typeof c==="object"){for(var j in c)d.access(a,j,c[j],f,g,e);return a}if(e!==b){f=!h&&f&&d.isFunction(e);for(var k=0;k<i;k++)g(a[k],c,f?e.call(a[k],k,g(a[k],c)):e,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}d.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.subclass=this.subclass,a.fn.init=function b(b,c){c&&c instanceof d&&!(c instanceof a)&&(c=a(c));return d.fn.init.call(this,b,c,e)},a.fn.init.prototype=a.fn;var e=a(c);return a},browser:{}}),d.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){F["[object "+b+"]"]=b.toLowerCase()}),w=d.uaMatch(v),w.browser&&(d.browser[w.browser]=!0,d.browser.version=w.version),d.browser.webkit&&(d.browser.safari=!0),E&&(d.inArray=function(a,b){return E.call(b,a)}),i.test("Â ")&&(j=/^[\s\xA0]+/,k=/[\s\xA0]+$/),g=d(c),c.addEventListener?y=function(){c.removeEventListener("DOMContentLoaded",y,!1),d.ready()}:c.attachEvent&&(y=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",y),d.ready())});return d}(),e="then done fail isResolved isRejected promise".split(" "),f=[].slice;d.extend({_Deferred:function(){var a=[],b,c,e,f={done:function(){if(!e){var c=arguments,g,h,i,j,k;b&&(k=b,b=0);for(g=0,h=c.length;g<h;g++)i=c[g],j=d.type(i),j==="array"?f.done.apply(f,i):j==="function"&&a.push(i);k&&f.resolveWith(k[0],k[1])}return this},resolveWith:function(d,f){if(!e&&!b&&!c){f=f||[],c=1;try{while(a[0])a.shift().apply(d,f)}finally{b=[d,f],c=0}}return this},resolve:function(){f.resolveWith(this,arguments);return this},isResolved:function(){return c||b},cancel:function(){e=1,a=[];return this}};return f},Deferred:function(a){var b=d._Deferred(),c=d._Deferred(),f;d.extend(b,{then:function(a,c){b.done(a).fail(c);return this},fail:c.done,rejectWith:c.resolveWith,reject:c.resolve,isRejected:c.isResolved,promise:function(a){if(a==null){if(f)return f;f=a={}}var c=e.length;while(c--)a[e[c]]=b[e[c]];return a}}),b.done(c.cancel).fail(b.cancel),delete b.cancel,a&&a.call(b,b);return b},when:function(a){function i(a){return function(c){b[a]=arguments.length>1?f.call(arguments,0):c,--g||h.resolveWith(h,f.call(b,0))}}var b=arguments,c=0,e=b.length,g=e,h=e<=1&&a&&d.isFunction(a.promise)?a:d.Deferred();if(e>1){for(;c<e;c++)b[c]&&d.isFunction(b[c].promise)?b[c].promise().then(i(c),h.reject):--g;g||h.resolveWith(h,b)}else h!==a&&h.resolveWith(h,e?[a]:[]);return h.promise()}}),function(){d.support={};var b=c.createElement("div");b.style.display="none",b.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";var e=b.getElementsByTagName("*"),f=b.getElementsByTagName("a")[0],g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=b.getElementsByTagName("input")[0];if(e&&e.length&&f){d.support={leadingWhitespace:b.firstChild.nodeType===3,tbody:!b.getElementsByTagName("tbody").length,htmlSerialize:!!b.getElementsByTagName("link").length,style:/red/.test(f.getAttribute("style")),hrefNormalized:f.getAttribute("href")==="/a",opacity:/^0.55$/.test(f.style.opacity),cssFloat:!!f.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,deleteExpando:!0,optDisabled:!1,checkClone:!1,noCloneEvent:!0,noCloneChecked:!0,boxModel:null,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableHiddenOffsets:!0,reliableMarginRight:!0},i.checked=!0,d.support.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,d.support.optDisabled=!h.disabled;var j=null;d.support.scriptEval=function(){if(j===null){var b=c.documentElement,e=c.createElement("script"),f="script"+d.now();try{e.appendChild(c.createTextNode("window."+f+"=1;"))}catch(g){}b.insertBefore(e,b.firstChild),a[f]?(j=!0,delete a[f]):j=!1,b.removeChild(e)}return j};try{delete b.test}catch(k){d.support.deleteExpando=!1}!b.addEventListener&&b.attachEvent&&b.fireEvent&&(b.attachEvent("onclick",function l(){d.support.noCloneEvent=!1,b.detachEvent("onclick",l)}),b.cloneNode(!0).fireEvent("onclick")),b=c.createElement("div"),b.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";var m=c.createDocumentFragment();m.appendChild(b.firstChild),d.support.checkClone=m.cloneNode(!0).cloneNode(!0).lastChild.checked,d(function(){var a=c.createElement("div"),b=c.getElementsByTagName("body")[0];if(b){a.style.width=a.style.paddingLeft="1px",b.appendChild(a),d.boxModel=d.support.boxModel=a.offsetWidth===2,"zoom"in a.style&&(a.style.display="inline",a.style.zoom=1,d.support.inlineBlockNeedsLayout=a.offsetWidth===2,a.style.display="",a.innerHTML="<div style='width:4px;'></div>",d.support.shrinkWrapBlocks=a.offsetWidth!==2),a.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";var e=a.getElementsByTagName("td");d.support.reliableHiddenOffsets=e[0].offsetHeight===0,e[0].style.display="",e[1].style.display="none",d.support.reliableHiddenOffsets=d.support.reliableHiddenOffsets&&e[0].offsetHeight===0,a.innerHTML="",c.defaultView&&c.defaultView.getComputedStyle&&(a.style.width="1px",a.style.marginRight="0",d.support.reliableMarginRight=(parseInt(c.defaultView.getComputedStyle(a,null).marginRight,10)||0)===0),b.removeChild(a).style.display="none",a=e=null}});var n=function(a){var b=c.createElement("div");a="on"+a;if(!b.attachEvent)return!0;var d=a in b;d||(b.setAttribute(a,"return;"),d=typeof b[a]==="function");return d};d.support.submitBubbles=n("submit"),d.support.changeBubbles=n("change"),b=e=f=null}}();var g=/^(?:\{.*\}|\[.*\])$/;d.extend({cache:{},uuid:0,expando:"jQuery"+(d.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?d.cache[a[d.expando]]:a[d.expando];return!!a&&!i(a)},data:function(a,c,e,f){if(d.acceptData(a)){var g=d.expando,h=typeof c==="string",i,j=a.nodeType,k=j?d.cache:a,l=j?a[d.expando]:a[d.expando]&&d.expando;if((!l||f&&l&&!k[l][g])&&h&&e===b)return;l||(j?a[d.expando]=l=++d.uuid:l=d.expando),k[l]||(k[l]={},j||(k[l].toJSON=d.noop));if(typeof c==="object"||typeof c==="function")f?k[l][g]=d.extend(k[l][g],c):k[l]=d.extend(k[l],c);i=k[l],f&&(i[g]||(i[g]={}),i=i[g]),e!==b&&(i[c]=e);if(c==="events"&&!i[c])return i[g]&&i[g].events;return h?i[c]:i}},removeData:function(b,c,e){if(d.acceptData(b)){var f=d.expando,g=b.nodeType,h=g?d.cache:b,j=g?b[d.expando]:d.expando;if(!h[j])return;if(c){var k=e?h[j][f]:h[j];if(k){delete k[c];if(!i(k))return}}if(e){delete h[j][f];if(!i(h[j]))return}var l=h[j][f];d.support.deleteExpando||h!=a?delete h[j]:h[j]=null,l?(h[j]={},g||(h[j].toJSON=d.noop),h[j][f]=l):g&&(d.support.deleteExpando?delete b[d.expando]:b.removeAttribute?b.removeAttribute(d.expando):b[d.expando]=null)}},_data:function(a,b,c){return d.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=d.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),d.fn.extend({data:function(a,c){var e=null;if(typeof a==="undefined"){if(this.length){e=d.data(this[0]);if(this[0].nodeType===1){var f=this[0].attributes,g;for(var i=0,j=f.length;i<j;i++)g=f[i].name,g.indexOf("data-")===0&&(g=g.substr(5),h(this[0],g,e[g]))}}return e}if(typeof a==="object")return this.each(function(){d.data(this,a)});var k=a.split(".");k[1]=k[1]?"."+k[1]:"";if(c===b){e=this.triggerHandler("getData"+k[1]+"!",[k[0]]),e===b&&this.length&&(e=d.data(this[0],a),e=h(this[0],a,e));return e===b&&k[1]?this.data(k[0]):e}return this.each(function(){var b=d(this),e=[k[0],c];b.triggerHandler("setData"+k[1]+"!",e),d.data(this,a,c),b.triggerHandler("changeData"+k[1]+"!",e)})},removeData:function(a){return this.each(function(){d.removeData(this,a)})}}),d.extend({queue:function(a,b,c){if(a){b=(b||"fx")+"queue";var e=d._data(a,b);if(!c)return e||[];!e||d.isArray(c)?e=d._data(a,b,d.makeArray(c)):e.push(c);return e}},dequeue:function(a,b){b=b||"fx";var c=d.queue(a,b),e=c.shift();e==="inprogress"&&(e=c.shift()),e&&(b==="fx"&&c.unshift("inprogress"),e.call(a,function(){d.dequeue(a,b)})),c.length||d.removeData(a,b+"queue",!0)}}),d.fn.extend({queue:function(a,c){typeof a!=="string"&&(c=a,a="fx");if(c===b)return d.queue(this[0],a);return this.each(function(b){var e=d.queue(this,a,c);a==="fx"&&e[0]!=="inprogress"&&d.dequeue(this,a)})},dequeue:function(a){return this.each(function(){d.dequeue(this,a)})},delay:function(a,b){a=d.fx?d.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(){var c=this;setTimeout(function(){d.dequeue(c,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var j=/[\n\t\r]/g,k=/\s+/,l=/\r/g,m=/^(?:href|src|style)$/,n=/^(?:button|input)$/i,o=/^(?:button|input|object|select|textarea)$/i,p=/^a(?:rea)?$/i,q=/^(?:radio|checkbox)$/i;d.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"},d.fn.extend({attr:function(a,b){return d.access(this,a,b,!0,d.attr)},removeAttr:function(a,b){return this.each(function(){d.attr(this,a,""),this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.addClass(a.call(this,b,c.attr("class")))});if(a&&typeof a==="string"){var b=(a||"").split(k);for(var c=0,e=this.length;c<e;c++){var f=this[c];if(f.nodeType===1)if(f.className){var g=" "+f.className+" ",h=f.className;for(var i=0,j=b.length;i<j;i++)g.indexOf(" "+b[i]+" ")<0&&(h+=" "+b[i]);f.className=d.trim(h)}else f.className=a}}return this},removeClass:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.removeClass(a.call(this,b,c.attr("class")))});if(a&&typeof a==="string"||a===b){var c=(a||"").split(k);for(var e=0,f=this.length;e<f;e++){var g=this[e];if(g.nodeType===1&&g.className)if(a){var h=(" "+g.className+" ").replace(j," ");for(var i=0,l=c.length;i<l;i++)h=h.replace(" "+c[i]+" "," ");g.className=d.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,e=typeof b==="boolean";if(d.isFunction(a))return this.each(function(c){var e=d(this);e.toggleClass(a.call(this,c,e.attr("class"),b),b)});return this.each(function(){if(c==="string"){var f,g=0,h=d(this),i=b,j=a.split(k);while(f=j[g++])i=e?i:!h.hasClass(f),h[i?"addClass":"removeClass"](f)}else if(c==="undefined"||c==="boolean")this.className&&d._data(this,"__className__",this.className),this.className=this.className||a===!1?"":d._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ";for(var c=0,d=this.length;c<d;c++)if((" "+this[c].className+" ").replace(j," ").indexOf(b)>-1)return!0;return!1},val:function(a){if(!arguments.length){var c=this[0];if(c){if(d.nodeName(c,"option")){var e=c.attributes.value;return!e||e.specified?c.value:c.text}if(d.nodeName(c,"select")){var f=c.selectedIndex,g=[],h=c.options,i=c.type==="select-one";if(f<0)return null;for(var j=i?f:0,k=i?f+1:h.length;j<k;j++){var m=h[j];if(m.selected&&(d.support.optDisabled?!m.disabled:m.getAttribute("disabled")===null)&&(!m.parentNode.disabled||!d.nodeName(m.parentNode,"optgroup"))){a=d(m).val();if(i)return a;g.push(a)}}if(i&&!g.length&&h.length)return d(h[f]).val();return g}if(q.test(c.type)&&!d.support.checkOn)return c.getAttribute("value")===null?"on":c.value;return(c.value||"").replace(l,"")}return b}var n=d.isFunction(a);return this.each(function(b){var c=d(this),e=a;if(this.nodeType===1){n&&(e=a.call(this,b,c.val())),e==null?e="":typeof e==="number"?e+="":d.isArray(e)&&(e=d.map(e,function(a){return a==null?"":a+""}));if(d.isArray(e)&&q.test(this.type))this.checked=d.inArray(c.val(),e)>=0;else if(d.nodeName(this,"select")){var f=d.makeArray(e);d("option",this).each(function(){this.selected=d.inArray(d(this).val(),f)>=0}),f.length||(this.selectedIndex=-1)}else this.value=e}})}}),d.extend({attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,e,f){if(!a||a.nodeType===3||a.nodeType===8||a.nodeType===2)return b;if(f&&c in d.attrFn)return d(a)[c](e);var g=a.nodeType!==1||!d.isXMLDoc(a),h=e!==b;c=g&&d.props[c]||c;if(a.nodeType===1){var i=m.test(c);if(c==="selected"&&!d.support.optSelected){var j=a.parentNode;j&&(j.selectedIndex,j.parentNode&&j.parentNode.selectedIndex)}if((c in a||a[c]!==b)&&g&&!i){h&&(c==="type"&&n.test(a.nodeName)&&a.parentNode&&d.error("type property can't be changed"),e===null?a.nodeType===1&&a.removeAttribute(c):a[c]=e);if(d.nodeName(a,"form")&&a.getAttributeNode(c))return a.getAttributeNode(c).nodeValue;if(c==="tabIndex"){var k=a.getAttributeNode("tabIndex");return k&&k.specified?k.value:o.test(a.nodeName)||p.test(a.nodeName)&&a.href?0:b}return a[c]}if(!d.support.style&&g&&c==="style"){h&&(a.style.cssText=""+e);return a.style.cssText}h&&a.setAttribute(c,""+e);if(!a.attributes[c]&&(a.hasAttribute&&!a.hasAttribute(c)))return b;var l=!d.support.hrefNormalized&&g&&i?a.getAttribute(c,2):a.getAttribute(c);return l===null?b:l}h&&(a[c]=e);return a[c]}});var r=/\.(.*)$/,s=/^(?:textarea|input|select)$/i,t=/\./g,u=/ /g,v=/[^\w\s.|`]/g,w=function(a){return a.replace(v,"\\$&")};d.event={add:function(c,e,f,g){if(c.nodeType!==3&&c.nodeType!==8){try{d.isWindow(c)&&(c!==a&&!c.frameElement)&&(c=a)}catch(h){}if(f===!1)f=x;else if(!f)return;var i,j;f.handler&&(i=f,f=i.handler),f.guid||(f.guid=d.guid++);var k=d._data(c);if(!k)return;var l=k.events,m=k.handle;l||(k.events=l={}),m||(k.handle=m=function(a){return typeof d!=="undefined"&&d.event.triggered!==a.type?d.event.handle.apply(m.elem,arguments):b}),m.elem=c,e=e.split(" ");var n,o=0,p;while(n=e[o++]){j=i?d.extend({},i):{handler:f,data:g},n.indexOf(".")>-1?(p=n.split("."),n=p.shift(),j.namespace=p.slice(0).sort().join(".")):(p=[],j.namespace=""),j.type=n,j.guid||(j.guid=f.guid);var q=l[n],r=d.event.special[n]||{};if(!q){q=l[n]=[];if(!r.setup||r.setup.call(c,g,p,m)===!1)c.addEventListener?c.addEventListener(n,m,!1):c.attachEvent&&c.attachEvent("on"+n,m)}r.add&&(r.add.call(c,j),j.handler.guid||(j.handler.guid=f.guid)),q.push(j),d.event.global[n]=!0}c=null}},global:{},remove:function(a,c,e,f){if(a.nodeType!==3&&a.nodeType!==8){e===!1&&(e=x);var g,h,i,j,k=0,l,m,n,o,p,q,r,s=d.hasData(a)&&d._data(a),t=s&&s.events;if(!s||!t)return;c&&c.type&&(e=c.handler,c=c.type);if(!c||typeof c==="string"&&c.charAt(0)==="."){c=c||"";for(h in t)d.event.remove(a,h+c);return}c=c.split(" ");while(h=c[k++]){r=h,q=null,l=h.indexOf(".")<0,m=[],l||(m=h.split("."),h=m.shift(),n=new RegExp("(^|\\.)"+d.map(m.slice(0).sort(),w).join("\\.(?:.*\\.)?")+"(\\.|$)")),p=t[h];if(!p)continue;if(!e){for(j=0;j<p.length;j++){q=p[j];if(l||n.test(q.namespace))d.event.remove(a,r,q.handler,j),p.splice(j--,1)}continue}o=d.event.special[h]||{};for(j=f||0;j<p.length;j++){q=p[j];if(e.guid===q.guid){if(l||n.test(q.namespace))f==null&&p.splice(j--,1),o.remove&&o.remove.call(a,q);if(f!=null)break}}if(p.length===0||f!=null&&p.length===1)(!o.teardown||o.teardown.call(a,m)===!1)&&d.removeEvent(a,h,s.handle),g=null,delete t[h]}if(d.isEmptyObject(t)){var u=s.handle;u&&(u.elem=null),delete s.events,delete s.handle,d.isEmptyObject(s)&&d.removeData(a,b,!0)}}},trigger:function(a,c,e){var f=a.type||a,g=arguments[3];if(!g){a=typeof a==="object"?a[d.expando]?a:d.extend(d.Event(f),a):d.Event(f),f.indexOf("!")>=0&&(a.type=f=f.slice(0,-1),a.exclusive=!0),e||(a.stopPropagation(),d.event.global[f]&&d.each(d.cache,function(){var b=d.expando,e=this[b];e&&e.events&&e.events[f]&&d.event.trigger(a,c,e.handle.elem)}));if(!e||e.nodeType===3||e.nodeType===8)return b;a.result=b,a.target=e,c=d.makeArray(c),c.unshift(a)}a.currentTarget=e;var h=d._data(e,"handle");h&&h.apply(e,c);var i=e.parentNode||e.ownerDocument;try{e&&e.nodeName&&d.noData[e.nodeName.toLowerCase()]||e["on"+f]&&e["on"+f].apply(e,c)===!1&&(a.result=!1,a.preventDefault())}catch(j){}if(!a.isPropagationStopped()&&i)d.event.trigger(a,c,i,!0);else if(!a.isDefaultPrevented()){var k,l=a.target,m=f.replace(r,""),n=d.nodeName(l,"a")&&m==="click",o=d.event.special[m]||{};if((!o._default||o._default.call(e,a)===!1)&&!n&&!(l&&l.nodeName&&d.noData[l.nodeName.toLowerCase()])){try{l[m]&&(k=l["on"+m],k&&(l["on"+m]=null),d.event.triggered=a.type,l[m]())}catch(p){}k&&(l["on"+m]=k),d.event.triggered=b}}},handle:function(c){var e,f,g,h,i,j=[],k=d.makeArray(arguments);c=k[0]=d.event.fix(c||a.event),c.currentTarget=this,e=c.type.indexOf(".")<0&&!c.exclusive,e||(g=c.type.split("."),c.type=g.shift(),j=g.slice(0).sort(),h=new RegExp("(^|\\.)"+j.join("\\.(?:.*\\.)?")+"(\\.|$)")),c.namespace=c.namespace||j.join("."),i=d._data(this,"events"),f=(i||{})[c.type];if(i&&f){f=f.slice(0);for(var l=0,m=f.length;l<m;l++){var n=f[l];if(e||h.test(n.namespace)){c.handler=n.handler,c.data=n.data,c.handleObj=n;var o=n.handler.apply(this,k);o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()));if(c.isImmediatePropagationStopped())break}}}return c.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(a){if(a[d.expando])return a;var e=a;a=d.Event(e);for(var f=this.props.length,g;f;)g=this.props[--f],a[g]=e[g];a.target||(a.target=a.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),!a.relatedTarget&&a.fromElement&&(a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement);if(a.pageX==null&&a.clientX!=null){var h=c.documentElement,i=c.body;a.pageX=a.clientX+(h&&h.scrollLeft||i&&i.scrollLeft||0)-(h&&h.clientLeft||i&&i.clientLeft||0),a.pageY=a.clientY+(h&&h.scrollTop||i&&i.scrollTop||0)-(h&&h.clientTop||i&&i.clientTop||0)}a.which==null&&(a.charCode!=null||a.keyCode!=null)&&(a.which=a.charCode!=null?a.charCode:a.keyCode),!a.metaKey&&a.ctrlKey&&(a.metaKey=a.ctrlKey),!a.which&&a.button!==b&&(a.which=a.button&1?1:a.button&2?3:a.button&4?2:0);return a},guid:1e8,proxy:d.proxy,special:{ready:{setup:d.bindReady,teardown:d.noop},live:{add:function(a){d.event.add(this,H(a.origType,a.selector),d.extend({},a,{handler:G,guid:a.handler.guid}))},remove:function(a){d.event.remove(this,H(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,c){d.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}}},d.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},d.Event=function(a){if(!this.preventDefault)return new d.Event(a);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?y:x):this.type=a,this.timeStamp=d.now(),this[d.expando]=!0},d.Event.prototype={preventDefault:function(){this.isDefaultPrevented=y;var a=this.originalEvent;a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=y;var a=this.originalEvent;a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=y,this.stopPropagation()},isDefaultPrevented:x,isPropagationStopped:x,isImmediatePropagationStopped:x};var z=function(a){var b=a.relatedTarget;try{if(b&&b!==c&&!b.parentNode)return;while(b&&b!==this)b=b.parentNode;b!==this&&(a.type=a.data,d.event.handle.apply(this,arguments))}catch(e){}},A=function(a){a.type=a.data,d.event.handle.apply(this,arguments)};d.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){d.event.special[a]={setup:function(c){d.event.add(this,b,c&&c.selector?A:z,a)},teardown:function(a){d.event.remove(this,b,a&&a.selector?A:z)}}}),d.support.submitBubbles||(d.event.special.submit={setup:function(a,b){if(this.nodeName&&this.nodeName.toLowerCase()!=="form")d.event.add(this,"click.specialSubmit",function(a){var b=a.target,c=b.type;(c==="submit"||c==="image")&&d(b).closest("form").length&&E("submit",this,arguments)}),d.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,c=b.type;(c==="text"||c==="password")&&d(b).closest("form").length&&a.keyCode===13&&E("submit",this,arguments)});else return!1},teardown:function(a){d.event.remove(this,".specialSubmit")}});if(!d.support.changeBubbles){var B,C=function(a){var b=a.type,c=a.value;b==="radio"||b==="checkbox"?c=a.checked:b==="select-multiple"?c=a.selectedIndex>-1?d.map(a.options,function(a){return a.selected}).join("-"):"":a.nodeName.toLowerCase()==="select"&&(c=a.selectedIndex);return c},D=function D(a){var c=a.target,e,f;if(s.test(c.nodeName)&&!c.readOnly){e=d._data(c,"_change_data"),f=C(c),(a.type!=="focusout"||c.type!=="radio")&&d._data(c,"_change_data",f);if(e===b||f===e)return;if(e!=null||f)a.type="change",a.liveFired=b,d.event.trigger(a,arguments[1],c)}};d.event.special.change={filters:{focusout:D,beforedeactivate:D,click:function(a){var b=a.target,c=b.type;(c==="radio"||c==="checkbox"||b.nodeName.toLowerCase()==="select")&&D.call(this,a)},keydown:function(a){var b=a.target,c=b.type;(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(c==="checkbox"||c==="radio")||c==="select-multiple")&&D.call(this,a)},beforeactivate:function(a){var b=a.target;d._data(b,"_change_data",C(b))}},setup:function(a,b){if(this.type==="file")return!1;for(var c in B)d.event.add(this,c+".specialChange",B[c]);return s.test(this.nodeName)},teardown:function(a){d.event.remove(this,".specialChange");return s.test(this.nodeName)}},B=d.event.special.change.filters,B.focus=B.beforeactivate}c.addEventListener&&d.each({focus:"focusin",blur:"focusout"},function(a,b){function f(a){var c=d.event.fix(a);c.type=b,c.originalEvent={},d.event.trigger(c,null,c.target),c.isDefaultPrevented()&&a.preventDefault()}var e=0;d.event.special[b]={setup:function(){e++===0&&c.addEventListener(a,f,!0)},teardown:function(){--e===0&&c.removeEventListener(a,f,!0)}}}),d.each(["bind","one"],function(a,c){d.fn[c]=function(a,e,f){if(typeof a==="object"){for(var g in a)this[c](g,e,a[g],f);return this}if(d.isFunction(e)||e===!1)f=e,e=b;var h=c==="one"?d.proxy(f,function(a){d(this).unbind(a,h);return f.apply(this,arguments)}):f;if(a==="unload"&&c!=="one")this.one(a,e,f);else for(var i=0,j=this.length;i<j;i++)d.event.add(this[i],a,h,e);return this}}),d.fn.extend({unbind:function(a,b){if(typeof a!=="object"||a.preventDefault)for(var e=0,f=this.length;e<f;e++)d.event.remove(this[e],a,b);else for(var c in a)this.unbind(c,a[c]);return this},delegate:function(a,b,c,d){return this.live(b,c,d,a)},undelegate:function(a,b,c){return arguments.length===0?this.unbind("live"):this.die(b,null,c,a)},trigger:function(a,b){return this.each(function(){d.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){var c=d.Event(a);c.preventDefault(),c.stopPropagation(),d.event.trigger(c,b,this[0]);return c.result}},toggle:function(a){var b=arguments,c=1;while(c<b.length)d.proxy(a,b[c++]);return this.click(d.proxy(a,function(e){var f=(d._data(this,"lastToggle"+a.guid)||0)%c;d._data(this,"lastToggle"+a.guid,f+1),e.preventDefault();return b[f].apply(this,arguments)||!1}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var F={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};d.each(["live","die"],function(a,c){d.fn[c]=function(a,e,f,g){var h,i=0,j,k,l,m=g||this.selector,n=g?this:d(this.context);if(typeof a==="object"&&!a.preventDefault){for(var o in a)n[c](o,e,a[o],m);return this}d.isFunction(e)&&(f=e,e=b),a=(a||"").split(" ");while((h=a[i++])!=null){j=r.exec(h),k="",j&&(k=j[0],h=h.replace(r,""));if(h==="hover"){a.push("mouseenter"+k,"mouseleave"+k);continue}l=h,h==="focus"||h==="blur"?(a.push(F[h]+k),h=h+k):h=(F[h]||h)+k;if(c==="live")for(var p=0,q=n.length;p<q;p++)d.event.add(n[p],"live."+H(h,m),{data:e,selector:m,handler:f,origType:h,origHandler:f,preType:l});else n.unbind("live."+H(h,m),f)}return this}}),d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){d.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.bind(b,a,c):this.trigger(b)},d.attrFn&&(d.attrFn[b]=!0)}),function(){function u(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}if(i.nodeType===1){f||(i.sizcache=c,i.sizset=g);if(typeof b!=="string"){if(i===b){j=!0;break}}else if(k.filter(b,[i]).length>0){j=i;break}}i=i[a]}d[g]=j}}}function t(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}i.nodeType===1&&!f&&(i.sizcache=c,i.sizset=g);if(i.nodeName.toLowerCase()===b){j=i;break}i=i[a]}d[g]=j}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,e=0,f=Object.prototype.toString,g=!1,h=!0,i=/\\/g,j=/\W/;[0,0].sort(function(){h=!1;return 0});var k=function(b,d,e,g){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!=="string")return e;var i,j,n,o,q,r,s,t,u=!0,w=k.isXML(d),x=[],y=b;do{a.exec(""),i=a.exec(y);if(i){y=i[3],x.push(i[1]);if(i[2]){o=i[3];break}}}while(i);if(x.length>1&&m.exec(b))if(x.length===2&&l.relative[x[0]])j=v(x[0]+x[1],d);else{j=l.relative[x[0]]?[d]:k(x.shift(),d);while(x.length)b=x.shift(),l.relative[b]&&(b+=x.shift()),j=v(b,j)}else{!g&&x.length>1&&d.nodeType===9&&!w&&l.match.ID.test(x[0])&&!l.match.ID.test(x[x.length-1])&&(q=k.find(x.shift(),d,w),d=q.expr?k.filter(q.expr,q.set)[0]:q.set[0]);if(d){q=g?{expr:x.pop(),set:p(g)}:k.find(x.pop(),x.length===1&&(x[0]==="~"||x[0]==="+")&&d.parentNode?d.parentNode:d,w),j=q.expr?k.filter(q.expr,q.set):q.set,x.length>0?n=p(j):u=!1;while(x.length)r=x.pop(),s=r,l.relative[r]?s=x.pop():r="",s==null&&(s=d),l.relative[r](n,s,w)}else n=x=[]}n||(n=j),n||k.error(r||b);if(f.call(n)==="[object Array]")if(u)if(d&&d.nodeType===1)for(t=0;n[t]!=null;t++)n[t]&&(n[t]===!0||n[t].nodeType===1&&k.contains(d,n[t]))&&e.push(j[t]);else for(t=0;n[t]!=null;t++)n[t]&&n[t].nodeType===1&&e.push(j[t]);else e.push.apply(e,n);else p(n,e);o&&(k(o,h,e,g),k.uniqueSort(e));return e};k.uniqueSort=function(a){if(r){g=h,a.sort(r);if(g)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},k.matches=function(a,b){return k(a,null,null,b)},k.matchesSelector=function(a,b){return k(b,null,null,[a]).length>0},k.find=function(a,b,c){var d;if(!a)return[];for(var e=0,f=l.order.length;e<f;e++){var g,h=l.order[e];if(g=l.leftMatch[h].exec(a)){var j=g[1];g.splice(1,1);if(j.substr(j.length-1)!=="\\"){g[1]=(g[1]||"").replace(i,""),d=l.find[h](g,b,c);if(d!=null){a=a.replace(l.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!=="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},k.filter=function(a,c,d,e){var f,g,h=a,i=[],j=c,m=c&&c[0]&&k.isXML(c[0]);while(a&&c.length){for(var n in l.filter)if((f=l.leftMatch[n].exec(a))!=null&&f[2]){var o,p,q=l.filter[n],r=f[1];g=!1,f.splice(1,1);if(r.substr(r.length-1)==="\\")continue;j===i&&(i=[]);if(l.preFilter[n]){f=l.preFilter[n](f,j,d,i,e,m);if(f){if(f===!0)continue}else g=o=!0}if(f)for(var s=0;(p=j[s])!=null;s++)if(p){o=q(p,f,s,j);var t=e^!!o;d&&o!=null?t?g=!0:j[s]=!1:t&&(i.push(p),g=!0)}if(o!==b){d||(j=i),a=a.replace(l.match[n],"");if(!g)return[];break}}if(a===h)if(g==null)k.error(a);else break;h=a}return j},k.error=function(a){throw"Syntax error, unrecognized expression: "+a};var l=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b==="string",d=c&&!j.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1){}a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&k.filter(b,a,!0)},">":function(a,b){var c,d=typeof b==="string",e=0,f=a.length;if(d&&!j.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&k.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=u;typeof b==="string"&&!j.test(b)&&(b=b.toLowerCase(),d=b,g=t),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=u;typeof b==="string"&&!j.test(b)&&(b=b.toLowerCase(),d=b,g=t),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!=="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!=="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!=="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(i,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(i,"")},TAG:function(a,b){return a[1].replace(i,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||k.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&k.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(i,"");!f&&l.attrMap[g]&&(a[1]=l.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(i,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=k(b[3],null,null,c);else{var g=k.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(l.match.POS.test(b[0])||l.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!k(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return"text"===c&&(b===c||b===null)},radio:function(a){return"radio"===a.type},checkbox:function(a){return"checkbox"===a.type},file:function(a){return"file"===a.type},password:function(a){return"password"===a.type},submit:function(a){return"submit"===a.type},image:function(a){return"image"===a.type},reset:function(a){return"reset"===a.type},button:function(a){return"button"===a.type||a.nodeName.toLowerCase()==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=l.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||k.getText([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}k.error(e)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case"only":case"first":while(d=d.previousSibling)if(d.nodeType===1)return!1;if(c==="first")return!0;d=a;case"last":while(d=d.nextSibling)if(d.nodeType===1)return!1;return!0;case"nth":var e=b[2],f=b[3];if(e===1&&f===0)return!0;var g=b[0],h=a.parentNode;if(h&&(h.sizcache!==g||!a.nodeIndex)){var i=0;for(d=h.firstChild;d;d=d.nextSibling)d.nodeType===1&&(d.nodeIndex=++i);h.sizcache=g}var j=a.nodeIndex-f;return e===0?j===0:j%e===0&&j/e>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=l.attrHandle[c]?l.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=l.setFilters[e];if(f)return f(a,c,b,d)}}},m=l.match.POS,n=function(a,b){return"\\"+(b-0+1)};for(var o in l.match)l.match[o]=new RegExp(l.match[o].source+/(?![^\[]*\])(?![^\(]*\))/.source),l.leftMatch[o]=new RegExp(/(^(?:.|\r|\n)*?)/.source+l.match[o].source.replace(/\\(\d+)/g,n));var p=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(q){p=function(a,b){var c=0,d=b||[];if(f.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length==="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var r,s;c.documentElement.compareDocumentPosition?r=function(a,b){if(a===b){g=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(r=function(a,b){var c,d,e=[],f=[],h=a.parentNode,i=b.parentNode,j=h;if(a===b){g=!0;return 0}if(h===i)return s(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return s(e[k],f[k]);return k===c?s(a,f[k],-1):s(e[k],b,1)},s=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),k.getText=function(a){var b="",c;for(var d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=k.getText(c.childNodes));return b},function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(l.find.ID=function(a,c,d){if(typeof c.getElementById!=="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!=="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},l.filter.ID=function(a,b){var c=typeof a.getAttributeNode!=="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(l.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!=="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(l.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=k,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){k=function(b,e,f,g){e=e||c;if(!g&&!k.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return p(e.getElementsByTagName(b),f);if(h[2]&&l.find.CLASS&&e.getElementsByClassName)return p(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return p([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return p([],f);if(i.id===h[3])return p([i],f)}try{return p(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var m=e,n=e.getAttribute("id"),o=n||d,q=e.parentNode,r=/^\s*[+~]/.test(b);n?o=o.replace(/'/g,"\\$&"):e.setAttribute("id",o),r&&q&&(e=e.parentNode);try{if(!r||q)return p(e.querySelectorAll("[id='"+o+"'] "+b),f)}catch(s){}finally{n||m.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)k[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}k.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!k.isXML(a))try{if(e||!l.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return k(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;l.order.splice(1,0,"CLASS"),l.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!=="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?k.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?k.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:k.contains=function(){return!1},k.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var v=function(a,b){var c,d=[],e="",f=b.nodeType?[b]:b;while(c=l.match.PSEUDO.exec(a))e+=c[0],a=a.replace(l.match.PSEUDO,"");a=l.relative[a]?a+"*":a;for(var g=0,h=f.length;g<h;g++)k(a,f[g],d);return k.filter(e,d)};d.find=k,d.expr=k.selectors,d.expr[":"]=d.expr.filters,d.unique=k.uniqueSort,d.text=k.getText,d.isXMLDoc=k.isXML,d.contains=k.contains}();var I=/Until$/,J=/^(?:parents|prevUntil|prevAll)/,K=/,/,L=/^.[^:#\[\.,]*$/,M=Array.prototype.slice,N=d.expr.match.POS,O={children:!0,contents:!0,next:!0,prev:!0};d.fn.extend({find:function(a){var b=this.pushStack("","find",a),c=0;for(var e=0,f=this.length;e<f;e++){c=b.length,d.find(a,this[e],b);if(e>0)for(var g=c;g<b.length;g++)for(var h=0;h<c;h++)if(b[h]===b[g]){b.splice(g--,1);break}}return b},has:function(a){var b=d(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(d.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(Q(this,a,!1),"not",a)},filter:function(a){return this.pushStack(Q(this,a,!0),"filter",a)},is:function(a){return!!a&&d.filter(a,this).length>0},closest:function(a,b){var c=[],e,f,g=this[0];if(d.isArray(a)){var h,i,j={},k=1;if(g&&a.length){for(e=0,f=a.length;e<f;e++)i=a[e],j[i]||(j[i]=d.expr.match.POS.test(i)?d(i,b||this.context):i);while(g&&g.ownerDocument&&g!==b){for(i in j)h=j[i],(h.jquery?h.index(g)>-1:d(g).is(h))&&c.push({selector:i,elem:g,level:k});g=g.parentNode,k++}}return c}var l=N.test(a)?d(a,b||this.context):null;for(e=0,f=this.length;e<f;e++){g=this[e];while(g){if(l?l.index(g)>-1:d.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b)break}}c=c.length>1?d.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a||typeof a==="string")return d.inArray(this[0],a?d(a):this.parent().children());return d.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a==="string"?d(a,b):d.makeArray(a),e=d.merge(this.get(),c);return this.pushStack(P(c[0])||P(e[0])?e:d.unique(e))},andSelf:function(){return this.add(this.prevObject)}}),d.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return d.dir(a,"parentNode")},parentsUntil:function(a,b,c){return d.dir(a,"parentNode",c)},next:function(a){return d.nth(a,2,"nextSibling")},prev:function(a){return d.nth(a,2,"previousSibling")},nextAll:function(a){return d.dir(a,"nextSibling")},prevAll:function(a){return d.dir(a,"previousSibling")},nextUntil:function(a,b,c){return d.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return d.dir(a,"previousSibling",c)},siblings:function(a){return d.sibling(a.parentNode.firstChild,a)},children:function(a){return d.sibling(a.firstChild)},contents:function(a){return d.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:d.makeArray(a.childNodes)}},function(a,b){d.fn[a]=function(c,e){var f=d.map(this,b,c),g=M.call(arguments);I.test(a)||(e=c),e&&typeof e==="string"&&(f=d.filter(e,f)),f=this.length>1&&!O[a]?d.unique(f):f,(this.length>1||K.test(e))&&J.test(a)&&(f=f.reverse());return this.pushStack(f,a,g.join(","))}}),d.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?d.find.matchesSelector(b[0],a)?[b[0]]:[]:d.find.matches(a,b)},dir:function(a,c,e){var f=[],g=a[c];while(g&&g.nodeType!==9&&(e===b||g.nodeType!==1||!d(g).is(e)))g.nodeType===1&&f.push(g),g=g[c];return f},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var R=/ jQuery\d+="(?:\d+|null)"/g,S=/^\s+/,T=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,U=/<([\w:]+)/,V=/<tbody/i,W=/<|&#?\w+;/,X=/<(?:script|object|embed|option|style)/i,Y=/checked\s*(?:[^=]|=\s*.checked.)/i,Z={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};Z.optgroup=Z.option,Z.tbody=Z.tfoot=Z.colgroup=Z.caption=Z.thead,Z.th=Z.td,d.support.htmlSerialize||(Z._default=[1,"div<div>","</div>"]),d.fn.extend({text:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.text(a.call(this,b,c.text()))});if(typeof a!=="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return d.text(this)},wrapAll:function(a){if(d.isFunction(a))return this.each(function(b){d(this).wrapAll(a.call(this,b))});if(this[0]){var b=d(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(d.isFunction(a))return this.each(function(b){d(this).wrapInner(a.call(this,b))});return this.each(function(){var b=d(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){d(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){d.nodeName(this,"body")||d(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=d(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,d(arguments[0]).toArray());return a}},remove:function(a,b){for(var c=0,e;(e=this[c])!=null;c++)if(!a||d.filter(a,[e]).length)!b&&e.nodeType===1&&(d.cleanData(e.getElementsByTagName("*")),d.cleanData([e])),e.parentNode&&e.parentNode.removeChild(e);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&d.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return d.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(R,""):null;if(typeof a!=="string"||X.test(a)||!d.support.leadingWhitespace&&S.test(a)||Z[(U.exec(a)||["",""])[1].toLowerCase()])d.isFunction(a)?this.each(function(b){var c=d(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);else{a=a.replace(T,"<$1></$2>");try{for(var c=0,e=this.length;c<e;c++)this[c].nodeType===1&&(d.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(f){this.empty().append(a)}}return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(d.isFunction(a))return this.each(function(b){var c=d(this),e=c.html();c.replaceWith(a.call(this,b,e))});typeof a!=="string"&&(a=d(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;d(this).remove(),b?d(b).before(a):d(c).append(a)})}return this.length?this.pushStack(d(d.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,e){var f,g,h,i,j=a[0],k=[];if(!d.support.checkClone&&arguments.length===3&&typeof j==="string"&&Y.test(j))return this.each(function(){d(this).domManip(a,c,e,!0)});if(d.isFunction(j))return this.each(function(f){var g=d(this);a[0]=j.call(this,f,c?g.html():b),g.domManip(a,c,e)});if(this[0]){i=j&&j.parentNode,d.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?f={fragment:i}:f=d.buildFragment(a,this,k),h=f.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&d.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)e.call(c?$(this[l],g):this[l],f.cacheable||m>1&&l<n?d.clone(h,!0,!0):h)}k.length&&d.each(k,bc)}return this}}),d.buildFragment=function(a,b,e){var f,g,h,i=b&&b[0]?b[0].ownerDocument||b[0]:c;a.length===1&&typeof a[0]==="string"&&a[0].length<512&&i===c&&a[0].charAt(0)==="<"&&!X.test(a[0])&&(d.support.checkClone||!Y.test(a[0]))&&(g=!0,h=d.fragments[a[0]],h&&(h!==1&&(f=h))),f||(f=i.createDocumentFragment(),d.clean(a,i,f,e)),g&&(d.fragments[a[0]]=h?f:1);return{fragment:f,cacheable:g}},d.fragments={},d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){d.fn[a]=function(c){var e=[],f=d(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&f.length===1){f[b](this[0]);return this}for(var h=0,i=f.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();d(f[h])[b](j),e=e.concat(j)}return this.pushStack(e,a,f.selector)}}),d.extend({clone:function(a,b,c){var e=a.cloneNode(!0),f,g,h;if((!d.support.noCloneEvent||!d.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!d.isXMLDoc(a)){ba(a,e),f=bb(a),g=bb(e);for(h=0;f[h];++h)ba(f[h],g[h])}if(b){_(a,e);if(c){f=bb(a),g=bb(e);for(h=0;f[h];++h)_(f[h],g[h])}}return e},clean:function(a,b,e,f){b=b||c,typeof b.createElement==="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var g=[];for(var h=0,i;(i=a[h])!=null;h++){typeof i==="number"&&(i+="");if(!i)continue;if(typeof i!=="string"||W.test(i)){if(typeof i==="string"){i=i.replace(T,"<$1></$2>");var j=(U.exec(i)||["",""])[1].toLowerCase(),k=Z[j]||Z._default,l=k[0],m=b.createElement("div");m.innerHTML=k[1]+i+k[2];while(l--)m=m.lastChild;if(!d.support.tbody){var n=V.test(i),o=j==="table"&&!n?m.firstChild&&m.firstChild.childNodes:k[1]==="<table>"&&!n?m.childNodes:[];for(var p=o.length-1;p>=0;--p)d.nodeName(o[p],"tbody")&&!o[p].childNodes.length&&o[p].parentNode.removeChild(o[p])}!d.support.leadingWhitespace&&S.test(i)&&m.insertBefore(b.createTextNode(S.exec(i)[0]),m.firstChild),i=m.childNodes}}else i=b.createTextNode(i);i.nodeType?g.push(i):g=d.merge(g,i)}if(e)for(h=0;g[h];h++)!f||!d.nodeName(g[h],"script")||g[h].type&&g[h].type.toLowerCase()!=="text/javascript"?(g[h].nodeType===1&&g.splice.apply(g,[h+1,0].concat(d.makeArray(g[h].getElementsByTagName("script")))),e.appendChild(g[h])):f.push(g[h].parentNode?g[h].parentNode.removeChild(g[h]):g[h]);return g},cleanData:function(a){var b,c,e=d.cache,f=d.expando,g=d.event.special,h=d.support.deleteExpando;for(var i=0,j;(j=a[i])!=null;i++){if(j.nodeName&&d.noData[j.nodeName.toLowerCase()])continue;c=j[d.expando];if(c){b=e[c]&&e[c][f];if(b&&b.events){for(var k in b.events)g[k]?d.event.remove(j,k):d.removeEvent(j,k,b.handle);b.handle&&(b.handle.elem=null)}h?delete j[d.expando]:j.removeAttribute&&j.removeAttribute(d.expando),delete e[c]}}}});var bd=/alpha\([^)]*\)/i,be=/opacity=([^)]*)/,bf=/-([a-z])/ig,bg=/([A-Z]|^ms)/g,bh=/^-?\d+(?:px)?$/i,bi=/^-?\d/,bj={position:"absolute",visibility:"hidden",display:"block"},bk=["Left","Right"],bl=["Top","Bottom"],bm,bn,bo,bp=function(a,b){return b.toUpperCase()};d.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return d.access(this,a,c,!0,function(a,c,e){return e!==b?d.style(a,c,e):d.css(a,c)})},d.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bm(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{zIndex:!0,fontWeight:!0,opacity:!0,zoom:!0,lineHeight:!0},cssProps:{"float":d.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,e,f){if(a&&a.nodeType!==3&&a.nodeType!==8&&a.style){var g,h=d.camelCase(c),i=a.style,j=d.cssHooks[h];c=d.cssProps[h]||h;if(e===b){if(j&&"get"in j&&(g=j.get(a,!1,f))!==b)return g;return i[c]}if(typeof e==="number"&&isNaN(e)||e==null)return;typeof e==="number"&&!d.cssNumber[h]&&(e+="px");if(!j||!("set"in j)||(e=j.set(a,e))!==b)try{i[c]=e}catch(k){}}},css:function(a,c,e){var f,g=d.camelCase(c),h=d.cssHooks[g];c=d.cssProps[g]||g;if(h&&"get"in h&&(f=h.get(a,!0,e))!==b)return f;if(bm)return bm(a,c,g)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]},camelCase:function(a){return a.replace(bf,bp)}}),d.curCSS=d.css,d.each(["height","width"],function(a,b){d.cssHooks[b]={get:function(a,c,e){var f;if(c){a.offsetWidth!==0?f=bq(a,b,e):d.swap(a,bj,function(){f=bq(a,b,e)});if(f<=0){f=bm(a,b,b),f==="0px"&&bo&&(f=bo(a,b,b));if(f!=null)return f===""||f==="auto"?"0px":f}if(f<0||f==null){f=a.style[b];return f===""||f==="auto"?"0px":f}return typeof f==="string"?f:f+"px"}},set:function(a,b){if(!bh.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),d.support.opacity||(d.cssHooks.opacity={get:function(a,b){return be.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style;c.zoom=1;var e=d.isNaN(b)?"":"alpha(opacity="+b*100+")",f=c.filter||"";c.filter=bd.test(f)?f.replace(bd,e):c.filter+" "+e}}),d(function(){d.support.reliableMarginRight||(d.cssHooks.marginRight={get:function(a,b){var c;d.swap(a,{display:"inline-block"},function(){b?c=bm(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bn=function(a,c,e){var f,g,h;e=e.replace(bg,"-$1").toLowerCase();if(!(g=a.ownerDocument.defaultView))return b;if(h=g.getComputedStyle(a,null))f=h.getPropertyValue(e),f===""&&!d.contains(a.ownerDocument.documentElement,a)&&(f=d.style(a,e));return f}),c.documentElement.currentStyle&&(bo=function(a,b){var c,d=a.currentStyle&&a.currentStyle[b],e=a.runtimeStyle&&a.runtimeStyle[b],f=a.style;!bh.test(d)&&bi.test(d)&&(c=f.left,e&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":d||0,d=f.pixelLeft+"px",f.left=c,e&&(a.runtimeStyle.left=e));return d===""?"auto":d}),bm=bn||bo,d.expr&&d.expr.filters&&(d.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!d.support.reliableHiddenOffsets&&(a.style.display||d.css(a,"display"))==="none"},d.expr.filters.visible=function(a){return!d.expr.filters.hidden(a)});var br=/%20/g,bs=/\[\]$/,bt=/\r?\n/g,bu=/#.*$/,bv=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bw=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bx=/^(?:about|app|app\-storage|.+\-extension|file|widget):$/,by=/^(?:GET|HEAD)$/,bz=/^\/\//,bA=/\?/,bB=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bC=/^(?:select|textarea)/i,bD=/\s+/,bE=/([?&])_=[^&]*/,bF=/(^|\-)([a-z])/g,bG=function(a,b,c){return b+c.toUpperCase()},bH=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bI=d.fn.load,bJ={},bK={},bL,bM;try{bL=c.location.href}catch(bN){bL=c.createElement("a"),bL.href="",bL=bL.href}bM=bH.exec(bL.toLowerCase())||[],d.fn.extend({load:function(a,c,e){if(typeof a!=="string"&&bI)return bI.apply(this,arguments);if(!this.length)return this;var f=a.indexOf(" ");if(f>=0){var g=a.slice(f,a.length);a=a.slice(0,f)}var h="GET";c&&(d.isFunction(c)?(e=c,c=b):typeof c==="object"&&(c=d.param(c,d.ajaxSettings.traditional),h="POST"));var i=this;d.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?d("<div>").append(c.replace(bB,"")).find(g):c)),e&&i.each(e,[c,b,a])}});return this},serialize:function(){return d.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?d.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bC.test(this.nodeName)||bw.test(this.type))}).map(function(a,b){var c=d(this).val();return c==null?null:d.isArray(c)?d.map(c,function(a,c){return{name:b.name,value:a.replace(bt,"\r\n")}}):{name:b.name,value:c.replace(bt,"\r\n")}}).get()}}),d.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){d.fn[b]=function(a){return this.bind(b,a)}}),d.each(["get","post"],function(a,c){d[c]=function(a,e,f,g){d.isFunction(e)&&(g=g||f,f=e,e=b);return d.ajax({type:c,url:a,data:e,success:f,dataType:g})}}),d.extend({getScript:function(a,c){return d.get(a,b,c,"script")},getJSON:function(a,b,c){return d.get(a,b,c,"json")},ajaxSetup:function(a,b){b?d.extend(!0,a,d.ajaxSettings,b):(b=a,a=d.extend(!0,d.ajaxSettings,b));for(var c in {context:1,url:1})c in b?a[c]=b[c]:c in d.ajaxSettings&&(a[c]=d.ajaxSettings[c]);return a},ajaxSettings:{url:bL,isLocal:bx.test(bM[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":"*/*"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":d.parseJSON,"text xml":d.parseXML}},ajaxPrefilter:bO(bJ),ajaxTransport:bO(bK),ajax:function(a,c){function v(a,c,l,n){if(r!==2){r=2,p&&clearTimeout(p),o=b,m=n||"",u.readyState=a?4:0;var q,t,v,w=l?bR(e,u,l):b,x,y;if(a>=200&&a<300||a===304){if(e.ifModified){if(x=u.getResponseHeader("Last-Modified"))d.lastModified[k]=x;if(y=u.getResponseHeader("Etag"))d.etag[k]=y}if(a===304)c="notmodified",q=!0;else try{t=bS(e,w),c="success",q=!0}catch(z){c="parsererror",v=z}}else{v=c;if(!c||a)c="error",a<0&&(a=0)}u.status=a,u.statusText=c,q?h.resolveWith(f,[t,c,u]):h.rejectWith(f,[u,c,v]),u.statusCode(j),j=b,s&&g.trigger("ajax"+(q?"Success":"Error"),[u,e,q?t:v]),i.resolveWith(f,[u,c]),s&&(g.trigger("ajaxComplete",[u,e]),--d.active||d.event.trigger("ajaxStop"))}}typeof a==="object"&&(c=a,a=b),c=c||{};var e=d.ajaxSetup({},c),f=e.context||e,g=f!==e&&(f.nodeType||f instanceof d)?d(f):d.event,h=d.Deferred(),i=d._Deferred(),j=e.statusCode||{},k,l={},m,n,o,p,q,r=0,s,t,u={readyState:0,setRequestHeader:function(a,b){r||(l[a.toLowerCase().replace(bF,bG)]=b);return this},getAllResponseHeaders:function(){return r===2?m:null},getResponseHeader:function(a){var c;if(r===2){if(!n){n={};while(c=bv.exec(m))n[c[1].toLowerCase()]=c[2]}c=n[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){r||(e.mimeType=a);return this},abort:function(a){a=a||"abort",o&&o.abort(a),v(0,a);return this}};h.promise(u),u.success=u.done,u.error=u.fail,u.complete=i.done,u.statusCode=function(a){if(a){var b;if(r<2)for(b in a)j[b]=[j[b],a[b]];else b=a[u.status],u.then(b,b)}return this},e.url=((a||e.url)+"").replace(bu,"").replace(bz,bM[1]+"//"),e.dataTypes=d.trim(e.dataType||"*").toLowerCase().split(bD),e.crossDomain==null&&(q=bH.exec(e.url.toLowerCase()),e.crossDomain=q&&(q[1]!=bM[1]||q[2]!=bM[2]||(q[3]||(q[1]==="http:"?80:443))!=(bM[3]||(bM[1]==="http:"?80:443)))),e.data&&e.processData&&typeof e.data!=="string"&&(e.data=d.param(e.data,e.traditional)),bP(bJ,e,c,u);if(r===2)return!1;s=e.global,e.type=e.type.toUpperCase(),e.hasContent=!by.test(e.type),s&&d.active++===0&&d.event.trigger("ajaxStart");if(!e.hasContent){e.data&&(e.url+=(bA.test(e.url)?"&":"?")+e.data),k=e.url;if(e.cache===!1){var w=d.now(),x=e.url.replace(bE,"$1_="+w);e.url=x+(x===e.url?(bA.test(e.url)?"&":"?")+"_="+w:"")}}if(e.data&&e.hasContent&&e.contentType!==!1||c.contentType)l["Content-Type"]=e.contentType;e.ifModified&&(k=k||e.url,d.lastModified[k]&&(l["If-Modified-Since"]=d.lastModified[k]),d.etag[k]&&(l["If-None-Match"]=d.etag[k])),l.Accept=e.dataTypes[0]&&e.accepts[e.dataTypes[0]]?e.accepts[e.dataTypes[0]]+(e.dataTypes[0]!=="*"?", */*; q=0.01":""):e.accepts["*"];for(t in e.headers)u.setRequestHeader(t,e.headers[t]);if(e.beforeSend&&(e.beforeSend.call(f,u,e)===!1||r===2)){u.abort();return!1}for(t in {success:1,error:1,complete:1})u[t](e[t]);o=bP(bK,e,c,u);if(o){u.readyState=1,s&&g.trigger("ajaxSend",[u,e]),e.async&&e.timeout>0&&(p=setTimeout(function(){u.abort("timeout")},e.timeout));try{r=1,o.send(l,v)}catch(y){status<2?v(-1,y):d.error(y)}}else v(-1,"No Transport");return u},param:function(a,c){var e=[],f=function(a,b){b=d.isFunction(b)?b():b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=d.ajaxSettings.traditional);if(d.isArray(a)||a.jquery&&!d.isPlainObject(a))d.each(a,function(){f(this.name,this.value)});else for(var g in a)bQ(g,a[g],c,f);return e.join("&").replace(br,"+")}}),d.extend({active:0,lastModified:{},etag:{}});var bT=d.now(),bU=/(\=)\?(&|$)|\?\?/i;d.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return d.expando+"_"+bT++}}),d.ajaxPrefilter("json jsonp",function(b,c,e){var f=typeof b.data==="string";if(b.dataTypes[0]==="jsonp"||c.jsonpCallback||c.jsonp!=null||b.jsonp!==!1&&(bU.test(b.url)||f&&bU.test(b.data))){var g,h=b.jsonpCallback=d.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2",m=function(){a[h]=i,g&&d.isFunction(i)&&a[h](g[0])};b.jsonp!==!1&&(j=j.replace(bU,l),b.url===j&&(f&&(k=k.replace(bU,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},e.then(m,m),b.converters["script json"]=function(){g||d.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),d.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){d.globalEval(a);return a}}}),d.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),d.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var bV=d.now(),bW,bX;d.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&bZ()||b$()}:bZ,bX=d.ajaxSettings.xhr(),d.support.ajax=!!bX,d.support.cors=bX&&"withCredentials"in bX,bX=b,d.support.ajax&&d.ajaxTransport(function(a){if(!a.crossDomain||d.support.cors){var c;return{send:function(e,f){var g=a.xhr(),h,i;a.username?g.open(a.type,a.url,a.async,a.username,a.password):g.open(a.type,a.url,a.async);if(a.xhrFields)for(i in a.xhrFields)g[i]=a.xhrFields[i];a.mimeType&&g.overrideMimeType&&g.overrideMimeType(a.mimeType),!a.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(i in e)g.setRequestHeader(i,e[i])}catch(j){}g.send(a.hasContent&&a.data||null),c=function(e,i){var j,k,l,m,n;try{if(c&&(i||g.readyState===4)){c=b,h&&(g.onreadystatechange=d.noop,delete bW[h]);if(i)g.readyState!==4&&g.abort();else{j=g.status,l=g.getAllResponseHeaders(),m={},n=g.responseXML,n&&n.documentElement&&(m.xml=n),m.text=g.responseText;try{k=g.statusText}catch(o){k=""}j||!a.isLocal||a.crossDomain?j===1223&&(j=204):j=m.text?200:404}}}catch(p){i||f(-1,p)}m&&f(j,k,m,l)},a.async&&g.readyState!==4?(bW||(bW={},bY()),h=bV++,g.onreadystatechange=bW[h]=c):c()},abort:function(){c&&c(0,1)}}}});var b_={},ca=/^(?:toggle|show|hide)$/,cb=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cc,cd=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];d.fn.extend({show:function(a,b,c){var e,f;if(a||a===0)return this.animate(ce("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)e=this[g],f=e.style.display,!d._data(e,"olddisplay")&&f==="none"&&(f=e.style.display=""),f===""&&d.css(e,"display")==="none"&&d._data(e,"olddisplay",cf(e.nodeName));for(g=0;g<h;g++){e=this[g],f=e.style.display;if(f===""||f==="none")e.style.display=d._data(e,"olddisplay")||""}return this},hide:function(a,b,c){if(a||a===0)return this.animate(ce("hide",3),a,b,c);for(var e=0,f=this.length;e<f;e++){var g=d.css(this[e],"display");g!=="none"&&!d._data(this[e],"olddisplay")&&d._data(this[e],"olddisplay",g)}for(e=0;e<f;e++)this[e].style.display="none";return this},_toggle:d.fn.toggle,toggle:function(a,b,c){var e=typeof a==="boolean";d.isFunction(a)&&d.isFunction(b)?this._toggle.apply(this,arguments):a==null||e?this.each(function(){var b=e?a:d(this).is(":hidden");d(this)[b?"show":"hide"]()}):this.animate(ce("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,e){var f=d.speed(b,c,e);if(d.isEmptyObject(a))return this.each(f.complete);return this[f.queue===!1?"each":"queue"](function(){var b=d.extend({},f),c,e=this.nodeType===1,g=e&&d(this).is(":hidden"),h=this;for(c in a){var i=d.camelCase(c);c!==i&&(a[i]=a[c],delete a[c],c=i);if(a[c]==="hide"&&g||a[c]==="show"&&!g)return b.complete.call(this);if(e&&(c==="height"||c==="width")){b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];if(d.css(this,"display")==="inline"&&d.css(this,"float")==="none")if(d.support.inlineBlockNeedsLayout){var j=cf(this.nodeName);j==="inline"?this.style.display="inline-block":(this.style.display="inline",this.style.zoom=1)}else this.style.display="inline-block"}d.isArray(a[c])&&((b.specialEasing=b.specialEasing||{})[c]=a[c][1],a[c]=a[c][0])}b.overflow!=null&&(this.style.overflow="hidden"),b.curAnim=d.extend({},a),d.each(a,function(c,e){var f=new d.fx(h,b,c);if(ca.test(e))f[e==="toggle"?g?"show":"hide":e](a);else{var i=cb.exec(e),j=f.cur();if(i){var k=parseFloat(i[2]),l=i[3]||(d.cssNumber[c]?"":"px");l!=="px"&&(d.style(h,c,(k||1)+l),j=(k||1)/f.cur()*j,d.style(h,c,j+l)),i[1]&&(k=(i[1]==="-="?-1:1)*k+j),f.custom(j,k,l)}else f.custom(j,e,"")}});return!0})},stop:function(a,b){var c=d.timers;a&&this.queue([]),this.each(function(){for(var a=c.length-1;a>=0;a--)c[a].elem===this&&(b&&c[a](!0),c.splice(a,1))}),b||this.dequeue();return this}}),d.each({slideDown:ce("show",1),slideUp:ce("hide",1),slideToggle:ce("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){d.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),d.extend({speed:function(a,b,c){var e=a&&typeof a==="object"?d.extend({},a):{complete:c||!c&&b||d.isFunction(a)&&a,duration:a,easing:c&&b||b&&!d.isFunction(b)&&b};e.duration=d.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in d.fx.speeds?d.fx.speeds[e.duration]:d.fx.speeds._default,e.old=e.complete,e.complete=function(){e.queue!==!1&&d(this).dequeue(),d.isFunction(e.old)&&e.old.call(this)};return e},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig||(b.orig={})}}),d.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(d.fx.step[this.prop]||d.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=d.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,b,c){function g(a){return e.step(a)}var e=this,f=d.fx;this.startTime=d.now(),this.start=a,this.end=b,this.unit=c||this.unit||(d.cssNumber[this.prop]?"":"px"),this.now=this.start,this.pos=this.state=0,g.elem=this.elem,g()&&d.timers.push(g)&&!cc&&(cc=setInterval(f.tick,f.interval))},show:function(){this.options.orig[this.prop]=d.style(this.elem,this.prop),this.options.show=!0,this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),d(this.elem).show()},hide:function(){this.options.orig[this.prop]=d.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b=d.now(),c=!0;if(a||b>=this.options.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),this.options.curAnim[this.prop]=!0;for(var e in this.options.curAnim)this.options.curAnim[e]!==!0&&(c=!1);if(c){if(this.options.overflow!=null&&!d.support.shrinkWrapBlocks){var f=this.elem,g=this.options;d.each(["","X","Y"],function(a,b){f.style["overflow"+b]=g.overflow[a]})}this.options.hide&&d(this.elem).hide();if(this.options.hide||this.options.show)for(var h in this.options.curAnim)d.style(this.elem,h,this.options.orig[h]);this.options.complete.call(this.elem)}return!1}var i=b-this.startTime;this.state=i/this.options.duration;var j=this.options.specialEasing&&this.options.specialEasing[this.prop],k=this.options.easing||(d.easing.swing?"swing":"linear");this.pos=d.easing[j||k](this.state,i,0,1,this.options.duration),this.now=this.start+(this.end-this.start)*this.pos,this.update();return!0}},d.extend(d.fx,{tick:function(){var a=d.timers;for(var b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||d.fx.stop()},interval:13,stop:function(){clearInterval(cc),cc=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){d.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit:a.elem[a.prop]=a.now}}}),d.expr&&d.expr.filters&&(d.expr.filters.animated=function(a){return d.grep(d.timers,function(b){return a===b.elem}).length});var cg=/^t(?:able|d|h)$/i,ch=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?d.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){d.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return d.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(e){}var f=b.ownerDocument,g=f.documentElement;if(!c||!d.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=f.body,i=ci(f),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||d.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||d.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:d.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){d.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return d.offset.bodyOffset(b);d.offset.initialize();var c,e=b.offsetParent,f=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(d.offset.supportsFixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===e&&(l+=b.offsetTop,m+=b.offsetLeft,d.offset.doesNotAddBorder&&(!d.offset.doesAddBorderForTableAndCells||!cg.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),f=e,e=b.offsetParent),d.offset.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;d.offset.supportsFixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},d.offset={initialize:function(){var a=c.body,b=c.createElement("div"),e,f,g,h,i=parseFloat(d.css(a,"marginTop"))||0,j="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";d.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"}),b.innerHTML=j,a.insertBefore(b,a.firstChild),e=b.firstChild,f=e.firstChild,h=e.nextSibling.firstChild.firstChild,this.doesNotAddBorder=f.offsetTop!==5,this.doesAddBorderForTableAndCells=h.offsetTop===5,f.style.position="fixed",f.style.top="20px",this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15,f.style.position=f.style.top="",e.style.overflow="hidden",e.style.position="relative",this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5,this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==i,a.removeChild(b),d.offset.initialize=d.noop},bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;d.offset.initialize(),d.offset.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(d.css(a,"marginTop"))||0,c+=parseFloat(d.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var e=d.css(a,"position");e==="static"&&(a.style.position="relative");var f=d(a),g=f.offset(),h=d.css(a,"top"),i=d.css(a,"left"),j=(e==="absolute"||e==="fixed")&&d.inArray("auto",[h,i])>-1,k={},l={},m,n;j&&(l=f.position()),m=j?l.top:parseInt(h,10)||0,n=j?l.left:parseInt(i,10)||0,d.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):f.css(k)}},d.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),e=ch.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(d.css(a,"marginTop"))||0,c.left-=parseFloat(d.css(a,"marginLeft"))||0,e.top+=parseFloat(d.css(b[0],"borderTopWidth"))||0,e.left+=parseFloat(d.css(b[0],"borderLeftWidth"))||0;return{top:c.top-e.top,left:c.left-e.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&(!ch.test(a.nodeName)&&d.css(a,"position")==="static"))a=a.offsetParent;return a})}}),d.each(["Left","Top"],function(a,c){var e="scroll"+c;d.fn[e]=function(c){var f=this[0],g;if(!f)return null;if(c!==b)return this.each(function(){g=ci(this),g?g.scrollTo(a?d(g).scrollLeft():c,a?c:d(g).scrollTop()):this[e]=c});g=ci(f);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:d.support.boxModel&&g.document.documentElement[e]||g.document.body[e]:f[e]}}),d.each(["Height","Width"],function(a,c){var e=c.toLowerCase();d.fn["inner"+c]=function(){return this[0]?parseFloat(d.css(this[0],e,"padding")):null},d.fn["outer"+c]=function(a){return this[0]?parseFloat(d.css(this[0],e,a?"margin":"border")):null},d.fn[e]=function(a){var f=this[0];if(!f)return a==null?null:this;if(d.isFunction(a))return this.each(function(b){var c=d(this);c[e](a.call(this,b,c[e]()))});if(d.isWindow(f)){var g=f.document.documentElement["client"+c];return f.document.compatMode==="CSS1Compat"&&g||f.document.body["client"+c]||g}if(f.nodeType===9)return Math.max(f.documentElement["client"+c],f.body["scroll"+c],f.documentElement["scroll"+c],f.body["offset"+c],f.documentElement["offset"+c]);if(a===b){var h=d.css(f,e),i=parseFloat(h);return d.isNaN(i)?h:i}return this.css(e,typeof a==="string"?a:a+"px")}}),a.jQuery=a.$=d})(window);/*!
 * jQuery UI 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(c,j){function k(a){return!c(a).parents().andSelf().filter(function(){return c.curCSS(this,"visibility")==="hidden"||c.expr.filters.hidden(this)}).length}c.ui=c.ui||{};if(!c.ui.version){c.extend(c.ui,{version:"1.8.11",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,
NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});c.fn.extend({_focus:c.fn.focus,focus:function(a,b){return typeof a==="number"?this.each(function(){var d=this;setTimeout(function(){c(d).focus();b&&b.call(d)},a)}):this._focus.apply(this,arguments)},scrollParent:function(){var a;a=c.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(c.curCSS(this,
"position",1))&&/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!a.length?c(document):a},zIndex:function(a){if(a!==j)return this.css("zIndex",a);if(this.length){a=c(this[0]);for(var b;a.length&&a[0]!==document;){b=a.css("position");
if(b==="absolute"||b==="relative"||b==="fixed"){b=parseInt(a.css("zIndex"),10);if(!isNaN(b)&&b!==0)return b}a=a.parent()}}return 0},disableSelection:function(){return this.bind((c.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});c.each(["Width","Height"],function(a,b){function d(f,g,l,m){c.each(e,function(){g-=parseFloat(c.curCSS(f,"padding"+this,true))||0;if(l)g-=parseFloat(c.curCSS(f,
"border"+this+"Width",true))||0;if(m)g-=parseFloat(c.curCSS(f,"margin"+this,true))||0});return g}var e=b==="Width"?["Left","Right"]:["Top","Bottom"],h=b.toLowerCase(),i={innerWidth:c.fn.innerWidth,innerHeight:c.fn.innerHeight,outerWidth:c.fn.outerWidth,outerHeight:c.fn.outerHeight};c.fn["inner"+b]=function(f){if(f===j)return i["inner"+b].call(this);return this.each(function(){c(this).css(h,d(this,f)+"px")})};c.fn["outer"+b]=function(f,g){if(typeof f!=="number")return i["outer"+b].call(this,f);return this.each(function(){c(this).css(h,
d(this,f,true,g)+"px")})}});c.extend(c.expr[":"],{data:function(a,b,d){return!!c.data(a,d[3])},focusable:function(a){var b=a.nodeName.toLowerCase(),d=c.attr(a,"tabindex");if("area"===b){b=a.parentNode;d=b.name;if(!a.href||!d||b.nodeName.toLowerCase()!=="map")return false;a=c("img[usemap=#"+d+"]")[0];return!!a&&k(a)}return(/input|select|textarea|button|object/.test(b)?!a.disabled:"a"==b?a.href||!isNaN(d):!isNaN(d))&&k(a)},tabbable:function(a){var b=c.attr(a,"tabindex");return(isNaN(b)||b>=0)&&c(a).is(":focusable")}});
c(function(){var a=document.body,b=a.appendChild(b=document.createElement("div"));c.extend(b.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});c.support.minHeight=b.offsetHeight===100;c.support.selectstart="onselectstart"in b;a.removeChild(b).style.display="none"});c.extend(c.ui,{plugin:{add:function(a,b,d){a=c.ui[a].prototype;for(var e in d){a.plugins[e]=a.plugins[e]||[];a.plugins[e].push([b,d[e]])}},call:function(a,b,d){if((b=a.plugins[b])&&a.element[0].parentNode)for(var e=0;e<b.length;e++)a.options[b[e][0]]&&
b[e][1].apply(a.element,d)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(a,b){if(c(a).css("overflow")==="hidden")return false;b=b&&b==="left"?"scrollLeft":"scrollTop";var d=false;if(a[b]>0)return true;a[b]=1;d=a[b]>0;a[b]=0;return d},isOverAxis:function(a,b,d){return a>b&&a<b+d},isOver:function(a,b,d,e,h,i){return c.ui.isOverAxis(a,d,h)&&c.ui.isOverAxis(b,e,i)}})}})(jQuery);
;/*!
 * jQuery UI Widget 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(b,j){if(b.cleanData){var k=b.cleanData;b.cleanData=function(a){for(var c=0,d;(d=a[c])!=null;c++)b(d).triggerHandler("remove");k(a)}}else{var l=b.fn.remove;b.fn.remove=function(a,c){return this.each(function(){if(!c)if(!a||b.filter(a,[this]).length)b("*",this).add([this]).each(function(){b(this).triggerHandler("remove")});return l.call(b(this),a,c)})}}b.widget=function(a,c,d){var e=a.split(".")[0],f;a=a.split(".")[1];f=e+"-"+a;if(!d){d=c;c=b.Widget}b.expr[":"][f]=function(h){return!!b.data(h,
a)};b[e]=b[e]||{};b[e][a]=function(h,g){arguments.length&&this._createWidget(h,g)};c=new c;c.options=b.extend(true,{},c.options);b[e][a].prototype=b.extend(true,c,{namespace:e,widgetName:a,widgetEventPrefix:b[e][a].prototype.widgetEventPrefix||a,widgetBaseClass:f},d);b.widget.bridge(a,b[e][a])};b.widget.bridge=function(a,c){b.fn[a]=function(d){var e=typeof d==="string",f=Array.prototype.slice.call(arguments,1),h=this;d=!e&&f.length?b.extend.apply(null,[true,d].concat(f)):d;if(e&&d.charAt(0)==="_")return h;
e?this.each(function(){var g=b.data(this,a),i=g&&b.isFunction(g[d])?g[d].apply(g,f):g;if(i!==g&&i!==j){h=i;return false}}):this.each(function(){var g=b.data(this,a);g?g.option(d||{})._init():b.data(this,a,new c(d,this))});return h}};b.Widget=function(a,c){arguments.length&&this._createWidget(a,c)};b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(a,c){b.data(c,this.widgetName,this);this.element=b(c);this.options=b.extend(true,{},this.options,
this._getCreateOptions(),a);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return b.metadata&&b.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},
widget:function(){return this.element},option:function(a,c){var d=a;if(arguments.length===0)return b.extend({},this.options);if(typeof a==="string"){if(c===j)return this.options[a];d={};d[a]=c}this._setOptions(d);return this},_setOptions:function(a){var c=this;b.each(a,function(d,e){c._setOption(d,e)});return this},_setOption:function(a,c){this.options[a]=c;if(a==="disabled")this.widget()[c?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",c);return this},
enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(a,c,d){var e=this.options[a];c=b.Event(c);c.type=(a===this.widgetEventPrefix?a:this.widgetEventPrefix+a).toLowerCase();d=d||{};if(c.originalEvent){a=b.event.props.length;for(var f;a;){f=b.event.props[--a];c[f]=c.originalEvent[f]}}this.element.trigger(c,d);return!(b.isFunction(e)&&e.call(this.element[0],c,d)===false||c.isDefaultPrevented())}}})(jQuery);
;/*!
 * jQuery UI Mouse 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function(b){b.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var a=this;this.element.bind("mousedown."+this.widgetName,function(c){return a._mouseDown(c)}).bind("click."+this.widgetName,function(c){if(true===b.data(c.target,a.widgetName+".preventClickEvent")){b.removeData(c.target,a.widgetName+".preventClickEvent");c.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(a){a.originalEvent=
a.originalEvent||{};if(!a.originalEvent.mouseHandled){this._mouseStarted&&this._mouseUp(a);this._mouseDownEvent=a;var c=this,e=a.which==1,f=typeof this.options.cancel=="string"?b(a.target).parents().add(a.target).filter(this.options.cancel).length:false;if(!e||f||!this._mouseCapture(a))return true;this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet)this._mouseDelayTimer=setTimeout(function(){c.mouseDelayMet=true},this.options.delay);if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a)){this._mouseStarted=
this._mouseStart(a)!==false;if(!this._mouseStarted){a.preventDefault();return true}}true===b.data(a.target,this.widgetName+".preventClickEvent")&&b.removeData(a.target,this.widgetName+".preventClickEvent");this._mouseMoveDelegate=function(d){return c._mouseMove(d)};this._mouseUpDelegate=function(d){return c._mouseUp(d)};b(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);a.preventDefault();return a.originalEvent.mouseHandled=
true}},_mouseMove:function(a){if(b.browser.msie&&!(document.documentMode>=9)&&!a.button)return this._mouseUp(a);if(this._mouseStarted){this._mouseDrag(a);return a.preventDefault()}if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a))(this._mouseStarted=this._mouseStart(this._mouseDownEvent,a)!==false)?this._mouseDrag(a):this._mouseUp(a);return!this._mouseStarted},_mouseUp:function(a){b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);
if(this._mouseStarted){this._mouseStarted=false;a.target==this._mouseDownEvent.target&&b.data(a.target,this.widgetName+".preventClickEvent",true);this._mouseStop(a)}return false},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery);
;/*
 * jQuery UI Position 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Position
 */
(function(c){c.ui=c.ui||{};var n=/left|center|right/,o=/top|center|bottom/,t=c.fn.position,u=c.fn.offset;c.fn.position=function(b){if(!b||!b.of)return t.apply(this,arguments);b=c.extend({},b);var a=c(b.of),d=a[0],g=(b.collision||"flip").split(" "),e=b.offset?b.offset.split(" "):[0,0],h,k,j;if(d.nodeType===9){h=a.width();k=a.height();j={top:0,left:0}}else if(d.setTimeout){h=a.width();k=a.height();j={top:a.scrollTop(),left:a.scrollLeft()}}else if(d.preventDefault){b.at="left top";h=k=0;j={top:b.of.pageY,
left:b.of.pageX}}else{h=a.outerWidth();k=a.outerHeight();j=a.offset()}c.each(["my","at"],function(){var f=(b[this]||"").split(" ");if(f.length===1)f=n.test(f[0])?f.concat(["center"]):o.test(f[0])?["center"].concat(f):["center","center"];f[0]=n.test(f[0])?f[0]:"center";f[1]=o.test(f[1])?f[1]:"center";b[this]=f});if(g.length===1)g[1]=g[0];e[0]=parseInt(e[0],10)||0;if(e.length===1)e[1]=e[0];e[1]=parseInt(e[1],10)||0;if(b.at[0]==="right")j.left+=h;else if(b.at[0]==="center")j.left+=h/2;if(b.at[1]==="bottom")j.top+=
k;else if(b.at[1]==="center")j.top+=k/2;j.left+=e[0];j.top+=e[1];return this.each(function(){var f=c(this),l=f.outerWidth(),m=f.outerHeight(),p=parseInt(c.curCSS(this,"marginLeft",true))||0,q=parseInt(c.curCSS(this,"marginTop",true))||0,v=l+p+(parseInt(c.curCSS(this,"marginRight",true))||0),w=m+q+(parseInt(c.curCSS(this,"marginBottom",true))||0),i=c.extend({},j),r;if(b.my[0]==="right")i.left-=l;else if(b.my[0]==="center")i.left-=l/2;if(b.my[1]==="bottom")i.top-=m;else if(b.my[1]==="center")i.top-=
m/2;i.left=Math.round(i.left);i.top=Math.round(i.top);r={left:i.left-p,top:i.top-q};c.each(["left","top"],function(s,x){c.ui.position[g[s]]&&c.ui.position[g[s]][x](i,{targetWidth:h,targetHeight:k,elemWidth:l,elemHeight:m,collisionPosition:r,collisionWidth:v,collisionHeight:w,offset:e,my:b.my,at:b.at})});c.fn.bgiframe&&f.bgiframe();f.offset(c.extend(i,{using:b.using}))})};c.ui.position={fit:{left:function(b,a){var d=c(window);d=a.collisionPosition.left+a.collisionWidth-d.width()-d.scrollLeft();b.left=
d>0?b.left-d:Math.max(b.left-a.collisionPosition.left,b.left)},top:function(b,a){var d=c(window);d=a.collisionPosition.top+a.collisionHeight-d.height()-d.scrollTop();b.top=d>0?b.top-d:Math.max(b.top-a.collisionPosition.top,b.top)}},flip:{left:function(b,a){if(a.at[0]!=="center"){var d=c(window);d=a.collisionPosition.left+a.collisionWidth-d.width()-d.scrollLeft();var g=a.my[0]==="left"?-a.elemWidth:a.my[0]==="right"?a.elemWidth:0,e=a.at[0]==="left"?a.targetWidth:-a.targetWidth,h=-2*a.offset[0];b.left+=
a.collisionPosition.left<0?g+e+h:d>0?g+e+h:0}},top:function(b,a){if(a.at[1]!=="center"){var d=c(window);d=a.collisionPosition.top+a.collisionHeight-d.height()-d.scrollTop();var g=a.my[1]==="top"?-a.elemHeight:a.my[1]==="bottom"?a.elemHeight:0,e=a.at[1]==="top"?a.targetHeight:-a.targetHeight,h=-2*a.offset[1];b.top+=a.collisionPosition.top<0?g+e+h:d>0?g+e+h:0}}}};if(!c.offset.setOffset){c.offset.setOffset=function(b,a){if(/static/.test(c.curCSS(b,"position")))b.style.position="relative";var d=c(b),
g=d.offset(),e=parseInt(c.curCSS(b,"top",true),10)||0,h=parseInt(c.curCSS(b,"left",true),10)||0;g={top:a.top-g.top+e,left:a.left-g.left+h};"using"in a?a.using.call(b,g):d.css(g)};c.fn.offset=function(b){var a=this[0];if(!a||!a.ownerDocument)return null;if(b)return this.each(function(){c.offset.setOffset(this,b)});return u.call(this)}}})(jQuery);
;/*
 * jQuery UI Slider 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Slider
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(d){d.widget("ui.slider",d.ui.mouse,{widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null},_create:function(){var b=this,a=this.options;this._mouseSliding=this._keySliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all");a.disabled&&this.element.addClass("ui-slider-disabled ui-disabled");
this.range=d([]);if(a.range){if(a.range===true){this.range=d("<div></div>");if(!a.values)a.values=[this._valueMin(),this._valueMin()];if(a.values.length&&a.values.length!==2)a.values=[a.values[0],a.values[0]]}else this.range=d("<div></div>");this.range.appendTo(this.element).addClass("ui-slider-range");if(a.range==="min"||a.range==="max")this.range.addClass("ui-slider-range-"+a.range);this.range.addClass("ui-widget-header")}d(".ui-slider-handle",this.element).length===0&&d("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle");
if(a.values&&a.values.length)for(;d(".ui-slider-handle",this.element).length<a.values.length;)d("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle");this.handles=d(".ui-slider-handle",this.element).addClass("ui-state-default ui-corner-all");this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(c){c.preventDefault()}).hover(function(){a.disabled||d(this).addClass("ui-state-hover")},function(){d(this).removeClass("ui-state-hover")}).focus(function(){if(a.disabled)d(this).blur();
else{d(".ui-slider .ui-state-focus").removeClass("ui-state-focus");d(this).addClass("ui-state-focus")}}).blur(function(){d(this).removeClass("ui-state-focus")});this.handles.each(function(c){d(this).data("index.ui-slider-handle",c)});this.handles.keydown(function(c){var e=true,f=d(this).data("index.ui-slider-handle"),h,g,i;if(!b.options.disabled){switch(c.keyCode){case d.ui.keyCode.HOME:case d.ui.keyCode.END:case d.ui.keyCode.PAGE_UP:case d.ui.keyCode.PAGE_DOWN:case d.ui.keyCode.UP:case d.ui.keyCode.RIGHT:case d.ui.keyCode.DOWN:case d.ui.keyCode.LEFT:e=
false;if(!b._keySliding){b._keySliding=true;d(this).addClass("ui-state-active");h=b._start(c,f);if(h===false)return}break}i=b.options.step;h=b.options.values&&b.options.values.length?(g=b.values(f)):(g=b.value());switch(c.keyCode){case d.ui.keyCode.HOME:g=b._valueMin();break;case d.ui.keyCode.END:g=b._valueMax();break;case d.ui.keyCode.PAGE_UP:g=b._trimAlignValue(h+(b._valueMax()-b._valueMin())/5);break;case d.ui.keyCode.PAGE_DOWN:g=b._trimAlignValue(h-(b._valueMax()-b._valueMin())/5);break;case d.ui.keyCode.UP:case d.ui.keyCode.RIGHT:if(h===
b._valueMax())return;g=b._trimAlignValue(h+i);break;case d.ui.keyCode.DOWN:case d.ui.keyCode.LEFT:if(h===b._valueMin())return;g=b._trimAlignValue(h-i);break}b._slide(c,f,g);return e}}).keyup(function(c){var e=d(this).data("index.ui-slider-handle");if(b._keySliding){b._keySliding=false;b._stop(c,e);b._change(c,e);d(this).removeClass("ui-state-active")}});this._refreshValue();this._animateOff=false},destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");
this._mouseDestroy();return this},_mouseCapture:function(b){var a=this.options,c,e,f,h,g;if(a.disabled)return false;this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();c=this._normValueFromMouse({x:b.pageX,y:b.pageY});e=this._valueMax()-this._valueMin()+1;h=this;this.handles.each(function(i){var j=Math.abs(c-h.values(i));if(e>j){e=j;f=d(this);g=i}});if(a.range===true&&this.values(1)===a.min){g+=1;f=d(this.handles[g])}if(this._start(b,
g)===false)return false;this._mouseSliding=true;h._handleIndex=g;f.addClass("ui-state-active").focus();a=f.offset();this._clickOffset=!d(b.target).parents().andSelf().is(".ui-slider-handle")?{left:0,top:0}:{left:b.pageX-a.left-f.width()/2,top:b.pageY-a.top-f.height()/2-(parseInt(f.css("borderTopWidth"),10)||0)-(parseInt(f.css("borderBottomWidth"),10)||0)+(parseInt(f.css("marginTop"),10)||0)};this.handles.hasClass("ui-state-hover")||this._slide(b,g,c);return this._animateOff=true},_mouseStart:function(){return true},
_mouseDrag:function(b){var a=this._normValueFromMouse({x:b.pageX,y:b.pageY});this._slide(b,this._handleIndex,a);return false},_mouseStop:function(b){this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(b,this._handleIndex);this._change(b,this._handleIndex);this._clickOffset=this._handleIndex=null;return this._animateOff=false},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(b){var a;
if(this.orientation==="horizontal"){a=this.elementSize.width;b=b.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{a=this.elementSize.height;b=b.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}a=b/a;if(a>1)a=1;if(a<0)a=0;if(this.orientation==="vertical")a=1-a;b=this._valueMax()-this._valueMin();return this._trimAlignValue(this._valueMin()+a*b)},_start:function(b,a){var c={handle:this.handles[a],value:this.value()};if(this.options.values&&this.options.values.length){c.value=
this.values(a);c.values=this.values()}return this._trigger("start",b,c)},_slide:function(b,a,c){var e;if(this.options.values&&this.options.values.length){e=this.values(a?0:1);if(this.options.values.length===2&&this.options.range===true&&(a===0&&c>e||a===1&&c<e))c=e;if(c!==this.values(a)){e=this.values();e[a]=c;b=this._trigger("slide",b,{handle:this.handles[a],value:c,values:e});this.values(a?0:1);b!==false&&this.values(a,c,true)}}else if(c!==this.value()){b=this._trigger("slide",b,{handle:this.handles[a],
value:c});b!==false&&this.value(c)}},_stop:function(b,a){var c={handle:this.handles[a],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(a);c.values=this.values()}this._trigger("stop",b,c)},_change:function(b,a){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[a],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(a);c.values=this.values()}this._trigger("change",b,c)}},value:function(b){if(arguments.length){this.options.value=
this._trimAlignValue(b);this._refreshValue();this._change(null,0)}return this._value()},values:function(b,a){var c,e,f;if(arguments.length>1){this.options.values[b]=this._trimAlignValue(a);this._refreshValue();this._change(null,b)}if(arguments.length)if(d.isArray(arguments[0])){c=this.options.values;e=arguments[0];for(f=0;f<c.length;f+=1){c[f]=this._trimAlignValue(e[f]);this._change(null,f)}this._refreshValue()}else return this.options.values&&this.options.values.length?this._values(b):this.value();
else return this._values()},_setOption:function(b,a){var c,e=0;if(d.isArray(this.options.values))e=this.options.values.length;d.Widget.prototype._setOption.apply(this,arguments);switch(b){case "disabled":if(a){this.handles.filter(".ui-state-focus").blur();this.handles.removeClass("ui-state-hover");this.handles.attr("disabled","disabled");this.element.addClass("ui-disabled")}else{this.handles.removeAttr("disabled");this.element.removeClass("ui-disabled")}break;case "orientation":this._detectOrientation();
this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case "value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case "values":this._animateOff=true;this._refreshValue();for(c=0;c<e;c+=1)this._change(null,c);this._animateOff=false;break}},_value:function(){var b=this.options.value;return b=this._trimAlignValue(b)},_values:function(b){var a,c;if(arguments.length){a=this.options.values[b];
return a=this._trimAlignValue(a)}else{a=this.options.values.slice();for(c=0;c<a.length;c+=1)a[c]=this._trimAlignValue(a[c]);return a}},_trimAlignValue:function(b){if(b<=this._valueMin())return this._valueMin();if(b>=this._valueMax())return this._valueMax();var a=this.options.step>0?this.options.step:1,c=(b-this._valueMin())%a;alignValue=b-c;if(Math.abs(c)*2>=a)alignValue+=c>0?a:-a;return parseFloat(alignValue.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},
_refreshValue:function(){var b=this.options.range,a=this.options,c=this,e=!this._animateOff?a.animate:false,f,h={},g,i,j,l;if(this.options.values&&this.options.values.length)this.handles.each(function(k){f=(c.values(k)-c._valueMin())/(c._valueMax()-c._valueMin())*100;h[c.orientation==="horizontal"?"left":"bottom"]=f+"%";d(this).stop(1,1)[e?"animate":"css"](h,a.animate);if(c.options.range===true)if(c.orientation==="horizontal"){if(k===0)c.range.stop(1,1)[e?"animate":"css"]({left:f+"%"},a.animate);
if(k===1)c.range[e?"animate":"css"]({width:f-g+"%"},{queue:false,duration:a.animate})}else{if(k===0)c.range.stop(1,1)[e?"animate":"css"]({bottom:f+"%"},a.animate);if(k===1)c.range[e?"animate":"css"]({height:f-g+"%"},{queue:false,duration:a.animate})}g=f});else{i=this.value();j=this._valueMin();l=this._valueMax();f=l!==j?(i-j)/(l-j)*100:0;h[c.orientation==="horizontal"?"left":"bottom"]=f+"%";this.handle.stop(1,1)[e?"animate":"css"](h,a.animate);if(b==="min"&&this.orientation==="horizontal")this.range.stop(1,
1)[e?"animate":"css"]({width:f+"%"},a.animate);if(b==="max"&&this.orientation==="horizontal")this.range[e?"animate":"css"]({width:100-f+"%"},{queue:false,duration:a.animate});if(b==="min"&&this.orientation==="vertical")this.range.stop(1,1)[e?"animate":"css"]({height:f+"%"},a.animate);if(b==="max"&&this.orientation==="vertical")this.range[e?"animate":"css"]({height:100-f+"%"},{queue:false,duration:a.animate})}}});d.extend(d.ui.slider,{version:"1.8.11"})})(jQuery);
;// Copyright 2011 David Galles, University of San Francisco. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without modification, are
// permitted provided that the following conditions are met:
//
// 1. Redistributions of source code must retain the above copyright notice, this list of
// conditions and the following disclaimer.
//
// 2. Redistributions in binary form must reproduce the above copyright notice, this list
// of conditions and the following disclaimer in the documentation and/or other materials
// provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY <COPYRIGHT HOLDER> ``AS IS'' AND ANY EXPRESS OR IMPLIED
// WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
// FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> OR
// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
// SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
// ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
// ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
// The views and conclusions contained in the software and documentation are those of the
// authors and should not be interpreted as representing official policies, either expressed
// or implied, of the University of San Francisco


Function.prototype.bind = function() {
	var _function = this;
	
	var args = Array.prototype.slice.call(arguments);
	var scope = args.shift()
	return function() {
		for (var i = 0; i < arguments.length; i++)
		{
			args.push(arguments[i]);
		}
		return _function.apply(scope, args);
	}
}

function EventListener()
{
	this.events = [];
}


EventListener.prototype.removeListener = function(kind, scope, func)
{
	if (this.events[kind] == undefined)
	{
		return;
	}
	var scopeFunctions = null;
	var i;
	for (i = 0; i < this.events[kind].length; i++)
	{
		if (this.events[kind][i].scope == scope)
		{
			scopeFunctions = this.events[kind][i];
			break;
		}	
	}
	if (scopeFunctions == null)
	{
		return;
	}
	for (i = 0; i < scopeFunctions.functions.length; i++)
	{
		if (scopeFunctions.functions[i] == func)
		{
			scopeFunctions.functions.splice(i,1);
			return;
		}
	}
}


EventListener.prototype.addListener = function(kind, scope, func)
{
	if (this.events[kind] === undefined)
	{
		this.events[kind] = [];
	}
	var i;
	var scopeFunctions = null;
	for (i = 0; i < this.events[kind].length; i++)
	{
		if (this.events[kind][i].scope == scope)
		{
			scopeFunctions = this.events[kind][i];
			break;
		}
	}
	if (scopeFunctions === null)
	{
		this.events[kind].push({scope:scope, functions:[] });
		scopeFunctions = this.events[kind][this.events[kind].length - 1];
	}
	for (i = 0; i < scopeFunctions.functions.length; i++)
	{
		if (scopeFunctions.functions[i] == func)
		{
			return;
		}
	}
	scopeFunctions.functions.push(func);
}

EventListener.prototype.fireEvent = function(kind, event)
{
	// TODO:  Should add a deep clone here ...
	if (this.events[kind] !== undefined)
	{
		for (var i = 0; i < this.events[kind].length; i++)
		{
			var objects = this.events[kind][i];
			var functs = objects.functions;
			var scope = objects.scope
			for (var j = 0; j <functs.length; j++)
			{
				var func = functs[j];
				func.call(scope,event);
			}
		}
	}

}


/*
function Source()
{
	
}

Source.prototype = new EventListener();
Source.prototype.constructor = Source;
Source.prototype.testFire = function()
{
	this.fireEvent("test","testcontents");
	this.fireEvent("test2","test2contents");
}



function Client(eventSource)
{
		
	this.first = function(blah)
	{
		alert("first:" + blah);
	}
	
	this.second = function(blah)
	{
		alert("second:" + blah);
	}
	eventSource.addListener("test", this, this.first);
	eventSource.addListener("test", this, this.first);
	eventSource.addListener("test", this, this.second);
	eventSource.removeListener("test", this, this.first);
	
							
}
							
							
function init()
{
	var src = new Source;
	var c = new Client(src);
	src.testFire();
}
							
*/

// Copyright 2011 David Galles, University of San Francisco. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without modification, are
// permitted provided that the following conditions are met:
//
// 1. Redistributions of source code must retain the above copyright notice, this list of
// conditions and the following disclaimer.
//
// 2. Redistributions in binary form must reproduce the above copyright notice, this list
// of conditions and the following disclaimer in the documentation and/or other materials
// provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY <COPYRIGHT HOLDER> ``AS IS'' AND ANY EXPRESS OR IMPLIED
// WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
// FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> OR
// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
// SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
// ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
// ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
// The views and conclusions contained in the software and documentation are those of the
// authors and should not be interpreted as representing official policies, either expressed
// or implied, of the University of San Francisco


// Base "class": UndoBlock

function UndoBlock()
{
	
}

UndoBlock.prototype.addUndoAnimation = function(animationList)
{
	return false;
}

UndoBlock.prototype.undoInitialStep = function(world) 
{
	
}

////////////////////////////////////////////////////////////
// UndoMove
////////////////////////////////////////////////////////////

function UndoMove(id, fmX, fmy, tx, ty)
{
	this.objectID = id;
	this.fromX = fmX;
	this.fromY = fmy;
	this.toX = tx;
	this.toY = ty;
}


UndoMove.prototype = new UndoBlock();
UndoMove.prototype.constructor = UndoMove;

UndoMove.prototype.addUndoAnimation = function (animationList)
{
	var nextAnim = new SingleAnimation(this.objectID, this.fromX, this.fromY, this.toX, this.toY);
	animationList.push(nextAnim);
	return true;
}

////////////////////////////////////////////////////////////
// UndoCreate
////////////////////////////////////////////////////////////

function UndoCreate(id)
{
	this.objectID = id;
}

UndoCreate.prototype = new UndoBlock();
UndoCreate.prototype.constructor = UndoCreate;

	
UndoCreate.prototype.undoInitialStep = function(world)
{
			world.removeObject(this.objectID);
}

////////////////////////////////////////////////////////////
// UndoHighlight
////////////////////////////////////////////////////////////

function UndoHighlight(id, val)
{
	this.objectID = id;
	this.highlightValue = val;
}

UndoHighlight.prototype = new UndoBlock();
UndoHighlight.prototype.constructor = UndoHighlight;

UndoHighlight.prototype.undoInitialStep = function(world)
{
	world.setHighlight(this.objectID, this.highlightValue);
}


////////////////////////////////////////////////////////////
// UndoSetHeight
////////////////////////////////////////////////////////////

function UndoSetHeight(id, val)
{
	this.objectID = id;
	this.height = val;
}

UndoSetHeight.prototype = new UndoBlock();
UndoSetHeight.prototype.constructor = UndoSetHeight;

UndoSetHeight.prototype.undoInitialStep = function(world)
{
	world.setHeight(this.objectID, this.height);
}

////////////////////////////////////////////////////////////
// UndoSetWidth
////////////////////////////////////////////////////////////

function UndoSetWidth(id, val)
{
	this.objectID = id;
	this.width = val;
}

UndoSetWidth.prototype = new UndoBlock();
UndoSetWidth.prototype.constructor = UndoSetWidth;

UndoSetWidth.prototype.undoInitialStep = function(world)
{
	world.setWidth(this.objectID, this.width);
}


////////////////////////////////////////////////////////////
// UndoSetNumElements
////////////////////////////////////////////////////////////
function UndoSetNumElements(obj, newNumElems)
{
	this.objectID = obj.objectID;
	this.sizeBeforeChange = obj.getNumElements();
	this.sizeAfterChange = newNumElems;
	if (this.sizeBeforeChange > this.sizeAfterChange)
	{
		this.labels = new Array(this.sizeBeforeChange - this.sizeAfterChange);
		this.colors = new Array(this.sizeBeforeChange - this.sizeAfterChange);
		for (var i = 0; i < this.sizeBeforeChange - this.sizeAfterChange; i++)
		{
			this.labels[i] = obj.getText(i+this.sizeAfterChange);
			this.colors[i] = obj.getTextColor(i+this.sizeAfterChange);
		}
		
	}	
}

UndoSetNumElements.prototype = new UndoBlock();
UndoSetNumElements.prototype.constructor = UndoSetNumElements;


UndoSetNumElements.prototype.undoInitialStep = function(world)
{
	world.setNumElements(this.objectID, this.sizeBeforeChange);
	if (this.sizeBeforeChange > this.sizeAfterChange)
	{
		for (var i = 0; i < this.sizeBeforeChange - this.sizeAfterChange; i++)
		{
			world.setText(this.objectID, this.labels[i], i+this.sizeAfterChange);
			world.setTextColor(this.objectID, this.colors[i], i+this.sizeAfterChange);
		}
	}
}


////////////////////////////////////////////////////////////
// UndoSetAlpha
////////////////////////////////////////////////////////////

function UndoSetAlpha(id, alph)
{
	this.objectID = id;
	this.alphaVal = alph;
}

UndoSetAlpha.prototype = new UndoBlock();
UndoSetAlpha.prototype.constructor = UndoSetAlpha;

UndoSetAlpha.prototype.undoInitialStep = function(world) 
{
	world.setAlpha(this.objectID, this.alphaVal);
}

////////////////////////////////////////////////////////////
// UndoSetNull
////////////////////////////////////////////////////////////

function UndoSetNull(id, nv)
{
	this.objectID = id;
	this.nullVal = nv;
}

UndoSetNull.prototype = new UndoBlock();
UndoSetNull.prototype.constructor = UndoSetNull;

UndoSetNull.prototype.undoInitialStep = function(world) 
{
	world.setNull(this.objectID, this.nullVal);
}

////////////////////////////////////////////////////////////
// UndoSetForegroundColor
////////////////////////////////////////////////////////////

function UndoSetForegroundColor(id, color)
{
	this.objectID = id;
	this.color = color;
}

UndoSetForegroundColor.prototype = new UndoBlock();
UndoSetForegroundColor.prototype.constructor = UndoSetForegroundColor;

UndoSetForegroundColor.prototype.undoInitialStep =  function (world)
{
	world.setForegroundColor(this.objectID, this.color);
}

////////////////////////////////////////////////////////////
// UndoSetBackgroundColor
////////////////////////////////////////////////////////////

function UndoSetBackgroundColor(id, color)
{
	this.objectID = id;
	this.color = color;
}

UndoSetBackgroundColor.prototype = new UndoBlock();
UndoSetBackgroundColor.prototype.constructor = UndoSetBackgroundColor;

UndoSetBackgroundColor.prototype.undoInitialStep =  function (world)
{
	world.setBackgroundColor(this.objectID, this.color);
}

////////////////////////////////////////////////////////////
// UndoSetText
////////////////////////////////////////////////////////////



function UndoSetText(id, str, index)
{
	this.objectID = id;
	this.newText = str;
	this.labelIndex = index;
}

UndoSetText.prototype = new UndoBlock();
UndoSetText.prototype.constructor = UndoSetText;

UndoSetText.prototype.undoInitialStep = function(world)
{
	world.setText(this.objectID, this.newText, this.labelIndex);
}
////////////////////////////////////////////////////////////
// UndoSetTextColor
////////////////////////////////////////////////////////////



function UndoSetTextColor(id, color, index)
{
	this.objectID = id;
	this.color = color;
	this.index = index;
}

UndoSetTextColor.prototype = new UndoBlock();
UndoSetTextColor.prototype.constructor = UndoSetTextColor;

UndoSetTextColor.prototype.undoInitialStep = function(world)
{
	world.setTextColor(this.objectID, this.color, this.index);
}



////////////////////////////////////////////////////////////
// UndoHighlightEdge
////////////////////////////////////////////////////////////

function UndoHighlightEdge(from, to, val)
{
	this.fromID = from;
	this.toID = to;
	this.highlightValue = val;
}

UndoHighlightEdge.prototype = new UndoBlock();
UndoHighlightEdge.prototype.constructor = UndoHighlightEdge;

UndoHighlightEdge.prototype.undoInitialStep = function(world)
{
	world.setEdgeHighlight(this.fromID, this.toID, this.highlightValue);
}


////////////////////////////////////////////////////////////
// UndoSetEdgeColor
////////////////////////////////////////////////////////////

function UndoSetEdgeColor(from, to, oldColor)
{
	this.fromID = from;
	this.toID = to;
	this.color = oldColor;
}

UndoSetEdgeColor.prototype = new UndoBlock();
UndoSetEdgeColor.prototype.constructor = UndoSetEdgeColor;

UndoSetEdgeColor.prototype.undoInitialStep = function(world)
{
	world.setEdgeColor(this.fromID, this.toID, this.color);
}


////////////////////////////////////////////////////////////
// UndoSetEdgeAlpha
////////////////////////////////////////////////////////////

function UndoSetEdgeAlpha(from, to, oldAplha)
{
	this.fromID = from;
	this.toID = to;
	this.alpha  = oldAplha;
}

UndoSetEdgeAlpha.prototype = new UndoBlock();
UndoSetEdgeAlpha.prototype.constructor = UndoSetEdgeAlpha;

UndoSetEdgeAlpha.prototype.undoInitialStep = function(world)
{
	world.setEdgeAlpha(this.fromID, this.toID, this.alpha);
}

////////////////////////////////////////////////////////////
// UndoSetPosition
////////////////////////////////////////////////////////////

function UndoSetPosition(id, x, y)
{
	this.objectID = id;
	this.x = x; 
	this.y = y;
}

UndoSetPosition.prototype = new UndoBlock();
UndoSetPosition.prototype.constructor = UndoSetPosition;


UndoSetPosition.prototype.undoInitialStep = function(world)
{
	world.setNodePosition(this.objectID, this.x, this.y);
}


// Copyright 2011 David Galles, University of San Francisco. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without modification, are
// permitted provided that the following conditions are met:
//
// 1. Redistributions of source code must retain the above copyright notice, this list of
// conditions and the following disclaimer.
//
// 2. Redistributions in binary form must reproduce the above copyright notice, this list
// of conditions and the following disclaimer in the documentation and/or other materials
// provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY <COPYRIGHT HOLDER> ``AS IS'' AND ANY EXPRESS OR IMPLIED
// WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
// FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> OR
// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
// SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
// ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
// ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
// The views and conclusions contained in the software and documentation are those of the
// authors and should not be interpreted as representing official policies, either expressed
// or implied, of the University of San Francisco

function AnimatedObject()
{
	this.init();
}

AnimatedObject.prototype.init  = function()
{
	this.backgroundColor = "#FFFFFF";
	this.foregroundColor = "#000000";
	this.highlighted = false;
	this.objectID = -1;
	this.layer = 0;
	this.addedToScene = true;
	this.label = "";
	this.labelColor = "#000000";
	this.alpha = 1.0;
	this.x = 0;
	this.y = 0;
	this.minHeightDiff = 3;
	this.range = 5;
}

AnimatedObject.prototype.alwaysOnTop = false;

AnimatedObject.prototype.setBackgroundColor = function(newColor)
{
	this.backgroundColor = newColor;
}

AnimatedObject.prototype.setForegroundColor = function(newColor)
{
	this.foregroundColor = newColor;
}

AnimatedObject.prototype.setNull = function()
{
	
}

AnimatedObject.prototype.getNull = function()
{
	return false;
}

AnimatedObject.prototype.setAlpha = function(newAlpha)
{
	this.alpha = newAlpha;
}

AnimatedObject.prototype.getAlpha = function()
{
	return this.alpha;
}

AnimatedObject.prototype.setForegroundColor = function(newColor)
{
	this.foregroundColor = newColor;
	this.labelColor = newColor;
}


AnimatedObject.prototype.getHighlight = function()
{
	return this.highlighted;
}

AnimatedObject.prototype.getWidth = function()
{
	// TODO:  Do we want to throw here?  Should always override this ...
	return 0;
}

AnimatedObject.prototype.setHighlight = function(value)
{
	this.highlighted = value;
}

AnimatedObject.prototype.centerX = function()
{
	return this.x;
}

AnimatedObject.prototype.setWidth = function(newWidth)
{
	// TODO:  Do we want to throw here?  Should always override this ... 
}



AnimatedObject.prototype.centerY = function()
{
	return this.y;
}

AnimatedObject.prototype.alignLeft = function(otherObject)
{
	// Assuming centering.  Overridden method could modify if not centered
	//  (See AnimatedLabel, for instance)
	this.y = otherObject.centerY();
	this.y = otherObject.right() + this.getWidth() / 2;	
}

AnimatedObject.prototype.alignRight = function(otherObject)
{
	// Assuming centering.  Overridden method could modify if not centered
	//  (See AnimatedLabel, for instance)
	this.y = otherObject.centerY();
	this.y = otherObject.left() - this.getWidth() / 2;	
	
	
}


AnimatedObject.prototype.alignTop = function(otherObject)
{
	// Assuming centering.  Overridden method could modify if not centered
	
	this.x = otherObject.centerX();
	this.y = otherObject.top() - this.getWidth() / 2;	
	
	
}


AnimatedObject.prototype.alignBottom = function(otherObject)
{
	this.x = otherObject.centerX();
	this.y = otherObject.bottom() + this.getWidth() / 2;		
	
}



/* TODO:  Do we need these in the base? 		
		function left(): Number
		{
			return x - getWidth() / 2;
		}
		
		function right():Number
		{
			return x + getWidth() / 2;
		}
		
		function top():Number
		{
			return y - getHeight() / 2;
		}
		
		function bottom():Number
		{
			return y + getHeight() / 2;
		}
		
		function centerX():Number
		{
			return x;
		}
		
		function centerY():Number
		{
			return y;
		}
		*/
		
		
AnimatedObject.prototype.getClosestCardinalPoint = function(fromX, fromY)
{
	var xDelta;
	var yDelta;
	var xPos;
	var yPos;
			
	if (fromX < this.left())
	{
		xDelta = this.left() - fromX;
		xPos = this.left();
 	}
	else if (fromX > this.right())
	{
		xDelta = fromX - this.right();
		xPos = this.right();
    }
	else
	{
		xDelta = 0;
		xPos = this.centerX();
	}
	
	if (fromY < this.top())
	{
		yDelta = this.top() - fromY;
		yPos = this.top();
	}
	else if (fromY > this.bottom())
	{
		yDelta = fromY - this.bottom();
		yPos = this.bottom();
    }
	else
	{
		yDelta = 0;
		yPos = this.centerY();
	}
			
	if (yDelta > xDelta)
	{
		xPos = this.centerX();
	}
	else 
	{
		yPos  = this.centerY();
	}
	
	return [xPos, yPos];
}
		
		
AnimatedObject.prototype.centered = function()
{
	return false;
}


AnimatedObject.prototype.pulseHighlight = function(frameNum)
{			
	if (this.highlighted)
	{
				var frameMod = frameNum / 7.0;
				var delta  = Math.abs((frameMod) % (2 * this.range  - 2) - this.range + 1)
				this.highlightDiff =  delta + this.minHeightDiff;
	}
			
}
		
AnimatedObject.prototype.getTailPointerAttachPos = function(fromX, fromY, anchorPoint) 
{
	return [this.x, this.y];
}
		
		
AnimatedObject.prototype.getHeadPointerAttachPos = function(fromX, fromY) 
{
	return [this.x, this.y];
}
		
/*public function createUndoDelete() : UndoBlock
{
			// Must be overriden!
			return null;
}
*/		
AnimatedObject.prototype.identifier = function()
{
	return this.objectID;
}

AnimatedObject.prototype.getText = function(index)
{
	return this.label;
}
		
AnimatedObject.prototype.getTextColor = function(textIndex)
{			
	return this.labelColor
}
		
AnimatedObject.prototype.setTextColor = function(color, textIndex)
{
		this.labelColor = color;
}
		
AnimatedObject.prototype.setText = function(newText, textIndex)
{
	this.label = newText;
}
ï»¿// Copyright 2011 David Galles, University of San Francisco. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without modification, are
// permitted provided that the following conditions are met:
//
// 1. Redistributions of source code must retain the above copyright notice, this list of
// conditions and the following disclaimer.
//
// 2. Redistributions in binary form must reproduce the above copyright notice, this list
// of conditions and the following disclaimer in the documentation and/or other materials
// provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY <COPYRIGHT HOLDER> ``AS IS'' AND ANY EXPRESS OR IMPLIED
// WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
// FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> OR
// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
// SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
// ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
// ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
// The views and conclusions contained in the software and documentation are those of the
// authors and should not be interpreted as representing official policies, either expressed
// or implied, of the University of San Francisco

function AnimatedLabel(id, val, center, initialWidth)
{
	this.centering = center;
	this.label = val;
	this.highlighted = false;
	this.objectID = id;
	this.alpha = 1.0;
	this.addedToScene = true;
	this.labelColor = "#000000";
	this.textWidth = 0;
	if (initialWidth != undefined)
	{
		this.textWidth = initialWidth;
	}

}

AnimatedLabel.prototype = new AnimatedObject();
AnimatedLabel.prototype.constructor = AnimatedLabel;

AnimatedLabel.prototype.alwaysOnTop = true;


AnimatedLabel.prototype.centered = function()
{
	return this.centering;
}


AnimatedLabel.prototype.draw = function(ctx)
{
	if (!this.addedToScene)
	{
		return;
	}
	
	ctx.globalAlpha = this.alpha;

	
	
	ctx.font = '10px sans-serif';
	if (this.centering)
	{
		ctx.textAlign = 'center';
		ctx.textBaseline   = 'middle'; 
	}
	else
	{
		ctx.textAlign = 'left';
		ctx.textBaseline   = 'top'; 
	}
	if (this.highlighted)
	{
	    ctx.strokeStyle = "#ffaaaa";
	    ctx.fillStyle = "#ff0000";
		ctx.lineWidth = this.highlightDiff;
		ctx.strokeText(this.label, this.x, this.y);		
		//ctx.fillText(this.label, this.x, this.y);
	}
	ctx.strokeStyle = this.labelColor;
	ctx.fillStyle = this.labelColor;
	ctx.lineWidth = 1;
	strList = this.label.split("\n");
	if (strList.length == 1)
	{
		ctx.fillText(this.label, this.x, this.y);
		//this.textWidth = ctx.measureText(this.label).width;
	}
	else
	{
		var offset = (this.centering)?  (1.0 - strList.length) / 2.0 : 0;
		for (var i = 0; i < strList.length; i++)
		{
			ctx.fillText(strList[i], this.x, this.y + offset + i * 12);
			//this.textWidth = Math.max(this.textWidth, ctx.measureText(strList[i]).width);
		}		
	}
	ctx.closePath();
}


AnimatedLabel.prototype.alignLeft = function(otherObject)
{
	if (this.centering)
	{
		this.y = otherObject.centerY();
		this.x = otherObject.left() - this.textWidth / 2;
	}
	else
	{
		this.y = otherObject.centerY() - 5;
		this.x = otherObject.left() - this.textWidth;
	}
}

AnimatedLabel.prototype.alignRight = function(otherObject)
{
	if (this.centering)
	{
		this.y = otherObject.centerY();
		this.x = otherObject.right() + this.textWidth / 2;
	}
	else
	{
		this.y = otherObject.centerY() - 5;
		this.x = otherObject.right();
	}
}


AnimatedLabel.prototype.alignTop = function(otherObject)
{
	if (this.centering)
	{
		this.y = otherObject.top() - 5;
		this.x = otherObject.centerX();
	}
	else
	{
		this.y = otherObject.top() - 10;
		this.x = otherObject.centerX() -this.textWidth / 2;
	}
}


AnimatedLabel.prototype.alignBottom = function(otherObject)
{
	if (this.centering)
	{
		this.y = otherObject.bottom() + 5;
		this.x = otherObject.centerX();
	}
	else
	{
		this.y = otherObject.bottom();
		this.x = otherObject.centerX() - this.textWidth / 2;
	}
}



AnimatedLabel.prototype.getWidth = function()
{
	return this.width;
}
AnimatedLabel.prototype.setHighlight = function(value)
{
	this.highlighted = value;
}
		
AnimatedLabel.prototype.createUndoDelete = function()
{
	return new UndoDeleteLabel(this.objectID, this.label, this.x, this.y, this.centering, this.labelColor, this.layer);
}
		
		
AnimatedLabel.prototype.centerX = function()
{
	if (this.centering)
	{
		return this.x;
	}
	else 
	{
		return this.x + this.textWidth; 
	}
	
}
	   
AnimatedLabel.prototype.centerY = function()
{
	if (this.centering)
	{
		return this.y;
	}
	else 
	{
		return this.y + 5; // 
	}
   
}
	   
AnimatedLabel.prototype.top = function()	   
{
	   if (this.centering)
	   {
		   return  this.y - 5; //TODO: Un-Hardwire
	   }
	   else 
	   {
			return this.y;   
	   }
}


AnimatedLabel.prototype.bottom = function()
{
   if (this.centering)
   {
	   return  this.y + 5; // TODO: + height / 2;
   }
   else 
   {
	   return  this.y + 10; // TODO: + hieght;
   }
}
	   
	   
AnimatedLabel.prototype.right = function()
{
   if (this.centering)
   {
	   return  this.x + this.textWidth / 2; // TODO: + width / 2;
   }
   else
   {
	   return  this.x + this.textWidth; // TODO: + width;
   }
}


AnimatedLabel.prototype.left = function()
{
   if (this.centering)
   {
	   return this. x - this.textWidth / 2;
   }
   else
   {
	   return  this.x; // TODO:  - a little?
   }
}

 AnimatedLabel.prototype.getTailPointerAttachPos = function(fromX, fromY, anchorPoint)
 {			 
	return this.getClosestCardinalPoint(fromX, fromY); 
 }

AnimatedLabel.prototype.getHeadPointerAttachPos = function (fromX, fromY) 
{
	return this.getClosestCardinalPoint(fromX, fromY);			
}

AnimatedLabel.prototype.setText = function(newText, textIndex, initialWidth)
{
	this.label = newText;
	if (initialWidth != undefined)
	{
		this.textWidth = initialWidth;
	}
}



function UndoDeleteLabel(id, lab, x, y, centered, color, l)
{
	this.objectID = id;
	this.posX = x;
	this.posY = y;
	this.nodeLabel = lab;
	this.labCentered = centered;
	this.labelColor = color;
	this.layer = l;
}

UndoDeleteLabel.prototype = new UndoBlock();
UndoDeleteLabel.prototype.constructor = UndoDeleteLabel;

UndoDeleteLabel.prototype.undoInitialStep = function(world)
{
	world.addLabelObject(this.objectID, this.nodeLabel, this.labCentered);
	world.setNodePosition(this.objectID, this.posX, this.posY);
	world.setForegroundColor(this.objectID, this.labelColor);
	world.setLayer(this.objectID, this.layer);
}

// Copyright 2011 David Galles, University of San Francisco. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without modification, are
// permitted provided that the following conditions are met:
//
// 1. Redistributions of source code must retain the above copyright notice, this list of
// conditions and the following disclaimer.
//
// 2. Redistributions in binary form must reproduce the above copyright notice, this list
// of conditions and the following disclaimer in the documentation and/or other materials
// provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY <COPYRIGHT HOLDER> ``AS IS'' AND ANY EXPRESS OR IMPLIED
// WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
// FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> OR
// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
// SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
// ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
// ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
// The views and conclusions contained in the software and documentation are those of the
// authors and should not be interpreted as representing official policies, either expressed
// or implied, of the University of San Francisco


var AnimatedCircle = function(objectID, objectLabel)
{
	this.objectID = objectID;
	this.label = objectLabel;
	this.radius = 20;
	this.thickness = 3;
	this.x = 0;
	this.y = 0;
	this.alpha = 1.0;
	this.addedToScene = true;
/*	this.foregroundColor  = '#007700';
	this.backgroundColor  = '#EEFFEE';
 */
}

AnimatedCircle.prototype = new AnimatedObject();
AnimatedCircle.prototype.constructor = AnimatedCircle;

AnimatedCircle.prototype.getTailPointerAttachPos = function(fromX, fromY, anchorPoint)
{
	return this.getHeadPointerAttachPos(fromX, fromY);	
}


AnimatedCircle.prototype.getWidth = function()
{
	return this.radius * 2;
}

AnimatedObject.prototype.setWidth = function(newWidth)
{
	this.radius = newWidth / 2;
}



AnimatedCircle.prototype.getHeadPointerAttachPos = function(fromX, fromY)
{
	var xVec = fromX - this.x;
	var yVec = fromY - this.y;
	var len  = Math.sqrt(xVec * xVec + yVec*yVec);
	if (len == 0)
	{
		return [this.x, this.y];
	}
	return [this.x+(xVec/len)*(this.radius), this.y +(yVec/len)*(this.radius)];
}

AnimatedCircle.prototype.draw = function(ctx)
{
	ctx.globalAlpha = this.alpha;

	if (this.highlighted)
	{
		ctx.fillStyle = "#ff0000";
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.radius + this.highlightDiff,0,Math.PI*2, true);
		ctx.closePath();
		ctx.fill();
	}
	
	
	ctx.fillStyle = this.backgroundColor;
	ctx.strokeStyle = this.foregroundColor;
	ctx.lineWidth = 1;
	ctx.beginPath();
	ctx.arc(this.x,this.y,this.radius,0,Math.PI*2, true);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	ctx.textAlign = 'center';
	ctx.font         = '10px sans-serif';
	ctx.textBaseline   = 'middle'; 
	ctx.lineWidth = 1;
	ctx.fillStyle = this.foregroundColor;
	
	var strList = this.label.split("\n");
	if (strList.length == 1)
	{
		ctx.fillText(this.label, this.x, this.y); 		
	}
	else if (strList.length % 2 == 0)
	{
		var i;
		var mid = strList.length / 2;
		for (i = 0; i < strList.length / 2; i++)
		{
			ctx.fillText(strList[mid - i - 1], this.x, this.y - (i + 0.5) * 12);
			ctx.fillText(strList[mid + i], this.x, this.y + (i + 0.5) * 12);
			
		}		
	}
	else
	{
		var mid = (strList.length - 1) / 2;
		var i;
		ctx.fillText(strList[mid], this.x, this.y);
		for (i = 0; i < mid; i++)
		{
			ctx.fillText(strList[mid - (i + 1)], this.x, this.y - (i + 1) * 12);			
			ctx.fillText(strList[mid + (i + 1)], this.x, this.y + (i + 1) * 12);			
		}
		
	}

}


AnimatedCircle.prototype.createUndoDelete = function()
{
	return new UndoDeleteCircle(this.objectID, this.label, this.x, this.y, this.foregroundColor, this.backgroundColor, this.layer);
}

		
function UndoDeleteCircle(id, lab, x, y, foregroundColor, backgroundColor, l)
{
	this.objectID = id;
	this.posX = x;
	this.posY = y;
	this.nodeLabel = lab;
	this.fgColor = foregroundColor;
	this.bgColor = backgroundColor;
	this.layer = l;
}
		
UndoDeleteCircle.prototype = new UndoBlock();
UndoDeleteCircle.prototype.constructor = UndoDeleteCircle;

UndoDeleteCircle.prototype.undoInitialStep = function(world)
{
	world.addCircleObject(this.objectID, this.nodeLabel);
	world.setNodePosition(this.objectID, this.posX, this.posY);
	world.setForegroundColor(this.objectID, this.fgColor);
	world.setBackgroundColor(this.objectID, this.bgColor);
	world.setLayer(this.objectID, this.layer);
}




// Copyright 2011 David Galles, University of San Francisco. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without modification, are
// permitted provided that the following conditions are met:
//
// 1. Redistributions of source code must retain the above copyright notice, this list of
// conditions and the following disclaimer.
//
// 2. Redistributions in binary form must reproduce the above copyright notice, this list
// of conditions and the following disclaimer in the documentation and/or other materials
// provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY <COPYRIGHT HOLDER> ``AS IS'' AND ANY EXPRESS OR IMPLIED
// WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
// FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> OR
// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
// SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
// ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
// ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
// The views and conclusions contained in the software and documentation are those of the
// authors and should not be interpreted as representing official policies, either expressed
// or implied, of the University of San Francisco

// Values for xJust / yJust:  "center", "left", "right", "top", "bottom"

AnimatedRectangle = function(id, val, wth, hgt,  xJust, yJust, fillColor, edgeColor)
{
	this.w = wth;
	this.h = hgt;
	this.xJustify = xJust;
	this.yJustify = yJust;
	this.label = val;
	this.labelColor = edgeColor
	
	this.backgroundColor = fillColor;
	this.foregroundColor = edgeColor;
	this.labelColor = this.foregroundColor;
	this.highlighted = false;
	this.objectID = id;
	this.nullPointer = false;
	this.alpha = 1.0;
	this.addedToScene = true;
	
}

AnimatedRectangle.prototype = new AnimatedObject();
AnimatedRectangle.prototype.constructor = AnimatedRectangle;

AnimatedRectangle.prototype.setNull = function(np)
{
	this.nullPointer = np;
}

AnimatedRectangle.prototype.getNull = function()
{
	return this.nullPointer;
}


AnimatedRectangle.prototype.left = function()
{
	if (this.xJustify == "left")
	{
		return  this.x;
	}
	else if (this.xJustify == "center")
	{
		return this.x - this.w / 2.0;   
	}
	else // (this.xJustify == "right")
	{
		return this.x - this.w;   
	}
	
}

AnimatedRectangle.prototype.centerX = function()
{
	if (this.xJustify == "center")
	{
		return this.x;
	}
	else if (this.xJustify == "left")
	{
		return this.x + this.w / 2.0;
	}
	else // (this.xJustify == "right")
	{
		return this.x - this.w / 2.0;
	}
}

AnimatedRectangle.prototype.centerY = function()
{
	if (this.yJustify == "center")
	{
		return this.y;
	}
	else if (this.yJustify == "top")
	{
		return this.y + this.h / 2.0;
	}
	else // (this.xJustify == "bottom")
	{
		return this.y - this.w / 2.0;
	}
	
}

AnimatedRectangle.prototype.top = function()
{
	if (this.yJustify == "top")
	{
		return  this.y;
	}
	else if (this.yJustify == "center")
	{
		return this.y - this.h / 2.0;   
	}
	else //(this.xJustify == "bottom")
	{
		return this.y - this.h;   
	}
}

AnimatedRectangle.prototype.bottom = function()
{
	if (this.yJustify == "top")
	{
		return  this.y + this.h;
	}
	else if (this.yJustify == "center")
	{
		return this.y + this.h / 2.0;   
	}
	else //(this.xJustify == "bottom")
	{
		return this.y;   
	}
}


AnimatedRectangle.prototype.right = function()
{
	if (this.xJustify == "left")
	{
		return  this.x + this.w;
	}
	else if (this.xJustify == "center")
	{
		return this.x + this.w / 2.0;   
	}
	else // (this.xJustify == "right")
	{
		return this.x;   
	}
}


AnimatedRectangle.prototype.getHeadPointerAttachPos = function(fromX, fromY)
{
	return this.getClosestCardinalPoint(fromX, fromY);			
}


AnimatedRectangle.prototype.setWidth = function(wdth)
{
	this.w = wdth;
}


AnimatedRectangle.prototype.setHeight = function(hght)
{
	this.h = hght;
}

AnimatedRectangle.prototype.getWidth = function()
{
	return this.w;
}

AnimatedRectangle.prototype.getHeight = function()
{
	return this.h;
}


// TODO:  Fix me!
AnimatedRectangle.prototype.draw = function(context)
{
	if (!this.addedToScene)
	{
		return;
	}
	
	var startX;
	var startY;
	var labelPosX;
	var labelPosY;
	
	context.globalAlpha = this.alpha;
	
	if (this.xJustify == "left")
	{
		startX = this.x;
		labelPosX = this.x + this.w / 2.0;
	}
	else if (this.xJustify == "center")
	{
		startX = this.x-this.w / 2.0;
		labelPosX = this.x;
		
	}
	else if (this.xJustify == "right")
	{
		startX = this.x-this.w;
		labelPosX = this.x - this.w / 2.0 
	}
	if (this.yJustify == "top")
	{
		startY = this.y;
		labelPosY = this.y + this.h / 2.0;
	}
	else if (this.yJustify == "center")
	{
		startY = this.y - this.h / 2.0;
		labelPosY = this.y;
		
	}
	else if (this.yJustify == "bottom")
	{
		startY = this.y - this.h;
		labelPosY = this.y - this.h / 2.0;
	}
	
	context.lineWidth = 1;
	
	if (this.highlighted)
	{
		context.strokeStyle = "#ff0000";
		context.fillStyle = "#ff0000";
		
		context.beginPath();
		context.moveTo(startX - this.highlightDiff,startY- this.highlightDiff);
		context.lineTo(startX+this.w + this.highlightDiff,startY- this.highlightDiff);
		context.lineTo(startX+this.w+ this.highlightDiff,startY+this.h + this.highlightDiff);
		context.lineTo(startX - this.highlightDiff,startY+this.h + this.highlightDiff);
		context.lineTo(startX - this.highlightDiff,startY - this.highlightDiff);				
		context.closePath();
		context.stroke();
		context.fill();
		
	}
	context.strokeStyle = this.foregroundColor;
	context.fillStyle = this.backgroundColor;
	
	context.beginPath();
	context.moveTo(startX ,startY);
	context.lineTo(startX + this.w, startY);
	context.lineTo(startX + this.w, startY + this.h);
	context.lineTo(startX, startY + this.h);
	context.lineTo(startX, startY);
	context.closePath();
	context.stroke();
	context.fill();
	
	if (this.nullPointer)
	{
		context.beginPath();
		context.moveTo(startX ,startY);
		context.lineTo(startX + this.w, startY + this.h);
		context.closePath();
		context.stroke();
	}
	
	context.fillStyle = this.labelColor;
	
	context.textAlign = 'center';
	context.font         = '10px sans-serif';
	context.textBaseline   = 'middle'; 
	context.lineWidth = 1;
	context.fillText(this.label, this.x, this.y); 
	
	
	
}

AnimatedRectangle.prototype.setText = function(newText, textIndex)
{
	this.label = newText;
	// TODO:  setting text position?
}


AnimatedRectangle.prototype.createUndoDelete = function() 
{
	// TODO: Add color?
	return new UndoDeleteRectangle(this.objectID, this.label, this.x, this.y, this.w, this.h, this.xJustify, this.yJustify, this.backgroundColor, this.foregroundColor, this.highlighted, this.layer);
}

AnimatedRectangle.prototype.setHighlight = function(value)
{
	this.highlighted = value;
}



function UndoDeleteRectangle(id, lab, x, y, w, h, xJust, yJust, bgColor, fgColor, highlight, lay)
{
	this.objectID = id;
	this.posX = x;
	this.posY = y;
	this.width = w;
	this.height = h;
	this.xJustify = xJust;
	this.yJustify = yJust;
	this.backgroundColor= bgColor;
	this.foregroundColor = fgColor;
	this.nodeLabel = lab;
	this.layer = lay;
	this.highlighted = highlight;
}

UndoDeleteRectangle.prototype = new UndoBlock();
UndoDeleteRectangle.prototype.constructor = UndoDeleteRectangle;


UndoDeleteRectangle.prototype.undoInitialStep = function(world)
{
	world.addRectangleObject(this.objectID, this.nodeLabel, this.width, this.height, this.xJustify, this.yJustify, this.backgroundColor, this.foregroundColor);
	world.setNodePosition(this.objectID, this.posX, this.posY);
	world.setLayer(this.objectID, this.layer);
	world.setHighlight(this.objectID, this.highlighted);
}



// Copyright 2011 David Galles, University of San Francisco. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without modification, are
// permitted provided that the following conditions are met:
//
// 1. Redistributions of source code must retain the above copyright notice, this list of
// conditions and the following disclaimer.
//
// 2. Redistributions in binary form must reproduce the above copyright notice, this list
// of conditions and the following disclaimer in the documentation and/or other materials
// provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY <COPYRIGHT HOLDER> ``AS IS'' AND ANY EXPRESS OR IMPLIED
// WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
// FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> OR
// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
// SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
// ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
// ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
// The views and conclusions contained in the software and documentation are those of the
// authors and should not be interpreted as representing official policies, either expressed
// or implied, of the University of San Francisco

function AnimatedLinkedList(id, val, wth, hgt, linkPer, verticalOrientation, linkPosEnd, numLab, fillColor, edgeColor)
{
	this.init(id, val, wth, hgt, linkPer, verticalOrientation, linkPosEnd, numLab, fillColor, edgeColor);
}

AnimatedLinkedList.prototype = new AnimatedObject();
AnimatedLinkedList.prototype.constructor = AnimatedLinkedList;
AnimatedLinkedList.superclass = AnimatedObject.prototype;


AnimatedLinkedList.prototype.init = function(id, val, wth, hgt, linkPer, verticalOrientation, linkPosEnd, numLab, fillColor, edgeColor)
{
	
	AnimatedLinkedList.superclass.init.call(this);

	this.w = wth;
	this.h = hgt;
	this.backgroundColor = fillColor;
	this.foregroundColor = edgeColor;
	
	this.vertical = verticalOrientation;
	this.linkPositionEnd = linkPosEnd;
	this.linkPercent = linkPer;
	
	this.numLabels = numLab;
	
	this.labels = [];
	this.labelPosX = [];
	this.labelPosY = [];
	this.labelColors = [];
	this.nullPointer = false;
	
	this.currentHeightDif = 6;
	this.maxHeightDiff = 5;
	this.minHeightDiff = 3;
	
	
	
	for (var i = 0; i < this.numLabels; i++)
	{
		this.labels[i] = "";
		this.labelPosX[i] = 0;
		this.labelPosY[i] = 0;
		this.labelColors[i] = this.foregroundColor;
	}
	
	this.labels[0] = val;
	this.highlighted = false;
	this.objectID = id;	
}

		
		
AnimatedLinkedList.prototype.left = function()
{
	if (this.vertical)
	{
		return this.x - this.w / 2.0; 
	}
	else if (this.linkPositionEnd)
	{
		return this.x - ((this.w * (1 - this.linkPercent)) / 2);
	}
	else
	{
		return this.x  - (this.w * (this.linkPercent + 1)) / 2;
	}
}
		

AnimatedLinkedList.prototype.setNull = function(np)
{
	if (this.nullPointer != np)
	{		   
		this.nullPointer = np;
	}
	
}

AnimatedLinkedList.prototype.getNull = function()
{
	return this.nullPointer;   
}

AnimatedLinkedList.prototype.right = function()
{
	if (this.vertical)
	{
		return this.x + this.w / 2.0; 
	}
	else if (this.linkPositionEnd)
	{
		return this.x + ((this.w * (this.linkPercent + 1)) / 2);
	}
	else
	{
		return this.x + (this.w * (1 - this.linkPercent)) / 2;
	}
} 

AnimatedLinkedList.prototype.top = function()
{
	if (!this.vertical)
	{
		return this.y - this.h / 2.0; 			   
	}
	else if (this.linkPositionEnd)
	{
		return this.y - (this.h * (1 -this.linkPercent)) / 2;   
	}
	else
	{
		return this.y - (this.h * (1 + this.linkPercent)) / 2;   
	}
}

AnimatedLinkedList.prototype.bottom = function()
{
	if (!this.vertical)
	{
		return this.y + this.h / 2.0; 			   
	}
	else if (this.linkPositionEnd)
	{
		return this.y + (this.h * (1 +this.linkPercent)) / 2;   
	}
	else
	{
		return this.y + (this.h * (1 - this.linkPercent)) / 2;   
	}
}


// TODO: Should we move this to the draw function, and save the
//       space of the arrays?  Bit of a leftover from the Flash code,
//       which did drawing differently
AnimatedLinkedList.prototype.resetTextPosition = function()
{
	if (this.vertical)
	{
		this.labelPosX[0] = this.x;
		
		this.labelPosY[0] = this.y + this.h * (1-this.linkPercent)/2 *(1/this.numLabels - 1);				
		//				labelPosY[0] = -height * (1-linkPercent) / 2 + height*(1-linkPercent)/2*numLabels;
		for (var i = 1; i < this.numLabels; i++)
		{
			this.labelPosY[i] = this.labelPosY[i-1] +  this.h*(1-this.linkPercent)/this.numLabels;
			this.labelPosX[i] = this.x;
		}
	}
	else
	{
		this.labelPosY[0] = this.y;
		this.labelPosX[0] = this.x +  this.w * (1-this.linkPercent)/2*(1/this.numLabels - 1);
		for (var i = 1; i < this.numLabels; i++)
		{
			this.labelPosY[i] = this.y;
			this.labelPosX[i] = this.labelPosX[i-1] +  this.w*(1-this.linkPercent)/this.numLabels;
		}				
	}
	
}


AnimatedLinkedList.prototype.getTailPointerAttachPos = function(fromX, fromY, anchor)
{
	if (this.vertical && this.linkPositionEnd)
	{
		return [this.x, this.y + this.h / 2.0];				
	}
	else if (this.vertical && !this.linkPositionEnd)
	{
		return [this.x, this.y - this.h / 2.0];							
	}
	else if  (!this.vertical && this.linkPositionEnd)
	{
		return [this.x + this.w / 2.0, this.y];								
	}
	else // (!this.vertical && !this.linkPositionEnd)
	{
		return [this.x - this.w / 2.0, this.y];								
	}
}


AnimatedLinkedList.prototype.getHeadPointerAttachPos = function(fromX, fromY) 
{
	return this.getClosestCardinalPoint(fromX, fromY);			
}


AnimatedLinkedList.prototype.setWidth = function(wdth)
{
	this.w = wdth;
	this.resetTextPosition();
}


AnimatedLinkedList.prototype.setHeight = function(hght)
{
	this.h = hght;
	this.resetTextPosition();
}

AnimatedLinkedList.prototype.getWidth = function()
{
	return this.w;
}

AnimatedLinkedList.prototype.getHeight = function()
{
	return this.h;
}

AnimatedLinkedList.prototype.draw = function(context)
{
	var startX;
	var startY;
	
	startX = this.left();
	startY = this.top();
	
	if (this.highlighted)
	{
		context.strokeStyle = "#ff0000";
		context.fillStyle = "#ff0000";
		
		context.beginPath();
		context.moveTo(startX - this.highlightDiff,startY- this.highlightDiff);
		context.lineTo(startX+this.w + this.highlightDiff,startY- this.highlightDiff);
		context.lineTo(startX+this.w+ this.highlightDiff,startY+this.h + this.highlightDiff);
		context.lineTo(startX - this.highlightDiff,startY+this.h + this.highlightDiff);
		context.lineTo(startX - this.highlightDiff,startY - this.highlightDiff);				
		context.closePath();
		context.stroke();
		context.fill();
	}
	context.strokeStyle = this.foregroundColor;
	context.fillStyle = this.backgroundColor;
	
	context.beginPath();
	context.moveTo(startX ,startY);
	context.lineTo(startX + this.w, startY);
	context.lineTo(startX + this.w, startY + this.h);
	context.lineTo(startX, startY + this.h);
	context.lineTo(startX, startY);
	context.closePath();
	context.stroke();
	context.fill();
		
	var i;
	if (this.vertical)
	{
		startX = this.left();
		for (i= 1; i < this.numLabels; i++)
		{
			//TODO: this doesn't look right ...
			startY = this.y + this.h*(1-this.linkPercent)*(i / this.numLabels - 1/2);
			
			context.beginPath();
			context.moveTo(startX ,startY);
			context.lineTo(startX + this.w, startY);
			context.closePath();
			context.stroke();
		}
	}
	else
	{
		startY = this.top();
		for (i = 1; i < this.numLabels; i++)
		{
			startX = this.x + this.w*(1-this.linkPercent)*(i / this.numLabels - 1/2);
			context.beginPath();
			context.moveTo(startX ,startY);
			context.lineTo(startX, startY + this.h);
			context.closePath();
			context.stroke();
		}			
	}
	
	if (this.vertical && this.linkPositionEnd)
	{
		startX = this.left();
		startY = this.bottom() - this.h * this.linkPercent;

		
		context.beginPath();
		context.moveTo(startX + this.w ,startY);
		context.lineTo(startX, startY);
		if (this.nullPointer)
		{	
			context.lineTo(this.startX + this.w, this.bottom());
		}
		context.closePath();
		context.stroke();		
	}
	else if (this.vertical && !this.linkPositionEnd)
	{
		startX = this.left();
		startY = this.top() + this.h * this.linkPercent;

		context.beginPath();
		context.moveTo(startX + this.w ,startY);
		context.lineTo(startX, startY);
		if (this.nullPointer)
		{	
			context.lineTo(startX + this.w, this.top());
		}
		context.closePath();
		context.stroke();	
		
	}
	else if  (!this.vertical && this.linkPositionEnd)
	{
		startX = this.right() - this.w * this.linkPercent;
		startY = this.top();
		
		context.beginPath();
		context.moveTo(startX, startY + this.h);
		context.lineTo(startX, startY);
		if (this.nullPointer)
		{	
			context.lineTo(this.right(), startY + this.h);
		}
		context.closePath();
		context.stroke();		
		
	}
	else // (!vertical && !linkPositionEnd)
	{
		startX = this.left()  + this.w * this.linkPercent;
		startY = this.top() ;
		
		context.beginPath();
		context.moveTo(startX, startY + this.h);
		context.lineTo(startX, startY);
		if (this.nullPointer)
		{	
			context.lineTo(this.left(), startY);
		}
		context.closePath();
		context.stroke();	
	}
	
	
	context.textAlign = 'center';
	context.font         = '10px sans-serif';
	context.textBaseline   = 'middle'; 
	context.lineWidth = 1;
	
	
	this.resetTextPosition();
	for (i = 0; i < this.numLabels; i++)
	{
		context.fillStyle = this.labelColors[i];
		context.fillText(this.labels[i], this.labelPosX[i], this.labelPosY[i]); 
	}
}



AnimatedLinkedList.prototype.setTextColor = function(color, textIndex)
{
	
	this.labelColors[textIndex] = color;
}



AnimatedLinkedList.prototype.getTextColor = function(textIndex)
{
	return this.labelColors[textIndex];
}



AnimatedLinkedList.prototype.getText = function(index)
{
	return this.labels[index];  
}

AnimatedLinkedList.prototype.setText = function(newText, textIndex)
{
	this.labels[textIndex] = newText;
	this.resetTextPosition();
}







AnimatedLinkedList.prototype.createUndoDelete = function() 
{		
	return new UndoDeleteLinkedList(this.objectID, this.numLabels, this.labels, this.x, this.y, this.w, this.h, this.linkPercent,
									this.linkPositionEnd, this.vertical, this.labelColors, this.backgroundColor, this.foregroundColor, 
									this.layer, this.nullPointer);
}

AnimatedLinkedList.prototype.setHighlight = function(value)
{
	if (value != this.highlighted)
	{
		this.highlighted = value;
	}
}




function UndoDeleteLinkedList(id, numlab, lab, x, y, w, h, linkper, posEnd, vert, labColors, bgColor, fgColor, l, np)
{
	this.objectID = id;
	this.posX = x;
	this.posY = y;
	this.width = w;
	this.height = h;
	this.backgroundColor= bgColor;
	this.foregroundColor = fgColor;
	this.labels = lab;
	this.linkPercent = linkper;
	this.verticalOrentation = vert;
	this.linkAtEnd = posEnd;
	this.labelColors = labColors
	this.layer = l;
	this.numLabels = numlab;
	this.nullPointer = np;
}

UndoDeleteLinkedList.prototype = new UndoBlock();
UndoDeleteLinkedList.prototype.constructor = UndoDeleteLinkedList;



UndoDeleteLinkedList.prototype.undoInitialStep =function(world)
{
	world.addLinkedListObject(this.objectID,this.labels[0], this.width, this.height, this.linkPercent, this.verticalOrentation, this.linkAtEnd, this.numLabels, this.backgroundColor, this.foregroundColor);
	world.setNodePosition(this.objectID, this.posX, this.posY);
	world.setLayer(this.objectID, this.layer);
	world.setNull(this.objectID, this.nullPointer);
	for (var i = 0; i < this.numLabels; i++)
	{
		world.setText(this.objectID, this.labels[i], i);
		world.setTextColor(this.objectID, this.labelColors[i], i);
	}
}
// Copyright 2011 David Galles, University of San Francisco. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without modification, are
// permitted provided that the following conditions are met:
//
// 1. Redistributions of source code must retain the above copyright notice, this list of
// conditions and the following disclaimer.
//
// 2. Redistributions in binary form must reproduce the above copyright notice, this list
// of conditions and the following disclaimer in the documentation and/or other materials
// provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY <COPYRIGHT HOLDER> ``AS IS'' AND ANY EXPRESS OR IMPLIED
// WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
// FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> OR
// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
// SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
// ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
// ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
// The views and conclusions contained in the software and documentation are those of the
// authors and should not be interpreted as representing official policies, either expressed
// or implied, of the University of San Francisco

// "Class" animatedCircle


var HighlightCircle = function(objectID, color, radius)
{
	this.objectID = objectID;
	this.radius = radius;
	this.thickness = 4;
	this.foregroundColor = color;
	this.x = 0;
	this.y = 0;
	this.alpha = 1;
}

HighlightCircle.prototype = new AnimatedObject();
HighlightCircle.prototype.constructor = HighlightCircle;


HighlightCircle.prototype.draw = function(ctx)
{
	ctx.globalAlpha = this.alpha;
	ctx.strokeStyle = this.foregroundColor;
	ctx.lineWidth = this.thickness;
	ctx.beginPath();
	ctx.arc(this.x,this.y,this.radius,0,Math.PI*2, true);
	ctx.closePath();
	ctx.stroke();
}


HighlightCircle.prototype.createUndoDelete = function()
{
	return new UndoDeleteHighlightCircle(this.objectID, this.x, this.y, this.foregroundColor, this.radius, this.layer, this.alpha);
}

		
function UndoDeleteHighlightCircle(objectID, x, y, circleColor, r, layer, alpha)
{
	this.objectID = objectID;
	this.x = x;
	this.y = y;
	this.color = circleColor;
	this.r = r;
	this.layer = layer;
	this.alpha = alpha
}
		
UndoDeleteHighlightCircle.prototype = new UndoBlock();
UndoDeleteHighlightCircle.prototype.constructor = UndoDeleteHighlightCircle;

UndoDeleteHighlightCircle.prototype.undoInitialStep = function(world)
{
	world.addHighlightCircleObject(this.objectID, this.color, this.r);
	world.setLayer(this.objectID, this.layer)
	world.setNodePosition(this.objectID, this.x, this.y);
	world.setAlpha(this.objectID, this.alpha)
}




// Copyright 2011 David Galles, University of San Francisco. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without modification, are
// permitted provided that the following conditions are met:
//
// 1. Redistributions of source code must retain the above copyright notice, this list of
// conditions and the following disclaimer.
//
// 2. Redistributions in binary form must reproduce the above copyright notice, this list
// of conditions and the following disclaimer in the documentation and/or other materials
// provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY <COPYRIGHT HOLDER> ``AS IS'' AND ANY EXPRESS OR IMPLIED
// WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
// FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> OR
// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
// SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
// ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
// ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
// The views and conclusions contained in the software and documentation are those of the
// authors and should not be interpreted as representing official policies, either expressed
// or implied, of the University of San Francisco


// This class is somewhat poorly named -- it handles links between vertices in graphs,
//  pointers in linked lists, and so on. 


var LINE_maxHeightDiff = 5;
var LINE_minHeightDiff = 3;
var LINE_range= LINE_maxHeightDiff - LINE_minHeightDiff + 1;
var LINE_highlightDiff = 3;

	
function Line(n1, n2, color, cv, d, weight, anchorIndex)
{
	this.arrowHeight = 8;
	this. arrowWidth = 4;

	this.Node1 = n1;
	this.Node2 = n2;
	this.Dirty = false;
	this.directed = d;
	this.edgeColor = color;
	this.edgeLabel = weight;
	this.highlighted = false;
	this.addedToScene = true;
	this.anchorPoint = anchorIndex;
	this.highlightDiff = 0;
	this.curve = cv;

	this.alpha = 1.0;
	this.color = function color()
	{
		return this.edgeColor;   
	}
	   
	this.setColor = function(newColor)
	{
		this.edgeColor = newColor;
		Dirty = true;
	}
	   
	this.setHighlight = function(highlightVal)
	{
		this.highlighted = highlightVal;   
	}
		   
	this.pulseHighlight = function(frameNum)
	{
	   if (this.highlighted)
	   {
		   var frameMod = frameNum / 14.0;
		   var delta  = Math.abs((frameMod) % (2 * LINE_range  - 2) - LINE_range + 1)
		   this.highlightDiff =  delta + LINE_minHeightDiff;
		   Dirty = true;			   
	   }
	}
	   
	   
	this.hasNode = function(n)
	{
		return ((this.Node1 == n) || (this.Node2 == n));   
	}
	   
	   
	this.createUndoDisconnect  = function()
        {
		return new UndoConnect(this.Node1.objectID, this.Node2.objectID, true, this.edgeColor, this.directed, this.curve, this.edgeLabel, this.anchorPoint);
	}
	   
	   
	this.sign = function(n)
	{
	   if (n > 0)
	   {
		   return 1;
	   }
	   else
	   {
		   return -1;
	   }
	}
	   
	   
	this.drawArrow = function(pensize, color, context)
	{		
		context.strokeStyle = color;
		context.fillStyle = color;
		context.lineWidth = pensize;
		var fromPos = this.Node1.getTailPointerAttachPos(this.Node2.x, this.Node2.y, this.anchorPoint);
		var toPos = this.Node2.getHeadPointerAttachPos(this.Node1.x, this.Node1.y);

		var fromPos = this.Node1.getTailPointerAttachPos(this.Node2.x, this.Node2.y, this.anchorPoint);
		var toPos = this.Node2.getHeadPointerAttachPos(this.Node1.x, this.Node1.y);

		var deltaX = toPos[0] - fromPos[0];
		var deltaY = toPos[1] - fromPos[1];
		var midX = (deltaX) / 2.0 + fromPos[0];
		var midY = (deltaY) / 2.0 + fromPos[1];
		var controlX = midX - deltaY * this.curve;

		var controlY = midY + deltaX * this.curve;

		context.beginPath();
		context.moveTo(fromPos[0], fromPos[1]);
		context.quadraticCurveTo(controlX, controlY, toPos[0], toPos[1]);
		context.stroke();
		//context.closePath();
			
		// Position of the edge label:  First, we will place it right along the
		// middle of the curve (or the middle of the line, for curve == 0)
		var labelPosX = 0.25* fromPos[0] + 0.5*controlX + 0.25*toPos[0]; 
		var labelPosY =  0.25* fromPos[1] + 0.5*controlY + 0.25*toPos[1]; 
			
		// Next, we push the edge position label out just a little in the direction of
		// the curve, so that the label doesn't intersect the cuve (as long as the label
		// is only a few characters, that is)
		var midLen = Math.sqrt(deltaY*deltaY + deltaX*deltaX);
		if (midLen != 0)
		{
			labelPosX +=  (- deltaY * this.sign(this.curve))  / midLen * 10 
			labelPosY += ( deltaX * this.sign(this.curve))  / midLen * 10  
		}
			


		context.textAlign = 'center';
		context.font         = '10px sans-serif';
		context.textBaseline   = 'middle'; 
		context.fillText(this.edgeLabel, labelPosX, labelPosY);

		if (this.directed)
		{
			var xVec = controlX - toPos[0];
			var yVec = controlY - toPos[1];
			var len = Math.sqrt(xVec * xVec + yVec*yVec);
		
			if (len > 0)
			{
				xVec = xVec / len
				yVec = yVec / len;
				
				context.beginPath();
				context.moveTo(toPos[0], toPos[1]);
				context.lineTo(toPos[0] + xVec*this.arrowHeight - yVec*this.arrowWidth, toPos[1] + yVec*this.arrowHeight + xVec*this.arrowWidth);
				context.lineTo(toPos[0] + xVec*this.arrowHeight + yVec*this.arrowWidth, toPos[1] + yVec*this.arrowHeight - xVec*this.arrowWidth);
				context.lineTo(toPos[0], toPos[1]);
				context.closePath();
				context.stroke();
				context.fill();
			}

		}
		   
	   }
	   
	   
	   this.draw = function(ctx)
	   {
		   if (!this.addedToScene)
		   {
			   return;   
		   }
		   ctx.globalAlpha = this.alpha;

			if (this.highlighted)
				this.drawArrow(this.highlightDiff, "#FF0000", ctx);
			this.drawArrow(1, this.edgeColor, ctx);
	   }
	   
	   
}
	


function UndoConnect(from, to, createConnection, edgeColor, isDirected, cv, lab, anch)
{
	this.fromID = from;
	this.toID = to;
	this.connect = createConnection;
	this.color = edgeColor;
	this.directed = isDirected;
	this.curve = cv;
	this.edgeLabel = lab;
	this.anchorPoint = anch;
}


UndoConnect.prototype.undoInitialStep = function(world)
{
	if (this.connect)
	{
		world.connectEdge(this.fromID, this.toID, this.color, this.curve, this.directed, this.edgeLabel,this.anchorPoint);
	}
	else
	{
		world.disconnect(this.fromID,this.toID);
	}
}


UndoConnect.prototype.addUndoAnimation = function(animationList)
{
	return false;
}
// Copyright 2011 David Galles, University of San Francisco. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without modification, are
// permitted provided that the following conditions are met:
//
// 1. Redistributions of source code must retain the above copyright notice, this list of
// conditions and the following disclaimer.
//
// 2. Redistributions in binary form must reproduce the above copyright notice, this list
// of conditions and the following disclaimer in the documentation and/or other materials
// provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY <COPYRIGHT HOLDER> ``AS IS'' AND ANY EXPRESS OR IMPLIED
// WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
// FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> OR
// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
// SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
// ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
// ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
// The views and conclusions contained in the software and documentation are those of the
// authors and should not be interpreted as representing official policies, either expressed
// or implied, of the University of San Francisco


// Object Manager
//
// Manage all of our animated objects.  Control any animated object should occur through
// this interface (not language enforced, because enforcing such things in Javascript is 
// problematic.)
//
// This class is only accessed through:
//
//  AnimationMain
//  Undo objects (which are themselves controlled by AnimationMain


// TODO: 
//       1.  Add proper throws for all error conditions (perhaps guarded by
//           an assert-like structure that can be turned off for production?)
//       2.  Refactor this code so that it uses the same object syntax (with 
//           prototypes) as te rest of the code.  (low priority)
function ObjectManager()
{
	this.Nodes = [];
	this.Edges = [];
	this.BackEdges = [];
	this.activeLayers = [];
	this.activeLayers[0] = true;
	this.ctx = document.getElementById('canvas').getContext('2d');
	this.framenum = 0;
	this.width = 0;
	this.height = 0;
	this.statusReport = new AnimatedLabel(-1, "XXX", false, 30);
	this.statusReport.x = 30;
	
	this.draw = function()
	{
		this.framenum++;
		if (this.framenum > 1000)
			this.framenum = 0;
		
		this.ctx.clearRect(0,0,this.width,this.height); // clear canvas
		this.statusReport.y = this.height - 15;
		
		var i;
		var j;
		for (i = 0; i < this.Nodes.length; i++)
		{
			if (this.Nodes[i] != null && !this.Nodes[i].highlighted && this.Nodes[i].addedToScene && !this.Nodes[i].alwaysOnTop)
			{
				this.Nodes[i].draw(this.ctx);	
			}
		}
		for (i = 0; i < this.Nodes.length; i++)
		{
			if (this.Nodes[i] != null && (this.Nodes[i].highlighted && !this.Nodes[i].alwaysOnTop) && this.Nodes[i].addedToScene)
			{
				this.Nodes[i].pulseHighlight(this.framenum);
				this.Nodes[i].draw(this.ctx);	
			}
		}
		
		for (i = 0; i < this.Nodes.length; i++)
		{
			if (this.Nodes[i] != null && this.Nodes[i].alwaysOnTop && this.Nodes[i].addedToScene)
			{
				this.Nodes[i].pulseHighlight(this.framenum);
				this.Nodes[i].draw(this.ctx);	
			}
		}
		
		
		for (i = 0; i < this.Edges.length; i++)
		{
			if (this.Edges[i] != null)
			{
				for (j = 0; j < this.Edges[i].length; j++)
				{
					if (this.Edges[i][j].addedToScene)
					{
						this.Edges[i][j].pulseHighlight(this.framenum);	
						this.Edges[i][j].draw(this.ctx);	
					}
					
				}
				
			}
		}
		this.statusReport.draw(this.ctx);
		
	}
	
	this.update = function ()
	{
		
		
	}
	
	
	this.setLayers = function(shown,layers)
	{
		for (var i = 0; i < layers.length; i++)
		{
			this.activeLayers[layers[i]] = shown;
		}
		this.resetLayers();
		
	}

	
	this.addHighlightCircleObject = function(objectID, objectColor, radius)
	{
		if (this.Nodes[objectID] != null && this.Nodes[objectID] != undefined)
		{
  	            throw "addHighlightCircleObject:Object with same ID (" + String(objectID) + ") already Exists!"
		}
		var newNode = new HighlightCircle(objectID, objectColor, radius)
		this.Nodes[objectID] = newNode;		
	}
	
	this.setEdgeAlpha = function(fromID, toID, alphaVal)
	{
		var oldAlpha = 1.0; 
		if (this.Edges[fromID] != null &&
			this.Edges[fromID] != undefined)
		{
			var len = this.Edges[fromID].length;
			for (var i = len - 1; i >= 0; i--)
			{
				if (this.Edges[fromID][i] != null &&
					this.Edges[fromID][i] != undefined &&
					this.Edges[fromID][i].Node2 == this.Nodes[toID])
				{
					oldAlpha = this.Edges[fromID][i].alpha
					this.Edges[fromID][i].alpha = alphaVal;		
				}
			}
		}	
		return oldAlpha;
		
	}
	
	this.setAlpha = function(nodeID, alphaVal) 
	{
		if (this.Nodes[nodeID] != null && this.Nodes[nodeID] != undefined)
		{
			this.Nodes[nodeID].setAlpha(alphaVal);
		}
	}
	
	this.getAlpha = function(nodeID)
	{
		if (this.Nodes[nodeID] != null && this.Nodes[nodeID] != undefined)
		{
			return this.Nodes[nodeID].getAlpha();
		}
		else
		{
			return -1;
		}
	}
	
	this.getTextColor = function(nodeID, index)
	{
		if (this.Nodes[nodeID] != null && this.Nodes[nodeID] != undefined)
		{
			return this.Nodes[nodeID].getTextColor(index);
		}
		else
		{
			return "#000000";
		}
			
	}
	
	this.setTextColor = function(nodeID, color, index)
	{
		if (this.Nodes[nodeID] != null && this.Nodes[nodeID] != undefined)
		{
			this.Nodes[nodeID].setTextColor(color, index);
		}
	}
	
	
	
	this.setAllLayers = function(layers)
	{
		this.activeLayers = [];
		for(var i = 0; i < layers.length; i++)
		{
			this.activeLayers[layers[i]] = true;
		}
		this.resetLayers();
	}
	
	this.resetLayers = function()
	{
		var i
		for (i = 0; i <this.Nodes.length; i++)
		{
			if (this.Nodes[i] != null && this.Nodes[i] != undefined)
			{
				this.Nodes[i].addedToScene = this.activeLayers[this.Nodes[i].layer] == true;
			}
		}
		for (i = this.Edges.length - 1; i >= 0; i--)
		{
		    if (this.Edges[i] != null && this.Edges[i] != undefined)
			{
				for (var j = 0; j < this.Edges[i].length; j++)
				{
					if (this.Edges[i][j] != null && this.Edges[i][j] != undefined)
					{
							this.Edges[i][j].addedToScene =
								this.activeLayers[this.Edges[i][j].Node1.layer] == true &&
								this.activeLayers[this.Edges[i][j].Node2.layer] == true;
					}
					
				}
				
			}
			
		}
		
	}
	
	
	
	this.setLayer = function(objectID, layer)
	{
		if (this.Nodes[objectID] != null && this.Nodes[objectID] != undefined)
		{
			this.Nodes[objectID].layer = layer;
			if (this.activeLayers[layer])
			{
				this.Nodes[objectID].addedToScene = true;
			}
			else
			{
				this.Nodes[objectID].addedToScene = false;
			}
			if (this.Edges[objectID] != null && this.Edges[objectID] != undefined)
			{
				for (var i = 0; i < this.Edges[objectID].length; i++)
				{
					var nextEdge = this.Edges[objectID][i];
					if (nextEdge != null && nextEdge != undefined)
					{
						nextEdge.addedToScene = ((nextEdge.Node1.addedToScene) &&
												(nextEdge.Node2.addedToScene));
						
					}
				}
			}
			if (this.BackEdges[objectID] != null && this.BackEdges[objectID] != undefined)
			{
				for (var i = 0; i < this.BackEdges[objectID].length; i++)
				{
					var nextEdge = this.BackEdges[objectID][i];
					if (nextEdge != null && nextEdge != undefined)
					{
						nextEdge.addedToScene = ((nextEdge.Node1.addedToScene) &&
												 (nextEdge.Node2.addedToScene));
						
					}
				}
			}			
		}
	}
	
	this.clearAllObjects = function()
	{
		this.Nodes = [];
		this.Edges = [];
		this.BackEdges = [];
	}
	
	
	this.setForegroundColor = function(objectID, color)
	{
		if (this.Nodes[objectID] != null && this.Nodes[objectID] != undefined)
		{
			this.Nodes[objectID].setForegroundColor(color);
			
		}
	}
	
	this.setBackgroundColor = function(objectID, color)
	{
		if (this.Nodes[objectID] != null)
		{
			this.Nodes[objectID].setBackgroundColor(color);
			
		}
	}
	
	this.setHighlight = function(nodeID, val)
	{
		if (this.Nodes[nodeID] == null  || this.Nodes[nodeID] == undefined)
		{
			// TODO:  Error here?
			return;
		}
		this.Nodes[nodeID].setHighlight(val);
	}
	
	
	this.getHighlight = function(nodeID)
	{
		if (this.Nodes[nodeID] == null  || this.Nodes[nodeID] == undefined)
		{
			// TODO:  Error here?
			return false;
		}
		return this.Nodes[nodeID].getHighlight();
	}
	
	this.setWidth = function(nodeID, val)
	{
		if (this.Nodes[nodeID] == null  || this.Nodes[nodeID] == undefined)
		{
			// TODO:  Error here?
			return;
		}
		this.Nodes[nodeID].setWidth(val);
	}
	
	this.setHeight = function(nodeID, val)
	{
		if (this.Nodes[nodeID] == null  || this.Nodes[nodeID] == undefined)
		{
			// TODO:  Error here?
			return;
		}
		this.Nodes[nodeID].setHeight(val);
	}
	
	
	this.getHeight = function(nodeID)
	{
		if (this.Nodes[nodeID] == null  || this.Nodes[nodeID] == undefined)
		{
			// TODO:  Error here?
			return -1;
		}
		return this.Nodes[nodeID].getHeight();
	}
	
	this.getWidth = function(nodeID)
	{
		if (this.Nodes[nodeID] == null  || this.Nodes[nodeID] == undefined)
		{
			// TODO:  Error here?
			return -1;
		}
		return this.Nodes[nodeID].getWidth();
	}
	
	this.backgroundColor = function(objectID)
	{
		if (this.Nodes[objectID] != null)
		{
			return this.Nodes[objectID].backgroundColor;
		}
		else
		{
			return '#000000';
		}
	}
	
	this.foregroundColor = function(objectID)
	{
		if (this.Nodes[objectID] != null)
		{
			return this.Nodes[objectID].foregroundColor;
		}
		else
		{
			return '#000000';
		}
	}
	
			
	this.disconnect = function(objectIDfrom,objectIDto)
	{
		var undo = null;
		var i;
		if (this.Edges[objectIDfrom] != null)
		{
			var len = this.Edges[objectIDfrom].length;
			for (i = len - 1; i >= 0; i--)
			{
				if (this.Edges[objectIDfrom][i] != null && this.Edges[objectIDfrom][i].Node2 == this.Nodes[objectIDto])
				{
					var deleted = this.Edges[objectIDfrom][i];
					undo = deleted.createUndoDisconnect();
					this.Edges[objectIDfrom][i] = this.Edges[objectIDfrom][len - 1];
					len -= 1;
					this.Edges[objectIDfrom].pop();
				}
			}
		}
		if (this.BackEdges[objectIDto] != null)
		{
			len = this.BackEdges[objectIDto].length;
			for (i = len - 1; i >= 0; i--)
			{
				if (this.BackEdges[objectIDto][i] != null && this.BackEdges[objectIDto][i].Node1 == this.Nodes[objectIDfrom])
				{
					deleted = this.BackEdges[objectIDto][i];
					// Note:  Don't need to remove this child, did it above on the regular edge
					this.BackEdges[objectIDto][i] = this.BackEdges[objectIDto][len - 1];
					len -= 1;
					this.BackEdges[objectIDto].pop();
				}
			}
		}
		return undo;
	}
	
	this.deleteIncident = function(objectID)
	{
		var undoStack = [];

		if (this.Edges[objectID] != null)
		{
			var len = this.Edges[objectID].length;
			for (var i = len - 1; i >= 0; i--)
			{
				var deleted = this.Edges[objectID][i];
				var node2ID = deleted.Node2.identifier();
				undoStack.push(deleted.createUndoDisconnect());
				
				var len2 = this.BackEdges[node2ID].length;
				for (var j = len2 - 1; j >=0; j--)
				{
					if (this.BackEdges[node2ID][j] == deleted)
					{
						this.BackEdges[node2ID][j] = this.BackEdges[node2ID][len2 - 1];
						len2 -= 1;
						this.BackEdges[node2ID].pop();
					}
				}
			}
			this.Edges[objectID] = null;
		}
		if (this.BackEdges[objectID] != null)
		{
			len = this.BackEdges[objectID].length;
			for (i = len - 1; i >= 0; i--)
			{
				deleted = this.BackEdges[objectID][i];
				var node1ID = deleted.Node1.identifier();
				undoStack.push(deleted.createUndoDisconnect());

				len2 = this.Edges[node1ID].length;
				for (j = len2 - 1; j >=0; j--)
				{
					if (this.Edges[node1ID][j] == deleted)
					{
						this.Edges[node1ID][j] = this.Edges[node1ID][len2 - 1];
						len2 -= 1;
						this.Edges[node1ID].pop();
					}
				}
			}
			this.BackEdges[objectID] = null;
		}
		return undoStack;
	}
	
	
	this.removeObject = function(ObjectID)
	{
		var OldObject = this.Nodes[ObjectID];
		if (ObjectID == this.Nodes.length - 1)
		{
			this.Nodes.pop();
		}
		else
		{
			this.Nodes[ObjectID] = null;
		}
	}
	
	this.getObject = function(objectID)
	{
		if (this.Nodes[objectID] == null || this.Nodes[objectID] == undefined)
		{
			throw "getObject:Object with ID (" + String(objectID) + ") does not exist"
		}
		return this.Nodes[objectID];
		
	}
	
	
	this.addCircleObject = function (objectID, objectLabel)
	{
			if (this.Nodes[objectID] != null && this.Nodes[objectID] != undefined)
			{
				throw "addCircleObject:Object with same ID (" + String(objectID) + ") already Exists!"
			}
			var newNode = new AnimatedCircle(objectID, objectLabel);
			this.Nodes[objectID] = newNode;
	}
	
	this.getNodeX = function(nodeID)
	{
		if (this.Nodes[nodeID] == null || this.Nodes[nodeID] == undefined)
		{
			throw "getting x position of an object that does not exit";
		}	
		return this.Nodes[nodeID].x;
	}
	
	this.getTextWidth = function(text)
	{
		// TODO:  Need to make fonts more flexible, and less hardwired.
		this.ctx.font = '10px sans-serif';
		if (text==undefined)
		{
			w = 3;
		}
		var strList = text.split("\n");
		var width = 0;
		if (strList.length == 1)
		{
			width = this.ctx.measureText(text).width;
		}
		else
		{
			for (var i = 0; i < strList.length; i++)
			{
				width = Math.max(width, this.ctx.measureText(strList[i]).width);
			}		
		}
		
		return width;
	}
	
	this.setText = function(nodeID, text, index)
	{
		if (this.Nodes[nodeID] == null || this.Nodes[nodeID] == undefined)
		{
			return;
			throw "setting text of an object that does not exit";
		}			
		this.Nodes[nodeID].setText(text, index, this.getTextWidth(text));
		
	}
	
	this.getText = function(nodeID, index)
	{
		if (this.Nodes[nodeID] == null || this.Nodes[nodeID] == undefined)
		{
			throw "getting text of an object that does not exit";
		}			
		return this.Nodes[nodeID].getText(index);
		
	}
	
	this.getNodeY = function(nodeID)
	{
		if (this.Nodes[nodeID] == null || this.Nodes[nodeID] == undefined)
		{
			throw "getting y position of an object that does not exit";
		}	
		return this.Nodes[nodeID].y;
	}

	
	this.connectEdge = function(objectIDfrom, objectIDto, color, curve, directed, lab, connectionPoint)
	{
		var fromObj = this.Nodes[objectIDfrom];
		var toObj = this.Nodes[objectIDto];
		if (fromObj == null || toObj == null)
		{
			throw "Tried to connect two nodes, one didn't exist!";
		}
		var l = new Line(fromObj,toObj, color, curve, directed, lab, connectionPoint);
		if (this.Edges[objectIDfrom] == null || this.Edges[objectIDfrom] == undefined)
		{
			this.Edges[objectIDfrom] = [];
		}
		if (this.BackEdges[objectIDto] == null || this.BackEdges[objectIDto] == undefined)
		{
			this.BackEdges[objectIDto] = [];
		}
		l.addedToScene = fromObj.addedToScene && toObj.addedToScene;
		this.Edges[objectIDfrom].push(l);
		this.BackEdges[objectIDto].push(l);
		
	}
	
	
	this.setNull = function(objectID, nullVal)
	{
		if (this.Nodes[objectID] != null && this.Nodes[objectID] != undefined)
		{
			this.Nodes[objectID].setNull(nullVal);
			
		}
	}
	
	this.getNull = function(objectID)
	{
		if (this.Nodes[objectID] != null && this.Nodes[objectID] != undefined)
		{
			return this.Nodes[objectID].getNull();
		}
		return false;  // TODO:  Error here?
	}
	
	
	
	this.setEdgeColor = function(fromID, toID, color) // returns old color
	{
		var oldColor ="#000000";
		if (this.Edges[fromID] != null &&
			this.Edges[fromID] != undefined)
		{
			var len = this.Edges[fromID].length;
			for (var i = len - 1; i >= 0; i--)
			{
				if (this.Edges[fromID][i] != null &&
					this.Edges[fromID][i] != undefined &&
					this.Edges[fromID][i].Node2 == this.Nodes[toID])
				{
					oldColor = this.Edges[fromID][i].color();
					this.Edges[fromID][i].setColor(color);		
				}
			}
		}	
		return oldColor;
	}		
	
	this.alignTop = function(id1, id2)
	{
		if (this.Nodes[id1] == null || this.Nodes[id1] == undefined ||
			this.Nodes[id2] == null || this.Nodes[id2] == undefined)
		{
			throw "Tring to align two nodes, one doesn't exist: " + String(id1) + "," + String(id2);			
		}
		this.Nodes[id1].alignTop(this.Nodes[id2]);
	}
	
	this.alignLeft = function(id1, id2)
	{
		if (this.Nodes[id1] == null || this.Nodes[id1] == undefined ||
			this.Nodes[id2] == null || this.Nodes[id2] == undefined)
		{
			throw "Tring to align two nodes, one doesn't exist: " + String(id1) + "," + String(id2);			
		}
		this.Nodes[id1].alignLeft(this.Nodes[id2]);
	}
	
	this.alignRight = function(id1, id2)
	{
		if (this.Nodes[id1] == null || this.Nodes[id1] == undefined ||
			this.Nodes[id2] == null || this.Nodes[id2] == undefined)
		{
			throw "Tring to align two nodes, one doesn't exist: " + String(id1) + "," + String(id2);			
		}
		this.Nodes[id1].alignRight(this.Nodes[id2]);
	}
	
	this.alignBottom = function(id1, id2)
	{
		if (this.Nodes[id1] == null || this.Nodes[id1] == undefined ||
			this.Nodes[id2] == null || this.Nodes[id2] == undefined)
		{
			throw "Tring to align two nodes, one doesn't exist: " + String(id1) + "," + String(id2);			
		}
		this.Nodes[id1].alignBottom(this.Nodes[id2]);
	}
	
	
	this.setEdgeHighlight = function(fromID, toID, val) // returns old color
	{
		var oldHighlight = false;
		if (this.Edges[fromID] != null &&
			this.Edges[fromID] != undefined)
		{
			var len = this.Edges[fromID].length;
			for (var i = len - 1; i >= 0; i--)
			{
				if (this.Edges[fromID][i] != null && 
					this.Edges[fromID][i] != undefined && 
					this.Edges[fromID][i].Node2 == this.Nodes[toID])
				{
					oldHighlight = this.Edges[fromID][i].highlighted;
					this.Edges[fromID][i].setHighlight(val);		
				}
			}
		}
		return oldHighlight;
	}
	this.addLabelObject = function(objectID, objectLabel, centering)
	{
		if (this.Nodes[objectID] != null && this.Nodes[objectID] != undefined)
		{
			throw new Error("addLabelObject: Object Already Exists!");
		}
		
		var newLabel = new AnimatedLabel(objectID, objectLabel, centering, this.getTextWidth(objectLabel));
		this.Nodes[objectID] = newLabel;
	}
	
		
	this.addLinkedListObject = function(objectID, nodeLabel, width, height, linkPer, verticalOrientation, linkPosEnd, numLabels, backgroundColor, foregroundColor)
	{
		if (this.Nodes[objectID] != null)
		{
			throw new Error("addLinkedListObject:Object with same ID already Exists!");
			return;
		}
		var newNode  = new AnimatedLinkedList(objectID, nodeLabel, width, height, linkPer, verticalOrientation, linkPosEnd, numLabels, backgroundColor, foregroundColor);
		this.Nodes[objectID] = newNode;
	}
	
	 
	this.getNumElements = function(objectID)
	{
		return this.Nodes[objectID].getNumElements();
	}
	 
	
	this.setNumElements = function(objectID, numElems)
	{
		this.Nodes[objectID].setNumElements(numElems);
	}
	this.addBTreeNode = function(objectID, widthPerElem, height, numElems, backgroundColor, foregroundColor)
	 {
		 backgroundColor = (backgroundColor == undefined) ? "#FFFFFF" : backgroundColor;
		 foregroundColor = (foregroundColor == undefined) ? "#FFFFFF" : foregroundColor;
		 
		 if (this.Nodes[objectID] != null && Nodes[objectID] != undefined)
		 {
			 throw "addBTreeNode:Object with same ID already Exists!";
		 }

		 var newNode = new AnimatedBTreeNode(objectID,widthPerElem, height, numElems, backgroundColor, foregroundColor);
		 this.Nodes[objectID] = newNode;
	 }
	
	 this.addRectangleObject = function(objectID,nodeLabel, width, height, xJustify , yJustify , backgroundColor, foregroundColor)
	 {
		 if (this.Nodes[objectID] != null || this.Nodes[objectID] != undefined)
		 {
			 throw new Error("addRectangleObject:Object with same ID already Exists!");
		 }
		 var newNode = new AnimatedRectangle(objectID, nodeLabel, width, height, xJustify, yJustify, backgroundColor, foregroundColor);
		 this.Nodes[objectID] = newNode;
		 
	 }
	 
	 
	
	
	this.setNodePosition = function(nodeID, newX, newY)
	{
		if (this.Nodes[nodeID] == null || this.Nodes[nodeID] == undefined)
		{
			// TODO:  Error here?
			return;
		}
		if (newX == undefined || newY == undefined)
		{
			
			return;
		}
		this.Nodes[nodeID].x = newX;
		this.Nodes[nodeID].y = newY;
		/* Don't need to dirty anything, since we repaint everything every frame
		 (TODO:  Revisit if we do conditional redraws)
		 }*/
		
	}
	
}








	
// Copyright 2011 David Galles, University of San Francisco. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without modification, are
// permitted provided that the following conditions are met:
//
// 1. Redistributions of source code must retain the above copyright notice, this list of
// conditions and the following disclaimer.
//
// 2. Redistributions in binary form must reproduce the above copyright notice, this list
// of conditions and the following disclaimer in the documentation and/or other materials
// provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY <COPYRIGHT HOLDER> ``AS IS'' AND ANY EXPRESS OR IMPLIED
// WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
// FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> OR
// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
// SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
// ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
// ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
// The views and conclusions contained in the software and documentation are those of the
// authors and should not be interpreted as representing official policies, either expressed
// or implied, of the University of San Francisco

// Global timer used for doing animation callbacks.
//  TODO:  Make this an instance variable of Animation Manager.
var timer;


// Utility funciton to read a cookie
function getCookie(cookieName)
{
	var i, x, y;
	var cookies=document.cookie.split(";");
	for (i=0; i < cookies.length; i++)
	{
		x=cookies[i].substr(0,cookies[i].indexOf("="));
		y=cookies[i].substr(cookies[i].indexOf("=")+1);
		x=x.replace(/^\s+|\s+$/g,"");
		if (x==cookieName)
		{
			return unescape(y);
		}
	}
}

// Utility funciton to write a cookie
function setCookie(cookieName,value,expireDays)
{
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + expireDays);
	var cookieValue=escape(value) + ((expireDays==null) ? "" : "; expires="+exdate.toUTCString());
	document.cookie=cookieName + "=" + value;
}


var ANIMATION_SPEED_DEFAULT = 75;


// TODO:  Move these out of global space into animation manager?
var objectManager;
var animationManager;
var canvas;

var paused = false;
var playPauseBackButton;
var skipBackButton;
var stepBackButton;
var stepForwardButton;
var skipForwardButton;

var widthEntry;
var heightEntry;
var sizeButton;



function returnSubmit(field, funct, maxsize, intOnly)
{
	if (maxsize != undefined)
	{
		field.size = maxsize;
	}
	return function(event)
	{
		var keyASCII = 0;
		if(window.event) // IE
		{
			keyASCII = event.keyCode
		}
		else if (event.which) // Netscape/Firefox/Opera
		{
			keyASCII = event.which
		} 
		if (keyASCII == 13)
		{
			funct();
		}
		else if (keyASCII == 59 )
		{
			return false;	
		}
		else if ((maxsize != undefined && field.value.length >= maxsize) ||
				 intOnly && (keyASCII < 48 || keyASCII > 57))
		{
			if (!controlKey(keyASCII))
				return false;
		}
		
	}
	
}


function animWaiting()
{
	stepForwardButton.disabled = false;
	if (skipBackButton.disabled == false)
	{
		stepBackButton.disabled = false;
	}
	objectManager.statusReport.setText("Animation Paused");
	objectManager.statusReport.setForegroundColor("#FF0000");
}

function animStarted()
{
	skipForwardButton.disabled = false;
	skipBackButton.disabled = false;
	stepForwardButton.disabled = true;
	stepBackButton.disabled = true;
	objectManager.statusReport.setText("Animation Running");
	objectManager.statusReport.setForegroundColor("#009900");
}

function animEnded()
{
	skipForwardButton.disabled = true;
	stepForwardButton.disabled = true;
	if (skipBackButton.disabled == false && paused)
	{
		stepBackButton.disabled = false;		
	}
	objectManager.statusReport.setText("Animation Completed");
	objectManager.statusReport.setForegroundColor("#000000");
}



function anumUndoUnavailable()
{
	skipBackButton.disabled = true;
	stepBackButton.disabled = true;
}


function timeout()
{
	// We need to set the timeout *first*, otherwise if we
	// try to clear it later, we get behavior we don't want ...
    timer = setTimeout('timeout()', 30); 
	animationManager.update();
	objectManager.draw();	
        
}


function doStep()
{
	animationManager.step();
}


function doSkip()
{
	animationManager.skipForward();
}


function doSkipBack()
{
	animationManager.skipBack();
}


function doStepBack()
{
	animationManager.stepBack();
}
function doPlayPause()
{
	paused = !paused;
	if (paused)
	{
		playPauseBackButton.setAttribute("value", "play");
		if (skipBackButton.disabled == false)
		{
			stepBackButton.disabled = false;		
		}
		
	}
	else
	{
		playPauseBackButton.setAttribute("value", "pause");	
	}
	animationManager.SetPaused(paused);
}


function addControl(type, name, location) {
	
    var element = document.createElement("input");
	
    element.setAttribute("type", type);
    element.setAttribute("value", name);

	var tableEntry = document.createElement("td");
	
	tableEntry.appendChild(element);
	
	
    var controlBar = document.getElementById(tableEntry);
	
    //Append the element in page (in span).
    controlBar.appendChild(element);
	return element;
 
}

function addControlToAnimationBar(type,name,containerType)
{
	if (containerType == undefined)
	{
			containerType = "input";
	}
	var element = document.createElement(containerType);
	
    element.setAttribute("type", type);
    element.setAttribute("value", name);
	
	
	var tableEntry = document.createElement("td");
	
	tableEntry.appendChild(element);
	
    var controlBar = document.getElementById("GeneralAnimationControls");
	
    //Append the element in page (in span).
    controlBar.appendChild(tableEntry);
	return element;
	
}


function initCanvas()
{
	canvas =  document.getElementById("canvas");
	objectManager = new ObjectManager();
	animationManager = new AnimationManager(objectManager);
	
	skipBackButton = addControlToAnimationBar("Button", "Skip Back");
	skipBackButton.onclick = animationManager.skipBack.bind(animationManager);
	stepBackButton = addControlToAnimationBar("Button", "Step Back");
	stepBackButton.onclick = animationManager.stepBack.bind(animationManager);
	playPauseBackButton = addControlToAnimationBar("Button", "Pause");
	playPauseBackButton.onclick = doPlayPause ;
	stepForwardButton = addControlToAnimationBar("Button", "Step Forward");
	stepForwardButton.onclick = animationManager.step.bind(animationManager) ;
	skipForwardButton = addControlToAnimationBar("Button", "Skip Forward");
	skipForwardButton.onclick = animationManager.skipForward.bind(animationManager);
	
	
	var element = document.createElement("div");
	element.setAttribute("display", "inline-block");		
	element.setAttribute("float", "left");		

	
	var tableEntry = document.createElement("td");
	
	
    var controlBar = document.getElementById("GeneralAnimationControls");
	
	
	
	var newTable = document.createElement("table");

	var midLevel = document.createElement("tr");
	var bottomLevel = document.createElement("td");
	midLevel.appendChild(bottomLevel);
	bottomLevel.appendChild(element);
	newTable.appendChild(midLevel);	
	
	
	
	midLevel = document.createElement("tr");
	bottomLevel = document.createElement("td");
	bottomLevel.align = "center";
	var txtNode = document.createTextNode("Animation Speed"); 
	midLevel.appendChild(bottomLevel);
	bottomLevel.appendChild(txtNode);
	newTable.appendChild(midLevel);	

	
	
	tableEntry.appendChild(newTable);
	
	
	
    //Append the element in page (in span).
    controlBar.appendChild(tableEntry);
		
    //tableEntry.appendChild(element);

	var speed = getCookie("VisualizationSpeed");
	if (speed == null || speed == "")
	{
		speed = ANIMATION_SPEED_DEFAULT;
	}
	else
	{
		speed = parseInt(speed);
	}
	
	$(element).slider({
					  animate: true,
					  value: speed,
					  change: function(e, ui)
					  {
						setCookie("VisualizationSpeed", String(ui.value), 30);
					  },
					  slide : function(e, ui){
					  animationManager.SetSpeed(ui.value); 
					  }

					  }); 
	
	animationManager.SetSpeed(speed);
	
	element.setAttribute("style", "width:200px");

	animationManager.addListener("AnimationStarted", this, animStarted);
	animationManager.addListener("AnimationEnded", this, this.animEnded);
	animationManager.addListener("AnimationWaiting", this, this.animWaiting);
	animationManager.addListener("AnimationUndoUnavailable", this, this.anumUndoUnavailable);
	objectManager.width = canvas.width;
	objectManager.height = canvas.height;
	return animationManager;
}



function AnimationManager(objectManager)
{
	// Holder for all animated objects.
	// All animation is done by manipulating objects in\
	// this container
	this.animatedObjects = objectManager;

	// Control variables for stopping / starting animation
	
	this.animationPaused = false;
	this.awaitingStep = false;
	this.currentlyAnimating = false;
	
	// Array holding the code for the animation.  This is 
	// an array of strings, each of which is an animation command
	// currentAnimation is an index into this array
	this.AnimationSteps = [];
	this.currentAnimation = 0;
	
	this.previousAnimationSteps = [];
	
	// Control variables for where we are in the current animation block.
	//  currFrame holds the frame number of the current animation block,
	//  while animationBlockLength holds the length of the current animation
	//  block (in frame numbers).  
	this.currFrame = 0;
	this.animationBlockLength = 0;
	
	//  The animation block that is currently running.  Array of singleAnimations
	this.currentBlock = null;
	
	/////////////////////////////////////
	// Variables for handling undo. 
	////////////////////////////////////
	//  A stack of UndoBlock objects (subclassed, UndoBlock is an abstract base class)
	//  each of which can undo a single animation element
	this.undoStack = [];
	this.doingUndo = false;
	
	// A stack containing the beginning of each animation block, as an index
	// into the AnimationSteps array
	this.undoAnimationStepIndices = [];
	this.undoAnimationStepIndicesStack = [];
	
	this.animationBlockLength = 10;

	this.lerp = function(from, to, percent)
	{
		return (to - from) * percent + from;
	}
	
	// Pause / unpause animation
	this.SetPaused = function(pausedValue)
	{
		this.animationPaused = pausedValue;
		if (!this.animationPaused)
		{
			this.step();
		}
	}
	
	// Set the speed of the animation, from 0 (slow) to 100 (fast)
	this.SetSpeed = function(newSpeed)
	{
		this.animationBlockLength = Math.floor((100-newSpeed) / 2);
	}
	

	this.parseBool = function(str)
	{
		var uppercase = str.toUpperCase();
		var returnVal =  !(uppercase == "False" || uppercase == "f" || uppercase == " 0" || uppercase == "0" || uppercase == "");
		return returnVal;

	}

	this.parseColor = function(clr)
	{
			if (clr.charAt(0) == "#")
			{
				return clr;
			}
			else if (clr.substring(0,2) == "0x")
			{
				return "#" + clr.substring(2);
			}
	}
	
	
	this.changeSize = function()
	{
		
		var width = parseInt(widthEntry.value);
		var height = parseInt(heightEntry.value);
		
		if (width > 100)
		{
			canvas.width = width;
			this.animatedObjects.width = width;
			setCookie("VisualizationWidth", String(width), 30);
			
		}
		if (height > 100)
		{
			canvas.height = height;
			this.animatedObjects.height = height;
			setCookie("VisualizationHeight", String(height), 30);
		}
		width.value = canvas.width;
		heightEntry.value = canvas.height;
		
		this.animatedObjects.draw();
		this.fireEvent("CanvasSizeChanged",{width:canvas.width, height:canvas.height});		
	}
	
	this.startNextBlock = function()
	{
		this.awaitingStep = false;
		this.currentBlock = [];
		var undoBlock = []
		if (this.currentAnimation == this.AnimationSteps.length )
		{
			this.currentlyAnimating = false;
			this.awaitingStep = false;
			this.fireEvent("AnimationEnded","NoData");
			clearTimeout(timer);
			this.animatedObjects.update();
			this.animatedObjects.draw();
			
			return;
		}
		this.undoAnimationStepIndices.push(this.currentAnimation);

		var foundBreak= false;
		var anyAnimations= false;
		
		while (this.currentAnimation < this.AnimationSteps.length && !foundBreak)
		{			
			var nextCommand = this.AnimationSteps[this.currentAnimation].split("<;>");
			if (nextCommand[0].toUpperCase() == "CREATECIRCLE")
			{
				this.animatedObjects.addCircleObject(parseInt(nextCommand[1]), nextCommand[2]);
				if (nextCommand.length > 4)
				{
					this.animatedObjects.setNodePosition(parseInt(nextCommand[1]), parseInt(nextCommand[3]), parseInt(nextCommand[4]));
				}
				undoBlock.push(new UndoCreate(parseInt(nextCommand[1])));

			}
			else if (nextCommand[0].toUpperCase() == "CONNECT")
			{
				
				if (nextCommand.length > 7)
				{
					this.animatedObjects.connectEdge(parseInt(nextCommand[1]), 
                                                                         parseInt(nextCommand[2]), 
                                                                         this.parseColor(nextCommand[3]), 
                                                                         parseFloat(nextCommand[4]), 
                                                                         this.parseBool(nextCommand[5]), 
                                                                         nextCommand[6], 
                                                                         parseInt(nextCommand[7]));
				}
				else if (nextCommand.length > 6)
				{
					this.animatedObjects.connectEdge(parseInt(nextCommand[1]), 
                                                                         parseInt(nextCommand[2]),
                                                                         this.parseColor(nextCommand[3]),
                                                                         parseFloat(nextCommand[4]),
                                                                         this.parseBool(nextCommand[5]),
                                                                         nextCommand[6],
                                                                         0);
				}
				else if (nextCommand.length > 5)
				{
					this.animatedObjects.connectEdge(parseInt(nextCommand[1]), 
                                                                         parseInt(nextCommand[2]),
                                                                         this.parseColor(nextCommand[3]),
                                                                         parseFloat(nextCommand[4]),
                                                                         this.parseBool(nextCommand[5]),
                                                                         "",
                                                                         0);
				}
				else if (nextCommand.length > 4)
				{
					this.animatedObjects.connectEdge(parseInt(nextCommand[1]),
                                                                         parseInt(nextCommand[2]),
                                                                         this.parseColor(nextCommand[3]),
                                                                         parseFloat(nextCommand[4]),
                                                                         true,
                                                                         "",
                                                                         0);
				}
				else if (nextCommand.length > 3)
				{
					this.animatedObjects.connectEdge(parseInt(nextCommand[1]),
                                                                         parseInt(nextCommand[2]),
																		 this.parseColor(nextCommand[3]),
                                                                         0.0,
                                                                         true,
                                                                         "",
                                                                         0);
				}
				else
				{
					this.animatedObjects.connectEdge(parseInt(nextCommand[1]),
                                                                         parseInt(nextCommand[2]),
													                    "#000000",
                                                                         0.0,
                                                                         true,
                                                                         "",
                                                                         0);
					
				}
				undoBlock.push(new UndoConnect(parseInt(nextCommand[1]), parseInt (nextCommand[2]), false));
			}
			else if (nextCommand[0].toUpperCase() == "CREATERECTANGLE")
			{
				if (nextCommand.length == 9)
				{
					this.animatedObjects.addRectangleObject(parseInt(nextCommand[1]), // ID
															nextCommand[2], // Label
															parseInt(nextCommand[3]), // w
															parseInt(nextCommand[4]), // h
															nextCommand[7], // xJustify
															nextCommand[8],// yJustify
															"#ffffff", // background color
					                                        "#000000"); // foreground color
				}
				else
				{
					this.animatedObjects.addRectangleObject(parseInt(nextCommand[1]), // ID
															nextCommand[2], // Label
															parseInt(nextCommand[3]), // w
															parseInt(nextCommand[4]), // h
															"center", // xJustify
															"center",// yJustify
															"#ffffff", // background color
					                                        "#000000"); // foreground color
					
				}
				if (nextCommand.length > 6)
				{
					this.animatedObjects.setNodePosition(parseInt(nextCommand[1]), parseInt(nextCommand[5]), parseInt(nextCommand[6]));
				}
				undoBlock.push(new UndoCreate(parseInt(nextCommand[1])));
			}
			
			else if (nextCommand[0].toUpperCase() == "MOVE")
			{
				var objectID = parseInt(nextCommand[1]);
				var nextAnim =  new SingleAnimation(objectID, 
													this.animatedObjects.getNodeX(objectID), 
													this.animatedObjects.getNodeY(objectID), 
													parseInt(nextCommand[2]),
													parseInt(nextCommand[3]));
				this.currentBlock.push(nextAnim);

				undoBlock.push(new UndoMove(nextAnim.objectID, nextAnim.toX, nextAnim.toY, nextAnim.fromX, nextAnim.fromY));

				anyAnimations = true;
			}
			
			else if (nextCommand[0].toUpperCase() == "STEP")
			{
				foundBreak = true;
			}
			else if (nextCommand[0].toUpperCase() == "SETFOREGROUNDCOLOR")
			{
				var id = parseInt(nextCommand[1]);
				var oldColor = this.animatedObjects.foregroundColor(id);
				this.animatedObjects.setForegroundColor(id, this.parseColor(nextCommand[2]));
				undoBlock.push(new UndoSetForegroundColor(id, oldColor));
			}
			else if (nextCommand[0].toUpperCase() == "SETBACKGROUNDCOLOR")
			{
				id = parseInt(nextCommand[1]);
				oldColor = this.animatedObjects.backgroundColor(id);
				this.animatedObjects.setBackgroundColor(id, this.parseColor(nextCommand[2]));
				undoBlock.push(new UndoSetBackgroundColor(id, oldColor));
			}
			else if (nextCommand[0].toUpperCase() == "SETHIGHLIGHT")
			{
				var newHighlight = this.parseBool(nextCommand[2]);
				this.animatedObjects.setHighlight( parseInt(nextCommand[1]), newHighlight);
				undoBlock.push(new UndoHighlight( parseInt(nextCommand[1]), !newHighlight));
			}
			else if (nextCommand[0].toUpperCase() == "DISCONNECT")
			{
				var undoConnect = this.animatedObjects.disconnect(parseInt(nextCommand[1]), parseInt(nextCommand[2]));
				if (undoConnect != null)
				{
					undoBlock.push(undoConnect);
				}
			}
			else if (nextCommand[0].toUpperCase() == "SETALPHA")
			{
				var oldAlpha = this.animatedObjects.getAlpha(parseInt(nextCommand[1]));
				this.animatedObjects.setAlpha(parseInt(nextCommand[1]), parseFloat(nextCommand[2]));
				undoBlock.push(new UndoSetAlpha(parseInt(nextCommand[1]), oldAlpha));					
			}
			else if (nextCommand[0].toUpperCase() == "SETTEXT")
			{
				if (nextCommand.length > 3)
				{
					var oldText = this.animatedObjects.getText(parseInt(nextCommand[1]), parseInt(nextCommand[3]));
					this.animatedObjects.setText(parseInt(nextCommand[1]), nextCommand[2], parseInt(nextCommand[3]));
					if (oldText != undefined)
					{
						undoBlock.push(new UndoSetText(parseInt(nextCommand[1]), oldText, parseInt(nextCommand[3]) ));			
					}	
				}
				else
				{
					oldText = this.animatedObjects.getText(parseInt(nextCommand[1]), 0);
					this.animatedObjects.setText(parseInt(nextCommand[1]), nextCommand[2], 0);
					if (oldText != undefined)
					{
						undoBlock.push(new UndoSetText(parseInt(nextCommand[1]), oldText, 0));	
					}
				}
			}
			else if (nextCommand[0].toUpperCase() == "DELETE")
			{
				var objectID  = parseInt(nextCommand[1]);
				
				var i;
				var removedEdges = this.animatedObjects.deleteIncident(objectID);
				if (removedEdges.length > 0)
				{
					undoBlock = undoBlock.concat(removedEdges);
				}
				var obj = this.animatedObjects.getObject(objectID);
				if (obj != null)
				{
					undoBlock.push(obj.createUndoDelete());
					this.animatedObjects.removeObject(objectID);
				}
			}
			else if (nextCommand[0].toUpperCase() == "CREATEHIGHLIGHTCIRCLE")
			{
				if (nextCommand.length > 5)
				{
					this.animatedObjects.addHighlightCircleObject(parseInt(nextCommand[1]), this.parseColor(nextCommand[2]), parseFloat(nextCommand[5]));
				}
				else
				{
					this.animatedObjects.addHighlightCircleObject(parseInt(nextCommand[1]), this.parseColor(nextCommand[2]), 20);						
				}
				if (nextCommand.length > 4)
				{
					this.animatedObjects.setNodePosition(parseInt(nextCommand[1]), parseInt(nextCommand[3]), parseInt(nextCommand[4]));
				}
				undoBlock.push(new UndoCreate(parseInt(nextCommand[1])));
				
				
			}
			else if (nextCommand[0].toUpperCase() == "CREATELABEL")
			{
				if (nextCommand.length == 6)
				{
					this.animatedObjects.addLabelObject(parseInt(nextCommand[1]), nextCommand[2], this.parseBool(nextCommand[5]));						
				}
				else
				{
					this.animatedObjects.addLabelObject(parseInt(nextCommand[1]), nextCommand[2], true);
				}
				if (nextCommand.length >= 5)
				{
					
					this.animatedObjects.setNodePosition(parseInt(nextCommand[1]), parseFloat(nextCommand[3]), parseFloat(nextCommand[4]));
				}
				undoBlock.push(new UndoCreate(parseInt(nextCommand[1])));
			}
			else if (nextCommand[0].toUpperCase() == "SETEDGECOLOR")
			{
				var from = parseInt(nextCommand[1]);
				var to = parseInt(nextCommand[2]);
				var newColor = this.parseColor(nextCommand[3]);
				var oldColor = this.animatedObjects.setEdgeColor(from, to, newColor);				
				undoBlock.push(new UndoSetEdgeColor(from, to, oldColor));
			}
			else if (nextCommand[0].toUpperCase() == "SETEDGEALPHA")
			{
				var from = parseInt(nextCommand[1]);
				var to = parseInt(nextCommand[2]);
				var newAlpha = parseFloat(nextCommand[3]);
				var oldAplpha = this.animatedObjects.setEdgeAlpha(from, to, newAlpha);				
				undoBlock.push(new UndoSetEdgeAlpha(from, to, oldAplpha));
			}
			
			
			else if (nextCommand[0].toUpperCase() == "SETEDGEHIGHLIGHT")
			{
				var newHighlight = this.parseBool(nextCommand[3]);
				var from = parseInt(nextCommand[1]);
				var to = parseInt(nextCommand[2]);
				var oldHighlight = this.animatedObjects.setEdgeHighlight(from, to, newHighlight);
				undoBlock.push(new UndoHighlightEdge(from, to, oldHighlight));
			}
			else if (nextCommand[0].toUpperCase() == "SETHEIGHT")
			{
				id = parseInt(nextCommand[1]);
				var oldHeight = this.animatedObjects.getHeight(id);
				this.animatedObjects.setHeight(id, parseInt(nextCommand[2]));
				undoBlock.push(new UndoSetHeight(id, oldHeight));
			}
			else if (nextCommand[0].toUpperCase() == "SETLAYER")
			{
				this.animatedObjects.setLayer(parseInt(nextCommand[1]), parseInt(nextCommand[2]));
				//TODO: Add undo information here
			}
			
			
			else if (nextCommand[0].toUpperCase() == "CREATELINKEDLIST")
			{
				if (nextCommand.length == 11)
				{
					this.animatedObjects.addLinkedListObject(parseInt(nextCommand[1]), nextCommand[2], 
			               parseInt(nextCommand[3]), parseInt(nextCommand[4]), parseFloat(nextCommand[7]), 
			               this.parseBool(nextCommand[8]), this.parseBool(nextCommand[9]),parseInt(nextCommand[10]), "#FFFFFF", "#000000");
				}
				else
				{
					this.animatedObjects.addLinkedListObject(parseInt(nextCommand[1]), nextCommand[2], parseInt(nextCommand[3]), parseInt(nextCommand[4]), 0.25, true, false, 1, "#FFFFFF", "#000000");
				}
				if (nextCommand.length > 6)
				{
					this.animatedObjects.setNodePosition(parseInt(nextCommand[1]), parseInt(nextCommand[5]), parseInt(nextCommand[6]));
					undoBlock.push(new UndoCreate(parseInt(nextCommand[1])));
				}
				
			}
			else if (nextCommand[0].toUpperCase() == "SETNULL")
			{
				var oldNull = this.animatedObjects.getNull(parseInt(nextCommand[1]));
				this.animatedObjects.setNull(parseInt(nextCommand[1]), this.parseBool(nextCommand[2]));
				undoBlock.push(new UndoSetNull(parseInt(nextCommand[1]), oldNull));					
			}
			else if (nextCommand[0].toUpperCase() == "SETTEXTCOLOR")
			{
				if (nextCommand.length > 3)
				{
					oldColor = this.animatedObjects.getTextColor(parseInt(nextCommand[1]), parseInt(nextCommand[3]));
					this.animatedObjects.setTextColor(parseInt(nextCommand[1]), this.parseColor(nextCommand[2]), parseInt(nextCommand[3]));
					undoBlock.push(new UndoSetTextColor(parseInt(nextCommand[1]), oldColor, parseInt(nextCommand[3]) ));					
				}
				else
				{
					oldColor = this.animatedObjects.getTextColor(parseInt(nextCommand[1]), 0);
					this.animatedObjects.setTextColor(parseInt(nextCommand[1]),this.parseColor(nextCommand[2]), 0);
					undoBlock.push(new UndoSetTextColor(parseInt(nextCommand[1]), oldColor, 0));					
				}
			}
			
			
			else if (nextCommand[0].toUpperCase() == "CREATEBTREENODE")
			{

				this.animatedObjects.addBTreeNode(parseInt(nextCommand[1]), parseFloat(nextCommand[2]), parseFloat(nextCommand[3]), 
			                 parseInt(nextCommand[4]),this.parseColor(nextCommand[7]), this.parseColor(nextCommand[8]));
				this.animatedObjects.setNodePosition(parseInt(nextCommand[1]), parseInt(nextCommand[5]), parseInt(nextCommand[6]));
				undoBlock.push(new UndoCreate(parseInt(nextCommand[1])));
			}

			else if (nextCommand[0].toUpperCase() == "SETWIDTH")
			{
				var id = parseInt(nextCommand[1]);
				this.animatedObjects.setWidth(id, parseInt(nextCommand[2]));
				var oldWidth = this.animatedObjects.getWidth(id);
				undoBlock.push(new UndoSetWidth(id, oldWidth));
			}
			else if (nextCommand[0].toUpperCase() == "SETNUMELEMENTS")
			{
				var oldElem = this.animatedObjects.getObject(parseInt(nextCommand[1]));
				undoBlock.push(new UndoSetNumElements(oldElem, parseInt(nextCommand[2])));
				this.animatedObjects.setNumElements(parseInt(nextCommand[1]), parseInt(nextCommand[2]));
			}
			else if (nextCommand[0].toUpperCase() == "SETPOSITION")
			{
				var id = parseInt(nextCommand[1])
				var oldX = this.animatedObjects.getNodeX(id);
				var oldY = this.animatedObjects.getNodeY(id);
				undoBlock.push(new UndoSetPosition(id, oldX, oldY));
				this.animatedObjects.setNodePosition(id, parseInt(nextCommand[2]), parseInt(nextCommand[3]));
			}
			else if (nextCommand[0].toUpperCase() == "ALIGNRIGHT")
			{
				var id = parseInt(nextCommand[1])
				var oldX = this.animatedObjects.getNodeX(id);
				var oldY = this.animatedObjects.getNodeY(id);
				undoBlock.push(new UndoSetPosition(id, oldX. oldY));
				this.animatedObjects.alignRight(id, parseInt(nextCommand[2]));
			}
			else if (nextCommand[0].toUpperCase() == "ALIGNLEFT")
			{
				var id = parseInt(nextCommand[1])
				var oldX = this.animatedObjects.getNodeX(id);
				var oldY = this.animatedObjects.getNodeY(id);
				undoBlock.push(new UndoSetPosition(id, oldX. oldY));
				this.animatedObjects.alignLeft(id, parseInt(nextCommand[2]));
			}
			else if (nextCommand[0].toUpperCase() == "ALIGNTOP")
			{
				var id = parseInt(nextCommand[1])
				var oldX = this.animatedObjects.getNodeX(id);
				var oldY = this.animatedObjects.getNodeY(id);
				undoBlock.push(new UndoSetPosition(id, oldX. oldY));
				this.animatedObjects.alignTop(id, parseInt(nextCommand[2]));
			}
			else if (nextCommand[0].toUpperCase() == "ALIGNBOTTOM")
			{
				var id = parseInt(nextCommand[1])
				var oldX = this.animatedObjects.getNodeX(id);
				var oldY = this.animatedObjects.getNodeY(id);
				undoBlock.push(new UndoSetPosition(id, oldX. oldY));
				this.animatedObjects.alignBottom(id, parseInt(nextCommand[2]));
			}
			else
			{
	//			throw "Unknown command: " + nextCommand[0];					
			}
			
			this.currentAnimation = this.currentAnimation+1;
		}
		this.currFrame = 0;

		// Hack:  If there are not any animations, and we are currently paused,
		// then set the current frame to the end of the anumation, so that we will
		// advance immediagely upon the next step button.  If we are not paused, then
		// animate as normal.

		if (!anyAnimations && this.animationPaused || (!anyAnimations && this.currentAnimation == this.AnimationSteps.length) )
		{
			this.currFrame = this.animationBlockLength;
		}

		this.undoStack.push(undoBlock);
	}

	//  Start a new animation.  The input parameter commands is an array of strings,
	//  which represents the animation to start
	this.StartNewAnimation =  function(commands)
	{
		clearTimeout(timer);
		if (this.AnimationSteps != null)
		{
			this.previousAnimationSteps.push(this.AnimationSteps);
			this.undoAnimationStepIndicesStack.push(this.undoAnimationStepIndices);
		}
		if (commands == undefined || commands.length == 0)
		{
			this.AnimationSteps = ["Step"];
		}
		else
		{
			this.AnimationSteps = commands;
		}
		this.undoAnimationStepIndices = new Array();
		this.currentAnimation = 0;
		this.startNextBlock();
		this.currentlyAnimating = true;
		this.fireEvent("AnimationStarted","NoData");
		timer = setTimeout('timeout()', 30); 

	}
	
	
	// Step backwards one step.  A no-op if the animation is not currently paused
	this.stepBack = function()
	{
		if (this.awaitingStep && this.undoStack != null && this.undoStack.length != 0)
		{
			//  TODO:  Get events working correctly!
			this.fireEvent("AnimationStarted","NoData");
			clearTimeout(timer);

			this.awaitingStep = false;
			this.undoLastBlock();
			// Re-kick thie timer.  The timer may or may not be running at this point,
			// so to be safe we'll kill it and start it again.
			clearTimeout(timer);
			timer = setTimeout('timeout()', 30); 

			
		}
		else if (!this.currentlyAnimating && this.animationPaused && this.undoAnimationStepIndices != null)
		{
			this.fireEvent("AnimationStarted","NoData");
			this.currentlyAnimating = true;
			this.undoLastBlock();
			// Re-kick thie timer.  The timer may or may not be running at this point,
			// so to be safe we'll kill it and start it again.
			clearTimeout(timer);
			timer = setTimeout('timeout()', 30); 
			
		}
		
	}
	// Step forwards one step.  A no-op if the animation is not currently paused
	this.step = function()
	{
		if (this.awaitingStep)
		{
			this.startNextBlock();
			this.fireEvent("AnimationStarted","NoData");
			this.currentlyAnimating = true;
			// Re-kick thie timer.  The timer should be going now, but we've had some difficulty with
			// it timing itself out, so we'll be safe and kick it now.
			clearTimeout(timer);
			timer = setTimeout('timeout()', 30); 			
		}
	}
	
	
	/// WARNING:  Could be dangerous to call while an animation is running ...
	this.clearHistory = function()
	{
		this.undoStack = [];
		this.undoAnimationStepIndices = null;
		this.previousAnimationSteps = [];
		this.undoAnimationStepIndicesStack = [];
		this.AnimationSteps = null;
		this.fireEvent("AnimationUndoUnavailable","NoData");
		clearTimeout(timer);
		this.animatedObjects.update();
		this.animatedObjects.draw();
		
	}
	
	this.skipBack = function()
	{
		var keepUndoing = this.undoAnimationStepIndices != null && this. undoAnimationStepIndices.length != 0;
		if (keepUndoing)
		{
			var i;
			for (i = 0; this.currentBlock != null && i < this.currentBlock.length; i++)
			{
				var objectID = this.currentBlock[i].objectID;
				this.animatedObjects.setNodePosition(objectID,
												this.currentBlock[i].toX,
												this.currentBlock[i].toY);
			}
			if (this.doingUndo)
			{
				this.finishUndoBlock(this.undoStack.pop())
			}
			while (keepUndoing)
			{
				this.undoLastBlock();
				for (i = 0; i < this.currentBlock.length; i++)
				{
					objectID = this.currentBlock[i].objectID;
					this.animatedObjects.setNodePosition(objectID,
													this.currentBlock[i].toX,
													this.currentBlock[i].toY);
				}
				keepUndoing = this.finishUndoBlock(this.undoStack.pop());
				
			}
			clearTimeout(timer);
			this.animatedObjects.update();
			this.animatedObjects.draw();
			if (this.undoStack == null || this.undoStack.length == 0)
			{
				this.fireEvent("AnimationUndoUnavailable","NoData");
			}

		}			
	}
	
	this.resetAll = function()
	{
		this.clearHistory();
		this.animatedObjects.clearAllObjects();
		this.animatedObjects.draw();
		clearTimeout(timer);
	}
	
	this.skipForward = function()
	{
		if (this.currentlyAnimating)
		{
			this.animatedObjects.runFast = true;
			while (this.AnimationSteps != null && this.currentAnimation < this.AnimationSteps.length)
			{
				var i;
				for (i = 0; this.currentBlock != null && i < this.currentBlock.length; i++)
				{
					var objectID = this.currentBlock[i].objectID;
					this.animatedObjects.setNodePosition(objectID,
													this.currentBlock[i].toX,
													this.currentBlock[i].toY);
				}
				if (this.doingUndo)
				{
					this.finishUndoBlock(this.undoStack.pop())
				}
				this.startNextBlock();
				for (i= 0; i < this.currentBlock.length; i++)
				{
					var objectID = this.currentBlock[i].objectID;
					this.animatedObjects.setNodePosition(objectID,
													this.currentBlock[i].toX,
													this.currentBlock[i].toY);
				}		
				
			}
			this.animatedObjects.update();
			this.currentlyAnimating = false;
			this.awaitingStep = false;
			this.doingUndo = false;
			
			this.animatedObjects.runFast = false;
			this.fireEvent("AnimationEnded","NoData");
			clearTimeout(timer);
			this.animatedObjects.update();
			this.animatedObjects.draw();			
		}
	}
	
	
	this.finishUndoBlock = function(undoBlock)
	{
		for (var i = undoBlock.length - 1; i >= 0; i--)
		{
			undoBlock[i].undoInitialStep(this.animatedObjects);
			
		}
		this.doingUndo = false;
		
		// If we are at the final end of the animation ...
		if (this.undoAnimationStepIndices.length == 0)
		{
			this.awaitingStep = false;
			this.currentlyAnimating = false;
			this.undoAnimationStepIndices = this.undoAnimationStepIndicesStack.pop();
			this.AnimationSteps = this.previousAnimationSteps.pop();
			this.fireEvent("AnimationEnded","NoData");
			this.fireEvent("AnimationUndo","NoData");
			this.currentBlock = [];
			if (this.undoStack == null || this.undoStack.length == 0)
			{
				this.currentlyAnimating = false;
				this.awaitingStep = false;
				this.fireEvent("AnimationUndoUnavailable","NoData");
			}
			
			clearTimeout(timer);
			this.animatedObjects.update();
			this.animatedObjects.draw();
			
			
			return false;
		}
		return true;
	}
	
	
	this.undoLastBlock = function()
	{
		
		if (this.undoAnimationStepIndices.length == 0)
		{
			
			// Nothing on the undo stack.  Return
			return;
			
		}
		if (this.undoAnimationStepIndices.length > 0)
		{
			this.doingUndo = true;
			var anyAnimations = false;
			this.currentAnimation = this.undoAnimationStepIndices.pop();
			this.currentBlock = [];
			var undo = this.undoStack[this.undoStack.length - 1];
			var i;
			for (i = undo.length - 1; i >= 0; i--)
			{
				var animateNext  =  undo[i].addUndoAnimation(this.currentBlock);
				anyAnimations = anyAnimations || animateNext;
				
			}
			this.currFrame = 0;
			
			// Hack:  If there are not any animations, and we are currently paused,
			// then set the current frame to the end of the animation, so that we will
			// advance immediagely upon the next step button.  If we are not paused, then
			// animate as normal.
			if (!anyAnimations && this.animationPaused  )
			{
				this.currFrame = this.animationBlockLength;
			}
			this.currentlyAnimating = true;				
		}
		
	}
	this.setLayer = function(shown, layers)
	{
		this.animatedObjects.setLayer(shown, layers)
		// Drop in an extra draw call here, just in case we are not
		// in the middle of an update loop when this changes
		this.animatedObjects.draw();
	}
	
	
	this.setAllLayers = function(layers)
	{
		this.animatedObjects.setAllLayers(layers);
		// Drop in an extra draw call here, just in case we are not
		// in the middle of an update loop when this changes
		this.animatedObjects.draw();
	}
	 
	
	this.update = function()
	{
		
		if (this.currentlyAnimating)
		{
			this.currFrame = this.currFrame + 1;
			var i;
			for (i = 0; i < this.currentBlock.length; i++)
			{
				if (this.currFrame == this.animationBlockLength || (this.currFrame == 1 && this.animationBlockLength == 0))
				{
					this.animatedObjects.setNodePosition(this.currentBlock[i].objectID,
													     this.currentBlock[i].toX,
													     this.currentBlock[i].toY);
				}
				else if (this.currFrame < this.animationBlockLength)
				{
					var objectID = this.currentBlock[i].objectID;
					var percent = 1 / (this.animationBlockLength - this.currFrame);
					var oldX = this.animatedObjects.getNodeX(objectID);
					var oldY = this.animatedObjects.getNodeY(objectID);
					var targetX = this.currentBlock[i].toX;
					var targety  = this.currentBlock[i].toY;						
					var newX = this.lerp(this.animatedObjects.getNodeX(objectID), this.currentBlock[i].toX, percent);
					var newY = this.lerp(this.animatedObjects.getNodeY(objectID), this.currentBlock[i].toY, percent);
					this.animatedObjects.setNodePosition(objectID, newX, newY);
				}
			}
			if (this.currFrame >= this.animationBlockLength)
			{
				if (this.doingUndo)
				{
					if (this.finishUndoBlock(this.undoStack.pop()))
					{
						this.awaitingStep = true;
						this.fireEvent("AnimationWaiting","NoData");
					}

				}
				else
				{
					if (this.animationPaused && (this.currentAnimation < this.AnimationSteps.length))
					{
						this.awaitingStep = true;
						this.fireEvent("AnimationWaiting","NoData");
						this.currentBlock = [];
					}
					else
					{
						this.startNextBlock();
					}
				}
			}
			this.animatedObjects.update();		
		
		}

		
	}
	
}

AnimationManager.prototype = new EventListener();
AnimationManager.prototype.constructor = AnimationManager;

				
function SingleAnimation(id, fromX, fromY, toX, toY)
{
	this.objectID = id;
	this.fromX = fromX;
	this.fromY = fromY;
	this.toX = toX;
	this.toY = toY;	
}
// Copyright 2011 David Galles, University of San Francisco. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without modification, are
// permitted provided that the following conditions are met:
//
// 1. Redistributions of source code must retain the above copyright notice, this list of
// conditions and the following disclaimer.
//
// 2. Redistributions in binary form must reproduce the above copyright notice, this list
// of conditions and the following disclaimer in the documentation and/or other materials
// provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY <COPYRIGHT HOLDER> ``AS IS'' AND ANY EXPRESS OR IMPLIED
// WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
// FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> OR
// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
// SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
// ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
// ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
// The views and conclusions contained in the software and documentation are those of the
// authors and should not be interpreted as representing official policies, either expressed
// or implied, of the University of San Francisco

function addLabelToAlgorithmBar(labelName)
{
    var element = document.createTextNode(labelName);
	
	var tableEntry = document.createElement("td");	
	tableEntry.appendChild(element);
	
	
    var controlBar = document.getElementById("AlgorithmSpecificControls");
	
    //Append the element in page (in span).
    controlBar.appendChild(tableEntry);
	return element;
}

// TODO:  Make this stackable like radio butons
//        (keep backwards compatible, thought)
function addCheckboxToAlgorithmBar(boxLabel)
{	
	var element = document.createElement("input");

    element.setAttribute("type", "checkbox");
    element.setAttribute("value", boxLabel);
	
    var label = document.createTextNode(boxLabel);
	
	var tableEntry = document.createElement("td");	
	tableEntry.appendChild(element);
	tableEntry.appendChild(label);
	
    var controlBar = document.getElementById("AlgorithmSpecificControls");
	
    //Append the element in page (in span).
    controlBar.appendChild(tableEntry);
	return element;
}

function addRadioButtonGroupToAlgorithmBar(buttonNames, groupName)
{
	var buttonList = [];
	var newTable = document.createElement("table");
		
	for (var i = 0; i < buttonNames.length; i++)
	{
		var midLevel = document.createElement("tr");
		var bottomLevel = document.createElement("td");
		
		var button = document.createElement("input");
		button.setAttribute("type", "radio");
		button.setAttribute("name", groupName);
		button.setAttribute("value", buttonNames[i]);
		bottomLevel.appendChild(button);
		midLevel.appendChild(bottomLevel);
		var txtNode = document.createTextNode(" " + buttonNames[i]); 
		bottomLevel.appendChild(txtNode);
		newTable.appendChild(midLevel);	
		buttonList.push(button);
	}
	
	var topLevelTableEntry = document.createElement("td");
	topLevelTableEntry.appendChild(newTable);
	
	var controlBar = document.getElementById("AlgorithmSpecificControls");
	controlBar.appendChild(topLevelTableEntry);
	
	return buttonList
}


function addControlToAlgorithmBar(type, name) {
	
    var element = document.createElement("input");
	
    element.setAttribute("type", type);
    element.setAttribute("value", name);
    element.setAttribute("name", name);
	
	
	var tableEntry = document.createElement("td");
	
	tableEntry.appendChild(element);
	
	
    var controlBar = document.getElementById("AlgorithmSpecificControls");
	
    //Append the element in page (in span).
    controlBar.appendChild(tableEntry);
	return element;
	
}




function Algorithm(am)
{
	
}



Algorithm.prototype.setCodeAlpha = function(code, newAlpha)
{
   var i,j;
   for (i = 0; i < code.length; i++)
       for (j = 0; j < code[i].length; j++) {
          this.cmd("SetAlpha", code[i][j], newAlpha);
       }
}


Algorithm.prototype.addCodeToCanvasBase  = function(code, start_x, start_y, line_height, standard_color, layer)
{
        layer = typeof layer !== 'undefined' ? layer : 0;
	var codeID = Array(code.length);
	var i, j;
	for (i = 0; i < code.length; i++)
	{
		codeID[i] = new Array(code[i].length);
		for (j = 0; j < code[i].length; j++)
		{
			codeID[i][j] = this.nextIndex++;
			this.cmd("CreateLabel", codeID[i][j], code[i][j], start_x, start_y + i * line_height, 0);
			this.cmd("SetForegroundColor", codeID[i][j], standard_color);
			this.cmd("SetLayer", codeID[i][j], layer);
			if (j > 0)
			{
				this.cmd("AlignRight", codeID[i][j], codeID[i][j-1]);
			}
		}
		
		
	}
	return codeID;
}


Algorithm.prototype.init = function(am, w, h)
{
	this.animationManager = am;
	am.addListener("AnimationStarted", this, this.disableUI);
	am.addListener("AnimationEnded", this, this.enableUI);
	am.addListener("AnimationUndo", this, this.undo);
	this.canvasWidth = w;
	this.canvasHeight = h;
	
	this.actionHistory = [];
	this.recordAnimation = true;
	this.commands = []
}


// Overload in subclass
Algorithm.prototype.sizeChanged = function(newWidth, newHeight)
{
	
}


		
Algorithm.prototype.implementAction = function(funct, val)
{
	var nxt = [funct, val];			
	this.actionHistory.push(nxt);
	var retVal = funct(val);
	this.animationManager.StartNewAnimation(retVal);			
}
		
		
Algorithm.prototype.isAllDigits = function(str)
{
	for (var i = str.length - 1; i >= 0; i--)
	{
		if (str.charAt(i) < "0" || str.charAt(i) > "9")
		{
			return false;

		}
	}
	return true;
}
		
		
Algorithm.prototype.normalizeNumber = function(input, maxLen)
{
	if (!this.isAllDigits(input) || input == "")
	{
		return input;
	}
	else
	{
		return ("OOO0000" +input).substr(-maxLen, maxLen);
	}
}
		
Algorithm.prototype.disableUI = function(event)
{
	// to be overridden in base class
}

Algorithm.prototype.enableUI = function(event)
{
	// to be overridden in base class
}



function controlKey(keyASCII)
{
		return keyASCII == 8 || keyASCII == 9 || keyASCII == 37 || keyASCII == 38 ||
	keyASCII == 39 || keyASCII == 40 || keyASCII == 46;
}



Algorithm.prototype.returnSubmitFloat = function(field, funct, maxsize)
{
	if (maxsize != undefined)
	{
		field.size = maxsize;
	}
	return function(event)
	{
		var keyASCII = 0;
		if(window.event) // IE
		{
			keyASCII = event.keyCode
		}
		else if (event.which) // Netscape/Firefox/Opera
		{
			keyASCII = event.which
		} 
		// Submit on return
		if (keyASCII == 13)
		{
			funct();
		}
		// Control keys (arrows, del, etc) are always OK
		else if (controlKey(keyASCII))
		{
			return;
		}
		// - (minus sign) only OK at beginning of number
		//  (For now we will allow anywhere -- hard to see where the beginning of the
		//   number is ...)
		//else if (keyASCII == 109 && field.value.length  == 0)
		else if (keyASCII == 109)
		{
			return;
		}
		// Digis are OK if we have enough space
		else if ((maxsize != undefined || field.value.length < maxsize) &&
				 (keyASCII >= 48 && keyASCII <= 57))
		{
			return;
		}
		// . (Decimal point) is OK if we haven't had one yet, and there is space
		else if ((maxsize != undefined || field.value.length < maxsize) &&
				 (keyASCII == 190) && field.value.indexOf(".") == -1)
				 
		{
			return;
		}
		// Nothing else is OK
		else 		
		{
			return false;
		}
		
	}
}


Algorithm.prototype.returnSubmit = function(field, funct, maxsize, intOnly)
{
	if (maxsize != undefined)
	{
		field.size = maxsize;
	}
	return function(event)
	{
		var keyASCII = 0;
		if(window.event) // IE
		{
			keyASCII = event.keyCode
		}
		else if (event.which) // Netscape/Firefox/Opera
		{
			keyASCII = event.which
		} 
		if (keyASCII == 13 && funct !== null)
		{
			funct();
		}
                else if (keyASCII == 190 || keyASCII == 59 || keyASCII == 173 )
		{
			return false;	
		}
		else if ((maxsize != undefined && field.value.length >= maxsize) ||
				 intOnly && (keyASCII < 48 || keyASCII > 57))
		{
			if (!controlKey(keyASCII))
				return false;
		}
		
	}
	
}

Algorithm.prototype.addReturnSubmit = function(field, action)
{
	field.onkeydown = this.returnSubmit(field, action, 4, false);	
}

Algorithm.prototype.reset = function()
{
	// to be overriden in base class
	// (Throw exception here?)
}
		
Algorithm.prototype.undo = function(event)
{
	// Remvoe the last action (the one that we are going to undo)
	this.actionHistory.pop();
	// Clear out our data structure.  Be sure to implement reset in
	//   every AlgorithmAnimation subclass!
	this.reset();
	//  Redo all actions from the beginning, throwing out the animation
	//  commands (the animation manager will update the animation on its own).
	//  Note that if you do something non-deterministic, you might cause problems!
	//  Be sure if you do anything non-deterministic (that is, calls to a random
	//  number generator) you clear out the undo stack here and in the animation
	//  manager.
	//
	//  If this seems horribly inefficient -- it is! However, it seems to work well
	//  in practice, and you get undo for free for all algorithms, which is a non-trivial
	//  gain.
	var len = this.actionHistory.length;
	this.recordAnimation = false;
	for (var i = 0; i < len; i++)
	{
		this.actionHistory[i][0](this.actionHistory[i][1]);
	}
	this.recordAnimation = true;
}


Algorithm.prototype.clearHistory = function()
{
	this.actionHistory = [];
}
		
		// Helper method to add text input with nice border.
		//  AS3 probably has a built-in way to do this.   Replace when found.
		

		// Helper method to create a command string from a bunch of arguments
Algorithm.prototype.cmd = function()
{
	if (this.recordAnimation)
	{
		var command = arguments[0];
		for(i = 1; i < arguments.length; i++)
		{
			command = command + "<;>" + String(arguments[i]);
		}
		this.commands.push(command);
	}
	
}
