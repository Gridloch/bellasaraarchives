//****************************************************************************
// Copyright (C) thePlatform for Media, Inc. All Rights Reserved.
//****************************************************************************
// dynamically resize an element, for example, the category list
function tpResize(divID, height, width)
{
	var element = document.getElementById(divID);
	element.style.height = height + "px";
	element.style.width = width + "px";
}


// helper function for getting the "top" coordinate of an object
function tpGetTop(obj)
{
	result = 0;
	while (obj)
	{
		result += obj.offsetTop;
		obj = obj.offsetParent;
	}
	return result;
}

// helper function for getting the "left" coordinate of an object
function tpGetLeft(obj)
{
	result = 0;
	while(obj)
	{
		result += obj.offsetLeft;
		obj = obj.offsetParent;
	}
	return result;
}

// open a new pop-up window
function tpOpenNewWindow(URLtoOpen, windowName, windowFeatures)
{
	var newWindow=window.open(URLtoOpen, windowName, windowFeatures); 
}

// create a unique token for each set of player controls
var tpInstanceID = (new Date()).getTime() + "|" + Math.round(Math.random() * 100000000000000000);

function tpGetInstanceID()
{
	return tpInstanceID; 
}

//determine if we're on a mac and forego localConnections
var tpUseJS = false;
if (navigator.appVersion.indexOf("Mac")!=-1) tpUseJS = true;

function tpGetUseJS()
{
	return tpUseJS ? "true" : "false";
}

// manage a list of registered control IDs for the communication manager
var tpRegisteredIDs = new Array();

function tpRegisterID(componentName)
{
	tpRegisteredIDs.push(componentName);
}

function tpGetRegisteredIDs()
{
	var retString = "";
	var start = true;
	tpController.shutdownIDs = new Array();
	while (tpRegisteredIDs.length > 0)
	{
		if (!start) retString += "|";
		var id = tpRegisteredIDs.shift();
		tpController.shutdownIDs.push(id);
		retString += id;
		start = false;
	}
	tpRegisteredIDs.length = 0;//zap it so it isn't sitting around
	return retString;
}

// handle references to the communication manager
var tpController;
var tpCommID = "communicationwidget";
var tpExternalController;

function tpSetCommManagerID(commID)
{
	// controller
	tpController = null;
	tpCommID = null;
	tpInstanceID = null;
	tpRegisteredIDs = null;
	tpRegisteredIDs = new Array();
	tpInstanceID = (new Date()).getTime() + "|" + Math.round(Math.random() * 100000000000000000);
	tpController = new tpControllerClass();
	tpCommID = commID;
	
	//external controller
	tpCleanupExternal();
	tpExternalController = null;
	tpExternalController = new tpExternalControllerClass();
}

function tpGetCommManagerID()
{
	return tpCommID;
}

// implementation of the controller proxy in javascript
function tpControllerClass()
{
	this.events = new Object();
	this.functions = new Object();
	this.isLoading = true;
	this.canMessage = false;
	this.messageQueue = new Array();
	this.priorityQueue = new Array();
	this.sendQueue = new Array();//yet another queue for timing externalInterface calls
	this.isSending = false;
	this.sendInterval;
	this.shutdownIDs;//array to keep all the controller ids for shutdown
	this.isShutDown = false;
	this.blankString = "__blank_string__";
	
	this.register = function(callback)
	{
		if (this.events["OnPlayerLoaded"] == undefined)
		{
			var eventArray = new Array();
			eventArray.push(callback);
			this.events["OnPlayerLoaded"] = eventArray;
		}
		else
		{
			var eventArray = this.events["OnPlayerLoaded"];
			var repeat = false;
			for (var i = 0; i < eventArray.length; i++)
			{
				if (eventArray[i] == callback)
				{
					repeat = true;
					break;
				}
			}
			if (!repeat) eventArray.push(callback);
		}
		//registering for now simply means that the component will get an OnPlayerLoaded event
	}
	
	this.registerFunction = function(funcName, callback)
	{
		if (this.functions[funcName] == undefined)
		{
			var functionArray = new Array();
			functionArray.push(callback);
			this.functions[funcName] = functionArray;
			this.sendMessage("addBusFunction", tpGetCommManagerID(), [funcName, "javascript"], true);
		}
		else
		{
			var functionArray = this.functions[funcName];
			var repeat = false;
			for (var i = 0; i < functionArray.length; i++)
			{
				if (functionArray[i] == funcName)
				{
					repeat = true;
					break;
				}
			}
			if (!repeat) functionArray.push(callback);
		}
	}
	
	this.unRegisterFunction = function(funcName, callback)
	{
		if (this.functions[funcName] != undefined)
		{
			var funcs = this.functions[funcName];
			for (var i = 0; i < funcs.length; i++)
			{
				if (funcs[i] == callback)
				{
					funcs.splice(i, 1);
					break;
				}
			}
			if (funcs.length == 0)
			{
				//delete the array just to tidy things up
				delete functions[funcName];
				this.sendMessage("removeBusFunction", tpGetCommManagerID(), [funcName, "javascript"]);
			}
		}
	}
	
	//all communication to the communication manager happens here
	this.sendMessage = function(method, destination, parameters, skipBus)
	{
		var methObj = new Object();
		methObj.method = method;
		methObj.parameters = parameters;
		methObj.destination = destination;
		if (this.isLoading && !skipBus)
		{
			//these are low priority messages that should be sent only after OnPlayerLoaded is fired
			this.messageQueue.push(methObj);
		}
		else if (!this.canMessage)
		{
			//these are high priority messages (like addEventListener or registerFunction) that usually need to be sent before OnPlayerLoaded is fired
			//but we still have to wait until after the communication manager has loaded or they'll just disappear
			this.priorityQueue.push(methObj);
		}
		else
		{
			this.doSendMessage(methObj);
		}
	}
	
	this.doSendMessage = function(messageObj)//private function
	{
		if (this.isShutDown) return;
		var obj = this.thisMovie(messageObj.destination);
		
		// Flash ExternalInterface will convert any "" or " " string to null.  However,
		// in the PDK, null and "" mean different things.  So, if there are blank strings,
		// convert to a signal value, and then unconvert on the way out.
		for (var i=0; i<messageObj.parameters.length; i++)
		{
			var param = messageObj.parameters[i];
			if (typeof param == "string" && (param.length == 0 || param == " "))
			{
				messageObj.parameters[i] = this.blankString;
			}
		}
		obj.execute(messageObj.method, messageObj.parameters);	
	}	
	
	this.addEventListener = function(eventName, callback)
	{
		if (this.events[eventName] == undefined)
		{
			var eventArray = new Array();
			eventArray.push(callback);
			this.events[eventName] = eventArray;
			var args = [eventName, "javascript"];
			this.sendMessage("addEventListener", tpGetCommManagerID(), args, true);
		}
		else
		{
			var eventArray = this.events[eventName];
			var repeat = false;
			for (var i = 0; i < eventArray.length; i++)
			{
				if (eventArray[i] == callback)
				{
					repeat = true;
					break;
				}
			}
			if (!repeat) eventArray.push(callback);
		}
	}
	
	this.removeEventListener = function(eventName, callback)
	{
		if (this.events[eventName] != undefined)
		{
			var eventArray = this.events[eventName];
			for (var i = 0; i < eventArray.length; i++)
			{
				if (eventArray[i] == callback)
				{
					eventArray.splice(i, 1);//remove that element
					break;
				}
			}
			if (eventArray.length == 0)
			{
				//no callbacks left, zap the variable
				delete this.events[eventName];
				this.sendMessage("removeEventListener", tpGetCommManagerID(), [eventName, "javascript"])
			}
		}
	}
	
	this.dispatchEvent = function(evtName, value, sender, originator)
	{
		this.sendMessage("remoteDispatchEvent", tpGetCommManagerID(), [{type:evtName, data:value, sender:sender, originator:originator},true]);
	}
	
	this.checkMessageQueue = function()//private function
	{
		var len = this.messageQueue.length
		while (this.messageQueue.length > 0)
		{
			this.doSendMessage(this.messageQueue.shift());
		}
	}
	
	this.checkPriorityQueue = function()
	{
		while (this.priorityQueue.length > 0)
		{
			var messObj = this.priorityQueue.shift();
			this.doSendMessage(messObj);
		}
	}
	
	//all communication from the communication manager happens here
	this.receiveMessage = function(funcName, destination, args)
	{
		if (destination == "javascript")
		{
			switch(funcName)
			{
				case "receiveEvent":
					var evt = args[0];
					this.receiveEvent(evt);
					break;
				case "commReady":
					this.canMessage = true;
					this.checkPriorityQueue();
					break;
				default:
					var functionArray = this.functions[funcName];
					for (var i = 0;i < functionArray.length;i++)
					{
						var callback = functionArray[i];
						eval(callback)(args);//hit all the callbacks
					}
					break;
			}
		}
		else
		{
			//transfer the message to its final destination
			this.sendMessage(funcName, destination, args, true);
		}
	}
	
	this.receiveEvent = function(evt)
	{
		if (evt.type == "OnPlayerLoaded")
		{
			this.isLoading = false;
			this.checkMessageQueue();
		}
		
		if (this.events[evt.type]) 
		{
			var eventArray = this.events[evt.type];
			for (var i = 0; i < eventArray.length; i++)
			{
				// need to use a try/catch block, otherwise an error in a listener
				// prevents messages from getting to the rest of the listeners
				try
				{
					eval(eventArray[i])(evt);
				}
				catch (exception)
				{
				}
			}
		}
		
	}
	
	this.thisMovie = function(movieName)
	{
 		var oDoc
		if (window.frame)
		{
			oDoc = frame.contentWindow.document || frame.contentDocument.document ;
		}
		else
		{
			oDoc = document
		}
		return oDoc.getElementById(movieName);
	}

	//create a list of direct calls
	
	// PLAYER
	
	this.setRelease = function(release)
	{
		var args = [release, "javascript"];
		this.sendMessage("setRelease", tpGetCommManagerID(), args);
	}
	this.setReleaseURL = function(url)
	{
		var args = [url, "javascript"];
		this.sendMessage("setReleaseURL", tpGetCommManagerID(), args);
	}
	this.seekToPosition = function(position)
	{
		var args = [position, "javascript"];
		this.sendMessage("seekToPosition", tpGetCommManagerID(), args);
	}
	this.seekToPercentage = function(percent)
	{
		var args = [percent, "javascript"];
		this.sendMessage("seekToPercentage", tpGetCommManagerID(), args);
	}
	this.nextClip = function()
	{
		var args = ["javascript"];
		this.sendMessage("nextClip", tpGetCommManagerID(), args);
	}
	this.previousClip = function()
	{
		var args = ["javascript"];
		this.sendMessage("previousClip", tpGetCommManagerID(), args);
	}
	this.mute = function(isMute)
	{
		var args = [isMute, "javascript"];
		this.sendMessage("mute", tpGetCommManagerID(), args);
	}
	this.play = function()
	{
		var args = ["javascript"];
		this.sendMessage("play", tpGetCommManagerID(), args);
	}
	this.stop = function()
	{
		var args = ["javascript"];
		this.sendMessage("stop", tpGetCommManagerID(), args);
	}
	this.pause = function(isPaused)
	{
		var args = [isPaused, "javascript"];
		this.sendMessage("pause", tpGetCommManagerID(), args);
	}
	this.showFullScreen = function(isFullScreen)
	{
		var args = [isFullScreen, "javascript"];
		this.sendMessage("showFullScreen", tpGetCommManagerID(), args);
	}
	this.showEmailForm = function(isVisible)
	{
		var args = [isVisible, "javascript"];
		this.sendMessage("showEmailForm", tpGetCommManagerID(), args);
	}
	this.showLinkForm = function(isVisible)
	{
		var args = [isVisible, "javascript"];
		this.sendMessage("showLinkForm", tpGetCommManagerID(), args);
	}
	this.useDefaultPlayOverlay = function(useDefault)
	{
		var args = [useDefault,"javascript"];
		this.sendMessage("useDefaultPlayOverlay", tpGetCommManagerID(), args);
	}
	this.useDefaultLinkForm = function(useDefault)
	{
		var args = [useDefault,"javascript"];
		this.sendMessage("useDefaultLinkForm", tpGetCommManagerID(), args);
	}
	this.useDefaultEmailForm = function(useDefault)
	{
		var args = [useDefault,"javascript"];
		this.sendMessage("useDefaultEmailForm", tpGetCommManagerID(), args);
	}
	this.getSubtitleLanguage = function()
	{
		var args = ["javascript"];
		this.sendMessage("getSubtitleLanguage", tpGetCommManagerID(), args);
	}
	this.clickPlayButton = function()
	{
		var args = ["javascript"];
		this.sendMessage("clickPlayButton", tpGetCommManagerID(), args);
	}
	this.disablePlayerControls = function(disable)
	{
		var args = [disable, "javascript"];
		this.sendMessage("disablePlayerControls", tpGetCommManagerID(), args);
	}
	this.setSubtitleLanguage = function(language)
	{
		var args = [language, "javascript"];
		this.sendMessage("setSubtitleLanguage", tpGetCommManagerID(), args);
	}	
	this.getPlayerVariables = function(names)
	{
		var args = [names, "javascript"];
		this.sendMessage("getPlayerVariables", tpGetCommManagerID(), args);	
	}
	this.setVolume = function(volume)
	{
		var args = [volume, "javascript"];
		this.sendMessage("setVolume", tpGetCommManagerID(), args);
	}
	
	// RELEASE MODEL
	
	this.refreshReleaseModel = function(category, sort, range, search, params, secondaryParams)
	{
		var args = [category, sort, range, search, params, "javascript", secondaryParams];
		this.sendMessage("refreshReleaseModel", tpGetCommManagerID(), args);
	}
	
	// CATEGORY MODEL
	
	this.refreshCategoryModel = function()
	{
		var args = ["javascript"];
		this.sendMessage("refreshCategoryModel", tpGetCommManagerID(), args);
	}
	
	// NAVIGATION
	
	this.nextRange = function()
	{
		var args = ["javascript"];
		this.sendMessage("nextRange", tpGetCommManagerID(), args);
	}
	this.previousRange = function()
	{
		var args = ["javascript"];
		this.sendMessage("previousRange", tpGetCommManagerID(), args);
	}
	
	
	// CLIP INFO
	
	this.setClipInfo = function(clip)
	{
		var args = [clip, "javascript"];
		this.sendMessage("setClipInfo", tpGetCommManagerID(), args);
	}
	
	// CATEGORY LIST

	this.clearCategorySelection = function() 
	{		
		var args = ["javascript"];
		this.sendMessage("clearCategorySelection", tpGetCommManagerID(), args);
	}

	// RELEASE LIST
	
	this.suspendPlayAll = function(suspend) 
	{		
		var args = [suspend, "javascript"];
		this.sendMessage("suspendPlayAll", tpGetCommManagerID(), args);
	}
	this.playNext = function(wrapAround) 
	{		
		var args = [wrapAround, "javascript"];
		this.sendMessage("playNext", tpGetCommManagerID(), args);
	}
	this.playPrevious = function(wrapAround) 
	{		
		var args = [wrapAround, "javascript"];
		this.sendMessage("playPrevious", tpGetCommManagerID(), args);
	}
	
	// GENERAL
	
	this.shutDown = function()
	{
		var args = ["javascript"];
		for (var i = 0; i < this.shutdownIDs.length; i++)
		{
			this.sendMessage("shutDown", this.shutdownIDs[i], args);
		}
		this.sendMessage("shutDown", tpGetCommManagerID(), args);
		this.isShutDown = true;//prevent any more messages		
	}
}

function tpReceiveMessage(funcName, destination, args)
{
	tpController.receiveMessage(funcName, destination, args);
}


//functions for controlling external players

var tpPlayerName = "playerwidget";
var tpHolderName = "pdkHolder";
var tpExternalJS;

function tpSetPlayerIDForExternal(playerName)
{
	tpPlayerName = playerName;
}

function tpSetHolderIDForExternal(holderName)
{
	tpHolderName = holderName;
}

function tpLoadExternalMediaJS()
{
	tpExternalJS = tpLoadExternalMediaJS.arguments;
	
	for (var i = 0; i < tpExternalJS.length; i++)
	{
		tpLoadScript(tpExternalJS[i]);
	}
}

function tpCleanupExternal()
{
	if (tpExternalJS)//if there's no external js, then nothing was loaded in
	{
		var scripts = window.document.getElementsByTagName('head')[0].getElementsByTagName('script');
		for (var i = 0; i < scripts.length;i++)
		{
			for (var j = 0; j < tpExternalJS.length; j++)
			{
				if (scripts[i].src == tpExternalJS[j])
				{
					window.document.getElementsByTagName('head')[0].removeChild(scripts[i]);
					break;
				}
			}
		}
		tpExternalJS.length = 0;
	}
	if (tpExternalController)
	{
		tpExternalController.cleanup();
	}
}


/////////////////////////////////////////////////////////////////////

tpScriptLoader = new ScriptLoader();

// called from flash via ExternalInterface
function tpLoadJScript(scriptFile, callback, id, atts)
{
	tpScriptLoader.addScript(scriptFile, callback, id, atts);
}

// need to wrap method to fix scoping issue on callback
function callbackDispatcher(loadObj) { tpScriptLoader.callbackDispatcher(loadObj) }
function invokeCallbacks(loadObj) { tpScriptLoader.invokeCallbacks() }

/////////////////////////////////////////////////////////////////////
//					L O A D   O B J E C T
/////////////////////////////////////////////////////////////////////
function LoadObj(scriptFile, callback, id, atts)
{
	this.script = scriptFile;
	this.callback = callback;
	this.id = id;
	this.atts = atts;
}

/////////////////////////////////////////////////////////////////////
//					S C R I P T   L O A D E R
/////////////////////////////////////////////////////////////////////


// constructor
function ScriptLoader()
{
	// queued up for loading scripts
	this.scriptQueue = new Array();
	
	// queued up for invoking callbacks
	this.callbackQueue = new Array();
}

/////////////////////////////////////////////////////////////////////
ScriptLoader.prototype.addScript = function(scriptFile, callback, id, atts)
{
	// We need the last item in the scriptQueue to be a "dummy".
	// This will ensure that the callback for the last item in the 
	// queue will be defined when it is invoked.
	
	//var dummyObj = (this.scriptQueue.length) ? this.scriptQueue.pop() : new LoadObj("js/dummy.js","dummyLoaded");
	var loadObj = new LoadObj( scriptFile, callback, id, atts );
	this.scriptQueue.push(loadObj);
	//this.scriptQueue.push(dummyObj);
	
	// if the queue was empty, we need to kick
	// off the queue processing again.
	
	if (this.scriptQueue.length == 1)
		this.checkScriptQueue();
}

/////////////////////////////////////////////////////////////////////
ScriptLoader.prototype.checkScriptQueue = function()
{
	if (this.scriptQueue.length)
	{
		var loadObj = this.scriptQueue.shift();
		this.loadScript(loadObj);
	}
	else
	{
		// as a timing precaution, we wait until the queue
		// empties out before we invoke callbacks
		interval_id = setInterval("invokeCallbacks()",100) // more timing precautions :-/
		//this.invokeCallbacks();
	}
}
	
/////////////////////////////////////////////////////////////////////
ScriptLoader.prototype.callbackDispatcher = function(loadObj)
{
	for (var i in this.callbackQueue)
	{
		if (this.callbackQueue[i] == loadObj)
		{
			//alert("dup found!")
			this.checkScriptQueue();
			return;
		}
	}
	this.callbackQueue.push(loadObj);
	this.checkScriptQueue();
}

/////////////////////////////////////////////////////////////////////
ScriptLoader.prototype.invokeCallbacks = function()
{
	clearInterval(interval_id);
	while (this.callbackQueue.length)
	{
		var loadObj = this.callbackQueue.shift();
		eval(loadObj.callback)(loadObj.script);
	}
}

/////////////////////////////////////////////////////////////////////
ScriptLoader.prototype.loadScript = function(loadObj)
{
	var scriptFilename = loadObj.script;
	var callbackFunction = loadObj.callback;
	var id = loadObj.id;
	var atts = loadObj.atts;
	
	// Create script element and set it to load the requested script
	var scriptEl = window.document.createElement('script');
	scriptEl.charset = "utf-8";
	if (id) scriptEl.id = id;
	scriptEl.type = "text/javascript";
	//scriptEl.defer = true;
	if (atts)
	{
		for (var i = 0; i < atts.length; i++)
			scriptEl.setAttribute(atts[i].att, atts[i].value);
	}
	scriptEl.src = scriptFilename;
	
	if (callbackFunction)
	{
		// Function to be called when script has finished loading
		var _onFinished = function(_loadObj, _callback)
		{
			// Invoke the callback function
			_callback(_loadObj)

			// Clean up event handlers
			this.onreadystatechange = null;
			this.onload = null;
			this.onerror = null;
		};

		// Set callback for IE
		// In defiance of MSDN documentation IE's script object has no onload handler
		scriptEl.onreadystatechange = function()
		{
			_onFinished(loadObj, callbackDispatcher);
		};

		// Set callback for W3C-compatible browsers
		scriptEl.onload = function()
		{
			_onFinished(loadObj, callbackDispatcher);
		};
		// Set another callback for W3C-compatible browsers
		// since onreadystatechange for IE also fires in case of an error
		scriptEl.onerror = function()
		{
			_onFinished(loadObj, callbackDispatcher);
		};
	}

	// Add script element to the document
	window.document.getElementsByTagName('head')[0].appendChild(scriptEl);
}

/////////////////////////////////////////////////////////////////////
// ORIGINAL LOADSCRIPT - USED BY MOVENETWORKS 
/////////////////////////////////////////////////////////////////////
function tpLoadScript(scriptFilename, callbackFunction, id, atts)
{
   	// Create script element and set it to load the requested script
   	var scriptEl = window.document.createElement('script');
   	scriptEl.charset = "utf-8";
   	if (id) scriptEl.id = id;
   	scriptEl.type = "text/javascript";
   	//scriptEl.defer = true;
   	if (atts)
   	{
   		for (var i = 0; i < atts.length; i++)
   		{
   			scriptEl.setAttribute(atts[i].att, atts[i].value);
   		}
   	}
   	scriptEl.src = scriptFilename;
   	if (callbackFunction)
   	{
   		// Function to be called when script has finished loading
   		var _onFinished = function(_callbackFunction, _scriptFilename)
   		{
   			// Invoke the callback function
   			_callbackFunction(_scriptFilename);
   
   			// Clean up event handlers
   			this.onreadystatechange = null;
   			this.onload = null;
   			this.onerror = null;
   		};
   
   		// Set callback for IE
   		// In defiance of MSDN documentation IE's script object has no onload handler
   		scriptEl.onreadystatechange = function()
   		{
   			_onFinished(callbackFunction, scriptFilename);
   		};
   
   		// Set callback for W3C-compatible browsers
   		scriptEl.onload = function()
   		{
   			_onFinished(callbackFunction, scriptFilename);
   		};
   		// Set another callback for W3C-compatible browsers
   		// since onreadystatechange for IE also fires in case of an error
   		scriptEl.onerror = function()
   		{
   			_onFinished(callbackFunction, scriptFilename);
   		};
   	}
   
   	// Add script element to the document
   	window.document.getElementsByTagName('head')[0].appendChild(scriptEl);
}

/////////////////////////////////////////////////////////////////////



//constructor for tpExternalControl
function tpExternalControllerClass()
{
	this.extPlayers = new Array();
	this.curPlayer = null;
	
	this.registerExternalPlayer = function(type, callback)
	{
		var playObj = {type:type, callback:callback};
		this.extPlayers.push(playObj);
	}
	
	this.routeMessage = function(funcName, args)
	{
		switch (funcName)
		{
			case "closePlayer":
				if (this.curPlayer != null) this.curPlayer.callback.closePlayer();
				this.curPlayer = null;
				break;
			case "resizeMP":
				var type = args[0];
				for (var i = 0; i < this.extPlayers.length; i++)
				{
					if (this.extPlayers[i].type == type)
					{
						this.curPlayer = this.extPlayers[i];
						break;
					}
				}
				//fall through
			default:
				if (this.curPlayer != null) this.curPlayer.callback[funcName](args);
				break;
		}
	}
	
	this.returnMessage = function(funcName, args)
	{
		tpController.thisMovie(tpPlayerName).receiveJSMessage(funcName, args);
	}
	
	this.cleanup = function()
	{
		for (var i = 0; i < this.extPlayers.length; i++)
		{
			this.extPlayers[i].callback.cleanup();
		}
		this.extPlayers.length = 0;
	}
}

function tpExternalMessage(funcName, args)
{
	tpExternalController.routeMessage(funcName, args);
}

function tpShowAlert(alertCode) 
{
	switch(alertCode)
	{
		case "FULLSCREEN_DISABLED":
		//if (deconcept.SWFObjectUtil.getPlayerVersion().major < 9)
		alert("Full screen is only available with Flash 9 or later")
		break;
	}
}

function dummy() { alert(0) }
