/**
 * SWFObject v1.4.4: Flash Player detection and embed - http://blog.deconcept.com/swfobject/
 *
 * SWFObject is (c) 2006 Geoff Stearns and is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * **SWFObject is the SWF embed script formerly known as FlashObject. The name was changed for
 *   legal reasons.
 *
 * Portions Copyright 2006 Adobe Systems Incorporated
 * + wrap with adobe.SWFObject
 * + getSWFHTML()
 *		- use NAME for name instead of id
 *		- added CODEBASE for IE fork
 *		- added alertswfo for debugging
 * + write()
 *		- added onFailFunc
 *
 */
if(typeof deconcept == "undefined") var deconcept = new Object();
if(typeof deconcept.util == "undefined") deconcept.util = new Object();
if(typeof deconcept.SWFObjectUtil == "undefined") deconcept.SWFObjectUtil = new Object();
deconcept.SWFObject = function(swf, id, w, h, ver, c, useExpressInstall, quality, xiRedirectUrl, redirectUrl, detectKey){	
	if (!document.getElementById) { return; }
	this.DETECT_KEY = detectKey ? detectKey : 'detectflash';
	this.skipDetect = deconcept.util.getRequestParameter(this.DETECT_KEY);
	this.params = new Object();
	this.variables = new Object();
	this.attributes = new Array();
	if(swf) { this.setAttribute('swf', swf); }
	if(id) { this.setAttribute('id', id); }
	if(w) { this.setAttribute('width', w); }
	if(h) { this.setAttribute('height', h); }
	if(ver) { this.setAttribute('version', new deconcept.PlayerVersion(ver.toString().split("."))); }
	this.installedVer = deconcept.SWFObjectUtil.getPlayerVersion();
	if(c) { this.addParam('bgcolor', c); }
	var q = quality ? quality : 'high';
	this.addParam('quality', q);
	this.setAttribute('useExpressInstall', useExpressInstall);
	this.setAttribute('doExpressInstall', false);
	var xir = (xiRedirectUrl) ? xiRedirectUrl : window.location;
	this.setAttribute('xiRedirectUrl', xir);
	this.setAttribute('redirectUrl', '');
	if(redirectUrl) { this.setAttribute('redirectUrl', redirectUrl); }
}
deconcept.SWFObject.prototype = {
	setAttribute: function(name, value){
		this.attributes[name] = value;
	},
	getAttribute: function(name){
		return this.attributes[name];
	},
	addParam: function(name, value){
		this.params[name] = value;
	},
	getParams: function(){
		return this.params;
	},
	addVariable: function(name, value){
		this.variables[name] = value;
	},
	getVariable: function(name){
		return this.variables[name];
	},
	getVariables: function(){
		return this.variables;
	},
	getVariablePairs: function(){
		var variablePairs = new Array();
		var key;
		var variables = this.getVariables();
		for(key in variables){
			variablePairs.push(key +"="+ variables[key]);
		}
		return variablePairs;
	},
	getSWFHTML: function() {
		var swfNode = "";
		if (navigator.plugins && navigator.mimeTypes && navigator.mimeTypes.length) { // netscape plugin architecture
			if (this.getAttribute("doExpressInstall")) { this.addVariable("MMplayerType", "PlugIn"); }
			swfNode = '<embed type="application/x-shockwave-flash" src="'+ this.getAttribute('swf') +'" width="'+ this.getAttribute('width') +'" height="'+ this.getAttribute('height') +'"';
			
			//******
			// ADBE
			// Use NAME attribute for name (deconcept uses ID)
			swfNode += ' id="'+ this.getAttribute('id') +'" name="'+ this.getAttribute('name') +'" ';
			var params = this.getParams();
			 for(var key in params){ swfNode += [key] +'="'+ params[key] +'" '; }
			var pairs = this.getVariablePairs().join("&");
			 if (pairs.length > 0){ swfNode += 'flashvars="'+ pairs +'"'; }
			swfNode += '/>';
		} else { // PC IE
			if (this.getAttribute("doExpressInstall")) { this.addVariable("MMplayerType", "ActiveX"); }
			swfNode = '<object id="'+ this.getAttribute('id') +'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+ this.getAttribute('width') +'" height="'+ this.getAttribute('height') +'"';
			
			//******
			// ADBE
			// Note: edit previous closing tag
			if( this.getAttribute('codebase')  )
			  swfNode += ' codebase="'+ this.getAttribute('codebase') + '">';
		    else
			  swfNode += '>';
			
			swfNode += '<param name="movie" value="'+ this.getAttribute('swf') +'" />';
			var params = this.getParams();
			for(var key in params) {
			 swfNode += '<param name="'+ key +'" value="'+ params[key] +'" />';
			}
			var pairs = this.getVariablePairs().join("&");
			if(pairs.length > 0) {swfNode += '<param name="flashvars" value="'+ pairs +'" />';}
			swfNode += "</object>";
		}
		
		//*****
		// ADBE
		// debugging
		if( getQueryParamValue( 'alertswfo' ) == "true" )
			alert( "writing:\n"+swfNode);
		
		return swfNode;
	},
	write: function(elementId){
		if(this.getAttribute('useExpressInstall')) {
			// check to see if we need to do an express install
			var expressInstallReqVer = new deconcept.PlayerVersion([6,0,65]);
			if (this.installedVer.versionIsValid(expressInstallReqVer) && !this.installedVer.versionIsValid(this.getAttribute('version'))) {
				this.setAttribute('doExpressInstall', true);
				this.addVariable("MMredirectURL", escape(this.getAttribute('xiRedirectUrl')));
				document.title = document.title.slice(0, 47) + " - Flash Player Installation";
				this.addVariable("MMdoctitle", document.title);
			}
		}
		if(this.skipDetect || this.getAttribute('doExpressInstall') || this.installedVer.versionIsValid(this.getAttribute('version'))){
			var n = (typeof elementId == 'string') ? document.getElementById(elementId) : elementId;
			n.innerHTML = this.getSWFHTML();
			return true;
		}else{
			if(this.getAttribute('redirectUrl') != "") {
				document.location.replace(this.getAttribute('redirectUrl'));
			}
			
			//*****
			// ADBE
			if( this.getAttribute('onFailFunc') && this.getAttribute('onFailFunc') != "" )
			 {
				var func = this.getAttribute( 'onFailFunc' );
				func();
			 }
		}
		return false;
	}
}

/* ---- detection functions ---- */
deconcept.SWFObjectUtil.getPlayerVersion = function(){
	var PlayerVersion = new deconcept.PlayerVersion([0,0,0]);
	if(navigator.plugins && navigator.mimeTypes.length){
		var x = navigator.plugins["Shockwave Flash"];
		if(x && x.description) {
			PlayerVersion = new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/, ".").split("."));
		}
	}else{
		// do minor version lookup in IE, but avoid fp6 crashing issues
		// see http://blog.deconcept.com/2006/01/11/getvariable-setvariable-crash-internet-explorer-flash-6/
		try{
			var axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
		}catch(e){
			try {
				var axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
				PlayerVersion = new deconcept.PlayerVersion([6,0,21]);
				axo.AllowScriptAccess = "always"; // throws if player version < 6.0.47 (thanks to Michael Williams @ Adobe for this code)
			} catch(e) {
				if (PlayerVersion.major == 6) {
					return PlayerVersion;
				}
			}
			try {
				axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
			} catch(e) {}
		}
		if (axo != null) {
			PlayerVersion = new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));
		}
	}
	return PlayerVersion;
}
deconcept.PlayerVersion = function(arrVersion){
	this.major = arrVersion[0] != null ? parseInt(arrVersion[0]) : 0;
	this.minor = arrVersion[1] != null ? parseInt(arrVersion[1]) : 0;
	this.rev = arrVersion[2] != null ? parseInt(arrVersion[2]) : 0;
}
deconcept.PlayerVersion.prototype.versionIsValid = function(fv){
	if(this.major < fv.major) return false;
	if(this.major > fv.major) return true;
	if(this.minor < fv.minor) return false;
	if(this.minor > fv.minor) return true;
	if(this.rev < fv.rev) return false;
	return true;
}
/* ---- get value of query string param ---- */
deconcept.util = {
	getRequestParameter: function(param) {
		var q = document.location.search || document.location.hash;
		if(q) {
			var pairs = q.substring(1).split("&");
			for (var i=0; i < pairs.length; i++) {
				if (pairs[i].substring(0, pairs[i].indexOf("=")) == param) {
					return pairs[i].substring((pairs[i].indexOf("=")+1));
				}
			}
		}
		return "";
	}
}
/* fix for video streaming bug */
deconcept.SWFObjectUtil.cleanupSWFs = function() {
	if (window.opera || !document.all) return;
	var objects = document.getElementsByTagName("OBJECT");
	for (var i=0; i < objects.length; i++) {
		objects[i].style.display = 'none';
		for (var x in objects[i]) {
			if (typeof objects[i][x] == 'function') {
				objects[i][x] = function(){};
			}
		}
	}
}
// fixes bug in fp9 see http://blog.deconcept.com/2006/07/28/swfobject-143-released/
deconcept.SWFObjectUtil.prepUnload = function() {
	__flash_unloadHandler = function(){};
	__flash_savedUnloadHandler = function(){};
	if (typeof window.onunload == 'function') {
		var oldUnload = window.onunload;
		window.onunload = function() {
			deconcept.SWFObjectUtil.cleanupSWFs();
			oldUnload();
		}
	} else {
		window.onunload = deconcept.SWFObjectUtil.cleanupSWFs;
	}
}
if (typeof window.onbeforeunload == 'function') {
	var oldBeforeUnload = window.onbeforeunload;
	window.onbeforeunload = function() {
		deconcept.SWFObjectUtil.prepUnload();
		oldBeforeUnload();
	}
} else {
	window.onbeforeunload = deconcept.SWFObjectUtil.prepUnload;
}
/* add Array.push if needed (ie5) */
if (Array.prototype.push == null) { Array.prototype.push = function(item) { this[this.length] = item; return this.length; }}

/* add some aliases for ease of use/backwards compatibility */
var getQueryParamValue = deconcept.util.getRequestParameter;
var FlashObject = deconcept.SWFObject; // for legacy support

/*************************************
 ADBE SWFObject
 Wrapper for the deconcept SWFObject
**************************************/
adobe.SWFObject = function( obj )
 { 	
	// abort if media pref cookie or url param indicates noflash
	var m = getQueryParamValue( "m" );
	var nf = getQueryParamValue( "nf" );
	if( adobe.Cookie.get( 'mediapref' ) == "gif" || m == 'g' || m=="gif" || nf == "1" )
		return;
	 
	if (!document.createElement || !document.getElementById) return;
	
	// REQUIRED PARAMS
	if( !obj.swf ) return;
	var swf = obj.swf;
	
	if( !obj.id ) return;
	var id = obj.id;
	
	// Support for swappable pods (id is different for obj/embed so dhtml will work)
	if (navigator.plugins && navigator.mimeTypes && navigator.mimeTypes.length)
	{	// Plugin
		if( obj.embedID ) id = obj.embedID;
	}
	else
	{	// PCIE
		if( obj.objID ) id = obj.objID;
	}
	
	if( !obj.w ) return;
	var w = obj.w;
	
	if( !obj.h ) return;
	var h = obj.h;
	
	// DEFAULT OPTIONAL PARAMS
	var ver 				= ( !obj.ver ) ? "6" : obj.ver;
	var c					= ( !obj.c ) ? "#ffffff" : obj.c;
	var quality				= ( !obj.q ) ? "high" : obj.q;
	var useExpressInstall 	= ( !obj.useExpressInstall ) ? false : obj.useExpressInstall;
	var xiRedirectUrl 		= ( !obj.xiRedirectUrl ) ? window.location : obj.xiRedirectUrl;
	var redirectUrl 		= ( !obj.redirectUrl ) ? "" : obj.redirectUrl;
	var detectKey 			= ( !obj.detectKey ) ? "detectflash" : obj.detectKey;
	
	// create the swfo
	var swfo = new deconcept.SWFObject( swf, id, w, h, ver, c, useExpressInstall, quality, xiRedirectUrl, redirectUrl, detectKey );	
	
	// ADD EXTRA PARAMS
	if( obj.scale ) swfo.addParam( 'scale', obj.scale ); // order matters...this needs to come before salign
	if( obj.salign ) swfo.addParam( 'salign', obj.salign );
	if( obj.wmode ) swfo.addParam( 'wmode', obj.wmode );
	if( obj.menu ) swfo.addParam( 'menu', obj.menu );
	if( obj.pluginspage ) swfo.addParam ( 'pluginspage', obj.pluginspage );
	
	
	// ADD EXTRA ATTRIBUTES
	if( obj.onFailFunc ) swfo.setAttribute( 'onFailFunc', obj.onFailFunc );
	
	var name = ( obj.name ) ? obj.name : obj.id;
	swfo.setAttribute( 'name', name );
	
	if( obj.codebase ) swfo.setAttribute( 'codebase', obj.codebase );
	
	// legacy support...preferred method is expressInstall
	 if( obj.isInlineInstall == "true" ) swfo.addVariable( "MMPlayerType", "PlugIn" );
	 
	 return swfo;

 }
 
 // empty funcs to prevent js errs for times when we don't create a deconcept.SWFObject
 adobe.SWFObject.prototype = {
	setAttribute: function(){},
	getAttribute: function(){},
	addParam: function(){},
	getParams: function(){},
	addVariable: function(){},
	getVariable: function(){},
	getVariables: function(){},
	getVariablePairs: function(){},
	getSWFHTML: function() {},
	write: function(){}
  }


//var SWFObject = deconcept.SWFObject;
var SWFObject = adobe.SWFObject;
var SWFObjectUtil = deconcept.SWFObjectUtil; // ADBE