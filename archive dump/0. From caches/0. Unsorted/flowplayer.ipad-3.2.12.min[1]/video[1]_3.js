var ua = navigator.userAgent;
var ff = false;
var IESIX = false;
var feedPID = "SV8XAd44L5LneMC7ez3yzOU7O8hS1JGd";
var releaseLoaded = false;
var release;
var t;

if(ua.indexOf("MSIE") == -1)
{
	ff = true;
}
else
{
	if(ua.indexOf("6.0") != -1)
	{
		IESIX = true;
	}
}

if (ff)
{
	document.getElementById("videoHolder").style.left = "120px";
}

tpSetCommManagerID("communicationwidget");

tpRegisterID("playerwidget");
var so = new SWFObject("swf/flvPlayer.swf", "playerwidget", "322", "241", "8.0.0.0");
so.addParam("quality", "high");
so.addParam("scale", "noscale");
so.addParam("salign", "tl");
so.addParam("menu", "true");
so.addParam("bgcolor", "#ffffff");
so.addParam("wmode", "transparent");
so.addParam("allowFullScreen", "true");
so.addParam("allowScriptAccess", "always");
so.addVariable("allowFullScreen", "true");
so.addVariable("autoPlay", "false");
so.addVariable("commManagerID", tpGetCommManagerID());
so.addVariable("height", 259);
so.addVariable("ID", "playerwidget");
so.addVariable("instanceID", tpGetInstanceID());
so.addVariable("parserURL", "swf/parser.swf");
so.addVariable("playbackManagerURL", "swf/playback.swf");
so.addVariable("qosURL", "swf/qos.swf");
so.addVariable("showFullTime", "true");
so.addVariable("skinURL", "swf/skinCinematic.swf");
so.addVariable("stylesheetURL", "css/verdana.css");
so.addVariable("useJS", tpGetUseJS());
so.addVariable("width", 322);
so.addVariable("backgroundColor", "0xffffff");
so.addVariable("controlBackgroundColor", "0xffffff");
so.addVariable("controlColor", "0xBEBEBE");
so.addVariable("controlFrameColor", "0x545759");
so.addVariable("controlHoverColor", "0x00CCFF");
so.addVariable("controlSelectedColor", "0xBEBEBE");
so.addVariable("frameColor", "0xFFFFFF");
so.addVariable("playProgressColor", "0x00CCFF");
so.addVariable("scrubberColor", "0xBEBEBE");
so.addVariable("scrubberFrameColor", "0x00CCFF");
so.addVariable("scrubTrackColor", "0xBEBEBE");
so.addVariable("textBackgroundColor", "0x383838");
so.addVariable("textColor", "0xBEBEBE");
so.write("playerDiv");

var so = new SWFObject("swf/commManager.swf", tpGetCommManagerID(), "1", "1", "8.0.0.0");
so.addParam("allowScriptAccess", "always");
so.addParam("wmode", "transparent");
so.addVariable("ID", tpGetCommManagerID());
so.addVariable("instanceID", tpGetInstanceID());
so.addVariable("registeredIDs", tpGetRegisteredIDs());
so.write("commManagerDiv");

var releaseRequest = new JSONRequest("http://feeds.theplatform.com/ps/JSON/PortalService/1.8/getReleaseList?PID=" + feedPID, "processReleases");
releaseRequest.send();

tpController.addEventListener("OnReleaseStart", "releaseStartEvent");

function writeDebug(txt)
{
	var p = document.createElement("P");
	p.innerHTML = txt;
	document.getElementById("debug").appendChild(p);
}

function processReleases(response)
{
	var releaseList = response;
	/*
	for (var j in releaseList.items[0])
	{
		writeDebug(j + ":" + releaseList.items[0][j]);
	}
	*/
	
	writeDebug("START");
	
	if (typeof(releaseList.items) == "object")
	{
		if(typeof(releaseList.items[0]) == "object")
		{
			writeDebug("BEGIN");
			release = releaseList.items[0];
			t = setInterval(playVideo,100);
		}
		else
		{
			writeDebug("STOP 2");
			alert(2);
			doReveal();
		}
	}
	else
	{
		writeDebug("STOP 1");
		alert(1);
		doReveal();
	}
}

function playVideo()
{
	writeDebug("Waiting...");
	if(typeof(tpController) == "object")
	{
		clearInterval(t);
		/*
		for (var j in release)
		{
			writeDebug(j + ":" + release[j]);
		}
		*/
		t = setInterval(checkIfReleaseHasLoaded,5000);
		tpController.setRelease(release);
	}
}

function checkIfReleaseHasLoaded()
{
	clearInterval(t);
	if (!releaseLoaded)
	{
		doReveal();
	}
}

function releaseStartEvent(evt)
{
	releaseLoaded = true;
	$("#playerDiv").fadeIn(500);
	$("#ready").fadeIn(500);
	
	for (var j in evt.data)
	{
		writeDebug(j + ":" + evt.data[j]);
	}
	
	tpController.removeEventListener("OnReleaseStart", "releaseStartEvent");
	tpController.addEventListener("OnReleaseEnd", "releaseEndEvent");
}

function releaseEndEvent(evt)
{
	doReveal();
	tpController.removeEventListener("OnReleaseEnd", "releaseEndEvent");
}

function doReveal()
{
	$("#videoHolder").fadeOut(1000);
	var flashvars = {};
	var params = {};
	params.menu = "true";
	params.scale = "noscale";
	params.wmode = "transparent";
	var attributes = {};
	swfobject.embedSWF("flashgames/" + gameToLoad, "fairies_browser", "640", "480", "9.0.0", "", flashvars, params, attributes);
}

function tryit()
{
	tpController.setReleaseURL("http://release.theplatform.com/content.select?pid=YDYEksAOKIQLQMKwnycD4h97xJPz19o7");
}