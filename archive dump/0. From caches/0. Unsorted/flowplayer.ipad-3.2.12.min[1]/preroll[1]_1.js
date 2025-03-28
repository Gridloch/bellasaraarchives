// Tools in the first section
$(function () {
	// see XD minimum flash XDVideo.minPlayerVersion in portalPlayer.js
	if ((!window.jQuery && (gameType.test("unity") || gameType.test("html5") )) || isFlashVersionSupported()) {
		// Flash Player is recent enough.
		hideFlashAlert();
	} else {
		console.log("Unsupported Flash version. Please upgrade Adobe Flash Player.");
	}
});

function isFlashVersionSupported() {
        if (typeof swfobject != 'undefined') {
                var flashPlayerVersion = swfobject.getFlashPlayerVersion(), g, a, i, ii;
		return flashPlayerVersion.major > 10 || (flashPlayerVersion.major > 9 && flashPlayerVersion.minor > 1);
	}
	else {
		return false;
	}
}

function hideFlashAlert() {
    g = document.getElementById('gameContainer'), a = g.getElementsByTagName('a');
    for (i = 0, ii = a.length; i < ii; i++) {
            if (a[i].href.match(/www.adobe.com\/go\/getflashplayer/)) {
                a[i].parentNode.removeChild(a[i]);
                break;
            }
    }
}

//Find XML tag conent in a CDATA frame
function findCdata(text, tagToFind) {
	var tagObject = $(text).find(tagToFind);
	if (tagObject.html()) {
		return $.trim(tagObject.html().replace("<!--[CDATA[", "").replace("]]-->", ""));
	} else {
		return "";
	}
}

function trimCdata(text ){
    if (text) {
        return $.trim(text.replace("<!--[CDATA[", "").replace("]]-->", ""));
    }
    else {
        console.log("CDATA text is empty")
    }

}

function hitImpressions(text) {
    $(text).find('Impression').each(function()
    {
        var actUrl = trimCdata($(this).html());
        $.ajax({
          url: actUrl ,
          success: function( data ) {}
        });
    });
}

// Filter out the given request parameter from the url
function getRequestParameterValue(name) {
	if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(location.search))
		return decodeURIComponent(name[1]);
}

function supportsPreroll() {
	var testXhr = createCORSRequest();
	return testXhr != null && supports_h264_baseline_video();
}

function supports_h264_baseline_video() {
	if (!document.createElement('video').canPlayType) {
		return false;
	}
	var v = document.createElement("video");

	var supportStr = v.canPlayType('video/mp4; codecs="avc1.4D401E, mp4a.40.2"');
	console.log("supports video/mp4; codecs=avc1.42E01E, mp4a..2 : " + supportStr);

	return supportStr != null && supportStr.length > 0;
}

// Ad player specific features start here
function calculateAdAssetBaseXmlURL(xmlDocParam, playerName) {

	try {
	
		$xml = $(xmlDocParam);
		$adConfig = $xml.find('adConfig[id=' + playerName + ']');
	
		if ($adConfig.length == 0) {
			console.log("ERROR: playerName '" + playerName + "' not found in configuration.");
			return null;
		}
		else {
			$provider = $xml.find('provider[id="adtechVAST"]');
	
			// in IE10 serviceURL returns an array of two, however we search. See serviceURL finder.
			var adParamSeparator = $provider.find('parameter[name="[separatorType]"]').attr('value');
			var adTechUrl = $provider.find('serviceURL').first().text()
				+ $adConfig.find('tag').text() + '/cc=' + $provider.find('parameter[name="cc"]').attr('value')
				+ adParamSeparator + "cfp=1;rndc=" + new Date().getTime()
				+ adParamSeparator + 'vidAs=' + $provider.find('parameter[name="vidAS"]').attr('value')
				+ adParamSeparator + 'vidRT=' + $provider.find('parameter[name="vidRT"]').attr('value')
				+ adParamSeparator + 'vidRTV=' + $provider.find('parameter[name="vidRTV"]').attr('value')
				+ adParamSeparator + 'vidVT=video-mp4'
				+ adParamSeparator + 'cors=yes' + adParamSeparator + 'rfp=1' + '&timestamp=' + new Date().getTime();
			return adTechUrl;
		}
	
	} catch(err){
		console.log("ERROR: error while downloading video content. Check request parameters.");
		return null;
	}
	

}

function createCORSRequest(method, url) {
	var xhr = new XMLHttpRequest();

	if ("withCredentials" in xhr) {
		// XHR for Chrome/Firefox/Opera/Safari.
		xhr.open(method, url, true);
	} else {
		// CORS not supported (old IE object XDomainRequest is not working).
		xhr = null;
	}
	return xhr;
}

function cleanUpAndLaunchGame(gameJsonJSData) {
	$("#videoContainer, #dslug").remove();
	Disney.launchGame(gameJsonJSData);
}

function startFallBackPreroll() {

	if (isFlashVersionSupported()) {
		try {
			//create the player and start configuring it....
			$.xdVideo = $.xdVideo || new XDVideo();
			$($.xdVideo).bind("adComplete", function(evt){
				this.removeVideoAndShowGame();
				cleanUpAndLaunchGame(gameJsonJSData);
			});
			$.xdVideo.init(videoContainerSelector, gameContainerSelector, configJson);
		} catch(err){
			throw new Error("Unsupported Flash version. Please upgrade Adobe Flash Player.");
		}
	}
	else {
		cleanUpAndLaunchGame(gameJsonJSData);
	}
}

function makeCorsRequest(baseURL, playerName, videoContainerDivId) {

	var xhr = createCORSRequest('GET', baseURL);
	if (!xhr) {
		console.log('CORS not supported');
		return;
	}

	// Response handlers.
	xhr.onload = function() {

		var text = xhr.responseText;
		var adTechUrl = calculateAdAssetBaseXmlURL(text, playerName);

		if (adTechUrl == null) {
			cleanUpAndLaunchGame(gameJsonJSData);
		}
		else {
			var videoEventsToWatch = "playing error stalled play pause click ended";
	
			//Do a second request to get the xml containing
			var xhr2 = createCORSRequest('GET', adTechUrl);
	
			// Response handlers.
			xhr2.onload = function() {
				var mediaURL = findCdata(xhr2.responseText, 'MediaFile');
				var clickThroughLink = findCdata(xhr2.responseText, 'ClickThrough');

	 			hitImpressions(xhr2.responseText);

				if (mediaURL.toLowerCase().indexOf(".mp4") < 0) {
					console.log("ERROR: Media URL is not valid, check console. Media URL: '" + mediaURL + "'");
					startFallBackPreroll(gameJsonJSData);
				}
				else {
					var videoSource = "<video id='video-player-html5' class='paused beforeplay' autoplay name='media' width='100%' height='100%'><source src='" + mediaURL + "'/></video><div class='resumeplay' style='display: block;'><div class='playarrow'></div></div>";
	
					var linkToXML = document.getElementById(videoContainerDivId);
					linkToXML.innerHTML = videoSource;
	
					$("#video-player-html5").on(videoEventsToWatch, { clickThroughLink: clickThroughLink }, prerollEvents);
					$(".resumeplay").click(function() {
						$("#video-player-html5").click();
					});
				}
	
			};
			xhr2.onerror = function() {
				console.log("ERROR: XHR2: there was an error making the second request to URL: '" + adTechUrl + "'");
				cleanUpAndLaunchGame(gameJsonJSData);
			};
	
			xhr2.send();		
		}

	};

	xhr.onerror = function() {
		console.log("ERROR: XHR1: there was an error making the first request to URL: '" + baseURL + "'");
		cleanUpAndLaunchGame(gameJsonJSData);
	};

	xhr.send();

}

function prerollEvents(event) {
	if (event.type == "play" && $(this).hasClass('beforeplay')) { $(".resumeplay").hide(); $(this).removeClass('beforeplay').removeClass('paused'); }

	if (event.type == "pause" && !$(this).hasClass('paused') || event.type == "click" && !$(this).hasClass('paused') || event.type == "click" && !$(this).hasClass('paused')) {
		$(this).addClass('paused');
		this.pause();

		if (this.currentTime !== this.duration) {
			$(".resumeplay").show();
			window.open(event.data.clickThroughLink,"_blank");
		}

	} else if (event.type == "play" && $(this).hasClass('paused') || event.type == "click" && $(this).hasClass('paused')) {
		$(this).removeClass('paused');
		$(".resumeplay").hide();
		this.play();

	} else if (event.type == "ended") {
		cleanUpAndLaunchGame(gameJsonJSData);
	}
}

function preroll(jsonPath, videoContainerDivId, gameElementId) {

	if (getRequestParameterValue("showVideo") == 'false') {
		console.log("Preroll skipped because of showVideo was false.");
		cleanUpAndLaunchGame(gameJsonJSData);
	}
	else if (supportsPreroll()) {

		var playerName = getRequestParameterValue("playerName");
		var copyXML = getRequestParameterValue("copyXML");
		var baseURL = getRequestParameterValue("adXML");

		// Get the config JSON for all parameters.
		$.getJSON(jsonPath, {}, function(data) {

			if (data != null) {
				if (!playerName) {
					playerName = data.playerName;
				}
				if (!copyXML) {
					copyXML = data.copyXML;
					if (copyXML.indexOf(".xml2") < 0) {
						// let's use our correctly encoded xml
						copyXML = copyXML+'2';
					}
				
				}
				if (!baseURL) {
					baseURL = data.adXML;
				}

				//Do a second request to get the xml containing
				var copyXmlXhr = createCORSRequest('GET', copyXML);
				// Response handlers.
				copyXmlXhr.onload = function() {

					if (copyXmlXhr.status != 200 && copyXmlXhr.status != 304) {
						console.log("ERROR: copyXML could not be downloaded on URL: '" + copyXML + "'");
						cleanUpAndLaunchGame(gameJsonJSData);
					}
					else {
						var adSlug = $(copyXmlXhr.responseText).find('item[id=adSlug]').text();
	
						makeCorsRequest(baseURL, playerName, videoContainerDivId);
	
						$("<div id='dslug' class='dslug'>" + adSlug + "</div>").prependTo('body');
					}

				};
				copyXmlXhr.onerror = function() {
					console.log("ERROR: copyXmlXhr: there was an error making the copyXML request to: '" + copyXML + "'");
					cleanUpAndLaunchGame(gameJsonJSData);
				};

				copyXmlXhr.send();

			}

		}).error(function() {
			console.log("ERROR: error while downloading configuration file '" + jsonPath + "'. Check request parameters.");
			cleanUpAndLaunchGame(gameJsonJSData);
		});
	}
	else {
		startFallBackPreroll();
	}
}


