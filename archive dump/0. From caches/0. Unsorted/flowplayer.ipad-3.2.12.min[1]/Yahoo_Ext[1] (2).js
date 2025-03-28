var ebScriptFileName = "Yahoo_Ext.js";


/* *********query string parameter options ********

* avoidbscalls=1 --- drop extra http calls to bs.serving-sys.com, only in IE (all versions). Does nothing for other browsers.
* firefoxForcePlay=false --- Ordinarily we force firefox to replay the default banner to fix an issue where it would not play automatically. This can be disabled using this option.


These case be in any order. The first one should be preceded by a "?" symbol. 2nd and subsequent should be preceded by a "&" symbol.

Examples:
<script>
var gstrEbPreLoadScripts = "Yahoo_Ext.js";
</script>

or:
<script>
var gstrEbPreLoadScripts = "Yahoo_Ext.js?avoidbscalls=1&firefoxForcePlay=false";
</script>

or:
<script>
var gstrEbPreLoadScripts = "Yahoo_Ext.js?firefoxForcePlay=1";
</script>

etc.




******* forced streaming ********

forced streaming can be enabled by adding the var:
var gfEbForceStreaming = 1;
.... to the tag. For example:
<script>
var gfEbForceStreaming = 1;
var gstrEbPreLoadScripts = "Yahoo_Ext.js";
</script>
<script scr="http://bs.serving-sys....." > .....etc

or:
<script>
var gfEbForceStreaming = 1;
</script>
<script>
var gstrEbPreLoadScripts = "Yahoo_Ext.js";
</script>
<script scr="http://bs.serving-sys....." > .....etc




*/

var ebScriptQuery = function(scriptPath) {
  this.scriptPath = scriptPath;
}

ebScriptQuery.prototype = {
  get: function() {	
    var srcRegex = new RegExp(this.scriptPath.replace('.', '\\.') + '(\\?.*)?$');
    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++) {
      var script = scripts[i];
      if (script.src && script.src.match(srcRegex)) {
        var query = script.src.match(/\?([^#]*)(#.*)?/);
        return !query ? '' : query[1];
      }
    }
    return '';
  },
  parse: function() {	
    var result = {};
    var query = this.get();
    var components = query.split('&');
 
    for (var i = 0; i < components.length; i++) {
      var pair = components[i].split('=');
      var name = pair[0], value = pair[1];
 
      if (!result[name]) result[name] = [];
      // decode
      if (!value) {
        value = 'true';
      } else {
        try {
          value = decodeURIComponent(value);
        } catch (e) {
          value = unescape(value);
        }
      }
 
      // MacIE way
      var values = result[name];
      values[values.length] = value;
    }
    return result;
  },
  flatten: function() {	
    var queries = this.parse();
    for (var name in queries) {
      queries[name] = queries[name][0];
    }
    return queries;
  },
  toString: function() {
    return 'ebScriptQuery [path=' + this.scriptPath + ']';
  }
}

try{
	var gEbQueries = new ebScriptQuery(ebScriptFileName).flatten();	
   }catch(e){}

// A Yahoo script on the finance page is seting the doument.domain to "finance.yahoo.com" which breaks our code references to elements on the page so we set it before the ad loads.
try
{
	if(document.domain == "finance.yahoo.com")
	{
		document.domain = document.domain;
	}
}
catch(e) {}


// ************** script addition to avoid double impression calls in IE ****05/10/2011********* //

if (mmisIE())
 {
	
	try
	{
		
		if(gEbQueries["avoidbscalls"] != "0")
		{
			avoidBScalls()
			
		}
	}catch(e){}
	
	
 }
 
function avoidBScalls() {
	try {
		var scripts = document.getElementsByTagName("script");
		for(var i = 0; i < scripts.length; i++) {
			if(scripts[i].src.indexOf("bs.serving-sys.com") > -1 ) {
				scripts[i].src = "";
			}
		}
	}
	catch(err){}
}

function mmisIE() {
	var ret = false;
	if(navigator.userAgent.indexOf("MSIE") > -1) {
		ret = true;
	}
	return ret;
}







//*************************************************************************************//


/*** Start AJAX API Functions ***/
function customScriptParams() {
	this.DU					=	null;	// Display Unit
	this.expandParams		=	null;	// parameters to pass to expand panel function after override
	this.headerPanelName	=	null;	// Name of header panel, if omitted is default panel
	this.bIsYSandboxed		=	null;	// Stores whether or not we're in the Yahoo! API environment
	this.bIsFIF				=	null;	// Stores whether or not we're in a Friendly IFrame
	this.bCanExpandSandbox	=	null;	// Stores whether or not we can expand the sandbox API
}

var csParams = new customScriptParams();

function mmYahooAPIExpand() {
	try {
		var xMin = 0;
		var xMax = 0;
		var yMin = 0;
		var yMax = 0;
		var expPanelName = typeof(csParams.expandParams[0]) == "undefined" ? csParams.DU.defaultPanel.strPanelName.toLowerCase() : csParams.expandParams[0].split(",")[0].length > 0 ? csParams.expandParams[0].split(",")[0].toLowerCase() : csParams.DU.defaultPanel.strPanelName.toLowerCase();
		xMin = csParams.DU.ad.panels[expPanelName].nXPos < 0 ? csParams.DU.ad.panels[expPanelName].nXPos : 0;
		xMax = csParams.DU.ad.panels[expPanelName].nXPos + csParams.DU.ad.panels[expPanelName].nWidth > csParams.DU.adData.nWidth ? csParams.DU.ad.panels[expPanelName].nXPos + csParams.DU.ad.panels[expPanelName].nWidth : 0;
		yMin = csParams.DU.ad.panels[expPanelName].nYPos < 0 ? csParams.DU.ad.panels[expPanelName].nYPos : 0;
		yMax = csParams.DU.ad.panels[expPanelName].nYPos + csParams.DU.ad.panels[expPanelName].nHeight > csParams.DU.adData.nHeight ? csParams.DU.ad.panels[expPanelName].nYPos + csParams.DU.ad.panels[expPanelName].nHeight : 0;
		var xVal = 0;
		var yVal = 0;
		xVal = xMin < 0 ? xMin : xMax;
		yVal = yMin < 0 ? yMin : yMax;
		Y.SandBox.vendor.expand(xVal, yVal);
	} catch (mmYahooE) {}
}

function mmYahooAPICallback(mmYEvent) {
	//console.log("mmYahooAPICallback " + mmYEvent);
	try {
		if (mmYEvent == "expanded") {
			// continue the expansion of the panel
			if (mmYEvent == "expanded") {
				csParams.DU.origShowPanel.apply(csParams.DU, csParams.expandParams);
			}
			// clear the expandParams var
			csParams.expandParams = null;
		}
	} catch (mmYahooE) { gEbDbg.error("mmYahooAPICallback(): Error: " + mmYahooE.message);	}
}

function newShowPanel() {
	csParams.expandParams = arguments;
	mmYahooAPIExpand();
}

/*** End AJAX API Functions ***/


// Barak 24/04/2012
// unloaded function rewritten - issue with gallery pages on yahoo not calling unloaded function because this.adTI != gEbTI does not evaluate.
function newUnload() {
    try {
	
     //   if (this.adTI != gEbTI) {  removed this evaluation 
			
            this.close();
            if (gfEbMSNAjax) {
                cleanPanels(this);
                var bannerTable = this.adTI.getDoc().getElementById(this.myName(ebCTemplateBSingleExpBanner.strBannerTableName));
                if (bannerTable != null) {
                    bannerTable.parentNode.removeChild(bannerTable);
                }
                gEbDisplayPage.close();
            }
            var strBannerID = "";
            if (this.objType == 1) {
                strBannerID = this.myName(ebCTemplateBSingleExpBanner.strImageName);
            } else {
                strBannerID = this.myName(ebCTemplateBSingleExpBanner.strFlashObjName);
            }
            var bannerRes = this.getElementById(strBannerID);
            if (bannerRes != null) {
                this.hideRes(bannerRes, true);
            } else {
            }
            var theIframe = gEbDisplayPage.getIframeData();
            if (theIframe != null) {
                theIframe.width = this.IframeWidth;
                theIframe.height = this.IframeHeight;
                theIframe.style.width = this.IframeStyleWidth;
                theIframe.style.height = this.IframeStyleHeight;
                theIframe.style.visibility = this.IframeVis;
                theIframe.style.border = this.IframeBorder;
            } else {
            }
      // }
    } catch (e) {
    }
}

var mmyRand = Math.floor(Math.random() * 99999999999);
window["mmOriginalEventHandlers_" + mmyRand] = window.ebCCustomEventHandlers ? new ebCCustomEventHandlers() : undefined;

function mmYCustomEventHandlers(){
	var oEH = window["mmOriginalEventHandlers_" + mmyRand];
	this.onClientScriptsLoaded = function(objName)
	{
		// Panels are opening below the banner in FF on certain pages
		try
		{
			if(gEbBC.isFF())
			{
				// This may need to be filtered out if the AJAX API has a problem with this change...
				//ebGetElementsByClassName("ad_slug_table", gEbDisplayPage.TI.getDoc().body)[0].style.display = "inline-block";
			}
		}
		catch(e) {gEbDbg.error(ebScriptFileName + ": failed setting 'ad_slug_table' to 'display:inline-block'.")}
		
		//call eventHandler from previously-loaded script.
		try {
			oEH.onClientScriptsLoaded.apply(this, arguments)
		} catch (e) {}
	}
	
	this.onBeforeAddRes = function(objName) {
	
		//call eventHandler from previously-loaded script.
		try {
			oEH.onBeforeAddRes.apply(this, arguments)
		} catch (e) {}
	}
	this.onHandleInteraction = function(objName, intName, strObjID)	{
	
		//call eventHandler from previously-loaded script.
		try {
			oEH.onHandleInteraction.apply(this, arguments)
		} catch (e) {}
	}
	this.onBeforeDefaultBannerShow = function(objName) {
		try { // entirely for new ajax api
			var yahooServeWin = window;
			
			//Check for the Yahoo! sandbox. Below is the best way to do this
			//otherwise you may cause JavaScript errors.
			csParams.bIsYSandboxed = !!(yahooServeWin.Y && Y.SandBox && Y.SandBox.vendor);
			
			
			//Check for the Yahoo! old "friendly-iframe" mode. Some sites may still be 
			// allowing / using this methodology of expansion. Again below is the best way to do this.
			csParams.bIsFIF = !!(yahooServeWin.inFIF || yahooServeWin.isAJAX);
			csParams.bCanExpandSandbox  = false;
			csParams.DU = eval(objName);
			var canTalkToTop = false;

			//Check and see if ad is running inside a sandbox that can be accessed. ALWAYS do the 
			// check like this, using a try / catch block, or you may see JavaScript errors.
			try {
				canTalkToTop = !!(top.location.href);
			} catch (e) {
				canTalkToTop = false;
			}
			
			var isSafeFrame = !!(window.$sf && $sf.ext);
			
			
			//first check for IAB SafeFrame //Jeff 30-June-2013
			if (isSafeFrame ) {
				//nothing to do in here. The SafeFrame script will handle it
			}
			// next always check for the new Yahoo! API, as that?s the new standard. 
			// If it?s there use that for communicating expansion to the webpage.
			else if (csParams.bIsYSandboxed ) {
				try {
					// Register the ad with the Yahoo! API
					Y.SandBox.vendor.register(csParams.DU.adData.nWidth, csParams.DU.adData.nHeight,  mmYahooAPICallback);
					csParams.bCanExpandSandbox  = true;
					
					// The below code overrides the show panel method so that we can adjust the Yahoo! API before showing the panel.
					csParams.DU.origShowPanel = csParams.DU.showPanel;
					csParams.DU.showPanel = newShowPanel;
					
				} catch (e) {
					csParams.bCanExpandSandbox  = false;
				}
				// DO NOT attempt to inspect the top or parent windows if inside the Yahoo! sandbox,
				// even if expansion is not working, as this will result in errors.

			} else if (csParams.bIsFIF) {
			
			/*
			* Fallback to the Yahoo! "friendly-iframe" setup for expansion here.
			* Note that talking to the top / parent window references in this
			* case is allowed.
			*/

				//console.log("Normal Script tag, since inDapIF should be true in this scenario");
			} else {
			
			/*
			* No Yahoo! supported expansion is allowed
			* Note also the Yahoo! does not support the iframe policy model
			* of expansion (i.e. DoubleClick's DARTIframe.html setup).
			*/
			
				//console.log("You should not have received this message.  This message is when no supported expansion is allowed");
			}
		} catch (e) {
			gEbDbg.error("Error: \n" + e.description + "\n" + e.message);
		} // entirely for new ajax api
		try{
			//Firefox fails to play the default banner swf in some circumstances. 
			//If not needed, this code can be disabled by adding &firefoxForcePlay=false to the script query string
			if( typeof(gEbQueries["firefoxForcePlay"]) == "undefined" ||  gEbQueries["firefoxForcePlay"] != "false" && gEbQueries["firefoxForcePlay"] != 0 ){
				if (gEbBC.isFF()){
					var ebDu = eval(objName);
					ebDu.replayRes(ebDu.getBannerRes());
				}
			}
		}catch(e){}
		
		
		//call eventHandler from previously-loaded script.
		try {
			oEH.onBeforeDefaultBannerShow.apply(this, arguments)
		} catch (e) {}
	
	};	
	
	this.onAfterDefaultBannerShow = function(objName)
	{
		try
		{
								// Barak 27/04/2012
								// check to see if spotlight element exsists on the page used for gallery . if so then look for any left over panels from previous load, if panels are found they get removed
								try
								{
									var scope = gEbDisplayPage.TI.getDoc();
									if (scope != top.document){
										
										scope = top.document;
									};
									var spotlightElement=scope.getElementById("spotlight");
									
									if(spotlightElement)
									{
										for(var z in spotlightElement.childNodes)
										{
											try
											{
											
											if(spotlightElement.childNodes[z].className == "yui-carousel-nav")
												{
												
												var mm_eyediv = scope.getElementById("eyeDiv");
										
												for (var f in mm_eyediv.childNodes)
												{
													//remove nodes with an ID matching the previous pageGUID
													try{
														if(mm_eyediv.childNodes[f].id.indexOf(scope.ebRandomNumberString) != -1)
														{
															//console.log("remove nodes with an ID matching the ebRandomNumberString: "+scope.ebRandomNumberString);
															mm_eyediv.removeChild(mm_eyediv.childNodes[f]);
															
														}
													}catch(e){}
													
													//remove a div that has a childNode script that contains a function with previous pageGUID in its name
													try{
														//console.log("try "+mm_eyediv.childNodes[f].nodeName);
														if(mm_eyediv.childNodes[f].nodeName=="DIV"){
															//console.log("DIV");
															var currentDiv = mm_eyediv.childNodes[f];
															for (var g in currentDiv.childNodes){
																if(currentDiv.childNodes[g].nodeName=="SCRIPT"){
																	//console.log("SCRIPT");
																	var currentScriptTag = currentDiv.childNodes[g];
																	if (currentScriptTag.textContent.indexOf(scope.ebRandomNumberString) != -1 ){
																		//console.log("remove a div that has a childNode script that contains a function with previous pageGUID in its name: "+scope.ebRandomNumberString);
																		mm_eyediv.removeChild(currentDiv);
																	}else{
																		//console.log("ignore a div that has a childNode script that contains a function with previous pageGUID in its name: "+currentScriptTag.textContent);
																	}
																}
															}
														}
													}catch(e){}	
													
													//remove script tag that contains a function with previous pageGUID in its name
													try{
														if(mm_eyediv.childNodes[f].nodeName=="SCRIPT"){
															var currentScriptTag = mm_eyediv.childNodes[f];
															if (currentScriptTag.textContent.indexOf(scope.ebRandomNumberString) != -1 ){
																var theParentDiv = currentScriptTag.parentNode;
																currentScriptTag.parentNode.removeChild(currentScriptTag);
																//console.log("remove script tag that contains a function with previous pageGUID in its name: "+scope.ebRandomNumberString);
															}
														}	
													}catch(e){}
												
												}												
												
												break;
												}
											
											}catch(e){}
										}
									}
								}catch(e){}
		
		
		
		}
		catch(e){}
		
		// Barak 27/04/2012
		// save the random string in a global variable, when the ad gets refreshed it is used to check for remanant elements on the gallery page.
		gEbDisplayPage.TI.getDoc().ebRandomNumberString= eval(objName).adData.strRand;
		
		if (!(csParams.bCanExpandSandbox) && !(csParams.bIsYSandboxed)) { // only act on NON AJAX ads, and definitely not on SafeFrame
			//redefine the onResize event
			var du = eval(objName);
				du.doOnResize = NEWdoOnResize
				onResizeInterval = setInterval(objName+".doOnResize()",500);  // IH changed 27/7/2010 
				
						
			try
			{
				gEbDbg.delimiter("================= Using '" + ebScriptFileName + "' Custom Script =================");
				
				// - Override the ebCalcBorderOffset global function to fix the 3 pixels panel offset in IE6
				if(gEbBC.isIE() && gEbBC.getVersion() == 6)
				{
					ebCalcBorderOffset = ebCalcBorderOffsetEx;
				}

				// Panels not opening in IE on certain pages
				try
				{
					if(gEbBC.isIE())
					{
						gEbDisplayPage.TI.getDoc().getElementById('yat-search-bar').style.clear = "none";
					}
				}
				catch(e) {gEbDbg.error(ebScriptFileName + ": 'yat-search-bar' element is not on the page.")}
				

				// Panels flash object coordinates are shifted due to overflow:auto setting of the DIV#galaxy in New Mail
				try
				{
					if(gEbBC.isFF())
					{
						// updating the CSS after 500 miliseconds as the page resets the overflow to "auto" when the ad loads.
						setTimeout(removeOverflowSetting, 500);
					}
				}
				catch(e) {}
				
				// Panels are not expanding in IE6 on some pages. Caused by the 'float:left' CSS for #yat-hd
				try
				{
					if(gEbBC.isIE() && gEbBC.getVersion() == 6)
					{
						try
						{
							gEbDisplayPage.TI.getDoc().getElementById('yat-hd').style.styleFloat = "none";
						}
						catch(e){}

						try
						{
							gEbDisplayPage.TI.getDoc().getElementById('uh_masthead').style.styleFloat = "none";
						}
						catch(e){}
					}
				}
				catch(e) {gEbDbg.error(ebScriptFileName + ": failed setting 'yat-hd' to 'float:none'.")}
			}
			catch(e) {gEbDbg.error("Error in " + ebScriptFileName + ":onAfterDefaultBannerShow(): " + e.description)}
		} // only act on NON AJAX ads
		try{
			//Firefox fails to play the default banner swf in some circumstances. 
			//If not needed, this code can be disabled by adding &firefoxForcePlay=false to the script query string
			if( typeof(gEbQueries["firefoxForcePlay"]) == "undefined" ||  gEbQueries["firefoxForcePlay"] != "false" && gEbQueries["firefoxForcePlay"] != 0 ){
				if (gEbBC.isFF()){
					var ebDu = eval(objName);
					ebDu.replayRes(ebDu.getBannerRes());
				}
			}
		}catch(e){}
		
		//call eventHandler from previously-loaded script.
		try {
			oEH.onAfterDefaultBannerShow.apply(this, arguments)
		} catch (e) {}
	
	}
	
	this.onBeforeRichFlashShow = function(objName) {
		try{
			//Firefox fails to play the default banner swf in some circumstances. 
			//If not needed, this code can be disabled by adding &firefoxForcePlay=false to the script query string
			if( typeof(gEbQueries["firefoxForcePlay"]) == "undefined" ||  gEbQueries["firefoxForcePlay"] != "false" && gEbQueries["firefoxForcePlay"] != 0 ){
				if (gEbBC.isFF()){
					var ebDu = eval(objName);
					ebDu.replayRes(ebDu.getBannerRes());
				}
			}
		}catch(e){}
		
		//call eventHandler from previously-loaded script.
		try {
			oEH.onBeforeRichFlashShow.apply(this, arguments)
		} catch (e) {}
	}
	this.onAfterRichFlashShow = function(objName) {
		try{
			//Firefox fails to play the default banner swf in some circumstances. 
			//If not needed, this code can be disabled by adding &firefoxForcePlay=false to the script query string
			if( typeof(gEbQueries["firefoxForcePlay"]) == "undefined" ||  gEbQueries["firefoxForcePlay"] != "false" && gEbQueries["firefoxForcePlay"] != 0 ){
				if (gEbBC.isFF()){
					var ebDu = eval(objName);
					ebDu.replayRes(ebDu.getBannerRes());
				}
			}
		}catch(e){}
		
		//call eventHandler from previously-loaded script.
		try {
			oEH.onAfterRichFlashShow.apply(this, arguments)
		} catch (e) {}
	}
	this.onBeforePanelShow = function(objName, panelName) {
		
		//call eventHandler from previously-loaded script.
		try {
			oEH.onBeforePanelShow.apply(this, arguments)
		} catch (e) {}
	}
	this.onAfterPanelShow = function(objName, panelName) {
	
		//call eventHandler from previously-loaded script.
		try {
			oEH.onAfterPanelShow.apply(this, arguments)
		} catch (e) {}
	}
	this.onBeforePanelHide = function(objName, panelName) {
		if (csParams.bCanExpandSandbox) {
			try {
				// This method is also asynchronous, but you don't have to wait for it. You can just call collapse
				// to collapse the sandbox and collapse the internal ad content immediately
				Y.SandBox.vendor.collapse();
			} catch (mmYahooE) {
				gEbDbg.error("onAfterPanelHide: mmYahooE Error: " + mmYahooE.message);
			}
		} else if (csParams.bIsFIF) {
			//if need be do your normal "friendly-iframe" reset code here
		}	
		
		//call eventHandler from previously-loaded script.
		try {
			oEH.onBeforePanelHide.apply(this, arguments)
		} catch (e) {}
	}
	this.onAfterPanelHide = function(objName, panelName) {
	
		//call eventHandler from previously-loaded script.
		try {
			oEH.onAfterPanelHide.apply(this, arguments)
		} catch (e) {}
	}
	this.onBeforeAdClose = function(objName) {
	
		//call eventHandler from previously-loaded script.
		try {
			oEH.onBeforeAdClose.apply(this, arguments)
		} catch (e) {}
	}
	this.onAfterAdClose = function(objName)	{
	
		//call eventHandler from previously-loaded script.
		try {
			oEH.onAfterAdClose.apply(this, arguments)
		} catch (e) {}
	}
	this.onBeforeIntroShow = function(objName) {
	
		//call eventHandler from previously-loaded script.
		try {
			oEH.onBeforeIntroShow.apply(this, arguments)
		} catch (e) {}
	}
	this.onAfterIntroShow = function(objName) {
	
		//call eventHandler from previously-loaded script.
		try {
			oEH.onAfterIntroShow.apply(this, arguments)
		} catch (e) {}
	}
	this.onBeforeIntroHide = function(objName) {
	
		//call eventHandler from previously-loaded script.
		try {
			oEH.onBeforeIntroHide.apply(this, arguments)
		} catch (e) {}
	}
	this.onAfterIntroHide = function(objName) {
	
		//call eventHandler from previously-loaded script.
		try {
			oEH.onAfterIntroHide.apply(this, arguments)
		} catch (e) {}
	}
	this.onBeforeRemShow = function(objName) {
	
		//call eventHandler from previously-loaded script.
		try {
			oEH.onBeforeRemShow.apply(this, arguments)
		} catch (e) {}
	}
	this.onAfterRemShow = function(objName) {
	
		//call eventHandler from previously-loaded script.
		try {
			oEH.onAfterRemShow.apply(this, arguments)
		} catch (e) {}
	}
	this.onBeforeRemHide = function(objName) {
	
		//call eventHandler from previously-loaded script.
		try {
			oEH.onBeforeRemHide.apply(this, arguments)
		} catch (e) {}
	}
	this.onAfterRemHide = function(objName) {
	
		//call eventHandler from previously-loaded script.
		try {
			oEH.onAfterRemHide.apply(this, arguments)
		} catch (e) {}
	}
	this.onBeforeMiniSiteShow = function(objName) {
	
		//call eventHandler from previously-loaded script.
		try {
			oEH.onBeforeMiniSiteShow.apply(this, arguments)
		} catch (e) {}
	}
	this.onAfterMiniSiteShow = function(objName) {
	
		//call eventHandler from previously-loaded script.
		try {
			oEH.onAfterMiniSiteShow.apply(this, arguments)
		} catch (e) {}
	}
	this.onBeforeMiniSiteHide = function(objName) {
	
		//call eventHandler from previously-loaded script.
		try {
			oEH.onBeforeMiniSiteHide.apply(this, arguments)
		} catch (e) {}
	}
	this.onAfterMiniSiteHide = function(objName) {
	
		//call eventHandler from previously-loaded script.
		try {
			oEH.onAfterMiniSiteHide.apply(this, arguments)
		} catch (e) {}
	}
}


window.ebCCustomEventHandlers = window.mmYCustomEventHandlers;


//adds all the banner display units to an array
function getAdProperties()
{
	try
	{
		var EB_bannersArray= new Array();
		
		var z=0;
		for (var i in gEbBanners)
		{
		
		EB_bannersArray[z] = gEbBanners[i].displayUnit;
		z++
		}
		return(EB_bannersArray);
			
	}catch(e){}
	
	
}


function check_displayElement()
{
	try
		{
		 var EBbannersArray_DU = getAdProperties();
									
			
			
			for (var i=0 ;i < EBbannersArray_DU.length;i++)
			 {
				var scope = gEbDisplayPage.TI.getDoc();

				var bannerElName= EBbannersArray_DU[i].myName("ebBannerDiv_")
				var el = scope.getElementById(bannerElName); // banner div element ID
				
				// MODIFICATION: && EBbannersArray_DU[i].bannerDiv.id != ""
				// Date: Aug. 18th 2010
				// Reason: Pushdown ads in FF (3.0.10 & 3.5.10) were getting their panels removed from the page b/c the bannerDiv.id was not populated yet.
				
				
				if(el == null){

					// looks to see if the banner Div is present on the page and if not it will remove the ad panels from the DOM								
								
								// Barak 24/04/2012
								// check to see if spotlight element exsists on the page used for gallery . if so the unloaded function gets replaced with newUnload()
								try
								{
									var spotlightElement=scope.getElementById("spotlight");
									if(spotlightElement)
									{
								    										
										for(var z in spotlightElement.childNodes)
										{
											try
											{
											
											if(spotlightElement.childNodes[z].className == "yui-carousel-nav")
												{
												EBbannersArray_DU[i].doOnUnload = newUnload; 
												
												}
											
											}catch(e){}
										
										
										
										}
										
										
									}
								
								}catch(e){}
								
								
								for (var d in EBbannersArray_DU[i].ad.panels)
								{
																
									try{
										
										var panelDiv = scope.getElementById(EBbannersArray_DU[i].ad.panels[d].panelDiv.id); // panel Div ID
										if(panelDiv != null)
										{

											EBbannersArray_DU[i].doOnUnload()
											ebReportAllInteractions();
											clearInterval(onResizeInterval);
										}
									
									}catch(e){}
								}
							  }
					// Looks to see if the north banner element exists on the page, if it is present we check to see if the element has a childnode that is the ebBannerTable which indicates that there is an expandable banner in this place, we then check to see if the css display property of the northbanner element has been changed to none, if so we remove the panels from the page.
					
					else if(scope.getElementById("northbanner"))
					    {
							var pageEl= scope.getElementById("northbanner");
							for (var z in  pageEl.childNodes)
							{
							
								try
								{
									if(pageEl.childNodes[z].id)
									{
										
										
										if(pageEl.childNodes[z].id.indexOf("ebBannerTable_") == 0  || pageEl.childNodes[z].id.indexOf("ebBannerDiv_") == 0)
										{
											if(pageEl.style.display == "none")
											{
											
											clearInterval(onResizeInterval);
											ebReportAllInteractions();
																					
											EBbannersArray_DU[i].doOnUnload();
											
											
											}
																			
										}
										
									}
								}catch(e){}
							
							}
					
						}
						
			 }
			 
		}
		catch(e){}

}

// new on resise function - added check_displayElement();
// changed on 26/03/2013 due to a system patch update
function NEWdoOnResize() {
	//console.log("NEWdoOnResize");
	check_displayElement();
	if(typeof this.checkIfAboveTheFold == 'function'){
		// old version 
		if (!this.fEbExpBanerIM && this.bannerRes != null){
			this.checkIfAboveTheFold(this.bannerRes.id);
		}
		if(this.doOnResizePanels){ // IH added 28/7/2010 for not expandable ads
			if (ebIsPreview() && !gEbBC.isIE()) {
				var strFunc = this.objName + ".doOnResizePanels()";
				window.setTimeout(strFunc, 50);
				return;
			} else this.doOnResizePanels();
		}
	} else{
		// new version (from 2_6_2_14)
		check_displayElement();
		if (!this.fEbExpBannerIM && this.bannerRes != null) {
			this.checkIfAdIsVisibile(this.bannerRes.id);
		}
		if (this.repositionAdchoiceLogo)
		{
			this.repositionAdchoiceLogo();
		}
		if (ebIsPreview() || (typeof(((window.parent).parent).gfEbPreview) != "undefined")) {
			var strFunc = this.objName + ".doOnResizePanels()";
			window.setTimeout(strFunc, 50);
			return;
		} else{
			if(this.adData.strTemplateName == "ExpBanner")
				this.doOnResizePanels();
		}
	}
	
	
}

function NEWdoOnResize_v1() {
	
}

function NEWdoOnResize_v2() {
	
}


function changeToElement(e)
{
	
	
	if (!e) var e = window.event;
	// e refers to the event
	// this refers to the HTML element which currently handles the event
	// target/srcElement refer to the HTML element the event originally took place on

}
	
function removeOverflowSetting()
{
	try
	{
		gEbDisplayPage.TI.getDoc().getElementById('galaxy').style.overflow = "visible";
	}
	catch(e) {gEbDbg.error(ebScriptFileName + ": failed set 'galaxy' to 'overflow:visible'.")}
}


function ebGetElementsByClassName(className, root, tagName)
{
 	try
	{
		root = root || document.body;
	 
		// for native implementations
		if (document.getElementsByClassName)
		{
			return root.getElementsByClassName(className);
		}
	 
		// at least try with querySelector (IE8 standards mode)
		// about 5x quicker than below
		if (root.querySelectorAll)
		{
			tagName = tagName || '';
			return root.querySelectorAll(tagName + '.' + className);
		}
	 
		// and for others... IE7-, IE8 (quirks mode), Firefox 2-, Safari 3.1-, Opera 9-
		var tagName = tagName || '*', _tags = root.getElementsByTagName(tagName), _nodeList = [];
		
		for (var i = 0, _tag; _tag = _tags[i++];)
		{
			if (_tag.className == className)
			{
				_nodeList.push(_tag);
			}
		}

		return _nodeList;
	}
	catch(e) {gEbDbg.error("Error in " + ebScriptFileName + ":ebGetElementsByClassName(): " + e.description)}
}

// Global function override to fix the 3 pixels panels offset in IE6
function ebCalcBorderOffsetEx(fLeft, refObj)
{    
  	try
	{
		var bc = (typeof(gEbStdGlobals) == "undefined") ? gEbBC : gEbStdGlobals;    
		var nBrowserVersion = (typeof(gEbStdGlobals) != "undefined") ? 3 : bc.getVersion();
		
		var nBorderOffset = 0;
				
		var fIsBody = (refObj.tagName.toLowerCase() == "body");
		var fIsTable = (refObj.tagName.toLowerCase() == "table");
		
		if ((fIsTable || fIsBody) && (bc.isIE() || bc.isFF()))
				return 0;
			
		if(refObj.tagName.toLowerCase() == "td" && (bc.isFF()&& nBrowserVersion <= 2))
			return 0;
		
		/*
			Fix for Yahoo 3 pixels panels offset in IE6
		*/
		var fIsHTMLLastElement = ((refObj.tagName.toLowerCase() == "html") && (refObj.offsetParent == null));

		if(fIsHTMLLastElement)
			return 0;

		var TI = (typeof(gEbDisplayPage) != "undefined") ? gEbDisplayPage.TI : (typeof(gEbStdGlobals) != "undefined") ? gEbStdGlobals.TIBase : gEbTI;

		var strBorderLeftWidth = bc.isIE() ? "borderLeftWidth" : "border-left-width";
		var strBorderTopWidth = bc.isIE() ? "borderTopWidth" : "border-top-width";

		var strBorderLeftStyle = bc.isIE() ? "borderLeftStyle" : "border-left-style";
		var strBorderTopStyle = bc.isIE() ? "borderTopStyle" : "border-top-style";
		
		var borderWidth = fLeft ? TI.getCurrentStyleAttr(refObj, strBorderLeftWidth) : TI.getCurrentStyleAttr(refObj, strBorderTopWidth);
		var borderStyle = fLeft ? TI.getCurrentStyleAttr(refObj, strBorderLeftStyle) : TI.getCurrentStyleAttr(refObj, strBorderTopStyle);
		  
		if (borderStyle != "none")
		{
			switch (borderWidth)
			{
				case "thick":               
					nBorderOffset = 5;
					break;
				case "medium":             
					nBorderOffset = 3;                    
					break;
				case "thin":
					nBorderOffset = 1;
					break;
				default: 
					if (borderWidth.indexOf("px") != -1)
					{
						var nOffset = parseInt(borderWidth,10);
						if (!isNaN(nOffset))
							nBorderOffset = nOffset;
					}
					break;
			}
		}    
		return nBorderOffset;
	}
	catch(e) {gEbDbg.error("Error in " + ebScriptFileName + ":ebCalcBorderOffset(): " + e.description)}
}