var Disney = Disney || {};
Disney.launchGame = function (gameConf) { console.log("GAME STARTED");
	var STAGE_ID = "gameContainer",
		stageEl = document.getElementById(STAGE_ID),
		APP_BASE_URL = "/CatalogueApplication/resources/iframe/",
		SWFOBJECT_EXPRESS_INSTALL_URL = APP_BASE_URL + "expressInstall.swf",
		API2_URL = APP_BASE_URL + "MinigameAPI_2_2_13.swf",
		API2_CONF_URL = APP_BASE_URL + "minigameAPIConfig.xml";
		props = gameConf.result.CasualGameDetail[0] ? gameConf.result.CasualGameDetail[0] : null;
	stageEl.style.display = "none";
	if (!props) {
		throw "No game properties received.";
	}
	
	document.title = props.DisplayName;
	
	function loadAndLaunch(o, success, failure) {
		stageEl.style.display = "block";
		var func = ("undefined" === typeof window[o]) ? failure : success,
			localizedAsset, escapedLocalizedAltText;

            function go(loc) {
                    if (props.GameType == "HTML5_FS" && window!=window.top && loc =="nolocalisationimage") {
                            document.getElementById("gameContainer").style.display = "none";
                            document.getElementById("newwindowbutton").style.display = "block";
                    }
                    else if (props.GameType == "HTML5_FS" && window!=window.top) {
                            window.open(props.AssetPath + props.AssetUrl);
                    }
                    else if (props.GameType == "HTML5" || props.GameType == "HTML5_FS") {
                            window.location = props.AssetPath + props.AssetUrl;
                    }
                    else {
                            func();
                    }
            }

		if (props.LocalisedAssetUrl.length) {
			localizedAsset = document.createElement("img");
			localizedAsset.src = props.LocalisedAssetUrl;
			escapedLocalizedAltText = props.LocalisedAltText;
			localizedAsset.setAttribute("alt", escapedLocalizedAltText);
			localizedAsset.setAttribute("title", escapedLocalizedAltText);
			localizedAsset.style.cursor = "pointer";
			localizedAsset.onclick = go;
			stageEl.innerHTML = "";
			stageEl.appendChild(localizedAsset);
		} else {
			go("nolocalisationimage");
		}
	}
	
	if (new RegExp(props.GameType, "i").test("unity")) {
		loadAndLaunch("unityObject", function () {
			unityObject.embedUnity(
				STAGE_ID,
				props.AssetPath + props.AssetUrl,
				props.Width,
				props.Height
			);
		}, function () {
			throw new Error("Unity games require UnityObject.js");
		});
	} else {
		var flashVars = {};
		if (props.AssetUrl.lastIndexOf("?")) {
			var assetUrl = props.AssetUrl.split("?", 2), params, param;
			if (assetUrl.length > 1) {
				props.AssetUrl = assetUrl[0];
				params = assetUrl[1].split("&amp;");
				for (var i = 0, ii = params.length; i < ii; i++) {
					param = params[i].split("=", 2);
					flashVars[param[0]] = param[1];
				}
			}
		}
		if (props.AssetUrl.lastIndexOf("/")) {
			var assetPath = props.AssetUrl.replace(/^\//, "").split("/");
			props.AssetUrl = assetPath.pop();
			props.AssetPath += assetPath.join("/") + "/";
		}
		
		var swf = {},
			//also check flash version in other lines 
			// see XD minimum flash XDVideo.minPlayerVersion in portalPlayer.js
			minimumFlashPlayerVersion = "10.2.0";
		swf.flashVars = flashVars;
		swf.params = {
			allowScriptAccess : "always",
			menu : false,
			base : props.AssetPath,
			scale : props.Scale,
			wmode : props.Wmode
		};
		swf.attributes = {
			id : STAGE_ID,
			name : STAGE_ID
		};
		
		if (new RegExp(props.GameType, "i").test("API 2.2")) {
			swf.flashVars.apiUrl = API2_URL;
			swf.flashVars.apiConfigUrl = API2_CONF_URL;
			swf.flashVars.gameConfigUrl = props.AssetPath + "API2-config.xml";
		}
		
		loadAndLaunch("swfobject", function () {
			swfobject.embedSWF(
				props.AssetPath + props.AssetUrl,
				STAGE_ID,
				props.Width,
				props.Height,
				minimumFlashPlayerVersion,
				SWFOBJECT_EXPRESS_INSTALL_URL,
				swf.flashVars,
				swf.params,
				swf.attributes
			);
		}, function () {
			throw new Error("Could not launch Flash game");
		});
	}
};


/*
Below is a collection of unknown JS functions that some games have attempted to interact with:
*/
// Unity Game (1155) requirement:
window.GetAPIData = window.GetAPIData || function(){};
window.QueryLocalizedLanguageURL = window.QueryLocalizedLanguageURL || function(){};