

var JSON;if(!JSON){JSON={};}
(function(){'use strict';function f(n){return n<10?'0'+n:n;}
if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+
f(this.getUTCDate())+'T'+
f(this.getUTCHours())+':'+
f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z':null;};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf();};}
var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}
function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}
if(typeof rep==='function'){value=rep.call(holder,key,value);}
switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}
gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}
v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v;}
if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==='string'){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}
v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}
if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}
rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}
return str('',{'':value});};}
if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}
return reviver.call(holder,key,value);}
text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+
('0000'+a.charCodeAt(0).toString(16)).slice(-4);});}
if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j;}
throw new SyntaxError('JSON.parse');};}}());

(function(){var
window=this,undefined,_jQuery=window.jQuery,_$=window.$,jQuery=window.jQuery=window.$=function(selector,context){return new jQuery.fn.init(selector,context);},quickExpr=/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,isSimple=/^.[^:#\[\.,]*$/;jQuery.fn=jQuery.prototype={init:function(selector,context){selector=selector||document;if(selector.nodeType){this[0]=selector;this.length=1;this.context=selector;return this;}
if(typeof selector==="string"){var match=quickExpr.exec(selector);if(match&&(match[1]||!context)){if(match[1])
selector=jQuery.clean([match[1]],context);else{var elem=document.getElementById(match[3]);if(elem&&elem.id!=match[3])
return jQuery().find(selector);var ret=jQuery(elem||[]);ret.context=document;ret.selector=selector;return ret;}}else
return jQuery(context).find(selector);}else if(jQuery.isFunction(selector))
return jQuery(document).ready(selector);if(selector.selector&&selector.context){this.selector=selector.selector;this.context=selector.context;}
return this.setArray(jQuery.isArray(selector)?selector:jQuery.makeArray(selector));},selector:"",jquery:"1.3.2",size:function(){return this.length;},get:function(num){return num===undefined?Array.prototype.slice.call(this):this[num];},pushStack:function(elems,name,selector){var ret=jQuery(elems);ret.prevObject=this;ret.context=this.context;if(name==="find")
ret.selector=this.selector+(this.selector?" ":"")+selector;else if(name)
ret.selector=this.selector+"."+name+"("+selector+")";return ret;},setArray:function(elems){this.length=0;Array.prototype.push.apply(this,elems);return this;},each:function(callback,args){return jQuery.each(this,callback,args);},index:function(elem){return jQuery.inArray(elem&&elem.jquery?elem[0]:elem,this);},attr:function(name,value,type){var options=name;if(typeof name==="string")
if(value===undefined)
return this[0]&&jQuery[type||"attr"](this[0],name);else{options={};options[name]=value;}
return this.each(function(i){for(name in options)
jQuery.attr(type?this.style:this,name,jQuery.prop(this,options[name],type,i,name));});},css:function(key,value){if((key=='width'||key=='height')&&parseFloat(value)<0)
value=undefined;return this.attr(key,value,"curCSS");},text:function(text){if(typeof text!=="object"&&text!=null)
return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(text));var ret="";jQuery.each(text||this,function(){jQuery.each(this.childNodes,function(){if(this.nodeType!=8)
ret+=this.nodeType!=1?this.nodeValue:jQuery.fn.text([this]);});});return ret;},wrapAll:function(html){if(this[0]){var wrap=jQuery(html,this[0].ownerDocument).clone();if(this[0].parentNode)
wrap.insertBefore(this[0]);wrap.map(function(){var elem=this;while(elem.firstChild)
elem=elem.firstChild;return elem;}).append(this);}
return this;},wrapInner:function(html){return this.each(function(){jQuery(this).contents().wrapAll(html);});},wrap:function(html){return this.each(function(){jQuery(this).wrapAll(html);});},append:function(){return this.domManip(arguments,true,function(elem){if(this.nodeType==1)
this.appendChild(elem);});},prepend:function(){return this.domManip(arguments,true,function(elem){if(this.nodeType==1)
this.insertBefore(elem,this.firstChild);});},before:function(){return this.domManip(arguments,false,function(elem){this.parentNode.insertBefore(elem,this);});},after:function(){return this.domManip(arguments,false,function(elem){this.parentNode.insertBefore(elem,this.nextSibling);});},end:function(){return this.prevObject||jQuery([]);},push:[].push,sort:[].sort,splice:[].splice,find:function(selector){if(this.length===1){var ret=this.pushStack([],"find",selector);ret.length=0;jQuery.find(selector,this[0],ret);return ret;}else{return this.pushStack(jQuery.unique(jQuery.map(this,function(elem){return jQuery.find(selector,elem);})),"find",selector);}},clone:function(events){var ret=this.map(function(){if(!jQuery.support.noCloneEvent&&!jQuery.isXMLDoc(this)){var html=this.outerHTML;if(!html){var div=this.ownerDocument.createElement("div");div.appendChild(this.cloneNode(true));html=div.innerHTML;}
return jQuery.clean([html.replace(/ jQuery\d+="(?:\d+|null)"/g,"").replace(/^\s*/,"")])[0];}else
return this.cloneNode(true);});if(events===true){var orig=this.find("*").andSelf(),i=0;ret.find("*").andSelf().each(function(){if(this.nodeName!==orig[i].nodeName)
return;var events=jQuery.data(orig[i],"events");for(var type in events){for(var handler in events[type]){jQuery.event.add(this,type,events[type][handler],events[type][handler].data);}}
i++;});}
return ret;},filter:function(selector){return this.pushStack(jQuery.isFunction(selector)&&jQuery.grep(this,function(elem,i){return selector.call(elem,i);})||jQuery.multiFilter(selector,jQuery.grep(this,function(elem){return elem.nodeType===1;})),"filter",selector);},closest:function(selector){var pos=jQuery.expr.match.POS.test(selector)?jQuery(selector):null,closer=0;return this.map(function(){var cur=this;while(cur&&cur.ownerDocument){if(pos?pos.index(cur)>-1:jQuery(cur).is(selector)){jQuery.data(cur,"closest",closer);return cur;}
cur=cur.parentNode;closer++;}});},not:function(selector){if(typeof selector==="string")
if(isSimple.test(selector))
return this.pushStack(jQuery.multiFilter(selector,this,true),"not",selector);else
selector=jQuery.multiFilter(selector,this);var isArrayLike=selector.length&&selector[selector.length-1]!==undefined&&!selector.nodeType;return this.filter(function(){return isArrayLike?jQuery.inArray(this,selector)<0:this!=selector;});},add:function(selector){return this.pushStack(jQuery.unique(jQuery.merge(this.get(),typeof selector==="string"?jQuery(selector):jQuery.makeArray(selector))));},is:function(selector){return!!selector&&jQuery.multiFilter(selector,this).length>0;},hasClass:function(selector){return!!selector&&this.is("."+selector);},val:function(value){if(value===undefined){var elem=this[0];if(elem){if(jQuery.nodeName(elem,'option'))
return(elem.attributes.value||{}).specified?elem.value:elem.text;if(jQuery.nodeName(elem,"select")){var index=elem.selectedIndex,values=[],options=elem.options,one=elem.type=="select-one";if(index<0)
return null;for(var i=one?index:0,max=one?index+1:options.length;i<max;i++){var option=options[i];if(option.selected){value=jQuery(option).val();if(one)
return value;values.push(value);}}
return values;}
return(elem.value||"").replace(/\r/g,"");}
return undefined;}
if(typeof value==="number")
value+='';return this.each(function(){if(this.nodeType!=1)
return;if(jQuery.isArray(value)&&/radio|checkbox/.test(this.type))
this.checked=(jQuery.inArray(this.value,value)>=0||jQuery.inArray(this.name,value)>=0);else if(jQuery.nodeName(this,"select")){var values=jQuery.makeArray(value);jQuery("option",this).each(function(){this.selected=(jQuery.inArray(this.value,values)>=0||jQuery.inArray(this.text,values)>=0);});if(!values.length)
this.selectedIndex=-1;}else
this.value=value;});},html:function(value){return value===undefined?(this[0]?this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g,""):null):this.empty().append(value);},replaceWith:function(value){return this.after(value).remove();},eq:function(i){return this.slice(i,+i+1);},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments),"slice",Array.prototype.slice.call(arguments).join(","));},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},andSelf:function(){return this.add(this.prevObject);},domManip:function(args,table,callback){if(this[0]){var fragment=(this[0].ownerDocument||this[0]).createDocumentFragment(),scripts=jQuery.clean(args,(this[0].ownerDocument||this[0]),fragment),first=fragment.firstChild;if(first)
for(var i=0,l=this.length;i<l;i++)
callback.call(root(this[i],first),this.length>1||i>0?fragment.cloneNode(true):fragment);if(scripts)
jQuery.each(scripts,evalScript);}
return this;function root(elem,cur){return table&&jQuery.nodeName(elem,"table")&&jQuery.nodeName(cur,"tr")?(elem.getElementsByTagName("tbody")[0]||elem.appendChild(elem.ownerDocument.createElement("tbody"))):elem;}}};jQuery.fn.init.prototype=jQuery.fn;function evalScript(i,elem){if(elem.src)
jQuery.ajax({url:elem.src,async:false,dataType:"script"});else
jQuery.globalEval(elem.text||elem.textContent||elem.innerHTML||"");if(elem.parentNode)
elem.parentNode.removeChild(elem);}
function now(){return+new Date;}
jQuery.extend=jQuery.fn.extend=function(){var target=arguments[0]||{},i=1,length=arguments.length,deep=false,options;if(typeof target==="boolean"){deep=target;target=arguments[1]||{};i=2;}
if(typeof target!=="object"&&!jQuery.isFunction(target))
target={};if(length==i){target=this;--i;}
for(;i<length;i++)
if((options=arguments[i])!=null)
for(var name in options){var src=target[name],copy=options[name];if(target===copy)
continue;if(deep&&copy&&typeof copy==="object"&&!copy.nodeType)
target[name]=jQuery.extend(deep,src||(copy.length!=null?[]:{}),copy);else if(copy!==undefined)
target[name]=copy;}
return target;};var exclude=/z-?index|font-?weight|opacity|zoom|line-?height/i,defaultView=document.defaultView||{},toString=Object.prototype.toString;jQuery.extend({noConflict:function(deep){window.$=_$;if(deep)
window.jQuery=_jQuery;return jQuery;},isFunction:function(obj){return toString.call(obj)==="[object Function]";},isArray:function(obj){return toString.call(obj)==="[object Array]";},isXMLDoc:function(elem){return elem.nodeType===9&&elem.documentElement.nodeName!=="HTML"||!!elem.ownerDocument&&jQuery.isXMLDoc(elem.ownerDocument);},globalEval:function(data){if(data&&/\S/.test(data)){var head=document.getElementsByTagName("head")[0]||document.documentElement,script=document.createElement("script");script.type="text/javascript";if(jQuery.support.scriptEval)
script.appendChild(document.createTextNode(data));else
script.text=data;head.insertBefore(script,head.firstChild);head.removeChild(script);}},nodeName:function(elem,name){return elem.nodeName&&elem.nodeName.toUpperCase()==name.toUpperCase();},each:function(object,callback,args){var name,i=0,length=object.length;if(args){if(length===undefined){for(name in object)
if(callback.apply(object[name],args)===false)
break;}else
for(;i<length;)
if(callback.apply(object[i++],args)===false)
break;}else{if(length===undefined){for(name in object)
if(callback.call(object[name],name,object[name])===false)
break;}else
for(var value=object[0];i<length&&callback.call(value,i,value)!==false;value=object[++i]){}}
return object;},prop:function(elem,value,type,i,name){if(jQuery.isFunction(value))
value=value.call(elem,i);return typeof value==="number"&&type=="curCSS"&&!exclude.test(name)?value+"px":value;},className:{add:function(elem,classNames){jQuery.each((classNames||"").split(/\s+/),function(i,className){if(elem.nodeType==1&&!jQuery.className.has(elem.className,className))
elem.className+=(elem.className?" ":"")+className;});},remove:function(elem,classNames){if(elem.nodeType==1)
elem.className=classNames!==undefined?jQuery.grep(elem.className.split(/\s+/),function(className){return!jQuery.className.has(classNames,className);}).join(" "):"";},has:function(elem,className){return elem&&jQuery.inArray(className,(elem.className||elem).toString().split(/\s+/))>-1;}},swap:function(elem,options,callback){var old={};for(var name in options){old[name]=elem.style[name];elem.style[name]=options[name];}
callback.call(elem);for(var name in options)
elem.style[name]=old[name];},css:function(elem,name,force,extra){if(name=="width"||name=="height"){var val,props={position:"absolute",visibility:"hidden",display:"block"},which=name=="width"?["Left","Right"]:["Top","Bottom"];function getWH(){val=name=="width"?elem.offsetWidth:elem.offsetHeight;if(extra==="border")
return;jQuery.each(which,function(){if(!extra)
val-=parseFloat(jQuery.curCSS(elem,"padding"+this,true))||0;if(extra==="margin")
val+=parseFloat(jQuery.curCSS(elem,"margin"+this,true))||0;else
val-=parseFloat(jQuery.curCSS(elem,"border"+this+"Width",true))||0;});}
if(elem.offsetWidth!==0)
getWH();else
jQuery.swap(elem,props,getWH);return Math.max(0,Math.round(val));}
return jQuery.curCSS(elem,name,force);},curCSS:function(elem,name,force){var ret,style=elem.style;if(name=="opacity"&&!jQuery.support.opacity){ret=jQuery.attr(style,"opacity");return ret==""?"1":ret;}
if(name.match(/float/i))
name=styleFloat;if(!force&&style&&style[name])
ret=style[name];else if(defaultView.getComputedStyle){if(name.match(/float/i))
name="float";name=name.replace(/([A-Z])/g,"-$1").toLowerCase();var computedStyle=defaultView.getComputedStyle(elem,null);if(computedStyle)
ret=computedStyle.getPropertyValue(name);if(name=="opacity"&&ret=="")
ret="1";}else if(elem.currentStyle){var camelCase=name.replace(/\-(\w)/g,function(all,letter){return letter.toUpperCase();});ret=elem.currentStyle[name]||elem.currentStyle[camelCase];if(!/^\d+(px)?$/i.test(ret)&&/^\d/.test(ret)){var left=style.left,rsLeft=elem.runtimeStyle.left;elem.runtimeStyle.left=elem.currentStyle.left;style.left=ret||0;ret=style.pixelLeft+"px";style.left=left;elem.runtimeStyle.left=rsLeft;}}
return ret;},clean:function(elems,context,fragment){context=context||document;if(typeof context.createElement==="undefined")
context=context.ownerDocument||context[0]&&context[0].ownerDocument||document;if(!fragment&&elems.length===1&&typeof elems[0]==="string"){var match=/^<(\w+)\s*\/?>$/.exec(elems[0]);if(match)
return[context.createElement(match[1])];}
var ret=[],scripts=[],div=context.createElement("div");jQuery.each(elems,function(i,elem){if(typeof elem==="number")
elem+='';if(!elem)
return;if(typeof elem==="string"){elem=elem.replace(/(<(\w+)[^>]*?)\/>/g,function(all,front,tag){return tag.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?all:front+"></"+tag+">";});var tags=elem.replace(/^\s+/,"").substring(0,10).toLowerCase();var wrap=!tags.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!tags.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||tags.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!tags.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!tags.indexOf("<td")||!tags.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!tags.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||!jQuery.support.htmlSerialize&&[1,"div<div>","</div>"]||[0,"",""];div.innerHTML=wrap[1]+elem+wrap[2];while(wrap[0]--)
div=div.lastChild;if(!jQuery.support.tbody){var hasBody=/<tbody/i.test(elem),tbody=!tags.indexOf("<table")&&!hasBody?div.firstChild&&div.firstChild.childNodes:wrap[1]=="<table>"&&!hasBody?div.childNodes:[];for(var j=tbody.length-1;j>=0;--j)
if(jQuery.nodeName(tbody[j],"tbody")&&!tbody[j].childNodes.length)
tbody[j].parentNode.removeChild(tbody[j]);}
if(!jQuery.support.leadingWhitespace&&/^\s/.test(elem))
div.insertBefore(context.createTextNode(elem.match(/^\s*/)[0]),div.firstChild);elem=jQuery.makeArray(div.childNodes);}
if(elem.nodeType)
ret.push(elem);else
ret=jQuery.merge(ret,elem);});if(fragment){for(var i=0;ret[i];i++){if(jQuery.nodeName(ret[i],"script")&&(!ret[i].type||ret[i].type.toLowerCase()==="text/javascript")){scripts.push(ret[i].parentNode?ret[i].parentNode.removeChild(ret[i]):ret[i]);}else{if(ret[i].nodeType===1)
ret.splice.apply(ret,[i+1,0].concat(jQuery.makeArray(ret[i].getElementsByTagName("script"))));fragment.appendChild(ret[i]);}}
return scripts;}
return ret;},attr:function(elem,name,value){if(!elem||elem.nodeType==3||elem.nodeType==8)
return undefined;var notxml=!jQuery.isXMLDoc(elem),set=value!==undefined;name=notxml&&jQuery.props[name]||name;if(elem.tagName){var special=/href|src|style/.test(name);if(name=="selected"&&elem.parentNode)
elem.parentNode.selectedIndex;if(name in elem&&notxml&&!special){if(set){if(name=="type"&&jQuery.nodeName(elem,"input")&&elem.parentNode)
throw"type property can't be changed";elem[name]=value;}
if(jQuery.nodeName(elem,"form")&&elem.getAttributeNode(name))
return elem.getAttributeNode(name).nodeValue;if(name=="tabIndex"){var attributeNode=elem.getAttributeNode("tabIndex");return attributeNode&&attributeNode.specified?attributeNode.value:elem.nodeName.match(/(button|input|object|select|textarea)/i)?0:elem.nodeName.match(/^(a|area)$/i)&&elem.href?0:undefined;}
return elem[name];}
if(!jQuery.support.style&&notxml&&name=="style")
return jQuery.attr(elem.style,"cssText",value);if(set)
elem.setAttribute(name,""+value);var attr=!jQuery.support.hrefNormalized&&notxml&&special?elem.getAttribute(name,2):elem.getAttribute(name);return attr===null?undefined:attr;}
if(!jQuery.support.opacity&&name=="opacity"){if(set){elem.zoom=1;elem.filter=(elem.filter||"").replace(/alpha\([^)]*\)/,"")+
(parseInt(value)+''=="NaN"?"":"alpha(opacity="+value*100+")");}
return elem.filter&&elem.filter.indexOf("opacity=")>=0?(parseFloat(elem.filter.match(/opacity=([^)]*)/)[1])/100)+'':"";}
name=name.replace(/-([a-z])/ig,function(all,letter){return letter.toUpperCase();});if(set)
elem[name]=value;return elem[name];},trim:function(text){return(text||"").replace(/^\s+|\s+$/g,"");},makeArray:function(array){var ret=[];if(array!=null){var i=array.length;if(i==null||typeof array==="string"||jQuery.isFunction(array)||array.setInterval)
ret[0]=array;else
while(i)
ret[--i]=array[i];}
return ret;},inArray:function(elem,array){for(var i=0,length=array.length;i<length;i++)
if(array[i]===elem)
return i;return-1;},merge:function(first,second){var i=0,elem,pos=first.length;if(!jQuery.support.getAll){while((elem=second[i++])!=null)
if(elem.nodeType!=8)
first[pos++]=elem;}else
while((elem=second[i++])!=null)
first[pos++]=elem;return first;},unique:function(array){var ret=[],done={};try{for(var i=0,length=array.length;i<length;i++){var id=jQuery.data(array[i]);if(!done[id]){done[id]=true;ret.push(array[i]);}}}catch(e){ret=array;}
return ret;},grep:function(elems,callback,inv){var ret=[];for(var i=0,length=elems.length;i<length;i++)
if(!inv!=!callback(elems[i],i))
ret.push(elems[i]);return ret;},map:function(elems,callback){var ret=[];for(var i=0,length=elems.length;i<length;i++){var value=callback(elems[i],i);if(value!=null)
ret[ret.length]=value;}
return ret.concat.apply([],ret);}});var userAgent=navigator.userAgent.toLowerCase();jQuery.browser={version:(userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,'0'])[1],safari:/webkit/.test(userAgent),opera:/opera/.test(userAgent),msie:/msie/.test(userAgent)&&!/opera/.test(userAgent),mozilla:/mozilla/.test(userAgent)&&!/(compatible|webkit)/.test(userAgent)};jQuery.each({parent:function(elem){return elem.parentNode;},parents:function(elem){return jQuery.dir(elem,"parentNode");},next:function(elem){return jQuery.nth(elem,2,"nextSibling");},prev:function(elem){return jQuery.nth(elem,2,"previousSibling");},nextAll:function(elem){return jQuery.dir(elem,"nextSibling");},prevAll:function(elem){return jQuery.dir(elem,"previousSibling");},siblings:function(elem){return jQuery.sibling(elem.parentNode.firstChild,elem);},children:function(elem){return jQuery.sibling(elem.firstChild);},contents:function(elem){return jQuery.nodeName(elem,"iframe")?elem.contentDocument||elem.contentWindow.document:jQuery.makeArray(elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(selector){var ret=jQuery.map(this,fn);if(selector&&typeof selector=="string")
ret=jQuery.multiFilter(selector,ret);return this.pushStack(jQuery.unique(ret),name,selector);};});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var ret=[],insert=jQuery(selector);for(var i=0,l=insert.length;i<l;i++){var elems=(i>0?this.clone(true):this).get();jQuery.fn[original].apply(jQuery(insert[i]),elems);ret=ret.concat(elems);}
return this.pushStack(ret,name,selector);};});jQuery.each({removeAttr:function(name){jQuery.attr(this,name,"");if(this.nodeType==1)
this.removeAttribute(name);},addClass:function(classNames){jQuery.className.add(this,classNames);},removeClass:function(classNames){jQuery.className.remove(this,classNames);},toggleClass:function(classNames,state){if(typeof state!=="boolean")
state=!jQuery.className.has(this,classNames);jQuery.className[state?"add":"remove"](this,classNames);},remove:function(selector){if(!selector||jQuery.filter(selector,[this]).length){jQuery("*",this).add([this]).each(function(){jQuery.event.remove(this);jQuery.removeData(this);});if(this.parentNode)
this.parentNode.removeChild(this);}},empty:function(){jQuery(this).children().remove();while(this.firstChild)
this.removeChild(this.firstChild);}},function(name,fn){jQuery.fn[name]=function(){return this.each(fn,arguments);};});function num(elem,prop){return elem[0]&&parseInt(jQuery.curCSS(elem[0],prop,true),10)||0;}
var expando="jQuery"+now(),uuid=0,windowData={};jQuery.extend({cache:{},data:function(elem,name,data){elem=elem==window?windowData:elem;var id=elem[expando];if(!id)
id=elem[expando]=++uuid;if(name&&!jQuery.cache[id])
jQuery.cache[id]={};if(data!==undefined)
jQuery.cache[id][name]=data;return name?jQuery.cache[id][name]:id;},removeData:function(elem,name){elem=elem==window?windowData:elem;var id=elem[expando];if(name){if(jQuery.cache[id]){delete jQuery.cache[id][name];name="";for(name in jQuery.cache[id])
break;if(!name)
jQuery.removeData(elem);}}else{try{delete elem[expando];}catch(e){if(elem.removeAttribute)
elem.removeAttribute(expando);}
delete jQuery.cache[id];}},queue:function(elem,type,data){if(elem){type=(type||"fx")+"queue";var q=jQuery.data(elem,type);if(!q||jQuery.isArray(data))
q=jQuery.data(elem,type,jQuery.makeArray(data));else if(data)
q.push(data);}
return q;},dequeue:function(elem,type){var queue=jQuery.queue(elem,type),fn=queue.shift();if(!type||type==="fx")
fn=queue[0];if(fn!==undefined)
fn.call(elem);}});jQuery.fn.extend({data:function(key,value){var parts=key.split(".");parts[1]=parts[1]?"."+parts[1]:"";if(value===undefined){var data=this.triggerHandler("getData"+parts[1]+"!",[parts[0]]);if(data===undefined&&this.length)
data=jQuery.data(this[0],key);return data===undefined&&parts[1]?this.data(parts[0]):data;}else
return this.trigger("setData"+parts[1]+"!",[parts[0],value]).each(function(){jQuery.data(this,key,value);});},removeData:function(key){return this.each(function(){jQuery.removeData(this,key);});},queue:function(type,data){if(typeof type!=="string"){data=type;type="fx";}
if(data===undefined)
return jQuery.queue(this[0],type);return this.each(function(){var queue=jQuery.queue(this,type,data);if(type=="fx"&&queue.length==1)
queue[0].call(this);});},dequeue:function(type){return this.each(function(){jQuery.dequeue(this,type);});}});(function(){var chunker=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,done=0,toString=Object.prototype.toString;var Sizzle=function(selector,context,results,seed){results=results||[];context=context||document;if(context.nodeType!==1&&context.nodeType!==9)
return[];if(!selector||typeof selector!=="string"){return results;}
var parts=[],m,set,checkSet,check,mode,extra,prune=true;chunker.lastIndex=0;while((m=chunker.exec(selector))!==null){parts.push(m[1]);if(m[2]){extra=RegExp.rightContext;break;}}
if(parts.length>1&&origPOS.exec(selector)){if(parts.length===2&&Expr.relative[parts[0]]){set=posProcess(parts[0]+parts[1],context);}else{set=Expr.relative[parts[0]]?[context]:Sizzle(parts.shift(),context);while(parts.length){selector=parts.shift();if(Expr.relative[selector])
selector+=parts.shift();set=posProcess(selector,set);}}}else{var ret=seed?{expr:parts.pop(),set:makeArray(seed)}:Sizzle.find(parts.pop(),parts.length===1&&context.parentNode?context.parentNode:context,isXML(context));set=Sizzle.filter(ret.expr,ret.set);if(parts.length>0){checkSet=makeArray(set);}else{prune=false;}
while(parts.length){var cur=parts.pop(),pop=cur;if(!Expr.relative[cur]){cur="";}else{pop=parts.pop();}
if(pop==null){pop=context;}
Expr.relative[cur](checkSet,pop,isXML(context));}}
if(!checkSet){checkSet=set;}
if(!checkSet){throw"Syntax error, unrecognized expression: "+(cur||selector);}
if(toString.call(checkSet)==="[object Array]"){if(!prune){results.push.apply(results,checkSet);}else if(context.nodeType===1){for(var i=0;checkSet[i]!=null;i++){if(checkSet[i]&&(checkSet[i]===true||checkSet[i].nodeType===1&&contains(context,checkSet[i]))){results.push(set[i]);}}}else{for(var i=0;checkSet[i]!=null;i++){if(checkSet[i]&&checkSet[i].nodeType===1){results.push(set[i]);}}}}else{makeArray(checkSet,results);}
if(extra){Sizzle(extra,context,results,seed);if(sortOrder){hasDuplicate=false;results.sort(sortOrder);if(hasDuplicate){for(var i=1;i<results.length;i++){if(results[i]===results[i-1]){results.splice(i--,1);}}}}}
return results;};Sizzle.matches=function(expr,set){return Sizzle(expr,null,null,set);};Sizzle.find=function(expr,context,isXML){var set,match;if(!expr){return[];}
for(var i=0,l=Expr.order.length;i<l;i++){var type=Expr.order[i],match;if((match=Expr.match[type].exec(expr))){var left=RegExp.leftContext;if(left.substr(left.length-1)!=="\\"){match[1]=(match[1]||"").replace(/\\/g,"");set=Expr.find[type](match,context,isXML);if(set!=null){expr=expr.replace(Expr.match[type],"");break;}}}}
if(!set){set=context.getElementsByTagName("*");}
return{set:set,expr:expr};};Sizzle.filter=function(expr,set,inplace,not){var old=expr,result=[],curLoop=set,match,anyFound,isXMLFilter=set&&set[0]&&isXML(set[0]);while(expr&&set.length){for(var type in Expr.filter){if((match=Expr.match[type].exec(expr))!=null){var filter=Expr.filter[type],found,item;anyFound=false;if(curLoop==result){result=[];}
if(Expr.preFilter[type]){match=Expr.preFilter[type](match,curLoop,inplace,result,not,isXMLFilter);if(!match){anyFound=found=true;}else if(match===true){continue;}}
if(match){for(var i=0;(item=curLoop[i])!=null;i++){if(item){found=filter(item,match,i,curLoop);var pass=not^!!found;if(inplace&&found!=null){if(pass){anyFound=true;}else{curLoop[i]=false;}}else if(pass){result.push(item);anyFound=true;}}}}
if(found!==undefined){if(!inplace){curLoop=result;}
expr=expr.replace(Expr.match[type],"");if(!anyFound){return[];}
break;}}}
if(expr==old){if(anyFound==null){break;}else{break;}}
old=expr;}
return curLoop;};var Expr=Sizzle.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(elem){return elem.getAttribute("href");}},relative:{"+":function(checkSet,part,isXML){var isPartStr=typeof part==="string",isTag=isPartStr&&!/\W/.test(part),isPartStrNotTag=isPartStr&&!isTag;if(isTag&&!isXML){part=part.toUpperCase();}
for(var i=0,l=checkSet.length,elem;i<l;i++){if((elem=checkSet[i])){while((elem=elem.previousSibling)&&elem.nodeType!==1){}
checkSet[i]=isPartStrNotTag||elem&&elem.nodeName===part?elem||false:elem===part;}}
if(isPartStrNotTag){Sizzle.filter(part,checkSet,true);}},">":function(checkSet,part,isXML){var isPartStr=typeof part==="string";if(isPartStr&&!/\W/.test(part)){part=isXML?part:part.toUpperCase();for(var i=0,l=checkSet.length;i<l;i++){var elem=checkSet[i];if(elem){var parent=elem.parentNode;checkSet[i]=parent.nodeName===part?parent:false;}}}else{for(var i=0,l=checkSet.length;i<l;i++){var elem=checkSet[i];if(elem){checkSet[i]=isPartStr?elem.parentNode:elem.parentNode===part;}}
if(isPartStr){Sizzle.filter(part,checkSet,true);}}},"":function(checkSet,part,isXML){var doneName=done++,checkFn=dirCheck;if(!part.match(/\W/)){var nodeCheck=part=isXML?part:part.toUpperCase();checkFn=dirNodeCheck;}
checkFn("parentNode",part,doneName,checkSet,nodeCheck,isXML);},"~":function(checkSet,part,isXML){var doneName=done++,checkFn=dirCheck;if(typeof part==="string"&&!part.match(/\W/)){var nodeCheck=part=isXML?part:part.toUpperCase();checkFn=dirNodeCheck;}
checkFn("previousSibling",part,doneName,checkSet,nodeCheck,isXML);}},find:{ID:function(match,context,isXML){if(typeof context.getElementById!=="undefined"&&!isXML){var m=context.getElementById(match[1]);return m?[m]:[];}},NAME:function(match,context,isXML){if(typeof context.getElementsByName!=="undefined"){var ret=[],results=context.getElementsByName(match[1]);for(var i=0,l=results.length;i<l;i++){if(results[i].getAttribute("name")===match[1]){ret.push(results[i]);}}
return ret.length===0?null:ret;}},TAG:function(match,context){return context.getElementsByTagName(match[1]);}},preFilter:{CLASS:function(match,curLoop,inplace,result,not,isXML){match=" "+match[1].replace(/\\/g,"")+" ";if(isXML){return match;}
for(var i=0,elem;(elem=curLoop[i])!=null;i++){if(elem){if(not^(elem.className&&(" "+elem.className+" ").indexOf(match)>=0)){if(!inplace)
result.push(elem);}else if(inplace){curLoop[i]=false;}}}
return false;},ID:function(match){return match[1].replace(/\\/g,"");},TAG:function(match,curLoop){for(var i=0;curLoop[i]===false;i++){}
return curLoop[i]&&isXML(curLoop[i])?match[1]:match[1].toUpperCase();},CHILD:function(match){if(match[1]=="nth"){var test=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(match[2]=="even"&&"2n"||match[2]=="odd"&&"2n+1"||!/\D/.test(match[2])&&"0n+"+match[2]||match[2]);match[2]=(test[1]+(test[2]||1))-0;match[3]=test[3]-0;}
match[0]=done++;return match;},ATTR:function(match,curLoop,inplace,result,not,isXML){var name=match[1].replace(/\\/g,"");if(!isXML&&Expr.attrMap[name]){match[1]=Expr.attrMap[name];}
if(match[2]==="~="){match[4]=" "+match[4]+" ";}
return match;},PSEUDO:function(match,curLoop,inplace,result,not){if(match[1]==="not"){if(match[3].match(chunker).length>1||/^\w/.test(match[3])){match[3]=Sizzle(match[3],null,null,curLoop);}else{var ret=Sizzle.filter(match[3],curLoop,inplace,true^not);if(!inplace){result.push.apply(result,ret);}
return false;}}else if(Expr.match.POS.test(match[0])||Expr.match.CHILD.test(match[0])){return true;}
return match;},POS:function(match){match.unshift(true);return match;}},filters:{enabled:function(elem){return elem.disabled===false&&elem.type!=="hidden";},disabled:function(elem){return elem.disabled===true;},checked:function(elem){return elem.checked===true;},selected:function(elem){elem.parentNode.selectedIndex;return elem.selected===true;},parent:function(elem){return!!elem.firstChild;},empty:function(elem){return!elem.firstChild;},has:function(elem,i,match){return!!Sizzle(match[3],elem).length;},header:function(elem){return/h\d/i.test(elem.nodeName);},text:function(elem){return"text"===elem.type;},radio:function(elem){return"radio"===elem.type;},checkbox:function(elem){return"checkbox"===elem.type;},file:function(elem){return"file"===elem.type;},password:function(elem){return"password"===elem.type;},submit:function(elem){return"submit"===elem.type;},image:function(elem){return"image"===elem.type;},reset:function(elem){return"reset"===elem.type;},button:function(elem){return"button"===elem.type||elem.nodeName.toUpperCase()==="BUTTON";},input:function(elem){return/input|select|textarea|button/i.test(elem.nodeName);}},setFilters:{first:function(elem,i){return i===0;},last:function(elem,i,match,array){return i===array.length-1;},even:function(elem,i){return i%2===0;},odd:function(elem,i){return i%2===1;},lt:function(elem,i,match){return i<match[3]-0;},gt:function(elem,i,match){return i>match[3]-0;},nth:function(elem,i,match){return match[3]-0==i;},eq:function(elem,i,match){return match[3]-0==i;}},filter:{PSEUDO:function(elem,match,i,array){var name=match[1],filter=Expr.filters[name];if(filter){return filter(elem,i,match,array);}else if(name==="contains"){return(elem.textContent||elem.innerText||"").indexOf(match[3])>=0;}else if(name==="not"){var not=match[3];for(var i=0,l=not.length;i<l;i++){if(not[i]===elem){return false;}}
return true;}},CHILD:function(elem,match){var type=match[1],node=elem;switch(type){case'only':case'first':while(node=node.previousSibling){if(node.nodeType===1)return false;}
if(type=='first')return true;node=elem;case'last':while(node=node.nextSibling){if(node.nodeType===1)return false;}
return true;case'nth':var first=match[2],last=match[3];if(first==1&&last==0){return true;}
var doneName=match[0],parent=elem.parentNode;if(parent&&(parent.sizcache!==doneName||!elem.nodeIndex)){var count=0;for(node=parent.firstChild;node;node=node.nextSibling){if(node.nodeType===1){node.nodeIndex=++count;}}
parent.sizcache=doneName;}
var diff=elem.nodeIndex-last;if(first==0){return diff==0;}else{return(diff%first==0&&diff/first>=0);}}},ID:function(elem,match){return elem.nodeType===1&&elem.getAttribute("id")===match;},TAG:function(elem,match){return(match==="*"&&elem.nodeType===1)||elem.nodeName===match;},CLASS:function(elem,match){return(" "+(elem.className||elem.getAttribute("class"))+" ").indexOf(match)>-1;},ATTR:function(elem,match){var name=match[1],result=Expr.attrHandle[name]?Expr.attrHandle[name](elem):elem[name]!=null?elem[name]:elem.getAttribute(name),value=result+"",type=match[2],check=match[4];return result==null?type==="!=":type==="="?value===check:type==="*="?value.indexOf(check)>=0:type==="~="?(" "+value+" ").indexOf(check)>=0:!check?value&&result!==false:type==="!="?value!=check:type==="^="?value.indexOf(check)===0:type==="$="?value.substr(value.length-check.length)===check:type==="|="?value===check||value.substr(0,check.length+1)===check+"-":false;},POS:function(elem,match,i,array){var name=match[2],filter=Expr.setFilters[name];if(filter){return filter(elem,i,match,array);}}}};var origPOS=Expr.match.POS;for(var type in Expr.match){Expr.match[type]=RegExp(Expr.match[type].source+/(?![^\[]*\])(?![^\(]*\))/.source);}
var makeArray=function(array,results){array=Array.prototype.slice.call(array);if(results){results.push.apply(results,array);return results;}
return array;};try{Array.prototype.slice.call(document.documentElement.childNodes);}catch(e){makeArray=function(array,results){var ret=results||[];if(toString.call(array)==="[object Array]"){Array.prototype.push.apply(ret,array);}else{if(typeof array.length==="number"){for(var i=0,l=array.length;i<l;i++){ret.push(array[i]);}}else{for(var i=0;array[i];i++){ret.push(array[i]);}}}
return ret;};}
var sortOrder;if(document.documentElement.compareDocumentPosition){sortOrder=function(a,b){var ret=a.compareDocumentPosition(b)&4?-1:a===b?0:1;if(ret===0){hasDuplicate=true;}
return ret;};}else if("sourceIndex"in document.documentElement){sortOrder=function(a,b){var ret=a.sourceIndex-b.sourceIndex;if(ret===0){hasDuplicate=true;}
return ret;};}else if(document.createRange){sortOrder=function(a,b){var aRange=a.ownerDocument.createRange(),bRange=b.ownerDocument.createRange();aRange.selectNode(a);aRange.collapse(true);bRange.selectNode(b);bRange.collapse(true);var ret=aRange.compareBoundaryPoints(Range.START_TO_END,bRange);if(ret===0){hasDuplicate=true;}
return ret;};}
(function(){var form=document.createElement("form"),id="script"+(new Date).getTime();form.innerHTML="<input name='"+id+"'/>";var root=document.documentElement;root.insertBefore(form,root.firstChild);if(!!document.getElementById(id)){Expr.find.ID=function(match,context,isXML){if(typeof context.getElementById!=="undefined"&&!isXML){var m=context.getElementById(match[1]);return m?m.id===match[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===match[1]?[m]:undefined:[];}};Expr.filter.ID=function(elem,match){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return elem.nodeType===1&&node&&node.nodeValue===match;};}
root.removeChild(form);})();(function(){var div=document.createElement("div");div.appendChild(document.createComment(""));if(div.getElementsByTagName("*").length>0){Expr.find.TAG=function(match,context){var results=context.getElementsByTagName(match[1]);if(match[1]==="*"){var tmp=[];for(var i=0;results[i];i++){if(results[i].nodeType===1){tmp.push(results[i]);}}
results=tmp;}
return results;};}
div.innerHTML="<a href='#'></a>";if(div.firstChild&&typeof div.firstChild.getAttribute!=="undefined"&&div.firstChild.getAttribute("href")!=="#"){Expr.attrHandle.href=function(elem){return elem.getAttribute("href",2);};}})();if(document.querySelectorAll)(function(){var oldSizzle=Sizzle,div=document.createElement("div");div.innerHTML="<p class='TEST'></p>";if(div.querySelectorAll&&div.querySelectorAll(".TEST").length===0){return;}
Sizzle=function(query,context,extra,seed){context=context||document;if(!seed&&context.nodeType===9&&!isXML(context)){try{return makeArray(context.querySelectorAll(query),extra);}catch(e){}}
return oldSizzle(query,context,extra,seed);};Sizzle.find=oldSizzle.find;Sizzle.filter=oldSizzle.filter;Sizzle.selectors=oldSizzle.selectors;Sizzle.matches=oldSizzle.matches;})();if(document.getElementsByClassName&&document.documentElement.getElementsByClassName)(function(){var div=document.createElement("div");div.innerHTML="<div class='test e'></div><div class='test'></div>";if(div.getElementsByClassName("e").length===0)
return;div.lastChild.className="e";if(div.getElementsByClassName("e").length===1)
return;Expr.order.splice(1,0,"CLASS");Expr.find.CLASS=function(match,context,isXML){if(typeof context.getElementsByClassName!=="undefined"&&!isXML){return context.getElementsByClassName(match[1]);}};})();function dirNodeCheck(dir,cur,doneName,checkSet,nodeCheck,isXML){var sibDir=dir=="previousSibling"&&!isXML;for(var i=0,l=checkSet.length;i<l;i++){var elem=checkSet[i];if(elem){if(sibDir&&elem.nodeType===1){elem.sizcache=doneName;elem.sizset=i;}
elem=elem[dir];var match=false;while(elem){if(elem.sizcache===doneName){match=checkSet[elem.sizset];break;}
if(elem.nodeType===1&&!isXML){elem.sizcache=doneName;elem.sizset=i;}
if(elem.nodeName===cur){match=elem;break;}
elem=elem[dir];}
checkSet[i]=match;}}}
function dirCheck(dir,cur,doneName,checkSet,nodeCheck,isXML){var sibDir=dir=="previousSibling"&&!isXML;for(var i=0,l=checkSet.length;i<l;i++){var elem=checkSet[i];if(elem){if(sibDir&&elem.nodeType===1){elem.sizcache=doneName;elem.sizset=i;}
elem=elem[dir];var match=false;while(elem){if(elem.sizcache===doneName){match=checkSet[elem.sizset];break;}
if(elem.nodeType===1){if(!isXML){elem.sizcache=doneName;elem.sizset=i;}
if(typeof cur!=="string"){if(elem===cur){match=true;break;}}else if(Sizzle.filter(cur,[elem]).length>0){match=elem;break;}}
elem=elem[dir];}
checkSet[i]=match;}}}
var contains=document.compareDocumentPosition?function(a,b){return a.compareDocumentPosition(b)&16;}:function(a,b){return a!==b&&(a.contains?a.contains(b):true);};var isXML=function(elem){return elem.nodeType===9&&elem.documentElement.nodeName!=="HTML"||!!elem.ownerDocument&&isXML(elem.ownerDocument);};var posProcess=function(selector,context){var tmpSet=[],later="",match,root=context.nodeType?[context]:context;while((match=Expr.match.PSEUDO.exec(selector))){later+=match[0];selector=selector.replace(Expr.match.PSEUDO,"");}
selector=Expr.relative[selector]?selector+"*":selector;for(var i=0,l=root.length;i<l;i++){Sizzle(selector,root[i],tmpSet);}
return Sizzle.filter(later,tmpSet);};jQuery.find=Sizzle;jQuery.filter=Sizzle.filter;jQuery.expr=Sizzle.selectors;jQuery.expr[":"]=jQuery.expr.filters;Sizzle.selectors.filters.hidden=function(elem){return elem.offsetWidth===0||elem.offsetHeight===0;};Sizzle.selectors.filters.visible=function(elem){return elem.offsetWidth>0||elem.offsetHeight>0;};Sizzle.selectors.filters.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;};jQuery.multiFilter=function(expr,elems,not){if(not){expr=":not("+expr+")";}
return Sizzle.matches(expr,elems);};jQuery.dir=function(elem,dir){var matched=[],cur=elem[dir];while(cur&&cur!=document){if(cur.nodeType==1)
matched.push(cur);cur=cur[dir];}
return matched;};jQuery.nth=function(cur,result,dir,elem){result=result||1;var num=0;for(;cur;cur=cur[dir])
if(cur.nodeType==1&&++num==result)
break;return cur;};jQuery.sibling=function(n,elem){var r=[];for(;n;n=n.nextSibling){if(n.nodeType==1&&n!=elem)
r.push(n);}
return r;};return;window.Sizzle=Sizzle;})();jQuery.event={add:function(elem,types,handler,data){if(elem.nodeType==3||elem.nodeType==8)
return;if(elem.setInterval&&elem!=window)
elem=window;if(!handler.guid)
handler.guid=this.guid++;if(data!==undefined){var fn=handler;handler=this.proxy(fn);handler.data=data;}
var events=jQuery.data(elem,"events")||jQuery.data(elem,"events",{}),handle=jQuery.data(elem,"handle")||jQuery.data(elem,"handle",function(){return typeof jQuery!=="undefined"&&!jQuery.event.triggered?jQuery.event.handle.apply(arguments.callee.elem,arguments):undefined;});handle.elem=elem;jQuery.each(types.split(/\s+/),function(index,type){var namespaces=type.split(".");type=namespaces.shift();handler.type=namespaces.slice().sort().join(".");var handlers=events[type];if(jQuery.event.specialAll[type])
jQuery.event.specialAll[type].setup.call(elem,data,namespaces);if(!handlers){handlers=events[type]={};if(!jQuery.event.special[type]||jQuery.event.special[type].setup.call(elem,data,namespaces)===false){if(elem.addEventListener)
elem.addEventListener(type,handle,false);else if(elem.attachEvent)
elem.attachEvent("on"+type,handle);}}
handlers[handler.guid]=handler;jQuery.event.global[type]=true;});elem=null;},guid:1,global:{},remove:function(elem,types,handler){if(elem.nodeType==3||elem.nodeType==8)
return;var events=jQuery.data(elem,"events"),ret,index;if(events){if(types===undefined||(typeof types==="string"&&types.charAt(0)=="."))
for(var type in events)
this.remove(elem,type+(types||""));else{if(types.type){handler=types.handler;types=types.type;}
jQuery.each(types.split(/\s+/),function(index,type){var namespaces=type.split(".");type=namespaces.shift();var namespace=RegExp("(^|\\.)"+namespaces.slice().sort().join(".*\\.")+"(\\.|$)");if(events[type]){if(handler)
delete events[type][handler.guid];else
for(var handle in events[type])
if(namespace.test(events[type][handle].type))
delete events[type][handle];if(jQuery.event.specialAll[type])
jQuery.event.specialAll[type].teardown.call(elem,namespaces);for(ret in events[type])break;if(!ret){if(!jQuery.event.special[type]||jQuery.event.special[type].teardown.call(elem,namespaces)===false){if(elem.removeEventListener)
elem.removeEventListener(type,jQuery.data(elem,"handle"),false);else if(elem.detachEvent)
elem.detachEvent("on"+type,jQuery.data(elem,"handle"));}
ret=null;delete events[type];}}});}
for(ret in events)break;if(!ret){var handle=jQuery.data(elem,"handle");if(handle)handle.elem=null;jQuery.removeData(elem,"events");jQuery.removeData(elem,"handle");}}},trigger:function(event,data,elem,bubbling){var type=event.type||event;if(!bubbling){event=typeof event==="object"?event[expando]?event:jQuery.extend(jQuery.Event(type),event):jQuery.Event(type);if(type.indexOf("!")>=0){event.type=type=type.slice(0,-1);event.exclusive=true;}
if(!elem){event.stopPropagation();if(this.global[type])
jQuery.each(jQuery.cache,function(){if(this.events&&this.events[type])
jQuery.event.trigger(event,data,this.handle.elem);});}
if(!elem||elem.nodeType==3||elem.nodeType==8)
return undefined;event.result=undefined;event.target=elem;data=jQuery.makeArray(data);data.unshift(event);}
event.currentTarget=elem;var handle=jQuery.data(elem,"handle");if(handle)
handle.apply(elem,data);if((!elem[type]||(jQuery.nodeName(elem,'a')&&type=="click"))&&elem["on"+type]&&elem["on"+type].apply(elem,data)===false)
event.result=false;if(!bubbling&&elem[type]&&!event.isDefaultPrevented()&&!(jQuery.nodeName(elem,'a')&&type=="click")){this.triggered=true;try{elem[type]();}catch(e){}}
this.triggered=false;if(!event.isPropagationStopped()){var parent=elem.parentNode||elem.ownerDocument;if(parent)
jQuery.event.trigger(event,data,parent,true);}},handle:function(event){var all,handlers;event=arguments[0]=jQuery.event.fix(event||window.event);event.currentTarget=this;var namespaces=event.type.split(".");event.type=namespaces.shift();all=!namespaces.length&&!event.exclusive;var namespace=RegExp("(^|\\.)"+namespaces.slice().sort().join(".*\\.")+"(\\.|$)");handlers=(jQuery.data(this,"events")||{})[event.type];for(var j in handlers){var handler=handlers[j];if(all||namespace.test(handler.type)){event.handler=handler;event.data=handler.data;var ret=handler.apply(this,arguments);if(ret!==undefined){event.result=ret;if(ret===false){event.preventDefault();event.stopPropagation();}}
if(event.isImmediatePropagationStopped())
break;}}},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(event){if(event[expando])
return event;var originalEvent=event;event=jQuery.Event(originalEvent);for(var i=this.props.length,prop;i;){prop=this.props[--i];event[prop]=originalEvent[prop];}
if(!event.target)
event.target=event.srcElement||document;if(event.target.nodeType==3)
event.target=event.target.parentNode;if(!event.relatedTarget&&event.fromElement)
event.relatedTarget=event.fromElement==event.target?event.toElement:event.fromElement;if(event.pageX==null&&event.clientX!=null){var doc=document.documentElement,body=document.body;event.pageX=event.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc.clientLeft||0);event.pageY=event.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc.clientTop||0);}
if(!event.which&&((event.charCode||event.charCode===0)?event.charCode:event.keyCode))
event.which=event.charCode||event.keyCode;if(!event.metaKey&&event.ctrlKey)
event.metaKey=event.ctrlKey;if(!event.which&&event.button)
event.which=(event.button&1?1:(event.button&2?3:(event.button&4?2:0)));return event;},proxy:function(fn,proxy){proxy=proxy||function(){return fn.apply(this,arguments);};proxy.guid=fn.guid=fn.guid||proxy.guid||this.guid++;return proxy;},special:{ready:{setup:bindReady,teardown:function(){}}},specialAll:{live:{setup:function(selector,namespaces){jQuery.event.add(this,namespaces[0],liveHandler);},teardown:function(namespaces){if(namespaces.length){var remove=0,name=RegExp("(^|\\.)"+namespaces[0]+"(\\.|$)");jQuery.each((jQuery.data(this,"events").live||{}),function(){if(name.test(this.type))
remove++;});if(remove<1)
jQuery.event.remove(this,namespaces[0],liveHandler);}}}}};jQuery.Event=function(src){if(!this.preventDefault)
return new jQuery.Event(src);if(src&&src.type){this.originalEvent=src;this.type=src.type;}else
this.type=src;this.timeStamp=now();this[expando]=true;};function returnFalse(){return false;}
function returnTrue(){return true;}
jQuery.Event.prototype={preventDefault:function(){this.isDefaultPrevented=returnTrue;var e=this.originalEvent;if(!e)
return;if(e.preventDefault)
e.preventDefault();e.returnValue=false;},stopPropagation:function(){this.isPropagationStopped=returnTrue;var e=this.originalEvent;if(!e)
return;if(e.stopPropagation)
e.stopPropagation();e.cancelBubble=true;},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=returnTrue;this.stopPropagation();},isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse};var withinElement=function(event){var parent=event.relatedTarget;while(parent&&parent!=this)
try{parent=parent.parentNode;}
catch(e){parent=this;}
if(parent!=this){event.type=event.data;jQuery.event.handle.apply(this,arguments);}};jQuery.each({mouseover:'mouseenter',mouseout:'mouseleave'},function(orig,fix){jQuery.event.special[fix]={setup:function(){jQuery.event.add(this,orig,withinElement,fix);},teardown:function(){jQuery.event.remove(this,orig,withinElement);}};});jQuery.fn.extend({bind:function(type,data,fn){return type=="unload"?this.one(type,data,fn):this.each(function(){jQuery.event.add(this,type,fn||data,fn&&data);});},one:function(type,data,fn){var one=jQuery.event.proxy(fn||data,function(event){jQuery(this).unbind(event,one);return(fn||data).apply(this,arguments);});return this.each(function(){jQuery.event.add(this,type,one,fn&&data);});},unbind:function(type,fn){return this.each(function(){jQuery.event.remove(this,type,fn);});},trigger:function(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function(type,data){if(this[0]){var event=jQuery.Event(type);event.preventDefault();event.stopPropagation();jQuery.event.trigger(event,data,this[0]);return event.result;}},toggle:function(fn){var args=arguments,i=1;while(i<args.length)
jQuery.event.proxy(fn,args[i++]);return this.click(jQuery.event.proxy(fn,function(event){this.lastToggle=(this.lastToggle||0)%i;event.preventDefault();return args[this.lastToggle++].apply(this,arguments)||false;}));},hover:function(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut);},ready:function(fn){bindReady();if(jQuery.isReady)
fn.call(document,jQuery);else
jQuery.readyList.push(fn);return this;},live:function(type,fn){var proxy=jQuery.event.proxy(fn);proxy.guid+=this.selector+type;jQuery(document).bind(liveConvert(type,this.selector),this.selector,proxy);return this;},die:function(type,fn){jQuery(document).unbind(liveConvert(type,this.selector),fn?{guid:fn.guid+this.selector+type}:null);return this;}});function liveHandler(event){var check=RegExp("(^|\\.)"+event.type+"(\\.|$)"),stop=true,elems=[];jQuery.each(jQuery.data(this,"events").live||[],function(i,fn){if(check.test(fn.type)){var elem=jQuery(event.target).closest(fn.data)[0];if(elem)
elems.push({elem:elem,fn:fn});}});elems.sort(function(a,b){return jQuery.data(a.elem,"closest")-jQuery.data(b.elem,"closest");});jQuery.each(elems,function(){if(this.fn.call(this.elem,event,this.fn.data)===false)
return(stop=false);});return stop;}
function liveConvert(type,selector){return["live",type,selector.replace(/\./g,"`").replace(/ /g,"|")].join(".");}
jQuery.extend({isReady:false,readyList:[],ready:function(){if(!jQuery.isReady){jQuery.isReady=true;if(jQuery.readyList){jQuery.each(jQuery.readyList,function(){this.call(document,jQuery);});jQuery.readyList=null;}
jQuery(document).triggerHandler("ready");}}});var readyBound=false;function bindReady(){if(readyBound)return;readyBound=true;if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);jQuery.ready();},false);}else if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",arguments.callee);jQuery.ready();}});if(document.documentElement.doScroll&&window==window.top)(function(){if(jQuery.isReady)return;try{document.documentElement.doScroll("left");}catch(error){setTimeout(arguments.callee,0);return;}
jQuery.ready();})();}
jQuery.event.add(window,"load",jQuery.ready);}
jQuery.each(("blur,focus,load,resize,scroll,unload,click,dblclick,"+"mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,"+"change,select,submit,keydown,keypress,keyup,error").split(","),function(i,name){jQuery.fn[name]=function(fn){return fn?this.bind(name,fn):this.trigger(name);};});jQuery(window).bind('unload',function(){for(var id in jQuery.cache)
if(id!=1&&jQuery.cache[id].handle)
jQuery.event.remove(jQuery.cache[id].handle.elem);});(function(){jQuery.support={};var root=document.documentElement,script=document.createElement("script"),div=document.createElement("div"),id="script"+(new Date).getTime();div.style.display="none";div.innerHTML='   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';var all=div.getElementsByTagName("*"),a=div.getElementsByTagName("a")[0];if(!all||!all.length||!a){return;}
jQuery.support={leadingWhitespace:div.firstChild.nodeType==3,tbody:!div.getElementsByTagName("tbody").length,objectAll:!!div.getElementsByTagName("object")[0].getElementsByTagName("*").length,htmlSerialize:!!div.getElementsByTagName("link").length,style:/red/.test(a.getAttribute("style")),hrefNormalized:a.getAttribute("href")==="/a",opacity:a.style.opacity==="0.5",cssFloat:!!a.style.cssFloat,scriptEval:false,noCloneEvent:true,boxModel:null};script.type="text/javascript";try{script.appendChild(document.createTextNode("window."+id+"=1;"));}catch(e){}
root.insertBefore(script,root.firstChild);if(window[id]){jQuery.support.scriptEval=true;delete window[id];}
root.removeChild(script);if(div.attachEvent&&div.fireEvent){div.attachEvent("onclick",function(){jQuery.support.noCloneEvent=false;div.detachEvent("onclick",arguments.callee);});div.cloneNode(true).fireEvent("onclick");}
jQuery(function(){var div=document.createElement("div");div.style.width=div.style.paddingLeft="1px";document.body.appendChild(div);jQuery.boxModel=jQuery.support.boxModel=div.offsetWidth===2;document.body.removeChild(div).style.display='none';});})();var styleFloat=jQuery.support.cssFloat?"cssFloat":"styleFloat";jQuery.props={"for":"htmlFor","class":"className","float":styleFloat,cssFloat:styleFloat,styleFloat:styleFloat,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",tabindex:"tabIndex"};jQuery.fn.extend({_load:jQuery.fn.load,load:function(url,params,callback){if(typeof url!=="string")
return this._load(url);var off=url.indexOf(" ");if(off>=0){var selector=url.slice(off,url.length);url=url.slice(0,off);}
var type="GET";if(params)
if(jQuery.isFunction(params)){callback=params;params=null;}else if(typeof params==="object"){params=jQuery.param(params);type="POST";}
var self=this;jQuery.ajax({url:url,type:type,dataType:"html",data:params,complete:function(res,status){if(status=="success"||status=="notmodified")
self.html(selector?jQuery("<div/>").append(res.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(selector):res.responseText);if(callback)
self.each(callback,[res.responseText,status,res]);}});return this;},serialize:function(){return jQuery.param(this.serializeArray());},serializeArray:function(){return this.map(function(){return this.elements?jQuery.makeArray(this.elements):this;}).filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i.test(this.type));}).map(function(i,elem){var val=jQuery(this).val();return val==null?null:jQuery.isArray(val)?jQuery.map(val,function(val,i){return{name:elem.name,value:val};}):{name:elem.name,value:val};}).get();}});jQuery.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(i,o){jQuery.fn[o]=function(f){return this.bind(o,f);};});var jsc=now();jQuery.extend({get:function(url,data,callback,type){if(jQuery.isFunction(data)){callback=data;data=null;}
return jQuery.ajax({type:"GET",url:url,data:data,success:callback,dataType:type});},getScript:function(url,callback){return jQuery.get(url,null,callback,"script");},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json");},post:function(url,data,callback,type){if(jQuery.isFunction(data)){callback=data;data={};}
return jQuery.ajax({type:"POST",url:url,data:data,success:callback,dataType:type});},ajaxSetup:function(settings){jQuery.extend(jQuery.ajaxSettings,settings);},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return window.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest();},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(s){s=jQuery.extend(true,s,jQuery.extend(true,{},jQuery.ajaxSettings,s));var jsonp,jsre=/=\?(&|$)/g,status,data,type=s.type.toUpperCase();if(s.data&&s.processData&&typeof s.data!=="string")
s.data=jQuery.param(s.data);if(s.dataType=="jsonp"){if(type=="GET"){if(!s.url.match(jsre))
s.url+=(s.url.match(/\?/)?"&":"?")+(s.jsonp||"callback")+"=?";}else if(!s.data||!s.data.match(jsre))
s.data=(s.data?s.data+"&":"")+(s.jsonp||"callback")+"=?";s.dataType="json";}
if(s.dataType=="json"&&(s.data&&s.data.match(jsre)||s.url.match(jsre))){jsonp="jsonp"+jsc++;if(s.data)
s.data=(s.data+"").replace(jsre,"="+jsonp+"$1");s.url=s.url.replace(jsre,"="+jsonp+"$1");s.dataType="script";window[jsonp]=function(tmp){data=tmp;success();complete();window[jsonp]=undefined;try{delete window[jsonp];}catch(e){}
if(head)
head.removeChild(script);};}
if(s.dataType=="script"&&s.cache==null)
s.cache=false;if(s.cache===false&&type=="GET"){var ts=now();var ret=s.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+ts+"$2");s.url=ret+((ret==s.url)?(s.url.match(/\?/)?"&":"?")+"_="+ts:"");}
if(s.data&&type=="GET"){s.url+=(s.url.match(/\?/)?"&":"?")+s.data;s.data=null;}
if(s.global&&!jQuery.active++)
jQuery.event.trigger("ajaxStart");var parts=/^(\w+:)?\/\/([^\/?#]+)/.exec(s.url);if(s.dataType=="script"&&type=="GET"&&parts&&(parts[1]&&parts[1]!=location.protocol||parts[2]!=location.host)){var head=document.getElementsByTagName("head")[0];var script=document.createElement("script");script.src=s.url;if(s.scriptCharset)
script.charset=s.scriptCharset;if(!jsonp){var done=false;script.onload=script.onreadystatechange=function(){if(!done&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){done=true;success();complete();script.onload=script.onreadystatechange=null;head.removeChild(script);}};}
head.appendChild(script);return undefined;}
var requestDone=false;var xhr=s.xhr();if(s.username)
xhr.open(type,s.url,s.async,s.username,s.password);else
xhr.open(type,s.url,s.async);try{if(s.data)
xhr.setRequestHeader("Content-Type",s.contentType);if(s.ifModified)
xhr.setRequestHeader("If-Modified-Since",jQuery.lastModified[s.url]||"Thu, 01 Jan 1970 00:00:00 GMT");xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");xhr.setRequestHeader("Accept",s.dataType&&s.accepts[s.dataType]?s.accepts[s.dataType]+", */*":s.accepts._default);}catch(e){}
if(s.beforeSend&&s.beforeSend(xhr,s)===false){if(s.global&&!--jQuery.active)
jQuery.event.trigger("ajaxStop");xhr.abort();return false;}
if(s.global)
jQuery.event.trigger("ajaxSend",[xhr,s]);var onreadystatechange=function(isTimeout){if(xhr.readyState==0){if(ival){clearInterval(ival);ival=null;if(s.global&&!--jQuery.active)
jQuery.event.trigger("ajaxStop");}}else if(!requestDone&&xhr&&(xhr.readyState==4||isTimeout=="timeout")){requestDone=true;if(ival){clearInterval(ival);ival=null;}
status=isTimeout=="timeout"?"timeout":!jQuery.httpSuccess(xhr)?"error":s.ifModified&&jQuery.httpNotModified(xhr,s.url)?"notmodified":"success";if(status=="success"){try{data=jQuery.httpData(xhr,s.dataType,s);}catch(e){status="parsererror";}}
if(status=="success"){var modRes;try{modRes=xhr.getResponseHeader("Last-Modified");}catch(e){}
if(s.ifModified&&modRes)
jQuery.lastModified[s.url]=modRes;if(!jsonp)
success();}else
jQuery.handleError(s,xhr,status);complete();if(isTimeout)
xhr.abort();if(s.async)
xhr=null;}};if(s.async){var ival=setInterval(onreadystatechange,13);if(s.timeout>0)
setTimeout(function(){if(xhr&&!requestDone)
onreadystatechange("timeout");},s.timeout);}
try{xhr.send(s.data);}catch(e){jQuery.handleError(s,xhr,null,e);}
if(!s.async)
onreadystatechange();function success(){if(s.success)
s.success(data,status);if(s.global)
jQuery.event.trigger("ajaxSuccess",[xhr,s]);}
function complete(){if(s.complete)
s.complete(xhr,status);if(s.global)
jQuery.event.trigger("ajaxComplete",[xhr,s]);if(s.global&&!--jQuery.active)
jQuery.event.trigger("ajaxStop");}
return xhr;},handleError:function(s,xhr,status,e){if(s.error)s.error(xhr,status,e);if(s.global)
jQuery.event.trigger("ajaxError",[xhr,s,e]);},active:0,httpSuccess:function(xhr){try{return!xhr.status&&location.protocol=="file:"||(xhr.status>=200&&xhr.status<300)||xhr.status==304||xhr.status==1223;}catch(e){}
return false;},httpNotModified:function(xhr,url){try{var xhrRes=xhr.getResponseHeader("Last-Modified");return xhr.status==304||xhrRes==jQuery.lastModified[url];}catch(e){}
return false;},httpData:function(xhr,type,s){var ct=xhr.getResponseHeader("content-type"),xml=type=="xml"||!type&&ct&&ct.indexOf("xml")>=0,data=xml?xhr.responseXML:xhr.responseText;if(xml&&data.documentElement.tagName=="parsererror")
throw"parsererror";if(s&&s.dataFilter)
data=s.dataFilter(data,type);if(typeof data==="string"){if(type=="script")
jQuery.globalEval(data);if(type=="json")
data=window["eval"]("("+data+")");}
return data;},param:function(a){var s=[];function add(key,value){s[s.length]=encodeURIComponent(key)+'='+encodeURIComponent(value);};if(jQuery.isArray(a)||a.jquery)
jQuery.each(a,function(){add(this.name,this.value);});else
for(var j in a)
if(jQuery.isArray(a[j]))
jQuery.each(a[j],function(){add(j,this);});else
add(j,jQuery.isFunction(a[j])?a[j]():a[j]);return s.join("&").replace(/%20/g,"+");}});var elemdisplay={},timerId,fxAttrs=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];function genFx(type,num){var obj={};jQuery.each(fxAttrs.concat.apply([],fxAttrs.slice(0,num)),function(){obj[this]=type;});return obj;}
jQuery.fn.extend({show:function(speed,callback){if(speed){return this.animate(genFx("show",3),speed,callback);}else{for(var i=0,l=this.length;i<l;i++){var old=jQuery.data(this[i],"olddisplay");this[i].style.display=old||"";if(jQuery.css(this[i],"display")==="none"){var tagName=this[i].tagName,display;if(elemdisplay[tagName]){display=elemdisplay[tagName];}else{var elem=jQuery("<"+tagName+" />").appendTo("body");display=elem.css("display");if(display==="none")
display="block";elem.remove();elemdisplay[tagName]=display;}
jQuery.data(this[i],"olddisplay",display);}}
for(var i=0,l=this.length;i<l;i++){this[i].style.display=jQuery.data(this[i],"olddisplay")||"";}
return this;}},hide:function(speed,callback){if(speed){return this.animate(genFx("hide",3),speed,callback);}else{for(var i=0,l=this.length;i<l;i++){var old=jQuery.data(this[i],"olddisplay");if(!old&&old!=="none")
jQuery.data(this[i],"olddisplay",jQuery.css(this[i],"display"));}
for(var i=0,l=this.length;i<l;i++){this[i].style.display="none";}
return this;}},_toggle:jQuery.fn.toggle,toggle:function(fn,fn2){var bool=typeof fn==="boolean";return jQuery.isFunction(fn)&&jQuery.isFunction(fn2)?this._toggle.apply(this,arguments):fn==null||bool?this.each(function(){var state=bool?fn:jQuery(this).is(":hidden");jQuery(this)[state?"show":"hide"]();}):this.animate(genFx("toggle",3),fn,fn2);},fadeTo:function(speed,to,callback){return this.animate({opacity:to},speed,callback);},animate:function(prop,speed,easing,callback){var optall=jQuery.speed(speed,easing,callback);return this[optall.queue===false?"each":"queue"](function(){var opt=jQuery.extend({},optall),p,hidden=this.nodeType==1&&jQuery(this).is(":hidden"),self=this;for(p in prop){if(prop[p]=="hide"&&hidden||prop[p]=="show"&&!hidden)
return opt.complete.call(this);if((p=="height"||p=="width")&&this.style){opt.display=jQuery.css(this,"display");opt.overflow=this.style.overflow;}}
if(opt.overflow!=null)
this.style.overflow="hidden";opt.curAnim=jQuery.extend({},prop);jQuery.each(prop,function(name,val){var e=new jQuery.fx(self,opt,name);if(/toggle|show|hide/.test(val))
e[val=="toggle"?hidden?"show":"hide":val](prop);else{var parts=val.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),start=e.cur(true)||0;if(parts){var end=parseFloat(parts[2]),unit=parts[3]||"px";if(unit!="px"){self.style[name]=(end||1)+unit;start=((end||1)/e.cur(true))*start;self.style[name]=start+unit;}
if(parts[1])
end=((parts[1]=="-="?-1:1)*end)+start;e.custom(start,end,unit);}else
e.custom(start,val,"");}});return true;});},stop:function(clearQueue,gotoEnd){var timers=jQuery.timers;if(clearQueue)
this.queue([]);this.each(function(){for(var i=timers.length-1;i>=0;i--)
if(timers[i].elem==this){if(gotoEnd)
timers[i](true);timers.splice(i,1);}});if(!gotoEnd)
this.dequeue();return this;}});jQuery.each({slideDown:genFx("show",1),slideUp:genFx("hide",1),slideToggle:genFx("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(name,props){jQuery.fn[name]=function(speed,callback){return this.animate(props,speed,callback);};});jQuery.extend({speed:function(speed,easing,fn){var opt=typeof speed==="object"?speed:{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};opt.duration=jQuery.fx.off?0:typeof opt.duration==="number"?opt.duration:jQuery.fx.speeds[opt.duration]||jQuery.fx.speeds._default;opt.old=opt.complete;opt.complete=function(){if(opt.queue!==false)
jQuery(this).dequeue();if(jQuery.isFunction(opt.old))
opt.old.call(this);};return opt;},easing:{linear:function(p,n,firstNum,diff){return firstNum+diff*p;},swing:function(p,n,firstNum,diff){return((-Math.cos(p*Math.PI)/2)+0.5)*diff+firstNum;}},timers:[],fx:function(elem,options,prop){this.options=options;this.elem=elem;this.prop=prop;if(!options.orig)
options.orig={};}});jQuery.fx.prototype={update:function(){if(this.options.step)
this.options.step.call(this.elem,this.now,this);(jQuery.fx.step[this.prop]||jQuery.fx.step._default)(this);if((this.prop=="height"||this.prop=="width")&&this.elem.style)
this.elem.style.display="block";},cur:function(force){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))
return this.elem[this.prop];var r=parseFloat(jQuery.css(this.elem,this.prop,force));return r&&r>-10000?r:parseFloat(jQuery.curCSS(this.elem,this.prop))||0;},custom:function(from,to,unit){this.startTime=now();this.start=from;this.end=to;this.unit=unit||this.unit||"px";this.now=this.start;this.pos=this.state=0;var self=this;function t(gotoEnd){return self.step(gotoEnd);}
t.elem=this.elem;if(t()&&jQuery.timers.push(t)&&!timerId){timerId=setInterval(function(){var timers=jQuery.timers;for(var i=0;i<timers.length;i++)
if(!timers[i]())
timers.splice(i--,1);if(!timers.length){clearInterval(timerId);timerId=undefined;}},13);}},show:function(){this.options.orig[this.prop]=jQuery.attr(this.elem.style,this.prop);this.options.show=true;this.custom(this.prop=="width"||this.prop=="height"?1:0,this.cur());jQuery(this.elem).show();},hide:function(){this.options.orig[this.prop]=jQuery.attr(this.elem.style,this.prop);this.options.hide=true;this.custom(this.cur(),0);},step:function(gotoEnd){var t=now();if(gotoEnd||t>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;var done=true;for(var i in this.options.curAnim)
if(this.options.curAnim[i]!==true)
done=false;if(done){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;this.elem.style.display=this.options.display;if(jQuery.css(this.elem,"display")=="none")
this.elem.style.display="block";}
if(this.options.hide)
jQuery(this.elem).hide();if(this.options.hide||this.options.show)
for(var p in this.options.curAnim)
jQuery.attr(this.elem.style,p,this.options.orig[p]);this.options.complete.call(this.elem);}
return false;}else{var n=t-this.startTime;this.state=n/this.options.duration;this.pos=jQuery.easing[this.options.easing||(jQuery.easing.swing?"swing":"linear")](this.state,n,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update();}
return true;}};jQuery.extend(jQuery.fx,{speeds:{slow:600,fast:200,_default:400},step:{opacity:function(fx){jQuery.attr(fx.elem.style,"opacity",fx.now);},_default:function(fx){if(fx.elem.style&&fx.elem.style[fx.prop]!=null)
fx.elem.style[fx.prop]=fx.now+fx.unit;else
fx.elem[fx.prop]=fx.now;}}});if(document.documentElement["getBoundingClientRect"])
jQuery.fn.offset=function(){if(!this[0])return{top:0,left:0};if(this[0]===this[0].ownerDocument.body)return jQuery.offset.bodyOffset(this[0]);var box=this[0].getBoundingClientRect(),doc=this[0].ownerDocument,body=doc.body,docElem=doc.documentElement,clientTop=docElem.clientTop||body.clientTop||0,clientLeft=docElem.clientLeft||body.clientLeft||0,top=box.top+(self.pageYOffset||jQuery.boxModel&&docElem.scrollTop||body.scrollTop)-clientTop,left=box.left+(self.pageXOffset||jQuery.boxModel&&docElem.scrollLeft||body.scrollLeft)-clientLeft;return{top:top,left:left};};else
jQuery.fn.offset=function(){if(!this[0])return{top:0,left:0};if(this[0]===this[0].ownerDocument.body)return jQuery.offset.bodyOffset(this[0]);jQuery.offset.initialized||jQuery.offset.initialize();var elem=this[0],offsetParent=elem.offsetParent,prevOffsetParent=elem,doc=elem.ownerDocument,computedStyle,docElem=doc.documentElement,body=doc.body,defaultView=doc.defaultView,prevComputedStyle=defaultView.getComputedStyle(elem,null),top=elem.offsetTop,left=elem.offsetLeft;while((elem=elem.parentNode)&&elem!==body&&elem!==docElem){computedStyle=defaultView.getComputedStyle(elem,null);top-=elem.scrollTop,left-=elem.scrollLeft;if(elem===offsetParent){top+=elem.offsetTop,left+=elem.offsetLeft;if(jQuery.offset.doesNotAddBorder&&!(jQuery.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(elem.tagName)))
top+=parseInt(computedStyle.borderTopWidth,10)||0,left+=parseInt(computedStyle.borderLeftWidth,10)||0;prevOffsetParent=offsetParent,offsetParent=elem.offsetParent;}
if(jQuery.offset.subtractsBorderForOverflowNotVisible&&computedStyle.overflow!=="visible")
top+=parseInt(computedStyle.borderTopWidth,10)||0,left+=parseInt(computedStyle.borderLeftWidth,10)||0;prevComputedStyle=computedStyle;}
if(prevComputedStyle.position==="relative"||prevComputedStyle.position==="static")
top+=body.offsetTop,left+=body.offsetLeft;if(prevComputedStyle.position==="fixed")
top+=Math.max(docElem.scrollTop,body.scrollTop),left+=Math.max(docElem.scrollLeft,body.scrollLeft);return{top:top,left:left};};jQuery.offset={initialize:function(){if(this.initialized)return;var body=document.body,container=document.createElement('div'),innerDiv,checkDiv,table,td,rules,prop,bodyMarginTop=body.style.marginTop,html='<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';rules={position:'absolute',top:0,left:0,margin:0,border:0,width:'1px',height:'1px',visibility:'hidden'};for(prop in rules)container.style[prop]=rules[prop];container.innerHTML=html;body.insertBefore(container,body.firstChild);innerDiv=container.firstChild,checkDiv=innerDiv.firstChild,td=innerDiv.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(checkDiv.offsetTop!==5);this.doesAddBorderForTableAndCells=(td.offsetTop===5);innerDiv.style.overflow='hidden',innerDiv.style.position='relative';this.subtractsBorderForOverflowNotVisible=(checkDiv.offsetTop===-5);body.style.marginTop='1px';this.doesNotIncludeMarginInBodyOffset=(body.offsetTop===0);body.style.marginTop=bodyMarginTop;body.removeChild(container);this.initialized=true;},bodyOffset:function(body){jQuery.offset.initialized||jQuery.offset.initialize();var top=body.offsetTop,left=body.offsetLeft;if(jQuery.offset.doesNotIncludeMarginInBodyOffset)
top+=parseInt(jQuery.curCSS(body,'marginTop',true),10)||0,left+=parseInt(jQuery.curCSS(body,'marginLeft',true),10)||0;return{top:top,left:left};}};jQuery.fn.extend({position:function(){var left=0,top=0,results;if(this[0]){var offsetParent=this.offsetParent(),offset=this.offset(),parentOffset=/^body|html$/i.test(offsetParent[0].tagName)?{top:0,left:0}:offsetParent.offset();offset.top-=num(this,'marginTop');offset.left-=num(this,'marginLeft');parentOffset.top+=num(offsetParent,'borderTopWidth');parentOffset.left+=num(offsetParent,'borderLeftWidth');results={top:offset.top-parentOffset.top,left:offset.left-parentOffset.left};}
return results;},offsetParent:function(){var offsetParent=this[0].offsetParent||document.body;while(offsetParent&&(!/^body|html$/i.test(offsetParent.tagName)&&jQuery.css(offsetParent,'position')=='static'))
offsetParent=offsetParent.offsetParent;return jQuery(offsetParent);}});jQuery.each(['Left','Top'],function(i,name){var method='scroll'+name;jQuery.fn[method]=function(val){if(!this[0])return null;return val!==undefined?this.each(function(){this==window||this==document?window.scrollTo(!i?val:jQuery(window).scrollLeft(),i?val:jQuery(window).scrollTop()):this[method]=val;}):this[0]==window||this[0]==document?self[i?'pageYOffset':'pageXOffset']||jQuery.boxModel&&document.documentElement[method]||document.body[method]:this[0][method];};});jQuery.each(["Height","Width"],function(i,name){var tl=i?"Left":"Top",br=i?"Right":"Bottom",lower=name.toLowerCase();jQuery.fn["inner"+name]=function(){return this[0]?jQuery.css(this[0],lower,false,"padding"):null;};jQuery.fn["outer"+name]=function(margin){return this[0]?jQuery.css(this[0],lower,false,margin?"margin":"border"):null;};var type=name.toLowerCase();jQuery.fn[type]=function(size){return this[0]==window?document.compatMode=="CSS1Compat"&&document.documentElement["client"+name]||document.body["client"+name]:this[0]==document?Math.max(document.documentElement["client"+name],document.body["scroll"+name],document.documentElement["scroll"+name],document.body["offset"+name],document.documentElement["offset"+name]):size===undefined?(this.length?jQuery.css(this[0],type):null):this.css(type,typeof size==="string"?size:size+"px");};});})();

(function($){var defaults={vertical:false,rtl:false,start:1,offset:1,size:null,scroll:3,visible:null,animation:'normal',easing:'swing',auto:0,wrap:null,initCallback:null,setupCallback:null,reloadCallback:null,itemLoadCallback:null,itemFirstInCallback:null,itemFirstOutCallback:null,itemLastInCallback:null,itemLastOutCallback:null,itemVisibleInCallback:null,itemVisibleOutCallback:null,animationStepCallback:null,buttonNextHTML:'<div></div>',buttonPrevHTML:'<div></div>',buttonNextEvent:'click',buttonPrevEvent:'click',buttonNextCallback:null,buttonPrevCallback:null,itemFallbackDimension:null},windowLoaded=false;$(window).bind('load.jcarousel',function(){windowLoaded=true;});$.jcarousel=function(e,o){this.options=$.extend({},defaults,o||{});this.locked=false;this.autoStopped=false;this.container=null;this.clip=null;this.list=null;this.buttonNext=null;this.buttonPrev=null;this.buttonNextState=null;this.buttonPrevState=null;if(!o||o.rtl===undefined){this.options.rtl=($(e).attr('dir')||$('html').attr('dir')||'').toLowerCase()=='rtl';}
this.wh=!this.options.vertical?'width':'height';this.lt=!this.options.vertical?(this.options.rtl?'right':'left'):'top';var skin='',split=e.className.split(' ');for(var i=0;i<split.length;i++){if(split[i].indexOf('jcarousel-skin')!=-1){$(e).removeClass(split[i]);skin=split[i];break;}}
if(e.nodeName.toUpperCase()=='UL'||e.nodeName.toUpperCase()=='OL'){this.list=$(e);this.clip=this.list.parents('.jcarousel-clip');this.container=this.list.parents('.jcarousel-container');}else{this.container=$(e);this.list=this.container.find('ul,ol').eq(0);this.clip=this.container.find('.jcarousel-clip');}
if(this.clip.size()===0){this.clip=this.list.wrap('<div></div>').parent();}
if(this.container.size()===0){this.container=this.clip.wrap('<div></div>').parent();}
if(skin!==''&&this.container.parent()[0].className.indexOf('jcarousel-skin')==-1){this.container.wrap('<div class=" '+skin+'"></div>');}
this.buttonPrev=$('.jcarousel-prev',this.container);if(this.buttonPrev.size()===0&&this.options.buttonPrevHTML!==null){this.buttonPrev=$(this.options.buttonPrevHTML).appendTo(this.container);}
this.buttonPrev.addClass(this.className('jcarousel-prev'));this.buttonNext=$('.jcarousel-next',this.container);if(this.buttonNext.size()===0&&this.options.buttonNextHTML!==null){this.buttonNext=$(this.options.buttonNextHTML).appendTo(this.container);}
this.buttonNext.addClass(this.className('jcarousel-next'));this.clip.addClass(this.className('jcarousel-clip')).css({position:'relative'});this.list.addClass(this.className('jcarousel-list')).css({overflow:'hidden',position:'relative',top:0,margin:0,padding:0}).css((this.options.rtl?'right':'left'),0);this.container.addClass(this.className('jcarousel-container')).css({position:'relative'});if(!this.options.vertical&&this.options.rtl){this.container.addClass('jcarousel-direction-rtl').attr('dir','rtl');}
var di=this.options.visible!==null?Math.ceil(this.clipping()/this.options.visible):null;var li=this.list.children('li');var self=this;if(li.size()>0){var wh=0,j=this.options.offset;li.each(function(){self.format(this,j++);wh+=self.dimension(this,di);});this.list.css(this.wh,(wh+100)+'px');if(!o||o.size===undefined){this.options.size=li.size();}}
this.container.css('display','block');this.buttonNext.css('display','block');this.buttonPrev.css('display','block');this.funcNext=function(){self.next();return false;};this.funcPrev=function(){self.prev();return false;};this.funcResize=function(){if(self.resizeTimer){clearTimeout(self.resizeTimer);}
self.resizeTimer=setTimeout(function(){self.reload();},100);};if(this.options.initCallback!==null){this.options.initCallback(this,'init');}
if(!windowLoaded&&$.browser.safari){this.buttons(false,false);$(window).bind('load.jcarousel',function(){self.setup();});}else{this.setup();}};var $jc=$.jcarousel;$jc.fn=$jc.prototype={jcarousel:'0.2.8'};$jc.fn.extend=$jc.extend=$.extend;$jc.fn.extend({setup:function(){this.first=null;this.last=null;this.prevFirst=null;this.prevLast=null;this.animating=false;this.timer=null;this.resizeTimer=null;this.tail=null;this.inTail=false;if(this.locked){return;}
this.list.css(this.lt,this.pos(this.options.offset)+'px');var p=this.pos(this.options.start,true);this.prevFirst=this.prevLast=null;this.animate(p,false);$(window).unbind('resize.jcarousel',this.funcResize).bind('resize.jcarousel',this.funcResize);if(this.options.setupCallback!==null){this.options.setupCallback(this);}},reset:function(){this.list.empty();this.list.css(this.lt,'0px');this.list.css(this.wh,'10px');if(this.options.initCallback!==null){this.options.initCallback(this,'reset');}
this.setup();},reload:function(){if(this.tail!==null&&this.inTail){this.list.css(this.lt,$jc.intval(this.list.css(this.lt))+this.tail);}
this.tail=null;this.inTail=false;if(this.options.reloadCallback!==null){this.options.reloadCallback(this);}
if(this.options.visible!==null){var self=this;var di=Math.ceil(this.clipping()/this.options.visible),wh=0,lt=0;this.list.children('li').each(function(i){wh+=self.dimension(this,di);if(i+1<self.first){lt=wh;}});this.list.css(this.wh,wh+'px');this.list.css(this.lt,-lt+'px');}
this.scroll(this.first,false);},lock:function(){this.locked=true;this.buttons();},unlock:function(){this.locked=false;this.buttons();},size:function(s){if(s!==undefined){this.options.size=s;if(!this.locked){this.buttons();}}
return this.options.size;},has:function(i,i2){if(i2===undefined||!i2){i2=i;}
if(this.options.size!==null&&i2>this.options.size){i2=this.options.size;}
for(var j=i;j<=i2;j++){var e=this.get(j);if(!e.length||e.hasClass('jcarousel-item-placeholder')){return false;}}
return true;},get:function(i){return $('>.jcarousel-item-'+i,this.list);},add:function(i,s){var e=this.get(i),old=0,n=$(s);if(e.length===0){var c,j=$jc.intval(i);e=this.create(i);while(true){c=this.get(--j);if(j<=0||c.length){if(j<=0){this.list.prepend(e);}else{c.after(e);}
break;}}}else{old=this.dimension(e);}
if(n.get(0).nodeName.toUpperCase()=='LI'){e.replaceWith(n);e=n;}else{e.empty().append(s);}
this.format(e.removeClass(this.className('jcarousel-item-placeholder')),i);var di=this.options.visible!==null?Math.ceil(this.clipping()/this.options.visible):null;var wh=this.dimension(e,di)-old;if(i>0&&i<this.first){this.list.css(this.lt,$jc.intval(this.list.css(this.lt))-wh+'px');}
this.list.css(this.wh,$jc.intval(this.list.css(this.wh))+wh+'px');return e;},remove:function(i){var e=this.get(i);if(!e.length||(i>=this.first&&i<=this.last)){return;}
var d=this.dimension(e);if(i<this.first){this.list.css(this.lt,$jc.intval(this.list.css(this.lt))+d+'px');}
e.remove();this.list.css(this.wh,$jc.intval(this.list.css(this.wh))-d+'px');},next:function(){if(this.tail!==null&&!this.inTail){this.scrollTail(false);}else{this.scroll(((this.options.wrap=='both'||this.options.wrap=='last')&&this.options.size!==null&&this.last==this.options.size)?1:this.first+this.options.scroll);}},prev:function(){if(this.tail!==null&&this.inTail){this.scrollTail(true);}else{this.scroll(((this.options.wrap=='both'||this.options.wrap=='first')&&this.options.size!==null&&this.first==1)?this.options.size:this.first-this.options.scroll);}},scrollTail:function(b){if(this.locked||this.animating||!this.tail){return;}
this.pauseAuto();var pos=$jc.intval(this.list.css(this.lt));pos=!b?pos-this.tail:pos+this.tail;this.inTail=!b;this.prevFirst=this.first;this.prevLast=this.last;this.animate(pos);},scroll:function(i,a){if(this.locked||this.animating){return;}
this.pauseAuto();this.animate(this.pos(i),a);},pos:function(i,fv){var pos=$jc.intval(this.list.css(this.lt));if(this.locked||this.animating){return pos;}
if(this.options.wrap!='circular'){i=i<1?1:(this.options.size&&i>this.options.size?this.options.size:i);}
var back=this.first>i;var f=this.options.wrap!='circular'&&this.first<=1?1:this.first;var c=back?this.get(f):this.get(this.last);var j=back?f:f-1;var e=null,l=0,p=false,d=0,g;while(back?--j>=i:++j<i){e=this.get(j);p=!e.length;if(e.length===0){e=this.create(j).addClass(this.className('jcarousel-item-placeholder'));c[back?'before':'after'](e);if(this.first!==null&&this.options.wrap=='circular'&&this.options.size!==null&&(j<=0||j>this.options.size)){g=this.get(this.index(j));if(g.length){e=this.add(j,g.clone(true));}}}
c=e;d=this.dimension(e);if(p){l+=d;}
if(this.first!==null&&(this.options.wrap=='circular'||(j>=1&&(this.options.size===null||j<=this.options.size)))){pos=back?pos+d:pos-d;}}
var clipping=this.clipping(),cache=[],visible=0,v=0;c=this.get(i-1);j=i;while(++visible){e=this.get(j);p=!e.length;if(e.length===0){e=this.create(j).addClass(this.className('jcarousel-item-placeholder'));if(c.length===0){this.list.prepend(e);}else{c[back?'before':'after'](e);}
if(this.first!==null&&this.options.wrap=='circular'&&this.options.size!==null&&(j<=0||j>this.options.size)){g=this.get(this.index(j));if(g.length){e=this.add(j,g.clone(true));}}}
c=e;d=this.dimension(e);if(d===0){throw new Error('jCarousel: No width/height set for items. This will cause an infinite loop. Aborting...');}
if(this.options.wrap!='circular'&&this.options.size!==null&&j>this.options.size){cache.push(e);}else if(p){l+=d;}
v+=d;if(v>=clipping){break;}
j++;}
for(var x=0;x<cache.length;x++){cache[x].remove();}
if(l>0){this.list.css(this.wh,this.dimension(this.list)+l+'px');if(back){pos-=l;this.list.css(this.lt,$jc.intval(this.list.css(this.lt))-l+'px');}}
var last=i+visible-1;if(this.options.wrap!='circular'&&this.options.size&&last>this.options.size){last=this.options.size;}
if(j>last){visible=0;j=last;v=0;while(++visible){e=this.get(j--);if(!e.length){break;}
v+=this.dimension(e);if(v>=clipping){break;}}}
var first=last-visible+1;if(this.options.wrap!='circular'&&first<1){first=1;}
if(this.inTail&&back){pos+=this.tail;this.inTail=false;}
this.tail=null;if(this.options.wrap!='circular'&&last==this.options.size&&(last-visible+1)>=1){var m=$jc.intval(this.get(last).css(!this.options.vertical?'marginRight':'marginBottom'));if((v-m)>clipping){this.tail=v-clipping-m;}}
if(fv&&i===this.options.size&&this.tail){pos-=this.tail;this.inTail=true;}
while(i-->first){pos+=this.dimension(this.get(i));}
this.prevFirst=this.first;this.prevLast=this.last;this.first=first;this.last=last;return pos;},animate:function(p,a){if(this.locked||this.animating){return;}
this.animating=true;var self=this;var scrolled=function(){self.animating=false;if(p===0){self.list.css(self.lt,0);}
if(!self.autoStopped&&(self.options.wrap=='circular'||self.options.wrap=='both'||self.options.wrap=='last'||self.options.size===null||self.last<self.options.size||(self.last==self.options.size&&self.tail!==null&&!self.inTail))){self.startAuto();}
self.buttons();self.notify('onAfterAnimation');if(self.options.wrap=='circular'&&self.options.size!==null){for(var i=self.prevFirst;i<=self.prevLast;i++){if(i!==null&&!(i>=self.first&&i<=self.last)&&(i<1||i>self.options.size)){self.remove(i);}}}};this.notify('onBeforeAnimation');if(!this.options.animation||a===false){this.list.css(this.lt,p+'px');scrolled();}else{var o=!this.options.vertical?(this.options.rtl?{'right':p}:{'left':p}):{'top':p};var settings={duration:this.options.animation,easing:this.options.easing,complete:scrolled};if($.isFunction(this.options.animationStepCallback)){settings.step=this.options.animationStepCallback;}
this.list.animate(o,settings);}},startAuto:function(s){if(s!==undefined){this.options.auto=s;}
if(this.options.auto===0){return this.stopAuto();}
if(this.timer!==null){return;}
this.autoStopped=false;var self=this;this.timer=window.setTimeout(function(){self.next();},this.options.auto*1000);},stopAuto:function(){this.pauseAuto();this.autoStopped=true;},pauseAuto:function(){if(this.timer===null){return;}
window.clearTimeout(this.timer);this.timer=null;},buttons:function(n,p){if(n==null){n=!this.locked&&this.options.size!==0&&((this.options.wrap&&this.options.wrap!='first')||this.options.size===null||this.last<this.options.size);if(!this.locked&&(!this.options.wrap||this.options.wrap=='first')&&this.options.size!==null&&this.last>=this.options.size){n=this.tail!==null&&!this.inTail;}}
if(p==null){p=!this.locked&&this.options.size!==0&&((this.options.wrap&&this.options.wrap!='last')||this.first>1);if(!this.locked&&(!this.options.wrap||this.options.wrap=='last')&&this.options.size!==null&&this.first==1){p=this.tail!==null&&this.inTail;}}
var self=this;if(this.buttonNext.size()>0){this.buttonNext.unbind(this.options.buttonNextEvent+'.jcarousel',this.funcNext);if(n){this.buttonNext.bind(this.options.buttonNextEvent+'.jcarousel',this.funcNext);}
this.buttonNext[n?'removeClass':'addClass'](this.className('jcarousel-next-disabled')).attr('disabled',n?false:true);if(this.options.buttonNextCallback!==null&&this.buttonNext.data('jcarouselstate')!=n){this.buttonNext.each(function(){self.options.buttonNextCallback(self,this,n);}).data('jcarouselstate',n);}}else{if(this.options.buttonNextCallback!==null&&this.buttonNextState!=n){this.options.buttonNextCallback(self,null,n);}}
if(this.buttonPrev.size()>0){this.buttonPrev.unbind(this.options.buttonPrevEvent+'.jcarousel',this.funcPrev);if(p){this.buttonPrev.bind(this.options.buttonPrevEvent+'.jcarousel',this.funcPrev);}
this.buttonPrev[p?'removeClass':'addClass'](this.className('jcarousel-prev-disabled')).attr('disabled',p?false:true);if(this.options.buttonPrevCallback!==null&&this.buttonPrev.data('jcarouselstate')!=p){this.buttonPrev.each(function(){self.options.buttonPrevCallback(self,this,p);}).data('jcarouselstate',p);}}else{if(this.options.buttonPrevCallback!==null&&this.buttonPrevState!=p){this.options.buttonPrevCallback(self,null,p);}}
this.buttonNextState=n;this.buttonPrevState=p;},notify:function(evt){var state=this.prevFirst===null?'init':(this.prevFirst<this.first?'next':'prev');this.callback('itemLoadCallback',evt,state);if(this.prevFirst!==this.first){this.callback('itemFirstInCallback',evt,state,this.first);this.callback('itemFirstOutCallback',evt,state,this.prevFirst);}
if(this.prevLast!==this.last){this.callback('itemLastInCallback',evt,state,this.last);this.callback('itemLastOutCallback',evt,state,this.prevLast);}
this.callback('itemVisibleInCallback',evt,state,this.first,this.last,this.prevFirst,this.prevLast);this.callback('itemVisibleOutCallback',evt,state,this.prevFirst,this.prevLast,this.first,this.last);},callback:function(cb,evt,state,i1,i2,i3,i4){if(this.options[cb]==null||(typeof this.options[cb]!='object'&&evt!='onAfterAnimation')){return;}
var callback=typeof this.options[cb]=='object'?this.options[cb][evt]:this.options[cb];if(!$.isFunction(callback)){return;}
var self=this;if(i1===undefined){callback(self,state,evt);}else if(i2===undefined){this.get(i1).each(function(){callback(self,this,i1,state,evt);});}else{var call=function(i){self.get(i).each(function(){callback(self,this,i,state,evt);});};for(var i=i1;i<=i2;i++){if(i!==null&&!(i>=i3&&i<=i4)){call(i);}}}},create:function(i){return this.format('<li></li>',i);},format:function(e,i){e=$(e);var split=e.get(0).className.split(' ');for(var j=0;j<split.length;j++){if(split[j].indexOf('jcarousel-')!=-1){e.removeClass(split[j]);}}
e.addClass(this.className('jcarousel-item')).addClass(this.className('jcarousel-item-'+i)).css({'float':(this.options.rtl?'right':'left'),'list-style':'none'}).attr('jcarouselindex',i);return e;},className:function(c){return c+' '+c+(!this.options.vertical?'-horizontal':'-vertical');},dimension:function(e,d){var el=$(e);if(d==null){return!this.options.vertical?(el.outerWidth(true)||$jc.intval(this.options.itemFallbackDimension)):(el.outerHeight(true)||$jc.intval(this.options.itemFallbackDimension));}else{var w=!this.options.vertical?d-$jc.intval(el.css('marginLeft'))-$jc.intval(el.css('marginRight')):d-$jc.intval(el.css('marginTop'))-$jc.intval(el.css('marginBottom'));$(el).css(this.wh,w+'px');return this.dimension(el);}},clipping:function(){return!this.options.vertical?this.clip[0].offsetWidth-$jc.intval(this.clip.css('borderLeftWidth'))-$jc.intval(this.clip.css('borderRightWidth')):this.clip[0].offsetHeight-$jc.intval(this.clip.css('borderTopWidth'))-$jc.intval(this.clip.css('borderBottomWidth'));},index:function(i,s){if(s==null){s=this.options.size;}
return Math.round((((i-1)/s)-Math.floor((i-1)/s))*s)+1;}});$jc.extend({defaults:function(d){return $.extend(defaults,d||{});},intval:function(v){v=parseInt(v,10);return isNaN(v)?0:v;},windowLoaded:function(){windowLoaded=true;}});$.fn.jcarousel=function(o){if(typeof o=='string'){var instance=$(this).data('jcarousel'),args=Array.prototype.slice.call(arguments,1);return instance[o].apply(instance,args);}else{return this.each(function(){var instance=$(this).data('jcarousel');if(instance){if(o){$.extend(instance.options,o);}
instance.reload();}else{$(this).data('jcarousel',new $jc(this,o));}});}};})(jQuery);
;jQuery.ui||(function($){var _remove=$.fn.remove,isFF2=$.browser.mozilla&&(parseFloat($.browser.version)<1.9);$.ui={version:"1.7",plugin:{add:function(module,option,set){var proto=$.ui[module].prototype;for(var i in set){proto.plugins[i]=proto.plugins[i]||[];proto.plugins[i].push([option,set[i]]);}},call:function(instance,name,args){var set=instance.plugins[name];if(!set||!instance.element[0].parentNode){return;}
for(var i=0;i<set.length;i++){if(instance.options[set[i][0]]){set[i][1].apply(instance.element,args);}}}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b);},hasScroll:function(el,a){if($(el).css('overflow')=='hidden'){return false;}
var scroll=(a&&a=='left')?'scrollLeft':'scrollTop',has=false;if(el[scroll]>0){return true;}
el[scroll]=1;has=(el[scroll]>0);el[scroll]=0;return has;},isOverAxis:function(x,reference,size){return(x>reference)&&(x<(reference+size));},isOver:function(y,x,top,left,height,width){return $.ui.isOverAxis(y,top,height)&&$.ui.isOverAxis(x,left,width);},keyCode:{BACKSPACE:8,CAPS_LOCK:20,COMMA:188,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38}};if(isFF2){var attr=$.attr,removeAttr=$.fn.removeAttr,ariaNS="http://www.w3.org/2005/07/aaa",ariaState=/^aria-/,ariaRole=/^wairole:/;$.attr=function(elem,name,value){var set=value!==undefined;return(name=='role'?(set?attr.call(this,elem,name,"wairole:"+value):(attr.apply(this,arguments)||"").replace(ariaRole,"")):(ariaState.test(name)?(set?elem.setAttributeNS(ariaNS,name.replace(ariaState,"aaa:"),value):attr.call(this,elem,name.replace(ariaState,"aaa:"))):attr.apply(this,arguments)));};$.fn.removeAttr=function(name){return(ariaState.test(name)?this.each(function(){this.removeAttributeNS(ariaNS,name.replace(ariaState,""));}):removeAttr.call(this,name));};}
$.fn.extend({remove:function(){$("*",this).add(this).each(function(){$(this).triggerHandler("remove");});return _remove.apply(this,arguments);},enableSelection:function(){return this.attr('unselectable','off').css('MozUserSelect','').unbind('selectstart.ui');},disableSelection:function(){return this.attr('unselectable','on').css('MozUserSelect','none').bind('selectstart.ui',function(){return false;});},scrollParent:function(){var scrollParent;if(($.browser.msie&&(/(static|relative)/).test(this.css('position')))||(/absolute/).test(this.css('position'))){scrollParent=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test($.curCSS(this,'position',1))&&(/(auto|scroll)/).test($.curCSS(this,'overflow',1)+$.curCSS(this,'overflow-y',1)+$.curCSS(this,'overflow-x',1));}).eq(0);}else{scrollParent=this.parents().filter(function(){return(/(auto|scroll)/).test($.curCSS(this,'overflow',1)+$.curCSS(this,'overflow-y',1)+$.curCSS(this,'overflow-x',1));}).eq(0);}
return(/fixed/).test(this.css('position'))||!scrollParent.length?$(document):scrollParent;}});$.extend($.expr[':'],{data:function(elem,i,match){return!!$.data(elem,match[3]);},focusable:function(element){var nodeName=element.nodeName.toLowerCase(),tabIndex=$.attr(element,'tabindex');return(/input|select|textarea|button|object/.test(nodeName)?!element.disabled:'a'==nodeName||'area'==nodeName?element.href||!isNaN(tabIndex):!isNaN(tabIndex))&&!$(element)['area'==nodeName?'parents':'closest'](':hidden').length;},tabbable:function(element){var tabIndex=$.attr(element,'tabindex');return(isNaN(tabIndex)||tabIndex>=0)&&$(element).is(':focusable');}});function getter(namespace,plugin,method,args){function getMethods(type){var methods=$[namespace][plugin][type]||[];return(typeof methods=='string'?methods.split(/,?\s+/):methods);}
var methods=getMethods('getter');if(args.length==1&&typeof args[0]=='string'){methods=methods.concat(getMethods('getterSetter'));}
return($.inArray(method,methods)!=-1);}
$.widget=function(name,prototype){var namespace=name.split(".")[0];name=name.split(".")[1];$.fn[name]=function(options){var isMethodCall=(typeof options=='string'),args=Array.prototype.slice.call(arguments,1);if(isMethodCall&&options.substring(0,1)=='_'){return this;}
if(isMethodCall&&getter(namespace,name,options,args)){var instance=$.data(this[0],name);return(instance?instance[options].apply(instance,args):undefined);}
return this.each(function(){var instance=$.data(this,name);(!instance&&!isMethodCall&&$.data(this,name,new $[namespace][name](this,options))._init());(instance&&isMethodCall&&$.isFunction(instance[options])&&instance[options].apply(instance,args));});};$[namespace]=$[namespace]||{};$[namespace][name]=function(element,options){var self=this;this.namespace=namespace;this.widgetName=name;this.widgetEventPrefix=$[namespace][name].eventPrefix||name;this.widgetBaseClass=namespace+'-'+name;this.options=$.extend({},$.widget.defaults,$[namespace][name].defaults,$.metadata&&$.metadata.get(element)[name],options);this.element=$(element).bind('setData.'+name,function(event,key,value){if(event.target==element){return self._setData(key,value);}}).bind('getData.'+name,function(event,key){if(event.target==element){return self._getData(key);}}).bind('remove',function(){return self.destroy();});};$[namespace][name].prototype=$.extend({},$.widget.prototype,prototype);$[namespace][name].getterSetter='option';};$.widget.prototype={_init:function(){},destroy:function(){this.element.removeData(this.widgetName).removeClass(this.widgetBaseClass+'-disabled'+' '+this.namespace+'-state-disabled').removeAttr('aria-disabled');},option:function(key,value){var options=key,self=this;if(typeof key=="string"){if(value===undefined){return this._getData(key);}
options={};options[key]=value;}
$.each(options,function(key,value){self._setData(key,value);});},_getData:function(key){return this.options[key];},_setData:function(key,value){this.options[key]=value;if(key=='disabled'){this.element
[value?'addClass':'removeClass'](this.widgetBaseClass+'-disabled'+' '+
this.namespace+'-state-disabled').attr("aria-disabled",value);}},enable:function(){this._setData('disabled',false);},disable:function(){this._setData('disabled',true);},_trigger:function(type,event,data){var callback=this.options[type],eventName=(type==this.widgetEventPrefix?type:this.widgetEventPrefix+type);event=$.Event(event);event.type=eventName;if(event.originalEvent){for(var i=$.event.props.length,prop;i;){prop=$.event.props[--i];event[prop]=event.originalEvent[prop];}}
this.element.trigger(event,data);return!($.isFunction(callback)&&callback.call(this.element[0],event,data)===false||event.isDefaultPrevented());}};$.widget.defaults={disabled:false};$.ui.mouse={_mouseInit:function(){var self=this;this.element.bind('mousedown.'+this.widgetName,function(event){return self._mouseDown(event);}).bind('click.'+this.widgetName,function(event){if(self._preventClickEvent){self._preventClickEvent=false;event.stopImmediatePropagation();return false;}});if($.browser.msie){this._mouseUnselectable=this.element.attr('unselectable');this.element.attr('unselectable','on');}
this.started=false;},_mouseDestroy:function(){this.element.unbind('.'+this.widgetName);($.browser.msie&&this.element.attr('unselectable',this._mouseUnselectable));},_mouseDown:function(event){event.originalEvent=event.originalEvent||{};if(event.originalEvent.mouseHandled){return;}
(this._mouseStarted&&this._mouseUp(event));this._mouseDownEvent=event;var self=this,btnIsLeft=(event.which==1),elIsCancel=(typeof this.options.cancel=="string"?$(event.target).parents().add(event.target).filter(this.options.cancel).length:false);if(!btnIsLeft||elIsCancel||!this._mouseCapture(event)){return true;}
this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){self.mouseDelayMet=true;},this.options.delay);}
if(this._mouseDistanceMet(event)&&this._mouseDelayMet(event)){this._mouseStarted=(this._mouseStart(event)!==false);if(!this._mouseStarted){event.preventDefault();return true;}}
this._mouseMoveDelegate=function(event){return self._mouseMove(event);};this._mouseUpDelegate=function(event){return self._mouseUp(event);};$(document).bind('mousemove.'+this.widgetName,this._mouseMoveDelegate).bind('mouseup.'+this.widgetName,this._mouseUpDelegate);($.browser.safari||event.preventDefault());event.originalEvent.mouseHandled=true;return true;},_mouseMove:function(event){if($.browser.msie&&!event.button){return this._mouseUp(event);}
if(this._mouseStarted){this._mouseDrag(event);return event.preventDefault();}
if(this._mouseDistanceMet(event)&&this._mouseDelayMet(event)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,event)!==false);(this._mouseStarted?this._mouseDrag(event):this._mouseUp(event));}
return!this._mouseStarted;},_mouseUp:function(event){$(document).unbind('mousemove.'+this.widgetName,this._mouseMoveDelegate).unbind('mouseup.'+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;this._preventClickEvent=(event.target==this._mouseDownEvent.target);this._mouseStop(event);}
return false;},_mouseDistanceMet:function(event){return(Math.max(Math.abs(this._mouseDownEvent.pageX-event.pageX),Math.abs(this._mouseDownEvent.pageY-event.pageY))>=this.options.distance);},_mouseDelayMet:function(event){return this.mouseDelayMet;},_mouseStart:function(event){},_mouseDrag:function(event){},_mouseStop:function(event){},_mouseCapture:function(event){return true;}};$.ui.mouse.defaults={cancel:null,distance:1,delay:0};})(jQuery);

(function($){$.widget("ui.slider",$.extend({},$.ui.mouse,{_init:function(){var self=this,o=this.options;this._keySliding=false;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider"
+" ui-slider-"+this.orientation
+" ui-widget"
+" ui-widget-content"
+" ui-corner-all");this.range=$([]);if(o.range){if(o.range===true){this.range=$('<div></div>');if(!o.values)o.values=[this._valueMin(),this._valueMin()];if(o.values.length&&o.values.length!=2){o.values=[o.values[0],o.values[0]];}}else{this.range=$('<div></div>');}
this.range.appendTo(this.element).addClass("ui-slider-range");if(o.range=="min"||o.range=="max"){this.range.addClass("ui-slider-range-"+o.range);}
this.range.addClass("ui-widget-header");}
if($(".ui-slider-handle",this.element).length==0)
$('<a href="#"></a>').appendTo(this.element).addClass("ui-slider-handle");if(o.values&&o.values.length){while($(".ui-slider-handle",this.element).length<o.values.length)
$('<a href="#"></a>').appendTo(this.element).addClass("ui-slider-handle");}
this.handles=$(".ui-slider-handle",this.element).addClass("ui-state-default"
+" ui-corner-all");this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(event){event.preventDefault();}).hover(function(){$(this).addClass('ui-state-hover');},function(){$(this).removeClass('ui-state-hover');}).focus(function(){$(".ui-slider .ui-state-focus").removeClass('ui-state-focus');$(this).addClass('ui-state-focus');}).blur(function(){$(this).removeClass('ui-state-focus');});this.handles.each(function(i){$(this).data("index.ui-slider-handle",i);});this.handles.keydown(function(event){var ret=true;var index=$(this).data("index.ui-slider-handle");if(self.options.disabled)
return;switch(event.keyCode){case $.ui.keyCode.HOME:case $.ui.keyCode.END:case $.ui.keyCode.UP:case $.ui.keyCode.RIGHT:case $.ui.keyCode.DOWN:case $.ui.keyCode.LEFT:ret=false;if(!self._keySliding){self._keySliding=true;$(this).addClass("ui-state-active");self._start(event,index);}
break;}
var curVal,newVal,step=self._step();if(self.options.values&&self.options.values.length){curVal=newVal=self.values(index);}else{curVal=newVal=self.value();}
switch(event.keyCode){case $.ui.keyCode.HOME:newVal=self._valueMin();break;case $.ui.keyCode.END:newVal=self._valueMax();break;case $.ui.keyCode.UP:case $.ui.keyCode.RIGHT:if(curVal==self._valueMax())return;newVal=curVal+step;break;case $.ui.keyCode.DOWN:case $.ui.keyCode.LEFT:if(curVal==self._valueMin())return;newVal=curVal-step;break;}
self._slide(event,index,newVal);return ret;}).keyup(function(event){var index=$(this).data("index.ui-slider-handle");if(self._keySliding){self._stop(event,index);self._change(event,index);self._keySliding=false;$(this).removeClass("ui-state-active");}});this._refreshValue();},destroy:function(){this.handles.remove();this.element.removeClass("ui-slider"
+" ui-slider-horizontal"
+" ui-slider-vertical"
+" ui-slider-disabled"
+" ui-widget"
+" ui-widget-content"
+" ui-corner-all").removeData("slider").unbind(".slider");this._mouseDestroy();},_mouseCapture:function(event){var o=this.options;if(o.disabled)
return false;this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();var position={x:event.pageX,y:event.pageY};var normValue=this._normValueFromMouse(position);var distance=this._valueMax()+1,closestHandle;var self=this,index;this.handles.each(function(i){var thisDistance=Math.abs(normValue-self.values(i));if(distance>thisDistance){distance=thisDistance;closestHandle=$(this);index=i;}});if(o.range==true&&this.values(1)==o.min){closestHandle=$(this.handles[++index]);}
this._start(event,index);self._handleIndex=index;closestHandle.addClass("ui-state-active").focus();var offset=closestHandle.offset();var mouseOverHandle=!$(event.target).parents().andSelf().is('.ui-slider-handle');this._clickOffset=mouseOverHandle?{left:0,top:0}:{left:event.pageX-offset.left-(closestHandle.width()/2),top:event.pageY-offset.top
-(closestHandle.height()/2)
-(parseInt(closestHandle.css('borderTopWidth'),10)||0)
-(parseInt(closestHandle.css('borderBottomWidth'),10)||0)
+(parseInt(closestHandle.css('marginTop'),10)||0)};normValue=this._normValueFromMouse(position);this._slide(event,index,normValue);return true;},_mouseStart:function(event){return true;},_mouseDrag:function(event){var position={x:event.pageX,y:event.pageY};var normValue=this._normValueFromMouse(position);this._slide(event,this._handleIndex,normValue);return false;},_mouseStop:function(event){this.handles.removeClass("ui-state-active");this._stop(event,this._handleIndex);this._change(event,this._handleIndex);this._handleIndex=null;this._clickOffset=null;return false;},_detectOrientation:function(){this.orientation=this.options.orientation=='vertical'?'vertical':'horizontal';},_normValueFromMouse:function(position){var pixelTotal,pixelMouse;if('horizontal'==this.orientation){pixelTotal=this.elementSize.width;pixelMouse=position.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0);}else{pixelTotal=this.elementSize.height;pixelMouse=position.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0);}
var percentMouse=(pixelMouse/pixelTotal);if(percentMouse>1)percentMouse=1;if(percentMouse<0)percentMouse=0;if('vertical'==this.orientation)
percentMouse=1-percentMouse;var valueTotal=this._valueMax()-this._valueMin(),valueMouse=percentMouse*valueTotal,valueMouseModStep=valueMouse%this.options.step,normValue=this._valueMin()+valueMouse-valueMouseModStep;if(valueMouseModStep>(this.options.step/2))
normValue+=this.options.step;return parseFloat(normValue.toFixed(5));},_start:function(event,index){this._trigger("start",event,this._uiHash(index));},_slide:function(event,index,newVal){var handle=this.handles[index];if(this.options.values&&this.options.values.length){var otherVal=this.values(index?0:1);if((index==0&&newVal>=otherVal)||(index==1&&newVal<=otherVal))
newVal=otherVal;if(newVal!=this.values(index)){var newValues=this.values();newValues[index]=newVal;var allowed=this._trigger("slide",event,this._uiHash(index,newVal,newValues));var otherVal=this.values(index?0:1);if(allowed!==false){this.values(index,newVal,(event.type=='mousedown'&&this.options.animate),true);}}}else{if(newVal!=this.value()){var allowed=this._trigger("slide",event,this._uiHash(index,newVal));if(allowed!==false){this._setData('value',newVal,(event.type=='mousedown'&&this.options.animate));}}}},_stop:function(event,index){this._trigger("stop",event,this._uiHash(index));},_change:function(event,index){this._trigger("change",event,this._uiHash(index));},value:function(newValue){if(arguments.length){this._setData("value",newValue);this._change(null,0);}
return this._value();},values:function(index,newValue,animated,noPropagation){if(arguments.length>1){this.options.values[index]=newValue;this._refreshValue(animated);if(!noPropagation)this._change(null,index);}
if(arguments.length){if(this.options.values&&this.options.values.length){return this._values(index);}else{return this.value();}}else{return this._values();}},_setData:function(key,value,animated){$.widget.prototype._setData.apply(this,arguments);switch(key){case'orientation':this._detectOrientation();this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue(animated);break;case'value':this._refreshValue(animated);break;}},_step:function(){var step=this.options.step;return step;},_value:function(){var val=this.options.value;if(val<this._valueMin())val=this._valueMin();if(val>this._valueMax())val=this._valueMax();return val;},_values:function(index){if(arguments.length){var val=this.options.values[index];if(val<this._valueMin())val=this._valueMin();if(val>this._valueMax())val=this._valueMax();return val;}else{return this.options.values;}},_valueMin:function(){var valueMin=this.options.min;return valueMin;},_valueMax:function(){var valueMax=this.options.max;return valueMax;},_refreshValue:function(animate){var oRange=this.options.range,o=this.options,self=this;if(this.options.values&&this.options.values.length){var vp0,vp1;this.handles.each(function(i,j){var valPercent=(self.values(i)-self._valueMin())/(self._valueMax()-self._valueMin())*100;var _set={};_set[self.orientation=='horizontal'?'left':'bottom']=valPercent+'%';$(this).stop(1,1)[animate?'animate':'css'](_set,o.animate);if(self.options.range===true){if(self.orientation=='horizontal'){(i==0)&&self.range.stop(1,1)[animate?'animate':'css']({left:valPercent+'%'},o.animate);(i==1)&&self.range[animate?'animate':'css']({width:(valPercent-lastValPercent)+'%'},{queue:false,duration:o.animate});}else{(i==0)&&self.range.stop(1,1)[animate?'animate':'css']({bottom:(valPercent)+'%'},o.animate);(i==1)&&self.range[animate?'animate':'css']({height:(valPercent-lastValPercent)+'%'},{queue:false,duration:o.animate});}}
lastValPercent=valPercent;});}else{var value=this.value(),valueMin=this._valueMin(),valueMax=this._valueMax(),valPercent=valueMax!=valueMin?(value-valueMin)/(valueMax-valueMin)*100:0;var _set={};_set[self.orientation=='horizontal'?'left':'bottom']=valPercent+'%';this.handle.stop(1,1)[animate?'animate':'css'](_set,o.animate);(oRange=="min")&&(this.orientation=="horizontal")&&this.range.stop(1,1)[animate?'animate':'css']({width:valPercent+'%'},o.animate);(oRange=="max")&&(this.orientation=="horizontal")&&this.range[animate?'animate':'css']({width:(100-valPercent)+'%'},{queue:false,duration:o.animate});(oRange=="min")&&(this.orientation=="vertical")&&this.range.stop(1,1)[animate?'animate':'css']({height:valPercent+'%'},o.animate);(oRange=="max")&&(this.orientation=="vertical")&&this.range[animate?'animate':'css']({height:(100-valPercent)+'%'},{queue:false,duration:o.animate});}},_uiHash:function(index,value,values){var multiple=this.options.values&&this.options.values.length;return{handle:this.handles[index],value:value||(multiple?this.values(index):this.value()),values:values||(multiple&&this.values())};}}));$.extend($.ui.slider,{getter:"value values",version:"1.7",eventPrefix:"slide",defaults:{animate:false,delay:0,distance:0,max:100,min:0,orientation:'horizontal',range:false,step:1,value:0,values:null}});})(jQuery);

var tb_pathToImage="images/loadingAnimation.gif";$(document).ready(function(){tb_init('a.thickbox, area.thickbox, input.thickbox');imgLoader=new Image();imgLoader.src=tb_pathToImage;});function tb_init(domChunk){$(domChunk).click(function(){var t=this.title||this.name||null;var a=this.href||this.alt;var g=this.rel||false;tb_show(t,a,g);this.blur();return false;});}
function tb_show(caption,url,imageGroup){try{if(typeof document.body.style.maxHeight==="undefined"){$("body","html").css({height:"100%",width:"100%"});$("html").css("overflow","hidden");if(document.getElementById("TB_HideSelect")===null){$("body").append("<iframe id='TB_HideSelect'></iframe><div id='TB_overlay'></div><div id='TB_window'></div>");$("#TB_overlay").click(tb_remove);}}else{if(document.getElementById("TB_overlay")===null){$("body").append("<div id='TB_overlay'></div><div id='TB_window'>");$("#TB_overlay").click(tb_remove);}}
if(caption===null){caption="";}
$("body").append("<div id='TB_load'><img src='"+imgLoader.src+"' /></div>");$('#TB_load').show();var baseURL;if(url.indexOf("?")!==-1){baseURL=url.substr(0,url.indexOf("?"));}else{baseURL=url;}
var urlString=/\.jpg|\.jpeg|\.png|\.gif|\.bmp/g;var urlType=baseURL.toLowerCase().match(urlString);if(urlType=='.jpg'||urlType=='.jpeg'||urlType=='.png'||urlType=='.gif'||urlType=='.bmp'){TB_PrevCaption="";TB_PrevURL="";TB_PrevHTML="";TB_NextCaption="";TB_NextURL="";TB_NextHTML="";TB_imageCount="";TB_FoundURL=false;if(imageGroup){TB_TempArray=$("a[@rel="+imageGroup+"]").get();for(TB_Counter=0;((TB_Counter<TB_TempArray.length)&&(TB_NextHTML===""));TB_Counter++){var urlTypeTemp=TB_TempArray[TB_Counter].href.toLowerCase().match(urlString);if(!(TB_TempArray[TB_Counter].href==url)){if(TB_FoundURL){TB_NextCaption=TB_TempArray[TB_Counter].title;TB_NextURL=TB_TempArray[TB_Counter].href;TB_NextHTML="<span id='TB_next'>&nbsp;&nbsp;<a href='#'>Next &gt;</a></span>";}else{TB_PrevCaption=TB_TempArray[TB_Counter].title;TB_PrevURL=TB_TempArray[TB_Counter].href;TB_PrevHTML="<span id='TB_prev'>&nbsp;&nbsp;<a href='#'>&lt; Prev</a></span>";}}else{TB_FoundURL=true;TB_imageCount="Image "+(TB_Counter+1)+" of "+(TB_TempArray.length);}}}
imgPreloader=new Image();imgPreloader.onload=function(){imgPreloader.onload=null;var pagesize=tb_getPageSize();var x=pagesize[0]-150;var y=pagesize[1]-150;var imageWidth=imgPreloader.width;var imageHeight=imgPreloader.height;if(imageWidth>x){imageHeight=imageHeight*(x/imageWidth);imageWidth=x;if(imageHeight>y){imageWidth=imageWidth*(y/imageHeight);imageHeight=y;}}else if(imageHeight>y){imageWidth=imageWidth*(y/imageHeight);imageHeight=y;if(imageWidth>x){imageHeight=imageHeight*(x/imageWidth);imageWidth=x;}}
TB_WIDTH=imageWidth+30;TB_HEIGHT=imageHeight+60;$("#TB_window").append("<a href='' id='TB_ImageOff' title='Fermer'><img id='TB_Image' src='"+url+"' width='"+imageWidth+"' height='"+imageHeight+"' alt='"+caption+"'/></a>"+"<div id='TB_caption'>"+caption+"<div id='TB_secondLine'>"+TB_imageCount+TB_PrevHTML+TB_NextHTML+"</div></div><div id='TB_closeWindow'><a href='#' id='TB_closeWindowButton' title='Fermer'>close</a> or Esc Key</div>");$("#TB_closeWindowButton").click(tb_remove);if(!(TB_PrevHTML==="")){function goPrev(){if($(document).unbind("click",goPrev)){$(document).unbind("click",goPrev);}
$("#TB_window").remove();$("body").append("<div id='TB_window'></div>");tb_show(TB_PrevCaption,TB_PrevURL,imageGroup);return false;}
$("#TB_prev").click(goPrev);}
if(!(TB_NextHTML==="")){function goNext(){$("#TB_window").remove();$("body").append("<div id='TB_window'></div>");tb_show(TB_NextCaption,TB_NextURL,imageGroup);return false;}
$("#TB_next").click(goNext);}
document.onkeydown=function(e){if(e==null){keycode=event.keyCode;}else{keycode=e.which;}
if(keycode==27){tb_remove();}else if(keycode==190){if(!(TB_NextHTML=="")){document.onkeydown="";goNext();}}else if(keycode==188){if(!(TB_PrevHTML=="")){document.onkeydown="";goPrev();}}};tb_position();$("#TB_load").remove();$("#TB_ImageOff").click(tb_remove);$("#TB_window").css({display:"block"});};imgPreloader.src=url;}else{var queryString=url.replace(/^[^\?]+\??/,'');var params=tb_parseQuery(queryString);TB_WIDTH=(params['width']*1)+30||630;TB_HEIGHT=(params['height']*1)+40||440;ajaxContentW=TB_WIDTH-30;ajaxContentH=TB_HEIGHT-45;if(url.indexOf('TB_iframe')!=-1){urlNoQuery=url.split('TB_');$("#TB_window").append("<div id='TB_title'><div id='TB_ajaxWindowTitle'>"+caption+"</div><div id='TB_closeAjaxWindow'><a href='#' id='TB_closeWindowButton' title='Fermer'>close</a> or Esc Key</div></div><iframe frameborder='0' hspace='0' src='"+urlNoQuery[0]+"' id='TB_iframeContent' name='TB_iframeContent' style='width:"+(ajaxContentW+29)+"px;height:"+(ajaxContentH+17)+"px;' onload='tb_showIframe()'> </iframe>");}else{if($("#TB_window").css("display")!="block"){if(params['modal']!="true"){$("#TB_window").append("<div id='TB_title'><div id='TB_ajaxWindowTitle'>"+caption+"</div><div id='TB_closeAjaxWindow'><a href='#' id='TB_closeWindowButton'>close</a> or Esc Key</div></div><div id='TB_ajaxContent' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px'></div>");}else{$("#TB_overlay").unbind();$("#TB_window").append("<div id='TB_ajaxContent' class='TB_modal' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px;'></div>");}}else{$("#TB_ajaxContent")[0].style.width=ajaxContentW+"px";$("#TB_ajaxContent")[0].style.height=ajaxContentH+"px";$("#TB_ajaxContent")[0].scrollTop=0;$("#TB_ajaxWindowTitle").html(caption);}}
$("#TB_closeWindowButton").click(tb_remove);if(url.indexOf('TB_inline')!=-1){$("#TB_ajaxContent").html($('#'+params['inlineId']).html());tb_position();$("#TB_load").remove();$("#TB_window").css({display:"block"});}else if(url.indexOf('TB_iframe')!=-1){tb_position();if(frames['TB_iframeContent']===undefined){$("#TB_load").remove();$("#TB_window").css({display:"block"});$(document).keyup(function(e){var key=e.keyCode;if(key==27){tb_remove();}});}}else{$("#TB_ajaxContent").load(url+="&random="+(new Date().getTime()),function(){tb_position();$("#TB_load").remove();tb_init("#TB_ajaxContent a.thickbox");$("#TB_window").css({display:"block"});});}}
if(!params['modal']){document.onkeyup=function(e){if(e==null){keycode=event.keyCode;}else{keycode=e.which;}
if(keycode==27){tb_remove();}};}}catch(e){}}
function tb_showIframe(){$("#TB_load").remove();$("#TB_window").css({display:"block"});}
function tb_remove(){$("#TB_imageOff").unbind("click");$("#TB_overlay").unbind("click");$("#TB_closeWindowButton").unbind("click");$("#TB_window").fadeOut("fast",function(){$('#TB_window,#TB_overlay,#TB_HideSelect').remove();});$("#TB_load").remove();if(typeof document.body.style.maxHeight=="undefined"){$("body","html").css({height:"auto",width:"auto"});$("html").css("overflow","");}
document.onkeydown="";return false;}
function tb_position(){$("#TB_window").css({marginLeft:'-'+parseInt((TB_WIDTH/2),10)+'px',width:TB_WIDTH+'px'});if(!(jQuery.browser.msie&&typeof XMLHttpRequest=='function')){$("#TB_window").css({marginTop:'-'+parseInt((TB_HEIGHT/2),10)+'px'});}}
function tb_parseQuery(query){var Params={};if(!query){return Params;}
var Pairs=query.split(/[;&]/);for(var i=0;i<Pairs.length;i++){var KeyVal=Pairs[i].split('=');if(!KeyVal||KeyVal.length!=2){continue;}
var key=unescape(KeyVal[0]);var val=unescape(KeyVal[1]);val=val.replace(/\+/g,' ');Params[key]=val;}
return Params;}
function tb_getPageSize(){var de=document.documentElement;var w=window.innerWidth||self.innerWidth||(de&&de.clientWidth)||document.body.clientWidth;var h=window.innerHeight||self.innerHeight||(de&&de.clientHeight)||document.body.clientHeight;arrayPageSize=[w,h];return arrayPageSize;}

(function(){var jQ=typeof jQuery=='function';function isDomReady(){if(domReady.done){return false;}
var d=document;if(d&&d.getElementsByTagName&&d.getElementById&&d.body){clearInterval(domReady.timer);domReady.timer=null;for(var i=0;i<domReady.ready.length;i++){domReady.ready[i].call();}
domReady.ready=null;domReady.done=true;}}
var domReady=jQ?jQuery:function(f){if(domReady.done){return f();}
if(domReady.timer){domReady.ready.push(f);}else{domReady.ready=[f];domReady.timer=setInterval(isDomReady,13);}};function extend(to,from){if(from){for(key in from){if(from.hasOwnProperty(key)){to[key]=from[key];}}}
return to;}
function asString(obj){switch(typeOf(obj)){case'string':obj=obj.replace(new RegExp('(["\\\\])','g'),'\\$1');obj=obj.replace(/^\s?(\d+)%/,"$1pct");return'"'+obj+'"';case'array':return'['+map(obj,function(el){return asString(el);}).join(',')+']';case'function':return'"function()"';case'object':var str=[];for(var prop in obj){if(obj.hasOwnProperty(prop)){str.push('"'+prop+'":'+asString(obj[prop]));}}
return'{'+str.join(',')+'}';}
return String(obj).replace(/\s/g," ").replace(/\'/g,"\"");}
function typeOf(obj){if(obj===null||obj===undefined){return false;}
var type=typeof obj;return(type=='object'&&obj.push)?'array':type;}
if(window.attachEvent){window.attachEvent("onbeforeunload",function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){};});}
function map(arr,func){var newArr=[];for(var i in arr){if(arr.hasOwnProperty(i)){newArr[i]=func(arr[i]);}}
return newArr;}
function getHTML(p,c){var ie=document.all;var html='<object width="'+p.width+'" height="'+p.height+'"';if(ie&&!p.id){p.id="_"+(""+Math.random()).substring(9);}
if(p.id){html+=' id="'+p.id+'"';}
if(p.w3c||!ie){html+=' data="'+p.src+'" type="application/x-shockwave-flash"';}else{html+=' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"';}
html+='>';if(p.w3c||ie){html+='<param name="movie" value="'+p.src+'" />';}
var e=extend({},p);e.width=e.height=e.id=e.w3c=e.src=null;for(var k in e){if(e[k]!==null){html+='<param name="'+k+'" value="'+e[k]+'" />';}}
var vars="";if(c){for(var key in c){if(c[key]!==null){vars+=key+'='+(typeof c[key]=='object'?asString(c[key]):c[key])+'&';}}
vars=vars.substring(0,vars.length-1);html+='<param name="flashvars" value=\''+vars+'\' />';}
html+="</object>";return html;}
function Flash(root,opts,flashvars){var version=flashembed.getVersion();extend(this,{getContainer:function(){return root;},getConf:function(){return conf;},getVersion:function(){return version;},getFlashvars:function(){return flashvars;},getApi:function(){return root.firstChild;},getHTML:function(){return getHTML(opts,flashvars);}});var required=opts.version;var express=opts.expressInstall;var ok=!required||flashembed.isSupported(required);if(ok){opts.onFail=opts.version=opts.expressInstall=null;root.innerHTML=getHTML(opts,flashvars);}else if(required&&express&&flashembed.isSupported([6,65])){extend(opts,{src:express});flashvars={MMredirectURL:location.href,MMplayerType:'PlugIn',MMdoctitle:document.title};root.innerHTML=getHTML(opts,flashvars);}else{if(root.innerHTML.replace(/\s/g,'')!==''){}else{root.innerHTML="<h2>Flash version "+required+" or greater is required</h2>"+"<h3>"+
(version[0]>0?"Your version is "+version:"You have no flash plugin installed")+"</h3>"+"<p>Download latest version from <a href='http://www.adobe.com/go/getflashplayer'>here</a></p>";}}
if(!ok&&opts.onFail){var ret=opts.onFail.call(this);if(typeof ret=='string'){root.innerHTML=ret;}}}
window.flashembed=function(root,conf,flashvars){if(typeof root=='string'){var el=document.getElementById(root);if(el){root=el;}else{domReady(function(){flashembed(root,conf,flashvars);});return;}}
if(!root){return;}
var opts={width:'100%',height:'100%',allowfullscreen:true,allowscriptaccess:'always',quality:'high',version:null,onFail:null,expressInstall:null,w3c:false};if(typeof conf=='string'){conf={src:conf};}
extend(opts,conf);return new Flash(root,opts,flashvars);};extend(window.flashembed,{getVersion:function(){var version=[0,0];if(navigator.plugins&&typeof navigator.plugins["Shockwave Flash"]=="object"){var _d=navigator.plugins["Shockwave Flash"].description;if(typeof _d!="undefined"){_d=_d.replace(/^.*\s+(\S+\s+\S+$)/,"$1");var _m=parseInt(_d.replace(/^(.*)\..*$/,"$1"),10);var _r=/r/.test(_d)?parseInt(_d.replace(/^.*r(.*)$/,"$1"),10):0;version=[_m,_r];}}else if(window.ActiveXObject){try{var _a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}catch(e){try{_a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");version=[6,0];_a.AllowScriptAccess="always";}catch(ee){if(version[0]==6){return;}}
try{_a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}catch(eee){}}
if(typeof _a=="object"){_d=_a.GetVariable("$version");if(typeof _d!="undefined"){_d=_d.replace(/^\S+\s+(.*)$/,"$1").split(",");version=[parseInt(_d[0],10),parseInt(_d[2],10)];}}}
return version;},isSupported:function(version){var now=flashembed.getVersion();var ret=(now[0]>version[0])||(now[0]==version[0]&&now[1]>=version[1]);return ret;},domReady:domReady,asString:asString,getHTML:getHTML});if(jQ){jQuery.prototype.flashembed=function(conf,flashvars){return this.each(function(){flashembed(this,conf,flashvars);});};}})();

(function($){$.la=$.la||{};$.extend(true,$.la,{master:true,sHost:location.protocol+'//'+location.hostname,modules:{la:{active:true,modules:{utils:{active:true}}},require:function(module){if(!$.la.modules.isLoaded(module)){$.la.utils.debug('Erreur : le plugin '+module+' est manquant');}},isLoaded:function(module){var tmp=module.split('.');var m=$.la.modules;if(tmp.length&&m.length){for(var i in tmp){if(typeof m[tmp[i]]=='undefined'||typeof m[tmp[i]].active=='undefined'||m[tmp[i]].active==false){return false;}
m=m[tmp[i]]['modules'];}}
return true;}},utils:{isAnOlderjQueryVersion:function(version){currentVersion=jQuery.fn.jquery;for(i=0;i<version.split('.').length;i++){if(version.split('.')[i]==currentVersion.split('.')[i]){}else if(version.split('.')[i]<currentVersion.split('.')[i]){return true;}else{return false;}}
return(version.split('.').length<currentVersion.split('.').length);},getJsonDatatype:function(){if(this.isAnOlderjQueryVersion('1.5')){return'text json';}else{return'json';}},_cleanUpFlash:false,messages:{fileNeeded:'Il manque le fichier !',notAVideoFile:'Ce n\' est pas une vidéo'},debug:function(text){if(window.console&&window.console.log){window.console.log(text);}},debugConsole:function(text){if(typeof text=='object'){$.la.utils.debug($.la.utils.var_dump(text,true,1));}
else{var today=new Date();var h=today.getHours();var m=today.getMinutes();var s=today.getSeconds();if(typeof text=='string'){$.la.utils.debug(h+':'+m+':'+s+' - '+text);}
else{$.la.utils.debug(h+':'+m+':'+s);$.la.utils.debug(text);}}},var_dump:function(v,recursif,indent){recursif=typeof recursif=='undefined'?false:true;indent=typeof indent=='undefined'?0:indent;res='';for(i in v){for(var j=0;j<indent;j++){res+='>> ';}
if(recursif&&typeof v[i]=='object'){res+=i+':\n'+this.var_dump(v[i],recursif,indent+1)+'\n';}
else{res+=i+' : '+v[i]+'\n';}}
if(!indent){alert(res);}
else{return res;}
return res;},cleanUpFlash:function(){this._cleanUpFlash=true;try{$('object[cleanup!=true]').each(function(){var opaque=true;$('param',$(this)).each(function(){if($(this).attr('wmode')=='transparent'){opaque=false;}});if(opaque){var clone=$(this).clone();clone.append('<param name="wmode" value="transparent" />');clone.attr('cleanup','true');$('embed',clone).attr('wmode','transparent');$(this).replaceWith(clone);}});}
catch(e){}
try{$('embed[cleanup!=true]').each(function(){if($(this).attr('wmode')!='transparent'){var clone=$(this).clone();clone.attr('wmode','transparent');clone.attr('cleanup','true');$(this).replaceWith(clone);}});}
catch(e){}},addFavorite:function(){var url=window.location;var titre=document.title;if(window.sidebar){window.sidebar.addPanel(titre,url,'');}
else{window.external.AddFavorite(url,titre);}
return false;},httpGet:function(key_str){if(window.location.search){var query=window.location.search.substr(1);var pairs=query.split("&");for(var i=0;i<pairs.length;i++){var pair=pairs[i].split("=");if(unescape(pair[0])==key_str){return unescape(pair[1]);}}}
return'';},getKey:function(key_str,str){if(str!=''){var query=str.substr(1);var pairs=query.split("&");for(var i=0;i<pairs.length;i++){var pair=pairs[i].split("=");if(unescape(pair[0])==key_str){return unescape(pair[1]);}}}
return'';},isNumeric:function(val){var exp=new RegExp("^[0-9]+$","g");return exp.test(val);},isInt:function(val){return!isNaN(val)&&parseInt(val)==val;},isDate:function(date){var tabDate=date.split('/');if(!$.la.utils.isNumeric(tabDate[0])){return false;}
else{var j=parseInt(tabDate[0],"10");}
if(!$.la.utils.isNumeric(tabDate[1])){return false;}
else{var m=parseInt(tabDate[1],"10");}
if(!$.la.utils.isNumeric(tabDate[2])){return false;}
else{var a=parseInt(tabDate[2],"10");}
if(isNaN(a)||isNaN(m)||isNaN(j)){return false;}
else{var fev;if((a%4===0&&a%100!==0)||(a%400===0)){fev=29;}
else{fev=28;}
var nbJours;if(fev==28){nbJours=[31,28,31,30,31,30,31,31,30,31,30,31];}
else if(fev==29){nbJours=[31,29,31,30,31,30,31,31,30,31,30,31];}
return((m>=1)&&(m<=12)&&(j>=1)&&(j<=nbJours[m-1]));}},verifMail:function(emailString){var pass=false;for(var j=1;j<(emailString.length);j++){if(emailString.charAt(j)=='@'){if(j<(emailString.length-4)){for(var k=j;k<(emailString.length-2);k++){if(emailString.charAt(k)=='.'){pass=true;}}}}}
return pass;},checknumber:function(atester){var anum=/(^\d+$)|(^\d+\.\d+$)/;if(anum.test(atester)){pass=true;}
else{pass=false;}
return pass;},isMineur:function(sD,sM,sY){var d=new Date();var curr_dayOfMonth=d.getDate();var curr_month=d.getMonth()+1;var curr_year=d.getFullYear();if(curr_year-sY>18||(curr_year-sY==18&&curr_month>=sM&&curr_dayOfMonth>=sD)){return false;}
else{return true;}},krsort:function(w){var sArr=[],tArr=[],i,n=0;for(i in w){tArr[n++]=i;}
tArr=tArr.sort(function(a,b){return(b-a);});n=tArr.length;for(var i=0;i<n;i++){sArr[i]=w[tArr[i]];}
return sArr;},loadHeadScript:function(src){var script=document.createElement('script');script.setAttribute('src',src);document.getElementsByTagName('head')[0].appendChild(script);},loadHeadStylesheet:function(src){var cssNode=document.createElement('link');cssNode.setAttribute('type','text/css');cssNode.setAttribute('rel','stylesheet');cssNode.setAttribute('href',src);document.getElementsByTagName('head')[0].appendChild(cssNode);},querystring_get:function(key,default_){if(default_===null){default_=null;}
var value=this.params[key];if(value===null){value=default_;}
return value;},querystring:function(qs){this.params={};this.get=$.la.utils.querystring_get;if(qs===null||typeof qs==='undefined'){qs=location.search.substring(1,location.search.length);}
if(qs.length===0){return;}
qs=qs.replace(/\+/g,' ');var args=qs.split('&');for(var i=0;i<args.length;i++){var value;var pair=args[i].split('=');var name=unescape(pair[0]);if(pair.length==2){value=unescape(pair[1]);}
else{value=name;}
this.params[name]=value;}},objectToJSON:function(o){var parse=function(_o){var a=[],t;for(var p in _o){if(_o.hasOwnProperty(p)){t=_o[p];var pn="\""+p.toString()+"\"";if(t&&typeof t=="object"){a[a.length]=pn+":{ "+arguments.callee(t).join(", ")+"}";}
else{if(typeof t=="string"){a[a.length]=[pn+": \""+t.toString()+"\""];}
else{a[a.length]=[pn+": "+t.toString()];}}}}
return a;}
return"{"+parse(o).join(", ")+"}";},getTimeStamp:function(){var currentTime=new Date();return currentTime.getTime();},verifyUpload:function(value_image,value_video,type,formId){if(type==1){if(value_image===''){alert($.la.utils.messages.fileNeeded);}else{$('#'+formId).submit();}}else{if(value_video===''){alert($.la.utils.messages.fileNeeded);}else{if(value_video.indexOf('.mov')===-1&&value_video.indexOf('.wmv')===-1&&value_video.indexOf('.mpeg')===-1&&value_video.indexOf('.avi')===-1&&value_video.indexOf('.3gp')===-1&&value_video.indexOf('.mp4')===-1&&value_video.indexOf('.ram')===-1&&value_video.indexOf('.flv')===-1){alert($.la.utils.messages.notAVideoFile);}else{$('#'+formId).submit();}}}},switchTab:function(div1,div2,classe){$('#'+div1).addClass(classe);$('#'+div2).removeClass(classe);},showHide:function(div1,div2){$('#'+div1).show();$('#'+div2).hide();},sortOptionFromSelect:function(select_id){var Liste=new Array();var selected_item="";var all_theme_value="";$('#'+select_id).find("option").each(function(i){Liste[i]=new Array();Liste[i][0]=$(this).text();Liste[i][1]=$(this).val();if($(this).attr("selected")==true){selected_item=$(this).val();}
if($(this).attr("id")=="all_theme"){all_theme_value=$(this).val();}});Liste=Liste.sort();$('#'+select_id).find("option").each(function(i){$(this).attr('text',Liste[i][0]);$(this).attr('value',Liste[i][1]);if(Liste[i][1]==selected_item){$(this).attr('selected','selected');}
if($(this).val()==all_theme_value){$('#all_theme').attr('id','');$(this).attr('id','all_theme');}});$('#'+select_id).prepend($("#all_theme"));},escapeHtml:function(stringToEscape){var newString=stringToEscape.replace(/"/g,"&quot;");newString=newString.replace(/</g,"&lt;");newString=newString.replace(/>/g,"&gt;");newString=newString.replace(/&/g,"&amp;");return newString;},trim:function(string){var newString=string.replace(/(?:^\s+|\s+$)/g,"");return newString;},digital:function(digi){digi=parseInt(digi,10);if(digi<=9){return"0"+digi;}
return digi;},stripslashes:function(string){return(string+'').replace(/\\(.?)/g,function(s,n1){switch(n1){case'\\':return'\\';case'0':return'\0';case'':return'';default:return n1;}});},checkImageSrc:function(classe){var src_ok=1;$('.'+classe).error(function(){var src_ok=0;});return src_ok;},str_split:function(string,split_length){if(string===undefined||!string.toString||split_length<1){return false;}
return string.toString().match(new RegExp('.{1,'+(split_length||'1')+'}','g'));},implode:function(glue,pieces){var i='',retVal='',tGlue='';if(arguments.length===1){pieces=glue;glue='';}
if(typeof(pieces)==='object'){if(pieces instanceof Array){return pieces.join(glue);}
else{for(i in pieces){retVal+=tGlue+pieces[i];tGlue=glue;}
return retVal;}}
else{return pieces;}},list:{add:function(aListArray,oElement,push){if(push){aListArray.push(oElement);}else{aListArray.unshift(oElement);}
return aListArray;},alreadyIn:function(listArray,id){return(this.find(listArray,id).length>0);},find:function(listArray,id){arr=jQuery.grep(listArray,function(n){return n.element.id==id;});return arr;},order:function(aListArray,bIsRandom){aOrderArray=[];for(x in aListArray){obj=aListArray[x];aOrderArray.push(obj.id);}
if(bIsRandom=='on'){aOrderArray.sort(function(){return 0.5-Math.random();});}
return aOrderArray;}},browserDetect:{init:function(){this.browser=this.searchString(this.dataBrowser)||"An unknown browser";this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version";this.OS=this.searchString(this.dataOS)||"an unknown OS";},searchString:function(data){for(var i=0;i<data.length;i++){var dataString=data[i].string;var dataProp=data[i].prop;this.versionSearchString=data[i].versionSearch||data[i].identity;if(dataString){if(dataString.indexOf(data[i].subString)!=-1){return data[i].identity;}}
else if(dataProp){return data[i].identity;}}},searchVersion:function(dataString){var index=dataString.indexOf(this.versionSearchString);if(index==-1){return;}
return parseFloat(dataString.substring(index+this.versionSearchString.length+1));},dataBrowser:[{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera"},{string:navigator.vendor,subString:"iCab",identity:"iCab"},{string:navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.userAgent,subString:"iPhone",identity:"iPhone/iPod"},{string:navigator.userAgent,subString:"iPad",identity:"iPad"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]},isFullWebkit:function(){$.la.utils.browserDetect.init();if(($.la.utils.browserDetect.browser=='Safari'&&($.la.utils.browserDetect.OS=='iPad'||$.la.utils.browserDetect.OS=='iPhone/iPod'))||($.la.utils.browserDetect.browser=='Safari'&&$.la.utils.browserDetect.version>=5)){return true;}
else if($.la.utils.browserDetect.browser=='Chrome'&&!$.la.utils.browserDetect.OS=='Linux'&&$.la.utils.browserDetect.version>=19){return true;}
return false;},isIDevice:function(){$.la.utils.browserDetect.init();if(($.la.utils.browserDetect.browser=='Safari'&&($.la.utils.browserDetect.OS=='iPad'||$.la.utils.browserDetect.OS=='iPhone/iPod'))){return true;}
return false;}},replay:{},buzz:{}});})(jQuery);var sHost=jQuery.la.sHost;

(function($){"use strict";$.la=$.la||{};$.extend(true,$.la,{modules:{la:{modules:{modalbox:{active:true}}}},modalbox:{defaultOptions:{iWidth:500,iHeight:500,sMode:'',sFixed:'',sTitle:''},call:function(url,ModalBoxOptions,handlePub,decryptBeforeCall){if(typeof decryptBeforeCall==='undefined'){decryptBeforeCall=false;}else{if(decryptBeforeCall!==true){decryptBeforeCall=false;}}
if(decryptBeforeCall===true){url=jQuery.la.w.decrypt(url);}
if((jQuery.browser.msie&&parseInt(jQuery.browser.version,10)<=6)){document.location.href='#';}
if(url.indexOf('/')!==0){if(url.substring(0,7)!=='http://'&&url.substring(0,8)!=='https://'){url='/'+url;}}
var iWidth,iHeight,sMode,sFixed,sTitle,sParams;iWidth=$.la.modalbox.defaultOptions.iWidth;iHeight=$.la.modalbox.defaultOptions.iHeight;sMode=$.la.modalbox.defaultOptions.sMode;sFixed=$.la.modalbox.defaultOptions.sFixed;sTitle=$.la.modalbox.defaultOptions.sTitle;if(url.indexOf('?')===-1){sParams=url+'?';}else{sParams=url+'&';}
if(typeof(ModalBoxOptions.title)!=='undefined'){sTitle=ModalBoxOptions.title;}
if(typeof(ModalBoxOptions.width)!=='undefined'){iWidth=ModalBoxOptions.width;}
if(typeof(ModalBoxOptions.height)!=='undefined'){iHeight=ModalBoxOptions.height;}
if(typeof(ModalBoxOptions.mode)!=='undefined'){if(ModalBoxOptions.mode==='iframe'){sMode='&TB_iframe=true';}else if(ModalBoxOptions.mode==='inline'){sParams='#TB_inline?inlineId='+ModalBoxOptions.divID+'&';}}
if(typeof(ModalBoxOptions.fixed)!=='undefined'&&ModalBoxOptions.fixed){sFixed='&modal=true';}
sParams+='height='+iHeight+'&width='+iWidth+sMode+sFixed;if(handlePub){if($(".pub").length>0){$(".pub").hide();}}
tb_show(sTitle,sParams,false);},close:function(handlePub){if(handlePub){if($(".pub").length>0){$(".pub").show();}}
tb_remove();},show:function(html,width,height){document.location.href='#';$("body").append("<div id='TB_overlay'></div><div id='TB_window'></div>");$("#TB_overlay").click(tb_remove);$("#TB_window").append("<div id='TB_ajaxContent' class='TB_modal' style='width:510px;height:300px;'></div>");var TB_WIDTH,TB_HEIGHT;TB_WIDTH=(width*1)+30;TB_HEIGHT=(height*1)+40;$("#TB_window").css({marginLeft:'-'+parseInt((TB_WIDTH/2),10)+'px',width:TB_WIDTH+'px'});if(!(jQuery.browser.msie&&typeof XMLHttpRequest=='function')){$("#TB_window").css({marginTop:'-'+parseInt((TB_HEIGHT/2),10)+'px'});}
$("#TB_window").show();$("#TB_ajaxContent").html(html);},resize:function(params){var TB_WIDTH,TB_HEIGHT;if(typeof params.width!=='undefined'){TB_WIDTH=(params.width*1)+30;}
if(typeof params.height!=='undefined'){TB_HEIGHT=(params.height*1)+40;}
if(typeof params.width!=='undefined'){$("#TB_window").css({marginLeft:'-'+parseInt((TB_WIDTH/2),10)+'px',width:TB_WIDTH+'px'});}
if(typeof params.height!=='undefined'){if(!(jQuery.browser.msie&&typeof XMLHttpRequest=='function')){$("#TB_window").animate({marginTop:'-'+parseInt((TB_HEIGHT/2),10)});}
$("#TB_ajaxContent").animate({height:params.height});}},accordionSpeed:'fast',accordion:function(obj,callback){var id;for(id in obj){$('#'+id).slideUp($.la.modalbox.accordionSpeed);$('#'+id).prev('h3').children('a').removeClass("opened");}
for(id in obj){if(obj[id]===true){$('#'+id).slideDown($.la.modalbox.accordionSpeed);$('#'+id).prev('h3').children('a').addClass("opened");}}
if(typeof(callback)==='function'){callback();}},ldapOpenCloseLoginBoxRegistered:function(id,callback){var obj={};$("h3 + div").each(function(i){var currentId=$(this).attr('id');if(currentId!==''){obj[currentId]=false;if(currentId===id){if($('#'+id).css('display')==='none'){obj[currentId]=true;}}}});$.la.modalbox.accordion(obj,callback);}}});}(jQuery));

(function($){$.la=$.la||{};$.la.modules.require('la.utils');$.extend(true,$.la,{modules:{la:{modules:{cookie:{active:true}}}},cookie:{init:function(){var pathname=location.pathname;var myDomain=pathname.substring(0,pathname.lastIndexOf('/'))+'/';var date_exp=new Date();var adserver_test=true;date_exp.setTime(date_exp.getTime()+(365*24*3600*1000));var qs=new $.la.utils.querystring();var id_lien=qs.get('id_op');if(id_lien!==null){$.la.cookie.set('id_lien',id_lien);}
var regImage=qs.get('img');if(regImage!==null){$.la.cookie.set('regImage',regImage);}},getVal:function(offset)
{if(document.cookie){var endstr=document.cookie.indexOf(";",offset);if(endstr==-1){endstr=document.cookie.length;}
return unescape(document.cookie.substring(offset,endstr));}
else{return null;}},get:function(name)
{var cookieValue=null;if(document.cookie&&document.cookie!=''){var cookies=document.cookie.split(';');for(var i=0;i<cookies.length;i++){var cookie=$.trim(cookies[i]);if(cookie.substring(0,name.length+1)==(name+'=')){cookieValue=decodeURIComponent(unescape(cookie.substring(name.length+1)).replace(/%/g,'%25'));break;}}}
return cookieValue?cookieValue:false;},set:function(name,value,expires,domain,path,secure)
{if(typeof name!='undefined'&&typeof value!='undefined'){path='; path='+(path?path:'/');secure=secure?'; secure':'';domain=domain?'; domain='+(domain):'';secure=secure?'; secure':'';if(expires&&(typeof expires=='number'||expires.toUTCString)){var date;if(typeof expires=='number'){date=new Date();date.setTime(date.getTime()+(expires*24*60*60*1000));}else{date=expires;}
expires='; expires='+date.toUTCString();}
else{expires='';}
document.cookie=[name,'=',encodeURIComponent(value),expires,path,domain,secure].join('');}},clear:function(name,domain,path,secure,session)
{var value='';var expires;if(typeof session=='boolean'&&session){expires='; expires= -1';}
else{var exp=new Date();exp.setTime(exp.getTime()-100000);expires='; expires='+exp.toGMTString();}
path='; path='+(path?path:'/');secure=secure?'; secure':'';domain=domain?'; domain='+domain:'';secure=secure?'; secure':'';document.cookie=[name,'=',encodeURIComponent(value),expires,path,domain,secure].join('');}}});})(jQuery);

(function($){$.la=$.la||{};$.la.modules.require('la.cookie');$.la.modules.require('la.modalbox');$.extend(true,$.la,{modules:{la:{modules:{action:{active:true}}}},action:{messages:{notLogged:'Nous n\'avons pas pu t\'identifier. Vérifie ton pseudo et ton mot de passe.',bookmarkAdded:'Ce contenu a été ajouté aux favoris'},settings:{loginBox:{title:'Login',width:800,height:600}},onUserLogged:null,isLogged:function(){if($.la.cookie.get("user_logged")=="oui"){return true;}
return false;},verifyAuthentification:function(loginUrl,formId,params)
{if(typeof params==='undefined'){params={};}
$.extend($.la.action.settings.loginBox,params);if($.la.action.isLogged())
{if(typeof $.la.action.settings.loginBox.returnUrl!='undefined'){if(loginUrl.indexOf('iframe=1')!=-1){parent.location=$.la.action.settings.loginBox.returnUrl;}
else{document.location=$.la.action.settings.loginBox.returnUrl;}}
else{$('#'+formId).submit();}}
else
{$.la.action.baseIdForm=formId;$.la.modalbox.call(loginUrl,$.la.action.settings.loginBox);}},verfifyAuthentification:function(loginUrl,formId,params){this.verifyAuthentification(loginUrl,formId,params);},getLoginBoxByCookie:function(LayerId,editUrl,forgotUrl,registerUrl,logoutUrl,loginUrl,BaseUrl,BaseImg)
{},checkSSO:function(path)
{var urlIsLogged=$.la.sHost+'/action/edit';var urlLogout=$.la.sHost+'/action/logout';if(path!=null){urlIsLogged=$.la.sHost+path+'/action/edit';urlLogout=$.la.sHost+path+'/action/logout';}
$.ajax({url:urlIsLogged,async:false,type:'GET',dataType:'html',success:function(response){var logged=response.indexOf('kernel (1)')==-1&&$.la.cookie.get('EZ_TICKET')!=false;if(!logged){$.ajax({url:urlLogout,async:false,type:'GET',success:function(response){}});}}});return $.la.cookie.get('EZ_TICKET')!=false;},verifyRules:function(loginUrl,formName)
{},loginUserBox:function(loginUrl,sLoginContent,idForm)
{$.ajax({url:loginUrl,async:true,type:'POST',data:$('#'+idForm).serialize(),success:function(html){if($.la.action.isLogged())
{$.la.action.getLoginBoxByCookie('identification','/action/edit','/action/forgotpassword','/action/register','/action/logout?ReturnUrl='+$.la.sHost,'/action/login','/','/design/gulli/images/');if($.la.action.baseIdForm.substring(0,10)=='addFavoris')
{$.ajax({url:$.la.sHost+'/action/bookmark',async:true,type:'POST',data:$('#'+$.la.action.baseIdForm).serialize(),success:function(){alert($.la.action.messages.bookmarkAdded);$.la.modalbox.close();}});}
else
{$('#'+$.la.action.baseIdForm).submit();$.la.modalbox.close();}}
else
{$('#TB_ajaxContent').html(html);}}});},loginUser:function(LayerId,editUrl,forgotUrl,registerUrl,logoutUrl,loginUrl,BaseUrl,BaseImg,sLoginContent,idForm,bSeSouvenir){if(typeof(idForm)=='undefined'){idForm='mon_compte';}
$('#'+LayerId).hide();$.ajax({url:loginUrl,async:true,type:'POST',dataType:$.la.utils.getJsonDatatype(),data:$('#'+idForm).serialize(),success:function(){if($.la.action.isLogged()){$.la.action.getLoginBoxByCookie(LayerId,editUrl,forgotUrl,registerUrl,logoutUrl,loginUrl,BaseUrl,BaseImg);$('#'+LayerId).show();}else{alert($.la.action.messages.notLogged);$('#'+LayerId).show();document.location.href=loginUrl;}}});if($.la.action.onUserLogged!=null){$.la.action.onUserLogged();}},RefreshLoginBoxAvatar:function(){},loginUserCommentaire:function(loginUrl,idForm,noeud)
{$.ajax({url:loginUrl,async:true,type:'POST',data:$('#'+idForm).serialize(),success:function(html)
{if($.la.action.isLogged())
{$.la.action.getLoginBoxByCookie('identification','/action/edit','/action/forgotpassword','/action/register','/action/logout?ReturnUrl='+$.la.sHost,'/action/login','/','/design/gulli/images/');$.ajax({url:$.la.sHost+'/commanage/popup_comment/'+noeud,async:true,success:function(html_comment){$('#TB_ajaxContent').html(html_comment);}});}
else
{$('#TB_ajaxContent').html(html);}}});},addFavori:function(url,loginUrl,formName,div)
{},updateUIAfterLogin:function()
{}}});})(jQuery);

(function($){$.la=$.la||{};$.extend(true,$.la,{modules:{la:{modules:{slider:{active:true}}}},slider:{getMaxScroll:function(id)
{var maxScroll=$("#"+id).attr("scrollHeight")-$("#"+id).height();return maxScroll;},getScroll:function(id,val)
{return parseInt((val/this.getMaxScroll(id))*100,'10');},afficheScroll:function(id,id_contener)
{if(this.getMaxScroll(id_contener)>0)
{$('#'+id).show();}}}});})(jQuery);

(function($){$.la=$.la||{};$.extend(true,$.la,{modules:{la:{modules:{ajax:{active:true}}}},ajax:{updater:function(url,div){$.ajax({url:url,success:function(html){$('#'+div).html(html);}});}}});})(jQuery);

(function($){$.la=$.la||{};$.extend(true,$.la,{modules:{la:{modules:{hfpvote:{active:true}}}},hfpvote:{voteover:function(param,id){if(id){$('#'+id).css('width',(19*param)+'px');}
else{$('#fdvote').css('width',(19*param)+'px');}},switchDiv:function(divDisplay,divNone){$('#'+divDisplay).css('display','block');$('#'+divNone).css('display','none');},reload:function(iAverage,iWeight){$.la.hfpvote.voteover(iAverage);var arr=[];for(var i=0;i<iWeight;i++){arr[i]=i+1;}
$.each(arr,function(i){$('#'+'etoileLink'+arr[i]).mouseout(function(){$.la.hfpvote.voteover(iAverage);});});},reloadCount:function(iCount,id){var newCount=iCount;if(typeof newCount!="undefined"){if(newCount>1){$('#'+id).html('/ '+newCount+' votes');}
else{$('#'+id).html('/ '+newCount+' vote');}}}}});})(jQuery);

(function($){$.la=$.la||{};$.la.modules.require('la.utils');$.la.modules.require('la.cookie');$.extend(true,$.la,{modules:{la:{modules:{tracking:{active:true}}}},tracking:{activeConsole:function(){if($.la.utils.httpGet('la_console')=='1'||$.la.utils.httpGet('la_console')=='0'||$.la.cookie.get('la_console')=='1'){$.la.tracking.console();}},console:function(){try{src=$.la.sHost+'/extension/lajavascript/design/standard/javascript/jquery/jquery.la/jquery.la.console.js';$.la.utils.loadHeadScript(src);}
catch(e){$.la.utils.debug('Erreur de chargement de la console : '+e.message);}},init:function(obj){for(var i in obj){var txt=obj[i];if(typeof txt=='string'&&txt!=''){obj[i]=txt.toLowerCase();}}
if($.la.modules.isLoaded('la.tracking.cybermonitor')){if(typeof obj.CM_SERIAL=='undefined'){obj.CM_SERIAL=$.la.tracking.cybermonitor.ids.CM_SERIAL;}
if(typeof obj.CM_CLIENT=='undefined'){obj.CM_CLIENT=$.la.tracking.cybermonitor.ids.CM_CLIENT;}
if(typeof obj.CM_TAG=='undefined'){obj.CM_TAG=$.la.tracking.cybermonitor.ids.CM_TAG;}
$.la.tracking.cybermonitor.init(obj.CM_SERIAL,obj.CM_CLIENT,obj.CM_NIVEAU1,obj.CM_NIVEAU2,obj.CM_NIVEAU3,obj.CM_NIVEAU4,obj.CM_TAG);}},track:function(){if($.la.modules.isLoaded('la.tracking.cybermonitor')){$.la.tracking.cybermonitor.track();}
if($.la.modules.isLoaded('la.tracking.ga')){$.la.tracking.ga.track();}}}});})(jQuery);

(function($){$.la=$.la||{};$.la.modules.require('la.tracking');$.extend(true,$.la,{modules:{la:{modules:{tracking:{modules:{ga:{active:true}}}}}},tracking:{ga:{_ua:null,_domain:null,track:function(){var gaJsHost=(("https:"==document.location.protocol)?"https://ssl.":"http://www.");$.ajax({type:"GET",url:gaJsHost+"google-analytics.com/ga.js",dataType:'script',cache:true,success:function(){try{var pageTracker=_gat._getTracker($.la.tracking.ga._ua);pageTracker._setDomainName($.la.tracking.ga._domain);pageTracker._setAllowAnchor(true);pageTracker._trackPageview();}catch(err){}}});}}}});})(jQuery);

(function($){$.la=$.la||{};$.la.modules.require('la.tracking');$.extend(true,$.la,{modules:{la:{modules:{tracking:{modules:{cybermonitor:{active:true}}}}}},tracking:{cybermonitor:{ids:{CM_SERIAL:null,CM_CLIENT:null,CM_TAG:'ml'},init:function(CM_SERIAL,CM_CLIENT,CM_NIVEAU1,CM_NIVEAU2,CM_NIVEAU3,CM_NIVEAU4,CM_TAG){$.la.tracking.cybermonitor.ids.CM_SERIAL=CM_SERIAL;$.la.tracking.cybermonitor.ids.CM_CLIENT=CM_CLIENT;$.la.tracking.cybermonitor.ids.CM_NIVEAU1=CM_NIVEAU1;$.la.tracking.cybermonitor.ids.CM_NIVEAU2=CM_NIVEAU2;$.la.tracking.cybermonitor.ids.CM_NIVEAU3=CM_NIVEAU3;$.la.tracking.cybermonitor.ids.CM_NIVEAU4=CM_NIVEAU4;$.la.tracking.cybermonitor.ids.CM_TAG=CM_TAG;},setMarker:function(marker){$.la.tracking.cybermonitor.ids.CM_TAG=marker;},track:function(){if(typeof(_PJS)!='undefined'){eStat_id.cmclient($.la.tracking.cybermonitor.ids.CM_CLIENT);eStat_id.niveau(1,$.la.tracking.cybermonitor.ids.CM_NIVEAU1);eStat_id.niveau(2,$.la.tracking.cybermonitor.ids.CM_NIVEAU2);eStat_id.niveau(3,$.la.tracking.cybermonitor.ids.CM_NIVEAU3);eStat_id.niveau(4,$.la.tracking.cybermonitor.ids.CM_NIVEAU4);eStat_tag.post($.la.tracking.cybermonitor.ids.CM_TAG);}else{$.ajax({type:"GET",url:'http://prof.estat.com/js/'+$.la.tracking.cybermonitor.ids.CM_SERIAL+'.js',dataType:'script',cache:true,success:function(){eStat_id.cmclient($.la.tracking.cybermonitor.ids.CM_CLIENT);eStat_id.niveau(1,$.la.tracking.cybermonitor.ids.CM_NIVEAU1);eStat_id.niveau(2,$.la.tracking.cybermonitor.ids.CM_NIVEAU2);eStat_id.niveau(3,$.la.tracking.cybermonitor.ids.CM_NIVEAU3);eStat_id.niveau(4,$.la.tracking.cybermonitor.ids.CM_NIVEAU4);eStat_tag.post($.la.tracking.cybermonitor.ids.CM_TAG);}});}},refresh:function(){var eStatTagRefresh=new Image();eStatTagRefresh.src=FT('ml')+"&n="+Math.round(Math.random()*1000000000);}}}});})(jQuery);

(function($){"use strict";$.la=$.la||{};$.la.modules.require('la.tracking');$.extend(true,$.la,{modules:{la:{modules:{tracking:{modules:{at:{active:true}}}}}},tracking:{at:{tag:null,init:function(){return{'env_dnt':'','content_type':'','content_node_id':0,'content_object_id':0,'level_1':'','level_2':'','level_3':'','label':'','content_class':'','module':'','view':'','error':0,'custom1':"",'custom2':"",'custom3':"",'custom4':"",'custom5':"",'custom6':"",'custom7':"",'custom8':"",'custom9':"",'custom10':"",'search_result':0,'search_page':"",'search_keyword':""};},track:function(){xt_med('F',xtn2,xtpage);}}}});})(jQuery);

(function($){$.la=$.la||{};$.la.modules.require('la.utils');$.extend(true,$.la,{modules:{la:{modules:{promo:{active:true}}}},promo:{showInterstitiel:function(obj){var opts=$.extend(true,$.la.promo.interstitiel.defaultValues,obj);$.la.promo.interstitiel.show(opts);},interstitiel:{container:'#container',visible:false,callback:'',interstitielLoaded:false,defaultValues:{topObjectHeiht:'60',bottomObjectHeiht:'60',bodybgimage:'http://video.premiere.fr/regiepub/Premiere/prehome/bg_interstitiel_topbottom.png',bodybgcolor:'#000000',mediaWidth:'994',mediaHeight:'470',newwindow:0,newwindowseance:0},show:function(obj){var css='';css+=this.localCss(obj);css+=this.getHeadStyle(obj);css+=this.localCssAfter(obj);$('head').append('<style class="la-promo-interstitiel-style" type="text/css">'+css+'</style>');$.la.promo.interstitiel.write(obj);$.la.promo.interstitiel.interstitielLoaded=true;$("#la-promo-interstitiel-div .bloc_interstitiel_top a").click(function(){$.la.promo.interstitiel.remove();});},localCss:function(obj){return'';},localCssAfter:function(obj){return'';},getHeadStyle:function(obj){if($('#la-promo-showskin-a').length>0){$('#la-promo-showskin-a').hide();}
width=parseInt(obj.mediaWidth)<994?994:obj.mediaWidth;height=parseInt(obj.mediaHeight)+parseInt(obj.topObjectHeiht)+parseInt(obj.bottomObjectHeiht)+10;margin=parseInt(height/2);css='body {overflow:hidden}\n'+'#la-promo-interstitiel-div {height:100%; width:100%; z-index:9999; position: fixed; top: 0; left: 0; overflow: hidden; background-color:'+obj.bodybgcolor+'; }\n'+'#la-promo-interstitiel-div-container {position:absolute; top:50%; left:50%; width:'+width+'px; height:'+height+'px; margin:-'+parseInt(height/2)+'px 0 0 -'+parseInt(width/2)+'px;}\n'+'#la-promo-interstitiel-div-container .bloc_interstitiel_top, #la-promo-interstitiel-div-container .bloc_interstitiel_bottom{height:'+obj.topObjectHeiht+'px;background:url('+obj.bodybgimage+') left top no-repeat; margin: auto; width: 994px;}\n'+'#la-promo-interstitiel-div-container .bloc_interstitiel_bottom {background-position:left -75px; margin-top:10px;}\n'+'#la-promo-interstitiel-div-container .bloc_interstitiel_top .logo{float:left;width:230px;height:55px;}\n'+'#la-promo-interstitiel-div-container .bloc_interstitiel_top .link{float:right;width:230px;height:55px;}\n'+'#la-promo-interstitiel-div-container .bloc_interstitiel_bottom .link{float:right;width:220px;height:29px;}\n'+'.bloc_interstitiel_cnt {width:994px; text-align:center}';return css;},write:function(obj){$('body').append($.la.promo.interstitiel.getHtml(obj));$.la.promo.interstitiel.visible=true;window.setTimeout('$.la.promo.interstitiel.remove();',obj.time*1000);},getHtml:function(obj){html='<div id="la-promo-interstitiel-div" class="bloc_interstitiel">\n';if(obj.iframe){html+='<iframe src="'+obj.iframe+'" width="100%" height="1000px"></iframe>';}else{target='';if(obj.newwindow){target=' target="_blank"';}
html+='<div id="la-promo-interstitiel-div-container">\n'+'   <div class="bloc_interstitiel_top"><a href="javascript:void(0);" class="logo"></a><a href="javascript:void(0);" class="link"></a></div>\n'+'   <div class="bloc_interstitiel_cnt">\n';if(obj.mediaType=='swf'){html+='       <object width="'+obj.mediaWidth+'" height="'+obj.mediaHeight+'" type="application/x-shockwave-flash" data="'+obj.mediaUrl+'" id="inter_flash" style="visibility: visible;">\n'+'           <param name="movie" value="'+obj.mediaUrl+'">\n'+'           <param name="allowScriptAccess" value="always">\n'+'         <param name="quality" value="high">\n'+'         <param name="wmode" value="transparent">\n'+'         <param name="flashvars" value="clickTag='+obj.url+'">\n'+'       </object>\n';}else if(obj.mediaType=='img'){html+=' <a href="'+obj.url+'"'+target+'><img src="'+obj.mediaUrl+'" width="'+obj.mediaWidth+'" height="'+obj.mediaHeight+'" /></a>\n';}
html+='   </div>\n'+'   <div class="bloc_interstitiel_bottom" id="bloc_seance">';if(obj.seanceUrl){html+='<a href="'+obj.seanceUrl+'" class="link" id="findSeance"';if(obj.newwindowseance==1){html+=' target=_blank';}
html+='></a>';}
html+='</div>\n'+'</div>\n';}
html+='</div>\n';return html;},remove:function(){if($.la.promo.interstitiel.visible==true){if($('#la-promo-showskin-a').length>0){$('#la-promo-showskin-a').show();}
$('#la-promo-interstitiel-div').remove();$('la-promo-interstitiel-style').remove();$('body').css('overflow','visible');$.la.promo.interstitiel.visible=false;$.la.promo.interstitiel.interstitielLoaded=false;}}},skinLoaded:false,skinData:null,container:'#container',containerBody:'body',aMethod:'prepend',localCss:function(obj){return'';},localCssAfter:function(obj){return'';},setASkinStyle:function(obj){var height_css=$(document).height();if(obj.height_sup)
height_css+=obj.height_sup;var css='a#la-promo-showskin-a{z-index:1;position:absolute;top:0;left:0;width:100%;height:'+height_css+'px;}';css+='body{height:'+height_css+'px;}';$('head').append('<style class="la-promo-showskin-style" type="text/css">'+css+'</style>');},setSkinBodyStyle:function(obj){var bgattach="center";if(obj.bgfixed){bgattach="fixed";}
var sBodyStyle='\nbody{background:'+obj.bodybgcolor+' url('+obj.bodybgimage+') '+bgattach+' top no-repeat !important;}\n'
+$.la.promo.containerBody+'{\n'
+'  position:relative !important;\n\
                                        z-index:1 !important;\n\
                                    }\n\
                                    '+$.la.promo.container+'{\n';if(!(obj.swf&&obj.swfWidth&&obj.swfHeight)){strPx='';if(obj.top.indexOf('px')==-1){strPx='px';}
sBodyStyle+='top:'+obj.top+strPx+' !important;';}
sBodyStyle+=' position:relative;\n\
                                        z-index:1;\n\
                                    }\n';return sBodyStyle;},setSwfStyle:function(obj){return'#la-promo-showskin-divswf { width:994px; height:'+obj.swfHeight+'px; margin:0px auto 0px; position:relative;}\n'
+'#la-promo-showskin-swf { position:absolute; top:0; right:0; z-index:1}';},appendSkinA:function(obj){if(obj.url){var o=obj;$(document).ready(function(){$($.la.promo.container).css({position:'relative'});var target='';if(o.newwindow){target=' target="_blank"';}
var a='<a id="la-promo-showskin-a" href="'+o.url+'"'+target;if($('#la-promo-interstitiel-div').length>0){a+=' style="display:none"';}
a+='>';a+='</a>';if(obj.swf&&obj.swfWidth&&obj.swfHeight){var swfDiv='<div id="la-promo-showskin-divswf">'
+'   <object id="la-promo-showskin-swf" class="vjs-flash-fallback" width="'+o.swfWidth+'" height="'+o.swfHeight+'" type="application/x-shockwave-flash" data="'+o.swf+'">\n'
+'      <param name="movie" value="'+o.swf+'" />\n'
+'      <param name="wmode" value="transparent" />\n'
+'      <param name="allowfullscreen" value="true" />\n'
+'      <param name="allowscriptaccess" value="always" />\n'
+'      <param name="flashvars" value="clickTag='+o.url+'" />\n'
+'      </object>\n'
+'</div>\n';$($.la.promo.container).before(swfDiv);}
if($.la.promo.aMethod=='prepend'){$($.la.promo.containerBody).prepend(a);}
else{$($.la.promo.containerBody).append(a);}
$.la.promo.setASkinStyle(obj);});}},showSkin:function(obj){this.skinLoaded=true;this.skinData=obj;var container=obj.container;if(typeof container=='undefined'){container=$.la.promo.container;}
$.la.promo.container=container;var containerBody=obj.containerBody;if(typeof containerBody=='undefined'){containerBody=$.la.promo.containerBody;}
$.la.promo.containerBody=containerBody;var css='';css+=this.localCss(obj);css+=this.setSkinBodyStyle(obj);if(obj.swf){css+=this.setSwfStyle(obj);}
css+=this.localCssAfter(obj);$('head').append('<style class="la-promo-showskin-style" type="text/css">'+css+'</style>');this.appendSkinA(obj);},removeSkin:function(){$('.la-promo-showskin-style').remove();$('#la-promo-showskin-a').remove();$.la.promo.skinLoaded=false;this.skinData=null;},wreportRefresh:function(){if(wreport_ok==1){var w_counter=new wreport_counter(WRP_SECTION,WRP_SUBSECTION,WRP_ID,WRP_ACC,WRP_CHANNEL,WRP_SECTION_GRP,WRP_SUBSECTION_GRP);w_counter.add_content(WRP_CONTENT);w_counter.count();}},bannerRefresh:function(uri,gestionHauteur){if(typeof gestionHauteur=='undefined'){gestionHauteur='gestionHauteur';}
if($('#'+gestionHauteur).length>0){$('#'+gestionHauteur).html('<iframe scrolling="no" frameborder="0" width="728" height="90"  border="0" marginheight="0" marginwidth="0" noresize="true" vspace="0" framespacing="0"  src="'+$.la.sHost+'/ajaxext/pub?publicite=banniere&uri='+uri+'"></iframe>');}},flashAnimate:function(prop,speed,easing,callback){var optall=jQuery.speed(speed,easing,callback);return this[optall.queue===false?"each":"queue"](function(){var opt=jQuery.extend({},optall),p,hidden=this.nodeType==1&&jQuery(this).is(":hidden"),self=this;for(p in prop){if(prop[p]=="hide"&&hidden||prop[p]=="show"&&!hidden)
return opt.complete.call(this);if((p=="height"||p=="width")&&this.style){opt.display=jQuery.css(this,"display");opt.overflow=this.style.overflow;}}
opt.curAnim=jQuery.extend({},prop);jQuery.each(prop,function(name,val){var e=new jQuery.fx(self,opt,name);if(/toggle|show|hide/.test(val))
e[val=="toggle"?hidden?"show":"hide":val](prop);else{var parts=val.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),start=e.cur(true)||0;if(parts){var end=parseFloat(parts[2]),unit=parts[3]||"px";if(unit!="px"){self.style[name]=(end||1)+unit;start=((end||1)/e.cur(true))*start;self.style[name]=start+unit;}
if(parts[1])
end=((parts[1]=="-="?-1:1)*end)+start;e.custom(start,end,unit);}else
e.custom(start,val,"");}});return true;});},adRefresh:function(index,callback){if(typeof $.la.promo._settingsList!='undefined'&&typeof $.la.promo._settingsList[index]!='undefined')
{iframeStr='<iframe style="border:0;" src="/extension/lajavascript/design/standard/lib/pub.html?id='+$.la.promo._settingsList[index].id+'&r='+Math.floor(Math.random()*100000)+'&cb='+callback+'"></iframe>';$('#'+$.la.promo._settingsList[index].elt).html(iframeStr);}},a2dToRegister:{},a2dUrlSup:'',kwSiteEntry:'',_adList:[],_settingsList:[],_adListForConsole:[],_a2dRandom:Math.random(),_adDefaultDefer:false,_adDefaultZoneDefer:{},_adDefaultForceDefer:null,_adDefaultForceZoneDefer:{},a2dSiteId:null,a2dSiteKw:null,a2dKw:null,_adHostNew:'http://mfr.a2dfp.net',_adHost:'http://fr.a2dfp.net',_testA2d:{},prependRegister:function(placement,id,defer){if(id!=''){$.la.promo.a2dToRegister[placement]={id:id,defer:defer};}},adSetZone:function(placement,id){if(id!=''){$.la.promo.a2dToRegister[placement]={id:id};}},seta2dSiteId:function(siteId){if(typeof(siteId)=='number'&&parseInt(siteId)==siteId){$.la.promo.a2dSiteId=siteId;}},seta2dSiteKw:function(siteKw){if(typeof(siteKw)=='string'){$.la.promo.a2dSiteKw=siteKw;}},seta2dKw:function(Kw){if(typeof(Kw)=='string'){$.la.promo.a2dKw=Kw;}},adLoad:function(index){if(typeof $.la.promo._adList[index]!='undefined'){$.la.promo._adWrite($.la.promo._adList[index].id);}},adsProcess:function(){for(var i=0;i<$.la.promo._adList.length;i++){if(typeof $.la.promo._adList[i]!='undefined'){if($.la.promo._adList[i].defer=='ready'){var index=i;$.la.promo._deferProcess(index);}else{$('#'+$.la.promo._adList[i].elt)._adProcess(i);}}}},testA2d:function(idCampaign){var url=document.location.href.replace('&testA2d='+idCampaign,'');url=url.replace('\?testA2d='+idCampaign,'\?');url=url.replace('?testA2d='+idCampaign,'?');if(document.location.href.indexOf('?')!=-1){document.location.href=url+'&testA2d='+idCampaign;}
else{document.location.href=url+'?testA2d='+idCampaign;}},removeTestA2d:function(idCampaign){document.location.href=document.location.href.replace(document.location.search,'');},_adRegister:function(id,defer){var settings={};if(typeof id!='object'){settings={};settings.id=id;settings.defer=defer;settings.zone=null;}
else if(typeof id=='object'){settings=id;}
if(typeof settings.zone!='undefined'&&typeof $.la.promo.a2dToRegister[settings.zone]=='object'){settings.id=$.la.promo.a2dToRegister[settings.zone].id;if(!settings.hasOwnProperty('defer')){settings.defer=$.la.promo.a2dToRegister[settings.zone].defer;}}
if(typeof settings.defer=='undefined'||(settings.defer==''&&settings.defer!==false)||settings.defer=='{defer}'){if(typeof $.la.promo._adDefaultZoneDefer[settings.zone]!='undefined'){settings.defer=$.la.promo._adDefaultZoneDefer[settings.zone];}
else if($.la.promo._adDefaultDefer!=null){settings.defer=$.la.promo._adDefaultDefer;}
else{settings.defer=false;}}
if(typeof settings.defer=='undefined'||settings.defer==''||settings.defer=='{defer}'){if(typeof $.la.promo._adDefaultZoneDefer[settings.zone]!='undefined'){settings.defer=$.la.promo._adDefaultZoneDefer[settings.zone];}
else if(typeof $.la.promo._adDefaultDefer!='undefined'){settings.defer=$.la.promo._adDefaultDefer;}
else{settings.defer=$.la.promo._adDefaultDefer;}}
if(settings.zone!=null&&$.la.promo._adDefaultForceZoneDefer!=null&&typeof $.la.promo._adDefaultForceZoneDefer[settings.zone]!='undefined'){settings.defer=$.la.promo._adDefaultForceZoneDefer[settings.zone];}
else if($.la.promo._adDefaultForceDefer!=null){settings.defer=$.la.promo._adDefaultForceDefer;}
if(settings.defer=='false'){settings.defer=false;}
settings.elt=$(this).attr('id');if($.la.utils.httpGet('testA2d')&&typeof $.la.promo._testA2d[$.la.utils.httpGet('testA2d')]!='undefined'){if($.la.promo._testA2d[$.la.utils.httpGet('testA2d')][settings.zone]!=''){settings.id=$.la.promo._testA2d[$.la.utils.httpGet('testA2d')][settings.zone];}}
if($.la.promo.kwSiteEntry!=''){currentDomainName=window.location.hostname.split('.').reverse().slice(0,2).reverse().join('.');referrerDomainName='';if(document.referrer)referrerDomainName=document.referrer.split('/')[2].split('.').reverse().slice(0,2).reverse().join('.');if(currentDomainName!=referrerDomainName){if($.la.promo.a2dUrlSup==''){$.la.promo.a2dUrlSup=$.la.promo.kwSiteEntry;}else if($.la.promo.a2dUrlSup.search('/'+$.la.promo.kwSiteEntry+'/')==-1){$.la.promo.a2dUrlSup=$.la.promo.a2dUrlSup+':'+$.la.promo.kwSiteEntry;}
$.la.promo.kwSiteEntry='';}}
if(settings.defer==false){$.la.promo._adWrite(settings.id);$.la.promo._adListForConsole[$.la.promo._adListForConsole.length]=settings;}
else{$.la.promo._adList[$.la.promo._adList.length]=settings;$.la.promo._adListForConsole[$.la.promo._adListForConsole.length]=settings;}
$.la.promo._settingsList[$.la.promo._settingsList.length]=settings;},_adProcess:function(id){var prefix='preload_ad_';try{var me=$(this)[0];me.appendChild($('div[id="'+prefix+id+'"]')[0]);}
catch(e){return;}},_adWrite:function(id){try{if($.la.promo.a2dSiteId==null){if($.la.promo.a2dUrlSup!='')
document.write('<scr'+'ipt type="text\/javascript" src="'+$.la.promo._adHost+'\/ad?s='+id+'&m=js&ncb='+$.la.promo._a2dRandom+'&kw='+$.la.promo.a2dUrlSup+'"><\/scr'+'ipt>');else
document.write('<scr'+'ipt type="text\/javascript" src="'+$.la.promo._adHost+'\/ad?s='+id+'&m=js&ncb='+$.la.promo._a2dRandom+'"><\/scr'+'ipt>');}else{var a2dString='var a2d_s = '+id+'; var a2d_siteid = '+$.la.promo.a2dSiteId+';';if($.la.promo.a2dSiteKw!=null)
{a2dString=a2dString+' var a2d_sitekw = \''+$.la.promo.a2dSiteKw+'\';';}
if($.la.promo.a2dKw!=null)
{a2dString=a2dString+' var a2d_kw = \''+$.la.promo.a2dKw+'\';';}
document.write('<scr'+'ipt type="text\/javascript">'+a2dString+'<\/scr'+'ipt>');document.write('<scr'+'ipt type="text\/javascript" src="'+$.la.promo._adHostNew+'\/tw1\/a2d_displayAds.js"><\/scr'+'ipt>');}}
catch(e){}},_deferProcess:function(index){var i=index;$(function(){$('#'+$.la.promo._adList[i].elt)._adProcess(i);});},google:{adsense:{_scriptUrl:'http://pagead2.googlesyndication.com/pagead/show_ads.js',_params:{google_ad_client:null,google_ad_channel:null,google_ad_output:"js",google_max_num_ads:null,google_ad_type:"text",google_language:null,google_encoding:"utf8",google_feedback:"on",google_adtest:"off",google_analytics_domain_name:null,google_ad_width:null,google_ad_height:null,google_ui_version:null,google_tl:null,google_font_face:null,google_font_size:null,google_tfs:null,google_color_link:null,google_color_text:null,google_color_bg:null,google_color_url:null},_createHtml:{container:function(sId){return'<div id="'+sId+'"></div>';},title:null,flash:null,image:null,html:null,text:null},_sContainerId:'googleAdsense',_ads:null,_info:null,_iDisplayNumber:0,_iBlocNumber:0,execute:function(aParams){$.extend(true,this._params,aParams);if(this._iBlocNumber==0){document.write('<script type="text/javascript">var google_adnum = 0;</script>');document.write('<script type="text/javascript">//<![CDATA[\n'
+'function google_ad_request_done(google_ads) {\n'
+'  jQuery(document).ready(function() { $.la.promo.google.adsense.display(google_ads, google_info); });\n'
+'}\n'
+'//]]></script>');}
document.write('<script type="text/javascript">\n'
+'google_ad_output = "'+this._params.google_ad_output+'";\n'
+'google_ad_type = "'+this._params.google_ad_type+'";\n'
+'google_encoding = "'+this._params.google_encoding+'";\n'
+'google_feedback = "'+this._params.google_feedback+'";\n'
+'google_language = "'+this._params.google_language+'";\n'
+'google_skip = '+(this._iBlocNumber*this._params.google_max_num_ads)+';\n'
+'\n'
+'google_ad_client = "'+this._params.google_ad_client+'";\n'
+'google_ad_channel = "'+this._params.google_ad_channel+'";\n'
+'google_max_num_ads = "'+this._params.google_max_num_ads+'";\n'
+'google_adtest = "'+this._params.google_adtest+'";\n'
+(this._params.google_analytics_domain_name!=null?'google_analytics_domain_name = "'+this._params.google_analytics_domain_name+'";\n':'')
+(this._params.google_ad_width!=null?'google_ad_width ="'+this._params.google_ad_width+'";\n':'')
+(this._params.google_ad_height!=null?'google_ad_height ="'+this._params.google_ad_height+'";\n':'')
+(this._params.google_ui_version!=null?'google_ui_version ="'+this._params.google_ui_version+'";\n':'')
+(this._params.google_tl!=null?'google_tl ="'+this._params.google_tl+'";\n':'')
+(this._params.google_font_face!=null?'google_font_face ="'+this._params.google_font_face+'";\n':'')
+(this._params.google_font_size!=null?'google_font_size ="'+this._params.google_font_size+'";\n':'')
+(this._params.google_tfs!=null?'google_tfs ="'+this._params.google_tfs+'";\n':'')
+(this._params.google_color_link!=null?'google_color_link ="'+this._params.google_color_link+'";\n':'')
+(this._params.google_color_text!=null?'google_color_text ="'+this._params.google_color_text+'";\n':'')
+(this._params.google_color_bg!=null?'google_color_bg ="'+this._params.google_color_bg+'";\n':'')
+(this._params.google_color_url!=null?'google_color_url ="'+this._params.google_color_url+'";\n':'')
+'</script>');document.write('<script type="text/javascript" src="'+this._scriptUrl+'?iNumber='+this._iBlocNumber+'"></script>');document.write(this._createHtml.container(this._sContainerId+this._iBlocNumber));this._iBlocNumber++;},display:function(google_ads,google_info){this._ads=google_ads;this._info=google_info;if(this._ads.length==0){$("div#"+this._sContainerId+(this._iBlocNumber-1)).css("display","none");return;}
var s='';if(this._createHtml.title!=null)s+=this._createHtml.title(this);switch(this._ads[0].type){case'flash':if(this._createHtml.flash!=null)s+=this._createHtml.flash(this);break;case'image':if(this._createHtml.image!=null)s+=this._createHtml.image(this);break;case'html':if(this._createHtml.html!=null)s+=this._createHtml.html(this);break;case'text':if(this._createHtml.text!=null)s+=this._createHtml.text(this);break;}
if(this._ads[0].bidtype=="CPC"){google_adnum=google_adnum+this._ads.length;}
$('#'+this._sContainerId+this._iDisplayNumber).html(s);this._iDisplayNumber++;},nbGoogleAds:function(){var nbGoogleAds=0;var aGoogleAdsUrl=['http://googleads.g.doubleclick.net/aclk'];try{for(var i=0;i<aGoogleAdsUrl.length;i++){nbGoogleAds+=($('a[href^="'+aGoogleAdsUrl[i]+'"]').length)/2;}}
catch(e){nbGoogleAds=-1;}
return nbGoogleAds;}},adsenseForSearch:{scriptUrl:'http://www.google.com/adsense/search/ads.js',pageOptions:{pubId:'',query:'',channel:'',hl:''},adblock1:{container:null,number:'3',lines:'2',fontFamily:'verdana',fontSizeTitle:'16px',fontSizeDomainLink:'12px',colorTitleLink:'#FF725F',colorText:'#594945',colorDomainLink:'#FF725F'},execute:function(adblock1,pageOptions){$.extend(true,this.pageOptions,pageOptions);$.extend(true,this.adblock1,adblock1);if(this.adblock1.container!=null)
{document.write('<script type="text/javascript" src="'+this.scriptUrl+'"></script>'
+'<script type="text/javascript" charset="utf-8">\n'
+'new google.ads.search.Ads($.la.promo.google.adsenseForSearch.pageOptions, $.la.promo.google.adsenseForSearch.adblock1);\n'
+'</script>');}}}},pub_iframe:{initialWidth:0,initialHeight:0,refresh:42,iFrameSelector:'#iframe_pub_droite',iFrameContainerSelector:'#pub_a2d_pave',eltSupSelectors:new Array('#pmExpandContainer','#pmExpandContainer6178_1','#wbo_root_129','pmExpandContainer9118_1'),sPosition:'absolute',sTop:'0',sRight:'0',isVisible:function(elt){if(elt.css('display')=='none'){return false;}
else if(elt.css('visibility')=='hidden'){return false;}
else if(elt.css('visibility')=='visible'){return true;}
else{var parent=elt.parent();if(typeof parent=='object'&&parent.get(0).nodeName.toLowerCase()!='body'){return top.jQuery.la.promo.pub_iframe.isVisible(parent);}}
return true;},calcIframeSize:function(){var width=0;var height=0;var changed=false;if(window.top.jQuery(window.top.jQuery.la.promo.pub_iframe.iFrameSelector).length>0&&window.top.jQuery(window.top.jQuery.la.promo.pub_iframe.iFrameSelector).get(0).contentDocument.body!=null){for(var i=0;i<top.jQuery.la.promo.pub_iframe.eltSupSelectors.length;i++){if(!changed){top.jQuery(top.jQuery.la.promo.pub_iframe.eltSupSelectors[i],top.jQuery(top.jQuery.la.promo.pub_iframe.iFrameSelector).get(0).contentDocument).each(function(){width=Math.max(width,parseInt(top.jQuery(this).attr('width')));height=Math.max(height,parseInt(top.jQuery(this).attr('height')));changed=true;});}}
if(!changed){top.jQuery('object',top.jQuery(top.jQuery.la.promo.pub_iframe.iFrameSelector).get(0).contentDocument).each(function(){if(top.jQuery.la.promo.pub_iframe.isVisible(top.jQuery(this))){width=Math.max(width,parseInt(top.jQuery(this).attr('width')));height=Math.max(height,parseInt(top.jQuery(this).attr('height')));changed=true;}});}
if(!changed){top.jQuery('embed',top.jQuery(top.jQuery.la.promo.pub_iframe.iFrameSelector).get(0).contentDocument).each(function(){if(top.jQuery.la.promo.pub_iframe.isVisible(top.jQuery(this))){width=Math.max(width,parseInt(top.jQuery(this).attr('width')));height=Math.max(height,parseInt(top.jQuery(this).attr('height')));changed=true;}});}
if(!changed){top.jQuery('img',top.jQuery(top.jQuery.la.promo.pub_iframe.iFrameSelector).get(0).contentDocument).each(function(){var w=this.width;var h=this.height;width=Math.max(width,w);height=Math.max(height,h);changed=true;});}
if(!changed){top.jQuery('iframe',top.jQuery(top.jQuery.la.promo.pub_iframe.iFrameSelector).get(0).contentDocument).each(function(){var w=this.width;var h=this.height;width=Math.max(width,w);height=Math.max(height,h);changed=true;});}
if(width!=top.jQuery.la.promo.pub_iframe.initialWidth||height!=top.jQuery.la.promo.pub_iframe.initialHeight){top.jQuery.la.promo.pub_iframe.initialWidth=width;top.jQuery.la.promo.pub_iframe.initialHeight=height;top.jQuery(top.jQuery.la.promo.pub_iframe.iFrameSelector).attr('width',width);top.jQuery(top.jQuery.la.promo.pub_iframe.iFrameSelector).attr('height',height);top.jQuery(top.jQuery.la.promo.pub_iframe.iFrameSelector).attr('allowtransparency','true');if(top.jQuery.la.promo.pub_iframe.sPosition!='')
top.jQuery(top.jQuery.la.promo.pub_iframe.iFrameSelector).css('position',top.jQuery.la.promo.pub_iframe.sPosition);if(top.jQuery.la.promo.pub_iframe.sTop!='')
top.jQuery(top.jQuery.la.promo.pub_iframe.iFrameSelector).css('top',top.jQuery.la.promo.pub_iframe.sTop);if(top.jQuery.la.promo.pub_iframe.sRight!='')
top.jQuery(top.jQuery.la.promo.pub_iframe.iFrameSelector).css('right',top.jQuery.la.promo.pub_iframe.sRight);}
top.jQuery(top.jQuery.la.promo.pub_iframe.iFrameContainerSelector).css('position','relative');top.jQuery(top.jQuery.la.promo.pub_iframe.iFrameContainerSelector).css('height',height+'px');}
window.setTimeout(top.jQuery.la.promo.pub_iframe.calcIframeSize,top.jQuery.la.promo.pub_iframe.refresh);}}}});})(jQuery);jQuery.fn.adRegister=jQuery.la.promo._adRegister;jQuery.fn._adProcess=jQuery.la.promo._adProcess;jQuery.fn.flashAnimate=jQuery.la.promo.flashAnimate;

(function($){$.la=$.la||{};$.extend(true,$.la,{modules:{la:{modules:{game:{active:true}}}},game:{verifchek:function(checkBoxName,objId,message)
{if(typeof message==='undefined'){message='Il faut selectionner une reponse avant de continuer !';}
var valid=0;$("input[name='"+checkBoxName+"']").each(function(i){if($(this).attr('checked'))
{valid=1;}});if(valid==0)
{alert(message);}
else
{$('#form_question_'+objId).submit();}},verifOpenQuestion:function(id,objId,message){if(typeof message==='undefined'){message='Il faut saisir un texte !';}
var i=0;var valid=0;if($("#"+id).val()!=='')
{valid=1;}
if(valid==0){alert(message);}
else{$('#form_question_'+objId).submit();}}}});})(jQuery);

(function($){"use strict";$.la=$.la||{};$.extend(true,$.la,{modules:{la:{modules:{w:{active:true}}}},w:{go:function(url){var
newWindow=parseInt(url.charAt(0),10),tmp=this.decrypt(url);switch(newWindow){case 3:parent.document.location.href=tmp;break;case 2:window.top.document.location.href=tmp;break;case 1:window.open(tmp);break;case 0:document.location.href=tmp;if(document.all){window.event.returnValue=false;}
break;default:document.location.href=tmp;if(document.all){window.event.returnValue=false;}
break;}},decrypt:function(url){var
tmp='',c='',i;url=url.substring(1,url.length).replace(/&lt;/g,'<').replace(/&gt;/g,'>');for(i=0;i<url.length;i+=1){c=url.charCodeAt(i);tmp=tmp.concat(String.fromCharCode(c-14));}
return tmp;},reverse:function(sSelector){if(typeof sSelector!=='string'||''===sSelector){sSelector='body';}
$(sSelector+' ins').each(function(){try{var
rel=$('var',$(this)).attr('class').replace('&lt;','<').replace('&gt;','>'),url=$.la.w.decrypt(rel),aHtml=decodeURIComponent($(this).html()),link,a;switch(parseInt(rel.charAt(0),10)){case 3:link='<a href="'+url+'" onclick="parent.document.open(\''+url+'\'); return false;">'+aHtml+'<'+'/a>';break;case 2:link='<a href="'+url+'" onclick="top.document.location.href=\''+url+'\'; return false;">'+aHtml+'<'+'/a>';break;case 1:link='<a href="'+url+'" onclick="window.open(\''+url+'\'); return false;">'+aHtml+'<'+'/a>';break;case 0:link='<a href="'+url+'">'+aHtml+'<'+'/a>';break;default:link='<a href="'+url+'">'+aHtml+'<'+'/a>';break;}
a=$(link);if(''!==$(this).attr('class')){a.attr('class',$(this).attr('class'));}
if(''!==$(this).attr('id')){a.attr('id',$(this).attr('id'));}
if(''!==$(this).attr('style')){a.attr('style',$(this).attr('style'));}
if(''!==$(this).attr('title')){a.attr('title',$(this).attr('title'));}
$('var',a).remove();$(this).before(a).remove();}catch(err){}});},B64:{reverse:function(){var aHtml,strHtml;$('del').each(function(){try{aHtml=$(this).html();strHtml=$.la.w.B64.decode(aHtml);$(this).before(strHtml).remove();}catch(err){}});},_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(input){var output="",chr1,chr2,chr3,enc1,enc2,enc3,enc4,i=0;input=$.la.w.B64._utf8_encode(input);while(i<input.length){chr1=input.charCodeAt(i+=1);chr2=input.charCodeAt(i+=1);chr3=input.charCodeAt(i+=1);enc1=chr1>>2;enc2=((chr1&3)<<4)|(chr2>>4);enc3=((chr2&15)<<2)|(chr3>>6);enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64;}else if(isNaN(chr3)){enc4=64;}
output=output+
$.la.w.B64._keyStr.charAt(enc1)+$.la.w.B64._keyStr.charAt(enc2)+
$.la.w.B64._keyStr.charAt(enc3)+$.la.w.B64._keyStr.charAt(enc4);}
return output;},decode:function(input){var output="",chr1,chr2,chr3,enc1,enc2,enc3,enc4,i=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(i<input.length){enc1=$.la.w.B64._keyStr.indexOf(input.charAt(i+=1));enc2=$.la.w.B64._keyStr.indexOf(input.charAt(i+=1));enc3=$.la.w.B64._keyStr.indexOf(input.charAt(i+=1));enc4=$.la.w.B64._keyStr.indexOf(input.charAt(i+=1));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;output=output+String.fromCharCode(chr1);if(enc3!==64){output=output+String.fromCharCode(chr2);}
if(enc4!==64){output=output+String.fromCharCode(chr3);}}
output=$.la.w.B64._utf8_decode(output);return output;},_utf8_encode:function(string){string=string.replace(/\r\n/g,"\n");var
utftext="",n,c;for(n=0;n<string.length;n+=1){c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c);}else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128);}else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128);}}
return utftext;},_utf8_decode:function(utftext){var string="",i=0,c=0,c2=0,c3;while(i<utftext.length){c=utftext.charCodeAt(i);if(c<128){string+=String.fromCharCode(c);i+=1;}else if((c>191)&&(c<224)){c2=utftext.charCodeAt(i+1);string+=String.fromCharCode(((c&31)<<6)|(c2&63));i+=2;}else{c2=utftext.charCodeAt(i+1);c3=utftext.charCodeAt(i+2);string+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i+=3;}}
return string;}},ajaxblock:function(siteaccess,key,async,timestamp){if('undefined'===typeof siteaccess){throw new Error('siteaccess should be defined');}
if('undefined'===typeof key){throw new Error('key should be defined');}
if('undefined'===typeof async){async=true;}
var
getdata=true,data,canStore='undefined'!==typeof window.localStorage&&'object'===typeof window.JSON,storageKey='ajaxblock_'.concat(key),indexStorageKey='ajaxblock_index',indexBlock={},execScriptFromElement=function(data){var
head=document.getElementsByTagName("head")[0],script=document.createElement('script');script.setAttribute('type','text/javascript');if(data.getAttribute('src')){script.setAttribute('src',data.getAttribute('src'));script.src=data.getAttribute('src');}else{try{script.appendChild(document.createTextNode(data.innerHTML));}catch(e){script.text=data.innerHTML;}}
head.appendChild(script);},execScriptInHtml=function(data){var
i,children,scripts='',cleaned,code=document.createElement('code');code.innerHTML=data;children=code.getElementsByTagName('script');for(i=0;i<children.length;i+=1){if(null!==children[i]&&('script'===children[i].nodeName||'SCRIPT'===children[i].nodeName)){execScriptFromElement(children[i]);}else if(children[i].innerHTML){execScriptInHtml(children[i].innerHTML);}}
if(!children.length&&data.length){code=document.createElement('code');cleaned=data.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(a,b){scripts+=b+'\n';return'';});code.innerHTML=scripts;execScriptFromElement(code);}},inject=function(key,data){var elt=document.getElementById('ajaxblock_'.concat(key));if(null!==elt&&'undefined'!==elt){try{elt.insertAdjacentHTML('afterend',data);}catch(e){}
$(elt).remove();execScriptInHtml(data);}};if(canStore){indexBlock=localStorage.getItem(indexStorageKey);if(null===indexBlock){indexBlock={};}else{indexBlock=JSON.parse(indexBlock);if(indexBlock.hasOwnProperty(key)){if(timestamp===indexBlock[key]&&null!==localStorage.getItem(storageKey)){getdata=false;}}}}
if(getdata){$.ajax({"url":'/var/si-blocks/ajax-blocks/'.concat(siteaccess,'/',key,'.html?t=',timestamp),"async":async,"dataType":'html',"success":function(responseText,textStatus,xhr){if(canStore){localStorage.setItem(storageKey,responseText);indexBlock[key]=timestamp;localStorage.setItem(indexStorageKey,JSON.stringify(indexBlock));}
inject(key,responseText);}});}else{data=localStorage.getItem(storageKey);inject(key,data);}}}});}(jQuery));

try{(function($){$.extend(true,$.la,{modules:{la:{modules:{console:{active:true,modules:{seo:{active:true}}}}}},console:{_theme:'sunny',_startTime:0,_wConsole:300,_start:(function(){var date=new Date();this._startTime=date.getTime();})(jQuery),_type:{},cFormat:function(label,value,comment){var ret='';if(typeof value=='undefined')
{value='<span style="color:red">Non d&eacute;fini</span>';}
ret+='<b>'+label+'&nbsp;:</b> '+value;if(typeof comment!='undefined')
{ret+=' ('+comment+')';}
ret='<div style="clear:both;margin-bottom:2px;">'+ret+'</div>';return ret;},activate:function(bool)
{if(bool)
{$.la.cookie.set('la_console',1);$.la.console._activeConsole();}
else
{$.la.cookie.clear('la_console');$('#tracking_console').remove();}},_isUiLoaded:function()
{return(typeof $.ui!='undefined');},_activeConsole:function()
{if($.la.utils.httpGet('la_console')=='1'||document.location.hash=='#la_console=1')
{$.la.console._activate('',1);}
else if($.la.utils.httpGet('la_console')=='0'||document.location.hash=='#la_console=0')
{$.la.console._activate('',0);return;}
if($.la.cookie.get('la_console')=='1')
{try
{if(this._isUiLoaded())
{$.la.console._buildConsole();}
else
{$.getScript('http://video.premiere.fr/javascript/jquery/jquery-ui-1.7.2/ui/minified/jquery-ui.min.js',function(){$.la.console._buildConsole();});}}
catch(e){}}},_buildConsole:function()
{if($.la.cookie.get('la_console_settings_theme'))
{$.la.console._theme=$.la.cookie.get('la_console_settings_theme');}
$('head').append('<link type="text/css" href="http://video.premiere.fr/javascript/jquery/jquery-ui-1.7.2/themes/'+$.la.console._theme+'/ui.all.css" rel="stylesheet"  class="ui-theme" />');$('#tracking_console').remove();var nbTabs=0;for(var i in $.la.modules.la.modules.console.modules)
{if($.la.modules.la.modules.console.modules[i].active==true)
{$.la.console._type[i]=$.la.console[i].label;nbTabs++;}}
$.la.console._type['settings']='<span class="ui-icon ui-icon-wrench"></span>';$.la.console._wConsole=70*(nbTabs+1);var content='<div id="tracking_console" style="text-align:left;overflow:hidden;font-size:10px;font-family:Arial,sans serif;filter:alpha(opacity=70);opacity:0.8;width:'+$.la.console._wConsole+'px;height:auto;z-index:1000;padding:0;background:transparent;border:none;position:absolute;top:5px;left:5px;font-size:11px;color:#000000;display:none;">'+'<h1 class="ui-widget-content" title="Masquer" style="width:98%;display:block;cursor:pointer;font-size:12px;margin:0;height:16px;position:relative;top:19px;left:4px;border:none;" onclick="jQuery.la.console.consoleShowHide();">&#160;Tracking Console&#160;<a  class="ui-widget-content" title="Fermer" href="javascript:void(0);" onclick="jQuery.la.console.activate(false)" style="border:none;">[X <small>Fermer</small>]</a></h1></div>';$('body').append(content);var tabs=$.la.console.initTabs();$('#tracking_console').append(tabs);try
{$("#tabs").tabs({event:'mouseover',selected:$.la.cookie.get('la_console_tab_selected')});$('#tabs').bind('tabsselect',function(event,ui){$.la.cookie.set('la_console_tab_selected',ui.index);});$('#tabs li a').css('cursor','pointer');if($.la.cookie.get('la_console_left'))
{$('#tracking_console').css('top',$.la.cookie.get('la_console_top'));$('#tracking_console').css('left',$.la.cookie.get('la_console_left'));}
if($.la.cookie.get('la_console_width'))
{$('#tracking_console').css('width',$.la.cookie.get('la_console_width'));}
$('#tracking_console').css('opacity',$.la.cookie.get('la_console_opacity'));$.la.console.consoleShowHide();var d=new Date();d.setTime(d.getTime()+86400000);$('#tracking_console').draggable({stop:function(){$.la.cookie.set('la_console_top',$('#tracking_console').css('top'),d,document.location.hostname);$.la.cookie.set('la_console_left',$('#tracking_console').css('left'),d,document.location.hostname);}});$('#tracking_console').resizable({stop:function(){$('#tracking_console').css('height','auto');$.la.cookie.set('la_console_width',$('#tracking_console').css('width'),d,document.location.hostname);},minWidth:$.la.console._wConsole});$('#tracking_console').css({cursor:'move'});$('#tracking_console h1').css({cursor:'pointer'});$.la.console.display();$(document).ready(function(){$('#tracking_console').show();});}
catch(e)
{$.la.utils.debug(e.message);}},initTabs:function(){var tabs='<div id="tabs" style="text-align:left;padding-top:18px;" class="ui-tabs ui-widget ui-widget-content ui-corner-all"><ul>';for(var i in $.la.console._type){tabs+='<li><a href="#tabs-'+i+'">'+$.la.console._type[i]+'</a></li>';}
tabs+='</ul>';for(i in $.la.console._type){tabs+='<div id="tabs-'+i+'"></div>';}
tabs+='</div>';return tabs;},display:function(){for(var i in $.la.console._type)
{try
{$.la.console._activate(i,true);}
catch(e)
{$.la.utils.debug(e.message);};}},_displayModules:function(module){try
{var c='';for(var i in $.la.modules.la.modules.console.modules[module].modules)
{if(!$.la.modules.la.modules.console.modules[module].modules[i].active)
{continue;}
c+='<h3><u>'+$.la.console[module][i].label+'</u></h3>';c+=$.la.console[module][i].console()+'<br />';}
return c;}
catch(e)
{return $.la.console.cFormat('ERROR '+module.label,e.message);}},_addToConsole:function(type,content){$('#tracking_console #tabs-'+type).html(content);},_activate:function(type,active){var d=new Date();d.setTime(d.getTime()+86400000);if(type==''&&!active)
{$.la.cookie.clear('la_console'+(type!=''?'_':'')+type);}
else
{$.la.cookie.set('la_console'+(type!=''?'_':'')+type,1,d);$('#tracking_console_'+type).remove();if(type!='')
{$.la.console._addToConsole(type,$.la.console[type].console());}}},settings:{label:'Settings',console:function(){var settings='Thème : ';settings+='';settings+='<select onchange="jQuery.la.console.changeTheme(this.value);" name="consoleTheme" id="_consoleTheme"><option>Choisir un Thème</option>';var themes=['base','sunny','vader','trontastic','swanky-purse','start','south-street','smoothness','redmond','pepper-grinder','overcast','mint-choc','le-frog','humanity','hot-sneaks','flick','excite-bike','eggplant','dot-luv','dark-hive','cupertino','blitzer','black-tie'];var storedTheme=$.la.cookie.get('la_console_settings_theme');for(var i in themes)
{settings+='<option value="'+themes[i]+'" '+((themes[i]==storedTheme)?' selected="selected"':'')+'>'+themes[i]+'</option>';}
settings+='</select>';return settings;}},changeTheme:function(theme){$.la.console._theme=theme;var d=new Date();d.setTime(d.getTime()+86400000);$.la.cookie.set('la_console_settings_theme',theme,d,document.location.hostname);var cssLink='<link href="http://video.premiere.fr/javascript/jquery/jquery-ui-1.7.2/themes/'+$.la.console._theme+'/ui.all.css?v='+Math.random()+'" type="text/css" rel="Stylesheet" class="ui-theme" />';$("head").append(cssLink);if($("link.ui-theme").size()>3)
{$("link.ui-theme:first").remove();}},consoleShowHide:function(){var d=new Date();d.setTime(d.getTime()+86400000);$.la.cookie.set('la_console_opacity',$('#tracking_console').css('opacity'),d,document.location.hostname);if($('#tracking_console').css('opacity')=='0.9')
{$('#tracking_console').css({'opacity':'0.3','filter':'alpha(opacity=30)'});$('#tabs').hide();$('.ui-resizable-handle').hide();$('#tracking_console').css('height','34px');}
else
{$('#tracking_console').css({'opacity':'0.9','filter':'alpha(opacity=70)'});$('#tabs').show();$('.ui-resizable-handle').show();$('#tracking_console').css('height','auto');}},seo:{console:function(){var title=$('head title').html();if(title=='')
{title=undefined;}
var keywords=$('head meta[name="keywords"]').attr('content');if(keywords=='')
{keywords=undefined;}
var description=$('head meta[name="description"]').attr('content');if(description=='')
{description=undefined;}
var robots=$('head meta[name="robots"]').attr('content');if(robots=='')
{robots=undefined;}
var canonical=$('link [rel="canonical"]').attr('href');if(canonical=='')
{canonical=undefined;}
var y_key=$('head meta[name="y_key"]').attr('content');if(y_key==''){y_key=undefined;}
var google_site_verification='';$('head meta[name="google-site-verification"]').each(function(i){google_site_verification+=i+': '+$(this).attr('content')+'<br />';});if(google_site_verification=='')
{google_site_verification=undefined;}
var google_site_verifyv1=$('head meta[name="verify-v1"]').attr('content');if(google_site_verifyv1=='')
{google_site_verifyv1=undefined;}
if(typeof google_site_verification!='undefined'&&typeof google_site_verifyv1!='undefined')
{google_site_verifyv1='<span style="color:red">'+google_site_verifyv1+'</span>';}
else if(typeof google_site_verifyv1!='undefined'&&typeof google_site_verification=='undefined')
{google_site_verification='';}
else if(typeof google_site_verifyv1=='undefined'&&typeof google_site_verification!='undefined')
{google_site_verifyv1='';}
var msvalidate_01=$('head meta[name="msvalidate.01"]').attr('content');if(msvalidate_01=='')
{msvalidate_01=undefined;}
var MSSmartTagsPreventParsing=$('head meta[name="MSSmartTagsPreventParsing"]').attr('content');if(MSSmartTagsPreventParsing=='')
{MSSmartTagsPreventParsing=undefined;}
title=$.la.console.cFormat('title'+(typeof title!='undefined'?(title.length>60?' <span style="color:red">['+title.length+'c]</span>':' ['+title.length+'c]'):''),title);description=$.la.console.cFormat('description'+(typeof description!='undefined'?(description.length>160?' <span style="color:red">['+description.length+'c]</span>':' ['+description.length+'c]'):''),description);if(keywords!=undefined)
{var nbK=keywords.split(',').length;}
keywords=$.la.console.cFormat('keywords ..'+(typeof keywords!='undefined'?(nbK>20?' <span style="color:red">['+nbK+']</span>':' ['+nbK+']'):''),keywords);robots=$.la.console.cFormat('robots',robots);if(canonical!=undefined)
{canonical=$.la.console.cFormat('canonical',canonical);}
else
{canonical='';}
y_key=$.la.console.cFormat('y_key',y_key);if(google_site_verification)
{google_site_verification=$.la.console.cFormat('google-site-verification',google_site_verification);}
if(google_site_verifyv1)
{google_site_verifyv1=$.la.console.cFormat('google-verify-v1-verification',google_site_verifyv1);}
msvalidate_01=$.la.console.cFormat('msvalidate_01',msvalidate_01);MSSmartTagsPreventParsing=$.la.console.cFormat('MSSmartTagsPreventParsing',MSSmartTagsPreventParsing);return title+'<br />'
+description+'<br />'
+keywords+'<br />'
+canonical
+robots
+y_key
+google_site_verification
+google_site_verifyv1
+msvalidate_01
+MSSmartTagsPreventParsing;}}}});})(jQuery);$(document).ready(function(){if((jQuery.la.utils.httpGet('la_console')=='1')||(jQuery.la.cookie.get('la_console')=='1')||(document.location.hash=='#la_console=1'))
{jQuery.la.console._activeConsole();}});}
catch(e){}

try{(function($){$.extend(true,$.la,{modules:{la:{modules:{console:{modules:{akamai:{active:true}}}}}},console:{akamai:{label:'Static',console:function(){var c='';var body=$('body').html();var stringOk=(body.indexOf('<!-- lagardere -->')!=-1);c+=$.la.console.cFormat('Chaîne Lagardère',(stringOk?'oui':undefined));var reg=new RegExp("<!-- Generated: ([0-9]{4})-([0-9]{2})-([0-9]{2}) ([0-9]{2}:[0-9]{2}:[0-9]{2})","g");var m=reg.exec(body);if(m==null){c+='<b style="color:red">PAS DE CACHE STATIQUE</b>'+'<br />';}
else{c+='STATIC g&eacute;n&eacute;r&eacute; le <br /><b>'+m[3]+"/"+m[2]+"/"+m[1]+" "+m[4]+'</b><br />';}
c+='<br />';$('link[rel="stylesheet"]').each(function(){var href=$(this).attr('href');var reg=new RegExp("v=([0-9]+)","g");var m=reg.exec(href);if(m!=null){var last=href.split('/');last=last[last.length-1];var pos=last.indexOf('?v=');last=last.substr(0,pos);var date=new Date();date.setTime(parseInt(m[1]*1000));c+=$.la.console.cFormat('Css '+last,'<br />'+date.toLocaleString());}});$('script',$('head')).each(function(){var href=$(this).attr('src');var reg=new RegExp("v=([0-9]+)","g");var m=reg.exec(href);if(m!=null){var last=href.split('/');last=last[last.length-1];var pos=last.indexOf('?v=');last=last.substr(0,pos);var date=new Date();date.setTime(parseInt(m[1]*1000));c+=$.la.console.cFormat('Js '+last,'<br />'+date.toLocaleString());}});return c;}}}});})(jQuery);}
catch(e){}

try{(function($){$.extend(true,$.la,{modules:{la:{modules:{console:{modules:{promo:{active:true}}}}}},console:{promo:{label:'Promo',console:function(){return $.la.console._displayModules('promo');}}}});})(jQuery);}
catch(e){}

try{(function($){$.extend(true,$.la,{modules:{la:{modules:{console:{modules:{promo:{modules:{a2d:{active:true}}}}}}}},console:{promo:{a2d:{label:"a2d",console:function(){var c='';for(var i=0;i<$.la.promo._adListForConsole.length;i++){c+=$.la.console.cFormat($.la.promo._adListForConsole[i]['zone'],$.la.promo._adListForConsole[i]['id'],"Affichage décalé : "+$.la.promo._adListForConsole[i]['defer']);}
var hasTest=0;for(i in $.la.promo._testA2d){hasTest++;}
if(hasTest){c+='<select onchange="$.la.promo.testA2d(this.value);" name="testA2d" id="_testA2d"><option>Choisir un test</option>';for(i in $.la.promo._testA2d){c+='<option value="'+i+'">&#160;&gt;&#160;'+i+'</option>';}
c+='</select>';if(document.location.href.indexOf('testA2d')!=-1){c+='&#160;<a href="javascript:void(0);" onclick="jQuery.la.promo.removeTestA2d();">[X Supprimer le test]</a>';}}
return c;}}}}});})(jQuery);}
catch(e){}

try{(function($){$.extend(true,$.la,{modules:{la:{modules:{console:{modules:{seo:{active:true}}}}}},console:{seo:{label:'Seo',console:function(){var title=$('head title').html();if(title==''){title=undefined;}
var keywords=$('head meta[name="keywords"]').attr('content');if(keywords==''){keywords=undefined;}
var description=$('head meta[name="description"]').attr('content');if(description==''){description=undefined;}
var robots=$('head meta[name="robots"]').attr('content');if(robots==''){robots=undefined;}
var canonical=$('link [rel="canonical"]').attr('href');if(canonical==''){canonical=undefined;}
var y_key=$('head meta[name="y_key"]').attr('content');if(y_key==''){y_key=undefined;}
var google_site_verification='';$('head meta[name="google-site-verification"]').each(function(i){google_site_verification+=i+': '+$(this).attr('content')+'<br />';});if(google_site_verification==''){google_site_verification=undefined;}
var google_site_verifyv1=$('head meta[name="verify-v1"]').attr('content');if(google_site_verifyv1==''){google_site_verifyv1=undefined;}
if(typeof google_site_verification!='undefined'&&typeof google_site_verifyv1!='undefined'){google_site_verifyv1='<span style="color:red">'+google_site_verifyv1+'</span>';}
else if(typeof google_site_verifyv1!='undefined'&&typeof google_site_verification=='undefined'){google_site_verification='';}
else if(typeof google_site_verifyv1=='undefined'&&typeof google_site_verification!='undefined'){google_site_verifyv1='';}
var msvalidate_01=$('head meta[name="msvalidate.01"]').attr('content');if(msvalidate_01==''){msvalidate_01=undefined;}
var MSSmartTagsPreventParsing=$('head meta[name="MSSmartTagsPreventParsing"]').attr('content');if(MSSmartTagsPreventParsing==''){MSSmartTagsPreventParsing=undefined;}
title=$.la.console.cFormat('title'+(typeof title!='undefined'?(title.length>60?' <span style="color:red">['+title.length+'c]</span>':' ['+title.length+'c]'):''),title);description=$.la.console.cFormat('description'+(typeof description!='undefined'?(description.length>160?' <span style="color:red">['+description.length+'c]</span>':' ['+description.length+'c]'):''),description);if(keywords!=undefined){var nbK=keywords.split(',').length;}
keywords=$.la.console.cFormat('keywords'+(typeof keywords!='undefined'?(nbK>20?' <span style="color:red">['+nbK+']</span>':' ['+nbK+']'):''),keywords);robots=$.la.console.cFormat('robots',robots);if(canonical!=undefined){canonical=$.la.console.cFormat('canonical',canonical);}
else{canonical='';}
y_key=$.la.console.cFormat('y_key',y_key);google_site_verification=$.la.console.cFormat('google-site-verification',google_site_verification);google_site_verifyv1=$.la.console.cFormat('google-verify-v1-verification',google_site_verifyv1);msvalidate_01=$.la.console.cFormat('msvalidate_01',msvalidate_01);MSSmartTagsPreventParsing=$.la.console.cFormat('MSSmartTagsPreventParsing',MSSmartTagsPreventParsing);var c=title+'<br />'
+description+'<br />'
+keywords+'<br />'
+canonical
+robots
+y_key
+google_site_verification
+google_site_verifyv1
+msvalidate_01
+MSSmartTagsPreventParsing;var subModules=$.la.console._displayModules('seo');return c+(subModules?'<br />'+subModules:'');}}}});})(jQuery);}
catch(e){}

try{(function($){$.extend(true,$.la,{modules:{la:{modules:{console:{modules:{seo:{modules:{links:{active:true}}}}}}}},console:{seo:{links:{label:'Links',over:function(c){var links=$('a[href='+c+']');if(jQuery.la.console.seo.links.currentLink!==null){jQuery.la.console.seo.links.currentLink.css('border','none');}
jQuery.la.console.seo.links.currentLink=links;jQuery.la.console.seo.links.currentLink.css('border','2px solid red');},noover:function(){if(jQuery.la.console.seo.links.currentLink!==null){jQuery.la.console.seo.links.currentLink.css('border','none');}},currentLink:null,console:function(){var console='';var domains={};var currentPaths={};var paths={};var del=$('div#debug').html();$('div#debug').html('');$('a').each(function(i){var href=$(this).attr('href');var dom='/';if(typeof href!='undefined'){var d=href.split('/');if(d[0]=='http:'){dom=d[2];if(dom==document.location.hostname){if(typeof currentPaths[href]=='undefined'){currentPaths[href]=1;}
else{currentPaths[href]++;}}}
else if(href.indexOf('javascript')===0){dom='javascript:';}
else{if(href.indexOf('#')!==0){paths[href]=true;}}
if(typeof domains[dom]=='undefined'){domains[dom]=1;}
else{domains[dom]++;}}});var select2='<select style="width:200px">';for(var j in domains){if(j=='/'){var select='<select style="width:200px">';for(var k in paths){select+='<option>'+k+'</option>';}
select+='</select>';console+=$.la.console.cFormat('Sans domaine',select);}
else if(j==document.location.hostname){var select='<select id="console_seo_link" style="width:200px" >';for(var k in currentPaths){select+='<option value="'+k+'" onmouseover="">'+currentPaths[k]+' : '+k+'</option>';}
select+='</select><a href="javascript:void(0)" onmousedown="jQuery.la.console.seo.links.over($(\'#console_seo_link\').val())"  onmouseup="jQuery.la.console.seo.links.noover()" >Voir<a>';console+=$.la.console.cFormat('Domaine courant',select);}
else{select2+='<option>'+domains[j]+' : '+j+'</option>';}}
select2+='</select>';console+=$.la.console.cFormat('Autres domaines',select2);$('div#debug').html(del);return console;}}}}});})(jQuery);}
catch(e){}

try{(function($){$.extend(true,$.la,{modules:{la:{modules:{console:{modules:{seo:{modules:{images:{active:true}}}}}}}},console:{seo:{images:{label:'Images',over:function(c){return window.open(c);var links=$('img[src='+c+']');if(jQuery.la.console.seo.links.currentLink!==null){jQuery.la.console.seo.links.currentLink.css('border','none');}
jQuery.la.console.seo.links.currentLink=links;jQuery.la.console.seo.links.currentLink.css('border','2px solid red');},noover:function(){if(jQuery.la.console.seo.links.currentLink!==null){jQuery.la.console.seo.links.currentLink.css('border','none');}},currentLink:null,console:function(){var console='';var domains={};var currentPaths={};var paths={};var del=$('div#debug').html();$('div#debug').html('');$('img').each(function(i){var src=$(this).attr('src');var dom='/';if(typeof src!='undefined'){var d=src.split('/');if(d[0]=='http:'){dom=d[2];if(dom.indexOf('.ladmedia.fr')!==-1){if(typeof currentPaths[src]=='undefined'){currentPaths[src]=1;}
else{currentPaths[src]++;}}}
else{if(src.indexOf('#')!==0){paths[src]=true;}}
if(typeof domains[dom]=='undefined'){domains[dom]=1;}
else{domains[dom]++;}}});var select2='<select id="console_seo_images3" style="width:150px">';for(var j in domains){if(j=='/'){var select='<select id="console_seo_images1"  style="width:150px">';for(var k in paths){select+='<option >'+k+'</option>';}
select+='</select><a href="javascript:jQuery.la.console.seo.images.over($(\'#console_seo_images2\').val());return false;">Ouvrir<a>';console+=$.la.console.cFormat('Sans domaine',select);}
else if(j.indexOf('.ladmedia.fr')!==-1){var select='<select id="console_seo_images2" style="width:150px" >';for(var k in currentPaths){select+='<option value="'+k+'" onmouseover="">'+currentPaths[k]+' : '+k+'</option>';}
select+='</select><a href="javascript:jQuery.la.console.seo.images.over($(\'#console_seo_images2\').val());return false;">Ouvrir<a>';console+=$.la.console.cFormat('Domaine courant',select);}
else{select2+='<option>'+domains[j]+' : '+j+'</option>';}}
select2+='</select>';console+=$.la.console.cFormat('Autres domaines',select2);$('div#debug').html(del);return console;}}}}});})(jQuery);}
catch(e){}

(function($){$.extend(true,$.la,{modules:{la:{modules:{console:{modules:{stats:{active:true}}}}}},console:{stats:{label:'Stats',console:function(){return $.la.console._displayModules('stats');}}}});})(jQuery);

(function($){$.extend(true,$.la,{modules:{la:{modules:{console:{modules:{stats:{modules:{cybermonitor:{active:true}}}}}}}},console:{stats:{cybermonitor:{label:'Cybermonitor',console:function(){try{if($.la.tracking.cybermonitor.ids.CM_SERIAL!=null){var c=$.la.console.cFormat('CM_SERIAL',$.la.tracking.cybermonitor.ids.CM_SERIAL)+
$.la.console.cFormat('CM_CLIENT',$.la.tracking.cybermonitor.ids.CM_CLIENT)+
$.la.console.cFormat('CM_NIVEAU1',$.la.tracking.cybermonitor.ids.CM_NIVEAU1)+
$.la.console.cFormat('CM_NIVEAU2',$.la.tracking.cybermonitor.ids.CM_NIVEAU2)+
$.la.console.cFormat('CM_NIVEAU3',$.la.tracking.cybermonitor.ids.CM_NIVEAU3)+
$.la.console.cFormat('CM_NIVEAU4',$.la.tracking.cybermonitor.ids.CM_NIVEAU4);if($('span#webo_tag_auto')){c+='<br />'+$.la.console.cFormat('TAG_AUTO',$('span#webo_tag_auto').html());}
return c;}else{var t='ml';var st=get_S(t);var ft=FT(t);ft=ft.replace(st,'');var sp=ft.split('?');var cm_client=sp[0].replace('_v','');var cm_niveau1=$.la.utils.getKey('c',sp[1]);var cm_niveau2=$.la.utils.getKey('p',sp[1]);var cm_niveau3=$.la.utils.getKey('l3',sp[1]);var cm_niveau4=$.la.utils.getKey('l4',sp[1]);var cm_serial=$('script[src*="http://prof.estat.com/js/"]').attr('src').replace('http://prof.estat.com/js/','').replace('.js','');var c=$.la.console.cFormat('CM_SERIAL',cm_serial)+
$.la.console.cFormat('CM_CLIENT',cm_client);c+='<br />'+
$.la.console.cFormat('CM_NIVEAU1',cm_niveau1)+
$.la.console.cFormat('CM_NIVEAU2',cm_niveau2)+
$.la.console.cFormat('CM_NIVEAU3',cm_niveau3)+
$.la.console.cFormat('CM_NIVEAU4',cm_niveau4);if($('span#webo_tag_auto')){c+='<br />'+$.la.console.cFormat('TAG_AUTO',$('span#webo_tag_auto').html());}
return c;}}
catch(e){return $.la.console.cFormat('ERROR',e.message);}}}}}});})(jQuery);

(function($){$.extend(true,$.la,{modules:{la:{modules:{console:{modules:{stats:{modules:{ga:{active:true}}}}}}}},console:{stats:{ga:{label:'Google',console:function(){var console='';try{var domain='';try{domain=pageTracker.Ec().c;}
catch(e){domain='<span>erreur :</span> '+e.message;}
return $.la.console.cFormat('UA',pageTracker.s)+$.la.console.cFormat('DOMAIN',domain);}
catch(e){if(typeof _gaq!='undefined'){var body=$('body').html();var regex=new RegExp("_setAccount', '([0-9a-zA-Z\-]+)");var match=regex.exec(body);if(match[1]){console+=$.la.console.cFormat('Account',match[1]);}
regex=new RegExp("_setDomainName', '([0-9a-zA-Z\-\.]+)");match=regex.exec(body);if(match[1]){console+=$.la.console.cFormat('DomainName',match[1]);}
regex=new RegExp("(_trackPageLoadTime)");match=regex.exec(body);if(match[1]){console+=$.la.console.cFormat('trackPageLoadTime','Activé');}
return console;}
else{return $.la.console.cFormat('ERROR',e.message);}}}}}}});})(jQuery);

(function($)
{$.fn.qtip=function(options,blanket)
{var i,id,interfaces,opts,obj,command,config,api;if(typeof options=='string')
{if(typeof $(this).data('qtip')!=='object')
$.fn.qtip.log.error.call(self,1,$.fn.qtip.constants.NO_TOOLTIP_PRESENT,false);if(options=='api')
return $(this).data('qtip').interfaces[$(this).data('qtip').current];else if(options=='interfaces')
return $(this).data('qtip').interfaces;}
else
{if(!options)options={};if(typeof options.content!=='object'||(options.content.jquery&&options.content.length>0))options.content={text:options.content};if(typeof options.content.title!=='object')options.content.title={text:options.content.title};if(typeof options.position!=='object')options.position={corner:options.position};if(typeof options.position.corner!=='object')options.position.corner={target:options.position.corner,tooltip:options.position.corner};if(typeof options.show!=='object')options.show={when:options.show};if(typeof options.show.when!=='object')options.show.when={event:options.show.when};if(typeof options.show.effect!=='object')options.show.effect={type:options.show.effect};if(typeof options.hide!=='object')options.hide={when:options.hide};if(typeof options.hide.when!=='object')options.hide.when={event:options.hide.when};if(typeof options.hide.effect!=='object')options.hide.effect={type:options.hide.effect};if(typeof options.style!=='object')options.style={name:options.style};options.style=sanitizeStyle(options.style);opts=$.extend(true,{},$.fn.qtip.defaults,options);opts.style=buildStyle.call({options:opts},opts.style);opts.user=$.extend(true,{},options);};return $(this).each(function()
{if(typeof options=='string')
{command=options.toLowerCase();interfaces=$(this).qtip('interfaces');if(typeof interfaces=='object')
{if(blanket===true&&command=='destroy')
while(interfaces.length>0)interfaces[interfaces.length-1].destroy();else
{if(blanket!==true)interfaces=[$(this).qtip('api')];for(i=0;i<interfaces.length;i++)
{if(command=='destroy')interfaces[i].destroy();else if(interfaces[i].status.rendered===true)
{if(command=='show')interfaces[i].show();else if(command=='hide')interfaces[i].hide();else if(command=='focus')interfaces[i].focus();else if(command=='disable')interfaces[i].disable(true);else if(command=='enable')interfaces[i].disable(false);};};};};}
else
{config=$.extend(true,{},opts);config.hide.effect.length=opts.hide.effect.length;config.show.effect.length=opts.show.effect.length;if(config.position.container===false)config.position.container=$(document.body);if(config.position.target===false)config.position.target=$(this);if(config.show.when.target===false)config.show.when.target=$(this);if(config.hide.when.target===false)config.hide.when.target=$(this);id=$.fn.qtip.interfaces.length;for(i=0;i<id;i++)
{if(typeof $.fn.qtip.interfaces[i]=='undefined'){id=i;break;};};obj=new qTip($(this),config,id);$.fn.qtip.interfaces[id]=obj;if(typeof $(this).data('qtip')=='object')
{if(typeof $(this).attr('qtip')==='undefined')
$(this).data('qtip').current=$(this).data('qtip').interfaces.length;$(this).data('qtip').interfaces.push(obj);}
else $(this).data('qtip',{current:0,interfaces:[obj]});if(config.content.prerender===false&&config.show.when.event!==false&&config.show.ready!==true)
{config.show.when.target.bind(config.show.when.event+'.qtip-'+id+'-create',{qtip:id},function(event)
{api=$.fn.qtip.interfaces[event.data.qtip];api.options.show.when.target.unbind(api.options.show.when.event+'.qtip-'+event.data.qtip+'-create');api.cache.mouse={x:event.pageX,y:event.pageY};construct.call(api);api.options.show.when.target.trigger(api.options.show.when.event);});}
else
{obj.cache.mouse={x:config.show.when.target.offset().left,y:config.show.when.target.offset().top};construct.call(obj);}};});};function qTip(target,options,id)
{var self=this;self.id=id;self.options=options;self.status={animated:false,rendered:false,disabled:false,focused:false};self.elements={target:target.addClass(self.options.style.classes.target),tooltip:null,wrapper:null,content:null,contentWrapper:null,title:null,button:null,tip:null,bgiframe:null};self.cache={mouse:{},position:{},toggle:0};self.timers={};$.extend(self,self.options.api,{show:function(event)
{var returned,solo;if(!self.status.rendered)
return $.fn.qtip.log.error.call(self,2,$.fn.qtip.constants.TOOLTIP_NOT_RENDERED,'show');if(self.elements.tooltip.css('display')!=='none')return self;self.elements.tooltip.stop(true,false);returned=self.beforeShow.call(self,event);if(returned===false)return self;function afterShow()
{if(self.options.position.type!=='static')self.focus();self.onShow.call(self,event);if($.browser.msie)self.elements.tooltip.get(0).style.removeAttribute('filter');};self.cache.toggle=1;if(self.options.position.type!=='static')
self.updatePosition(event,(self.options.show.effect.length>0));if(typeof self.options.show.solo=='object')solo=$(self.options.show.solo);else if(self.options.show.solo===true)solo=$('div.qtip').not(self.elements.tooltip);if(solo)solo.each(function(){if($(this).qtip('api').status.rendered===true)$(this).qtip('api').hide();});if(typeof self.options.show.effect.type=='function')
{self.options.show.effect.type.call(self.elements.tooltip,self.options.show.effect.length);self.elements.tooltip.queue(function(){afterShow();$(this).dequeue();});}
else
{switch(self.options.show.effect.type.toLowerCase())
{case'fade':self.elements.tooltip.fadeIn(self.options.show.effect.length,afterShow);break;case'slide':self.elements.tooltip.slideDown(self.options.show.effect.length,function()
{afterShow();if(self.options.position.type!=='static')self.updatePosition(event,true);});break;case'grow':self.elements.tooltip.show(self.options.show.effect.length,afterShow);break;default:self.elements.tooltip.show(null,afterShow);break;};self.elements.tooltip.addClass(self.options.style.classes.active);};return $.fn.qtip.log.error.call(self,1,$.fn.qtip.constants.EVENT_SHOWN,'show');},hide:function(event)
{var returned;if(!self.status.rendered)
return $.fn.qtip.log.error.call(self,2,$.fn.qtip.constants.TOOLTIP_NOT_RENDERED,'hide');else if(self.elements.tooltip.css('display')==='none')return self;clearTimeout(self.timers.show);self.elements.tooltip.stop(true,false);returned=self.beforeHide.call(self,event);if(returned===false)return self;function afterHide(){self.onHide.call(self,event);};self.cache.toggle=0;if(typeof self.options.hide.effect.type=='function')
{self.options.hide.effect.type.call(self.elements.tooltip,self.options.hide.effect.length);self.elements.tooltip.queue(function(){afterHide();$(this).dequeue();});}
else
{switch(self.options.hide.effect.type.toLowerCase())
{case'fade':self.elements.tooltip.fadeOut(self.options.hide.effect.length,afterHide);break;case'slide':self.elements.tooltip.slideUp(self.options.hide.effect.length,afterHide);break;case'grow':self.elements.tooltip.hide(self.options.hide.effect.length,afterHide);break;default:self.elements.tooltip.hide(null,afterHide);break;};self.elements.tooltip.removeClass(self.options.style.classes.active);};return $.fn.qtip.log.error.call(self,1,$.fn.qtip.constants.EVENT_HIDDEN,'hide');},updatePosition:function(event,animate)
{var i,target,tooltip,coords,mapName,imagePos,newPosition,ieAdjust,ie6Adjust,borderAdjust,mouseAdjust,offset,curPosition,returned
if(!self.status.rendered)
return $.fn.qtip.log.error.call(self,2,$.fn.qtip.constants.TOOLTIP_NOT_RENDERED,'updatePosition');else if(self.options.position.type=='static')
return $.fn.qtip.log.error.call(self,1,$.fn.qtip.constants.CANNOT_POSITION_STATIC,'updatePosition');target={position:{left:0,top:0},dimensions:{height:0,width:0},corner:self.options.position.corner.target};tooltip={position:self.getPosition(),dimensions:self.getDimensions(),corner:self.options.position.corner.tooltip};if(self.options.position.target!=='mouse')
{if(self.options.position.target.get(0).nodeName.toLowerCase()=='area')
{coords=self.options.position.target.attr('coords').split(',');for(i=0;i<coords.length;i++)coords[i]=parseInt(coords[i]);mapName=self.options.position.target.parent('map').attr('name');imagePos=$('img[usemap="#'+mapName+'"]:first').offset();target.position={left:Math.floor(imagePos.left+coords[0]),top:Math.floor(imagePos.top+coords[1])};switch(self.options.position.target.attr('shape').toLowerCase())
{case'rect':target.dimensions={width:Math.ceil(Math.abs(coords[2]-coords[0])),height:Math.ceil(Math.abs(coords[3]-coords[1]))};break;case'circle':target.dimensions={width:coords[2]+1,height:coords[2]+1};break;case'poly':target.dimensions={width:coords[0],height:coords[1]};for(i=0;i<coords.length;i++)
{if(i%2==0)
{if(coords[i]>target.dimensions.width)
target.dimensions.width=coords[i];if(coords[i]<coords[0])
target.position.left=Math.floor(imagePos.left+coords[i]);}
else
{if(coords[i]>target.dimensions.height)
target.dimensions.height=coords[i];if(coords[i]<coords[1])
target.position.top=Math.floor(imagePos.top+coords[i]);};};target.dimensions.width=target.dimensions.width-(target.position.left-imagePos.left);target.dimensions.height=target.dimensions.height-(target.position.top-imagePos.top);break;default:return $.fn.qtip.log.error.call(self,4,$.fn.qtip.constants.INVALID_AREA_SHAPE,'updatePosition');break;};target.dimensions.width-=2;target.dimensions.height-=2;}
else if(self.options.position.target.add(document.body).length===1)
{target.position={left:$(document).scrollLeft(),top:$(document).scrollTop()};target.dimensions={height:$(window).height(),width:$(window).width()};}
else
{if(typeof self.options.position.target.attr('qtip')!=='undefined')
target.position=self.options.position.target.qtip('api').cache.position;else
target.position=self.options.position.target.offset();target.dimensions={height:self.options.position.target.outerHeight(),width:self.options.position.target.outerWidth()};};newPosition=$.extend({},target.position);if(target.corner.search(/right/i)!==-1)
newPosition.left+=target.dimensions.width;if(target.corner.search(/bottom/i)!==-1)
newPosition.top+=target.dimensions.height;if(target.corner.search(/((top|bottom)Middle)|center/)!==-1)
newPosition.left+=(target.dimensions.width/2);if(target.corner.search(/((left|right)Middle)|center/)!==-1)
newPosition.top+=(target.dimensions.height/2);}
else
{target.position=newPosition={left:self.cache.mouse.x,top:self.cache.mouse.y};target.dimensions={height:1,width:1};};if(tooltip.corner.search(/right/i)!==-1)
newPosition.left-=tooltip.dimensions.width;if(tooltip.corner.search(/bottom/i)!==-1)
newPosition.top-=tooltip.dimensions.height;if(tooltip.corner.search(/((top|bottom)Middle)|center/)!==-1)
newPosition.left-=(tooltip.dimensions.width/2);if(tooltip.corner.search(/((left|right)Middle)|center/)!==-1)
newPosition.top-=(tooltip.dimensions.height/2);ieAdjust=($.browser.msie)?1:0;ie6Adjust=($.browser.msie&&parseInt($.browser.version.charAt(0))===6)?1:0;if(self.options.style.border.radius>0)
{if(tooltip.corner.search(/Left/)!==-1)
newPosition.left-=self.options.style.border.radius;else if(tooltip.corner.search(/Right/)!==-1)
newPosition.left+=self.options.style.border.radius;if(tooltip.corner.search(/Top/)!==-1)
newPosition.top-=self.options.style.border.radius;else if(tooltip.corner.search(/Bottom/)!==-1)
newPosition.top+=self.options.style.border.radius;};if(ieAdjust)
{if(tooltip.corner.search(/top/)!==-1)
newPosition.top-=ieAdjust
else if(tooltip.corner.search(/bottom/)!==-1)
newPosition.top+=ieAdjust
if(tooltip.corner.search(/left/)!==-1)
newPosition.left-=ieAdjust
else if(tooltip.corner.search(/right/)!==-1)
newPosition.left+=ieAdjust
if(tooltip.corner.search(/leftMiddle|rightMiddle/)!==-1)
newPosition.top-=1};if(self.options.position.adjust.screen===true)
newPosition=screenAdjust.call(self,newPosition,target,tooltip);if(self.options.position.target==='mouse'&&self.options.position.adjust.mouse===true)
{if(self.options.position.adjust.screen===true&&self.elements.tip)
mouseAdjust=self.elements.tip.attr('rel');else
mouseAdjust=self.options.position.corner.tooltip;newPosition.left+=(mouseAdjust.search(/right/i)!==-1)?-6:6;newPosition.top+=(mouseAdjust.search(/bottom/i)!==-1)?-6:6;}
if(!self.elements.bgiframe&&$.browser.msie&&parseInt($.browser.version.charAt(0))==6)
{$('select, object').each(function()
{offset=$(this).offset();offset.bottom=offset.top+$(this).height();offset.right=offset.left+$(this).width();if(newPosition.top+tooltip.dimensions.height>=offset.top&&newPosition.left+tooltip.dimensions.width>=offset.left)
bgiframe.call(self);});};newPosition.left+=self.options.position.adjust.x;newPosition.top+=self.options.position.adjust.y;curPosition=self.getPosition();if(newPosition.left!=curPosition.left||newPosition.top!=curPosition.top)
{returned=self.beforePositionUpdate.call(self,event);if(returned===false)return self;self.cache.position=newPosition;if(animate===true)
{self.status.animated=true;self.elements.tooltip.animate(newPosition,200,'swing',function(){self.status.animated=false});}
else self.elements.tooltip.css(newPosition);self.onPositionUpdate.call(self,event);if(typeof event!=='undefined'&&event.type&&event.type!=='mousemove')
$.fn.qtip.log.error.call(self,1,$.fn.qtip.constants.EVENT_POSITION_UPDATED,'updatePosition');};return self;},updateWidth:function(newWidth)
{var hidden;if(!self.status.rendered)
return $.fn.qtip.log.error.call(self,2,$.fn.qtip.constants.TOOLTIP_NOT_RENDERED,'updateWidth');else if(newWidth&&typeof newWidth!=='number')
return $.fn.qtip.log.error.call(self,2,'newWidth must be of type number','updateWidth');hidden=self.elements.contentWrapper.siblings().add(self.elements.tip).add(self.elements.button);if(!newWidth)
{if(typeof self.options.style.width.value=='number')
newWidth=self.options.style.width.value;else
{self.elements.tooltip.css({width:'auto'});hidden.hide();if($.browser.msie)
self.elements.wrapper.add(self.elements.contentWrapper.children()).css({zoom:'normal'});newWidth=self.getDimensions().width+1;if(!self.options.style.width.value)
{if(newWidth>self.options.style.width.max)newWidth=self.options.style.width.max
if(newWidth<self.options.style.width.min)newWidth=self.options.style.width.min};};};if(newWidth%2!==0)newWidth-=1;self.elements.tooltip.width(newWidth);hidden.show();if(self.options.style.border.radius)
{self.elements.tooltip.find('.qtip-betweenCorners').each(function(i)
{$(this).width(newWidth-(self.options.style.border.radius*2));})};if($.browser.msie)
{self.elements.wrapper.add(self.elements.contentWrapper.children()).css({zoom:'1'});self.elements.wrapper.width(newWidth);if(self.elements.bgiframe)self.elements.bgiframe.width(newWidth).height(self.getDimensions.height);};return $.fn.qtip.log.error.call(self,1,$.fn.qtip.constants.EVENT_WIDTH_UPDATED,'updateWidth');},updateStyle:function(name)
{var tip,borders,context,corner,coordinates;if(!self.status.rendered)
return $.fn.qtip.log.error.call(self,2,$.fn.qtip.constants.TOOLTIP_NOT_RENDERED,'updateStyle');else if(typeof name!=='string'||!$.fn.qtip.styles[name])
return $.fn.qtip.log.error.call(self,2,$.fn.qtip.constants.STYLE_NOT_DEFINED,'updateStyle');self.options.style=buildStyle.call(self,$.fn.qtip.styles[name],self.options.user.style);self.elements.content.css(jQueryStyle(self.options.style));if(self.options.content.title.text!==false)
self.elements.title.css(jQueryStyle(self.options.style.title,true));self.elements.contentWrapper.css({borderColor:self.options.style.border.color});if(self.options.style.tip.corner!==false)
{if($('<canvas>').get(0).getContext)
{tip=self.elements.tooltip.find('.qtip-tip canvas:first');context=tip.get(0).getContext('2d');context.clearRect(0,0,300,300);corner=tip.parent('div[rel]:first').attr('rel');coordinates=calculateTip(corner,self.options.style.tip.size.width,self.options.style.tip.size.height);drawTip.call(self,tip,coordinates,self.options.style.tip.color||self.options.style.border.color);}
else if($.browser.msie)
{tip=self.elements.tooltip.find('.qtip-tip [nodeName="shape"]');tip.attr('fillcolor',self.options.style.tip.color||self.options.style.border.color);};};if(self.options.style.border.radius>0)
{self.elements.tooltip.find('.qtip-betweenCorners').css({backgroundColor:self.options.style.border.color});if($('<canvas>').get(0).getContext)
{borders=calculateBorders(self.options.style.border.radius)
self.elements.tooltip.find('.qtip-wrapper canvas').each(function()
{context=$(this).get(0).getContext('2d');context.clearRect(0,0,300,300);corner=$(this).parent('div[rel]:first').attr('rel')
drawBorder.call(self,$(this),borders[corner],self.options.style.border.radius,self.options.style.border.color);});}
else if($.browser.msie)
{self.elements.tooltip.find('.qtip-wrapper [nodeName="arc"]').each(function()
{$(this).attr('fillcolor',self.options.style.border.color)});};};return $.fn.qtip.log.error.call(self,1,$.fn.qtip.constants.EVENT_STYLE_UPDATED,'updateStyle');},updateContent:function(content,reposition)
{var parsedContent,images,loadedImages;if(!self.status.rendered)
return $.fn.qtip.log.error.call(self,2,$.fn.qtip.constants.TOOLTIP_NOT_RENDERED,'updateContent');else if(!content)
return $.fn.qtip.log.error.call(self,2,$.fn.qtip.constants.NO_CONTENT_PROVIDED,'updateContent');parsedContent=self.beforeContentUpdate.call(self,content);if(typeof parsedContent=='string')content=parsedContent;else if(parsedContent===false)return;if($.browser.msie)self.elements.contentWrapper.children().css({zoom:'normal'});if(content.jquery&&content.length>0)
content.clone(true).appendTo(self.elements.content).show();else self.elements.content.html(content);images=self.elements.content.find('img[complete=false]');if(images.length>0)
{loadedImages=0;images.each(function(i)
{$('<img src="'+$(this).attr('src')+'" />').load(function(){if(++loadedImages==images.length)afterLoad();});});}
else afterLoad();function afterLoad()
{self.updateWidth();if(reposition!==false)
{if(self.options.position.type!=='static')
self.updatePosition(self.elements.tooltip.is(':visible'),true);if(self.options.style.tip.corner!==false)
positionTip.call(self);};};self.onContentUpdate.call(self);return $.fn.qtip.log.error.call(self,1,$.fn.qtip.constants.EVENT_CONTENT_UPDATED,'loadContent');},loadContent:function(url,data,method)
{var returned;if(!self.status.rendered)
return $.fn.qtip.log.error.call(self,2,$.fn.qtip.constants.TOOLTIP_NOT_RENDERED,'loadContent');returned=self.beforeContentLoad.call(self);if(returned===false)return self;if(method=='post')
$.post(url,data,setupContent);else
$.get(url,data,setupContent);function setupContent(content)
{self.onContentLoad.call(self);$.fn.qtip.log.error.call(self,1,$.fn.qtip.constants.EVENT_CONTENT_LOADED,'loadContent');self.updateContent(content);};return self;},updateTitle:function(content)
{if(!self.status.rendered)
return $.fn.qtip.log.error.call(self,2,$.fn.qtip.constants.TOOLTIP_NOT_RENDERED,'updateTitle');else if(!content)
return $.fn.qtip.log.error.call(self,2,$.fn.qtip.constants.NO_CONTENT_PROVIDED,'updateTitle');returned=self.beforeTitleUpdate.call(self);if(returned===false)return self;if(self.elements.button)self.elements.button=self.elements.button.clone(true);self.elements.title.html(content)
if(self.elements.button)self.elements.title.prepend(self.elements.button);self.onTitleUpdate.call(self);return $.fn.qtip.log.error.call(self,1,$.fn.qtip.constants.EVENT_TITLE_UPDATED,'updateTitle');},focus:function(event)
{var curIndex,newIndex,elemIndex,returned;if(!self.status.rendered)
return $.fn.qtip.log.error.call(self,2,$.fn.qtip.constants.TOOLTIP_NOT_RENDERED,'focus');else if(self.options.position.type=='static')
return $.fn.qtip.log.error.call(self,1,$.fn.qtip.constants.CANNOT_FOCUS_STATIC,'focus');curIndex=parseInt(self.elements.tooltip.css('z-index'));newIndex=6000+$('div.qtip[qtip]').length-1;if(!self.status.focused&&curIndex!==newIndex)
{returned=self.beforeFocus.call(self,event);if(returned===false)return self;$('div.qtip[qtip]').not(self.elements.tooltip).each(function()
{if($(this).qtip('api').status.rendered===true)
{elemIndex=parseInt($(this).css('z-index'));if(typeof elemIndex=='number'&&elemIndex>-1)
$(this).css({zIndex:parseInt($(this).css('z-index'))-1});$(this).qtip('api').status.focused=false;}})
self.elements.tooltip.css({zIndex:newIndex});self.status.focused=true;self.onFocus.call(self,event);$.fn.qtip.log.error.call(self,1,$.fn.qtip.constants.EVENT_FOCUSED,'focus');};return self;},disable:function(state)
{if(!self.status.rendered)
return $.fn.qtip.log.error.call(self,2,$.fn.qtip.constants.TOOLTIP_NOT_RENDERED,'disable');if(state)
{if(!self.status.disabled)
{self.status.disabled=true;$.fn.qtip.log.error.call(self,1,$.fn.qtip.constants.EVENT_DISABLED,'disable');}
else $.fn.qtip.log.error.call(self,1,$.fn.qtip.constants.TOOLTIP_ALREADY_DISABLED,'disable');}
else
{if(self.status.disabled)
{self.status.disabled=false;$.fn.qtip.log.error.call(self,1,$.fn.qtip.constants.EVENT_ENABLED,'disable');}
else $.fn.qtip.log.error.call(self,1,$.fn.qtip.constants.TOOLTIP_ALREADY_ENABLED,'disable');};return self;},destroy:function()
{var i,returned,interfaces;returned=self.beforeDestroy.call(self);if(returned===false)return self;if(self.status.rendered)
{self.options.show.when.target.unbind('mousemove.qtip',self.updatePosition);self.options.show.when.target.unbind('mouseout.qtip',self.hide);self.options.show.when.target.unbind(self.options.show.when.event+'.qtip');self.options.hide.when.target.unbind(self.options.hide.when.event+'.qtip');self.elements.tooltip.unbind(self.options.hide.when.event+'.qtip');self.elements.tooltip.unbind('mouseover.qtip',self.focus);self.elements.tooltip.remove();}
else self.options.show.when.target.unbind(self.options.show.when.event+'.qtip-create');if(typeof self.elements.target.data('qtip')=='object')
{interfaces=self.elements.target.data('qtip').interfaces;if(typeof interfaces=='object'&&interfaces.length>0)
{for(i=0;i<interfaces.length-1;i++)
if(interfaces[i].id==self.id)interfaces.splice(i,1)}}
delete $.fn.qtip.interfaces[self.id];if(typeof interfaces=='object'&&interfaces.length>0)
self.elements.target.data('qtip').current=interfaces.length-1;else
self.elements.target.removeData('qtip');self.onDestroy.call(self);$.fn.qtip.log.error.call(self,1,$.fn.qtip.constants.EVENT_DESTROYED,'destroy');return self.elements.target},getPosition:function()
{var show,offset;if(!self.status.rendered)
return $.fn.qtip.log.error.call(self,2,$.fn.qtip.constants.TOOLTIP_NOT_RENDERED,'getPosition');show=(self.elements.tooltip.css('display')!=='none')?false:true;if(show)self.elements.tooltip.css({visiblity:'hidden'}).show();offset=self.elements.tooltip.offset();if(show)self.elements.tooltip.css({visiblity:'visible'}).hide();return offset;},getDimensions:function()
{var show,dimensions;if(!self.status.rendered)
return $.fn.qtip.log.error.call(self,2,$.fn.qtip.constants.TOOLTIP_NOT_RENDERED,'getDimensions');show=(!self.elements.tooltip.is(':visible'))?true:false;if(show)self.elements.tooltip.css({visiblity:'hidden'}).show();dimensions={height:self.elements.tooltip.outerHeight(),width:self.elements.tooltip.outerWidth()};if(show)self.elements.tooltip.css({visiblity:'visible'}).hide();return dimensions;}});};function construct()
{var self,adjust,content,url,data,method,tempLength;self=this;self.beforeRender.call(self);self.status.rendered=true;self.elements.tooltip='<div qtip="'+self.id+'" '+'class="qtip '+(self.options.style.classes.tooltip||self.options.style)+'"'+'style="display:none; -moz-border-radius:0; -webkit-border-radius:0; border-radius:0;'+'position:'+self.options.position.type+';">'+'  <div class="qtip-wrapper" style="position:relative; overflow:hidden; text-align:left;">'+'    <div class="qtip-contentWrapper" style="overflow:hidden;">'+'       <div class="qtip-content '+self.options.style.classes.content+'"></div>'+'</div></div></div>';self.elements.tooltip=$(self.elements.tooltip);self.elements.tooltip.appendTo(self.options.position.container)
self.elements.tooltip.data('qtip',{current:0,interfaces:[self]});self.elements.wrapper=self.elements.tooltip.children('div:first');self.elements.contentWrapper=self.elements.wrapper.children('div:first').css({background:self.options.style.background});self.elements.content=self.elements.contentWrapper.children('div:first').css(jQueryStyle(self.options.style));if($.browser.msie)self.elements.wrapper.add(self.elements.content).css({zoom:1});if(self.options.hide.when.event=='unfocus')self.elements.tooltip.attr('unfocus',true);if(typeof self.options.style.width.value=='number')self.updateWidth();if($('<canvas>').get(0).getContext||$.browser.msie)
{if(self.options.style.border.radius>0)
createBorder.call(self);else
self.elements.contentWrapper.css({border:self.options.style.border.width+'px solid '+self.options.style.border.color});if(self.options.style.tip.corner!==false)
createTip.call(self);}
else
{self.elements.contentWrapper.css({border:self.options.style.border.width+'px solid '+self.options.style.border.color});self.options.style.border.radius=0;self.options.style.tip.corner=false;$.fn.qtip.log.error.call(self,2,$.fn.qtip.constants.CANVAS_VML_NOT_SUPPORTED,'render');};if((typeof self.options.content.text=='string'&&self.options.content.text.length>0)||(self.options.content.text.jquery&&self.options.content.text.length>0))
content=self.options.content.text;else if(typeof self.elements.target.attr('title')=='string'&&self.elements.target.attr('title').length>0)
{content=self.elements.target.attr('title').replace("\\n",'<br />');self.elements.target.attr('title','');}
else if(typeof self.elements.target.attr('alt')=='string'&&self.elements.target.attr('alt').length>0)
{content=self.elements.target.attr('alt').replace("\\n",'<br />');self.elements.target.attr('alt','');}
else
{content=' ';$.fn.qtip.log.error.call(self,1,$.fn.qtip.constants.NO_VALID_CONTENT,'render');};if(self.options.content.title.text!==false)createTitle.call(self);self.updateContent(content);assignEvents.call(self);if(self.options.show.ready===true)self.show();if(self.options.content.url!==false)
{url=self.options.content.url;data=self.options.content.data;method=self.options.content.method||'get';self.loadContent(url,data,method);};self.onRender.call(self);$.fn.qtip.log.error.call(self,1,$.fn.qtip.constants.EVENT_RENDERED,'render');};function createBorder()
{var self,i,width,radius,color,coordinates,containers,size,betweenWidth,betweenCorners,borderTop,borderBottom,borderCoord,sideWidth,vertWidth;self=this;self.elements.wrapper.find('.qtip-borderBottom, .qtip-borderTop').remove();width=self.options.style.border.width;radius=self.options.style.border.radius;color=self.options.style.border.color||self.options.style.tip.color;coordinates=calculateBorders(radius);containers={};for(i in coordinates)
{containers[i]='<div rel="'+i+'" style="'+((i.search(/Left/)!==-1)?'left':'right')+':0; '+'position:absolute; height:'+radius+'px; width:'+radius+'px; overflow:hidden; line-height:0.1px; font-size:1px">';if($('<canvas>').get(0).getContext)
containers[i]+='<canvas height="'+radius+'" width="'+radius+'" style="vertical-align: top"></canvas>';else if($.browser.msie)
{size=radius*2+3;containers[i]+='<v:arc stroked="false" fillcolor="'+color+'" startangle="'+coordinates[i][0]+'" endangle="'+coordinates[i][1]+'" '+'style="width:'+size+'px; height:'+size+'px; margin-top:'+((i.search(/bottom/)!==-1)?-2:-1)+'px; '+'margin-left:'+((i.search(/Right/)!==-1)?coordinates[i][2]-3.5:-1)+'px; '+'vertical-align:top; display:inline-block; behavior:url(#default#VML)"></v:arc>';};containers[i]+='</div>';};betweenWidth=self.getDimensions().width-(Math.max(width,radius)*2);betweenCorners='<div class="qtip-betweenCorners" style="height:'+radius+'px; width:'+betweenWidth+'px; '+'overflow:hidden; background-color:'+color+'; line-height:0.1px; font-size:1px;">';borderTop='<div class="qtip-borderTop" dir="ltr" style="height:'+radius+'px; '+'margin-left:'+radius+'px; line-height:0.1px; font-size:1px; padding:0;">'+
containers['topLeft']+containers['topRight']+betweenCorners;self.elements.wrapper.prepend(borderTop);borderBottom='<div class="qtip-borderBottom" dir="ltr" style="height:'+radius+'px; '+'margin-left:'+radius+'px; line-height:0.1px; font-size:1px; padding:0;">'+
containers['bottomLeft']+containers['bottomRight']+betweenCorners;self.elements.wrapper.append(borderBottom);if($('<canvas>').get(0).getContext)
{self.elements.wrapper.find('canvas').each(function()
{borderCoord=coordinates[$(this).parent('[rel]:first').attr('rel')];drawBorder.call(self,$(this),borderCoord,radius,color);})}
else if($.browser.msie)self.elements.tooltip.append('<v:image style="behavior:url(#default#VML);"></v:image>');sideWidth=Math.max(radius,(radius+(width-radius)))
vertWidth=Math.max(width-radius,0);self.elements.contentWrapper.css({border:'0px solid '+color,borderWidth:vertWidth+'px '+sideWidth+'px'})};function drawBorder(canvas,coordinates,radius,color)
{var context=canvas.get(0).getContext('2d');context.fillStyle=color;context.beginPath();context.arc(coordinates[0],coordinates[1],radius,0,Math.PI*2,false);context.fill();};function createTip(corner)
{var self,color,coordinates,coordsize,path;self=this;if(self.elements.tip!==null)self.elements.tip.remove();color=self.options.style.tip.color||self.options.style.border.color;if(self.options.style.tip.corner===false)return;else if(!corner)corner=self.options.style.tip.corner;coordinates=calculateTip(corner,self.options.style.tip.size.width,self.options.style.tip.size.height);self.elements.tip='<div class="'+self.options.style.classes.tip+'" dir="ltr" rel="'+corner+'" style="position:absolute; '+'height:'+self.options.style.tip.size.height+'px; width:'+self.options.style.tip.size.width+'px; '+'margin:0 auto; line-height:0.1px; font-size:1px;">';if($('<canvas>').get(0).getContext)
self.elements.tip+='<canvas height="'+self.options.style.tip.size.height+'" width="'+self.options.style.tip.size.width+'"></canvas>';else if($.browser.msie)
{coordsize=self.options.style.tip.size.width+','+self.options.style.tip.size.height;path='m'+coordinates[0][0]+','+coordinates[0][1];path+=' l'+coordinates[1][0]+','+coordinates[1][1];path+=' '+coordinates[2][0]+','+coordinates[2][1];path+=' xe';self.elements.tip+='<v:shape fillcolor="'+color+'" stroked="false" filled="true" path="'+path+'" coordsize="'+coordsize+'" '+'style="width:'+self.options.style.tip.size.width+'px; height:'+self.options.style.tip.size.height+'px; '+'line-height:0.1px; display:inline-block; behavior:url(#default#VML); '+'vertical-align:'+((corner.search(/top/)!==-1)?'bottom':'top')+'"></v:shape>';self.elements.tip+='<v:image style="behavior:url(#default#VML);"></v:image>';self.elements.contentWrapper.css('position','relative');};self.elements.tooltip.prepend(self.elements.tip+'</div>');self.elements.tip=self.elements.tooltip.find('.'+self.options.style.classes.tip).eq(0);if($('<canvas>').get(0).getContext)
drawTip.call(self,self.elements.tip.find('canvas:first'),coordinates,color);if(corner.search(/top/)!==-1&&$.browser.msie&&parseInt($.browser.version.charAt(0))===6)
self.elements.tip.css({marginTop:-4});positionTip.call(self,corner);};function drawTip(canvas,coordinates,color)
{var context=canvas.get(0).getContext('2d');context.fillStyle=color;context.beginPath();context.moveTo(coordinates[0][0],coordinates[0][1]);context.lineTo(coordinates[1][0],coordinates[1][1]);context.lineTo(coordinates[2][0],coordinates[2][1]);context.fill();};function positionTip(corner)
{var self,ieAdjust,paddingCorner,paddingSize,newMargin;self=this;if(self.options.style.tip.corner===false||!self.elements.tip)return;if(!corner)corner=self.elements.tip.attr('rel');ieAdjust=positionAdjust=($.browser.msie)?1:0;self.elements.tip.css(corner.match(/left|right|top|bottom/)[0],0);if(corner.search(/top|bottom/)!==-1)
{if($.browser.msie)
{if(parseInt($.browser.version.charAt(0))===6)
positionAdjust=(corner.search(/top/)!==-1)?-3:1;else
positionAdjust=(corner.search(/top/)!==-1)?1:2;};if(corner.search(/Middle/)!==-1)
self.elements.tip.css({left:'50%',marginLeft:-(self.options.style.tip.size.width/2)});else if(corner.search(/Left/)!==-1)
self.elements.tip.css({left:self.options.style.border.radius-ieAdjust});else if(corner.search(/Right/)!==-1)
self.elements.tip.css({right:self.options.style.border.radius+ieAdjust});if(corner.search(/top/)!==-1)
self.elements.tip.css({top:-positionAdjust});else
self.elements.tip.css({bottom:positionAdjust});}
else if(corner.search(/left|right/)!==-1)
{if($.browser.msie)
positionAdjust=(parseInt($.browser.version.charAt(0))===6)?1:((corner.search(/left/)!==-1)?1:2);if(corner.search(/Middle/)!==-1)
self.elements.tip.css({top:'50%',marginTop:-(self.options.style.tip.size.height/2)});else if(corner.search(/Top/)!==-1)
self.elements.tip.css({top:self.options.style.border.radius-ieAdjust});else if(corner.search(/Bottom/)!==-1)
self.elements.tip.css({bottom:self.options.style.border.radius+ieAdjust});if(corner.search(/left/)!==-1)
self.elements.tip.css({left:-positionAdjust});else
self.elements.tip.css({right:positionAdjust});};paddingCorner='padding-'+corner.match(/left|right|top|bottom/)[0];paddingSize=self.options.style.tip.size[(paddingCorner.search(/left|right/)!==-1)?'width':'height'];self.elements.tooltip.css('padding',0);self.elements.tooltip.css(paddingCorner,paddingSize);if($.browser.msie&&parseInt($.browser.version.charAt(0))==6)
{newMargin=parseInt(self.elements.tip.css('margin-top'))||0;newMargin+=parseInt(self.elements.content.css('margin-top'))||0;self.elements.tip.css({marginTop:newMargin});};};function createTitle()
{var self=this;if(self.elements.title!==null)self.elements.title.remove();self.elements.title=$('<div class="'+self.options.style.classes.title+'">').css(jQueryStyle(self.options.style.title,true)).css({zoom:($.browser.msie)?1:0}).prependTo(self.elements.contentWrapper);if(self.options.content.title.text)self.updateTitle.call(self,self.options.content.title.text);if(self.options.content.title.button!==false&&typeof self.options.content.title.button=='string')
{self.elements.button=$('<a class="'+self.options.style.classes.button+'" style="float:right; position: relative"></a>').css(jQueryStyle(self.options.style.button,true)).html(self.options.content.title.button).prependTo(self.elements.title).click(function(event){if(!self.status.disabled)self.hide(event)});};};function assignEvents()
{var self,showTarget,hideTarget,inactiveEvents;self=this;showTarget=self.options.show.when.target;hideTarget=self.options.hide.when.target;if(self.options.hide.fixed)hideTarget=hideTarget.add(self.elements.tooltip);if(self.options.hide.when.event=='inactive')
{inactiveEvents=['click','dblclick','mousedown','mouseup','mousemove','mouseout','mouseenter','mouseleave','mouseover'];function inactiveMethod(event)
{if(self.status.disabled===true)return;clearTimeout(self.timers.inactive);self.timers.inactive=setTimeout(function()
{$(inactiveEvents).each(function()
{hideTarget.unbind(this+'.qtip-inactive');self.elements.content.unbind(this+'.qtip-inactive');});self.hide(event);},self.options.hide.delay);};}
else if(self.options.hide.fixed===true)
{self.elements.tooltip.bind('mouseover.qtip',function()
{if(self.status.disabled===true)return;clearTimeout(self.timers.hide);});};function showMethod(event)
{if(self.status.disabled===true)return;if(self.options.hide.when.event=='inactive')
{$(inactiveEvents).each(function()
{hideTarget.bind(this+'.qtip-inactive',inactiveMethod);self.elements.content.bind(this+'.qtip-inactive',inactiveMethod);});inactiveMethod();};clearTimeout(self.timers.show);clearTimeout(self.timers.hide);self.timers.show=setTimeout(function(){self.show(event);},self.options.show.delay);};function hideMethod(event)
{if(self.status.disabled===true)return;if(self.options.hide.fixed===true&&self.options.hide.when.event.search(/mouse(out|leave)/i)!==-1&&$(event.relatedTarget).parents('div.qtip[qtip]').length>0)
{event.stopPropagation();event.preventDefault();clearTimeout(self.timers.hide);return false;};clearTimeout(self.timers.show);clearTimeout(self.timers.hide);self.elements.tooltip.stop(true,true);self.timers.hide=setTimeout(function(){self.hide(event);},self.options.hide.delay);};if((self.options.show.when.target.add(self.options.hide.when.target).length===1&&self.options.show.when.event==self.options.hide.when.event&&self.options.hide.when.event!=='inactive')||self.options.hide.when.event=='unfocus')
{self.cache.toggle=0;showTarget.bind(self.options.show.when.event+'.qtip',function(event)
{if(self.cache.toggle==0)showMethod(event);else hideMethod(event);});}
else
{showTarget.bind(self.options.show.when.event+'.qtip',showMethod);if(self.options.hide.when.event!=='inactive')
hideTarget.bind(self.options.hide.when.event+'.qtip',hideMethod);};if(self.options.position.type.search(/(fixed|absolute)/)!==-1)
self.elements.tooltip.bind('mouseover.qtip',self.focus);if(self.options.position.target==='mouse'&&self.options.position.type!=='static')
{showTarget.bind('mousemove.qtip',function(event)
{self.cache.mouse={x:event.pageX,y:event.pageY};if(self.status.disabled===false&&self.options.position.adjust.mouse===true&&self.options.position.type!=='static'&&self.elements.tooltip.css('display')!=='none')
self.updatePosition(event);});};};function screenAdjust(position,target,tooltip)
{var self,adjustedPosition,adjust,newCorner,overflow,corner;self=this;if(tooltip.corner=='center')return target.position
adjustedPosition=$.extend({},position);newCorner={x:false,y:false};overflow={left:(adjustedPosition.left<$.fn.qtip.cache.screen.scroll.left),right:(adjustedPosition.left+tooltip.dimensions.width+2>=$.fn.qtip.cache.screen.width+$.fn.qtip.cache.screen.scroll.left),top:(adjustedPosition.top<$.fn.qtip.cache.screen.scroll.top),bottom:(adjustedPosition.top+tooltip.dimensions.height+2>=$.fn.qtip.cache.screen.height+$.fn.qtip.cache.screen.scroll.top)};adjust={left:(overflow.left&&(tooltip.corner.search(/right/i)!=-1||(tooltip.corner.search(/right/i)==-1&&!overflow.right))),right:(overflow.right&&(tooltip.corner.search(/left/i)!=-1||(tooltip.corner.search(/left/i)==-1&&!overflow.left))),top:(overflow.top&&tooltip.corner.search(/top/i)==-1),bottom:(overflow.bottom&&tooltip.corner.search(/bottom/i)==-1)};if(adjust.left)
{if(self.options.position.target!=='mouse')
adjustedPosition.left=target.position.left+target.dimensions.width;else
adjustedPosition.left=self.cache.mouse.x
newCorner.x='Left';}
else if(adjust.right)
{if(self.options.position.target!=='mouse')
adjustedPosition.left=target.position.left-tooltip.dimensions.width;else
adjustedPosition.left=self.cache.mouse.x-tooltip.dimensions.width;newCorner.x='Right';};if(adjust.top)
{if(self.options.position.target!=='mouse')
adjustedPosition.top=target.position.top+target.dimensions.height;else
adjustedPosition.top=self.cache.mouse.y
newCorner.y='top';}
else if(adjust.bottom)
{if(self.options.position.target!=='mouse')
adjustedPosition.top=target.position.top-tooltip.dimensions.height;else
adjustedPosition.top=self.cache.mouse.y-tooltip.dimensions.height;newCorner.y='bottom';};if(adjustedPosition.left<0)
{adjustedPosition.left=position.left;newCorner.x=false;};if(adjustedPosition.top<0)
{adjustedPosition.top=position.top;newCorner.y=false;};if(self.options.style.tip.corner!==false)
{adjustedPosition.corner=new String(tooltip.corner);if(newCorner.x!==false)adjustedPosition.corner=adjustedPosition.corner.replace(/Left|Right|Middle/,newCorner.x);if(newCorner.y!==false)adjustedPosition.corner=adjustedPosition.corner.replace(/top|bottom/,newCorner.y);if(adjustedPosition.corner!==self.elements.tip.attr('rel'))
createTip.call(self,adjustedPosition.corner);};return adjustedPosition;};function jQueryStyle(style,sub)
{var styleObj,i;styleObj=$.extend(true,{},style);for(i in styleObj)
{if(sub===true&&i.search(/(tip|classes)/i)!==-1)
delete styleObj[i];else if(!sub&&i.search(/(width|border|tip|title|classes|user)/i)!==-1)
delete styleObj[i];};return styleObj;};function sanitizeStyle(style)
{if(typeof style.tip!=='object')style.tip={corner:style.tip};if(typeof style.tip.size!=='object')style.tip.size={width:style.tip.size,height:style.tip.size};if(typeof style.border!=='object')style.border={width:style.border};if(typeof style.width!=='object')style.width={value:style.width};if(typeof style.width.max=='string')style.width.max=parseInt(style.width.max.replace(/([0-9]+)/i,"$1"));if(typeof style.width.min=='string')style.width.min=parseInt(style.width.min.replace(/([0-9]+)/i,"$1"));if(typeof style.tip.size.x=='number')
{style.tip.size.width=style.tip.size.x;delete style.tip.size.x;};if(typeof style.tip.size.y=='number')
{style.tip.size.height=style.tip.size.y;delete style.tip.size.y;};return style;};function buildStyle()
{var self,i,styleArray,styleExtend,finalStyle,ieAdjust;self=this;styleArray=[true,{}];for(i=0;i<arguments.length;i++)
styleArray.push(arguments[i]);styleExtend=[$.extend.apply($,styleArray)];while(typeof styleExtend[0].name=='string')
{styleExtend.unshift(sanitizeStyle($.fn.qtip.styles[styleExtend[0].name]));};styleExtend.unshift(true,{classes:{tooltip:'qtip-'+(arguments[0].name||'defaults')}},$.fn.qtip.styles.defaults);finalStyle=$.extend.apply($,styleExtend);ieAdjust=($.browser.msie)?1:0;finalStyle.tip.size.width+=ieAdjust;finalStyle.tip.size.height+=ieAdjust;if(finalStyle.tip.size.width%2>0)finalStyle.tip.size.width+=1;if(finalStyle.tip.size.height%2>0)finalStyle.tip.size.height+=1;if(finalStyle.tip.corner===true)
finalStyle.tip.corner=(self.options.position.corner.tooltip==='center')?false:self.options.position.corner.tooltip;return finalStyle;};function calculateTip(corner,width,height)
{var tips={bottomRight:[[0,0],[width,height],[width,0]],bottomLeft:[[0,0],[width,0],[0,height]],topRight:[[0,height],[width,0],[width,height]],topLeft:[[0,0],[0,height],[width,height]],topMiddle:[[0,height],[width/2,0],[width,height]],bottomMiddle:[[0,0],[width,0],[width/2,height]],rightMiddle:[[0,0],[width,height/2],[0,height]],leftMiddle:[[width,0],[width,height],[0,height/2]]};tips.leftTop=tips.bottomRight;tips.rightTop=tips.bottomLeft;tips.leftBottom=tips.topRight;tips.rightBottom=tips.topLeft;return tips[corner];};function calculateBorders(radius)
{var borders;if($('<canvas>').get(0).getContext)
{borders={topLeft:[radius,radius],topRight:[0,radius],bottomLeft:[radius,0],bottomRight:[0,0]};}
else if($.browser.msie)
{borders={topLeft:[-90,90,0],topRight:[-90,90,-radius],bottomLeft:[90,270,0],bottomRight:[90,270,-radius]};};return borders;};function bgiframe()
{var self,html,dimensions;self=this;dimensions=self.getDimensions();html='<iframe class="qtip-bgiframe" frameborder="0" tabindex="-1" src="javascript:false" '+'style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=\'0\'); border: 1px solid red; '+'height:'+dimensions.height+'px; width:'+dimensions.width+'px" />';self.elements.bgiframe=self.elements.wrapper.prepend(html).children('.qtip-bgiframe:first');};$(document).ready(function()
{$.fn.qtip.cache={screen:{scroll:{left:$(window).scrollLeft(),top:$(window).scrollTop()},width:$(window).width(),height:$(window).height()}};var adjustTimer;$(window).bind('resize scroll',function(event)
{clearTimeout(adjustTimer);adjustTimer=setTimeout(function()
{if(event.type==='scroll')
$.fn.qtip.cache.screen.scroll={left:$(window).scrollLeft(),top:$(window).scrollTop()};else
{$.fn.qtip.cache.screen.width=$(window).width();$.fn.qtip.cache.screen.height=$(window).height();};for(i=0;i<$.fn.qtip.interfaces.length;i++)
{var api=$.fn.qtip.interfaces[i];if(api.status.rendered===true&&(api.options.position.type!=='static'||api.options.position.adjust.scroll&&event.type==='scroll'||api.options.position.adjust.resize&&event.type==='resize'))
{api.updatePosition(event,true);}};},100);})
$(document).bind('mousedown.qtip',function(event)
{if($(event.target).parents('div.qtip').length===0)
{$('.qtip[unfocus]').each(function()
{var api=$(this).qtip("api");if($(this).is(':visible')&&!api.status.disabled&&$(event.target).add(api.elements.target).length>1)
api.hide(event);})};})});$.fn.qtip.interfaces=[]
$.fn.qtip.log={error:function(){return this;}};$.fn.qtip.constants={};$.fn.qtip.defaults={content:{prerender:false,text:false,url:false,data:null,title:{text:false,button:false}},position:{target:false,corner:{target:'bottomRight',tooltip:'topLeft'},adjust:{x:0,y:0,mouse:true,screen:false,scroll:true,resize:true},type:'absolute',container:false},show:{when:{target:false,event:'mouseover'},effect:{type:'fade',length:100},delay:140,solo:false,ready:false},hide:{when:{target:false,event:'mouseout'},effect:{type:'fade',length:100},delay:0,fixed:false},api:{beforeRender:function(){},onRender:function(){},beforePositionUpdate:function(){},onPositionUpdate:function(){},beforeShow:function(){},onShow:function(){},beforeHide:function(){},onHide:function(){},beforeContentUpdate:function(){},onContentUpdate:function(){},beforeContentLoad:function(){},onContentLoad:function(){},beforeTitleUpdate:function(){},onTitleUpdate:function(){},beforeDestroy:function(){},onDestroy:function(){},beforeFocus:function(){},onFocus:function(){}}};$.fn.qtip.styles={defaults:{background:'white',color:'#111',overflow:'hidden',textAlign:'left',width:{min:0,max:250},padding:'5px 9px',border:{width:1,radius:0,color:'#d3d3d3'},tip:{corner:false,color:false,size:{width:13,height:13},opacity:1},title:{background:'#e1e1e1',fontWeight:'bold',padding:'7px 12px'},button:{cursor:'pointer'},classes:{target:'',tip:'qtip-tip',title:'qtip-title',button:'qtip-button',content:'qtip-content',active:'qtip-active'}},cream:{border:{width:3,radius:0,color:'#F9E98E'},title:{background:'#F0DE7D',color:'#A27D35'},background:'#FBF7AA',color:'#A27D35',classes:{tooltip:'qtip-cream'}},light:{border:{width:3,radius:0,color:'#E2E2E2'},title:{background:'#f1f1f1',color:'#454545'},background:'white',color:'#454545',classes:{tooltip:'qtip-light'}},dark:{border:{width:3,radius:0,color:'#303030'},title:{background:'#404040',color:'#f3f3f3'},background:'#505050',color:'#f3f3f3',classes:{tooltip:'qtip-dark'}},red:{border:{width:3,radius:0,color:'#CE6F6F'},title:{background:'#f28279',color:'#9C2F2F'},background:'#F79992',color:'#9C2F2F',classes:{tooltip:'qtip-red'}},green:{border:{width:3,radius:0,color:'#A9DB66'},title:{background:'#b9db8c',color:'#58792E'},background:'#CDE6AC',color:'#58792E',classes:{tooltip:'qtip-green'}},blue:{border:{width:3,radius:0,color:'#ADD9ED'},title:{background:'#D0E9F5',color:'#5E99BD'},background:'#E5F6FE',color:'#4D9FBF',classes:{tooltip:'qtip-blue'}}};})(jQuery);

(function($){$.la=$.la||{};$.la.decalage_horaire=$.la.decalage_horaire||3600;$.extend(true,$.la,{sFlashHost:(function(){var host=document.location.hostname;if(host.substr(0,4)==='dev.'){return'http://dev.cdn1-gulli.ladmedia.fr:82';}else if(host.substr(0,5)==='test.'){return'http://test.cdn1-gulli.ladmedia.fr';}else if(host.substr(0,3)==='pp.'){return'http://test.cdn1-gulli.ladmedia.fr';}else{return'http://cdn1-gulli.ladmedia.fr';}}()),sResizeHost:(function(){var host=document.location.hostname;if(host.substr(0,4)==='dev.'){return'http://test.resize-gulli.ladmedia.fr';}else if(host.substr(0,5)==='test.'){return'http://test.resize-gulli.ladmedia.fr';}else if(host.substr(0,3)==='pp.'){return'http://resize-gulli.ladmedia.fr';}else{return'http://resize-gulli.ladmedia.fr';}}()),sMediaHost:(function(){var host=document.location.hostname;if(host.substr(0,4)==='dev.'){return'http://dev.cdn-gulli.ladmedia.fr:82';}else if(host.substr(0,5)==='test.'){return'http://test.cdn-gulli.ladmedia.fr';}else if(host.substr(0,3)==='pp.'){return'http://test.cdn-gulli.ladmedia.fr';}else{return'http://cdn-gulli.ladmedia.fr';}}()),modalbox:{accordionSpeed:'fast',accordion:function(obj,callback){var id;for(id in obj){$('#'+id).slideUp($.la.modalbox.accordionSpeed);$('#'+id).prev('h3').children('a').removeClass("opened");}
for(id in obj){if(obj[id]===true){$('#'+id).slideDown($.la.modalbox.accordionSpeed);$('#'+id).prev('h3').children('a').addClass("opened");}}},ldapOpenCloseLoginBoxRegistered:function(id){var obj={};$("h3 + div").each(function(i){var currentId=$(this).attr('id');if(currentId!==''){obj[currentId]=false;if(currentId===id){if($('#'+id).css('display')==='none'){obj[currentId]=true;}}}});$.la.modalbox.accordion(obj,null);}},action:{verifyParrainage:function(nom,prenom,mail,m1,m2,m3,idForm){if($('#'+nom).val()===''||$('#'+prenom).val()===''||$('#'+mail).val()===''){alert('Tu dois mettre ton prénom, ton nom et ton email');return false;}
if(!$.la.utils.verifMail($('#'+mail).val())){alert('Ton email n\'est pas valide');return false;}
if($('#'+m1).val()===''&&$('#'+m2).val()===''&&$('#'+m3).val()===''){alert('Tu dois parrainer au moins un copain');return false;}
if($('#'+m1).val()!==''&&(!$.la.utils.verifMail($('#'+m1).val()))){alert('Le premier mail n\'est pas valide');return false;}
if($('#'+m2).val()!==''&&(!$.la.utils.verifMail($('#'+m2).val()))){alert('Le deuxieme mail n\'est pas valide');return false;}
if($('#'+m3).val()!==''&&(!$.la.utils.verifMail($('#'+m3).val()))){alert('Le troisième mail n\'est pas valide');return false;}
if(typeof media_id!=='idForm'){$('#'+idForm).submit();}
return true;},sendMailParrainage:function(idForm){$.ajax({type:"POST",url:$.la.sHost+'/jeunesse/parrainage',data:$('#'+idForm).serialize(),dataType:"text",success:function(res){alert('Tes ami(e)s ont été invité(e)s');$('#'+idForm)[0].reset();}});},goThrough:function(destination,newWindow,frameWidth,frameHeight,scrolling){if(jQuery.la.action.isLogged()){if(!newWindow){var html;if(scrolling){html='<iframe id="" height="'+frameHeight+'" width="'+frameWidth+'" src="'+destination+'ticket='+jQuery.la.cookie.get("EZ_TICKET")+'" frameborder="0" scrolling="auto"></iframe>';}else{html='<iframe id="" height="'+frameHeight+'" width="'+frameWidth+'" src="'+destination+'ticket='+jQuery.la.cookie.get("EZ_TICKET")+'" frameborder="0" scrolling="no"></iframe>';}
jQuery('#iframe_content').html(html);}else{window.open(destination+'ticket='+jQuery.la.cookie.get("EZ_TICKET"));}}else{jQuery.la.action.verifyRules('/action/login/Modal?ReturnURI=');return false;}}},radio:{winRadio:null,popUpRadio:function(){if($.la.radio.winRadio!==null){try{var i;for(i in $.la.radio.winRadio){}
$.la.radio.winRadio.focus();}catch(e){$.la.radio.lancePopUpRadio();}}else{$.la.radio.lancePopUpRadio();}},lancePopUpRadio:function(){$.la.radio.winRadio=window.open(sHost+'/modalbox/radio','playerradio','width=923,height=353,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,copyhistory=no,resizable=no');$.la.radio.winRadio.focus();}},programme:{display_en_ce_moment:function(){var timestamp=Math.floor((new Date().getTime())/1000),mode='recherche_current',ts=0;timestamp=timestamp+$.la.decalage_horaire;$('div.cache').each(function(i){var tmp=$(this).attr('id').split('-'),tsend;ts=tmp[1];tsend=tmp[2];if(mode==='recherche_next'&&$(this).hasClass('next')){$(this).show();mode='efface_le_reste';}else if(mode==='recherche_current'&&$(this).hasClass('current')&&ts<=timestamp&&tsend>=timestamp){$(this).show();mode='recherche_next';}else{$(this).hide();}});window.setTimeout($.la.programme.display_en_ce_moment,6000);},display_prochaine_diffusion:function(){var timestamp=Math.floor(new Date().getTime()/1000),mode,cpt,ts;timestamp=timestamp+$.la.decalage_horaire;mode='recherche_current';cpt=0;ts=0;$('span.cache').each(function(i){var tmp=$(this).attr('id').split('-');ts=tmp[1];if(mode==='recherche_current'&&$(this).hasClass('current')&&ts>=timestamp){$(this).show();mode='recherche_next';}else{$(this).hide();}});$('span.cache').each(function(i){if($(this).css('display')==='none'){cpt=cpt+1;}});if(cpt===$('span.cache').length){if($('span.message:first')){$('span.message:first').show();}}
window.setTimeout($.la.programme.display_prochaine_diffusion,60000);}},promo:{google:{adsense:{createHtmlContainer:function(sId){return'<div class="google_ad"><div class="google_ad_ctnt" id="'+sId+'"></div></div>';},createHtmlTitle:function(oGoogleAdsense){return'<div class="title"><a href="'+oGoogleAdsense._info.feedback_url+'" target="_blank"><strong>Annonces Google</strong></a></div>';},createHtmlFlash:function(oGoogleAdsense){return'';},createHtmlImage:function(oGoogleAdsense){return'';},createHtmlHtml:function(oGoogleAdsense){return'';},createHtmlText:function(oGoogleAdsense){var s='',i;s+='<div class="ctnt">';for(i=0;i<oGoogleAdsense._ads.length;++i){s+='<div class="results">'
+'    <strong><a href="'+oGoogleAdsense._ads[i].url+'" target="_blank">'+oGoogleAdsense._ads[i].line1+'</a></strong>'
+'    <p>'+oGoogleAdsense._ads[i].line2+'<br/>'
+'    '+oGoogleAdsense._ads[i].line3+'</p>'
+'    <a href="'+oGoogleAdsense._ads[i].url+'" target="_blank">'+oGoogleAdsense._ads[i].visible_url+'</a>'
+'</div>';}
s+='</div>';return s;},_params:{google_ad_client:"ca-pub-6878558721431585",google_max_num_ads:"2",google_language:"fr",google_adtest:"off"},_createHtml:{container:$.la.promo.google.adsense.createHtmlContainer,title:$.la.promo.google.adsense.createHtmlTitle,flash:$.la.promo.google.adsense.createHtmlFlash,image:$.la.promo.google.adsense.createHtmlImage,html:$.la.promo.google.adsense.createHtmlHtml,text:$.la.promo.google.adsense.createHtmlText},_sContainerId:'googleAdsense'}}},googleMaps:{googleApiKey:'AIzaSyBD2o2cayWhsaIJ0Ndq5PzwxcROoq9p_ic',loadAPI:function(sensor,callbackFunctionName){var script=document.createElement("script");script.type="text/javascript";script.src="http://maps.googleapis.com/maps/api/js?key="+jQuery.la.googleMaps.googleApiKey+"&sensor="+sensor+"&callback="+callbackFunctionName;document.head.appendChild(script);},placeMarker:function(markerName,infoWindowName,position,mapName,draggable,name,address){window[markerName]=new google.maps.Marker({map:mapName,draggable:draggable,animation:google.maps.Animation.DROP,position:position,title:name,icon:'http://cdn1-gulli.ladmedia.fr/design/gulli_2011/images/marqueur_vert.png'});jQuery.la.googleMaps.createInfoWindow(infoWindowName,markerName,mapName,name,address);},createInfoWindow:function(infoWindowName,markerName,mapName,title,address){var contentString,linkToDirection;linkToDirection='https://maps.google.fr/maps?';linkToDirection+='daddr='+address;contentString='<div id="'+infoWindowName+'">';contentString+='<h4>'+title+'</h4>';contentString+='<div>'+address+'</div>';contentString+='<div><a href="'+linkToDirection+'" onclick="window.open(this.href); return false;">Voir la carte</a></div>';contentString+='</div>';window[infoWindowName]=new google.maps.InfoWindow({content:contentString});}}});})(jQuery);

(function($){"use strict";$.la=$.la||{};$.extend(true,$.la,{sHost:'',baseUrl:'',baseIdForm:'',tb_pathToImage:'http://www.gulli.fr/design/gulli/images/loading.gif',slider:{handleSliderSlide:function(e,ui){$('#content-scroll').attr({scrollTop:$('#content-scroll').attr('scrollHeight')-ui.value});},handleSliderSlideCommentaire:function(e,ui){$('#content-scroll-commentaire').attr({scrollTop:$('#content-scroll-commentaire').attr('scrollHeight')-ui.value});},handleSliderSlideModal:function(e,ui){$('#content-scroll-modal').attr({scrollTop:$('#content-scroll-modal').attr('scrollHeight')-ui.value});},handleSliderSlideModal2:function(e,ui){$('#content-scroll-modal2').attr({scrollTop:$('#content-scroll-modal2').attr('scrollHeight')-ui.value});},scrollDownByClick:function(idSlider,idScroll){var tmp=parseInt($(idSlider+' a').css('bottom'),10);if(tmp>0){$(idSlider).slider('value',((tmp-10)*$(idScroll).attr('scrollHeight'))/100);$(idScroll).attr({scrollTop:$(idScroll).attr('scrollHeight')-(((tmp-10)*$(idScroll).attr('scrollHeight'))/100)});}},scrollUpByClick:function(idSlider,idScroll){var tmp=parseInt($(idSlider+' a').css('bottom'),10);if(tmp<100){$(idSlider).slider('value',((tmp+10)*$(idScroll).attr('scrollHeight'))/100);$(idScroll).attr({scrollTop:$(idScroll).attr('scrollHeight')-(((tmp+10)*$(idScroll).attr('scrollHeight'))/100)});}}},programme:{updateGrillePerso:function(){$('#content-scroll li').addClass('alpha');$.ajax({url:$.la.sHost+'/import_grille_xml/array_prog_perso',dataType:'json',success:function(t){var arrayProgPerso=t,j;for(j in arrayProgPerso){if(arrayProgPerso.hasOwnProperty(j)&&arrayProgPerso[j]!==''){$('#content-scroll li.id_prog_'+arrayProgPerso[j]).addClass('nonalpha');$('#content-scroll li.id_prog_'+arrayProgPerso[j]).removeClass('alpha');}}}});},transfert:function(balise,source){var limite=30,cpt=0,nbElementsPerso;$('.liste_programmes_selection li').each(function(i){if($(this).css('display')!=='none'){cpt+=1;}});nbElementsPerso=cpt;if(source==='liste'){if(nbElementsPerso!==limite){$('#'+balise).hide();$('#perso_'+balise).show();}else{alert('Tu ne peux enregistrer que '+limite+' programmes !');}}else{$('#perso_'+balise).hide();$('#'+balise).show();}},updateProgPerso:function(){$.ajax({url:$.la.sHost+'/import_grille_xml/array_prog_perso',dataType:'json',success:function(t){var arrayProgPerso=t,j,li,li2,classPath,classPath2;for(j in arrayProgPerso){if(arrayProgPerso[j]!==''){classPath='.liste_programmes_selection li#perso_'+arrayProgPerso[j];$(classPath).show();classPath2='.liste_programmes li#'+arrayProgPerso[j];$(classPath2).hide();}}}});},envoyer:function(){var li,classPath,aProgrammes=[],cpt=0;classPath='.liste_programmes_selection li';li=$(classPath);$(classPath).each(function(i){if($(this).css('display')!=='none'){aProgrammes[cpt]=this.id.substring(6);cpt+=1;}});$.ajax({url:$.la.sHost+'/import_grille_xml/insert_prog_perso',type:'POST',data:'aProgrammes='+encodeURIComponent(aProgrammes),success:function(t){window.location.href=$.la.sHost+'/Chaine-TV/TV-Perso';}});},imgProgPerso:function(){if(document.cookie){if($.la.action.isLogged()){$('#img_perso').attr('src','/design/gulli/images/tele/img_prog_perso1.png');}else{$('#img_perso').attr('src','/design/gulli/images/tele/img_prog_perso2.png');}}},getCarouselReplay:function(id){jQuery.