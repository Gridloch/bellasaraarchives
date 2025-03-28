/**
 * v1    2012-04-01
 * v2    2012-05-10  kw a2d_StartingPageBySession=y
 * v2.1  2012-05-11  a2d_StartingPageBySession=y with ncb
 * v3    2012-05-22  kw a2d_StartingPageByDay=y
 * v4    2012-06-05  var a2d_sitekw = 'y';
 * v5    2012-07-02  var a2d_durationCappingLocation = 30*60;
 * v5.1  2012-07-03  
 * v5.2  2012-09-10  swfobject
 * v6    2012-09-21  A2D_Format
 * v6.1  2012-11-15  getDomain()
 * v6.2  2012-11-26  capping by session cookie name
 * v6.3  2012-12-18  a2d_kw_final
 * v6.4  2013-01-22  document.body
 * v6.5  2013-02-20  kw.replace /
 * v6.6  2013-02-28  kw.replace [^a-zA-Z0-9_:]
 * v6.7  2013-03-11  kw.replace(/::/g,':');
 * v6.8  2013-04-17  kw.substring(1)
 * v7    2013-05-27  a2d_documentWrite
 * v7.1  2013-06-12  A2D_SiteMobile
 * v7.2  2013-07-05  A2D_SiteDesktop
 * v7.3  2013-07-17  mt_
 * v7.4  2013-08-12  A2D_FormatSDesktop
 * v7.5  2013-12-03  A2D_SPBD A2D_SPBS
 * v7.6  2014-01-30  document.location.href.indexOf
 * v7.7  2014-03-25  a2d_ad
 */
function a2d_setCookie(c_name,value,exdays) {
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var Domaine = a2d_getDomain();
	if (Domaine != "") Domaine = "; domain=" + Domaine;
	var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString())+Domaine + "; path=/";
	document.cookie=c_name + "=" + c_value;
}
function a2d_getCookie(c_name) {
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++) {
		x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
		y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
		x=x.replace(/^\s+|\s+$/g,"");
		if (x==c_name) {
			return unescape(y);
		}
	}
}
function a2d_isFlashPresent(){
	var a2d_AvecFlash = false;
	//var playerVersion = swfobject.getFlashPlayerVersion();
	var playerVersion = getFlashPlayerVersion();
	if (playerVersion.major > 0) {
		a2d_AvecFlash = true;
	}
	return a2d_AvecFlash;
}
function a2d_getDomain() {
	var A2D_domaineComplet = document.domain;
	var A2D_qte = 0;
	var A2D_position = A2D_domaineComplet.indexOf('.');
	while (A2D_position != -1) {
		A2D_qte++;
		A2D_position = A2D_domaineComplet.indexOf('.',A2D_position+1);
	}
	var A2D_domaineSimple = A2D_domaineComplet;
	while (A2D_qte > 1) {
		A2D_domaineSimple = A2D_domaineSimple.substring(A2D_domaineSimple.indexOf('.')+1);
		A2D_qte--;
	}
	return A2D_domaineSimple;
}

/**
 * SWFObject v2.1 <http://code.google.com/p/swfobject/>
 * Copyright (c) 2007-2008 Geoff Stearns, Michael Williams, and Bobby van der Sluis
 * This software is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
 */

var b="undefined",Q="object",n="Shockwave Flash",p="ShockwaveFlash.ShockwaveFlash",P="application/x-shockwave-flash",m="SWFObjectExprInst",j=window,K=document,T=navigator,o=[],N=[],i=[],d=[],J,Z=null,M=null,l=null,e=false,A=false;
var h=function(){
	var v=typeof K.getElementById!=b&&typeof K.getElementsByTagName!=b&&typeof K.createElement!=b,
		AC=[0,0,0],
		x=null;
	if(typeof T.plugins!=b&&typeof T.plugins[n]==Q){
		x=T.plugins[n].description;
		if(x&&!(typeof T.mimeTypes!=b&&T.mimeTypes[P]&&!T.mimeTypes[P].enabledPlugin)){
			x=x.replace(/^.*\s+(\S+\s+\S+$)/,"$1");
			AC[0]=parseInt(x.replace(/^(.*)\..*$/,"$1"),10);
			AC[1]=parseInt(x.replace(/^.*\.(.*)\s.*$/,"$1"),10);
			AC[2]=/r/.test(x)?parseInt(x.replace(/^.*r(.*)$/,"$1"),10):0
		}
	} else {
		if(typeof j.ActiveXObject!=b){
			var y=null,
				AB=false;
			try{
				y=new ActiveXObject(p+".7")
			}catch(t){
				try{
					y=new ActiveXObject(p+".6");
					AC=[6,0,21];
					y.AllowScriptAccess="always"
				}catch(t){
					if(AC[0]==6){AB=true}
				}
				if(!AB){
					try{
						y=new ActiveXObject(p)
					}catch(t){}
				}
			}
			if(!AB&&y){
				try{
					x=y.GetVariable("$version");
					if(x){
						x=x.split(" ")[1].split(",");
						AC=[parseInt(x[0],10),parseInt(x[1],10),parseInt(x[2],10)]
					}
				}catch(t){}
			}
		}
	}
	var AD=T.userAgent.toLowerCase(),
		r=T.platform.toLowerCase(),
		AA=/webkit/.test(AD)?parseFloat(AD.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,
		q=false,
		z=r?/win/.test(r):/win/.test(AD),
		w=r?/mac/.test(r):/mac/.test(AD);
	/*@cc_on q=true;@if(@_win32)z=true;@elif(@_mac)w=true;@end@*/
	return{w3cdom:v,pv:AC,webkit:AA,ie:q,win:z,mac:w}
}();
function getFlashPlayerVersion(){
	return{
		major:h.pv[0],minor:h.pv[1],release:h.pv[2]
	}
}

/**
 * Site config
 */
if (typeof a2d_ncb == "undefined") var a2d_ncb = Math.floor(Math.random()*1000000000);
if (typeof a2d_protocol == "undefined") var a2d_protocol = 'http';
if (typeof a2d_domain == "undefined") var a2d_domain = 'fr.a2dfp.net';
if (typeof a2d_s == "undefined") var a2d_s = 0;
if (typeof a2d_siteid == "undefined") var a2d_siteid = 0;
if (typeof a2d_m == "undefined") var a2d_m = 'js';
if (typeof a2d_kw == "undefined") var a2d_kw = '';
if (typeof a2d_sitekw == "undefined") var a2d_sitekw = 'n';
if (typeof a2d_durationVisit == "undefined") var a2d_durationVisit = 30*60;
if (typeof a2d_durationCappingLocation == "undefined") var a2d_durationCappingLocation = 'n/a';
if (typeof a2d_documentWrite == "undefined") var a2d_documentWrite = 'y';
if (typeof a2d_prefixMetaKW == "undefined") var a2d_prefixMetaKW = 'mt_';
var a2d_adStr = '';
if (typeof a2d_ad != "undefined") var a2d_adStr = '&ad='+a2d_ad;

/**
 * General config
 */
var a2d_ts = Math.floor(new Date().getTime()/1000);
var a2d_cookieVisitName = 'A2DCAPPV2';
var a2d_cookieVisitBDName = 'A2DCAPPVBD2';
var a2d_cookieCappingLocationName = 'A2DCAPPL';
var a2d_cappingLocation = false;
var a2d_durationVisitBD = 86400;





/**
 * Capping emplacement
 * EmpId:ts:nbr|EmpId:ts:nbr|EmpId:ts:nbr
 */
if (a2d_durationCappingLocation != 'n/a') {
	//alert(a2d_cookieCappingLocation);
	var a2d_cookieCappingLocation = a2d_getCookie(a2d_cookieCappingLocationName);
	if (typeof a2d_cookieCappingLocation == "undefined") var a2d_cookieCappingLocation = '';
	var a2d_tabCookieCappingLocation = a2d_cookieCappingLocation.split("|");
	var a2d_find = false;
	for (i=0;i<a2d_tabCookieCappingLocation.length && !a2d_find;i++) {
		var a2d_tmp = a2d_tabCookieCappingLocation[i].split(":");
		if (a2d_tmp.length != 3) {
			a2d_tabCookieCappingLocation[i] = '';
		} else {
			var a2d_expire = parseInt(a2d_tmp[1])+parseInt(a2d_durationCappingLocation);
			if (a2d_expire < a2d_ts) {
				a2d_tabCookieCappingLocation[i] = '';
			} else {
				if (a2d_tmp[0] == a2d_s) {
					a2d_cappingLocation = true;
				}
			}
		}
	}
	if (!a2d_cappingLocation) {
		a2d_tabCookieCappingLocation.push(a2d_s+':'+a2d_ts+':1');
		a2d_cookieCappingLocation = '';
		for (j=0;j<a2d_tabCookieCappingLocation.length;j++) {
			if (a2d_tabCookieCappingLocation[j] != '') {
				if (a2d_cookieCappingLocation == '') {
					a2d_cookieCappingLocation = a2d_tabCookieCappingLocation[j];
				} else {
					a2d_cookieCappingLocation = a2d_cookieCappingLocation+'|'+a2d_tabCookieCappingLocation[j];
				}
			}
		}
		a2d_setCookie(a2d_cookieCappingLocationName,a2d_cookieCappingLocation,30);
	}
	a2d_durationCappingLocation = 'n/a';
}

if (!a2d_cappingLocation) {
	
	var a2d_cookieOn = 'n';
	a2d_setCookie('testcookie','123',1);
	if (a2d_getCookie('testcookie') == '123') {
		a2d_cookieOn = 'y';
	}

	var a2d_flashOn = 'n';
	if (a2d_isFlashPresent()) {
	a2d_FlashOn = 'n';
		a2d_flashOn = 'y';
	}

	var a2d_screenW = window.screen.width; 
	var a2d_screenH = window.screen.height; 
	if (document.body) {
		var a2d_browserW = document.body.offsetWidth;
		var a2d_browserH = document.body.offsetHeight;
	} else {
		var a2d_browserW = window.innerWidth;
		var a2d_browserH = window.innerHeight;
	}
	if (a2d_browserW < 640) {
		var a2d_format = 'A2D_FormatS';
	} else if (a2d_browserW < 768) {
		var a2d_format = 'A2D_FormatM';
	} else if (a2d_browserW < 960) {
		var a2d_format = 'A2D_FormatL';
	} else {
		var a2d_format = 'A2D_FormatXL';
	}

	/**
	 * Meta keywords
	 */
	var a2d_metadataKW = '';
	if (a2d_sitekw == 'y') {
		a2d_metadata = document.getElementsByTagName('meta');
		if (typeof a2d_metadata != 'undefined') {
			for (i=0; i<a2d_metadata.length; i++) {
				if (a2d_metadata[i].name == 'keywords') {
					if (a2d_metadataKW != '') {
						a2d_metadataKW += ':';
						
					}
					a2d_metadataKW += a2d_metadata[i].content.replace(/,/g,':').replace(/ /g,'').replace(/\//g,'');
				}
			}
		}
		if (a2d_metadataKW != '') {
			a2d_metadataKW = a2d_metadataKW.replace(/[^a-zA-Z0-9_:]/g, "");
			a2d_metadataKW = a2d_metadataKW.replace(/::/g,':');
			a2d_metadataKW = a2d_metadataKW.replace(/::/g,':');
			a2d_metadataKW = a2d_metadataKW.replace(/:/g,':'+a2d_prefixMetaKW);
			a2d_metadataKW = a2d_prefixMetaKW+a2d_metadataKW;
		}
		
	}
	
	/**
	 * Capping entree site par session
	 * siteid:ts:ncb|siteid:ts:ncb|siteid:ts:ncb
	 */
	var a2d_StartingPageBySession = 'n';
	if (a2d_cookieOn == 'y') {
		var a2d_cookieVisit = a2d_getCookie(a2d_cookieVisitName);
		if (typeof a2d_cookieVisit == "undefined") var a2d_cookieVisit = '';
		var a2d_tabCookieVisit = a2d_cookieVisit.split("|");
		var a2d_find = false;
		for (i=0;i<a2d_tabCookieVisit.length && !a2d_find;i++) {
			var a2d_tmp = a2d_tabCookieVisit[i].split(":");
			if (a2d_tmp.length == 3 && a2d_tmp[0] == a2d_siteid) {
				a2d_find = true;
				var a2d_expire = parseInt(a2d_tmp[1])+parseInt(a2d_durationVisit);
				if (a2d_expire < a2d_ts) {
					a2d_StartingPageBySession = 'y';
				} else if (a2d_ncb == a2d_tmp[2]) {
					a2d_StartingPageBySession = 'y';
				}
				if (a2d_StartingPageBySession == 'y') {
					a2d_tabCookieVisit[i] = a2d_siteid+':'+a2d_ts+':'+a2d_ncb;
				} else {
					a2d_tabCookieVisit[i] = a2d_siteid+':'+a2d_ts+':'+a2d_tmp[2];
				}
				a2d_cookieVisit = a2d_tabCookieVisit.join("|");
			}
		}
		if (!a2d_find) {
			a2d_StartingPageBySession = 'y';
			if (a2d_cookieVisit == '') {
				a2d_cookieVisit = a2d_siteid+':'+a2d_ts+':'+a2d_ncb;
			} else {
				a2d_cookieVisit = a2d_cookieVisit+'|'+a2d_siteid+':'+a2d_ts+':'+a2d_ncb;
			}
		}
		a2d_setCookie(a2d_cookieVisitName,a2d_cookieVisit,30);
	}
	
	/**
	 * Capping entree site par jour
	 * siteid:ts:ncb|siteid:ts:ncb|siteid:ts:ncb
	 */
	var a2d_StartingPageByDay = 'n';
	if (a2d_cookieOn == 'y') {
		var a2d_cookieVisit = a2d_getCookie(a2d_cookieVisitBDName);
		if (typeof a2d_cookieVisit == "undefined") var a2d_cookieVisit = '';
		var a2d_tabCookieVisit = a2d_cookieVisit.split("|");
		var a2d_find = false;
		for (i=0;i<a2d_tabCookieVisit.length && !a2d_find;i++) {
			var a2d_tmp = a2d_tabCookieVisit[i].split(":");
			if (a2d_tmp.length == 3 && a2d_tmp[0] == a2d_siteid) {
				a2d_find = true;
				var a2d_expire = parseInt(a2d_tmp[1])+parseInt(a2d_durationVisitBD);
				if (a2d_expire < a2d_ts) {
					a2d_StartingPageByDay = 'y';
				} else if (a2d_ncb == a2d_tmp[2]) {
					a2d_StartingPageByDay = 'y';
				}
				if (a2d_StartingPageByDay == 'y') {
					a2d_tabCookieVisit[i] = a2d_siteid+':'+a2d_ts+':'+a2d_ncb;
				} else {
					a2d_tabCookieVisit[i] = a2d_siteid+':'+a2d_ts+':'+a2d_tmp[2];
				}
				a2d_cookieVisit = a2d_tabCookieVisit.join("|");
			}
		}
		if (!a2d_find) {
			a2d_StartingPageByDay = 'y';
			if (a2d_cookieVisit == '') {
				a2d_cookieVisit = a2d_siteid+':'+a2d_ts+':'+a2d_ncb;
			} else {
				a2d_cookieVisit = a2d_cookieVisit+'|'+a2d_siteid+':'+a2d_ts+':'+a2d_ncb;
			}
		}
		a2d_setCookie(a2d_cookieVisitBDName,a2d_cookieVisit,30);
	}
	
	/**
	 * Detection mobile
	 */
	var a2d_siteMobile = 'n';
	var a2d_userAgent = navigator.userAgent;
	var a2d_regExPlain = new RegExp("iphone|opera mobile|webos|ipod|symbian|palm|blackberry","i");
	var a2d_regExAndroid = new RegExp("(.*)?(android)(.*)?(mobile)(.*)?","i");
	var a2d_regExIphone = new RegExp("(.*)?(windows)(.*)?(phone)(.*)?(os)(.*)?","i");
	if ((a2d_regExPlain.test(a2d_userAgent) || a2d_regExAndroid.test(a2d_userAgent) || a2d_regExIphone.test(a2d_userAgent)) || (document.location.href.indexOf('/m.') != -1)) {
		a2d_siteMobile = 'y';
	}
	
	/**
	 * A2D_FormatSDesktop
	 * A2D_SPBD = A2D_SPBDDesktop || A2D_SPBDMobile (StartingPageByDay)
	 * A2D_SPBS = A2D_SPBSDesktop || A2D_SPBSMobile (StartingPageBySession)
	 */
	var A2D_SPBD = '';
	var A2D_SPBS = '';
	if (a2d_siteMobile == 'n') {
		a2d_formatDesktop = a2d_format+'Desktop';
		if (a2d_StartingPageByDay == 'y') {
			A2D_SPBD = ':A2D_SPBDDesktop';
		}
		if (a2d_StartingPageBySession == 'y') {
			A2D_SPBS = ':A2D_SPBSDesktop';
		}
	} else {
		a2d_formatDesktop = a2d_format+'Mobile';
		if (a2d_StartingPageByDay == 'y') {
			A2D_SPBD = ':A2D_SPBDMobile';
		}
		if (a2d_StartingPageBySession == 'y') {
			A2D_SPBS = ':A2D_SPBSMobile';
		}
	}
	
	a2d_kw_final = a2d_kw+(a2d_kw==''?'':':')+a2d_metadataKW+(a2d_metadataKW==''?'':':')+(a2d_flashOn=='y'?'A2D_flashOn':':A2D_flashOff')+':'+a2d_format+(a2d_StartingPageBySession=='y'?':A2D_StartingPageBySession':'')+(a2d_StartingPageByDay=='y'?':A2D_StartingPageByDay':'')+(a2d_siteMobile=='y'?':A2D_SiteMobile':':A2D_SiteDesktop')+':'+a2d_formatDesktop+A2D_SPBD+A2D_SPBS;
	a2d_kw_final = a2d_kw_final.replace(/[^a-zA-Z0-9_:]/g, "");
	a2d_kw_final = a2d_kw_final.replace(/::/g,':');
	a2d_kw_final = a2d_kw_final.replace(/::/g,':');
	if (a2d_kw_final.length > 0) {
		if (a2d_kw_final.substring(0,1) == ':') {
			a2d_kw_final = a2d_kw_final.substring(1);
		}
	}
	 
	//var a2d_page = escape(document.location);
	var a2d_page = '';
	
	var a2d_urlPub = '<scri'+'pt type=\'text/javascript\' src=\''+a2d_protocol+'://'+a2d_domain+'/ad?s='+a2d_s+'&m='+a2d_m+'&kw='+a2d_kw_final+'&siteid='+a2d_siteid+'&page='+a2d_page+'&cookieOn='+a2d_cookieOn+'&flashOn='+a2d_flashOn+a2d_adStr+'&ncb='+a2d_ncb+'\'></sc'+'ript>';
	if (a2d_documentWrite == 'y') {
		document.write(a2d_urlPub);
	}

}




