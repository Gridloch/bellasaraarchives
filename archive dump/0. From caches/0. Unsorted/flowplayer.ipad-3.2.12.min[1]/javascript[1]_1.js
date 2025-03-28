window.onload = startInit;

function startInit()
{
	initPrototypes();
	initSettings();
	getParameters();
	logAllInputParameters();
	getConfig();
}

function finishInit()
{
	setDefaults();
	cleanParameters();
	cleanClickURL();
	logAllParameters();
	configureAd();
	initButtons();
	uncover();
}

function initSettings()
{
	window.settings = {};
	settings.VERSION = "13.01.23";
	settings.IS_DEBUG_MODE = true;
	settings.IS_FLASH_VIDEO = false;
	settings.MONTH_ARRAY = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
	settings.CONFIG_TYPE = "";
	settings.MIN_SCROLLBAR_HEIGHT = 30;
	
	window.debug = {};
	debug.log = "";

	window.parameters = {};
	window.configParameters = {};
	configParameters.type = "";
	
	log("Version: " + settings.VERSION + "</br><br/>");
}

function setDefaults()
{
	// AD UNIT
	addDefault("clickURL", "");
	addDefault("cts", "0");
	addDefault("logoImage", "");
	addDefault("color", "0066FF");
	addDefault("backgroundColor", "");
	addDefault("buttonColor", "");
	addDefault("buttonLabel", "");
	addDefault("buttonLink", "");
	addDefault("buttonLabelColor", "FFFFFF");
	addDefault("buttonLabelBevelType", "2");
	addDefault("titleCopy", "");
	addDefault("bodyCopy", "");
	addDefault("htmlCopy", "");
	
	// VIDEO MODULE
	addDefault("video", "");
	addDefault("videoLink", "");
	addDefault("videoWidth", "400");
	addDefault("isAutoplay", "1");
	addDefault("isMuteOnMouseOut", "1");
	addDefault("videoPosterImage", "");
	addDefault("videoEndCopy", "Click To Learn More");
	addDefault("videoEndImage", "");
	addDefault("defaultVideoPlayer", "html");
	addDefault("csTracker", "http://b.scorecardresearch.com/p?c1=1&c2=6000002&c3=Video_NewStandard&c4=&c5=01&c6=&c10=1|1");
	
	// MPU MODULE
	addDefault("mpu", "");
	addDefault("mpuLink", "");
	addDefault("mpuType", "detect");
	addDefault("clickVarName", "clickTag");
	addDefault("interceptMPUClicks", "0");
	addDefault("mpuInput", "");
	
	// SOCIAL MODULES
	addDefault("maxSocialResults", "20");
	
	// FACEBOOK MODULE
	addDefault("facebookAccount", "");
	addDefault("facebookLink", "");
	addDefault("facebookToken", "191295197588118|n1Meap4D3Lq7XRYmXayxFHZNXm0");
	
	// TWITTER MODULE
	addDefault("twitterAccount", "");
	addDefault("twitterLink", "");
}

function cleanParameters()
{
	parameters.isAutoplay = toBoolean(parameters.isAutoplay);
	parameters.isMuteOnMouseOut = toBoolean(parameters.isMuteOnMouseOut);
	parameters.videoWidth = parseInt(parameters.videoWidth);
	parameters.interceptMPUClicks = toBoolean(parameters.interceptMPUClicks);
	parameters.cts = toBoolean(parameters.cts);
	parameters.ctsTarget = (parameters.cts) ? "_top" : "_blank";
	parameters.buttonLabelBevelType = parseInt(parameters.buttonLabelBevelType);
	parameters.maxSocialResults = parseInt(parameters.maxSocialResults);
	parameters.backgroundColor = (parameters.backgroundColor) ? parameters.backgroundColor : parameters.color;
	parameters.buttonColor = (parameters.buttonColor) ? parameters.buttonColor : parameters.color;
}

function configureAd()
{
	var adWidth = 5;
	var adHeight = 260;
	
	if (parameters.video)
	{	
		addVideoModule();
		adWidth += parameters.videoWidth + 5;
	}
	
	if (parameters.mpu)
	{	
		addMPUModule();
		adWidth += 300 + 5;
	}
	
	if (parameters.facebookAccount)
	{	
		addSocialModule("Facebook");
		
		adWidth += 300 + 5;
	}
	
	if (parameters.twitterAccount)
	{	
		addSocialModule("Twitter");
		
		adWidth += 300 + 5;
	}
	
	if (parameters.buttonLabel)
	{
		$("#BottomButton").html(parameters.buttonLabel);
	}
	
	if (parameters.logoImage)
	{
		$("#Logo").css("background-image", "url('" + parameters.logoImage + "')");
	}
	
	$("#Color").css("background-color", "#" + parameters.backgroundColor);
	$("#ProgressBar").css("background-color", "#" + parameters.backgroundColor);
	$(".ButtonColor").css("background-color", "#" + parameters.backgroundColor);
	$("#BottomButton").css("background-color", "#" + parameters.buttonColor);
	$("#BottomButton").css("color", "#" + parameters.buttonLabelColor);
	
	switch (parameters.buttonLabelBevelType)
	{
		case 1:
			$("#BottomButton").addClass("Bevel1");
			break;
		
		case 2:
			$("#BottomButton").addClass("Bevel2");
			break;
		
		case 3:
			$("#BottomButton").addClass("Bevel3");
			break;
	}
	
	if (adWidth > 5)
	{
		$("#VibrantAd").width(adWidth);
	}
	
	if (!parameters.logoImage && !parameters.buttonLabel)
	{
		$("#Top_BottomBorder").removeClass("Dark");
		$("#Bottom").addClass("Hidden");
	}
	else
	{
		adHeight += 40;
	}
	
	if (parameters.titleCopy || parameters.bodyCopy || parameters.htmlCopy)
	{
		addCopyModule();
		adHeight += 50;
	}
	
	$("#VibrantAd").height(adHeight);
}

function initButtons()
{
	var $Buttons = $(".Button");
	
	$Buttons.on("mouseenter", function(){$(this).addClass("Over");});
	$Buttons.on("mouseleave", function(){$(this).removeClass("Over Down");});
	$Buttons.on("mousedown", function(){$(this).addClass("Down");});
	$Buttons.on("mouseup", function(){$(this).removeClass("Down");});
	
	if (parameters.video && parameters.isMuteOnMouseOut)
	{
		// MUTE / UNMUTE ON CREATIVE MOUSEENTER / MOUSELEAVE
		
		$(document).on("mousemove", function(){VideoPlayer.soundOn(); $(document).off("mousemove");});
		$(document).on("mouseenter", function(){VideoPlayer.soundOn();});
		$(document).on("mouseleave", function(){VideoPlayer.soundOff();});
	}
	
	$(document).on("keydown", function(e){checkKeys(e);});
	$(".BackgroundButton").on("click", function(){clickThrough(parameters.clickURL, 12);});
	$("#BottomButton").on("click", function(){clickThrough(parameters.buttonLink, 13);});
	$("#Video_Cover").on("click", function(){clickThrough(parameters.videoLink, 14);});
	$("#MPU_Cover").on("click", function(){clickThrough(parameters.mpuLink, 15);});
	$("#Facebook_Cover").on("click", function(){clickThrough(parameters.facebookLink, 16);});
	$("#Facebook_Cover").on("mousewheel", function(event, delta){scrollContent_onMouseWheel($("#Facebook_Container"), $("#Facebook_ScrollBar"), delta);});
	$("#Facebook_Scroller").on("mousewheel", function(event, delta){scrollContent_onMouseWheel($("#Facebook_Container"), $("#Facebook_ScrollBar"), delta);});
	$("#Facebook_ScrollBar").on("mousedown", function(e){scrollBar_onStartDrag($(this), $("#Facebook_Container"), e);});
	$("#Facebook_ScrollTrack").on("mousedown", function(e){scrollTrack_onMouseDown($("#Facebook_Container"), $("#Facebook_ScrollBar"), e.pageY);});
	$("#Twitter_Cover").on("click", function(){clickThrough(parameters.twitterLink, 17);});
	$("#Twitter_Cover").on("mousewheel", function(event, delta){scrollContent_onMouseWheel($("#Twitter_Container"), $("#Twitter_ScrollBar"), delta);});
	$("#Twitter_Scroller").on("mousewheel", function(event, delta){scrollContent_onMouseWheel($("#Twitter_Container"), $("#Twitter_ScrollBar"), delta);});
	$("#Twitter_ScrollBar").on("mousedown", function(e){scrollBar_onStartDrag($(this), $("#Twitter_Container"), e);});
	$("#Twitter_ScrollTrack").on("mousedown", function(e){scrollTrack_onMouseDown($("#Twitter_Container"), $("#Twitter_ScrollBar"), e.pageY);});
}

function which(event)
{
	var w;
	
	if (event.which == null && (event.charCode != null || event.keyCode != null))
	{
		w = event.charCode != null ? event.charCode : event.keyCode;
	}
	else
	{
		w = event.which;
	}
	
	return w;
}

function checkKeys(event)
{
	var isShiftDown = event.shiftKey;
	var isControlDown = event.ctrlKey;
	var isCommandDown = event.metaKey
	
	var charCode = which(event);
	
	if (isShiftDown && (isControlDown || isCommandDown) && charCode == 32)
	{
		toggleDebugLog();
	}
}

function toggleDebugLog()
{
	if ($("#Debug_Log").hasClass("Visible"))
	{
		$("#Debug_Log").removeClass("Visible");
	}
	else
	{
		$("#Debug_Log").html(debug.log);
		$("#Debug_Log").addClass("Visible");
	}
}

function scrollContent_onMouseWheel($scrollcontainer, $scrollbar, delta)
{
	delta = Math.round(delta * -20);
	
	var cst = $scrollcontainer.scrollTop();
	var nst = cst + delta;
	
	$scrollcontainer.scrollTop(nst);
	
	$scrollbar.css({top: y});
	
	var percent = nst / $scrollcontainer.data("bottomPosition");
	var y = percent * $scrollbar.data("bottomPosition");
	
	if (y > $scrollbar.data("bottomPosition"))
	{
		y = $scrollbar.data("bottomPosition");
	}
	else if (y < $scrollbar.data("topPosition"))
	{
		y = $scrollbar.data("topPosition");
	}
	
	$scrollbar.css({top: y});
}

function scrollTrack_onMouseDown($scrollcontainer, $scrollbar, y)
{
	$(document).on("mouseup", function(){scrollTrack_onMouseUp();});
	
	var speed;
	
	if (y > $scrollbar.offset().top)
	{
		speed = -1;
	}
	else
	{
		speed = 1;
	}
	
	window.scrollInterval = setInterval(function(){scrollContent_onMouseWheel($scrollcontainer, $scrollbar, speed);}, 50);
}

function scrollTrack_onMouseUp()
{
	$(document).off("mouseup");
	
	clearInterval(window.scrollInterval);
}

function scrollBar_onStartDrag($scrollbar, $scrollcontainer, event)
{
	var startY = event.pageY;
	var originalTop = parseInt($scrollbar.css("top"));
	
	$(document).on("mousemove", function(e){scrollBar_onDrag($scrollbar, $scrollcontainer, startY, originalTop, e);});
	$(document).on("mouseup", function(){scrollBar_onStopDrag($scrollbar);});
}

function scrollBar_onStopDrag($scrollbar)
{
	$(document).off("mousemove");
	$(document).off("mouseup");
}

function scrollBar_onDrag($scrollbar, $scrollcontainer, startY, originalTop, event)
{
	var y = (event.pageY - startY) + originalTop;
	
	if (y > $scrollbar.data("bottomPosition"))
	{
		y = $scrollbar.data("bottomPosition");
	}
	else if (y < $scrollbar.data("topPosition"))
	{
		y = $scrollbar.data("topPosition");
	}
	
	$scrollbar.css({top: y});
	
	var percent = y / $scrollbar.data("bottomPosition");
	var scrollTop = percent * $scrollcontainer.data("bottomPosition");
	
	$scrollcontainer.scrollTop(scrollTop);
}

function addCopyModule()
{
	var copy = "";
	
	if (parameters.htmlCopy)
	{
		copy += parameters.htmlCopy;
	}
	else
	{
		copy += "<b>" + parameters.titleCopy + "</b><br/>";
		copy += parameters.bodyCopy;
	}
	
	$("#Copy").html(copy);
}

function addVideoModule()
{
	var html = "";
	
	html += "<div class=\"Module Width_" + parameters.videoWidth + "\" id=\"Module_Video\">";
	html += "	<div class=\"Video\">";
	
	if (!Modernizr.video.h264 || parameters.defaultVideoPlayer == "flash")
	{
		// Use Flash Video Player
		settings.IS_FLASH_VIDEO = true;

		html += "<div class=\"FlashVideoContainer\" id=\"FlashVideoContainer\"></div>";

		setTimeout(function(){embedFlash("videoplayers/flashplayer.swf", "FlashVideoContainer", "FlashVideo", parameters.videoWidth, 225);}, 100);
	}
	else
	{
		// Use HTML5 Video Player
		settings.IS_FLASH_VIDEO = false;
		
		html += "		<video id=\"VideoPlayer\" width=\"" + parameters.videoWidth + "\" height=\"225\" preload=\"auto\"";
		
		if (parameters.isMuteOnMouseOut)
		{
			html += " muted=\"true\"";
		}
		
		html += ">";
		html += "			<source src=\"" + parameters.video + "\" type=\"video/mp4\" />";
		html += "		</video>";
	}
	
	html += "	<div class=\"VideoPosterImage Hidden\" id=\"VideoPosterImage\"></div>";
	html += "	<div class=\"VideoEndCopy Hidden\" id=\"VideoEndCopy\"></div>";
	html += "	<div class=\"VideoEndImage Hidden\" id=\"VideoEndImage\"></div>";
	html += "	<div class=\"TopBorder\"></div>";
	html += "	<div class=\"LeftBorder\"></div>";
	html += "	<div class=\"RightBorder\"></div>";
	html += "	<div class=\"Cover\" id=\"Video_Cover\"></div>";
	html += "	<div class=\"VideoBigPlayButton Hidden\" id=\"VideoBigPlayButton\"></div>";
	html += "	</div>";
	html += "	<div class=\"VideoControls\">";
	html += "		<div class=\"VideoTrack\" id=\"VideoTrack\">";
	html += "			<div class=\"LoadingBar\" id=\"LoadingBar\"></div>";
	html += "			<div class=\"ProgressBar\" id=\"ProgressBar\"></div>";
	html += "			<div class=\"CurrentTime\" id=\"CurrentTime\">0:00</div>";
	html += "			<div class=\"TotalTime\" id=\"TotalTime\">0:00</div>";
	html += "		</div>";
	html += "		<div class=\"ReplayButton Button\" id=\"ReplayButton\"><div class=\"ButtonColor\"></div><div class=\"ReplayButtonImage\" id=\"ReplayButtonImage\"></div></div>";
	html += "		<div class=\"PlayPauseButton Button Play\" id=\"PlayPauseButton\"><div class=\"ButtonColor\"></div><div class=\"PlayPauseButtonImage\" id=\"PlayPauseButtonImage\"></div></div>";
	html += "		<div class=\"VolumeButton Button ";
	
	if (parameters.isMuteOnMouseOut)
	{
		html += "Off";
	}
	else
	{
		html += "On";
	}
	
	html += "\" id=\"VolumeButton\"><div class=\"ButtonColor\"></div><div class=\"VolumeButtonImage\" id=\"VolumeButtonImage\"></div></div>";
	html += "		<div class=\"LeftBreak\" id=\"LeftBreak\"><div class=\"Break Dark\"></div><div class=\"Break Lite\"></div></div>";
	html += "		<div class=\"RightBreak\" id=\"RightBreak\"><div class=\"Break Dark\"></div><div class=\"Break Lite\"></div></div>";
	html += "		<div class=\"StartBreak\" id=\"StartBreak\"></div>";
	html += "		<div class=\"EndBreak\" id=\"EndBreak\"></div>";
	html += "	</div>";
	html += "	<div class=\"Border\"></div>";
	html += "</div>";
	
	$("#Modules").append(html);
	
	if (parameters.videoPosterImage)
	{
		$("#VideoPosterImage").css("background-image", "url('" + parameters.videoPosterImage + "')");
	}
	
	if (parameters.videoEndImage)
	{
		$("#VideoEndImage").css("background-image", "url('" + parameters.videoEndImage + "')");
	}
	else if (parameters.videoEndCopy)
	{
		$("#VideoEndCopy").html(parameters.videoEndCopy);
	}
	
	initVideoPlayer();
}

function addMPUModule()
{
	var html = "";
	var src;
	
	html += "<div class=\"Module\" id=\"Module_MPU\">";
	
	if (parameters.mpuType == "detect")
	{
		if (parameters.mpu.substring(0, 7).toLowerCase() == "<iframe")
		{
			parameters.mpuType = "iframe";
		}
		else 
		{
			var front = parameters.mpu.split("?")[0];
			
			if (front.indexOf(".swf") != -1)
			{
				parameters.mpuType = "swf";
			}
			else if (front.indexOf(".jpg") != -1 || front.indexOf(".jpeg") != -1 || front.indexOf(".png") != -1 || front.indexOf(".gif") != -1)
			{
				parameters.mpuType = "image";
			}
			else
			{
				parameters.mpuType = "iframeSrc";
			}
		}
	}
	
	if (parameters.mpuType == "swf")
	{
		html += "	<div class=\"FlashMPUContainer\" id=\"FlashMPUContainer\"></div>";
		
		src = parameters.mpu;
		src = addClickTag(src);
		
		setTimeout(function(){embedFlash(src, "FlashMPUContainer", "FlashMPU", 300, 250);}, 100);
	}
	/*
	else if (parameters.mpuType == "script")
	{
		
	}
	*/
	else if (parameters.mpuType == "iframe")
	{
		src = parameters.mpu;
		src = src.replace("SRC=", "src=");
		src = src.split("src=\"")[1];
		src = src.split("\"")[0];
		src = addClickTag(src);
		
		html += "	<div class=\"IframeMPUContainer\" id=\"IframeMPUContainer\">";
		html += "		<iframe src=";
		html += src;
		html += " frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" allowtransparency=\"true\" width=\"300\" height=\"250\"></iframe>";
		html += "	</div>";
	}
	else if (parameters.mpuType == "image")
	{
		html += "	<div class=\"ImageMPUContainer\" id=\"ImageMPUContainer\">";
		html += "		<img src=\"" + parameters.mpu + "\" width=\"300\" height=\"250\" />";
		html += "	</div>";
		
		parameters.interceptMPUClicks = true;
	}
	else if (parameters.mpuType == "iframeSrc")
	{
		src = parameters.mpu;
		src = addClickTag(src);
		
		html += "	<div class=\"IframeMPUContainer\" id=\"IframeMPUContainer\">";
		html += "		<iframe src=";
		html += src;
		html += " frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" allowtransparency=\"true\" width=\"300\" height=\"250\"></iframe>";
		html += "	</div>";
	}
	
	html += "	<div class=\"TopBorder\"></div>";
	html += "	<div class=\"LeftBorder\"></div>";
	html += "	<div class=\"RightBorder\"></div>";
	html += "	<div class=\"BottomBorder\"></div>";
	
	if (parameters.interceptMPUClicks)
	{
		html += "	<div class=\"Cover\" id=\"MPU_Cover\"></div>";
	}
	
	html += "</div>";
	
	$("#Modules").append(html);
}

function addSocialModule(which)
{
	var html = "";
	
	html += "<div class=\"Module " + which + "\" id=\"Module_" + which + "\">";
	html += "	<div class=\"SocialBackground\"></div>";
	html += "	<div class=\"SocialContainer\" id=\"" + which + "_Container\">";
	html += "		<div class=\"SocialContent\" id=\"" + which + "_Content\"></div>";
	html += "	</div>";
	html += "	<div class=\"SocialTopFade\"></div>";
	html += "	<div class=\"SocialBottomFade\"></div>";
	html += "	<div class=\"SocialIcon\"></div>";
	html += "	<div class=\"SocialAvatar\" id=\"" + which + "_Avatar\"></div>";
	html += "	<div class=\"SocialAccount\" id=\"" + which + "_Account\"></div>";
	html += "	<div class=\"SocialDescription\" id=\"" + which + "_Description\"></div>";
	html += "	<div class=\"TopBorder\"></div>";
	html += "	<div class=\"LeftBorder\"></div>";
	html += "	<div class=\"RightBorder\"></div>";
	html += "	<div class=\"BottomBorder\"></div>";
	html += "	<div class=\"Cover\" id=\"" + which + "_Cover\"></div>";
	html += "	<div class=\"Scroller Hidden\" id=\"" + which + "_Scroller\">";
	html += "		<div class=\"ScrollTrack\" id=\"" + which + "_ScrollTrack\"><div class=\"ScrollTrackTop\"></div><div class=\"ScrollTrackMiddle\"></div><div class=\"ScrollTrackBottom\"></div></div>";
	html += "		<div class=\"ScrollBar\" id=\"" + which + "_ScrollBar\"><div class=\"ScrollBarTop\"></div><div class=\"ScrollBarMiddle\"></div><div class=\"ScrollBarBottom\"></div></div>";
	html += "	</div>";
	html += "	<div class=\"Blanket\" id=\"" + which + "_Blanket\"></div>";
	html += "</div>";
	
	$("#Modules").append(html);
	
	getSocial(which);
}

function getSocial(which)
{
	if (which == "Facebook")
	{
		$.ajax({
			url: "http://social.intellitxt.com/facebook/" + parameters.facebookAccount + "/posts?limit=" + parameters.maxSocialResults,
			crossDomain: true,
			dataType: "jsonp",
			jsonpCallback: "parseFacebook"
		});
		
		log("Loading Facebook ...");
	}
	else if (which == "Twitter")
	{
		$.ajax({
			url: "http://social.intellitxt.com/twitter/statuses/user_timeline.json?screen_name=" + parameters.twitterAccount,
			crossDomain: true,
			dataType: "jsonp",
			jsonpCallback: "parseTwitter"
		});
		
		log("Loading Twitter ...");
	}
}

function parseTwitter(jsonObject)
{
	log("Twitter Loaded");
	
	window.twitterResponse = jsonObject;
	
	var socialObject = {};
	var post = {};
	
	socialObject.name = jsonObject[0].user.name;
	socialObject.description = "on Twitter";
	socialObject.avatar = jsonObject[0].user.profile_image_url;
	
	socialObject.posts = new Array();
	
	for (var i = 0; i < jsonObject.length; i ++)
	{
		post = {};
		
		post.message = jsonObject[i].text;
		post.date = toDisplayDate(jsonObject[i].created_at);
		
		socialObject.posts.push(post);
	}
	
	buildSocial("Twitter", socialObject);
}

function parseFacebook(jsonObject)
{
	log("Facebook Loaded");
	
	window.facebookResponse = jsonObject;
	
	var socialObject = {};
	
	socialObject.name = jsonObject.data[0].from.name;
	socialObject.description = "on Facebook";
	socialObject.avatar = "https://graph.facebook.com/" + jsonObject.data[0].from.id + "/picture";
	
	socialObject.posts = new Array();
	
	for (var i = 0; i < jsonObject.data.length; i ++)
	{
		post = {};
		
		post.message = jsonObject.data[i].message;
		post.date = toDisplayDate(toDate(jsonObject.data[i].updated_time));
		
		if (post.message)
		{
			socialObject.posts.push(post);
		}
	}
	
	buildSocial("Facebook", socialObject);

}

function buildSocial(which, socialObject)
{
	$("#" + which + "_Account").html(socialObject.name);
	$("#" + which + "_Description").html(socialObject.description);
	$("#" + which + "_Avatar").html("<img src=\"" + socialObject.avatar + "\" width=\"48\" height=\"48\" />");
	
	var post;
	var length = socialObject.posts.length
	var html = "";
	
	for (var i = 0; i < length; i ++)
	{
		post = socialObject.posts[i];
		
		//log("");
		//log(socialObject.name);
		//log(post.date);
		//log(post.message);
		
		html += "<div class=\"SocialPost\">";
		html += "	<div class=\"Spacer_10\"></div>";
		html += "	<div class=\"SocialName\">" + socialObject.name + "</div>";
		html += "	<div class=\"SocialDate\">" + post.date + "</div>";
		html += "	<div class=\"SocialMessage\">" + post.message + "</div>";
		html += "	<div class=\"Spacer_10\"></div>";
		html += "</div>";
		
		if (i < length - 1)
		{
			html += "<div class=\"hr\"></div>";
		}
	}
	
	$("#" + which + "_Content").html(html);
	
	var $scrollContent = $("#" + which + "_Content");
	var $scrollContainer = $("#" + which + "_Container");
	var $scroller = $("#" + which + "_Scroller");
	var $scrollBar = $("#" + which + "_ScrollBar");
	
	var percent = $scrollContainer.height() / $scrollContent.height();
	
	if ($scrollContent.height() > $scrollContainer.height())
	{
		var scrollBarHeight = Math.floor(percent * $scroller.height());
		
		scrollBarHeight = (scrollBarHeight < settings.MIN_SCROLLBAR_HEIGHT) ? settings.MIN_SCROLLBAR_HEIGHT : scrollBarHeight;
		
		$scroller.removeClass("Hidden");
		$scrollBar.height(scrollBarHeight);
		
		$scrollBar.data("topPosition", 0);
		$scrollBar.data("bottomPosition", $scroller.height() - scrollBarHeight);
		
		$scrollContainer.data("topPosition", 0);
		$scrollContainer.data("bottomPosition", $scrollContent.height() - $scrollContainer.height());
	}
	
	$("#" + which + "_Blanket").fadeOut(250, function(){$(this).addClass("Hidden");});
}

function initVideoPlayer()
{
	window.VideoPlayer = {};
	
	VideoPlayer.initialize = function()
	{
		VideoPlayer.$currentTime = $("#CurrentTime");
		VideoPlayer.$totalTime = $("#TotalTime");
		VideoPlayer.$progressBar = $("#ProgressBar");
		
		VideoPlayer.isPlaying = false;
		VideoPlayer.isPaused = false;
		VideoPlayer.isEnded = false;
		VideoPlayer.isMuted = false;
		
		if (parameters.isMuteOnMouseOut)
		{
			VideoPlayer.isSoundOn = false;
		}
		else
		{
			VideoPlayer.isSoundOn = true;
		}
		
		VideoPlayer.isFlashPlayerReady = false;
		VideoPlayer.isPlayOnFlashReady = false;
		
		VideoPlayer.isBeginFired = false;
		VideoPlayer.isQuartile1Fired = false;
		VideoPlayer.isQuartile2Fired = false;
		VideoPlayer.isQuartile3Fired = false;
		VideoPlayer.isQuartile4Fired = false;
		VideoPlayer.isCompleteFired = false;
		
		$("#VideoBigPlayButton").on("click", function(){VideoPlayer.play();});
		$("#ReplayButton").on("click", function(){VideoPlayer.replay();});
		$("#PlayPauseButton").on("click", function(){VideoPlayer.togglePlayPause();});
		$("#VolumeButton").on("click", function(){VideoPlayer.toggleMute();});
		
		if (settings.IS_FLASH_VIDEO)
		{
			log("Using Flash Video Player");
			
			if (parameters.isAutoplay)
			{
				VideoPlayer.isPlayOnFlashReady = true;
			}
		}
		else
		{
			log("Using HTML5 Video Player");
			
			VideoPlayer.videoElement = $("#VideoPlayer")[0];
			VideoPlayer.initEventListeners();
			
			if (parameters.isAutoplay)
			{
				VideoPlayer.play();
			}
		}
		
		if (!parameters.isAutoplay)
		{
			$("#VideoPosterImage").fadeIn(250);
			$("#VideoBigPlayButton").fadeIn(250);
		}
	}
	
	VideoPlayer.initEventListeners = function()
	{
		VideoPlayer.videoElement.addEventListener('loadstart', VideoPlayer.onLoadStart, false);
		VideoPlayer.videoElement.addEventListener('loadedmetadata', VideoPlayer.onLoadedMetaData, false);
		VideoPlayer.videoElement.addEventListener('loadeddata', VideoPlayer.onLoadedData, false);
		VideoPlayer.videoElement.addEventListener('timeupdate', VideoPlayer.onTimeUpdate, false);
		VideoPlayer.videoElement.addEventListener('playing', VideoPlayer.onPlaying, false);
		VideoPlayer.videoElement.addEventListener('play', VideoPlayer.onPlay, false);
		VideoPlayer.videoElement.addEventListener('pause', VideoPlayer.onPause, false);
		VideoPlayer.videoElement.addEventListener('ended', VideoPlayer.onEnded, false);
		VideoPlayer.videoElement.addEventListener('abort', VideoPlayer.onAbort, false);
		VideoPlayer.videoElement.addEventListener('canplay', VideoPlayer.onCanPlay, false);
		VideoPlayer.videoElement.addEventListener('canplaythrough', VideoPlayer.onCanPlayThrough, false);
		VideoPlayer.videoElement.addEventListener('durationchange', VideoPlayer.onDurationChange, false);
		VideoPlayer.videoElement.addEventListener('emptied', VideoPlayer.onEmptied, false);
		VideoPlayer.videoElement.addEventListener('error', VideoPlayer.onError, false);
		VideoPlayer.videoElement.addEventListener('ratechange', VideoPlayer.onRateChange, false);
		VideoPlayer.videoElement.addEventListener('readystatechange', VideoPlayer.onReadystateChange, false);
		VideoPlayer.videoElement.addEventListener('seeked', VideoPlayer.onSeeked, false);
		VideoPlayer.videoElement.addEventListener('seeking', VideoPlayer.onSeeking, false);
		VideoPlayer.videoElement.addEventListener('stalled', VideoPlayer.onStalled, false);
		VideoPlayer.videoElement.addEventListener('suspend', VideoPlayer.onSuspend, false);
		VideoPlayer.videoElement.addEventListener('volumechange', VideoPlayer.onVolumeChange, false);
		VideoPlayer.videoElement.addEventListener('waiting', VideoPlayer.onWaiting, false);
	}
	
	////////////////////////////////////////
	
	VideoPlayer.getCurrentTime = function()
	{
		if (settings.IS_FLASH_VIDEO)
		{
			if (VideoPlayer.isFlashPlayerReady && VideoPlayer.isFlashVideoReady)
			{
				return VideoPlayer.flashVideo.getCurrentTime();
			}
		}
		else
		{
			return VideoPlayer.videoElement.currentTime;
		}
	}
	
	VideoPlayer.setCurrentTime = function(s)
	{
		if (settings.IS_FLASH_VIDEO)
		{
			if (VideoPlayer.isFlashPlayerReady && VideoPlayer.isFlashVideoReady)
			{
				VideoPlayer.flashVideo.setCurrentTime(s);
			}
		}
		else
		{
			VideoPlayer.videoElement.currentTime = s;
		}
	}
	
	VideoPlayer.getDuration = function()
	{
		if (settings.IS_FLASH_VIDEO)
		{
			if (VideoPlayer.isFlashPlayerReady && VideoPlayer.isFlashVideoReady)
			{
				return VideoPlayer.flashVideo.getDuration();
			}
		}
		else
		{
			return VideoPlayer.videoElement.duration;
		}
	}
	
	VideoPlayer.play = function()
	{
		log("play()");
		
		if (settings.IS_FLASH_VIDEO)
		{
			if (VideoPlayer.isFlashPlayerReady && VideoPlayer.isFlashVideoReady)
			{
				VideoPlayer.flashVideo.playVideo();
			}
			else
			{
				VideoPlayer.isPlayOnFlashReady = true;
			}
		}
		else
		{
			return VideoPlayer.videoElement.play();
		}
	}
	
	VideoPlayer.replay = function()
	{
		log("replay()");
		
		VideoPlayer.setCurrentTime(0);
		VideoPlayer.play();
	}
	
	VideoPlayer.pause = function()
	{
		log("pause()");
		
		if (settings.IS_FLASH_VIDEO)
		{
			if (VideoPlayer.isFlashPlayerReady && VideoPlayer.isFlashVideoReady)
			{
				VideoPlayer.flashVideo.pauseVideo();
			}
		}
		else
		{
			VideoPlayer.videoElement.pause();
		}
	}
	
	VideoPlayer.togglePlayPause = function()
	{
		if (VideoPlayer.isPlaying)
		{
			VideoPlayer.pause();
		}
		else
		{
			VideoPlayer.play();
		}
	}
	
	VideoPlayer.mute = function()
	{
		log("mute()");
		
		VideoPlayer.isMuted = true;
		
		if (settings.IS_FLASH_VIDEO)
		{
			if (VideoPlayer.isFlashPlayerReady)
			{
				VideoPlayer.flashVideo.mute();
			}
		}
		else
		{
			$(VideoPlayer.videoElement).prop("muted", true);
		}
		
		$("#VolumeButton").removeClass("On").addClass("Off");
	}
	
	VideoPlayer.unMute = function()
	{
		log("unMute()");
		
		VideoPlayer.isMuted = false;
		
		if (settings.IS_FLASH_VIDEO)
		{
			if (VideoPlayer.isFlashPlayerReady)
			{
				VideoPlayer.flashVideo.unMute();
			}
		}
		else
		{
			$(VideoPlayer.videoElement).prop("muted", false);
		}
		
		$("#VolumeButton").removeClass("Off").addClass("On");
	}
	
	VideoPlayer.soundOff = function()
	{
		//log("soundOff()");
		
		VideoPlayer.isSoundOn = false;
		
		if (settings.IS_FLASH_VIDEO)
		{
			if (VideoPlayer.isFlashPlayerReady)
			{
				VideoPlayer.flashVideo.mute();
			}
		}
		else
		{
			$(VideoPlayer.videoElement).prop("muted", true);
		}
		
		$("#VolumeButton").removeClass("On").addClass("Off");
	}
	
	VideoPlayer.soundOn = function()
	{
		//log("soundOn()");
		
		VideoPlayer.isSoundOn = true;
		
		if (!VideoPlayer.isMuted)
		{
			if (settings.IS_FLASH_VIDEO)
			{
				if (VideoPlayer.isFlashPlayerReady)
				{
					VideoPlayer.flashVideo.unMute();
				}
			}
			else
			{
				$(VideoPlayer.videoElement).prop("muted", false);
			}
			
			$("#VolumeButton").removeClass("Off").addClass("On");
		}
	}
	
	VideoPlayer.toggleMute = function()
	{
		if (VideoPlayer.isMuted)
		{
			VideoPlayer.unMute();
		}
		else
		{
			VideoPlayer.mute();
		}
	}
	
	VideoPlayer.checkQuartile = function()
	{
		var currentTime = VideoPlayer.getCurrentTime();
		var duration = VideoPlayer.getDuration();
		
		if (!isNaN(currentTime) && !isNaN(duration) && duration > 0)
		{
			var p = currentTime / duration;
			
			if (p >= 0.25)
			{
				VideoPlayer.onQuartile(1);
			}
			
			if (p >= 0.5)
			{
				VideoPlayer.onQuartile(2);
			}
			
			if (p >= 0.75)
			{
				VideoPlayer.onQuartile(3);
			}
		}
	}
	
	////////////////////////////////////////
	
	VideoPlayer.onFlashPlayerReady = function()
	{
		log("onFlashPlayerReady()");
		
		VideoPlayer.isFlashPlayerReady = true;
		VideoPlayer.flashVideo = getFlashElement("FlashVideo");
		
		VideoPlayer.flashVideo.initializeVideo(parameters.video, parameters.videoWidth, (VideoPlayer.isSoundOn && !VideoPlayer.isMuted));
	}
	
	VideoPlayer.onFlashVideoReady = function()
	{
		log("onFlashVideoReady()");
		
		VideoPlayer.isFlashVideoReady = true;
		
		if (VideoPlayer.isPlayOnFlashReady)
		{
			VideoPlayer.play();
		}
	}
	
	VideoPlayer.onBegin = function()
	{
		if (!VideoPlayer.isBeginFired)
		{
			log("onBegin()");
			
			VideoPlayer.isBeginFired = true;
			VideoPlayer.logComScore();
		}
	}
	
	VideoPlayer.logComScore = function()
	{
		var comScoreBeacon = new Image();
		comScoreBeacon.src = parameters.csTracker;

		log("logComScore(" + parameters.csTracker + ")");
	}
	
	VideoPlayer.onQuartile = function(q)
	{
		switch (q)
		{
			case 1:
				if (!VideoPlayer.isQuartile1Fired)
				{
					log("onQuartile1()");

					VideoPlayer.isQuartile1Fired = true;
				}
				break;
			
			case 2:
				if (!VideoPlayer.isQuartile2Fired)
				{
					log("onQuartile2()");

					VideoPlayer.isQuartile2Fired = true;
				}
				break;
				
			case 3:
				if (!VideoPlayer.isQuartile3Fired)
				{
					log("onQuartile3()");

					VideoPlayer.isQuartile3Fired = true;
				}
				break;

			case 4:
				if (!VideoPlayer.isQuartile4Fired)
				{
					log("onQuartile4()");

					VideoPlayer.isQuartile4Fired = true;
				}
				break;
		}
	}
	
	VideoPlayer.onComplete = function()
	{
		if (!VideoPlayer.isCompleteFired)
		{
			log("onComplete()");

			VideoPlayer.isCompleteFired = true;
		}
	}
	
	VideoPlayer.onLoadStart = function(e)
	{
		log("onLoadStart()");
	}
	
	VideoPlayer.onLoadedMetaData = function(e)
	{
		//log("onLoadedMetaData()");
	}
	
	VideoPlayer.onLoadedData = function(e)
	{
		//log("onLoadedData()");
	}
	
	VideoPlayer.onTimeUpdate = function(e)
	{
		//log("onTimeUpdate()");

		var currentTime = VideoPlayer.getCurrentTime();
		var duration = VideoPlayer.getDuration();
		
		var x;
		
		if (!isNaN(currentTime) && !isNaN(duration) && duration > 0)
		{
			x = currentTime / duration;
			VideoPlayer.$currentTime.html(toDisplayTime(currentTime));
			VideoPlayer.$totalTime.html(toDisplayTime(duration));
		}
		else
		{
			x = 0;
			VideoPlayer.$currentTime.html("0:00");
			VideoPlayer.$totalTime.html("0:00");
		}

		VideoPlayer.$progressBar.width(x * 100 + "%");
		
		VideoPlayer.checkQuartile();
	}
	
	VideoPlayer.onPlaying = function(e)
	{
		VideoPlayer.onBegin();
		
		log("onPlaying()");
		
		VideoPlayer.isPlaying = true;
		VideoPlayer.isPaused = false;
		
		$("#PlayPauseButton").removeClass("Play").addClass("Pause");
		
		$("#VideoBigPlayButton").fadeOut(250);
		$("#VideoPosterImage").fadeOut(250);
		$("#VideoEndCopy").fadeOut(250);
		$("#VideoEndImage").fadeOut(250);
	}
	
	VideoPlayer.onPlay = function(e)
	{
		//log("onPlay()");
	}
	
	VideoPlayer.onPause = function(e)
	{
		//log("onPause()");
		
		VideoPlayer.isPlaying = false;
		VideoPlayer.isPaused = true;
		
		$("#PlayPauseButton").removeClass("Pause").addClass("Play");
	}
	
	VideoPlayer.onEnded = function(e)
	{
		VideoPlayer.onQuartile(4);
		VideoPlayer.onComplete();
		
		log("onEnded()");
		
		VideoPlayer.isPlaying = false;
		VideoPlayer.isPaused = true;
		
		$("#PlayPauseButton").removeClass("Pause").addClass("Play");
		
		$("#VideoPosterImage").fadeIn(250);
		$("#VideoEndCopy").fadeIn(250);
		$("#VideoEndImage").fadeIn(250);
	}
	
	VideoPlayer.onAbort = function(e)
	{
		log("onAbort()");
	}
	
	VideoPlayer.onCanPlay = function(e)
	{
		//log("onCanPlay()");
	}
	
	VideoPlayer.onCanPlayThrough = function(e)
	{
		//log("onCanPlayThrough()");
	}
	
	VideoPlayer.onDurationChange = function(e)
	{
		//log("onDurationChange()");
	}
	
	VideoPlayer.onEmptied = function(e)
	{
		//log("onEmptied()");
	}
	
	VideoPlayer.onError = function(e)
	{
		log("onError()");
	}
	
	VideoPlayer.onRateChange = function(e)
	{
		//log("onRateChange()");
	}
	
	VideoPlayer.onReadyStateChange = function(e)
	{
		//log("onReadyStateChange()");
	}
	
	VideoPlayer.onSeeked = function(e)
	{
		//log("onSeeked()");
	}
	
	VideoPlayer.onSeeking = function(e)
	{
		//log("onSeeking()");
	}
	
	VideoPlayer.onStalled = function(e)
	{
		//log("onStalled()");
	}
	
	VideoPlayer.onSuspend = function(e)
	{
		//log("onSuspend()");
	}
	
	VideoPlayer.onVolumeChange = function(e)
	{
		//log("onVolumeChange()");
	}
	
	VideoPlayer.onWaiting = function(e)
	{
		//log("onWaiting()");
	}
	
	VideoPlayer.initialize();
}

function getParameters()
{
	var q = this.location.search.substring(1);
	
	var va = q.split("&");
	var v;

	for (var i = 0;i < va.length;i ++) 
	{
		v = va[i].split("=");

		if (v[1])
		{
			parameters["" + v[0]] = unescape(v[1]);
		}
	}
}

function getConfig()
{
	if (parameters.config)
	{
		loadConfig();
	}
	else
	{
		finishInit();
	}
}

function loadConfig()
{
	var config = parameters.config;
	var configArray = parameters.config.split(".");
	var extension = configArray[configArray.length - 1];
	var type;
	
	log("Loading config: " + config);
	
	if (extension == "xml")
	{
		type = "xml";
	}
	else
	{
		type = "json";
	}
	
	configParameters.type = type;
	
	$.ajax({
		url: config,
		dataType: type,
		cache: false,
		success: function(data, textStatus, jqXHR){config_onLoad(data, textStatus, jqXHR);},
		error: function(jqXHR, textStatus, errorThrown){config_onLoad(jqXHR, textStatus, errorThrown);}
	});
}

function config_onLoad(data, textStatus, jqXHR)
{
	log("Config loaded<br/><br/>");
	
	if (configParameters.type == "xml")
	{
		var nodes = data.documentElement.childNodes;
		
		for (var i = 0; i < nodes.length; i ++)
		{
			if (nodes[i].childNodes[0])
			{
				configParameters[nodes[i].nodeName] = nodes[i].childNodes[0].nodeValue;
			}
		}
	}
	else
	{
		configParameters = data;
	}
	
	for (var i in configParameters)
	{
		configParameters[i] = unescape(configParameters[i]);
		
		if (parameters[i] === undefined)
		{
			parameters[i] = configParameters[i];
		}
	}
	
	logAllConfigParameters();
	
	finishInit();
}

function config_onError(jqXHR, textStatus, errorThrown)
{
	log("Error loading config: " + textStatus);
	
	finishInit();
}

function cleanClickURL()
{
	if (parameters.clickURL && parameters.clickURL.indexOf("&redir") != -1)
	{
		parameters.clickURL_tracker = parameters.clickURL.substring(0, parameters.clickURL.indexOf("&redir"));
		parameters.clickURL_link = unescape(parameters.clickURL.substring(parameters.clickURL.indexOf("&redir=") + 7));
	}
	else
	{
		parameters.clickURL_tracker = "";
		parameters.clickURL_link = parameters.clickURL;
	}
}

function buildURL(url, so)
{
	if (url == parameters.clickURL || !url)
	{
		url = parameters.clickURL_link;
	}
	
	var t = parameters.clickURL;
	
	if (t && t != "" && t != null && t.indexOf("&redir") != -1)
	{
		t = t.replace("&so=", "&noso=");
		t = t.replace("&redir=", "");
		t = t + "&so=" + so + "&redir=" + escape(url);
	}
	else
	{
		t = url;
	}
	
	return t;
}

function toDate(t)
{
	var d_t = t.split("T");
	var d_s = d_t[0].split("-");
	var t_s = d_t[1].split(":");
	var dt = new Date(d_s[0], d_s[1]-1, d_s[2], t_s[0], t_s[1], t_s[2].slice(0,2));
	
	var offset = new Date().getTimezoneOffset() * 60 * 1000;
	
	return dt.getTime() - offset;
}

function toDisplayTime(s)
{
	if (!s)
	{
		return "0:00";
	}
	else
	{
		s = Math.floor(s);
		
		var mm = Math.floor(s / 60);
		var ss = s % 60;
		
		if (ss < 10) 
		{
			ss = "0" + ss;
		}
		
		return mm + ':' + ss;
	}
}

function toDisplayDate(t)
{
	var date = new Date(t);
	//var timestamp = date.getTime();
	
	var m = settings.MONTH_ARRAY[date.getMonth()];
	var d = date.getDate();
	var h = date.getHours();
	var mm = date.getMinutes();
	var ampm = (h < 12) ? "am" : "pm";
	var postfix;

	if (h == 0)
	{
		h = 12;
	}
	else if (h > 12)
	{
		h -= 12;
	}

	if (mm < 10)
	{
		mm = "0" + mm;
	}

	switch (d)
	{
		case 1:
			postfix = "st";
			break;

		case 2:
			postfix = "nd";
			break;

		case 3:
			postfix = "rd";
			break;

		case 21:
			postfix = "st";
			break;

		case 22:
			postfix = "nd";
			break;

		case 23:
			postfix = "rd";
			break;

		case 31:
			postfix = "st";
			break;

		default:
			postfix = "th";
			break;
	}

	return m + " " + d + postfix + " at " + h + ":" + mm + ampm;
}

function addClickTag(src)
{
	if (parameters.mpuInput)
	{
		if (src.indexOf("?") == -1)
		{
			src += "?";
		}
		else
		{
			src += "&";
		}
		
		src += parameters.mpuInput;
	}
	else if (parameters.clickVarName)
	{
		if (src.indexOf("?") == -1)
		{
			src += "?";
		}
		else
		{
			src += "&";
		}
		
		src += parameters.clickVarName + "=" + escape(buildURL(parameters.clickURL, 15));
	}
	
	return src;
}

function clickThrough(url, so)
{
	url = buildURL(url, so);
	
	if (parameters.video)
	{
		VideoPlayer.pause();
	}
	
	window.open(url, parameters.ctsTarget);
}

function embedFlash(creative, div, id, width, height)
{
	var flashvars = {};
	var params = {};
	var attributes = {};

	params.wmode = "transparent";
	params.allowscriptaccess = "always";
	params.allowfullscreen = "true";

	attributes.id = id;
	attributes.name = id;

	swfobject.embedSWF(creative, div, width, height, "9.0.0", false, flashvars, params, attributes);
}

function getFlashElement(id)
{
    //if (navigator.appName.indexOf("Microsoft") != -1)
	if (window[id])
	{
        return window[id];
    }
	else if (document[id])
	{
        return document[id];
    }
	else
	{
		log("Cannot find flash element on page");
		return false;
	}
}

function uncover()
{
	$("#Ad_Blanket").fadeOut(250, function(){$(this).addClass("Hidden");});
}

function addDefault(name, d)
{
	if (parameters[name] === undefined)
	{
		parameters[name] = d;
	}
}

function toBoolean(v)
{
	if (v === "1" || v === 1 || v === "true" || v === true)
	{
		v = true;
	}
	else
	{
		v = false;
	}

	return v;
}

function initPrototypes()
{
	Object.keys = Object.keys || (function () {
	    var hasOwnProperty = Object.prototype.hasOwnProperty,
	        hasDontEnumBug = !{toString:null}.propertyIsEnumerable("toString"),
	        DontEnums = [
	            'toString',
	            'toLocaleString',
	            'valueOf',
	            'hasOwnProperty',
	            'isPrototypeOf',
	            'propertyIsEnumerable',
	            'constructor'
	        ],
	        DontEnumsLength = DontEnums.length;

	    return function (o) {
	        if (typeof o != "object" && typeof o != "function" || o === null)
	            throw new TypeError("Object.keys called on a non-object");

	        var result = [];
	        for (var name in o) {
	            if (hasOwnProperty.call(o, name))
	                result.push(name);
	        }

	        if (hasDontEnumBug) {
	            for (var i = 0; i < DontEnumsLength; i++) {
	                if (hasOwnProperty.call(o, DontEnums[i]))
	                    result.push(DontEnums[i]);
	            }
	        }

	        return result;
	    };
	})();
}

function htmlEncode(value)
{
	return $("<div/>").text(value).html();
}

function htmlDecode(value)
{
	return $("<div/>").html(value).text();
}

function logAllInputParameters()
{
	var output = "";
	var v;
	
	var keys = Object.keys(parameters);
	var length = keys.length;

	keys.sort();
	
	output += "<b><u>INPUT PARAMETERS:</u></b><br/>";
	
	for (var i = 0; i < keys.length; i ++)
	{
		if (parameters[keys[i]] == "")
		{
			v = "<font color=\"#003399\"><i>null</i></font>";
		}
		else
		{
			v = htmlEncode(parameters[keys[i]]);
		}
		
		output += "<font color='#0066FF'>" + keys[i] + "</font> = " + v + "<br/>";
	}
	
	output += "<br/>";
	
	log(output);
}

function logAllConfigParameters()
{
	var output = "";
	var v;
	
	var keys = Object.keys(configParameters);
	var length = keys.length;

	keys.sort();
	
	output += "<b><u>CONFIG PARAMETERS:</u></b><br/>";
	
	for (var i = 0; i < keys.length; i ++)
	{
		if (configParameters[keys[i]] == "")
		{
			v = "<font color=\"#003399\"><i>null</i></font>";
		}
		else
		{
			v = htmlEncode(configParameters[keys[i]]);
		}
		
		output += "<font color='#0066FF'>" + keys[i] + "</font> = " + v + "<br/>";
	}
	
	output += "<br/>";
	
	log(output);
}

function logAllParameters()
{
	var output = "";
	var v;
	
	var keys = Object.keys(parameters);
	var length = keys.length;

	keys.sort();
	
	output += "<b><u>PARAMETERS:</u></b><br/>";
	
	for (var i = 0; i < keys.length; i ++)
	{
		if (parameters[keys[i]] == "")
		{
			v = "<font color=\"#003399\"><i>null</i></font>";
		}
		else
		{
			v = htmlEncode(parameters[keys[i]]);
		}
		
		output += "<font color='#0066FF'>" + keys[i] + "</font> = " + v + "<br/>";
	}
	
	output += "<br/>";
	
	log(output);
}

function log(msg)
{
	if (settings.IS_DEBUG_MODE)
	{
		var t = new Date();
		var h = t.getHours();
		var m = t.getMinutes();
		var s = t.getSeconds();
		var ms = t.getMilliseconds();
	
		h =  (h / 100).toFixed(2).toString().slice(2);
		m =  (m / 100).toFixed(2).toString().slice(2);
		s =  (s / 100).toFixed(2).toString().slice(2);
		ms = (ms / 1000).toFixed(3).toString().slice(2);
	
		var consoleOutput = h + ":" + m + ":" + s + " " + ms + "     " + msg;
		var logOutput = "<div class=\"LogTimestamp\">" + h + ":" + m + ":" + s + " " + ms + "</div><div class=\"LogMessage\">" + msg + "</div>";
		
		if (window.console)
		{
			//console.log(consoleOutput);
		}
	
		debug.log += logOutput;
	}
}